export const id = 269;
export const ids = [269];
export const modules = {
  39680: (yb, bb, Wy) => {
    Wy.d(bb, {
      d: () => Cy,
      g: () => ny,
      i: () => Ey,
      k: () => ly,
      l: () => ey,
      n: () => Sy,
      p: () => sy,
      r: () => qb
    });
    var Uy = Wy(35861),
      hy = Wy(35919),
      fy = Wy(35902),
      Zy = Wy(39682),
      cb = Wy(38697),
      Py = Wy(38478),
      oy = Wy(38516),
      By = Wy(38485),
      Ky = Wy(35909);
    const ey = Object.freeze(new Uy.e(0, 0, 0, 0)),
      qb = Object.freeze(Uy.n.Zero()),
      sy = Object.freeze(Uy.m.Zero()),
      Sy = Object.freeze(Py.c.Zero()),
      Ey = Object.freeze(hy.d.Black()),
      ly = Object.freeze(new hy.e(0, 0, 0, 0)),
      mb = {
        key: 0,
        repeatCount: 0,
        Pyy: 2
      };
    class Cy {
      static _PrepareAnimation(yb, bb, Wy, fy, Zy, cb, oy, By) {
        let Ky;
        if (!isNaN(parseFloat(Zy)) && isFinite(Zy) ? Ky = Cy.ANIMATIONTYPE_FLOAT : Zy instanceof Uy.e ? Ky = Cy.ANIMATIONTYPE_QUATERNION : Zy instanceof Uy.n ? Ky = Cy.ANIMATIONTYPE_VECTOR3 : Zy instanceof Uy.m ? Ky = Cy.ANIMATIONTYPE_VECTOR2 : Zy instanceof hy.d ? Ky = Cy.ANIMATIONTYPE_COLOR3 : Zy instanceof hy.e ? Ky = Cy.ANIMATIONTYPE_COLOR4 : Zy instanceof Py.c && (Ky = Cy.ANIMATIONTYPE_SIZE), void 0 == Ky) return null;
        const ey = new Cy(yb, bb, Wy, Ky, oy),
          qb = [{
            frame: 0,
            value: Zy
          }, {
            frame: fy,
            value: cb
          }];
        return ey.setKeys(qb), void 0 !== By && ey.setEasingFunction(By), ey
      }
      get runtimeAnimations() {
        return this._runtimeAnimations
      }
      get hasRunningRuntimeAnimations() {
        for (const yb of this._runtimeAnimations)
          if (!yb.isStopped()) return !0;
        return !1
      }
      constructor(yb, bb, Wy, Uy, hy, fy) {
        this.name = yb, this.targetProperty = bb, this.framePerSecond = Wy, this.dataType = Uy, this.Pyy = hy, this.enableBlending = fy, this._easingFunction = null, this._runtimeAnimations = new Array, this._events = new Array, this.blendingSpeed = .01, this._ranges = {}, this._coreAnimation = null, this.targetPropertyPath = bb.split("."), this.dataType = Uy, this.Pyy = void 0 === hy ? Cy.ANIMATIONLOOPMODE_CYCLE : hy, this.uniqueId = Cy._UniqueIdGenerator++
      }
      toString(yb) {
        let bb = "Name: " + this.name + ", property: " + this.targetProperty;
        if (bb += ", datatype: " + ["Float", "dU", "Quaternion", "Matrix", "Color3", "Vector2"][this.dataType], bb += ", nKeys: " + (this._keys ? this._keys.length : "none"), bb += ", nRanges: " + (this._ranges ? Object.keys(this._ranges).length : "none"), yb) {
          bb += ", Ranges: {";
          let yb = !0;
          for (const Wy in this._ranges) yb || (bb += ", "), yb = !1, bb += Wy;
          bb += "}"
        }
        return bb
      }
      addEvent(yb) {
        this._events.push(yb), this._events.sort(((yb, bb) => yb.frame - bb.frame))
      }
      removeEvents(yb) {
        for (let bb = 0; bb < this._events.length; bb++) this._events[bb].frame === yb && (this._events.splice(bb, 1), bb--)
      }
      getEvents() {
        return this._events
      }
      createRange(yb, bb, Wy) {
        this._ranges[yb] || (this._ranges[yb] = new Zy.c(yb, bb, Wy))
      }
      deleteRange(yb) {
        let bb = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const Wy = this._ranges[yb];
        if (Wy) {
          if (bb) {
            const yb = Wy.from,
              bb = Wy.to;
            for (let Wy = this._keys.length - 1; Wy >= 0; Wy--) this._keys[Wy].frame >= yb && this._keys[Wy].frame <= bb && this._keys.splice(Wy, 1)
          }
          this._ranges[yb] = null
        }
      }
      getRange(yb) {
        return this._ranges[yb]
      }
      getKeys() {
        return this._keys
      }
      getHighestFrame() {
        let yb = 0;
        for (let bb = 0, Wy = this._keys.length; bb < Wy; bb++) yb < this._keys[bb].frame && (yb = this._keys[bb].frame);
        return yb
      }
      getEasingFunction() {
        return this._easingFunction
      }
      setEasingFunction(yb) {
        this._easingFunction = yb
      }
      floatInterpolateFunction(yb, bb, Wy) {
        return (0, fy.Lerp)(yb, bb, Wy)
      }
      floatInterpolateFunctionWithTangents(yb, bb, Wy, Uy, hy) {
        return (0, fy.Hermite)(yb, bb, Wy, Uy, hy)
      }
      quaternionInterpolateFunction(yb, bb, Wy) {
        return Uy.e.Slerp(yb, bb, Wy)
      }
      quaternionInterpolateFunctionWithTangents(yb, bb, Wy, hy, fy) {
        return Uy.e.Hermite(yb, bb, Wy, hy, fy).normalize()
      }
      vector3InterpolateFunction(yb, bb, Wy) {
        return Uy.n.Lerp(yb, bb, Wy)
      }
      vector3InterpolateFunctionWithTangents(yb, bb, Wy, hy, fy) {
        return Uy.n.Hermite(yb, bb, Wy, hy, fy)
      }
      vector2InterpolateFunction(yb, bb, Wy) {
        return Uy.m.Lerp(yb, bb, Wy)
      }
      vector2InterpolateFunctionWithTangents(yb, bb, Wy, hy, fy) {
        return Uy.m.Hermite(yb, bb, Wy, hy, fy)
      }
      sizeInterpolateFunction(yb, bb, Wy) {
        return Py.c.Lerp(yb, bb, Wy)
      }
      color3InterpolateFunction(yb, bb, Wy) {
        return hy.d.Lerp(yb, bb, Wy)
      }
      color3InterpolateFunctionWithTangents(yb, bb, Wy, Uy, fy) {
        return hy.d.Hermite(yb, bb, Wy, Uy, fy)
      }
      color4InterpolateFunction(yb, bb, Wy) {
        return hy.e.Lerp(yb, bb, Wy)
      }
      color4InterpolateFunctionWithTangents(yb, bb, Wy, Uy, fy) {
        return hy.e.Hermite(yb, bb, Wy, Uy, fy)
      }
      _getKeyValue(yb) {
        return "function" === typeof yb ? yb() : yb
      }
      evaluate(yb) {
        return mb.key = 0, this._interpolate(yb, mb)
      }
      _interpolate(yb, bb) {
        let Wy = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (bb.Pyy === Cy.ANIMATIONLOOPMODE_CONSTANT && bb.repeatCount > 0) return bb.highLimitValue.clone ? bb.highLimitValue.clone() : bb.highLimitValue;
        const Uy = this._keys;
        let hy;
        if (this._coreAnimation) hy = this._coreAnimation._key;
        else {
          const fy = Uy.length;
          for (hy = bb.key; hy >= 0 && yb < Uy[hy].frame;) --hy;
          for (; hy + 1 <= fy - 1 && yb >= Uy[hy + 1].frame;) ++hy;
          if (bb.key = hy, hy < 0) return Wy ? void 0 : this._getKeyValue(Uy[0].value);
          if (hy + 1 > fy - 1) return Wy ? void 0 : this._getKeyValue(Uy[fy - 1].value);
          this._key = hy
        }
        const fy = Uy[hy],
          Zy = Uy[hy + 1];
        if (Wy && (yb === fy.frame || yb === Zy.frame)) return;
        const cb = this._getKeyValue(fy.value),
          Py = this._getKeyValue(Zy.value);
        if (1 === fy.interpolation) return Zy.frame > yb ? cb : Py;
        const oy = void 0 !== fy.outTangent && void 0 !== Zy.inTangent,
          By = Zy.frame - fy.frame;
        let Ky = (yb - fy.frame) / By;
        const mb = fy.easingFunction || this.getEasingFunction();
        switch (mb && (Ky = mb.ease(Ky)), this.dataType) {
          case Cy.ANIMATIONTYPE_FLOAT: {
            const yb = oy ? this.floatInterpolateFunctionWithTangents(cb, fy.outTangent * By, Py, Zy.inTangent * By, Ky) : this.floatInterpolateFunction(cb, Py, Ky);
            switch (bb.Pyy) {
              case Cy.ANIMATIONLOOPMODE_CYCLE:
              case Cy.ANIMATIONLOOPMODE_CONSTANT:
              case Cy.ANIMATIONLOOPMODE_YOYO:
                return yb;
              case Cy.ANIMATIONLOOPMODE_RELATIVE:
              case Cy.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return (bb.offsetValue ?? 0) * bb.repeatCount + yb
            }
            break
          }
          case Cy.ANIMATIONTYPE_QUATERNION: {
            const yb = oy ? this.quaternionInterpolateFunctionWithTangents(cb, fy.outTangent.scale(By), Py, Zy.inTangent.scale(By), Ky) : this.quaternionInterpolateFunction(cb, Py, Ky);
            switch (bb.Pyy) {
              case Cy.ANIMATIONLOOPMODE_CYCLE:
              case Cy.ANIMATIONLOOPMODE_CONSTANT:
              case Cy.ANIMATIONLOOPMODE_YOYO:
                return yb;
              case Cy.ANIMATIONLOOPMODE_RELATIVE:
              case Cy.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return yb.addInPlace((bb.offsetValue || ey).scale(bb.repeatCount))
            }
            return yb
          }
          case Cy.ANIMATIONTYPE_VECTOR3: {
            const yb = oy ? this.vector3InterpolateFunctionWithTangents(cb, fy.outTangent.scale(By), Py, Zy.inTangent.scale(By), Ky) : this.vector3InterpolateFunction(cb, Py, Ky);
            switch (bb.Pyy) {
              case Cy.ANIMATIONLOOPMODE_CYCLE:
              case Cy.ANIMATIONLOOPMODE_CONSTANT:
              case Cy.ANIMATIONLOOPMODE_YOYO:
                return yb;
              case Cy.ANIMATIONLOOPMODE_RELATIVE:
              case Cy.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return yb.add((bb.offsetValue || qb).scale(bb.repeatCount))
            }
            break
          }
          case Cy.ANIMATIONTYPE_VECTOR2: {
            const yb = oy ? this.vector2InterpolateFunctionWithTangents(cb, fy.outTangent.scale(By), Py, Zy.inTangent.scale(By), Ky) : this.vector2InterpolateFunction(cb, Py, Ky);
            switch (bb.Pyy) {
              case Cy.ANIMATIONLOOPMODE_CYCLE:
              case Cy.ANIMATIONLOOPMODE_CONSTANT:
              case Cy.ANIMATIONLOOPMODE_YOYO:
                return yb;
              case Cy.ANIMATIONLOOPMODE_RELATIVE:
              case Cy.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return yb.add((bb.offsetValue || sy).scale(bb.repeatCount))
            }
            break
          }
          case Cy.ANIMATIONTYPE_SIZE:
            switch (bb.Pyy) {
              case Cy.ANIMATIONLOOPMODE_CYCLE:
              case Cy.ANIMATIONLOOPMODE_CONSTANT:
              case Cy.ANIMATIONLOOPMODE_YOYO:
                return this.sizeInterpolateFunction(cb, Py, Ky);
              case Cy.ANIMATIONLOOPMODE_RELATIVE:
              case Cy.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return this.sizeInterpolateFunction(cb, Py, Ky).add((bb.offsetValue || Sy).scale(bb.repeatCount))
            }
            break;
          case Cy.ANIMATIONTYPE_COLOR3: {
            const yb = oy ? this.color3InterpolateFunctionWithTangents(cb, fy.outTangent.scale(By), Py, Zy.inTangent.scale(By), Ky) : this.color3InterpolateFunction(cb, Py, Ky);
            switch (bb.Pyy) {
              case Cy.ANIMATIONLOOPMODE_CYCLE:
              case Cy.ANIMATIONLOOPMODE_CONSTANT:
              case Cy.ANIMATIONLOOPMODE_YOYO:
                return yb;
              case Cy.ANIMATIONLOOPMODE_RELATIVE:
              case Cy.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return yb.add((bb.offsetValue || Ey).scale(bb.repeatCount))
            }
            break
          }
          case Cy.ANIMATIONTYPE_COLOR4: {
            const yb = oy ? this.color4InterpolateFunctionWithTangents(cb, fy.outTangent.scale(By), Py, Zy.inTangent.scale(By), Ky) : this.color4InterpolateFunction(cb, Py, Ky);
            switch (bb.Pyy) {
              case Cy.ANIMATIONLOOPMODE_CYCLE:
              case Cy.ANIMATIONLOOPMODE_CONSTANT:
              case Cy.ANIMATIONLOOPMODE_YOYO:
                return yb;
              case Cy.ANIMATIONLOOPMODE_RELATIVE:
              case Cy.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return yb.add((bb.offsetValue || ly).scale(bb.repeatCount))
            }
            break
          }
          case Cy.ANIMATIONTYPE_MATRIX:
            switch (bb.Pyy) {
              case Cy.ANIMATIONLOOPMODE_CYCLE:
              case Cy.ANIMATIONLOOPMODE_CONSTANT:
              case Cy.ANIMATIONLOOPMODE_YOYO:
                return Cy.AllowMatricesInterpolation ? this.matrixInterpolateFunction(cb, Py, Ky, bb.workValue) : cb;
              case Cy.ANIMATIONLOOPMODE_RELATIVE:
              case Cy.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return cb
            }
        }
        return 0
      }
      matrixInterpolateFunction(yb, bb, Wy, hy) {
        return Cy.AllowMatrixDecomposeForInterpolation ? hy ? (Uy.c.DecomposeLerpToRef(yb, bb, Wy, hy), hy) : Uy.c.DecomposeLerp(yb, bb, Wy) : hy ? (Uy.c.LerpToRef(yb, bb, Wy, hy), hy) : Uy.c.Lerp(yb, bb, Wy)
      }
      clone() {
        let yb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const bb = new Cy(this.name, this.targetPropertyPath.join("."), this.framePerSecond, this.dataType, this.Pyy);
        if (bb.enableBlending = this.enableBlending, bb.blendingSpeed = this.blendingSpeed, this._keys && bb.setKeys(this._keys, !1, yb), this._ranges) {
          bb._ranges = {};
          for (const yb in this._ranges) {
            const Wy = this._ranges[yb];
            Wy && (bb._ranges[yb] = Wy.clone())
          }
        }
        return bb
      }
      setKeys(yb) {
        let bb = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) this._keys = yb;
        else if (this._keys = yb.slice(0), bb)
          for (let Wy = 0; Wy < this._keys.length; Wy++) {
            const yb = this._keys[Wy];
            this._keys[Wy] = {
              frame: yb.frame,
              value: yb.value.clone ? yb.value.clone() : yb.value,
              inTangent: yb.inTangent && yb.inTangent.clone ? yb.inTangent.clone() : yb.inTangent,
              outTangent: yb.outTangent && yb.outTangent.clone ? yb.outTangent.clone() : yb.outTangent,
              interpolation: yb.interpolation,
              lockedTangent: yb.lockedTangent,
              easingFunction: yb.easingFunction
            }
          }
      }
      createKeyForFrame(yb) {
        mb.key = 0;
        const bb = this._interpolate(yb, mb, !0);
        if (!bb) return this._keys[mb.key].frame === yb ? mb.key : mb.key + 1;
        const Wy = {
          frame: yb,
          value: bb.clone ? bb.clone() : bb
        };
        return this._keys.splice(mb.key + 1, 0, Wy), mb.key + 1
      }
      serialize() {
        const yb = {};
        yb.name = this.name, yb.property = this.targetProperty, yb.framePerSecond = this.framePerSecond, yb.dataType = this.dataType, yb.loopBehavior = this.Pyy, yb.enableBlending = this.enableBlending, yb.blendingSpeed = this.blendingSpeed;
        const bb = this.dataType;
        yb.keys = [];
        const Wy = this.getKeys();
        for (let Uy = 0; Uy < Wy.length; Uy++) {
          const hy = Wy[Uy],
            fy = {};
          switch (fy.frame = hy.frame, bb) {
            case Cy.ANIMATIONTYPE_FLOAT:
              fy.values = [hy.value], void 0 !== hy.inTangent && fy.values.push(hy.inTangent), void 0 !== hy.outTangent && (void 0 === hy.inTangent && fy.values.push(void 0), fy.values.push(hy.outTangent)), void 0 !== hy.interpolation && (void 0 === hy.inTangent && fy.values.push(void 0), void 0 === hy.outTangent && fy.values.push(void 0), fy.values.push(hy.interpolation));
              break;
            case Cy.ANIMATIONTYPE_QUATERNION:
            case Cy.ANIMATIONTYPE_MATRIX:
            case Cy.ANIMATIONTYPE_VECTOR3:
            case Cy.ANIMATIONTYPE_COLOR3:
            case Cy.ANIMATIONTYPE_COLOR4:
              fy.values = hy.value.hBy(), void 0 != hy.inTangent && fy.values.push(hy.inTangent.hBy()), void 0 != hy.outTangent && (void 0 === hy.inTangent && fy.values.push(void 0), fy.values.push(hy.outTangent.hBy())), void 0 !== hy.interpolation && (void 0 === hy.inTangent && fy.values.push(void 0), void 0 === hy.outTangent && fy.values.push(void 0), fy.values.push(hy.interpolation))
          }
          yb.keys.push(fy)
        }
        yb.lZ = [];
        for (const Uy in this._ranges) {
          const bb = this._ranges[Uy];
          if (!bb) continue;
          const Wy = {};
          Wy.name = Uy, Wy.from = bb.from, Wy.to = bb.to, yb.lZ.push(Wy)
        }
        return yb
      }
      static _UniversalLerp(yb, bb, Wy) {
        const Uy = yb.constructor;
        return Uy.Lerp ? Uy.Lerp(yb, bb, Wy) : Uy.Slerp ? Uy.Slerp(yb, bb, Wy) : yb.toFixed ? yb * (1 - Wy) + Wy * bb : bb
      }
    }

    function Ty(yb, bb, Wy) {
      let hy;
      hy = "object" === typeof bb ? bb : {
        referenceFrame: bb ?? 0,
        range: Wy,
        cloneOriginalAnimation: arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        clonedAnimationName: arguments.length > 4 ? arguments[4] : void 0
      };
      let fy = yb;
      hy.cloneOriginalAnimation && (fy = yb.clone(), fy.name = hy.clonedAnimationName || fy.name);
      const Zy = fy.getKeys();
      if (!Zy.length) return fy;
      const cb = hy.referenceFrame && hy.referenceFrame >= 0 ? hy.referenceFrame : 0;
      let Py = 0;
      const oy = Zy[0];
      let By = Zy.length - 1;
      const Ky = Zy[By],
        ey = {
          referenceValue: oy.value,
          referencePosition: Uy.j.dU[0],
          referenceQuaternion: Uy.j.Quaternion[0],
          referenceScaling: Uy.j.dU[1],
          keyPosition: Uy.j.dU[2],
          keyQuaternion: Uy.j.Quaternion[1],
          keyScaling: Uy.j.dU[3]
        };
      let qb = oy.frame,
        sy = Ky.frame;
      if (hy.range) {
        const yb = fy.getRange(hy.range);
        yb && (qb = yb.from, sy = yb.to)
      } else qb = hy.fromFrame ?? qb, sy = hy.toFrame ?? sy;
      qb !== oy.frame && (Py = fy.createKeyForFrame(qb)), sy !== Ky.frame && (By = fy.createKeyForFrame(sy));
      const Sy = fy.getKeys();
      if (1 === Sy.length) {
        const yb = fy._getKeyValue(Sy[0].value);
        ey.referenceValue = yb.clone ? yb.clone() : yb
      } else if (cb <= oy.frame) {
        const yb = fy._getKeyValue(oy.value);
        ey.referenceValue = yb.clone ? yb.clone() : yb
      } else if (cb >= Ky.frame) {
        const yb = fy._getKeyValue(Ky.value);
        ey.referenceValue = yb.clone ? yb.clone() : yb
      } else {
        mb.key = 0;
        const yb = fy._interpolate(cb, mb);
        ey.referenceValue = yb.clone ? yb.clone() : yb
      }
      fy.dataType === Cy.ANIMATIONTYPE_QUATERNION ? ey.referenceValue.normalize().conjugateInPlace() : fy.dataType === Cy.ANIMATIONTYPE_MATRIX && (ey.referenceValue.decompose(ey.referenceScaling, ey.referenceQuaternion, ey.referencePosition), ey.referenceQuaternion.normalize().conjugateInPlace());
      let Ey = Number.MAX_VALUE;
      const ly = hy.clipKeys ? [] : null;
      for (let mb = Py; mb <= By; mb++) {
        let yb = Sy[mb];
        if ((ly || hy.cloneOriginalAnimation) && (yb = {
            frame: yb.frame,
            value: yb.value.clone ? yb.value.clone() : yb.value,
            inTangent: yb.inTangent,
            outTangent: yb.outTangent,
            interpolation: yb.interpolation,
            lockedTangent: yb.lockedTangent,
            easingFunction: yb.easingFunction
          }, ly && (Ey === Number.MAX_VALUE && (Ey = yb.frame), yb.frame -= Ey, ly.push(yb))), !mb || fy.dataType === Cy.ANIMATIONTYPE_FLOAT || yb.value !== oy.value) switch (fy.dataType) {
          case Cy.ANIMATIONTYPE_MATRIX:
            yb.value.decompose(ey.keyScaling, ey.keyQuaternion, ey.keyPosition), ey.keyPosition.TBy(ey.referencePosition), ey.keyScaling.divideInPlace(ey.referenceScaling), ey.referenceQuaternion.multiplyToRef(ey.keyQuaternion, ey.keyQuaternion), Uy.c.ComposeToRef(ey.keyScaling, ey.keyQuaternion, ey.keyPosition, yb.value);
            break;
          case Cy.ANIMATIONTYPE_QUATERNION:
            ey.referenceValue.multiplyToRef(yb.value, yb.value);
            break;
          case Cy.ANIMATIONTYPE_VECTOR2:
          case Cy.ANIMATIONTYPE_VECTOR3:
          case Cy.ANIMATIONTYPE_COLOR3:
          case Cy.ANIMATIONTYPE_COLOR4:
            yb.value.subtractToRef(ey.referenceValue, yb.value);
            break;
          case Cy.ANIMATIONTYPE_SIZE:
            yb.value.width -= ey.referenceValue.width, yb.value.height -= ey.referenceValue.height;
            break;
          default:
            yb.value -= ey.referenceValue
        }
      }
      return ly && fy.setKeys(ly, !0), fy
    }

    function Vy(yb, bb, Wy, Uy) {
      const hy = new Cy(yb + "Animation", yb, Wy, bb, Cy.ANIMATIONLOOPMODE_CONSTANT);
      return hy.setEasingFunction(Uy), hy
    }

    function Jy(yb, bb, Wy, Uy, hy, fy, Zy, cb, Py, oy, By) {
      const Ky = Cy._PrepareAnimation(yb, Wy, Uy, hy, fy, Zy, cb, Py);
      return Ky ? (bb.kWy && (By = bb.kWy()), By ? By.beginDirectAnimation(bb, [Ky], 0, hy, Ky.Pyy !== Cy.ANIMATIONLOOPMODE_CONSTANT, 1, oy) : null) : null
    }

    function gb(yb, bb, Wy, Uy, hy, fy, Zy, cb, Py, oy, By) {
      const Ky = Cy._PrepareAnimation(yb, Uy, hy, fy, Zy, cb, Py, oy);
      if (!Ky) return null;
      return bb.kWy().beginDirectHierarchyAnimation(bb, Wy, [Ky], 0, fy, 1 === Ky.Pyy, 1, By)
    }

    function Gy(yb, bb, Wy, Uy, hy, fy, Zy, cb, Py, oy) {
      const By = Cy._PrepareAnimation(yb, Wy, Uy, hy, fy, Zy, cb, Py);
      return By ? (bb.animations.push(By), bb.kWy().beginAnimation(bb, 0, hy, 1 === By.Pyy, 1, oy)) : null
    }

    function Oy(yb, bb, Wy, Uy, hy, fy, Zy) {
      let cb = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
        Py = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8],
        oy = arguments.length > 9 ? arguments[9] : void 0;
      if (Zy <= 0) return Wy[yb] = bb, cb && cb(), null;
      const By = hy * (Zy / 1e3);
      fy.setKeys(oy ?? [{
        frame: 0,
        value: Wy[yb].clone ? Wy[yb].clone() : Wy[yb]
      }, {
        frame: By,
        value: bb
      }]), Wy.animations || (Wy.animations = []), Wy.animations.push(fy);
      return Uy.beginAnimation(Wy, 0, By, !1, 1, cb ?? void 0, void 0, Py)
    }

    function Ry(yb, bb) {
      By.c.AppendSerializedAnimations(yb, bb)
    }

    function vb(yb) {
      const bb = new Cy(yb.name, yb.property, yb.framePerSecond, yb.dataType, yb.loopBehavior),
        Wy = yb.dataType,
        fy = [];
      let Zy, cb;
      for (yb.enableBlending && (bb.enableBlending = yb.enableBlending), yb.blendingSpeed && (bb.blendingSpeed = yb.blendingSpeed), cb = 0; cb < yb.keys.length; cb++) {
        const bb = yb.keys[cb];
        let Py, oy, By;
        switch (Wy) {
          case Cy.ANIMATIONTYPE_FLOAT:
            Zy = bb.values[0], bb.values.length >= 2 && (Py = bb.values[1]), bb.values.length >= 3 && (oy = bb.values[2]), bb.values.length >= 4 && (By = bb.values[3]);
            break;
          case Cy.ANIMATIONTYPE_QUATERNION:
            if (Zy = Uy.e.FromArray(bb.values), bb.values.length >= 8) {
              const yb = Uy.e.FromArray(bb.values.slice(4, 8));
              yb.equals(Uy.e.Zero()) || (Py = yb)
            }
            if (bb.values.length >= 12) {
              const yb = Uy.e.FromArray(bb.values.slice(8, 12));
              yb.equals(Uy.e.Zero()) || (oy = yb)
            }
            bb.values.length >= 13 && (By = bb.values[12]);
            break;
          case Cy.ANIMATIONTYPE_MATRIX:
            Zy = Uy.c.FromArray(bb.values), bb.values.length >= 17 && (By = bb.values[16]);
            break;
          case Cy.ANIMATIONTYPE_COLOR3:
            Zy = hy.d.FromArray(bb.values), bb.values[3] && (Py = hy.d.FromArray(bb.values[3])), bb.values[4] && (oy = hy.d.FromArray(bb.values[4])), bb.values[5] && (By = bb.values[5]);
            break;
          case Cy.ANIMATIONTYPE_COLOR4:
            Zy = hy.e.FromArray(bb.values), bb.values[4] && (Py = hy.e.FromArray(bb.values[4])), bb.values[5] && (oy = hy.e.FromArray(bb.values[5])), bb.values[6] && (By = bb.values[6]);
            break;
          case Cy.ANIMATIONTYPE_VECTOR3:
          default:
            Zy = Uy.n.FromArray(bb.values), bb.values[3] && (Py = Uy.n.FromArray(bb.values[3])), bb.values[4] && (oy = Uy.n.FromArray(bb.values[4])), bb.values[5] && (By = bb.values[5])
        }
        const Ky = {};
        Ky.frame = bb.frame, Ky.value = Zy, void 0 != Py && (Ky.inTangent = Py), void 0 != oy && (Ky.outTangent = oy), void 0 != By && (Ky.interpolation = By), fy.push(Ky)
      }
      if (bb.setKeys(fy), yb.lZ)
        for (cb = 0; cb < yb.lZ.length; cb++) Zy = yb.lZ[cb], bb.createRange(Zy.name, Zy.from, Zy.to);
      return bb
    }
    async function ib(yb, bb) {
      return await new Promise(((Wy, Uy) => {
        const hy = new oy.c;
        hy.addEventListener("readystatechange", (() => {
          if (4 == hy.readyState)
            if (200 == hy.status) {
              let bb = JSON.parse(hy.responseText);
              if (bb.animations && (bb = bb.animations), bb.length) {
                const yb = [];
                for (const Wy of bb) yb.push(vb(Wy));
                Wy(yb)
              } else {
                const Uy = vb(bb);
                yb && (Uy.name = yb), Wy(Uy)
              }
            } else Uy("Unable to load the animation")
        })), hy.open("GET", bb), hy.send()
      }))
    }
    async function My(yb) {
      const bb = this?.SnippetUrl ?? Cy.SnippetUrl;
      return await new Promise(((Wy, Uy) => {
        const hy = new oy.c;
        hy.addEventListener("readystatechange", (() => {
          if (4 == hy.readyState)
            if (200 == hy.status) {
              const bb = JSON.parse(JSON.parse(hy.responseText).jsonPayload);
              if (bb.animations) {
                const Uy = JSON.parse(bb.animations),
                  hy = [];
                for (const bb of Uy.animations) {
                  const Wy = vb(bb);
                  Wy.snippetId = yb, hy.push(Wy)
                }
                Wy(hy)
              } else {
                const Uy = vb(JSON.parse(bb.animation));
                Uy.snippetId = yb, Wy(Uy)
              }
            } else Uy("Unable to load the snippet " + yb)
        })), hy.open("GET", bb + "/" + yb.replace(/#/g, "/")), hy.send()
      }))
    }
    Cy._UniqueIdGenerator = 0, Cy.AllowMatricesInterpolation = !1, Cy.AllowMatrixDecomposeForInterpolation = !0, Cy.InheritOriginalValueFromActiveAnimations = !1, Cy.SnippetUrl = "https://snippet.babylonjs.com", Cy.ANIMATIONTYPE_FLOAT = 0, Cy.ANIMATIONTYPE_VECTOR3 = 1, Cy.ANIMATIONTYPE_QUATERNION = 2, Cy.ANIMATIONTYPE_MATRIX = 3, Cy.ANIMATIONTYPE_COLOR3 = 4, Cy.ANIMATIONTYPE_COLOR4 = 7, Cy.ANIMATIONTYPE_VECTOR2 = 5, Cy.ANIMATIONTYPE_SIZE = 6, Cy.ANIMATIONLOOPMODE_RELATIVE = 0, Cy.ANIMATIONLOOPMODE_CYCLE = 1, Cy.ANIMATIONLOOPMODE_CONSTANT = 2, Cy.ANIMATIONLOOPMODE_YOYO = 4, Cy.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT = 5;
    const Yy = My;
    let Xy = !1;

    function ny() {
      Xy || (Xy = !0, Cy.Parse = vb, Cy.ParseFromFileAsync = ib, Cy.ParseFromSnippetAsync = My, Cy.CreateFromSnippetAsync = Yy, Cy.CreateAnimation = Vy, Cy.CreateAndStartAnimation = Jy, Cy.CreateAndStartHierarchyAnimation = gb, Cy.CreateMergeAndStartAnimation = Gy, Cy.MakeAnimationAdditive = Ty, Cy.TransitionTo = Oy, Cy.AppendSerializedAnimations = Ry, (0, Ky.e)("BABYLON.Animation", Cy), cb.b._AnimationRangeFactory = (yb, bb, Wy) => new Zy.c(yb, bb, Wy))
    }
  },
  39682: (yb, bb, Wy) => {
    Wy.d(bb, {
      c: () => Uy
    });
    class Uy {
      constructor(yb, bb, Wy) {
        this.name = yb, this.from = bb, this.to = Wy
      }
      clone() {
        return new Uy(this.name, this.from, this.to)
      }
    }
  },
  39719: (yb, bb, Wy) => {
    Wy.d(bb, {
      c: () => Uy.b,
      g: () => Uy.k
    });
    var Uy = Wy(38620);
    (0, Uy.d)()
  },
  39705: (yb, bb, Wy) => {
    Wy.d(bb, {
      e: () => Uy.f
    });
    var Uy = Wy(38989);
    (0, Uy.e)()
  },
  39693: (yb, bb, Wy) => {
    Wy.d(bb, {
      b: () => Uy.d
    });
    var Uy = Wy(38976);
    (0, Uy.h)()
  },
  39721: (yb, bb, Wy) => {
    Wy.d(bb, {
      b: () => Uy.c
    });
    var Uy = Wy(38902);
    (0, Uy.g)()
  },
  39689: (yb, bb, Wy) => {
    Wy.d(bb, {
      d: () => Uy.f
    });
    var Uy = Wy(38949);
    (0, Uy.e)()
  }
};
Object.freeze(modules);
for (const yb in modules) Object.freeze(modules[yb]);