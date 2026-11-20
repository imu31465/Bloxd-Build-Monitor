export const id = 246;
export const ids = [246];
export const modules = {
  39817: (qq, Eq, gq) => {
    gq.d(Eq, {
      c: () => Wq,
      d: () => Bq,
      h: () => Aq,
      l: () => Nq,
      o: () => cq,
      q: () => xq,
      r: () => uq
    });
    var Yq = gq(38653),
      lq = gq(39819);

    function Oq(qq, Eq, gq, Yq) {
      switch (Eq) {
        case 5120: {
          let Eq = qq.getInt8(gq);
          return Yq && (Eq = Math.max(Eq / 127, -1)), Eq
        }
        case 5121: {
          let Eq = qq.getUint8(gq);
          return Yq && (Eq /= 255), Eq
        }
        case 5122: {
          let Eq = qq.getInt16(gq, !0);
          return Yq && (Eq = Math.max(Eq / 32767, -1)), Eq
        }
        case 5123: {
          let Eq = qq.getUint16(gq, !0);
          return Yq && (Eq /= 65535), Eq
        }
        case 5131:
          return (0, lq.e)(qq.getUint16(gq, !0));
        case 5124:
          return qq.getInt32(gq, !0);
        case 5125:
          return qq.getUint32(gq, !0);
        case 5126:
          return qq.getFloat32(gq, !0);
        default:
          throw new Error(`Invalid component type ${Eq}`)
      }
    }

    function mq(qq, Eq, gq, Yq, Oq) {
      switch (Eq) {
        case 5120:
          Yq && (Oq = Math.round(127 * Oq)), qq.setInt8(gq, Oq);
          break;
        case 5121:
          Yq && (Oq = Math.round(255 * Oq)), qq.setUint8(gq, Oq);
          break;
        case 5122:
          Yq && (Oq = Math.round(32767 * Oq)), qq.setInt16(gq, Oq, !0);
          break;
        case 5123:
          Yq && (Oq = Math.round(65535 * Oq)), qq.setUint16(gq, Oq, !0);
          break;
        case 5131:
          qq.setUint16(gq, (0, lq.j)(Oq), !0);
          break;
        case 5124:
          qq.setInt32(gq, Oq, !0);
          break;
        case 5125:
          qq.setUint32(gq, Oq, !0);
          break;
        case 5126:
          qq.setFloat32(gq, Oq, !0);
          break;
        default:
          throw new Error(`Invalid component type ${Eq}`)
      }
    }

    function xq(qq) {
      switch (qq) {
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
          throw new Error(`Invalid type '${qq}'`)
      }
    }

    function Aq(qq, Eq, gq, Yq, lq, Aq, cq, uq) {
      const Bq = new Array(Yq),
        Wq = new Array(Yq);
      if (qq instanceof Array) {
        let lq = Eq / 4;
        const Oq = gq / 4;
        for (let Eq = 0; Eq < Aq; Eq += Yq) {
          for (let Eq = 0; Eq < Yq; Eq++) Bq[Eq] = Wq[Eq] = qq[lq + Eq];
          uq(Wq, Eq);
          for (let Eq = 0; Eq < Yq; Eq++) Bq[Eq] !== Wq[Eq] && (qq[lq + Eq] = Wq[Eq]);
          lq += Oq
        }
      } else {
        const Nq = ArrayBuffer.isView(qq) ? new DataView(qq.buffer, qq.byteOffset, qq.byteLength) : new DataView(qq),
          aq = xq(lq);
        for (let qq = 0; qq < Aq; qq += Yq) {
          for (let qq = 0, gq = Eq; qq < Yq; qq++, gq += aq) Bq[qq] = Wq[qq] = Oq(Nq, lq, gq, cq);
          uq(Wq, qq);
          for (let qq = 0, gq = Eq; qq < Yq; qq++, gq += aq) Bq[qq] !== Wq[qq] && mq(Nq, lq, gq, cq, Wq[qq]);
          Eq += gq
        }
      }
    }

    function cq(qq, Eq, gq, lq, Oq, mq, cq, uq) {
      const Bq = Eq * xq(gq),
        Wq = cq * Eq;
      if (5126 !== gq || Oq !== Bq) {
        const Yq = new Float32Array(Wq);
        return Aq(qq, lq, Oq, Eq, gq, Wq, mq, ((qq, gq) => {
          for (let lq = 0; lq < Eq; lq++) Yq[gq + lq] = qq[lq]
        })), Yq
      }
      if (!(qq instanceof Array || qq instanceof Float32Array) || 0 !== lq || qq.length !== Wq) {
        if (qq instanceof Array) {
          const Eq = lq / 4;
          return qq.slice(Eq, Eq + Wq)
        }
        if (ArrayBuffer.isView(qq)) {
          const Eq = qq.byteOffset + lq;
          return 0 !== (3 & Eq) && (Yq.b.Warn("Float array must be aligned to 4-bytes border"), uq = !0), uq ? new Float32Array(qq.buffer.slice(Eq, Eq + Wq * Float32Array.BYTES_PER_ELEMENT)) : new Float32Array(qq.buffer, Eq, Wq)
        }
        return new Float32Array(qq, lq, Wq)
      }
      return uq ? qq.slice() : qq
    }

    function uq(qq, Eq, gq, lq, Oq, mq, cq) {
      const uq = xq(gq),
        Bq = function(qq) {
          switch (qq) {
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
              throw new Error(`Invalid component type '${qq}'`)
          }
        }(gq),
        Wq = mq * Eq;
      if (Array.isArray(qq)) {
        if (0 !== (3 & lq) || 0 !== (3 & Oq)) throw new Error("byteOffset and byteStride must be a multiple of 4 for number[] data.");
        const Yq = lq / 4,
          xq = Oq / 4;
        if (Yq + (mq - 1) * xq + Eq > qq.length) throw new Error("Last accessed index is out of bounds.");
        if (xq < Eq) throw new Error("Data stride cannot be smaller than the component size.");
        if (xq !== Eq) {
          const Yq = new Bq(Wq);
          return Aq(qq, lq, Oq, Eq, gq, Wq, !1, ((qq, gq) => {
            for (let lq = 0; lq < Eq; lq++) Yq[gq + lq] = qq[lq]
          })), Yq
        }
        return new Bq(qq.slice(Yq, Yq + Wq))
      }
      let Nq, aq = lq;
      ArrayBuffer.isView(qq) ? (Nq = qq.buffer, aq += qq.byteOffset) : Nq = qq;
      if (aq + (mq - 1) * Oq + Eq * uq > Nq.byteLength) throw new Error("Last accessed byte is out of bounds.");
      const Vq = Eq * uq;
      if (Oq < Vq) throw new Error("Byte stride cannot be smaller than the component's byte size.");
      if (Oq !== Vq) {
        const qq = new Bq(Wq),
          gq = new Uint8Array(Nq, aq),
          Yq = new Uint8Array(qq.buffer),
          lq = Eq * uq;
        for (let Eq = 0, xq = 0, Aq = 0; Eq < mq; Eq++, xq += Oq, Aq += lq) Yq.set(gq.subarray(xq, xq + lq), Aq);
        return qq
      }
      return 1 !== uq && 0 !== (aq & uq - 1) && (Yq.b.Warn("Array must be aligned to border of element size. Data will be copied."), cq = !0), cq ? new Bq(Nq.slice(aq, aq + Wq * uq)) : new Bq(Nq, aq, Wq)
    }

    function Bq(qq, Eq, gq, lq, Oq, mq, cq, uq) {
      const Bq = Eq * xq(gq),
        Wq = cq * Eq;
      if (uq.length !== Wq) throw new Error("Output length is not valid");
      if (5126 === gq && Oq === Bq)
        if (qq instanceof Array) {
          const Eq = lq / 4;
          uq.set(qq, Eq)
        } else if (ArrayBuffer.isView(qq)) {
        const Eq = qq.byteOffset + lq;
        if (0 !== (3 & Eq)) return Yq.b.Warn("Float array must be aligned to 4-bytes border"), void uq.set(new Float32Array(qq.buffer.slice(Eq, Eq + Wq * Float32Array.BYTES_PER_ELEMENT)));
        const gq = new Float32Array(qq.buffer, Eq, Wq);
        uq.set(gq)
      } else {
        const Eq = new Float32Array(qq, lq, Wq);
        uq.set(Eq)
      } else Aq(qq, lq, Oq, Eq, gq, Wq, mq, ((qq, gq) => {
        for (let Yq = 0; Yq < Eq; Yq++) uq[gq + Yq] = qq[Yq]
      }))
    }

    function Wq(qq, Eq) {
      let gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        Yq = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
      if (Array.isArray(qq)) {
        for (let lq = 0; lq < Eq; lq++)
          if (qq[gq + lq] - Yq > 65535) return !0;
        return !1
      }
      return 4 === qq.BYTES_PER_ELEMENT
    }

    function Nq(qq) {
      const Eq = qq.buffer;
      if (Eq instanceof ArrayBuffer) return qq;
      const gq = new ArrayBuffer(qq.byteLength);
      return new Uint8Array(gq).set(new Uint8Array(Eq, qq.byteOffset, qq.byteLength)), gq
    }
  },
  39640: (qq, Eq, gq) => {
    gq.d(Eq, {
      d: () => rq,
      f: () => yq,
      k: () => tq,
      g: () => fq,
      n: () => Mq
    });
    class Yq {
      constructor() {
        this.children = []
      }
      isValid(qq) {
        return !0
      }
      process(qq, Eq, gq) {
        let Yq = "";
        if (this.line) {
          let gq = this.line;
          const lq = Eq.processor;
          if (lq) {
            lq.lineProcessor && (gq = lq.lineProcessor(gq, Eq.isFragment, Eq.processingContext));
            const Yq = Eq.processor?.attributeKeywordName ?? "attribute",
              Oq = Eq.isFragment && Eq.processor?.varyingFragmentKeywordName ? Eq.processor?.varyingFragmentKeywordName : !Eq.isFragment && Eq.processor?.varyingVertexKeywordName ? Eq.processor?.varyingVertexKeywordName : "varying";
            if (!Eq.isFragment && lq.attributeProcessor && this.line.startsWith(Yq)) gq = lq.attributeProcessor(this.line, qq, Eq.processingContext);
            else if (lq.varyingProcessor && (lq.varyingCheck?.(this.line, Eq.isFragment) || !lq.varyingCheck && this.line.startsWith(Oq))) gq = lq.varyingProcessor(this.line, Eq.isFragment, qq, Eq.processingContext);
            else if (lq.uniformProcessor && lq.uniformRegexp && lq.uniformRegexp.test(this.line)) Eq.lookForClosingBracketForUniformBuffer || (gq = lq.uniformProcessor(this.line, Eq.isFragment, qq, Eq.processingContext));
            else if (lq.uniformBufferProcessor && lq.uniformBufferRegexp && lq.uniformBufferRegexp.test(this.line)) Eq.lookForClosingBracketForUniformBuffer || (gq = lq.uniformBufferProcessor(this.line, Eq.isFragment, Eq.processingContext), Eq.lookForClosingBracketForUniformBuffer = !0);
            else if (lq.textureProcessor && lq.textureRegexp && lq.textureRegexp.test(this.line)) gq = lq.textureProcessor(this.line, Eq.isFragment, qq, Eq.processingContext);
            else if ((lq.uniformProcessor || lq.uniformBufferProcessor) && this.line.startsWith("uniform") && !Eq.lookForClosingBracketForUniformBuffer) {
              /uniform\s+(?:(?:highp)?|(?:lowp)?)\s*(\S+)\s+(\S+)\s*;/.test(this.line) ? lq.uniformProcessor && (gq = lq.uniformProcessor(this.line, Eq.isFragment, qq, Eq.processingContext)) : lq.uniformBufferProcessor && (gq = lq.uniformBufferProcessor(this.line, Eq.isFragment, Eq.processingContext), Eq.lookForClosingBracketForUniformBuffer = !0)
            }
            Eq.lookForClosingBracketForUniformBuffer && -1 !== this.line.indexOf("}") && (Eq.lookForClosingBracketForUniformBuffer = !1, lq.endOfUniformBufferProcessor && (gq = lq.endOfUniformBufferProcessor(this.line, Eq.isFragment, Eq.processingContext)))
          }
          Yq += gq + "\n"
        }
        for (const lq of this.children) Yq += lq.process(qq, Eq, gq);
        return this.additionalDefineKey && (qq[this.additionalDefineKey] = this.additionalDefineValue || "true", gq[this.additionalDefineKey] = qq[this.additionalDefineKey]), Yq
      }
    }
    class lq {
      constructor() {
        this._lines = []
      }
      get currentLine() {
        return this._lines[this.lineIndex]
      }
      get canRead() {
        return this.lineIndex < this._lines.length - 1
      }
      set lines(qq) {
        this._lines.length = 0;
        for (const Eq of qq) {
          if (!Eq || "\r" === Eq) continue;
          if ("#" === Eq[0]) {
            this._lines.push(Eq);
            continue
          }
          const qq = Eq.trim();
          if (!qq) continue;
          if (qq.startsWith("//")) {
            this._lines.push(Eq);
            continue
          }
          const gq = qq.indexOf(";");
          if (-1 === gq) this._lines.push(qq);
          else if (gq === qq.length - 1) qq.length > 1 && this._lines.push(qq);
          else {
            const qq = Eq.split(";");
            for (let Eq = 0; Eq < qq.length; Eq++) {
              let gq = qq[Eq];
              gq && (gq = gq.trim(), gq && this._lines.push(gq + (Eq !== qq.length - 1 ? ";" : "")))
            }
          }
        }
      }
    }
    class Oq extends Yq {
      process(qq, Eq, gq) {
        for (let Yq = 0; Yq < this.children.length; Yq++) {
          const lq = this.children[Yq];
          if (lq.isValid(qq)) return lq.process(qq, Eq, gq)
        }
        return ""
      }
    }
    class mq extends Yq {
      isValid(qq) {
        return this.testExpression.isTrue(qq)
      }
    }
    class xq {
      isTrue(qq) {
        return !0
      }
      static postfixToInfix(qq) {
        const Eq = [];
        for (const gq of qq)
          if (void 0 === xq._OperatorPriority[gq]) Eq.push(gq);
          else {
            const qq = Eq[Eq.length - 1],
              Yq = Eq[Eq.length - 2];
            Eq.length -= 2, Eq.push(`(${Yq}${gq}${qq})`)
          } return Eq[Eq.length - 1]
      }
      static infixToPostfix(qq) {
        const Eq = xq._InfixToPostfixCache.get(qq);
        if (Eq) return Eq.accessTime = Date.now(), Eq.result;
        if (!qq.includes("&&") && !qq.includes("||") && !qq.includes(")") && !qq.includes("(")) return [qq];
        const gq = [];
        let Yq = -1;
        const lq = () => {
            uq = uq.trim(), "" !== uq && (gq.push(uq), uq = "")
          },
          Oq = qq => {
            Yq < xq._Stack.length - 1 && (xq._Stack[++Yq] = qq)
          },
          mq = () => xq._Stack[Yq],
          Aq = () => -1 === Yq ? "!!INVALID EXPRESSION!!" : xq._Stack[Yq--];
        let cq = 0,
          uq = "";
        for (; cq < qq.length;) {
          const Eq = qq.charAt(cq),
            Bq = cq < qq.length - 1 ? qq.substring(cq, 2 + cq) : "";
          if ("(" === Eq) uq = "", Oq(Eq);
          else if (")" === Eq) {
            for (lq(); - 1 !== Yq && "(" !== mq();) gq.push(Aq());
            Aq()
          } else if (xq._OperatorPriority[Bq] > 1) {
            for (lq(); - 1 !== Yq && xq._OperatorPriority[mq()] >= xq._OperatorPriority[Bq];) gq.push(Aq());
            Oq(Bq), cq++
          } else uq += Eq;
          cq++
        }
        for (lq(); - 1 !== Yq;) "(" === mq() ? Aq() : gq.push(Aq());
        return xq._InfixToPostfixCache.size >= xq.InfixToPostfixCacheLimitSize && xq.ClearCache(), xq._InfixToPostfixCache.set(qq, {
          result: gq,
          accessTime: Date.now()
        }), gq
      }
      static ClearCache() {
        const qq = Array.from(xq._InfixToPostfixCache.entries()).sort(((qq, Eq) => qq[1].accessTime - Eq[1].accessTime));
        for (let Eq = 0; Eq < xq.InfixToPostfixCacheCleanupSize; Eq++) xq._InfixToPostfixCache.delete(qq[Eq][0])
      }
    }
    xq.InfixToPostfixCacheLimitSize = 5e4, xq.InfixToPostfixCacheCleanupSize = 25e3, xq._InfixToPostfixCache = new Map, xq._OperatorPriority = {
      ")": 0,
      "(": 1,
      "||": 2,
      "&&": 3
    }, xq._Stack = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];
    class Aq extends xq {
      constructor(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        super(), this.define = qq, this.not = Eq
      }
      isTrue(qq) {
        let Eq = void 0 !== qq[this.define];
        return this.not && (Eq = !Eq), Eq
      }
    }
    class cq extends xq {
      isTrue(qq) {
        return this.leftOperand.isTrue(qq) || this.rightOperand.isTrue(qq)
      }
    }
    class uq extends xq {
      isTrue(qq) {
        return this.leftOperand.isTrue(qq) && this.rightOperand.isTrue(qq)
      }
    }
    class Bq extends xq {
      constructor(qq, Eq, gq) {
        super(), this.define = qq, this.operand = Eq, this.testValue = gq
      }
      toString() {
        return `${this.define} ${this.operand} ${this.testValue}`
      }
      isTrue(qq) {
        let Eq = !1;
        const gq = parseInt(void 0 != qq[this.define] ? qq[this.define] : this.define),
          Yq = parseInt(void 0 != qq[this.testValue] ? qq[this.testValue] : this.testValue);
        if (isNaN(gq) || isNaN(Yq)) return !1;
        switch (this.operand) {
          case ">":
            Eq = gq > Yq;
            break;
          case "<":
            Eq = gq < Yq;
            break;
          case "<=":
            Eq = gq <= Yq;
            break;
          case ">=":
            Eq = gq >= Yq;
            break;
          case "==":
            Eq = gq === Yq;
            break;
          case "!=":
            Eq = gq !== Yq
        }
        return Eq
      }
    }
    var Wq = gq(39636),
      Nq = gq(39630);
    const aq = /defined\s*?\((.+?)\)/g,
      Vq = /defined\s*?\[(.+?)\]/g,
      dq = /#include\s?<(.+)>(\((.*)\))*(\[(.*)\])*/g,
      jq = /__decl__/,
      Hq = /light\{X\}.(\w*)/g,
      oq = /\{X\}/g,
      Pq = [],
      Qq = /(#ifdef)|(#else)|(#elif)|(#endif)|(#ifndef)|(#if)/;

    function yq(qq) {
      qq.processor && qq.processor.initializeShaders && qq.processor.initializeShaders(qq.processingContext)
    }

    function tq(qq, Eq, gq, Yq) {
      Eq.processor?.preProcessShaderCode && (qq = Eq.processor.preProcessShaderCode(qq, Eq.isFragment)), fq(qq, Eq, (qq => {
        Eq.processCodeAfterIncludes && (qq = Eq.processCodeAfterIncludes(Eq.isFragment ? "fragment" : "vertex", qq, Eq.defines));
        const lq = function(qq, Eq, gq) {
          let Yq = function(qq, Eq) {
            if (Eq.processor?.noPrecision) return qq;
            const gq = Eq.shouldUseHighPrecisionShader; - 1 === qq.indexOf("precision highp float") ? qq = gq ? "precision highp float;\n" + qq : "precision mediump float;\n" + qq : gq || (qq = qq.replace("precision highp float", "precision mediump float"));
            return qq
          }(qq, Eq);
          if (!Eq.processor) return Yq;
          if (0 === Eq.processor.shaderLanguage && -1 !== Yq.indexOf("#version 3") && (Yq = Yq.replace("#version 300 es", ""), !Eq.processor.parseGLES3)) return Yq;
          const lq = Eq.defines,
            Oq = Zq(Eq, gq);
          Eq.processor.preProcessor && (Yq = Eq.processor.preProcessor(Yq, lq, Oq, Eq.isFragment, Eq.processingContext));
          const mq = {};
          Yq = iq(Yq, Oq, Eq, mq), Eq.processor.postProcessor && (Yq = Eq.processor.postProcessor(Yq, lq, Eq.isFragment, Eq.processingContext, gq ? {
            drawBuffersExtensionDisabled: !gq.getCaps().drawBuffersExtension
          } : {}, Oq, mq));
          gq?._features.needShaderCodeInlining && (Yq = gq.inlineShaderCode(Yq));
          return Yq
        }(qq, Eq, Yq);
        gq(lq, qq)
      }))
    }

    function rq(qq, Eq, gq) {
      return gq.processor && gq.processor.finalizeShaders ? gq.processor.finalizeShaders(qq, Eq, gq.processingContext) : {
        vertexCode: qq,
        fragmentCode: Eq
      }
    }

    function vq(qq) {
      const Eq = /defined\((.+)\)/.exec(qq);
      if (Eq && Eq.length) return new Aq(Eq[1].trim(), "!" === qq[0]);
      const gq = ["==", "!=", ">=", "<=", "<", ">"];
      let Yq = "",
        lq = 0;
      for (Yq of gq)
        if (lq = qq.indexOf(Yq), lq > -1) break;
      if (-1 === lq) return new Aq(qq);
      const Oq = qq.substring(0, lq).trim(),
        mq = qq.substring(lq + Yq.length).trim();
      return new Bq(Oq, Yq, mq)
    }

    function hq(qq, Eq) {
      const gq = new mq,
        Yq = qq.substring(0, Eq);
      let lq = qq.substring(Eq);
      return lq = lq.substring(0, (lq.indexOf("//") + 1 || lq.length + 1) - 1).trim(), gq.testExpression = "#ifdef" === Yq ? new Aq(lq) : "#ifndef" === Yq ? new Aq(lq, !0) : function(qq) {
        qq = qq.replace(aq, "defined[$1]");
        const Eq = xq.infixToPostfix(qq),
          gq = [];
        for (const lq of Eq)
          if ("||" !== lq && "&&" !== lq) gq.push(lq);
          else if (gq.length >= 2) {
          let qq = gq[gq.length - 1],
            Eq = gq[gq.length - 2];
          gq.length -= 2;
          const Yq = "&&" == lq ? new uq : new cq;
          "string" === typeof qq && (qq = qq.replace(Vq, "defined($1)")), "string" === typeof Eq && (Eq = Eq.replace(Vq, "defined($1)")), Yq.leftOperand = "string" === typeof Eq ? vq(Eq) : Eq, Yq.rightOperand = "string" === typeof qq ? vq(qq) : qq, gq.push(Yq)
        }
        let Yq = gq[gq.length - 1];
        return "string" === typeof Yq && (Yq = Yq.replace(Vq, "defined($1)")), "string" === typeof Yq ? vq(Yq) : Yq
      }(lq), gq
    }

    function nq(qq, Eq, gq, lq) {
      let Oq;
      for (; bq(qq, gq, lq);) {
        Oq = qq.currentLine;
        const mq = Oq.substring(0, 5).toLowerCase();
        if ("#else" === mq) {
          const gq = new Yq;
          return Eq.children.push(gq), void bq(qq, gq, lq)
        }
        if ("#elif" === mq) {
          const qq = hq(Oq, 5);
          Eq.children.push(qq), gq = qq
        }
      }
    }

    function bq(qq, Eq, gq) {
      for (; qq.canRead;) {
        qq.lineIndex++;
        const lq = qq.currentLine;
        if (lq.indexOf("#") >= 0) {
          const Yq = Qq.exec(lq);
          if (Yq && Yq.length) {
            switch (Yq[0]) {
              case "#ifdef": {
                const Yq = new Oq;
                Eq.children.push(Yq);
                const mq = hq(lq, 6);
                Yq.children.push(mq), nq(qq, Yq, mq, gq);
                break
              }
              case "#else":
              case "#elif":
                return !0;
              case "#endif":
                return !1;
              case "#ifndef": {
                const Yq = new Oq;
                Eq.children.push(Yq);
                const mq = hq(lq, 7);
                Yq.children.push(mq), nq(qq, Yq, mq, gq);
                break
              }
              case "#if": {
                const Yq = new Oq,
                  mq = hq(lq, 3);
                Eq.children.push(Yq), Yq.children.push(mq), nq(qq, Yq, mq, gq);
                break
              }
            }
            continue
          }
        }
        const mq = new Yq;
        if (mq.line = lq, Eq.children.push(mq), "#" === lq[0] && "d" === lq[1]) {
          const qq = lq.replace(";", "").split(" ");
          mq.additionalDefineKey = qq[1], 3 === qq.length && (mq.additionalDefineValue = qq[2])
        }
      }
      return !1
    }

    function iq(qq, Eq, gq, Oq) {
      const mq = new Yq,
        xq = new lq;
      return xq.lineIndex = -1, xq.lines = qq.split("\n"), bq(xq, mq, Oq), mq.process(Eq, gq, Oq)
    }

    function Zq(qq, Eq) {
      const gq = qq.defines,
        Yq = {};
      for (const lq of gq) {
        const qq = lq.replace("#define", "").replace(";", "").trim().split(" ");
        Yq[qq[0]] = qq.length > 1 ? qq[1] : ""
      }
      return 0 === qq.processor?.shaderLanguage && (Yq.GL_ES = "true"), Yq.__VERSION__ = qq.version, Yq[qq.platformName] = "true", (0, Nq.i)(Yq, Eq?.isNDCHalfZRange, Eq?.vYq, Eq?.useExactSrgbConversions), Yq
    }

    function fq(qq, Eq, gq) {
      let Yq;
      for (Pq.length = 0; null !== (Yq = dq.exec(qq));) Pq.push(Yq);
      let lq = [qq],
        Oq = !1;
      for (const xq of Pq) {
        let qq = xq[1];
        if (-1 !== qq.indexOf("__decl__") && (qq = qq.replace(jq, ""), Eq.supportsUniformBuffers && (qq = qq.replace("Vertex", "Ubo").replace("Fragment", "Ubo")), qq += "Declaration"), !Eq.includesShadersStore[qq]) {
          const Yq = Eq.shadersRepository + "ShadersInclude/" + qq + ".fx";
          return void Mq.loadFile(Yq, (Yq => {
            Eq.includesShadersStore[qq] = Yq, fq(lq.join(""), Eq, gq)
          }))
        } {
          let gq = Eq.includesShadersStore[qq];
          if (xq[2]) {
            const qq = xq[3].split(",");
            for (let Eq = 0; Eq < qq.length; Eq += 2) {
              const Yq = new RegExp(qq[Eq], "g"),
                lq = qq[Eq + 1];
              gq = gq.replace(Yq, lq)
            }
          }
          if (xq[4]) {
            const qq = xq[5];
            if (-1 !== qq.indexOf("..")) {
              const Yq = qq.split(".."),
                lq = parseInt(Yq[0]);
              let Oq = parseInt(Yq[1]),
                mq = gq.slice(0);
              gq = "", isNaN(Oq) && (Oq = Eq.indexParameters[Yq[1]]);
              for (let qq = lq; qq < Oq; qq++) Eq.supportsUniformBuffers || (mq = mq.replace(Hq, ((qq, Eq) => Eq + "{X}"))), gq += mq.replace(oq, qq.toString()) + "\n"
            } else Eq.supportsUniformBuffers || (gq = gq.replace(Hq, ((qq, Eq) => Eq + "{X}"))), gq = gq.replace(oq, qq)
          }
          const Yq = [];
          for (const qq of lq) {
            const Eq = qq.split(xq[0]);
            for (let qq = 0; qq < Eq.length - 1; qq++) Yq.push(Eq[qq]), Yq.push(gq);
            Yq.push(Eq[Eq.length - 1])
          }
          lq = Yq, Oq = Oq || gq.indexOf("#include<") >= 0 || gq.indexOf("#include <") >= 0
        }
      }
      Pq.length = 0;
      const mq = lq.join("");
      Oq ? fq(mq.toString(), Eq, gq) : gq(mq)
    }
    const Mq = {
      loadFile: (qq, Eq, gq, Yq, lq, Oq) => {
        throw (0, Wq.m)("FileTools")
      }
    }
  },
  39630: (qq, Eq, gq) => {
    gq.d(Eq, {
      e: () => lq,
      h: () => Oq,
      i: () => xq,
      m: () => mq,
      p: () => Aq
    });
    var Yq = gq(39636);
    const lq = {};

    function Oq(qq, Eq) {
      return (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "") + (Eq ? Eq + "\n" : "") + qq
    }

    function mq(qq, Eq, gq, Oq, mq, xq, Aq) {
      const cq = Aq || lq.loadFile;
      if (!cq) throw (0, Yq.m)("FileTools");
      return cq(qq, Eq, gq, Oq, mq, xq)
    }

    function xq(qq, Eq, gq, Yq) {
      if (qq) return Eq ? qq.IS_NDC_HALF_ZRANGE = "" : delete qq.IS_NDC_HALF_ZRANGE, gq ? qq.USE_REVERSE_DEPTHBUFFER = "" : delete qq.USE_REVERSE_DEPTHBUFFER, void(Yq ? qq.USE_EXACT_SRGB_CONVERSIONS = "" : delete qq.USE_EXACT_SRGB_CONVERSIONS);
      {
        let qq = "";
        return Eq && (qq += "#define IS_NDC_HALF_ZRANGE"), gq && (qq && (qq += "\n"), qq += "#define USE_REVERSE_DEPTHBUFFER"), Yq && (qq && (qq += "\n"), qq += "#define USE_EXACT_SRGB_CONVERSIONS"), qq
      }
    }

    function Aq(qq, Eq) {
      let gq = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        Yq = arguments.length > 3 ? arguments[3] : void 0;
      switch (qq) {
        case 3: {
          const qq = new Int8Array(Eq);
          return Yq && qq.set(new Int8Array(Yq)), qq
        }
        case 0: {
          const qq = new Uint8Array(Eq);
          return Yq && qq.set(new Uint8Array(Yq)), qq
        }
        case 4: {
          const qq = "number" !== typeof Eq ? new Int16Array(Eq) : new Int16Array(gq ? Eq / 2 : Eq);
          return Yq && qq.set(new Int16Array(Yq)), qq
        }
        case 5:
        case 8:
        case 9:
        case 10:
        case 2: {
          const qq = "number" !== typeof Eq ? new Uint16Array(Eq) : new Uint16Array(gq ? Eq / 2 : Eq);
          return Yq && qq.set(new Uint16Array(Yq)), qq
        }
        case 6: {
          const qq = "number" !== typeof Eq ? new Int32Array(Eq) : new Int32Array(gq ? Eq / 4 : Eq);
          return Yq && qq.set(new Int32Array(Yq)), qq
        }
        case 7:
        case 11:
        case 12:
        case 13:
        case 14:
        case 15: {
          const qq = "number" !== typeof Eq ? new Uint32Array(Eq) : new Uint32Array(gq ? Eq / 4 : Eq);
          return Yq && qq.set(new Uint32Array(Yq)), qq
        }
        case 1: {
          const qq = "number" !== typeof Eq ? new Float32Array(Eq) : new Float32Array(gq ? Eq / 4 : Eq);
          return Yq && qq.set(new Float32Array(Yq)), qq
        }
      }
      const lq = new Uint8Array(Eq);
      return Yq && lq.set(new Uint8Array(Yq)), lq
    }
  },
  39636: (qq, Eq, gq) => {
    gq.d(Eq, {
      b: () => cq,
      e: () => uq,
      i: () => Aq,
      m: () => lq
    });
    const Yq = {};

    function lq(qq) {
      if (!(arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) || !Yq[qq]) return Yq[qq] = !0, `${qq} needs to be imported before as it contains a side-effect required by your code.`
    }
    const Oq = {};
    let mq = !1,
      xq = 0;

    function Aq(qq, Eq) {
      let gq = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      const Yq = function() {
        if ((gq || mq) && 0 === xq) {
          const gq = `${qq}.${Eq}`;
          Oq[gq] || (Oq[gq] = !0, console.warn(`[Babylon.js] ${gq}() requires a side-effect import. See: https://doc.babylonjs.com/setup/treeshaking`))
        }
      };
      return Yq.__isSideEffectStub = !0, Yq
    }

    function cq(qq) {
      return !!qq && !qq.__isSideEffectStub
    }

    function uq(qq, Eq) {
      return {
        get() {},
        set(qq) {
          Object.defineProperty(this, Eq, {
            value: qq,
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
  39626: (qq, Eq, gq) => {
    function Yq() {
      return "undefined" !== typeof window
    }

    function lq() {
      return "undefined" !== typeof navigator
    }

    function Oq() {
      return "undefined" !== typeof document
    }

    function mq(qq) {
      let Eq = "",
        gq = qq.firstChild;
      for (; gq;) 3 === gq.nodeType && (Eq += gq.textContent), gq = gq.nextSibling;
      return Eq
    }
    gq.d(Eq, {
      b: () => mq,
      f: () => Oq,
      j: () => lq,
      n: () => Yq
    })
  },
  39805: (qq, Eq, gq) => {
    gq.d(Eq, {
      e: () => Yq,
      f: () => lq,
      h: () => Oq
    });
    class Yq extends Error {}
    Yq._setPrototypeOf = Object.setPrototypeOf || ((qq, Eq) => (qq.__proto__ = Eq, qq));
    const lq = {
      MeshInvalidPositionsError: 0,
      UnsupportedTextureError: 1e3,
      GLTFLoaderUnexpectedMagicError: 2e3,
      SceneLoaderError: 3e3,
      LoadFileError: 4e3,
      RequestFileError: 4001,
      ReadFileError: 4002
    };
    class Oq extends Yq {
      constructor(qq, Eq, gq) {
        super(qq), this.errorCode = Eq, this.innerError = gq, this.name = "RuntimeError", Yq._setPrototypeOf(this, Oq.prototype)
      }
    }
  },
  39799: (qq, Eq, gq) => {
    gq.d(Eq, {
      e: () => Zq,
      i: () => oq,
      m: () => hq,
      q: () => bq,
      u: () => rq,
      x: () => yq,
      z: () => tq,
      D: () => Sq,
      F: () => vq,
      J: () => Pq
    });
    var Yq = gq(39801),
      lq = gq(39626),
      Oq = gq(37156);
    class mq {}
    mq.FilesToLoad = {};
    var xq = gq(39805),
      Aq = gq(39810),
      cq = gq(37153),
      uq = gq(39630),
      Bq = gq(39640),
      Wq = gq(38653),
      Nq = gq(39644),
      aq = gq(39817);
    const Vq = new RegExp(/^data:([^,]+\/[^,]+)?;base64,/i);
    class dq extends xq.h {
      constructor(qq, Eq) {
        super(qq, xq.f.LoadFileError), this.name = "LoadFileError", xq.e._setPrototypeOf(this, dq.prototype), Eq instanceof Yq.e ? this.request = Eq : this.file = Eq
      }
    }
    class jq extends xq.h {
      constructor(qq, Eq) {
        super(qq, xq.f.RequestFileError), this.request = Eq, this.name = "RequestFileError", xq.e._setPrototypeOf(this, jq.prototype)
      }
    }
    class Hq extends xq.h {
      constructor(qq, Eq) {
        super(qq, xq.f.ReadFileError), this.file = Eq, this.name = "ReadFileError", xq.e._setPrototypeOf(this, Hq.prototype)
      }
    }
    const oq = {
        DefaultRetryStrategy: class {
          static ExponentialBackoff() {
            let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 3,
              Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 500;
            return (gq, Yq, lq) => 0 !== Yq.status || lq >= qq || -1 !== gq.indexOf("file:") ? -1 : Math.pow(2, lq) * Eq
          }
        }.ExponentialBackoff(),
        BaseUrl: "",
        CorsBehavior: "anonymous",
        PreprocessUrl: qq => qq,
        ScriptBaseUrl: "",
        ScriptPreprocessUrl: qq => qq,
        CleanUrl: qq => qq = qq.replace(/#/gm, "%23")
      },
      Pq = (qq, Eq) => {
        if ((!qq || 0 !== qq.indexOf("data:")) && oq.CorsBehavior)
          if ("string" === typeof oq.CorsBehavior || oq.CorsBehavior instanceof String) Eq.crossOrigin = oq.CorsBehavior;
          else {
            const gq = oq.CorsBehavior(qq);
            gq && (Eq.crossOrigin = gq)
          }
      },
      Qq = {
        getRequiredSize: null
      },
      yq = function(qq, Eq, gq, lq) {
        let Oq, xq = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "",
          uq = arguments.length > 5 ? arguments[5] : void 0,
          Bq = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : cq.b.LastCreatedEngine;
        if ("undefined" === typeof HTMLImageElement && !Bq?._features.forceBitmapOverHTMLImageElement) return gq("LoadImage is only supported in web or BabylonNative environments."), null;
        if (Bq?._features.forceBitmapOverHTMLImageElement && "string" !== typeof qq && "undefined" !== typeof Blob) {
          let Yq;
          if (qq instanceof Blob) Yq = qq;
          else {
            const Eq = qq instanceof ArrayBuffer ? qq : (0, aq.l)(qq);
            Yq = new Blob([Eq], {
              type: xq
            })
          }
          return Bq.createImageBitmap(Yq, {
            premultiplyAlpha: "none",
            colorSpaceConversion: "none",
            ...uq
          }).then(Eq).catch((Eq => {
            gq && gq("Error while trying to load image: " + qq, Eq)
          })), null
        }
        let Wq = !1;
        if (qq instanceof ArrayBuffer || ArrayBuffer.isView(qq))
          if ("undefined" !== typeof Blob && "undefined" !== typeof URL) {
            let Eq;
            Eq = qq instanceof ArrayBuffer ? qq : (0, aq.l)(qq), Oq = URL.createObjectURL(new Blob([Eq], {
              type: xq
            })), Wq = !0
          } else Oq = `data:${xq};base64,` + (0, Aq.f)(qq);
        else qq instanceof Blob ? (Oq = URL.createObjectURL(qq), Wq = !0) : (Oq = oq.CleanUrl(qq), Oq = oq.PreprocessUrl(Oq));
        const Nq = Eq => {
          if (gq) {
            const Yq = Oq || qq.toString();
            gq(`Error while trying to load image: ${0===Yq.indexOf("http")||Yq.length<=128?Yq:Yq.slice(0,128)+"..."}`, Eq)
          }
        };
        if (Bq?._features.forceBitmapOverHTMLImageElement) return rq(Oq, (Yq => {
          Bq.createImageBitmap(new Blob([Yq], {
            type: xq
          }), {
            premultiplyAlpha: "none",
            colorSpaceConversion: "none",
            ...uq
          }).then((qq => {
            Eq(qq), Wq && URL.revokeObjectURL(Oq)
          })).catch((Eq => {
            gq && gq("Error while trying to load image: " + qq, Eq)
          }))
        }), void 0, lq || void 0, !0, ((qq, Eq) => {
          Nq(Eq)
        })), null;
        const Vq = new Image;
        if (Qq.getRequiredSize) {
          const Eq = Qq.getRequiredSize(qq);
          Eq.width && (Vq.width = Eq.width), Eq.height && (Vq.height = Eq.height)
        }
        Pq(Oq, Vq);
        const dq = [],
          jq = () => {
            for (const qq of dq) qq.target.removeEventListener(qq.name, qq.handler);
            dq.length = 0
          };
        dq.push({
          target: Vq,
          name: "load",
          handler: () => {
            jq(), Eq(Vq), Wq && Vq.src && URL.revokeObjectURL(Vq.src)
          }
        }), dq.push({
          target: Vq,
          name: "error",
          handler: qq => {
            jq(), Nq(qq), Wq && Vq.src && URL.revokeObjectURL(Vq.src)
          }
        }), dq.push({
          target: document,
          name: "securitypolicyviolation",
          handler: qq => {
            if (qq.blockedURI !== Vq.src || "SN" === qq.disposition) return;
            jq();
            const Eq = new Error(`CSP violation of policy ${qq.effectiveDirective} ${qq.blockedURI}. Current policy is ${qq.originalPolicy}`);
            cq.b.UseFallbackTexture = !1, Nq(Eq), Wq && Vq.src && URL.revokeObjectURL(Vq.src), Vq.src = ""
          }
        }), (() => {
          for (const qq of dq) qq.target.addEventListener(qq.name, qq.handler)
        })();
        const Hq = "blob:" === Oq.substring(0, 5),
          yq = "data:" === Oq.substring(0, 5),
          tq = () => {
            Hq || yq || !Yq.e.IsCustomRequestAvailable ? Vq.src = Oq : rq(Oq, ((qq, Eq, gq) => {
              const Yq = new Blob([qq], {
                  type: !xq && gq ? gq : xq
                }),
                lq = URL.createObjectURL(Yq);
              Wq = !0, Vq.src = lq
            }), void 0, lq || void 0, !0, ((qq, Eq) => {
              Nq(Eq)
            }))
          },
          vq = () => {
            lq && lq.loadImage(Oq, Vq)
          };
        if (!Hq && !yq && lq && lq.enableTexturesOffline) lq.open(vq, tq);
        else {
          if (-1 !== Oq.indexOf("file:")) {
            const qq = decodeURIComponent(Oq.substring(5).toLowerCase());
            if (mq.FilesToLoad[qq] && "undefined" !== typeof URL) {
              try {
                let Eq;
                try {
                  Eq = URL.createObjectURL(mq.FilesToLoad[qq])
                } catch (hq) {
                  Eq = URL.createObjectURL(mq.FilesToLoad[qq])
                }
                Vq.src = Eq, Wq = !0
              } catch (nq) {
                Vq.src = ""
              }
              return Vq
            }
          }
          tq()
        }
        return Vq
      },
      tq = (qq, Eq, gq, Yq, lq) => {
        const mq = new FileReader,
          xq = {
            onCompleteObservable: new Oq.d,
            abort: () => mq.abort()
          };
        return mq.onloadend = () => xq.onCompleteObservable.notifyObservers(xq), lq && (mq.onerror = () => {
          lq(new Hq(`Unable to read ${qq.name}`, qq))
        }), mq.onload = qq => {
          Eq(qq.target.result)
        }, gq && (mq.onprogress = gq), Yq ? mq.readAsArrayBuffer(qq) : mq.readAsText(qq), xq
      },
      rq = (qq, Eq, gq, Yq, lq, Aq, cq) => {
        if (qq.name) return tq(qq, Eq, gq, lq, Aq ? qq => {
          Aq(void 0, qq)
        } : void 0);
        const uq = qq;
        if (-1 !== uq.indexOf("file:")) {
          let qq = decodeURIComponent(uq.substring(5).toLowerCase());
          0 === qq.indexOf("./") && (qq = qq.substring(2));
          const Yq = mq.FilesToLoad[qq];
          if (Yq) return tq(Yq, Eq, gq, lq, Aq ? qq => Aq(void 0, new dq(qq.message, qq.file)) : void 0)
        }
        const {
          match: Bq,
          type: aq
        } = iq(uq);
        if (Bq) {
          const qq = {
            onCompleteObservable: new Oq.d,
            abort: () => () => {}
          };
          try {
            const qq = lq ? Zq(uq) : fq(uq);
            Eq(qq, void 0, aq)
          } catch (xq) {
            Aq ? Aq(void 0, xq) : Wq.b.Error(xq.message || "Failed to parse the Data URL")
          }
          return Nq.c.SetImmediate((() => {
            qq.onCompleteObservable.notifyObservers(qq)
          })), qq
        }
        return vq(uq, ((qq, gq) => {
          Eq(qq, gq?.responseURL, gq?.getResponseHeader("content-type"))
        }), gq, Yq, lq, Aq ? qq => {
          Aq(qq.request, new dq(qq.message, qq.request))
        } : void 0, cq)
      },
      vq = (qq, Eq, gq, mq, xq, Aq, uq) => {
        null !== mq && (mq ?? (mq = cq.b.LastCreatedScene?.offlineProvider)), qq = oq.CleanUrl(qq), qq = oq.PreprocessUrl(qq);
        const Bq = oq.BaseUrl + qq;
        let Nq = !1;
        const aq = {
            onCompleteObservable: new Oq.d,
            abort: () => Nq = !0
          },
          Vq = () => {
            let qq, Oq = new Yq.e,
              mq = null;
            const cq = () => {
              Oq && (gq && Oq.removeEventListener("progress", gq), qq && Oq.removeEventListener("readystatechange", qq), Oq.removeEventListener("loadend", Vq))
            };
            let Vq = () => {
              cq(), aq.onCompleteObservable.notifyObservers(aq), aq.onCompleteObservable.clear(), gq = void 0, qq = null, Vq = null, Aq = void 0, uq = void 0, Eq = void 0
            };
            aq.abort = () => {
              Nq = !0, Vq && Vq(), Oq && Oq.readyState !== (XMLHttpRequest.DONE || 4) && Oq.abort(), null !== mq && (clearTimeout(mq), mq = null), Oq = null
            };
            const dq = qq => {
                const Eq = qq.message || "Unknown error";
                Aq && Oq ? Aq(new jq(Eq, Oq)) : Wq.b.Error(Eq)
              },
              Hq = Wq => {
                if (Oq) {
                  if (Oq.open("GET", Bq), uq) try {
                    uq(Oq)
                  } catch (aq) {
                    return void dq(aq)
                  }
                  xq && (Oq.responseType = "arraybuffer"), gq && Oq.addEventListener("progress", gq), Vq && Oq.addEventListener("loadend", Vq), qq = () => {
                    if (!Nq && Oq && Oq.readyState === (XMLHttpRequest.DONE || 4)) {
                      if (qq && Oq.removeEventListener("readystatechange", qq), Oq.status >= 200 && Oq.status < 300 || 0 === Oq.status && (!(0, lq.n)() || nq())) {
                        const qq = xq ? Oq.response : Oq.responseText;
                        if (null !== qq) {
                          try {
                            Eq && Eq(qq, Oq)
                          } catch (aq) {
                            dq(aq)
                          }
                          return
                        }
                      }
                      const gq = oq.DefaultRetryStrategy;
                      if (gq) {
                        const qq = gq(Bq, Oq, Wq);
                        if (-1 !== qq) return cq(), Oq = new Yq.e, void(mq = setTimeout((() => Hq(Wq + 1)), qq))
                      }
                      const uq = new jq("Error status: " + Oq.status + " " + Oq.statusText + " - Unable to load " + Bq, Oq);
                      Aq && Aq(uq)
                    }
                  }, Oq.addEventListener("readystatechange", qq), Oq.send()
                }
              };
            Hq(0)
          };
        if (mq && mq.enableSceneOffline && !qq.startsWith("blob:")) {
          const Yq = qq => {
              qq && qq.status > 400 ? Aq && Aq(qq) : Vq()
            },
            lq = () => {
              mq && mq.loadFile(oq.BaseUrl + qq, (qq => {
                !Nq && Eq && Eq(qq), aq.onCompleteObservable.notifyObservers(aq)
              }), gq ? qq => {
                !Nq && gq && gq(qq)
              } : void 0, Yq, xq)
            };
          mq.open(lq, Yq)
        } else Vq();
        return aq
      },
      hq = qq => {
        const {
          match: Eq,
          type: gq
        } = iq(qq);
        if (Eq) return gq || void 0;
        const Yq = qq.lastIndexOf(".");
        switch (qq.substring(Yq + 1).toLowerCase()) {
          case "glb":
            return "model/gltf-binary";
          case "bin":
            return "application/octet-stream";
          case "QJ":
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
      nq = () => "undefined" !== typeof location && "file:" === location.protocol,
      bq = qq => Vq.test(qq),
      iq = qq => {
        const Eq = Vq.exec(qq);
        if (null === Eq || 0 === Eq.length) return {
          match: !1,
          type: ""
        };
        return {
          match: !0,
          type: Eq[0].replace("data:", "").replace(";base64,", "")
        }
      };

    function Zq(qq) {
      return (0, Aq.b)(qq.split(",")[1])
    }
    const fq = qq => (0, Aq.d)(qq.split(",")[1]);
    let Mq;
    const Tq = (qq, Eq, gq, Yq, lq, Oq, mq, xq, Aq, cq) => {
      Mq = {
        DecodeBase64UrlToBinary: qq,
        DecodeBase64UrlToString: Eq,
        DefaultRetryStrategy: gq.DefaultRetryStrategy,
        BaseUrl: gq.BaseUrl,
        CorsBehavior: gq.CorsBehavior,
        PreprocessUrl: gq.PreprocessUrl,
        IsBase64DataUrl: Yq,
        IsFileURL: lq,
        LoadFile: Oq,
        LoadImage: mq,
        ReadFile: xq,
        RequestFile: Aq,
        SetCorsBehavior: cq
      }, Object.defineProperty(Mq, "DefaultRetryStrategy", {
        get: function() {
          return gq.DefaultRetryStrategy
        },
        set: function(qq) {
          gq.DefaultRetryStrategy = qq
        }
      }), Object.defineProperty(Mq, "BaseUrl", {
        get: function() {
          return gq.BaseUrl
        },
        set: function(qq) {
          gq.BaseUrl = qq
        }
      }), Object.defineProperty(Mq, "PreprocessUrl", {
        get: function() {
          return gq.PreprocessUrl
        },
        set: function(qq) {
          gq.PreprocessUrl = qq
        }
      }), Object.defineProperty(Mq, "CorsBehavior", {
        get: function() {
          return gq.CorsBehavior
        },
        set: function(qq) {
          gq.CorsBehavior = qq
        }
      })
    };
    let zq = !1;

    function Sq() {
      zq || (zq = !0, Tq(Zq, fq, oq, bq, nq, rq, yq, tq, vq, Pq), uq.e.loadFile = rq, uq.e.loadImage = yq, Bq.n.loadFile = rq)
    }
  },
  39819: (qq, Eq, gq) => {
    gq.d(Eq, {
      e: () => xq,
      f: () => Oq,
      j: () => mq
    });
    let Yq = null;

    function lq() {
      if (Yq) return Yq;
      const qq = new ArrayBuffer(4),
        Eq = new Float32Array(qq),
        gq = new Uint32Array(qq),
        lq = new Uint32Array(512),
        Oq = new Uint32Array(512);
      for (let Yq = 0; Yq < 256; ++Yq) {
        const qq = Yq - 127;
        qq < -24 ? (lq[Yq] = 0, lq[256 | Yq] = 32768, Oq[Yq] = 24, Oq[256 | Yq] = 24) : qq < -14 ? (lq[Yq] = 1024 >> -qq - 14, lq[256 | Yq] = 1024 >> -qq - 14 | 32768, Oq[Yq] = -qq - 1, Oq[256 | Yq] = -qq - 1) : qq <= 15 ? (lq[Yq] = qq + 15 << 10, lq[256 | Yq] = qq + 15 << 10 | 32768, Oq[Yq] = 13, Oq[256 | Yq] = 13) : qq < 128 ? (lq[Yq] = 31744, lq[256 | Yq] = 64512, Oq[Yq] = 24, Oq[256 | Yq] = 24) : (lq[Yq] = 31744, lq[256 | Yq] = 64512, Oq[Yq] = 13, Oq[256 | Yq] = 13)
      }
      const mq = new Uint32Array(2048),
        xq = new Uint32Array(64),
        Aq = new Uint32Array(64);
      for (let Yq = 1; Yq < 1024; ++Yq) {
        let qq = Yq << 13,
          Eq = 0;
        for (; 0 === (8388608 & qq);) qq <<= 1, Eq -= 8388608;
        qq &= -8388609, Eq += 947912704, mq[Yq] = qq | Eq
      }
      for (let Yq = 1024; Yq < 2048; ++Yq) mq[Yq] = 939524096 + (Yq - 1024 << 13);
      for (let Yq = 1; Yq < 31; ++Yq) xq[Yq] = Yq << 23;
      xq[31] = 1199570944, xq[32] = 2147483648;
      for (let Yq = 33; Yq < 63; ++Yq) xq[Yq] = 2147483648 + (Yq - 32 << 23);
      xq[63] = 3347054592;
      for (let Yq = 1; Yq < 64; ++Yq) 32 !== Yq && (Aq[Yq] = 1024);
      return Yq = {
        floatView: Eq,
        uint32View: gq,
        baseTable: lq,
        shiftTable: Oq,
        mantissaTable: mq,
        exponentTable: xq,
        offsetTable: Aq
      }, Yq
    }
    const Oq = 65504;

    function mq(qq) {
      const Eq = lq();
      Eq.floatView[0] = qq;
      const gq = Eq.uint32View[0],
        Yq = gq >> 23 & 511;
      return Eq.baseTable[Yq] + ((8388607 & gq) >> Eq.shiftTable[Yq])
    }

    function xq(qq) {
      const Eq = lq();
      return Eq.uint32View[0] = Eq.mantissaTable[Eq.offsetTable[qq >> 10] + (1023 & qq)] + Eq.exponentTable[qq >> 10], Eq.floatView[0]
    }
  },
  39810: (qq, Eq, gq) => {
    gq.d(Eq, {
      b: () => Oq,
      d: () => lq,
      f: () => Yq
    });
    const Yq = qq => {
        const Eq = ArrayBuffer.isView(qq) ? new Uint8Array(qq.buffer, qq.byteOffset, qq.byteLength) : new Uint8Array(qq);
        return "function" === typeof Eq.toBase64 ? Eq.toBase64() : function(qq) {
          const Eq = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
          let gq, Yq, lq, Oq, mq, xq, Aq, cq = "",
            uq = 0;
          for (; uq < qq.length;) gq = qq[uq++], Yq = uq < qq.length ? qq[uq++] : Number.NaN, lq = uq < qq.length ? qq[uq++] : Number.NaN, Oq = gq >> 2, mq = (3 & gq) << 4 | Yq >> 4, xq = (15 & Yq) << 2 | lq >> 6, Aq = 63 & lq, isNaN(Yq) ? xq = Aq = 64 : isNaN(lq) && (Aq = 64), cq += Eq.charAt(Oq) + Eq.charAt(mq) + Eq.charAt(xq) + Eq.charAt(Aq);
          return cq
        }(Eq)
      },
      lq = qq => atob(qq),
      Oq = qq => "function" === typeof Uint8Array.fromBase64 ? Uint8Array.fromBase64(qq).buffer : function(qq) {
        const Eq = lq(qq),
          gq = Eq.length,
          Yq = new Uint8Array(new ArrayBuffer(gq));
        for (let lq = 0; lq < gq; lq++) Yq[lq] = Eq.charCodeAt(lq);
        return Yq.buffer
      }(qq)
  },
  39644: (qq, Eq, gq) => {
    gq.d(Eq, {
      c: () => lq,
      e: () => mq
    });
    let Yq = [];
    class lq {
      static SetImmediate(qq) {
        0 === Yq.length && setTimeout((() => {
          const qq = Yq;
          Yq = [];
          for (const Eq of qq) Eq()
        }), 1), Yq.push(qq)
      }
    }

    function Oq(qq, Eq, gq) {
      try {
        if (qq()) return Eq(), !0
      } catch (Yq) {
        return gq?.(Yq), !0
      }
      return !1
    }
    const mq = function(qq, Eq, gq) {
      let Yq = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 16,
        lq = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3e4,
        mq = arguments.length > 6 ? arguments[6] : void 0;
      if ((!(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5]) && Oq(qq, Eq, gq)) return null;
      const xq = setInterval((() => {
        Oq(qq, Eq, gq) ? clearInterval(xq) : (lq -= Yq, lq < 0 && (clearInterval(xq), gq?.(new Error("Operation timed out after maximum retries. " + (mq || "")), !0)))
      }), Yq);
      return () => clearInterval(xq)
    }
  },
  39801: (qq, Eq, gq) => {
    gq.d(Eq, {
      e: () => Yq
    });
    class Yq {
      constructor() {
        this._xhr = "undefined" !== typeof _native && _native.XMLHttpRequest ? new _native.XMLHttpRequest : new XMLHttpRequest, this._requestURL = ""
      }
      static get IsCustomRequestAvailable() {
        return Object.keys(Yq.CustomRequestHeaders).length > 0 || Yq.CustomRequestModifiers.length > 0
      }
      static _CleanUrl(qq) {
        return qq = (qq = qq.replace("file:http:", "http:")).replace("file:https:", "https:")
      }
      static _ShouldSkipRequestModifications(qq) {
        return Yq.SkipRequestModificationForBabylonCDN && (qq.includes("preview.babylonjs.com") || qq.includes("cdn.babylonjs.com"))
      }
      static _CollectCustomizations(qq) {
        const Eq = {
          ...arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
        };
        if (Yq._ShouldSkipRequestModifications(qq)) return {
          url: qq,
          headers: Eq
        };
        for (const lq in Yq.CustomRequestHeaders) {
          const qq = Yq.CustomRequestHeaders[lq];
          qq && (Eq[lq] = qq)
        }
        const gq = {
          setRequestHeader: (qq, gq) => {
            Eq[qq] = gq
          }
        };
        for (const lq of Yq.CustomRequestModifiers) {
          if (Yq._ShouldSkipRequestModifications(qq)) break;
          const Eq = lq(gq, qq);
          "string" === typeof Eq && (qq = Eq)
        }
        return {
          url: qq,
          headers: Eq
        }
      }
      static async FetchAsync(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const gq = Eq.method ?? "GET";
        if ("undefined" !== typeof fetch) {
          const {
            url: lq,
            headers: Oq
          } = Yq._CollectCustomizations(Yq._CleanUrl(qq), Eq.headers ?? {});
          return await fetch(lq, {
            method: gq,
            headers: Oq,
            body: Eq.body ?? void 0
          })
        }
        return await new Promise(((lq, Oq) => {
          const mq = new Yq;
          mq.responseType = "arraybuffer", mq.addEventListener("readystatechange", (() => {
            if (4 === mq.readyState)
              if (mq.status >= 200 && mq.status < 300) {
                const qq = "undefined" !== typeof Headers ? new Headers : void 0,
                  Eq = mq.getResponseHeader("Content-Type");
                Eq && qq && qq.set("Content-Type", Eq), "undefined" !== typeof Response ? lq(new Response(mq.response, {
                  status: mq.status,
                  statusText: mq.statusText,
                  headers: qq
                })) : lq({
                  ok: !0,
                  status: mq.status,
                  statusText: mq.statusText,
                  headers: {
                    get: qq => mq.getResponseHeader(qq)
                  },
                  arrayBuffer: async () => await Promise.resolve(mq.response)
                })
              } else Oq(new Error(`HTTP ${mq.status} loading '${mq.requestURL}': ${mq.statusText}`))
          })), mq.open(gq, qq, Eq.headers), mq.send(Eq.body ?? null)
        }))
      }
      get requestURL() {
        return this._requestURL
      }
      get onprogress() {
        return this._xhr.onprogress
      }
      set onprogress(qq) {
        this._xhr.onprogress = qq
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
      set responseType(qq) {
        this._xhr.responseType = qq
      }
      get timeout() {
        return this._xhr.timeout
      }
      set timeout(qq) {
        this._xhr.timeout = qq
      }
      addEventListener(qq, Eq, gq) {
        this._xhr.addEventListener(qq, Eq, gq)
      }
      removeEventListener(qq, Eq, gq) {
        this._xhr.removeEventListener(qq, Eq, gq)
      }
      abort() {
        this._xhr.abort()
      }
      send(qq) {
        this._xhr.send(qq)
      }
      open(qq, Eq, gq) {
        const {
          url: lq,
          headers: Oq
        } = Yq._CollectCustomizations(Eq, gq);
        this._requestURL = Yq._CleanUrl(lq), this._xhr.open(qq, this._requestURL, !0);
        for (const Yq in Oq) this._xhr.setRequestHeader(Yq, Oq[Yq])
      }
      setRequestHeader(qq, Eq) {
        this._xhr.setRequestHeader(qq, Eq)
      }
      getResponseHeader(qq) {
        return this._xhr.getResponseHeader(qq)
      }
    }
    Yq.CustomRequestHeaders = {}, Yq.CustomRequestModifiers = new Array, Yq.SkipRequestModificationForBabylonCDN = !0
  }
};
Object.freeze(modules);
for (const qq in modules) Object.freeze(modules[qq]);