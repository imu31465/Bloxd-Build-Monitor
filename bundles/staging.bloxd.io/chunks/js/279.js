export const id = 279;
export const ids = [279];
export const modules = {
  41487: (GG, bG, ZG) => {
    ZG.d(bG, {
      d: () => zG,
      f: () => cG,
      j: () => dG,
      l: () => JG,
      o: () => fG,
      r: () => hG,
      s: () => KG,
      u: () => QG
    });
    var wG = ZG(37439),
      SG = ZG(37621),
      LG = ZG(37471),
      yG = ZG(41493),
      kG = ZG(40599),
      UG = ZG(40407),
      YG = ZG(40432),
      VG = ZG(40416),
      pG = ZG(37484);
    const fG = Object.freeze(new wG.g(0, 0, 0, 0)),
      QG = Object.freeze(wG.p.Zero()),
      KG = Object.freeze(wG.m.Zero()),
      hG = Object.freeze(UG.c.Zero()),
      dG = Object.freeze(SG.c.Black()),
      JG = Object.freeze(new SG.d(0, 0, 0, 0)),
      rG = {
        key: 0,
        repeatCount: 0,
        Dw: 2
      };
    class zG {
      static _PrepareAnimation(GG, bG, ZG, LG, yG, kG, YG, VG) {
        let pG;
        if (!isNaN(parseFloat(yG)) && isFinite(yG) ? pG = zG.ANIMATIONTYPE_FLOAT : yG instanceof wG.g ? pG = zG.ANIMATIONTYPE_QUATERNION : yG instanceof wG.p ? pG = zG.ANIMATIONTYPE_VECTOR3 : yG instanceof wG.m ? pG = zG.ANIMATIONTYPE_VECTOR2 : yG instanceof SG.c ? pG = zG.ANIMATIONTYPE_COLOR3 : yG instanceof SG.d ? pG = zG.ANIMATIONTYPE_COLOR4 : yG instanceof UG.c && (pG = zG.ANIMATIONTYPE_SIZE), void 0 == pG) return null;
        const fG = new zG(GG, bG, ZG, pG, YG),
          QG = [{
            frame: 0,
            value: yG
          }, {
            frame: LG,
            value: kG
          }];
        return fG.setKeys(QG), void 0 !== VG && fG.setEasingFunction(VG), fG
      }
      get runtimeAnimations() {
        return this._runtimeAnimations
      }
      get hasRunningRuntimeAnimations() {
        for (const GG of this._runtimeAnimations)
          if (!GG.isStopped()) return !0;
        return !1
      }
      constructor(GG, bG, ZG, wG, SG, LG) {
        this.name = GG, this.targetProperty = bG, this.framePerSecond = ZG, this.dataType = wG, this.Dw = SG, this.enableBlending = LG, this._easingFunction = null, this._runtimeAnimations = new Array, this._events = new Array, this.blendingSpeed = .01, this._ranges = {}, this._coreAnimation = null, this.targetPropertyPath = bG.split("."), this.dataType = wG, this.Dw = void 0 === SG ? zG.ANIMATIONLOOPMODE_CYCLE : SG, this.uniqueId = zG._UniqueIdGenerator++
      }
      toString(GG) {
        let bG = "Name: " + this.name + ", property: " + this.targetProperty;
        if (bG += ", datatype: " + ["Float", "mK", "Quaternion", "Matrix", "Color3", "Vector2"][this.dataType], bG += ", nKeys: " + (this._keys ? this._keys.length : "none"), bG += ", nRanges: " + (this._ranges ? Object.keys(this._ranges).length : "none"), GG) {
          bG += ", Ranges: {";
          let GG = !0;
          for (const ZG in this._ranges) GG || (bG += ", "), GG = !1, bG += ZG;
          bG += "}"
        }
        return bG
      }
      addEvent(GG) {
        this._events.push(GG), this._events.sort(((GG, bG) => GG.frame - bG.frame))
      }
      removeEvents(GG) {
        for (let bG = 0; bG < this._events.length; bG++) this._events[bG].frame === GG && (this._events.splice(bG, 1), bG--)
      }
      getEvents() {
        return this._events
      }
      createRange(GG, bG, ZG) {
        this._ranges[GG] || (this._ranges[GG] = new yG.c(GG, bG, ZG))
      }
      deleteRange(GG) {
        let bG = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const ZG = this._ranges[GG];
        if (ZG) {
          if (bG) {
            const GG = ZG.from,
              bG = ZG.to;
            for (let ZG = this._keys.length - 1; ZG >= 0; ZG--) this._keys[ZG].frame >= GG && this._keys[ZG].frame <= bG && this._keys.splice(ZG, 1)
          }
          this._ranges[GG] = null
        }
      }
      getRange(GG) {
        return this._ranges[GG]
      }
      getKeys() {
        return this._keys
      }
      getHighestFrame() {
        let GG = 0;
        for (let bG = 0, ZG = this._keys.length; bG < ZG; bG++) GG < this._keys[bG].frame && (GG = this._keys[bG].frame);
        return GG
      }
      getEasingFunction() {
        return this._easingFunction
      }
      setEasingFunction(GG) {
        this._easingFunction = GG
      }
      floatInterpolateFunction(GG, bG, ZG) {
        return (0, LG.Lerp)(GG, bG, ZG)
      }
      floatInterpolateFunctionWithTangents(GG, bG, ZG, wG, SG) {
        return (0, LG.Hermite)(GG, bG, ZG, wG, SG)
      }
      quaternionInterpolateFunction(GG, bG, ZG) {
        return wG.g.Slerp(GG, bG, ZG)
      }
      quaternionInterpolateFunctionWithTangents(GG, bG, ZG, SG, LG) {
        return wG.g.Hermite(GG, bG, ZG, SG, LG).normalize()
      }
      vector3InterpolateFunction(GG, bG, ZG) {
        return wG.p.Lerp(GG, bG, ZG)
      }
      vector3InterpolateFunctionWithTangents(GG, bG, ZG, SG, LG) {
        return wG.p.Hermite(GG, bG, ZG, SG, LG)
      }
      vector2InterpolateFunction(GG, bG, ZG) {
        return wG.m.Lerp(GG, bG, ZG)
      }
      vector2InterpolateFunctionWithTangents(GG, bG, ZG, SG, LG) {
        return wG.m.Hermite(GG, bG, ZG, SG, LG)
      }
      sizeInterpolateFunction(GG, bG, ZG) {
        return UG.c.Lerp(GG, bG, ZG)
      }
      color3InterpolateFunction(GG, bG, ZG) {
        return SG.c.Lerp(GG, bG, ZG)
      }
      color3InterpolateFunctionWithTangents(GG, bG, ZG, wG, LG) {
        return SG.c.Hermite(GG, bG, ZG, wG, LG)
      }
      color4InterpolateFunction(GG, bG, ZG) {
        return SG.d.Lerp(GG, bG, ZG)
      }
      color4InterpolateFunctionWithTangents(GG, bG, ZG, wG, LG) {
        return SG.d.Hermite(GG, bG, ZG, wG, LG)
      }
      _getKeyValue(GG) {
        return "function" === typeof GG ? GG() : GG
      }
      evaluate(GG) {
        return rG.key = 0, this._interpolate(GG, rG)
      }
      _interpolate(GG, bG) {
        let ZG = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (bG.Dw === zG.ANIMATIONLOOPMODE_CONSTANT && bG.repeatCount > 0) return bG.highLimitValue.clone ? bG.highLimitValue.clone() : bG.highLimitValue;
        const wG = this._keys;
        let SG;
        if (this._coreAnimation) SG = this._coreAnimation._key;
        else {
          const LG = wG.length;
          for (SG = bG.key; SG >= 0 && GG < wG[SG].frame;) --SG;
          for (; SG + 1 <= LG - 1 && GG >= wG[SG + 1].frame;) ++SG;
          if (bG.key = SG, SG < 0) return ZG ? void 0 : this._getKeyValue(wG[0].value);
          if (SG + 1 > LG - 1) return ZG ? void 0 : this._getKeyValue(wG[LG - 1].value);
          this._key = SG
        }
        const LG = wG[SG],
          yG = wG[SG + 1];
        if (ZG && (GG === LG.frame || GG === yG.frame)) return;
        const kG = this._getKeyValue(LG.value),
          UG = this._getKeyValue(yG.value);
        if (1 === LG.interpolation) return yG.frame > GG ? kG : UG;
        const YG = void 0 !== LG.outTangent && void 0 !== yG.inTangent,
          VG = yG.frame - LG.frame;
        let pG = (GG - LG.frame) / VG;
        const rG = LG.easingFunction || this.getEasingFunction();
        switch (rG && (pG = rG.ease(pG)), this.dataType) {
          case zG.ANIMATIONTYPE_FLOAT: {
            const GG = YG ? this.floatInterpolateFunctionWithTangents(kG, LG.outTangent * VG, UG, yG.inTangent * VG, pG) : this.floatInterpolateFunction(kG, UG, pG);
            switch (bG.Dw) {
              case zG.ANIMATIONLOOPMODE_CYCLE:
              case zG.ANIMATIONLOOPMODE_CONSTANT:
              case zG.ANIMATIONLOOPMODE_YOYO:
                return GG;
              case zG.ANIMATIONLOOPMODE_RELATIVE:
              case zG.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return (bG.offsetValue ?? 0) * bG.repeatCount + GG
            }
            break
          }
          case zG.ANIMATIONTYPE_QUATERNION: {
            const GG = YG ? this.quaternionInterpolateFunctionWithTangents(kG, LG.outTangent.scale(VG), UG, yG.inTangent.scale(VG), pG) : this.quaternionInterpolateFunction(kG, UG, pG);
            switch (bG.Dw) {
              case zG.ANIMATIONLOOPMODE_CYCLE:
              case zG.ANIMATIONLOOPMODE_CONSTANT:
              case zG.ANIMATIONLOOPMODE_YOYO:
                return GG;
              case zG.ANIMATIONLOOPMODE_RELATIVE:
              case zG.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return GG.addInPlace((bG.offsetValue || fG).scale(bG.repeatCount))
            }
            return GG
          }
          case zG.ANIMATIONTYPE_VECTOR3: {
            const GG = YG ? this.vector3InterpolateFunctionWithTangents(kG, LG.outTangent.scale(VG), UG, yG.inTangent.scale(VG), pG) : this.vector3InterpolateFunction(kG, UG, pG);
            switch (bG.Dw) {
              case zG.ANIMATIONLOOPMODE_CYCLE:
              case zG.ANIMATIONLOOPMODE_CONSTANT:
              case zG.ANIMATIONLOOPMODE_YOYO:
                return GG;
              case zG.ANIMATIONLOOPMODE_RELATIVE:
              case zG.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return GG.add((bG.offsetValue || QG).scale(bG.repeatCount))
            }
            break
          }
          case zG.ANIMATIONTYPE_VECTOR2: {
            const GG = YG ? this.vector2InterpolateFunctionWithTangents(kG, LG.outTangent.scale(VG), UG, yG.inTangent.scale(VG), pG) : this.vector2InterpolateFunction(kG, UG, pG);
            switch (bG.Dw) {
              case zG.ANIMATIONLOOPMODE_CYCLE:
              case zG.ANIMATIONLOOPMODE_CONSTANT:
              case zG.ANIMATIONLOOPMODE_YOYO:
                return GG;
              case zG.ANIMATIONLOOPMODE_RELATIVE:
              case zG.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return GG.add((bG.offsetValue || KG).scale(bG.repeatCount))
            }
            break
          }
          case zG.ANIMATIONTYPE_SIZE:
            switch (bG.Dw) {
              case zG.ANIMATIONLOOPMODE_CYCLE:
              case zG.ANIMATIONLOOPMODE_CONSTANT:
              case zG.ANIMATIONLOOPMODE_YOYO:
                return this.sizeInterpolateFunction(kG, UG, pG);
              case zG.ANIMATIONLOOPMODE_RELATIVE:
              case zG.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return this.sizeInterpolateFunction(kG, UG, pG).add((bG.offsetValue || hG).scale(bG.repeatCount))
            }
            break;
          case zG.ANIMATIONTYPE_COLOR3: {
            const GG = YG ? this.color3InterpolateFunctionWithTangents(kG, LG.outTangent.scale(VG), UG, yG.inTangent.scale(VG), pG) : this.color3InterpolateFunction(kG, UG, pG);
            switch (bG.Dw) {
              case zG.ANIMATIONLOOPMODE_CYCLE:
              case zG.ANIMATIONLOOPMODE_CONSTANT:
              case zG.ANIMATIONLOOPMODE_YOYO:
                return GG;
              case zG.ANIMATIONLOOPMODE_RELATIVE:
              case zG.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return GG.add((bG.offsetValue || dG).scale(bG.repeatCount))
            }
            break
          }
          case zG.ANIMATIONTYPE_COLOR4: {
            const GG = YG ? this.color4InterpolateFunctionWithTangents(kG, LG.outTangent.scale(VG), UG, yG.inTangent.scale(VG), pG) : this.color4InterpolateFunction(kG, UG, pG);
            switch (bG.Dw) {
              case zG.ANIMATIONLOOPMODE_CYCLE:
              case zG.ANIMATIONLOOPMODE_CONSTANT:
              case zG.ANIMATIONLOOPMODE_YOYO:
                return GG;
              case zG.ANIMATIONLOOPMODE_RELATIVE:
              case zG.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return GG.add((bG.offsetValue || JG).scale(bG.repeatCount))
            }
            break
          }
          case zG.ANIMATIONTYPE_MATRIX:
            switch (bG.Dw) {
              case zG.ANIMATIONLOOPMODE_CYCLE:
              case zG.ANIMATIONLOOPMODE_CONSTANT:
              case zG.ANIMATIONLOOPMODE_YOYO:
                return zG.AllowMatricesInterpolation ? this.matrixInterpolateFunction(kG, UG, pG, bG.workValue) : kG;
              case zG.ANIMATIONLOOPMODE_RELATIVE:
              case zG.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return kG
            }
        }
        return 0
      }
      matrixInterpolateFunction(GG, bG, ZG, SG) {
        return zG.AllowMatrixDecomposeForInterpolation ? SG ? (wG.e.DecomposeLerpToRef(GG, bG, ZG, SG), SG) : wG.e.DecomposeLerp(GG, bG, ZG) : SG ? (wG.e.LerpToRef(GG, bG, ZG, SG), SG) : wG.e.Lerp(GG, bG, ZG)
      }
      clone() {
        let GG = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const bG = new zG(this.name, this.targetPropertyPath.join("."), this.framePerSecond, this.dataType, this.Dw);
        if (bG.enableBlending = this.enableBlending, bG.blendingSpeed = this.blendingSpeed, this._keys && bG.setKeys(this._keys, !1, GG), this._ranges) {
          bG._ranges = {};
          for (const GG in this._ranges) {
            const ZG = this._ranges[GG];
            ZG && (bG._ranges[GG] = ZG.clone())
          }
        }
        return bG
      }
      setKeys(GG) {
        let bG = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) this._keys = GG;
        else if (this._keys = GG.slice(0), bG)
          for (let ZG = 0; ZG < this._keys.length; ZG++) {
            const GG = this._keys[ZG];
            this._keys[ZG] = {
              frame: GG.frame,
              value: GG.value.clone ? GG.value.clone() : GG.value,
              inTangent: GG.inTangent && GG.inTangent.clone ? GG.inTangent.clone() : GG.inTangent,
              outTangent: GG.outTangent && GG.outTangent.clone ? GG.outTangent.clone() : GG.outTangent,
              interpolation: GG.interpolation,
              lockedTangent: GG.lockedTangent,
              easingFunction: GG.easingFunction
            }
          }
      }
      createKeyForFrame(GG) {
        rG.key = 0;
        const bG = this._interpolate(GG, rG, !0);
        if (!bG) return this._keys[rG.key].frame === GG ? rG.key : rG.key + 1;
        const ZG = {
          frame: GG,
          value: bG.clone ? bG.clone() : bG
        };
        return this._keys.splice(rG.key + 1, 0, ZG), rG.key + 1
      }
      serialize() {
        const GG = {};
        GG.name = this.name, GG.property = this.targetProperty, GG.framePerSecond = this.framePerSecond, GG.dataType = this.dataType, GG.loopBehavior = this.Dw, GG.enableBlending = this.enableBlending, GG.blendingSpeed = this.blendingSpeed;
        const bG = this.dataType;
        GG.keys = [];
        const ZG = this.getKeys();
        for (let wG = 0; wG < ZG.length; wG++) {
          const SG = ZG[wG],
            LG = {};
          switch (LG.frame = SG.frame, bG) {
            case zG.ANIMATIONTYPE_FLOAT:
              LG.values = [SG.value], void 0 !== SG.inTangent && LG.values.push(SG.inTangent), void 0 !== SG.outTangent && (void 0 === SG.inTangent && LG.values.push(void 0), LG.values.push(SG.outTangent)), void 0 !== SG.interpolation && (void 0 === SG.inTangent && LG.values.push(void 0), void 0 === SG.outTangent && LG.values.push(void 0), LG.values.push(SG.interpolation));
              break;
            case zG.ANIMATIONTYPE_QUATERNION:
            case zG.ANIMATIONTYPE_MATRIX:
            case zG.ANIMATIONTYPE_VECTOR3:
            case zG.ANIMATIONTYPE_COLOR3:
            case zG.ANIMATIONTYPE_COLOR4:
              LG.values = SG.value.mwG(), void 0 != SG.inTangent && LG.values.push(SG.inTangent.mwG()), void 0 != SG.outTangent && (void 0 === SG.inTangent && LG.values.push(void 0), LG.values.push(SG.outTangent.mwG())), void 0 !== SG.interpolation && (void 0 === SG.inTangent && LG.values.push(void 0), void 0 === SG.outTangent && LG.values.push(void 0), LG.values.push(SG.interpolation))
          }
          GG.keys.push(LG)
        }
        GG.Bh = [];
        for (const wG in this._ranges) {
          const bG = this._ranges[wG];
          if (!bG) continue;
          const ZG = {};
          ZG.name = wG, ZG.from = bG.from, ZG.to = bG.to, GG.Bh.push(ZG)
        }
        return GG
      }
      static _UniversalLerp(GG, bG, ZG) {
        const wG = GG.constructor;
        return wG.Lerp ? wG.Lerp(GG, bG, ZG) : wG.Slerp ? wG.Slerp(GG, bG, ZG) : GG.toFixed ? GG * (1 - ZG) + ZG * bG : bG
      }
    }

    function EG(GG, bG, ZG) {
      let SG;
      SG = "object" === typeof bG ? bG : {
        referenceFrame: bG ?? 0,
        range: ZG,
        cloneOriginalAnimation: arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        clonedAnimationName: arguments.length > 4 ? arguments[4] : void 0
      };
      let LG = GG;
      SG.cloneOriginalAnimation && (LG = GG.clone(), LG.name = SG.clonedAnimationName || LG.name);
      const yG = LG.getKeys();
      if (!yG.length) return LG;
      const kG = SG.referenceFrame && SG.referenceFrame >= 0 ? SG.referenceFrame : 0;
      let UG = 0;
      const YG = yG[0];
      let VG = yG.length - 1;
      const pG = yG[VG],
        fG = {
          referenceValue: YG.value,
          referencePosition: wG.j.mK[0],
          referenceQuaternion: wG.j.Quaternion[0],
          referenceScaling: wG.j.mK[1],
          keyPosition: wG.j.mK[2],
          keyQuaternion: wG.j.Quaternion[1],
          keyScaling: wG.j.mK[3]
        };
      let QG = YG.frame,
        KG = pG.frame;
      if (SG.range) {
        const GG = LG.getRange(SG.range);
        GG && (QG = GG.from, KG = GG.to)
      } else QG = SG.fromFrame ?? QG, KG = SG.toFrame ?? KG;
      QG !== YG.frame && (UG = LG.createKeyForFrame(QG)), KG !== pG.frame && (VG = LG.createKeyForFrame(KG));
      const hG = LG.getKeys();
      if (1 === hG.length) {
        const GG = LG._getKeyValue(hG[0].value);
        fG.referenceValue = GG.clone ? GG.clone() : GG
      } else if (kG <= YG.frame) {
        const GG = LG._getKeyValue(YG.value);
        fG.referenceValue = GG.clone ? GG.clone() : GG
      } else if (kG >= pG.frame) {
        const GG = LG._getKeyValue(pG.value);
        fG.referenceValue = GG.clone ? GG.clone() : GG
      } else {
        rG.key = 0;
        const GG = LG._interpolate(kG, rG);
        fG.referenceValue = GG.clone ? GG.clone() : GG
      }
      LG.dataType === zG.ANIMATIONTYPE_QUATERNION ? fG.referenceValue.normalize().conjugateInPlace() : LG.dataType === zG.ANIMATIONTYPE_MATRIX && (fG.referenceValue.decompose(fG.referenceScaling, fG.referenceQuaternion, fG.referencePosition), fG.referenceQuaternion.normalize().conjugateInPlace());
      let dG = Number.MAX_VALUE;
      const JG = SG.clipKeys ? [] : null;
      for (let rG = UG; rG <= VG; rG++) {
        let GG = hG[rG];
        if ((JG || SG.cloneOriginalAnimation) && (GG = {
            frame: GG.frame,
            value: GG.value.clone ? GG.value.clone() : GG.value,
            inTangent: GG.inTangent,
            outTangent: GG.outTangent,
            interpolation: GG.interpolation,
            lockedTangent: GG.lockedTangent,
            easingFunction: GG.easingFunction
          }, JG && (dG === Number.MAX_VALUE && (dG = GG.frame), GG.frame -= dG, JG.push(GG))), !rG || LG.dataType === zG.ANIMATIONTYPE_FLOAT || GG.value !== YG.value) switch (LG.dataType) {
          case zG.ANIMATIONTYPE_MATRIX:
            GG.value.decompose(fG.keyScaling, fG.keyQuaternion, fG.keyPosition), fG.keyPosition.twG(fG.referencePosition), fG.keyScaling.divideInPlace(fG.referenceScaling), fG.referenceQuaternion.multiplyToRef(fG.keyQuaternion, fG.keyQuaternion), wG.e.ComposeToRef(fG.keyScaling, fG.keyQuaternion, fG.keyPosition, GG.value);
            break;
          case zG.ANIMATIONTYPE_QUATERNION:
            fG.referenceValue.multiplyToRef(GG.value, GG.value);
            break;
          case zG.ANIMATIONTYPE_VECTOR2:
          case zG.ANIMATIONTYPE_VECTOR3:
          case zG.ANIMATIONTYPE_COLOR3:
          case zG.ANIMATIONTYPE_COLOR4:
            GG.value.subtractToRef(fG.referenceValue, GG.value);
            break;
          case zG.ANIMATIONTYPE_SIZE:
            GG.value.width -= fG.referenceValue.width, GG.value.height -= fG.referenceValue.height;
            break;
          default:
            GG.value -= fG.referenceValue
        }
      }
      return JG && LG.setKeys(JG, !0), LG
    }

    function oG(GG, bG, ZG, wG) {
      const SG = new zG(GG + "Animation", GG, ZG, bG, zG.ANIMATIONLOOPMODE_CONSTANT);
      return SG.setEasingFunction(wG), SG
    }

    function XG(GG, bG, ZG, wG, SG, LG, yG, kG, UG, YG, VG) {
      const pG = zG._PrepareAnimation(GG, ZG, wG, SG, LG, yG, kG, UG);
      return pG ? (bG.Dv && (VG = bG.Dv()), VG ? VG.beginDirectAnimation(bG, [pG], 0, SG, pG.Dw !== zG.ANIMATIONLOOPMODE_CONSTANT, 1, YG) : null) : null
    }

    function uG(GG, bG, ZG, wG, SG, LG, yG, kG, UG, YG, VG) {
      const pG = zG._PrepareAnimation(GG, wG, SG, LG, yG, kG, UG, YG);
      if (!pG) return null;
      return bG.Dv().beginDirectHierarchyAnimation(bG, ZG, [pG], 0, LG, 1 === pG.Dw, 1, VG)
    }

    function iG(GG, bG, ZG, wG, SG, LG, yG, kG, UG, YG) {
      const VG = zG._PrepareAnimation(GG, ZG, wG, SG, LG, yG, kG, UG);
      return VG ? (bG.animations.push(VG), bG.Dv().beginAnimation(bG, 0, SG, 1 === VG.Dw, 1, YG)) : null
    }

    function CG(GG, bG, ZG, wG, SG, LG, yG) {
      let kG = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
        UG = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8],
        YG = arguments.length > 9 ? arguments[9] : void 0;
      if (yG <= 0) return ZG[GG] = bG, kG && kG(), null;
      const VG = SG * (yG / 1e3);
      LG.setKeys(YG ?? [{
        frame: 0,
        value: ZG[GG].clone ? ZG[GG].clone() : ZG[GG]
      }, {
        frame: VG,
        value: bG
      }]), ZG.animations || (ZG.animations = []), ZG.animations.push(LG);
      return wG.beginAnimation(ZG, 0, VG, !1, 1, kG ?? void 0, void 0, UG)
    }

    function WG(GG, bG) {
      VG.b.AppendSerializedAnimations(GG, bG)
    }

    function mG(GG) {
      const bG = new zG(GG.name, GG.property, GG.framePerSecond, GG.dataType, GG.loopBehavior),
        ZG = GG.dataType,
        LG = [];
      let yG, kG;
      for (GG.enableBlending && (bG.enableBlending = GG.enableBlending), GG.blendingSpeed && (bG.blendingSpeed = GG.blendingSpeed), kG = 0; kG < GG.keys.length; kG++) {
        const bG = GG.keys[kG];
        let UG, YG, VG;
        switch (ZG) {
          case zG.ANIMATIONTYPE_FLOAT:
            yG = bG.values[0], bG.values.length >= 2 && (UG = bG.values[1]), bG.values.length >= 3 && (YG = bG.values[2]), bG.values.length >= 4 && (VG = bG.values[3]);
            break;
          case zG.ANIMATIONTYPE_QUATERNION:
            if (yG = wG.g.FromArray(bG.values), bG.values.length >= 8) {
              const GG = wG.g.FromArray(bG.values.slice(4, 8));
              GG.equals(wG.g.Zero()) || (UG = GG)
            }
            if (bG.values.length >= 12) {
              const GG = wG.g.FromArray(bG.values.slice(8, 12));
              GG.equals(wG.g.Zero()) || (YG = GG)
            }
            bG.values.length >= 13 && (VG = bG.values[12]);
            break;
          case zG.ANIMATIONTYPE_MATRIX:
            yG = wG.e.FromArray(bG.values), bG.values.length >= 17 && (VG = bG.values[16]);
            break;
          case zG.ANIMATIONTYPE_COLOR3:
            yG = SG.c.FromArray(bG.values), bG.values[3] && (UG = SG.c.FromArray(bG.values[3])), bG.values[4] && (YG = SG.c.FromArray(bG.values[4])), bG.values[5] && (VG = bG.values[5]);
            break;
          case zG.ANIMATIONTYPE_COLOR4:
            yG = SG.d.FromArray(bG.values), bG.values[4] && (UG = SG.d.FromArray(bG.values[4])), bG.values[5] && (YG = SG.d.FromArray(bG.values[5])), bG.values[6] && (VG = bG.values[6]);
            break;
          case zG.ANIMATIONTYPE_VECTOR3:
          default:
            yG = wG.p.FromArray(bG.values), bG.values[3] && (UG = wG.p.FromArray(bG.values[3])), bG.values[4] && (YG = wG.p.FromArray(bG.values[4])), bG.values[5] && (VG = bG.values[5])
        }
        const pG = {};
        pG.frame = bG.frame, pG.value = yG, void 0 != UG && (pG.inTangent = UG), void 0 != YG && (pG.outTangent = YG), void 0 != VG && (pG.interpolation = VG), LG.push(pG)
      }
      if (bG.setKeys(LG), GG.Bh)
        for (kG = 0; kG < GG.Bh.length; kG++) yG = GG.Bh[kG], bG.createRange(yG.name, yG.from, yG.to);
      return bG
    }
    async function IG(GG, bG) {
      return await new Promise(((ZG, wG) => {
        const SG = new YG.b;
        SG.addEventListener("readystatechange", (() => {
          if (4 == SG.readyState)
            if (200 == SG.status) {
              let bG = JSON.parse(SG.responseText);
              if (bG.animations && (bG = bG.animations), bG.length) {
                const GG = [];
                for (const ZG of bG) GG.push(mG(ZG));
                ZG(GG)
              } else {
                const wG = mG(bG);
                GG && (wG.name = GG), ZG(wG)
              }
            } else wG("Unable to load the animation")
        })), SG.open("GET", bG), SG.send()
      }))
    }
    async function FG(GG) {
      const bG = this?.SnippetUrl ?? zG.SnippetUrl;
      return await new Promise(((ZG, wG) => {
        const SG = new YG.b;
        SG.addEventListener("readystatechange", (() => {
          if (4 == SG.readyState)
            if (200 == SG.status) {
              const bG = JSON.parse(JSON.parse(SG.responseText).jsonPayload);
              if (bG.animations) {
                const wG = JSON.parse(bG.animations),
                  SG = [];
                for (const bG of wG.animations) {
                  const ZG = mG(bG);
                  ZG.snippetId = GG, SG.push(ZG)
                }
                ZG(SG)
              } else {
                const wG = mG(JSON.parse(bG.animation));
                wG.snippetId = GG, ZG(wG)
              }
            } else wG("Unable to load the snippet " + GG)
        })), SG.open("GET", bG + "/" + GG.replace(/#/g, "/")), SG.send()
      }))
    }
    zG._UniqueIdGenerator = 0, zG.AllowMatricesInterpolation = !1, zG.AllowMatrixDecomposeForInterpolation = !0, zG.InheritOriginalValueFromActiveAnimations = !1, zG.SnippetUrl = "https://snippet.babylonjs.com", zG.ANIMATIONTYPE_FLOAT = 0, zG.ANIMATIONTYPE_VECTOR3 = 1, zG.ANIMATIONTYPE_QUATERNION = 2, zG.ANIMATIONTYPE_MATRIX = 3, zG.ANIMATIONTYPE_COLOR3 = 4, zG.ANIMATIONTYPE_COLOR4 = 7, zG.ANIMATIONTYPE_VECTOR2 = 5, zG.ANIMATIONTYPE_SIZE = 6, zG.ANIMATIONLOOPMODE_RELATIVE = 0, zG.ANIMATIONLOOPMODE_CYCLE = 1, zG.ANIMATIONLOOPMODE_CONSTANT = 2, zG.ANIMATIONLOOPMODE_YOYO = 4, zG.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT = 5;
    const vG = FG;
    let aG = !1;

    function cG() {
      aG || (aG = !0, zG.Parse = mG, zG.ParseFromFileAsync = IG, zG.ParseFromSnippetAsync = FG, zG.CreateFromSnippetAsync = vG, zG.CreateAnimation = oG, zG.CreateAndStartAnimation = XG, zG.CreateAndStartHierarchyAnimation = uG, zG.CreateMergeAndStartAnimation = iG, zG.MakeAnimationAdditive = EG, zG.TransitionTo = CG, zG.AppendSerializedAnimations = WG, (0, pG.i)("BABYLON.Animation", zG), kG.e._AnimationRangeFactory = (GG, bG, ZG) => new yG.c(GG, bG, ZG))
    }
  },
  41493: (GG, bG, ZG) => {
    ZG.d(bG, {
      c: () => wG
    });
    class wG {
      constructor(GG, bG, ZG) {
        this.name = GG, this.from = bG, this.to = ZG
      }
      clone() {
        return new wG(this.name, this.from, this.to)
      }
    }
  },
  41552: (GG, bG, ZG) => {
    ZG.d(bG, {
      b: () => wG.c,
      c: () => wG.l
    });
    var wG = ZG(40524);
    (0, wG.g)()
  },
  41527: (GG, bG, ZG) => {
    ZG.d(bG, {
      d: () => wG.d
    });
    var wG = ZG(40857);
    (0, wG.b)()
  },
  41502: (GG, bG, ZG) => {
    ZG.d(bG, {
      e: () => wG.e
    });
    var wG = ZG(40844);
    (0, wG.h)()
  },
  41560: (GG, bG, ZG) => {
    ZG.d(bG, {
      d: () => wG.c
    });
    var wG = ZG(40784);
    (0, wG.g)()
  },
  41498: (GG, bG, ZG) => {
    ZG.d(bG, {
      d: () => wG.d
    });
    var wG = ZG(40820);
    (0, wG.b)()
  }
};
Object.freeze(modules);
for (const GG in modules) Object.freeze(modules[GG]);