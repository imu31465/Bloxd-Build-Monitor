export const id = 290;
export const ids = [290];
export const modules = {
  41991: (dd, Od, md) => {
    md.d(Od, {
      c: () => od,
      f: () => td,
      i: () => hd,
      m: () => Nd,
      o: () => vd,
      p: () => Kd,
      q: () => Qd
    });
    var Wd = md(40262),
      Fd = md(41997);

    function Rd(dd, Od, md, Wd) {
      switch (Od) {
        case 5120: {
          let Od = dd.getInt8(md);
          return Wd && (Od = Math.max(Od / 127, -1)), Od
        }
        case 5121: {
          let Od = dd.getUint8(md);
          return Wd && (Od /= 255), Od
        }
        case 5122: {
          let Od = dd.getInt16(md, !0);
          return Wd && (Od = Math.max(Od / 32767, -1)), Od
        }
        case 5123: {
          let Od = dd.getUint16(md, !0);
          return Wd && (Od /= 65535), Od
        }
        case 5131:
          return (0, Fd.b)(dd.getUint16(md, !0));
        case 5124:
          return dd.getInt32(md, !0);
        case 5125:
          return dd.getUint32(md, !0);
        case 5126:
          return dd.getFloat32(md, !0);
        default:
          throw new Error(`Invalid component type ${Od}`)
      }
    }

    function Xd(dd, Od, md, Wd, Rd) {
      switch (Od) {
        case 5120:
          Wd && (Rd = Math.round(127 * Rd)), dd.setInt8(md, Rd);
          break;
        case 5121:
          Wd && (Rd = Math.round(255 * Rd)), dd.setUint8(md, Rd);
          break;
        case 5122:
          Wd && (Rd = Math.round(32767 * Rd)), dd.setInt16(md, Rd, !0);
          break;
        case 5123:
          Wd && (Rd = Math.round(65535 * Rd)), dd.setUint16(md, Rd, !0);
          break;
        case 5131:
          dd.setUint16(md, (0, Fd.g)(Rd), !0);
          break;
        case 5124:
          dd.setInt32(md, Rd, !0);
          break;
        case 5125:
          dd.setUint32(md, Rd, !0);
          break;
        case 5126:
          dd.setFloat32(md, Rd, !0);
          break;
        default:
          throw new Error(`Invalid component type ${Od}`)
      }
    }

    function Kd(dd) {
      switch (dd) {
        case 5120:
        case 5121:
          return 1;
        case 5122:
        case 5123:
        case 5131:
          return 2;
        case 5124:
        case 5125:
        case 5126:
          return 4;
        default:
          throw new Error(`Invalid type '${dd}'`)
      }
    }

    function hd(dd, Od, md, Wd, Fd, hd, vd, Qd) {
      const td = new Array(Wd),
        od = new Array(Wd);
      if (dd instanceof Array) {
        let Fd = Od / 4;
        const Rd = md / 4;
        for (let Od = 0; Od < hd; Od += Wd) {
          for (let Od = 0; Od < Wd; Od++) td[Od] = od[Od] = dd[Fd + Od];
          Qd(od, Od);
          for (let Od = 0; Od < Wd; Od++) td[Od] !== od[Od] && (dd[Fd + Od] = od[Od]);
          Fd += Rd
        }
      } else {
        const Nd = ArrayBuffer.isView(dd) ? new DataView(dd.buffer, dd.byteOffset, dd.byteLength) : new DataView(dd),
          qd = Kd(Fd);
        for (let dd = 0; dd < hd; dd += Wd) {
          for (let dd = 0, md = Od; dd < Wd; dd++, md += qd) td[dd] = od[dd] = Rd(Nd, Fd, md, vd);
          Qd(od, dd);
          for (let dd = 0, md = Od; dd < Wd; dd++, md += qd) td[dd] !== od[dd] && Xd(Nd, Fd, md, vd, od[dd]);
          Od += md
        }
      }
    }

    function vd(dd, Od, md, Fd, Rd, Xd, vd, Qd) {
      const td = Od * Kd(md),
        od = vd * Od;
      if (5126 !== md || Rd !== td) {
        const Wd = new Float32Array(od);
        return hd(dd, Fd, Rd, Od, md, od, Xd, ((dd, md) => {
          for (let Fd = 0; Fd < Od; Fd++) Wd[md + Fd] = dd[Fd]
        })), Wd
      }
      if (!(dd instanceof Array || dd instanceof Float32Array) || 0 !== Fd || dd.length !== od) {
        if (dd instanceof Array) {
          const Od = Fd / 4;
          return dd.slice(Od, Od + od)
        }
        if (ArrayBuffer.isView(dd)) {
          const Od = dd.byteOffset + Fd;
          return 0 !== (3 & Od) && (Wd.c.Warn("Float array must be aligned to 4-bytes border"), Qd = !0), Qd ? new Float32Array(dd.buffer.slice(Od, Od + od * Float32Array.BYTES_PER_ELEMENT)) : new Float32Array(dd.buffer, Od, od)
        }
        return new Float32Array(dd, Fd, od)
      }
      return Qd ? dd.slice() : dd
    }

    function Qd(dd, Od, md, Fd, Rd, Xd, vd) {
      const Qd = Kd(md),
        td = function(dd) {
          switch (dd) {
            case 5120:
              return Int8Array;
            case 5121:
              return Uint8Array;
            case 5122:
              return Int16Array;
            case 5123:
            case 5131:
              return Uint16Array;
            case 5124:
              return Int32Array;
            case 5125:
              return Uint32Array;
            case 5126:
              return Float32Array;
            default:
              throw new Error(`Invalid component type '${dd}'`)
          }
        }(md),
        od = Xd * Od;
      if (Array.isArray(dd)) {
        if (0 !== (3 & Fd) || 0 !== (3 & Rd)) throw new Error("byteOffset and byteStride must be a multiple of 4 for number[] data.");
        const Wd = Fd / 4,
          Kd = Rd / 4;
        if (Wd + (Xd - 1) * Kd + Od > dd.length) throw new Error("Last accessed index is out of bounds.");
        if (Kd < Od) throw new Error("Data stride cannot be smaller than the component size.");
        if (Kd !== Od) {
          const Wd = new td(od);
          return hd(dd, Fd, Rd, Od, md, od, !1, ((dd, md) => {
            for (let Fd = 0; Fd < Od; Fd++) Wd[md + Fd] = dd[Fd]
          })), Wd
        }
        return new td(dd.slice(Wd, Wd + od))
      }
      let Nd, qd = Fd;
      ArrayBuffer.isView(dd) ? (Nd = dd.buffer, qd += dd.byteOffset) : Nd = dd;
      if (qd + (Xd - 1) * Rd + Od * Qd > Nd.byteLength) throw new Error("Last accessed byte is out of bounds.");
      const Hd = Od * Qd;
      if (Rd < Hd) throw new Error("Byte stride cannot be smaller than the component's byte size.");
      if (Rd !== Hd) {
        const dd = new td(od),
          md = new Uint8Array(Nd, qd),
          Wd = new Uint8Array(dd.buffer),
          Fd = Od * Qd;
        for (let Od = 0, Kd = 0, hd = 0; Od < Xd; Od++, Kd += Rd, hd += Fd) Wd.set(md.subarray(Kd, Kd + Fd), hd);
        return dd
      }
      return 1 !== Qd && 0 !== (qd & Qd - 1) && (Wd.c.Warn("Array must be aligned to border of element size. Data will be copied."), vd = !0), vd ? new td(Nd.slice(qd, qd + od * Qd)) : new td(Nd, qd, od)
    }

    function td(dd, Od, md, Fd, Rd, Xd, vd, Qd) {
      const td = Od * Kd(md),
        od = vd * Od;
      if (Qd.length !== od) throw new Error("Output length is not valid");
      if (5126 === md && Rd === td)
        if (dd instanceof Array) {
          const Od = Fd / 4;
          Qd.set(dd, Od)
        } else if (ArrayBuffer.isView(dd)) {
        const Od = dd.byteOffset + Fd;
        if (0 !== (3 & Od)) return Wd.c.Warn("Float array must be aligned to 4-bytes border"), void Qd.set(new Float32Array(dd.buffer.slice(Od, Od + od * Float32Array.BYTES_PER_ELEMENT)));
        const md = new Float32Array(dd.buffer, Od, od);
        Qd.set(md)
      } else {
        const Od = new Float32Array(dd, Fd, od);
        Qd.set(Od)
      } else hd(dd, Fd, Rd, Od, md, od, Xd, ((dd, md) => {
        for (let Wd = 0; Wd < Od; Wd++) Qd[md + Wd] = dd[Wd]
      }))
    }

    function od(dd, Od) {
      let md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        Wd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
      if (Array.isArray(dd)) {
        for (let Fd = 0; Fd < Od; Fd++)
          if (dd[md + Fd] - Wd > 65535) return !0;
        return !1
      }
      return 4 === dd.BYTES_PER_ELEMENT
    }

    function Nd(dd) {
      const Od = dd.buffer;
      if (Od instanceof ArrayBuffer) return dd;
      const md = new ArrayBuffer(dd.byteLength);
      return new Uint8Array(md).set(new Uint8Array(Od, dd.byteOffset, dd.byteLength)), md
    }
  },
  41822: (dd, Od, md) => {
    md.d(Od, {
      d: () => Jd,
      h: () => wd,
      n: () => Ed,
      l: () => Vd,
      q: () => Ad
    });
    class Wd {
      constructor() {
        this.children = []
      }
      isValid(dd) {
        return !0
      }
      process(dd, Od, md) {
        let Wd = "";
        if (this.line) {
          let md = this.line;
          const Fd = Od.processor;
          if (Fd) {
            Fd.lineProcessor && (md = Fd.lineProcessor(md, Od.isFragment, Od.processingContext));
            const Wd = Od.processor?.attributeKeywordName ?? "attribute",
              Rd = Od.isFragment && Od.processor?.varyingFragmentKeywordName ? Od.processor?.varyingFragmentKeywordName : !Od.isFragment && Od.processor?.varyingVertexKeywordName ? Od.processor?.varyingVertexKeywordName : "varying";
            if (!Od.isFragment && Fd.attributeProcessor && this.line.startsWith(Wd)) md = Fd.attributeProcessor(this.line, dd, Od.processingContext);
            else if (Fd.varyingProcessor && (Fd.varyingCheck?.(this.line, Od.isFragment) || !Fd.varyingCheck && this.line.startsWith(Rd))) md = Fd.varyingProcessor(this.line, Od.isFragment, dd, Od.processingContext);
            else if (Fd.uniformProcessor && Fd.uniformRegexp && Fd.uniformRegexp.test(this.line)) Od.lookForClosingBracketForUniformBuffer || (md = Fd.uniformProcessor(this.line, Od.isFragment, dd, Od.processingContext));
            else if (Fd.uniformBufferProcessor && Fd.uniformBufferRegexp && Fd.uniformBufferRegexp.test(this.line)) Od.lookForClosingBracketForUniformBuffer || (md = Fd.uniformBufferProcessor(this.line, Od.isFragment, Od.processingContext), Od.lookForClosingBracketForUniformBuffer = !0);
            else if (Fd.textureProcessor && Fd.textureRegexp && Fd.textureRegexp.test(this.line)) md = Fd.textureProcessor(this.line, Od.isFragment, dd, Od.processingContext);
            else if ((Fd.uniformProcessor || Fd.uniformBufferProcessor) && this.line.startsWith("uniform") && !Od.lookForClosingBracketForUniformBuffer) {
              /uniform\s+(?:(?:highp)?|(?:lowp)?)\s*(\S+)\s+(\S+)\s*;/.test(this.line) ? Fd.uniformProcessor && (md = Fd.uniformProcessor(this.line, Od.isFragment, dd, Od.processingContext)) : Fd.uniformBufferProcessor && (md = Fd.uniformBufferProcessor(this.line, Od.isFragment, Od.processingContext), Od.lookForClosingBracketForUniformBuffer = !0)
            }
            Od.lookForClosingBracketForUniformBuffer && -1 !== this.line.indexOf("}") && (Od.lookForClosingBracketForUniformBuffer = !1, Fd.endOfUniformBufferProcessor && (md = Fd.endOfUniformBufferProcessor(this.line, Od.isFragment, Od.processingContext)))
          }
          Wd += md + "\n"
        }
        for (const Fd of this.children) Wd += Fd.process(dd, Od, md);
        return this.additionalDefineKey && (dd[this.additionalDefineKey] = this.additionalDefineValue || "true", md[this.additionalDefineKey] = dd[this.additionalDefineKey]), Wd
      }
    }
    class Fd {
      constructor() {
        this._lines = []
      }
      get currentLine() {
        return this._lines[this.lineIndex]
      }
      get canRead() {
        return this.lineIndex < this._lines.length - 1
      }
      set lines(dd) {
        this._lines.length = 0;
        for (const Od of dd) {
          if (!Od || "\r" === Od) continue;
          if ("#" === Od[0]) {
            this._lines.push(Od);
            continue
          }
          const dd = Od.trim();
          if (!dd) continue;
          if (dd.startsWith("//")) {
            this._lines.push(Od);
            continue
          }
          const md = dd.indexOf(";");
          if (-1 === md) this._lines.push(dd);
          else if (md === dd.length - 1) dd.length > 1 && this._lines.push(dd);
          else {
            const dd = Od.split(";");
            for (let Od = 0; Od < dd.length; Od++) {
              let md = dd[Od];
              md && (md = md.trim(), md && this._lines.push(md + (Od !== dd.length - 1 ? ";" : "")))
            }
          }
        }
      }
    }
    class Rd extends Wd {
      process(dd, Od, md) {
        for (let Wd = 0; Wd < this.children.length; Wd++) {
          const Fd = this.children[Wd];
          if (Fd.isValid(dd)) return Fd.process(dd, Od, md)
        }
        return ""
      }
    }
    class Xd extends Wd {
      isValid(dd) {
        return this.testExpression.isTrue(dd)
      }
    }
    class Kd {
      isTrue(dd) {
        return !0
      }
      static postfixToInfix(dd) {
        const Od = [];
        for (const md of dd)
          if (void 0 === Kd._OperatorPriority[md]) Od.push(md);
          else {
            const dd = Od[Od.length - 1],
              Wd = Od[Od.length - 2];
            Od.length -= 2, Od.push(`(${Wd}${md}${dd})`)
          } return Od[Od.length - 1]
      }
      static infixToPostfix(dd) {
        const Od = Kd._InfixToPostfixCache.get(dd);
        if (Od) return Od.accessTime = Date.now(), Od.result;
        if (!dd.includes("&&") && !dd.includes("||") && !dd.includes(")") && !dd.includes("(")) return [dd];
        const md = [];
        let Wd = -1;
        const Fd = () => {
            Qd = Qd.trim(), "" !== Qd && (md.push(Qd), Qd = "")
          },
          Rd = dd => {
            Wd < Kd._Stack.length - 1 && (Kd._Stack[++Wd] = dd)
          },
          Xd = () => Kd._Stack[Wd],
          hd = () => -1 === Wd ? "!!INVALID EXPRESSION!!" : Kd._Stack[Wd--];
        let vd = 0,
          Qd = "";
        for (; vd < dd.length;) {
          const Od = dd.charAt(vd),
            td = vd < dd.length - 1 ? dd.substring(vd, 2 + vd) : "";
          if ("(" === Od) Qd = "", Rd(Od);
          else if (")" === Od) {
            for (Fd(); - 1 !== Wd && "(" !== Xd();) md.push(hd());
            hd()
          } else if (Kd._OperatorPriority[td] > 1) {
            for (Fd(); - 1 !== Wd && Kd._OperatorPriority[Xd()] >= Kd._OperatorPriority[td];) md.push(hd());
            Rd(td), vd++
          } else Qd += Od;
          vd++
        }
        for (Fd(); - 1 !== Wd;) "(" === Xd() ? hd() : md.push(hd());
        return Kd._InfixToPostfixCache.size >= Kd.InfixToPostfixCacheLimitSize && Kd.ClearCache(), Kd._InfixToPostfixCache.set(dd, {
          result: md,
          accessTime: Date.now()
        }), md
      }
      static ClearCache() {
        const dd = Array.from(Kd._InfixToPostfixCache.entries()).sort(((dd, Od) => dd[1].accessTime - Od[1].accessTime));
        for (let Od = 0; Od < Kd.InfixToPostfixCacheCleanupSize; Od++) Kd._InfixToPostfixCache.delete(dd[Od][0])
      }
    }
    Kd.InfixToPostfixCacheLimitSize = 5e4, Kd.InfixToPostfixCacheCleanupSize = 25e3, Kd._InfixToPostfixCache = new Map, Kd._OperatorPriority = {
      ")": 0,
      "(": 1,
      "||": 2,
      "&&": 3
    }, Kd._Stack = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];
    class hd extends Kd {
      constructor(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        super(), this.define = dd, this.not = Od
      }
      isTrue(dd) {
        let Od = void 0 !== dd[this.define];
        return this.not && (Od = !Od), Od
      }
    }
    class vd extends Kd {
      isTrue(dd) {
        return this.leftOperand.isTrue(dd) || this.rightOperand.isTrue(dd)
      }
    }
    class Qd extends Kd {
      isTrue(dd) {
        return this.leftOperand.isTrue(dd) && this.rightOperand.isTrue(dd)
      }
    }
    class td extends Kd {
      constructor(dd, Od, md) {
        super(), this.define = dd, this.operand = Od, this.testValue = md
      }
      toString() {
        return `${this.define} ${this.operand} ${this.testValue}`
      }
      isTrue(dd) {
        let Od = !1;
        const md = parseInt(void 0 != dd[this.define] ? dd[this.define] : this.define),
          Wd = parseInt(void 0 != dd[this.testValue] ? dd[this.testValue] : this.testValue);
        if (isNaN(md) || isNaN(Wd)) return !1;
        switch (this.operand) {
          case ">":
            Od = md > Wd;
            break;
          case "<":
            Od = md < Wd;
            break;
          case "<=":
            Od = md <= Wd;
            break;
          case ">=":
            Od = md >= Wd;
            break;
          case "==":
            Od = md === Wd;
            break;
          case "!=":
            Od = md !== Wd
        }
        return Od
      }
    }
    var od = md(41817),
      Nd = md(41810);
    const qd = /defined\s*?\((.+?)\)/g,
      Hd = /defined\s*?\[(.+?)\]/g,
      yd = /#include\s?<(.+)>(\((.*)\))*(\[(.*)\])*/g,
      bd = /__decl__/,
      Td = /light\{X\}.(\w*)/g,
      pd = /\{X\}/g,
      Yd = [],
      gd = /(#ifdef)|(#else)|(#elif)|(#endif)|(#ifndef)|(#if)/;

    function wd(dd) {
      dd.processor && dd.processor.initializeShaders && dd.processor.initializeShaders(dd.processingContext)
    }

    function Ed(dd, Od, md, Wd) {
      Od.processor?.preProcessShaderCode && (dd = Od.processor.preProcessShaderCode(dd, Od.isFragment)), Vd(dd, Od, (dd => {
        Od.processCodeAfterIncludes && (dd = Od.processCodeAfterIncludes(Od.isFragment ? "fragment" : "vertex", dd, Od.defines));
        const Fd = function(dd, Od, md) {
          let Wd = function(dd, Od) {
            if (Od.processor?.noPrecision) return dd;
            const md = Od.shouldUseHighPrecisionShader; - 1 === dd.indexOf("precision highp float") ? dd = md ? "precision highp float;\n" + dd : "precision mediump float;\n" + dd : md || (dd = dd.replace("precision highp float", "precision mediump float"));
            return dd
          }(dd, Od);
          if (!Od.processor) return Wd;
          if (0 === Od.processor.shaderLanguage && -1 !== Wd.indexOf("#version 3") && (Wd = Wd.replace("#version 300 es", ""), !Od.processor.parseGLES3)) return Wd;
          const Fd = Od.defines,
            Rd = ud(Od, md);
          Od.processor.preProcessor && (Wd = Od.processor.preProcessor(Wd, Fd, Rd, Od.isFragment, Od.processingContext));
          const Xd = {};
          Wd = sd(Wd, Rd, Od, Xd), Od.processor.postProcessor && (Wd = Od.processor.postProcessor(Wd, Fd, Od.isFragment, Od.processingContext, md ? {
            drawBuffersExtensionDisabled: !md.getCaps().drawBuffersExtension
          } : {}, Rd, Xd));
          md?._features.needShaderCodeInlining && (Wd = md.inlineShaderCode(Wd));
          return Wd
        }(dd, Od, Wd);
        md(Fd, dd)
      }))
    }

    function Jd(dd, Od, md) {
      return md.processor && md.processor.finalizeShaders ? md.processor.finalizeShaders(dd, Od, md.processingContext) : {
        vertexCode: dd,
        fragmentCode: Od
      }
    }

    function Ud(dd) {
      const Od = /defined\((.+)\)/.exec(dd);
      if (Od && Od.length) return new hd(Od[1].trim(), "!" === dd[0]);
      const md = ["==", "!=", ">=", "<=", "<", ">"];
      let Wd = "",
        Fd = 0;
      for (Wd of md)
        if (Fd = dd.indexOf(Wd), Fd > -1) break;
      if (-1 === Fd) return new hd(dd);
      const Rd = dd.substring(0, Fd).trim(),
        Xd = dd.substring(Fd + Wd.length).trim();
      return new td(Rd, Wd, Xd)
    }

    function xd(dd, Od) {
      const md = new Xd,
        Wd = dd.substring(0, Od);
      let Fd = dd.substring(Od);
      return Fd = Fd.substring(0, (Fd.indexOf("//") + 1 || Fd.length + 1) - 1).trim(), md.testExpression = "#ifdef" === Wd ? new hd(Fd) : "#ifndef" === Wd ? new hd(Fd, !0) : function(dd) {
        dd = dd.replace(qd, "defined[$1]");
        const Od = Kd.infixToPostfix(dd),
          md = [];
        for (const Fd of Od)
          if ("||" !== Fd && "&&" !== Fd) md.push(Fd);
          else if (md.length >= 2) {
          let dd = md[md.length - 1],
            Od = md[md.length - 2];
          md.length -= 2;
          const Wd = "&&" == Fd ? new Qd : new vd;
          "string" === typeof dd && (dd = dd.replace(Hd, "defined($1)")), "string" === typeof Od && (Od = Od.replace(Hd, "defined($1)")), Wd.leftOperand = "string" === typeof Od ? Ud(Od) : Od, Wd.rightOperand = "string" === typeof dd ? Ud(dd) : dd, md.push(Wd)
        }
        let Wd = md[md.length - 1];
        return "string" === typeof Wd && (Wd = Wd.replace(Hd, "defined($1)")), "string" === typeof Wd ? Ud(Wd) : Wd
      }(Fd), md
    }

    function Bd(dd, Od, md, Fd) {
      let Rd;
      for (; Sd(dd, md, Fd);) {
        Rd = dd.currentLine;
        const Xd = Rd.substring(0, 5).toLowerCase();
        if ("#else" === Xd) {
          const md = new Wd;
          return Od.children.push(md), void Sd(dd, md, Fd)
        }
        if ("#elif" === Xd) {
          const dd = xd(Rd, 5);
          Od.children.push(dd), md = dd
        }
      }
    }

    function Sd(dd, Od, md) {
      for (; dd.canRead;) {
        dd.lineIndex++;
        const Fd = dd.currentLine;
        if (Fd.indexOf("#") >= 0) {
          const Wd = gd.exec(Fd);
          if (Wd && Wd.length) {
            switch (Wd[0]) {
              case "#ifdef": {
                const Wd = new Rd;
                Od.children.push(Wd);
                const Xd = xd(Fd, 6);
                Wd.children.push(Xd), Bd(dd, Wd, Xd, md);
                break
              }
              case "#else":
              case "#elif":
                return !0;
              case "#endif":
                return !1;
              case "#ifndef": {
                const Wd = new Rd;
                Od.children.push(Wd);
                const Xd = xd(Fd, 7);
                Wd.children.push(Xd), Bd(dd, Wd, Xd, md);
                break
              }
              case "#if": {
                const Wd = new Rd,
                  Xd = xd(Fd, 3);
                Od.children.push(Wd), Wd.children.push(Xd), Bd(dd, Wd, Xd, md);
                break
              }
            }
            continue
          }
        }
        const Xd = new Wd;
        if (Xd.line = Fd, Od.children.push(Xd), "#" === Fd[0] && "d" === Fd[1]) {
          const dd = Fd.replace(";", "").split(" ");
          Xd.additionalDefineKey = dd[1], 3 === dd.length && (Xd.additionalDefineValue = dd[2])
        }
      }
      return !1
    }

    function sd(dd, Od, md, Rd) {
      const Xd = new Wd,
        Kd = new Fd;
      return Kd.lineIndex = -1, Kd.lines = dd.split("\n"), Sd(Kd, Xd, Rd), Xd.process(Od, md, Rd)
    }

    function ud(dd, Od) {
      const md = dd.defines,
        Wd = {};
      for (const Fd of md) {
        const dd = Fd.replace("#define", "").replace(";", "").trim().split(" ");
        Wd[dd[0]] = dd.length > 1 ? dd[1] : ""
      }
      return 0 === dd.processor?.shaderLanguage && (Wd.GL_ES = "true"), Wd.__VERSION__ = dd.version, Wd[dd.platformName] = "true", (0, Nd.h)(Wd, Od?.isNDCHalfZRange, Od?.JFd, Od?.useExactSrgbConversions), Wd
    }

    function Vd(dd, Od, md) {
      let Wd;
      for (Yd.length = 0; null !== (Wd = yd.exec(dd));) Yd.push(Wd);
      let Fd = [dd],
        Rd = !1;
      for (const Kd of Yd) {
        let dd = Kd[1];
        if (-1 !== dd.indexOf("__decl__") && (dd = dd.replace(bd, ""), Od.supportsUniformBuffers && (dd = dd.replace("Vertex", "Ubo").replace("Fragment", "Ubo")), dd += "Declaration"), !Od.includesShadersStore[dd]) {
          const Wd = Od.shadersRepository + "ShadersInclude/" + dd + ".fx";
          return void Ad.loadFile(Wd, (Wd => {
            Od.includesShadersStore[dd] = Wd, Vd(Fd.join(""), Od, md)
          }))
        } {
          let md = Od.includesShadersStore[dd];
          if (Kd[2]) {
            const dd = Kd[3].split(",");
            for (let Od = 0; Od < dd.length; Od += 2) {
              const Wd = new RegExp(dd[Od], "g"),
                Fd = dd[Od + 1];
              md = md.replace(Wd, Fd)
            }
          }
          if (Kd[4]) {
            const dd = Kd[5];
            if (-1 !== dd.indexOf("..")) {
              const Wd = dd.split(".."),
                Fd = parseInt(Wd[0]);
              let Rd = parseInt(Wd[1]),
                Xd = md.slice(0);
              md = "", isNaN(Rd) && (Rd = Od.indexParameters[Wd[1]]);
              for (let dd = Fd; dd < Rd; dd++) Od.supportsUniformBuffers || (Xd = Xd.replace(Td, ((dd, Od) => Od + "{X}"))), md += Xd.replace(pd, dd.toString()) + "\n"
            } else Od.supportsUniformBuffers || (md = md.replace(Td, ((dd, Od) => Od + "{X}"))), md = md.replace(pd, dd)
          }
          const Wd = [];
          for (const dd of Fd) {
            const Od = dd.split(Kd[0]);
            for (let dd = 0; dd < Od.length - 1; dd++) Wd.push(Od[dd]), Wd.push(md);
            Wd.push(Od[Od.length - 1])
          }
          Fd = Wd, Rd = Rd || md.indexOf("#include<") >= 0 || md.indexOf("#include <") >= 0
        }
      }
      Yd.length = 0;
      const Xd = Fd.join("");
      Rd ? Vd(Xd.toString(), Od, md) : md(Xd)
    }
    const Ad = {
      loadFile: (dd, Od, md, Wd, Fd, Rd) => {
        throw (0, od.m)("FileTools")
      }
    }
  },
  41810: (dd, Od, md) => {
    md.d(Od, {
      c: () => Fd,
      e: () => Rd,
      h: () => Kd,
      i: () => Xd,
      j: () => hd
    });
    var Wd = md(41817);
    const Fd = {};

    function Rd(dd, Od) {
      return (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "") + (Od ? Od + "\n" : "") + dd
    }

    function Xd(dd, Od, md, Rd, Xd, Kd, hd) {
      const vd = hd || Fd.loadFile;
      if (!vd) throw (0, Wd.m)("FileTools");
      return vd(dd, Od, md, Rd, Xd, Kd)
    }

    function Kd(dd, Od, md, Wd) {
      if (dd) return Od ? dd.IS_NDC_HALF_ZRANGE = "" : delete dd.IS_NDC_HALF_ZRANGE, md ? dd.USE_REVERSE_DEPTHBUFFER = "" : delete dd.USE_REVERSE_DEPTHBUFFER, void(Wd ? dd.USE_EXACT_SRGB_CONVERSIONS = "" : delete dd.USE_EXACT_SRGB_CONVERSIONS);
      {
        let dd = "";
        return Od && (dd += "#define IS_NDC_HALF_ZRANGE"), md && (dd && (dd += "\n"), dd += "#define USE_REVERSE_DEPTHBUFFER"), Wd && (dd && (dd += "\n"), dd += "#define USE_EXACT_SRGB_CONVERSIONS"), dd
      }
    }

    function hd(dd, Od) {
      let md = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        Wd = arguments.length > 3 ? arguments[3] : void 0;
      switch (dd) {
        case 3: {
          const dd = new Int8Array(Od);
          return Wd && dd.set(new Int8Array(Wd)), dd
        }
        case 0: {
          const dd = new Uint8Array(Od);
          return Wd && dd.set(new Uint8Array(Wd)), dd
        }
        case 4: {
          const dd = "number" !== typeof Od ? new Int16Array(Od) : new Int16Array(md ? Od / 2 : Od);
          return Wd && dd.set(new Int16Array(Wd)), dd
        }
        case 5:
        case 8:
        case 9:
        case 10:
        case 2: {
          const dd = "number" !== typeof Od ? new Uint16Array(Od) : new Uint16Array(md ? Od / 2 : Od);
          return Wd && dd.set(new Uint16Array(Wd)), dd
        }
        case 6: {
          const dd = "number" !== typeof Od ? new Int32Array(Od) : new Int32Array(md ? Od / 4 : Od);
          return Wd && dd.set(new Int32Array(Wd)), dd
        }
        case 7:
        case 11:
        case 12:
        case 13:
        case 14:
        case 15: {
          const dd = "number" !== typeof Od ? new Uint32Array(Od) : new Uint32Array(md ? Od / 4 : Od);
          return Wd && dd.set(new Uint32Array(Wd)), dd
        }
        case 1: {
          const dd = "number" !== typeof Od ? new Float32Array(Od) : new Float32Array(md ? Od / 4 : Od);
          return Wd && dd.set(new Float32Array(Wd)), dd
        }
      }
      const Fd = new Uint8Array(Od);
      return Wd && Fd.set(new Uint8Array(Wd)), Fd
    }
  },
  41817: (dd, Od, md) => {
    md.d(Od, {
      e: () => vd,
      g: () => Qd,
      i: () => hd,
      m: () => Fd
    });
    const Wd = {};

    function Fd(dd) {
      if (!(arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) || !Wd[dd]) return Wd[dd] = !0, `${dd} needs to be imported before as it contains a side-effect required by your code.`
    }
    const Rd = {};
    let Xd = !1,
      Kd = 0;

    function hd(dd, Od) {
      let md = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      const Wd = function() {
        if ((md || Xd) && 0 === Kd) {
          const md = `${dd}.${Od}`;
          Rd[md] || (Rd[md] = !0, console.warn(`[Babylon.js] ${md}() requires a side-effect import. See: https://doc.babylonjs.com/setup/treeshaking`))
        }
      };
      return Wd.__isSideEffectStub = !0, Wd
    }

    function vd(dd) {
      return !!dd && !dd.__isSideEffectStub
    }

    function Qd(dd, Od) {
      return {
        get() {},
        set(dd) {
          Object.defineProperty(this, Od, {
            value: dd,
            writable: !0,
            configurable: !0,
            enumerable: !0
          })
        },
        configurable: !0,
        enumerable: !0
      }
    }
  },
  41799: (dd, Od, md) => {
    function Wd() {
      return "undefined" !== typeof window
    }

    function Fd() {
      return "undefined" !== typeof navigator
    }

    function Rd() {
      return "undefined" !== typeof document
    }

    function Xd(dd) {
      let Od = "",
        md = dd.firstChild;
      for (; md;) 3 === md.nodeType && (Od += md.textContent), md = md.nextSibling;
      return Od
    }
    md.d(Od, {
      b: () => Xd,
      d: () => Rd,
      f: () => Fd,
      h: () => Wd
    })
  },
  41975: (dd, Od, md) => {
    md.d(Od, {
      b: () => Wd,
      e: () => Fd,
      h: () => Rd
    });
    class Wd extends Error {}
    Wd._setPrototypeOf = Object.setPrototypeOf || ((dd, Od) => (dd.__proto__ = Od, dd));
    const Fd = {
      MeshInvalidPositionsError: 0,
      UnsupportedTextureError: 1e3,
      GLTFLoaderUnexpectedMagicError: 2e3,
      SceneLoaderError: 3e3,
      LoadFileError: 4e3,
      RequestFileError: 4001,
      ReadFileError: 4002
    };
    class Rd extends Wd {
      constructor(dd, Od, md) {
        super(dd), this.errorCode = Od, this.innerError = md, this.name = "RuntimeError", Wd._setPrototypeOf(this, Rd.prototype)
      }
    }
  },
  41961: (dd, Od, md) => {
    md.d(Od, {
      c: () => ud,
      d: () => pd,
      e: () => xd,
      f: () => Sd,
      g: () => Jd,
      h: () => wd,
      i: () => Ed,
      k: () => nd,
      m: () => Ud,
      o: () => Yd
    });
    var Wd = md(41969),
      Fd = md(41799),
      Rd = md(38660);
    class Xd {}
    Xd.FilesToLoad = {};
    var Kd = md(41975),
      hd = md(41983),
      vd = md(38651),
      Qd = md(41810),
      td = md(41822),
      od = md(40262),
      Nd = md(41831),
      qd = md(41991);
    const Hd = new RegExp(/^data:([^,]+\/[^,]+)?;base64,/i);
    class yd extends Kd.h {
      constructor(dd, Od) {
        super(dd, Kd.e.LoadFileError), this.name = "LoadFileError", Kd.b._setPrototypeOf(this, yd.prototype), Od instanceof Wd.e ? this.request = Od : this.file = Od
      }
    }
    class bd extends Kd.h {
      constructor(dd, Od) {
        super(dd, Kd.e.RequestFileError), this.request = Od, this.name = "RequestFileError", Kd.b._setPrototypeOf(this, bd.prototype)
      }
    }
    class Td extends Kd.h {
      constructor(dd, Od) {
        super(dd, Kd.e.ReadFileError), this.file = Od, this.name = "ReadFileError", Kd.b._setPrototypeOf(this, Td.prototype)
      }
    }
    const pd = {
        DefaultRetryStrategy: class {
          static ExponentialBackoff() {
            let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 3,
              Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 500;
            return (md, Wd, Fd) => 0 !== Wd.status || Fd >= dd || -1 !== md.indexOf("file:") ? -1 : Math.pow(2, Fd) * Od
          }
        }.ExponentialBackoff(),
        BaseUrl: "",
        CorsBehavior: "anonymous",
        PreprocessUrl: dd => dd,
        ScriptBaseUrl: "",
        ScriptPreprocessUrl: dd => dd,
        CleanUrl: dd => dd = dd.replace(/#/gm, "%23")
      },
      Yd = (dd, Od) => {
        if ((!dd || 0 !== dd.indexOf("data:")) && pd.CorsBehavior)
          if ("string" === typeof pd.CorsBehavior || pd.CorsBehavior instanceof String) Od.crossOrigin = pd.CorsBehavior;
          else {
            const md = pd.CorsBehavior(dd);
            md && (Od.crossOrigin = md)
          }
      },
      gd = {
        getRequiredSize: null
      },
      wd = function(dd, Od, md, Fd) {
        let Rd, Kd = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "",
          Qd = arguments.length > 5 ? arguments[5] : void 0,
          td = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : vd.e.LastCreatedEngine;
        if ("undefined" === typeof HTMLImageElement && !td?._features.forceBitmapOverHTMLImageElement) return md("LoadImage is only supported in web or BabylonNative environments."), null;
        if (td?._features.forceBitmapOverHTMLImageElement && "string" !== typeof dd && "undefined" !== typeof Blob) {
          let Wd;
          if (dd instanceof Blob) Wd = dd;
          else {
            const Od = dd instanceof ArrayBuffer ? dd : (0, qd.m)(dd);
            Wd = new Blob([Od], {
              type: Kd
            })
          }
          return td.createImageBitmap(Wd, {
            premultiplyAlpha: "none",
            colorSpaceConversion: "none",
            ...Qd
          }).then(Od).catch((Od => {
            md && md("Error while trying to load image: " + dd, Od)
          })), null
        }
        let od = !1;
        if (dd instanceof ArrayBuffer || ArrayBuffer.isView(dd))
          if ("undefined" !== typeof Blob && "undefined" !== typeof URL) {
            let Od;
            Od = dd instanceof ArrayBuffer ? dd : (0, qd.m)(dd), Rd = URL.createObjectURL(new Blob([Od], {
              type: Kd
            })), od = !0
          } else Rd = `data:${Kd};base64,` + (0, hd.h)(dd);
        else dd instanceof Blob ? (Rd = URL.createObjectURL(dd), od = !0) : (Rd = pd.CleanUrl(dd), Rd = pd.PreprocessUrl(Rd));
        const Nd = Od => {
          if (md) {
            const Wd = Rd || dd.toString();
            md(`Error while trying to load image: ${0===Wd.indexOf("http")||Wd.length<=128?Wd:Wd.slice(0,128)+"..."}`, Od)
          }
        };
        if (td?._features.forceBitmapOverHTMLImageElement) return Jd(Rd, (Wd => {
          td.createImageBitmap(new Blob([Wd], {
            type: Kd
          }), {
            premultiplyAlpha: "none",
            colorSpaceConversion: "none",
            ...Qd
          }).then((dd => {
            Od(dd), od && URL.revokeObjectURL(Rd)
          })).catch((Od => {
            md && md("Error while trying to load image: " + dd, Od)
          }))
        }), void 0, Fd || void 0, !0, ((dd, Od) => {
          Nd(Od)
        })), null;
        const Hd = new Image;
        if (gd.getRequiredSize) {
          const Od = gd.getRequiredSize(dd);
          Od.width && (Hd.width = Od.width), Od.height && (Hd.height = Od.height)
        }
        Yd(Rd, Hd);
        const yd = [],
          bd = () => {
            for (const dd of yd) dd.target.removeEventListener(dd.name, dd.handler);
            yd.length = 0
          };
        yd.push({
          target: Hd,
          name: "load",
          handler: () => {
            bd(), Od(Hd), od && Hd.src && URL.revokeObjectURL(Hd.src)
          }
        }), yd.push({
          target: Hd,
          name: "error",
          handler: dd => {
            bd(), Nd(dd), od && Hd.src && URL.revokeObjectURL(Hd.src)
          }
        }), yd.push({
          target: document,
          name: "securitypolicyviolation",
          handler: dd => {
            if (dd.blockedURI !== Hd.src || "Wt" === dd.disposition) return;
            bd();
            const Od = new Error(`CSP violation of policy ${dd.effectiveDirective} ${dd.blockedURI}. Current policy is ${dd.originalPolicy}`);
            vd.e.UseFallbackTexture = !1, Nd(Od), od && Hd.src && URL.revokeObjectURL(Hd.src), Hd.src = ""
          }
        }), (() => {
          for (const dd of yd) dd.target.addEventListener(dd.name, dd.handler)
        })();
        const Td = "blob:" === Rd.substring(0, 5),
          wd = "data:" === Rd.substring(0, 5),
          Ed = () => {
            Td || wd || !Wd.e.IsCustomRequestAvailable ? Hd.src = Rd : Jd(Rd, ((dd, Od, md) => {
              const Wd = new Blob([dd], {
                  type: !Kd && md ? md : Kd
                }),
                Fd = URL.createObjectURL(Wd);
              od = !0, Hd.src = Fd
            }), void 0, Fd || void 0, !0, ((dd, Od) => {
              Nd(Od)
            }))
          },
          Ud = () => {
            Fd && Fd.loadImage(Rd, Hd)
          };
        if (!Td && !wd && Fd && Fd.enableTexturesOffline) Fd.open(Ud, Ed);
        else {
          if (-1 !== Rd.indexOf("file:")) {
            const dd = decodeURIComponent(Rd.substring(5).toLowerCase());
            if (Xd.FilesToLoad[dd] && "undefined" !== typeof URL) {
              try {
                let Od;
                try {
                  Od = URL.createObjectURL(Xd.FilesToLoad[dd])
                } catch (xd) {
                  Od = URL.createObjectURL(Xd.FilesToLoad[dd])
                }
                Hd.src = Od, od = !0
              } catch (Bd) {
                Hd.src = ""
              }
              return Hd
            }
          }
          Ed()
        }
        return Hd
      },
      Ed = (dd, Od, md, Wd, Fd) => {
        const Xd = new FileReader,
          Kd = {
            onCompleteObservable: new Rd.c,
            abort: () => Xd.abort()
          };
        return Xd.onloadend = () => Kd.onCompleteObservable.notifyObservers(Kd), Fd && (Xd.onerror = () => {
          Fd(new Td(`Unable to read ${dd.name}`, dd))
        }), Xd.onload = dd => {
          Od(dd.target.result)
        }, md && (Xd.onprogress = md), Wd ? Xd.readAsArrayBuffer(dd) : Xd.readAsText(dd), Kd
      },
      Jd = (dd, Od, md, Wd, Fd, hd, vd) => {
        if (dd.name) return Ed(dd, Od, md, Fd, hd ? dd => {
          hd(void 0, dd)
        } : void 0);
        const Qd = dd;
        if (-1 !== Qd.indexOf("file:")) {
          let dd = decodeURIComponent(Qd.substring(5).toLowerCase());
          0 === dd.indexOf("./") && (dd = dd.substring(2));
          const Wd = Xd.FilesToLoad[dd];
          if (Wd) return Ed(Wd, Od, md, Fd, hd ? dd => hd(void 0, new yd(dd.message, dd.file)) : void 0)
        }
        const {
          match: td,
          type: qd
        } = sd(Qd);
        if (td) {
          const dd = {
            onCompleteObservable: new Rd.c,
            abort: () => () => {}
          };
          try {
            const dd = Fd ? ud(Qd) : Vd(Qd);
            Od(dd, void 0, qd)
          } catch (Kd) {
            hd ? hd(void 0, Kd) : od.c.Error(Kd.message || "Failed to parse the Data URL")
          }
          return Nd.c.SetImmediate((() => {
            dd.onCompleteObservable.notifyObservers(dd)
          })), dd
        }
        return Ud(Qd, ((dd, md) => {
          Od(dd, md?.responseURL, md?.getResponseHeader("content-type"))
        }), md, Wd, Fd, hd ? dd => {
          hd(dd.request, new yd(dd.message, dd.request))
        } : void 0, vd)
      },
      Ud = (dd, Od, md, Xd, Kd, hd, Qd) => {
        null !== Xd && (Xd ?? (Xd = vd.e.LastCreatedScene?.offlineProvider)), dd = pd.CleanUrl(dd), dd = pd.PreprocessUrl(dd);
        const td = pd.BaseUrl + dd;
        let Nd = !1;
        const qd = {
            onCompleteObservable: new Rd.c,
            abort: () => Nd = !0
          },
          Hd = () => {
            let dd, Rd = new Wd.e,
              Xd = null;
            const vd = () => {
              Rd && (md && Rd.removeEventListener("progress", md), dd && Rd.removeEventListener("readystatechange", dd), Rd.removeEventListener("loadend", Hd))
            };
            let Hd = () => {
              vd(), qd.onCompleteObservable.notifyObservers(qd), qd.onCompleteObservable.clear(), md = void 0, dd = null, Hd = null, hd = void 0, Qd = void 0, Od = void 0
            };
            qd.abort = () => {
              Nd = !0, Hd && Hd(), Rd && Rd.readyState !== (XMLHttpRequest.DONE || 4) && Rd.abort(), null !== Xd && (clearTimeout(Xd), Xd = null), Rd = null
            };
            const yd = dd => {
                const Od = dd.message || "Unknown error";
                hd && Rd ? hd(new bd(Od, Rd)) : od.c.Error(Od)
              },
              Td = od => {
                if (Rd) {
                  if (Rd.open("GET", td), Qd) try {
                    Qd(Rd)
                  } catch (qd) {
                    return void yd(qd)
                  }
                  Kd && (Rd.responseType = "arraybuffer"), md && Rd.addEventListener("progress", md), Hd && Rd.addEventListener("loadend", Hd), dd = () => {
                    if (!Nd && Rd && Rd.readyState === (XMLHttpRequest.DONE || 4)) {
                      if (dd && Rd.removeEventListener("readystatechange", dd), Rd.status >= 200 && Rd.status < 300 || 0 === Rd.status && (!(0, Fd.h)() || Bd())) {
                        const dd = Kd ? Rd.response : Rd.responseText;
                        if (null !== dd) {
                          try {
                            Od && Od(dd, Rd)
                          } catch (qd) {
                            yd(qd)
                          }
                          return
                        }
                      }
                      const md = pd.DefaultRetryStrategy;
                      if (md) {
                        const dd = md(td, Rd, od);
                        if (-1 !== dd) return vd(), Rd = new Wd.e, void(Xd = setTimeout((() => Td(od + 1)), dd))
                      }
                      const Qd = new bd("Error status: " + Rd.status + " " + Rd.statusText + " - Unable to load " + td, Rd);
                      hd && hd(Qd)
                    }
                  }, Rd.addEventListener("readystatechange", dd), Rd.send()
                }
              };
            Td(0)
          };
        if (Xd && Xd.enableSceneOffline && !dd.startsWith("blob:")) {
          const Wd = dd => {
              dd && dd.status > 400 ? hd && hd(dd) : Hd()
            },
            Fd = () => {
              Xd && Xd.loadFile(pd.BaseUrl + dd, (dd => {
                !Nd && Od && Od(dd), qd.onCompleteObservable.notifyObservers(qd)
              }), md ? dd => {
                !Nd && md && md(dd)
              } : void 0, Wd, Kd)
            };
          Xd.open(Fd, Wd)
        } else Hd();
        return qd
      },
      xd = dd => {
        const {
          match: Od,
          type: md
        } = sd(dd);
        if (Od) return md || void 0;
        const Wd = dd.lastIndexOf(".");
        switch (dd.substring(Wd + 1).toLowerCase()) {
          case "glb":
            return "model/gltf-binary";
          case "bin":
            return "application/octet-stream";
          case "tV":
            return "model/gltf+json";
          case "jpg":
          case "jpeg":
            return "image/jpeg";
          case "png":
            return "image/png";
          case "webp":
            return "image/webp";
          case "ktx":
            return "image/ktx";
          case "ktx2":
            return "image/ktx2";
          case "avif":
            return "image/avif";
          default:
            return
        }
      },
      Bd = () => "undefined" !== typeof location && "file:" === location.protocol,
      Sd = dd => Hd.test(dd),
      sd = dd => {
        const Od = Hd.exec(dd);
        if (null === Od || 0 === Od.length) return {
          match: !1,
          type: ""
        };
        return {
          match: !0,
          type: Od[0].replace("data:", "").replace(";base64,", "")
        }
      };

    function ud(dd) {
      return (0, hd.d)(dd.split(",")[1])
    }
    const Vd = dd => (0, hd.g)(dd.split(",")[1]);
    let Ad;
    const rd = (dd, Od, md, Wd, Fd, Rd, Xd, Kd, hd, vd) => {
      Ad = {
        DecodeBase64UrlToBinary: dd,
        DecodeBase64UrlToString: Od,
        DefaultRetryStrategy: md.DefaultRetryStrategy,
        BaseUrl: md.BaseUrl,
        CorsBehavior: md.CorsBehavior,
        PreprocessUrl: md.PreprocessUrl,
        IsBase64DataUrl: Wd,
        IsFileURL: Fd,
        LoadFile: Rd,
        LoadImage: Xd,
        ReadFile: Kd,
        RequestFile: hd,
        SetCorsBehavior: vd
      }, Object.defineProperty(Ad, "DefaultRetryStrategy", {
        get: function() {
          return md.DefaultRetryStrategy
        },
        set: function(dd) {
          md.DefaultRetryStrategy = dd
        }
      }), Object.defineProperty(Ad, "BaseUrl", {
        get: function() {
          return md.BaseUrl
        },
        set: function(dd) {
          md.BaseUrl = dd
        }
      }), Object.defineProperty(Ad, "PreprocessUrl", {
        get: function() {
          return md.PreprocessUrl
        },
        set: function(dd) {
          md.PreprocessUrl = dd
        }
      }), Object.defineProperty(Ad, "CorsBehavior", {
        get: function() {
          return md.CorsBehavior
        },
        set: function(dd) {
          md.CorsBehavior = dd
        }
      })
    };
    let Gd = !1;

    function nd() {
      Gd || (Gd = !0, rd(ud, Vd, pd, Sd, Bd, Jd, wd, Ed, Ud, Yd), Qd.c.loadFile = Jd, Qd.c.loadImage = wd, td.q.loadFile = Jd)
    }
  },
  41997: (dd, Od, md) => {
    md.d(Od, {
      b: () => Kd,
      d: () => Rd,
      g: () => Xd
    });
    let Wd = null;

    function Fd() {
      if (Wd) return Wd;
      const dd = new ArrayBuffer(4),
        Od = new Float32Array(dd),
        md = new Uint32Array(dd),
        Fd = new Uint32Array(512),
        Rd = new Uint32Array(512);
      for (let Wd = 0; Wd < 256; ++Wd) {
        const dd = Wd - 127;
        dd < -24 ? (Fd[Wd] = 0, Fd[256 | Wd] = 32768, Rd[Wd] = 24, Rd[256 | Wd] = 24) : dd < -14 ? (Fd[Wd] = 1024 >> -dd - 14, Fd[256 | Wd] = 1024 >> -dd - 14 | 32768, Rd[Wd] = -dd - 1, Rd[256 | Wd] = -dd - 1) : dd <= 15 ? (Fd[Wd] = dd + 15 << 10, Fd[256 | Wd] = dd + 15 << 10 | 32768, Rd[Wd] = 13, Rd[256 | Wd] = 13) : dd < 128 ? (Fd[Wd] = 31744, Fd[256 | Wd] = 64512, Rd[Wd] = 24, Rd[256 | Wd] = 24) : (Fd[Wd] = 31744, Fd[256 | Wd] = 64512, Rd[Wd] = 13, Rd[256 | Wd] = 13)
      }
      const Xd = new Uint32Array(2048),
        Kd = new Uint32Array(64),
        hd = new Uint32Array(64);
      for (let Wd = 1; Wd < 1024; ++Wd) {
        let dd = Wd << 13,
          Od = 0;
        for (; 0 === (8388608 & dd);) dd <<= 1, Od -= 8388608;
        dd &= -8388609, Od += 947912704, Xd[Wd] = dd | Od
      }
      for (let Wd = 1024; Wd < 2048; ++Wd) Xd[Wd] = 939524096 + (Wd - 1024 << 13);
      for (let Wd = 1; Wd < 31; ++Wd) Kd[Wd] = Wd << 23;
      Kd[31] = 1199570944, Kd[32] = 2147483648;
      for (let Wd = 33; Wd < 63; ++Wd) Kd[Wd] = 2147483648 + (Wd - 32 << 23);
      Kd[63] = 3347054592;
      for (let Wd = 1; Wd < 64; ++Wd) 32 !== Wd && (hd[Wd] = 1024);
      return Wd = {
        floatView: Od,
        uint32View: md,
        baseTable: Fd,
        shiftTable: Rd,
        mantissaTable: Xd,
        exponentTable: Kd,
        offsetTable: hd
      }, Wd
    }
    const Rd = 65504;

    function Xd(dd) {
      const Od = Fd();
      Od.floatView[0] = dd;
      const md = Od.uint32View[0],
        Wd = md >> 23 & 511;
      return Od.baseTable[Wd] + ((8388607 & md) >> Od.shiftTable[Wd])
    }

    function Kd(dd) {
      const Od = Fd();
      return Od.uint32View[0] = Od.mantissaTable[Od.offsetTable[dd >> 10] + (1023 & dd)] + Od.exponentTable[dd >> 10], Od.floatView[0]
    }
  },
  41983: (dd, Od, md) => {
    md.d(Od, {
      d: () => Rd,
      g: () => Fd,
      h: () => Wd
    });
    const Wd = dd => {
        const Od = ArrayBuffer.isView(dd) ? new Uint8Array(dd.buffer, dd.byteOffset, dd.byteLength) : new Uint8Array(dd);
        return "function" === typeof Od.toBase64 ? Od.toBase64() : function(dd) {
          const Od = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
          let md, Wd, Fd, Rd, Xd, Kd, hd, vd = "",
            Qd = 0;
          for (; Qd < dd.length;) md = dd[Qd++], Wd = Qd < dd.length ? dd[Qd++] : Number.NaN, Fd = Qd < dd.length ? dd[Qd++] : Number.NaN, Rd = md >> 2, Xd = (3 & md) << 4 | Wd >> 4, Kd = (15 & Wd) << 2 | Fd >> 6, hd = 63 & Fd, isNaN(Wd) ? Kd = hd = 64 : isNaN(Fd) && (hd = 64), vd += Od.charAt(Rd) + Od.charAt(Xd) + Od.charAt(Kd) + Od.charAt(hd);
          return vd
        }(Od)
      },
      Fd = dd => atob(dd),
      Rd = dd => "function" === typeof Uint8Array.fromBase64 ? Uint8Array.fromBase64(dd).buffer : function(dd) {
        const Od = Fd(dd),
          md = Od.length,
          Wd = new Uint8Array(new ArrayBuffer(md));
        for (let Fd = 0; Fd < md; Fd++) Wd[Fd] = Od.charCodeAt(Fd);
        return Wd.buffer
      }(dd)
  },
  41831: (dd, Od, md) => {
    md.d(Od, {
      c: () => Fd,
      g: () => Xd
    });
    let Wd = [];
    class Fd {
      static SetImmediate(dd) {
        0 === Wd.length && setTimeout((() => {
          const dd = Wd;
          Wd = [];
          for (const Od of dd) Od()
        }), 1), Wd.push(dd)
      }
    }

    function Rd(dd, Od, md) {
      try {
        if (dd()) return Od(), !0
      } catch (Wd) {
        return md?.(Wd), !0
      }
      return !1
    }
    const Xd = function(dd, Od, md) {
      let Wd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 16,
        Fd = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3e4,
        Xd = arguments.length > 6 ? arguments[6] : void 0;
      if ((!(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5]) && Rd(dd, Od, md)) return null;
      const Kd = setInterval((() => {
        Rd(dd, Od, md) ? clearInterval(Kd) : (Fd -= Wd, Fd < 0 && (clearInterval(Kd), md?.(new Error("Operation timed out after maximum retries. " + (Xd || "")), !0)))
      }), Wd);
      return () => clearInterval(Kd)
    }
  },
  41969: (dd, Od, md) => {
    md.d(Od, {
      e: () => Wd
    });
    class Wd {
      constructor() {
        this._xhr = "undefined" !== typeof _native && _native.XMLHttpRequest ? new _native.XMLHttpRequest : new XMLHttpRequest, this._requestURL = ""
      }
      static get IsCustomRequestAvailable() {
        return Object.keys(Wd.CustomRequestHeaders).length > 0 || Wd.CustomRequestModifiers.length > 0
      }
      static _CleanUrl(dd) {
        return dd = (dd = dd.replace("file:http:", "http:")).replace("file:https:", "https:")
      }
      static _ShouldSkipRequestModifications(dd) {
        return Wd.SkipRequestModificationForBabylonCDN && (dd.includes("preview.babylonjs.com") || dd.includes("cdn.babylonjs.com"))
      }
      static _CollectCustomizations(dd) {
        const Od = {
          ...arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
        };
        if (Wd._ShouldSkipRequestModifications(dd)) return {
          url: dd,
          headers: Od
        };
        for (const Fd in Wd.CustomRequestHeaders) {
          const dd = Wd.CustomRequestHeaders[Fd];
          dd && (Od[Fd] = dd)
        }
        const md = {
          setRequestHeader: (dd, md) => {
            Od[dd] = md
          }
        };
        for (const Fd of Wd.CustomRequestModifiers) {
          if (Wd._ShouldSkipRequestModifications(dd)) break;
          const Od = Fd(md, dd);
          "string" === typeof Od && (dd = Od)
        }
        return {
          url: dd,
          headers: Od
        }
      }
      static async FetchAsync(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const md = Od.method ?? "GET";
        if ("undefined" !== typeof fetch) {
          const {
            url: Fd,
            headers: Rd
          } = Wd._CollectCustomizations(Wd._CleanUrl(dd), Od.headers ?? {});
          return await fetch(Fd, {
            method: md,
            headers: Rd,
            body: Od.body ?? void 0
          })
        }
        return await new Promise(((Fd, Rd) => {
          const Xd = new Wd;
          Xd.responseType = "arraybuffer", Xd.addEventListener("readystatechange", (() => {
            if (4 === Xd.readyState)
              if (Xd.status >= 200 && Xd.status < 300) {
                const dd = "undefined" !== typeof Headers ? new Headers : void 0,
                  Od = Xd.getResponseHeader("Content-Type");
                Od && dd && dd.set("Content-Type", Od), "undefined" !== typeof Response ? Fd(new Response(Xd.response, {
                  status: Xd.status,
                  statusText: Xd.statusText,
                  headers: dd
                })) : Fd({
                  ok: !0,
                  status: Xd.status,
                  statusText: Xd.statusText,
                  headers: {
                    get: dd => Xd.getResponseHeader(dd)
                  },
                  arrayBuffer: async () => await Promise.resolve(Xd.response)
                })
              } else Rd(new Error(`HTTP ${Xd.status} loading '${Xd.requestURL}': ${Xd.statusText}`))
          })), Xd.open(md, dd, Od.headers), Xd.send(Od.body ?? null)
        }))
      }
      get requestURL() {
        return this._requestURL
      }
      get onprogress() {
        return this._xhr.onprogress
      }
      set onprogress(dd) {
        this._xhr.onprogress = dd
      }
      get readyState() {
        return this._xhr.readyState
      }
      get status() {
        return this._xhr.status
      }
      get statusText() {
        return this._xhr.statusText
      }
      get response() {
        return this._xhr.response
      }
      get responseURL() {
        return this._xhr.responseURL
      }
      get responseText() {
        return this._xhr.responseText
      }
      get responseType() {
        return this._xhr.responseType
      }
      set responseType(dd) {
        this._xhr.responseType = dd
      }
      get timeout() {
        return this._xhr.timeout
      }
      set timeout(dd) {
        this._xhr.timeout = dd
      }
      addEventListener(dd, Od, md) {
        this._xhr.addEventListener(dd, Od, md)
      }
      removeEventListener(dd, Od, md) {
        this._xhr.removeEventListener(dd, Od, md)
      }
      abort() {
        this._xhr.abort()
      }
      send(dd) {
        this._xhr.send(dd)
      }
      open(dd, Od, md) {
        const {
          url: Fd,
          headers: Rd
        } = Wd._CollectCustomizations(Od, md);
        this._requestURL = Wd._CleanUrl(Fd), this._xhr.open(dd, this._requestURL, !0);
        for (const Wd in Rd) this._xhr.setRequestHeader(Wd, Rd[Wd])
      }
      setRequestHeader(dd, Od) {
        this._xhr.setRequestHeader(dd, Od)
      }
      getResponseHeader(dd) {
        return this._xhr.getResponseHeader(dd)
      }
    }
    Wd.CustomRequestHeaders = {}, Wd.CustomRequestModifiers = new Array, Wd.SkipRequestModificationForBabylonCDN = !0
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);