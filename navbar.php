
<nav class="fixed flex flex-row bg-gray-200 h-16 w-full py-2 px-24 justify-center items-center md:justify-normal gap-10">
    <div class="flex flex-row gap-4 justify-center items-center w-[20em]">
        <img class="w-[3em]" src="Assets/Images/logo.png" alt="">
        <h2 class="font-bold text-xl text-[#0e3fe1]">Chat App</h2>
    </div>

    <ul class="flex-row justify-center items-center px-6 w-auto hidden md:flex gap-24 font-normal">
        <li class="cursor-progress">Home</li>
        <li class="cursor-progress">product</li>
        <li class="cursor-pointer text-[#3994f0]">Chat</li>
        <li class="cursor-progress">More</li>
    </ul>
    <div class="items-center justify-center hidden md:flex">
        <div class="rounded-lg bg-gray-200">
            <div class="flex">
                <div
                    class="flex w-10 items-center justify-center rounded-tl-lg rounded-bl-lg bg-white p-5">
                    <svg viewBox="0 0 20 20" aria-hidden="true"
                        class="pointer-events-none absolute w-5 fill-gray-500 transition">
                        <path
                            d="M16.72 17.78a.75.75 0 1 0 1.06-1.06l-1.06 1.06ZM9 14.5A5.5 5.5 0 0 1 3.5 9H2a7 7 0 0 0 7 7v-1.5ZM3.5 9A5.5 5.5 0 0 1 9 3.5V2a7 7 0 0 0-7 7h1.5ZM9 3.5A5.5 5.5 0 0 1 14.5 9H16a7 7 0 0 0-7-7v1.5Zm3.89 10.45 3.83 3.83 1.06-1.06-3.83-3.83-1.06 1.06ZM14.5 9a5.48 5.48 0 0 1-1.61 3.89l1.06 1.06A6.98 6.98 0 0 0 16 9h-1.5Zm-1.61 3.89A5.48 5.48 0 0 1 9 14.5V16a6.98 6.98 0 0 0 4.95-2.05l-1.06-1.06Z">
                        </path>
                    </svg>
                </div>
                <input type="text" class="w-full max-w-[160px] bg-white pl-2 text-base font-semibold outline-none hover:cursor-progress"
                    placeholder="" id="">
                <input type="button" value="Search"
                    class="bg-[#0e3fe1] p-2 rounded-tr-lg rounded-br-lg text-white font-semibold hover:bg-[#3994f0] cursor-progress transition-colors">
            </div>
        </div>
    </div>

</nav>
