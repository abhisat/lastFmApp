import React from "react";
import { App } from "./App";
import EnzymeAdapter from "enzyme-adapter-react-16";
import Enzyme, { mount } from "enzyme";
import toJson from "enzyme-to-json";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";

Enzyme.configure({
  adapter: new EnzymeAdapter()
});
var mock = new MockAdapter(axios);

const fakeResponse = {
  title: "Uploads from everyone",
  link: "https://www.flickr.com/photos/",
  description: "",
  modified: "2020-02-17T08:08:53Z",
  generator: "https://www.flickr.com",
  items: [
    {
      title: "GODAVARI BY KERSOM 101 To 108 Series Kurtis Wholesale 8 Pcs",
      link: "https://www.flickr.com/photos/186442569@N08/49546287068/",
      media: {
        m: "https://live.staticflickr.com/65535/49546287068_db0d0b61b8_m.jpg"
      },
      date_taken: "2020-02-17T00:08:53-08:00",
      description:
        ' <p><a href="https://www.flickr.com/people/186442569@N08/">wholesalealisa</a> posted a photo:</p> <p><a href="https://www.flickr.com/photos/186442569@N08/49546287068/" title="GODAVARI BY KERSOM 101 To 108 Series Kurtis Wholesale 8 Pcs"><img src="https://live.staticflickr.com/65535/49546287068_db0d0b61b8_m.jpg" width="164" height="240" alt="GODAVARI BY KERSOM 101 To 108 Series Kurtis Wholesale 8 Pcs" /></a></p> <p> <a href="http://bit.ly/3bOx9cj" rel="noreferrer nofollow">bit.ly/3bOx9cj</a></p>',
      published: "2020-02-17T08:08:53Z",
      author: 'nobody@flickr.com ("wholesalealisa")',
      author_id: "186442569@N08",
      tags: ""
    },
    {
      title:
        "Foto con el móvil y retocado con snapseed tren frontal #Tren #snapseed #sevilla",
      link: "https://www.flickr.com/photos/sergiodominguez/49546287688/",
      media: {
        m: "https://live.staticflickr.com/65535/49546287688_880725e19f_m.jpg"
      },
      date_taken: "2020-02-16T18:49:41-08:00",
      description:
        ' <p><a href="https://www.flickr.com/people/sergiodominguez/">Sergio J. Dominguez Leal</a> posted a photo:</p> <p><a href="https://www.flickr.com/photos/sergiodominguez/49546287688/" title="Foto con el móvil y retocado con snapseed tren frontal #Tren #snapseed #sevilla"><img src="https://live.staticflickr.com/65535/49546287688_880725e19f_m.jpg" width="114" height="240" alt="Foto con el móvil y retocado con snapseed tren frontal #Tren #snapseed #sevilla" /></a></p> ',
      published: "2020-02-17T08:09:11Z",
      author: 'nobody@flickr.com ("Sergio J. Dominguez Leal")',
      author_id: "41423105@N02",
      tags: "tren snapseed sevilla"
    },
    {
      title: "Công dụng của Lumispa Accent là gì?",
      link: "https://www.flickr.com/photos/pharmanexnuskin/49546287838/",
      media: {
        m: "https://live.staticflickr.com/65535/49546287838_4a9483ce0e_m.jpg"
      },
      date_taken: "2020-02-17T15:09:14-08:00",
      description:
        ' <p><a href="https://www.flickr.com/people/pharmanexnuskin/">pharmanexnuskin123</a> posted a photo:</p> <p><a href="https://www.flickr.com/photos/pharmanexnuskin/49546287838/" title="Công dụng của Lumispa Accent là gì?"><img src="https://live.staticflickr.com/65535/49546287838_4a9483ce0e_m.jpg" width="240" height="240" alt="Công dụng của Lumispa Accent là gì?" /></a></p> <p>nubeauty Tin tức Làm Đẹp <a href="https://ift.tt/322RyWA" rel="noreferrer nofollow">ift.tt/322RyWA</a></p>',
      published: "2020-02-17T08:09:14Z",
      author: 'nobody@flickr.com ("pharmanexnuskin123")',
      author_id: "142524978@N04",
      tags: "nubeauty nubeautycomvn"
    },
    {
      title: " ",
      link: "https://www.flickr.com/photos/147528061@N05/49546289323/",
      media: {
        m: "https://live.staticflickr.com/65535/49546289323_9eee7644ec_m.jpg"
      },
      date_taken: "2020-02-16T10:54:03-08:00",
      description:
        ' <p><a href="https://www.flickr.com/people/147528061@N05/">michaelackroyd</a> posted a photo:</p> <p><a href="https://www.flickr.com/photos/147528061@N05/49546289323/" title=" "><img src="https://live.staticflickr.com/65535/49546289323_9eee7644ec_m.jpg" width="240" height="178" alt=" " /></a></p> <p>Made with Repix (<a href="http://repix.it" rel="noreferrer nofollow">repix.it</a>)</p>',
      published: "2020-02-17T08:09:53Z",
      author: 'nobody@flickr.com ("michaelackroyd")',
      author_id: "147528061@N05",
      tags: ""
    },
    {
      title: "Dự án Căn Hộ Lovera Vista Khang Điền",
      link: "https://www.flickr.com/photos/171589995@N07/49546290203/",
      media: {
        m: "https://live.staticflickr.com/65535/49546290203_b3b4acc11f_m.jpg"
      },
      date_taken: "2019-07-24T13:31:37-08:00",
      description:
        ' <p><a href="https://www.flickr.com/people/171589995@N07/">Homeland SG</a> posted a photo:</p> <p><a href="https://www.flickr.com/photos/171589995@N07/49546290203/" title="Dự án Căn Hộ Lovera Vista Khang Điền"><img src="https://live.staticflickr.com/65535/49546290203_b3b4acc11f_m.jpg" width="240" height="177" alt="Dự án Căn Hộ Lovera Vista Khang Điền" /></a></p> <p>Form website Homeland SG <a href="https://ift.tt/2V1n7yj" rel="noreferrer nofollow">ift.tt/2V1n7yj</a><br /> <a href="https://homelandsg.vn/" rel="noreferrer nofollow">homelandsg.vn/</a></p>',
      published: "2020-02-17T08:10:14Z",
      author: 'nobody@flickr.com ("Homeland SG")',
      author_id: "171589995@N07",
      tags: "bất động sản dự án căn hộ nổi bật"
    },
    {
      title: "Munson Creek Falls",
      link: "https://www.flickr.com/photos/farmerted1971/49546290268/",
      media: {
        m: "https://live.staticflickr.com/65535/49546290268_e2f5242bbb_m.jpg"
      },
      date_taken: "2020-02-15T14:08:07-08:00",
      description:
        ' <p><a href="https://www.flickr.com/people/farmerted1971/">Scott Allen Tice</a> posted a photo:</p> <p><a href="https://www.flickr.com/photos/farmerted1971/49546290268/" title="Munson Creek Falls"><img src="https://live.staticflickr.com/65535/49546290268_e2f5242bbb_m.jpg" width="160" height="240" alt="Munson Creek Falls" /></a></p> ',
      published: "2020-02-17T08:10:16Z",
      author: 'nobody@flickr.com ("Scott Allen Tice")',
      author_id: "60824539@N02",
      tags: "trees coast landscape waterfall oregon forest"
    },
    {
      title: "7e02vibe2m5ec1rs5eacwr_screenshot",
      link: "https://www.flickr.com/photos/170928935@N05/49546290763/",
      media: {
        m: "https://live.staticflickr.com/65535/49546290763_85e5749313_m.jpg"
      },
      date_taken: "2020-02-17T00:10:30-08:00",
      description:
        ' <p><a href="https://www.flickr.com/people/170928935@N05/">mickykfederickf5</a> posted a photo:</p> <p><a href="https://www.flickr.com/photos/170928935@N05/49546290763/" title="7e02vibe2m5ec1rs5eacwr_screenshot"><img src="https://live.staticflickr.com/65535/49546290763_85e5749313_m.jpg" width="240" height="180" alt="7e02vibe2m5ec1rs5eacwr_screenshot" /></a></p> <p>by-[ChipVN]-Image-Uploader</p>',
      published: "2020-02-17T08:10:30Z",
      author: 'nobody@flickr.com ("mickykfederickf5")',
      author_id: "170928935@N05",
      tags: "bychipvnimageuploader"
    },
    {
      title: "20200215_21021102-Edit",
      link: "https://www.flickr.com/photos/les_stockton/49546291028/",
      media: {
        m: "https://live.staticflickr.com/65535/49546291028_d885d9b162_m.jpg"
      },
      date_taken: "2020-02-15T21:02:11-08:00",
      description:
        ' <p><a href="https://www.flickr.com/people/les_stockton/">Les_Stockton</a> posted a photo:</p> <p><a href="https://www.flickr.com/photos/les_stockton/49546291028/" title="20200215_21021102-Edit"><img src="https://live.staticflickr.com/65535/49546291028_d885d9b162_m.jpg" width="240" height="160" alt="20200215_21021102-Edit" /></a></p> ',
      published: "2020-02-17T08:10:35Z",
      author: 'nobody@flickr.com ("Les_Stockton")',
      author_id: "24914070@N07",
      tags:
        "tulsaoilers wichitathunder ianmcnulty jääkiekko jégkorong sport xokkey eishockey haca hoci hockey hokej hokejs hokey hoki hoquei icehockey ledoritulys íshokkí"
    },
    {
      title: "20200216--9.jpg",
      link: "https://www.flickr.com/photos/houdinigraphics/49546291263/",
      media: {
        m: "https://live.staticflickr.com/65535/49546291263_3b07eb2942_m.jpg"
      },
      date_taken: "2020-02-16T16:09:14-08:00",
      description:
        ' <p><a href="https://www.flickr.com/people/houdinigraphics/">Houdini Graphics</a> posted a photo:</p> <p><a href="https://www.flickr.com/photos/houdinigraphics/49546291263/" title="20200216--9.jpg"><img src="https://live.staticflickr.com/65535/49546291263_3b07eb2942_m.jpg" width="226" height="240" alt="20200216--9.jpg" /></a></p> ',
      published: "2020-02-17T08:10:38Z",
      author: 'nobody@flickr.com ("Houdini Graphics")',
      author_id: "139326482@N07",
      tags: ""
    },
    {
      title: "Nhện nhảy hyllus - con cái (mẫu từ Sóc Trăng. Việt nam)",
      link: "https://www.flickr.com/photos/tranthengoc/49546791226/",
      media: {
        m: "https://live.staticflickr.com/65535/49546791226_a58fd71d50_m.jpg"
      },
      date_taken: "2020-02-16T18:17:52-08:00",
      description:
        ' <p><a href="https://www.flickr.com/people/tranthengoc/">thengoctran19</a> posted a photo:</p> <p><a href="https://www.flickr.com/photos/tranthengoc/49546791226/" title="Nhện nhảy hyllus - con cái (mẫu từ Sóc Trăng. Việt nam)"><img src="https://live.staticflickr.com/65535/49546791226_a58fd71d50_m.jpg" width="240" height="160" alt="Nhện nhảy hyllus - con cái (mẫu từ Sóc Trăng. Việt nam)" /></a></p> ',
      published: "2020-02-17T08:09:19Z",
      author: 'nobody@flickr.com ("thengoctran19")',
      author_id: "124640709@N05",
      tags: ""
    },
    {
      title: "“Ancient Breath” Vomitus Art piece.",
      link: "https://www.flickr.com/photos/186782889@N06/49546792026/",
      media: {
        m: "https://live.staticflickr.com/65535/49546792026_4296c61aeb_m.jpg"
      },
      date_taken: "2020-02-17T00:06:37-08:00",
      description:
        ' <p><a href="https://www.flickr.com/people/186782889@N06/">Dark World Studios</a> posted a photo:</p> <p><a href="https://www.flickr.com/photos/186782889@N06/49546792026/" title="“Ancient Breath” Vomitus Art piece."><img src="https://live.staticflickr.com/65535/49546792026_4296c61aeb_m.jpg" width="148" height="240" alt="“Ancient Breath” Vomitus Art piece." /></a></p> ',
      published: "2020-02-17T08:09:40Z",
      author: 'nobody@flickr.com ("Dark World Studios")',
      author_id: "186782889@N06",
      tags: ""
    },
    {
      title:
        "Vertical Talus es una deformidad severa de infantes que luego le impedirá que el niño pueda caminar. El tratamiento tiene que ser diligente para evitar la desestabilización. Si no se atiende a tiempo el niño no va a poder caminar.",
      link: "https://www.flickr.com/photos/145411105@N04/49546793006/",
      media: {
        m: "https://live.staticflickr.com/65535/49546793006_84721fb3be_m.jpg"
      },
      date_taken: "2020-02-16T20:07:12-08:00",
      description:
        ' <p><a href="https://www.flickr.com/people/145411105@N04/">rolandomelendez</a> posted a photo:</p> <p><a href="https://www.flickr.com/photos/145411105@N04/49546793006/" title="Vertical Talus es una deformidad severa de infantes que luego le impedirá que el niño pueda caminar. El tratamiento tiene que ser diligente para evitar la desestabilización. Si no se atiende a tiempo el niño no va a poder caminar."><img src="https://live.staticflickr.com/65535/49546793006_84721fb3be_m.jpg" width="240" height="240" alt="Vertical Talus es una deformidad severa de infantes que luego le impedirá que el niño pueda caminar. El tratamiento tiene que ser diligente para evitar la desestabilización. Si no se atiende a tiempo el niño no va a poder caminar." /></a></p> ',
      published: "2020-02-17T08:10:00Z",
      author: 'nobody@flickr.com ("rolandomelendez")',
      author_id: "145411105@N04",
      tags: ""
    },
    {
      title: "E-2020-02-17-1710_f",
      link: "https://www.flickr.com/photos/ncsm-sky/49546793636/",
      media: {
        m: "https://live.staticflickr.com/65535/49546793636_c9bd13bf0c_m.jpg"
      },
      date_taken: "2020-02-17T17:10:00-08:00",
      description:
        ' <p><a href="https://www.flickr.com/people/ncsm-sky/">ncsmsky</a> posted a photo:</p> <p><a href="https://www.flickr.com/photos/ncsm-sky/49546793636/" title="E-2020-02-17-1710_f"><img src="https://live.staticflickr.com/65535/49546793636_c9bd13bf0c_m.jpg" width="240" height="240" alt="E-2020-02-17-1710_f" /></a></p> ',
      published: "2020-02-17T08:10:16Z",
      author: 'nobody@flickr.com ("ncsmsky")',
      author_id: "97102756@N07",
      tags: "20200217"
    },
    {
      title: "Für mehr Østigårds",
      link: "https://www.flickr.com/photos/der_aufzynd/49546793781/",
      media: {
        m: "https://live.staticflickr.com/65535/49546793781_d4c5e8d8d9_m.jpg"
      },
      date_taken: "2020-02-17T09:10:20-08:00",
      description:
        ' <p><a href="https://www.flickr.com/people/der_aufzynd/">rim light</a> posted a photo:</p> <p><a href="https://www.flickr.com/photos/der_aufzynd/49546793781/" title="Für mehr Østigårds"><img src="https://live.staticflickr.com/65535/49546793781_d4c5e8d8d9_m.jpg" width="240" height="160" alt="Für mehr Østigårds" /></a></p> <p>Bigger image and more information at <a href="https://www.stefangroenveld.de/2020/fuer-mehr-oestigaards/" rel="noreferrer nofollow">www.stefangroenveld.de/2020/fuer-mehr-oestigaards/</a></p>',
      published: "2020-02-17T08:10:20Z",
      author: 'nobody@flickr.com ("rim light")',
      author_id: "17078353@N00",
      tags: "dynamodresden fcstpauli heimspiel saison201920 unentschieden"
    },
    {
      title: "Untitled",
      link: "https://www.flickr.com/photos/183795746@N07/49546794901/",
      media: {
        m: "https://live.staticflickr.com/65535/49546794901_99e8d6822a_m.jpg"
      },
      date_taken: "2020-02-17T00:10:46-08:00",
      description:
        ' <p><a href="https://www.flickr.com/people/183795746@N07/">morrisonfreya1</a> posted a photo:</p> <p><a href="https://www.flickr.com/photos/183795746@N07/49546794901/" title="Untitled"><img src="https://live.staticflickr.com/65535/49546794901_99e8d6822a_m.jpg" width="240" height="180" alt="Untitled" /></a></p> <p><a href="http://maps.secondlife.com/secondlife/AZ Sonora West/67/43/29?sourceid=slshare_photo&amp;utm_source=flickr&amp;utm_medium=photo&amp;utm_campaign=slshare" rel="noreferrer nofollow">Visit this location at BL Borderlands - Sonora West in Second Life</a></p>',
      published: "2020-02-17T08:10:46Z",
      author: 'nobody@flickr.com ("morrisonfreya1")',
      author_id: "183795746@N07",
      tags:
        "firestorm secondlife secondlife:region=azsonorawest secondlife:parcel=blborderlandssonorawest secondlife:x=67 secondlife:y=43 secondlife:z=28"
    },
    {
      title: "Fruit Pastry Cake",
      link: "https://www.flickr.com/photos/stinkee/49547020157/",
      media: {
        m: "https://live.staticflickr.com/65535/49547020157_de72750cb1_m.jpg"
      },
      date_taken: "2020-02-17T14:20:29-08:00",
      description:
        ' <p><a href="https://www.flickr.com/people/stinkee/">Stinkee Beek</a> posted a photo:</p> <p><a href="https://www.flickr.com/photos/stinkee/49547020157/" title="Fruit Pastry Cake"><img src="https://live.staticflickr.com/65535/49547020157_de72750cb1_m.jpg" width="240" height="180" alt="Fruit Pastry Cake" /></a></p> ',
      published: "2020-02-17T08:08:47Z",
      author: 'nobody@flickr.com ("Stinkee Beek")',
      author_id: "66919430@N00",
      tags: ""
    },
    {
      title: "10.phong-ngu-01_View03.jpg",
      link: "https://www.flickr.com/photos/40129895@N03/49547021192/",
      media: {
        m: "https://live.staticflickr.com/65535/49547021192_bfd0c4b524_m.jpg"
      },
      date_taken: "2020-02-17T00:09:13-08:00",
      description:
        ' <p><a href="https://www.flickr.com/people/40129895@N03/">nhadatvideo</a> posted a photo:</p> <p><a href="https://www.flickr.com/photos/40129895@N03/49547021192/" title="10.phong-ngu-01_View03.jpg"><img src="https://live.staticflickr.com/65535/49547021192_bfd0c4b524_m.jpg" width="240" height="150" alt="10.phong-ngu-01_View03.jpg" /></a></p> ',
      published: "2020-02-17T08:09:13Z",
      author: 'nobody@flickr.com ("nhadatvideo")',
      author_id: "40129895@N03",
      tags: "nhadatvideo"
    },
    {
      title:
        "Keep smiling to face difficult things. You will get the things you want if you still try.",
      link: "https://www.flickr.com/photos/26797900@N07/49547022737/",
      media: {
        m: "https://live.staticflickr.com/65535/49547022737_dddf8735c6_m.jpg"
      },
      date_taken: "2020-02-07T05:35:37-08:00",
      description:
        ' <p><a href="https://www.flickr.com/people/26797900@N07/">kirei@tenjin</a> posted a photo:</p> <p><a href="https://www.flickr.com/photos/26797900@N07/49547022737/" title="Keep smiling to face difficult things. You will get the things you want if you still try."><img src="https://live.staticflickr.com/65535/49547022737_dddf8735c6_m.jpg" width="240" height="240" alt="Keep smiling to face difficult things. You will get the things you want if you still try." /></a></p> ',
      published: "2020-02-17T08:09:53Z",
      author: 'nobody@flickr.com ("kirei@tenjin")',
      author_id: "26797900@N07",
      tags: ""
    },
    {
      title:
        "How to be root user in termux | without rooting your device | termux 2020 hacking video",
      link: "https://www.flickr.com/photos/186541725@N03/49547023677/",
      media: {
        m: "https://live.staticflickr.com/65535/49547023677_25ea71b384_m.jpg"
      },
      date_taken: "2020-02-17T00:10:14-08:00",
      description:
        ' <p><a href="https://www.flickr.com/people/186541725@N03/">geoislamic2</a> posted a photo:</p> <p><a href="https://www.flickr.com/photos/186541725@N03/49547023677/" title="How to be root user in termux | without rooting your device | termux 2020 hacking video"><img src="https://live.staticflickr.com/65535/49547023677_25ea71b384_m.jpg" width="240" height="148" alt="How to be root user in termux | without rooting your device | termux 2020 hacking video" /></a></p> <p>#righttech #arslanchishti #termux git clone :https://ift.tt/31ZtRyl plaese Subcribe to Our channel #righttech and don\'t forget to subcribed. --------------------------------------------------------------------------------------------- LIKE ➡ SHARE ➡ SUBSCRIBE Subscribe Here: <a href="https://www.youtube.com/c/rightTecha" rel="noreferrer nofollow">www.youtube.com/c/rightTecha</a> Website <a href="https://jobsthink.com" rel="noreferrer nofollow">jobsthink.com</a> Facebook Fan Page: <a href="https://ift.tt/2o5ycQF" rel="noreferrer nofollow">ift.tt/2o5ycQF</a> instagram: <a href="https://ift.tt/2YfO3sQ" rel="noreferrer nofollow">ift.tt/2YfO3sQ</a> --------------------------------------------------------------------------------------------- All Full course playlist Url Links 1:Adsnetwork Series <a href="https://urlzs.com/Pd8Lt" rel="noreferrer nofollow">urlzs.com/Pd8Lt</a> 2:wix full course <a href="https://urlzs.com/w5i26" rel="noreferrer nofollow">urlzs.com/w5i26</a> 3:Termux full course <a href="https://urlzs.com/WNVEK" rel="noreferrer nofollow">urlzs.com/WNVEK</a> 4: Hacking Tips &amp; Tricks <a href="https://urlzs.com/U6X49" rel="noreferrer nofollow">urlzs.com/U6X49</a> 5: blogging Full Course <a href="https://urlzs.com/kreyh" rel="noreferrer nofollow">urlzs.com/kreyh</a> 6: online earning <a href="https://urlzs.com/oNX7u" rel="noreferrer nofollow">urlzs.com/oNX7u</a> 7: Kali linux Full course <a href="https://urlzs.com/cunxm" rel="noreferrer nofollow">urlzs.com/cunxm</a> 8: cmd Full course <a href="https://urlzs.com/HC6FX" rel="noreferrer nofollow">urlzs.com/HC6FX</a> ------------------------------------ This Channel does not promote any illegal activities(hacking/scamming/harmful content) every single thing is shown only and only for educational purpose.In this video i\'m going to telling abuout for tech information This Channel does not promote any illegal activities(hacking/scamming/harmful content) every single thing is shown only and only for educational purpose. -------------------------------------------------------------------------------------------------------------------------------------------- DISCLAIMER: This Channel DOES NOT Promote or encourage Any illegal activities , all contents provided by This Channel is meant for EDUCATIONAL PURPOSE only . Copyright Disclaimer Under Section 107 of the Copyright Act 1976, allowance is made for &quot;fair use&quot; for purposes such as criticism, comment, news reporting, teaching, scholarship, and research. Fair use is a use permitted by copyright statute that might otherwise be infringing. Non-profit, educational or personal use tips the balance in favor of fair use. --------------------------------------------------------------------------------------------------------------------------------------</p>',
      published: "2020-02-17T08:10:14Z",
      author: 'nobody@flickr.com ("geoislamic2")',
      author_id: "186541725@N03",
      tags:
        "right youtube online earning hacking programming dailymotion course arslan chishti"
    },
    {
      title: "Beauté hivernal",
      link: "https://www.flickr.com/photos/64249357@N08/49547025127/",
      media: {
        m: "https://live.staticflickr.com/65535/49547025127_cde2e32668_m.jpg"
      },
      date_taken: "2020-02-17T09:05:48-08:00",
      description:
        ' <p><a href="https://www.flickr.com/people/64249357@N08/">Køb</a> posted a photo:</p> <p><a href="https://www.flickr.com/photos/64249357@N08/49547025127/" title="Beauté hivernal"><img src="https://live.staticflickr.com/65535/49547025127_cde2e32668_m.jpg" width="240" height="180" alt="Beauté hivernal" /></a></p> ',
      published: "2020-02-17T08:10:43Z",
      author: 'nobody@flickr.com ("Køb")',
      author_id: "64249357@N08",
      tags: ""
    }
  ]
};

mock.onGet().reply(200, fakeResponse);

const props = {};

const state = {};

const mountApp = (props = {}, state = {}) => {
  const wrapper = mount(<App {...props} />);
  wrapper.update();
  return wrapper;
};

describe("<App/>", () => {
  let App: Enzyme.ReactWrapper;

  beforeEach(() => {
    App = mountApp(props, state);
  });

  afterEach(() => {});

  it("renders without crashing", () => {
    mountApp(props, state);
  });

  it("Matches the snapshot", () => {
    expect(toJson(App)).toMatchSnapshot();
  });
});
