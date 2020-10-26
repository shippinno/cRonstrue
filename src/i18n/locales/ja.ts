import { Locale } from "../locale";
export class ja implements Locale {
  use24HourTimeFormatByDefault() {
    return true;
  }

  everyMinute(): string {
    return "毎分";
  }
  everyHour(): string {
    return "毎時";
  }
  anErrorOccuredWhenGeneratingTheExpressionD(): string {
    return "式の記述を生成する際にエラーが発生しました。Cron 式の構文を確認してください。";
  }
  atSpace(): string {
    return "";
  }
  everyMinuteBetweenX0AndX1(): string {
    return "%s～%s,毎分";
  }
  at(): string {
    return "";
  }
  spaceAnd(): string {
    return ",";
  }
  everySecond(): string {
    return "毎秒";
  }
  everyX0Seconds(): string {
    return "%s秒おき";
  }
  secondsX0ThroughX1PastTheMinute(): string {
    return "毎分%s秒～%s秒";
  }
  atX0SecondsPastTheMinute(): string {
    return "毎分%s秒";
  }
  everyX0Minutes(): string {
    return "%s分おき ";
  }
  minutesX0ThroughX1PastTheHour(): string {
    //スペースを入れないと他と結合したときに「毎時」が消える
    return " 毎時%s分～%s分";
  }
  atX0MinutesPastTheHour(): string {
    //スペースを入れないと毎秒と結合したときに「毎時」が消える
    return " 毎時%s分";
  }
  everyX0Hours(): string {
    return "%s時間おき";
  }
  betweenX0AndX1(): string {
    return "%s～%s";
  }
  atX0(): string {
    // 〇時台
    return "%s";
  }
  commaEveryDay(): string {
    return ", 毎日";
  }
  commaEveryX0DaysOfTheWeek(): string {
    return ", %s日ごと";
  }
  commaX0ThroughX1(): string {
    return " , %s～%s";
  }
  first(): string {
    return ",毎月第1";
  }
  second(): string {
    return ",毎月第2";
  }
  third(): string {
    return ",毎月第3";
  }
  fourth(): string {
    return ",毎月第4";
  }
  fifth(): string {
    return ",毎月第5";
  }
  commaOnThe(): string {
    return " ";
  }
  spaceX0OfTheMonth(): string {
    return "%s";
  }
  commaOnTheLastX0OfTheMonth(): string {
    return ",毎月最後の%s";
  }
  commaOnlyOnX0(): string {
    return ", %sのみ";
  }
  commaOnlyInYearX0() {
    return ", %s年のみ";
  }
  commaEveryX0Months(): string {
    return ",%sか月おき";
  }
  commaOnlyInX0(): string {
    return ", %sのみ";
  }
  commaOnTheLastDayOfTheMonth(): string {
    return ",月の最終日";
  }
  commaOnTheLastWeekdayOfTheMonth(): string {
    return ",毎月最後の平日";
  }
  firstWeekday(): string {
    return "最初の平日";
  }
  weekdayNearestDayX0(): string {
    return "%s日の直近の平日";
  }
  commaOnTheX0OfTheMonth(): string {
    return ",毎月%s";
  }
  commaEveryX0Days(): string {
    return ",%s日ごと";
  }
  commaBetweenDayX0AndX1OfTheMonth(): string {
    return ",毎月%s～%s";
  }
  commaOnDayX0OfTheMonth(): string {
    return ",毎月%s";
  }
  spaceAndSpace(): string {
    return "と";
  }
  commaEveryMinute(): string {
    return ",毎分";
  }
  commaEveryHour(): string {
    return ",毎時";
  }
  commaEveryX0Years(): string {
    return ",%s年ごと";
  }
  commaStartingX0(): string {
    return ",%sから開始";
  }
  aMPeriod(): string {
    return "AM";
  }
  pMPeriod(): string {
    return "PM";
  }
  commaDaysBeforeTheLastDayOfTheMonth(): string {
    return ", 月の最終日の%s日前";
  }
  atX0SecondsPastTheMinuteGt20(): string {
    return null;
  }
  atX0MinutesPastTheHourGt20(): string {
    return null;
  }
  commaMonthX0ThroughMonthX1(): string {
    return null;
  }
  commaYearX0ThroughYearX1(): string {
    return null;
  }
  lastDay() {
    return "最終日";
  }
  commaAndOnX0() {
    return ", %s";
  }
  dayX0() {
    return "%s日";
  }
  daysOfTheWeek() {
    return ["日曜", "月曜", "火曜", "水曜", "木曜", "金曜", "土曜"];
  }
  monthsOfTheYear() {
    return ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"];
  }

  // for debug
  // everyMinute(): string {
  //   return "毎分_1_";
  // }
  // everyHour(): string {
  //   return "毎時_2_";
  // }
  // anErrorOccuredWhenGeneratingTheExpressionD(): string {
  //   return "式の記述を生成する際にエラーが発生しました。Cron 式の構文を確認してください。";
  // }
  // atSpace(): string {
  //   return "_3_";
  // }
  // everyMinuteBetweenX0AndX1(): string {
  //   return "%sから%sまで毎分_4_";
  // }
  // at(): string {
  //   return "_5_";
  // }
  // spaceAnd(): string {
  //   return "_6_";
  // }
  // everySecond(): string {
  //   return "毎秒_7_";
  // }
  // everyX0Seconds(): string {
  //   return "%s秒おき_8_";
  // }
  // secondsX0ThroughX1PastTheMinute(): string {
  //   return "毎分 %s 秒から %s 秒まで_9_";
  // }
  // atX0SecondsPastTheMinute(): string {
  //   return "毎分 %s 秒過ぎ_10_";
  // }
  // everyX0Minutes(): string {
  //   return "%s分おき_11_";
  // }
  // minutesX0ThroughX1PastTheHour(): string {
  //   return "毎時 %s 分から %s 分まで_12_";
  // }
  // atX0MinutesPastTheHour(): string {
  //   //スペースを入れないと毎秒と結合したときに「毎時」が消える
  //   return " 毎時%s分_13_";
  // }
  // everyX0Hours(): string {
  //   return "%s時間おき_14_";
  // }
  // betweenX0AndX1(): string {
  //   return "%sから%sまで_15_";
  // }
  // atX0(): string {
  //   return "%s_16_";
  // }
  // commaEveryDay(): string {
  //   return ", 毎日_17_";
  // }
  // commaEveryX0DaysOfTheWeek(): string {
  //   return ",週のうち %s 日ごと_18_";
  // }
  // commaX0ThroughX1(): string {
  //   return ", %sから%sまで_19_";
  // }
  // first(): string {
  //   return "1 番目_20_";
  // }
  // second(): string {
  //   return "2 番目_21_";
  // }
  // third(): string {
  //   return "3 番目_22_";
  // }
  // fourth(): string {
  //   return "4 番目_23_";
  // }
  // fifth(): string {
  //   return "5 番目_24_";
  // }
  // commaOnThe(): string {
  //   return "次に_25_";
  // }
  // spaceX0OfTheMonth(): string {
  //   return "月のうち %s_26_";
  // }
  // commaOnTheLastX0OfTheMonth(): string {
  //   return ",毎月最後の%s_27_";
  // }
  // commaOnlyOnX0(): string {
  //   return "%sのみ_28_";
  // }
  // commaOnlyInYearX0() {
  //   return ", %s年のみ_29_";
  // }
  // commaEveryX0Months(): string {
  //   return ",%sか月おき_30_";
  // }
  // commaOnlyInX0(): string {
  //   return ", %sのみ_31_";
  // }
  // commaOnTheLastDayOfTheMonth(): string {
  //   return ",月の最終日_32_";
  // }
  // commaOnTheLastWeekdayOfTheMonth(): string {
  //   return ",毎月最後の平日_33_";
  // }
  // firstWeekday(): string {
  //   return "最初の平日_34_";
  // }
  // weekdayNearestDayX0(): string {
  //   return "%s日の直近の平日_35_";
  // }
  // commaOnTheX0OfTheMonth(): string {
  //   return ",毎月%s_36_";
  // }
  // commaEveryX0Days(): string {
  //   return ",%s 日ごと_37_";
  // }
  // commaBetweenDayX0AndX1OfTheMonth(): string {
  //   return ",毎月%sから%sの間_38_";
  // }
  // commaOnDayX0OfTheMonth(): string {
  //   return ",毎月%s_39_";
  // }
  // spaceAndSpace(): string {
  //   return "と_40_";
  // }
  // commaEveryMinute(): string {
  //   return ",毎分_41_";
  // }
  // commaEveryHour(): string {
  //   return ",毎時_42_";
  // }
  // commaEveryX0Years(): string {
  //   return ",%s 年ごと_43_";
  // }
  // commaStartingX0(): string {
  //   return ",%s に開始_44_";
  // }
  // aMPeriod(): string {
  //   return "AM_45_";
  // }
  // pMPeriod(): string {
  //   return "PM_46_";
  // }
  // commaDaysBeforeTheLastDayOfTheMonth(): string {
  //   return "月の最終日の %s 日前_47_";
  // }
  // atX0SecondsPastTheMinuteGt20(): string {
  //   return "_48_";
  // }
  // atX0MinutesPastTheHourGt20(): string {
  //   return "_49_";
  // }
  // commaMonthX0ThroughMonthX1(): string {
  //   return "_50_";
  // }
  // commaYearX0ThroughYearX1(): string {
  //   return "_51_";
  // }
  // lastDay() {
  //   return "最終日_52_";
  // }
  // commaAndOnX0() {
  //   return ",かつ %s_53_";
  // }
  // dayX0() {
  //   return "%s日_56_";
  // }
  // daysOfTheWeek() {
  //   return ["日曜_54_", "月曜_54_", "火曜_54_", "水曜_54_", "木曜_54_", "金曜_54_", "土曜_54_"];
  // }
  // monthsOfTheYear() {
  //   return ["1月_55_", "2月_55_", "3月_55_", "4月_55_", "5月_55_", "6月_55_", "7月_55_", "8月_55_", "9月_55_", "10月_55_", "11月_55_", "12月_55_"];
  // }
}
