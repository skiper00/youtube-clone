<template>
    <div class="text-white px-[3px] text-[10px]">
        <div class="mt-[4px] w-full">
            <div v-for="item in list" :key="item.id"
                class="flex flex-col py-[12px] px-[2px] rounded-[10px] leading-4 items-center hover:bg-[#272727]">
                <Icon class="w-6 h-6" :icon="item.path" />
                <span class="text-[9px]">{{ item.name }}</span>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { Icon } from '@iconify/vue';

const list: Array<{ id: number, name: string, path: string }> = [
    { id: 1, name: 'Главная', path: 'codicon:home' },
    { id: 2, name: 'История', path: 'proicons:history' },
    { id: 3, name: 'Плейлисты', path: 'solar:playlist-bold' },
    { id: 4, name: 'Понравившиеся', path: 'uiw:like-o' },
]
</script>
