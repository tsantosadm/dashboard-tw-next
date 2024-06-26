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
      <h1 className="text-3xl font-medium text-zinc-900 dark:text-zinc-100">Settings</h1>

      <SettingsTabs />

      <div className='mt-6 flex flex-col'>
        <div className='flex flex-col lg:flex-row lg:items-center gap-4 items-center justify-between pb-5 border-b border-zinc-200 dark:border-zinc-700'>

          <div className='space-y-1'>
            <h2 className='text-lg font-medium text-zinc-900 dark:text-zinc-100'>Person info</h2>
            <span className='text-sm text-zinc-500 dark:text-zinc-400'>
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

        <form id='settings' className='mt-6 flex flex-col w-full gap-5 divide-y divide-zinc-200 dark:divide-zinc-700' >
          <div className='lg:grid lg:grid-cols-form gap-3 flex flex-col'>
            <label htmlFor='firstName' className='text-sm font-medium text-zinc-700 dark:text-zinc-300'>
              Name
            </label>
            <div className='lg:grid gap-6 lg:grid-cols-2 flex flex-col'>
              <Input.InputRoot>
                <Input.InputControl id='firstName' defaultValue='Neo' />
              </Input.InputRoot>

              <div className='flex flex-col gap-3 lg:block'>
                <label htmlFor='lastName' className='text-sm font-medium text-zinc-700 lg:sr-only dark:text-zinc-300'>
                  Last name
                </label>

                <Input.InputRoot>
                  <Input.InputControl id='lastName' defaultValue='Tecnologia' />
                </Input.InputRoot>
              </div>

            </div>
          </div>

          <div className='flex flex-col lg:grid lg:grid-cols-form gap-3 pt-5'>
            <label htmlFor='email' className='text-sm font-medium text-zinc-700 dark:text-zinc-300'>
              Email address
            </label>
            <Input.InputRoot>
              <Input.InputPrefix>
                <Mail />
              </Input.InputPrefix>
              <Input.InputControl id='email' type='email' defaultValue='talisson@neotecnologia.com.br' />
            </Input.InputRoot>
          </div>

          <div className='lg:grid lg:grid-cols-form gap-3 pt-5 flex flex-col'>
            <label htmlFor='photo' className='text-sm font-medium text-zinc-700 dark:text-zinc-300'>
              Your photo
              <span className='mt-0.5 block text-sm font-normal text-zinc-500'>This will be displayed on your profile</span>
            </label>
            <FileInput.Root className='flex flex-col lg:item-start gap-5 lg:flex-row'>
              <FileInput.ImagePreview />
              <FileInput.Trigger />
              <FileInput.Control />
            </FileInput.Root>
          </div>

          <div className='lg:grid lg:grid-cols-form gap-3 pt-5 flex flex-col'>
            <label htmlFor='role' className='text-sm font-medium text-zinc-700 dark:text-zinc-300'>
              Role
            </label>
            <Input.InputRoot>
              <Input.InputControl id='role' defaultValue='CTO' />
            </Input.InputRoot>
          </div>

          <div className='lg:grid lg:grid-cols-form gap-3 pt-5 flex flex-col'>
            <label htmlFor='country' className='text-sm font-medium text-zinc-500 dark:text-zinc-300'>
              Country
            </label>
            <Select placeholder='Select a country...' >
              <SelectItem value='br' text='Brazil' />
              <SelectItem value='us' text='United States' />
            </Select>
          </div>

          <div className='lg:grid lg:grid-cols-form gap-3 pt-5 flex flex-col'>
            <label htmlFor='timezone' className='text-sm font-medium text-zinc-500 dark:text-zinc-300'>
              Timezone
            </label>
            <Select placeholder='Select a timezone...' >
              <SelectItem value='utc-8' text='Pacific Standard Time (UTC-08:00)' />
              <SelectItem value='utc-3' text='America São Paulo (UTC-03:00)' />
            </Select>
          </div>

          <div className='lg:grid lg:grid-cols-form gap-3 pt-5 flex flex-col'>
            <label htmlFor='bio' className='text-sm font-medium text-zinc-700 dark:text-zinc-300'>
              Bio
              <span className='mt-0.5 block text-sm font-normal text-zinc-500'>
                Write a short introduction
              </span>
            </label>
            <div className='space-y-3'>
              <div className='lg:grid gap-3 lg:grid-cols-2 flex flex-col'>
                <Select placeholder='' defaultValue='normal'>
                  <SelectItem value='normal' text='Normal Text' />
                  <SelectItem value='md' text='Markdown' />
                </Select>

                <div className='flex items-center gap-1'>
                  <Button type='button' variant='ghost'>
                    <Bold className='h-4 w-4 text-zinc-500' strokeWidth={3} />
                  </Button>
                  <Button type='button' variant='ghost'>
                    <Italic className='h-4 w-4 text-zinc-500' strokeWidth={3} />
                  </Button>
                  <Button type='button' variant='ghost'>
                    <Link className='h-4 w-4 text-zinc-500' strokeWidth={3} />
                  </Button>
                  <Button type='button' variant='ghost'>
                    <List className='h-4 w-4 text-zinc-500' strokeWidth={3} />
                  </Button>
                  <Button type='button' variant='ghost'>
                    <ListOrdered className='h-4 w-4 text-zinc-500' strokeWidth={3} />
                  </Button>
                </div>
              </div>
              <TextArea id='bio'
                defaultValue={'Engenheiro de Software LATAM experiente com 5 anos de experiência comprovada em impulsionar o crescimento da marca e melhorar as estratégias de desenvolvimento. Reconhecido por liderar equipes para execução eficiente de projetos, alcançando os melhores resultados. Proficiente em tecnologias diversas para otimização de projetos.'}
              />
            </div>
          </div>

          <div className='lg:grid lggrid-cols-form flex flex-col gap-3 pt-5'>
            <label htmlFor='projects' className='text-sm font-medium text-zinc-700 dark:text-zinc-300'>
              Portfolio projects
              <span className='mt-0.5 block text-sm font-normal text-zinc-500 dark:text-zinc-300'>
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
