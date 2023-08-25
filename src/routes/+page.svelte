<script lang="ts">
    import {onMount} from "svelte";
    import {MemoDexie} from "/src/routes/collections/table/Memo/data/source/dexiejs/object.ts";
    import {Memo} from "/src/routes/collections/table/Memo/domain/model/model.ts";


    let memos: any[] = []
    onMount(async () => {
        memos = await new MemoDexie().getAllMemo()
        console.log(memos)
    });

    function addMemo() {
        let memo = new Memo()
        window.location.href = `/${memo.DocId}`
    }
</script>

<!-- 배경색 및 글자색 설정 -->
<div class="bg-gray-800 text-white min-h-screen pt-16">
    <!-- 최대 너비 800px로 제한 및 중앙 정렬 -->
    <div class="max-w-screen-md mx-auto px-4">

        <!-- 헤더: 큰 글씨와 + 버튼 -->
        <div class="flex items-center space-x-4 py-4">
            <h1 class="text-5xl font-bold">Junes Note</h1>
            <button
                    class="bg-white text-gray-800 p-2 rounded-full hover:bg-gray-500 w-8 h-8 flex items-center justify-center"
                    on:click={addMemo}>
                +
            </button>
        </div>

        <!-- 부제목 -->
        <h2 class="text-2xl opacity-60 mt-4 mb-10">Taking notes while we learn.</h2>

        <!-- 메모 목록 -->

        {#if memos.length !== 0}
            <ul>
                {#each memos as memo}
                    {#if memo.Title !== '' && memo.Content !== ''}
                        <li class="py-2 text-xl hover:bg-gray-700 cursor-pointer"
                            on:click={() => window.location.href = `/${memo.DocId}`}>{memo.Title}</li>
                    {/if}
                {/each}
            </ul>
        {/if}

    </div>
</div>
