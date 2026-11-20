export const id = 77;
export const ids = [77];
export const modules = {
  4485: bb => {
    function ub(bb) {
      return bb instanceof Map ? bb.clear = bb.delete = bb.set = function() {
        throw new Error("map is read-only")
      } : bb instanceof Set && (bb.add = bb.clear = bb.delete = function() {
        throw new Error("set is read-only")
      }), Object.freeze(bb), Object.getOwnPropertyNames(bb).forEach((hb => {
        const Bb = bb[hb],
          Ob = typeof Bb;
        "object" !== Ob && "function" !== Ob || Object.isFrozen(Bb) || ub(Bb)
      })), bb
    }
    class hb {
      constructor(bb) {
        void 0 === bb.data && (bb.data = {}), this.data = bb.data, this.isMatchIgnored = !1
      }
      ignoreMatch() {
        this.isMatchIgnored = !0
      }
    }

    function Bb(bb) {
      return bb.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;")
    }

    function Ob(bb) {
      const ub = Object.create(null);
      for (const Gb in bb) ub[Gb] = bb[Gb];
      for (var hb = arguments.length, Bb = new Array(hb > 1 ? hb - 1 : 0), Ob = 1; Ob < hb; Ob++) Bb[Ob - 1] = arguments[Ob];
      return Bb.forEach((function(bb) {
        for (const hb in bb) ub[hb] = bb[hb]
      })), ub
    }
    const Gb = bb => !!bb.scope;
    class Ub {
      constructor(bb, ub) {
        this.buffer = "", this.classPrefix = ub.classPrefix, bb.walk(this)
      }
      addText(bb) {
        this.buffer += Bb(bb)
      }
      openNode(bb) {
        if (!Gb(bb)) return;
        const ub = ((bb, ub) => {
          let {
            prefix: hb
          } = ub;
          if (bb.startsWith("language:")) return bb.replace("language:", "language-");
          if (bb.includes(".")) {
            const ub = bb.split(".");
            return [`${hb}${ub.shift()}`, ...ub.map(((bb, ub) => `${bb}${"_".repeat(ub+1)}`))].join(" ")
          }
          return `${hb}${bb}`
        })(bb.scope, {
          prefix: this.classPrefix
        });
        this.span(ub)
      }
      closeNode(bb) {
        Gb(bb) && (this.buffer += "</span>")
      }
      value() {
        return this.buffer
      }
      span(bb) {
        this.buffer += `<span class="${bb}">`
      }
    }
    const Lb = function() {
      let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      const ub = {
        children: []
      };
      return Object.assign(ub, bb), ub
    };
    class Yb {
      constructor() {
        this.zK = Lb(), this.stack = [this.zK]
      }
      get top() {
        return this.stack[this.stack.length - 1]
      }
      get root() {
        return this.zK
      }
      add(bb) {
        this.top.children.push(bb)
      }
      openNode(bb) {
        const ub = Lb({
          scope: bb
        });
        this.add(ub), this.stack.push(ub)
      }
      closeNode() {
        if (this.stack.length > 1) return this.stack.pop()
      }
      closeAllNodes() {
        for (; this.closeNode(););
      }
      toJSON() {
        return JSON.stringify(this.zK, null, 4)
      }
      walk(bb) {
        return this.constructor._walk(bb, this.zK)
      }
      static _walk(bb, ub) {
        return "string" === typeof ub ? bb.addText(ub) : ub.children && (bb.openNode(ub), ub.children.forEach((ub => this._walk(bb, ub))), bb.closeNode(ub)), bb
      }
      static _collapse(bb) {
        "string" !== typeof bb && bb.children && (bb.children.every((bb => "string" === typeof bb)) ? bb.children = [bb.children.join("")] : bb.children.forEach((bb => {
          Yb._collapse(bb)
        })))
      }
    }
    class Sb extends Yb {
      constructor(bb) {
        super(), this.options = bb
      }
      addText(bb) {
        "" !== bb && this.add(bb)
      }
      startScope(bb) {
        this.openNode(bb)
      }
      endScope() {
        this.closeNode()
      }
      __addSublanguage(bb, ub) {
        const hb = bb.root;
        ub && (hb.scope = `language:${ub}`), this.add(hb)
      }
      toHTML() {
        return new Ub(this, this.options).value()
      }
      finalize() {
        return this.closeAllNodes(), !0
      }
    }

    function ab(bb) {
      return bb ? "string" === typeof bb ? bb : bb.source : null
    }

    function Hb(bb) {
      return Xb("(?=", bb, ")")
    }

    function wb(bb) {
      return Xb("(?:", bb, ")*")
    }

    function Zb(bb) {
      return Xb("(?:", bb, ")?")
    }

    function Xb() {
      for (var bb = arguments.length, ub = new Array(bb), hb = 0; hb < bb; hb++) ub[hb] = arguments[hb];
      return ub.map((bb => ab(bb))).join("")
    }

    function pb() {
      for (var bb = arguments.length, ub = new Array(bb), hb = 0; hb < bb; hb++) ub[hb] = arguments[hb];
      const Bb = function(bb) {
        const ub = bb[bb.length - 1];
        return "object" === typeof ub && ub.constructor === Object ? (bb.splice(bb.length - 1, 1), ub) : {}
      }(ub);
      return "(" + (Bb.capture ? "" : "?:") + ub.map((bb => ab(bb))).join("|") + ")"
    }

    function ob(bb) {
      return new RegExp(bb.toString() + "|").exec("").length - 1
    }
    const Ab = /\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;

    function lb(bb, ub) {
      let {
        joinWith: hb
      } = ub, Bb = 0;
      return bb.map((bb => {
        Bb += 1;
        const ub = Bb;
        let hb = ab(bb),
          Ob = "";
        for (; hb.length > 0;) {
          const bb = Ab.exec(hb);
          if (!bb) {
            Ob += hb;
            break
          }
          Ob += hb.substring(0, bb.index), hb = hb.substring(bb.index + bb[0].length), "\\" === bb[0][0] && bb[1] ? Ob += "\\" + String(Number(bb[1]) + ub) : (Ob += bb[0], "(" === bb[0] && Bb++)
        }
        return Ob
      })).map((bb => `(${bb})`)).join(hb)
    }
    const Kb = "[a-zA-Z]\\w*",
      Wb = "[a-zA-Z_]\\w*",
      Cb = "\\b\\d+(\\.\\d+)?",
      db = "(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",
      rb = "\\b(0b[01]+)",
      jb = {
        kw: "\\\\[\\s\\S]",
        relevance: 0
      },
      nb = {
        scope: "string",
        kw: "'",
        end: "'",
        illegal: "\\n",
        contains: [jb]
      },
      Db = {
        scope: "string",
        kw: '"',
        end: '"',
        illegal: "\\n",
        contains: [jb]
      },
      xb = function(bb, ub) {
        const hb = Ob({
          scope: "comment",
          kw: bb,
          end: ub,
          contains: []
        }, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {});
        hb.contains.push({
          scope: "doctag",
          kw: "[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",
          end: /(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,
          excludeBegin: !0,
          relevance: 0
        });
        const Bb = pb("I", "a", "is", "so", "us", "to", "at", "if", "in", "it", "on", /[A-Za-z]+['](d|ve|re|ll|t|s|n)/, /[A-Za-z]+[-][a-z]+/, /[A-Za-z][a-z]{2,}/);
        return hb.contains.push({
          kw: Xb(/[ ]+/, "(", Bb, /[.]?[:]?([.][ ]|[ ])/, "){3}")
        }), hb
      },
      zb = xb("//", "$"),
      gb = xb("/\\*", "\\*/"),
      ib = xb("#", "$"),
      vb = {
        scope: "number",
        kw: Cb,
        relevance: 0
      },
      tb = {
        scope: "number",
        kw: db,
        relevance: 0
      },
      Jb = {
        scope: "number",
        kw: rb,
        relevance: 0
      },
      eb = {
        scope: "regexp",
        kw: /\/(?=[^/\n]*\/)/,
        end: /\/[gimuy]*/,
        contains: [jb, {
          kw: /\[/,
          end: /\]/,
          relevance: 0,
          contains: [jb]
        }]
      },
      Nb = {
        scope: "title",
        kw: Kb,
        relevance: 0
      },
      sb = {
        scope: "title",
        kw: Wb,
        relevance: 0
      },
      Mb = {
        kw: "\\.\\s*" + Wb,
        relevance: 0
      };
    var mb = Object.freeze({
      __proto__: null,
      APOS_STRING_MODE: nb,
      BACKSLASH_ESCAPE: jb,
      BINARY_NUMBER_MODE: Jb,
      BINARY_NUMBER_RE: rb,
      COMMENT: xb,
      C_BLOCK_COMMENT_MODE: gb,
      C_LINE_COMMENT_MODE: zb,
      C_NUMBER_MODE: tb,
      C_NUMBER_RE: db,
      END_SAME_AS_BEGIN: function(bb) {
        return Object.assign(bb, {
          "on:begin": (bb, ub) => {
            ub.data._beginMatch = bb[1]
          },
          "on:end": (bb, ub) => {
            ub.data._beginMatch !== bb[1] && ub.ignoreMatch()
          }
        })
      },
      HASH_COMMENT_MODE: ib,
      IDENT_RE: Kb,
      MATCH_NOTHING_RE: /\b\B/,
      METHOD_GUARD: Mb,
      NUMBER_MODE: vb,
      NUMBER_RE: Cb,
      PHRASAL_WORDS_MODE: {
        kw: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/
      },
      QUOTE_STRING_MODE: Db,
      REGEXP_MODE: eb,
      RE_STARTERS_RE: "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",
      SHEBANG: function() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        const ub = /^#![ ]*\//;
        return bb.binary && (bb.kw = Xb(ub, /.*\b/, bb.binary, /\b.*/)), Ob({
          scope: "meta",
          kw: ub,
          end: /$/,
          relevance: 0,
          "on:begin": (bb, ub) => {
            0 !== bb.index && ub.ignoreMatch()
          }
        }, bb)
      },
      TITLE_MODE: Nb,
      UNDERSCORE_IDENT_RE: Wb,
      UNDERSCORE_TITLE_MODE: sb
    });

    function Ib(bb, ub) {
      "." === bb.input[bb.index - 1] && ub.ignoreMatch()
    }

    function Pb(bb, ub) {
      void 0 !== bb.className && (bb.scope = bb.className, delete bb.className)
    }

    function qb(bb, ub) {
      ub && bb.beginKeywords && (bb.kw = "\\b(" + bb.beginKeywords.split(" ").join("|") + ")(?!\\.)(?=\\b|\\s)", bb.__beforeBegin = Ib, bb.keywords = bb.keywords || bb.beginKeywords, delete bb.beginKeywords, void 0 === bb.relevance && (bb.relevance = 0))
    }

    function Eb(bb, ub) {
      Array.isArray(bb.illegal) && (bb.illegal = pb(...bb.illegal))
    }

    function yb(bb, ub) {
      if (bb.match) {
        if (bb.kw || bb.end) throw new Error("begin & end are not supported with match");
        bb.kw = bb.match, delete bb.match
      }
    }

    function Vb(bb, ub) {
      void 0 === bb.relevance && (bb.relevance = 1)
    }
    const Fb = (bb, ub) => {
        if (!bb.beforeMatch) return;
        if (bb.starts) throw new Error("beforeMatch cannot be used with starts");
        const hb = Object.assign({}, bb);
        Object.keys(bb).forEach((ub => {
          delete bb[ub]
        })), bb.keywords = hb.keywords, bb.kw = Xb(hb.beforeMatch, Hb(hb.kw)), bb.starts = {
          relevance: 0,
          contains: [Object.assign(hb, {
            endsParent: !0
          })]
        }, bb.relevance = 0, delete hb.beforeMatch
      },
      fb = ["of", "and", "for", "in", "not", "or", "if", "then", "parent", "list", "value"];

    function kb(bb, ub) {
      let hb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "keyword";
      const Bb = Object.create(null);
      return "string" === typeof bb ? Ob(hb, bb.split(" ")) : Array.isArray(bb) ? Ob(hb, bb) : Object.keys(bb).forEach((function(hb) {
        Object.assign(Bb, kb(bb[hb], ub, hb))
      })), Bb;

      function Ob(bb, hb) {
        ub && (hb = hb.map((bb => bb.toLowerCase()))), hb.forEach((function(ub) {
          const hb = ub.split("|");
          Bb[hb[0]] = [bb, Tb(hb[0], hb[1])]
        }))
      }
    }

    function Tb(bb, ub) {
      return ub ? Number(ub) : function(bb) {
        return fb.includes(bb.toLowerCase())
      }(bb) ? 0 : 1
    }
    const cb = {},
      Qb = bb => {
        console.error(bb)
      },
      Rb = function(bb) {
        for (var ub = arguments.length, hb = new Array(ub > 1 ? ub - 1 : 0), Bb = 1; Bb < ub; Bb++) hb[Bb - 1] = arguments[Bb];
        console.log(`WARN: ${bb}`, ...hb)
      },
      bu = (bb, ub) => {
        cb[`${bb}/${ub}`] || (console.log(`Deprecated as of ${bb}. ${ub}`), cb[`${bb}/${ub}`] = !0)
      },
      uu = new Error;

    function hu(bb, ub, hb) {
      let {
        key: Bb
      } = hb, Ob = 0;
      const Gb = bb[Bb],
        Ub = {},
        Lb = {};
      for (let Yb = 1; Yb <= ub.length; Yb++) Lb[Yb + Ob] = Gb[Yb], Ub[Yb + Ob] = !0, Ob += ob(ub[Yb - 1]);
      bb[Bb] = Lb, bb[Bb]._emit = Ub, bb[Bb]._multi = !0
    }

    function Bu(bb) {
      ! function(bb) {
        bb.scope && "object" === typeof bb.scope && null !== bb.scope && (bb.beginScope = bb.scope, delete bb.scope)
      }(bb), "string" === typeof bb.beginScope && (bb.beginScope = {
          _wrap: bb.beginScope
        }), "string" === typeof bb.endScope && (bb.endScope = {
          _wrap: bb.endScope
        }),
        function(bb) {
          if (Array.isArray(bb.kw)) {
            if (bb.skip || bb.excludeBegin || bb.returnBegin) throw Qb("skip, excludeBegin, returnBegin not compatible with beginScope: {}"), uu;
            if ("object" !== typeof bb.beginScope || null === bb.beginScope) throw Qb("beginScope must be object"), uu;
            hu(bb, bb.kw, {
              key: "beginScope"
            }), bb.kw = lb(bb.kw, {
              joinWith: ""
            })
          }
        }(bb),
        function(bb) {
          if (Array.isArray(bb.end)) {
            if (bb.skip || bb.excludeEnd || bb.returnEnd) throw Qb("skip, excludeEnd, returnEnd not compatible with endScope: {}"), uu;
            if ("object" !== typeof bb.endScope || null === bb.endScope) throw Qb("endScope must be object"), uu;
            hu(bb, bb.end, {
              key: "endScope"
            }), bb.end = lb(bb.end, {
              joinWith: ""
            })
          }
        }(bb)
    }

    function Ou(bb) {
      function ub(ub, hb) {
        return new RegExp(ab(ub), "m" + (bb.case_insensitive ? "i" : "") + (bb.unicodeRegex ? "u" : "") + (hb ? "g" : ""))
      }
      class hb {
        constructor() {
          this.matchIndexes = {}, this.regexes = [], this.matchAt = 1, this.position = 0
        }
        addRule(bb, ub) {
          ub.position = this.position++, this.matchIndexes[this.matchAt] = ub, this.regexes.push([ub, bb]), this.matchAt += ob(bb) + 1
        }
        compile() {
          0 === this.regexes.length && (this.exec = () => null);
          const bb = this.regexes.map((bb => bb[1]));
          this.matcherRe = ub(lb(bb, {
            joinWith: "|"
          }), !0), this.lastIndex = 0
        }
        exec(bb) {
          this.matcherRe.lastIndex = this.lastIndex;
          const ub = this.matcherRe.exec(bb);
          if (!ub) return null;
          const hb = ub.findIndex(((bb, ub) => ub > 0 && void 0 !== bb)),
            Bb = this.matchIndexes[hb];
          return ub.splice(0, hb), Object.assign(ub, Bb)
        }
      }
      class Bb {
        constructor() {
          this.rules = [], this.multiRegexes = [], this.count = 0, this.lastIndex = 0, this.regexIndex = 0
        }
        getMatcher(bb) {
          if (this.multiRegexes[bb]) return this.multiRegexes[bb];
          const ub = new hb;
          return this.rules.slice(bb).forEach((bb => {
            let [hb, Bb] = bb;
            return ub.addRule(hb, Bb)
          })), ub.compile(), this.multiRegexes[bb] = ub, ub
        }
        resumingScanAtSamePosition() {
          return 0 !== this.regexIndex
        }
        considerAll() {
          this.regexIndex = 0
        }
        addRule(bb, ub) {
          this.rules.push([bb, ub]), "kw" === ub.type && this.count++
        }
        exec(bb) {
          const ub = this.getMatcher(this.regexIndex);
          ub.lastIndex = this.lastIndex;
          let hb = ub.exec(bb);
          if (this.resumingScanAtSamePosition())
            if (hb && hb.index === this.lastIndex);
            else {
              const ub = this.getMatcher(0);
              ub.lastIndex = this.lastIndex + 1, hb = ub.exec(bb)
            } return hb && (this.regexIndex += hb.position + 1, this.regexIndex === this.count && this.considerAll()), hb
        }
      }
      if (bb.compilerExtensions || (bb.compilerExtensions = []), bb.contains && bb.contains.includes("self")) throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");
      return bb.classNameAliases = Ob(bb.classNameAliases || {}),
        function hb(Gb, Ub) {
          const Lb = Gb;
          if (Gb.isCompiled) return Lb;
          [Pb, yb, Bu, Fb].forEach((bb => bb(Gb, Ub))), bb.compilerExtensions.forEach((bb => bb(Gb, Ub))), Gb.__beforeBegin = null, [qb, Eb, Vb].forEach((bb => bb(Gb, Ub))), Gb.isCompiled = !0;
          let Yb = null;
          return "object" === typeof Gb.keywords && Gb.keywords.$pattern && (Gb.keywords = Object.assign({}, Gb.keywords), Yb = Gb.keywords.$pattern, delete Gb.keywords.$pattern), Yb = Yb || /\w+/, Gb.keywords && (Gb.keywords = kb(Gb.keywords, bb.case_insensitive)), Lb.keywordPatternRe = ub(Yb, !0), Ub && (Gb.kw || (Gb.kw = /\B|\b/), Lb.beginRe = ub(Lb.kw), Gb.end || Gb.endsWithParent || (Gb.end = /\B|\b/), Gb.end && (Lb.endRe = ub(Lb.end)), Lb.terminatorEnd = ab(Lb.end) || "", Gb.endsWithParent && Ub.terminatorEnd && (Lb.terminatorEnd += (Gb.end ? "|" : "") + Ub.terminatorEnd)), Gb.illegal && (Lb.illegalRe = ub(Gb.illegal)), Gb.contains || (Gb.contains = []), Gb.contains = [].concat(...Gb.contains.map((function(bb) {
            return function(bb) {
              bb.variants && !bb.cachedVariants && (bb.cachedVariants = bb.variants.map((function(ub) {
                return Ob(bb, {
                  variants: null
                }, ub)
              })));
              if (bb.cachedVariants) return bb.cachedVariants;
              if (Gu(bb)) return Ob(bb, {
                starts: bb.starts ? Ob(bb.starts) : null
              });
              if (Object.isFrozen(bb)) return Ob(bb);
              return bb
            }("self" === bb ? Gb : bb)
          }))), Gb.contains.forEach((function(bb) {
            hb(bb, Lb)
          })), Gb.starts && hb(Gb.starts, Ub), Lb.matcher = function(bb) {
            const ub = new Bb;
            return bb.contains.forEach((bb => ub.addRule(bb.kw, {
              rule: bb,
              type: "kw"
            }))), bb.terminatorEnd && ub.addRule(bb.terminatorEnd, {
              type: "end"
            }), bb.illegal && ub.addRule(bb.illegal, {
              type: "illegal"
            }), ub
          }(Lb), Lb
        }(bb)
    }

    function Gu(bb) {
      return !!bb && (bb.endsWithParent || Gu(bb.starts))
    }
    class Uu extends Error {
      constructor(bb, ub) {
        super(bb), this.name = "HTMLInjectionError", this.html = ub
      }
    }
    const Lu = Bb,
      Yu = Ob,
      Su = Symbol("nomatch"),
      au = function(bb) {
        const Bb = Object.create(null),
          Ob = Object.create(null),
          Gb = [];
        let Ub = !0;
        const Lb = "Could not find the language '{}', did you forget to load/include a language module?",
          Yb = {
            disableAutodetect: !0,
            name: "Plain text",
            contains: []
          };
        let ab = {
          ignoreUnescapedHTML: !1,
          throwUnescapedHTML: !1,
          noHighlightRe: /^(no-?highlight)$/i,
          languageDetectRe: /\blang(?:uage)?-([\w-]+)\b/i,
          classPrefix: "hljs-",
          cssSelector: "pre code",
          languages: null,
          __emitter: Sb
        };

        function ob(bb) {
          return ab.noHighlightRe.test(bb)
        }

        function Ab(bb, ub, hb) {
          let Bb = "",
            Ob = "";
          "object" === typeof ub ? (Bb = bb, hb = ub.ignoreIllegals, Ob = ub.language) : (bu("10.7.0", "highlight(lang, code, ...args) has been deprecated."), bu("10.7.0", "Please use highlight(code, options) instead.\nhttps://github.com/highlightjs/highlight.js/issues/2277"), Ob = bb, Bb = ub), void 0 === hb && (hb = !0);
          const Gb = {
            code: Bb,
            language: Ob
          };
          Db("before:highlight", Gb);
          const Ub = Gb.result ? Gb.result : lb(Gb.language, Gb.code, hb);
          return Ub.code = Gb.code, Db("after:highlight", Ub), Ub
        }

        function lb(bb, ub, Ob, Gb) {
          const Yb = Object.create(null);

          function Sb() {
            if (!Db.keywords) return void zb.addText(gb);
            let bb = 0;
            Db.keywordPatternRe.lastIndex = 0;
            let ub = Db.keywordPatternRe.exec(gb),
              hb = "";
            for (; ub;) {
              hb += gb.substring(bb, ub.index);
              const Ob = db.case_insensitive ? ub[0].toLowerCase() : ub[0],
                Gb = (Bb = Ob, Db.keywords[Bb]);
              if (Gb) {
                const [bb, Bb] = Gb;
                if (zb.addText(hb), hb = "", Yb[Ob] = (Yb[Ob] || 0) + 1, Yb[Ob] <= 7 && (ib += Bb), bb.startsWith("_")) hb += ub[0];
                else {
                  const hb = db.classNameAliases[bb] || bb;
                  wb(ub[0], hb)
                }
              } else hb += ub[0];
              bb = Db.keywordPatternRe.lastIndex, ub = Db.keywordPatternRe.exec(gb)
            }
            var Bb;
            hb += gb.substring(bb), zb.addText(hb)
          }

          function Hb() {
            null != Db.subLanguage ? function() {
              if ("" === gb) return;
              let bb = null;
              if ("string" === typeof Db.subLanguage) {
                if (!Bb[Db.subLanguage]) return void zb.addText(gb);
                bb = lb(Db.subLanguage, gb, !0, xb[Db.subLanguage]), xb[Db.subLanguage] = bb._top
              } else bb = Kb(gb, Db.subLanguage.length ? Db.subLanguage : null);
              Db.relevance > 0 && (ib += bb.relevance), zb.__addSublanguage(bb._emitter, bb.language)
            }() : Sb(), gb = ""
          }

          function wb(bb, ub) {
            "" !== bb && (zb.startScope(ub), zb.addText(bb), zb.endScope())
          }

          function Zb(bb, ub) {
            let hb = 1;
            const Bb = ub.length - 1;
            for (; hb <= Bb;) {
              if (!bb._emit[hb]) {
                hb++;
                continue
              }
              const Bb = db.classNameAliases[bb[hb]] || bb[hb],
                Ob = ub[hb];
              Bb ? wb(Ob, Bb) : (gb = Ob, Sb(), gb = ""), hb++
            }
          }

          function Xb(bb, ub) {
            return bb.scope && "string" === typeof bb.scope && zb.openNode(db.classNameAliases[bb.scope] || bb.scope), bb.beginScope && (bb.beginScope._wrap ? (wb(gb, db.classNameAliases[bb.beginScope._wrap] || bb.beginScope._wrap), gb = "") : bb.beginScope._multi && (Zb(bb.beginScope, ub), gb = "")), Db = Object.create(bb, {
              parent: {
                value: Db
              }
            }), Db
          }

          function pb(bb, ub, Bb) {
            let Ob = function(bb, ub) {
              const hb = bb && bb.exec(ub);
              return hb && 0 === hb.index
            }(bb.endRe, Bb);
            if (Ob) {
              if (bb["on:end"]) {
                const Bb = new hb(bb);
                bb["on:end"](ub, Bb), Bb.isMatchIgnored && (Ob = !1)
              }
              if (Ob) {
                for (; bb.endsParent && bb.parent;) bb = bb.parent;
                return bb
              }
            }
            if (bb.endsWithParent) return pb(bb.parent, ub, Bb)
          }

          function ob(bb) {
            return 0 === Db.matcher.regexIndex ? (gb += bb[0], 1) : (Jb = !0, 0)
          }

          function Ab(bb) {
            const hb = bb[0],
              Bb = ub.substring(bb.index),
              Ob = pb(Db, bb, Bb);
            if (!Ob) return Su;
            const Gb = Db;
            Db.endScope && Db.endScope._wrap ? (Hb(), wb(hb, Db.endScope._wrap)) : Db.endScope && Db.endScope._multi ? (Hb(), Zb(Db.endScope, bb)) : Gb.skip ? gb += hb : (Gb.returnEnd || Gb.excludeEnd || (gb += hb), Hb(), Gb.excludeEnd && (gb = hb));
            do {
              Db.scope && zb.closeNode(), Db.skip || Db.subLanguage || (ib += Db.relevance), Db = Db.parent
            } while (Db !== Ob.parent);
            return Ob.starts && Xb(Ob.starts, bb), Gb.returnEnd ? 0 : hb.length
          }
          let Wb = {};

          function Cb(Bb, Gb) {
            const Lb = Gb && Gb[0];
            if (gb += Bb, null == Lb) return Hb(), 0;
            if ("kw" === Wb.type && "end" === Gb.type && Wb.index === Gb.index && "" === Lb) {
              if (gb += ub.slice(Gb.index, Gb.index + 1), !Ub) {
                const ub = new Error(`0 width match regex (${bb})`);
                throw ub.languageName = bb, ub.badRule = Wb.rule, ub
              }
              return 1
            }
            if (Wb = Gb, "kw" === Gb.type) return function(bb) {
              const ub = bb[0],
                Bb = bb.rule,
                Ob = new hb(Bb),
                Gb = [Bb.__beforeBegin, Bb["on:begin"]];
              for (const hb of Gb)
                if (hb && (hb(bb, Ob), Ob.isMatchIgnored)) return ob(ub);
              return Bb.skip ? gb += ub : (Bb.excludeBegin && (gb += ub), Hb(), Bb.returnBegin || Bb.excludeBegin || (gb = ub)), Xb(Bb, bb), Bb.returnBegin ? 0 : ub.length
            }(Gb);
            if ("illegal" === Gb.type && !Ob) {
              const bb = new Error('Illegal lexeme "' + Lb + '" for mode "' + (Db.scope || "<unnamed>") + '"');
              throw bb.mode = Db, bb
            }
            if ("end" === Gb.type) {
              const bb = Ab(Gb);
              if (bb !== Su) return bb
            }
            if ("illegal" === Gb.type && "" === Lb) return gb += "\n", 1;
            if (tb > 1e5 && tb > 3 * Gb.index) {
              throw new Error("potential infinite loop, way more iterations than matches")
            }
            return gb += Lb, Lb.length
          }
          const db = rb(bb);
          if (!db) throw Qb(Lb.replace("{}", bb)), new Error('Unknown language: "' + bb + '"');
          const jb = Ou(db);
          let nb = "",
            Db = Gb || jb;
          const xb = {},
            zb = new ab.__emitter(ab);
          ! function() {
            const bb = [];
            for (let ub = Db; ub !== db; ub = ub.parent) ub.scope && bb.unshift(ub.scope);
            bb.forEach((bb => zb.openNode(bb)))
          }();
          let gb = "",
            ib = 0,
            vb = 0,
            tb = 0,
            Jb = !1;
          try {
            if (db.__emitTokens) db.__emitTokens(ub, zb);
            else {
              for (Db.matcher.considerAll();;) {
                tb++, Jb ? Jb = !1 : Db.matcher.considerAll(), Db.matcher.lastIndex = vb;
                const bb = Db.matcher.exec(ub);
                if (!bb) break;
                const hb = Cb(ub.substring(vb, bb.index), bb);
                vb = bb.index + hb
              }
              Cb(ub.substring(vb))
            }
            return zb.finalize(), nb = zb.toHTML(), {
              language: bb,
              value: nb,
              relevance: ib,
              illegal: !1,
              _emitter: zb,
              _top: Db
            }
          } catch (eb) {
            if (eb.message && eb.message.includes("Illegal")) return {
              language: bb,
              value: Lu(ub),
              illegal: !0,
              relevance: 0,
              _illegalBy: {
                message: eb.message,
                index: vb,
                context: ub.slice(vb - 100, vb + 100),
                mode: eb.mode,
                resultSoFar: nb
              },
              _emitter: zb
            };
            if (Ub) return {
              language: bb,
              value: Lu(ub),
              illegal: !1,
              relevance: 0,
              errorRaised: eb,
              _emitter: zb,
              _top: Db
            };
            throw eb
          }
        }

        function Kb(bb, ub) {
          ub = ub || ab.languages || Object.keys(Bb);
          const hb = function(bb) {
              const ub = {
                value: Lu(bb),
                illegal: !1,
                relevance: 0,
                _top: Yb,
                _emitter: new ab.__emitter(ab)
              };
              return ub._emitter.addText(bb), ub
            }(bb),
            Ob = ub.filter(rb).filter(nb).map((ub => lb(ub, bb, !1)));
          Ob.unshift(hb);
          const Gb = Ob.sort(((bb, ub) => {
              if (bb.relevance !== ub.relevance) return ub.relevance - bb.relevance;
              if (bb.language && ub.language) {
                if (rb(bb.language).supersetOf === ub.language) return 1;
                if (rb(ub.language).supersetOf === bb.language) return -1
              }
              return 0
            })),
            [Ub, Lb] = Gb,
            Sb = Ub;
          return Sb.secondBest = Lb, Sb
        }

        function Wb(bb) {
          let ub = null;
          const hb = function(bb) {
            let ub = bb.className + " ";
            ub += bb.parentNode ? bb.parentNode.className : "";
            const hb = ab.languageDetectRe.exec(ub);
            if (hb) {
              const ub = rb(hb[1]);
              return ub || (Rb(Lb.replace("{}", hb[1])), Rb("Falling back to no-highlight mode for this block.", bb)), ub ? hb[1] : "no-highlight"
            }
            return ub.split(/\s+/).find((bb => ob(bb) || rb(bb)))
          }(bb);
          if (ob(hb)) return;
          if (Db("before:highlightElement", {
              el: bb,
              language: hb
            }), bb.dataset.highlighted) return void console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.", bb);
          if (bb.children.length > 0 && (ab.ignoreUnescapedHTML || (console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."), console.warn("https://github.com/highlightjs/highlight.js/wiki/security"), console.warn("The element with unescaped HTML:"), console.warn(bb)), ab.throwUnescapedHTML)) {
            throw new Uu("One of your code blocks includes unescaped HTML.", bb.innerHTML)
          }
          ub = bb;
          const Bb = ub.textContent,
            Gb = hb ? Ab(Bb, {
              language: hb,
              ignoreIllegals: !0
            }) : Kb(Bb);
          bb.innerHTML = Gb.value, bb.dataset.highlighted = "yes",
            function(bb, ub, hb) {
              const Bb = ub && Ob[ub] || hb;
              bb.classList.add("hljs"), bb.classList.add(`language-${Bb}`)
            }(bb, hb, Gb.language), bb.result = {
              language: Gb.language,
              re: Gb.relevance,
              relevance: Gb.relevance
            }, Gb.secondBest && (bb.secondBest = {
              language: Gb.secondBest.language,
              relevance: Gb.secondBest.relevance
            }), Db("after:highlightElement", {
              el: bb,
              result: Gb,
              text: Bb
            })
        }
        let Cb = !1;

        function db() {
          if ("loading" === document.readyState) return Cb || window.addEventListener("DOMContentLoaded", (function() {
            db()
          }), !1), void(Cb = !0);
          document.querySelectorAll(ab.cssSelector).forEach(Wb)
        }

        function rb(bb) {
          return bb = (bb || "").toLowerCase(), Bb[bb] || Bb[Ob[bb]]
        }

        function jb(bb, ub) {
          let {
            languageName: hb
          } = ub;
          "string" === typeof bb && (bb = [bb]), bb.forEach((bb => {
            Ob[bb.toLowerCase()] = hb
          }))
        }

        function nb(bb) {
          const ub = rb(bb);
          return ub && !ub.disableAutodetect
        }

        function Db(bb, ub) {
          const hb = bb;
          Gb.forEach((function(bb) {
            bb[hb] && bb[hb](ub)
          }))
        }
        Object.assign(bb, {
          highlight: Ab,
          highlightAuto: Kb,
          highlightAll: db,
          highlightElement: Wb,
          highlightBlock: function(bb) {
            return bu("10.7.0", "highlightBlock will be removed entirely in v12.0"), bu("10.7.0", "Please use highlightElement now."), Wb(bb)
          },
          configure: function(bb) {
            ab = Yu(ab, bb)
          },
          initHighlighting: () => {
            db(), bu("10.6.0", "initHighlighting() deprecated.  Use highlightAll() now.")
          },
          initHighlightingOnLoad: function() {
            db(), bu("10.6.0", "initHighlightingOnLoad() deprecated.  Use highlightAll() now.")
          },
          registerLanguage: function(ub, hb) {
            let Ob = null;
            try {
              Ob = hb(bb)
            } catch (Gb) {
              if (Qb("Language definition for '{}' could not be registered.".replace("{}", ub)), !Ub) throw Gb;
              Qb(Gb), Ob = Yb
            }
            Ob.name || (Ob.name = ub), Bb[ub] = Ob, Ob.rawDefinition = hb.bind(null, bb), Ob.aliases && jb(Ob.aliases, {
              languageName: ub
            })
          },
          unregisterLanguage: function(bb) {
            delete Bb[bb];
            for (const ub of Object.keys(Ob)) Ob[ub] === bb && delete Ob[ub]
          },
          listLanguages: function() {
            return Object.keys(Bb)
          },
          getLanguage: rb,
          registerAliases: jb,
          autoDetection: nb,
          inherit: Yu,
          addPlugin: function(bb) {
            ! function(bb) {
              bb["before:highlightBlock"] && !bb["before:highlightElement"] && (bb["before:highlightElement"] = ub => {
                bb["before:highlightBlock"](Object.assign({
                  block: ub.el
                }, ub))
              }), bb["after:highlightBlock"] && !bb["after:highlightElement"] && (bb["after:highlightElement"] = ub => {
                bb["after:highlightBlock"](Object.assign({
                  block: ub.el
                }, ub))
              })
            }(bb), Gb.push(bb)
          },
          removePlugin: function(bb) {
            const ub = Gb.indexOf(bb); - 1 !== ub && Gb.splice(ub, 1)
          }
        }), bb.debugMode = function() {
          Ub = !1
        }, bb.safeMode = function() {
          Ub = !0
        }, bb.versionString = "11.11.1", bb.regex = {
          concat: Xb,
          lookahead: Hb,
          either: pb,
          optional: Zb,
          anyNumberOfTimes: wb
        };
        for (const hb in mb) "object" === typeof mb[hb] && ub(mb[hb]);
        return Object.assign(bb, mb), bb
      },
      Hu = au({});
    Hu.newInstance = () => au({}), bb.exports = Hu, Hu.HighlightJS = Hu, Hu.default = Hu
  },
  4481: (bb, ub, hb) => {
    hb.d(ub, {
      c: () => Bb
    });
    const Bb = hb(4485)
  },
  4493: (bb, ub, hb) => {
    hb.d(ub, {
      e: () => Hb
    });
    const Bb = "[A-Za-z$_][0-9A-Za-z$_]*",
      Ob = ["as", "in", "of", "if", "for", "while", "finally", "var", "new", "function", "do", "return", "void", "else", "break", "catch", "instanceof", "with", "throw", "case", "default", "try", "switch", "continue", "typeof", "delete", "let", "yield", "const", "class", "debugger", "async", "await", "static", "import", "from", "export", "extends", "using"],
      Gb = ["true", "false", "null", "undefined", "NaN", "Infinity"],
      Ub = ["Object", "Function", "Boolean", "Symbol", "Math", "Date", "Number", "BigInt", "String", "RegExp", "Array", "Float32Array", "Float64Array", "Int8Array", "Uint8Array", "Uint8ClampedArray", "Int16Array", "Int32Array", "Uint16Array", "Uint32Array", "BigInt64Array", "BigUint64Array", "Set", "Map", "WeakSet", "WeakMap", "ArrayBuffer", "SharedArrayBuffer", "Atomics", "DataView", "JSON", "Promise", "Generator", "GeneratorFunction", "AsyncFunction", "Reflect", "Proxy", "Intl", "WebAssembly"],
      Lb = ["Error", "EvalError", "InternalError", "RangeError", "ReferenceError", "SyntaxError", "TypeError", "URIError"],
      Yb = ["setInterval", "setTimeout", "clearInterval", "clearTimeout", "require", "exports", "eval", "isFinite", "isNaN", "parseFloat", "parseInt", "decodeURI", "decodeURIComponent", "encodeURI", "encodeURIComponent", "escape", "unescape"],
      Sb = ["arguments", "this", "super", "console", "window", "document", "localStorage", "sessionStorage", "module", "global"],
      ab = [].concat(Yb, Ub, Lb);

    function Hb(bb) {
      const ub = bb.regex,
        hb = Bb,
        Hb = "<>",
        wb = "</>",
        Zb = {
          kw: /<[A-Za-z0-9\\._:-]+/,
          end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
          isTrulyOpeningTag: (bb, ub) => {
            const hb = bb[0].length + bb.index,
              Bb = bb.input[hb];
            if ("<" === Bb || "," === Bb) return void ub.ignoreMatch();
            let Ob;
            ">" === Bb && (((bb, ub) => {
              let {
                after: hb
              } = ub;
              const Bb = "</" + bb[0].slice(1);
              return -1 !== bb.input.indexOf(Bb, hb)
            })(bb, {
              after: hb
            }) || ub.ignoreMatch());
            const Gb = bb.input.substring(hb);
            ((Ob = Gb.match(/^\s*=/)) || (Ob = Gb.match(/^\s+extends\s+/)) && 0 === Ob.index) && ub.ignoreMatch()
          }
        },
        Xb = {
          $pattern: Bb,
          keyword: Ob,
          literal: Gb,
          built_in: ab,
          "variable.language": Sb
        },
        pb = "[0-9](_?[0-9])*",
        ob = `\\.(${pb})`,
        Ab = "0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",
        lb = {
          className: "number",
          variants: [{
            kw: `(\\b(${Ab})((${ob})|\\.)?|(${ob}))[eE][+-]?(${pb})\\b`
          }, {
            kw: `\\b(${Ab})\\b((${ob})\\b|\\.)?|(${ob})\\b`
          }, {
            kw: "\\b(0|[1-9](_?[0-9])*)n\\b"
          }, {
            kw: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"
          }, {
            kw: "\\b0[bB][0-1](_?[0-1])*n?\\b"
          }, {
            kw: "\\b0[oO][0-7](_?[0-7])*n?\\b"
          }, {
            kw: "\\b0[0-7]+n?\\b"
          }],
          relevance: 0
        },
        Kb = {
          className: "subst",
          kw: "\\$\\{",
          end: "\\}",
          keywords: Xb,
          contains: []
        },
        Wb = {
          kw: ".?html`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [bb.BACKSLASH_ESCAPE, Kb],
            subLanguage: "xml"
          }
        },
        Cb = {
          kw: ".?css`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [bb.BACKSLASH_ESCAPE, Kb],
            subLanguage: "css"
          }
        },
        db = {
          kw: ".?gql`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [bb.BACKSLASH_ESCAPE, Kb],
            subLanguage: "graphql"
          }
        },
        rb = {
          className: "string",
          kw: "`",
          end: "`",
          contains: [bb.BACKSLASH_ESCAPE, Kb]
        },
        jb = {
          className: "comment",
          variants: [bb.COMMENT(/\/\*\*(?!\/)/, "\\*/", {
            relevance: 0,
            contains: [{
              kw: "(?=@[A-Za-z]+)",
              relevance: 0,
              contains: [{
                className: "doctag",
                kw: "@[A-Za-z]+"
              }, {
                className: "type",
                kw: "\\{",
                end: "\\}",
                excludeEnd: !0,
                excludeBegin: !0,
                relevance: 0
              }, {
                className: "variable",
                kw: hb + "(?=\\s*(-)|$)",
                endsParent: !0,
                relevance: 0
              }, {
                kw: /(?=[^\n])\s/,
                relevance: 0
              }]
            }]
          }), bb.C_BLOCK_COMMENT_MODE, bb.C_LINE_COMMENT_MODE]
        },
        nb = [bb.APOS_STRING_MODE, bb.QUOTE_STRING_MODE, Wb, Cb, db, rb, {
          match: /\$\d+/
        }, lb];
      Kb.contains = nb.concat({
        kw: /\{/,
        end: /\}/,
        keywords: Xb,
        contains: ["self"].concat(nb)
      });
      const Db = [].concat(jb, Kb.contains),
        xb = Db.concat([{
          kw: /(\s*)\(/,
          end: /\)/,
          keywords: Xb,
          contains: ["self"].concat(Db)
        }]),
        zb = {
          className: "params",
          kw: /(\s*)\(/,
          end: /\)/,
          excludeBegin: !0,
          excludeEnd: !0,
          keywords: Xb,
          contains: xb
        },
        gb = {
          variants: [{
            match: [/class/, /\s+/, hb, /\s+/, /extends/, /\s+/, ub.concat(hb, "(", ub.concat(/\./, hb), ")*")],
            scope: {
              1: "keyword",
              3: "title.class",
              5: "keyword",
              7: "title.class.inherited"
            }
          }, {
            match: [/class/, /\s+/, hb],
            scope: {
              1: "keyword",
              3: "title.class"
            }
          }]
        },
        ib = {
          relevance: 0,
          match: ub.either(/\bJSON/, /\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/, /\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/, /\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),
          className: "title.class",
          keywords: {
            _: [...Ub, ...Lb]
          }
        },
        vb = {
          variants: [{
            match: [/function/, /\s+/, hb, /(?=\s*\()/]
          }, {
            match: [/function/, /\s*(?=\()/]
          }],
          className: {
            1: "keyword",
            3: "title.function"
          },
          label: "func.def",
          contains: [zb],
          illegal: /%/
        };
      const tb = {
        match: ub.concat(/\b/, (Jb = [...Yb, "super", "import"].map((bb => `${bb}\\s*\\(`)), ub.concat("(?!", Jb.join("|"), ")")), hb, ub.lookahead(/\s*\(/)),
        className: "title.function",
        relevance: 0
      };
      var Jb;
      const eb = {
          kw: ub.concat(/\./, ub.lookahead(ub.concat(hb, /(?![0-9A-Za-z$_(])/))),
          end: hb,
          excludeBegin: !0,
          keywords: "prototype",
          className: "property",
          relevance: 0
        },
        Nb = {
          match: [/get|set/, /\s+/, hb, /(?=\()/],
          className: {
            1: "keyword",
            3: "title.function"
          },
          contains: [{
            kw: /\(\)/
          }, zb]
        },
        sb = "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" + bb.UNDERSCORE_IDENT_RE + ")\\s*=>",
        Mb = {
          match: [/const|var|let/, /\s+/, hb, /\s*/, /=\s*/, /(async\s*)?/, ub.lookahead(sb)],
          keywords: "async",
          className: {
            1: "keyword",
            3: "title.function"
          },
          contains: [zb]
        };
      return {
        name: "JavaScript",
        aliases: ["js", "jsx", "mjs", "cjs"],
        keywords: Xb,
        exports: {
          PARAMS_CONTAINS: xb,
          CLASS_REFERENCE: ib
        },
        illegal: /#(?![$_A-z])/,
        contains: [bb.SHEBANG({
          label: "shebang",
          binary: "node",
          relevance: 5
        }), {
          label: "use_strict",
          className: "meta",
          relevance: 10,
          kw: /^\s*['"]use (strict|asm)['"]/
        }, bb.APOS_STRING_MODE, bb.QUOTE_STRING_MODE, Wb, Cb, db, rb, jb, {
          match: /\$\d+/
        }, lb, ib, {
          scope: "attr",
          match: hb + ub.lookahead(":"),
          relevance: 0
        }, Mb, {
          kw: "(" + bb.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
          keywords: "return throw case",
          relevance: 0,
          contains: [jb, bb.REGEXP_MODE, {
            className: "function",
            kw: sb,
            returnBegin: !0,
            end: "\\s*=>",
            contains: [{
              className: "params",
              variants: [{
                kw: bb.UNDERSCORE_IDENT_RE,
                relevance: 0
              }, {
                className: null,
                kw: /\(\s*\)/,
                skip: !0
              }, {
                kw: /(\s*)\(/,
                end: /\)/,
                excludeBegin: !0,
                excludeEnd: !0,
                keywords: Xb,
                contains: xb
              }]
            }]
          }, {
            kw: /,/,
            relevance: 0
          }, {
            match: /\s+/,
            relevance: 0
          }, {
            variants: [{
              kw: Hb,
              end: wb
            }, {
              match: /<[A-Za-z0-9\\._:-]+\s*\/>/
            }, {
              kw: Zb.kw,
              "on:begin": Zb.isTrulyOpeningTag,
              end: Zb.end
            }],
            subLanguage: "xml",
            contains: [{
              kw: Zb.kw,
              end: Zb.end,
              skip: !0,
              contains: ["self"]
            }]
          }]
        }, vb, {
          beginKeywords: "while if switch catch for"
        }, {
          kw: "\\b(?!function)" + bb.UNDERSCORE_IDENT_RE + "\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
          returnBegin: !0,
          label: "func.def",
          contains: [zb, bb.inherit(bb.TITLE_MODE, {
            kw: hb,
            className: "title.function"
          })]
        }, {
          match: /\.\.\./,
          relevance: 0
        }, eb, {
          match: "\\$" + hb,
          relevance: 0
        }, {
          match: [/\bconstructor(?=\s*\()/],
          className: {
            1: "title.function"
          },
          contains: [zb]
        }, tb, {
          relevance: 0,
          match: /\b[A-Z][A-Z_0-9]+\b/,
          className: "variable.constant"
        }, gb, Nb, {
          match: /\$[(.]/
        }]
      }
    }
  },
  4502: (bb, ub, hb) => {
    hb.d(ub, {
      d: () => wb
    });
    const Bb = "[A-Za-z$_][0-9A-Za-z$_]*",
      Ob = ["as", "in", "of", "if", "for", "while", "finally", "var", "new", "function", "do", "return", "void", "else", "break", "catch", "instanceof", "with", "throw", "case", "default", "try", "switch", "continue", "typeof", "delete", "let", "yield", "const", "class", "debugger", "async", "await", "static", "import", "from", "export", "extends", "using"],
      Gb = ["true", "false", "null", "undefined", "NaN", "Infinity"],
      Ub = ["Object", "Function", "Boolean", "Symbol", "Math", "Date", "Number", "BigInt", "String", "RegExp", "Array", "Float32Array", "Float64Array", "Int8Array", "Uint8Array", "Uint8ClampedArray", "Int16Array", "Int32Array", "Uint16Array", "Uint32Array", "BigInt64Array", "BigUint64Array", "Set", "Map", "WeakSet", "WeakMap", "ArrayBuffer", "SharedArrayBuffer", "Atomics", "DataView", "JSON", "Promise", "Generator", "GeneratorFunction", "AsyncFunction", "Reflect", "Proxy", "Intl", "WebAssembly"],
      Lb = ["Error", "EvalError", "InternalError", "RangeError", "ReferenceError", "SyntaxError", "TypeError", "URIError"],
      Yb = ["setInterval", "setTimeout", "clearInterval", "clearTimeout", "require", "exports", "eval", "isFinite", "isNaN", "parseFloat", "parseInt", "decodeURI", "decodeURIComponent", "encodeURI", "encodeURIComponent", "escape", "unescape"],
      Sb = ["arguments", "this", "super", "console", "window", "document", "localStorage", "sessionStorage", "module", "global"],
      ab = [].concat(Yb, Ub, Lb);

    function Hb(bb) {
      const ub = bb.regex,
        hb = Bb,
        Hb = "<>",
        wb = "</>",
        Zb = {
          kw: /<[A-Za-z0-9\\._:-]+/,
          end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
          isTrulyOpeningTag: (bb, ub) => {
            const hb = bb[0].length + bb.index,
              Bb = bb.input[hb];
            if ("<" === Bb || "," === Bb) return void ub.ignoreMatch();
            let Ob;
            ">" === Bb && (((bb, ub) => {
              let {
                after: hb
              } = ub;
              const Bb = "</" + bb[0].slice(1);
              return -1 !== bb.input.indexOf(Bb, hb)
            })(bb, {
              after: hb
            }) || ub.ignoreMatch());
            const Gb = bb.input.substring(hb);
            ((Ob = Gb.match(/^\s*=/)) || (Ob = Gb.match(/^\s+extends\s+/)) && 0 === Ob.index) && ub.ignoreMatch()
          }
        },
        Xb = {
          $pattern: Bb,
          keyword: Ob,
          literal: Gb,
          built_in: ab,
          "variable.language": Sb
        },
        pb = "[0-9](_?[0-9])*",
        ob = `\\.(${pb})`,
        Ab = "0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",
        lb = {
          className: "number",
          variants: [{
            kw: `(\\b(${Ab})((${ob})|\\.)?|(${ob}))[eE][+-]?(${pb})\\b`
          }, {
            kw: `\\b(${Ab})\\b((${ob})\\b|\\.)?|(${ob})\\b`
          }, {
            kw: "\\b(0|[1-9](_?[0-9])*)n\\b"
          }, {
            kw: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"
          }, {
            kw: "\\b0[bB][0-1](_?[0-1])*n?\\b"
          }, {
            kw: "\\b0[oO][0-7](_?[0-7])*n?\\b"
          }, {
            kw: "\\b0[0-7]+n?\\b"
          }],
          relevance: 0
        },
        Kb = {
          className: "subst",
          kw: "\\$\\{",
          end: "\\}",
          keywords: Xb,
          contains: []
        },
        Wb = {
          kw: ".?html`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [bb.BACKSLASH_ESCAPE, Kb],
            subLanguage: "xml"
          }
        },
        Cb = {
          kw: ".?css`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [bb.BACKSLASH_ESCAPE, Kb],
            subLanguage: "css"
          }
        },
        db = {
          kw: ".?gql`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [bb.BACKSLASH_ESCAPE, Kb],
            subLanguage: "graphql"
          }
        },
        rb = {
          className: "string",
          kw: "`",
          end: "`",
          contains: [bb.BACKSLASH_ESCAPE, Kb]
        },
        jb = {
          className: "comment",
          variants: [bb.COMMENT(/\/\*\*(?!\/)/, "\\*/", {
            relevance: 0,
            contains: [{
              kw: "(?=@[A-Za-z]+)",
              relevance: 0,
              contains: [{
                className: "doctag",
                kw: "@[A-Za-z]+"
              }, {
                className: "type",
                kw: "\\{",
                end: "\\}",
                excludeEnd: !0,
                excludeBegin: !0,
                relevance: 0
              }, {
                className: "variable",
                kw: hb + "(?=\\s*(-)|$)",
                endsParent: !0,
                relevance: 0
              }, {
                kw: /(?=[^\n])\s/,
                relevance: 0
              }]
            }]
          }), bb.C_BLOCK_COMMENT_MODE, bb.C_LINE_COMMENT_MODE]
        },
        nb = [bb.APOS_STRING_MODE, bb.QUOTE_STRING_MODE, Wb, Cb, db, rb, {
          match: /\$\d+/
        }, lb];
      Kb.contains = nb.concat({
        kw: /\{/,
        end: /\}/,
        keywords: Xb,
        contains: ["self"].concat(nb)
      });
      const Db = [].concat(jb, Kb.contains),
        xb = Db.concat([{
          kw: /(\s*)\(/,
          end: /\)/,
          keywords: Xb,
          contains: ["self"].concat(Db)
        }]),
        zb = {
          className: "params",
          kw: /(\s*)\(/,
          end: /\)/,
          excludeBegin: !0,
          excludeEnd: !0,
          keywords: Xb,
          contains: xb
        },
        gb = {
          variants: [{
            match: [/class/, /\s+/, hb, /\s+/, /extends/, /\s+/, ub.concat(hb, "(", ub.concat(/\./, hb), ")*")],
            scope: {
              1: "keyword",
              3: "title.class",
              5: "keyword",
              7: "title.class.inherited"
            }
          }, {
            match: [/class/, /\s+/, hb],
            scope: {
              1: "keyword",
              3: "title.class"
            }
          }]
        },
        ib = {
          relevance: 0,
          match: ub.either(/\bJSON/, /\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/, /\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/, /\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),
          className: "title.class",
          keywords: {
            _: [...Ub, ...Lb]
          }
        },
        vb = {
          variants: [{
            match: [/function/, /\s+/, hb, /(?=\s*\()/]
          }, {
            match: [/function/, /\s*(?=\()/]
          }],
          className: {
            1: "keyword",
            3: "title.function"
          },
          label: "func.def",
          contains: [zb],
          illegal: /%/
        };
      const tb = {
        match: ub.concat(/\b/, (Jb = [...Yb, "super", "import"].map((bb => `${bb}\\s*\\(`)), ub.concat("(?!", Jb.join("|"), ")")), hb, ub.lookahead(/\s*\(/)),
        className: "title.function",
        relevance: 0
      };
      var Jb;
      const eb = {
          kw: ub.concat(/\./, ub.lookahead(ub.concat(hb, /(?![0-9A-Za-z$_(])/))),
          end: hb,
          excludeBegin: !0,
          keywords: "prototype",
          className: "property",
          relevance: 0
        },
        Nb = {
          match: [/get|set/, /\s+/, hb, /(?=\()/],
          className: {
            1: "keyword",
            3: "title.function"
          },
          contains: [{
            kw: /\(\)/
          }, zb]
        },
        sb = "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" + bb.UNDERSCORE_IDENT_RE + ")\\s*=>",
        Mb = {
          match: [/const|var|let/, /\s+/, hb, /\s*/, /=\s*/, /(async\s*)?/, ub.lookahead(sb)],
          keywords: "async",
          className: {
            1: "keyword",
            3: "title.function"
          },
          contains: [zb]
        };
      return {
        name: "JavaScript",
        aliases: ["js", "jsx", "mjs", "cjs"],
        keywords: Xb,
        exports: {
          PARAMS_CONTAINS: xb,
          CLASS_REFERENCE: ib
        },
        illegal: /#(?![$_A-z])/,
        contains: [bb.SHEBANG({
          label: "shebang",
          binary: "node",
          relevance: 5
        }), {
          label: "use_strict",
          className: "meta",
          relevance: 10,
          kw: /^\s*['"]use (strict|asm)['"]/
        }, bb.APOS_STRING_MODE, bb.QUOTE_STRING_MODE, Wb, Cb, db, rb, jb, {
          match: /\$\d+/
        }, lb, ib, {
          scope: "attr",
          match: hb + ub.lookahead(":"),
          relevance: 0
        }, Mb, {
          kw: "(" + bb.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
          keywords: "return throw case",
          relevance: 0,
          contains: [jb, bb.REGEXP_MODE, {
            className: "function",
            kw: sb,
            returnBegin: !0,
            end: "\\s*=>",
            contains: [{
              className: "params",
              variants: [{
                kw: bb.UNDERSCORE_IDENT_RE,
                relevance: 0
              }, {
                className: null,
                kw: /\(\s*\)/,
                skip: !0
              }, {
                kw: /(\s*)\(/,
                end: /\)/,
                excludeBegin: !0,
                excludeEnd: !0,
                keywords: Xb,
                contains: xb
              }]
            }]
          }, {
            kw: /,/,
            relevance: 0
          }, {
            match: /\s+/,
            relevance: 0
          }, {
            variants: [{
              kw: Hb,
              end: wb
            }, {
              match: /<[A-Za-z0-9\\._:-]+\s*\/>/
            }, {
              kw: Zb.kw,
              "on:begin": Zb.isTrulyOpeningTag,
              end: Zb.end
            }],
            subLanguage: "xml",
            contains: [{
              kw: Zb.kw,
              end: Zb.end,
              skip: !0,
              contains: ["self"]
            }]
          }]
        }, vb, {
          beginKeywords: "while if switch catch for"
        }, {
          kw: "\\b(?!function)" + bb.UNDERSCORE_IDENT_RE + "\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
          returnBegin: !0,
          label: "func.def",
          contains: [zb, bb.inherit(bb.TITLE_MODE, {
            kw: hb,
            className: "title.function"
          })]
        }, {
          match: /\.\.\./,
          relevance: 0
        }, eb, {
          match: "\\$" + hb,
          relevance: 0
        }, {
          match: [/\bconstructor(?=\s*\()/],
          className: {
            1: "title.function"
          },
          contains: [zb]
        }, tb, {
          relevance: 0,
          match: /\b[A-Z][A-Z_0-9]+\b/,
          className: "variable.constant"
        }, gb, Nb, {
          match: /\$[(.]/
        }]
      }
    }

    function wb(bb) {
      const ub = bb.regex,
        hb = Hb(bb),
        Ub = Bb,
        Lb = ["any", "void", "number", "boolean", "string", "object", "never", "symbol", "bigint", "unknown"],
        Yb = {
          kw: [/namespace/, /\s+/, bb.IDENT_RE],
          beginScope: {
            1: "keyword",
            3: "title.class"
          }
        },
        wb = {
          beginKeywords: "interface",
          end: /\{/,
          excludeEnd: !0,
          keywords: {
            keyword: "interface extends",
            built_in: Lb
          },
          contains: [hb.exports.CLASS_REFERENCE]
        },
        Zb = {
          $pattern: Bb,
          keyword: Ob.concat(["type", "interface", "public", "private", "protected", "implements", "declare", "abstract", "readonly", "enum", "override", "satisfies"]),
          literal: Gb,
          built_in: ab.concat(Lb),
          "variable.language": Sb
        },
        Xb = {
          className: "meta",
          kw: "@" + Ub
        },
        pb = (bb, ub, hb) => {
          const Bb = bb.contains.findIndex((bb => bb.label === ub));
          if (-1 === Bb) throw new Error("can not find mode to replace");
          bb.contains.splice(Bb, 1, hb)
        };
      Object.assign(hb.keywords, Zb), hb.exports.PARAMS_CONTAINS.push(Xb);
      const ob = hb.contains.find((bb => "attr" === bb.scope)),
        Ab = Object.assign({}, ob, {
          match: ub.concat(Ub, ub.lookahead(/\s*\?:/))
        });
      hb.exports.PARAMS_CONTAINS.push([hb.exports.CLASS_REFERENCE, ob, Ab]), hb.contains = hb.contains.concat([Xb, Yb, wb, Ab]), pb(hb, "shebang", bb.SHEBANG()), pb(hb, "use_strict", {
        className: "meta",
        relevance: 10,
        kw: /^\s*['"]use strict['"]/
      });
      return hb.contains.find((bb => "func.def" === bb.label)).relevance = 0, Object.assign(hb, {
        name: "TypeScript",
        aliases: ["ts", "tsx", "mts", "cts"]
      }), hb
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);