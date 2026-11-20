export const id = 264;
export const ids = [264];
export const modules = {
  40668: (uu, Ru, yu) => {
    yu.d(Ru, {
      d: () => Hu,
      f: () => su,
      i: () => Tu,
      j: () => Wu,
      k: () => Bu,
      n: () => pu,
      q: () => Su,
      s: () => xu
    });
    var Eu = yu(36830),
      Ku = yu(36991),
      Qu = yu(36865),
      mu = yu(40676),
      Ju = yu(39780),
      Nu = yu(39580),
      Xu = yu(39611),
      Vu = yu(39582),
      ru = yu(36871);
    const Bu = Object.freeze(new Eu.f(0, 0, 0, 0)),
      xu = Object.freeze(Eu.p.Zero()),
      Su = Object.freeze(Eu.n.Zero()),
      pu = Object.freeze(Nu.c.Zero()),
      Tu = Object.freeze(Ku.d.Black()),
      Wu = Object.freeze(new Ku.h(0, 0, 0, 0)),
      ju = {
        key: 0,
        repeatCount: 0,
        WQ: 2
      };
    class Hu {
      static _PrepareAnimation(uu, Ru, yu, Qu, mu, Ju, Xu, Vu) {
        let ru;
        if (!isNaN(parseFloat(mu)) && isFinite(mu) ? ru = Hu.ANIMATIONTYPE_FLOAT : mu instanceof Eu.f ? ru = Hu.ANIMATIONTYPE_QUATERNION : mu instanceof Eu.p ? ru = Hu.ANIMATIONTYPE_VECTOR3 : mu instanceof Eu.n ? ru = Hu.ANIMATIONTYPE_VECTOR2 : mu instanceof Ku.d ? ru = Hu.ANIMATIONTYPE_COLOR3 : mu instanceof Ku.h ? ru = Hu.ANIMATIONTYPE_COLOR4 : mu instanceof Nu.c && (ru = Hu.ANIMATIONTYPE_SIZE), void 0 == ru) return null;
        const Bu = new Hu(uu, Ru, yu, ru, Xu),
          xu = [{
            frame: 0,
            value: mu
          }, {
            frame: Qu,
            value: Ju
          }];
        return Bu.setKeys(xu), void 0 !== Vu && Bu.setEasingFunction(Vu), Bu
      }
      get runtimeAnimations() {
        return this._runtimeAnimations
      }
      get hasRunningRuntimeAnimations() {
        for (const uu of this._runtimeAnimations)
          if (!uu.isStopped()) return !0;
        return !1
      }
      constructor(uu, Ru, yu, Eu, Ku, Qu) {
        this.name = uu, this.targetProperty = Ru, this.framePerSecond = yu, this.dataType = Eu, this.WQ = Ku, this.enableBlending = Qu, this._easingFunction = null, this._runtimeAnimations = new Array, this._events = new Array, this.blendingSpeed = .01, this._ranges = {}, this._coreAnimation = null, this.targetPropertyPath = Ru.split("."), this.dataType = Eu, this.WQ = void 0 === Ku ? Hu.ANIMATIONLOOPMODE_CYCLE : Ku, this.uniqueId = Hu._UniqueIdGenerator++
      }
      toString(uu) {
        let Ru = "Name: " + this.name + ", property: " + this.targetProperty;
        if (Ru += ", datatype: " + ["Float", "MS", "Quaternion", "Matrix", "Color3", "Vector2"][this.dataType], Ru += ", nKeys: " + (this._keys ? this._keys.length : "none"), Ru += ", nRanges: " + (this._ranges ? Object.keys(this._ranges).length : "none"), uu) {
          Ru += ", Ranges: {";
          let uu = !0;
          for (const yu in this._ranges) uu || (Ru += ", "), uu = !1, Ru += yu;
          Ru += "}"
        }
        return Ru
      }
      addEvent(uu) {
        this._events.push(uu), this._events.sort(((uu, Ru) => uu.frame - Ru.frame))
      }
      removeEvents(uu) {
        for (let Ru = 0; Ru < this._events.length; Ru++) this._events[Ru].frame === uu && (this._events.splice(Ru, 1), Ru--)
      }
      getEvents() {
        return this._events
      }
      createRange(uu, Ru, yu) {
        this._ranges[uu] || (this._ranges[uu] = new mu.e(uu, Ru, yu))
      }
      deleteRange(uu) {
        let Ru = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const yu = this._ranges[uu];
        if (yu) {
          if (Ru) {
            const uu = yu.from,
              Ru = yu.to;
            for (let yu = this._keys.length - 1; yu >= 0; yu--) this._keys[yu].frame >= uu && this._keys[yu].frame <= Ru && this._keys.splice(yu, 1)
          }
          this._ranges[uu] = null
        }
      }
      getRange(uu) {
        return this._ranges[uu]
      }
      getKeys() {
        return this._keys
      }
      getHighestFrame() {
        let uu = 0;
        for (let Ru = 0, yu = this._keys.length; Ru < yu; Ru++) uu < this._keys[Ru].frame && (uu = this._keys[Ru].frame);
        return uu
      }
      getEasingFunction() {
        return this._easingFunction
      }
      setEasingFunction(uu) {
        this._easingFunction = uu
      }
      floatInterpolateFunction(uu, Ru, yu) {
        return (0, Qu.Lerp)(uu, Ru, yu)
      }
      floatInterpolateFunctionWithTangents(uu, Ru, yu, Eu, Ku) {
        return (0, Qu.Hermite)(uu, Ru, yu, Eu, Ku)
      }
      quaternionInterpolateFunction(uu, Ru, yu) {
        return Eu.f.Slerp(uu, Ru, yu)
      }
      quaternionInterpolateFunctionWithTangents(uu, Ru, yu, Ku, Qu) {
        return Eu.f.Hermite(uu, Ru, yu, Ku, Qu).normalize()
      }
      vector3InterpolateFunction(uu, Ru, yu) {
        return Eu.p.Lerp(uu, Ru, yu)
      }
      vector3InterpolateFunctionWithTangents(uu, Ru, yu, Ku, Qu) {
        return Eu.p.Hermite(uu, Ru, yu, Ku, Qu)
      }
      vector2InterpolateFunction(uu, Ru, yu) {
        return Eu.n.Lerp(uu, Ru, yu)
      }
      vector2InterpolateFunctionWithTangents(uu, Ru, yu, Ku, Qu) {
        return Eu.n.Hermite(uu, Ru, yu, Ku, Qu)
      }
      sizeInterpolateFunction(uu, Ru, yu) {
        return Nu.c.Lerp(uu, Ru, yu)
      }
      color3InterpolateFunction(uu, Ru, yu) {
        return Ku.d.Lerp(uu, Ru, yu)
      }
      color3InterpolateFunctionWithTangents(uu, Ru, yu, Eu, Qu) {
        return Ku.d.Hermite(uu, Ru, yu, Eu, Qu)
      }
      color4InterpolateFunction(uu, Ru, yu) {
        return Ku.h.Lerp(uu, Ru, yu)
      }
      color4InterpolateFunctionWithTangents(uu, Ru, yu, Eu, Qu) {
        return Ku.h.Hermite(uu, Ru, yu, Eu, Qu)
      }
      _getKeyValue(uu) {
        return "function" === typeof uu ? uu() : uu
      }
      evaluate(uu) {
        return ju.key = 0, this._interpolate(uu, ju)
      }
      _interpolate(uu, Ru) {
        let yu = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (Ru.WQ === Hu.ANIMATIONLOOPMODE_CONSTANT && Ru.repeatCount > 0) return Ru.highLimitValue.clone ? Ru.highLimitValue.clone() : Ru.highLimitValue;
        const Eu = this._keys;
        let Ku;
        if (this._coreAnimation) Ku = this._coreAnimation._key;
        else {
          const Qu = Eu.length;
          for (Ku = Ru.key; Ku >= 0 && uu < Eu[Ku].frame;) --Ku;
          for (; Ku + 1 <= Qu - 1 && uu >= Eu[Ku + 1].frame;) ++Ku;
          if (Ru.key = Ku, Ku < 0) return yu ? void 0 : this._getKeyValue(Eu[0].value);
          if (Ku + 1 > Qu - 1) return yu ? void 0 : this._getKeyValue(Eu[Qu - 1].value);
          this._key = Ku
        }
        const Qu = Eu[Ku],
          mu = Eu[Ku + 1];
        if (yu && (uu === Qu.frame || uu === mu.frame)) return;
        const Ju = this._getKeyValue(Qu.value),
          Nu = this._getKeyValue(mu.value);
        if (1 === Qu.interpolation) return mu.frame > uu ? Ju : Nu;
        const Xu = void 0 !== Qu.outTangent && void 0 !== mu.inTangent,
          Vu = mu.frame - Qu.frame;
        let ru = (uu - Qu.frame) / Vu;
        const ju = Qu.easingFunction || this.getEasingFunction();
        switch (ju && (ru = ju.ease(ru)), this.dataType) {
          case Hu.ANIMATIONTYPE_FLOAT: {
            const uu = Xu ? this.floatInterpolateFunctionWithTangents(Ju, Qu.outTangent * Vu, Nu, mu.inTangent * Vu, ru) : this.floatInterpolateFunction(Ju, Nu, ru);
            switch (Ru.WQ) {
              case Hu.ANIMATIONLOOPMODE_CYCLE:
              case Hu.ANIMATIONLOOPMODE_CONSTANT:
              case Hu.ANIMATIONLOOPMODE_YOYO:
                return uu;
              case Hu.ANIMATIONLOOPMODE_RELATIVE:
              case Hu.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return (Ru.offsetValue ?? 0) * Ru.repeatCount + uu
            }
            break
          }
          case Hu.ANIMATIONTYPE_QUATERNION: {
            const uu = Xu ? this.quaternionInterpolateFunctionWithTangents(Ju, Qu.outTangent.scale(Vu), Nu, mu.inTangent.scale(Vu), ru) : this.quaternionInterpolateFunction(Ju, Nu, ru);
            switch (Ru.WQ) {
              case Hu.ANIMATIONLOOPMODE_CYCLE:
              case Hu.ANIMATIONLOOPMODE_CONSTANT:
              case Hu.ANIMATIONLOOPMODE_YOYO:
                return uu;
              case Hu.ANIMATIONLOOPMODE_RELATIVE:
              case Hu.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return uu.addInPlace((Ru.offsetValue || Bu).scale(Ru.repeatCount))
            }
            return uu
          }
          case Hu.ANIMATIONTYPE_VECTOR3: {
            const uu = Xu ? this.vector3InterpolateFunctionWithTangents(Ju, Qu.outTangent.scale(Vu), Nu, mu.inTangent.scale(Vu), ru) : this.vector3InterpolateFunction(Ju, Nu, ru);
            switch (Ru.WQ) {
              case Hu.ANIMATIONLOOPMODE_CYCLE:
              case Hu.ANIMATIONLOOPMODE_CONSTANT:
              case Hu.ANIMATIONLOOPMODE_YOYO:
                return uu;
              case Hu.ANIMATIONLOOPMODE_RELATIVE:
              case Hu.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return uu.add((Ru.offsetValue || xu).scale(Ru.repeatCount))
            }
            break
          }
          case Hu.ANIMATIONTYPE_VECTOR2: {
            const uu = Xu ? this.vector2InterpolateFunctionWithTangents(Ju, Qu.outTangent.scale(Vu), Nu, mu.inTangent.scale(Vu), ru) : this.vector2InterpolateFunction(Ju, Nu, ru);
            switch (Ru.WQ) {
              case Hu.ANIMATIONLOOPMODE_CYCLE:
              case Hu.ANIMATIONLOOPMODE_CONSTANT:
              case Hu.ANIMATIONLOOPMODE_YOYO:
                return uu;
              case Hu.ANIMATIONLOOPMODE_RELATIVE:
              case Hu.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return uu.add((Ru.offsetValue || Su).scale(Ru.repeatCount))
            }
            break
          }
          case Hu.ANIMATIONTYPE_SIZE:
            switch (Ru.WQ) {
              case Hu.ANIMATIONLOOPMODE_CYCLE:
              case Hu.ANIMATIONLOOPMODE_CONSTANT:
              case Hu.ANIMATIONLOOPMODE_YOYO:
                return this.sizeInterpolateFunction(Ju, Nu, ru);
              case Hu.ANIMATIONLOOPMODE_RELATIVE:
              case Hu.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return this.sizeInterpolateFunction(Ju, Nu, ru).add((Ru.offsetValue || pu).scale(Ru.repeatCount))
            }
            break;
          case Hu.ANIMATIONTYPE_COLOR3: {
            const uu = Xu ? this.color3InterpolateFunctionWithTangents(Ju, Qu.outTangent.scale(Vu), Nu, mu.inTangent.scale(Vu), ru) : this.color3InterpolateFunction(Ju, Nu, ru);
            switch (Ru.WQ) {
              case Hu.ANIMATIONLOOPMODE_CYCLE:
              case Hu.ANIMATIONLOOPMODE_CONSTANT:
              case Hu.ANIMATIONLOOPMODE_YOYO:
                return uu;
              case Hu.ANIMATIONLOOPMODE_RELATIVE:
              case Hu.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return uu.add((Ru.offsetValue || Tu).scale(Ru.repeatCount))
            }
            break
          }
          case Hu.ANIMATIONTYPE_COLOR4: {
            const uu = Xu ? this.color4InterpolateFunctionWithTangents(Ju, Qu.outTangent.scale(Vu), Nu, mu.inTangent.scale(Vu), ru) : this.color4InterpolateFunction(Ju, Nu, ru);
            switch (Ru.WQ) {
              case Hu.ANIMATIONLOOPMODE_CYCLE:
              case Hu.ANIMATIONLOOPMODE_CONSTANT:
              case Hu.ANIMATIONLOOPMODE_YOYO:
                return uu;
              case Hu.ANIMATIONLOOPMODE_RELATIVE:
              case Hu.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return uu.add((Ru.offsetValue || Wu).scale(Ru.repeatCount))
            }
            break
          }
          case Hu.ANIMATIONTYPE_MATRIX:
            switch (Ru.WQ) {
              case Hu.ANIMATIONLOOPMODE_CYCLE:
              case Hu.ANIMATIONLOOPMODE_CONSTANT:
              case Hu.ANIMATIONLOOPMODE_YOYO:
                return Hu.AllowMatricesInterpolation ? this.matrixInterpolateFunction(Ju, Nu, ru, Ru.workValue) : Ju;
              case Hu.ANIMATIONLOOPMODE_RELATIVE:
              case Hu.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return Ju
            }
        }
        return 0
      }
      matrixInterpolateFunction(uu, Ru, yu, Ku) {
        return Hu.AllowMatrixDecomposeForInterpolation ? Ku ? (Eu.d.DecomposeLerpToRef(uu, Ru, yu, Ku), Ku) : Eu.d.DecomposeLerp(uu, Ru, yu) : Ku ? (Eu.d.LerpToRef(uu, Ru, yu, Ku), Ku) : Eu.d.Lerp(uu, Ru, yu)
      }
      clone() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const Ru = new Hu(this.name, this.targetPropertyPath.join("."), this.framePerSecond, this.dataType, this.WQ);
        if (Ru.enableBlending = this.enableBlending, Ru.blendingSpeed = this.blendingSpeed, this._keys && Ru.setKeys(this._keys, !1, uu), this._ranges) {
          Ru._ranges = {};
          for (const uu in this._ranges) {
            const yu = this._ranges[uu];
            yu && (Ru._ranges[uu] = yu.clone())
          }
        }
        return Ru
      }
      setKeys(uu) {
        let Ru = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) this._keys = uu;
        else if (this._keys = uu.slice(0), Ru)
          for (let yu = 0; yu < this._keys.length; yu++) {
            const uu = this._keys[yu];
            this._keys[yu] = {
              frame: uu.frame,
              value: uu.value.clone ? uu.value.clone() : uu.value,
              inTangent: uu.inTangent && uu.inTangent.clone ? uu.inTangent.clone() : uu.inTangent,
              outTangent: uu.outTangent && uu.outTangent.clone ? uu.outTangent.clone() : uu.outTangent,
              interpolation: uu.interpolation,
              lockedTangent: uu.lockedTangent,
              easingFunction: uu.easingFunction
            }
          }
      }
      createKeyForFrame(uu) {
        ju.key = 0;
        const Ru = this._interpolate(uu, ju, !0);
        if (!Ru) return this._keys[ju.key].frame === uu ? ju.key : ju.key + 1;
        const yu = {
          frame: uu,
          value: Ru.clone ? Ru.clone() : Ru
        };
        return this._keys.splice(ju.key + 1, 0, yu), ju.key + 1
      }
      serialize() {
        const uu = {};
        uu.name = this.name, uu.property = this.targetProperty, uu.framePerSecond = this.framePerSecond, uu.dataType = this.dataType, uu.loopBehavior = this.WQ, uu.enableBlending = this.enableBlending, uu.blendingSpeed = this.blendingSpeed;
        const Ru = this.dataType;
        uu.keys = [];
        const yu = this.getKeys();
        for (let Eu = 0; Eu < yu.length; Eu++) {
          const Ku = yu[Eu],
            Qu = {};
          switch (Qu.frame = Ku.frame, Ru) {
            case Hu.ANIMATIONTYPE_FLOAT:
              Qu.values = [Ku.value], void 0 !== Ku.inTangent && Qu.values.push(Ku.inTangent), void 0 !== Ku.outTangent && (void 0 === Ku.inTangent && Qu.values.push(void 0), Qu.values.push(Ku.outTangent)), void 0 !== Ku.interpolation && (void 0 === Ku.inTangent && Qu.values.push(void 0), void 0 === Ku.outTangent && Qu.values.push(void 0), Qu.values.push(Ku.interpolation));
              break;
            case Hu.ANIMATIONTYPE_QUATERNION:
            case Hu.ANIMATIONTYPE_MATRIX:
            case Hu.ANIMATIONTYPE_VECTOR3:
            case Hu.ANIMATIONTYPE_COLOR3:
            case Hu.ANIMATIONTYPE_COLOR4:
              Qu.values = Ku.value.AEu(), void 0 != Ku.inTangent && Qu.values.push(Ku.inTangent.AEu()), void 0 != Ku.outTangent && (void 0 === Ku.inTangent && Qu.values.push(void 0), Qu.values.push(Ku.outTangent.AEu())), void 0 !== Ku.interpolation && (void 0 === Ku.inTangent && Qu.values.push(void 0), void 0 === Ku.outTangent && Qu.values.push(void 0), Qu.values.push(Ku.interpolation))
          }
          uu.keys.push(Qu)
        }
        uu.yT = [];
        for (const Eu in this._ranges) {
          const Ru = this._ranges[Eu];
          if (!Ru) continue;
          const yu = {};
          yu.name = Eu, yu.from = Ru.from, yu.to = Ru.to, uu.yT.push(yu)
        }
        return uu
      }
      static _UniversalLerp(uu, Ru, yu) {
        const Eu = uu.constructor;
        return Eu.Lerp ? Eu.Lerp(uu, Ru, yu) : Eu.Slerp ? Eu.Slerp(uu, Ru, yu) : uu.toFixed ? uu * (1 - yu) + yu * Ru : Ru
      }
    }

    function du(uu, Ru, yu) {
      let Ku;
      Ku = "object" === typeof Ru ? Ru : {
        referenceFrame: Ru ?? 0,
        range: yu,
        cloneOriginalAnimation: arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        clonedAnimationName: arguments.length > 4 ? arguments[4] : void 0
      };
      let Qu = uu;
      Ku.cloneOriginalAnimation && (Qu = uu.clone(), Qu.name = Ku.clonedAnimationName || Qu.name);
      const mu = Qu.getKeys();
      if (!mu.length) return Qu;
      const Ju = Ku.referenceFrame && Ku.referenceFrame >= 0 ? Ku.referenceFrame : 0;
      let Nu = 0;
      const Xu = mu[0];
      let Vu = mu.length - 1;
      const ru = mu[Vu],
        Bu = {
          referenceValue: Xu.value,
          referencePosition: Eu.m.MS[0],
          referenceQuaternion: Eu.m.Quaternion[0],
          referenceScaling: Eu.m.MS[1],
          keyPosition: Eu.m.MS[2],
          keyQuaternion: Eu.m.Quaternion[1],
          keyScaling: Eu.m.MS[3]
        };
      let xu = Xu.frame,
        Su = ru.frame;
      if (Ku.range) {
        const uu = Qu.getRange(Ku.range);
        uu && (xu = uu.from, Su = uu.to)
      } else xu = Ku.fromFrame ?? xu, Su = Ku.toFrame ?? Su;
      xu !== Xu.frame && (Nu = Qu.createKeyForFrame(xu)), Su !== ru.frame && (Vu = Qu.createKeyForFrame(Su));
      const pu = Qu.getKeys();
      if (1 === pu.length) {
        const uu = Qu._getKeyValue(pu[0].value);
        Bu.referenceValue = uu.clone ? uu.clone() : uu
      } else if (Ju <= Xu.frame) {
        const uu = Qu._getKeyValue(Xu.value);
        Bu.referenceValue = uu.clone ? uu.clone() : uu
      } else if (Ju >= ru.frame) {
        const uu = Qu._getKeyValue(ru.value);
        Bu.referenceValue = uu.clone ? uu.clone() : uu
      } else {
        ju.key = 0;
        const uu = Qu._interpolate(Ju, ju);
        Bu.referenceValue = uu.clone ? uu.clone() : uu
      }
      Qu.dataType === Hu.ANIMATIONTYPE_QUATERNION ? Bu.referenceValue.normalize().conjugateInPlace() : Qu.dataType === Hu.ANIMATIONTYPE_MATRIX && (Bu.referenceValue.decompose(Bu.referenceScaling, Bu.referenceQuaternion, Bu.referencePosition), Bu.referenceQuaternion.normalize().conjugateInPlace());
      let Tu = Number.MAX_VALUE;
      const Wu = Ku.clipKeys ? [] : null;
      for (let ju = Nu; ju <= Vu; ju++) {
        let uu = pu[ju];
        if ((Wu || Ku.cloneOriginalAnimation) && (uu = {
            frame: uu.frame,
            value: uu.value.clone ? uu.value.clone() : uu.value,
            inTangent: uu.inTangent,
            outTangent: uu.outTangent,
            interpolation: uu.interpolation,
            lockedTangent: uu.lockedTangent,
            easingFunction: uu.easingFunction
          }, Wu && (Tu === Number.MAX_VALUE && (Tu = uu.frame), uu.frame -= Tu, Wu.push(uu))), !ju || Qu.dataType === Hu.ANIMATIONTYPE_FLOAT || uu.value !== Xu.value) switch (Qu.dataType) {
          case Hu.ANIMATIONTYPE_MATRIX:
            uu.value.decompose(Bu.keyScaling, Bu.keyQuaternion, Bu.keyPosition), Bu.keyPosition.oEu(Bu.referencePosition), Bu.keyScaling.divideInPlace(Bu.referenceScaling), Bu.referenceQuaternion.multiplyToRef(Bu.keyQuaternion, Bu.keyQuaternion), Eu.d.ComposeToRef(Bu.keyScaling, Bu.keyQuaternion, Bu.keyPosition, uu.value);
            break;
          case Hu.ANIMATIONTYPE_QUATERNION:
            Bu.referenceValue.multiplyToRef(uu.value, uu.value);
            break;
          case Hu.ANIMATIONTYPE_VECTOR2:
          case Hu.ANIMATIONTYPE_VECTOR3:
          case Hu.ANIMATIONTYPE_COLOR3:
          case Hu.ANIMATIONTYPE_COLOR4:
            uu.value.subtractToRef(Bu.referenceValue, uu.value);
            break;
          case Hu.ANIMATIONTYPE_SIZE:
            uu.value.width -= Bu.referenceValue.width, uu.value.height -= Bu.referenceValue.height;
            break;
          default:
            uu.value -= Bu.referenceValue
        }
      }
      return Wu && Qu.setKeys(Wu, !0), Qu
    }

    function bu(uu, Ru, yu, Eu) {
      const Ku = new Hu(uu + "Animation", uu, yu, Ru, Hu.ANIMATIONLOOPMODE_CONSTANT);
      return Ku.setEasingFunction(Eu), Ku
    }

    function Cu(uu, Ru, yu, Eu, Ku, Qu, mu, Ju, Nu, Xu, Vu) {
      const ru = Hu._PrepareAnimation(uu, yu, Eu, Ku, Qu, mu, Ju, Nu);
      return ru ? (Ru.lD && (Vu = Ru.lD()), Vu ? Vu.beginDirectAnimation(Ru, [ru], 0, Ku, ru.WQ !== Hu.ANIMATIONLOOPMODE_CONSTANT, 1, Xu) : null) : null
    }

    function ku(uu, Ru, yu, Eu, Ku, Qu, mu, Ju, Nu, Xu, Vu) {
      const ru = Hu._PrepareAnimation(uu, Eu, Ku, Qu, mu, Ju, Nu, Xu);
      if (!ru) return null;
      return Ru.lD().beginDirectHierarchyAnimation(Ru, yu, [ru], 0, Qu, 1 === ru.WQ, 1, Vu)
    }

    function eu(uu, Ru, yu, Eu, Ku, Qu, mu, Ju, Nu, Xu) {
      const Vu = Hu._PrepareAnimation(uu, yu, Eu, Ku, Qu, mu, Ju, Nu);
      return Vu ? (Ru.animations.push(Vu), Ru.lD().beginAnimation(Ru, 0, Ku, 1 === Vu.WQ, 1, Xu)) : null
    }

    function Au(uu, Ru, yu, Eu, Ku, Qu, mu) {
      let Ju = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
        Nu = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8],
        Xu = arguments.length > 9 ? arguments[9] : void 0;
      if (mu <= 0) return yu[uu] = Ru, Ju && Ju(), null;
      const Vu = Ku * (mu / 1e3);
      Qu.setKeys(Xu ?? [{
        frame: 0,
        value: yu[uu].clone ? yu[uu].clone() : yu[uu]
      }, {
        frame: Vu,
        value: Ru
      }]), yu.animations || (yu.animations = []), yu.animations.push(Qu);
      return Eu.beginAnimation(yu, 0, Vu, !1, 1, Ju ?? void 0, void 0, Nu)
    }

    function Du(uu, Ru) {
      Vu.c.AppendSerializedAnimations(uu, Ru)
    }

    function Mu(uu) {
      const Ru = new Hu(uu.name, uu.property, uu.framePerSecond, uu.dataType, uu.loopBehavior),
        yu = uu.dataType,
        Qu = [];
      let mu, Ju;
      for (uu.enableBlending && (Ru.enableBlending = uu.enableBlending), uu.blendingSpeed && (Ru.blendingSpeed = uu.blendingSpeed), Ju = 0; Ju < uu.keys.length; Ju++) {
        const Ru = uu.keys[Ju];
        let Nu, Xu, Vu;
        switch (yu) {
          case Hu.ANIMATIONTYPE_FLOAT:
            mu = Ru.values[0], Ru.values.length >= 2 && (Nu = Ru.values[1]), Ru.values.length >= 3 && (Xu = Ru.values[2]), Ru.values.length >= 4 && (Vu = Ru.values[3]);
            break;
          case Hu.ANIMATIONTYPE_QUATERNION:
            if (mu = Eu.f.FromArray(Ru.values), Ru.values.length >= 8) {
              const uu = Eu.f.FromArray(Ru.values.slice(4, 8));
              uu.equals(Eu.f.Zero()) || (Nu = uu)
            }
            if (Ru.values.length >= 12) {
              const uu = Eu.f.FromArray(Ru.values.slice(8, 12));
              uu.equals(Eu.f.Zero()) || (Xu = uu)
            }
            Ru.values.length >= 13 && (Vu = Ru.values[12]);
            break;
          case Hu.ANIMATIONTYPE_MATRIX:
            mu = Eu.d.FromArray(Ru.values), Ru.values.length >= 17 && (Vu = Ru.values[16]);
            break;
          case Hu.ANIMATIONTYPE_COLOR3:
            mu = Ku.d.FromArray(Ru.values), Ru.values[3] && (Nu = Ku.d.FromArray(Ru.values[3])), Ru.values[4] && (Xu = Ku.d.FromArray(Ru.values[4])), Ru.values[5] && (Vu = Ru.values[5]);
            break;
          case Hu.ANIMATIONTYPE_COLOR4:
            mu = Ku.h.FromArray(Ru.values), Ru.values[4] && (Nu = Ku.h.FromArray(Ru.values[4])), Ru.values[5] && (Xu = Ku.h.FromArray(Ru.values[5])), Ru.values[6] && (Vu = Ru.values[6]);
            break;
          case Hu.ANIMATIONTYPE_VECTOR3:
          default:
            mu = Eu.p.FromArray(Ru.values), Ru.values[3] && (Nu = Eu.p.FromArray(Ru.values[3])), Ru.values[4] && (Xu = Eu.p.FromArray(Ru.values[4])), Ru.values[5] && (Vu = Ru.values[5])
        }
        const ru = {};
        ru.frame = Ru.frame, ru.value = mu, void 0 != Nu && (ru.inTangent = Nu), void 0 != Xu && (ru.outTangent = Xu), void 0 != Vu && (ru.interpolation = Vu), Qu.push(ru)
      }
      if (Ru.setKeys(Qu), uu.yT)
        for (Ju = 0; Ju < uu.yT.length; Ju++) mu = uu.yT[Ju], Ru.createRange(mu.name, mu.from, mu.to);
      return Ru
    }
    async function Iu(uu, Ru) {
      return await new Promise(((yu, Eu) => {
        const Ku = new Xu.e;
        Ku.addEventListener("readystatechange", (() => {
          if (4 == Ku.readyState)
            if (200 == Ku.status) {
              let Ru = JSON.parse(Ku.responseText);
              if (Ru.animations && (Ru = Ru.animations), Ru.length) {
                const uu = [];
                for (const yu of Ru) uu.push(Mu(yu));
                yu(uu)
              } else {
                const Eu = Mu(Ru);
                uu && (Eu.name = uu), yu(Eu)
              }
            } else Eu("Unable to load the animation")
        })), Ku.open("GET", Ru), Ku.send()
      }))
    }
    async function Gu(uu) {
      const Ru = this?.SnippetUrl ?? Hu.SnippetUrl;
      return await new Promise(((yu, Eu) => {
        const Ku = new Xu.e;
        Ku.addEventListener("readystatechange", (() => {
          if (4 == Ku.readyState)
            if (200 == Ku.status) {
              const Ru = JSON.parse(JSON.parse(Ku.responseText).jsonPayload);
              if (Ru.animations) {
                const Eu = JSON.parse(Ru.animations),
                  Ku = [];
                for (const Ru of Eu.animations) {
                  const yu = Mu(Ru);
                  yu.snippetId = uu, Ku.push(yu)
                }
                yu(Ku)
              } else {
                const Eu = Mu(JSON.parse(Ru.animation));
                Eu.snippetId = uu, yu(Eu)
              }
            } else Eu("Unable to load the snippet " + uu)
        })), Ku.open("GET", Ru + "/" + uu.replace(/#/g, "/")), Ku.send()
      }))
    }
    Hu._UniqueIdGenerator = 0, Hu.AllowMatricesInterpolation = !1, Hu.AllowMatrixDecomposeForInterpolation = !0, Hu.InheritOriginalValueFromActiveAnimations = !1, Hu.SnippetUrl = "https://snippet.babylonjs.com", Hu.ANIMATIONTYPE_FLOAT = 0, Hu.ANIMATIONTYPE_VECTOR3 = 1, Hu.ANIMATIONTYPE_QUATERNION = 2, Hu.ANIMATIONTYPE_MATRIX = 3, Hu.ANIMATIONTYPE_COLOR3 = 4, Hu.ANIMATIONTYPE_COLOR4 = 7, Hu.ANIMATIONTYPE_VECTOR2 = 5, Hu.ANIMATIONTYPE_SIZE = 6, Hu.ANIMATIONLOOPMODE_RELATIVE = 0, Hu.ANIMATIONLOOPMODE_CYCLE = 1, Hu.ANIMATIONLOOPMODE_CONSTANT = 2, Hu.ANIMATIONLOOPMODE_YOYO = 4, Hu.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT = 5;
    const Uu = Gu;
    let nu = !1;

    function su() {
      nu || (nu = !0, Hu.Parse = Mu, Hu.ParseFromFileAsync = Iu, Hu.ParseFromSnippetAsync = Gu, Hu.CreateFromSnippetAsync = Uu, Hu.CreateAnimation = bu, Hu.CreateAndStartAnimation = Cu, Hu.CreateAndStartHierarchyAnimation = ku, Hu.CreateMergeAndStartAnimation = eu, Hu.MakeAnimationAdditive = du, Hu.TransitionTo = Au, Hu.AppendSerializedAnimations = Du, (0, ru.c)("BABYLON.Animation", Hu), Ju.e._AnimationRangeFactory = (uu, Ru, yu) => new mu.e(uu, Ru, yu))
    }
  },
  40676: (uu, Ru, yu) => {
    yu.d(Ru, {
      e: () => Eu
    });
    class Eu {
      constructor(uu, Ru, yu) {
        this.name = uu, this.from = Ru, this.to = yu
      }
      clone() {
        return new Eu(this.name, this.from, this.to)
      }
    }
  },
  40732: (uu, Ru, yu) => {
    yu.d(Ru, {
      c: () => Eu.c,
      d: () => Eu.h
    });
    var Eu = yu(39706);
    (0, Eu.d)()
  },
  40709: (uu, Ru, yu) => {
    yu.d(Ru, {
      e: () => Eu.h
    });
    var Eu = yu(40054);
    (0, Eu.e)()
  },
  40692: (uu, Ru, yu) => {
    yu.d(Ru, {
      b: () => Eu.c
    });
    var Eu = yu(40038);
    (0, Eu.e)()
  },
  40741: (uu, Ru, yu) => {
    yu.d(Ru, {
      b: () => Eu.e
    });
    var Eu = yu(39984);
    (0, Eu.f)()
  },
  40683: (uu, Ru, yu) => {
    yu.d(Ru, {
      c: () => Eu.d
    });
    var Eu = yu(40017);
    (0, Eu.c)()
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);