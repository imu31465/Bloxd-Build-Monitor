export const id = 95;
export const ids = [95];
export const modules = {
  5547: rr => {
    function Sr(rr) {
      return rr instanceof Map ? rr.clear = rr.delete = rr.set = function() {
        throw new Error("map is read-only")
      } : rr instanceof Set && (rr.add = rr.clear = rr.delete = function() {
        throw new Error("set is read-only")
      }), Object.freeze(rr), Object.getOwnPropertyNames(rr).forEach((Qr => {
        const Zr = rr[Qr],
          Wr = typeof Zr;
        "object" !== Wr && "function" !== Wr || Object.isFrozen(Zr) || Sr(Zr)
      })), rr
    }
    class Qr {
      constructor(rr) {
        void 0 === rr.data && (rr.data = {}), this.data = rr.data, this.isMatchIgnored = !1
      }
      ignoreMatch() {
        this.isMatchIgnored = !0
      }
    }

    function Zr(rr) {
      return rr.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;")
    }

    function Wr(rr) {
      const Sr = Object.create(null);
      for (const ar in rr) Sr[ar] = rr[ar];
      for (var Qr = arguments.length, Zr = new Array(Qr > 1 ? Qr - 1 : 0), Wr = 1; Wr < Qr; Wr++) Zr[Wr - 1] = arguments[Wr];
      return Zr.forEach((function(rr) {
        for (const Qr in rr) Sr[Qr] = rr[Qr]
      })), Sr
    }
    const ar = rr => !!rr.scope;
    class jr {
      constructor(rr, Sr) {
        this.buffer = "", this.classPrefix = Sr.classPrefix, rr.walk(this)
      }
      addText(rr) {
        this.buffer += Zr(rr)
      }
      openNode(rr) {
        if (!ar(rr)) return;
        const Sr = ((rr, Sr) => {
          let {
            prefix: Qr
          } = Sr;
          if (rr.startsWith("language:")) return rr.replace("language:", "language-");
          if (rr.includes(".")) {
            const Sr = rr.split(".");
            return [`${Qr}${Sr.shift()}`, ...Sr.map(((rr, Sr) => `${rr}${"_".repeat(Sr+1)}`))].join(" ")
          }
          return `${Qr}${rr}`
        })(rr.scope, {
          prefix: this.classPrefix
        });
        this.span(Sr)
      }
      closeNode(rr) {
        ar(rr) && (this.buffer += "</span>")
      }
      value() {
        return this.buffer
      }
      span(rr) {
        this.buffer += `<span class="${rr}">`
      }
    }
    const Ir = function() {
      let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      const Sr = {
        children: []
      };
      return Object.assign(Sr, rr), Sr
    };
    class fr {
      constructor() {
        this.bY = Ir(), this.stack = [this.bY]
      }
      get top() {
        return this.stack[this.stack.length - 1]
      }
      get root() {
        return this.bY
      }
      add(rr) {
        this.top.children.push(rr)
      }
      openNode(rr) {
        const Sr = Ir({
          scope: rr
        });
        this.add(Sr), this.stack.push(Sr)
      }
      closeNode() {
        if (this.stack.length > 1) return this.stack.pop()
      }
      closeAllNodes() {
        for (; this.closeNode(););
      }
      toJSON() {
        return JSON.stringify(this.bY, null, 4)
      }
      walk(rr) {
        return this.constructor._walk(rr, this.bY)
      }
      static _walk(rr, Sr) {
        return "string" === typeof Sr ? rr.addText(Sr) : Sr.children && (rr.openNode(Sr), Sr.children.forEach((Sr => this._walk(rr, Sr))), rr.closeNode(Sr)), rr
      }
      static _collapse(rr) {
        "string" !== typeof rr && rr.children && (rr.children.every((rr => "string" === typeof rr)) ? rr.children = [rr.children.join("")] : rr.children.forEach((rr => {
          fr._collapse(rr)
        })))
      }
    }
    class Er extends fr {
      constructor(rr) {
        super(), this.options = rr
      }
      addText(rr) {
        "" !== rr && this.add(rr)
      }
      startScope(rr) {
        this.openNode(rr)
      }
      endScope() {
        this.closeNode()
      }
      __addSublanguage(rr, Sr) {
        const Qr = rr.root;
        Sr && (Qr.scope = `language:${Sr}`), this.add(Qr)
      }
      toHTML() {
        return new jr(this, this.options).value()
      }
      finalize() {
        return this.closeAllNodes(), !0
      }
    }

    function pr(rr) {
      return rr ? "string" === typeof rr ? rr : rr.source : null
    }

    function xr(rr) {
      return Ur("(?=", rr, ")")
    }

    function mr(rr) {
      return Ur("(?:", rr, ")*")
    }

    function Nr(rr) {
      return Ur("(?:", rr, ")?")
    }

    function Ur() {
      for (var rr = arguments.length, Sr = new Array(rr), Qr = 0; Qr < rr; Qr++) Sr[Qr] = arguments[Qr];
      return Sr.map((rr => pr(rr))).join("")
    }

    function tr() {
      for (var rr = arguments.length, Sr = new Array(rr), Qr = 0; Qr < rr; Qr++) Sr[Qr] = arguments[Qr];
      const Zr = function(rr) {
        const Sr = rr[rr.length - 1];
        return "object" === typeof Sr && Sr.constructor === Object ? (rr.splice(rr.length - 1, 1), Sr) : {}
      }(Sr);
      return "(" + (Zr.capture ? "" : "?:") + Sr.map((rr => pr(rr))).join("|") + ")"
    }

    function hr(rr) {
      return new RegExp(rr.toString() + "|").exec("").length - 1
    }
    const zr = /\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;

    function Yr(rr, Sr) {
      let {
        joinWith: Qr
      } = Sr, Zr = 0;
      return rr.map((rr => {
        Zr += 1;
        const Sr = Zr;
        let Qr = pr(rr),
          Wr = "";
        for (; Qr.length > 0;) {
          const rr = zr.exec(Qr);
          if (!rr) {
            Wr += Qr;
            break
          }
          Wr += Qr.substring(0, rr.index), Qr = Qr.substring(rr.index + rr[0].length), "\\" === rr[0][0] && rr[1] ? Wr += "\\" + String(Number(rr[1]) + Sr) : (Wr += rr[0], "(" === rr[0] && Zr++)
        }
        return Wr
      })).map((rr => `(${rr})`)).join(Qr)
    }
    const nr = "[a-zA-Z]\\w*",
      er = "[a-zA-Z_]\\w*",
      Kr = "\\b\\d+(\\.\\d+)?",
      yr = "(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",
      Br = "\\b(0b[01]+)",
      Tr = {
        Yx: "\\\\[\\s\\S]",
        relevance: 0
      },
      vr = {
        scope: "string",
        Yx: "'",
        end: "'",
        illegal: "\\n",
        contains: [Tr]
      },
      Or = {
        scope: "string",
        Yx: '"',
        end: '"',
        illegal: "\\n",
        contains: [Tr]
      },
      Lr = function(rr, Sr) {
        const Qr = Wr({
          scope: "comment",
          Yx: rr,
          end: Sr,
          contains: []
        }, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {});
        Qr.contains.push({
          scope: "doctag",
          Yx: "[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",
          end: /(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,
          excludeBegin: !0,
          relevance: 0
        });
        const Zr = tr("I", "a", "is", "so", "us", "to", "at", "if", "in", "it", "on", /[A-Za-z]+['](d|ve|re|ll|t|s|n)/, /[A-Za-z]+[-][a-z]+/, /[A-Za-z][a-z]{2,}/);
        return Qr.contains.push({
          Yx: Ur(/[ ]+/, "(", Zr, /[.]?[:]?([.][ ]|[ ])/, "){3}")
        }), Qr
      },
      lr = Lr("//", "$"),
      Xr = Lr("/\\*", "\\*/"),
      Pr = Lr("#", "$"),
      Hr = {
        scope: "number",
        Yx: Kr,
        relevance: 0
      },
      qr = {
        scope: "number",
        Yx: yr,
        relevance: 0
      },
      Rr = {
        scope: "number",
        Yx: Br,
        relevance: 0
      },
      gr = {
        scope: "regexp",
        Yx: /\/(?=[^/\n]*\/)/,
        end: /\/[gimuy]*/,
        contains: [Tr, {
          Yx: /\[/,
          end: /\]/,
          relevance: 0,
          contains: [Tr]
        }]
      },
      Cr = {
        scope: "title",
        Yx: nr,
        relevance: 0
      },
      Mr = {
        scope: "title",
        Yx: er,
        relevance: 0
      },
      Gr = {
        Yx: "\\.\\s*" + er,
        relevance: 0
      };
    var kr = Object.freeze({
      __proto__: null,
      APOS_STRING_MODE: vr,
      BACKSLASH_ESCAPE: Tr,
      BINARY_NUMBER_MODE: Rr,
      BINARY_NUMBER_RE: Br,
      COMMENT: Lr,
      C_BLOCK_COMMENT_MODE: Xr,
      C_LINE_COMMENT_MODE: lr,
      C_NUMBER_MODE: qr,
      C_NUMBER_RE: yr,
      END_SAME_AS_BEGIN: function(rr) {
        return Object.assign(rr, {
          "on:begin": (rr, Sr) => {
            Sr.data._beginMatch = rr[1]
          },
          "on:end": (rr, Sr) => {
            Sr.data._beginMatch !== rr[1] && Sr.ignoreMatch()
          }
        })
      },
      HASH_COMMENT_MODE: Pr,
      IDENT_RE: nr,
      MATCH_NOTHING_RE: /\b\B/,
      METHOD_GUARD: Gr,
      NUMBER_MODE: Hr,
      NUMBER_RE: Kr,
      PHRASAL_WORDS_MODE: {
        Yx: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/
      },
      QUOTE_STRING_MODE: Or,
      REGEXP_MODE: gr,
      RE_STARTERS_RE: "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",
      SHEBANG: function() {
        let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        const Sr = /^#![ ]*\//;
        return rr.binary && (rr.Yx = Ur(Sr, /.*\b/, rr.binary, /\b.*/)), Wr({
          scope: "meta",
          Yx: Sr,
          end: /$/,
          relevance: 0,
          "on:begin": (rr, Sr) => {
            0 !== rr.index && Sr.ignoreMatch()
          }
        }, rr)
      },
      TITLE_MODE: Cr,
      UNDERSCORE_IDENT_RE: er,
      UNDERSCORE_TITLE_MODE: Mr
    });

    function Ar(rr, Sr) {
      "." === rr.input[rr.index - 1] && Sr.ignoreMatch()
    }

    function Vr(rr, Sr) {
      void 0 !== rr.className && (rr.scope = rr.className, delete rr.className)
    }

    function ir(rr, Sr) {
      Sr && rr.beginKeywords && (rr.Yx = "\\b(" + rr.beginKeywords.split(" ").join("|") + ")(?!\\.)(?=\\b|\\s)", rr.__beforeBegin = Ar, rr.keywords = rr.keywords || rr.beginKeywords, delete rr.beginKeywords, void 0 === rr.relevance && (rr.relevance = 0))
    }

    function wr(rr, Sr) {
      Array.isArray(rr.illegal) && (rr.illegal = tr(...rr.illegal))
    }

    function cr(rr, Sr) {
      if (rr.match) {
        if (rr.Yx || rr.end) throw new Error("begin & end are not supported with match");
        rr.Yx = rr.match, delete rr.match
      }
    }

    function Fr(rr, Sr) {
      void 0 === rr.relevance && (rr.relevance = 1)
    }
    const or = (rr, Sr) => {
        if (!rr.beforeMatch) return;
        if (rr.starts) throw new Error("beforeMatch cannot be used with starts");
        const Qr = Object.assign({}, rr);
        Object.keys(rr).forEach((Sr => {
          delete rr[Sr]
        })), rr.keywords = Qr.keywords, rr.Yx = Ur(Qr.beforeMatch, xr(Qr.Yx)), rr.starts = {
          relevance: 0,
          contains: [Object.assign(Qr, {
            endsParent: !0
          })]
        }, rr.relevance = 0, delete Qr.beforeMatch
      },
      br = ["of", "and", "for", "in", "not", "or", "if", "then", "parent", "list", "value"];

    function Jr(rr, Sr) {
      let Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "keyword";
      const Zr = Object.create(null);
      return "string" === typeof rr ? Wr(Qr, rr.split(" ")) : Array.isArray(rr) ? Wr(Qr, rr) : Object.keys(rr).forEach((function(Qr) {
        Object.assign(Zr, Jr(rr[Qr], Sr, Qr))
      })), Zr;

      function Wr(rr, Qr) {
        Sr && (Qr = Qr.map((rr => rr.toLowerCase()))), Qr.forEach((function(Sr) {
          const Qr = Sr.split("|");
          Zr[Qr[0]] = [rr, Dr(Qr[0], Qr[1])]
        }))
      }
    }

    function Dr(rr, Sr) {
      return Sr ? Number(Sr) : function(rr) {
        return br.includes(rr.toLowerCase())
      }(rr) ? 0 : 1
    }
    const dr = {},
      sr = rr => {
        console.error(rr)
      },
      ur = function(rr) {
        for (var Sr = arguments.length, Qr = new Array(Sr > 1 ? Sr - 1 : 0), Zr = 1; Zr < Sr; Zr++) Qr[Zr - 1] = arguments[Zr];
        console.log(`WARN: ${rr}`, ...Qr)
      },
      rS = (rr, Sr) => {
        dr[`${rr}/${Sr}`] || (console.log(`Deprecated as of ${rr}. ${Sr}`), dr[`${rr}/${Sr}`] = !0)
      },
      SS = new Error;

    function QS(rr, Sr, Qr) {
      let {
        key: Zr
      } = Qr, Wr = 0;
      const ar = rr[Zr],
        jr = {},
        Ir = {};
      for (let fr = 1; fr <= Sr.length; fr++) Ir[fr + Wr] = ar[fr], jr[fr + Wr] = !0, Wr += hr(Sr[fr - 1]);
      rr[Zr] = Ir, rr[Zr]._emit = jr, rr[Zr]._multi = !0
    }

    function ZS(rr) {
      ! function(rr) {
        rr.scope && "object" === typeof rr.scope && null !== rr.scope && (rr.beginScope = rr.scope, delete rr.scope)
      }(rr), "string" === typeof rr.beginScope && (rr.beginScope = {
          _wrap: rr.beginScope
        }), "string" === typeof rr.endScope && (rr.endScope = {
          _wrap: rr.endScope
        }),
        function(rr) {
          if (Array.isArray(rr.Yx)) {
            if (rr.skip || rr.excludeBegin || rr.returnBegin) throw sr("skip, excludeBegin, returnBegin not compatible with beginScope: {}"), SS;
            if ("object" !== typeof rr.beginScope || null === rr.beginScope) throw sr("beginScope must be object"), SS;
            QS(rr, rr.Yx, {
              key: "beginScope"
            }), rr.Yx = Yr(rr.Yx, {
              joinWith: ""
            })
          }
        }(rr),
        function(rr) {
          if (Array.isArray(rr.end)) {
            if (rr.skip || rr.excludeEnd || rr.returnEnd) throw sr("skip, excludeEnd, returnEnd not compatible with endScope: {}"), SS;
            if ("object" !== typeof rr.endScope || null === rr.endScope) throw sr("endScope must be object"), SS;
            QS(rr, rr.end, {
              key: "endScope"
            }), rr.end = Yr(rr.end, {
              joinWith: ""
            })
          }
        }(rr)
    }

    function WS(rr) {
      function Sr(Sr, Qr) {
        return new RegExp(pr(Sr), "m" + (rr.case_insensitive ? "i" : "") + (rr.unicodeRegex ? "u" : "") + (Qr ? "g" : ""))
      }
      class Qr {
        constructor() {
          this.matchIndexes = {}, this.regexes = [], this.matchAt = 1, this.position = 0
        }
        addRule(rr, Sr) {
          Sr.position = this.position++, this.matchIndexes[this.matchAt] = Sr, this.regexes.push([Sr, rr]), this.matchAt += hr(rr) + 1
        }
        compile() {
          0 === this.regexes.length && (this.exec = () => null);
          const rr = this.regexes.map((rr => rr[1]));
          this.matcherRe = Sr(Yr(rr, {
            joinWith: "|"
          }), !0), this.lastIndex = 0
        }
        exec(rr) {
          this.matcherRe.lastIndex = this.lastIndex;
          const Sr = this.matcherRe.exec(rr);
          if (!Sr) return null;
          const Qr = Sr.findIndex(((rr, Sr) => Sr > 0 && void 0 !== rr)),
            Zr = this.matchIndexes[Qr];
          return Sr.splice(0, Qr), Object.assign(Sr, Zr)
        }
      }
      class Zr {
        constructor() {
          this.rules = [], this.multiRegexes = [], this.count = 0, this.lastIndex = 0, this.regexIndex = 0
        }
        getMatcher(rr) {
          if (this.multiRegexes[rr]) return this.multiRegexes[rr];
          const Sr = new Qr;
          return this.rules.slice(rr).forEach((rr => {
            let [Qr, Zr] = rr;
            return Sr.addRule(Qr, Zr)
          })), Sr.compile(), this.multiRegexes[rr] = Sr, Sr
        }
        resumingScanAtSamePosition() {
          return 0 !== this.regexIndex
        }
        considerAll() {
          this.regexIndex = 0
        }
        addRule(rr, Sr) {
          this.rules.push([rr, Sr]), "Yx" === Sr.type && this.count++
        }
        exec(rr) {
          const Sr = this.getMatcher(this.regexIndex);
          Sr.lastIndex = this.lastIndex;
          let Qr = Sr.exec(rr);
          if (this.resumingScanAtSamePosition())
            if (Qr && Qr.index === this.lastIndex);
            else {
              const Sr = this.getMatcher(0);
              Sr.lastIndex = this.lastIndex + 1, Qr = Sr.exec(rr)
            } return Qr && (this.regexIndex += Qr.position + 1, this.regexIndex === this.count && this.considerAll()), Qr
        }
      }
      if (rr.compilerExtensions || (rr.compilerExtensions = []), rr.contains && rr.contains.includes("self")) throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");
      return rr.classNameAliases = Wr(rr.classNameAliases || {}),
        function Qr(ar, jr) {
          const Ir = ar;
          if (ar.isCompiled) return Ir;
          [Vr, cr, ZS, or].forEach((rr => rr(ar, jr))), rr.compilerExtensions.forEach((rr => rr(ar, jr))), ar.__beforeBegin = null, [ir, wr, Fr].forEach((rr => rr(ar, jr))), ar.isCompiled = !0;
          let fr = null;
          return "object" === typeof ar.keywords && ar.keywords.$pattern && (ar.keywords = Object.assign({}, ar.keywords), fr = ar.keywords.$pattern, delete ar.keywords.$pattern), fr = fr || /\w+/, ar.keywords && (ar.keywords = Jr(ar.keywords, rr.case_insensitive)), Ir.keywordPatternRe = Sr(fr, !0), jr && (ar.Yx || (ar.Yx = /\B|\b/), Ir.beginRe = Sr(Ir.Yx), ar.end || ar.endsWithParent || (ar.end = /\B|\b/), ar.end && (Ir.endRe = Sr(Ir.end)), Ir.terminatorEnd = pr(Ir.end) || "", ar.endsWithParent && jr.terminatorEnd && (Ir.terminatorEnd += (ar.end ? "|" : "") + jr.terminatorEnd)), ar.illegal && (Ir.illegalRe = Sr(ar.illegal)), ar.contains || (ar.contains = []), ar.contains = [].concat(...ar.contains.map((function(rr) {
            return function(rr) {
              rr.variants && !rr.cachedVariants && (rr.cachedVariants = rr.variants.map((function(Sr) {
                return Wr(rr, {
                  variants: null
                }, Sr)
              })));
              if (rr.cachedVariants) return rr.cachedVariants;
              if (aS(rr)) return Wr(rr, {
                starts: rr.starts ? Wr(rr.starts) : null
              });
              if (Object.isFrozen(rr)) return Wr(rr);
              return rr
            }("self" === rr ? ar : rr)
          }))), ar.contains.forEach((function(rr) {
            Qr(rr, Ir)
          })), ar.starts && Qr(ar.starts, jr), Ir.matcher = function(rr) {
            const Sr = new Zr;
            return rr.contains.forEach((rr => Sr.addRule(rr.Yx, {
              rule: rr,
              type: "Yx"
            }))), rr.terminatorEnd && Sr.addRule(rr.terminatorEnd, {
              type: "end"
            }), rr.illegal && Sr.addRule(rr.illegal, {
              type: "illegal"
            }), Sr
          }(Ir), Ir
        }(rr)
    }

    function aS(rr) {
      return !!rr && (rr.endsWithParent || aS(rr.starts))
    }
    class jS extends Error {
      constructor(rr, Sr) {
        super(rr), this.name = "HTMLInjectionError", this.html = Sr
      }
    }
    const IS = Zr,
      fS = Wr,
      ES = Symbol("nomatch"),
      pS = function(rr) {
        const Zr = Object.create(null),
          Wr = Object.create(null),
          ar = [];
        let jr = !0;
        const Ir = "Could not find the language '{}', did you forget to load/include a language module?",
          fr = {
            disableAutodetect: !0,
            name: "Plain text",
            contains: []
          };
        let pr = {
          ignoreUnescapedHTML: !1,
          throwUnescapedHTML: !1,
          noHighlightRe: /^(no-?highlight)$/i,
          languageDetectRe: /\blang(?:uage)?-([\w-]+)\b/i,
          classPrefix: "hljs-",
          cssSelector: "pre code",
          languages: null,
          __emitter: Er
        };

        function hr(rr) {
          return pr.noHighlightRe.test(rr)
        }

        function zr(rr, Sr, Qr) {
          let Zr = "",
            Wr = "";
          "object" === typeof Sr ? (Zr = rr, Qr = Sr.ignoreIllegals, Wr = Sr.language) : (rS("10.7.0", "highlight(lang, code, ...args) has been deprecated."), rS("10.7.0", "Please use highlight(code, options) instead.\nhttps://github.com/highlightjs/highlight.js/issues/2277"), Wr = rr, Zr = Sr), void 0 === Qr && (Qr = !0);
          const ar = {
            code: Zr,
            language: Wr
          };
          Or("before:highlight", ar);
          const jr = ar.result ? ar.result : Yr(ar.language, ar.code, Qr);
          return jr.code = ar.code, Or("after:highlight", jr), jr
        }

        function Yr(rr, Sr, Wr, ar) {
          const fr = Object.create(null);

          function Er() {
            if (!Or.keywords) return void lr.addText(Xr);
            let rr = 0;
            Or.keywordPatternRe.lastIndex = 0;
            let Sr = Or.keywordPatternRe.exec(Xr),
              Qr = "";
            for (; Sr;) {
              Qr += Xr.substring(rr, Sr.index);
              const Wr = yr.case_insensitive ? Sr[0].toLowerCase() : Sr[0],
                ar = (Zr = Wr, Or.keywords[Zr]);
              if (ar) {
                const [rr, Zr] = ar;
                if (lr.addText(Qr), Qr = "", fr[Wr] = (fr[Wr] || 0) + 1, fr[Wr] <= 7 && (Pr += Zr), rr.startsWith("_")) Qr += Sr[0];
                else {
                  const Qr = yr.classNameAliases[rr] || rr;
                  mr(Sr[0], Qr)
                }
              } else Qr += Sr[0];
              rr = Or.keywordPatternRe.lastIndex, Sr = Or.keywordPatternRe.exec(Xr)
            }
            var Zr;
            Qr += Xr.substring(rr), lr.addText(Qr)
          }

          function xr() {
            null != Or.subLanguage ? function() {
              if ("" === Xr) return;
              let rr = null;
              if ("string" === typeof Or.subLanguage) {
                if (!Zr[Or.subLanguage]) return void lr.addText(Xr);
                rr = Yr(Or.subLanguage, Xr, !0, Lr[Or.subLanguage]), Lr[Or.subLanguage] = rr._top
              } else rr = nr(Xr, Or.subLanguage.length ? Or.subLanguage : null);
              Or.relevance > 0 && (Pr += rr.relevance), lr.__addSublanguage(rr._emitter, rr.language)
            }() : Er(), Xr = ""
          }

          function mr(rr, Sr) {
            "" !== rr && (lr.startScope(Sr), lr.addText(rr), lr.endScope())
          }

          function Nr(rr, Sr) {
            let Qr = 1;
            const Zr = Sr.length - 1;
            for (; Qr <= Zr;) {
              if (!rr._emit[Qr]) {
                Qr++;
                continue
              }
              const Zr = yr.classNameAliases[rr[Qr]] || rr[Qr],
                Wr = Sr[Qr];
              Zr ? mr(Wr, Zr) : (Xr = Wr, Er(), Xr = ""), Qr++
            }
          }

          function Ur(rr, Sr) {
            return rr.scope && "string" === typeof rr.scope && lr.openNode(yr.classNameAliases[rr.scope] || rr.scope), rr.beginScope && (rr.beginScope._wrap ? (mr(Xr, yr.classNameAliases[rr.beginScope._wrap] || rr.beginScope._wrap), Xr = "") : rr.beginScope._multi && (Nr(rr.beginScope, Sr), Xr = "")), Or = Object.create(rr, {
              parent: {
                value: Or
              }
            }), Or
          }

          function tr(rr, Sr, Zr) {
            let Wr = function(rr, Sr) {
              const Qr = rr && rr.exec(Sr);
              return Qr && 0 === Qr.index
            }(rr.endRe, Zr);
            if (Wr) {
              if (rr["on:end"]) {
                const Zr = new Qr(rr);
                rr["on:end"](Sr, Zr), Zr.isMatchIgnored && (Wr = !1)
              }
              if (Wr) {
                for (; rr.endsParent && rr.parent;) rr = rr.parent;
                return rr
              }
            }
            if (rr.endsWithParent) return tr(rr.parent, Sr, Zr)
          }

          function hr(rr) {
            return 0 === Or.matcher.regexIndex ? (Xr += rr[0], 1) : (Rr = !0, 0)
          }

          function zr(rr) {
            const Qr = rr[0],
              Zr = Sr.substring(rr.index),
              Wr = tr(Or, rr, Zr);
            if (!Wr) return ES;
            const ar = Or;
            Or.endScope && Or.endScope._wrap ? (xr(), mr(Qr, Or.endScope._wrap)) : Or.endScope && Or.endScope._multi ? (xr(), Nr(Or.endScope, rr)) : ar.skip ? Xr += Qr : (ar.returnEnd || ar.excludeEnd || (Xr += Qr), xr(), ar.excludeEnd && (Xr = Qr));
            do {
              Or.scope && lr.closeNode(), Or.skip || Or.subLanguage || (Pr += Or.relevance), Or = Or.parent
            } while (Or !== Wr.parent);
            return Wr.starts && Ur(Wr.starts, rr), ar.returnEnd ? 0 : Qr.length
          }
          let er = {};

          function Kr(Zr, ar) {
            const Ir = ar && ar[0];
            if (Xr += Zr, null == Ir) return xr(), 0;
            if ("Yx" === er.type && "end" === ar.type && er.index === ar.index && "" === Ir) {
              if (Xr += Sr.slice(ar.index, ar.index + 1), !jr) {
                const Sr = new Error(`0 width match regex (${rr})`);
                throw Sr.languageName = rr, Sr.badRule = er.rule, Sr
              }
              return 1
            }
            if (er = ar, "Yx" === ar.type) return function(rr) {
              const Sr = rr[0],
                Zr = rr.rule,
                Wr = new Qr(Zr),
                ar = [Zr.__beforeBegin, Zr["on:begin"]];
              for (const Qr of ar)
                if (Qr && (Qr(rr, Wr), Wr.isMatchIgnored)) return hr(Sr);
              return Zr.skip ? Xr += Sr : (Zr.excludeBegin && (Xr += Sr), xr(), Zr.returnBegin || Zr.excludeBegin || (Xr = Sr)), Ur(Zr, rr), Zr.returnBegin ? 0 : Sr.length
            }(ar);
            if ("illegal" === ar.type && !Wr) {
              const rr = new Error('Illegal lexeme "' + Ir + '" for mode "' + (Or.scope || "<unnamed>") + '"');
              throw rr.mode = Or, rr
            }
            if ("end" === ar.type) {
              const rr = zr(ar);
              if (rr !== ES) return rr
            }
            if ("illegal" === ar.type && "" === Ir) return Xr += "\n", 1;
            if (qr > 1e5 && qr > 3 * ar.index) {
              throw new Error("potential infinite loop, way more iterations than matches")
            }
            return Xr += Ir, Ir.length
          }
          const yr = Br(rr);
          if (!yr) throw sr(Ir.replace("{}", rr)), new Error('Unknown language: "' + rr + '"');
          const Tr = WS(yr);
          let vr = "",
            Or = ar || Tr;
          const Lr = {},
            lr = new pr.__emitter(pr);
          ! function() {
            const rr = [];
            for (let Sr = Or; Sr !== yr; Sr = Sr.parent) Sr.scope && rr.unshift(Sr.scope);
            rr.forEach((rr => lr.openNode(rr)))
          }();
          let Xr = "",
            Pr = 0,
            Hr = 0,
            qr = 0,
            Rr = !1;
          try {
            if (yr.__emitTokens) yr.__emitTokens(Sr, lr);
            else {
              for (Or.matcher.considerAll();;) {
                qr++, Rr ? Rr = !1 : Or.matcher.considerAll(), Or.matcher.lastIndex = Hr;
                const rr = Or.matcher.exec(Sr);
                if (!rr) break;
                const Qr = Kr(Sr.substring(Hr, rr.index), rr);
                Hr = rr.index + Qr
              }
              Kr(Sr.substring(Hr))
            }
            return lr.finalize(), vr = lr.toHTML(), {
              language: rr,
              value: vr,
              relevance: Pr,
              illegal: !1,
              _emitter: lr,
              _top: Or
            }
          } catch (gr) {
            if (gr.message && gr.message.includes("Illegal")) return {
              language: rr,
              value: IS(Sr),
              illegal: !0,
              relevance: 0,
              _illegalBy: {
                message: gr.message,
                index: Hr,
                context: Sr.slice(Hr - 100, Hr + 100),
                mode: gr.mode,
                resultSoFar: vr
              },
              _emitter: lr
            };
            if (jr) return {
              language: rr,
              value: IS(Sr),
              illegal: !1,
              relevance: 0,
              errorRaised: gr,
              _emitter: lr,
              _top: Or
            };
            throw gr
          }
        }

        function nr(rr, Sr) {
          Sr = Sr || pr.languages || Object.keys(Zr);
          const Qr = function(rr) {
              const Sr = {
                value: IS(rr),
                illegal: !1,
                relevance: 0,
                _top: fr,
                _emitter: new pr.__emitter(pr)
              };
              return Sr._emitter.addText(rr), Sr
            }(rr),
            Wr = Sr.filter(Br).filter(vr).map((Sr => Yr(Sr, rr, !1)));
          Wr.unshift(Qr);
          const ar = Wr.sort(((rr, Sr) => {
              if (rr.relevance !== Sr.relevance) return Sr.relevance - rr.relevance;
              if (rr.language && Sr.language) {
                if (Br(rr.language).supersetOf === Sr.language) return 1;
                if (Br(Sr.language).supersetOf === rr.language) return -1
              }
              return 0
            })),
            [jr, Ir] = ar,
            Er = jr;
          return Er.secondBest = Ir, Er
        }

        function er(rr) {
          let Sr = null;
          const Qr = function(rr) {
            let Sr = rr.className + " ";
            Sr += rr.parentNode ? rr.parentNode.className : "";
            const Qr = pr.languageDetectRe.exec(Sr);
            if (Qr) {
              const Sr = Br(Qr[1]);
              return Sr || (ur(Ir.replace("{}", Qr[1])), ur("Falling back to no-highlight mode for this block.", rr)), Sr ? Qr[1] : "no-highlight"
            }
            return Sr.split(/\s+/).find((rr => hr(rr) || Br(rr)))
          }(rr);
          if (hr(Qr)) return;
          if (Or("before:highlightElement", {
              el: rr,
              language: Qr
            }), rr.dataset.highlighted) return void console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.", rr);
          if (rr.children.length > 0 && (pr.ignoreUnescapedHTML || (console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."), console.warn("https://github.com/highlightjs/highlight.js/wiki/security"), console.warn("The element with unescaped HTML:"), console.warn(rr)), pr.throwUnescapedHTML)) {
            throw new jS("One of your code blocks includes unescaped HTML.", rr.innerHTML)
          }
          Sr = rr;
          const Zr = Sr.textContent,
            ar = Qr ? zr(Zr, {
              language: Qr,
              ignoreIllegals: !0
            }) : nr(Zr);
          rr.innerHTML = ar.value, rr.dataset.highlighted = "yes",
            function(rr, Sr, Qr) {
              const Zr = Sr && Wr[Sr] || Qr;
              rr.classList.add("hljs"), rr.classList.add(`language-${Zr}`)
            }(rr, Qr, ar.language), rr.result = {
              language: ar.language,
              re: ar.relevance,
              relevance: ar.relevance
            }, ar.secondBest && (rr.secondBest = {
              language: ar.secondBest.language,
              relevance: ar.secondBest.relevance
            }), Or("after:highlightElement", {
              el: rr,
              result: ar,
              text: Zr
            })
        }
        let Kr = !1;

        function yr() {
          if ("loading" === document.readyState) return Kr || window.addEventListener("DOMContentLoaded", (function() {
            yr()
          }), !1), void(Kr = !0);
          document.querySelectorAll(pr.cssSelector).forEach(er)
        }

        function Br(rr) {
          return rr = (rr || "").toLowerCase(), Zr[rr] || Zr[Wr[rr]]
        }

        function Tr(rr, Sr) {
          let {
            languageName: Qr
          } = Sr;
          "string" === typeof rr && (rr = [rr]), rr.forEach((rr => {
            Wr[rr.toLowerCase()] = Qr
          }))
        }

        function vr(rr) {
          const Sr = Br(rr);
          return Sr && !Sr.disableAutodetect
        }

        function Or(rr, Sr) {
          const Qr = rr;
          ar.forEach((function(rr) {
            rr[Qr] && rr[Qr](Sr)
          }))
        }
        Object.assign(rr, {
          highlight: zr,
          highlightAuto: nr,
          highlightAll: yr,
          highlightElement: er,
          highlightBlock: function(rr) {
            return rS("10.7.0", "highlightBlock will be removed entirely in v12.0"), rS("10.7.0", "Please use highlightElement now."), er(rr)
          },
          configure: function(rr) {
            pr = fS(pr, rr)
          },
          initHighlighting: () => {
            yr(), rS("10.6.0", "initHighlighting() deprecated.  Use highlightAll() now.")
          },
          initHighlightingOnLoad: function() {
            yr(), rS("10.6.0", "initHighlightingOnLoad() deprecated.  Use highlightAll() now.")
          },
          registerLanguage: function(Sr, Qr) {
            let Wr = null;
            try {
              Wr = Qr(rr)
            } catch (ar) {
              if (sr("Language definition for '{}' could not be registered.".replace("{}", Sr)), !jr) throw ar;
              sr(ar), Wr = fr
            }
            Wr.name || (Wr.name = Sr), Zr[Sr] = Wr, Wr.rawDefinition = Qr.bind(null, rr), Wr.aliases && Tr(Wr.aliases, {
              languageName: Sr
            })
          },
          unregisterLanguage: function(rr) {
            delete Zr[rr];
            for (const Sr of Object.keys(Wr)) Wr[Sr] === rr && delete Wr[Sr]
          },
          listLanguages: function() {
            return Object.keys(Zr)
          },
          getLanguage: Br,
          registerAliases: Tr,
          autoDetection: vr,
          inherit: fS,
          addPlugin: function(rr) {
            ! function(rr) {
              rr["before:highlightBlock"] && !rr["before:highlightElement"] && (rr["before:highlightElement"] = Sr => {
                rr["before:highlightBlock"](Object.assign({
                  block: Sr.el
                }, Sr))
              }), rr["after:highlightBlock"] && !rr["after:highlightElement"] && (rr["after:highlightElement"] = Sr => {
                rr["after:highlightBlock"](Object.assign({
                  block: Sr.el
                }, Sr))
              })
            }(rr), ar.push(rr)
          },
          removePlugin: function(rr) {
            const Sr = ar.indexOf(rr); - 1 !== Sr && ar.splice(Sr, 1)
          }
        }), rr.debugMode = function() {
          jr = !1
        }, rr.safeMode = function() {
          jr = !0
        }, rr.versionString = "11.11.1", rr.regex = {
          concat: Ur,
          lookahead: xr,
          either: tr,
          optional: Nr,
          anyNumberOfTimes: mr
        };
        for (const Qr in kr) "object" === typeof kr[Qr] && Sr(kr[Qr]);
        return Object.assign(rr, kr), rr
      },
      xS = pS({});
    xS.newInstance = () => pS({}), rr.exports = xS, xS.HighlightJS = xS, xS.default = xS
  },
  5538: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => Zr
    });
    const Zr = Qr(5547)
  },
  5553: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => xr
    });
    const Zr = "[A-Za-z$_][0-9A-Za-z$_]*",
      Wr = ["as", "in", "of", "if", "for", "while", "finally", "var", "new", "function", "do", "return", "void", "else", "break", "catch", "instanceof", "with", "throw", "case", "default", "try", "switch", "continue", "typeof", "delete", "let", "yield", "const", "class", "debugger", "async", "await", "static", "import", "from", "export", "extends", "using"],
      ar = ["true", "false", "null", "undefined", "NaN", "Infinity"],
      jr = ["Object", "Function", "Boolean", "Symbol", "Math", "Date", "Number", "BigInt", "String", "RegExp", "Array", "Float32Array", "Float64Array", "Int8Array", "Uint8Array", "Uint8ClampedArray", "Int16Array", "Int32Array", "Uint16Array", "Uint32Array", "BigInt64Array", "BigUint64Array", "Set", "Map", "WeakSet", "WeakMap", "ArrayBuffer", "SharedArrayBuffer", "Atomics", "DataView", "JSON", "Promise", "Generator", "GeneratorFunction", "AsyncFunction", "Reflect", "Proxy", "Intl", "WebAssembly"],
      Ir = ["Error", "EvalError", "InternalError", "RangeError", "ReferenceError", "SyntaxError", "TypeError", "URIError"],
      fr = ["setInterval", "setTimeout", "clearInterval", "clearTimeout", "require", "exports", "eval", "isFinite", "isNaN", "parseFloat", "parseInt", "decodeURI", "decodeURIComponent", "encodeURI", "encodeURIComponent", "escape", "unescape"],
      Er = ["arguments", "this", "super", "console", "window", "document", "localStorage", "sessionStorage", "module", "global"],
      pr = [].concat(fr, jr, Ir);

    function xr(rr) {
      const Sr = rr.regex,
        Qr = Zr,
        xr = "<>",
        mr = "</>",
        Nr = {
          Yx: /<[A-Za-z0-9\\._:-]+/,
          end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
          isTrulyOpeningTag: (rr, Sr) => {
            const Qr = rr[0].length + rr.index,
              Zr = rr.input[Qr];
            if ("<" === Zr || "," === Zr) return void Sr.ignoreMatch();
            let Wr;
            ">" === Zr && (((rr, Sr) => {
              let {
                after: Qr
              } = Sr;
              const Zr = "</" + rr[0].slice(1);
              return -1 !== rr.input.indexOf(Zr, Qr)
            })(rr, {
              after: Qr
            }) || Sr.ignoreMatch());
            const ar = rr.input.substring(Qr);
            ((Wr = ar.match(/^\s*=/)) || (Wr = ar.match(/^\s+extends\s+/)) && 0 === Wr.index) && Sr.ignoreMatch()
          }
        },
        Ur = {
          $pattern: Zr,
          keyword: Wr,
          literal: ar,
          built_in: pr,
          "variable.language": Er
        },
        tr = "[0-9](_?[0-9])*",
        hr = `\\.(${tr})`,
        zr = "0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",
        Yr = {
          className: "number",
          variants: [{
            Yx: `(\\b(${zr})((${hr})|\\.)?|(${hr}))[eE][+-]?(${tr})\\b`
          }, {
            Yx: `\\b(${zr})\\b((${hr})\\b|\\.)?|(${hr})\\b`
          }, {
            Yx: "\\b(0|[1-9](_?[0-9])*)n\\b"
          }, {
            Yx: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"
          }, {
            Yx: "\\b0[bB][0-1](_?[0-1])*n?\\b"
          }, {
            Yx: "\\b0[oO][0-7](_?[0-7])*n?\\b"
          }, {
            Yx: "\\b0[0-7]+n?\\b"
          }],
          relevance: 0
        },
        nr = {
          className: "subst",
          Yx: "\\$\\{",
          end: "\\}",
          keywords: Ur,
          contains: []
        },
        er = {
          Yx: ".?html`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [rr.BACKSLASH_ESCAPE, nr],
            subLanguage: "xml"
          }
        },
        Kr = {
          Yx: ".?css`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [rr.BACKSLASH_ESCAPE, nr],
            subLanguage: "css"
          }
        },
        yr = {
          Yx: ".?gql`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [rr.BACKSLASH_ESCAPE, nr],
            subLanguage: "graphql"
          }
        },
        Br = {
          className: "string",
          Yx: "`",
          end: "`",
          contains: [rr.BACKSLASH_ESCAPE, nr]
        },
        Tr = {
          className: "comment",
          variants: [rr.COMMENT(/\/\*\*(?!\/)/, "\\*/", {
            relevance: 0,
            contains: [{
              Yx: "(?=@[A-Za-z]+)",
              relevance: 0,
              contains: [{
                className: "doctag",
                Yx: "@[A-Za-z]+"
              }, {
                className: "type",
                Yx: "\\{",
                end: "\\}",
                excludeEnd: !0,
                excludeBegin: !0,
                relevance: 0
              }, {
                className: "variable",
                Yx: Qr + "(?=\\s*(-)|$)",
                endsParent: !0,
                relevance: 0
              }, {
                Yx: /(?=[^\n])\s/,
                relevance: 0
              }]
            }]
          }), rr.C_BLOCK_COMMENT_MODE, rr.C_LINE_COMMENT_MODE]
        },
        vr = [rr.APOS_STRING_MODE, rr.QUOTE_STRING_MODE, er, Kr, yr, Br, {
          match: /\$\d+/
        }, Yr];
      nr.contains = vr.concat({
        Yx: /\{/,
        end: /\}/,
        keywords: Ur,
        contains: ["self"].concat(vr)
      });
      const Or = [].concat(Tr, nr.contains),
        Lr = Or.concat([{
          Yx: /(\s*)\(/,
          end: /\)/,
          keywords: Ur,
          contains: ["self"].concat(Or)
        }]),
        lr = {
          className: "params",
          Yx: /(\s*)\(/,
          end: /\)/,
          excludeBegin: !0,
          excludeEnd: !0,
          keywords: Ur,
          contains: Lr
        },
        Xr = {
          variants: [{
            match: [/class/, /\s+/, Qr, /\s+/, /extends/, /\s+/, Sr.concat(Qr, "(", Sr.concat(/\./, Qr), ")*")],
            scope: {
              1: "keyword",
              3: "title.class",
              5: "keyword",
              7: "title.class.inherited"
            }
          }, {
            match: [/class/, /\s+/, Qr],
            scope: {
              1: "keyword",
              3: "title.class"
            }
          }]
        },
        Pr = {
          relevance: 0,
          match: Sr.either(/\bJSON/, /\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/, /\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/, /\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),
          className: "title.class",
          keywords: {
            _: [...jr, ...Ir]
          }
        },
        Hr = {
          variants: [{
            match: [/function/, /\s+/, Qr, /(?=\s*\()/]
          }, {
            match: [/function/, /\s*(?=\()/]
          }],
          className: {
            1: "keyword",
            3: "title.function"
          },
          label: "func.def",
          contains: [lr],
          illegal: /%/
        };
      const qr = {
        match: Sr.concat(/\b/, (Rr = [...fr, "super", "import"].map((rr => `${rr}\\s*\\(`)), Sr.concat("(?!", Rr.join("|"), ")")), Qr, Sr.lookahead(/\s*\(/)),
        className: "title.function",
        relevance: 0
      };
      var Rr;
      const gr = {
          Yx: Sr.concat(/\./, Sr.lookahead(Sr.concat(Qr, /(?![0-9A-Za-z$_(])/))),
          end: Qr,
          excludeBegin: !0,
          keywords: "prototype",
          className: "property",
          relevance: 0
        },
        Cr = {
          match: [/get|set/, /\s+/, Qr, /(?=\()/],
          className: {
            1: "keyword",
            3: "title.function"
          },
          contains: [{
            Yx: /\(\)/
          }, lr]
        },
        Mr = "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" + rr.UNDERSCORE_IDENT_RE + ")\\s*=>",
        Gr = {
          match: [/const|var|let/, /\s+/, Qr, /\s*/, /=\s*/, /(async\s*)?/, Sr.lookahead(Mr)],
          keywords: "async",
          className: {
            1: "keyword",
            3: "title.function"
          },
          contains: [lr]
        };
      return {
        name: "JavaScript",
        aliases: ["js", "jsx", "mjs", "cjs"],
        keywords: Ur,
        exports: {
          PARAMS_CONTAINS: Lr,
          CLASS_REFERENCE: Pr
        },
        illegal: /#(?![$_A-z])/,
        contains: [rr.SHEBANG({
          label: "shebang",
          binary: "node",
          relevance: 5
        }), {
          label: "use_strict",
          className: "meta",
          relevance: 10,
          Yx: /^\s*['"]use (strict|asm)['"]/
        }, rr.APOS_STRING_MODE, rr.QUOTE_STRING_MODE, er, Kr, yr, Br, Tr, {
          match: /\$\d+/
        }, Yr, Pr, {
          scope: "attr",
          match: Qr + Sr.lookahead(":"),
          relevance: 0
        }, Gr, {
          Yx: "(" + rr.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
          keywords: "return throw case",
          relevance: 0,
          contains: [Tr, rr.REGEXP_MODE, {
            className: "function",
            Yx: Mr,
            returnBegin: !0,
            end: "\\s*=>",
            contains: [{
              className: "params",
              variants: [{
                Yx: rr.UNDERSCORE_IDENT_RE,
                relevance: 0
              }, {
                className: null,
                Yx: /\(\s*\)/,
                skip: !0
              }, {
                Yx: /(\s*)\(/,
                end: /\)/,
                excludeBegin: !0,
                excludeEnd: !0,
                keywords: Ur,
                contains: Lr
              }]
            }]
          }, {
            Yx: /,/,
            relevance: 0
          }, {
            match: /\s+/,
            relevance: 0
          }, {
            variants: [{
              Yx: xr,
              end: mr
            }, {
              match: /<[A-Za-z0-9\\._:-]+\s*\/>/
            }, {
              Yx: Nr.Yx,
              "on:begin": Nr.isTrulyOpeningTag,
              end: Nr.end
            }],
            subLanguage: "xml",
            contains: [{
              Yx: Nr.Yx,
              end: Nr.end,
              skip: !0,
              contains: ["self"]
            }]
          }]
        }, Hr, {
          beginKeywords: "while if switch catch for"
        }, {
          Yx: "\\b(?!function)" + rr.UNDERSCORE_IDENT_RE + "\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
          returnBegin: !0,
          label: "func.def",
          contains: [lr, rr.inherit(rr.TITLE_MODE, {
            Yx: Qr,
            className: "title.function"
          })]
        }, {
          match: /\.\.\./,
          relevance: 0
        }, gr, {
          match: "\\$" + Qr,
          relevance: 0
        }, {
          match: [/\bconstructor(?=\s*\()/],
          className: {
            1: "title.function"
          },
          contains: [lr]
        }, qr, {
          relevance: 0,
          match: /\b[A-Z][A-Z_0-9]+\b/,
          className: "variable.constant"
        }, Xr, Cr, {
          match: /\$[(.]/
        }]
      }
    }
  },
  5562: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      c: () => mr
    });
    const Zr = "[A-Za-z$_][0-9A-Za-z$_]*",
      Wr = ["as", "in", "of", "if", "for", "while", "finally", "var", "new", "function", "do", "return", "void", "else", "break", "catch", "instanceof", "with", "throw", "case", "default", "try", "switch", "continue", "typeof", "delete", "let", "yield", "const", "class", "debugger", "async", "await", "static", "import", "from", "export", "extends", "using"],
      ar = ["true", "false", "null", "undefined", "NaN", "Infinity"],
      jr = ["Object", "Function", "Boolean", "Symbol", "Math", "Date", "Number", "BigInt", "String", "RegExp", "Array", "Float32Array", "Float64Array", "Int8Array", "Uint8Array", "Uint8ClampedArray", "Int16Array", "Int32Array", "Uint16Array", "Uint32Array", "BigInt64Array", "BigUint64Array", "Set", "Map", "WeakSet", "WeakMap", "ArrayBuffer", "SharedArrayBuffer", "Atomics", "DataView", "JSON", "Promise", "Generator", "GeneratorFunction", "AsyncFunction", "Reflect", "Proxy", "Intl", "WebAssembly"],
      Ir = ["Error", "EvalError", "InternalError", "RangeError", "ReferenceError", "SyntaxError", "TypeError", "URIError"],
      fr = ["setInterval", "setTimeout", "clearInterval", "clearTimeout", "require", "exports", "eval", "isFinite", "isNaN", "parseFloat", "parseInt", "decodeURI", "decodeURIComponent", "encodeURI", "encodeURIComponent", "escape", "unescape"],
      Er = ["arguments", "this", "super", "console", "window", "document", "localStorage", "sessionStorage", "module", "global"],
      pr = [].concat(fr, jr, Ir);

    function xr(rr) {
      const Sr = rr.regex,
        Qr = Zr,
        xr = "<>",
        mr = "</>",
        Nr = {
          Yx: /<[A-Za-z0-9\\._:-]+/,
          end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
          isTrulyOpeningTag: (rr, Sr) => {
            const Qr = rr[0].length + rr.index,
              Zr = rr.input[Qr];
            if ("<" === Zr || "," === Zr) return void Sr.ignoreMatch();
            let Wr;
            ">" === Zr && (((rr, Sr) => {
              let {
                after: Qr
              } = Sr;
              const Zr = "</" + rr[0].slice(1);
              return -1 !== rr.input.indexOf(Zr, Qr)
            })(rr, {
              after: Qr
            }) || Sr.ignoreMatch());
            const ar = rr.input.substring(Qr);
            ((Wr = ar.match(/^\s*=/)) || (Wr = ar.match(/^\s+extends\s+/)) && 0 === Wr.index) && Sr.ignoreMatch()
          }
        },
        Ur = {
          $pattern: Zr,
          keyword: Wr,
          literal: ar,
          built_in: pr,
          "variable.language": Er
        },
        tr = "[0-9](_?[0-9])*",
        hr = `\\.(${tr})`,
        zr = "0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",
        Yr = {
          className: "number",
          variants: [{
            Yx: `(\\b(${zr})((${hr})|\\.)?|(${hr}))[eE][+-]?(${tr})\\b`
          }, {
            Yx: `\\b(${zr})\\b((${hr})\\b|\\.)?|(${hr})\\b`
          }, {
            Yx: "\\b(0|[1-9](_?[0-9])*)n\\b"
          }, {
            Yx: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"
          }, {
            Yx: "\\b0[bB][0-1](_?[0-1])*n?\\b"
          }, {
            Yx: "\\b0[oO][0-7](_?[0-7])*n?\\b"
          }, {
            Yx: "\\b0[0-7]+n?\\b"
          }],
          relevance: 0
        },
        nr = {
          className: "subst",
          Yx: "\\$\\{",
          end: "\\}",
          keywords: Ur,
          contains: []
        },
        er = {
          Yx: ".?html`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [rr.BACKSLASH_ESCAPE, nr],
            subLanguage: "xml"
          }
        },
        Kr = {
          Yx: ".?css`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [rr.BACKSLASH_ESCAPE, nr],
            subLanguage: "css"
          }
        },
        yr = {
          Yx: ".?gql`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [rr.BACKSLASH_ESCAPE, nr],
            subLanguage: "graphql"
          }
        },
        Br = {
          className: "string",
          Yx: "`",
          end: "`",
          contains: [rr.BACKSLASH_ESCAPE, nr]
        },
        Tr = {
          className: "comment",
          variants: [rr.COMMENT(/\/\*\*(?!\/)/, "\\*/", {
            relevance: 0,
            contains: [{
              Yx: "(?=@[A-Za-z]+)",
              relevance: 0,
              contains: [{
                className: "doctag",
                Yx: "@[A-Za-z]+"
              }, {
                className: "type",
                Yx: "\\{",
                end: "\\}",
                excludeEnd: !0,
                excludeBegin: !0,
                relevance: 0
              }, {
                className: "variable",
                Yx: Qr + "(?=\\s*(-)|$)",
                endsParent: !0,
                relevance: 0
              }, {
                Yx: /(?=[^\n])\s/,
                relevance: 0
              }]
            }]
          }), rr.C_BLOCK_COMMENT_MODE, rr.C_LINE_COMMENT_MODE]
        },
        vr = [rr.APOS_STRING_MODE, rr.QUOTE_STRING_MODE, er, Kr, yr, Br, {
          match: /\$\d+/
        }, Yr];
      nr.contains = vr.concat({
        Yx: /\{/,
        end: /\}/,
        keywords: Ur,
        contains: ["self"].concat(vr)
      });
      const Or = [].concat(Tr, nr.contains),
        Lr = Or.concat([{
          Yx: /(\s*)\(/,
          end: /\)/,
          keywords: Ur,
          contains: ["self"].concat(Or)
        }]),
        lr = {
          className: "params",
          Yx: /(\s*)\(/,
          end: /\)/,
          excludeBegin: !0,
          excludeEnd: !0,
          keywords: Ur,
          contains: Lr
        },
        Xr = {
          variants: [{
            match: [/class/, /\s+/, Qr, /\s+/, /extends/, /\s+/, Sr.concat(Qr, "(", Sr.concat(/\./, Qr), ")*")],
            scope: {
              1: "keyword",
              3: "title.class",
              5: "keyword",
              7: "title.class.inherited"
            }
          }, {
            match: [/class/, /\s+/, Qr],
            scope: {
              1: "keyword",
              3: "title.class"
            }
          }]
        },
        Pr = {
          relevance: 0,
          match: Sr.either(/\bJSON/, /\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/, /\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/, /\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),
          className: "title.class",
          keywords: {
            _: [...jr, ...Ir]
          }
        },
        Hr = {
          variants: [{
            match: [/function/, /\s+/, Qr, /(?=\s*\()/]
          }, {
            match: [/function/, /\s*(?=\()/]
          }],
          className: {
            1: "keyword",
            3: "title.function"
          },
          label: "func.def",
          contains: [lr],
          illegal: /%/
        };
      const qr = {
        match: Sr.concat(/\b/, (Rr = [...fr, "super", "import"].map((rr => `${rr}\\s*\\(`)), Sr.concat("(?!", Rr.join("|"), ")")), Qr, Sr.lookahead(/\s*\(/)),
        className: "title.function",
        relevance: 0
      };
      var Rr;
      const gr = {
          Yx: Sr.concat(/\./, Sr.lookahead(Sr.concat(Qr, /(?![0-9A-Za-z$_(])/))),
          end: Qr,
          excludeBegin: !0,
          keywords: "prototype",
          className: "property",
          relevance: 0
        },
        Cr = {
          match: [/get|set/, /\s+/, Qr, /(?=\()/],
          className: {
            1: "keyword",
            3: "title.function"
          },
          contains: [{
            Yx: /\(\)/
          }, lr]
        },
        Mr = "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" + rr.UNDERSCORE_IDENT_RE + ")\\s*=>",
        Gr = {
          match: [/const|var|let/, /\s+/, Qr, /\s*/, /=\s*/, /(async\s*)?/, Sr.lookahead(Mr)],
          keywords: "async",
          className: {
            1: "keyword",
            3: "title.function"
          },
          contains: [lr]
        };
      return {
        name: "JavaScript",
        aliases: ["js", "jsx", "mjs", "cjs"],
        keywords: Ur,
        exports: {
          PARAMS_CONTAINS: Lr,
          CLASS_REFERENCE: Pr
        },
        illegal: /#(?![$_A-z])/,
        contains: [rr.SHEBANG({
          label: "shebang",
          binary: "node",
          relevance: 5
        }), {
          label: "use_strict",
          className: "meta",
          relevance: 10,
          Yx: /^\s*['"]use (strict|asm)['"]/
        }, rr.APOS_STRING_MODE, rr.QUOTE_STRING_MODE, er, Kr, yr, Br, Tr, {
          match: /\$\d+/
        }, Yr, Pr, {
          scope: "attr",
          match: Qr + Sr.lookahead(":"),
          relevance: 0
        }, Gr, {
          Yx: "(" + rr.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
          keywords: "return throw case",
          relevance: 0,
          contains: [Tr, rr.REGEXP_MODE, {
            className: "function",
            Yx: Mr,
            returnBegin: !0,
            end: "\\s*=>",
            contains: [{
              className: "params",
              variants: [{
                Yx: rr.UNDERSCORE_IDENT_RE,
                relevance: 0
              }, {
                className: null,
                Yx: /\(\s*\)/,
                skip: !0
              }, {
                Yx: /(\s*)\(/,
                end: /\)/,
                excludeBegin: !0,
                excludeEnd: !0,
                keywords: Ur,
                contains: Lr
              }]
            }]
          }, {
            Yx: /,/,
            relevance: 0
          }, {
            match: /\s+/,
            relevance: 0
          }, {
            variants: [{
              Yx: xr,
              end: mr
            }, {
              match: /<[A-Za-z0-9\\._:-]+\s*\/>/
            }, {
              Yx: Nr.Yx,
              "on:begin": Nr.isTrulyOpeningTag,
              end: Nr.end
            }],
            subLanguage: "xml",
            contains: [{
              Yx: Nr.Yx,
              end: Nr.end,
              skip: !0,
              contains: ["self"]
            }]
          }]
        }, Hr, {
          beginKeywords: "while if switch catch for"
        }, {
          Yx: "\\b(?!function)" + rr.UNDERSCORE_IDENT_RE + "\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
          returnBegin: !0,
          label: "func.def",
          contains: [lr, rr.inherit(rr.TITLE_MODE, {
            Yx: Qr,
            className: "title.function"
          })]
        }, {
          match: /\.\.\./,
          relevance: 0
        }, gr, {
          match: "\\$" + Qr,
          relevance: 0
        }, {
          match: [/\bconstructor(?=\s*\()/],
          className: {
            1: "title.function"
          },
          contains: [lr]
        }, qr, {
          relevance: 0,
          match: /\b[A-Z][A-Z_0-9]+\b/,
          className: "variable.constant"
        }, Xr, Cr, {
          match: /\$[(.]/
        }]
      }
    }

    function mr(rr) {
      const Sr = rr.regex,
        Qr = xr(rr),
        jr = Zr,
        Ir = ["any", "void", "number", "boolean", "string", "object", "never", "symbol", "bigint", "unknown"],
        fr = {
          Yx: [/namespace/, /\s+/, rr.IDENT_RE],
          beginScope: {
            1: "keyword",
            3: "title.class"
          }
        },
        mr = {
          beginKeywords: "interface",
          end: /\{/,
          excludeEnd: !0,
          keywords: {
            keyword: "interface extends",
            built_in: Ir
          },
          contains: [Qr.exports.CLASS_REFERENCE]
        },
        Nr = {
          $pattern: Zr,
          keyword: Wr.concat(["type", "interface", "public", "private", "protected", "implements", "declare", "abstract", "readonly", "enum", "override", "satisfies"]),
          literal: ar,
          built_in: pr.concat(Ir),
          "variable.language": Er
        },
        Ur = {
          className: "meta",
          Yx: "@" + jr
        },
        tr = (rr, Sr, Qr) => {
          const Zr = rr.contains.findIndex((rr => rr.label === Sr));
          if (-1 === Zr) throw new Error("can not find mode to replace");
          rr.contains.splice(Zr, 1, Qr)
        };
      Object.assign(Qr.keywords, Nr), Qr.exports.PARAMS_CONTAINS.push(Ur);
      const hr = Qr.contains.find((rr => "attr" === rr.scope)),
        zr = Object.assign({}, hr, {
          match: Sr.concat(jr, Sr.lookahead(/\s*\?:/))
        });
      Qr.exports.PARAMS_CONTAINS.push([Qr.exports.CLASS_REFERENCE, hr, zr]), Qr.contains = Qr.contains.concat([Ur, fr, mr, zr]), tr(Qr, "shebang", rr.SHEBANG()), tr(Qr, "use_strict", {
        className: "meta",
        relevance: 10,
        Yx: /^\s*['"]use strict['"]/
      });
      return Qr.contains.find((rr => "func.def" === rr.label)).relevance = 0, Object.assign(Qr, {
        name: "TypeScript",
        aliases: ["ts", "tsx", "mts", "cts"]
      }), Qr
    }
  }
};
Object.freeze(modules);
for (const rr in modules) Object.freeze(modules[rr]);