export const id = 244;
export const ids = [244];
export const modules = {
  39463: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      b: () => Jk,
      e: () => Vk,
      i: () => wk,
      k: () => Ak,
      l: () => dk,
      n: () => bk,
      p: () => sk
    });
    var Rk = Bk(38320),
      tk = Bk(39465);

    function ak(kk, Fk, Bk, Rk) {
      switch (Fk) {
        case 5120: {
          let Fk = kk.getInt8(Bk);
          return Rk && (Fk = Math.max(Fk / 127, -1)), Fk
        }
        case 5121: {
          let Fk = kk.getUint8(Bk);
          return Rk && (Fk /= 255), Fk
        }
        case 5122: {
          let Fk = kk.getInt16(Bk, !0);
          return Rk && (Fk = Math.max(Fk / 32767, -1)), Fk
        }
        case 5123: {
          let Fk = kk.getUint16(Bk, !0);
          return Rk && (Fk /= 65535), Fk
        }
        case 5131:
          return (0, tk.d)(kk.getUint16(Bk, !0));
        case 5124:
          return kk.getInt32(Bk, !0);
        case 5125:
          return kk.getUint32(Bk, !0);
        case 5126:
          return kk.getFloat32(Bk, !0);
        default:
          throw new Error(`Invalid component type ${Fk}`)
      }
    }

    function Xk(kk, Fk, Bk, Rk, ak) {
      switch (Fk) {
        case 5120:
          Rk && (ak = Math.round(127 * ak)), kk.setInt8(Bk, ak);
          break;
        case 5121:
          Rk && (ak = Math.round(255 * ak)), kk.setUint8(Bk, ak);
          break;
        case 5122:
          Rk && (ak = Math.round(32767 * ak)), kk.setInt16(Bk, ak, !0);
          break;
        case 5123:
          Rk && (ak = Math.round(65535 * ak)), kk.setUint16(Bk, ak, !0);
          break;
        case 5131:
          kk.setUint16(Bk, (0, tk.h)(ak), !0);
          break;
        case 5124:
          kk.setInt32(Bk, ak, !0);
          break;
        case 5125:
          kk.setUint32(Bk, ak, !0);
          break;
        case 5126:
          kk.setFloat32(Bk, ak, !0);
          break;
        default:
          throw new Error(`Invalid component type ${Fk}`)
      }
    }

    function bk(kk) {
      switch (kk) {
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
          throw new Error(`Invalid type '${kk}'`)
      }
    }

    function wk(kk, Fk, Bk, Rk, tk, wk, dk, sk) {
      const Vk = new Array(Rk),
        Jk = new Array(Rk);
      if (kk instanceof Array) {
        let tk = Fk / 4;
        const ak = Bk / 4;
        for (let Fk = 0; Fk < wk; Fk += Rk) {
          for (let Fk = 0; Fk < Rk; Fk++) Vk[Fk] = Jk[Fk] = kk[tk + Fk];
          sk(Jk, Fk);
          for (let Fk = 0; Fk < Rk; Fk++) Vk[Fk] !== Jk[Fk] && (kk[tk + Fk] = Jk[Fk]);
          tk += ak
        }
      } else {
        const Ak = ArrayBuffer.isView(kk) ? new DataView(kk.buffer, kk.byteOffset, kk.byteLength) : new DataView(kk),
          ek = bk(tk);
        for (let kk = 0; kk < wk; kk += Rk) {
          for (let kk = 0, Bk = Fk; kk < Rk; kk++, Bk += ek) Vk[kk] = Jk[kk] = ak(Ak, tk, Bk, dk);
          sk(Jk, kk);
          for (let kk = 0, Bk = Fk; kk < Rk; kk++, Bk += ek) Vk[kk] !== Jk[kk] && Xk(Ak, tk, Bk, dk, Jk[kk]);
          Fk += Bk
        }
      }
    }

    function dk(kk, Fk, Bk, tk, ak, Xk, dk, sk) {
      const Vk = Fk * bk(Bk),
        Jk = dk * Fk;
      if (5126 !== Bk || ak !== Vk) {
        const Rk = new Float32Array(Jk);
        return wk(kk, tk, ak, Fk, Bk, Jk, Xk, ((kk, Bk) => {
          for (let tk = 0; tk < Fk; tk++) Rk[Bk + tk] = kk[tk]
        })), Rk
      }
      if (!(kk instanceof Array || kk instanceof Float32Array) || 0 !== tk || kk.length !== Jk) {
        if (kk instanceof Array) {
          const Fk = tk / 4;
          return kk.slice(Fk, Fk + Jk)
        }
        if (ArrayBuffer.isView(kk)) {
          const Fk = kk.byteOffset + tk;
          return 0 !== (3 & Fk) && (Rk.b.Warn("Float array must be aligned to 4-bytes border"), sk = !0), sk ? new Float32Array(kk.buffer.slice(Fk, Fk + Jk * Float32Array.BYTES_PER_ELEMENT)) : new Float32Array(kk.buffer, Fk, Jk)
        }
        return new Float32Array(kk, tk, Jk)
      }
      return sk ? kk.slice() : kk
    }

    function sk(kk, Fk, Bk, tk, ak, Xk, dk) {
      const sk = bk(Bk),
        Vk = function(kk) {
          switch (kk) {
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
              throw new Error(`Invalid component type '${kk}'`)
          }
        }(Bk),
        Jk = Xk * Fk;
      if (Array.isArray(kk)) {
        if (0 !== (3 & tk) || 0 !== (3 & ak)) throw new Error("byteOffset and byteStride must be a multiple of 4 for number[] data.");
        const Rk = tk / 4,
          bk = ak / 4;
        if (Rk + (Xk - 1) * bk + Fk > kk.length) throw new Error("Last accessed index is out of bounds.");
        if (bk < Fk) throw new Error("Data stride cannot be smaller than the component size.");
        if (bk !== Fk) {
          const Rk = new Vk(Jk);
          return wk(kk, tk, ak, Fk, Bk, Jk, !1, ((kk, Bk) => {
            for (let tk = 0; tk < Fk; tk++) Rk[Bk + tk] = kk[tk]
          })), Rk
        }
        return new Vk(kk.slice(Rk, Rk + Jk))
      }
      let Ak, ek = tk;
      ArrayBuffer.isView(kk) ? (Ak = kk.buffer, ek += kk.byteOffset) : Ak = kk;
      if (ek + (Xk - 1) * ak + Fk * sk > Ak.byteLength) throw new Error("Last accessed byte is out of bounds.");
      const yk = Fk * sk;
      if (ak < yk) throw new Error("Byte stride cannot be smaller than the component's byte size.");
      if (ak !== yk) {
        const kk = new Vk(Jk),
          Bk = new Uint8Array(Ak, ek),
          Rk = new Uint8Array(kk.buffer),
          tk = Fk * sk;
        for (let Fk = 0, bk = 0, wk = 0; Fk < Xk; Fk++, bk += ak, wk += tk) Rk.set(Bk.subarray(bk, bk + tk), wk);
        return kk
      }
      return 1 !== sk && 0 !== (ek & sk - 1) && (Rk.b.Warn("Array must be aligned to border of element size. Data will be copied."), dk = !0), dk ? new Vk(Ak.slice(ek, ek + Jk * sk)) : new Vk(Ak, ek, Jk)
    }

    function Vk(kk, Fk, Bk, tk, ak, Xk, dk, sk) {
      const Vk = Fk * bk(Bk),
        Jk = dk * Fk;
      if (sk.length !== Jk) throw new Error("Output length is not valid");
      if (5126 === Bk && ak === Vk)
        if (kk instanceof Array) {
          const Fk = tk / 4;
          sk.set(kk, Fk)
        } else if (ArrayBuffer.isView(kk)) {
        const Fk = kk.byteOffset + tk;
        if (0 !== (3 & Fk)) return Rk.b.Warn("Float array must be aligned to 4-bytes border"), void sk.set(new Float32Array(kk.buffer.slice(Fk, Fk + Jk * Float32Array.BYTES_PER_ELEMENT)));
        const Bk = new Float32Array(kk.buffer, Fk, Jk);
        sk.set(Bk)
      } else {
        const Fk = new Float32Array(kk, tk, Jk);
        sk.set(Fk)
      } else wk(kk, tk, ak, Fk, Bk, Jk, Xk, ((kk, Bk) => {
        for (let Rk = 0; Rk < Fk; Rk++) sk[Bk + Rk] = kk[Rk]
      }))
    }

    function Jk(kk, Fk) {
      let Bk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        Rk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
      if (Array.isArray(kk)) {
        for (let tk = 0; tk < Fk; tk++)
          if (kk[Bk + tk] - Rk > 65535) return !0;
        return !1
      }
      return 4 === kk.BYTES_PER_ELEMENT
    }

    function Ak(kk) {
      const Fk = kk.buffer;
      if (Fk instanceof ArrayBuffer) return kk;
      const Bk = new ArrayBuffer(kk.byteLength);
      return new Uint8Array(Bk).set(new Uint8Array(Fk, kk.byteOffset, kk.byteLength)), Bk
    }
  },
  39300: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      e: () => Ek,
      i: () => Lk,
      n: () => Ok,
      k: () => Uk,
      q: () => ck
    });
    class Rk {
      constructor() {
        this.children = []
      }
      isValid(kk) {
        return !0
      }
      process(kk, Fk, Bk) {
        let Rk = "";
        if (this.line) {
          let Bk = this.line;
          const tk = Fk.processor;
          if (tk) {
            tk.lineProcessor && (Bk = tk.lineProcessor(Bk, Fk.isFragment, Fk.processingContext));
            const Rk = Fk.processor?.attributeKeywordName ?? "attribute",
              ak = Fk.isFragment && Fk.processor?.varyingFragmentKeywordName ? Fk.processor?.varyingFragmentKeywordName : !Fk.isFragment && Fk.processor?.varyingVertexKeywordName ? Fk.processor?.varyingVertexKeywordName : "varying";
            if (!Fk.isFragment && tk.attributeProcessor && this.line.startsWith(Rk)) Bk = tk.attributeProcessor(this.line, kk, Fk.processingContext);
            else if (tk.varyingProcessor && (tk.varyingCheck?.(this.line, Fk.isFragment) || !tk.varyingCheck && this.line.startsWith(ak))) Bk = tk.varyingProcessor(this.line, Fk.isFragment, kk, Fk.processingContext);
            else if (tk.uniformProcessor && tk.uniformRegexp && tk.uniformRegexp.test(this.line)) Fk.lookForClosingBracketForUniformBuffer || (Bk = tk.uniformProcessor(this.line, Fk.isFragment, kk, Fk.processingContext));
            else if (tk.uniformBufferProcessor && tk.uniformBufferRegexp && tk.uniformBufferRegexp.test(this.line)) Fk.lookForClosingBracketForUniformBuffer || (Bk = tk.uniformBufferProcessor(this.line, Fk.isFragment, Fk.processingContext), Fk.lookForClosingBracketForUniformBuffer = !0);
            else if (tk.textureProcessor && tk.textureRegexp && tk.textureRegexp.test(this.line)) Bk = tk.textureProcessor(this.line, Fk.isFragment, kk, Fk.processingContext);
            else if ((tk.uniformProcessor || tk.uniformBufferProcessor) && this.line.startsWith("uniform") && !Fk.lookForClosingBracketForUniformBuffer) {
              /uniform\s+(?:(?:highp)?|(?:lowp)?)\s*(\S+)\s+(\S+)\s*;/.test(this.line) ? tk.uniformProcessor && (Bk = tk.uniformProcessor(this.line, Fk.isFragment, kk, Fk.processingContext)) : tk.uniformBufferProcessor && (Bk = tk.uniformBufferProcessor(this.line, Fk.isFragment, Fk.processingContext), Fk.lookForClosingBracketForUniformBuffer = !0)
            }
            Fk.lookForClosingBracketForUniformBuffer && -1 !== this.line.indexOf("}") && (Fk.lookForClosingBracketForUniformBuffer = !1, tk.endOfUniformBufferProcessor && (Bk = tk.endOfUniformBufferProcessor(this.line, Fk.isFragment, Fk.processingContext)))
          }
          Rk += Bk + "\n"
        }
        for (const tk of this.children) Rk += tk.process(kk, Fk, Bk);
        return this.additionalDefineKey && (kk[this.additionalDefineKey] = this.additionalDefineValue || "true", Bk[this.additionalDefineKey] = kk[this.additionalDefineKey]), Rk
      }
    }
    class tk {
      constructor() {
        this._lines = []
      }
      get currentLine() {
        return this._lines[this.lineIndex]
      }
      get canRead() {
        return this.lineIndex < this._lines.length - 1
      }
      set lines(kk) {
        this._lines.length = 0;
        for (const Fk of kk) {
          if (!Fk || "\r" === Fk) continue;
          if ("#" === Fk[0]) {
            this._lines.push(Fk);
            continue
          }
          const kk = Fk.trim();
          if (!kk) continue;
          if (kk.startsWith("//")) {
            this._lines.push(Fk);
            continue
          }
          const Bk = kk.indexOf(";");
          if (-1 === Bk) this._lines.push(kk);
          else if (Bk === kk.length - 1) kk.length > 1 && this._lines.push(kk);
          else {
            const kk = Fk.split(";");
            for (let Fk = 0; Fk < kk.length; Fk++) {
              let Bk = kk[Fk];
              Bk && (Bk = Bk.trim(), Bk && this._lines.push(Bk + (Fk !== kk.length - 1 ? ";" : "")))
            }
          }
        }
      }
    }
    class ak extends Rk {
      process(kk, Fk, Bk) {
        for (let Rk = 0; Rk < this.children.length; Rk++) {
          const tk = this.children[Rk];
          if (tk.isValid(kk)) return tk.process(kk, Fk, Bk)
        }
        return ""
      }
    }
    class Xk extends Rk {
      isValid(kk) {
        return this.testExpression.isTrue(kk)
      }
    }
    class bk {
      isTrue(kk) {
        return !0
      }
      static postfixToInfix(kk) {
        const Fk = [];
        for (const Bk of kk)
          if (void 0 === bk._OperatorPriority[Bk]) Fk.push(Bk);
          else {
            const kk = Fk[Fk.length - 1],
              Rk = Fk[Fk.length - 2];
            Fk.length -= 2, Fk.push(`(${Rk}${Bk}${kk})`)
          } return Fk[Fk.length - 1]
      }
      static infixToPostfix(kk) {
        const Fk = bk._InfixToPostfixCache.get(kk);
        if (Fk) return Fk.accessTime = Date.now(), Fk.result;
        if (!kk.includes("&&") && !kk.includes("||") && !kk.includes(")") && !kk.includes("(")) return [kk];
        const Bk = [];
        let Rk = -1;
        const tk = () => {
            sk = sk.trim(), "" !== sk && (Bk.push(sk), sk = "")
          },
          ak = kk => {
            Rk < bk._Stack.length - 1 && (bk._Stack[++Rk] = kk)
          },
          Xk = () => bk._Stack[Rk],
          wk = () => -1 === Rk ? "!!INVALID EXPRESSION!!" : bk._Stack[Rk--];
        let dk = 0,
          sk = "";
        for (; dk < kk.length;) {
          const Fk = kk.charAt(dk),
            Vk = dk < kk.length - 1 ? kk.substring(dk, 2 + dk) : "";
          if ("(" === Fk) sk = "", ak(Fk);
          else if (")" === Fk) {
            for (tk(); - 1 !== Rk && "(" !== Xk();) Bk.push(wk());
            wk()
          } else if (bk._OperatorPriority[Vk] > 1) {
            for (tk(); - 1 !== Rk && bk._OperatorPriority[Xk()] >= bk._OperatorPriority[Vk];) Bk.push(wk());
            ak(Vk), dk++
          } else sk += Fk;
          dk++
        }
        for (tk(); - 1 !== Rk;) "(" === Xk() ? wk() : Bk.push(wk());
        return bk._InfixToPostfixCache.size >= bk.InfixToPostfixCacheLimitSize && bk.ClearCache(), bk._InfixToPostfixCache.set(kk, {
          result: Bk,
          accessTime: Date.now()
        }), Bk
      }
      static ClearCache() {
        const kk = Array.from(bk._InfixToPostfixCache.entries()).sort(((kk, Fk) => kk[1].accessTime - Fk[1].accessTime));
        for (let Fk = 0; Fk < bk.InfixToPostfixCacheCleanupSize; Fk++) bk._InfixToPostfixCache.delete(kk[Fk][0])
      }
    }
    bk.InfixToPostfixCacheLimitSize = 5e4, bk.InfixToPostfixCacheCleanupSize = 25e3, bk._InfixToPostfixCache = new Map, bk._OperatorPriority = {
      ")": 0,
      "(": 1,
      "||": 2,
      "&&": 3
    }, bk._Stack = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];
    class wk extends bk {
      constructor(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        super(), this.define = kk, this.not = Fk
      }
      isTrue(kk) {
        let Fk = void 0 !== kk[this.define];
        return this.not && (Fk = !Fk), Fk
      }
    }
    class dk extends bk {
      isTrue(kk) {
        return this.leftOperand.isTrue(kk) || this.rightOperand.isTrue(kk)
      }
    }
    class sk extends bk {
      isTrue(kk) {
        return this.leftOperand.isTrue(kk) && this.rightOperand.isTrue(kk)
      }
    }
    class Vk extends bk {
      constructor(kk, Fk, Bk) {
        super(), this.define = kk, this.operand = Fk, this.testValue = Bk
      }
      toString() {
        return `${this.define} ${this.operand} ${this.testValue}`
      }
      isTrue(kk) {
        let Fk = !1;
        const Bk = parseInt(void 0 != kk[this.define] ? kk[this.define] : this.define),
          Rk = parseInt(void 0 != kk[this.testValue] ? kk[this.testValue] : this.testValue);
        if (isNaN(Bk) || isNaN(Rk)) return !1;
        switch (this.operand) {
          case ">":
            Fk = Bk > Rk;
            break;
          case "<":
            Fk = Bk < Rk;
            break;
          case "<=":
            Fk = Bk <= Rk;
            break;
          case ">=":
            Fk = Bk >= Rk;
            break;
          case "==":
            Fk = Bk === Rk;
            break;
          case "!=":
            Fk = Bk !== Rk
        }
        return Fk
      }
    }
    var Jk = Bk(39296),
      Ak = Bk(39293);
    const ek = /defined\s*?\((.+?)\)/g,
      yk = /defined\s*?\[(.+?)\]/g,
      fk = /#include\s?<(.+)>(\((.*)\))*(\[(.*)\])*/g,
      mk = /__decl__/,
      Wk = /light\{X\}.(\w*)/g,
      vk = /\{X\}/g,
      ik = [],
      Yk = /(#ifdef)|(#else)|(#elif)|(#endif)|(#ifndef)|(#if)/;

    function Lk(kk) {
      kk.processor && kk.processor.initializeShaders && kk.processor.initializeShaders(kk.processingContext)
    }

    function Ok(kk, Fk, Bk, Rk) {
      Fk.processor?.preProcessShaderCode && (kk = Fk.processor.preProcessShaderCode(kk, Fk.isFragment)), Uk(kk, Fk, (kk => {
        Fk.processCodeAfterIncludes && (kk = Fk.processCodeAfterIncludes(Fk.isFragment ? "fragment" : "vertex", kk, Fk.defines));
        const tk = function(kk, Fk, Bk) {
          let Rk = function(kk, Fk) {
            if (Fk.processor?.noPrecision) return kk;
            const Bk = Fk.shouldUseHighPrecisionShader; - 1 === kk.indexOf("precision highp float") ? kk = Bk ? "precision highp float;\n" + kk : "precision mediump float;\n" + kk : Bk || (kk = kk.replace("precision highp float", "precision mediump float"));
            return kk
          }(kk, Fk);
          if (!Fk.processor) return Rk;
          if (0 === Fk.processor.shaderLanguage && -1 !== Rk.indexOf("#version 3") && (Rk = Rk.replace("#version 300 es", ""), !Fk.processor.parseGLES3)) return Rk;
          const tk = Fk.defines,
            ak = gk(Fk, Bk);
          Fk.processor.preProcessor && (Rk = Fk.processor.preProcessor(Rk, tk, ak, Fk.isFragment, Fk.processingContext));
          const Xk = {};
          Rk = Mk(Rk, ak, Fk, Xk), Fk.processor.postProcessor && (Rk = Fk.processor.postProcessor(Rk, tk, Fk.isFragment, Fk.processingContext, Bk ? {
            drawBuffersExtensionDisabled: !Bk.getCaps().drawBuffersExtension
          } : {}, ak, Xk));
          Bk?._features.needShaderCodeInlining && (Rk = Bk.inlineShaderCode(Rk));
          return Rk
        }(kk, Fk, Rk);
        Bk(tk, kk)
      }))
    }

    function Ek(kk, Fk, Bk) {
      return Bk.processor && Bk.processor.finalizeShaders ? Bk.processor.finalizeShaders(kk, Fk, Bk.processingContext) : {
        vertexCode: kk,
        fragmentCode: Fk
      }
    }

    function Sk(kk) {
      const Fk = /defined\((.+)\)/.exec(kk);
      if (Fk && Fk.length) return new wk(Fk[1].trim(), "!" === kk[0]);
      const Bk = ["==", "!=", ">=", "<=", "<", ">"];
      let Rk = "",
        tk = 0;
      for (Rk of Bk)
        if (tk = kk.indexOf(Rk), tk > -1) break;
      if (-1 === tk) return new wk(kk);
      const ak = kk.substring(0, tk).trim(),
        Xk = kk.substring(tk + Rk.length).trim();
      return new Vk(ak, Rk, Xk)
    }

    function Nk(kk, Fk) {
      const Bk = new Xk,
        Rk = kk.substring(0, Fk);
      let tk = kk.substring(Fk);
      return tk = tk.substring(0, (tk.indexOf("//") + 1 || tk.length + 1) - 1).trim(), Bk.testExpression = "#ifdef" === Rk ? new wk(tk) : "#ifndef" === Rk ? new wk(tk, !0) : function(kk) {
        kk = kk.replace(ek, "defined[$1]");
        const Fk = bk.infixToPostfix(kk),
          Bk = [];
        for (const tk of Fk)
          if ("||" !== tk && "&&" !== tk) Bk.push(tk);
          else if (Bk.length >= 2) {
          let kk = Bk[Bk.length - 1],
            Fk = Bk[Bk.length - 2];
          Bk.length -= 2;
          const Rk = "&&" == tk ? new sk : new dk;
          "string" === typeof kk && (kk = kk.replace(yk, "defined($1)")), "string" === typeof Fk && (Fk = Fk.replace(yk, "defined($1)")), Rk.leftOperand = "string" === typeof Fk ? Sk(Fk) : Fk, Rk.rightOperand = "string" === typeof kk ? Sk(kk) : kk, Bk.push(Rk)
        }
        let Rk = Bk[Bk.length - 1];
        return "string" === typeof Rk && (Rk = Rk.replace(yk, "defined($1)")), "string" === typeof Rk ? Sk(Rk) : Rk
      }(tk), Bk
    }

    function Hk(kk, Fk, Bk, tk) {
      let ak;
      for (; uk(kk, Bk, tk);) {
        ak = kk.currentLine;
        const Xk = ak.substring(0, 5).toLowerCase();
        if ("#else" === Xk) {
          const Bk = new Rk;
          return Fk.children.push(Bk), void uk(kk, Bk, tk)
        }
        if ("#elif" === Xk) {
          const kk = Nk(ak, 5);
          Fk.children.push(kk), Bk = kk
        }
      }
    }

    function uk(kk, Fk, Bk) {
      for (; kk.canRead;) {
        kk.lineIndex++;
        const tk = kk.currentLine;
        if (tk.indexOf("#") >= 0) {
          const Rk = Yk.exec(tk);
          if (Rk && Rk.length) {
            switch (Rk[0]) {
              case "#ifdef": {
                const Rk = new ak;
                Fk.children.push(Rk);
                const Xk = Nk(tk, 6);
                Rk.children.push(Xk), Hk(kk, Rk, Xk, Bk);
                break
              }
              case "#else":
              case "#elif":
                return !0;
              case "#endif":
                return !1;
              case "#ifndef": {
                const Rk = new ak;
                Fk.children.push(Rk);
                const Xk = Nk(tk, 7);
                Rk.children.push(Xk), Hk(kk, Rk, Xk, Bk);
                break
              }
              case "#if": {
                const Rk = new ak,
                  Xk = Nk(tk, 3);
                Fk.children.push(Rk), Rk.children.push(Xk), Hk(kk, Rk, Xk, Bk);
                break
              }
            }
            continue
          }
        }
        const Xk = new Rk;
        if (Xk.line = tk, Fk.children.push(Xk), "#" === tk[0] && "d" === tk[1]) {
          const kk = tk.replace(";", "").split(" ");
          Xk.additionalDefineKey = kk[1], 3 === kk.length && (Xk.additionalDefineValue = kk[2])
        }
      }
      return !1
    }

    function Mk(kk, Fk, Bk, ak) {
      const Xk = new Rk,
        bk = new tk;
      return bk.lineIndex = -1, bk.lines = kk.split("\n"), uk(bk, Xk, ak), Xk.process(Fk, Bk, ak)
    }

    function gk(kk, Fk) {
      const Bk = kk.defines,
        Rk = {};
      for (const tk of Bk) {
        const kk = tk.replace("#define", "").replace(";", "").trim().split(" ");
        Rk[kk[0]] = kk.length > 1 ? kk[1] : ""
      }
      return 0 === kk.processor?.shaderLanguage && (Rk.GL_ES = "true"), Rk.__VERSION__ = kk.version, Rk[kk.platformName] = "true", (0, Ak.i)(Rk, Fk?.isNDCHalfZRange, Fk?.rBk, Fk?.useExactSrgbConversions), Rk
    }

    function Uk(kk, Fk, Bk) {
      let Rk;
      for (ik.length = 0; null !== (Rk = fk.exec(kk));) ik.push(Rk);
      let tk = [kk],
        ak = !1;
      for (const bk of ik) {
        let kk = bk[1];
        if (-1 !== kk.indexOf("__decl__") && (kk = kk.replace(mk, ""), Fk.supportsUniformBuffers && (kk = kk.replace("Vertex", "Ubo").replace("Fragment", "Ubo")), kk += "Declaration"), !Fk.includesShadersStore[kk]) {
          const Rk = Fk.shadersRepository + "ShadersInclude/" + kk + ".fx";
          return void ck.loadFile(Rk, (Rk => {
            Fk.includesShadersStore[kk] = Rk, Uk(tk.join(""), Fk, Bk)
          }))
        } {
          let Bk = Fk.includesShadersStore[kk];
          if (bk[2]) {
            const kk = bk[3].split(",");
            for (let Fk = 0; Fk < kk.length; Fk += 2) {
              const Rk = new RegExp(kk[Fk], "g"),
                tk = kk[Fk + 1];
              Bk = Bk.replace(Rk, tk)
            }
          }
          if (bk[4]) {
            const kk = bk[5];
            if (-1 !== kk.indexOf("..")) {
              const Rk = kk.split(".."),
                tk = parseInt(Rk[0]);
              let ak = parseInt(Rk[1]),
                Xk = Bk.slice(0);
              Bk = "", isNaN(ak) && (ak = Fk.indexParameters[Rk[1]]);
              for (let kk = tk; kk < ak; kk++) Fk.supportsUniformBuffers || (Xk = Xk.replace(Wk, ((kk, Fk) => Fk + "{X}"))), Bk += Xk.replace(vk, kk.toString()) + "\n"
            } else Fk.supportsUniformBuffers || (Bk = Bk.replace(Wk, ((kk, Fk) => Fk + "{X}"))), Bk = Bk.replace(vk, kk)
          }
          const Rk = [];
          for (const kk of tk) {
            const Fk = kk.split(bk[0]);
            for (let kk = 0; kk < Fk.length - 1; kk++) Rk.push(Fk[kk]), Rk.push(Bk);
            Rk.push(Fk[Fk.length - 1])
          }
          tk = Rk, ak = ak || Bk.indexOf("#include<") >= 0 || Bk.indexOf("#include <") >= 0
        }
      }
      ik.length = 0;
      const Xk = tk.join("");
      ak ? Uk(Xk.toString(), Fk, Bk) : Bk(Xk)
    }
    const ck = {
      loadFile: (kk, Fk, Bk, Rk, tk, ak) => {
        throw (0, Jk.i)("FileTools")
      }
    }
  },
  39293: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      e: () => tk,
      h: () => ak,
      i: () => bk,
      m: () => Xk,
      o: () => wk
    });
    var Rk = Bk(39296);
    const tk = {};

    function ak(kk, Fk) {
      return (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "") + (Fk ? Fk + "\n" : "") + kk
    }

    function Xk(kk, Fk, Bk, ak, Xk, bk, wk) {
      const dk = wk || tk.loadFile;
      if (!dk) throw (0, Rk.i)("FileTools");
      return dk(kk, Fk, Bk, ak, Xk, bk)
    }

    function bk(kk, Fk, Bk, Rk) {
      if (kk) return Fk ? kk.IS_NDC_HALF_ZRANGE = "" : delete kk.IS_NDC_HALF_ZRANGE, Bk ? kk.USE_REVERSE_DEPTHBUFFER = "" : delete kk.USE_REVERSE_DEPTHBUFFER, void(Rk ? kk.USE_EXACT_SRGB_CONVERSIONS = "" : delete kk.USE_EXACT_SRGB_CONVERSIONS);
      {
        let kk = "";
        return Fk && (kk += "#define IS_NDC_HALF_ZRANGE"), Bk && (kk && (kk += "\n"), kk += "#define USE_REVERSE_DEPTHBUFFER"), Rk && (kk && (kk += "\n"), kk += "#define USE_EXACT_SRGB_CONVERSIONS"), kk
      }
    }

    function wk(kk, Fk) {
      let Bk = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        Rk = arguments.length > 3 ? arguments[3] : void 0;
      switch (kk) {
        case 3: {
          const kk = new Int8Array(Fk);
          return Rk && kk.set(new Int8Array(Rk)), kk
        }
        case 0: {
          const kk = new Uint8Array(Fk);
          return Rk && kk.set(new Uint8Array(Rk)), kk
        }
        case 4: {
          const kk = "number" !== typeof Fk ? new Int16Array(Fk) : new Int16Array(Bk ? Fk / 2 : Fk);
          return Rk && kk.set(new Int16Array(Rk)), kk
        }
        case 5:
        case 8:
        case 9:
        case 10:
        case 2: {
          const kk = "number" !== typeof Fk ? new Uint16Array(Fk) : new Uint16Array(Bk ? Fk / 2 : Fk);
          return Rk && kk.set(new Uint16Array(Rk)), kk
        }
        case 6: {
          const kk = "number" !== typeof Fk ? new Int32Array(Fk) : new Int32Array(Bk ? Fk / 4 : Fk);
          return Rk && kk.set(new Int32Array(Rk)), kk
        }
        case 7:
        case 11:
        case 12:
        case 13:
        case 14:
        case 15: {
          const kk = "number" !== typeof Fk ? new Uint32Array(Fk) : new Uint32Array(Bk ? Fk / 4 : Fk);
          return Rk && kk.set(new Uint32Array(Rk)), kk
        }
        case 1: {
          const kk = "number" !== typeof Fk ? new Float32Array(Fk) : new Float32Array(Bk ? Fk / 4 : Fk);
          return Rk && kk.set(new Float32Array(Rk)), kk
        }
      }
      const tk = new Uint8Array(Fk);
      return Rk && tk.set(new Uint8Array(Rk)), tk
    }
  },
  39296: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      c: () => dk,
      f: () => sk,
      g: () => wk,
      i: () => tk
    });
    const Rk = {};

    function tk(kk) {
      if (!(arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) || !Rk[kk]) return Rk[kk] = !0, `${kk} needs to be imported before as it contains a side-effect required by your code.`
    }
    const ak = {};
    let Xk = !1,
      bk = 0;

    function wk(kk, Fk) {
      let Bk = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      const Rk = function() {
        if ((Bk || Xk) && 0 === bk) {
          const Bk = `${kk}.${Fk}`;
          ak[Bk] || (ak[Bk] = !0, console.warn(`[Babylon.js] ${Bk}() requires a side-effect import. See: https://doc.babylonjs.com/setup/treeshaking`))
        }
      };
      return Rk.__isSideEffectStub = !0, Rk
    }

    function dk(kk) {
      return !!kk && !kk.__isSideEffectStub
    }

    function sk(kk, Fk) {
      return {
        get() {},
        set(kk) {
          Object.defineProperty(this, Fk, {
            value: kk,
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
  39281: (kk, Fk, Bk) => {
    function Rk() {
      return "undefined" !== typeof window
    }

    function tk() {
      return "undefined" !== typeof navigator
    }

    function ak() {
      return "undefined" !== typeof document
    }

    function Xk(kk) {
      let Fk = "",
        Bk = kk.firstChild;
      for (; Bk;) 3 === Bk.nodeType && (Fk += Bk.textContent), Bk = Bk.nextSibling;
      return Fk
    }
    Bk.d(Fk, {
      d: () => Xk,
      e: () => ak,
      g: () => tk,
      j: () => Rk
    })
  },
  39453: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      d: () => Rk,
      g: () => tk,
      j: () => ak
    });
    class Rk extends Error {}
    Rk._setPrototypeOf = Object.setPrototypeOf || ((kk, Fk) => (kk.__proto__ = Fk, kk));
    const tk = {
      MeshInvalidPositionsError: 0,
      UnsupportedTextureError: 1e3,
      GLTFLoaderUnexpectedMagicError: 2e3,
      SceneLoaderError: 3e3,
      LoadFileError: 4e3,
      RequestFileError: 4001,
      ReadFileError: 4002
    };
    class ak extends Rk {
      constructor(kk, Fk, Bk) {
        super(kk), this.errorCode = Fk, this.innerError = Bk, this.name = "RuntimeError", Rk._setPrototypeOf(this, ak.prototype)
      }
    }
  },
  39436: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      c: () => gk,
      d: () => vk,
      f: () => Nk,
      h: () => uk,
      i: () => Ek,
      j: () => Lk,
      m: () => Ok,
      p: () => rk,
      s: () => Sk,
      v: () => ik
    });
    var Rk = Bk(39445),
      tk = Bk(39281),
      ak = Bk(36781);
    class Xk {}
    Xk.FilesToLoad = {};
    var bk = Bk(39453),
      wk = Bk(39461),
      dk = Bk(36772),
      sk = Bk(39293),
      Vk = Bk(39300),
      Jk = Bk(38320),
      Ak = Bk(39302),
      ek = Bk(39463);
    const yk = new RegExp(/^data:([^,]+\/[^,]+)?;base64,/i);
    class fk extends bk.j {
      constructor(kk, Fk) {
        super(kk, bk.g.LoadFileError), this.name = "LoadFileError", bk.d._setPrototypeOf(this, fk.prototype), Fk instanceof Rk.d ? this.request = Fk : this.file = Fk
      }
    }
    class mk extends bk.j {
      constructor(kk, Fk) {
        super(kk, bk.g.RequestFileError), this.request = Fk, this.name = "RequestFileError", bk.d._setPrototypeOf(this, mk.prototype)
      }
    }
    class Wk extends bk.j {
      constructor(kk, Fk) {
        super(kk, bk.g.ReadFileError), this.file = Fk, this.name = "ReadFileError", bk.d._setPrototypeOf(this, Wk.prototype)
      }
    }
    const vk = {
        DefaultRetryStrategy: class {
          static ExponentialBackoff() {
            let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 3,
              Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 500;
            return (Bk, Rk, tk) => 0 !== Rk.status || tk >= kk || -1 !== Bk.indexOf("file:") ? -1 : Math.pow(2, tk) * Fk
          }
        }.ExponentialBackoff(),
        BaseUrl: "",
        CorsBehavior: "anonymous",
        PreprocessUrl: kk => kk,
        ScriptBaseUrl: "",
        ScriptPreprocessUrl: kk => kk,
        CleanUrl: kk => kk = kk.replace(/#/gm, "%23")
      },
      ik = (kk, Fk) => {
        if ((!kk || 0 !== kk.indexOf("data:")) && vk.CorsBehavior)
          if ("string" === typeof vk.CorsBehavior || vk.CorsBehavior instanceof String) Fk.crossOrigin = vk.CorsBehavior;
          else {
            const Bk = vk.CorsBehavior(kk);
            Bk && (Fk.crossOrigin = Bk)
          }
      },
      Yk = {
        getRequiredSize: null
      },
      Lk = function(kk, Fk, Bk, tk) {
        let ak, bk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "",
          sk = arguments.length > 5 ? arguments[5] : void 0,
          Vk = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : dk.c.LastCreatedEngine;
        if ("undefined" === typeof HTMLImageElement && !Vk?._features.forceBitmapOverHTMLImageElement) return Bk("LoadImage is only supported in web or BabylonNative environments."), null;
        if (Vk?._features.forceBitmapOverHTMLImageElement && "string" !== typeof kk && "undefined" !== typeof Blob) {
          let Rk;
          if (kk instanceof Blob) Rk = kk;
          else {
            const Fk = kk instanceof ArrayBuffer ? kk : (0, ek.k)(kk);
            Rk = new Blob([Fk], {
              type: bk
            })
          }
          return Vk.createImageBitmap(Rk, {
            premultiplyAlpha: "none",
            colorSpaceConversion: "none",
            ...sk
          }).then(Fk).catch((Fk => {
            Bk && Bk("Error while trying to load image: " + kk, Fk)
          })), null
        }
        let Jk = !1;
        if (kk instanceof ArrayBuffer || ArrayBuffer.isView(kk))
          if ("undefined" !== typeof Blob && "undefined" !== typeof URL) {
            let Fk;
            Fk = kk instanceof ArrayBuffer ? kk : (0, ek.k)(kk), ak = URL.createObjectURL(new Blob([Fk], {
              type: bk
            })), Jk = !0
          } else ak = `data:${bk};base64,` + (0, wk.f)(kk);
        else kk instanceof Blob ? (ak = URL.createObjectURL(kk), Jk = !0) : (ak = vk.CleanUrl(kk), ak = vk.PreprocessUrl(ak));
        const Ak = Fk => {
          if (Bk) {
            const Rk = ak || kk.toString();
            Bk(`Error while trying to load image: ${0===Rk.indexOf("http")||Rk.length<=128?Rk:Rk.slice(0,128)+"..."}`, Fk)
          }
        };
        if (Vk?._features.forceBitmapOverHTMLImageElement) return Ek(ak, (Rk => {
          Vk.createImageBitmap(new Blob([Rk], {
            type: bk
          }), {
            premultiplyAlpha: "none",
            colorSpaceConversion: "none",
            ...sk
          }).then((kk => {
            Fk(kk), Jk && URL.revokeObjectURL(ak)
          })).catch((Fk => {
            Bk && Bk("Error while trying to load image: " + kk, Fk)
          }))
        }), void 0, tk || void 0, !0, ((kk, Fk) => {
          Ak(Fk)
        })), null;
        const yk = new Image;
        if (Yk.getRequiredSize) {
          const Fk = Yk.getRequiredSize(kk);
          Fk.width && (yk.width = Fk.width), Fk.height && (yk.height = Fk.height)
        }
        ik(ak, yk);
        const fk = [],
          mk = () => {
            for (const kk of fk) kk.target.removeEventListener(kk.name, kk.handler);
            fk.length = 0
          };
        fk.push({
          target: yk,
          name: "load",
          handler: () => {
            mk(), Fk(yk), Jk && yk.src && URL.revokeObjectURL(yk.src)
          }
        }), fk.push({
          target: yk,
          name: "error",
          handler: kk => {
            mk(), Ak(kk), Jk && yk.src && URL.revokeObjectURL(yk.src)
          }
        }), fk.push({
          target: document,
          name: "securitypolicyviolation",
          handler: kk => {
            if (kk.blockedURI !== yk.src || "ve" === kk.disposition) return;
            mk();
            const Fk = new Error(`CSP violation of policy ${kk.effectiveDirective} ${kk.blockedURI}. Current policy is ${kk.originalPolicy}`);
            dk.c.UseFallbackTexture = !1, Ak(Fk), Jk && yk.src && URL.revokeObjectURL(yk.src), yk.src = ""
          }
        }), (() => {
          for (const kk of fk) kk.target.addEventListener(kk.name, kk.handler)
        })();
        const Wk = "blob:" === ak.substring(0, 5),
          Lk = "data:" === ak.substring(0, 5),
          Ok = () => {
            Wk || Lk || !Rk.d.IsCustomRequestAvailable ? yk.src = ak : Ek(ak, ((kk, Fk, Bk) => {
              const Rk = new Blob([kk], {
                  type: !bk && Bk ? Bk : bk
                }),
                tk = URL.createObjectURL(Rk);
              Jk = !0, yk.src = tk
            }), void 0, tk || void 0, !0, ((kk, Fk) => {
              Ak(Fk)
            }))
          },
          Sk = () => {
            tk && tk.loadImage(ak, yk)
          };
        if (!Wk && !Lk && tk && tk.enableTexturesOffline) tk.open(Sk, Ok);
        else {
          if (-1 !== ak.indexOf("file:")) {
            const kk = decodeURIComponent(ak.substring(5).toLowerCase());
            if (Xk.FilesToLoad[kk] && "undefined" !== typeof URL) {
              try {
                let Fk;
                try {
                  Fk = URL.createObjectURL(Xk.FilesToLoad[kk])
                } catch (Nk) {
                  Fk = URL.createObjectURL(Xk.FilesToLoad[kk])
                }
                yk.src = Fk, Jk = !0
              } catch (Hk) {
                yk.src = ""
              }
              return yk
            }
          }
          Ok()
        }
        return yk
      },
      Ok = (kk, Fk, Bk, Rk, tk) => {
        const Xk = new FileReader,
          bk = {
            onCompleteObservable: new ak.e,
            abort: () => Xk.abort()
          };
        return Xk.onloadend = () => bk.onCompleteObservable.notifyObservers(bk), tk && (Xk.onerror = () => {
          tk(new Wk(`Unable to read ${kk.name}`, kk))
        }), Xk.onload = kk => {
          Fk(kk.target.result)
        }, Bk && (Xk.onprogress = Bk), Rk ? Xk.readAsArrayBuffer(kk) : Xk.readAsText(kk), bk
      },
      Ek = (kk, Fk, Bk, Rk, tk, wk, dk) => {
        if (kk.name) return Ok(kk, Fk, Bk, tk, wk ? kk => {
          wk(void 0, kk)
        } : void 0);
        const sk = kk;
        if (-1 !== sk.indexOf("file:")) {
          let kk = decodeURIComponent(sk.substring(5).toLowerCase());
          0 === kk.indexOf("./") && (kk = kk.substring(2));
          const Rk = Xk.FilesToLoad[kk];
          if (Rk) return Ok(Rk, Fk, Bk, tk, wk ? kk => wk(void 0, new fk(kk.message, kk.file)) : void 0)
        }
        const {
          match: Vk,
          type: ek
        } = Mk(sk);
        if (Vk) {
          const kk = {
            onCompleteObservable: new ak.e,
            abort: () => () => {}
          };
          try {
            const kk = tk ? gk(sk) : Uk(sk);
            Fk(kk, void 0, ek)
          } catch (bk) {
            wk ? wk(void 0, bk) : Jk.b.Error(bk.message || "Failed to parse the Data URL")
          }
          return Ak.e.SetImmediate((() => {
            kk.onCompleteObservable.notifyObservers(kk)
          })), kk
        }
        return Sk(sk, ((kk, Bk) => {
          Fk(kk, Bk?.responseURL, Bk?.getResponseHeader("content-type"))
        }), Bk, Rk, tk, wk ? kk => {
          wk(kk.request, new fk(kk.message, kk.request))
        } : void 0, dk)
      },
      Sk = (kk, Fk, Bk, Xk, bk, wk, sk) => {
        null !== Xk && (Xk ?? (Xk = dk.c.LastCreatedScene?.offlineProvider)), kk = vk.CleanUrl(kk), kk = vk.PreprocessUrl(kk);
        const Vk = vk.BaseUrl + kk;
        let Ak = !1;
        const ek = {
            onCompleteObservable: new ak.e,
            abort: () => Ak = !0
          },
          yk = () => {
            let kk, ak = new Rk.d,
              Xk = null;
            const dk = () => {
              ak && (Bk && ak.removeEventListener("progress", Bk), kk && ak.removeEventListener("readystatechange", kk), ak.removeEventListener("loadend", yk))
            };
            let yk = () => {
              dk(), ek.onCompleteObservable.notifyObservers(ek), ek.onCompleteObservable.clear(), Bk = void 0, kk = null, yk = null, wk = void 0, sk = void 0, Fk = void 0
            };
            ek.abort = () => {
              Ak = !0, yk && yk(), ak && ak.readyState !== (XMLHttpRequest.DONE || 4) && ak.abort(), null !== Xk && (clearTimeout(Xk), Xk = null), ak = null
            };
            const fk = kk => {
                const Fk = kk.message || "Unknown error";
                wk && ak ? wk(new mk(Fk, ak)) : Jk.b.Error(Fk)
              },
              Wk = Jk => {
                if (ak) {
                  if (ak.open("GET", Vk), sk) try {
                    sk(ak)
                  } catch (ek) {
                    return void fk(ek)
                  }
                  bk && (ak.responseType = "arraybuffer"), Bk && ak.addEventListener("progress", Bk), yk && ak.addEventListener("loadend", yk), kk = () => {
                    if (!Ak && ak && ak.readyState === (XMLHttpRequest.DONE || 4)) {
                      if (kk && ak.removeEventListener("readystatechange", kk), ak.status >= 200 && ak.status < 300 || 0 === ak.status && (!(0, tk.j)() || Hk())) {
                        const kk = bk ? ak.response : ak.responseText;
                        if (null !== kk) {
                          try {
                            Fk && Fk(kk, ak)
                          } catch (ek) {
                            fk(ek)
                          }
                          return
                        }
                      }
                      const Bk = vk.DefaultRetryStrategy;
                      if (Bk) {
                        const kk = Bk(Vk, ak, Jk);
                        if (-1 !== kk) return dk(), ak = new Rk.d, void(Xk = setTimeout((() => Wk(Jk + 1)), kk))
                      }
                      const sk = new mk("Error status: " + ak.status + " " + ak.statusText + " - Unable to load " + Vk, ak);
                      wk && wk(sk)
                    }
                  }, ak.addEventListener("readystatechange", kk), ak.send()
                }
              };
            Wk(0)
          };
        if (Xk && Xk.enableSceneOffline && !kk.startsWith("blob:")) {
          const Rk = kk => {
              kk && kk.status > 400 ? wk && wk(kk) : yk()
            },
            tk = () => {
              Xk && Xk.loadFile(vk.BaseUrl + kk, (kk => {
                !Ak && Fk && Fk(kk), ek.onCompleteObservable.notifyObservers(ek)
              }), Bk ? kk => {
                !Ak && Bk && Bk(kk)
              } : void 0, Rk, bk)
            };
          Xk.open(tk, Rk)
        } else yk();
        return ek
      },
      Nk = kk => {
        const {
          match: Fk,
          type: Bk
        } = Mk(kk);
        if (Fk) return Bk || void 0;
        const Rk = kk.lastIndexOf(".");
        switch (kk.substring(Rk + 1).toLowerCase()) {
          case "glb":
            return "model/gltf-binary";
          case "bin":
            return "application/octet-stream";
          case "bS":
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
      Hk = () => "undefined" !== typeof location && "file:" === location.protocol,
      uk = kk => yk.test(kk),
      Mk = kk => {
        const Fk = yk.exec(kk);
        if (null === Fk || 0 === Fk.length) return {
          match: !1,
          type: ""
        };
        return {
          match: !0,
          type: Fk[0].replace("data:", "").replace(";base64,", "")
        }
      };

    function gk(kk) {
      return (0, wk.d)(kk.split(",")[1])
    }
    const Uk = kk => (0, wk.e)(kk.split(",")[1]);
    let ck;
    const Gk = (kk, Fk, Bk, Rk, tk, ak, Xk, bk, wk, dk) => {
      ck = {
        DecodeBase64UrlToBinary: kk,
        DecodeBase64UrlToString: Fk,
        DefaultRetryStrategy: Bk.DefaultRetryStrategy,
        BaseUrl: Bk.BaseUrl,
        CorsBehavior: Bk.CorsBehavior,
        PreprocessUrl: Bk.PreprocessUrl,
        IsBase64DataUrl: Rk,
        IsFileURL: tk,
        LoadFile: ak,
        LoadImage: Xk,
        ReadFile: bk,
        RequestFile: wk,
        SetCorsBehavior: dk
      }, Object.defineProperty(ck, "DefaultRetryStrategy", {
        get: function() {
          return Bk.DefaultRetryStrategy
        },
        set: function(kk) {
          Bk.DefaultRetryStrategy = kk
        }
      }), Object.defineProperty(ck, "BaseUrl", {
        get: function() {
          return Bk.BaseUrl
        },
        set: function(kk) {
          Bk.BaseUrl = kk
        }
      }), Object.defineProperty(ck, "PreprocessUrl", {
        get: function() {
          return Bk.PreprocessUrl
        },
        set: function(kk) {
          Bk.PreprocessUrl = kk
        }
      }), Object.defineProperty(ck, "CorsBehavior", {
        get: function() {
          return Bk.CorsBehavior
        },
        set: function(kk) {
          Bk.CorsBehavior = kk
        }
      })
    };
    let Tk = !1;

    function rk() {
      Tk || (Tk = !0, Gk(gk, Uk, vk, uk, Hk, Ek, Lk, Ok, Sk, ik), sk.e.loadFile = Ek, sk.e.loadImage = Lk, Vk.q.loadFile = Ek)
    }
  },
  39465: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      d: () => bk,
      e: () => ak,
      h: () => Xk
    });
    let Rk = null;

    function tk() {
      if (Rk) return Rk;
      const kk = new ArrayBuffer(4),
        Fk = new Float32Array(kk),
        Bk = new Uint32Array(kk),
        tk = new Uint32Array(512),
        ak = new Uint32Array(512);
      for (let Rk = 0; Rk < 256; ++Rk) {
        const kk = Rk - 127;
        kk < -24 ? (tk[Rk] = 0, tk[256 | Rk] = 32768, ak[Rk] = 24, ak[256 | Rk] = 24) : kk < -14 ? (tk[Rk] = 1024 >> -kk - 14, tk[256 | Rk] = 1024 >> -kk - 14 | 32768, ak[Rk] = -kk - 1, ak[256 | Rk] = -kk - 1) : kk <= 15 ? (tk[Rk] = kk + 15 << 10, tk[256 | Rk] = kk + 15 << 10 | 32768, ak[Rk] = 13, ak[256 | Rk] = 13) : kk < 128 ? (tk[Rk] = 31744, tk[256 | Rk] = 64512, ak[Rk] = 24, ak[256 | Rk] = 24) : (tk[Rk] = 31744, tk[256 | Rk] = 64512, ak[Rk] = 13, ak[256 | Rk] = 13)
      }
      const Xk = new Uint32Array(2048),
        bk = new Uint32Array(64),
        wk = new Uint32Array(64);
      for (let Rk = 1; Rk < 1024; ++Rk) {
        let kk = Rk << 13,
          Fk = 0;
        for (; 0 === (8388608 & kk);) kk <<= 1, Fk -= 8388608;
        kk &= -8388609, Fk += 947912704, Xk[Rk] = kk | Fk
      }
      for (let Rk = 1024; Rk < 2048; ++Rk) Xk[Rk] = 939524096 + (Rk - 1024 << 13);
      for (let Rk = 1; Rk < 31; ++Rk) bk[Rk] = Rk << 23;
      bk[31] = 1199570944, bk[32] = 2147483648;
      for (let Rk = 33; Rk < 63; ++Rk) bk[Rk] = 2147483648 + (Rk - 32 << 23);
      bk[63] = 3347054592;
      for (let Rk = 1; Rk < 64; ++Rk) 32 !== Rk && (wk[Rk] = 1024);
      return Rk = {
        floatView: Fk,
        uint32View: Bk,
        baseTable: tk,
        shiftTable: ak,
        mantissaTable: Xk,
        exponentTable: bk,
        offsetTable: wk
      }, Rk
    }
    const ak = 65504;

    function Xk(kk) {
      const Fk = tk();
      Fk.floatView[0] = kk;
      const Bk = Fk.uint32View[0],
        Rk = Bk >> 23 & 511;
      return Fk.baseTable[Rk] + ((8388607 & Bk) >> Fk.shiftTable[Rk])
    }

    function bk(kk) {
      const Fk = tk();
      return Fk.uint32View[0] = Fk.mantissaTable[Fk.offsetTable[kk >> 10] + (1023 & kk)] + Fk.exponentTable[kk >> 10], Fk.floatView[0]
    }
  },
  39461: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      d: () => ak,
      e: () => tk,
      f: () => Rk
    });
    const Rk = kk => {
        const Fk = ArrayBuffer.isView(kk) ? new Uint8Array(kk.buffer, kk.byteOffset, kk.byteLength) : new Uint8Array(kk);
        return "function" === typeof Fk.toBase64 ? Fk.toBase64() : function(kk) {
          const Fk = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
          let Bk, Rk, tk, ak, Xk, bk, wk, dk = "",
            sk = 0;
          for (; sk < kk.length;) Bk = kk[sk++], Rk = sk < kk.length ? kk[sk++] : Number.NaN, tk = sk < kk.length ? kk[sk++] : Number.NaN, ak = Bk >> 2, Xk = (3 & Bk) << 4 | Rk >> 4, bk = (15 & Rk) << 2 | tk >> 6, wk = 63 & tk, isNaN(Rk) ? bk = wk = 64 : isNaN(tk) && (wk = 64), dk += Fk.charAt(ak) + Fk.charAt(Xk) + Fk.charAt(bk) + Fk.charAt(wk);
          return dk
        }(Fk)
      },
      tk = kk => atob(kk),
      ak = kk => "function" === typeof Uint8Array.fromBase64 ? Uint8Array.fromBase64(kk).buffer : function(kk) {
        const Fk = tk(kk),
          Bk = Fk.length,
          Rk = new Uint8Array(new ArrayBuffer(Bk));
        for (let tk = 0; tk < Bk; tk++) Rk[tk] = Fk.charCodeAt(tk);
        return Rk.buffer
      }(kk)
  },
  39302: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      e: () => tk,
      g: () => Xk
    });
    let Rk = [];
    class tk {
      static SetImmediate(kk) {
        0 === Rk.length && setTimeout((() => {
          const kk = Rk;
          Rk = [];
          for (const Fk of kk) Fk()
        }), 1), Rk.push(kk)
      }
    }

    function ak(kk, Fk, Bk) {
      try {
        if (kk()) return Fk(), !0
      } catch (Rk) {
        return Bk?.(Rk), !0
      }
      return !1
    }
    const Xk = function(kk, Fk, Bk) {
      let Rk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 16,
        tk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3e4,
        Xk = arguments.length > 6 ? arguments[6] : void 0;
      if ((!(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5]) && ak(kk, Fk, Bk)) return null;
      const bk = setInterval((() => {
        ak(kk, Fk, Bk) ? clearInterval(bk) : (tk -= Rk, tk < 0 && (clearInterval(bk), Bk?.(new Error("Operation timed out after maximum retries. " + (Xk || "")), !0)))
      }), Rk);
      return () => clearInterval(bk)
    }
  },
  39445: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      d: () => Rk
    });
    class Rk {
      constructor() {
        this._xhr = "undefined" !== typeof _native && _native.XMLHttpRequest ? new _native.XMLHttpRequest : new XMLHttpRequest, this._requestURL = ""
      }
      static get IsCustomRequestAvailable() {
        return Object.keys(Rk.CustomRequestHeaders).length > 0 || Rk.CustomRequestModifiers.length > 0
      }
      static _CleanUrl(kk) {
        return kk = (kk = kk.replace("file:http:", "http:")).replace("file:https:", "https:")
      }
      static _ShouldSkipRequestModifications(kk) {
        return Rk.SkipRequestModificationForBabylonCDN && (kk.includes("preview.babylonjs.com") || kk.includes("cdn.babylonjs.com"))
      }
      static _CollectCustomizations(kk) {
        const Fk = {
          ...arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
        };
        if (Rk._ShouldSkipRequestModifications(kk)) return {
          url: kk,
          headers: Fk
        };
        for (const tk in Rk.CustomRequestHeaders) {
          const kk = Rk.CustomRequestHeaders[tk];
          kk && (Fk[tk] = kk)
        }
        const Bk = {
          setRequestHeader: (kk, Bk) => {
            Fk[kk] = Bk
          }
        };
        for (const tk of Rk.CustomRequestModifiers) {
          if (Rk._ShouldSkipRequestModifications(kk)) break;
          const Fk = tk(Bk, kk);
          "string" === typeof Fk && (kk = Fk)
        }
        return {
          url: kk,
          headers: Fk
        }
      }
      static async FetchAsync(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const Bk = Fk.method ?? "GET";
        if ("undefined" !== typeof fetch) {
          const {
            url: tk,
            headers: ak
          } = Rk._CollectCustomizations(Rk._CleanUrl(kk), Fk.headers ?? {});
          return await fetch(tk, {
            method: Bk,
            headers: ak,
            body: Fk.body ?? void 0
          })
        }
        return await new Promise(((tk, ak) => {
          const Xk = new Rk;
          Xk.responseType = "arraybuffer", Xk.addEventListener("readystatechange", (() => {
            if (4 === Xk.readyState)
              if (Xk.status >= 200 && Xk.status < 300) {
                const kk = "undefined" !== typeof Headers ? new Headers : void 0,
                  Fk = Xk.getResponseHeader("Content-Type");
                Fk && kk && kk.set("Content-Type", Fk), "undefined" !== typeof Response ? tk(new Response(Xk.response, {
                  status: Xk.status,
                  statusText: Xk.statusText,
                  headers: kk
                })) : tk({
                  ok: !0,
                  status: Xk.status,
                  statusText: Xk.statusText,
                  headers: {
                    get: kk => Xk.getResponseHeader(kk)
                  },
                  arrayBuffer: async () => await Promise.resolve(Xk.response)
                })
              } else ak(new Error(`HTTP ${Xk.status} loading '${Xk.requestURL}': ${Xk.statusText}`))
          })), Xk.open(Bk, kk, Fk.headers), Xk.send(Fk.body ?? null)
        }))
      }
      get requestURL() {
        return this._requestURL
      }
      get onprogress() {
        return this._xhr.onprogress
      }
      set onprogress(kk) {
        this._xhr.onprogress = kk
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
      set responseType(kk) {
        this._xhr.responseType = kk
      }
      get timeout() {
        return this._xhr.timeout
      }
      set timeout(kk) {
        this._xhr.timeout = kk
      }
      addEventListener(kk, Fk, Bk) {
        this._xhr.addEventListener(kk, Fk, Bk)
      }
      removeEventListener(kk, Fk, Bk) {
        this._xhr.removeEventListener(kk, Fk, Bk)
      }
      abort() {
        this._xhr.abort()
      }
      send(kk) {
        this._xhr.send(kk)
      }
      open(kk, Fk, Bk) {
        const {
          url: tk,
          headers: ak
        } = Rk._CollectCustomizations(Fk, Bk);
        this._requestURL = Rk._CleanUrl(tk), this._xhr.open(kk, this._requestURL, !0);
        for (const Rk in ak) this._xhr.setRequestHeader(Rk, ak[Rk])
      }
      setRequestHeader(kk, Fk) {
        this._xhr.setRequestHeader(kk, Fk)
      }
      getResponseHeader(kk) {
        return this._xhr.getResponseHeader(kk)
      }
    }
    Rk.CustomRequestHeaders = {}, Rk.CustomRequestModifiers = new Array, Rk.SkipRequestModificationForBabylonCDN = !0
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);