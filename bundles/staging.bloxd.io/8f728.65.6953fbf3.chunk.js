export const id = 65;
export const ids = [65];
export const modules = {
  3775: cB => {
    function Bc(cB) {
      return cB instanceof Map ? cB.clear = cB.delete = cB.set = function() {
        throw new Error("map is read-only")
      } : cB instanceof Set && (cB.add = cB.clear = cB.delete = function() {
        throw new Error("set is read-only")
      }), Object.freeze(cB), Object.getOwnPropertyNames(cB).forEach((nc => {
        const Vc = cB[nc],
          Ic = typeof Vc;
        "object" !== Ic && "function" !== Ic || Object.isFrozen(Vc) || Bc(Vc)
      })), cB
    }
    class nc {
      constructor(cB) {
        void 0 === cB.data && (cB.data = {}), this.data = cB.data, this.isMatchIgnored = !1
      }
      ignoreMatch() {
        this.isMatchIgnored = !0
      }
    }

    function Vc(cB) {
      return cB.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;")
    }

    function Ic(cB) {
      const Bc = Object.create(null);
      for (const rB in cB) Bc[rB] = cB[rB];
      for (var nc = arguments.length, Vc = new Array(nc > 1 ? nc - 1 : 0), Ic = 1; Ic < nc; Ic++) Vc[Ic - 1] = arguments[Ic];
      return Vc.forEach((function(cB) {
        for (const nc in cB) Bc[nc] = cB[nc]
      })), Bc
    }
    const rB = cB => !!cB.scope;
    class uc {
      constructor(cB, Bc) {
        this.buffer = "", this.classPrefix = Bc.classPrefix, cB.walk(this)
      }
      addText(cB) {
        this.buffer += Vc(cB)
      }
      openNode(cB) {
        if (!rB(cB)) return;
        const Bc = ((cB, Bc) => {
          let {
            prefix: nc
          } = Bc;
          if (cB.startsWith("language:")) return cB.replace("language:", "language-");
          if (cB.includes(".")) {
            const Bc = cB.split(".");
            return [`${nc}${Bc.shift()}`, ...Bc.map(((cB, Bc) => `${cB}${"_".repeat(Bc+1)}`))].join(" ")
          }
          return `${nc}${cB}`
        })(cB.scope, {
          prefix: this.classPrefix
        });
        this.span(Bc)
      }
      closeNode(cB) {
        rB(cB) && (this.buffer += "</span>")
      }
      value() {
        return this.buffer
      }
      span(cB) {
        this.buffer += `<span class="${cB}">`
      }
    }
    const sc = function() {
      let cB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      const Bc = {
        children: []
      };
      return Object.assign(Bc, cB), Bc
    };
    class Mc {
      constructor() {
        this.wZ = sc(), this.stack = [this.wZ]
      }
      get top() {
        return this.stack[this.stack.length - 1]
      }
      get root() {
        return this.wZ
      }
      add(cB) {
        this.top.children.push(cB)
      }
      openNode(cB) {
        const Bc = sc({
          scope: cB
        });
        this.add(Bc), this.stack.push(Bc)
      }
      closeNode() {
        if (this.stack.length > 1) return this.stack.pop()
      }
      closeAllNodes() {
        for (; this.closeNode(););
      }
      toJSON() {
        return JSON.stringify(this.wZ, null, 4)
      }
      walk(cB) {
        return this.constructor._walk(cB, this.wZ)
      }
      static _walk(cB, Bc) {
        return "string" === typeof Bc ? cB.addText(Bc) : Bc.children && (cB.openNode(Bc), Bc.children.forEach((Bc => this._walk(cB, Bc))), cB.closeNode(Bc)), cB
      }
      static _collapse(cB) {
        "string" !== typeof cB && cB.children && (cB.children.every((cB => "string" === typeof cB)) ? cB.children = [cB.children.join("")] : cB.children.forEach((cB => {
          Mc._collapse(cB)
        })))
      }
    }
    class Pc extends Mc {
      constructor(cB) {
        super(), this.options = cB
      }
      addText(cB) {
        "" !== cB && this.add(cB)
      }
      startScope(cB) {
        this.openNode(cB)
      }
      endScope() {
        this.closeNode()
      }
      __addSublanguage(cB, Bc) {
        const nc = cB.root;
        Bc && (nc.scope = `language:${Bc}`), this.add(nc)
      }
      toHTML() {
        return new uc(this, this.options).value()
      }
      finalize() {
        return this.closeAllNodes(), !0
      }
    }

    function qB(cB) {
      return cB ? "string" === typeof cB ? cB : cB.source : null
    }

    function Oc(cB) {
      return mB("(?=", cB, ")")
    }

    function Tc(cB) {
      return mB("(?:", cB, ")*")
    }

    function fc(cB) {
      return mB("(?:", cB, ")?")
    }

    function mB() {
      for (var cB = arguments.length, Bc = new Array(cB), nc = 0; nc < cB; nc++) Bc[nc] = arguments[nc];
      return Bc.map((cB => qB(cB))).join("")
    }

    function ec() {
      for (var cB = arguments.length, Bc = new Array(cB), nc = 0; nc < cB; nc++) Bc[nc] = arguments[nc];
      const Vc = function(cB) {
        const Bc = cB[cB.length - 1];
        return "object" === typeof Bc && Bc.constructor === Object ? (cB.splice(cB.length - 1, 1), Bc) : {}
      }(Bc);
      return "(" + (Vc.capture ? "" : "?:") + Bc.map((cB => qB(cB))).join("|") + ")"
    }

    function tB(cB) {
      return new RegExp(cB.toString() + "|").exec("").length - 1
    }
    const Sc = /\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;

    function yB(cB, Bc) {
      let {
        joinWith: nc
      } = Bc, Vc = 0;
      return cB.map((cB => {
        Vc += 1;
        const Bc = Vc;
        let nc = qB(cB),
          Ic = "";
        for (; nc.length > 0;) {
          const cB = Sc.exec(nc);
          if (!cB) {
            Ic += nc;
            break
          }
          Ic += nc.substring(0, cB.index), nc = nc.substring(cB.index + cB[0].length), "\\" === cB[0][0] && cB[1] ? Ic += "\\" + String(Number(cB[1]) + Bc) : (Ic += cB[0], "(" === cB[0] && Vc++)
        }
        return Ic
      })).map((cB => `(${cB})`)).join(nc)
    }
    const zB = "[a-zA-Z]\\w*",
      pc = "[a-zA-Z_]\\w*",
      hc = "\\b\\d+(\\.\\d+)?",
      aB = "(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",
      lc = "\\b(0b[01]+)",
      Yc = {
        Ln: "\\\\[\\s\\S]",
        relevance: 0
      },
      Lc = {
        scope: "string",
        Ln: "'",
        end: "'",
        illegal: "\\n",
        contains: [Yc]
      },
      gB = {
        scope: "string",
        Ln: '"',
        end: '"',
        illegal: "\\n",
        contains: [Yc]
      },
      Uc = function(cB, Bc) {
        const nc = Ic({
          scope: "comment",
          Ln: cB,
          end: Bc,
          contains: []
        }, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {});
        nc.contains.push({
          scope: "doctag",
          Ln: "[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",
          end: /(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,
          excludeBegin: !0,
          relevance: 0
        });
        const Vc = ec("I", "a", "is", "so", "us", "to", "at", "if", "in", "it", "on", /[A-Za-z]+['](d|ve|re|ll|t|s|n)/, /[A-Za-z]+[-][a-z]+/, /[A-Za-z][a-z]{2,}/);
        return nc.contains.push({
          Ln: mB(/[ ]+/, "(", Vc, /[.]?[:]?([.][ ]|[ ])/, "){3}")
        }), nc
      },
      bB = Uc("//", "$"),
      Zc = Uc("/\\*", "\\*/"),
      Qc = Uc("#", "$"),
      Cc = {
        scope: "number",
        Ln: hc,
        relevance: 0
      },
      vB = {
        scope: "number",
        Ln: aB,
        relevance: 0
      },
      Dc = {
        scope: "number",
        Ln: lc,
        relevance: 0
      },
      Nc = {
        scope: "regexp",
        Ln: /\/(?=[^/\n]*\/)/,
        end: /\/[gimuy]*/,
        contains: [Yc, {
          Ln: /\[/,
          end: /\]/,
          relevance: 0,
          contains: [Yc]
        }]
      },
      Ec = {
        scope: "title",
        Ln: zB,
        relevance: 0
      },
      oc = {
        scope: "title",
        Ln: pc,
        relevance: 0
      },
      Wc = {
        Ln: "\\.\\s*" + pc,
        relevance: 0
      };
    var wc = Object.freeze({
      __proto__: null,
      APOS_STRING_MODE: Lc,
      BACKSLASH_ESCAPE: Yc,
      BINARY_NUMBER_MODE: Dc,
      BINARY_NUMBER_RE: lc,
      COMMENT: Uc,
      C_BLOCK_COMMENT_MODE: Zc,
      C_LINE_COMMENT_MODE: bB,
      C_NUMBER_MODE: vB,
      C_NUMBER_RE: aB,
      END_SAME_AS_BEGIN: function(cB) {
        return Object.assign(cB, {
          "on:begin": (cB, Bc) => {
            Bc.data._beginMatch = cB[1]
          },
          "on:end": (cB, Bc) => {
            Bc.data._beginMatch !== cB[1] && Bc.ignoreMatch()
          }
        })
      },
      HASH_COMMENT_MODE: Qc,
      IDENT_RE: zB,
      MATCH_NOTHING_RE: /\b\B/,
      METHOD_GUARD: Wc,
      NUMBER_MODE: Cc,
      NUMBER_RE: hc,
      PHRASAL_WORDS_MODE: {
        Ln: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/
      },
      QUOTE_STRING_MODE: gB,
      REGEXP_MODE: Nc,
      RE_STARTERS_RE: "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",
      SHEBANG: function() {
        let cB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        const Bc = /^#![ ]*\//;
        return cB.binary && (cB.Ln = mB(Bc, /.*\b/, cB.binary, /\b.*/)), Ic({
          scope: "meta",
          Ln: Bc,
          end: /$/,
          relevance: 0,
          "on:begin": (cB, Bc) => {
            0 !== cB.index && Bc.ignoreMatch()
          }
        }, cB)
      },
      TITLE_MODE: Ec,
      UNDERSCORE_IDENT_RE: pc,
      UNDERSCORE_TITLE_MODE: oc
    });

    function kB(cB, Bc) {
      "." === cB.input[cB.index - 1] && Bc.ignoreMatch()
    }

    function Xc(cB, Bc) {
      void 0 !== cB.className && (cB.scope = cB.className, delete cB.className)
    }

    function Hc(cB, Bc) {
      Bc && cB.beginKeywords && (cB.Ln = "\\b(" + cB.beginKeywords.split(" ").join("|") + ")(?!\\.)(?=\\b|\\s)", cB.__beforeBegin = kB, cB.keywords = cB.keywords || cB.beginKeywords, delete cB.beginKeywords, void 0 === cB.relevance && (cB.relevance = 0))
    }

    function Fc(cB, Bc) {
      Array.isArray(cB.illegal) && (cB.illegal = ec(...cB.illegal))
    }

    function Jc(cB, Bc) {
      if (cB.match) {
        if (cB.Ln || cB.end) throw new Error("begin & end are not supported with match");
        cB.Ln = cB.match, delete cB.match
      }
    }

    function jB(cB, Bc) {
      void 0 === cB.relevance && (cB.relevance = 1)
    }
    const Rc = (cB, Bc) => {
        if (!cB.beforeMatch) return;
        if (cB.starts) throw new Error("beforeMatch cannot be used with starts");
        const nc = Object.assign({}, cB);
        Object.keys(cB).forEach((Bc => {
          delete cB[Bc]
        })), cB.keywords = nc.keywords, cB.Ln = mB(nc.beforeMatch, Oc(nc.Ln)), cB.starts = {
          relevance: 0,
          contains: [Object.assign(nc, {
            endsParent: !0
          })]
        }, cB.relevance = 0, delete nc.beforeMatch
      },
      iB = ["of", "and", "for", "in", "not", "or", "if", "then", "parent", "list", "value"];

    function Kc(cB, Bc) {
      let nc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "keyword";
      const Vc = Object.create(null);
      return "string" === typeof cB ? Ic(nc, cB.split(" ")) : Array.isArray(cB) ? Ic(nc, cB) : Object.keys(cB).forEach((function(nc) {
        Object.assign(Vc, Kc(cB[nc], Bc, nc))
      })), Vc;

      function Ic(cB, nc) {
        Bc && (nc = nc.map((cB => cB.toLowerCase()))), nc.forEach((function(Bc) {
          const nc = Bc.split("|");
          Vc[nc[0]] = [cB, xB(nc[0], nc[1])]
        }))
      }
    }

    function xB(cB, Bc) {
      return Bc ? Number(Bc) : function(cB) {
        return iB.includes(cB.toLowerCase())
      }(cB) ? 0 : 1
    }
    const dc = {},
      Ac = cB => {
        console.error(cB)
      },
      Gc = function(cB) {
        for (var Bc = arguments.length, nc = new Array(Bc > 1 ? Bc - 1 : 0), Vc = 1; Vc < Bc; Vc++) nc[Vc - 1] = arguments[Vc];
        console.log(`WARN: ${cB}`, ...nc)
      },
      cn = (cB, Bc) => {
        dc[`${cB}/${Bc}`] || (console.log(`Deprecated as of ${cB}. ${Bc}`), dc[`${cB}/${Bc}`] = !0)
      },
      BB = new Error;

    function nB(cB, Bc, nc) {
      let {
        key: Vc
      } = nc, Ic = 0;
      const rB = cB[Vc],
        uc = {},
        sc = {};
      for (let Mc = 1; Mc <= Bc.length; Mc++) sc[Mc + Ic] = rB[Mc], uc[Mc + Ic] = !0, Ic += tB(Bc[Mc - 1]);
      cB[Vc] = sc, cB[Vc]._emit = uc, cB[Vc]._multi = !0
    }

    function VB(cB) {
      ! function(cB) {
        cB.scope && "object" === typeof cB.scope && null !== cB.scope && (cB.beginScope = cB.scope, delete cB.scope)
      }(cB), "string" === typeof cB.beginScope && (cB.beginScope = {
          _wrap: cB.beginScope
        }), "string" === typeof cB.endScope && (cB.endScope = {
          _wrap: cB.endScope
        }),
        function(cB) {
          if (Array.isArray(cB.Ln)) {
            if (cB.skip || cB.excludeBegin || cB.returnBegin) throw Ac("skip, excludeBegin, returnBegin not compatible with beginScope: {}"), BB;
            if ("object" !== typeof cB.beginScope || null === cB.beginScope) throw Ac("beginScope must be object"), BB;
            nB(cB, cB.Ln, {
              key: "beginScope"
            }), cB.Ln = yB(cB.Ln, {
              joinWith: ""
            })
          }
        }(cB),
        function(cB) {
          if (Array.isArray(cB.end)) {
            if (cB.skip || cB.excludeEnd || cB.returnEnd) throw Ac("skip, excludeEnd, returnEnd not compatible with endScope: {}"), BB;
            if ("object" !== typeof cB.endScope || null === cB.endScope) throw Ac("endScope must be object"), BB;
            nB(cB, cB.end, {
              key: "endScope"
            }), cB.end = yB(cB.end, {
              joinWith: ""
            })
          }
        }(cB)
    }

    function IB(cB) {
      function Bc(Bc, nc) {
        return new RegExp(qB(Bc), "m" + (cB.case_insensitive ? "i" : "") + (cB.unicodeRegex ? "u" : "") + (nc ? "g" : ""))
      }
      class nc {
        constructor() {
          this.matchIndexes = {}, this.regexes = [], this.matchAt = 1, this.position = 0
        }
        addRule(cB, Bc) {
          Bc.position = this.position++, this.matchIndexes[this.matchAt] = Bc, this.regexes.push([Bc, cB]), this.matchAt += tB(cB) + 1
        }
        compile() {
          0 === this.regexes.length && (this.exec = () => null);
          const cB = this.regexes.map((cB => cB[1]));
          this.matcherRe = Bc(yB(cB, {
            joinWith: "|"
          }), !0), this.lastIndex = 0
        }
        exec(cB) {
          this.matcherRe.lastIndex = this.lastIndex;
          const Bc = this.matcherRe.exec(cB);
          if (!Bc) return null;
          const nc = Bc.findIndex(((cB, Bc) => Bc > 0 && void 0 !== cB)),
            Vc = this.matchIndexes[nc];
          return Bc.splice(0, nc), Object.assign(Bc, Vc)
        }
      }
      class Vc {
        constructor() {
          this.rules = [], this.multiRegexes = [], this.count = 0, this.lastIndex = 0, this.regexIndex = 0
        }
        getMatcher(cB) {
          if (this.multiRegexes[cB]) return this.multiRegexes[cB];
          const Bc = new nc;
          return this.rules.slice(cB).forEach((cB => {
            let [nc, Vc] = cB;
            return Bc.addRule(nc, Vc)
          })), Bc.compile(), this.multiRegexes[cB] = Bc, Bc
        }
        resumingScanAtSamePosition() {
          return 0 !== this.regexIndex
        }
        considerAll() {
          this.regexIndex = 0
        }
        addRule(cB, Bc) {
          this.rules.push([cB, Bc]), "Ln" === Bc.type && this.count++
        }
        exec(cB) {
          const Bc = this.getMatcher(this.regexIndex);
          Bc.lastIndex = this.lastIndex;
          let nc = Bc.exec(cB);
          if (this.resumingScanAtSamePosition())
            if (nc && nc.index === this.lastIndex);
            else {
              const Bc = this.getMatcher(0);
              Bc.lastIndex = this.lastIndex + 1, nc = Bc.exec(cB)
            } return nc && (this.regexIndex += nc.position + 1, this.regexIndex === this.count && this.considerAll()), nc
        }
      }
      if (cB.compilerExtensions || (cB.compilerExtensions = []), cB.contains && cB.contains.includes("self")) throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");
      return cB.classNameAliases = Ic(cB.classNameAliases || {}),
        function nc(rB, uc) {
          const sc = rB;
          if (rB.isCompiled) return sc;
          [Xc, Jc, VB, Rc].forEach((cB => cB(rB, uc))), cB.compilerExtensions.forEach((cB => cB(rB, uc))), rB.__beforeBegin = null, [Hc, Fc, jB].forEach((cB => cB(rB, uc))), rB.isCompiled = !0;
          let Mc = null;
          return "object" === typeof rB.keywords && rB.keywords.$pattern && (rB.keywords = Object.assign({}, rB.keywords), Mc = rB.keywords.$pattern, delete rB.keywords.$pattern), Mc = Mc || /\w+/, rB.keywords && (rB.keywords = Kc(rB.keywords, cB.case_insensitive)), sc.keywordPatternRe = Bc(Mc, !0), uc && (rB.Ln || (rB.Ln = /\B|\b/), sc.beginRe = Bc(sc.Ln), rB.end || rB.endsWithParent || (rB.end = /\B|\b/), rB.end && (sc.endRe = Bc(sc.end)), sc.terminatorEnd = qB(sc.end) || "", rB.endsWithParent && uc.terminatorEnd && (sc.terminatorEnd += (rB.end ? "|" : "") + uc.terminatorEnd)), rB.illegal && (sc.illegalRe = Bc(rB.illegal)), rB.contains || (rB.contains = []), rB.contains = [].concat(...rB.contains.map((function(cB) {
            return function(cB) {
              cB.variants && !cB.cachedVariants && (cB.cachedVariants = cB.variants.map((function(Bc) {
                return Ic(cB, {
                  variants: null
                }, Bc)
              })));
              if (cB.cachedVariants) return cB.cachedVariants;
              if (rn(cB)) return Ic(cB, {
                starts: cB.starts ? Ic(cB.starts) : null
              });
              if (Object.isFrozen(cB)) return Ic(cB);
              return cB
            }("self" === cB ? rB : cB)
          }))), rB.contains.forEach((function(cB) {
            nc(cB, sc)
          })), rB.starts && nc(rB.starts, uc), sc.matcher = function(cB) {
            const Bc = new Vc;
            return cB.contains.forEach((cB => Bc.addRule(cB.Ln, {
              rule: cB,
              type: "Ln"
            }))), cB.terminatorEnd && Bc.addRule(cB.terminatorEnd, {
              type: "end"
            }), cB.illegal && Bc.addRule(cB.illegal, {
              type: "illegal"
            }), Bc
          }(sc), sc
        }(cB)
    }

    function rn(cB) {
      return !!cB && (cB.endsWithParent || rn(cB.starts))
    }
    class uB extends Error {
      constructor(cB, Bc) {
        super(cB), this.name = "HTMLInjectionError", this.html = Bc
      }
    }
    const sB = Vc,
      MB = Ic,
      PB = Symbol("nomatch"),
      qn = function(cB) {
        const Vc = Object.create(null),
          Ic = Object.create(null),
          rB = [];
        let uc = !0;
        const sc = "Could not find the language '{}', did you forget to load/include a language module?",
          Mc = {
            disableAutodetect: !0,
            name: "Plain text",
            contains: []
          };
        let qB = {
          ignoreUnescapedHTML: !1,
          throwUnescapedHTML: !1,
          noHighlightRe: /^(no-?highlight)$/i,
          languageDetectRe: /\blang(?:uage)?-([\w-]+)\b/i,
          classPrefix: "hljs-",
          cssSelector: "pre code",
          languages: null,
          __emitter: Pc
        };

        function tB(cB) {
          return qB.noHighlightRe.test(cB)
        }

        function Sc(cB, Bc, nc) {
          let Vc = "",
            Ic = "";
          "object" === typeof Bc ? (Vc = cB, nc = Bc.ignoreIllegals, Ic = Bc.language) : (cn("10.7.0", "highlight(lang, code, ...args) has been deprecated."), cn("10.7.0", "Please use highlight(code, options) instead.\nhttps://github.com/highlightjs/highlight.js/issues/2277"), Ic = cB, Vc = Bc), void 0 === nc && (nc = !0);
          const rB = {
            code: Vc,
            language: Ic
          };
          gB("before:highlight", rB);
          const uc = rB.result ? rB.result : yB(rB.language, rB.code, nc);
          return uc.code = rB.code, gB("after:highlight", uc), uc
        }

        function yB(cB, Bc, Ic, rB) {
          const Mc = Object.create(null);

          function Pc() {
            if (!gB.keywords) return void bB.addText(Zc);
            let cB = 0;
            gB.keywordPatternRe.lastIndex = 0;
            let Bc = gB.keywordPatternRe.exec(Zc),
              nc = "";
            for (; Bc;) {
              nc += Zc.substring(cB, Bc.index);
              const Ic = aB.case_insensitive ? Bc[0].toLowerCase() : Bc[0],
                rB = (Vc = Ic, gB.keywords[Vc]);
              if (rB) {
                const [cB, Vc] = rB;
                if (bB.addText(nc), nc = "", Mc[Ic] = (Mc[Ic] || 0) + 1, Mc[Ic] <= 7 && (Qc += Vc), cB.startsWith("_")) nc += Bc[0];
                else {
                  const nc = aB.classNameAliases[cB] || cB;
                  Tc(Bc[0], nc)
                }
              } else nc += Bc[0];
              cB = gB.keywordPatternRe.lastIndex, Bc = gB.keywordPatternRe.exec(Zc)
            }
            var Vc;
            nc += Zc.substring(cB), bB.addText(nc)
          }

          function Oc() {
            null != gB.subLanguage ? function() {
              if ("" === Zc) return;
              let cB = null;
              if ("string" === typeof gB.subLanguage) {
                if (!Vc[gB.subLanguage]) return void bB.addText(Zc);
                cB = yB(gB.subLanguage, Zc, !0, Uc[gB.subLanguage]), Uc[gB.subLanguage] = cB._top
              } else cB = zB(Zc, gB.subLanguage.length ? gB.subLanguage : null);
              gB.relevance > 0 && (Qc += cB.relevance), bB.__addSublanguage(cB._emitter, cB.language)
            }() : Pc(), Zc = ""
          }

          function Tc(cB, Bc) {
            "" !== cB && (bB.startScope(Bc), bB.addText(cB), bB.endScope())
          }

          function fc(cB, Bc) {
            let nc = 1;
            const Vc = Bc.length - 1;
            for (; nc <= Vc;) {
              if (!cB._emit[nc]) {
                nc++;
                continue
              }
              const Vc = aB.classNameAliases[cB[nc]] || cB[nc],
                Ic = Bc[nc];
              Vc ? Tc(Ic, Vc) : (Zc = Ic, Pc(), Zc = ""), nc++
            }
          }

          function mB(cB, Bc) {
            return cB.scope && "string" === typeof cB.scope && bB.openNode(aB.classNameAliases[cB.scope] || cB.scope), cB.beginScope && (cB.beginScope._wrap ? (Tc(Zc, aB.classNameAliases[cB.beginScope._wrap] || cB.beginScope._wrap), Zc = "") : cB.beginScope._multi && (fc(cB.beginScope, Bc), Zc = "")), gB = Object.create(cB, {
              parent: {
                value: gB
              }
            }), gB
          }

          function ec(cB, Bc, Vc) {
            let Ic = function(cB, Bc) {
              const nc = cB && cB.exec(Bc);
              return nc && 0 === nc.index
            }(cB.endRe, Vc);
            if (Ic) {
              if (cB["on:end"]) {
                const Vc = new nc(cB);
                cB["on:end"](Bc, Vc), Vc.isMatchIgnored && (Ic = !1)
              }
              if (Ic) {
                for (; cB.endsParent && cB.parent;) cB = cB.parent;
                return cB
              }
            }
            if (cB.endsWithParent) return ec(cB.parent, Bc, Vc)
          }

          function tB(cB) {
            return 0 === gB.matcher.regexIndex ? (Zc += cB[0], 1) : (Dc = !0, 0)
          }

          function Sc(cB) {
            const nc = cB[0],
              Vc = Bc.substring(cB.index),
              Ic = ec(gB, cB, Vc);
            if (!Ic) return PB;
            const rB = gB;
            gB.endScope && gB.endScope._wrap ? (Oc(), Tc(nc, gB.endScope._wrap)) : gB.endScope && gB.endScope._multi ? (Oc(), fc(gB.endScope, cB)) : rB.skip ? Zc += nc : (rB.returnEnd || rB.excludeEnd || (Zc += nc), Oc(), rB.excludeEnd && (Zc = nc));
            do {
              gB.scope && bB.closeNode(), gB.skip || gB.subLanguage || (Qc += gB.relevance), gB = gB.parent
            } while (gB !== Ic.parent);
            return Ic.starts && mB(Ic.starts, cB), rB.returnEnd ? 0 : nc.length
          }
          let pc = {};

          function hc(Vc, rB) {
            const sc = rB && rB[0];
            if (Zc += Vc, null == sc) return Oc(), 0;
            if ("Ln" === pc.type && "end" === rB.type && pc.index === rB.index && "" === sc) {
              if (Zc += Bc.slice(rB.index, rB.index + 1), !uc) {
                const Bc = new Error(`0 width match regex (${cB})`);
                throw Bc.languageName = cB, Bc.badRule = pc.rule, Bc
              }
              return 1
            }
            if (pc = rB, "Ln" === rB.type) return function(cB) {
              const Bc = cB[0],
                Vc = cB.rule,
                Ic = new nc(Vc),
                rB = [Vc.__beforeBegin, Vc["on:begin"]];
              for (const nc of rB)
                if (nc && (nc(cB, Ic), Ic.isMatchIgnored)) return tB(Bc);
              return Vc.skip ? Zc += Bc : (Vc.excludeBegin && (Zc += Bc), Oc(), Vc.returnBegin || Vc.excludeBegin || (Zc = Bc)), mB(Vc, cB), Vc.returnBegin ? 0 : Bc.length
            }(rB);
            if ("illegal" === rB.type && !Ic) {
              const cB = new Error('Illegal lexeme "' + sc + '" for mode "' + (gB.scope || "<unnamed>") + '"');
              throw cB.mode = gB, cB
            }
            if ("end" === rB.type) {
              const cB = Sc(rB);
              if (cB !== PB) return cB
            }
            if ("illegal" === rB.type && "" === sc) return Zc += "\n", 1;
            if (vB > 1e5 && vB > 3 * rB.index) {
              throw new Error("potential infinite loop, way more iterations than matches")
            }
            return Zc += sc, sc.length
          }
          const aB = lc(cB);
          if (!aB) throw Ac(sc.replace("{}", cB)), new Error('Unknown language: "' + cB + '"');
          const Yc = IB(aB);
          let Lc = "",
            gB = rB || Yc;
          const Uc = {},
            bB = new qB.__emitter(qB);
          ! function() {
            const cB = [];
            for (let Bc = gB; Bc !== aB; Bc = Bc.parent) Bc.scope && cB.unshift(Bc.scope);
            cB.forEach((cB => bB.openNode(cB)))
          }();
          let Zc = "",
            Qc = 0,
            Cc = 0,
            vB = 0,
            Dc = !1;
          try {
            if (aB.__emitTokens) aB.__emitTokens(Bc, bB);
            else {
              for (gB.matcher.considerAll();;) {
                vB++, Dc ? Dc = !1 : gB.matcher.considerAll(), gB.matcher.lastIndex = Cc;
                const cB = gB.matcher.exec(Bc);
                if (!cB) break;
                const nc = hc(Bc.substring(Cc, cB.index), cB);
                Cc = cB.index + nc
              }
              hc(Bc.substring(Cc))
            }
            return bB.finalize(), Lc = bB.toHTML(), {
              language: cB,
              value: Lc,
              relevance: Qc,
              illegal: !1,
              _emitter: bB,
              _top: gB
            }
          } catch (Nc) {
            if (Nc.message && Nc.message.includes("Illegal")) return {
              language: cB,
              value: sB(Bc),
              illegal: !0,
              relevance: 0,
              _illegalBy: {
                message: Nc.message,
                index: Cc,
                context: Bc.slice(Cc - 100, Cc + 100),
                mode: Nc.mode,
                resultSoFar: Lc
              },
              _emitter: bB
            };
            if (uc) return {
              language: cB,
              value: sB(Bc),
              illegal: !1,
              relevance: 0,
              errorRaised: Nc,
              _emitter: bB,
              _top: gB
            };
            throw Nc
          }
        }

        function zB(cB, Bc) {
          Bc = Bc || qB.languages || Object.keys(Vc);
          const nc = function(cB) {
              const Bc = {
                value: sB(cB),
                illegal: !1,
                relevance: 0,
                _top: Mc,
                _emitter: new qB.__emitter(qB)
              };
              return Bc._emitter.addText(cB), Bc
            }(cB),
            Ic = Bc.filter(lc).filter(Lc).map((Bc => yB(Bc, cB, !1)));
          Ic.unshift(nc);
          const rB = Ic.sort(((cB, Bc) => {
              if (cB.relevance !== Bc.relevance) return Bc.relevance - cB.relevance;
              if (cB.language && Bc.language) {
                if (lc(cB.language).supersetOf === Bc.language) return 1;
                if (lc(Bc.language).supersetOf === cB.language) return -1
              }
              return 0
            })),
            [uc, sc] = rB,
            Pc = uc;
          return Pc.secondBest = sc, Pc
        }

        function pc(cB) {
          let Bc = null;
          const nc = function(cB) {
            let Bc = cB.className + " ";
            Bc += cB.parentNode ? cB.parentNode.className : "";
            const nc = qB.languageDetectRe.exec(Bc);
            if (nc) {
              const Bc = lc(nc[1]);
              return Bc || (Gc(sc.replace("{}", nc[1])), Gc("Falling back to no-highlight mode for this block.", cB)), Bc ? nc[1] : "no-highlight"
            }
            return Bc.split(/\s+/).find((cB => tB(cB) || lc(cB)))
          }(cB);
          if (tB(nc)) return;
          if (gB("before:highlightElement", {
              el: cB,
              language: nc
            }), cB.dataset.highlighted) return void console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.", cB);
          if (cB.children.length > 0 && (qB.ignoreUnescapedHTML || (console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."), console.warn("https://github.com/highlightjs/highlight.js/wiki/security"), console.warn("The element with unescaped HTML:"), console.warn(cB)), qB.throwUnescapedHTML)) {
            throw new uB("One of your code blocks includes unescaped HTML.", cB.innerHTML)
          }
          Bc = cB;
          const Vc = Bc.textContent,
            rB = nc ? Sc(Vc, {
              language: nc,
              ignoreIllegals: !0
            }) : zB(Vc);
          cB.innerHTML = rB.value, cB.dataset.highlighted = "yes",
            function(cB, Bc, nc) {
              const Vc = Bc && Ic[Bc] || nc;
              cB.classList.add("hljs"), cB.classList.add(`language-${Vc}`)
            }(cB, nc, rB.language), cB.result = {
              language: rB.language,
              re: rB.relevance,
              relevance: rB.relevance
            }, rB.secondBest && (cB.secondBest = {
              language: rB.secondBest.language,
              relevance: rB.secondBest.relevance
            }), gB("after:highlightElement", {
              el: cB,
              result: rB,
              text: Vc
            })
        }
        let hc = !1;

        function aB() {
          if ("loading" === document.readyState) return hc || window.addEventListener("DOMContentLoaded", (function() {
            aB()
          }), !1), void(hc = !0);
          document.querySelectorAll(qB.cssSelector).forEach(pc)
        }

        function lc(cB) {
          return cB = (cB || "").toLowerCase(), Vc[cB] || Vc[Ic[cB]]
        }

        function Yc(cB, Bc) {
          let {
            languageName: nc
          } = Bc;
          "string" === typeof cB && (cB = [cB]), cB.forEach((cB => {
            Ic[cB.toLowerCase()] = nc
          }))
        }

        function Lc(cB) {
          const Bc = lc(cB);
          return Bc && !Bc.disableAutodetect
        }

        function gB(cB, Bc) {
          const nc = cB;
          rB.forEach((function(cB) {
            cB[nc] && cB[nc](Bc)
          }))
        }
        Object.assign(cB, {
          highlight: Sc,
          highlightAuto: zB,
          highlightAll: aB,
          highlightElement: pc,
          highlightBlock: function(cB) {
            return cn("10.7.0", "highlightBlock will be removed entirely in v12.0"), cn("10.7.0", "Please use highlightElement now."), pc(cB)
          },
          configure: function(cB) {
            qB = MB(qB, cB)
          },
          initHighlighting: () => {
            aB(), cn("10.6.0", "initHighlighting() deprecated.  Use highlightAll() now.")
          },
          initHighlightingOnLoad: function() {
            aB(), cn("10.6.0", "initHighlightingOnLoad() deprecated.  Use highlightAll() now.")
          },
          registerLanguage: function(Bc, nc) {
            let Ic = null;
            try {
              Ic = nc(cB)
            } catch (rB) {
              if (Ac("Language definition for '{}' could not be registered.".replace("{}", Bc)), !uc) throw rB;
              Ac(rB), Ic = Mc
            }
            Ic.name || (Ic.name = Bc), Vc[Bc] = Ic, Ic.rawDefinition = nc.bind(null, cB), Ic.aliases && Yc(Ic.aliases, {
              languageName: Bc
            })
          },
          unregisterLanguage: function(cB) {
            delete Vc[cB];
            for (const Bc of Object.keys(Ic)) Ic[Bc] === cB && delete Ic[Bc]
          },
          listLanguages: function() {
            return Object.keys(Vc)
          },
          getLanguage: lc,
          registerAliases: Yc,
          autoDetection: Lc,
          inherit: MB,
          addPlugin: function(cB) {
            ! function(cB) {
              cB["before:highlightBlock"] && !cB["before:highlightElement"] && (cB["before:highlightElement"] = Bc => {
                cB["before:highlightBlock"](Object.assign({
                  block: Bc.el
                }, Bc))
              }), cB["after:highlightBlock"] && !cB["after:highlightElement"] && (cB["after:highlightElement"] = Bc => {
                cB["after:highlightBlock"](Object.assign({
                  block: Bc.el
                }, Bc))
              })
            }(cB), rB.push(cB)
          },
          removePlugin: function(cB) {
            const Bc = rB.indexOf(cB); - 1 !== Bc && rB.splice(Bc, 1)
          }
        }), cB.debugMode = function() {
          uc = !1
        }, cB.safeMode = function() {
          uc = !0
        }, cB.versionString = "11.11.1", cB.regex = {
          concat: mB,
          lookahead: Oc,
          either: ec,
          optional: fc,
          anyNumberOfTimes: Tc
        };
        for (const nc in wc) "object" === typeof wc[nc] && Bc(wc[nc]);
        return Object.assign(cB, wc), cB
      },
      OB = qn({});
    OB.newInstance = () => qn({}), cB.exports = OB, OB.HighlightJS = OB, OB.default = OB
  },
  3766: (cB, Bc, nc) => {
    nc.d(Bc, {
      b: () => Vc
    });
    const Vc = nc(3775)
  },
  3781: (cB, Bc, nc) => {
    nc.d(Bc, {
      d: () => Oc
    });
    const Vc = "[A-Za-z$_][0-9A-Za-z$_]*",
      Ic = ["as", "in", "of", "if", "for", "while", "finally", "var", "new", "function", "do", "return", "void", "else", "break", "catch", "instanceof", "with", "throw", "case", "default", "try", "switch", "continue", "typeof", "delete", "let", "yield", "const", "class", "debugger", "async", "await", "static", "import", "from", "export", "extends", "using"],
      rB = ["true", "false", "null", "undefined", "NaN", "Infinity"],
      uc = ["Object", "Function", "Boolean", "Symbol", "Math", "Date", "Number", "BigInt", "String", "RegExp", "Array", "Float32Array", "Float64Array", "Int8Array", "Uint8Array", "Uint8ClampedArray", "Int16Array", "Int32Array", "Uint16Array", "Uint32Array", "BigInt64Array", "BigUint64Array", "Set", "Map", "WeakSet", "WeakMap", "ArrayBuffer", "SharedArrayBuffer", "Atomics", "DataView", "JSON", "Promise", "Generator", "GeneratorFunction", "AsyncFunction", "Reflect", "Proxy", "Intl", "WebAssembly"],
      sc = ["Error", "EvalError", "InternalError", "RangeError", "ReferenceError", "SyntaxError", "TypeError", "URIError"],
      Mc = ["setInterval", "setTimeout", "clearInterval", "clearTimeout", "require", "exports", "eval", "isFinite", "isNaN", "parseFloat", "parseInt", "decodeURI", "decodeURIComponent", "encodeURI", "encodeURIComponent", "escape", "unescape"],
      Pc = ["arguments", "this", "super", "console", "window", "document", "localStorage", "sessionStorage", "module", "global"],
      qB = [].concat(Mc, uc, sc);

    function Oc(cB) {
      const Bc = cB.regex,
        nc = Vc,
        Oc = "<>",
        Tc = "</>",
        fc = {
          Ln: /<[A-Za-z0-9\\._:-]+/,
          end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
          isTrulyOpeningTag: (cB, Bc) => {
            const nc = cB[0].length + cB.index,
              Vc = cB.input[nc];
            if ("<" === Vc || "," === Vc) return void Bc.ignoreMatch();
            let Ic;
            ">" === Vc && (((cB, Bc) => {
              let {
                after: nc
              } = Bc;
              const Vc = "</" + cB[0].slice(1);
              return -1 !== cB.input.indexOf(Vc, nc)
            })(cB, {
              after: nc
            }) || Bc.ignoreMatch());
            const rB = cB.input.substring(nc);
            ((Ic = rB.match(/^\s*=/)) || (Ic = rB.match(/^\s+extends\s+/)) && 0 === Ic.index) && Bc.ignoreMatch()
          }
        },
        mB = {
          $pattern: Vc,
          keyword: Ic,
          literal: rB,
          built_in: qB,
          "variable.language": Pc
        },
        ec = "[0-9](_?[0-9])*",
        tB = `\\.(${ec})`,
        Sc = "0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",
        yB = {
          className: "number",
          variants: [{
            Ln: `(\\b(${Sc})((${tB})|\\.)?|(${tB}))[eE][+-]?(${ec})\\b`
          }, {
            Ln: `\\b(${Sc})\\b((${tB})\\b|\\.)?|(${tB})\\b`
          }, {
            Ln: "\\b(0|[1-9](_?[0-9])*)n\\b"
          }, {
            Ln: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"
          }, {
            Ln: "\\b0[bB][0-1](_?[0-1])*n?\\b"
          }, {
            Ln: "\\b0[oO][0-7](_?[0-7])*n?\\b"
          }, {
            Ln: "\\b0[0-7]+n?\\b"
          }],
          relevance: 0
        },
        zB = {
          className: "subst",
          Ln: "\\$\\{",
          end: "\\}",
          keywords: mB,
          contains: []
        },
        pc = {
          Ln: ".?html`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [cB.BACKSLASH_ESCAPE, zB],
            subLanguage: "xml"
          }
        },
        hc = {
          Ln: ".?css`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [cB.BACKSLASH_ESCAPE, zB],
            subLanguage: "css"
          }
        },
        aB = {
          Ln: ".?gql`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [cB.BACKSLASH_ESCAPE, zB],
            subLanguage: "graphql"
          }
        },
        lc = {
          className: "string",
          Ln: "`",
          end: "`",
          contains: [cB.BACKSLASH_ESCAPE, zB]
        },
        Yc = {
          className: "comment",
          variants: [cB.COMMENT(/\/\*\*(?!\/)/, "\\*/", {
            relevance: 0,
            contains: [{
              Ln: "(?=@[A-Za-z]+)",
              relevance: 0,
              contains: [{
                className: "doctag",
                Ln: "@[A-Za-z]+"
              }, {
                className: "type",
                Ln: "\\{",
                end: "\\}",
                excludeEnd: !0,
                excludeBegin: !0,
                relevance: 0
              }, {
                className: "variable",
                Ln: nc + "(?=\\s*(-)|$)",
                endsParent: !0,
                relevance: 0
              }, {
                Ln: /(?=[^\n])\s/,
                relevance: 0
              }]
            }]
          }), cB.C_BLOCK_COMMENT_MODE, cB.C_LINE_COMMENT_MODE]
        },
        Lc = [cB.APOS_STRING_MODE, cB.QUOTE_STRING_MODE, pc, hc, aB, lc, {
          match: /\$\d+/
        }, yB];
      zB.contains = Lc.concat({
        Ln: /\{/,
        end: /\}/,
        keywords: mB,
        contains: ["self"].concat(Lc)
      });
      const gB = [].concat(Yc, zB.contains),
        Uc = gB.concat([{
          Ln: /(\s*)\(/,
          end: /\)/,
          keywords: mB,
          contains: ["self"].concat(gB)
        }]),
        bB = {
          className: "params",
          Ln: /(\s*)\(/,
          end: /\)/,
          excludeBegin: !0,
          excludeEnd: !0,
          keywords: mB,
          contains: Uc
        },
        Zc = {
          variants: [{
            match: [/class/, /\s+/, nc, /\s+/, /extends/, /\s+/, Bc.concat(nc, "(", Bc.concat(/\./, nc), ")*")],
            scope: {
              1: "keyword",
              3: "title.class",
              5: "keyword",
              7: "title.class.inherited"
            }
          }, {
            match: [/class/, /\s+/, nc],
            scope: {
              1: "keyword",
              3: "title.class"
            }
          }]
        },
        Qc = {
          relevance: 0,
          match: Bc.either(/\bJSON/, /\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/, /\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/, /\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),
          className: "title.class",
          keywords: {
            _: [...uc, ...sc]
          }
        },
        Cc = {
          variants: [{
            match: [/function/, /\s+/, nc, /(?=\s*\()/]
          }, {
            match: [/function/, /\s*(?=\()/]
          }],
          className: {
            1: "keyword",
            3: "title.function"
          },
          label: "func.def",
          contains: [bB],
          illegal: /%/
        };
      const vB = {
        match: Bc.concat(/\b/, (Dc = [...Mc, "super", "import"].map((cB => `${cB}\\s*\\(`)), Bc.concat("(?!", Dc.join("|"), ")")), nc, Bc.lookahead(/\s*\(/)),
        className: "title.function",
        relevance: 0
      };
      var Dc;
      const Nc = {
          Ln: Bc.concat(/\./, Bc.lookahead(Bc.concat(nc, /(?![0-9A-Za-z$_(])/))),
          end: nc,
          excludeBegin: !0,
          keywords: "prototype",
          className: "property",
          relevance: 0
        },
        Ec = {
          match: [/get|set/, /\s+/, nc, /(?=\()/],
          className: {
            1: "keyword",
            3: "title.function"
          },
          contains: [{
            Ln: /\(\)/
          }, bB]
        },
        oc = "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" + cB.UNDERSCORE_IDENT_RE + ")\\s*=>",
        Wc = {
          match: [/const|var|let/, /\s+/, nc, /\s*/, /=\s*/, /(async\s*)?/, Bc.lookahead(oc)],
          keywords: "async",
          className: {
            1: "keyword",
            3: "title.function"
          },
          contains: [bB]
        };
      return {
        name: "JavaScript",
        aliases: ["js", "jsx", "mjs", "cjs"],
        keywords: mB,
        exports: {
          PARAMS_CONTAINS: Uc,
          CLASS_REFERENCE: Qc
        },
        illegal: /#(?![$_A-z])/,
        contains: [cB.SHEBANG({
          label: "shebang",
          binary: "node",
          relevance: 5
        }), {
          label: "use_strict",
          className: "meta",
          relevance: 10,
          Ln: /^\s*['"]use (strict|asm)['"]/
        }, cB.APOS_STRING_MODE, cB.QUOTE_STRING_MODE, pc, hc, aB, lc, Yc, {
          match: /\$\d+/
        }, yB, Qc, {
          scope: "attr",
          match: nc + Bc.lookahead(":"),
          relevance: 0
        }, Wc, {
          Ln: "(" + cB.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
          keywords: "return throw case",
          relevance: 0,
          contains: [Yc, cB.REGEXP_MODE, {
            className: "function",
            Ln: oc,
            returnBegin: !0,
            end: "\\s*=>",
            contains: [{
              className: "params",
              variants: [{
                Ln: cB.UNDERSCORE_IDENT_RE,
                relevance: 0
              }, {
                className: null,
                Ln: /\(\s*\)/,
                skip: !0
              }, {
                Ln: /(\s*)\(/,
                end: /\)/,
                excludeBegin: !0,
                excludeEnd: !0,
                keywords: mB,
                contains: Uc
              }]
            }]
          }, {
            Ln: /,/,
            relevance: 0
          }, {
            match: /\s+/,
            relevance: 0
          }, {
            variants: [{
              Ln: Oc,
              end: Tc
            }, {
              match: /<[A-Za-z0-9\\._:-]+\s*\/>/
            }, {
              Ln: fc.Ln,
              "on:begin": fc.isTrulyOpeningTag,
              end: fc.end
            }],
            subLanguage: "xml",
            contains: [{
              Ln: fc.Ln,
              end: fc.end,
              skip: !0,
              contains: ["self"]
            }]
          }]
        }, Cc, {
          beginKeywords: "while if switch catch for"
        }, {
          Ln: "\\b(?!function)" + cB.UNDERSCORE_IDENT_RE + "\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
          returnBegin: !0,
          label: "func.def",
          contains: [bB, cB.inherit(cB.TITLE_MODE, {
            Ln: nc,
            className: "title.function"
          })]
        }, {
          match: /\.\.\./,
          relevance: 0
        }, Nc, {
          match: "\\$" + nc,
          relevance: 0
        }, {
          match: [/\bconstructor(?=\s*\()/],
          className: {
            1: "title.function"
          },
          contains: [bB]
        }, vB, {
          relevance: 0,
          match: /\b[A-Z][A-Z_0-9]+\b/,
          className: "variable.constant"
        }, Zc, Ec, {
          match: /\$[(.]/
        }]
      }
    }
  },
  3783: (cB, Bc, nc) => {
    nc.d(Bc, {
      e: () => Tc
    });
    const Vc = "[A-Za-z$_][0-9A-Za-z$_]*",
      Ic = ["as", "in", "of", "if", "for", "while", "finally", "var", "new", "function", "do", "return", "void", "else", "break", "catch", "instanceof", "with", "throw", "case", "default", "try", "switch", "continue", "typeof", "delete", "let", "yield", "const", "class", "debugger", "async", "await", "static", "import", "from", "export", "extends", "using"],
      rB = ["true", "false", "null", "undefined", "NaN", "Infinity"],
      uc = ["Object", "Function", "Boolean", "Symbol", "Math", "Date", "Number", "BigInt", "String", "RegExp", "Array", "Float32Array", "Float64Array", "Int8Array", "Uint8Array", "Uint8ClampedArray", "Int16Array", "Int32Array", "Uint16Array", "Uint32Array", "BigInt64Array", "BigUint64Array", "Set", "Map", "WeakSet", "WeakMap", "ArrayBuffer", "SharedArrayBuffer", "Atomics", "DataView", "JSON", "Promise", "Generator", "GeneratorFunction", "AsyncFunction", "Reflect", "Proxy", "Intl", "WebAssembly"],
      sc = ["Error", "EvalError", "InternalError", "RangeError", "ReferenceError", "SyntaxError", "TypeError", "URIError"],
      Mc = ["setInterval", "setTimeout", "clearInterval", "clearTimeout", "require", "exports", "eval", "isFinite", "isNaN", "parseFloat", "parseInt", "decodeURI", "decodeURIComponent", "encodeURI", "encodeURIComponent", "escape", "unescape"],
      Pc = ["arguments", "this", "super", "console", "window", "document", "localStorage", "sessionStorage", "module", "global"],
      qB = [].concat(Mc, uc, sc);

    function Oc(cB) {
      const Bc = cB.regex,
        nc = Vc,
        Oc = "<>",
        Tc = "</>",
        fc = {
          Ln: /<[A-Za-z0-9\\._:-]+/,
          end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
          isTrulyOpeningTag: (cB, Bc) => {
            const nc = cB[0].length + cB.index,
              Vc = cB.input[nc];
            if ("<" === Vc || "," === Vc) return void Bc.ignoreMatch();
            let Ic;
            ">" === Vc && (((cB, Bc) => {
              let {
                after: nc
              } = Bc;
              const Vc = "</" + cB[0].slice(1);
              return -1 !== cB.input.indexOf(Vc, nc)
            })(cB, {
              after: nc
            }) || Bc.ignoreMatch());
            const rB = cB.input.substring(nc);
            ((Ic = rB.match(/^\s*=/)) || (Ic = rB.match(/^\s+extends\s+/)) && 0 === Ic.index) && Bc.ignoreMatch()
          }
        },
        mB = {
          $pattern: Vc,
          keyword: Ic,
          literal: rB,
          built_in: qB,
          "variable.language": Pc
        },
        ec = "[0-9](_?[0-9])*",
        tB = `\\.(${ec})`,
        Sc = "0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",
        yB = {
          className: "number",
          variants: [{
            Ln: `(\\b(${Sc})((${tB})|\\.)?|(${tB}))[eE][+-]?(${ec})\\b`
          }, {
            Ln: `\\b(${Sc})\\b((${tB})\\b|\\.)?|(${tB})\\b`
          }, {
            Ln: "\\b(0|[1-9](_?[0-9])*)n\\b"
          }, {
            Ln: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"
          }, {
            Ln: "\\b0[bB][0-1](_?[0-1])*n?\\b"
          }, {
            Ln: "\\b0[oO][0-7](_?[0-7])*n?\\b"
          }, {
            Ln: "\\b0[0-7]+n?\\b"
          }],
          relevance: 0
        },
        zB = {
          className: "subst",
          Ln: "\\$\\{",
          end: "\\}",
          keywords: mB,
          contains: []
        },
        pc = {
          Ln: ".?html`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [cB.BACKSLASH_ESCAPE, zB],
            subLanguage: "xml"
          }
        },
        hc = {
          Ln: ".?css`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [cB.BACKSLASH_ESCAPE, zB],
            subLanguage: "css"
          }
        },
        aB = {
          Ln: ".?gql`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [cB.BACKSLASH_ESCAPE, zB],
            subLanguage: "graphql"
          }
        },
        lc = {
          className: "string",
          Ln: "`",
          end: "`",
          contains: [cB.BACKSLASH_ESCAPE, zB]
        },
        Yc = {
          className: "comment",
          variants: [cB.COMMENT(/\/\*\*(?!\/)/, "\\*/", {
            relevance: 0,
            contains: [{
              Ln: "(?=@[A-Za-z]+)",
              relevance: 0,
              contains: [{
                className: "doctag",
                Ln: "@[A-Za-z]+"
              }, {
                className: "type",
                Ln: "\\{",
                end: "\\}",
                excludeEnd: !0,
                excludeBegin: !0,
                relevance: 0
              }, {
                className: "variable",
                Ln: nc + "(?=\\s*(-)|$)",
                endsParent: !0,
                relevance: 0
              }, {
                Ln: /(?=[^\n])\s/,
                relevance: 0
              }]
            }]
          }), cB.C_BLOCK_COMMENT_MODE, cB.C_LINE_COMMENT_MODE]
        },
        Lc = [cB.APOS_STRING_MODE, cB.QUOTE_STRING_MODE, pc, hc, aB, lc, {
          match: /\$\d+/
        }, yB];
      zB.contains = Lc.concat({
        Ln: /\{/,
        end: /\}/,
        keywords: mB,
        contains: ["self"].concat(Lc)
      });
      const gB = [].concat(Yc, zB.contains),
        Uc = gB.concat([{
          Ln: /(\s*)\(/,
          end: /\)/,
          keywords: mB,
          contains: ["self"].concat(gB)
        }]),
        bB = {
          className: "params",
          Ln: /(\s*)\(/,
          end: /\)/,
          excludeBegin: !0,
          excludeEnd: !0,
          keywords: mB,
          contains: Uc
        },
        Zc = {
          variants: [{
            match: [/class/, /\s+/, nc, /\s+/, /extends/, /\s+/, Bc.concat(nc, "(", Bc.concat(/\./, nc), ")*")],
            scope: {
              1: "keyword",
              3: "title.class",
              5: "keyword",
              7: "title.class.inherited"
            }
          }, {
            match: [/class/, /\s+/, nc],
            scope: {
              1: "keyword",
              3: "title.class"
            }
          }]
        },
        Qc = {
          relevance: 0,
          match: Bc.either(/\bJSON/, /\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/, /\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/, /\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),
          className: "title.class",
          keywords: {
            _: [...uc, ...sc]
          }
        },
        Cc = {
          variants: [{
            match: [/function/, /\s+/, nc, /(?=\s*\()/]
          }, {
            match: [/function/, /\s*(?=\()/]
          }],
          className: {
            1: "keyword",
            3: "title.function"
          },
          label: "func.def",
          contains: [bB],
          illegal: /%/
        };
      const vB = {
        match: Bc.concat(/\b/, (Dc = [...Mc, "super", "import"].map((cB => `${cB}\\s*\\(`)), Bc.concat("(?!", Dc.join("|"), ")")), nc, Bc.lookahead(/\s*\(/)),
        className: "title.function",
        relevance: 0
      };
      var Dc;
      const Nc = {
          Ln: Bc.concat(/\./, Bc.lookahead(Bc.concat(nc, /(?![0-9A-Za-z$_(])/))),
          end: nc,
          excludeBegin: !0,
          keywords: "prototype",
          className: "property",
          relevance: 0
        },
        Ec = {
          match: [/get|set/, /\s+/, nc, /(?=\()/],
          className: {
            1: "keyword",
            3: "title.function"
          },
          contains: [{
            Ln: /\(\)/
          }, bB]
        },
        oc = "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" + cB.UNDERSCORE_IDENT_RE + ")\\s*=>",
        Wc = {
          match: [/const|var|let/, /\s+/, nc, /\s*/, /=\s*/, /(async\s*)?/, Bc.lookahead(oc)],
          keywords: "async",
          className: {
            1: "keyword",
            3: "title.function"
          },
          contains: [bB]
        };
      return {
        name: "JavaScript",
        aliases: ["js", "jsx", "mjs", "cjs"],
        keywords: mB,
        exports: {
          PARAMS_CONTAINS: Uc,
          CLASS_REFERENCE: Qc
        },
        illegal: /#(?![$_A-z])/,
        contains: [cB.SHEBANG({
          label: "shebang",
          binary: "node",
          relevance: 5
        }), {
          label: "use_strict",
          className: "meta",
          relevance: 10,
          Ln: /^\s*['"]use (strict|asm)['"]/
        }, cB.APOS_STRING_MODE, cB.QUOTE_STRING_MODE, pc, hc, aB, lc, Yc, {
          match: /\$\d+/
        }, yB, Qc, {
          scope: "attr",
          match: nc + Bc.lookahead(":"),
          relevance: 0
        }, Wc, {
          Ln: "(" + cB.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
          keywords: "return throw case",
          relevance: 0,
          contains: [Yc, cB.REGEXP_MODE, {
            className: "function",
            Ln: oc,
            returnBegin: !0,
            end: "\\s*=>",
            contains: [{
              className: "params",
              variants: [{
                Ln: cB.UNDERSCORE_IDENT_RE,
                relevance: 0
              }, {
                className: null,
                Ln: /\(\s*\)/,
                skip: !0
              }, {
                Ln: /(\s*)\(/,
                end: /\)/,
                excludeBegin: !0,
                excludeEnd: !0,
                keywords: mB,
                contains: Uc
              }]
            }]
          }, {
            Ln: /,/,
            relevance: 0
          }, {
            match: /\s+/,
            relevance: 0
          }, {
            variants: [{
              Ln: Oc,
              end: Tc
            }, {
              match: /<[A-Za-z0-9\\._:-]+\s*\/>/
            }, {
              Ln: fc.Ln,
              "on:begin": fc.isTrulyOpeningTag,
              end: fc.end
            }],
            subLanguage: "xml",
            contains: [{
              Ln: fc.Ln,
              end: fc.end,
              skip: !0,
              contains: ["self"]
            }]
          }]
        }, Cc, {
          beginKeywords: "while if switch catch for"
        }, {
          Ln: "\\b(?!function)" + cB.UNDERSCORE_IDENT_RE + "\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
          returnBegin: !0,
          label: "func.def",
          contains: [bB, cB.inherit(cB.TITLE_MODE, {
            Ln: nc,
            className: "title.function"
          })]
        }, {
          match: /\.\.\./,
          relevance: 0
        }, Nc, {
          match: "\\$" + nc,
          relevance: 0
        }, {
          match: [/\bconstructor(?=\s*\()/],
          className: {
            1: "title.function"
          },
          contains: [bB]
        }, vB, {
          relevance: 0,
          match: /\b[A-Z][A-Z_0-9]+\b/,
          className: "variable.constant"
        }, Zc, Ec, {
          match: /\$[(.]/
        }]
      }
    }

    function Tc(cB) {
      const Bc = cB.regex,
        nc = Oc(cB),
        uc = Vc,
        sc = ["any", "void", "number", "boolean", "string", "object", "never", "symbol", "bigint", "unknown"],
        Mc = {
          Ln: [/namespace/, /\s+/, cB.IDENT_RE],
          beginScope: {
            1: "keyword",
            3: "title.class"
          }
        },
        Tc = {
          beginKeywords: "interface",
          end: /\{/,
          excludeEnd: !0,
          keywords: {
            keyword: "interface extends",
            built_in: sc
          },
          contains: [nc.exports.CLASS_REFERENCE]
        },
        fc = {
          $pattern: Vc,
          keyword: Ic.concat(["type", "interface", "public", "private", "protected", "implements", "declare", "abstract", "readonly", "enum", "override", "satisfies"]),
          literal: rB,
          built_in: qB.concat(sc),
          "variable.language": Pc
        },
        mB = {
          className: "meta",
          Ln: "@" + uc
        },
        ec = (cB, Bc, nc) => {
          const Vc = cB.contains.findIndex((cB => cB.label === Bc));
          if (-1 === Vc) throw new Error("can not find mode to replace");
          cB.contains.splice(Vc, 1, nc)
        };
      Object.assign(nc.keywords, fc), nc.exports.PARAMS_CONTAINS.push(mB);
      const tB = nc.contains.find((cB => "attr" === cB.scope)),
        Sc = Object.assign({}, tB, {
          match: Bc.concat(uc, Bc.lookahead(/\s*\?:/))
        });
      nc.exports.PARAMS_CONTAINS.push([nc.exports.CLASS_REFERENCE, tB, Sc]), nc.contains = nc.contains.concat([mB, Mc, Tc, Sc]), ec(nc, "shebang", cB.SHEBANG()), ec(nc, "use_strict", {
        className: "meta",
        relevance: 10,
        Ln: /^\s*['"]use strict['"]/
      });
      return nc.contains.find((cB => "func.def" === cB.label)).relevance = 0, Object.assign(nc, {
        name: "TypeScript",
        aliases: ["ts", "tsx", "mts", "cts"]
      }), nc
    }
  }
};
Object.freeze(modules);
for (const cB in modules) Object.freeze(modules[cB]);