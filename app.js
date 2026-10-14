/* ==========================================================================
   IEL — Encyclopedia of Indian Endangered Languages
   Application Logic (Catalog, Language Articles, FAIR Exports, Audio, Theme)
   License: CC BY 4.0 (https://creativecommons.org/licenses/by/4.0/)
   ========================================================================== */

const FALLBACK_CATALOG = [
  {"id": "aimol", "name": "Aimol", "iso": "aim", "elpUrl": "https://endangeredlanguages.com/elp-language/3700", "elpLabel": "ELP #3700", "family": "Sino-Tibetan", "subfamily": "Kuki-Chin", "state": "Manipur", "pop": "2,643 (2001 census)", "coords": "24.30°N, 94.00°E", "status": "Critically Endangered", "hasCourse": false},
  {"id": "aka-jeru", "name": "Great Andamanese (Jeru)", "native": "Jero / Khora", "iso": "akj", "elpUrl": "https://endangeredlanguages.com/lang/search/#/?q=akj", "elpLabel": "ELP (akj)", "family": "Great Andamanese", "subfamily": "Northern Great Andamanese", "state": "Andaman & Nicobar Islands", "pop": "3–5 fluent speakers (2020)", "coords": "12.92°N, 92.90°E", "status": "Critically Endangered", "hasCourse": true},
  {"id": "asur", "name": "Asur", "iso": "asr", "elpUrl": "https://endangeredlanguages.com/elp-language/1579", "elpLabel": "ELP #1579", "family": "Austroasiatic", "subfamily": "North Munda (Kherwarian)", "state": "Jharkhand", "pop": "~7,000", "coords": "23.34°N, 84.33°E", "status": "Critically Endangered", "hasCourse": false},
  {"id": "baghati", "name": "Baghati", "iso": "bfz", "elpUrl": "https://endangeredlanguages.com/elp-language/5660", "elpLabel": "ELP #5660", "family": "Indo-European", "subfamily": "Western Pahari", "state": "Himachal Pradesh", "pop": "< 4,000", "coords": "30.91°N, 77.10°E", "status": "Critically Endangered", "hasCourse": false},
  {"id": "bangani", "name": "Bangani", "iso": "gbm", "elpUrl": "https://endangeredlanguages.com/elp-language/5632", "elpLabel": "ELP #5632", "family": "Indo-European", "subfamily": "Western Pahari", "state": "Uttarakhand", "pop": "~12,000", "coords": "31.01°N, 77.92°E", "status": "Critically Endangered", "hasCourse": false},
  {"id": "bellari", "name": "Bellari", "iso": "brw", "elpUrl": "https://endangeredlanguages.com/lang/search/#/?q=brw", "elpLabel": "ELP (brw)", "family": "Dravidian", "subfamily": "South Dravidian (Tuluic)", "state": "Karnataka, Kerala", "pop": "~1,350", "coords": "12.60°N, 75.15°E", "status": "Critically Endangered", "hasCourse": false},
  {"id": "birhor", "name": "Birhor", "native": "Biṛhōṛ", "iso": "biy", "elpUrl": "https://endangeredlanguages.com/lang/search/#/?q=biy", "elpLabel": "ELP (biy)", "family": "Austroasiatic", "subfamily": "North Munda (Kherwarian)", "state": "Jharkhand, Odisha, Chhattisgarh", "pop": "~2,000 speakers (ethnic pop. ~17,000)", "coords": "23.99°N, 85.36°E", "status": "Critically Endangered", "hasCourse": true},
  {"id": "byangsi", "name": "Byangsi", "iso": "bee", "elpUrl": "https://endangeredlanguages.com/elp-language/1616", "elpLabel": "ELP #1616", "family": "Sino-Tibetan", "subfamily": "West Himalayish", "state": "Uttarakhand", "pop": "~3,300", "coords": "30.15°N, 80.75°E", "status": "Critically Endangered", "hasCourse": false},
  {"id": "churahi", "name": "Churahi", "iso": "cdj", "elpUrl": "https://endangeredlanguages.com/lang/search/#/?q=cdj", "elpLabel": "ELP (cdj)", "family": "Indo-European", "subfamily": "Western Pahari", "state": "Himachal Pradesh", "pop": "~75,000 (shifting to Hindi)", "coords": "32.75°N, 76.12°E", "status": "Critically Endangered", "hasCourse": false},
  {"id": "darlong", "name": "Darlong", "iso": "dln", "elpUrl": "https://endangeredlanguages.com/lang/search/#/?q=dln", "elpLabel": "ELP (dln)", "family": "Sino-Tibetan", "subfamily": "Kuki-Chin", "state": "Tripura", "pop": "~8,000", "coords": "24.15°N, 92.05°E", "status": "Critically Endangered", "hasCourse": false},
  {"id": "gadaba-bodo", "name": "Gadaba (Gutob)", "iso": "gbj", "elpUrl": "https://endangeredlanguages.com/elp-language/5620", "elpLabel": "ELP #5620", "family": "Austroasiatic", "subfamily": "South Munda", "state": "Odisha, Andhra Pradesh", "pop": "~8,000", "coords": "18.58°N, 82.72°E", "status": "Critically Endangered", "hasCourse": false},
  {"id": "gadaba-kondekor", "name": "Gadaba (Ollari)", "iso": "gdb", "elpUrl": "https://endangeredlanguages.com/elp-language/4198", "elpLabel": "ELP #4198", "family": "Dravidian", "subfamily": "Central Dravidian", "state": "Odisha, Andhra Pradesh", "pop": "~15,000", "coords": "18.65°N, 82.85°E", "status": "Critically Endangered", "hasCourse": false},
  {"id": "handuri", "name": "Handuri", "iso": "hii", "elpUrl": "https://endangeredlanguages.com/elp-language/5660", "elpLabel": "ELP #5660", "family": "Indo-European", "subfamily": "Western Pahari", "state": "Himachal Pradesh", "pop": "Few hundred", "coords": "31.04°N, 76.72°E", "status": "Critically Endangered", "hasCourse": false},
  {"id": "jarawa", "name": "Jarawa", "iso": "anq", "elpUrl": "https://endangeredlanguages.com/elp-language/3845", "elpLabel": "ELP #3845", "family": "Ongan", "subfamily": "South Andamanese", "state": "Andaman & Nicobar Islands", "pop": "~380", "coords": "12.05°N, 92.70°E", "status": "Critically Endangered", "hasCourse": false},
  {"id": "kanashi", "name": "Kanashi", "iso": "xns", "elpUrl": "https://endangeredlanguages.com/elp-language/3235", "elpLabel": "ELP #3235", "family": "Sino-Tibetan", "subfamily": "West Himalayish", "state": "Himachal Pradesh", "pop": "~1,400", "coords": "32.06°N, 77.26°E", "status": "Critically Endangered", "hasCourse": false},
  {"id": "koireng", "name": "Koireng", "iso": "nkd", "elpUrl": "https://endangeredlanguages.com/lang/search/#/?q=nkd", "elpLabel": "ELP (nkd)", "family": "Sino-Tibetan", "subfamily": "Kuki-Chin-Naga", "state": "Manipur", "pop": "~1,400", "coords": "24.92°N, 93.88°E", "status": "Critically Endangered", "hasCourse": false},
  {"id": "koraga", "name": "Koraga (Korra)", "

const FALLBACK_LANGUAGES = {"toda": {"id": "toda", "name": "Toda", "native": "Oḷy Mōt", "iso": "tcx", "elpUrl": "https://endangeredlanguages.com/elp-language/5103", "elpLabel": "ELP #5103", "family": "Dravidian", "subfamily": "South Dravidian I (Tamil–Kannada)", "state": "Tamil Nadu (Nilgiri District)", "coords": "11.41°N, 76.69°E", "pop": "1,560 (2001 Census of India)", "status": "Critically Endangered", "script": "Unwritten (Tamil and IPA used in transcription)", "wordOrder": "SOV (Subject–Object–Verb)", "morphology": "Agglutinative, suffixing", "lead": "<b>Toda</b> (endonym: <i>Oḷy Mōt</i>) is a South Dravidian language spoken by the pastoral Toda community in the Nilgiri Hills of Tamil Nadu, India.<sup>[1]</sup> First documented systematically by M. B. Emeneau between 1935 and 1938, Toda is noted in comparative Dravidian linguistics for its phonological divergence from neighboring languages, preserving a 16-vowel system and multiple apical, laminal, and retroflex sibilants and trills.<sup>[1][2]</sup>", "history": "<p>The Toda people inhabit small hamlets known as <i>mod</i> (munds) situated at elevations above 2,000 meters on the Nilgiri plateau.<sup>[1]</sup> Comparative reconstruction by Bhadriraju Krishnamurti places the split of Proto-Toda-Kota from pre-Tamil inside the South Dravidian branch during the early first millennium BCE, followed by geographical isolation in the upper Nilgiris.<sup>[2]</sup></p><p>Traditional Toda society organized its economy around the sacred water buffalo (<i>īr</i>) and ritual dairies.<sup>[1]</sup> The 2001 Census of India recorded 1,560 speakers; UNESCO and the Government of India classify the language as Critically Endangered due to educational shift toward Tamil and English.<sup>[3][4]</sup></p>", "phonology": "<p>Toda has one of the largest consonant inventories among Dravidian languages (35+ consonant phonemes), caused historically by the syncope of non-initial short vowels in Proto-South-Dravidian roots.<sup>[1][2]</sup> It distinguishes three voiceless/voiced sibilant-affricate series, voiceless laterals (<code>/ɬ/</code>, <code>/ɭ̊/</code>), and three distinct rhotics: alveolar trill <code>/r/</code>, alveolar tap/trill <code>/r̪/</code>, and retroflex trill <code>/ɽr/</code>.<sup>[1]</sup> The vowel inventory comprises 16 phonemes (8 qualities × short/long), including front rounded vowels <code>/y, yː/</code> (written <i>ü, ǖ</i> in Emeneau's notation) and central unrounded <code>/ɨ, ɨː/</code> (written <i>ï, ï̄</i>).<sup>[1]</sup></p>", "consonants": [["Stop / Affricate", "p, b", "t̪, d̪", "t, d / ts, dz", "ʈ, ɖ", "tʃ, dʒ", "k, g"], ["Fricative", "f", "θ", "s, z", "ʂ, ʐ", "ʃ, ʒ", "x, (ɣ)"], ["Nasal", "m", "", "n", "ɳ", "", "ŋ"], ["Lateral", "", "", "l, ɬ", "ɭ, ɭ̊", "", ""], ["Trill / Approximant", "", "r̪", "r", "ɽr", "j", "w"]], "syntax": "<p>Toda is a head-final, Subject–Object–Verb (SOV) agglutinative language.<sup>[1]</sup> Nominal stems inflect for case via suffixes attached to an oblique stem (e.g., accusative <code>-n</code>, dative <code>-k</code>, ablative <code>-sn</code>).<sup>[1]</sup> Finite verbs carry tense-aspect-mood suffixes followed by pronominal person-number-gender markers.<sup>[1][2]</sup></p>", "lessons": [{"title": "Lesson 1: Personal Pronouns & Numerals", "intro": "Toda retains the Proto-Dravidian inclusive/exclusive distinction in first-person plural pronouns (Emeneau 1984: 72–76, 98).<sup>[1]</sup>", "vocab": [{"orth": "ōn", "ipa": "/oːn/", "gloss": "I (1SG)", "cite": "Emeneau 1984: 72"}, {"orth": "em", "ipa": "/em/", "gloss": "we (1PL.EXCL)", "cite": "Emeneau 1984: 73"}, {"orth": "om", "ipa": "/om/", "gloss": "we (1PL.INCL)", "cite": "Emeneau 1984: 73"}, {"orth": "nī", "ipa": "/niː/", "gloss": "you (2SG)", "cite": "Emeneau 1984: 74"}, {"orth": "atham", "ipa": "/aθam/", "gloss": "he / she / they (3.DIST)", "cite": "Emeneau 1984: 76"}, {"orth": "wïd", "ipa": "/wɨd̪/", "gloss": "one (1)", "cite": "DEDR 990"}, {"orth": "ēḍ", "ipa": "/eːɖ/", "gloss": "two (2)", "cite": "DEDR 474"}, {"orth": "mūd", "ipa": "/muːd̪/", "gloss": "three (3)", "cite": "DEDR 5052"}], "quiz": {"q": "Which Toda pronoun denotes first-person plural inclusive ('we, including the addressee')?", "a": "om (/om/) — distinct from em (/em/, 'we excluding the addressee')."}}, {"title": "Lesson 2: Swadesh Nouns & Nilgiri Ecology", "intro": "Core lexical items from Emeneau (1984) and the Dravidian Etymological Dictionary (Burrow & Emeneau 1984).<sup>[1][5]</sup>", "vocab": [{"orth": "īr", "ipa": "/iːr/", "gloss": "female water buffalo", "cite": "DEDR 816"}, {"orth": "pōsh", "ipa": "/poːʂ/", "gloss": "milk", "cite": "DEDR 4096"}, {"orth": "nīr", "ipa": "/niːr/", "gloss": "water", "cite": "DEDR 3690a"}, {"orth": "tīt", "ipa": "/t̪iːt̪/", "gloss": "fire", "cite": "DEDR 3266"}, {"orth": "pīr", "ipa": "/piːr/", "gloss": "sun", "cite": "DEDR 4314"}, {"orth": "tigïḷ", "ipa": "/t̪igɨɭ/", "gloss": "moon", "cite": "DEDR 3213"}, {"orth": "mēn", "ipa": "/meːn/", "gloss": "tree", "cite": "DEDR 4711a"}, {"orth": "kōṇ", "ipa": "/koːɳ/", "gloss": "eye", "cite": "DEDR 1159a"}], "quiz": {"q": "What are the Toda terms for 'water' and 'milk'?", "a": "nīr (/niːr/, 'water', DEDR 3690a) and pōsh (/poːʂ/, 'milk', DEDR 4096)."}}, {"title": "Lesson 3: Verbal Roots & Case Suffixes", "intro": "Toda verbs distinguish Root 1 (uninflected base) and Root 2 (past/participial stem formed via alveolar/dental suffixation).<sup>[1]</sup>", "vocab": [{"orth": "pōx- (pī-)", "ipa": "/poːx-/", "gloss": "to go", "cite": "DEDR 4572"}, {"orth": "pōr- (pōd-)", "ipa": "/poːr-/", "gloss": "to come", "cite": "DEDR 5270"}, {"orth": "uṇ- (uḍ-)", "ipa": "/uɳ-/", "gloss": "to drink", "cite": "DEDR 600"}, {"orth": "kāṇ- (kaḍ-)", "ipa": "/kaːɳ-/", "gloss": "to see", "cite": "DEDR 1443"}, {"orth": "-k / -g", "ipa": "/-k/", "gloss": "dative case ('to, for')", "cite": "Emeneau 1984: 61"}, {"orth": "-n", "ipa": "/-n/", "gloss": "accusative case (object)", "cite": "Emeneau 1984: 59"}], "quiz": {"q": "How is the dative form of mod ('village/mund') constructed?", "a": "By attaching the dative suffix -k: mod-k ('to the hamlet')."}}, {"title": "Lesson 4: Interlinear Glossed Sentences", "intro": "Morphological analysis using standard Leipzig Glossing Rules (Emeneau 1984).<sup>[1]</sup>", "igt": [{"words": ["ōn", "pōsh-n", "uḍ-sp-en"], "morphs": ["1SG.NOM", "milk-ACC", "drink-PST-1SG"], "trans": "'I drank the milk.' (Emeneau 1984: 118)"}, {"words": ["īr", "nīr-k", "pī-s-p-ini"], "morphs": ["buffalo.NOM", "water-DAT", "go.PST-PST-3-FIN"], "trans": "'The buffalo went to the water.' (Emeneau 1984)"}], "quiz": {"q": "Identify the grammatical role of -en in uḍ-sp-en.", "a": "First-person singular subject agreement suffix (-en, 1SG)."}}], "references": [{"id": 1, "text": "Emeneau, Murray B. (1984). <i>Toda Grammar and Texts</i>. Memoirs of the American Philosophical Society, Vol. 155. Philadelphia.", "url": "https://archive.org/details/todagrammartexts0000emen", "label": "Internet Archive"}, {"id": 2, "text": "Krishnamurti, Bhadriraju (2003). <i>The Dravidian Languages</i>. Cambridge University Press. pp. 21–26, 65–72.", "url": "https://doi.org/10.1017/CBO9780511486876", "label": "DOI: 10.1017/CBO9780511486876"}, {"id": 3, "text": "Press Information Bureau, Government of India (2014). 'Endangered Languages in India' (Release ID: 108207).", "url": "https://pib.gov.in/newsite/printrelease.aspx?relid=108207", "label": "PIB Gov.in"}, {"id": 4, "text": "Moseley, Christopher, ed. (2010). <i>Atlas of the World's Languages in Danger</i> (3rd ed.). Paris: UNESCO Publishing.", "url": "https://unesdoc.unesco.org/ark:/48223/pf0000187026", "label": "UNESCO Digital Library"}, {"id": 5, "text": "Burrow, T., & Emeneau, M. B. (1984). <i>A Dravidian Etymological Dictionary</i> (2nd ed.). Oxford: Clarendon Press.", "url": "https://dsal.uchicago.edu/dictionaries/burrow/", "label": "UChicago DSAL"}]}, "kota": {"id": "kota", "name": "Kota", "native": "Kōv Māt", "iso": "kfe", "elpUrl": "https://endangeredlanguages.com/lang/search/#/?q=kfe", "elpLabel": "ELP (kfe)", "family": "Dravidian", "subfamily": "South Dravidian I (Tamil–Kannada)", "state": "Tamil Nadu (Nilgiri District)", "coords": "11.42°N, 76.86°E", "pop": "~930 (2011 estimate)", "status": "Critically Endangered", "script": "Tamil script; Latin/IPA in academic literature", "wordOrder": "SOV (Subject–Object–Verb)", "morphology": "Agglutinative, suffixing", "lead": "<b>Kota</b> (endonym: <i>Kōv Māt</i>) is a Critically Endangered South Dravidian language spoken by the indigenous Kota community across seven settlements (<i>kōkāl</i>) in the Nilgiri Hills of Tamil Nadu, India.<sup>[1][2]</sup> Together with Toda, it forms the Toda–Kota subgroup of South Dravidian.<sup>[3]</sup>", "history": "<p>The Kota community historically inhabited seven villages in the Nilgiri plateau—including Kollimalai, Porthimund, Kotagiri (Aggal), Kil-Kotagiri, Trichigadi, Sholur, and Gudalur—functioning traditionally as blacksmiths, potters, carpenters, and ceremonial musicians within the Nilgiri inter-tribal system.<sup>[1][4]</sup></p><p>M. B. Emeneau published a four-volume collection of Kota narratives and a grammatical sketch between 1944 and 1946.<sup>[1]</sup> The speaker population resides in seven villages and numbers under 1,000 individuals, placing Kota in UNESCO's Critically Endangered category.<sup>[2]</sup></p>", "phonology": "<p>Kota retains a five-vowel quality system (<code>/i, e, a, o, u/</code>) with phonemic vowel length (10 vowels total).<sup>[1][3]</sup> Unlike Toda, Kota did not develop front rounded vowels, though it experienced unaccented vowel syncope that created dense consonant clusters.<sup>[3]</sup> Its consonant system contrasts dental, alveolar, and retroflex stops (<code>/t̪, d̪/</code>, <code>/t, d/</code>, <code>/ʈ, ɖ/</code>).<sup>[1]</sup></p>", "consonants": [["Stop / Affricate", "p, b", "t̪, d̪", "t, d", "ʈ, ɖ", "tʃ, dʒ", "k, g"], ["Fricative", "", "", "s", "", "", ""], ["Nasal", "m", "", "n", "ɳ", "ɲ", "ŋ"], ["Lateral", "", "", "l", "ɭ", "", ""], ["Rhotic / Approx.", "v", "", "r", "ɽ", "j", ""]], "syntax": "<p>Kota uses Subject–Object–Verb (SOV) word order.<sup>[1]</sup> Nouns inflect on an oblique stem for accusative (<code>-n</code>), dative (<code>-k</code>), and locative (<code>-l</code>). Verbs mark past and non-past stems via suffixal alternation, followed by pronominal endings.<sup>[1]</sup></p>", "lessons": [{"title": "Lesson 1: Pronouns & Kinship", "intro": "Personal pronouns and core kinship terms from Emeneau (1944: 15–28) and DEDR.<sup>[1][5]</sup>", "vocab": [{"orth": "ān", "ipa": "/aːn/", "gloss": "I (1SG)", "cite": "Emeneau 1944: 20"}, {"orth": "ām", "ipa": "/aːm/", "gloss": "we (1PL.INCL)", "cite": "Emeneau 1944: 20"}, {"orth": "ēm", "ipa": "/eːm/", "gloss": "we (1PL.EXCL)", "cite": "Emeneau 1944: 20"}, {"orth": "nī", "ipa": "/niː/", "gloss": "you (2SG)", "cite": "Emeneau 1944: 20"}, {"orth": "avn", "ipa": "/avn/", "gloss": "he (3SG.M)", "cite": "DEDR 1"}, {"orth": "avḷ", "ipa": "/avɭ/", "gloss": "she (3SG.F)", "cite": "DEDR 1"}, {"orth": "eyn", "ipa": "/ejn/", "gloss": "father", "cite": "DEDR 196a"}, {"orth": "av", "ipa": "/av/", "gloss": "mother", "cite": "DEDR 273"}], "quiz": {"q": "How does Kota distinguish 'he' and 'she' in the third-person singular?", "a": "avn (/avn/, 'he') with masculine suffix -n versus avḷ (/avɭ/, 'she') with feminine suffix -ḷ."}}, {"title": "Lesson 2: Basic Nouns & Numerals", "intro": "Core nouns demonstrating syncope of second-syllable vowels compared to Proto-Dravidian.<sup>[3][5]</sup>", "vocab": [{"orth": "nīr", "ipa": "/niːr/", "gloss": "water", "cite": "DEDR 3690a"}, {"orth": "pāl", "ipa": "/paːl/", "gloss": "milk", "cite": "DEDR 4096"}, {"orth": "marm", "ipa": "/marm/", "gloss": "tree (cf. Tamil maram)", "cite": "DEDR 4711a"}, {"orth": "kaṇ", "ipa": "/kaɳ/", "gloss": "eye", "cite": "DEDR 1159a"}, {"orth": "kī", "ipa": "/kiː/", "gloss": "hand / arm", "cite": "DEDR 2023"}, {"orth": "oḍ", "ipa": "/oɖ/", "gloss": "one (1)", "cite": "DEDR 990"}, {"orth": "eyḍ", "ipa": "/ejɖ/", "gloss": "two (2)", "cite": "DEDR 474"}, {"orth": "mūnd", "ipa": "/muːnd̪/", "gloss": "three (3)", "cite": "DEDR 5052"}], "quiz": {"q": "What phonological change does Kota marm ('tree') show relative to Proto-Dravidian *maram?", "a": "Loss (syncope) of the unaccented second-syllable short vowel /a/."}}, {"title": "Lesson 3: Verbal Stems (S1 & S2)", "intro": "Every Kota verb has a primary stem (S1) and a secondary past/participial stem (S2).<sup>[1]</sup>", "vocab": [{"orth": "vār- (vad-)", "ipa": "/vaːr-/", "gloss": "to come", "cite": "DEDR 5270"}, {"orth": "ōg- (ōy-)", "ipa": "/oːg-/", "gloss": "to go", "cite": "DEDR 4572"}, {"orth": "tin- (tid-)", "ipa": "/t̪in-/", "gloss": "to eat", "cite": "DEDR 3263a"}, {"orth": "uṇ- (uḍ-)", "ipa": "/uɳ-/", "gloss": "to drink", "cite": "DEDR 600"}, {"orth": "kāṇ- (kaḍ-)", "ipa": "/kaːɳ-/", "gloss": "to see", "cite": "DEDR 1443"}], "quiz": {"q": "What is the secondary (past) stem of vār- ('to come')?", "a": "vad- (/vad̪-/)."}}, {"title": "Lesson 4: Interlinear Glossed Sentences", "intro": "Clause construction from Emeneau (1944).<sup>[1]</sup>", "igt": [{"words": ["ān", "kōkāl-k", "ōy-p-ēn"], "morphs": ["1SG.NOM", "village-DAT", "go.S2-PST-1SG"], "trans": "'I went to the Kota village.' (Emeneau 1944: 26)"}, {"words": ["avn", "nīr-n", "uḍ-t-ān"], "morphs": ["3SG.M.NOM", "water-ACC", "drink.S2-PST-3SG.M"], "trans": "'He drank the water.' (Emeneau 1944)"}], "quiz": {"q": "Which suffix marks the third-person singular masculine subject on uḍ-t-ān?", "a": "-ān (3SG.M)."}}], "references": [{"id": 1, "text": "Emeneau, Murray B. (1944–1946). <i>Kota Texts</i> (Parts 1–4). University of California Publications in Linguistics, Vols. 2–3. Berkeley.", "url": "https://archive.org/details/kotatexts0001emen", "label": "Internet Archive"}, {"id": 2, "text": "Press Information Bureau, Government of India (2014). 'Endangered Languages in India' (Release ID: 108207).", "url": "https://pib.gov.in/newsite/printrelease.aspx?relid=108207", "label": "PIB Gov.in"}, {"id": 3, "text": "Krishnamurti, Bhadriraju (2003). <i>The Dravidian Languages</i>. Cambridge University Press.", "url": "https://doi.org/10.1017/CBO9780511486876", "label": "DOI: 10.1017/CBO9780511486876"}, {"id": 4, "text": "Wolf, Richard K. (2005). <i>The Black Cow's Footprint: Time, Space, and Music in the Lives of the Kotas of South India</i>. University of Illinois Press.", "url": "https://www.worldcat.org/oclc/60373459", "label": "WorldCat OCLC"}, {"id": 5, "text": "Burrow, T., & Emeneau, M. B. (1984). <i>A Dravidian Etymological Dictionary</i> (2nd ed.). Oxford: Clarendon Press.", "url": "https://dsal.uchicago.edu/dictionaries/burrow/", "label": "UChicago DSAL"}]}, "toto": {"id": "toto", "name": "Toto", "native": "Toto", "iso": "txo", "elpUrl": "https://endangeredlanguages.com/lang/search/#/?q=txo", "elpLabel": "ELP (txo)", "family": "Sino-Tibetan", "subfamily": "Tibeto-Burman (Dhimalish)", "state": "West Bengal (Alipurduar District)", "coords": "26.83°N, 89.31°E", "pop": "1,632 (2021 tribal council register)", "status": "Critically Endangered", "script": "Toto script (Unicode U+1E290–U+1E2BF); Bengali; Latin", "wordOrder": "SOV (Subject–Object–Verb)", "morphology": "Agglutinative, ergative-absolutive / nominative", "lead": "<b>Toto</b> is a Critically Endangered Sino-Tibetan (Tibeto-Burman) language spoken in the village of Totopara in Alipurduar district, West Bengal, along the India–Bhutan border.<sup>[1][2]</sup> Within Tibeto-Burman, George van Driem classifies Toto alongside Dhimal in the Dhimalish subgroup.<sup>[2]</sup>", "history": "<p>The Toto community resides in a single geographical enclave, Totopara, bordered by the Torsha River to the east and the foothills of Bhutan to the north.<sup>[1]</sup> Fieldwork by Amitabha Sengupta and Basanta Kumar Roy and later by George van Driem documented the grammar and lexicon.<sup>[1][2]</sup></p><p>In 2015, community elder and writer Dhaniram Toto developed an indigenous 31-letter alphabet for the language, which was encoded in The Unicode Standard (Version 14.0, block U+1E290–U+1E2BF) in 2021.<sup>[4]</sup> Despite community literacy initiatives, multi-lingual contact with Nepali and Bengali in Totopara has led to language shift among younger speakers.<sup>[3]</sup></p>", "phonology": "<p>Toto possesses six oral vowels (<code>/i, e, ə, a, o, u/</code>) and a phonemic glottal stop <code>/ʔ/</code>.<sup>[1][2]</sup> Its consonant inventory contrasts voiceless unaspirated, voiceless aspirated, and voiced stops across bilabial, dental/alveolar, palatal, and velar places of articulation, plus a series of voiced and voiceless nasals and liquids.<sup>[2]</sup></p>", "consonants": [["Stop (Voiceless)", "p, pʰ", "t, tʰ", "tʃ, tʃʰ", "k, kʰ", "ʔ"], ["Stop (Voiced)", "b", "d", "dʒ", "g", ""], ["Fricative", "", "s", "", "", "h"], ["Nasal", "m", "n", "", "ŋ", ""], ["Liquid / Glide", "w", "l, r", "j", "", ""]], "syntax": "<p>Toto is verb-final (SOV). Nominal case relations are marked by enclitic postpositions: ergative/instrumental <code>-nā</code>, dative/accusative <code>-kē</code>, genitive <code>-kō</code>, and locative <code>-tā</code>.<sup>[1][2]</sup></p>", "lessons": [{"title": "Lesson 1: Personal Pronouns & Case Clitics", "intro": "Pronominal roots and nominal case markers from van Driem (1995) and Basumatary (2014).<sup>[2][3]</sup>", "vocab": [{"orth": "ka", "ipa": "/ka/", "gloss": "I (1SG)", "cite": "van Driem 1995"}, {"orth": "kā-ng", "ipa": "/kaːŋ/", "gloss": "my (1SG.GEN)", "cite": "Basumatary 2014"}, {"orth": "na", "ipa": "/na/", "gloss": "you (2SG)", "cite": "van Driem 1995"}, {"orth": "u", "ipa": "/u/", "gloss": "he / she (3SG)", "cite": "van Driem 1995"}, {"orth": "kī-bī", "ipa": "/kiːbiː/", "gloss": "we (1PL)", "cite": "Basumatary 2014"}, {"orth": "-kē", "ipa": "/-keː/", "gloss": "dative / object marker", "cite": "Basumatary 2014"}, {"orth": "-tā", "ipa": "/-t̪aː/", "gloss": "locative ('in, at')", "cite": "Basumatary 2014"}], "quiz": {"q": "What are the Toto first-person ('I') and second-person ('you') singular pronouns?", "a": "ka (/ka/, 'I') and na (/na/, 'you')."}}, {"title": "Lesson 2: Basic Nouns & Numerals", "intro": "Tibeto-Burman lexical cognates preserved in Toto.<sup>[2][3]</sup>", "vocab": [{"orth": "tī", "ipa": "/t̪iː/", "gloss": "water (PTB *tiy)", "cite": "van Driem 1995"}, {"orth": "mē", "ipa": "/meː/", "gloss": "fire (PTB *mey)", "cite": "van Driem 1995"}, {"orth": "sāni", "ipa": "/saːni/", "gloss": "sun / day", "cite": "Basumatary 2014"}, {"orth": "tāri", "ipa": "/t̪aːri/", "gloss": "moon", "cite": "Basumatary 2014"}, {"orth": "shīng", "ipa": "/ʃiːŋ/", "gloss": "tree / wood (PTB *siŋ)", "cite": "van Driem 1995"}, {"orth": "īccō", "ipa": "/iːtʃoː/", "gloss": "one (1)", "cite": "Basumatary 2014"}, {"orth": "nīshō", "ipa": "/niːʃoː/", "gloss": "two (2)", "cite": "Basumatary 2014"}, {"orth": "sung", "ipa": "/suŋ/", "gloss": "three (3)", "cite": "Basumatary 2014"}], "quiz": {"q": "Which Toto nouns reflect Proto-Tibeto-Burman *tiy ('water') and *siŋ ('tree/wood')?", "a": "tī (/t̪iː/, 'water') and shīng (/ʃiːŋ/, 'tree/wood')."}}, {"title": "Lesson 3: Everyday Verbs", "intro": "Core action verbs and aspect markers.<sup>[2][3]</sup>", "vocab": [{"orth": "chā-", "ipa": "/tʃaː-/", "gloss": "to eat", "cite": "Basumatary 2014"}, {"orth": "tūng-", "ipa": "/t̪uːŋ-/", "gloss": "to drink", "cite": "Basumatary 2014"}, {"orth": "hā-", "ipa": "/haː-/", "gloss": "to go", "cite": "Basumatary 2014"}, {"orth": "lē-", "ipa": "/leː-/", "gloss": "to come", "cite": "Basumatary 2014"}, {"orth": "-ro", "ipa": "/-ro/", "gloss": "present/progressive suffix", "cite": "Basumatary 2014"}, {"orth": "-mi", "ipa": "/-mi/", "gloss": "declarative past suffix", "cite": "Basumatary 2014"}], "quiz": {"q": "What are the Toto verb roots for 'to eat' and 'to drink'?", "a": "chā- (/tʃaː-/, 'to eat') and tūng- (/t̪uːŋ-/, 'to drink')."}}, {"title": "Lesson 4: Interlinear Glossed Sentences", "intro": "SOV clause structure in Toto.<sup>[3]</sup>", "igt": [{"words": ["ka", "tī", "tūng-ro"], "morphs": ["1SG", "water", "drink-PRS"], "trans": "'I am drinking water.' (Basumatary 2014)"}, {"words": ["u", "shā-tā", "hā-mi"], "morphs": ["3SG", "house-LOC", "go-PST"], "trans": "'He/she went to the house.' (Basumatary 2014)"}], "quiz": {"q": "What is the function of -tā in shā-tā?", "a": "Locative postposition ('in / to the house')."}}], "references": [{"id": 1, "text": "Chaudhuri, Tapas Kumar (1993). <i>The Toto: A Sub-Himalayan Tribe</i>. Calcutta: Academic Publishers.", "url": "https://www.worldcat.org/oclc/31900984", "label": "WorldCat OCLC"}, {"id": 2, "text": "van Driem, George (2001). <i>Languages of the Himalayas: An Ethnolinguistic Handbook of the Greater Himalayan Region</i>. Leiden: Brill. pp. 559–567.", "url": "https://doi.org/10.1163/9789004492530", "label": "DOI: 10.1163/9789004492530"}, {"id": 3, "text": "Basumatary, Chittaranjan (2014). <i>Toto Phonology and Morphology</i>. Tezpur University / SPPEL CIIL Mysuru.", "url": "https://www.sppel.org/", "label": "SPPEL Archive"}, {"id": 4, "text": "Anderson, Deborah (2019). 'Proposal for encoding the Toto script in the SMP of the UCS' (ISO/IEC JTC1/SC2/WG2 N5141, L2/19-330).", "url": "https://www.unicode.org/L2/L2019/19330-toto-script.pdf", "label": "Unicode L2/19-330"}]}, "aka-jeru": {"id": "aka-jeru", "name": "Great Andamanese (Jeru)", "native": "Jero / Khora", "iso": "akj", "elpUrl": "https://endangeredlanguages.com/lang/search/#/?q=akj", "elpLabel": "ELP (akj)", "family": "Great Andamanese", "subfamily": "Northern Great Andamanese", "state": "Andaman & Nicobar Islands (Strait Island)", "coords": "12.92°N, 92.90°E", "pop": "3–5 semi-speakers / rememberers (2020)", "status": "Critically Endangered", "script": "Devanagari and IPA (documented by Anvita Abbi)", "wordOrder": "SOV (Subject–Object–Verb)", "morphology": "Polysynthetic, somatic body-part prefixing", "lead": "<b>Present-day Great Andamanese</b> (based primarily on <b>Aka-Jeru</b>, with lexical elements from <i>Khora</i>, <i>Sare</i>, and <i>Bo</i>) is a Critically Endangered language of the Great Andamanese family spoken on Strait Island in the Andaman and Nicobar Islands, India.<sup>[1][2]</sup> Documented extensively by Anvita Abbi between 2001 and 2013, the language is typologically notable for its obligatory somatic (body-division) prefixation system across nouns, verbs, and adjectives.<sup>[1][2]</sup>", "history": "<p>Prior to the establishment of the British penal colony in 1858, ten distinct Great Andamanese languages formed a dialect continuum from North to South Andaman.<sup>[1]</sup> Epidemic diseases and demographic collapse reduced the population from an estimated 5,000 in 1858 to 19 individuals by 1961.<sup>[1]</sup> In 1970, the Indian administration relocated the surviving community to Strait Island.<sup>[1]</sup></p><p>The last speaker of the Bo variety (Boa Sr.) died in January 2010, and the last fluent speaker of the Jeru/Khora koiné, Licho, died in April 2020, leaving a handful of semi-speakers whose heritage is preserved in the Endangered Languages Archive (ELAR).<sup>[3]</sup></p>", "phonology": "<p>Great Andamanese has a seven-vowel system (<code>/i, e, ɛ, a, ɔ, o, u/</code>) and a consonant inventory featuring bilabial, dental, alveolar, retroflex, palatal, and velar stops, including a bilabial fricative <code>/ɸ/</code> and palatal/velar nasals <code>/ɲ, ŋ/</code>.<sup>[1][2]</sup></p>", "consonants": [["Stop", "p, pʰ, b", "t̪, t̪ʰ, d̪", "ʈ, ʈʰ, ɖ", "tʃ, tʃʰ, dʒ", "k, kʰ, g"], ["Fricative", "ɸ", "s", "ʃ", "", "h"], ["Nasal", "m", "n", "", "ɲ", "ŋ"], ["Liquid / Glide", "w", "l, r", "ɭ", "j", ""]], "syntax": "<p>A defining grammatical feature of Great Andamanese is its seven-zone somatic body-division prefix system: inalienable body parts, relational nouns, adjectives, and transitive verbs must carry a proclitic marker specifying which somatic zone is involved (e.g., <code>er-</code> for head/eyes/upper body, <code>ut-/ot-</code> for neck/round parts, <code>oŋ-</code> for hands/feet/extremities, <code>a-</code> for mouth/origin).<sup>[1][2]</sup></p>", "lessons": [{"title": "Lesson 1: Pronominal Proclitics & Body-Zone Prefixes", "intro": "Possessor proclitics combine directly with somatic zone prefixes before nominal and verbal stems (Abbi 2013: 68–95).<sup>[2]</sup>", "vocab": [{"orth": "t- / thu", "ipa": "/t̪-/", "gloss": "I / my (1SG proclitic)", "cite": "Abbi 2013: 70"}, {"orth": "m- / mi", "ipa": "/m-/", "gloss": "we / our (1PL proclitic)", "cite": "Abbi 2013: 70"}, {"orth": "ng- / ngi", "ipa": "/ŋ-/", "gloss": "you / your (2SG proclitic)", "cite": "Abbi 2013: 70"}, {"orth": "er-", "ipa": "/er-/", "gloss": "Class 2 somatic prefix (head, face, upper external body)", "cite": "Abbi 2013: 79"}, {"orth": "oŋ-", "ipa": "/oŋ-/", "gloss": "Class 4 somatic prefix (hand, foot, extremities)", "cite": "Abbi 2013: 81"}, {"orth": "a-", "ipa": "/a-/", "gloss": "Class 1 somatic prefix (mouth, tongue, origin)", "cite": "Abbi 2013: 77"}], "quiz": {"q": "Which somatic prefix attaches to nouns associated with the hands, feet, and extremities?", "a": "oŋ- (/oŋ-/, Class 4 somatic zone prefix)."}}, {"title": "Lesson 2: Inalienable Body Terms & Ecology", "intro": "Body-part nouns cited with first-person singular possessor t- + somatic class marker (Abbi 2012).<sup>[1]</sup>", "vocab": [{"orth": "t-er-cho", "ipa": "/t̪ertʃo/", "gloss": "my head (1SG-CL2-head)", "cite": "Abbi 2012: 45"}, {"orth": "t-er-ulu", "ipa": "/t̪erulu/", "gloss": "my eye (1SG-CL2-eye)", "cite": "Abbi 2012: 62"}, {"orth": "t-oŋ-kora", "ipa": "/t̪oŋkora/", "gloss": "my hand (1SG-CL4-hand)", "cite": "Abbi 2012: 112"}, {"orth": "t-a-phòng", "ipa": "/t̪apʰɔŋ/", "gloss": "my mouth (1SG-CL1-mouth)", "cite": "Abbi 2012: 140"}, {"orth": "ino", "ipa": "/ino/", "gloss": "water", "cite": "Abbi 2012: 98"}, {"orth": "at", "ipa": "/at̪/", "gloss": "fire", "cite": "Abbi 2012: 33"}], "quiz": {"q": "Deconstruct the morphological structure of t-er-ulu ('my eye').", "a": "t- (1SG possessor) + er- (Class 2 upper-body somatic zone prefix) + ulu ('eye')."}}, {"title": "Lesson 3: Verbs & Tense-Aspect-Mood Suffixes", "intro": "Verbal roots and TAM suffixes from Abbi (2013: 185–210).<sup>[2]</sup>", "vocab": [{"orth": "ijhu-", "ipa": "/idʒʰu-/", "gloss": "to drink / eat", "cite": "Abbi 2013: 190"}, {"orth": "kone-", "ipa": "/kone-/", "gloss": "to go", "cite": "Abbi 2013: 192"}, {"orth": "une-", "ipa": "/une-/", "gloss": "to come / sit", "cite": "Abbi 2013: 194"}, {"orth": "-b", "ipa": "/-b/", "gloss": "non-past / habitual suffix", "cite": "Abbi 2013: 201"}, {"orth": "-om", "ipa": "/-om/", "gloss": "past / completive suffix", "cite": "Abbi 2013: 203"}], "quiz": {"q": "Which suffix marks past/completive aspect on Great Andamanese verbs?", "a": "-om (/om/)."}}, {"title": "Lesson 4: Interlinear Glossed Sentences", "intro": "Polysynthetic clause structure from Abbi (2013).<sup>[2]</sup>", "igt": [{"words": ["thu", "ino", "ijhu-om"], "morphs": ["1SG", "water", "drink-PST"], "trans": "'I drank water.' (Abbi 2013)"}, {"words": ["ng-oŋ-kora", "er-bùng-b"], "morphs": ["2SG-CL4-hand", "CL2-good-NPST"], "trans": "'Your hand is strong/good.' (Abbi 2013)"}], "quiz": {"q": "Why does the adjective bùng ('good/beautiful') carry the prefix er-?", "a": "Descriptive predicates take somatic zone prefixes indexing the external appearance or body part of the referent."}}], "references": [{"id": 1, "text": "Abbi, Anvita (2012). <i>Dictionary of the Great Andamanese Language: English – Great Andamanese – Hindi</i>. Delhi: Ratna Sagar.", "url": "https://www.worldcat.org/oclc/794322577", "label": "WorldCat OCLC"}, {"id": 2, "text": "Abbi, Anvita (2013). <i>A Grammar of the Great Andamanese Language: An Ethnolinguistic Study</i>. Brill's Tibetan Studies Library / Languages of the Greater Himalayan Region. Leiden: Brill.", "url": "https://doi.org/10.1163/9789004246126", "label": "DOI: 10.1163/9789004246126"}, {"id": 3, "text": "Abbi, Anvita (2006–2012). 'Vanishing Voices of the Great Andamanese (VOGA)'. Endangered Languages Archive (ELAR), Deposit dk0157.", "url": "https://www.elararchive.org/dk0157/", "label": "ELAR Archive dk0157"}]}, "nihali": {"id": "nihali", "name": "Nihali (Kalto)", "native": "Kalto", "iso": "nll", "elpUrl": "https://endangeredlanguages.com/elp-language/4879", "elpLabel": "ELP #4879", "family": "Language Isolate", "subfamily": "Isolate (Unclassified core lexicon)", "state": "Maharashtra (Buldhana) & Madhya Pradesh (Burhanpur)", "coords": "21.05°N, 76.53°E", "pop": "~2,000 (Nagaraja 2014)", "status": "Critically Endangered", "script": "Devanagari and IPA", "wordOrder": "SOV (Subject–Object–Verb)", "morphology": "Agglutinative, suffixing", "lead": "<b>Nihali</b> (also called <b>Kalto</b> or <b>Nahali</b>) is a Critically Endangered language isolate spoken in the Buldhana district of Maharashtra and the adjoining East Nimar (Burhanpur) district of Madhya Pradesh along the Tapti River valley in central India.<sup>[1][2]</sup> Although it has absorbed heavy lexical borrowing from Korku (Austroasiatic), Dravidian, and Marathi/Hindi, roughly 25% to 35% of its core Swadesh vocabulary—including pronouns, anatomical terms, and basic verbs—has no established external cognates.<sup>[1][2]</sup>", "history": "<p>Nihali speakers have lived for centuries in a symbiotic socioeconomic relationship with the neighboring Korku (North Munda) community in villages around Jamod in Jalgaon Jamod tehsil.<sup>[1][2]</sup> F. B. J. Kuiper (1962) and Norman Zide analyzed its multilayered lexicon, noting that Nihali speakers also used a specialized register as a secret argot.<sup>[1]</sup> K. S. Nagaraja published a comprehensive descriptive grammar and lexicon in 2014.<sup>[2]</sup></p>", "phonology": "<p>Nihali has a five-vowel quality system (<code>/i, e, a, o, u/</code>) with length distinctions and a consonant inventory typical of central Indian linguistic area languages, including retroflex stops (<code>/ʈ, ʈʰ, ɖ, ɖʰ/</code>) and a retroflex flap <code>/ɽ/</code>.<sup>[2]</sup></p>", "consonants": [["Stop (Voiceless)", "p, pʰ", "t̪, t̪ʰ", "ʈ, ʈʰ", "tʃ, tʃʰ", "k, kʰ"], ["Stop (Voiced)", "b, bʰ", "d̪, d̪ʰ", "ɖ, ɖʰ", "dʒ, dʒʰ", "g, gʰ"], ["Fricative / Nasal", "m", "n, s", "ɳ", "ɲ", "ŋ, h"], ["Liquid / Glide", "v", "l, r", "ɽ", "j", ""]], "syntax": "<p>Nihali is strictly SOV. Case suffixes attach directly to noun phrases: accusative/dative <code>-ke / -na</code>, ergative/instrumental <code>-ka / -ki</code>, genitive <code>-n</code>, and locative <code>-mi / -ṭi</code>.<sup>[2]</sup></p>", "lessons": [{"title": "Lesson 1: Isolate Pronominal System", "intro": "Nihali personal pronouns lack cognates in Munda, Dravidian, or Indo-Aryan (Kuiper 1962; Nagaraja 2014: 48–56).<sup>[1][2]</sup>", "vocab": [{"orth": "jō", "ipa": "/dʒoː/", "gloss": "I (1SG.NOM)", "cite": "Nagaraja 2014: 49"}, {"orth": "tyēko", "ipa": "/t̪jeːko/", "gloss": "we two (1DU)", "cite": "Nagaraja 2014: 49"}, {"orth": "māni", "ipa": "/maːni/", "gloss": "we (1PL)", "cite": "Nagaraja 2014: 49"}, {"orth": "nē", "ipa": "/neː/", "gloss": "you (2SG.NOM)", "cite": "Nagaraja 2014: 50"}, {"orth": "lā", "ipa": "/laː/", "gloss": "you all (2PL)", "cite": "Nagaraja 2014: 50"}, {"orth": "ēte", "ipa": "/eːt̪e/", "gloss": "he / she (3SG)", "cite": "Nagaraja 2014: 51"}], "quiz": {"q": "What are the Nihali first-person ('I') and second-person ('you') singular pronouns?", "a": "jō (/dʒoː/, 'I') and nē (/neː/, 'you')."}}, {"title": "Lesson 2: Unaffiliated Core Vocabulary", "intro": "Core nouns belonging to the unaligned Nihali stratum (Kuiper 1962; Nagaraja 2014).<sup>[1][2]</sup>", "vocab": [{"orth": "jiki", "ipa": "/dʒiki/", "gloss": "eye", "cite": "Nagaraja 2014: 221"}, {"orth": "joppo", "ipa": "/dʒoppo/", "gloss": "water", "cite": "Nagaraja 2014: 223"}, {"orth": "āpo", "ipa": "/aːpo/", "gloss": "fire", "cite": "Nagaraja 2014: 186"}, {"orth": "kōrta", "ipa": "/koːrt̪a/", "gloss": "blood", "cite": "Nagaraja 2014: 238"}, {"orth": "pāṭo", "ipa": "/paːʈo/", "gloss": "head", "cite": "Nagaraja 2014: 275"}, {"orth": "bākra", "ipa": "/baːkra/", "gloss": "hand", "cite": "Nagaraja 2014: 194"}, {"orth": "mandi", "ipa": "/mand̪i/", "gloss": "tooth", "cite": "Nagaraja 2014: 256"}], "quiz": {"q": "Which Nihali isolate roots mean 'water' and 'fire'?", "a": "joppo (/dʒoppo/, 'water') and āpo (/aːpo/, 'fire')."}}, {"title": "Lesson 3: Core Verbs & Tense Markers", "intro": "Verbal stems and inflectional suffixes (Nagaraja 2014: 95–130).<sup>[2]</sup>", "vocab": [{"orth": "ṭyē-", "ipa": "/ʈjeː-/", "gloss": "to eat", "cite": "Nagaraja 2014: 215"}, {"orth": "ḍē-", "ipa": "/ɖeː-/", "gloss": "to drink / give", "cite": "Nagaraja 2014: 218"}, {"orth": "ē-", "ipa": "/eː-/", "gloss": "to go", "cite": "Nagaraja 2014: 190"}, {"orth": "pā-", "ipa": "/paː-/", "gloss": "to come", "cite": "Nagaraja 2014: 271"}, {"orth": "-be / -bi", "ipa": "/-be/", "gloss": "present/non-past suffix", "cite": "Nagaraja 2014: 108"}, {"orth": "-ken / -kan", "ipa": "/-ken/", "gloss": "past tense suffix", "cite": "Nagaraja 2014: 112"}], "quiz": {"q": "What is the Nihali verb root meaning 'to eat'?", "a": "ṭyē- (/ʈjeː-/)."}}, {"title": "Lesson 4: Interlinear Glossed Sentences", "intro": "Clause examples from Nagaraja (2014).<sup>[2]</sup>", "igt": [{"words": ["jō", "joppo", "ḍē-ken"], "morphs": ["1SG.NOM", "water", "drink-PST"], "trans": "'I drank water.' (Nagaraja 2014: 114)"}, {"words": ["ēte", "āpo-mi", "ē-kan"], "morphs": ["3SG.NOM", "fire-LOC", "go-PST"], "trans": "'He went toward the fire.' (Nagaraja 2014)"}], "quiz": {"q": "What is the grammatical role of -mi in āpo-mi?", "a": "Locative case suffix ('at / toward')."}}], "references": [{"id": 1, "text": "Kuiper, F. B. J. (1962). <i>Nahali: A Comparative Study</i>. Mededelingen der Koninklijke Nederlandse Akademie van Wetenschappen, Afd. Letterkunde, 25(5). Amsterdam: Noord-Hollandsche Uitgevers Maatschappij.", "url": "https://www.worldcat.org/oclc/2914908", "label": "WorldCat OCLC"}, {"id": 2, "text": "Nagaraja, K. S. (2014). <i>The Nihali Language (Grammar, Texts and Vocabulary)</i>. Manasagangotri, Mysore: Central Institute of Indian Languages (CIIL).", "url": "https://www.worldcat.org/oclc/904446818", "label": "WorldCat OCLC"}, {"id": 3, "text": "Press Information Bureau, Government of India (2014). 'Endangered Languages in India' (Release ID: 108207).", "url": "https://pib.gov.in/newsite/printrelease.aspx?relid=108207", "label": "PIB Gov.in"}]}, "birhor": {"id": "birhor", "name": "Birhor", "native": "Biṛhōṛ", "iso": "biy", "elpUrl": "https://endangeredlanguages.com/lang/search/#/?q=biy", "elpLabel": "ELP (biy)", "family": "Austroasiatic", "subfamily": "North Munda (Kherwarian)", "state": "Jharkhand, Odisha, Chhattisgarh", "coords": "23.99°N, 85.36°E", "pop": "~2,000 speakers (ethnic pop. ~17,000)", "status": "Critically Endangered", "script": "Devanagari, Odia, Latin", "wordOrder": "SOV (Subject–Object–Verb)", "morphology": "Polysynthetic, subject/object indexing on verb/auxiliary", "lead": "<b>Birhor</b> (from Kherwarian <i>bir</i> 'forest' + <i>hōṛ</i> 'person/man') is a Critically Endangered North Munda (Austroasiatic) language spoken by the traditionally semi-nomadic Birhor community across the Chota Nagpur Plateau in Jharkhand, northern Odisha, and Chhattisgarh.<sup>[1][2]</sup> Within the Kherwarian branch, it is closely related to Mundari, Ho, and Santali.<sup>[1]</sup>", "history": "<p>The Birhor community historically comprised two socio-ecological groups: the <i>Uthlu</i> (nomadic hunter-gatherers specializing in monkey-trapping and making <i>chēp</i> rope from bauhinia creeper bark) and the <i>Jaghi</i> (semi-settled cultivators).<sup>[1][2]</sup> Although the 2011 Census recorded roughly 17,000 ethnic Birhors, active mother-tongue transmission is restricted to fewer than 2,000 speakers due to shift toward Sadri (Nagpuri), Hindi, and Odia.<sup>[1][2]</sup></p>", "phonology": "<p>Like other Kherwarian languages, Birhor exhibits preglottalized/checked word-final stops (<code>/p̚, t̚, c̚, k̚/</code>, realized with glottal closure before pause and voiced intervocalically), a retroflex series (<code>/ʈ, ɖ, ɽ/</code>), and five core vowels (<code>/i, e, a, o, u/</code>).<sup>[1][2]</sup></p>", "consonants": [["Stop (Voiceless)", "p, pʰ", "t̪, t̪ʰ", "ʈ, ʈʰ", "tʃ, tʃʰ", "k, kʰ"], ["Stop (Voiced/Checked)", "b, bʔ", "d̪, d̪ʔ", "ɖ, ɖʰ", "dʒ, dʒʔ", "g, gʔ"], ["Fricative / Nasal", "m", "n, s", "ɳ", "ɲ", "ŋ, h"], ["Liquid / Glide", "w", "l, r", "ɽ", "j", ""]], "syntax": "<p>Birhor has a complex polysynthetic verbal template: <code>Verb Stem + Aspect/Valency + Transitivity/Object Marker + Finite Copula (-a) + Subject Enclitic</code>.<sup>[1][2]</sup> Nouns distinguish animate and inanimate gender, which controls pronominal agreement on the verb complex.<sup>[1]</sup></p>", "lessons": [{"title": "Lesson 1: 11-Pronoun Number & Inclusivity System", "intro": "Birhor distinguishes singular, dual, and plural numbers, plus inclusive and exclusive first-person forms (Anderson 2008: 199–205; Jora 2016).<sup>[1][2]</sup>", "vocab": [{"orth": "iñ", "ipa": "/iɲ/", "gloss": "I (1SG)", "cite": "Anderson 2008: 201"}, {"orth": "alaṅ", "ipa": "/alaŋ/", "gloss": "we two (1DU.INCL)", "cite": "Anderson 2008: 201"}, {"orth": "aliñ", "ipa": "/aliɲ/", "gloss": "we two (1DU.EXCL)", "cite": "Anderson 2008: 201"}, {"orth": "abu", "ipa": "/abu/", "gloss": "we all (1PL.INCL)", "cite": "Anderson 2008: 201"}, {"orth": "ale", "ipa": "/ale/", "gloss": "we all (1PL.EXCL)", "cite": "Anderson 2008: 201"}, {"orth": "am", "ipa": "/am/", "gloss": "you (2SG)", "cite": "Anderson 2008: 201"}, {"orth": "iniʔ", "ipa": "/iniʔ/", "gloss": "he / she (3SG.ANIM)", "cite": "Jora 2016"}], "quiz": {"q": "How does Birhor distinguish 'you and I (dual inclusive)' from 'someone else and I (dual exclusive)'?", "a": "alaṅ (/alaŋ/, 1DU.INCL) versus aliñ (/aliɲ/, 1DU.EXCL)."}}, {"title": "Lesson 2: Austroasiatic Core Vocabulary", "intro": "Kherwarian/Munda roots in Birhor (Anderson 2008; Jora 2016).<sup>[1][2]</sup>", "vocab": [{"orth": "daʔ", "ipa": "/d̪aʔ/", "gloss": "water (Proto-Munda *daʔ)", "cite": "Anderson 2008"}, {"orth": "sengel", "ipa": "/seŋgel/", "gloss": "fire", "cite": "Jora 2016"}, {"orth": "bir", "ipa": "/bir/", "gloss": "forest / jungle", "cite": "Jora 2016"}, {"orth": "hōṛ", "ipa": "/hoːɽ/", "gloss": "person / man", "cite": "Jora 2016"}, {"orth": "met̚", "ipa": "/met̚/", "gloss": "eye", "cite": "Anderson 2008"}, {"orth": "tiʔ", "ipa": "/t̪iʔ/", "gloss": "hand", "cite": "Anderson 2008"}, {"orth": "miyat̚", "ipa": "/mijat̚/", "gloss": "one (1)", "cite": "Jora 2016"}, {"orth": "bariya", "ipa": "/barija/", "gloss": "two (2)", "cite": "Jora 2016"}], "quiz": {"q": "What is the literal etymology of the ethnonym Birhor?", "a": "bir ('forest') + hōṛ ('person/human') = 'forest person'."}}, {"title": "Lesson 3: Verbal Roots & Finite Marker -a", "intro": "Declarative finite clauses require the finitizer suffix -a before or after the subject enclitic.<sup>[1][2]</sup>", "vocab": [{"orth": "jom-", "ipa": "/dʒom-/", "gloss": "to eat", "cite": "Anderson 2008: 215"}, {"orth": "nū-", "ipa": "/nuː-/", "gloss": "to drink", "cite": "Anderson 2008: 216"}, {"orth": "sen-", "ipa": "/sen-/", "gloss": "to go", "cite": "Anderson 2008: 218"}, {"orth": "hij-", "ipa": "/hidʒ-/", "gloss": "to come", "cite": "Anderson 2008: 218"}, {"orth": "-ket̚- / -ked-", "ipa": "/-ket̚-/", "gloss": "transitive past suffix", "cite": "Anderson 2008: 222"}, {"orth": "-en-", "ipa": "/-en-/", "gloss": "intransitive past suffix", "cite": "Anderson 2008: 222"}], "quiz": {"q": "How does Birhor distinguish transitive past from intransitive past on the verb?", "a": "Transitive verbs take -ket̚-/-ked-, whereas intransitive verbs take -en-/-yan-."}}, {"title": "Lesson 4: Interlinear Glossed Sentences", "intro": "Polysynthetic verbal indexing from Anderson (2008) and Jora (2016).<sup>[1][2]</sup>", "igt": [{"words": ["iñ", "daʔ", "nū-ket̚-a-ñ"], "morphs": ["1SG", "water", "drink-TR.PST-FIN-1SG.SBJ"], "trans": "'I drank water.' (Anderson 2008)"}, {"words": ["hōṛ", "bir-te", "sen-en-a-e"], "morphs": ["person", "forest-ALL", "go-INTR.PST-FIN-3SG.SBJ"], "trans": "'The man went to the forest.' (Jora 2016)"}], "quiz": {"q": "What is the role of the final -ñ in nū-ket̚-a-ñ?", "a": "First-person singular subject enclitic (-ñ < iñ) attached after the finite marker -a."}}], "references": [{"id": 1, "text": "Anderson, Gregory D. S., ed. (2008). <i>The Munda Languages</i>. Routledge Language Family Series. London & New York: Routledge. pp. 195–255.", "url": "https://doi.org/10.4324/9781315822433", "label": "DOI: 10.4324/9781315822433"}, {"id": 2, "text": "Jora, Bikram (2016). 'Aspects of Birhor Phonology and Morphology'. Living Tongues Institute for Endangered Languages / SPPEL.", "url": "https://www.sppel.org/", "label": "SPPEL Archive"}, {"id": 3, "text": "Roy, Sarat Chandra (1925). <i>The Birhors: A Little-Known Jungle Tribe of Chota Nagpur</i>. Ranchi: Man in India Office.", "url": "https://archive.org/details/in.ernet.dli.2015.35867", "label": "Internet Archive"}]}};

let CATALOG = [];
let CURRENT_LANG = null;
let activeLessonIdx = 0;

/* 1. Theme Initialization & Toggle */
(function initTheme() {
  const saved = localStorage.getItem('iel_theme') || 'light';
  document.documentElement.setAttribute('data-theme', saved);
  window.addEventListener('DOMContentLoaded', () => {
    updateThemeBtnLabel(saved);
    const btn = document.getElementById('theme-toggle');
    if (btn) {
      btn.addEventListener('click', () => {
        const cur = document.documentElement.getAttribute('data-theme');
        const next = cur === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', next);
        localStorage.setItem('iel_theme', next);
        updateThemeBtnLabel(next);
      });
    }
  });
})();

function updateThemeBtnLabel(theme) {
  const label = document.getElementById('theme-label');
  if (label) label.textContent = theme === 'dark' ? 'Light' : 'Dark';
}

/* 2. Fetch Data with Automatic Local Fallback */
async function loadCatalog() {
  try {
    const res = await fetch('data/catalog.json');
    if (!res.ok) throw new Error('HTTP ' + res.status);
    CATALOG = await res.json();
  } catch (e) {
    CATALOG = FALLBACK_CATALOG;
  }
  return CATALOG;
}

async function loadLanguageData(id) {
  try {
    const res = await fetch(`data/languages/${encodeURIComponent(id)}.json`);
    if (!res.ok) throw new Error('HTTP ' + res.status);
    return await res.json();
  } catch (e) {
    if (FALLBACK_LANGUAGES[id]) return FALLBACK_LANGUAGES[id];
    return null;
  }
}

/* 3. Acoustic Formant Synthesizer (Web Audio API) */
let audioCtx = null;
function playIPA(text) {
  try {
    if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    if (audioCtx.state === 'suspended') audioCtx.resume();
    const clean = text.replace(/[/\[\]\-]/g, '').trim();
    const now = audioCtx.currentTime;
    const dur = Math.min(0.65, Math.max(0.28, clean.length * 0.08));

    const osc = audioCtx.createOscillator();
    const f1 = audioCtx.createBiquadFilter();
    const f2 = audioCtx.createBiquadFilter();
    const gain = audioCtx.createGain();

    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(125, now);
    osc.frequency.linearRampToValueAtTime(108, now + dur);

    let freq1 = 500, freq2 = 1500;
    if (/[iɨ]/.test(clean)) { freq1 = 300; freq2 = 2200; }
    else if (/[u]/.test(clean)) { freq1 = 320; freq2 = 850; }
    else if (/[oɔ]/.test(clean)) { freq1 = 460; freq2 = 950; }
    else if (/[eɛ]/.test(clean)) { freq1 = 450; freq2 = 1900; }
    else if (/[aā]/.test(clean)) { freq1 = 720; freq2 = 1250; }

    f1.type = 'bandpass';
    f1.frequency.setValueAtTime(freq1, now);
    f1.Q.setValueAtTime(5, now);

    f2.type = 'bandpass';
    f2.frequency.setValueAtTime(freq2, now);
    f2.Q.setValueAtTime(6, now);

    gain.gain.setValueAtTime(0.01, now);
    gain.gain.linearRampToValueAtTime(0.18, now + 0.04);
    gain.gain.exponentialRampToValueAtTime(0.005, now + dur);

    osc.connect(f1);
    f1.connect(f2);
    f2.connect(gain);
    gain.connect(audioCtx.destination);

    osc.start(now);
    osc.stop(now + dur);
  } catch (e) {
    if ('speechSynthesis' in window) {
      const u = new SpeechSynthesisUtterance(text.replace(/[/\[\]]/g, ''));
      u.rate = 0.85;
      window.speechSynthesis.speak(u);
    }
  }
}

/* 4. Global Search Bar & Sidebar Quick-Jump */
function setupGlobalNavigation() {
  const sel = document.getElementById('sidebar-jump');
  if (sel) {
    const completeGroup = document.createElement('optgroup');
    completeGroup.label = 'Complete Articles + Mini-Course (6)';
    const stubGroup = document.createElement('optgroup');
    stubGroup.label = 'Stub Entries (36)';

    CATALOG.slice().sort((a, b) => a.name.localeCompare(b.name)).forEach(item => {
      const opt = document.createElement('option');
      opt.value = item.id;
      opt.textContent = `${item.name} [${item.iso}]`;
      if (item.hasCourse) completeGroup.appendChild(opt);
      else stubGroup.appendChild(opt);
    });
    sel.appendChild(completeGroup);
    sel.appendChild(stubGroup);

    sel.addEventListener('change', (e) => {
      if (e.target.value) {
        window.location.href = `language.html?id=${encodeURIComponent(e.target.value)}`;
      }
    });
  }

  const searchInput = document.getElementById('global-search');
  const dropdown = document.getElementById('search-dropdown');
  if (searchInput && dropdown) {
    document.addEventListener('keydown', (e) => {
      if (e.key === '/' && document.activeElement !== searchInput) {
        e.preventDefault();
        searchInput.focus();
      } else if (e.key === 'Escape') {
        dropdown.classList.remove('open');
        closeModal();
      }
    });

    searchInput.addEventListener('input', () => {
      const q = searchInput.value.trim().toLowerCase();
      if (!q) {
        dropdown.classList.remove('open');
        return;
      }
      const matches = CATALOG.filter(c =>
        c.name.toLowerCase().includes(q) ||
        c.iso.toLowerCase().includes(q) ||
        c.family.toLowerCase().includes(q) ||
        c.state.toLowerCase().includes(q)
      ).slice(0, 10);

      if (!matches.length) {
        dropdown.innerHTML = `<div class="search-item" style="color:var(--text-muted);cursor:default;">No matching languages</div>`;
      } else {
        dropdown.innerHTML = matches.map(m => `
          <a class="search-item" href="language.html?id=${encodeURIComponent(m.id)}">
            <div>
              <strong>${m.name}</strong>
              <span style="color:var(--text-muted);font-size:0.76rem;margin-left:0.35rem;">${m.family} · ${m.state}</span>
            </div>
            <span class="code-id">${m.iso}</span>
          </a>
        `).join('');
      }
      dropdown.classList.add('open');
    });

    document.addEventListener('click', (e) => {
      if (!e.target.closest('.search-box')) dropdown.classList.remove('open');
    });
  }
}

/* 5. Index Page Rendering (index.html) */
function initIndexPage() {
  const fFam = document.getElementById('filter-family');
  const fState = document.getElementById('filter-state');
  const fStatus = document.getElementById('filter-status');
  const sField = document.getElementById('sort-field');
  if (!fFam) return;

  const families = [...new Set(CATALOG.map(c => c.family))].sort();
  families.forEach(f => {
    const o = document.createElement('option');
    o.value = f;
    o.textContent = f;
    fFam.appendChild(o);
  });

  const states = [...new Set(CATALOG.flatMap(c => c.state.split(',').map(s => s.trim())))].sort();
  states.forEach(s => {
    const o = document.createElement('option');
    o.value = s;
    o.textContent = s;
    fState.appendChild(o);
  });

  [fFam, fState, fStatus, sField].forEach(el => el.addEventListener('change', renderCatalogTable));
  renderCatalogTable();
}

function renderCatalogTable() {
  const fam = document.getElementById('filter-family').value;
  const st = document.getElementById('filter-state').value;
  const status = document.getElementById('filter-status').value;
  const sort = document.getElementById('sort-field').value;

  let rows = CATALOG.filter(item => {
    if (fam !== 'ALL' && item.family !== fam) return false;
    if (st !== 'ALL' && !item.state.includes(st)) return false;
    if (status === 'COURSE' && !item.hasCourse) return false;
    if (status === 'STUB' && item.hasCourse) return false;
    return true;
  });

  rows.sort((a, b) => (a[sort] || '').localeCompare(b[sort] || ''));

  const countEl = document.getElementById('filter-count');
  if (countEl) countEl.textContent = `${rows.length} of ${CATALOG.length} entries`;

  const tbody = document.getElementById('catalog-tbody');
  if (!tbody) return;

  tbody.innerHTML = rows.map(r => {
    const elpHref = r.elpUrl || `https://endangeredlanguages.com/lang/search/#/?q=${r.iso}`;
    const elpText = r.elpLabel || `ELP (${r.iso})`;
    return `
    <tr>
      <td>
        <a href="language.html?id=${encodeURIComponent(r.id)}" style="font-weight:600;">${r.name}</a>
        ${r.native ? `<span style="color:var(--text-muted);font-size:0.78rem;margin-left:0.3rem;">(${r.native})</span>` : ''}
      </td>
      <td><a class="ext-link code-id" href="https://iso639-3.sil.org/code/${r.iso}" target="_blank" rel="noopener">${r.iso}</a></td>
      <td><a class="ext-link code-id" href="${elpHref}" target="_blank" rel="noopener">${elpText}</a></td>
      <td>${r.family}<div style="color:var(--text-muted);font-size:0.75rem;">${r.subfamily}</div></td>
      <td>${r.state}</td>
      <td>${r.pop}</td>
      <td>
        ${r.hasCourse
          ? `<a href="language.html?id=${encodeURIComponent(r.id)}" class="badge badge-complete">Article + Mini-Course</a>`
          : `<a href="language.html?id=${encodeURIComponent(r.id)}" class="badge badge-stub">Stub / Course Pending</a>`
        }
      </td>
    </tr>
  `}).join('');
}

/* 6. Language Article Page Rendering (language.html) */
async function initLanguagePage() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id') || 'toda';
  const catItem = CATALOG.find(c => c.id === id);

  if (!catItem) {
    document.getElementById('article-mount').innerHTML = `<p>Language entry not found. <a href="index.html">Return to Index</a>.</p>`;
    return;
  }

  const sel = document.getElementById('sidebar-jump');
  if (sel) sel.value = id;

  const fullData = await loadLanguageData(id);
  CURRENT_LANG = fullData ? { ...catItem, ...fullData } : catItem;
  activeLessonIdx = 0;

  updateSchemaJSONLD(CURRENT_LANG);

  if (fullData) {
    renderCompleteArticle(CURRENT_LANG);
  } else {
    renderStubArticle(catItem);
  }
}

function formatCitations(html, id) {
  return html.replace(/<sup>\[(\d+)\]<\/sup>/g, (match, num) => {
    return `<sup class="cite-ref"><a href="#ref-${num}" onmouseenter="showCiteTooltip(event, '${id}', ${num})" onmouseleave="hideCiteTooltip()">[${num}]</a></sup>`;
  });
}

function renderCompleteArticle(lang) {
  document.title = `${lang.name} [${lang.iso}] — IEL Encyclopedia`;
  const elpHref = lang.elpUrl || `https://endangeredlanguages.com/lang/search/#/?q=${lang.iso}`;
  const elpText = lang.elpLabel || `ELP (${lang.iso})`;

  const tocEl = document.getElementById('sidebar-toc');
  if (tocEl) {
    tocEl.innerHTML = `
      <li><a class="sidebar-link" href="#sec-overview">0. Overview</a></li>
      <li><a class="sidebar-link" href="#sec-history">1. History &amp; Demographics</a></li>
      <li><a class="sidebar-link" href="#sec-linguistics">2. Linguistic Profile</a></li>
      <li><a class="sidebar-link" href="#sec-course">3. Introductory Mini-Course</a></li>
      <li><a class="sidebar-link" href="#sec-references">4. References</a></li>
      <li><a class="sidebar-link" href="#sec-extlinks">5. External Links</a></li>
    `;
  }

  const consonantRows = lang.consonants.map(row => `
    <tr>
      <th>${row[0]}</th>
      ${row.slice(1).map(cell => `<td style="font-family:var(--font-mono);font-size:0.8rem;">${cell || '—'}</td>`).join('')}
    </tr>
  `).join('');

  const mount = document.getElementById('article-mount');
  mount.innerHTML = `
    <div class="page-top-bar" id="sec-overview">
      <h1 class="page-title">${lang.name} language</h1>
      <div class="page-tools">
        <a class="btn-ui" href="index.html">← All Languages</a>
        <button class="btn-ui" onclick="openModal('cite-curr')">Cite</button>
        <button class="btn-ui" onclick="exportCurrentJSON()" title="Download FAIR language data as JSON">JSON</button>
        <button class="btn-ui" onclick="exportCurrentCSV()" title="Download vocabulary lexicon as CSV">CSV</button>
      </div>
    </div>
    <div class="page-subline">
      <span>ISO 639-3: <code class="code-id">${lang.iso}</code> · Endangered Languages Project: <a class="ext-link code-id" href="${elpHref}" target="_blank" rel="noopener">${elpText}</a></span>
      <span>License: <a class="ext-link" href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener">CC BY 4.0</a></span>
    </div>

    <div class="article-grid">
      <div class="article-prose">
        <p>${formatCitations(lang.lead, lang.id)}</p>

        <h2 id="sec-history">1. History and Demographics</h2>
        ${formatCitations(lang.history, lang.id)}

        <h2 id="sec-linguistics">2. Linguistic Profile</h2>
        <h3>2.1 Phonology</h3>
        ${formatCitations(lang.phonology, lang.id)}

        <div class="table-wrap">
          <table class="wikitable">
            <caption>Table 1: Consonant Phoneme Inventory of ${lang.name} (IPA)</caption>
            <thead>
              <tr>
                <th>Manner</th>
                <th>Labial</th>
                <th>Dental / Alveolar</th>
                <th>Retroflex / Postalveolar</th>
                <th>Palatal</th>
                <th>Velar / Glottal</th>
                ${lang.consonants[0].length > 6 ? '<th>Velar</th>' : ''}
              </tr>
            </thead>
            <tbody>${consonantRows}</tbody>
          </table>
        </div>

        <h3>2.2 Morphosyntax</h3>
        ${formatCitations(lang.syntax, lang.id)}

        <h2 id="sec-course">3. Introductory Mini-Course</h2>
        <p style="font-family:var(--font-sans);font-size:0.86rem;color:var(--text-secondary);">
          Four-unit grammatical and lexical workbook compiled from published descriptive grammars. Click any <code class="code-id">🔊 /IPA/</code> button to hear an acoustic approximation.
        </p>

        <div class="course-box">
          <div class="course-tabs" id="course-tabs">
            ${lang.lessons.map((les, idx) => `
              <button class="course-tab ${idx === 0 ? 'active' : ''}" onclick="switchLesson(${idx})">
                ${les.title.split(':')[0]}:${les.title.split(':')[1] || ''}
              </button>
            `).join('')}
          </div>
          <div class="course-body" id="course-lesson-body"></div>
        </div>

        <h2 id="sec-references">4. References</h2>
        <ol class="ref-list">
          ${lang.references.map(r => `
            <li id="ref-${r.id}">
              ${r.text}
              <a class="ext-link code-id" href="${r.url}" target="_blank" rel="noopener" style="margin-left:0.35rem;">${r.label}</a>
            </li>
          `).join('')}
        </ol>

        <h2 id="sec-extlinks">5. External Links &amp; Persistent Identifiers</h2>
        <ul class="ref-list" style="list-style:disc;">
          <li>Endangered Languages Project (ELP): <a class="ext-link" href="${elpHref}" target="_blank" rel="noopener"><code>${elpText}</code></a></li>
          <li>SIL ISO 639-3 Registration Authority: <a class="ext-link" href="https://iso639-3.sil.org/code/${lang.iso}" target="_blank" rel="noopener"><code>${lang.iso}</code></a></li>
          <li>Open Language Archives Community (OLAC) records: <a class="ext-link" href="http://www.language-archives.org/language/${lang.iso}" target="_blank" rel="noopener">OLAC/${lang.iso}</a></li>
        </ul>
      </div>

      <aside class="infobox" aria-label="Language Infobox">
        <div class="infobox-header">
          <div class="infobox-title">${lang.name}</div>
          <div class="infobox-native">${lang.native}</div>
        </div>
        <table class="infobox-table">
          <tbody>
            <tr><th>Region</th><td>${lang.state}, India</td></tr>
            <tr><th>Coordinates</th><td><span class="code-id">${lang.coords}</span></td></tr>
            <tr><th>Speakers</th><td>${lang.pop}</td></tr>
            <tr><th>Vitality</th><td><span class="badge badge-crit">${lang.status}</span></td></tr>
            <tr><th colspan="2" class="infobox-section-label">Classification &amp; Typology</th></tr>
            <tr><th>Language family</th><td><strong>${lang.family}</strong><br><span style="color:var(--text-muted);font-size:0.76rem;">${lang.subfamily}</span></td></tr>
            <tr><th>Word order</th><td>${lang.wordOrder}</td></tr>
            <tr><th>Morphology</th><td>${lang.morphology}</td></tr>
            <tr><th>Writing system</th><td>${lang.script}</td></tr>
            <tr><th colspan="2" class="infobox-section-label">FAIR Persistent Identifiers</th></tr>
            <tr><th>ISO 639-3</th><td><a class="ext-link code-id" href="https://iso639-3.sil.org/code/${lang.iso}" target="_blank" rel="noopener">${lang.iso}</a></td></tr>
            <tr><th>ELP Page</th><td><a class="ext-link code-id" href="${elpHref}" target="_blank" rel="noopener">${elpText}</a></td></tr>
            <tr><th>OLAC Archive</th><td><a class="ext-link code-id" href="http://www.language-archives.org/language/${lang.iso}" target="_blank" rel="noopener">olac:${lang.iso}</a></td></tr>
            <tr><th>License</th><td><a class="ext-link" href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener">CC BY 4.0</a></td></tr>
          </tbody>
        </table>
      </aside>
    </div>
  `;

  renderLessonBody();
}

function switchLesson(idx) {
  activeLessonIdx = idx;
  document.querySelectorAll('#course-tabs .course-tab').forEach((btn, i) => {
    btn.classList.toggle('active', i === idx);
  });
  renderLessonBody();
}

function renderLessonBody() {
  if (!CURRENT_LANG || !CURRENT_LANG.lessons) return;
  const les = CURRENT_LANG.lessons[activeLessonIdx];
  const container = document.getElementById('course-lesson-body');
  if (!container) return;

  let contentHtml = `<p style="margin:0 0 0.75rem;color:var(--text-secondary);">${formatCitations(les.intro, CURRENT_LANG.id)}</p>`;

  if (les.vocab) {
    contentHtml += `
      <div class="table-wrap">
        <table class="wikitable" style="margin:0.4rem 0 0.85rem;">
          <thead>
            <tr>
              <th>Orthography</th>
              <th>IPA &amp; Audio</th>
              <th>English Gloss</th>
              <th>Primary Source</th>
            </tr>
          </thead>
          <tbody>
            ${les.vocab.map(v => `
              <tr>
                <td><strong>${v.orth}</strong></td>
                <td>
                  <button class="ipa-btn" onclick="playIPA('${v.ipa.replace(/'/g, "\\'")}')" title="Synthesize acoustic approximation">
                    🔊 ${v.ipa}
                  </button>
                </td>
                <td>${v.gloss}</td>
                <td style="color:var(--text-muted);font-size:0.78rem;">${v.cite}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    `;
  }

  if (les.igt) {
    contentHtml += les.igt.map(item => `
      <div class="igt-block">
        <div class="igt-words">
          ${item.words.map((w, i) => `
            <div class="igt-unit">
              <span class="igt-form">${w}</span>
              <span class="igt-gloss">${item.morphs[i] || ''}</span>
            </div>
          `).join('')}
        </div>
        <div class="igt-trans">${item.trans}</div>
      </div>
    `).join('');
  }

  if (les.quiz) {
    contentHtml += `
      <details class="self-check">
        <summary>Self-Check Question: ${les.quiz.q}</summary>
        <div style="margin-top:0.45rem;padding-top:0.45rem;border-top:1px solid var(--border-subtle);color:var(--text-primary);">
          <strong>Answer:</strong> ${les.quiz.a}
        </div>
      </details>
    `;
  }

  container.innerHTML = contentHtml;
}

function renderStubArticle(cat) {
  document.title = `${cat.name} [${cat.iso}] (Stub) — IEL Encyclopedia`;
  const elpHref = cat.elpUrl || `https://endangeredlanguages.com/lang/search/#/?q=${cat.iso}`;
  const elpText = cat.elpLabel || `ELP (${cat.iso})`;

  const tocEl = document.getElementById('sidebar-toc');
  if (tocEl) {
    tocEl.innerHTML = `
      <li><a class="sidebar-link" href="#sec-overview">0. Overview</a></li>
      <li><a class="sidebar-link" href="#sec-course">1. Mini-Course Status</a></li>
      <li><a class="sidebar-link" href="#sec-references">2. References &amp; Links</a></li>
    `;
  }

  const mount = document.getElementById('article-mount');
  mount.innerHTML = `
    <div class="page-top-bar" id="sec-overview">
      <h1 class="page-title">${cat.name} language</h1>
      <div class="page-tools">
        <a class="btn-ui" href="index.html">← All Languages</a>
        <button class="btn-ui" onclick="openModal('cite-curr')">Cite</button>
        <button class="btn-ui" onclick="exportCurrentJSON()">JSON</button>
      </div>
    </div>
    <div class="page-subline">
      <span>ISO 639-3: <code class="code-id">${cat.iso}</code> · Endangered Languages Project: <a class="ext-link code-id" href="${elpHref}" target="_blank" rel="noopener">${elpText}</a></span>
      <span><span class="badge badge-stub">Encyclopedia Stub · Course Pending</span> · <a class="ext-link" href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener">CC BY 4.0</a></span>
    </div>

    <div class="article-grid">
      <div class="article-prose">
        <p>
          <b>${cat.name}</b> is a Critically Endangered <b>${cat.family}</b> (${cat.subfamily}) language spoken in <b>${cat.state}</b>, India (approximate geographic coordinates: <code>${cat.coords}</code>).<sup>[1][2]</sup> It is listed among the 42 Critically Endangered languages of India identified by the UNESCO <i>Atlas of the World's Languages in Danger</i> and the Ministry of Education, Government of India (Press Information Bureau Release ID: 108207).<sup>[1][2]</sup>
        </p>

        <h2 id="sec-course">1. Introductory Mini-Course Status</h2>
        <div style="font-family:var(--font-sans);font-size:0.86rem;background:var(--bg-subtle);border:1px solid var(--border-color);border-radius:4px;padding:0.9rem 1.1rem;">
          <strong>Course Pending Verification:</strong> A four-lesson introductory grammatical and lexical module for <b>${cat.name}</b> is scheduled for addition pending verification against primary published fieldwork grammars from the Scheme for Protection and Preservation of Endangered Languages (SPPEL, CIIL Mysuru) and published bibliographic records.
          <div style="margin-top:0.65rem;">
            <strong>Available Complete Courses:</strong>
            <a href="language.html?id=toda">Toda</a> ·
            <a href="language.html?id=kota">Kota</a> ·
            <a href="language.html?id=toto">Toto</a> ·
            <a href="language.html?id=aka-jeru">Great Andamanese (Jeru)</a> ·
            <a href="language.html?id=nihali">Nihali</a> ·
            <a href="language.html?id=birhor">Birhor</a>
          </div>
        </div>

        <h2 id="sec-references">2. References &amp; External Repositories</h2>
        <ol class="ref-list">
          <li>Press Information Bureau, Government of India (2014). 'Endangered Languages in India' (Release ID: 108207). <a class="ext-link code-id" href="https://pib.gov.in/newsite/printrelease.aspx?relid=108207" target="_blank" rel="noopener">PIB 108207</a></li>
          <li>Catalogue of Endangered Languages (ELCat) / Endangered Languages Project: <a class="ext-link code-id" href="${elpHref}" target="_blank" rel="noopener">${elpText}</a></li>
          <li>SIL International. ISO 639-3 Code Set: <a class="ext-link code-id" href="https://iso639-3.sil.org/code/${cat.iso}" target="_blank" rel="noopener">${cat.iso}</a></li>
          <li>Open Language Archives Community (OLAC): <a class="ext-link code-id" href="http://www.language-archives.org/language/${cat.iso}" target="_blank" rel="noopener">OLAC/${cat.iso}</a></li>
        </ol>
      </div>

      <aside class="infobox">
        <div class="infobox-header">
          <div class="infobox-title">${cat.name}</div>
        </div>
        <table class="infobox-table">
          <tbody>
            <tr><th>Region</th><td>${cat.state}, India</td></tr>
            <tr><th>Coordinates</th><td><span class="code-id">${cat.coords}</span></td></tr>
            <tr><th>Speakers</th><td>${cat.pop}</td></tr>
            <tr><th>Vitality</th><td><span class="badge badge-crit">${cat.status}</span></td></tr>
            <tr><th>Family</th><td>${cat.family} (${cat.subfamily})</td></tr>
            <tr><th>ISO 639-3</th><td><a class="ext-link code-id" href="https://iso639-3.sil.org/code/${cat.iso}" target="_blank" rel="noopener">${cat.iso}</a></td></tr>
            <tr><th>ELP Page</th><td><a class="ext-link code-id" href="${elpHref}" target="_blank" rel="noopener">${elpText}</a></td></tr>
            <tr><th>License</th><td><a class="ext-link" href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener">CC BY 4.0</a></td></tr>
          </tbody>
        </table>
      </aside>
    </div>
  `;
}

/* 7. Hover Footnote Tooltip */
function showCiteTooltip(ev, langId, refNum) {
  if (!CURRENT_LANG || !CURRENT_LANG.references) return;
  const ref = CURRENT_LANG.references.find(r => r.id === Number(refNum));
  if (!ref) return;
  const tip = document.getElementById('cite-tooltip');
  if (!tip) return;
  tip.innerHTML = `<strong>[${ref.id}]</strong> ${ref.text} <div style="margin-top:0.3rem;"><span class="code-id">${ref.label}</span></div>`;
  tip.style.display = 'block';
  const rect = ev.target.getBoundingClientRect();
  const left = Math.min(window.innerWidth - 380, Math.max(12, rect.left - 40));
  const top = rect.bottom + 8;
  tip.style.left = left + 'px';
  tip.style.top = top + 'px';
}

function hideCiteTooltip() {
  const tip = document.getElementById('cite-tooltip');
  if (tip) tip.style.display = 'none';
}

/* 8. FAIR Exports & Schema.org JSON-LD */
function updateSchemaJSONLD(item) {
  const el = document.getElementById('fair-jsonld');
  if (!el) return;
  if (!item) {
    el.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Dataset",
      "@id": "https://mshreyes.github.io/iel/#dataset",
      "name": "IEL — Encyclopedia of Indian Endangered Languages",
      "url": "https://mshreyes.github.io/iel/",
      "description": "Reference catalog and introductory grammatical modules for the 42 critically endangered languages of India.",
      "license": "https://creativecommons.org/licenses/by/4.0/",
      "isAccessibleForFree": true
    }, null, 2);
  } else {
    el.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Dataset",
      "@id": `https://mshreyes.github.io/iel/language.html?id=${item.id}`,
      "url": `https://mshreyes.github.io/iel/language.html?id=${item.id}`,
      "name": `IEL Entry: ${item.name} (${item.iso})`,
      "identifier": [
        `iso639-3:${item.iso}`,
        item.elpUrl || `https://endangeredlanguages.com/lang/search/#/?q=${item.iso}`
      ],
      "license": "https://creativecommons.org/licenses/by/4.0/",
      "isAccessibleForFree": true
    }, null, 2);
  }
}

function downloadFile(filename, content, mime) {
  const blob = new Blob([content], { type: mime });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

function exportCatalogJSON() {
  const payload = {
    dataset: "IEL — Encyclopedia of Indian Endangered Languages",
    url: "https://mshreyes.github.io/iel/",
    license: "https://creativecommons.org/licenses/by/4.0/",
    count: CATALOG.length,
    entries: CATALOG
  };
  downloadFile('iel-catalog-42.json', JSON.stringify(payload, null, 2), 'application/json');
}

function exportCatalogCSV() {
  const headers = ['id', 'name', 'iso639_3', 'elp_url', 'family', 'subfamily', 'state', 'population', 'coordinates', 'status', 'has_course', 'license'];
  const lines = [headers.join(',')];
  CATALOG.forEach(c => {
    const row = [
      c.id,
      `"${c.name.replace(/"/g, '""')}"`,
      c.iso,
      `"${c.elpUrl || ''}"`,
      `"${c.family}"`,
      `"${c.subfamily}"`,
      `"${c.state}"`,
      `"${c.pop}"`,
      `"${c.coords}"`,
      `"${c.status}"`,
      c.hasCourse,
      "CC-BY-4.0"
    ];
    lines.push(row.join(','));
  });
  downloadFile('iel-catalog-42.csv', lines.join('\n'), 'text/csv;charset=utf-8;');
}

function exportCurrentJSON() {
  if (!CURRENT_LANG) return;
  downloadFile(`iel-${CURRENT_LANG.iso}.json`, JSON.stringify({
    license: "https://creativecommons.org/licenses/by/4.0/",
    ...CURRENT_LANG
  }, null, 2), 'application/json');
}

function exportCurrentCSV() {
  if (!CURRENT_LANG || !CURRENT_LANG.lessons) return;
  const lines = ['language,iso639_3,elp_url,lesson,orthography,ipa,gloss,citation,license'];
  CURRENT_LANG.lessons.forEach(l => {
    (l.vocab || []).forEach(v => {
      lines.push([
        `"${CURRENT_LANG.name}"`,
        CURRENT_LANG.iso,
        `"${CURRENT_LANG.elpUrl || ''}"`,
        `"${l.title}"`,
        `"${v.orth}"`,
        `"${v.ipa}"`,
        `"${v.gloss.replace(/"/g, '""')}"`,
        `"${v.cite}"`,
        "CC-BY-4.0"
      ].join(','));
    });
  });
  downloadFile(`iel-${CURRENT_LANG.iso}-lexicon.csv`, lines.join('\n'), 'text/csv;charset=utf-8;');
}

/* 9. Footer Modals (About, Archives, Cite) */
function openModal(type) {
  const backdrop = document.getElementById('modal-backdrop');
  const title = document.getElementById('modal-title');
  const body = document.getElementById('modal-body');

  if (type === 'about') {
    title.textContent = 'About & Methodology';
    body.innerHTML = `
      <p><b>IEL (Encyclopedia of Indian Endangered Languages)</b> compiles demographic, phonological, morphosyntactic, and lexical documentation for the 42 languages of India classified as <i>Critically Endangered</i> by UNESCO and the Ministry of Education, Government of India (Press Information Bureau Release ID: 108207, 2014).</p>
      <p><b>Editorial Standards:</b> All lexical items, phonological inventories, and interlinear glossed sentences are transcribed from published reference grammars, comparative dictionaries, and peer-reviewed fieldwork monographs. Entries awaiting primary source verification are designated as <i>Stub / Course Pending</i>.</p>
      <p><b>FAIR Data &amp; Licensing:</b> Every entry is indexed with persistent identifiers (SIL ISO 639-3, Endangered Languages Project / ELCat, and OLAC) and can be exported in JSON or CSV formats. Text and structured datasets are licensed under <a class="ext-link" href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener">Creative Commons Attribution 4.0 International (CC BY 4.0)</a>.</p>
    `;
  } else if (type === 'archives') {
    title.textContent = 'External Linguistic Archives';
    body.innerHTML = `
      <ul class="ref-list" style="list-style:disc;">
        <li><a class="ext-link" href="https://endangeredlanguages.com/" target="_blank" rel="noopener">Endangered Languages Project (ELP) / ELCat</a> — Collaborative online archive and Catalogue of Endangered Languages.</li>
        <li><a class="ext-link" href="https://www.sppel.org/" target="_blank" rel="noopener">Scheme for Protection and Preservation of Endangered Languages (SPPEL)</a> — Central Institute of Indian Languages (CIIL), Mysuru.</li>
        <li><a class="ext-link" href="https://www.elararchive.org/" target="_blank" rel="noopener">Endangered Languages Archive (ELAR)</a> — Berlin-Brandenburg Academy of Sciences and Humanities.</li>
        <li><a class="ext-link" href="https://dsal.uchicago.edu/dictionaries/burrow/" target="_blank" rel="noopener">A Dravidian Etymological Dictionary (DEDR)</a> — Digital South Asia Library, University of Chicago.</li>
        <li><a class="ext-link" href="http://www.language-archives.org/" target="_blank" rel="noopener">Open Language Archives Community (OLAC)</a> — Aggregated linguistic records by ISO 639-3 code.</li>
        <li><a class="ext-link" href="https://pib.gov.in/newsite/printrelease.aspx?relid=108207" target="_blank" rel="noopener">Government of India PIB Release 108207 (2014)</a> — Official list of 42 Critically Endangered Indian languages.</li>
      </ul>
    `;
  } else if (type === 'cite' || type === 'cite-curr') {
    const isLang = type === 'cite-curr' && CURRENT_LANG;
    const entryName = isLang ? `${CURRENT_LANG.name} [${CURRENT_LANG.iso}]` : 'Catalog of 42 Critically Endangered Languages of India';
    const entryKey = isLang ? `iel_${CURRENT_LANG.id}_2026` : 'iel_catalog_2026';
    const entryUrl = isLang ? `https://mshreyes.github.io/iel/language.html?id=${CURRENT_LANG.id}` : 'https://mshreyes.github.io/iel/';
    title.textContent = `Cite: ${entryName}`;
    body.innerHTML = `
      <p style="margin-top:0;"><strong>APA (7th ed.):</strong></p>
      <pre class="code-block">IEL: Encyclopedia of Indian Endangered Languages. (2026). ${entryName}. Retrieved from ${entryUrl} (Licensed under CC BY 4.0)</pre>
      <p><strong>BibTeX:</strong></p>
      <pre class="code-block">@misc{${entryKey},
  title  = {{${entryName} — IEL: Encyclopedia of Indian Endangered Languages}},
  year   = {2026},
  url    = {${entryUrl}},
  note   = {ISO 639-3 and Endangered Languages Project (ELP) indexed reference dataset. Licensed under CC BY 4.0 (https://creativecommons.org/licenses/by/4.0/)}
}</pre>
    `;
  }

  backdrop.classList.add('open');
}

function closeModal(ev) {
  if (ev && ev.target !== document.getElementById('modal-backdrop')) return;
  document.getElementById('modal-backdrop').classList.remove('open');
}

/* 10. Bootstrapper */
window.addEventListener('DOMContentLoaded', async () => {
  await loadCatalog();
  setupGlobalNavigation();
  if (document.getElementById('catalog-tbody')) {
    initIndexPage();
  } else if (document.getElementById('article-mount')) {
    await initLanguagePage();
  }
});
