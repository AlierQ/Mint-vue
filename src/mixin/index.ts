import dayjs from "dayjs";
import getWeekOfYear from "@/lib/getWeekOfYear";

export const mixin = {
  methods: {
    // 记录按金额由大到小排序
    sortAmountMax(array: any) {
      for (let i = 0; i < array.length; i++) {
        array[i].items.sort((a: any, b: any) => {
          return b.amount - a.amount;
        });
      }
    },

    // 记录按时间排序
    sortDateMax(recordList: RecordItem[]) {
      recordList.sort((a: RecordItem, b: RecordItem) => {
        return dayjs(b.createTime).valueOf() - dayjs(a.createTime).valueOf();
      });
    },

    // 使用不同的函数生成不同的title进行分组
    recordGroup(groupFn: any, recordList: RecordItem[]) {
      let array = [
        { title: groupFn(recordList[0].createTime), items: [recordList[0]] },
      ];
      for (let i = 1; i < recordList.length; i++) {
        const last = array.length - 1;
        if (groupFn(recordList[i].createTime) === array[last].title) {
          array[last].items.push(recordList[i]);
        } else {
          array.push({
            title: groupFn(recordList[i].createTime),
            items: [recordList[i]],
          });
        }
      }
      return array;
    },
    // 计算每一个分组的金额总和
    calculateSum(array: any) {
      array.map((group: any) => {
        group.sum = group.items.reduce((sum: number, item: RecordItem) => {
          return sum + item.amount;
        }, 0);
      });
    },
    // 分别计算收入和支出的总和
    calculateInSumAndOutSum(array: any) {
      array.map((group: any) => {
        group.inSum = group.items.reduce((sum: number, item: RecordItem) => {
          if (item.type === "+") {
            return sum + item.amount;
          } else {
            return sum;
          }
        }, 0);
        group.outSum = group.items.reduce((sum: number, item: RecordItem) => {
          if (item.type === "-") {
            return sum + item.amount;
          } else {
            return sum;
          }
        }, 0);
      });
    },
  },
};
