import Ember from 'ember';

export default Ember.Controller.extend({
  sortFinishText: null,

  clipsList: Ember.A([
    {id: 1, mp3: '/mp3/1.mp3', text: 'Hvala lepa za povabilo'},
    {id: 2, mp3: '/mp3/2.mp3', text: 'Gotovo bolj, kot je bila, v času ko je prejšnja predsednica vlade sporočila, da odstopa s položaja'},
    {id: 3, mp3: '/mp3/3.mp3', text: 'In tudi dovolj'},
    {id: 4, mp3: '/mp3/4.mp3', text: 'Skratka, imamo vse možnosti, da gledamo na prihodnost s previdnim optimizmom'},
    {id: 5, mp3: '/mp3/5.mp3', text: 'Seveda'},
    {id: 6, mp3: '/mp3/6.mp3', text: 'Pa so'},
    {id: 7, mp3: '/mp3/7.mp3', text: 'Za običajen pogovor, ki ga jih imam z voditelji strank'},
    {id: 8, mp3: '/mp3/8.mp3', text: 'Takrat jih imam po definiciji'},
    {id: 9, mp3: '/mp3/9.mp3', text: 'Čeprav nisem vedno dolžan'},

    {id: 10, mp3: '/mp3/10.mp3', text: 'In videli ste, da se je to v mojem mandatu splačalo'},
    {id: 11, mp3: '/mp3/11.mp3', text: 'Tudi sedaj ga imam'},
    {id: 12, mp3: '/mp3/12.mp3', text: 'Jaz je ne bom načel. Povedal sem že in bi želel morda za tiste, ki tega niso slišali, ponovit še enkrat. Jaz bi si želel, da ta vlada opravi delo do konca.'},
    {id: 13, mp3: '/mp3/13.mp3', text: 'Zase, potem pa se je izkazalo, da je v tej ihti bilo storjeno veliko škode za državo'},
    {id: 14, mp3: '/mp3/14.mp3', text: 'Prvič po začetku krize'},
    {id: 15, mp3: '/mp3/15.mp3', text: 'Zaradi ranjenega ponosa. Zaradi ranjene samozavesti.'},
    {id: 16, mp3: '/mp3/16.mp3', text: 'Temu nisem nikoli oporekal, mh...'},
    {id: 17, mp3: '/mp3/17.mp3', text: 'Mislim, da so vrata pri meni vselej na široko odprta za vse. Seveda tudi za ...'},
    {id: 18, mp3: '/mp3/18.mp3', text: 'Ne, tako daleč v kritiki institucij pravne države ne bi šel.'},
    {id: 19, mp3: '/mp3/19.mp3', text: 'Vse do krize podcenjena'},

    {id: 20, mp3: '/mp3/20.mp3', text: 'Da bi prehitro bili zadovoljni s premejhnim, ker ...'},
    {id: 21, mp3: '/mp3/21.mp3', text: 'Oboje je nevarno'},
    {id: 22, mp3: '/mp3/22.mp3', text: 'Zavrne v celoti'},
    {id: 23, mp3: '/mp3/23.mp3', text: 'Ne želim zamuditi tudi te priložnosti'},
    {id: 24, mp3: '/mp3/24.mp3', text: 'No dejmo se naučit kej iz tega'},
    {id: 25, mp3: '/mp3/25.mp3', text: 'Javnost nima vseh informacij. Javnost ima lahko, ima pravico do površnosti. Politika jih nima.'},
    {id: 26, mp3: '/mp3/26.mp3', text: 'In vam bom zdej povedal, zakaj'},
    {id: 27, mp3: '/mp3/27.mp3', text: 'To je taka bistvena razlika'},
    {id: 28, mp3: '/mp3/28.mp3', text: 'H, torej... slabo novico za vse'},

    {id: 29, mp3: '/mp3/29.mp3', text: 'Ko slišim druge voditelje'},
    {id: 30, mp3: '/mp3/30.mp3', text: 'To bi bilo res pravo slabo znamenje, a veste, vse drugo so malenkosti, vse drugo so detajli, ampak to so pa velike stvari'},
    {id: 31, mp3: '/mp3/31.mp3', text: 'Ampak moram rečt, da gre tukaj za pravo, za pravega moralnega mačka'},
    {id: 32, mp3: '/mp3/32.mp3', text: 'Tretjič'},
    {id: 33, mp3: '/mp3/33.mp3', text: 'In se bomo potrudli po vseh močeh, da bo ostal'},
    {id: 34, mp3: '/mp3/34.mp3', text: 'Pa je ne želim videt'},
    {id: 35, mp3: '/mp3/35.mp3', text: 'Tukej konsenz bolj ali manj je'},
    {id: 36, mp3: '/mp3/36.mp3', text: 'In še več od tega'},
    {id: 37, mp3: '/mp3/37.mp3', text: 'Kot sem rekel, še enkrat ponavljam'},
    {id: 38, mp3: '/mp3/38.mp3', text: 'Vsak se je'},

    {id: 39, mp3: '/mp3/39.mp3', text: 'Tisti hip ko sem to rekel'},
    {id: 40, mp3: '/mp3/40.mp3', text: 'Saj ni bila mladoletna'},
    {id: 41, mp3: '/mp3/41.mp3', text: 'Tisti hip, ko sem to rekel'},
    {id: 42, mp3: '/mp3/42.mp3', text: 'Preprosto, to se človeku zgodi. Nisem ponosen, ni bila pa to najhujša stvar'},
    {id: 43, mp3: '/mp3/43.mp3', text: 'Tudi vam bi rad rekel, da ne prehitro delat zaključko, da ...'},
    {id: 44, mp3: '/mp3/44.mp3', text: 'Slovenci smo to naredili, hočem rečt, tudi v zunanji politiki imamo kaj pokazat'},
    {id: 45, mp3: '/mp3/45.mp3', text: 'A veste, ne podcenjevat ljudi'},
  ]),

  sortableObjectList: Ember.A([]),
  playIndex: -1,

  actions: {
    dragStart: function(object) {
    },
    sortEndAction: function() {
    },

    selectClip: function(clip) {
      this.sortableObjectList.pushObject(Ember.copy(clip));
    },

    playSortedClips: function() {
      this.incrementProperty('playIndex');
    },

    autoPlayFinished: function() {
      console.log('recieved');
      this.incrementProperty('playIndex');
    }
  }

});
