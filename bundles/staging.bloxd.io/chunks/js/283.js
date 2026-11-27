export const id = 283;
export const ids = [283];
export const modules = {
  41175: (ee, ie, He) => {
    He.d(ie, {
      b: () => ke,
      d: () => Re,
      f: () => Fe,
      j: () => qe,
      n: () => Je,
      o: () => Ue,
      s: () => oe
    });
    var ye = He(39467),
      be = He(41178);

    function Me(ee, ie, He, ye) {
      switch (ie) {
        case 5120: {
          let ie = ee.getInt8(He);
          return ye && (ie = Math.max(ie / 127, -1)), ie
        }
        case 5121: {
          let ie = ee.getUint8(He);
          return ye && (ie /= 255), ie
        }
        case 5122: {
          let ie = ee.getInt16(He, !0);
          return ye && (ie = Math.max(ie / 32767, -1)), ie
        }
        case 5123: {
          let ie = ee.getUint16(He, !0);
          return ye && (ie /= 65535), ie
        }
        case 5131:
          return (0, be.d)(ee.getUint16(He, !0));
        case 5124:
          return ee.getInt32(He, !0);
        case 5125:
          return ee.getUint32(He, !0);
        case 5126:
          return ee.getFloat32(He, !0);
        default:
          throw new Error(`Invalid component type ${ie}`)
      }
    }

    function Ke(ee, ie, He, ye, Me) {
      switch (ie) {
        case 5120:
          ye && (Me = Math.round(127 * Me)), ee.setInt8(He, Me);
          break;
        case 5121:
          ye && (Me = Math.round(255 * Me)), ee.setUint8(He, Me);
          break;
        case 5122:
          ye && (Me = Math.round(32767 * Me)), ee.setInt16(He, Me, !0);
          break;
        case 5123:
          ye && (Me = Math.round(65535 * Me)), ee.setUint16(He, Me, !0);
          break;
        case 5131:
          ee.setUint16(He, (0, be.j)(Me), !0);
          break;
        case 5124:
          ee.setInt32(He, Me, !0);
          break;
        case 5125:
          ee.setUint32(He, Me, !0);
          break;
        case 5126:
          ee.setFloat32(He, Me, !0);
          break;
        default:
          throw new Error(`Invalid component type ${ie}`)
      }
    }

    function Ue(ee) {
      switch (ee) {
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
          throw new Error(`Invalid type '${ee}'`)
      }
    }

    function Fe(ee, ie, He, ye, be, Fe, Je, oe) {
      const Re = new Array(ye),
        ke = new Array(ye);
      if (ee instanceof Array) {
        let be = ie / 4;
        const Me = He / 4;
        for (let ie = 0; ie < Fe; ie += ye) {
          for (let ie = 0; ie < ye; ie++) Re[ie] = ke[ie] = ee[be + ie];
          oe(ke, ie);
          for (let ie = 0; ie < ye; ie++) Re[ie] !== ke[ie] && (ee[be + ie] = ke[ie]);
          be += Me
        }
      } else {
        const qe = ArrayBuffer.isView(ee) ? new DataView(ee.buffer, ee.byteOffset, ee.byteLength) : new DataView(ee),
          fe = Ue(be);
        for (let ee = 0; ee < Fe; ee += ye) {
          for (let ee = 0, He = ie; ee < ye; ee++, He += fe) Re[ee] = ke[ee] = Me(qe, be, He, Je);
          oe(ke, ee);
          for (let ee = 0, He = ie; ee < ye; ee++, He += fe) Re[ee] !== ke[ee] && Ke(qe, be, He, Je, ke[ee]);
          ie += He
        }
      }
    }

    function Je(ee, ie, He, be, Me, Ke, Je, oe) {
      const Re = ie * Ue(He),
        ke = Je * ie;
      if (5126 !== He || Me !== Re) {
        const ye = new Float32Array(ke);
        return Fe(ee, be, Me, ie, He, ke, Ke, ((ee, He) => {
          for (let be = 0; be < ie; be++) ye[He + be] = ee[be]
        })), ye
      }
      if (!(ee instanceof Array || ee instanceof Float32Array) || 0 !== be || ee.length !== ke) {
        if (ee instanceof Array) {
          const ie = be / 4;
          return ee.slice(ie, ie + ke)
        }
        if (ArrayBuffer.isView(ee)) {
          const ie = ee.byteOffset + be;
          return 0 !== (3 & ie) && (ye.e.Warn("Float array must be aligned to 4-bytes border"), oe = !0), oe ? new Float32Array(ee.buffer.slice(ie, ie + ke * Float32Array.BYTES_PER_ELEMENT)) : new Float32Array(ee.buffer, ie, ke)
        }
        return new Float32Array(ee, be, ke)
      }
      return oe ? ee.slice() : ee
    }

    function oe(ee, ie, He, be, Me, Ke, Je) {
      const oe = Ue(He),
        Re = function(ee) {
          switch (ee) {
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
              throw new Error(`Invalid component type '${ee}'`)
          }
        }(He),
        ke = Ke * ie;
      if (Array.isArray(ee)) {
        if (0 !== (3 & be) || 0 !== (3 & Me)) throw new Error("byteOffset and byteStride must be a multiple of 4 for number[] data.");
        const ye = be / 4,
          Ue = Me / 4;
        if (ye + (Ke - 1) * Ue + ie > ee.length) throw new Error("Last accessed index is out of bounds.");
        if (Ue < ie) throw new Error("Data stride cannot be smaller than the component size.");
        if (Ue !== ie) {
          const ye = new Re(ke);
          return Fe(ee, be, Me, ie, He, ke, !1, ((ee, He) => {
            for (let be = 0; be < ie; be++) ye[He + be] = ee[be]
          })), ye
        }
        return new Re(ee.slice(ye, ye + ke))
      }
      let qe, fe = be;
      ArrayBuffer.isView(ee) ? (qe = ee.buffer, fe += ee.byteOffset) : qe = ee;
      if (fe + (Ke - 1) * Me + ie * oe > qe.byteLength) throw new Error("Last accessed byte is out of bounds.");
      const Te = ie * oe;
      if (Me < Te) throw new Error("Byte stride cannot be smaller than the component's byte size.");
      if (Me !== Te) {
        const ee = new Re(ke),
          He = new Uint8Array(qe, fe),
          ye = new Uint8Array(ee.buffer),
          be = ie * oe;
        for (let ie = 0, Ue = 0, Fe = 0; ie < Ke; ie++, Ue += Me, Fe += be) ye.set(He.subarray(Ue, Ue + be), Fe);
        return ee
      }
      return 1 !== oe && 0 !== (fe & oe - 1) && (ye.e.Warn("Array must be aligned to border of element size. Data will be copied."), Je = !0), Je ? new Re(qe.slice(fe, fe + ke * oe)) : new Re(qe, fe, ke)
    }

    function Re(ee, ie, He, be, Me, Ke, Je, oe) {
      const Re = ie * Ue(He),
        ke = Je * ie;
      if (oe.length !== ke) throw new Error("Output length is not valid");
      if (5126 === He && Me === Re)
        if (ee instanceof Array) {
          const ie = be / 4;
          oe.set(ee, ie)
        } else if (ArrayBuffer.isView(ee)) {
        const ie = ee.byteOffset + be;
        if (0 !== (3 & ie)) return ye.e.Warn("Float array must be aligned to 4-bytes border"), void oe.set(new Float32Array(ee.buffer.slice(ie, ie + ke * Float32Array.BYTES_PER_ELEMENT)));
        const He = new Float32Array(ee.buffer, ie, ke);
        oe.set(He)
      } else {
        const ie = new Float32Array(ee, be, ke);
        oe.set(ie)
      } else Fe(ee, be, Me, ie, He, ke, Ke, ((ee, He) => {
        for (let ye = 0; ye < ie; ye++) oe[He + ye] = ee[ye]
      }))
    }

    function ke(ee, ie) {
      let He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        ye = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
      if (Array.isArray(ee)) {
        for (let be = 0; be < ie; be++)
          if (ee[He + be] - ye > 65535) return !0;
        return !1
      }
      return 4 === ee.BYTES_PER_ELEMENT
    }

    function qe(ee) {
      const ie = ee.buffer;
      if (ie instanceof ArrayBuffer) return ee;
      const He = new ArrayBuffer(ee.byteLength);
      return new Uint8Array(He).set(new Uint8Array(ie, ee.byteOffset, ee.byteLength)), He
    }
  },
  40988: (ee, ie, He) => {
    He.d(ie, {
      e: () => We,
      i: () => Oe,
      o: () => de,
      k: () => Ye,
      s: () => Ve
    });
    class ye {
      constructor() {
        this.children = []
      }
      isValid(ee) {
        return !0
      }
      process(ee, ie, He) {
        let ye = "";
        if (this.line) {
          let He = this.line;
          const be = ie.processor;
          if (be) {
            be.lineProcessor && (He = be.lineProcessor(He, ie.isFragment, ie.processingContext));
            const ye = ie.processor?.attributeKeywordName ?? "attribute",
              Me = ie.isFragment && ie.processor?.varyingFragmentKeywordName ? ie.processor?.varyingFragmentKeywordName : !ie.isFragment && ie.processor?.varyingVertexKeywordName ? ie.processor?.varyingVertexKeywordName : "varying";
            if (!ie.isFragment && be.attributeProcessor && this.line.startsWith(ye)) He = be.attributeProcessor(this.line, ee, ie.processingContext);
            else if (be.varyingProcessor && (be.varyingCheck?.(this.line, ie.isFragment) || !be.varyingCheck && this.line.startsWith(Me))) He = be.varyingProcessor(this.line, ie.isFragment, ee, ie.processingContext);
            else if (be.uniformProcessor && be.uniformRegexp && be.uniformRegexp.test(this.line)) ie.lookForClosingBracketForUniformBuffer || (He = be.uniformProcessor(this.line, ie.isFragment, ee, ie.processingContext));
            else if (be.uniformBufferProcessor && be.uniformBufferRegexp && be.uniformBufferRegexp.test(this.line)) ie.lookForClosingBracketForUniformBuffer || (He = be.uniformBufferProcessor(this.line, ie.isFragment, ie.processingContext), ie.lookForClosingBracketForUniformBuffer = !0);
            else if (be.textureProcessor && be.textureRegexp && be.textureRegexp.test(this.line)) He = be.textureProcessor(this.line, ie.isFragment, ee, ie.processingContext);
            else if ((be.uniformProcessor || be.uniformBufferProcessor) && this.line.startsWith("uniform") && !ie.lookForClosingBracketForUniformBuffer) {
              /uniform\s+(?:(?:highp)?|(?:lowp)?)\s*(\S+)\s+(\S+)\s*;/.test(this.line) ? be.uniformProcessor && (He = be.uniformProcessor(this.line, ie.isFragment, ee, ie.processingContext)) : be.uniformBufferProcessor && (He = be.uniformBufferProcessor(this.line, ie.isFragment, ie.processingContext), ie.lookForClosingBracketForUniformBuffer = !0)
            }
            ie.lookForClosingBracketForUniformBuffer && -1 !== this.line.indexOf("}") && (ie.lookForClosingBracketForUniformBuffer = !1, be.endOfUniformBufferProcessor && (He = be.endOfUniformBufferProcessor(this.line, ie.isFragment, ie.processingContext)))
          }
          ye += He + "\n"
        }
        for (const be of this.children) ye += be.process(ee, ie, He);
        return this.additionalDefineKey && (ee[this.additionalDefineKey] = this.additionalDefineValue || "true", He[this.additionalDefineKey] = ee[this.additionalDefineKey]), ye
      }
    }
    class be {
      constructor() {
        this._lines = []
      }
      get currentLine() {
        return this._lines[this.lineIndex]
      }
      get canRead() {
        return this.lineIndex < this._lines.length - 1
      }
      set lines(ee) {
        this._lines.length = 0;
        for (const ie of ee) {
          if (!ie || "\r" === ie) continue;
          if ("#" === ie[0]) {
            this._lines.push(ie);
            continue
          }
          const ee = ie.trim();
          if (!ee) continue;
          if (ee.startsWith("//")) {
            this._lines.push(ie);
            continue
          }
          const He = ee.indexOf(";");
          if (-1 === He) this._lines.push(ee);
          else if (He === ee.length - 1) ee.length > 1 && this._lines.push(ee);
          else {
            const ee = ie.split(";");
            for (let ie = 0; ie < ee.length; ie++) {
              let He = ee[ie];
              He && (He = He.trim(), He && this._lines.push(He + (ie !== ee.length - 1 ? ";" : "")))
            }
          }
        }
      }
    }
    class Me extends ye {
      process(ee, ie, He) {
        for (let ye = 0; ye < this.children.length; ye++) {
          const be = this.children[ye];
          if (be.isValid(ee)) return be.process(ee, ie, He)
        }
        return ""
      }
    }
    class Ke extends ye {
      isValid(ee) {
        return this.testExpression.isTrue(ee)
      }
    }
    class Ue {
      isTrue(ee) {
        return !0
      }
      static postfixToInfix(ee) {
        const ie = [];
        for (const He of ee)
          if (void 0 === Ue._OperatorPriority[He]) ie.push(He);
          else {
            const ee = ie[ie.length - 1],
              ye = ie[ie.length - 2];
            ie.length -= 2, ie.push(`(${ye}${He}${ee})`)
          } return ie[ie.length - 1]
      }
      static infixToPostfix(ee) {
        const ie = Ue._InfixToPostfixCache.get(ee);
        if (ie) return ie.accessTime = Date.now(), ie.result;
        if (!ee.includes("&&") && !ee.includes("||") && !ee.includes(")") && !ee.includes("(")) return [ee];
        const He = [];
        let ye = -1;
        const be = () => {
            oe = oe.trim(), "" !== oe && (He.push(oe), oe = "")
          },
          Me = ee => {
            ye < Ue._Stack.length - 1 && (Ue._Stack[++ye] = ee)
          },
          Ke = () => Ue._Stack[ye],
          Fe = () => -1 === ye ? "!!INVALID EXPRESSION!!" : Ue._Stack[ye--];
        let Je = 0,
          oe = "";
        for (; Je < ee.length;) {
          const ie = ee.charAt(Je),
            Re = Je < ee.length - 1 ? ee.substring(Je, 2 + Je) : "";
          if ("(" === ie) oe = "", Me(ie);
          else if (")" === ie) {
            for (be(); - 1 !== ye && "(" !== Ke();) He.push(Fe());
            Fe()
          } else if (Ue._OperatorPriority[Re] > 1) {
            for (be(); - 1 !== ye && Ue._OperatorPriority[Ke()] >= Ue._OperatorPriority[Re];) He.push(Fe());
            Me(Re), Je++
          } else oe += ie;
          Je++
        }
        for (be(); - 1 !== ye;) "(" === Ke() ? Fe() : He.push(Fe());
        return Ue._InfixToPostfixCache.size >= Ue.InfixToPostfixCacheLimitSize && Ue.ClearCache(), Ue._InfixToPostfixCache.set(ee, {
          result: He,
          accessTime: Date.now()
        }), He
      }
      static ClearCache() {
        const ee = Array.from(Ue._InfixToPostfixCache.entries()).sort(((ee, ie) => ee[1].accessTime - ie[1].accessTime));
        for (let ie = 0; ie < Ue.InfixToPostfixCacheCleanupSize; ie++) Ue._InfixToPostfixCache.delete(ee[ie][0])
      }
    }
    Ue.InfixToPostfixCacheLimitSize = 5e4, Ue.InfixToPostfixCacheCleanupSize = 25e3, Ue._InfixToPostfixCache = new Map, Ue._OperatorPriority = {
      ")": 0,
      "(": 1,
      "||": 2,
      "&&": 3
    }, Ue._Stack = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];
    class Fe extends Ue {
      constructor(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        super(), this.define = ee, this.not = ie
      }
      isTrue(ee) {
        let ie = void 0 !== ee[this.define];
        return this.not && (ie = !ie), ie
      }
    }
    class Je extends Ue {
      isTrue(ee) {
        return this.leftOperand.isTrue(ee) || this.rightOperand.isTrue(ee)
      }
    }
    class oe extends Ue {
      isTrue(ee) {
        return this.leftOperand.isTrue(ee) && this.rightOperand.isTrue(ee)
      }
    }
    class Re extends Ue {
      constructor(ee, ie, He) {
        super(), this.define = ee, this.operand = ie, this.testValue = He
      }
      toString() {
        return `${this.define} ${this.operand} ${this.testValue}`
      }
      isTrue(ee) {
        let ie = !1;
        const He = parseInt(void 0 != ee[this.define] ? ee[this.define] : this.define),
          ye = parseInt(void 0 != ee[this.testValue] ? ee[this.testValue] : this.testValue);
        if (isNaN(He) || isNaN(ye)) return !1;
        switch (this.operand) {
          case ">":
            ie = He > ye;
            break;
          case "<":
            ie = He < ye;
            break;
          case "<=":
            ie = He <= ye;
            break;
          case ">=":
            ie = He >= ye;
            break;
          case "==":
            ie = He === ye;
            break;
          case "!=":
            ie = He !== ye
        }
        return ie
      }
    }
    var ke = He(40985),
      qe = He(40979);
    const fe = /defined\s*?\((.+?)\)/g,
      Te = /defined\s*?\[(.+?)\]/g,
      pe = /#include\s?<(.+)>(\((.*)\))*(\[(.*)\])*/g,
      Xe = /__decl__/,
      ze = /light\{X\}.(\w*)/g,
      Be = /\{X\}/g,
      Ee = [],
      ge = /(#ifdef)|(#else)|(#elif)|(#endif)|(#ifndef)|(#if)/;

    function Oe(ee) {
      ee.processor && ee.processor.initializeShaders && ee.processor.initializeShaders(ee.processingContext)
    }

    function de(ee, ie, He, ye) {
      ie.processor?.preProcessShaderCode && (ee = ie.processor.preProcessShaderCode(ee, ie.isFragment)), Ye(ee, ie, (ee => {
        ie.processCodeAfterIncludes && (ee = ie.processCodeAfterIncludes(ie.isFragment ? "fragment" : "vertex", ee, ie.defines));
        const be = function(ee, ie, He) {
          let ye = function(ee, ie) {
            if (ie.processor?.noPrecision) return ee;
            const He = ie.shouldUseHighPrecisionShader; - 1 === ee.indexOf("precision highp float") ? ee = He ? "precision highp float;\n" + ee : "precision mediump float;\n" + ee : He || (ee = ee.replace("precision highp float", "precision mediump float"));
            return ee
          }(ee, ie);
          if (!ie.processor) return ye;
          if (0 === ie.processor.shaderLanguage && -1 !== ye.indexOf("#version 3") && (ye = ye.replace("#version 300 es", ""), !ie.processor.parseGLES3)) return ye;
          const be = ie.defines,
            Me = Ae(ie, He);
          ie.processor.preProcessor && (ye = ie.processor.preProcessor(ye, be, Me, ie.isFragment, ie.processingContext));
          const Ke = {};
          ye = Pe(ye, Me, ie, Ke), ie.processor.postProcessor && (ye = ie.processor.postProcessor(ye, be, ie.isFragment, ie.processingContext, He ? {
            drawBuffersExtensionDisabled: !He.getCaps().drawBuffersExtension
          } : {}, Me, Ke));
          He?._features.needShaderCodeInlining && (ye = He.inlineShaderCode(ye));
          return ye
        }(ee, ie, ye);
        He(be, ee)
      }))
    }

    function We(ee, ie, He) {
      return He.processor && He.processor.finalizeShaders ? He.processor.finalizeShaders(ee, ie, He.processingContext) : {
        vertexCode: ee,
        fragmentCode: ie
      }
    }

    function te(ee) {
      const ie = /defined\((.+)\)/.exec(ee);
      if (ie && ie.length) return new Fe(ie[1].trim(), "!" === ee[0]);
      const He = ["==", "!=", ">=", "<=", "<", ">"];
      let ye = "",
        be = 0;
      for (ye of He)
        if (be = ee.indexOf(ye), be > -1) break;
      if (-1 === be) return new Fe(ee);
      const Me = ee.substring(0, be).trim(),
        Ke = ee.substring(be + ye.length).trim();
      return new Re(Me, ye, Ke)
    }

    function Ze(ee, ie) {
      const He = new Ke,
        ye = ee.substring(0, ie);
      let be = ee.substring(ie);
      return be = be.substring(0, (be.indexOf("//") + 1 || be.length + 1) - 1).trim(), He.testExpression = "#ifdef" === ye ? new Fe(be) : "#ifndef" === ye ? new Fe(be, !0) : function(ee) {
        ee = ee.replace(fe, "defined[$1]");
        const ie = Ue.infixToPostfix(ee),
          He = [];
        for (const be of ie)
          if ("||" !== be && "&&" !== be) He.push(be);
          else if (He.length >= 2) {
          let ee = He[He.length - 1],
            ie = He[He.length - 2];
          He.length -= 2;
          const ye = "&&" == be ? new oe : new Je;
          "string" === typeof ee && (ee = ee.replace(Te, "defined($1)")), "string" === typeof ie && (ie = ie.replace(Te, "defined($1)")), ye.leftOperand = "string" === typeof ie ? te(ie) : ie, ye.rightOperand = "string" === typeof ee ? te(ee) : ee, He.push(ye)
        }
        let ye = He[He.length - 1];
        return "string" === typeof ye && (ye = ye.replace(Te, "defined($1)")), "string" === typeof ye ? te(ye) : ye
      }(be), He
    }

    function we(ee, ie, He, be) {
      let Me;
      for (; De(ee, He, be);) {
        Me = ee.currentLine;
        const Ke = Me.substring(0, 5).toLowerCase();
        if ("#else" === Ke) {
          const He = new ye;
          return ie.children.push(He), void De(ee, He, be)
        }
        if ("#elif" === Ke) {
          const ee = Ze(Me, 5);
          ie.children.push(ee), He = ee
        }
      }
    }

    function De(ee, ie, He) {
      for (; ee.canRead;) {
        ee.lineIndex++;
        const be = ee.currentLine;
        if (be.indexOf("#") >= 0) {
          const ye = ge.exec(be);
          if (ye && ye.length) {
            switch (ye[0]) {
              case "#ifdef": {
                const ye = new Me;
                ie.children.push(ye);
                const Ke = Ze(be, 6);
                ye.children.push(Ke), we(ee, ye, Ke, He);
                break
              }
              case "#else":
              case "#elif":
                return !0;
              case "#endif":
                return !1;
              case "#ifndef": {
                const ye = new Me;
                ie.children.push(ye);
                const Ke = Ze(be, 7);
                ye.children.push(Ke), we(ee, ye, Ke, He);
                break
              }
              case "#if": {
                const ye = new Me,
                  Ke = Ze(be, 3);
                ie.children.push(ye), ye.children.push(Ke), we(ee, ye, Ke, He);
                break
              }
            }
            continue
          }
        }
        const Ke = new ye;
        if (Ke.line = be, ie.children.push(Ke), "#" === be[0] && "d" === be[1]) {
          const ee = be.replace(";", "").split(" ");
          Ke.additionalDefineKey = ee[1], 3 === ee.length && (Ke.additionalDefineValue = ee[2])
        }
      }
      return !1
    }

    function Pe(ee, ie, He, Me) {
      const Ke = new ye,
        Ue = new be;
      return Ue.lineIndex = -1, Ue.lines = ee.split("\n"), De(Ue, Ke, Me), Ke.process(ie, He, Me)
    }

    function Ae(ee, ie) {
      const He = ee.defines,
        ye = {};
      for (const be of He) {
        const ee = be.replace("#define", "").replace(";", "").trim().split(" ");
        ye[ee[0]] = ee.length > 1 ? ee[1] : ""
      }
      return 0 === ee.processor?.shaderLanguage && (ye.GL_ES = "true"), ye.__VERSION__ = ee.version, ye[ee.platformName] = "true", (0, qe.f)(ye, ie?.isNDCHalfZRange, ie?.Gbe, ie?.useExactSrgbConversions), ye
    }

    function Ye(ee, ie, He) {
      let ye;
      for (Ee.length = 0; null !== (ye = pe.exec(ee));) Ee.push(ye);
      let be = [ee],
        Me = !1;
      for (const Ue of Ee) {
        let ee = Ue[1];
        if (-1 !== ee.indexOf("__decl__") && (ee = ee.replace(Xe, ""), ie.supportsUniformBuffers && (ee = ee.replace("Vertex", "Ubo").replace("Fragment", "Ubo")), ee += "Declaration"), !ie.includesShadersStore[ee]) {
          const ye = ie.shadersRepository + "ShadersInclude/" + ee + ".fx";
          return void Ve.loadFile(ye, (ye => {
            ie.includesShadersStore[ee] = ye, Ye(be.join(""), ie, He)
          }))
        } {
          let He = ie.includesShadersStore[ee];
          if (Ue[2]) {
            const ee = Ue[3].split(",");
            for (let ie = 0; ie < ee.length; ie += 2) {
              const ye = new RegExp(ee[ie], "g"),
                be = ee[ie + 1];
              He = He.replace(ye, be)
            }
          }
          if (Ue[4]) {
            const ee = Ue[5];
            if (-1 !== ee.indexOf("..")) {
              const ye = ee.split(".."),
                be = parseInt(ye[0]);
              let Me = parseInt(ye[1]),
                Ke = He.slice(0);
              He = "", isNaN(Me) && (Me = ie.indexParameters[ye[1]]);
              for (let ee = be; ee < Me; ee++) ie.supportsUniformBuffers || (Ke = Ke.replace(ze, ((ee, ie) => ie + "{X}"))), He += Ke.replace(Be, ee.toString()) + "\n"
            } else ie.supportsUniformBuffers || (He = He.replace(ze, ((ee, ie) => ie + "{X}"))), He = He.replace(Be, ee)
          }
          const ye = [];
          for (const ee of be) {
            const ie = ee.split(Ue[0]);
            for (let ee = 0; ee < ie.length - 1; ee++) ye.push(ie[ee]), ye.push(He);
            ye.push(ie[ie.length - 1])
          }
          be = ye, Me = Me || He.indexOf("#include<") >= 0 || He.indexOf("#include <") >= 0
        }
      }
      Ee.length = 0;
      const Ke = be.join("");
      Me ? Ye(Ke.toString(), ie, He) : He(Ke)
    }
    const Ve = {
      loadFile: (ee, ie, He, ye, be, Me) => {
        throw (0, ke.l)("FileTools")
      }
    }
  },
  40979: (ee, ie, He) => {
    He.d(ie, {
      b: () => be,
      e: () => Me,
      f: () => Ue,
      i: () => Ke,
      k: () => Fe
    });
    var ye = He(40985);
    const be = {};

    function Me(ee, ie) {
      return (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "") + (ie ? ie + "\n" : "") + ee
    }

    function Ke(ee, ie, He, Me, Ke, Ue, Fe) {
      const Je = Fe || be.loadFile;
      if (!Je) throw (0, ye.l)("FileTools");
      return Je(ee, ie, He, Me, Ke, Ue)
    }

    function Ue(ee, ie, He, ye) {
      if (ee) return ie ? ee.IS_NDC_HALF_ZRANGE = "" : delete ee.IS_NDC_HALF_ZRANGE, He ? ee.USE_REVERSE_DEPTHBUFFER = "" : delete ee.USE_REVERSE_DEPTHBUFFER, void(ye ? ee.USE_EXACT_SRGB_CONVERSIONS = "" : delete ee.USE_EXACT_SRGB_CONVERSIONS);
      {
        let ee = "";
        return ie && (ee += "#define IS_NDC_HALF_ZRANGE"), He && (ee && (ee += "\n"), ee += "#define USE_REVERSE_DEPTHBUFFER"), ye && (ee && (ee += "\n"), ee += "#define USE_EXACT_SRGB_CONVERSIONS"), ee
      }
    }

    function Fe(ee, ie) {
      let He = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        ye = arguments.length > 3 ? arguments[3] : void 0;
      switch (ee) {
        case 3: {
          const ee = new Int8Array(ie);
          return ye && ee.set(new Int8Array(ye)), ee
        }
        case 0: {
          const ee = new Uint8Array(ie);
          return ye && ee.set(new Uint8Array(ye)), ee
        }
        case 4: {
          const ee = "number" !== typeof ie ? new Int16Array(ie) : new Int16Array(He ? ie / 2 : ie);
          return ye && ee.set(new Int16Array(ye)), ee
        }
        case 5:
        case 8:
        case 9:
        case 10:
        case 2: {
          const ee = "number" !== typeof ie ? new Uint16Array(ie) : new Uint16Array(He ? ie / 2 : ie);
          return ye && ee.set(new Uint16Array(ye)), ee
        }
        case 6: {
          const ee = "number" !== typeof ie ? new Int32Array(ie) : new Int32Array(He ? ie / 4 : ie);
          return ye && ee.set(new Int32Array(ye)), ee
        }
        case 7:
        case 11:
        case 12:
        case 13:
        case 14:
        case 15: {
          const ee = "number" !== typeof ie ? new Uint32Array(ie) : new Uint32Array(He ? ie / 4 : ie);
          return ye && ee.set(new Uint32Array(ye)), ee
        }
        case 1: {
          const ee = "number" !== typeof ie ? new Float32Array(ie) : new Float32Array(He ? ie / 4 : ie);
          return ye && ee.set(new Float32Array(ye)), ee
        }
      }
      const be = new Uint8Array(ie);
      return ye && be.set(new Uint8Array(ye)), be
    }
  },
  40985: (ee, ie, He) => {
    He.d(ie, {
      c: () => Je,
      d: () => oe,
      h: () => Fe,
      l: () => be
    });
    const ye = {};

    function be(ee) {
      if (!(arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) || !ye[ee]) return ye[ee] = !0, `${ee} needs to be imported before as it contains a side-effect required by your code.`
    }
    const Me = {};
    let Ke = !1,
      Ue = 0;

    function Fe(ee, ie) {
      let He = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      const ye = function() {
        if ((He || Ke) && 0 === Ue) {
          const He = `${ee}.${ie}`;
          Me[He] || (Me[He] = !0, console.warn(`[Babylon.js] ${He}() requires a side-effect import. See: https://doc.babylonjs.com/setup/treeshaking`))
        }
      };
      return ye.__isSideEffectStub = !0, ye
    }

    function Je(ee) {
      return !!ee && !ee.__isSideEffectStub
    }

    function oe(ee, ie) {
      return {
        get() {},
        set(ee) {
          Object.defineProperty(this, ie, {
            value: ee,
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
  40968: (ee, ie, He) => {
    function ye() {
      return "undefined" !== typeof window
    }

    function be() {
      return "undefined" !== typeof navigator
    }

    function Me() {
      return "undefined" !== typeof document
    }

    function Ke(ee) {
      let ie = "",
        He = ee.firstChild;
      for (; He;) 3 === He.nodeType && (ie += He.textContent), He = He.nextSibling;
      return ie
    }
    He.d(ie, {
      e: () => Ke,
      h: () => Me,
      k: () => be,
      m: () => ye
    })
  },
  41170: (ee, ie, He) => {
    He.d(ie, {
      e: () => ye,
      h: () => be,
      i: () => Me
    });
    class ye extends Error {}
    ye._setPrototypeOf = Object.setPrototypeOf || ((ee, ie) => (ee.__proto__ = ie, ee));
    const be = {
      MeshInvalidPositionsError: 0,
      UnsupportedTextureError: 1e3,
      GLTFLoaderUnexpectedMagicError: 2e3,
      SceneLoaderError: 3e3,
      LoadFileError: 4e3,
      RequestFileError: 4001,
      ReadFileError: 4002
    };
    class Me extends ye {
      constructor(ee, ie, He) {
        super(ee), this.errorCode = ie, this.innerError = He, this.name = "RuntimeError", ye._setPrototypeOf(this, Me.prototype)
      }
    }
  },
  41159: (ee, ie, He) => {
    He.d(ie, {
      d: () => Ae,
      f: () => Be,
      i: () => Ze,
      m: () => De,
      o: () => We,
      r: () => Oe,
      s: () => de,
      u: () => xe,
      x: () => te,
      z: () => Ee
    });
    var ye = He(41161),
      be = He(40968),
      Me = He(37931);
    class Ke {}
    Ke.FilesToLoad = {};
    var Ue = He(41170),
      Fe = He(41172),
      Je = He(37929),
      oe = He(40979),
      Re = He(40988),
      ke = He(39467),
      qe = He(40995),
      fe = He(41175);
    const Te = new RegExp(/^data:([^,]+\/[^,]+)?;base64,/i);
    class pe extends Ue.i {
      constructor(ee, ie) {
        super(ee, Ue.h.LoadFileError), this.name = "LoadFileError", Ue.e._setPrototypeOf(this, pe.prototype), ie instanceof ye.c ? this.request = ie : this.file = ie
      }
    }
    class Xe extends Ue.i {
      constructor(ee, ie) {
        super(ee, Ue.h.RequestFileError), this.request = ie, this.name = "RequestFileError", Ue.e._setPrototypeOf(this, Xe.prototype)
      }
    }
    class ze extends Ue.i {
      constructor(ee, ie) {
        super(ee, Ue.h.ReadFileError), this.file = ie, this.name = "ReadFileError", Ue.e._setPrototypeOf(this, ze.prototype)
      }
    }
    const Be = {
        DefaultRetryStrategy: class {
          static ExponentialBackoff() {
            let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 3,
              ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 500;
            return (He, ye, be) => 0 !== ye.status || be >= ee || -1 !== He.indexOf("file:") ? -1 : Math.pow(2, be) * ie
          }
        }.ExponentialBackoff(),
        BaseUrl: "",
        CorsBehavior: "anonymous",
        PreprocessUrl: ee => ee,
        ScriptBaseUrl: "",
        ScriptPreprocessUrl: ee => ee,
        CleanUrl: ee => ee = ee.replace(/#/gm, "%23")
      },
      Ee = (ee, ie) => {
        if ((!ee || 0 !== ee.indexOf("data:")) && Be.CorsBehavior)
          if ("string" === typeof Be.CorsBehavior || Be.CorsBehavior instanceof String) ie.crossOrigin = Be.CorsBehavior;
          else {
            const He = Be.CorsBehavior(ee);
            He && (ie.crossOrigin = He)
          }
      },
      ge = {
        getRequiredSize: null
      },
      Oe = function(ee, ie, He, be) {
        let Me, Ue = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "",
          oe = arguments.length > 5 ? arguments[5] : void 0,
          Re = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : Je.b.LastCreatedEngine;
        if ("undefined" === typeof HTMLImageElement && !Re?._features.forceBitmapOverHTMLImageElement) return He("LoadImage is only supported in web or BabylonNative environments."), null;
        if (Re?._features.forceBitmapOverHTMLImageElement && "string" !== typeof ee && "undefined" !== typeof Blob) {
          let ye;
          if (ee instanceof Blob) ye = ee;
          else {
            const ie = ee instanceof ArrayBuffer ? ee : (0, fe.j)(ee);
            ye = new Blob([ie], {
              type: Ue
            })
          }
          return Re.createImageBitmap(ye, {
            premultiplyAlpha: "none",
            colorSpaceConversion: "none",
            ...oe
          }).then(ie).catch((ie => {
            He && He("Error while trying to load image: " + ee, ie)
          })), null
        }
        let ke = !1;
        if (ee instanceof ArrayBuffer || ArrayBuffer.isView(ee))
          if ("undefined" !== typeof Blob && "undefined" !== typeof URL) {
            let ie;
            ie = ee instanceof ArrayBuffer ? ee : (0, fe.j)(ee), Me = URL.createObjectURL(new Blob([ie], {
              type: Ue
            })), ke = !0
          } else Me = `data:${Ue};base64,` + (0, Fe.j)(ee);
        else ee instanceof Blob ? (Me = URL.createObjectURL(ee), ke = !0) : (Me = Be.CleanUrl(ee), Me = Be.PreprocessUrl(Me));
        const qe = ie => {
          if (He) {
            const ye = Me || ee.toString();
            He(`Error while trying to load image: ${0===ye.indexOf("http")||ye.length<=128?ye:ye.slice(0,128)+"..."}`, ie)
          }
        };
        if (Re?._features.forceBitmapOverHTMLImageElement) return We(Me, (ye => {
          Re.createImageBitmap(new Blob([ye], {
            type: Ue
          }), {
            premultiplyAlpha: "none",
            colorSpaceConversion: "none",
            ...oe
          }).then((ee => {
            ie(ee), ke && URL.revokeObjectURL(Me)
          })).catch((ie => {
            He && He("Error while trying to load image: " + ee, ie)
          }))
        }), void 0, be || void 0, !0, ((ee, ie) => {
          qe(ie)
        })), null;
        const Te = new Image;
        if (ge.getRequiredSize) {
          const ie = ge.getRequiredSize(ee);
          ie.width && (Te.width = ie.width), ie.height && (Te.height = ie.height)
        }
        Ee(Me, Te);
        const pe = [],
          Xe = () => {
            for (const ee of pe) ee.target.removeEventListener(ee.name, ee.handler);
            pe.length = 0
          };
        pe.push({
          target: Te,
          name: "load",
          handler: () => {
            Xe(), ie(Te), ke && Te.src && URL.revokeObjectURL(Te.src)
          }
        }), pe.push({
          target: Te,
          name: "error",
          handler: ee => {
            Xe(), qe(ee), ke && Te.src && URL.revokeObjectURL(Te.src)
          }
        }), pe.push({
          target: document,
          name: "securitypolicyviolation",
          handler: ee => {
            if (ee.blockedURI !== Te.src || "RR" === ee.disposition) return;
            Xe();
            const ie = new Error(`CSP violation of policy ${ee.effectiveDirective} ${ee.blockedURI}. Current policy is ${ee.originalPolicy}`);
            Je.b.UseFallbackTexture = !1, qe(ie), ke && Te.src && URL.revokeObjectURL(Te.src), Te.src = ""
          }
        }), (() => {
          for (const ee of pe) ee.target.addEventListener(ee.name, ee.handler)
        })();
        const ze = "blob:" === Me.substring(0, 5),
          Oe = "data:" === Me.substring(0, 5),
          de = () => {
            ze || Oe || !ye.c.IsCustomRequestAvailable ? Te.src = Me : We(Me, ((ee, ie, He) => {
              const ye = new Blob([ee], {
                  type: !Ue && He ? He : Ue
                }),
                be = URL.createObjectURL(ye);
              ke = !0, Te.src = be
            }), void 0, be || void 0, !0, ((ee, ie) => {
              qe(ie)
            }))
          },
          te = () => {
            be && be.loadImage(Me, Te)
          };
        if (!ze && !Oe && be && be.enableTexturesOffline) be.open(te, de);
        else {
          if (-1 !== Me.indexOf("file:")) {
            const ee = decodeURIComponent(Me.substring(5).toLowerCase());
            if (Ke.FilesToLoad[ee] && "undefined" !== typeof URL) {
              try {
                let ie;
                try {
                  ie = URL.createObjectURL(Ke.FilesToLoad[ee])
                } catch (Ze) {
                  ie = URL.createObjectURL(Ke.FilesToLoad[ee])
                }
                Te.src = ie, ke = !0
              } catch (we) {
                Te.src = ""
              }
              return Te
            }
          }
          de()
        }
        return Te
      },
      de = (ee, ie, He, ye, be) => {
        const Ke = new FileReader,
          Ue = {
            onCompleteObservable: new Me.d,
            abort: () => Ke.abort()
          };
        return Ke.onloadend = () => Ue.onCompleteObservable.notifyObservers(Ue), be && (Ke.onerror = () => {
          be(new ze(`Unable to read ${ee.name}`, ee))
        }), Ke.onload = ee => {
          ie(ee.target.result)
        }, He && (Ke.onprogress = He), ye ? Ke.readAsArrayBuffer(ee) : Ke.readAsText(ee), Ue
      },
      We = (ee, ie, He, ye, be, Fe, Je) => {
        if (ee.name) return de(ee, ie, He, be, Fe ? ee => {
          Fe(void 0, ee)
        } : void 0);
        const oe = ee;
        if (-1 !== oe.indexOf("file:")) {
          let ee = decodeURIComponent(oe.substring(5).toLowerCase());
          0 === ee.indexOf("./") && (ee = ee.substring(2));
          const ye = Ke.FilesToLoad[ee];
          if (ye) return de(ye, ie, He, be, Fe ? ee => Fe(void 0, new pe(ee.message, ee.file)) : void 0)
        }
        const {
          match: Re,
          type: fe
        } = Pe(oe);
        if (Re) {
          const ee = {
            onCompleteObservable: new Me.d,
            abort: () => () => {}
          };
          try {
            const ee = be ? Ae(oe) : Ye(oe);
            ie(ee, void 0, fe)
          } catch (Ue) {
            Fe ? Fe(void 0, Ue) : ke.e.Error(Ue.message || "Failed to parse the Data URL")
          }
          return qe.c.SetImmediate((() => {
            ee.onCompleteObservable.notifyObservers(ee)
          })), ee
        }
        return te(oe, ((ee, He) => {
          ie(ee, He?.responseURL, He?.getResponseHeader("content-type"))
        }), He, ye, be, Fe ? ee => {
          Fe(ee.request, new pe(ee.message, ee.request))
        } : void 0, Je)
      },
      te = (ee, ie, He, Ke, Ue, Fe, oe) => {
        null !== Ke && (Ke ?? (Ke = Je.b.LastCreatedScene?.offlineProvider)), ee = Be.CleanUrl(ee), ee = Be.PreprocessUrl(ee);
        const Re = Be.BaseUrl + ee;
        let qe = !1;
        const fe = {
            onCompleteObservable: new Me.d,
            abort: () => qe = !0
          },
          Te = () => {
            let ee, Me = new ye.c,
              Ke = null;
            const Je = () => {
              Me && (He && Me.removeEventListener("progress", He), ee && Me.removeEventListener("readystatechange", ee), Me.removeEventListener("loadend", Te))
            };
            let Te = () => {
              Je(), fe.onCompleteObservable.notifyObservers(fe), fe.onCompleteObservable.clear(), He = void 0, ee = null, Te = null, Fe = void 0, oe = void 0, ie = void 0
            };
            fe.abort = () => {
              qe = !0, Te && Te(), Me && Me.readyState !== (XMLHttpRequest.DONE || 4) && Me.abort(), null !== Ke && (clearTimeout(Ke), Ke = null), Me = null
            };
            const pe = ee => {
                const ie = ee.message || "Unknown error";
                Fe && Me ? Fe(new Xe(ie, Me)) : ke.e.Error(ie)
              },
              ze = ke => {
                if (Me) {
                  if (Me.open("GET", Re), oe) try {
                    oe(Me)
                  } catch (fe) {
                    return void pe(fe)
                  }
                  Ue && (Me.responseType = "arraybuffer"), He && Me.addEventListener("progress", He), Te && Me.addEventListener("loadend", Te), ee = () => {
                    if (!qe && Me && Me.readyState === (XMLHttpRequest.DONE || 4)) {
                      if (ee && Me.removeEventListener("readystatechange", ee), Me.status >= 200 && Me.status < 300 || 0 === Me.status && (!(0, be.m)() || we())) {
                        const ee = Ue ? Me.response : Me.responseText;
                        if (null !== ee) {
                          try {
                            ie && ie(ee, Me)
                          } catch (fe) {
                            pe(fe)
                          }
                          return
                        }
                      }
                      const He = Be.DefaultRetryStrategy;
                      if (He) {
                        const ee = He(Re, Me, ke);
                        if (-1 !== ee) return Je(), Me = new ye.c, void(Ke = setTimeout((() => ze(ke + 1)), ee))
                      }
                      const oe = new Xe("Error status: " + Me.status + " " + Me.statusText + " - Unable to load " + Re, Me);
                      Fe && Fe(oe)
                    }
                  }, Me.addEventListener("readystatechange", ee), Me.send()
                }
              };
            ze(0)
          };
        if (Ke && Ke.enableSceneOffline && !ee.startsWith("blob:")) {
          const ye = ee => {
              ee && ee.status > 400 ? Fe && Fe(ee) : Te()
            },
            be = () => {
              Ke && Ke.loadFile(Be.BaseUrl + ee, (ee => {
                !qe && ie && ie(ee), fe.onCompleteObservable.notifyObservers(fe)
              }), He ? ee => {
                !qe && He && He(ee)
              } : void 0, ye, Ue)
            };
          Ke.open(be, ye)
        } else Te();
        return fe
      },
      Ze = ee => {
        const {
          match: ie,
          type: He
        } = Pe(ee);
        if (ie) return He || void 0;
        const ye = ee.lastIndexOf(".");
        switch (ee.substring(ye + 1).toLowerCase()) {
          case "glb":
            return "model/gltf-binary";
          case "bin":
            return "application/octet-stream";
          case "YV":
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
      we = () => "undefined" !== typeof location && "file:" === location.protocol,
      De = ee => Te.test(ee),
      Pe = ee => {
        const ie = Te.exec(ee);
        if (null === ie || 0 === ie.length) return {
          match: !1,
          type: ""
        };
        return {
          match: !0,
          type: ie[0].replace("data:", "").replace(";base64,", "")
        }
      };

    function Ae(ee) {
      return (0, Fe.e)(ee.split(",")[1])
    }
    const Ye = ee => (0, Fe.g)(ee.split(",")[1]);
    let Ve;
    const ae = (ee, ie, He, ye, be, Me, Ke, Ue, Fe, Je) => {
      Ve = {
        DecodeBase64UrlToBinary: ee,
        DecodeBase64UrlToString: ie,
        DefaultRetryStrategy: He.DefaultRetryStrategy,
        BaseUrl: He.BaseUrl,
        CorsBehavior: He.CorsBehavior,
        PreprocessUrl: He.PreprocessUrl,
        IsBase64DataUrl: ye,
        IsFileURL: be,
        LoadFile: Me,
        LoadImage: Ke,
        ReadFile: Ue,
        RequestFile: Fe,
        SetCorsBehavior: Je
      }, Object.defineProperty(Ve, "DefaultRetryStrategy", {
        get: function() {
          return He.DefaultRetryStrategy
        },
        set: function(ee) {
          He.DefaultRetryStrategy = ee
        }
      }), Object.defineProperty(Ve, "BaseUrl", {
        get: function() {
          return He.BaseUrl
        },
        set: function(ee) {
          He.BaseUrl = ee
        }
      }), Object.defineProperty(Ve, "PreprocessUrl", {
        get: function() {
          return He.PreprocessUrl
        },
        set: function(ee) {
          He.PreprocessUrl = ee
        }
      }), Object.defineProperty(Ve, "CorsBehavior", {
        get: function() {
          return He.CorsBehavior
        },
        set: function(ee) {
          He.CorsBehavior = ee
        }
      })
    };
    let ce = !1;

    function xe() {
      ce || (ce = !0, ae(Ae, Ye, Be, De, we, We, Oe, de, te, Ee), oe.b.loadFile = We, oe.b.loadImage = Oe, Re.s.loadFile = We)
    }
  },
  41178: (ee, ie, He) => {
    He.d(ie, {
      d: () => Ue,
      h: () => Me,
      j: () => Ke
    });
    let ye = null;

    function be() {
      if (ye) return ye;
      const ee = new ArrayBuffer(4),
        ie = new Float32Array(ee),
        He = new Uint32Array(ee),
        be = new Uint32Array(512),
        Me = new Uint32Array(512);
      for (let ye = 0; ye < 256; ++ye) {
        const ee = ye - 127;
        ee < -24 ? (be[ye] = 0, be[256 | ye] = 32768, Me[ye] = 24, Me[256 | ye] = 24) : ee < -14 ? (be[ye] = 1024 >> -ee - 14, be[256 | ye] = 1024 >> -ee - 14 | 32768, Me[ye] = -ee - 1, Me[256 | ye] = -ee - 1) : ee <= 15 ? (be[ye] = ee + 15 << 10, be[256 | ye] = ee + 15 << 10 | 32768, Me[ye] = 13, Me[256 | ye] = 13) : ee < 128 ? (be[ye] = 31744, be[256 | ye] = 64512, Me[ye] = 24, Me[256 | ye] = 24) : (be[ye] = 31744, be[256 | ye] = 64512, Me[ye] = 13, Me[256 | ye] = 13)
      }
      const Ke = new Uint32Array(2048),
        Ue = new Uint32Array(64),
        Fe = new Uint32Array(64);
      for (let ye = 1; ye < 1024; ++ye) {
        let ee = ye << 13,
          ie = 0;
        for (; 0 === (8388608 & ee);) ee <<= 1, ie -= 8388608;
        ee &= -8388609, ie += 947912704, Ke[ye] = ee | ie
      }
      for (let ye = 1024; ye < 2048; ++ye) Ke[ye] = 939524096 + (ye - 1024 << 13);
      for (let ye = 1; ye < 31; ++ye) Ue[ye] = ye << 23;
      Ue[31] = 1199570944, Ue[32] = 2147483648;
      for (let ye = 33; ye < 63; ++ye) Ue[ye] = 2147483648 + (ye - 32 << 23);
      Ue[63] = 3347054592;
      for (let ye = 1; ye < 64; ++ye) 32 !== ye && (Fe[ye] = 1024);
      return ye = {
        floatView: ie,
        uint32View: He,
        baseTable: be,
        shiftTable: Me,
        mantissaTable: Ke,
        exponentTable: Ue,
        offsetTable: Fe
      }, ye
    }
    const Me = 65504;

    function Ke(ee) {
      const ie = be();
      ie.floatView[0] = ee;
      const He = ie.uint32View[0],
        ye = He >> 23 & 511;
      return ie.baseTable[ye] + ((8388607 & He) >> ie.shiftTable[ye])
    }

    function Ue(ee) {
      const ie = be();
      return ie.uint32View[0] = ie.mantissaTable[ie.offsetTable[ee >> 10] + (1023 & ee)] + ie.exponentTable[ee >> 10], ie.floatView[0]
    }
  },
  41172: (ee, ie, He) => {
    He.d(ie, {
      e: () => Me,
      g: () => be,
      j: () => ye
    });
    const ye = ee => {
        const ie = ArrayBuffer.isView(ee) ? new Uint8Array(ee.buffer, ee.byteOffset, ee.byteLength) : new Uint8Array(ee);
        return "function" === typeof ie.toBase64 ? ie.toBase64() : function(ee) {
          const ie = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
          let He, ye, be, Me, Ke, Ue, Fe, Je = "",
            oe = 0;
          for (; oe < ee.length;) He = ee[oe++], ye = oe < ee.length ? ee[oe++] : Number.NaN, be = oe < ee.length ? ee[oe++] : Number.NaN, Me = He >> 2, Ke = (3 & He) << 4 | ye >> 4, Ue = (15 & ye) << 2 | be >> 6, Fe = 63 & be, isNaN(ye) ? Ue = Fe = 64 : isNaN(be) && (Fe = 64), Je += ie.charAt(Me) + ie.charAt(Ke) + ie.charAt(Ue) + ie.charAt(Fe);
          return Je
        }(ie)
      },
      be = ee => atob(ee),
      Me = ee => "function" === typeof Uint8Array.fromBase64 ? Uint8Array.fromBase64(ee).buffer : function(ee) {
        const ie = be(ee),
          He = ie.length,
          ye = new Uint8Array(new ArrayBuffer(He));
        for (let be = 0; be < He; be++) ye[be] = ie.charCodeAt(be);
        return ye.buffer
      }(ee)
  },
  40995: (ee, ie, He) => {
    He.d(ie, {
      c: () => be,
      f: () => Ke
    });
    let ye = [];
    class be {
      static SetImmediate(ee) {
        0 === ye.length && setTimeout((() => {
          const ee = ye;
          ye = [];
          for (const ie of ee) ie()
        }), 1), ye.push(ee)
      }
    }

    function Me(ee, ie, He) {
      try {
        if (ee()) return ie(), !0
      } catch (ye) {
        return He?.(ye), !0
      }
      return !1
    }
    const Ke = function(ee, ie, He) {
      let ye = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 16,
        be = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3e4,
        Ke = arguments.length > 6 ? arguments[6] : void 0;
      if ((!(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5]) && Me(ee, ie, He)) return null;
      const Ue = setInterval((() => {
        Me(ee, ie, He) ? clearInterval(Ue) : (be -= ye, be < 0 && (clearInterval(Ue), He?.(new Error("Operation timed out after maximum retries. " + (Ke || "")), !0)))
      }), ye);
      return () => clearInterval(Ue)
    }
  },
  41161: (ee, ie, He) => {
    He.d(ie, {
      c: () => ye
    });
    class ye {
      constructor() {
        this._xhr = "undefined" !== typeof _native && _native.XMLHttpRequest ? new _native.XMLHttpRequest : new XMLHttpRequest, this._requestURL = ""
      }
      static get IsCustomRequestAvailable() {
        return Object.keys(ye.CustomRequestHeaders).length > 0 || ye.CustomRequestModifiers.length > 0
      }
      static _CleanUrl(ee) {
        return ee = (ee = ee.replace("file:http:", "http:")).replace("file:https:", "https:")
      }
      static _ShouldSkipRequestModifications(ee) {
        return ye.SkipRequestModificationForBabylonCDN && (ee.includes("preview.babylonjs.com") || ee.includes("cdn.babylonjs.com"))
      }
      static _CollectCustomizations(ee) {
        const ie = {
          ...arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
        };
        if (ye._ShouldSkipRequestModifications(ee)) return {
          url: ee,
          headers: ie
        };
        for (const be in ye.CustomRequestHeaders) {
          const ee = ye.CustomRequestHeaders[be];
          ee && (ie[be] = ee)
        }
        const He = {
          setRequestHeader: (ee, He) => {
            ie[ee] = He
          }
        };
        for (const be of ye.CustomRequestModifiers) {
          if (ye._ShouldSkipRequestModifications(ee)) break;
          const ie = be(He, ee);
          "string" === typeof ie && (ee = ie)
        }
        return {
          url: ee,
          headers: ie
        }
      }
      static async FetchAsync(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const He = ie.method ?? "GET";
        if ("undefined" !== typeof fetch) {
          const {
            url: be,
            headers: Me
          } = ye._CollectCustomizations(ye._CleanUrl(ee), ie.headers ?? {});
          return await fetch(be, {
            method: He,
            headers: Me,
            body: ie.body ?? void 0
          })
        }
        return await new Promise(((be, Me) => {
          const Ke = new ye;
          Ke.responseType = "arraybuffer", Ke.addEventListener("readystatechange", (() => {
            if (4 === Ke.readyState)
              if (Ke.status >= 200 && Ke.status < 300) {
                const ee = "undefined" !== typeof Headers ? new Headers : void 0,
                  ie = Ke.getResponseHeader("Content-Type");
                ie && ee && ee.set("Content-Type", ie), "undefined" !== typeof Response ? be(new Response(Ke.response, {
                  status: Ke.status,
                  statusText: Ke.statusText,
                  headers: ee
                })) : be({
                  ok: !0,
                  status: Ke.status,
                  statusText: Ke.statusText,
                  headers: {
                    get: ee => Ke.getResponseHeader(ee)
                  },
                  arrayBuffer: async () => await Promise.resolve(Ke.response)
                })
              } else Me(new Error(`HTTP ${Ke.status} loading '${Ke.requestURL}': ${Ke.statusText}`))
          })), Ke.open(He, ee, ie.headers), Ke.send(ie.body ?? null)
        }))
      }
      get requestURL() {
        return this._requestURL
      }
      get onprogress() {
        return this._xhr.onprogress
      }
      set onprogress(ee) {
        this._xhr.onprogress = ee
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
      set responseType(ee) {
        this._xhr.responseType = ee
      }
      get timeout() {
        return this._xhr.timeout
      }
      set timeout(ee) {
        this._xhr.timeout = ee
      }
      addEventListener(ee, ie, He) {
        this._xhr.addEventListener(ee, ie, He)
      }
      removeEventListener(ee, ie, He) {
        this._xhr.removeEventListener(ee, ie, He)
      }
      abort() {
        this._xhr.abort()
      }
      send(ee) {
        this._xhr.send(ee)
      }
      open(ee, ie, He) {
        const {
          url: be,
          headers: Me
        } = ye._CollectCustomizations(ie, He);
        this._requestURL = ye._CleanUrl(be), this._xhr.open(ee, this._requestURL, !0);
        for (const ye in Me) this._xhr.setRequestHeader(ye, Me[ye])
      }
      setRequestHeader(ee, ie) {
        this._xhr.setRequestHeader(ee, ie)
      }
      getResponseHeader(ee) {
        return this._xhr.getResponseHeader(ee)
      }
    }
    ye.CustomRequestHeaders = {}, ye.CustomRequestModifiers = new Array, ye.SkipRequestModificationForBabylonCDN = !0
  }
};
Object.freeze(modules);
for (const ee in modules) Object.freeze(modules[ee]);