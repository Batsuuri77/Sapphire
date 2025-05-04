import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

const s3 = new S3Client({
  region: process.env.S3_REGION!,
  credentials: {
    accessKeyId: process.env.S3_ACCESS_KEY!,
    secretAccessKey: process.env.S3_SECRET_ACCESS_KEY!,
  },
});

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const fileName = searchParams.get("file");
  const fileType = searchParams.get("type");

  if (!fileName || !fileType) {
    return new Response("Missing file name or type", { status: 400 });
  }

  const command = new PutObjectCommand({
    Bucket: process.env.S3_BUCKET_NAME!,
    Key: fileName,
    ContentType: fileType,
    ACL: "public-read",
  });

  const url = await getSignedUrl(s3, command, { expiresIn: 60 });

  return Response.json({ url });
}
