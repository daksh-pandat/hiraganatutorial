const hiraganaCharacters = [
    { character: 'あ', pronunciation: 'a' },
    { character: 'い', pronunciation: 'i' },
    { character: 'う', pronunciation: 'u' },
    { character: 'え', pronunciation: 'e' },
    { character: 'お', pronunciation: 'o' },
    { character: 'か', pronunciation: 'ka' },
    { character: 'き', pronunciation: 'ki' },
    { character: 'く', pronunciation: 'ku' },
    { character: 'け', pronunciation: 'ke' },
    { character: 'こ', pronunciation: 'ko' },
    { character: 'さ', pronunciation: 'sa' },
    { character: 'し', pronunciation: 'shi' },
    { character: 'す', pronunciation: 'su' },
    { character: 'せ', pronunciation: 'se' },
    { character: 'そ', pronunciation: 'so' },
    { character: 'た', pronunciation: 'ta' },
    { character: 'ち', pronunciation: 'chi' },
    { character: 'つ', pronunciation: 'tsu' },
    { character: 'て', pronunciation: 'te' },
    { character: 'と', pronunciation: 'to' },
    { character: 'な', pronunciation: 'na' },
    { character: 'に', pronunciation: 'ni' },
    { character: 'ぬ', pronunciation: 'nu' },
    { character: 'ね', pronunciation: 'ne' },
    { character: 'の', pronunciation: 'no' },
    { character: 'は', pronunciation: 'ha' },
    { character: 'ひ', pronunciation: 'hi' },
    { character: 'ふ', pronunciation: 'fu' },
    { character: 'へ', pronunciation: 'he' },
    { character: 'ほ', pronunciation: 'ho' },
    { character: 'ま', pronunciation: 'ma' },
    { character: 'み', pronunciation: 'mi' },
    { character: 'む', pronunciation: 'mu' },
    { character: 'め', pronunciation: 'me' },
    { character: 'も', pronunciation: 'mo' },
    { character: 'や', pronunciation: 'ya' },
    { character: 'ゆ', pronunciation: 'yu' },
    { character: 'よ', pronunciation: 'yo' },
    { character: 'ら', pronunciation: 'ra' },
    { character: 'り', pronunciation: 'ri' },
    { character: 'る', pronunciation: 'ru' },
    { character: 'れ', pronunciation: 're' },
    { character: 'ろ', pronunciation: 'ro' },
    { character: 'わ', pronunciation: 'wa' },
    { character: 'を', pronunciation: 'wo' },
    { character: 'ん', pronunciation: 'n' },

    // Adding some of the extended Hiragana for voiced sounds
    { character: 'が', pronunciation: 'ga' },
    { character: 'ぎ', pronunciation: 'gi' },
    { character: 'ぐ', pronunciation: 'gu' },
    { character: 'げ', pronunciation: 'ge' },
    { character: 'ご', pronunciation: 'go' },
    { character: 'ざ', pronunciation: 'za' },
    { character: 'じ', pronunciation: 'ji' },
    { character: 'ず', pronunciation: 'zu' },
    { character: 'ぜ', pronunciation: 'ze' },
    { character: 'ぞ', pronunciation: 'zo' },
    { character: 'だ', pronunciation: 'da' },
    { character: 'ぢ', pronunciation: 'ji' },
    { character: 'づ', pronunciation: 'zu' },
    { character: 'で', pronunciation: 'de' },
    { character: 'ど', pronunciation: 'do' },
    { character: 'ば', pronunciation: 'ba' },
    { character: 'び', pronunciation: 'bi' },
    { character: 'ぶ', pronunciation: 'bu' },
    { character: 'べ', pronunciation: 'be' },
    { character: 'ぼ', pronunciation: 'bo' },
    { character: 'ぱ', pronunciation: 'pa' },
    { character: 'ぴ', pronunciation: 'pi' },
    { character: 'ぷ', pronunciation: 'pu' },
    { character: 'ぺ', pronunciation: 'pe' },
    { character: 'ぽ', pronunciation: 'po' },
];

let currentIndex = 0;

const hiraganaDisplay = document.getElementById('hiragana-display');
const nextButton = document.getElementById('next-button');
const hint = document.getElementById('hint');

function displayHiragana() {
    const currentCharacter = hiraganaCharacters[currentIndex];
    hiraganaDisplay.textContent = currentCharacter.character;
    hint.textContent = `Pronunciation: ${currentCharacter.pronunciation}`;
}

function nextCharacter() {
    currentIndex = (currentIndex + 1) % hiraganaCharacters.length;
    displayHiragana();
}

nextButton.addEventListener('click', nextCharacter);

// // Initial display
displayHiragana();
