export const id = 303;
export const ids = [303];
export const modules = {
  42100: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => WB,
      h: () => FB,
      j: () => ZB,
      m: () => NB,
      q: () => zB,
      u: () => qB,
      v: () => pB,
      y: () => lB
    });
    var YB = GB(37778),
      DB = GB(37894),
      QB = GB(37807),
      oB = GB(42107),
      jB = GB(41220),
      yB = GB(41015),
      JB = GB(41041),
      MB = GB(41022),
      PB = GB(37823);
    const zB = Object.freeze(new YB.f(0, 0, 0, 0)),
      lB = Object.freeze(YB.r.Zero()),
      pB = Object.freeze(YB.o.Zero()),
      qB = Object.freeze(yB.b.Zero()),
      ZB = Object.freeze(DB.c.Black()),
      NB = Object.freeze(new DB.g(0, 0, 0, 0)),
      RB = {
        key: 0,
        repeatCount: 0,
        WG: 2
      };
    class WB {
      static _PrepareAnimation(BB, OB, GB, QB, oB, jB, JB, MB) {
        let PB;
        if (!isNaN(parseFloat(oB)) && isFinite(oB) ? PB = WB.ANIMATIONTYPE_FLOAT : oB instanceof YB.f ? PB = WB.ANIMATIONTYPE_QUATERNION : oB instanceof YB.r ? PB = WB.ANIMATIONTYPE_VECTOR3 : oB instanceof YB.o ? PB = WB.ANIMATIONTYPE_VECTOR2 : oB instanceof DB.c ? PB = WB.ANIMATIONTYPE_COLOR3 : oB instanceof DB.g ? PB = WB.ANIMATIONTYPE_COLOR4 : oB instanceof yB.b && (PB = WB.ANIMATIONTYPE_SIZE), void 0 == PB) return null;
        const zB = new WB(BB, OB, GB, PB, JB),
          lB = [{
            frame: 0,
            value: oB
          }, {
            frame: QB,
            value: jB
          }];
        return zB.setKeys(lB), void 0 !== MB && zB.setEasingFunction(MB), zB
      }
      get runtimeAnimations() {
        return this._runtimeAnimations
      }
      get hasRunningRuntimeAnimations() {
        for (const BB of this._runtimeAnimations)
          if (!BB.isStopped()) return !0;
        return !1
      }
      constructor(BB, OB, GB, YB, DB, QB) {
        this.name = BB, this.targetProperty = OB, this.framePerSecond = GB, this.dataType = YB, this.WG = DB, this.enableBlending = QB, this._easingFunction = null, this._runtimeAnimations = new Array, this._events = new Array, this.blendingSpeed = .01, this._ranges = {}, this._coreAnimation = null, this.targetPropertyPath = OB.split("."), this.dataType = YB, this.WG = void 0 === DB ? WB.ANIMATIONLOOPMODE_CYCLE : DB, this.uniqueId = WB._UniqueIdGenerator++
      }
      toString(BB) {
        let OB = "Name: " + this.name + ", property: " + this.targetProperty;
        if (OB += ", datatype: " + ["Float", "Xp", "Quaternion", "Matrix", "Color3", "Vector2"][this.dataType], OB += ", nKeys: " + (this._keys ? this._keys.length : "none"), OB += ", nRanges: " + (this._ranges ? Object.keys(this._ranges).length : "none"), BB) {
          OB += ", Ranges: {";
          let BB = !0;
          for (const GB in this._ranges) BB || (OB += ", "), BB = !1, OB += GB;
          OB += "}"
        }
        return OB
      }
      addEvent(BB) {
        this._events.push(BB), this._events.sort(((BB, OB) => BB.frame - OB.frame))
      }
      removeEvents(BB) {
        for (let OB = 0; OB < this._events.length; OB++) this._events[OB].frame === BB && (this._events.splice(OB, 1), OB--)
      }
      getEvents() {
        return this._events
      }
      createRange(BB, OB, GB) {
        this._ranges[BB] || (this._ranges[BB] = new oB.e(BB, OB, GB))
      }
      deleteRange(BB) {
        let OB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const GB = this._ranges[BB];
        if (GB) {
          if (OB) {
            const BB = GB.from,
              OB = GB.to;
            for (let GB = this._keys.length - 1; GB >= 0; GB--) this._keys[GB].frame >= BB && this._keys[GB].frame <= OB && this._keys.splice(GB, 1)
          }
          this._ranges[BB] = null
        }
      }
      getRange(BB) {
        return this._ranges[BB]
      }
      getKeys() {
        return this._keys
      }
      getHighestFrame() {
        let BB = 0;
        for (let OB = 0, GB = this._keys.length; OB < GB; OB++) BB < this._keys[OB].frame && (BB = this._keys[OB].frame);
        return BB
      }
      getEasingFunction() {
        return this._easingFunction
      }
      setEasingFunction(BB) {
        this._easingFunction = BB
      }
      floatInterpolateFunction(BB, OB, GB) {
        return (0, QB.Lerp)(BB, OB, GB)
      }
      floatInterpolateFunctionWithTangents(BB, OB, GB, YB, DB) {
        return (0, QB.Hermite)(BB, OB, GB, YB, DB)
      }
      quaternionInterpolateFunction(BB, OB, GB) {
        return YB.f.Slerp(BB, OB, GB)
      }
      quaternionInterpolateFunctionWithTangents(BB, OB, GB, DB, QB) {
        return YB.f.Hermite(BB, OB, GB, DB, QB).normalize()
      }
      vector3InterpolateFunction(BB, OB, GB) {
        return YB.r.Lerp(BB, OB, GB)
      }
      vector3InterpolateFunctionWithTangents(BB, OB, GB, DB, QB) {
        return YB.r.Hermite(BB, OB, GB, DB, QB)
      }
      vector2InterpolateFunction(BB, OB, GB) {
        return YB.o.Lerp(BB, OB, GB)
      }
      vector2InterpolateFunctionWithTangents(BB, OB, GB, DB, QB) {
        return YB.o.Hermite(BB, OB, GB, DB, QB)
      }
      sizeInterpolateFunction(BB, OB, GB) {
        return yB.b.Lerp(BB, OB, GB)
      }
      color3InterpolateFunction(BB, OB, GB) {
        return DB.c.Lerp(BB, OB, GB)
      }
      color3InterpolateFunctionWithTangents(BB, OB, GB, YB, QB) {
        return DB.c.Hermite(BB, OB, GB, YB, QB)
      }
      color4InterpolateFunction(BB, OB, GB) {
        return DB.g.Lerp(BB, OB, GB)
      }
      color4InterpolateFunctionWithTangents(BB, OB, GB, YB, QB) {
        return DB.g.Hermite(BB, OB, GB, YB, QB)
      }
      _getKeyValue(BB) {
        return "function" === typeof BB ? BB() : BB
      }
      evaluate(BB) {
        return RB.key = 0, this._interpolate(BB, RB)
      }
      _interpolate(BB, OB) {
        let GB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (OB.WG === WB.ANIMATIONLOOPMODE_CONSTANT && OB.repeatCount > 0) return OB.highLimitValue.clone ? OB.highLimitValue.clone() : OB.highLimitValue;
        const YB = this._keys;
        let DB;
        if (this._coreAnimation) DB = this._coreAnimation._key;
        else {
          const QB = YB.length;
          for (DB = OB.key; DB >= 0 && BB < YB[DB].frame;) --DB;
          for (; DB + 1 <= QB - 1 && BB >= YB[DB + 1].frame;) ++DB;
          if (OB.key = DB, DB < 0) return GB ? void 0 : this._getKeyValue(YB[0].value);
          if (DB + 1 > QB - 1) return GB ? void 0 : this._getKeyValue(YB[QB - 1].value);
          this._key = DB
        }
        const QB = YB[DB],
          oB = YB[DB + 1];
        if (GB && (BB === QB.frame || BB === oB.frame)) return;
        const jB = this._getKeyValue(QB.value),
          yB = this._getKeyValue(oB.value);
        if (1 === QB.interpolation) return oB.frame > BB ? jB : yB;
        const JB = void 0 !== QB.outTangent && void 0 !== oB.inTangent,
          MB = oB.frame - QB.frame;
        let PB = (BB - QB.frame) / MB;
        const RB = QB.easingFunction || this.getEasingFunction();
        switch (RB && (PB = RB.ease(PB)), this.dataType) {
          case WB.ANIMATIONTYPE_FLOAT: {
            const BB = JB ? this.floatInterpolateFunctionWithTangents(jB, QB.outTangent * MB, yB, oB.inTangent * MB, PB) : this.floatInterpolateFunction(jB, yB, PB);
            switch (OB.WG) {
              case WB.ANIMATIONLOOPMODE_CYCLE:
              case WB.ANIMATIONLOOPMODE_CONSTANT:
              case WB.ANIMATIONLOOPMODE_YOYO:
                return BB;
              case WB.ANIMATIONLOOPMODE_RELATIVE:
              case WB.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return (OB.offsetValue ?? 0) * OB.repeatCount + BB
            }
            break
          }
          case WB.ANIMATIONTYPE_QUATERNION: {
            const BB = JB ? this.quaternionInterpolateFunctionWithTangents(jB, QB.outTangent.scale(MB), yB, oB.inTangent.scale(MB), PB) : this.quaternionInterpolateFunction(jB, yB, PB);
            switch (OB.WG) {
              case WB.ANIMATIONLOOPMODE_CYCLE:
              case WB.ANIMATIONLOOPMODE_CONSTANT:
              case WB.ANIMATIONLOOPMODE_YOYO:
                return BB;
              case WB.ANIMATIONLOOPMODE_RELATIVE:
              case WB.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return BB.addInPlace((OB.offsetValue || zB).scale(OB.repeatCount))
            }
            return BB
          }
          case WB.ANIMATIONTYPE_VECTOR3: {
            const BB = JB ? this.vector3InterpolateFunctionWithTangents(jB, QB.outTangent.scale(MB), yB, oB.inTangent.scale(MB), PB) : this.vector3InterpolateFunction(jB, yB, PB);
            switch (OB.WG) {
              case WB.ANIMATIONLOOPMODE_CYCLE:
              case WB.ANIMATIONLOOPMODE_CONSTANT:
              case WB.ANIMATIONLOOPMODE_YOYO:
                return BB;
              case WB.ANIMATIONLOOPMODE_RELATIVE:
              case WB.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return BB.add((OB.offsetValue || lB).scale(OB.repeatCount))
            }
            break
          }
          case WB.ANIMATIONTYPE_VECTOR2: {
            const BB = JB ? this.vector2InterpolateFunctionWithTangents(jB, QB.outTangent.scale(MB), yB, oB.inTangent.scale(MB), PB) : this.vector2InterpolateFunction(jB, yB, PB);
            switch (OB.WG) {
              case WB.ANIMATIONLOOPMODE_CYCLE:
              case WB.ANIMATIONLOOPMODE_CONSTANT:
              case WB.ANIMATIONLOOPMODE_YOYO:
                return BB;
              case WB.ANIMATIONLOOPMODE_RELATIVE:
              case WB.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return BB.add((OB.offsetValue || pB).scale(OB.repeatCount))
            }
            break
          }
          case WB.ANIMATIONTYPE_SIZE:
            switch (OB.WG) {
              case WB.ANIMATIONLOOPMODE_CYCLE:
              case WB.ANIMATIONLOOPMODE_CONSTANT:
              case WB.ANIMATIONLOOPMODE_YOYO:
                return this.sizeInterpolateFunction(jB, yB, PB);
              case WB.ANIMATIONLOOPMODE_RELATIVE:
              case WB.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return this.sizeInterpolateFunction(jB, yB, PB).add((OB.offsetValue || qB).scale(OB.repeatCount))
            }
            break;
          case WB.ANIMATIONTYPE_COLOR3: {
            const BB = JB ? this.color3InterpolateFunctionWithTangents(jB, QB.outTangent.scale(MB), yB, oB.inTangent.scale(MB), PB) : this.color3InterpolateFunction(jB, yB, PB);
            switch (OB.WG) {
              case WB.ANIMATIONLOOPMODE_CYCLE:
              case WB.ANIMATIONLOOPMODE_CONSTANT:
              case WB.ANIMATIONLOOPMODE_YOYO:
                return BB;
              case WB.ANIMATIONLOOPMODE_RELATIVE:
              case WB.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return BB.add((OB.offsetValue || ZB).scale(OB.repeatCount))
            }
            break
          }
          case WB.ANIMATIONTYPE_COLOR4: {
            const BB = JB ? this.color4InterpolateFunctionWithTangents(jB, QB.outTangent.scale(MB), yB, oB.inTangent.scale(MB), PB) : this.color4InterpolateFunction(jB, yB, PB);
            switch (OB.WG) {
              case WB.ANIMATIONLOOPMODE_CYCLE:
              case WB.ANIMATIONLOOPMODE_CONSTANT:
              case WB.ANIMATIONLOOPMODE_YOYO:
                return BB;
              case WB.ANIMATIONLOOPMODE_RELATIVE:
              case WB.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return BB.add((OB.offsetValue || NB).scale(OB.repeatCount))
            }
            break
          }
          case WB.ANIMATIONTYPE_MATRIX:
            switch (OB.WG) {
              case WB.ANIMATIONLOOPMODE_CYCLE:
              case WB.ANIMATIONLOOPMODE_CONSTANT:
              case WB.ANIMATIONLOOPMODE_YOYO:
                return WB.AllowMatricesInterpolation ? this.matrixInterpolateFunction(jB, yB, PB, OB.workValue) : jB;
              case WB.ANIMATIONLOOPMODE_RELATIVE:
              case WB.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return jB
            }
        }
        return 0
      }
      matrixInterpolateFunction(BB, OB, GB, DB) {
        return WB.AllowMatrixDecomposeForInterpolation ? DB ? (YB.d.DecomposeLerpToRef(BB, OB, GB, DB), DB) : YB.d.DecomposeLerp(BB, OB, GB) : DB ? (YB.d.LerpToRef(BB, OB, GB, DB), DB) : YB.d.Lerp(BB, OB, GB)
      }
      clone() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const OB = new WB(this.name, this.targetPropertyPath.join("."), this.framePerSecond, this.dataType, this.WG);
        if (OB.enableBlending = this.enableBlending, OB.blendingSpeed = this.blendingSpeed, this._keys && OB.setKeys(this._keys, !1, BB), this._ranges) {
          OB._ranges = {};
          for (const BB in this._ranges) {
            const GB = this._ranges[BB];
            GB && (OB._ranges[BB] = GB.clone())
          }
        }
        return OB
      }
      setKeys(BB) {
        let OB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) this._keys = BB;
        else if (this._keys = BB.slice(0), OB)
          for (let GB = 0; GB < this._keys.length; GB++) {
            const BB = this._keys[GB];
            this._keys[GB] = {
              frame: BB.frame,
              value: BB.value.clone ? BB.value.clone() : BB.value,
              inTangent: BB.inTangent && BB.inTangent.clone ? BB.inTangent.clone() : BB.inTangent,
              outTangent: BB.outTangent && BB.outTangent.clone ? BB.outTangent.clone() : BB.outTangent,
              interpolation: BB.interpolation,
              lockedTangent: BB.lockedTangent,
              easingFunction: BB.easingFunction
            }
          }
      }
      createKeyForFrame(BB) {
        RB.key = 0;
        const OB = this._interpolate(BB, RB, !0);
        if (!OB) return this._keys[RB.key].frame === BB ? RB.key : RB.key + 1;
        const GB = {
          frame: BB,
          value: OB.clone ? OB.clone() : OB
        };
        return this._keys.splice(RB.key + 1, 0, GB), RB.key + 1
      }
      serialize() {
        const BB = {};
        BB.name = this.name, BB.property = this.targetProperty, BB.framePerSecond = this.framePerSecond, BB.dataType = this.dataType, BB.loopBehavior = this.WG, BB.enableBlending = this.enableBlending, BB.blendingSpeed = this.blendingSpeed;
        const OB = this.dataType;
        BB.keys = [];
        const GB = this.getKeys();
        for (let YB = 0; YB < GB.length; YB++) {
          const DB = GB[YB],
            QB = {};
          switch (QB.frame = DB.frame, OB) {
            case WB.ANIMATIONTYPE_FLOAT:
              QB.values = [DB.value], void 0 !== DB.inTangent && QB.values.push(DB.inTangent), void 0 !== DB.outTangent && (void 0 === DB.inTangent && QB.values.push(void 0), QB.values.push(DB.outTangent)), void 0 !== DB.interpolation && (void 0 === DB.inTangent && QB.values.push(void 0), void 0 === DB.outTangent && QB.values.push(void 0), QB.values.push(DB.interpolation));
              break;
            case WB.ANIMATIONTYPE_QUATERNION:
            case WB.ANIMATIONTYPE_MATRIX:
            case WB.ANIMATIONTYPE_VECTOR3:
            case WB.ANIMATIONTYPE_COLOR3:
            case WB.ANIMATIONTYPE_COLOR4:
              QB.values = DB.value.dDB(), void 0 != DB.inTangent && QB.values.push(DB.inTangent.dDB()), void 0 != DB.outTangent && (void 0 === DB.inTangent && QB.values.push(void 0), QB.values.push(DB.outTangent.dDB())), void 0 !== DB.interpolation && (void 0 === DB.inTangent && QB.values.push(void 0), void 0 === DB.outTangent && QB.values.push(void 0), QB.values.push(DB.interpolation))
          }
          BB.keys.push(QB)
        }
        BB.JZ = [];
        for (const YB in this._ranges) {
          const OB = this._ranges[YB];
          if (!OB) continue;
          const GB = {};
          GB.name = YB, GB.from = OB.from, GB.to = OB.to, BB.JZ.push(GB)
        }
        return BB
      }
      static _UniversalLerp(BB, OB, GB) {
        const YB = BB.constructor;
        return YB.Lerp ? YB.Lerp(BB, OB, GB) : YB.Slerp ? YB.Slerp(BB, OB, GB) : BB.toFixed ? BB * (1 - GB) + GB * OB : OB
      }
    }

    function AB(BB, OB, GB) {
      let DB;
      DB = "object" === typeof OB ? OB : {
        referenceFrame: OB ?? 0,
        range: GB,
        cloneOriginalAnimation: arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        clonedAnimationName: arguments.length > 4 ? arguments[4] : void 0
      };
      let QB = BB;
      DB.cloneOriginalAnimation && (QB = BB.clone(), QB.name = DB.clonedAnimationName || QB.name);
      const oB = QB.getKeys();
      if (!oB.length) return QB;
      const jB = DB.referenceFrame && DB.referenceFrame >= 0 ? DB.referenceFrame : 0;
      let yB = 0;
      const JB = oB[0];
      let MB = oB.length - 1;
      const PB = oB[MB],
        zB = {
          referenceValue: JB.value,
          referencePosition: YB.k.Xp[0],
          referenceQuaternion: YB.k.Quaternion[0],
          referenceScaling: YB.k.Xp[1],
          keyPosition: YB.k.Xp[2],
          keyQuaternion: YB.k.Quaternion[1],
          keyScaling: YB.k.Xp[3]
        };
      let lB = JB.frame,
        pB = PB.frame;
      if (DB.range) {
        const BB = QB.getRange(DB.range);
        BB && (lB = BB.from, pB = BB.to)
      } else lB = DB.fromFrame ?? lB, pB = DB.toFrame ?? pB;
      lB !== JB.frame && (yB = QB.createKeyForFrame(lB)), pB !== PB.frame && (MB = QB.createKeyForFrame(pB));
      const qB = QB.getKeys();
      if (1 === qB.length) {
        const BB = QB._getKeyValue(qB[0].value);
        zB.referenceValue = BB.clone ? BB.clone() : BB
      } else if (jB <= JB.frame) {
        const BB = QB._getKeyValue(JB.value);
        zB.referenceValue = BB.clone ? BB.clone() : BB
      } else if (jB >= PB.frame) {
        const BB = QB._getKeyValue(PB.value);
        zB.referenceValue = BB.clone ? BB.clone() : BB
      } else {
        RB.key = 0;
        const BB = QB._interpolate(jB, RB);
        zB.referenceValue = BB.clone ? BB.clone() : BB
      }
      QB.dataType === WB.ANIMATIONTYPE_QUATERNION ? zB.referenceValue.normalize().conjugateInPlace() : QB.dataType === WB.ANIMATIONTYPE_MATRIX && (zB.referenceValue.decompose(zB.referenceScaling, zB.referenceQuaternion, zB.referencePosition), zB.referenceQuaternion.normalize().conjugateInPlace());
      let ZB = Number.MAX_VALUE;
      const NB = DB.clipKeys ? [] : null;
      for (let RB = yB; RB <= MB; RB++) {
        let BB = qB[RB];
        if ((NB || DB.cloneOriginalAnimation) && (BB = {
            frame: BB.frame,
            value: BB.value.clone ? BB.value.clone() : BB.value,
            inTangent: BB.inTangent,
            outTangent: BB.outTangent,
            interpolation: BB.interpolation,
            lockedTangent: BB.lockedTangent,
            easingFunction: BB.easingFunction
          }, NB && (ZB === Number.MAX_VALUE && (ZB = BB.frame), BB.frame -= ZB, NB.push(BB))), !RB || QB.dataType === WB.ANIMATIONTYPE_FLOAT || BB.value !== JB.value) switch (QB.dataType) {
          case WB.ANIMATIONTYPE_MATRIX:
            BB.value.decompose(zB.keyScaling, zB.keyQuaternion, zB.keyPosition), zB.keyPosition.CDB(zB.referencePosition), zB.keyScaling.divideInPlace(zB.referenceScaling), zB.referenceQuaternion.multiplyToRef(zB.keyQuaternion, zB.keyQuaternion), YB.d.ComposeToRef(zB.keyScaling, zB.keyQuaternion, zB.keyPosition, BB.value);
            break;
          case WB.ANIMATIONTYPE_QUATERNION:
            zB.referenceValue.multiplyToRef(BB.value, BB.value);
            break;
          case WB.ANIMATIONTYPE_VECTOR2:
          case WB.ANIMATIONTYPE_VECTOR3:
          case WB.ANIMATIONTYPE_COLOR3:
          case WB.ANIMATIONTYPE_COLOR4:
            BB.value.subtractToRef(zB.referenceValue, BB.value);
            break;
          case WB.ANIMATIONTYPE_SIZE:
            BB.value.width -= zB.referenceValue.width, BB.value.height -= zB.referenceValue.height;
            break;
          default:
            BB.value -= zB.referenceValue
        }
      }
      return NB && QB.setKeys(NB, !0), QB
    }

    function VB(BB, OB, GB, YB) {
      const DB = new WB(BB + "Animation", BB, GB, OB, WB.ANIMATIONLOOPMODE_CONSTANT);
      return DB.setEasingFunction(YB), DB
    }

    function SB(BB, OB, GB, YB, DB, QB, oB, jB, yB, JB, MB) {
      const PB = WB._PrepareAnimation(BB, GB, YB, DB, QB, oB, jB, yB);
      return PB ? (OB.JF && (MB = OB.JF()), MB ? MB.beginDirectAnimation(OB, [PB], 0, DB, PB.WG !== WB.ANIMATIONLOOPMODE_CONSTANT, 1, JB) : null) : null
    }

    function nB(BB, OB, GB, YB, DB, QB, oB, jB, yB, JB, MB) {
      const PB = WB._PrepareAnimation(BB, YB, DB, QB, oB, jB, yB, JB);
      if (!PB) return null;
      return OB.JF().beginDirectHierarchyAnimation(OB, GB, [PB], 0, QB, 1 === PB.WG, 1, MB)
    }

    function UB(BB, OB, GB, YB, DB, QB, oB, jB, yB, JB) {
      const MB = WB._PrepareAnimation(BB, GB, YB, DB, QB, oB, jB, yB);
      return MB ? (OB.animations.push(MB), OB.JF().beginAnimation(OB, 0, DB, 1 === MB.WG, 1, JB)) : null
    }

    function fB(BB, OB, GB, YB, DB, QB, oB) {
      let jB = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
        yB = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8],
        JB = arguments.length > 9 ? arguments[9] : void 0;
      if (oB <= 0) return GB[BB] = OB, jB && jB(), null;
      const MB = DB * (oB / 1e3);
      QB.setKeys(JB ?? [{
        frame: 0,
        value: GB[BB].clone ? GB[BB].clone() : GB[BB]
      }, {
        frame: MB,
        value: OB
      }]), GB.animations || (GB.animations = []), GB.animations.push(QB);
      return YB.beginAnimation(GB, 0, MB, !1, 1, jB ?? void 0, void 0, yB)
    }

    function kB(BB, OB) {
      MB.d.AppendSerializedAnimations(BB, OB)
    }

    function dB(BB) {
      const OB = new WB(BB.name, BB.property, BB.framePerSecond, BB.dataType, BB.loopBehavior),
        GB = BB.dataType,
        QB = [];
      let oB, jB;
      for (BB.enableBlending && (OB.enableBlending = BB.enableBlending), BB.blendingSpeed && (OB.blendingSpeed = BB.blendingSpeed), jB = 0; jB < BB.keys.length; jB++) {
        const OB = BB.keys[jB];
        let yB, JB, MB;
        switch (GB) {
          case WB.ANIMATIONTYPE_FLOAT:
            oB = OB.values[0], OB.values.length >= 2 && (yB = OB.values[1]), OB.values.length >= 3 && (JB = OB.values[2]), OB.values.length >= 4 && (MB = OB.values[3]);
            break;
          case WB.ANIMATIONTYPE_QUATERNION:
            if (oB = YB.f.FromArray(OB.values), OB.values.length >= 8) {
              const BB = YB.f.FromArray(OB.values.slice(4, 8));
              BB.equals(YB.f.Zero()) || (yB = BB)
            }
            if (OB.values.length >= 12) {
              const BB = YB.f.FromArray(OB.values.slice(8, 12));
              BB.equals(YB.f.Zero()) || (JB = BB)
            }
            OB.values.length >= 13 && (MB = OB.values[12]);
            break;
          case WB.ANIMATIONTYPE_MATRIX:
            oB = YB.d.FromArray(OB.values), OB.values.length >= 17 && (MB = OB.values[16]);
            break;
          case WB.ANIMATIONTYPE_COLOR3:
            oB = DB.c.FromArray(OB.values), OB.values[3] && (yB = DB.c.FromArray(OB.values[3])), OB.values[4] && (JB = DB.c.FromArray(OB.values[4])), OB.values[5] && (MB = OB.values[5]);
            break;
          case WB.ANIMATIONTYPE_COLOR4:
            oB = DB.g.FromArray(OB.values), OB.values[4] && (yB = DB.g.FromArray(OB.values[4])), OB.values[5] && (JB = DB.g.FromArray(OB.values[5])), OB.values[6] && (MB = OB.values[6]);
            break;
          case WB.ANIMATIONTYPE_VECTOR3:
          default:
            oB = YB.r.FromArray(OB.values), OB.values[3] && (yB = YB.r.FromArray(OB.values[3])), OB.values[4] && (JB = YB.r.FromArray(OB.values[4])), OB.values[5] && (MB = OB.values[5])
        }
        const PB = {};
        PB.frame = OB.frame, PB.value = oB, void 0 != yB && (PB.inTangent = yB), void 0 != JB && (PB.outTangent = JB), void 0 != MB && (PB.interpolation = MB), QB.push(PB)
      }
      if (OB.setKeys(QB), BB.JZ)
        for (jB = 0; jB < BB.JZ.length; jB++) oB = BB.JZ[jB], OB.createRange(oB.name, oB.from, oB.to);
      return OB
    }
    async function KB(BB, OB) {
      return await new Promise(((GB, YB) => {
        const DB = new JB.e;
        DB.addEventListener("readystatechange", (() => {
          if (4 == DB.readyState)
            if (200 == DB.status) {
              let OB = JSON.parse(DB.responseText);
              if (OB.animations && (OB = OB.animations), OB.length) {
                const BB = [];
                for (const GB of OB) BB.push(dB(GB));
                GB(BB)
              } else {
                const YB = dB(OB);
                BB && (YB.name = BB), GB(YB)
              }
            } else YB("Unable to load the animation")
        })), DB.open("GET", OB), DB.send()
      }))
    }
    async function uB(BB) {
      const OB = this?.SnippetUrl ?? WB.SnippetUrl;
      return await new Promise(((GB, YB) => {
        const DB = new JB.e;
        DB.addEventListener("readystatechange", (() => {
          if (4 == DB.readyState)
            if (200 == DB.status) {
              const OB = JSON.parse(JSON.parse(DB.responseText).jsonPayload);
              if (OB.animations) {
                const YB = JSON.parse(OB.animations),
                  DB = [];
                for (const OB of YB.animations) {
                  const GB = dB(OB);
                  GB.snippetId = BB, DB.push(GB)
                }
                GB(DB)
              } else {
                const YB = dB(JSON.parse(OB.animation));
                YB.snippetId = BB, GB(YB)
              }
            } else YB("Unable to load the snippet " + BB)
        })), DB.open("GET", OB + "/" + BB.replace(/#/g, "/")), DB.send()
      }))
    }
    WB._UniqueIdGenerator = 0, WB.AllowMatricesInterpolation = !1, WB.AllowMatrixDecomposeForInterpolation = !0, WB.InheritOriginalValueFromActiveAnimations = !1, WB.SnippetUrl = "https://snippet.babylonjs.com", WB.ANIMATIONTYPE_FLOAT = 0, WB.ANIMATIONTYPE_VECTOR3 = 1, WB.ANIMATIONTYPE_QUATERNION = 2, WB.ANIMATIONTYPE_MATRIX = 3, WB.ANIMATIONTYPE_COLOR3 = 4, WB.ANIMATIONTYPE_COLOR4 = 7, WB.ANIMATIONTYPE_VECTOR2 = 5, WB.ANIMATIONTYPE_SIZE = 6, WB.ANIMATIONLOOPMODE_RELATIVE = 0, WB.ANIMATIONLOOPMODE_CYCLE = 1, WB.ANIMATIONLOOPMODE_CONSTANT = 2, WB.ANIMATIONLOOPMODE_YOYO = 4, WB.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT = 5;
    const mB = uB;
    let IB = !1;

    function FB() {
      IB || (IB = !0, WB.Parse = dB, WB.ParseFromFileAsync = KB, WB.ParseFromSnippetAsync = uB, WB.CreateFromSnippetAsync = mB, WB.CreateAnimation = VB, WB.CreateAndStartAnimation = SB, WB.CreateAndStartHierarchyAnimation = nB, WB.CreateMergeAndStartAnimation = UB, WB.MakeAnimationAdditive = AB, WB.TransitionTo = fB, WB.AppendSerializedAnimations = kB, (0, PB.f)("BABYLON.Animation", WB), jB.b._AnimationRangeFactory = (BB, OB, GB) => new oB.e(BB, OB, GB))
    }
  },
  42107: (BB, OB, GB) => {
    GB.d(OB, {
      e: () => YB
    });
    class YB {
      constructor(BB, OB, GB) {
        this.name = BB, this.from = OB, this.to = GB
      }
      clone() {
        return new YB(this.name, this.from, this.to)
      }
    }
  },
  42160: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => YB.c,
      g: () => YB.h
    });
    var YB = GB(41150);
    (0, YB.d)()
  },
  42133: (BB, OB, GB) => {
    GB.d(OB, {
      e: () => YB.e
    });
    var YB = GB(41470);
    (0, YB.c)()
  },
  42118: (BB, OB, GB) => {
    GB.d(OB, {
      b: () => YB.b
    });
    var YB = GB(41462);
    (0, YB.f)()
  },
  42167: (BB, OB, GB) => {
    GB.d(OB, {
      b: () => YB.c
    });
    var YB = GB(41411);
    (0, YB.f)()
  },
  42111: (BB, OB, GB) => {
    GB.d(OB, {
      e: () => YB.h
    });
    var YB = GB(41444);
    (0, YB.e)()
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);