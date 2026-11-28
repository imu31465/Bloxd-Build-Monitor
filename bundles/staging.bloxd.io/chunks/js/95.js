export const id = 95;
export const ids = [95];
export const modules = {
  5616: bb => {
    function wb(bb) {
      return bb instanceof Map ? bb.clear = bb.delete = bb.set = function() {
        throw new Error("map is read-only")
      } : bb instanceof Set && (bb.add = bb.clear = bb.delete = function() {
        throw new Error("set is read-only")
      }), Object.freeze(bb), Object.getOwnPropertyNames(bb).forEach((Mb => {
        const eb = bb[Mb],
          Hb = typeof eb;
        "object" !== Hb && "function" !== Hb || Object.isFrozen(eb) || wb(eb)
      })), bb
    }
    class Mb {
      constructor(bb) {
        void 0 === bb.data && (bb.data = {}), this.data = bb.data, this.isMatchIgnored = !1
      }
      ignoreMatch() {
        this.isMatchIgnored = !0
      }
    }

    function eb(bb) {
      return bb.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;")
    }

    function Hb(bb) {
      const wb = Object.create(null);
      for (const pb in bb) wb[pb] = bb[pb];
      for (var Mb = arguments.length, eb = new Array(Mb > 1 ? Mb - 1 : 0), Hb = 1; Hb < Mb; Hb++) eb[Hb - 1] = arguments[Hb];
      return eb.forEach((function(bb) {
        for (const Mb in bb) wb[Mb] = bb[Mb]
      })), wb
    }
    const pb = bb => !!bb.scope;
    class Vb {
      constructor(bb, wb) {
        this.buffer = "", this.classPrefix = wb.classPrefix, bb.walk(this)
      }
      addText(bb) {
        this.buffer += eb(bb)
      }
      openNode(bb) {
        if (!pb(bb)) return;
        const wb = ((bb, wb) => {
          let {
            prefix: Mb
          } = wb;
          if (bb.startsWith("language:")) return bb.replace("language:", "language-");
          if (bb.includes(".")) {
            const wb = bb.split(".");
            return [`${Mb}${wb.shift()}`, ...wb.map(((bb, wb) => `${bb}${"_".repeat(wb+1)}`))].join(" ")
          }
          return `${Mb}${bb}`
        })(bb.scope, {
          prefix: this.classPrefix
        });
        this.span(wb)
      }
      closeNode(bb) {
        pb(bb) && (this.buffer += "</span>")
      }
      value() {
        return this.buffer
      }
      span(bb) {
        this.buffer += `<span class="${bb}">`
      }
    }
    const gb = function() {
      let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      const wb = {
        children: []
      };
      return Object.assign(wb, bb), wb
    };
    class lb {
      constructor() {
        this.Jm = gb(), this.stack = [this.Jm]
      }
      get top() {
        return this.stack[this.stack.length - 1]
      }
      get root() {
        return this.Jm
      }
      add(bb) {
        this.top.children.push(bb)
      }
      openNode(bb) {
        const wb = gb({
          scope: bb
        });
        this.add(wb), this.stack.push(wb)
      }
      closeNode() {
        if (this.stack.length > 1) return this.stack.pop()
      }
      closeAllNodes() {
        for (; this.closeNode(););
      }
      toJSON() {
        return JSON.stringify(this.Jm, null, 4)
      }
      walk(bb) {
        return this.constructor._walk(bb, this.Jm)
      }
      static _walk(bb, wb) {
        return "string" === typeof wb ? bb.addText(wb) : wb.children && (bb.openNode(wb), wb.children.forEach((wb => this._walk(bb, wb))), bb.closeNode(wb)), bb
      }
      static _collapse(bb) {
        "string" !== typeof bb && bb.children && (bb.children.every((bb => "string" === typeof bb)) ? bb.children = [bb.children.join("")] : bb.children.forEach((bb => {
          lb._collapse(bb)
        })))
      }
    }
    class Lb extends lb {
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
      __addSublanguage(bb, wb) {
        const Mb = bb.root;
        wb && (Mb.scope = `language:${wb}`), this.add(Mb)
      }
      toHTML() {
        return new Vb(this, this.options).value()
      }
      finalize() {
        return this.closeAllNodes(), !0
      }
    }

    function Ib(bb) {
      return bb ? "string" === typeof bb ? bb : bb.source : null
    }

    function Ob(bb) {
      return Cb("(?=", bb, ")")
    }

    function Ub(bb) {
      return Cb("(?:", bb, ")*")
    }

    function tb(bb) {
      return Cb("(?:", bb, ")?")
    }

    function Cb() {
      for (var bb = arguments.length, wb = new Array(bb), Mb = 0; Mb < bb; Mb++) wb[Mb] = arguments[Mb];
      return wb.map((bb => Ib(bb))).join("")
    }

    function Eb() {
      for (var bb = arguments.length, wb = new Array(bb), Mb = 0; Mb < bb; Mb++) wb[Mb] = arguments[Mb];
      const eb = function(bb) {
        const wb = bb[bb.length - 1];
        return "object" === typeof wb && wb.constructor === Object ? (bb.splice(bb.length - 1, 1), wb) : {}
      }(wb);
      return "(" + (eb.capture ? "" : "?:") + wb.map((bb => Ib(bb))).join("|") + ")"
    }

    function Fb(bb) {
      return new RegExp(bb.toString() + "|").exec("").length - 1
    }
    const Bb = /\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;

    function sb(bb, wb) {
      let {
        joinWith: Mb
      } = wb, eb = 0;
      return bb.map((bb => {
        eb += 1;
        const wb = eb;
        let Mb = Ib(bb),
          Hb = "";
        for (; Mb.length > 0;) {
          const bb = Bb.exec(Mb);
          if (!bb) {
            Hb += Mb;
            break
          }
          Hb += Mb.substring(0, bb.index), Mb = Mb.substring(bb.index + bb[0].length), "\\" === bb[0][0] && bb[1] ? Hb += "\\" + String(Number(bb[1]) + wb) : (Hb += bb[0], "(" === bb[0] && eb++)
        }
        return Hb
      })).map((bb => `(${bb})`)).join(Mb)
    }
    const mb = "[a-zA-Z]\\w*",
      hb = "[a-zA-Z_]\\w*",
      zb = "\\b\\d+(\\.\\d+)?",
      Xb = "(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",
      xb = "\\b(0b[01]+)",
      jb = {
        LO: "\\\\[\\s\\S]",
        relevance: 0
      },
      Kb = {
        scope: "string",
        LO: "'",
        end: "'",
        illegal: "\\n",
        contains: [jb]
      },
      rb = {
        scope: "string",
        LO: '"',
        end: '"',
        illegal: "\\n",
        contains: [jb]
      },
      Rb = function(bb, wb) {
        const Mb = Hb({
          scope: "comment",
          LO: bb,
          end: wb,
          contains: []
        }, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {});
        Mb.contains.push({
          scope: "doctag",
          LO: "[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",
          end: /(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,
          excludeBegin: !0,
          relevance: 0
        });
        const eb = Eb("I", "a", "is", "so", "us", "to", "at", "if", "in", "it", "on", /[A-Za-z]+['](d|ve|re|ll|t|s|n)/, /[A-Za-z]+[-][a-z]+/, /[A-Za-z][a-z]{2,}/);
        return Mb.contains.push({
          LO: Cb(/[ ]+/, "(", eb, /[.]?[:]?([.][ ]|[ ])/, "){3}")
        }), Mb
      },
      Db = Rb("//", "$"),
      cb = Rb("/\\*", "\\*/"),
      Yb = Rb("#", "$"),
      Zb = {
        scope: "number",
        LO: zb,
        relevance: 0
      },
      fb = {
        scope: "number",
        LO: Xb,
        relevance: 0
      },
      Ab = {
        scope: "number",
        LO: xb,
        relevance: 0
      },
      Wb = {
        scope: "regexp",
        LO: /\/(?=[^/\n]*\/)/,
        end: /\/[gimuy]*/,
        contains: [jb, {
          LO: /\[/,
          end: /\]/,
          relevance: 0,
          contains: [jb]
        }]
      },
      Jb = {
        scope: "title",
        LO: mb,
        relevance: 0
      },
      Sb = {
        scope: "title",
        LO: hb,
        relevance: 0
      },
      Nb = {
        LO: "\\.\\s*" + hb,
        relevance: 0
      };
    var vb = Object.freeze({
      __proto__: null,
      APOS_STRING_MODE: Kb,
      BACKSLASH_ESCAPE: jb,
      BINARY_NUMBER_MODE: Ab,
      BINARY_NUMBER_RE: xb,
      COMMENT: Rb,
      C_BLOCK_COMMENT_MODE: cb,
      C_LINE_COMMENT_MODE: Db,
      C_NUMBER_MODE: fb,
      C_NUMBER_RE: Xb,
      END_SAME_AS_BEGIN: function(bb) {
        return Object.assign(bb, {
          "on:begin": (bb, wb) => {
            wb.data._beginMatch = bb[1]
          },
          "on:end": (bb, wb) => {
            wb.data._beginMatch !== bb[1] && wb.ignoreMatch()
          }
        })
      },
      HASH_COMMENT_MODE: Yb,
      IDENT_RE: mb,
      MATCH_NOTHING_RE: /\b\B/,
      METHOD_GUARD: Nb,
      NUMBER_MODE: Zb,
      NUMBER_RE: zb,
      PHRASAL_WORDS_MODE: {
        LO: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/
      },
      QUOTE_STRING_MODE: rb,
      REGEXP_MODE: Wb,
      RE_STARTERS_RE: "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",
      SHEBANG: function() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        const wb = /^#![ ]*\//;
        return bb.binary && (bb.LO = Cb(wb, /.*\b/, bb.binary, /\b.*/)), Hb({
          scope: "meta",
          LO: wb,
          end: /$/,
          relevance: 0,
          "on:begin": (bb, wb) => {
            0 !== bb.index && wb.ignoreMatch()
          }
        }, bb)
      },
      TITLE_MODE: Jb,
      UNDERSCORE_IDENT_RE: hb,
      UNDERSCORE_TITLE_MODE: Sb
    });

    function Qb(bb, wb) {
      "." === bb.input[bb.index - 1] && wb.ignoreMatch()
    }

    function Gb(bb, wb) {
      void 0 !== bb.className && (bb.scope = bb.className, delete bb.className)
    }

    function qb(bb, wb) {
      wb && bb.beginKeywords && (bb.LO = "\\b(" + bb.beginKeywords.split(" ").join("|") + ")(?!\\.)(?=\\b|\\s)", bb.__beforeBegin = Qb, bb.keywords = bb.keywords || bb.beginKeywords, delete bb.beginKeywords, void 0 === bb.relevance && (bb.relevance = 0))
    }

    function ab(bb, wb) {
      Array.isArray(bb.illegal) && (bb.illegal = Eb(...bb.illegal))
    }

    function ib(bb, wb) {
      if (bb.match) {
        if (bb.LO || bb.end) throw new Error("begin & end are not supported with match");
        bb.LO = bb.match, delete bb.match
      }
    }

    function ub(bb, wb) {
      void 0 === bb.relevance && (bb.relevance = 1)
    }
    const db = (bb, wb) => {
        if (!bb.beforeMatch) return;
        if (bb.starts) throw new Error("beforeMatch cannot be used with starts");
        const Mb = Object.assign({}, bb);
        Object.keys(bb).forEach((wb => {
          delete bb[wb]
        })), bb.keywords = Mb.keywords, bb.LO = Cb(Mb.beforeMatch, Ob(Mb.LO)), bb.starts = {
          relevance: 0,
          contains: [Object.assign(Mb, {
            endsParent: !0
          })]
        }, bb.relevance = 0, delete Mb.beforeMatch
      },
      Pb = ["of", "and", "for", "in", "not", "or", "if", "then", "parent", "list", "value"];

    function nb(bb, wb) {
      let Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "keyword";
      const eb = Object.create(null);
      return "string" === typeof bb ? Hb(Mb, bb.split(" ")) : Array.isArray(bb) ? Hb(Mb, bb) : Object.keys(bb).forEach((function(Mb) {
        Object.assign(eb, nb(bb[Mb], wb, Mb))
      })), eb;

      function Hb(bb, Mb) {
        wb && (Mb = Mb.map((bb => bb.toLowerCase()))), Mb.forEach((function(wb) {
          const Mb = wb.split("|");
          eb[Mb[0]] = [bb, yb(Mb[0], Mb[1])]
        }))
      }
    }

    function yb(bb, wb) {
      return wb ? Number(wb) : function(bb) {
        return Pb.includes(bb.toLowerCase())
      }(bb) ? 0 : 1
    }
    const ob = {},
      Tb = bb => {
        console.error(bb)
      },
      kb = function(bb) {
        for (var wb = arguments.length, Mb = new Array(wb > 1 ? wb - 1 : 0), eb = 1; eb < wb; eb++) Mb[eb - 1] = arguments[eb];
        console.log(`WARN: ${bb}`, ...Mb)
      },
      bw = (bb, wb) => {
        ob[`${bb}/${wb}`] || (console.log(`Deprecated as of ${bb}. ${wb}`), ob[`${bb}/${wb}`] = !0)
      },
      ww = new Error;

    function Mw(bb, wb, Mb) {
      let {
        key: eb
      } = Mb, Hb = 0;
      const pb = bb[eb],
        Vb = {},
        gb = {};
      for (let lb = 1; lb <= wb.length; lb++) gb[lb + Hb] = pb[lb], Vb[lb + Hb] = !0, Hb += Fb(wb[lb - 1]);
      bb[eb] = gb, bb[eb]._emit = Vb, bb[eb]._multi = !0
    }

    function ew(bb) {
      ! function(bb) {
        bb.scope && "object" === typeof bb.scope && null !== bb.scope && (bb.beginScope = bb.scope, delete bb.scope)
      }(bb), "string" === typeof bb.beginScope && (bb.beginScope = {
          _wrap: bb.beginScope
        }), "string" === typeof bb.endScope && (bb.endScope = {
          _wrap: bb.endScope
        }),
        function(bb) {
          if (Array.isArray(bb.LO)) {
            if (bb.skip || bb.excludeBegin || bb.returnBegin) throw Tb("skip, excludeBegin, returnBegin not compatible with beginScope: {}"), ww;
            if ("object" !== typeof bb.beginScope || null === bb.beginScope) throw Tb("beginScope must be object"), ww;
            Mw(bb, bb.LO, {
              key: "beginScope"
            }), bb.LO = sb(bb.LO, {
              joinWith: ""
            })
          }
        }(bb),
        function(bb) {
          if (Array.isArray(bb.end)) {
            if (bb.skip || bb.excludeEnd || bb.returnEnd) throw Tb("skip, excludeEnd, returnEnd not compatible with endScope: {}"), ww;
            if ("object" !== typeof bb.endScope || null === bb.endScope) throw Tb("endScope must be object"), ww;
            Mw(bb, bb.end, {
              key: "endScope"
            }), bb.end = sb(bb.end, {
              joinWith: ""
            })
          }
        }(bb)
    }

    function Hw(bb) {
      function wb(wb, Mb) {
        return new RegExp(Ib(wb), "m" + (bb.case_insensitive ? "i" : "") + (bb.unicodeRegex ? "u" : "") + (Mb ? "g" : ""))
      }
      class Mb {
        constructor() {
          this.matchIndexes = {}, this.regexes = [], this.matchAt = 1, this.position = 0
        }
        addRule(bb, wb) {
          wb.position = this.position++, this.matchIndexes[this.matchAt] = wb, this.regexes.push([wb, bb]), this.matchAt += Fb(bb) + 1
        }
        compile() {
          0 === this.regexes.length && (this.exec = () => null);
          const bb = this.regexes.map((bb => bb[1]));
          this.matcherRe = wb(sb(bb, {
            joinWith: "|"
          }), !0), this.lastIndex = 0
        }
        exec(bb) {
          this.matcherRe.lastIndex = this.lastIndex;
          const wb = this.matcherRe.exec(bb);
          if (!wb) return null;
          const Mb = wb.findIndex(((bb, wb) => wb > 0 && void 0 !== bb)),
            eb = this.matchIndexes[Mb];
          return wb.splice(0, Mb), Object.assign(wb, eb)
        }
      }
      class eb {
        constructor() {
          this.rules = [], this.multiRegexes = [], this.count = 0, this.lastIndex = 0, this.regexIndex = 0
        }
        getMatcher(bb) {
          if (this.multiRegexes[bb]) return this.multiRegexes[bb];
          const wb = new Mb;
          return this.rules.slice(bb).forEach((bb => {
            let [Mb, eb] = bb;
            return wb.addRule(Mb, eb)
          })), wb.compile(), this.multiRegexes[bb] = wb, wb
        }
        resumingScanAtSamePosition() {
          return 0 !== this.regexIndex
        }
        considerAll() {
          this.regexIndex = 0
        }
        addRule(bb, wb) {
          this.rules.push([bb, wb]), "LO" === wb.type && this.count++
        }
        exec(bb) {
          const wb = this.getMatcher(this.regexIndex);
          wb.lastIndex = this.lastIndex;
          let Mb = wb.exec(bb);
          if (this.resumingScanAtSamePosition())
            if (Mb && Mb.index === this.lastIndex);
            else {
              const wb = this.getMatcher(0);
              wb.lastIndex = this.lastIndex + 1, Mb = wb.exec(bb)
            } return Mb && (this.regexIndex += Mb.position + 1, this.regexIndex === this.count && this.considerAll()), Mb
        }
      }
      if (bb.compilerExtensions || (bb.compilerExtensions = []), bb.contains && bb.contains.includes("self")) throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");
      return bb.classNameAliases = Hb(bb.classNameAliases || {}),
        function Mb(pb, Vb) {
          const gb = pb;
          if (pb.isCompiled) return gb;
          [Gb, ib, ew, db].forEach((bb => bb(pb, Vb))), bb.compilerExtensions.forEach((bb => bb(pb, Vb))), pb.__beforeBegin = null, [qb, ab, ub].forEach((bb => bb(pb, Vb))), pb.isCompiled = !0;
          let lb = null;
          return "object" === typeof pb.keywords && pb.keywords.$pattern && (pb.keywords = Object.assign({}, pb.keywords), lb = pb.keywords.$pattern, delete pb.keywords.$pattern), lb = lb || /\w+/, pb.keywords && (pb.keywords = nb(pb.keywords, bb.case_insensitive)), gb.keywordPatternRe = wb(lb, !0), Vb && (pb.LO || (pb.LO = /\B|\b/), gb.beginRe = wb(gb.LO), pb.end || pb.endsWithParent || (pb.end = /\B|\b/), pb.end && (gb.endRe = wb(gb.end)), gb.terminatorEnd = Ib(gb.end) || "", pb.endsWithParent && Vb.terminatorEnd && (gb.terminatorEnd += (pb.end ? "|" : "") + Vb.terminatorEnd)), pb.illegal && (gb.illegalRe = wb(pb.illegal)), pb.contains || (pb.contains = []), pb.contains = [].concat(...pb.contains.map((function(bb) {
            return function(bb) {
              bb.variants && !bb.cachedVariants && (bb.cachedVariants = bb.variants.map((function(wb) {
                return Hb(bb, {
                  variants: null
                }, wb)
              })));
              if (bb.cachedVariants) return bb.cachedVariants;
              if (pw(bb)) return Hb(bb, {
                starts: bb.starts ? Hb(bb.starts) : null
              });
              if (Object.isFrozen(bb)) return Hb(bb);
              return bb
            }("self" === bb ? pb : bb)
          }))), pb.contains.forEach((function(bb) {
            Mb(bb, gb)
          })), pb.starts && Mb(pb.starts, Vb), gb.matcher = function(bb) {
            const wb = new eb;
            return bb.contains.forEach((bb => wb.addRule(bb.LO, {
              rule: bb,
              type: "LO"
            }))), bb.terminatorEnd && wb.addRule(bb.terminatorEnd, {
              type: "end"
            }), bb.illegal && wb.addRule(bb.illegal, {
              type: "illegal"
            }), wb
          }(gb), gb
        }(bb)
    }

    function pw(bb) {
      return !!bb && (bb.endsWithParent || pw(bb.starts))
    }
    class Vw extends Error {
      constructor(bb, wb) {
        super(bb), this.name = "HTMLInjectionError", this.html = wb
      }
    }
    const gw = eb,
      lw = Hb,
      Lw = Symbol("nomatch"),
      Iw = function(bb) {
        const eb = Object.create(null),
          Hb = Object.create(null),
          pb = [];
        let Vb = !0;
        const gb = "Could not find the language '{}', did you forget to load/include a language module?",
          lb = {
            disableAutodetect: !0,
            name: "Plain text",
            contains: []
          };
        let Ib = {
          ignoreUnescapedHTML: !1,
          throwUnescapedHTML: !1,
          noHighlightRe: /^(no-?highlight)$/i,
          languageDetectRe: /\blang(?:uage)?-([\w-]+)\b/i,
          classPrefix: "hljs-",
          cssSelector: "pre code",
          languages: null,
          __emitter: Lb
        };

        function Fb(bb) {
          return Ib.noHighlightRe.test(bb)
        }

        function Bb(bb, wb, Mb) {
          let eb = "",
            Hb = "";
          "object" === typeof wb ? (eb = bb, Mb = wb.ignoreIllegals, Hb = wb.language) : (bw("10.7.0", "highlight(lang, code, ...args) has been deprecated."), bw("10.7.0", "Please use highlight(code, options) instead.\nhttps://github.com/highlightjs/highlight.js/issues/2277"), Hb = bb, eb = wb), void 0 === Mb && (Mb = !0);
          const pb = {
            code: eb,
            language: Hb
          };
          rb("before:highlight", pb);
          const Vb = pb.result ? pb.result : sb(pb.language, pb.code, Mb);
          return Vb.code = pb.code, rb("after:highlight", Vb), Vb
        }

        function sb(bb, wb, Hb, pb) {
          const lb = Object.create(null);

          function Lb() {
            if (!rb.keywords) return void Db.addText(cb);
            let bb = 0;
            rb.keywordPatternRe.lastIndex = 0;
            let wb = rb.keywordPatternRe.exec(cb),
              Mb = "";
            for (; wb;) {
              Mb += cb.substring(bb, wb.index);
              const Hb = Xb.case_insensitive ? wb[0].toLowerCase() : wb[0],
                pb = (eb = Hb, rb.keywords[eb]);
              if (pb) {
                const [bb, eb] = pb;
                if (Db.addText(Mb), Mb = "", lb[Hb] = (lb[Hb] || 0) + 1, lb[Hb] <= 7 && (Yb += eb), bb.startsWith("_")) Mb += wb[0];
                else {
                  const Mb = Xb.classNameAliases[bb] || bb;
                  Ub(wb[0], Mb)
                }
              } else Mb += wb[0];
              bb = rb.keywordPatternRe.lastIndex, wb = rb.keywordPatternRe.exec(cb)
            }
            var eb;
            Mb += cb.substring(bb), Db.addText(Mb)
          }

          function Ob() {
            null != rb.subLanguage ? function() {
              if ("" === cb) return;
              let bb = null;
              if ("string" === typeof rb.subLanguage) {
                if (!eb[rb.subLanguage]) return void Db.addText(cb);
                bb = sb(rb.subLanguage, cb, !0, Rb[rb.subLanguage]), Rb[rb.subLanguage] = bb._top
              } else bb = mb(cb, rb.subLanguage.length ? rb.subLanguage : null);
              rb.relevance > 0 && (Yb += bb.relevance), Db.__addSublanguage(bb._emitter, bb.language)
            }() : Lb(), cb = ""
          }

          function Ub(bb, wb) {
            "" !== bb && (Db.startScope(wb), Db.addText(bb), Db.endScope())
          }

          function tb(bb, wb) {
            let Mb = 1;
            const eb = wb.length - 1;
            for (; Mb <= eb;) {
              if (!bb._emit[Mb]) {
                Mb++;
                continue
              }
              const eb = Xb.classNameAliases[bb[Mb]] || bb[Mb],
                Hb = wb[Mb];
              eb ? Ub(Hb, eb) : (cb = Hb, Lb(), cb = ""), Mb++
            }
          }

          function Cb(bb, wb) {
            return bb.scope && "string" === typeof bb.scope && Db.openNode(Xb.classNameAliases[bb.scope] || bb.scope), bb.beginScope && (bb.beginScope._wrap ? (Ub(cb, Xb.classNameAliases[bb.beginScope._wrap] || bb.beginScope._wrap), cb = "") : bb.beginScope._multi && (tb(bb.beginScope, wb), cb = "")), rb = Object.create(bb, {
              parent: {
                value: rb
              }
            }), rb
          }

          function Eb(bb, wb, eb) {
            let Hb = function(bb, wb) {
              const Mb = bb && bb.exec(wb);
              return Mb && 0 === Mb.index
            }(bb.endRe, eb);
            if (Hb) {
              if (bb["on:end"]) {
                const eb = new Mb(bb);
                bb["on:end"](wb, eb), eb.isMatchIgnored && (Hb = !1)
              }
              if (Hb) {
                for (; bb.endsParent && bb.parent;) bb = bb.parent;
                return bb
              }
            }
            if (bb.endsWithParent) return Eb(bb.parent, wb, eb)
          }

          function Fb(bb) {
            return 0 === rb.matcher.regexIndex ? (cb += bb[0], 1) : (Ab = !0, 0)
          }

          function Bb(bb) {
            const Mb = bb[0],
              eb = wb.substring(bb.index),
              Hb = Eb(rb, bb, eb);
            if (!Hb) return Lw;
            const pb = rb;
            rb.endScope && rb.endScope._wrap ? (Ob(), Ub(Mb, rb.endScope._wrap)) : rb.endScope && rb.endScope._multi ? (Ob(), tb(rb.endScope, bb)) : pb.skip ? cb += Mb : (pb.returnEnd || pb.excludeEnd || (cb += Mb), Ob(), pb.excludeEnd && (cb = Mb));
            do {
              rb.scope && Db.closeNode(), rb.skip || rb.subLanguage || (Yb += rb.relevance), rb = rb.parent
            } while (rb !== Hb.parent);
            return Hb.starts && Cb(Hb.starts, bb), pb.returnEnd ? 0 : Mb.length
          }
          let hb = {};

          function zb(eb, pb) {
            const gb = pb && pb[0];
            if (cb += eb, null == gb) return Ob(), 0;
            if ("LO" === hb.type && "end" === pb.type && hb.index === pb.index && "" === gb) {
              if (cb += wb.slice(pb.index, pb.index + 1), !Vb) {
                const wb = new Error(`0 width match regex (${bb})`);
                throw wb.languageName = bb, wb.badRule = hb.rule, wb
              }
              return 1
            }
            if (hb = pb, "LO" === pb.type) return function(bb) {
              const wb = bb[0],
                eb = bb.rule,
                Hb = new Mb(eb),
                pb = [eb.__beforeBegin, eb["on:begin"]];
              for (const Mb of pb)
                if (Mb && (Mb(bb, Hb), Hb.isMatchIgnored)) return Fb(wb);
              return eb.skip ? cb += wb : (eb.excludeBegin && (cb += wb), Ob(), eb.returnBegin || eb.excludeBegin || (cb = wb)), Cb(eb, bb), eb.returnBegin ? 0 : wb.length
            }(pb);
            if ("illegal" === pb.type && !Hb) {
              const bb = new Error('Illegal lexeme "' + gb + '" for mode "' + (rb.scope || "<unnamed>") + '"');
              throw bb.mode = rb, bb
            }
            if ("end" === pb.type) {
              const bb = Bb(pb);
              if (bb !== Lw) return bb
            }
            if ("illegal" === pb.type && "" === gb) return cb += "\n", 1;
            if (fb > 1e5 && fb > 3 * pb.index) {
              throw new Error("potential infinite loop, way more iterations than matches")
            }
            return cb += gb, gb.length
          }
          const Xb = xb(bb);
          if (!Xb) throw Tb(gb.replace("{}", bb)), new Error('Unknown language: "' + bb + '"');
          const jb = Hw(Xb);
          let Kb = "",
            rb = pb || jb;
          const Rb = {},
            Db = new Ib.__emitter(Ib);
          ! function() {
            const bb = [];
            for (let wb = rb; wb !== Xb; wb = wb.parent) wb.scope && bb.unshift(wb.scope);
            bb.forEach((bb => Db.openNode(bb)))
          }();
          let cb = "",
            Yb = 0,
            Zb = 0,
            fb = 0,
            Ab = !1;
          try {
            if (Xb.__emitTokens) Xb.__emitTokens(wb, Db);
            else {
              for (rb.matcher.considerAll();;) {
                fb++, Ab ? Ab = !1 : rb.matcher.considerAll(), rb.matcher.lastIndex = Zb;
                const bb = rb.matcher.exec(wb);
                if (!bb) break;
                const Mb = zb(wb.substring(Zb, bb.index), bb);
                Zb = bb.index + Mb
              }
              zb(wb.substring(Zb))
            }
            return Db.finalize(), Kb = Db.toHTML(), {
              language: bb,
              value: Kb,
              relevance: Yb,
              illegal: !1,
              _emitter: Db,
              _top: rb
            }
          } catch (Wb) {
            if (Wb.message && Wb.message.includes("Illegal")) return {
              language: bb,
              value: gw(wb),
              illegal: !0,
              relevance: 0,
              _illegalBy: {
                message: Wb.message,
                index: Zb,
                context: wb.slice(Zb - 100, Zb + 100),
                mode: Wb.mode,
                resultSoFar: Kb
              },
              _emitter: Db
            };
            if (Vb) return {
              language: bb,
              value: gw(wb),
              illegal: !1,
              relevance: 0,
              errorRaised: Wb,
              _emitter: Db,
              _top: rb
            };
            throw Wb
          }
        }

        function mb(bb, wb) {
          wb = wb || Ib.languages || Object.keys(eb);
          const Mb = function(bb) {
              const wb = {
                value: gw(bb),
                illegal: !1,
                relevance: 0,
                _top: lb,
                _emitter: new Ib.__emitter(Ib)
              };
              return wb._emitter.addText(bb), wb
            }(bb),
            Hb = wb.filter(xb).filter(Kb).map((wb => sb(wb, bb, !1)));
          Hb.unshift(Mb);
          const pb = Hb.sort(((bb, wb) => {
              if (bb.relevance !== wb.relevance) return wb.relevance - bb.relevance;
              if (bb.language && wb.language) {
                if (xb(bb.language).supersetOf === wb.language) return 1;
                if (xb(wb.language).supersetOf === bb.language) return -1
              }
              return 0
            })),
            [Vb, gb] = pb,
            Lb = Vb;
          return Lb.secondBest = gb, Lb
        }

        function hb(bb) {
          let wb = null;
          const Mb = function(bb) {
            let wb = bb.className + " ";
            wb += bb.parentNode ? bb.parentNode.className : "";
            const Mb = Ib.languageDetectRe.exec(wb);
            if (Mb) {
              const wb = xb(Mb[1]);
              return wb || (kb(gb.replace("{}", Mb[1])), kb("Falling back to no-highlight mode for this block.", bb)), wb ? Mb[1] : "no-highlight"
            }
            return wb.split(/\s+/).find((bb => Fb(bb) || xb(bb)))
          }(bb);
          if (Fb(Mb)) return;
          if (rb("before:highlightElement", {
              el: bb,
              language: Mb
            }), bb.dataset.highlighted) return void console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.", bb);
          if (bb.children.length > 0 && (Ib.ignoreUnescapedHTML || (console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."), console.warn("https://github.com/highlightjs/highlight.js/wiki/security"), console.warn("The element with unescaped HTML:"), console.warn(bb)), Ib.throwUnescapedHTML)) {
            throw new Vw("One of your code blocks includes unescaped HTML.", bb.innerHTML)
          }
          wb = bb;
          const eb = wb.textContent,
            pb = Mb ? Bb(eb, {
              language: Mb,
              ignoreIllegals: !0
            }) : mb(eb);
          bb.innerHTML = pb.value, bb.dataset.highlighted = "yes",
            function(bb, wb, Mb) {
              const eb = wb && Hb[wb] || Mb;
              bb.classList.add("hljs"), bb.classList.add(`language-${eb}`)
            }(bb, Mb, pb.language), bb.result = {
              language: pb.language,
              re: pb.relevance,
              relevance: pb.relevance
            }, pb.secondBest && (bb.secondBest = {
              language: pb.secondBest.language,
              relevance: pb.secondBest.relevance
            }), rb("after:highlightElement", {
              el: bb,
              result: pb,
              text: eb
            })
        }
        let zb = !1;

        function Xb() {
          if ("loading" === document.readyState) return zb || window.addEventListener("DOMContentLoaded", (function() {
            Xb()
          }), !1), void(zb = !0);
          document.querySelectorAll(Ib.cssSelector).forEach(hb)
        }

        function xb(bb) {
          return bb = (bb || "").toLowerCase(), eb[bb] || eb[Hb[bb]]
        }

        function jb(bb, wb) {
          let {
            languageName: Mb
          } = wb;
          "string" === typeof bb && (bb = [bb]), bb.forEach((bb => {
            Hb[bb.toLowerCase()] = Mb
          }))
        }

        function Kb(bb) {
          const wb = xb(bb);
          return wb && !wb.disableAutodetect
        }

        function rb(bb, wb) {
          const Mb = bb;
          pb.forEach((function(bb) {
            bb[Mb] && bb[Mb](wb)
          }))
        }
        Object.assign(bb, {
          highlight: Bb,
          highlightAuto: mb,
          highlightAll: Xb,
          highlightElement: hb,
          highlightBlock: function(bb) {
            return bw("10.7.0", "highlightBlock will be removed entirely in v12.0"), bw("10.7.0", "Please use highlightElement now."), hb(bb)
          },
          configure: function(bb) {
            Ib = lw(Ib, bb)
          },
          initHighlighting: () => {
            Xb(), bw("10.6.0", "initHighlighting() deprecated.  Use highlightAll() now.")
          },
          initHighlightingOnLoad: function() {
            Xb(), bw("10.6.0", "initHighlightingOnLoad() deprecated.  Use highlightAll() now.")
          },
          registerLanguage: function(wb, Mb) {
            let Hb = null;
            try {
              Hb = Mb(bb)
            } catch (pb) {
              if (Tb("Language definition for '{}' could not be registered.".replace("{}", wb)), !Vb) throw pb;
              Tb(pb), Hb = lb
            }
            Hb.name || (Hb.name = wb), eb[wb] = Hb, Hb.rawDefinition = Mb.bind(null, bb), Hb.aliases && jb(Hb.aliases, {
              languageName: wb
            })
          },
          unregisterLanguage: function(bb) {
            delete eb[bb];
            for (const wb of Object.keys(Hb)) Hb[wb] === bb && delete Hb[wb]
          },
          listLanguages: function() {
            return Object.keys(eb)
          },
          getLanguage: xb,
          registerAliases: jb,
          autoDetection: Kb,
          inherit: lw,
          addPlugin: function(bb) {
            ! function(bb) {
              bb["before:highlightBlock"] && !bb["before:highlightElement"] && (bb["before:highlightElement"] = wb => {
                bb["before:highlightBlock"](Object.assign({
                  block: wb.el
                }, wb))
              }), bb["after:highlightBlock"] && !bb["after:highlightElement"] && (bb["after:highlightElement"] = wb => {
                bb["after:highlightBlock"](Object.assign({
                  block: wb.el
                }, wb))
              })
            }(bb), pb.push(bb)
          },
          removePlugin: function(bb) {
            const wb = pb.indexOf(bb); - 1 !== wb && pb.splice(wb, 1)
          }
        }), bb.debugMode = function() {
          Vb = !1
        }, bb.safeMode = function() {
          Vb = !0
        }, bb.versionString = "11.11.1", bb.regex = {
          concat: Cb,
          lookahead: Ob,
          either: Eb,
          optional: tb,
          anyNumberOfTimes: Ub
        };
        for (const Mb in vb) "object" === typeof vb[Mb] && wb(vb[Mb]);
        return Object.assign(bb, vb), bb
      },
      Ow = Iw({});
    Ow.newInstance = () => Iw({}), bb.exports = Ow, Ow.HighlightJS = Ow, Ow.default = Ow
  },
  5612: (bb, wb, Mb) => {
    Mb.d(wb, {
      d: () => eb
    });
    const eb = Mb(5616)
  },
  5620: (bb, wb, Mb) => {
    Mb.d(wb, {
      d: () => Ob
    });
    const eb = "[A-Za-z$_][0-9A-Za-z$_]*",
      Hb = ["as", "in", "of", "if", "for", "while", "finally", "var", "new", "function", "do", "return", "void", "else", "break", "catch", "instanceof", "with", "throw", "case", "default", "try", "switch", "continue", "typeof", "delete", "let", "yield", "const", "class", "debugger", "async", "await", "static", "import", "from", "export", "extends", "using"],
      pb = ["true", "false", "null", "undefined", "NaN", "Infinity"],
      Vb = ["Object", "Function", "Boolean", "Symbol", "Math", "Date", "Number", "BigInt", "String", "RegExp", "Array", "Float32Array", "Float64Array", "Int8Array", "Uint8Array", "Uint8ClampedArray", "Int16Array", "Int32Array", "Uint16Array", "Uint32Array", "BigInt64Array", "BigUint64Array", "Set", "Map", "WeakSet", "WeakMap", "ArrayBuffer", "SharedArrayBuffer", "Atomics", "DataView", "JSON", "Promise", "Generator", "GeneratorFunction", "AsyncFunction", "Reflect", "Proxy", "Intl", "WebAssembly"],
      gb = ["Error", "EvalError", "InternalError", "RangeError", "ReferenceError", "SyntaxError", "TypeError", "URIError"],
      lb = ["setInterval", "setTimeout", "clearInterval", "clearTimeout", "require", "exports", "eval", "isFinite", "isNaN", "parseFloat", "parseInt", "decodeURI", "decodeURIComponent", "encodeURI", "encodeURIComponent", "escape", "unescape"],
      Lb = ["arguments", "this", "super", "console", "window", "document", "localStorage", "sessionStorage", "module", "global"],
      Ib = [].concat(lb, Vb, gb);

    function Ob(bb) {
      const wb = bb.regex,
        Mb = eb,
        Ob = "<>",
        Ub = "</>",
        tb = {
          LO: /<[A-Za-z0-9\\._:-]+/,
          end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
          isTrulyOpeningTag: (bb, wb) => {
            const Mb = bb[0].length + bb.index,
              eb = bb.input[Mb];
            if ("<" === eb || "," === eb) return void wb.ignoreMatch();
            let Hb;
            ">" === eb && (((bb, wb) => {
              let {
                after: Mb
              } = wb;
              const eb = "</" + bb[0].slice(1);
              return -1 !== bb.input.indexOf(eb, Mb)
            })(bb, {
              after: Mb
            }) || wb.ignoreMatch());
            const pb = bb.input.substring(Mb);
            ((Hb = pb.match(/^\s*=/)) || (Hb = pb.match(/^\s+extends\s+/)) && 0 === Hb.index) && wb.ignoreMatch()
          }
        },
        Cb = {
          $pattern: eb,
          keyword: Hb,
          literal: pb,
          built_in: Ib,
          "variable.language": Lb
        },
        Eb = "[0-9](_?[0-9])*",
        Fb = `\\.(${Eb})`,
        Bb = "0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",
        sb = {
          className: "number",
          variants: [{
            LO: `(\\b(${Bb})((${Fb})|\\.)?|(${Fb}))[eE][+-]?(${Eb})\\b`
          }, {
            LO: `\\b(${Bb})\\b((${Fb})\\b|\\.)?|(${Fb})\\b`
          }, {
            LO: "\\b(0|[1-9](_?[0-9])*)n\\b"
          }, {
            LO: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"
          }, {
            LO: "\\b0[bB][0-1](_?[0-1])*n?\\b"
          }, {
            LO: "\\b0[oO][0-7](_?[0-7])*n?\\b"
          }, {
            LO: "\\b0[0-7]+n?\\b"
          }],
          relevance: 0
        },
        mb = {
          className: "subst",
          LO: "\\$\\{",
          end: "\\}",
          keywords: Cb,
          contains: []
        },
        hb = {
          LO: ".?html`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [bb.BACKSLASH_ESCAPE, mb],
            subLanguage: "xml"
          }
        },
        zb = {
          LO: ".?css`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [bb.BACKSLASH_ESCAPE, mb],
            subLanguage: "css"
          }
        },
        Xb = {
          LO: ".?gql`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [bb.BACKSLASH_ESCAPE, mb],
            subLanguage: "graphql"
          }
        },
        xb = {
          className: "string",
          LO: "`",
          end: "`",
          contains: [bb.BACKSLASH_ESCAPE, mb]
        },
        jb = {
          className: "comment",
          variants: [bb.COMMENT(/\/\*\*(?!\/)/, "\\*/", {
            relevance: 0,
            contains: [{
              LO: "(?=@[A-Za-z]+)",
              relevance: 0,
              contains: [{
                className: "doctag",
                LO: "@[A-Za-z]+"
              }, {
                className: "type",
                LO: "\\{",
                end: "\\}",
                excludeEnd: !0,
                excludeBegin: !0,
                relevance: 0
              }, {
                className: "variable",
                LO: Mb + "(?=\\s*(-)|$)",
                endsParent: !0,
                relevance: 0
              }, {
                LO: /(?=[^\n])\s/,
                relevance: 0
              }]
            }]
          }), bb.C_BLOCK_COMMENT_MODE, bb.C_LINE_COMMENT_MODE]
        },
        Kb = [bb.APOS_STRING_MODE, bb.QUOTE_STRING_MODE, hb, zb, Xb, xb, {
          match: /\$\d+/
        }, sb];
      mb.contains = Kb.concat({
        LO: /\{/,
        end: /\}/,
        keywords: Cb,
        contains: ["self"].concat(Kb)
      });
      const rb = [].concat(jb, mb.contains),
        Rb = rb.concat([{
          LO: /(\s*)\(/,
          end: /\)/,
          keywords: Cb,
          contains: ["self"].concat(rb)
        }]),
        Db = {
          className: "params",
          LO: /(\s*)\(/,
          end: /\)/,
          excludeBegin: !0,
          excludeEnd: !0,
          keywords: Cb,
          contains: Rb
        },
        cb = {
          variants: [{
            match: [/class/, /\s+/, Mb, /\s+/, /extends/, /\s+/, wb.concat(Mb, "(", wb.concat(/\./, Mb), ")*")],
            scope: {
              1: "keyword",
              3: "title.class",
              5: "keyword",
              7: "title.class.inherited"
            }
          }, {
            match: [/class/, /\s+/, Mb],
            scope: {
              1: "keyword",
              3: "title.class"
            }
          }]
        },
        Yb = {
          relevance: 0,
          match: wb.either(/\bJSON/, /\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/, /\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/, /\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),
          className: "title.class",
          keywords: {
            _: [...Vb, ...gb]
          }
        },
        Zb = {
          variants: [{
            match: [/function/, /\s+/, Mb, /(?=\s*\()/]
          }, {
            match: [/function/, /\s*(?=\()/]
          }],
          className: {
            1: "keyword",
            3: "title.function"
          },
          label: "func.def",
          contains: [Db],
          illegal: /%/
        };
      const fb = {
        match: wb.concat(/\b/, (Ab = [...lb, "super", "import"].map((bb => `${bb}\\s*\\(`)), wb.concat("(?!", Ab.join("|"), ")")), Mb, wb.lookahead(/\s*\(/)),
        className: "title.function",
        relevance: 0
      };
      var Ab;
      const Wb = {
          LO: wb.concat(/\./, wb.lookahead(wb.concat(Mb, /(?![0-9A-Za-z$_(])/))),
          end: Mb,
          excludeBegin: !0,
          keywords: "prototype",
          className: "property",
          relevance: 0
        },
        Jb = {
          match: [/get|set/, /\s+/, Mb, /(?=\()/],
          className: {
            1: "keyword",
            3: "title.function"
          },
          contains: [{
            LO: /\(\)/
          }, Db]
        },
        Sb = "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" + bb.UNDERSCORE_IDENT_RE + ")\\s*=>",
        Nb = {
          match: [/const|var|let/, /\s+/, Mb, /\s*/, /=\s*/, /(async\s*)?/, wb.lookahead(Sb)],
          keywords: "async",
          className: {
            1: "keyword",
            3: "title.function"
          },
          contains: [Db]
        };
      return {
        name: "JavaScript",
        aliases: ["js", "jsx", "mjs", "cjs"],
        keywords: Cb,
        exports: {
          PARAMS_CONTAINS: Rb,
          CLASS_REFERENCE: Yb
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
          LO: /^\s*['"]use (strict|asm)['"]/
        }, bb.APOS_STRING_MODE, bb.QUOTE_STRING_MODE, hb, zb, Xb, xb, jb, {
          match: /\$\d+/
        }, sb, Yb, {
          scope: "attr",
          match: Mb + wb.lookahead(":"),
          relevance: 0
        }, Nb, {
          LO: "(" + bb.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
          keywords: "return throw case",
          relevance: 0,
          contains: [jb, bb.REGEXP_MODE, {
            className: "function",
            LO: Sb,
            returnBegin: !0,
            end: "\\s*=>",
            contains: [{
              className: "params",
              variants: [{
                LO: bb.UNDERSCORE_IDENT_RE,
                relevance: 0
              }, {
                className: null,
                LO: /\(\s*\)/,
                skip: !0
              }, {
                LO: /(\s*)\(/,
                end: /\)/,
                excludeBegin: !0,
                excludeEnd: !0,
                keywords: Cb,
                contains: Rb
              }]
            }]
          }, {
            LO: /,/,
            relevance: 0
          }, {
            match: /\s+/,
            relevance: 0
          }, {
            variants: [{
              LO: Ob,
              end: Ub
            }, {
              match: /<[A-Za-z0-9\\._:-]+\s*\/>/
            }, {
              LO: tb.LO,
              "on:begin": tb.isTrulyOpeningTag,
              end: tb.end
            }],
            subLanguage: "xml",
            contains: [{
              LO: tb.LO,
              end: tb.end,
              skip: !0,
              contains: ["self"]
            }]
          }]
        }, Zb, {
          beginKeywords: "while if switch catch for"
        }, {
          LO: "\\b(?!function)" + bb.UNDERSCORE_IDENT_RE + "\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
          returnBegin: !0,
          label: "func.def",
          contains: [Db, bb.inherit(bb.TITLE_MODE, {
            LO: Mb,
            className: "title.function"
          })]
        }, {
          match: /\.\.\./,
          relevance: 0
        }, Wb, {
          match: "\\$" + Mb,
          relevance: 0
        }, {
          match: [/\bconstructor(?=\s*\()/],
          className: {
            1: "title.function"
          },
          contains: [Db]
        }, fb, {
          relevance: 0,
          match: /\b[A-Z][A-Z_0-9]+\b/,
          className: "variable.constant"
        }, cb, Jb, {
          match: /\$[(.]/
        }]
      }
    }
  },
  5627: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => Ub
    });
    const eb = "[A-Za-z$_][0-9A-Za-z$_]*",
      Hb = ["as", "in", "of", "if", "for", "while", "finally", "var", "new", "function", "do", "return", "void", "else", "break", "catch", "instanceof", "with", "throw", "case", "default", "try", "switch", "continue", "typeof", "delete", "let", "yield", "const", "class", "debugger", "async", "await", "static", "import", "from", "export", "extends", "using"],
      pb = ["true", "false", "null", "undefined", "NaN", "Infinity"],
      Vb = ["Object", "Function", "Boolean", "Symbol", "Math", "Date", "Number", "BigInt", "String", "RegExp", "Array", "Float32Array", "Float64Array", "Int8Array", "Uint8Array", "Uint8ClampedArray", "Int16Array", "Int32Array", "Uint16Array", "Uint32Array", "BigInt64Array", "BigUint64Array", "Set", "Map", "WeakSet", "WeakMap", "ArrayBuffer", "SharedArrayBuffer", "Atomics", "DataView", "JSON", "Promise", "Generator", "GeneratorFunction", "AsyncFunction", "Reflect", "Proxy", "Intl", "WebAssembly"],
      gb = ["Error", "EvalError", "InternalError", "RangeError", "ReferenceError", "SyntaxError", "TypeError", "URIError"],
      lb = ["setInterval", "setTimeout", "clearInterval", "clearTimeout", "require", "exports", "eval", "isFinite", "isNaN", "parseFloat", "parseInt", "decodeURI", "decodeURIComponent", "encodeURI", "encodeURIComponent", "escape", "unescape"],
      Lb = ["arguments", "this", "super", "console", "window", "document", "localStorage", "sessionStorage", "module", "global"],
      Ib = [].concat(lb, Vb, gb);

    function Ob(bb) {
      const wb = bb.regex,
        Mb = eb,
        Ob = "<>",
        Ub = "</>",
        tb = {
          LO: /<[A-Za-z0-9\\._:-]+/,
          end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
          isTrulyOpeningTag: (bb, wb) => {
            const Mb = bb[0].length + bb.index,
              eb = bb.input[Mb];
            if ("<" === eb || "," === eb) return void wb.ignoreMatch();
            let Hb;
            ">" === eb && (((bb, wb) => {
              let {
                after: Mb
              } = wb;
              const eb = "</" + bb[0].slice(1);
              return -1 !== bb.input.indexOf(eb, Mb)
            })(bb, {
              after: Mb
            }) || wb.ignoreMatch());
            const pb = bb.input.substring(Mb);
            ((Hb = pb.match(/^\s*=/)) || (Hb = pb.match(/^\s+extends\s+/)) && 0 === Hb.index) && wb.ignoreMatch()
          }
        },
        Cb = {
          $pattern: eb,
          keyword: Hb,
          literal: pb,
          built_in: Ib,
          "variable.language": Lb
        },
        Eb = "[0-9](_?[0-9])*",
        Fb = `\\.(${Eb})`,
        Bb = "0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",
        sb = {
          className: "number",
          variants: [{
            LO: `(\\b(${Bb})((${Fb})|\\.)?|(${Fb}))[eE][+-]?(${Eb})\\b`
          }, {
            LO: `\\b(${Bb})\\b((${Fb})\\b|\\.)?|(${Fb})\\b`
          }, {
            LO: "\\b(0|[1-9](_?[0-9])*)n\\b"
          }, {
            LO: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"
          }, {
            LO: "\\b0[bB][0-1](_?[0-1])*n?\\b"
          }, {
            LO: "\\b0[oO][0-7](_?[0-7])*n?\\b"
          }, {
            LO: "\\b0[0-7]+n?\\b"
          }],
          relevance: 0
        },
        mb = {
          className: "subst",
          LO: "\\$\\{",
          end: "\\}",
          keywords: Cb,
          contains: []
        },
        hb = {
          LO: ".?html`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [bb.BACKSLASH_ESCAPE, mb],
            subLanguage: "xml"
          }
        },
        zb = {
          LO: ".?css`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [bb.BACKSLASH_ESCAPE, mb],
            subLanguage: "css"
          }
        },
        Xb = {
          LO: ".?gql`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [bb.BACKSLASH_ESCAPE, mb],
            subLanguage: "graphql"
          }
        },
        xb = {
          className: "string",
          LO: "`",
          end: "`",
          contains: [bb.BACKSLASH_ESCAPE, mb]
        },
        jb = {
          className: "comment",
          variants: [bb.COMMENT(/\/\*\*(?!\/)/, "\\*/", {
            relevance: 0,
            contains: [{
              LO: "(?=@[A-Za-z]+)",
              relevance: 0,
              contains: [{
                className: "doctag",
                LO: "@[A-Za-z]+"
              }, {
                className: "type",
                LO: "\\{",
                end: "\\}",
                excludeEnd: !0,
                excludeBegin: !0,
                relevance: 0
              }, {
                className: "variable",
                LO: Mb + "(?=\\s*(-)|$)",
                endsParent: !0,
                relevance: 0
              }, {
                LO: /(?=[^\n])\s/,
                relevance: 0
              }]
            }]
          }), bb.C_BLOCK_COMMENT_MODE, bb.C_LINE_COMMENT_MODE]
        },
        Kb = [bb.APOS_STRING_MODE, bb.QUOTE_STRING_MODE, hb, zb, Xb, xb, {
          match: /\$\d+/
        }, sb];
      mb.contains = Kb.concat({
        LO: /\{/,
        end: /\}/,
        keywords: Cb,
        contains: ["self"].concat(Kb)
      });
      const rb = [].concat(jb, mb.contains),
        Rb = rb.concat([{
          LO: /(\s*)\(/,
          end: /\)/,
          keywords: Cb,
          contains: ["self"].concat(rb)
        }]),
        Db = {
          className: "params",
          LO: /(\s*)\(/,
          end: /\)/,
          excludeBegin: !0,
          excludeEnd: !0,
          keywords: Cb,
          contains: Rb
        },
        cb = {
          variants: [{
            match: [/class/, /\s+/, Mb, /\s+/, /extends/, /\s+/, wb.concat(Mb, "(", wb.concat(/\./, Mb), ")*")],
            scope: {
              1: "keyword",
              3: "title.class",
              5: "keyword",
              7: "title.class.inherited"
            }
          }, {
            match: [/class/, /\s+/, Mb],
            scope: {
              1: "keyword",
              3: "title.class"
            }
          }]
        },
        Yb = {
          relevance: 0,
          match: wb.either(/\bJSON/, /\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/, /\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/, /\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),
          className: "title.class",
          keywords: {
            _: [...Vb, ...gb]
          }
        },
        Zb = {
          variants: [{
            match: [/function/, /\s+/, Mb, /(?=\s*\()/]
          }, {
            match: [/function/, /\s*(?=\()/]
          }],
          className: {
            1: "keyword",
            3: "title.function"
          },
          label: "func.def",
          contains: [Db],
          illegal: /%/
        };
      const fb = {
        match: wb.concat(/\b/, (Ab = [...lb, "super", "import"].map((bb => `${bb}\\s*\\(`)), wb.concat("(?!", Ab.join("|"), ")")), Mb, wb.lookahead(/\s*\(/)),
        className: "title.function",
        relevance: 0
      };
      var Ab;
      const Wb = {
          LO: wb.concat(/\./, wb.lookahead(wb.concat(Mb, /(?![0-9A-Za-z$_(])/))),
          end: Mb,
          excludeBegin: !0,
          keywords: "prototype",
          className: "property",
          relevance: 0
        },
        Jb = {
          match: [/get|set/, /\s+/, Mb, /(?=\()/],
          className: {
            1: "keyword",
            3: "title.function"
          },
          contains: [{
            LO: /\(\)/
          }, Db]
        },
        Sb = "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" + bb.UNDERSCORE_IDENT_RE + ")\\s*=>",
        Nb = {
          match: [/const|var|let/, /\s+/, Mb, /\s*/, /=\s*/, /(async\s*)?/, wb.lookahead(Sb)],
          keywords: "async",
          className: {
            1: "keyword",
            3: "title.function"
          },
          contains: [Db]
        };
      return {
        name: "JavaScript",
        aliases: ["js", "jsx", "mjs", "cjs"],
        keywords: Cb,
        exports: {
          PARAMS_CONTAINS: Rb,
          CLASS_REFERENCE: Yb
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
          LO: /^\s*['"]use (strict|asm)['"]/
        }, bb.APOS_STRING_MODE, bb.QUOTE_STRING_MODE, hb, zb, Xb, xb, jb, {
          match: /\$\d+/
        }, sb, Yb, {
          scope: "attr",
          match: Mb + wb.lookahead(":"),
          relevance: 0
        }, Nb, {
          LO: "(" + bb.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
          keywords: "return throw case",
          relevance: 0,
          contains: [jb, bb.REGEXP_MODE, {
            className: "function",
            LO: Sb,
            returnBegin: !0,
            end: "\\s*=>",
            contains: [{
              className: "params",
              variants: [{
                LO: bb.UNDERSCORE_IDENT_RE,
                relevance: 0
              }, {
                className: null,
                LO: /\(\s*\)/,
                skip: !0
              }, {
                LO: /(\s*)\(/,
                end: /\)/,
                excludeBegin: !0,
                excludeEnd: !0,
                keywords: Cb,
                contains: Rb
              }]
            }]
          }, {
            LO: /,/,
            relevance: 0
          }, {
            match: /\s+/,
            relevance: 0
          }, {
            variants: [{
              LO: Ob,
              end: Ub
            }, {
              match: /<[A-Za-z0-9\\._:-]+\s*\/>/
            }, {
              LO: tb.LO,
              "on:begin": tb.isTrulyOpeningTag,
              end: tb.end
            }],
            subLanguage: "xml",
            contains: [{
              LO: tb.LO,
              end: tb.end,
              skip: !0,
              contains: ["self"]
            }]
          }]
        }, Zb, {
          beginKeywords: "while if switch catch for"
        }, {
          LO: "\\b(?!function)" + bb.UNDERSCORE_IDENT_RE + "\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
          returnBegin: !0,
          label: "func.def",
          contains: [Db, bb.inherit(bb.TITLE_MODE, {
            LO: Mb,
            className: "title.function"
          })]
        }, {
          match: /\.\.\./,
          relevance: 0
        }, Wb, {
          match: "\\$" + Mb,
          relevance: 0
        }, {
          match: [/\bconstructor(?=\s*\()/],
          className: {
            1: "title.function"
          },
          contains: [Db]
        }, fb, {
          relevance: 0,
          match: /\b[A-Z][A-Z_0-9]+\b/,
          className: "variable.constant"
        }, cb, Jb, {
          match: /\$[(.]/
        }]
      }
    }

    function Ub(bb) {
      const wb = bb.regex,
        Mb = Ob(bb),
        Vb = eb,
        gb = ["any", "void", "number", "boolean", "string", "object", "never", "symbol", "bigint", "unknown"],
        lb = {
          LO: [/namespace/, /\s+/, bb.IDENT_RE],
          beginScope: {
            1: "keyword",
            3: "title.class"
          }
        },
        Ub = {
          beginKeywords: "interface",
          end: /\{/,
          excludeEnd: !0,
          keywords: {
            keyword: "interface extends",
            built_in: gb
          },
          contains: [Mb.exports.CLASS_REFERENCE]
        },
        tb = {
          $pattern: eb,
          keyword: Hb.concat(["type", "interface", "public", "private", "protected", "implements", "declare", "abstract", "readonly", "enum", "override", "satisfies"]),
          literal: pb,
          built_in: Ib.concat(gb),
          "variable.language": Lb
        },
        Cb = {
          className: "meta",
          LO: "@" + Vb
        },
        Eb = (bb, wb, Mb) => {
          const eb = bb.contains.findIndex((bb => bb.label === wb));
          if (-1 === eb) throw new Error("can not find mode to replace");
          bb.contains.splice(eb, 1, Mb)
        };
      Object.assign(Mb.keywords, tb), Mb.exports.PARAMS_CONTAINS.push(Cb);
      const Fb = Mb.contains.find((bb => "attr" === bb.scope)),
        Bb = Object.assign({}, Fb, {
          match: wb.concat(Vb, wb.lookahead(/\s*\?:/))
        });
      Mb.exports.PARAMS_CONTAINS.push([Mb.exports.CLASS_REFERENCE, Fb, Bb]), Mb.contains = Mb.contains.concat([Cb, lb, Ub, Bb]), Eb(Mb, "shebang", bb.SHEBANG()), Eb(Mb, "use_strict", {
        className: "meta",
        relevance: 10,
        LO: /^\s*['"]use strict['"]/
      });
      return Mb.contains.find((bb => "func.def" === bb.label)).relevance = 0, Object.assign(Mb, {
        name: "TypeScript",
        aliases: ["ts", "tsx", "mts", "cts"]
      }), Mb
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);