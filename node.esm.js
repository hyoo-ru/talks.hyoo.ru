"use strict";
var exports = void 0;
"use strict"

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	else for (var i = decorators.length - 1; i >= 0; i--) if ((d = decorators[i])) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var globalThis = globalThis || ( typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : this )
var $ = ( typeof module === 'object' ) ? Object.setPrototypeOf( module['export'+'s'] , globalThis ) : globalThis
$.$$ = $

;

var $node = $node || {}
void function( module ) { var exports = module.exports = this; function require( id ) { return $node[ id.replace( /^.\// , "../" ) ] }; 
;
"use strict";
Error.stackTraceLimit = 50;
var $;
(function ($) {
})($ || ($ = {}));
module.exports = $;
//mam.js.map
;

$node[ "../mam" ] = $node[ "../mam.js" ] = module.exports }.call( {} , {} )
;
"use strict";
var $;
(function ($) {
    function $mol_offline(uri = 'web.js') { }
    $.$mol_offline = $mol_offline;
})($ || ($ = {}));
//offline.node.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_offline();
})($ || ($ = {}));
//install.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_decor {
        value;
        constructor(value) {
            this.value = value;
        }
        prefix() { return ''; }
        valueOf() { return this.value; }
        postfix() { return ''; }
        toString() {
            return `${this.prefix()}${this.valueOf()}${this.postfix()}`;
        }
    }
    $.$mol_decor = $mol_decor;
})($ || ($ = {}));
//decor.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_style_unit extends $.$mol_decor {
        literal;
        constructor(value, literal) {
            super(value);
            this.literal = literal;
        }
        postfix() {
            return this.literal;
        }
        static per(value) { return new $mol_style_unit(value, '%'); }
        static px(value) { return new $mol_style_unit(value, 'px'); }
        static mm(value) { return new $mol_style_unit(value, 'mm'); }
        static cm(value) { return new $mol_style_unit(value, 'cm'); }
        static Q(value) { return new $mol_style_unit(value, 'Q'); }
        static in(value) { return new $mol_style_unit(value, 'in'); }
        static pc(value) { return new $mol_style_unit(value, 'pc'); }
        static pt(value) { return new $mol_style_unit(value, 'pt'); }
        static cap(value) { return new $mol_style_unit(value, 'cap'); }
        static ch(value) { return new $mol_style_unit(value, 'ch'); }
        static em(value) { return new $mol_style_unit(value, 'em'); }
        static rem(value) { return new $mol_style_unit(value, 'rem'); }
        static ex(value) { return new $mol_style_unit(value, 'ex'); }
        static ic(value) { return new $mol_style_unit(value, 'ic'); }
        static lh(value) { return new $mol_style_unit(value, 'lh'); }
        static rlh(value) { return new $mol_style_unit(value, 'rlh'); }
        static vh(value) { return new $mol_style_unit(value, 'vh'); }
        static vw(value) { return new $mol_style_unit(value, 'vw'); }
        static vi(value) { return new $mol_style_unit(value, 'vi'); }
        static vb(value) { return new $mol_style_unit(value, 'vb'); }
        static vmin(value) { return new $mol_style_unit(value, 'vmin'); }
        static vmax(value) { return new $mol_style_unit(value, 'vmax'); }
        static deg(value) { return new $mol_style_unit(value, 'deg'); }
        static rad(value) { return new $mol_style_unit(value, 'rad'); }
        static grad(value) { return new $mol_style_unit(value, 'grad'); }
        static turn(value) { return new $mol_style_unit(value, 'turn'); }
        static s(value) { return new $mol_style_unit(value, 's'); }
        static ms(value) { return new $mol_style_unit(value, 'ms'); }
    }
    $.$mol_style_unit = $mol_style_unit;
})($ || ($ = {}));
//unit.js.map
;
"use strict";
var $;
(function ($) {
    const { per } = $.$mol_style_unit;
    class $mol_style_func extends $.$mol_decor {
        name;
        constructor(name, value) {
            super(value);
            this.name = name;
        }
        prefix() { return this.name + '('; }
        postfix() { return ')'; }
        static calc(value) {
            return new $mol_style_func('calc', value);
        }
        static vary(name) {
            return new $mol_style_func('var', name);
        }
        static url(href) {
            return new $mol_style_func('url', JSON.stringify(href));
        }
        static hsla(hue, saturation, lightness, alpha) {
            return new $mol_style_func('hsla', [hue, per(saturation), per(lightness), alpha]);
        }
        static rgba(red, green, blue, alpha) {
            return new $mol_style_func('rgba', [red, green, blue, alpha]);
        }
    }
    $.$mol_style_func = $mol_style_func;
})($ || ($ = {}));
//func.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_ambient_ref = Symbol('$mol_ambient_ref');
    function $mol_ambient(overrides) {
        return Object.setPrototypeOf(overrides, this || $);
    }
    $.$mol_ambient = $mol_ambient;
})($ || ($ = {}));
//ambient.js.map
;
"use strict";
var $;
(function ($) {
    const instances = new WeakSet();
    function $mol_delegate(proto, target) {
        const proxy = new Proxy(proto, {
            get: (_, field) => {
                const obj = target();
                let val = Reflect.get(obj, field);
                if (typeof val === 'function') {
                    val = val.bind(obj);
                }
                return val;
            },
            has: (_, field) => Reflect.has(target(), field),
            set: (_, field, value) => Reflect.set(target(), field, value),
            getOwnPropertyDescriptor: (_, field) => Reflect.getOwnPropertyDescriptor(target(), field),
            ownKeys: () => Reflect.ownKeys(target()),
            getPrototypeOf: () => Reflect.getPrototypeOf(target()),
            setPrototypeOf: (_, donor) => Reflect.setPrototypeOf(target(), donor),
            isExtensible: () => Reflect.isExtensible(target()),
            preventExtensions: () => Reflect.preventExtensions(target()),
            apply: (_, self, args) => Reflect.apply(target(), self, args),
            construct: (_, args, retarget) => Reflect.construct(target(), args, retarget),
            defineProperty: (_, field, descr) => Reflect.defineProperty(target(), field, descr),
            deleteProperty: (_, field) => Reflect.deleteProperty(target(), field),
        });
        instances.add(proxy);
        return proxy;
    }
    $.$mol_delegate = $mol_delegate;
    Reflect.defineProperty($mol_delegate, Symbol.hasInstance, {
        value: (obj) => instances.has(obj),
    });
})($ || ($ = {}));
//delegate.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_owning_map = new WeakMap();
    function $mol_owning_allow(having) {
        try {
            if (!having)
                return false;
            if (typeof having !== 'object')
                return false;
            if (having instanceof $.$mol_delegate)
                return false;
            if (typeof having['destructor'] !== 'function')
                return false;
            return true;
        }
        catch {
            return false;
        }
    }
    $.$mol_owning_allow = $mol_owning_allow;
    function $mol_owning_get(having, Owner) {
        if (!$mol_owning_allow(having))
            return null;
        while (true) {
            const owner = $.$mol_owning_map.get(having);
            if (!owner)
                return owner;
            if (!Owner)
                return owner;
            if (owner instanceof Owner)
                return owner;
            having = owner;
        }
    }
    $.$mol_owning_get = $mol_owning_get;
    function $mol_owning_check(owner, having) {
        if (!$mol_owning_allow(having))
            return false;
        if ($.$mol_owning_map.get(having) !== owner)
            return false;
        return true;
    }
    $.$mol_owning_check = $mol_owning_check;
    function $mol_owning_catch(owner, having) {
        if (!$mol_owning_allow(having))
            return false;
        if ($.$mol_owning_map.get(having))
            return false;
        $.$mol_owning_map.set(having, owner);
        return true;
    }
    $.$mol_owning_catch = $mol_owning_catch;
})($ || ($ = {}));
//owning.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_fail(error) {
        throw error;
    }
    $.$mol_fail = $mol_fail;
})($ || ($ = {}));
//fail.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_fail_hidden(error) {
        throw error;
    }
    $.$mol_fail_hidden = $mol_fail_hidden;
})($ || ($ = {}));
//hidden.js.map
;
"use strict";
//writable.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_object2 {
        static $ = $;
        [$.$mol_ambient_ref] = null;
        get $() {
            if (this[$.$mol_ambient_ref])
                return this[$.$mol_ambient_ref];
            const owner = $.$mol_owning_get(this);
            return this[$.$mol_ambient_ref] = owner?.$ || $mol_object2.$;
        }
        set $(next) {
            if (this[$.$mol_ambient_ref])
                $.$mol_fail_hidden(new Error('Context already defined'));
            this[$.$mol_ambient_ref] = next;
        }
        static create(init) {
            const obj = new this;
            if (init)
                init(obj);
            return obj;
        }
        static [Symbol.toPrimitive]() {
            return this.toString();
        }
        static toString() {
            if (Symbol.toStringTag in this)
                return this[Symbol.toStringTag];
            return this.name;
        }
        destructor() { }
        [Symbol.toPrimitive](hint) {
            return hint === 'number' ? this.valueOf() : this.toString();
        }
        toString() {
            return this[Symbol.toStringTag] || this.constructor.name + '()';
        }
        toJSON() {
            return this.toString();
        }
    }
    $.$mol_object2 = $mol_object2;
})($ || ($ = {}));
//object2.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_after_tick extends $.$mol_object2 {
        task;
        promise;
        cancelled = false;
        constructor(task) {
            super();
            this.task = task;
            this.promise = Promise.resolve().then(() => {
                if (this.cancelled)
                    return;
                task();
            });
        }
        destructor() {
            this.cancelled = true;
        }
    }
    $.$mol_after_tick = $mol_after_tick;
})($ || ($ = {}));
//tick.js.map
;
"use strict";
var $;
(function ($) {
})($ || ($ = {}));
//context.js.map
;
"use strict";
//node.js.map
;
"use strict";
var $node = new Proxy({ require }, {
    get(target, name, wrapper) {
        if (target[name])
            return target[name];
        const mod = target.require('module');
        if (mod.builtinModules.indexOf(name) >= 0)
            return target.require(name);
        const path = target.require('path');
        const fs = target.require('fs');
        let dir = path.resolve('.');
        const suffix = `./node_modules/${name}`;
        const $$ = $;
        while (!fs.existsSync(path.join(dir, suffix))) {
            const parent = path.resolve(dir, '..');
            if (parent === dir) {
                $$.$mol_exec('.', 'npm', 'install', name);
                try {
                    $$.$mol_exec('.', 'npm', 'install', '@types/' + name);
                }
                catch { }
                break;
            }
            else {
                dir = parent;
            }
        }
        return target.require(name);
    },
    set(target, name, value) {
        target[name] = value;
        return true;
    },
});
require = (req => Object.assign(function require(name) {
    return $node[name];
}, req))(require);
//node.node.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_dom_context = new $node.jsdom.JSDOM('', { url: 'https://localhost/' }).window;
})($ || ($ = {}));
//context.node.js.map
;
"use strict";
var $;
(function ($) {
    let all = [];
    let el = null;
    let timer = null;
    function $mol_style_attach(id, text) {
        all.push(`/* ${id} */\n\n${text}`);
        if (timer)
            return el;
        const doc = $.$mol_dom_context.document;
        if (!doc)
            return null;
        el = doc.createElement('style');
        el.id = `$mol_style_attach`;
        doc.head.appendChild(el);
        timer = new $.$mol_after_tick(() => {
            el.innerHTML = '\n' + all.join('\n\n');
            all = [];
            el = null;
            timer = null;
        });
        return el;
    }
    $.$mol_style_attach = $mol_style_attach;
})($ || ($ = {}));
//attach.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/theme/theme.css", "[mol_theme] {\n\tbackground-color: var(--mol_theme_back);\n\tcolor: var(--mol_theme_text);\n\tfill: var(--mol_theme_text);\n}\n\n[mol_theme=\"$mol_theme_light\"] , :root {\n\t--mol_theme_back: hsl( 210 , 50% , 99% );\n\t--mol_theme_hover: rgba( 0 , 0 , 0 , .05 );\n\t--mol_theme_current: hsl( 210 , 100% , 80% );\n\t--mol_theme_text: hsl( 0 , 0% , 0% );\n\t--mol_theme_control: hsla( 210 , 60% , 35% , 1 );\n\t--mol_theme_shade: rgba( 0 , 0 , 0 , .5 );\n\t--mol_theme_line: rgba( 220 , 220 , 220 , 1 );\n\t--mol_theme_focus: hsl( 290 , 70% , 50% );\n\t--mol_theme_field: white;\n\t--mol_theme_image: none;\n}\n\n[mol_theme=\"$mol_theme_dark\"] {\n\t--mol_theme_back: hsl( 210 , 50% , 10% );\n\t--mol_theme_hover: rgba( 255 , 255 , 255 , .05 );\n\t--mol_theme_current: hsl( 210 , 100% , 30% );\n\t--mol_theme_text: hsl( 0 , 0% , 80% );\n\t--mol_theme_control: hsla( 210 , 60% , 70% , 1 );\n\t--mol_theme_shade: rgba( 255 , 255 , 255 , .5 );\n\t--mol_theme_line: rgba( 50 , 50 , 50 , 1 );\n\t--mol_theme_focus: hsl( 60 , 100% , 70% );\n\t--mol_theme_field: black;\n\t--mol_theme_image: invert(1) hue-rotate(180deg);\n}\n\n[mol_theme=\"$mol_theme_base\"] {\n\t--mol_theme_back: hsla( 210 , 60% , 35% , 1 );\n\t--mol_theme_hover: hsla( 210 , 60% , 20% , 1 );\n\t--mol_theme_current: hsl( 210 , 100% , 20% );\n\t--mol_theme_text: white;\n\t--mol_theme_line: white;\n\t--mol_theme_control: white;\n}\n\n[mol_theme=\"$mol_theme_accent\"] {\n\t--mol_theme_back: hsl( 15 , 60% , 50% );\n\t--mol_theme_hover: hsl( 15 , 60% , 40% );\n\t--mol_theme_text: white;\n\t--mol_theme_line: rgba( 50 , 50 , 50 , 1 );\n\t--mol_theme_control: white;\n\t--mol_theme_focus: black;\n}\n\n[mol_theme=\"$mol_theme_accent\"] [mol_theme=\"$mol_theme_accent\"] {\n\t--mol_theme_back: black;\n\t--mol_theme_text: white;\n}\n");
})($ || ($ = {}));
//theme.css.js.map
;
"use strict";
var $;
(function ($) {
    const { vary } = $.$mol_style_func;
    $.$mol_theme = {
        back: vary('--mol_theme_back'),
        hover: vary('--mol_theme_hover'),
        current: vary('--mol_theme_current'),
        text: vary('--mol_theme_text'),
        control: vary('--mol_theme_control'),
        shade: vary('--mol_theme_shade'),
        line: vary('--mol_theme_line'),
        focus: vary('--mol_theme_focus'),
        field: vary('--mol_theme_field'),
        image: vary('--mol_theme_image'),
    };
})($ || ($ = {}));
//theme.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/skin/skin.css", ":root {\n\t--mol_skin_font: 16px/24px Segoe UI, sans-serif;\n\t/* --mol_skin_font_monospace: Monaco, monospace; */\n\t--mol_skin_font_monospace: monospace;\n}\n\n/* Deprecated, use mol_theme instead */\n:root {\n\n\t--mol_skin_outline: 0 0 0 1px var(--mol_theme_line);\n\t\n\t--mol_skin_base: #3a8ccb;\n\t--mol_skin_base_text: white;\n\t\n\t--mol_skin_current: var(--mol_skin_base);\n\t--mol_skin_current_text: white;\n\t--mol_skin_current_line: #1471b8;\n\t\n\t--mol_skin_button: var(--mol_skin_card);\n\t--mol_skin_hover: rgba( 0 , 0 , 0 , .05 );\n\t\n\t--mol_skin_round: 0px;\n\t\n\t--mol_skin_focus_line: rgba( 0 , 0 , 0 , .2 );\n\t--mol_skin_focus_outline: 0 0 0 1px var(--mol_skin_focus_line);\n\t\n\t--mol_skin_float: var(--mol_skin_focus_outline);\n\n\t--mol_skin_passive: #eee;\n\t--mol_skin_passive_text: rgba( 0 , 0 , 0 , .5 );\n\t\n\t--mol_skin_light: #fcfcfc;\n\t--mol_skin_light_line: rgba( 230 , 230 , 230 , .75 );\n\t--mol_skin_light_text: rgba( 0 , 0 , 0 , .9 );\n\t--mol_skin_light_hover: #f7f7f7;\n\t--mol_skin_light_outline: 0 0 0 1px var(--mol_theme_line);\n\n\t--mol_skin_card: var(--mol_theme_back);\n\t--mol_skin_card_text: var(--mol_theme_text);\n\t\n\t--mol_skin_accent: #dd0e3e;\n\t--mol_skin_accent_text: white;\n\t--mol_skin_accent_hover: #c50d37;\n\n\t--mol_skin_warn: rgba( 255 , 50 , 50 , 0.75 );\n\t--mol_skin_warn_text: white;\n\t--mol_skin_warn_hover: color( var(--mol_skin_warn) lightness(-5%) );\n\n\t--mol_skin_good: #96DAA9;\n\t--mol_skin_good_text: black;\n\n\t--mol_skin_bad: #CC5252;\n\t--mol_skin_bad_text: white;\n}\n");
})($ || ($ = {}));
//skin.css.js.map
;
"use strict";
var $;
(function ($_1) {
    let $$;
    (function ($$) {
        let $;
    })($$ = $_1.$$ || ($_1.$$ = {}));
    $_1.$mol_object_field = Symbol('$mol_object_field');
    class $mol_object extends $_1.$mol_object2 {
        static make(config) {
            return super.create(obj => {
                for (let key in config)
                    obj[key] = config[key];
            });
        }
    }
    $_1.$mol_object = $mol_object;
})($ || ($ = {}));
//object.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_window extends $.$mol_object {
        static size(next) {
            return next || {
                width: 1024,
                height: 768,
            };
        }
    }
    $.$mol_window = $mol_window;
})($ || ($ = {}));
//window.node.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_log3_area_lazy(event) {
        const self = this;
        const stack = self.$mol_log3_stack;
        const deep = stack.length;
        let logged = false;
        stack.push(() => {
            logged = true;
            self.$mol_log3_area.call(self, event);
        });
        return () => {
            if (logged)
                self.console.groupEnd();
            if (stack.length > deep)
                stack.length = deep;
        };
    }
    $.$mol_log3_area_lazy = $mol_log3_area_lazy;
    $.$mol_log3_stack = [];
})($ || ($ = {}));
//log3.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_deprecated(message) {
        return (host, field, descr) => {
            const value = descr.value;
            let warned = false;
            descr.value = function $mol_deprecated_wrapper(...args) {
                if (!warned) {
                    $.$$.$mol_log3_warn({
                        place: `${host.constructor.name}::${field}`,
                        message: `Deprecated`,
                        hint: message,
                    });
                    warned = true;
                }
                return value.call(this, ...args);
            };
        };
    }
    $.$mol_deprecated = $mol_deprecated;
})($ || ($ = {}));
//deprecated.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_tree_convert = Symbol('$mol_tree_convert');
    class $mol_tree extends $.$mol_object2 {
        type;
        data;
        sub;
        baseUri;
        row;
        col;
        length;
        constructor(config = {}) {
            super();
            this.type = config.type || '';
            if (config.value !== undefined) {
                var sub = $mol_tree.values(config.value);
                if (config.type || sub.length > 1) {
                    this.sub = [...sub, ...(config.sub || [])];
                    this.data = config.data || '';
                }
                else {
                    this.data = sub[0].data;
                    this.sub = config.sub || [];
                }
            }
            else {
                this.data = config.data || '';
                this.sub = config.sub || [];
            }
            this.baseUri = config.baseUri || '';
            this.row = config.row || 0;
            this.col = config.col || 0;
            this.length = config.length || 0;
        }
        static values(str, baseUri) {
            return str.split('\n').map((data, index) => new $mol_tree({
                data: data,
                baseUri: baseUri,
                row: index + 1,
                length: data.length,
            }));
        }
        clone(config = {}) {
            return new $mol_tree({
                type: ('type' in config) ? config.type : this.type,
                data: ('data' in config) ? config.data : this.data,
                sub: ('sub' in config) ? config.sub : this.sub,
                baseUri: ('baseUri' in config) ? config.baseUri : this.baseUri,
                row: ('row' in config) ? config.row : this.row,
                col: ('col' in config) ? config.col : this.col,
                length: ('length' in config) ? config.length : this.length,
                value: config.value
            });
        }
        make(config) {
            return new $mol_tree({
                baseUri: this.baseUri,
                row: this.row,
                col: this.col,
                length: this.length,
                ...config,
            });
        }
        make_data(value, sub) {
            return this.make({ value, sub });
        }
        make_struct(type, sub) {
            return this.make({ type, sub });
        }
        static fromString(str, baseUri) {
            var root = new $mol_tree({ baseUri: baseUri });
            var stack = [root];
            var row = 0;
            var prefix = str.replace(/^\n?(\t*)[\s\S]*/, '$1');
            var lines = str.replace(new RegExp('^\\t{0,' + prefix.length + '}', 'mg'), '').split('\n');
            lines.forEach(line => {
                ++row;
                var chunks = /^(\t*)((?:[^\n\t\\ ]+ *)*)(\\[^\n]*)?(.*?)(?:$|\n)/m.exec(line);
                if (!chunks || chunks[4])
                    return this.$.$mol_fail(new Error(`Syntax error at ${baseUri}:${row}\n${line}`));
                var indent = chunks[1];
                var path = chunks[2];
                var data = chunks[3];
                var deep = indent.length;
                var types = path ? path.replace(/ $/, '').split(/ +/) : [];
                if (stack.length <= deep)
                    return this.$.$mol_fail(new Error(`Too many tabs at ${baseUri}:${row}\n${line}`));
                stack.length = deep + 1;
                var parent = stack[deep];
                let col = deep;
                types.forEach(type => {
                    if (!type)
                        return this.$.$mol_fail(new Error(`Unexpected space symbol ${baseUri}:${row}\n${line}`));
                    var next = new $mol_tree({ type, baseUri, row, col, length: type.length });
                    const parent_sub = parent.sub;
                    parent_sub.push(next);
                    parent = next;
                    col += type.length + 1;
                });
                if (data) {
                    var next = new $mol_tree({ data: data.substring(1), baseUri, row, col, length: data.length });
                    const parent_sub = parent.sub;
                    parent_sub.push(next);
                    parent = next;
                }
                stack.push(parent);
            });
            return root;
        }
        static fromJSON(json, baseUri = '') {
            switch (true) {
                case typeof json === 'boolean':
                case typeof json === 'number':
                case json === null:
                    return new $mol_tree({
                        type: String(json),
                        baseUri: baseUri
                    });
                case typeof json === 'string':
                    return new $mol_tree({
                        value: json,
                        baseUri: baseUri
                    });
                case Array.isArray(json):
                    return new $mol_tree({
                        type: "/",
                        sub: json.map(json => $mol_tree.fromJSON(json, baseUri))
                    });
                case json instanceof Date:
                    return new $mol_tree({
                        value: json.toISOString(),
                        baseUri: baseUri
                    });
                default:
                    if (typeof json[$.$mol_tree_convert] === 'function') {
                        return json[$.$mol_tree_convert]();
                    }
                    if (typeof json.toJSON === 'function') {
                        return $mol_tree.fromJSON(json.toJSON());
                    }
                    if (json instanceof Error) {
                        const { name, message, stack } = json;
                        json = { ...json, name, message, stack };
                    }
                    var sub = [];
                    for (var key in json) {
                        if (json[key] === undefined)
                            continue;
                        const subsub = $mol_tree.fromJSON(json[key], baseUri);
                        if (/^[^\n\t\\ ]+$/.test(key)) {
                            var child = new $mol_tree({
                                type: key,
                                baseUri: baseUri,
                                sub: [subsub],
                            });
                        }
                        else {
                            var child = new $mol_tree({
                                value: key,
                                baseUri: baseUri,
                                sub: [subsub],
                            });
                        }
                        sub.push(child);
                    }
                    return new $mol_tree({
                        type: "*",
                        sub: sub,
                        baseUri: baseUri
                    });
            }
        }
        get uri() {
            return this.baseUri + '#' + this.row + ':' + this.col;
        }
        toString(prefix = '') {
            var output = '';
            if (this.type.length) {
                if (!prefix.length) {
                    prefix = "\t";
                }
                output += this.type;
                if (this.sub.length == 1) {
                    return output + ' ' + this.sub[0].toString(prefix);
                }
                output += "\n";
            }
            else if (this.data.length || prefix.length) {
                output += "\\" + this.data + "\n";
            }
            for (var child of this.sub) {
                output += prefix;
                output += child.toString(prefix + "\t");
            }
            return output;
        }
        toJSON() {
            if (!this.type)
                return this.value;
            if (this.type === 'true')
                return true;
            if (this.type === 'false')
                return false;
            if (this.type === 'null')
                return null;
            if (this.type === '*') {
                var obj = {};
                for (var child of this.sub) {
                    if (child.type === '-')
                        continue;
                    var key = child.type || child.clone({ sub: child.sub.slice(0, child.sub.length - 1) }).value;
                    var val = child.sub[child.sub.length - 1].toJSON();
                    if (val !== undefined)
                        obj[key] = val;
                }
                return obj;
            }
            if (this.type === '/') {
                var res = [];
                this.sub.forEach(child => {
                    if (child.type === '-')
                        return;
                    var val = child.toJSON();
                    if (val !== undefined)
                        res.push(val);
                });
                return res;
            }
            if (this.type === 'time') {
                return new Date(this.value);
            }
            const numb = Number(this.type);
            if (!Number.isNaN(numb) || this.type === 'NaN')
                return numb;
            throw new Error(`Unknown type (${this.type}) at ${this.uri}`);
        }
        get value() {
            var values = [];
            for (var child of this.sub) {
                if (child.type)
                    continue;
                values.push(child.value);
            }
            return this.data + values.join("\n");
        }
        insert(value, ...path) {
            if (path.length === 0)
                return value;
            const type = path[0];
            if (typeof type === 'string') {
                let replaced = false;
                const sub = this.sub.map((item, index) => {
                    if (item.type !== type)
                        return item;
                    replaced = true;
                    return item.insert(value, ...path.slice(1));
                });
                if (!replaced)
                    sub.push(new $mol_tree({ type }).insert(value, ...path.slice(1)));
                return this.clone({ sub });
            }
            else if (typeof type === 'number') {
                const sub = this.sub.slice();
                sub[type] = (sub[type] || new $mol_tree).insert(value, ...path.slice(1));
                return this.clone({ sub });
            }
            else {
                return this.clone({ sub: ((this.sub.length === 0) ? [new $mol_tree()] : this.sub).map(item => item.insert(value, ...path.slice(1))) });
            }
        }
        select(...path) {
            var next = [this];
            for (var type of path) {
                if (!next.length)
                    break;
                var prev = next;
                next = [];
                for (var item of prev) {
                    switch (typeof (type)) {
                        case 'string':
                            for (var child of item.sub) {
                                if (!type || (child.type == type)) {
                                    next.push(child);
                                }
                            }
                            break;
                        case 'number':
                            if (type < item.sub.length)
                                next.push(item.sub[type]);
                            break;
                        default: next.push(...item.sub);
                    }
                }
            }
            return new $mol_tree({ sub: next });
        }
        filter(path, value) {
            var sub = this.sub.filter(function (item) {
                var found = item.select(...path);
                if (value == null) {
                    return Boolean(found.sub.length);
                }
                else {
                    return found.sub.some(child => child.value == value);
                }
            });
            return new $mol_tree({ sub: sub });
        }
        transform(visit, stack = []) {
            const sub_stack = [this, ...stack];
            return visit(sub_stack, () => this.sub.map(node => node.transform(visit, sub_stack)).filter(n => n));
        }
        hack(context) {
            const sub = [].concat(...this.sub.map(child => {
                const handle = context[child.type] || context[''];
                if (!handle)
                    $.$mol_fail(child.error('Handler not defined'));
                return handle(child, context);
            }));
            return this.clone({ sub });
        }
        error(message) {
            return new Error(`${message}:\n${this} ${this.baseUri}:${this.row}:${this.col}`);
        }
    }
    __decorate([
        $.$mol_deprecated('Use $mol_tree:hack')
    ], $mol_tree.prototype, "transform", null);
    $.$mol_tree = $mol_tree;
})($ || ($ = {}));
//tree.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_log3_node_make(level, output, type, color) {
        return function $mol_log3_logger(event) {
            if (!event.time)
                event = { time: new Date().toISOString(), ...event };
            const tree = this.$mol_tree.fromJSON(event).clone({ type });
            let str = tree.toString();
            if (process[output].isTTY) {
                str = $node.colorette[color + 'Bright'](str);
            }
            ;
            this.console[level](str);
            const self = this;
            return () => self.console.groupEnd();
        };
    }
    $.$mol_log3_node_make = $mol_log3_node_make;
    $.$mol_log3_come = $mol_log3_node_make('info', 'stdout', 'come', 'blue');
    $.$mol_log3_done = $mol_log3_node_make('info', 'stdout', 'done', 'green');
    $.$mol_log3_fail = $mol_log3_node_make('error', 'stderr', 'fail', 'red');
    $.$mol_log3_warn = $mol_log3_node_make('warn', 'stderr', 'warn', 'yellow');
    $.$mol_log3_rise = $mol_log3_node_make('log', 'stdout', 'rise', 'magenta');
    $.$mol_log3_area = $mol_log3_node_make('log', 'stdout', 'area', 'cyan');
})($ || ($ = {}));
//log3.node.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_wrapper extends $.$mol_object2 {
        static wrap;
        static run(task) {
            return this.func(task)();
        }
        static func(func) {
            return this.wrap(func);
        }
        static get class() {
            return (Class) => {
                const construct = (target, args) => new Class(...args);
                const handler = {
                    construct: this.func(construct)
                };
                handler[Symbol.toStringTag] = Class.name + '#';
                return new Proxy(Class, handler);
            };
        }
        static get method() {
            return (obj, name, descr) => {
                descr.value = this.func(descr.value);
                return descr;
            };
        }
        static get field() {
            return (obj, name, descr) => {
                descr.get = descr.set = this.func(descr.get);
                return descr;
            };
        }
    }
    $.$mol_wrapper = $mol_wrapper;
})($ || ($ = {}));
//wrapper.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_after_timeout extends $.$mol_object2 {
        delay;
        task;
        id;
        constructor(delay, task) {
            super();
            this.delay = delay;
            this.task = task;
            this.id = setTimeout(task, delay);
        }
        destructor() {
            clearTimeout(this.id);
        }
    }
    $.$mol_after_timeout = $mol_after_timeout;
})($ || ($ = {}));
//timeout.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_after_frame extends $.$mol_after_timeout {
        task;
        constructor(task) {
            super(16, task);
            this.task = task;
        }
    }
    $.$mol_after_frame = $mol_after_frame;
})($ || ($ = {}));
//frame.node.js.map
;
"use strict";
var $;
(function ($) {
    const cache = new WeakMap();
    $.$mol_conform_stack = [];
    function $mol_conform(target, source) {
        if (Object.is(target, source))
            return source;
        if (!target || typeof target !== 'object')
            return target;
        if (!source || typeof source !== 'object')
            return target;
        if (target instanceof Error)
            return target;
        if (source instanceof Error)
            return target;
        if (target['constructor'] !== source['constructor'])
            return target;
        if (cache.get(target))
            return target;
        cache.set(target, true);
        const conform = $.$mol_conform_handlers.get(target['constructor']);
        if (!conform)
            return target;
        if ($.$mol_conform_stack.indexOf(target) !== -1)
            return target;
        $.$mol_conform_stack.push(target);
        try {
            return conform(target, source);
        }
        finally {
            $.$mol_conform_stack.pop();
        }
    }
    $.$mol_conform = $mol_conform;
    $.$mol_conform_handlers = new WeakMap();
    function $mol_conform_handler(cl, handler) {
        $.$mol_conform_handlers.set(cl, handler);
    }
    $.$mol_conform_handler = $mol_conform_handler;
    function $mol_conform_array(target, source) {
        if (source.length !== target.length)
            return target;
        for (let i = 0; i < target.length; ++i) {
            if (!Object.is(source[i], target[i]))
                return target;
        }
        return source;
    }
    $.$mol_conform_array = $mol_conform_array;
    $mol_conform_handler(Array, $mol_conform_array);
    $mol_conform_handler(Uint8Array, $mol_conform_array);
    $mol_conform_handler(Uint16Array, $mol_conform_array);
    $mol_conform_handler(Uint32Array, $mol_conform_array);
    $mol_conform_handler(({})['constructor'], (target, source) => {
        let count = 0;
        let equal = true;
        for (let key in target) {
            const conformed = $mol_conform(target[key], source[key]);
            if (conformed !== target[key]) {
                try {
                    target[key] = conformed;
                }
                catch (error) { }
                if (!Object.is(conformed, target[key]))
                    equal = false;
            }
            if (!Object.is(conformed, source[key]))
                equal = false;
            ++count;
        }
        for (let key in source)
            if (--count < 0)
                break;
        return (equal && count === 0) ? source : target;
    });
    $mol_conform_handler(Date, (target, source) => {
        if (target.getTime() === source.getTime())
            return source;
        return target;
    });
    $mol_conform_handler(RegExp, (target, source) => {
        if (target.toString() === source.toString())
            return source;
        return target;
    });
})($ || ($ = {}));
//conform.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_array_trim(array) {
        let last = array.length;
        while (last > 0) {
            --last;
            const value = array[last];
            if (value === undefined)
                array.pop();
            else
                break;
        }
        return array;
    }
    $.$mol_array_trim = $mol_array_trim;
})($ || ($ = {}));
//trim.js.map
;
"use strict";
var $;
(function ($) {
    $['devtoolsFormatters'] = $['devtoolsFormatters'] || [];
    function $mol_dev_format_register(config) {
        $['devtoolsFormatters'].push(config);
    }
    $.$mol_dev_format_register = $mol_dev_format_register;
    $.$mol_dev_format_head = Symbol('$mol_dev_format_head');
    $.$mol_dev_format_body = Symbol('$mol_dev_format_body');
    $mol_dev_format_register({
        header: (val, config = false) => {
            if (config)
                return null;
            if (!val)
                return null;
            if ($.$mol_dev_format_head in val) {
                return val[$.$mol_dev_format_head]();
            }
            return null;
        },
        hasBody: val => val[$.$mol_dev_format_body],
        body: val => val[$.$mol_dev_format_body](),
    });
    function $mol_dev_format_native(obj) {
        if (typeof obj === 'undefined')
            return $.$mol_dev_format_shade('undefined');
        if (typeof obj !== 'object' && typeof obj !== 'function')
            return obj;
        return [
            'object',
            {
                object: obj,
                config: true,
            },
        ];
    }
    $.$mol_dev_format_native = $mol_dev_format_native;
    function $mol_dev_format_auto(obj) {
        if (obj == null)
            return $.$mol_dev_format_shade(String(obj));
        if (typeof obj === 'object' && $.$mol_dev_format_head in obj) {
            return obj[$.$mol_dev_format_head]();
        }
        return [
            'object',
            {
                object: obj,
                config: false,
            },
        ];
    }
    $.$mol_dev_format_auto = $mol_dev_format_auto;
    function $mol_dev_format_element(element, style, ...content) {
        const styles = [];
        for (let key in style)
            styles.push(`${key} : ${style[key]}`);
        return [
            element,
            {
                style: styles.join(' ; '),
            },
            ...content,
        ];
    }
    $.$mol_dev_format_element = $mol_dev_format_element;
    function $mol_dev_format_span(style, ...content) {
        return $mol_dev_format_element('span', {
            'vertical-align': '8%',
            ...style,
        }, ...content);
    }
    $.$mol_dev_format_span = $mol_dev_format_span;
    $.$mol_dev_format_div = $mol_dev_format_element.bind(null, 'div');
    $.$mol_dev_format_ol = $mol_dev_format_element.bind(null, 'ol');
    $.$mol_dev_format_li = $mol_dev_format_element.bind(null, 'li');
    $.$mol_dev_format_table = $mol_dev_format_element.bind(null, 'table');
    $.$mol_dev_format_tr = $mol_dev_format_element.bind(null, 'tr');
    $.$mol_dev_format_td = $mol_dev_format_element.bind(null, 'td');
    $.$mol_dev_format_accent = $mol_dev_format_span.bind(null, {
        'color': 'magenta',
    });
    $.$mol_dev_format_strong = $mol_dev_format_span.bind(null, {
        'font-weight': 'bold',
    });
    $.$mol_dev_format_string = $mol_dev_format_span.bind(null, {
        'color': 'green',
    });
    $.$mol_dev_format_shade = $mol_dev_format_span.bind(null, {
        'color': 'gray',
    });
    $.$mol_dev_format_indent = $.$mol_dev_format_div.bind(null, {
        'margin-left': '13px'
    });
})($ || ($ = {}));
//format.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_fiber_defer(calculate) {
        const fiber = new $mol_fiber;
        fiber.calculate = calculate;
        fiber[Symbol.toStringTag] = calculate.name;
        fiber.schedule();
        return fiber;
    }
    $.$mol_fiber_defer = $mol_fiber_defer;
    function $mol_fiber_func(calculate) {
        $.$mol_ambient({}).$mol_log3_warn({
            place: '$mol_fiber_func',
            message: 'Deprecated',
            hint: 'Use $mol_fiber.func instead',
        });
        return $mol_fiber.func(calculate);
    }
    $.$mol_fiber_func = $mol_fiber_func;
    function $mol_fiber_root(calculate) {
        const wrapper = function (...args) {
            const fiber = new $mol_fiber();
            fiber.calculate = calculate.bind(this, ...args);
            fiber[Symbol.toStringTag] = wrapper[Symbol.toStringTag];
            return fiber.wake();
        };
        wrapper[Symbol.toStringTag] = calculate.name;
        return wrapper;
    }
    $.$mol_fiber_root = $mol_fiber_root;
    function $mol_fiber_method(obj, name, descr) {
        $.$mol_ambient({}).$mol_log3_warn({
            place: '$mol_fiber_method',
            message: 'Deprecated',
            hint: 'Use $mol_fiber.method instead',
        });
        return $mol_fiber.method(obj, name, descr);
    }
    $.$mol_fiber_method = $mol_fiber_method;
    function $mol_fiber_async(task) {
        return (...args) => new Promise($mol_fiber_root((done, fail) => {
            try {
                done(task(...args));
            }
            catch (error) {
                if ('then' in error)
                    return $.$mol_fail_hidden(error);
                fail(error);
            }
        }));
    }
    $.$mol_fiber_async = $mol_fiber_async;
    function $mol_fiber_sync(request) {
        return function $mol_fiber_sync_wrapper(...args) {
            const slave = $mol_fiber.current;
            let master = slave && slave.master;
            if (!master || master.constructor !== $mol_fiber) {
                master = new $mol_fiber;
                master.cursor = -3;
                master.error = request.call(this, ...args).then((next) => master.push(next), (error) => master.fail(error));
                const prefix = slave ? `${slave}/${slave.cursor / 2}:` : '/';
                master[Symbol.toStringTag] = prefix + (request.name || $mol_fiber_sync.name);
            }
            return master.get();
        };
    }
    $.$mol_fiber_sync = $mol_fiber_sync;
    async function $mol_fiber_warp() {
        const deadline = $mol_fiber.deadline;
        try {
            $mol_fiber.deadline = Number.POSITIVE_INFINITY;
            while ($mol_fiber.queue.length)
                await $mol_fiber.tick();
            return Promise.resolve();
        }
        finally {
            $mol_fiber.deadline = deadline;
        }
    }
    $.$mol_fiber_warp = $mol_fiber_warp;
    function $mol_fiber_fence(func) {
        const prev = $mol_fiber.current;
        try {
            $mol_fiber.current = null;
            return func();
        }
        finally {
            $mol_fiber.current = prev;
        }
    }
    $.$mol_fiber_fence = $mol_fiber_fence;
    function $mol_fiber_unlimit(task) {
        const deadline = $mol_fiber.deadline;
        try {
            $mol_fiber.deadline = Number.POSITIVE_INFINITY;
            return task();
        }
        finally {
            $mol_fiber.deadline = deadline;
        }
    }
    $.$mol_fiber_unlimit = $mol_fiber_unlimit;
    class $mol_fiber_solid extends $.$mol_wrapper {
        static func(task) {
            function wrapped(...args) {
                const deadline = $mol_fiber.deadline;
                try {
                    $mol_fiber.deadline = Number.POSITIVE_INFINITY;
                    return task.call(this, ...args);
                }
                catch (error) {
                    if ('then' in error)
                        $.$mol_fail(new Error('Solid fiber can not be suspended.'));
                    return $.$mol_fail_hidden(error);
                }
                finally {
                    $mol_fiber.deadline = deadline;
                }
            }
            return $mol_fiber.func(wrapped);
        }
    }
    $.$mol_fiber_solid = $mol_fiber_solid;
    class $mol_fiber extends $.$mol_wrapper {
        static logs = false;
        static wrap(task) {
            return function $mol_fiber_wrapper(...args) {
                const slave = $mol_fiber.current;
                let master = slave && slave.master;
                if (!master || master.constructor !== $mol_fiber) {
                    master = new $mol_fiber;
                    master.calculate = task.bind(this, ...args);
                    const prefix = slave ? `${slave}/${slave.cursor / 2}:` : '/';
                    master[Symbol.toStringTag] = `${prefix}${task.name}`;
                }
                return master.get();
            };
        }
        static quant = 16;
        static deadline = 0;
        static liveline = 0;
        static current = null;
        static scheduled = null;
        static queue = [];
        static async tick() {
            while ($mol_fiber.queue.length > 0) {
                const now = Date.now();
                if (now >= $mol_fiber.deadline) {
                    $mol_fiber.schedule();
                    $mol_fiber.liveline = now;
                    return;
                }
                const task = $mol_fiber.queue.shift();
                await task();
            }
        }
        static schedule() {
            if (!$mol_fiber.scheduled) {
                $mol_fiber.scheduled = new $.$mol_after_frame(async () => {
                    const now = Date.now();
                    let quant = $mol_fiber.quant;
                    if ($mol_fiber.liveline) {
                        quant = Math.max(quant, Math.floor((now - $mol_fiber.liveline) / 2));
                        $mol_fiber.liveline = 0;
                    }
                    $mol_fiber.deadline = now + quant;
                    $mol_fiber.scheduled = null;
                    await $mol_fiber.tick();
                });
            }
            const promise = new this.$.Promise(done => this.queue.push(() => (done(null), promise)));
            return promise;
        }
        cursor = 0;
        masters = [];
        calculate;
        _value = undefined;
        get value() { return this._value; }
        set value(next) {
            this._value = next;
        }
        _error = null;
        get error() { return this._error; }
        set error(next) {
            this._error = next;
        }
        schedule() {
            $mol_fiber.schedule().then(() => this.wake());
        }
        wake() {
            const unscoupe = this.$.$mol_log3_area_lazy({
                place: this,
                message: 'Wake'
            });
            try {
                if (this.cursor > -2)
                    return this.get();
            }
            catch (error) {
                if ('then' in error)
                    return;
                $.$mol_fail_hidden(error);
            }
            finally {
                unscoupe();
            }
        }
        push(value) {
            value = this.$.$mol_conform(value, this.value);
            if (this.error !== null || !Object.is(this.value, value)) {
                if ($mol_fiber.logs)
                    this.$.$mol_log3_done({
                        place: this,
                        message: 'Changed',
                        next: value,
                        value: this.value,
                        error: this.error,
                    });
                this.obsolete_slaves();
                this.forget();
            }
            else {
                if ($mol_fiber.logs)
                    this.$.$mol_log3_done({
                        place: this,
                        message: 'Same value',
                        value,
                    });
            }
            this.error = null;
            this.value = value;
            this.complete();
            return value;
        }
        fail(error) {
            this.complete();
            if ($mol_fiber.logs)
                this.$.$mol_log3_fail({
                    place: this,
                    message: error.message,
                });
            this.error = error;
            this.obsolete_slaves();
            return error;
        }
        wait(promise) {
            this.error = promise;
            if ($mol_fiber.logs)
                this.$.$mol_log3_warn({
                    place: this,
                    message: `Wait`,
                    hint: `Don't panic, it's normal`,
                    promise,
                });
            this.cursor = 0;
            return promise;
        }
        complete() {
            if (this.cursor <= -2)
                return;
            for (let index = 0; index < this.masters.length; index += 2) {
                this.complete_master(index);
            }
            this.cursor = -2;
        }
        complete_master(master_index) {
            this.disobey(master_index);
        }
        pull() {
            if ($mol_fiber.logs)
                this.$.$mol_log3_come({
                    place: this,
                    message: 'Pull',
                });
            this.push(this.calculate());
        }
        update() {
            const slave = $mol_fiber.current;
            try {
                $mol_fiber.current = this;
                this.pull();
            }
            catch (error) {
                if (Object(error) !== error)
                    error = new Error(error);
                if ('then' in error) {
                    if (!slave) {
                        const listener = () => this.wake();
                        error = error.then(listener, listener);
                    }
                    this.wait(error);
                }
                else {
                    this.fail(error);
                }
            }
            finally {
                $mol_fiber.current = slave;
            }
        }
        get() {
            if (this.cursor > 0) {
                this.$.$mol_fail(new Error(`Cyclic dependency at ${this}`));
            }
            const slave = $mol_fiber.current;
            if (slave)
                slave.master = this;
            if (this.cursor > -2)
                this.update();
            if (this.error !== null)
                return this.$.$mol_fail_hidden(this.error);
            return this.value;
        }
        limit() {
            if (!$mol_fiber.deadline)
                return;
            if (!$mol_fiber.current)
                return;
            if (Date.now() < $mol_fiber.deadline)
                return;
            this.$.$mol_fail_hidden($mol_fiber.schedule());
        }
        get master() {
            return (this.cursor < this.masters.length ? this.masters[this.cursor] : undefined);
        }
        set master(next) {
            if (this.cursor === -1)
                return;
            const cursor = this.cursor;
            const prev = this.master;
            if (prev !== next) {
                if (prev)
                    this.rescue(prev, cursor);
                this.masters[cursor] = next;
                this.masters[cursor + 1] = this.obey(next, cursor);
            }
            this.cursor = cursor + 2;
        }
        rescue(master, master_index) { }
        obey(master, master_index) { return -1; }
        lead(slave, master_index) { return -1; }
        dislead(slave_index) {
            this.destructor();
        }
        disobey(master_index) {
            const master = this.masters[master_index];
            if (!master)
                return;
            master.dislead(this.masters[master_index + 1]);
            this.masters[master_index] = undefined;
            this.masters[master_index + 1] = undefined;
            this.$.$mol_array_trim(this.masters);
        }
        obsolete_slaves() { }
        obsolete(master_index) { }
        forget() {
            this.value = undefined;
        }
        abort() {
            this.forget();
            return true;
        }
        destructor() {
            if (!this.abort())
                return;
            if ($mol_fiber.logs)
                this.$.$mol_log3_done({
                    place: this,
                    message: 'Destructed',
                });
            this.complete();
        }
        [$.$mol_dev_format_head]() {
            return $.$mol_dev_format_native(this);
        }
    }
    $.$mol_fiber = $mol_fiber;
})($ || ($ = {}));
//fiber.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_atom2_value(task, next) {
        const cached = $mol_atom2.cached;
        try {
            $mol_atom2.cached = true;
            $mol_atom2.cached_next = next;
            return task();
        }
        finally {
            $mol_atom2.cached = cached;
        }
    }
    $.$mol_atom2_value = $mol_atom2_value;
    class $mol_atom2 extends $.$mol_fiber {
        static logs = false;
        static get current() {
            const atom = $.$mol_fiber.current;
            if (atom instanceof $mol_atom2)
                return atom;
            return null;
        }
        static cached = false;
        static cached_next = undefined;
        static reap_task = null;
        static reap_queue = [];
        static reap(atom) {
            this.reap_queue.push(atom);
            if (this.reap_task)
                return;
            this.reap_task = $.$mol_fiber_defer(() => {
                this.reap_task = null;
                while (true) {
                    const atom = this.reap_queue.pop();
                    if (!atom)
                        break;
                    if (!atom.alone)
                        continue;
                    atom.destructor();
                }
            });
        }
        slaves = [];
        rescue(master, cursor) {
            if (!(master instanceof $mol_atom2))
                return;
            const master_index = this.masters.length;
            const slave_index = this.masters[cursor + 1] + 1;
            master.slaves[slave_index] = master_index;
            this.masters.push(master, this.masters[cursor + 1]);
        }
        subscribe(promise) {
            const obsolete = () => this.obsolete();
            return promise.then(obsolete, obsolete);
        }
        get() {
            if ($mol_atom2.cached) {
                if ($mol_atom2.cached_next !== undefined) {
                    this.push($mol_atom2.cached_next);
                    $mol_atom2.cached_next = undefined;
                }
                return this.value;
            }
            const value = super.get();
            if (value === undefined)
                $.$mol_fail(new Error(`Not defined: ${this}`));
            return value;
        }
        pull() {
            if (this.cursor === 0)
                return super.pull();
            if ($mol_atom2.logs)
                this.$.$mol_log3_come({
                    place: this,
                    message: 'Check doubt masters',
                });
            const masters = this.masters;
            for (let index = 0; index < masters.length; index += 2) {
                const master = masters[index];
                if (!master)
                    continue;
                try {
                    master.get();
                }
                catch (error) {
                    if ('then' in error)
                        $.$mol_fail_hidden(error);
                    this.cursor = 0;
                }
                if (this.cursor !== 0)
                    continue;
                if ($mol_atom2.logs)
                    this.$.$mol_log3_done({
                        place: this,
                        message: 'Obsoleted while checking',
                    });
                return super.pull();
            }
            if ($mol_atom2.logs)
                this.$.$mol_log3_done({
                    place: this,
                    message: 'Masters not changed',
                });
            this.cursor = -2;
        }
        get value() { return this._value; }
        set value(next) {
            const prev = this._value;
            if (prev && this.$.$mol_owning_check(this, prev))
                prev.destructor();
            if (next && this.$.$mol_owning_catch(this, next)) {
                try {
                    next[Symbol.toStringTag] = this[Symbol.toStringTag];
                }
                catch { }
                next[$.$mol_object_field] = this[$.$mol_object_field];
            }
            this._value = next;
        }
        get error() { return this._error; }
        set error(next) {
            const prev = this._error;
            if (prev && this.$.$mol_owning_check(this, prev))
                prev.destructor();
            if (next && this.$.$mol_owning_catch(this, next)) {
                next[Symbol.toStringTag] = this[Symbol.toStringTag];
                next[$.$mol_object_field] = this[$.$mol_object_field];
            }
            this._error = next;
        }
        put(next) {
            this.cursor = this.masters.length;
            next = this.push(next);
            this.cursor = -3;
            return next;
        }
        complete_master(master_index) {
            if (this.masters[master_index] instanceof $mol_atom2) {
                if (master_index >= this.cursor)
                    this.disobey(master_index);
            }
            else {
                this.disobey(master_index);
            }
        }
        obey(master, master_index) {
            return master.lead(this, master_index);
        }
        lead(slave, master_index) {
            if ($mol_atom2.logs)
                this.$.$mol_log3_rise({
                    place: this,
                    message: 'Leads',
                    slave,
                });
            const slave_index = this.slaves.length;
            this.slaves[slave_index] = slave;
            this.slaves[slave_index + 1] = master_index;
            return slave_index;
        }
        dislead(slave_index) {
            if (slave_index < 0)
                return;
            if ($mol_atom2.logs)
                this.$.$mol_log3_rise({
                    place: this,
                    message: 'Disleads',
                    slave: this.slaves[slave_index],
                });
            this.slaves[slave_index] = undefined;
            this.slaves[slave_index + 1] = undefined;
            $.$mol_array_trim(this.slaves);
            if (this.cursor > -3 && this.alone)
                $mol_atom2.reap(this);
        }
        obsolete(master_index = -1) {
            if (this.cursor > 0) {
                if (master_index >= this.cursor - 2)
                    return;
                const path = [];
                let current = this;
                collect: while (current) {
                    path.push(current);
                    current = current.masters[current.cursor - 2];
                }
                this.$.$mol_fail(new Error(`Obsoleted while calculation \n\n${path.join('\n')}\n`));
            }
            if (this.cursor === 0)
                return;
            if ($mol_atom2.logs)
                this.$.$mol_log3_rise({
                    place: this,
                    message: 'Obsoleted',
                });
            if (this.cursor !== -1)
                this.doubt_slaves();
            this.cursor = 0;
        }
        doubt(master_index = -1) {
            if (this.cursor > 0) {
                if (master_index >= this.cursor - 2)
                    return;
                const path = [];
                let current = this;
                collect: while (current) {
                    path.push(current);
                    current = current.masters[current.cursor - 2];
                }
                this.$.$mol_fail(new Error(`Doubted while calculation \n\n${path.join('\n')}\n`));
            }
            if (this.cursor >= -1)
                return;
            if ($mol_atom2.logs)
                this.$.$mol_log3_rise({
                    place: this,
                    message: 'Doubted',
                });
            this.cursor = -1;
            this.doubt_slaves();
        }
        obsolete_slaves() {
            for (let index = 0; index < this.slaves.length; index += 2) {
                const slave = this.slaves[index];
                if (slave)
                    slave.obsolete(this.slaves[index + 1]);
            }
        }
        doubt_slaves() {
            for (let index = 0; index < this.slaves.length; index += 2) {
                const slave = this.slaves[index];
                if (slave)
                    slave.doubt(this.slaves[index + 1]);
            }
        }
        get fresh() {
            return () => {
                if (this.cursor !== -2)
                    return;
                this.cursor = 0;
                $.$mol_fiber_solid.run(() => this.update());
            };
        }
        get alone() {
            return this.slaves.length === 0;
        }
        get derived() {
            for (let index = 0; index < this.masters.length; index += 2) {
                if (this.masters[index])
                    return true;
            }
            return false;
        }
        destructor() {
            if (!this.abort())
                return;
            if ($mol_atom2.logs)
                this.$.$mol_log3_rise({
                    place: this,
                    message: 'Destructed'
                });
            this.cursor = -3;
            for (let index = 0; index < this.masters.length; index += 2) {
                this.complete_master(index);
            }
        }
    }
    $.$mol_atom2 = $mol_atom2;
})($ || ($ = {}));
//atom2.js.map
;
"use strict";
//param.js.map
;
"use strict";
//result.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_mem_force extends Object {
        constructor() { super(); }
        $mol_mem_force = true;
        static $mol_mem_force = true;
        static toString() { return this.name; }
    }
    $.$mol_mem_force = $mol_mem_force;
    class $mol_mem_force_cache extends $mol_mem_force {
    }
    $.$mol_mem_force_cache = $mol_mem_force_cache;
    class $mol_mem_force_update extends $mol_mem_force {
    }
    $.$mol_mem_force_update = $mol_mem_force_update;
    class $mol_mem_force_fail extends $mol_mem_force_cache {
    }
    $.$mol_mem_force_fail = $mol_mem_force_fail;
})($ || ($ = {}));
//force.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_mem_cached = $.$mol_atom2_value;
    function $mol_mem_persist() {
        const atom = $.$mol_atom2.current;
        if (!atom)
            return;
        if (atom.hasOwnProperty('destructor'))
            return;
        atom.destructor = () => { };
    }
    $.$mol_mem_persist = $mol_mem_persist;
    function $mol_mem(proto, name, descr) {
        if (!descr)
            descr = Reflect.getOwnPropertyDescriptor(proto, name);
        const orig = descr.value;
        const store = new WeakMap();
        Object.defineProperty(proto, name + "()", {
            get: function () {
                return store.get(this);
            }
        });
        const get_cache = (host) => {
            let cache = store.get(host);
            if (cache)
                return cache;
            let cache2 = new $.$mol_atom2;
            cache2.calculate = orig.bind(host);
            cache2[Symbol.toStringTag] = `${host}.${name}()`;
            cache2.abort = () => {
                store.delete(host);
                cache2.forget();
                return true;
            };
            $.$mol_owning_catch(host, cache2);
            cache2[$.$mol_object_field] = name;
            store.set(host, cache2);
            return cache2;
        };
        function value(next, force) {
            if (next === undefined) {
                const cache = get_cache(this);
                if (force === $.$mol_mem_force_cache)
                    return cache.obsolete(Number.NaN);
                if ($.$mol_atom2.current)
                    return cache.get();
                else
                    return $.$mol_fiber.run(() => cache.get());
            }
            return $.$mol_fiber.run(() => {
                if (force === $.$mol_mem_force_fail)
                    return get_cache(this).fail(next);
                if (force !== $.$mol_mem_force_cache)
                    next = orig.call(this, next);
                return get_cache(this).put(next);
            });
        }
        return {
            ...descr || {},
            value: Object.assign(value, { orig })
        };
    }
    $.$mol_mem = $mol_mem;
})($ || ($ = {}));
//mem.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_key(value) {
        if (!value)
            return JSON.stringify(value);
        if (typeof value !== 'object' && typeof value !== 'function')
            return JSON.stringify(value);
        if (Array.isArray(value))
            return JSON.stringify(value);
        if (Object.getPrototypeOf(Object.getPrototypeOf(value)) === null)
            return JSON.stringify(value);
        return value;
    }
    $.$mol_key = $mol_key;
})($ || ($ = {}));
//key.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_mem_key(proto, name, descr) {
        if (!descr)
            descr = Reflect.getOwnPropertyDescriptor(proto, name);
        const value = descr.value;
        const store = new WeakMap();
        Object.defineProperty(proto, name + "()", {
            get: function () {
                return store.get(this);
            }
        });
        const get_cache = (host, key) => {
            let dict = store.get(host);
            if (!dict)
                store.set(host, dict = new Map);
            const key_str = $.$mol_key(key);
            let cache = dict.get(key_str);
            if (cache)
                return cache;
            let cache2 = new $.$mol_atom2;
            cache2[Symbol.toStringTag] = `${host}.${name}(${key_str})`;
            cache2.calculate = value.bind(host, key);
            cache2.abort = () => {
                dict.delete(key_str);
                if (dict.size === 0)
                    store.delete(host);
                cache2.forget();
                return true;
            };
            $.$mol_owning_catch(host, cache2);
            cache2[$.$mol_object_field] = name;
            dict.set(key_str, cache2);
            return cache2;
        };
        return {
            value(key, next, force) {
                if (next === undefined) {
                    const cache = get_cache(this, key);
                    if (force === $.$mol_mem_force_cache)
                        return cache.obsolete();
                    if ($.$mol_atom2.current)
                        return cache.get();
                    else
                        return $.$mol_fiber.run(() => cache.get());
                }
                return $.$mol_fiber.run(() => {
                    if (force === $.$mol_mem_force_fail)
                        return get_cache(this, key).fail(next);
                    if (force !== $.$mol_mem_force_cache)
                        next = value.call(this, key, next);
                    return get_cache(this, key).put(next);
                });
            }
        };
    }
    $.$mol_mem_key = $mol_mem_key;
})($ || ($ = {}));
//key.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_atom2_autorun(calculate) {
        return $.$mol_atom2.create(atom => {
            atom.calculate = calculate;
            atom.obsolete_slaves = atom.schedule;
            atom.doubt_slaves = atom.schedule;
            if (Symbol.toStringTag in calculate) {
                atom[Symbol.toStringTag] = calculate[Symbol.toStringTag];
            }
            else {
                atom[Symbol.toStringTag] = calculate.name || '$mol_atom2_autorun';
            }
            atom.schedule();
        });
    }
    $.$mol_atom2_autorun = $mol_atom2_autorun;
})($ || ($ = {}));
//autorun.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_view_selection extends $.$mol_object {
        static focused(next) {
            if (next === undefined)
                return [];
            const parents = [];
            let element = next[0];
            while (element) {
                parents.push(element);
                element = element.parentNode;
            }
            $.$mol_fiber_defer(() => {
                const element = $.$mol_mem_cached(() => this.focused())[0];
                if (element)
                    element.focus();
                else
                    $.$mol_dom_context.blur();
            });
            return parents;
        }
        static focus(event) {
            this.focused([event.target]);
        }
        static blur(event) {
            const elements = $.$mol_mem_cached(() => this.focused());
            if (elements && elements[0] === event.target)
                this.focused([]);
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_view_selection, "focused", null);
    $.$mol_view_selection = $mol_view_selection;
})($ || ($ = {}));
//selection.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_dom_qname(name) {
        return name.replace(/\W/g, '').replace(/^(?=\d+)/, '_');
    }
    $.$mol_dom_qname = $mol_dom_qname;
})($ || ($ = {}));
//qname.js.map
;
"use strict";
var $;
(function ($) {
    const cacthed = new WeakMap();
    function $mol_fail_catch(error) {
        if (cacthed.get(error))
            return false;
        cacthed.set(error, true);
        return true;
    }
    $.$mol_fail_catch = $mol_fail_catch;
})($ || ($ = {}));
//catch.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_const(value) {
        var getter = (() => value);
        getter['()'] = value;
        getter[Symbol.toStringTag] = value;
        return getter;
    }
    $.$mol_const = $mol_const;
})($ || ($ = {}));
//const.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_dom_render_attributes(el, attrs) {
        for (let name in attrs) {
            let val = attrs[name];
            if (val === null || val === false) {
                if (!el.hasAttribute(name))
                    continue;
                el.removeAttribute(name);
            }
            else {
                const str = String(val);
                if (el.getAttribute(name) === str)
                    continue;
                el.setAttribute(name, str);
            }
        }
    }
    $.$mol_dom_render_attributes = $mol_dom_render_attributes;
})($ || ($ = {}));
//attributes.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_dom_render_styles(el, styles) {
        for (let name in styles) {
            let val = styles[name];
            const style = el.style;
            if (typeof val === 'number') {
                style[name] = `${val}px`;
            }
            else {
                style[name] = val;
            }
        }
    }
    $.$mol_dom_render_styles = $mol_dom_render_styles;
})($ || ($ = {}));
//styles.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_dom_render_children(el, childNodes) {
        const node_set = new Set(childNodes);
        let nextNode = el.firstChild;
        for (let view of childNodes) {
            if (view == null)
                continue;
            if (view instanceof $.$mol_dom_context.Node) {
                while (true) {
                    if (!nextNode) {
                        el.appendChild(view);
                        break;
                    }
                    if (nextNode == view) {
                        nextNode = nextNode.nextSibling;
                        break;
                    }
                    else {
                        if (node_set.has(nextNode)) {
                            el.insertBefore(view, nextNode);
                            break;
                        }
                        else {
                            const nn = nextNode.nextSibling;
                            el.removeChild(nextNode);
                            nextNode = nn;
                        }
                    }
                }
            }
            else {
                if (nextNode && nextNode.nodeName === '#text') {
                    const str = String(view);
                    if (nextNode.nodeValue !== str)
                        nextNode.nodeValue = str;
                    nextNode = nextNode.nextSibling;
                }
                else {
                    const textNode = $.$mol_dom_context.document.createTextNode(String(view));
                    el.insertBefore(textNode, nextNode);
                }
            }
        }
        while (nextNode) {
            const currNode = nextNode;
            nextNode = currNode.nextSibling;
            el.removeChild(currNode);
        }
    }
    $.$mol_dom_render_children = $mol_dom_render_children;
})($ || ($ = {}));
//children.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_dom_render_fields(el, fields) {
        for (let key in fields) {
            const val = fields[key];
            if (val === undefined)
                continue;
            el[key] = val;
        }
    }
    $.$mol_dom_render_fields = $mol_dom_render_fields;
})($ || ($ = {}));
//fields.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_memo extends $.$mol_wrapper {
        static wrap(task) {
            const store = new WeakMap();
            return function (next) {
                if (next === undefined && store.has(this))
                    return store.get(this);
                const val = task.call(this, next) ?? next;
                store.set(this, val);
                return val;
            };
        }
    }
    $.$mol_memo = $mol_memo;
})($ || ($ = {}));
//memo.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_func_name(func) {
        let name = func.name;
        if (name?.length > 1)
            return name;
        for (let key in this) {
            try {
                if (this[key] !== func)
                    continue;
                name = key;
                Object.defineProperty(func, 'name', { value: name });
                break;
            }
            catch { }
        }
        return name;
    }
    $.$mol_func_name = $mol_func_name;
    function $mol_func_name_from(target, source) {
        Object.defineProperty(target, 'name', { value: source.name });
        return target;
    }
    $.$mol_func_name_from = $mol_func_name_from;
})($ || ($ = {}));
//name.js.map
;
"use strict";
//extract.js.map
;
"use strict";
//pick.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/view/view/view.css", "[mol_view] {\n\ttransition-property: height, width, min-height, min-width, max-width, max-height, transform;\n\ttransition-duration: .2s;\n\ttransition-timing-function: ease-out;\n\t-webkit-appearance: none;\n\tword-break: break-word;\n\tbox-sizing: border-box;\n\tdisplay: flex;\n\tflex-shrink: 0;\n\tmax-width: 100%;\n\tcontain: style;\n\ttab-size: 4;\n}\n\n[mol_view]::selection {\n\tbackground: var(--mol_theme_current);\n}\n\n[mol_view] > * {\n\tword-break: inherit;\n}\n\n[mol_view_root] {\n\tmargin: 0;\n\tpadding: 0;\n\twidth: 100%;\n\theight: 100%;\n\tbox-sizing: border-box;\n\tfont: var(--mol_skin_font);\n\tbackground: var(--mol_theme_back);\n\tcolor: var(--mol_theme_text);\n}\n\n[mol_view][mol_view_error]:not([mol_view_error=\"Promise\"]) {\n\tbackground-image: repeating-linear-gradient(\n\t\t135deg,\n\t\thsl(0, 30%, 60%),\n\t\thsl(0, 30%, 60%) 11px,\n\t\thsl(60, 100%, 90%) 10px,\n\t\thsl(60, 100%, 90%) 20px\n\t);\n\tbackground-size: 28px 28px;\n\tcolor: black;\n}\n\n@keyframes mol_view_wait_move {\n\tfrom {\n\t\tbackground-position: 0 0;\n\t}\n\tto {\n\t\tbackground-position: 200vmax 0;\n\t}\n}\n\n@keyframes mol_view_wait_show {\n\tto {\n\t\tbackground-image: repeating-linear-gradient(\n\t\t\t45deg,\n\t\t\thsla( 0 , 0% , 50% , .25 ) 0% ,\n\t\t\thsla( 0 , 0% , 50% , 0 ) 5% ,\n\t\t\thsla( 0 , 0% , 50% , 0 ) 45% ,\n\t\t\thsla( 0 , 0% , 50% , .25 ) 50% ,\n\t\t\thsla( 0 , 0% , 50% , 0 ) 55% ,\n\t\t\thsla( 0 , 0% , 50% , 0 ) 95% ,\n\t\t\thsla( 0 , 0% , 50% , .25 ) 100%\n\t\t);\n\t\tbackground-size: 200vmax 200vmax;\n\t}\n}\n\n[mol_view][mol_view_error=\"Promise\"] {\n\tanimation: mol_view_wait_show .5s .5s linear forwards , mol_view_wait_move 1s linear infinite;\n\topacity: .75;\n}\n");
})($ || ($ = {}));
//view.css.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_view_visible_width() {
        return $.$mol_window.size().width;
    }
    $.$mol_view_visible_width = $mol_view_visible_width;
    function $mol_view_visible_height() {
        return $.$mol_window.size().height;
    }
    $.$mol_view_visible_height = $mol_view_visible_height;
    function $mol_view_state_key(suffix) {
        return suffix;
    }
    $.$mol_view_state_key = $mol_view_state_key;
    class $mol_view extends $.$mol_object {
        static Root(id) {
            return new this;
        }
        autorun() {
            return $.$mol_atom2_autorun(() => {
                this.dom_tree();
                document.title = this.title();
                return this;
            });
        }
        static autobind() {
            const nodes = $.$mol_dom_context.document.querySelectorAll('[mol_view_root]');
            for (let i = nodes.length - 1; i >= 0; --i) {
                const name = nodes.item(i).getAttribute('mol_view_root');
                const View = $[name];
                if (!View) {
                    console.error(`Can not attach view. Class not found: ${name}`);
                    continue;
                }
                const view = View.Root(i);
                view.dom_node(nodes.item(i));
                view.autorun();
            }
        }
        title() {
            return this.constructor.toString();
        }
        focused(next) {
            let node = this.dom_node();
            const value = $.$mol_view_selection.focused(next === undefined ? undefined : (next ? [node] : []));
            return value.indexOf(node) !== -1;
        }
        state_key(suffix = '') {
            return this.$.$mol_view_state_key(suffix);
        }
        dom_name() {
            return $.$mol_dom_qname(this.constructor.toString()) || 'div';
        }
        dom_name_space() { return 'http://www.w3.org/1999/xhtml'; }
        sub() {
            return [];
        }
        sub_visible() {
            return this.sub();
        }
        minimal_width() {
            const sub = this.sub();
            if (!sub)
                return 0;
            let min = 0;
            try {
                sub.forEach(view => {
                    if (view instanceof $mol_view) {
                        min = Math.max(min, view.minimal_width());
                    }
                });
            }
            catch (error) {
                if (error instanceof Promise) {
                    $.$mol_atom2.current.subscribe(error);
                }
                else if ($.$mol_fail_catch(error)) {
                    console.error(error);
                }
                return 24;
            }
            return min;
        }
        maximal_width() {
            return this.minimal_width();
        }
        minimal_height() {
            let min = 0;
            try {
                for (const view of this.sub() ?? []) {
                    if (view instanceof $mol_view) {
                        min = Math.max(min, view.minimal_height());
                    }
                }
            }
            catch (error) {
                if (error instanceof Promise) {
                    $.$mol_atom2.current.subscribe(error);
                }
                else if ($.$mol_fail_catch(error)) {
                    console.error(error);
                }
                return 24;
            }
            return min;
        }
        static watchers = new Set();
        view_rect() {
            if ($.$mol_atom2.current)
                this.view_rect_watcher();
            return this.view_rect_cache();
        }
        view_rect_cache(next = null) {
            return next;
        }
        view_rect_watcher() {
            $mol_view.watchers.add(this);
            return { destructor: () => $mol_view.watchers.delete(this) };
        }
        dom_id() {
            return this.toString();
        }
        dom_node(next) {
            const node = next || $.$mol_dom_context.document.createElementNS(this.dom_name_space(), this.dom_name());
            const id = this.dom_id();
            node.setAttribute('id', id);
            node.toString = $.$mol_const('<#' + id + '>');
            $.$mol_dom_render_attributes(node, this.attr_static());
            const events = this.event();
            for (let event_name in events) {
                node.addEventListener(event_name, $.$mol_fiber_root(events[event_name]), { passive: false });
            }
            return node;
        }
        dom_tree(next) {
            const node = this.dom_node(next);
            try {
                $.$mol_dom_render_attributes(node, { mol_view_error: null });
                try {
                    this.render();
                }
                finally {
                    for (let plugin of this.plugins()) {
                        if (plugin instanceof $.$mol_plugin) {
                            plugin.dom_tree();
                        }
                    }
                }
            }
            catch (error) {
                $.$mol_dom_render_attributes(node, { mol_view_error: error.name || error.constructor.name });
                if (error instanceof Promise) {
                    $.$mol_atom2.current.subscribe(error);
                    return node;
                }
                if ($.$mol_fail_catch(error)) {
                    try {
                        void (node.innerText = error.message);
                    }
                    catch (e) { }
                    console.error(error);
                }
            }
            this.auto();
            return node;
        }
        dom_node_actual() {
            const node = this.dom_node();
            $.$mol_dom_render_styles(node, {
                minHeight: this.minimal_height(),
                minWidth: this.minimal_width(),
            });
            const attr = this.attr();
            const style = this.style();
            const fields = this.field();
            $.$mol_dom_render_attributes(node, attr);
            $.$mol_dom_render_styles(node, style);
            return node;
        }
        auto() { }
        render() {
            const node = this.dom_node_actual();
            const sub = this.sub_visible();
            if (!sub)
                return;
            const nodes = sub.map(child => {
                if (child == null)
                    return null;
                return (child instanceof $mol_view)
                    ? child.dom_node()
                    : child instanceof $.$mol_dom_context.Node
                        ? child
                        : String(child);
            });
            $.$mol_dom_render_children(node, nodes);
            for (const el of sub)
                if (el && typeof el === 'object' && 'dom_tree' in el)
                    el['dom_tree']();
            $.$mol_dom_render_fields(node, this.field());
        }
        static view_classes() {
            const proto = this.prototype;
            let current = proto;
            const classes = [];
            while (current) {
                classes.push(current.constructor);
                if (!(current instanceof $mol_view))
                    break;
                current = Object.getPrototypeOf(current);
            }
            return classes;
        }
        view_names_owned() {
            const names = [];
            let owner = $.$mol_owning_get(this, $mol_view);
            if (owner instanceof $mol_view) {
                const suffix = this[$.$mol_object_field];
                const suffix2 = '_' + suffix[0].toLowerCase() + suffix.substring(1);
                for (let Class of owner.constructor.view_classes()) {
                    if (suffix in Class.prototype)
                        names.push(this.$.$mol_func_name(Class) + suffix2);
                    else
                        break;
                }
                for (let prefix of owner.view_names_owned()) {
                    names.push(prefix + suffix2);
                }
            }
            return names;
        }
        view_names() {
            const names = [];
            for (let name of this.view_names_owned()) {
                if (names.indexOf(name) < 0)
                    names.push(name);
            }
            for (let Class of this.constructor.view_classes()) {
                const name = this.$.$mol_func_name(Class);
                if (!name)
                    continue;
                if (names.indexOf(name) < 0)
                    names.push(name);
            }
            return names;
        }
        attr_static() {
            let attrs = {};
            for (let name of this.view_names())
                attrs[name.replace(/\$/g, '').replace(/^(?=\d)/, '_').toLowerCase()] = '';
            return attrs;
        }
        attr() {
            return {};
        }
        style() {
            return {};
        }
        field() {
            return {};
        }
        event() {
            return {};
        }
        event_async() {
            return {};
        }
        plugins() {
            return [];
        }
        [$.$mol_dev_format_head]() {
            return $.$mol_dev_format_span({}, $.$mol_dev_format_native(this), $.$mol_dev_format_shade('/'), $.$mol_dev_format_auto($.$mol_mem_cached(() => this.sub())));
        }
        *view_find(check, path = []) {
            if (check(this))
                return yield [...path, this];
            for (const item of this.sub()) {
                if (item instanceof $mol_view) {
                    yield* item.view_find(check, [...path, this]);
                }
            }
        }
        force_render(path) {
            const kids = this.sub();
            const index = kids.findIndex(item => {
                if (item instanceof $mol_view) {
                    return path.has(item);
                }
                else {
                    return false;
                }
            });
            if (index >= 0) {
                kids[index].force_render(path);
            }
        }
        async ensure_visible(view, align = "start") {
            const path = this.view_find(v => v === view).next().value;
            this.force_render(new Set(path));
            await $.$mol_fiber_warp();
            view.dom_node().scrollIntoView({ block: align });
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_view.prototype, "autorun", null);
    __decorate([
        $.$mol_mem
    ], $mol_view.prototype, "focused", null);
    __decorate([
        $.$mol_mem
    ], $mol_view.prototype, "minimal_width", null);
    __decorate([
        $.$mol_mem
    ], $mol_view.prototype, "minimal_height", null);
    __decorate([
        $.$mol_mem
    ], $mol_view.prototype, "view_rect", null);
    __decorate([
        $.$mol_mem
    ], $mol_view.prototype, "view_rect_cache", null);
    __decorate([
        $.$mol_mem
    ], $mol_view.prototype, "view_rect_watcher", null);
    __decorate([
        $.$mol_mem
    ], $mol_view.prototype, "dom_node", null);
    __decorate([
        $.$mol_mem
    ], $mol_view.prototype, "dom_tree", null);
    __decorate([
        $.$mol_mem
    ], $mol_view.prototype, "dom_node_actual", null);
    __decorate([
        $.$mol_mem
    ], $mol_view.prototype, "view_names", null);
    __decorate([
        $.$mol_deprecated('Use $mol_view::event instead.')
    ], $mol_view.prototype, "event_async", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_view, "Root", null);
    __decorate([
        $.$mol_memo.method
    ], $mol_view, "view_classes", null);
    $.$mol_view = $mol_view;
})($ || ($ = {}));
//view.js.map
;
"use strict";
//error.js.map
;
"use strict";
//override.js.map
;
"use strict";
//properties.js.map
;
"use strict";
//class.js.map
;
"use strict";
//element.js.map
;
"use strict";
//guard.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_style_sheet(Component, config0) {
        let rules = [];
        const block = $.$mol_dom_qname($.$mol_ambient({}).$mol_func_name(Component));
        const kebab = (name) => name.replace(/[A-Z]/g, letter => '-' + letter.toLowerCase());
        const make_class = (prefix, path, config) => {
            const props = [];
            const selector = (prefix, path) => {
                if (path.length === 0)
                    return prefix || `[${block}]`;
                return `${prefix ? prefix + ' ' : ''}[${block}_${path.join('_')}]`;
            };
            for (const key of Object.keys(config).reverse()) {
                if (/^[a-z]/.test(key)) {
                    const addProp = (keys, val) => {
                        if (Array.isArray(val)) {
                            if (val[0] && [Array, Object].includes(val[0].constructor)) {
                                val = val.map(v => {
                                    return Object.entries(v).map(([n, a]) => {
                                        if (a === true)
                                            return kebab(n);
                                        if (a === false)
                                            return null;
                                        return String(a);
                                    }).filter(Boolean).join(' ');
                                }).join(',');
                            }
                            else {
                                val = val.join(' ');
                            }
                            props.push(`\t${keys.join('-')}: ${val};\n`);
                        }
                        else if (val.constructor === Object) {
                            for (let suffix in val) {
                                addProp([...keys, kebab(suffix)], val[suffix]);
                            }
                        }
                        else {
                            props.push(`\t${keys.join('-')}: ${val};\n`);
                        }
                    };
                    addProp([kebab(key)], config[key]);
                }
                else if (/^[A-Z]/.test(key)) {
                    make_class(prefix, [...path, key.toLowerCase()], config[key]);
                }
                else if (key[0] === '$') {
                    make_class(selector(prefix, path) + ' [' + $.$mol_dom_qname(key) + ']', [], config[key]);
                }
                else if (key === '>') {
                    const types = config[key];
                    for (let type in types) {
                        make_class(selector(prefix, path) + ' > [' + $.$mol_dom_qname(type) + ']', [], types[type]);
                    }
                }
                else if (key === '@') {
                    const attrs = config[key];
                    for (let name in attrs) {
                        for (let val in attrs[name]) {
                            make_class(selector(prefix, path) + '[' + name + '=' + JSON.stringify(val) + ']', [], attrs[name][val]);
                        }
                    }
                }
                else if (key === '@media') {
                    const media = config[key];
                    for (let query in media) {
                        rules.push('}\n');
                        make_class(prefix, path, media[query]);
                        rules.push(`${key} ${query} {\n`);
                    }
                }
                else {
                    make_class(selector(prefix, path) + key, [], config[key]);
                }
            }
            if (props.length) {
                rules.push(`${selector(prefix, path)} {\n${props.reverse().join('')}}\n`);
            }
        };
        make_class('', [], config0);
        return rules.reverse().join('');
    }
    $.$mol_style_sheet = $mol_style_sheet;
})($ || ($ = {}));
//sheet.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_style_define(Component, config) {
        return $.$mol_style_attach(Component.name, $.$mol_style_sheet(Component, config));
    }
    $.$mol_style_define = $mol_style_define;
})($ || ($ = {}));
//define.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/gap/gap.css", ":root {\n\t--mol_gap_block: .75rem;\n\t--mol_gap_text: .5rem .75rem;\n\t--mol_gap_round: .25rem;\n}\n");
})($ || ($ = {}));
//gap.css.js.map
;
"use strict";
var $;
(function ($) {
    const { vary } = $.$mol_style_func;
    $.$mol_gap = {
        block: vary('--mol_gap_block'),
        text: vary('--mol_gap_text'),
        round: vary('--mol_gap_round'),
    };
})($ || ($ = {}));
//gap.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_scroll extends $.$mol_view {
        minimal_height() {
            return 0;
        }
        _event_scroll_timer(val) {
            if (val !== undefined)
                return val;
            return null;
        }
        field() {
            return {
                ...super.field(),
                scrollTop: this.scroll_top(),
                scrollLeft: this.scroll_left(),
                tabIndex: this.tabindex()
            };
        }
        event() {
            return {
                ...super.event(),
                scroll: (event) => this.event_scroll(event)
            };
        }
        scroll_top(val) {
            if (val !== undefined)
                return val;
            return 0;
        }
        scroll_left(val) {
            if (val !== undefined)
                return val;
            return 0;
        }
        tabindex() {
            return -1;
        }
        event_scroll(event) {
            if (event !== undefined)
                return event;
            return null;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_scroll.prototype, "_event_scroll_timer", null);
    __decorate([
        $.$mol_mem
    ], $mol_scroll.prototype, "scroll_top", null);
    __decorate([
        $.$mol_mem
    ], $mol_scroll.prototype, "scroll_left", null);
    __decorate([
        $.$mol_mem
    ], $mol_scroll.prototype, "event_scroll", null);
    $.$mol_scroll = $mol_scroll;
})($ || ($ = {}));
//scroll.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_state_session extends $.$mol_object {
        static 'native()';
        static native() {
            if (this['native()'])
                return this['native()'];
            check: try {
                const native = $.$mol_dom_context.sessionStorage;
                if (!native)
                    break check;
                native.setItem('', '');
                native.removeItem('');
                return this['native()'] = native;
            }
            catch (error) {
                console.warn(error);
            }
            return this['native()'] = {
                getItem(key) {
                    return this[':' + key];
                },
                setItem(key, value) {
                    this[':' + key] = value;
                },
                removeItem(key) {
                    this[':' + key] = void 0;
                }
            };
        }
        static value(key, next) {
            if (next === void 0)
                return JSON.parse(this.native().getItem(key) || 'null');
            if (next === null)
                this.native().removeItem(key);
            else
                this.native().setItem(key, JSON.stringify(next));
            return next;
        }
        prefix() { return ''; }
        value(key, next) {
            return $mol_state_session.value(this.prefix() + '.' + key, next);
        }
    }
    __decorate([
        $.$mol_mem_key
    ], $mol_state_session, "value", null);
    $.$mol_state_session = $mol_state_session;
})($ || ($ = {}));
//session.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_dom_listener extends $.$mol_object {
        _node;
        _event;
        _handler;
        _config;
        constructor(_node, _event, _handler, _config = { passive: true }) {
            super();
            this._node = _node;
            this._event = _event;
            this._handler = _handler;
            this._config = _config;
            this._node.addEventListener(this._event, this._handler, this._config);
        }
        destructor() {
            this._node.removeEventListener(this._event, this._handler, this._config);
            super.destructor();
        }
    }
    $.$mol_dom_listener = $mol_dom_listener;
})($ || ($ = {}));
//listener.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_print extends $.$mol_object {
        static before() {
            return new $.$mol_dom_listener(this.$.$mol_dom_context, 'beforeprint', () => {
                this.active(true);
            });
        }
        static after() {
            return new $.$mol_dom_listener(this.$.$mol_dom_context, 'afterprint', () => {
                this.active(false);
            });
        }
        static active(next) {
            this.before();
            this.after();
            return next || false;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_print, "before", null);
    __decorate([
        $.$mol_mem
    ], $mol_print, "after", null);
    __decorate([
        $.$mol_mem
    ], $mol_print, "active", null);
    $.$mol_print = $mol_print;
})($ || ($ = {}));
//print.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        const { per, rem, px } = $.$mol_style_unit;
        $.$mol_style_define($$.$mol_scroll, {
            overflow: 'auto',
        });
        $.$mol_style_define($$.$mol_scroll, {
            display: 'flex',
            overflow: 'overlay',
            flex: {
                direction: 'column',
                grow: 1,
                shrink: 1,
                basis: 0,
            },
            outline: 'none',
            alignSelf: 'stretch',
            boxSizing: 'border-box',
            willChange: 'scroll-position',
            maxHeight: per(100),
            maxWidth: per(100),
            webkitOverflowScrolling: 'touch',
            contain: 'content',
            '>': {
                $mol_view: {
                    transform: 'translateZ(0)',
                },
            },
            scrollbar: {
                color: [$.$mol_theme.line, 'transparent'],
            },
            '::-webkit-scrollbar': {
                width: rem(.25),
                height: rem(.25),
            },
            '::-webkit-scrollbar-corner': {
                background: {
                    color: $.$mol_theme.line,
                },
            },
            '::-webkit-scrollbar-track': {
                background: {
                    color: 'transparent',
                },
            },
            '::-webkit-scrollbar-thumb': {
                background: {
                    color: $.$mol_theme.line,
                },
                border: {
                    radius: $.$mol_gap.round,
                },
            },
            '@media': {
                'print': {
                    overflow: 'visible',
                    contain: 'none',
                    maxHeight: 'unset',
                },
            },
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//scroll.view.css.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_scroll extends $.$mol_scroll {
            scroll_top(next) {
                return $.$mol_state_session.value(`${this}.scroll_top()`, next) || 0;
            }
            scroll_left(next) {
                return $.$mol_state_session.value(`${this}.scroll_left()`, next) || 0;
            }
            _event_scroll_timer(next) {
                return next;
            }
            event_scroll(next) {
                this._event_scroll_timer()?.destructor();
                const el = this.dom_node();
                this._event_scroll_timer(new $.$mol_after_timeout(200, $.$mol_fiber_solid.func(() => {
                    this.scroll_top(Math.max(0, el.scrollTop));
                    this.scroll_left(Math.max(0, el.scrollLeft));
                })));
            }
            minimal_height() {
                return this.$.$mol_print.active() ? null : 0;
            }
            minimal_width() {
                return this.$.$mol_print.active() ? null : 0;
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_scroll.prototype, "scroll_top", null);
        __decorate([
            $.$mol_mem
        ], $mol_scroll.prototype, "scroll_left", null);
        __decorate([
            $.$mol_memo.method
        ], $mol_scroll.prototype, "_event_scroll_timer", null);
        $$.$mol_scroll = $mol_scroll;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//scroll.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_book2 extends $.$mol_scroll {
        sub() {
            return this.pages();
        }
        minimal_width() {
            return 0;
        }
        Placeholder() {
            const obj = new this.$.$mol_view();
            return obj;
        }
        pages() {
            return [];
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_book2.prototype, "Placeholder", null);
    $.$mol_book2 = $mol_book2;
})($ || ($ = {}));
//book2.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/book2/book2.view.css", "[mol_book2] {\n\tdisplay: flex;\n\tflex-flow: row nowrap;\n\talign-items: stretch;\n\tflex: 1 1 auto;\n\talign-self: stretch;\n\tmargin: 0;\n\t/* box-shadow: 0 0 0 1px var(--mol_theme_line); */\n\t/* transform: translateZ(0); */\n\ttransition: none;\n\toverflow: overlay;\n\tscroll-snap-type: x proximity;\n}\n\n[mol_book2] > * {\n/* \tflex: none; */\n\tscroll-snap-stop: always;\n\tscroll-snap-align: end;\n\tposition: relative;\n\t/* z-index: 0; */\n\tmin-height: 100%;\n\tmax-height: 100%;\n\tmax-width: 100%;\n\tflex-shrink: 0;\n}\n\n[mol_book2] > [mol_book2] {\n\tdisplay: contents;\n}\n\n[mol_book2] > *:first-child {\n\tscroll-snap-align: start;\n}\n\n[mol_book2] > [mol_view] {\n\ttransform: none; /* prevent content clipping */\n}\n\n[mol_book2_placeholder] {\n\tflex: 1 1 0;\n\t/* background: var(--mol_theme_back); */\n}\n");
})($ || ($ = {}));
//book2.view.css.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_book2 extends $.$mol_book2 {
            title() {
                return this.pages().map(page => page?.title()).reverse().filter(Boolean).join(' | ');
            }
            sub() {
                const next = [...this.pages().slice(), this.Placeholder()];
                const prev = $.$mol_mem_cached(() => this.sub()) ?? [];
                for (let i = 1; i++;) {
                    const p = prev[prev.length - i];
                    const n = next[next.length - i];
                    if (!n)
                        break;
                    if (p === n)
                        continue;
                    new $.$mol_after_timeout(100, () => n.dom_node().scrollIntoView({ behavior: 'smooth' }));
                    break;
                }
                return next;
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_book2.prototype, "sub", null);
        $$.$mol_book2 = $mol_book2;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//book2.view.js.map
;
"use strict";
var $;
(function ($) {
    const TextEncoder = globalThis.TextEncoder ?? $node.util.TextEncoder;
    const encoder = new TextEncoder();
    function $mol_charset_encode(value) {
        return encoder.encode(value);
    }
    $.$mol_charset_encode = $mol_charset_encode;
})($ || ($ = {}));
//encode.js.map
;
"use strict";
var $;
(function ($) {
    const TextDecoder = globalThis.TextDecoder ?? $node.util.TextDecoder;
    function $mol_charset_decode(value, code = 'utf8') {
        return new TextDecoder(code).decode(value);
    }
    $.$mol_charset_decode = $mol_charset_decode;
})($ || ($ = {}));
//decode.js.map
;
"use strict";
var $;
(function ($) {
    const meta_size = 32;
    function $hyoo_crowd_chunk_pack(raw) {
        const data = $.$mol_charset_encode(JSON.stringify(raw.data));
        const pack = new Uint8Array(meta_size + data.length + (4 - data.length % 4));
        const pack2 = new Uint16Array(pack.buffer);
        const pack4 = new Uint32Array(pack.buffer);
        pack4[0] = raw.head;
        pack2[2] = raw.head / 2 ** 32;
        pack2[3] = raw.self;
        pack4[2] = raw.self / 2 ** 16;
        pack4[3] = raw.lead;
        pack2[8] = raw.lead / 2 ** 32;
        pack2[9] = raw.seat;
        pack4[5] = raw.peer;
        pack2[12] = raw.peer / 2 ** 32;
        pack2[13] = data.length;
        pack4[7] = raw.time;
        pack.set(data, 32);
        return pack;
    }
    $.$hyoo_crowd_chunk_pack = $hyoo_crowd_chunk_pack;
    function $hyoo_crowd_chunk_unpack(pack) {
        const pack2 = new Uint16Array(pack.buffer, pack.byteOffset, pack.byteLength / 2);
        const pack4 = new Uint32Array(pack.buffer, pack.byteOffset, pack.byteLength / 4);
        const chunk = {
            head: pack4[0] + pack2[2] * 2 ** 32,
            self: pack2[3] + pack4[2] * 2 ** 16,
            lead: pack4[3] + pack2[8] * 2 ** 32,
            seat: pack2[9],
            peer: pack4[5] + pack2[12] * 2 ** 32,
            time: pack4[7],
            data: JSON.parse($.$mol_charset_decode(new Uint8Array(pack.buffer, pack.byteOffset + meta_size, pack2[13]))),
        };
        return chunk;
    }
    $.$hyoo_crowd_chunk_unpack = $hyoo_crowd_chunk_unpack;
    function $hyoo_crowd_chunk_compare(left, right) {
        if (left.time > right.time)
            return 1;
        if (left.time < right.time)
            return -1;
        return left.peer - right.peer;
    }
    $.$hyoo_crowd_chunk_compare = $hyoo_crowd_chunk_compare;
})($ || ($ = {}));
//chunk.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_db_response(request) {
        return new Promise((done, fail) => {
            request.onerror = () => fail(new Error(request.error.message));
            request.onsuccess = () => done(request.result);
        });
    }
    $.$mol_db_response = $mol_db_response;
})($ || ($ = {}));
//response.js.map
;
"use strict";
var $;
(function ($) {
    async function $mol_db(name, ...migrations) {
        const request = this.$mol_dom_context.indexedDB.open(name, migrations.length ? migrations.length + 1 : undefined);
        request.onupgradeneeded = event => {
            migrations.splice(0, event.oldVersion - 1);
            const transaction = new $.$mol_db_transaction(request.transaction);
            for (const migrate of migrations)
                migrate(transaction);
        };
        const db = await $.$mol_db_response(request);
        return new $.$mol_db_database(db);
    }
    $.$mol_db = $mol_db;
})($ || ($ = {}));
//db.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_db_store {
        native;
        constructor(native) {
            this.native = native;
        }
        get name() {
            return this.native.name;
        }
        get path() {
            return this.native.keyPath;
        }
        get incremental() {
            return this.native.autoIncrement;
        }
        get indexes() {
            return new Proxy({}, {
                ownKeys: () => [...this.native.indexNames],
                has: (_, name) => this.native.indexNames.contains(name),
                get: (_, name) => new $.$mol_db_index(this.native.index(name))
            });
        }
        index_make(name, path = [], unique = false, multiEntry = false) {
            return this.native.createIndex(name, path, { multiEntry, unique });
        }
        index_drop(name) {
            this.native.deleteIndex(name);
            return this;
        }
        get transaction() {
            return new $.$mol_db_transaction(this.native.transaction);
        }
        get db() {
            return this.transaction.db;
        }
        clear() {
            return $.$mol_db_response(this.native.clear());
        }
        count(keys) {
            return $.$mol_db_response(this.native.count(keys));
        }
        put(doc, key) {
            return $.$mol_db_response(this.native.put(doc, key));
        }
        get(key) {
            return $.$mol_db_response(this.native.get(key));
        }
        select(key, count) {
            return $.$mol_db_response(this.native.getAll(key, count));
        }
        drop(keys) {
            return $.$mol_db_response(this.native.delete(keys));
        }
    }
    $.$mol_db_store = $mol_db_store;
})($ || ($ = {}));
//store.js.map
;
"use strict";
//store_schema.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_dom_context.indexedDB = $node['fake-indexeddb'];
})($ || ($ = {}));
//db.node.js.map
;
"use strict";
//db_schema.js.map
;
"use strict";
var $;
(function ($) {
    class $hyoo_crowd_clock extends Map {
        now = 0;
        constructor(entries) {
            super(entries);
            if (entries) {
                for (const [peer, time] of entries) {
                    if (this.now < time)
                        this.now = time;
                }
            }
        }
        see(peer, time) {
            if (this.now < time)
                this.now = time;
            const peer_version = this.get(peer);
            if (!peer_version || peer_version < time) {
                this.set(peer, time);
            }
            return time;
        }
        fresh(peer, time) {
            return time > (this.get(peer) ?? 0);
        }
        ahead(clock) {
            for (const [peer, time] of this.entries()) {
                if (clock.fresh(peer, time))
                    return true;
            }
            return false;
        }
        tick(peer) {
            return this.see(peer, this.now + 1);
        }
    }
    $.$hyoo_crowd_clock = $hyoo_crowd_clock;
})($ || ($ = {}));
//clock.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_hash_string(str, seed = 0) {
        let h1 = 0xdeadbeef ^ seed;
        let h2 = 0x41c6ce57 ^ seed;
        for (let i = 0; i < str.length; i++) {
            const ch = str.charCodeAt(i);
            h1 = Math.imul(h1 ^ ch, 2654435761);
            h2 = Math.imul(h2 ^ ch, 1597334677);
        }
        h1 = Math.imul(h1 ^ (h1 >>> 16), 2246822507) ^ Math.imul(h2 ^ (h2 >>> 13), 3266489909);
        h2 = Math.imul(h2 ^ (h2 >>> 16), 2246822507) ^ Math.imul(h1 ^ (h1 >>> 13), 3266489909);
        return 4294967296 * (((1 << 16) - 1) & h2) + (h1 >>> 0);
    }
    $.$mol_hash_string = $mol_hash_string;
})($ || ($ = {}));
//string.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_state_local extends $.$mol_object {
        static 'native()';
        static native() {
            if (this['native()'])
                return this['native()'];
            check: try {
                const native = $.$mol_dom_context.localStorage;
                if (!native)
                    break check;
                native.setItem('', '');
                native.removeItem('');
                return this['native()'] = native;
            }
            catch (error) {
                console.warn(error);
            }
            return this['native()'] = {
                getItem(key) {
                    return this[':' + key];
                },
                setItem(key, value) {
                    this[':' + key] = value;
                },
                removeItem(key) {
                    this[':' + key] = void 0;
                }
            };
        }
        static value(key, next, force) {
            if (next === void 0)
                return JSON.parse(this.native().getItem(key) || 'null');
            if (next === null)
                this.native().removeItem(key);
            else
                this.native().setItem(key, JSON.stringify(next));
            return next;
        }
        prefix() { return ''; }
        value(key, next) {
            return $mol_state_local.value(this.prefix() + '.' + key, next);
        }
    }
    __decorate([
        $.$mol_mem_key
    ], $mol_state_local, "value", null);
    $.$mol_state_local = $mol_state_local;
})($ || ($ = {}));
//local.js.map
;
"use strict";
var $;
(function ($) {
    const algorithm = {
        name: 'RSA-PSS',
        modulusLength: 256,
        publicExponent: new Uint8Array([1, 0, 1]),
        hash: 'SHA-1',
        saltLength: 8,
    };
    async function $mol_crypto_auditor_pair() {
        const pair = await $.crypto.subtle.generateKey(algorithm, true, ['sign', 'verify']);
        return {
            public: new $mol_crypto_auditor_public(pair.publicKey),
            private: new $mol_crypto_auditor_private(pair.privateKey),
        };
    }
    $.$mol_crypto_auditor_pair = $mol_crypto_auditor_pair;
    class $mol_crypto_auditor_public extends Object {
        native;
        static size = 62;
        constructor(native) {
            super();
            this.native = native;
        }
        static async from(serial) {
            return new this(await crypto.subtle.importKey('spki', serial, algorithm, true, ['verify']));
        }
        async serial() {
            return await crypto.subtle.exportKey('spki', this.native);
        }
        async verify(data, sign) {
            return await crypto.subtle.verify(algorithm, this.native, sign, data);
        }
    }
    $.$mol_crypto_auditor_public = $mol_crypto_auditor_public;
    class $mol_crypto_auditor_private extends Object {
        native;
        constructor(native) {
            super();
            this.native = native;
        }
        static async from(serial) {
            return new this(await crypto.subtle.importKey('pkcs8', serial, algorithm, true, ['sign']));
        }
        async serial() {
            return await crypto.subtle.exportKey('pkcs8', this.native);
        }
        async sign(data) {
            return await crypto.subtle.sign(algorithm, this.native, data);
        }
    }
    $.$mol_crypto_auditor_private = $mol_crypto_auditor_private;
    $.$mol_crypto_auditor_sign_size = 32;
})($ || ($ = {}));
//auditor.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_base64_encode(src) {
        throw new Error('Not implemented');
    }
    $.$mol_base64_encode = $mol_base64_encode;
})($ || ($ = {}));
//encode.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_base64_encode_node(str) {
        if (!str)
            return '';
        if (Buffer.isBuffer(str))
            return str.toString('base64');
        return Buffer.from(str).toString('base64');
    }
    $.$mol_base64_encode_node = $mol_base64_encode_node;
    $.$mol_base64_encode = $mol_base64_encode_node;
})($ || ($ = {}));
//encode.node.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_base64_decode(base64) {
        throw new Error('Not implemented');
    }
    $.$mol_base64_decode = $mol_base64_decode;
})($ || ($ = {}));
//decode.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_base64_decode_node(base64Str) {
        const buffer = Buffer.from(base64Str, 'base64');
        return new Uint8Array(buffer.buffer, buffer.byteOffset, buffer.byteLength);
    }
    $.$mol_base64_decode_node = $mol_base64_decode_node;
    $.$mol_base64_decode = $mol_base64_decode_node;
})($ || ($ = {}));
//decode.node.js.map
;
"use strict";
//deep.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_jsx_prefix = '';
    $.$mol_jsx_booked = null;
    $.$mol_jsx_document = {
        getElementById: () => null,
        createElementNS: (space, name) => $.$mol_dom_context.document.createElementNS(space, name),
        createDocumentFragment: () => $.$mol_dom_context.document.createDocumentFragment(),
    };
    $.$mol_jsx_frag = '';
    function $mol_jsx(Elem, props, ...childNodes) {
        const id = props && props.id || '';
        if (Elem && $.$mol_jsx_booked) {
            if ($.$mol_jsx_booked.has(id)) {
                $.$mol_fail(new Error(`JSX already has tag with id ${JSON.stringify(id)}`));
            }
            else {
                $.$mol_jsx_booked.add(id);
            }
        }
        const guid = $.$mol_jsx_prefix + id;
        let node = guid ? $.$mol_jsx_document.getElementById(guid) : null;
        if (typeof Elem !== 'string') {
            if ('prototype' in Elem) {
                const view = node && node[Elem] || new Elem;
                Object.assign(view, props);
                view[Symbol.toStringTag] = guid;
                view.childNodes = childNodes;
                if (!view.ownerDocument)
                    view.ownerDocument = $.$mol_jsx_document;
                node = view.valueOf();
                node[Elem] = view;
                return node;
            }
            else {
                const prefix = $.$mol_jsx_prefix;
                const booked = $.$mol_jsx_booked;
                try {
                    $.$mol_jsx_prefix = guid;
                    $.$mol_jsx_booked = new Set;
                    return Elem(props, ...childNodes);
                }
                finally {
                    $.$mol_jsx_prefix = prefix;
                    $.$mol_jsx_booked = booked;
                }
            }
        }
        if (!node) {
            node = Elem
                ? $.$mol_jsx_document.createElementNS(props?.xmlns ?? 'http://www.w3.org/1999/xhtml', Elem)
                : $.$mol_jsx_document.createDocumentFragment();
        }
        $.$mol_dom_render_children(node, [].concat(...childNodes));
        if (!Elem)
            return node;
        for (const key in props) {
            if (typeof props[key] === 'string') {
                ;
                node.setAttribute(key, props[key]);
            }
            else if (props[key] &&
                typeof props[key] === 'object' &&
                Reflect.getPrototypeOf(props[key]) === Reflect.getPrototypeOf({})) {
                if (typeof node[key] === 'object') {
                    Object.assign(node[key], props[key]);
                    continue;
                }
            }
            else {
                node[key] = props[key];
            }
        }
        if (guid)
            node.id = guid;
        return node;
    }
    $.$mol_jsx = $mol_jsx;
})($ || ($ = {}));
//jsx.js.map
;
"use strict";
var $;
(function ($) {
    class $hyoo_crowd_node {
        doc;
        head;
        constructor(doc, head) {
            this.doc = doc;
            this.head = head;
        }
        static for(doc, head = 0) {
            return new this(doc, head);
        }
        as(Node) {
            return new Node(this.doc, this.head);
        }
        chunks() {
            return this.doc.chunk_alive(this.head);
        }
        nodes(Node) {
            return this.chunks().map(chunk => new Node(this.doc, chunk.self));
        }
        [$.$mol_dev_format_head]() {
            return $.$mol_dev_format_span({}, $.$mol_dev_format_native(this), $.$mol_dev_format_shade('/'), $.$mol_dev_format_auto(this.as($.$hyoo_crowd_list).list()), $.$mol_dev_format_shade('/'), $.$mol_dev_format_auto(this.nodes($hyoo_crowd_node)));
        }
    }
    $.$hyoo_crowd_node = $hyoo_crowd_node;
})($ || ($ = {}));
//node.js.map
;
"use strict";
var $;
(function ($) {
    class $hyoo_crowd_struct extends $.$hyoo_crowd_node {
        sub(key, Node) {
            return new Node(this.doc, $.$mol_hash_string(key, this.head));
        }
    }
    $.$hyoo_crowd_struct = $hyoo_crowd_struct;
})($ || ($ = {}));
//struct.js.map
;
"use strict";
var $;
(function ($) {
    class $hyoo_crowd_doc {
        peer;
        constructor(peer = 0) {
            this.peer = peer;
            if (!peer)
                this.peer = this.id_new();
        }
        clock = new $.$hyoo_crowd_clock;
        _chunk_all = new Map();
        _chunk_lists = new Map();
        _chunk_alive = new Map();
        size() {
            return this._chunk_all.size;
        }
        chunk(head, self) {
            return this._chunk_all.get(`${head}/${self}`) ?? null;
        }
        chunk_list(head) {
            let chunks = this._chunk_lists.get(head);
            if (!chunks)
                this._chunk_lists.set(head, chunks = Object.assign([], { dirty: false }));
            return chunks;
        }
        chunk_alive(head) {
            let chunks = this._chunk_alive.get(head);
            if (!chunks) {
                const all = this.chunk_list(head);
                if (all.dirty)
                    this.resort(head);
                chunks = all.filter(chunk => chunk.data !== null);
                this._chunk_alive.set(head, chunks);
            }
            return chunks;
        }
        root = new $.$hyoo_crowd_struct(this, 0);
        id_new() {
            return 1 + Math.floor(Math.random() * (2 ** (6 * 8) - 2));
        }
        fork(peer) {
            return new $hyoo_crowd_doc(peer).apply(this.delta());
        }
        delta(clock = new $.$hyoo_crowd_clock) {
            const delta = [];
            for (const chunk of this._chunk_all.values()) {
                const time = clock.get(chunk.peer);
                if (time && chunk.time <= time)
                    continue;
                delta.push(chunk);
            }
            delta.sort($.$hyoo_crowd_chunk_compare);
            return delta;
        }
        toJSON() {
            return this.delta();
        }
        resort(head) {
            const chunks = this._chunk_lists.get(head);
            const queue = chunks.splice(0).sort((left, right) => {
                if (left.seat > right.seat)
                    return +1;
                if (left.seat < right.seat)
                    return -1;
                return $.$hyoo_crowd_chunk_compare(left, right);
            });
            for (const kid of queue) {
                let leader = kid.lead ? this.chunk(head, kid.lead) : null;
                let index = leader ? chunks.indexOf(leader) + 1 : 0;
                if (index === 0 && leader)
                    index = chunks.length;
                if (index < kid.seat) {
                    index = chunks.length;
                }
                chunks.splice(index, 0, kid);
            }
            this._chunk_lists.set(head, chunks);
            chunks.dirty = false;
            return chunks;
        }
        apply(delta) {
            for (const next of delta) {
                this.clock.see(next.peer, next.time);
                const chunks = this.chunk_list(next.head);
                const guid = `${next.head}/${next.self}`;
                let prev = this._chunk_all.get(guid);
                if (prev) {
                    if ($.$hyoo_crowd_chunk_compare(prev, next) > 0)
                        continue;
                    chunks.splice(chunks.indexOf(prev), 1, next);
                }
                else {
                    chunks.push(next);
                }
                this._chunk_all.set(guid, next);
                chunks.dirty = true;
                this._chunk_alive.set(next.head, undefined);
            }
            return this;
        }
        put(head, self, lead, data) {
            let chunk_old = this.chunk(head, self);
            let chunk_lead = lead ? this.chunk(head, lead) : null;
            const chunk_list = this.chunk_list(head);
            if (chunk_old) {
                chunk_list.splice(chunk_list.indexOf(chunk_old), 1);
            }
            let seat = chunk_lead ? chunk_list.indexOf(chunk_lead) + 1 : 0;
            const chunk_new = {
                head,
                self,
                lead,
                seat,
                peer: this.peer,
                time: this.clock.tick(this.peer),
                data,
            };
            this._chunk_all.set(`${chunk_new.head}/${chunk_new.self}`, chunk_new);
            chunk_list.splice(seat, 0, chunk_new);
            this._chunk_alive.set(head, undefined);
            return chunk_new;
        }
        wipe(chunk) {
            if (chunk.data === null)
                return chunk;
            for (const kid of this.chunk_list(chunk.self)) {
                this.wipe(kid);
            }
            return this.put(chunk.head, chunk.self, chunk.lead, null);
        }
        move(chunk, head, lead) {
            this.wipe(chunk);
            return this.put(head, chunk.self, lead, chunk.data);
        }
        insert(chunk, head, seat) {
            const lead = seat ? this.chunk_list(head)[seat - 1].self : 0;
            return this.move(chunk, head, lead);
        }
    }
    $.$hyoo_crowd_doc = $hyoo_crowd_doc;
})($ || ($ = {}));
//doc.js.map
;
"use strict";
var $;
(function ($) {
    class $hyoo_crowd_reg extends $.$hyoo_crowd_node {
        value(next) {
            const chunks = this.chunks();
            let last;
            for (const chunk of chunks) {
                if (!last || $.$hyoo_crowd_chunk_compare(chunk, last) > 0)
                    last = chunk;
            }
            if (next === undefined) {
                return last?.data ?? null;
            }
            else {
                if (last?.data === next)
                    return next;
                for (const chunk of chunks) {
                    if (chunk === last)
                        continue;
                    this.doc.wipe(chunk);
                }
                this.doc.put(this.head, last?.self ?? this.doc.id_new(), 0, next);
                return next;
            }
        }
        str(next) {
            return String(this.value(next) ?? '');
        }
        numb(next) {
            return Number(this.value(next) ?? 0);
        }
        bool(next) {
            return Boolean(this.value(next) ?? false);
        }
    }
    $.$hyoo_crowd_reg = $hyoo_crowd_reg;
})($ || ($ = {}));
//reg.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_reconcile({ prev, from, to, next, equal, drop, insert, update, }) {
        let p = from;
        let n = 0;
        let lead = p ? prev[p - 1] : null;
        if (to > prev.length)
            $.$mol_fail(new RangeError(`To(${to}) greater then length(${prev.length})`));
        if (from > to)
            $.$mol_fail(new RangeError(`From(${to}) greater then to(${to})`));
        while (p < to || n < next.length) {
            if (p < to && n < next.length && equal(next[n], prev[p])) {
                lead = prev[p];
                ++p;
                ++n;
            }
            else if (next.length - n > to - p) {
                lead = insert(next[n], lead);
                ++n;
            }
            else if (next.length - n < to - p) {
                lead = drop(prev[p], lead);
                ++p;
            }
            else {
                lead = update(next[n], prev[p], lead);
                ++p;
                ++n;
            }
        }
    }
    $.$mol_reconcile = $mol_reconcile;
})($ || ($ = {}));
//reconcile.js.map
;
"use strict";
var $;
(function ($) {
    class $hyoo_crowd_list extends $.$hyoo_crowd_node {
        list(next) {
            const chunks = this.chunks();
            if (next === undefined) {
                return chunks.map(chunk => chunk.data);
            }
            else {
                this.insert(next, 0, chunks.length);
                return next;
            }
        }
        insert(next, from = this.chunks().length, to = from) {
            $.$mol_reconcile({
                prev: this.chunks(),
                from,
                to,
                next,
                equal: (next, prev) => prev.data === next,
                drop: (prev, lead) => this.doc.wipe(prev),
                insert: (next, lead) => this.doc.put(this.head, this.doc.id_new(), lead?.self ?? 0, next),
                update: (next, prev, lead) => this.doc.put(prev.head, prev.self, lead?.self ?? 0, next),
            });
        }
        move(from, to) {
            const chunks = this.chunks();
            const lead = to ? chunks[to - 1].self : 0;
            return this.doc.move(chunks[from], this.head, lead);
        }
        cut(seat) {
            return this.doc.wipe(this.chunks()[seat]);
        }
    }
    $.$hyoo_crowd_list = $hyoo_crowd_list;
})($ || ($ = {}));
//list.js.map
;
"use strict";
//equals.js.map
;
"use strict";
//merge.js.map
;
"use strict";
//intersect.js.map
;
"use strict";
//unicode.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_regexp extends RegExp {
        groups;
        constructor(source, flags = 'gsu', groups = []) {
            super(source, flags);
            this.groups = groups;
        }
        *[Symbol.matchAll](str) {
            const index = this.lastIndex;
            this.lastIndex = 0;
            try {
                while (this.lastIndex < str.length) {
                    const found = this.exec(str);
                    if (!found)
                        break;
                    yield found;
                }
            }
            finally {
                this.lastIndex = index;
            }
        }
        [Symbol.match](str) {
            const res = [...this[Symbol.matchAll](str)].filter(r => r.groups).map(r => r[0]);
            if (!res.length)
                return null;
            return res;
        }
        [Symbol.split](str) {
            const res = [];
            let token_last = null;
            for (let token of this[Symbol.matchAll](str)) {
                if (token.groups && (token_last ? token_last.groups : true))
                    res.push('');
                res.push(token[0]);
                token_last = token;
            }
            if (!res.length)
                res.push('');
            return res;
        }
        test(str) {
            return Boolean(str.match(this));
        }
        exec(str) {
            const from = this.lastIndex;
            if (from >= str.length)
                return null;
            const res = super.exec(str);
            if (res === null) {
                this.lastIndex = str.length;
                if (!str)
                    return null;
                return Object.assign([str.slice(from)], {
                    index: from,
                    input: str,
                });
            }
            if (from === this.lastIndex) {
                $.$mol_fail(new Error('Captured empty substring'));
            }
            const groups = {};
            const skipped = str.slice(from, this.lastIndex - res[0].length);
            if (skipped) {
                this.lastIndex = this.lastIndex - res[0].length;
                return Object.assign([skipped], {
                    index: from,
                    input: res.input,
                });
            }
            for (let i = 0; i < this.groups.length; ++i) {
                const group = this.groups[i];
                groups[group] = groups[group] || res[i + 1] || '';
            }
            return Object.assign(res, { groups });
        }
        generate(params) {
            return null;
        }
        static repeat(source, min = 0, max = Number.POSITIVE_INFINITY) {
            const regexp = $mol_regexp.from(source);
            const upper = Number.isFinite(max) ? max : '';
            const str = `(?:${regexp.source}){${min},${upper}}?`;
            const regexp2 = new $mol_regexp(str, regexp.flags, regexp.groups);
            regexp2.generate = params => {
                const res = regexp.generate(params);
                if (res)
                    return res;
                if (min > 0)
                    return res;
                return '';
            };
            return regexp2;
        }
        static repeat_greedy(source, min = 0, max = Number.POSITIVE_INFINITY) {
            const regexp = $mol_regexp.from(source);
            const upper = Number.isFinite(max) ? max : '';
            const str = `(?:${regexp.source}){${min},${upper}}`;
            const regexp2 = new $mol_regexp(str, regexp.flags, regexp.groups);
            regexp2.generate = params => {
                const res = regexp.generate(params);
                if (res)
                    return res;
                if (min > 0)
                    return res;
                return '';
            };
            return regexp2;
        }
        static optional(source) {
            return $mol_regexp.repeat_greedy(source, 0, 1);
        }
        static force_after(source) {
            const regexp = $mol_regexp.from(source);
            return new $mol_regexp(`(?=${regexp.source})`, regexp.flags, regexp.groups);
        }
        static forbid_after(source) {
            const regexp = $mol_regexp.from(source);
            return new $mol_regexp(`(?!${regexp.source})`, regexp.flags, regexp.groups);
        }
        static from(source, { ignoreCase, multiline } = {
            ignoreCase: false,
            multiline: false,
        }) {
            let flags = 'gsu';
            if (multiline)
                flags += 'm';
            if (ignoreCase)
                flags += 'i';
            if (typeof source === 'number') {
                const src = `\\u{${source.toString(16)}}`;
                const regexp = new $mol_regexp(src, flags);
                regexp.generate = () => src;
                return regexp;
            }
            if (typeof source === 'string') {
                const src = source.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
                const regexp = new $mol_regexp(src, flags);
                regexp.generate = () => source;
                return regexp;
            }
            else if (source instanceof $mol_regexp) {
                const regexp = new $mol_regexp(source.source, flags, source.groups);
                regexp.generate = params => source.generate(params);
                return regexp;
            }
            if (source instanceof RegExp) {
                const test = new RegExp('|' + source.source);
                const groups = Array.from({ length: test.exec('').length - 1 }, (_, i) => String(i + 1));
                const regexp = new $mol_regexp(source.source, source.flags, groups);
                regexp.generate = () => '';
                return regexp;
            }
            if (Array.isArray(source)) {
                const patterns = source.map(src => Array.isArray(src)
                    ? $mol_regexp.optional(src)
                    : $mol_regexp.from(src));
                const chunks = patterns.map(pattern => pattern.source);
                const groups = [];
                let index = 0;
                for (const pattern of patterns) {
                    for (let group of pattern.groups) {
                        if (Number(group) >= 0) {
                            groups.push(String(index++));
                        }
                        else {
                            groups.push(group);
                        }
                    }
                }
                const regexp = new $mol_regexp(chunks.join(''), flags, groups);
                regexp.generate = params => {
                    let res = '';
                    for (const pattern of patterns) {
                        let sub = pattern.generate(params);
                        if (sub === null)
                            return '';
                        res += sub;
                    }
                    return res;
                };
                return regexp;
            }
            else {
                const groups = [];
                const chunks = Object.keys(source).map(name => {
                    groups.push(name);
                    const regexp = $mol_regexp.from(source[name]);
                    groups.push(...regexp.groups);
                    return `(${regexp.source})`;
                });
                const regexp = new $mol_regexp(`(?:${chunks.join('|')})`, flags, groups);
                const validator = new RegExp('^' + regexp.source + '$', flags);
                regexp.generate = params => {
                    for (let option in source) {
                        if (option in params) {
                            if (typeof params[option] === 'boolean') {
                                if (!params[option])
                                    continue;
                            }
                            else {
                                const str = String(params[option]);
                                if (str.match(validator))
                                    return str;
                                $.$mol_fail(new Error(`Wrong param: ${option}=${str}`));
                            }
                        }
                        else {
                            if (typeof source[option] !== 'object')
                                continue;
                        }
                        const res = $mol_regexp.from(source[option]).generate(params);
                        if (res)
                            return res;
                    }
                    return null;
                };
                return regexp;
            }
        }
        static unicode_only(...category) {
            return new $mol_regexp(`\\p{${category.join('=')}}`);
        }
        static unicode_except(...category) {
            return new $mol_regexp(`\\P{${category.join('=')}}`);
        }
        static char_range(from, to) {
            return new $mol_regexp(`${$mol_regexp.from(from).source}-${$mol_regexp.from(to).source}`);
        }
        static char_only(...allowed) {
            const regexp = allowed.map(f => $mol_regexp.from(f).source).join('');
            return new $mol_regexp(`[${regexp}]`);
        }
        static char_except(...forbidden) {
            const regexp = forbidden.map(f => $mol_regexp.from(f).source).join('');
            return new $mol_regexp(`[^${regexp}]`);
        }
        static decimal_only = $mol_regexp.from(/\d/gsu);
        static decimal_except = $mol_regexp.from(/\D/gsu);
        static latin_only = $mol_regexp.from(/\w/gsu);
        static latin_except = $mol_regexp.from(/\W/gsu);
        static space_only = $mol_regexp.from(/\s/gsu);
        static space_except = $mol_regexp.from(/\S/gsu);
        static word_break_only = $mol_regexp.from(/\b/gsu);
        static word_break_except = $mol_regexp.from(/\B/gsu);
        static tab = $mol_regexp.from(/\t/gsu);
        static slash_back = $mol_regexp.from(/\\/gsu);
        static nul = $mol_regexp.from(/\0/gsu);
        static char_any = $mol_regexp.from(/./gsu);
        static begin = $mol_regexp.from(/^/gsu);
        static end = $mol_regexp.from(/$/gsu);
        static or = $mol_regexp.from(/|/gsu);
        static line_end = $mol_regexp.from({
            win_end: [['\r'], '\n'],
            mac_end: '\r',
        });
    }
    $.$mol_regexp = $mol_regexp;
})($ || ($ = {}));
//regexp.js.map
;
"use strict";
var $;
(function ($) {
    const { unicode_only, line_end, repeat_greedy, optional, char_only, char_except } = $.$mol_regexp;
    $.$hyoo_crowd_tokenizer = $.$mol_regexp.from({
        token: {
            'line-break': line_end,
            'emoji': [
                unicode_only('Extended_Pictographic'),
                optional(unicode_only('Emoji_Modifier')),
                repeat_greedy([
                    unicode_only('Emoji_Component'),
                    unicode_only('Extended_Pictographic'),
                    optional(unicode_only('Emoji_Modifier')),
                ]),
            ],
            'Word-punctuation-space': [
                repeat_greedy(char_only([
                    unicode_only('General_Category', 'Uppercase_Letter'),
                    unicode_only('Diacritic'),
                    unicode_only('General_Category', 'Number'),
                ])),
                repeat_greedy(char_only([
                    unicode_only('General_Category', 'Lowercase_Letter'),
                    unicode_only('Diacritic'),
                    unicode_only('General_Category', 'Number'),
                ])),
                repeat_greedy(char_except([
                    unicode_only('General_Category', 'Uppercase_Letter'),
                    unicode_only('General_Category', 'Lowercase_Letter'),
                    unicode_only('Diacritic'),
                    unicode_only('General_Category', 'Number'),
                    unicode_only('White_Space'),
                ])),
                optional(unicode_only('White_Space')),
            ],
        },
    });
})($ || ($ = {}));
//tokenizer.js.map
;
"use strict";
var $;
(function ($) {
    class $hyoo_crowd_text extends $.$hyoo_crowd_node {
        text(next) {
            if (next === undefined) {
                return this.as($.$hyoo_crowd_list).list().filter(item => typeof item === 'string').join('');
            }
            else {
                this.write(next, 0, -1);
                return next;
            }
        }
        write(next, str_from = -1, str_to = str_from) {
            const list = this.chunks();
            let from = str_from < 0 ? list.length : 0;
            let word = '';
            while (from < list.length) {
                word = String(list[from].data);
                if (str_from <= word.length) {
                    next = word.slice(0, str_from) + next;
                    break;
                }
                str_from -= word.length;
                if (str_to > 0)
                    str_to -= word.length;
                from++;
            }
            let to = str_to < 0 ? list.length : from;
            while (to < list.length) {
                word = String(list[to].data);
                to++;
                if (str_to < word.length) {
                    next = next + word.slice(str_to);
                    break;
                }
                str_to -= word.length;
            }
            if (from && from === list.length) {
                --from;
                next = String(list[from].data) + next;
            }
            const words = [...next.matchAll($.$hyoo_crowd_tokenizer)].map(token => token[0]);
            this.as($.$hyoo_crowd_list).insert(words, from, to);
            return this;
        }
        point_by_offset(offset) {
            let off = offset;
            for (const chunk of this.chunks()) {
                const len = String(chunk.data).length;
                if (off < len)
                    return { chunk: chunk.self, offset: off };
                else
                    off -= len;
            }
            return { chunk: this.head, offset: offset };
        }
        offset_by_point(point) {
            let offset = 0;
            for (const chunk of this.chunks()) {
                if (chunk.self === point.chunk)
                    return offset + point.offset;
                offset += String(chunk.data).length;
            }
            return offset;
        }
    }
    $.$hyoo_crowd_text = $hyoo_crowd_text;
})($ || ($ = {}));
//text.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_state_shared extends $.$mol_object2 {
        db() {
            const init = $.$mol_fiber_sync(() => $.$$.$mol_db('$mol_state_shared_db', mig => mig.store_make('Chunks'), mig => mig.stores.Chunks.index_make('Path', ['path'])));
            return init();
        }
        server() {
            return `wss://sync-hyoo-ru.herokuapp.com/`;
        }
        server_clock = new $.$hyoo_crowd_clock;
        db_clock = new $.$hyoo_crowd_clock;
        peer() {
            return $.$mol_hash_string(this.keys_serial().public);
        }
        keys_serial() {
            const key = this + '.keys()';
            let serial = this.$.$mol_state_local.value(key);
            if (serial)
                return serial;
            const pair = $.$mol_fiber_sync(this.$.$mol_crypto_auditor_pair).call($);
            serial = {
                public: $.$mol_base64_encode(new Uint8Array($.$mol_fiber_sync(pair.public.serial).call(pair.public))),
                private: $.$mol_base64_encode(new Uint8Array($.$mol_fiber_sync(pair.private.serial).call(pair.private))),
            };
            $.$mol_fiber_defer(() => this.$.$mol_state_local.value(key, serial));
            return serial;
        }
        keys() {
            const prev = this.keys_serial();
            return {
                public: $.$mol_fiber_sync(this.$.$mol_crypto_auditor_public.from)
                    .call(this.$.$mol_crypto_auditor_public, $.$mol_base64_decode(prev.public)),
                private: $.$mol_fiber_sync(this.$.$mol_crypto_auditor_private.from)
                    .call(this.$.$mol_crypto_auditor_private, $.$mol_base64_decode(prev.private)),
            };
        }
        store() {
            return new this.$.$hyoo_crowd_doc(this.peer());
        }
        path() {
            return '';
        }
        node() {
            return this.store().root;
        }
        doc(key) {
            if (!key)
                return this;
            const State = this.constructor;
            const state = new State;
            state.path = $.$mol_const(this.path() ? this.path() + '/' + key : key);
            state.doc = k => this.doc(key + '/' + k);
            state.socket = () => this.socket();
            state.peer = () => this.peer();
            state.keys_serial = () => this.keys_serial();
            state.keys = () => this.keys();
            state.db = () => this.db();
            return state;
        }
        sub(key) {
            const State = this.constructor;
            const state = new State;
            state.node = $.$mol_const(this.node().sub(key, $.$hyoo_crowd_struct));
            state.request = n => this.request(n);
            state.path = () => this.path();
            state.version_last = n => this.version_last(n);
            state.db = () => this.db();
            return state;
        }
        version_last(next) {
            return this.store().clock.now;
        }
        request_done(next) {
            return (res) => { };
        }
        db_load() {
            return $.$mol_fiber_defer(() => {
                const db = this.db();
                const Chunks = db.read('Chunks').Chunks;
                const path = this.path();
                const delta = $.$mol_fiber_sync(() => Chunks.indexes.Path.select([path]))()
                    .map(doc => doc.chunk)
                    .filter(Boolean);
                const store = this.store();
                store.apply(delta);
                this.version_last(-1);
            });
        }
        request(next) {
            const db = this.db();
            this.socket();
            const store = this.store();
            const path = this.path();
            this.db_load();
            if (next === undefined) {
            }
            else {
                const pub = this.keys_serial().public;
                store.root.sub(pub, $.$hyoo_crowd_reg).value(pub);
            }
            $.$mol_fiber.run(() => {
                $.$mol_fiber_defer(() => {
                    const delta = store.delta(this.server_clock);
                    if (next !== undefined && !delta.length)
                        return;
                    if (next !== undefined) {
                        const trans = db.change('Chunks');
                        const Chunks = trans.stores.Chunks;
                        for (const chunk of delta) {
                            Chunks.put({ path, chunk }, [path, chunk.head, chunk.self]);
                        }
                        trans.commit();
                    }
                    if (delta.length) {
                        this.send(path, next === undefined && !delta.length ? [] : delta);
                    }
                    for (const chunk of delta) {
                        this.server_clock.see(chunk.peer, chunk.time);
                    }
                });
            });
            if (next === undefined) {
                $.$mol_fiber.run(() => {
                    $.$mol_fiber_defer(() => { this.send(path, []); });
                });
            }
            return null;
        }
        value(next) {
            this.request(next);
            const res = this.node().as($.$hyoo_crowd_reg).value(next);
            this.version_last(next);
            return res;
        }
        list(next) {
            this.request(next);
            const res = this.node().as($.$hyoo_crowd_list).list(next) ?? [];
            this.version_last(next);
            return res;
        }
        text(next) {
            this.request(next);
            const res = this.node().as($.$hyoo_crowd_text).text(next) ?? '';
            this.version_last(next);
            return res;
        }
        selection(next) {
            const node = this.node().as($.$hyoo_crowd_text);
            this.version_last();
            if (next) {
                this.selection_range(next.map(offset => node.point_by_offset(offset)));
                return next;
            }
            else {
                return this.selection_range().map(point => node.offset_by_point(point));
            }
        }
        selection_range(next) {
            return next ?? [{ chunk: 0, offset: 0 }, { chunk: 0, offset: 0 }];
        }
        socket() {
            const db = this.db();
            this.heartbeat();
            const atom = $.$mol_atom2.current;
            const socket = new $.$mol_dom_context.WebSocket(this.server());
            socket.onmessage = $.$mol_fiber.func(event => {
                if (!event.data)
                    return;
                const message = JSON.parse(event.data);
                if (!Array.isArray(message))
                    return;
                let [path, ...delta] = message;
                if (typeof path !== 'string')
                    return;
                if (!delta)
                    return;
                const doc = this.doc(path);
                const store = doc.store();
                doc.request_done()(null);
                if (!delta.length) {
                    delta = store.delta();
                    if (!delta.length)
                        return;
                    this.send(path, delta);
                    return;
                }
                const trans = db.change('Chunks');
                const Chunks = trans.stores.Chunks;
                for (const chunk of delta) {
                    Chunks.put({ path, chunk }, [path, chunk.head, chunk.self]);
                }
                trans.commit();
                store.apply(delta);
                for (const chunk of delta) {
                    doc.server_clock.see(chunk.peer, chunk.time);
                }
                doc.version_last(-1);
                this.scheduled_enforcer(null);
            });
            socket.onclose = () => {
                setTimeout(() => atom.obsolete(), 5000);
                this.scheduled_enforcer(null);
            };
            return socket;
        }
        heartbeat() {
            const timer = setInterval(() => {
                const socket = this.socket();
                if (socket.readyState !== socket.OPEN)
                    return;
                socket.send('');
            }, 30000);
            return {
                destructor: () => clearInterval(timer)
            };
        }
        scheduled_enforcer(next) {
            return new $.$mol_after_timeout(1000, $.$mol_fiber_warp);
        }
        send(key, next) {
            const socket = this.socket();
            if (socket.readyState === socket.CONNECTING) {
                $.$mol_fiber_sync(() => new Promise(done => socket.addEventListener('open', done)))();
            }
            if (socket.readyState !== socket.OPEN)
                return;
            const message = next === undefined ? [key] : [key, ...next];
            socket.send(JSON.stringify(message));
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_state_shared.prototype, "db", null);
    __decorate([
        $.$mol_mem
    ], $mol_state_shared.prototype, "peer", null);
    __decorate([
        $.$mol_mem
    ], $mol_state_shared.prototype, "keys_serial", null);
    __decorate([
        $.$mol_mem
    ], $mol_state_shared.prototype, "keys", null);
    __decorate([
        $.$mol_mem
    ], $mol_state_shared.prototype, "store", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_state_shared.prototype, "doc", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_state_shared.prototype, "sub", null);
    __decorate([
        $.$mol_mem
    ], $mol_state_shared.prototype, "version_last", null);
    __decorate([
        $.$mol_mem
    ], $mol_state_shared.prototype, "request_done", null);
    __decorate([
        $.$mol_mem
    ], $mol_state_shared.prototype, "db_load", null);
    __decorate([
        $.$mol_mem
    ], $mol_state_shared.prototype, "request", null);
    __decorate([
        $.$mol_mem
    ], $mol_state_shared.prototype, "value", null);
    __decorate([
        $.$mol_mem
    ], $mol_state_shared.prototype, "list", null);
    __decorate([
        $.$mol_mem
    ], $mol_state_shared.prototype, "text", null);
    __decorate([
        $.$mol_mem
    ], $mol_state_shared.prototype, "selection", null);
    __decorate([
        $.$mol_mem
    ], $mol_state_shared.prototype, "selection_range", null);
    __decorate([
        $.$mol_mem
    ], $mol_state_shared.prototype, "socket", null);
    __decorate([
        $.$mol_mem
    ], $mol_state_shared.prototype, "heartbeat", null);
    __decorate([
        $.$mol_mem
    ], $mol_state_shared.prototype, "scheduled_enforcer", null);
    __decorate([
        $.$mol_fiber.method
    ], $mol_state_shared.prototype, "send", null);
    $.$mol_state_shared = $mol_state_shared;
})($ || ($ = {}));
//shared.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_store extends $.$mol_object2 {
        data_default;
        constructor(data_default) {
            super();
            this.data_default = data_default;
        }
        data(next) {
            return next === undefined ? this.data_default : next;
        }
        snapshot(next) {
            return JSON.stringify(this.data(next === undefined ? next : JSON.parse(next)));
        }
        value(key, next) {
            const data = this.data();
            if (next === undefined)
                return data && data[key];
            const Constr = Reflect.getPrototypeOf(data).constructor;
            this.data(Object.assign(new Constr, data, { [key]: next }));
            return next;
        }
        selection(key, next = [0, 0]) {
            return next;
        }
        sub(key, lens) {
            if (!lens)
                lens = new $mol_store();
            const data = lens.data;
            lens.data = next => {
                if (next == undefined) {
                    return this.value(key) ?? lens.data_default;
                }
                return this.value(key, next);
            };
            return lens;
        }
        reset() {
            this.data(this.data_default);
        }
        active() {
            return true;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_store.prototype, "data", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_store.prototype, "selection", null);
    $.$mol_store = $mol_store;
})($ || ($ = {}));
//store.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_store_local_class extends $.$mol_store {
        native() {
            check: try {
                const native = $.$mol_dom_context.localStorage;
                if (!native)
                    break check;
                native.setItem('', '');
                native.removeItem('');
                return native;
            }
            catch (error) {
                console.warn(error);
            }
            const dict = new Map();
            return {
                map: dict,
                getItem: (key) => dict.get(key),
                setItem: (key, value) => dict.set(key, value),
                removeItem: (key) => dict.delete(key),
            };
        }
        data() {
            return $.$mol_fail(new Error('Forbidden for local storage'));
        }
        value(key, next, force) {
            if (next === undefined)
                return JSON.parse(this.native().getItem(key) || 'null');
            if (next === null)
                this.native().removeItem(key);
            else
                this.native().setItem(key, JSON.stringify(next));
            return next;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_store_local_class.prototype, "native", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_store_local_class.prototype, "value", null);
    $.$mol_store_local_class = $mol_store_local_class;
    $.$mol_store_local = new $mol_store_local_class;
})($ || ($ = {}));
//local.js.map
;
"use strict";
var $;
(function ($) {
    class $hyoo_talks_domain extends $.$mol_object2 {
        state() {
            return new this.$.$mol_state_shared;
        }
        user() {
            let id = this.$.$mol_store_local.value('user');
            if (!id) {
                id = Math.random().toString(16).slice(2);
                new $.$mol_after_tick(() => this.$.$mol_store_local.value('user', id));
            }
            return this.person(id);
        }
        person(id) {
            const person = new $.$hyoo_talks_person();
            person.id = $.$mol_const(id);
            person.domain = $.$mol_const(this);
            return person;
        }
        chat(id) {
            const chat = new $.$hyoo_talks_chat;
            chat.id = $.$mol_const(id);
            chat.domain = $.$mol_const(this);
            return chat;
        }
        message(id) {
            const message = new $.$hyoo_talks_message();
            message.id = $.$mol_const(id);
            message.domain = $.$mol_const(this);
            return message;
        }
    }
    __decorate([
        $.$mol_mem
    ], $hyoo_talks_domain.prototype, "state", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_talks_domain.prototype, "user", null);
    __decorate([
        $.$mol_mem_key
    ], $hyoo_talks_domain.prototype, "person", null);
    __decorate([
        $.$mol_mem_key
    ], $hyoo_talks_domain.prototype, "chat", null);
    __decorate([
        $.$mol_mem_key
    ], $hyoo_talks_domain.prototype, "message", null);
    $.$hyoo_talks_domain = $hyoo_talks_domain;
})($ || ($ = {}));
//domain.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_page extends $.$mol_view {
        sub() {
            return [
                this.Head(),
                this.Body(),
                this.Foot()
            ];
        }
        Title() {
            const obj = new this.$.$mol_view();
            obj.dom_name = () => "h1";
            obj.sub = () => [
                this.title()
            ];
            return obj;
        }
        tools() {
            return [];
        }
        Tools() {
            const obj = new this.$.$mol_view();
            obj.sub = () => this.tools();
            return obj;
        }
        head() {
            return [
                this.Title(),
                this.Tools()
            ];
        }
        Head() {
            const obj = new this.$.$mol_view();
            obj.minimal_height = () => 64;
            obj.sub = () => this.head();
            return obj;
        }
        body_scroll_top(val) {
            if (val !== undefined)
                return val;
            return 0;
        }
        body() {
            return [];
        }
        Body() {
            const obj = new this.$.$mol_scroll();
            obj.scroll_top = (val) => this.body_scroll_top(val);
            obj.sub = () => this.body();
            return obj;
        }
        foot() {
            return [];
        }
        Foot() {
            const obj = new this.$.$mol_view();
            obj.sub = () => this.foot();
            return obj;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_page.prototype, "Title", null);
    __decorate([
        $.$mol_mem
    ], $mol_page.prototype, "Tools", null);
    __decorate([
        $.$mol_mem
    ], $mol_page.prototype, "Head", null);
    __decorate([
        $.$mol_mem
    ], $mol_page.prototype, "body_scroll_top", null);
    __decorate([
        $.$mol_mem
    ], $mol_page.prototype, "Body", null);
    __decorate([
        $.$mol_mem
    ], $mol_page.prototype, "Foot", null);
    $.$mol_page = $mol_page;
})($ || ($ = {}));
//page.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        const { per, rem } = $.$mol_style_unit;
        const { calc } = $.$mol_style_func;
        $.$mol_style_define($$.$mol_page, {
            display: 'flex',
            margin: 0,
            flex: {
                basis: 'auto',
                direction: 'column',
            },
            position: 'relative',
            alignSelf: 'stretch',
            maxWidth: per(100),
            maxHeight: per(100),
            boxSizing: 'border-box',
            background: {
                color: $.$mol_theme.back,
            },
            color: $.$mol_theme.text,
            ':focus': {
                outline: 'none',
            },
            Head: {
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'flex-end',
                flex: 'none',
                position: 'relative',
                margin: 0,
                minHeight: rem(4),
                padding: $.$mol_gap.block,
                background: {
                    color: $.$mol_theme.back,
                },
                border: {
                    radius: $.$mol_gap.round,
                },
                boxShadow: `0 0.5rem 0.5rem -0.5rem hsla(0,0%,0%,.25)`,
                zIndex: 2,
            },
            Title: {
                minHeight: rem(2),
                margin: 0,
                padding: $.$mol_gap.text,
                wordBreak: 'normal',
                textShadow: '0 0',
                font: {
                    size: 'inherit',
                    weight: 'normal',
                },
                flex: {
                    grow: 1000,
                    shrink: 1,
                    basis: 'auto',
                },
            },
            Tools: {
                flex: {
                    basis: 'auto',
                    grow: 0,
                    shrink: 1,
                },
                display: 'flex',
                justifyContent: 'flex-end',
                alignItems: 'flex-start',
                flexWrap: 'wrap',
            },
            Body: {
                flex: {
                    grow: 1000,
                    shrink: 1,
                    basis: per(100),
                },
            },
            Foot: {
                display: 'flex',
                justifyContent: 'space-between',
                flex: 'none',
                margin: 0,
                overflow: 'hidden',
                background: {
                    color: $.$mol_theme.back,
                },
                border: {
                    radius: $.$mol_gap.round,
                },
                boxShadow: `0 -0.5rem 0.5rem -0.5rem hsla(0,0%,0%,.25)`,
                zIndex: 1,
            },
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//page.view.css.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_page extends $.$mol_page {
            body_scroll_top(next) {
                return $.$mol_state_session.value(`${this}.body_scroll_top()`, next) || 0;
            }
        }
        $$.$mol_page = $mol_page;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//page.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_file_not_found extends Error {
    }
    $.$mol_file_not_found = $mol_file_not_found;
    class $mol_file extends $.$mol_object {
        static absolute(path) {
            throw new Error('Not implemented yet');
        }
        static relative(path) {
            throw new Error('Not implemented yet');
        }
        path() {
            return '.';
        }
        parent() {
            return this.resolve('..');
        }
        reset() {
            try {
                this.stat(undefined, $.$mol_mem_force_cache);
            }
            catch (error) {
                if (error instanceof $mol_file_not_found)
                    return;
                return $.$mol_fail_hidden(error);
            }
        }
        version() {
            return this.stat().mtime.getTime().toString(36).toUpperCase();
        }
        watcher() {
            console.warn('$mol_file_web.watcher() not implemented');
            return {
                destructor() { }
            };
        }
        exists(next, force) {
            let exists = true;
            try {
                this.stat();
            }
            catch (error) {
                if (error instanceof $mol_file_not_found) {
                    exists = false;
                }
                else {
                    return $.$mol_fail_hidden(error);
                }
            }
            if (next === undefined)
                return exists;
            if (next === exists)
                return exists;
            if (next)
                this.parent().exists(true);
            this.ensure(next);
            this.reset();
            return next;
        }
        type() {
            return this.stat().type;
        }
        name() {
            return this.path().replace(/^.*\//, '');
        }
        ext() {
            const match = /((?:\.\w+)+)$/.exec(this.path());
            return match ? match[1].substring(1) : '';
        }
        text(next, force) {
            if (next === undefined) {
                return $.$mol_charset_decode(this.buffer(undefined, force));
            }
            else {
                const buffer = next === undefined ? undefined : $.$mol_charset_encode(next);
                this.buffer(buffer, force);
                return next;
            }
        }
        fail(error) {
            this.buffer(error, $.$mol_mem_force_fail);
            this.stat(error, $.$mol_mem_force_fail);
        }
        buffer_cached(buffer) {
            const ctime = new Date();
            const stat = {
                type: 'file',
                size: buffer.length,
                ctime,
                atime: ctime,
                mtime: ctime
            };
            this.buffer(buffer, $.$mol_mem_force_cache);
            this.stat(stat, $.$mol_mem_force_cache);
        }
        text_cached(content) {
            this.buffer_cached($.$mol_charset_encode(content));
        }
        find(include, exclude) {
            const found = [];
            const sub = this.sub();
            for (const child of sub) {
                const child_path = child.path();
                if (exclude && child_path.match(exclude))
                    continue;
                if (!include || child_path.match(include))
                    found.push(child);
                if (child.type() === 'dir') {
                    const sub_child = child.find(include, exclude);
                    for (const child of sub_child)
                        found.push(child);
                }
            }
            return found;
        }
        size() {
            switch (this.type()) {
                case 'file': return this.stat().size;
                default: return 0;
            }
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_file.prototype, "exists", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_file, "absolute", null);
    $.$mol_file = $mol_file;
})($ || ($ = {}));
//file.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_compare_array(a, b) {
        if (a === b)
            return true;
        if (Object.getPrototypeOf(a) !== Object.getPrototypeOf(b))
            return false;
        if (a.length !== b.length)
            return false;
        for (let i = 0; i < a.length; i++)
            if (a[i] !== b[i])
                return false;
        return true;
    }
    $.$mol_compare_array = $mol_compare_array;
})($ || ($ = {}));
//array.js.map
;
"use strict";
var $;
(function ($) {
    function stat_convert(stat) {
        let type;
        if (stat.isDirectory())
            type = 'dir';
        if (stat.isFile())
            type = 'file';
        if (stat.isSymbolicLink())
            type = 'link';
        if (!type)
            return $.$mol_fail(new Error(`Unsupported file type`));
        return {
            type,
            size: Number(stat.size),
            atime: stat.atime,
            mtime: stat.mtime,
            ctime: stat.ctime
        };
    }
    function buffer_normalize(buf) {
        return new Uint8Array(buf.buffer, buf.byteOffset, buf.byteLength);
    }
    class $mol_file_node extends $.$mol_file {
        static absolute(path) {
            return this.make({
                path: $.$mol_const(path)
            });
        }
        static relative(path) {
            return this.absolute($node.path.resolve(path).replace(/\\/g, '/'));
        }
        watcher() {
            const watcher = $node.chokidar.watch(this.path(), {
                persistent: true,
                ignored: /(^\.|___$)/,
                depth: 0,
                ignoreInitial: true,
                awaitWriteFinish: {
                    stabilityThreshold: 100,
                },
            });
            watcher
                .on('all', (type, path) => {
                const file = $.$mol_file.relative(path.replace(/\\/g, '/'));
                file.reset();
                if (type === 'change') {
                    file.buffer(undefined, $.$mol_mem_force_update);
                }
                else {
                    file.parent().reset();
                }
            })
                .on('error', (error) => {
                this.stat(error, $.$mol_mem_force_fail);
            });
            return {
                destructor() {
                    watcher.close();
                }
            };
        }
        stat(next, force) {
            let stat = next;
            const path = this.path();
            this.parent().watcher();
            try {
                stat = next ?? stat_convert($node.fs.statSync(path));
            }
            catch (error) {
                if (error.code === 'ENOENT')
                    error = new $.$mol_file_not_found(`File not found`);
                error.message += '\n' + path;
                return this.$.$mol_fail_hidden(error);
            }
            return stat;
        }
        ensure(next) {
            const path = this.path();
            try {
                if (next)
                    $node.fs.mkdirSync(path);
                else
                    $node.fs.unlinkSync(path);
            }
            catch (e) {
                e.message += '\n' + path;
                return this.$.$mol_fail_hidden(e);
            }
            return true;
        }
        buffer(next, force) {
            const path = this.path();
            if (next === undefined) {
                this.stat();
                try {
                    const prev = $.$mol_mem_cached(() => this.buffer());
                    next = buffer_normalize($node.fs.readFileSync(path));
                    if (prev !== undefined && !$.$mol_compare_array(prev, next)) {
                        this.$.$mol_log3_rise({
                            place: `$mol_file_node..buffer()`,
                            message: 'Changed',
                            path: this.relate(),
                        });
                    }
                    return next;
                }
                catch (error) {
                    error.message += '\n' + path;
                    return this.$.$mol_fail_hidden(error);
                }
            }
            this.parent().exists(true);
            try {
                $node.fs.writeFileSync(path, next);
            }
            catch (error) {
                error.message += '\n' + path;
                return this.$.$mol_fail_hidden(error);
            }
            return next;
        }
        sub() {
            if (!this.exists())
                return [];
            if (this.type() !== 'dir')
                return [];
            const path = this.path();
            try {
                return $node.fs.readdirSync(path)
                    .filter(name => !/^\.+$/.test(name))
                    .map(name => this.resolve(name));
            }
            catch (e) {
                e.message += '\n' + path;
                return this.$.$mol_fail_hidden(e);
            }
        }
        resolve(path) {
            return this.constructor.relative($node.path.join(this.path(), path));
        }
        relate(base = this.constructor.relative('.')) {
            return $node.path.relative(base.path(), this.path()).replace(/\\/g, '/');
        }
        append(next) {
            const path = this.path();
            try {
                $node.fs.appendFileSync(path, next);
            }
            catch (e) {
                e.message += '\n' + path;
                return this.$.$mol_fail_hidden(e);
            }
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_file_node.prototype, "watcher", null);
    __decorate([
        $.$mol_mem
    ], $mol_file_node.prototype, "stat", null);
    __decorate([
        $.$mol_mem
    ], $mol_file_node.prototype, "buffer", null);
    __decorate([
        $.$mol_mem
    ], $mol_file_node.prototype, "sub", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_file_node, "absolute", null);
    $.$mol_file_node = $mol_file_node;
    $.$mol_file = $mol_file_node;
})($ || ($ = {}));
//file.node.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_locale extends $.$mol_object {
        static lang_default() {
            return 'en';
        }
        static lang(next) {
            return $.$mol_state_local.value('locale', next) || $.$mol_dom_context.navigator.language.replace(/-.*/, '') || this.lang_default();
        }
        static source(lang) {
            return JSON.parse($.$mol_file.relative(`web.locale=${lang}.json`).text().toString());
        }
        static texts(lang, next) {
            if (next)
                return next;
            try {
                return this.source(lang).valueOf();
            }
            catch (error) {
                if ('then' in error)
                    $.$mol_fail_hidden(error);
                const def = this.lang_default();
                if (lang === def)
                    throw error;
                return this.source(def);
            }
        }
        static text(key) {
            for (let lang of [this.lang(), 'en']) {
                const text = this.texts(lang)[key];
                if (text)
                    return text;
                this.warn(key);
            }
            return `<${key}>`;
        }
        static warn(key) {
            console.warn(`Not translated to "${this.lang()}": ${key}`);
            return null;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_locale, "lang_default", null);
    __decorate([
        $.$mol_mem
    ], $mol_locale, "lang", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_locale, "source", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_locale, "texts", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_locale, "text", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_locale, "warn", null);
    $.$mol_locale = $mol_locale;
})($ || ($ = {}));
//locale.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_after_work extends $.$mol_after_timeout {
    }
    $.$mol_after_work = $mol_after_work;
})($ || ($ = {}));
//work.node.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_state_time extends $.$mol_object {
        static now(precision = 0, next) {
            if (precision > 0) {
                new $.$mol_after_timeout(precision, $.$mol_atom2.current.fresh);
            }
            else {
                new $.$mol_after_work(16, $.$mol_atom2.current.fresh);
            }
            return Date.now();
        }
    }
    __decorate([
        $.$mol_mem_key
    ], $mol_state_time, "now", null);
    $.$mol_state_time = $mol_state_time;
})($ || ($ = {}));
//time.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_time_base {
        static patterns = {};
        static formatter(pattern) {
            if (this.patterns[pattern])
                return this.patterns[pattern];
            var tokens = Object.keys(this.patterns)
                .sort()
                .reverse()
                .map((token) => token.replace(/([-+*.\[\]()\^])/g, '\\$1'));
            var lexer = RegExp('(.*?)(' + tokens.join('|') + '|$)', 'g');
            var funcs = [];
            pattern.replace(lexer, (str, text, token) => {
                if (text)
                    funcs.push(() => text);
                if (token)
                    funcs.push(this.patterns[token]);
                return str;
            });
            return this.patterns[pattern] = (arg) => {
                return funcs.reduce((res, func) => res + func(arg), '');
            };
        }
        toString(pattern) {
            const Base = this.constructor;
            const formatter = Base.formatter(pattern);
            return formatter(this);
        }
    }
    $.$mol_time_base = $mol_time_base;
})($ || ($ = {}));
//base.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_time_duration extends $.$mol_time_base {
        constructor(config = 0) {
            super();
            if (typeof config === 'number') {
                this.second = config / 1000;
                return;
            }
            if (typeof config === 'string') {
                if (config === 'Z') {
                    this.hour = 0;
                    this.minute = 0;
                    return;
                }
                duration: {
                    const parser = /^P(?:([+-]?\d+(?:\.\d+)?)Y)?(?:([+-]?\d+(?:\.\d+)?)M)?(?:([+-]?\d+(?:\.\d+)?)D)?(?:T(?:([+-]?\d+(?:\.\d+)?)h)?(?:([+-]?\d+(?:\.\d+)?)m)?(?:([+-]?\d+(?:\.\d+)?)s)?)?$/i;
                    const found = parser.exec(config);
                    if (!found)
                        break duration;
                    if (found[1])
                        this.year = Number(found[1]);
                    if (found[2])
                        this.month = Number(found[2]);
                    if (found[3])
                        this.day = Number(found[3]);
                    if (found[4])
                        this.hour = Number(found[4]);
                    if (found[5])
                        this.minute = Number(found[5]);
                    if (found[6])
                        this.second = Number(found[6]);
                    return;
                }
                offset: {
                    var parser = /^[+-](\d\d)(?::?(\d\d))?$/i;
                    var found = parser.exec(config);
                    if (!found)
                        break offset;
                    if (found[1])
                        this.hour = Number(found[1]);
                    if (found[2])
                        this.minute = Number(found[2]);
                    return;
                }
                throw new Error(`Can not parse time duration (${config})`);
            }
            this.year = config.year || 0;
            this.month = config.month || 0;
            this.day = config.day || 0;
            this.hour = config.hour || 0;
            this.minute = config.minute || 0;
            this.second = config.second || 0;
        }
        year = 0;
        month = 0;
        day = 0;
        hour = 0;
        minute = 0;
        second = 0;
        summ(config) {
            const duration = new $mol_time_duration(config);
            return new $mol_time_duration({
                year: this.year + duration.year,
                month: this.month + duration.month,
                day: this.day + duration.day,
                hour: this.hour + duration.hour,
                minute: this.minute + duration.minute,
                second: this.second + duration.second,
            });
        }
        mult(numb) {
            return new $mol_time_duration({
                year: this.year && this.year * numb,
                month: this.month && this.month * numb,
                day: this.day && this.day * numb,
                hour: this.hour && this.hour * numb,
                minute: this.minute && this.minute * numb,
                second: this.second && this.second * numb,
            });
        }
        count(config) {
            const duration = new $mol_time_duration(config);
            return this.valueOf() / duration.valueOf();
        }
        valueOf() {
            var day = this.year * 365 + this.month * 30.4 + this.day;
            var second = ((day * 24 + this.hour) * 60 + this.minute) * 60 + this.second;
            return second * 1000;
        }
        toJSON() { return this.toString(); }
        toString(pattern = 'P#Y#M#DT#h#m#s') {
            return super.toString(pattern);
        }
        static patterns = {
            '#Y': (duration) => {
                if (!duration.year)
                    return '';
                return duration.year + 'Y';
            },
            '#M': (duration) => {
                if (!duration.month)
                    return '';
                return duration.month + 'M';
            },
            '#D': (duration) => {
                if (!duration.day)
                    return '';
                return duration.day + 'D';
            },
            '#h': (duration) => {
                if (!duration.hour)
                    return '';
                return duration.hour + 'H';
            },
            '#m': (duration) => {
                if (!duration.minute)
                    return '';
                return duration.minute + 'M';
            },
            '#s': (duration) => {
                if (!duration.second)
                    return '';
                return duration.second + 'S';
            },
        };
    }
    $.$mol_time_duration = $mol_time_duration;
})($ || ($ = {}));
//duration.js.map
;
"use strict";
var $;
(function ($) {
    let $mol_time_moment_weekdays;
    (function ($mol_time_moment_weekdays) {
        $mol_time_moment_weekdays[$mol_time_moment_weekdays["monday"] = 0] = "monday";
        $mol_time_moment_weekdays[$mol_time_moment_weekdays["tuesday"] = 1] = "tuesday";
        $mol_time_moment_weekdays[$mol_time_moment_weekdays["wednesday"] = 2] = "wednesday";
        $mol_time_moment_weekdays[$mol_time_moment_weekdays["thursday"] = 3] = "thursday";
        $mol_time_moment_weekdays[$mol_time_moment_weekdays["friday"] = 4] = "friday";
        $mol_time_moment_weekdays[$mol_time_moment_weekdays["saturday"] = 5] = "saturday";
        $mol_time_moment_weekdays[$mol_time_moment_weekdays["sunday"] = 6] = "sunday";
    })($mol_time_moment_weekdays = $.$mol_time_moment_weekdays || ($.$mol_time_moment_weekdays = {}));
    function numb(str, max) {
        const numb = Number(str);
        if (numb < max)
            return numb;
        $.$mol_fail(new Error(`Wrong time component ${str}`));
    }
    class $mol_time_moment extends $.$mol_time_base {
        constructor(config = new Date) {
            super();
            if (typeof config === 'number')
                config = new Date(config);
            if (typeof config === 'string') {
                const parsed = /^(?:(\d\d?\d?\d?)(?:-?(\d\d?)(?:-?(\d\d?))?)?)?(?:[T ](?:(\d\d?)(?::?(\d\d?)(?::?(\d\d?(?:\.\d+)?))?)?)?(Z|[\+\-]\d\d?(?::?(?:\d\d?)?)?)?)?$/.exec(config);
                if (!parsed)
                    throw new Error(`Can not parse time moment (${config})`);
                if (parsed[1])
                    this.year = numb(parsed[1], 9999);
                if (parsed[2])
                    this.month = numb(parsed[2], 13) - 1;
                if (parsed[3])
                    this.day = numb(parsed[3], 32) - 1;
                if (parsed[4])
                    this.hour = numb(parsed[4], 60);
                if (parsed[5])
                    this.minute = numb(parsed[5], 60);
                if (parsed[6])
                    this.second = numb(parsed[6], 60);
                if (parsed[7])
                    this.offset = new $.$mol_time_duration(parsed[7]);
                return;
            }
            if (config instanceof Date) {
                this.year = config.getFullYear();
                this.month = config.getMonth();
                this.day = config.getDate() - 1;
                this.hour = config.getHours();
                this.minute = config.getMinutes();
                this.second = config.getSeconds() + config.getMilliseconds() / 1000;
                const offset = -config.getTimezoneOffset();
                this.offset = new $.$mol_time_duration({
                    hour: (offset < 0) ? Math.ceil(offset / 60) : Math.floor(offset / 60),
                    minute: offset % 60
                });
                return;
            }
            this.year = config.year;
            this.month = config.month;
            this.day = config.day;
            this.hour = config.hour;
            this.minute = config.minute;
            this.second = config.second;
            this.offset = config.offset == null ? config.offset : new $.$mol_time_duration(config.offset);
        }
        year;
        month;
        day;
        hour;
        minute;
        second;
        offset;
        get weekday() {
            return (this.native.getDay() + 6) % 7;
        }
        _native;
        get native() {
            if (this._native)
                return this._native;
            const utc = this.toOffset('Z');
            return this._native = new Date(Date.UTC(utc.year ?? 0, utc.month ?? 0, (utc.day ?? 0) + 1, utc.hour ?? 0, utc.minute ?? 0, utc.second != undefined ? Math.floor(utc.second) : 0, utc.second != undefined ? Math.floor((utc.second - Math.floor(utc.second)) * 1000) : 0));
        }
        _normal;
        get normal() {
            if (this._normal)
                return this._normal;
            const moment = new $mol_time_moment(this.native);
            return this._normal = new $mol_time_moment({
                year: this.year === undefined ? undefined : moment.year,
                month: this.month === undefined ? undefined : moment.month,
                day: this.day === undefined ? undefined : moment.day,
                hour: this.hour === undefined ? undefined : moment.hour,
                minute: this.minute === undefined ? undefined : moment.minute,
                second: this.second === undefined ? undefined : moment.second,
                offset: this.offset === undefined ? undefined : moment.offset,
            });
        }
        merge(config) {
            const moment = new $mol_time_moment(config);
            return new $mol_time_moment({
                year: moment.year === undefined ? this.year : moment.year,
                month: moment.month === undefined ? this.month : moment.month,
                day: moment.day === undefined ? this.day : moment.day,
                hour: moment.hour === undefined ? this.hour : moment.hour,
                minute: moment.minute === undefined ? this.minute : moment.minute,
                second: moment.second === undefined ? this.second : moment.second,
                offset: moment.offset === undefined ? this.offset : moment.offset,
            });
        }
        shift(config) {
            const duration = new $.$mol_time_duration(config);
            const moment = new $mol_time_moment().merge({
                year: this.year,
                month: this.month,
                day: this.day,
                hour: this.hour ?? 0,
                minute: this.minute ?? 0,
                second: this.second ?? 0,
                offset: this.offset ?? 0
            });
            const second = moment.second + (duration.second ?? 0);
            const native = new Date(moment.year + (duration.year ?? 0), moment.month + (duration.month ?? 0), moment.day + 1 + (duration.day ?? 0), moment.hour + (duration.hour ?? 0), moment.minute + (duration.minute ?? 0), Math.floor(second), (second - Math.floor(second)) * 1000);
            if (isNaN(native.valueOf()))
                throw new Error('Wrong time');
            return new $mol_time_moment({
                year: this.year === undefined ? undefined : native.getFullYear(),
                month: this.month === undefined ? undefined : native.getMonth(),
                day: this.day === undefined ? undefined : native.getDate() - 1,
                hour: this.hour === undefined ? undefined : native.getHours(),
                minute: this.minute === undefined ? undefined : native.getMinutes(),
                second: this.second === undefined ? undefined : native.getSeconds() + native.getMilliseconds() / 1000,
                offset: this.offset,
            });
        }
        mask(config) {
            const mask = new $mol_time_moment(config);
            return new $mol_time_moment({
                year: mask.year === undefined ? undefined : this.year,
                month: mask.month === undefined ? undefined : this.month,
                day: mask.day === undefined ? undefined : this.day,
                hour: mask.hour === undefined ? undefined : this.hour,
                minute: mask.minute === undefined ? undefined : this.minute,
                second: mask.second === undefined ? undefined : this.second,
                offset: mask.offset === undefined ? undefined : this.offset,
            });
        }
        toOffset(config) {
            const duration = new $.$mol_time_duration(config);
            const offset = this.offset || new $mol_time_moment().offset;
            let with_time = new $mol_time_moment('T00:00:00').merge(this);
            const moment = with_time.shift(duration.summ(offset.mult(-1)));
            return moment.merge({ offset: duration });
        }
        valueOf() { return this.native.getTime(); }
        toJSON() { return this.toString(); }
        toString(pattern = 'YYYY-MM-DDThh:mm:ss.sssZ') {
            return super.toString(pattern);
        }
        static patterns = {
            'YYYY': (moment) => {
                if (moment.year == null)
                    return '';
                return String(moment.year);
            },
            'AD': (moment) => {
                if (moment.year == null)
                    return '';
                return String(Math.floor(moment.year / 100) + 1);
            },
            'YY': (moment) => {
                if (moment.year == null)
                    return '';
                return String(moment.year % 100);
            },
            'Month': (pattern => (moment) => {
                if (moment.month == null)
                    return '';
                return pattern.format(moment.native);
            })(new Intl.DateTimeFormat(undefined, { month: 'long' })),
            'DD Month': (pattern => (moment) => {
                if (moment.month == null) {
                    if (moment.day == null) {
                        return '';
                    }
                    else {
                        return $mol_time_moment.patterns['DD'](moment);
                    }
                }
                else {
                    if (moment.day == null) {
                        return $mol_time_moment.patterns['Month'](moment);
                    }
                    else {
                        return pattern.format(moment.native);
                    }
                }
            })(new Intl.DateTimeFormat(undefined, { day: '2-digit', month: 'long' })),
            'D Month': (pattern => (moment) => {
                if (moment.month == null) {
                    if (moment.day == null) {
                        return '';
                    }
                    else {
                        return $mol_time_moment.patterns['D'](moment);
                    }
                }
                else {
                    if (moment.day == null) {
                        return $mol_time_moment.patterns['Month'](moment);
                    }
                    else {
                        return pattern.format(moment.native);
                    }
                }
            })(new Intl.DateTimeFormat(undefined, { day: 'numeric', month: 'long' })),
            'Mon': (pattern => (moment) => {
                if (moment.month == null)
                    return '';
                return pattern.format(moment.native);
            })(new Intl.DateTimeFormat(undefined, { month: 'short' })),
            'DD Mon': (pattern => (moment) => {
                if (moment.month == null) {
                    if (moment.day == null) {
                        return '';
                    }
                    else {
                        return $mol_time_moment.patterns['DD'](moment);
                    }
                }
                else {
                    if (moment.day == null) {
                        return $mol_time_moment.patterns['Mon'](moment);
                    }
                    else {
                        return pattern.format(moment.native);
                    }
                }
            })(new Intl.DateTimeFormat(undefined, { day: '2-digit', month: 'short' })),
            'D Mon': (pattern => (moment) => {
                if (moment.month == null) {
                    if (moment.day == null) {
                        return '';
                    }
                    else {
                        return $mol_time_moment.patterns['D'](moment);
                    }
                }
                else {
                    if (moment.day == null) {
                        return $mol_time_moment.patterns['Mon'](moment);
                    }
                    else {
                        return pattern.format(moment.native);
                    }
                }
            })(new Intl.DateTimeFormat(undefined, { day: 'numeric', month: 'short' })),
            '-MM': (moment) => {
                if (moment.month == null)
                    return '';
                return '-' + $mol_time_moment.patterns['MM'](moment);
            },
            'MM': (moment) => {
                if (moment.month == null)
                    return '';
                return String(100 + moment.month + 1).slice(1);
            },
            'M': (moment) => {
                if (moment.month == null)
                    return '';
                return String(moment.month + 1);
            },
            'WeekDay': (pattern => (moment) => {
                if (moment.day == null)
                    return '';
                if (moment.month == null)
                    return '';
                if (moment.year == null)
                    return '';
                return pattern.format(moment.native);
            })(new Intl.DateTimeFormat(undefined, { weekday: 'long' })),
            'WD': (pattern => (moment) => {
                if (moment.day == null)
                    return '';
                if (moment.month == null)
                    return '';
                if (moment.year == null)
                    return '';
                return pattern.format(moment.native);
            })(new Intl.DateTimeFormat(undefined, { weekday: 'short' })),
            '-DD': (moment) => {
                if (moment.day == null)
                    return '';
                return '-' + $mol_time_moment.patterns['DD'](moment);
            },
            'DD': (moment) => {
                if (moment.day == null)
                    return '';
                return String(100 + moment.day + 1).slice(1);
            },
            'D': (moment) => {
                if (moment.day == null)
                    return '';
                return String(moment.day + 1);
            },
            'Thh': (moment) => {
                if (moment.hour == null)
                    return '';
                return 'T' + $mol_time_moment.patterns['hh'](moment);
            },
            'hh': (moment) => {
                if (moment.hour == null)
                    return '';
                return String(100 + moment.hour).slice(1);
            },
            'h': (moment) => {
                if (moment.hour == null)
                    return '';
                return String(moment.hour);
            },
            ':mm': (moment) => {
                if (moment.minute == null)
                    return '';
                return ':' + $mol_time_moment.patterns['mm'](moment);
            },
            'mm': (moment) => {
                if (moment.minute == null)
                    return '';
                return String(100 + moment.minute).slice(1);
            },
            'm': (moment) => {
                if (moment.minute == null)
                    return '';
                return String(moment.minute);
            },
            ':ss': (moment) => {
                if (moment.second == null)
                    return '';
                return ':' + $mol_time_moment.patterns['ss'](moment);
            },
            'ss': (moment) => {
                if (moment.second == null)
                    return '';
                return String(100 + moment.second | 0).slice(1);
            },
            's': (moment) => {
                if (moment.second == null)
                    return '';
                return String(moment.second | 0);
            },
            '.sss': (moment) => {
                if (moment.second == null)
                    return '';
                if (moment.second === (moment.second | 0))
                    return '';
                return '.' + $mol_time_moment.patterns['sss'](moment);
            },
            'sss': (moment) => {
                if (moment.second == null)
                    return '';
                const millisecond = Math.floor((moment.second - Math.floor(moment.second)) * 1000);
                return String(1000 + millisecond).slice(1);
            },
            'Z': (moment) => {
                const offset = moment.offset;
                if (!offset)
                    return '';
                let hour = offset.hour;
                let sign = '+';
                if (hour < 0) {
                    sign = '-';
                    hour = -hour;
                }
                return sign + String(100 + hour).slice(1) + ':' + String(100 + offset.minute).slice(1);
            }
        };
    }
    $.$mol_time_moment = $mol_time_moment;
})($ || ($ = {}));
//moment.js.map
;
"use strict";
var $;
(function ($) {
    class $hyoo_talks_message extends $.$mol_object2 {
        id() {
            return this.$.$mol_fail(new Error('id is not defined'));
        }
        domain() {
            return this.$.$mol_fail(new Error('domain is not defined'));
        }
        state() {
            return this.domain().state().doc('message').doc(this.id());
        }
        text(next) {
            return this.state().sub('text').text(next);
        }
        text_selection(next) {
            return this.state().sub('text').selection(next);
        }
        complete(next) {
            return Boolean(this.state().sub('complete').value(next));
        }
        author(next) {
            const id = this.state().sub('author').value(next && next.id());
            if (id)
                return this.domain().person(String(id));
            return null;
        }
        moment(next) {
            const str = this.state().sub('moment').value(next && next.toString());
            return str ? new $.$mol_time_moment(String(str)) : null;
        }
    }
    __decorate([
        $.$mol_mem
    ], $hyoo_talks_message.prototype, "state", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_talks_message.prototype, "author", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_talks_message.prototype, "moment", null);
    $.$hyoo_talks_message = $hyoo_talks_message;
})($ || ($ = {}));
//message.js.map
;
"use strict";
var $;
(function ($) {
    class $hyoo_talks_chat extends $.$mol_object2 {
        id() {
            return this.$.$mol_fail(new Error('id is not defined'));
        }
        domain() {
            return this.$.$mol_fail(new Error('domain is not defined'));
        }
        state() {
            return this.domain().state().doc('chat').doc(this.id());
        }
        title(next) {
            return this.state().sub('title').text(next);
        }
        messages(next) {
            const ids = this.state().sub('messages').list(next && next.map(m => m.id()));
            if (!ids)
                return [];
            return ids.map(id => this.domain().message(String(id)));
        }
    }
    __decorate([
        $.$mol_mem
    ], $hyoo_talks_chat.prototype, "state", null);
    $.$hyoo_talks_chat = $hyoo_talks_chat;
})($ || ($ = {}));
//chat.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_guid(length = 8, exists = () => false) {
        for (;;) {
            let id = Math.random().toString(36).substring(2, length + 2).toUpperCase();
            if (exists(id))
                continue;
            return id;
        }
    }
    $.$mol_guid = $mol_guid;
})($ || ($ = {}));
//guid.js.map
;
"use strict";
var $;
(function ($) {
    class $hyoo_talks_person extends $.$mol_object2 {
        id() {
            return this.$.$mol_fail(new Error('id is not defined'));
        }
        domain() {
            return this.$.$mol_fail(new Error('domain is not defined'));
        }
        state() {
            return this.domain().state().doc('person').doc(this.id());
        }
        name(next) {
            return String(this.state().sub('name').value(next) ?? '');
        }
        background(next) {
            return String(this.state().sub('background').value(next) ?? '');
        }
        avatar(next) {
            return String(this.state().sub('avatar').value(next) ?? '');
        }
        online_near() {
            const moment = this.online_time();
            if (!moment)
                return false;
            const now = this.$.$mol_state_time.now(60_000);
            return (now - moment.valueOf() < 60_000);
        }
        online_time() {
            const str = this.state().sub('online').value();
            return str ? new $.$mol_time_moment(String(str)) : null;
        }
        online_update() {
            $.$mol_fiber_defer(() => {
                this.state().sub('online').value(new $.$mol_time_moment().toString('YYYY-MM-DDThh:mmZ'));
            });
        }
        chats(next) {
            const ids = this.state().sub('chats').list(next && next.map(m => m.id()));
            if (!ids)
                return [];
            return ids.map(id => this.domain().chat(String(id)));
        }
        draft(chat, next) {
            const drafts = this.state().sub('drafts');
            let id = String(next === undefined ? drafts.sub(chat.id()).value() ?? '' : '');
            if (!id) {
                id = $.$mol_guid();
                $.$mol_fiber_defer(() => drafts.sub(chat.id()).value(id));
            }
            return this.domain().message(id);
        }
        read_messages(chat, next) {
            const sub = this.state().sub('read_messages');
            return Number(sub.sub(chat.id()).value(next)) ?? chat.messages().length;
        }
    }
    __decorate([
        $.$mol_mem
    ], $hyoo_talks_person.prototype, "state", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_talks_person.prototype, "online_near", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_talks_person.prototype, "online_time", null);
    __decorate([
        $.$mol_mem_key
    ], $hyoo_talks_person.prototype, "draft", null);
    __decorate([
        $.$mol_mem_key
    ], $hyoo_talks_person.prototype, "read_messages", null);
    $.$hyoo_talks_person = $hyoo_talks_person;
})($ || ($ = {}));
//person.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_plugin extends $.$mol_view {
        dom_node(next) {
            const node = next || $.$mol_owning_get(this, $.$mol_view).dom_node();
            $.$mol_dom_render_attributes(node, this.attr_static());
            const events = this.event();
            for (let event_name in events) {
                node.addEventListener(event_name, $.$mol_fiber_root(events[event_name]), { passive: false });
            }
            return node;
        }
        attr_static() {
            return {};
        }
        event() {
            return {};
        }
        render() {
            this.dom_node_actual();
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_plugin.prototype, "dom_node", null);
    $.$mol_plugin = $mol_plugin;
})($ || ($ = {}));
//plugin.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_hotkey extends $.$mol_plugin {
        event() {
            return {
                ...super.event(),
                keydown: (event) => this.keydown(event)
            };
        }
        key() {
            return {};
        }
        mod_ctrl() {
            return false;
        }
        mod_alt() {
            return false;
        }
        mod_shift() {
            return false;
        }
        keydown(event) {
            if (event !== undefined)
                return event;
            return null;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_hotkey.prototype, "keydown", null);
    $.$mol_hotkey = $mol_hotkey;
})($ || ($ = {}));
//hotkey.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    let $mol_keyboard_code;
    (function ($mol_keyboard_code) {
        $mol_keyboard_code[$mol_keyboard_code["backspace"] = 8] = "backspace";
        $mol_keyboard_code[$mol_keyboard_code["tab"] = 9] = "tab";
        $mol_keyboard_code[$mol_keyboard_code["enter"] = 13] = "enter";
        $mol_keyboard_code[$mol_keyboard_code["shift"] = 16] = "shift";
        $mol_keyboard_code[$mol_keyboard_code["ctrl"] = 17] = "ctrl";
        $mol_keyboard_code[$mol_keyboard_code["alt"] = 18] = "alt";
        $mol_keyboard_code[$mol_keyboard_code["pause"] = 19] = "pause";
        $mol_keyboard_code[$mol_keyboard_code["capsLock"] = 20] = "capsLock";
        $mol_keyboard_code[$mol_keyboard_code["escape"] = 27] = "escape";
        $mol_keyboard_code[$mol_keyboard_code["space"] = 32] = "space";
        $mol_keyboard_code[$mol_keyboard_code["pageUp"] = 33] = "pageUp";
        $mol_keyboard_code[$mol_keyboard_code["pageDown"] = 34] = "pageDown";
        $mol_keyboard_code[$mol_keyboard_code["end"] = 35] = "end";
        $mol_keyboard_code[$mol_keyboard_code["home"] = 36] = "home";
        $mol_keyboard_code[$mol_keyboard_code["left"] = 37] = "left";
        $mol_keyboard_code[$mol_keyboard_code["up"] = 38] = "up";
        $mol_keyboard_code[$mol_keyboard_code["right"] = 39] = "right";
        $mol_keyboard_code[$mol_keyboard_code["down"] = 40] = "down";
        $mol_keyboard_code[$mol_keyboard_code["insert"] = 45] = "insert";
        $mol_keyboard_code[$mol_keyboard_code["delete"] = 46] = "delete";
        $mol_keyboard_code[$mol_keyboard_code["key0"] = 48] = "key0";
        $mol_keyboard_code[$mol_keyboard_code["key1"] = 49] = "key1";
        $mol_keyboard_code[$mol_keyboard_code["key2"] = 50] = "key2";
        $mol_keyboard_code[$mol_keyboard_code["key3"] = 51] = "key3";
        $mol_keyboard_code[$mol_keyboard_code["key4"] = 52] = "key4";
        $mol_keyboard_code[$mol_keyboard_code["key5"] = 53] = "key5";
        $mol_keyboard_code[$mol_keyboard_code["key6"] = 54] = "key6";
        $mol_keyboard_code[$mol_keyboard_code["key7"] = 55] = "key7";
        $mol_keyboard_code[$mol_keyboard_code["key8"] = 56] = "key8";
        $mol_keyboard_code[$mol_keyboard_code["key9"] = 57] = "key9";
        $mol_keyboard_code[$mol_keyboard_code["A"] = 65] = "A";
        $mol_keyboard_code[$mol_keyboard_code["B"] = 66] = "B";
        $mol_keyboard_code[$mol_keyboard_code["C"] = 67] = "C";
        $mol_keyboard_code[$mol_keyboard_code["D"] = 68] = "D";
        $mol_keyboard_code[$mol_keyboard_code["E"] = 69] = "E";
        $mol_keyboard_code[$mol_keyboard_code["F"] = 70] = "F";
        $mol_keyboard_code[$mol_keyboard_code["G"] = 71] = "G";
        $mol_keyboard_code[$mol_keyboard_code["H"] = 72] = "H";
        $mol_keyboard_code[$mol_keyboard_code["I"] = 73] = "I";
        $mol_keyboard_code[$mol_keyboard_code["J"] = 74] = "J";
        $mol_keyboard_code[$mol_keyboard_code["K"] = 75] = "K";
        $mol_keyboard_code[$mol_keyboard_code["L"] = 76] = "L";
        $mol_keyboard_code[$mol_keyboard_code["M"] = 77] = "M";
        $mol_keyboard_code[$mol_keyboard_code["N"] = 78] = "N";
        $mol_keyboard_code[$mol_keyboard_code["O"] = 79] = "O";
        $mol_keyboard_code[$mol_keyboard_code["P"] = 80] = "P";
        $mol_keyboard_code[$mol_keyboard_code["Q"] = 81] = "Q";
        $mol_keyboard_code[$mol_keyboard_code["R"] = 82] = "R";
        $mol_keyboard_code[$mol_keyboard_code["S"] = 83] = "S";
        $mol_keyboard_code[$mol_keyboard_code["T"] = 84] = "T";
        $mol_keyboard_code[$mol_keyboard_code["U"] = 85] = "U";
        $mol_keyboard_code[$mol_keyboard_code["V"] = 86] = "V";
        $mol_keyboard_code[$mol_keyboard_code["W"] = 87] = "W";
        $mol_keyboard_code[$mol_keyboard_code["X"] = 88] = "X";
        $mol_keyboard_code[$mol_keyboard_code["Y"] = 89] = "Y";
        $mol_keyboard_code[$mol_keyboard_code["Z"] = 90] = "Z";
        $mol_keyboard_code[$mol_keyboard_code["metaLeft"] = 91] = "metaLeft";
        $mol_keyboard_code[$mol_keyboard_code["metaRight"] = 92] = "metaRight";
        $mol_keyboard_code[$mol_keyboard_code["select"] = 93] = "select";
        $mol_keyboard_code[$mol_keyboard_code["numpad0"] = 96] = "numpad0";
        $mol_keyboard_code[$mol_keyboard_code["numpad1"] = 97] = "numpad1";
        $mol_keyboard_code[$mol_keyboard_code["numpad2"] = 98] = "numpad2";
        $mol_keyboard_code[$mol_keyboard_code["numpad3"] = 99] = "numpad3";
        $mol_keyboard_code[$mol_keyboard_code["numpad4"] = 100] = "numpad4";
        $mol_keyboard_code[$mol_keyboard_code["numpad5"] = 101] = "numpad5";
        $mol_keyboard_code[$mol_keyboard_code["numpad6"] = 102] = "numpad6";
        $mol_keyboard_code[$mol_keyboard_code["numpad7"] = 103] = "numpad7";
        $mol_keyboard_code[$mol_keyboard_code["numpad8"] = 104] = "numpad8";
        $mol_keyboard_code[$mol_keyboard_code["numpad9"] = 105] = "numpad9";
        $mol_keyboard_code[$mol_keyboard_code["multiply"] = 106] = "multiply";
        $mol_keyboard_code[$mol_keyboard_code["add"] = 107] = "add";
        $mol_keyboard_code[$mol_keyboard_code["subtract"] = 109] = "subtract";
        $mol_keyboard_code[$mol_keyboard_code["decimal"] = 110] = "decimal";
        $mol_keyboard_code[$mol_keyboard_code["divide"] = 111] = "divide";
        $mol_keyboard_code[$mol_keyboard_code["F1"] = 112] = "F1";
        $mol_keyboard_code[$mol_keyboard_code["F2"] = 113] = "F2";
        $mol_keyboard_code[$mol_keyboard_code["F3"] = 114] = "F3";
        $mol_keyboard_code[$mol_keyboard_code["F4"] = 115] = "F4";
        $mol_keyboard_code[$mol_keyboard_code["F5"] = 116] = "F5";
        $mol_keyboard_code[$mol_keyboard_code["F6"] = 117] = "F6";
        $mol_keyboard_code[$mol_keyboard_code["F7"] = 118] = "F7";
        $mol_keyboard_code[$mol_keyboard_code["F8"] = 119] = "F8";
        $mol_keyboard_code[$mol_keyboard_code["F9"] = 120] = "F9";
        $mol_keyboard_code[$mol_keyboard_code["F10"] = 121] = "F10";
        $mol_keyboard_code[$mol_keyboard_code["F11"] = 122] = "F11";
        $mol_keyboard_code[$mol_keyboard_code["F12"] = 123] = "F12";
        $mol_keyboard_code[$mol_keyboard_code["numLock"] = 144] = "numLock";
        $mol_keyboard_code[$mol_keyboard_code["scrollLock"] = 145] = "scrollLock";
        $mol_keyboard_code[$mol_keyboard_code["semicolon"] = 186] = "semicolon";
        $mol_keyboard_code[$mol_keyboard_code["equals"] = 187] = "equals";
        $mol_keyboard_code[$mol_keyboard_code["comma"] = 188] = "comma";
        $mol_keyboard_code[$mol_keyboard_code["dash"] = 189] = "dash";
        $mol_keyboard_code[$mol_keyboard_code["period"] = 190] = "period";
        $mol_keyboard_code[$mol_keyboard_code["forwardSlash"] = 191] = "forwardSlash";
        $mol_keyboard_code[$mol_keyboard_code["graveAccent"] = 192] = "graveAccent";
        $mol_keyboard_code[$mol_keyboard_code["bracketOpen"] = 219] = "bracketOpen";
        $mol_keyboard_code[$mol_keyboard_code["slashBack"] = 220] = "slashBack";
        $mol_keyboard_code[$mol_keyboard_code["slashBackLeft"] = 226] = "slashBackLeft";
        $mol_keyboard_code[$mol_keyboard_code["bracketClose"] = 221] = "bracketClose";
        $mol_keyboard_code[$mol_keyboard_code["quoteSingle"] = 222] = "quoteSingle";
    })($mol_keyboard_code = $.$mol_keyboard_code || ($.$mol_keyboard_code = {}));
})($ || ($ = {}));
//code.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_hotkey extends $.$mol_hotkey {
            key() {
                return super.key();
            }
            keydown(event) {
                if (!event)
                    return;
                if (event.defaultPrevented)
                    return;
                let name = $.$mol_keyboard_code[event.keyCode];
                if (this.mod_ctrl() !== event.ctrlKey)
                    return;
                if (this.mod_alt() !== event.altKey)
                    return;
                if (this.mod_shift() !== event.shiftKey)
                    return;
                const handle = this.key()[name];
                if (handle)
                    handle(event);
            }
        }
        $$.$mol_hotkey = $mol_hotkey;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//hotkey.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_string extends $.$mol_view {
        dom_name() {
            return "input";
        }
        enabled() {
            return true;
        }
        minimal_height() {
            return 40;
        }
        autocomplete() {
            return false;
        }
        selection(val) {
            if (val !== undefined)
                return val;
            return [];
        }
        auto() {
            return [
                this.selection_watcher()
            ];
        }
        field() {
            return {
                ...super.field(),
                disabled: this.disabled(),
                value: this.value_changed(),
                placeholder: this.hint(),
                spellcheck: this.spellcheck(),
                autocomplete: this.autocomplete_native(),
                selectionEnd: this.selection_end(),
                selectionStart: this.selection_start()
            };
        }
        attr() {
            return {
                ...super.attr(),
                maxlength: this.length_max(),
                type: this.type()
            };
        }
        event() {
            return {
                ...super.event(),
                input: (event) => this.event_change(event),
                keydown: (event) => this.event_key_press(event)
            };
        }
        plugins() {
            return [
                this.Submit()
            ];
        }
        selection_watcher() {
            return null;
        }
        disabled() {
            return false;
        }
        value(val) {
            if (val !== undefined)
                return val;
            return "";
        }
        value_changed(val) {
            return this.value(val);
        }
        hint() {
            return " ";
        }
        spellcheck() {
            return false;
        }
        autocomplete_native() {
            return "";
        }
        selection_end() {
            return 0;
        }
        selection_start() {
            return 0;
        }
        length_max() {
            return Infinity;
        }
        type(val) {
            if (val !== undefined)
                return val;
            return "text";
        }
        event_change(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        event_key_press(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        submit(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        Submit() {
            const obj = new this.$.$mol_hotkey();
            obj.key = () => ({
                enter: (event) => this.submit(event)
            });
            return obj;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_string.prototype, "selection", null);
    __decorate([
        $.$mol_mem
    ], $mol_string.prototype, "value", null);
    __decorate([
        $.$mol_mem
    ], $mol_string.prototype, "type", null);
    __decorate([
        $.$mol_mem
    ], $mol_string.prototype, "event_change", null);
    __decorate([
        $.$mol_mem
    ], $mol_string.prototype, "event_key_press", null);
    __decorate([
        $.$mol_mem
    ], $mol_string.prototype, "submit", null);
    __decorate([
        $.$mol_mem
    ], $mol_string.prototype, "Submit", null);
    $.$mol_string = $mol_string;
})($ || ($ = {}));
//string.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/string/string.view.css", "[mol_string] {\n\tbox-sizing: border-box;\n\toutline-offset: 0;\n\tborder: none;\n\tborder-radius: var(--mol_gap_round);\n\twhite-space: nowrap;\n\toverflow: hidden;\n\ttext-overflow: ellipsis;\n\tpadding: var(--mol_gap_text);\n\ttext-align: left;\n\tposition: relative;\n\tz-index: 0;\n\tfont: inherit;\n\tflex: 1 1 auto;\n\tbackground: var(--mol_theme_hover);\n\tmin-width: 0;\n\tcolor: var(--mol_theme_control);\n}\n\n[mol_string]:disabled {\n\tbackground-color: transparent;\n\tcolor: var(--mol_theme_text);\n}\n\n[mol_string]:placeholder-shown {\n\tbackground: var(--mol_theme_field);\n\tbox-shadow: inset 0 0 0 1px var(--mol_theme_line);\n}\n\n[mol_string]:focus {\n\toutline: none;\n\tz-index: 1;\n\tcolor: var(--mol_theme_text);\n\tbackground: var(--mol_theme_field);\n\tbox-shadow: inset 0 0 0 1px var(--mol_theme_focus);\n}\n\n[mol_string]:not(:placeholder-shown):not(:focus):enabled:hover {\n\tbackground: var(--mol_theme_hover);\n}\n\n[mol_string]::-ms-clear {\n\tdisplay: none;\n}\n");
})($ || ($ = {}));
//string.view.css.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_string extends $.$mol_string {
            event_change(next) {
                if (!next)
                    return;
                this.value(next.target.value);
                this.selection_change(next);
            }
            disabled() {
                return !this.enabled();
            }
            autocomplete_native() {
                return this.autocomplete() ? 'on' : 'off';
            }
            selection_watcher() {
                return new $.$mol_dom_listener(this.$.$mol_dom_context.document, 'selectionchange', event => this.selection_change(event));
            }
            selection_change(event) {
                const el = this.dom_node();
                this.selection([
                    el.selectionStart,
                    el.selectionEnd,
                ]);
            }
            selection_start() {
                return this.selection()[0];
            }
            selection_end() {
                return this.selection()[1];
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_string.prototype, "selection_watcher", null);
        $$.$mol_string = $mol_string;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//string.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_list extends $.$mol_view {
        render_visible_only() {
            return true;
        }
        render_over() {
            return 0;
        }
        sub() {
            return this.rows();
        }
        Empty() {
            const obj = new this.$.$mol_view();
            return obj;
        }
        Gap_before() {
            const obj = new this.$.$mol_view();
            obj.style = () => ({
                paddingTop: this.gap_before()
            });
            return obj;
        }
        Gap_after() {
            const obj = new this.$.$mol_view();
            obj.style = () => ({
                paddingTop: this.gap_after()
            });
            return obj;
        }
        view_window() {
            return [
                0,
                0
            ];
        }
        rows() {
            return [];
        }
        gap_before() {
            return 0;
        }
        gap_after() {
            return 0;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_list.prototype, "Empty", null);
    __decorate([
        $.$mol_mem
    ], $mol_list.prototype, "Gap_before", null);
    __decorate([
        $.$mol_mem
    ], $mol_list.prototype, "Gap_after", null);
    $.$mol_list = $mol_list;
})($ || ($ = {}));
//list.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_support_css_overflow_anchor() {
        return this.$mol_dom_context.CSS?.supports('overflow-anchor:auto') ?? false;
    }
    $.$mol_support_css_overflow_anchor = $mol_support_css_overflow_anchor;
})($ || ($ = {}));
//css.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/list/list.view.css", "[mol_list] {\n\twill-change: contents;\n\tdisplay: flex;\n\tflex-direction: column;\n\tflex-shrink: 0;\n\tmax-width: 100%;\n\t/* display: flex;\n\talign-items: stretch;\n\talign-content: stretch; */\n\ttransition: none;\n\tmin-height: .5rem;\n}\n\n[mol_list_gap_before] ,\n[mol_list_gap_after] {\n\tdisplay: block !important;\n\tflex: none;\n\ttransition: none;\n\toverflow-anchor: none;\n}\n \n[mol_list] > * {\n\tdisplay: flex;\n}\n");
})($ || ($ = {}));
//list.view.css.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_list extends $.$mol_list {
            sub() {
                const rows = this.rows();
                return (rows.length === 0) ? [this.Empty()] : rows;
            }
            render_visible_only() {
                return this.$.$mol_support_css_overflow_anchor();
            }
            view_window() {
                const kids = this.sub();
                if (kids.length < 3)
                    return [0, kids.length];
                if (this.$.$mol_print.active())
                    return [0, kids.length];
                let [min, max] = $.$mol_mem_cached(() => this.view_window()) ?? [0, 0];
                let max2 = max = Math.min(max, kids.length);
                let min2 = min = Math.max(0, Math.min(min, max - 1));
                const anchoring = this.render_visible_only();
                const window_height = this.$.$mol_window.size().height + 40;
                const over = Math.ceil(window_height * this.render_over());
                const limit_top = -over;
                const limit_bottom = window_height + over;
                const rect = this.view_rect();
                const gap_before = $.$mol_mem_cached(() => this.gap_before()) ?? 0;
                const gap_after = $.$mol_mem_cached(() => this.gap_after()) ?? 0;
                let top = Math.ceil(rect?.top ?? 0) + gap_before;
                let bottom = Math.ceil(rect?.bottom ?? 0) - gap_after;
                if (top <= limit_top && bottom >= limit_bottom) {
                    return [min2, max2];
                }
                if (anchoring && ((bottom < limit_top) || (top > limit_bottom))) {
                    min = 0;
                    top = Math.ceil(rect?.top ?? 0);
                    while (min < (kids.length - 1)) {
                        const height = kids[min].minimal_height();
                        if (top + height >= limit_top)
                            break;
                        top += height;
                        ++min;
                    }
                    min2 = min;
                    max2 = max = min;
                    bottom = top;
                }
                let top2 = top;
                let bottom2 = bottom;
                if (anchoring && (top <= limit_top) && (bottom2 < limit_bottom)) {
                    min2 = max;
                    top2 = bottom;
                }
                if ((bottom >= limit_bottom) && (top2 >= limit_top)) {
                    max2 = min;
                    bottom2 = top;
                }
                while (bottom2 < limit_bottom && max2 < kids.length) {
                    bottom2 += kids[max2].minimal_height();
                    ++max2;
                }
                while (anchoring && ((top2 >= limit_top) && (min2 > 0))) {
                    --min2;
                    top2 -= kids[min2].minimal_height();
                }
                return [min2, max2];
            }
            gap_before() {
                const skipped = this.sub().slice(0, this.view_window()[0]);
                return Math.max(0, skipped.reduce((sum, view) => sum + view.minimal_height(), 0));
            }
            gap_after() {
                const skipped = this.sub().slice(this.view_window()[1]);
                return Math.max(0, skipped.reduce((sum, view) => sum + view.minimal_height(), 0));
            }
            sub_visible() {
                return [
                    ...this.gap_before() ? [this.Gap_before()] : [],
                    ...this.sub().slice(...this.view_window()),
                    ...this.gap_after() ? [this.Gap_after()] : [],
                ];
            }
            minimal_height() {
                return this.sub().reduce((sum, view) => {
                    try {
                        return sum + view.minimal_height();
                    }
                    catch (error) {
                        if (error instanceof Promise) {
                            $.$mol_atom2.current.subscribe(error);
                        }
                        else if ($.$mol_fail_catch(error)) {
                            console.error(error);
                        }
                        return sum;
                    }
                }, 0);
            }
            force_render(path) {
                const kids = this.rows();
                const index = kids.findIndex(item => path.has(item));
                if (index >= 0) {
                    const win = this.view_window();
                    if (index < win[0] || index >= win[1]) {
                        $.$mol_mem_cached(() => this.view_window(), [index, index + 1]);
                    }
                    kids[index].force_render(path);
                }
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_list.prototype, "sub", null);
        __decorate([
            $.$mol_mem
        ], $mol_list.prototype, "view_window", null);
        __decorate([
            $.$mol_mem
        ], $mol_list.prototype, "gap_before", null);
        __decorate([
            $.$mol_mem
        ], $mol_list.prototype, "gap_after", null);
        __decorate([
            $.$mol_mem
        ], $mol_list.prototype, "sub_visible", null);
        __decorate([
            $.$mol_mem
        ], $mol_list.prototype, "minimal_height", null);
        $$.$mol_list = $mol_list;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//list.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_labeler extends $.$mol_list {
        rows() {
            return [
                this.Label(),
                this.Content()
            ];
        }
        label() {
            return [
                this.title()
            ];
        }
        Label() {
            const obj = new this.$.$mol_view();
            obj.minimal_height = () => 16;
            obj.sub = () => this.label();
            return obj;
        }
        content() {
            return [];
        }
        Content() {
            const obj = new this.$.$mol_view();
            obj.minimal_height = () => 24;
            obj.sub = () => this.content();
            return obj;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_labeler.prototype, "Label", null);
    __decorate([
        $.$mol_mem
    ], $mol_labeler.prototype, "Content", null);
    $.$mol_labeler = $mol_labeler;
})($ || ($ = {}));
//labeler.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/labeler/labeler.view.css", "[mol_labeler] {\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: stretch;\n\tcursor: inherit;\n}\n\n[mol_labeler_label] {\n\tcolor: var(--mol_theme_shade);\n\tline-height: 1rem;\n}\n\n[mol_labeler_content] {\n\tdisplay: flex;\n}\n");
})($ || ($ = {}));
//labeler.view.css.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_form_field extends $.$mol_labeler {
        label() {
            return [
                this.name(),
                this.Bid()
            ];
        }
        Content() {
            return this.control();
        }
        name() {
            return "";
        }
        bid() {
            return "";
        }
        Bid() {
            const obj = new this.$.$mol_view();
            obj.sub = () => [
                this.bid()
            ];
            return obj;
        }
        control() {
            return null;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_form_field.prototype, "Bid", null);
    $.$mol_form_field = $mol_form_field;
})($ || ($ = {}));
//field.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/form/field/field.view.css", "[mol_form_field] {\n\talign-items: stretch;\n}\n\n[mol_form_field_bid] {\n\tcolor: var(--mol_theme_focus);\n\tmargin-left: 1rem;\n\tdisplay: inline-block;\n}\n");
})($ || ($ = {}));
//field.view.css.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_row extends $.$mol_view {
    }
    $.$mol_row = $mol_row;
})($ || ($ = {}));
//row.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/row/row.view.css", "[mol_row] {\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\talign-items: flex-start;\n\talign-content: flex-start;\n\tjustify-content: flex-start;\n\tpadding: .375rem;\n\tflex: 0 0 auto;\n\tbox-sizing: border-box;\n\tmax-width: 100%;\n}\n\n[mol_row] > * {\n\tmargin: .375rem;\n\tmax-width: 100%;\n}\n");
})($ || ($ = {}));
//row.view.css.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_form extends $.$mol_view {
        submit_blocked() {
            return false;
        }
        event() {
            return {
                ...super.event(),
                keydown: (event) => this.keydown(event)
            };
        }
        submit(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        sub() {
            return [
                this.Bar_fields(),
                this.Bar_buttons()
            ];
        }
        keydown(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        form_fields() {
            return [];
        }
        Bar_fields() {
            const obj = new this.$.$mol_view();
            obj.sub = () => this.form_fields();
            return obj;
        }
        buttons() {
            return [];
        }
        Bar_buttons() {
            const obj = new this.$.$mol_row();
            obj.sub = () => this.buttons();
            return obj;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_form.prototype, "submit", null);
    __decorate([
        $.$mol_mem
    ], $mol_form.prototype, "keydown", null);
    __decorate([
        $.$mol_mem
    ], $mol_form.prototype, "Bar_fields", null);
    __decorate([
        $.$mol_mem
    ], $mol_form.prototype, "Bar_buttons", null);
    $.$mol_form = $mol_form;
})($ || ($ = {}));
//form.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/form/form.css", "[mol_form] {\n\tdisplay: flex;\n\tflex-direction: column;\n}\n\n[mol_form_bar_fields] {\n\tdisplay: flex;\n\tflex-direction: column;\n}\n\n[mol_form_bar_fields] > * {\n\tmargin: var(--mol_gap_block);\n}\n\n[mol_form_bar_buttons] {\n\tbox-shadow: none;\n\tpadding: 0;\n}\n\n[mol_form_bar_buttons] > * {\n\tflex: 1 1 auto;\n\tmargin: var(--mol_gap_block);\n}\n");
})($ || ($ = {}));
//form.css.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_form extends $.$mol_form {
            submit_blocked() {
                return this.form_fields().some(field => field.bid());
            }
            keydown(next) {
                if (next.ctrlKey && next.keyCode === $.$mol_keyboard_code.enter && !this.submit_blocked())
                    this.submit(event);
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_form.prototype, "submit_blocked", null);
        $$.$mol_form = $mol_form;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//form.view.js.map
;
"use strict";
var $;
(function ($) {
    class $hyoo_talks_person_settings extends $.$mol_page {
        person() {
            const obj = new this.$.$hyoo_talks_person();
            return obj;
        }
        title() {
            return this.$.$mol_locale.text('$hyoo_talks_person_settings_title');
        }
        body() {
            return [
                this.Form()
            ];
        }
        name(val) {
            if (val !== undefined)
                return val;
            return "";
        }
        Name() {
            const obj = new this.$.$mol_string();
            obj.value = (val) => this.name(val);
            return obj;
        }
        Name_field() {
            const obj = new this.$.$mol_form_field();
            obj.name = () => this.$.$mol_locale.text('$hyoo_talks_person_settings_Name_field_name');
            obj.control = () => this.Name();
            return obj;
        }
        avatar(val) {
            if (val !== undefined)
                return val;
            return "";
        }
        Avatar() {
            const obj = new this.$.$mol_string();
            obj.value = (val) => this.avatar(val);
            return obj;
        }
        Avatar_field() {
            const obj = new this.$.$mol_form_field();
            obj.name = () => this.$.$mol_locale.text('$hyoo_talks_person_settings_Avatar_field_name');
            obj.control = () => this.Avatar();
            return obj;
        }
        background(val) {
            if (val !== undefined)
                return val;
            return "";
        }
        Background() {
            const obj = new this.$.$mol_string();
            obj.value = (val) => this.background(val);
            return obj;
        }
        Background_field() {
            const obj = new this.$.$mol_form_field();
            obj.name = () => this.$.$mol_locale.text('$hyoo_talks_person_settings_Background_field_name');
            obj.control = () => this.Background();
            return obj;
        }
        Form() {
            const obj = new this.$.$mol_form();
            obj.form_fields = () => [
                this.Name_field(),
                this.Avatar_field(),
                this.Background_field()
            ];
            return obj;
        }
    }
    __decorate([
        $.$mol_mem
    ], $hyoo_talks_person_settings.prototype, "person", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_talks_person_settings.prototype, "name", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_talks_person_settings.prototype, "Name", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_talks_person_settings.prototype, "Name_field", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_talks_person_settings.prototype, "avatar", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_talks_person_settings.prototype, "Avatar", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_talks_person_settings.prototype, "Avatar_field", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_talks_person_settings.prototype, "background", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_talks_person_settings.prototype, "Background", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_talks_person_settings.prototype, "Background_field", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_talks_person_settings.prototype, "Form", null);
    $.$hyoo_talks_person_settings = $hyoo_talks_person_settings;
})($ || ($ = {}));
//settings.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        const { rem } = $.$mol_style_unit;
        $.$mol_style_define($$.$hyoo_talks_person_settings, {
            flex: {
                basis: rem(26),
                shrink: 0,
            },
            Form: {
                padding: $.$mol_gap.block,
            },
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//settings.view.css.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $hyoo_talks_person_settings extends $.$hyoo_talks_person_settings {
            name(next) {
                return this.person()?.name(next) ?? '';
            }
            background(next) {
                return this.person()?.background(next) ?? '';
            }
            avatar(next) {
                return this.person()?.avatar(next);
            }
        }
        $$.$hyoo_talks_person_settings = $hyoo_talks_person_settings;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//settings.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_speck extends $.$mol_view {
        attr() {
            return {
                ...super.attr(),
                mol_theme: "$mol_theme_accent"
            };
        }
        style() {
            return {
                ...super.style(),
                minHeight: "1em"
            };
        }
        sub() {
            return [
                this.value()
            ];
        }
        value() {
            return null;
        }
    }
    $.$mol_speck = $mol_speck;
})($ || ($ = {}));
//speck.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/speck/speck.view.css", "[mol_speck] {\n\tfont-size: .75rem;\n\tborder-radius: 1rem;\n\tmargin: -.75em .5em;\n\talign-self: flex-start;\n\tmin-height: 1em;\n\tmin-width: .5em;\n\tvertical-align: sub;\n\tpadding: .25em .5em;\n\tposition: absolute;\n\tz-index: 2;\n    text-align: center;\n    line-height: 1;\n    display: inline-block;\n\ttext-shadow: 1px 1px 0 black;\n}\n");
})($ || ($ = {}));
//speck.view.css.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_button extends $.$mol_view {
        enabled() {
            return true;
        }
        minimal_height() {
            return 40;
        }
        minimal_width() {
            return 40;
        }
        click(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        event_click(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        event() {
            return {
                ...super.event(),
                click: (event) => this.event_activate(event),
                keydown: (event) => this.event_key_press(event)
            };
        }
        attr() {
            return {
                ...super.attr(),
                disabled: this.disabled(),
                role: "button",
                tabindex: this.tab_index(),
                title: this.hint_or_error()
            };
        }
        sub() {
            return [
                this.title()
            ];
        }
        Speck() {
            const obj = new this.$.$mol_speck();
            return obj;
        }
        event_activate(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        event_key_press(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        disabled() {
            return false;
        }
        tab_index() {
            return 0;
        }
        hint() {
            return "";
        }
        hint_or_error() {
            return this.hint();
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_button.prototype, "click", null);
    __decorate([
        $.$mol_mem
    ], $mol_button.prototype, "event_click", null);
    __decorate([
        $.$mol_mem
    ], $mol_button.prototype, "Speck", null);
    __decorate([
        $.$mol_mem
    ], $mol_button.prototype, "event_activate", null);
    __decorate([
        $.$mol_mem
    ], $mol_button.prototype, "event_key_press", null);
    $.$mol_button = $mol_button;
})($ || ($ = {}));
//button.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/button/button.view.css", "[mol_button] {\n\tborder: none;\n\tfont: inherit;\n\tdisplay: inline-flex;\n\tflex-shrink: 0;\n\ttext-decoration: inherit;\n\tcursor: inherit;\n\tposition: relative;\n\tbox-sizing: border-box;\n\tword-break: normal;\n\tcursor: default;\n\tuser-select: none;\n\tborder-radius: var(--mol_gap_round);\n}\n[mol_button]:focus {\n\toutline: none;\n}\n");
})($ || ($ = {}));
//button.view.css.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_button extends $.$mol_button {
            fiber(next = null) { return next; }
            disabled() {
                return !this.enabled();
            }
            event_activate(next) {
                if (!next)
                    return;
                if (!this.enabled())
                    return;
                this.fiber($.$mol_fiber.current);
                this.event_click(next);
                this.click(next);
                if (this.fiber() === $.$mol_fiber.current) {
                    this.fiber(null);
                }
            }
            event_key_press(event) {
                if (event.keyCode === $.$mol_keyboard_code.enter) {
                    return this.event_activate(event);
                }
            }
            tab_index() {
                return this.enabled() ? super.tab_index() : -1;
            }
            error() {
                try {
                    this.fiber()?.get();
                    return '';
                }
                catch (error) {
                    if (error instanceof Promise) {
                        return $.$mol_fail_hidden(error);
                    }
                    return String(error.message ?? error);
                }
            }
            hint_or_error() {
                return this.error() || super.hint_or_error();
            }
            sub_visible() {
                return [
                    ...this.error() ? [this.Speck()] : [],
                    ...this.sub(),
                ];
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_button.prototype, "fiber", null);
        $$.$mol_button = $mol_button;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//button.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_button_typed extends $.$mol_button {
    }
    $.$mol_button_typed = $mol_button_typed;
})($ || ($ = {}));
//typed.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/button/typed/typed.view.css", "[mol_button_typed] {\n\tdisplay: inline-block;\n\talign-content: center;\n\talign-items: center;\n\tvertical-align: middle;\n\ttext-align: center;\n\tpadding: var(--mol_gap_text);\n\tborder-radius: var(--mol_gap_round);\n}\n\n[mol_button_typed][disabled] {\n\tcolor: var(--mol_theme_text);\n\tpointer-events: none;\n}\n\n[mol_button_typed]:hover ,\n[mol_button_typed]:focus {\n\tcursor: pointer;\n\tbackground-color: var(--mol_theme_hover);\n}\n");
})($ || ($ = {}));
//typed.view.css.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_button_minor extends $.$mol_button_typed {
    }
    $.$mol_button_minor = $mol_button_minor;
})($ || ($ = {}));
//minor.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/button/minor/minor.view.css", "[mol_button_minor] {\n\tcolor: var(--mol_theme_control);\n}\n");
})($ || ($ = {}));
//minor.view.css.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_check extends $.$mol_button_minor {
        attr() {
            return {
                ...super.attr(),
                mol_check_checked: this.checked(),
                "aria-checked": this.checked(),
                role: "checkbox"
            };
        }
        sub() {
            return [
                this.Icon(),
                this.label()
            ];
        }
        checked(val) {
            if (val !== undefined)
                return val;
            return false;
        }
        Icon() {
            return null;
        }
        title() {
            return "";
        }
        Title() {
            const obj = new this.$.$mol_view();
            obj.sub = () => [
                this.title()
            ];
            return obj;
        }
        label() {
            return [
                this.Title()
            ];
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_check.prototype, "checked", null);
    __decorate([
        $.$mol_mem
    ], $mol_check.prototype, "Title", null);
    $.$mol_check = $mol_check;
})($ || ($ = {}));
//check.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_maybe(value) {
        return (value == null) ? [] : [value];
    }
    $.$mol_maybe = $mol_maybe;
})($ || ($ = {}));
//maybe.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/check/check.css", "[mol_check] {\n\tflex: 0 0 auto;\n\tjustify-content: flex-start;\n\talign-content: center;\n\talign-items: flex-start;\n\tborder: none;\n\tfont-weight: inherit;\n\tbox-shadow: none;\n\ttext-align: left;\n\tpadding: var(--mol_gap_text);\n\tdisplay: inline-flex;\n\tflex-wrap: nowrap;\n}\n");
})($ || ($ = {}));
//check.css.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_check extends $.$mol_check {
            click(next) {
                if (next?.defaultPrevented)
                    return;
                this.checked(!this.checked());
                if (next)
                    next.preventDefault();
            }
            sub() {
                return [
                    ...$.$mol_maybe(this.Icon()),
                    ...this.label(),
                ];
            }
            label() {
                return this.title() ? super.label() : [];
            }
        }
        $$.$mol_check = $mol_check;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//check.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_link extends $.$mol_view {
        dom_name() {
            return "a";
        }
        attr() {
            return {
                ...super.attr(),
                href: this.uri(),
                title: this.hint(),
                target: this.target(),
                download: this.file_name(),
                mol_link_current: this.current()
            };
        }
        sub() {
            return [
                this.title()
            ];
        }
        arg() {
            return {};
        }
        event() {
            return {
                ...super.event(),
                click: (event) => this.click(event)
            };
        }
        uri() {
            return "";
        }
        hint() {
            return "";
        }
        target() {
            return "_self";
        }
        file_name() {
            return "";
        }
        current() {
            return false;
        }
        event_click(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        click(event) {
            return this.event_click(event);
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_link.prototype, "event_click", null);
    $.$mol_link = $mol_link;
})($ || ($ = {}));
//link.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_state_arg extends $.$mol_object {
        prefix;
        static href(next) {
            return next || process.argv.slice(2).join(' ');
        }
        static dict(next) {
            if (next !== void 0)
                this.href(this.make_link(next));
            var href = this.href();
            var chunks = href.split(' ');
            var params = {};
            chunks.forEach(chunk => {
                if (!chunk)
                    return;
                var vals = chunk.split('=').map(decodeURIComponent);
                params[vals.shift()] = vals.join('=');
            });
            return params;
        }
        static value(key, next) {
            if (next === void 0)
                return this.dict()[key] ?? null;
            this.href(this.link({ [key]: next }));
            return next;
        }
        static link(next) {
            var params = {};
            var prev = this.dict();
            for (var key in prev) {
                params[key] = prev[key];
            }
            for (var key in next) {
                params[key] = next[key];
            }
            return this.make_link(params);
        }
        static make_link(next) {
            var chunks = [];
            for (var key in next) {
                if (null == next[key])
                    continue;
                chunks.push([key].concat(next[key]).map(encodeURIComponent).join('='));
            }
            return chunks.join(' ');
        }
        constructor(prefix = '') {
            super();
            this.prefix = prefix;
        }
        value(key, next) {
            return this.constructor.value(this.prefix + key, next);
        }
        sub(postfix) {
            return new this.constructor(this.prefix + postfix + '.');
        }
        link(next) {
            var prefix = this.prefix;
            var dict = {};
            for (var key in next) {
                dict[prefix + key] = next[key];
            }
            return this.constructor.link(dict);
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_state_arg, "href", null);
    __decorate([
        $.$mol_mem
    ], $mol_state_arg, "dict", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_state_arg, "value", null);
    $.$mol_state_arg = $mol_state_arg;
})($ || ($ = {}));
//arg.node.js.map
;
"use strict";
var $;
(function ($) {
    const { rem } = $.$mol_style_unit;
    $.$mol_style_define($.$mol_link, {
        textDecoration: 'none',
        color: $.$mol_theme.control,
        stroke: 'currentcolor',
        cursor: 'pointer',
        padding: $.$mol_gap.text,
        boxSizing: 'border-box',
        position: 'relative',
        minWidth: rem(2.5),
        border: {
            radius: $.$mol_gap.round,
        },
        ':hover': {
            background: {
                color: $.$mol_theme.hover,
            },
        },
        ':focus': {
            outline: 'none',
            background: {
                color: $.$mol_theme.hover,
            }
        },
        ':focus-within': {
            outline: 'none',
            background: {
                color: $.$mol_theme.hover,
            }
        },
        '@': {
            mol_link_current: {
                'true': {
                    color: $.$mol_theme.focus,
                    textShadow: '0 0',
                }
            }
        },
    });
})($ || ($ = {}));
//link.view.css.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_link extends $.$mol_link {
            uri() {
                const arg = this.arg();
                const uri = new this.$.$mol_state_arg(this.state_key()).link(arg);
                if (uri !== this.$.$mol_state_arg.href())
                    return uri;
                const arg2 = {};
                for (let i in arg)
                    arg2[i] = null;
                return new this.$.$mol_state_arg(this.state_key()).link(arg2);
            }
            uri_native() {
                const base = this.$.$mol_state_arg.href();
                return new URL(this.uri(), base);
            }
            current() {
                const base = this.$.$mol_state_arg.href();
                const target = this.uri_native().toString();
                if (base === target)
                    return true;
                const args = this.arg();
                const keys = Object.keys(args).filter(key => args[key] != null);
                if (keys.length === 0)
                    return false;
                for (const key of keys) {
                    if (this.$.$mol_state_arg.value(key) !== args[key])
                        return false;
                }
                return true;
            }
            event_click(event) {
                if (!event || event.defaultPrevented)
                    return;
                this.focused(false);
            }
            file_name() {
                return null;
            }
            minimal_height() {
                return Math.max(super.minimal_height(), 40);
            }
            target() {
                return (this.uri_native().origin === $.$mol_dom_context.location.origin) ? '_self' : '_blank';
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_link.prototype, "uri", null);
        __decorate([
            $.$mol_mem
        ], $mol_link.prototype, "uri_native", null);
        __decorate([
            $.$mol_mem
        ], $mol_link.prototype, "current", null);
        $$.$mol_link = $mol_link;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//link.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_image extends $.$mol_view {
        dom_name() {
            return "img";
        }
        field() {
            return {
                ...super.field(),
                src: this.uri(),
                alt: this.title(),
                loading: this.loading()
            };
        }
        uri() {
            return "";
        }
        loading() {
            return "lazy";
        }
    }
    $.$mol_image = $mol_image;
})($ || ($ = {}));
//image.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/image/image.view.css", "[mol_image] {\n\tborder-radius: var(--mol_gap_round);\n\toverflow: hidden;\n\tflex: 0 1 auto;\n\tmax-width: 100%;\n\tobject-fit: cover;\n}\n");
})($ || ($ = {}));
//image.view.css.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_paragraph extends $.$mol_view {
        line_height() {
            return 24;
        }
        letter_width() {
            return 7;
        }
        width_limit() {
            return Infinity;
        }
        sub() {
            return [
                this.title()
            ];
        }
    }
    $.$mol_paragraph = $mol_paragraph;
})($ || ($ = {}));
//paragraph.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_paragraph extends $.$mol_paragraph {
            maximal_width() {
                let width = 0;
                const letter = this.letter_width();
                for (const kid of this.sub()) {
                    if (!kid)
                        continue;
                    if (kid instanceof $.$mol_view) {
                        width += kid.maximal_width();
                    }
                    else if (typeof kid !== 'object') {
                        width += String(kid).length * letter;
                    }
                }
                return width;
            }
            width_limit() {
                return this.$.$mol_window.size().width;
            }
            minimal_width() {
                return this.letter_width();
            }
            row_width() {
                return Math.max(Math.min(this.width_limit(), this.maximal_width()), this.letter_width());
            }
            minimal_height() {
                return Math.max(1, Math.ceil(this.maximal_width() / this.row_width())) * this.line_height();
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_paragraph.prototype, "maximal_width", null);
        __decorate([
            $.$mol_mem
        ], $mol_paragraph.prototype, "row_width", null);
        __decorate([
            $.$mol_mem
        ], $mol_paragraph.prototype, "minimal_height", null);
        $$.$mol_paragraph = $mol_paragraph;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//paragraph.view.js.map
;
"use strict";
var $;
(function ($) {
    class $hyoo_talks_person_avatar extends $.$mol_link {
        person() {
            const obj = new this.$.$hyoo_talks_person();
            return obj;
        }
        current() {
            return false;
        }
        sub() {
            return [
                this.Image(),
                this.Name()
            ];
        }
        image() {
            return "";
        }
        Image() {
            const obj = new this.$.$mol_image();
            obj.title = () => "";
            obj.uri = () => this.image();
            return obj;
        }
        Online() {
            const obj = new this.$.$mol_speck();
            return obj;
        }
        name() {
            return "";
        }
        name_content() {
            return [
                this.Online(),
                this.name()
            ];
        }
        Name() {
            const obj = new this.$.$mol_paragraph();
            obj.sub = () => this.name_content();
            return obj;
        }
    }
    __decorate([
        $.$mol_mem
    ], $hyoo_talks_person_avatar.prototype, "person", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_talks_person_avatar.prototype, "Image", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_talks_person_avatar.prototype, "Online", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_talks_person_avatar.prototype, "Name", null);
    $.$hyoo_talks_person_avatar = $hyoo_talks_person_avatar;
})($ || ($ = {}));
//avatar.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        const { rem } = $.$mol_style_unit;
        $.$mol_style_define($$.$hyoo_talks_person_avatar, {
            padding: 0,
            Image: {
                width: rem(2.5),
                height: rem(2.5),
                flex: 'none',
                border: {
                    radius: $.$mol_gap.round,
                },
            },
            Name: {
                padding: $.$mol_gap.text,
            },
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//avatar.view.css.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $hyoo_talks_person_avatar extends $.$hyoo_talks_person_avatar {
            name() {
                return this.person()?.name() ?? '';
            }
            image() {
                return this.person()?.avatar() ||
                    `https://gravatar.com/avatar/${this.person()?.id()}?d=robohash`;
            }
            uri() {
                const talkers = [
                    this.person()?.id() ?? '',
                    this.person()?.domain().user().id() ?? '',
                ];
                talkers.sort();
                return `#chat=${talkers.join('-')}`;
            }
            name_content() {
                return [
                    ...this.person()?.online_near() ? [this.Online()] : [],
                    this.name(),
                ];
            }
        }
        __decorate([
            $.$mol_mem
        ], $hyoo_talks_person_avatar.prototype, "uri", null);
        $$.$hyoo_talks_person_avatar = $hyoo_talks_person_avatar;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//avatar.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_dimmer extends $.$mol_paragraph {
        haystack() {
            return "";
        }
        needle() {
            return "";
        }
        sub() {
            return this.parts();
        }
        Low(id) {
            const obj = new this.$.$mol_paragraph();
            obj.sub = () => [
                this.string(id)
            ];
            return obj;
        }
        High(id) {
            const obj = new this.$.$mol_paragraph();
            obj.sub = () => [
                this.string(id)
            ];
            return obj;
        }
        parts() {
            return [];
        }
        string(id) {
            return "";
        }
    }
    __decorate([
        $.$mol_mem_key
    ], $mol_dimmer.prototype, "Low", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_dimmer.prototype, "High", null);
    $.$mol_dimmer = $mol_dimmer;
})($ || ($ = {}));
//dimmer.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/dimmer/dimmer.view.css", "[mol_dimmer] {\n\tdisplay: block;\n}\n\n[mol_dimmer_low] {\n\tdisplay: inline;\n\topacity: 0.66;\n}\n\n[mol_dimmer_high] {\n\tdisplay: inline;\n\tcolor: var(--mol_theme_focus);\n\ttext-shadow: 0 0;\n}\n");
})($ || ($ = {}));
//dimmer.view.css.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_dimmer extends $.$mol_dimmer {
            parts() {
                const needle = this.needle();
                if (needle.length < 2)
                    return [this.haystack()];
                let chunks = [];
                let strings = this.strings();
                for (let index = 0; index < strings.length; index++) {
                    if (strings[index] === '')
                        continue;
                    chunks.push((index % 2) ? this.High(index) : this.Low(index));
                }
                return chunks;
            }
            strings() {
                const options = this.needle().split(/\s+/g).filter(Boolean);
                if (!options.length)
                    return [this.haystack()];
                const variants = { ...options };
                const regexp = $.$mol_regexp.from({ needle: variants }, { ignoreCase: true });
                return this.haystack().split(regexp);
            }
            string(index) {
                return this.strings()[index];
            }
            *view_find(check, path = []) {
                if (check(this, this.haystack())) {
                    yield [...path, this];
                }
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_dimmer.prototype, "strings", null);
        $$.$mol_dimmer = $mol_dimmer;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//dimmer.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_text_code_token extends $.$mol_dimmer {
        attr() {
            return {
                ...super.attr(),
                mol_text_code_token_type: this.type()
            };
        }
        type() {
            return "";
        }
    }
    $.$mol_text_code_token = $mol_text_code_token;
    class $mol_text_code_token_link extends $mol_text_code_token {
        dom_name() {
            return "a";
        }
        type() {
            return "code-link";
        }
        attr() {
            return {
                ...super.attr(),
                href: this.haystack(),
                target: "_blank"
            };
        }
        haystack() {
            return "";
        }
    }
    $.$mol_text_code_token_link = $mol_text_code_token_link;
})($ || ($ = {}));
//token.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        const { hsla } = $.$mol_style_func;
        $.$mol_style_define($.$mol_text_code_token, {
            display: 'inline',
            textDecoration: 'none',
            '@': {
                mol_text_code_token_type: {
                    'code-keyword': {
                        color: hsla(0, 70, 50, 1),
                    },
                    'code-field': {
                        color: hsla(300, 70, 50, 1),
                    },
                    'code-tag': {
                        color: hsla(330, 70, 50, 1),
                    },
                    'code-global': {
                        color: hsla(30, 80, 50, 1),
                    },
                    'code-decorator': {
                        color: hsla(180, 40, 50, 1),
                    },
                    'code-punctuation': {
                        color: hsla(0, 0, 50, 1),
                    },
                    'code-string': {
                        color: hsla(90, 40, 50, 1),
                    },
                    'code-number': {
                        color: hsla(60, 70, 50, 1),
                    },
                    'code-call': {
                        color: hsla(270, 60, 50, 1),
                    },
                    'code-link': {
                        color: hsla(210, 60, 50, 1),
                    },
                    'code-comment-inline': {
                        opacity: .5,
                    },
                    'code-comment-block': {
                        opacity: .5,
                    },
                    'code-docs': {
                        opacity: .75,
                    },
                },
            }
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//token.view.css.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_text_code_row extends $.$mol_paragraph {
        text() {
            return "";
        }
        minimal_height() {
            return 24;
        }
        numb_showed() {
            return true;
        }
        Numb() {
            const obj = new this.$.$mol_view();
            obj.sub = () => [
                this.numb()
            ];
            return obj;
        }
        Token(id) {
            const obj = new this.$.$mol_text_code_token();
            obj.type = () => this.token_type(id);
            obj.haystack = () => this.token_text(id);
            obj.needle = () => this.highlight();
            return obj;
        }
        Token_link(id) {
            const obj = new this.$.$mol_text_code_token_link();
            obj.haystack = () => this.token_text(id);
            obj.needle = () => this.highlight();
            return obj;
        }
        numb() {
            return 0;
        }
        token_type(id) {
            return "";
        }
        token_text(id) {
            return "";
        }
        highlight() {
            return "";
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_text_code_row.prototype, "Numb", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_text_code_row.prototype, "Token", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_text_code_row.prototype, "Token_link", null);
    $.$mol_text_code_row = $mol_text_code_row;
})($ || ($ = {}));
//row.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_syntax2 {
        lexems;
        constructor(lexems) {
            this.lexems = lexems;
            for (let name in lexems) {
                this.rules.push({
                    name: name,
                    regExp: lexems[name],
                    size: RegExp('^$|' + lexems[name].source).exec('').length - 1,
                });
            }
            const parts = '(' + this.rules.map(rule => rule.regExp.source).join(')|(') + ')';
            this.regexp = RegExp(`([\\s\\S]*?)(?:(${parts})|$(?![^]))`, 'gm');
        }
        rules = [];
        regexp;
        tokenize(text, handle) {
            let end = 0;
            lexing: while (end < text.length) {
                const start = end;
                this.regexp.lastIndex = start;
                var found = this.regexp.exec(text);
                end = this.regexp.lastIndex;
                if (start === end)
                    throw new Error('Empty token');
                var prefix = found[1];
                if (prefix)
                    handle('', prefix, [], start);
                var suffix = found[2];
                if (!suffix)
                    continue;
                let offset = 4;
                for (let rule of this.rules) {
                    if (found[offset - 1]) {
                        handle(rule.name, suffix, found.slice(offset, offset + rule.size), start + prefix.length);
                        continue lexing;
                    }
                    offset += rule.size + 1;
                }
                $.$mol_fail(new Error('$mol_syntax2 is broken'));
            }
        }
        parse(text, handlers) {
            this.tokenize(text, (name, ...args) => handlers[name](...args));
        }
    }
    $.$mol_syntax2 = $mol_syntax2;
})($ || ($ = {}));
//syntax2.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_syntax2_md_flow = new $.$mol_syntax2({
        'quote': /^((?:(?:> )(?:[^]*?)$(\r?\n?))+)([\n\r]*)/,
        'header': /^(#+)(\s*)(.*?)$([\n\r]*)/,
        'list': /^((?:(?:\s?[*+-]|\d+\.)\s+(?:[^]*?)$(?:\r?\n?))+)((?:\r?\n)*)/,
        'code': /^(```\s*)(\w*)[\r\n]+([^]*?)^(```)$([\n\r]*)/,
        'code-indent': /^((?:(?:  |\t)(?:[^]*?)$([\n\r]*))+)/,
        'table': /((?:^\|.+?$\r?\n)+)([\n\r]*)/,
        'block': /^(.*?(?:\r?\n.+?)*)$((?:\r?\n)*)/,
    });
    $.$mol_syntax2_md_line = new $.$mol_syntax2({
        'strong': /\*\*(.+?)\*\*/,
        'emphasis': /\*(?!\s)(.+?)\*/,
        'code3': /```(.+?)```/,
        'code': /`(.+?)`/,
        'strike': /~~(.+?)~~/,
        'text-link': /\[(.*?(?:\[.*?\].*?)*)\]\((.*?)\)/,
        'image-link': /!\[([^\[\]]*?)\]\((.*?)\)/,
    });
    $.$mol_syntax2_md_code = new $.$mol_syntax2({
        'code-docs': /\/\/\/.*?$/,
        'code-comment-block': /(?:\/\*[^]*?\*\/|\/\+[^]*?\+\/|<![^]*?>)/,
        'code-link': /(?:\w+:|#|\?|\/)\S+?(?=\s|\\\\|""|$)/,
        'code-comment-inline': /\/\/.*?$/,
        'code-string': /(?:".*?"|'.*?'|`.*?`|\/.+?\/[gmi]*\b|(?:^|[ \t])\\[^\n]*\n)/,
        'code-number': /[+-]?(?:\d*\.)?\d+\w*/,
        'code-call': /\.?\w+(?=\()/,
        'code-field': /(?:\.\w+|[\w-]+\??\s*:(?!\/\/))/,
        'code-keyword': /\b(throw|readonly|unknown|keyof|typeof|never|from|class|interface|type|function|extends|implements|module|namespace|import|export|include|require|var|let|const|for|do|while|until|in|of|new|if|then|else|switch|case|this|return|async|await|try|catch|break|continue|get|set|public|private|protected|string|boolean|number|null|undefined|true|false|void)\b/,
        'code-global': /[$]+\w*|\b[A-Z][a-z0-9]+[A-Z]\w*/,
        'code-decorator': /@\s*\S+/,
        'code-tag': /<\/?[\w-]+\/?>?|&\w+;/,
        'code-punctuation': /[\-\[\]\{\}\(\)<=>`~!\?@#%&\*_\+\\\/\|'";:\.,\^]+/,
    });
})($ || ($ = {}));
//md.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        const { rem } = $.$mol_style_unit;
        $.$mol_style_define($$.$mol_text_code_row, {
            display: 'block',
            Numb: {
                textAlign: 'right',
                color: $.$mol_theme.shade,
                width: rem(3),
                padding: {
                    right: rem(1.5),
                },
                margin: {
                    left: rem(-3),
                },
                display: 'inline-block',
                whiteSpace: 'nowrap',
                userSelect: 'none',
            },
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//row.view.css.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_text_code_row extends $.$mol_text_code_row {
            maximal_width() {
                return this.text().length * this.letter_width();
            }
            tokens(path) {
                const tokens = [];
                const text = (path.length > 0)
                    ? this.tokens(path.slice(0, path.length - 1))[path[path.length - 1]].found.slice(1, -1)
                    : this.text();
                this.$.$mol_syntax2_md_code.tokenize(text, (name, found, chunks) => tokens.push({ name, found, chunks }));
                return tokens;
            }
            sub() {
                return [
                    ...this.numb_showed() ? [this.Numb()] : [],
                    ...this.row_content([])
                ];
            }
            row_content(path) {
                return this.tokens(path).map((t, i) => this.Token([...path, i]));
            }
            Token(path) {
                return this.token_type(path) === 'code-link' ? this.Token_link(path) : super.Token(path);
            }
            token_type(path) {
                return this.tokens([...path.slice(0, path.length - 1)])[path[path.length - 1]].name;
            }
            token_content(path) {
                const tokens = this.tokens([...path.slice(0, path.length - 1)]);
                const token = tokens[path[path.length - 1]];
                switch (token.name) {
                    case 'code-string': return [
                        token.found[0],
                        ...this.row_content(path),
                        token.found[token.found.length - 1],
                    ];
                    default: return [token.found];
                }
            }
            token_text(path) {
                const tokens = this.tokens([...path.slice(0, path.length - 1)]);
                const token = tokens[path[path.length - 1]];
                return token.found;
            }
            *view_find(check, path = []) {
                if (check(this, this.text())) {
                    yield [...path, this];
                }
            }
        }
        __decorate([
            $.$mol_mem_key
        ], $mol_text_code_row.prototype, "tokens", null);
        __decorate([
            $.$mol_mem_key
        ], $mol_text_code_row.prototype, "row_content", null);
        __decorate([
            $.$mol_mem_key
        ], $mol_text_code_row.prototype, "token_type", null);
        __decorate([
            $.$mol_mem_key
        ], $mol_text_code_row.prototype, "token_content", null);
        __decorate([
            $.$mol_mem_key
        ], $mol_text_code_row.prototype, "token_text", null);
        $$.$mol_text_code_row = $mol_text_code_row;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//row.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_text_code extends $.$mol_list {
        attr() {
            return {
                ...super.attr(),
                mol_text_code_sidebar_showed: this.sidebar_showed()
            };
        }
        text() {
            return "";
        }
        text_lines() {
            return [];
        }
        Row(id) {
            const obj = new this.$.$mol_text_code_row();
            obj.numb_showed = () => this.sidebar_showed();
            obj.numb = () => this.row_numb(id);
            obj.text = () => this.row_text(id);
            obj.highlight = () => this.highlight();
            return obj;
        }
        sidebar_showed() {
            return false;
        }
        row_numb(id) {
            return 0;
        }
        row_text(id) {
            return "";
        }
        highlight() {
            return "";
        }
    }
    __decorate([
        $.$mol_mem_key
    ], $mol_text_code.prototype, "Row", null);
    $.$mol_text_code = $mol_text_code;
})($ || ($ = {}));
//code.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        const { rem } = $.$mol_style_unit;
        $.$mol_style_define($$.$mol_text_code, {
            padding: $.$mol_gap.text,
            whiteSpace: 'pre-wrap',
            font: {
                family: 'monospace',
            },
            '@': {
                'mol_text_code_sidebar_showed': {
                    true: {
                        margin: {
                            left: rem(3),
                        },
                    },
                },
            },
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//code.view.css.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_text_code extends $.$mol_text_code {
            text_lines() {
                return this.text().split('\n');
            }
            rows() {
                return this.text_lines().map((_, index) => this.Row(index + 1));
            }
            row_text(index) {
                return this.text_lines()[index - 1];
            }
            row_numb(index) {
                return index;
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_text_code.prototype, "text_lines", null);
        __decorate([
            $.$mol_mem
        ], $mol_text_code.prototype, "rows", null);
        __decorate([
            $.$mol_mem_key
        ], $mol_text_code.prototype, "row_text", null);
        $$.$mol_text_code = $mol_text_code;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//code.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_textarea extends $.$mol_view {
        attr() {
            return {
                ...super.attr(),
                mol_textarea_clickable: this.clickable(),
                mol_textarea_sidebar_showed: this.sidebar_showed()
            };
        }
        event() {
            return {
                keydown: (event) => this.press(event),
                pointermove: (event) => this.hover(event)
            };
        }
        sub() {
            return [
                this.Edit(),
                this.View()
            ];
        }
        clickable(val) {
            if (val !== undefined)
                return val;
            return false;
        }
        sidebar_showed() {
            return false;
        }
        press(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        hover(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        value(val) {
            if (val !== undefined)
                return val;
            return "";
        }
        hint() {
            return "";
        }
        enabled() {
            return true;
        }
        length_max() {
            return Infinity;
        }
        selection(val) {
            if (val !== undefined)
                return val;
            return [];
        }
        Edit() {
            const obj = new this.$.$mol_string();
            obj.dom_name = () => "textarea";
            obj.value = (val) => this.value(val);
            obj.hint = () => this.hint();
            obj.enabled = () => this.enabled();
            obj.length_max = () => this.length_max();
            obj.selection = (val) => this.selection(val);
            return obj;
        }
        row_numb(index) {
            return 0;
        }
        highlight() {
            return "";
        }
        View() {
            const obj = new this.$.$mol_text_code();
            obj.text = () => this.value();
            obj.render_visible_only = () => false;
            obj.row_numb = (index) => this.row_numb(index);
            obj.sidebar_showed = () => this.sidebar_showed();
            obj.highlight = () => this.highlight();
            return obj;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_textarea.prototype, "clickable", null);
    __decorate([
        $.$mol_mem
    ], $mol_textarea.prototype, "press", null);
    __decorate([
        $.$mol_mem
    ], $mol_textarea.prototype, "hover", null);
    __decorate([
        $.$mol_mem
    ], $mol_textarea.prototype, "value", null);
    __decorate([
        $.$mol_mem
    ], $mol_textarea.prototype, "selection", null);
    __decorate([
        $.$mol_mem
    ], $mol_textarea.prototype, "Edit", null);
    __decorate([
        $.$mol_mem
    ], $mol_textarea.prototype, "View", null);
    $.$mol_textarea = $mol_textarea;
})($ || ($ = {}));
//textarea.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/textarea/textarea.view.css", "[mol_textarea] {\n\tflex: 1 0 auto;\n\tdisplay: flex;\n\tflex-direction: column;\n\tposition: relative;\n\tz-index: 0;\n\tvertical-align: top;\n\tmin-height: max-content;\n\twhite-space: pre-wrap;\n}\n\n[mol_textarea_view] {\n\tpointer-events: none;\n\tz-index: 1;\n\twhite-space: inherit;\n}\n[mol_textarea_clickable] > [mol_textarea_view] {\n\tpointer-events: all;\n}\n\n[mol_textarea_edit] {\n\tfont-family: monospace;\n\tz-index: -1 !important;\n\tpadding: var(--mol_gap_text);\n\tposition: absolute;\n\tleft: 0;\n\ttop: 0;\n\twidth: 100%;\n\theight: 100%;\n\tcolor: transparent;\n\tcaret-color: var(--mol_theme_text);\n\tresize: none;\n\twhite-space: inherit;\n\ttab-size: 4;\n\toverflow-anchor: none;\n}\n\n[mol_textarea_sidebar_showed] [mol_textarea_edit] {\n\tleft: 3rem;\n\twidth: calc( 100% - 3rem );\n}\n");
})($ || ($ = {}));
//textarea.view.css.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_textarea extends $.$mol_textarea {
            indent_inc() {
                document.execCommand('insertText', false, '\t');
            }
            indent_dec() {
            }
            hover(event) {
                this.clickable(event.ctrlKey);
            }
            press(event) {
                switch (event.keyCode) {
                    case $.$mol_keyboard_code.tab:
                        this.indent_inc();
                        break;
                    case event.shiftKey && $.$mol_keyboard_code.tab:
                        this.indent_dec();
                        break;
                    default: return;
                }
                event.preventDefault();
            }
            row_numb(index) {
                return index;
            }
        }
        $$.$mol_textarea = $mol_textarea;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//textarea.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_embed_native extends $.$mol_view {
        dom_name() {
            return "object";
        }
        attr() {
            return {
                ...super.attr(),
                data: this.uri(),
                type: this.mime()
            };
        }
        sub() {
            return [
                this.title()
            ];
        }
        uri(val) {
            if (val !== undefined)
                return val;
            return "";
        }
        mime() {
            return "";
        }
        title(val) {
            if (val !== undefined)
                return val;
            return "";
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_embed_native.prototype, "uri", null);
    __decorate([
        $.$mol_mem
    ], $mol_embed_native.prototype, "title", null);
    $.$mol_embed_native = $mol_embed_native;
})($ || ($ = {}));
//native.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_wait_timeout = $.$mol_fiber_sync((timeout) => new Promise(done => new $.$mol_after_timeout(timeout, () => done(null))));
})($ || ($ = {}));
//timeout.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/embed/native/native.view.css", "[mol_embed_native] {\n\tmax-width: 100%;\n\tmax-height: 50vh;\n\tobject-fit: cover;\n\tdisplay: flex;\n\tflex: 1 1 auto;\n\tbackground: var(--mol_theme_shade);\n\tobject-position: top left;\n\tborder-radius: var(--mol_gap_round);\n\taspect-ratio: 4/3;\n}\n");
})($ || ($ = {}));
//native.view.css.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_embed_native extends $.$mol_embed_native {
            loaded() {
                const node = this.dom_node();
                this.uri_resource();
                return $.$mol_fiber_sync(() => new Promise((done, fail) => {
                    new $.$mol_after_timeout(3_000, () => {
                        try {
                            if (node.contentWindow.location.href === 'about:blank') {
                                done(true);
                            }
                        }
                        catch { }
                    });
                    node.onload = () => {
                        done(true);
                    };
                    node.onerror = (event) => {
                        fail(typeof event === 'string' ? new Error(event) : event.error || event);
                    };
                }))();
            }
            uri_resource() {
                return this.uri().replace(/#.*/, '');
            }
            _uri_sync;
            uri_listener() {
                const node = this.dom_node();
                return new $.$mol_dom_listener($.$mol_dom_context, 'message', $.$mol_fiber_root((event) => {
                    if (event.source !== node.contentWindow)
                        return;
                    if (!Array.isArray(event.data))
                        return;
                    if (event.data[0] !== 'hashchange')
                        return;
                    this._uri_sync?.destructor();
                    this._uri_sync = $.$mol_fiber.current;
                    $.$mol_wait_timeout(1000);
                    this.uri(event.data[1]);
                }));
            }
            render() {
                const node = super.render();
                this.uri_listener();
                this.loaded();
                return node;
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_embed_native.prototype, "loaded", null);
        __decorate([
            $.$mol_mem
        ], $mol_embed_native.prototype, "uri_resource", null);
        __decorate([
            $.$mol_mem
        ], $mol_embed_native.prototype, "uri_listener", null);
        $$.$mol_embed_native = $mol_embed_native;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//native.view.js.map
;
"use strict";
var $;
(function ($) {
    class $hyoo_talks_message_bubble extends $.$mol_list {
        message() {
            const obj = new this.$.$hyoo_talks_message();
            return obj;
        }
        attr() {
            return {
                ...super.attr(),
                hyoo_talks_message_bubble_side: this.side()
            };
        }
        event() {
            return {
                dblclick: (event) => this.editable_faorce(event)
            };
        }
        rows() {
            return [
                this.Meta(),
                this.Text(),
                this.Previews()
            ];
        }
        Peek() {
            const obj = new this.$.$mol_check();
            obj.title = () => this.peek_label();
            obj.checked = (val) => this.peek(val);
            return obj;
        }
        Preview(index) {
            const obj = new this.$.$mol_link();
            obj.uri = () => this.preview_uri(index);
            obj.sub = () => [
                this.Preview_embed(index)
            ];
            return obj;
        }
        side() {
            return "other";
        }
        editable_faorce(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        author() {
            const obj = new this.$.$hyoo_talks_person();
            return obj;
        }
        Author() {
            const obj = new this.$.$hyoo_talks_person_avatar();
            obj.person = () => this.author();
            return obj;
        }
        moment() {
            return "";
        }
        When() {
            const obj = new this.$.$mol_paragraph();
            obj.sub = () => [
                this.moment()
            ];
            return obj;
        }
        Meta() {
            const obj = new this.$.$mol_view();
            obj.sub = () => [
                this.Author(),
                this.When()
            ];
            return obj;
        }
        text(val) {
            if (val !== undefined)
                return val;
            return "";
        }
        text_selection(val) {
            if (val !== undefined)
                return val;
            return [];
        }
        editable() {
            return false;
        }
        highlight() {
            return "";
        }
        Text() {
            const obj = new this.$.$mol_textarea();
            obj.value = (val) => this.text(val);
            obj.selection = (val) => this.text_selection(val);
            obj.enabled = () => this.editable();
            obj.highlight = () => this.highlight();
            return obj;
        }
        previews() {
            return [];
        }
        Previews() {
            const obj = new this.$.$mol_view();
            obj.sub = () => this.previews();
            return obj;
        }
        peek_label() {
            return "...";
        }
        peek(val) {
            if (val !== undefined)
                return val;
            return false;
        }
        preview_uri(index) {
            return "";
        }
        Preview_embed(index) {
            const obj = new this.$.$mol_embed_native();
            obj.uri = () => this.preview_uri(index);
            return obj;
        }
    }
    __decorate([
        $.$mol_mem
    ], $hyoo_talks_message_bubble.prototype, "message", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_talks_message_bubble.prototype, "Peek", null);
    __decorate([
        $.$mol_mem_key
    ], $hyoo_talks_message_bubble.prototype, "Preview", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_talks_message_bubble.prototype, "editable_faorce", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_talks_message_bubble.prototype, "author", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_talks_message_bubble.prototype, "Author", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_talks_message_bubble.prototype, "When", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_talks_message_bubble.prototype, "Meta", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_talks_message_bubble.prototype, "text", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_talks_message_bubble.prototype, "text_selection", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_talks_message_bubble.prototype, "Text", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_talks_message_bubble.prototype, "Previews", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_talks_message_bubble.prototype, "peek", null);
    __decorate([
        $.$mol_mem_key
    ], $hyoo_talks_message_bubble.prototype, "Preview_embed", null);
    $.$hyoo_talks_message_bubble = $hyoo_talks_message_bubble;
})($ || ($ = {}));
//bubble.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        const { vary } = $.$mol_style_func;
        $.$mol_style_define($$.$hyoo_talks_message_bubble, {
            '@': {
                hyoo_talks_message_bubble_side: {
                    self: {
                        Meta: {
                            flex: {
                                direction: 'row-reverse',
                            },
                        },
                        alignItems: 'flex-end',
                    },
                    other: {
                        alignItems: 'flex-start',
                        Text: {
                            background: {
                                color: vary('--hyoo_talks_theme_talker'),
                            },
                        },
                    },
                },
            },
            Meta: {
                flex: {
                    wrap: 'wrap',
                },
            },
            When: {
                padding: $.$mol_gap.text,
                color: $.$mol_theme.shade,
            },
            Text: {
                padding: 0,
                flex: {
                    grow: 1,
                    shrink: 1,
                },
                background: {
                    color: $.$mol_theme.back,
                },
                border: {
                    radius: $.$mol_gap.round,
                },
                Edit: {
                    background: {
                        color: 'transparent',
                    },
                    boxShadow: 'none',
                },
            },
            Peek: {
                wordBreak: 'break-all',
            },
            Previews: {
                alignSelf: 'stretch',
            },
            Preview: {
                padding: 0,
                flex: {
                    grow: 1,
                    shrink: 1,
                    basis: 'auto',
                },
            },
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//bubble.view.css.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $hyoo_talks_message_bubble extends $.$hyoo_talks_message_bubble {
            rows() {
                if (!this.message().complete() && !this.peek()) {
                    return [
                        this.Meta(),
                        this.Peek(),
                    ];
                }
                return super.rows();
            }
            text(next) {
                return this.message().text(next);
            }
            text_selection(next) {
                return this.message().text_selection(next);
            }
            author() {
                return this.message().author();
            }
            side() {
                const message = this.message();
                return message.domain().user() === message.author() ? 'self' : 'other';
            }
            editable(next) {
                if (next !== undefined)
                    return next;
                return this.side() === 'self';
            }
            editable_faorce() {
                this.editable(true);
            }
            links() {
                return (this.text().match(/https?:\/\/\S+/g) ?? []).map(uri => uri.replace('https://www.youtube.com/watch?v=', 'https://www.youtube.com/embed/'));
            }
            previews() {
                return this.links().map((_, i) => this.Preview(i));
            }
            preview_uri(index) {
                return this.links()[index];
            }
            moment() {
                return this.message().moment()?.toString('YYYY-MM-DD hh:mm') ?? '';
            }
            peek_label() {
                return '•'.repeat(this.text().length);
            }
        }
        __decorate([
            $.$mol_mem
        ], $hyoo_talks_message_bubble.prototype, "rows", null);
        __decorate([
            $.$mol_mem
        ], $hyoo_talks_message_bubble.prototype, "side", null);
        __decorate([
            $.$mol_mem
        ], $hyoo_talks_message_bubble.prototype, "editable", null);
        __decorate([
            $.$mol_mem
        ], $hyoo_talks_message_bubble.prototype, "links", null);
        __decorate([
            $.$mol_mem
        ], $hyoo_talks_message_bubble.prototype, "peek_label", null);
        $$.$hyoo_talks_message_bubble = $hyoo_talks_message_bubble;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//bubble.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_svg extends $.$mol_view {
        dom_name() {
            return "svg";
        }
        dom_name_space() {
            return "http://www.w3.org/2000/svg";
        }
        font_size() {
            return 16;
        }
        font_family() {
            return "";
        }
    }
    $.$mol_svg = $mol_svg;
})($ || ($ = {}));
//svg.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_svg extends $.$mol_svg {
            computed_style() {
                const win = this.$.$mol_dom_context;
                const style = win.getComputedStyle(this.dom_node());
                if (!style['font-size'])
                    $.$mol_state_time.now();
                return style;
            }
            font_size() {
                return parseInt(this.computed_style()['font-size']) || 16;
            }
            font_family() {
                return this.computed_style()['font-family'];
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_svg.prototype, "computed_style", null);
        __decorate([
            $.$mol_mem
        ], $mol_svg.prototype, "font_size", null);
        __decorate([
            $.$mol_mem
        ], $mol_svg.prototype, "font_family", null);
        $$.$mol_svg = $mol_svg;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//svg.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_svg_root extends $.$mol_svg {
        dom_name() {
            return "svg";
        }
        attr() {
            return {
                ...super.attr(),
                viewBox: this.view_box(),
                preserveAspectRatio: this.aspect()
            };
        }
        view_box() {
            return "0 0 100 100";
        }
        aspect() {
            return "xMidYMid";
        }
    }
    $.$mol_svg_root = $mol_svg_root;
})($ || ($ = {}));
//root.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/svg/root/root.view.css", "[mol_svg_root] {\n\toverflow: hidden;\n}\n");
})($ || ($ = {}));
//root.view.css.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_svg_path extends $.$mol_svg {
        dom_name() {
            return "path";
        }
        attr() {
            return {
                ...super.attr(),
                d: this.geometry()
            };
        }
        geometry() {
            return "";
        }
    }
    $.$mol_svg_path = $mol_svg_path;
})($ || ($ = {}));
//path.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_icon extends $.$mol_svg_root {
        view_box() {
            return "0 0 24 24";
        }
        minimal_width() {
            return 16;
        }
        minimal_height() {
            return 16;
        }
        sub() {
            return [
                this.Path()
            ];
        }
        path() {
            return "";
        }
        Path() {
            const obj = new this.$.$mol_svg_path();
            obj.geometry = () => this.path();
            return obj;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_icon.prototype, "Path", null);
    $.$mol_icon = $mol_icon;
})($ || ($ = {}));
//icon.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/icon/icon.view.css", "[mol_icon] {\n\tfill: currentColor;\n\tstroke: none;\n\twidth: 1em;\n\theight: 1em;\n\tflex: 0 0 auto;\n\tvertical-align: top;\n\tmargin: .25em 0;\n\tdisplay: inline-block;\n}\n");
})($ || ($ = {}));
//icon.view.css.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_icon_download extends $.$mol_icon {
        path() {
            return "M5,20H19V18H5M19,9H15V3H9V9H5L12,16L19,9Z";
        }
    }
    $.$mol_icon_download = $mol_icon_download;
})($ || ($ = {}));
//download.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_button_download extends $.$mol_button_minor {
        blob() {
            return null;
        }
        file_name() {
            return "blob.bin";
        }
        sub() {
            return [
                this.Icon()
            ];
        }
        Icon() {
            const obj = new this.$.$mol_icon_download();
            return obj;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_button_download.prototype, "Icon", null);
    $.$mol_button_download = $mol_button_download;
})($ || ($ = {}));
//download.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_button_download extends $.$mol_button_download {
            click() {
                const blob = this.blob();
                const name = this.file_name();
                const uri = URL.createObjectURL(blob);
                const a = $.$mol_jsx("a", { href: uri, download: name });
                a.click();
            }
        }
        $$.$mol_button_download = $mol_button_download;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//download.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_icon_eye extends $.$mol_icon {
        path() {
            return "M12,9C10.34,9 9,10.34 9,12C9,13.66 10.34,15 12,15C13.66,15 15,13.66 15,12C15,10.34 13.66,9 12,9M12,17C9.24,17 7,14.76 7,12C7,9.24 9.24,7 12,7C14.76,7 17,9.24 17,12C17,14.76 14.76,17 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z";
        }
    }
    $.$mol_icon_eye = $mol_icon_eye;
})($ || ($ = {}));
//eye.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_check_icon extends $.$mol_check {
    }
    $.$mol_check_icon = $mol_check_icon;
})($ || ($ = {}));
//icon.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/check/icon/icon.view.css", "[mol_check_icon][mol_check_checked] {\n\tcolor: var(--mol_theme_focus);\n}\n");
})($ || ($ = {}));
//icon.view.css.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_icon_magnify extends $.$mol_icon {
        path() {
            return "M9.5,3C13.09,3 16,5.91 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16C5.91,16 3,13.09 3,9.5C3,5.91 5.91,3 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z";
        }
    }
    $.$mol_icon_magnify = $mol_icon_magnify;
})($ || ($ = {}));
//magnify.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_pop extends $.$mol_view {
        event() {
            return {
                keydown: (event) => this.keydown(event)
            };
        }
        showed(val) {
            if (val !== undefined)
                return val;
            return false;
        }
        align_vert() {
            return "";
        }
        align_hor() {
            return "";
        }
        sub() {
            return [
                this.Anchor()
            ];
        }
        sub_visible() {
            return [
                this.Anchor(),
                this.Bubble()
            ];
        }
        keydown(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        Anchor() {
            return null;
        }
        align() {
            return "bottom_center";
        }
        bubble_content() {
            return [];
        }
        height_max() {
            return 9999;
        }
        Bubble() {
            const obj = new this.$.$mol_pop_bubble();
            obj.align = () => this.align();
            obj.content = () => this.bubble_content();
            obj.height_max = () => this.height_max();
            return obj;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_pop.prototype, "showed", null);
    __decorate([
        $.$mol_mem
    ], $mol_pop.prototype, "keydown", null);
    __decorate([
        $.$mol_mem
    ], $mol_pop.prototype, "Bubble", null);
    $.$mol_pop = $mol_pop;
    class $mol_pop_bubble extends $.$mol_scroll {
        sub() {
            return this.content();
        }
        style() {
            return {
                ...super.style(),
                maxHeight: this.height_max()
            };
        }
        attr() {
            return {
                ...super.attr(),
                mol_pop_align: this.align(),
                tabindex: 0
            };
        }
        content() {
            return [];
        }
        height_max() {
            return 9999;
        }
        align() {
            return "";
        }
    }
    $.$mol_pop_bubble = $mol_pop_bubble;
})($ || ($ = {}));
//pop.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/pop/pop.view.css", "[mol_pop] {\n\tposition: relative;\n\tdisplay: inline-flex;\n}\n\n[mol_pop]:hover {\n\tz-index: 4;\n}\n\n[mol_pop_bubble] {\n\tbox-shadow: 0 0 1rem hsla(0,0%,0%,.5);\n\tborder-radius: var(--mol_gap_round);\n\tposition: absolute;\n\tz-index: 3;\n\tbackground: var(--mol_theme_back);\n\tmax-width: none;\n\tmax-height: none;\n\toverflow: hidden;\n\toverflow-y: overlay;\n\tword-break: normal;\n}\n\n[mol_pop_bubble][mol_scroll] {\n\tbackground: var(--mol_theme_back);\n}\n\n[mol_pop_bubble]:focus {\n\toutline: none;\n}\n\n[mol_pop_align=\"suspense\"] {\n\tdisplay: none;\n}\n\n[mol_pop_align=\"left_top\"] {\n\ttransform: translate(-100%);\n\tleft: 0;\n\tbottom: 0;\n}\n\n[mol_pop_align=\"left_center\"] {\n\ttransform: translate(-100%, -50%);\n\tleft: 0;\n\ttop: 50%;\n}\n\n[mol_pop_align=\"left_bottom\"] {\n\ttransform: translate(-100%);\n\tleft: 0;\n\ttop: 0;\n}\n\n[mol_pop_align=\"right_top\"] {\n\ttransform: translate(100%);\n\tright: 0;\n\tbottom: 0;\n}\n\n[mol_pop_align=\"right_center\"] {\n\ttransform: translate(100%, -50%);\n\tright: 0;\n\ttop: 50%;\n}\n\n[mol_pop_align=\"right_bottom\"] {\n\ttransform: translate(100%);\n\tright: 0;\n\ttop: 0;\n}\n\n[mol_pop_align=\"center\"] {\n\tleft: 50%;\n\ttop: 50%;\n\ttransform: translate(-50%, -50%);\n}\n\n[mol_pop_align=\"top_left\"] {\n\tright: 0;\n\tbottom: 100%;\n}\n\n[mol_pop_align=\"top_center\"] {\n\ttransform: translate(-50%);\n\tleft: 50%;\n\tbottom: 100%;\n}\n\n[mol_pop_align=\"top_right\"] {\n\tleft: 0;\n\tbottom: 100%;\n}\n\n[mol_pop_align=\"bottom_left\"] {\n\tright: 0;\n\ttop: 100%;\n}\n\n[mol_pop_align=\"bottom_center\"] {\n\ttransform: translate(-50%);\n\tleft: 50%;\n\ttop: 100%;\n}\n\n[mol_pop_align=\"bottom_right\"] {\n\tleft: 0;\n\ttop: 100%;\n}\n");
})($ || ($ = {}));
//pop.view.css.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_pop extends $.$mol_pop {
            showed(next = false) {
                this.focused();
                return next;
            }
            sub_visible() {
                return [
                    this.Anchor(),
                    ...this.showed() ? [this.Bubble()] : [],
                ];
            }
            height_max() {
                const viewport = this.$.$mol_window.size();
                const rect_bubble = this.view_rect();
                const align = this.align_vert();
                if (align === 'bottom')
                    return (viewport.height - rect_bubble.bottom) * .66;
                if (align === 'top')
                    return rect_bubble.top * .66;
                return 0;
            }
            align() {
                return `${this.align_vert()}_${this.align_hor()}`;
            }
            align_vert() {
                const viewport = this.$.$mol_window.size();
                const rect_bubble = this.view_rect();
                if (!rect_bubble)
                    return 'suspense';
                return rect_bubble.top > (viewport.height - rect_bubble.bottom) ? 'top' : 'bottom';
            }
            align_hor() {
                const viewport = this.$.$mol_window.size();
                const rect_bubble = this.view_rect();
                if (!rect_bubble)
                    return 'suspense';
                return rect_bubble.left > (viewport.width - rect_bubble.right) ? 'left' : 'right';
            }
            keydown(event) {
                if (event.defaultPrevented)
                    return;
                if (event.keyCode === $.$mol_keyboard_code.escape) {
                    if (!this.showed())
                        return;
                    event.preventDefault();
                    this.showed(false);
                }
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_pop.prototype, "showed", null);
        __decorate([
            $.$mol_mem
        ], $mol_pop.prototype, "height_max", null);
        __decorate([
            $.$mol_mem
        ], $mol_pop.prototype, "align", null);
        __decorate([
            $.$mol_mem
        ], $mol_pop.prototype, "align_vert", null);
        __decorate([
            $.$mol_mem
        ], $mol_pop.prototype, "align_hor", null);
        $$.$mol_pop = $mol_pop;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//pop.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_nav extends $.$mol_plugin {
        cycle(val) {
            if (val !== undefined)
                return val;
            return false;
        }
        mod_ctrl() {
            return false;
        }
        mod_shift() {
            return false;
        }
        mod_alt() {
            return false;
        }
        keys_x(val) {
            if (val !== undefined)
                return val;
            return [];
        }
        keys_y(val) {
            if (val !== undefined)
                return val;
            return [];
        }
        current_x(val) {
            if (val !== undefined)
                return val;
            return null;
        }
        current_y(val) {
            if (val !== undefined)
                return val;
            return null;
        }
        event_up(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        event_down(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        event_left(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        event_right(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        event() {
            return {
                ...super.event(),
                keydown: (event) => this.event_key(event)
            };
        }
        event_key(event) {
            if (event !== undefined)
                return event;
            return null;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_nav.prototype, "cycle", null);
    __decorate([
        $.$mol_mem
    ], $mol_nav.prototype, "keys_x", null);
    __decorate([
        $.$mol_mem
    ], $mol_nav.prototype, "keys_y", null);
    __decorate([
        $.$mol_mem
    ], $mol_nav.prototype, "current_x", null);
    __decorate([
        $.$mol_mem
    ], $mol_nav.prototype, "current_y", null);
    __decorate([
        $.$mol_mem
    ], $mol_nav.prototype, "event_up", null);
    __decorate([
        $.$mol_mem
    ], $mol_nav.prototype, "event_down", null);
    __decorate([
        $.$mol_mem
    ], $mol_nav.prototype, "event_left", null);
    __decorate([
        $.$mol_mem
    ], $mol_nav.prototype, "event_right", null);
    __decorate([
        $.$mol_mem
    ], $mol_nav.prototype, "event_key", null);
    $.$mol_nav = $mol_nav;
})($ || ($ = {}));
//nav.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_nav extends $.$mol_nav {
            event_key(event) {
                if (!event)
                    return event;
                if (event.defaultPrevented)
                    return;
                if (this.mod_ctrl() && !event.ctrlKey)
                    return;
                if (this.mod_shift() && !event.shiftKey)
                    return;
                if (this.mod_alt() && !event.altKey)
                    return;
                switch (event.keyCode) {
                    case $.$mol_keyboard_code.up: return this.event_up(event);
                    case $.$mol_keyboard_code.down: return this.event_down(event);
                    case $.$mol_keyboard_code.left: return this.event_left(event);
                    case $.$mol_keyboard_code.right: return this.event_right(event);
                    case $.$mol_keyboard_code.pageUp: return this.event_up(event);
                    case $.$mol_keyboard_code.pageDown: return this.event_down(event);
                }
            }
            event_up(event) {
                if (!event)
                    return event;
                const keys = this.keys_y();
                if (keys.length < 1)
                    return;
                const index_y = this.index_y();
                const index_old = index_y === null ? 0 : index_y;
                const index_new = (index_old + keys.length - 1) % keys.length;
                event.preventDefault();
                if (index_old === 0 && !this.cycle())
                    return;
                this.current_y(this.keys_y()[index_new]);
            }
            event_down(event) {
                if (!event)
                    return event;
                const keys = this.keys_y();
                if (keys.length < 1)
                    return;
                const index_y = this.index_y();
                const index_old = index_y === null ? keys.length - 1 : index_y;
                const index_new = (index_old + 1) % keys.length;
                event.preventDefault();
                if (index_new === 0 && !this.cycle())
                    return;
                this.current_y(this.keys_y()[index_new]);
            }
            event_left(event) {
                if (!event)
                    return event;
                const keys = this.keys_x();
                if (keys.length < 1)
                    return;
                const index_x = this.index_x();
                const index_old = index_x === null ? 0 : index_x;
                const index_new = (index_old + keys.length - 1) % keys.length;
                event.preventDefault();
                if (index_old === 0 && !this.cycle())
                    return;
                this.current_x(this.keys_x()[index_new]);
            }
            event_right(event) {
                if (!event)
                    return event;
                const keys = this.keys_x();
                if (keys.length < 1)
                    return;
                const index_x = this.index_x();
                const index_old = index_x === null ? keys.length - 1 : index_x;
                const index_new = (index_old + 1) % keys.length;
                event.preventDefault();
                if (index_new === 0 && !this.cycle())
                    return;
                this.current_x(this.keys_x()[index_new]);
            }
            index_y() {
                let index = this.keys_y().indexOf(this.current_y());
                if (index < 0)
                    return null;
                return index;
            }
            index_x() {
                let index = this.keys_x().indexOf(this.current_x());
                if (index < 0)
                    return null;
                return index;
            }
        }
        $$.$mol_nav = $mol_nav;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//nav.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_icon_cross extends $.$mol_icon {
        path() {
            return "M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z";
        }
    }
    $.$mol_icon_cross = $mol_icon_cross;
})($ || ($ = {}));
//cross.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_search extends $.$mol_pop {
        query(val) {
            if (val !== undefined)
                return val;
            return "";
        }
        suggests() {
            return [];
        }
        plugins() {
            return [
                ...super.plugins(),
                this.Hotkey(),
                this.Nav()
            ];
        }
        showed(val) {
            return this.suggests_showed(val);
        }
        align_hor() {
            return "right";
        }
        Anchor() {
            const obj = new this.$.$mol_view();
            obj.sub = () => this.anchor_content();
            return obj;
        }
        bubble_content() {
            return [
                this.Menu()
            ];
        }
        Suggest(id) {
            const obj = new this.$.$mol_button_minor();
            obj.click = (event) => this.suggest_select(id, event);
            obj.sub = () => this.suggest_content(id);
            return obj;
        }
        clear(val) {
            if (val !== undefined)
                return val;
            return null;
        }
        Hotkey() {
            const obj = new this.$.$mol_hotkey();
            obj.key = () => ({
                escape: (val) => this.clear(val)
            });
            return obj;
        }
        nav_components() {
            return [];
        }
        nav_focused(component) {
            if (component !== undefined)
                return component;
            return null;
        }
        Nav() {
            const obj = new this.$.$mol_nav();
            obj.keys_y = () => this.nav_components();
            obj.current_y = (component) => this.nav_focused(component);
            return obj;
        }
        suggests_showed(val) {
            if (val !== undefined)
                return val;
            return false;
        }
        hint() {
            return this.$.$mol_locale.text('$mol_search_hint');
        }
        submit(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        enabled() {
            return true;
        }
        Query() {
            const obj = new this.$.$mol_string();
            obj.value = (val) => this.query(val);
            obj.hint = () => this.hint();
            obj.submit = (event) => this.submit(event);
            obj.enabled = () => this.enabled();
            return obj;
        }
        Clear_icon() {
            const obj = new this.$.$mol_icon_cross();
            return obj;
        }
        Clear() {
            const obj = new this.$.$mol_button_minor();
            obj.hint = () => this.$.$mol_locale.text('$mol_search_Clear_hint');
            obj.click = (event) => this.clear(event);
            obj.sub = () => [
                this.Clear_icon()
            ];
            return obj;
        }
        anchor_content() {
            return [
                this.Query(),
                this.Clear()
            ];
        }
        menu_items() {
            return [];
        }
        Menu() {
            const obj = new this.$.$mol_list();
            obj.rows = () => this.menu_items();
            return obj;
        }
        suggest_select(id, event) {
            if (event !== undefined)
                return event;
            return null;
        }
        suggest_label(id) {
            return "";
        }
        Suggest_label(id) {
            const obj = new this.$.$mol_dimmer();
            obj.haystack = () => this.suggest_label(id);
            obj.needle = () => this.query();
            return obj;
        }
        suggest_content(id) {
            return [
                this.Suggest_label(id)
            ];
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_search.prototype, "query", null);
    __decorate([
        $.$mol_mem
    ], $mol_search.prototype, "Anchor", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_search.prototype, "Suggest", null);
    __decorate([
        $.$mol_mem
    ], $mol_search.prototype, "clear", null);
    __decorate([
        $.$mol_mem
    ], $mol_search.prototype, "Hotkey", null);
    __decorate([
        $.$mol_mem
    ], $mol_search.prototype, "nav_focused", null);
    __decorate([
        $.$mol_mem
    ], $mol_search.prototype, "Nav", null);
    __decorate([
        $.$mol_mem
    ], $mol_search.prototype, "suggests_showed", null);
    __decorate([
        $.$mol_mem
    ], $mol_search.prototype, "submit", null);
    __decorate([
        $.$mol_mem
    ], $mol_search.prototype, "Query", null);
    __decorate([
        $.$mol_mem
    ], $mol_search.prototype, "Clear_icon", null);
    __decorate([
        $.$mol_mem
    ], $mol_search.prototype, "Clear", null);
    __decorate([
        $.$mol_mem
    ], $mol_search.prototype, "Menu", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_search.prototype, "suggest_select", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_search.prototype, "Suggest_label", null);
    $.$mol_search = $mol_search;
})($ || ($ = {}));
//search.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/search/search.view.css", "[mol_search] {\n\talign-self: flex-start;\n\tflex: auto;\n}\n\n[mol_search_anchor] {\n\tflex: 1 1 auto;\n}\n\n[mol_search_query] {\n\tflex-grow: 1;\n}\n\n[mol_search_menu] {\n\tmin-height: .75rem;\n\tdisplay: flex;\n}\n\n[mol_search_suggest] {\n\ttext-align: left;\n}\n\n[mol_search_suggest_label_high] {\n\tcolor: var(--mol_theme_shade);\n\ttext-shadow: none;\n}\n");
})($ || ($ = {}));
//search.view.css.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_search extends $.$mol_search {
            anchor_content() {
                return [
                    this.Query(),
                    ...this.query() ? [this.Clear()] : [],
                ];
            }
            suggests_showed(next = true) {
                this.query();
                if (!this.focused())
                    return false;
                return next;
            }
            suggest_selected(next) {
                if (next === undefined)
                    return;
                this.query(next);
                $.$mol_fiber_defer(() => {
                    this.Query().focused(true);
                });
            }
            nav_components() {
                return [
                    this.Query(),
                    ...this.menu_items(),
                ];
            }
            nav_focused(component) {
                if (!this.focused())
                    return null;
                if (component == null) {
                    for (let comp of this.nav_components()) {
                        if (comp && comp.focused())
                            return comp;
                    }
                    return null;
                }
                if (this.suggests_showed()) {
                    this.ensure_visible(component, "center");
                    component.focused(true);
                }
                return component;
            }
            suggest_label(key) {
                return key;
            }
            menu_items() {
                return this.suggests().map((suggest) => this.Suggest(suggest));
            }
            suggest_select(id, event) {
                this.query(id);
                this.Query().selection([id.length, id.length]);
                this.Query().focused(true);
            }
            clear(event) {
                this.query('');
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_search.prototype, "anchor_content", null);
        __decorate([
            $.$mol_mem
        ], $mol_search.prototype, "suggests_showed", null);
        __decorate([
            $.$mol_mem
        ], $mol_search.prototype, "nav_focused", null);
        __decorate([
            $.$mol_mem
        ], $mol_search.prototype, "menu_items", null);
        $$.$mol_search = $mol_search;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//search.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_icon_chevron extends $.$mol_icon {
        path() {
            return "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z";
        }
    }
    $.$mol_icon_chevron = $mol_icon_chevron;
})($ || ($ = {}));
//chevron.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_icon_chevron_left extends $.$mol_icon {
        path() {
            return "M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z";
        }
    }
    $.$mol_icon_chevron_left = $mol_icon_chevron_left;
})($ || ($ = {}));
//left.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_icon_chevron_right extends $.$mol_icon {
        path() {
            return "M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z";
        }
    }
    $.$mol_icon_chevron_right = $mol_icon_chevron_right;
})($ || ($ = {}));
//right.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_paginator extends $.$mol_view {
        sub() {
            return [
                this.Backward(),
                this.Value(),
                this.Forward()
            ];
        }
        backward_hint() {
            return this.$.$mol_locale.text('$mol_paginator_backward_hint');
        }
        backward(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        Backward_icon() {
            const obj = new this.$.$mol_icon_chevron_left();
            return obj;
        }
        Backward() {
            const obj = new this.$.$mol_button_minor();
            obj.hint = () => this.backward_hint();
            obj.click = (event) => this.backward(event);
            obj.sub = () => [
                this.Backward_icon()
            ];
            return obj;
        }
        value(val) {
            if (val !== undefined)
                return val;
            return 0;
        }
        Value() {
            const obj = new this.$.$mol_view();
            obj.sub = () => [
                this.value()
            ];
            return obj;
        }
        forward_hint() {
            return this.$.$mol_locale.text('$mol_paginator_forward_hint');
        }
        forward(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        Forward_icon() {
            const obj = new this.$.$mol_icon_chevron_right();
            return obj;
        }
        Forward() {
            const obj = new this.$.$mol_button_minor();
            obj.hint = () => this.forward_hint();
            obj.click = (event) => this.forward(event);
            obj.sub = () => [
                this.Forward_icon()
            ];
            return obj;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_paginator.prototype, "backward", null);
    __decorate([
        $.$mol_mem
    ], $mol_paginator.prototype, "Backward_icon", null);
    __decorate([
        $.$mol_mem
    ], $mol_paginator.prototype, "Backward", null);
    __decorate([
        $.$mol_mem
    ], $mol_paginator.prototype, "value", null);
    __decorate([
        $.$mol_mem
    ], $mol_paginator.prototype, "Value", null);
    __decorate([
        $.$mol_mem
    ], $mol_paginator.prototype, "forward", null);
    __decorate([
        $.$mol_mem
    ], $mol_paginator.prototype, "Forward_icon", null);
    __decorate([
        $.$mol_mem
    ], $mol_paginator.prototype, "Forward", null);
    $.$mol_paginator = $mol_paginator;
})($ || ($ = {}));
//paginator.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/paginator/paginator.view.css", "[mol_paginator_value] {\n\tpadding: .5rem 0;\n}\n");
})($ || ($ = {}));
//paginator.view.css.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_paginator extends $.$mol_paginator {
            backward(event) {
                if (event.defaultPrevented)
                    return;
                event.preventDefault();
                this.value(this.value() - 1);
            }
            forward(event) {
                if (event.defaultPrevented)
                    return;
                event.preventDefault();
                this.value(this.value() + 1);
            }
        }
        $$.$mol_paginator = $mol_paginator;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//paginator.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_search_jumper extends $.$mol_search {
        Root() {
            const obj = new this.$.$mol_view();
            return obj;
        }
        forward(event) {
            return this.Index().forward(event);
        }
        backward(event) {
            return this.Index().backward(event);
        }
        Index() {
            const obj = new this.$.$mol_paginator();
            obj.value = (val) => this.index(val);
            return obj;
        }
        plugins() {
            return [
                ...super.plugins(),
                this.Backward(),
                this.Forward()
            ];
        }
        index(val) {
            if (val !== undefined)
                return val;
            return 0;
        }
        Backward() {
            const obj = new this.$.$mol_hotkey();
            obj.mod_shift = () => true;
            obj.key = () => ({
                enter: (event) => this.backward(event)
            });
            return obj;
        }
        escape(val) {
            if (val !== undefined)
                return val;
            return null;
        }
        Forward() {
            const obj = new this.$.$mol_hotkey();
            obj.key = () => ({
                enter: (event) => this.forward(event),
                escape: (val) => this.escape(val)
            });
            return obj;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_search_jumper.prototype, "Root", null);
    __decorate([
        $.$mol_mem
    ], $mol_search_jumper.prototype, "Index", null);
    __decorate([
        $.$mol_mem
    ], $mol_search_jumper.prototype, "index", null);
    __decorate([
        $.$mol_mem
    ], $mol_search_jumper.prototype, "Backward", null);
    __decorate([
        $.$mol_mem
    ], $mol_search_jumper.prototype, "escape", null);
    __decorate([
        $.$mol_mem
    ], $mol_search_jumper.prototype, "Forward", null);
    $.$mol_search_jumper = $mol_search_jumper;
})($ || ($ = {}));
//jumper.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_search_jumper extends $.$mol_search_jumper {
            results() {
                const needle = this.query();
                if (needle.length < 2)
                    return [];
                const root = this.Root();
                if (!root)
                    return [];
                const regexp = $.$mol_regexp.from({ needle }, { ignoreCase: true });
                try {
                    return [...root.view_find((_, text = '') => regexp.test(text))];
                }
                catch (error) {
                    if (!(error instanceof Promise))
                        $.$mol_fail_hidden(error);
                    return [];
                }
            }
            index(next) {
                this.query();
                const all = this.results();
                if (all.length == 0)
                    return 0;
                let index = next ?? super.index();
                if (index > all.length)
                    index = 1;
                if (index <= 0)
                    index = all.length;
                if (next !== undefined) {
                    const path = all[index - 1];
                    this.Root().ensure_visible(path[path.length - 1]);
                }
                return index;
            }
            sub() {
                return [
                    this.Query(),
                    ...(this.query().length > 0) ? [
                        this.Clear(),
                        this.Index(),
                    ] : [],
                ];
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_search_jumper.prototype, "results", null);
        __decorate([
            $.$mol_mem
        ], $mol_search_jumper.prototype, "index", null);
        $$.$mol_search_jumper = $mol_search_jumper;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//jumper.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_icon_microphone extends $.$mol_icon {
        path() {
            return "M12,2C13.66,2 15,3.34 15,5V11C15,12.66 13.66,14 12,14C10.34,14 9,12.66 9,11V5C9,3.34 10.34,2 12,2M19,11C19,14.53 16.39,17.44 13,17.93V21H11V17.93C7.61,17.44 5,14.53 5,11H7C7,13.76 9.24,16 12,16C14.76,16 17,13.76 17,11H19Z";
        }
    }
    $.$mol_icon_microphone = $mol_icon_microphone;
})($ || ($ = {}));
//microphone.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_icon_arrow_up extends $.$mol_icon {
        path() {
            return "M13,20H11V8L5.5,13.5L4.08,12.08L12,4.16L19.92,12.08L18.5,13.5L13,8V20Z";
        }
    }
    $.$mol_icon_arrow_up = $mol_icon_arrow_up;
})($ || ($ = {}));
//up.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_icon_arrow_up_bold extends $.$mol_icon {
        path() {
            return "M15,20H9V12H4.16L12,4.16L19.84,12H15V20Z";
        }
    }
    $.$mol_icon_arrow_up_bold = $mol_icon_arrow_up_bold;
})($ || ($ = {}));
//bold.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    class $hyoo_talks_chat_page extends $.$mol_page {
        messages(val) {
            if (val !== undefined)
                return val;
            return [];
        }
        chat() {
            const obj = new this.$.$hyoo_talks_chat();
            return obj;
        }
        chat_id() {
            return "global";
        }
        default_title() {
            return "";
        }
        embed() {
            return false;
        }
        attr() {
            return {
                ...super.attr(),
                hyoo_talks_chat_page_embed: this.embed()
            };
        }
        Title() {
            const obj = new this.$.$mol_string();
            obj.value = (val) => this.title(val);
            obj.hint = () => this.$.$mol_locale.text('$hyoo_talks_chat_page_Title_hint');
            return obj;
        }
        head() {
            return [
                this.Title(),
                this.Dump(),
                this.Joined(),
                this.Tools(),
                this.Search_toggle(),
                this.Search()
            ];
        }
        body() {
            return [
                this.Disclaimer(),
                this.Bubbles()
            ];
        }
        foot() {
            return this.draft_controls();
        }
        Bubble(id) {
            const obj = new this.$.$hyoo_talks_message_bubble();
            obj.minimal_height = () => 80;
            obj.message = () => this.message(id);
            obj.highlight = () => this.search();
            return obj;
        }
        plugins() {
            return [
                this.Send_key()
            ];
        }
        title(val) {
            if (val !== undefined)
                return val;
            return "";
        }
        dump_name() {
            return "chat.сsv";
        }
        dump_blob(val) {
            if (val !== undefined)
                return val;
            return null;
        }
        Dump() {
            const obj = new this.$.$mol_button_download();
            obj.hint = () => this.$.$mol_locale.text('$hyoo_talks_chat_page_Dump_hint');
            obj.file_name = () => this.dump_name();
            obj.blob = () => this.dump_blob();
            return obj;
        }
        Joined_icon() {
            const obj = new this.$.$mol_icon_eye();
            return obj;
        }
        joined(val) {
            if (val !== undefined)
                return val;
            return false;
        }
        Joined() {
            const obj = new this.$.$mol_check_icon();
            obj.hint = () => this.$.$mol_locale.text('$hyoo_talks_chat_page_Joined_hint');
            obj.Icon = () => this.Joined_icon();
            obj.checked = (val) => this.joined(val);
            return obj;
        }
        Search_toggle_icon() {
            const obj = new this.$.$mol_icon_magnify();
            return obj;
        }
        search_enabled(val) {
            if (val !== undefined)
                return val;
            return false;
        }
        Search_toggle() {
            const obj = new this.$.$mol_check_icon();
            obj.hint = () => this.$.$mol_locale.text('$hyoo_talks_chat_page_Search_toggle_hint');
            obj.Icon = () => this.Search_toggle_icon();
            obj.checked = (val) => this.search_enabled(val);
            return obj;
        }
        search(val) {
            if (val !== undefined)
                return val;
            return "";
        }
        search_end(val) {
            if (val !== undefined)
                return val;
            return null;
        }
        Search() {
            const obj = new this.$.$mol_search_jumper();
            obj.query = (val) => this.search(val);
            obj.Root = () => this.Body();
            obj.escape = (val) => this.search_end(val);
            return obj;
        }
        Disclaimer() {
            const obj = new this.$.$mol_paragraph();
            obj.title = () => this.$.$mol_locale.text('$hyoo_talks_chat_page_Disclaimer_title');
            return obj;
        }
        bubbles() {
            return [];
        }
        Bubbles() {
            const obj = new this.$.$mol_list();
            obj.rows = () => this.bubbles();
            return obj;
        }
        draft_text(val) {
            if (val !== undefined)
                return val;
            return "";
        }
        Draft_text() {
            const obj = new this.$.$mol_textarea();
            obj.hint = () => this.$.$mol_locale.text('$hyoo_talks_chat_page_Draft_text_hint');
            obj.value = (val) => this.draft_text(val);
            return obj;
        }
        Speech_toggle_icon() {
            const obj = new this.$.$mol_icon_microphone();
            return obj;
        }
        hearing(val) {
            if (val !== undefined)
                return val;
            return false;
        }
        Speech_toggle() {
            const obj = new this.$.$mol_check_icon();
            obj.Icon = () => this.Speech_toggle_icon();
            obj.checked = (val) => this.hearing(val);
            return obj;
        }
        Draft_send_icon() {
            const obj = new this.$.$mol_icon_arrow_up_bold();
            return obj;
        }
        draft_send(val) {
            if (val !== undefined)
                return val;
            return null;
        }
        Draft_send() {
            const obj = new this.$.$mol_button_minor();
            obj.title = () => this.$.$mol_locale.text('$hyoo_talks_chat_page_Draft_send_title');
            obj.hint = () => this.$.$mol_locale.text('$hyoo_talks_chat_page_Draft_send_hint');
            obj.sub = () => [
                this.Draft_send_icon()
            ];
            obj.click = (val) => this.draft_send(val);
            return obj;
        }
        draft_controls() {
            return [
                this.Draft_text(),
                this.Speech_toggle(),
                this.Draft_send()
            ];
        }
        message(id) {
            const obj = new this.$.$hyoo_talks_message();
            return obj;
        }
        search_start(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        Send_key() {
            const obj = new this.$.$mol_hotkey();
            obj.mod_ctrl = () => true;
            obj.key = () => ({
                enter: (event) => this.draft_send(event),
                F: (event) => this.search_start(event)
            });
            return obj;
        }
    }
    __decorate([
        $.$mol_mem
    ], $hyoo_talks_chat_page.prototype, "messages", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_talks_chat_page.prototype, "chat", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_talks_chat_page.prototype, "Title", null);
    __decorate([
        $.$mol_mem_key
    ], $hyoo_talks_chat_page.prototype, "Bubble", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_talks_chat_page.prototype, "title", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_talks_chat_page.prototype, "dump_blob", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_talks_chat_page.prototype, "Dump", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_talks_chat_page.prototype, "Joined_icon", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_talks_chat_page.prototype, "joined", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_talks_chat_page.prototype, "Joined", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_talks_chat_page.prototype, "Search_toggle_icon", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_talks_chat_page.prototype, "search_enabled", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_talks_chat_page.prototype, "Search_toggle", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_talks_chat_page.prototype, "search", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_talks_chat_page.prototype, "search_end", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_talks_chat_page.prototype, "Search", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_talks_chat_page.prototype, "Disclaimer", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_talks_chat_page.prototype, "Bubbles", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_talks_chat_page.prototype, "draft_text", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_talks_chat_page.prototype, "Draft_text", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_talks_chat_page.prototype, "Speech_toggle_icon", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_talks_chat_page.prototype, "hearing", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_talks_chat_page.prototype, "Speech_toggle", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_talks_chat_page.prototype, "Draft_send_icon", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_talks_chat_page.prototype, "draft_send", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_talks_chat_page.prototype, "Draft_send", null);
    __decorate([
        $.$mol_mem_key
    ], $hyoo_talks_chat_page.prototype, "message", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_talks_chat_page.prototype, "search_start", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_talks_chat_page.prototype, "Send_key", null);
    $.$hyoo_talks_chat_page = $hyoo_talks_chat_page;
})($ || ($ = {}));
//page.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_notify {
        static allowed(next) {
            return false;
        }
        static show(info) {
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_notify, "allowed", null);
    __decorate([
        $.$mol_fiber.method
    ], $mol_notify, "show", null);
    $.$mol_notify = $mol_notify;
})($ || ($ = {}));
//notify.node.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_wait_rest = $.$mol_fiber_sync(() => new Promise(done => new $.$mol_after_work(16, () => done(null))));
})($ || ($ = {}));
//rest.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_range2(item = index => index, size = () => Number.POSITIVE_INFINITY) {
        return new Proxy(new $mol_range2_array(), {
            get(target, field) {
                if (typeof field === 'string') {
                    if (field === 'length')
                        return size();
                    const index = Number(field);
                    if (index === Math.trunc(index))
                        return item(index);
                }
                return target[field];
            },
            set(target, field) {
                return $.$mol_fail(new TypeError('Lazy range is read only'));
            },
            ownKeys(target) {
                return [...Array(size())].map((v, i) => String(i)).concat('length');
            },
            getOwnPropertyDescriptor(target, field) {
                if (field === "length")
                    return {
                        value: size(),
                        writable: true,
                        enumerable: false,
                        configurable: false,
                    };
                const index = Number(field);
                if (index === Math.trunc(index))
                    return {
                        get: () => this.get(target, field, this),
                        enumerable: true,
                        configurable: true,
                    };
                return Object.getOwnPropertyDescriptor(target, field);
            }
        });
    }
    $.$mol_range2 = $mol_range2;
    class $mol_range2_array extends Array {
        concat(...tail) {
            if (tail.length === 0)
                return this;
            if (tail.length > 1) {
                let list = this;
                for (let item of tail)
                    list = list.concat(item);
                return list;
            }
            return $mol_range2(index => index < this.length ? this[index] : tail[0][index - this.length], () => this.length + tail[0].length);
        }
        filter(check, context) {
            const filtered = new $mol_range2_array();
            for (let index = 0; index < this.length; ++index) {
                const item = this[index];
                if (check.call(context, item, index, this))
                    filtered.push(item);
            }
            return filtered;
        }
        forEach(proceed, context) {
            for (let [key, value] of this.entries())
                proceed.call(context, value, key, this);
        }
        map(proceed, context) {
            return $mol_range2(index => proceed.call(context, this[index], index, this), () => this.length);
        }
        reduce(merge, result) {
            let index = 0;
            if (arguments.length === 1) {
                result = this[index++];
            }
            for (; index < this.length; ++index) {
                result = merge(result, this[index], index, this);
            }
            return result;
        }
        slice(from = 0, to = this.length) {
            return $mol_range2(index => this[from + index], () => Math.min(to, this.length) - from);
        }
        some(check, context) {
            for (let index = 0; index < this.length; ++index) {
                if (check.call(context, this[index], index, this))
                    return true;
            }
            return false;
        }
        every(check, context) {
            for (let index = 0; index < this.length; ++index) {
                if (!check.call(context, this[index], index, this))
                    return false;
            }
            return true;
        }
    }
    $.$mol_range2_array = $mol_range2_array;
})($ || ($ = {}));
//range2.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_defer extends $.$mol_object {
        run;
        constructor(run) {
            super();
            this.run = run;
            $mol_defer.add(this);
        }
        destructor() {
            $mol_defer.drop(this);
        }
        static all = [];
        static timer = null;
        static scheduleNative = (typeof requestAnimationFrame == 'function')
            ? handler => requestAnimationFrame(handler)
            : handler => setTimeout(handler, 16);
        static schedule() {
            if (this.timer)
                return;
            this.timer = this.scheduleNative(() => {
                this.timer = null;
                this.run();
            });
        }
        static unschedule() {
            if (!this.timer)
                return;
            cancelAnimationFrame(this.timer);
            this.timer = null;
        }
        static add(defer) {
            this.all.push(defer);
            this.schedule();
        }
        static drop(defer) {
            var index = this.all.indexOf(defer);
            if (index >= 0)
                this.all.splice(index, 1);
        }
        static run() {
            if (this.all.length === 0)
                return;
            this.schedule();
            for (var defer; defer = this.all.shift();)
                defer.run();
        }
    }
    $.$mol_defer = $mol_defer;
})($ || ($ = {}));
//defer.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_speech extends $.$mol_plugin {
        static speaker() {
            return $.$mol_fiber_sync(() => new Promise(done => {
                const API = $.$mol_dom_context.speechSynthesis;
                if (API.getVoices().length)
                    return done(API);
                const on_voices = (event) => {
                    if (!API.getVoices().length)
                        return;
                    API.removeEventListener('voiceschanged', on_voices);
                    done(API);
                };
                API.addEventListener('voiceschanged', on_voices);
            }))();
        }
        static voices() {
            const lang = this.$.$mol_locale.lang();
            return this.speaker().getVoices().filter(voice => voice.lang.split('-')[0] === lang);
        }
        static say(text) {
            const speaker = this.speaker();
            speaker.cancel();
            speaker.resume();
            const rate = 1;
            const voice = this.voices()[this.voices().length - 1];
            const pitch = 1;
            var utter = new SpeechSynthesisUtterance(text);
            utter.voice = voice;
            utter.rate = rate;
            utter.pitch = pitch;
            speaker.speak(utter);
            return null;
        }
        static speaking(next = true) {
            if (next)
                this.speaker().resume();
            else
                this.speaker().pause();
            return next;
        }
        static hearer() {
            const API = window['SpeechRecognition'] || window['webkitSpeechRecognition'] || window['mozSpeechRecognition'] || window['msSpeechRecognition'];
            const api = new API;
            api.interimResults = true;
            api.maxAlternatives = 1;
            api.continuous = true;
            api.lang = $.$mol_locale.lang();
            api.onnomatch = $.$mol_fiber_root((event) => {
                api.stop();
                return null;
            });
            api.onresult = $.$mol_fiber_root((event) => {
                this.recognition_index([...event.results].filter(res => res.isFinal).length);
                const recognition = event.results[event.resultIndex];
                const index = event.resultIndex + this.recognition_offset();
                this.recognition(index, recognition);
                return null;
            });
            api.onerror = $.$mol_fiber_root((event) => {
                if (event.error === 'no-speech')
                    return null;
                console.log(event);
                console.error(new Error(event.error || event));
                api.stop();
                return null;
            });
            api.onend = (event) => {
                if (this.recognition_index() > 0) {
                    this.recognition_offset(this.recognition_offset() + this.recognition_index());
                }
                this.recognition_index(-1);
                if (this.hearing())
                    api.start();
            };
            api.onspeechend = (event) => {
                api.stop();
            };
            return api;
        }
        static hearing(next) {
            if (next === undefined)
                return false;
            if (next) {
                this.hearer().start();
            }
            else {
                this.hearer().stop();
            }
            return next;
        }
        static recognition_index(next = -1) {
            return next;
        }
        static recognition_offset(next = 0) {
            return next;
        }
        static recognition(index, next) {
            return next ?? null;
        }
        static recognitions() {
            if (!this.hearing())
                return [];
            return $.$mol_range2(index => this.recognition(index), () => Math.max(0, this.recognition_index() + this.recognition_offset()));
        }
        static commands() {
            return this.recognitions().map(result => result[0].transcript.toLowerCase().trim().replace(/[,\.]/g, ''));
        }
        static text() {
            return this.recognitions().map(result => result[0].transcript).join('');
        }
        commands_skip(next = 0) {
            $mol_speech.hearing();
            return next;
        }
        render() {
            const matchers = this.matchers();
            const commands = $mol_speech.commands();
            for (let i = this.commands_skip(); i < commands.length; ++i) {
                for (let matcher of matchers) {
                    const found = commands[i].match(matcher);
                    if (!found)
                        continue;
                    new $.$mol_defer(() => {
                        if (this.event_catch(found.slice(1))) {
                            this.commands_skip(i + 1);
                        }
                    });
                    return null;
                }
            }
            return null;
        }
        event_catch(found) {
            return false;
        }
        patterns() {
            return [];
        }
        matchers() {
            return this.patterns().map(pattern => {
                return new RegExp(this.prefix() + pattern + this.suffix(), 'i');
            });
        }
        prefix() {
            return '';
        }
        suffix() {
            return '[,\\s]+(?:please|would you kindly|пожалуйста|пожалуй 100|будь любезен|будь любезна|будь добра?)\.?$';
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_speech.prototype, "commands_skip", null);
    __decorate([
        $.$mol_mem
    ], $mol_speech.prototype, "render", null);
    __decorate([
        $.$mol_mem
    ], $mol_speech.prototype, "matchers", null);
    __decorate([
        $.$mol_mem
    ], $mol_speech, "speaker", null);
    __decorate([
        $.$mol_mem
    ], $mol_speech, "voices", null);
    __decorate([
        $.$mol_fiber.method
    ], $mol_speech, "say", null);
    __decorate([
        $.$mol_mem
    ], $mol_speech, "speaking", null);
    __decorate([
        $.$mol_mem
    ], $mol_speech, "hearer", null);
    __decorate([
        $.$mol_mem
    ], $mol_speech, "hearing", null);
    __decorate([
        $.$mol_mem
    ], $mol_speech, "recognition_index", null);
    __decorate([
        $.$mol_mem
    ], $mol_speech, "recognition_offset", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_speech, "recognition", null);
    __decorate([
        $.$mol_mem
    ], $mol_speech, "recognitions", null);
    __decorate([
        $.$mol_mem
    ], $mol_speech, "commands", null);
    __decorate([
        $.$mol_mem
    ], $mol_speech, "text", null);
    $.$mol_speech = $mol_speech;
})($ || ($ = {}));
//speech.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_view_component(View) {
        if (typeof HTMLElement !== 'function')
            return;
        class Component extends HTMLElement {
            view = new View;
            static tag = View.name.replace(/\W/g, '').replace(/^(?=\d+)/, '-').replace(/_/g, '-');
            auto;
            connectedCallback() {
                if (!this.shadowRoot) {
                    this.attachShadow({ mode: 'open' });
                    this.shadowRoot.append(document.getElementById(`$mol_style_attach`).cloneNode(true), this.view.dom_node());
                }
                this.auto = $.$mol_atom2_autorun(() => this.view.dom_tree());
            }
            disconnectedCallback() {
                this.auto.destructor();
                this.auto = undefined;
            }
            attributeChangedCallback(name, prev, next) {
                this.view[name](JSON.parse(next));
            }
            static observedAttributes = new Set;
        }
        function attributes_observe(proto) {
            if (!proto)
                return;
            if (proto === Reflect.getPrototypeOf({}))
                return;
            for (const field of Object.getOwnPropertyNames(proto)) {
                const descr = Reflect.getOwnPropertyDescriptor(proto, field);
                if (typeof descr.value !== 'function')
                    continue;
                if (descr.value.length === 0)
                    continue;
                Component.observedAttributes.add(field);
            }
            attributes_observe(Reflect.getPrototypeOf(proto));
        }
        attributes_observe(View.prototype);
        customElements.define(Component.tag, Component);
    }
    $.$mol_view_component = $mol_view_component;
})($ || ($ = {}));
//component.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        const { rem, px, per } = $.$mol_style_unit;
        $.$mol_style_define($$.$hyoo_talks_chat_page, {
            '@': {
                hyoo_talks_chat_page_embed: {
                    'true': {
                        backgroundColor: 'transparent',
                    }
                }
            },
            flex: {
                basis: rem(54),
                shrink: 0,
            },
            Title: {
                boxShadow: 'none',
                background: {
                    color: 'transparent',
                },
                width: rem(12),
                ':placeholder-shown': {
                    box: {
                        shadow: [{
                                inset: true,
                                x: 0,
                                y: 0,
                                blur: 0,
                                spread: px(1),
                                color: $.$mol_theme.line,
                            }],
                    },
                    background: {
                        color: $.$mol_theme.field,
                    },
                },
            },
            Search: {
                alignSelf: 'stretch',
                flex: {
                    shrink: 0,
                    basis: per(100),
                },
            },
            Body: {
                padding: 0,
                flex: {
                    grow: 0,
                    basis: 'auto',
                },
            },
            Disclaimer: {
                color: $.$mol_theme.shade,
                justifyContent: 'center',
            },
            Bubble: {
                margin: $.$mol_gap.block,
            },
            Foot: {
                padding: $.$mol_gap.block,
            },
            Draft_text: {
                flex: {
                    shrink: 1,
                },
            },
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//page.view.css.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $hyoo_talks_chat_page extends $.$hyoo_talks_chat_page {
            Head() {
                return this.embed() ? null : super.Head();
            }
            head() {
                return [
                    this.Title(),
                    this.Joined(),
                    this.Dump(),
                    this.Search_toggle(),
                    this.Tools(),
                    ...this.search_enabled() ? [this.Search()] : [],
                ];
            }
            search_enabled(next) {
                if (next === undefined)
                    return false;
                if (next) {
                    $.$mol_fiber_defer(() => this.Search().Query().focused(true));
                }
                else {
                    this.search('');
                }
                return next;
            }
            search_start(event) {
                this.search_enabled(true);
                event.preventDefault();
            }
            search_end(event) {
                this.search_enabled(false);
                this.Search_toggle().focused(true);
                event.preventDefault();
            }
            chat() {
                const domain = new this.$.$hyoo_talks_domain;
                return domain.chat(this.chat_id());
            }
            domain() {
                return this.chat().domain();
            }
            title(next) {
                return this.chat().title(next);
            }
            messages(next) {
                $.$mol_fiber_defer(() => {
                    if (this.Bubbles().gap_after() === 0) {
                        this.scroll_end();
                    }
                });
                return this.chat().messages(next);
            }
            message(id) {
                return this.domain().message(id);
            }
            bubbles() {
                return this.messages().map(msg => this.Bubble(msg.id()));
            }
            draft_controls() {
                return [
                    this.Draft_text(),
                    this.Speech_toggle(),
                    ...this.draft().text().trim() ? [this.Draft_send()] : []
                ];
            }
            draft(next) {
                return this.domain().user().draft(this.chat(), next);
            }
            joined(next) {
                const chat = this.chat();
                const user = this.domain().user();
                const joined = user.chats().indexOf(chat) !== -1;
                if (next === undefined)
                    return joined;
                if (next) {
                    user.chats([chat, ...user.chats()]);
                    user.read_messages(chat, chat.messages().length);
                    this.scroll_end();
                    this.$.$mol_notify.allowed(true);
                }
                else {
                    user.chats(user.chats().filter(c => c !== chat));
                }
                return next;
            }
            draft_text(next) {
                const chat = this.chat();
                const draft = this.draft();
                const user = this.domain().user();
                user.online_update();
                if (next !== undefined)
                    $.$mol_fiber_defer(() => {
                        const chats = new Set(user.chats());
                        if (!chats.has(chat))
                            user.chats([...chats, chat]);
                        if (draft.author() !== user)
                            draft.author(user);
                        const messages = new Set(chat.messages());
                        if (messages.has(draft)) {
                            if (!next) {
                                messages.delete(draft);
                                chat.messages([...messages]);
                            }
                        }
                        else {
                            if (next)
                                chat.messages([...messages, draft]);
                        }
                    });
                return draft.text(next);
            }
            talkers_auto_join(chat) {
                const talkers = chat.id().split('-');
                if (talkers.length === 1)
                    return;
                for (const id of talkers) {
                    const person = this.domain().person(id);
                    if (person.chats().findIndex(val => val.id() === chat.id()) !== -1)
                        continue;
                    person.chats([...person.chats(), chat]);
                }
            }
            draft_send() {
                const draft = this.draft();
                if (!draft.text())
                    return;
                const chat = this.chat();
                draft.moment(new this.$.$mol_time_moment());
                draft.complete(true);
                const messages = new Set(chat.messages());
                messages.delete(draft);
                chat.messages([...messages, draft]);
                this.draft(null);
                this.$.$mol_wait_rest();
                this.scroll_end();
                this.$.$mol_notify.allowed(true);
                this.talkers_auto_join(chat);
            }
            body_scroll_top(next) {
                const key = `${this}.body_scroll_top()`;
                return this.$.$mol_state_local.value(key, next)
                    ?? Number.MAX_SAFE_INTEGER;
            }
            scroll_end() {
                this.body_scroll_top(this.Body().dom_node().scrollHeight);
            }
            update_last_readed_message() {
                let [, last_viewed] = this.Bubbles().view_window();
                const last_readed = this.domain().user().read_messages(this.chat());
                while (last_viewed >= last_readed) {
                    const message = this.chat().messages()[last_viewed];
                    if (message === undefined || message.complete() === true) {
                        break;
                    }
                    last_viewed--;
                }
                return this.$.$mol_fiber_defer(() => {
                    if (last_viewed > last_readed) {
                        this.domain().user().read_messages(this.chat(), last_viewed);
                    }
                });
            }
            dump_blob() {
                const messages = this.chat().messages();
                const lines = messages.map(msg => {
                    return [
                        msg.author()?.name() || msg.author()?.id() || '',
                        msg.text() ?? '',
                        msg.moment()?.toOffset(new $.$mol_time_moment().offset).toString('YYYY-MM-DD hh:mm:ss') ?? '',
                    ].map(v => JSON.stringify(v)).join('\t');
                });
                const tsv = ['Name\tMessage\tMoment', ...lines].join('\n');
                return new Blob([tsv], { type: 'text/tab-separated-values' });
            }
            dump_name() {
                const name = this.chat().title() || this.chat().id() || super.dump_name();
                return name + '.csv';
            }
            hearing(next) {
                return this.$.$mol_speech.hearing(next);
            }
            speech_index(next = 0) {
                return next;
            }
            speech_to_text() {
                if (!this.hearing())
                    return null;
                const index = this.speech_index();
                const last = this.$.$mol_speech.recognition(index);
                if (!last)
                    return null;
                let text = last[0].transcript;
                const sure = last[0].confidence;
                if (sure < .75)
                    text = '`' + text + '`';
                this.draft_text(text);
                if (last.isFinal) {
                    new $.$mol_after_tick($.$mol_fiber_root(() => {
                        this.speech_index(index + 1);
                        this.draft_send();
                    }));
                }
                return null;
            }
            auto() {
                this.speech_to_text();
                this.update_last_readed_message();
            }
        }
        __decorate([
            $.$mol_mem
        ], $hyoo_talks_chat_page.prototype, "search_enabled", null);
        __decorate([
            $.$mol_mem
        ], $hyoo_talks_chat_page.prototype, "chat", null);
        __decorate([
            $.$mol_mem
        ], $hyoo_talks_chat_page.prototype, "domain", null);
        __decorate([
            $.$mol_mem
        ], $hyoo_talks_chat_page.prototype, "messages", null);
        __decorate([
            $.$mol_mem
        ], $hyoo_talks_chat_page.prototype, "bubbles", null);
        __decorate([
            $.$mol_mem
        ], $hyoo_talks_chat_page.prototype, "draft", null);
        __decorate([
            $.$mol_mem
        ], $hyoo_talks_chat_page.prototype, "joined", null);
        __decorate([
            $.$mol_mem
        ], $hyoo_talks_chat_page.prototype, "update_last_readed_message", null);
        __decorate([
            $.$mol_mem
        ], $hyoo_talks_chat_page.prototype, "speech_index", null);
        __decorate([
            $.$mol_mem
        ], $hyoo_talks_chat_page.prototype, "speech_to_text", null);
        $$.$hyoo_talks_chat_page = $hyoo_talks_chat_page;
        $.$mol_view_component($hyoo_talks_chat_page);
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//page.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_theme_auto extends $.$mol_plugin {
        attr() {
            return {
                mol_theme: this.theme()
            };
        }
        theme() {
            return "";
        }
    }
    $.$mol_theme_auto = $mol_theme_auto;
})($ || ($ = {}));
//auto.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_media extends $.$mol_object2 {
        static match(query) {
            const res = this.$.$mol_dom_context.matchMedia(query);
            res.onchange = () => $.$mol_mem_cached(() => this.match(query), res.matches);
            return res.matches;
        }
    }
    __decorate([
        $.$mol_mem_key
    ], $mol_media, "match", null);
    $.$mol_media = $mol_media;
})($ || ($ = {}));
//media.js.map
;
"use strict";
var $;
(function ($) {
    function parse(theme) {
        if (theme === 'true')
            return true;
        if (theme === 'false')
            return false;
        return null;
    }
    function $mol_lights(next) {
        const arg = parse(this.$mol_state_arg.value('mol_lights'));
        const base = this.$mol_media.match('(prefers-color-scheme: light)');
        if (next === undefined) {
            return arg ?? this.$mol_state_local.value('$mol_lights') ?? base;
        }
        else {
            if (arg === null) {
                this.$mol_state_local.value('$mol_lights', next === base ? null : next);
            }
            else {
                this.$mol_state_arg.value('mol_lights', String(next));
            }
            return next;
        }
    }
    $.$mol_lights = $mol_lights;
})($ || ($ = {}));
//lights.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_theme_auto extends $.$mol_theme_auto {
            theme() {
                return this.$.$mol_lights() ? '$mol_theme_light' : '$mol_theme_dark';
            }
        }
        $$.$mol_theme_auto = $mol_theme_auto;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//auto.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_icon_plus extends $.$mol_icon {
        path() {
            return "M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z";
        }
    }
    $.$mol_icon_plus = $mol_icon_plus;
})($ || ($ = {}));
//plus.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_icon_brightness_6 extends $.$mol_icon {
        path() {
            return "M12,18V6C15.31,6 18,8.69 18,12C18,15.31 15.31,18 12,18M20,15.31L23.31,12L20,8.69V4H15.31L12,0.69L8.69,4H4V8.69L0.69,12L4,15.31V20H8.69L12,23.31L15.31,20H20V15.31Z";
        }
    }
    $.$mol_icon_brightness_6 = $mol_icon_brightness_6;
})($ || ($ = {}));
//6.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_lights_toggle extends $.$mol_check_icon {
        Icon() {
            return this.Lights_icon();
        }
        hint() {
            return this.$.$mol_locale.text('$mol_lights_toggle_hint');
        }
        checked(val) {
            return this.lights(val);
        }
        Lights_icon() {
            const obj = new this.$.$mol_icon_brightness_6();
            return obj;
        }
        lights(val) {
            if (val !== undefined)
                return val;
            return false;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_lights_toggle.prototype, "Lights_icon", null);
    __decorate([
        $.$mol_mem
    ], $mol_lights_toggle.prototype, "lights", null);
    $.$mol_lights_toggle = $mol_lights_toggle;
})($ || ($ = {}));
//toggle.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_lights_toggle extends $.$mol_lights_toggle {
            lights(next) {
                return this.$.$mol_lights(next);
            }
        }
        $$.$mol_lights_toggle = $mol_lights_toggle;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//toggle.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_icon_github_circle extends $.$mol_icon {
        path() {
            return "M12,2C6.48,2 2,6.48 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12C22,6.48 17.52,2 12,2Z";
        }
    }
    $.$mol_icon_github_circle = $mol_icon_github_circle;
})($ || ($ = {}));
//circle.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_link_source extends $.$mol_link {
        hint() {
            return this.$.$mol_locale.text('$mol_link_source_hint');
        }
        sub() {
            return [
                this.Icon()
            ];
        }
        Icon() {
            const obj = new this.$.$mol_icon_github_circle();
            return obj;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_link_source.prototype, "Icon", null);
    $.$mol_link_source = $mol_link_source;
})($ || ($ = {}));
//source.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_icon_settings extends $.$mol_icon {
        path() {
            return "M12,15.5C10.07,15.5 8.5,13.93 8.5,12C8.5,10.07 10.07,8.5 12,8.5C13.93,8.5 15.5,10.07 15.5,12C15.5,13.93 13.93,15.5 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.21,8.95 2.27,9.22 2.46,9.37L4.57,11C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.21,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.67 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z";
        }
    }
    $.$mol_icon_settings = $mol_icon_settings;
})($ || ($ = {}));
//settings.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    class $hyoo_talks extends $.$mol_book2 {
        domain() {
            const obj = new this.$.$hyoo_talks_domain();
            return obj;
        }
        embed() {
            return false;
        }
        attr() {
            return {
                ...super.attr(),
                hyoo_talks_embed: this.embed()
            };
        }
        style() {
            return {
                ...super.style(),
                "background-image": this.background()
            };
        }
        plugins() {
            return [
                this.Theme()
            ];
        }
        Roster() {
            const obj = new this.$.$mol_page();
            obj.title = () => this.$.$mol_locale.text('$hyoo_talks_Roster_title');
            obj.tools = () => [
                this.Chat_new(),
                this.Lights(),
                this.Source(),
                this.Settings_link()
            ];
            obj.body = () => this.roster_body();
            return obj;
        }
        Settings() {
            const obj = new this.$.$hyoo_talks_person_settings();
            obj.person = () => this.user();
            obj.tools = () => [
                this.Settings_close()
            ];
            return obj;
        }
        Chat_page(id) {
            const obj = new this.$.$hyoo_talks_chat_page();
            obj.chat = () => this.chat(id);
            obj.embed = () => this.embed();
            obj.default_title = () => this.chat_title(id);
            obj.tools = () => [
                this.Chat_close()
            ];
            return obj;
        }
        Placeholder() {
            const obj = new this.$.$hyoo_talks_placeholder();
            obj.Title = () => null;
            obj.Tools = () => null;
            obj.bg_transparent = () => this.embed();
            return obj;
        }
        Chat_unread_count(id) {
            const obj = new this.$.$mol_speck();
            obj.value = () => this.chat_unread_count(id);
            return obj;
        }
        Chat_link_title(id) {
            const obj = new this.$.$mol_dimmer();
            obj.haystack = () => this.chat_title(id);
            obj.needle = () => this.links_query();
            return obj;
        }
        Chat_link(id) {
            const obj = new this.$.$mol_link();
            obj.arg = () => this.chat_arg(id);
            obj.sub = () => this.chat_link_sub(id);
            return obj;
        }
        unnamed_person() {
            return this.$.$mol_locale.text('$hyoo_talks_unnamed_person');
        }
        background() {
            return "";
        }
        Theme() {
            const obj = new this.$.$mol_theme_auto();
            return obj;
        }
        chat_new_id() {
            return "";
        }
        Chat_new_icon() {
            const obj = new this.$.$mol_icon_plus();
            return obj;
        }
        Chat_new() {
            const obj = new this.$.$mol_link();
            obj.arg = () => ({
                chat: this.chat_new_id()
            });
            obj.hint = () => this.$.$mol_locale.text('$hyoo_talks_Chat_new_hint');
            obj.sub = () => [
                this.Chat_new_icon()
            ];
            return obj;
        }
        Lights() {
            const obj = new this.$.$mol_lights_toggle();
            return obj;
        }
        Source() {
            const obj = new this.$.$mol_link_source();
            obj.uri = () => "https://github.com/hyoo-ru/talks.hyoo.ru";
            return obj;
        }
        Settings_icon() {
            const obj = new this.$.$mol_icon_settings();
            return obj;
        }
        Settings_link() {
            const obj = new this.$.$mol_link();
            obj.arg = () => ({
                settings: ""
            });
            obj.hint = () => this.$.$mol_locale.text('$hyoo_talks_Settings_link_hint');
            obj.sub = () => [
                this.Settings_icon()
            ];
            return obj;
        }
        links_query(val) {
            if (val !== undefined)
                return val;
            return "";
        }
        Links_query() {
            const obj = new this.$.$mol_search();
            obj.query = (val) => this.links_query(val);
            return obj;
        }
        links() {
            return [];
        }
        Links() {
            const obj = new this.$.$mol_list();
            obj.rows = () => this.links();
            return obj;
        }
        roster_body() {
            return [
                this.Links_query(),
                this.Links()
            ];
        }
        user() {
            const obj = new this.$.$hyoo_talks_person();
            return obj;
        }
        Settings_close_icon() {
            const obj = new this.$.$mol_icon_cross();
            return obj;
        }
        Settings_close() {
            const obj = new this.$.$mol_link();
            obj.arg = () => ({
                settings: null
            });
            obj.sub = () => [
                this.Settings_close_icon()
            ];
            return obj;
        }
        chat(id) {
            const obj = new this.$.$hyoo_talks_chat();
            return obj;
        }
        Chat_icon() {
            const obj = new this.$.$mol_icon_cross();
            return obj;
        }
        Chat_close() {
            const obj = new this.$.$mol_link();
            obj.arg = () => ({
                chat: null
            });
            obj.sub = () => [
                this.Chat_icon()
            ];
            return obj;
        }
        chat_unread_count(id) {
            return 0;
        }
        chat_title(id) {
            return "";
        }
        chat_arg(id) {
            return {};
        }
        chat_link_sub(id) {
            return [];
        }
    }
    __decorate([
        $.$mol_mem
    ], $hyoo_talks.prototype, "domain", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_talks.prototype, "Roster", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_talks.prototype, "Settings", null);
    __decorate([
        $.$mol_mem_key
    ], $hyoo_talks.prototype, "Chat_page", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_talks.prototype, "Placeholder", null);
    __decorate([
        $.$mol_mem_key
    ], $hyoo_talks.prototype, "Chat_unread_count", null);
    __decorate([
        $.$mol_mem_key
    ], $hyoo_talks.prototype, "Chat_link_title", null);
    __decorate([
        $.$mol_mem_key
    ], $hyoo_talks.prototype, "Chat_link", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_talks.prototype, "Theme", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_talks.prototype, "Chat_new_icon", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_talks.prototype, "Chat_new", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_talks.prototype, "Lights", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_talks.prototype, "Source", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_talks.prototype, "Settings_icon", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_talks.prototype, "Settings_link", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_talks.prototype, "links_query", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_talks.prototype, "Links_query", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_talks.prototype, "Links", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_talks.prototype, "user", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_talks.prototype, "Settings_close_icon", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_talks.prototype, "Settings_close", null);
    __decorate([
        $.$mol_mem_key
    ], $hyoo_talks.prototype, "chat", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_talks.prototype, "Chat_icon", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_talks.prototype, "Chat_close", null);
    $.$hyoo_talks = $hyoo_talks;
    class $hyoo_talks_placeholder extends $.$mol_page {
        bg_transparent() {
            return false;
        }
        attr() {
            return {
                ...super.attr(),
                hyoo_talks_placeholder_transparent: this.bg_transparent()
            };
        }
    }
    $.$hyoo_talks_placeholder = $hyoo_talks_placeholder;
})($ || ($ = {}));
//talk.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_match_text(query, values) {
        const tags = query.toLowerCase().trim().split(/\s+/).filter(tag => tag);
        if (tags.length === 0)
            return () => true;
        return (variant) => {
            const vals = values(variant);
            return tags.every(tag => vals.some(val => val.toLowerCase().indexOf(tag) >= 0));
        };
    }
    $.$mol_match_text = $mol_match_text;
})($ || ($ = {}));
//text.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        const { rem } = $.$mol_style_unit;
        const { url } = $.$mol_style_func;
        $.$mol_style_define($$.$hyoo_talks, {
            '@': {
                hyoo_talks_embed: {
                    'true': {
                        background: {
                            color: 'transparent',
                            image: 'none',
                        },
                    },
                },
            },
            background: {
                size: ['cover'],
            },
            Roster: {
                flex: {
                    basis: rem(26),
                    shrink: 0,
                },
                Body: {
                    padding: $.$mol_gap.block,
                },
            },
            Links_query: {
                alignSelf: 'auto',
                flex: {
                    grow: 0,
                    shrink: 0,
                },
            },
            Placeholder: {
                Head: {
                    padding: 0,
                },
                Body: {
                    padding: 0,
                },
                '@': {
                    hyoo_talks_placeholder_transparent: {
                        'true': {
                            backgroundColor: 'transparent',
                        }
                    }
                },
            },
            Chat_unread_count: {
                left: 0,
            }
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//talk.view.css.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $hyoo_talks extends $.$hyoo_talks {
            chat_id_current() {
                const opener = this.$.$mol_state_arg.value('embed');
                const origin = opener ? new URL(opener).origin : '';
                const id = this.$.$mol_state_arg.value('chat') ?? '';
                return origin ? origin + '/' + id : id;
            }
            settings_opened() {
                return this.$.$mol_state_arg.value('settings') !== null;
            }
            roster_opened() {
                return this.$.$mol_state_arg.value('roster') !== null;
            }
            embed() {
                const val = this.$.$mol_state_arg.value('embed');
                if (val !== null)
                    return true;
                if (this.roster_opened())
                    return false;
                const context = this.$.$mol_dom_context;
                return context.self !== context.parent;
            }
            pages() {
                this.user().online_update();
                const chat = this.chat_id_current();
                const roster = !this.embed();
                return [
                    ...roster ? [this.Roster()] : [],
                    ...chat ? [this.Chat_page(chat)] : [],
                    ...this.settings_opened() ? [this.Settings()] : [],
                ];
            }
            user() {
                return this.domain().user();
            }
            background() {
                const uri = this.user().background();
                return uri ? `url(${JSON.stringify(uri)})` : 'none';
            }
            roster_body() {
                return [
                    ...this.user().chats().length > 1 ? [this.Links_query()] : [],
                    this.Links(),
                ];
            }
            links() {
                return this.user().chats()
                    .filter($.$mol_match_text(this.links_query(), chat => [chat.title()]))
                    .map(chat => this.Chat_link(chat.id()));
            }
            chat(id) {
                return this.domain().chat(id);
            }
            chat_title(id) {
                const talkers = id.split('-');
                if (talkers.length === 1)
                    return this.chat(id).title() || id;
                const unnamed = this.$.$mol_locale.text('$hyoo_talks_unnamed_person');
                const auto_title = talkers
                    .filter(id => id !== this.domain().user().id())
                    .map(id => this.domain().person(id).name() || unnamed).join(',');
                return this.chat(id).title() || auto_title;
            }
            chat_arg(id) {
                return { chat: id };
            }
            chat_new_id() {
                return $.$mol_guid();
            }
            chat_unread_count(id) {
                const chat = this.chat(id);
                const last_index = this.user().read_messages(chat);
                const messages = this.chat(id).messages();
                const messages_completed = messages.slice(last_index).filter(msg => msg.complete());
                return messages_completed.length;
            }
            message_notify(chat) {
                if (!this.chat_unread_count(chat.id()))
                    return null;
                this.$.$mol_notify.show({
                    context: `${chat.title()}`,
                    message: `Новое сообщение`,
                    uri: this.$.$mol_state_arg.link({ chat: chat.id() })
                });
                return null;
            }
            chat_link_sub(id) {
                return [
                    ...this.chat_unread_count(id) === 0 ? [] : [this.Chat_unread_count(id)],
                    this.Chat_link_title(id),
                ];
            }
            auto() {
                for (const chat of this.user().chats()) {
                    this.message_notify(chat);
                }
                return null;
            }
        }
        __decorate([
            $.$mol_mem
        ], $hyoo_talks.prototype, "chat_id_current", null);
        __decorate([
            $.$mol_mem
        ], $hyoo_talks.prototype, "embed", null);
        __decorate([
            $.$mol_mem
        ], $hyoo_talks.prototype, "pages", null);
        __decorate([
            $.$mol_mem
        ], $hyoo_talks.prototype, "links", null);
        __decorate([
            $.$mol_mem_key
        ], $hyoo_talks.prototype, "chat_title", null);
        __decorate([
            $.$mol_mem_key
        ], $hyoo_talks.prototype, "chat_unread_count", null);
        __decorate([
            $.$mol_mem_key
        ], $hyoo_talks.prototype, "message_notify", null);
        $$.$hyoo_talks = $hyoo_talks;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//talk.view.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("hyoo/talks/talks.view.css", "[hyoo_talks][mol_theme=\"$mol_theme_light\"] {\n\t--mol_theme_back: hsl( 210 , 50% , 99%, .8 );\n\t--hyoo_talks_theme_talker: hsla( 0 , 0% , 90%, .75 );\n}\n\n[hyoo_talks][mol_theme=\"$mol_theme_dark\"] {\n\t--mol_theme_back: hsl( 210 , 50% , 10%, .8 );\n\t--hyoo_talks_theme_talker: hsla( 0 , 0% , 5%, .5 );\n}\n");
})($ || ($ = {}));
//talks.view.css.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_env() {
        return {};
    }
    $.$mol_env = $mol_env;
})($ || ($ = {}));
//env.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_env = function $mol_env() {
        return this.process.env;
    };
})($ || ($ = {}));
//env.node.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_exec(dir, command, ...args) {
        let [app, ...args0] = command.split(' ');
        args = [...args0, ...args];
        this.$mol_log3_come({
            place: '$mol_exec',
            dir: $node.path.relative('', dir),
            message: 'Run',
            command: `${app} ${args.join(' ')}`,
        });
        var res = $node['child_process'].spawnSync(app, args, {
            cwd: $node.path.resolve(dir),
            shell: true,
            env: this.$mol_env(),
        });
        if (res.status || res.error)
            return $.$mol_fail(res.error || new Error(res.stderr.toString()));
        if (!res.stdout)
            res.stdout = Buffer.from([]);
        return res;
    }
    $.$mol_exec = $mol_exec;
})($ || ($ = {}));
//exec.node.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_db_database {
        native;
        constructor(native) {
            this.native = native;
        }
        get name() {
            return this.native.name;
        }
        get version() {
            return this.native.version;
        }
        get stores() {
            return [...this.native.objectStoreNames];
        }
        read(...names) {
            return new $.$mol_db_transaction(this.native.transaction(names, 'readonly')).stores;
        }
        change(...names) {
            return new $.$mol_db_transaction(this.native.transaction(names, 'readwrite'));
        }
        kill() {
            this.native.close();
            const request = $.$mol_dom_context.indexedDB.deleteDatabase(this.name);
            request.onblocked = console.error;
            return $.$mol_db_response(request).then(() => { });
        }
        destructor() {
            this.native.close();
        }
    }
    $.$mol_db_database = $mol_db_database;
})($ || ($ = {}));
//database.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_db_transaction {
        native;
        constructor(native) {
            this.native = native;
        }
        get stores() {
            return new Proxy({}, {
                ownKeys: () => [...this.native.objectStoreNames],
                has: (_, name) => this.native.objectStoreNames.contains(name),
                get: (_, name) => new $.$mol_db_store(this.native.objectStore(name)),
            });
        }
        store_make(name) {
            return this.native.db.createObjectStore(name, { autoIncrement: true });
        }
        store_drop(name) {
            this.native.db.deleteObjectStore(name);
            return this;
        }
        abort() {
            this.native.abort();
        }
        commit() {
            this.native.commit();
            return new Promise((done, fail) => {
                this.native.onerror = () => fail(new Error(this.native.error.message));
                this.native.oncomplete = () => done();
            });
        }
        get db() {
            return new $.$mol_db_database(this.native.db);
        }
    }
    $.$mol_db_transaction = $mol_db_transaction;
})($ || ($ = {}));
//transaction.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_db_index {
        native;
        constructor(native) {
            this.native = native;
        }
        get name() {
            return this.native.name;
        }
        get paths() {
            return this.native.keyPath;
        }
        get unique() {
            return this.native.unique;
        }
        get multiple() {
            return this.native.multiEntry;
        }
        get store() {
            return new $.$mol_db_store(this.native.objectStore);
        }
        get transaction() {
            return this.store.transaction;
        }
        get db() {
            return this.store.db;
        }
        count(keys) {
            return $.$mol_db_response(this.native.count(keys));
        }
        get(key) {
            return $.$mol_db_response(this.native.get(key));
        }
        select(key, count) {
            return $.$mol_db_response(this.native.getAll(key, count));
        }
    }
    $.$mol_db_index = $mol_db_index;
})($ || ($ = {}));
//index.js.map
;
"use strict";
//index_schema.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_float extends $.$mol_view {
        style() {
            return {
                ...super.style(),
                minHeight: "auto"
            };
        }
    }
    $.$mol_float = $mol_float;
})($ || ($ = {}));
//float.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/float/float.view.css", "[mol_float] {\n\tposition: sticky;\n\ttop: 0;\n\tleft: 0;\n\tz-index: 1;\n\topacity: 1;\n\ttransition: opacity .25s ease-in;\n\tdisplay: block;\n\tbackground: var(--mol_theme_back);\n\tbox-shadow: 0 0 .5rem hsla(0,0%,0%,.25);\n}\n\n");
})($ || ($ = {}));
//float.view.css.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_check_expand extends $.$mol_check {
        minimal_height() {
            return 40;
        }
        Icon() {
            const obj = new this.$.$mol_icon_chevron();
            return obj;
        }
        level() {
            return 0;
        }
        style() {
            return {
                ...super.style(),
                paddingLeft: this.level_style()
            };
        }
        checked(val) {
            return this.expanded(val);
        }
        enabled() {
            return this.expandable();
        }
        level_style() {
            return "0px";
        }
        expanded(val) {
            if (val !== undefined)
                return val;
            return false;
        }
        expandable() {
            return false;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_check_expand.prototype, "Icon", null);
    __decorate([
        $.$mol_mem
    ], $mol_check_expand.prototype, "expanded", null);
    $.$mol_check_expand = $mol_check_expand;
})($ || ($ = {}));
//expand.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/check/expand/expand.view.css", "[mol_check_expand] {\n\tmin-width: 20px;\n}\n\n[mol_check_expand][disabled] [mol_check_expand_icon] {\n\tvisibility: hidden;\n}\n\n[mol_check_expand_icon] {\n\tbox-shadow: none;\n\tmargin: .25rem 0;\n}\n[mol_check_expand_icon] {\n\ttransform: rotateZ(0deg);\n}\n\n[mol_check_checked] > [mol_check_expand_icon] {\n\ttransform: rotateZ(90deg);\n}\n\n[mol_check_expand_icon] {\n\tvertical-align: text-top;\n}\n\n[mol_check_expand_label] {\n\tmargin-left: 0;\n}\n");
})($ || ($ = {}));
//expand.view.css.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_check_expand extends $.$mol_check_expand {
            level_style() {
                return `${this.level() * 1 - 1}rem`;
            }
            expandable() {
                return this.expanded() !== null;
            }
        }
        $$.$mol_check_expand = $mol_check_expand;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//expand.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_grid extends $.$mol_view {
        row_height() {
            return 32;
        }
        row_ids() {
            return [];
        }
        row_id(index) {
            return null;
        }
        col_ids() {
            return [];
        }
        records() {
            return {};
        }
        record(id) {
            return null;
        }
        hierarchy() {
            return null;
        }
        hierarchy_col() {
            return "";
        }
        sub() {
            return [
                this.Head(),
                this.Table()
            ];
        }
        Head() {
            const obj = new this.$.$mol_grid_row();
            obj.cells = () => this.head_cells();
            return obj;
        }
        Row(id) {
            const obj = new this.$.$mol_grid_row();
            obj.minimal_height = () => this.row_height();
            obj.cells = () => this.cells(id);
            return obj;
        }
        Cell(id) {
            const obj = new this.$.$mol_view();
            return obj;
        }
        cell(id) {
            return null;
        }
        Cell_text(id) {
            const obj = new this.$.$mol_grid_cell();
            obj.sub = () => this.cell_content_text(id);
            return obj;
        }
        Cell_number(id) {
            const obj = new this.$.$mol_grid_number();
            obj.sub = () => this.cell_content_number(id);
            return obj;
        }
        Col_head(id) {
            const obj = new this.$.$mol_float();
            obj.dom_name = () => "th";
            obj.sub = () => this.col_head_content(id);
            return obj;
        }
        Cell_branch(id) {
            const obj = new this.$.$mol_check_expand();
            obj.level = () => this.cell_level(id);
            obj.label = () => this.cell_content(id);
            obj.expanded = (val) => this.cell_expanded(id, val);
            return obj;
        }
        Cell_content(id) {
            return [
                this.Cell_dimmer(id)
            ];
        }
        rows() {
            return [];
        }
        Table() {
            const obj = new this.$.$mol_grid_table();
            obj.sub = () => this.rows();
            return obj;
        }
        head_cells() {
            return [];
        }
        cells(id) {
            return [];
        }
        cell_content(id) {
            return [];
        }
        cell_content_text(id) {
            return this.cell_content(id);
        }
        cell_content_number(id) {
            return this.cell_content(id);
        }
        col_head_content(id) {
            return [];
        }
        cell_level(id) {
            return 0;
        }
        cell_expanded(id, val) {
            if (val !== undefined)
                return val;
            return false;
        }
        needle() {
            return "";
        }
        cell_value(id) {
            return "";
        }
        Cell_dimmer(id) {
            const obj = new this.$.$mol_dimmer();
            obj.needle = () => this.needle();
            obj.haystack = () => this.cell_value(id);
            return obj;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_grid.prototype, "Head", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_grid.prototype, "Row", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_grid.prototype, "Cell", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_grid.prototype, "Cell_text", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_grid.prototype, "Cell_number", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_grid.prototype, "Col_head", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_grid.prototype, "Cell_branch", null);
    __decorate([
        $.$mol_mem
    ], $mol_grid.prototype, "Table", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_grid.prototype, "cell_expanded", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_grid.prototype, "Cell_dimmer", null);
    $.$mol_grid = $mol_grid;
    class $mol_grid_table extends $.$mol_list {
        dom_name() {
            return "table";
        }
    }
    $.$mol_grid_table = $mol_grid_table;
    class $mol_grid_row extends $.$mol_view {
        dom_name() {
            return "tr";
        }
        sub() {
            return this.cells();
        }
        cells() {
            return [];
        }
    }
    $.$mol_grid_row = $mol_grid_row;
    class $mol_grid_cell extends $.$mol_view {
        dom_name() {
            return "td";
        }
        minimal_height() {
            return 40;
        }
    }
    $.$mol_grid_cell = $mol_grid_cell;
    class $mol_grid_number extends $mol_grid_cell {
    }
    $.$mol_grid_number = $mol_grid_number;
})($ || ($ = {}));
//grid.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/grid/grid.view.css", "[mol_grid] {\n\tdisplay: block;\n\tflex: 1 1 auto;\n\tposition: relative;\n}\n\n[mol_grid_gap] {\n\tposition: absolute;\n\tpadding: .1px;\n\ttop: 0;\n\ttransform: translateZ(0);\n}\n\n[mol_grid_table] {\n\tborder-spacing: 0;\n\tdisplay: table-row-group;\n\tposition: relative;\n}\n\n[mol_grid_table] > * {\n\tdisplay: table-row;\n\ttransition: none;\n}\n\n[mol_grid_head] > * ,\n[mol_grid_table] > * > * {\n\tdisplay: table-cell;\n\tpadding: var(--mol_gap_text);\n\twhite-space: nowrap;\n\tvertical-align: middle;\n\tbox-shadow: inset 0 0 0 1px var(--mol_theme_line);\n}\n\n[mol_grid_head] {\n\tdisplay: table-row;\n\ttransform: none !important;\n}\n\n[mol_grid_head] > * {\n\tbackground: var(--mol_theme_back);\n}\n\n[mol_grid_cell_number] {\n\ttext-align: right;\n}\n\n[mol_grid_col_head] {\n\tfont-weight: inherit;\n\ttext-align: inherit;\n\tdisplay: table-cell;\n}\n\n[mol_grid_cell_dimmer] {\n\tdisplay: inline-block;\n\tvertical-align: inherit;\n}\n");
})($ || ($ = {}));
//grid.view.css.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_grid extends $.$mol_grid {
            head_cells() {
                return this.col_ids().map(colId => this.Col_head(colId));
            }
            col_head_content(colId) {
                return [colId];
            }
            rows() {
                return this.row_ids().map(id => this.Row(id));
            }
            cells(row_id) {
                return this.col_ids().map(col_id => this.Cell({ row: row_id, col: col_id }));
            }
            col_type(col_id) {
                if (col_id === this.hierarchy_col())
                    return 'branch';
                const rowFirst = this.row_id(0);
                const val = this.record(rowFirst[rowFirst.length - 1])[col_id];
                if (typeof val === 'number')
                    return 'number';
                return 'text';
            }
            Cell(id) {
                switch (this.col_type(id.col).valueOf()) {
                    case 'branch': return this.Cell_branch(id);
                    case 'number': return this.Cell_number(id);
                }
                return this.Cell_text(id);
            }
            cell_content(id) {
                return [this.record(id.row[id.row.length - 1])[id.col]];
            }
            cell_content_text(id) {
                return this.cell_content(id).map(val => typeof val === 'object' ? JSON.stringify(val) : val);
            }
            records() {
                return [];
            }
            record(id) {
                return this.records()[id];
            }
            record_ids() {
                return Object.keys(this.records());
            }
            row_id(index) {
                return this.row_ids().slice(index, index + 1).valueOf()[0];
            }
            col_ids() {
                const rowFirst = this.row_id(0);
                if (rowFirst === void 0)
                    return [];
                const record = this.record(rowFirst[rowFirst.length - 1]);
                if (!record)
                    return [];
                return Object.keys(record);
            }
            hierarchy() {
                const hierarchy = {};
                const root = hierarchy[''] = {
                    id: '',
                    parent: null,
                    sub: [],
                };
                this.record_ids().map(id => {
                    root.sub.push(hierarchy[id] = {
                        id,
                        parent: root,
                        sub: [],
                    });
                });
                return hierarchy;
            }
            row_sub_ids(row) {
                return this.hierarchy()[row[row.length - 1]].sub.map(child => row.concat(child.id));
            }
            row_root_id() {
                return [''];
            }
            cell_level(id) {
                return id.row.length - 1;
            }
            row_ids() {
                const next = [];
                const add = (row) => {
                    next.push(row);
                    if (this.row_expanded(row)) {
                        this.row_sub_ids(row).forEach(child => add(child));
                    }
                };
                this.row_sub_ids(this.row_root_id()).forEach(child => add(child));
                return next;
            }
            row_expanded(row_id, next) {
                if (!this.row_sub_ids(row_id).length)
                    return null;
                const key = `row_expanded(${JSON.stringify(row_id)})`;
                const next2 = $.$mol_state_session.value(key, next);
                return (next2 == null) ? this.row_expanded_default(row_id) : next2;
            }
            row_expanded_default(row_id) {
                return true;
            }
            cell_expanded(id, next) {
                return this.row_expanded(id.row, next);
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_grid.prototype, "head_cells", null);
        __decorate([
            $.$mol_mem
        ], $mol_grid.prototype, "rows", null);
        __decorate([
            $.$mol_mem_key
        ], $mol_grid.prototype, "col_type", null);
        __decorate([
            $.$mol_mem
        ], $mol_grid.prototype, "record_ids", null);
        __decorate([
            $.$mol_mem
        ], $mol_grid.prototype, "hierarchy", null);
        __decorate([
            $.$mol_mem
        ], $mol_grid.prototype, "row_ids", null);
        $$.$mol_grid = $mol_grid;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//grid.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_link_iconed extends $.$mol_link {
        sub() {
            return [
                this.Icon()
            ];
        }
        content() {
            return [
                this.title()
            ];
        }
        host() {
            return "";
        }
        icon() {
            return "";
        }
        Icon() {
            const obj = new this.$.$mol_image();
            obj.uri = () => this.icon();
            obj.title = () => "";
            return obj;
        }
        title() {
            return this.uri();
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_link_iconed.prototype, "Icon", null);
    $.$mol_link_iconed = $mol_link_iconed;
})($ || ($ = {}));
//iconed.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/link/iconed/iconed.view.css", "[mol_link_iconed] {\n\talign-items: center;\n\tcolor: var(--mol_theme_control);\n\tdisplay: inline;\n\tpadding: var(--mol_gap_text);\n}\n\n[mol_link_iconed_icon] {\n\tbox-shadow: none;\n\theight: 1em;\n\twidth: 1em;\n\tdisplay: inline-block;\n\tmargin: .125rem 0;\n\tvertical-align: text-bottom;\n\tborder-radius: 0;\n\tobject-fit: scale-down;\n}\n\n[mol_theme=\"$mol_theme_dark\"] [mol_link_iconed_icon] {\n\tfilter: invert(1) hue-rotate(180deg);\n}\n");
})($ || ($ = {}));
//iconed.view.css.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_link_iconed extends $.$mol_link_iconed {
            icon() {
                return `https://favicon.yandex.net/favicon/${this.host()}?color=0,0,0,0&size=32&stub=1`;
            }
            host() {
                const base = this.$.$mol_state_arg.href();
                const url = new URL(this.uri(), base);
                return url.hostname;
            }
            title() {
                return decodeURIComponent(this.uri().split(this.host(), 2)[1]).replace(/^\//, ' ');
            }
            sub() {
                return [
                    ...this.host() ? [this.Icon()] : [],
                    ...this.content(),
                ];
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_link_iconed.prototype, "host", null);
        __decorate([
            $.$mol_mem
        ], $mol_link_iconed.prototype, "title", null);
        $$.$mol_link_iconed = $mol_link_iconed;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//iconed.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_text extends $.$mol_list {
        uri_base() {
            return "";
        }
        text() {
            return "";
        }
        tokens() {
            return [];
        }
        Quote(id) {
            const obj = new this.$.$mol_text();
            obj.text = () => this.quote_text(id);
            return obj;
        }
        Row(id) {
            const obj = new this.$.$mol_text_row();
            obj.sub = () => this.block_content(id);
            obj.type = () => this.block_type(id);
            return obj;
        }
        Span(id) {
            const obj = new this.$.$mol_text_span();
            return obj;
        }
        String(id) {
            const obj = new this.$.$mol_text_string();
            obj.needle = () => this.highlight();
            return obj;
        }
        Link(id) {
            const obj = new this.$.$mol_text_link();
            obj.target = () => this.link_target(id);
            return obj;
        }
        Image(id) {
            const obj = new this.$.$mol_text_image();
            return obj;
        }
        Header(id) {
            const obj = new this.$.$mol_text_header();
            obj.level = () => this.header_level(id);
            obj.content = () => this.header_content(id);
            return obj;
        }
        Code(id) {
            const obj = new this.$.$mol_text_code();
            obj.text = () => this.code_text(id);
            obj.highlight = () => this.highlight();
            return obj;
        }
        Table(id) {
            const obj = new this.$.$mol_grid();
            obj.head_cells = () => this.table_head_cells(id);
            obj.rows = () => this.table_rows(id);
            return obj;
        }
        Table_row(id) {
            const obj = new this.$.$mol_grid_row();
            obj.cells = () => this.table_cells(id);
            return obj;
        }
        Table_cell(id) {
            const obj = new this.$.$mol_grid_cell();
            obj.sub = () => this.table_cell_content(id);
            return obj;
        }
        Table_cell_head(id) {
            const obj = new this.$.$mol_float();
            obj.sub = () => this.table_cell_content(id);
            return obj;
        }
        quote_text(id) {
            return "";
        }
        block_content(id) {
            return [];
        }
        block_type(id) {
            return "";
        }
        highlight() {
            return "";
        }
        link_target(id) {
            return "_blank";
        }
        header_level(id) {
            return 0;
        }
        header_content(id) {
            return [];
        }
        code_text(id) {
            return "";
        }
        table_head_cells(id) {
            return [];
        }
        table_rows(id) {
            return [];
        }
        table_cells(id) {
            return [];
        }
        table_cell_content(id) {
            return [];
        }
    }
    __decorate([
        $.$mol_mem_key
    ], $mol_text.prototype, "Quote", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_text.prototype, "Row", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_text.prototype, "Span", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_text.prototype, "String", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_text.prototype, "Link", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_text.prototype, "Image", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_text.prototype, "Header", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_text.prototype, "Code", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_text.prototype, "Table", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_text.prototype, "Table_row", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_text.prototype, "Table_cell", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_text.prototype, "Table_cell_head", null);
    $.$mol_text = $mol_text;
    class $mol_text_row extends $.$mol_paragraph {
        attr() {
            return {
                ...super.attr(),
                mol_text_type: this.type()
            };
        }
        type() {
            return "";
        }
    }
    $.$mol_text_row = $mol_text_row;
    class $mol_text_header extends $.$mol_paragraph {
        dom_name() {
            return "h";
        }
        attr() {
            return {
                ...super.attr(),
                mol_text_header_level: this.level()
            };
        }
        sub() {
            return this.content();
        }
        level(val) {
            if (val !== undefined)
                return val;
            return 0;
        }
        content() {
            return [];
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_text_header.prototype, "level", null);
    $.$mol_text_header = $mol_text_header;
    class $mol_text_span extends $.$mol_paragraph {
        dom_name() {
            return "span";
        }
        attr() {
            return {
                ...super.attr(),
                mol_text_type: this.type()
            };
        }
        sub() {
            return this.content();
        }
        type(val) {
            if (val !== undefined)
                return val;
            return "";
        }
        content(val) {
            if (val !== undefined)
                return val;
            return [];
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_text_span.prototype, "type", null);
    __decorate([
        $.$mol_mem
    ], $mol_text_span.prototype, "content", null);
    $.$mol_text_span = $mol_text_span;
    class $mol_text_string extends $.$mol_dimmer {
        dom_name() {
            return "span";
        }
        haystack(val) {
            if (val !== undefined)
                return val;
            return "";
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_text_string.prototype, "haystack", null);
    $.$mol_text_string = $mol_text_string;
    class $mol_text_link extends $.$mol_link_iconed {
        attr() {
            return {
                ...super.attr(),
                mol_text_type: this.type()
            };
        }
        uri() {
            return this.link();
        }
        content(val) {
            if (val !== undefined)
                return val;
            return [];
        }
        type(val) {
            if (val !== undefined)
                return val;
            return "";
        }
        link(val) {
            if (val !== undefined)
                return val;
            return "";
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_text_link.prototype, "content", null);
    __decorate([
        $.$mol_mem
    ], $mol_text_link.prototype, "type", null);
    __decorate([
        $.$mol_mem
    ], $mol_text_link.prototype, "link", null);
    $.$mol_text_link = $mol_text_link;
    class $mol_text_image extends $.$mol_view {
        dom_name() {
            return "object";
        }
        attr() {
            return {
                ...super.attr(),
                allowfullscreen: true,
                mol_text_type: this.type(),
                data: this.link()
            };
        }
        sub() {
            return [
                this.Image()
            ];
        }
        type(val) {
            if (val !== undefined)
                return val;
            return "";
        }
        link(val) {
            if (val !== undefined)
                return val;
            return "";
        }
        title(val) {
            if (val !== undefined)
                return val;
            return "";
        }
        Image() {
            const obj = new this.$.$mol_image();
            obj.uri = () => this.link();
            obj.title = () => this.title();
            return obj;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_text_image.prototype, "type", null);
    __decorate([
        $.$mol_mem
    ], $mol_text_image.prototype, "link", null);
    __decorate([
        $.$mol_mem
    ], $mol_text_image.prototype, "title", null);
    __decorate([
        $.$mol_mem
    ], $mol_text_image.prototype, "Image", null);
    $.$mol_text_image = $mol_text_image;
})($ || ($ = {}));
//text.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/text/text.view.css", "[mol_text] {\n\tline-height: 1.5em;\n\tbox-sizing: border-box;\n\tmax-width: 60rem;\n\tborder-radius: var(--mol_gap_round);\n\twhite-space: pre-line;\n\tdisplay: flex;\n\tflex-direction: column;\n\tflex: 0 0 auto;\n\ttab-size: 4;\n}\n\n[mol_text_row] {\n\tmargin: var(--mol_gap_text);\n\toverflow: auto;\n\tmax-width: 100%;\n\tdisplay: block;\n}\n\n[mol_text_span] {\n\tdisplay: inline;\n}\n\n[mol_text_string] {\n\tdisplay: inline;\n}\n\n[mol_text_quote] {\n\tbox-shadow: inset 1px 0 0px 0px var(--mol_theme_line);\n}\n\n[mol_text_header] {\n\tdisplay: block;\n\tpadding: var(--mol_gap_block);\n\ttext-shadow: 0 0;\n}\n\n[mol_text_header_level=\"1\"] {\n\tfont-size: 1.5em;\n}\n\n[mol_text_header_level=\"2\"] {\n\tfont-size: 1.3em;\n}\n\n[mol_text_header_level=\"3\"] {\n\tfont-size: 1.1em;\n}\n\n[mol_text_header_level=\"4\"] {\n\tfont-size: 1.1em;\n\tfont-style: italic;\n}\n\n[mol_text_header_level=\"5\"] {\n\tfont-size: 1.1em;\n\tfont-weight: normal;\n\tfont-style: italic;\n}\n\n[mol_text_type=\"list-item\"] {\n\tdisplay: list-item;\n}\n\n[mol_text_type=\"list-item\"]:before {\n\tcontent: '•';\n\tmargin-right: 1ch;\n}\n\n[mol_text_table] {\n\tmax-width: 100%;\n\tmax-height: 75vh;\n\toverflow: auto;\n\tmargin: .5rem;\n\tflex-grow: 0;\n}\n\n[mol_text_type=\"code-indent\"] ,\n[mol_text_type=\"code\"] {\n\tfont-family: var(--mol_skin_font_monospace);\n\twhite-space: pre-wrap;\n\tborder-radius: var(--mol_gap_round);\n}\n\n[mol_text_type=\"text-link\"] {\n\tcolor: var(--mol_theme_control);\n\ttext-decoration: none;\n\tpadding: 0 .25rem 0 0;\n}\n\n[mol_text_link]:hover ,\n[mol_text_link]:focus {\n\toutline: none;\n}\n\n[mol_text_image] {\n\tmax-width: 100%;\n\tmax-height: 75vh;\n\tobject-fit: scale-down;\n}\n\n[mol_text_image_image] {\n\tobject-fit: scale-down;\n\tflex-grow: 1;\n}\n\n[mol_text_type=\"strong\"] {\n\tcolor: var(--mol_theme_focus);\n}\n\n[mol_text_type=\"emphasis\"] {\n\tfont-style: italic;\n}\n\n[mol_text_type=\"strike\"] {\n\ttext-decoration: line-through;\n\tcolor: var(--mol_theme_shade);\n}\n\n[mol_text_type=\"code-keyword\"] {\n\tcolor: hsl(0, 70%, 60%);\n}\n\n[mol_text_type=\"code-field\"] {\n\tcolor: hsl(300, 70%, 60%);\n}\n\n[mol_text_type=\"code-tag\"] {\n\tcolor: hsl(330, 70%, 60%);\n}\n\n[mol_text_type=\"code-global\"] {\n\tcolor: hsl(210, 80%, 40%);\n}\n\n[mol_text_type=\"code-decorator\"] {\n\tcolor: hsl(180, 40%, 60%);\n}\n\n[mol_text_type=\"code-punctuation\"] {\n\tcolor: hsl( 0, 0%, 50% );\n}\n\n[mol_text_type=\"code-string\"] {\n\tcolor: hsl(90, 40%, 40%);\n}\n\n[mol_text_type=\"code-number\"] {\n\tcolor: hsl(60, 70%, 30%);\n}\n\n[mol_text_type=\"code-call\"] {\n\tcolor: hsl(270, 60%, 60%);\n}\n\n[mol_text_type=\"code-link\"] {\n\tcolor: hsl(240, 60%, 60%);\n}\n\n[mol_text_type=\"code-comment-inline\"] ,\n[mol_text_type=\"code-comment-block\"] {\n\topacity: .5;\n}\n\n[mol_text_type=\"code-docs\"] {\n\topacity: .75;\n}\n");
})($ || ($ = {}));
//text.view.css.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_text extends $.$mol_text {
            tokens() {
                const tokens = [];
                this.$.$mol_syntax2_md_flow.tokenize(this.text(), (name, found, chunks) => tokens.push({ name, found, chunks }));
                return tokens;
            }
            rows() {
                return this.tokens().map((token, index) => {
                    switch (token.name) {
                        case 'table': return this.Table(index);
                        case 'header': return this.Header(index);
                        case 'quote': return this.Quote(index);
                        case 'code': return this.Code(index);
                        case 'code-indent': return this.Code(index);
                    }
                    return this.Row(index);
                });
            }
            header_level(index) {
                return this.tokens()[index].chunks[0].length;
            }
            header_content(index) {
                return this.text2spans(`${index}`, this.tokens()[index].chunks[2]);
            }
            code_text(index) {
                const token = this.tokens()[index];
                return (token.chunks[2] ?? token.chunks[0].replace(/^\t/gm, '')).replace(/[\n\r]*$/, '');
            }
            quote_text(index) {
                return this.tokens()[index].chunks[0].replace(/^> /mg, '');
            }
            block_type(index) {
                return this.tokens()[index].name;
            }
            cell_contents(indexBlock) {
                return this.tokens()[indexBlock].chunks[0]
                    .split(/\r?\n/g)
                    .filter(row => row && !/\|--/.test(row))
                    .map((row, rowId) => {
                    return row.split(/\|/g)
                        .filter(cell => cell)
                        .map((cell, cellId) => cell.trim());
                });
            }
            table_rows(blockId) {
                return this.cell_contents(blockId)
                    .slice(1)
                    .map((row, rowId) => this.Table_row({ block: blockId, row: rowId + 1 }));
            }
            table_head_cells(blockId) {
                return this.cell_contents(blockId)[0]
                    .map((cell, cellId) => this.Table_cell_head({ block: blockId, row: 0, cell: cellId }));
            }
            table_cells(id) {
                return this.cell_contents(id.block)[id.row]
                    .map((cell, cellId) => this.Table_cell({ block: id.block, row: id.row, cell: cellId }));
            }
            table_cell_content(id) {
                return this.text2spans(`${id.block}/${id.row}/${id.cell}`, this.cell_contents(id.block)[id.row][id.cell]);
            }
            uri_base() {
                return $.$mol_dom_context.document.location.href;
            }
            uri_resolve(uri) {
                const url = new URL(uri, this.uri_base());
                return url.toString();
            }
            text2spans(prefix, text) {
                let index = 0;
                const spans = [];
                this.$.$mol_syntax2_md_line.tokenize(text, (name, found, chunks) => {
                    const id = `${prefix}/${index++}`;
                    switch (name) {
                        case 'text-link': {
                            if (/^(\w+script+:)+/.test(chunks[1])) {
                                const span = this.Span(id);
                                span.content(this.text2spans(id, chunks[0]));
                                return spans.push(span);
                            }
                            else {
                                const span = this.Link(id);
                                span.type(name);
                                span.link(this.uri_resolve(chunks[1]));
                                span.content(this.text2spans(id, ' ' + chunks[0]));
                                return spans.push(span);
                            }
                        }
                        case 'image-link': {
                            const span = this.Image(chunks[1]);
                            span.type(name);
                            span.link(this.uri_resolve(chunks[1]));
                            span.title(chunks[0]);
                            return spans.push(span);
                        }
                        case 'code3':
                        case 'code': {
                            const span = this.Span(id);
                            span.type('code');
                            span.content(this.code2spans(id, chunks[0]));
                            return spans.push(span);
                        }
                    }
                    if (name) {
                        const span = this.Span(id);
                        span.type(name);
                        span.content([].concat.apply([], chunks.map((text, index) => this.text2spans(`${id}/${index}`, text))));
                        spans.push(span);
                    }
                    else {
                        const span = this.String(id);
                        span.haystack(found);
                        spans.push(span);
                    }
                });
                return spans;
            }
            code2spans(prefix, text) {
                let index = 0;
                const spans = [];
                this.$.$mol_syntax2_md_code.tokenize(text, (name, found, chunks) => {
                    const id = `${prefix}/${index++}`;
                    const span = this.Span(id);
                    span.type(name);
                    spans.push(span);
                    switch (name) {
                        case 'code-docs': {
                            span.content(this.text2spans(`${id}/${index}`, found));
                            return span;
                        }
                        case 'code-string': {
                            span.content([found[0], ...this.code2spans(`${id}/${index}`, found.slice(1, found.length - 1)), found[found.length - 1]]);
                            return span;
                        }
                        default: {
                            span.content([found]);
                            return span;
                        }
                    }
                });
                return spans;
            }
            block_content(indexBlock) {
                const token = this.tokens()[indexBlock];
                switch (token.name) {
                    case 'header': return this.text2spans(`${indexBlock}`, token.chunks[2]);
                    case 'list': return this.text2spans(`${indexBlock}`, token.chunks[0]);
                }
                return this.text2spans(`${indexBlock}`, token.chunks[0]);
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_text.prototype, "tokens", null);
        __decorate([
            $.$mol_mem
        ], $mol_text.prototype, "rows", null);
        __decorate([
            $.$mol_mem_key
        ], $mol_text.prototype, "cell_contents", null);
        __decorate([
            $.$mol_mem_key
        ], $mol_text.prototype, "table_rows", null);
        __decorate([
            $.$mol_mem_key
        ], $mol_text.prototype, "table_head_cells", null);
        __decorate([
            $.$mol_mem_key
        ], $mol_text.prototype, "table_cells", null);
        __decorate([
            $.$mol_mem_key
        ], $mol_text.prototype, "table_cell_content", null);
        __decorate([
            $.$mol_fiber.method
        ], $mol_text.prototype, "text2spans", null);
        __decorate([
            $.$mol_fiber.method
        ], $mol_text.prototype, "code2spans", null);
        __decorate([
            $.$mol_mem_key
        ], $mol_text.prototype, "block_content", null);
        $$.$mol_text = $mol_text;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//text.view.js.map
;
export default $
//# sourceMappingURL=node.esm.js.map
