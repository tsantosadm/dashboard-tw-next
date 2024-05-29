'use client'
import * as SelectPrimitive from '@radix-ui/react-select'
import { Check, ChevronDown } from 'lucide-react'

export interface SelectProps {}

export function Select(){
    return (
        <SelectPrimitive.Root>
        <SelectPrimitive.Trigger className='flex h-11 w-full items-center justify-between gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm data-[placeholder]:text-zinc-600'>
          <SelectPrimitive.Value placeholder='Select a country...' className='text-black' />
          <SelectPrimitive.Icon>
            <ChevronDown className='h-5 w-5 text-zinc-5000' />
          </SelectPrimitive.Icon> 
        </SelectPrimitive.Trigger>
        <SelectPrimitive.Portal>
            <SelectPrimitive.Content side='bottom' sideOffset={6} position='popper' className='z-10 rounded-lg border border-zinc-200 bg-white w-[--radix-select-trigger-width] overflow-hidden'>
                <SelectPrimitive.Viewport>
                    <SelectPrimitive.Item value='BR' className='flex justify-between items-center gap-2 px-3 py-2.5 data-[highlighted]:bg-zinc-50'>
                        <SelectPrimitive.ItemText className='text-black'>
                            Brazil
                        </SelectPrimitive.ItemText>
                        <SelectPrimitive.ItemIndicator>
                            <Check className='h-4 w-4 text-violet-500' />
                        </SelectPrimitive.ItemIndicator>
                    </SelectPrimitive.Item>
                    <SelectPrimitive.Item value='EN' className='flex justify-between items-center gap-2 px-3 py-2.5 data-[highlighted]:bg-zinc-50'>
                        <SelectPrimitive.ItemText className='text-black'>
                            United States
                        </SelectPrimitive.ItemText>
                        <SelectPrimitive.ItemIndicator>
                            <Check className='h-4 w-4 text-violet-500' />
                        </SelectPrimitive.ItemIndicator>
                    </SelectPrimitive.Item>
                </SelectPrimitive.Viewport>
            </SelectPrimitive.Content>
        </SelectPrimitive.Portal>
       </SelectPrimitive.Root>
    )
}