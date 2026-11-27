export const id = 290;
export const ids = [290];
export const modules = {
  41919: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      c: () => mr,
      e: () => xr,
      f: () => fr,
      h: () => Nr,
      j: () => Er,
      k: () => Ir,
      n: () => pr
    });
    var Zr = Qr(40246),
      Wr = Qr(41922);

    function ar(rr, Sr, Qr, Zr) {
      switch (Sr) {
        case 5120: {
          let Sr = rr.getInt8(Qr);
          return Zr && (Sr = Math.max(Sr / 127, -1)), Sr
        }
        case 5121: {
          let Sr = rr.getUint8(Qr);
          return Zr && (Sr /= 255), Sr
        }
        case 5122: {
          let Sr = rr.getInt16(Qr, !0);
          return Zr && (Sr = Math.max(Sr / 32767, -1)), Sr
        }
        case 5123: {
          let Sr = rr.getUint16(Qr, !0);
          return Zr && (Sr /= 65535), Sr
        }
        case 5131:
          return (0, Wr.c)(rr.getUint16(Qr, !0));
        case 5124:
          return rr.getInt32(Qr, !0);
        case 5125:
          return rr.getUint32(Qr, !0);
        case 5126:
          return rr.getFloat32(Qr, !0);
        default:
          throw new Error(`Invalid component type ${Sr}`)
      }
    }

    function jr(rr, Sr, Qr, Zr, ar) {
      switch (Sr) {
        case 5120:
          Zr && (ar = Math.round(127 * ar)), rr.setInt8(Qr, ar);
          break;
        case 5121:
          Zr && (ar = Math.round(255 * ar)), rr.setUint8(Qr, ar);
          break;
        case 5122:
          Zr && (ar = Math.round(32767 * ar)), rr.setInt16(Qr, ar, !0);
          break;
        case 5123:
          Zr && (ar = Math.round(65535 * ar)), rr.setUint16(Qr, ar, !0);
          break;
        case 5131:
          rr.setUint16(Qr, (0, Wr.g)(ar), !0);
          break;
        case 5124:
          rr.setInt32(Qr, ar, !0);
          break;
        case 5125:
          rr.setUint32(Qr, ar, !0);
          break;
        case 5126:
          rr.setFloat32(Qr, ar, !0);
          break;
        default:
          throw new Error(`Invalid component type ${Sr}`)
      }
    }

    function Ir(rr) {
      switch (rr) {
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
          throw new Error(`Invalid type '${rr}'`)
      }
    }

    function fr(rr, Sr, Qr, Zr, Wr, fr, Er, pr) {
      const xr = new Array(Zr),
        mr = new Array(Zr);
      if (rr instanceof Array) {
        let Wr = Sr / 4;
        const ar = Qr / 4;
        for (let Sr = 0; Sr < fr; Sr += Zr) {
          for (let Sr = 0; Sr < Zr; Sr++) xr[Sr] = mr[Sr] = rr[Wr + Sr];
          pr(mr, Sr);
          for (let Sr = 0; Sr < Zr; Sr++) xr[Sr] !== mr[Sr] && (rr[Wr + Sr] = mr[Sr]);
          Wr += ar
        }
      } else {
        const Nr = ArrayBuffer.isView(rr) ? new DataView(rr.buffer, rr.byteOffset, rr.byteLength) : new DataView(rr),
          Ur = Ir(Wr);
        for (let rr = 0; rr < fr; rr += Zr) {
          for (let rr = 0, Qr = Sr; rr < Zr; rr++, Qr += Ur) xr[rr] = mr[rr] = ar(Nr, Wr, Qr, Er);
          pr(mr, rr);
          for (let rr = 0, Qr = Sr; rr < Zr; rr++, Qr += Ur) xr[rr] !== mr[rr] && jr(Nr, Wr, Qr, Er, mr[rr]);
          Sr += Qr
        }
      }
    }

    function Er(rr, Sr, Qr, Wr, ar, jr, Er, pr) {
      const xr = Sr * Ir(Qr),
        mr = Er * Sr;
      if (5126 !== Qr || ar !== xr) {
        const Zr = new Float32Array(mr);
        return fr(rr, Wr, ar, Sr, Qr, mr, jr, ((rr, Qr) => {
          for (let Wr = 0; Wr < Sr; Wr++) Zr[Qr + Wr] = rr[Wr]
        })), Zr
      }
      if (!(rr instanceof Array || rr instanceof Float32Array) || 0 !== Wr || rr.length !== mr) {
        if (rr instanceof Array) {
          const Sr = Wr / 4;
          return rr.slice(Sr, Sr + mr)
        }
        if (ArrayBuffer.isView(rr)) {
          const Sr = rr.byteOffset + Wr;
          return 0 !== (3 & Sr) && (Zr.c.Warn("Float array must be aligned to 4-bytes border"), pr = !0), pr ? new Float32Array(rr.buffer.slice(Sr, Sr + mr * Float32Array.BYTES_PER_ELEMENT)) : new Float32Array(rr.buffer, Sr, mr)
        }
        return new Float32Array(rr, Wr, mr)
      }
      return pr ? rr.slice() : rr
    }

    function pr(rr, Sr, Qr, Wr, ar, jr, Er) {
      const pr = Ir(Qr),
        xr = function(rr) {
          switch (rr) {
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
              throw new Error(`Invalid component type '${rr}'`)
          }
        }(Qr),
        mr = jr * Sr;
      if (Array.isArray(rr)) {
        if (0 !== (3 & Wr) || 0 !== (3 & ar)) throw new Error("byteOffset and byteStride must be a multiple of 4 for number[] data.");
        const Zr = Wr / 4,
          Ir = ar / 4;
        if (Zr + (jr - 1) * Ir + Sr > rr.length) throw new Error("Last accessed index is out of bounds.");
        if (Ir < Sr) throw new Error("Data stride cannot be smaller than the component size.");
        if (Ir !== Sr) {
          const Zr = new xr(mr);
          return fr(rr, Wr, ar, Sr, Qr, mr, !1, ((rr, Qr) => {
            for (let Wr = 0; Wr < Sr; Wr++) Zr[Qr + Wr] = rr[Wr]
          })), Zr
        }
        return new xr(rr.slice(Zr, Zr + mr))
      }
      let Nr, Ur = Wr;
      ArrayBuffer.isView(rr) ? (Nr = rr.buffer, Ur += rr.byteOffset) : Nr = rr;
      if (Ur + (jr - 1) * ar + Sr * pr > Nr.byteLength) throw new Error("Last accessed byte is out of bounds.");
      const tr = Sr * pr;
      if (ar < tr) throw new Error("Byte stride cannot be smaller than the component's byte size.");
      if (ar !== tr) {
        const rr = new xr(mr),
          Qr = new Uint8Array(Nr, Ur),
          Zr = new Uint8Array(rr.buffer),
          Wr = Sr * pr;
        for (let Sr = 0, Ir = 0, fr = 0; Sr < jr; Sr++, Ir += ar, fr += Wr) Zr.set(Qr.subarray(Ir, Ir + Wr), fr);
        return rr
      }
      return 1 !== pr && 0 !== (Ur & pr - 1) && (Zr.c.Warn("Array must be aligned to border of element size. Data will be copied."), Er = !0), Er ? new xr(Nr.slice(Ur, Ur + mr * pr)) : new xr(Nr, Ur, mr)
    }

    function xr(rr, Sr, Qr, Wr, ar, jr, Er, pr) {
      const xr = Sr * Ir(Qr),
        mr = Er * Sr;
      if (pr.length !== mr) throw new Error("Output length is not valid");
      if (5126 === Qr && ar === xr)
        if (rr instanceof Array) {
          const Sr = Wr / 4;
          pr.set(rr, Sr)
        } else if (ArrayBuffer.isView(rr)) {
        const Sr = rr.byteOffset + Wr;
        if (0 !== (3 & Sr)) return Zr.c.Warn("Float array must be aligned to 4-bytes border"), void pr.set(new Float32Array(rr.buffer.slice(Sr, Sr + mr * Float32Array.BYTES_PER_ELEMENT)));
        const Qr = new Float32Array(rr.buffer, Sr, mr);
        pr.set(Qr)
      } else {
        const Sr = new Float32Array(rr, Wr, mr);
        pr.set(Sr)
      } else fr(rr, Wr, ar, Sr, Qr, mr, jr, ((rr, Qr) => {
        for (let Zr = 0; Zr < Sr; Zr++) pr[Qr + Zr] = rr[Zr]
      }))
    }

    function mr(rr, Sr) {
      let Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        Zr = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
      if (Array.isArray(rr)) {
        for (let Wr = 0; Wr < Sr; Wr++)
          if (rr[Qr + Wr] - Zr > 65535) return !0;
        return !1
      }
      return 4 === rr.BYTES_PER_ELEMENT
    }

    function Nr(rr) {
      const Sr = rr.buffer;
      if (Sr instanceof ArrayBuffer) return rr;
      const Qr = new ArrayBuffer(rr.byteLength);
      return new Uint8Array(Qr).set(new Uint8Array(Sr, rr.byteOffset, rr.byteLength)), Qr
    }
  },
  41775: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      b: () => Tr,
      c: () => yr,
      j: () => Br,
      g: () => Hr,
      k: () => qr
    });
    class Zr {
      constructor() {
        this.children = []
      }
      isValid(rr) {
        return !0
      }
      process(rr, Sr, Qr) {
        let Zr = "";
        if (this.line) {
          let Qr = this.line;
          const Wr = Sr.processor;
          if (Wr) {
            Wr.lineProcessor && (Qr = Wr.lineProcessor(Qr, Sr.isFragment, Sr.processingContext));
            const Zr = Sr.processor?.attributeKeywordName ?? "attribute",
              ar = Sr.isFragment && Sr.processor?.varyingFragmentKeywordName ? Sr.processor?.varyingFragmentKeywordName : !Sr.isFragment && Sr.processor?.varyingVertexKeywordName ? Sr.processor?.varyingVertexKeywordName : "varying";
            if (!Sr.isFragment && Wr.attributeProcessor && this.line.startsWith(Zr)) Qr = Wr.attributeProcessor(this.line, rr, Sr.processingContext);
            else if (Wr.varyingProcessor && (Wr.varyingCheck?.(this.line, Sr.isFragment) || !Wr.varyingCheck && this.line.startsWith(ar))) Qr = Wr.varyingProcessor(this.line, Sr.isFragment, rr, Sr.processingContext);
            else if (Wr.uniformProcessor && Wr.uniformRegexp && Wr.uniformRegexp.test(this.line)) Sr.lookForClosingBracketForUniformBuffer || (Qr = Wr.uniformProcessor(this.line, Sr.isFragment, rr, Sr.processingContext));
            else if (Wr.uniformBufferProcessor && Wr.uniformBufferRegexp && Wr.uniformBufferRegexp.test(this.line)) Sr.lookForClosingBracketForUniformBuffer || (Qr = Wr.uniformBufferProcessor(this.line, Sr.isFragment, Sr.processingContext), Sr.lookForClosingBracketForUniformBuffer = !0);
            else if (Wr.textureProcessor && Wr.textureRegexp && Wr.textureRegexp.test(this.line)) Qr = Wr.textureProcessor(this.line, Sr.isFragment, rr, Sr.processingContext);
            else if ((Wr.uniformProcessor || Wr.uniformBufferProcessor) && this.line.startsWith("uniform") && !Sr.lookForClosingBracketForUniformBuffer) {
              /uniform\s+(?:(?:highp)?|(?:lowp)?)\s*(\S+)\s+(\S+)\s*;/.test(this.line) ? Wr.uniformProcessor && (Qr = Wr.uniformProcessor(this.line, Sr.isFragment, rr, Sr.processingContext)) : Wr.uniformBufferProcessor && (Qr = Wr.uniformBufferProcessor(this.line, Sr.isFragment, Sr.processingContext), Sr.lookForClosingBracketForUniformBuffer = !0)
            }
            Sr.lookForClosingBracketForUniformBuffer && -1 !== this.line.indexOf("}") && (Sr.lookForClosingBracketForUniformBuffer = !1, Wr.endOfUniformBufferProcessor && (Qr = Wr.endOfUniformBufferProcessor(this.line, Sr.isFragment, Sr.processingContext)))
          }
          Zr += Qr + "\n"
        }
        for (const Wr of this.children) Zr += Wr.process(rr, Sr, Qr);
        return this.additionalDefineKey && (rr[this.additionalDefineKey] = this.additionalDefineValue || "true", Qr[this.additionalDefineKey] = rr[this.additionalDefineKey]), Zr
      }
    }
    class Wr {
      constructor() {
        this._lines = []
      }
      get currentLine() {
        return this._lines[this.lineIndex]
      }
      get canRead() {
        return this.lineIndex < this._lines.length - 1
      }
      set lines(rr) {
        this._lines.length = 0;
        for (const Sr of rr) {
          if (!Sr || "\r" === Sr) continue;
          if ("#" === Sr[0]) {
            this._lines.push(Sr);
            continue
          }
          const rr = Sr.trim();
          if (!rr) continue;
          if (rr.startsWith("//")) {
            this._lines.push(Sr);
            continue
          }
          const Qr = rr.indexOf(";");
          if (-1 === Qr) this._lines.push(rr);
          else if (Qr === rr.length - 1) rr.length > 1 && this._lines.push(rr);
          else {
            const rr = Sr.split(";");
            for (let Sr = 0; Sr < rr.length; Sr++) {
              let Qr = rr[Sr];
              Qr && (Qr = Qr.trim(), Qr && this._lines.push(Qr + (Sr !== rr.length - 1 ? ";" : "")))
            }
          }
        }
      }
    }
    class ar extends Zr {
      process(rr, Sr, Qr) {
        for (let Zr = 0; Zr < this.children.length; Zr++) {
          const Wr = this.children[Zr];
          if (Wr.isValid(rr)) return Wr.process(rr, Sr, Qr)
        }
        return ""
      }
    }
    class jr extends Zr {
      isValid(rr) {
        return this.testExpression.isTrue(rr)
      }
    }
    class Ir {
      isTrue(rr) {
        return !0
      }
      static postfixToInfix(rr) {
        const Sr = [];
        for (const Qr of rr)
          if (void 0 === Ir._OperatorPriority[Qr]) Sr.push(Qr);
          else {
            const rr = Sr[Sr.length - 1],
              Zr = Sr[Sr.length - 2];
            Sr.length -= 2, Sr.push(`(${Zr}${Qr}${rr})`)
          } return Sr[Sr.length - 1]
      }
      static infixToPostfix(rr) {
        const Sr = Ir._InfixToPostfixCache.get(rr);
        if (Sr) return Sr.accessTime = Date.now(), Sr.result;
        if (!rr.includes("&&") && !rr.includes("||") && !rr.includes(")") && !rr.includes("(")) return [rr];
        const Qr = [];
        let Zr = -1;
        const Wr = () => {
            pr = pr.trim(), "" !== pr && (Qr.push(pr), pr = "")
          },
          ar = rr => {
            Zr < Ir._Stack.length - 1 && (Ir._Stack[++Zr] = rr)
          },
          jr = () => Ir._Stack[Zr],
          fr = () => -1 === Zr ? "!!INVALID EXPRESSION!!" : Ir._Stack[Zr--];
        let Er = 0,
          pr = "";
        for (; Er < rr.length;) {
          const Sr = rr.charAt(Er),
            xr = Er < rr.length - 1 ? rr.substring(Er, 2 + Er) : "";
          if ("(" === Sr) pr = "", ar(Sr);
          else if (")" === Sr) {
            for (Wr(); - 1 !== Zr && "(" !== jr();) Qr.push(fr());
            fr()
          } else if (Ir._OperatorPriority[xr] > 1) {
            for (Wr(); - 1 !== Zr && Ir._OperatorPriority[jr()] >= Ir._OperatorPriority[xr];) Qr.push(fr());
            ar(xr), Er++
          } else pr += Sr;
          Er++
        }
        for (Wr(); - 1 !== Zr;) "(" === jr() ? fr() : Qr.push(fr());
        return Ir._InfixToPostfixCache.size >= Ir.InfixToPostfixCacheLimitSize && Ir.ClearCache(), Ir._InfixToPostfixCache.set(rr, {
          result: Qr,
          accessTime: Date.now()
        }), Qr
      }
      static ClearCache() {
        const rr = Array.from(Ir._InfixToPostfixCache.entries()).sort(((rr, Sr) => rr[1].accessTime - Sr[1].accessTime));
        for (let Sr = 0; Sr < Ir.InfixToPostfixCacheCleanupSize; Sr++) Ir._InfixToPostfixCache.delete(rr[Sr][0])
      }
    }
    Ir.InfixToPostfixCacheLimitSize = 5e4, Ir.InfixToPostfixCacheCleanupSize = 25e3, Ir._InfixToPostfixCache = new Map, Ir._OperatorPriority = {
      ")": 0,
      "(": 1,
      "||": 2,
      "&&": 3
    }, Ir._Stack = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];
    class fr extends Ir {
      constructor(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        super(), this.define = rr, this.not = Sr
      }
      isTrue(rr) {
        let Sr = void 0 !== rr[this.define];
        return this.not && (Sr = !Sr), Sr
      }
    }
    class Er extends Ir {
      isTrue(rr) {
        return this.leftOperand.isTrue(rr) || this.rightOperand.isTrue(rr)
      }
    }
    class pr extends Ir {
      isTrue(rr) {
        return this.leftOperand.isTrue(rr) && this.rightOperand.isTrue(rr)
      }
    }
    class xr extends Ir {
      constructor(rr, Sr, Qr) {
        super(), this.define = rr, this.operand = Sr, this.testValue = Qr
      }
      toString() {
        return `${this.define} ${this.operand} ${this.testValue}`
      }
      isTrue(rr) {
        let Sr = !1;
        const Qr = parseInt(void 0 != rr[this.define] ? rr[this.define] : this.define),
          Zr = parseInt(void 0 != rr[this.testValue] ? rr[this.testValue] : this.testValue);
        if (isNaN(Qr) || isNaN(Zr)) return !1;
        switch (this.operand) {
          case ">":
            Sr = Qr > Zr;
            break;
          case "<":
            Sr = Qr < Zr;
            break;
          case "<=":
            Sr = Qr <= Zr;
            break;
          case ">=":
            Sr = Qr >= Zr;
            break;
          case "==":
            Sr = Qr === Zr;
            break;
          case "!=":
            Sr = Qr !== Zr
        }
        return Sr
      }
    }
    var mr = Qr(41769),
      Nr = Qr(41764);
    const Ur = /defined\s*?\((.+?)\)/g,
      tr = /defined\s*?\[(.+?)\]/g,
      hr = /#include\s?<(.+)>(\((.*)\))*(\[(.*)\])*/g,
      zr = /__decl__/,
      Yr = /light\{X\}.(\w*)/g,
      nr = /\{X\}/g,
      er = [],
      Kr = /(#ifdef)|(#else)|(#elif)|(#endif)|(#ifndef)|(#if)/;

    function yr(rr) {
      rr.processor && rr.processor.initializeShaders && rr.processor.initializeShaders(rr.processingContext)
    }

    function Br(rr, Sr, Qr, Zr) {
      Sr.processor?.preProcessShaderCode && (rr = Sr.processor.preProcessShaderCode(rr, Sr.isFragment)), Hr(rr, Sr, (rr => {
        Sr.processCodeAfterIncludes && (rr = Sr.processCodeAfterIncludes(Sr.isFragment ? "fragment" : "vertex", rr, Sr.defines));
        const Wr = function(rr, Sr, Qr) {
          let Zr = function(rr, Sr) {
            if (Sr.processor?.noPrecision) return rr;
            const Qr = Sr.shouldUseHighPrecisionShader; - 1 === rr.indexOf("precision highp float") ? rr = Qr ? "precision highp float;\n" + rr : "precision mediump float;\n" + rr : Qr || (rr = rr.replace("precision highp float", "precision mediump float"));
            return rr
          }(rr, Sr);
          if (!Sr.processor) return Zr;
          if (0 === Sr.processor.shaderLanguage && -1 !== Zr.indexOf("#version 3") && (Zr = Zr.replace("#version 300 es", ""), !Sr.processor.parseGLES3)) return Zr;
          const Wr = Sr.defines,
            ar = Pr(Sr, Qr);
          Sr.processor.preProcessor && (Zr = Sr.processor.preProcessor(Zr, Wr, ar, Sr.isFragment, Sr.processingContext));
          const jr = {};
          Zr = Xr(Zr, ar, Sr, jr), Sr.processor.postProcessor && (Zr = Sr.processor.postProcessor(Zr, Wr, Sr.isFragment, Sr.processingContext, Qr ? {
            drawBuffersExtensionDisabled: !Qr.getCaps().drawBuffersExtension
          } : {}, ar, jr));
          Qr?._features.needShaderCodeInlining && (Zr = Qr.inlineShaderCode(Zr));
          return Zr
        }(rr, Sr, Zr);
        Qr(Wr, rr)
      }))
    }

    function Tr(rr, Sr, Qr) {
      return Qr.processor && Qr.processor.finalizeShaders ? Qr.processor.finalizeShaders(rr, Sr, Qr.processingContext) : {
        vertexCode: rr,
        fragmentCode: Sr
      }
    }

    function vr(rr) {
      const Sr = /defined\((.+)\)/.exec(rr);
      if (Sr && Sr.length) return new fr(Sr[1].trim(), "!" === rr[0]);
      const Qr = ["==", "!=", ">=", "<=", "<", ">"];
      let Zr = "",
        Wr = 0;
      for (Zr of Qr)
        if (Wr = rr.indexOf(Zr), Wr > -1) break;
      if (-1 === Wr) return new fr(rr);
      const ar = rr.substring(0, Wr).trim(),
        jr = rr.substring(Wr + Zr.length).trim();
      return new xr(ar, Zr, jr)
    }

    function Or(rr, Sr) {
      const Qr = new jr,
        Zr = rr.substring(0, Sr);
      let Wr = rr.substring(Sr);
      return Wr = Wr.substring(0, (Wr.indexOf("//") + 1 || Wr.length + 1) - 1).trim(), Qr.testExpression = "#ifdef" === Zr ? new fr(Wr) : "#ifndef" === Zr ? new fr(Wr, !0) : function(rr) {
        rr = rr.replace(Ur, "defined[$1]");
        const Sr = Ir.infixToPostfix(rr),
          Qr = [];
        for (const Wr of Sr)
          if ("||" !== Wr && "&&" !== Wr) Qr.push(Wr);
          else if (Qr.length >= 2) {
          let rr = Qr[Qr.length - 1],
            Sr = Qr[Qr.length - 2];
          Qr.length -= 2;
          const Zr = "&&" == Wr ? new pr : new Er;
          "string" === typeof rr && (rr = rr.replace(tr, "defined($1)")), "string" === typeof Sr && (Sr = Sr.replace(tr, "defined($1)")), Zr.leftOperand = "string" === typeof Sr ? vr(Sr) : Sr, Zr.rightOperand = "string" === typeof rr ? vr(rr) : rr, Qr.push(Zr)
        }
        let Zr = Qr[Qr.length - 1];
        return "string" === typeof Zr && (Zr = Zr.replace(tr, "defined($1)")), "string" === typeof Zr ? vr(Zr) : Zr
      }(Wr), Qr
    }

    function Lr(rr, Sr, Qr, Wr) {
      let ar;
      for (; lr(rr, Qr, Wr);) {
        ar = rr.currentLine;
        const jr = ar.substring(0, 5).toLowerCase();
        if ("#else" === jr) {
          const Qr = new Zr;
          return Sr.children.push(Qr), void lr(rr, Qr, Wr)
        }
        if ("#elif" === jr) {
          const rr = Or(ar, 5);
          Sr.children.push(rr), Qr = rr
        }
      }
    }

    function lr(rr, Sr, Qr) {
      for (; rr.canRead;) {
        rr.lineIndex++;
        const Wr = rr.currentLine;
        if (Wr.indexOf("#") >= 0) {
          const Zr = Kr.exec(Wr);
          if (Zr && Zr.length) {
            switch (Zr[0]) {
              case "#ifdef": {
                const Zr = new ar;
                Sr.children.push(Zr);
                const jr = Or(Wr, 6);
                Zr.children.push(jr), Lr(rr, Zr, jr, Qr);
                break
              }
              case "#else":
              case "#elif":
                return !0;
              case "#endif":
                return !1;
              case "#ifndef": {
                const Zr = new ar;
                Sr.children.push(Zr);
                const jr = Or(Wr, 7);
                Zr.children.push(jr), Lr(rr, Zr, jr, Qr);
                break
              }
              case "#if": {
                const Zr = new ar,
                  jr = Or(Wr, 3);
                Sr.children.push(Zr), Zr.children.push(jr), Lr(rr, Zr, jr, Qr);
                break
              }
            }
            continue
          }
        }
        const jr = new Zr;
        if (jr.line = Wr, Sr.children.push(jr), "#" === Wr[0] && "d" === Wr[1]) {
          const rr = Wr.replace(";", "").split(" ");
          jr.additionalDefineKey = rr[1], 3 === rr.length && (jr.additionalDefineValue = rr[2])
        }
      }
      return !1
    }

    function Xr(rr, Sr, Qr, ar) {
      const jr = new Zr,
        Ir = new Wr;
      return Ir.lineIndex = -1, Ir.lines = rr.split("\n"), lr(Ir, jr, ar), jr.process(Sr, Qr, ar)
    }

    function Pr(rr, Sr) {
      const Qr = rr.defines,
        Zr = {};
      for (const Wr of Qr) {
        const rr = Wr.replace("#define", "").replace(";", "").trim().split(" ");
        Zr[rr[0]] = rr.length > 1 ? rr[1] : ""
      }
      return 0 === rr.processor?.shaderLanguage && (Zr.GL_ES = "true"), Zr.__VERSION__ = rr.version, Zr[rr.platformName] = "true", (0, Nr.i)(Zr, Sr?.isNDCHalfZRange, Sr?.JZr, Sr?.useExactSrgbConversions), Zr
    }

    function Hr(rr, Sr, Qr) {
      let Zr;
      for (er.length = 0; null !== (Zr = hr.exec(rr));) er.push(Zr);
      let Wr = [rr],
        ar = !1;
      for (const Ir of er) {
        let rr = Ir[1];
        if (-1 !== rr.indexOf("__decl__") && (rr = rr.replace(zr, ""), Sr.supportsUniformBuffers && (rr = rr.replace("Vertex", "Ubo").replace("Fragment", "Ubo")), rr += "Declaration"), !Sr.includesShadersStore[rr]) {
          const Zr = Sr.shadersRepository + "ShadersInclude/" + rr + ".fx";
          return void qr.loadFile(Zr, (Zr => {
            Sr.includesShadersStore[rr] = Zr, Hr(Wr.join(""), Sr, Qr)
          }))
        } {
          let Qr = Sr.includesShadersStore[rr];
          if (Ir[2]) {
            const rr = Ir[3].split(",");
            for (let Sr = 0; Sr < rr.length; Sr += 2) {
              const Zr = new RegExp(rr[Sr], "g"),
                Wr = rr[Sr + 1];
              Qr = Qr.replace(Zr, Wr)
            }
          }
          if (Ir[4]) {
            const rr = Ir[5];
            if (-1 !== rr.indexOf("..")) {
              const Zr = rr.split(".."),
                Wr = parseInt(Zr[0]);
              let ar = parseInt(Zr[1]),
                jr = Qr.slice(0);
              Qr = "", isNaN(ar) && (ar = Sr.indexParameters[Zr[1]]);
              for (let rr = Wr; rr < ar; rr++) Sr.supportsUniformBuffers || (jr = jr.replace(Yr, ((rr, Sr) => Sr + "{X}"))), Qr += jr.replace(nr, rr.toString()) + "\n"
            } else Sr.supportsUniformBuffers || (Qr = Qr.replace(Yr, ((rr, Sr) => Sr + "{X}"))), Qr = Qr.replace(nr, rr)
          }
          const Zr = [];
          for (const rr of Wr) {
            const Sr = rr.split(Ir[0]);
            for (let rr = 0; rr < Sr.length - 1; rr++) Zr.push(Sr[rr]), Zr.push(Qr);
            Zr.push(Sr[Sr.length - 1])
          }
          Wr = Zr, ar = ar || Qr.indexOf("#include<") >= 0 || Qr.indexOf("#include <") >= 0
        }
      }
      er.length = 0;
      const jr = Wr.join("");
      ar ? Hr(jr.toString(), Sr, Qr) : Qr(jr)
    }
    const qr = {
      loadFile: (rr, Sr, Qr, Zr, Wr, ar) => {
        throw (0, mr.l)("FileTools")
      }
    }
  },
  41764: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      b: () => Wr,
      f: () => ar,
      i: () => Ir,
      k: () => jr,
      m: () => fr
    });
    var Zr = Qr(41769);
    const Wr = {};

    function ar(rr, Sr) {
      return (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "") + (Sr ? Sr + "\n" : "") + rr
    }

    function jr(rr, Sr, Qr, ar, jr, Ir, fr) {
      const Er = fr || Wr.loadFile;
      if (!Er) throw (0, Zr.l)("FileTools");
      return Er(rr, Sr, Qr, ar, jr, Ir)
    }

    function Ir(rr, Sr, Qr, Zr) {
      if (rr) return Sr ? rr.IS_NDC_HALF_ZRANGE = "" : delete rr.IS_NDC_HALF_ZRANGE, Qr ? rr.USE_REVERSE_DEPTHBUFFER = "" : delete rr.USE_REVERSE_DEPTHBUFFER, void(Zr ? rr.USE_EXACT_SRGB_CONVERSIONS = "" : delete rr.USE_EXACT_SRGB_CONVERSIONS);
      {
        let rr = "";
        return Sr && (rr += "#define IS_NDC_HALF_ZRANGE"), Qr && (rr && (rr += "\n"), rr += "#define USE_REVERSE_DEPTHBUFFER"), Zr && (rr && (rr += "\n"), rr += "#define USE_EXACT_SRGB_CONVERSIONS"), rr
      }
    }

    function fr(rr, Sr) {
      let Qr = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        Zr = arguments.length > 3 ? arguments[3] : void 0;
      switch (rr) {
        case 3: {
          const rr = new Int8Array(Sr);
          return Zr && rr.set(new Int8Array(Zr)), rr
        }
        case 0: {
          const rr = new Uint8Array(Sr);
          return Zr && rr.set(new Uint8Array(Zr)), rr
        }
        case 4: {
          const rr = "number" !== typeof Sr ? new Int16Array(Sr) : new Int16Array(Qr ? Sr / 2 : Sr);
          return Zr && rr.set(new Int16Array(Zr)), rr
        }
        case 5:
        case 8:
        case 9:
        case 10:
        case 2: {
          const rr = "number" !== typeof Sr ? new Uint16Array(Sr) : new Uint16Array(Qr ? Sr / 2 : Sr);
          return Zr && rr.set(new Uint16Array(Zr)), rr
        }
        case 6: {
          const rr = "number" !== typeof Sr ? new Int32Array(Sr) : new Int32Array(Qr ? Sr / 4 : Sr);
          return Zr && rr.set(new Int32Array(Zr)), rr
        }
        case 7:
        case 11:
        case 12:
        case 13:
        case 14:
        case 15: {
          const rr = "number" !== typeof Sr ? new Uint32Array(Sr) : new Uint32Array(Qr ? Sr / 4 : Sr);
          return Zr && rr.set(new Uint32Array(Zr)), rr
        }
        case 1: {
          const rr = "number" !== typeof Sr ? new Float32Array(Sr) : new Float32Array(Qr ? Sr / 4 : Sr);
          return Zr && rr.set(new Float32Array(Zr)), rr
        }
      }
      const Wr = new Uint8Array(Sr);
      return Zr && Wr.set(new Uint8Array(Zr)), Wr
    }
  },
  41769: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      c: () => Er,
      g: () => pr,
      h: () => fr,
      l: () => Wr
    });
    const Zr = {};

    function Wr(rr) {
      if (!(arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) || !Zr[rr]) return Zr[rr] = !0, `${rr} needs to be imported before as it contains a side-effect required by your code.`
    }
    const ar = {};
    let jr = !1,
      Ir = 0;

    function fr(rr, Sr) {
      let Qr = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      const Zr = function() {
        if ((Qr || jr) && 0 === Ir) {
          const Qr = `${rr}.${Sr}`;
          ar[Qr] || (ar[Qr] = !0, console.warn(`[Babylon.js] ${Qr}() requires a side-effect import. See: https://doc.babylonjs.com/setup/treeshaking`))
        }
      };
      return Zr.__isSideEffectStub = !0, Zr
    }

    function Er(rr) {
      return !!rr && !rr.__isSideEffectStub
    }

    function pr(rr, Sr) {
      return {
        get() {},
        set(rr) {
          Object.defineProperty(this, Sr, {
            value: rr,
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
  41749: (rr, Sr, Qr) => {
    function Zr() {
      return "undefined" !== typeof window
    }

    function Wr() {
      return "undefined" !== typeof navigator
    }

    function ar() {
      return "undefined" !== typeof document
    }

    function jr(rr) {
      let Sr = "",
        Qr = rr.firstChild;
      for (; Qr;) 3 === Qr.nodeType && (Sr += Qr.textContent), Qr = Qr.nextSibling;
      return Sr
    }
    Qr.d(Sr, {
      e: () => jr,
      f: () => ar,
      j: () => Wr,
      m: () => Zr
    })
  },
  41910: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => Zr,
      e: () => Wr,
      i: () => ar
    });
    class Zr extends Error {}
    Zr._setPrototypeOf = Object.setPrototypeOf || ((rr, Sr) => (rr.__proto__ = Sr, rr));
    const Wr = {
      MeshInvalidPositionsError: 0,
      UnsupportedTextureError: 1e3,
      GLTFLoaderUnexpectedMagicError: 2e3,
      SceneLoaderError: 3e3,
      LoadFileError: 4e3,
      RequestFileError: 4001,
      ReadFileError: 4002
    };
    class ar extends Zr {
      constructor(rr, Sr, Qr) {
        super(rr), this.errorCode = Sr, this.innerError = Qr, this.name = "RuntimeError", Zr._setPrototypeOf(this, ar.prototype)
      }
    }
  },
  41898: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      b: () => Pr,
      e: () => nr,
      g: () => Or,
      j: () => lr,
      n: () => Tr,
      q: () => yr,
      t: () => Br,
      x: () => Cr,
      A: () => vr,
      E: () => er
    });
    var Zr = Qr(41906),
      Wr = Qr(41749),
      ar = Qr(38595);
    class jr {}
    jr.FilesToLoad = {};
    var Ir = Qr(41910),
      fr = Qr(41917),
      Er = Qr(38587),
      pr = Qr(41764),
      xr = Qr(41775),
      mr = Qr(40246),
      Nr = Qr(41781),
      Ur = Qr(41919);
    const tr = new RegExp(/^data:([^,]+\/[^,]+)?;base64,/i);
    class hr extends Ir.i {
      constructor(rr, Sr) {
        super(rr, Ir.e.LoadFileError), this.name = "LoadFileError", Ir.d._setPrototypeOf(this, hr.prototype), Sr instanceof Zr.b ? this.request = Sr : this.file = Sr
      }
    }
    class zr extends Ir.i {
      constructor(rr, Sr) {
        super(rr, Ir.e.RequestFileError), this.request = Sr, this.name = "RequestFileError", Ir.d._setPrototypeOf(this, zr.prototype)
      }
    }
    class Yr extends Ir.i {
      constructor(rr, Sr) {
        super(rr, Ir.e.ReadFileError), this.file = Sr, this.name = "ReadFileError", Ir.d._setPrototypeOf(this, Yr.prototype)
      }
    }
    const nr = {
        DefaultRetryStrategy: class {
          static ExponentialBackoff() {
            let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 3,
              Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 500;
            return (Qr, Zr, Wr) => 0 !== Zr.status || Wr >= rr || -1 !== Qr.indexOf("file:") ? -1 : Math.pow(2, Wr) * Sr
          }
        }.ExponentialBackoff(),
        BaseUrl: "",
        CorsBehavior: "anonymous",
        PreprocessUrl: rr => rr,
        ScriptBaseUrl: "",
        ScriptPreprocessUrl: rr => rr,
        CleanUrl: rr => rr = rr.replace(/#/gm, "%23")
      },
      er = (rr, Sr) => {
        if ((!rr || 0 !== rr.indexOf("data:")) && nr.CorsBehavior)
          if ("string" === typeof nr.CorsBehavior || nr.CorsBehavior instanceof String) Sr.crossOrigin = nr.CorsBehavior;
          else {
            const Qr = nr.CorsBehavior(rr);
            Qr && (Sr.crossOrigin = Qr)
          }
      },
      Kr = {
        getRequiredSize: null
      },
      yr = function(rr, Sr, Qr, Wr) {
        let ar, Ir = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "",
          pr = arguments.length > 5 ? arguments[5] : void 0,
          xr = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : Er.b.LastCreatedEngine;
        if ("undefined" === typeof HTMLImageElement && !xr?._features.forceBitmapOverHTMLImageElement) return Qr("LoadImage is only supported in web or BabylonNative environments."), null;
        if (xr?._features.forceBitmapOverHTMLImageElement && "string" !== typeof rr && "undefined" !== typeof Blob) {
          let Zr;
          if (rr instanceof Blob) Zr = rr;
          else {
            const Sr = rr instanceof ArrayBuffer ? rr : (0, Ur.h)(rr);
            Zr = new Blob([Sr], {
              type: Ir
            })
          }
          return xr.createImageBitmap(Zr, {
            premultiplyAlpha: "none",
            colorSpaceConversion: "none",
            ...pr
          }).then(Sr).catch((Sr => {
            Qr && Qr("Error while trying to load image: " + rr, Sr)
          })), null
        }
        let mr = !1;
        if (rr instanceof ArrayBuffer || ArrayBuffer.isView(rr))
          if ("undefined" !== typeof Blob && "undefined" !== typeof URL) {
            let Sr;
            Sr = rr instanceof ArrayBuffer ? rr : (0, Ur.h)(rr), ar = URL.createObjectURL(new Blob([Sr], {
              type: Ir
            })), mr = !0
          } else ar = `data:${Ir};base64,` + (0, fr.d)(rr);
        else rr instanceof Blob ? (ar = URL.createObjectURL(rr), mr = !0) : (ar = nr.CleanUrl(rr), ar = nr.PreprocessUrl(ar));
        const Nr = Sr => {
          if (Qr) {
            const Zr = ar || rr.toString();
            Qr(`Error while trying to load image: ${0===Zr.indexOf("http")||Zr.length<=128?Zr:Zr.slice(0,128)+"..."}`, Sr)
          }
        };
        if (xr?._features.forceBitmapOverHTMLImageElement) return Tr(ar, (Zr => {
          xr.createImageBitmap(new Blob([Zr], {
            type: Ir
          }), {
            premultiplyAlpha: "none",
            colorSpaceConversion: "none",
            ...pr
          }).then((rr => {
            Sr(rr), mr && URL.revokeObjectURL(ar)
          })).catch((Sr => {
            Qr && Qr("Error while trying to load image: " + rr, Sr)
          }))
        }), void 0, Wr || void 0, !0, ((rr, Sr) => {
          Nr(Sr)
        })), null;
        const tr = new Image;
        if (Kr.getRequiredSize) {
          const Sr = Kr.getRequiredSize(rr);
          Sr.width && (tr.width = Sr.width), Sr.height && (tr.height = Sr.height)
        }
        er(ar, tr);
        const hr = [],
          zr = () => {
            for (const rr of hr) rr.target.removeEventListener(rr.name, rr.handler);
            hr.length = 0
          };
        hr.push({
          target: tr,
          name: "load",
          handler: () => {
            zr(), Sr(tr), mr && tr.src && URL.revokeObjectURL(tr.src)
          }
        }), hr.push({
          target: tr,
          name: "error",
          handler: rr => {
            zr(), Nr(rr), mr && tr.src && URL.revokeObjectURL(tr.src)
          }
        }), hr.push({
          target: document,
          name: "securitypolicyviolation",
          handler: rr => {
            if (rr.blockedURI !== tr.src || "jx" === rr.disposition) return;
            zr();
            const Sr = new Error(`CSP violation of policy ${rr.effectiveDirective} ${rr.blockedURI}. Current policy is ${rr.originalPolicy}`);
            Er.b.UseFallbackTexture = !1, Nr(Sr), mr && tr.src && URL.revokeObjectURL(tr.src), tr.src = ""
          }
        }), (() => {
          for (const rr of hr) rr.target.addEventListener(rr.name, rr.handler)
        })();
        const Yr = "blob:" === ar.substring(0, 5),
          yr = "data:" === ar.substring(0, 5),
          Br = () => {
            Yr || yr || !Zr.b.IsCustomRequestAvailable ? tr.src = ar : Tr(ar, ((rr, Sr, Qr) => {
              const Zr = new Blob([rr], {
                  type: !Ir && Qr ? Qr : Ir
                }),
                Wr = URL.createObjectURL(Zr);
              mr = !0, tr.src = Wr
            }), void 0, Wr || void 0, !0, ((rr, Sr) => {
              Nr(Sr)
            }))
          },
          vr = () => {
            Wr && Wr.loadImage(ar, tr)
          };
        if (!Yr && !yr && Wr && Wr.enableTexturesOffline) Wr.open(vr, Br);
        else {
          if (-1 !== ar.indexOf("file:")) {
            const rr = decodeURIComponent(ar.substring(5).toLowerCase());
            if (jr.FilesToLoad[rr] && "undefined" !== typeof URL) {
              try {
                let Sr;
                try {
                  Sr = URL.createObjectURL(jr.FilesToLoad[rr])
                } catch (Or) {
                  Sr = URL.createObjectURL(jr.FilesToLoad[rr])
                }
                tr.src = Sr, mr = !0
              } catch (Lr) {
                tr.src = ""
              }
              return tr
            }
          }
          Br()
        }
        return tr
      },
      Br = (rr, Sr, Qr, Zr, Wr) => {
        const jr = new FileReader,
          Ir = {
            onCompleteObservable: new ar.d,
            abort: () => jr.abort()
          };
        return jr.onloadend = () => Ir.onCompleteObservable.notifyObservers(Ir), Wr && (jr.onerror = () => {
          Wr(new Yr(`Unable to read ${rr.name}`, rr))
        }), jr.onload = rr => {
          Sr(rr.target.result)
        }, Qr && (jr.onprogress = Qr), Zr ? jr.readAsArrayBuffer(rr) : jr.readAsText(rr), Ir
      },
      Tr = (rr, Sr, Qr, Zr, Wr, fr, Er) => {
        if (rr.name) return Br(rr, Sr, Qr, Wr, fr ? rr => {
          fr(void 0, rr)
        } : void 0);
        const pr = rr;
        if (-1 !== pr.indexOf("file:")) {
          let rr = decodeURIComponent(pr.substring(5).toLowerCase());
          0 === rr.indexOf("./") && (rr = rr.substring(2));
          const Zr = jr.FilesToLoad[rr];
          if (Zr) return Br(Zr, Sr, Qr, Wr, fr ? rr => fr(void 0, new hr(rr.message, rr.file)) : void 0)
        }
        const {
          match: xr,
          type: Ur
        } = Xr(pr);
        if (xr) {
          const rr = {
            onCompleteObservable: new ar.d,
            abort: () => () => {}
          };
          try {
            const rr = Wr ? Pr(pr) : Hr(pr);
            Sr(rr, void 0, Ur)
          } catch (Ir) {
            fr ? fr(void 0, Ir) : mr.c.Error(Ir.message || "Failed to parse the Data URL")
          }
          return Nr.d.SetImmediate((() => {
            rr.onCompleteObservable.notifyObservers(rr)
          })), rr
        }
        return vr(pr, ((rr, Qr) => {
          Sr(rr, Qr?.responseURL, Qr?.getResponseHeader("content-type"))
        }), Qr, Zr, Wr, fr ? rr => {
          fr(rr.request, new hr(rr.message, rr.request))
        } : void 0, Er)
      },
      vr = (rr, Sr, Qr, jr, Ir, fr, pr) => {
        null !== jr && (jr ?? (jr = Er.b.LastCreatedScene?.offlineProvider)), rr = nr.CleanUrl(rr), rr = nr.PreprocessUrl(rr);
        const xr = nr.BaseUrl + rr;
        let Nr = !1;
        const Ur = {
            onCompleteObservable: new ar.d,
            abort: () => Nr = !0
          },
          tr = () => {
            let rr, ar = new Zr.b,
              jr = null;
            const Er = () => {
              ar && (Qr && ar.removeEventListener("progress", Qr), rr && ar.removeEventListener("readystatechange", rr), ar.removeEventListener("loadend", tr))
            };
            let tr = () => {
              Er(), Ur.onCompleteObservable.notifyObservers(Ur), Ur.onCompleteObservable.clear(), Qr = void 0, rr = null, tr = null, fr = void 0, pr = void 0, Sr = void 0
            };
            Ur.abort = () => {
              Nr = !0, tr && tr(), ar && ar.readyState !== (XMLHttpRequest.DONE || 4) && ar.abort(), null !== jr && (clearTimeout(jr), jr = null), ar = null
            };
            const hr = rr => {
                const Sr = rr.message || "Unknown error";
                fr && ar ? fr(new zr(Sr, ar)) : mr.c.Error(Sr)
              },
              Yr = mr => {
                if (ar) {
                  if (ar.open("GET", xr), pr) try {
                    pr(ar)
                  } catch (Ur) {
                    return void hr(Ur)
                  }
                  Ir && (ar.responseType = "arraybuffer"), Qr && ar.addEventListener("progress", Qr), tr && ar.addEventListener("loadend", tr), rr = () => {
                    if (!Nr && ar && ar.readyState === (XMLHttpRequest.DONE || 4)) {
                      if (rr && ar.removeEventListener("readystatechange", rr), ar.status >= 200 && ar.status < 300 || 0 === ar.status && (!(0, Wr.m)() || Lr())) {
                        const rr = Ir ? ar.response : ar.responseText;
                        if (null !== rr) {
                          try {
                            Sr && Sr(rr, ar)
                          } catch (Ur) {
                            hr(Ur)
                          }
                          return
                        }
                      }
                      const Qr = nr.DefaultRetryStrategy;
                      if (Qr) {
                        const rr = Qr(xr, ar, mr);
                        if (-1 !== rr) return Er(), ar = new Zr.b, void(jr = setTimeout((() => Yr(mr + 1)), rr))
                      }
                      const pr = new zr("Error status: " + ar.status + " " + ar.statusText + " - Unable to load " + xr, ar);
                      fr && fr(pr)
                    }
                  }, ar.addEventListener("readystatechange", rr), ar.send()
                }
              };
            Yr(0)
          };
        if (jr && jr.enableSceneOffline && !rr.startsWith("blob:")) {
          const Zr = rr => {
              rr && rr.status > 400 ? fr && fr(rr) : tr()
            },
            Wr = () => {
              jr && jr.loadFile(nr.BaseUrl + rr, (rr => {
                !Nr && Sr && Sr(rr), Ur.onCompleteObservable.notifyObservers(Ur)
              }), Qr ? rr => {
                !Nr && Qr && Qr(rr)
              } : void 0, Zr, Ir)
            };
          jr.open(Wr, Zr)
        } else tr();
        return Ur
      },
      Or = rr => {
        const {
          match: Sr,
          type: Qr
        } = Xr(rr);
        if (Sr) return Qr || void 0;
        const Zr = rr.lastIndexOf(".");
        switch (rr.substring(Zr + 1).toLowerCase()) {
          case "glb":
            return "model/gltf-binary";
          case "bin":
            return "application/octet-stream";
          case "bR":
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
      Lr = () => "undefined" !== typeof location && "file:" === location.protocol,
      lr = rr => tr.test(rr),
      Xr = rr => {
        const Sr = tr.exec(rr);
        if (null === Sr || 0 === Sr.length) return {
          match: !1,
          type: ""
        };
        return {
          match: !0,
          type: Sr[0].replace("data:", "").replace(";base64,", "")
        }
      };

    function Pr(rr) {
      return (0, fr.b)(rr.split(",")[1])
    }
    const Hr = rr => (0, fr.c)(rr.split(",")[1]);
    let qr;
    const Rr = (rr, Sr, Qr, Zr, Wr, ar, jr, Ir, fr, Er) => {
      qr = {
        DecodeBase64UrlToBinary: rr,
        DecodeBase64UrlToString: Sr,
        DefaultRetryStrategy: Qr.DefaultRetryStrategy,
        BaseUrl: Qr.BaseUrl,
        CorsBehavior: Qr.CorsBehavior,
        PreprocessUrl: Qr.PreprocessUrl,
        IsBase64DataUrl: Zr,
        IsFileURL: Wr,
        LoadFile: ar,
        LoadImage: jr,
        ReadFile: Ir,
        RequestFile: fr,
        SetCorsBehavior: Er
      }, Object.defineProperty(qr, "DefaultRetryStrategy", {
        get: function() {
          return Qr.DefaultRetryStrategy
        },
        set: function(rr) {
          Qr.DefaultRetryStrategy = rr
        }
      }), Object.defineProperty(qr, "BaseUrl", {
        get: function() {
          return Qr.BaseUrl
        },
        set: function(rr) {
          Qr.BaseUrl = rr
        }
      }), Object.defineProperty(qr, "PreprocessUrl", {
        get: function() {
          return Qr.PreprocessUrl
        },
        set: function(rr) {
          Qr.PreprocessUrl = rr
        }
      }), Object.defineProperty(qr, "CorsBehavior", {
        get: function() {
          return Qr.CorsBehavior
        },
        set: function(rr) {
          Qr.CorsBehavior = rr
        }
      })
    };
    let gr = !1;

    function Cr() {
      gr || (gr = !0, Rr(Pr, Hr, nr, lr, Lr, Tr, yr, Br, vr, er), pr.b.loadFile = Tr, pr.b.loadImage = yr, xr.k.loadFile = Tr)
    }
  },
  41922: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      c: () => Ir,
      d: () => ar,
      g: () => jr
    });
    let Zr = null;

    function Wr() {
      if (Zr) return Zr;
      const rr = new ArrayBuffer(4),
        Sr = new Float32Array(rr),
        Qr = new Uint32Array(rr),
        Wr = new Uint32Array(512),
        ar = new Uint32Array(512);
      for (let Zr = 0; Zr < 256; ++Zr) {
        const rr = Zr - 127;
        rr < -24 ? (Wr[Zr] = 0, Wr[256 | Zr] = 32768, ar[Zr] = 24, ar[256 | Zr] = 24) : rr < -14 ? (Wr[Zr] = 1024 >> -rr - 14, Wr[256 | Zr] = 1024 >> -rr - 14 | 32768, ar[Zr] = -rr - 1, ar[256 | Zr] = -rr - 1) : rr <= 15 ? (Wr[Zr] = rr + 15 << 10, Wr[256 | Zr] = rr + 15 << 10 | 32768, ar[Zr] = 13, ar[256 | Zr] = 13) : rr < 128 ? (Wr[Zr] = 31744, Wr[256 | Zr] = 64512, ar[Zr] = 24, ar[256 | Zr] = 24) : (Wr[Zr] = 31744, Wr[256 | Zr] = 64512, ar[Zr] = 13, ar[256 | Zr] = 13)
      }
      const jr = new Uint32Array(2048),
        Ir = new Uint32Array(64),
        fr = new Uint32Array(64);
      for (let Zr = 1; Zr < 1024; ++Zr) {
        let rr = Zr << 13,
          Sr = 0;
        for (; 0 === (8388608 & rr);) rr <<= 1, Sr -= 8388608;
        rr &= -8388609, Sr += 947912704, jr[Zr] = rr | Sr
      }
      for (let Zr = 1024; Zr < 2048; ++Zr) jr[Zr] = 939524096 + (Zr - 1024 << 13);
      for (let Zr = 1; Zr < 31; ++Zr) Ir[Zr] = Zr << 23;
      Ir[31] = 1199570944, Ir[32] = 2147483648;
      for (let Zr = 33; Zr < 63; ++Zr) Ir[Zr] = 2147483648 + (Zr - 32 << 23);
      Ir[63] = 3347054592;
      for (let Zr = 1; Zr < 64; ++Zr) 32 !== Zr && (fr[Zr] = 1024);
      return Zr = {
        floatView: Sr,
        uint32View: Qr,
        baseTable: Wr,
        shiftTable: ar,
        mantissaTable: jr,
        exponentTable: Ir,
        offsetTable: fr
      }, Zr
    }
    const ar = 65504;

    function jr(rr) {
      const Sr = Wr();
      Sr.floatView[0] = rr;
      const Qr = Sr.uint32View[0],
        Zr = Qr >> 23 & 511;
      return Sr.baseTable[Zr] + ((8388607 & Qr) >> Sr.shiftTable[Zr])
    }

    function Ir(rr) {
      const Sr = Wr();
      return Sr.uint32View[0] = Sr.mantissaTable[Sr.offsetTable[rr >> 10] + (1023 & rr)] + Sr.exponentTable[rr >> 10], Sr.floatView[0]
    }
  },
  41917: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      b: () => ar,
      c: () => Wr,
      d: () => Zr
    });
    const Zr = rr => {
        const Sr = ArrayBuffer.isView(rr) ? new Uint8Array(rr.buffer, rr.byteOffset, rr.byteLength) : new Uint8Array(rr);
        return "function" === typeof Sr.toBase64 ? Sr.toBase64() : function(rr) {
          const Sr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
          let Qr, Zr, Wr, ar, jr, Ir, fr, Er = "",
            pr = 0;
          for (; pr < rr.length;) Qr = rr[pr++], Zr = pr < rr.length ? rr[pr++] : Number.NaN, Wr = pr < rr.length ? rr[pr++] : Number.NaN, ar = Qr >> 2, jr = (3 & Qr) << 4 | Zr >> 4, Ir = (15 & Zr) << 2 | Wr >> 6, fr = 63 & Wr, isNaN(Zr) ? Ir = fr = 64 : isNaN(Wr) && (fr = 64), Er += Sr.charAt(ar) + Sr.charAt(jr) + Sr.charAt(Ir) + Sr.charAt(fr);
          return Er
        }(Sr)
      },
      Wr = rr => atob(rr),
      ar = rr => "function" === typeof Uint8Array.fromBase64 ? Uint8Array.fromBase64(rr).buffer : function(rr) {
        const Sr = Wr(rr),
          Qr = Sr.length,
          Zr = new Uint8Array(new ArrayBuffer(Qr));
        for (let Wr = 0; Wr < Qr; Wr++) Zr[Wr] = Sr.charCodeAt(Wr);
        return Zr.buffer
      }(rr)
  },
  41781: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => Wr,
      f: () => jr
    });
    let Zr = [];
    class Wr {
      static SetImmediate(rr) {
        0 === Zr.length && setTimeout((() => {
          const rr = Zr;
          Zr = [];
          for (const Sr of rr) Sr()
        }), 1), Zr.push(rr)
      }
    }

    function ar(rr, Sr, Qr) {
      try {
        if (rr()) return Sr(), !0
      } catch (Zr) {
        return Qr?.(Zr), !0
      }
      return !1
    }
    const jr = function(rr, Sr, Qr) {
      let Zr = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 16,
        Wr = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3e4,
        jr = arguments.length > 6 ? arguments[6] : void 0;
      if ((!(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5]) && ar(rr, Sr, Qr)) return null;
      const Ir = setInterval((() => {
        ar(rr, Sr, Qr) ? clearInterval(Ir) : (Wr -= Zr, Wr < 0 && (clearInterval(Ir), Qr?.(new Error("Operation timed out after maximum retries. " + (jr || "")), !0)))
      }), Zr);
      return () => clearInterval(Ir)
    }
  },
  41906: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      b: () => Zr
    });
    class Zr {
      constructor() {
        this._xhr = "undefined" !== typeof _native && _native.XMLHttpRequest ? new _native.XMLHttpRequest : new XMLHttpRequest, this._requestURL = ""
      }
      static get IsCustomRequestAvailable() {
        return Object.keys(Zr.CustomRequestHeaders).length > 0 || Zr.CustomRequestModifiers.length > 0
      }
      static _CleanUrl(rr) {
        return rr = (rr = rr.replace("file:http:", "http:")).replace("file:https:", "https:")
      }
      static _ShouldSkipRequestModifications(rr) {
        return Zr.SkipRequestModificationForBabylonCDN && (rr.includes("preview.babylonjs.com") || rr.includes("cdn.babylonjs.com"))
      }
      static _CollectCustomizations(rr) {
        const Sr = {
          ...arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
        };
        if (Zr._ShouldSkipRequestModifications(rr)) return {
          url: rr,
          headers: Sr
        };
        for (const Wr in Zr.CustomRequestHeaders) {
          const rr = Zr.CustomRequestHeaders[Wr];
          rr && (Sr[Wr] = rr)
        }
        const Qr = {
          setRequestHeader: (rr, Qr) => {
            Sr[rr] = Qr
          }
        };
        for (const Wr of Zr.CustomRequestModifiers) {
          if (Zr._ShouldSkipRequestModifications(rr)) break;
          const Sr = Wr(Qr, rr);
          "string" === typeof Sr && (rr = Sr)
        }
        return {
          url: rr,
          headers: Sr
        }
      }
      static async FetchAsync(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const Qr = Sr.method ?? "GET";
        if ("undefined" !== typeof fetch) {
          const {
            url: Wr,
            headers: ar
          } = Zr._CollectCustomizations(Zr._CleanUrl(rr), Sr.headers ?? {});
          return await fetch(Wr, {
            method: Qr,
            headers: ar,
            body: Sr.body ?? void 0
          })
        }
        return await new Promise(((Wr, ar) => {
          const jr = new Zr;
          jr.responseType = "arraybuffer", jr.addEventListener("readystatechange", (() => {
            if (4 === jr.readyState)
              if (jr.status >= 200 && jr.status < 300) {
                const rr = "undefined" !== typeof Headers ? new Headers : void 0,
                  Sr = jr.getResponseHeader("Content-Type");
                Sr && rr && rr.set("Content-Type", Sr), "undefined" !== typeof Response ? Wr(new Response(jr.response, {
                  status: jr.status,
                  statusText: jr.statusText,
                  headers: rr
                })) : Wr({
                  ok: !0,
                  status: jr.status,
                  statusText: jr.statusText,
                  headers: {
                    get: rr => jr.getResponseHeader(rr)
                  },
                  arrayBuffer: async () => await Promise.resolve(jr.response)
                })
              } else ar(new Error(`HTTP ${jr.status} loading '${jr.requestURL}': ${jr.statusText}`))
          })), jr.open(Qr, rr, Sr.headers), jr.send(Sr.body ?? null)
        }))
      }
      get requestURL() {
        return this._requestURL
      }
      get onprogress() {
        return this._xhr.onprogress
      }
      set onprogress(rr) {
        this._xhr.onprogress = rr
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
      set responseType(rr) {
        this._xhr.responseType = rr
      }
      get timeout() {
        return this._xhr.timeout
      }
      set timeout(rr) {
        this._xhr.timeout = rr
      }
      addEventListener(rr, Sr, Qr) {
        this._xhr.addEventListener(rr, Sr, Qr)
      }
      removeEventListener(rr, Sr, Qr) {
        this._xhr.removeEventListener(rr, Sr, Qr)
      }
      abort() {
        this._xhr.abort()
      }
      send(rr) {
        this._xhr.send(rr)
      }
      open(rr, Sr, Qr) {
        const {
          url: Wr,
          headers: ar
        } = Zr._CollectCustomizations(Sr, Qr);
        this._requestURL = Zr._CleanUrl(Wr), this._xhr.open(rr, this._requestURL, !0);
        for (const Zr in ar) this._xhr.setRequestHeader(Zr, ar[Zr])
      }
      setRequestHeader(rr, Sr) {
        this._xhr.setRequestHeader(rr, Sr)
      }
      getResponseHeader(rr) {
        return this._xhr.getResponseHeader(rr)
      }
    }
    Zr.CustomRequestHeaders = {}, Zr.CustomRequestModifiers = new Array, Zr.SkipRequestModificationForBabylonCDN = !0
  }
};
Object.freeze(modules);
for (const rr in modules) Object.freeze(modules[rr]);