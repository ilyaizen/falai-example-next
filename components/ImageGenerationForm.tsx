'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Loader2 } from 'lucide-react';
import { Form, FormControl, FormField, FormItem, FormLabel } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import * as fal from '@fal-ai/serverless-client';

// Configure fal client (you should use environment variables for the API key)
fal.config({
  credentials: process.env.NEXT_PUBLIC_FAL_KEY,
});

type FormData = {
  prompt: string;
};

export function ImageGenerationForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const form = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setIsLoading(true);
    try {
      const result = await fal.subscribe('fal-ai/fast-sdxl', {
        input: {
          prompt: data.prompt,
        },
      });
      setGeneratedImage(result.images[0].url);
    } catch (error) {
      console.error('Error generating image:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="prompt"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Image Prompt</FormLabel>
              <FormControl>
                <Input placeholder="Enter your image prompt" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <Button type="submit" disabled={isLoading}>
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Generating...
            </>
          ) : (
            'Generate Image'
          )}
        </Button>
      </form>
      {generatedImage && (
        <div className="mt-8">
          <img src={generatedImage} alt="Generated image" className="rounded-lg shadow-lg" />
        </div>
      )}
    </Form>
  );
}
