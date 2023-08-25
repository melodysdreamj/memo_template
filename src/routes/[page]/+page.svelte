<script lang="ts">
    import {onMount} from "svelte";
    import {MemoDexie} from "/src/routes/collections/table/Memo/data/source/dexiejs/object.ts";
    import {Memo} from "/src/routes/collections/table/Memo/domain/model/model.ts";

    let memoTitle = ""; // 메모 제목입니다.
    let memoContent = ""; // 메모 내용입니다.
    export let data
    console.log(data.pathname)

    let memoObj: any = null
    onMount(async () => {
        memoObj = await new MemoDexie().get(data.pathname ?? '')
        if (memoObj === null) {
            memoObj = new Memo()
        } else {
            memoTitle = memoObj.Title
            memoContent = memoObj.Contents
        }
    })

    async function save() {
        if (memoObj !== null || memoTitle !== "" || memoContent !== "") {
            memoObj.Title = memoTitle;
            memoObj.Contents = memoContent;
            memoObj.UpdateMillis = Date.now();

            // 여기에서 필요한 저장 로직을 추가하세요. 예를 들어:
            await new MemoDexie().upsert(memoObj)

            window.location.href = '/'

        }
    }

</script>

<!-- 배경색 및 글자색 설정 -->
<div class="bg-gray-900 text-white min-h-screen pt-16">
    <!-- 최대 너비 800px로 제한 및 중앙 정렬 -->
    <div class="max-w-screen-md mx-auto px-4 sm:px-6">

        {#if memoObj !== null}
            <!-- 헤더: 메모 제목과 Save 버튼 -->
            <div
                    class="flex flex-col  sm:flex-row items-start sm:items-center justify-between space-y-2 sm:space-y-0 sm:space-x-4 py-4 ">
                <!-- 모바일에서 상단에 배치된 Save 버튼 -->
                <button
                        class="sm:hidden text-xs text-white bg-gray-700 border-2 border-white px-2 py-1 rounded-full hover:bg-white hover:text-gray-900 w-24 text-center mb-2 mx-3"
                        on:click={save}>
                    Save
                </button>

                <input bind:value={memoTitle}
       class="block text-3xl sm:text-5xl font-bold bg-transparent border-none outline-none w-full box-border pl-3"
       placeholder="제목을 입력하세요."/>
                <!-- 태블릿/데스크탑에서 오른쪽에 배치된 Save 버튼 -->
                <button
                        class="hidden sm:block text-sm sm:text-base text-white bg-gray-700 border-2 sm:border-4 border-white px-2 sm:px-4 py-1 sm:py-2 rounded-full hover:bg-white hover:text-gray-900"
                        on:click={save}>
                    Save
                </button>
            </div>

            <!-- 메모 내용 -->
            <div class="mt-6 sm:mx-4 text-xl sm:text-xl">
    <textarea bind:value={memoContent} placeholder="내용을 입력하세요."
              class="w-full h-60 bg-gray-900 text-white border-none outline-none resize-none box-border pl-3"></textarea>
</div>
        {/if}

    </div>
</div>
