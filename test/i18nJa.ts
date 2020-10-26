import chai = require("chai");
import cronstrue from "../src/cronstrue-i18n";
let assert = chai.assert;

describe("i18n", function () {
  describe("ja", function () {
    it("* * * * * *", function () {
      assert.equal(cronstrue.toString(this.test.title, { locale: "ja" }), "毎秒");
    });

    it("* * * * *", function () {
      assert.equal(cronstrue.toString(this.test.title, { locale: "ja" }), "毎分");
    });

    it("* * * * *", function () {
      assert.equal(cronstrue.toString(this.test.title, { verbose: true, locale: "ja" }), "毎分,毎時,毎日");
    });

    it("*/1 * * * *", function () {
      assert.equal(cronstrue.toString(this.test.title, { locale: "ja" }), "毎分");
    });

    it("*/5 * * * *", function () {
      assert.equal(cronstrue.toString(this.test.title, { locale: "ja" }), "5分おき");
    });

    it("0 0/1 * * * ?", function () {
      assert.equal(cronstrue.toString(this.test.title, { locale: "ja" }), "毎分");
    });

    it("0 0 * * * ?", function () {
      assert.equal(cronstrue.toString(this.test.title, { locale: "ja" }), "毎時");
    });

    it("0 0 0/1 * * ?", function () {
      assert.equal(cronstrue.toString(this.test.title, { locale: "ja" }), "毎時");
    });

    it("* * * 3 *", function () {
      assert.equal(cronstrue.toString(this.test.title, { locale: "ja" }), "毎分,3月のみ");
    });

    it("* * * 3,6 *", function () {
      assert.equal(cronstrue.toString(this.test.title, { locale: "ja" }), "毎分,3月,6月のみ");
    });

    it("* * * * * * 2013", function () {
      assert.equal(cronstrue.toString(this.test.title, { locale: "ja" }), "毎秒,2013年のみ");
    });

    it("* * * * * 2013", function () {
      assert.equal(cronstrue.toString(this.test.title, { locale: "ja" }), "毎分,2013年のみ");
    });

    it("* * * * * 2013,2014", function () {
      assert.equal(cronstrue.toString(this.test.title, { locale: "ja" }), "毎分,2013,2014年のみ");
    });

    it("*/45 * * * * *", function () {
      assert.equal(cronstrue.toString(this.test.title, { locale: "ja" }), "45秒おき");
    });

    it("*/5 * * * *", function () {
      assert.equal(cronstrue.toString(this.test.title, { locale: "ja" }), "5分おき");
    });

    it("*/10 * * * *", function () {
      assert.equal(cronstrue.toString(this.test.title, { locale: "ja" }), "10分おき");
    });

    it("0 */5 * * * *", function () {
      assert.equal(cronstrue.toString(this.test.title, { locale: "ja" }), "5分おき");
    });

    it("0 9-17 * * *", function () {
      assert.equal(cronstrue.toString(this.test.title, { locale: "ja" }), "毎時,09:00～17:59");
    });

    it("0 * ? * 2/1 *", function () {
      assert.equal(cronstrue.toString(this.test.title, { locale: "ja" }), "毎分,2月～12月");
    });

    it("0 * ? * 1/1", function () {
      assert.equal(cronstrue.toString(this.test.title, { locale: "ja" }), "毎時,月曜～土曜");
    });

    it("0 * ? * 2/1", function () {
      assert.equal(cronstrue.toString(this.test.title, { locale: "ja" }), "毎時,火曜～土曜");
    });

    it("0 52 13 ? * 3/1", function () {
      assert.equal(cronstrue.toString(this.test.title, { locale: "ja" }), "13:52,水曜～土曜");
    });

    it("0 23 ? * MON-FRI", function () {
      assert.equal(cronstrue.toString(this.test.title, { locale: "ja" }), "23:00,月曜～金曜");
    });

    it("30 11 * * 1-5", function () {
      assert.equal(cronstrue.toString(this.test.title, { locale: "ja" }), "11:30,月曜～金曜");
    });

    it("0-10 11 * * *", function () {
      assert.equal(cronstrue.toString(this.test.title, { locale: "ja" }), "11:00～11:10,毎分");
    });

    it("23 12 * Jan-Mar *", function () {
      assert.equal(cronstrue.toString(this.test.title, { locale: "ja" }), "12:23,1月～3月");
    });

    it("23 12 * JAN-FEB *", function () {
      assert.equal(cronstrue.toString(this.test.title, { locale: "ja" }), "12:23,1月～2月");
    });

    it("1 1,3-4 * * *", function () {
      assert.equal(cronstrue.toString(this.test.title, { locale: "ja" }), "毎時1分,01:00,03:00～04:59");
    });

    it("* 0 */4 * * *", function () {
      assert.equal(cronstrue.toString(this.test.title, { locale: "ja" }), "毎秒,毎時0分,4時間おき");
    });

    it("*/10 0 * * * *", function () {
      assert.equal(cronstrue.toString(this.test.title, { locale: "ja" }), "10秒おき,毎時0分");
    });

    it("* 0 0 * * *", function () {
      assert.equal(cronstrue.toString(this.test.title, { locale: "ja" }), "毎秒,毎時0分,00:00～00:59");
    });

    it("* 0 * * *", function () {
      assert.equal(cronstrue.toString(this.test.title, { locale: "ja" }), "毎分,00:00～00:59");
    });

    it("* 0 * * * *", function () {
      assert.equal(cronstrue.toString(this.test.title, { locale: "ja" }), "毎秒,毎時0分");
    });

    it("30 11 * * *", function () {
      assert.equal(cronstrue.toString(this.test.title, { locale: "ja" }), "11:30");
    });

    it("23 12 * * SUN", function () {
      assert.equal(cronstrue.toString(this.test.title, { locale: "ja" }), "12:23,日曜のみ");
    });

    it("30 02 14 * * *", function () {
      assert.equal(cronstrue.toString(this.test.title, { locale: "ja" }), "14:02:30");
    });

    it("0 0 6 1/1 * ?", function () {
      assert.equal(cronstrue.toString(this.test.title, { locale: "ja" }), "06:00");
    });

    it("0 5 0/1 * * ?", function () {
      assert.equal(cronstrue.toString(this.test.title, { locale: "ja" }), "毎時5分");
    });

    it("46 9 * * 1", function () {
      assert.equal(cronstrue.toString(this.test.title, { locale: "ja" }), "09:46,月曜のみ");
    });

    it("46 9 * * 7", function () {
      assert.equal(cronstrue.toString(this.test.title, { locale: "ja" }), "09:46,日曜のみ");
    });

    it("23 12 15 * *", function () {
      assert.equal(cronstrue.toString(this.test.title, { locale: "ja" }), "12:23,毎月15日");
    });

    it("23 12 * JAN *", function () {
      assert.equal(cronstrue.toString(this.test.title, { locale: "ja" }), "12:23,1月のみ");
    });

    it("23 12 ? JAN *", function () {
      assert.equal(cronstrue.toString(this.test.title, { locale: "ja" }), "12:23,1月のみ");
    });

    it("0 7 * * *", function () {
      assert.equal(cronstrue.toString(this.test.title, { locale: "ja" }), "07:00");
    });

    it("30 14,16 * * *", function () {
      assert.equal(cronstrue.toString(this.test.title, { locale: "ja" }), "14:30,16:30");
    });

    it("30 6,14,16 * * *", function () {
      // カンマが微妙だがとりあえず
      assert.equal(cronstrue.toString(this.test.title, { locale: "ja" }), "06:30,14:30,16:30");
    });

    it("0 * 31 * 1", function () {
      assert.equal(cronstrue.toString(this.test.title, { locale: "ja" }), "毎時,毎月31日,月曜");
    });

    it("* * LW * *", function () {
      assert.equal(cronstrue.toString(this.test.title, { locale: "ja" }), "毎分,毎月最後の平日");
    });

    it("* * WL * *", function () {
      assert.equal(cronstrue.toString(this.test.title, { locale: "ja" }), "毎分,毎月最後の平日");
    });

    it("* * 1W * *", function () {
      assert.equal(cronstrue.toString(this.test.title, { locale: "ja" }), "毎分,毎月最初の平日");
    });

    it("* * 13W * *", function () {
      assert.equal(cronstrue.toString(this.test.title, { locale: "ja" }), "毎分,毎月13日の直近の平日");
    });

    it("* * W1 * *", function () {
      assert.equal(cronstrue.toString(this.test.title, { locale: "ja" }), "毎分,毎月最初の平日");
    });

    it("* * 5W * *", function () {
      assert.equal(cronstrue.toString(this.test.title, { locale: "ja" }), "毎分,毎月5日の直近の平日");
    });

    it("* * W5 * *", function () {
      assert.equal(cronstrue.toString(this.test.title, { locale: "ja" }), "毎分,毎月5日の直近の平日");
    });

    it("* * * * 4L", function () {
      assert.equal(cronstrue.toString(this.test.title, { locale: "ja" }), "毎分,毎月最後の木曜");
    });

    it("*/5 * L JAN *", function () {
      assert.equal(cronstrue.toString(this.test.title, { locale: "ja" }), "5分おき,月の最終日,1月のみ");
    });

    it("0 20 15,L * *", function () {
      assert.equal(cronstrue.toString(this.test.title, { locale: "ja" }), "20:00,毎月15日,最終日");
    });

    it("0 20 1-10,20-L * *", function () {
      assert.equal(cronstrue.toString(this.test.title, { locale: "ja" }), "20:00,毎月 1日～10日,20日～最終日");
    });

    it("0 15 10 * * L", function () {
      assert.equal(cronstrue.toString(this.test.title, { locale: "ja" }), "10:15,土曜のみ");
    });

    it("0 15 10 L * *", function () {
      assert.equal(cronstrue.toString(this.test.title, { locale: "ja" }), "10:15,月の最終日");
    });

    it("0 0 0 L-5 * ?", function () {
      assert.equal(cronstrue.toString(this.test.title, { locale: "ja" }), "00:00,月の最終日の5日前");
    });

    it("23 12 * * 1#2", function () {
      assert.equal(cronstrue.toString(this.test.title, { locale: "ja", dayOfWeekStartIndexZero: false }),
       "12:23,毎月第2日曜");
    });

    it("* * * ? * 2-6/2", function () {
      assert.equal(cronstrue.toString(this.test.title, { locale: "ja", dayOfWeekStartIndexZero: false }),
       "毎秒,2日ごと,月曜～金曜");
    });

    it("* * * ? * 7", function () {
      assert.equal(cronstrue.toString(this.test.title, { locale: "ja", dayOfWeekStartIndexZero: false }),
       "毎秒,土曜のみ");
    });

    it("* * * ? * 1,2,3,4,5", function () {
      assert.equal(cronstrue.toString(this.test.title, { locale: "ja", dayOfWeekStartIndexZero: false }),
       "毎秒,日曜,月曜,火曜,水曜,木曜のみ");
    });

    it("0 * ? * 1/1", function () {
      assert.equal(cronstrue.toString(this.test.title, { locale: "ja", dayOfWeekStartIndexZero: false }),
       "毎時,日曜～土曜");
    });

    it("0 * ? * 2/1", function () {
      assert.equal(cronstrue.toString(this.test.title, { locale: "ja", dayOfWeekStartIndexZero: false }),
       "毎時,月曜～土曜");
    });

    it("*/5 15 * * MON-FRI", function () {
      assert.equal(cronstrue.toString(this.test.title, { locale: "ja" }), "5分おき,15:00～15:59,月曜～金曜");
    });

    it("* * * * MON#3", function () {
      assert.equal(cronstrue.toString(this.test.title, { locale: "ja" }), "毎分,毎月第3月曜");
    });

    it("5-10 * * * * *", function () {
      assert.equal(cronstrue.toString(this.test.title, { locale: "ja" }), "毎分5秒～10秒");
    });

    it("5-10 30-35 10-12 * * *", function () {
      assert.equal(cronstrue.toString(this.test.title, { locale: "ja" }), "毎分5秒～10秒,毎時30分～35分,10:00～12:59");
    });

    it("30 */5 * * * *", function () {
      assert.equal(cronstrue.toString(this.test.title, { locale: "ja" }), "毎分30秒,5分おき");
    });

    it("10 0/5 * * * ?", function () {
      assert.equal(cronstrue.toString(this.test.title, { locale: "ja" }), "毎分10秒,5分おき");
    });

    it("2-59/3 1,9,22 11-26 1-6 ?", function () {
      assert.equal(cronstrue.toString(this.test.title, { locale: "ja" }),
       "3分おき,毎時2分～59分,01:00,09:00,22:00,毎月11日～26日,1月～6月");
    });

    it("23 12 * JAN-FEB * 2013-2014", function () {
      assert.equal(cronstrue.toString(this.test.title, { locale: "ja" }), "12:23,1月～2月,2013～2014");
    });

    it("23 12 * JAN-MAR * 2013-2015", function () {
      assert.equal(cronstrue.toString(this.test.title, { locale: "ja" }), "12:23,1月～3月,2013～2015");
    });

    it("12-50 0-10 6 * * * 2022", function () {
      // 6時台みたいな表現をしたいがとりあえず
      assert.equal(cronstrue.toString(this.test.title, { locale: "ja" }), "毎分12秒～50秒,毎時0分～10分,06:00,2022年のみ");
    });

    it("0 0/30 8-9 5,20 * ?", function () {
      assert.equal(cronstrue.toString(this.test.title, { locale: "ja" }), "30分おき,08:00～09:59,毎月5日,20日");
    });

    it("23 12 * * SUN#2", function () {
      assert.equal(cronstrue.toString(this.test.title, { locale: "ja" }), "12:23,毎月第2日曜");
    });


    // it("0 25 7-19/8 ? * *", function () {
    //   assert.equal(cronstrue.toString(this.test.title, { locale: "ja" }), "毎時25分,8時間おき,07:00～19:59");
    // });

    it("0 25 7-20/13 ? * *", function () {
      assert.equal(cronstrue.toString(this.test.title, { locale: "ja" }), "毎時25分,13時間おき,07:00～20:59");
    });

    it("0 0 8 1/3 * ? *", function () {
      assert.equal(cronstrue.toString(this.test.title, { locale: "ja" }), "08:00,3日ごと");
    });

    it("0 15 10 ? * */3", function () {
      assert.equal(cronstrue.toString(this.test.title, { locale: "ja" }), "10:15,3日ごと");
    });

    it("* * * ? * 1-5/2", function () {
      assert.equal(cronstrue.toString(this.test.title, { locale: "ja" }), "毎秒,2日ごと,月曜～金曜");
    });

    it("0 5 7 2 1/3 ? *", function () {
      assert.equal(cronstrue.toString(this.test.title, { locale: "ja" }), "07:05,毎月2日,3か月おき");
    });

    it("0 15 6 1 1 ? 1/2", function () {
      assert.equal(cronstrue.toString(this.test.title, { locale: "ja" }), "06:15,毎月1日,1月のみ,2年ごと");
    });

    it("2,4-5 1 * * *", function () {
      assert.equal(cronstrue.toString(this.test.title, { locale: "ja" }), "毎時2,4～5分,01:00");
    });

    it("0 5 7 ? 3/2 ? *", function () {
      assert.equal(cronstrue.toString(this.test.title, { locale: "ja" }), "07:05,2か月おき,3月～12月");
    });

    it("2,26-28 18 * * *", function () {
      assert.equal(cronstrue.toString(this.test.title, { locale: "ja" }), "毎時2,26～28分,18:00");
    });

    it("5/30 * * * * ?", function () {
      assert.equal(cronstrue.toString(this.test.title, { locale: "ja" }), "30秒おき,毎分5秒から開始");
    });

    it("0 5/30 * * * ?", function () {
      assert.equal(cronstrue.toString(this.test.title, { locale: "ja" }), "30分おき 5分から開始");
    });

    it("* * 5/8 * * ?", function () {
      assert.equal(cronstrue.toString(this.test.title, { locale: "ja" }), "毎秒,8時間おき,05:00から開始");
    });

    it("0 5 7 2/3 * ? *", function () {
      assert.equal(cronstrue.toString(this.test.title, { locale: "ja" }), "07:05,3日ごと,毎月2日から開始");
    });

    it("0 5 7 ? * 2/3 *", function () {
      assert.equal(cronstrue.toString(this.test.title, { locale: "ja" }), "07:05,3日ごと,火曜～土曜");
    });

    it("0 5 7 ? * ? 2016/4", function () {
      assert.equal(cronstrue.toString(this.test.title, { locale: "ja" }), "07:05,4年ごと,2016～9999");
    });

    it("0 30 10-13 ? * wed,FRI", function () {
      assert.equal(cronstrue.toString(this.test.title, { locale: "ja" }), "毎時30分,10:00～13:59,水曜,金曜のみ");
    });

    it("0 00 10 ? * MON-THU,SUN *", function () {
      assert.equal(cronstrue.toString(this.test.title, { locale: "ja" }), "10:00,月曜～木曜,日曜のみ");
    });

    it("0 0 0 1,2,3 * WED,FRI", function () {
      assert.equal(cronstrue.toString(this.test.title, { locale: "ja" }), "00:00,毎月1日,2日,3日,水曜,金曜");
    });

    it("0 2,16 1,8,15,22 * 1,2", function () {
      assert.equal(cronstrue.toString(this.test.title, { locale: "ja" }), "02:00,16:00,毎月1日,8日,15日,22日,月曜,火曜");
    });

    it("0 */4,6 * * * ", function () {
      assert.equal(cronstrue.toString(this.test.title, { locale: "ja" }), "毎時0分,4時間おき,06:00");
    });

    it("5 30 6,14,16 5 * *", function () {
      assert.equal(cronstrue.toString(this.test.title, { locale: "ja" }), "毎分5秒,毎時30分,06:00,14:00,16:00,毎月5日");
    });

    it("0-20/3 9 * * *", function () {
        assert.equal(cronstrue.toString(this.test.title, { locale: "ja" }), "3分おき,毎時0分～20分,09:00～09:59");
    });

    it("5-45/10,*/5,9 * * * *", function () {
      assert.equal(cronstrue.toString(this.test.title, { locale: "ja" }), "10分おき,毎時5分～45分,5分おき,毎時9分");
    });

    it("30 4 1 * *", function () {
      assert.equal(cronstrue.toString(this.test.title, { locale: "ja", verbose: true }), "04:30,毎月1日");
    });

    it("0 13 * * 1", function () {
      assert.equal(cronstrue.toString(this.test.title, { locale: "ja", verbose: true }), "13:00,月曜のみ");
    });

  });
});
