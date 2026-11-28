export const id = 95;
export const ids = [95];
export const modules = {
  5493: dd => {
    function Od(dd) {
      return dd instanceof Map ? dd.clear = dd.delete = dd.set = function() {
        throw new Error("map is read-only")
      } : dd instanceof Set && (dd.add = dd.clear = dd.delete = function() {
        throw new Error("set is read-only")
      }), Object.freeze(dd), Object.getOwnPropertyNames(dd).forEach((md => {
        const Wd = dd[md],
          Fd = typeof Wd;
        "object" !== Fd && "function" !== Fd || Object.isFrozen(Wd) || Od(Wd)
      })), dd
    }
    class md {
      constructor(dd) {
        void 0 === dd.data && (dd.data = {}), this.data = dd.data, this.isMatchIgnored = !1
      }
      ignoreMatch() {
        this.isMatchIgnored = !0
      }
    }

    function Wd(dd) {
      return dd.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;")
    }

    function Fd(dd) {
      const Od = Object.create(null);
      for (const Rd in dd) Od[Rd] = dd[Rd];
      for (var md = arguments.length, Wd = new Array(md > 1 ? md - 1 : 0), Fd = 1; Fd < md; Fd++) Wd[Fd - 1] = arguments[Fd];
      return Wd.forEach((function(dd) {
        for (const md in dd) Od[md] = dd[md]
      })), Od
    }
    const Rd = dd => !!dd.scope;
    class Xd {
      constructor(dd, Od) {
        this.buffer = "", this.classPrefix = Od.classPrefix, dd.walk(this)
      }
      addText(dd) {
        this.buffer += Wd(dd)
      }
      openNode(dd) {
        if (!Rd(dd)) return;
        const Od = ((dd, Od) => {
          let {
            prefix: md
          } = Od;
          if (dd.startsWith("language:")) return dd.replace("language:", "language-");
          if (dd.includes(".")) {
            const Od = dd.split(".");
            return [`${md}${Od.shift()}`, ...Od.map(((dd, Od) => `${dd}${"_".repeat(Od+1)}`))].join(" ")
          }
          return `${md}${dd}`
        })(dd.scope, {
          prefix: this.classPrefix
        });
        this.span(Od)
      }
      closeNode(dd) {
        Rd(dd) && (this.buffer += "</span>")
      }
      value() {
        return this.buffer
      }
      span(dd) {
        this.buffer += `<span class="${dd}">`
      }
    }
    const Kd = function() {
      let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      const Od = {
        children: []
      };
      return Object.assign(Od, dd), Od
    };
    class hd {
      constructor() {
        this.RY = Kd(), this.stack = [this.RY]
      }
      get top() {
        return this.stack[this.stack.length - 1]
      }
      get root() {
        return this.RY
      }
      add(dd) {
        this.top.children.push(dd)
      }
      openNode(dd) {
        const Od = Kd({
          scope: dd
        });
        this.add(Od), this.stack.push(Od)
      }
      closeNode() {
        if (this.stack.length > 1) return this.stack.pop()
      }
      closeAllNodes() {
        for (; this.closeNode(););
      }
      toJSON() {
        return JSON.stringify(this.RY, null, 4)
      }
      walk(dd) {
        return this.constructor._walk(dd, this.RY)
      }
      static _walk(dd, Od) {
        return "string" === typeof Od ? dd.addText(Od) : Od.children && (dd.openNode(Od), Od.children.forEach((Od => this._walk(dd, Od))), dd.closeNode(Od)), dd
      }
      static _collapse(dd) {
        "string" !== typeof dd && dd.children && (dd.children.every((dd => "string" === typeof dd)) ? dd.children = [dd.children.join("")] : dd.children.forEach((dd => {
          hd._collapse(dd)
        })))
      }
    }
    class vd extends hd {
      constructor(dd) {
        super(), this.options = dd
      }
      addText(dd) {
        "" !== dd && this.add(dd)
      }
      startScope(dd) {
        this.openNode(dd)
      }
      endScope() {
        this.closeNode()
      }
      __addSublanguage(dd, Od) {
        const md = dd.root;
        Od && (md.scope = `language:${Od}`), this.add(md)
      }
      toHTML() {
        return new Xd(this, this.options).value()
      }
      finalize() {
        return this.closeAllNodes(), !0
      }
    }

    function Qd(dd) {
      return dd ? "string" === typeof dd ? dd : dd.source : null
    }

    function td(dd) {
      return qd("(?=", dd, ")")
    }

    function od(dd) {
      return qd("(?:", dd, ")*")
    }

    function Nd(dd) {
      return qd("(?:", dd, ")?")
    }

    function qd() {
      for (var dd = arguments.length, Od = new Array(dd), md = 0; md < dd; md++) Od[md] = arguments[md];
      return Od.map((dd => Qd(dd))).join("")
    }

    function Hd() {
      for (var dd = arguments.length, Od = new Array(dd), md = 0; md < dd; md++) Od[md] = arguments[md];
      const Wd = function(dd) {
        const Od = dd[dd.length - 1];
        return "object" === typeof Od && Od.constructor === Object ? (dd.splice(dd.length - 1, 1), Od) : {}
      }(Od);
      return "(" + (Wd.capture ? "" : "?:") + Od.map((dd => Qd(dd))).join("|") + ")"
    }

    function yd(dd) {
      return new RegExp(dd.toString() + "|").exec("").length - 1
    }
    const bd = /\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;

    function Td(dd, Od) {
      let {
        joinWith: md
      } = Od, Wd = 0;
      return dd.map((dd => {
        Wd += 1;
        const Od = Wd;
        let md = Qd(dd),
          Fd = "";
        for (; md.length > 0;) {
          const dd = bd.exec(md);
          if (!dd) {
            Fd += md;
            break
          }
          Fd += md.substring(0, dd.index), md = md.substring(dd.index + dd[0].length), "\\" === dd[0][0] && dd[1] ? Fd += "\\" + String(Number(dd[1]) + Od) : (Fd += dd[0], "(" === dd[0] && Wd++)
        }
        return Fd
      })).map((dd => `(${dd})`)).join(md)
    }
    const pd = "[a-zA-Z]\\w*",
      Yd = "[a-zA-Z_]\\w*",
      gd = "\\b\\d+(\\.\\d+)?",
      wd = "(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",
      Ed = "\\b(0b[01]+)",
      Jd = {
        ot: "\\\\[\\s\\S]",
        relevance: 0
      },
      Ud = {
        scope: "string",
        ot: "'",
        end: "'",
        illegal: "\\n",
        contains: [Jd]
      },
      xd = {
        scope: "string",
        ot: '"',
        end: '"',
        illegal: "\\n",
        contains: [Jd]
      },
      Bd = function(dd, Od) {
        const md = Fd({
          scope: "comment",
          ot: dd,
          end: Od,
          contains: []
        }, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {});
        md.contains.push({
          scope: "doctag",
          ot: "[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",
          end: /(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,
          excludeBegin: !0,
          relevance: 0
        });
        const Wd = Hd("I", "a", "is", "so", "us", "to", "at", "if", "in", "it", "on", /[A-Za-z]+['](d|ve|re|ll|t|s|n)/, /[A-Za-z]+[-][a-z]+/, /[A-Za-z][a-z]{2,}/);
        return md.contains.push({
          ot: qd(/[ ]+/, "(", Wd, /[.]?[:]?([.][ ]|[ ])/, "){3}")
        }), md
      },
      Sd = Bd("//", "$"),
      sd = Bd("/\\*", "\\*/"),
      ud = Bd("#", "$"),
      Vd = {
        scope: "number",
        ot: gd,
        relevance: 0
      },
      Ad = {
        scope: "number",
        ot: wd,
        relevance: 0
      },
      rd = {
        scope: "number",
        ot: Ed,
        relevance: 0
      },
      Gd = {
        scope: "regexp",
        ot: /\/(?=[^/\n]*\/)/,
        end: /\/[gimuy]*/,
        contains: [Jd, {
          ot: /\[/,
          end: /\]/,
          relevance: 0,
          contains: [Jd]
        }]
      },
      nd = {
        scope: "title",
        ot: pd,
        relevance: 0
      },
      Ld = {
        scope: "title",
        ot: Yd,
        relevance: 0
      },
      Pd = {
        ot: "\\.\\s*" + Yd,
        relevance: 0
      };
    var zd = Object.freeze({
      __proto__: null,
      APOS_STRING_MODE: Ud,
      BACKSLASH_ESCAPE: Jd,
      BINARY_NUMBER_MODE: rd,
      BINARY_NUMBER_RE: Ed,
      COMMENT: Bd,
      C_BLOCK_COMMENT_MODE: sd,
      C_LINE_COMMENT_MODE: Sd,
      C_NUMBER_MODE: Ad,
      C_NUMBER_RE: wd,
      END_SAME_AS_BEGIN: function(dd) {
        return Object.assign(dd, {
          "on:begin": (dd, Od) => {
            Od.data._beginMatch = dd[1]
          },
          "on:end": (dd, Od) => {
            Od.data._beginMatch !== dd[1] && Od.ignoreMatch()
          }
        })
      },
      HASH_COMMENT_MODE: ud,
      IDENT_RE: pd,
      MATCH_NOTHING_RE: /\b\B/,
      METHOD_GUARD: Pd,
      NUMBER_MODE: Vd,
      NUMBER_RE: gd,
      PHRASAL_WORDS_MODE: {
        ot: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/
      },
      QUOTE_STRING_MODE: xd,
      REGEXP_MODE: Gd,
      RE_STARTERS_RE: "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",
      SHEBANG: function() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        const Od = /^#![ ]*\//;
        return dd.binary && (dd.ot = qd(Od, /.*\b/, dd.binary, /\b.*/)), Fd({
          scope: "meta",
          ot: Od,
          end: /$/,
          relevance: 0,
          "on:begin": (dd, Od) => {
            0 !== dd.index && Od.ignoreMatch()
          }
        }, dd)
      },
      TITLE_MODE: nd,
      UNDERSCORE_IDENT_RE: Yd,
      UNDERSCORE_TITLE_MODE: Ld
    });

    function cd(dd, Od) {
      "." === dd.input[dd.index - 1] && Od.ignoreMatch()
    }

    function jd(dd, Od) {
      void 0 !== dd.className && (dd.scope = dd.className, delete dd.className)
    }

    function Dd(dd, Od) {
      Od && dd.beginKeywords && (dd.ot = "\\b(" + dd.beginKeywords.split(" ").join("|") + ")(?!\\.)(?=\\b|\\s)", dd.__beforeBegin = cd, dd.keywords = dd.keywords || dd.beginKeywords, delete dd.beginKeywords, void 0 === dd.relevance && (dd.relevance = 0))
    }

    function ed(dd, Od) {
      Array.isArray(dd.illegal) && (dd.illegal = Hd(...dd.illegal))
    }

    function Id(dd, Od) {
      if (dd.match) {
        if (dd.ot || dd.end) throw new Error("begin & end are not supported with match");
        dd.ot = dd.match, delete dd.match
      }
    }

    function ld(dd, Od) {
      void 0 === dd.relevance && (dd.relevance = 1)
    }
    const Cd = (dd, Od) => {
        if (!dd.beforeMatch) return;
        if (dd.starts) throw new Error("beforeMatch cannot be used with starts");
        const md = Object.assign({}, dd);
        Object.keys(dd).forEach((Od => {
          delete dd[Od]
        })), dd.keywords = md.keywords, dd.ot = qd(md.beforeMatch, td(md.ot)), dd.starts = {
          relevance: 0,
          contains: [Object.assign(md, {
            endsParent: !0
          })]
        }, dd.relevance = 0, delete md.beforeMatch
      },
      Zd = ["of", "and", "for", "in", "not", "or", "if", "then", "parent", "list", "value"];

    function kd(dd, Od) {
      let md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "keyword";
      const Wd = Object.create(null);
      return "string" === typeof dd ? Fd(md, dd.split(" ")) : Array.isArray(dd) ? Fd(md, dd) : Object.keys(dd).forEach((function(md) {
        Object.assign(Wd, kd(dd[md], Od, md))
      })), Wd;

      function Fd(dd, md) {
        Od && (md = md.map((dd => dd.toLowerCase()))), md.forEach((function(Od) {
          const md = Od.split("|");
          Wd[md[0]] = [dd, fd(md[0], md[1])]
        }))
      }
    }

    function fd(dd, Od) {
      return Od ? Number(Od) : function(dd) {
        return Zd.includes(dd.toLowerCase())
      }(dd) ? 0 : 1
    }
    const Md = {},
      dO = dd => {
        console.error(dd)
      },
      OO = function(dd) {
        for (var Od = arguments.length, md = new Array(Od > 1 ? Od - 1 : 0), Wd = 1; Wd < Od; Wd++) md[Wd - 1] = arguments[Wd];
        console.log(`WARN: ${dd}`, ...md)
      },
      mO = (dd, Od) => {
        Md[`${dd}/${Od}`] || (console.log(`Deprecated as of ${dd}. ${Od}`), Md[`${dd}/${Od}`] = !0)
      },
      WO = new Error;

    function FO(dd, Od, md) {
      let {
        key: Wd
      } = md, Fd = 0;
      const Rd = dd[Wd],
        Xd = {},
        Kd = {};
      for (let hd = 1; hd <= Od.length; hd++) Kd[hd + Fd] = Rd[hd], Xd[hd + Fd] = !0, Fd += yd(Od[hd - 1]);
      dd[Wd] = Kd, dd[Wd]._emit = Xd, dd[Wd]._multi = !0
    }

    function RO(dd) {
      ! function(dd) {
        dd.scope && "object" === typeof dd.scope && null !== dd.scope && (dd.beginScope = dd.scope, delete dd.scope)
      }(dd), "string" === typeof dd.beginScope && (dd.beginScope = {
          _wrap: dd.beginScope
        }), "string" === typeof dd.endScope && (dd.endScope = {
          _wrap: dd.endScope
        }),
        function(dd) {
          if (Array.isArray(dd.ot)) {
            if (dd.skip || dd.excludeBegin || dd.returnBegin) throw dO("skip, excludeBegin, returnBegin not compatible with beginScope: {}"), WO;
            if ("object" !== typeof dd.beginScope || null === dd.beginScope) throw dO("beginScope must be object"), WO;
            FO(dd, dd.ot, {
              key: "beginScope"
            }), dd.ot = Td(dd.ot, {
              joinWith: ""
            })
          }
        }(dd),
        function(dd) {
          if (Array.isArray(dd.end)) {
            if (dd.skip || dd.excludeEnd || dd.returnEnd) throw dO("skip, excludeEnd, returnEnd not compatible with endScope: {}"), WO;
            if ("object" !== typeof dd.endScope || null === dd.endScope) throw dO("endScope must be object"), WO;
            FO(dd, dd.end, {
              key: "endScope"
            }), dd.end = Td(dd.end, {
              joinWith: ""
            })
          }
        }(dd)
    }

    function XO(dd) {
      function Od(Od, md) {
        return new RegExp(Qd(Od), "m" + (dd.case_insensitive ? "i" : "") + (dd.unicodeRegex ? "u" : "") + (md ? "g" : ""))
      }
      class md {
        constructor() {
          this.matchIndexes = {}, this.regexes = [], this.matchAt = 1, this.position = 0
        }
        addRule(dd, Od) {
          Od.position = this.position++, this.matchIndexes[this.matchAt] = Od, this.regexes.push([Od, dd]), this.matchAt += yd(dd) + 1
        }
        compile() {
          0 === this.regexes.length && (this.exec = () => null);
          const dd = this.regexes.map((dd => dd[1]));
          this.matcherRe = Od(Td(dd, {
            joinWith: "|"
          }), !0), this.lastIndex = 0
        }
        exec(dd) {
          this.matcherRe.lastIndex = this.lastIndex;
          const Od = this.matcherRe.exec(dd);
          if (!Od) return null;
          const md = Od.findIndex(((dd, Od) => Od > 0 && void 0 !== dd)),
            Wd = this.matchIndexes[md];
          return Od.splice(0, md), Object.assign(Od, Wd)
        }
      }
      class Wd {
        constructor() {
          this.rules = [], this.multiRegexes = [], this.count = 0, this.lastIndex = 0, this.regexIndex = 0
        }
        getMatcher(dd) {
          if (this.multiRegexes[dd]) return this.multiRegexes[dd];
          const Od = new md;
          return this.rules.slice(dd).forEach((dd => {
            let [md, Wd] = dd;
            return Od.addRule(md, Wd)
          })), Od.compile(), this.multiRegexes[dd] = Od, Od
        }
        resumingScanAtSamePosition() {
          return 0 !== this.regexIndex
        }
        considerAll() {
          this.regexIndex = 0
        }
        addRule(dd, Od) {
          this.rules.push([dd, Od]), "ot" === Od.type && this.count++
        }
        exec(dd) {
          const Od = this.getMatcher(this.regexIndex);
          Od.lastIndex = this.lastIndex;
          let md = Od.exec(dd);
          if (this.resumingScanAtSamePosition())
            if (md && md.index === this.lastIndex);
            else {
              const Od = this.getMatcher(0);
              Od.lastIndex = this.lastIndex + 1, md = Od.exec(dd)
            } return md && (this.regexIndex += md.position + 1, this.regexIndex === this.count && this.considerAll()), md
        }
      }
      if (dd.compilerExtensions || (dd.compilerExtensions = []), dd.contains && dd.contains.includes("self")) throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");
      return dd.classNameAliases = Fd(dd.classNameAliases || {}),
        function md(Rd, Xd) {
          const Kd = Rd;
          if (Rd.isCompiled) return Kd;
          [jd, Id, RO, Cd].forEach((dd => dd(Rd, Xd))), dd.compilerExtensions.forEach((dd => dd(Rd, Xd))), Rd.__beforeBegin = null, [Dd, ed, ld].forEach((dd => dd(Rd, Xd))), Rd.isCompiled = !0;
          let hd = null;
          return "object" === typeof Rd.keywords && Rd.keywords.$pattern && (Rd.keywords = Object.assign({}, Rd.keywords), hd = Rd.keywords.$pattern, delete Rd.keywords.$pattern), hd = hd || /\w+/, Rd.keywords && (Rd.keywords = kd(Rd.keywords, dd.case_insensitive)), Kd.keywordPatternRe = Od(hd, !0), Xd && (Rd.ot || (Rd.ot = /\B|\b/), Kd.beginRe = Od(Kd.ot), Rd.end || Rd.endsWithParent || (Rd.end = /\B|\b/), Rd.end && (Kd.endRe = Od(Kd.end)), Kd.terminatorEnd = Qd(Kd.end) || "", Rd.endsWithParent && Xd.terminatorEnd && (Kd.terminatorEnd += (Rd.end ? "|" : "") + Xd.terminatorEnd)), Rd.illegal && (Kd.illegalRe = Od(Rd.illegal)), Rd.contains || (Rd.contains = []), Rd.contains = [].concat(...Rd.contains.map((function(dd) {
            return function(dd) {
              dd.variants && !dd.cachedVariants && (dd.cachedVariants = dd.variants.map((function(Od) {
                return Fd(dd, {
                  variants: null
                }, Od)
              })));
              if (dd.cachedVariants) return dd.cachedVariants;
              if (KO(dd)) return Fd(dd, {
                starts: dd.starts ? Fd(dd.starts) : null
              });
              if (Object.isFrozen(dd)) return Fd(dd);
              return dd
            }("self" === dd ? Rd : dd)
          }))), Rd.contains.forEach((function(dd) {
            md(dd, Kd)
          })), Rd.starts && md(Rd.starts, Xd), Kd.matcher = function(dd) {
            const Od = new Wd;
            return dd.contains.forEach((dd => Od.addRule(dd.ot, {
              rule: dd,
              type: "ot"
            }))), dd.terminatorEnd && Od.addRule(dd.terminatorEnd, {
              type: "end"
            }), dd.illegal && Od.addRule(dd.illegal, {
              type: "illegal"
            }), Od
          }(Kd), Kd
        }(dd)
    }

    function KO(dd) {
      return !!dd && (dd.endsWithParent || KO(dd.starts))
    }
    class hO extends Error {
      constructor(dd, Od) {
        super(dd), this.name = "HTMLInjectionError", this.html = Od
      }
    }
    const vO = Wd,
      QO = Fd,
      tO = Symbol("nomatch"),
      oO = function(dd) {
        const Wd = Object.create(null),
          Fd = Object.create(null),
          Rd = [];
        let Xd = !0;
        const Kd = "Could not find the language '{}', did you forget to load/include a language module?",
          hd = {
            disableAutodetect: !0,
            name: "Plain text",
            contains: []
          };
        let Qd = {
          ignoreUnescapedHTML: !1,
          throwUnescapedHTML: !1,
          noHighlightRe: /^(no-?highlight)$/i,
          languageDetectRe: /\blang(?:uage)?-([\w-]+)\b/i,
          classPrefix: "hljs-",
          cssSelector: "pre code",
          languages: null,
          __emitter: vd
        };

        function yd(dd) {
          return Qd.noHighlightRe.test(dd)
        }

        function bd(dd, Od, md) {
          let Wd = "",
            Fd = "";
          "object" === typeof Od ? (Wd = dd, md = Od.ignoreIllegals, Fd = Od.language) : (mO("10.7.0", "highlight(lang, code, ...args) has been deprecated."), mO("10.7.0", "Please use highlight(code, options) instead.\nhttps://github.com/highlightjs/highlight.js/issues/2277"), Fd = dd, Wd = Od), void 0 === md && (md = !0);
          const Rd = {
            code: Wd,
            language: Fd
          };
          xd("before:highlight", Rd);
          const Xd = Rd.result ? Rd.result : Td(Rd.language, Rd.code, md);
          return Xd.code = Rd.code, xd("after:highlight", Xd), Xd
        }

        function Td(dd, Od, Fd, Rd) {
          const hd = Object.create(null);

          function vd() {
            if (!xd.keywords) return void Sd.addText(sd);
            let dd = 0;
            xd.keywordPatternRe.lastIndex = 0;
            let Od = xd.keywordPatternRe.exec(sd),
              md = "";
            for (; Od;) {
              md += sd.substring(dd, Od.index);
              const Fd = wd.case_insensitive ? Od[0].toLowerCase() : Od[0],
                Rd = (Wd = Fd, xd.keywords[Wd]);
              if (Rd) {
                const [dd, Wd] = Rd;
                if (Sd.addText(md), md = "", hd[Fd] = (hd[Fd] || 0) + 1, hd[Fd] <= 7 && (ud += Wd), dd.startsWith("_")) md += Od[0];
                else {
                  const md = wd.classNameAliases[dd] || dd;
                  od(Od[0], md)
                }
              } else md += Od[0];
              dd = xd.keywordPatternRe.lastIndex, Od = xd.keywordPatternRe.exec(sd)
            }
            var Wd;
            md += sd.substring(dd), Sd.addText(md)
          }

          function td() {
            null != xd.subLanguage ? function() {
              if ("" === sd) return;
              let dd = null;
              if ("string" === typeof xd.subLanguage) {
                if (!Wd[xd.subLanguage]) return void Sd.addText(sd);
                dd = Td(xd.subLanguage, sd, !0, Bd[xd.subLanguage]), Bd[xd.subLanguage] = dd._top
              } else dd = pd(sd, xd.subLanguage.length ? xd.subLanguage : null);
              xd.relevance > 0 && (ud += dd.relevance), Sd.__addSublanguage(dd._emitter, dd.language)
            }() : vd(), sd = ""
          }

          function od(dd, Od) {
            "" !== dd && (Sd.startScope(Od), Sd.addText(dd), Sd.endScope())
          }

          function Nd(dd, Od) {
            let md = 1;
            const Wd = Od.length - 1;
            for (; md <= Wd;) {
              if (!dd._emit[md]) {
                md++;
                continue
              }
              const Wd = wd.classNameAliases[dd[md]] || dd[md],
                Fd = Od[md];
              Wd ? od(Fd, Wd) : (sd = Fd, vd(), sd = ""), md++
            }
          }

          function qd(dd, Od) {
            return dd.scope && "string" === typeof dd.scope && Sd.openNode(wd.classNameAliases[dd.scope] || dd.scope), dd.beginScope && (dd.beginScope._wrap ? (od(sd, wd.classNameAliases[dd.beginScope._wrap] || dd.beginScope._wrap), sd = "") : dd.beginScope._multi && (Nd(dd.beginScope, Od), sd = "")), xd = Object.create(dd, {
              parent: {
                value: xd
              }
            }), xd
          }

          function Hd(dd, Od, Wd) {
            let Fd = function(dd, Od) {
              const md = dd && dd.exec(Od);
              return md && 0 === md.index
            }(dd.endRe, Wd);
            if (Fd) {
              if (dd["on:end"]) {
                const Wd = new md(dd);
                dd["on:end"](Od, Wd), Wd.isMatchIgnored && (Fd = !1)
              }
              if (Fd) {
                for (; dd.endsParent && dd.parent;) dd = dd.parent;
                return dd
              }
            }
            if (dd.endsWithParent) return Hd(dd.parent, Od, Wd)
          }

          function yd(dd) {
            return 0 === xd.matcher.regexIndex ? (sd += dd[0], 1) : (rd = !0, 0)
          }

          function bd(dd) {
            const md = dd[0],
              Wd = Od.substring(dd.index),
              Fd = Hd(xd, dd, Wd);
            if (!Fd) return tO;
            const Rd = xd;
            xd.endScope && xd.endScope._wrap ? (td(), od(md, xd.endScope._wrap)) : xd.endScope && xd.endScope._multi ? (td(), Nd(xd.endScope, dd)) : Rd.skip ? sd += md : (Rd.returnEnd || Rd.excludeEnd || (sd += md), td(), Rd.excludeEnd && (sd = md));
            do {
              xd.scope && Sd.closeNode(), xd.skip || xd.subLanguage || (ud += xd.relevance), xd = xd.parent
            } while (xd !== Fd.parent);
            return Fd.starts && qd(Fd.starts, dd), Rd.returnEnd ? 0 : md.length
          }
          let Yd = {};

          function gd(Wd, Rd) {
            const Kd = Rd && Rd[0];
            if (sd += Wd, null == Kd) return td(), 0;
            if ("ot" === Yd.type && "end" === Rd.type && Yd.index === Rd.index && "" === Kd) {
              if (sd += Od.slice(Rd.index, Rd.index + 1), !Xd) {
                const Od = new Error(`0 width match regex (${dd})`);
                throw Od.languageName = dd, Od.badRule = Yd.rule, Od
              }
              return 1
            }
            if (Yd = Rd, "ot" === Rd.type) return function(dd) {
              const Od = dd[0],
                Wd = dd.rule,
                Fd = new md(Wd),
                Rd = [Wd.__beforeBegin, Wd["on:begin"]];
              for (const md of Rd)
                if (md && (md(dd, Fd), Fd.isMatchIgnored)) return yd(Od);
              return Wd.skip ? sd += Od : (Wd.excludeBegin && (sd += Od), td(), Wd.returnBegin || Wd.excludeBegin || (sd = Od)), qd(Wd, dd), Wd.returnBegin ? 0 : Od.length
            }(Rd);
            if ("illegal" === Rd.type && !Fd) {
              const dd = new Error('Illegal lexeme "' + Kd + '" for mode "' + (xd.scope || "<unnamed>") + '"');
              throw dd.mode = xd, dd
            }
            if ("end" === Rd.type) {
              const dd = bd(Rd);
              if (dd !== tO) return dd
            }
            if ("illegal" === Rd.type && "" === Kd) return sd += "\n", 1;
            if (Ad > 1e5 && Ad > 3 * Rd.index) {
              throw new Error("potential infinite loop, way more iterations than matches")
            }
            return sd += Kd, Kd.length
          }
          const wd = Ed(dd);
          if (!wd) throw dO(Kd.replace("{}", dd)), new Error('Unknown language: "' + dd + '"');
          const Jd = XO(wd);
          let Ud = "",
            xd = Rd || Jd;
          const Bd = {},
            Sd = new Qd.__emitter(Qd);
          ! function() {
            const dd = [];
            for (let Od = xd; Od !== wd; Od = Od.parent) Od.scope && dd.unshift(Od.scope);
            dd.forEach((dd => Sd.openNode(dd)))
          }();
          let sd = "",
            ud = 0,
            Vd = 0,
            Ad = 0,
            rd = !1;
          try {
            if (wd.__emitTokens) wd.__emitTokens(Od, Sd);
            else {
              for (xd.matcher.considerAll();;) {
                Ad++, rd ? rd = !1 : xd.matcher.considerAll(), xd.matcher.lastIndex = Vd;
                const dd = xd.matcher.exec(Od);
                if (!dd) break;
                const md = gd(Od.substring(Vd, dd.index), dd);
                Vd = dd.index + md
              }
              gd(Od.substring(Vd))
            }
            return Sd.finalize(), Ud = Sd.toHTML(), {
              language: dd,
              value: Ud,
              relevance: ud,
              illegal: !1,
              _emitter: Sd,
              _top: xd
            }
          } catch (Gd) {
            if (Gd.message && Gd.message.includes("Illegal")) return {
              language: dd,
              value: vO(Od),
              illegal: !0,
              relevance: 0,
              _illegalBy: {
                message: Gd.message,
                index: Vd,
                context: Od.slice(Vd - 100, Vd + 100),
                mode: Gd.mode,
                resultSoFar: Ud
              },
              _emitter: Sd
            };
            if (Xd) return {
              language: dd,
              value: vO(Od),
              illegal: !1,
              relevance: 0,
              errorRaised: Gd,
              _emitter: Sd,
              _top: xd
            };
            throw Gd
          }
        }

        function pd(dd, Od) {
          Od = Od || Qd.languages || Object.keys(Wd);
          const md = function(dd) {
              const Od = {
                value: vO(dd),
                illegal: !1,
                relevance: 0,
                _top: hd,
                _emitter: new Qd.__emitter(Qd)
              };
              return Od._emitter.addText(dd), Od
            }(dd),
            Fd = Od.filter(Ed).filter(Ud).map((Od => Td(Od, dd, !1)));
          Fd.unshift(md);
          const Rd = Fd.sort(((dd, Od) => {
              if (dd.relevance !== Od.relevance) return Od.relevance - dd.relevance;
              if (dd.language && Od.language) {
                if (Ed(dd.language).supersetOf === Od.language) return 1;
                if (Ed(Od.language).supersetOf === dd.language) return -1
              }
              return 0
            })),
            [Xd, Kd] = Rd,
            vd = Xd;
          return vd.secondBest = Kd, vd
        }

        function Yd(dd) {
          let Od = null;
          const md = function(dd) {
            let Od = dd.className + " ";
            Od += dd.parentNode ? dd.parentNode.className : "";
            const md = Qd.languageDetectRe.exec(Od);
            if (md) {
              const Od = Ed(md[1]);
              return Od || (OO(Kd.replace("{}", md[1])), OO("Falling back to no-highlight mode for this block.", dd)), Od ? md[1] : "no-highlight"
            }
            return Od.split(/\s+/).find((dd => yd(dd) || Ed(dd)))
          }(dd);
          if (yd(md)) return;
          if (xd("before:highlightElement", {
              el: dd,
              language: md
            }), dd.dataset.highlighted) return void console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.", dd);
          if (dd.children.length > 0 && (Qd.ignoreUnescapedHTML || (console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."), console.warn("https://github.com/highlightjs/highlight.js/wiki/security"), console.warn("The element with unescaped HTML:"), console.warn(dd)), Qd.throwUnescapedHTML)) {
            throw new hO("One of your code blocks includes unescaped HTML.", dd.innerHTML)
          }
          Od = dd;
          const Wd = Od.textContent,
            Rd = md ? bd(Wd, {
              language: md,
              ignoreIllegals: !0
            }) : pd(Wd);
          dd.innerHTML = Rd.value, dd.dataset.highlighted = "yes",
            function(dd, Od, md) {
              const Wd = Od && Fd[Od] || md;
              dd.classList.add("hljs"), dd.classList.add(`language-${Wd}`)
            }(dd, md, Rd.language), dd.result = {
              language: Rd.language,
              re: Rd.relevance,
              relevance: Rd.relevance
            }, Rd.secondBest && (dd.secondBest = {
              language: Rd.secondBest.language,
              relevance: Rd.secondBest.relevance
            }), xd("after:highlightElement", {
              el: dd,
              result: Rd,
              text: Wd
            })
        }
        let gd = !1;

        function wd() {
          if ("loading" === document.readyState) return gd || window.addEventListener("DOMContentLoaded", (function() {
            wd()
          }), !1), void(gd = !0);
          document.querySelectorAll(Qd.cssSelector).forEach(Yd)
        }

        function Ed(dd) {
          return dd = (dd || "").toLowerCase(), Wd[dd] || Wd[Fd[dd]]
        }

        function Jd(dd, Od) {
          let {
            languageName: md
          } = Od;
          "string" === typeof dd && (dd = [dd]), dd.forEach((dd => {
            Fd[dd.toLowerCase()] = md
          }))
        }

        function Ud(dd) {
          const Od = Ed(dd);
          return Od && !Od.disableAutodetect
        }

        function xd(dd, Od) {
          const md = dd;
          Rd.forEach((function(dd) {
            dd[md] && dd[md](Od)
          }))
        }
        Object.assign(dd, {
          highlight: bd,
          highlightAuto: pd,
          highlightAll: wd,
          highlightElement: Yd,
          highlightBlock: function(dd) {
            return mO("10.7.0", "highlightBlock will be removed entirely in v12.0"), mO("10.7.0", "Please use highlightElement now."), Yd(dd)
          },
          configure: function(dd) {
            Qd = QO(Qd, dd)
          },
          initHighlighting: () => {
            wd(), mO("10.6.0", "initHighlighting() deprecated.  Use highlightAll() now.")
          },
          initHighlightingOnLoad: function() {
            wd(), mO("10.6.0", "initHighlightingOnLoad() deprecated.  Use highlightAll() now.")
          },
          registerLanguage: function(Od, md) {
            let Fd = null;
            try {
              Fd = md(dd)
            } catch (Rd) {
              if (dO("Language definition for '{}' could not be registered.".replace("{}", Od)), !Xd) throw Rd;
              dO(Rd), Fd = hd
            }
            Fd.name || (Fd.name = Od), Wd[Od] = Fd, Fd.rawDefinition = md.bind(null, dd), Fd.aliases && Jd(Fd.aliases, {
              languageName: Od
            })
          },
          unregisterLanguage: function(dd) {
            delete Wd[dd];
            for (const Od of Object.keys(Fd)) Fd[Od] === dd && delete Fd[Od]
          },
          listLanguages: function() {
            return Object.keys(Wd)
          },
          getLanguage: Ed,
          registerAliases: Jd,
          autoDetection: Ud,
          inherit: QO,
          addPlugin: function(dd) {
            ! function(dd) {
              dd["before:highlightBlock"] && !dd["before:highlightElement"] && (dd["before:highlightElement"] = Od => {
                dd["before:highlightBlock"](Object.assign({
                  block: Od.el
                }, Od))
              }), dd["after:highlightBlock"] && !dd["after:highlightElement"] && (dd["after:highlightElement"] = Od => {
                dd["after:highlightBlock"](Object.assign({
                  block: Od.el
                }, Od))
              })
            }(dd), Rd.push(dd)
          },
          removePlugin: function(dd) {
            const Od = Rd.indexOf(dd); - 1 !== Od && Rd.splice(Od, 1)
          }
        }), dd.debugMode = function() {
          Xd = !1
        }, dd.safeMode = function() {
          Xd = !0
        }, dd.versionString = "11.11.1", dd.regex = {
          concat: qd,
          lookahead: td,
          either: Hd,
          optional: Nd,
          anyNumberOfTimes: od
        };
        for (const md in zd) "object" === typeof zd[md] && Od(zd[md]);
        return Object.assign(dd, zd), dd
      },
      NO = oO({});
    NO.newInstance = () => oO({}), dd.exports = NO, NO.HighlightJS = NO, NO.default = NO
  },
  5489: (dd, Od, md) => {
    md.d(Od, {
      e: () => Wd
    });
    const Wd = md(5493)
  },
  5495: (dd, Od, md) => {
    md.d(Od, {
      b: () => td
    });
    const Wd = "[A-Za-z$_][0-9A-Za-z$_]*",
      Fd = ["as", "in", "of", "if", "for", "while", "finally", "var", "new", "function", "do", "return", "void", "else", "break", "catch", "instanceof", "with", "throw", "case", "default", "try", "switch", "continue", "typeof", "delete", "let", "yield", "const", "class", "debugger", "async", "await", "static", "import", "from", "export", "extends", "using"],
      Rd = ["true", "false", "null", "undefined", "NaN", "Infinity"],
      Xd = ["Object", "Function", "Boolean", "Symbol", "Math", "Date", "Number", "BigInt", "String", "RegExp", "Array", "Float32Array", "Float64Array", "Int8Array", "Uint8Array", "Uint8ClampedArray", "Int16Array", "Int32Array", "Uint16Array", "Uint32Array", "BigInt64Array", "BigUint64Array", "Set", "Map", "WeakSet", "WeakMap", "ArrayBuffer", "SharedArrayBuffer", "Atomics", "DataView", "JSON", "Promise", "Generator", "GeneratorFunction", "AsyncFunction", "Reflect", "Proxy", "Intl", "WebAssembly"],
      Kd = ["Error", "EvalError", "InternalError", "RangeError", "ReferenceError", "SyntaxError", "TypeError", "URIError"],
      hd = ["setInterval", "setTimeout", "clearInterval", "clearTimeout", "require", "exports", "eval", "isFinite", "isNaN", "parseFloat", "parseInt", "decodeURI", "decodeURIComponent", "encodeURI", "encodeURIComponent", "escape", "unescape"],
      vd = ["arguments", "this", "super", "console", "window", "document", "localStorage", "sessionStorage", "module", "global"],
      Qd = [].concat(hd, Xd, Kd);

    function td(dd) {
      const Od = dd.regex,
        md = Wd,
        td = "<>",
        od = "</>",
        Nd = {
          ot: /<[A-Za-z0-9\\._:-]+/,
          end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
          isTrulyOpeningTag: (dd, Od) => {
            const md = dd[0].length + dd.index,
              Wd = dd.input[md];
            if ("<" === Wd || "," === Wd) return void Od.ignoreMatch();
            let Fd;
            ">" === Wd && (((dd, Od) => {
              let {
                after: md
              } = Od;
              const Wd = "</" + dd[0].slice(1);
              return -1 !== dd.input.indexOf(Wd, md)
            })(dd, {
              after: md
            }) || Od.ignoreMatch());
            const Rd = dd.input.substring(md);
            ((Fd = Rd.match(/^\s*=/)) || (Fd = Rd.match(/^\s+extends\s+/)) && 0 === Fd.index) && Od.ignoreMatch()
          }
        },
        qd = {
          $pattern: Wd,
          keyword: Fd,
          literal: Rd,
          built_in: Qd,
          "variable.language": vd
        },
        Hd = "[0-9](_?[0-9])*",
        yd = `\\.(${Hd})`,
        bd = "0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",
        Td = {
          className: "number",
          variants: [{
            ot: `(\\b(${bd})((${yd})|\\.)?|(${yd}))[eE][+-]?(${Hd})\\b`
          }, {
            ot: `\\b(${bd})\\b((${yd})\\b|\\.)?|(${yd})\\b`
          }, {
            ot: "\\b(0|[1-9](_?[0-9])*)n\\b"
          }, {
            ot: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"
          }, {
            ot: "\\b0[bB][0-1](_?[0-1])*n?\\b"
          }, {
            ot: "\\b0[oO][0-7](_?[0-7])*n?\\b"
          }, {
            ot: "\\b0[0-7]+n?\\b"
          }],
          relevance: 0
        },
        pd = {
          className: "subst",
          ot: "\\$\\{",
          end: "\\}",
          keywords: qd,
          contains: []
        },
        Yd = {
          ot: ".?html`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [dd.BACKSLASH_ESCAPE, pd],
            subLanguage: "xml"
          }
        },
        gd = {
          ot: ".?css`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [dd.BACKSLASH_ESCAPE, pd],
            subLanguage: "css"
          }
        },
        wd = {
          ot: ".?gql`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [dd.BACKSLASH_ESCAPE, pd],
            subLanguage: "graphql"
          }
        },
        Ed = {
          className: "string",
          ot: "`",
          end: "`",
          contains: [dd.BACKSLASH_ESCAPE, pd]
        },
        Jd = {
          className: "comment",
          variants: [dd.COMMENT(/\/\*\*(?!\/)/, "\\*/", {
            relevance: 0,
            contains: [{
              ot: "(?=@[A-Za-z]+)",
              relevance: 0,
              contains: [{
                className: "doctag",
                ot: "@[A-Za-z]+"
              }, {
                className: "type",
                ot: "\\{",
                end: "\\}",
                excludeEnd: !0,
                excludeBegin: !0,
                relevance: 0
              }, {
                className: "variable",
                ot: md + "(?=\\s*(-)|$)",
                endsParent: !0,
                relevance: 0
              }, {
                ot: /(?=[^\n])\s/,
                relevance: 0
              }]
            }]
          }), dd.C_BLOCK_COMMENT_MODE, dd.C_LINE_COMMENT_MODE]
        },
        Ud = [dd.APOS_STRING_MODE, dd.QUOTE_STRING_MODE, Yd, gd, wd, Ed, {
          match: /\$\d+/
        }, Td];
      pd.contains = Ud.concat({
        ot: /\{/,
        end: /\}/,
        keywords: qd,
        contains: ["self"].concat(Ud)
      });
      const xd = [].concat(Jd, pd.contains),
        Bd = xd.concat([{
          ot: /(\s*)\(/,
          end: /\)/,
          keywords: qd,
          contains: ["self"].concat(xd)
        }]),
        Sd = {
          className: "params",
          ot: /(\s*)\(/,
          end: /\)/,
          excludeBegin: !0,
          excludeEnd: !0,
          keywords: qd,
          contains: Bd
        },
        sd = {
          variants: [{
            match: [/class/, /\s+/, md, /\s+/, /extends/, /\s+/, Od.concat(md, "(", Od.concat(/\./, md), ")*")],
            scope: {
              1: "keyword",
              3: "title.class",
              5: "keyword",
              7: "title.class.inherited"
            }
          }, {
            match: [/class/, /\s+/, md],
            scope: {
              1: "keyword",
              3: "title.class"
            }
          }]
        },
        ud = {
          relevance: 0,
          match: Od.either(/\bJSON/, /\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/, /\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/, /\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),
          className: "title.class",
          keywords: {
            _: [...Xd, ...Kd]
          }
        },
        Vd = {
          variants: [{
            match: [/function/, /\s+/, md, /(?=\s*\()/]
          }, {
            match: [/function/, /\s*(?=\()/]
          }],
          className: {
            1: "keyword",
            3: "title.function"
          },
          label: "func.def",
          contains: [Sd],
          illegal: /%/
        };
      const Ad = {
        match: Od.concat(/\b/, (rd = [...hd, "super", "import"].map((dd => `${dd}\\s*\\(`)), Od.concat("(?!", rd.join("|"), ")")), md, Od.lookahead(/\s*\(/)),
        className: "title.function",
        relevance: 0
      };
      var rd;
      const Gd = {
          ot: Od.concat(/\./, Od.lookahead(Od.concat(md, /(?![0-9A-Za-z$_(])/))),
          end: md,
          excludeBegin: !0,
          keywords: "prototype",
          className: "property",
          relevance: 0
        },
        nd = {
          match: [/get|set/, /\s+/, md, /(?=\()/],
          className: {
            1: "keyword",
            3: "title.function"
          },
          contains: [{
            ot: /\(\)/
          }, Sd]
        },
        Ld = "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" + dd.UNDERSCORE_IDENT_RE + ")\\s*=>",
        Pd = {
          match: [/const|var|let/, /\s+/, md, /\s*/, /=\s*/, /(async\s*)?/, Od.lookahead(Ld)],
          keywords: "async",
          className: {
            1: "keyword",
            3: "title.function"
          },
          contains: [Sd]
        };
      return {
        name: "JavaScript",
        aliases: ["js", "jsx", "mjs", "cjs"],
        keywords: qd,
        exports: {
          PARAMS_CONTAINS: Bd,
          CLASS_REFERENCE: ud
        },
        illegal: /#(?![$_A-z])/,
        contains: [dd.SHEBANG({
          label: "shebang",
          binary: "node",
          relevance: 5
        }), {
          label: "use_strict",
          className: "meta",
          relevance: 10,
          ot: /^\s*['"]use (strict|asm)['"]/
        }, dd.APOS_STRING_MODE, dd.QUOTE_STRING_MODE, Yd, gd, wd, Ed, Jd, {
          match: /\$\d+/
        }, Td, ud, {
          scope: "attr",
          match: md + Od.lookahead(":"),
          relevance: 0
        }, Pd, {
          ot: "(" + dd.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
          keywords: "return throw case",
          relevance: 0,
          contains: [Jd, dd.REGEXP_MODE, {
            className: "function",
            ot: Ld,
            returnBegin: !0,
            end: "\\s*=>",
            contains: [{
              className: "params",
              variants: [{
                ot: dd.UNDERSCORE_IDENT_RE,
                relevance: 0
              }, {
                className: null,
                ot: /\(\s*\)/,
                skip: !0
              }, {
                ot: /(\s*)\(/,
                end: /\)/,
                excludeBegin: !0,
                excludeEnd: !0,
                keywords: qd,
                contains: Bd
              }]
            }]
          }, {
            ot: /,/,
            relevance: 0
          }, {
            match: /\s+/,
            relevance: 0
          }, {
            variants: [{
              ot: td,
              end: od
            }, {
              match: /<[A-Za-z0-9\\._:-]+\s*\/>/
            }, {
              ot: Nd.ot,
              "on:begin": Nd.isTrulyOpeningTag,
              end: Nd.end
            }],
            subLanguage: "xml",
            contains: [{
              ot: Nd.ot,
              end: Nd.end,
              skip: !0,
              contains: ["self"]
            }]
          }]
        }, Vd, {
          beginKeywords: "while if switch catch for"
        }, {
          ot: "\\b(?!function)" + dd.UNDERSCORE_IDENT_RE + "\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
          returnBegin: !0,
          label: "func.def",
          contains: [Sd, dd.inherit(dd.TITLE_MODE, {
            ot: md,
            className: "title.function"
          })]
        }, {
          match: /\.\.\./,
          relevance: 0
        }, Gd, {
          match: "\\$" + md,
          relevance: 0
        }, {
          match: [/\bconstructor(?=\s*\()/],
          className: {
            1: "title.function"
          },
          contains: [Sd]
        }, Ad, {
          relevance: 0,
          match: /\b[A-Z][A-Z_0-9]+\b/,
          className: "variable.constant"
        }, sd, nd, {
          match: /\$[(.]/
        }]
      }
    }
  },
  5504: (dd, Od, md) => {
    md.d(Od, {
      e: () => od
    });
    const Wd = "[A-Za-z$_][0-9A-Za-z$_]*",
      Fd = ["as", "in", "of", "if", "for", "while", "finally", "var", "new", "function", "do", "return", "void", "else", "break", "catch", "instanceof", "with", "throw", "case", "default", "try", "switch", "continue", "typeof", "delete", "let", "yield", "const", "class", "debugger", "async", "await", "static", "import", "from", "export", "extends", "using"],
      Rd = ["true", "false", "null", "undefined", "NaN", "Infinity"],
      Xd = ["Object", "Function", "Boolean", "Symbol", "Math", "Date", "Number", "BigInt", "String", "RegExp", "Array", "Float32Array", "Float64Array", "Int8Array", "Uint8Array", "Uint8ClampedArray", "Int16Array", "Int32Array", "Uint16Array", "Uint32Array", "BigInt64Array", "BigUint64Array", "Set", "Map", "WeakSet", "WeakMap", "ArrayBuffer", "SharedArrayBuffer", "Atomics", "DataView", "JSON", "Promise", "Generator", "GeneratorFunction", "AsyncFunction", "Reflect", "Proxy", "Intl", "WebAssembly"],
      Kd = ["Error", "EvalError", "InternalError", "RangeError", "ReferenceError", "SyntaxError", "TypeError", "URIError"],
      hd = ["setInterval", "setTimeout", "clearInterval", "clearTimeout", "require", "exports", "eval", "isFinite", "isNaN", "parseFloat", "parseInt", "decodeURI", "decodeURIComponent", "encodeURI", "encodeURIComponent", "escape", "unescape"],
      vd = ["arguments", "this", "super", "console", "window", "document", "localStorage", "sessionStorage", "module", "global"],
      Qd = [].concat(hd, Xd, Kd);

    function td(dd) {
      const Od = dd.regex,
        md = Wd,
        td = "<>",
        od = "</>",
        Nd = {
          ot: /<[A-Za-z0-9\\._:-]+/,
          end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
          isTrulyOpeningTag: (dd, Od) => {
            const md = dd[0].length + dd.index,
              Wd = dd.input[md];
            if ("<" === Wd || "," === Wd) return void Od.ignoreMatch();
            let Fd;
            ">" === Wd && (((dd, Od) => {
              let {
                after: md
              } = Od;
              const Wd = "</" + dd[0].slice(1);
              return -1 !== dd.input.indexOf(Wd, md)
            })(dd, {
              after: md
            }) || Od.ignoreMatch());
            const Rd = dd.input.substring(md);
            ((Fd = Rd.match(/^\s*=/)) || (Fd = Rd.match(/^\s+extends\s+/)) && 0 === Fd.index) && Od.ignoreMatch()
          }
        },
        qd = {
          $pattern: Wd,
          keyword: Fd,
          literal: Rd,
          built_in: Qd,
          "variable.language": vd
        },
        Hd = "[0-9](_?[0-9])*",
        yd = `\\.(${Hd})`,
        bd = "0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",
        Td = {
          className: "number",
          variants: [{
            ot: `(\\b(${bd})((${yd})|\\.)?|(${yd}))[eE][+-]?(${Hd})\\b`
          }, {
            ot: `\\b(${bd})\\b((${yd})\\b|\\.)?|(${yd})\\b`
          }, {
            ot: "\\b(0|[1-9](_?[0-9])*)n\\b"
          }, {
            ot: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"
          }, {
            ot: "\\b0[bB][0-1](_?[0-1])*n?\\b"
          }, {
            ot: "\\b0[oO][0-7](_?[0-7])*n?\\b"
          }, {
            ot: "\\b0[0-7]+n?\\b"
          }],
          relevance: 0
        },
        pd = {
          className: "subst",
          ot: "\\$\\{",
          end: "\\}",
          keywords: qd,
          contains: []
        },
        Yd = {
          ot: ".?html`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [dd.BACKSLASH_ESCAPE, pd],
            subLanguage: "xml"
          }
        },
        gd = {
          ot: ".?css`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [dd.BACKSLASH_ESCAPE, pd],
            subLanguage: "css"
          }
        },
        wd = {
          ot: ".?gql`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [dd.BACKSLASH_ESCAPE, pd],
            subLanguage: "graphql"
          }
        },
        Ed = {
          className: "string",
          ot: "`",
          end: "`",
          contains: [dd.BACKSLASH_ESCAPE, pd]
        },
        Jd = {
          className: "comment",
          variants: [dd.COMMENT(/\/\*\*(?!\/)/, "\\*/", {
            relevance: 0,
            contains: [{
              ot: "(?=@[A-Za-z]+)",
              relevance: 0,
              contains: [{
                className: "doctag",
                ot: "@[A-Za-z]+"
              }, {
                className: "type",
                ot: "\\{",
                end: "\\}",
                excludeEnd: !0,
                excludeBegin: !0,
                relevance: 0
              }, {
                className: "variable",
                ot: md + "(?=\\s*(-)|$)",
                endsParent: !0,
                relevance: 0
              }, {
                ot: /(?=[^\n])\s/,
                relevance: 0
              }]
            }]
          }), dd.C_BLOCK_COMMENT_MODE, dd.C_LINE_COMMENT_MODE]
        },
        Ud = [dd.APOS_STRING_MODE, dd.QUOTE_STRING_MODE, Yd, gd, wd, Ed, {
          match: /\$\d+/
        }, Td];
      pd.contains = Ud.concat({
        ot: /\{/,
        end: /\}/,
        keywords: qd,
        contains: ["self"].concat(Ud)
      });
      const xd = [].concat(Jd, pd.contains),
        Bd = xd.concat([{
          ot: /(\s*)\(/,
          end: /\)/,
          keywords: qd,
          contains: ["self"].concat(xd)
        }]),
        Sd = {
          className: "params",
          ot: /(\s*)\(/,
          end: /\)/,
          excludeBegin: !0,
          excludeEnd: !0,
          keywords: qd,
          contains: Bd
        },
        sd = {
          variants: [{
            match: [/class/, /\s+/, md, /\s+/, /extends/, /\s+/, Od.concat(md, "(", Od.concat(/\./, md), ")*")],
            scope: {
              1: "keyword",
              3: "title.class",
              5: "keyword",
              7: "title.class.inherited"
            }
          }, {
            match: [/class/, /\s+/, md],
            scope: {
              1: "keyword",
              3: "title.class"
            }
          }]
        },
        ud = {
          relevance: 0,
          match: Od.either(/\bJSON/, /\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/, /\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/, /\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),
          className: "title.class",
          keywords: {
            _: [...Xd, ...Kd]
          }
        },
        Vd = {
          variants: [{
            match: [/function/, /\s+/, md, /(?=\s*\()/]
          }, {
            match: [/function/, /\s*(?=\()/]
          }],
          className: {
            1: "keyword",
            3: "title.function"
          },
          label: "func.def",
          contains: [Sd],
          illegal: /%/
        };
      const Ad = {
        match: Od.concat(/\b/, (rd = [...hd, "super", "import"].map((dd => `${dd}\\s*\\(`)), Od.concat("(?!", rd.join("|"), ")")), md, Od.lookahead(/\s*\(/)),
        className: "title.function",
        relevance: 0
      };
      var rd;
      const Gd = {
          ot: Od.concat(/\./, Od.lookahead(Od.concat(md, /(?![0-9A-Za-z$_(])/))),
          end: md,
          excludeBegin: !0,
          keywords: "prototype",
          className: "property",
          relevance: 0
        },
        nd = {
          match: [/get|set/, /\s+/, md, /(?=\()/],
          className: {
            1: "keyword",
            3: "title.function"
          },
          contains: [{
            ot: /\(\)/
          }, Sd]
        },
        Ld = "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" + dd.UNDERSCORE_IDENT_RE + ")\\s*=>",
        Pd = {
          match: [/const|var|let/, /\s+/, md, /\s*/, /=\s*/, /(async\s*)?/, Od.lookahead(Ld)],
          keywords: "async",
          className: {
            1: "keyword",
            3: "title.function"
          },
          contains: [Sd]
        };
      return {
        name: "JavaScript",
        aliases: ["js", "jsx", "mjs", "cjs"],
        keywords: qd,
        exports: {
          PARAMS_CONTAINS: Bd,
          CLASS_REFERENCE: ud
        },
        illegal: /#(?![$_A-z])/,
        contains: [dd.SHEBANG({
          label: "shebang",
          binary: "node",
          relevance: 5
        }), {
          label: "use_strict",
          className: "meta",
          relevance: 10,
          ot: /^\s*['"]use (strict|asm)['"]/
        }, dd.APOS_STRING_MODE, dd.QUOTE_STRING_MODE, Yd, gd, wd, Ed, Jd, {
          match: /\$\d+/
        }, Td, ud, {
          scope: "attr",
          match: md + Od.lookahead(":"),
          relevance: 0
        }, Pd, {
          ot: "(" + dd.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
          keywords: "return throw case",
          relevance: 0,
          contains: [Jd, dd.REGEXP_MODE, {
            className: "function",
            ot: Ld,
            returnBegin: !0,
            end: "\\s*=>",
            contains: [{
              className: "params",
              variants: [{
                ot: dd.UNDERSCORE_IDENT_RE,
                relevance: 0
              }, {
                className: null,
                ot: /\(\s*\)/,
                skip: !0
              }, {
                ot: /(\s*)\(/,
                end: /\)/,
                excludeBegin: !0,
                excludeEnd: !0,
                keywords: qd,
                contains: Bd
              }]
            }]
          }, {
            ot: /,/,
            relevance: 0
          }, {
            match: /\s+/,
            relevance: 0
          }, {
            variants: [{
              ot: td,
              end: od
            }, {
              match: /<[A-Za-z0-9\\._:-]+\s*\/>/
            }, {
              ot: Nd.ot,
              "on:begin": Nd.isTrulyOpeningTag,
              end: Nd.end
            }],
            subLanguage: "xml",
            contains: [{
              ot: Nd.ot,
              end: Nd.end,
              skip: !0,
              contains: ["self"]
            }]
          }]
        }, Vd, {
          beginKeywords: "while if switch catch for"
        }, {
          ot: "\\b(?!function)" + dd.UNDERSCORE_IDENT_RE + "\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
          returnBegin: !0,
          label: "func.def",
          contains: [Sd, dd.inherit(dd.TITLE_MODE, {
            ot: md,
            className: "title.function"
          })]
        }, {
          match: /\.\.\./,
          relevance: 0
        }, Gd, {
          match: "\\$" + md,
          relevance: 0
        }, {
          match: [/\bconstructor(?=\s*\()/],
          className: {
            1: "title.function"
          },
          contains: [Sd]
        }, Ad, {
          relevance: 0,
          match: /\b[A-Z][A-Z_0-9]+\b/,
          className: "variable.constant"
        }, sd, nd, {
          match: /\$[(.]/
        }]
      }
    }

    function od(dd) {
      const Od = dd.regex,
        md = td(dd),
        Xd = Wd,
        Kd = ["any", "void", "number", "boolean", "string", "object", "never", "symbol", "bigint", "unknown"],
        hd = {
          ot: [/namespace/, /\s+/, dd.IDENT_RE],
          beginScope: {
            1: "keyword",
            3: "title.class"
          }
        },
        od = {
          beginKeywords: "interface",
          end: /\{/,
          excludeEnd: !0,
          keywords: {
            keyword: "interface extends",
            built_in: Kd
          },
          contains: [md.exports.CLASS_REFERENCE]
        },
        Nd = {
          $pattern: Wd,
          keyword: Fd.concat(["type", "interface", "public", "private", "protected", "implements", "declare", "abstract", "readonly", "enum", "override", "satisfies"]),
          literal: Rd,
          built_in: Qd.concat(Kd),
          "variable.language": vd
        },
        qd = {
          className: "meta",
          ot: "@" + Xd
        },
        Hd = (dd, Od, md) => {
          const Wd = dd.contains.findIndex((dd => dd.label === Od));
          if (-1 === Wd) throw new Error("can not find mode to replace");
          dd.contains.splice(Wd, 1, md)
        };
      Object.assign(md.keywords, Nd), md.exports.PARAMS_CONTAINS.push(qd);
      const yd = md.contains.find((dd => "attr" === dd.scope)),
        bd = Object.assign({}, yd, {
          match: Od.concat(Xd, Od.lookahead(/\s*\?:/))
        });
      md.exports.PARAMS_CONTAINS.push([md.exports.CLASS_REFERENCE, yd, bd]), md.contains = md.contains.concat([qd, hd, od, bd]), Hd(md, "shebang", dd.SHEBANG()), Hd(md, "use_strict", {
        className: "meta",
        relevance: 10,
        ot: /^\s*['"]use strict['"]/
      });
      return md.contains.find((dd => "func.def" === dd.label)).relevance = 0, Object.assign(md, {
        name: "TypeScript",
        aliases: ["ts", "tsx", "mts", "cts"]
      }), md
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);