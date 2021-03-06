/**
 * Storage封装
 */
const STORAGE_KEY = 'mall';
export default {
    // 存储值
    setItem(key, value, module_name) {
        if (module_name) {
            let val = this.getItem(module_name);
            val[key] = value;
            // 递归调用
            this.setItem(module_name, val);
        } else {
            let val = this.getStorage();
            val[key] = value;
            window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(val));
        }
    },
    // 获取某一个模块下面的属性user下面的userName
    getItem(key, module_name) {
        if (module_name) {
            // 递归调用
            let val = this.getItem(module_name);
            if (val) return val[key];
        }
        // 如果没有模块直接返回
        return this.getStorage()[key];
    },
    // 根据 STORAGE_KEY 获取所有的
    getStorage() {
        return JSON.parse(window.sessionStorage.getItem(STORAGE_KEY) || '{}');
    },
    // 清空某一个值
    clear(key, module_name) {
        let val = this.getStorage();
        // 删除某个模块的值
        if (module_name) {
            if (!val[module_name]) return;
            delete val[module_name][key];
        } else {
            delete val[key];
        }
        window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(val));
    }
}
