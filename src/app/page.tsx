import SettingsTabs from '@/components/SettingsTabs';
import * as Input from "@/components/Input"
import { Mail } from 'lucide-react';
import * as FileInput from '@/components/Form/FileInput';

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-medium text-zinc-900">Settings</h1>

      <SettingsTabs />

      <div className='mt-6 flex flex-col'>
        <div className='flex items-center justify-between pb-5 border-b border-zinc-200'>
          <div className='space-y-1'>
            <h2 className='text-lg font-medium text-zinc-900'>Person info</h2>
            <span className='text-sm text-zinc-500'>
              Update your photo and personal details here
            </span>
          </div>
          <div className='flex items-center gap-2'>
            <button type='button'
              className='rounded-lg border border-zinc-300 px-4 py-2 text-sm font-semibold text-zinc-700 shadow-sm hover:bg-zinc-50'>
              Cancel
            </button>
            <button type='submit' form='settings' className='rounded-lg bg-violet-600 px-4 py-2 font-semibold text-white shadow-ms hover:bg-violet-700'>
              Save
            </button>
          </div>
        </div>

        <form id='settings' className='mt-6 flex flex-col w-full gap-5 divide-y divide-zinc-200' >
          <div className='grid grid-cols-form gap-3'>
            <label htmlFor='firstName' className='text-sm font-medium text-zinc-700'>
              Name
            </label>
            <div className='grid gap-6 grid-cols-2'>
              <Input.InputRoot>
                <Input.InputControl id='firstName' defaultValue='Neo' />
              </Input.InputRoot>

              <Input.InputRoot>
                <Input.InputControl defaultValue='Tecnologia' />
              </Input.InputRoot>
            </div>
          </div>

          <div className='grid grid-cols-form gap-3 pt-5'>
            <label htmlFor='email' className='text-sm font-medium text-zinc-700'>
              Email address
            </label>
            <Input.InputRoot>
              <Input.InputPrefix>
                <Mail />
              </Input.InputPrefix>
              <Input.InputControl id='email' type='email' defaultValue='talisson@neotecnologia.com.br' />
            </Input.InputRoot>
          </div>

          <div className='grid grid-cols-form gap-3 pt-5'>
            <label htmlFor='photo' className='text-sm font-medium text-zinc-700'>
              Your photo
              <span className='mt-0.5 block text-sm font-normal text-zinc-500'>This will be displayed on your profile</span>
            </label>


            <FileInput.Root className='flex item-start gap-5'>
              <FileInput.ImagePreview />
              <FileInput.Trigger />
              <FileInput.Control />
            </FileInput.Root>



          </div>

          <div className='grid grid-cols-form gap-3 pt-5'>
            <label htmlFor='role' className='text-sm font-medium text-zinc-700'>
              Role
            </label>
            <Input.InputRoot>
              <Input.InputControl id='role' defaultValue='CTO' />
            </Input.InputRoot>
          </div>

          <div className='grid grid-cols-form gap-3 pt-5'>
            <label htmlFor='country' className='text-sm font-medium text-zinc-500'>
              Country
            </label>
            <div></div>
          </div>

          <div className='grid grid-cols-form gap-3 pt-5'>
            <label htmlFor='timezone' className='text-sm font-medium text-zinc-500'>
              Timezone
            </label>
          </div>

          <div className='grid grid-cols-form gap-3 pt-5'>
            <label htmlFor='bio' className='text-sm font-medium text-zinc-700'>
              Bio
              <span className='mt-0.5 block text-sm font-normal text-zinc-500'>
                Write a short introduction
              </span>
            </label>
            <div></div>
          </div>

          <div className='grid grid-cols-form gap-3 pt-5'>
            <label htmlFor='projects' className='text-sm font-medium text-zinc-700'>
              Portfolio projects
              <span>
                Share a few snippets of your work.
              </span>
            </label>
            <FileInput.Root>
              <FileInput.Trigger />
              <FileInput.Control multiple />
            </FileInput.Root>
          </div>

          <div className='flex items-center justify-end gap-2 pt-5'>
            <button type='button' className='rounded-lg border-zinc-300 px-4 py-2 text-sm font-semibold text-zinc-700 shadow-sm hover:bg-zinc-50'>
              Cancel
            </button>
            <button type='button' className='rounded-lg bg-violet-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-violet-700'>
              Save
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
