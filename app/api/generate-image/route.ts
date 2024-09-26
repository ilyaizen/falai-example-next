import { NextResponse } from 'next/server';
import * as fal from '@fal-ai/serverless-client';

fal.config({
  credentials: process.env.FAL_KEY,
});

export async function POST(request: Request) {
  try {
    const { prompt } = await request.json();

    const result = await fal.subscribe('fal-ai/fast-sdxl', {
      input: {
        prompt,
      },
    });

    return NextResponse.json({ imageUrl: result.images[0].url });
  } catch (error) {
    console.error('Error generating image:', error);
    return NextResponse.json({ message: 'Error generating image' }, { status: 500 });
  }
}
