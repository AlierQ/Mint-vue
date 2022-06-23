<template>
  <div class="input-pad">
    <div class="output">0.00</div>
    <div class="remark">
      <Icon name="remake"></Icon>
      <label>
        备注:&nbsp;
      </label>
      <input type="text" placeholder="点击填写备注" />
    </div>
    <div class="pad">
      <table>
        <tr>
          <td>7</td>
          <td>8</td>
          <td>9</td>
          <td class="characters">清空</td>
        </tr>
        <tr>
          <td>4</td>
          <td>5</td>
          <td>6</td>
          <td>+</td>
        </tr>
        <tr>
          <td>1</td>
          <td>2</td>
          <td>3</td>
          <td>-</td>
        </tr>
        <tr>
          <td>.</td>
          <td>0</td>
          <td><Icon name="clear"></Icon></td>
          <td class="characters done" >完成</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "InputPad",
};
</script>

<style lang="scss" scoped>
.input-pad {
  //border: 1px solid red;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
  height: 360px;
  display: flex;
  flex-direction: column;
  align-items: center;
  .output {
    text-align: right;
    color: #333333;
    font-size: 32px;
    padding-right: 10px;
    height: 60px;
    line-height: 60px;
    align-self: flex-end;
  }
  .remark {
    background: #e6e7e8;
    border-radius: 5px;
    height: 40px;
    width: 96vw;
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    >.icon{
      width: 22px;
      height: 22px;
      margin-left: 10px;
    }
    >label {
      color: #333333;
      font-size: 18px;
      margin-left: 2px;
    }
    >input{
      outline: 0;
      flex-grow: 1;
      margin-right: 10px;
      height: 30px;
      border: none;
      background: #e6e7e8;
      font-size: 16px;
    }
  }
  .pad{
    //border: 1px solid red;
    width: 100vw;
    flex-grow: 1;
    table{
      border-spacing: 0;/*把单元格间隙设置为0*/
      border-collapse: collapse;
      border: none;
      flex-direction: column;
      width: 100%;height: 100%;
      table-layout: fixed;
      tr{
        td{
          border: 1px solid #E8E8E8;
          color: #333333;
          font-size: 22px;
          text-align: center;
        }
        .characters{
          font-size: 18px;
        }
        .done{
          background: #79c79f;
          border:0;
        }
      }
    }
  }
}
</style>
