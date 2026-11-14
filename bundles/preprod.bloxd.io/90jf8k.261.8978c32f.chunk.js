export const id = 261;
export const ids = [261];
export const modules = {
  39067: (FF, WF, SF) => {
    SF.d(WF, {
      c: () => aW,
      d: () => MF,
      e: () => gW,
      f: () => tW,
      g: () => eF,
      j: () => rW,
      n: () => QF,
      r: () => EF
    });
    var CF = SF(35623),
      AF = SF(35678),
      uF = SF(35650),
      hF = SF(39071),
      bW = SF(38187),
      dF = SF(37989),
      PF = SF(38016),
      RF = SF(37994),
      iW = SF(35660);
    const eF = Object.freeze(new CF.e(0, 0, 0, 0)),
      EF = Object.freeze(CF.r.Zero()),
      QF = Object.freeze(CF.n.Zero()),
      rW = Object.freeze(dF.d.Zero()),
      gW = Object.freeze(AF.e.Black()),
      tW = Object.freeze(new AF.i(0, 0, 0, 0)),
      TF = {
        key: 0,
        repeatCount: 0,
        ZFF: 2
      };
    class aW {
      static _PrepareAnimation(FF, WF, SF, uF, hF, bW, PF, RF) {
        let iW;
        if (!isNaN(parseFloat(hF)) && isFinite(hF) ? iW = aW.ANIMATIONTYPE_FLOAT : hF instanceof CF.e ? iW = aW.ANIMATIONTYPE_QUATERNION : hF instanceof CF.r ? iW = aW.ANIMATIONTYPE_VECTOR3 : hF instanceof CF.n ? iW = aW.ANIMATIONTYPE_VECTOR2 : hF instanceof AF.e ? iW = aW.ANIMATIONTYPE_COLOR3 : hF instanceof AF.i ? iW = aW.ANIMATIONTYPE_COLOR4 : hF instanceof dF.d && (iW = aW.ANIMATIONTYPE_SIZE), void 0 == iW) return null;
        const eF = new aW(FF, WF, SF, iW, PF),
          EF = [{
            frame: 0,
            value: hF
          }, {
            frame: uF,
            value: bW
          }];
        return eF.setKeys(EF), void 0 !== RF && eF.setEasingFunction(RF), eF
      }
      get runtimeAnimations() {
        return this._runtimeAnimations
      }
      get hasRunningRuntimeAnimations() {
        for (const FF of this._runtimeAnimations)
          if (!FF.isStopped()) return !0;
        return !1
      }
      constructor(FF, WF, SF, CF, AF, uF) {
        this.name = FF, this.targetProperty = WF, this.framePerSecond = SF, this.dataType = CF, this.ZFF = AF, this.enableBlending = uF, this._easingFunction = null, this._runtimeAnimations = new Array, this._events = new Array, this.blendingSpeed = .01, this._ranges = {}, this._coreAnimation = null, this.targetPropertyPath = WF.split("."), this.dataType = CF, this.ZFF = void 0 === AF ? aW.ANIMATIONLOOPMODE_CYCLE : AF, this.uniqueId = aW._UniqueIdGenerator++
      }
      toString(FF) {
        let WF = "Name: " + this.name + ", property: " + this.targetProperty;
        if (WF += ", datatype: " + ["Float", "HC", "Quaternion", "Matrix", "Color3", "Vector2"][this.dataType], WF += ", nKeys: " + (this._keys ? this._keys.length : "none"), WF += ", nRanges: " + (this._ranges ? Object.keys(this._ranges).length : "none"), FF) {
          WF += ", Ranges: {";
          let FF = !0;
          for (const SF in this._ranges) FF || (WF += ", "), FF = !1, WF += SF;
          WF += "}"
        }
        return WF
      }
      addEvent(FF) {
        this._events.push(FF), this._events.sort(((FF, WF) => FF.frame - WF.frame))
      }
      removeEvents(FF) {
        for (let WF = 0; WF < this._events.length; WF++) this._events[WF].frame === FF && (this._events.splice(WF, 1), WF--)
      }
      getEvents() {
        return this._events
      }
      createRange(FF, WF, SF) {
        this._ranges[FF] || (this._ranges[FF] = new hF.c(FF, WF, SF))
      }
      deleteRange(FF) {
        let WF = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const SF = this._ranges[FF];
        if (SF) {
          if (WF) {
            const FF = SF.from,
              WF = SF.to;
            for (let SF = this._keys.length - 1; SF >= 0; SF--) this._keys[SF].frame >= FF && this._keys[SF].frame <= WF && this._keys.splice(SF, 1)
          }
          this._ranges[FF] = null
        }
      }
      getRange(FF) {
        return this._ranges[FF]
      }
      getKeys() {
        return this._keys
      }
      getHighestFrame() {
        let FF = 0;
        for (let WF = 0, SF = this._keys.length; WF < SF; WF++) FF < this._keys[WF].frame && (FF = this._keys[WF].frame);
        return FF
      }
      getEasingFunction() {
        return this._easingFunction
      }
      setEasingFunction(FF) {
        this._easingFunction = FF
      }
      floatInterpolateFunction(FF, WF, SF) {
        return (0, uF.Lerp)(FF, WF, SF)
      }
      floatInterpolateFunctionWithTangents(FF, WF, SF, CF, AF) {
        return (0, uF.Hermite)(FF, WF, SF, CF, AF)
      }
      quaternionInterpolateFunction(FF, WF, SF) {
        return CF.e.Slerp(FF, WF, SF)
      }
      quaternionInterpolateFunctionWithTangents(FF, WF, SF, AF, uF) {
        return CF.e.Hermite(FF, WF, SF, AF, uF).normalize()
      }
      vector3InterpolateFunction(FF, WF, SF) {
        return CF.r.Lerp(FF, WF, SF)
      }
      vector3InterpolateFunctionWithTangents(FF, WF, SF, AF, uF) {
        return CF.r.Hermite(FF, WF, SF, AF, uF)
      }
      vector2InterpolateFunction(FF, WF, SF) {
        return CF.n.Lerp(FF, WF, SF)
      }
      vector2InterpolateFunctionWithTangents(FF, WF, SF, AF, uF) {
        return CF.n.Hermite(FF, WF, SF, AF, uF)
      }
      sizeInterpolateFunction(FF, WF, SF) {
        return dF.d.Lerp(FF, WF, SF)
      }
      color3InterpolateFunction(FF, WF, SF) {
        return AF.e.Lerp(FF, WF, SF)
      }
      color3InterpolateFunctionWithTangents(FF, WF, SF, CF, uF) {
        return AF.e.Hermite(FF, WF, SF, CF, uF)
      }
      color4InterpolateFunction(FF, WF, SF) {
        return AF.i.Lerp(FF, WF, SF)
      }
      color4InterpolateFunctionWithTangents(FF, WF, SF, CF, uF) {
        return AF.i.Hermite(FF, WF, SF, CF, uF)
      }
      _getKeyValue(FF) {
        return "function" === typeof FF ? FF() : FF
      }
      evaluate(FF) {
        return TF.key = 0, this._interpolate(FF, TF)
      }
      _interpolate(FF, WF) {
        let SF = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (WF.ZFF === aW.ANIMATIONLOOPMODE_CONSTANT && WF.repeatCount > 0) return WF.highLimitValue.clone ? WF.highLimitValue.clone() : WF.highLimitValue;
        const CF = this._keys;
        let AF;
        if (this._coreAnimation) AF = this._coreAnimation._key;
        else {
          const uF = CF.length;
          for (AF = WF.key; AF >= 0 && FF < CF[AF].frame;) --AF;
          for (; AF + 1 <= uF - 1 && FF >= CF[AF + 1].frame;) ++AF;
          if (WF.key = AF, AF < 0) return SF ? void 0 : this._getKeyValue(CF[0].value);
          if (AF + 1 > uF - 1) return SF ? void 0 : this._getKeyValue(CF[uF - 1].value);
          this._key = AF
        }
        const uF = CF[AF],
          hF = CF[AF + 1];
        if (SF && (FF === uF.frame || FF === hF.frame)) return;
        const bW = this._getKeyValue(uF.value),
          dF = this._getKeyValue(hF.value);
        if (1 === uF.interpolation) return hF.frame > FF ? bW : dF;
        const PF = void 0 !== uF.outTangent && void 0 !== hF.inTangent,
          RF = hF.frame - uF.frame;
        let iW = (FF - uF.frame) / RF;
        const TF = uF.easingFunction || this.getEasingFunction();
        switch (TF && (iW = TF.ease(iW)), this.dataType) {
          case aW.ANIMATIONTYPE_FLOAT: {
            const FF = PF ? this.floatInterpolateFunctionWithTangents(bW, uF.outTangent * RF, dF, hF.inTangent * RF, iW) : this.floatInterpolateFunction(bW, dF, iW);
            switch (WF.ZFF) {
              case aW.ANIMATIONLOOPMODE_CYCLE:
              case aW.ANIMATIONLOOPMODE_CONSTANT:
              case aW.ANIMATIONLOOPMODE_YOYO:
                return FF;
              case aW.ANIMATIONLOOPMODE_RELATIVE:
              case aW.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return (WF.offsetValue ?? 0) * WF.repeatCount + FF
            }
            break
          }
          case aW.ANIMATIONTYPE_QUATERNION: {
            const FF = PF ? this.quaternionInterpolateFunctionWithTangents(bW, uF.outTangent.scale(RF), dF, hF.inTangent.scale(RF), iW) : this.quaternionInterpolateFunction(bW, dF, iW);
            switch (WF.ZFF) {
              case aW.ANIMATIONLOOPMODE_CYCLE:
              case aW.ANIMATIONLOOPMODE_CONSTANT:
              case aW.ANIMATIONLOOPMODE_YOYO:
                return FF;
              case aW.ANIMATIONLOOPMODE_RELATIVE:
              case aW.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return FF.addInPlace((WF.offsetValue || eF).scale(WF.repeatCount))
            }
            return FF
          }
          case aW.ANIMATIONTYPE_VECTOR3: {
            const FF = PF ? this.vector3InterpolateFunctionWithTangents(bW, uF.outTangent.scale(RF), dF, hF.inTangent.scale(RF), iW) : this.vector3InterpolateFunction(bW, dF, iW);
            switch (WF.ZFF) {
              case aW.ANIMATIONLOOPMODE_CYCLE:
              case aW.ANIMATIONLOOPMODE_CONSTANT:
              case aW.ANIMATIONLOOPMODE_YOYO:
                return FF;
              case aW.ANIMATIONLOOPMODE_RELATIVE:
              case aW.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return FF.add((WF.offsetValue || EF).scale(WF.repeatCount))
            }
            break
          }
          case aW.ANIMATIONTYPE_VECTOR2: {
            const FF = PF ? this.vector2InterpolateFunctionWithTangents(bW, uF.outTangent.scale(RF), dF, hF.inTangent.scale(RF), iW) : this.vector2InterpolateFunction(bW, dF, iW);
            switch (WF.ZFF) {
              case aW.ANIMATIONLOOPMODE_CYCLE:
              case aW.ANIMATIONLOOPMODE_CONSTANT:
              case aW.ANIMATIONLOOPMODE_YOYO:
                return FF;
              case aW.ANIMATIONLOOPMODE_RELATIVE:
              case aW.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return FF.add((WF.offsetValue || QF).scale(WF.repeatCount))
            }
            break
          }
          case aW.ANIMATIONTYPE_SIZE:
            switch (WF.ZFF) {
              case aW.ANIMATIONLOOPMODE_CYCLE:
              case aW.ANIMATIONLOOPMODE_CONSTANT:
              case aW.ANIMATIONLOOPMODE_YOYO:
                return this.sizeInterpolateFunction(bW, dF, iW);
              case aW.ANIMATIONLOOPMODE_RELATIVE:
              case aW.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return this.sizeInterpolateFunction(bW, dF, iW).add((WF.offsetValue || rW).scale(WF.repeatCount))
            }
            break;
          case aW.ANIMATIONTYPE_COLOR3: {
            const FF = PF ? this.color3InterpolateFunctionWithTangents(bW, uF.outTangent.scale(RF), dF, hF.inTangent.scale(RF), iW) : this.color3InterpolateFunction(bW, dF, iW);
            switch (WF.ZFF) {
              case aW.ANIMATIONLOOPMODE_CYCLE:
              case aW.ANIMATIONLOOPMODE_CONSTANT:
              case aW.ANIMATIONLOOPMODE_YOYO:
                return FF;
              case aW.ANIMATIONLOOPMODE_RELATIVE:
              case aW.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return FF.add((WF.offsetValue || gW).scale(WF.repeatCount))
            }
            break
          }
          case aW.ANIMATIONTYPE_COLOR4: {
            const FF = PF ? this.color4InterpolateFunctionWithTangents(bW, uF.outTangent.scale(RF), dF, hF.inTangent.scale(RF), iW) : this.color4InterpolateFunction(bW, dF, iW);
            switch (WF.ZFF) {
              case aW.ANIMATIONLOOPMODE_CYCLE:
              case aW.ANIMATIONLOOPMODE_CONSTANT:
              case aW.ANIMATIONLOOPMODE_YOYO:
                return FF;
              case aW.ANIMATIONLOOPMODE_RELATIVE:
              case aW.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return FF.add((WF.offsetValue || tW).scale(WF.repeatCount))
            }
            break
          }
          case aW.ANIMATIONTYPE_MATRIX:
            switch (WF.ZFF) {
              case aW.ANIMATIONLOOPMODE_CYCLE:
              case aW.ANIMATIONLOOPMODE_CONSTANT:
              case aW.ANIMATIONLOOPMODE_YOYO:
                return aW.AllowMatricesInterpolation ? this.matrixInterpolateFunction(bW, dF, iW, WF.workValue) : bW;
              case aW.ANIMATIONLOOPMODE_RELATIVE:
              case aW.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return bW
            }
        }
        return 0
      }
      matrixInterpolateFunction(FF, WF, SF, AF) {
        return aW.AllowMatrixDecomposeForInterpolation ? AF ? (CF.b.DecomposeLerpToRef(FF, WF, SF, AF), AF) : CF.b.DecomposeLerp(FF, WF, SF) : AF ? (CF.b.LerpToRef(FF, WF, SF, AF), AF) : CF.b.Lerp(FF, WF, SF)
      }
      clone() {
        let FF = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const WF = new aW(this.name, this.targetPropertyPath.join("."), this.framePerSecond, this.dataType, this.ZFF);
        if (WF.enableBlending = this.enableBlending, WF.blendingSpeed = this.blendingSpeed, this._keys && WF.setKeys(this._keys, !1, FF), this._ranges) {
          WF._ranges = {};
          for (const FF in this._ranges) {
            const SF = this._ranges[FF];
            SF && (WF._ranges[FF] = SF.clone())
          }
        }
        return WF
      }
      setKeys(FF) {
        let WF = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) this._keys = FF;
        else if (this._keys = FF.slice(0), WF)
          for (let SF = 0; SF < this._keys.length; SF++) {
            const FF = this._keys[SF];
            this._keys[SF] = {
              frame: FF.frame,
              value: FF.value.clone ? FF.value.clone() : FF.value,
              inTangent: FF.inTangent && FF.inTangent.clone ? FF.inTangent.clone() : FF.inTangent,
              outTangent: FF.outTangent && FF.outTangent.clone ? FF.outTangent.clone() : FF.outTangent,
              interpolation: FF.interpolation,
              lockedTangent: FF.lockedTangent,
              easingFunction: FF.easingFunction
            }
          }
      }
      createKeyForFrame(FF) {
        TF.key = 0;
        const WF = this._interpolate(FF, TF, !0);
        if (!WF) return this._keys[TF.key].frame === FF ? TF.key : TF.key + 1;
        const SF = {
          frame: FF,
          value: WF.clone ? WF.clone() : WF
        };
        return this._keys.splice(TF.key + 1, 0, SF), TF.key + 1
      }
      serialize() {
        const FF = {};
        FF.name = this.name, FF.property = this.targetProperty, FF.framePerSecond = this.framePerSecond, FF.dataType = this.dataType, FF.loopBehavior = this.ZFF, FF.enableBlending = this.enableBlending, FF.blendingSpeed = this.blendingSpeed;
        const WF = this.dataType;
        FF.keys = [];
        const SF = this.getKeys();
        for (let CF = 0; CF < SF.length; CF++) {
          const AF = SF[CF],
            uF = {};
          switch (uF.frame = AF.frame, WF) {
            case aW.ANIMATIONTYPE_FLOAT:
              uF.values = [AF.value], void 0 !== AF.inTangent && uF.values.push(AF.inTangent), void 0 !== AF.outTangent && (void 0 === AF.inTangent && uF.values.push(void 0), uF.values.push(AF.outTangent)), void 0 !== AF.interpolation && (void 0 === AF.inTangent && uF.values.push(void 0), void 0 === AF.outTangent && uF.values.push(void 0), uF.values.push(AF.interpolation));
              break;
            case aW.ANIMATIONTYPE_QUATERNION:
            case aW.ANIMATIONTYPE_MATRIX:
            case aW.ANIMATIONTYPE_VECTOR3:
            case aW.ANIMATIONTYPE_COLOR3:
            case aW.ANIMATIONTYPE_COLOR4:
              uF.values = AF.value.kRF(), void 0 != AF.inTangent && uF.values.push(AF.inTangent.kRF()), void 0 != AF.outTangent && (void 0 === AF.inTangent && uF.values.push(void 0), uF.values.push(AF.outTangent.kRF())), void 0 !== AF.interpolation && (void 0 === AF.inTangent && uF.values.push(void 0), void 0 === AF.outTangent && uF.values.push(void 0), uF.values.push(AF.interpolation))
          }
          FF.keys.push(uF)
        }
        FF.Bu = [];
        for (const CF in this._ranges) {
          const WF = this._ranges[CF];
          if (!WF) continue;
          const SF = {};
          SF.name = CF, SF.from = WF.from, SF.to = WF.to, FF.Bu.push(SF)
        }
        return FF
      }
      static _UniversalLerp(FF, WF, SF) {
        const CF = FF.constructor;
        return CF.Lerp ? CF.Lerp(FF, WF, SF) : CF.Slerp ? CF.Slerp(FF, WF, SF) : FF.toFixed ? FF * (1 - SF) + SF * WF : WF
      }
    }

    function kW(FF, WF, SF) {
      let AF;
      AF = "object" === typeof WF ? WF : {
        referenceFrame: WF ?? 0,
        range: SF,
        cloneOriginalAnimation: arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        clonedAnimationName: arguments.length > 4 ? arguments[4] : void 0
      };
      let uF = FF;
      AF.cloneOriginalAnimation && (uF = FF.clone(), uF.name = AF.clonedAnimationName || uF.name);
      const hF = uF.getKeys();
      if (!hF.length) return uF;
      const bW = AF.referenceFrame && AF.referenceFrame >= 0 ? AF.referenceFrame : 0;
      let dF = 0;
      const PF = hF[0];
      let RF = hF.length - 1;
      const iW = hF[RF],
        eF = {
          referenceValue: PF.value,
          referencePosition: CF.j.HC[0],
          referenceQuaternion: CF.j.Quaternion[0],
          referenceScaling: CF.j.HC[1],
          keyPosition: CF.j.HC[2],
          keyQuaternion: CF.j.Quaternion[1],
          keyScaling: CF.j.HC[3]
        };
      let EF = PF.frame,
        QF = iW.frame;
      if (AF.range) {
        const FF = uF.getRange(AF.range);
        FF && (EF = FF.from, QF = FF.to)
      } else EF = AF.fromFrame ?? EF, QF = AF.toFrame ?? QF;
      EF !== PF.frame && (dF = uF.createKeyForFrame(EF)), QF !== iW.frame && (RF = uF.createKeyForFrame(QF));
      const rW = uF.getKeys();
      if (1 === rW.length) {
        const FF = uF._getKeyValue(rW[0].value);
        eF.referenceValue = FF.clone ? FF.clone() : FF
      } else if (bW <= PF.frame) {
        const FF = uF._getKeyValue(PF.value);
        eF.referenceValue = FF.clone ? FF.clone() : FF
      } else if (bW >= iW.frame) {
        const FF = uF._getKeyValue(iW.value);
        eF.referenceValue = FF.clone ? FF.clone() : FF
      } else {
        TF.key = 0;
        const FF = uF._interpolate(bW, TF);
        eF.referenceValue = FF.clone ? FF.clone() : FF
      }
      uF.dataType === aW.ANIMATIONTYPE_QUATERNION ? eF.referenceValue.normalize().conjugateInPlace() : uF.dataType === aW.ANIMATIONTYPE_MATRIX && (eF.referenceValue.decompose(eF.referenceScaling, eF.referenceQuaternion, eF.referencePosition), eF.referenceQuaternion.normalize().conjugateInPlace());
      let gW = Number.MAX_VALUE;
      const tW = AF.clipKeys ? [] : null;
      for (let TF = dF; TF <= RF; TF++) {
        let FF = rW[TF];
        if ((tW || AF.cloneOriginalAnimation) && (FF = {
            frame: FF.frame,
            value: FF.value.clone ? FF.value.clone() : FF.value,
            inTangent: FF.inTangent,
            outTangent: FF.outTangent,
            interpolation: FF.interpolation,
            lockedTangent: FF.lockedTangent,
            easingFunction: FF.easingFunction
          }, tW && (gW === Number.MAX_VALUE && (gW = FF.frame), FF.frame -= gW, tW.push(FF))), !TF || uF.dataType === aW.ANIMATIONTYPE_FLOAT || FF.value !== PF.value) switch (uF.dataType) {
          case aW.ANIMATIONTYPE_MATRIX:
            FF.value.decompose(eF.keyScaling, eF.keyQuaternion, eF.keyPosition), eF.keyPosition.IPF(eF.referencePosition), eF.keyScaling.divideInPlace(eF.referenceScaling), eF.referenceQuaternion.multiplyToRef(eF.keyQuaternion, eF.keyQuaternion), CF.b.ComposeToRef(eF.keyScaling, eF.keyQuaternion, eF.keyPosition, FF.value);
            break;
          case aW.ANIMATIONTYPE_QUATERNION:
            eF.referenceValue.multiplyToRef(FF.value, FF.value);
            break;
          case aW.ANIMATIONTYPE_VECTOR2:
          case aW.ANIMATIONTYPE_VECTOR3:
          case aW.ANIMATIONTYPE_COLOR3:
          case aW.ANIMATIONTYPE_COLOR4:
            FF.value.subtractToRef(eF.referenceValue, FF.value);
            break;
          case aW.ANIMATIONTYPE_SIZE:
            FF.value.width -= eF.referenceValue.width, FF.value.height -= eF.referenceValue.height;
            break;
          default:
            FF.value -= eF.referenceValue
        }
      }
      return tW && uF.setKeys(tW, !0), uF
    }

    function qW(FF, WF, SF, CF) {
      const AF = new aW(FF + "Animation", FF, SF, WF, aW.ANIMATIONLOOPMODE_CONSTANT);
      return AF.setEasingFunction(CF), AF
    }

    function VF(FF, WF, SF, CF, AF, uF, hF, bW, dF, PF, RF) {
      const iW = aW._PrepareAnimation(FF, SF, CF, AF, uF, hF, bW, dF);
      return iW ? (WF.OWF && (RF = WF.OWF()), RF ? RF.beginDirectAnimation(WF, [iW], 0, AF, iW.ZFF !== aW.ANIMATIONLOOPMODE_CONSTANT, 1, PF) : null) : null
    }

    function NF(FF, WF, SF, CF, AF, uF, hF, bW, dF, PF, RF) {
      const iW = aW._PrepareAnimation(FF, CF, AF, uF, hF, bW, dF, PF);
      if (!iW) return null;
      return WF.OWF().beginDirectHierarchyAnimation(WF, SF, [iW], 0, uF, 1 === iW.ZFF, 1, RF)
    }

    function DF(FF, WF, SF, CF, AF, uF, hF, bW, dF, PF) {
      const RF = aW._PrepareAnimation(FF, SF, CF, AF, uF, hF, bW, dF);
      return RF ? (WF.animations.push(RF), WF.OWF().beginAnimation(WF, 0, AF, 1 === RF.ZFF, 1, PF)) : null
    }

    function LF(FF, WF, SF, CF, AF, uF, hF) {
      let bW = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
        dF = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8],
        PF = arguments.length > 9 ? arguments[9] : void 0;
      if (hF <= 0) return SF[FF] = WF, bW && bW(), null;
      const RF = AF * (hF / 1e3);
      uF.setKeys(PF ?? [{
        frame: 0,
        value: SF[FF].clone ? SF[FF].clone() : SF[FF]
      }, {
        frame: RF,
        value: WF
      }]), SF.animations || (SF.animations = []), SF.animations.push(uF);
      return CF.beginAnimation(SF, 0, RF, !1, 1, bW ?? void 0, void 0, dF)
    }

    function mW(FF, WF) {
      RF.e.AppendSerializedAnimations(FF, WF)
    }

    function OF(FF) {
      const WF = new aW(FF.name, FF.property, FF.framePerSecond, FF.dataType, FF.loopBehavior),
        SF = FF.dataType,
        uF = [];
      let hF, bW;
      for (FF.enableBlending && (WF.enableBlending = FF.enableBlending), FF.blendingSpeed && (WF.blendingSpeed = FF.blendingSpeed), bW = 0; bW < FF.keys.length; bW++) {
        const WF = FF.keys[bW];
        let dF, PF, RF;
        switch (SF) {
          case aW.ANIMATIONTYPE_FLOAT:
            hF = WF.values[0], WF.values.length >= 2 && (dF = WF.values[1]), WF.values.length >= 3 && (PF = WF.values[2]), WF.values.length >= 4 && (RF = WF.values[3]);
            break;
          case aW.ANIMATIONTYPE_QUATERNION:
            if (hF = CF.e.FromArray(WF.values), WF.values.length >= 8) {
              const FF = CF.e.FromArray(WF.values.slice(4, 8));
              FF.equals(CF.e.Zero()) || (dF = FF)
            }
            if (WF.values.length >= 12) {
              const FF = CF.e.FromArray(WF.values.slice(8, 12));
              FF.equals(CF.e.Zero()) || (PF = FF)
            }
            WF.values.length >= 13 && (RF = WF.values[12]);
            break;
          case aW.ANIMATIONTYPE_MATRIX:
            hF = CF.b.FromArray(WF.values), WF.values.length >= 17 && (RF = WF.values[16]);
            break;
          case aW.ANIMATIONTYPE_COLOR3:
            hF = AF.e.FromArray(WF.values), WF.values[3] && (dF = AF.e.FromArray(WF.values[3])), WF.values[4] && (PF = AF.e.FromArray(WF.values[4])), WF.values[5] && (RF = WF.values[5]);
            break;
          case aW.ANIMATIONTYPE_COLOR4:
            hF = AF.i.FromArray(WF.values), WF.values[4] && (dF = AF.i.FromArray(WF.values[4])), WF.values[5] && (PF = AF.i.FromArray(WF.values[5])), WF.values[6] && (RF = WF.values[6]);
            break;
          case aW.ANIMATIONTYPE_VECTOR3:
          default:
            hF = CF.r.FromArray(WF.values), WF.values[3] && (dF = CF.r.FromArray(WF.values[3])), WF.values[4] && (PF = CF.r.FromArray(WF.values[4])), WF.values[5] && (RF = WF.values[5])
        }
        const iW = {};
        iW.frame = WF.frame, iW.value = hF, void 0 != dF && (iW.inTangent = dF), void 0 != PF && (iW.outTangent = PF), void 0 != RF && (iW.interpolation = RF), uF.push(iW)
      }
      if (WF.setKeys(uF), FF.Bu)
        for (bW = 0; bW < FF.Bu.length; bW++) hF = FF.Bu[bW], WF.createRange(hF.name, hF.from, hF.to);
      return WF
    }
    async function xW(FF, WF) {
      return await new Promise(((SF, CF) => {
        const AF = new PF.d;
        AF.addEventListener("readystatechange", (() => {
          if (4 == AF.readyState)
            if (200 == AF.status) {
              let WF = JSON.parse(AF.responseText);
              if (WF.animations && (WF = WF.animations), WF.length) {
                const FF = [];
                for (const SF of WF) FF.push(OF(SF));
                SF(FF)
              } else {
                const CF = OF(WF);
                FF && (CF.name = FF), SF(CF)
              }
            } else CF("Unable to load the animation")
        })), AF.open("GET", WF), AF.send()
      }))
    }
    async function ZF(FF) {
      const WF = this?.SnippetUrl ?? aW.SnippetUrl;
      return await new Promise(((SF, CF) => {
        const AF = new PF.d;
        AF.addEventListener("readystatechange", (() => {
          if (4 == AF.readyState)
            if (200 == AF.status) {
              const WF = JSON.parse(JSON.parse(AF.responseText).jsonPayload);
              if (WF.animations) {
                const CF = JSON.parse(WF.animations),
                  AF = [];
                for (const WF of CF.animations) {
                  const SF = OF(WF);
                  SF.snippetId = FF, AF.push(SF)
                }
                SF(AF)
              } else {
                const CF = OF(JSON.parse(WF.animation));
                CF.snippetId = FF, SF(CF)
              }
            } else CF("Unable to load the snippet " + FF)
        })), AF.open("GET", WF + "/" + FF.replace(/#/g, "/")), AF.send()
      }))
    }
    aW._UniqueIdGenerator = 0, aW.AllowMatricesInterpolation = !1, aW.AllowMatrixDecomposeForInterpolation = !0, aW.InheritOriginalValueFromActiveAnimations = !1, aW.SnippetUrl = "https://snippet.babylonjs.com", aW.ANIMATIONTYPE_FLOAT = 0, aW.ANIMATIONTYPE_VECTOR3 = 1, aW.ANIMATIONTYPE_QUATERNION = 2, aW.ANIMATIONTYPE_MATRIX = 3, aW.ANIMATIONTYPE_COLOR3 = 4, aW.ANIMATIONTYPE_COLOR4 = 7, aW.ANIMATIONTYPE_VECTOR2 = 5, aW.ANIMATIONTYPE_SIZE = 6, aW.ANIMATIONLOOPMODE_RELATIVE = 0, aW.ANIMATIONLOOPMODE_CYCLE = 1, aW.ANIMATIONLOOPMODE_CONSTANT = 2, aW.ANIMATIONLOOPMODE_YOYO = 4, aW.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT = 5;
    const oF = ZF;
    let YF = !1;

    function MF() {
      YF || (YF = !0, aW.Parse = OF, aW.ParseFromFileAsync = xW, aW.ParseFromSnippetAsync = ZF, aW.CreateFromSnippetAsync = oF, aW.CreateAnimation = qW, aW.CreateAndStartAnimation = VF, aW.CreateAndStartHierarchyAnimation = NF, aW.CreateMergeAndStartAnimation = DF, aW.MakeAnimationAdditive = kW, aW.TransitionTo = LF, aW.AppendSerializedAnimations = mW, (0, iW.f)("BABYLON.Animation", aW), bW.e._AnimationRangeFactory = (FF, WF, SF) => new hF.c(FF, WF, SF))
    }
  },
  39071: (FF, WF, SF) => {
    SF.d(WF, {
      c: () => CF
    });
    class CF {
      constructor(FF, WF, SF) {
        this.name = FF, this.from = WF, this.to = SF
      }
      clone() {
        return new CF(this.name, this.from, this.to)
      }
    }
  },
  39116: (FF, WF, SF) => {
    SF.d(WF, {
      e: () => CF.c,
      h: () => CF.k
    });
    var CF = SF(38109);
    (0, CF.g)()
  },
  39102: (FF, WF, SF) => {
    SF.d(WF, {
      d: () => CF.i
    });
    var CF = SF(38448);
    (0, CF.e)()
  },
  39079: (FF, WF, SF) => {
    SF.d(WF, {
      d: () => CF.e
    });
    var CF = SF(38434);
    (0, CF.g)()
  },
  39121: (FF, WF, SF) => {
    SF.d(WF, {
      c: () => CF.d
    });
    var CF = SF(38386);
    (0, CF.h)()
  },
  39075: (FF, WF, SF) => {
    SF.d(WF, {
      c: () => CF.f
    });
    var CF = SF(38418);
    (0, CF.b)()
  }
};
Object.freeze(modules);
for (const FF in modules) Object.freeze(modules[FF]);