export const id = 279;
export const ids = [279];
export const modules = {
  41319: (uu, Eu, ju) => {
    ju.d(Eu, {
      e: () => Mu,
      f: () => Ku,
      g: () => hu,
      k: () => Du,
      o: () => cu,
      r: () => Yu,
      t: () => Ou,
      u: () => Nu
    });
    var su = ju(37494),
      Uu = ju(37680),
      Zu = ju(37519),
      Xu = ju(41321),
      lu = ju(40467),
      qu = ju(40268),
      fu = ju(40302),
      Cu = ju(40272),
      bu = ju(37532);
    const cu = Object.freeze(new su.i(0, 0, 0, 0)),
      Nu = Object.freeze(su.t.Zero()),
      Ou = Object.freeze(su.p.Zero()),
      Yu = Object.freeze(qu.e.Zero()),
      hu = Object.freeze(Uu.c.Black()),
      Du = Object.freeze(new Uu.g(0, 0, 0, 0)),
      gu = {
        key: 0,
        repeatCount: 0,
        ZU: 2
      };
    class Mu {
      static _PrepareAnimation(uu, Eu, ju, Zu, Xu, lu, fu, Cu) {
        let bu;
        if (!isNaN(parseFloat(Xu)) && isFinite(Xu) ? bu = Mu.ANIMATIONTYPE_FLOAT : Xu instanceof su.i ? bu = Mu.ANIMATIONTYPE_QUATERNION : Xu instanceof su.t ? bu = Mu.ANIMATIONTYPE_VECTOR3 : Xu instanceof su.p ? bu = Mu.ANIMATIONTYPE_VECTOR2 : Xu instanceof Uu.c ? bu = Mu.ANIMATIONTYPE_COLOR3 : Xu instanceof Uu.g ? bu = Mu.ANIMATIONTYPE_COLOR4 : Xu instanceof qu.e && (bu = Mu.ANIMATIONTYPE_SIZE), void 0 == bu) return null;
        const cu = new Mu(uu, Eu, ju, bu, fu),
          Nu = [{
            frame: 0,
            value: Xu
          }, {
            frame: Zu,
            value: lu
          }];
        return cu.setKeys(Nu), void 0 !== Cu && cu.setEasingFunction(Cu), cu
      }
      get runtimeAnimations() {
        return this._runtimeAnimations
      }
      get hasRunningRuntimeAnimations() {
        for (const uu of this._runtimeAnimations)
          if (!uu.isStopped()) return !0;
        return !1
      }
      constructor(uu, Eu, ju, su, Uu, Zu) {
        this.name = uu, this.targetProperty = Eu, this.framePerSecond = ju, this.dataType = su, this.ZU = Uu, this.enableBlending = Zu, this._easingFunction = null, this._runtimeAnimations = new Array, this._events = new Array, this.blendingSpeed = .01, this._ranges = {}, this._coreAnimation = null, this.targetPropertyPath = Eu.split("."), this.dataType = su, this.ZU = void 0 === Uu ? Mu.ANIMATIONLOOPMODE_CYCLE : Uu, this.uniqueId = Mu._UniqueIdGenerator++
      }
      toString(uu) {
        let Eu = "Name: " + this.name + ", property: " + this.targetProperty;
        if (Eu += ", datatype: " + ["Float", "dO", "Quaternion", "Matrix", "Color3", "Vector2"][this.dataType], Eu += ", nKeys: " + (this._keys ? this._keys.length : "none"), Eu += ", nRanges: " + (this._ranges ? Object.keys(this._ranges).length : "none"), uu) {
          Eu += ", Ranges: {";
          let uu = !0;
          for (const ju in this._ranges) uu || (Eu += ", "), uu = !1, Eu += ju;
          Eu += "}"
        }
        return Eu
      }
      addEvent(uu) {
        this._events.push(uu), this._events.sort(((uu, Eu) => uu.frame - Eu.frame))
      }
      removeEvents(uu) {
        for (let Eu = 0; Eu < this._events.length; Eu++) this._events[Eu].frame === uu && (this._events.splice(Eu, 1), Eu--)
      }
      getEvents() {
        return this._events
      }
      createRange(uu, Eu, ju) {
        this._ranges[uu] || (this._ranges[uu] = new Xu.b(uu, Eu, ju))
      }
      deleteRange(uu) {
        let Eu = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const ju = this._ranges[uu];
        if (ju) {
          if (Eu) {
            const uu = ju.from,
              Eu = ju.to;
            for (let ju = this._keys.length - 1; ju >= 0; ju--) this._keys[ju].frame >= uu && this._keys[ju].frame <= Eu && this._keys.splice(ju, 1)
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
        for (let Eu = 0, ju = this._keys.length; Eu < ju; Eu++) uu < this._keys[Eu].frame && (uu = this._keys[Eu].frame);
        return uu
      }
      getEasingFunction() {
        return this._easingFunction
      }
      setEasingFunction(uu) {
        this._easingFunction = uu
      }
      floatInterpolateFunction(uu, Eu, ju) {
        return (0, Zu.Lerp)(uu, Eu, ju)
      }
      floatInterpolateFunctionWithTangents(uu, Eu, ju, su, Uu) {
        return (0, Zu.Hermite)(uu, Eu, ju, su, Uu)
      }
      quaternionInterpolateFunction(uu, Eu, ju) {
        return su.i.Slerp(uu, Eu, ju)
      }
      quaternionInterpolateFunctionWithTangents(uu, Eu, ju, Uu, Zu) {
        return su.i.Hermite(uu, Eu, ju, Uu, Zu).normalize()
      }
      vector3InterpolateFunction(uu, Eu, ju) {
        return su.t.Lerp(uu, Eu, ju)
      }
      vector3InterpolateFunctionWithTangents(uu, Eu, ju, Uu, Zu) {
        return su.t.Hermite(uu, Eu, ju, Uu, Zu)
      }
      vector2InterpolateFunction(uu, Eu, ju) {
        return su.p.Lerp(uu, Eu, ju)
      }
      vector2InterpolateFunctionWithTangents(uu, Eu, ju, Uu, Zu) {
        return su.p.Hermite(uu, Eu, ju, Uu, Zu)
      }
      sizeInterpolateFunction(uu, Eu, ju) {
        return qu.e.Lerp(uu, Eu, ju)
      }
      color3InterpolateFunction(uu, Eu, ju) {
        return Uu.c.Lerp(uu, Eu, ju)
      }
      color3InterpolateFunctionWithTangents(uu, Eu, ju, su, Zu) {
        return Uu.c.Hermite(uu, Eu, ju, su, Zu)
      }
      color4InterpolateFunction(uu, Eu, ju) {
        return Uu.g.Lerp(uu, Eu, ju)
      }
      color4InterpolateFunctionWithTangents(uu, Eu, ju, su, Zu) {
        return Uu.g.Hermite(uu, Eu, ju, su, Zu)
      }
      _getKeyValue(uu) {
        return "function" === typeof uu ? uu() : uu
      }
      evaluate(uu) {
        return gu.key = 0, this._interpolate(uu, gu)
      }
      _interpolate(uu, Eu) {
        let ju = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (Eu.ZU === Mu.ANIMATIONLOOPMODE_CONSTANT && Eu.repeatCount > 0) return Eu.highLimitValue.clone ? Eu.highLimitValue.clone() : Eu.highLimitValue;
        const su = this._keys;
        let Uu;
        if (this._coreAnimation) Uu = this._coreAnimation._key;
        else {
          const Zu = su.length;
          for (Uu = Eu.key; Uu >= 0 && uu < su[Uu].frame;) --Uu;
          for (; Uu + 1 <= Zu - 1 && uu >= su[Uu + 1].frame;) ++Uu;
          if (Eu.key = Uu, Uu < 0) return ju ? void 0 : this._getKeyValue(su[0].value);
          if (Uu + 1 > Zu - 1) return ju ? void 0 : this._getKeyValue(su[Zu - 1].value);
          this._key = Uu
        }
        const Zu = su[Uu],
          Xu = su[Uu + 1];
        if (ju && (uu === Zu.frame || uu === Xu.frame)) return;
        const lu = this._getKeyValue(Zu.value),
          qu = this._getKeyValue(Xu.value);
        if (1 === Zu.interpolation) return Xu.frame > uu ? lu : qu;
        const fu = void 0 !== Zu.outTangent && void 0 !== Xu.inTangent,
          Cu = Xu.frame - Zu.frame;
        let bu = (uu - Zu.frame) / Cu;
        const gu = Zu.easingFunction || this.getEasingFunction();
        switch (gu && (bu = gu.ease(bu)), this.dataType) {
          case Mu.ANIMATIONTYPE_FLOAT: {
            const uu = fu ? this.floatInterpolateFunctionWithTangents(lu, Zu.outTangent * Cu, qu, Xu.inTangent * Cu, bu) : this.floatInterpolateFunction(lu, qu, bu);
            switch (Eu.ZU) {
              case Mu.ANIMATIONLOOPMODE_CYCLE:
              case Mu.ANIMATIONLOOPMODE_CONSTANT:
              case Mu.ANIMATIONLOOPMODE_YOYO:
                return uu;
              case Mu.ANIMATIONLOOPMODE_RELATIVE:
              case Mu.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return (Eu.offsetValue ?? 0) * Eu.repeatCount + uu
            }
            break
          }
          case Mu.ANIMATIONTYPE_QUATERNION: {
            const uu = fu ? this.quaternionInterpolateFunctionWithTangents(lu, Zu.outTangent.scale(Cu), qu, Xu.inTangent.scale(Cu), bu) : this.quaternionInterpolateFunction(lu, qu, bu);
            switch (Eu.ZU) {
              case Mu.ANIMATIONLOOPMODE_CYCLE:
              case Mu.ANIMATIONLOOPMODE_CONSTANT:
              case Mu.ANIMATIONLOOPMODE_YOYO:
                return uu;
              case Mu.ANIMATIONLOOPMODE_RELATIVE:
              case Mu.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return uu.addInPlace((Eu.offsetValue || cu).scale(Eu.repeatCount))
            }
            return uu
          }
          case Mu.ANIMATIONTYPE_VECTOR3: {
            const uu = fu ? this.vector3InterpolateFunctionWithTangents(lu, Zu.outTangent.scale(Cu), qu, Xu.inTangent.scale(Cu), bu) : this.vector3InterpolateFunction(lu, qu, bu);
            switch (Eu.ZU) {
              case Mu.ANIMATIONLOOPMODE_CYCLE:
              case Mu.ANIMATIONLOOPMODE_CONSTANT:
              case Mu.ANIMATIONLOOPMODE_YOYO:
                return uu;
              case Mu.ANIMATIONLOOPMODE_RELATIVE:
              case Mu.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return uu.add((Eu.offsetValue || Nu).scale(Eu.repeatCount))
            }
            break
          }
          case Mu.ANIMATIONTYPE_VECTOR2: {
            const uu = fu ? this.vector2InterpolateFunctionWithTangents(lu, Zu.outTangent.scale(Cu), qu, Xu.inTangent.scale(Cu), bu) : this.vector2InterpolateFunction(lu, qu, bu);
            switch (Eu.ZU) {
              case Mu.ANIMATIONLOOPMODE_CYCLE:
              case Mu.ANIMATIONLOOPMODE_CONSTANT:
              case Mu.ANIMATIONLOOPMODE_YOYO:
                return uu;
              case Mu.ANIMATIONLOOPMODE_RELATIVE:
              case Mu.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return uu.add((Eu.offsetValue || Ou).scale(Eu.repeatCount))
            }
            break
          }
          case Mu.ANIMATIONTYPE_SIZE:
            switch (Eu.ZU) {
              case Mu.ANIMATIONLOOPMODE_CYCLE:
              case Mu.ANIMATIONLOOPMODE_CONSTANT:
              case Mu.ANIMATIONLOOPMODE_YOYO:
                return this.sizeInterpolateFunction(lu, qu, bu);
              case Mu.ANIMATIONLOOPMODE_RELATIVE:
              case Mu.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return this.sizeInterpolateFunction(lu, qu, bu).add((Eu.offsetValue || Yu).scale(Eu.repeatCount))
            }
            break;
          case Mu.ANIMATIONTYPE_COLOR3: {
            const uu = fu ? this.color3InterpolateFunctionWithTangents(lu, Zu.outTangent.scale(Cu), qu, Xu.inTangent.scale(Cu), bu) : this.color3InterpolateFunction(lu, qu, bu);
            switch (Eu.ZU) {
              case Mu.ANIMATIONLOOPMODE_CYCLE:
              case Mu.ANIMATIONLOOPMODE_CONSTANT:
              case Mu.ANIMATIONLOOPMODE_YOYO:
                return uu;
              case Mu.ANIMATIONLOOPMODE_RELATIVE:
              case Mu.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return uu.add((Eu.offsetValue || hu).scale(Eu.repeatCount))
            }
            break
          }
          case Mu.ANIMATIONTYPE_COLOR4: {
            const uu = fu ? this.color4InterpolateFunctionWithTangents(lu, Zu.outTangent.scale(Cu), qu, Xu.inTangent.scale(Cu), bu) : this.color4InterpolateFunction(lu, qu, bu);
            switch (Eu.ZU) {
              case Mu.ANIMATIONLOOPMODE_CYCLE:
              case Mu.ANIMATIONLOOPMODE_CONSTANT:
              case Mu.ANIMATIONLOOPMODE_YOYO:
                return uu;
              case Mu.ANIMATIONLOOPMODE_RELATIVE:
              case Mu.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return uu.add((Eu.offsetValue || Du).scale(Eu.repeatCount))
            }
            break
          }
          case Mu.ANIMATIONTYPE_MATRIX:
            switch (Eu.ZU) {
              case Mu.ANIMATIONLOOPMODE_CYCLE:
              case Mu.ANIMATIONLOOPMODE_CONSTANT:
              case Mu.ANIMATIONLOOPMODE_YOYO:
                return Mu.AllowMatricesInterpolation ? this.matrixInterpolateFunction(lu, qu, bu, Eu.workValue) : lu;
              case Mu.ANIMATIONLOOPMODE_RELATIVE:
              case Mu.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return lu
            }
        }
        return 0
      }
      matrixInterpolateFunction(uu, Eu, ju, Uu) {
        return Mu.AllowMatrixDecomposeForInterpolation ? Uu ? (su.e.DecomposeLerpToRef(uu, Eu, ju, Uu), Uu) : su.e.DecomposeLerp(uu, Eu, ju) : Uu ? (su.e.LerpToRef(uu, Eu, ju, Uu), Uu) : su.e.Lerp(uu, Eu, ju)
      }
      clone() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const Eu = new Mu(this.name, this.targetPropertyPath.join("."), this.framePerSecond, this.dataType, this.ZU);
        if (Eu.enableBlending = this.enableBlending, Eu.blendingSpeed = this.blendingSpeed, this._keys && Eu.setKeys(this._keys, !1, uu), this._ranges) {
          Eu._ranges = {};
          for (const uu in this._ranges) {
            const ju = this._ranges[uu];
            ju && (Eu._ranges[uu] = ju.clone())
          }
        }
        return Eu
      }
      setKeys(uu) {
        let Eu = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) this._keys = uu;
        else if (this._keys = uu.slice(0), Eu)
          for (let ju = 0; ju < this._keys.length; ju++) {
            const uu = this._keys[ju];
            this._keys[ju] = {
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
        gu.key = 0;
        const Eu = this._interpolate(uu, gu, !0);
        if (!Eu) return this._keys[gu.key].frame === uu ? gu.key : gu.key + 1;
        const ju = {
          frame: uu,
          value: Eu.clone ? Eu.clone() : Eu
        };
        return this._keys.splice(gu.key + 1, 0, ju), gu.key + 1
      }
      serialize() {
        const uu = {};
        uu.name = this.name, uu.property = this.targetProperty, uu.framePerSecond = this.framePerSecond, uu.dataType = this.dataType, uu.loopBehavior = this.ZU, uu.enableBlending = this.enableBlending, uu.blendingSpeed = this.blendingSpeed;
        const Eu = this.dataType;
        uu.keys = [];
        const ju = this.getKeys();
        for (let su = 0; su < ju.length; su++) {
          const Uu = ju[su],
            Zu = {};
          switch (Zu.frame = Uu.frame, Eu) {
            case Mu.ANIMATIONTYPE_FLOAT:
              Zu.values = [Uu.value], void 0 !== Uu.inTangent && Zu.values.push(Uu.inTangent), void 0 !== Uu.outTangent && (void 0 === Uu.inTangent && Zu.values.push(void 0), Zu.values.push(Uu.outTangent)), void 0 !== Uu.interpolation && (void 0 === Uu.inTangent && Zu.values.push(void 0), void 0 === Uu.outTangent && Zu.values.push(void 0), Zu.values.push(Uu.interpolation));
              break;
            case Mu.ANIMATIONTYPE_QUATERNION:
            case Mu.ANIMATIONTYPE_MATRIX:
            case Mu.ANIMATIONTYPE_VECTOR3:
            case Mu.ANIMATIONTYPE_COLOR3:
            case Mu.ANIMATIONTYPE_COLOR4:
              Zu.values = Uu.value.Osu(), void 0 != Uu.inTangent && Zu.values.push(Uu.inTangent.Osu()), void 0 != Uu.outTangent && (void 0 === Uu.inTangent && Zu.values.push(void 0), Zu.values.push(Uu.outTangent.Osu())), void 0 !== Uu.interpolation && (void 0 === Uu.inTangent && Zu.values.push(void 0), void 0 === Uu.outTangent && Zu.values.push(void 0), Zu.values.push(Uu.interpolation))
          }
          uu.keys.push(Zu)
        }
        uu.HY = [];
        for (const su in this._ranges) {
          const Eu = this._ranges[su];
          if (!Eu) continue;
          const ju = {};
          ju.name = su, ju.from = Eu.from, ju.to = Eu.to, uu.HY.push(ju)
        }
        return uu
      }
      static _UniversalLerp(uu, Eu, ju) {
        const su = uu.constructor;
        return su.Lerp ? su.Lerp(uu, Eu, ju) : su.Slerp ? su.Slerp(uu, Eu, ju) : uu.toFixed ? uu * (1 - ju) + ju * Eu : Eu
      }
    }

    function eu(uu, Eu, ju) {
      let Uu;
      Uu = "object" === typeof Eu ? Eu : {
        referenceFrame: Eu ?? 0,
        range: ju,
        cloneOriginalAnimation: arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        clonedAnimationName: arguments.length > 4 ? arguments[4] : void 0
      };
      let Zu = uu;
      Uu.cloneOriginalAnimation && (Zu = uu.clone(), Zu.name = Uu.clonedAnimationName || Zu.name);
      const Xu = Zu.getKeys();
      if (!Xu.length) return Zu;
      const lu = Uu.referenceFrame && Uu.referenceFrame >= 0 ? Uu.referenceFrame : 0;
      let qu = 0;
      const fu = Xu[0];
      let Cu = Xu.length - 1;
      const bu = Xu[Cu],
        cu = {
          referenceValue: fu.value,
          referencePosition: su.m.dO[0],
          referenceQuaternion: su.m.Quaternion[0],
          referenceScaling: su.m.dO[1],
          keyPosition: su.m.dO[2],
          keyQuaternion: su.m.Quaternion[1],
          keyScaling: su.m.dO[3]
        };
      let Nu = fu.frame,
        Ou = bu.frame;
      if (Uu.range) {
        const uu = Zu.getRange(Uu.range);
        uu && (Nu = uu.from, Ou = uu.to)
      } else Nu = Uu.fromFrame ?? Nu, Ou = Uu.toFrame ?? Ou;
      Nu !== fu.frame && (qu = Zu.createKeyForFrame(Nu)), Ou !== bu.frame && (Cu = Zu.createKeyForFrame(Ou));
      const Yu = Zu.getKeys();
      if (1 === Yu.length) {
        const uu = Zu._getKeyValue(Yu[0].value);
        cu.referenceValue = uu.clone ? uu.clone() : uu
      } else if (lu <= fu.frame) {
        const uu = Zu._getKeyValue(fu.value);
        cu.referenceValue = uu.clone ? uu.clone() : uu
      } else if (lu >= bu.frame) {
        const uu = Zu._getKeyValue(bu.value);
        cu.referenceValue = uu.clone ? uu.clone() : uu
      } else {
        gu.key = 0;
        const uu = Zu._interpolate(lu, gu);
        cu.referenceValue = uu.clone ? uu.clone() : uu
      }
      Zu.dataType === Mu.ANIMATIONTYPE_QUATERNION ? cu.referenceValue.normalize().conjugateInPlace() : Zu.dataType === Mu.ANIMATIONTYPE_MATRIX && (cu.referenceValue.decompose(cu.referenceScaling, cu.referenceQuaternion, cu.referencePosition), cu.referenceQuaternion.normalize().conjugateInPlace());
      let hu = Number.MAX_VALUE;
      const Du = Uu.clipKeys ? [] : null;
      for (let gu = qu; gu <= Cu; gu++) {
        let uu = Yu[gu];
        if ((Du || Uu.cloneOriginalAnimation) && (uu = {
            frame: uu.frame,
            value: uu.value.clone ? uu.value.clone() : uu.value,
            inTangent: uu.inTangent,
            outTangent: uu.outTangent,
            interpolation: uu.interpolation,
            lockedTangent: uu.lockedTangent,
            easingFunction: uu.easingFunction
          }, Du && (hu === Number.MAX_VALUE && (hu = uu.frame), uu.frame -= hu, Du.push(uu))), !gu || Zu.dataType === Mu.ANIMATIONTYPE_FLOAT || uu.value !== fu.value) switch (Zu.dataType) {
          case Mu.ANIMATIONTYPE_MATRIX:
            uu.value.decompose(cu.keyScaling, cu.keyQuaternion, cu.keyPosition), cu.keyPosition.Qsu(cu.referencePosition), cu.keyScaling.divideInPlace(cu.referenceScaling), cu.referenceQuaternion.multiplyToRef(cu.keyQuaternion, cu.keyQuaternion), su.e.ComposeToRef(cu.keyScaling, cu.keyQuaternion, cu.keyPosition, uu.value);
            break;
          case Mu.ANIMATIONTYPE_QUATERNION:
            cu.referenceValue.multiplyToRef(uu.value, uu.value);
            break;
          case Mu.ANIMATIONTYPE_VECTOR2:
          case Mu.ANIMATIONTYPE_VECTOR3:
          case Mu.ANIMATIONTYPE_COLOR3:
          case Mu.ANIMATIONTYPE_COLOR4:
            uu.value.subtractToRef(cu.referenceValue, uu.value);
            break;
          case Mu.ANIMATIONTYPE_SIZE:
            uu.value.width -= cu.referenceValue.width, uu.value.height -= cu.referenceValue.height;
            break;
          default:
            uu.value -= cu.referenceValue
        }
      }
      return Du && Zu.setKeys(Du, !0), Zu
    }

    function Gu(uu, Eu, ju, su) {
      const Uu = new Mu(uu + "Animation", uu, ju, Eu, Mu.ANIMATIONLOOPMODE_CONSTANT);
      return Uu.setEasingFunction(su), Uu
    }

    function pu(uu, Eu, ju, su, Uu, Zu, Xu, lu, qu, fu, Cu) {
      const bu = Mu._PrepareAnimation(uu, ju, su, Uu, Zu, Xu, lu, qu);
      return bu ? (Eu.hV && (Cu = Eu.hV()), Cu ? Cu.beginDirectAnimation(Eu, [bu], 0, Uu, bu.ZU !== Mu.ANIMATIONLOOPMODE_CONSTANT, 1, fu) : null) : null
    }

    function wu(uu, Eu, ju, su, Uu, Zu, Xu, lu, qu, fu, Cu) {
      const bu = Mu._PrepareAnimation(uu, su, Uu, Zu, Xu, lu, qu, fu);
      if (!bu) return null;
      return Eu.hV().beginDirectHierarchyAnimation(Eu, ju, [bu], 0, Zu, 1 === bu.ZU, 1, Cu)
    }

    function Ju(uu, Eu, ju, su, Uu, Zu, Xu, lu, qu, fu) {
      const Cu = Mu._PrepareAnimation(uu, ju, su, Uu, Zu, Xu, lu, qu);
      return Cu ? (Eu.animations.push(Cu), Eu.hV().beginAnimation(Eu, 0, Uu, 1 === Cu.ZU, 1, fu)) : null
    }

    function du(uu, Eu, ju, su, Uu, Zu, Xu) {
      let lu = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
        qu = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8],
        fu = arguments.length > 9 ? arguments[9] : void 0;
      if (Xu <= 0) return ju[uu] = Eu, lu && lu(), null;
      const Cu = Uu * (Xu / 1e3);
      Zu.setKeys(fu ?? [{
        frame: 0,
        value: ju[uu].clone ? ju[uu].clone() : ju[uu]
      }, {
        frame: Cu,
        value: Eu
      }]), ju.animations || (ju.animations = []), ju.animations.push(Zu);
      return su.beginAnimation(ju, 0, Cu, !1, 1, lu ?? void 0, void 0, qu)
    }

    function au(uu, Eu) {
      Cu.e.AppendSerializedAnimations(uu, Eu)
    }

    function Pu(uu) {
      const Eu = new Mu(uu.name, uu.property, uu.framePerSecond, uu.dataType, uu.loopBehavior),
        ju = uu.dataType,
        Zu = [];
      let Xu, lu;
      for (uu.enableBlending && (Eu.enableBlending = uu.enableBlending), uu.blendingSpeed && (Eu.blendingSpeed = uu.blendingSpeed), lu = 0; lu < uu.keys.length; lu++) {
        const Eu = uu.keys[lu];
        let qu, fu, Cu;
        switch (ju) {
          case Mu.ANIMATIONTYPE_FLOAT:
            Xu = Eu.values[0], Eu.values.length >= 2 && (qu = Eu.values[1]), Eu.values.length >= 3 && (fu = Eu.values[2]), Eu.values.length >= 4 && (Cu = Eu.values[3]);
            break;
          case Mu.ANIMATIONTYPE_QUATERNION:
            if (Xu = su.i.FromArray(Eu.values), Eu.values.length >= 8) {
              const uu = su.i.FromArray(Eu.values.slice(4, 8));
              uu.equals(su.i.Zero()) || (qu = uu)
            }
            if (Eu.values.length >= 12) {
              const uu = su.i.FromArray(Eu.values.slice(8, 12));
              uu.equals(su.i.Zero()) || (fu = uu)
            }
            Eu.values.length >= 13 && (Cu = Eu.values[12]);
            break;
          case Mu.ANIMATIONTYPE_MATRIX:
            Xu = su.e.FromArray(Eu.values), Eu.values.length >= 17 && (Cu = Eu.values[16]);
            break;
          case Mu.ANIMATIONTYPE_COLOR3:
            Xu = Uu.c.FromArray(Eu.values), Eu.values[3] && (qu = Uu.c.FromArray(Eu.values[3])), Eu.values[4] && (fu = Uu.c.FromArray(Eu.values[4])), Eu.values[5] && (Cu = Eu.values[5]);
            break;
          case Mu.ANIMATIONTYPE_COLOR4:
            Xu = Uu.g.FromArray(Eu.values), Eu.values[4] && (qu = Uu.g.FromArray(Eu.values[4])), Eu.values[5] && (fu = Uu.g.FromArray(Eu.values[5])), Eu.values[6] && (Cu = Eu.values[6]);
            break;
          case Mu.ANIMATIONTYPE_VECTOR3:
          default:
            Xu = su.t.FromArray(Eu.values), Eu.values[3] && (qu = su.t.FromArray(Eu.values[3])), Eu.values[4] && (fu = su.t.FromArray(Eu.values[4])), Eu.values[5] && (Cu = Eu.values[5])
        }
        const bu = {};
        bu.frame = Eu.frame, bu.value = Xu, void 0 != qu && (bu.inTangent = qu), void 0 != fu && (bu.outTangent = fu), void 0 != Cu && (bu.interpolation = Cu), Zu.push(bu)
      }
      if (Eu.setKeys(Zu), uu.HY)
        for (lu = 0; lu < uu.HY.length; lu++) Xu = uu.HY[lu], Eu.createRange(Xu.name, Xu.from, Xu.to);
      return Eu
    }
    async function ou(uu, Eu) {
      return await new Promise(((ju, su) => {
        const Uu = new fu.b;
        Uu.addEventListener("readystatechange", (() => {
          if (4 == Uu.readyState)
            if (200 == Uu.status) {
              let Eu = JSON.parse(Uu.responseText);
              if (Eu.animations && (Eu = Eu.animations), Eu.length) {
                const uu = [];
                for (const ju of Eu) uu.push(Pu(ju));
                ju(uu)
              } else {
                const su = Pu(Eu);
                uu && (su.name = uu), ju(su)
              }
            } else su("Unable to load the animation")
        })), Uu.open("GET", Eu), Uu.send()
      }))
    }
    async function ku(uu) {
      const Eu = this?.SnippetUrl ?? Mu.SnippetUrl;
      return await new Promise(((ju, su) => {
        const Uu = new fu.b;
        Uu.addEventListener("readystatechange", (() => {
          if (4 == Uu.readyState)
            if (200 == Uu.status) {
              const Eu = JSON.parse(JSON.parse(Uu.responseText).jsonPayload);
              if (Eu.animations) {
                const su = JSON.parse(Eu.animations),
                  Uu = [];
                for (const Eu of su.animations) {
                  const ju = Pu(Eu);
                  ju.snippetId = uu, Uu.push(ju)
                }
                ju(Uu)
              } else {
                const su = Pu(JSON.parse(Eu.animation));
                su.snippetId = uu, ju(su)
              }
            } else su("Unable to load the snippet " + uu)
        })), Uu.open("GET", Eu + "/" + uu.replace(/#/g, "/")), Uu.send()
      }))
    }
    Mu._UniqueIdGenerator = 0, Mu.AllowMatricesInterpolation = !1, Mu.AllowMatrixDecomposeForInterpolation = !0, Mu.InheritOriginalValueFromActiveAnimations = !1, Mu.SnippetUrl = "https://snippet.babylonjs.com", Mu.ANIMATIONTYPE_FLOAT = 0, Mu.ANIMATIONTYPE_VECTOR3 = 1, Mu.ANIMATIONTYPE_QUATERNION = 2, Mu.ANIMATIONTYPE_MATRIX = 3, Mu.ANIMATIONTYPE_COLOR3 = 4, Mu.ANIMATIONTYPE_COLOR4 = 7, Mu.ANIMATIONTYPE_VECTOR2 = 5, Mu.ANIMATIONTYPE_SIZE = 6, Mu.ANIMATIONLOOPMODE_RELATIVE = 0, Mu.ANIMATIONLOOPMODE_CYCLE = 1, Mu.ANIMATIONLOOPMODE_CONSTANT = 2, Mu.ANIMATIONLOOPMODE_YOYO = 4, Mu.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT = 5;
    const mu = ku;
    let vu = !1;

    function Ku() {
      vu || (vu = !0, Mu.Parse = Pu, Mu.ParseFromFileAsync = ou, Mu.ParseFromSnippetAsync = ku, Mu.CreateFromSnippetAsync = mu, Mu.CreateAnimation = Gu, Mu.CreateAndStartAnimation = pu, Mu.CreateAndStartHierarchyAnimation = wu, Mu.CreateMergeAndStartAnimation = Ju, Mu.MakeAnimationAdditive = eu, Mu.TransitionTo = du, Mu.AppendSerializedAnimations = au, (0, bu.f)("BABYLON.Animation", Mu), lu.c._AnimationRangeFactory = (uu, Eu, ju) => new Xu.b(uu, Eu, ju))
    }
  },
  41321: (uu, Eu, ju) => {
    ju.d(Eu, {
      b: () => su
    });
    class su {
      constructor(uu, Eu, ju) {
        this.name = uu, this.from = Eu, this.to = ju
      }
      clone() {
        return new su(this.name, this.from, this.to)
      }
    }
  },
  41378: (uu, Eu, ju) => {
    ju.d(Eu, {
      d: () => su.b,
      e: () => su.j
    });
    var su = ju(40399);
    (0, su.d)()
  },
  41360: (uu, Eu, ju) => {
    ju.d(Eu, {
      c: () => su.g
    });
    var su = ju(40739);
    (0, su.e)()
  },
  41335: (uu, Eu, ju) => {
    ju.d(Eu, {
      c: () => su.b
    });
    var su = ju(40731);
    (0, su.c)()
  },
  41387: (uu, Eu, ju) => {
    ju.d(Eu, {
      d: () => su.e
    });
    var su = ju(40661);
    (0, su.f)()
  },
  41329: (uu, Eu, ju) => {
    ju.d(Eu, {
      e: () => su.e
    });
    var su = ju(40706);
    (0, su.d)()
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);