import { NextRequest, NextResponse } from 'next/server';
import { v2 as cloudinary } from 'cloudinary';
import { createHash } from 'crypto';

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const folderName = 'base-org-uploads';

type CloudinaryMediaUrlParams = {
  media: string;
  width: number;
};

function generateAssetId(media: string): string {
  return createHash('md5').update(media).digest('hex');
}

async function checkAssetExists(assetId: string): Promise<string | boolean> {
  try {
    const response = await cloudinary.api.resources_by_ids([`${folderName}/${assetId}`]);
    if (response && response.resources.length > 0) {
      const image = response.resources[0];
      return image.secure_url;
    } else {
      return false;
    }
  } catch (error) {
    // For other errors, log and assume the asset doesn't exist
    console.error('Error checking if asset exists in Cloudinary:', error);
    return false;
  }
}

async function uploadToCloudinary(media: string, width: number) {
  try {
    const assetId = generateAssetId(media);

    // Otherwise upload it to group
    const result = await cloudinary.uploader.upload(media, {
      public_id: assetId,
      folder: folderName,
      transformation: {
        width: width * 2,
      },
    });

    return result;
  } catch (error) {
    console.log('Failed to upload asset', error);
    return false;
  }
}

async function getCloudinaryMediaUrl({ media, width }: CloudinaryMediaUrlParams) {
  // Asset idea based on URL
  const assetId = generateAssetId(media);

  // Return the asset if already uploaded
  const existingAssetUrl = await checkAssetExists(assetId);
  if (existingAssetUrl) {
    return existingAssetUrl;
  }

  const cloudinaryUpload = await uploadToCloudinary(media, width);

  if (cloudinaryUpload) {
    return cloudinaryUpload.secure_url;
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const { media, width } = body as unknown as CloudinaryMediaUrlParams;

    if (!media || !width) {
      return NextResponse.json({ error: 'Missing required parameters' }, { status: 400 });
    }

    const cloudinaryUrl = await getCloudinaryMediaUrl({ media, width });

    return NextResponse.json({ url: cloudinaryUrl });
  } catch (error) {
    console.error('Error processing Cloudinary URL:', error);
    return NextResponse.json({ error: 'Failed to process Cloudinary URL' }, { status: 500 });
  }
}
