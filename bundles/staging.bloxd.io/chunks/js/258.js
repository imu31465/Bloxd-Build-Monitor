export const id = 258;
export const ids = [258];
export const modules = {
  40319: (uu, Eu, ju) => {
    ju.d(Eu, {
      b: () => cu,
      f: () => bu,
      h: () => qu,
      l: () => Nu,
      n: () => fu,
      q: () => lu,
      s: () => Cu
    });
    var su = ju(39032),
      Uu = ju(40326);

    function Zu(uu, Eu, ju, su) {
      switch (Eu) {
        case 5120: {
          let Eu = uu.getInt8(ju);
          return su && (Eu = Math.max(Eu / 127, -1)), Eu
        }
        case 5121: {
          let Eu = uu.getUint8(ju);
          return su && (Eu /= 255), Eu
        }
        case 5122: {
          let Eu = uu.getInt16(ju, !0);
          return su && (Eu = Math.max(Eu / 32767, -1)), Eu
        }
        case 5123: {
          let Eu = uu.getUint16(ju, !0);
          return su && (Eu /= 65535), Eu
        }
        case 5131:
          return (0, Uu.e)(uu.getUint16(ju, !0));
        case 5124:
          return uu.getInt32(ju, !0);
        case 5125:
          return uu.getUint32(ju, !0);
        case 5126:
          return uu.getFloat32(ju, !0);
        default:
          throw new Error(`Invalid component type ${Eu}`)
      }
    }

    function Xu(uu, Eu, ju, su, Zu) {
      switch (Eu) {
        case 5120:
          su && (Zu = Math.round(127 * Zu)), uu.setInt8(ju, Zu);
          break;
        case 5121:
          su && (Zu = Math.round(255 * Zu)), uu.setUint8(ju, Zu);
          break;
        case 5122:
          su && (Zu = Math.round(32767 * Zu)), uu.setInt16(ju, Zu, !0);
          break;
        case 5123:
          su && (Zu = Math.round(65535 * Zu)), uu.setUint16(ju, Zu, !0);
          break;
        case 5131:
          uu.setUint16(ju, (0, Uu.k)(Zu), !0);
          break;
        case 5124:
          uu.setInt32(ju, Zu, !0);
          break;
        case 5125:
          uu.setUint32(ju, Zu, !0);
          break;
        case 5126:
          uu.setFloat32(ju, Zu, !0);
          break;
        default:
          throw new Error(`Invalid component type ${Eu}`)
      }
    }

    function lu(uu) {
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

    function qu(uu, Eu, ju, su, Uu, qu, fu, Cu) {
      const bu = new Array(su),
        cu = new Array(su);
      if (uu instanceof Array) {
        let Uu = Eu / 4;
        const Zu = ju / 4;
        for (let Eu = 0; Eu < qu; Eu += su) {
          for (let Eu = 0; Eu < su; Eu++) bu[Eu] = cu[Eu] = uu[Uu + Eu];
          Cu(cu, Eu);
          for (let Eu = 0; Eu < su; Eu++) bu[Eu] !== cu[Eu] && (uu[Uu + Eu] = cu[Eu]);
          Uu += Zu
        }
      } else {
        const Nu = ArrayBuffer.isView(uu) ? new DataView(uu.buffer, uu.byteOffset, uu.byteLength) : new DataView(uu),
          Ou = lu(Uu);
        for (let uu = 0; uu < qu; uu += su) {
          for (let uu = 0, ju = Eu; uu < su; uu++, ju += Ou) bu[uu] = cu[uu] = Zu(Nu, Uu, ju, fu);
          Cu(cu, uu);
          for (let uu = 0, ju = Eu; uu < su; uu++, ju += Ou) bu[uu] !== cu[uu] && Xu(Nu, Uu, ju, fu, cu[uu]);
          Eu += ju
        }
      }
    }

    function fu(uu, Eu, ju, Uu, Zu, Xu, fu, Cu) {
      const bu = Eu * lu(ju),
        cu = fu * Eu;
      if (5126 !== ju || Zu !== bu) {
        const su = new Float32Array(cu);
        return qu(uu, Uu, Zu, Eu, ju, cu, Xu, ((uu, ju) => {
          for (let Uu = 0; Uu < Eu; Uu++) su[ju + Uu] = uu[Uu]
        })), su
      }
      if (!(uu instanceof Array || uu instanceof Float32Array) || 0 !== Uu || uu.length !== cu) {
        if (uu instanceof Array) {
          const Eu = Uu / 4;
          return uu.slice(Eu, Eu + cu)
        }
        if (ArrayBuffer.isView(uu)) {
          const Eu = uu.byteOffset + Uu;
          return 0 !== (3 & Eu) && (su.b.Warn("Float array must be aligned to 4-bytes border"), Cu = !0), Cu ? new Float32Array(uu.buffer.slice(Eu, Eu + cu * Float32Array.BYTES_PER_ELEMENT)) : new Float32Array(uu.buffer, Eu, cu)
        }
        return new Float32Array(uu, Uu, cu)
      }
      return Cu ? uu.slice() : uu
    }

    function Cu(uu, Eu, ju, Uu, Zu, Xu, fu) {
      const Cu = lu(ju),
        bu = function(uu) {
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
        }(ju),
        cu = Xu * Eu;
      if (Array.isArray(uu)) {
        if (0 !== (3 & Uu) || 0 !== (3 & Zu)) throw new Error("byteOffset and byteStride must be a multiple of 4 for number[] data.");
        const su = Uu / 4,
          lu = Zu / 4;
        if (su + (Xu - 1) * lu + Eu > uu.length) throw new Error("Last accessed index is out of bounds.");
        if (lu < Eu) throw new Error("Data stride cannot be smaller than the component size.");
        if (lu !== Eu) {
          const su = new bu(cu);
          return qu(uu, Uu, Zu, Eu, ju, cu, !1, ((uu, ju) => {
            for (let Uu = 0; Uu < Eu; Uu++) su[ju + Uu] = uu[Uu]
          })), su
        }
        return new bu(uu.slice(su, su + cu))
      }
      let Nu, Ou = Uu;
      ArrayBuffer.isView(uu) ? (Nu = uu.buffer, Ou += uu.byteOffset) : Nu = uu;
      if (Ou + (Xu - 1) * Zu + Eu * Cu > Nu.byteLength) throw new Error("Last accessed byte is out of bounds.");
      const Yu = Eu * Cu;
      if (Zu < Yu) throw new Error("Byte stride cannot be smaller than the component's byte size.");
      if (Zu !== Yu) {
        const uu = new bu(cu),
          ju = new Uint8Array(Nu, Ou),
          su = new Uint8Array(uu.buffer),
          Uu = Eu * Cu;
        for (let Eu = 0, lu = 0, qu = 0; Eu < Xu; Eu++, lu += Zu, qu += Uu) su.set(ju.subarray(lu, lu + Uu), qu);
        return uu
      }
      return 1 !== Cu && 0 !== (Ou & Cu - 1) && (su.b.Warn("Array must be aligned to border of element size. Data will be copied."), fu = !0), fu ? new bu(Nu.slice(Ou, Ou + cu * Cu)) : new bu(Nu, Ou, cu)
    }

    function bu(uu, Eu, ju, Uu, Zu, Xu, fu, Cu) {
      const bu = Eu * lu(ju),
        cu = fu * Eu;
      if (Cu.length !== cu) throw new Error("Output length is not valid");
      if (5126 === ju && Zu === bu)
        if (uu instanceof Array) {
          const Eu = Uu / 4;
          Cu.set(uu, Eu)
        } else if (ArrayBuffer.isView(uu)) {
        const Eu = uu.byteOffset + Uu;
        if (0 !== (3 & Eu)) return su.b.Warn("Float array must be aligned to 4-bytes border"), void Cu.set(new Float32Array(uu.buffer.slice(Eu, Eu + cu * Float32Array.BYTES_PER_ELEMENT)));
        const ju = new Float32Array(uu.buffer, Eu, cu);
        Cu.set(ju)
      } else {
        const Eu = new Float32Array(uu, Uu, cu);
        Cu.set(Eu)
      } else qu(uu, Uu, Zu, Eu, ju, cu, Xu, ((uu, ju) => {
        for (let su = 0; su < Eu; su++) Cu[ju + su] = uu[su]
      }))
    }

    function cu(uu, Eu) {
      let ju = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        su = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
      if (Array.isArray(uu)) {
        for (let Uu = 0; Uu < Eu; Uu++)
          if (uu[ju + Uu] - su > 65535) return !0;
        return !1
      }
      return 4 === uu.BYTES_PER_ELEMENT
    }

    function Nu(uu) {
      const Eu = uu.buffer;
      if (Eu instanceof ArrayBuffer) return uu;
      const ju = new ArrayBuffer(uu.byteLength);
      return new Uint8Array(ju).set(new Uint8Array(Eu, uu.byteOffset, uu.byteLength)), ju
    }
  },
  40160: (uu, Eu, ju) => {
    ju.d(Eu, {
      e: () => Ju,
      i: () => pu,
      p: () => wu,
      l: () => vu,
      r: () => Ku
    });
    class su {
      constructor() {
        this.children = []
      }
      isValid(uu) {
        return !0
      }
      process(uu, Eu, ju) {
        let su = "";
        if (this.line) {
          let ju = this.line;
          const Uu = Eu.processor;
          if (Uu) {
            Uu.lineProcessor && (ju = Uu.lineProcessor(ju, Eu.isFragment, Eu.processingContext));
            const su = Eu.processor?.attributeKeywordName ?? "attribute",
              Zu = Eu.isFragment && Eu.processor?.varyingFragmentKeywordName ? Eu.processor?.varyingFragmentKeywordName : !Eu.isFragment && Eu.processor?.varyingVertexKeywordName ? Eu.processor?.varyingVertexKeywordName : "varying";
            if (!Eu.isFragment && Uu.attributeProcessor && this.line.startsWith(su)) ju = Uu.attributeProcessor(this.line, uu, Eu.processingContext);
            else if (Uu.varyingProcessor && (Uu.varyingCheck?.(this.line, Eu.isFragment) || !Uu.varyingCheck && this.line.startsWith(Zu))) ju = Uu.varyingProcessor(this.line, Eu.isFragment, uu, Eu.processingContext);
            else if (Uu.uniformProcessor && Uu.uniformRegexp && Uu.uniformRegexp.test(this.line)) Eu.lookForClosingBracketForUniformBuffer || (ju = Uu.uniformProcessor(this.line, Eu.isFragment, uu, Eu.processingContext));
            else if (Uu.uniformBufferProcessor && Uu.uniformBufferRegexp && Uu.uniformBufferRegexp.test(this.line)) Eu.lookForClosingBracketForUniformBuffer || (ju = Uu.uniformBufferProcessor(this.line, Eu.isFragment, Eu.processingContext), Eu.lookForClosingBracketForUniformBuffer = !0);
            else if (Uu.textureProcessor && Uu.textureRegexp && Uu.textureRegexp.test(this.line)) ju = Uu.textureProcessor(this.line, Eu.isFragment, uu, Eu.processingContext);
            else if ((Uu.uniformProcessor || Uu.uniformBufferProcessor) && this.line.startsWith("uniform") && !Eu.lookForClosingBracketForUniformBuffer) {
              /uniform\s+(?:(?:highp)?|(?:lowp)?)\s*(\S+)\s+(\S+)\s*;/.test(this.line) ? Uu.uniformProcessor && (ju = Uu.uniformProcessor(this.line, Eu.isFragment, uu, Eu.processingContext)) : Uu.uniformBufferProcessor && (ju = Uu.uniformBufferProcessor(this.line, Eu.isFragment, Eu.processingContext), Eu.lookForClosingBracketForUniformBuffer = !0)
            }
            Eu.lookForClosingBracketForUniformBuffer && -1 !== this.line.indexOf("}") && (Eu.lookForClosingBracketForUniformBuffer = !1, Uu.endOfUniformBufferProcessor && (ju = Uu.endOfUniformBufferProcessor(this.line, Eu.isFragment, Eu.processingContext)))
          }
          su += ju + "\n"
        }
        for (const Uu of this.children) su += Uu.process(uu, Eu, ju);
        return this.additionalDefineKey && (uu[this.additionalDefineKey] = this.additionalDefineValue || "true", ju[this.additionalDefineKey] = uu[this.additionalDefineKey]), su
      }
    }
    class Uu {
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
        for (const Eu of uu) {
          if (!Eu || "\r" === Eu) continue;
          if ("#" === Eu[0]) {
            this._lines.push(Eu);
            continue
          }
          const uu = Eu.trim();
          if (!uu) continue;
          if (uu.startsWith("//")) {
            this._lines.push(Eu);
            continue
          }
          const ju = uu.indexOf(";");
          if (-1 === ju) this._lines.push(uu);
          else if (ju === uu.length - 1) uu.length > 1 && this._lines.push(uu);
          else {
            const uu = Eu.split(";");
            for (let Eu = 0; Eu < uu.length; Eu++) {
              let ju = uu[Eu];
              ju && (ju = ju.trim(), ju && this._lines.push(ju + (Eu !== uu.length - 1 ? ";" : "")))
            }
          }
        }
      }
    }
    class Zu extends su {
      process(uu, Eu, ju) {
        for (let su = 0; su < this.children.length; su++) {
          const Uu = this.children[su];
          if (Uu.isValid(uu)) return Uu.process(uu, Eu, ju)
        }
        return ""
      }
    }
    class Xu extends su {
      isValid(uu) {
        return this.testExpression.isTrue(uu)
      }
    }
    class lu {
      isTrue(uu) {
        return !0
      }
      static postfixToInfix(uu) {
        const Eu = [];
        for (const ju of uu)
          if (void 0 === lu._OperatorPriority[ju]) Eu.push(ju);
          else {
            const uu = Eu[Eu.length - 1],
              su = Eu[Eu.length - 2];
            Eu.length -= 2, Eu.push(`(${su}${ju}${uu})`)
          } return Eu[Eu.length - 1]
      }
      static infixToPostfix(uu) {
        const Eu = lu._InfixToPostfixCache.get(uu);
        if (Eu) return Eu.accessTime = Date.now(), Eu.result;
        if (!uu.includes("&&") && !uu.includes("||") && !uu.includes(")") && !uu.includes("(")) return [uu];
        const ju = [];
        let su = -1;
        const Uu = () => {
            Cu = Cu.trim(), "" !== Cu && (ju.push(Cu), Cu = "")
          },
          Zu = uu => {
            su < lu._Stack.length - 1 && (lu._Stack[++su] = uu)
          },
          Xu = () => lu._Stack[su],
          qu = () => -1 === su ? "!!INVALID EXPRESSION!!" : lu._Stack[su--];
        let fu = 0,
          Cu = "";
        for (; fu < uu.length;) {
          const Eu = uu.charAt(fu),
            bu = fu < uu.length - 1 ? uu.substring(fu, 2 + fu) : "";
          if ("(" === Eu) Cu = "", Zu(Eu);
          else if (")" === Eu) {
            for (Uu(); - 1 !== su && "(" !== Xu();) ju.push(qu());
            qu()
          } else if (lu._OperatorPriority[bu] > 1) {
            for (Uu(); - 1 !== su && lu._OperatorPriority[Xu()] >= lu._OperatorPriority[bu];) ju.push(qu());
            Zu(bu), fu++
          } else Cu += Eu;
          fu++
        }
        for (Uu(); - 1 !== su;) "(" === Xu() ? qu() : ju.push(qu());
        return lu._InfixToPostfixCache.size >= lu.InfixToPostfixCacheLimitSize && lu.ClearCache(), lu._InfixToPostfixCache.set(uu, {
          result: ju,
          accessTime: Date.now()
        }), ju
      }
      static ClearCache() {
        const uu = Array.from(lu._InfixToPostfixCache.entries()).sort(((uu, Eu) => uu[1].accessTime - Eu[1].accessTime));
        for (let Eu = 0; Eu < lu.InfixToPostfixCacheCleanupSize; Eu++) lu._InfixToPostfixCache.delete(uu[Eu][0])
      }
    }
    lu.InfixToPostfixCacheLimitSize = 5e4, lu.InfixToPostfixCacheCleanupSize = 25e3, lu._InfixToPostfixCache = new Map, lu._OperatorPriority = {
      ")": 0,
      "(": 1,
      "||": 2,
      "&&": 3
    }, lu._Stack = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];
    class qu extends lu {
      constructor(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        super(), this.define = uu, this.not = Eu
      }
      isTrue(uu) {
        let Eu = void 0 !== uu[this.define];
        return this.not && (Eu = !Eu), Eu
      }
    }
    class fu extends lu {
      isTrue(uu) {
        return this.leftOperand.isTrue(uu) || this.rightOperand.isTrue(uu)
      }
    }
    class Cu extends lu {
      isTrue(uu) {
        return this.leftOperand.isTrue(uu) && this.rightOperand.isTrue(uu)
      }
    }
    class bu extends lu {
      constructor(uu, Eu, ju) {
        super(), this.define = uu, this.operand = Eu, this.testValue = ju
      }
      toString() {
        return `${this.define} ${this.operand} ${this.testValue}`
      }
      isTrue(uu) {
        let Eu = !1;
        const ju = parseInt(void 0 != uu[this.define] ? uu[this.define] : this.define),
          su = parseInt(void 0 != uu[this.testValue] ? uu[this.testValue] : this.testValue);
        if (isNaN(ju) || isNaN(su)) return !1;
        switch (this.operand) {
          case ">":
            Eu = ju > su;
            break;
          case "<":
            Eu = ju < su;
            break;
          case "<=":
            Eu = ju <= su;
            break;
          case ">=":
            Eu = ju >= su;
            break;
          case "==":
            Eu = ju === su;
            break;
          case "!=":
            Eu = ju !== su
        }
        return Eu
      }
    }
    var cu = ju(40153),
      Nu = ju(40149);
    const Ou = /defined\s*?\((.+?)\)/g,
      Yu = /defined\s*?\[(.+?)\]/g,
      hu = /#include\s?<(.+)>(\((.*)\))*(\[(.*)\])*/g,
      Du = /__decl__/,
      gu = /light\{X\}.(\w*)/g,
      Mu = /\{X\}/g,
      eu = [],
      Gu = /(#ifdef)|(#else)|(#elif)|(#endif)|(#ifndef)|(#if)/;

    function pu(uu) {
      uu.processor && uu.processor.initializeShaders && uu.processor.initializeShaders(uu.processingContext)
    }

    function wu(uu, Eu, ju, su) {
      Eu.processor?.preProcessShaderCode && (uu = Eu.processor.preProcessShaderCode(uu, Eu.isFragment)), vu(uu, Eu, (uu => {
        Eu.processCodeAfterIncludes && (uu = Eu.processCodeAfterIncludes(Eu.isFragment ? "fragment" : "vertex", uu, Eu.defines));
        const Uu = function(uu, Eu, ju) {
          let su = function(uu, Eu) {
            if (Eu.processor?.noPrecision) return uu;
            const ju = Eu.shouldUseHighPrecisionShader; - 1 === uu.indexOf("precision highp float") ? uu = ju ? "precision highp float;\n" + uu : "precision mediump float;\n" + uu : ju || (uu = uu.replace("precision highp float", "precision mediump float"));
            return uu
          }(uu, Eu);
          if (!Eu.processor) return su;
          if (0 === Eu.processor.shaderLanguage && -1 !== su.indexOf("#version 3") && (su = su.replace("#version 300 es", ""), !Eu.processor.parseGLES3)) return su;
          const Uu = Eu.defines,
            Zu = mu(Eu, ju);
          Eu.processor.preProcessor && (su = Eu.processor.preProcessor(su, Uu, Zu, Eu.isFragment, Eu.processingContext));
          const Xu = {};
          su = ku(su, Zu, Eu, Xu), Eu.processor.postProcessor && (su = Eu.processor.postProcessor(su, Uu, Eu.isFragment, Eu.processingContext, ju ? {
            drawBuffersExtensionDisabled: !ju.getCaps().drawBuffersExtension
          } : {}, Zu, Xu));
          ju?._features.needShaderCodeInlining && (su = ju.inlineShaderCode(su));
          return su
        }(uu, Eu, su);
        ju(Uu, uu)
      }))
    }

    function Ju(uu, Eu, ju) {
      return ju.processor && ju.processor.finalizeShaders ? ju.processor.finalizeShaders(uu, Eu, ju.processingContext) : {
        vertexCode: uu,
        fragmentCode: Eu
      }
    }

    function du(uu) {
      const Eu = /defined\((.+)\)/.exec(uu);
      if (Eu && Eu.length) return new qu(Eu[1].trim(), "!" === uu[0]);
      const ju = ["==", "!=", ">=", "<=", "<", ">"];
      let su = "",
        Uu = 0;
      for (su of ju)
        if (Uu = uu.indexOf(su), Uu > -1) break;
      if (-1 === Uu) return new qu(uu);
      const Zu = uu.substring(0, Uu).trim(),
        Xu = uu.substring(Uu + su.length).trim();
      return new bu(Zu, su, Xu)
    }

    function au(uu, Eu) {
      const ju = new Xu,
        su = uu.substring(0, Eu);
      let Uu = uu.substring(Eu);
      return Uu = Uu.substring(0, (Uu.indexOf("//") + 1 || Uu.length + 1) - 1).trim(), ju.testExpression = "#ifdef" === su ? new qu(Uu) : "#ifndef" === su ? new qu(Uu, !0) : function(uu) {
        uu = uu.replace(Ou, "defined[$1]");
        const Eu = lu.infixToPostfix(uu),
          ju = [];
        for (const Uu of Eu)
          if ("||" !== Uu && "&&" !== Uu) ju.push(Uu);
          else if (ju.length >= 2) {
          let uu = ju[ju.length - 1],
            Eu = ju[ju.length - 2];
          ju.length -= 2;
          const su = "&&" == Uu ? new Cu : new fu;
          "string" === typeof uu && (uu = uu.replace(Yu, "defined($1)")), "string" === typeof Eu && (Eu = Eu.replace(Yu, "defined($1)")), su.leftOperand = "string" === typeof Eu ? du(Eu) : Eu, su.rightOperand = "string" === typeof uu ? du(uu) : uu, ju.push(su)
        }
        let su = ju[ju.length - 1];
        return "string" === typeof su && (su = su.replace(Yu, "defined($1)")), "string" === typeof su ? du(su) : su
      }(Uu), ju
    }

    function Pu(uu, Eu, ju, Uu) {
      let Zu;
      for (; ou(uu, ju, Uu);) {
        Zu = uu.currentLine;
        const Xu = Zu.substring(0, 5).toLowerCase();
        if ("#else" === Xu) {
          const ju = new su;
          return Eu.children.push(ju), void ou(uu, ju, Uu)
        }
        if ("#elif" === Xu) {
          const uu = au(Zu, 5);
          Eu.children.push(uu), ju = uu
        }
      }
    }

    function ou(uu, Eu, ju) {
      for (; uu.canRead;) {
        uu.lineIndex++;
        const Uu = uu.currentLine;
        if (Uu.indexOf("#") >= 0) {
          const su = Gu.exec(Uu);
          if (su && su.length) {
            switch (su[0]) {
              case "#ifdef": {
                const su = new Zu;
                Eu.children.push(su);
                const Xu = au(Uu, 6);
                su.children.push(Xu), Pu(uu, su, Xu, ju);
                break
              }
              case "#else":
              case "#elif":
                return !0;
              case "#endif":
                return !1;
              case "#ifndef": {
                const su = new Zu;
                Eu.children.push(su);
                const Xu = au(Uu, 7);
                su.children.push(Xu), Pu(uu, su, Xu, ju);
                break
              }
              case "#if": {
                const su = new Zu,
                  Xu = au(Uu, 3);
                Eu.children.push(su), su.children.push(Xu), Pu(uu, su, Xu, ju);
                break
              }
            }
            continue
          }
        }
        const Xu = new su;
        if (Xu.line = Uu, Eu.children.push(Xu), "#" === Uu[0] && "d" === Uu[1]) {
          const uu = Uu.replace(";", "").split(" ");
          Xu.additionalDefineKey = uu[1], 3 === uu.length && (Xu.additionalDefineValue = uu[2])
        }
      }
      return !1
    }

    function ku(uu, Eu, ju, Zu) {
      const Xu = new su,
        lu = new Uu;
      return lu.lineIndex = -1, lu.lines = uu.split("\n"), ou(lu, Xu, Zu), Xu.process(Eu, ju, Zu)
    }

    function mu(uu, Eu) {
      const ju = uu.defines,
        su = {};
      for (const Uu of ju) {
        const uu = Uu.replace("#define", "").replace(";", "").trim().split(" ");
        su[uu[0]] = uu.length > 1 ? uu[1] : ""
      }
      return 0 === uu.processor?.shaderLanguage && (su.GL_ES = "true"), su.__VERSION__ = uu.version, su[uu.platformName] = "true", (0, Nu.k)(su, Eu?.isNDCHalfZRange, Eu?.bsu, Eu?.useExactSrgbConversions), su
    }

    function vu(uu, Eu, ju) {
      let su;
      for (eu.length = 0; null !== (su = hu.exec(uu));) eu.push(su);
      let Uu = [uu],
        Zu = !1;
      for (const lu of eu) {
        let uu = lu[1];
        if (-1 !== uu.indexOf("__decl__") && (uu = uu.replace(Du, ""), Eu.supportsUniformBuffers && (uu = uu.replace("Vertex", "Ubo").replace("Fragment", "Ubo")), uu += "Declaration"), !Eu.includesShadersStore[uu]) {
          const su = Eu.shadersRepository + "ShadersInclude/" + uu + ".fx";
          return void Ku.loadFile(su, (su => {
            Eu.includesShadersStore[uu] = su, vu(Uu.join(""), Eu, ju)
          }))
        } {
          let ju = Eu.includesShadersStore[uu];
          if (lu[2]) {
            const uu = lu[3].split(",");
            for (let Eu = 0; Eu < uu.length; Eu += 2) {
              const su = new RegExp(uu[Eu], "g"),
                Uu = uu[Eu + 1];
              ju = ju.replace(su, Uu)
            }
          }
          if (lu[4]) {
            const uu = lu[5];
            if (-1 !== uu.indexOf("..")) {
              const su = uu.split(".."),
                Uu = parseInt(su[0]);
              let Zu = parseInt(su[1]),
                Xu = ju.slice(0);
              ju = "", isNaN(Zu) && (Zu = Eu.indexParameters[su[1]]);
              for (let uu = Uu; uu < Zu; uu++) Eu.supportsUniformBuffers || (Xu = Xu.replace(gu, ((uu, Eu) => Eu + "{X}"))), ju += Xu.replace(Mu, uu.toString()) + "\n"
            } else Eu.supportsUniformBuffers || (ju = ju.replace(gu, ((uu, Eu) => Eu + "{X}"))), ju = ju.replace(Mu, uu)
          }
          const su = [];
          for (const uu of Uu) {
            const Eu = uu.split(lu[0]);
            for (let uu = 0; uu < Eu.length - 1; uu++) su.push(Eu[uu]), su.push(ju);
            su.push(Eu[Eu.length - 1])
          }
          Uu = su, Zu = Zu || ju.indexOf("#include<") >= 0 || ju.indexOf("#include <") >= 0
        }
      }
      eu.length = 0;
      const Xu = Uu.join("");
      Zu ? vu(Xu.toString(), Eu, ju) : ju(Xu)
    }
    const Ku = {
      loadFile: (uu, Eu, ju, su, Uu, Zu) => {
        throw (0, cu.h)("FileTools")
      }
    }
  },
  40149: (uu, Eu, ju) => {
    ju.d(Eu, {
      e: () => Uu,
      g: () => Zu,
      k: () => lu,
      l: () => Xu,
      o: () => qu
    });
    var su = ju(40153);
    const Uu = {};

    function Zu(uu, Eu) {
      return (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "") + (Eu ? Eu + "\n" : "") + uu
    }

    function Xu(uu, Eu, ju, Zu, Xu, lu, qu) {
      const fu = qu || Uu.loadFile;
      if (!fu) throw (0, su.h)("FileTools");
      return fu(uu, Eu, ju, Zu, Xu, lu)
    }

    function lu(uu, Eu, ju, su) {
      if (uu) return Eu ? uu.IS_NDC_HALF_ZRANGE = "" : delete uu.IS_NDC_HALF_ZRANGE, ju ? uu.USE_REVERSE_DEPTHBUFFER = "" : delete uu.USE_REVERSE_DEPTHBUFFER, void(su ? uu.USE_EXACT_SRGB_CONVERSIONS = "" : delete uu.USE_EXACT_SRGB_CONVERSIONS);
      {
        let uu = "";
        return Eu && (uu += "#define IS_NDC_HALF_ZRANGE"), ju && (uu && (uu += "\n"), uu += "#define USE_REVERSE_DEPTHBUFFER"), su && (uu && (uu += "\n"), uu += "#define USE_EXACT_SRGB_CONVERSIONS"), uu
      }
    }

    function qu(uu, Eu) {
      let ju = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        su = arguments.length > 3 ? arguments[3] : void 0;
      switch (uu) {
        case 3: {
          const uu = new Int8Array(Eu);
          return su && uu.set(new Int8Array(su)), uu
        }
        case 0: {
          const uu = new Uint8Array(Eu);
          return su && uu.set(new Uint8Array(su)), uu
        }
        case 4: {
          const uu = "number" !== typeof Eu ? new Int16Array(Eu) : new Int16Array(ju ? Eu / 2 : Eu);
          return su && uu.set(new Int16Array(su)), uu
        }
        case 5:
        case 8:
        case 9:
        case 10:
        case 2: {
          const uu = "number" !== typeof Eu ? new Uint16Array(Eu) : new Uint16Array(ju ? Eu / 2 : Eu);
          return su && uu.set(new Uint16Array(su)), uu
        }
        case 6: {
          const uu = "number" !== typeof Eu ? new Int32Array(Eu) : new Int32Array(ju ? Eu / 4 : Eu);
          return su && uu.set(new Int32Array(su)), uu
        }
        case 7:
        case 11:
        case 12:
        case 13:
        case 14:
        case 15: {
          const uu = "number" !== typeof Eu ? new Uint32Array(Eu) : new Uint32Array(ju ? Eu / 4 : Eu);
          return su && uu.set(new Uint32Array(su)), uu
        }
        case 1: {
          const uu = "number" !== typeof Eu ? new Float32Array(Eu) : new Float32Array(ju ? Eu / 4 : Eu);
          return su && uu.set(new Float32Array(su)), uu
        }
      }
      const Uu = new Uint8Array(Eu);
      return su && Uu.set(new Uint8Array(su)), Uu
    }
  },
  40153: (uu, Eu, ju) => {
    ju.d(Eu, {
      b: () => fu,
      d: () => Cu,
      g: () => qu,
      h: () => Uu
    });
    const su = {};

    function Uu(uu) {
      if (!(arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) || !su[uu]) return su[uu] = !0, `${uu} needs to be imported before as it contains a side-effect required by your code.`
    }
    const Zu = {};
    let Xu = !1,
      lu = 0;

    function qu(uu, Eu) {
      let ju = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      const su = function() {
        if ((ju || Xu) && 0 === lu) {
          const ju = `${uu}.${Eu}`;
          Zu[ju] || (Zu[ju] = !0, console.warn(`[Babylon.js] ${ju}() requires a side-effect import. See: https://doc.babylonjs.com/setup/treeshaking`))
        }
      };
      return su.__isSideEffectStub = !0, su
    }

    function fu(uu) {
      return !!uu && !uu.__isSideEffectStub
    }

    function Cu(uu, Eu) {
      return {
        get() {},
        set(uu) {
          Object.defineProperty(this, Eu, {
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
  40138: (uu, Eu, ju) => {
    function su() {
      return "undefined" !== typeof window
    }

    function Uu() {
      return "undefined" !== typeof navigator
    }

    function Zu() {
      return "undefined" !== typeof document
    }

    function Xu(uu) {
      let Eu = "",
        ju = uu.firstChild;
      for (; ju;) 3 === ju.nodeType && (Eu += ju.textContent), ju = ju.nextSibling;
      return Eu
    }
    ju.d(Eu, {
      d: () => Xu,
      e: () => Zu,
      i: () => Uu,
      m: () => su
    })
  },
  40308: (uu, Eu, ju) => {
    ju.d(Eu, {
      d: () => su,
      f: () => Uu,
      i: () => Zu
    });
    class su extends Error {}
    su._setPrototypeOf = Object.setPrototypeOf || ((uu, Eu) => (uu.__proto__ = Eu, uu));
    const Uu = {
      MeshInvalidPositionsError: 0,
      UnsupportedTextureError: 1e3,
      GLTFLoaderUnexpectedMagicError: 2e3,
      SceneLoaderError: 3e3,
      LoadFileError: 4e3,
      RequestFileError: 4001,
      ReadFileError: 4002
    };
    class Zu extends su {
      constructor(uu, Eu, ju) {
        super(uu), this.errorCode = Eu, this.innerError = ju, this.name = "RuntimeError", su._setPrototypeOf(this, Zu.prototype)
      }
    }
  },
  40294: (uu, Eu, ju) => {
    ju.d(Eu, {
      d: () => mu,
      g: () => Mu,
      h: () => au,
      l: () => ou,
      m: () => Ju,
      q: () => pu,
      r: () => wu,
      v: () => Qu,
      x: () => du,
      z: () => eu
    });
    var su = ju(40302),
      Uu = ju(40138),
      Zu = ju(37514);
    class Xu {}
    Xu.FilesToLoad = {};
    var lu = ju(40308),
      qu = ju(40312),
      fu = ju(37506),
      Cu = ju(40149),
      bu = ju(40160),
      cu = ju(39032),
      Nu = ju(40164),
      Ou = ju(40319);
    const Yu = new RegExp(/^data:([^,]+\/[^,]+)?;base64,/i);
    class hu extends lu.i {
      constructor(uu, Eu) {
        super(uu, lu.f.LoadFileError), this.name = "LoadFileError", lu.d._setPrototypeOf(this, hu.prototype), Eu instanceof su.b ? this.request = Eu : this.file = Eu
      }
    }
    class Du extends lu.i {
      constructor(uu, Eu) {
        super(uu, lu.f.RequestFileError), this.request = Eu, this.name = "RequestFileError", lu.d._setPrototypeOf(this, Du.prototype)
      }
    }
    class gu extends lu.i {
      constructor(uu, Eu) {
        super(uu, lu.f.ReadFileError), this.file = Eu, this.name = "ReadFileError", lu.d._setPrototypeOf(this, gu.prototype)
      }
    }
    const Mu = {
        DefaultRetryStrategy: class {
          static ExponentialBackoff() {
            let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 3,
              Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 500;
            return (ju, su, Uu) => 0 !== su.status || Uu >= uu || -1 !== ju.indexOf("file:") ? -1 : Math.pow(2, Uu) * Eu
          }
        }.ExponentialBackoff(),
        BaseUrl: "",
        CorsBehavior: "anonymous",
        PreprocessUrl: uu => uu,
        ScriptBaseUrl: "",
        ScriptPreprocessUrl: uu => uu,
        CleanUrl: uu => uu = uu.replace(/#/gm, "%23")
      },
      eu = (uu, Eu) => {
        if ((!uu || 0 !== uu.indexOf("data:")) && Mu.CorsBehavior)
          if ("string" === typeof Mu.CorsBehavior || Mu.CorsBehavior instanceof String) Eu.crossOrigin = Mu.CorsBehavior;
          else {
            const ju = Mu.CorsBehavior(uu);
            ju && (Eu.crossOrigin = ju)
          }
      },
      Gu = {
        getRequiredSize: null
      },
      pu = function(uu, Eu, ju, Uu) {
        let Zu, lu = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "",
          Cu = arguments.length > 5 ? arguments[5] : void 0,
          bu = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : fu.b.LastCreatedEngine;
        if ("undefined" === typeof HTMLImageElement && !bu?._features.forceBitmapOverHTMLImageElement) return ju("LoadImage is only supported in web or BabylonNative environments."), null;
        if (bu?._features.forceBitmapOverHTMLImageElement && "string" !== typeof uu && "undefined" !== typeof Blob) {
          let su;
          if (uu instanceof Blob) su = uu;
          else {
            const Eu = uu instanceof ArrayBuffer ? uu : (0, Ou.l)(uu);
            su = new Blob([Eu], {
              type: lu
            })
          }
          return bu.createImageBitmap(su, {
            premultiplyAlpha: "none",
            colorSpaceConversion: "none",
            ...Cu
          }).then(Eu).catch((Eu => {
            ju && ju("Error while trying to load image: " + uu, Eu)
          })), null
        }
        let cu = !1;
        if (uu instanceof ArrayBuffer || ArrayBuffer.isView(uu))
          if ("undefined" !== typeof Blob && "undefined" !== typeof URL) {
            let Eu;
            Eu = uu instanceof ArrayBuffer ? uu : (0, Ou.l)(uu), Zu = URL.createObjectURL(new Blob([Eu], {
              type: lu
            })), cu = !0
          } else Zu = `data:${lu};base64,` + (0, qu.e)(uu);
        else uu instanceof Blob ? (Zu = URL.createObjectURL(uu), cu = !0) : (Zu = Mu.CleanUrl(uu), Zu = Mu.PreprocessUrl(Zu));
        const Nu = Eu => {
          if (ju) {
            const su = Zu || uu.toString();
            ju(`Error while trying to load image: ${0===su.indexOf("http")||su.length<=128?su:su.slice(0,128)+"..."}`, Eu)
          }
        };
        if (bu?._features.forceBitmapOverHTMLImageElement) return Ju(Zu, (su => {
          bu.createImageBitmap(new Blob([su], {
            type: lu
          }), {
            premultiplyAlpha: "none",
            colorSpaceConversion: "none",
            ...Cu
          }).then((uu => {
            Eu(uu), cu && URL.revokeObjectURL(Zu)
          })).catch((Eu => {
            ju && ju("Error while trying to load image: " + uu, Eu)
          }))
        }), void 0, Uu || void 0, !0, ((uu, Eu) => {
          Nu(Eu)
        })), null;
        const Yu = new Image;
        if (Gu.getRequiredSize) {
          const Eu = Gu.getRequiredSize(uu);
          Eu.width && (Yu.width = Eu.width), Eu.height && (Yu.height = Eu.height)
        }
        eu(Zu, Yu);
        const hu = [],
          Du = () => {
            for (const uu of hu) uu.target.removeEventListener(uu.name, uu.handler);
            hu.length = 0
          };
        hu.push({
          target: Yu,
          name: "load",
          handler: () => {
            Du(), Eu(Yu), cu && Yu.src && URL.revokeObjectURL(Yu.src)
          }
        }), hu.push({
          target: Yu,
          name: "error",
          handler: uu => {
            Du(), Nu(uu), cu && Yu.src && URL.revokeObjectURL(Yu.src)
          }
        }), hu.push({
          target: document,
          name: "securitypolicyviolation",
          handler: uu => {
            if (uu.blockedURI !== Yu.src || "HN" === uu.disposition) return;
            Du();
            const Eu = new Error(`CSP violation of policy ${uu.effectiveDirective} ${uu.blockedURI}. Current policy is ${uu.originalPolicy}`);
            fu.b.UseFallbackTexture = !1, Nu(Eu), cu && Yu.src && URL.revokeObjectURL(Yu.src), Yu.src = ""
          }
        }), (() => {
          for (const uu of hu) uu.target.addEventListener(uu.name, uu.handler)
        })();
        const gu = "blob:" === Zu.substring(0, 5),
          pu = "data:" === Zu.substring(0, 5),
          wu = () => {
            gu || pu || !su.b.IsCustomRequestAvailable ? Yu.src = Zu : Ju(Zu, ((uu, Eu, ju) => {
              const su = new Blob([uu], {
                  type: !lu && ju ? ju : lu
                }),
                Uu = URL.createObjectURL(su);
              cu = !0, Yu.src = Uu
            }), void 0, Uu || void 0, !0, ((uu, Eu) => {
              Nu(Eu)
            }))
          },
          du = () => {
            Uu && Uu.loadImage(Zu, Yu)
          };
        if (!gu && !pu && Uu && Uu.enableTexturesOffline) Uu.open(du, wu);
        else {
          if (-1 !== Zu.indexOf("file:")) {
            const uu = decodeURIComponent(Zu.substring(5).toLowerCase());
            if (Xu.FilesToLoad[uu] && "undefined" !== typeof URL) {
              try {
                let Eu;
                try {
                  Eu = URL.createObjectURL(Xu.FilesToLoad[uu])
                } catch (au) {
                  Eu = URL.createObjectURL(Xu.FilesToLoad[uu])
                }
                Yu.src = Eu, cu = !0
              } catch (Pu) {
                Yu.src = ""
              }
              return Yu
            }
          }
          wu()
        }
        return Yu
      },
      wu = (uu, Eu, ju, su, Uu) => {
        const Xu = new FileReader,
          lu = {
            onCompleteObservable: new Zu.d,
            abort: () => Xu.abort()
          };
        return Xu.onloadend = () => lu.onCompleteObservable.notifyObservers(lu), Uu && (Xu.onerror = () => {
          Uu(new gu(`Unable to read ${uu.name}`, uu))
        }), Xu.onload = uu => {
          Eu(uu.target.result)
        }, ju && (Xu.onprogress = ju), su ? Xu.readAsArrayBuffer(uu) : Xu.readAsText(uu), lu
      },
      Ju = (uu, Eu, ju, su, Uu, qu, fu) => {
        if (uu.name) return wu(uu, Eu, ju, Uu, qu ? uu => {
          qu(void 0, uu)
        } : void 0);
        const Cu = uu;
        if (-1 !== Cu.indexOf("file:")) {
          let uu = decodeURIComponent(Cu.substring(5).toLowerCase());
          0 === uu.indexOf("./") && (uu = uu.substring(2));
          const su = Xu.FilesToLoad[uu];
          if (su) return wu(su, Eu, ju, Uu, qu ? uu => qu(void 0, new hu(uu.message, uu.file)) : void 0)
        }
        const {
          match: bu,
          type: Ou
        } = ku(Cu);
        if (bu) {
          const uu = {
            onCompleteObservable: new Zu.d,
            abort: () => () => {}
          };
          try {
            const uu = Uu ? mu(Cu) : vu(Cu);
            Eu(uu, void 0, Ou)
          } catch (lu) {
            qu ? qu(void 0, lu) : cu.b.Error(lu.message || "Failed to parse the Data URL")
          }
          return Nu.c.SetImmediate((() => {
            uu.onCompleteObservable.notifyObservers(uu)
          })), uu
        }
        return du(Cu, ((uu, ju) => {
          Eu(uu, ju?.responseURL, ju?.getResponseHeader("content-type"))
        }), ju, su, Uu, qu ? uu => {
          qu(uu.request, new hu(uu.message, uu.request))
        } : void 0, fu)
      },
      du = (uu, Eu, ju, Xu, lu, qu, Cu) => {
        null !== Xu && (Xu ?? (Xu = fu.b.LastCreatedScene?.offlineProvider)), uu = Mu.CleanUrl(uu), uu = Mu.PreprocessUrl(uu);
        const bu = Mu.BaseUrl + uu;
        let Nu = !1;
        const Ou = {
            onCompleteObservable: new Zu.d,
            abort: () => Nu = !0
          },
          Yu = () => {
            let uu, Zu = new su.b,
              Xu = null;
            const fu = () => {
              Zu && (ju && Zu.removeEventListener("progress", ju), uu && Zu.removeEventListener("readystatechange", uu), Zu.removeEventListener("loadend", Yu))
            };
            let Yu = () => {
              fu(), Ou.onCompleteObservable.notifyObservers(Ou), Ou.onCompleteObservable.clear(), ju = void 0, uu = null, Yu = null, qu = void 0, Cu = void 0, Eu = void 0
            };
            Ou.abort = () => {
              Nu = !0, Yu && Yu(), Zu && Zu.readyState !== (XMLHttpRequest.DONE || 4) && Zu.abort(), null !== Xu && (clearTimeout(Xu), Xu = null), Zu = null
            };
            const hu = uu => {
                const Eu = uu.message || "Unknown error";
                qu && Zu ? qu(new Du(Eu, Zu)) : cu.b.Error(Eu)
              },
              gu = cu => {
                if (Zu) {
                  if (Zu.open("GET", bu), Cu) try {
                    Cu(Zu)
                  } catch (Ou) {
                    return void hu(Ou)
                  }
                  lu && (Zu.responseType = "arraybuffer"), ju && Zu.addEventListener("progress", ju), Yu && Zu.addEventListener("loadend", Yu), uu = () => {
                    if (!Nu && Zu && Zu.readyState === (XMLHttpRequest.DONE || 4)) {
                      if (uu && Zu.removeEventListener("readystatechange", uu), Zu.status >= 200 && Zu.status < 300 || 0 === Zu.status && (!(0, Uu.m)() || Pu())) {
                        const uu = lu ? Zu.response : Zu.responseText;
                        if (null !== uu) {
                          try {
                            Eu && Eu(uu, Zu)
                          } catch (Ou) {
                            hu(Ou)
                          }
                          return
                        }
                      }
                      const ju = Mu.DefaultRetryStrategy;
                      if (ju) {
                        const uu = ju(bu, Zu, cu);
                        if (-1 !== uu) return fu(), Zu = new su.b, void(Xu = setTimeout((() => gu(cu + 1)), uu))
                      }
                      const Cu = new Du("Error status: " + Zu.status + " " + Zu.statusText + " - Unable to load " + bu, Zu);
                      qu && qu(Cu)
                    }
                  }, Zu.addEventListener("readystatechange", uu), Zu.send()
                }
              };
            gu(0)
          };
        if (Xu && Xu.enableSceneOffline && !uu.startsWith("blob:")) {
          const su = uu => {
              uu && uu.status > 400 ? qu && qu(uu) : Yu()
            },
            Uu = () => {
              Xu && Xu.loadFile(Mu.BaseUrl + uu, (uu => {
                !Nu && Eu && Eu(uu), Ou.onCompleteObservable.notifyObservers(Ou)
              }), ju ? uu => {
                !Nu && ju && ju(uu)
              } : void 0, su, lu)
            };
          Xu.open(Uu, su)
        } else Yu();
        return Ou
      },
      au = uu => {
        const {
          match: Eu,
          type: ju
        } = ku(uu);
        if (Eu) return ju || void 0;
        const su = uu.lastIndexOf(".");
        switch (uu.substring(su + 1).toLowerCase()) {
          case "glb":
            return "model/gltf-binary";
          case "bin":
            return "application/octet-stream";
          case "WK":
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
      Pu = () => "undefined" !== typeof location && "file:" === location.protocol,
      ou = uu => Yu.test(uu),
      ku = uu => {
        const Eu = Yu.exec(uu);
        if (null === Eu || 0 === Eu.length) return {
          match: !1,
          type: ""
        };
        return {
          match: !0,
          type: Eu[0].replace("data:", "").replace(";base64,", "")
        }
      };

    function mu(uu) {
      return (0, qu.c)(uu.split(",")[1])
    }
    const vu = uu => (0, qu.d)(uu.split(",")[1]);
    let Ku;
    const Vu = (uu, Eu, ju, su, Uu, Zu, Xu, lu, qu, fu) => {
      Ku = {
        DecodeBase64UrlToBinary: uu,
        DecodeBase64UrlToString: Eu,
        DefaultRetryStrategy: ju.DefaultRetryStrategy,
        BaseUrl: ju.BaseUrl,
        CorsBehavior: ju.CorsBehavior,
        PreprocessUrl: ju.PreprocessUrl,
        IsBase64DataUrl: su,
        IsFileURL: Uu,
        LoadFile: Zu,
        LoadImage: Xu,
        ReadFile: lu,
        RequestFile: qu,
        SetCorsBehavior: fu
      }, Object.defineProperty(Ku, "DefaultRetryStrategy", {
        get: function() {
          return ju.DefaultRetryStrategy
        },
        set: function(uu) {
          ju.DefaultRetryStrategy = uu
        }
      }), Object.defineProperty(Ku, "BaseUrl", {
        get: function() {
          return ju.BaseUrl
        },
        set: function(uu) {
          ju.BaseUrl = uu
        }
      }), Object.defineProperty(Ku, "PreprocessUrl", {
        get: function() {
          return ju.PreprocessUrl
        },
        set: function(uu) {
          ju.PreprocessUrl = uu
        }
      }), Object.defineProperty(Ku, "CorsBehavior", {
        get: function() {
          return ju.CorsBehavior
        },
        set: function(uu) {
          ju.CorsBehavior = uu
        }
      })
    };
    let ru = !1;

    function Qu() {
      ru || (ru = !0, Vu(mu, vu, Mu, ou, Pu, Ju, pu, wu, du, eu), Cu.e.loadFile = Ju, Cu.e.loadImage = pu, bu.r.loadFile = Ju)
    }
  },
  40326: (uu, Eu, ju) => {
    ju.d(Eu, {
      e: () => lu,
      i: () => Zu,
      k: () => Xu
    });
    let su = null;

    function Uu() {
      if (su) return su;
      const uu = new ArrayBuffer(4),
        Eu = new Float32Array(uu),
        ju = new Uint32Array(uu),
        Uu = new Uint32Array(512),
        Zu = new Uint32Array(512);
      for (let su = 0; su < 256; ++su) {
        const uu = su - 127;
        uu < -24 ? (Uu[su] = 0, Uu[256 | su] = 32768, Zu[su] = 24, Zu[256 | su] = 24) : uu < -14 ? (Uu[su] = 1024 >> -uu - 14, Uu[256 | su] = 1024 >> -uu - 14 | 32768, Zu[su] = -uu - 1, Zu[256 | su] = -uu - 1) : uu <= 15 ? (Uu[su] = uu + 15 << 10, Uu[256 | su] = uu + 15 << 10 | 32768, Zu[su] = 13, Zu[256 | su] = 13) : uu < 128 ? (Uu[su] = 31744, Uu[256 | su] = 64512, Zu[su] = 24, Zu[256 | su] = 24) : (Uu[su] = 31744, Uu[256 | su] = 64512, Zu[su] = 13, Zu[256 | su] = 13)
      }
      const Xu = new Uint32Array(2048),
        lu = new Uint32Array(64),
        qu = new Uint32Array(64);
      for (let su = 1; su < 1024; ++su) {
        let uu = su << 13,
          Eu = 0;
        for (; 0 === (8388608 & uu);) uu <<= 1, Eu -= 8388608;
        uu &= -8388609, Eu += 947912704, Xu[su] = uu | Eu
      }
      for (let su = 1024; su < 2048; ++su) Xu[su] = 939524096 + (su - 1024 << 13);
      for (let su = 1; su < 31; ++su) lu[su] = su << 23;
      lu[31] = 1199570944, lu[32] = 2147483648;
      for (let su = 33; su < 63; ++su) lu[su] = 2147483648 + (su - 32 << 23);
      lu[63] = 3347054592;
      for (let su = 1; su < 64; ++su) 32 !== su && (qu[su] = 1024);
      return su = {
        floatView: Eu,
        uint32View: ju,
        baseTable: Uu,
        shiftTable: Zu,
        mantissaTable: Xu,
        exponentTable: lu,
        offsetTable: qu
      }, su
    }
    const Zu = 65504;

    function Xu(uu) {
      const Eu = Uu();
      Eu.floatView[0] = uu;
      const ju = Eu.uint32View[0],
        su = ju >> 23 & 511;
      return Eu.baseTable[su] + ((8388607 & ju) >> Eu.shiftTable[su])
    }

    function lu(uu) {
      const Eu = Uu();
      return Eu.uint32View[0] = Eu.mantissaTable[Eu.offsetTable[uu >> 10] + (1023 & uu)] + Eu.exponentTable[uu >> 10], Eu.floatView[0]
    }
  },
  40312: (uu, Eu, ju) => {
    ju.d(Eu, {
      c: () => Zu,
      d: () => Uu,
      e: () => su
    });
    const su = uu => {
        const Eu = ArrayBuffer.isView(uu) ? new Uint8Array(uu.buffer, uu.byteOffset, uu.byteLength) : new Uint8Array(uu);
        return "function" === typeof Eu.toBase64 ? Eu.toBase64() : function(uu) {
          const Eu = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
          let ju, su, Uu, Zu, Xu, lu, qu, fu = "",
            Cu = 0;
          for (; Cu < uu.length;) ju = uu[Cu++], su = Cu < uu.length ? uu[Cu++] : Number.NaN, Uu = Cu < uu.length ? uu[Cu++] : Number.NaN, Zu = ju >> 2, Xu = (3 & ju) << 4 | su >> 4, lu = (15 & su) << 2 | Uu >> 6, qu = 63 & Uu, isNaN(su) ? lu = qu = 64 : isNaN(Uu) && (qu = 64), fu += Eu.charAt(Zu) + Eu.charAt(Xu) + Eu.charAt(lu) + Eu.charAt(qu);
          return fu
        }(Eu)
      },
      Uu = uu => atob(uu),
      Zu = uu => "function" === typeof Uint8Array.fromBase64 ? Uint8Array.fromBase64(uu).buffer : function(uu) {
        const Eu = Uu(uu),
          ju = Eu.length,
          su = new Uint8Array(new ArrayBuffer(ju));
        for (let Uu = 0; Uu < ju; Uu++) su[Uu] = Eu.charCodeAt(Uu);
        return su.buffer
      }(uu)
  },
  40164: (uu, Eu, ju) => {
    ju.d(Eu, {
      c: () => Uu,
      d: () => Xu
    });
    let su = [];
    class Uu {
      static SetImmediate(uu) {
        0 === su.length && setTimeout((() => {
          const uu = su;
          su = [];
          for (const Eu of uu) Eu()
        }), 1), su.push(uu)
      }
    }

    function Zu(uu, Eu, ju) {
      try {
        if (uu()) return Eu(), !0
      } catch (su) {
        return ju?.(su), !0
      }
      return !1
    }
    const Xu = function(uu, Eu, ju) {
      let su = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 16,
        Uu = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3e4,
        Xu = arguments.length > 6 ? arguments[6] : void 0;
      if ((!(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5]) && Zu(uu, Eu, ju)) return null;
      const lu = setInterval((() => {
        Zu(uu, Eu, ju) ? clearInterval(lu) : (Uu -= su, Uu < 0 && (clearInterval(lu), ju?.(new Error("Operation timed out after maximum retries. " + (Xu || "")), !0)))
      }), su);
      return () => clearInterval(lu)
    }
  },
  40302: (uu, Eu, ju) => {
    ju.d(Eu, {
      b: () => su
    });
    class su {
      constructor() {
        this._xhr = "undefined" !== typeof _native && _native.XMLHttpRequest ? new _native.XMLHttpRequest : new XMLHttpRequest, this._requestURL = ""
      }
      static get IsCustomRequestAvailable() {
        return Object.keys(su.CustomRequestHeaders).length > 0 || su.CustomRequestModifiers.length > 0
      }
      static _CleanUrl(uu) {
        return uu = (uu = uu.replace("file:http:", "http:")).replace("file:https:", "https:")
      }
      static _ShouldSkipRequestModifications(uu) {
        return su.SkipRequestModificationForBabylonCDN && (uu.includes("preview.babylonjs.com") || uu.includes("cdn.babylonjs.com"))
      }
      static _CollectCustomizations(uu) {
        const Eu = {
          ...arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
        };
        if (su._ShouldSkipRequestModifications(uu)) return {
          url: uu,
          headers: Eu
        };
        for (const Uu in su.CustomRequestHeaders) {
          const uu = su.CustomRequestHeaders[Uu];
          uu && (Eu[Uu] = uu)
        }
        const ju = {
          setRequestHeader: (uu, ju) => {
            Eu[uu] = ju
          }
        };
        for (const Uu of su.CustomRequestModifiers) {
          if (su._ShouldSkipRequestModifications(uu)) break;
          const Eu = Uu(ju, uu);
          "string" === typeof Eu && (uu = Eu)
        }
        return {
          url: uu,
          headers: Eu
        }
      }
      static async FetchAsync(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const ju = Eu.method ?? "GET";
        if ("undefined" !== typeof fetch) {
          const {
            url: Uu,
            headers: Zu
          } = su._CollectCustomizations(su._CleanUrl(uu), Eu.headers ?? {});
          return await fetch(Uu, {
            method: ju,
            headers: Zu,
            body: Eu.body ?? void 0
          })
        }
        return await new Promise(((Uu, Zu) => {
          const Xu = new su;
          Xu.responseType = "arraybuffer", Xu.addEventListener("readystatechange", (() => {
            if (4 === Xu.readyState)
              if (Xu.status >= 200 && Xu.status < 300) {
                const uu = "undefined" !== typeof Headers ? new Headers : void 0,
                  Eu = Xu.getResponseHeader("Content-Type");
                Eu && uu && uu.set("Content-Type", Eu), "undefined" !== typeof Response ? Uu(new Response(Xu.response, {
                  status: Xu.status,
                  statusText: Xu.statusText,
                  headers: uu
                })) : Uu({
                  ok: !0,
                  status: Xu.status,
                  statusText: Xu.statusText,
                  headers: {
                    get: uu => Xu.getResponseHeader(uu)
                  },
                  arrayBuffer: async () => await Promise.resolve(Xu.response)
                })
              } else Zu(new Error(`HTTP ${Xu.status} loading '${Xu.requestURL}': ${Xu.statusText}`))
          })), Xu.open(ju, uu, Eu.headers), Xu.send(Eu.body ?? null)
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
      addEventListener(uu, Eu, ju) {
        this._xhr.addEventListener(uu, Eu, ju)
      }
      removeEventListener(uu, Eu, ju) {
        this._xhr.removeEventListener(uu, Eu, ju)
      }
      abort() {
        this._xhr.abort()
      }
      send(uu) {
        this._xhr.send(uu)
      }
      open(uu, Eu, ju) {
        const {
          url: Uu,
          headers: Zu
        } = su._CollectCustomizations(Eu, ju);
        this._requestURL = su._CleanUrl(Uu), this._xhr.open(uu, this._requestURL, !0);
        for (const su in Zu) this._xhr.setRequestHeader(su, Zu[su])
      }
      setRequestHeader(uu, Eu) {
        this._xhr.setRequestHeader(uu, Eu)
      }
      getResponseHeader(uu) {
        return this._xhr.getResponseHeader(uu)
      }
    }
    su.CustomRequestHeaders = {}, su.CustomRequestModifiers = new Array, su.SkipRequestModificationForBabylonCDN = !0
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);