export const id = 264;
export const ids = [264];
export const modules = {
  40185: (zz, tz, sz) => {
    sz.d(tz, {
      d: () => Pz,
      h: () => jz,
      i: () => gz,
      j: () => Hz,
      k: () => Nz,
      l: () => Dz,
      m: () => wz,
      q: () => bz
    });
    var Fz = sz(36475),
      Wz = sz(36654),
      Xz = sz(36507),
      Oz = sz(40190),
      oz = sz(39374),
      vz = sz(39179),
      Uz = sz(39213),
      Kz = sz(39181),
      uz = sz(36518);
    const Nz = Object.freeze(new Fz.h(0, 0, 0, 0)),
      bz = Object.freeze(Fz.p.Zero()),
      wz = Object.freeze(Fz.n.Zero()),
      Dz = Object.freeze(vz.e.Zero()),
      gz = Object.freeze(Wz.c.Black()),
      Hz = Object.freeze(new Wz.d(0, 0, 0, 0)),
      Bz = {
        key: 0,
        repeatCount: 0,
        hX: 2
      };
    class Pz {
      static _PrepareAnimation(zz, tz, sz, Xz, Oz, oz, Uz, Kz) {
        let uz;
        if (!isNaN(parseFloat(Oz)) && isFinite(Oz) ? uz = Pz.ANIMATIONTYPE_FLOAT : Oz instanceof Fz.h ? uz = Pz.ANIMATIONTYPE_QUATERNION : Oz instanceof Fz.p ? uz = Pz.ANIMATIONTYPE_VECTOR3 : Oz instanceof Fz.n ? uz = Pz.ANIMATIONTYPE_VECTOR2 : Oz instanceof Wz.c ? uz = Pz.ANIMATIONTYPE_COLOR3 : Oz instanceof Wz.d ? uz = Pz.ANIMATIONTYPE_COLOR4 : Oz instanceof vz.e && (uz = Pz.ANIMATIONTYPE_SIZE), void 0 == uz) return null;
        const Nz = new Pz(zz, tz, sz, uz, Uz),
          bz = [{
            frame: 0,
            value: Oz
          }, {
            frame: Xz,
            value: oz
          }];
        return Nz.setKeys(bz), void 0 !== Kz && Nz.setEasingFunction(Kz), Nz
      }
      get runtimeAnimations() {
        return this._runtimeAnimations
      }
      get hasRunningRuntimeAnimations() {
        for (const zz of this._runtimeAnimations)
          if (!zz.isStopped()) return !0;
        return !1
      }
      constructor(zz, tz, sz, Fz, Wz, Xz) {
        this.name = zz, this.targetProperty = tz, this.framePerSecond = sz, this.dataType = Fz, this.hX = Wz, this.enableBlending = Xz, this._easingFunction = null, this._runtimeAnimations = new Array, this._events = new Array, this.blendingSpeed = .01, this._ranges = {}, this._coreAnimation = null, this.targetPropertyPath = tz.split("."), this.dataType = Fz, this.hX = void 0 === Wz ? Pz.ANIMATIONLOOPMODE_CYCLE : Wz, this.uniqueId = Pz._UniqueIdGenerator++
      }
      toString(zz) {
        let tz = "Name: " + this.name + ", property: " + this.targetProperty;
        if (tz += ", datatype: " + ["Float", "XD", "Quaternion", "Matrix", "Color3", "Vector2"][this.dataType], tz += ", nKeys: " + (this._keys ? this._keys.length : "none"), tz += ", nRanges: " + (this._ranges ? Object.keys(this._ranges).length : "none"), zz) {
          tz += ", Ranges: {";
          let zz = !0;
          for (const sz in this._ranges) zz || (tz += ", "), zz = !1, tz += sz;
          tz += "}"
        }
        return tz
      }
      addEvent(zz) {
        this._events.push(zz), this._events.sort(((zz, tz) => zz.frame - tz.frame))
      }
      removeEvents(zz) {
        for (let tz = 0; tz < this._events.length; tz++) this._events[tz].frame === zz && (this._events.splice(tz, 1), tz--)
      }
      getEvents() {
        return this._events
      }
      createRange(zz, tz, sz) {
        this._ranges[zz] || (this._ranges[zz] = new Oz.e(zz, tz, sz))
      }
      deleteRange(zz) {
        let tz = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const sz = this._ranges[zz];
        if (sz) {
          if (tz) {
            const zz = sz.from,
              tz = sz.to;
            for (let sz = this._keys.length - 1; sz >= 0; sz--) this._keys[sz].frame >= zz && this._keys[sz].frame <= tz && this._keys.splice(sz, 1)
          }
          this._ranges[zz] = null
        }
      }
      getRange(zz) {
        return this._ranges[zz]
      }
      getKeys() {
        return this._keys
      }
      getHighestFrame() {
        let zz = 0;
        for (let tz = 0, sz = this._keys.length; tz < sz; tz++) zz < this._keys[tz].frame && (zz = this._keys[tz].frame);
        return zz
      }
      getEasingFunction() {
        return this._easingFunction
      }
      setEasingFunction(zz) {
        this._easingFunction = zz
      }
      floatInterpolateFunction(zz, tz, sz) {
        return (0, Xz.Lerp)(zz, tz, sz)
      }
      floatInterpolateFunctionWithTangents(zz, tz, sz, Fz, Wz) {
        return (0, Xz.Hermite)(zz, tz, sz, Fz, Wz)
      }
      quaternionInterpolateFunction(zz, tz, sz) {
        return Fz.h.Slerp(zz, tz, sz)
      }
      quaternionInterpolateFunctionWithTangents(zz, tz, sz, Wz, Xz) {
        return Fz.h.Hermite(zz, tz, sz, Wz, Xz).normalize()
      }
      vector3InterpolateFunction(zz, tz, sz) {
        return Fz.p.Lerp(zz, tz, sz)
      }
      vector3InterpolateFunctionWithTangents(zz, tz, sz, Wz, Xz) {
        return Fz.p.Hermite(zz, tz, sz, Wz, Xz)
      }
      vector2InterpolateFunction(zz, tz, sz) {
        return Fz.n.Lerp(zz, tz, sz)
      }
      vector2InterpolateFunctionWithTangents(zz, tz, sz, Wz, Xz) {
        return Fz.n.Hermite(zz, tz, sz, Wz, Xz)
      }
      sizeInterpolateFunction(zz, tz, sz) {
        return vz.e.Lerp(zz, tz, sz)
      }
      color3InterpolateFunction(zz, tz, sz) {
        return Wz.c.Lerp(zz, tz, sz)
      }
      color3InterpolateFunctionWithTangents(zz, tz, sz, Fz, Xz) {
        return Wz.c.Hermite(zz, tz, sz, Fz, Xz)
      }
      color4InterpolateFunction(zz, tz, sz) {
        return Wz.d.Lerp(zz, tz, sz)
      }
      color4InterpolateFunctionWithTangents(zz, tz, sz, Fz, Xz) {
        return Wz.d.Hermite(zz, tz, sz, Fz, Xz)
      }
      _getKeyValue(zz) {
        return "function" === typeof zz ? zz() : zz
      }
      evaluate(zz) {
        return Bz.key = 0, this._interpolate(zz, Bz)
      }
      _interpolate(zz, tz) {
        let sz = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (tz.hX === Pz.ANIMATIONLOOPMODE_CONSTANT && tz.repeatCount > 0) return tz.highLimitValue.clone ? tz.highLimitValue.clone() : tz.highLimitValue;
        const Fz = this._keys;
        let Wz;
        if (this._coreAnimation) Wz = this._coreAnimation._key;
        else {
          const Xz = Fz.length;
          for (Wz = tz.key; Wz >= 0 && zz < Fz[Wz].frame;) --Wz;
          for (; Wz + 1 <= Xz - 1 && zz >= Fz[Wz + 1].frame;) ++Wz;
          if (tz.key = Wz, Wz < 0) return sz ? void 0 : this._getKeyValue(Fz[0].value);
          if (Wz + 1 > Xz - 1) return sz ? void 0 : this._getKeyValue(Fz[Xz - 1].value);
          this._key = Wz
        }
        const Xz = Fz[Wz],
          Oz = Fz[Wz + 1];
        if (sz && (zz === Xz.frame || zz === Oz.frame)) return;
        const oz = this._getKeyValue(Xz.value),
          vz = this._getKeyValue(Oz.value);
        if (1 === Xz.interpolation) return Oz.frame > zz ? oz : vz;
        const Uz = void 0 !== Xz.outTangent && void 0 !== Oz.inTangent,
          Kz = Oz.frame - Xz.frame;
        let uz = (zz - Xz.frame) / Kz;
        const Bz = Xz.easingFunction || this.getEasingFunction();
        switch (Bz && (uz = Bz.ease(uz)), this.dataType) {
          case Pz.ANIMATIONTYPE_FLOAT: {
            const zz = Uz ? this.floatInterpolateFunctionWithTangents(oz, Xz.outTangent * Kz, vz, Oz.inTangent * Kz, uz) : this.floatInterpolateFunction(oz, vz, uz);
            switch (tz.hX) {
              case Pz.ANIMATIONLOOPMODE_CYCLE:
              case Pz.ANIMATIONLOOPMODE_CONSTANT:
              case Pz.ANIMATIONLOOPMODE_YOYO:
                return zz;
              case Pz.ANIMATIONLOOPMODE_RELATIVE:
              case Pz.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return (tz.offsetValue ?? 0) * tz.repeatCount + zz
            }
            break
          }
          case Pz.ANIMATIONTYPE_QUATERNION: {
            const zz = Uz ? this.quaternionInterpolateFunctionWithTangents(oz, Xz.outTangent.scale(Kz), vz, Oz.inTangent.scale(Kz), uz) : this.quaternionInterpolateFunction(oz, vz, uz);
            switch (tz.hX) {
              case Pz.ANIMATIONLOOPMODE_CYCLE:
              case Pz.ANIMATIONLOOPMODE_CONSTANT:
              case Pz.ANIMATIONLOOPMODE_YOYO:
                return zz;
              case Pz.ANIMATIONLOOPMODE_RELATIVE:
              case Pz.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return zz.addInPlace((tz.offsetValue || Nz).scale(tz.repeatCount))
            }
            return zz
          }
          case Pz.ANIMATIONTYPE_VECTOR3: {
            const zz = Uz ? this.vector3InterpolateFunctionWithTangents(oz, Xz.outTangent.scale(Kz), vz, Oz.inTangent.scale(Kz), uz) : this.vector3InterpolateFunction(oz, vz, uz);
            switch (tz.hX) {
              case Pz.ANIMATIONLOOPMODE_CYCLE:
              case Pz.ANIMATIONLOOPMODE_CONSTANT:
              case Pz.ANIMATIONLOOPMODE_YOYO:
                return zz;
              case Pz.ANIMATIONLOOPMODE_RELATIVE:
              case Pz.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return zz.add((tz.offsetValue || bz).scale(tz.repeatCount))
            }
            break
          }
          case Pz.ANIMATIONTYPE_VECTOR2: {
            const zz = Uz ? this.vector2InterpolateFunctionWithTangents(oz, Xz.outTangent.scale(Kz), vz, Oz.inTangent.scale(Kz), uz) : this.vector2InterpolateFunction(oz, vz, uz);
            switch (tz.hX) {
              case Pz.ANIMATIONLOOPMODE_CYCLE:
              case Pz.ANIMATIONLOOPMODE_CONSTANT:
              case Pz.ANIMATIONLOOPMODE_YOYO:
                return zz;
              case Pz.ANIMATIONLOOPMODE_RELATIVE:
              case Pz.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return zz.add((tz.offsetValue || wz).scale(tz.repeatCount))
            }
            break
          }
          case Pz.ANIMATIONTYPE_SIZE:
            switch (tz.hX) {
              case Pz.ANIMATIONLOOPMODE_CYCLE:
              case Pz.ANIMATIONLOOPMODE_CONSTANT:
              case Pz.ANIMATIONLOOPMODE_YOYO:
                return this.sizeInterpolateFunction(oz, vz, uz);
              case Pz.ANIMATIONLOOPMODE_RELATIVE:
              case Pz.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return this.sizeInterpolateFunction(oz, vz, uz).add((tz.offsetValue || Dz).scale(tz.repeatCount))
            }
            break;
          case Pz.ANIMATIONTYPE_COLOR3: {
            const zz = Uz ? this.color3InterpolateFunctionWithTangents(oz, Xz.outTangent.scale(Kz), vz, Oz.inTangent.scale(Kz), uz) : this.color3InterpolateFunction(oz, vz, uz);
            switch (tz.hX) {
              case Pz.ANIMATIONLOOPMODE_CYCLE:
              case Pz.ANIMATIONLOOPMODE_CONSTANT:
              case Pz.ANIMATIONLOOPMODE_YOYO:
                return zz;
              case Pz.ANIMATIONLOOPMODE_RELATIVE:
              case Pz.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return zz.add((tz.offsetValue || gz).scale(tz.repeatCount))
            }
            break
          }
          case Pz.ANIMATIONTYPE_COLOR4: {
            const zz = Uz ? this.color4InterpolateFunctionWithTangents(oz, Xz.outTangent.scale(Kz), vz, Oz.inTangent.scale(Kz), uz) : this.color4InterpolateFunction(oz, vz, uz);
            switch (tz.hX) {
              case Pz.ANIMATIONLOOPMODE_CYCLE:
              case Pz.ANIMATIONLOOPMODE_CONSTANT:
              case Pz.ANIMATIONLOOPMODE_YOYO:
                return zz;
              case Pz.ANIMATIONLOOPMODE_RELATIVE:
              case Pz.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return zz.add((tz.offsetValue || Hz).scale(tz.repeatCount))
            }
            break
          }
          case Pz.ANIMATIONTYPE_MATRIX:
            switch (tz.hX) {
              case Pz.ANIMATIONLOOPMODE_CYCLE:
              case Pz.ANIMATIONLOOPMODE_CONSTANT:
              case Pz.ANIMATIONLOOPMODE_YOYO:
                return Pz.AllowMatricesInterpolation ? this.matrixInterpolateFunction(oz, vz, uz, tz.workValue) : oz;
              case Pz.ANIMATIONLOOPMODE_RELATIVE:
              case Pz.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return oz
            }
        }
        return 0
      }
      matrixInterpolateFunction(zz, tz, sz, Wz) {
        return Pz.AllowMatrixDecomposeForInterpolation ? Wz ? (Fz.e.DecomposeLerpToRef(zz, tz, sz, Wz), Wz) : Fz.e.DecomposeLerp(zz, tz, sz) : Wz ? (Fz.e.LerpToRef(zz, tz, sz, Wz), Wz) : Fz.e.Lerp(zz, tz, sz)
      }
      clone() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const tz = new Pz(this.name, this.targetPropertyPath.join("."), this.framePerSecond, this.dataType, this.hX);
        if (tz.enableBlending = this.enableBlending, tz.blendingSpeed = this.blendingSpeed, this._keys && tz.setKeys(this._keys, !1, zz), this._ranges) {
          tz._ranges = {};
          for (const zz in this._ranges) {
            const sz = this._ranges[zz];
            sz && (tz._ranges[zz] = sz.clone())
          }
        }
        return tz
      }
      setKeys(zz) {
        let tz = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) this._keys = zz;
        else if (this._keys = zz.slice(0), tz)
          for (let sz = 0; sz < this._keys.length; sz++) {
            const zz = this._keys[sz];
            this._keys[sz] = {
              frame: zz.frame,
              value: zz.value.clone ? zz.value.clone() : zz.value,
              inTangent: zz.inTangent && zz.inTangent.clone ? zz.inTangent.clone() : zz.inTangent,
              outTangent: zz.outTangent && zz.outTangent.clone ? zz.outTangent.clone() : zz.outTangent,
              interpolation: zz.interpolation,
              lockedTangent: zz.lockedTangent,
              easingFunction: zz.easingFunction
            }
          }
      }
      createKeyForFrame(zz) {
        Bz.key = 0;
        const tz = this._interpolate(zz, Bz, !0);
        if (!tz) return this._keys[Bz.key].frame === zz ? Bz.key : Bz.key + 1;
        const sz = {
          frame: zz,
          value: tz.clone ? tz.clone() : tz
        };
        return this._keys.splice(Bz.key + 1, 0, sz), Bz.key + 1
      }
      serialize() {
        const zz = {};
        zz.name = this.name, zz.property = this.targetProperty, zz.framePerSecond = this.framePerSecond, zz.dataType = this.dataType, zz.loopBehavior = this.hX, zz.enableBlending = this.enableBlending, zz.blendingSpeed = this.blendingSpeed;
        const tz = this.dataType;
        zz.keys = [];
        const sz = this.getKeys();
        for (let Fz = 0; Fz < sz.length; Fz++) {
          const Wz = sz[Fz],
            Xz = {};
          switch (Xz.frame = Wz.frame, tz) {
            case Pz.ANIMATIONTYPE_FLOAT:
              Xz.values = [Wz.value], void 0 !== Wz.inTangent && Xz.values.push(Wz.inTangent), void 0 !== Wz.outTangent && (void 0 === Wz.inTangent && Xz.values.push(void 0), Xz.values.push(Wz.outTangent)), void 0 !== Wz.interpolation && (void 0 === Wz.inTangent && Xz.values.push(void 0), void 0 === Wz.outTangent && Xz.values.push(void 0), Xz.values.push(Wz.interpolation));
              break;
            case Pz.ANIMATIONTYPE_QUATERNION:
            case Pz.ANIMATIONTYPE_MATRIX:
            case Pz.ANIMATIONTYPE_VECTOR3:
            case Pz.ANIMATIONTYPE_COLOR3:
            case Pz.ANIMATIONTYPE_COLOR4:
              Xz.values = Wz.value.hsz(), void 0 != Wz.inTangent && Xz.values.push(Wz.inTangent.hsz()), void 0 != Wz.outTangent && (void 0 === Wz.inTangent && Xz.values.push(void 0), Xz.values.push(Wz.outTangent.hsz())), void 0 !== Wz.interpolation && (void 0 === Wz.inTangent && Xz.values.push(void 0), void 0 === Wz.outTangent && Xz.values.push(void 0), Xz.values.push(Wz.interpolation))
          }
          zz.keys.push(Xz)
        }
        zz.du = [];
        for (const Fz in this._ranges) {
          const tz = this._ranges[Fz];
          if (!tz) continue;
          const sz = {};
          sz.name = Fz, sz.from = tz.from, sz.to = tz.to, zz.du.push(sz)
        }
        return zz
      }
      static _UniversalLerp(zz, tz, sz) {
        const Fz = zz.constructor;
        return Fz.Lerp ? Fz.Lerp(zz, tz, sz) : Fz.Slerp ? Fz.Slerp(zz, tz, sz) : zz.toFixed ? zz * (1 - sz) + sz * tz : tz
      }
    }

    function rz(zz, tz, sz) {
      let Wz;
      Wz = "object" === typeof tz ? tz : {
        referenceFrame: tz ?? 0,
        range: sz,
        cloneOriginalAnimation: arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        clonedAnimationName: arguments.length > 4 ? arguments[4] : void 0
      };
      let Xz = zz;
      Wz.cloneOriginalAnimation && (Xz = zz.clone(), Xz.name = Wz.clonedAnimationName || Xz.name);
      const Oz = Xz.getKeys();
      if (!Oz.length) return Xz;
      const oz = Wz.referenceFrame && Wz.referenceFrame >= 0 ? Wz.referenceFrame : 0;
      let vz = 0;
      const Uz = Oz[0];
      let Kz = Oz.length - 1;
      const uz = Oz[Kz],
        Nz = {
          referenceValue: Uz.value,
          referencePosition: Fz.m.XD[0],
          referenceQuaternion: Fz.m.Quaternion[0],
          referenceScaling: Fz.m.XD[1],
          keyPosition: Fz.m.XD[2],
          keyQuaternion: Fz.m.Quaternion[1],
          keyScaling: Fz.m.XD[3]
        };
      let bz = Uz.frame,
        wz = uz.frame;
      if (Wz.range) {
        const zz = Xz.getRange(Wz.range);
        zz && (bz = zz.from, wz = zz.to)
      } else bz = Wz.fromFrame ?? bz, wz = Wz.toFrame ?? wz;
      bz !== Uz.frame && (vz = Xz.createKeyForFrame(bz)), wz !== uz.frame && (Kz = Xz.createKeyForFrame(wz));
      const Dz = Xz.getKeys();
      if (1 === Dz.length) {
        const zz = Xz._getKeyValue(Dz[0].value);
        Nz.referenceValue = zz.clone ? zz.clone() : zz
      } else if (oz <= Uz.frame) {
        const zz = Xz._getKeyValue(Uz.value);
        Nz.referenceValue = zz.clone ? zz.clone() : zz
      } else if (oz >= uz.frame) {
        const zz = Xz._getKeyValue(uz.value);
        Nz.referenceValue = zz.clone ? zz.clone() : zz
      } else {
        Bz.key = 0;
        const zz = Xz._interpolate(oz, Bz);
        Nz.referenceValue = zz.clone ? zz.clone() : zz
      }
      Xz.dataType === Pz.ANIMATIONTYPE_QUATERNION ? Nz.referenceValue.normalize().conjugateInPlace() : Xz.dataType === Pz.ANIMATIONTYPE_MATRIX && (Nz.referenceValue.decompose(Nz.referenceScaling, Nz.referenceQuaternion, Nz.referencePosition), Nz.referenceQuaternion.normalize().conjugateInPlace());
      let gz = Number.MAX_VALUE;
      const Hz = Wz.clipKeys ? [] : null;
      for (let Bz = vz; Bz <= Kz; Bz++) {
        let zz = Dz[Bz];
        if ((Hz || Wz.cloneOriginalAnimation) && (zz = {
            frame: zz.frame,
            value: zz.value.clone ? zz.value.clone() : zz.value,
            inTangent: zz.inTangent,
            outTangent: zz.outTangent,
            interpolation: zz.interpolation,
            lockedTangent: zz.lockedTangent,
            easingFunction: zz.easingFunction
          }, Hz && (gz === Number.MAX_VALUE && (gz = zz.frame), zz.frame -= gz, Hz.push(zz))), !Bz || Xz.dataType === Pz.ANIMATIONTYPE_FLOAT || zz.value !== Uz.value) switch (Xz.dataType) {
          case Pz.ANIMATIONTYPE_MATRIX:
            zz.value.decompose(Nz.keyScaling, Nz.keyQuaternion, Nz.keyPosition), Nz.keyPosition.oFz(Nz.referencePosition), Nz.keyScaling.divideInPlace(Nz.referenceScaling), Nz.referenceQuaternion.multiplyToRef(Nz.keyQuaternion, Nz.keyQuaternion), Fz.e.ComposeToRef(Nz.keyScaling, Nz.keyQuaternion, Nz.keyPosition, zz.value);
            break;
          case Pz.ANIMATIONTYPE_QUATERNION:
            Nz.referenceValue.multiplyToRef(zz.value, zz.value);
            break;
          case Pz.ANIMATIONTYPE_VECTOR2:
          case Pz.ANIMATIONTYPE_VECTOR3:
          case Pz.ANIMATIONTYPE_COLOR3:
          case Pz.ANIMATIONTYPE_COLOR4:
            zz.value.subtractToRef(Nz.referenceValue, zz.value);
            break;
          case Pz.ANIMATIONTYPE_SIZE:
            zz.value.width -= Nz.referenceValue.width, zz.value.height -= Nz.referenceValue.height;
            break;
          default:
            zz.value -= Nz.referenceValue
        }
      }
      return Hz && Xz.setKeys(Hz, !0), Xz
    }

    function Yz(zz, tz, sz, Fz) {
      const Wz = new Pz(zz + "Animation", zz, sz, tz, Pz.ANIMATIONLOOPMODE_CONSTANT);
      return Wz.setEasingFunction(Fz), Wz
    }

    function xz(zz, tz, sz, Fz, Wz, Xz, Oz, oz, vz, Uz, Kz) {
      const uz = Pz._PrepareAnimation(zz, sz, Fz, Wz, Xz, Oz, oz, vz);
      return uz ? (tz.aJ && (Kz = tz.aJ()), Kz ? Kz.beginDirectAnimation(tz, [uz], 0, Wz, uz.hX !== Pz.ANIMATIONLOOPMODE_CONSTANT, 1, Uz) : null) : null
    }

    function mz(zz, tz, sz, Fz, Wz, Xz, Oz, oz, vz, Uz, Kz) {
      const uz = Pz._PrepareAnimation(zz, Fz, Wz, Xz, Oz, oz, vz, Uz);
      if (!uz) return null;
      return tz.aJ().beginDirectHierarchyAnimation(tz, sz, [uz], 0, Xz, 1 === uz.hX, 1, Kz)
    }

    function Jz(zz, tz, sz, Fz, Wz, Xz, Oz, oz, vz, Uz) {
      const Kz = Pz._PrepareAnimation(zz, sz, Fz, Wz, Xz, Oz, oz, vz);
      return Kz ? (tz.animations.push(Kz), tz.aJ().beginAnimation(tz, 0, Wz, 1 === Kz.hX, 1, Uz)) : null
    }

    function Iz(zz, tz, sz, Fz, Wz, Xz, Oz) {
      let oz = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
        vz = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8],
        Uz = arguments.length > 9 ? arguments[9] : void 0;
      if (Oz <= 0) return sz[zz] = tz, oz && oz(), null;
      const Kz = Wz * (Oz / 1e3);
      Xz.setKeys(Uz ?? [{
        frame: 0,
        value: sz[zz].clone ? sz[zz].clone() : sz[zz]
      }, {
        frame: Kz,
        value: tz
      }]), sz.animations || (sz.animations = []), sz.animations.push(Xz);
      return Fz.beginAnimation(sz, 0, Kz, !1, 1, oz ?? void 0, void 0, vz)
    }

    function Cz(zz, tz) {
      Kz.e.AppendSerializedAnimations(zz, tz)
    }

    function ez(zz) {
      const tz = new Pz(zz.name, zz.property, zz.framePerSecond, zz.dataType, zz.loopBehavior),
        sz = zz.dataType,
        Xz = [];
      let Oz, oz;
      for (zz.enableBlending && (tz.enableBlending = zz.enableBlending), zz.blendingSpeed && (tz.blendingSpeed = zz.blendingSpeed), oz = 0; oz < zz.keys.length; oz++) {
        const tz = zz.keys[oz];
        let vz, Uz, Kz;
        switch (sz) {
          case Pz.ANIMATIONTYPE_FLOAT:
            Oz = tz.values[0], tz.values.length >= 2 && (vz = tz.values[1]), tz.values.length >= 3 && (Uz = tz.values[2]), tz.values.length >= 4 && (Kz = tz.values[3]);
            break;
          case Pz.ANIMATIONTYPE_QUATERNION:
            if (Oz = Fz.h.FromArray(tz.values), tz.values.length >= 8) {
              const zz = Fz.h.FromArray(tz.values.slice(4, 8));
              zz.equals(Fz.h.Zero()) || (vz = zz)
            }
            if (tz.values.length >= 12) {
              const zz = Fz.h.FromArray(tz.values.slice(8, 12));
              zz.equals(Fz.h.Zero()) || (Uz = zz)
            }
            tz.values.length >= 13 && (Kz = tz.values[12]);
            break;
          case Pz.ANIMATIONTYPE_MATRIX:
            Oz = Fz.e.FromArray(tz.values), tz.values.length >= 17 && (Kz = tz.values[16]);
            break;
          case Pz.ANIMATIONTYPE_COLOR3:
            Oz = Wz.c.FromArray(tz.values), tz.values[3] && (vz = Wz.c.FromArray(tz.values[3])), tz.values[4] && (Uz = Wz.c.FromArray(tz.values[4])), tz.values[5] && (Kz = tz.values[5]);
            break;
          case Pz.ANIMATIONTYPE_COLOR4:
            Oz = Wz.d.FromArray(tz.values), tz.values[4] && (vz = Wz.d.FromArray(tz.values[4])), tz.values[5] && (Uz = Wz.d.FromArray(tz.values[5])), tz.values[6] && (Kz = tz.values[6]);
            break;
          case Pz.ANIMATIONTYPE_VECTOR3:
          default:
            Oz = Fz.p.FromArray(tz.values), tz.values[3] && (vz = Fz.p.FromArray(tz.values[3])), tz.values[4] && (Uz = Fz.p.FromArray(tz.values[4])), tz.values[5] && (Kz = tz.values[5])
        }
        const uz = {};
        uz.frame = tz.frame, uz.value = Oz, void 0 != vz && (uz.inTangent = vz), void 0 != Uz && (uz.outTangent = Uz), void 0 != Kz && (uz.interpolation = Kz), Xz.push(uz)
      }
      if (tz.setKeys(Xz), zz.du)
        for (oz = 0; oz < zz.du.length; oz++) Oz = zz.du[oz], tz.createRange(Oz.name, Oz.from, Oz.to);
      return tz
    }
    async function Zz(zz, tz) {
      return await new Promise(((sz, Fz) => {
        const Wz = new Uz.d;
        Wz.addEventListener("readystatechange", (() => {
          if (4 == Wz.readyState)
            if (200 == Wz.status) {
              let tz = JSON.parse(Wz.responseText);
              if (tz.animations && (tz = tz.animations), tz.length) {
                const zz = [];
                for (const sz of tz) zz.push(ez(sz));
                sz(zz)
              } else {
                const Fz = ez(tz);
                zz && (Fz.name = zz), sz(Fz)
              }
            } else Fz("Unable to load the animation")
        })), Wz.open("GET", tz), Wz.send()
      }))
    }
    async function Gz(zz) {
      const tz = this?.SnippetUrl ?? Pz.SnippetUrl;
      return await new Promise(((sz, Fz) => {
        const Wz = new Uz.d;
        Wz.addEventListener("readystatechange", (() => {
          if (4 == Wz.readyState)
            if (200 == Wz.status) {
              const tz = JSON.parse(JSON.parse(Wz.responseText).jsonPayload);
              if (tz.animations) {
                const Fz = JSON.parse(tz.animations),
                  Wz = [];
                for (const tz of Fz.animations) {
                  const sz = ez(tz);
                  sz.snippetId = zz, Wz.push(sz)
                }
                sz(Wz)
              } else {
                const Fz = ez(JSON.parse(tz.animation));
                Fz.snippetId = zz, sz(Fz)
              }
            } else Fz("Unable to load the snippet " + zz)
        })), Wz.open("GET", tz + "/" + zz.replace(/#/g, "/")), Wz.send()
      }))
    }
    Pz._UniqueIdGenerator = 0, Pz.AllowMatricesInterpolation = !1, Pz.AllowMatrixDecomposeForInterpolation = !0, Pz.InheritOriginalValueFromActiveAnimations = !1, Pz.SnippetUrl = "https://snippet.babylonjs.com", Pz.ANIMATIONTYPE_FLOAT = 0, Pz.ANIMATIONTYPE_VECTOR3 = 1, Pz.ANIMATIONTYPE_QUATERNION = 2, Pz.ANIMATIONTYPE_MATRIX = 3, Pz.ANIMATIONTYPE_COLOR3 = 4, Pz.ANIMATIONTYPE_COLOR4 = 7, Pz.ANIMATIONTYPE_VECTOR2 = 5, Pz.ANIMATIONTYPE_SIZE = 6, Pz.ANIMATIONLOOPMODE_RELATIVE = 0, Pz.ANIMATIONLOOPMODE_CYCLE = 1, Pz.ANIMATIONLOOPMODE_CONSTANT = 2, Pz.ANIMATIONLOOPMODE_YOYO = 4, Pz.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT = 5;
    const Tz = Gz;
    let cz = !1;

    function jz() {
      cz || (cz = !0, Pz.Parse = ez, Pz.ParseFromFileAsync = Zz, Pz.ParseFromSnippetAsync = Gz, Pz.CreateFromSnippetAsync = Tz, Pz.CreateAnimation = Yz, Pz.CreateAndStartAnimation = xz, Pz.CreateAndStartHierarchyAnimation = mz, Pz.CreateMergeAndStartAnimation = Jz, Pz.MakeAnimationAdditive = rz, Pz.TransitionTo = Iz, Pz.AppendSerializedAnimations = Cz, (0, uz.g)("BABYLON.Animation", Pz), oz.e._AnimationRangeFactory = (zz, tz, sz) => new Oz.e(zz, tz, sz))
    }
  },
  40190: (zz, tz, sz) => {
    sz.d(tz, {
      e: () => Fz
    });
    class Fz {
      constructor(zz, tz, sz) {
        this.name = zz, this.from = tz, this.to = sz
      }
      clone() {
        return new Fz(this.name, this.from, this.to)
      }
    }
  },
  40238: (zz, tz, sz) => {
    sz.d(tz, {
      b: () => Fz.e,
      c: () => Fz.m
    });
    var Fz = sz(39293);
    (0, Fz.h)()
  },
  40220: (zz, tz, sz) => {
    sz.d(tz, {
      c: () => Fz.g
    });
    var Fz = sz(39617);
    (0, Fz.d)()
  },
  40201: (zz, tz, sz) => {
    sz.d(tz, {
      d: () => Fz.d
    });
    var Fz = sz(39609);
    (0, Fz.g)()
  },
  40240: (zz, tz, sz) => {
    sz.d(tz, {
      b: () => Fz.c
    });
    var Fz = sz(39555);
    (0, Fz.e)()
  },
  40192: (zz, tz, sz) => {
    sz.d(tz, {
      c: () => Fz.f
    });
    var Fz = sz(39585);
    (0, Fz.c)()
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);