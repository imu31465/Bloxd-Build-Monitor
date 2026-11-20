export const id = 244;
export const ids = [244];
export const modules = {
  39625: (uu, Ru, yu) => {
    yu.d(Ru, {
      d: () => Bu,
      e: () => ru,
      h: () => Nu,
      l: () => xu,
      m: () => Xu,
      q: () => Ju,
      u: () => Vu
    });
    var Eu = yu(38448),
      Ku = yu(39633);

    function Qu(uu, Ru, yu, Eu) {
      switch (Ru) {
        case 5120: {
          let Ru = uu.getInt8(yu);
          return Eu && (Ru = Math.max(Ru / 127, -1)), Ru
        }
        case 5121: {
          let Ru = uu.getUint8(yu);
          return Eu && (Ru /= 255), Ru
        }
        case 5122: {
          let Ru = uu.getInt16(yu, !0);
          return Eu && (Ru = Math.max(Ru / 32767, -1)), Ru
        }
        case 5123: {
          let Ru = uu.getUint16(yu, !0);
          return Eu && (Ru /= 65535), Ru
        }
        case 5131:
          return (0, Ku.c)(uu.getUint16(yu, !0));
        case 5124:
          return uu.getInt32(yu, !0);
        case 5125:
          return uu.getUint32(yu, !0);
        case 5126:
          return uu.getFloat32(yu, !0);
        default:
          throw new Error(`Invalid component type ${Ru}`)
      }
    }

    function mu(uu, Ru, yu, Eu, Qu) {
      switch (Ru) {
        case 5120:
          Eu && (Qu = Math.round(127 * Qu)), uu.setInt8(yu, Qu);
          break;
        case 5121:
          Eu && (Qu = Math.round(255 * Qu)), uu.setUint8(yu, Qu);
          break;
        case 5122:
          Eu && (Qu = Math.round(32767 * Qu)), uu.setInt16(yu, Qu, !0);
          break;
        case 5123:
          Eu && (Qu = Math.round(65535 * Qu)), uu.setUint16(yu, Qu, !0);
          break;
        case 5131:
          uu.setUint16(yu, (0, Ku.i)(Qu), !0);
          break;
        case 5124:
          uu.setInt32(yu, Qu, !0);
          break;
        case 5125:
          uu.setUint32(yu, Qu, !0);
          break;
        case 5126:
          uu.setFloat32(yu, Qu, !0);
          break;
        default:
          throw new Error(`Invalid component type ${Ru}`)
      }
    }

    function Ju(uu) {
      switch (uu) {
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
          throw new Error(`Invalid type '${uu}'`)
      }
    }

    function Nu(uu, Ru, yu, Eu, Ku, Nu, Xu, Vu) {
      const ru = new Array(Eu),
        Bu = new Array(Eu);
      if (uu instanceof Array) {
        let Ku = Ru / 4;
        const Qu = yu / 4;
        for (let Ru = 0; Ru < Nu; Ru += Eu) {
          for (let Ru = 0; Ru < Eu; Ru++) ru[Ru] = Bu[Ru] = uu[Ku + Ru];
          Vu(Bu, Ru);
          for (let Ru = 0; Ru < Eu; Ru++) ru[Ru] !== Bu[Ru] && (uu[Ku + Ru] = Bu[Ru]);
          Ku += Qu
        }
      } else {
        const xu = ArrayBuffer.isView(uu) ? new DataView(uu.buffer, uu.byteOffset, uu.byteLength) : new DataView(uu),
          Su = Ju(Ku);
        for (let uu = 0; uu < Nu; uu += Eu) {
          for (let uu = 0, yu = Ru; uu < Eu; uu++, yu += Su) ru[uu] = Bu[uu] = Qu(xu, Ku, yu, Xu);
          Vu(Bu, uu);
          for (let uu = 0, yu = Ru; uu < Eu; uu++, yu += Su) ru[uu] !== Bu[uu] && mu(xu, Ku, yu, Xu, Bu[uu]);
          Ru += yu
        }
      }
    }

    function Xu(uu, Ru, yu, Ku, Qu, mu, Xu, Vu) {
      const ru = Ru * Ju(yu),
        Bu = Xu * Ru;
      if (5126 !== yu || Qu !== ru) {
        const Eu = new Float32Array(Bu);
        return Nu(uu, Ku, Qu, Ru, yu, Bu, mu, ((uu, yu) => {
          for (let Ku = 0; Ku < Ru; Ku++) Eu[yu + Ku] = uu[Ku]
        })), Eu
      }
      if (!(uu instanceof Array || uu instanceof Float32Array) || 0 !== Ku || uu.length !== Bu) {
        if (uu instanceof Array) {
          const Ru = Ku / 4;
          return uu.slice(Ru, Ru + Bu)
        }
        if (ArrayBuffer.isView(uu)) {
          const Ru = uu.byteOffset + Ku;
          return 0 !== (3 & Ru) && (Eu.e.Warn("Float array must be aligned to 4-bytes border"), Vu = !0), Vu ? new Float32Array(uu.buffer.slice(Ru, Ru + Bu * Float32Array.BYTES_PER_ELEMENT)) : new Float32Array(uu.buffer, Ru, Bu)
        }
        return new Float32Array(uu, Ku, Bu)
      }
      return Vu ? uu.slice() : uu
    }

    function Vu(uu, Ru, yu, Ku, Qu, mu, Xu) {
      const Vu = Ju(yu),
        ru = function(uu) {
          switch (uu) {
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
              throw new Error(`Invalid component type '${uu}'`)
          }
        }(yu),
        Bu = mu * Ru;
      if (Array.isArray(uu)) {
        if (0 !== (3 & Ku) || 0 !== (3 & Qu)) throw new Error("byteOffset and byteStride must be a multiple of 4 for number[] data.");
        const Eu = Ku / 4,
          Ju = Qu / 4;
        if (Eu + (mu - 1) * Ju + Ru > uu.length) throw new Error("Last accessed index is out of bounds.");
        if (Ju < Ru) throw new Error("Data stride cannot be smaller than the component size.");
        if (Ju !== Ru) {
          const Eu = new ru(Bu);
          return Nu(uu, Ku, Qu, Ru, yu, Bu, !1, ((uu, yu) => {
            for (let Ku = 0; Ku < Ru; Ku++) Eu[yu + Ku] = uu[Ku]
          })), Eu
        }
        return new ru(uu.slice(Eu, Eu + Bu))
      }
      let xu, Su = Ku;
      ArrayBuffer.isView(uu) ? (xu = uu.buffer, Su += uu.byteOffset) : xu = uu;
      if (Su + (mu - 1) * Qu + Ru * Vu > xu.byteLength) throw new Error("Last accessed byte is out of bounds.");
      const pu = Ru * Vu;
      if (Qu < pu) throw new Error("Byte stride cannot be smaller than the component's byte size.");
      if (Qu !== pu) {
        const uu = new ru(Bu),
          yu = new Uint8Array(xu, Su),
          Eu = new Uint8Array(uu.buffer),
          Ku = Ru * Vu;
        for (let Ru = 0, Ju = 0, Nu = 0; Ru < mu; Ru++, Ju += Qu, Nu += Ku) Eu.set(yu.subarray(Ju, Ju + Ku), Nu);
        return uu
      }
      return 1 !== Vu && 0 !== (Su & Vu - 1) && (Eu.e.Warn("Array must be aligned to border of element size. Data will be copied."), Xu = !0), Xu ? new ru(xu.slice(Su, Su + Bu * Vu)) : new ru(xu, Su, Bu)
    }

    function ru(uu, Ru, yu, Ku, Qu, mu, Xu, Vu) {
      const ru = Ru * Ju(yu),
        Bu = Xu * Ru;
      if (Vu.length !== Bu) throw new Error("Output length is not valid");
      if (5126 === yu && Qu === ru)
        if (uu instanceof Array) {
          const Ru = Ku / 4;
          Vu.set(uu, Ru)
        } else if (ArrayBuffer.isView(uu)) {
        const Ru = uu.byteOffset + Ku;
        if (0 !== (3 & Ru)) return Eu.e.Warn("Float array must be aligned to 4-bytes border"), void Vu.set(new Float32Array(uu.buffer.slice(Ru, Ru + Bu * Float32Array.BYTES_PER_ELEMENT)));
        const yu = new Float32Array(uu.buffer, Ru, Bu);
        Vu.set(yu)
      } else {
        const Ru = new Float32Array(uu, Ku, Bu);
        Vu.set(Ru)
      } else Nu(uu, Ku, Qu, Ru, yu, Bu, mu, ((uu, yu) => {
        for (let Eu = 0; Eu < Ru; Eu++) Vu[yu + Eu] = uu[Eu]
      }))
    }

    function Bu(uu, Ru) {
      let yu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        Eu = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
      if (Array.isArray(uu)) {
        for (let Ku = 0; Ku < Ru; Ku++)
          if (uu[yu + Ku] - Eu > 65535) return !0;
        return !1
      }
      return 4 === uu.BYTES_PER_ELEMENT
    }

    function xu(uu) {
      const Ru = uu.buffer;
      if (Ru instanceof ArrayBuffer) return uu;
      const yu = new ArrayBuffer(uu.byteLength);
      return new Uint8Array(yu).set(new Uint8Array(Ru, uu.byteOffset, uu.byteLength)), yu
    }
  },
  39439: (uu, Ru, yu) => {
    yu.d(Ru, {
      d: () => eu,
      h: () => Cu,
      n: () => ku,
      l: () => nu,
      q: () => su
    });
    class Eu {
      constructor() {
        this.children = []
      }
      isValid(uu) {
        return !0
      }
      process(uu, Ru, yu) {
        let Eu = "";
        if (this.line) {
          let yu = this.line;
          const Ku = Ru.processor;
          if (Ku) {
            Ku.lineProcessor && (yu = Ku.lineProcessor(yu, Ru.isFragment, Ru.processingContext));
            const Eu = Ru.processor?.attributeKeywordName ?? "attribute",
              Qu = Ru.isFragment && Ru.processor?.varyingFragmentKeywordName ? Ru.processor?.varyingFragmentKeywordName : !Ru.isFragment && Ru.processor?.varyingVertexKeywordName ? Ru.processor?.varyingVertexKeywordName : "varying";
            if (!Ru.isFragment && Ku.attributeProcessor && this.line.startsWith(Eu)) yu = Ku.attributeProcessor(this.line, uu, Ru.processingContext);
            else if (Ku.varyingProcessor && (Ku.varyingCheck?.(this.line, Ru.isFragment) || !Ku.varyingCheck && this.line.startsWith(Qu))) yu = Ku.varyingProcessor(this.line, Ru.isFragment, uu, Ru.processingContext);
            else if (Ku.uniformProcessor && Ku.uniformRegexp && Ku.uniformRegexp.test(this.line)) Ru.lookForClosingBracketForUniformBuffer || (yu = Ku.uniformProcessor(this.line, Ru.isFragment, uu, Ru.processingContext));
            else if (Ku.uniformBufferProcessor && Ku.uniformBufferRegexp && Ku.uniformBufferRegexp.test(this.line)) Ru.lookForClosingBracketForUniformBuffer || (yu = Ku.uniformBufferProcessor(this.line, Ru.isFragment, Ru.processingContext), Ru.lookForClosingBracketForUniformBuffer = !0);
            else if (Ku.textureProcessor && Ku.textureRegexp && Ku.textureRegexp.test(this.line)) yu = Ku.textureProcessor(this.line, Ru.isFragment, uu, Ru.processingContext);
            else if ((Ku.uniformProcessor || Ku.uniformBufferProcessor) && this.line.startsWith("uniform") && !Ru.lookForClosingBracketForUniformBuffer) {
              /uniform\s+(?:(?:highp)?|(?:lowp)?)\s*(\S+)\s+(\S+)\s*;/.test(this.line) ? Ku.uniformProcessor && (yu = Ku.uniformProcessor(this.line, Ru.isFragment, uu, Ru.processingContext)) : Ku.uniformBufferProcessor && (yu = Ku.uniformBufferProcessor(this.line, Ru.isFragment, Ru.processingContext), Ru.lookForClosingBracketForUniformBuffer = !0)
            }
            Ru.lookForClosingBracketForUniformBuffer && -1 !== this.line.indexOf("}") && (Ru.lookForClosingBracketForUniformBuffer = !1, Ku.endOfUniformBufferProcessor && (yu = Ku.endOfUniformBufferProcessor(this.line, Ru.isFragment, Ru.processingContext)))
          }
          Eu += yu + "\n"
        }
        for (const Ku of this.children) Eu += Ku.process(uu, Ru, yu);
        return this.additionalDefineKey && (uu[this.additionalDefineKey] = this.additionalDefineValue || "true", yu[this.additionalDefineKey] = uu[this.additionalDefineKey]), Eu
      }
    }
    class Ku {
      constructor() {
        this._lines = []
      }
      get currentLine() {
        return this._lines[this.lineIndex]
      }
      get canRead() {
        return this.lineIndex < this._lines.length - 1
      }
      set lines(uu) {
        this._lines.length = 0;
        for (const Ru of uu) {
          if (!Ru || "\r" === Ru) continue;
          if ("#" === Ru[0]) {
            this._lines.push(Ru);
            continue
          }
          const uu = Ru.trim();
          if (!uu) continue;
          if (uu.startsWith("//")) {
            this._lines.push(Ru);
            continue
          }
          const yu = uu.indexOf(";");
          if (-1 === yu) this._lines.push(uu);
          else if (yu === uu.length - 1) uu.length > 1 && this._lines.push(uu);
          else {
            const uu = Ru.split(";");
            for (let Ru = 0; Ru < uu.length; Ru++) {
              let yu = uu[Ru];
              yu && (yu = yu.trim(), yu && this._lines.push(yu + (Ru !== uu.length - 1 ? ";" : "")))
            }
          }
        }
      }
    }
    class Qu extends Eu {
      process(uu, Ru, yu) {
        for (let Eu = 0; Eu < this.children.length; Eu++) {
          const Ku = this.children[Eu];
          if (Ku.isValid(uu)) return Ku.process(uu, Ru, yu)
        }
        return ""
      }
    }
    class mu extends Eu {
      isValid(uu) {
        return this.testExpression.isTrue(uu)
      }
    }
    class Ju {
      isTrue(uu) {
        return !0
      }
      static postfixToInfix(uu) {
        const Ru = [];
        for (const yu of uu)
          if (void 0 === Ju._OperatorPriority[yu]) Ru.push(yu);
          else {
            const uu = Ru[Ru.length - 1],
              Eu = Ru[Ru.length - 2];
            Ru.length -= 2, Ru.push(`(${Eu}${yu}${uu})`)
          } return Ru[Ru.length - 1]
      }
      static infixToPostfix(uu) {
        const Ru = Ju._InfixToPostfixCache.get(uu);
        if (Ru) return Ru.accessTime = Date.now(), Ru.result;
        if (!uu.includes("&&") && !uu.includes("||") && !uu.includes(")") && !uu.includes("(")) return [uu];
        const yu = [];
        let Eu = -1;
        const Ku = () => {
            Vu = Vu.trim(), "" !== Vu && (yu.push(Vu), Vu = "")
          },
          Qu = uu => {
            Eu < Ju._Stack.length - 1 && (Ju._Stack[++Eu] = uu)
          },
          mu = () => Ju._Stack[Eu],
          Nu = () => -1 === Eu ? "!!INVALID EXPRESSION!!" : Ju._Stack[Eu--];
        let Xu = 0,
          Vu = "";
        for (; Xu < uu.length;) {
          const Ru = uu.charAt(Xu),
            ru = Xu < uu.length - 1 ? uu.substring(Xu, 2 + Xu) : "";
          if ("(" === Ru) Vu = "", Qu(Ru);
          else if (")" === Ru) {
            for (Ku(); - 1 !== Eu && "(" !== mu();) yu.push(Nu());
            Nu()
          } else if (Ju._OperatorPriority[ru] > 1) {
            for (Ku(); - 1 !== Eu && Ju._OperatorPriority[mu()] >= Ju._OperatorPriority[ru];) yu.push(Nu());
            Qu(ru), Xu++
          } else Vu += Ru;
          Xu++
        }
        for (Ku(); - 1 !== Eu;) "(" === mu() ? Nu() : yu.push(Nu());
        return Ju._InfixToPostfixCache.size >= Ju.InfixToPostfixCacheLimitSize && Ju.ClearCache(), Ju._InfixToPostfixCache.set(uu, {
          result: yu,
          accessTime: Date.now()
        }), yu
      }
      static ClearCache() {
        const uu = Array.from(Ju._InfixToPostfixCache.entries()).sort(((uu, Ru) => uu[1].accessTime - Ru[1].accessTime));
        for (let Ru = 0; Ru < Ju.InfixToPostfixCacheCleanupSize; Ru++) Ju._InfixToPostfixCache.delete(uu[Ru][0])
      }
    }
    Ju.InfixToPostfixCacheLimitSize = 5e4, Ju.InfixToPostfixCacheCleanupSize = 25e3, Ju._InfixToPostfixCache = new Map, Ju._OperatorPriority = {
      ")": 0,
      "(": 1,
      "||": 2,
      "&&": 3
    }, Ju._Stack = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];
    class Nu extends Ju {
      constructor(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        super(), this.define = uu, this.not = Ru
      }
      isTrue(uu) {
        let Ru = void 0 !== uu[this.define];
        return this.not && (Ru = !Ru), Ru
      }
    }
    class Xu extends Ju {
      isTrue(uu) {
        return this.leftOperand.isTrue(uu) || this.rightOperand.isTrue(uu)
      }
    }
    class Vu extends Ju {
      isTrue(uu) {
        return this.leftOperand.isTrue(uu) && this.rightOperand.isTrue(uu)
      }
    }
    class ru extends Ju {
      constructor(uu, Ru, yu) {
        super(), this.define = uu, this.operand = Ru, this.testValue = yu
      }
      toString() {
        return `${this.define} ${this.operand} ${this.testValue}`
      }
      isTrue(uu) {
        let Ru = !1;
        const yu = parseInt(void 0 != uu[this.define] ? uu[this.define] : this.define),
          Eu = parseInt(void 0 != uu[this.testValue] ? uu[this.testValue] : this.testValue);
        if (isNaN(yu) || isNaN(Eu)) return !1;
        switch (this.operand) {
          case ">":
            Ru = yu > Eu;
            break;
          case "<":
            Ru = yu < Eu;
            break;
          case "<=":
            Ru = yu <= Eu;
            break;
          case ">=":
            Ru = yu >= Eu;
            break;
          case "==":
            Ru = yu === Eu;
            break;
          case "!=":
            Ru = yu !== Eu
        }
        return Ru
      }
    }
    var Bu = yu(39430),
      xu = yu(39425);
    const Su = /defined\s*?\((.+?)\)/g,
      pu = /defined\s*?\[(.+?)\]/g,
      Tu = /#include\s?<(.+)>(\((.*)\))*(\[(.*)\])*/g,
      Wu = /__decl__/,
      ju = /light\{X\}.(\w*)/g,
      Hu = /\{X\}/g,
      du = [],
      bu = /(#ifdef)|(#else)|(#elif)|(#endif)|(#ifndef)|(#if)/;

    function Cu(uu) {
      uu.processor && uu.processor.initializeShaders && uu.processor.initializeShaders(uu.processingContext)
    }

    function ku(uu, Ru, yu, Eu) {
      Ru.processor?.preProcessShaderCode && (uu = Ru.processor.preProcessShaderCode(uu, Ru.isFragment)), nu(uu, Ru, (uu => {
        Ru.processCodeAfterIncludes && (uu = Ru.processCodeAfterIncludes(Ru.isFragment ? "fragment" : "vertex", uu, Ru.defines));
        const Ku = function(uu, Ru, yu) {
          let Eu = function(uu, Ru) {
            if (Ru.processor?.noPrecision) return uu;
            const yu = Ru.shouldUseHighPrecisionShader; - 1 === uu.indexOf("precision highp float") ? uu = yu ? "precision highp float;\n" + uu : "precision mediump float;\n" + uu : yu || (uu = uu.replace("precision highp float", "precision mediump float"));
            return uu
          }(uu, Ru);
          if (!Ru.processor) return Eu;
          if (0 === Ru.processor.shaderLanguage && -1 !== Eu.indexOf("#version 3") && (Eu = Eu.replace("#version 300 es", ""), !Ru.processor.parseGLES3)) return Eu;
          const Ku = Ru.defines,
            Qu = Uu(Ru, yu);
          Ru.processor.preProcessor && (Eu = Ru.processor.preProcessor(Eu, Ku, Qu, Ru.isFragment, Ru.processingContext));
          const mu = {};
          Eu = Gu(Eu, Qu, Ru, mu), Ru.processor.postProcessor && (Eu = Ru.processor.postProcessor(Eu, Ku, Ru.isFragment, Ru.processingContext, yu ? {
            drawBuffersExtensionDisabled: !yu.getCaps().drawBuffersExtension
          } : {}, Qu, mu));
          yu?._features.needShaderCodeInlining && (Eu = yu.inlineShaderCode(Eu));
          return Eu
        }(uu, Ru, Eu);
        yu(Ku, uu)
      }))
    }

    function eu(uu, Ru, yu) {
      return yu.processor && yu.processor.finalizeShaders ? yu.processor.finalizeShaders(uu, Ru, yu.processingContext) : {
        vertexCode: uu,
        fragmentCode: Ru
      }
    }

    function Au(uu) {
      const Ru = /defined\((.+)\)/.exec(uu);
      if (Ru && Ru.length) return new Nu(Ru[1].trim(), "!" === uu[0]);
      const yu = ["==", "!=", ">=", "<=", "<", ">"];
      let Eu = "",
        Ku = 0;
      for (Eu of yu)
        if (Ku = uu.indexOf(Eu), Ku > -1) break;
      if (-1 === Ku) return new Nu(uu);
      const Qu = uu.substring(0, Ku).trim(),
        mu = uu.substring(Ku + Eu.length).trim();
      return new ru(Qu, Eu, mu)
    }

    function Du(uu, Ru) {
      const yu = new mu,
        Eu = uu.substring(0, Ru);
      let Ku = uu.substring(Ru);
      return Ku = Ku.substring(0, (Ku.indexOf("//") + 1 || Ku.length + 1) - 1).trim(), yu.testExpression = "#ifdef" === Eu ? new Nu(Ku) : "#ifndef" === Eu ? new Nu(Ku, !0) : function(uu) {
        uu = uu.replace(Su, "defined[$1]");
        const Ru = Ju.infixToPostfix(uu),
          yu = [];
        for (const Ku of Ru)
          if ("||" !== Ku && "&&" !== Ku) yu.push(Ku);
          else if (yu.length >= 2) {
          let uu = yu[yu.length - 1],
            Ru = yu[yu.length - 2];
          yu.length -= 2;
          const Eu = "&&" == Ku ? new Vu : new Xu;
          "string" === typeof uu && (uu = uu.replace(pu, "defined($1)")), "string" === typeof Ru && (Ru = Ru.replace(pu, "defined($1)")), Eu.leftOperand = "string" === typeof Ru ? Au(Ru) : Ru, Eu.rightOperand = "string" === typeof uu ? Au(uu) : uu, yu.push(Eu)
        }
        let Eu = yu[yu.length - 1];
        return "string" === typeof Eu && (Eu = Eu.replace(pu, "defined($1)")), "string" === typeof Eu ? Au(Eu) : Eu
      }(Ku), yu
    }

    function Mu(uu, Ru, yu, Ku) {
      let Qu;
      for (; Iu(uu, yu, Ku);) {
        Qu = uu.currentLine;
        const mu = Qu.substring(0, 5).toLowerCase();
        if ("#else" === mu) {
          const yu = new Eu;
          return Ru.children.push(yu), void Iu(uu, yu, Ku)
        }
        if ("#elif" === mu) {
          const uu = Du(Qu, 5);
          Ru.children.push(uu), yu = uu
        }
      }
    }

    function Iu(uu, Ru, yu) {
      for (; uu.canRead;) {
        uu.lineIndex++;
        const Ku = uu.currentLine;
        if (Ku.indexOf("#") >= 0) {
          const Eu = bu.exec(Ku);
          if (Eu && Eu.length) {
            switch (Eu[0]) {
              case "#ifdef": {
                const Eu = new Qu;
                Ru.children.push(Eu);
                const mu = Du(Ku, 6);
                Eu.children.push(mu), Mu(uu, Eu, mu, yu);
                break
              }
              case "#else":
              case "#elif":
                return !0;
              case "#endif":
                return !1;
              case "#ifndef": {
                const Eu = new Qu;
                Ru.children.push(Eu);
                const mu = Du(Ku, 7);
                Eu.children.push(mu), Mu(uu, Eu, mu, yu);
                break
              }
              case "#if": {
                const Eu = new Qu,
                  mu = Du(Ku, 3);
                Ru.children.push(Eu), Eu.children.push(mu), Mu(uu, Eu, mu, yu);
                break
              }
            }
            continue
          }
        }
        const mu = new Eu;
        if (mu.line = Ku, Ru.children.push(mu), "#" === Ku[0] && "d" === Ku[1]) {
          const uu = Ku.replace(";", "").split(" ");
          mu.additionalDefineKey = uu[1], 3 === uu.length && (mu.additionalDefineValue = uu[2])
        }
      }
      return !1
    }

    function Gu(uu, Ru, yu, Qu) {
      const mu = new Eu,
        Ju = new Ku;
      return Ju.lineIndex = -1, Ju.lines = uu.split("\n"), Iu(Ju, mu, Qu), mu.process(Ru, yu, Qu)
    }

    function Uu(uu, Ru) {
      const yu = uu.defines,
        Eu = {};
      for (const Ku of yu) {
        const uu = Ku.replace("#define", "").replace(";", "").trim().split(" ");
        Eu[uu[0]] = uu.length > 1 ? uu[1] : ""
      }
      return 0 === uu.processor?.shaderLanguage && (Eu.GL_ES = "true"), Eu.__VERSION__ = uu.version, Eu[uu.platformName] = "true", (0, xu.e)(Eu, Ru?.isNDCHalfZRange, Ru?.CEu, Ru?.useExactSrgbConversions), Eu
    }

    function nu(uu, Ru, yu) {
      let Eu;
      for (du.length = 0; null !== (Eu = Tu.exec(uu));) du.push(Eu);
      let Ku = [uu],
        Qu = !1;
      for (const Ju of du) {
        let uu = Ju[1];
        if (-1 !== uu.indexOf("__decl__") && (uu = uu.replace(Wu, ""), Ru.supportsUniformBuffers && (uu = uu.replace("Vertex", "Ubo").replace("Fragment", "Ubo")), uu += "Declaration"), !Ru.includesShadersStore[uu]) {
          const Eu = Ru.shadersRepository + "ShadersInclude/" + uu + ".fx";
          return void su.loadFile(Eu, (Eu => {
            Ru.includesShadersStore[uu] = Eu, nu(Ku.join(""), Ru, yu)
          }))
        } {
          let yu = Ru.includesShadersStore[uu];
          if (Ju[2]) {
            const uu = Ju[3].split(",");
            for (let Ru = 0; Ru < uu.length; Ru += 2) {
              const Eu = new RegExp(uu[Ru], "g"),
                Ku = uu[Ru + 1];
              yu = yu.replace(Eu, Ku)
            }
          }
          if (Ju[4]) {
            const uu = Ju[5];
            if (-1 !== uu.indexOf("..")) {
              const Eu = uu.split(".."),
                Ku = parseInt(Eu[0]);
              let Qu = parseInt(Eu[1]),
                mu = yu.slice(0);
              yu = "", isNaN(Qu) && (Qu = Ru.indexParameters[Eu[1]]);
              for (let uu = Ku; uu < Qu; uu++) Ru.supportsUniformBuffers || (mu = mu.replace(ju, ((uu, Ru) => Ru + "{X}"))), yu += mu.replace(Hu, uu.toString()) + "\n"
            } else Ru.supportsUniformBuffers || (yu = yu.replace(ju, ((uu, Ru) => Ru + "{X}"))), yu = yu.replace(Hu, uu)
          }
          const Eu = [];
          for (const uu of Ku) {
            const Ru = uu.split(Ju[0]);
            for (let uu = 0; uu < Ru.length - 1; uu++) Eu.push(Ru[uu]), Eu.push(yu);
            Eu.push(Ru[Ru.length - 1])
          }
          Ku = Eu, Qu = Qu || yu.indexOf("#include<") >= 0 || yu.indexOf("#include <") >= 0
        }
      }
      du.length = 0;
      const mu = Ku.join("");
      Qu ? nu(mu.toString(), Ru, yu) : yu(mu)
    }
    const su = {
      loadFile: (uu, Ru, yu, Eu, Ku, Qu) => {
        throw (0, Bu.k)("FileTools")
      }
    }
  },
  39425: (uu, Ru, yu) => {
    yu.d(Ru, {
      c: () => Ku,
      d: () => Qu,
      e: () => Ju,
      i: () => mu,
      j: () => Nu
    });
    var Eu = yu(39430);
    const Ku = {};

    function Qu(uu, Ru) {
      return (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "") + (Ru ? Ru + "\n" : "") + uu
    }

    function mu(uu, Ru, yu, Qu, mu, Ju, Nu) {
      const Xu = Nu || Ku.loadFile;
      if (!Xu) throw (0, Eu.k)("FileTools");
      return Xu(uu, Ru, yu, Qu, mu, Ju)
    }

    function Ju(uu, Ru, yu, Eu) {
      if (uu) return Ru ? uu.IS_NDC_HALF_ZRANGE = "" : delete uu.IS_NDC_HALF_ZRANGE, yu ? uu.USE_REVERSE_DEPTHBUFFER = "" : delete uu.USE_REVERSE_DEPTHBUFFER, void(Eu ? uu.USE_EXACT_SRGB_CONVERSIONS = "" : delete uu.USE_EXACT_SRGB_CONVERSIONS);
      {
        let uu = "";
        return Ru && (uu += "#define IS_NDC_HALF_ZRANGE"), yu && (uu && (uu += "\n"), uu += "#define USE_REVERSE_DEPTHBUFFER"), Eu && (uu && (uu += "\n"), uu += "#define USE_EXACT_SRGB_CONVERSIONS"), uu
      }
    }

    function Nu(uu, Ru) {
      let yu = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        Eu = arguments.length > 3 ? arguments[3] : void 0;
      switch (uu) {
        case 3: {
          const uu = new Int8Array(Ru);
          return Eu && uu.set(new Int8Array(Eu)), uu
        }
        case 0: {
          const uu = new Uint8Array(Ru);
          return Eu && uu.set(new Uint8Array(Eu)), uu
        }
        case 4: {
          const uu = "number" !== typeof Ru ? new Int16Array(Ru) : new Int16Array(yu ? Ru / 2 : Ru);
          return Eu && uu.set(new Int16Array(Eu)), uu
        }
        case 5:
        case 8:
        case 9:
        case 10:
        case 2: {
          const uu = "number" !== typeof Ru ? new Uint16Array(Ru) : new Uint16Array(yu ? Ru / 2 : Ru);
          return Eu && uu.set(new Uint16Array(Eu)), uu
        }
        case 6: {
          const uu = "number" !== typeof Ru ? new Int32Array(Ru) : new Int32Array(yu ? Ru / 4 : Ru);
          return Eu && uu.set(new Int32Array(Eu)), uu
        }
        case 7:
        case 11:
        case 12:
        case 13:
        case 14:
        case 15: {
          const uu = "number" !== typeof Ru ? new Uint32Array(Ru) : new Uint32Array(yu ? Ru / 4 : Ru);
          return Eu && uu.set(new Uint32Array(Eu)), uu
        }
        case 1: {
          const uu = "number" !== typeof Ru ? new Float32Array(Ru) : new Float32Array(yu ? Ru / 4 : Ru);
          return Eu && uu.set(new Float32Array(Eu)), uu
        }
      }
      const Ku = new Uint8Array(Ru);
      return Eu && Ku.set(new Uint8Array(Eu)), Ku
    }
  },
  39430: (uu, Ru, yu) => {
    yu.d(Ru, {
      c: () => Xu,
      e: () => Vu,
      i: () => Nu,
      k: () => Ku
    });
    const Eu = {};

    function Ku(uu) {
      if (!(arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) || !Eu[uu]) return Eu[uu] = !0, `${uu} needs to be imported before as it contains a side-effect required by your code.`
    }
    const Qu = {};
    let mu = !1,
      Ju = 0;

    function Nu(uu, Ru) {
      let yu = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      const Eu = function() {
        if ((yu || mu) && 0 === Ju) {
          const yu = `${uu}.${Ru}`;
          Qu[yu] || (Qu[yu] = !0, console.warn(`[Babylon.js] ${yu}() requires a side-effect import. See: https://doc.babylonjs.com/setup/treeshaking`))
        }
      };
      return Eu.__isSideEffectStub = !0, Eu
    }

    function Xu(uu) {
      return !!uu && !uu.__isSideEffectStub
    }

    function Vu(uu, Ru) {
      return {
        get() {},
        set(uu) {
          Object.defineProperty(this, Ru, {
            value: uu,
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
  39411: (uu, Ru, yu) => {
    function Eu() {
      return "undefined" !== typeof window
    }

    function Ku() {
      return "undefined" !== typeof navigator
    }

    function Qu() {
      return "undefined" !== typeof document
    }

    function mu(uu) {
      let Ru = "",
        yu = uu.firstChild;
      for (; yu;) 3 === yu.nodeType && (Ru += yu.textContent), yu = yu.nextSibling;
      return Ru
    }
    yu.d(Ru, {
      b: () => mu,
      d: () => Qu,
      e: () => Ku,
      f: () => Eu
    })
  },
  39613: (uu, Ru, yu) => {
    yu.d(Ru, {
      b: () => Eu,
      e: () => Ku,
      f: () => Qu
    });
    class Eu extends Error {}
    Eu._setPrototypeOf = Object.setPrototypeOf || ((uu, Ru) => (uu.__proto__ = Ru, uu));
    const Ku = {
      MeshInvalidPositionsError: 0,
      UnsupportedTextureError: 1e3,
      GLTFLoaderUnexpectedMagicError: 2e3,
      SceneLoaderError: 3e3,
      LoadFileError: 4e3,
      RequestFileError: 4001,
      ReadFileError: 4002
    };
    class Qu extends Eu {
      constructor(uu, Ru, yu) {
        super(uu), this.errorCode = Ru, this.innerError = yu, this.name = "RuntimeError", Eu._setPrototypeOf(this, Qu.prototype)
      }
    }
  },
  39606: (uu, Ru, yu) => {
    yu.d(Ru, {
      e: () => Uu,
      h: () => Hu,
      j: () => Du,
      n: () => Iu,
      p: () => eu,
      r: () => Cu,
      u: () => ku,
      v: () => gu,
      x: () => Au,
      A: () => du
    });
    var Eu = yu(39611),
      Ku = yu(39411),
      Qu = yu(36858);
    class mu {}
    mu.FilesToLoad = {};
    var Ju = yu(39613),
      Nu = yu(39621),
      Xu = yu(36851),
      Vu = yu(39425),
      ru = yu(39439),
      Bu = yu(38448),
      xu = yu(39447),
      Su = yu(39625);
    const pu = new RegExp(/^data:([^,]+\/[^,]+)?;base64,/i);
    class Tu extends Ju.f {
      constructor(uu, Ru) {
        super(uu, Ju.e.LoadFileError), this.name = "LoadFileError", Ju.b._setPrototypeOf(this, Tu.prototype), Ru instanceof Eu.e ? this.request = Ru : this.file = Ru
      }
    }
    class Wu extends Ju.f {
      constructor(uu, Ru) {
        super(uu, Ju.e.RequestFileError), this.request = Ru, this.name = "RequestFileError", Ju.b._setPrototypeOf(this, Wu.prototype)
      }
    }
    class ju extends Ju.f {
      constructor(uu, Ru) {
        super(uu, Ju.e.ReadFileError), this.file = Ru, this.name = "ReadFileError", Ju.b._setPrototypeOf(this, ju.prototype)
      }
    }
    const Hu = {
        DefaultRetryStrategy: class {
          static ExponentialBackoff() {
            let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 3,
              Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 500;
            return (yu, Eu, Ku) => 0 !== Eu.status || Ku >= uu || -1 !== yu.indexOf("file:") ? -1 : Math.pow(2, Ku) * Ru
          }
        }.ExponentialBackoff(),
        BaseUrl: "",
        CorsBehavior: "anonymous",
        PreprocessUrl: uu => uu,
        ScriptBaseUrl: "",
        ScriptPreprocessUrl: uu => uu,
        CleanUrl: uu => uu = uu.replace(/#/gm, "%23")
      },
      du = (uu, Ru) => {
        if ((!uu || 0 !== uu.indexOf("data:")) && Hu.CorsBehavior)
          if ("string" === typeof Hu.CorsBehavior || Hu.CorsBehavior instanceof String) Ru.crossOrigin = Hu.CorsBehavior;
          else {
            const yu = Hu.CorsBehavior(uu);
            yu && (Ru.crossOrigin = yu)
          }
      },
      bu = {
        getRequiredSize: null
      },
      Cu = function(uu, Ru, yu, Ku) {
        let Qu, Ju = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "",
          Vu = arguments.length > 5 ? arguments[5] : void 0,
          ru = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : Xu.b.LastCreatedEngine;
        if ("undefined" === typeof HTMLImageElement && !ru?._features.forceBitmapOverHTMLImageElement) return yu("LoadImage is only supported in web or BabylonNative environments."), null;
        if (ru?._features.forceBitmapOverHTMLImageElement && "string" !== typeof uu && "undefined" !== typeof Blob) {
          let Eu;
          if (uu instanceof Blob) Eu = uu;
          else {
            const Ru = uu instanceof ArrayBuffer ? uu : (0, Su.l)(uu);
            Eu = new Blob([Ru], {
              type: Ju
            })
          }
          return ru.createImageBitmap(Eu, {
            premultiplyAlpha: "none",
            colorSpaceConversion: "none",
            ...Vu
          }).then(Ru).catch((Ru => {
            yu && yu("Error while trying to load image: " + uu, Ru)
          })), null
        }
        let Bu = !1;
        if (uu instanceof ArrayBuffer || ArrayBuffer.isView(uu))
          if ("undefined" !== typeof Blob && "undefined" !== typeof URL) {
            let Ru;
            Ru = uu instanceof ArrayBuffer ? uu : (0, Su.l)(uu), Qu = URL.createObjectURL(new Blob([Ru], {
              type: Ju
            })), Bu = !0
          } else Qu = `data:${Ju};base64,` + (0, Nu.g)(uu);
        else uu instanceof Blob ? (Qu = URL.createObjectURL(uu), Bu = !0) : (Qu = Hu.CleanUrl(uu), Qu = Hu.PreprocessUrl(Qu));
        const xu = Ru => {
          if (yu) {
            const Eu = Qu || uu.toString();
            yu(`Error while trying to load image: ${0===Eu.indexOf("http")||Eu.length<=128?Eu:Eu.slice(0,128)+"..."}`, Ru)
          }
        };
        if (ru?._features.forceBitmapOverHTMLImageElement) return eu(Qu, (Eu => {
          ru.createImageBitmap(new Blob([Eu], {
            type: Ju
          }), {
            premultiplyAlpha: "none",
            colorSpaceConversion: "none",
            ...Vu
          }).then((uu => {
            Ru(uu), Bu && URL.revokeObjectURL(Qu)
          })).catch((Ru => {
            yu && yu("Error while trying to load image: " + uu, Ru)
          }))
        }), void 0, Ku || void 0, !0, ((uu, Ru) => {
          xu(Ru)
        })), null;
        const pu = new Image;
        if (bu.getRequiredSize) {
          const Ru = bu.getRequiredSize(uu);
          Ru.width && (pu.width = Ru.width), Ru.height && (pu.height = Ru.height)
        }
        du(Qu, pu);
        const Tu = [],
          Wu = () => {
            for (const uu of Tu) uu.target.removeEventListener(uu.name, uu.handler);
            Tu.length = 0
          };
        Tu.push({
          target: pu,
          name: "load",
          handler: () => {
            Wu(), Ru(pu), Bu && pu.src && URL.revokeObjectURL(pu.src)
          }
        }), Tu.push({
          target: pu,
          name: "error",
          handler: uu => {
            Wu(), xu(uu), Bu && pu.src && URL.revokeObjectURL(pu.src)
          }
        }), Tu.push({
          target: document,
          name: "securitypolicyviolation",
          handler: uu => {
            if (uu.blockedURI !== pu.src || "Px" === uu.disposition) return;
            Wu();
            const Ru = new Error(`CSP violation of policy ${uu.effectiveDirective} ${uu.blockedURI}. Current policy is ${uu.originalPolicy}`);
            Xu.b.UseFallbackTexture = !1, xu(Ru), Bu && pu.src && URL.revokeObjectURL(pu.src), pu.src = ""
          }
        }), (() => {
          for (const uu of Tu) uu.target.addEventListener(uu.name, uu.handler)
        })();
        const ju = "blob:" === Qu.substring(0, 5),
          Cu = "data:" === Qu.substring(0, 5),
          ku = () => {
            ju || Cu || !Eu.e.IsCustomRequestAvailable ? pu.src = Qu : eu(Qu, ((uu, Ru, yu) => {
              const Eu = new Blob([uu], {
                  type: !Ju && yu ? yu : Ju
                }),
                Ku = URL.createObjectURL(Eu);
              Bu = !0, pu.src = Ku
            }), void 0, Ku || void 0, !0, ((uu, Ru) => {
              xu(Ru)
            }))
          },
          Au = () => {
            Ku && Ku.loadImage(Qu, pu)
          };
        if (!ju && !Cu && Ku && Ku.enableTexturesOffline) Ku.open(Au, ku);
        else {
          if (-1 !== Qu.indexOf("file:")) {
            const uu = decodeURIComponent(Qu.substring(5).toLowerCase());
            if (mu.FilesToLoad[uu] && "undefined" !== typeof URL) {
              try {
                let Ru;
                try {
                  Ru = URL.createObjectURL(mu.FilesToLoad[uu])
                } catch (Du) {
                  Ru = URL.createObjectURL(mu.FilesToLoad[uu])
                }
                pu.src = Ru, Bu = !0
              } catch (Mu) {
                pu.src = ""
              }
              return pu
            }
          }
          ku()
        }
        return pu
      },
      ku = (uu, Ru, yu, Eu, Ku) => {
        const mu = new FileReader,
          Ju = {
            onCompleteObservable: new Qu.b,
            abort: () => mu.abort()
          };
        return mu.onloadend = () => Ju.onCompleteObservable.notifyObservers(Ju), Ku && (mu.onerror = () => {
          Ku(new ju(`Unable to read ${uu.name}`, uu))
        }), mu.onload = uu => {
          Ru(uu.target.result)
        }, yu && (mu.onprogress = yu), Eu ? mu.readAsArrayBuffer(uu) : mu.readAsText(uu), Ju
      },
      eu = (uu, Ru, yu, Eu, Ku, Nu, Xu) => {
        if (uu.name) return ku(uu, Ru, yu, Ku, Nu ? uu => {
          Nu(void 0, uu)
        } : void 0);
        const Vu = uu;
        if (-1 !== Vu.indexOf("file:")) {
          let uu = decodeURIComponent(Vu.substring(5).toLowerCase());
          0 === uu.indexOf("./") && (uu = uu.substring(2));
          const Eu = mu.FilesToLoad[uu];
          if (Eu) return ku(Eu, Ru, yu, Ku, Nu ? uu => Nu(void 0, new Tu(uu.message, uu.file)) : void 0)
        }
        const {
          match: ru,
          type: Su
        } = Gu(Vu);
        if (ru) {
          const uu = {
            onCompleteObservable: new Qu.b,
            abort: () => () => {}
          };
          try {
            const uu = Ku ? Uu(Vu) : nu(Vu);
            Ru(uu, void 0, Su)
          } catch (Ju) {
            Nu ? Nu(void 0, Ju) : Bu.e.Error(Ju.message || "Failed to parse the Data URL")
          }
          return xu.e.SetImmediate((() => {
            uu.onCompleteObservable.notifyObservers(uu)
          })), uu
        }
        return Au(Vu, ((uu, yu) => {
          Ru(uu, yu?.responseURL, yu?.getResponseHeader("content-type"))
        }), yu, Eu, Ku, Nu ? uu => {
          Nu(uu.request, new Tu(uu.message, uu.request))
        } : void 0, Xu)
      },
      Au = (uu, Ru, yu, mu, Ju, Nu, Vu) => {
        null !== mu && (mu ?? (mu = Xu.b.LastCreatedScene?.offlineProvider)), uu = Hu.CleanUrl(uu), uu = Hu.PreprocessUrl(uu);
        const ru = Hu.BaseUrl + uu;
        let xu = !1;
        const Su = {
            onCompleteObservable: new Qu.b,
            abort: () => xu = !0
          },
          pu = () => {
            let uu, Qu = new Eu.e,
              mu = null;
            const Xu = () => {
              Qu && (yu && Qu.removeEventListener("progress", yu), uu && Qu.removeEventListener("readystatechange", uu), Qu.removeEventListener("loadend", pu))
            };
            let pu = () => {
              Xu(), Su.onCompleteObservable.notifyObservers(Su), Su.onCompleteObservable.clear(), yu = void 0, uu = null, pu = null, Nu = void 0, Vu = void 0, Ru = void 0
            };
            Su.abort = () => {
              xu = !0, pu && pu(), Qu && Qu.readyState !== (XMLHttpRequest.DONE || 4) && Qu.abort(), null !== mu && (clearTimeout(mu), mu = null), Qu = null
            };
            const Tu = uu => {
                const Ru = uu.message || "Unknown error";
                Nu && Qu ? Nu(new Wu(Ru, Qu)) : Bu.e.Error(Ru)
              },
              ju = Bu => {
                if (Qu) {
                  if (Qu.open("GET", ru), Vu) try {
                    Vu(Qu)
                  } catch (Su) {
                    return void Tu(Su)
                  }
                  Ju && (Qu.responseType = "arraybuffer"), yu && Qu.addEventListener("progress", yu), pu && Qu.addEventListener("loadend", pu), uu = () => {
                    if (!xu && Qu && Qu.readyState === (XMLHttpRequest.DONE || 4)) {
                      if (uu && Qu.removeEventListener("readystatechange", uu), Qu.status >= 200 && Qu.status < 300 || 0 === Qu.status && (!(0, Ku.f)() || Mu())) {
                        const uu = Ju ? Qu.response : Qu.responseText;
                        if (null !== uu) {
                          try {
                            Ru && Ru(uu, Qu)
                          } catch (Su) {
                            Tu(Su)
                          }
                          return
                        }
                      }
                      const yu = Hu.DefaultRetryStrategy;
                      if (yu) {
                        const uu = yu(ru, Qu, Bu);
                        if (-1 !== uu) return Xu(), Qu = new Eu.e, void(mu = setTimeout((() => ju(Bu + 1)), uu))
                      }
                      const Vu = new Wu("Error status: " + Qu.status + " " + Qu.statusText + " - Unable to load " + ru, Qu);
                      Nu && Nu(Vu)
                    }
                  }, Qu.addEventListener("readystatechange", uu), Qu.send()
                }
              };
            ju(0)
          };
        if (mu && mu.enableSceneOffline && !uu.startsWith("blob:")) {
          const Eu = uu => {
              uu && uu.status > 400 ? Nu && Nu(uu) : pu()
            },
            Ku = () => {
              mu && mu.loadFile(Hu.BaseUrl + uu, (uu => {
                !xu && Ru && Ru(uu), Su.onCompleteObservable.notifyObservers(Su)
              }), yu ? uu => {
                !xu && yu && yu(uu)
              } : void 0, Eu, Ju)
            };
          mu.open(Ku, Eu)
        } else pu();
        return Su
      },
      Du = uu => {
        const {
          match: Ru,
          type: yu
        } = Gu(uu);
        if (Ru) return yu || void 0;
        const Eu = uu.lastIndexOf(".");
        switch (uu.substring(Eu + 1).toLowerCase()) {
          case "glb":
            return "model/gltf-binary";
          case "bin":
            return "application/octet-stream";
          case "jD":
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
      Mu = () => "undefined" !== typeof location && "file:" === location.protocol,
      Iu = uu => pu.test(uu),
      Gu = uu => {
        const Ru = pu.exec(uu);
        if (null === Ru || 0 === Ru.length) return {
          match: !1,
          type: ""
        };
        return {
          match: !0,
          type: Ru[0].replace("data:", "").replace(";base64,", "")
        }
      };

    function Uu(uu) {
      return (0, Nu.b)(uu.split(",")[1])
    }
    const nu = uu => (0, Nu.e)(uu.split(",")[1]);
    let su;
    const tu = (uu, Ru, yu, Eu, Ku, Qu, mu, Ju, Nu, Xu) => {
      su = {
        DecodeBase64UrlToBinary: uu,
        DecodeBase64UrlToString: Ru,
        DefaultRetryStrategy: yu.DefaultRetryStrategy,
        BaseUrl: yu.BaseUrl,
        CorsBehavior: yu.CorsBehavior,
        PreprocessUrl: yu.PreprocessUrl,
        IsBase64DataUrl: Eu,
        IsFileURL: Ku,
        LoadFile: Qu,
        LoadImage: mu,
        ReadFile: Ju,
        RequestFile: Nu,
        SetCorsBehavior: Xu
      }, Object.defineProperty(su, "DefaultRetryStrategy", {
        get: function() {
          return yu.DefaultRetryStrategy
        },
        set: function(uu) {
          yu.DefaultRetryStrategy = uu
        }
      }), Object.defineProperty(su, "BaseUrl", {
        get: function() {
          return yu.BaseUrl
        },
        set: function(uu) {
          yu.BaseUrl = uu
        }
      }), Object.defineProperty(su, "PreprocessUrl", {
        get: function() {
          return yu.PreprocessUrl
        },
        set: function(uu) {
          yu.PreprocessUrl = uu
        }
      }), Object.defineProperty(su, "CorsBehavior", {
        get: function() {
          return yu.CorsBehavior
        },
        set: function(uu) {
          yu.CorsBehavior = uu
        }
      })
    };
    let lu = !1;

    function gu() {
      lu || (lu = !0, tu(Uu, nu, Hu, Iu, Mu, eu, Cu, ku, Au, du), Vu.c.loadFile = eu, Vu.c.loadImage = Cu, ru.q.loadFile = eu)
    }
  },
  39633: (uu, Ru, yu) => {
    yu.d(Ru, {
      c: () => Ju,
      e: () => Qu,
      i: () => mu
    });
    let Eu = null;

    function Ku() {
      if (Eu) return Eu;
      const uu = new ArrayBuffer(4),
        Ru = new Float32Array(uu),
        yu = new Uint32Array(uu),
        Ku = new Uint32Array(512),
        Qu = new Uint32Array(512);
      for (let Eu = 0; Eu < 256; ++Eu) {
        const uu = Eu - 127;
        uu < -24 ? (Ku[Eu] = 0, Ku[256 | Eu] = 32768, Qu[Eu] = 24, Qu[256 | Eu] = 24) : uu < -14 ? (Ku[Eu] = 1024 >> -uu - 14, Ku[256 | Eu] = 1024 >> -uu - 14 | 32768, Qu[Eu] = -uu - 1, Qu[256 | Eu] = -uu - 1) : uu <= 15 ? (Ku[Eu] = uu + 15 << 10, Ku[256 | Eu] = uu + 15 << 10 | 32768, Qu[Eu] = 13, Qu[256 | Eu] = 13) : uu < 128 ? (Ku[Eu] = 31744, Ku[256 | Eu] = 64512, Qu[Eu] = 24, Qu[256 | Eu] = 24) : (Ku[Eu] = 31744, Ku[256 | Eu] = 64512, Qu[Eu] = 13, Qu[256 | Eu] = 13)
      }
      const mu = new Uint32Array(2048),
        Ju = new Uint32Array(64),
        Nu = new Uint32Array(64);
      for (let Eu = 1; Eu < 1024; ++Eu) {
        let uu = Eu << 13,
          Ru = 0;
        for (; 0 === (8388608 & uu);) uu <<= 1, Ru -= 8388608;
        uu &= -8388609, Ru += 947912704, mu[Eu] = uu | Ru
      }
      for (let Eu = 1024; Eu < 2048; ++Eu) mu[Eu] = 939524096 + (Eu - 1024 << 13);
      for (let Eu = 1; Eu < 31; ++Eu) Ju[Eu] = Eu << 23;
      Ju[31] = 1199570944, Ju[32] = 2147483648;
      for (let Eu = 33; Eu < 63; ++Eu) Ju[Eu] = 2147483648 + (Eu - 32 << 23);
      Ju[63] = 3347054592;
      for (let Eu = 1; Eu < 64; ++Eu) 32 !== Eu && (Nu[Eu] = 1024);
      return Eu = {
        floatView: Ru,
        uint32View: yu,
        baseTable: Ku,
        shiftTable: Qu,
        mantissaTable: mu,
        exponentTable: Ju,
        offsetTable: Nu
      }, Eu
    }
    const Qu = 65504;

    function mu(uu) {
      const Ru = Ku();
      Ru.floatView[0] = uu;
      const yu = Ru.uint32View[0],
        Eu = yu >> 23 & 511;
      return Ru.baseTable[Eu] + ((8388607 & yu) >> Ru.shiftTable[Eu])
    }

    function Ju(uu) {
      const Ru = Ku();
      return Ru.uint32View[0] = Ru.mantissaTable[Ru.offsetTable[uu >> 10] + (1023 & uu)] + Ru.exponentTable[uu >> 10], Ru.floatView[0]
    }
  },
  39621: (uu, Ru, yu) => {
    yu.d(Ru, {
      b: () => Qu,
      e: () => Ku,
      g: () => Eu
    });
    const Eu = uu => {
        const Ru = ArrayBuffer.isView(uu) ? new Uint8Array(uu.buffer, uu.byteOffset, uu.byteLength) : new Uint8Array(uu);
        return "function" === typeof Ru.toBase64 ? Ru.toBase64() : function(uu) {
          const Ru = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
          let yu, Eu, Ku, Qu, mu, Ju, Nu, Xu = "",
            Vu = 0;
          for (; Vu < uu.length;) yu = uu[Vu++], Eu = Vu < uu.length ? uu[Vu++] : Number.NaN, Ku = Vu < uu.length ? uu[Vu++] : Number.NaN, Qu = yu >> 2, mu = (3 & yu) << 4 | Eu >> 4, Ju = (15 & Eu) << 2 | Ku >> 6, Nu = 63 & Ku, isNaN(Eu) ? Ju = Nu = 64 : isNaN(Ku) && (Nu = 64), Xu += Ru.charAt(Qu) + Ru.charAt(mu) + Ru.charAt(Ju) + Ru.charAt(Nu);
          return Xu
        }(Ru)
      },
      Ku = uu => atob(uu),
      Qu = uu => "function" === typeof Uint8Array.fromBase64 ? Uint8Array.fromBase64(uu).buffer : function(uu) {
        const Ru = Ku(uu),
          yu = Ru.length,
          Eu = new Uint8Array(new ArrayBuffer(yu));
        for (let Ku = 0; Ku < yu; Ku++) Eu[Ku] = Ru.charCodeAt(Ku);
        return Eu.buffer
      }(uu)
  },
  39447: (uu, Ru, yu) => {
    yu.d(Ru, {
      e: () => Ku,
      f: () => mu
    });
    let Eu = [];
    class Ku {
      static SetImmediate(uu) {
        0 === Eu.length && setTimeout((() => {
          const uu = Eu;
          Eu = [];
          for (const Ru of uu) Ru()
        }), 1), Eu.push(uu)
      }
    }

    function Qu(uu, Ru, yu) {
      try {
        if (uu()) return Ru(), !0
      } catch (Eu) {
        return yu?.(Eu), !0
      }
      return !1
    }
    const mu = function(uu, Ru, yu) {
      let Eu = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 16,
        Ku = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3e4,
        mu = arguments.length > 6 ? arguments[6] : void 0;
      if ((!(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5]) && Qu(uu, Ru, yu)) return null;
      const Ju = setInterval((() => {
        Qu(uu, Ru, yu) ? clearInterval(Ju) : (Ku -= Eu, Ku < 0 && (clearInterval(Ju), yu?.(new Error("Operation timed out after maximum retries. " + (mu || "")), !0)))
      }), Eu);
      return () => clearInterval(Ju)
    }
  },
  39611: (uu, Ru, yu) => {
    yu.d(Ru, {
      e: () => Eu
    });
    class Eu {
      constructor() {
        this._xhr = "undefined" !== typeof _native && _native.XMLHttpRequest ? new _native.XMLHttpRequest : new XMLHttpRequest, this._requestURL = ""
      }
      static get IsCustomRequestAvailable() {
        return Object.keys(Eu.CustomRequestHeaders).length > 0 || Eu.CustomRequestModifiers.length > 0
      }
      static _CleanUrl(uu) {
        return uu = (uu = uu.replace("file:http:", "http:")).replace("file:https:", "https:")
      }
      static _ShouldSkipRequestModifications(uu) {
        return Eu.SkipRequestModificationForBabylonCDN && (uu.includes("preview.babylonjs.com") || uu.includes("cdn.babylonjs.com"))
      }
      static _CollectCustomizations(uu) {
        const Ru = {
          ...arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
        };
        if (Eu._ShouldSkipRequestModifications(uu)) return {
          url: uu,
          headers: Ru
        };
        for (const Ku in Eu.CustomRequestHeaders) {
          const uu = Eu.CustomRequestHeaders[Ku];
          uu && (Ru[Ku] = uu)
        }
        const yu = {
          setRequestHeader: (uu, yu) => {
            Ru[uu] = yu
          }
        };
        for (const Ku of Eu.CustomRequestModifiers) {
          if (Eu._ShouldSkipRequestModifications(uu)) break;
          const Ru = Ku(yu, uu);
          "string" === typeof Ru && (uu = Ru)
        }
        return {
          url: uu,
          headers: Ru
        }
      }
      static async FetchAsync(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const yu = Ru.method ?? "GET";
        if ("undefined" !== typeof fetch) {
          const {
            url: Ku,
            headers: Qu
          } = Eu._CollectCustomizations(Eu._CleanUrl(uu), Ru.headers ?? {});
          return await fetch(Ku, {
            method: yu,
            headers: Qu,
            body: Ru.body ?? void 0
          })
        }
        return await new Promise(((Ku, Qu) => {
          const mu = new Eu;
          mu.responseType = "arraybuffer", mu.addEventListener("readystatechange", (() => {
            if (4 === mu.readyState)
              if (mu.status >= 200 && mu.status < 300) {
                const uu = "undefined" !== typeof Headers ? new Headers : void 0,
                  Ru = mu.getResponseHeader("Content-Type");
                Ru && uu && uu.set("Content-Type", Ru), "undefined" !== typeof Response ? Ku(new Response(mu.response, {
                  status: mu.status,
                  statusText: mu.statusText,
                  headers: uu
                })) : Ku({
                  ok: !0,
                  status: mu.status,
                  statusText: mu.statusText,
                  headers: {
                    get: uu => mu.getResponseHeader(uu)
                  },
                  arrayBuffer: async () => await Promise.resolve(mu.response)
                })
              } else Qu(new Error(`HTTP ${mu.status} loading '${mu.requestURL}': ${mu.statusText}`))
          })), mu.open(yu, uu, Ru.headers), mu.send(Ru.body ?? null)
        }))
      }
      get requestURL() {
        return this._requestURL
      }
      get onprogress() {
        return this._xhr.onprogress
      }
      set onprogress(uu) {
        this._xhr.onprogress = uu
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
      set responseType(uu) {
        this._xhr.responseType = uu
      }
      get timeout() {
        return this._xhr.timeout
      }
      set timeout(uu) {
        this._xhr.timeout = uu
      }
      addEventListener(uu, Ru, yu) {
        this._xhr.addEventListener(uu, Ru, yu)
      }
      removeEventListener(uu, Ru, yu) {
        this._xhr.removeEventListener(uu, Ru, yu)
      }
      abort() {
        this._xhr.abort()
      }
      send(uu) {
        this._xhr.send(uu)
      }
      open(uu, Ru, yu) {
        const {
          url: Ku,
          headers: Qu
        } = Eu._CollectCustomizations(Ru, yu);
        this._requestURL = Eu._CleanUrl(Ku), this._xhr.open(uu, this._requestURL, !0);
        for (const Eu in Qu) this._xhr.setRequestHeader(Eu, Qu[Eu])
      }
      setRequestHeader(uu, Ru) {
        this._xhr.setRequestHeader(uu, Ru)
      }
      getResponseHeader(uu) {
        return this._xhr.getResponseHeader(uu)
      }
    }
    Eu.CustomRequestHeaders = {}, Eu.CustomRequestModifiers = new Array, Eu.SkipRequestModificationForBabylonCDN = !0
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);