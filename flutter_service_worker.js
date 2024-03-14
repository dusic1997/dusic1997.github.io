'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"7xI1n8tNul.txt": "814a0d90bf39b2b46134a402945ac4b6",
"assets/AssetManifest.bin": "2ef500848bcf21ef37bb84f69aba9734",
"assets/AssetManifest.json": "120bf0e2129f6272e606c7d04fe9e52d",
"assets/assets/images/%25E5%2580%2592%25E8%25AE%25A1%25E6%2597%25B6@3x.png": "67315a1789ae8ec45a0ae092760de619",
"assets/assets/images/%25E5%258D%25A1%25E7%2589%2587.svg": "4efd9ae2926c2dcdb6353af1d321356b",
"assets/assets/images/%25E5%2595%2586%25E5%2593%2581%25E5%259B%25BE%25E9%2581%25AE%25E7%25BD%25A9.png": "0df6ac29c7f57e929984d6db1e62dacc",
"assets/assets/images/%25E5%2595%2586%25E5%2593%2581%25E5%259B%25BE.png.bak.png": "1abad6445e3564207209e915cdec3bd4",
"assets/assets/images/%25E5%2595%2586%25E5%2593%2581%25E5%25A4%25A7%25E5%259B%25BE.png.bak.png": "700a3bd291f509cf27e1266b75a3e9ae",
"assets/assets/images/%25E5%2595%2586%25E8%25B6%2585-%25E8%2583%258C%25E6%2599%25AF.png": "b72753d2426d67ac7524186f20f7f478",
"assets/assets/images/%25E5%2595%2586%25E8%25B6%2585-%25E8%2583%258C%25E6%2599%25AFtop.png": "1be445d0e29d57a1b9483e189c1d6cd8",
"assets/assets/images/%25E5%25AE%25A2%25E6%259C%258D.png": "f5533354803f86f7e99fbf658e26ba5a",
"assets/assets/images/%25E5%25B0%258F%25E7%25A8%258B%25E5%25BA%258Fbanner.jpg": "6603479a99ae399caf300c266c5e4ac3",
"assets/assets/images/%25E5%25BA%2597%25E9%2593%25BA%25E5%259B%25BE.png": "6155f92b192378e18c880a6a6e427a91",
"assets/assets/images/%25E5%25BA%2597%25E9%2593%25BA%25E5%259B%25BE.svg": "21ffa34f3814063b1331005392846b41",
"assets/assets/images/%25E5%25BE%25AE%25E4%25BF%25A1.png": "cfa7de8f5481a16ce2e67aeeb4856fc9",
"assets/assets/images/%25E6%258A%2596%25E9%259F%25B3.png": "29f9816fb7296d321bbe8fc1c023db13",
"assets/assets/images/%25E6%2594%25AF%25E4%25BB%2598%25E5%25AE%259D.png": "83cdcc4756863482ab8e4edd843e9a4e",
"assets/assets/images/%25E6%259C%25AA%25E6%25A0%2587%25E9%25A2%2598-1%25201.png": "d6a8a61e3294865d9793fc6ac63c9b30",
"assets/assets/images/%25E6%259C%25AA%25E6%25A0%2587%25E9%25A2%2598-1%25202.png": "d0ee9b896b65247ef78376cd4cd375dc",
"assets/assets/images/%25E6%259C%25AA%25E6%25A0%2587%25E9%25A2%2598-1%25203.png": "0ee67570bb95deacc31b0f5f8ed82588",
"assets/assets/images/%25E6%259C%25AA%25E6%25A0%2587%25E9%25A2%2598-1%25204.png": "c3f253c8cd5697b1ee802e9233b55e60",
"assets/assets/images/%25E6%25B8%2585%25E7%25A9%25BA%25E8%25B4%25AD%25E7%2589%25A9%25E8%25BD%25A6%25E5%25BC%25B9%25E7%25AA%2597.png": "56e09c8d8146278e436887222a23f099",
"assets/assets/images/%25E7%2594%259F%25E6%2597%25A5.png": "b9d3d327539df2d76573750deb64100e",
"assets/assets/images/%25E7%2599%25BE%25E5%25BA%25A6%25E5%259C%25B0%25E5%259B%25BE.svg": "2e159329298d5a1d91a78ee7463113a3",
"assets/assets/images/%25E7%259F%25AD%25E4%25BF%25A1%2520(1).png": "387575fe5aa258d8964dad92f596829f",
"assets/assets/images/%25E7%259F%25AD%25E4%25BF%25A1.png": "d93b8e8c2e0fa72d5b3aa9744ed536ce",
"assets/assets/images/%25E8%2583%258C%25E6%2599%25AF%25E5%259B%25BE-%25E6%2596%2587%25E6%2597%2585%25E9%25A2%2591%25E9%2581%2593.png": "ebf283737a172747b7512551c3a62a25",
"assets/assets/images/%25E8%2585%25BE%25E8%25AE%25AF%25E5%259C%25B0%25E5%259B%25BE.svg": "d633c5b010dc1d8086ff6edbdddf5c46",
"assets/assets/images/%25E9%25B2%259C%25E8%258A%25B1%25E7%25AB%2599%25E9%25A6%2596%25E5%259B%25BE.png": "5b44076a1131e87b87d47dddb5c8567f",
"assets/assets/images/%25E9%25B2%259C%25E8%258A%25B1%25E7%25AB%2599%25E9%25A6%2596%25E5%259B%25BEtop.png": "06e0824024ff7af30d75f2a5b4faae84",
"assets/assets/images/%25E9%25BB%2598%25E8%25AE%25A4%25E5%25B9%25BF%25E5%2591%258A%25E5%259B%25BE%25E7%2589%2587.png": "2e36f911b68aaf0b3f123d9f5f7bab98",
"assets/assets/images/2.0x/ic_bg_l.png": "8f838ac1d128a56e020511750d184981",
"assets/assets/images/2.0x/ic_bg_r.png": "93baa59afa61da12fd2cfae4be54f41c",
"assets/assets/images/2.0x/ic_check_box.png": "81ebc9c1fbfdaf5bbd17f10b2dd188d4",
"assets/assets/images/2.0x/ic_figure.png": "8419b2d3ff2cb3cd28b73963975e6d97",
"assets/assets/images/2.0x/ic_home_banner.png": "b2f9baf0b99ce6938e12d3afea17fac8",
"assets/assets/images/2.0x/ic_lvyouchanping.png": "17cb1ab6ec024320a3a1cc96d989b3f6",
"assets/assets/images/2.0x/ic_mingsujiudian.png": "482e1ce59e7979b699bc97d912735cbe",
"assets/assets/images/2.0x/ic_mp_san.png": "4c757df36b96af98174e9202d2f6af47",
"assets/assets/images/2.0x/ic_mp_setting.png": "465f2a9a5152b94d660b62af3b43f480",
"assets/assets/images/2.0x/ic_nongpingzhixiao.png": "6c3edba64bf4cfb2ec7ee7630eb1a33f",
"assets/assets/images/2.0x/ic_order_dangao.png": "d7697cf1dc9bc19a1dc2fda6228dd9c5",
"assets/assets/images/2.0x/ic_order_miaosha.png": "f91c57f2c34b24aee3f0180840cd3a65",
"assets/assets/images/2.0x/ic_order_piaowu.png": "18f366bef5aaa2d3e414620bb5c25410",
"assets/assets/images/2.0x/ic_order_shangcheng.png": "b67cbfaee2509f7df5d3a3aa098ff7f6",
"assets/assets/images/2.0x/ic_order_xianhua.png": "f37770951751140d7f941d01beb6560f",
"assets/assets/images/2.0x/ic_shequshangye.png": "ce4bd752d01d2945321237f2d7668caf",
"assets/assets/images/2.0x/ic_tab_0.png": "00a5901a05653d316c32d0922c9c4358",
"assets/assets/images/2.0x/ic_tab_0_s.png": "20b2fe07fd14d63a62034cb640216401",
"assets/assets/images/2.0x/ic_tab_1.png": "83fa2f9cccf92d6b7c87aac479a111a0",
"assets/assets/images/2.0x/ic_tab_1_s.png": "018f5db9615a941e52cf3f3a91ff39bc",
"assets/assets/images/2.0x/ic_wenlvbus.png": "3d5a66bff9a5f9f1c3ffa6af790eb900",
"assets/assets/images/2.0x/ic_xiaofei.png": "0dac83a5947573714cd6bb5bbcc0e29a",
"assets/assets/images/2.0x/ic_xiaofei_bg.png": "b53a81de33caa601161ab203f7eda912",
"assets/assets/images/2.0x/ic_yeyoujingjiang.png": "de213378b045d6a253fe9958d9c900e4",
"assets/assets/images/2.0x/ic_yingxiao.png": "4ecd594438a89a7a433309d66af07d50",
"assets/assets/images/2.0x/ic_yingxiao_bg.png": "7f77be77c50d00dedfbd47f8ccc2fae6",
"assets/assets/images/2.0x/ic_zhili.png": "633dff746eda2fab7a8bc941781f61cd",
"assets/assets/images/2.0x/ic_zhili_bg.png": "8e6fc8bea397454d337a2af1f557c7a4",
"assets/assets/images/24gl-swapHorizontal3.png": "22553f66c27e40dce7c1d23eba0b07c7",
"assets/assets/images/3.0x/ic_bg_l.png": "282b8ae651fff1f48cb2e3afe6c3d5fc",
"assets/assets/images/3.0x/ic_bg_r.png": "4968af831ff32ff2fb263260f5488961",
"assets/assets/images/3.0x/ic_check_box.png": "1424ebbc641ee9ed8d7731a69c5c562f",
"assets/assets/images/3.0x/ic_figure.png": "9060fe8581ba76b3dd21ba3cf5b52c3c",
"assets/assets/images/3.0x/ic_home_banner.png": "7612910928b75671b39ed075f29d1f60",
"assets/assets/images/3.0x/ic_lvyouchanping.png": "52e1442d32f7a328c27d541295c7f09b",
"assets/assets/images/3.0x/ic_mingsujiudian.png": "89c714ac4075391464e8517e19b06741",
"assets/assets/images/3.0x/ic_mp_san.png": "286a628da23eedd9d7c7cc9ccb929598",
"assets/assets/images/3.0x/ic_mp_setting.png": "ec71092062d359f1d7738df9a4fad511",
"assets/assets/images/3.0x/ic_nongpingzhixiao.png": "6c05008cf528b3ce1b3a55b539d772e0",
"assets/assets/images/3.0x/ic_order_dangao.png": "3db64a5d13819bb48096d92aee0af1c0",
"assets/assets/images/3.0x/ic_order_miaosha.png": "6a303657bbb8b1f8c9a529c44f1b8727",
"assets/assets/images/3.0x/ic_order_piaowu.png": "43a0495a8958606a955d491e6d2df0ee",
"assets/assets/images/3.0x/ic_order_shangcheng.png": "910b74238bc81688303d5f39765151e2",
"assets/assets/images/3.0x/ic_order_xianhua.png": "f1e41fd68b6f4a436bd065f1faf74fc5",
"assets/assets/images/3.0x/ic_shequshangye.png": "ba226e8678d31802fd7238c8d1faefc0",
"assets/assets/images/3.0x/ic_tab_0.png": "10f382405cb27c39f9ac9afac7f3368e",
"assets/assets/images/3.0x/ic_tab_0_s.png": "41a25e88efefce5500f278fbf762a9fc",
"assets/assets/images/3.0x/ic_tab_1.png": "4361d7139c044b6f4cd29807d7972fce",
"assets/assets/images/3.0x/ic_tab_1_s.png": "375e5f2cfb241067c17ad7272f390e72",
"assets/assets/images/3.0x/ic_wenlvbus.png": "2fe007e130a3cfe0ebbb6afc6170f792",
"assets/assets/images/3.0x/ic_xiaofei.png": "55496ba719eaaea19e2be964480a1ab7",
"assets/assets/images/3.0x/ic_xiaofei_bg.png": "beff9f76cdea978c47234e9d8f8b41e1",
"assets/assets/images/3.0x/ic_yeyoujingjiang.png": "b497d65772e9e55e87aff89ec5bdf009",
"assets/assets/images/3.0x/ic_yingxiao.png": "98f500050920275231eba521fa63137f",
"assets/assets/images/3.0x/ic_yingxiao_bg.png": "dcdfcffa71219c0693e039f9c8b879be",
"assets/assets/images/3.0x/ic_zhili.png": "dbce6057505d8bc4e33d1595c3376546",
"assets/assets/images/3.0x/ic_zhili_bg.png": "31506c309e0d8ed26b934acfea00a1b1",
"assets/assets/images/Add%2520(%25E6%25B7%25BB%25E5%258A%25A0).png": "f6eae55121dc9ad94308e34dd6a94891",
"assets/assets/images/add_blue.png": "fda6c2acb29a9ff28530d1d2c185b51d",
"assets/assets/images/add_green.png": "ee611821f093f85bfb5b88a69a8e3514",
"assets/assets/images/add_orange.png": "48d4cdf69f6946eef48a058903fb012b",
"assets/assets/images/air_bloon.svg": "63d5049cb74030e4b9fe33a2bae1ba98",
"assets/assets/images/alipay.png": "35f7a2a1e218b52e59276e2b3ff90062",
"assets/assets/images/alipay.svg": "8e8428bfdabc01cd5bedd6ceee836e79",
"assets/assets/images/animation_lnxzxy7z.json": "4419419c86235f56b840a37cefc0bcdf",
"assets/assets/images/animation_lny09i3q_small.gif": "1775a83eedabd5821c182d7557e31ac0",
"assets/assets/images/back.svg": "3709ef91d3f3230c8c390906c78f8d1c",
"assets/assets/images/back_icon.png": "c8c97d04611eb567592a09ba3887082b",
"assets/assets/images/best_store.png": "fc080b9e8ac1b0c22723dcebb1d694d7",
"assets/assets/images/best_store.svg": "48999ba03ff9f0d0ed7c035982685159",
"assets/assets/images/best_ticket_store.png": "1e344264efc073bdf16f0014d0c5020d",
"assets/assets/images/Blocks-and-arrows%2520(%25E6%25A8%25A1%25E5%259D%2597%25E7%25AE%25AD%25E5%25A4%25B4).png": "07dccf0dbc55b9f3fc80852f595a888d",
"assets/assets/images/Bloom%2520(%25E5%25BC%2580%25E8%258A%25B1).png": "ac0cbe801ede55128efe9df05ba02288",
"assets/assets/images/Blossom%2520(%25E8%258A%25B1).png": "060f100da3eb1a8e6c253e618d4cb393",
"assets/assets/images/book_manage.png": "045d9d39aff2c9922e39b962c49591dc",
"assets/assets/images/Buy%2520(%25E8%25B4%25AD%25E4%25B9%25B0).png": "c4508d4e57f6cd5bd40274600903a7d1",
"assets/assets/images/cake_bg.png": "6da88cdf55eacee7f657fe1196da89c7",
"assets/assets/images/call.svg": "def2077ba273a40462cbda054112e93f",
"assets/assets/images/call_left.png": "1c6f7de5f03b0ec9f72f2f4827b8a605",
"assets/assets/images/camera_222.svg": "8fb0e8b877260baa521b8e4f3cbebb08",
"assets/assets/images/campus_banner.png": "b9135bf51e0ec1a68f4184bfe7e341db",
"assets/assets/images/campus_bg.png": "53cb8fd41aba796db10ed158113121ef",
"assets/assets/images/cancel_dialog.png": "7e866c2ddcf4fb7f4cc06dbd4096b4c0",
"assets/assets/images/cart_green.png": "e3d4fd4476778eb2237009419158b261",
"assets/assets/images/cart_grey.png": "e340d1a25d922e6e1af5b0bdbbac665b",
"assets/assets/images/cdwl.jpg": "aeedc566ce8e1a44c13534ac7d9f0f59",
"assets/assets/images/check_box_in_a_circle.svg": "6db7e59f9d68743aa352e12a6a25e37c",
"assets/assets/images/check_green.png": "5ba9308aedcfa65e875916e9eaf622f3",
"assets/assets/images/check_grey.svg": "f549d30499c2f20fa3e94c4e561d9592",
"assets/assets/images/check_red.svg": "be0d37f84e57e1f84abc2f53aec4f602",
"assets/assets/images/CircularProgressEasyOutEasyIn.gif": "963fae156f8e692d126fa6dcb2499ce5",
"assets/assets/images/clear.svg": "d5ba31bb8d8ac167f435929b67f02039",
"assets/assets/images/clock.svg": "e55fa4d4b56853a43eeb5189d9a2becd",
"assets/assets/images/close.png": "445b639e6e04cb3e7b683ee466751a64",
"assets/assets/images/close_black.svg": "ff08da3d7cee85f549ea13034eaff41a",
"assets/assets/images/close_icon_with_round_black_background.svg": "dc958589eff6e555336c64b97d0fcfc6",
"assets/assets/images/close_in_circle.svg": "0757d5066d8e4d1a48d816bf69ce2b1e",
"assets/assets/images/cloud.png": "cb97262d8af7ede15fa487498717755f",
"assets/assets/images/cloudy.svg": "7c1318f9eff4156727a323cec280a48f",
"assets/assets/images/coin.png": "e3bac6b5fa3003932d5c21053617f019",
"assets/assets/images/Commodity%2520(%25E5%2595%2586%25E5%2593%2581).png": "77965a074ef6bfb4fd95f440715d7c37",
"assets/assets/images/coupon.svg": "58ae7389b3ab8e307448aa93c067f188",
"assets/assets/images/coupon_image.png": "e234dbb819fa347b0be200f50f46be87",
"assets/assets/images/Coupon_white.png": "ce6db4726ad26bf0e7546714768ba98d",
"assets/assets/images/customer_service.svg": "3cade8650540726a027dee9987eca486",
"assets/assets/images/daizhifu.png": "82d4ceca1a959897e300a279e580ecd6",
"assets/assets/images/data_center_bg.png": "a4379f5ca39f043fee1c7f2ade61dbb3",
"assets/assets/images/dayin.png": "fa26b2af9ca284e226297a2d052013e4",
"assets/assets/images/default_avatar.png": "750e901b3bf31f0481d565e5c5fcc119",
"assets/assets/images/default_goods.png.bak.png": "035e101c70519b9326c92d4db8ab42e7",
"assets/assets/images/default_store.png": "16bc41003519b53b9b0772d379ff7734",
"assets/assets/images/default_ticket_store.png": "821eb2bb6dfe90f9f9e61036ef71fa7b",
"assets/assets/images/Delete-four%2520(%25E5%2588%25A0%25E9%2599%25A44).png": "3fa0af2186e2ed65b7d37703e1554775",
"assets/assets/images/Doc-success%2520(%25E6%2596%2587%25E6%25A1%25A3%25E6%2588%2590%25E5%258A%259F).png": "552374848649fdb83ca3d8d0da05d625",
"assets/assets/images/downward.svg": "d30df191cd3d932a679bfdba408dd697",
"assets/assets/images/down_arrow.png": "a9d12cb965fd4ddf715d64374bbba74e",
"assets/assets/images/drawable-xxxhdpi_%25E5%2587%258F%25E5%25B0%2591%2520(1).png": "b3d24cba3471b8ed4ff421f570351c93",
"assets/assets/images/drawable-xxxhdpi_%25E5%2594%25AE%25E5%2590%258E.png": "12996331e8c6ae4a26aef2768041fa65",
"assets/assets/images/drawable-xxxhdpi_%25E5%259C%2588%25E5%258F%2589.png": "9475b387ea2d5247f4663ba0202fea72",
"assets/assets/images/drawable-xxxhdpi_%25E5%25BE%2585%25E4%25BD%25BF%25E7%2594%25A8icon.png": "f80b58f5d477735217c7951748bc4e91",
"assets/assets/images/drawable-xxxhdpi_%25E6%2594%25B6%25E8%25B4%25A7%25E4%25BF%25A1%25E6%2581%25AF.png": "25a5533dac975967952d97eb420d6656",
"assets/assets/images/drawable-xxxhdpi_%25E7%2594%25A8%25E6%2588%25B7.png": "ba638037dd44c6ab283b5610a784a30a",
"assets/assets/images/drawable-xxxhdpi_%25E7%259F%25A9%25E5%25BD%25A2%25E5%25A4%2587%25E4%25BB%25BD%25202.png": "6951117e09b67aefc230260120b71ee2",
"assets/assets/images/drawable-xxxhdpi_%25E7%25AE%25A1%25E7%2590%2586%25E6%258C%2589%25E9%2592%25AE.png": "65e5db8211e34a6c246f9f46dba8b0d9",
"assets/assets/images/drawable-xxxhdpi_%25E8%25BA%25AB%25E4%25BB%25BD.png": "ad3a0b811f02c7fd18de919da991534b",
"assets/assets/images/drawable-xxxhdpi_%25E9%259A%2590%25E7%25A7%2581%25E5%258D%258F%25E8%25AE%25AE.png": "35b2931ea14a3f8c5c2412a0cc9142fb",
"assets/assets/images/drawable-xxxhdpi_icon-4.png": "b3387dec6fc3cc7a11f6d140f8c5d601",
"assets/assets/images/drawable-xxxhdpi_icon3.png": "ee4d0f902db5effe97a95a60253fff25",
"assets/assets/images/drop_gray.png": "94f0f58ed66c653b38259764e73e7219",
"assets/assets/images/drop_gray_1.png": "eff9f9a1b41b85571d4565259cbbee05",
"assets/assets/images/Edit%2520(%25E7%25BC%2596%25E8%25BE%2591).png": "ad808a036f59fe774adcb7738d5fa2ae",
"assets/assets/images/edit.svg": "5575c96c311bd7f13987872d351906f5",
"assets/assets/images/Ellipse20.png": "9a348ed5553d11814edc1ec6b6beafd9",
"assets/assets/images/Ellipse21.png": "58148374248133d9f1e3187006d3264e",
"assets/assets/images/Engineering-vehicle%2520(%25E9%2585%258D%25E9%2580%2581).png": "4f7863277b4c401a8aa5f1e12d765983",
"assets/assets/images/error.jpg": "e265f09bb5c4dcf43509a2d418ed26a6",
"assets/assets/images/faved.png": "73819d57f175c7de403d9493c53b8131",
"assets/assets/images/Female%2520(%25E5%25A5%25B3%25E6%2580%25A7).png": "d24074c5d43a4e445b7a6611ed5717e1",
"assets/assets/images/fenleiguanli.svg": "a969fef08cf410ed9eced7ad95398145",
"assets/assets/images/filter.png": "c7e07d714cb49499a9bfeb4acc8cb910",
"assets/assets/images/filterVector.png": "86484d023b4527ac67d68ad35c149b74",
"assets/assets/images/flower_login_logo.png": "73db50198a87dfbe7a6bcbd4137ba3f2",
"assets/assets/images/flower_order.png": "9683362aadf4b3fa4db07651beae2b05",
"assets/assets/images/flower_srore_tab.png": "05acc04fb06bea2c3e97e3bf9f5bf5bc",
"assets/assets/images/flower_store_image_default.png": "46f6510076b5838ad3910bf1566b6a1b",
"assets/assets/images/flower_store_mine.png": "e151049551f6bbefe07b515303e7bb61",
"assets/assets/images/Funds%2520(%25E5%259F%25BA%25E9%2587%2591).png": "74d7d667016f893fb45fc3a31c301190",
"assets/assets/images/gaode.svg": "87eb3985fd8a8f6de7150388dab0f9fd",
"assets/assets/images/gift.png": "7449f18d6abfa2cbd206c1cde32d5732",
"assets/assets/images/gps.png": "6ddc31a4ecd1fd5a183ef390d072b39b",
"assets/assets/images/gps.svg": "5b71d2e2422eccd2176645a3ac67e3cd",
"assets/assets/images/gps1.png": "179ad0b0775ca115de5590f3d66994fb",
"assets/assets/images/gps1.svg": "0635d3c8dc3ef20e07728ad142e3350e",
"assets/assets/images/gps_purple.png": "a6ba2fcd3c3cd3ab09dd2e5fbdf76091",
"assets/assets/images/green_checkbox.png": "28026aec1ee1668f2f8861c26694387b",
"assets/assets/images/green_dot.png": "d6e3f0be165c1a422aa2bcef4bc81fbd",
"assets/assets/images/green_dot_line.png": "04a7be7b9fc4290903e14e5dd5a76dea",
"assets/assets/images/grey_line.png": "65fc43eab0a6c090343d096603f66426",
"assets/assets/images/grey_line_dot.png": "019bd6ccf52d61f54e6ee9933ce22b5a",
"assets/assets/images/grey_line_dot_line.png": "b82d7cd9c75eace82f73307b08a2bbce",
"assets/assets/images/Group%252010.png": "210a5fdb824d3b459eaa2cf1110addab",
"assets/assets/images/Group%252010.svg": "7e8642610406d2a636bbed3bab3b28e5",
"assets/assets/images/Group%252011.png": "b58c0c7b603e5ea2cb924aea23cd4cfb",
"assets/assets/images/Group%252011.svg": "834e756ff58cea3ee8c721aa669ceb3d",
"assets/assets/images/Group%25208.png": "e9d039d0bc7a958ba393a0d193246ad4",
"assets/assets/images/Group%25208.svg": "0acc6fd6015b83c41ffda97156e82a2a",
"assets/assets/images/Group%25209.png": "2081a5b320476a4c8d070624e3797dfa",
"assets/assets/images/Group%25209.svg": "014cb878a36145b17c025315288fe993",
"assets/assets/images/heart.png": "fa70d6e13550c8c28db84e996bb2a474",
"assets/assets/images/hehua.svg": "f8f9548b68e383fa5d92fa47b1607dd8",
"assets/assets/images/Help%2520(%25E5%25B8%25AE%25E5%258A%25A9).png": "d4b7818bac196d7d330bd5bcc9bb6069",
"assets/assets/images/help.png": "2fd3ab36630664c61de88fb23f7b3ee4",
"assets/assets/images/home_bg_top.png": "c0ca53370343eaad9923d6281652b0bd",
"assets/assets/images/icon(3).png": "e847dee9c3262e92f7cec7a5d604da8b",
"assets/assets/images/icon(3).svg": "7759ea33828dc4434e2569e1dfa691fc",
"assets/assets/images/icon(4).png": "6a2af73110672917ee26a61e0dcfe07c",
"assets/assets/images/icon(4).svg": "891927c0cb49eb326db0e85ed137d5dd",
"assets/assets/images/iconstore_navi_back.png": "9b6e901beefd94679be8ab6afa94bc7b",
"assets/assets/images/icon_mark.png": "985239813b9d230a7d82051178507565",
"assets/assets/images/ic_bg_l.png": "358c72a15a887177aee94f9b198e524c",
"assets/assets/images/ic_bg_r.png": "0c8fd1bf897b4f456ff08f4fef2967e7",
"assets/assets/images/ic_cake_campus.png": "0e0ff18a08f87fd0c843b6c3dc9db728",
"assets/assets/images/ic_check_box.png": "aad60386289c719faa9e9036d5d48826",
"assets/assets/images/ic_count_down.png": "2d66ed3bf47e7a652a5d7f26a556047a",
"assets/assets/images/ic_figure.png": "a60e4d512ec056e8baeab0bb27757099",
"assets/assets/images/ic_flash_off.png": "0215174ef899a28679d07539039fe624",
"assets/assets/images/ic_flash_on.png": "0a5f289283eb033f2de5970f6a231846",
"assets/assets/images/ic_flower_campus.png": "2479fddf8f274a2ce1aba5ade64b81bf",
"assets/assets/images/ic_home_banner.png": "9498e425f93acbe7f63517553a9c48a2",
"assets/assets/images/ic_home_bg.png": "317e98fd86f38f1b18438f29b89ac3a3",
"assets/assets/images/ic_logo1.png": "5b3c041b6b623c0923cc3f1f0c497626",
"assets/assets/images/ic_lvyouchanping.png": "0b4b5dec3d3a1ba9497e4e005133bf97",
"assets/assets/images/ic_mall_campus.png": "ee656685b980ba0c505d054025ab021d",
"assets/assets/images/ic_mingsujiudian.png": "303ede549c1ecbc1459dbd00ca4cbf82",
"assets/assets/images/ic_mp_san.png": "cfe4dfd9da086848dce74ae4a41bb70c",
"assets/assets/images/ic_mp_setting.png": "ef1b68832b4fe451e68ec478214999f0",
"assets/assets/images/ic_nongpingzhixiao.png": "51cdd3f97d80538e9f2835f5ab9a97bc",
"assets/assets/images/ic_order_dangao.png": "9ce75aa7e50de50d7beda6caf5d36ab7",
"assets/assets/images/ic_order_miaosha.png": "cbda8dc16d2f2e5063a60b21fc03b3a3",
"assets/assets/images/ic_order_piaowu.png": "5bda49c548ee9379a5a3588fde3cd09d",
"assets/assets/images/ic_order_shangcheng.png": "13bad47c73bf439bcf3068cbde073111",
"assets/assets/images/ic_order_xianhua.png": "7c92bc16a509ee394a505542523040cf",
"assets/assets/images/ic_piaowu_campus.png": "ef0a5bed7a7e1a5e8029780558aa8f6d",
"assets/assets/images/ic_sec_campus.png": "7fc2be6240f8d636904b6ba288306b16",
"assets/assets/images/ic_shequshangye.png": "0e7fe9e822b069a881c925852c869871",
"assets/assets/images/ic_tab_0.png": "fa23e20d1dcad09a72a38c4ca926689b",
"assets/assets/images/ic_tab_0_s.png": "b2bcb462c1eea821442a1dc5f8eece71",
"assets/assets/images/ic_tab_1.png": "688bd82ba081372070fc7bde46680e58",
"assets/assets/images/ic_tab_1_s.png": "064f6a49e8f6f8d5fc9ab496646981b1",
"assets/assets/images/ic_wenlvbus.png": "be47f761834609ca28fe7fdfee15dfca",
"assets/assets/images/ic_xiaofei.png": "4ef408e4d82d93b31e52aee47d1f07f4",
"assets/assets/images/ic_xiaofei_bg.png": "990ccc2bf947e135d44dbd3cfb7e2ad0",
"assets/assets/images/ic_yeyoujingjiang.png": "878690ed818bdda4482641b1489273a1",
"assets/assets/images/ic_yingxiao.png": "cb1b81ff637a8b5d54d5ee61bb3d6637",
"assets/assets/images/ic_yingxiao_bg.png": "98a09f5beed6bb3e93937b2d7855dc88",
"assets/assets/images/ic_zhili.png": "ef6c075e01ad90f54b9dc7536ca0b92a",
"assets/assets/images/ic_zhili_bg.png": "877f88aa6eb5d30bfc52af8fcadeb682",
"assets/assets/images/image-broken.svg": "2666ea4fee900ad13ff72e3f58d734ec",
"assets/assets/images/image.png": "66c96a56c666ad7f70c3d85327f750d2",
"assets/assets/images/image_picker.png": "66c96a56c666ad7f70c3d85327f750d2",
"assets/assets/images/IMG_8835.HEIC.JPG": "a1591dd80fcf2202f2894792b9bb4615",
"assets/assets/images/IMG_8836.HEIC.JPG": "2ccaf1f33af5c3450fe08863d7fba7e7",
"assets/assets/images/IMG_8837.HEIC.JPG": "7414d235d96e9497ec1dde245068467e",
"assets/assets/images/img_error.png": "6c657200c0687cfbcb9bbf6d0452ca16",
"assets/assets/images/index-loading.png": "64c093a310b9be852fa055828babc1be",
"assets/assets/images/key_down_arrow_in_a_cirlce.svg": "87a2324ad4117402228b2b23c7825ca2",
"assets/assets/images/kind.svg": "7df276e1475405235017dcddfef8a6db",
"assets/assets/images/kuaidi.svg": "e26085d0cb4ffcde1e1c8180492ab1b6",
"assets/assets/images/List-checkbox%2520(%25E5%25A4%259A%25E9%2580%2589%25E5%2588%2597%25E8%25A1%25A8).png": "f8a9f86c2d4e380fe09ca8810e7a63a8",
"assets/assets/images/loading-plane.gif": "87f30ed3c7c84b5bab31a0c43e1e55c8",
"assets/assets/images/loading.gif": "0ac274e561067ee9d830b19fb13dac5c",
"assets/assets/images/locate.png": "50756eeaa80ea6c8c9d839345107fc5c",
"assets/assets/images/location.svg": "01a913f2f91a5ce6519c6382a628b816",
"assets/assets/images/login_bgd.png": "25f1c97f341f1d23263813f17b438c7f",
"assets/assets/images/logo_buttom.png": "b74bc7d324a121b803166d6019635dea",
"assets/assets/images/logo_left.png": "4a7b3c134ca2ba559ba500f3f90062fd",
"assets/assets/images/lvyoubus.jpg": "8faf294bf7dee4cac61ee897096ecef1",
"assets/assets/images/mainSiteBg_blur.png": "4366cfef2183fa6d227b84c9ab89dc6d",
"assets/assets/images/maiosha_zhuanchang.png": "b2e6c51475d9bdf395b1396cb24d65dc",
"assets/assets/images/Male%2520(%25E7%2594%25B7%25E6%2580%25A7).png": "9eb2c611714bb70e1bd80aaeb6581de2",
"assets/assets/images/mall_appbar.png": "5af2453fc594c62b0cb5d25e342c99a1",
"assets/assets/images/mall_bg.png": "3366825871783844e458920195295473",
"assets/assets/images/mall_bg_new_dsc.jpg": "52bcea9fffa14379fda96a725a31b005",
"assets/assets/images/mall_cart.png": "83c47bf4496e37fd8a9e717fda9cac2e",
"assets/assets/images/mall_coupn_grey.png": "f0acf8b8d871f221de7d6e93d4d3aa1d",
"assets/assets/images/mall_coupon.png": "201aecc45672a7ecbbc0f9641cb10f08",
"assets/assets/images/mall_default_goods.png": "b7dde52716eb836fa7818a18857674bf",
"assets/assets/images/mall_delivery_map.png": "529fd3bfa42d3fbc17c3b391eca7bc6c",
"assets/assets/images/mall_kind_1.png": "24cc73481bb0e53fce2868b2b5a01612",
"assets/assets/images/mall_kind_2.png": "c278c2d89ea6f7632d914c4a09b8a36d",
"assets/assets/images/mall_kind_3.png": "147c2c7639bd21fab65cb6ed43173d2d",
"assets/assets/images/mall_kind_4.png": "428640a9ebdc7169308eb1ab8c4799f4",
"assets/assets/images/mall_up.png": "6e417f72a4bf02d2e0dcc54f1e1eec42",
"assets/assets/images/map.png": "fe38522f069ed2bcc1719171f1b19670",
"assets/assets/images/map.svg": "fa9d0b630640cdb0e145a792670448de",
"assets/assets/images/Mask%2520group.png": "c1091d020a5e7697b36441d022e6b182",
"assets/assets/images/member_manage.png": "95c696766719ab0c745bb654139f5138",
"assets/assets/images/Message-emoji%2520(%25E8%25A1%25A8%25E6%2583%2585%25E4%25BF%25A1%25E6%2581%25AF).png": "e2d9e959bd22713e6acfe2864dec2373",
"assets/assets/images/message_online.png": "e4c9d4f640e2035cf2e80110980b8807",
"assets/assets/images/message_order.png": "cf439d8fdf0ad5b5074e40ddaa802470",
"assets/assets/images/message_promotion.png": "cecdec5d3880db7576544299b5b709a9",
"assets/assets/images/minus_in_a_box.svg": "4db930065621e0e628d4b4e851af5969",
"assets/assets/images/mphome/cake_c.png": "9a455d8e6d6872a3a38ebd8f31e4f0fd",
"assets/assets/images/mphome/flower_c.png": "fab3bd7d314d99f8eeb40497368e6373",
"assets/assets/images/mphome/hotel.png": "89c6a77470178d3fdc2b6cd857ee5d27",
"assets/assets/images/mphome/ic_bus.png": "9bcb784460f7747ff0a1c11a7a77ff01",
"assets/assets/images/mphome/ic_cake_campus.png": "0e0ff18a08f87fd0c843b6c3dc9db728",
"assets/assets/images/mphome/ic_channels.png": "1394d0e8f2afb1c9c01dc0b9a0111019",
"assets/assets/images/mphome/ic_chaoshi.png": "5098360b659f55d28cf80fe4d2d3fe1e",
"assets/assets/images/mphome/ic_dangao.png": "e1777240f88c8b9176492bc3423619fa",
"assets/assets/images/mphome/ic_daren.png": "2aa4042c767cb7ea7dfb5c5faff97849",
"assets/assets/images/mphome/ic_denghui.png": "7d4ffeb3bd61f6e8c8fafc83a9a88734",
"assets/assets/images/mphome/ic_flower_campus.png": "2479fddf8f274a2ce1aba5ade64b81bf",
"assets/assets/images/mphome/ic_huodong.png": "5b3119755b71ce9c51289ffbdc44ab5f",
"assets/assets/images/mphome/ic_jifen.png": "483cca95e69f429ec1fc4e85c33fa18d",
"assets/assets/images/mphome/ic_jiuye.png": "36dc4bbe6f348f6378455b86ea0a0664",
"assets/assets/images/mphome/ic_liuliang.png": "6ed25e3c8eabb7a1caebed00c8710b0c",
"assets/assets/images/mphome/ic_lvyou.png": "856727d1beaba83d0eb40a74f52efc01",
"assets/assets/images/mphome/ic_mall_campus.png": "ee656685b980ba0c505d054025ab021d",
"assets/assets/images/mphome/ic_miaosha.png": "5c71543c903fe16962c0b41122fa7fc3",
"assets/assets/images/mphome/ic_mingsu.png": "1085b17050d60be6b942fed9ed606c90",
"assets/assets/images/mphome/ic_neirong.png": "6c829b6dbd7bbe410479c377c5e80214",
"assets/assets/images/mphome/ic_nongcanping.png": "cda405b66a07f98a4e28374dae684c91",
"assets/assets/images/mphome/ic_piaowu.png": "15466be3b8a1d613262d1fb3bb2d3709",
"assets/assets/images/mphome/ic_piaowu_campus.png": "ef0a5bed7a7e1a5e8029780558aa8f6d",
"assets/assets/images/mphome/ic_sec_campus.png": "7fc2be6240f8d636904b6ba288306b16",
"assets/assets/images/mphome/ic_shangye.png": "45a8be82ceb8f5c9e1a46404b3c79e1b",
"assets/assets/images/mphome/ic_shequ.png": "85eea05566b676a41f59ee43a876b1be",
"assets/assets/images/mphome/ic_tch.jpg": "05ed536ec369bbe283b7c321df618ed4",
"assets/assets/images/mphome/ic_wenjuan.png": "ce4d08f2f7fd266a1e143fd8a2489bec",
"assets/assets/images/mphome/ic_xianhua.png": "409100706221794c37e7b0ebdddf5be2",
"assets/assets/images/mphome/ic_xinmeiti.png": "6ed25e3c8eabb7a1caebed00c8710b0c",
"assets/assets/images/mphome/ic_xinxi.png": "033f5447a1e8a3240a37008d1821ac1e",
"assets/assets/images/mphome/ic_yeyou.png": "491024e68180e6899e7443635693a8a2",
"assets/assets/images/mphome/ic_zhaoping.png": "395baa60033ec19ac2d1cc9d1a5fdb58",
"assets/assets/images/mphome/ic_zhengce.png": "22c58fde0860e02a8319e2980fdf7118",
"assets/assets/images/mphome/ic_zuzhi.png": "fc800d5a616c913dbba961d1d5a19ccc",
"assets/assets/images/mphome/mall_c.png": "ebda7c56b9be8a8e134725a0260d7005",
"assets/assets/images/mphome/seckill_c.png": "55c2fca972cbc3b146e542ceafc00f80",
"assets/assets/images/mphome/tickets_c.png": "25bf35131fe3a250b131b97ce2eefd83",
"assets/assets/images/mp_home_banner.png": "03d178b99ff23e5d91bcda852034f287",
"assets/assets/images/ms_cake_banner.png": "1693965d1461c64d9fce7bdcfc6cfa10",
"assets/assets/images/ms_cake_banner_bg.png": "39005775fa7cc6eac33ad5c344d579a8",
"assets/assets/images/ms_flower_banner.png": "ca38471b3abc80ccfb5f379440cc84e6",
"assets/assets/images/ms_flower_banner_bg.png": "f52794ab80e07616db49089d0c47262a",
"assets/assets/images/ms_mall_banner.png": "a4675ae3dfa63f74196d9c96fa3d274c",
"assets/assets/images/ms_mall_banner_bg.png": "1a8e60ccc71b1c537dd3c084737f48a1",
"assets/assets/images/ms_tickets_cloud.png": "a542bb94459afd23acc71eee1a6451c2",
"assets/assets/images/ms_ticket_banner_bg.png": "4251ae6c54bd7c56fd9fa7d1de33f44d",
"assets/assets/images/my.svg": "d6d3f58c65c34cdcbaa86b452ed2a1ae",
"assets/assets/images/my_green.png": "af6b520b17b3a32d1a39cba31f2f7837",
"assets/assets/images/my_grey.png": "ea12366a39487f3fc582d9814bae7ff2",
"assets/assets/images/navi_back.png": "bf3a384f7ad5a7a4a9f3cc98099bad75",
"assets/assets/images/no_printer.svg": "abe07d8dc9a228382eb3fc54d45a22db",
"assets/assets/images/order.svg": "fa8e668e2e0af27ddbfadfe55cabc9cb",
"assets/assets/images/order_complete.png": "da5fc9cdc84bf8ce593c449ffeb6c566",
"assets/assets/images/password-close.png": "53c97b7b20d525716da49f73aa80949f",
"assets/assets/images/password-open.png": "7c6cdfadf5f68f6f9c81b160628e4753",
"assets/assets/images/People%2520(%25E4%25BA%25BA%25E5%2591%2598).png": "916a8a870b67ffe92a61a81fdd69c536",
"assets/assets/images/Phone-call.png": "747f1d076f4a049d6823789eed41a69b",
"assets/assets/images/phone_call.png": "6454ae5b73f4f605dde0bce07fef36fd",
"assets/assets/images/pick_image.png": "171a537d8de3d1432b4e11661cdf6aba",
"assets/assets/images/pick_image.svg": "0935c4eda13e18ea7b857ca54a1cc970",
"assets/assets/images/pingle_mall.jpg": "a17d05a9cffff1b5ef1411bc74c9e574",
"assets/assets/images/Plus%2520(%25E5%258A%25A0).png": "e9e158106cc32f3b6d67d5ceb7510028",
"assets/assets/images/Preview-open%2520(%25E9%25A2%2584%25E8%25A7%2588-%25E6%2589%2593%25E5%25BC%2580).png": "37693d14265fcda56dd7413f43b76e23",
"assets/assets/images/printer.svg": "fd0a73560cf9ceea9c69123c9f0217a6",
"assets/assets/images/product_selected.png": "5dc98d0ecd930a7c03248f010d811415",
"assets/assets/images/qr_code.svg": "67fb5096c9324e40f1d91429468e7bd6",
"assets/assets/images/questionmark.svg": "2145edc0835493aacb2326311c50e27d",
"assets/assets/images/rate_star.png": "921c4aed4ce440664765b58fdfec8f4a",
"assets/assets/images/Rectangle%25201736.png": "33708dfbfe7c2172bd68433b5cca1401",
"assets/assets/images/Rectangle%25204@3x.png": "883d885a77d5973254dd72023a573c25",
"assets/assets/images/refund_expanded.png": "65bb085db2289d36cd04db105ef9403b",
"assets/assets/images/refund_header_bg.png": "babbd53dd904932ef2214fe1db8e50ef",
"assets/assets/images/refund_shrink.png": "f45c95815f26cc05f8f05621661e0bbe",
"assets/assets/images/Remind%2520(%25E6%258F%2590%25E9%2586%2592).png": "891e65b065e18147a2ed46ba10aa142c",
"assets/assets/images/same_city.svg": "5916518b24927d79ccffeab19f569bd1",
"assets/assets/images/Scan-code%2520(%25E6%2589%25AB%25E7%25A0%2581).png": "1f71a0f50f388f80a8088effbaeca0a2",
"assets/assets/images/scanner.svg": "75c40a63d818de697c89a9c21f3946b6",
"assets/assets/images/scanning-active.png": "7280263659fcfd856bb26148130a3ccf",
"assets/assets/images/scanning.png": "171cfad0aee673cf786dad1f8a9b6e23",
"assets/assets/images/scan_qr_code.svg": "24d308e8093e603594fc2d3f1f41b91a",
"assets/assets/images/search.png": "a02c20a723f553305e3ffac758d835ee",
"assets/assets/images/search.svg": "df233ae1a600fd1a7059e28be2cec41a",
"assets/assets/images/search_no_result.png": "1ddc1a74ae0218088a7a387325807c16",
"assets/assets/images/seckill_bg.png": "6a7202c250d1e5b7a9fde6425a59eeec",
"assets/assets/images/seckill_now.png": "29a28ce088f4c75c90b3e9ea2dd2f28c",
"assets/assets/images/Select.png": "0f774ab133d1e19ef24f47a52c53235a",
"assets/assets/images/self_take.png": "9d02998b81e63ae12ea1f07462c67cc2",
"assets/assets/images/shalou.svg": "3fd444786e2c7a19df2677c36a2eb0bf",
"assets/assets/images/shipping.svg": "2d0a96b4c9333bb193d6d9ce0b03f94b",
"assets/assets/images/shop-like-0.png": "c5b0566e0fd54f4c143c87cd5b829e0c",
"assets/assets/images/shop-like-1.png": "f2ee3289c91d1686e46ba9a8b5ba5dcc",
"assets/assets/images/shopingbag.svg": "6a77fe1a35da4304e5aba91c70764515",
"assets/assets/images/shopping_bag.png": "5f34d12ba72b26de071da0defba49258",
"assets/assets/images/shopping_bag.svg": "57ab30081a366bc73aacdb4beca0db61",
"assets/assets/images/shop_icon.png": "03bfef18cd84f29ce98f1a2f68e36797",
"assets/assets/images/shop_tab_bar_indicator.png": "0ab4e7047f8cd695faaa8ce72c3a6664",
"assets/assets/images/Slice%25202.png": "39732e39c998e394b5f17df69125af0f",
"assets/assets/images/SMS.png": "27684d6ca0d58e323a5d653da8780975",
"assets/assets/images/Snipaste_2023-03-08_11-49-03.png": "84c967f3b6fc7e6d4ca622565c653e9d",
"assets/assets/images/songzhangbei.svg": "5ab8325c53977b5291667db0befe862c",
"assets/assets/images/sort-down.svg": "a9a338d3be33790855026ef652c62ee3",
"assets/assets/images/Sort-one%2520(%25E6%258E%2592%25E5%25BA%258F1).png": "e91cc08f439b60ff41faf45bad3c2a05",
"assets/assets/images/sort.svg": "cab27b1f5c92f3eae2871116e3197036",
"assets/assets/images/sorts.svg": "abb9c4a5f40f34985f624b7ccf3fac97",
"assets/assets/images/sort_kind.svg": "6eb218323fb840955aaa1024b2d63142",
"assets/assets/images/store.png": "024baca27aa0b2b036bcb941c14cf7ea",
"assets/assets/images/store.svg": "9a3efa25defb68d37d1be8316235d087",
"assets/assets/images/store_green.png": "166c4f6cb25e6b9e2e2d0d7cfb142792",
"assets/assets/images/store_plain.png": "7fbf62056fb780e2b80a0daa7f3778a3",
"assets/assets/images/store_tab_card.png": "5263af9aaa9aea7e05decaec19d168ff",
"assets/assets/images/store_yellow.png": "b952c5e5b3fb4c0e50c19fe735eb1751",
"assets/assets/images/Subtract.png": "6fcf95a738f932912876d03b51ae5d04",
"assets/assets/images/success.svg": "2d5654d038f9da71c73afbdf249b948c",
"assets/assets/images/success_boy.png": "604b3faa60c2b3fbdeb87a1deee79ab6",
"assets/assets/images/succes_girl.png": "53a42b1fdecad55babacfe6b1d5f2ddf",
"assets/assets/images/table.png": "64a80c6b61b36948f5fb929a54d31349",
"assets/assets/images/Tag-one%2520(%25E6%25A0%2587%25E7%25AD%25BE).png": "d7f0c8936f042404315c638ea90b7dce",
"assets/assets/images/third_home.png": "8fe5957e40e10512ea27236effff904a",
"assets/assets/images/tickert_order_pay_success.png": "d5205a0d422e9aef3c42408b81dcd4f2",
"assets/assets/images/ticket.svg": "679d3166414eee9e4b9152dea3fa93e6",
"assets/assets/images/tickets_bg_new.png": "a9fc4abb15bed1263983209aff7ad3b0",
"assets/assets/images/ticket_%2520associated.png": "d56414a122357939d90b2fdddd84f93b",
"assets/assets/images/ticket_background.jpg": "b5b573292260296be70d98a2f13f4aa0",
"assets/assets/images/ticket_fav.png": "faa7dab845173614eed3969355b90205",
"assets/assets/images/ticket_kinds_0.png": "860fa523018fd1944bf26ad14f6b54f8",
"assets/assets/images/ticket_kinds_1.png": "a1be04d377f7850d6ce42b4ac4fd0361",
"assets/assets/images/ticket_kinds_2.png": "9f52888c2c9659f35af343018694f172",
"assets/assets/images/ticket_kinds_3.png": "cb2957fa09ba14695b3a5b6036e023ef",
"assets/assets/images/ticket_main.png": "2ff664c93d5f9f9a5a609a66e451282e",
"assets/assets/images/ticket_spot_location.png": "939d22bdb462ec8e57f3e1648a153587",
"assets/assets/images/ticket_top.jpg": "b75d01ef65ac1189de35078888f62e85",
"assets/assets/images/timer.svg": "30ccfeaa95d18e78b83b8f9afa9b88e1",
"assets/assets/images/To-top%2520(%25E5%258E%25BB%25E9%25A1%25B6%25E9%2583%25A8).png": "3d6c67d4a1c23f67ed5e9522887076e1",
"assets/assets/images/todo_reject.png": "302d02b4421b2acbb35624f9f1306c07",
"assets/assets/images/todo_xiajia.png": "4925ca728341340f77148c17eb9b0191",
"assets/assets/images/tourist_avatar.png": "1a8090b5bf1f2eaba1da0c73b1dbd224",
"assets/assets/images/trangle_down.png": "4c62b0234e4e23c75d6e037e9dda3245",
"assets/assets/images/trangle_up.png": "ca381a7785970aeae27fc84aaf12f4f0",
"assets/assets/images/truck_green.png": "d5a2be3e9b1ed1c46c9768ac655dcaa7",
"assets/assets/images/truck_yellow.png": "03f7ef3d1998856651eff02f8623063f",
"assets/assets/images/u2130.svg": "ab264d96beec26ce14674b3a3ad78917",
"assets/assets/images/UnionPay.png": "2f7e27976d324fffdb352112cfdc7989",
"assets/assets/images/unionpay.svg": "4972ad9d39347d498aa0107e900600d6",
"assets/assets/images/unselected_circle.png": "346e1492d007f6c3016f311ba03bc1f0",
"assets/assets/images/up_gray_1.png": "e78da7c5fb0d3d89741dc83972af8338",
"assets/assets/images/User-business%2520(%25E5%2595%2586%25E5%258A%25A1%25E7%2594%25A8%25E6%2588%25B7).png": "8c9db454ff84befffcadf399e7773628",
"assets/assets/images/user.svg": "c887f650bcda0de83ac3ca685dddcf99",
"assets/assets/images/v2_roexyg.png": "07616f80bb945e722a14d4f39f70ccfc",
"assets/assets/images/v2_rpbcrs.png": "26ee1e231036ad30cc06d032728899ba",
"assets/assets/images/video_play_btn.png": "933b26e8cc2ce551187efabd608063fd",
"assets/assets/images/voice.svg": "73bd32b01fe09d11aad77fd6205520a0",
"assets/assets/images/waiting.png": "7e849b4bb1bbdd22bb1ee9e60e2f783a",
"assets/assets/images/wallet.svg": "c00e77b5f3d317ebb02aa01c18d187ce",
"assets/assets/images/we_chat.svg": "dcda8ad9ea2b957efb0d73e3aedb3922",
"assets/assets/images/wuxi.png": "2305f2254483b9ee900bf28c9b913015",
"assets/assets/images/xiling.png": "831ad187bbc50161ea105e0a348305f5",
"assets/assets/images/xlss.jpg": "f10c96c49c5cb7f41836ee5c87d048d2",
"assets/assets/images/xuehua.png": "e47ed1bd2140af55561e22cd8564f795",
"assets/assets/images/yanhua.png": "b834c84af86623d45ce645653537aef8",
"assets/assets/images/yunshanfu.png": "6f32b8423ea772307712f7bcad629c81",
"assets/assets/images/yunshanfu.svg": "1f7c9d3f09eae2064030a9d33e33330e",
"assets/assets/images/_fork6.png": "43e76db2ee3dc9a8bc4093077c374c15",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "aaa747a8819e28df3255ce10da6f964e",
"assets/MaterialIcons-Regular.otf": "db9d244b54e68d7813b2f0815b9f3efd",
"assets/NOTICES": "457c38ba1fa99bfe59f03a8095162ffd",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "f86d227bbe69c3bf659b9e47c5e32fca",
"assets/packages/map_launcher/assets/icons/amap.svg": "00409535b144c70322cd4600de82657c",
"assets/packages/map_launcher/assets/icons/apple.svg": "6fe49a5ae50a4c603897f6f54dec16a8",
"assets/packages/map_launcher/assets/icons/baidu.svg": "22335d62432f9d5aac833bcccfa5cfe8",
"assets/packages/map_launcher/assets/icons/citymapper.svg": "58c49ff6df286e325c21a28ebf783ebe",
"assets/packages/map_launcher/assets/icons/doubleGis.svg": "ab8f52395c01fcd87ed3e2ed9660966e",
"assets/packages/map_launcher/assets/icons/google.svg": "cb318c1fc31719ceda4073d8ca38fc1e",
"assets/packages/map_launcher/assets/icons/googleGo.svg": "cb318c1fc31719ceda4073d8ca38fc1e",
"assets/packages/map_launcher/assets/icons/here.svg": "aea2492cde15953de7bb2ab1487fd4c7",
"assets/packages/map_launcher/assets/icons/mapswithme.svg": "87df7956e58cae949e88a0c744ca49e8",
"assets/packages/map_launcher/assets/icons/osmand.svg": "639b2304776a6794ec682a926dbcbc4c",
"assets/packages/map_launcher/assets/icons/osmandplus.svg": "31c36b1f20dc45a88c283e928583736f",
"assets/packages/map_launcher/assets/icons/petal.svg": "76c9cfa1bfefb298416cfef6a13a70c5",
"assets/packages/map_launcher/assets/icons/tencent.svg": "4e1babec6bbab0159bdc204932193a89",
"assets/packages/map_launcher/assets/icons/tomtomgo.svg": "493b0844a3218a19b1c80c92c060bba7",
"assets/packages/map_launcher/assets/icons/waze.svg": "311a17de2a40c8fa1dd9022d4e12982c",
"assets/packages/map_launcher/assets/icons/yandexMaps.svg": "3dfd1d365352408e86c9c57fef238eed",
"assets/packages/map_launcher/assets/icons/yandexNavi.svg": "bad6bf6aebd1e0d711f3c7ed9497e9a3",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "9c9bc90eff090ffc6089c47df0983c95",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "90bc521dea810a19753a54f14caa2165",
"/": "90bc521dea810a19753a54f14caa2165",
"js/b64toBlob.js": "317d0792df82d3076ed9bbfb40edd3b4",
"js/baidu.js": "f1d7cb0389e965456d147306be4c04fc",
"js/barcode.js": "4dfeab5da1679fb6e06480243e7bb313",
"js/get_js_files.js": "21c78a79ec2066ee8903f3e26188fdae",
"js/html5-qrcode.min.js": "d41d8cd98f00b204e9800998ecf8427e",
"js/jsQr.js": "87effab6e2b05836ace938421a64df3b",
"js/maidian.js": "4ea9c702a5e11844891b5771c3c0bd05",
"js/qrcodeParser.js": "1260a416f800e47700f791569ed7a694",
"js/scan.js": "e742b4ff2bc2356568a3ba1e8395ec76",
"js/utils.js": "d936f884d2d4a809ee92e559a6b4ddc5",
"js/wx.js": "84917ff3105bfd59498e2e61d4604883",
"js/zxing.js": "f7cace592dfc2058459a409cef25b9a9",
"main.dart.js": "b66f5a2f6c3520ccd90c810a7c0613d9",
"manifest.json": "54d78f84f7165bb8c50331876ba6474c",
"splash/img/animation_lny09i3q_small.gif": "1775a83eedabd5821c182d7557e31ac0",
"splash/img/dark-1x.png": "fb90975afca7566de9940982b835c4a7",
"splash/img/dark-2x.png": "957a8e82f88ac412e069b6bc592091c3",
"splash/img/dark-3x.png": "98f8f8acd871cfda19077e1d7b735a09",
"splash/img/dark-4x.png": "82cd8a5654445efa4c283dd3cd5d8024",
"splash/img/light-1x.png": "fb90975afca7566de9940982b835c4a7",
"splash/img/light-2x.png": "957a8e82f88ac412e069b6bc592091c3",
"splash/img/light-3x.png": "98f8f8acd871cfda19077e1d7b735a09",
"splash/img/light-4x.png": "82cd8a5654445efa4c283dd3cd5d8024",
"splash/img/loading-plane.gif": "6e5f8c374a5fbcf3393995d9ff26fc7e",
"splash/splash.js": "123c400b58bea74c1305ca3ac966748d",
"splash/style.css": "0547575a914b641f91314bc1c5a0eeee",
"version.json": "f8fc69d203b32014928f6d0ce763777a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
