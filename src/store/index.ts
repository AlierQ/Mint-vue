import Vue from "vue";
import Vuex from "vuex";
import LabelModel from "@/models/labelModel";
import RecordModel from "@/models/recordModel";
import createId from "@/lib/createId";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    outTagsData: LabelModel.fetch("outTags"),
    inTagsData: LabelModel.fetch("inTags"),
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
      value.createTime = new Date();
      state.recordList.push(value);
    },
    SAVE_ALL(state) {
      LabelModel.save("outTags", state.outTagsData);
      LabelModel.save("inTags", state.inTagsData);
      RecordModel.save(state.recordList);
    },
  },
  actions: {},
  modules: {},
});
