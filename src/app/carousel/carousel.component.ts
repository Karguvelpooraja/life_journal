import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  public entryImg = 'https://res.cloudinary.com/dlwvj8g7o/image/upload/v1762885156/IMG_1622_cuzj8h.jpg'
  public houseEntryImg = 'https://res.cloudinary.com/dlwvj8g7o/image/upload/v1762885157/IMG_1631_gursu0.jpg'
  public familyPhoto = 'https://res.cloudinary.com/dlwvj8g7o/image/upload/v1762885166/IMG_1886_gpzdkl.jpg'
  public poovathiMainifamily = 'https://res.cloudinary.com/dlwvj8g7o/image/upload/v1762885166/IMG_1897_uarqbn.jpg'
  public familyImg = 'https://res.cloudinary.com/dlwvj8g7o/image/upload/v1762885164/IMG_1882_g9zqdr.jpg'
  public seethaFamily = 'https://res.cloudinary.com/dlwvj8g7o/image/upload/v1762885163/IMG_1860_dbyxdl.jpg'
  public majorandMsamy = 'https://res.cloudinary.com/dlwvj8g7o/image/upload/v1762885163/IMG_1850_bsdpbv.jpg'
  public senbaFamily = 'https://res.cloudinary.com/dlwvj8g7o/image/upload/v1762885161/IMG_1842_zaithb.jpg'
  public ceremonialPlateExchange = 'https://res.cloudinary.com/dlwvj8g7o/image/upload/v1762885161/IMG_1792_gd3hgz.jpg'
  public pottuVaithalforMe = 'https://res.cloudinary.com/dlwvj8g7o/image/upload/v1762885160/IMG_1758_bdcvkq.jpg'
  public anukupottuvaithal = 'https://res.cloudinary.com/dlwvj8g7o/image/upload/v1762885159/IMG_1846_x5a5jl.jpg'
  public eachFatherShakeHands = 'https://res.cloudinary.com/dlwvj8g7o/image/upload/v1762885159/IMG_1801_tpap5k.jpg'
  public sathyapoomaniFamily = 'https://res.cloudinary.com/dlwvj8g7o/image/upload/v1762885158/IMG_1771_t4rgsf.jpg'
  public appaPottuToAnu = 'https://res.cloudinary.com/dlwvj8g7o/image/upload/v1762885158/IMG_1749_s7rwrg.jpg'
  public jakMeAnanthi = 'https://res.cloudinary.com/dlwvj8g7o/image/upload/v1762885157/IMG_1733_annqho.jpg'
  public ammaGarlandToAnu = 'https://res.cloudinary.com/dlwvj8g7o/image/upload/v1762885157/IMG_1746_mcx7fe.jpg'
  public meSelfieWithSutties = 'https://res.cloudinary.com/dlwvj8g7o/image/upload/v1762885157/IMG_1708_oqgwya.jpg'
  public giftItemsWrap = 'https://res.cloudinary.com/dlwvj8g7o/image/upload/v1762885157/IMG_1698_ticejx.jpg'
  public receiveUSinBrideSide = 'https://res.cloudinary.com/dlwvj8g7o/image/upload/v1762885157/IMG_1630_gbaa25.jpg'
  public meAndAnu = 'https://res.cloudinary.com/dlwvj8g7o/image/upload/v1762844748/IMG_1902_sg2xgq.jpg'
  public majorAndJC = 'https://res.cloudinary.com/dlwvj8g7o/image/upload/v1762844747/IMG_1896_crw7xv.jpg'
  public sathyaAkkaFamily = 'https://res.cloudinary.com/dlwvj8g7o/image/upload/v1762844740/IMG_1862_tuj88b.jpg'
  public ananthiFamily = 'https://res.cloudinary.com/dlwvj8g7o/image/upload/v1762844739/IMG_1880_eq0bbj.jpg'
  public vinothRajavelGift = 'https://res.cloudinary.com/dlwvj8g7o/image/upload/v1762844739/IMG_1891_z5be1n.jpg'
  public thangamSittiFamily = 'https://res.cloudinary.com/dlwvj8g7o/image/upload/v1762844737/IMG_1858_k9xn9a.jpg'
  public aakashAndSivalingam = 'https://res.cloudinary.com/dlwvj8g7o/image/upload/v1762844737/IMG_1855_mns1r4.jpg'
  public gopalMamaFamily = 'https://res.cloudinary.com/dlwvj8g7o/image/upload/v1762844736/IMG_1761_rqvast.jpg'
  public sriFamily = 'https://res.cloudinary.com/dlwvj8g7o/image/upload/v1762844735/IMG_1870_c4qg7u.jpg'
  public kumarAnnanFamily = 'https://res.cloudinary.com/dlwvj8g7o/image/upload/v1762844733/IMG_1843_f39kmk.jpg'
  public muthuSamyBroFamily = 'https://res.cloudinary.com/dlwvj8g7o/image/upload/v1762844729/IMG_1841_irccod.jpg'
  public balkuttyBroFamily = 'https://res.cloudinary.com/dlwvj8g7o/image/upload/v1762844730/IMG_1840_bgmtx1.jpg'
  public arulAnnanFamily = 'https://res.cloudinary.com/dlwvj8g7o/image/upload/v1762844724/IMG_1837_tesj40.jpg'
  public anuAlone = 'https://res.cloudinary.com/dlwvj8g7o/image/upload/v1762844727/IMG_1607_udllgu.jpg'
  public subriyaGift = 'https://res.cloudinary.com/dlwvj8g7o/image/upload/v1762844727/IMG_1643_uzxfwt.jpg'
  public mePottuToAnu = 'https://res.cloudinary.com/dlwvj8g7o/image/upload/v1762844724/IMG_1838_csjv3n.jpg'
  public anuHandMeTouch = 'https://res.cloudinary.com/dlwvj8g7o/image/upload/v1762844721/IMG_1811_a0kr0m.jpg'
  public pattiwithUs = 'https://res.cloudinary.com/dlwvj8g7o/image/upload/v1762844715/IMG_1765_jhjdsb.jpg'
  public ringImg = 'https://res.cloudinary.com/dlwvj8g7o/image/upload/v1762844715/IMG_1803_inleuy.jpg'
  public seethaGift = 'https://res.cloudinary.com/dlwvj8g7o/image/upload/v1762844712/IMG_1640_pagib1.jpg'
  public jakGift = 'https://res.cloudinary.com/dlwvj8g7o/image/upload/v1762844707/IMG_1641_je5rbu.jpg'
  public ajiGift = 'https://res.cloudinary.com/dlwvj8g7o/image/upload/v1762844705/IMG_1642_tj6kzx.jpg'
  public abiGift = 'https://res.cloudinary.com/dlwvj8g7o/image/upload/v1762844705/IMG_1644_xgpyis.jpg'
  public engagementImages: string[] = [];
  public giftGivingImages: string[] = [];
  public failyImages: string[] = [];

  constructor() { }

  ngOnInit(): void {
    this.engagementImages = [
      this.entryImg,
      this.receiveUSinBrideSide,
      this.houseEntryImg,
      this.eachFatherShakeHands,
      this.ceremonialPlateExchange,
      this.pottuVaithalforMe,
      this.anukupottuvaithal,
      this.appaPottuToAnu,
      this.jakMeAnanthi,
      this.meSelfieWithSutties,
      this.meAndAnu,
      this.giftItemsWrap,
      // this.anuAlone,
      this.mePottuToAnu,
      this.anuHandMeTouch,
      this.pattiwithUs,
      this.ringImg,

    ];
    this.giftGivingImages = [
      this.seethaGift,
      this.jakGift,
      this.ajiGift,
      this.abiGift,
      this.subriyaGift,
      this.ammaGarlandToAnu,
    ]
    this.failyImages=[
      this.familyImg,
      this.familyPhoto,
      this.ananthiFamily,
      this.seethaFamily,
      this.thangamSittiFamily,
      this.vinothRajavelGift,
      this.balkuttyBroFamily,
      this.poovathiMainifamily,
      this.sathyaAkkaFamily,
      this.sriFamily,
      this.sathyapoomaniFamily,
      this.senbaFamily,
      this.arulAnnanFamily,
      this.kumarAnnanFamily,
      this.aakashAndSivalingam,
      this.gopalMamaFamily,
      this.majorandMsamy,
      this.majorAndJC,
      

    ]
    const allImages = [
    ...this.engagementImages,
    ...this.giftGivingImages,
    ...this.failyImages
  ];

  this.preloadImages(allImages);
  }
  preloadImages(urls: string[]) {
  urls.forEach(url => {
    const img = new Image();
    img.src = url + '?f_auto,q_auto,w_900,c_scale';
  });
}

}
