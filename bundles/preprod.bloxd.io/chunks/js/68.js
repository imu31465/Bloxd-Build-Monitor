export const id = 68;
export const ids = [68];
export const modules = {
  3913: yb => {
    function bb(yb) {
      return yb instanceof Map ? yb.clear = yb.delete = yb.set = function() {
        throw new Error("map is read-only")
      } : yb instanceof Set && (yb.add = yb.clear = yb.delete = function() {
        throw new Error("set is read-only")
      }), Object.freeze(yb), Object.getOwnPropertyNames(yb).forEach((Wy => {
        const Uy = yb[Wy],
          hy = typeof Uy;
        "object" !== hy && "function" !== hy || Object.isFrozen(Uy) || bb(Uy)
      })), yb
    }
    class Wy {
      constructor(yb) {
        void 0 === yb.data && (yb.data = {}), this.data = yb.data, this.isMatchIgnored = !1
      }
      ignoreMatch() {
        this.isMatchIgnored = !0
      }
    }

    function Uy(yb) {
      return yb.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;")
    }

    function hy(yb) {
      const bb = Object.create(null);
      for (const fy in yb) bb[fy] = yb[fy];
      for (var Wy = arguments.length, Uy = new Array(Wy > 1 ? Wy - 1 : 0), hy = 1; hy < Wy; hy++) Uy[hy - 1] = arguments[hy];
      return Uy.forEach((function(yb) {
        for (const Wy in yb) bb[Wy] = yb[Wy]
      })), bb
    }
    const fy = yb => !!yb.scope;
    class Zy {
      constructor(yb, bb) {
        this.buffer = "", this.classPrefix = bb.classPrefix, yb.walk(this)
      }
      addText(yb) {
        this.buffer += Uy(yb)
      }
      openNode(yb) {
        if (!fy(yb)) return;
        const bb = ((yb, bb) => {
          let {
            prefix: Wy
          } = bb;
          if (yb.startsWith("language:")) return yb.replace("language:", "language-");
          if (yb.includes(".")) {
            const bb = yb.split(".");
            return [`${Wy}${bb.shift()}`, ...bb.map(((yb, bb) => `${yb}${"_".repeat(bb+1)}`))].join(" ")
          }
          return `${Wy}${yb}`
        })(yb.scope, {
          prefix: this.classPrefix
        });
        this.span(bb)
      }
      closeNode(yb) {
        fy(yb) && (this.buffer += "</span>")
      }
      value() {
        return this.buffer
      }
      span(yb) {
        this.buffer += `<span class="${yb}">`
      }
    }
    const cb = function() {
      let yb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      const bb = {
        children: []
      };
      return Object.assign(bb, yb), bb
    };
    class Py {
      constructor() {
        this.QE = cb(), this.stack = [this.QE]
      }
      get top() {
        return this.stack[this.stack.length - 1]
      }
      get root() {
        return this.QE
      }
      add(yb) {
        this.top.children.push(yb)
      }
      openNode(yb) {
        const bb = cb({
          scope: yb
        });
        this.add(bb), this.stack.push(bb)
      }
      closeNode() {
        if (this.stack.length > 1) return this.stack.pop()
      }
      closeAllNodes() {
        for (; this.closeNode(););
      }
      toJSON() {
        return JSON.stringify(this.QE, null, 4)
      }
      walk(yb) {
        return this.constructor._walk(yb, this.QE)
      }
      static _walk(yb, bb) {
        return "string" === typeof bb ? yb.addText(bb) : bb.children && (yb.openNode(bb), bb.children.forEach((bb => this._walk(yb, bb))), yb.closeNode(bb)), yb
      }
      static _collapse(yb) {
        "string" !== typeof yb && yb.children && (yb.children.every((yb => "string" === typeof yb)) ? yb.children = [yb.children.join("")] : yb.children.forEach((yb => {
          Py._collapse(yb)
        })))
      }
    }
    class oy extends Py {
      constructor(yb) {
        super(), this.options = yb
      }
      addText(yb) {
        "" !== yb && this.add(yb)
      }
      startScope(yb) {
        this.openNode(yb)
      }
      endScope() {
        this.closeNode()
      }
      __addSublanguage(yb, bb) {
        const Wy = yb.root;
        bb && (Wy.scope = `language:${bb}`), this.add(Wy)
      }
      toHTML() {
        return new Zy(this, this.options).value()
      }
      finalize() {
        return this.closeAllNodes(), !0
      }
    }

    function By(yb) {
      return yb ? "string" === typeof yb ? yb : yb.source : null
    }

    function Ky(yb) {
      return sy("(?=", yb, ")")
    }

    function ey(yb) {
      return sy("(?:", yb, ")*")
    }

    function qb(yb) {
      return sy("(?:", yb, ")?")
    }

    function sy() {
      for (var yb = arguments.length, bb = new Array(yb), Wy = 0; Wy < yb; Wy++) bb[Wy] = arguments[Wy];
      return bb.map((yb => By(yb))).join("")
    }

    function Sy() {
      for (var yb = arguments.length, bb = new Array(yb), Wy = 0; Wy < yb; Wy++) bb[Wy] = arguments[Wy];
      const Uy = function(yb) {
        const bb = yb[yb.length - 1];
        return "object" === typeof bb && bb.constructor === Object ? (yb.splice(yb.length - 1, 1), bb) : {}
      }(bb);
      return "(" + (Uy.capture ? "" : "?:") + bb.map((yb => By(yb))).join("|") + ")"
    }

    function Ey(yb) {
      return new RegExp(yb.toString() + "|").exec("").length - 1
    }
    const ly = /\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;

    function mb(yb, bb) {
      let {
        joinWith: Wy
      } = bb, Uy = 0;
      return yb.map((yb => {
        Uy += 1;
        const bb = Uy;
        let Wy = By(yb),
          hy = "";
        for (; Wy.length > 0;) {
          const yb = ly.exec(Wy);
          if (!yb) {
            hy += Wy;
            break
          }
          hy += Wy.substring(0, yb.index), Wy = Wy.substring(yb.index + yb[0].length), "\\" === yb[0][0] && yb[1] ? hy += "\\" + String(Number(yb[1]) + bb) : (hy += yb[0], "(" === yb[0] && Uy++)
        }
        return hy
      })).map((yb => `(${yb})`)).join(Wy)
    }
    const Cy = "[a-zA-Z]\\w*",
      Ty = "[a-zA-Z_]\\w*",
      Vy = "\\b\\d+(\\.\\d+)?",
      Jy = "(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",
      gb = "\\b(0b[01]+)",
      Gy = {
        vU: "\\\\[\\s\\S]",
        relevance: 0
      },
      Oy = {
        scope: "string",
        vU: "'",
        end: "'",
        illegal: "\\n",
        contains: [Gy]
      },
      Ry = {
        scope: "string",
        vU: '"',
        end: '"',
        illegal: "\\n",
        contains: [Gy]
      },
      vb = function(yb, bb) {
        const Wy = hy({
          scope: "comment",
          vU: yb,
          end: bb,
          contains: []
        }, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {});
        Wy.contains.push({
          scope: "doctag",
          vU: "[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",
          end: /(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,
          excludeBegin: !0,
          relevance: 0
        });
        const Uy = Sy("I", "a", "is", "so", "us", "to", "at", "if", "in", "it", "on", /[A-Za-z]+['](d|ve|re|ll|t|s|n)/, /[A-Za-z]+[-][a-z]+/, /[A-Za-z][a-z]{2,}/);
        return Wy.contains.push({
          vU: sy(/[ ]+/, "(", Uy, /[.]?[:]?([.][ ]|[ ])/, "){3}")
        }), Wy
      },
      ib = vb("//", "$"),
      My = vb("/\\*", "\\*/"),
      Yy = vb("#", "$"),
      Xy = {
        scope: "number",
        vU: Vy,
        relevance: 0
      },
      ny = {
        scope: "number",
        vU: Jy,
        relevance: 0
      },
      uy = {
        scope: "number",
        vU: gb,
        relevance: 0
      },
      rb = {
        scope: "regexp",
        vU: /\/(?=[^/\n]*\/)/,
        end: /\/[gimuy]*/,
        contains: [Gy, {
          vU: /\[/,
          end: /\]/,
          relevance: 0,
          contains: [Gy]
        }]
      },
      Hy = {
        scope: "title",
        vU: Cy,
        relevance: 0
      },
      ab = {
        scope: "title",
        vU: Ty,
        relevance: 0
      },
      Fy = {
        vU: "\\.\\s*" + Ty,
        relevance: 0
      };
    var py = Object.freeze({
      __proto__: null,
      APOS_STRING_MODE: Oy,
      BACKSLASH_ESCAPE: Gy,
      BINARY_NUMBER_MODE: uy,
      BINARY_NUMBER_RE: gb,
      COMMENT: vb,
      C_BLOCK_COMMENT_MODE: My,
      C_LINE_COMMENT_MODE: ib,
      C_NUMBER_MODE: ny,
      C_NUMBER_RE: Jy,
      END_SAME_AS_BEGIN: function(yb) {
        return Object.assign(yb, {
          "on:begin": (yb, bb) => {
            bb.data._beginMatch = yb[1]
          },
          "on:end": (yb, bb) => {
            bb.data._beginMatch !== yb[1] && bb.ignoreMatch()
          }
        })
      },
      HASH_COMMENT_MODE: Yy,
      IDENT_RE: Cy,
      MATCH_NOTHING_RE: /\b\B/,
      METHOD_GUARD: Fy,
      NUMBER_MODE: Xy,
      NUMBER_RE: Vy,
      PHRASAL_WORDS_MODE: {
        vU: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/
      },
      QUOTE_STRING_MODE: Ry,
      REGEXP_MODE: rb,
      RE_STARTERS_RE: "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",
      SHEBANG: function() {
        let yb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        const bb = /^#![ ]*\//;
        return yb.binary && (yb.vU = sy(bb, /.*\b/, yb.binary, /\b.*/)), hy({
          scope: "meta",
          vU: bb,
          end: /$/,
          relevance: 0,
          "on:begin": (yb, bb) => {
            0 !== yb.index && bb.ignoreMatch()
          }
        }, yb)
      },
      TITLE_MODE: Hy,
      UNDERSCORE_IDENT_RE: Ty,
      UNDERSCORE_TITLE_MODE: ab
    });

    function Ly(yb, bb) {
      "." === yb.input[yb.index - 1] && bb.ignoreMatch()
    }

    function Qy(yb, bb) {
      void 0 !== yb.className && (yb.scope = yb.className, delete yb.className)
    }

    function jb(yb, bb) {
      bb && yb.beginKeywords && (yb.vU = "\\b(" + yb.beginKeywords.split(" ").join("|") + ")(?!\\.)(?=\\b|\\s)", yb.__beforeBegin = Ly, yb.keywords = yb.keywords || yb.beginKeywords, delete yb.beginKeywords, void 0 === yb.relevance && (yb.relevance = 0))
    }

    function Dy(yb, bb) {
      Array.isArray(yb.illegal) && (yb.illegal = Sy(...yb.illegal))
    }

    function tb(yb, bb) {
      if (yb.match) {
        if (yb.vU || yb.end) throw new Error("begin & end are not supported with match");
        yb.vU = yb.match, delete yb.match
      }
    }

    function wy(yb, bb) {
      void 0 === yb.relevance && (yb.relevance = 1)
    }
    const kb = (yb, bb) => {
        if (!yb.beforeMatch) return;
        if (yb.starts) throw new Error("beforeMatch cannot be used with starts");
        const Wy = Object.assign({}, yb);
        Object.keys(yb).forEach((bb => {
          delete yb[bb]
        })), yb.keywords = Wy.keywords, yb.vU = sy(Wy.beforeMatch, Ky(Wy.vU)), yb.starts = {
          relevance: 0,
          contains: [Object.assign(Wy, {
            endsParent: !0
          })]
        }, yb.relevance = 0, delete Wy.beforeMatch
      },
      Ny = ["of", "and", "for", "in", "not", "or", "if", "then", "parent", "list", "value"];

    function zb(yb, bb) {
      let Wy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "keyword";
      const Uy = Object.create(null);
      return "string" === typeof yb ? hy(Wy, yb.split(" ")) : Array.isArray(yb) ? hy(Wy, yb) : Object.keys(yb).forEach((function(Wy) {
        Object.assign(Uy, zb(yb[Wy], bb, Wy))
      })), Uy;

      function hy(yb, Wy) {
        bb && (Wy = Wy.map((yb => yb.toLowerCase()))), Wy.forEach((function(bb) {
          const Wy = bb.split("|");
          Uy[Wy[0]] = [yb, Iy(Wy[0], Wy[1])]
        }))
      }
    }

    function Iy(yb, bb) {
      return bb ? Number(bb) : function(yb) {
        return Ny.includes(yb.toLowerCase())
      }(yb) ? 0 : 1
    }
    const xb = {},
      Ay = yb => {
        console.error(yb)
      },
      dy = function(yb) {
        for (var bb = arguments.length, Wy = new Array(bb > 1 ? bb - 1 : 0), Uy = 1; Uy < bb; Uy++) Wy[Uy - 1] = arguments[Uy];
        console.log(`WARN: ${yb}`, ...Wy)
      },
      yW = (yb, bb) => {
        xb[`${yb}/${bb}`] || (console.log(`Deprecated as of ${yb}. ${bb}`), xb[`${yb}/${bb}`] = !0)
      },
      bW = new Error;

    function Wb(yb, bb, Wy) {
      let {
        key: Uy
      } = Wy, hy = 0;
      const fy = yb[Uy],
        Zy = {},
        cb = {};
      for (let Py = 1; Py <= bb.length; Py++) cb[Py + hy] = fy[Py], Zy[Py + hy] = !0, hy += Ey(bb[Py - 1]);
      yb[Uy] = cb, yb[Uy]._emit = Zy, yb[Uy]._multi = !0
    }

    function Ub(yb) {
      ! function(yb) {
        yb.scope && "object" === typeof yb.scope && null !== yb.scope && (yb.beginScope = yb.scope, delete yb.scope)
      }(yb), "string" === typeof yb.beginScope && (yb.beginScope = {
          _wrap: yb.beginScope
        }), "string" === typeof yb.endScope && (yb.endScope = {
          _wrap: yb.endScope
        }),
        function(yb) {
          if (Array.isArray(yb.vU)) {
            if (yb.skip || yb.excludeBegin || yb.returnBegin) throw Ay("skip, excludeBegin, returnBegin not compatible with beginScope: {}"), bW;
            if ("object" !== typeof yb.beginScope || null === yb.beginScope) throw Ay("beginScope must be object"), bW;
            Wb(yb, yb.vU, {
              key: "beginScope"
            }), yb.vU = mb(yb.vU, {
              joinWith: ""
            })
          }
        }(yb),
        function(yb) {
          if (Array.isArray(yb.end)) {
            if (yb.skip || yb.excludeEnd || yb.returnEnd) throw Ay("skip, excludeEnd, returnEnd not compatible with endScope: {}"), bW;
            if ("object" !== typeof yb.endScope || null === yb.endScope) throw Ay("endScope must be object"), bW;
            Wb(yb, yb.end, {
              key: "endScope"
            }), yb.end = mb(yb.end, {
              joinWith: ""
            })
          }
        }(yb)
    }

    function hb(yb) {
      function bb(bb, Wy) {
        return new RegExp(By(bb), "m" + (yb.case_insensitive ? "i" : "") + (yb.unicodeRegex ? "u" : "") + (Wy ? "g" : ""))
      }
      class Wy {
        constructor() {
          this.matchIndexes = {}, this.regexes = [], this.matchAt = 1, this.position = 0
        }
        addRule(yb, bb) {
          bb.position = this.position++, this.matchIndexes[this.matchAt] = bb, this.regexes.push([bb, yb]), this.matchAt += Ey(yb) + 1
        }
        compile() {
          0 === this.regexes.length && (this.exec = () => null);
          const yb = this.regexes.map((yb => yb[1]));
          this.matcherRe = bb(mb(yb, {
            joinWith: "|"
          }), !0), this.lastIndex = 0
        }
        exec(yb) {
          this.matcherRe.lastIndex = this.lastIndex;
          const bb = this.matcherRe.exec(yb);
          if (!bb) return null;
          const Wy = bb.findIndex(((yb, bb) => bb > 0 && void 0 !== yb)),
            Uy = this.matchIndexes[Wy];
          return bb.splice(0, Wy), Object.assign(bb, Uy)
        }
      }
      class Uy {
        constructor() {
          this.rules = [], this.multiRegexes = [], this.count = 0, this.lastIndex = 0, this.regexIndex = 0
        }
        getMatcher(yb) {
          if (this.multiRegexes[yb]) return this.multiRegexes[yb];
          const bb = new Wy;
          return this.rules.slice(yb).forEach((yb => {
            let [Wy, Uy] = yb;
            return bb.addRule(Wy, Uy)
          })), bb.compile(), this.multiRegexes[yb] = bb, bb
        }
        resumingScanAtSamePosition() {
          return 0 !== this.regexIndex
        }
        considerAll() {
          this.regexIndex = 0
        }
        addRule(yb, bb) {
          this.rules.push([yb, bb]), "vU" === bb.type && this.count++
        }
        exec(yb) {
          const bb = this.getMatcher(this.regexIndex);
          bb.lastIndex = this.lastIndex;
          let Wy = bb.exec(yb);
          if (this.resumingScanAtSamePosition())
            if (Wy && Wy.index === this.lastIndex);
            else {
              const bb = this.getMatcher(0);
              bb.lastIndex = this.lastIndex + 1, Wy = bb.exec(yb)
            } return Wy && (this.regexIndex += Wy.position + 1, this.regexIndex === this.count && this.considerAll()), Wy
        }
      }
      if (yb.compilerExtensions || (yb.compilerExtensions = []), yb.contains && yb.contains.includes("self")) throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");
      return yb.classNameAliases = hy(yb.classNameAliases || {}),
        function Wy(fy, Zy) {
          const cb = fy;
          if (fy.isCompiled) return cb;
          [Qy, tb, Ub, kb].forEach((yb => yb(fy, Zy))), yb.compilerExtensions.forEach((yb => yb(fy, Zy))), fy.__beforeBegin = null, [jb, Dy, wy].forEach((yb => yb(fy, Zy))), fy.isCompiled = !0;
          let Py = null;
          return "object" === typeof fy.keywords && fy.keywords.$pattern && (fy.keywords = Object.assign({}, fy.keywords), Py = fy.keywords.$pattern, delete fy.keywords.$pattern), Py = Py || /\w+/, fy.keywords && (fy.keywords = zb(fy.keywords, yb.case_insensitive)), cb.keywordPatternRe = bb(Py, !0), Zy && (fy.vU || (fy.vU = /\B|\b/), cb.beginRe = bb(cb.vU), fy.end || fy.endsWithParent || (fy.end = /\B|\b/), fy.end && (cb.endRe = bb(cb.end)), cb.terminatorEnd = By(cb.end) || "", fy.endsWithParent && Zy.terminatorEnd && (cb.terminatorEnd += (fy.end ? "|" : "") + Zy.terminatorEnd)), fy.illegal && (cb.illegalRe = bb(fy.illegal)), fy.contains || (fy.contains = []), fy.contains = [].concat(...fy.contains.map((function(yb) {
            return function(yb) {
              yb.variants && !yb.cachedVariants && (yb.cachedVariants = yb.variants.map((function(bb) {
                return hy(yb, {
                  variants: null
                }, bb)
              })));
              if (yb.cachedVariants) return yb.cachedVariants;
              if (fb(yb)) return hy(yb, {
                starts: yb.starts ? hy(yb.starts) : null
              });
              if (Object.isFrozen(yb)) return hy(yb);
              return yb
            }("self" === yb ? fy : yb)
          }))), fy.contains.forEach((function(yb) {
            Wy(yb, cb)
          })), fy.starts && Wy(fy.starts, Zy), cb.matcher = function(yb) {
            const bb = new Uy;
            return yb.contains.forEach((yb => bb.addRule(yb.vU, {
              rule: yb,
              type: "vU"
            }))), yb.terminatorEnd && bb.addRule(yb.terminatorEnd, {
              type: "end"
            }), yb.illegal && bb.addRule(yb.illegal, {
              type: "illegal"
            }), bb
          }(cb), cb
        }(yb)
    }

    function fb(yb) {
      return !!yb && (yb.endsWithParent || fb(yb.starts))
    }
    class Zb extends Error {
      constructor(yb, bb) {
        super(yb), this.name = "HTMLInjectionError", this.html = bb
      }
    }
    const cW = Uy,
      Pb = hy,
      ob = Symbol("nomatch"),
      Bb = function(yb) {
        const Uy = Object.create(null),
          hy = Object.create(null),
          fy = [];
        let Zy = !0;
        const cb = "Could not find the language '{}', did you forget to load/include a language module?",
          Py = {
            disableAutodetect: !0,
            name: "Plain text",
            contains: []
          };
        let By = {
          ignoreUnescapedHTML: !1,
          throwUnescapedHTML: !1,
          noHighlightRe: /^(no-?highlight)$/i,
          languageDetectRe: /\blang(?:uage)?-([\w-]+)\b/i,
          classPrefix: "hljs-",
          cssSelector: "pre code",
          languages: null,
          __emitter: oy
        };

        function Ey(yb) {
          return By.noHighlightRe.test(yb)
        }

        function ly(yb, bb, Wy) {
          let Uy = "",
            hy = "";
          "object" === typeof bb ? (Uy = yb, Wy = bb.ignoreIllegals, hy = bb.language) : (yW("10.7.0", "highlight(lang, code, ...args) has been deprecated."), yW("10.7.0", "Please use highlight(code, options) instead.\nhttps://github.com/highlightjs/highlight.js/issues/2277"), hy = yb, Uy = bb), void 0 === Wy && (Wy = !0);
          const fy = {
            code: Uy,
            language: hy
          };
          Ry("before:highlight", fy);
          const Zy = fy.result ? fy.result : mb(fy.language, fy.code, Wy);
          return Zy.code = fy.code, Ry("after:highlight", Zy), Zy
        }

        function mb(yb, bb, hy, fy) {
          const Py = Object.create(null);

          function oy() {
            if (!Ry.keywords) return void ib.addText(My);
            let yb = 0;
            Ry.keywordPatternRe.lastIndex = 0;
            let bb = Ry.keywordPatternRe.exec(My),
              Wy = "";
            for (; bb;) {
              Wy += My.substring(yb, bb.index);
              const hy = Jy.case_insensitive ? bb[0].toLowerCase() : bb[0],
                fy = (Uy = hy, Ry.keywords[Uy]);
              if (fy) {
                const [yb, Uy] = fy;
                if (ib.addText(Wy), Wy = "", Py[hy] = (Py[hy] || 0) + 1, Py[hy] <= 7 && (Yy += Uy), yb.startsWith("_")) Wy += bb[0];
                else {
                  const Wy = Jy.classNameAliases[yb] || yb;
                  ey(bb[0], Wy)
                }
              } else Wy += bb[0];
              yb = Ry.keywordPatternRe.lastIndex, bb = Ry.keywordPatternRe.exec(My)
            }
            var Uy;
            Wy += My.substring(yb), ib.addText(Wy)
          }

          function Ky() {
            null != Ry.subLanguage ? function() {
              if ("" === My) return;
              let yb = null;
              if ("string" === typeof Ry.subLanguage) {
                if (!Uy[Ry.subLanguage]) return void ib.addText(My);
                yb = mb(Ry.subLanguage, My, !0, vb[Ry.subLanguage]), vb[Ry.subLanguage] = yb._top
              } else yb = Cy(My, Ry.subLanguage.length ? Ry.subLanguage : null);
              Ry.relevance > 0 && (Yy += yb.relevance), ib.__addSublanguage(yb._emitter, yb.language)
            }() : oy(), My = ""
          }

          function ey(yb, bb) {
            "" !== yb && (ib.startScope(bb), ib.addText(yb), ib.endScope())
          }

          function qb(yb, bb) {
            let Wy = 1;
            const Uy = bb.length - 1;
            for (; Wy <= Uy;) {
              if (!yb._emit[Wy]) {
                Wy++;
                continue
              }
              const Uy = Jy.classNameAliases[yb[Wy]] || yb[Wy],
                hy = bb[Wy];
              Uy ? ey(hy, Uy) : (My = hy, oy(), My = ""), Wy++
            }
          }

          function sy(yb, bb) {
            return yb.scope && "string" === typeof yb.scope && ib.openNode(Jy.classNameAliases[yb.scope] || yb.scope), yb.beginScope && (yb.beginScope._wrap ? (ey(My, Jy.classNameAliases[yb.beginScope._wrap] || yb.beginScope._wrap), My = "") : yb.beginScope._multi && (qb(yb.beginScope, bb), My = "")), Ry = Object.create(yb, {
              parent: {
                value: Ry
              }
            }), Ry
          }

          function Sy(yb, bb, Uy) {
            let hy = function(yb, bb) {
              const Wy = yb && yb.exec(bb);
              return Wy && 0 === Wy.index
            }(yb.endRe, Uy);
            if (hy) {
              if (yb["on:end"]) {
                const Uy = new Wy(yb);
                yb["on:end"](bb, Uy), Uy.isMatchIgnored && (hy = !1)
              }
              if (hy) {
                for (; yb.endsParent && yb.parent;) yb = yb.parent;
                return yb
              }
            }
            if (yb.endsWithParent) return Sy(yb.parent, bb, Uy)
          }

          function Ey(yb) {
            return 0 === Ry.matcher.regexIndex ? (My += yb[0], 1) : (uy = !0, 0)
          }

          function ly(yb) {
            const Wy = yb[0],
              Uy = bb.substring(yb.index),
              hy = Sy(Ry, yb, Uy);
            if (!hy) return ob;
            const fy = Ry;
            Ry.endScope && Ry.endScope._wrap ? (Ky(), ey(Wy, Ry.endScope._wrap)) : Ry.endScope && Ry.endScope._multi ? (Ky(), qb(Ry.endScope, yb)) : fy.skip ? My += Wy : (fy.returnEnd || fy.excludeEnd || (My += Wy), Ky(), fy.excludeEnd && (My = Wy));
            do {
              Ry.scope && ib.closeNode(), Ry.skip || Ry.subLanguage || (Yy += Ry.relevance), Ry = Ry.parent
            } while (Ry !== hy.parent);
            return hy.starts && sy(hy.starts, yb), fy.returnEnd ? 0 : Wy.length
          }
          let Ty = {};

          function Vy(Uy, fy) {
            const cb = fy && fy[0];
            if (My += Uy, null == cb) return Ky(), 0;
            if ("vU" === Ty.type && "end" === fy.type && Ty.index === fy.index && "" === cb) {
              if (My += bb.slice(fy.index, fy.index + 1), !Zy) {
                const bb = new Error(`0 width match regex (${yb})`);
                throw bb.languageName = yb, bb.badRule = Ty.rule, bb
              }
              return 1
            }
            if (Ty = fy, "vU" === fy.type) return function(yb) {
              const bb = yb[0],
                Uy = yb.rule,
                hy = new Wy(Uy),
                fy = [Uy.__beforeBegin, Uy["on:begin"]];
              for (const Wy of fy)
                if (Wy && (Wy(yb, hy), hy.isMatchIgnored)) return Ey(bb);
              return Uy.skip ? My += bb : (Uy.excludeBegin && (My += bb), Ky(), Uy.returnBegin || Uy.excludeBegin || (My = bb)), sy(Uy, yb), Uy.returnBegin ? 0 : bb.length
            }(fy);
            if ("illegal" === fy.type && !hy) {
              const yb = new Error('Illegal lexeme "' + cb + '" for mode "' + (Ry.scope || "<unnamed>") + '"');
              throw yb.mode = Ry, yb
            }
            if ("end" === fy.type) {
              const yb = ly(fy);
              if (yb !== ob) return yb
            }
            if ("illegal" === fy.type && "" === cb) return My += "\n", 1;
            if (ny > 1e5 && ny > 3 * fy.index) {
              throw new Error("potential infinite loop, way more iterations than matches")
            }
            return My += cb, cb.length
          }
          const Jy = gb(yb);
          if (!Jy) throw Ay(cb.replace("{}", yb)), new Error('Unknown language: "' + yb + '"');
          const Gy = hb(Jy);
          let Oy = "",
            Ry = fy || Gy;
          const vb = {},
            ib = new By.__emitter(By);
          ! function() {
            const yb = [];
            for (let bb = Ry; bb !== Jy; bb = bb.parent) bb.scope && yb.unshift(bb.scope);
            yb.forEach((yb => ib.openNode(yb)))
          }();
          let My = "",
            Yy = 0,
            Xy = 0,
            ny = 0,
            uy = !1;
          try {
            if (Jy.__emitTokens) Jy.__emitTokens(bb, ib);
            else {
              for (Ry.matcher.considerAll();;) {
                ny++, uy ? uy = !1 : Ry.matcher.considerAll(), Ry.matcher.lastIndex = Xy;
                const yb = Ry.matcher.exec(bb);
                if (!yb) break;
                const Wy = Vy(bb.substring(Xy, yb.index), yb);
                Xy = yb.index + Wy
              }
              Vy(bb.substring(Xy))
            }
            return ib.finalize(), Oy = ib.toHTML(), {
              language: yb,
              value: Oy,
              relevance: Yy,
              illegal: !1,
              _emitter: ib,
              _top: Ry
            }
          } catch (rb) {
            if (rb.message && rb.message.includes("Illegal")) return {
              language: yb,
              value: cW(bb),
              illegal: !0,
              relevance: 0,
              _illegalBy: {
                message: rb.message,
                index: Xy,
                context: bb.slice(Xy - 100, Xy + 100),
                mode: rb.mode,
                resultSoFar: Oy
              },
              _emitter: ib
            };
            if (Zy) return {
              language: yb,
              value: cW(bb),
              illegal: !1,
              relevance: 0,
              errorRaised: rb,
              _emitter: ib,
              _top: Ry
            };
            throw rb
          }
        }

        function Cy(yb, bb) {
          bb = bb || By.languages || Object.keys(Uy);
          const Wy = function(yb) {
              const bb = {
                value: cW(yb),
                illegal: !1,
                relevance: 0,
                _top: Py,
                _emitter: new By.__emitter(By)
              };
              return bb._emitter.addText(yb), bb
            }(yb),
            hy = bb.filter(gb).filter(Oy).map((bb => mb(bb, yb, !1)));
          hy.unshift(Wy);
          const fy = hy.sort(((yb, bb) => {
              if (yb.relevance !== bb.relevance) return bb.relevance - yb.relevance;
              if (yb.language && bb.language) {
                if (gb(yb.language).supersetOf === bb.language) return 1;
                if (gb(bb.language).supersetOf === yb.language) return -1
              }
              return 0
            })),
            [Zy, cb] = fy,
            oy = Zy;
          return oy.secondBest = cb, oy
        }

        function Ty(yb) {
          let bb = null;
          const Wy = function(yb) {
            let bb = yb.className + " ";
            bb += yb.parentNode ? yb.parentNode.className : "";
            const Wy = By.languageDetectRe.exec(bb);
            if (Wy) {
              const bb = gb(Wy[1]);
              return bb || (dy(cb.replace("{}", Wy[1])), dy("Falling back to no-highlight mode for this block.", yb)), bb ? Wy[1] : "no-highlight"
            }
            return bb.split(/\s+/).find((yb => Ey(yb) || gb(yb)))
          }(yb);
          if (Ey(Wy)) return;
          if (Ry("before:highlightElement", {
              el: yb,
              language: Wy
            }), yb.dataset.highlighted) return void console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.", yb);
          if (yb.children.length > 0 && (By.ignoreUnescapedHTML || (console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."), console.warn("https://github.com/highlightjs/highlight.js/wiki/security"), console.warn("The element with unescaped HTML:"), console.warn(yb)), By.throwUnescapedHTML)) {
            throw new Zb("One of your code blocks includes unescaped HTML.", yb.innerHTML)
          }
          bb = yb;
          const Uy = bb.textContent,
            fy = Wy ? ly(Uy, {
              language: Wy,
              ignoreIllegals: !0
            }) : Cy(Uy);
          yb.innerHTML = fy.value, yb.dataset.highlighted = "yes",
            function(yb, bb, Wy) {
              const Uy = bb && hy[bb] || Wy;
              yb.classList.add("hljs"), yb.classList.add(`language-${Uy}`)
            }(yb, Wy, fy.language), yb.result = {
              language: fy.language,
              re: fy.relevance,
              relevance: fy.relevance
            }, fy.secondBest && (yb.secondBest = {
              language: fy.secondBest.language,
              relevance: fy.secondBest.relevance
            }), Ry("after:highlightElement", {
              el: yb,
              result: fy,
              text: Uy
            })
        }
        let Vy = !1;

        function Jy() {
          if ("loading" === document.readyState) return Vy || window.addEventListener("DOMContentLoaded", (function() {
            Jy()
          }), !1), void(Vy = !0);
          document.querySelectorAll(By.cssSelector).forEach(Ty)
        }

        function gb(yb) {
          return yb = (yb || "").toLowerCase(), Uy[yb] || Uy[hy[yb]]
        }

        function Gy(yb, bb) {
          let {
            languageName: Wy
          } = bb;
          "string" === typeof yb && (yb = [yb]), yb.forEach((yb => {
            hy[yb.toLowerCase()] = Wy
          }))
        }

        function Oy(yb) {
          const bb = gb(yb);
          return bb && !bb.disableAutodetect
        }

        function Ry(yb, bb) {
          const Wy = yb;
          fy.forEach((function(yb) {
            yb[Wy] && yb[Wy](bb)
          }))
        }
        Object.assign(yb, {
          highlight: ly,
          highlightAuto: Cy,
          highlightAll: Jy,
          highlightElement: Ty,
          highlightBlock: function(yb) {
            return yW("10.7.0", "highlightBlock will be removed entirely in v12.0"), yW("10.7.0", "Please use highlightElement now."), Ty(yb)
          },
          configure: function(yb) {
            By = Pb(By, yb)
          },
          initHighlighting: () => {
            Jy(), yW("10.6.0", "initHighlighting() deprecated.  Use highlightAll() now.")
          },
          initHighlightingOnLoad: function() {
            Jy(), yW("10.6.0", "initHighlightingOnLoad() deprecated.  Use highlightAll() now.")
          },
          registerLanguage: function(bb, Wy) {
            let hy = null;
            try {
              hy = Wy(yb)
            } catch (fy) {
              if (Ay("Language definition for '{}' could not be registered.".replace("{}", bb)), !Zy) throw fy;
              Ay(fy), hy = Py
            }
            hy.name || (hy.name = bb), Uy[bb] = hy, hy.rawDefinition = Wy.bind(null, yb), hy.aliases && Gy(hy.aliases, {
              languageName: bb
            })
          },
          unregisterLanguage: function(yb) {
            delete Uy[yb];
            for (const bb of Object.keys(hy)) hy[bb] === yb && delete hy[bb]
          },
          listLanguages: function() {
            return Object.keys(Uy)
          },
          getLanguage: gb,
          registerAliases: Gy,
          autoDetection: Oy,
          inherit: Pb,
          addPlugin: function(yb) {
            ! function(yb) {
              yb["before:highlightBlock"] && !yb["before:highlightElement"] && (yb["before:highlightElement"] = bb => {
                yb["before:highlightBlock"](Object.assign({
                  block: bb.el
                }, bb))
              }), yb["after:highlightBlock"] && !yb["after:highlightElement"] && (yb["after:highlightElement"] = bb => {
                yb["after:highlightBlock"](Object.assign({
                  block: bb.el
                }, bb))
              })
            }(yb), fy.push(yb)
          },
          removePlugin: function(yb) {
            const bb = fy.indexOf(yb); - 1 !== bb && fy.splice(bb, 1)
          }
        }), yb.debugMode = function() {
          Zy = !1
        }, yb.safeMode = function() {
          Zy = !0
        }, yb.versionString = "11.11.1", yb.regex = {
          concat: sy,
          lookahead: Ky,
          either: Sy,
          optional: qb,
          anyNumberOfTimes: ey
        };
        for (const Wy in py) "object" === typeof py[Wy] && bb(py[Wy]);
        return Object.assign(yb, py), yb
      },
      Kb = Bb({});
    Kb.newInstance = () => Bb({}), yb.exports = Kb, Kb.HighlightJS = Kb, Kb.default = Kb
  },
  3904: (yb, bb, Wy) => {
    Wy.d(bb, {
      e: () => Uy
    });
    const Uy = Wy(3913)
  },
  3920: (yb, bb, Wy) => {
    Wy.d(bb, {
      c: () => Ky
    });
    const Uy = "[A-Za-z$_][0-9A-Za-z$_]*",
      hy = ["as", "in", "of", "if", "for", "while", "finally", "var", "new", "function", "do", "return", "void", "else", "break", "catch", "instanceof", "with", "throw", "case", "default", "try", "switch", "continue", "typeof", "delete", "let", "yield", "const", "class", "debugger", "async", "await", "static", "import", "from", "export", "extends", "using"],
      fy = ["true", "false", "null", "undefined", "NaN", "Infinity"],
      Zy = ["Object", "Function", "Boolean", "Symbol", "Math", "Date", "Number", "BigInt", "String", "RegExp", "Array", "Float32Array", "Float64Array", "Int8Array", "Uint8Array", "Uint8ClampedArray", "Int16Array", "Int32Array", "Uint16Array", "Uint32Array", "BigInt64Array", "BigUint64Array", "Set", "Map", "WeakSet", "WeakMap", "ArrayBuffer", "SharedArrayBuffer", "Atomics", "DataView", "JSON", "Promise", "Generator", "GeneratorFunction", "AsyncFunction", "Reflect", "Proxy", "Intl", "WebAssembly"],
      cb = ["Error", "EvalError", "InternalError", "RangeError", "ReferenceError", "SyntaxError", "TypeError", "URIError"],
      Py = ["setInterval", "setTimeout", "clearInterval", "clearTimeout", "require", "exports", "eval", "isFinite", "isNaN", "parseFloat", "parseInt", "decodeURI", "decodeURIComponent", "encodeURI", "encodeURIComponent", "escape", "unescape"],
      oy = ["arguments", "this", "super", "console", "window", "document", "localStorage", "sessionStorage", "module", "global"],
      By = [].concat(Py, Zy, cb);

    function Ky(yb) {
      const bb = yb.regex,
        Wy = Uy,
        Ky = "<>",
        ey = "</>",
        qb = {
          vU: /<[A-Za-z0-9\\._:-]+/,
          end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
          isTrulyOpeningTag: (yb, bb) => {
            const Wy = yb[0].length + yb.index,
              Uy = yb.input[Wy];
            if ("<" === Uy || "," === Uy) return void bb.ignoreMatch();
            let hy;
            ">" === Uy && (((yb, bb) => {
              let {
                after: Wy
              } = bb;
              const Uy = "</" + yb[0].slice(1);
              return -1 !== yb.input.indexOf(Uy, Wy)
            })(yb, {
              after: Wy
            }) || bb.ignoreMatch());
            const fy = yb.input.substring(Wy);
            ((hy = fy.match(/^\s*=/)) || (hy = fy.match(/^\s+extends\s+/)) && 0 === hy.index) && bb.ignoreMatch()
          }
        },
        sy = {
          $pattern: Uy,
          keyword: hy,
          literal: fy,
          built_in: By,
          "variable.language": oy
        },
        Sy = "[0-9](_?[0-9])*",
        Ey = `\\.(${Sy})`,
        ly = "0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",
        mb = {
          className: "number",
          variants: [{
            vU: `(\\b(${ly})((${Ey})|\\.)?|(${Ey}))[eE][+-]?(${Sy})\\b`
          }, {
            vU: `\\b(${ly})\\b((${Ey})\\b|\\.)?|(${Ey})\\b`
          }, {
            vU: "\\b(0|[1-9](_?[0-9])*)n\\b"
          }, {
            vU: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"
          }, {
            vU: "\\b0[bB][0-1](_?[0-1])*n?\\b"
          }, {
            vU: "\\b0[oO][0-7](_?[0-7])*n?\\b"
          }, {
            vU: "\\b0[0-7]+n?\\b"
          }],
          relevance: 0
        },
        Cy = {
          className: "subst",
          vU: "\\$\\{",
          end: "\\}",
          keywords: sy,
          contains: []
        },
        Ty = {
          vU: ".?html`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [yb.BACKSLASH_ESCAPE, Cy],
            subLanguage: "xml"
          }
        },
        Vy = {
          vU: ".?css`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [yb.BACKSLASH_ESCAPE, Cy],
            subLanguage: "css"
          }
        },
        Jy = {
          vU: ".?gql`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [yb.BACKSLASH_ESCAPE, Cy],
            subLanguage: "graphql"
          }
        },
        gb = {
          className: "string",
          vU: "`",
          end: "`",
          contains: [yb.BACKSLASH_ESCAPE, Cy]
        },
        Gy = {
          className: "comment",
          variants: [yb.COMMENT(/\/\*\*(?!\/)/, "\\*/", {
            relevance: 0,
            contains: [{
              vU: "(?=@[A-Za-z]+)",
              relevance: 0,
              contains: [{
                className: "doctag",
                vU: "@[A-Za-z]+"
              }, {
                className: "type",
                vU: "\\{",
                end: "\\}",
                excludeEnd: !0,
                excludeBegin: !0,
                relevance: 0
              }, {
                className: "variable",
                vU: Wy + "(?=\\s*(-)|$)",
                endsParent: !0,
                relevance: 0
              }, {
                vU: /(?=[^\n])\s/,
                relevance: 0
              }]
            }]
          }), yb.C_BLOCK_COMMENT_MODE, yb.C_LINE_COMMENT_MODE]
        },
        Oy = [yb.APOS_STRING_MODE, yb.QUOTE_STRING_MODE, Ty, Vy, Jy, gb, {
          match: /\$\d+/
        }, mb];
      Cy.contains = Oy.concat({
        vU: /\{/,
        end: /\}/,
        keywords: sy,
        contains: ["self"].concat(Oy)
      });
      const Ry = [].concat(Gy, Cy.contains),
        vb = Ry.concat([{
          vU: /(\s*)\(/,
          end: /\)/,
          keywords: sy,
          contains: ["self"].concat(Ry)
        }]),
        ib = {
          className: "params",
          vU: /(\s*)\(/,
          end: /\)/,
          excludeBegin: !0,
          excludeEnd: !0,
          keywords: sy,
          contains: vb
        },
        My = {
          variants: [{
            match: [/class/, /\s+/, Wy, /\s+/, /extends/, /\s+/, bb.concat(Wy, "(", bb.concat(/\./, Wy), ")*")],
            scope: {
              1: "keyword",
              3: "title.class",
              5: "keyword",
              7: "title.class.inherited"
            }
          }, {
            match: [/class/, /\s+/, Wy],
            scope: {
              1: "keyword",
              3: "title.class"
            }
          }]
        },
        Yy = {
          relevance: 0,
          match: bb.either(/\bJSON/, /\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/, /\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/, /\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),
          className: "title.class",
          keywords: {
            _: [...Zy, ...cb]
          }
        },
        Xy = {
          variants: [{
            match: [/function/, /\s+/, Wy, /(?=\s*\()/]
          }, {
            match: [/function/, /\s*(?=\()/]
          }],
          className: {
            1: "keyword",
            3: "title.function"
          },
          label: "func.def",
          contains: [ib],
          illegal: /%/
        };
      const ny = {
        match: bb.concat(/\b/, (uy = [...Py, "super", "import"].map((yb => `${yb}\\s*\\(`)), bb.concat("(?!", uy.join("|"), ")")), Wy, bb.lookahead(/\s*\(/)),
        className: "title.function",
        relevance: 0
      };
      var uy;
      const rb = {
          vU: bb.concat(/\./, bb.lookahead(bb.concat(Wy, /(?![0-9A-Za-z$_(])/))),
          end: Wy,
          excludeBegin: !0,
          keywords: "prototype",
          className: "property",
          relevance: 0
        },
        Hy = {
          match: [/get|set/, /\s+/, Wy, /(?=\()/],
          className: {
            1: "keyword",
            3: "title.function"
          },
          contains: [{
            vU: /\(\)/
          }, ib]
        },
        ab = "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" + yb.UNDERSCORE_IDENT_RE + ")\\s*=>",
        Fy = {
          match: [/const|var|let/, /\s+/, Wy, /\s*/, /=\s*/, /(async\s*)?/, bb.lookahead(ab)],
          keywords: "async",
          className: {
            1: "keyword",
            3: "title.function"
          },
          contains: [ib]
        };
      return {
        name: "JavaScript",
        aliases: ["js", "jsx", "mjs", "cjs"],
        keywords: sy,
        exports: {
          PARAMS_CONTAINS: vb,
          CLASS_REFERENCE: Yy
        },
        illegal: /#(?![$_A-z])/,
        contains: [yb.SHEBANG({
          label: "shebang",
          binary: "node",
          relevance: 5
        }), {
          label: "use_strict",
          className: "meta",
          relevance: 10,
          vU: /^\s*['"]use (strict|asm)['"]/
        }, yb.APOS_STRING_MODE, yb.QUOTE_STRING_MODE, Ty, Vy, Jy, gb, Gy, {
          match: /\$\d+/
        }, mb, Yy, {
          scope: "attr",
          match: Wy + bb.lookahead(":"),
          relevance: 0
        }, Fy, {
          vU: "(" + yb.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
          keywords: "return throw case",
          relevance: 0,
          contains: [Gy, yb.REGEXP_MODE, {
            className: "function",
            vU: ab,
            returnBegin: !0,
            end: "\\s*=>",
            contains: [{
              className: "params",
              variants: [{
                vU: yb.UNDERSCORE_IDENT_RE,
                relevance: 0
              }, {
                className: null,
                vU: /\(\s*\)/,
                skip: !0
              }, {
                vU: /(\s*)\(/,
                end: /\)/,
                excludeBegin: !0,
                excludeEnd: !0,
                keywords: sy,
                contains: vb
              }]
            }]
          }, {
            vU: /,/,
            relevance: 0
          }, {
            match: /\s+/,
            relevance: 0
          }, {
            variants: [{
              vU: Ky,
              end: ey
            }, {
              match: /<[A-Za-z0-9\\._:-]+\s*\/>/
            }, {
              vU: qb.vU,
              "on:begin": qb.isTrulyOpeningTag,
              end: qb.end
            }],
            subLanguage: "xml",
            contains: [{
              vU: qb.vU,
              end: qb.end,
              skip: !0,
              contains: ["self"]
            }]
          }]
        }, Xy, {
          beginKeywords: "while if switch catch for"
        }, {
          vU: "\\b(?!function)" + yb.UNDERSCORE_IDENT_RE + "\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
          returnBegin: !0,
          label: "func.def",
          contains: [ib, yb.inherit(yb.TITLE_MODE, {
            vU: Wy,
            className: "title.function"
          })]
        }, {
          match: /\.\.\./,
          relevance: 0
        }, rb, {
          match: "\\$" + Wy,
          relevance: 0
        }, {
          match: [/\bconstructor(?=\s*\()/],
          className: {
            1: "title.function"
          },
          contains: [ib]
        }, ny, {
          relevance: 0,
          match: /\b[A-Z][A-Z_0-9]+\b/,
          className: "variable.constant"
        }, My, Hy, {
          match: /\$[(.]/
        }]
      }
    }
  },
  3929: (yb, bb, Wy) => {
    Wy.d(bb, {
      c: () => ey
    });
    const Uy = "[A-Za-z$_][0-9A-Za-z$_]*",
      hy = ["as", "in", "of", "if", "for", "while", "finally", "var", "new", "function", "do", "return", "void", "else", "break", "catch", "instanceof", "with", "throw", "case", "default", "try", "switch", "continue", "typeof", "delete", "let", "yield", "const", "class", "debugger", "async", "await", "static", "import", "from", "export", "extends", "using"],
      fy = ["true", "false", "null", "undefined", "NaN", "Infinity"],
      Zy = ["Object", "Function", "Boolean", "Symbol", "Math", "Date", "Number", "BigInt", "String", "RegExp", "Array", "Float32Array", "Float64Array", "Int8Array", "Uint8Array", "Uint8ClampedArray", "Int16Array", "Int32Array", "Uint16Array", "Uint32Array", "BigInt64Array", "BigUint64Array", "Set", "Map", "WeakSet", "WeakMap", "ArrayBuffer", "SharedArrayBuffer", "Atomics", "DataView", "JSON", "Promise", "Generator", "GeneratorFunction", "AsyncFunction", "Reflect", "Proxy", "Intl", "WebAssembly"],
      cb = ["Error", "EvalError", "InternalError", "RangeError", "ReferenceError", "SyntaxError", "TypeError", "URIError"],
      Py = ["setInterval", "setTimeout", "clearInterval", "clearTimeout", "require", "exports", "eval", "isFinite", "isNaN", "parseFloat", "parseInt", "decodeURI", "decodeURIComponent", "encodeURI", "encodeURIComponent", "escape", "unescape"],
      oy = ["arguments", "this", "super", "console", "window", "document", "localStorage", "sessionStorage", "module", "global"],
      By = [].concat(Py, Zy, cb);

    function Ky(yb) {
      const bb = yb.regex,
        Wy = Uy,
        Ky = "<>",
        ey = "</>",
        qb = {
          vU: /<[A-Za-z0-9\\._:-]+/,
          end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
          isTrulyOpeningTag: (yb, bb) => {
            const Wy = yb[0].length + yb.index,
              Uy = yb.input[Wy];
            if ("<" === Uy || "," === Uy) return void bb.ignoreMatch();
            let hy;
            ">" === Uy && (((yb, bb) => {
              let {
                after: Wy
              } = bb;
              const Uy = "</" + yb[0].slice(1);
              return -1 !== yb.input.indexOf(Uy, Wy)
            })(yb, {
              after: Wy
            }) || bb.ignoreMatch());
            const fy = yb.input.substring(Wy);
            ((hy = fy.match(/^\s*=/)) || (hy = fy.match(/^\s+extends\s+/)) && 0 === hy.index) && bb.ignoreMatch()
          }
        },
        sy = {
          $pattern: Uy,
          keyword: hy,
          literal: fy,
          built_in: By,
          "variable.language": oy
        },
        Sy = "[0-9](_?[0-9])*",
        Ey = `\\.(${Sy})`,
        ly = "0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",
        mb = {
          className: "number",
          variants: [{
            vU: `(\\b(${ly})((${Ey})|\\.)?|(${Ey}))[eE][+-]?(${Sy})\\b`
          }, {
            vU: `\\b(${ly})\\b((${Ey})\\b|\\.)?|(${Ey})\\b`
          }, {
            vU: "\\b(0|[1-9](_?[0-9])*)n\\b"
          }, {
            vU: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"
          }, {
            vU: "\\b0[bB][0-1](_?[0-1])*n?\\b"
          }, {
            vU: "\\b0[oO][0-7](_?[0-7])*n?\\b"
          }, {
            vU: "\\b0[0-7]+n?\\b"
          }],
          relevance: 0
        },
        Cy = {
          className: "subst",
          vU: "\\$\\{",
          end: "\\}",
          keywords: sy,
          contains: []
        },
        Ty = {
          vU: ".?html`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [yb.BACKSLASH_ESCAPE, Cy],
            subLanguage: "xml"
          }
        },
        Vy = {
          vU: ".?css`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [yb.BACKSLASH_ESCAPE, Cy],
            subLanguage: "css"
          }
        },
        Jy = {
          vU: ".?gql`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [yb.BACKSLASH_ESCAPE, Cy],
            subLanguage: "graphql"
          }
        },
        gb = {
          className: "string",
          vU: "`",
          end: "`",
          contains: [yb.BACKSLASH_ESCAPE, Cy]
        },
        Gy = {
          className: "comment",
          variants: [yb.COMMENT(/\/\*\*(?!\/)/, "\\*/", {
            relevance: 0,
            contains: [{
              vU: "(?=@[A-Za-z]+)",
              relevance: 0,
              contains: [{
                className: "doctag",
                vU: "@[A-Za-z]+"
              }, {
                className: "type",
                vU: "\\{",
                end: "\\}",
                excludeEnd: !0,
                excludeBegin: !0,
                relevance: 0
              }, {
                className: "variable",
                vU: Wy + "(?=\\s*(-)|$)",
                endsParent: !0,
                relevance: 0
              }, {
                vU: /(?=[^\n])\s/,
                relevance: 0
              }]
            }]
          }), yb.C_BLOCK_COMMENT_MODE, yb.C_LINE_COMMENT_MODE]
        },
        Oy = [yb.APOS_STRING_MODE, yb.QUOTE_STRING_MODE, Ty, Vy, Jy, gb, {
          match: /\$\d+/
        }, mb];
      Cy.contains = Oy.concat({
        vU: /\{/,
        end: /\}/,
        keywords: sy,
        contains: ["self"].concat(Oy)
      });
      const Ry = [].concat(Gy, Cy.contains),
        vb = Ry.concat([{
          vU: /(\s*)\(/,
          end: /\)/,
          keywords: sy,
          contains: ["self"].concat(Ry)
        }]),
        ib = {
          className: "params",
          vU: /(\s*)\(/,
          end: /\)/,
          excludeBegin: !0,
          excludeEnd: !0,
          keywords: sy,
          contains: vb
        },
        My = {
          variants: [{
            match: [/class/, /\s+/, Wy, /\s+/, /extends/, /\s+/, bb.concat(Wy, "(", bb.concat(/\./, Wy), ")*")],
            scope: {
              1: "keyword",
              3: "title.class",
              5: "keyword",
              7: "title.class.inherited"
            }
          }, {
            match: [/class/, /\s+/, Wy],
            scope: {
              1: "keyword",
              3: "title.class"
            }
          }]
        },
        Yy = {
          relevance: 0,
          match: bb.either(/\bJSON/, /\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/, /\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/, /\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),
          className: "title.class",
          keywords: {
            _: [...Zy, ...cb]
          }
        },
        Xy = {
          variants: [{
            match: [/function/, /\s+/, Wy, /(?=\s*\()/]
          }, {
            match: [/function/, /\s*(?=\()/]
          }],
          className: {
            1: "keyword",
            3: "title.function"
          },
          label: "func.def",
          contains: [ib],
          illegal: /%/
        };
      const ny = {
        match: bb.concat(/\b/, (uy = [...Py, "super", "import"].map((yb => `${yb}\\s*\\(`)), bb.concat("(?!", uy.join("|"), ")")), Wy, bb.lookahead(/\s*\(/)),
        className: "title.function",
        relevance: 0
      };
      var uy;
      const rb = {
          vU: bb.concat(/\./, bb.lookahead(bb.concat(Wy, /(?![0-9A-Za-z$_(])/))),
          end: Wy,
          excludeBegin: !0,
          keywords: "prototype",
          className: "property",
          relevance: 0
        },
        Hy = {
          match: [/get|set/, /\s+/, Wy, /(?=\()/],
          className: {
            1: "keyword",
            3: "title.function"
          },
          contains: [{
            vU: /\(\)/
          }, ib]
        },
        ab = "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" + yb.UNDERSCORE_IDENT_RE + ")\\s*=>",
        Fy = {
          match: [/const|var|let/, /\s+/, Wy, /\s*/, /=\s*/, /(async\s*)?/, bb.lookahead(ab)],
          keywords: "async",
          className: {
            1: "keyword",
            3: "title.function"
          },
          contains: [ib]
        };
      return {
        name: "JavaScript",
        aliases: ["js", "jsx", "mjs", "cjs"],
        keywords: sy,
        exports: {
          PARAMS_CONTAINS: vb,
          CLASS_REFERENCE: Yy
        },
        illegal: /#(?![$_A-z])/,
        contains: [yb.SHEBANG({
          label: "shebang",
          binary: "node",
          relevance: 5
        }), {
          label: "use_strict",
          className: "meta",
          relevance: 10,
          vU: /^\s*['"]use (strict|asm)['"]/
        }, yb.APOS_STRING_MODE, yb.QUOTE_STRING_MODE, Ty, Vy, Jy, gb, Gy, {
          match: /\$\d+/
        }, mb, Yy, {
          scope: "attr",
          match: Wy + bb.lookahead(":"),
          relevance: 0
        }, Fy, {
          vU: "(" + yb.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
          keywords: "return throw case",
          relevance: 0,
          contains: [Gy, yb.REGEXP_MODE, {
            className: "function",
            vU: ab,
            returnBegin: !0,
            end: "\\s*=>",
            contains: [{
              className: "params",
              variants: [{
                vU: yb.UNDERSCORE_IDENT_RE,
                relevance: 0
              }, {
                className: null,
                vU: /\(\s*\)/,
                skip: !0
              }, {
                vU: /(\s*)\(/,
                end: /\)/,
                excludeBegin: !0,
                excludeEnd: !0,
                keywords: sy,
                contains: vb
              }]
            }]
          }, {
            vU: /,/,
            relevance: 0
          }, {
            match: /\s+/,
            relevance: 0
          }, {
            variants: [{
              vU: Ky,
              end: ey
            }, {
              match: /<[A-Za-z0-9\\._:-]+\s*\/>/
            }, {
              vU: qb.vU,
              "on:begin": qb.isTrulyOpeningTag,
              end: qb.end
            }],
            subLanguage: "xml",
            contains: [{
              vU: qb.vU,
              end: qb.end,
              skip: !0,
              contains: ["self"]
            }]
          }]
        }, Xy, {
          beginKeywords: "while if switch catch for"
        }, {
          vU: "\\b(?!function)" + yb.UNDERSCORE_IDENT_RE + "\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
          returnBegin: !0,
          label: "func.def",
          contains: [ib, yb.inherit(yb.TITLE_MODE, {
            vU: Wy,
            className: "title.function"
          })]
        }, {
          match: /\.\.\./,
          relevance: 0
        }, rb, {
          match: "\\$" + Wy,
          relevance: 0
        }, {
          match: [/\bconstructor(?=\s*\()/],
          className: {
            1: "title.function"
          },
          contains: [ib]
        }, ny, {
          relevance: 0,
          match: /\b[A-Z][A-Z_0-9]+\b/,
          className: "variable.constant"
        }, My, Hy, {
          match: /\$[(.]/
        }]
      }
    }

    function ey(yb) {
      const bb = yb.regex,
        Wy = Ky(yb),
        Zy = Uy,
        cb = ["any", "void", "number", "boolean", "string", "object", "never", "symbol", "bigint", "unknown"],
        Py = {
          vU: [/namespace/, /\s+/, yb.IDENT_RE],
          beginScope: {
            1: "keyword",
            3: "title.class"
          }
        },
        ey = {
          beginKeywords: "interface",
          end: /\{/,
          excludeEnd: !0,
          keywords: {
            keyword: "interface extends",
            built_in: cb
          },
          contains: [Wy.exports.CLASS_REFERENCE]
        },
        qb = {
          $pattern: Uy,
          keyword: hy.concat(["type", "interface", "public", "private", "protected", "implements", "declare", "abstract", "readonly", "enum", "override", "satisfies"]),
          literal: fy,
          built_in: By.concat(cb),
          "variable.language": oy
        },
        sy = {
          className: "meta",
          vU: "@" + Zy
        },
        Sy = (yb, bb, Wy) => {
          const Uy = yb.contains.findIndex((yb => yb.label === bb));
          if (-1 === Uy) throw new Error("can not find mode to replace");
          yb.contains.splice(Uy, 1, Wy)
        };
      Object.assign(Wy.keywords, qb), Wy.exports.PARAMS_CONTAINS.push(sy);
      const Ey = Wy.contains.find((yb => "attr" === yb.scope)),
        ly = Object.assign({}, Ey, {
          match: bb.concat(Zy, bb.lookahead(/\s*\?:/))
        });
      Wy.exports.PARAMS_CONTAINS.push([Wy.exports.CLASS_REFERENCE, Ey, ly]), Wy.contains = Wy.contains.concat([sy, Py, ey, ly]), Sy(Wy, "shebang", yb.SHEBANG()), Sy(Wy, "use_strict", {
        className: "meta",
        relevance: 10,
        vU: /^\s*['"]use strict['"]/
      });
      return Wy.contains.find((yb => "func.def" === yb.label)).relevance = 0, Object.assign(Wy, {
        name: "TypeScript",
        aliases: ["ts", "tsx", "mts", "cts"]
      }), Wy
    }
  }
};
Object.freeze(modules);
for (const yb in modules) Object.freeze(modules[yb]);