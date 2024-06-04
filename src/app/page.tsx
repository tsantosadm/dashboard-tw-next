import SettingsTabs from '@/components/SettingsTabs';
import { Bold, Italic, Link, List, ListOrdered, LogOut, Mail } from 'lucide-react';
import * as Input from "@/components/Input"
import * as FileInput from '@/components/Form/FileInput';
import { SelectItem } from '@/components/Form/Select/SelectItem';
import { Select } from '@/components/Form/Select';
import { TextArea } from '@/components/Form/TextArea';
import { Button } from '@/components/Button';


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
            <Button variant='outline' type='button' form='settings'>
              Cancel
            </Button>
            <Button variant='primary' type='button' form='settings' >
              Save
            </Button>
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
            <Select placeholder='Select a country...' >
              <SelectItem value='br' text='Brazil' />
              <SelectItem value='us' text='United States' />
            </Select>
          </div>

          <div className='grid grid-cols-form gap-3 pt-5'>
            <label htmlFor='timezone' className='text-sm font-medium text-zinc-500'>
              Timezone
            </label>
            <Select placeholder='Select a timezone...' >
              <SelectItem value='utc-8' text='Pacific Standard Time (UTC-08:00)' />
              <SelectItem value='utc-3' text='America São Paulo (UTC-03:00)' />
            </Select>
          </div>

          <div className='grid grid-cols-form gap-3 pt-5'>
            <label htmlFor='bio' className='text-sm font-medium text-zinc-700'>
              Bio
              <span className='mt-0.5 block text-sm font-normal text-zinc-500'>
                Write a short introduction
              </span>
            </label>
            <div className='space-y-3'>
              <div className='grid gap-3 grid-cols-2'>
                <Select placeholder='' defaultValue='normal'>
                  <SelectItem value='normal' text='Normal Text' />
                  <SelectItem value='md' text='Markdown' />
                </Select>

                <div className='flex items-center gap-1'>
                  <button type='button' className='rounded-md p-2 hover:bg-zinc-50'>
                    <Bold className='h-4 w-4 text-zinc-500' strokeWidth={3} />
                  </button>
                  <button type='button' className='rounded-md p-2 hover:bg-zinc-50'>
                    <Italic className='h-4 w-4 text-zinc-500' strokeWidth={3} />
                  </button>
                  <button type='button' className='rounded-md p-2 hover:bg-zinc-50'>
                    <Link className='h-4 w-4 text-zinc-500' strokeWidth={3} />
                  </button>
                  <button type='button' className='rounded-md p-2 hover:bg-zinc-50'>
                    <List className='h-4 w-4 text-zinc-500' strokeWidth={3} />
                  </button>
                  <button type='button' className='rounded-md p-2 hover:bg-zinc-50'>
                    <ListOrdered className='h-4 w-4 text-zinc-500' strokeWidth={3} />
                  </button>
                </div>
              </div>
              <TextArea id='bio'
                defaultValue={'Engenheiro de Software LATAM experiente com 5 anos de experiência comprovada em impulsionar o crescimento da marca e melhorar as estratégias de desenvolvimento. Reconhecido por liderar equipes para execução eficiente de projetos, alcançando os melhores resultados. Proficiente em tecnologias diversas para otimização de projetos.'} 
              />
            </div>
          </div>

          <div className='grid grid-cols-form gap-3 pt-5'>
            <label htmlFor='projects' className='text-sm font-medium text-zinc-700'>
              Portfolio projects
              <span className='mt-0.5 block text-sm font-normal text-zinc-500'>
                Share a few snippets of your work.
              </span>
            </label>
            <FileInput.Root>
              <FileInput.Trigger />
              <FileInput.FileList />
              <FileInput.Control multiple />
            </FileInput.Root>
          </div>

          <div className='flex items-center justify-end gap-2 pt-5'>
            <Button variant='outline' type='button' form='settings'>
               Cancel
            </Button>
            <Button variant='primary' type='button' form='settings' >
              Save
            </Button>
          </div>
        </form>
      </div>
    </>
  );
}
