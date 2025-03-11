document.addEventListener("DOMContentLoaded", function () {
    console.log("JavaScript is working!");
    const audioList = document.querySelector(".audio-list");

    // قايمة اللينكات من Google Drive (محولة للشكل المباشر)
    const audioLinks = [
        "https://drive.google.com/uc?export=download&id=1oem1NoKiwfsLzQXIOl57dNUN_GCDnsx2", // Pista1
        "https://drive.google.com/uc?export=download&id=1w11zy_mfbbfGkAv1fx71W9LsM9NeaO3U", // Pista2
        "https://drive.google.com/uc?export=download&id=1xVPa0iHc_veBfF3daABHwCKAW1Jj3v1q", // Pista3
        "https://drive.google.com/uc?export=download&id=11tUKACUVYeOU7PfZfbVEnEX_eZWjCzur", // Pista4
        "https://drive.google.com/uc?export=download&id=1IWoYESTHCSdz17UMLDY-gKmFKLgwQf8W", // Pista5
        "https://drive.google.com/uc?export=download&id=1Ry3ozbUhJZCg_sG3NFPjMuXwHPV6v-wD", // Pista6
        "https://drive.google.com/uc?export=download&id=1G6NVGgOmxecoNLtNd2xNFpECT0IQwl8X", // Pista7
        "https://drive.google.com/uc?export=download&id=194uSZlinXg6_osu9HXOYwpFZK5pEAi0B", // Pista8
        "https://drive.google.com/uc?export=download&id=11rubYjL2uI76ndCBEXgFhHwAbG9kOv5M", // Pista9
        "https://drive.google.com/uc?export=download&id=1z-cLZ5i0qgSUQZaRQWdU_8DvKEawatDH", // Pista10
        "https://drive.google.com/uc?export=download&id=16xY0uzmjkbhwGOH2FS6YBkKFsuvPKAw7", // Pista11
        "https://drive.google.com/uc?export=download&id=1B-ndS01u9MHlrx4vcyOqxvq6ilwcsikA", // Pista12
        "https://drive.google.com/uc?export=download&id=1WVi-BwusiYm3O459xYnXSTI4y3cryQ3t", // Pista13
        "https://drive.google.com/uc?export=download&id=1EDSlkL7m4bf7J2UJez0pGgoEXGhavpUN", // Pista14
        "https://drive.google.com/uc?export=download&id=1IhNtRrguCwCZe3gKQ-WX-KxE_l2Ie827", // Pista15
        "https://drive.google.com/uc?export=download&id=1R9BTnZ16wv9Urj5ItiTR52OOyfhPgQb5", // Pista16
        "https://drive.google.com/uc?export=download&id=1hDiYBgYcuQKyRskSxkuyojbuOGeFU9uv", // Pista17
        "https://drive.google.com/uc?export=download&id=1yrmzH4oolFCLM_E_vjr0XWMupXS_G8RW", // Pista18
        "https://drive.google.com/uc?export=download&id=1SVGFnusPEFdYG_SjVg-hU_V2w0So7KmK", // Pista19
        "https://drive.google.com/uc?export=download&id=1BLHalWvxUrI8FsEtayyB6D3O-jAwzee5", // Pista20
        "https://drive.google.com/uc?export=download&id=1qYlpKMAjwNx4I3ZCWED952e0scfLbT_3", // Pista21
        "https://drive.google.com/uc?export=download&id=1_z10JqDSO1jtvO8ZBVLkp7PnpAeQXn7O", // Pista22
        "https://drive.google.com/uc?export=download&id=1WugGYJc5jdh1Z5_bhtzUUhb1zt7a1DAU", // Pista23
        "https://drive.google.com/uc?export=download&id=1eHeadPuIB8NSH67CYHo8KuQXYQXdI5P-", // Pista24
        "https://drive.google.com/uc?export=download&id=1rPcaH3m58pJKza6pkOyDWm5eoEuo7rbh", // Pista25
        "https://drive.google.com/uc?export=download&id=1Rn--hWvx3SEJcHW6yskZuk7y9eDVBu8D", // Pista26
        "https://drive.google.com/uc?export=download&id=13wiKQY9D92TeJUMre20C7WHr-pwMUfPe", // Pista27
        "https://drive.google.com/uc?export=download&id=1TUL27YS3H_1kJrUvFHMPdOCQ4Rwwidvz", // Pista28
        "https://drive.google.com/uc?export=download&id=1MXzVjl2aPZJQFYEJEex4rUyeVEvgsh7A", // Pista29
        "https://drive.google.com/uc?export=download&id=1K64Lj2oNo24cjQ-UPAQE_XPTRie5PN7J", // Pista30
        "https://drive.google.com/uc?export=download&id=1EvBitkcqTkPykIFgsIT6GtWPxrgb5-Sx", // Pista31
        "https://drive.google.com/uc?export=download&id=16_joyfs9Txn2Gdfsvxx8ws2_mHToshO9", // Pista32
        "https://drive.google.com/uc?export=download&id=14FTjga8pBfya1WRKY9DCuYUOvpjhKB2I", // Pista33
        "https://drive.google.com/uc?export=download&id=1D6okGFGQXl-0Zs6sOtf8RWBr9CUfJwnl", // Pista34
        "https://drive.google.com/uc?export=download&id=1--juRvmIUkG_lTxu3Zs8ATogFkTgpngq", // Pista35
        "https://drive.google.com/uc?export=download&id=1rOE6WRY66e4PVi2j1kbQigAT2kT7xO7f", // Pista36
        "https://drive.google.com/uc?export=download&id=1bhsvjX05YNMDLTig99X8DdcmH31qZepI", // Pista37
        "https://drive.google.com/uc?export=download&id=1rb8DFMSpAXoxXaJxfEqQmimiuUfdr1xj", // Pista38
        "https://drive.google.com/uc?export=download&id=1u3Pywo79Pu6xLmjC58LVJnfligN1SJbw", // Pista39
        "https://drive.google.com/uc?export=download&id=1F1BPciZ50-etiEVLDWuLfE-zqM8MgwoY", // Pista40
        "https://drive.google.com/uc?export=download&id=1ow9zaDDX-itkjudmHB_7y86xLcslEvUd", // Pista41
        "https://drive.google.com/uc?export=download&id=1bx6RCCW-xbT4sZRXGVczbCGQjnu9idGt", // Pista42
        "https://drive.google.com/uc?export=download&id=1r7JAxb5pT1TuSf7c4WBMstgUfe1DgRfT", // Pista43
        "https://drive.google.com/uc?export=download&id=1jazei1CUhlhH6FDyZ4R5gXsjycIhxdqd", // Pista44
        "https://drive.google.com/uc?export=download&id=1lZutr9wb0AXZMAozSQBxVkPA_PcV1kyY", // Pista45
        "https://drive.google.com/uc?export=download&id=1siPUJo66UBkXYuiCbsNNuDeK5qYCnlJD", // Pista46
        "https://drive.google.com/uc?export=download&id=1O5ZYS8NmVwewOpACVZqu86zaBWwgdRXx", // Pista47
        "https://drive.google.com/uc?export=download&id=1SzefaJS2y4DjbP2aT2_qUozW2EaLLhdm", // Pista48
        "https://drive.google.com/uc?export=download&id=1MpbpvpFrZxXPsJiILS9vztJOGjnwfqNG", // Pista49
        "https://drive.google.com/uc?export=download&id=1mb2lW-GiW5QwBqReEs6D1_X1jLDlt9lz", // Pista50
        "https://drive.google.com/uc?export=download&id=1D_HsLG_rSlK9lBnj3lQUMcXkmra5Lv17", // Pista51
        "https://drive.google.com/uc?export=download&id=1INo2rukv9KTGL-5MB5tvUuKymqHxF5An", // Pista52
        "https://drive.google.com/uc?export=download&id=1s7J2vVMnWxyTbe8cDEvjfGeZiWfnoNPn", // Pista53
        "https://drive.google.com/uc?export=download&id=1DDgzuCZgoPwrf0J4ipp1slkl3xpHYp-k", // Pista54
        "https://drive.google.com/uc?export=download&id=1YTyXmKji7zAxzbDWnNN14S3vPvzx6a9w", // Pista55
        "https://drive.google.com/uc?export=download&id=1U1sFAp0TU-ZR45YSWbucPG8F911YeNZf", // Pista56
        "https://drive.google.com/uc?export=download&id=1a1sqytmgKY0C0hmKOu2ankYNMNC_ORm4", // Pista57
        "https://drive.google.com/uc?export=download&id=1Nibn8JypPGqJ9noZwF4mp8rISyMlyz54", // Pista58
        "https://drive.google.com/uc?export=download&id=19aX6MzebVT1G8V5C3DIPzi10V4H-gJ8U", // Pista59
        "https://drive.google.com/uc?export=download&id=1P67M2r43FO8WPsuL1DcWNN18KQUrPwWM", // Pista60
    ];

    // إنشاء العناصر ديناميكيًا بناءً على اللينكات
    audioLinks.forEach((link, index) => {
        const audioItem = document.createElement("div");
        audioItem.classList.add("audio-item");

        const pistaText = document.createElement("span");
        pistaText.textContent = `Pista ${index + 1}`; // تصليح Template Literal

        const audio = document.createElement("audio");
        audio.controls = true;
        audio.src = link; // استخدام اللينك من القايمة

        console.log(`Trying to load: ${audio.src}`);

        const checkmark = document.createElement("span");
        checkmark.classList.add("checkmark");
        checkmark.innerHTML = "✔️";

        audio.addEventListener("ended", function () {
            checkmark.classList.add("show-checkmark");
        });

        audioItem.appendChild(pistaText);
        audioItem.appendChild(audio);
        audioItem.appendChild(checkmark);
        audioList.appendChild(audioItem);
    });
});