import Vue from "vue";
import Vuex from "vuex";
import LabelModel from "@/models/labelModel";
import RecordModel from "@/models/recordModel";
import createId from "@/lib/createId";
import clone from "@/lib/clone";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    outTagsData:
      LabelModel.fetch("outTags_vue").length === 0
        ? [
            { iconName: "catering", notes: "餐饮", id: 1 },
            { iconName: "shopping", notes: "购物", id: 2 },
            { iconName: "dayuse", notes: "日用", id: 3 },
            { iconName: "traffic", notes: "交通", id: 4 },
            { iconName: "sport", notes: "运动", id: 5 },
            { iconName: "pet", notes: "宠物", id: 6 },
            { iconName: "recreation", notes: "娱乐", id: 7 },
          ]
        : LabelModel.fetch("outTags_vue"),
    inTagsData:
      LabelModel.fetch("inTags_vue").length === 0
        ? [
            { iconName: "parttime", notes: "兼职", id: 1 },
            { iconName: "wage", notes: "工资", id: 2 },
            { iconName: "licai", notes: "理财", id: 3 },
            { iconName: "otherrevenue", notes: "其他", id: 4 },
          ]
        : LabelModel.fetch("inTags_vue"),
    recordList: RecordModel.fetch(),
    iconNameList: [
      {
        title: "支出",
        icons: [
          "catering",
          "shopping",
          "dayuse",
          "traffic",
          "vegetable",
          "fruits",
          "snacks",
          "sport",
          "recreation",
          "communication",
          "costume",
          "work",
          "pet",
          "gift",
          "travel",
          "beauty",
          "car",
          "digital",
          "maintain",
          "study",
          "medical",
          "book",
          "movie",
          "house",
          "transfer_accounts",
          "furniture",
          "child",
          "oldman",
          "social_contact",
          "cigarette_wine",
          "lottery",
        ],
      },
      {
        title: "收入",
        icons: [
          "parttime",
          "wage",
          "licai",
          "cashgift",
          "otherrevenue",
          "auction",
        ],
      },
    ],
  },
  mutations: {
    CREATE_TAG(state, value) {
      if (value[0] === "-") {
        const id = createId("out");
        value[1].id = id;
        if (id !== undefined) state.outTagsData.push(value[1]);
      } else if (value[0] === "+") {
        const id = createId("in");
        value[1].id = id;
        if (id !== undefined) state.inTagsData.push(value[1]);
      }
    },
    DELETE_TAG(state, value) {
      // this.state.
      if (value[1] === "-") {
        let index = -1;
        state.outTagsData.forEach((item: any, i: number) => {
          if (item.id === value[0]) index = i;
        });
        state.outTagsData.splice(index, 1);
      } else if (value[1] === "+") {
        let index = -1;
        state.inTagsData.forEach((item: any, i: number) => {
          if (item.id === value[0]) index = i;
        });
        state.inTagsData.splice(index, 1);
      }
    },
    UPDATE_TAG_NOTES(state, value) {
      if (value[1] === "-") {
        state.outTagsData.map((item: any) => {
          if (item.id === value[0]) {
            item.notes = value[2];
          }
        });
      } else if (value[1] === "+") {
        state.inTagsData.map((item: any) => {
          if (item.id === value[0]) {
            item.notes = value[2];
          }
        });
      }
    },
    CREATE_RECORD(state, value) {
      const recordClone = clone(value);
      recordClone.createTime = new Date().toISOString();
      state.recordList.push(recordClone);
    },
    SAVE_ALL(state) {
      LabelModel.save("outTags_vue", state.outTagsData);
      LabelModel.save("inTags_vue", state.inTagsData);
      RecordModel.save(state.recordList);
    },
  },
  actions: {},
  modules: {},
});
