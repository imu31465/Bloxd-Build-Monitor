export const id = 244;
export const ids = [244];
export const modules = {
  39441: (vv, zv, Pv) => {
    Pv.d(zv, {
      c: () => pv,
      g: () => sv,
      h: () => Nv,
      k: () => dv
    });
    var hv = Pv(39242),
      Sv = Pv(38209),
      ev = Pv(39361),
      gv = Pv(39272);
    class pv {
      get mzv() {
        return this._isDisposed
      }
      constructor(vv, zv, Pv) {
        let Sv = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          ev = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          pv = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
          dv = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
          Nv = arguments.length > 7 ? arguments[7] : void 0,
          lv = arguments.length > 8 ? arguments[8] : void 0;
        this._isAlreadyOwned = !1, this._isDisposed = !1, (0, gv.c)(), vv && vv.rD ? this._engine = vv.rD().ma() : this._engine = vv, this._updatable = Pv, this._instanced = pv, this._divisor = Nv || 1, this._label = lv, zv instanceof hv.b ? (this._data = null, this._buffer = zv) : (this._data = zv, this._buffer = null), this.byteStride = dv ? Sv : Sv * Float32Array.BYTES_PER_ELEMENT, ev || this.create()
      }
      createVertexBuffer(vv, zv, Pv, hv, Sv) {
        let ev = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
          gv = arguments.length > 6 ? arguments[6] : void 0;
        const pv = ev ? zv : zv * Float32Array.BYTES_PER_ELEMENT,
          Nv = hv ? ev ? hv : hv * Float32Array.BYTES_PER_ELEMENT : this.byteStride;
        return new dv(this._engine, this, vv, this._updatable, !0, Nv, void 0 === Sv ? this._instanced : Sv, pv, Pv, void 0, void 0, !0, this._divisor || gv)
      }
      isUpdatable() {
        return this._updatable
      }
      getData() {
        return this._data
      }
      getBuffer() {
        return this._buffer
      }
      getStrideSize() {
        return this.byteStride / Float32Array.BYTES_PER_ELEMENT
      }
      create() {
        let vv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        !vv && this._buffer || (vv = vv || this._data, vv && (this._buffer ? this._updatable && (this._engine.updateDynamicVertexBuffer(this._buffer, vv), this._data = vv) : this._updatable ? (this._buffer = this._engine.createDynamicVertexBuffer(vv, this._label), this._data = vv) : this._buffer = this._engine.createVertexBuffer(vv, void 0, this._label)))
      }
      _rebuild() {
        if (this._data) this._buffer = null, this.create(this._data);
        else {
          if (!this._buffer) return;
          if (this._buffer.GT > 0) return void(this._updatable ? this._buffer = this._engine.createDynamicVertexBuffer(this._buffer.GT, this._label) : this._buffer = this._engine.createVertexBuffer(this._buffer.GT, void 0, this._label));
          Sv.d.Warn(`Missing data for buffer "${this._label}" ${this._buffer?"(uniqueId: "+this._buffer.uniqueId+")":""}. Buffer reconstruction failed.`), this._buffer = null
        }
      }
      update(vv) {
        this.create(vv)
      }
      updateDirectly(vv, zv, Pv) {
        let hv = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        this._buffer && this._updatable && (this._engine.updateDynamicVertexBuffer(this._buffer, vv, hv ? zv : zv * Float32Array.BYTES_PER_ELEMENT, Pv ? Pv * this.byteStride : void 0), this._data = 0 === zv && void 0 === Pv ? vv : null)
      }
      _increaseReferences() {
        this._buffer && (this._isAlreadyOwned ? this._buffer.references++ : this._isAlreadyOwned = !0)
      }
      dispose() {
        this._buffer && this._engine._releaseBuffer(this._buffer) && (this._isDisposed = !0, this._data = null, this._buffer = null)
      }
    }
    class dv {
      get mzv() {
        return this._isDisposed
      }
      get instanceDivisor() {
        return this._instanceDivisor
      }
      set instanceDivisor(vv) {
        const zv = 0 != vv;
        this._instanceDivisor = vv, zv !== this._instanced && (this._instanced = zv, this._computeHashCode())
      }
      get _maxVerticesCount() {
        const vv = this.getData();
        return vv ? Array.isArray(vv) ? vv.length / (this.byteStride / 4) - this.byteOffset / 4 : (vv.byteLength - this.byteOffset) / this.byteStride : 0
      }
      constructor(vv, zv, Pv, hv, Sv, gv, Tv, Wv, wv, av) {
        let sv, Cv = arguments.length > 10 && void 0 !== arguments[10] && arguments[10],
          iv = arguments.length > 11 && void 0 !== arguments[11] && arguments[11],
          cv = arguments.length > 12 && void 0 !== arguments[12] ? arguments[12] : 1,
          Gv = arguments.length > 13 && void 0 !== arguments[13] && arguments[13];
        if (this._isDisposed = !1, this.engine = vv, "object" === typeof hv && null !== hv ? (sv = hv.updatable ?? !1, Sv = hv.postponeInternalCreation, gv = hv.stride, Tv = hv.instanced, Wv = hv.offset, wv = hv.size, av = hv.type, Cv = hv.normalized ?? !1, iv = hv.useBytes ?? !1, cv = hv.divisor ?? 1, Gv = hv.takeBufferOwnership ?? !1, this._label = hv.label) : sv = !!hv, zv instanceof pv ? (this._buffer = zv, this._ownsBuffer = Gv) : (this._buffer = new pv(vv, zv, sv, gv, Sv, Tv, iv, cv, this._label), this._ownsBuffer = !0), this.uniqueId = dv._Counter++, this._kind = Pv, void 0 === av) {
          const vv = this.getData();
          this.type = vv ? lv(vv) : dv.FLOAT
        } else this.type = av;
        const mv = (0, ev.q)(this.type);
        iv ? (this._size = wv || (gv ? gv / mv : Nv(Pv)), this.byteStride = gv || this._buffer.byteStride || this._size * mv, this.byteOffset = Wv || 0) : (this._size = wv || gv || Nv(Pv), this.byteStride = gv ? gv * mv : this._buffer.byteStride || this._size * mv, this.byteOffset = (Wv || 0) * mv), this.normalized = Cv, this._instanced = void 0 !== Tv && Tv, this._instanceDivisor = Tv ? cv : 0, this._alignBuffer(), this._computeHashCode()
      }
      static _GetTypeHashIndex(vv) {
        switch (vv) {
          case dv.BYTE:
            return 0;
          case dv.UNSIGNED_BYTE:
            return 1;
          case dv.SHORT:
            return 2;
          case dv.UNSIGNED_SHORT:
            return 3;
          case dv.INT:
            return 4;
          case dv.UNSIGNED_INT:
            return 5;
          case dv.FLOAT:
            return 6;
          case dv.HALF_FLOAT:
            return 7;
          default:
            throw new Error(`Invalid vertex buffer type '${vv}'`)
        }
      }
      _computeHashCode() {
        this.hashCode = (dv._GetTypeHashIndex(this.type) | 0) + ((this.normalized ? 1 : 0) << 3) + (this._size - 1 << 4) + ((this._instanced ? 1 : 0) << 6) + (this.byteStride << 12)
      }
      _rebuild() {
        this._buffer?._rebuild()
      }
      getKind() {
        return this._kind
      }
      isUpdatable() {
        return this._buffer.isUpdatable()
      }
      getData() {
        return this._buffer.getData()
      }
      getFloatData(vv, zv) {
        const Pv = this.getData();
        return Pv ? (0, ev.p)(Pv, this._size, this.type, this.byteOffset, this.byteStride, this.normalized, vv, zv) : null
      }
      getBuffer() {
        return this._buffer.getBuffer()
      }
      getWrapperBuffer() {
        return this._buffer
      }
      getStrideSize() {
        return this.byteStride / (0, ev.q)(this.type)
      }
      pzv() {
        return this.byteOffset / (0, ev.q)(this.type)
      }
      getSize() {
        return arguments.length > 0 && void 0 !== arguments[0] && arguments[0] ? this._size * (0, ev.q)(this.type) : this._size
      }
      getIsInstanced() {
        return this._instanced
      }
      getInstanceDivisor() {
        return this._instanceDivisor
      }
      create(vv) {
        this._buffer.create(vv), this._alignBuffer()
      }
      update(vv) {
        this._buffer.update(vv), this._alignBuffer()
      }
      updateDirectly(vv, zv) {
        let Pv = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this._buffer.updateDirectly(vv, zv, void 0, Pv), this._alignBuffer()
      }
      dispose() {
        this._ownsBuffer && this._buffer.dispose(), this._isDisposed = !0
      }
      forEach(vv, zv) {
        (0, ev.j)(this._buffer.getData(), this.byteOffset, this.byteStride, this._size, this.type, vv, this.normalized, ((vv, Pv) => {
          for (let hv = 0; hv < this._size; hv++) zv(vv[hv], Pv + hv)
        }))
      }
      _alignBuffer() {}
    }

    function Nv(vv) {
      switch (vv) {
        case dv.UVKind:
        case dv.UV2Kind:
        case dv.UV3Kind:
        case dv.UV4Kind:
        case dv.UV5Kind:
        case dv.UV6Kind:
          return 2;
        case dv.NormalKind:
        case dv.PositionKind:
          return 3;
        case dv.ColorKind:
        case dv.ColorInstanceKind:
        case dv.MatricesIndicesKind:
        case dv.MatricesIndicesExtraKind:
        case dv.MatricesWeightsKind:
        case dv.MatricesWeightsExtraKind:
        case dv.TangentKind:
          return 4;
        default:
          throw new Error("Invalid kind '" + vv + "'")
      }
    }

    function lv(vv) {
      return vv instanceof Int8Array ? dv.BYTE : vv instanceof Uint8Array ? dv.UNSIGNED_BYTE : vv instanceof Int16Array ? dv.SHORT : vv instanceof Uint16Array ? dv.UNSIGNED_SHORT : vv instanceof Int32Array ? dv.INT : vv instanceof Uint32Array ? dv.UNSIGNED_INT : dv.FLOAT
    }

    function Tv(vv) {
      return (0, ev.q)(vv)
    }

    function Wv(vv, zv, Pv, hv, Sv, gv, pv, dv) {
      (0, ev.j)(vv, zv, Pv, hv, Sv, gv, pv, ((vv, zv) => {
        for (let Pv = 0; Pv < hv; Pv++) dv(vv[Pv], zv + Pv)
      }))
    }

    function wv(vv, zv, Pv, hv, Sv, gv, pv, dv) {
      return (0, ev.p)(vv, zv, Pv, hv, Sv, gv, pv, dv)
    }
    dv._Counter = 0, dv.BYTE = 5120, dv.UNSIGNED_BYTE = 5121, dv.SHORT = 5122, dv.UNSIGNED_SHORT = 5123, dv.INT = 5124, dv.UNSIGNED_INT = 5125, dv.FLOAT = 5126, dv.HALF_FLOAT = 5131, dv.PositionKind = "position", dv.NormalKind = "normal", dv.TangentKind = "tangent", dv.UVKind = "uv", dv.UV2Kind = "uv2", dv.UV3Kind = "uv3", dv.UV4Kind = "uv4", dv.UV5Kind = "uv5", dv.UV6Kind = "uv6", dv.ColorKind = "color", dv.ColorInstanceKind = "instanceColor", dv.MatricesIndicesKind = "matricesIndices", dv.MatricesWeightsKind = "matricesWeights", dv.MatricesIndicesExtraKind = "matricesIndicesExtra", dv.MatricesWeightsExtraKind = "matricesWeightsExtra";
    let av = !1;

    function sv() {
      av || (av = !0, dv.DeduceStride = Nv, dv.GetDataType = lv, dv.GetTypeByteLength = Tv, dv.ForEach = Wv, dv.GetFloatData = wv)
    }
  },
  39242: (vv, zv, Pv) => {
    Pv.d(zv, {
      b: () => hv
    });
    class hv {
      get underlyingResource() {
        return null
      }
      constructor() {
        this.references = 0, this.GT = 0, this.is32Bits = !1, this.uniqueId = hv._Counter++
      }
    }
    hv._Counter = 0
  },
  39438: (vv, zv, Pv) => {
    Pv.d(zv, {
      c: () => ev
    });
    var hv = Pv(36594),
      Sv = Pv(39441);
    class ev {
      constructor() {
        this.hit = !1, this.distance = 0, this.pickedPoint = null, this.pickedMesh = null, this.bu = 0, this.bv = 0, this.faceId = -1, this.subMeshFaceId = -1, this.subMeshId = 0, this.pickedSprite = null, this.thinInstanceIndex = -1, this.ray = null, this.originMesh = null, this.aimTransform = null, this.gripTransform = null
      }
      getNormal() {
        let vv = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          zv = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (!this.pickedMesh || zv && !this.pickedMesh.isVerticesDataPresent(Sv.k.NormalKind)) return null;
        let Pv, ev = this.pickedMesh.dPv();
        0 === ev?.length && (ev = null);
        const gv = hv.i.fa[0],
          pv = hv.i.fa[1],
          dv = hv.i.fa[2];
        if (zv) {
          const vv = this.pickedMesh.getVerticesData(Sv.k.NormalKind);
          let zv = ev ? hv.l.FromArrayToRef(vv, 3 * ev[3 * this.faceId], gv) : gv.f_(vv[3 * this.faceId * 3], vv[3 * this.faceId * 3 + 1], vv[3 * this.faceId * 3 + 2]),
            Nv = ev ? hv.l.FromArrayToRef(vv, 3 * ev[3 * this.faceId + 1], pv) : pv.f_(vv[3 * (3 * this.faceId + 1)], vv[3 * (3 * this.faceId + 1) + 1], vv[3 * (3 * this.faceId + 1) + 2]),
            lv = ev ? hv.l.FromArrayToRef(vv, 3 * ev[3 * this.faceId + 2], dv) : dv.f_(vv[3 * (3 * this.faceId + 2)], vv[3 * (3 * this.faceId + 2) + 1], vv[3 * (3 * this.faceId + 2) + 2]);
          zv = zv.scale(this.bu), Nv = Nv.scale(this.bv), lv = lv.scale(1 - this.bu - this.bv), Pv = new hv.l(zv.x + Nv.x + lv.x, zv.y + Nv.y + lv.y, zv.z + Nv.z + lv.z)
        } else {
          const vv = this.pickedMesh.getVerticesData(Sv.k.PositionKind),
            zv = ev ? hv.l.FromArrayToRef(vv, 3 * ev[3 * this.faceId], gv) : gv.f_(vv[3 * this.faceId * 3], vv[3 * this.faceId * 3 + 1], vv[3 * this.faceId * 3 + 2]),
            Nv = ev ? hv.l.FromArrayToRef(vv, 3 * ev[3 * this.faceId + 1], pv) : pv.f_(vv[3 * (3 * this.faceId + 1)], vv[3 * (3 * this.faceId + 1) + 1], vv[3 * (3 * this.faceId + 1) + 2]),
            lv = ev ? hv.l.FromArrayToRef(vv, 3 * ev[3 * this.faceId + 2], dv) : dv.f_(vv[3 * (3 * this.faceId + 2)], vv[3 * (3 * this.faceId + 2) + 1], vv[3 * (3 * this.faceId + 2) + 2]),
            Tv = zv.subtract(Nv),
            Wv = lv.subtract(Nv);
          Pv = hv.l.Cross(Tv, Wv)
        }
        const Nv = (vv, zv) => {
          if (-1 !== this.thinInstanceIndex) {
            const Pv = vv._thinInstanceDataStorage.matrixData,
              Sv = this.thinInstanceIndex << 4;
            if (Pv && Pv.length > Sv) {
              const vv = hv.i.Matrix[0];
              hv.c.FromArrayToRef(Pv, Sv, vv), hv.l.TransformNormalToRef(zv, vv, zv)
            }
          }
          let Pv = vv.getWorldMatrix();
          vv.nonUniformScaling && (hv.i.Matrix[0].Vzv(Pv), Pv = hv.i.Matrix[0], Pv.setTranslationFromFloats(0, 0, 0), Pv.invert(), Pv.transposeToRef(hv.i.Matrix[1]), Pv = hv.i.Matrix[1]), hv.l.TransformNormalToRef(zv, Pv, zv)
        };
        if (vv && Nv(this.pickedMesh, Pv), this.ray) {
          const zv = hv.i.fa[0].Vzv(Pv);
          vv || Nv(this.pickedMesh, zv), hv.l.Dot(zv, this.ray.direction) > 0 && Pv.negateInPlace()
        }
        return Pv.normalize(), Pv
      }
      getTextureCoordinates() {
        let vv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Sv.k.UVKind;
        if (!this.pickedMesh || !this.pickedMesh.isVerticesDataPresent(vv)) return null;
        const zv = this.pickedMesh.dPv();
        if (!zv) return null;
        const Pv = this.pickedMesh.getVerticesData(vv);
        if (!Pv) return null;
        let ev = hv.j.FromArray(Pv, 2 * zv[3 * this.faceId]),
          gv = hv.j.FromArray(Pv, 2 * zv[3 * this.faceId + 1]),
          pv = hv.j.FromArray(Pv, 2 * zv[3 * this.faceId + 2]);
        return ev = ev.scale(this.bu), gv = gv.scale(this.bv), pv = pv.scale(1 - this.bu - this.bv), new hv.j(ev.x + gv.x + pv.x, ev.y + gv.y + pv.y)
      }
    }
  },
  39272: (vv, zv, Pv) => {
    Pv.d(zv, {
      c: () => ev
    });
    var hv = Pv(39152);
    let Sv = !1;

    function ev() {
      Sv || (Sv = !0, hv.ThinEngine.prototype.updateDynamicIndexBuffer = function(vv, zv) {
        let Pv;
        this._currentBoundBuffer[this._gl.ELEMENT_ARRAY_BUFFER] = null, this.bindIndexBuffer(vv), Pv = vv.is32Bits ? zv instanceof Uint32Array ? zv : new Uint32Array(zv) : zv instanceof Uint16Array ? zv : new Uint16Array(zv), this._gl.bufferData(this._gl.ELEMENT_ARRAY_BUFFER, Pv, this._gl.DYNAMIC_DRAW), this._resetIndexBufferBinding()
      }, hv.ThinEngine.prototype.updateDynamicVertexBuffer = function(vv, zv, Pv, hv) {
        this.bindArrayBuffer(vv), void 0 === Pv && (Pv = 0);
        const Sv = zv.byteLength || zv.length;
        void 0 === hv || hv >= Sv && 0 === Pv ? zv instanceof Array ? this._gl.bufferSubData(this._gl.ARRAY_BUFFER, Pv, new Float32Array(zv)) : this._gl.bufferSubData(this._gl.ARRAY_BUFFER, Pv, zv) : zv instanceof Array ? this._gl.bufferSubData(this._gl.ARRAY_BUFFER, Pv, new Float32Array(zv).subarray(0, hv / 4)) : (zv = ArrayBuffer.isView(zv) ? new Uint8Array(zv.buffer, zv.byteOffset, hv) : new Uint8Array(zv, 0, hv), this._gl.bufferSubData(this._gl.ARRAY_BUFFER, Pv, zv)), this._resetVertexBufferBinding()
      })
    }
  },
  39249: (vv, zv, Pv) => {
    Pv.d(zv, {
      d: () => hv
    });
    class hv {
      get underlyingResource() {
        return this._webGLTexture
      }
      constructor() {
        let vv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          zv = arguments.length > 1 ? arguments[1] : void 0;
        if (this._MSAARenderBuffers = null, this._context = zv, !vv && (vv = zv.createTexture(), !vv)) throw new Error("Unable to create webGL texture");
        this.set(vv)
      }
      setUsage() {}
      set(vv) {
        this._webGLTexture = vv
      }
      reset() {
        this._webGLTexture = null, this._MSAARenderBuffers = null
      }
      addMSAARenderBuffer(vv) {
        this._MSAARenderBuffers || (this._MSAARenderBuffers = []), this._MSAARenderBuffers.push(vv)
      }
      releaseMSAARenderBuffers() {
        if (this._MSAARenderBuffers) {
          for (const vv of this._MSAARenderBuffers) this._context.deleteRenderbuffer(vv);
          this._MSAARenderBuffers = null
        }
      }
      getMSAARenderBuffer() {
        let vv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return this._MSAARenderBuffers?.[vv] ?? null
      }
      release() {
        this.releaseMSAARenderBuffers(), this._webGLTexture && this._context.deleteTexture(this._webGLTexture), this.reset()
      }
    }
  },
  39212: (vv, zv, Pv) => {
    Pv.d(zv, {
      b: () => cv
    });
    var hv = Pv(36618),
      Sv = Pv(39157),
      ev = Pv(36615),
      gv = Pv(38209),
      pv = Pv(36610),
      dv = Pv(39220);
    class Nv {
      constructor() {
        let vv = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        this._isDepthTestDirty = !1, this._isDepthMaskDirty = !1, this._isDepthFuncDirty = !1, this._isCullFaceDirty = !1, this._isCullDirty = !1, this._isZOffsetDirty = !1, this._isFrontFaceDirty = !1, vv && this.reset()
      }
      get isDirty() {
        return this._isDepthFuncDirty || this._isDepthTestDirty || this._isDepthMaskDirty || this._isCullFaceDirty || this._isCullDirty || this._isZOffsetDirty || this._isFrontFaceDirty
      }
      get zOffset() {
        return this._zOffset
      }
      set zOffset(vv) {
        this._zOffset !== vv && (this._zOffset = vv, this._isZOffsetDirty = !0)
      }
      get zOffsetUnits() {
        return this._zOffsetUnits
      }
      set zOffsetUnits(vv) {
        this._zOffsetUnits !== vv && (this._zOffsetUnits = vv, this._isZOffsetDirty = !0)
      }
      get cullFace() {
        return this._cullFace
      }
      set cullFace(vv) {
        this._cullFace !== vv && (this._cullFace = vv, this._isCullFaceDirty = !0)
      }
      get cull() {
        return this._cull
      }
      set cull(vv) {
        this._cull !== vv && (this._cull = vv, this._isCullDirty = !0)
      }
      get depthFunc() {
        return this._depthFunc
      }
      set depthFunc(vv) {
        this._depthFunc !== vv && (this._depthFunc = vv, this._isDepthFuncDirty = !0)
      }
      get depthMask() {
        return this._depthMask
      }
      set depthMask(vv) {
        this._depthMask !== vv && (this._depthMask = vv, this._isDepthMaskDirty = !0)
      }
      get depthTest() {
        return this._depthTest
      }
      set depthTest(vv) {
        this._depthTest !== vv && (this._depthTest = vv, this._isDepthTestDirty = !0)
      }
      get frontFace() {
        return this._frontFace
      }
      set frontFace(vv) {
        this._frontFace !== vv && (this._frontFace = vv, this._isFrontFaceDirty = !0)
      }
      reset() {
        this._depthMask = !0, this._depthTest = !0, this._depthFunc = null, this._cullFace = null, this._cull = null, this._zOffset = 0, this._zOffsetUnits = 0, this._frontFace = null, this._isDepthTestDirty = !0, this._isDepthMaskDirty = !0, this._isDepthFuncDirty = !1, this._isCullFaceDirty = !1, this._isCullDirty = !1, this._isZOffsetDirty = !0, this._isFrontFaceDirty = !1
      }
      apply(vv) {
        this.isDirty && (this._isCullDirty && (this.cull ? vv.enable(vv.CULL_FACE) : vv.disable(vv.CULL_FACE), this._isCullDirty = !1), this._isCullFaceDirty && (vv.cullFace(this.cullFace), this._isCullFaceDirty = !1), this._isDepthMaskDirty && (vv.depthMask(this.depthMask), this._isDepthMaskDirty = !1), this._isDepthTestDirty && (this.depthTest ? vv.enable(vv.DEPTH_TEST) : vv.disable(vv.DEPTH_TEST), this._isDepthTestDirty = !1), this._isDepthFuncDirty && (vv.depthFunc(this.depthFunc), this._isDepthFuncDirty = !1), this._isZOffsetDirty && (this.zOffset || this.zOffsetUnits ? (vv.enable(vv.POLYGON_OFFSET_FILL), vv.polygonOffset(this.zOffset, this.zOffsetUnits)) : vv.disable(vv.POLYGON_OFFSET_FILL), this._isZOffsetDirty = !1), this._isFrontFaceDirty && (vv.frontFace(this.frontFace), this._isFrontFaceDirty = !1))
      }
    }
    class lv {
      get isDirty() {
        return this._isStencilTestDirty || this._isStencilMaskDirty || this._isStencilFuncDirty || this._isStencilOpDirty
      }
      get func() {
        return this._func
      }
      set func(vv) {
        this._func !== vv && (this._func = vv, this._isStencilFuncDirty = !0)
      }
      get backFunc() {
        return this._func
      }
      set backFunc(vv) {
        this._backFunc !== vv && (this._backFunc = vv, this._isStencilFuncDirty = !0)
      }
      get funcRef() {
        return this._funcRef
      }
      set funcRef(vv) {
        this._funcRef !== vv && (this._funcRef = vv, this._isStencilFuncDirty = !0)
      }
      get funcMask() {
        return this._funcMask
      }
      set funcMask(vv) {
        this._funcMask !== vv && (this._funcMask = vv, this._isStencilFuncDirty = !0)
      }
      get opStencilFail() {
        return this._opStencilFail
      }
      set opStencilFail(vv) {
        this._opStencilFail !== vv && (this._opStencilFail = vv, this._isStencilOpDirty = !0)
      }
      get opDepthFail() {
        return this._opDepthFail
      }
      set opDepthFail(vv) {
        this._opDepthFail !== vv && (this._opDepthFail = vv, this._isStencilOpDirty = !0)
      }
      get opStencilDepthPass() {
        return this._opStencilDepthPass
      }
      set opStencilDepthPass(vv) {
        this._opStencilDepthPass !== vv && (this._opStencilDepthPass = vv, this._isStencilOpDirty = !0)
      }
      get backOpStencilFail() {
        return this._backOpStencilFail
      }
      set backOpStencilFail(vv) {
        this._backOpStencilFail !== vv && (this._backOpStencilFail = vv, this._isStencilOpDirty = !0)
      }
      get backOpDepthFail() {
        return this._backOpDepthFail
      }
      set backOpDepthFail(vv) {
        this._backOpDepthFail !== vv && (this._backOpDepthFail = vv, this._isStencilOpDirty = !0)
      }
      get backOpStencilDepthPass() {
        return this._backOpStencilDepthPass
      }
      set backOpStencilDepthPass(vv) {
        this._backOpStencilDepthPass !== vv && (this._backOpStencilDepthPass = vv, this._isStencilOpDirty = !0)
      }
      get mask() {
        return this._mask
      }
      set mask(vv) {
        this._mask !== vv && (this._mask = vv, this._isStencilMaskDirty = !0)
      }
      get enabled() {
        return this._enabled
      }
      set enabled(vv) {
        this._enabled !== vv && (this._enabled = vv, this._isStencilTestDirty = !0)
      }
      constructor() {
        let vv = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        this._isStencilTestDirty = !1, this._isStencilMaskDirty = !1, this._isStencilFuncDirty = !1, this._isStencilOpDirty = !1, this.useStencilGlobalOnly = !1, vv && this.reset()
      }
      reset() {
        this.stencilMaterial = void 0, this.stencilGlobal?.reset(), this._isStencilTestDirty = !0, this._isStencilMaskDirty = !0, this._isStencilFuncDirty = !0, this._isStencilOpDirty = !0
      }
      apply(vv) {
        if (!vv) return;
        const zv = !this.useStencilGlobalOnly && !!this.stencilMaterial?.enabled;
        this.enabled = zv ? this.stencilMaterial.enabled : this.stencilGlobal.enabled, this.func = zv ? this.stencilMaterial.func : this.stencilGlobal.func, this.backFunc = zv ? this.stencilMaterial.backFunc : this.stencilGlobal.backFunc, this.funcRef = zv ? this.stencilMaterial.funcRef : this.stencilGlobal.funcRef, this.funcMask = zv ? this.stencilMaterial.funcMask : this.stencilGlobal.funcMask, this.opStencilFail = zv ? this.stencilMaterial.opStencilFail : this.stencilGlobal.opStencilFail, this.opDepthFail = zv ? this.stencilMaterial.opDepthFail : this.stencilGlobal.opDepthFail, this.opStencilDepthPass = zv ? this.stencilMaterial.opStencilDepthPass : this.stencilGlobal.opStencilDepthPass, this.backOpStencilFail = zv ? this.stencilMaterial.backOpStencilFail : this.stencilGlobal.backOpStencilFail, this.backOpDepthFail = zv ? this.stencilMaterial.backOpDepthFail : this.stencilGlobal.backOpDepthFail, this.backOpStencilDepthPass = zv ? this.stencilMaterial.backOpStencilDepthPass : this.stencilGlobal.backOpStencilDepthPass, this.mask = zv ? this.stencilMaterial.mask : this.stencilGlobal.mask, this.isDirty && (this._isStencilTestDirty && (this.enabled ? vv.enable(vv.STENCIL_TEST) : vv.disable(vv.STENCIL_TEST), this._isStencilTestDirty = !1), this._isStencilMaskDirty && (vv.stencilMask(this.mask), this._isStencilMaskDirty = !1), this._isStencilFuncDirty && (vv.stencilFuncSeparate(vv.FRONT, this.func, this.funcRef, this.funcMask), vv.stencilFuncSeparate(vv.BACK, this.backFunc, this.funcRef, this.funcMask), this._isStencilFuncDirty = !1), this._isStencilOpDirty && (vv.stencilOpSeparate(vv.FRONT, this.opStencilFail, this.opDepthFail, this.opStencilDepthPass), vv.stencilOpSeparate(vv.BACK, this.backOpStencilFail, this.backOpDepthFail, this.backOpStencilDepthPass), this._isStencilOpDirty = !1))
      }
    }
    class Tv {
      constructor() {
        this.reset()
      }
      reset() {
        this.enabled = !1, this.mask = 255, this.funcRef = 1, this.funcMask = 255, this.func = Tv.ALWAYS, this.opStencilFail = Tv.KEEP, this.opDepthFail = Tv.KEEP, this.opStencilDepthPass = Tv.REPLACE, this.backFunc = Tv.ALWAYS, this.backOpStencilFail = Tv.KEEP, this.backOpDepthFail = Tv.KEEP, this.backOpStencilDepthPass = Tv.REPLACE
      }
      get stencilFunc() {
        return this.func
      }
      set stencilFunc(vv) {
        this.func = vv
      }
      get stencilBackFunc() {
        return this.backFunc
      }
      set stencilBackFunc(vv) {
        this.backFunc = vv
      }
      get stencilFuncRef() {
        return this.funcRef
      }
      set stencilFuncRef(vv) {
        this.funcRef = vv
      }
      get stencilFuncMask() {
        return this.funcMask
      }
      set stencilFuncMask(vv) {
        this.funcMask = vv
      }
      get stencilOpStencilFail() {
        return this.opStencilFail
      }
      set stencilOpStencilFail(vv) {
        this.opStencilFail = vv
      }
      get stencilOpDepthFail() {
        return this.opDepthFail
      }
      set stencilOpDepthFail(vv) {
        this.opDepthFail = vv
      }
      get stencilOpStencilDepthPass() {
        return this.opStencilDepthPass
      }
      set stencilOpStencilDepthPass(vv) {
        this.opStencilDepthPass = vv
      }
      get stencilBackOpStencilFail() {
        return this.backOpStencilFail
      }
      set stencilBackOpStencilFail(vv) {
        this.backOpStencilFail = vv
      }
      get stencilBackOpDepthFail() {
        return this.backOpDepthFail
      }
      set stencilBackOpDepthFail(vv) {
        this.backOpDepthFail = vv
      }
      get stencilBackOpStencilDepthPass() {
        return this.backOpStencilDepthPass
      }
      set stencilBackOpStencilDepthPass(vv) {
        this.backOpStencilDepthPass = vv
      }
      get stencilMask() {
        return this.mask
      }
      set stencilMask(vv) {
        this.mask = vv
      }
      get stencilTest() {
        return this.enabled
      }
      set stencilTest(vv) {
        this.enabled = vv
      }
    }
    Tv.ALWAYS = 519, Tv.KEEP = 7680, Tv.REPLACE = 7681;
    var Wv = Pv(39222),
      wv = Pv(39190),
      av = Pv(39134),
      sv = Pv(39167),
      Cv = Pv(39184);

    function iv(vv, zv) {
      if (zv) {
        const {
          requestAnimationFrame: Pv
        } = zv;
        if ("function" === typeof Pv) return Pv(vv)
      }
      if ((0, sv.l)()) {
        const {
          requestAnimationFrame: Pv
        } = zv || window;
        if ("function" === typeof Pv) return Pv(vv)
      } else if ("function" === typeof requestAnimationFrame) return requestAnimationFrame(vv);
      return setTimeout(vv, 16)
    }
    class cv {
      get frameId() {
        return this._frameId
      }
      get isWebGPU() {
        return this._isWebGPU
      }
      _getShaderProcessor(vv) {
        return this._shaderProcessor
      }
      _resetAlphaMode() {
        this._alphaMode.fill(-1), this._alphaEquation.fill(-1)
      }
      get shaderPlatformName() {
        return this._shaderPlatformName
      }
      _clearEmptyResources() {
        this._emptyTexture = null, this._emptyCubeTexture = null, this._emptyTexture3D = null, this._emptyTexture2DArray = null
      }
      get SPv() {
        return this._useReverseDepthBuffer
      }
      set SPv(vv) {
        vv !== this._useReverseDepthBuffer && (this._useReverseDepthBuffer = vv, this._depthCullingState.depthFunc = vv ? 518 : 515)
      }
      setColorWrite(vv) {
        vv !== this._colorWrite && (this._colorWriteChanged = !0, this._colorWrite = vv)
      }
      getColorWrite() {
        return this._colorWrite
      }
      get depthCullingState() {
        return this._depthCullingState
      }
      get alphaState() {
        return this._alphaState
      }
      get stencilState() {
        return this._stencilState
      }
      get stencilStateComposer() {
        return this._stencilStateComposer
      }
      _getGlobalDefines(vv) {
        if (vv) return this.isNDCHalfZRange ? vv.IS_NDC_HALF_ZRANGE = "" : delete vv.IS_NDC_HALF_ZRANGE, this.SPv ? vv.USE_REVERSE_DEPTHBUFFER = "" : delete vv.USE_REVERSE_DEPTHBUFFER, void(this.useExactSrgbConversions ? vv.USE_EXACT_SRGB_CONVERSIONS = "" : delete vv.USE_EXACT_SRGB_CONVERSIONS);
        {
          let vv = "";
          return this.isNDCHalfZRange && (vv += "#define IS_NDC_HALF_ZRANGE"), this.SPv && (vv && (vv += "\n"), vv += "#define USE_REVERSE_DEPTHBUFFER"), this.useExactSrgbConversions && (vv && (vv += "\n"), vv += "#define USE_EXACT_SRGB_CONVERSIONS"), vv
        }
      }
      _rebuildInternalTextures() {
        const vv = this._internalTexturesCache.slice();
        for (const zv of vv) zv._rebuild()
      }
      _rebuildRenderTargetWrappers() {
        const vv = this._renderTargetWrapperCache.slice();
        for (const zv of vv) zv.textures?.some((vv => 15 === vv.source)) || zv._rebuild()
      }
      _rebuildEffects() {
        for (const vv in this._compiledEffects) {
          const zv = this._compiledEffects[vv];
          zv._pipelineContext = null, zv._prepareEffect()
        }
        Sv.b.ResetCache()
      }
      _rebuildGraphicsResources() {
        this.wipeCaches(!0), this._rebuildEffects(), this._rebuildComputeEffects?.(), this._rebuildBuffers(), this._rebuildInternalTextures(), this._rebuildTextures(), this._rebuildRenderTargetWrappers(), this.wipeCaches(!0)
      }
      _flagContextRestored() {
        gv.d.Warn(this.name + " context successfully restored."), this.onContextRestoredObservable.notifyObservers(this), this._contextWasLost = !1
      }
      _restoreEngineAfterContextLost(vv) {
        setTimeout((() => {
          this._clearEmptyResources();
          const zv = this._depthCullingState.depthTest,
            Pv = this._depthCullingState.depthFunc,
            hv = this._depthCullingState.depthMask,
            Sv = this._stencilState.stencilTest;
          vv(), this._rebuildGraphicsResources(), this._depthCullingState.depthTest = zv, this._depthCullingState.depthFunc = Pv, this._depthCullingState.depthMask = hv, this._stencilState.stencilTest = Sv, this._flagContextRestored()
        }), 0)
      }
      get mzv() {
        return this._isDisposed
      }
      get snapshotRendering() {
        return !1
      }
      set snapshotRendering(vv) {}
      get snapshotRenderingMode() {
        return 0
      }
      set snapshotRenderingMode(vv) {}
      getClassName() {
        return "AbstractEngine"
      }
      get emptyTexture() {
        return this._emptyTexture || (this._emptyTexture = this.createRawTexture(new Uint8Array(4), 1, 1, 5, !1, !1, 1)), this._emptyTexture
      }
      get emptyTexture3D() {
        return this._emptyTexture3D || (this._emptyTexture3D = this.createRawTexture3D(new Uint8Array(4), 1, 1, 1, 5, !1, !1, 1)), this._emptyTexture3D
      }
      get emptyTexture2DArray() {
        return this._emptyTexture2DArray || (this._emptyTexture2DArray = this.createRawTexture2DArray(new Uint8Array(4), 1, 1, 1, 5, !1, !1, 1)), this._emptyTexture2DArray
      }
      get emptyCubeTexture() {
        if (!this._emptyCubeTexture) {
          const vv = new Uint8Array(4),
            zv = [vv, vv, vv, vv, vv, vv];
          this._emptyCubeTexture = this.createRawCubeTexture(zv, 1, 5, 0, !1, !1, 1)
        }
        return this._emptyCubeTexture
      }
      set framebufferDimensionsObject(vv) {
        this._framebufferDimensionsObject = vv
      }
      get activeRenderLoops() {
        return this._activeRenderLoops
      }
      stopRenderLoop(vv) {
        if (!vv) return this._activeRenderLoops.length = 0, void this._cancelFrame();
        const zv = this._activeRenderLoops.indexOf(vv);
        zv >= 0 && (this._activeRenderLoops.splice(zv, 1), 0 == this._activeRenderLoops.length && this._cancelFrame())
      }
      _cancelFrame() {
        if (this.customAnimationFrameRequester) {
          if (0 !== this._frameHandler) {
            this._frameHandler = 0;
            const {
              cancelAnimationFrame: vv
            } = this.customAnimationFrameRequester;
            vv && vv(this.customAnimationFrameRequester.Fa), delete this.customAnimationFrameRequester.Fa
          }
        } else if (0 !== this._frameHandler) {
          const vv = this._frameHandler;
          if (this._frameHandler = 0, (0, sv.l)()) {
            const {
              cancelAnimationFrame: zv
            } = this.getHostWindow() || window;
            if ("function" === typeof zv) return zv(vv)
          } else if ("function" === typeof cancelAnimationFrame) return cancelAnimationFrame(vv);
          return clearTimeout(vv)
        }
      }
      Qm() {
        this.onBeginFrameObservable.notifyObservers(this)
      }
      Zm() {
        this._frameId++, this.onEndFrameObservable.notifyObservers(this)
      }
      get maxFPS() {
        return this._maxFPS
      }
      set maxFPS(vv) {
        this._maxFPS = vv, void 0 !== vv && (this._minFrameTime = vv <= 0 ? Number.MAX_VALUE : 1e3 / vv)
      }
      _isOverFrameTime(vv) {
        if (!vv || void 0 === this._maxFPS) return !1;
        const zv = vv - this._lastFrameTime;
        return this._lastFrameTime = vv, this._renderAccumulator += zv, this._renderAccumulator < this._minFrameTime || (this._renderAccumulator -= this._minFrameTime, this._renderAccumulator > this._minFrameTime && (this._renderAccumulator = this._minFrameTime), !1)
      }
      _processFrame(vv) {
        if (this._frameHandler = 0, !this._contextWasLost && !this._isOverFrameTime(vv)) {
          let vv = !0;
          (this.mzv || !this.renderEvenInBackground && this._windowIsBackground) && (vv = !1), vv && (this.Qm(), this.skipFrameRender || this._renderViews() || this._renderFrame(), this.Zm())
        }
      }
      _renderLoop(vv) {
        this._processFrame(vv), this._activeRenderLoops.length > 0 && 0 === this._frameHandler && this._queueNewFrameForRenderLoop()
      }
      _renderFrame() {
        for (let vv = 0; vv < this._activeRenderLoops.length; vv++) {
          (0, this._activeRenderLoops[vv])()
        }
      }
      _renderViews() {
        return !1
      }
      _queueNewFrame(vv, zv) {
        return iv(vv, zv)
      }
      _queueNewFrameForRenderLoop() {
        this.customAnimationFrameRequester ? (this.customAnimationFrameRequester.Fa = this._queueNewFrame(this.customAnimationFrameRequester.renderFunction || this._boundRenderFunction, this.customAnimationFrameRequester), this._frameHandler = this.customAnimationFrameRequester.Fa) : this._frameHandler = this._queueNewFrame(this._boundRenderFunction, this.getHostWindow())
      }
      runRenderLoop(vv) {
        -1 === this._activeRenderLoops.indexOf(vv) && (this._activeRenderLoops.push(vv), 1 === this._activeRenderLoops.length && 0 === this._frameHandler && this._queueNewFrameForRenderLoop())
      }
      getDepthBuffer() {
        return this._depthCullingState.depthTest
      }
      setDepthBuffer(vv) {
        this._depthCullingState.depthTest = vv
      }
      setZOffset(vv) {
        this._depthCullingState.zOffset = this.SPv ? -vv : vv
      }
      getZOffset() {
        const vv = this._depthCullingState.zOffset;
        return this.SPv ? -vv : vv
      }
      setZOffsetUnits(vv) {
        this._depthCullingState.zOffsetUnits = this.SPv ? -vv : vv
      }
      getZOffsetUnits() {
        const vv = this._depthCullingState.zOffsetUnits;
        return this.SPv ? -vv : vv
      }
      getHostWindow() {
        return (0, sv.l)() ? this._renderingCanvas && this._renderingCanvas.ownerDocument && this._renderingCanvas.ownerDocument.defaultView ? this._renderingCanvas.ownerDocument.defaultView : window : null
      }
      get compatibilityMode() {
        return this._compatibilityMode
      }
      set compatibilityMode(vv) {
        this._compatibilityMode = !0
      }
      _rebuildTextures() {
        for (const vv of this.scenes) vv._rebuildTextures();
        for (const vv of this._virtualScenes) vv._rebuildTextures()
      }
      _releaseRenderTargetWrapper(vv) {
        const zv = this._renderTargetWrapperCache.indexOf(vv); - 1 !== zv && this._renderTargetWrapperCache.splice(zv, 1)
      }
      get currentViewport() {
        return this._cachedViewport
      }
      setViewport(vv, zv, Pv) {
        const hv = zv || this.getRenderWidth(),
          Sv = Pv || this.getRenderHeight(),
          ev = vv.x || 0,
          gv = vv.y || 0;
        this._cachedViewport = vv, this._viewport(ev * hv, gv * Sv, hv * vv.width, Sv * vv.height)
      }
      createCanvasImage() {
        return document.createElement("img")
      }
      createCanvasPath2D(vv) {
        return new Path2D(vv)
      }
      get description() {
        let vv = this.name + this.version;
        return this._caps.parallelShaderCompile && (vv += " - Parallel shader compilation"), vv
      }
      _createTextureBase(vv, zv, Pv, hv) {
        let Sv = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3,
          pv = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          dv = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
          Nv = arguments.length > 7 ? arguments[7] : void 0,
          lv = arguments.length > 8 ? arguments[8] : void 0,
          Tv = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null,
          Wv = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : null,
          wv = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : null,
          sv = arguments.length > 12 && void 0 !== arguments[12] ? arguments[12] : null,
          Cv = arguments.length > 13 ? arguments[13] : void 0,
          iv = arguments.length > 14 ? arguments[14] : void 0,
          Gv = arguments.length > 15 ? arguments[15] : void 0;
        const mv = "data:" === (vv = vv || "").substring(0, 5),
          jv = "blob:" === vv.substring(0, 5),
          fv = mv && -1 !== vv.indexOf(";base64,"),
          Fv = Wv || new av.e(this, 1);
        Fv !== Wv && (Fv.label = vv.substring(0, 60));
        const Yv = vv;
        !this._transformTextureUrl || fv || Wv || Tv || (vv = this._transformTextureUrl(vv)), Yv !== vv && (Fv._originalUrl = Yv);
        const nv = vv.lastIndexOf(".");
        let Ov = sv || (nv > -1 ? vv.substring(nv).toLowerCase() : "");
        Ov.indexOf("?") > -1 && (Ov = Ov.split("?")[0]);
        const Dv = cv.GetCompatibleTextureLoader(Ov, Cv);
        hv && hv.addPendingData(Fv), Fv.url = vv, Fv.generateMipMaps = !zv, Fv.samplingMode = Sv, Fv.invertY = Pv, Fv._useSRGBBuffer = this._getUseSRGBBuffer(!!Gv, zv), this._doNotHandleContextLost || (Fv._buffer = Tv);
        let Kv = null;
        pv && !Wv && (Kv = Fv.onLoadedObservable.add(pv)), Wv || this._internalTexturesCache.push(Fv);
        const Vv = (Pv, Wv) => {
          hv && hv.removePendingData(Fv), vv === Yv ? (Kv && Fv.onLoadedObservable.remove(Kv), ev.e.UseFallbackTexture && vv !== ev.e.FallbackTexture && this._createTextureBase(ev.e.FallbackTexture, zv, Fv.invertY, hv, Sv, null, dv, Nv, lv, Tv, Fv), Pv = (Pv || "Unknown error") + (ev.e.UseFallbackTexture ? " - Fallback texture was used" : ""), Fv.onErrorObservable.notifyObservers({
            message: Pv,
            exception: Wv
          }), dv && dv(Pv, Wv)) : (gv.d.Warn(`Failed to load ${vv}, falling back to ${Yv}`), this._createTextureBase(Yv, zv, Fv.invertY, hv, Sv, pv, dv, Nv, lv, Tv, Fv, wv, sv, Cv, iv, Gv))
        };
        if (Dv) {
          const zv = async vv => {
            (await Dv).loadData(vv, Fv, ((vv, zv, Pv, ev, gv, pv) => {
              pv ? Vv("TextureLoader failed to load data") : Nv(Fv, Ov, hv, {
                width: vv,
                height: zv
              }, Fv.invertY, !Pv, ev, (() => (gv(), !1)), Sv)
            }), iv)
          };
          if (Tv) {
            const vv = async vv => {
              try {
                await zv(vv)
              } catch (Pv) {
                Vv("Failed to parse texture data", Pv)
              }
            };
            Tv instanceof ArrayBuffer ? vv(new Uint8Array(Tv)) : ArrayBuffer.isView(Tv) ? vv(Tv) : dv && dv("Unable to load: only ArrayBuffer or ArrayBufferView is supported", null)
          } else this._loadFile(vv, (async vv => {
            try {
              await zv(new Uint8Array(vv))
            } catch (Pv) {
              Vv("Failed to parse texture data", Pv)
            }
          }), void 0, hv ? hv.offlineProvider : void 0, !0, ((vv, zv) => {
            Vv("Unable to load " + (vv && vv.responseURL, zv))
          }))
        } else {
          const Pv = vv => {
            jv && !this._doNotHandleContextLost && (Fv._buffer = vv), Nv(Fv, Ov, hv, vv, Fv.invertY, zv, !1, lv, Sv)
          };
          !mv || fv ? Tv && ("string" === typeof Tv.decoding || Tv.close) ? Pv(Tv) : cv._FileToolsLoadImage(vv || "", Pv, Vv, hv ? hv.offlineProvider : null, Cv, Fv.invertY && this._features.needsInvertingBitmap ? {
            imageOrientation: "flipY"
          } : void 0, this) : "string" === typeof Tv || Tv instanceof ArrayBuffer || ArrayBuffer.isView(Tv) || Tv instanceof Blob ? cv._FileToolsLoadImage(Tv, Pv, Vv, hv ? hv.offlineProvider : null, Cv, Fv.invertY && this._features.needsInvertingBitmap ? {
            imageOrientation: "flipY"
          } : void 0, this) : Tv && Pv(Tv)
        }
        return Fv
      }
      _rebuildBuffers() {
        for (const vv of this._uniformBuffers) vv._rebuildAfterContextLost()
      }
      get _shouldUseHighPrecisionShader() {
        return !(!this._caps.highPrecisionShaderSupported || !this._highPrecisionShadersAllowed)
      }
      getHostDocument() {
        return this._renderingCanvas && this._renderingCanvas.ownerDocument ? this._renderingCanvas.ownerDocument : (0, sv.g)() ? document : null
      }
      getLoadedTexturesCache() {
        return this._internalTexturesCache
      }
      clearInternalTexturesCache() {
        this._internalTexturesCache.length = 0
      }
      getCaps() {
        return this._caps
      }
      resetTextureCache() {
        for (const vv in this._boundTexturesCache) Object.prototype.hasOwnProperty.call(this._boundTexturesCache, vv) && (this._boundTexturesCache[vv] = null);
        this._currentTextureChannel = -1
      }
      get name() {
        return this._name
      }
      set name(vv) {
        this._name = vv
      }
      static get NpmPackage() {
        return "babylonjs@9.28.0"
      }
      static get Version() {
        return "9.28.0"
      }
      getRenderingCanvas() {
        return this._renderingCanvas
      }
      getAudioContext() {
        return this._audioContext
      }
      getAudioDestination() {
        return this._audioDestination
      }
      setHardwareScalingLevel(vv) {
        this._hardwareScalingLevel = vv, this.resize()
      }
      getHardwareScalingLevel() {
        return this._hardwareScalingLevel
      }
      get doNotHandleContextLost() {
        return this._doNotHandleContextLost
      }
      set doNotHandleContextLost(vv) {
        this._doNotHandleContextLost = vv
      }
      get isStencilEnable() {
        return this._isStencilEnable
      }
      getCreationOptions() {
        return this._creationOptions
      }
      constructor(vv, zv, Pv) {
        this._colorWrite = !0, this._colorWriteChanged = !0, this._depthCullingState = new Nv, this._stencilStateComposer = new lv, this._stencilState = new Tv, this._alphaState = new Wv.e(!1), this._alphaMode = Array(8).fill(-1), this._alphaEquation = Array(8).fill(-1), this._activeRequests = [], this._badOS = !1, this._badDesktopOS = !1, this._compatibilityMode = !0, this._internalTexturesCache = new Array, this._currentRenderTarget = null, this._boundTexturesCache = {}, this._activeChannel = 0, this._currentTextureChannel = -1, this._viewportCached = {
          x: 0,
          y: 0,
          z: 0,
          w: 0
        }, this._isWebGPU = !1, this._enableGPUDebugMarkers = !1, this.onCanvasBlurObservable = new hv.c, this.onCanvasFocusObservable = new hv.c, this.onNewSceneAddedObservable = new hv.c, this.onResizeObservable = new hv.c, this.onCanvasPointerOutObservable = new hv.c, this.onEffectErrorObservable = new hv.c, this.disablePerformanceMonitorInBackground = !1, this.disableVertexArrayObjects = !1, this._frameId = 0, this.hostInformation = {
          isMobile: !1
        }, this.isFullscreen = !1, this.enableOfflineSupport = !1, this.disableManifestCheck = !1, this.disableContextMenu = !0, this.currentRenderPassId = 0, this.isPointerLock = !1, this.postProcesses = [], this.canvasTabIndex = 1, this._contextWasLost = !1, this._useReverseDepthBuffer = !1, this.isNDCHalfZRange = !1, this.hasOriginBottomLeft = !0, this._renderTargetWrapperCache = new Array, this._compiledEffects = {}, this._isDisposed = !1, this.scenes = [], this._virtualScenes = new Array, this.onBeforeTextureInitObservable = new hv.c, this.renderEvenInBackground = !0, this.preventCacheWipeBetweenFrames = !1, this._frameHandler = 0, this._activeRenderLoops = new Array, this.customAnimationFrameRequester = null, this._windowIsBackground = !1, this._boundRenderFunction = vv => this._renderLoop(vv), this._lastFrameTime = 0, this._renderAccumulator = 0, this.skipFrameRender = !1, this.onBeforeShaderCompilationObservable = new hv.c, this.onAfterShaderCompilationObservable = new hv.c, this.onBeginFrameObservable = new hv.c, this.onEndFrameObservable = new hv.c, this._transformTextureUrl = null, this._uniformBuffers = new Array, this._storageBuffers = new Array, this._highPrecisionShadersAllowed = !0, this.onContextLostObservable = new hv.c, this.onContextRestoredObservable = new hv.c, this._name = "", this.premultipliedAlpha = !0, this.adaptToDeviceRatio = !1, this._lastDevicePixelRatio = 1, this._doNotHandleContextLost = !1, this.cullBackFaces = null, this._renderPassNames = ["main"], this._onReleaseRenderPassObservable = null, this._fps = 60, this._deltaTime = 0, this._deterministicLockstep = !1, this._lockstepMaxSteps = 4, this._timeStep = 1 / 60, this.uD = new hv.c, this.onReleaseEffectsObservable = new hv.c, ev.e.Instances.push(this), this.startTime = dv.c.Now, this._stencilStateComposer.stencilGlobal = this._stencilState, pv.b.SetMatrixPrecision(!!zv.useLargeWorldRendering || !!zv.useHighPrecisionMatrix), (0, sv.k)() && navigator.userAgent && (this._badOS = /iPad/i.test(navigator.userAgent) || /iPhone/i.test(navigator.userAgent), this._badDesktopOS = /^((?!chrome|android).)*safari/i.test(navigator.userAgent)), zv.antialias = vv ?? zv.antialias, zv.deterministicLockstep = zv.deterministicLockstep ?? !1, zv.lockstepMaxSteps = zv.lockstepMaxSteps ?? 4, zv.timeStep = zv.timeStep ?? 1 / 60, zv.stencil = zv.stencil ?? !0, this._audioContext = zv.audioEngineOptions?.audioContext ?? null, this._audioDestination = zv.audioEngineOptions?.audioDestination ?? null, this.premultipliedAlpha = zv.premultipliedAlpha ?? !0, this._doNotHandleContextLost = !!zv.doNotHandleContextLost, this._isStencilEnable = !!zv.stencil, this.useExactSrgbConversions = zv.useExactSrgbConversions ?? !1, this.canvasTabIndex = zv.canvasTabIndex ?? this.canvasTabIndex;
        const Sv = (0, sv.l)() && window.devicePixelRatio || 1,
          gv = zv.limitDeviceRatio || Sv;
        Pv = Pv || zv.adaptToDeviceRatio || !1, this.adaptToDeviceRatio = Pv, this._hardwareScalingLevel = Pv ? 1 / Math.min(gv, Sv) : 1, this._lastDevicePixelRatio = Sv, this._creationOptions = zv
      }
      resize() {
        let vv, zv, Pv = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this.adaptToDeviceRatio) {
          const vv = (0, sv.l)() && window.devicePixelRatio || 1,
            zv = this._lastDevicePixelRatio / vv;
          this._lastDevicePixelRatio = vv, this._hardwareScalingLevel *= zv
        }
        if ((0, sv.l)() && (0, sv.g)())
          if (this._renderingCanvas) {
            const Pv = this._renderingCanvas.getBoundingClientRect?.();
            vv = this._renderingCanvas.clientWidth || Pv?.width || this._renderingCanvas.width * this._hardwareScalingLevel || 100, zv = this._renderingCanvas.clientHeight || Pv?.height || this._renderingCanvas.height * this._hardwareScalingLevel || 100
          } else vv = window.innerWidth, zv = window.innerHeight;
        else vv = this._renderingCanvas ? this._renderingCanvas.width : 100, zv = this._renderingCanvas ? this._renderingCanvas.height : 100;
        this.setSize(vv / this._hardwareScalingLevel, zv / this._hardwareScalingLevel, Pv)
      }
      setSize(vv, zv) {
        let Pv = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (!this._renderingCanvas) return !1;
        if (vv |= 0, zv |= 0, !Pv && this._renderingCanvas.width === vv && this._renderingCanvas.height === zv) return !1;
        if (this._renderingCanvas.width = vv, this._renderingCanvas.height = zv, this.scenes) {
          for (let vv = 0; vv < this.scenes.length; vv++) {
            const zv = this.scenes[vv];
            for (let vv = 0; vv < zv.cameras.length; vv++) {
              zv.cameras[vv]._currentRenderId = 0
            }
          }
          this.onResizeObservable.hasObservers() && this.onResizeObservable.notifyObservers(this)
        }
        return !0
      }
      createRawTexture(vv, zv, Pv, hv, Sv, ev, gv, pv, dv, Nv, lv, Tv) {
        throw (0, wv.m)("engine.rawTexture")
      }
      createRawCubeTexture(vv, zv, Pv, hv, Sv, ev, gv, pv) {
        throw (0, wv.m)("engine.rawTexture")
      }
      createRawTexture3D(vv, zv, Pv, hv, Sv, ev, gv, pv, dv, Nv, lv) {
        throw (0, wv.m)("engine.rawTexture")
      }
      createRawTexture2DArray(vv, zv, Pv, hv, Sv, ev, gv, pv, dv, Nv, lv, Tv) {
        throw (0, wv.m)("engine.rawTexture")
      }
      _sharedInit(vv) {
        this._renderingCanvas = vv
      }
      _setupMobileChecks() {
        navigator && navigator.userAgent && (this._checkForMobile = () => {
          const vv = navigator.userAgent;
          this.hostInformation.isMobile = -1 !== vv.indexOf("Mobile") || -1 !== vv.indexOf("Mac") && (0, sv.g)() && "ontouchend" in document
        }, this._checkForMobile(), (0, sv.l)() && window.addEventListener("resize", this._checkForMobile))
      }
      createVideoElement(vv) {
        return document.createElement("video")
      }
      _reportDrawCall() {
        let vv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        this._drawCalls?.addCount(vv, !1)
      }
      getFps() {
        return this._fps
      }
      getDeltaTime() {
        return this._deltaTime
      }
      isDeterministicLockStep() {
        return this._deterministicLockstep
      }
      getLockstepMaxSteps() {
        return this._lockstepMaxSteps
      }
      getTimeStep() {
        return 1e3 * this._timeStep
      }
      _createImageBitmapFromSource(vv, zv) {
        throw new Error("createImageBitmapFromSource is not implemented")
      }
      createImageBitmap(vv, zv) {
        return createImageBitmap(vv, zv)
      }
      resizeImageBitmap(vv, zv, Pv) {
        throw new Error("resizeImageBitmap is not implemented")
      }
      getFontOffset(vv) {
        throw new Error("getFontOffset is not implemented")
      }
      static _CreateCanvas(vv, zv) {
        if ("undefined" === typeof document) return new OffscreenCanvas(vv, zv);
        const Pv = document.createElement("canvas");
        return Pv.width = vv, Pv.height = zv, Pv
      }
      createCanvas(vv, zv) {
        return cv._CreateCanvas(vv, zv)
      }
      static _FileToolsLoadImage(vv, zv, Pv, hv, Sv, ev, gv) {
        if (!Cv.b.loadImage) throw (0, wv.m)("FileTools");
        return Cv.b.loadImage(vv, zv, Pv, hv, Sv, ev, gv)
      }
      _loadFile(vv, zv, Pv, hv, Sv, ev) {
        const gv = (0, Cv.j)(vv, zv, Pv, hv, Sv, ev);
        return this._activeRequests.push(gv), gv.onCompleteObservable.add((() => {
          const vv = this._activeRequests.indexOf(gv); - 1 !== vv && this._activeRequests.splice(vv, 1)
        })), gv
      }
      static _FileToolsLoadFile(vv, zv, Pv, hv, Sv, ev) {
        if (Cv.b.loadFile) return Cv.b.loadFile(vv, zv, Pv, hv, Sv, ev);
        throw (0, wv.m)("FileTools")
      }
      dispose() {
        for (this.releaseEffects(), this._isDisposed = !0, this.stopRenderLoop(), this._emptyTexture && (this._releaseTexture(this._emptyTexture), this._emptyTexture = null), this._emptyCubeTexture && (this._releaseTexture(this._emptyCubeTexture), this._emptyCubeTexture = null), this._renderingCanvas = null, this.onBeforeTextureInitObservable && this.onBeforeTextureInitObservable.clear(); this.postProcesses.length;) this.postProcesses[0].dispose();
        for (; this.scenes.length;) this.scenes[0].dispose();
        for (; this._virtualScenes.length;) this._virtualScenes[0].dispose();
        this.releaseComputeEffects?.(), Sv.b.ResetCache();
        for (const zv of this._activeRequests) zv.abort();
        this._boundRenderFunction = null, this.uD.notifyObservers(this), this.uD.clear(), this.onResizeObservable.clear(), this.onCanvasBlurObservable.clear(), this.onCanvasFocusObservable.clear(), this.onCanvasPointerOutObservable.clear(), this.onNewSceneAddedObservable.clear(), this.onEffectErrorObservable.clear(), (0, sv.l)() && window.removeEventListener("resize", this._checkForMobile);
        const vv = ev.e.Instances.indexOf(this);
        vv >= 0 && ev.e.Instances.splice(vv, 1), ev.e.Instances.length || (ev.e.OnEnginesDisposedObservable.notifyObservers(this), ev.e.OnEnginesDisposedObservable.clear()), this.onBeginFrameObservable.clear(), this.onEndFrameObservable.clear(), this._onReleaseRenderPassObservable?.clear(), this._onReleaseRenderPassObservable = null
      }
      static DefaultLoadingScreenFactory(vv) {
        throw (0, wv.m)("LoadingScreen")
      }
      static MarkAllMaterialsAsDirty(vv, zv) {
        for (let Pv = 0; Pv < ev.e.Instances.length; Pv++) {
          const hv = ev.e.Instances[Pv];
          for (let Pv = 0; Pv < hv.scenes.length; Pv++) hv.scenes[Pv].markAllMaterialsAsDirty(vv, zv)
        }
      }
      static GetCompatibleTextureLoader(vv, zv) {
        return null
      }
    }
    cv._RenderPassIdCounter = 0, cv._RescalePostProcessFactory = null, cv.CollisionsEpsilon = .001, cv.QueueNewFrame = iv
  },
  39162: (vv, zv, Pv) => {
    Pv.d(zv, {
      d: () => hv
    });
    class hv {
      static GetShadersRepository() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? hv.ShadersRepository : hv.ShadersRepositoryWGSL
      }
      static GetShadersStore() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? hv.ShadersStore : hv.ShadersStoreWGSL
      }
      static GetIncludesShadersStore() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? hv.IncludesShadersStore : hv.IncludesShadersStoreWGSL
      }
    }
    hv.ShadersRepository = "src/Shaders/", hv.ShadersStore = {}, hv.IncludesShadersStore = {}, hv.ShadersRepositoryWGSL = "src/ShadersWGSL/", hv.ShadersStoreWGSL = {}, hv.IncludesShadersStoreWGSL = {}
  },
  39175: (vv, zv, Pv) => {
    Pv.d(zv, {
      e: () => Wv,
      i: () => Gv,
      j: () => av,
      l: () => wv,
      o: () => sv,
      q: () => cv,
      t: () => Tv,
      w: () => Nv,
      A: () => lv,
      E: () => dv,
      G: () => pv
    });
    class hv {
      constructor() {
        this._valueCache = {}, this._matrixValueCache = {}, this.vertexCompilationError = null, this.fragmentCompilationError = null, this.programLinkError = null, this.programValidationError = null, this._isDisposed = !1
      }
      get isAsync() {
        return this.isParallelCompiled
      }
      get isReady() {
        return !!this.program && (!this.isParallelCompiled || this.engine._isRenderingStateCompiled(this))
      }
      _handlesSpectorRebuildCallback(vv) {
        vv && this.program && vv(this.program)
      }
      setEngine(vv) {
        this.engine = vv
      }
      _fillEffectInformation(vv, zv, Pv, hv, Sv, ev, gv, pv) {
        const dv = this.engine;
        if (dv.supportsUniformBuffers)
          for (const lv in zv) vv.bindUniformBlock(lv, zv[lv]);
        let Nv;
        for (this.engine.getUniforms(this, Pv).forEach(((vv, zv) => {
            hv[Pv[zv]] = vv
          })), this._uniforms = hv, Nv = 0; Nv < Sv.length; Nv++) {
          null == vv.getUniform(Sv[Nv]) && (Sv.splice(Nv, 1), Nv--)
        }
        Sv.forEach(((vv, zv) => {
          ev[vv] = zv
        }));
        for (const lv of dv.getAttributes(this, gv)) pv.push(lv)
      }
      dispose() {
        this._uniforms = {}, this._isDisposed = !0
      }
      _cacheMatrix(vv, zv) {
        const Pv = this._valueCache[vv],
          hv = zv.updateFlag;
        if (void 0 !== Pv && Pv === hv) return !1;
        const Sv = zv.pPv();
        let ev = this._matrixValueCache[vv];
        if (void 0 !== Pv && null !== Pv && void 0 !== ev) {
          let zv = !0;
          for (let vv = 15; vv >= 0; vv--)
            if (ev[vv] !== Sv[vv]) {
              zv = !1;
              break
            } if (zv) return this._valueCache[vv] = hv, !1
        }
        return void 0 === ev && (ev = this._matrixValueCache[vv] = new Float32Array(16)), ev.set(Sv), this._valueCache[vv] = hv, !0
      }
      _cacheFloat2(vv, zv, Pv) {
        let hv = this._valueCache[vv];
        if (!hv || 2 !== hv.length) return hv = [zv, Pv], this._valueCache[vv] = hv, !0;
        let Sv = !1;
        return hv[0] !== zv && (hv[0] = zv, Sv = !0), hv[1] !== Pv && (hv[1] = Pv, Sv = !0), Sv
      }
      _cacheFloat3(vv, zv, Pv, hv) {
        let Sv = this._valueCache[vv];
        if (!Sv || 3 !== Sv.length) return Sv = [zv, Pv, hv], this._valueCache[vv] = Sv, !0;
        let ev = !1;
        return Sv[0] !== zv && (Sv[0] = zv, ev = !0), Sv[1] !== Pv && (Sv[1] = Pv, ev = !0), Sv[2] !== hv && (Sv[2] = hv, ev = !0), ev
      }
      _cacheFloat4(vv, zv, Pv, hv, Sv) {
        let ev = this._valueCache[vv];
        if (!ev || 4 !== ev.length) return ev = [zv, Pv, hv, Sv], this._valueCache[vv] = ev, !0;
        let gv = !1;
        return ev[0] !== zv && (ev[0] = zv, gv = !0), ev[1] !== Pv && (ev[1] = Pv, gv = !0), ev[2] !== hv && (ev[2] = hv, gv = !0), ev[3] !== Sv && (ev[3] = Sv, gv = !0), gv
      }
      setInt(vv, zv) {
        const Pv = this._valueCache[vv];
        void 0 !== Pv && Pv === zv || this.engine.setInt(this._uniforms[vv], zv) && (this._valueCache[vv] = zv)
      }
      setInt2(vv, zv, Pv) {
        this._cacheFloat2(vv, zv, Pv) && (this.engine.setInt2(this._uniforms[vv], zv, Pv) || (this._valueCache[vv] = null))
      }
      setInt3(vv, zv, Pv, hv) {
        this._cacheFloat3(vv, zv, Pv, hv) && (this.engine.setInt3(this._uniforms[vv], zv, Pv, hv) || (this._valueCache[vv] = null))
      }
      setInt4(vv, zv, Pv, hv, Sv) {
        this._cacheFloat4(vv, zv, Pv, hv, Sv) && (this.engine.setInt4(this._uniforms[vv], zv, Pv, hv, Sv) || (this._valueCache[vv] = null))
      }
      setIntArray(vv, zv) {
        this._valueCache[vv] = null, this.engine.setIntArray(this._uniforms[vv], zv)
      }
      setIntArray2(vv, zv) {
        this._valueCache[vv] = null, this.engine.setIntArray2(this._uniforms[vv], zv)
      }
      setIntArray3(vv, zv) {
        this._valueCache[vv] = null, this.engine.setIntArray3(this._uniforms[vv], zv)
      }
      setIntArray4(vv, zv) {
        this._valueCache[vv] = null, this.engine.setIntArray4(this._uniforms[vv], zv)
      }
      setUInt(vv, zv) {
        const Pv = this._valueCache[vv];
        void 0 !== Pv && Pv === zv || this.engine.setUInt(this._uniforms[vv], zv) && (this._valueCache[vv] = zv)
      }
      setUInt2(vv, zv, Pv) {
        this._cacheFloat2(vv, zv, Pv) && (this.engine.setUInt2(this._uniforms[vv], zv, Pv) || (this._valueCache[vv] = null))
      }
      setUInt3(vv, zv, Pv, hv) {
        this._cacheFloat3(vv, zv, Pv, hv) && (this.engine.setUInt3(this._uniforms[vv], zv, Pv, hv) || (this._valueCache[vv] = null))
      }
      setUInt4(vv, zv, Pv, hv, Sv) {
        this._cacheFloat4(vv, zv, Pv, hv, Sv) && (this.engine.setUInt4(this._uniforms[vv], zv, Pv, hv, Sv) || (this._valueCache[vv] = null))
      }
      setUIntArray(vv, zv) {
        this._valueCache[vv] = null, this.engine.setUIntArray(this._uniforms[vv], zv)
      }
      setUIntArray2(vv, zv) {
        this._valueCache[vv] = null, this.engine.setUIntArray2(this._uniforms[vv], zv)
      }
      setUIntArray3(vv, zv) {
        this._valueCache[vv] = null, this.engine.setUIntArray3(this._uniforms[vv], zv)
      }
      setUIntArray4(vv, zv) {
        this._valueCache[vv] = null, this.engine.setUIntArray4(this._uniforms[vv], zv)
      }
      setArray(vv, zv) {
        this._valueCache[vv] = null, this.engine.setArray(this._uniforms[vv], zv)
      }
      setArray2(vv, zv) {
        this._valueCache[vv] = null, this.engine.setArray2(this._uniforms[vv], zv)
      }
      setArray3(vv, zv) {
        this._valueCache[vv] = null, this.engine.setArray3(this._uniforms[vv], zv)
      }
      setArray4(vv, zv) {
        this._valueCache[vv] = null, this.engine.setArray4(this._uniforms[vv], zv)
      }
      setMatrices(vv, zv) {
        zv && (this._valueCache[vv] = null, this.engine.setMatrices(this._uniforms[vv], zv))
      }
      setMatrix(vv, zv) {
        this._cacheMatrix(vv, zv) && (this.engine.setMatrices(this._uniforms[vv], zv.pPv()) || (this._valueCache[vv] = null))
      }
      setMatrix3x3(vv, zv) {
        this._valueCache[vv] = null, this.engine.setMatrix3x3(this._uniforms[vv], zv)
      }
      setMatrix2x2(vv, zv) {
        this._valueCache[vv] = null, this.engine.setMatrix2x2(this._uniforms[vv], zv)
      }
      setFloat(vv, zv) {
        const Pv = this._valueCache[vv];
        void 0 !== Pv && Pv === zv || this.engine.setFloat(this._uniforms[vv], zv) && (this._valueCache[vv] = zv)
      }
      setVector2(vv, zv) {
        this._cacheFloat2(vv, zv.x, zv.y) && (this.engine.setFloat2(this._uniforms[vv], zv.x, zv.y) || (this._valueCache[vv] = null))
      }
      setFloat2(vv, zv, Pv) {
        this._cacheFloat2(vv, zv, Pv) && (this.engine.setFloat2(this._uniforms[vv], zv, Pv) || (this._valueCache[vv] = null))
      }
      setVector3(vv, zv) {
        this._cacheFloat3(vv, zv.x, zv.y, zv.z) && (this.engine.setFloat3(this._uniforms[vv], zv.x, zv.y, zv.z) || (this._valueCache[vv] = null))
      }
      setFloat3(vv, zv, Pv, hv) {
        this._cacheFloat3(vv, zv, Pv, hv) && (this.engine.setFloat3(this._uniforms[vv], zv, Pv, hv) || (this._valueCache[vv] = null))
      }
      setVector4(vv, zv) {
        this._cacheFloat4(vv, zv.x, zv.y, zv.z, zv.w) && (this.engine.setFloat4(this._uniforms[vv], zv.x, zv.y, zv.z, zv.w) || (this._valueCache[vv] = null))
      }
      setQuaternion(vv, zv) {
        this._cacheFloat4(vv, zv.x, zv.y, zv.z, zv.w) && (this.engine.setFloat4(this._uniforms[vv], zv.x, zv.y, zv.z, zv.w) || (this._valueCache[vv] = null))
      }
      setFloat4(vv, zv, Pv, hv, Sv) {
        this._cacheFloat4(vv, zv, Pv, hv, Sv) && (this.engine.setFloat4(this._uniforms[vv], zv, Pv, hv, Sv) || (this._valueCache[vv] = null))
      }
      setColor3(vv, zv) {
        this._cacheFloat3(vv, zv.r, zv.g, zv.b) && (this.engine.setFloat3(this._uniforms[vv], zv.r, zv.g, zv.b) || (this._valueCache[vv] = null))
      }
      setColor4(vv, zv, Pv) {
        this._cacheFloat4(vv, zv.r, zv.g, zv.b, Pv) && (this.engine.setFloat4(this._uniforms[vv], zv.r, zv.g, zv.b, Pv) || (this._valueCache[vv] = null))
      }
      setDirectColor4(vv, zv) {
        this._cacheFloat4(vv, zv.r, zv.g, zv.b, zv.a) && (this.engine.setFloat4(this._uniforms[vv], zv.r, zv.g, zv.b, zv.a) || (this._valueCache[vv] = null))
      }
      _getVertexShaderCode() {
        return this.vertexShader ? this.engine._getShaderSource(this.vertexShader) : null
      }
      _getFragmentShaderCode() {
        return this.fragmentShader ? this.engine._getShaderSource(this.fragmentShader) : null
      }
    }
    var Sv = Pv(39184);
    const ev = new WeakMap,
      gv = {
        _webGLVersion: 2,
        cachedPipelines: {}
      };

    function pv(vv) {
      let zv = ev.get(vv);
      if (!zv) {
        if (!vv) return gv;
        zv = {
          _webGLVersion: vv.TEXTURE_BINDING_3D ? 2 : 1,
          _context: vv,
          parallelShaderCompile: vv.getExtension("KHR_parallel_shader_compile") || void 0,
          cachedPipelines: {}
        }, ev.set(vv, zv)
      }
      return zv
    }

    function dv(vv) {
      ev.delete(vv)
    }

    function Nv(vv, zv, Pv, hv, Sv, ev) {
      const gv = pv(hv);
      ev || (ev = gv._createShaderProgramInjection ?? Wv);
      return ev(vv, iv(zv, "vertex", hv, gv._contextWasLost), iv(Pv, "fragment", hv, gv._contextWasLost), hv, Sv, gv.validateShaderPrograms)
    }

    function lv(vv, zv, Pv, hv, Sv) {
      let ev = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        gv = arguments.length > 6 ? arguments[6] : void 0;
      const dv = pv(Sv);
      gv || (gv = dv._createShaderProgramInjection ?? Wv);
      const Nv = dv._webGLVersion > 1 ? "#version 300 es\n#define WEBGL2 \n" : "";
      return gv(vv, Cv(zv, "vertex", hv, Nv, Sv, dv._contextWasLost), Cv(Pv, "fragment", hv, Nv, Sv, dv._contextWasLost), Sv, ev, dv.validateShaderPrograms)
    }

    function Tv(vv, zv) {
      const Pv = new hv,
        Sv = pv(vv);
      return Sv.parallelShaderCompile && !Sv.disableParallelShaderCompile && (Pv.isParallelCompiled = !0), Pv.context = Sv._context, Pv
    }

    function Wv(vv, zv, Pv, hv) {
      let Sv = arguments.length > 5 ? arguments[5] : void 0;
      const ev = hv.createProgram();
      if (vv.program = ev, !ev) throw new Error("Unable to create program");
      return hv.attachShader(ev, zv), hv.attachShader(ev, Pv), hv.linkProgram(ev), vv.context = hv, vv.vertexShader = zv, vv.fragmentShader = Pv, vv.isParallelCompiled || av(vv, hv, Sv), ev
    }

    function wv(vv, zv, Pv) {
      const hv = vv;
      if (hv._isDisposed) return !1;
      const Sv = pv(zv);
      return !!(Sv && Sv.parallelShaderCompile && Sv.parallelShaderCompile.COMPLETION_STATUS_KHR && hv.program && zv.getProgramParameter(hv.program, Sv.parallelShaderCompile.COMPLETION_STATUS_KHR)) && (av(hv, zv, Pv), !0)
    }

    function av(vv, zv, Pv) {
      const hv = vv.context,
        Sv = vv.vertexShader,
        ev = vv.fragmentShader,
        gv = vv.program;
      if (!hv.getProgramParameter(gv, hv.LINK_STATUS)) {
        if (!zv.getShaderParameter(Sv, zv.COMPILE_STATUS)) {
          const Pv = zv.getShaderInfoLog(Sv);
          if (Pv) throw vv.vertexCompilationError = Pv, new Error("VERTEX SHADER " + Pv)
        }
        if (!zv.getShaderParameter(ev, zv.COMPILE_STATUS)) {
          const Pv = zv.getShaderInfoLog(ev);
          if (Pv) throw vv.fragmentCompilationError = Pv, new Error("FRAGMENT SHADER " + Pv)
        }
        const Pv = hv.getProgramInfoLog(gv);
        if (Pv) throw vv.programLinkError = Pv, new Error(Pv)
      }
      if (Pv) {
        hv.validateProgram(gv);
        if (!hv.getProgramParameter(gv, hv.VALIDATE_STATUS)) {
          const zv = hv.getProgramInfoLog(gv);
          if (zv) throw vv.programValidationError = zv, new Error(zv)
        }
      }
      hv.deleteShader(Sv), hv.deleteShader(ev), vv.vertexShader = void 0, vv.fragmentShader = void 0, vv.onCompiled && (vv.onCompiled(), vv.onCompiled = void 0)
    }

    function sv(vv, zv, Pv, hv, Sv, ev, gv, dv, Tv) {
      let Wv = arguments.length > 10 ? arguments[10] : void 0,
        wv = arguments.length > 11 ? arguments[11] : void 0,
        av = arguments.length > 12 ? arguments[12] : void 0;
      const sv = pv(vv.context);
      wv || (wv = sv.createRawShaderProgramInjection ?? Nv), av || (av = sv.createShaderProgramInjection ?? lv);
      const Cv = vv;
      Cv.program = hv ? wv(Cv, zv, Pv, Cv.context, Tv) : av(Cv, zv, Pv, dv, Cv.context, Tv), Cv.program.__SPECTOR_rebuildProgram = gv, Wv()
    }

    function Cv(vv, zv, Pv, hv, ev, gv) {
      return iv((0, Sv.e)(vv, Pv, hv), zv, ev, gv)
    }

    function iv(vv, zv, Pv, hv) {
      const Sv = Pv.createShader("vertex" === zv ? Pv.VERTEX_SHADER : Pv.FRAGMENT_SHADER);
      if (!Sv) {
        let vv, Sv = Pv.NO_ERROR;
        for (;
          (vv = Pv.getError()) !== Pv.NO_ERROR;) Sv = vv;
        throw new Error(`Something went wrong while creating a gl ${zv} shader object. gl error=${Sv}, gl isContextLost=${Pv.isContextLost()}, _contextWasLost=${hv}`)
      }
      return Pv.shaderSource(Sv, vv), Pv.compileShader(Sv), Sv
    }

    function cv(vv, zv) {
      zv.useProgram(vv)
    }

    function Gv(vv, zv) {
      const Pv = vv;
      if (!Pv.isParallelCompiled) return void zv(vv);
      const hv = Pv.onCompiled;
      Pv.onCompiled = () => {
        hv?.(), zv(vv)
      }
    }
  },
  39152: (vv, zv, Pv) => {
    Pv.d(zv, {
      ThinEngine: () => jv
    });
    var hv = Pv(39157),
      Sv = Pv(39175),
      ev = Pv(39212),
      gv = Pv(39230),
      pv = Pv(38209),
      dv = Pv(39167);
    class Nv {
      constructor() {
        this.shaderLanguage = 0
      }
      postProcessor(vv, zv, Pv, hv, Sv) {
        if (Sv.drawBuffersExtensionDisabled) {
          const zv = /#extension.+GL_EXT_draw_buffers.+(enable|require)/g;
          vv = vv.replace(zv, "")
        }
        return vv
      }
    }
    const lv = /(flat\s)?\s*varying\s*.*/;
    class Tv {
      constructor() {
        this.shaderLanguage = 0
      }
      attributeProcessor(vv) {
        return vv.replace("attribute", "in")
      }
      varyingCheck(vv, zv) {
        return lv.test(vv)
      }
      varyingProcessor(vv, zv) {
        return vv.replace("varying", zv ? "in" : "out")
      }
      postProcessor(vv, zv, Pv) {
        const hv = -1 !== vv.search(/#extension.+GL_EXT_draw_buffers.+require/);
        if (vv = (vv = vv.replace(/#extension.+(GL_OVR_multiview2|GL_OES_standard_derivatives|GL_EXT_shader_texture_lod|GL_EXT_frag_depth|GL_EXT_draw_buffers).+(enable|require)/g, "")).replace(/texture2D\s*\(/g, "texture("), Pv) {
          const Pv = -1 !== vv.search(/layout *\(location *= *0\) *out/g),
            Sv = -1 !== zv.indexOf("#define DUAL_SOURCE_BLENDING"),
            ev = Sv ? "layout(location = 0, index = 0) out vec4 glFragColor;\nlayout(location = 0, index = 1) out vec4 glFragColor2;\n" : "layout(location = 0) out vec4 glFragColor;\n";
          Sv && (vv = "#extension GL_EXT_blend_func_extended : require\n" + vv), vv = (vv = (vv = (vv = (vv = (vv = (vv = vv.replace(/texture2DLodEXT\s*\(/g, "textureLod(")).replace(/textureCubeLodEXT\s*\(/g, "textureLod(")).replace(/textureCube\s*\(/g, "texture(")).replace(/gl_FragDepthEXT/g, "gl_FragDepth")).replace(/gl_FragColor/g, "glFragColor")).replace(/gl_FragData/g, "glFragData")).replace(/void\s+?main\s*\(/g, (hv || Pv ? "" : ev) + "void main(")
        } else {
          zv.indexOf("#define VERTEXOUTPUT_INVARIANT") >= 0 && (vv = "invariant gl_Position;\n" + vv);
          if (-1 !== zv.indexOf("#define MULTIVIEW")) return "#extension GL_OVR_multiview2 : require\nlayout (num_views = 2) in;\n" + vv
        }
        return vv
      }
    }
    var Wv = Pv(39239),
      wv = Pv(39247),
      av = Pv(39249),
      sv = Pv(39134),
      Cv = Pv(39184),
      iv = Pv(39164),
      cv = Pv(39255),
      Gv = Pv(39222);
    class mv {}
    class jv extends ev.b {
      get name() {
        return this._name
      }
      set name(vv) {
        this._name = vv
      }
      get version() {
        return this._webGLVersion
      }
      static get ShadersRepository() {
        return hv.b.ShadersRepository
      }
      static set ShadersRepository(vv) {
        hv.b.ShadersRepository = vv
      }
      get supportsUniformBuffers() {
        return this.ka > 1 && !this.disableUniformBuffers
      }
      get needPOTTextures() {
        return this._webGLVersion < 2 || this.forcePOTTextures
      }
      get _supportsHardwareTextureRescaling() {
        return !1
      }
      snapshotRenderingReset() {
        this.snapshotRendering = !1
      }
      constructor(vv, zv, Pv, hv) {
        if (Pv = Pv || {}, super(zv ?? Pv.antialias, Pv, hv), this._name = "WebGL", this.forcePOTTextures = !1, this.validateShaderPrograms = !1, this.disableUniformBuffers = !1, this._webGLVersion = 1, this._integerMRTAttachmentsMask = 0, this._vertexAttribArraysEnabled = [], this._uintIndicesCurrentlySet = !1, this._currentBoundBuffer = new Array, this._currentFramebuffer = null, this._dummyFramebuffer = null, this._currentBufferPointers = new Array, this._currentInstanceLocations = new Array, this._currentInstanceBuffers = new Array, this._vaoRecordInProgress = !1, this._mustWipeVertexAttributes = !1, this._nextFreeTextureSlots = new Array, this._maxSimultaneousTextures = 0, this._maxMSAASamplesOverride = null, this._unpackFlipYCached = null, this.enableUnpackFlipYCached = !0, this._boundUniforms = {}, !vv) return;
        let ev;
        if (vv.getContext) {
          if (ev = vv, void 0 === Pv.preserveDrawingBuffer && (Pv.preserveDrawingBuffer = !1), void 0 === Pv.xrCompatible && (Pv.xrCompatible = !1), navigator && navigator.userAgent) {
            this._setupMobileChecks();
            const vv = navigator.userAgent;
            for (const zv of jv.ExceptionList) {
              const hv = zv.key,
                Sv = zv.targets;
              if (new RegExp(hv).test(vv)) {
                if (zv.capture && zv.captureConstraint) {
                  const Pv = zv.capture,
                    hv = zv.captureConstraint,
                    Sv = new RegExp(Pv).exec(vv);
                  if (Sv && Sv.length > 0) {
                    if (parseInt(Sv[Sv.length - 1]) >= hv) continue
                  }
                }
                for (const vv of Sv) switch (vv) {
                  case "uniformBuffer":
                    this.disableUniformBuffers = !0;
                    break;
                  case "vao":
                    this.disableVertexArrayObjects = !0;
                    break;
                  case "antialias":
                    Pv.antialias = !1;
                    break;
                  case "maxMSAASamples":
                    this._maxMSAASamplesOverride = 1
                }
              }
            }
          }
          if (this._doNotHandleContextLost ? this._onContextLost = () => {
              (0, Sv.E)(this._gl)
            } : (this._onContextLost = vv => {
              vv.preventDefault(), this._contextWasLost = !0, (0, Sv.E)(this._gl), pv.d.Warn("WebGL context lost."), this.onContextLostObservable.notifyObservers(this)
            }, this._onContextRestored = () => {
              this._restoreEngineAfterContextLost((() => this._initGLContext()))
            }, ev.addEventListener("webglcontextrestored", this._onContextRestored, !1), Pv.powerPreference = Pv.powerPreference || "high-performance"), ev.addEventListener("webglcontextlost", this._onContextLost, !1), this._badDesktopOS && (Pv.xrCompatible = !1), !Pv.disableWebGL2Support) try {
            this._gl = ev.getContext("webgl2", Pv) || ev.getContext("experimental-webgl2", Pv), this._gl && (this._webGLVersion = 2, this._shaderPlatformName = "WEBGL2", this._gl.deleteQuery || (this._webGLVersion = 1, this._shaderPlatformName = "WEBGL1"))
          } catch (lv) {}
          if (!this._gl) {
            if (!ev) throw new Error("The provided canvas is null or undefined.");
            try {
              this._gl = ev.getContext("webgl", Pv) || ev.getContext("experimental-webgl", Pv)
            } catch (lv) {
              throw new Error("WebGL not supported", {
                cause: lv
              })
            }
          }
          if (!this._gl) throw new Error("WebGL not supported")
        } else {
          this._gl = vv, ev = this._gl.canvas, this._gl.renderbufferStorageMultisample ? (this._webGLVersion = 2, this._shaderPlatformName = "WEBGL2") : this._shaderPlatformName = "WEBGL1";
          const zv = this._gl.getContextAttributes();
          zv && (Pv.stencil = zv.stencil)
        }
        this._sharedInit(ev), this._gl.pixelStorei(this._gl.UNPACK_COLORSPACE_CONVERSION_WEBGL, this._gl.NONE), void 0 !== Pv.useHighPrecisionFloats && (this._highPrecisionShadersAllowed = Pv.useHighPrecisionFloats), this.resize(), this._initGLContext(), this._initFeatures();
        for (let Sv = 0; Sv < this._caps.maxVertexAttribs; Sv++) this._currentBufferPointers[Sv] = new mv;
        this._shaderProcessor = this.ka > 1 ? new Tv : new Nv;
        const gv = `Babylon.js v${jv.Version}`;
        pv.d.Log(gv + ` - ${this.description}`), this._renderingCanvas && this._renderingCanvas.setAttribute && this._renderingCanvas.setAttribute("data-engine", gv);
        const dv = (0, Sv.G)(this._gl);
        dv.validateShaderPrograms = this.validateShaderPrograms, dv.parallelShaderCompile = this._caps.parallelShaderCompile
      }
      _clearEmptyResources() {
        this._dummyFramebuffer = null, super._clearEmptyResources()
      }
      _getShaderProcessingContext(vv) {
        return null
      }
      areAllEffectsReady() {
        for (const vv in this._compiledEffects) {
          if (!this._compiledEffects[vv].isReady()) return !1
        }
        return !0
      }
      _initGLContext() {
        this._caps = {
          maxTexturesImageUnits: this._gl.getParameter(this._gl.MAX_TEXTURE_IMAGE_UNITS),
          maxCombinedTexturesImageUnits: this._gl.getParameter(this._gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS),
          maxVertexTextureImageUnits: this._gl.getParameter(this._gl.MAX_VERTEX_TEXTURE_IMAGE_UNITS),
          maxTextureSize: this._gl.getParameter(this._gl.MAX_TEXTURE_SIZE),
          maxSamples: this._webGLVersion > 1 ? this._gl.getParameter(this._gl.MAX_SAMPLES) : 1,
          maxCubemapTextureSize: this._gl.getParameter(this._gl.MAX_CUBE_MAP_TEXTURE_SIZE),
          maxRenderTextureSize: this._gl.getParameter(this._gl.MAX_RENDERBUFFER_SIZE),
          maxVertexAttribs: this._gl.getParameter(this._gl.MAX_VERTEX_ATTRIBS),
          maxVaryingVectors: this._gl.getParameter(this._gl.MAX_VARYING_VECTORS),
          maxFragmentUniformVectors: this._gl.getParameter(this._gl.MAX_FRAGMENT_UNIFORM_VECTORS),
          maxVertexUniformVectors: this._gl.getParameter(this._gl.MAX_VERTEX_UNIFORM_VECTORS),
          shaderFloatPrecision: 0,
          parallelShaderCompile: this._gl.getExtension("KHR_parallel_shader_compile") || void 0,
          standardDerivatives: this._webGLVersion > 1 || null !== this._gl.getExtension("OES_standard_derivatives"),
          maxAnisotropy: 1,
          astc: this._gl.getExtension("WEBGL_compressed_texture_astc") || this._gl.getExtension("WEBKIT_WEBGL_compressed_texture_astc"),
          bptc: this._gl.getExtension("EXT_texture_compression_bptc") || this._gl.getExtension("WEBKIT_EXT_texture_compression_bptc"),
          s3tc: this._gl.getExtension("WEBGL_compressed_texture_s3tc") || this._gl.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc"),
          s3tc_srgb: this._gl.getExtension("WEBGL_compressed_texture_s3tc_srgb") || this._gl.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc_srgb"),
          pvrtc: this._gl.getExtension("WEBGL_compressed_texture_pvrtc") || this._gl.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc"),
          etc1: this._gl.getExtension("WEBGL_compressed_texture_etc1") || this._gl.getExtension("WEBKIT_WEBGL_compressed_texture_etc1"),
          etc2: this._gl.getExtension("WEBGL_compressed_texture_etc") || this._gl.getExtension("WEBKIT_WEBGL_compressed_texture_etc") || this._gl.getExtension("WEBGL_compressed_texture_es3_0"),
          textureAnisotropicFilterExtension: this._gl.getExtension("EXT_texture_filter_anisotropic") || this._gl.getExtension("WEBKIT_EXT_texture_filter_anisotropic") || this._gl.getExtension("MOZ_EXT_texture_filter_anisotropic"),
          uintIndices: this._webGLVersion > 1 || null !== this._gl.getExtension("OES_element_index_uint"),
          fragmentDepthSupported: this._webGLVersion > 1 || null !== this._gl.getExtension("EXT_frag_depth"),
          highPrecisionShaderSupported: !1,
          timerQuery: this._gl.getExtension("EXT_disjoint_timer_query_webgl2") || this._gl.getExtension("EXT_disjoint_timer_query"),
          supportOcclusionQuery: this._webGLVersion > 1,
          canUseTimestampForTimerQuery: !1,
          drawBuffersExtension: !1,
          maxMSAASamples: 1,
          colorBufferFloat: !!(this._webGLVersion > 1 && this._gl.getExtension("EXT_color_buffer_float")),
          blendFloat: null !== this._gl.getExtension("EXT_float_blend"),
          supportFloatTexturesResolve: !1,
          rg11b10ufColorRenderable: !1,
          colorBufferHalfFloat: !!(this._webGLVersion > 1 && this._gl.getExtension("EXT_color_buffer_half_float")),
          textureFloat: !!(this._webGLVersion > 1 || this._gl.getExtension("OES_texture_float")),
          textureHalfFloat: !!(this._webGLVersion > 1 || this._gl.getExtension("OES_texture_half_float")),
          textureHalfFloatRender: !1,
          textureFloatLinearFiltering: !1,
          textureFloatRender: !1,
          textureHalfFloatLinearFiltering: !1,
          vertexArrayObject: !1,
          instancedArrays: !1,
          textureLOD: !!(this._webGLVersion > 1 || this._gl.getExtension("EXT_shader_texture_lod")),
          texelFetch: 1 !== this._webGLVersion,
          blendMinMax: !1,
          multiview: this._gl.getExtension("OVR_multiview2"),
          oculusMultiview: this._gl.getExtension("OCULUS_multiview"),
          depthTextureExtension: !1,
          canUseGLInstanceID: this._webGLVersion > 1,
          canUseGLVertexID: this._webGLVersion > 1,
          supportComputeShaders: !1,
          supportSRGBBuffers: !1,
          supportTransformFeedbacks: this._webGLVersion > 1,
          textureMaxLevel: this._webGLVersion > 1,
          texture2DArrayMaxLayerCount: this._webGLVersion > 1 ? this._gl.getParameter(this._gl.MAX_ARRAY_TEXTURE_LAYERS) : 128,
          disableMorphTargetTexture: !1,
          textureNorm16: !!this._gl.getExtension("EXT_texture_norm16"),
          blendParametersPerTarget: !1,
          dualSourceBlending: !1,
          supportReadWriteStorageTextures: !1
        }, this._caps.supportFloatTexturesResolve = this._caps.colorBufferFloat, this._caps.rg11b10ufColorRenderable = this._caps.colorBufferFloat, this._glVersion = this._gl.getParameter(this._gl.VERSION);
        const vv = this._gl.getExtension("WEBGL_debug_renderer_info");
        null != vv && (this._glRenderer = this._gl.getParameter(vv.UNMASKED_RENDERER_WEBGL), this._glVendor = this._gl.getParameter(vv.UNMASKED_VENDOR_WEBGL)), this._glVendor || (this._glVendor = this._gl.getParameter(this._gl.VENDOR) || "Unknown vendor"), this._glRenderer || (this._glRenderer = this._gl.getParameter(this._gl.RENDERER) || "Unknown renderer"), 36193 !== this._gl.HALF_FLOAT_OES && (this._gl.HALF_FLOAT_OES = 36193), 34842 !== this._gl.RGBA16F && (this._gl.RGBA16F = 34842), 34836 !== this._gl.RGBA32F && (this._gl.RGBA32F = 34836), 35056 !== this._gl.DEPTH24_STENCIL8 && (this._gl.DEPTH24_STENCIL8 = 35056), this._caps.timerQuery && (1 === this._webGLVersion && (this._gl.getQuery = this._caps.timerQuery.getQueryEXT.bind(this._caps.timerQuery)), this._caps.canUseTimestampForTimerQuery = (this._gl.getQuery(this._caps.timerQuery.TIMESTAMP_EXT, this._caps.timerQuery.QUERY_COUNTER_BITS_EXT) ?? 0) > 0), this._caps.maxAnisotropy = this._caps.textureAnisotropicFilterExtension ? this._gl.getParameter(this._caps.textureAnisotropicFilterExtension.MAX_TEXTURE_MAX_ANISOTROPY_EXT) : 0, this._caps.textureFloatLinearFiltering = !(!this._caps.textureFloat || !this._gl.getExtension("OES_texture_float_linear")), this._caps.textureFloatRender = !(!this._caps.textureFloat || !this._canRenderToFloatFramebuffer()), this._caps.textureHalfFloatLinearFiltering = !!(this._webGLVersion > 1 || this._caps.textureHalfFloat && this._gl.getExtension("OES_texture_half_float_linear")), this._caps.textureNorm16 && (this._gl.R16_EXT = 33322, this._gl.RG16_EXT = 33324, this._gl.RGB16_EXT = 32852, this._gl.RGBA16_EXT = 32859, this._gl.R16_SNORM_EXT = 36760, this._gl.RG16_SNORM_EXT = 36761, this._gl.RGB16_SNORM_EXT = 36762, this._gl.RGBA16_SNORM_EXT = 36763);
        const zv = this._gl.getExtension("OES_draw_buffers_indexed");
        if (this._caps.blendParametersPerTarget = !!zv, this._alphaState = new Gv.e(this._caps.blendParametersPerTarget), zv && (this._gl.blendEquationSeparateIndexed = zv.blendEquationSeparateiOES.bind(zv), this._gl.blendEquationIndexed = zv.blendEquationiOES.bind(zv), this._gl.blendFuncSeparateIndexed = zv.blendFuncSeparateiOES.bind(zv), this._gl.blendFuncIndexed = zv.blendFunciOES.bind(zv), this._gl.colorMaskIndexed = zv.colorMaskiOES.bind(zv), this._gl.disableIndexed = zv.disableiOES.bind(zv), this._gl.enableIndexed = zv.enableiOES.bind(zv)), this._caps.dualSourceBlending = !!this._gl.getExtension("WEBGL_blend_func_extended"), this._caps.astc && (this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR), this._caps.bptc && (this._gl.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT = this._caps.bptc.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT), this._caps.s3tc_srgb && (this._gl.COMPRESSED_SRGB_S3TC_DXT1_EXT = this._caps.s3tc_srgb.COMPRESSED_SRGB_S3TC_DXT1_EXT, this._gl.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT = this._caps.s3tc_srgb.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT, this._gl.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT = this._caps.s3tc_srgb.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT), this._caps.etc2 && (this._gl.COMPRESSED_SRGB8_ETC2 = this._caps.etc2.COMPRESSED_SRGB8_ETC2, this._gl.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC = this._caps.etc2.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC), this._webGLVersion > 1 && 5131 !== this._gl.HALF_FLOAT_OES && (this._gl.HALF_FLOAT_OES = 5131), this._caps.textureHalfFloatRender = this._caps.textureHalfFloat && this._canRenderToHalfFloatFramebuffer(), this._webGLVersion > 1) this._caps.drawBuffersExtension = !0, this._caps.maxMSAASamples = null !== this._maxMSAASamplesOverride ? this._maxMSAASamplesOverride : this._gl.getParameter(this._gl.MAX_SAMPLES), this._caps.maxDrawBuffers = this._gl.getParameter(this._gl.MAX_DRAW_BUFFERS);
        else {
          const vv = this._gl.getExtension("WEBGL_draw_buffers");
          if (null !== vv) {
            this._caps.drawBuffersExtension = !0, this._gl.drawBuffers = vv.drawBuffersWEBGL.bind(vv), this._caps.maxDrawBuffers = this._gl.getParameter(vv.MAX_DRAW_BUFFERS_WEBGL), this._gl.DRAW_FRAMEBUFFER = this._gl.FRAMEBUFFER;
            for (let zv = 0; zv < 16; zv++) this._gl["COLOR_ATTACHMENT" + zv + "_WEBGL"] = vv["COLOR_ATTACHMENT" + zv + "_WEBGL"]
          }
        }
        if (this._webGLVersion > 1) this._caps.depthTextureExtension = !0;
        else {
          const vv = this._gl.getExtension("WEBGL_depth_texture");
          null != vv && (this._caps.depthTextureExtension = !0, this._gl.UNSIGNED_INT_24_8 = vv.UNSIGNED_INT_24_8_WEBGL)
        }
        if (this.disableVertexArrayObjects) this._caps.vertexArrayObject = !1;
        else if (this._webGLVersion > 1) this._caps.vertexArrayObject = !0;
        else {
          const vv = this._gl.getExtension("OES_vertex_array_object");
          null != vv && (this._caps.vertexArrayObject = !0, this._gl.createVertexArray = vv.createVertexArrayOES.bind(vv), this._gl.bindVertexArray = vv.bindVertexArrayOES.bind(vv), this._gl.deleteVertexArray = vv.deleteVertexArrayOES.bind(vv))
        }
        if (this._webGLVersion > 1) this._caps.instancedArrays = !0;
        else {
          const vv = this._gl.getExtension("ANGLE_instanced_arrays");
          null != vv ? (this._caps.instancedArrays = !0, this._gl.drawArraysInstanced = vv.drawArraysInstancedANGLE.bind(vv), this._gl.drawElementsInstanced = vv.drawElementsInstancedANGLE.bind(vv), this._gl.vertexAttribDivisor = vv.vertexAttribDivisorANGLE.bind(vv)) : this._caps.instancedArrays = !1
        }
        if (this._gl.getShaderPrecisionFormat) {
          const vv = this._gl.getShaderPrecisionFormat(this._gl.VERTEX_SHADER, this._gl.HIGH_FLOAT),
            zv = this._gl.getShaderPrecisionFormat(this._gl.FRAGMENT_SHADER, this._gl.HIGH_FLOAT);
          if (vv && zv && (this._caps.highPrecisionShaderSupported = 0 !== vv.precision && 0 !== zv.precision, this._caps.shaderFloatPrecision = Math.min(vv.precision, zv.precision)), !this._shouldUseHighPrecisionShader) {
            const vv = this._gl.getShaderPrecisionFormat(this._gl.VERTEX_SHADER, this._gl.MEDIUM_FLOAT),
              zv = this._gl.getShaderPrecisionFormat(this._gl.FRAGMENT_SHADER, this._gl.MEDIUM_FLOAT);
            vv && zv && (this._caps.shaderFloatPrecision = Math.min(vv.precision, zv.precision))
          }
          this._caps.shaderFloatPrecision < 10 && (this._caps.shaderFloatPrecision = 10)
        }
        if (this._webGLVersion > 1) this._caps.blendMinMax = !0;
        else {
          const vv = this._gl.getExtension("EXT_blend_minmax");
          null != vv && (this._caps.blendMinMax = !0, this._gl.MAX = vv.MAX_EXT, this._gl.MIN = vv.MIN_EXT)
        }
        if (!this._caps.supportSRGBBuffers) {
          if (this._webGLVersion > 1) this._caps.supportSRGBBuffers = !0, this._glSRGBExtensionValues = {
            SRGB: WebGL2RenderingContext.SRGB,
            SRGB8: WebGL2RenderingContext.SRGB8,
            SRGB8_ALPHA8: WebGL2RenderingContext.SRGB8_ALPHA8
          };
          else {
            const vv = this._gl.getExtension("EXT_sRGB");
            null != vv && (this._caps.supportSRGBBuffers = !0, this._glSRGBExtensionValues = {
              SRGB: vv.SRGB_EXT,
              SRGB8: vv.SRGB_ALPHA_EXT,
              SRGB8_ALPHA8: vv.SRGB_ALPHA_EXT
            })
          }
          if (this._creationOptions) {
            const vv = this._creationOptions.forceSRGBBufferSupportState;
            void 0 !== vv && (this._caps.supportSRGBBuffers = this._caps.supportSRGBBuffers && vv)
          }
        }
        this._depthCullingState.depthTest = !0, this._depthCullingState.depthFunc = this._gl.LEQUAL, this._depthCullingState.depthMask = !0, this._maxSimultaneousTextures = this._caps.maxCombinedTexturesImageUnits;
        for (let Pv = 0; Pv < this._maxSimultaneousTextures; Pv++) this._nextFreeTextureSlots.push(Pv);
        "Mali-G72" === this._glRenderer && (this._caps.disableMorphTargetTexture = !0)
      }
      _initFeatures() {
        this._features = {
          forceBitmapOverHTMLImageElement: "undefined" === typeof HTMLImageElement,
          supportRenderAndCopyToLodForFloatTextures: 1 !== this._webGLVersion,
          supportDepthStencilTexture: 1 !== this._webGLVersion,
          supportShadowSamplers: 1 !== this._webGLVersion,
          uniformBufferHardCheckMatrix: !1,
          allowTexturePrefiltering: 1 !== this._webGLVersion,
          trackUbosInFrame: !1,
          checkUbosContentBeforeUpload: !1,
          supportCSM: 1 !== this._webGLVersion,
          basisNeedsPOT: 1 === this._webGLVersion,
          support3DTextures: 1 !== this._webGLVersion,
          needTypeSuffixInShaderConstants: 1 !== this._webGLVersion,
          supportMSAA: 1 !== this._webGLVersion,
          supportSSAO2: 1 !== this._webGLVersion,
          supportIBLShadows: 1 !== this._webGLVersion,
          supportExtendedTextureFormats: 1 !== this._webGLVersion,
          supportSwitchCaseInShader: 1 !== this._webGLVersion,
          supportSyncTextureRead: !0,
          needsInvertingBitmap: !0,
          useUBOBindingCache: !0,
          needShaderCodeInlining: !1,
          needToAlwaysBindUniformBuffers: !1,
          supportRenderPasses: !1,
          supportSpriteInstancing: !0,
          forceVertexBufferStrideAndOffsetMultiple4Bytes: !1,
          _checkNonFloatVertexBuffersDontRecreatePipelineContext: !1
        }
      }
      get ka() {
        return this._webGLVersion
      }
      getClassName() {
        return "ThinEngine"
      }
      _prepareWorkingCanvas() {
        if (this._workingCanvas) return;
        this._workingCanvas = this.createCanvas(1, 1);
        const vv = this._workingCanvas.getContext("2d");
        vv && (this._workingContext = vv)
      }
      getInfo() {
        return this.getGlInfo()
      }
      getGlInfo() {
        return {
          vendor: this._glVendor,
          renderer: this._glRenderer,
          version: this._glVersion
        }
      }
      extractDriverInfo() {
        const vv = this.getGlInfo();
        return vv && vv.renderer ? vv.renderer : ""
      }
      getRenderWidth() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && this._currentRenderTarget ? this._currentRenderTarget.width : this._framebufferDimensionsObject ? this._framebufferDimensionsObject.framebufferWidth : this._gl.drawingBufferWidth
      }
      getRenderHeight() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && this._currentRenderTarget ? this._currentRenderTarget.height : this._framebufferDimensionsObject ? this._framebufferDimensionsObject.framebufferHeight : this._gl.drawingBufferHeight
      }
      clear(vv, zv, Pv) {
        let hv = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          Sv = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
        const ev = this.stencilStateComposer.useStencilGlobalOnly;
        this.stencilStateComposer.useStencilGlobalOnly = !0, this.applyStates(), this.stencilStateComposer.useStencilGlobalOnly = ev;
        let gv = 0;
        if (zv && vv) {
          let zv = !0;
          if (this._currentRenderTarget) {
            const Pv = this._currentRenderTarget.texture?.format;
            if (void 0 !== Pv && (0, cv.g)(Pv)) {
              const Pv = this._currentRenderTarget.texture?.type;
              void 0 !== Pv && (0, cv.h)(Pv) ? (jv._TempClearColorUint32[0] = 255 * vv.r, jv._TempClearColorUint32[1] = 255 * vv.g, jv._TempClearColorUint32[2] = 255 * vv.b, jv._TempClearColorUint32[3] = 255 * vv.a, this._gl.clearBufferuiv(this._gl.COLOR, 0, jv._TempClearColorUint32), zv = !1) : (jv._TempClearColorInt32[0] = 255 * vv.r, jv._TempClearColorInt32[1] = 255 * vv.g, jv._TempClearColorInt32[2] = 255 * vv.b, jv._TempClearColorInt32[3] = 255 * vv.a, this._gl.clearBufferiv(this._gl.COLOR, 0, jv._TempClearColorInt32), zv = !1)
            }
          }
          zv && (this._gl.clearColor(vv.r, vv.g, vv.b, void 0 !== vv.a ? vv.a : 1), gv |= this._gl.COLOR_BUFFER_BIT)
        }
        Pv && (this.SPv ? (this._depthCullingState.depthFunc = this._gl.GEQUAL, this._gl.clearDepth(0)) : this._gl.clearDepth(1), gv |= this._gl.DEPTH_BUFFER_BIT), hv && (this._gl.clearStencil(Sv), gv |= this._gl.STENCIL_BUFFER_BIT), this._gl.clear(gv)
      }
      _clearColorAttachment(vv, zv, Pv, hv) {
        if ((0, cv.g)(Pv)) {
          const Pv = (0, cv.h)(hv),
            Sv = Pv ? jv._TempClearColorUint32 : jv._TempClearColorInt32;
          return Sv[0] = zv.r, Sv[1] = zv.g, Sv[2] = zv.b, Sv[3] = zv.a, void(Pv ? this._gl.clearBufferuiv(this._gl.COLOR, vv, Sv) : this._gl.clearBufferiv(this._gl.COLOR, vv, Sv))
        }
        jv._TempClearColorFloat32[0] = zv.r, jv._TempClearColorFloat32[1] = zv.g, jv._TempClearColorFloat32[2] = zv.b, jv._TempClearColorFloat32[3] = zv.a, this._gl.clearBufferfv(this._gl.COLOR, vv, jv._TempClearColorFloat32)
      }
      _viewport(vv, zv, Pv, hv) {
        vv === this._viewportCached.x && zv === this._viewportCached.y && Pv === this._viewportCached.z && hv === this._viewportCached.w || (this._viewportCached.x = vv, this._viewportCached.y = zv, this._viewportCached.z = Pv, this._viewportCached.w = hv, this._gl.viewport(vv, zv, Pv, hv))
      }
      Zm() {
        super.Zm(), this._badOS && this.flushFramebuffer()
      }
      get performanceMonitor() {
        throw new Error("Not Supported by ThinEngine")
      }
      bindFramebuffer(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          Pv = arguments.length > 2 ? arguments[2] : void 0,
          hv = arguments.length > 3 ? arguments[3] : void 0,
          Sv = arguments.length > 4 ? arguments[4] : void 0,
          ev = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          gv = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        const dv = vv;
        this._currentRenderTarget && this._resolveAndGenerateMipMapsFramebuffer(this._currentRenderTarget), this._currentRenderTarget = vv, this._integerMRTAttachmentsMask = !vv.isMulti && vv.texture && (0, cv.g)(vv.texture.format) ? 1 : 0, this._bindUnboundFramebuffer(dv._framebuffer);
        const Nv = this._gl;
        vv.isMulti || (vv.is2DArray || vv.is3D ? (Nv.framebufferTextureLayer(Nv.FRAMEBUFFER, Nv.COLOR_ATTACHMENT0, vv.texture._hardwareTexture?.underlyingResource, ev, gv), dv._currentLOD = ev) : vv.isCube ? Nv.framebufferTexture2D(Nv.FRAMEBUFFER, Nv.COLOR_ATTACHMENT0, Nv.TEXTURE_CUBE_MAP_POSITIVE_X + zv, vv.texture._hardwareTexture?.underlyingResource, ev) : dv._currentLOD !== ev && (Nv.framebufferTexture2D(Nv.FRAMEBUFFER, Nv.COLOR_ATTACHMENT0, Nv.TEXTURE_2D, vv.texture._hardwareTexture?.underlyingResource, ev), dv._currentLOD = ev));
        const lv = vv._depthStencilTexture;
        if (lv) {
          vv.is3D && (vv.texture.width === lv.width && vv.texture.height === lv.height && vv.texture.depth === lv.depth || pv.d.Warn("Depth/Stencil attachment for 3D target must have same dimensions as color attachment"));
          const Pv = vv._depthStencilTextureWithStencil ? Nv.DEPTH_STENCIL_ATTACHMENT : Nv.DEPTH_ATTACHMENT;
          vv.is2DArray || vv.is3D ? Nv.framebufferTextureLayer(Nv.FRAMEBUFFER, Pv, lv._hardwareTexture?.underlyingResource, ev, gv) : vv.isCube ? Nv.framebufferTexture2D(Nv.FRAMEBUFFER, Pv, Nv.TEXTURE_CUBE_MAP_POSITIVE_X + zv, lv._hardwareTexture?.underlyingResource, ev) : Nv.framebufferTexture2D(Nv.FRAMEBUFFER, Pv, Nv.TEXTURE_2D, lv._hardwareTexture?.underlyingResource, ev)
        }
        dv._MSAAFramebuffer && this._bindUnboundFramebuffer(dv._MSAAFramebuffer), this._cachedViewport && !Sv ? this.setViewport(this._cachedViewport, Pv, hv) : (Pv || (Pv = vv.width, ev && (Pv /= Math.pow(2, ev))), hv || (hv = vv.height, ev && (hv /= Math.pow(2, ev))), this._viewport(0, 0, Pv, hv)), this.wipeCaches()
      }
      setStateCullFaceType(vv, zv) {
        const Pv = this.cullBackFaces ?? vv ?? 1 ? this._gl.BACK : this._gl.FRONT;
        (this._depthCullingState.cullFace !== Pv || zv) && (this._depthCullingState.cullFace = Pv)
      }
      setState(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          Pv = arguments.length > 2 ? arguments[2] : void 0,
          hv = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          Sv = arguments.length > 4 ? arguments[4] : void 0,
          ev = arguments.length > 5 ? arguments[5] : void 0,
          gv = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        (this._depthCullingState.cull !== vv || Pv) && (this._depthCullingState.cull = vv), this.setStateCullFaceType(Sv, Pv), this.setZOffset(zv), this.setZOffsetUnits(gv);
        const pv = hv ? this._gl.CW : this._gl.CCW;
        (this._depthCullingState.frontFace !== pv || Pv) && (this._depthCullingState.frontFace = pv), this._stencilStateComposer.stencilMaterial = ev
      }
      _resolveAndGenerateMipMapsFramebuffer(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        vv.disableAutomaticMSAAResolve || (vv.isMulti ? this.resolveMultiFramebuffer(vv) : this.resolveFramebuffer(vv)), zv || (vv.isMulti ? this.generateMipMapsMultiFramebuffer(vv) : this.generateMipMapsFramebuffer(vv))
      }
      _bindUnboundFramebuffer(vv) {
        this._currentFramebuffer !== vv && (this._gl.bindFramebuffer(this._gl.FRAMEBUFFER, vv), this._currentFramebuffer = vv)
      }
      _currentFrameBufferIsDefaultFrameBuffer() {
        return null === this._currentFramebuffer
      }
      generateMipmaps(vv) {
        const zv = this._getTextureTarget(vv);
        this._bindTextureDirectly(zv, vv, !0), this._gl.generateMipmap(zv), this._bindTextureDirectly(zv, null)
      }
      unBindFramebuffer(vv, zv, Pv) {
        const hv = vv;
        this._currentRenderTarget = null, this._integerMRTAttachmentsMask = 0, this._resolveAndGenerateMipMapsFramebuffer(vv, zv), Pv && (hv._MSAAFramebuffer && this._bindUnboundFramebuffer(hv._framebuffer), Pv()), this._bindUnboundFramebuffer(null)
      }
      generateMipMapsFramebuffer(vv) {
        vv.isMulti || !vv.texture?.generateMipMaps || vv.isCube || this.generateMipmaps(vv.texture)
      }
      resolveFramebuffer(vv) {
        const zv = vv,
          Pv = this._gl;
        if (!zv._MSAAFramebuffer || zv.isMulti) return;
        let hv = zv.resolveMSAAColors ? Pv.COLOR_BUFFER_BIT : 0;
        hv |= zv._generateDepthBuffer && zv.resolveMSAADepth ? Pv.DEPTH_BUFFER_BIT : 0, hv |= zv._generateStencilBuffer && zv.resolveMSAAStencil ? Pv.STENCIL_BUFFER_BIT : 0, Pv.bindFramebuffer(Pv.READ_FRAMEBUFFER, zv._MSAAFramebuffer), Pv.bindFramebuffer(Pv.DRAW_FRAMEBUFFER, zv._framebuffer), Pv.blitFramebuffer(0, 0, vv.width, vv.height, 0, 0, vv.width, vv.height, hv, Pv.NEAREST)
      }
      flushFramebuffer() {
        this._gl.flush()
      }
      restoreDefaultFramebuffer() {
        this._currentRenderTarget ? this.unBindFramebuffer(this._currentRenderTarget) : this._bindUnboundFramebuffer(null), this._cachedViewport && this.setViewport(this._cachedViewport), this.wipeCaches()
      }
      _resetVertexBufferBinding() {
        this.bindArrayBuffer(null), this._cachedVertexBuffers = null
      }
      createVertexBuffer(vv, zv, Pv) {
        return this._createVertexBuffer(vv, this._gl.STATIC_DRAW)
      }
      _createVertexBuffer(vv, zv) {
        const Pv = this._gl.createBuffer();
        if (!Pv) throw new Error("Unable to create vertex buffer");
        const hv = new Wv.b(Pv);
        return this.bindArrayBuffer(hv), "number" !== typeof vv ? vv instanceof Array ? (this._gl.bufferData(this._gl.ARRAY_BUFFER, new Float32Array(vv), zv), hv.GT = 4 * vv.length) : (this._gl.bufferData(this._gl.ARRAY_BUFFER, vv, zv), hv.GT = vv.byteLength) : (this._gl.bufferData(this._gl.ARRAY_BUFFER, new Uint8Array(vv), zv), hv.GT = vv), this._resetVertexBufferBinding(), hv.references = 1, hv
      }
      createDynamicVertexBuffer(vv, zv) {
        return this._createVertexBuffer(vv, this._gl.DYNAMIC_DRAW)
      }
      _resetIndexBufferBinding() {
        this.bindIndexBuffer(null), this._cachedIndexBuffer = null
      }
      createIndexBuffer(vv, zv, Pv) {
        const hv = this._gl.createBuffer(),
          Sv = new Wv.b(hv);
        if (!hv) throw new Error("Unable to create index buffer");
        this.bindIndexBuffer(Sv);
        const ev = this._normalizeIndexData(vv);
        return this._gl.bufferData(this._gl.ELEMENT_ARRAY_BUFFER, ev, zv ? this._gl.DYNAMIC_DRAW : this._gl.STATIC_DRAW), this._resetIndexBufferBinding(), Sv.references = 1, Sv.is32Bits = 4 === ev.BYTES_PER_ELEMENT, Sv
      }
      _normalizeIndexData(vv) {
        if (2 === vv.BYTES_PER_ELEMENT) return vv;
        if (this._caps.uintIndices) {
          if (vv instanceof Uint32Array) return vv;
          for (let zv = 0; zv < vv.length; zv++)
            if (vv[zv] >= 65535) return new Uint32Array(vv);
          return new Uint16Array(vv)
        }
        return new Uint16Array(vv)
      }
      bindArrayBuffer(vv) {
        this._vaoRecordInProgress || this._unbindVertexArrayObject(), this._bindBuffer(vv, this._gl.ARRAY_BUFFER)
      }
      bindUniformBlock(vv, zv, Pv) {
        const hv = vv.program,
          Sv = this._gl.getUniformBlockIndex(hv, zv);
        this._gl.uniformBlockBinding(hv, Sv, Pv)
      }
      bindIndexBuffer(vv) {
        this._vaoRecordInProgress || this._unbindVertexArrayObject(), this._bindBuffer(vv, this._gl.ELEMENT_ARRAY_BUFFER)
      }
      _bindBuffer(vv, zv) {
        (this._vaoRecordInProgress || this._currentBoundBuffer[zv] !== vv) && (this._gl.bindBuffer(zv, vv ? vv.underlyingResource : null), this._currentBoundBuffer[zv] = vv)
      }
      updateArrayBuffer(vv) {
        this._gl.bufferSubData(this._gl.ARRAY_BUFFER, 0, vv)
      }
      _vertexAttribPointer(vv, zv, Pv, hv, Sv, ev, gv) {
        const pv = this._currentBufferPointers[zv];
        if (!pv) return;
        let dv = !1;
        pv.active ? (pv.buffer !== vv && (pv.buffer = vv, dv = !0), pv.size !== Pv && (pv.size = Pv, dv = !0), pv.type !== hv && (pv.type = hv, dv = !0), pv.normalized !== Sv && (pv.normalized = Sv, dv = !0), pv.stride !== ev && (pv.stride = ev, dv = !0), pv.offset !== gv && (pv.offset = gv, dv = !0)) : (dv = !0, pv.active = !0, pv.index = zv, pv.size = Pv, pv.type = hv, pv.normalized = Sv, pv.stride = ev, pv.offset = gv, pv.buffer = vv), (dv || this._vaoRecordInProgress) && (this.bindArrayBuffer(vv), hv === this._gl.UNSIGNED_INT || hv === this._gl.INT ? this._gl.vertexAttribIPointer(zv, Pv, hv, ev, gv) : this._gl.vertexAttribPointer(zv, Pv, hv, Sv, ev, gv))
      }
      _bindIndexBufferWithCache(vv) {
        null != vv && this._cachedIndexBuffer !== vv && (this._cachedIndexBuffer = vv, this.bindIndexBuffer(vv), this._uintIndicesCurrentlySet = vv.is32Bits)
      }
      _bindVertexBuffersAttributes(vv, zv, Pv) {
        const hv = zv.getAttributesNames();
        this._vaoRecordInProgress || this._unbindVertexArrayObject(), this.unbindAllAttributes();
        for (let Sv = 0; Sv < hv.length; Sv++) {
          const ev = zv.getAttributeLocation(Sv);
          if (ev >= 0) {
            const zv = hv[Sv];
            let gv = null;
            if (Pv && (gv = Pv[zv]), gv || (gv = vv[zv]), !gv) continue;
            this._gl.enableVertexAttribArray(ev), this._vaoRecordInProgress || (this._vertexAttribArraysEnabled[ev] = !0);
            const pv = gv.getBuffer();
            pv && (this._vertexAttribPointer(pv, ev, gv.getSize(), gv.type, gv.normalized, gv.byteStride, gv.byteOffset), gv.getIsInstanced() && (this._gl.vertexAttribDivisor(ev, gv.getInstanceDivisor()), this._vaoRecordInProgress || (this._currentInstanceLocations.push(ev), this._currentInstanceBuffers.push(pv))))
          }
        }
      }
      recordVertexArrayObject(vv, zv, Pv, hv) {
        const Sv = this._gl.createVertexArray();
        if (!Sv) throw new Error("Unable to create VAO");
        return this._vaoRecordInProgress = !0, this._gl.bindVertexArray(Sv), this._mustWipeVertexAttributes = !0, this._bindVertexBuffersAttributes(vv, Pv, hv), this.bindIndexBuffer(zv), this._vaoRecordInProgress = !1, this._gl.bindVertexArray(null), Sv
      }
      bindVertexArrayObject(vv, zv) {
        this._cachedVertexArrayObject !== vv && (this._cachedVertexArrayObject = vv, this._gl.bindVertexArray(vv), this._cachedVertexBuffers = null, this._cachedIndexBuffer = null, this._uintIndicesCurrentlySet = null != zv && zv.is32Bits, this._mustWipeVertexAttributes = !0)
      }
      bindBuffersDirectly(vv, zv, Pv, hv, Sv) {
        if (this._cachedVertexBuffers !== vv || this._cachedEffectForVertexBuffers !== Sv) {
          this._cachedVertexBuffers = vv, this._cachedEffectForVertexBuffers = Sv;
          const zv = Sv.getAttributesCount();
          this._unbindVertexArrayObject(), this.unbindAllAttributes();
          let ev = 0;
          for (let gv = 0; gv < zv; gv++)
            if (gv < Pv.length) {
              const zv = Sv.getAttributeLocation(gv);
              zv >= 0 && (this._gl.enableVertexAttribArray(zv), this._vertexAttribArraysEnabled[zv] = !0, this._vertexAttribPointer(vv, zv, Pv[gv], this._gl.FLOAT, !1, hv, ev)), ev += 4 * Pv[gv]
            }
        }
        this._bindIndexBufferWithCache(zv)
      }
      _unbindVertexArrayObject() {
        this._cachedVertexArrayObject && (this._cachedVertexArrayObject = null, this._gl.bindVertexArray(null))
      }
      bindBuffers(vv, zv, Pv, hv) {
        this._cachedVertexBuffers === vv && this._cachedEffectForVertexBuffers === Pv || (this._cachedVertexBuffers = vv, this._cachedEffectForVertexBuffers = Pv, this._bindVertexBuffersAttributes(vv, Pv, hv)), this._bindIndexBufferWithCache(zv)
      }
      unbindInstanceAttributes() {
        let vv;
        for (let zv = 0, Pv = this._currentInstanceLocations.length; zv < Pv; zv++) {
          const Pv = this._currentInstanceBuffers[zv];
          vv != Pv && Pv.references && (vv = Pv, this.bindArrayBuffer(Pv));
          const hv = this._currentInstanceLocations[zv];
          this._gl.vertexAttribDivisor(hv, 0)
        }
        this._currentInstanceBuffers.length = 0, this._currentInstanceLocations.length = 0
      }
      releaseVertexArrayObject(vv) {
        this._gl.deleteVertexArray(vv)
      }
      _releaseBuffer(vv) {
        return vv.references--, 0 === vv.references && (this._deleteBuffer(vv), !0)
      }
      _deleteBuffer(vv) {
        this._gl.deleteBuffer(vv.underlyingResource)
      }
      updateAndBindInstancesBuffer(vv, zv, Pv) {
        if (this.bindArrayBuffer(vv), zv && this._gl.bufferSubData(this._gl.ARRAY_BUFFER, 0, zv), void 0 !== Pv[0].index) this.bindInstancesBuffer(vv, Pv, !0);
        else
          for (let hv = 0; hv < 4; hv++) {
            const zv = Pv[hv];
            this._vertexAttribArraysEnabled[zv] || (this._gl.enableVertexAttribArray(zv), this._vertexAttribArraysEnabled[zv] = !0), this._vertexAttribPointer(vv, zv, 4, this._gl.FLOAT, !1, 64, 16 * hv), this._gl.vertexAttribDivisor(zv, 1), this._currentInstanceLocations.push(zv), this._currentInstanceBuffers.push(vv)
          }
      }
      bindInstancesBuffer(vv, zv) {
        let Pv = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this.bindArrayBuffer(vv);
        let hv = 0;
        if (Pv)
          for (let Sv = 0; Sv < zv.length; Sv++) {
            hv += 4 * zv[Sv].attributeSize
          }
        for (let Sv = 0; Sv < zv.length; Sv++) {
          const Pv = zv[Sv];
          void 0 === Pv.index && (Pv.index = this._currentEffect.getAttributeLocationByName(Pv.attributeName)), Pv.index < 0 || (this._vertexAttribArraysEnabled[Pv.index] || (this._gl.enableVertexAttribArray(Pv.index), this._vertexAttribArraysEnabled[Pv.index] = !0), this._vertexAttribPointer(vv, Pv.index, Pv.attributeSize, Pv.attributeType || this._gl.FLOAT, Pv.normalized || !1, hv, Pv.offset), this._gl.vertexAttribDivisor(Pv.index, void 0 === Pv.divisor ? 1 : Pv.divisor), this._currentInstanceLocations.push(Pv.index), this._currentInstanceBuffers.push(vv))
        }
      }
      disableInstanceAttributeByName(vv) {
        if (!this._currentEffect) return;
        const zv = this._currentEffect.getAttributeLocationByName(vv);
        this.disableInstanceAttribute(zv)
      }
      disableInstanceAttribute(vv) {
        let zv, Pv = !1;
        for (; - 1 !== (zv = this._currentInstanceLocations.indexOf(vv));) this._currentInstanceLocations.splice(zv, 1), this._currentInstanceBuffers.splice(zv, 1), Pv = !0;
        Pv && (this._gl.vertexAttribDivisor(vv, 0), this.disableAttributeByIndex(vv))
      }
      disableAttributeByIndex(vv) {
        this._gl.disableVertexAttribArray(vv), this._vertexAttribArraysEnabled[vv] = !1, this._currentBufferPointers[vv].active = !1
      }
      draw(vv, zv, Pv, hv) {
        this.drawElementsType(vv ? 0 : 1, zv, Pv, hv)
      }
      drawPointClouds(vv, zv, Pv) {
        this.drawArraysType(2, vv, zv, Pv)
      }
      drawUnIndexed(vv, zv, Pv, hv) {
        this.drawArraysType(vv ? 0 : 1, zv, Pv, hv)
      }
      drawElementsType(vv, zv, Pv, hv) {
        this.applyStates(), this._reportDrawCall();
        const Sv = this._drawMode(vv),
          ev = this._uintIndicesCurrentlySet ? this._gl.UNSIGNED_INT : this._gl.UNSIGNED_SHORT,
          gv = this._uintIndicesCurrentlySet ? 4 : 2;
        hv ? this._gl.drawElementsInstanced(Sv, Pv, ev, zv * gv, hv) : this._gl.drawElements(Sv, Pv, ev, zv * gv)
      }
      drawArraysType(vv, zv, Pv, hv) {
        this.applyStates(), this._reportDrawCall();
        const Sv = this._drawMode(vv);
        hv ? this._gl.drawArraysInstanced(Sv, zv, Pv, hv) : this._gl.drawArrays(Sv, zv, Pv)
      }
      _drawMode(vv) {
        switch (vv) {
          case 0:
          default:
            return this._gl.TRIANGLES;
          case 2:
          case 3:
            return this._gl.POINTS;
          case 1:
          case 4:
            return this._gl.LINES;
          case 5:
            return this._gl.LINE_LOOP;
          case 6:
            return this._gl.LINE_STRIP;
          case 7:
            return this._gl.TRIANGLE_STRIP;
          case 8:
            return this._gl.TRIANGLE_FAN
        }
      }
      _releaseEffect(vv) {
        this._compiledEffects[vv._key] && delete this._compiledEffects[vv._key];
        const zv = vv.getPipelineContext();
        zv && this._deletePipelineContext(zv)
      }
      _deletePipelineContext(vv) {
        const zv = vv;
        zv && zv.program && (zv.program.__SPECTOR_rebuildProgram = null, (0, iv.i)(zv), this._gl && (this._currentProgram === zv.program && this._setProgram(null), this._gl.deleteProgram(zv.program)))
      }
      _getGlobalDefines(vv) {
        return (0, Cv.i)(vv, this.isNDCHalfZRange, this.SPv, this.useExactSrgbConversions)
      }
      createEffect(vv, zv, Pv, ev, gv, pv, dv, Nv, lv) {
        let Tv = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
          Wv = arguments.length > 10 ? arguments[10] : void 0;
        const wv = "string" === typeof vv ? vv : vv.vertexToken || vv.vertexSource || vv.vertexElement || vv.vertex,
          av = "string" === typeof vv ? vv : vv.fragmentToken || vv.fragmentSource || vv.fragmentElement || vv.fragment,
          sv = this._getGlobalDefines(),
          Cv = void 0 !== zv.attributes;
        let iv = gv ?? zv.defines ?? "";
        sv && (iv += sv);
        const cv = wv + "+" + av + "@" + iv;
        if (this._compiledEffects[cv]) {
          const vv = this._compiledEffects[cv];
          return dv && vv.isReady() && dv(vv), vv._refCount++, vv
        }
        this._gl && (0, Sv.G)(this._gl);
        const Gv = new hv.b(vv, zv, Cv ? this : Pv, ev, this, gv, pv, dv, Nv, lv, cv, zv.shaderLanguage ?? Tv, zv.extraInitializationsAsync ?? Wv);
        return this._compiledEffects[cv] = Gv, Gv
      }
      _getShaderSource(vv) {
        return this._gl.getShaderSource(vv)
      }
      createRawShaderProgram(vv, zv, Pv, hv) {
        let ev = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
        const gv = (0, Sv.G)(this._gl);
        return gv._contextWasLost = this._contextWasLost, gv.validateShaderPrograms = this.validateShaderPrograms, (0, Sv.w)(vv, zv, Pv, hv || this._gl, ev)
      }
      createShaderProgram(vv, zv, Pv, hv, ev) {
        let gv = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null;
        const pv = (0, Sv.G)(this._gl);
        return pv._contextWasLost = this._contextWasLost, pv.validateShaderPrograms = this.validateShaderPrograms, (0, Sv.A)(vv, zv, Pv, hv, ev || this._gl, gv)
      }
      inlineShaderCode(vv) {
        return vv
      }
      createPipelineContext(vv) {
        if (this._gl) {
          (0, Sv.G)(this._gl).parallelShaderCompile = this._caps.parallelShaderCompile
        }
        const zv = (0, Sv.t)(this._gl, vv);
        return zv.engine = this, zv
      }
      createMaterialContext() {}
      createDrawContext() {}
      _finalizePipelineContext(vv) {
        return (0, Sv.j)(vv, this._gl, this.validateShaderPrograms)
      }
      _preparePipelineContextAsync(vv, zv, Pv, hv, ev, gv, pv, dv, Nv, lv, Tv) {
        const Wv = (0, Sv.G)(this._gl);
        return Wv._contextWasLost = this._contextWasLost, Wv.validateShaderPrograms = this.validateShaderPrograms, Wv._createShaderProgramInjection = this._createShaderProgram.bind(this), Wv.createRawShaderProgramInjection = this.createRawShaderProgram.bind(this), Wv.createShaderProgramInjection = this.createShaderProgram.bind(this), Wv.loadFileInjection = this._loadFile.bind(this), (0, Sv.o)(vv, zv, Pv, hv, ev, gv, pv, dv, Nv, lv, Tv)
      }
      _createShaderProgram(vv, zv, Pv, hv) {
        let ev = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
        return (0, Sv.e)(vv, zv, Pv, hv, ev)
      }
      _isRenderingStateCompiled(vv) {
        return !this._isDisposed && (0, Sv.l)(vv, this._gl, this.validateShaderPrograms)
      }
      _executeWhenRenderingStateIsCompiled(vv, zv) {
        (0, Sv.i)(vv, zv)
      }
      getUniforms(vv, zv) {
        const Pv = new Array,
          hv = vv;
        for (let Sv = 0; Sv < zv.length; Sv++) Pv.push(this._gl.getUniformLocation(hv.program, zv[Sv]));
        return Pv
      }
      getAttributes(vv, zv) {
        const Pv = [],
          hv = vv;
        for (let ev = 0; ev < zv.length; ev++) try {
          Pv.push(this._gl.getAttribLocation(hv.program, zv[ev]))
        } catch (Sv) {
          Pv.push(-1)
        }
        return Pv
      }
      enableEffect(vv) {
        (vv = null !== vv && (0, gv.e)(vv) ? vv.effect : vv) && vv !== this._currentEffect && (this._stencilStateComposer.stencilMaterial = void 0, this.bindSamplers(vv), this._currentEffect = vv, vv.onBind && vv.onBind(vv), vv._onBindObservable && vv._onBindObservable.notifyObservers(vv))
      }
      setInt(vv, zv) {
        return !!vv && (this._gl.uniform1i(vv, zv), !0)
      }
      setInt2(vv, zv, Pv) {
        return !!vv && (this._gl.uniform2i(vv, zv, Pv), !0)
      }
      setInt3(vv, zv, Pv, hv) {
        return !!vv && (this._gl.uniform3i(vv, zv, Pv, hv), !0)
      }
      setInt4(vv, zv, Pv, hv, Sv) {
        return !!vv && (this._gl.uniform4i(vv, zv, Pv, hv, Sv), !0)
      }
      setIntArray(vv, zv) {
        return !!vv && (this._gl.uniform1iv(vv, zv), !0)
      }
      setIntArray2(vv, zv) {
        return !(!vv || zv.length % 2 !== 0) && (this._gl.uniform2iv(vv, zv), !0)
      }
      setIntArray3(vv, zv) {
        return !(!vv || zv.length % 3 !== 0) && (this._gl.uniform3iv(vv, zv), !0)
      }
      setIntArray4(vv, zv) {
        return !(!vv || zv.length % 4 !== 0) && (this._gl.uniform4iv(vv, zv), !0)
      }
      setUInt(vv, zv) {
        return !!vv && (this._gl.uniform1ui(vv, zv), !0)
      }
      setUInt2(vv, zv, Pv) {
        return !!vv && (this._gl.uniform2ui(vv, zv, Pv), !0)
      }
      setUInt3(vv, zv, Pv, hv) {
        return !!vv && (this._gl.uniform3ui(vv, zv, Pv, hv), !0)
      }
      setUInt4(vv, zv, Pv, hv, Sv) {
        return !!vv && (this._gl.uniform4ui(vv, zv, Pv, hv, Sv), !0)
      }
      setUIntArray(vv, zv) {
        return !!vv && (this._gl.uniform1uiv(vv, zv), !0)
      }
      setUIntArray2(vv, zv) {
        return !(!vv || zv.length % 2 !== 0) && (this._gl.uniform2uiv(vv, zv), !0)
      }
      setUIntArray3(vv, zv) {
        return !(!vv || zv.length % 3 !== 0) && (this._gl.uniform3uiv(vv, zv), !0)
      }
      setUIntArray4(vv, zv) {
        return !(!vv || zv.length % 4 !== 0) && (this._gl.uniform4uiv(vv, zv), !0)
      }
      setArray(vv, zv) {
        return !!vv && (!(zv.length < 1) && (this._gl.uniform1fv(vv, zv), !0))
      }
      setArray2(vv, zv) {
        return !(!vv || zv.length % 2 !== 0) && (this._gl.uniform2fv(vv, zv), !0)
      }
      setArray3(vv, zv) {
        return !(!vv || zv.length % 3 !== 0) && (this._gl.uniform3fv(vv, zv), !0)
      }
      setArray4(vv, zv) {
        return !(!vv || zv.length % 4 !== 0) && (this._gl.uniform4fv(vv, zv), !0)
      }
      setMatrices(vv, zv) {
        return !!vv && (this._gl.uniformMatrix4fv(vv, !1, zv), !0)
      }
      setMatrix3x3(vv, zv) {
        return !!vv && (this._gl.uniformMatrix3fv(vv, !1, zv), !0)
      }
      setMatrix2x2(vv, zv) {
        return !!vv && (this._gl.uniformMatrix2fv(vv, !1, zv), !0)
      }
      setFloat(vv, zv) {
        return !!vv && (this._gl.uniform1f(vv, zv), !0)
      }
      setFloat2(vv, zv, Pv) {
        return !!vv && (this._gl.uniform2f(vv, zv, Pv), !0)
      }
      setFloat3(vv, zv, Pv, hv) {
        return !!vv && (this._gl.uniform3f(vv, zv, Pv, hv), !0)
      }
      setFloat4(vv, zv, Pv, hv, Sv) {
        return !!vv && (this._gl.uniform4f(vv, zv, Pv, hv, Sv), !0)
      }
      _applyColorWriteState() {
        if (this._colorWriteChanged) {
          this._colorWriteChanged = !1;
          const vv = this._colorWrite;
          this._gl.colorMask(vv, vv, vv, vv)
        }
      }
      applyStates() {
        this._depthCullingState.apply(this._gl), this._stencilStateComposer.apply(this._gl), this._alphaState.apply(this._gl, this._currentRenderTarget && this._currentRenderTarget.textures ? this._currentRenderTarget.textures.length : 1, this._integerMRTAttachmentsMask), this._applyColorWriteState()
      }
      wipeCaches(vv) {
        this.preventCacheWipeBetweenFrames && !vv || (this._currentEffect = null, this._viewportCached.x = 0, this._viewportCached.y = 0, this._viewportCached.z = 0, this._viewportCached.w = 0, this._unbindVertexArrayObject(), vv && (this._currentProgram = null, this.resetTextureCache(), this._stencilStateComposer.reset(), this._depthCullingState.reset(), this._depthCullingState.depthFunc = this._gl.LEQUAL, this._alphaState.reset(), this._resetAlphaMode(), this._colorWrite = !0, this._colorWriteChanged = !0, this._unpackFlipYCached = null, this._gl.pixelStorei(this._gl.UNPACK_COLORSPACE_CONVERSION_WEBGL, this._gl.NONE), this._gl.pixelStorei(this._gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), this._mustWipeVertexAttributes = !0, this.unbindAllAttributes()), this._resetVertexBufferBinding(), this._cachedIndexBuffer = null, this._cachedEffectForVertexBuffers = null, this.bindIndexBuffer(null))
      }
      _getSamplingParameters(vv, zv) {
        const Pv = this._gl;
        let hv = Pv.NEAREST,
          Sv = Pv.NEAREST,
          ev = !1;
        switch (vv) {
          case 11:
            hv = Pv.LINEAR, Sv = zv ? Pv.LINEAR_MIPMAP_NEAREST : Pv.LINEAR;
            break;
          case 3:
            hv = Pv.LINEAR, ev = !0, Sv = zv ? Pv.LINEAR_MIPMAP_LINEAR : Pv.LINEAR;
            break;
          case 8:
            ev = !0, hv = Pv.NEAREST, Sv = zv ? Pv.NEAREST_MIPMAP_LINEAR : Pv.NEAREST;
            break;
          case 4:
            hv = Pv.NEAREST, Sv = zv ? Pv.NEAREST_MIPMAP_NEAREST : Pv.NEAREST;
            break;
          case 5:
            hv = Pv.NEAREST, Sv = zv ? Pv.LINEAR_MIPMAP_NEAREST : Pv.LINEAR;
            break;
          case 6:
            ev = !0, hv = Pv.NEAREST, Sv = zv ? Pv.LINEAR_MIPMAP_LINEAR : Pv.LINEAR;
            break;
          case 7:
            hv = Pv.NEAREST, Sv = Pv.LINEAR;
            break;
          case 1:
            hv = Pv.NEAREST, Sv = Pv.NEAREST;
            break;
          case 9:
            hv = Pv.LINEAR, Sv = zv ? Pv.NEAREST_MIPMAP_NEAREST : Pv.NEAREST;
            break;
          case 10:
            ev = !0, hv = Pv.LINEAR, Sv = zv ? Pv.NEAREST_MIPMAP_LINEAR : Pv.NEAREST;
            break;
          case 2:
            hv = Pv.LINEAR, Sv = Pv.LINEAR;
            break;
          case 12:
            hv = Pv.LINEAR, Sv = Pv.NEAREST
        }
        return {
          min: Sv,
          mag: hv,
          hasMipMaps: ev
        }
      }
      _createTexture() {
        const vv = this._gl.createTexture();
        if (!vv) throw new Error("Unable to create texture");
        return vv
      }
      _createHardwareTexture() {
        return new av.d(this._createTexture(), this._gl)
      }
      _createInternalTexture(vv, zv) {
        let Pv, hv, Sv = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          ev = !1,
          gv = 0,
          dv = 3,
          Nv = 5,
          lv = !1,
          Tv = 1,
          Wv = !1,
          wv = 0,
          av = !1;
        void 0 !== zv && "object" === typeof zv ? (Pv = !!zv.generateMipMaps, ev = !!zv.createMipMaps, gv = void 0 === zv.type ? 0 : zv.type, dv = void 0 === zv.samplingMode ? 3 : zv.samplingMode, Nv = void 0 === zv.format ? 5 : zv.format, lv = void 0 !== zv.useSRGBBuffer && zv.useSRGBBuffer, Tv = zv.samples ?? 1, hv = zv.label, Wv = !!zv.createMSAATexture, wv = zv.comparisonFunction || 0, av = !!zv.isCube) : Pv = !!zv, lv && (lv = this._caps.supportSRGBBuffers && (this.ka > 1 || this.isWebGPU)), (1 !== gv || this._caps.textureFloatLinearFiltering) && (2 !== gv || this._caps.textureHalfFloatLinearFiltering) || (dv = 1), 1 !== gv || this._caps.textureFloat || (gv = 0, pv.d.Warn("Float textures are not supported. Type forced to TEXTURETYPE_UNSIGNED_BYTE"));
        const Cv = (0, cv.f)(Nv),
          iv = (0, cv.e)(Nv),
          Gv = this._gl,
          mv = new sv.e(this, Sv),
          jv = vv.width || vv,
          fv = vv.height || vv,
          Fv = vv.depth || 0,
          Yv = vv.layers || 0,
          nv = this._getSamplingParameters(dv, (Pv || ev) && !Cv),
          Ov = 0 !== Yv ? Gv.TEXTURE_2D_ARRAY : 0 !== Fv ? Gv.TEXTURE_3D : av ? Gv.TEXTURE_CUBE_MAP : Gv.TEXTURE_2D,
          Dv = Cv ? this._getInternalFormatFromDepthTextureFormat(Nv, !0, iv) : this._getRGBABufferInternalSizedFormat(gv, Nv, lv),
          Kv = Cv ? iv ? Gv.DEPTH_STENCIL : Gv.DEPTH_COMPONENT : this._getInternalFormat(Nv),
          Vv = Cv ? this._getWebGLTextureTypeFromDepthTextureFormat(Nv) : this._getWebGLTextureType(gv);
        if (this._bindTextureDirectly(Ov, mv), 0 !== Yv) mv.is2DArray = !0, Gv.texImage3D(Ov, 0, Dv, jv, fv, Yv, 0, Kv, Vv, null);
        else if (0 !== Fv) mv.is3D = !0, Gv.texImage3D(Ov, 0, Dv, jv, fv, Fv, 0, Kv, Vv, null);
        else if (av) {
          mv.isCube = !0;
          for (let vv = 0; vv < 6; vv++) Gv.texImage2D(Gv.TEXTURE_CUBE_MAP_POSITIVE_X + vv, 0, Dv, jv, fv, 0, Kv, Vv, null)
        } else Gv.texImage2D(Ov, 0, Dv, jv, fv, 0, Kv, Vv, null);
        if (Gv.texParameteri(Ov, Gv.TEXTURE_MAG_FILTER, nv.mag), Gv.texParameteri(Ov, Gv.TEXTURE_MIN_FILTER, nv.min), Gv.texParameteri(Ov, Gv.TEXTURE_WRAP_S, Gv.CLAMP_TO_EDGE), Gv.texParameteri(Ov, Gv.TEXTURE_WRAP_T, Gv.CLAMP_TO_EDGE), Cv && this.ka > 1 && (0 === wv ? (Gv.texParameteri(Ov, Gv.TEXTURE_COMPARE_FUNC, 515), Gv.texParameteri(Ov, Gv.TEXTURE_COMPARE_MODE, Gv.NONE)) : (Gv.texParameteri(Ov, Gv.TEXTURE_COMPARE_FUNC, wv), Gv.texParameteri(Ov, Gv.TEXTURE_COMPARE_MODE, Gv.COMPARE_REF_TO_TEXTURE))), (Pv || ev) && this._gl.generateMipmap(Ov), this._bindTextureDirectly(Ov, null), mv._useSRGBBuffer = lv, mv.baseWidth = jv, mv.baseHeight = fv, mv.width = jv, mv.height = fv, mv.depth = Yv || Fv, mv.isReady = !0, mv.samples = Tv, mv.generateMipMaps = Pv, mv.samplingMode = dv, mv.type = gv, mv.format = Nv, mv.label = hv, mv.comparisonFunction = wv, this._internalTexturesCache.push(mv), Wv) {
          let vv;
          if (vv = (0, cv.f)(mv.format) ? this._setupFramebufferDepthAttachments((0, cv.e)(mv.format), 19 !== mv.format, mv.width, mv.height, Tv, mv.format, !0) : this._createRenderBuffer(mv.width, mv.height, Tv, -1, this._getRGBABufferInternalSizedFormat(mv.type, mv.format, mv._useSRGBBuffer), -1), !vv) throw new Error("Unable to create render buffer");
          mv._autoMSAAManagement = !0;
          let zv = mv._hardwareTexture;
          zv || (zv = mv._hardwareTexture = this._createHardwareTexture()), zv.addMSAARenderBuffer(vv)
        }
        return mv
      }
      _getUseSRGBBuffer(vv, zv) {
        return vv && this._caps.supportSRGBBuffers && (this.ka > 1 || zv)
      }
      createTexture(vv, zv, Pv, hv) {
        var Sv = this;
        let ev = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3,
          gv = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          pv = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
          dv = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
          Nv = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
          lv = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null,
          Tv = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : null,
          Wv = arguments.length > 11 ? arguments[11] : void 0,
          wv = arguments.length > 12 ? arguments[12] : void 0,
          av = arguments.length > 13 ? arguments[13] : void 0,
          Cv = arguments.length > 14 ? arguments[14] : void 0;
        return this._createTextureBase(vv, zv, Pv, hv, ev, gv, pv, (function() {
          for (var vv = arguments.length, zv = new Array(vv), Pv = 0; Pv < vv; Pv++) zv[Pv] = arguments[Pv];
          return Sv._prepareWebGLTexture(...zv, lv)
        }), ((vv, zv, Pv, Sv, ev, gv) => {
          const pv = this._gl,
            dv = Pv.width === vv && Pv.height === zv;
          ev._creationFlags = av ?? 0;
          const Nv = this._getTexImageParametersForCreateTexture(ev.format, ev._useSRGBBuffer);
          if (dv) return pv.texImage2D(pv.TEXTURE_2D, 0, Nv.internalFormat, Nv.format, Nv.type, Pv), !1;
          const lv = this._caps.maxTextureSize;
          if (Pv.width > lv || Pv.height > lv || !this._supportsHardwareTextureRescaling) return this._prepareWorkingCanvas(), !(!this._workingCanvas || !this._workingContext) && (this._workingCanvas.width = vv, this._workingCanvas.height = zv, this._workingContext.drawImage(Pv, 0, 0, Pv.width, Pv.height, 0, 0, vv, zv), pv.texImage2D(pv.TEXTURE_2D, 0, Nv.internalFormat, Nv.format, Nv.type, this._workingCanvas), ev.width = vv, ev.height = zv, !1);
          {
            const vv = new sv.e(this, 2);
            this._bindTextureDirectly(pv.TEXTURE_2D, vv, !0), pv.texImage2D(pv.TEXTURE_2D, 0, Nv.internalFormat, Nv.format, Nv.type, Pv), this._rescaleTexture(vv, ev, hv, Nv.format, (() => {
              this._releaseTexture(vv), this._bindTextureDirectly(pv.TEXTURE_2D, ev, !0), gv()
            }))
          }
          return !0
        }), dv, Nv, lv, Tv, Wv, wv, Cv)
      }
      _getTexImageParametersForCreateTexture(vv, zv) {
        let Pv, hv;
        return 1 === this.ka ? (Pv = this._getInternalFormat(vv, zv), hv = Pv) : (Pv = this._getInternalFormat(vv, !1), hv = this._getRGBABufferInternalSizedFormat(0, vv, zv)), {
          internalFormat: hv,
          format: Pv,
          type: this._gl.UNSIGNED_BYTE
        }
      }
      _rescaleTexture(vv, zv, Pv, hv, Sv) {}
      _unpackFlipY(vv) {
        this._unpackFlipYCached !== vv && (this._gl.pixelStorei(this._gl.UNPACK_FLIP_Y_WEBGL, vv ? 1 : 0), this.enableUnpackFlipYCached && (this._unpackFlipYCached = vv))
      }
      _getUnpackAlignement() {
        return this._gl.getParameter(this._gl.UNPACK_ALIGNMENT)
      }
      _getTextureTarget(vv) {
        return vv.isCube ? this._gl.TEXTURE_CUBE_MAP : vv.is3D ? this._gl.TEXTURE_3D : vv.is2DArray || vv.isMultiview ? this._gl.TEXTURE_2D_ARRAY : this._gl.TEXTURE_2D
      }
      updateTextureSamplingMode(vv, zv) {
        let Pv = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const hv = this._getTextureTarget(zv),
          Sv = this._getSamplingParameters(vv, zv.useMipMaps || Pv);
        this._setTextureParameterInteger(hv, this._gl.TEXTURE_MAG_FILTER, Sv.mag, zv), this._setTextureParameterInteger(hv, this._gl.TEXTURE_MIN_FILTER, Sv.min), Pv && Sv.hasMipMaps && (zv.generateMipMaps = !0, this._gl.generateMipmap(hv)), this._bindTextureDirectly(hv, null), zv.samplingMode = vv
      }
      updateTextureDimensions(vv, zv, Pv) {}
      updateTextureWrappingMode(vv, zv) {
        let Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          hv = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const Sv = this._getTextureTarget(vv);
        null !== zv && (this._setTextureParameterInteger(Sv, this._gl.TEXTURE_WRAP_S, this._getTextureWrapMode(zv), vv), vv._cachedWrapU = zv), null !== Pv && (this._setTextureParameterInteger(Sv, this._gl.TEXTURE_WRAP_T, this._getTextureWrapMode(Pv), vv), vv._cachedWrapV = Pv), (vv.is2DArray || vv.is3D) && null !== hv && (this._setTextureParameterInteger(Sv, this._gl.TEXTURE_WRAP_R, this._getTextureWrapMode(hv), vv), vv._cachedWrapR = hv), this._bindTextureDirectly(Sv, null)
      }
      _uploadCompressedDataToTextureDirectly(vv, zv, Pv, hv, Sv) {
        let ev = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          gv = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        const pv = this._gl;
        let dv = pv.TEXTURE_2D;
        if (vv.isCube && (dv = pv.TEXTURE_CUBE_MAP_POSITIVE_X + ev), vv._useSRGBBuffer) switch (zv) {
          case 37492:
          case 36196:
            this._caps.etc2 ? zv = pv.COMPRESSED_SRGB8_ETC2 : vv._useSRGBBuffer = !1;
            break;
          case 37496:
            this._caps.etc2 ? zv = pv.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : vv._useSRGBBuffer = !1;
            break;
          case 36492:
            zv = pv.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT;
            break;
          case 37808:
            zv = pv.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR;
            break;
          case 37809:
            zv = pv.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR;
            break;
          case 37810:
            zv = pv.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR;
            break;
          case 37811:
            zv = pv.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR;
            break;
          case 37812:
            zv = pv.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR;
            break;
          case 37813:
            zv = pv.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR;
            break;
          case 37814:
            zv = pv.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR;
            break;
          case 37815:
            zv = pv.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR;
            break;
          case 37816:
            zv = pv.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR;
            break;
          case 37817:
            zv = pv.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR;
            break;
          case 37818:
            zv = pv.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR;
            break;
          case 37819:
            zv = pv.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR;
            break;
          case 37820:
            zv = pv.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR;
            break;
          case 37821:
            zv = pv.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR;
            break;
          case 33776:
            this._caps.s3tc_srgb ? zv = pv.COMPRESSED_SRGB_S3TC_DXT1_EXT : vv._useSRGBBuffer = !1;
            break;
          case 33777:
            this._caps.s3tc_srgb ? zv = pv.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT : vv._useSRGBBuffer = !1;
            break;
          case 33779:
            this._caps.s3tc_srgb ? zv = pv.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT : vv._useSRGBBuffer = !1;
            break;
          default:
            vv._useSRGBBuffer = !1
        }
        if (vv.generateMipMaps) {
          const ev = vv._hardwareTexture;
          ev.memoryAllocated || (pv.texStorage2D(vv.isCube ? pv.TEXTURE_CUBE_MAP : pv.TEXTURE_2D, Math.floor(Math.log2(Math.max(Pv, hv))) + 1, zv, vv.width, vv.height), ev.memoryAllocated = !0), this._gl.compressedTexSubImage2D(dv, gv, 0, 0, Pv, hv, zv, Sv)
        } else this._gl.compressedTexImage2D(dv, gv, zv, Pv, hv, 0, Sv)
      }
      _uploadDataToTextureDirectly(vv, zv) {
        let Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          hv = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          Sv = arguments.length > 4 ? arguments[4] : void 0,
          ev = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        const gv = this._gl,
          pv = this._getWebGLTextureType(vv.type),
          dv = this._getInternalFormat(vv.format),
          Nv = void 0 === Sv ? this._getRGBABufferInternalSizedFormat(vv.type, vv.format, vv._useSRGBBuffer) : this._getInternalFormat(Sv, vv._useSRGBBuffer);
        this._unpackFlipY(vv.invertY);
        let lv = gv.TEXTURE_2D;
        vv.isCube && (lv = gv.TEXTURE_CUBE_MAP_POSITIVE_X + Pv);
        const Tv = Math.round(Math.log(vv.width) * Math.LOG2E),
          Wv = Math.round(Math.log(vv.height) * Math.LOG2E),
          wv = ev ? vv.width : Math.pow(2, Math.max(Tv - hv, 0)),
          av = ev ? vv.height : Math.pow(2, Math.max(Wv - hv, 0));
        gv.texImage2D(lv, hv, Nv, wv, av, 0, dv, pv, zv)
      }
      updateTextureData(vv, zv, Pv, hv, Sv, ev) {
        let gv = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0,
          pv = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0,
          dv = arguments.length > 8 && void 0 !== arguments[8] && arguments[8];
        const Nv = this._gl,
          lv = this._getWebGLTextureType(vv.type),
          Tv = this._getInternalFormat(vv.format);
        this._unpackFlipY(vv.invertY);
        let Wv = Nv.TEXTURE_2D,
          wv = Nv.TEXTURE_2D;
        vv.isCube && (wv = Nv.TEXTURE_CUBE_MAP_POSITIVE_X + gv, Wv = Nv.TEXTURE_CUBE_MAP), this._bindTextureDirectly(Wv, vv, !0), Nv.texSubImage2D(wv, pv, Pv, hv, Sv, ev, Tv, lv, zv), dv && this._gl.generateMipmap(wv), this._bindTextureDirectly(Wv, null)
      }
      _uploadArrayBufferViewToTexture(vv, zv) {
        let Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          hv = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        const Sv = this._gl,
          ev = vv.isCube ? Sv.TEXTURE_CUBE_MAP : Sv.TEXTURE_2D;
        this._bindTextureDirectly(ev, vv, !0), this._uploadDataToTextureDirectly(vv, zv, Pv, hv), this._bindTextureDirectly(ev, null, !0)
      }
      _prepareWebGLTextureContinuation(vv, zv, Pv, hv, Sv) {
        const ev = this._gl;
        if (!ev) return;
        const gv = this._getSamplingParameters(Sv, !Pv);
        ev.texParameteri(ev.TEXTURE_2D, ev.TEXTURE_MAG_FILTER, gv.mag), ev.texParameteri(ev.TEXTURE_2D, ev.TEXTURE_MIN_FILTER, gv.min), Pv || hv || ev.generateMipmap(ev.TEXTURE_2D), this._bindTextureDirectly(ev.TEXTURE_2D, null), zv && zv.removePendingData(vv), vv.onLoadedObservable.notifyObservers(vv), vv.onLoadedObservable.clear()
      }
      _prepareWebGLTexture(vv, zv, Pv, hv, Sv, ev, gv, pv, dv, Nv) {
        const lv = this.getCaps().maxTextureSize,
          Tv = Math.min(lv, this.needPOTTextures ? (0, wv.c)(hv.width, lv) : hv.width),
          Wv = Math.min(lv, this.needPOTTextures ? (0, wv.c)(hv.height, lv) : hv.height),
          av = this._gl;
        av && (vv._hardwareTexture ? (this._bindTextureDirectly(av.TEXTURE_2D, vv, !0), this._unpackFlipY(void 0 === Sv || !!Sv), vv.baseWidth = hv.width, vv.baseHeight = hv.height, vv.width = Tv, vv.height = Wv, vv.isReady = !0, vv.type = -1 !== vv.type ? vv.type : 0, vv.format = -1 !== vv.format ? vv.format : Nv ?? (".jpg" !== zv || vv._useSRGBBuffer ? 5 : 4), pv(Tv, Wv, hv, zv, vv, (() => {
          this._prepareWebGLTextureContinuation(vv, Pv, ev, gv, dv)
        })) || this._prepareWebGLTextureContinuation(vv, Pv, ev, gv, dv)) : Pv && Pv.removePendingData(vv))
      }
      _getInternalFormatFromDepthTextureFormat(vv, zv, Pv) {
        const hv = this._gl;
        if (!zv) return hv.STENCIL_INDEX8;
        let Sv = Pv ? hv.DEPTH_STENCIL : hv.DEPTH_COMPONENT;
        return this.ka > 1 ? 15 === vv ? Sv = hv.DEPTH_COMPONENT16 : 16 === vv ? Sv = hv.DEPTH_COMPONENT24 : 17 === vv || 13 === vv ? Sv = Pv ? hv.DEPTH24_STENCIL8 : hv.DEPTH_COMPONENT24 : 14 === vv ? Sv = hv.DEPTH_COMPONENT32F : 18 === vv && (Sv = Pv ? hv.DEPTH32F_STENCIL8 : hv.DEPTH_COMPONENT32F) : Sv = hv.DEPTH_COMPONENT16, Sv
      }
      _getWebGLTextureTypeFromDepthTextureFormat(vv) {
        const zv = this._gl;
        let Pv = zv.UNSIGNED_INT;
        return 15 === vv ? Pv = zv.UNSIGNED_SHORT : 17 === vv || 13 === vv ? Pv = zv.UNSIGNED_INT_24_8 : 14 === vv ? Pv = zv.FLOAT : 18 === vv ? Pv = zv.FLOAT_32_UNSIGNED_INT_24_8_REV : 19 === vv && (Pv = zv.UNSIGNED_BYTE), Pv
      }
      _setupFramebufferDepthAttachments(vv, zv, Pv, hv) {
        let Sv = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
          ev = arguments.length > 5 ? arguments[5] : void 0,
          gv = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        const pv = this._gl;
        ev = ev ?? (vv ? 13 : 14);
        const dv = this._getInternalFormatFromDepthTextureFormat(ev, zv, vv);
        return vv && zv ? this._createRenderBuffer(Pv, hv, Sv, pv.DEPTH_STENCIL, dv, gv ? -1 : pv.DEPTH_STENCIL_ATTACHMENT) : zv ? this._createRenderBuffer(Pv, hv, Sv, dv, dv, gv ? -1 : pv.DEPTH_ATTACHMENT) : vv ? this._createRenderBuffer(Pv, hv, Sv, dv, dv, gv ? -1 : pv.STENCIL_ATTACHMENT) : null
      }
      _createRenderBuffer(vv, zv, Pv, hv, Sv, ev) {
        let gv = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6];
        const pv = this._gl.createRenderbuffer();
        return this._updateRenderBuffer(pv, vv, zv, Pv, hv, Sv, ev, gv)
      }
      _updateRenderBuffer(vv, zv, Pv, hv, Sv, ev, gv) {
        let pv = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7];
        const dv = this._gl;
        return dv.bindRenderbuffer(dv.RENDERBUFFER, vv), hv > 1 && dv.renderbufferStorageMultisample ? dv.renderbufferStorageMultisample(dv.RENDERBUFFER, hv, ev, zv, Pv) : dv.renderbufferStorage(dv.RENDERBUFFER, Sv, zv, Pv), -1 !== gv && dv.framebufferRenderbuffer(dv.FRAMEBUFFER, gv, dv.RENDERBUFFER, vv), pv && dv.bindRenderbuffer(dv.RENDERBUFFER, null), vv
      }
      _releaseTexture(vv) {
        this._deleteTexture(vv._hardwareTexture), this.unbindAllTextures();
        const zv = this._internalTexturesCache.indexOf(vv); - 1 !== zv && this._internalTexturesCache.splice(zv, 1), vv._lodTextureHigh && vv._lodTextureHigh.dispose(), vv._lodTextureMid && vv._lodTextureMid.dispose(), vv._lodTextureLow && vv._lodTextureLow.dispose(), vv._irradianceTexture && vv._irradianceTexture.dispose()
      }
      _deleteTexture(vv) {
        vv?.release()
      }
      _setProgram(vv) {
        this._currentProgram !== vv && ((0, Sv.q)(vv, this._gl), this._currentProgram = vv)
      }
      bindSamplers(vv) {
        const zv = vv.getPipelineContext();
        this._setProgram(zv.program);
        const Pv = vv.getSamplers();
        for (let hv = 0; hv < Pv.length; hv++) {
          const zv = vv.getUniform(Pv[hv]);
          zv && (this._boundUniforms[hv] = zv)
        }
        this._currentEffect = null
      }
      _activateCurrentTexture() {
        this._currentTextureChannel !== this._activeChannel && (this._gl.activeTexture(this._gl.TEXTURE0 + this._activeChannel), this._currentTextureChannel = this._activeChannel)
      }
      _bindTextureDirectly(vv, zv) {
        let Pv = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          hv = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          Sv = !1;
        const ev = zv && zv._associatedChannel > -1;
        Pv && ev && (this._activeChannel = zv._associatedChannel);
        if (this._boundTexturesCache[this._activeChannel] !== zv || hv) {
          if (this._activateCurrentTexture(), zv && zv.isMultiview) throw pv.d.Error(["_bindTextureDirectly called with a multiview texture!", vv, zv]), "_bindTextureDirectly called with a multiview texture!";
          this._gl.bindTexture(vv, zv?._hardwareTexture?.underlyingResource ?? null), this._boundTexturesCache[this._activeChannel] = zv, zv && (zv._associatedChannel = this._activeChannel)
        } else Pv && (Sv = !0, this._activateCurrentTexture());
        return ev && !Pv && this._bindSamplerUniformToChannel(zv._associatedChannel, this._activeChannel), Sv
      }
      _bindTexture(vv, zv, Pv) {
        if (void 0 === vv) return;
        zv && (zv._associatedChannel = vv), this._activeChannel = vv;
        const hv = zv ? this._getTextureTarget(zv) : this._gl.TEXTURE_2D;
        this._bindTextureDirectly(hv, zv)
      }
      unbindAllTextures() {
        for (let vv = 0; vv < this._maxSimultaneousTextures; vv++) this._activeChannel = vv, this._bindTextureDirectly(this._gl.TEXTURE_2D, null), this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null), this.ka > 1 && (this._bindTextureDirectly(this._gl.TEXTURE_3D, null), this._bindTextureDirectly(this._gl.TEXTURE_2D_ARRAY, null))
      }
      setTexture(vv, zv, Pv, hv) {
        void 0 !== vv && (zv && (this._boundUniforms[vv] = zv), this._setTexture(vv, Pv))
      }
      _bindSamplerUniformToChannel(vv, zv) {
        const Pv = this._boundUniforms[vv];
        Pv && Pv._currentState !== zv && (this._gl.uniform1i(Pv, zv), Pv._currentState = zv)
      }
      _getTextureWrapMode(vv) {
        switch (vv) {
          case 1:
            return this._gl.REPEAT;
          case 0:
            return this._gl.CLAMP_TO_EDGE;
          case 2:
            return this._gl.MIRRORED_REPEAT
        }
        return this._gl.REPEAT
      }
      _setTexture(vv, zv) {
        let Pv, hv = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Sv = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (!zv) return null != this._boundTexturesCache[vv] && (this._activeChannel = vv, this._bindTextureDirectly(this._gl.TEXTURE_2D, null), this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null), this.ka > 1 && (this._bindTextureDirectly(this._gl.TEXTURE_3D, null), this._bindTextureDirectly(this._gl.TEXTURE_2D_ARRAY, null))), !1;
        if (zv.video) {
          this._activeChannel = vv;
          const Pv = zv.getInternalTexture();
          Pv && (Pv._associatedChannel = vv), zv.update()
        } else if (4 === zv.delayLoadState) return zv.delayLoad(), !1;
        Pv = Sv ? zv.depthStencilTexture : zv.isReady() ? zv.getInternalTexture() : zv.isCube ? this.emptyCubeTexture : zv.is3D ? this.emptyTexture3D : zv.is2DArray ? this.emptyTexture2DArray : this.emptyTexture, !hv && Pv && (Pv._associatedChannel = vv);
        let ev = !0;
        this._boundTexturesCache[vv] === Pv && (hv || this._bindSamplerUniformToChannel(Pv._associatedChannel, vv), ev = !1), this._activeChannel = vv;
        const gv = this._getTextureTarget(Pv);
        if (ev && this._bindTextureDirectly(gv, Pv, hv), Pv && !Pv.isMultiview) {
          if (Pv.isCube && Pv._cachedCoordinatesMode !== zv.coordinatesMode) {
            Pv._cachedCoordinatesMode = zv.coordinatesMode;
            const vv = 3 !== zv.coordinatesMode && 5 !== zv.coordinatesMode ? 1 : 0;
            zv.wrapU = vv, zv.wrapV = vv
          }
          Pv._cachedWrapU !== zv.wrapU && (Pv._cachedWrapU = zv.wrapU, this._setTextureParameterInteger(gv, this._gl.TEXTURE_WRAP_S, this._getTextureWrapMode(zv.wrapU), Pv)), Pv._cachedWrapV !== zv.wrapV && (Pv._cachedWrapV = zv.wrapV, this._setTextureParameterInteger(gv, this._gl.TEXTURE_WRAP_T, this._getTextureWrapMode(zv.wrapV), Pv)), Pv.is3D && Pv._cachedWrapR !== zv.wrapR && (Pv._cachedWrapR = zv.wrapR, this._setTextureParameterInteger(gv, this._gl.TEXTURE_WRAP_R, this._getTextureWrapMode(zv.wrapR), Pv)), this._setAnisotropicLevel(gv, Pv, zv.anisotropicFilteringLevel)
        }
        return !0
      }
      setTextureArray(vv, zv, Pv, hv) {
        if (void 0 !== vv && zv) {
          this._textureUnits && this._textureUnits.length === Pv.length || (this._textureUnits = new Int32Array(Pv.length));
          for (let zv = 0; zv < Pv.length; zv++) {
            const hv = Pv[zv].getInternalTexture();
            hv ? (this._textureUnits[zv] = vv + zv, hv._associatedChannel = vv + zv) : this._textureUnits[zv] = -1
          }
          this._gl.uniform1iv(zv, this._textureUnits);
          for (let vv = 0; vv < Pv.length; vv++) this._setTexture(this._textureUnits[vv], Pv[vv], !0)
        }
      }
      _setAnisotropicLevel(vv, zv, Pv) {
        const hv = this._caps.textureAnisotropicFilterExtension;
        11 !== zv.samplingMode && 3 !== zv.samplingMode && 2 !== zv.samplingMode && (Pv = 1), hv && zv._cachedAnisotropicFilteringLevel !== Pv && (this._setTextureParameterFloat(vv, hv.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(Pv, this._caps.maxAnisotropy), zv), zv._cachedAnisotropicFilteringLevel = Pv)
      }
      _setTextureParameterFloat(vv, zv, Pv, hv) {
        this._bindTextureDirectly(vv, hv, !0, !0), this._gl.texParameterf(vv, zv, Pv)
      }
      _setTextureParameterInteger(vv, zv, Pv, hv) {
        hv && this._bindTextureDirectly(vv, hv, !0, !0), this._gl.texParameteri(vv, zv, Pv)
      }
      unbindAllAttributes() {
        if (this._mustWipeVertexAttributes) {
          this._mustWipeVertexAttributes = !1;
          for (let vv = 0; vv < this._caps.maxVertexAttribs; vv++) this.disableAttributeByIndex(vv)
        } else
          for (let vv = 0, zv = this._vertexAttribArraysEnabled.length; vv < zv; vv++) vv >= this._caps.maxVertexAttribs || !this._vertexAttribArraysEnabled[vv] || this.disableAttributeByIndex(vv)
      }
      releaseEffects() {
        this._compiledEffects = {}, this.onReleaseEffectsObservable.notifyObservers(this)
      }
      dispose() {
        (0, dv.l)() && this._renderingCanvas && (this._renderingCanvas.removeEventListener("webglcontextlost", this._onContextLost), this._onContextRestored && this._renderingCanvas.removeEventListener("webglcontextrestored", this._onContextRestored)), super.dispose(), this._dummyFramebuffer && this._gl.deleteFramebuffer(this._dummyFramebuffer), this.unbindAllAttributes(), this._boundUniforms = {}, this._workingCanvas = null, this._workingContext = null, this._currentBufferPointers.length = 0, this._currentProgram = null, this._creationOptions.loseContextOnDispose && this._gl.getExtension("WEBGL_lose_context")?.loseContext(), (0, Sv.E)(this._gl)
      }
      attachContextLostEvent(vv) {
        this._renderingCanvas && this._renderingCanvas.addEventListener("webglcontextlost", vv, !1)
      }
      attachContextRestoredEvent(vv) {
        this._renderingCanvas && this._renderingCanvas.addEventListener("webglcontextrestored", vv, !1)
      }
      getError() {
        return this._gl.getError()
      }
      _canRenderToFloatFramebuffer() {
        return this._webGLVersion > 1 ? this._caps.colorBufferFloat : this._canRenderToFramebuffer(1)
      }
      _canRenderToHalfFloatFramebuffer() {
        return this._webGLVersion > 1 ? this._caps.colorBufferFloat : this._canRenderToFramebuffer(2)
      }
      _canRenderToFramebuffer(vv) {
        const zv = this._gl;
        for (; zv.getError() !== zv.NO_ERROR;);
        let Pv = !0;
        const hv = zv.createTexture();
        zv.bindTexture(zv.TEXTURE_2D, hv), zv.texImage2D(zv.TEXTURE_2D, 0, this._getRGBABufferInternalSizedFormat(vv), 1, 1, 0, zv.RGBA, this._getWebGLTextureType(vv), null), zv.texParameteri(zv.TEXTURE_2D, zv.TEXTURE_MIN_FILTER, zv.NEAREST), zv.texParameteri(zv.TEXTURE_2D, zv.TEXTURE_MAG_FILTER, zv.NEAREST);
        const Sv = zv.createFramebuffer();
        zv.bindFramebuffer(zv.FRAMEBUFFER, Sv), zv.framebufferTexture2D(zv.FRAMEBUFFER, zv.COLOR_ATTACHMENT0, zv.TEXTURE_2D, hv, 0);
        const ev = zv.checkFramebufferStatus(zv.FRAMEBUFFER);
        if (Pv = Pv && ev === zv.FRAMEBUFFER_COMPLETE, Pv = Pv && zv.getError() === zv.NO_ERROR, Pv && (zv.clear(zv.COLOR_BUFFER_BIT), Pv = Pv && zv.getError() === zv.NO_ERROR), Pv) {
          zv.bindFramebuffer(zv.FRAMEBUFFER, null);
          const vv = zv.RGBA,
            hv = zv.UNSIGNED_BYTE,
            Sv = new Uint8Array(4);
          zv.readPixels(0, 0, 1, 1, vv, hv, Sv), Pv = Pv && zv.getError() === zv.NO_ERROR
        }
        for (zv.deleteTexture(hv), zv.deleteFramebuffer(Sv), zv.bindFramebuffer(zv.FRAMEBUFFER, null); !Pv && zv.getError() !== zv.NO_ERROR;);
        return Pv
      }
      _getWebGLTextureType(vv) {
        if (1 === this._webGLVersion) {
          switch (vv) {
            case 1:
              return this._gl.FLOAT;
            case 2:
              return this._gl.HALF_FLOAT_OES;
            case 0:
              return this._gl.UNSIGNED_BYTE;
            case 8:
              return this._gl.UNSIGNED_SHORT_4_4_4_4;
            case 9:
              return this._gl.UNSIGNED_SHORT_5_5_5_1;
            case 10:
              return this._gl.UNSIGNED_SHORT_5_6_5
          }
          return this._gl.UNSIGNED_BYTE
        }
        switch (vv) {
          case 3:
            return this._gl.BYTE;
          case 0:
            return this._gl.UNSIGNED_BYTE;
          case 4:
            return this._gl.SHORT;
          case 5:
            return this._gl.UNSIGNED_SHORT;
          case 6:
            return this._gl.INT;
          case 7:
            return this._gl.UNSIGNED_INT;
          case 1:
            return this._gl.FLOAT;
          case 2:
            return this._gl.HALF_FLOAT;
          case 8:
            return this._gl.UNSIGNED_SHORT_4_4_4_4;
          case 9:
            return this._gl.UNSIGNED_SHORT_5_5_5_1;
          case 10:
            return this._gl.UNSIGNED_SHORT_5_6_5;
          case 11:
            return this._gl.UNSIGNED_INT_2_10_10_10_REV;
          case 12:
            return this._gl.UNSIGNED_INT_24_8;
          case 13:
            return this._gl.UNSIGNED_INT_10F_11F_11F_REV;
          case 14:
            return this._gl.UNSIGNED_INT_5_9_9_9_REV;
          case 15:
            return this._gl.FLOAT_32_UNSIGNED_INT_24_8_REV
        }
        return this._gl.UNSIGNED_BYTE
      }
      _getInternalFormat(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          Pv = zv ? this._glSRGBExtensionValues.SRGB8_ALPHA8 : this._gl.RGBA;
        switch (vv) {
          case 0:
            Pv = this._gl.ALPHA;
            break;
          case 1:
            Pv = this._gl.LUMINANCE;
            break;
          case 2:
            Pv = this._gl.LUMINANCE_ALPHA;
            break;
          case 6:
          case 33322:
          case 36760:
            Pv = this._gl.RED;
            break;
          case 7:
          case 33324:
          case 36761:
            Pv = this._gl.RG;
            break;
          case 4:
          case 32852:
          case 36762:
            Pv = zv ? this._glSRGBExtensionValues.SRGB : this._gl.RGB;
            break;
          case 5:
          case 32859:
          case 36763:
            Pv = zv ? this._glSRGBExtensionValues.SRGB8_ALPHA8 : this._gl.RGBA
        }
        if (this._webGLVersion > 1) switch (vv) {
          case 8:
            Pv = this._gl.RED_INTEGER;
            break;
          case 9:
            Pv = this._gl.RG_INTEGER;
            break;
          case 10:
            Pv = this._gl.RGB_INTEGER;
            break;
          case 11:
            Pv = this._gl.RGBA_INTEGER
        }
        return Pv
      }
      _getRGBABufferInternalSizedFormat(vv, zv) {
        let Pv = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (1 === this._webGLVersion) {
          if (void 0 !== zv) switch (zv) {
            case 0:
              return this._gl.ALPHA;
            case 1:
              return this._gl.LUMINANCE;
            case 2:
              return this._gl.LUMINANCE_ALPHA;
            case 4:
              return Pv ? this._glSRGBExtensionValues.SRGB : this._gl.RGB
          }
          return this._gl.RGBA
        }
        switch (vv) {
          case 3:
            switch (zv) {
              case 6:
                return this._gl.R8_SNORM;
              case 7:
                return this._gl.RG8_SNORM;
              case 4:
                return this._gl.RGB8_SNORM;
              case 8:
                return this._gl.R8I;
              case 9:
                return this._gl.RG8I;
              case 10:
                return this._gl.RGB8I;
              case 11:
                return this._gl.RGBA8I;
              default:
                return this._gl.RGBA8_SNORM
            }
          case 0:
            switch (zv) {
              case 6:
                return this._gl.R8;
              case 7:
                return this._gl.RG8;
              case 4:
                return Pv ? this._glSRGBExtensionValues.SRGB8 : this._gl.RGB8;
              case 5:
                return Pv ? this._glSRGBExtensionValues.SRGB8_ALPHA8 : this._gl.RGBA8;
              case 8:
                return this._gl.R8UI;
              case 9:
                return this._gl.RG8UI;
              case 10:
                return this._gl.RGB8UI;
              case 11:
                return this._gl.RGBA8UI;
              case 0:
                return this._gl.ALPHA;
              case 1:
                return this._gl.LUMINANCE;
              case 2:
                return this._gl.LUMINANCE_ALPHA;
              default:
                return this._gl.RGBA8
            }
          case 4:
            switch (zv) {
              case 8:
                return this._gl.R16I;
              case 36760:
                return this._gl.R16_SNORM_EXT;
              case 36761:
                return this._gl.RG16_SNORM_EXT;
              case 36762:
                return this._gl.RGB16_SNORM_EXT;
              case 36763:
                return this._gl.RGBA16_SNORM_EXT;
              case 9:
                return this._gl.RG16I;
              case 10:
                return this._gl.RGB16I;
              default:
                return this._gl.RGBA16I
            }
          case 5:
            switch (zv) {
              case 8:
                return this._gl.R16UI;
              case 33322:
                return this._gl.R16_EXT;
              case 33324:
                return this._gl.RG16_EXT;
              case 32852:
                return this._gl.RGB16_EXT;
              case 32859:
                return this._gl.RGBA16_EXT;
              case 9:
                return this._gl.RG16UI;
              case 10:
                return this._gl.RGB16UI;
              default:
                return this._gl.RGBA16UI
            }
          case 6:
            switch (zv) {
              case 8:
                return this._gl.R32I;
              case 9:
                return this._gl.RG32I;
              case 10:
                return this._gl.RGB32I;
              default:
                return this._gl.RGBA32I
            }
          case 7:
            switch (zv) {
              case 8:
                return this._gl.R32UI;
              case 9:
                return this._gl.RG32UI;
              case 10:
                return this._gl.RGB32UI;
              default:
                return this._gl.RGBA32UI
            }
          case 1:
            switch (zv) {
              case 6:
                return this._gl.R32F;
              case 7:
                return this._gl.RG32F;
              case 4:
                return this._gl.RGB32F;
              default:
                return this._gl.RGBA32F
            }
          case 2:
            switch (zv) {
              case 6:
                return this._gl.R16F;
              case 7:
                return this._gl.RG16F;
              case 4:
                return this._gl.RGB16F;
              default:
                return this._gl.RGBA16F
            }
          case 10:
            return this._gl.RGB565;
          case 13:
            return this._gl.R11F_G11F_B10F;
          case 14:
            return this._gl.RGB9_E5;
          case 8:
            return this._gl.RGBA4;
          case 9:
            return this._gl.RGB5_A1;
          case 11:
            switch (zv) {
              case 5:
              default:
                return this._gl.RGB10_A2;
              case 11:
                return this._gl.RGB10_A2UI
            }
        }
        return Pv ? this._glSRGBExtensionValues.SRGB8_ALPHA8 : this._gl.RGBA8
      }
      readPixels(vv, zv, Pv, hv) {
        let Sv = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          ev = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          gv = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
        const dv = Sv ? 4 : 3,
          Nv = Sv ? this._gl.RGBA : this._gl.RGB,
          lv = Pv * hv * dv;
        if (gv) {
          if (gv.length < lv) return pv.d.Error(`Data buffer is too small to store the read pixels (${gv.length} should be more than ${lv})`), Promise.resolve(gv)
        } else gv = new Uint8Array(lv);
        return ev && this.flushFramebuffer(), this._gl.readPixels(vv, zv, Pv, hv, Nv, this._gl.UNSIGNED_BYTE, gv), Promise.resolve(gv)
      }
      static get IsSupportedAsync() {
        return Promise.resolve(this.isSupported())
      }
      static get IsSupported() {
        return this.isSupported()
      }
      static isSupported() {
        if (null !== this._HasMajorPerformanceCaveat) return !this._HasMajorPerformanceCaveat;
        if (null === this._IsSupported) try {
          const vv = ev.b._CreateCanvas(1, 1),
            zv = vv.getContext("webgl") || vv.getContext("experimental-webgl");
          this._IsSupported = null != zv && !!globalThis.WebGLRenderingContext
        } catch (vv) {
          this._IsSupported = !1
        }
        return this._IsSupported
      }
      static get HasMajorPerformanceCaveat() {
        if (null === this._HasMajorPerformanceCaveat) try {
          const vv = ev.b._CreateCanvas(1, 1),
            zv = vv.getContext("webgl", {
              failIfMajorPerformanceCaveat: !0
            }) || vv.getContext("experimental-webgl", {
              failIfMajorPerformanceCaveat: !0
            });
          this._HasMajorPerformanceCaveat = !zv
        } catch (vv) {
          this._HasMajorPerformanceCaveat = !1
        }
        return this._HasMajorPerformanceCaveat
      }
    }
    jv._TempClearColorUint32 = new Uint32Array(4), jv._TempClearColorInt32 = new Int32Array(4), jv._TempClearColorFloat32 = new Float32Array(4), jv.ExceptionList = [{
      key: "Chrome/63.0",
      capture: "63\\.0\\.3239\\.(\\d+)",
      captureConstraint: 108,
      targets: ["uniformBuffer"]
    }, {
      key: "Firefox/58",
      capture: null,
      captureConstraint: null,
      targets: ["uniformBuffer"]
    }, {
      key: "Firefox/59",
      capture: null,
      captureConstraint: null,
      targets: ["uniformBuffer"]
    }, {
      key: "Chrome/72.+?Mobile",
      capture: null,
      captureConstraint: null,
      targets: ["vao"]
    }, {
      key: "Chrome/73.+?Mobile",
      capture: null,
      captureConstraint: null,
      targets: ["vao"]
    }, {
      key: "Chrome/74.+?Mobile",
      capture: null,
      captureConstraint: null,
      targets: ["vao"]
    }, {
      key: "Mac OS.+Chrome/71",
      capture: null,
      captureConstraint: null,
      targets: ["vao"]
    }, {
      key: "Mac OS.+Chrome/72",
      capture: null,
      captureConstraint: null,
      targets: ["vao"]
    }, {
      key: "Mac OS.+Chrome",
      capture: null,
      captureConstraint: null,
      targets: ["uniformBuffer"]
    }, {
      key: "Chrome/12\\d\\..+?Mobile",
      capture: null,
      captureConstraint: null,
      targets: ["uniformBuffer"]
    }, {
      key: ".*AppleWebKit.*(15.4).*Safari",
      capture: null,
      captureConstraint: null,
      targets: ["antialias", "maxMSAASamples"]
    }, {
      key: ".*(15.4).*AppleWebKit.*Safari",
      capture: null,
      captureConstraint: null,
      targets: ["antialias", "maxMSAASamples"]
    }], jv._ConcatenateShader = Cv.e, jv._IsSupported = null, jv._HasMajorPerformanceCaveat = null
  },
  39487: (vv, zv, Pv) => {
    var hv;
    Pv.d(zv, {
        c: () => Sv
      }),
      function(vv) {
        vv[vv.PointerMove = 0] = "PointerMove", vv[vv.PointerDown = 1] = "PointerDown", vv[vv.PointerUp = 2] = "PointerUp"
      }(hv || (hv = {}));
    class Sv {}
    Sv.DOM_DELTA_PIXEL = 0, Sv.DOM_DELTA_LINE = 1, Sv.DOM_DELTA_PAGE = 2
  },
  39484: (vv, zv, Pv) => {
    Pv.d(zv, {
      e: () => hv,
      g: () => ev,
      h: () => Sv
    });
    class hv {}
    hv.KEYDOWN = 1, hv.KEYUP = 2;
    class Sv {
      constructor(vv, zv) {
        this.type = vv, this.event = zv
      }
    }
    class ev extends Sv {
      get skipOnPointerObservable() {
        return this.skipOnKeyboardObservable
      }
      set skipOnPointerObservable(vv) {
        this.skipOnKeyboardObservable = vv
      }
      constructor(vv, zv) {
        super(vv, zv), this.type = vv, this.event = zv, this.skipOnKeyboardObservable = !1
      }
    }
  },
  39479: (vv, zv, Pv) => {
    Pv.d(zv, {
      b: () => Sv,
      c: () => gv,
      g: () => pv
    });
    var hv = Pv(36594);
    class Sv {}
    Sv.POINTERDOWN = 1, Sv.POINTERUP = 2, Sv.POINTERMOVE = 4, Sv.POINTERWHEEL = 8, Sv.POINTERPICK = 16, Sv.POINTERTAP = 32, Sv.POINTERDOUBLETAP = 64;
    class ev {
      constructor(vv, zv) {
        this.type = vv, this.event = zv
      }
    }
    class gv extends ev {
      constructor(vv, zv, Pv, Sv) {
        super(vv, zv), this.ray = null, this.originalPickingInfo = null, this.skipOnPointerObservable = !1, this.localPosition = new hv.j(Pv, Sv)
      }
    }
    class pv extends ev {
      get pickInfo() {
        return this._pickInfo || this._generatePickInfo(), this._pickInfo
      }
      constructor(vv, zv, Pv) {
        let hv = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        super(vv, zv), this._pickInfo = Pv, this._inputManager = hv
      }
      _generatePickInfo() {
        this._inputManager && (this._pickInfo = this._inputManager._pickMove(this.event), this._inputManager._setRayOnPointerInfo(this._pickInfo, this.event), this._inputManager = null)
      }
    }
  },
  39500: (vv, zv, Pv) => {
    Pv.d(zv, {
      c: () => hv
    });
    class hv {
      static CompareLightsPriority(vv, zv) {
        return vv.shadowEnabled !== zv.shadowEnabled ? (zv.shadowEnabled ? 1 : 0) - (vv.shadowEnabled ? 1 : 0) : zv.renderPriority - vv.renderPriority
      }
    }
    hv.FALLOFF_DEFAULT = 0, hv.FALLOFF_PHYSICAL = 1, hv.FALLOFF_GLTF = 2, hv.FALLOFF_STANDARD = 3, hv.LIGHTMAP_DEFAULT = 0, hv.LIGHTMAP_SPECULAR = 1, hv.LIGHTMAP_SHADOWSONLY = 2, hv.INTENSITYMODE_AUTOMATIC = 0, hv.INTENSITYMODE_LUMINOUSPOWER = 1, hv.INTENSITYMODE_LUMINOUSINTENSITY = 2, hv.INTENSITYMODE_ILLUMINANCE = 3, hv.INTENSITYMODE_LUMINANCE = 4, hv.LIGHTTYPEID_POINTLIGHT = 0, hv.LIGHTTYPEID_DIRECTIONALLIGHT = 1, hv.LIGHTTYPEID_SPOTLIGHT = 2, hv.LIGHTTYPEID_HEMISPHERICLIGHT = 3, hv.LIGHTTYPEID_RECT_AREALIGHT = 4, hv.LIGHTTYPEID_CLUSTERED_CONTAINER = 5
  },
  39134: (vv, zv, Pv) => {
    Pv.d(zv, {
      e: () => gv
    });
    var hv, Sv = Pv(36618),
      ev = Pv(39143);
    ! function(vv) {
      vv[vv.Unknown = 0] = "Unknown", vv[vv.Url = 1] = "Url", vv[vv.Temp = 2] = "Temp", vv[vv.Raw = 3] = "Raw", vv[vv.Dynamic = 4] = "Dynamic", vv[vv.RenderTarget = 5] = "RenderTarget", vv[vv.MultiRenderTarget = 6] = "MultiRenderTarget", vv[vv.Cube = 7] = "Cube", vv[vv.CubeRaw = 8] = "CubeRaw", vv[vv.CubePrefiltered = 9] = "CubePrefiltered", vv[vv.Raw3D = 10] = "Raw3D", vv[vv.Raw2DArray = 11] = "Raw2DArray", vv[vv.DepthStencil = 12] = "DepthStencil", vv[vv.CubeRawRGBD = 13] = "CubeRawRGBD", vv[vv.Depth = 14] = "Depth", vv[vv.External = 15] = "External"
    }(hv || (hv = {}));
    class gv extends ev.d {
      get useMipMaps() {
        return null === this._useMipMaps ? this.generateMipMaps : this._useMipMaps
      }
      set useMipMaps(vv) {
        this._useMipMaps = vv
      }
      get uniqueId() {
        return this._uniqueId
      }
      _setUniqueId(vv) {
        this._uniqueId = vv
      }
      ma() {
        return this._engine
      }
      get source() {
        return this._source
      }
      constructor(vv, zv) {
        let Pv = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        super(), this.isReady = !1, this.isCube = !1, this.is3D = !1, this.is2DArray = !1, this.isMultiview = !1, this.url = "", this.generateMipMaps = !1, this._useMipMaps = null, this.mipLevelCount = 1, this.samples = 0, this.type = -1, this.format = -1, this.onLoadedObservable = new Sv.c, this.onErrorObservable = new Sv.c, this.onRebuildCallback = null, this.width = 0, this.height = 0, this.depth = 0, this.baseWidth = 0, this.baseHeight = 0, this.baseDepth = 0, this.invertY = !1, this._invertVScale = !1, this._associatedChannel = -1, this._source = 0, this._buffer = null, this._bufferView = null, this._bufferViewArray = null, this._bufferViewArrayArray = null, this._size = 0, this._extension = "", this._files = null, this._workingCanvas = null, this._workingContext = null, this._cachedCoordinatesMode = null, this._isDisabled = !1, this._compression = null, this._sphericalPolynomial = null, this._sphericalPolynomialPromise = null, this._sphericalPolynomialComputed = !1, this._lodGenerationScale = 0, this._lodGenerationOffset = 0, this._useSRGBBuffer = !1, this._creationFlags = 0, this._lodTextureHigh = null, this._lodTextureMid = null, this._lodTextureLow = null, this._isRGBD = !1, this._linearSpecularLOD = !1, this._irradianceTexture = null, this._hardwareTexture = null, this._maxLodLevel = null, this._references = 1, this._gammaSpace = null, this._premulAlpha = !1, this._dynamicTextureSource = null, this._autoMSAAManagement = !1, this._engine = vv, this._source = zv, this._uniqueId = gv._Counter++, Pv || (this._hardwareTexture = vv._createHardwareTexture())
      }
      incrementReferences() {
        this._references++
      }
      updateSize(vv, zv) {
        let Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        this._engine.updateTextureDimensions(this, vv, zv, Pv), this.width = vv, this.height = zv, this.depth = Pv, this.baseWidth = vv, this.baseHeight = zv, this.baseDepth = Pv, this._size = vv * zv * Pv
      }
      _rebuild() {
        if (this.isReady = !1, this._cachedCoordinatesMode = null, this._cachedWrapU = null, this._cachedWrapV = null, this._cachedWrapR = null, this._cachedAnisotropicFilteringLevel = null, this.onRebuildCallback) {
          const vv = this.onRebuildCallback(this),
            zv = zv => {
              zv._swapAndDie(this, !1), this.isReady = vv.isReady
            };
          return void(vv.isAsync ? vv.proxy.then(zv) : zv(vv.proxy))
        }
        let vv;
        switch (this.source) {
          case 2:
          case 12:
          case 14:
          case 15:
            break;
          case 1:
            return void(vv = this._engine.createTexture(this._originalUrl ?? this.url, !this.generateMipMaps, this.invertY, null, this.samplingMode, (vv => {
              vv._swapAndDie(this, !1), this.isReady = !0
            }), null, this._buffer, void 0, this.format, this._extension, void 0, void 0, void 0, this._useSRGBBuffer));
          case 3:
            if (vv = this._engine.createRawTexture(this._bufferView, this.baseWidth, this.baseHeight, this.format, this.generateMipMaps, this.invertY, this.samplingMode, this._compression, this.type, this._creationFlags, this._useSRGBBuffer, this.mipLevelCount), vv._swapAndDie(this, !1), this._bufferViewArray)
              for (let vv = 0; vv < this._bufferViewArray.length; vv++) {
                const zv = this._bufferViewArray[vv];
                zv && this._engine.updateRawTexture(this, zv, this.format, this.invertY, this._compression, this.type, this._useSRGBBuffer, vv)
              }
            this.isReady = !0;
            break;
          case 10:
            vv = this._engine.createRawTexture3D(this._bufferView, this.baseWidth, this.baseHeight, this.baseDepth, this.format, this.generateMipMaps, this.invertY, this.samplingMode, this._compression, this.type), vv._swapAndDie(this, !1), this.isReady = !0;
            break;
          case 11:
            if (vv = this._engine.createRawTexture2DArray(this._bufferView, this.baseWidth, this.baseHeight, this.baseDepth, this.format, this.generateMipMaps, this.invertY, this.samplingMode, this._compression, this.type, this._creationFlags, this.mipLevelCount), vv._swapAndDie(this, !1), this._bufferViewArray)
              for (let vv = 0; vv < this._bufferViewArray.length; vv++) {
                const zv = this._bufferViewArray[vv];
                zv && this._engine.updateRawTexture2DArray(this, zv, this.format, this.invertY, this._compression, this.type, vv)
              }
            this.isReady = !0;
            break;
          case 4:
            vv = this._engine.createDynamicTexture(this.baseWidth, this.baseHeight, this.generateMipMaps, this.samplingMode), vv._swapAndDie(this, !1), this._dynamicTextureSource && this._engine.updateDynamicTexture(this, this._dynamicTextureSource, this.invertY, this._premulAlpha, this.format, !0);
            break;
          case 7:
            return void(vv = this._engine.createCubeTexture(this.url, null, this._files, !this.generateMipMaps, (() => {
              vv._swapAndDie(this, !1), this.isReady = !0
            }), null, this.format, this._extension, !1, 0, 0, null, void 0, this._useSRGBBuffer, ArrayBuffer.isView(this._buffer) ? this._buffer : null));
          case 8:
            vv = this._engine.createRawCubeTexture(this._bufferViewArray, this.width, this._originalFormat ?? this.format, this.type, this.generateMipMaps, this.invertY, this.samplingMode, this._compression), vv._swapAndDie(this, !1), this.isReady = !0;
            break;
          case 13:
            return;
          case 9:
            return vv = this._engine.createPrefilteredCubeTexture(this.url, null, this._lodGenerationScale, this._lodGenerationOffset, (vv => {
              vv && vv._swapAndDie(this, !1), this.isReady = !0
            }), null, this.format, this._extension, void 0, ArrayBuffer.isView(this._buffer) ? this._buffer : null), void(vv._sphericalPolynomial = this._sphericalPolynomial)
        }
      }
      _swapAndDie(vv) {
        let zv = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this._hardwareTexture?.setUsage(vv._source, this.generateMipMaps, this.is2DArray, this.isCube, this.is3D, this.width, this.height, this.depth), vv._hardwareTexture = this._hardwareTexture, vv._setUniqueId(gv._Counter++), zv && (vv._isRGBD = this._isRGBD), this._lodTextureHigh && (vv._lodTextureHigh && vv._lodTextureHigh.dispose(), vv._lodTextureHigh = this._lodTextureHigh), this._lodTextureMid && (vv._lodTextureMid && vv._lodTextureMid.dispose(), vv._lodTextureMid = this._lodTextureMid), this._lodTextureLow && (vv._lodTextureLow && vv._lodTextureLow.dispose(), vv._lodTextureLow = this._lodTextureLow), this._irradianceTexture && (vv._irradianceTexture && vv._irradianceTexture.dispose(), vv._irradianceTexture = this._irradianceTexture);
        const Pv = this._engine.getLoadedTexturesCache();
        let hv = Pv.indexOf(this); - 1 !== hv && Pv.splice(hv, 1), hv = Pv.indexOf(vv), -1 === hv && Pv.push(vv)
      }
      dispose() {
        this._references--, 0 === this._references && (this.onLoadedObservable.clear(), this.onErrorObservable.clear(), this._engine._releaseTexture(this), this._hardwareTexture = null, this._dynamicTextureSource = null)
      }
    }
    gv._Counter = 0
  },
  39255: (vv, zv, Pv) => {
    function hv(vv) {
      return 13 === vv || 14 === vv || 15 === vv || 16 === vv || 17 === vv || 18 === vv || 19 === vv
    }

    function Sv(vv) {
      return 8 === vv || 9 === vv || 10 === vv || 11 === vv
    }

    function ev(vv) {
      return 0 === vv || 5 === vv || 7 === vv || 11 === vv
    }

    function gv(vv) {
      return 13 === vv || 17 === vv || 18 === vv || 19 === vv
    }
    Pv.d(zv, {
      e: () => gv,
      f: () => hv,
      g: () => Sv,
      h: () => ev
    })
  },
  39143: (vv, zv, Pv) => {
    Pv.d(zv, {
      d: () => hv
    });
    class hv {
      get wrapU() {
        return this._cachedWrapU
      }
      set wrapU(vv) {
        this._cachedWrapU = vv
      }
      get wrapV() {
        return this._cachedWrapV
      }
      set wrapV(vv) {
        this._cachedWrapV = vv
      }
      get wrapR() {
        return this._cachedWrapR
      }
      set wrapR(vv) {
        this._cachedWrapR = vv
      }
      get anisotropicFilteringLevel() {
        return this._cachedAnisotropicFilteringLevel
      }
      set anisotropicFilteringLevel(vv) {
        this._cachedAnisotropicFilteringLevel = vv
      }
      get comparisonFunction() {
        return this._comparisonFunction
      }
      set comparisonFunction(vv) {
        this._comparisonFunction = vv
      }
      get useMipMaps() {
        return this._useMipMaps
      }
      set useMipMaps(vv) {
        this._useMipMaps = vv
      }
      constructor() {
        this.samplingMode = -1, this._useMipMaps = !0, this._cachedWrapU = null, this._cachedWrapV = null, this._cachedWrapR = null, this._cachedAnisotropicFilteringLevel = null, this._comparisonFunction = 0
      }
      setParameters() {
        let vv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          hv = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          Sv = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 2,
          ev = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
        return this._cachedWrapU = vv, this._cachedWrapV = zv, this._cachedWrapR = Pv, this._cachedAnisotropicFilteringLevel = hv, this.samplingMode = Sv, this._comparisonFunction = ev, this
      }
      compareSampler(vv) {
        return this._cachedWrapU === vv._cachedWrapU && this._cachedWrapV === vv._cachedWrapV && this._cachedWrapR === vv._cachedWrapR && this._cachedAnisotropicFilteringLevel === vv._cachedAnisotropicFilteringLevel && this.samplingMode === vv.samplingMode && this._comparisonFunction === vv._comparisonFunction && this._useMipMaps === vv._useMipMaps
      }
    }
  },
  39426: (vv, zv, Pv) => {
    function hv(vv) {
      vv.push("vCameraColorCurveNeutral", "vCameraColorCurvePositive", "vCameraColorCurveNegative")
    }
    Pv.d(zv, {
      e: () => hv
    })
  },
  39230: (vv, zv, Pv) => {
    function hv(vv) {
      return void 0 === vv.getPipelineContext
    }
    Pv.d(zv, {
      e: () => hv
    })
  },
  39621: (vv, zv, Pv) => {
    Pv.d(zv, {
      c: () => Sv
    });
    var hv = Pv(39204);
    class Sv {
      static GetEffect(vv) {
        return void 0 === vv.getPipelineContext ? vv.effect : vv
      }
      constructor(vv) {
        let zv = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this._wasPreviouslyReady = !1, this._forceRebindOnNextCall = !0, this._wasPreviouslyUsingInstances = null, this.effect = null, this.defines = null, this.drawContext = vv.createDrawContext(), zv && (this.materialContext = vv.createMaterialContext())
      }
      setEffect(vv, zv) {
        let Pv = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        Pv || this.effect === vv || this.drawContext?._releaseUniformBufferSlots?.(), this.effect = vv, void 0 !== zv && (this.defines = zv), Pv && this.drawContext?.reset()
      }
      dispose() {
        let vv = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this.effect) {
          const zv = this.effect;
          vv ? zv.dispose() : hv.e.SetImmediate((() => {
            zv.ma().onEndFrameObservable.addOnce((() => {
              zv.dispose()
            }))
          })), this.effect = null
        }
        this.drawContext?.dispose()
      }
    }
  },
  39164: (vv, zv, Pv) => {
    Pv.d(zv, {
      c: () => Tv,
      d: () => wv,
      h: () => Nv,
      i: () => lv
    });
    var hv = Pv(39167),
      Sv = Pv(39175),
      ev = Pv(39162),
      gv = Pv(38209),
      pv = Pv(39196),
      dv = Pv(39184);

    function Nv(vv, zv) {
      return (0, Sv.G)(zv).cachedPipelines[vv]
    }

    function lv(vv) {
      const zv = vv._name,
        Pv = vv.context;
      if (zv && Pv) {
        const vv = (0, Sv.G)(Pv),
          hv = vv.cachedPipelines[zv];
        hv?.dispose(), delete vv.cachedPipelines[zv]
      }
    }

    function Tv(vv, zv, Pv, Sv, ev, gv, dv) {
      let Nv, lv;
      const Tv = (0, hv.l)() ? gv?.getHostDocument() : null;
      Nv = "string" === typeof zv ? zv : "string" === typeof zv.vertexSource ? "source:" + zv.vertexSource : "string" === typeof zv.vertexElement ? Tv?.getElementById(zv.vertexElement) || zv.vertexElement : zv.vertex || zv, lv = "string" === typeof zv ? zv : "string" === typeof zv.fragmentSource ? "source:" + zv.fragmentSource : "string" === typeof zv.fragmentElement ? Tv?.getElementById(zv.fragmentElement) || zv.fragmentElement : zv.fragment || zv;
      const wv = [void 0, void 0],
        av = () => {
          if (wv[0] && wv[1]) {
            const [hv, Nv] = wv;
            (0, pv.d)(vv), (0, pv.i)(hv, vv, ((hv, lv) => {
              dv && (dv._vertexSourceCodeBeforeMigration = lv), Pv && (hv = Pv("vertex", hv)), vv.isFragment = !0, (0, pv.i)(Nv, vv, ((gv, Nv) => {
                dv && (dv._fragmentSourceCodeBeforeMigration = Nv), Pv && (gv = Pv("fragment", gv));
                const lv = (0, pv.c)(hv, gv, vv);
                vv = null;
                const Tv = function(vv, zv, Pv, hv) {
                  if (Pv) {
                    return {
                      vertexSourceCode: (1 === hv ? "//" : "") + "#define SHADER_NAME vertex:" + (Pv.vertexElement || Pv.vertex || Pv.spectorName || Pv) + "\n" + vv,
                      fragmentSourceCode: (1 === hv ? "//" : "") + "#define SHADER_NAME fragment:" + (Pv.fragmentElement || Pv.fragment || Pv.spectorName || Pv) + "\n" + zv
                    }
                  }
                  return {
                    vertexSourceCode: vv,
                    fragmentSourceCode: zv
                  }
                }(lv.vertexCode, lv.fragmentCode, zv, ev);
                Sv?.(Tv.vertexSourceCode, Tv.fragmentSourceCode)
              }), gv)
            }), gv)
          }
        };
      Wv(Nv, "Vertex", "", (vv => {
        dv && (dv._rawVertexSourceCode = vv), wv[0] = vv, av()
      }), ev), Wv(lv, "Fragment", "Pixel", (vv => {
        dv && (dv._rawFragmentSourceCode = vv), wv[1] = vv, av()
      }), ev)
    }

    function Wv(vv, zv, Pv, Sv, gv, pv) {
      if ("undefined" !== typeof HTMLElement && vv instanceof HTMLElement) {
        return void Sv((0, hv.e)(vv))
      }
      if ("source:" === vv.substring(0, 7)) return void Sv(vv.substring(7));
      if ("base64:" === vv.substring(0, 7)) {
        return void Sv(window.atob(vv.substring(7)))
      }
      const Nv = ev.d.GetShadersStore(gv);
      if (Nv[vv + zv + "Shader"]) return void Sv(Nv[vv + zv + "Shader"]);
      if (Pv && Nv[vv + Pv + "Shader"]) return void Sv(Nv[vv + Pv + "Shader"]);
      let lv;
      if (lv = "." === vv[0] || "/" === vv[0] || vv.indexOf("http") > -1 ? vv : ev.d.GetShadersRepository(gv) + vv, !(pv = pv || dv.j)) throw new Error("loadFileInjection is not defined");
      pv(lv + "." + zv.toLowerCase() + ".fx", Sv)
    }
    const wv = (vv, zv, Pv, hv) => {
      try {
        const ev = vv.context ? (0, Sv.G)(vv.context) : null;
        ev && (ev.disableParallelShaderCompile = vv.disableParallelCompilation);
        const gv = vv.existingPipelineContext || zv(vv.shaderProcessingContext);
        return gv._name = vv.name, vv.name && ev && (ev.cachedPipelines[vv.name] = gv), Pv(gv, vv.vertex, vv.fragment, !!vv.createAsRaw, "", "", vv.rebuildRebind, vv.defines, vv.transformFeedbackVaryings, "", (() => {
          hv(gv, (() => {
            vv.onRenderingStateCompiled?.(gv)
          }))
        })), gv
      } catch (ev) {
        throw gv.d.Error("Error compiling effect"), ev
      }
    }
  },
  39157: (vv, zv, Pv) => {
    Pv.d(zv, {
      b: () => dv
    });
    var hv = Pv(36618),
      Sv = Pv(38209),
      ev = Pv(39162),
      gv = Pv(39164),
      pv = Pv(39204);
    class dv {
      static get ShadersRepository() {
        return ev.d.ShadersRepository
      }
      static set ShadersRepository(vv) {
        ev.d.ShadersRepository = vv
      }
      get mzv() {
        return this._isDisposed
      }
      get onBindObservable() {
        return this._onBindObservable || (this._onBindObservable = new hv.c), this._onBindObservable
      }
      get shaderLanguage() {
        return this._shaderLanguage
      }
      constructor(vv, zv, Pv) {
        let Sv = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          ev = arguments.length > 4 ? arguments[4] : void 0,
          pv = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          Nv = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
          lv = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
          Tv = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
          Wv = arguments.length > 9 ? arguments[9] : void 0,
          wv = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : "",
          av = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : 0,
          sv = arguments.length > 12 ? arguments[12] : void 0;
        this.defines = "", this.onCompiled = null, this.onError = null, this.onBind = null, this.uniqueId = 0, this.onCompileObservable = new hv.c, this.onErrorObservable = new hv.c, this._onBindObservable = null, this._isDisposed = !1, this._refCount = 1, this._bonesComputationForcedToCPU = !1, this._uniformBuffersNames = {}, this._multiTarget = !1, this._samplers = {}, this._isReady = !1, this._compilationError = "", this._allFallbacksProcessed = !1, this._uniforms = {}, this._key = "", this._fallbacks = null, this._vertexSourceCodeOverride = "", this._fragmentSourceCodeOverride = "", this._transformFeedbackVaryings = null, this._disableParallelShaderCompilation = !1, this._pipelineContext = null, this._vertexSourceCode = "", this._fragmentSourceCode = "", this._vertexSourceCodeBeforeMigration = "", this._fragmentSourceCodeBeforeMigration = "", this._rawVertexSourceCode = "", this._rawFragmentSourceCode = "", this._processCodeAfterIncludes = void 0, this._processFinalCode = null, this._onReleaseEffectsObserver = null, this.name = vv, this._key = wv;
        const Cv = this._key.replace(/\r/g, "").replace(/\n/g, "|");
        let iv;
        if (zv.attributes) {
          const vv = zv;
          if (this._engine = Pv, this._attributesNames = vv.attributes, this._uniformsNames = vv.uniformsNames.concat(vv.samplers), this._samplerList = vv.samplers.slice(), this.defines = vv.defines, this.onError = vv.onError, this.onCompiled = vv.onCompiled, this._fallbacks = vv.fallbacks, this._indexParameters = vv.indexParameters, this._transformFeedbackVaryings = vv.transformFeedbackVaryings || null, this._multiTarget = !!vv.multiTarget, this._shaderLanguage = vv.shaderLanguage ?? 0, this._disableParallelShaderCompilation = !!vv.disableParallelShaderCompilation, vv.uniformBuffersNames) {
            this._uniformBuffersNamesList = vv.uniformBuffersNames.slice();
            for (let zv = 0; zv < vv.uniformBuffersNames.length; zv++) this._uniformBuffersNames[vv.uniformBuffersNames[zv]] = zv
          }
          this._processFinalCode = vv.processFinalCode ?? null, this._processCodeAfterIncludes = vv.processCodeAfterIncludes ?? void 0, sv = vv.extraInitializationsAsync, iv = vv.existingPipelineContext
        } else this._engine = ev, this.defines = null == pv ? "" : pv, this._uniformsNames = Pv.concat(Sv), this._samplerList = Sv ? Sv.slice() : [], this._attributesNames = zv, this._uniformBuffersNamesList = [], this._shaderLanguage = av, this.onError = Tv, this.onCompiled = lv, this._indexParameters = Wv, this._fallbacks = Nv;
        "WEBGL2" === this._engine.shaderPlatformName && (iv = (0, gv.h)(Cv, this._engine._gl) ?? iv), this._attributeLocationByName = {}, this.uniqueId = dv._UniqueIdSeed++, iv ? (this._pipelineContext = iv, this._pipelineContext.setEngine(this._engine), this._onRenderingStateCompiled(this._pipelineContext), this._pipelineContext.program && (this._pipelineContext.program.__SPECTOR_rebuildProgram = this._rebuildProgram.bind(this))) : this._processShaderCodeAsync(null, !1, null, sv).catch((vv => {
          const zv = vv?.message ?? String(vv),
            Pv = new Error(`Effect async shader preparation failed for "${String(this.name)}": ${zv}`);
          vv && "string" === typeof vv.stack && (Pv.stack = `${Pv.message}\nCaused by: ${vv.stack}`), this._processCompilationErrors(Pv)
        })), this._onReleaseEffectsObserver = this._engine.onReleaseEffectsObservable.addOnce((() => {
          this._onReleaseEffectsObserver = null, this.mzv || this.dispose(!0)
        }))
      }
      async _processShaderCodeAsync() {
        let vv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          zv = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          hv = arguments.length > 3 ? arguments[3] : void 0;
        hv && await hv(), this._processingContext = Pv || this._engine._getShaderProcessingContext(this._shaderLanguage, !1);
        const Sv = {
          defines: this.defines.split("\n"),
          indexParameters: this._indexParameters,
          isFragment: !1,
          shouldUseHighPrecisionShader: this._engine._shouldUseHighPrecisionShader,
          processor: vv ?? this._engine._getShaderProcessor(this._shaderLanguage),
          supportsUniformBuffers: this._engine.supportsUniformBuffers,
          shadersRepository: ev.d.GetShadersRepository(this._shaderLanguage),
          includesShadersStore: ev.d.GetIncludesShadersStore(this._shaderLanguage),
          version: (100 * this._engine.version).toString(),
          platformName: this._engine.shaderPlatformName,
          processingContext: this._processingContext,
          isNDCHalfZRange: this._engine.isNDCHalfZRange,
          SPv: this._engine.SPv,
          processCodeAfterIncludes: this._processCodeAfterIncludes
        };
        (0, gv.c)(Sv, this.name, this._processFinalCode, ((vv, Pv) => {
          this._vertexSourceCode = vv, this._fragmentSourceCode = Pv, this._prepareEffect(zv)
        }), this._shaderLanguage, this._engine, this)
      }
      get key() {
        return this._key
      }
      isReady() {
        try {
          return this._isReadyInternal()
        } catch {
          return !1
        }
      }
      _isReadyInternal() {
        return !!this._engine.mzv || (!!this._isReady || !!this._pipelineContext && this._pipelineContext.isReady)
      }
      ma() {
        return this._engine
      }
      getPipelineContext() {
        return this._pipelineContext
      }
      getAttributesNames() {
        return this._attributesNames
      }
      getAttributeLocation(vv) {
        return this._attributes[vv]
      }
      getAttributeLocationByName(vv) {
        return this._attributeLocationByName[vv]
      }
      getAttributesCount() {
        return this._attributes.length
      }
      getUniformIndex(vv) {
        return this._uniformsNames.indexOf(vv)
      }
      getUniform(vv) {
        return this._uniforms[vv]
      }
      getSamplers() {
        return this._samplerList
      }
      getUniformNames() {
        return this._uniformsNames
      }
      getUniformBuffersNames() {
        return this._uniformBuffersNamesList
      }
      getIndexParameters() {
        return this._indexParameters
      }
      getCompilationError() {
        return this._compilationError
      }
      allFallbacksProcessed() {
        return this._allFallbacksProcessed
      }
      async whenCompiledAsync() {
        return await new Promise((vv => {
          this.executeWhenCompiled(vv)
        }))
      }
      executeWhenCompiled(vv) {
        this.isReady() ? vv(this) : (this.onCompileObservable.add((zv => {
          vv(zv)
        })), this._pipelineContext && !this._pipelineContext.isAsync || this._checkIsReady(null))
      }
      _checkIsReady(vv) {
        (0, pv.g)((() => this._isReadyInternal() || this._isDisposed), (() => {}), (zv => {
          this._processCompilationErrors(zv, vv)
        }), 16, 12e4, !0, ` - Effect: ${"string"===typeof this.name?this.name:this.key}`)
      }
      get vertexSourceCode() {
        return this._vertexSourceCodeOverride && this._fragmentSourceCodeOverride ? this._vertexSourceCodeOverride : this._pipelineContext?._getVertexShaderCode() ?? this._vertexSourceCode
      }
      get fragmentSourceCode() {
        return this._vertexSourceCodeOverride && this._fragmentSourceCodeOverride ? this._fragmentSourceCodeOverride : this._pipelineContext?._getFragmentShaderCode() ?? this._fragmentSourceCode
      }
      get vertexSourceCodeBeforeMigration() {
        return this._vertexSourceCodeBeforeMigration
      }
      get fragmentSourceCodeBeforeMigration() {
        return this._fragmentSourceCodeBeforeMigration
      }
      get rawVertexSourceCode() {
        return this._rawVertexSourceCode
      }
      get rawFragmentSourceCode() {
        return this._rawFragmentSourceCode
      }
      getPipelineGenerationOptions() {
        return {
          platformName: this._engine.shaderPlatformName,
          shaderLanguage: this._shaderLanguage,
          shaderNameOrContent: this.name,
          key: this._key,
          defines: this.defines.split("\n"),
          addGlobalDefines: !1,
          extendedProcessingOptions: {
            indexParameters: this._indexParameters,
            isNDCHalfZRange: this._engine.isNDCHalfZRange,
            SPv: this._engine.SPv,
            supportsUniformBuffers: this._engine.supportsUniformBuffers
          },
          extendedCreatePipelineOptions: {
            transformFeedbackVaryings: this._transformFeedbackVaryings,
            createAsRaw: !(!this._vertexSourceCodeOverride || !this._fragmentSourceCodeOverride)
          }
        }
      }
      _rebuildProgram(vv, zv, Pv, hv) {
        this._isReady = !1, this._vertexSourceCodeOverride = vv, this._fragmentSourceCodeOverride = zv, this.onError = (vv, zv) => {
          hv && hv(zv)
        }, this.onCompiled = () => {
          const vv = this.ma().scenes;
          if (vv)
            for (let zv = 0; zv < vv.length; zv++) vv[zv].markAllMaterialsAsDirty(127);
          this._pipelineContext._handlesSpectorRebuildCallback?.(Pv)
        }, this._fallbacks = null, this._prepareEffect()
      }
      _onRenderingStateCompiled(vv) {
        if (this._pipelineContext = vv, this._pipelineContext.setEngine(this._engine), this._attributes = [], this._pipelineContext._fillEffectInformation(this, this._uniformBuffersNames, this._uniformsNames, this._uniforms, this._samplerList, this._samplers, this._attributesNames, this._attributes), this._attributesNames)
          for (let zv = 0; zv < this._attributesNames.length; zv++) {
            const vv = this._attributesNames[zv];
            this._attributeLocationByName[vv] = this._attributes[zv]
          }
        this._engine.bindSamplers(this), this._compilationError = "", this._isReady = !0, this.onCompiled && this.onCompiled(this), this.onCompileObservable.notifyObservers(this), this.onCompileObservable.clear(), this._fallbacks && this._fallbacks.unBindMesh(), dv.AutomaticallyClearCodeCache && this.clearCodeCache()
      }
      _prepareEffect() {
        let vv = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const zv = this._pipelineContext;
        this._isReady = !1;
        try {
          const Pv = !(!this._vertexSourceCodeOverride || !this._fragmentSourceCodeOverride),
            hv = Pv ? null : this.defines,
            Sv = Pv ? this._vertexSourceCodeOverride : this._vertexSourceCode,
            ev = Pv ? this._fragmentSourceCodeOverride : this._fragmentSourceCode,
            pv = this._engine;
          this._pipelineContext = (0, gv.d)({
            existingPipelineContext: vv ? zv : null,
            vertex: Sv,
            fragment: ev,
            context: "WEBGL2" === pv.shaderPlatformName || "WEBGL1" === pv.shaderPlatformName ? pv._gl : void 0,
            rebuildRebind: (vv, zv, Pv, hv) => this._rebuildProgram(vv, zv, Pv, hv),
            defines: hv,
            transformFeedbackVaryings: this._transformFeedbackVaryings,
            name: this._key.replace(/\r/g, "").replace(/\n/g, "|"),
            createAsRaw: Pv,
            disableParallelCompilation: this._disableParallelShaderCompilation,
            shaderProcessingContext: this._processingContext,
            onRenderingStateCompiled: Pv => {
              zv && !vv && this._engine._deletePipelineContext(zv), Pv && this._onRenderingStateCompiled(Pv)
            }
          }, this._engine.createPipelineContext.bind(this._engine), this._engine._preparePipelineContextAsync.bind(this._engine), this._engine._executeWhenRenderingStateIsCompiled.bind(this._engine)), this._pipelineContext.isAsync && this._checkIsReady(zv)
        } catch (Pv) {
          this._processCompilationErrors(Pv, zv)
        }
      }
      _getShaderCodeAndErrorLine(vv, zv, Pv) {
        const hv = Pv ? /FRAGMENT SHADER ERROR: 0:(\d+?):/ : /VERTEX SHADER ERROR: 0:(\d+?):/;
        let Sv = null;
        if (zv && vv) {
          const ev = zv.match(hv);
          if (ev && 2 === ev.length) {
            const zv = parseInt(ev[1]),
              hv = vv.split("\n", -1);
            hv.length >= zv && (Sv = `Offending line [${zv}] in ${Pv?"fragment":"vertex"} code: ${hv[zv-1]}`)
          }
        }
        return [vv, Sv]
      }
      _processCompilationErrors(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        this._compilationError = "string" === typeof vv?.stack ? vv.stack : vv?.message ?? String(vv);
        const Pv = this._attributesNames,
          hv = this._fallbacks;
        if (Sv.d.Error("Unable to compile effect:"), Sv.d.Error(`Uniforms: ${this._uniformsNames.join(" ")}`), Sv.d.Error(`Attributes: ${Pv.join(" ")}`), Sv.d.Error("Defines:\n" + this.defines), dv.LogShaderCodeOnCompilationError) {
          let vv, zv = null,
            Pv = null;
          this._pipelineContext?._getVertexShaderCode() && ([vv, zv] = this._getShaderCodeAndErrorLine(this._pipelineContext._getVertexShaderCode(), this._compilationError, !1), vv && (Sv.d.Error("Vertex code:"), Sv.d.Error(vv))), this._pipelineContext?._getFragmentShaderCode() && ([vv, Pv] = this._getShaderCodeAndErrorLine(this._pipelineContext?._getFragmentShaderCode(), this._compilationError, !0), vv && (Sv.d.Error("Fragment code:"), Sv.d.Error(vv))), zv && Sv.d.Error(zv), Pv && Sv.d.Error(Pv)
        }
        Sv.d.Error("Error: " + this._compilationError);
        const ev = () => {
          this.onError && this.onError(this, this._compilationError), this.onErrorObservable.notifyObservers(this), this._engine.onEffectErrorObservable.notifyObservers({
            effect: this,
            errors: this._compilationError
          })
        };
        zv && (this._pipelineContext = zv, this._isReady = !0, ev()), hv ? (this._pipelineContext = null, hv.hasMoreFallbacks ? (this._allFallbacksProcessed = !1, Sv.d.Error("Trying next fallback."), this.defines = hv.reduce(this.defines, this), this._prepareEffect()) : (this._allFallbacksProcessed = !0, ev(), this.onErrorObservable.clear(), this._fallbacks && this._fallbacks.unBindMesh())) : (this._allFallbacksProcessed = !0, zv || ev())
      }
      get isSupported() {
        return "" === this._compilationError
      }
      _bindTexture(vv, zv) {
        this._engine._bindTexture(this._samplers[vv], zv, vv)
      }
      setTexture(vv, zv) {
        this._engine.setTexture(this._samplers[vv], this._uniforms[vv], zv, vv)
      }
      setTextureArray(vv, zv) {
        const Pv = vv + "Ex";
        if (-1 === this._samplerList.indexOf(Pv + "0")) {
          const hv = this._samplerList.indexOf(vv);
          for (let vv = 1; vv < zv.length; vv++) {
            const zv = Pv + (vv - 1).toString();
            this._samplerList.splice(hv + vv, 0, zv)
          }
          let Sv = 0;
          for (const vv of this._samplerList) this._samplers[vv] = Sv, Sv += 1
        }
        this._engine.setTextureArray(this._samplers[vv], this._uniforms[vv], zv, vv)
      }
      bindUniformBuffer(vv, zv) {
        const Pv = this._uniformBuffersNames[zv];
        void 0 === Pv || dv._BaseCache[Pv] === vv && this._engine._features.useUBOBindingCache || (dv._BaseCache[Pv] = vv, this._engine.bindUniformBufferBase(vv, Pv, zv))
      }
      bindUniformBlock(vv, zv) {
        this._engine.bindUniformBlock(this._pipelineContext, vv, zv)
      }
      setInt(vv, zv) {
        return this._pipelineContext.setInt(vv, zv), this
      }
      setInt2(vv, zv, Pv) {
        return this._pipelineContext.setInt2(vv, zv, Pv), this
      }
      setInt3(vv, zv, Pv, hv) {
        return this._pipelineContext.setInt3(vv, zv, Pv, hv), this
      }
      setInt4(vv, zv, Pv, hv, Sv) {
        return this._pipelineContext.setInt4(vv, zv, Pv, hv, Sv), this
      }
      setIntArray(vv, zv) {
        return this._pipelineContext.setIntArray(vv, zv), this
      }
      setIntArray2(vv, zv) {
        return this._pipelineContext.setIntArray2(vv, zv), this
      }
      setIntArray3(vv, zv) {
        return this._pipelineContext.setIntArray3(vv, zv), this
      }
      setIntArray4(vv, zv) {
        return this._pipelineContext.setIntArray4(vv, zv), this
      }
      setUInt(vv, zv) {
        return this._pipelineContext.setUInt(vv, zv), this
      }
      setUInt2(vv, zv, Pv) {
        return this._pipelineContext.setUInt2(vv, zv, Pv), this
      }
      setUInt3(vv, zv, Pv, hv) {
        return this._pipelineContext.setUInt3(vv, zv, Pv, hv), this
      }
      setUInt4(vv, zv, Pv, hv, Sv) {
        return this._pipelineContext.setUInt4(vv, zv, Pv, hv, Sv), this
      }
      setUIntArray(vv, zv) {
        return this._pipelineContext.setUIntArray(vv, zv), this
      }
      setUIntArray2(vv, zv) {
        return this._pipelineContext.setUIntArray2(vv, zv), this
      }
      setUIntArray3(vv, zv) {
        return this._pipelineContext.setUIntArray3(vv, zv), this
      }
      setUIntArray4(vv, zv) {
        return this._pipelineContext.setUIntArray4(vv, zv), this
      }
      setFloatArray(vv, zv) {
        return this._pipelineContext.setArray(vv, zv), this
      }
      setFloatArray2(vv, zv) {
        return this._pipelineContext.setArray2(vv, zv), this
      }
      setFloatArray3(vv, zv) {
        return this._pipelineContext.setArray3(vv, zv), this
      }
      setFloatArray4(vv, zv) {
        return this._pipelineContext.setArray4(vv, zv), this
      }
      setArray(vv, zv) {
        return this._pipelineContext.setArray(vv, zv), this
      }
      setArray2(vv, zv) {
        return this._pipelineContext.setArray2(vv, zv), this
      }
      setArray3(vv, zv) {
        return this._pipelineContext.setArray3(vv, zv), this
      }
      setArray4(vv, zv) {
        return this._pipelineContext.setArray4(vv, zv), this
      }
      setMatrices(vv, zv) {
        return this._pipelineContext.setMatrices(vv, zv), this
      }
      setMatrix(vv, zv) {
        return this._pipelineContext.setMatrix(vv, zv), this
      }
      setMatrix3x3(vv, zv) {
        return this._pipelineContext.setMatrix3x3(vv, zv), this
      }
      setMatrix2x2(vv, zv) {
        return this._pipelineContext.setMatrix2x2(vv, zv), this
      }
      setFloat(vv, zv) {
        return this._pipelineContext.setFloat(vv, zv), this
      }
      setBool(vv, zv) {
        return this._pipelineContext.setInt(vv, zv ? 1 : 0), this
      }
      setVector2(vv, zv) {
        return this._pipelineContext.setVector2(vv, zv), this
      }
      setFloat2(vv, zv, Pv) {
        return this._pipelineContext.setFloat2(vv, zv, Pv), this
      }
      setVector3(vv, zv) {
        return this._pipelineContext.setVector3(vv, zv), this
      }
      setFloat3(vv, zv, Pv, hv) {
        return this._pipelineContext.setFloat3(vv, zv, Pv, hv), this
      }
      setVector4(vv, zv) {
        return this._pipelineContext.setVector4(vv, zv), this
      }
      setQuaternion(vv, zv) {
        return this._pipelineContext.setQuaternion(vv, zv), this
      }
      setFloat4(vv, zv, Pv, hv, Sv) {
        return this._pipelineContext.setFloat4(vv, zv, Pv, hv, Sv), this
      }
      setColor3(vv, zv) {
        return this._pipelineContext.setColor3(vv, zv), this
      }
      setColor4(vv, zv, Pv) {
        return this._pipelineContext.setColor4(vv, zv, Pv), this
      }
      setDirectColor4(vv, zv) {
        return this._pipelineContext.setDirectColor4(vv, zv), this
      }
      clearCodeCache() {
        this._vertexSourceCode = "", this._fragmentSourceCode = "", this._fragmentSourceCodeBeforeMigration = "", this._vertexSourceCodeBeforeMigration = ""
      }
      dispose() {
        if (arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) this._refCount = 0;
        else {
          if (dv.PersistentMode) return;
          this._refCount--
        }
        this._refCount > 0 || this._isDisposed || (this._onReleaseEffectsObserver && (this._engine.onReleaseEffectsObservable.remove(this._onReleaseEffectsObserver), this._onReleaseEffectsObserver = null), this._pipelineContext && (0, gv.i)(this._pipelineContext), this._engine._releaseEffect(this), this.clearCodeCache(), this._isDisposed = !0)
      }
      static RegisterShader(vv, zv, Pv) {
        let hv = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        zv && (ev.d.GetShadersStore(hv)[`${vv}PixelShader`] = zv), Pv && (ev.d.GetShadersStore(hv)[`${vv}VertexShader`] = Pv)
      }
      static ResetCache() {
        dv._BaseCache = {}
      }
    }
    dv.LogShaderCodeOnCompilationError = !0, dv.PersistentMode = !1, dv.AutomaticallyClearCodeCache = !1, dv._UniqueIdSeed = 0, dv._BaseCache = {}, dv.ShadersStore = ev.d.ShadersStore, dv.IncludesShadersStore = ev.d.IncludesShadersStore
  },
  39455: (vv, zv, Pv) => {
    Pv.d(zv, {
      d: () => lv,
      e: () => Fv,
      h: () => fv
    });
    var hv = Pv(39157),
      Sv = Pv(36594),
      ev = Pv(36627),
      gv = Pv(39435);
    const pv = new Sv.c,
      dv = new Sv.c,
      Nv = new Sv.c,
      lv = {
        rD: () => {},
        eyeAtCamera: !0
      };

    function Tv(vv, zv, Pv) {
      const hv = Pv.pPv(),
        Sv = zv.pPv();
      for (let ev = 0; ev < 16; ev++) hv[ev] = Sv[ev];
      return hv[12] -= vv.x, hv[13] -= vv.y, hv[14] -= vv.z, Pv.markAsUpdated(), Pv
    }

    function Wv(vv, zv, Pv) {
      return (0, ev.j)(zv, dv), Tv(vv, dv, Nv), (0, ev.j)(Nv, Pv), Pv
    }

    function wv(vv, zv, Pv) {
      if (!lv.eyeAtCamera) return Wv(vv, zv, Pv);
      const hv = Pv.pPv(),
        Sv = zv.pPv();
      for (let ev = 0; ev < 16; ev++) hv[ev] = Sv[ev];
      return hv[12] = 0, hv[13] = 0, hv[14] = 0, Pv.markAsUpdated(), Pv
    }

    function av(vv, zv, Pv, hv) {
      return (0, ev.p)(wv(vv, zv, hv), Pv, hv), hv
    }

    function sv(vv, zv, Pv, hv) {
      return (0, ev.j)(Pv, dv), (0, ev.p)(zv, dv, Nv), Tv(vv, Nv, dv), wv(vv, Pv, Nv), (0, ev.p)(dv, Nv, hv), hv
    }

    function Cv(vv, zv, Pv, hv, Sv, gv) {
      return (0, ev.j)(Pv, dv), (0, ev.p)(zv, dv, Nv), Tv(vv, Nv, dv), av(vv, hv, Sv, Nv), (0, ev.p)(dv, Nv, gv), gv
    }

    function iv(vv, zv) {
      const Pv = lv.rD();
      if (!Pv || pv === zv) return zv;
      pv.updateFlag = zv.updateFlag;
      const hv = Pv.floatingOriginOffset;
      switch (vv) {
        case "world":
          return Tv(hv, zv, pv);
        case "view":
          return wv(hv, zv, pv);
        case "worldView":
          return sv(hv, zv, Pv.getViewMatrix(), pv);
        case "viewProjection":
          return av(hv, Pv.getViewMatrix(), Pv.getProjectionMatrix(), pv);
        case "worldViewProjection":
          return Cv(hv, zv, Pv.getTransformMatrix(), Pv.getViewMatrix(), Pv.getProjectionMatrix(), pv);
        default:
          if (vv.startsWith("u_")) {
            const Sv = vv.toLowerCase();
            if (Sv.startsWith("u_worldviewprojection")) return Cv(hv, zv, Pv.getTransformMatrix(), Pv.getViewMatrix(), Pv.getProjectionMatrix(), pv);
            if (Sv.startsWith("u_viewprojection")) return av(hv, Pv.getViewMatrix(), Pv.getProjectionMatrix(), pv);
            if (Sv.startsWith("u_worldview")) return sv(hv, zv, Pv.getViewMatrix(), pv);
            if (Sv.startsWith("u_world")) return Tv(hv, zv, pv);
            if (Sv.startsWith("u_view")) return wv(hv, zv, pv)
          }
          return zv
      }
    }
    const cv = gv.e,
      Gv = hv.b,
      mv = cv.prototype._updateMatrixForUniform,
      jv = hv.b.prototype.setMatrix;

    function fv() {
      hv.b.prototype.setMatrix = jv, Gv._setMatrixOverride = void 0, cv.prototype._updateMatrixForUniform = mv, cv.prototype._updateMatrixForUniformOverride = void 0
    }

    function Fv() {
      Gv.prototype._setMatrixOverride = jv, Gv.prototype.setMatrix = function(vv, zv) {
        return this._setMatrixOverride(vv, iv(vv, zv)), this
      }, cv.prototype._updateMatrixForUniformOverride = mv, cv.prototype._updateMatrixForUniform = function(vv, zv) {
        this._updateMatrixForUniformOverride(vv, iv(vv, zv))
      }
    }
  },
  39430: (vv, zv, Pv) => {
    Pv.d(zv, {
      b: () => ev,
      c: () => Sv
    });
    var hv = Pv(39426);

    function Sv(vv, zv) {
      zv.WHITEBALANCE && vv.push("whiteBalanceMatrix"), zv.EXPOSURE && vv.push("exposureLinear"), zv.CONTRAST && vv.push("contrast"), zv.COLORGRADING && vv.push("colorTransformSettings"), (zv.VIGNETTE || zv.DITHER) && vv.push("vInverseScreenSize"), zv.VIGNETTE && (vv.push("vignetteSettings1"), vv.push("vignetteSettings2")), zv.COLORCURVES && (0, hv.e)(vv), zv.DITHER && vv.push("ditherIntensity")
    }

    function ev(vv, zv) {
      zv.COLORGRADING && vv.push("txColorTransform")
    }
  },
  39420: (vv, zv, Pv) => {
    Pv.d(zv, {
      b: () => Kv,
      f: () => Rv
    });
    var hv = Pv(39295),
      Sv = Pv(39300),
      ev = Pv(36618),
      gv = Pv(36751),
      pv = Pv(36620),
      dv = Pv(36594);
    const Nv = [
        [0, .18006, .26352, -.24341],
        [10, .18066, .26589, -.25479],
        [20, .18133, .26846, -.26876],
        [30, .18208, .27119, -.28539],
        [40, .18293, .27407, -.3047],
        [50, .18388, .27709, -.32675],
        [60, .18494, .28021, -.35156],
        [70, .18611, .28342, -.37915],
        [80, .1874, .28668, -.40955],
        [90, .1888, .28997, -.44278],
        [100, .19032, .29326, -.47888],
        [125, .19462, .30141, -.58204],
        [150, .19962, .30921, -.70471],
        [175, .20525, .31647, -.84901],
        [200, .21142, .32312, -1.0182],
        [225, .21807, .32909, -1.2168],
        [250, .22511, .33439, -1.4512],
        [275, .23247, .33904, -1.7298],
        [300, .2401, .34308, -2.0637],
        [325, .24792, .34655, -2.4681],
        [350, .25591, .34951, -2.9641],
        [375, .264, .352, -3.5814],
        [400, .27218, .35407, -4.3633],
        [425, .28039, .35577, -5.3762],
        [450, .28863, .35714, -6.7262],
        [475, .29685, .35823, -8.5955],
        [500, .30505, .35907, -11.324],
        [525, .3132, .35968, -15.628],
        [550, .32129, .36011, -23.325],
        [575, .32931, .36038, -40.77],
        [600, .33724, .36051, -116.45]
      ],
      lv = 1e6 / Nv[Nv.length - 1][0],
      Tv = 150;

    function Wv(vv, zv) {
      const Pv = Number.isNaN(vv) ? lv : Math.max(vv, lv),
        hv = (0, pv.Clamp)(1e6 / Pv, Nv[0][0], Nv[Nv.length - 1][0]);
      let Sv = 0,
        ev = Nv.length - 1;
      for (; ev - Sv > 1;) {
        const vv = Sv + ev >> 1;
        Nv[vv][0] <= hv ? Sv = vv : ev = vv
      }
      const gv = Sv,
        [Wv, wv, av, sv] = Nv[gv],
        [Cv, iv, cv, Gv] = Nv[gv + 1],
        mv = (hv - Wv) / (Cv - Wv),
        jv = dv.j.Lerp(new dv.j(wv, av), new dv.j(iv, cv), mv),
        fv = dv.j.Normalize(new dv.j(1, sv)),
        Fv = dv.j.Normalize(new dv.j(1, Gv)),
        Yv = dv.j.Normalize(dv.j.Lerp(fv, Fv, mv)),
        nv = (0, pv.Clamp)(zv, -150, Tv);
      jv.VPv(Yv.scale(nv / 3e3));
      const Ov = 2 * jv.x - 8 * jv.y + 4,
        Dv = 3 * jv.x / Ov,
        Kv = 2 * jv.y / Ov;
      return new dv.l(Dv / Kv, 1, (1 - Dv - Kv) / Kv)
    }
    const wv = dv.c.FromArray([.8951, -.7502, .0389, 0, .2664, 1.7135, -.0685, 0, -.1614, .0367, 1.0296, 0, 0, 0, 0, 1]),
      av = dv.c.Invert(wv);

    function sv(vv, zv) {
      const Pv = zv > 0 ? vv / zv : 10;
      return (0, pv.Clamp)(Pv, .1, 10)
    }

    function Cv(vv, zv) {
      const Pv = dv.l.TransformNormal(vv, wv),
        hv = dv.l.TransformNormal(zv, wv),
        Sv = dv.c.FromArray([sv(hv.x, Pv.x), 0, 0, 0, 0, sv(hv.y, Pv.y), 0, 0, 0, 0, sv(hv.z, Pv.z), 0, 0, 0, 0, 1]);
      return wv.multiply(Sv).multiply(av)
    }
    const iv = new dv.l(.95047, 1, 1.08883),
      cv = dv.c.FromArray([.4124564, .2126729, .0193339, 0, .3575761, .7151522, .119192, 0, .1804375, .072175, .9503041, 0, 0, 0, 0, 1]).multiply(Cv(iv, Wv(6500, 0))),
      Gv = dv.c.Invert(cv),
      mv = dv.l.TransformNormal(new dv.l(1, 1, 1), cv);
    var jv = Pv(39312),
      fv = Pv(39426);
    let Fv = (() => {
      var vv;
      let zv, Pv, ev, pv, dv, Nv, lv, Tv, Wv, wv, av, sv, Cv = [],
        iv = [],
        cv = [],
        Gv = [],
        mv = [],
        Fv = [],
        Yv = [],
        nv = [],
        Ov = [],
        Dv = [],
        Kv = [],
        Vv = [],
        Uv = [],
        Rv = [],
        xv = [],
        tv = [],
        qv = [],
        Iv = [],
        Qv = [],
        Zv = [],
        Av = [],
        Lv = [],
        Hv = [],
        Mv = [];
      return vv = class {
        constructor() {
          this._dirty = !0, this._tempColor = new gv.e(0, 0, 0, 0), this._globalCurve = new gv.e(0, 0, 0, 0), this._highlightsCurve = new gv.e(0, 0, 0, 0), this._midtonesCurve = new gv.e(0, 0, 0, 0), this._shadowsCurve = new gv.e(0, 0, 0, 0), this._positiveCurve = new gv.e(0, 0, 0, 0), this._negativeCurve = new gv.e(0, 0, 0, 0), this._globalHue = (0, hv.f)(this, Cv, 30), this._globalDensity = ((0, hv.f)(this, iv), (0, hv.f)(this, cv, 0)), this._globalSaturation = ((0, hv.f)(this, Gv), (0, hv.f)(this, mv, 0)), this._globalExposure = ((0, hv.f)(this, Fv), (0, hv.f)(this, Yv, 0)), this._highlightsHue = ((0, hv.f)(this, nv), (0, hv.f)(this, Ov, 30)), this._highlightsDensity = ((0, hv.f)(this, Dv), (0, hv.f)(this, Kv, 0)), this._highlightsSaturation = ((0, hv.f)(this, Vv), (0, hv.f)(this, Uv, 0)), this._highlightsExposure = ((0, hv.f)(this, Rv), (0, hv.f)(this, xv, 0)), this._midtonesHue = ((0, hv.f)(this, tv), (0, hv.f)(this, qv, 30)), this._midtonesDensity = ((0, hv.f)(this, Iv), (0, hv.f)(this, Qv, 0)), this._midtonesSaturation = ((0, hv.f)(this, Zv), (0, hv.f)(this, Av, 0)), this._midtonesExposure = ((0, hv.f)(this, Lv), (0, hv.f)(this, Hv, 0)), this._shadowsHue = ((0, hv.f)(this, Mv), 30), this._shadowsDensity = 0, this._shadowsSaturation = 0, this._shadowsExposure = 0
        }
        get globalHue() {
          return this._globalHue
        }
        set globalHue(vv) {
          this._globalHue = vv, this._dirty = !0
        }
        get globalDensity() {
          return this._globalDensity
        }
        set globalDensity(vv) {
          this._globalDensity = vv, this._dirty = !0
        }
        get globalSaturation() {
          return this._globalSaturation
        }
        set globalSaturation(vv) {
          this._globalSaturation = vv, this._dirty = !0
        }
        get globalExposure() {
          return this._globalExposure
        }
        set globalExposure(vv) {
          this._globalExposure = vv, this._dirty = !0
        }
        get highlightsHue() {
          return this._highlightsHue
        }
        set highlightsHue(vv) {
          this._highlightsHue = vv, this._dirty = !0
        }
        get highlightsDensity() {
          return this._highlightsDensity
        }
        set highlightsDensity(vv) {
          this._highlightsDensity = vv, this._dirty = !0
        }
        get highlightsSaturation() {
          return this._highlightsSaturation
        }
        set highlightsSaturation(vv) {
          this._highlightsSaturation = vv, this._dirty = !0
        }
        get highlightsExposure() {
          return this._highlightsExposure
        }
        set highlightsExposure(vv) {
          this._highlightsExposure = vv, this._dirty = !0
        }
        get midtonesHue() {
          return this._midtonesHue
        }
        set midtonesHue(vv) {
          this._midtonesHue = vv, this._dirty = !0
        }
        get midtonesDensity() {
          return this._midtonesDensity
        }
        set midtonesDensity(vv) {
          this._midtonesDensity = vv, this._dirty = !0
        }
        get midtonesSaturation() {
          return this._midtonesSaturation
        }
        set midtonesSaturation(vv) {
          this._midtonesSaturation = vv, this._dirty = !0
        }
        get midtonesExposure() {
          return this._midtonesExposure
        }
        set midtonesExposure(vv) {
          this._midtonesExposure = vv, this._dirty = !0
        }
        get shadowsHue() {
          return this._shadowsHue
        }
        set shadowsHue(vv) {
          this._shadowsHue = vv, this._dirty = !0
        }
        get shadowsDensity() {
          return this._shadowsDensity
        }
        set shadowsDensity(vv) {
          this._shadowsDensity = vv, this._dirty = !0
        }
        get shadowsSaturation() {
          return this._shadowsSaturation
        }
        set shadowsSaturation(vv) {
          this._shadowsSaturation = vv, this._dirty = !0
        }
        get shadowsExposure() {
          return this._shadowsExposure
        }
        set shadowsExposure(vv) {
          this._shadowsExposure = vv, this._dirty = !0
        }
        getClassName() {
          return "ColorCurves"
        }
        _getColorGradingDataToRef(zv, Pv, hv, Sv, ev) {
          null != zv && (zv = vv._Clamp(zv, 0, 360), Pv = vv._Clamp(Pv, -100, 100), hv = vv._Clamp(hv, -100, 100), Sv = vv._Clamp(Sv, -100, 100), Pv = vv._ApplyColorGradingSliderNonlinear(Pv), Pv *= .5, Sv = vv._ApplyColorGradingSliderNonlinear(Sv), Pv < 0 && (Pv *= -1, zv = (zv + 180) % 360), vv._FromHSBToRef(zv, Pv, 50 + .25 * Sv, ev), ev.scaleToRef(2, ev), ev.a = 1 + .01 * hv)
        }
        static _ApplyColorGradingSliderNonlinear(vv) {
          vv /= 100;
          let zv = Math.abs(vv);
          return zv = Math.pow(zv, 2), vv < 0 && (zv *= -1), zv *= 100, zv
        }
        static _FromHSBToRef(zv, Pv, hv, Sv) {
          let ev = vv._Clamp(zv, 0, 360);
          const gv = vv._Clamp(Pv / 100, 0, 1),
            pv = vv._Clamp(hv / 100, 0, 1);
          if (0 === gv) Sv.r = pv, Sv.g = pv, Sv.b = pv;
          else {
            ev /= 60;
            const vv = Math.floor(ev),
              zv = ev - vv,
              Pv = pv * (1 - gv),
              hv = pv * (1 - gv * zv),
              dv = pv * (1 - gv * (1 - zv));
            switch (vv) {
              case 0:
                Sv.r = pv, Sv.g = dv, Sv.b = Pv;
                break;
              case 1:
                Sv.r = hv, Sv.g = pv, Sv.b = Pv;
                break;
              case 2:
                Sv.r = Pv, Sv.g = pv, Sv.b = dv;
                break;
              case 3:
                Sv.r = Pv, Sv.g = hv, Sv.b = pv;
                break;
              case 4:
                Sv.r = dv, Sv.g = Pv, Sv.b = pv;
                break;
              default:
                Sv.r = pv, Sv.g = Pv, Sv.b = hv
            }
          }
          Sv.a = 1
        }
        static _Clamp(vv, zv, Pv) {
          return Math.min(Math.max(vv, zv), Pv)
        }
        clone() {
          return jv.c.Clone((() => new vv), this)
        }
        serialize() {
          return jv.c.Serialize(this)
        }
        _bind(vv) {
          let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "vCameraColorCurvePositive",
            Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "vCameraColorCurveNeutral",
            hv = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "vCameraColorCurveNegative";
          this._dirty && (this._dirty = !1, this._getColorGradingDataToRef(this._globalHue, this._globalDensity, this._globalSaturation, this._globalExposure, this._globalCurve), this._getColorGradingDataToRef(this._highlightsHue, this._highlightsDensity, this._highlightsSaturation, this._highlightsExposure, this._tempColor), this._tempColor.multiplyToRef(this._globalCurve, this._highlightsCurve), this._getColorGradingDataToRef(this._midtonesHue, this._midtonesDensity, this._midtonesSaturation, this._midtonesExposure, this._tempColor), this._tempColor.multiplyToRef(this._globalCurve, this._midtonesCurve), this._getColorGradingDataToRef(this._shadowsHue, this._shadowsDensity, this._shadowsSaturation, this._shadowsExposure, this._tempColor), this._tempColor.multiplyToRef(this._globalCurve, this._shadowsCurve), this._highlightsCurve.subtractToRef(this._midtonesCurve, this._positiveCurve), this._midtonesCurve.subtractToRef(this._shadowsCurve, this._negativeCurve)), vv && (vv.setFloat4(zv, this._positiveCurve.r, this._positiveCurve.g, this._positiveCurve.b, this._positiveCurve.a), vv.setFloat4(Pv, this._midtonesCurve.r, this._midtonesCurve.g, this._midtonesCurve.b, this._midtonesCurve.a), vv.setFloat4(hv, this._negativeCurve.r, this._negativeCurve.g, this._negativeCurve.b, this._negativeCurve.a))
        }
      }, (() => {
        const gv = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        zv = [(0, Sv.L)()], Pv = [(0, Sv.L)()], ev = [(0, Sv.L)()], pv = [(0, Sv.L)()], dv = [(0, Sv.L)()], Nv = [(0, Sv.L)()], lv = [(0, Sv.L)()], Tv = [(0, Sv.L)()], Wv = [(0, Sv.L)()], wv = [(0, Sv.L)()], av = [(0, Sv.L)()], sv = [(0, Sv.L)()], (0, hv.e)(null, null, zv, {
          kind: "field",
          name: "_globalHue",
          static: !1,
          private: !1,
          access: {
            has: vv => "_globalHue" in vv,
            get: vv => vv._globalHue,
            set: (vv, zv) => {
              vv._globalHue = zv
            }
          },
          metadata: gv
        }, Cv, iv), (0, hv.e)(null, null, Pv, {
          kind: "field",
          name: "_globalDensity",
          static: !1,
          private: !1,
          access: {
            has: vv => "_globalDensity" in vv,
            get: vv => vv._globalDensity,
            set: (vv, zv) => {
              vv._globalDensity = zv
            }
          },
          metadata: gv
        }, cv, Gv), (0, hv.e)(null, null, ev, {
          kind: "field",
          name: "_globalSaturation",
          static: !1,
          private: !1,
          access: {
            has: vv => "_globalSaturation" in vv,
            get: vv => vv._globalSaturation,
            set: (vv, zv) => {
              vv._globalSaturation = zv
            }
          },
          metadata: gv
        }, mv, Fv), (0, hv.e)(null, null, pv, {
          kind: "field",
          name: "_globalExposure",
          static: !1,
          private: !1,
          access: {
            has: vv => "_globalExposure" in vv,
            get: vv => vv._globalExposure,
            set: (vv, zv) => {
              vv._globalExposure = zv
            }
          },
          metadata: gv
        }, Yv, nv), (0, hv.e)(null, null, dv, {
          kind: "field",
          name: "_highlightsHue",
          static: !1,
          private: !1,
          access: {
            has: vv => "_highlightsHue" in vv,
            get: vv => vv._highlightsHue,
            set: (vv, zv) => {
              vv._highlightsHue = zv
            }
          },
          metadata: gv
        }, Ov, Dv), (0, hv.e)(null, null, Nv, {
          kind: "field",
          name: "_highlightsDensity",
          static: !1,
          private: !1,
          access: {
            has: vv => "_highlightsDensity" in vv,
            get: vv => vv._highlightsDensity,
            set: (vv, zv) => {
              vv._highlightsDensity = zv
            }
          },
          metadata: gv
        }, Kv, Vv), (0, hv.e)(null, null, lv, {
          kind: "field",
          name: "_highlightsSaturation",
          static: !1,
          private: !1,
          access: {
            has: vv => "_highlightsSaturation" in vv,
            get: vv => vv._highlightsSaturation,
            set: (vv, zv) => {
              vv._highlightsSaturation = zv
            }
          },
          metadata: gv
        }, Uv, Rv), (0, hv.e)(null, null, Tv, {
          kind: "field",
          name: "_highlightsExposure",
          static: !1,
          private: !1,
          access: {
            has: vv => "_highlightsExposure" in vv,
            get: vv => vv._highlightsExposure,
            set: (vv, zv) => {
              vv._highlightsExposure = zv
            }
          },
          metadata: gv
        }, xv, tv), (0, hv.e)(null, null, Wv, {
          kind: "field",
          name: "_midtonesHue",
          static: !1,
          private: !1,
          access: {
            has: vv => "_midtonesHue" in vv,
            get: vv => vv._midtonesHue,
            set: (vv, zv) => {
              vv._midtonesHue = zv
            }
          },
          metadata: gv
        }, qv, Iv), (0, hv.e)(null, null, wv, {
          kind: "field",
          name: "_midtonesDensity",
          static: !1,
          private: !1,
          access: {
            has: vv => "_midtonesDensity" in vv,
            get: vv => vv._midtonesDensity,
            set: (vv, zv) => {
              vv._midtonesDensity = zv
            }
          },
          metadata: gv
        }, Qv, Zv), (0, hv.e)(null, null, av, {
          kind: "field",
          name: "_midtonesSaturation",
          static: !1,
          private: !1,
          access: {
            has: vv => "_midtonesSaturation" in vv,
            get: vv => vv._midtonesSaturation,
            set: (vv, zv) => {
              vv._midtonesSaturation = zv
            }
          },
          metadata: gv
        }, Av, Lv), (0, hv.e)(null, null, sv, {
          kind: "field",
          name: "_midtonesExposure",
          static: !1,
          private: !1,
          access: {
            has: vv => "_midtonesExposure" in vv,
            get: vv => vv._midtonesExposure,
            set: (vv, zv) => {
              vv._midtonesExposure = zv
            }
          },
          metadata: gv
        }, Hv, Mv), gv && Object.defineProperty(vv, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: gv
        })
      })(), vv.PrepareUniforms = fv.e, vv
    })();

    function Yv(vv, zv) {
      let Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "vCameraColorCurvePositive",
        hv = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "vCameraColorCurveNeutral",
        Sv = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "vCameraColorCurveNegative";
      vv._bind(zv, Pv, hv, Sv)
    }
    var nv = Pv(39247),
      Ov = Pv(39430),
      Dv = Pv(36631);
    let Kv = (() => {
        var vv;
        let zv, Pv, Nv, wv, av, sv, iv, fv, Dv, Kv, Vv, Uv, Rv, xv, tv, qv, Iv, Qv, Zv, Av, Lv, Hv, Mv, yv, Bv, Jv, Ev, ov, bv = [],
          rv = [],
          kv = [],
          Xv = [],
          uv = [],
          vz = [],
          zz = [],
          Pz = [],
          hz = [],
          Sz = [],
          ez = [],
          gz = [],
          pz = [],
          dz = [],
          Nz = [],
          lz = [],
          Tz = [],
          Wz = [],
          wz = [],
          az = [],
          sz = [],
          Cz = [],
          iz = [],
          cz = [],
          Gz = [],
          mz = [],
          jz = [],
          fz = [],
          Fz = [],
          Yz = [],
          nz = [],
          Oz = [],
          Dz = [],
          Kz = [],
          Vz = [],
          Uz = [],
          Rz = [],
          xz = [],
          tz = [],
          qz = [],
          Iz = [],
          Qz = [],
          Zz = [],
          Az = [],
          Lz = [],
          Hz = [],
          Mz = [],
          yz = [],
          Bz = [],
          Jz = [],
          Ez = [],
          oz = [],
          bz = [],
          rz = [],
          kz = [],
          Xz = [];
        return vv = class {
          constructor() {
            this.colorCurves = (0, hv.f)(this, bv, new Fv), this._colorCurvesEnabled = ((0, hv.f)(this, rv), (0, hv.f)(this, kv, !1)), this._colorGradingTexture = ((0, hv.f)(this, Xv), (0, hv.f)(this, uv, void 0)), this._colorGradingEnabled = ((0, hv.f)(this, vz), (0, hv.f)(this, zz, !1)), this._colorGradingWithGreenDepth = ((0, hv.f)(this, Pz), (0, hv.f)(this, hz, !0)), this._colorGradingBGR = ((0, hv.f)(this, Sz), (0, hv.f)(this, ez, !0)), this._exposure = ((0, hv.f)(this, gz), (0, hv.f)(this, pz, 1)), this._toneMappingEnabled = ((0, hv.f)(this, dz), (0, hv.f)(this, Nz, !1)), this._toneMappingType = ((0, hv.f)(this, lz), (0, hv.f)(this, Tz, vv.TONEMAPPING_STANDARD)), this._contrast = ((0, hv.f)(this, Wz), (0, hv.f)(this, wz, 1)), this._whiteBalanceEnabled = ((0, hv.f)(this, az), (0, hv.f)(this, sz, !1)), this._temperature = ((0, hv.f)(this, Cz), (0, hv.f)(this, iz, 6500)), this._tint = ((0, hv.f)(this, cz), (0, hv.f)(this, Gz, 0)), this._whiteBalanceMatrix = ((0, hv.f)(this, mz), null), this._whiteBalanceMatrixTemperature = null, this._whiteBalanceMatrixTint = null, this.vignetteStretch = (0, hv.f)(this, jz, 0), this.vignetteCenterX = ((0, hv.f)(this, fz), (0, hv.f)(this, Fz, 0)), this.vignetteCenterY = ((0, hv.f)(this, Yz), (0, hv.f)(this, nz, 0)), this.vignetteWeight = ((0, hv.f)(this, Oz), (0, hv.f)(this, Dz, 1.5)), this.vignetteColor = ((0, hv.f)(this, Kz), (0, hv.f)(this, Vz, new gv.e(0, 0, 0, 0))), this.vignetteCameraFov = ((0, hv.f)(this, Uz), (0, hv.f)(this, Rz, .5)), this._vignetteBlendMode = ((0, hv.f)(this, xz), (0, hv.f)(this, tz, vv.VIGNETTEMODE_MULTIPLY)), this._vignetteEnabled = ((0, hv.f)(this, qz), (0, hv.f)(this, Iz, !1)), this._ditheringEnabled = ((0, hv.f)(this, Qz), (0, hv.f)(this, Zz, !1)), this._ditheringIntensity = ((0, hv.f)(this, Az), (0, hv.f)(this, Lz, 1 / 255)), this._skipFinalColorClamp = ((0, hv.f)(this, Hz), (0, hv.f)(this, Mz, !1)), this._applyByPostProcess = ((0, hv.f)(this, yz), (0, hv.f)(this, Bz, !1)), this._isEnabled = ((0, hv.f)(this, Jz), (0, hv.f)(this, Ez, !0)), this.outputTextureWidth = ((0, hv.f)(this, oz), (0, hv.f)(this, bz, 0)), this.outputTextureHeight = ((0, hv.f)(this, rz), (0, hv.f)(this, kz, 0)), this.onUpdateParameters = ((0, hv.f)(this, Xz), new ev.c)
          }
          get colorCurvesEnabled() {
            return this._colorCurvesEnabled
          }
          set colorCurvesEnabled(vv) {
            this._colorCurvesEnabled !== vv && (this._colorCurvesEnabled = vv, this._updateParameters())
          }
          get colorGradingTexture() {
            return this._colorGradingTexture
          }
          set colorGradingTexture(vv) {
            this._colorGradingTexture !== vv && (this._colorGradingTexture = vv, this._updateParameters())
          }
          get colorGradingEnabled() {
            return this._colorGradingEnabled
          }
          set colorGradingEnabled(vv) {
            this._colorGradingEnabled !== vv && (this._colorGradingEnabled = vv, this._updateParameters())
          }
          get colorGradingWithGreenDepth() {
            return this._colorGradingWithGreenDepth
          }
          set colorGradingWithGreenDepth(vv) {
            this._colorGradingWithGreenDepth !== vv && (this._colorGradingWithGreenDepth = vv, this._updateParameters())
          }
          get colorGradingBGR() {
            return this._colorGradingBGR
          }
          set colorGradingBGR(vv) {
            this._colorGradingBGR !== vv && (this._colorGradingBGR = vv, this._updateParameters())
          }
          get exposure() {
            return this._exposure
          }
          set exposure(vv) {
            this._exposure !== vv && (this._exposure = vv, this._updateParameters())
          }
          get toneMappingEnabled() {
            return this._toneMappingEnabled
          }
          set toneMappingEnabled(vv) {
            this._toneMappingEnabled !== vv && (this._toneMappingEnabled = vv, this._updateParameters())
          }
          get toneMappingType() {
            return this._toneMappingType
          }
          set toneMappingType(vv) {
            this._toneMappingType !== vv && (this._toneMappingType = vv, this._updateParameters())
          }
          get contrast() {
            return this._contrast
          }
          set contrast(vv) {
            this._contrast !== vv && (this._contrast = vv, this._updateParameters())
          }
          get whiteBalanceEnabled() {
            return this._whiteBalanceEnabled
          }
          set whiteBalanceEnabled(vv) {
            this._whiteBalanceEnabled !== vv && (this._whiteBalanceEnabled = vv, this._updateParameters())
          }
          get temperature() {
            return this._temperature
          }
          set temperature(vv) {
            vv = Number.isNaN(vv) ? lv : Math.max(vv, lv), this._temperature !== vv && (this._temperature = vv, this._updateParameters())
          }
          get tint() {
            return this._tint
          }
          set tint(vv) {
            vv = (0, pv.Clamp)(vv, -150, Tv), this._tint !== vv && (this._tint = vv, this._updateParameters())
          }
          _getWhiteBalanceMatrix() {
            return null !== this._whiteBalanceMatrix && this._whiteBalanceMatrixTemperature === this._temperature && this._whiteBalanceMatrixTint === this._tint || (this._whiteBalanceMatrixTemperature = this._temperature, this._whiteBalanceMatrixTint = this._tint, this._whiteBalanceMatrix = function(vv, zv) {
              const Pv = Cv(Wv(vv, zv), mv),
                hv = cv.multiply(Pv).multiply(Gv);
              return dv.c.GetAsMatrix3x3(hv)
            }(this._temperature, this._tint)), this._whiteBalanceMatrix
          }
          get vignetteCentreY() {
            return this.vignetteCenterY
          }
          set vignetteCentreY(vv) {
            this.vignetteCenterY = vv
          }
          get vignetteCentreX() {
            return this.vignetteCenterX
          }
          set vignetteCentreX(vv) {
            this.vignetteCenterX = vv
          }
          get vignetteBlendMode() {
            return this._vignetteBlendMode
          }
          set vignetteBlendMode(vv) {
            this._vignetteBlendMode !== vv && (this._vignetteBlendMode = vv, this._updateParameters())
          }
          get vignetteEnabled() {
            return this._vignetteEnabled
          }
          set vignetteEnabled(vv) {
            this._vignetteEnabled !== vv && (this._vignetteEnabled = vv, this._updateParameters())
          }
          get ditheringEnabled() {
            return this._ditheringEnabled
          }
          set ditheringEnabled(vv) {
            this._ditheringEnabled !== vv && (this._ditheringEnabled = vv, this._updateParameters())
          }
          get ditheringIntensity() {
            return this._ditheringIntensity
          }
          set ditheringIntensity(vv) {
            this._ditheringIntensity !== vv && (this._ditheringIntensity = vv, this._updateParameters())
          }
          get skipFinalColorClamp() {
            return this._skipFinalColorClamp
          }
          set skipFinalColorClamp(vv) {
            this._skipFinalColorClamp !== vv && (this._skipFinalColorClamp = vv, this._updateParameters())
          }
          get applyByPostProcess() {
            return this._applyByPostProcess
          }
          set applyByPostProcess(vv) {
            this._applyByPostProcess !== vv && (this._applyByPostProcess = vv, this._updateParameters())
          }
          get isEnabled() {
            return this._isEnabled
          }
          set isEnabled(vv) {
            this._isEnabled !== vv && (this._isEnabled = vv, this._updateParameters())
          }
          _updateParameters() {
            this.onUpdateParameters.notifyObservers(this)
          }
          getClassName() {
            return "ImageProcessingConfiguration"
          }
          prepareDefines(zv) {
            if ((arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) !== this.applyByPostProcess || !this._isEnabled) return zv.WHITEBALANCE = !1, zv.VIGNETTE = !1, zv.TONEMAPPING = 0, zv.CONTRAST = !1, zv.EXPOSURE = !1, zv.COLORCURVES = !1, zv.COLORGRADING = !1, zv.COLORGRADING3D = !1, zv.DITHER = !1, zv.IMAGEPROCESSING = !1, zv.SKIPFINALCOLORCLAMP = this.skipFinalColorClamp, void(zv.IMAGEPROCESSINGPOSTPROCESS = this.applyByPostProcess && this._isEnabled);
            if (zv.WHITEBALANCE = this._whiteBalanceEnabled, zv.VIGNETTE = this.vignetteEnabled, zv.VIGNETTEBLENDMODEMULTIPLY = this.vignetteBlendMode === vv._VIGNETTEMODE_MULTIPLY, zv.VIGNETTEBLENDMODEOPAQUE = !zv.VIGNETTEBLENDMODEMULTIPLY, this._toneMappingEnabled) switch (this._toneMappingType) {
              case vv.TONEMAPPING_KHR_PBR_NEUTRAL:
                zv.TONEMAPPING = 3;
                break;
              case vv.TONEMAPPING_ACES:
                zv.TONEMAPPING = 2;
                break;
              default:
                zv.TONEMAPPING = 1
            } else zv.TONEMAPPING = 0;
            zv.CONTRAST = 1 !== this.contrast, zv.EXPOSURE = 1 !== this.exposure, zv.COLORCURVES = this.colorCurvesEnabled && !!this.colorCurves, zv.COLORGRADING = this.colorGradingEnabled && !!this.colorGradingTexture, zv.COLORGRADING ? zv.COLORGRADING3D = this.colorGradingTexture.is3D : zv.COLORGRADING3D = !1, zv.SAMPLER3DGREENDEPTH = this.colorGradingWithGreenDepth, zv.SAMPLER3DBGRMAP = this.colorGradingBGR, zv.DITHER = this._ditheringEnabled, zv.IMAGEPROCESSINGPOSTPROCESS = this.applyByPostProcess, zv.SKIPFINALCOLORCLAMP = this.skipFinalColorClamp, zv.IMAGEPROCESSING = zv.WHITEBALANCE || zv.VIGNETTE || !!zv.TONEMAPPING || zv.CONTRAST || zv.EXPOSURE || zv.COLORCURVES || zv.COLORGRADING || zv.DITHER
          }
          isReady() {
            return !this.colorGradingEnabled || !this.colorGradingTexture || this.colorGradingTexture.isReady()
          }
          bind(vv, zv) {
            if (this._whiteBalanceEnabled && vv.setMatrix3x3("whiteBalanceMatrix", this._getWhiteBalanceMatrix()), this._colorCurvesEnabled && this.colorCurves && Yv(this.colorCurves, vv), this._vignetteEnabled || this._ditheringEnabled) {
              const Pv = 1 / (this.outputTextureWidth || vv.ma().getRenderWidth()),
                hv = 1 / (this.outputTextureHeight || vv.ma().getRenderHeight());
              if (vv.setFloat2("vInverseScreenSize", Pv, hv), this._ditheringEnabled && vv.setFloat("ditherIntensity", .5 * this._ditheringIntensity), this._vignetteEnabled) {
                const Sv = null != zv ? zv : hv / Pv;
                let ev = Math.tan(.5 * this.vignetteCameraFov),
                  gv = ev * Sv;
                const pv = Math.sqrt(gv * ev);
                gv = (0, nv.f)(gv, pv, this.vignetteStretch), ev = (0, nv.f)(ev, pv, this.vignetteStretch), vv.setFloat4("vignetteSettings1", gv, ev, -gv * this.vignetteCenterX, -ev * this.vignetteCenterY);
                const dv = -2 * this.vignetteWeight;
                vv.setFloat4("vignetteSettings2", this.vignetteColor.r, this.vignetteColor.g, this.vignetteColor.b, dv)
              }
            }
            if (vv.setFloat("exposureLinear", this.exposure), vv.setFloat("contrast", this.contrast), this.colorGradingTexture) {
              vv.setTexture("txColorTransform", this.colorGradingTexture);
              const zv = this.colorGradingTexture.getSize().height;
              vv.setFloat4("colorTransformSettings", (zv - 1) / zv, .5 / zv, zv, this.colorGradingTexture.level)
            }
          }
          clone() {
            return jv.c.Clone((() => new vv), this)
          }
          serialize() {
            return jv.c.Serialize(this)
          }
          static get VIGNETTEMODE_MULTIPLY() {
            return this._VIGNETTEMODE_MULTIPLY
          }
          static get VIGNETTEMODE_OPAQUE() {
            return this._VIGNETTEMODE_OPAQUE
          }
        }, (() => {
          const ev = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          zv = [(0, Sv.l)()], Pv = [(0, Sv.L)()], Nv = [(0, Sv.E)("colorGradingTexture")], wv = [(0, Sv.L)()], av = [(0, Sv.L)()], sv = [(0, Sv.L)()], iv = [(0, Sv.L)()], fv = [(0, Sv.L)()], Dv = [(0, Sv.L)()], Kv = [(0, Sv.L)()], Vv = [(0, Sv.L)()], Uv = [(0, Sv.L)()], Rv = [(0, Sv.L)()], xv = [(0, Sv.L)()], tv = [(0, Sv.L)()], qv = [(0, Sv.L)()], Iv = [(0, Sv.L)()], Qv = [(0, Sv.p)()], Zv = [(0, Sv.L)()], Av = [(0, Sv.L)()], Lv = [(0, Sv.L)()], Hv = [(0, Sv.L)()], Mv = [(0, Sv.L)()], yv = [(0, Sv.L)()], Bv = [(0, Sv.L)()], Jv = [(0, Sv.L)()], Ev = [(0, Sv.L)()], ov = [(0, Sv.L)()], (0, hv.e)(null, null, zv, {
            kind: "field",
            name: "colorCurves",
            static: !1,
            private: !1,
            access: {
              has: vv => "colorCurves" in vv,
              get: vv => vv.colorCurves,
              set: (vv, zv) => {
                vv.colorCurves = zv
              }
            },
            metadata: ev
          }, bv, rv), (0, hv.e)(null, null, Pv, {
            kind: "field",
            name: "_colorCurvesEnabled",
            static: !1,
            private: !1,
            access: {
              has: vv => "_colorCurvesEnabled" in vv,
              get: vv => vv._colorCurvesEnabled,
              set: (vv, zv) => {
                vv._colorCurvesEnabled = zv
              }
            },
            metadata: ev
          }, kv, Xv), (0, hv.e)(null, null, Nv, {
            kind: "field",
            name: "_colorGradingTexture",
            static: !1,
            private: !1,
            access: {
              has: vv => "_colorGradingTexture" in vv,
              get: vv => vv._colorGradingTexture,
              set: (vv, zv) => {
                vv._colorGradingTexture = zv
              }
            },
            metadata: ev
          }, uv, vz), (0, hv.e)(null, null, wv, {
            kind: "field",
            name: "_colorGradingEnabled",
            static: !1,
            private: !1,
            access: {
              has: vv => "_colorGradingEnabled" in vv,
              get: vv => vv._colorGradingEnabled,
              set: (vv, zv) => {
                vv._colorGradingEnabled = zv
              }
            },
            metadata: ev
          }, zz, Pz), (0, hv.e)(null, null, av, {
            kind: "field",
            name: "_colorGradingWithGreenDepth",
            static: !1,
            private: !1,
            access: {
              has: vv => "_colorGradingWithGreenDepth" in vv,
              get: vv => vv._colorGradingWithGreenDepth,
              set: (vv, zv) => {
                vv._colorGradingWithGreenDepth = zv
              }
            },
            metadata: ev
          }, hz, Sz), (0, hv.e)(null, null, sv, {
            kind: "field",
            name: "_colorGradingBGR",
            static: !1,
            private: !1,
            access: {
              has: vv => "_colorGradingBGR" in vv,
              get: vv => vv._colorGradingBGR,
              set: (vv, zv) => {
                vv._colorGradingBGR = zv
              }
            },
            metadata: ev
          }, ez, gz), (0, hv.e)(null, null, iv, {
            kind: "field",
            name: "_exposure",
            static: !1,
            private: !1,
            access: {
              has: vv => "_exposure" in vv,
              get: vv => vv._exposure,
              set: (vv, zv) => {
                vv._exposure = zv
              }
            },
            metadata: ev
          }, pz, dz), (0, hv.e)(null, null, fv, {
            kind: "field",
            name: "_toneMappingEnabled",
            static: !1,
            private: !1,
            access: {
              has: vv => "_toneMappingEnabled" in vv,
              get: vv => vv._toneMappingEnabled,
              set: (vv, zv) => {
                vv._toneMappingEnabled = zv
              }
            },
            metadata: ev
          }, Nz, lz), (0, hv.e)(null, null, Dv, {
            kind: "field",
            name: "_toneMappingType",
            static: !1,
            private: !1,
            access: {
              has: vv => "_toneMappingType" in vv,
              get: vv => vv._toneMappingType,
              set: (vv, zv) => {
                vv._toneMappingType = zv
              }
            },
            metadata: ev
          }, Tz, Wz), (0, hv.e)(null, null, Kv, {
            kind: "field",
            name: "_contrast",
            static: !1,
            private: !1,
            access: {
              has: vv => "_contrast" in vv,
              get: vv => vv._contrast,
              set: (vv, zv) => {
                vv._contrast = zv
              }
            },
            metadata: ev
          }, wz, az), (0, hv.e)(null, null, Vv, {
            kind: "field",
            name: "_whiteBalanceEnabled",
            static: !1,
            private: !1,
            access: {
              has: vv => "_whiteBalanceEnabled" in vv,
              get: vv => vv._whiteBalanceEnabled,
              set: (vv, zv) => {
                vv._whiteBalanceEnabled = zv
              }
            },
            metadata: ev
          }, sz, Cz), (0, hv.e)(null, null, Uv, {
            kind: "field",
            name: "_temperature",
            static: !1,
            private: !1,
            access: {
              has: vv => "_temperature" in vv,
              get: vv => vv._temperature,
              set: (vv, zv) => {
                vv._temperature = zv
              }
            },
            metadata: ev
          }, iz, cz), (0, hv.e)(null, null, Rv, {
            kind: "field",
            name: "_tint",
            static: !1,
            private: !1,
            access: {
              has: vv => "_tint" in vv,
              get: vv => vv._tint,
              set: (vv, zv) => {
                vv._tint = zv
              }
            },
            metadata: ev
          }, Gz, mz), (0, hv.e)(null, null, xv, {
            kind: "field",
            name: "vignetteStretch",
            static: !1,
            private: !1,
            access: {
              has: vv => "vignetteStretch" in vv,
              get: vv => vv.vignetteStretch,
              set: (vv, zv) => {
                vv.vignetteStretch = zv
              }
            },
            metadata: ev
          }, jz, fz), (0, hv.e)(null, null, tv, {
            kind: "field",
            name: "vignetteCenterX",
            static: !1,
            private: !1,
            access: {
              has: vv => "vignetteCenterX" in vv,
              get: vv => vv.vignetteCenterX,
              set: (vv, zv) => {
                vv.vignetteCenterX = zv
              }
            },
            metadata: ev
          }, Fz, Yz), (0, hv.e)(null, null, qv, {
            kind: "field",
            name: "vignetteCenterY",
            static: !1,
            private: !1,
            access: {
              has: vv => "vignetteCenterY" in vv,
              get: vv => vv.vignetteCenterY,
              set: (vv, zv) => {
                vv.vignetteCenterY = zv
              }
            },
            metadata: ev
          }, nz, Oz), (0, hv.e)(null, null, Iv, {
            kind: "field",
            name: "vignetteWeight",
            static: !1,
            private: !1,
            access: {
              has: vv => "vignetteWeight" in vv,
              get: vv => vv.vignetteWeight,
              set: (vv, zv) => {
                vv.vignetteWeight = zv
              }
            },
            metadata: ev
          }, Dz, Kz), (0, hv.e)(null, null, Qv, {
            kind: "field",
            name: "vignetteColor",
            static: !1,
            private: !1,
            access: {
              has: vv => "vignetteColor" in vv,
              get: vv => vv.vignetteColor,
              set: (vv, zv) => {
                vv.vignetteColor = zv
              }
            },
            metadata: ev
          }, Vz, Uz), (0, hv.e)(null, null, Zv, {
            kind: "field",
            name: "vignetteCameraFov",
            static: !1,
            private: !1,
            access: {
              has: vv => "vignetteCameraFov" in vv,
              get: vv => vv.vignetteCameraFov,
              set: (vv, zv) => {
                vv.vignetteCameraFov = zv
              }
            },
            metadata: ev
          }, Rz, xz), (0, hv.e)(null, null, Av, {
            kind: "field",
            name: "_vignetteBlendMode",
            static: !1,
            private: !1,
            access: {
              has: vv => "_vignetteBlendMode" in vv,
              get: vv => vv._vignetteBlendMode,
              set: (vv, zv) => {
                vv._vignetteBlendMode = zv
              }
            },
            metadata: ev
          }, tz, qz), (0, hv.e)(null, null, Lv, {
            kind: "field",
            name: "_vignetteEnabled",
            static: !1,
            private: !1,
            access: {
              has: vv => "_vignetteEnabled" in vv,
              get: vv => vv._vignetteEnabled,
              set: (vv, zv) => {
                vv._vignetteEnabled = zv
              }
            },
            metadata: ev
          }, Iz, Qz), (0, hv.e)(null, null, Hv, {
            kind: "field",
            name: "_ditheringEnabled",
            static: !1,
            private: !1,
            access: {
              has: vv => "_ditheringEnabled" in vv,
              get: vv => vv._ditheringEnabled,
              set: (vv, zv) => {
                vv._ditheringEnabled = zv
              }
            },
            metadata: ev
          }, Zz, Az), (0, hv.e)(null, null, Mv, {
            kind: "field",
            name: "_ditheringIntensity",
            static: !1,
            private: !1,
            access: {
              has: vv => "_ditheringIntensity" in vv,
              get: vv => vv._ditheringIntensity,
              set: (vv, zv) => {
                vv._ditheringIntensity = zv
              }
            },
            metadata: ev
          }, Lz, Hz), (0, hv.e)(null, null, yv, {
            kind: "field",
            name: "_skipFinalColorClamp",
            static: !1,
            private: !1,
            access: {
              has: vv => "_skipFinalColorClamp" in vv,
              get: vv => vv._skipFinalColorClamp,
              set: (vv, zv) => {
                vv._skipFinalColorClamp = zv
              }
            },
            metadata: ev
          }, Mz, yz), (0, hv.e)(null, null, Bv, {
            kind: "field",
            name: "_applyByPostProcess",
            static: !1,
            private: !1,
            access: {
              has: vv => "_applyByPostProcess" in vv,
              get: vv => vv._applyByPostProcess,
              set: (vv, zv) => {
                vv._applyByPostProcess = zv
              }
            },
            metadata: ev
          }, Bz, Jz), (0, hv.e)(null, null, Jv, {
            kind: "field",
            name: "_isEnabled",
            static: !1,
            private: !1,
            access: {
              has: vv => "_isEnabled" in vv,
              get: vv => vv._isEnabled,
              set: (vv, zv) => {
                vv._isEnabled = zv
              }
            },
            metadata: ev
          }, Ez, oz), (0, hv.e)(null, null, Ev, {
            kind: "field",
            name: "outputTextureWidth",
            static: !1,
            private: !1,
            access: {
              has: vv => "outputTextureWidth" in vv,
              get: vv => vv.outputTextureWidth,
              set: (vv, zv) => {
                vv.outputTextureWidth = zv
              }
            },
            metadata: ev
          }, bz, rz), (0, hv.e)(null, null, ov, {
            kind: "field",
            name: "outputTextureHeight",
            static: !1,
            private: !1,
            access: {
              has: vv => "outputTextureHeight" in vv,
              get: vv => vv.outputTextureHeight,
              set: (vv, zv) => {
                vv.outputTextureHeight = zv
              }
            },
            metadata: ev
          }, kz, Xz), ev && Object.defineProperty(vv, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: ev
          })
        })(), vv.TONEMAPPING_STANDARD = 0, vv.TONEMAPPING_ACES = 1, vv.TONEMAPPING_KHR_PBR_NEUTRAL = 2, vv.PrepareUniforms = Ov.c, vv.PrepareSamplers = Ov.b, vv._VIGNETTEMODE_MULTIPLY = 0, vv._VIGNETTEMODE_OPAQUE = 1, vv
      })(),
      Vv = !1;

    function Uv(vv) {
      const zv = jv.c.Parse((() => new Kv), vv, null, null);
      return void 0 !== vv.vignetteCentreX && (zv.vignetteCenterX = vv.vignetteCentreX), void 0 !== vv.vignetteCentreY && (zv.vignetteCenterY = vv.vignetteCentreY), zv
    }

    function Rv() {
      Vv || (Vv = !0, Kv.Parse = Uv, jv.c._ImageProcessingConfigurationParser = Uv, (0, Dv.c)("BABYLON.ImageProcessingConfiguration", Kv))
    }
  },
  39435: (vv, zv, Pv) => {
    Pv.d(zv, {
      e: () => ev
    });
    var hv = Pv(38209),
      Sv = Pv(39399);
    class ev {
      constructor(vv, zv) {
        let Pv = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          hv = arguments.length > 3 ? arguments[3] : void 0,
          Sv = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          ev = arguments.length > 5 ? arguments[5] : void 0;
        this._uniformNames = [], this._valueCache = {}, this._engine = vv, this._noUBO = !vv.supportsUniformBuffers || Sv, this._dynamic = Pv, this._name = hv ?? "no-name", this._data = zv || [], this._uniformLocations = {}, this._uniformSizes = {}, this._uniformArraySizes = {}, this._uniformLocationPointer = 0, this._needSync = !1, this._dataGeneration = 0, this._trackUBOsInFrame = !1, (void 0 === ev && this._engine._features.trackUbosInFrame || !0 === ev) && (this._buffers = [], this._bufferIndex = -1, this._bufferUpdatedLastFrame = !1, this._createBufferOnWrite = !1, this._currentFrameId = 0, this._trackUBOsInFrame = !0, this._resetOwnerSlots()), this._noUBO ? (this.updateMatrix3x3 = this._updateMatrix3x3ForEffect, this.updateMatrix2x2 = this._updateMatrix2x2ForEffect, this.updateFloat = this._updateFloatForEffect, this.updateFloat2 = this._updateFloat2ForEffect, this.updateFloat3 = this._updateFloat3ForEffect, this.updateFloat4 = this._updateFloat4ForEffect, this.updateFloatArray = this._updateFloatArrayForEffect, this.updateArray = this._updateArrayForEffect, this.updateIntArray = this._updateIntArrayForEffect, this.updateUIntArray = this._updateUIntArrayForEffect, this.Xu = this._updateMatrixForEffect, this.updateMatrices = this._updateMatricesForEffect, this.updateVector3 = this._updateVector3ForEffect, this.updateVector4 = this._updateVector4ForEffect, this.updateColor3 = this._updateColor3ForEffect, this.updateColor4 = this._updateColor4ForEffect, this.updateDirectColor4 = this._updateDirectColor4ForEffect, this.updateInt = this._updateIntForEffect, this.updateInt2 = this._updateInt2ForEffect, this.updateInt3 = this._updateInt3ForEffect, this.updateInt4 = this._updateInt4ForEffect, this.updateUInt = this._updateUIntForEffect, this.updateUInt2 = this._updateUInt2ForEffect, this.updateUInt3 = this._updateUInt3ForEffect, this.updateUInt4 = this._updateUInt4ForEffect) : (this._engine._uniformBuffers.push(this), this.updateMatrix3x3 = this._updateMatrix3x3ForUniform, this.updateMatrix2x2 = this._updateMatrix2x2ForUniform, this.updateFloat = this._updateFloatForUniform, this.updateFloat2 = this._updateFloat2ForUniform, this.updateFloat3 = this._updateFloat3ForUniform, this.updateFloat4 = this._updateFloat4ForUniform, this.updateFloatArray = this._updateFloatArrayForUniform, this.updateArray = this._updateArrayForUniform, this.updateIntArray = this._updateIntArrayForUniform, this.updateUIntArray = this._updateUIntArrayForUniform, this.Xu = this._updateMatrixForUniform, this.updateMatrices = this._updateMatricesForUniform, this.updateVector3 = this._updateVector3ForUniform, this.updateVector4 = this._updateVector4ForUniform, this.updateColor3 = this._updateColor3ForUniform, this.updateColor4 = this._updateColor4ForUniform, this.updateDirectColor4 = this._updateDirectColor4ForUniform, this.updateInt = this._updateIntForUniform, this.updateInt2 = this._updateInt2ForUniform, this.updateInt3 = this._updateInt3ForUniform, this.updateInt4 = this._updateInt4ForUniform, this.updateUInt = this._updateUIntForUniform, this.updateUInt2 = this._updateUInt2ForUniform, this.updateUInt3 = this._updateUInt3ForUniform, this.updateUInt4 = this._updateUInt4ForUniform)
      }
      get useUbo() {
        return !this._noUBO
      }
      get isSync() {
        return !this._needSync
      }
      isDynamic() {
        return this._dynamic
      }
      getData() {
        return this._bufferData
      }
      getBuffer() {
        return this._buffer
      }
      getUniformNames() {
        return this._uniformNames
      }
      _fillAlignment(vv) {
        let zv;
        if (zv = vv <= 2 ? vv : 4, this._uniformLocationPointer % zv !== 0) {
          const vv = this._uniformLocationPointer;
          this._uniformLocationPointer += zv - this._uniformLocationPointer % zv;
          const Pv = this._uniformLocationPointer - vv;
          for (let zv = 0; zv < Pv; zv++) this._data.push(0)
        }
      }
      addUniform(vv, zv) {
        let Pv, hv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (hv > 0 && "number" === typeof zv && (this._uniformArraySizes[vv] = {
            strideSize: zv,
            arraySize: hv
          }), void 0 === this._uniformLocations[vv] && (this._uniformNames.push(vv), !this._noUBO)) {
          if (hv > 0) {
            if (zv instanceof Array) throw "addUniform should not be use with Array in UBO: " + vv;
            if (this._fillAlignment(4), 16 == zv) zv *= hv;
            else {
              zv = zv * hv + (4 - zv) * hv
            }
            Pv = [];
            for (let vv = 0; vv < zv; vv++) Pv.push(0)
          } else {
            if (zv instanceof Array) Pv = zv, zv = Pv.length;
            else {
              Pv = [];
              for (let vv = 0; vv < zv; vv++) Pv.push(0)
            }
            this._fillAlignment(zv)
          }
          this._uniformSizes[vv] = zv, this._uniformLocations[vv] = this._uniformLocationPointer, this._uniformLocationPointer += zv;
          for (let vv = 0; vv < zv; vv++) this._data.push(Pv[vv]);
          this._needSync = !0
        }
      }
      addMatrix(vv, zv) {
        this.addUniform(vv, Array.prototype.slice.call(zv.pPv()))
      }
      addFloat2(vv, zv, Pv) {
        const hv = [zv, Pv];
        this.addUniform(vv, hv)
      }
      addFloat3(vv, zv, Pv, hv) {
        const Sv = [zv, Pv, hv];
        this.addUniform(vv, Sv)
      }
      addColor3(vv, zv) {
        const Pv = [zv.r, zv.g, zv.b];
        this.addUniform(vv, Pv)
      }
      addColor4(vv, zv, Pv) {
        const hv = [zv.r, zv.g, zv.b, Pv];
        this.addUniform(vv, hv)
      }
      addVector3(vv, zv) {
        const Pv = [zv.x, zv.y, zv.z];
        this.addUniform(vv, Pv)
      }
      addMatrix3x3(vv) {
        this.addUniform(vv, 12)
      }
      addMatrix2x2(vv) {
        this.addUniform(vv, 8)
      }
      create() {
        this._noUBO || this._buffer || (this._fillAlignment(4), this._bufferData = new Float32Array(this._data), this._dataGeneration++, this._rebuild(), this._needSync = !0)
      }
      _getNamesDebug() {
        const vv = [];
        let zv = 0;
        for (const Pv in this._uniformLocations)
          if (vv.push(Pv), 10 === ++zv) break;
        return vv.join(",")
      }
      _rebuild() {
        !this._noUBO && this._bufferData && (this._dynamic ? this._buffer = this._engine.createDynamicUniformBuffer(this._bufferData, this._name + "_UniformList:" + this._getNamesDebug()) : this._buffer = this._engine.createUniformBuffer(this._bufferData, this._name + "_UniformList:" + this._getNamesDebug()), this._trackUBOsInFrame && (this._buffers.push([this._buffer, this._engine._features.checkUbosContentBeforeUpload ? this._bufferData.slice() : void 0]), this._bufferIndex = this._buffers.length - 1, this._createBufferOnWrite = !1))
      }
      _rebuildAfterContextLost() {
        this._trackUBOsInFrame && (this._buffers = [], this._currentFrameId = 0, this._resetOwnerSlots()), this._rebuild()
      }
      _resetOwnerSlots() {
        if (this._ownerListsBySlot)
          for (const vv of this._ownerListsBySlot.values()) this._removeOwnerBacklink(vv);
        this._ownerListsBySlot = new Map, this._slotByOwner = new WeakMap, this._slotFrameId = [], this._ownerCount = 0, this._freeSlots = [], this._slotGeneration = []
      }
      get _numBuffers() {
        return this._buffers.length
      }
      get _indexBuffer() {
        return this._bufferIndex
      }
      get name() {
        return this._name
      }
      set name(vv) {
        this._name = vv
      }
      get currentEffect() {
        return this._currentEffect
      }
      _buffersEqual(vv, zv) {
        for (let Pv = 0; Pv < vv.length; ++Pv)
          if (vv[Pv] !== zv[Pv]) return !1;
        return !0
      }
      _copyBuffer(vv, zv) {
        for (let Pv = 0; Pv < vv.length; ++Pv) zv[Pv] = vv[Pv]
      }
      update() {
        if (!this._noUBO)
          if (this.bindUniformBuffer(), this._buffer)
            if (this._dynamic || this._needSync) {
              if (this._buffers && this._buffers.length > 1 && this._buffers[this._bufferIndex][1]) {
                if (this._buffersEqual(this._bufferData, this._buffers[this._bufferIndex][1])) return this._needSync = !1, void(this._createBufferOnWrite = this._trackUBOsInFrame);
                this._copyBuffer(this._bufferData, this._buffers[this._bufferIndex][1])
              }
              this._bufferUpdatedLastFrame = !0, this._engine.updateUniformBuffer(this._buffer, this._bufferData), this._needSync = !1, this._createBufferOnWrite = this._trackUBOsInFrame
            } else this._createBufferOnWrite = this._trackUBOsInFrame;
        else this.create()
      }
      _updateOwnerKeyed(vv) {
        if (this._noUBO || !this._trackUBOsInFrame) return void this.update();
        this._buffer || this.create(), this._checkNewFrame();
        let zv = this._slotByOwner.get(vv);
        if (void 0 === zv && (zv = 0 === this._ownerCount && 1 === this._buffers.length && 0 === this._freeSlots.length ? 0 : this._takeFreeSlot(!0), this._slotByOwner.set(vv, zv), this._ownerCount++, vv._uniformBuffersWithOwnedSlot || (vv._uniformBuffersWithOwnedSlot = []), vv._uniformBuffersWithOwnedSlot.push(this), this._ownerListsBySlot.set(zv, vv._uniformBuffersWithOwnedSlot)), this._slotGeneration[zv] === this._dataGeneration) return this._bufferIndex = zv, this._buffer = this._buffers[zv][0], this.bindUniformBuffer(), this._slotFrameId[zv] = this._currentFrameId, this._needSync = !1, void(this._createBufferOnWrite = !1);
        const Pv = this._buffers[zv][1];
        this._slotFrameId[zv] === this._currentFrameId && Pv && !this._buffersEqual(this._bufferData, Pv) && (zv = this._takeFreeSlot(!1)), this._bufferIndex = zv, this._buffer = this._buffers[zv][0], this.bindUniformBuffer();
        const hv = this._buffers[zv][1];
        hv && this._buffersEqual(this._bufferData, hv) || (hv && this._copyBuffer(this._bufferData, hv), this._bufferUpdatedLastFrame = !0, this._engine.updateUniformBuffer(this._buffer, this._bufferData)), this._slotFrameId[zv] = this._currentFrameId, this._slotGeneration[zv] = this._dataGeneration, this._needSync = !1, this._createBufferOnWrite = !1
      }
      _takeFreeSlot(vv) {
        for (let Pv = 0; Pv < this._freeSlots.length; ++Pv) {
          const zv = this._freeSlots[Pv];
          if (this._slotFrameId[zv] !== this._currentFrameId) return vv && (this._freeSlots[Pv] = this._freeSlots[this._freeSlots.length - 1], this._freeSlots.pop()), zv
        }
        this._rebuild();
        const zv = this._buffers.length - 1;
        return vv || this._freeSlots.push(zv), zv
      }
      _releaseOwnerSlot(vv) {
        const zv = this._slotByOwner?.get(vv);
        if (void 0 === zv) return;
        this._slotByOwner.delete(vv);
        const Pv = this._ownerListsBySlot.get(zv);
        Pv && (this._removeOwnerBacklink(Pv), this._ownerListsBySlot.delete(zv)), this._ownerCount--, this._freeSlots.push(zv)
      }
      _removeOwnerBacklink(vv) {
        const zv = vv.indexOf(this); - 1 !== zv && (vv[zv] = vv[vv.length - 1], vv.pop())
      }
      _createNewBuffer() {
        this._bufferIndex + 1 < this._buffers.length ? (this._bufferIndex++, this._buffer = this._buffers[this._bufferIndex][0], this._createBufferOnWrite = !1, this._needSync = !0) : this._rebuild()
      }
      _checkNewFrame() {
        this._trackUBOsInFrame && this._currentFrameId !== this._engine.frameId && (this._currentFrameId = this._engine.frameId, this._createBufferOnWrite = !1, this._buffers && this._buffers.length > 0 ? (1 === this._buffers.length ? this._needSync = !this._bufferUpdatedLastFrame : this._needSync = 0 !== this._bufferIndex, this._bufferIndex = 0, this._buffer = this._buffers[this._bufferIndex][0]) : this._bufferIndex = -1)
      }
      updateUniform(vv, zv, Pv) {
        this._checkNewFrame();
        let Sv = this._uniformLocations[vv];
        if (void 0 === Sv) {
          if (this._buffer) return void hv.d.Error("Cannot add an uniform after UBO has been created. uniformName=" + vv);
          this.addUniform(vv, Pv), Sv = this._uniformLocations[vv]
        }
        if (this._buffer || this.create(), this._dynamic) {
          for (let vv = 0; vv < Pv; vv++) this._bufferData[Sv + vv] = zv[vv];
          this._dataGeneration++
        } else {
          let vv = !1;
          for (let hv = 0; hv < Pv; hv++)(16 === Pv && !this._engine._features.uniformBufferHardCheckMatrix || this._bufferData[Sv + hv] !== Math.fround(zv[hv])) && (vv = !0, this._createBufferOnWrite && this._createNewBuffer(), this._bufferData[Sv + hv] = zv[hv]);
          this._needSync = this._needSync || vv, vv && this._dataGeneration++
        }
      }
      updateUniformArray(vv, zv, Pv) {
        this._checkNewFrame();
        const ev = this._uniformLocations[vv];
        if (void 0 === ev) return void hv.d.Error("Cannot add an uniform Array dynamically. Please, add it using addUniform and make sure that uniform buffers are supported by the current engine.");
        this._buffer || this.create();
        const gv = this._uniformArraySizes[vv];
        if (this._dynamic) {
          for (let vv = 0; vv < Pv; vv++) this._bufferData[ev + vv] = zv[vv];
          this._dataGeneration++
        } else {
          let vv = !1,
            hv = 0,
            pv = 0;
          for (let dv = 0; dv < Pv; dv++)
            if (this._bufferData[ev + 4 * pv + hv] !== Sv.h.FloatRound(zv[dv]) && (vv = !0, this._createBufferOnWrite && this._createNewBuffer(), this._bufferData[ev + 4 * pv + hv] = zv[dv]), hv++, hv === gv.strideSize) {
              for (; hv < 4; hv++) this._bufferData[ev + 4 * pv + hv] = 0;
              hv = 0, pv++
            } this._needSync = this._needSync || vv, vv && this._dataGeneration++
        }
      }
      _cacheMatrix(vv, zv) {
        this._checkNewFrame();
        const Pv = this._valueCache[vv],
          hv = zv.updateFlag;
        return (void 0 === Pv || Pv !== hv) && (this._valueCache[vv] = hv, !0)
      }
      _updateMatrix3x3ForUniform(vv, zv) {
        for (let Pv = 0; Pv < 3; Pv++) ev._TempBuffer[4 * Pv] = zv[3 * Pv], ev._TempBuffer[4 * Pv + 1] = zv[3 * Pv + 1], ev._TempBuffer[4 * Pv + 2] = zv[3 * Pv + 2], ev._TempBuffer[4 * Pv + 3] = 0;
        this.updateUniform(vv, ev._TempBuffer, 12)
      }
      _updateMatrix3x3ForEffect(vv, zv) {
        this._currentEffect.setMatrix3x3(vv, zv)
      }
      _updateMatrix2x2ForEffect(vv, zv) {
        this._currentEffect.setMatrix2x2(vv, zv)
      }
      _updateMatrix2x2ForUniform(vv, zv) {
        for (let Pv = 0; Pv < 2; Pv++) ev._TempBuffer[4 * Pv] = zv[2 * Pv], ev._TempBuffer[4 * Pv + 1] = zv[2 * Pv + 1], ev._TempBuffer[4 * Pv + 2] = 0, ev._TempBuffer[4 * Pv + 3] = 0;
        this.updateUniform(vv, ev._TempBuffer, 8)
      }
      _updateFloatForEffect(vv, zv) {
        let Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        this._currentEffect.setFloat(vv + Pv, zv)
      }
      _updateFloatForUniform(vv, zv) {
        ev._TempBuffer[0] = zv, this.updateUniform(vv, ev._TempBuffer, 1)
      }
      _updateFloat2ForEffect(vv, zv, Pv) {
        let hv = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
        this._currentEffect.setFloat2(vv + hv, zv, Pv)
      }
      _updateFloat2ForUniform(vv, zv, Pv) {
        ev._TempBuffer[0] = zv, ev._TempBuffer[1] = Pv, this.updateUniform(vv, ev._TempBuffer, 2)
      }
      _updateFloat3ForEffect(vv, zv, Pv, hv) {
        let Sv = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "";
        this._currentEffect.setFloat3(vv + Sv, zv, Pv, hv)
      }
      _updateFloat3ForUniform(vv, zv, Pv, hv) {
        ev._TempBuffer[0] = zv, ev._TempBuffer[1] = Pv, ev._TempBuffer[2] = hv, this.updateUniform(vv, ev._TempBuffer, 3)
      }
      _updateFloat4ForEffect(vv, zv, Pv, hv, Sv) {
        let ev = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "";
        this._currentEffect.setFloat4(vv + ev, zv, Pv, hv, Sv)
      }
      _updateFloat4ForUniform(vv, zv, Pv, hv, Sv) {
        ev._TempBuffer[0] = zv, ev._TempBuffer[1] = Pv, ev._TempBuffer[2] = hv, ev._TempBuffer[3] = Sv, this.updateUniform(vv, ev._TempBuffer, 4)
      }
      _updateFloatArrayForEffect(vv, zv) {
        let Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        switch (this._uniformArraySizes[vv]?.strideSize) {
          case 2:
            this._currentEffect.setFloatArray2(vv + Pv, zv);
            break;
          case 3:
            this._currentEffect.setFloatArray3(vv + Pv, zv);
            break;
          case 4:
            this._currentEffect.setFloatArray4(vv + Pv, zv);
            break;
          default:
            this._currentEffect.setFloatArray(vv + Pv, zv)
        }
      }
      _updateFloatArrayForUniform(vv, zv) {
        this.updateUniformArray(vv, zv, zv.length)
      }
      _updateArrayForEffect(vv, zv) {
        this._currentEffect.setArray(vv, zv)
      }
      _updateArrayForUniform(vv, zv) {
        this.updateUniformArray(vv, zv, zv.length)
      }
      _updateIntArrayForEffect(vv, zv) {
        this._currentEffect.setIntArray(vv, zv)
      }
      _updateIntArrayForUniform(vv, zv) {
        ev._TempBufferInt32View.set(zv), this.updateUniformArray(vv, ev._TempBuffer, zv.length)
      }
      _updateUIntArrayForEffect(vv, zv) {
        this._currentEffect.setUIntArray(vv, zv)
      }
      _updateUIntArrayForUniform(vv, zv) {
        ev._TempBufferUInt32View.set(zv), this.updateUniformArray(vv, ev._TempBuffer, zv.length)
      }
      _updateMatrixForEffect(vv, zv) {
        this._currentEffect.setMatrix(vv, zv)
      }
      _updateMatrixForUniform(vv, zv) {
        this._cacheMatrix(vv, zv) && this.updateUniform(vv, zv.pPv(), 16)
      }
      _updateMatricesForEffect(vv, zv) {
        this._currentEffect.setMatrices(vv, zv)
      }
      _updateMatricesForUniform(vv, zv) {
        this.updateUniform(vv, zv, zv.length)
      }
      _updateVector3ForEffect(vv, zv) {
        this._currentEffect.setVector3(vv, zv)
      }
      _updateVector3ForUniform(vv, zv) {
        ev._TempBuffer[0] = zv.x, ev._TempBuffer[1] = zv.y, ev._TempBuffer[2] = zv.z, this.updateUniform(vv, ev._TempBuffer, 3)
      }
      _updateVector4ForEffect(vv, zv) {
        this._currentEffect.setVector4(vv, zv)
      }
      _updateVector4ForUniform(vv, zv) {
        ev._TempBuffer[0] = zv.x, ev._TempBuffer[1] = zv.y, ev._TempBuffer[2] = zv.z, ev._TempBuffer[3] = zv.w, this.updateUniform(vv, ev._TempBuffer, 4)
      }
      _updateColor3ForEffect(vv, zv) {
        let Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        this._currentEffect.setColor3(vv + Pv, zv)
      }
      _updateColor3ForUniform(vv, zv) {
        ev._TempBuffer[0] = zv.r, ev._TempBuffer[1] = zv.g, ev._TempBuffer[2] = zv.b, this.updateUniform(vv, ev._TempBuffer, 3)
      }
      _updateColor4ForEffect(vv, zv, Pv) {
        let hv = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
        this._currentEffect.setColor4(vv + hv, zv, Pv)
      }
      _updateDirectColor4ForEffect(vv, zv) {
        let Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        this._currentEffect.setDirectColor4(vv + Pv, zv)
      }
      _updateColor4ForUniform(vv, zv, Pv) {
        ev._TempBuffer[0] = zv.r, ev._TempBuffer[1] = zv.g, ev._TempBuffer[2] = zv.b, ev._TempBuffer[3] = Pv, this.updateUniform(vv, ev._TempBuffer, 4)
      }
      _updateDirectColor4ForUniform(vv, zv) {
        ev._TempBuffer[0] = zv.r, ev._TempBuffer[1] = zv.g, ev._TempBuffer[2] = zv.b, ev._TempBuffer[3] = zv.a, this.updateUniform(vv, ev._TempBuffer, 4)
      }
      _updateIntForEffect(vv, zv) {
        let Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        this._currentEffect.setInt(vv + Pv, zv)
      }
      _updateIntForUniform(vv, zv) {
        ev._TempBufferInt32View[0] = zv, this.updateUniform(vv, ev._TempBuffer, 1)
      }
      _updateInt2ForEffect(vv, zv, Pv) {
        let hv = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
        this._currentEffect.setInt2(vv + hv, zv, Pv)
      }
      _updateInt2ForUniform(vv, zv, Pv) {
        ev._TempBufferInt32View[0] = zv, ev._TempBufferInt32View[1] = Pv, this.updateUniform(vv, ev._TempBuffer, 2)
      }
      _updateInt3ForEffect(vv, zv, Pv, hv) {
        let Sv = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "";
        this._currentEffect.setInt3(vv + Sv, zv, Pv, hv)
      }
      _updateInt3ForUniform(vv, zv, Pv, hv) {
        ev._TempBufferInt32View[0] = zv, ev._TempBufferInt32View[1] = Pv, ev._TempBufferInt32View[2] = hv, this.updateUniform(vv, ev._TempBuffer, 3)
      }
      _updateInt4ForEffect(vv, zv, Pv, hv, Sv) {
        let ev = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "";
        this._currentEffect.setInt4(vv + ev, zv, Pv, hv, Sv)
      }
      _updateInt4ForUniform(vv, zv, Pv, hv, Sv) {
        ev._TempBufferInt32View[0] = zv, ev._TempBufferInt32View[1] = Pv, ev._TempBufferInt32View[2] = hv, ev._TempBufferInt32View[3] = Sv, this.updateUniform(vv, ev._TempBuffer, 4)
      }
      _updateUIntForEffect(vv, zv) {
        let Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        this._currentEffect.setUInt(vv + Pv, zv)
      }
      _updateUIntForUniform(vv, zv) {
        ev._TempBufferUInt32View[0] = zv, this.updateUniform(vv, ev._TempBuffer, 1)
      }
      _updateUInt2ForEffect(vv, zv, Pv) {
        let hv = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
        this._currentEffect.setUInt2(vv + hv, zv, Pv)
      }
      _updateUInt2ForUniform(vv, zv, Pv) {
        ev._TempBufferUInt32View[0] = zv, ev._TempBufferUInt32View[1] = Pv, this.updateUniform(vv, ev._TempBuffer, 2)
      }
      _updateUInt3ForEffect(vv, zv, Pv, hv) {
        let Sv = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "";
        this._currentEffect.setUInt3(vv + Sv, zv, Pv, hv)
      }
      _updateUInt3ForUniform(vv, zv, Pv, hv) {
        ev._TempBufferUInt32View[0] = zv, ev._TempBufferUInt32View[1] = Pv, ev._TempBufferUInt32View[2] = hv, this.updateUniform(vv, ev._TempBuffer, 3)
      }
      _updateUInt4ForEffect(vv, zv, Pv, hv, Sv) {
        let ev = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "";
        this._currentEffect.setUInt4(vv + ev, zv, Pv, hv, Sv)
      }
      _updateUInt4ForUniform(vv, zv, Pv, hv, Sv) {
        ev._TempBufferUInt32View[0] = zv, ev._TempBufferUInt32View[1] = Pv, ev._TempBufferUInt32View[2] = hv, ev._TempBufferUInt32View[3] = Sv, this.updateUniform(vv, ev._TempBuffer, 4)
      }
      setTexture(vv, zv) {
        this._currentEffect.setTexture(vv, zv)
      }
      setTextureArray(vv, zv) {
        this._currentEffect.setTextureArray(vv, zv)
      }
      bindTexture(vv, zv) {
        this._currentEffect._bindTexture(vv, zv)
      }
      updateUniformDirectly(vv, zv) {
        this.updateUniform(vv, zv, zv.length), this.update()
      }
      bindToEffect(vv, zv) {
        this._currentEffect = vv, this._currentEffectName = zv
      }
      bindUniformBuffer() {
        !this._noUBO && this._buffer && this._currentEffect && this._currentEffect.bindUniformBuffer(this._buffer, this._currentEffectName)
      }
      unbindEffect() {
        this._currentEffect = void 0, this._currentEffectName = void 0
      }
      setDataBuffer(vv) {
        if (!this._buffers) return this._buffer === vv;
        for (let zv = 0; zv < this._buffers.length; ++zv) {
          if (this._buffers[zv][0] === vv) return this._bufferIndex = zv, this._buffer = vv, this._createBufferOnWrite = !1, this._currentEffect = void 0, this._buffers.length > 1 && this._buffers[zv][1] && (this._bufferData.set(this._buffers[zv][1]), this._dataGeneration++), this._valueCache = {}, this._currentFrameId = this._engine.frameId, !0
        }
        return !1
      }
      has(vv) {
        return void 0 !== this._uniformLocations[vv]
      }
      dispose() {
        if (this._noUBO) return;
        const vv = this._engine._uniformBuffers,
          zv = vv.indexOf(this);
        if (-1 !== zv && (vv[zv] = vv[vv.length - 1], vv.pop()), this._trackUBOsInFrame && this._buffers) {
          this._resetOwnerSlots();
          for (let vv = 0; vv < this._buffers.length; ++vv) {
            const zv = this._buffers[vv][0];
            this._engine._releaseBuffer(zv)
          }
          this._buffers = [], this._buffer = null, this._bufferIndex = -1
        } else this._buffer && this._engine._releaseBuffer(this._buffer) && (this._buffer = null)
      }
    }
    ev._MAX_UNIFORM_SIZE = 256, ev._TempBuffer = new Float32Array(ev._MAX_UNIFORM_SIZE), ev._TempBufferInt32View = new Int32Array(ev._TempBuffer.buffer), ev._TempBufferUInt32View = new Uint32Array(ev._TempBuffer.buffer)
  },
  39239: (vv, zv, Pv) => {
    Pv.d(zv, {
      b: () => Sv
    });
    var hv = Pv(39242);
    class Sv extends hv.b {
      constructor(vv) {
        super(), this._buffer = vv
      }
      get underlyingResource() {
        return this._buffer
      }
    }
  },
  39303: (vv, zv, Pv) => {
    Pv.d(zv, {
      d: () => dv,
      g: () => Nv
    });
    const hv = "__bjs_serializable__",
      Sv = new WeakMap;

    function ev(vv, zv) {
      return Object.prototype.hasOwnProperty.call(vv, zv)
    }
    const gv = function() {
      let vv = Symbol.metadata;
      return vv || (vv = Symbol("Symbol.metadata"), Object.defineProperty(Symbol, "metadata", {
        configurable: !0,
        writable: !0,
        value: vv
      })), vv
    }();

    function pv(vv) {
      return "function" === typeof vv ? vv : vv?.constructor
    }

    function dv(vv) {
      if (!vv) throw new Error(`Decorator metadata is unavailable; the Symbol.metadata (${String(gv)}) polyfill must run before decorated classes are evaluated.`);
      return ev(vv, hv) || (vv[hv] = {}), vv[hv]
    }

    function Nv(vv) {
      const zv = pv(vv),
        Pv = zv ? zv[gv] : void 0;
      if (!Pv) return {};
      const dv = Sv.get(Pv);
      if (dv) return dv;
      const Nv = {},
        lv = [];
      let Tv = Pv;
      for (; Tv;) lv.push(Tv), Tv = Object.getPrototypeOf(Tv);
      for (const Sv of lv)
        if (ev(Sv, hv)) {
          const vv = Sv[hv];
          for (const zv in vv) Nv[zv] = vv[zv]
        } return Sv.set(Pv, Nv), Nv
    }
  },
  39300: (vv, zv, Pv) => {
    Pv.d(zv, {
      B: () => sv,
      E: () => pv,
      H: () => lv,
      I: () => Tv,
      L: () => gv,
      c: () => Gv,
      e: () => ev,
      i: () => cv,
      l: () => wv,
      n: () => dv,
      p: () => av,
      t: () => Nv,
      w: () => Cv,
      y: () => Wv
    });
    var hv = Pv(39303);

    function Sv(vv, zv) {
      return (Pv, Sv) => {
        if (!Sv.metadata) return;
        const ev = String(Sv.name),
          gv = (0, hv.d)(Sv.metadata);
        gv[ev] || (gv[ev] = {
          type: vv,
          sourceName: zv
        })
      }
    }

    function ev(vv) {
      return function(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return (Pv, hv) => {
          const Sv = zv || "_" + String(hv.name);
          return {
            init(vv) {
              return void 0 === vv && Sv in this || (this[Sv] = vv), vv
            },
            get() {
              return this[Sv]
            },
            set(zv) {
              "function" === typeof this[Sv]?.equals && this[Sv].equals(zv) || this[Sv] !== zv && (this[Sv] = zv, this[vv]())
            }
          }
        }
      }(vv, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null)
    }

    function gv(vv) {
      return Sv(0, vv)
    }

    function pv(vv) {
      return Sv(1, vv)
    }

    function dv(vv) {
      return Sv(2, vv)
    }

    function Nv(vv) {
      return Sv(3, vv)
    }

    function lv(vv) {
      return Sv(4, vv)
    }

    function Tv(vv) {
      return Sv(5, vv)
    }

    function Wv(vv) {
      return Sv(6, vv)
    }

    function wv(vv) {
      return Sv(7, vv)
    }

    function av(vv) {
      return Sv(8, vv)
    }

    function sv(vv) {
      return Sv(10, vv)
    }

    function Cv(vv) {
      return Sv(12, vv)
    }

    function iv(vv, zv, Pv) {
      const hv = String(zv.name);
      let Sv = null;
      const ev = function() {
        if (null === Sv) {
          Sv = vv, "undefined" !== typeof _native && _native[hv] && (Sv = Pv(_native[hv], vv));
          const gv = this && (zv.static ? this : Object.getPrototypeOf(this));
          gv?.[hv] === ev && (gv[hv] = Sv)
        }
        for (var gv = arguments.length, pv = new Array(gv), dv = 0; dv < gv; dv++) pv[dv] = arguments[dv];
        return Sv.apply(this, pv)
      };
      return ev
    }

    function cv(vv, zv) {
      return iv(vv, zv, (vv => vv))
    }

    function Gv(vv) {
      let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      return (Pv, hv) => {
        const Sv = zv || "_" + String(hv.name);
        return {
          get() {
            return this[Sv]?.value
          },
          set(zv) {
            "function" === typeof this[Sv]?.value?.equals && this[Sv].value.equals(zv) || this[Sv].value !== zv && (this[Sv].value = zv, this[vv]())
          }
        }
      }
    }
    cv.filter = function(vv) {
      return (zv, Pv) => iv(zv, Pv, ((zv, Pv) => function() {
        for (var hv = arguments.length, Sv = new Array(hv), ev = 0; ev < hv; ev++) Sv[ev] = arguments[ev];
        return vv(...Sv) ? zv(...Sv) : Pv.apply(this, Sv)
      }))
    }
  },
  39312: (vv, zv, Pv) => {
    Pv.d(zv, {
      c: () => Nv
    });
    var hv = Pv(39190),
      Sv = Pv(39318),
      ev = Pv(36751),
      gv = Pv(36594),
      pv = Pv(39303);
    const dv = function(vv, zv, Pv) {
      let hv = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const ev = vv();
      Sv.c && Sv.c.HasTags(zv) && Sv.c.AddTagsTo(ev, Sv.c.GetTags(zv, !0));
      const gv = (0, pv.g)(ev),
        dv = {};
      for (const Sv in gv) {
        const vv = gv[Sv],
          pv = zv[Sv],
          lv = vv.type;
        if (void 0 !== pv && null !== pv && ("uniqueId" !== Sv || Nv.AllowLoadingUniqueId)) switch (lv) {
          case 0:
          case 6:
          case 9:
          case 11:
            "function" === typeof pv.slice ? ev[Sv] = pv.slice() : ev[Sv] = pv;
            break;
          case 1:
            hv.cloneTexturesOnlyOnce && dv[pv.uniqueId] ? ev[Sv] = dv[pv.uniqueId] : (ev[Sv] = Pv || pv.isRenderTarget ? pv : pv.clone(), dv[pv.uniqueId] = ev[Sv]);
            break;
          case 2:
          case 3:
          case 4:
          case 5:
          case 7:
          case 8:
          case 10:
          case 12:
          case 13:
            ev[Sv] = Pv ? pv : pv.clone()
        }
      }
      return ev
    };
    class Nv {
      static AppendSerializedAnimations(vv, zv) {
        if (vv.animations) {
          zv.animations = [];
          for (let Pv = 0; Pv < vv.animations.length; Pv++) {
            const hv = vv.animations[Pv];
            zv.animations.push(hv.serialize())
          }
        }
      }
      static Serialize(vv, zv) {
        zv || (zv = {}), Sv.c && (zv.tags = Sv.c.GetTags(vv));
        const Pv = (0, pv.g)(vv);
        for (const hv in Pv) {
          const Sv = Pv[hv],
            ev = Sv.sourceName || hv,
            gv = Sv.type,
            pv = vv[hv];
          if (void 0 !== pv && null !== pv && ("uniqueId" !== hv || Nv.AllowLoadingUniqueId)) switch (gv) {
            case 0:
              Array.isArray(pv) ? zv[ev] = pv.slice() : zv[ev] = pv;
              break;
            case 1:
            case 3:
            case 7:
            case 9:
              zv[ev] = pv.serialize();
              break;
            case 2:
            case 4:
            case 5:
            case 8:
            case 10:
            case 12:
            case 13:
              zv[ev] = pv.pPv();
              break;
            case 6:
            case 11:
              zv[ev] = pv.id
          }
        }
        return zv
      }
      static ParseProperties(vv, zv, Pv, hv) {
        hv || (hv = "");
        const Sv = (0, pv.g)(zv);
        for (const pv in Sv) {
          const dv = Sv[pv],
            lv = vv[dv.sourceName || pv],
            Tv = dv.type;
          if (void 0 !== lv && null !== lv && ("uniqueId" !== pv || Nv.AllowLoadingUniqueId)) {
            const vv = zv;
            switch (Tv) {
              case 0:
                vv[pv] = lv;
                break;
              case 1:
                Pv && (vv[pv] = Nv._TextureParser(lv, Pv, hv));
                break;
              case 2:
                vv[pv] = ev.b.FromArray(lv);
                break;
              case 3:
                vv[pv] = Nv._FresnelParametersParser(lv);
                break;
              case 4:
                vv[pv] = gv.j.FromArray(lv);
                break;
              case 5:
                vv[pv] = gv.l.FromArray(lv);
                break;
              case 6:
                Pv && (vv[pv] = Pv.getLastMeshById(lv));
                break;
              case 7:
                vv[pv] = Nv._ColorCurvesParser(lv);
                break;
              case 8:
                vv[pv] = ev.e.FromArray(lv);
                break;
              case 9:
                vv[pv] = Nv._ImageProcessingConfigurationParser(lv);
                break;
              case 10:
                vv[pv] = gv.d.FromArray(lv);
                break;
              case 11:
                Pv && (vv[pv] = Pv.getCameraById(lv));
                break;
              case 12:
                vv[pv] = gv.c.FromArray(lv);
                break;
              case 13:
                vv[pv] = gv.m.FromArray(lv)
            }
          }
        }
      }
      static Parse(vv, zv, Pv) {
        let hv = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const ev = vv();
        return Sv.c && Sv.c.AddTagsTo(ev, zv.tags), Nv.ParseProperties(zv, ev, Pv, hv), ev
      }
      static Clone(vv, zv) {
        return dv(vv, zv, !1, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {})
      }
      static Instanciate(vv, zv) {
        return dv(vv, zv, !0)
      }
    }
    Nv.AllowLoadingUniqueId = !1, Nv._ImageProcessingConfigurationParser = vv => {
      throw (0, hv.m)("ImageProcessingConfiguration")
    }, Nv._FresnelParametersParser = vv => {
      throw (0, hv.m)("FresnelParameters")
    }, Nv._ColorCurvesParser = vv => {
      throw (0, hv.m)("ColorCurves")
    }, Nv._TextureParser = (vv, zv, Pv) => {
      throw (0, hv.m)("Texture")
    }
  },
  39257: (vv, zv, Pv) => {
    Pv.d(zv, {
      c: () => Sv
    });
    var hv = Pv(39220);
    class Sv {
      get min() {
        return this._min
      }
      get max() {
        return this._max
      }
      get average() {
        return this._average
      }
      get lastSecAverage() {
        return this._lastSecAverage
      }
      get current() {
        return this._current
      }
      get total() {
        return this._totalAccumulated
      }
      get count() {
        return this._totalValueCount
      }
      constructor() {
        this._startMonitoringTime = 0, this._min = 0, this._max = 0, this._hasResult = !1, this._hasCurrentValue = !1, this._average = 0, this._lastSecAverage = 0, this._current = 0, this._totalValueCount = 0, this._totalAccumulated = 0, this._lastSecAccumulated = 0, this._lastSecTime = 0, this._lastSecValueCount = 0
      }
      fetchNewFrame() {
        this._totalValueCount++, this._current = 0, this._hasCurrentValue = Sv.Enabled, this._lastSecValueCount++
      }
      addCount(vv, zv) {
        Sv.Enabled && (this._current += vv, this._hasCurrentValue = !0, zv && this._fetchResult())
      }
      beginMonitoring() {
        Sv.Enabled && (this._startMonitoringTime = hv.c.Now)
      }
      endMonitoring() {
        let vv = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        if (!Sv.Enabled) return;
        vv && this.fetchNewFrame();
        const zv = hv.c.Now;
        this._current = zv - this._startMonitoringTime, this._hasCurrentValue = !0, vv && this._fetchResult()
      }
      Zm() {
        this._fetchResult()
      }
      _fetchResult() {
        if (!this._hasCurrentValue) return;
        this._totalAccumulated += this._current, this._lastSecAccumulated += this._current, this._hasResult ? (this._min = Math.min(this._min, this._current), this._max = Math.max(this._max, this._current)) : (this._min = this._current, this._max = this._current, this._hasResult = !0), this._average = this._totalAccumulated / this._totalValueCount;
        const vv = hv.c.Now;
        vv - this._lastSecTime > 1e3 && (this._lastSecAverage = this._lastSecAccumulated / this._lastSecValueCount, this._lastSecTime = vv, this._lastSecAccumulated = 0, this._lastSecValueCount = 0)
      }
    }
    Sv.Enabled = !0
  },
  39413: (vv, zv, Pv) => {
    Pv.d(zv, {
      e: () => Sv,
      g: () => hv
    });
    class hv {
      constructor(vv) {
        this.length = 0, this.data = new Array(vv), this._id = hv._GlobalId++
      }
      push(vv) {
        this.data[this.length++] = vv, this.length > this.data.length && (this.data.length *= 2)
      }
      forEach(vv) {
        for (let zv = 0; zv < this.length; zv++) vv(this.data[zv])
      }
      sort(vv) {
        this.data.sort(vv)
      }
      reset() {
        this.length = 0
      }
      dispose() {
        this.reset(), this.data && (this.data.length = 0)
      }
      concat(vv) {
        if (0 !== vv.length) {
          this.length + vv.length > this.data.length && (this.data.length = 2 * (this.length + vv.length));
          for (let zv = 0; zv < vv.length; zv++) this.data[this.length++] = (vv.data || vv)[zv]
        }
      }
      indexOf(vv) {
        const zv = this.data.indexOf(vv);
        return zv >= this.length ? -1 : zv
      }
      contains(vv) {
        return -1 !== this.indexOf(vv)
      }
    }
    hv._GlobalId = 0;
    class Sv extends hv {
      constructor() {
        super(...arguments), this._duplicateId = 0
      }
      push(vv) {
        super.push(vv), vv.__smartArrayFlags || (vv.__smartArrayFlags = {}), vv.__smartArrayFlags[this._id] = this._duplicateId
      }
      pushNoDuplicate(vv) {
        return (!vv.__smartArrayFlags || vv.__smartArrayFlags[this._id] !== this._duplicateId) && (this.push(vv), !0)
      }
      reset() {
        super.reset(), this._duplicateId++
      }
      concatWithNoDuplicate(vv) {
        if (0 !== vv.length) {
          this.length + vv.length > this.data.length && (this.data.length = 2 * (this.length + vv.length));
          for (let zv = 0; zv < vv.length; zv++) {
            const Pv = (vv.data || vv)[zv];
            this.pushNoDuplicate(Pv)
          }
        }
      }
    }
  },
  39318: (vv, zv, Pv) => {
    Pv.d(zv, {
      c: () => Sv
    });
    class hv {
      static Eval(vv, zv) {
        return "true" === (vv = vv.match(/\([^()]*\)/g) ? vv.replace(/\([^()]*\)/g, (vv => (vv = vv.slice(1, vv.length - 1), hv._HandleParenthesisContent(vv, zv)))) : hv._HandleParenthesisContent(vv, zv)) || "false" !== vv && hv.Eval(vv, zv)
      }
      static _HandleParenthesisContent(vv, zv) {
        let Pv;
        zv = zv || (vv => "true" === vv);
        const Sv = vv.split("||");
        for (const ev in Sv)
          if (Object.prototype.hasOwnProperty.call(Sv, ev)) {
            let vv = hv._SimplifyNegation(Sv[ev].trim());
            const gv = vv.split("&&");
            if (gv.length > 1)
              for (let Sv = 0; Sv < gv.length; ++Sv) {
                const ev = hv._SimplifyNegation(gv[Sv].trim());
                if (Pv = "true" !== ev && "false" !== ev ? "!" === ev[0] ? !zv(ev.substring(1)) : zv(ev) : "true" === ev, !Pv) {
                  vv = "false";
                  break
                }
              }
            if (Pv || "true" === vv) {
              Pv = !0;
              break
            }
            Pv = "true" !== vv && "false" !== vv ? "!" === vv[0] ? !zv(vv.substring(1)) : zv(vv) : "true" === vv
          } return Pv ? "true" : "false"
      }
      static _SimplifyNegation(vv) {
        return "!true" === (vv = (vv = vv.replace(/^[\s!]+/, (vv => (vv = vv.replace(/[\s]/g, (() => ""))).length % 2 ? "!" : ""))).trim()) ? vv = "false" : "!false" === vv && (vv = "true"), vv
      }
    }
    class Sv {
      static EnableFor(vv) {
        vv._tags = vv._tags || {}, vv.hasTags = () => Sv.HasTags(vv), vv.addTags = zv => Sv.AddTagsTo(vv, zv), vv.removeTags = zv => Sv.RemoveTagsFrom(vv, zv), vv.matchesTagsQuery = zv => Sv.MatchesQuery(vv, zv)
      }
      static DisableFor(vv) {
        delete vv._tags, delete vv.hasTags, delete vv.addTags, delete vv.removeTags, delete vv.matchesTagsQuery
      }
      static HasTags(vv) {
        if (!vv._tags) return !1;
        const zv = vv._tags;
        for (const Pv in zv)
          if (Object.prototype.hasOwnProperty.call(zv, Pv)) return !0;
        return !1
      }
      static GetTags(vv) {
        let zv = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (!vv._tags) return null;
        if (zv) {
          const zv = [];
          for (const Pv in vv._tags) Object.prototype.hasOwnProperty.call(vv._tags, Pv) && !0 === vv._tags[Pv] && zv.push(Pv);
          return zv.join(" ")
        }
        return vv._tags
      }
      static AddTagsTo(vv, zv) {
        if (!zv) return;
        if ("string" !== typeof zv) return;
        const Pv = zv.split(" ");
        for (const hv of Pv) Sv._AddTagTo(vv, hv)
      }
      static _AddTagTo(vv, zv) {
        "" !== (zv = zv.trim()) && "true" !== zv && "false" !== zv && (zv.match(/[\s]/) || zv.match(/^([!]|([|]|[&]){2})/) || (Sv.EnableFor(vv), vv._tags[zv] = !0))
      }
      static RemoveTagsFrom(vv, zv) {
        if (!Sv.HasTags(vv)) return;
        const Pv = zv.split(" ");
        for (const hv in Pv) Sv._RemoveTagFrom(vv, Pv[hv])
      }
      static _RemoveTagFrom(vv, zv) {
        delete vv._tags[zv]
      }
      static MatchesQuery(vv, zv) {
        return void 0 === zv || ("" === zv ? Sv.HasTags(vv) : hv.Eval(zv, (zv => Sv.HasTags(vv) && vv._tags[zv])))
      }
    }
  },
  39449: (vv, zv, Pv) => {
    Pv.d(zv, {
      d: () => ev
    });
    var hv = Pv(39441),
      Sv = Pv(36618);
    class ev {
      constructor(vv) {
        this._vertexBuffers = {}, this._activePostProcesses = [], this.onBeforeRenderObservable = new Sv.c, this._scene = vv
      }
      _prepareBuffers() {
        if (this._vertexBuffers[hv.k.PositionKind]) return;
        const vv = [];
        vv.push(1, 1), vv.push(-1, 1), vv.push(-1, -1), vv.push(1, -1), this._vertexBuffers[hv.k.PositionKind] = new hv.k(this._scene.ma(), vv, hv.k.PositionKind, !1, !1, 2), this._buildIndexBuffer()
      }
      _buildIndexBuffer() {
        const vv = [];
        vv.push(0), vv.push(1), vv.push(2), vv.push(0), vv.push(2), vv.push(3), this._indexBuffer = this._scene.ma().createIndexBuffer(vv)
      }
      _getActivePostProcesses(vv) {
        const zv = this._activePostProcesses;
        zv.length = 0;
        for (let Pv = 0; Pv < vv.length; Pv++) {
          const hv = vv[Pv];
          hv && zv.push(hv)
        }
        return zv
      }
      _rebuild() {
        const vv = this._vertexBuffers[hv.k.PositionKind];
        vv && (vv._rebuild(), this._buildIndexBuffer())
      }
      _prepareFrame() {
        let vv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const Pv = this._scene.activeCamera;
        return !!Pv && (zv = zv || this._getActivePostProcesses(Pv._postProcesses), !(!zv || 0 === zv.length || !this._scene.postProcessesEnabled) && (zv[0].activate(Pv, vv, null !== zv && void 0 !== zv), !0))
      }
      directRender(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          Pv = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          hv = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          Sv = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
          ev = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
          gv = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : vv.length;
        const pv = this._scene.ma();
        for (let dv = 0; dv < gv; dv++) {
          dv < vv.length - 1 ? vv[dv + 1].activate(this._scene.activeCamera || this._scene, zv?.texture) : (zv ? pv.bindFramebuffer(zv, hv, void 0, void 0, Pv, Sv) : ev || pv.restoreDefaultFramebuffer(), pv._debugInsertMarker?.(`post process ${vv[dv].name} output`));
          const gv = vv[dv],
            Nv = gv.apply();
          Nv && (gv.onBeforeRenderObservable.notifyObservers(Nv), this._prepareBuffers(), pv.bindBuffers(this._vertexBuffers, this._indexBuffer, Nv), pv.drawElementsType(0, 0, 6), gv.onAfterRenderObservable.notifyObservers(Nv))
        }
        pv.setDepthBuffer(!0), pv.setDepthWrite(!0)
      }
      _finalizeFrame(vv, zv, Pv, hv) {
        let Sv = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const ev = this._scene.activeCamera;
        if (!ev) return;
        if (this.onBeforeRenderObservable.notifyObservers(this), 0 === (hv = hv || this._getActivePostProcesses(ev._postProcesses)).length || !this._scene.postProcessesEnabled) return;
        const gv = this._scene.ma();
        for (let pv = 0, dv = hv.length; pv < dv; pv++) {
          const Nv = hv[pv];
          if (pv < dv - 1 ? Nv._outputTexture = hv[pv + 1].activate(ev, zv?.texture) : (zv ? (gv.bindFramebuffer(zv, Pv, void 0, void 0, Sv), Nv._outputTexture = zv) : (gv.restoreDefaultFramebuffer(), Nv._outputTexture = null), gv._debugInsertMarker?.(`post process ${hv[pv].name} output`)), vv) break;
          const lv = Nv.apply();
          lv && (Nv.onBeforeRenderObservable.notifyObservers(lv), this._prepareBuffers(), gv.bindBuffers(this._vertexBuffers, this._indexBuffer, lv), gv.drawElementsType(0, 0, 6), Nv.onAfterRenderObservable.notifyObservers(lv))
        }
        gv.setDepthBuffer(!0), gv.setDepthWrite(!0), gv.setAlphaMode(0)
      }
      dispose() {
        const vv = this._vertexBuffers[hv.k.PositionKind];
        vv && (vv.dispose(), this._vertexBuffers[hv.k.PositionKind] = null), this._indexBuffer && (this._scene.ma()._releaseBuffer(this._indexBuffer), this._indexBuffer = null)
      }
    }
  },
  39468: (vv, zv, Pv) => {
    Pv.d(zv, {
      e: () => ev
    });
    var hv = Pv(39413),
      Sv = Pv(36594);
    class ev {
      set opaqueSortCompareFn(vv) {
        this._opaqueSortCompareFn = vv || ev.PainterSortCompare, this._renderOpaque = this._renderOpaqueSorted
      }
      set alphaTestSortCompareFn(vv) {
        this._alphaTestSortCompareFn = vv || ev.PainterSortCompare, this._renderAlphaTest = this._renderAlphaTestSorted
      }
      set transparentSortCompareFn(vv) {
        this._transparentSortCompareFn = vv || ev.defaultTransparentSortCompare, this._renderTransparent = this._renderTransparentSorted
      }
      constructor(vv, zv) {
        let Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          Sv = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          ev = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
        this.index = vv, this._opaqueSubMeshes = new hv.g(256), this._transparentSubMeshes = new hv.g(256), this._alphaTestSubMeshes = new hv.g(256), this._depthOnlySubMeshes = new hv.g(256), this._particleSystems = new hv.g(256), this._spriteManagers = new hv.g(256), this._empty = !0, this._edgesRenderers = new hv.e(16), this.disableDepthPrePass = !1, this._scene = zv, this.opaqueSortCompareFn = Pv, this.alphaTestSortCompareFn = Sv, this.transparentSortCompareFn = ev
      }
      render(vv, zv, Pv, hv) {
        let Sv = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          ev = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          gv = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
          pv = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7],
          dv = arguments.length > 8 ? arguments[8] : void 0;
        if (vv) return void vv(this._opaqueSubMeshes, this._alphaTestSubMeshes, this._transparentSubMeshes, this._depthOnlySubMeshes);
        const Nv = this._scene.ma();
        Sv && 0 !== this._depthOnlySubMeshes.length && (Nv.setColorWrite(!1), this._renderAlphaTest(this._depthOnlySubMeshes), Nv.setColorWrite(!0)), ev && 0 !== this._opaqueSubMeshes.length && this._renderOpaque(this._opaqueSubMeshes), gv && 0 !== this._alphaTestSubMeshes.length && this._renderAlphaTest(this._alphaTestSubMeshes);
        const lv = Nv.getStencilBuffer();
        if (Nv.setStencilBuffer(!1), zv && this._renderSprites(), Pv && this._renderParticles(hv), this.onBeforeTransparentRendering && this.onBeforeTransparentRendering(), pv && (dv || 0 !== this._transparentSubMeshes.length || this._scene.useOrderIndependentTransparency)) {
          if (Nv.setStencilBuffer(lv), dv) dv(this._transparentSubMeshes, this);
          else if (this._scene.useOrderIndependentTransparency) {
            const vv = this._scene.depthPeelingRenderer.render(this._transparentSubMeshes);
            vv.length && this._renderTransparent(vv)
          } else this._renderTransparent(this._transparentSubMeshes);
          Nv.setAlphaMode(0)
        }
        if (Nv.setStencilBuffer(!1), ev && this._edgesRenderers.length) {
          for (let vv = 0; vv < this._edgesRenderers.length; vv++) this._edgesRenderers.data[vv].render();
          Nv.setAlphaMode(0)
        }
        Nv.setStencilBuffer(lv)
      }
      _renderOpaqueSorted(vv) {
        ev._RenderSorted(vv, this._opaqueSortCompareFn, this._scene.activeCamera, !1, this.disableDepthPrePass)
      }
      _renderAlphaTestSorted(vv) {
        ev._RenderSorted(vv, this._alphaTestSortCompareFn, this._scene.activeCamera, !1, this.disableDepthPrePass)
      }
      _renderTransparentSorted(vv) {
        ev._RenderSorted(vv, this._transparentSortCompareFn, this._scene.activeCamera, !0, this.disableDepthPrePass)
      }
      static _RenderSorted(vv, zv, Pv, hv, gv) {
        let pv, dv = 0;
        const Nv = Pv ? Pv.globalPosition : ev._ZeroVector;
        if (hv && zv !== ev.PainterSortCompare)
          for (; dv < vv.length; dv++) pv = vv.data[dv], pv._alphaIndex = pv.getMesh().alphaIndex, pv._distanceToCamera = Sv.l.Distance(pv.cV().tPv.centerWorld, Nv);
        const lv = vv.length === vv.data.length ? vv.data : vv.data.slice(0, vv.length);
        zv && lv.sort(zv);
        const Tv = lv[0].getMesh().rD();
        for (dv = 0; dv < lv.length; dv++) {
          if (pv = lv[dv], Tv._activeMeshesFrozenButKeepClipping && !pv.isInFrustum(Tv._frustumPlanes)) continue;
          let vv = !1;
          if (hv) {
            const zv = pv.na();
            if (zv && zv.needDepthPrePass && !gv) {
              vv = !0;
              const Pv = zv.rD().ma();
              Pv.setColorWrite(!1), Pv.setAlphaMode(0), pv.render(!1), Pv.setColorWrite(!0)
            }
          }
          const zv = pv._renderingMesh;
          !vv && zv._renderRunFollower(pv, hv) || pv.render(hv)
        }
      }
      static defaultTransparentSortCompare(vv, zv) {
        return vv._alphaIndex > zv._alphaIndex ? 1 : vv._alphaIndex < zv._alphaIndex ? -1 : ev.backToFrontSortCompare(vv, zv)
      }
      static backToFrontSortCompare(vv, zv) {
        return vv._distanceToCamera < zv._distanceToCamera ? 1 : vv._distanceToCamera > zv._distanceToCamera ? -1 : 0
      }
      static frontToBackSortCompare(vv, zv) {
        return vv._distanceToCamera < zv._distanceToCamera ? -1 : vv._distanceToCamera > zv._distanceToCamera ? 1 : 0
      }
      static PainterSortCompare(vv, zv) {
        const Pv = vv.getMesh(),
          hv = zv.getMesh();
        return Pv.material && hv.material ? Pv.material.uniqueId - hv.material.uniqueId : Pv.uniqueId - hv.uniqueId
      }
      prepare() {
        this._opaqueSubMeshes.reset(), this._transparentSubMeshes.reset(), this._alphaTestSubMeshes.reset(), this._depthOnlySubMeshes.reset(), this._particleSystems.reset(), this.prepareSprites(), this._edgesRenderers.reset(), this._empty = !0
      }
      prepareSprites() {
        this._spriteManagers.reset()
      }
      dispose() {
        this._opaqueSubMeshes.dispose(), this._transparentSubMeshes.dispose(), this._alphaTestSubMeshes.dispose(), this._depthOnlySubMeshes.dispose(), this._particleSystems.dispose(), this._spriteManagers.dispose(), this._edgesRenderers.dispose()
      }
      dispatch(vv, zv, Pv) {
        void 0 === zv && (zv = vv.getMesh()), void 0 === Pv && (Pv = vv.na()), null !== Pv && void 0 !== Pv && (Pv.needAlphaBlendingForMesh(zv) ? this._transparentSubMeshes.push(vv) : Pv.needAlphaTestingForMesh(zv) ? (Pv.needDepthPrePass && !this.disableDepthPrePass && this._depthOnlySubMeshes.push(vv), this._alphaTestSubMeshes.push(vv)) : (Pv.needDepthPrePass && !this.disableDepthPrePass && this._depthOnlySubMeshes.push(vv), this._opaqueSubMeshes.push(vv)), zv._renderingGroup = this, zv._edgesRenderer && zv.isEnabled() && zv.isVisible && zv._edgesRenderer.isEnabled && this._edgesRenderers.pushNoDuplicate(zv._edgesRenderer), this._empty = !1)
      }
      dispatchSprites(vv) {
        this._spriteManagers.push(vv), this._empty = !1
      }
      dispatchParticles(vv) {
        this._particleSystems.push(vv), this._empty = !1
      }
      _renderParticles(vv) {
        if (0 === this._particleSystems.length) return;
        const zv = this._scene.activeCamera;
        this._scene.onBeforeParticlesRenderingObservable.notifyObservers(this._scene);
        for (let Pv = 0; Pv < this._particleSystems.length; Pv++) {
          const hv = this._particleSystems.data[Pv];
          if (0 === (zv && zv.layerMask & hv.layerMask)) continue;
          const Sv = hv.emitter;
          Sv.position && vv && -1 === vv.indexOf(Sv) || this._scene._activeParticles.addCount(hv.render(), !1)
        }
        this._scene.onAfterParticlesRenderingObservable.notifyObservers(this._scene)
      }
      _renderSprites() {
        if (!this._scene.spritesEnabled || 0 === this._spriteManagers.length) return;
        const vv = this._scene.activeCamera;
        this._scene.onBeforeSpritesRenderingObservable.notifyObservers(this._scene);
        for (let zv = 0; zv < this._spriteManagers.length; zv++) {
          const Pv = this._spriteManagers.data[zv];
          0 !== (vv && vv.layerMask & Pv.layerMask) && Pv.render()
        }
        this._scene.onAfterSpritesRenderingObservable.notifyObservers(this._scene)
      }
    }
    ev._ZeroVector = Sv.l.Zero()
  },
  39459: (vv, zv, Pv) => {
    Pv.d(zv, {
      b: () => ev
    });
    var hv = Pv(39468);
    class Sv {}
    class ev {
      get disableDepthPrePass() {
        return this._disableDepthPrePass
      }
      set disableDepthPrePass(vv) {
        this._disableDepthPrePass = vv;
        for (const zv of this._renderingGroups) zv.disableDepthPrePass = vv
      }
      get maintainStateBetweenFrames() {
        return this._maintainStateBetweenFrames
      }
      set maintainStateBetweenFrames(vv) {
        vv !== this._maintainStateBetweenFrames && (this._maintainStateBetweenFrames = vv, this._maintainStateBetweenFrames || this.restoreDispachedFlags())
      }
      restoreDispachedFlags() {
        for (const vv of this._scene.meshes)
          if (vv.sF)
            for (const zv of vv.sF) zv._wasDispatched = !1;
        if (this._scene.spriteManagers)
          for (const vv of this._scene.spriteManagers) vv._wasDispatched = !1;
        for (const vv of this._scene.mF) vv._wasDispatched = !1
      }
      constructor(vv) {
        this._useSceneAutoClearSetup = !1, this._disableDepthPrePass = !1, this._renderingGroups = new Array, this._autoClearDepthStencil = {}, this._customOpaqueSortCompareFn = {}, this._customAlphaTestSortCompareFn = {}, this._customTransparentSortCompareFn = {}, this._renderingGroupInfo = new Sv, this._maintainStateBetweenFrames = !1, this._scene = vv;
        for (let zv = ev.MIN_RENDERINGGROUPS; zv < ev.MAX_RENDERINGGROUPS; zv++) this._autoClearDepthStencil[zv] = {
          autoClear: !0,
          depth: !0,
          stencil: !0
        }
      }
      get renderingGroups() {
        return this._renderingGroups
      }
      getRenderingGroup(vv) {
        const zv = vv || 0;
        return this._prepareRenderingGroup(zv), this._renderingGroups[zv]
      }
      _clearDepthStencilBuffer() {
        let vv = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          zv = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this._depthStencilBufferAlreadyCleaned || (this._scene.ma().clear(null, !1, vv, zv), this._depthStencilBufferAlreadyCleaned = !0)
      }
      render(vv, zv, Pv, hv) {
        let Sv = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          gv = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          pv = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
          dv = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7],
          Nv = arguments.length > 8 ? arguments[8] : void 0,
          lv = arguments.length > 9 ? arguments[9] : void 0;
        const Tv = this._renderingGroupInfo;
        Tv.Is = this._scene, Tv.camera = this._scene.activeCamera, Tv.renderingManager = this;
        const Wv = lv ?? this._scene.spriteManagers;
        if (Wv && hv)
          for (let ev = 0; ev < Wv.length; ev++) {
            const vv = Wv[ev];
            this.dispatchSprites(vv)
          }
        for (let wv = ev.MIN_RENDERINGGROUPS; wv < ev.MAX_RENDERINGGROUPS; wv++) {
          this._depthStencilBufferAlreadyCleaned = wv === ev.MIN_RENDERINGGROUPS;
          const lv = this._renderingGroups[wv];
          if (!lv || lv._empty) continue;
          const Wv = 1 << wv;
          if (Tv.renderingGroupId = wv, this._scene.onBeforeRenderingGroupObservable.notifyObservers(Tv, Wv), ev.AUTOCLEAR) {
            const vv = this._useSceneAutoClearSetup ? this._scene.getAutoClearDepthStencilSetup(wv) : this._autoClearDepthStencil[wv];
            vv && vv.autoClear && this._clearDepthStencilBuffer(vv.depth, vv.stencil)
          }
          for (let vv = 0, zv = this._scene._beforeRenderingGroupDrawStage; vv < zv.length; vv++) {
            zv[vv].action(wv)
          }
          lv.render(vv, hv, Pv, zv, Sv, gv, pv, dv, Nv);
          for (let vv = 0, zv = this._scene._afterRenderingGroupDrawStage; vv < zv.length; vv++) {
            zv[vv].action(wv)
          }
          this._scene.onAfterRenderingGroupObservable.notifyObservers(Tv, Wv)
        }
      }
      reset() {
        if (!this.maintainStateBetweenFrames)
          for (let vv = ev.MIN_RENDERINGGROUPS; vv < ev.MAX_RENDERINGGROUPS; vv++) {
            const zv = this._renderingGroups[vv];
            zv && zv.prepare()
          }
      }
      resetSprites() {
        if (!this.maintainStateBetweenFrames)
          for (let vv = ev.MIN_RENDERINGGROUPS; vv < ev.MAX_RENDERINGGROUPS; vv++) {
            const zv = this._renderingGroups[vv];
            zv && zv.prepareSprites()
          }
      }
      dispose() {
        this.freeRenderingGroups(), this._renderingGroups.length = 0, this._renderingGroupInfo = null
      }
      freeRenderingGroups() {
        for (let vv = ev.MIN_RENDERINGGROUPS; vv < ev.MAX_RENDERINGGROUPS; vv++) {
          const zv = this._renderingGroups[vv];
          zv && zv.dispose()
        }
      }
      _prepareRenderingGroup(vv) {
        void 0 === this._renderingGroups[vv] && (this._renderingGroups[vv] = new hv.e(vv, this._scene, this._customOpaqueSortCompareFn[vv], this._customAlphaTestSortCompareFn[vv], this._customTransparentSortCompareFn[vv]), this._renderingGroups[vv].disableDepthPrePass = this._disableDepthPrePass)
      }
      dispatchSprites(vv) {
        this.maintainStateBetweenFrames && vv._wasDispatched || (vv._wasDispatched = !0, this.getRenderingGroup(vv.renderingGroupId).dispatchSprites(vv))
      }
      dispatchParticles(vv) {
        this.maintainStateBetweenFrames && vv._wasDispatched || (vv._wasDispatched = !0, this.getRenderingGroup(vv.renderingGroupId).dispatchParticles(vv))
      }
      dispatch(vv, zv, Pv) {
        void 0 === zv && (zv = vv.getMesh()), this.maintainStateBetweenFrames && vv._wasDispatched || (vv._wasDispatched = !0, this.getRenderingGroup(zv.renderingGroupId).dispatch(vv, zv, Pv))
      }
      setRenderingOrder(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          hv = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        if (this._customOpaqueSortCompareFn[vv] = zv, this._customAlphaTestSortCompareFn[vv] = Pv, this._customTransparentSortCompareFn[vv] = hv, this._renderingGroups[vv]) {
          const zv = this._renderingGroups[vv];
          zv.opaqueSortCompareFn = this._customOpaqueSortCompareFn[vv], zv.alphaTestSortCompareFn = this._customAlphaTestSortCompareFn[vv], zv.transparentSortCompareFn = this._customTransparentSortCompareFn[vv]
        }
      }
      setRenderingAutoClearDepthStencil(vv, zv) {
        let Pv = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          hv = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        this._autoClearDepthStencil[vv] = {
          autoClear: zv,
          depth: Pv,
          stencil: hv
        }
      }
      getAutoClearDepthStencilSetup(vv) {
        return this._autoClearDepthStencil[vv]
      }
    }
    ev.MAX_RENDERINGGROUPS = 4, ev.MIN_RENDERINGGROUPS = 0, ev.AUTOCLEAR = !0
  },
  39222: (vv, zv, Pv) => {
    Pv.d(zv, {
      e: () => hv
    });
    class hv {
      constructor(vv) {
        this._supportBlendParametersPerTarget = vv, this._blendFunctionParameters = new Array(32), this._blendEquationParameters = new Array(16), this._blendConstants = new Array(4), this._isBlendConstantsDirty = !1, this._alphaBlend = Array(8).fill(!1), this._numTargetEnabled = 0, this._isAlphaBlendDirty = !1, this._isBlendFunctionParametersDirty = !1, this._isBlendEquationParametersDirty = !1, this._blendDisabledTargetsMask = 0, this._numTargets = 1, this.reset()
      }
      get isDirty() {
        return this._isAlphaBlendDirty || this._isBlendFunctionParametersDirty || this._isBlendEquationParametersDirty
      }
      get alphaBlend() {
        return this._numTargetEnabled > 0
      }
      set alphaBlend(vv) {
        this.setAlphaBlend(vv)
      }
      setAlphaBlend(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        this._alphaBlend[zv] !== vv && (vv ? this._numTargetEnabled++ : this._numTargetEnabled--, this._alphaBlend[zv] = vv, this._isAlphaBlendDirty = !0)
      }
      setAlphaBlendConstants(vv, zv, Pv, hv) {
        this._blendConstants[0] === vv && this._blendConstants[1] === zv && this._blendConstants[2] === Pv && this._blendConstants[3] === hv || (this._blendConstants[0] = vv, this._blendConstants[1] = zv, this._blendConstants[2] = Pv, this._blendConstants[3] = hv, this._isBlendConstantsDirty = !0)
      }
      setAlphaBlendFunctionParameters(vv, zv, Pv, hv) {
        const Sv = 4 * (arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0);
        this._blendFunctionParameters[Sv + 0] === vv && this._blendFunctionParameters[Sv + 1] === zv && this._blendFunctionParameters[Sv + 2] === Pv && this._blendFunctionParameters[Sv + 3] === hv || (this._blendFunctionParameters[Sv + 0] = vv, this._blendFunctionParameters[Sv + 1] = zv, this._blendFunctionParameters[Sv + 2] = Pv, this._blendFunctionParameters[Sv + 3] = hv, this._isBlendFunctionParametersDirty = !0)
      }
      setAlphaEquationParameters(vv, zv) {
        const Pv = 2 * (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0);
        this._blendEquationParameters[Pv + 0] === vv && this._blendEquationParameters[Pv + 1] === zv || (this._blendEquationParameters[Pv + 0] = vv, this._blendEquationParameters[Pv + 1] = zv, this._isBlendEquationParametersDirty = !0)
      }
      reset() {
        this._alphaBlend.fill(!1), this._numTargetEnabled = 0, this._blendFunctionParameters.fill(null), this._blendEquationParameters.fill(null), this._blendConstants[0] = null, this._blendConstants[1] = null, this._blendConstants[2] = null, this._blendConstants[3] = null, this._isAlphaBlendDirty = !0, this._isBlendFunctionParametersDirty = !1, this._isBlendEquationParametersDirty = !1, this._isBlendConstantsDirty = !1, this._blendDisabledTargetsMask = 0, this._numTargets = 1
      }
      apply(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (this._numTargets !== zv && (this._numTargets = zv, this._isAlphaBlendDirty = !0), this._blendDisabledTargetsMask !== Pv && (this._blendDisabledTargetsMask = Pv, this._isAlphaBlendDirty = !0), !this.isDirty) return;
        if (this._isBlendConstantsDirty && (vv.blendColor(this._blendConstants[0], this._blendConstants[1], this._blendConstants[2], this._blendConstants[3]), this._isBlendConstantsDirty = !1), 1 === zv || !this._supportBlendParametersPerTarget) {
          if (this._isAlphaBlendDirty) {
            if (zv > 1 && 0 !== Pv && this.alphaBlend) throw new Error("AlphaState: blending with integer MRT attachments requires per-target blend parameters");
            this._alphaBlend[0] && 0 === (1 & Pv) ? vv.enable(vv.BLEND) : vv.disable(vv.BLEND), this._isAlphaBlendDirty = !1
          }
          return this._isBlendFunctionParametersDirty && (vv.blendFuncSeparate(this._blendFunctionParameters[0], this._blendFunctionParameters[1], this._blendFunctionParameters[2], this._blendFunctionParameters[3]), this._isBlendFunctionParametersDirty = !1), void(this._isBlendEquationParametersDirty && (vv.blendEquationSeparate(this._blendEquationParameters[0], this._blendEquationParameters[1]), this._isBlendEquationParametersDirty = !1))
        }
        const hv = vv;
        if (this._isAlphaBlendDirty) {
          for (let Sv = 0; Sv < zv; Sv++) {
            const zv = Sv < this._numTargetEnabled ? Sv : 0;
            this._alphaBlend[zv] && 0 === (Pv & 1 << Sv) ? hv.enableIndexed(vv.BLEND, Sv) : hv.disableIndexed(vv.BLEND, Sv)
          }
          this._isAlphaBlendDirty = !1
        }
        if (this._isBlendFunctionParametersDirty) {
          for (let vv = 0; vv < zv; vv++) {
            const zv = vv < this._numTargetEnabled ? 4 * vv : 0;
            hv.blendFuncSeparateIndexed(vv, this._blendFunctionParameters[zv + 0], this._blendFunctionParameters[zv + 1], this._blendFunctionParameters[zv + 2], this._blendFunctionParameters[zv + 3])
          }
          this._isBlendFunctionParametersDirty = !1
        }
        if (this._isBlendEquationParametersDirty) {
          for (let vv = 0; vv < zv; vv++) {
            const zv = vv < this._numTargetEnabled ? 2 * vv : 0;
            hv.blendEquationSeparateIndexed(vv, this._blendEquationParameters[zv + 0], this._blendEquationParameters[zv + 1])
          }
          this._isBlendEquationParametersDirty = !1
        }
      }
      setAlphaMode(vv, zv) {
        let Pv = 32774;
        switch (vv) {
          case 0:
            break;
          case 7:
            this.setAlphaBlendFunctionParameters(1, 771, 1, 1, zv);
            break;
          case 8:
          case 14:
            this.setAlphaBlendFunctionParameters(1, 771, 1, 771, zv);
            break;
          case 2:
            this.setAlphaBlendFunctionParameters(770, 771, 1, 1, zv);
            break;
          case 6:
            this.setAlphaBlendFunctionParameters(1, 1, 0, 1, zv);
            break;
          case 1:
            this.setAlphaBlendFunctionParameters(770, 1, 0, 1, zv);
            break;
          case 3:
            this.setAlphaBlendFunctionParameters(0, 769, 1, 1, zv);
            break;
          case 4:
            this.setAlphaBlendFunctionParameters(774, 0, 1, 1, zv);
            break;
          case 5:
            this.setAlphaBlendFunctionParameters(770, 769, 1, 1, zv);
            break;
          case 9:
            this.setAlphaBlendFunctionParameters(32769, 32770, 32771, 32772, zv);
            break;
          case 10:
            this.setAlphaBlendFunctionParameters(1, 769, 1, 771, zv);
            break;
          case 11:
            this.setAlphaBlendFunctionParameters(1, 1, 1, 1, zv);
            break;
          case 12:
            this.setAlphaBlendFunctionParameters(772, 1, 0, 0, zv);
            break;
          case 13:
            this.setAlphaBlendFunctionParameters(775, 769, 773, 771, zv);
            break;
          case 15:
            this.setAlphaBlendFunctionParameters(1, 1, 1, 0, zv);
            break;
          case 16:
            this.setAlphaBlendFunctionParameters(775, 769, 0, 1, zv);
            break;
          case 17:
            this.setAlphaBlendFunctionParameters(770, 771, 1, 771, zv);
            break;
          case 18:
            this.setAlphaBlendFunctionParameters(1, 1, 1, 1, zv), Pv = 32775;
            break;
          case 19:
            this.setAlphaBlendFunctionParameters(1, 1, 1, 1, zv), Pv = 32776;
            break;
          case 20:
            this.setAlphaBlendFunctionParameters(1, 35065, 0, 1, zv);
            break;
          case 21:
            this.setAlphaBlendFunctionParameters(1, 0, 1, 771, zv)
        }
        this.setAlphaEquationParameters(Pv, Pv, zv)
      }
    }
  },
  39493: (vv, zv, Pv) => {
    Pv.d(zv, {
      d: () => hv
    });
    class hv {}
    hv._IsPickingAvailable = !1
  },
  39395: (vv, zv, Pv) => {
    Pv.d(zv, {
      d: () => pP,
      g: () => eP
    });
    var hv = Pv(39399),
      Sv = Pv(39204),
      ev = Pv(39220),
      gv = Pv(36618),
      pv = Pv(39413);
    class dv {
      constructor() {
        this._count = 0, this._data = {}
      }
      Vzv(vv) {
        this.clear(), vv.forEach(((vv, zv) => this.add(vv, zv)))
      }
      get(vv) {
        const zv = this._data[vv];
        if (void 0 !== zv) return zv
      }
      getOrAddWithFactory(vv, zv) {
        let Pv = this.get(vv);
        return void 0 !== Pv || (Pv = zv(vv), Pv && this.add(vv, Pv)), Pv
      }
      getOrAdd(vv, zv) {
        const Pv = this.get(vv);
        return void 0 !== Pv ? Pv : (this.add(vv, zv), zv)
      }
      contains(vv) {
        return void 0 !== this._data[vv]
      }
      add(vv, zv) {
        return void 0 === this._data[vv] && (this._data[vv] = zv, ++this._count, !0)
      }
      set(vv, zv) {
        return void 0 !== this._data[vv] && (this._data[vv] = zv, !0)
      }
      getAndRemove(vv) {
        const zv = this.get(vv);
        return void 0 !== zv ? (delete this._data[vv], --this._count, zv) : null
      }
      remove(vv) {
        return !!this.contains(vv) && (delete this._data[vv], --this._count, !0)
      }
      clear() {
        this._data = {}, this._count = 0
      }
      get count() {
        return this._count
      }
      forEach(vv) {
        for (const zv in this._data) {
          vv(zv, this._data[zv])
        }
      }
      first(vv) {
        for (const zv in this._data) {
          const Pv = vv(zv, this._data[zv]);
          if (Pv) return Pv
        }
        return null
      }
    }
    var Nv = Pv(39318),
      lv = Pv(36594),
      Tv = Pv(39420),
      Wv = Pv(39435),
      wv = Pv(39438);
    class av {
      constructor(vv, zv, Pv, hv, Sv, ev) {
        this.source = vv, this.pointerX = zv, this.pointerY = Pv, this.meshUnderPointer = hv, this.sourceEvent = Sv, this.additionalData = ev
      }
      static CreateNew(vv, zv, Pv) {
        const hv = vv.rD();
        return new av(vv, hv.pointerX, hv.pointerY, hv.meshUnderPointer || vv, zv, Pv)
      }
      static CreateNewFromSprite(vv, zv, Pv, hv) {
        return new av(vv, zv.pointerX, zv.pointerY, zv.meshUnderPointer, Pv, hv)
      }
      static CreateNewFromScene(vv, zv) {
        return new av(null, vv.pointerX, vv.pointerY, vv.meshUnderPointer, zv)
      }
      static CreateNewFromPrimitive(vv, zv, Pv, hv) {
        return new av(vv, zv.x, zv.y, null, Pv, hv)
      }
    }
    var sv = Pv(39449),
      Cv = Pv(39455),
      iv = Pv(39459),
      cv = Pv(39477),
      Gv = Pv(39167),
      mv = Pv(36615),
      jv = Pv(39190),
      fv = Pv(39479);
    class Fv {
      constructor() {
        this.hoverCursor = "", this.actions = [], this.isRecursive = !1, this.disposeWhenUnowned = !0
      }
      static get HasTriggers() {
        for (const vv in Fv.Triggers)
          if (Object.prototype.hasOwnProperty.call(Fv.Triggers, vv)) return !0;
        return !1
      }
      static get HasPickTriggers() {
        for (const vv in Fv.Triggers)
          if (Object.prototype.hasOwnProperty.call(Fv.Triggers, vv)) {
            const zv = parseInt(vv);
            if (zv >= 1 && zv <= 7) return !0
          } return !1
      }
      static HasSpecificTrigger(vv) {
        for (const zv in Fv.Triggers)
          if (Object.prototype.hasOwnProperty.call(Fv.Triggers, zv)) {
            if (parseInt(zv) === vv) return !0
          } return !1
      }
    }
    Fv.Triggers = {};
    var Yv, nv, Ov, Dv, Kv, Vv, Uv, Rv = Pv(39484);
    ! function(vv) {
      vv[vv.Generic = 0] = "Generic", vv[vv.Keyboard = 1] = "Keyboard", vv[vv.Mouse = 2] = "Mouse", vv[vv.Touch = 3] = "Touch", vv[vv.DualShock = 4] = "DualShock", vv[vv.Xbox = 5] = "Xbox", vv[vv.Switch = 6] = "Switch", vv[vv.DualSense = 7] = "DualSense"
    }(Yv || (Yv = {})),
    function(vv) {
      vv[vv.Horizontal = 0] = "Horizontal", vv[vv.Vertical = 1] = "Vertical", vv[vv.LeftClick = 2] = "LeftClick", vv[vv.MiddleClick = 3] = "MiddleClick", vv[vv.RightClick = 4] = "RightClick", vv[vv.BrowserBack = 5] = "BrowserBack", vv[vv.BrowserForward = 6] = "BrowserForward", vv[vv.MouseWheelX = 7] = "MouseWheelX", vv[vv.MouseWheelY = 8] = "MouseWheelY", vv[vv.MouseWheelZ = 9] = "MouseWheelZ", vv[vv.Move = 12] = "Move"
    }(nv || (nv = {})),
    function(vv) {
      vv[vv.Horizontal = 0] = "Horizontal", vv[vv.Vertical = 1] = "Vertical", vv[vv.LeftClick = 2] = "LeftClick", vv[vv.MiddleClick = 3] = "MiddleClick", vv[vv.RightClick = 4] = "RightClick", vv[vv.BrowserBack = 5] = "BrowserBack", vv[vv.BrowserForward = 6] = "BrowserForward", vv[vv.MouseWheelX = 7] = "MouseWheelX", vv[vv.MouseWheelY = 8] = "MouseWheelY", vv[vv.MouseWheelZ = 9] = "MouseWheelZ", vv[vv.DeltaHorizontal = 10] = "DeltaHorizontal", vv[vv.DeltaVertical = 11] = "DeltaVertical"
    }(Ov || (Ov = {})),
    function(vv) {
      vv[vv.Cross = 0] = "Cross", vv[vv.Circle = 1] = "Circle", vv[vv.Square = 2] = "Square", vv[vv.Triangle = 3] = "Triangle", vv[vv.L1 = 4] = "L1", vv[vv.R1 = 5] = "R1", vv[vv.L2 = 6] = "L2", vv[vv.R2 = 7] = "R2", vv[vv.Share = 8] = "Share", vv[vv.Options = 9] = "Options", vv[vv.L3 = 10] = "L3", vv[vv.R3 = 11] = "R3", vv[vv.DPadUp = 12] = "DPadUp", vv[vv.DPadDown = 13] = "DPadDown", vv[vv.DPadLeft = 14] = "DPadLeft", vv[vv.DPadRight = 15] = "DPadRight", vv[vv.Home = 16] = "Home", vv[vv.TouchPad = 17] = "TouchPad", vv[vv.LStickXAxis = 18] = "LStickXAxis", vv[vv.LStickYAxis = 19] = "LStickYAxis", vv[vv.RStickXAxis = 20] = "RStickXAxis", vv[vv.RStickYAxis = 21] = "RStickYAxis"
    }(Dv || (Dv = {})),
    function(vv) {
      vv[vv.Cross = 0] = "Cross", vv[vv.Circle = 1] = "Circle", vv[vv.Square = 2] = "Square", vv[vv.Triangle = 3] = "Triangle", vv[vv.L1 = 4] = "L1", vv[vv.R1 = 5] = "R1", vv[vv.L2 = 6] = "L2", vv[vv.R2 = 7] = "R2", vv[vv.Create = 8] = "Create", vv[vv.Options = 9] = "Options", vv[vv.L3 = 10] = "L3", vv[vv.R3 = 11] = "R3", vv[vv.DPadUp = 12] = "DPadUp", vv[vv.DPadDown = 13] = "DPadDown", vv[vv.DPadLeft = 14] = "DPadLeft", vv[vv.DPadRight = 15] = "DPadRight", vv[vv.Home = 16] = "Home", vv[vv.TouchPad = 17] = "TouchPad", vv[vv.LStickXAxis = 18] = "LStickXAxis", vv[vv.LStickYAxis = 19] = "LStickYAxis", vv[vv.RStickXAxis = 20] = "RStickXAxis", vv[vv.RStickYAxis = 21] = "RStickYAxis"
    }(Kv || (Kv = {})),
    function(vv) {
      vv[vv.A = 0] = "A", vv[vv.B = 1] = "B", vv[vv.X = 2] = "X", vv[vv.Y = 3] = "Y", vv[vv.LB = 4] = "LB", vv[vv.RB = 5] = "RB", vv[vv.LT = 6] = "LT", vv[vv.RT = 7] = "RT", vv[vv.Back = 8] = "Back", vv[vv.Start = 9] = "Start", vv[vv.LS = 10] = "LS", vv[vv.RS = 11] = "RS", vv[vv.DPadUp = 12] = "DPadUp", vv[vv.DPadDown = 13] = "DPadDown", vv[vv.DPadLeft = 14] = "DPadLeft", vv[vv.DPadRight = 15] = "DPadRight", vv[vv.Home = 16] = "Home", vv[vv.LStickXAxis = 17] = "LStickXAxis", vv[vv.LStickYAxis = 18] = "LStickYAxis", vv[vv.RStickXAxis = 19] = "RStickXAxis", vv[vv.RStickYAxis = 20] = "RStickYAxis"
    }(Vv || (Vv = {})),
    function(vv) {
      vv[vv.B = 0] = "B", vv[vv.A = 1] = "A", vv[vv.Y = 2] = "Y", vv[vv.X = 3] = "X", vv[vv.L = 4] = "L", vv[vv.R = 5] = "R", vv[vv.ZL = 6] = "ZL", vv[vv.ZR = 7] = "ZR", vv[vv.Minus = 8] = "Minus", vv[vv.Plus = 9] = "Plus", vv[vv.LS = 10] = "LS", vv[vv.RS = 11] = "RS", vv[vv.DPadUp = 12] = "DPadUp", vv[vv.DPadDown = 13] = "DPadDown", vv[vv.DPadLeft = 14] = "DPadLeft", vv[vv.DPadRight = 15] = "DPadRight", vv[vv.Home = 16] = "Home", vv[vv.Capture = 17] = "Capture", vv[vv.LStickXAxis = 18] = "LStickXAxis", vv[vv.LStickYAxis = 19] = "LStickYAxis", vv[vv.RStickXAxis = 20] = "RStickXAxis", vv[vv.RStickYAxis = 21] = "RStickYAxis"
    }(Uv || (Uv = {}));
    var xv = Pv(39487);
    class tv {
      static CreateDeviceEvent(vv, zv, Pv, hv, Sv, ev, gv) {
        switch (vv) {
          case Yv.Keyboard:
            return this._CreateKeyboardEvent(Pv, hv, Sv, ev);
          case Yv.Mouse:
            if (Pv === nv.MouseWheelX || Pv === nv.MouseWheelY || Pv === nv.MouseWheelZ) return this._CreateWheelEvent(vv, zv, Pv, hv, Sv, ev);
          case Yv.Touch:
            return this._CreatePointerEvent(vv, zv, Pv, hv, Sv, ev, gv);
          default:
            throw `Unable to generate event for device ${Yv[vv]}`
        }
      }
      static _CreatePointerEvent(vv, zv, Pv, hv, Sv, ev, gv) {
        const pv = this._CreateMouseEvent(vv, zv, Pv, hv, Sv, ev);
        vv === Yv.Mouse ? (pv.deviceType = Yv.Mouse, pv.pointerId = 1, pv.pointerType = "mouse") : (pv.deviceType = Yv.Touch, pv.pointerId = gv ?? zv, pv.pointerType = "touch");
        let dv = 0;
        return dv += Sv.pollInput(vv, zv, nv.LeftClick), dv += 2 * Sv.pollInput(vv, zv, nv.RightClick), dv += 4 * Sv.pollInput(vv, zv, nv.MiddleClick), pv.buttons = dv, Pv === nv.Move ? pv.type = "pointermove" : Pv >= nv.LeftClick && Pv <= nv.RightClick && (pv.type = 1 === hv ? "pointerdown" : "pointerup", pv.button = Pv - 2), pv
      }
      static _CreateWheelEvent(vv, zv, Pv, hv, Sv, ev) {
        const gv = this._CreateMouseEvent(vv, zv, Pv, hv, Sv, ev);
        switch (gv.pointerId = 1, gv.type = "wheel", gv.deltaMode = xv.c.DOM_DELTA_PIXEL, gv.deltaX = 0, gv.deltaY = 0, gv.deltaZ = 0, Pv) {
          case nv.MouseWheelX:
            gv.deltaX = hv;
            break;
          case nv.MouseWheelY:
            gv.deltaY = hv;
            break;
          case nv.MouseWheelZ:
            gv.deltaZ = hv
        }
        return gv
      }
      static _CreateMouseEvent(vv, zv, Pv, hv, Sv, ev) {
        const gv = this._CreateEvent(ev),
          pv = Sv.pollInput(vv, zv, nv.Horizontal),
          dv = Sv.pollInput(vv, zv, nv.Vertical);
        return ev ? (gv.movementX = 0, gv.movementY = 0, gv.offsetX = gv.movementX - ev.getBoundingClientRect().x, gv.offsetY = gv.movementY - ev.getBoundingClientRect().y) : (gv.movementX = Sv.pollInput(vv, zv, 10), gv.movementY = Sv.pollInput(vv, zv, 11), gv.offsetX = 0, gv.offsetY = 0), this._CheckNonCharacterKeys(gv, Sv), gv.clientX = pv, gv.clientY = dv, gv.x = pv, gv.y = dv, gv.deviceType = vv, gv.deviceSlot = zv, gv.inputIndex = Pv, gv
      }
      static _CreateKeyboardEvent(vv, zv, Pv, hv) {
        const Sv = this._CreateEvent(hv);
        return this._CheckNonCharacterKeys(Sv, Pv), Sv.deviceType = Yv.Keyboard, Sv.deviceSlot = 0, Sv.inputIndex = vv, Sv.type = 1 === zv ? "keydown" : "keyup", Sv.key = String.fromCharCode(vv), Sv.keyCode = vv, Sv
      }
      static _CheckNonCharacterKeys(vv, zv) {
        const Pv = zv.isDeviceAvailable(Yv.Keyboard),
          hv = Pv && 1 === zv.pollInput(Yv.Keyboard, 0, 18),
          Sv = Pv && 1 === zv.pollInput(Yv.Keyboard, 0, 17),
          ev = Pv && (1 === zv.pollInput(Yv.Keyboard, 0, 91) || 1 === zv.pollInput(Yv.Keyboard, 0, 92) || 1 === zv.pollInput(Yv.Keyboard, 0, 93)),
          gv = Pv && 1 === zv.pollInput(Yv.Keyboard, 0, 16);
        vv.altKey = hv, vv.ctrlKey = Sv, vv.metaKey = ev, vv.shiftKey = gv
      }
      static _CreateEvent(vv) {
        const zv = {
          preventDefault: () => {}
        };
        return zv.target = vv, zv
      }
    }
    class qv {
      constructor(vv, zv, Pv) {
        this._nativeInput = _native.DeviceInputSystem ? new _native.DeviceInputSystem(vv, zv, ((vv, zv, hv, Sv) => {
          const ev = tv.CreateDeviceEvent(vv, zv, hv, Sv, this);
          Pv(vv, zv, ev)
        })) : this._createDummyNativeInput()
      }
      pollInput(vv, zv, Pv) {
        return this._nativeInput.pollInput(vv, zv, Pv)
      }
      isDeviceAvailable(vv) {
        return vv === Yv.Mouse || vv === Yv.Touch
      }
      dispose() {
        this._nativeInput.dispose()
      }
      _createDummyNativeInput() {
        return {
          pollInput: () => 0,
          isDeviceAvailable: () => !1,
          dispose: () => {}
        }
      }
    }
    const Iv = Object.keys(nv).length / 2;
    class Qv {
      constructor(vv, zv, Pv, Sv) {
        this._inputs = [], this._keyboardActive = !1, this._pointerActive = !1, this._usingSafari = hv.h.IsSafari(), this._usingMacOs = (0, Gv.k)() && /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform), this._keyboardDownEvent = vv => {}, this._keyboardUpEvent = vv => {}, this._keyboardBlurEvent = vv => {}, this._pointerMoveEvent = vv => {}, this._pointerDownEvent = vv => {}, this._pointerUpEvent = vv => {}, this._pointerCancelEvent = vv => {}, this._pointerCancelTouch = vv => {}, this._pointerLeaveEvent = vv => {}, this._pointerWheelEvent = vv => {}, this._pointerBlurEvent = vv => {}, this._pointerMacOsChromeOutEvent = vv => {}, this._eventsAttached = !1, this._mouseId = -1, this._isUsingFirefox = (0, Gv.k)() && navigator.userAgent && -1 !== navigator.userAgent.indexOf("Firefox"), this._isUsingChromium = (0, Gv.k)() && navigator.userAgent && -1 !== navigator.userAgent.indexOf("Chrome"), this._maxTouchPoints = 0, this._pointerInputClearObserver = null, this._gamepadConnectedEvent = vv => {}, this._gamepadDisconnectedEvent = vv => {}, this._eventPrefix = hv.h.GetPointerPrefix(vv), this._engine = vv, this._onDeviceConnected = zv, this._onDeviceDisconnected = Pv, this._onInputChanged = Sv, this._mouseId = this._isUsingFirefox ? 0 : 1, this._enableEvents(), this._usingMacOs && (this._metaKeys = []), this._engine._onEngineViewChanged || (this._engine._onEngineViewChanged = () => {
          this._enableEvents()
        })
      }
      pollInput(vv, zv, Pv) {
        const Sv = this._inputs[vv][zv];
        if (!Sv) throw `Unable to find device ${Yv[vv]}`;
        vv >= Yv.DualShock && vv <= Yv.DualSense && this._updateDevice(vv, zv, Pv);
        const ev = Sv[Pv];
        if (void 0 === ev) throw `Unable to find input ${Pv} for device ${Yv[vv]} in slot ${zv}`;
        return Pv === nv.Move && hv.h.Warn("Unable to provide information for PointerInput.Move.  Try using PointerInput.Horizontal or PointerInput.Vertical for move data."), ev
      }
      isDeviceAvailable(vv) {
        return void 0 !== this._inputs[vv]
      }
      dispose() {
        this._onDeviceConnected = () => {}, this._onDeviceDisconnected = () => {}, this._onInputChanged = () => {}, delete this._engine._onEngineViewChanged, this._elementToAttachTo && this._disableEvents()
      }
      _enableEvents() {
        const vv = this?._engine.getInputElement();
        if (vv && (!this._eventsAttached || this._elementToAttachTo !== vv)) {
          if (this._disableEvents(), this._inputs)
            for (const vv of this._inputs)
              if (vv)
                for (const zv in vv) {
                  const Pv = vv[+zv];
                  if (Pv)
                    for (let vv = 0; vv < Pv.length; vv++) Pv[vv] = 0
                }
          this._elementToAttachTo = vv, this._elementToAttachTo.tabIndex = -1 !== this._elementToAttachTo.tabIndex ? this._elementToAttachTo.tabIndex : this._engine.canvasTabIndex, this._handleKeyActions(), this._handlePointerActions(), this._handleGamepadActions(), this._eventsAttached = !0, this._checkForConnectedDevices()
        }
      }
      _disableEvents() {
        this._elementToAttachTo && (this._elementToAttachTo.removeEventListener("blur", this._keyboardBlurEvent), this._elementToAttachTo.removeEventListener("blur", this._pointerBlurEvent), this._elementToAttachTo.removeEventListener("keydown", this._keyboardDownEvent), this._elementToAttachTo.removeEventListener("keyup", this._keyboardUpEvent), this._elementToAttachTo.removeEventListener(this._eventPrefix + "move", this._pointerMoveEvent), this._elementToAttachTo.removeEventListener(this._eventPrefix + "down", this._pointerDownEvent), this._elementToAttachTo.removeEventListener(this._eventPrefix + "up", this._pointerUpEvent), this._elementToAttachTo.removeEventListener(this._eventPrefix + "cancel", this._pointerCancelEvent), this._elementToAttachTo.removeEventListener(this._eventPrefix + "leave", this._pointerLeaveEvent), this._elementToAttachTo.removeEventListener(this._wheelEventName, this._pointerWheelEvent), this._usingMacOs && this._isUsingChromium && this._elementToAttachTo.removeEventListener("lostpointercapture", this._pointerMacOsChromeOutEvent), window.removeEventListener("gamepadconnected", this._gamepadConnectedEvent), window.removeEventListener("gamepaddisconnected", this._gamepadDisconnectedEvent)), this._pointerInputClearObserver && this._engine.onEndFrameObservable.remove(this._pointerInputClearObserver), this._eventsAttached = !1
      }
      _checkForConnectedDevices() {
        if (navigator.getGamepads) {
          const vv = navigator.getGamepads();
          for (const zv of vv) zv && this._addGamePad(zv)
        }
        "function" === typeof matchMedia && matchMedia("(pointer:fine)").matches && this._addPointerDevice(Yv.Mouse, 0, 0, 0)
      }
      _addGamePad(vv) {
        const zv = this._getGamepadDeviceType(vv.id),
          Pv = vv.index;
        this._gamepads = this._gamepads || new Array(vv.index + 1), this._registerDevice(zv, Pv, vv.buttons.length + vv.axes.length), this._gamepads[Pv] = zv
      }
      _addPointerDevice(vv, zv, Pv, hv) {
        this._pointerActive || (this._pointerActive = !0), this._registerDevice(vv, zv, Iv);
        const Sv = this._inputs[vv][zv];
        Sv[0] = Pv, Sv[1] = hv
      }
      _registerDevice(vv, zv, Pv) {
        if (void 0 === zv) throw `Unable to register device ${Yv[vv]} to undefined slot.`;
        if (this._inputs[vv] || (this._inputs[vv] = {}), !this._inputs[vv][zv]) {
          const hv = new Array(Pv);
          hv.fill(0), this._inputs[vv][zv] = hv, this._onDeviceConnected(vv, zv)
        }
      }
      _unregisterDevice(vv, zv) {
        this._inputs[vv][zv] && (delete this._inputs[vv][zv], this._onDeviceDisconnected(vv, zv))
      }
      _handleKeyActions() {
        this._keyboardDownEvent = vv => {
          this._keyboardActive || (this._keyboardActive = !0, this._registerDevice(Yv.Keyboard, 0, 255));
          const zv = this._inputs[Yv.Keyboard][0];
          if (zv) {
            zv[vv.keyCode] = 1;
            const Pv = vv;
            Pv.inputIndex = vv.keyCode, this._usingMacOs && vv.metaKey && "Meta" !== vv.key && (this._metaKeys.includes(vv.keyCode) || this._metaKeys.push(vv.keyCode)), this._onInputChanged(Yv.Keyboard, 0, Pv)
          }
        }, this._keyboardUpEvent = vv => {
          this._keyboardActive || (this._keyboardActive = !0, this._registerDevice(Yv.Keyboard, 0, 255));
          const zv = this._inputs[Yv.Keyboard][0];
          if (zv) {
            zv[vv.keyCode] = 0;
            const Pv = vv;
            if (Pv.inputIndex = vv.keyCode, this._usingMacOs && "Meta" === vv.key && this._metaKeys.length > 0) {
              for (const vv of this._metaKeys) {
                const Pv = tv.CreateDeviceEvent(Yv.Keyboard, 0, vv, 0, this, this._elementToAttachTo);
                zv[vv] = 0, this._onInputChanged(Yv.Keyboard, 0, Pv)
              }
              this._metaKeys.splice(0, this._metaKeys.length)
            }
            this._onInputChanged(Yv.Keyboard, 0, Pv)
          }
        }, this._keyboardBlurEvent = () => {
          if (this._keyboardActive) {
            const vv = this._inputs[Yv.Keyboard][0];
            for (let zv = 0; zv < vv.length; zv++)
              if (0 !== vv[zv]) {
                vv[zv] = 0;
                const Pv = tv.CreateDeviceEvent(Yv.Keyboard, 0, zv, 0, this, this._elementToAttachTo);
                this._onInputChanged(Yv.Keyboard, 0, Pv)
              } this._usingMacOs && this._metaKeys.splice(0, this._metaKeys.length)
          }
        }, this._elementToAttachTo.addEventListener("keydown", this._keyboardDownEvent), this._elementToAttachTo.addEventListener("keyup", this._keyboardUpEvent), this._elementToAttachTo.addEventListener("blur", this._keyboardBlurEvent)
      }
      _handlePointerActions() {
        this._maxTouchPoints = (0, Gv.k)() && navigator.maxTouchPoints || 2, this._activeTouchIds || (this._activeTouchIds = new Array(this._maxTouchPoints));
        for (let hv = 0; hv < this._maxTouchPoints; hv++) this._activeTouchIds[hv] = -1;
        this._pointerMoveEvent = vv => {
          const zv = this._getPointerType(vv);
          let Pv = zv === Yv.Mouse ? 0 : this._activeTouchIds.indexOf(vv.pointerId);
          if (zv === Yv.Touch && -1 === Pv) {
            if (0 === vv.buttons) return;
            const Sv = this._activeTouchIds.indexOf(-1);
            if (!(Sv >= 0)) return void hv.h.Warn(`Max number of touches exceeded.  Ignoring touches in excess of ${this._maxTouchPoints}`);
            Pv = Sv, this._activeTouchIds[Sv] = vv.pointerId, this._onDeviceConnected(zv, Pv)
          }
          this._inputs[zv] || (this._inputs[zv] = {}), this._inputs[zv][Pv] || this._addPointerDevice(zv, Pv, vv.clientX, vv.clientY);
          const Sv = this._inputs[zv][Pv];
          if (Sv) {
            const hv = vv;
            hv.inputIndex = nv.Move, Sv[nv.Horizontal] = vv.clientX, Sv[nv.Vertical] = vv.clientY, zv === Yv.Touch && 0 === Sv[nv.LeftClick] && (Sv[nv.LeftClick] = 1), void 0 === vv.pointerId && (vv.pointerId = this._mouseId), this._onInputChanged(zv, Pv, hv), this._usingSafari || -1 === vv.button || (hv.inputIndex = vv.button + 2, Sv[vv.button + 2] = Sv[vv.button + 2] ? 0 : 1, this._onInputChanged(zv, Pv, hv))
          }
        }, this._pointerDownEvent = vv => {
          const zv = this._getPointerType(vv);
          let Pv = zv === Yv.Mouse ? 0 : vv.pointerId;
          if (zv === Yv.Touch) {
            let zv = this._activeTouchIds.indexOf(vv.pointerId);
            if (-1 === zv && (zv = this._activeTouchIds.indexOf(-1)), !(zv >= 0)) return void hv.h.Warn(`Max number of touches exceeded.  Ignoring touches in excess of ${this._maxTouchPoints}`);
            Pv = zv, this._activeTouchIds[zv] = vv.pointerId
          }
          this._inputs[zv] || (this._inputs[zv] = {}), this._inputs[zv][Pv] ? zv === Yv.Touch && this._onDeviceConnected(zv, Pv) : this._addPointerDevice(zv, Pv, vv.clientX, vv.clientY);
          const Sv = this._inputs[zv][Pv];
          if (Sv) {
            const hv = Sv[nv.Horizontal],
              gv = Sv[nv.Vertical];
            if (zv === Yv.Mouse) {
              if (void 0 === vv.pointerId && (vv.pointerId = this._mouseId), !document.pointerLockElement) try {
                this._elementToAttachTo.setPointerCapture(this._mouseId)
              } catch (ev) {}
            } else if (vv.pointerId && !document.pointerLockElement) try {
              this._elementToAttachTo.setPointerCapture(vv.pointerId)
            } catch (ev) {}
            Sv[nv.Horizontal] = vv.clientX, Sv[nv.Vertical] = vv.clientY, Sv[vv.button + 2] = 1;
            const pv = vv;
            pv.inputIndex = vv.button + 2, this._onInputChanged(zv, Pv, pv), hv === vv.clientX && gv === vv.clientY || (pv.inputIndex = nv.Move, this._onInputChanged(zv, Pv, pv))
          }
        }, this._pointerUpEvent = vv => {
          const zv = this._getPointerType(vv),
            Pv = zv === Yv.Mouse ? 0 : this._activeTouchIds.indexOf(vv.pointerId);
          if (zv === Yv.Touch) {
            if (-1 === Pv) return;
            this._activeTouchIds[Pv] = -1
          }
          const hv = this._inputs[zv]?.[Pv];
          let Sv = vv.button,
            ev = hv && 0 !== hv[Sv + 2];
          if (!ev && this._isUsingFirefox && this._usingMacOs && hv && (Sv = 2 === Sv ? 0 : 2, ev = 0 !== hv[Sv + 2]), ev) {
            const ev = hv[nv.Horizontal],
              gv = hv[nv.Vertical];
            hv[nv.Horizontal] = vv.clientX, hv[nv.Vertical] = vv.clientY, hv[Sv + 2] = 0;
            const pv = vv;
            void 0 === vv.pointerId && (vv.pointerId = this._mouseId), ev === vv.clientX && gv === vv.clientY || (pv.inputIndex = nv.Move, this._onInputChanged(zv, Pv, pv)), pv.inputIndex = Sv + 2, zv === Yv.Mouse && this._mouseId >= 0 && this._elementToAttachTo.hasPointerCapture?.(this._mouseId) ? this._elementToAttachTo.releasePointerCapture(this._mouseId) : vv.pointerId && this._elementToAttachTo.hasPointerCapture?.(vv.pointerId) && this._elementToAttachTo.releasePointerCapture(vv.pointerId), this._onInputChanged(zv, Pv, pv), zv === Yv.Touch && this._onDeviceDisconnected(zv, Pv)
          }
        }, this._pointerCancelTouch = vv => {
          const zv = this._activeTouchIds.indexOf(vv);
          if (-1 === zv) return;
          this._elementToAttachTo.hasPointerCapture?.(vv) && this._elementToAttachTo.releasePointerCapture(vv), this._inputs[Yv.Touch][zv][nv.LeftClick] = 0;
          const Pv = tv.CreateDeviceEvent(Yv.Touch, zv, nv.LeftClick, 0, this, this._elementToAttachTo, vv);
          this._onInputChanged(Yv.Touch, zv, Pv), this._activeTouchIds[zv] = -1, this._onDeviceDisconnected(Yv.Touch, zv)
        }, this._pointerCancelEvent = vv => {
          if ("mouse" === vv.pointerType) {
            const vv = this._inputs[Yv.Mouse][0];
            this._mouseId >= 0 && this._elementToAttachTo.hasPointerCapture?.(this._mouseId) && this._elementToAttachTo.releasePointerCapture(this._mouseId);
            for (let zv = nv.LeftClick; zv <= nv.BrowserForward; zv++)
              if (1 === vv[zv]) {
                vv[zv] = 0;
                const Pv = tv.CreateDeviceEvent(Yv.Mouse, 0, zv, 0, this, this._elementToAttachTo);
                this._onInputChanged(Yv.Mouse, 0, Pv)
              }
          } else this._pointerCancelTouch(vv.pointerId)
        }, this._pointerLeaveEvent = vv => {
          "pen" === vv.pointerType && this._pointerCancelTouch(vv.pointerId)
        }, this._wheelEventName = "onwheel" in document.createElement("div") ? "wheel" : void 0 !== document.onmousewheel ? "mousewheel" : "DOMMouseScroll";
        let vv = !1;
        const zv = function() {};
        try {
          const Pv = Object.defineProperty({}, "passive", {
            get: function() {
              vv = !0
            }
          });
          this._elementToAttachTo.addEventListener("test", zv, Pv), this._elementToAttachTo.removeEventListener("test", zv, Pv)
        } catch (Pv) {}
        this._pointerBlurEvent = () => {
          if (this.isDeviceAvailable(Yv.Mouse)) {
            const vv = this._inputs[Yv.Mouse][0];
            this._mouseId >= 0 && this._elementToAttachTo.hasPointerCapture?.(this._mouseId) && this._elementToAttachTo.releasePointerCapture(this._mouseId);
            for (let zv = nv.LeftClick; zv <= nv.BrowserForward; zv++)
              if (1 === vv[zv]) {
                vv[zv] = 0;
                const Pv = tv.CreateDeviceEvent(Yv.Mouse, 0, zv, 0, this, this._elementToAttachTo);
                this._onInputChanged(Yv.Mouse, 0, Pv)
              }
          }
          if (this.isDeviceAvailable(Yv.Touch)) {
            const vv = this._inputs[Yv.Touch];
            for (let zv = 0; zv < this._activeTouchIds.length; zv++) {
              const Pv = this._activeTouchIds[zv];
              if (this._elementToAttachTo.hasPointerCapture?.(Pv) && this._elementToAttachTo.releasePointerCapture(Pv), -1 !== Pv && 1 === vv[zv]?.[nv.LeftClick]) {
                vv[zv][nv.LeftClick] = 0;
                const hv = tv.CreateDeviceEvent(Yv.Touch, zv, nv.LeftClick, 0, this, this._elementToAttachTo, Pv);
                this._onInputChanged(Yv.Touch, zv, hv), this._activeTouchIds[zv] = -1, this._onDeviceDisconnected(Yv.Touch, zv)
              }
            }
          }
        }, this._pointerWheelEvent = vv => {
          const zv = Yv.Mouse;
          this._inputs[zv] || (this._inputs[zv] = []), this._inputs[zv][0] || (this._pointerActive = !0, this._registerDevice(zv, 0, Iv));
          const Pv = this._inputs[zv][0];
          if (Pv) {
            Pv[nv.MouseWheelX] = vv.deltaX || 0, Pv[nv.MouseWheelY] = vv.deltaY || vv.wheelDelta || 0, Pv[nv.MouseWheelZ] = vv.deltaZ || 0;
            const hv = vv;
            void 0 === vv.pointerId && (vv.pointerId = this._mouseId), 0 !== Pv[nv.MouseWheelX] && (hv.inputIndex = nv.MouseWheelX, this._onInputChanged(zv, 0, hv)), 0 !== Pv[nv.MouseWheelY] && (hv.inputIndex = nv.MouseWheelY, this._onInputChanged(zv, 0, hv)), 0 !== Pv[nv.MouseWheelZ] && (hv.inputIndex = nv.MouseWheelZ, this._onInputChanged(zv, 0, hv))
          }
        }, this._usingMacOs && this._isUsingChromium && (this._pointerMacOsChromeOutEvent = vv => {
          vv.buttons > 1 && this._pointerCancelEvent(vv)
        }, this._elementToAttachTo.addEventListener("lostpointercapture", this._pointerMacOsChromeOutEvent)), this._elementToAttachTo.addEventListener(this._eventPrefix + "move", this._pointerMoveEvent), this._elementToAttachTo.addEventListener(this._eventPrefix + "down", this._pointerDownEvent), this._elementToAttachTo.addEventListener(this._eventPrefix + "up", this._pointerUpEvent), this._elementToAttachTo.addEventListener(this._eventPrefix + "cancel", this._pointerCancelEvent), this._elementToAttachTo.addEventListener(this._eventPrefix + "leave", this._pointerLeaveEvent), this._elementToAttachTo.addEventListener("blur", this._pointerBlurEvent), this._elementToAttachTo.addEventListener(this._wheelEventName, this._pointerWheelEvent, !!vv && {
          passive: !1
        }), this._pointerInputClearObserver = this._engine.onEndFrameObservable.add((() => {
          if (this.isDeviceAvailable(Yv.Mouse)) {
            const vv = this._inputs[Yv.Mouse][0];
            vv[nv.MouseWheelX] = 0, vv[nv.MouseWheelY] = 0, vv[nv.MouseWheelZ] = 0
          }
        }))
      }
      _handleGamepadActions() {
        this._gamepadConnectedEvent = vv => {
          this._addGamePad(vv.gamepad)
        }, this._gamepadDisconnectedEvent = vv => {
          if (this._gamepads) {
            const zv = this._getGamepadDeviceType(vv.gamepad.id),
              Pv = vv.gamepad.index;
            this._unregisterDevice(zv, Pv), delete this._gamepads[Pv]
          }
        }, window.addEventListener("gamepadconnected", this._gamepadConnectedEvent), window.addEventListener("gamepaddisconnected", this._gamepadDisconnectedEvent)
      }
      _updateDevice(vv, zv, Pv) {
        const hv = navigator.getGamepads()[zv];
        if (hv && vv === this._gamepads[zv]) {
          const Sv = this._inputs[vv][zv];
          Pv >= hv.buttons.length ? Sv[Pv] = hv.axes[Pv - hv.buttons.length].valueOf() : Sv[Pv] = hv.buttons[Pv].value
        }
      }
      _getGamepadDeviceType(vv) {
        return -1 !== vv.indexOf("054c") ? -1 !== vv.indexOf("0ce6") ? Yv.DualSense : Yv.DualShock : -1 !== vv.indexOf("Xbox One") || -1 !== vv.search("Xbox 360") || -1 !== vv.search("xinput") || -1 !== vv.indexOf("045e") && -1 === vv.indexOf("Surface Dock") ? Yv.Xbox : -1 !== vv.indexOf("057e") ? Yv.Switch : Yv.Generic
      }
      _getPointerType(vv) {
        let zv = Yv.Mouse;
        return ("touch" === vv.pointerType || "pen" === vv.pointerType || vv.touches) && (zv = Yv.Touch), zv
      }
    }
    class Zv {
      constructor(vv, zv) {
        let Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.deviceType = zv, this.deviceSlot = Pv, this.onInputChangedObservable = new gv.c, this._deviceInputSystem = vv
      }
      getInput(vv) {
        return this._deviceInputSystem.pollInput(this.deviceType, this.deviceSlot, vv)
      }
    }
    class Av {
      constructor(vv) {
        this._registeredManagers = new Array, this._refCount = 0, this.registerManager = vv => {
          for (let zv = 0; zv < this._devices.length; zv++) {
            const Pv = this._devices[zv];
            for (const hv in Pv) {
              const Pv = +hv;
              vv._addDevice(new Zv(this._deviceInputSystem, zv, Pv))
            }
          }
          this._registeredManagers.push(vv)
        }, this.unregisterManager = vv => {
          const zv = this._registeredManagers.indexOf(vv);
          zv > -1 && this._registeredManagers.splice(zv, 1)
        };
        const zv = Object.keys(Yv).length / 2;
        this._devices = new Array(zv);
        const Pv = (vv, zv) => {
            this._devices[vv] || (this._devices[vv] = new Array), this._devices[vv][zv] || (this._devices[vv][zv] = zv);
            for (const Pv of this._registeredManagers) {
              const hv = new Zv(this._deviceInputSystem, vv, zv);
              Pv._addDevice(hv)
            }
          },
          hv = (vv, zv) => {
            this._devices[vv]?.[zv] && delete this._devices[vv][zv];
            for (const Pv of this._registeredManagers) Pv._removeDevice(vv, zv)
          },
          Sv = (vv, zv, Pv) => {
            if (Pv)
              for (const hv of this._registeredManagers) hv._onInputChanged(vv, zv, Pv)
          };
        "undefined" !== typeof _native ? this._deviceInputSystem = new qv(Pv, hv, Sv) : this._deviceInputSystem = new Qv(vv, Pv, hv, Sv)
      }
      dispose() {
        this._deviceInputSystem.dispose()
      }
    }
    class Lv {
      getDeviceSource(vv, zv) {
        if (void 0 === zv) {
          if (void 0 === this._firstDevice[vv]) return null;
          zv = this._firstDevice[vv]
        }
        return this._devices[vv] && void 0 !== this._devices[vv][zv] ? this._devices[vv][zv] : null
      }
      getDeviceSources(vv) {
        return this._devices[vv] ? this._devices[vv].filter((vv => !!vv)) : []
      }
      constructor(vv) {
        const zv = Object.keys(Yv).length / 2;
        this._devices = new Array(zv), this._firstDevice = new Array(zv), this._engine = vv, this._engine._deviceSourceManager || (this._engine._deviceSourceManager = new Av(vv)), this._engine._deviceSourceManager._refCount++, this.onDeviceConnectedObservable = new gv.c((vv => {
          for (const zv of this._devices)
            if (zv)
              for (const Pv of zv) Pv && this.onDeviceConnectedObservable.notifyObserver(vv, Pv)
        })), this.onDeviceDisconnectedObservable = new gv.c, this._engine._deviceSourceManager.registerManager(this), this._onDisposeObserver = vv.uD.add((() => {
          this.dispose()
        }))
      }
      dispose() {
        this.onDeviceConnectedObservable.clear(), this.onDeviceDisconnectedObservable.clear(), this._engine._deviceSourceManager && (this._engine._deviceSourceManager.unregisterManager(this), --this._engine._deviceSourceManager._refCount < 1 && (this._engine._deviceSourceManager.dispose(), delete this._engine._deviceSourceManager)), this._engine.uD.remove(this._onDisposeObserver)
      }
      _addDevice(vv) {
        this._devices[vv.deviceType] || (this._devices[vv.deviceType] = []), this._devices[vv.deviceType][vv.deviceSlot] || (this._devices[vv.deviceType][vv.deviceSlot] = vv, this._updateFirstDevices(vv.deviceType)), this.onDeviceConnectedObservable.notifyObservers(vv)
      }
      _removeDevice(vv, zv) {
        const Pv = this._devices[vv]?.[zv];
        this.onDeviceDisconnectedObservable.notifyObservers(Pv), this._devices[vv]?.[zv] && delete this._devices[vv][zv], this._updateFirstDevices(vv)
      }
      _onInputChanged(vv, zv, Pv) {
        this._devices[vv]?.[zv]?.onInputChangedObservable.notifyObservers(Pv)
      }
      _updateFirstDevices(vv) {
        switch (vv) {
          case Yv.Keyboard:
          case Yv.Mouse:
            this._firstDevice[vv] = 0;
            break;
          case Yv.Touch:
          case Yv.DualSense:
          case Yv.DualShock:
          case Yv.Xbox:
          case Yv.Switch:
          case Yv.Generic: {
            delete this._firstDevice[vv];
            const zv = this._devices[vv];
            if (zv)
              for (let Pv = 0; Pv < zv.length; Pv++)
                if (zv[Pv]) {
                  this._firstDevice[vv] = Pv;
                  break
                } break
          }
        }
      }
    }
    var Hv = Pv(39493);
    class Mv {
      constructor() {
        this._singleClick = !1, this._doubleClick = !1, this._hasSwiped = !1, this._ignore = !1
      }
      get singleClick() {
        return this._singleClick
      }
      get mp() {
        return this._doubleClick
      }
      get hasSwiped() {
        return this._hasSwiped
      }
      get ignore() {
        return this._ignore
      }
      set singleClick(vv) {
        this._singleClick = vv
      }
      set mp(vv) {
        this._doubleClick = vv
      }
      set hasSwiped(vv) {
        this._hasSwiped = vv
      }
      set ignore(vv) {
        this._ignore = vv
      }
    }
    class yv {
      constructor(vv) {
        this._alreadyAttached = !1, this._meshPickProceed = !1, this._currentPickResult = null, this._previousPickResult = null, this._activePointerIds = new Array, this._activePointerIdsCount = 0, this._doubleClickOccured = !1, this._isSwiping = !1, this._swipeButtonPressed = -1, this._skipPointerTap = !1, this._isMultiTouchGesture = !1, this._pointerX = 0, this._pointerY = 0, this._startingPointerPosition = new lv.j(0, 0), this._previousStartingPointerPosition = new lv.j(0, 0), this._startingPointerTime = 0, this._previousStartingPointerTime = 0, this._pointerCaptures = {}, this._meshUnderPointerId = {}, this._movePointerInfo = null, this._latestPointerMoveEvents = new Map, this._cameraObserverCount = 0, this._delayedClicks = [null, null, null, null, null], this._deviceSourceManager = null, this._scene = vv || mv.e.LastCreatedScene, this._scene
      }
      get meshUnderPointer() {
        return this._movePointerInfo && (this._movePointerInfo._generatePickInfo(), this._movePointerInfo = null), this._pointerOverMesh
      }
      getMeshUnderPointerByPointerId(vv) {
        return this._meshUnderPointerId[vv] || null
      }
      get unTranslatedPointer() {
        return new lv.j(this._unTranslatedPointerX, this._unTranslatedPointerY)
      }
      get pointerX() {
        return this._pointerX
      }
      set pointerX(vv) {
        this._pointerX = vv
      }
      get pointerY() {
        return this._pointerY
      }
      set pointerY(vv) {
        this._pointerY = vv
      }
      _updatePointerPosition(vv) {
        const zv = this._scene.ma().getInputElementClientRect();
        zv && (this._pointerX = vv.clientX - zv.left, this._pointerY = vv.clientY - zv.top, this._unTranslatedPointerX = this._pointerX, this._unTranslatedPointerY = this._pointerY)
      }
      _processPointerMove(vv, zv) {
        const Pv = this._scene,
          hv = Pv.ma(),
          Sv = hv.getInputElement();
        Sv && (Sv.tabIndex = hv.canvasTabIndex, Pv.doNotHandleCursors || (Sv.style.cursor = Pv.defaultCursor)), this._setCursorAndPointerOverMesh(vv, zv, Pv);
        for (const pv of Pv._pointerMoveStage) {
          vv = vv || this._pickMove(zv);
          const Pv = !!vv?.pickedMesh;
          vv = pv.action(this._unTranslatedPointerX, this._unTranslatedPointerY, vv, Pv, Sv)
        }
        const ev = zv.inputIndex >= nv.MouseWheelX && zv.inputIndex <= nv.MouseWheelZ ? fv.b.POINTERWHEEL : fv.b.POINTERMOVE;
        let gv;
        Pv.onPointerMove && (vv = vv || this._pickMove(zv), Pv.onPointerMove(zv, vv, ev)), vv ? (gv = new fv.g(ev, zv, vv), this._setRayOnPointerInfo(vv, zv)) : (gv = new fv.g(ev, zv, null, this), this._movePointerInfo = gv), Pv.onPointerObservable.hasObservers() && Pv.onPointerObservable.notifyObservers(gv, ev)
      }
      _setRayOnPointerInfo(vv, zv) {
        const Pv = this._scene;
        vv && Hv.d._IsPickingAvailable && (vv.ray || (vv.ray = Pv.createPickingRay(zv.offsetX, zv.offsetY, lv.c.Identity(), Pv.activeCamera)))
      }
      _addCameraPointerObserver(vv, zv) {
        return this._cameraObserverCount++, this._scene.onPointerObservable.add(vv, zv)
      }
      _removeCameraPointerObserver(vv) {
        return this._cameraObserverCount--, this._scene.onPointerObservable.remove(vv)
      }
      _checkForPicking() {
        return !!(this._scene.onPointerObservable.observers.length > this._cameraObserverCount || this._scene.onPointerPick)
      }
      _checkPrePointerObservable(vv, zv, Pv) {
        const hv = this._scene,
          Sv = new fv.c(Pv, zv, this._unTranslatedPointerX, this._unTranslatedPointerY);
        return vv && (Sv.originalPickingInfo = vv, Sv.ray = vv.ray, "xr-near" === zv.pointerType && vv.originMesh && (Sv.nearInteractionPickingInfo = vv)), hv.onPrePointerObservable.notifyObservers(Sv, Pv), !!Sv.skipOnPointerObservable
      }
      _pickMove(vv) {
        const zv = this._scene,
          Pv = zv.HW(this._unTranslatedPointerX, this._unTranslatedPointerY, zv.pointerMovePredicate, zv.pointerMoveFastCheck, zv.cameraToUseForPointers, zv.pointerMoveTrianglePredicate);
        return this._setCursorAndPointerOverMesh(Pv, vv, zv), Pv
      }
      _updateMeshUnderPointer() {
        const vv = this._scene;
        if (!vv.constantlyUpdateMeshUnderPointer || 0 === this._latestPointerMoveEvents.size || vv.skipPointerMovePicking || !vv.cameraToUseForPointers && !vv.activeCamera) return;
        this._ensurePointerMovePredicate();
        const zv = this._pointerX,
          Pv = this._pointerY,
          hv = this._unTranslatedPointerX,
          Sv = this._unTranslatedPointerY;
        for (const ev of this._latestPointerMoveEvents.values()) this._pointerX = ev.pointerX, this._pointerY = ev.pointerY, this._unTranslatedPointerX = ev.unTranslatedPointerX, this._unTranslatedPointerY = ev.unTranslatedPointerY, this._pickMove(ev.event);
        this._pointerX = zv, this._pointerY = Pv, this._unTranslatedPointerX = hv, this._unTranslatedPointerY = Sv
      }
      _ensurePointerMovePredicate() {
        const vv = this._scene;
        vv.pointerMovePredicate || (vv.pointerMovePredicate = zv => (zv._isPointerMovePickable ?? zv.Zs) && zv.isVisible && zv.isReady() && zv.isEnabled() && (zv.enablePointerMoveEvents || vv.constantlyUpdateMeshUnderPointer || null !== zv._getActionManagerForTrigger()) && (!vv.cameraToUseForPointers || 0 !== (vv.cameraToUseForPointers.layerMask & zv.layerMask)))
      }
      _setCursorAndPointerOverMesh(vv, zv, Pv) {
        const hv = Pv.ma().getInputElement();
        if (vv?.pickedMesh) {
          if (this.setPointerOverMesh(vv.pickedMesh, zv.pointerId, vv, zv), !Pv.doNotHandleCursors && hv && this._pointerOverMesh) {
            const vv = this._pointerOverMesh._getActionManagerForTrigger();
            vv && vv.hasPointerTriggers && (hv.style.cursor = vv.hoverCursor || Pv.hoverCursor)
          }
        } else this.setPointerOverMesh(null, zv.pointerId, vv, zv)
      }
      simulatePointerMove(vv, zv) {
        const Pv = new PointerEvent("pointermove", zv);
        Pv.inputIndex = nv.Move, this._checkPrePointerObservable(vv, Pv, fv.b.POINTERMOVE) || this._processPointerMove(vv, Pv)
      }
      simulatePointerDown(vv, zv) {
        const Pv = new PointerEvent("pointerdown", zv);
        Pv.inputIndex = Pv.button + 2, this._checkPrePointerObservable(vv, Pv, fv.b.POINTERDOWN) || this._processPointerDown(vv, Pv)
      }
      _processPointerDown(vv, zv) {
        const Pv = this._scene;
        if (vv?.pickedMesh) {
          this._pickedDownMesh = vv.pickedMesh;
          const hv = vv.pickedMesh._getActionManagerForTrigger();
          if (hv) {
            if (hv.hasPickTriggers) switch (hv.processTrigger(5, new av(vv.pickedMesh, Pv.pointerX, Pv.pointerY, vv.pickedMesh, zv, vv)), zv.button) {
              case 0:
                hv.processTrigger(2, new av(vv.pickedMesh, Pv.pointerX, Pv.pointerY, vv.pickedMesh, zv, vv));
                break;
              case 1:
                hv.processTrigger(4, new av(vv.pickedMesh, Pv.pointerX, Pv.pointerY, vv.pickedMesh, zv, vv));
                break;
              case 2:
                hv.processTrigger(3, new av(vv.pickedMesh, Pv.pointerX, Pv.pointerY, vv.pickedMesh, zv, vv))
            }
            hv.hasSpecificTrigger(8) && window.setTimeout((() => {
              const vv = Pv.HW(this._unTranslatedPointerX, this._unTranslatedPointerY, (vv => vv.Zs && vv.isVisible && vv.isReady() && vv.actionManager && vv.actionManager.hasSpecificTrigger(8) && vv === this._pickedDownMesh), !1, Pv.cameraToUseForPointers);
              vv?.pickedMesh && hv && 0 !== this._activePointerIdsCount && Date.now() - this._startingPointerTime > yv.LongPressDelay && !this._isPointerSwiping() && (this._startingPointerTime = 0, hv.processTrigger(8, av.CreateNew(vv.pickedMesh, zv)))
            }), yv.LongPressDelay)
          }
        } else
          for (const ev of Pv._pointerDownStage) vv = ev.action(this._unTranslatedPointerX, this._unTranslatedPointerY, vv, zv, !1);
        let hv;
        const Sv = fv.b.POINTERDOWN;
        vv ? (Pv.onPointerDown && Pv.onPointerDown(zv, vv, Sv), hv = new fv.g(Sv, zv, vv), this._setRayOnPointerInfo(vv, zv)) : hv = new fv.g(Sv, zv, null, this), Pv.onPointerObservable.hasObservers() && Pv.onPointerObservable.notifyObservers(hv, Sv)
      }
      _isPointerSwiping() {
        return this._isSwiping
      }
      simulatePointerUp(vv, zv, Pv) {
        const hv = new PointerEvent("pointerup", zv);
        hv.inputIndex = nv.Move;
        const Sv = new Mv;
        Pv ? Sv.mp = !0 : Sv.singleClick = !0, this._checkPrePointerObservable(vv, hv, fv.b.POINTERUP) || this._processPointerUp(vv, hv, Sv)
      }
      _processPointerUp(vv, zv, Pv) {
        const hv = this._scene;
        if (vv?.pickedMesh) {
          if (this._pickedUpMesh = vv.pickedMesh, this._pickedDownMesh === this._pickedUpMesh && (hv.onPointerPick && hv.onPointerPick(zv, vv), Pv.singleClick && !Pv.ignore && hv.onPointerObservable.observers.length > this._cameraObserverCount)) {
            const Pv = fv.b.POINTERPICK,
              Sv = new fv.g(Pv, zv, vv);
            this._setRayOnPointerInfo(vv, zv), hv.onPointerObservable.notifyObservers(Sv, Pv)
          }
          const Sv = vv.pickedMesh._getActionManagerForTrigger();
          if (Sv && !Pv.ignore) {
            Sv.processTrigger(7, av.CreateNew(vv.pickedMesh, zv, vv)), !Pv.hasSwiped && Pv.singleClick && Sv.processTrigger(1, av.CreateNew(vv.pickedMesh, zv, vv));
            const hv = vv.pickedMesh._getActionManagerForTrigger(6);
            Pv.mp && hv && hv.processTrigger(6, av.CreateNew(vv.pickedMesh, zv, vv))
          }
        } else if (!Pv.ignore)
          for (const Sv of hv._pointerUpStage) vv = Sv.action(this._unTranslatedPointerX, this._unTranslatedPointerY, vv, zv, Pv.mp);
        if (this._pickedDownMesh && this._pickedDownMesh !== this._pickedUpMesh) {
          const vv = this._pickedDownMesh._getActionManagerForTrigger(16);
          vv && vv.processTrigger(16, av.CreateNew(this._pickedDownMesh, zv))
        }
        if (!Pv.ignore) {
          const Sv = new fv.g(fv.b.POINTERUP, zv, vv);
          if (this._setRayOnPointerInfo(vv, zv), hv.onPointerObservable.notifyObservers(Sv, fv.b.POINTERUP), hv.onPointerUp && hv.onPointerUp(zv, vv, fv.b.POINTERUP), !Pv.hasSwiped && !this._skipPointerTap && !this._isMultiTouchGesture) {
            let Sv = 0;
            if (Pv.singleClick ? Sv = fv.b.POINTERTAP : Pv.mp && (Sv = fv.b.POINTERDOUBLETAP), Sv) {
              const Pv = new fv.g(Sv, zv, vv);
              hv.onPointerObservable.hasObservers() && hv.onPointerObservable.hasSpecificMask(Sv) && hv.onPointerObservable.notifyObservers(Pv, Sv)
            }
          }
        }
      }
      isPointerCaptured() {
        let vv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return this._pointerCaptures[vv]
      }
      attachControl() {
        let vv = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          zv = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          Pv = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          hv = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const Sv = this._scene,
          ev = Sv.ma();
        hv || (hv = ev.getInputElement()), this._alreadyAttached && this.detachControl(), hv && (this._alreadyAttachedTo = hv), this._deviceSourceManager = new Lv(ev), this._initActionManager = vv => {
          if (!this._meshPickProceed) {
            const zv = Sv.skipPointerUpPicking || 0 === Sv._registeredActions && !this._checkForPicking() && !Sv.onPointerUp ? null : Sv.HW(this._unTranslatedPointerX, this._unTranslatedPointerY, Sv.pointerUpPredicate, Sv.pointerUpFastCheck, Sv.cameraToUseForPointers, Sv.pointerUpTrianglePredicate);
            this._currentPickResult = zv, zv && (vv = zv.hit && zv.pickedMesh ? zv.pickedMesh._getActionManagerForTrigger() : null), this._meshPickProceed = !0
          }
          return vv
        }, this._delayedSimpleClick = (vv, zv, Pv) => {
          if ((Date.now() - this._previousStartingPointerTime > yv.DoubleClickDelay && !this._doubleClickOccured || vv !== this._previousButtonPressed) && (this._doubleClickOccured = !1, zv.singleClick = !0, zv.ignore = !1, this._delayedClicks[vv])) {
            const zv = this._delayedClicks[vv].evt,
              Pv = fv.b.POINTERTAP,
              hv = new fv.g(Pv, zv, this._currentPickResult);
            Sv.onPointerObservable.hasObservers() && Sv.onPointerObservable.hasSpecificMask(Pv) && Sv.onPointerObservable.notifyObservers(hv, Pv), this._delayedClicks[vv] = null
          }
        }, this._initClickEvent = (vv, zv, Pv, hv) => {
          const Sv = new Mv;
          this._currentPickResult = null;
          let ev = null,
            gv = vv.hasSpecificMask(fv.b.POINTERPICK) || zv.hasSpecificMask(fv.b.POINTERPICK) || vv.hasSpecificMask(fv.b.POINTERTAP) || zv.hasSpecificMask(fv.b.POINTERTAP) || vv.hasSpecificMask(fv.b.POINTERDOUBLETAP) || zv.hasSpecificMask(fv.b.POINTERDOUBLETAP);
          !gv && Fv && (ev = this._initActionManager(ev, Sv), ev && (gv = ev.hasPickTriggers));
          let pv = !1;
          if (gv = gv && !this._isMultiTouchGesture, gv) {
            const gv = Pv.button;
            if (Sv.hasSwiped = this._isPointerSwiping(), !Sv.hasSwiped) {
              let dv = !yv.ExclusiveDoubleClickMode;
              if (dv || (dv = !vv.hasSpecificMask(fv.b.POINTERDOUBLETAP) && !zv.hasSpecificMask(fv.b.POINTERDOUBLETAP), dv && !Fv.HasSpecificTrigger(6) && (ev = this._initActionManager(ev, Sv), ev && (dv = !ev.hasSpecificTrigger(6)))), dv)(Date.now() - this._previousStartingPointerTime > yv.DoubleClickDelay || gv !== this._previousButtonPressed) && (Sv.singleClick = !0, hv(Sv, this._currentPickResult), pv = !0);
              else {
                const vv = {
                  evt: Pv,
                  clickInfo: Sv,
                  timeoutId: window.setTimeout(this._delayedSimpleClick.bind(this, gv, Sv, hv), yv.DoubleClickDelay)
                };
                this._delayedClicks[gv] = vv
              }
              let Nv = vv.hasSpecificMask(fv.b.POINTERDOUBLETAP) || zv.hasSpecificMask(fv.b.POINTERDOUBLETAP);
              !Nv && Fv.HasSpecificTrigger(6) && (ev = this._initActionManager(ev, Sv), ev && (Nv = ev.hasSpecificTrigger(6))), Nv && (gv === this._previousButtonPressed && Date.now() - this._previousStartingPointerTime < yv.DoubleClickDelay && !this._doubleClickOccured ? (Sv.hasSwiped || this._isPointerSwiping() ? (this._doubleClickOccured = !1, this._previousStartingPointerTime = this._startingPointerTime, this._previousStartingPointerPosition.x = this._startingPointerPosition.x, this._previousStartingPointerPosition.y = this._startingPointerPosition.y, this._previousButtonPressed = gv, yv.ExclusiveDoubleClickMode ? (this._delayedClicks[gv] && (clearTimeout(this._delayedClicks[gv]?.timeoutId), this._delayedClicks[gv] = null), hv(Sv, this._previousPickResult)) : hv(Sv, this._currentPickResult)) : (this._previousStartingPointerTime = 0, this._doubleClickOccured = !0, Sv.mp = !0, Sv.ignore = !1, yv.ExclusiveDoubleClickMode && this._delayedClicks[gv] && (clearTimeout(this._delayedClicks[gv]?.timeoutId), this._delayedClicks[gv] = null), hv(Sv, this._currentPickResult)), pv = !0) : (this._doubleClickOccured = !1, this._previousStartingPointerTime = this._startingPointerTime, this._previousStartingPointerPosition.x = this._startingPointerPosition.x, this._previousStartingPointerPosition.y = this._startingPointerPosition.y, this._previousButtonPressed = gv))
            }
          }
          pv || hv(Sv, this._currentPickResult)
        }, this._onPointerMove = vv => {
          if (this._updatePointerPosition(vv), this._latestPointerMoveEvents.set(vv.pointerId, {
              event: vv,
              pointerX: this._pointerX,
              pointerY: this._pointerY,
              unTranslatedPointerX: this._unTranslatedPointerX,
              unTranslatedPointerY: this._unTranslatedPointerY
            }), this._isSwiping || -1 === this._swipeButtonPressed || (this._isSwiping = Math.abs(this._startingPointerPosition.x - this._pointerX) > yv.DragMovementThreshold || Math.abs(this._startingPointerPosition.y - this._pointerY) > yv.DragMovementThreshold), ev.isPointerLock && ev._verifyPointerLock(), this._checkPrePointerObservable(null, vv, vv.inputIndex >= nv.MouseWheelX && vv.inputIndex <= nv.MouseWheelZ ? fv.b.POINTERWHEEL : fv.b.POINTERMOVE)) return;
          if (!Sv.cameraToUseForPointers && !Sv.activeCamera) return;
          if (Sv.skipPointerMovePicking) return void this._processPointerMove(new wv.c, vv);
          this._ensurePointerMovePredicate();
          const zv = Sv._registeredActions > 0 || Sv.constantlyUpdateMeshUnderPointer ? this._pickMove(vv) : null;
          this._processPointerMove(zv, vv)
        }, this._onPointerDown = vv => {
          const zv = this._activePointerIds.indexOf(-1);
          if (-1 === zv ? this._activePointerIds.push(vv.pointerId) : this._activePointerIds[zv] = vv.pointerId, this._activePointerIdsCount++, this._pickedDownMesh = null, this._meshPickProceed = !1, yv.ExclusiveDoubleClickMode)
            for (let hv = 0; hv < this._delayedClicks.length; hv++)
              if (this._delayedClicks[hv])
                if (vv.button === hv) clearTimeout(this._delayedClicks[hv]?.timeoutId);
                else {
                  const vv = this._delayedClicks[hv].clickInfo;
                  this._doubleClickOccured = !1, vv.singleClick = !0, vv.ignore = !1;
                  const zv = this._delayedClicks[hv].evt,
                    Pv = fv.b.POINTERTAP,
                    ev = new fv.g(Pv, zv, this._currentPickResult);
                  Sv.onPointerObservable.hasObservers() && Sv.onPointerObservable.hasSpecificMask(Pv) && Sv.onPointerObservable.notifyObservers(ev, Pv), this._delayedClicks[hv] = null
                } if (this._updatePointerPosition(vv), -1 === this._swipeButtonPressed && (this._swipeButtonPressed = vv.button), Sv.preventDefaultOnPointerDown && hv && (vv.preventDefault(), hv.focus()), this._startingPointerPosition.x = this._pointerX, this._startingPointerPosition.y = this._pointerY, this._startingPointerTime = Date.now(), this._checkPrePointerObservable(null, vv, fv.b.POINTERDOWN)) return;
          if (!Sv.cameraToUseForPointers && !Sv.activeCamera) return;
          let Pv;
          this._pointerCaptures[vv.pointerId] = !0, Sv.pointerDownPredicate || (Sv.pointerDownPredicate = vv => vv.Zs && vv.isVisible && vv.isReady() && vv.isEnabled() && (!Sv.cameraToUseForPointers || 0 !== (Sv.cameraToUseForPointers.layerMask & vv.layerMask))), this._pickedDownMesh = null, Pv = Sv.skipPointerDownPicking || 0 === Sv._registeredActions && !this._checkForPicking() && !Sv.onPointerDown ? new wv.c : Sv.HW(this._unTranslatedPointerX, this._unTranslatedPointerY, Sv.pointerDownPredicate, Sv.pointerDownFastCheck, Sv.cameraToUseForPointers, Sv.pointerDownTrianglePredicate), this._processPointerDown(Pv, vv)
        }, this._onPointerUp = vv => {
          const zv = this._activePointerIds.indexOf(vv.pointerId); - 1 !== zv && (this._activePointerIds[zv] = -1, this._activePointerIdsCount--, "touch" === vv.pointerType && this._latestPointerMoveEvents.delete(vv.pointerId), this._pickedUpMesh = null, this._meshPickProceed = !1, this._updatePointerPosition(vv), Sv.preventDefaultOnPointerUp && hv && (vv.preventDefault(), hv.focus()), this._initClickEvent(Sv.onPrePointerObservable, Sv.onPointerObservable, vv, ((zv, Pv) => {
            if (Sv.onPrePointerObservable.hasObservers() && (this._skipPointerTap = !1, !zv.ignore)) {
              if (this._checkPrePointerObservable(null, vv, fv.b.POINTERUP)) return this._swipeButtonPressed === vv.button && (this._isSwiping = !1, this._swipeButtonPressed = -1), void(0 === vv.buttons && (this._pointerCaptures[vv.pointerId] = !1));
              zv.hasSwiped || (zv.singleClick && Sv.onPrePointerObservable.hasSpecificMask(fv.b.POINTERTAP) && this._checkPrePointerObservable(null, vv, fv.b.POINTERTAP) && (this._skipPointerTap = !0), zv.mp && Sv.onPrePointerObservable.hasSpecificMask(fv.b.POINTERDOUBLETAP) && this._checkPrePointerObservable(null, vv, fv.b.POINTERDOUBLETAP) && (this._skipPointerTap = !0))
            }
            this._pointerCaptures[vv.pointerId] ? (0 === vv.buttons && (this._pointerCaptures[vv.pointerId] = !1), (Sv.cameraToUseForPointers || Sv.activeCamera) && (Sv.pointerUpPredicate || (Sv.pointerUpPredicate = vv => vv.Zs && vv.isVisible && vv.isReady() && vv.isEnabled() && (!Sv.cameraToUseForPointers || 0 !== (Sv.cameraToUseForPointers.layerMask & vv.layerMask))), !this._meshPickProceed && (Fv && Fv.HasTriggers || this._checkForPicking() || Sv.onPointerUp) && this._initActionManager(null, zv), Pv || (Pv = this._currentPickResult), this._processPointerUp(Pv, vv, zv), this._previousPickResult = this._currentPickResult, this._swipeButtonPressed === vv.button && (this._isSwiping = !1, this._swipeButtonPressed = -1))) : this._swipeButtonPressed === vv.button && (this._isSwiping = !1, this._swipeButtonPressed = -1)
          })))
        }, this._onKeyDown = vv => {
          const zv = Rv.e.KEYDOWN;
          if (Sv.onPreKeyboardObservable.hasObservers()) {
            const Pv = new Rv.g(zv, vv);
            if (Sv.onPreKeyboardObservable.notifyObservers(Pv, zv), Pv.skipOnKeyboardObservable) return
          }
          if (Sv.onKeyboardObservable.hasObservers()) {
            const Pv = new Rv.h(zv, vv);
            Sv.onKeyboardObservable.notifyObservers(Pv, zv)
          }
          Sv.actionManager && Sv.actionManager.processTrigger(14, av.CreateNewFromScene(Sv, vv))
        }, this._onKeyUp = vv => {
          const zv = Rv.e.KEYUP;
          if (Sv.onPreKeyboardObservable.hasObservers()) {
            const Pv = new Rv.g(zv, vv);
            if (Sv.onPreKeyboardObservable.notifyObservers(Pv, zv), Pv.skipOnKeyboardObservable) return
          }
          if (Sv.onKeyboardObservable.hasObservers()) {
            const Pv = new Rv.h(zv, vv);
            Sv.onKeyboardObservable.notifyObservers(Pv, zv)
          }
          Sv.actionManager && Sv.actionManager.processTrigger(15, av.CreateNewFromScene(Sv, vv))
        }, this._deviceSourceManager.onDeviceConnectedObservable.add((hv => {
          hv.deviceType === Yv.Mouse ? hv.onInputChangedObservable.add((Sv => {
            this._originMouseEvent = Sv, Sv.inputIndex === nv.LeftClick || Sv.inputIndex === nv.MiddleClick || Sv.inputIndex === nv.RightClick || Sv.inputIndex === nv.BrowserBack || Sv.inputIndex === nv.BrowserForward ? zv && 1 === hv.getInput(Sv.inputIndex) ? this._onPointerDown(Sv) : vv && 0 === hv.getInput(Sv.inputIndex) && this._onPointerUp(Sv) : Pv && (Sv.inputIndex === nv.Move ? this._onPointerMove(Sv) : Sv.inputIndex !== nv.MouseWheelX && Sv.inputIndex !== nv.MouseWheelY && Sv.inputIndex !== nv.MouseWheelZ || this._onPointerMove(Sv))
          })) : hv.deviceType === Yv.Touch ? hv.onInputChangedObservable.add((Sv => {
            Sv.inputIndex === nv.LeftClick && (zv && 1 === hv.getInput(Sv.inputIndex) ? (this._onPointerDown(Sv), this._activePointerIdsCount > 1 && (this._isMultiTouchGesture = !0)) : vv && 0 === hv.getInput(Sv.inputIndex) && (this._onPointerUp(Sv), 0 === this._activePointerIdsCount && (this._isMultiTouchGesture = !1))), Pv && Sv.inputIndex === nv.Move && this._onPointerMove(Sv)
          })) : hv.deviceType === Yv.Keyboard && hv.onInputChangedObservable.add((vv => {
            "keydown" === vv.type ? this._onKeyDown(vv) : "keyup" === vv.type && this._onKeyUp(vv)
          }))
        })), this._alreadyAttached = !0
      }
      detachControl() {
        this._alreadyAttached && (this._deviceSourceManager.dispose(), this._deviceSourceManager = null, this._alreadyAttachedTo && !this._scene.doNotHandleCursors && (this._alreadyAttachedTo.style.cursor = this._scene.defaultCursor), this._alreadyAttached = !1, this._alreadyAttachedTo = null, this._latestPointerMoveEvents.clear())
      }
      setPointerOverMesh(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          Pv = arguments.length > 2 ? arguments[2] : void 0,
          hv = arguments.length > 3 ? arguments[3] : void 0;
        if (this._meshUnderPointerId[zv] === vv && (!vv || !vv._internalAbstractMeshDataInfo._pointerOverDisableMeshTesting)) return;
        const Sv = this._meshUnderPointerId[zv];
        let ev;
        Sv && (ev = Sv._getActionManagerForTrigger(10), ev && ev.processTrigger(10, new av(Sv, this._pointerX, this._pointerY, vv, hv, {
          pointerId: zv
        }))), vv ? (this._meshUnderPointerId[zv] = vv, this._pointerOverMesh = vv, ev = vv._getActionManagerForTrigger(9), ev && ev.processTrigger(9, new av(vv, this._pointerX, this._pointerY, vv, hv, {
          pointerId: zv,
          pickResult: Pv
        }))) : (delete this._meshUnderPointerId[zv], this._pointerOverMesh = null), this._scene.onMeshUnderPointerUpdatedObservable.hasObservers() && this._scene.onMeshUnderPointerUpdatedObservable.notifyObservers({
          mesh: vv,
          pointerId: zv
        })
      }
      getPointerOverMesh() {
        return this.meshUnderPointer
      }
      _invalidateMesh(vv) {
        this._pointerOverMesh === vv && (this._pointerOverMesh = null), this._pickedDownMesh === vv && (this._pickedDownMesh = null), this._pickedUpMesh === vv && (this._pickedUpMesh = null);
        for (const zv in this._meshUnderPointerId) this._meshUnderPointerId[zv] === vv && delete this._meshUnderPointerId[zv]
      }
    }
    yv.DragMovementThreshold = 10, yv.LongPressDelay = 500, yv.DoubleClickDelay = 300, yv.ExclusiveDoubleClickMode = !1;
    var Bv = Pv(39257),
      Jv = Pv(36751),
      Ev = Pv(37290);
    class ov {
      static get UniqueId() {
        const vv = this._UniqueIdCounter;
        return this._UniqueIdCounter++, vv
      }
    }
    ov._UniqueIdCounter = 1;
    var bv = Pv(39338),
      rv = Pv(39500),
      kv = Pv(36602);
    class Xv {
      constructor() {
        this.pointerDownFastCheck = !1, this.pointerUpFastCheck = !1, this.pointerMoveFastCheck = !1, this.skipPointerMovePicking = !1, this.skipPointerDownPicking = !1, this.skipPointerUpPicking = !1
      }
    }
    var uv, vz, zz, Pz, hz, Sz, ez, gz, pz, dz, Nz, lz, Tz, Wz, wz, az, sz, Cz, iz, cz, Gz, mz, jz, fz, Fz, Yz, nz, Oz, Dz, Kz, Vz, Uz, Rz, xz, tz, qz, Iz, Qz, Zz, Az, Lz, Hz, Mz, yz, Bz, Jz, Ez, oz, bz, rz, kz, Xz, uz, vP = Pv(38209),
      zP = Pv(36631);
    const PP = new lv.m,
      hP = new lv.m;
    var SP;
    ! function(vv) {
      vv[vv.BackwardCompatible = 0] = "BackwardCompatible", vv[vv.Intermediate = 1] = "Intermediate", vv[vv.Aggressive = 2] = "Aggressive"
    }(SP || (SP = {}));
    class eP {
      static DefaultMaterialFactory(vv) {
        throw (0, jv.m)("StandardMaterial")
      }
      static CollisionCoordinatorFactory() {
        throw (0, jv.m)("DefaultCollisionCoordinator")
      }
      get clearColor() {
        return this._clearColor
      }
      set clearColor(vv) {
        vv !== this._clearColor && (this._clearColor = vv, this.onClearColorChangedObservable.notifyObservers(this._clearColor))
      }
      get imageProcessingConfiguration() {
        return this._imageProcessingConfiguration
      }
      get performancePriority() {
        return this._performancePriority
      }
      set performancePriority(vv) {
        if (vv !== this._performancePriority) {
          switch (this._performancePriority = vv, vv) {
            case 0:
              this.skipFrustumClipping = !1, this._renderingManager.maintainStateBetweenFrames = !1, this.skipPointerMovePicking = !1, this.autoClear = !0;
              break;
            case 1:
              this.skipFrustumClipping = !1, this._renderingManager.maintainStateBetweenFrames = !1, this.skipPointerMovePicking = !0, this.autoClear = !1;
              break;
            case 2:
              this.skipFrustumClipping = !0, this._renderingManager.maintainStateBetweenFrames = !0, this.skipPointerMovePicking = !0, this.autoClear = !1
          }
          this.onScenePerformancePriorityChangedObservable.notifyObservers(vv)
        }
      }
      set forceWireframe(vv) {
        this._forceWireframe !== vv && (this._forceWireframe = vv, this.markAllMaterialsAsDirty(16))
      }
      get forceWireframe() {
        return this._forceWireframe
      }
      set skipFrustumClipping(vv) {
        this._skipFrustumClipping !== vv && (this._skipFrustumClipping = vv)
      }
      get skipFrustumClipping() {
        return this._skipFrustumClipping
      }
      set forcePointsCloud(vv) {
        this._forcePointsCloud !== vv && (this._forcePointsCloud = vv, this.markAllMaterialsAsDirty(16))
      }
      get forcePointsCloud() {
        return this._forcePointsCloud
      }
      get environmentTexture() {
        return this._environmentTexture
      }
      set environmentTexture(vv) {
        this._environmentTexture !== vv && (this._environmentTexture = vv, this.onEnvironmentTextureChangedObservable.notifyObservers(vv), this.markAllMaterialsAsDirty(1))
      }
      getNodes() {
        let vv = [];
        vv = vv.concat(this.meshes), vv = vv.concat(this.lights), vv = vv.concat(this.cameras), vv = vv.concat(this.transformNodes);
        for (const zv of this.skeletons) vv = vv.concat(zv.bones);
        return vv
      }
      get animationPropertiesOverride() {
        return this._animationPropertiesOverride
      }
      set animationPropertiesOverride(vv) {
        this._animationPropertiesOverride = vv
      }
      set onDispose(vv) {
        this._onDisposeObserver && this.uD.remove(this._onDisposeObserver), this._onDisposeObserver = this.uD.add(vv)
      }
      set beforeRender(vv) {
        this._onBeforeRenderObserver && this.onBeforeRenderObservable.remove(this._onBeforeRenderObserver), vv && (this._onBeforeRenderObserver = this.onBeforeRenderObservable.add(vv))
      }
      set afterRender(vv) {
        this._onAfterRenderObserver && this.onAfterRenderObservable.remove(this._onAfterRenderObserver), vv && (this._onAfterRenderObserver = this.onAfterRenderObservable.add(vv))
      }
      set beforeCameraRender(vv) {
        this._onBeforeCameraRenderObserver && this.onBeforeCameraRenderObservable.remove(this._onBeforeCameraRenderObserver), this._onBeforeCameraRenderObserver = this.onBeforeCameraRenderObservable.add(vv)
      }
      set afterCameraRender(vv) {
        this._onAfterCameraRenderObserver && this.onAfterCameraRenderObservable.remove(this._onAfterCameraRenderObserver), this._onAfterCameraRenderObserver = this.onAfterCameraRenderObservable.add(vv)
      }
      get pointerDownPredicate() {
        return this._pointerPickingConfiguration.pointerDownPredicate
      }
      set pointerDownPredicate(vv) {
        this._pointerPickingConfiguration.pointerDownPredicate = vv
      }
      get pointerUpPredicate() {
        return this._pointerPickingConfiguration.pointerUpPredicate
      }
      set pointerUpPredicate(vv) {
        this._pointerPickingConfiguration.pointerUpPredicate = vv
      }
      get pointerMovePredicate() {
        return this._pointerPickingConfiguration.pointerMovePredicate
      }
      set pointerMovePredicate(vv) {
        this._pointerPickingConfiguration.pointerMovePredicate = vv
      }
      get pointerDownFastCheck() {
        return this._pointerPickingConfiguration.pointerDownFastCheck
      }
      set pointerDownFastCheck(vv) {
        this._pointerPickingConfiguration.pointerDownFastCheck = vv
      }
      get pointerUpFastCheck() {
        return this._pointerPickingConfiguration.pointerUpFastCheck
      }
      set pointerUpFastCheck(vv) {
        this._pointerPickingConfiguration.pointerUpFastCheck = vv
      }
      get pointerMoveFastCheck() {
        return this._pointerPickingConfiguration.pointerMoveFastCheck
      }
      set pointerMoveFastCheck(vv) {
        this._pointerPickingConfiguration.pointerMoveFastCheck = vv
      }
      get skipPointerMovePicking() {
        return this._pointerPickingConfiguration.skipPointerMovePicking
      }
      set skipPointerMovePicking(vv) {
        this._pointerPickingConfiguration.skipPointerMovePicking = vv
      }
      get skipPointerDownPicking() {
        return this._pointerPickingConfiguration.skipPointerDownPicking
      }
      set skipPointerDownPicking(vv) {
        this._pointerPickingConfiguration.skipPointerDownPicking = vv
      }
      get skipPointerUpPicking() {
        return this._pointerPickingConfiguration.skipPointerUpPicking
      }
      set skipPointerUpPicking(vv) {
        this._pointerPickingConfiguration.skipPointerUpPicking = vv
      }
      get unTranslatedPointer() {
        return this._inputManager.unTranslatedPointer
      }
      static get DragMovementThreshold() {
        return yv.DragMovementThreshold
      }
      static set DragMovementThreshold(vv) {
        yv.DragMovementThreshold = vv
      }
      static get LongPressDelay() {
        return yv.LongPressDelay
      }
      static set LongPressDelay(vv) {
        yv.LongPressDelay = vv
      }
      static get DoubleClickDelay() {
        return yv.DoubleClickDelay
      }
      static set DoubleClickDelay(vv) {
        yv.DoubleClickDelay = vv
      }
      static get ExclusiveDoubleClickMode() {
        return yv.ExclusiveDoubleClickMode
      }
      static set ExclusiveDoubleClickMode(vv) {
        yv.ExclusiveDoubleClickMode = vv
      }
      get _eyePosition() {
        return this._forcedViewPosition ?? this.activeCamera?.globalPosition ?? lv.l.ZeroReadOnly
      }
      bindEyePosition(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "vEyePosition",
          Pv = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const hv = this._eyePosition,
          Sv = this.useRightHandedSystem === (null != this._mirroredCameraPosition),
          ev = this.floatingOriginOffset,
          gv = PP.set(hv.x, hv.y, hv.z, Sv ? -1 : 1),
          pv = gv.subtractFromFloatsToRef(ev.x, ev.y, ev.z, 0, hP);
        return vv && (Pv ? vv.setFloat3(zv, pv.x, pv.y, pv.z) : vv.setVector4(zv, pv)), gv
      }
      finalizeSceneUbo() {
        const vv = this.getSceneUniformBuffer(),
          zv = this.bindEyePosition(null),
          Pv = this.floatingOriginOffset;
        return vv.updateFloat4("vEyePosition", zv.x - Pv.x, zv.y - Pv.y, zv.z - Pv.z, zv.w), vv.update(), vv
      }
      set useRightHandedSystem(vv) {
        this._useRightHandedSystem !== vv && (this._useRightHandedSystem = vv, this.markAllMaterialsAsDirty(16))
      }
      get useRightHandedSystem() {
        return this._useRightHandedSystem
      }
      setStepId(vv) {
        this._currentStepId = vv
      }
      getStepId() {
        return this._currentStepId
      }
      getInternalStep() {
        return this._currentInternalStep
      }
      set fogEnabled(vv) {
        this._fogEnabled !== vv && (this._fogEnabled = vv, this.markAllMaterialsAsDirty(16))
      }
      get fogEnabled() {
        return this._fogEnabled
      }
      set fogMode(vv) {
        this._fogMode !== vv && (this._fogMode = vv, this.markAllMaterialsAsDirty(16))
      }
      get fogMode() {
        return this._fogMode
      }
      get prePass() {
        return !!this.prePassRenderer && this.prePassRenderer.defaultRT.enabled
      }
      set shadowsEnabled(vv) {
        this._shadowsEnabled !== vv && (this._shadowsEnabled = vv, this.markAllMaterialsAsDirty(2))
      }
      get shadowsEnabled() {
        return this._shadowsEnabled
      }
      set lightsEnabled(vv) {
        this._lightsEnabled !== vv && (this._lightsEnabled = vv, this.markAllMaterialsAsDirty(2))
      }
      get lightsEnabled() {
        return this._lightsEnabled
      }
      get activeCameras() {
        return this._activeCameras
      }
      set activeCameras(vv) {
        this._unObserveActiveCameras && (this._unObserveActiveCameras(), this._unObserveActiveCameras = null), vv && (this._unObserveActiveCameras = (0, kv.i)(vv, (() => {
          this.onActiveCamerasChanged.notifyObservers(this)
        }))), this._activeCameras = vv
      }
      get activeCamera() {
        return this._activeCamera
      }
      set activeCamera(vv) {
        vv !== this._activeCamera && (this._activeCamera = vv, this.onActiveCameraChanged.notifyObservers(this))
      }
      get _hasDefaultMaterial() {
        return eP.DefaultMaterialFactory !== eP._OriginalDefaultMaterialFactory
      }
      get defaultMaterial() {
        return this._defaultMaterial || (this._defaultMaterial = eP.DefaultMaterialFactory(this)), this._defaultMaterial
      }
      set defaultMaterial(vv) {
        this._defaultMaterial = vv
      }
      set texturesEnabled(vv) {
        this._texturesEnabled !== vv && (this._texturesEnabled = vv, this.markAllMaterialsAsDirty(1))
      }
      get texturesEnabled() {
        return this._texturesEnabled
      }
      get frameGraph() {
        return this._frameGraph
      }
      set frameGraph(vv) {
        if (this._frameGraph) return this._frameGraph = vv, void(vv || (this.customRenderFunction = this._currentCustomRenderFunction));
        this._frameGraph = vv, vv && (this._currentCustomRenderFunction = this.customRenderFunction, this.customRenderFunction = this._renderWithFrameGraph, this.activeCamera = null)
      }
      set skeletonsEnabled(vv) {
        this._skeletonsEnabled !== vv && (this._skeletonsEnabled = vv, this.markAllMaterialsAsDirty(8))
      }
      get skeletonsEnabled() {
        return this._skeletonsEnabled
      }
      get collisionCoordinator() {
        return this._collisionCoordinator || (this._collisionCoordinator = eP.CollisionCoordinatorFactory(), this._collisionCoordinator.init(this)), this._collisionCoordinator
      }
      get renderingManager() {
        return this._renderingManager
      }
      get frustumPlanes() {
        return this._frustumPlanes
      }
      _registerTransientComponents() {
        if (this._transientComponents.length > 0) {
          for (const vv of this._transientComponents) vv.register();
          this._transientComponents.length = 0
        }
      }
      Ezv(vv) {
        this._components.push(vv), this._transientComponents.push(vv);
        const zv = vv;
        zv.addFromContainer && zv.serialize && this._serializableComponents.push(zv)
      }
      _getComponent(vv) {
        for (const zv of this._components)
          if (zv.name === vv) return zv;
        return null
      }
      get uniqueId() {
        return this._uniqueId
      }
      constructor(vv, zv) {
        this._inputManager = new yv(this), this.cameraToUseForPointers = null, this._isScene = !0, this._blockEntityCollection = !1, this.autoClear = !0, this.autoClearDepthAndStencil = !0, this._clearColor = new Jv.e(.2, .2, .3, 1), this.onClearColorChangedObservable = new gv.c, this.ambientColor = new Jv.b(0, 0, 0), this.environmentIntensity = 1, this.iblIntensity = 1, this._performancePriority = 0, this.onScenePerformancePriorityChangedObservable = new gv.c, this._forceWireframe = !1, this._skipFrustumClipping = !1, this._forcePointsCloud = !1, this.rootNodes = [], this.cameras = [], this.lights = [], this.meshes = [], this.skeletons = [], this.mF = [], this.animations = [], this.animationGroups = [], this.multiMaterials = [], this.materials = [], this.morphTargetManagers = [], this.geometries = [], this.transformNodes = [], this.actionManagers = [], this.objectRenderers = [], this.textures = [], this._environmentTexture = null, this.postProcesses = [], this.effectLayers = [], this.sounds = null, this.layers = [], this.lensFlareSystems = [], this.proceduralTextures = [], this.animationsEnabled = !0, this._animationPropertiesOverride = null, this.useConstantAnimationDeltaTime = !1, this.constantlyUpdateMeshUnderPointer = !1, this.hoverCursor = "pointer", this.defaultCursor = "", this.doNotHandleCursors = !1, this.preventDefaultOnPointerDown = !0, this.preventDefaultOnPointerUp = !0, this.metadata = null, this.reservedDataStore = null, this.disableOfflineSupportExceptionRules = [], this.uD = new gv.c, this._onDisposeObserver = null, this.onBeforeRenderObservable = new gv.c, this._onBeforeRenderObserver = null, this.onAfterRenderObservable = new gv.c, this.onAfterRenderCameraObservable = new gv.c, this._onAfterRenderObserver = null, this.onBeforeAnimationsObservable = new gv.c, this.onAfterAnimationsObservable = new gv.c, this.onBeforeDrawPhaseObservable = new gv.c, this.onAfterDrawPhaseObservable = new gv.c, this.onReadyObservable = new gv.c, this.onBeforeCameraRenderObservable = new gv.c, this._onBeforeCameraRenderObserver = null, this.onAfterCameraRenderObservable = new gv.c, this._onAfterCameraRenderObserver = null, this.onBeforeActiveMeshesEvaluationObservable = new gv.c, this.onAfterActiveMeshesEvaluationObservable = new gv.c, this.onBeforeParticlesRenderingObservable = new gv.c, this.onAfterParticlesRenderingObservable = new gv.c, this.onDataLoadedObservable = new gv.c, this.onNewCameraAddedObservable = new gv.c, this.onCameraRemovedObservable = new gv.c, this.onNewLightAddedObservable = new gv.c, this.onLightRemovedObservable = new gv.c, this.onNewGeometryAddedObservable = new gv.c, this.onGeometryRemovedObservable = new gv.c, this.onNewTransformNodeAddedObservable = new gv.c, this.onTransformNodeRemovedObservable = new gv.c, this.onNewMeshAddedObservable = new gv.c, this.onMeshRemovedObservable = new gv.c, this.onNewSkeletonAddedObservable = new gv.c, this.onSkeletonRemovedObservable = new gv.c, this.onNewParticleSystemAddedObservable = new gv.c, this.onParticleSystemRemovedObservable = new gv.c, this.onNewAnimationGroupAddedObservable = new gv.c, this.onAnimationGroupRemovedObservable = new gv.c, this.onNewMaterialAddedObservable = new gv.c, this.onNewMultiMaterialAddedObservable = new gv.c, this.onMaterialRemovedObservable = new gv.c, this.onMultiMaterialRemovedObservable = new gv.c, this.onNewTextureAddedObservable = new gv.c, this.onTextureRemovedObservable = new gv.c, this.onNewFrameGraphAddedObservable = new gv.c, this.onFrameGraphRemovedObservable = new gv.c, this.onNewObjectRendererAddedObservable = new gv.c, this.onObjectRendererRemovedObservable = new gv.c, this.onNewPostProcessAddedObservable = new gv.c, this.onPostProcessRemovedObservable = new gv.c, this.onNewEffectLayerAddedObservable = new gv.c, this.onEffectLayerRemovedObservable = new gv.c, this.onBeforeRenderTargetsRenderObservable = new gv.c, this.onAfterRenderTargetsRenderObservable = new gv.c, this.onBeforeStepObservable = new gv.c, this.onAfterStepObservable = new gv.c, this.onActiveCameraChanged = new gv.c, this.onActiveCamerasChanged = new gv.c, this.onBeforeRenderingGroupObservable = new gv.c, this.onAfterRenderingGroupObservable = new gv.c, this.onMeshImportedObservable = new gv.c, this.onAnimationFileImportedObservable = new gv.c, this.onEnvironmentTextureChangedObservable = new gv.c, this.onMeshUnderPointerUpdatedObservable = new gv.c, this._registeredForLateAnimationBindings = new pv.e(256), this._pointerPickingConfiguration = new Xv, this.onPrePointerObservable = new gv.c, this.onPointerObservable = new gv.c, this.onPreKeyboardObservable = new gv.c, this.onKeyboardObservable = new gv.c, this._useRightHandedSystem = !1, this._timeAccumulator = 0, this._currentStepId = 0, this._currentInternalStep = 0, this._fogEnabled = !0, this._fogMode = eP.FOGMODE_NONE, this.fogColor = new Jv.b(.2, .2, .3), this.fogDensity = .1, this.fogStart = 0, this.fogEnd = 1e3, this.needsPreviousWorldMatrices = !1, this._shadowsEnabled = !0, this._lightsEnabled = !0, this._unObserveActiveCameras = null, this._texturesEnabled = !0, this._frameGraph = null, this.frameGraphs = [], this.IU = !0, this.particlesEnabled = !0, this.spritesEnabled = !0, this._skeletonsEnabled = !0, this.lensFlaresEnabled = !0, this.collisionsEnabled = !0, this.gravity = new lv.l(0, -9.807, 0), this.postProcessesEnabled = !0, this.renderTargetsEnabled = !0, this.dumpNextRenderTargets = !1, this.customRenderTargets = [], this.importedMeshesFiles = [], this.probesEnabled = !0, this._meshesForIntersections = new pv.e(256), this.proceduralTexturesEnabled = !0, this._totalVertices = new Bv.c, this._activeIndices = new Bv.c, this._activeParticles = new Bv.c, this._activeBones = new Bv.c, this._animationTime = 0, this.animationTimeScale = 1, this._renderId = 0, this._frameId = 0, this._renderingMeshEvaluationDepth = 0, this._executeWhenReadyTimeoutId = null, this._intermediateRendering = !1, this._defaultFrameBufferCleared = !1, this._viewUpdateFlag = -1, this._projectionUpdateFlag = -1, this._toBeDisposed = new Array(256), this._activeRequests = new Array, this._delayedFileRequests = null, this._pendingData = [], this._isDisposed = !1, this._isDisposing = !1, this._isReadyChecks = [], this.dispatchAllSubMeshesOfActiveMeshes = !1, this._activeMeshes = new pv.g(256), this._processedMaterials = new pv.g(256), this._renderTargets = new pv.e(256), this._materialsRenderTargets = new pv.e(256), this._activeParticleSystems = new pv.g(256), this._activeSkeletons = new pv.e(32), this._softwareSkinnedMeshes = new pv.e(32), this._activeAnimatables = new Array, this._animationWrites = new Array, this._animationWriteCount = 0, this._animationStepWriteCount = 0, this._animationStepEvaluated = !1, this._transformMatrix = lv.c.Zero(), this.requireLightSorting = !1, this._components = [], this._serializableComponents = [], this._transientComponents = [], this._beforeCameraUpdateStage = cv.e.Create(), this._beforeClearStage = cv.e.Create(), this._beforeRenderTargetClearStage = cv.e.Create(), this._gatherRenderTargetsStage = cv.e.Create(), this._gatherActiveCameraRenderTargetsStage = cv.e.Create(), this._isReadyForMeshStage = cv.e.Create(), this._beforeEvaluateActiveMeshStage = cv.e.Create(), this._evaluateSubMeshStage = cv.e.Create(), this._preActiveMeshStage = cv.e.Create(), this._cameraDrawRenderTargetStage = cv.e.Create(), this._beforeCameraDrawStage = cv.e.Create(), this._beforeRenderTargetDrawStage = cv.e.Create(), this._beforeRenderingGroupDrawStage = cv.e.Create(), this._beforeRenderingMeshStage = cv.e.Create(), this._afterRenderingMeshStage = cv.e.Create(), this._afterRenderingGroupDrawStage = cv.e.Create(), this._afterCameraDrawStage = cv.e.Create(), this._afterCameraPostProcessStage = cv.e.Create(), this._afterRenderTargetDrawStage = cv.e.Create(), this._afterRenderTargetPostProcessStage = cv.e.Create(), this._afterRenderStage = cv.e.Create(), this._pointerMoveStage = cv.e.Create(), this._pointerDownStage = cv.e.Create(), this._pointerUpStage = cv.e.Create(), this._geometriesByUniqueId = null, this._uniqueId = 0, this._defaultMeshCandidates = {
          data: [],
          length: 0
        }, this._defaultSubMeshCandidates = {
          data: [],
          length: 0
        }, this.onReadyTimeoutObservable = new gv.c, this.onReadyTimeoutDuration = 12e4, this._timeoutChecksStartTime = 0, this._floatingOriginScene = void 0, this._preventFreeActiveMeshesAndRenderingGroups = !1, this._activeMeshesFrozen = !1, this._activeMeshesFrozenButKeepClipping = !1, this._skipEvaluateActiveMeshesCompletely = !1, this._freezeActiveMeshesCancel = null, this._useCurrentFrameBuffer = !1, this._allowPostProcessClearColor = !0, this.getDeterministicFrameTime = () => this._engine.getTimeStep(), this._getFloatingOriginScene = () => this._floatingOriginScene, this._registeredActions = 0, this._blockMaterialDirtyMechanism = !1, this._perfCollector = null, this.activeCameras = [], this._uniqueId = this.getUniqueId();
        const Pv = {
          useGeometryUniqueIdsMap: !0,
          useMaterialMeshMap: !0,
          useClonedMeshMap: !0,
          virtual: !1,
          defaultCameraLayerMask: 268435455,
          defaultRenderableLayerMask: 268435455,
          ...zv
        };
        this.defaultCameraLayerMask = Pv.defaultCameraLayerMask, this.defaultRenderableLayerMask = Pv.defaultRenderableLayerMask, vv = this._engine = vv || mv.e.LastCreatedEngine, Pv.virtual ? vv._virtualScenes.push(this) : (mv.e._LastCreatedScene = this, vv.scenes.push(this)), (vv.getCreationOptions().useLargeWorldRendering || zv?.useFloatingOrigin) && ((0, Cv.e)(), this._floatingOriginScene = this, Cv.d.rD = this._getFloatingOriginScene), this._uid = null, this._renderingManager = new iv.b(this), sv.d && (this.postProcessManager = new sv.d(this)), (0, Gv.l)() && this.attachControl(), this._createUbo(), Tv.b && (this._imageProcessingConfiguration = new Tv.b), this.setDefaultCandidateProviders(), Pv.useGeometryUniqueIdsMap && (this._geometriesByUniqueId = {}), this.useMaterialMeshMap = Pv.useMaterialMeshMap, this.useClonedMeshMap = Pv.useClonedMeshMap, zv && zv.virtual || vv.onNewSceneAddedObservable.notifyObservers(this)
      }
      getClassName() {
        return "Scene"
      }
      _getDefaultMeshCandidates() {
        return this._defaultMeshCandidates.data = this.meshes, this._defaultMeshCandidates.length = this.meshes.length, this._defaultMeshCandidates
      }
      _getDefaultSubMeshCandidates(vv) {
        return this._defaultSubMeshCandidates.data = vv.sF, this._defaultSubMeshCandidates.length = vv.sF.length, this._defaultSubMeshCandidates
      }
      setDefaultCandidateProviders() {
        this.getActiveMeshCandidates = () => this._getDefaultMeshCandidates(), this.getActiveSubMeshCandidates = vv => this._getDefaultSubMeshCandidates(vv), this.getIntersectingSubMeshCandidates = (vv, zv) => this._getDefaultSubMeshCandidates(vv), this.getCollidingSubMeshCandidates = (vv, zv) => this._getDefaultSubMeshCandidates(vv)
      }
      get meshUnderPointer() {
        return this._inputManager.meshUnderPointer
      }
      get pointerX() {
        return this._inputManager.pointerX
      }
      set pointerX(vv) {
        this._inputManager.pointerX = vv
      }
      get pointerY() {
        return this._inputManager.pointerY
      }
      set pointerY(vv) {
        this._inputManager.pointerY = vv
      }
      getCachedMaterial() {
        return this._cachedMaterial
      }
      getCachedEffect() {
        return this._cachedEffect
      }
      getCachedVisibility() {
        return this._cachedVisibility
      }
      isCachedMaterialInvalid(vv, zv) {
        let Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        return this._cachedEffect !== zv || this._cachedMaterial !== vv || this._cachedVisibility !== Pv
      }
      ma() {
        return this._engine
      }
      getTotalVertices() {
        return this._totalVertices.current
      }
      get totalVerticesPerfCounter() {
        return this._totalVertices
      }
      getActiveIndices() {
        return this._activeIndices.current
      }
      get totalActiveIndicesPerfCounter() {
        return this._activeIndices
      }
      getActiveParticles() {
        return this._activeParticles.current
      }
      get activeParticlesPerfCounter() {
        return this._activeParticles
      }
      getActiveBones() {
        return this._activeBones.current
      }
      get activeBonesPerfCounter() {
        return this._activeBones
      }
      getActiveMeshes() {
        return this._activeMeshes
      }
      getAnimationRatio() {
        return void 0 !== this._animationRatio ? this._animationRatio : 1
      }
      getRenderId() {
        return this._renderId
      }
      getFrameId() {
        return this._frameId
      }
      incrementRenderId() {
        this._renderId++
      }
      _createUbo() {
        this.setSceneUniformBuffer(this.createSceneUniformBuffer())
      }
      simulatePointerMove(vv, zv) {
        return this._inputManager.simulatePointerMove(vv, zv), this
      }
      simulatePointerDown(vv, zv) {
        return this._inputManager.simulatePointerDown(vv, zv), this
      }
      simulatePointerUp(vv, zv, Pv) {
        return this._inputManager.simulatePointerUp(vv, zv, Pv), this
      }
      isPointerCaptured() {
        let vv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return this._inputManager.isPointerCaptured(vv)
      }
      attachControl() {
        let vv = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          zv = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          Pv = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this._inputManager.attachControl(vv, zv, Pv)
      }
      detachControl() {
        this._inputManager.detachControl()
      }
      isReady() {
        let vv, zv = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        if (this._isDisposed) return !1;
        const Pv = this.ma(),
          hv = Pv.currentRenderPassId;
        Pv.currentRenderPassId = this.activeCamera?.renderPassId ?? hv;
        let Sv = !0;
        for (this._pendingData.length > 0 && (Sv = !1), this.prePassRenderer?.update(), this.useOrderIndependentTransparency && this.depthPeelingRenderer && Sv && (Sv = this.depthPeelingRenderer.isReady()), zv && (this._processedMaterials.reset(), this._materialsRenderTargets.reset()), vv = 0; vv < this.meshes.length; vv++) {
          const hv = this.meshes[vv];
          if (!hv.sF || 0 === hv.sF.length) continue;
          if (!hv.isReady(!0)) {
            Sv = !1;
            continue
          }
          const ev = hv.hasThinInstances || "InstancedMesh" === hv.getClassName() || "InstancedLinesMesh" === hv.getClassName() || Pv.getCaps().instancedArrays && hv.instances.length > 0;
          for (let vv = 0, zv = this._isReadyForMeshStage; vv < zv.length; vv++) {
            zv[vv].action(hv, ev) || (Sv = !1)
          }
          if (!zv) continue;
          const gv = hv.material || this.defaultMaterial;
          if (gv)
            if (gv._storeEffectOnSubMeshes)
              for (const vv of hv.sF) {
                const zv = vv.na();
                zv && zv.hasRenderTargetTextures && null != zv.getRenderTargetTextures && -1 === this._processedMaterials.indexOf(zv) && (this._processedMaterials.push(zv), this._materialsRenderTargets.concatWithNoDuplicate(zv.getRenderTargetTextures()))
              } else gv.hasRenderTargetTextures && null != gv.getRenderTargetTextures && -1 === this._processedMaterials.indexOf(gv) && (this._processedMaterials.push(gv), this._materialsRenderTargets.concatWithNoDuplicate(gv.getRenderTargetTextures()))
        }
        if (zv) {
          for (vv = 0; vv < this._materialsRenderTargets.length; ++vv) {
            this._materialsRenderTargets.data[vv].isReadyForRendering() || (Sv = !1)
          }
          for (vv = 0; vv < this.customRenderTargets.length; ++vv) {
            this.customRenderTargets[vv].isReadyForRendering() || (Sv = !1)
          }
        }
        for (vv = 0; vv < this.geometries.length; vv++) {
          2 === this.geometries[vv].delayLoadState && (Sv = !1)
        }
        if (this.activeCameras && this.activeCameras.length > 0)
          for (const ev of this.activeCameras) ev.isReady(!0) || (Sv = !1);
        else this.activeCamera && (this.activeCamera.isReady(!0) || (Sv = !1));
        for (const ev of this.mF) ev.isReady() || (Sv = !1);
        if (this.proceduralTexturesEnabled)
          for (const ev of this.proceduralTextures) ev.isReady() || (Sv = !1);
        if (this.layers)
          for (const ev of this.layers) ev.isReady() || (Sv = !1);
        if (this.effectLayers)
          for (const ev of this.effectLayers) ev.isLayerReady() || (Sv = !1);
        for (const ev of this._isReadyChecks) ev.isReady() || (Sv = !1);
        return Pv.areAllEffectsReady() || (Sv = !1), Pv.currentRenderPassId = hv, Sv
      }
      resetCachedMaterial() {
        this._cachedMaterial = null, this._cachedEffect = null, this._cachedVisibility = null
      }
      registerBeforeRender(vv) {
        this.onBeforeRenderObservable.add(vv)
      }
      unregisterBeforeRender(vv) {
        this.onBeforeRenderObservable.removeCallback(vv)
      }
      registerAfterRender(vv) {
        this.onAfterRenderObservable.add(vv)
      }
      unregisterAfterRender(vv) {
        this.onAfterRenderObservable.removeCallback(vv)
      }
      _executeOnceBeforeRender(vv) {
        const zv = () => {
          vv(), setTimeout((() => {
            this.unregisterBeforeRender(zv)
          }))
        };
        this.registerBeforeRender(zv)
      }
      executeOnceBeforeRender(vv, zv) {
        void 0 !== zv ? setTimeout((() => {
          this._executeOnceBeforeRender(vv)
        }), zv) : this._executeOnceBeforeRender(vv)
      }
      addPendingData(vv) {
        this._pendingData.push(vv)
      }
      removePendingData(vv) {
        const zv = this.isLoading,
          Pv = this._pendingData.indexOf(vv); - 1 !== Pv && this._pendingData.splice(Pv, 1), zv && !this.isLoading && this.onDataLoadedObservable.notifyObservers(this)
      }
      getWaitingItemsCount() {
        return this._pendingData.length
      }
      get isLoading() {
        return this._pendingData.length > 0
      }
      addIsReadyCheck(vv) {
        -1 === this._isReadyChecks.indexOf(vv) && this._isReadyChecks.push(vv)
      }
      removeIsReadyCheck(vv) {
        const zv = this._isReadyChecks.indexOf(vv); - 1 !== zv && this._isReadyChecks.splice(zv, 1)
      }
      executeWhenReady(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this.onReadyObservable.addOnce(vv), null === this._executeWhenReadyTimeoutId && this._checkIsReady(zv)
      }
      async whenReadyAsync() {
        let vv = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return await new Promise((zv => {
          this.executeWhenReady((() => {
            zv()
          }), vv)
        }))
      }
      _clearReadynessChecksData() {
        this._timeoutChecksStartTime = 0, this.onReadyTimeoutObservable.clear(), this.onReadyObservable.clear(), this._executeWhenReadyTimeoutId = null
      }
      _checkIsReady() {
        let vv = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this._registerTransientComponents(), 0 === this._timeoutChecksStartTime) this._timeoutChecksStartTime = ev.c.Now;
        else if (this.onReadyTimeoutDuration > 0 && ev.c.Now - this._timeoutChecksStartTime > this.onReadyTimeoutDuration) return this.onReadyTimeoutObservable.notifyObservers(this), void this._clearReadynessChecksData();
        if (this.isReady(vv)) return this.onReadyObservable.notifyObservers(this), void this._clearReadynessChecksData();
        this._isDisposed ? this._clearReadynessChecksData() : this._executeWhenReadyTimeoutId = setTimeout((() => {
          this.incrementRenderId(), this._checkIsReady(vv)
        }), 100)
      }
      get animatables() {
        return this._activeAnimatables
      }
      resetLastAnimationTimeFrame() {
        this._animationTimeLast = ev.c.Now
      }
      getViewMatrix() {
        return this._viewMatrix
      }
      getProjectionMatrix() {
        return this._projectionMatrix
      }
      getInverseProjectionMatrix() {
        return this._inverseProjectionMatrix
      }
      getTransformMatrix() {
        return this._transformMatrix
      }
      setTransformMatrix(vv, zv, Pv, hv) {
        this._multiviewSceneUboIsActive = !!(Pv && hv && this._multiviewSceneUbo), this._viewUpdateFlag === vv.updateFlag && this._projectionUpdateFlag === zv.updateFlag || (this._viewUpdateFlag = vv.updateFlag, this._projectionUpdateFlag = zv.updateFlag, this._viewMatrix = vv, this._projectionMatrix = zv, this._inverseProjectionMatrix || (this._inverseProjectionMatrix = new lv.c), this._projectionMatrix.invertToRef(this._inverseProjectionMatrix), this._viewMatrix.multiplyToRef(this._projectionMatrix, this._transformMatrix), this._frustumPlanes ? Ev.c.GetPlanesToRef(this._transformMatrix, this._frustumPlanes) : this._frustumPlanes = Ev.c.GetPlanes(this._transformMatrix), this._multiviewSceneUboIsActive && this._multiviewSceneUbo.useUbo ? this._updateMultiviewUbo(Pv, hv) : this._sceneUbo.useUbo && (this._sceneUbo.Xu("viewProjection", this._transformMatrix), this._sceneUbo.Xu("view", this._viewMatrix), this._sceneUbo.Xu("projection", this._projectionMatrix), this._sceneUbo.Xu("inverseProjection", this._inverseProjectionMatrix)))
      }
      getSceneUniformBuffer() {
        return this._multiviewSceneUboIsActive && this._multiviewSceneUbo ? this._multiviewSceneUbo : this._sceneUbo
      }
      createSceneUniformBuffer(vv, zv) {
        const Pv = "boolean" === typeof zv ? zv : zv?.trackUBOsInFrame,
          hv = new Wv.e(this._engine, void 0, !1, vv ?? "Is", void 0, Pv);
        return hv.addUniform("viewProjection", 16), hv.addUniform("view", 16), hv.addUniform("projection", 16), hv.addUniform("vEyePosition", 4), hv.addUniform("inverseProjection", 16), hv
      }
      setSceneUniformBuffer(vv) {
        this._sceneUbo = vv, this._viewUpdateFlag = -1, this._projectionUpdateFlag = -1
      }
      get floatingOriginMode() {
        return void 0 !== this._floatingOriginScene
      }
      get floatingOriginOffset() {
        return this.floatingOriginMode ? this._eyePosition : lv.l.ZeroReadOnly
      }
      getUniqueId() {
        return ov.UniqueId
      }
      NPv(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (!this._blockEntityCollection && (this.meshes.push(vv), vv._resyncLightSources(), vv.parent || vv._addToSceneRootNodes(), Sv.e.SetImmediate((() => {
            this.onNewMeshAddedObservable.notifyObservers(vv)
          })), zv)) {
          const zv = vv.getChildMeshes();
          for (const vv of zv) this.NPv(vv)
        }
      }
      sK(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const Pv = this.meshes.indexOf(vv);
        if (-1 !== Pv && (this.meshes.splice(Pv, 1), vv.parent || vv._removeFromSceneRootNodes()), this._inputManager._invalidateMesh(vv), this.onMeshRemovedObservable.notifyObservers(vv), zv) {
          const zv = vv.getChildMeshes();
          for (const vv of zv) this.sK(vv)
        }
        return Pv
      }
      addTransformNode(vv) {
        this._blockEntityCollection || vv.rD() === this && -1 !== vv._indexInSceneTransformNodesArray || (vv._indexInSceneTransformNodesArray = this.transformNodes.length, this.transformNodes.push(vv), vv.parent || vv._addToSceneRootNodes(), this.onNewTransformNodeAddedObservable.notifyObservers(vv))
      }
      removeTransformNode(vv) {
        const zv = vv._indexInSceneTransformNodesArray;
        if (-1 !== zv) {
          if (zv !== this.transformNodes.length - 1) {
            const vv = this.transformNodes[this.transformNodes.length - 1];
            this.transformNodes[zv] = vv, vv._indexInSceneTransformNodesArray = zv
          }
          vv._indexInSceneTransformNodesArray = -1, this.transformNodes.pop(), vv.parent || vv._removeFromSceneRootNodes()
        }
        return this.onTransformNodeRemovedObservable.notifyObservers(vv), zv
      }
      removeSkeleton(vv) {
        const zv = this.skeletons.indexOf(vv);
        return -1 !== zv && (this.skeletons.splice(zv, 1), this.onSkeletonRemovedObservable.notifyObservers(vv), this._executeActiveContainerCleanup(this._activeSkeletons)), zv
      }
      removeMorphTargetManager(vv) {
        const zv = this.morphTargetManagers.indexOf(vv);
        return -1 !== zv && this.morphTargetManagers.splice(zv, 1), zv
      }
      removeLight(vv) {
        const zv = this.lights.indexOf(vv);
        if (-1 !== zv) {
          for (const zv of this.meshes) zv._removeLightSource(vv, !1);
          this.lights.splice(zv, 1), this.sortLightsByPriority(), vv.parent || vv._removeFromSceneRootNodes(), this.onLightRemovedObservable.notifyObservers(vv)
        }
        return zv
      }
      removeCamera(vv) {
        const zv = this.cameras.indexOf(vv);
        if (-1 !== zv && (this.cameras.splice(zv, 1), vv.parent || vv._removeFromSceneRootNodes()), this.activeCameras) {
          const zv = this.activeCameras.indexOf(vv); - 1 !== zv && this.activeCameras.splice(zv, 1)
        }
        return this.activeCamera === vv && (this.cameras.length > 0 ? this.activeCamera = this.cameras[0] : this.activeCamera = null), this.onCameraRemovedObservable.notifyObservers(vv), zv
      }
      removeParticleSystem(vv) {
        const zv = this.mF.indexOf(vv);
        return -1 !== zv && (this.mF.splice(zv, 1), this._executeActiveContainerCleanup(this._activeParticleSystems)), this.onParticleSystemRemovedObservable.notifyObservers(vv), zv
      }
      removeAnimation(vv) {
        const zv = this.animations.indexOf(vv);
        return -1 !== zv && this.animations.splice(zv, 1), zv
      }
      stopAnimation(vv, zv, Pv) {}
      removeAnimationGroup(vv) {
        const zv = this.animationGroups.indexOf(vv);
        return -1 !== zv && this.animationGroups.splice(zv, 1), this.onAnimationGroupRemovedObservable.notifyObservers(vv), zv
      }
      removeMultiMaterial(vv) {
        const zv = this.multiMaterials.indexOf(vv);
        return -1 !== zv && this.multiMaterials.splice(zv, 1), this.onMultiMaterialRemovedObservable.notifyObservers(vv), zv
      }
      removeMaterial(vv) {
        const zv = vv._indexInSceneMaterialArray;
        if (-1 !== zv && zv < this.materials.length) {
          if (zv !== this.materials.length - 1) {
            const vv = this.materials[this.materials.length - 1];
            this.materials[zv] = vv, vv._indexInSceneMaterialArray = zv
          }
          vv._indexInSceneMaterialArray = -1, this.materials.pop()
        }
        return this.onMaterialRemovedObservable.notifyObservers(vv), zv
      }
      removeActionManager(vv) {
        const zv = this.actionManagers.indexOf(vv);
        return -1 !== zv && this.actionManagers.splice(zv, 1), zv
      }
      removeTexture(vv) {
        const zv = this.textures.indexOf(vv);
        return -1 !== zv && this.textures.splice(zv, 1), this.onTextureRemovedObservable.notifyObservers(vv), zv
      }
      removeFrameGraph(vv) {
        const zv = this.frameGraphs.indexOf(vv);
        return -1 !== zv && this.frameGraphs.splice(zv, 1), this.onFrameGraphRemovedObservable.notifyObservers(vv), zv
      }
      removeObjectRenderer(vv) {
        const zv = this.objectRenderers.indexOf(vv);
        return -1 !== zv && this.objectRenderers.splice(zv, 1), this.onObjectRendererRemovedObservable.notifyObservers(vv), zv
      }
      removePostProcess(vv) {
        const zv = this.postProcesses.indexOf(vv);
        return -1 !== zv && this.postProcesses.splice(zv, 1), this.onPostProcessRemovedObservable.notifyObservers(vv), zv
      }
      removeEffectLayer(vv) {
        const zv = this.effectLayers.indexOf(vv);
        return -1 !== zv && this.effectLayers.splice(zv, 1), this.onEffectLayerRemovedObservable.notifyObservers(vv), zv
      }
      addLight(vv) {
        if (!this._blockEntityCollection) {
          this.lights.push(vv), this.sortLightsByPriority(), vv.parent || vv._addToSceneRootNodes();
          for (const zv of this.meshes) - 1 === zv.lightSources.indexOf(vv) && (zv.lightSources.push(vv), zv._resyncLightSources());
          Sv.e.SetImmediate((() => {
            this.onNewLightAddedObservable.notifyObservers(vv)
          }))
        }
      }
      sortLightsByPriority() {
        this.requireLightSorting && this.lights.sort(rv.c.CompareLightsPriority)
      }
      addCamera(vv) {
        this._blockEntityCollection || (this.cameras.push(vv), Sv.e.SetImmediate((() => {
          this.onNewCameraAddedObservable.notifyObservers(vv)
        })), vv.parent || vv._addToSceneRootNodes())
      }
      addSkeleton(vv) {
        this._blockEntityCollection || (this.skeletons.push(vv), Sv.e.SetImmediate((() => {
          this.onNewSkeletonAddedObservable.notifyObservers(vv)
        })))
      }
      addParticleSystem(vv) {
        this._blockEntityCollection || (this.mF.push(vv), Sv.e.SetImmediate((() => {
          this.onNewParticleSystemAddedObservable.notifyObservers(vv)
        })))
      }
      addAnimation(vv) {
        this._blockEntityCollection || this.animations.push(vv)
      }
      addAnimationGroup(vv) {
        this._blockEntityCollection || (this.animationGroups.push(vv), Sv.e.SetImmediate((() => {
          this.onNewAnimationGroupAddedObservable.notifyObservers(vv)
        })))
      }
      addMultiMaterial(vv) {
        this._blockEntityCollection || (this.multiMaterials.push(vv), Sv.e.SetImmediate((() => {
          this.onNewMultiMaterialAddedObservable.notifyObservers(vv)
        })))
      }
      addMaterial(vv) {
        this._blockEntityCollection || vv.rD() === this && -1 !== vv._indexInSceneMaterialArray || (vv._indexInSceneMaterialArray = this.materials.length, this.materials.push(vv), Sv.e.SetImmediate((() => {
          this.onNewMaterialAddedObservable.notifyObservers(vv)
        })))
      }
      addMorphTargetManager(vv) {
        this._blockEntityCollection || this.morphTargetManagers.push(vv)
      }
      addGeometry(vv) {
        this._blockEntityCollection || (this._geometriesByUniqueId && (this._geometriesByUniqueId[vv.uniqueId] = this.geometries.length), this.geometries.push(vv))
      }
      addActionManager(vv) {
        this.actionManagers.push(vv)
      }
      addTexture(vv) {
        this._blockEntityCollection || (this.textures.push(vv), this.onNewTextureAddedObservable.notifyObservers(vv))
      }
      addFrameGraph(vv) {
        this.frameGraphs.push(vv), Sv.e.SetImmediate((() => {
          this.onNewFrameGraphAddedObservable.notifyObservers(vv)
        }))
      }
      addObjectRenderer(vv) {
        this.objectRenderers.push(vv), Sv.e.SetImmediate((() => {
          this.onNewObjectRendererAddedObservable.notifyObservers(vv)
        }))
      }
      addPostProcess(vv) {
        this._blockEntityCollection || (this.postProcesses.push(vv), Sv.e.SetImmediate((() => {
          this.onNewPostProcessAddedObservable.notifyObservers(vv)
        })))
      }
      addEffectLayer(vv) {
        this._blockEntityCollection || (this.effectLayers.push(vv), Sv.e.SetImmediate((() => {
          this.onNewEffectLayerAddedObservable.notifyObservers(vv)
        })))
      }
      switchActiveCamera(vv) {
        let zv = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this._engine.getInputElement() && (this.activeCamera && this.activeCamera.detachControl(), this.activeCamera = vv, zv && vv.attachControl())
      }
      setActiveCameraById(vv) {
        const zv = this.getCameraById(vv);
        return zv ? (this.activeCamera = zv, zv) : null
      }
      setActiveCameraByName(vv) {
        const zv = this.getCameraByName(vv);
        return zv ? (this.activeCamera = zv, zv) : null
      }
      getAnimationGroupByName(vv) {
        for (let zv = 0; zv < this.animationGroups.length; zv++)
          if (this.animationGroups[zv].name === vv) return this.animationGroups[zv];
        return null
      }
      _getMaterial(vv, zv) {
        for (let Pv = 0; Pv < this.materials.length; Pv++) {
          const vv = this.materials[Pv];
          if (zv(vv)) return vv
        }
        if (vv)
          for (let Pv = 0; Pv < this.multiMaterials.length; Pv++) {
            const vv = this.multiMaterials[Pv];
            if (zv(vv)) return vv
          }
        return null
      }
      getMaterialByUniqueID(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this.getMaterialByUniqueId(vv, zv)
      }
      getMaterialByUniqueId(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this._getMaterial(zv, (zv => zv.uniqueId === vv))
      }
      getMaterialById(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this._getMaterial(zv, (zv => zv.id === vv))
      }
      getMaterialByName(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this._getMaterial(zv, (zv => zv.name === vv))
      }
      getLastMaterialById(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        for (let Pv = this.materials.length - 1; Pv >= 0; Pv--)
          if (this.materials[Pv].id === vv) return this.materials[Pv];
        if (zv)
          for (let Pv = this.multiMaterials.length - 1; Pv >= 0; Pv--)
            if (this.multiMaterials[Pv].id === vv) return this.multiMaterials[Pv];
        return null
      }
      getTextureByUniqueId(vv) {
        for (let zv = 0; zv < this.textures.length; zv++)
          if (this.textures[zv].uniqueId === vv) return this.textures[zv];
        return null
      }
      getTextureByName(vv) {
        for (let zv = 0; zv < this.textures.length; zv++)
          if (this.textures[zv].name === vv) return this.textures[zv];
        return null
      }
      getCameraById(vv) {
        for (let zv = 0; zv < this.cameras.length; zv++)
          if (this.cameras[zv].id === vv) return this.cameras[zv];
        return null
      }
      getCameraByUniqueId(vv) {
        for (let zv = 0; zv < this.cameras.length; zv++)
          if (this.cameras[zv].uniqueId === vv) return this.cameras[zv];
        return null
      }
      getCameraByName(vv) {
        for (let zv = 0; zv < this.cameras.length; zv++)
          if (this.cameras[zv].name === vv) return this.cameras[zv];
        return null
      }
      getBoneById(vv) {
        for (let zv = 0; zv < this.skeletons.length; zv++) {
          const Pv = this.skeletons[zv];
          for (let zv = 0; zv < Pv.bones.length; zv++)
            if (Pv.bones[zv].id === vv) return Pv.bones[zv]
        }
        return null
      }
      getBoneByName(vv) {
        for (let zv = 0; zv < this.skeletons.length; zv++) {
          const Pv = this.skeletons[zv];
          for (let zv = 0; zv < Pv.bones.length; zv++)
            if (Pv.bones[zv].name === vv) return Pv.bones[zv]
        }
        return null
      }
      getLightByName(vv) {
        for (let zv = 0; zv < this.lights.length; zv++)
          if (this.lights[zv].name === vv) return this.lights[zv];
        return null
      }
      getLightById(vv) {
        for (let zv = 0; zv < this.lights.length; zv++)
          if (this.lights[zv].id === vv) return this.lights[zv];
        return null
      }
      getLightByUniqueId(vv) {
        for (let zv = 0; zv < this.lights.length; zv++)
          if (this.lights[zv].uniqueId === vv) return this.lights[zv];
        return null
      }
      getParticleSystemById(vv) {
        for (let zv = 0; zv < this.mF.length; zv++)
          if (this.mF[zv].id === vv) return this.mF[zv];
        return null
      }
      getGeometryById(vv) {
        for (let zv = 0; zv < this.geometries.length; zv++)
          if (this.geometries[zv].id === vv) return this.geometries[zv];
        return null
      }
      _getGeometryByUniqueId(vv) {
        if (this._geometriesByUniqueId) {
          const zv = this._geometriesByUniqueId[vv];
          if (void 0 !== zv) return this.geometries[zv]
        } else
          for (let zv = 0; zv < this.geometries.length; zv++)
            if (this.geometries[zv].uniqueId === vv) return this.geometries[zv];
        return null
      }
      getFrameGraphByName(vv) {
        for (let zv = 0; zv < this.frameGraphs.length; zv++)
          if (this.frameGraphs[zv].name === vv) return this.frameGraphs[zv];
        return null
      }
      pushGeometry(vv, zv) {
        return !(!zv && this._getGeometryByUniqueId(vv.uniqueId)) && (this.addGeometry(vv), Sv.e.SetImmediate((() => {
          this.onNewGeometryAddedObservable.notifyObservers(vv)
        })), !0)
      }
      removeGeometry(vv) {
        let zv;
        if (this._geometriesByUniqueId) {
          if (zv = this._geometriesByUniqueId[vv.uniqueId], void 0 === zv) return !1
        } else if (zv = this.geometries.indexOf(vv), zv < 0) return !1;
        if (zv !== this.geometries.length - 1) {
          const vv = this.geometries[this.geometries.length - 1];
          vv && (this.geometries[zv] = vv, this._geometriesByUniqueId && (this._geometriesByUniqueId[vv.uniqueId] = zv))
        }
        return this._geometriesByUniqueId && (this._geometriesByUniqueId[vv.uniqueId] = void 0), this.geometries.pop(), this.onGeometryRemovedObservable.notifyObservers(vv), !0
      }
      getGeometries() {
        return this.geometries
      }
      getMeshById(vv) {
        for (let zv = 0; zv < this.meshes.length; zv++)
          if (this.meshes[zv].id === vv) return this.meshes[zv];
        return null
      }
      getMeshesById(vv) {
        return this.meshes.filter((function(zv) {
          return zv.id === vv
        }))
      }
      getTransformNodeById(vv) {
        for (let zv = 0; zv < this.transformNodes.length; zv++)
          if (this.transformNodes[zv].id === vv) return this.transformNodes[zv];
        return null
      }
      getTransformNodeByUniqueId(vv) {
        for (let zv = 0; zv < this.transformNodes.length; zv++)
          if (this.transformNodes[zv].uniqueId === vv) return this.transformNodes[zv];
        return null
      }
      getTransformNodesById(vv) {
        return this.transformNodes.filter((function(zv) {
          return zv.id === vv
        }))
      }
      getMeshByUniqueId(vv) {
        for (let zv = 0; zv < this.meshes.length; zv++)
          if (this.meshes[zv].uniqueId === vv) return this.meshes[zv];
        return null
      }
      getLastMeshById(vv) {
        for (let zv = this.meshes.length - 1; zv >= 0; zv--)
          if (this.meshes[zv].id === vv) return this.meshes[zv];
        return null
      }
      getLastTransformNodeById(vv) {
        for (let zv = this.transformNodes.length - 1; zv >= 0; zv--)
          if (this.transformNodes[zv].id === vv) return this.transformNodes[zv];
        return null
      }
      getLastEntryById(vv) {
        let zv;
        for (zv = this.meshes.length - 1; zv >= 0; zv--)
          if (this.meshes[zv].id === vv) return this.meshes[zv];
        for (zv = this.transformNodes.length - 1; zv >= 0; zv--)
          if (this.transformNodes[zv].id === vv) return this.transformNodes[zv];
        for (zv = this.cameras.length - 1; zv >= 0; zv--)
          if (this.cameras[zv].id === vv) return this.cameras[zv];
        for (zv = this.lights.length - 1; zv >= 0; zv--)
          if (this.lights[zv].id === vv) return this.lights[zv];
        for (zv = this.skeletons.length - 1; zv >= 0; zv--) {
          const Pv = this.skeletons[zv];
          for (let zv = Pv.bones.length - 1; zv >= 0; zv--)
            if (Pv.bones[zv].id === vv) return Pv.bones[zv]
        }
        return null
      }
      getNodeById(vv) {
        const zv = this.getMeshById(vv);
        if (zv) return zv;
        const Pv = this.getTransformNodeById(vv);
        if (Pv) return Pv;
        const hv = this.getLightById(vv);
        if (hv) return hv;
        const Sv = this.getCameraById(vv);
        if (Sv) return Sv;
        const ev = this.getBoneById(vv);
        return ev || null
      }
      getNodeByName(vv) {
        const zv = this.getMeshByName(vv);
        if (zv) return zv;
        const Pv = this.getTransformNodeByName(vv);
        if (Pv) return Pv;
        const hv = this.getLightByName(vv);
        if (hv) return hv;
        const Sv = this.getCameraByName(vv);
        if (Sv) return Sv;
        const ev = this.getBoneByName(vv);
        return ev || null
      }
      getMeshByName(vv) {
        for (let zv = 0; zv < this.meshes.length; zv++)
          if (this.meshes[zv].name === vv) return this.meshes[zv];
        return null
      }
      getTransformNodeByName(vv) {
        for (let zv = 0; zv < this.transformNodes.length; zv++)
          if (this.transformNodes[zv].name === vv) return this.transformNodes[zv];
        return null
      }
      getLastSkeletonById(vv) {
        for (let zv = this.skeletons.length - 1; zv >= 0; zv--)
          if (this.skeletons[zv].id === vv) return this.skeletons[zv];
        return null
      }
      getSkeletonByUniqueId(vv) {
        for (let zv = 0; zv < this.skeletons.length; zv++)
          if (this.skeletons[zv].uniqueId === vv) return this.skeletons[zv];
        return null
      }
      getSkeletonById(vv) {
        for (let zv = 0; zv < this.skeletons.length; zv++)
          if (this.skeletons[zv].id === vv) return this.skeletons[zv];
        return null
      }
      getSkeletonByName(vv) {
        for (let zv = 0; zv < this.skeletons.length; zv++)
          if (this.skeletons[zv].name === vv) return this.skeletons[zv];
        return null
      }
      getMorphTargetManagerById(vv) {
        for (let zv = 0; zv < this.morphTargetManagers.length; zv++)
          if (this.morphTargetManagers[zv].uniqueId === vv) return this.morphTargetManagers[zv];
        return null
      }
      getMorphTargetById(vv) {
        for (let zv = 0; zv < this.morphTargetManagers.length; ++zv) {
          const Pv = this.morphTargetManagers[zv];
          for (let zv = 0; zv < Pv.numTargets; ++zv) {
            const hv = Pv.getTarget(zv);
            if (hv.id === vv) return hv
          }
        }
        return null
      }
      getMorphTargetByName(vv) {
        for (let zv = 0; zv < this.morphTargetManagers.length; ++zv) {
          const Pv = this.morphTargetManagers[zv];
          for (let zv = 0; zv < Pv.numTargets; ++zv) {
            const hv = Pv.getTarget(zv);
            if (hv.name === vv) return hv
          }
        }
        return null
      }
      getPostProcessByName(vv) {
        for (let zv = 0; zv < this.postProcesses.length; ++zv) {
          const Pv = this.postProcesses[zv];
          if (Pv.name === vv) return Pv
        }
        return null
      }
      isActiveMesh(vv) {
        return -1 !== this._activeMeshes.indexOf(vv)
      }
      get uid() {
        return this._uid || (this._uid = hv.h.RandomId()), this._uid
      }
      addExternalData(vv, zv) {
        return this._externalData || (this._externalData = new dv), this._externalData.add(vv, zv)
      }
      getExternalData(vv) {
        return this._externalData ? this._externalData.get(vv) : null
      }
      getOrAddExternalDataWithFactory(vv, zv) {
        return this._externalData || (this._externalData = new dv), this._externalData.getOrAddWithFactory(vv, zv)
      }
      removeExternalData(vv) {
        return this._externalData.remove(vv)
      }
      _evaluateSubMesh(vv, zv, Pv, hv) {
        if (hv || vv.isInFrustum(this._frustumPlanes)) {
          for (let hv = 0, Sv = this._evaluateSubMeshStage; hv < Sv.length; hv++) {
            Sv[hv].action(zv, vv)
          }
          const Pv = vv.na();
          null !== Pv && void 0 !== Pv && (Pv.hasRenderTargetTextures && null != Pv.getRenderTargetTextures && -1 === this._processedMaterials.indexOf(Pv) && (this._processedMaterials.push(Pv), this._materialsRenderTargets.concatWithNoDuplicate(Pv.getRenderTargetTextures())), this._renderingManager.dispatch(vv, zv, Pv))
        }
      }
      freeProcessedMaterials() {
        this._processedMaterials.dispose()
      }
      get blockfreeActiveMeshesAndRenderingGroups() {
        return this._preventFreeActiveMeshesAndRenderingGroups
      }
      set blockfreeActiveMeshesAndRenderingGroups(vv) {
        this._preventFreeActiveMeshesAndRenderingGroups !== vv && (vv && (this.freeActiveMeshes(), this.freeRenderingGroups()), this._preventFreeActiveMeshesAndRenderingGroups = vv)
      }
      freeActiveMeshes() {
        if (!this.blockfreeActiveMeshesAndRenderingGroups && (this._activeMeshes.dispose(), this.activeCamera && this.activeCamera._activeMeshes && this.activeCamera._activeMeshes.dispose(), this.activeCameras))
          for (let vv = 0; vv < this.activeCameras.length; vv++) {
            const zv = this.activeCameras[vv];
            zv && zv._activeMeshes && zv._activeMeshes.dispose()
          }
      }
      freeRenderingGroups() {
        if (!this.blockfreeActiveMeshesAndRenderingGroups && (this._renderingManager && this._renderingManager.freeRenderingGroups(), this.textures))
          for (let vv = 0; vv < this.textures.length; vv++) {
            const zv = this.textures[vv];
            zv && zv.renderList && zv.freeRenderingGroups()
          }
      }
      _isInIntermediateRendering() {
        return this._intermediateRendering
      }
      _isInRenderingMeshEvaluation() {
        return this._renderingMeshEvaluationDepth > 0
      }
      freezeActiveMeshes() {
        let vv = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          zv = arguments.length > 1 ? arguments[1] : void 0,
          Pv = arguments.length > 2 ? arguments[2] : void 0,
          hv = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
          ev = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (this.frameGraph) {
          this._renderWithFrameGraph(!0, !1, !0);
          const gv = this.frameGraph.getTasksByClassName(["FrameGraphObjectRendererTask", "FrameGraphGeometryRendererTask"]);
          for (const vv of gv) vv.objectRenderer._freezeActiveMeshes(hv);
          return this._freezeActiveMeshesCancel = (0, Sv.g)((() => {
            let vv = !0,
              zv = !0;
            for (const Pv of gv) vv && (vv = Pv.objectRenderer._isFrozen), zv && (zv = null !== Pv.objectRenderer._freezeActiveMeshesCancel);
            if (vv) return !0;
            if (!zv) throw new Error("Freezing active meshes was cancelled");
            return !1
          }), (() => {
            this._freezeActiveMeshesCancel = null, this._activeMeshesFrozen = !0, this._activeMeshesFrozenButKeepClipping = ev, this._skipEvaluateActiveMeshesCompletely = vv, zv?.()
          }), ((vv, zv) => {
            if (this._freezeActiveMeshesCancel = null, this.unfreezeActiveMeshes(), zv) {
              const zv = "Scene: Timeout while waiting for meshes to be frozen.";
              Pv ? Pv(zv) : (vP.d.Error(zv), vv && vP.d.Error(vv))
            } else {
              const zv = "Scene: An unexpected error occurred while trying to freeze active meshes.";
              Pv ? Pv(zv) : (vP.d.Error(zv), vv && (vP.d.Error(vv), vv.stack && vP.d.Error(vv.stack)))
            }
          })), this
        }
        return this.executeWhenReady((() => {
          if (this.activeCamera) {
            if (this._frustumPlanes || this.updateTransformMatrix(), this._evaluateActiveMeshes(), this._activeMeshesFrozen = !0, this._activeMeshesFrozenButKeepClipping = ev, this._skipEvaluateActiveMeshesCompletely = vv, hv)
              for (let vv = 0; vv < this._activeMeshes.length; vv++) this._activeMeshes.data[vv]._freeze();
            zv && zv()
          } else Pv && Pv("No active camera found")
        })), this
      }
      unfreezeActiveMeshes() {
        for (let vv = 0; vv < this.meshes.length; vv++) {
          const zv = this.meshes[vv];
          zv._internalAbstractMeshDataInfo && (zv._internalAbstractMeshDataInfo._isActive = !1)
        }
        if (this._freezeActiveMeshesCancel?.(), this._freezeActiveMeshesCancel = null, this.frameGraph) {
          const vv = this.frameGraph.getTasksByClassName(["FrameGraphObjectRendererTask", "FrameGraphGeometryRendererTask"]);
          for (const zv of vv) zv.objectRenderer._unfreezeActiveMeshes()
        } else
          for (let vv = 0; vv < this._activeMeshes.length; vv++) this._activeMeshes.data[vv]._unFreeze();
        return this._activeMeshesFrozen = !1, this
      }
      _executeActiveContainerCleanup(vv) {
        (!this._engine.snapshotRendering || 1 !== this._engine.snapshotRenderingMode) && this._activeMeshesFrozen && this._activeMeshes.length || this.onBeforeRenderObservable.addOnce((() => vv.dispose()))
      }
      _evaluateActiveMeshes() {
        if (this._engine.snapshotRendering && 1 === this._engine.snapshotRenderingMode) return void(this._activeMeshes.length > 0 && (this.activeCamera?._activeMeshes.reset(), this._activeMeshes.reset(), this._renderingManager.reset(), this._processedMaterials.reset(), this._activeParticleSystems.reset(), this._activeSkeletons.reset(), this._softwareSkinnedMeshes.reset()));
        if (this._activeMeshesFrozen && this._activeMeshes.length) {
          if (!this._skipEvaluateActiveMeshesCompletely) {
            const vv = this._activeMeshes.length;
            for (let zv = 0; zv < vv; zv++) {
              this._activeMeshes.data[zv].computeWorldMatrix()
            }
          }
          if (this._activeParticleSystems) {
            const vv = this._activeParticleSystems.length;
            for (let zv = 0; zv < vv; zv++) this._activeParticleSystems.data[zv].animate()
          }
          return void this._renderingManager.resetSprites()
        }
        if (!this.activeCamera) return;
        this.onBeforeActiveMeshesEvaluationObservable.notifyObservers(this), this.activeCamera._activeMeshes.reset(), this._activeMeshes.reset(), this._renderingManager.reset(), this._processedMaterials.reset(), this._activeParticleSystems.reset(), this._activeSkeletons.reset(), this._softwareSkinnedMeshes.reset(), this._materialsRenderTargets.reset();
        for (let Sv = 0, ev = this._beforeEvaluateActiveMeshStage; Sv < ev.length; Sv++) {
          ev[Sv].action()
        }
        const vv = this.getActiveMeshCandidates(),
          zv = vv.length,
          Pv = Bv.c.Enabled,
          hv = this.customLODSelector;
        for (let Sv = 0; Sv < zv; Sv++) {
          const zv = vv.data[Sv],
            ev = !hv && !zv.zK && !zv._internalMeshDataInfo?._LODLevels.length;
          let gv, pv;
          if ((ev || (gv = zv._internalAbstractMeshDataInfo._currentLOD.get(this.activeCamera), gv ? gv[1] = -1 : (gv = [zv, -1], zv._internalAbstractMeshDataInfo._currentLOD.set(this.activeCamera, gv))), !zv.isBlocked) && (Pv && this._totalVertices.addCount(zv.getTotalVertices(), !1), zv.isReady() && zv.isEnabled() && !zv.pp.hasAZeroComponent)) {
            if (zv.computeWorldMatrix(), zv.actionManager && zv.actionManager.hasSpecificTriggers2(12, 13) && this._meshesForIntersections.pushNoDuplicate(zv), ev) pv = zv;
            else if (pv = hv ? hv(zv, this.activeCamera) : zv.getLOD(this.activeCamera), gv[0] = pv, gv[1] = this._frameId, void 0 === pv || null === pv) continue;
            if (pv !== zv && 0 !== pv.billboardMode && pv.computeWorldMatrix(), zv._preActivate(), zv.isVisible && zv.visibility > 0 && 0 !== (zv.layerMask & this.activeCamera.layerMask) && (this._skipFrustumClipping || zv.ja || zv.isInFrustum(this._frustumPlanes))) {
              this._activeMeshes.push(zv), this.activeCamera._activeMeshes.push(zv), pv !== zv && pv._activate(this._renderId, !1);
              for (let vv = 0, Pv = this._preActiveMeshStage; vv < Pv.length; vv++) {
                Pv[vv].action(zv)
              }
              zv._activate(this._renderId, !1) && (zv.zK ? zv._internalAbstractMeshDataInfo._actAsRegularMesh && (pv = zv) : pv._internalAbstractMeshDataInfo._onlyForInstances = !1, pv._internalAbstractMeshDataInfo._isActive = !0, this._activeMesh(zv, pv)), zv._postActivate()
            }
          }
        }
        if (this.onAfterActiveMeshesEvaluationObservable.notifyObservers(this), this.particlesEnabled) {
          this.onBeforeParticlesRenderingObservable.notifyObservers(this);
          for (let vv = 0; vv < this.mF.length; vv++) {
            const zv = this.mF[vv];
            if (!zv.isStarted() || !zv.emitter) continue;
            const Pv = zv.emitter;
            Pv.position && !Pv.isEnabled() || (this._activeParticleSystems.push(zv), zv.animate(), this._renderingManager.dispatchParticles(zv))
          }
          this.onAfterParticlesRenderingObservable.notifyObservers(this)
        }
      }
      _prepareSkeleton(vv) {
        this._skeletonsEnabled && vv.skeleton && (this._activeSkeletons.pushNoDuplicate(vv.skeleton) && (vv.skeleton.prepare(), this._activeBones.addCount(vv.skeleton.bones.length, !1)), vv.computeBonesUsingShaders || this._softwareSkinnedMeshes.pushNoDuplicate(vv) && this.frameGraph && vv.applySkeleton(vv.skeleton))
      }
      _activeMesh(vv, zv) {
        this._prepareSkeleton(zv);
        let Pv = vv.Phv || vv.zK || this.dispatchAllSubMeshesOfActiveMeshes || this._skipFrustumClipping || zv.ja;
        if (zv && zv.sF && zv.sF.length > 0) {
          const hv = this.getActiveSubMeshCandidates(zv),
            Sv = hv.length;
          Pv = Pv || 1 === Sv;
          for (let ev = 0; ev < Sv; ev++) {
            const Sv = hv.data[ev];
            this._evaluateSubMesh(Sv, zv, vv, Pv)
          }
        }
      }
      updateTransformMatrix(vv) {
        const zv = this.activeCamera;
        if (zv)
          if (zv._renderingMultiview) {
            const Pv = zv._rigCameras[0],
              hv = zv._rigCameras[1];
            this.setTransformMatrix(Pv.getViewMatrix(), Pv.getProjectionMatrix(vv), hv.getViewMatrix(), hv.getProjectionMatrix(vv))
          } else this.setTransformMatrix(zv.getViewMatrix(), zv.getProjectionMatrix(vv))
      }
      _bindFrameBuffer(vv) {
        let zv = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this._useCurrentFrameBuffer || (vv && vv._multiviewTexture ? vv._multiviewTexture._bindFrameBuffer() : vv && vv.outputRenderTarget ? vv.outputRenderTarget._bindFrameBuffer() : this._engine._currentFrameBufferIsDefaultFrameBuffer() || this._engine.restoreDefaultFramebuffer()), zv && this._clearFrameBuffer(vv)
      }
      _clearFrameBuffer(vv) {
        if (vv && vv._multiviewTexture);
        else if (vv && vv.outputRenderTarget && !vv._renderingMultiview) {
          const zv = vv.outputRenderTarget;
          zv.onClearObservable.hasObservers() ? zv.onClearObservable.notifyObservers(this._engine) : zv.skipInitialClear || vv.isRightCamera || (this.autoClear && this._engine.clear(zv.clearColor || this._clearColor, !zv._cleared, !0, !0), zv._cleared = !0)
        } else this._defaultFrameBufferCleared ? this._engine.clear(null, !1, !0, !0) : (this._defaultFrameBufferCleared = !0, this._clear())
      }
      _renderForCamera(vv, zv) {
        let Pv = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        if (vv && vv._skipRendering) return;
        const Sv = this._engine;
        if (this._activeCamera = vv, !this.activeCamera) throw new Error("Active camera not set");
        if (Sv.setViewport(this.activeCamera.viewport), this.resetCachedMaterial(), this._renderId++, !this.prePass && Pv) {
          let zv = !0;
          vv._renderingMultiview && vv.outputRenderTarget && (zv = vv.outputRenderTarget.skipInitialClear, this.autoClear && (this._defaultFrameBufferCleared = !1, vv.outputRenderTarget.skipInitialClear = !1)), this._bindFrameBuffer(this._activeCamera), vv._renderingMultiview && vv.outputRenderTarget && (vv.outputRenderTarget.skipInitialClear = zv)
        }
        this.updateTransformMatrix(), this.onBeforeCameraRenderObservable.notifyObservers(this.activeCamera), this._engine.currentRenderPassId = vv.outputRenderTarget?.renderPassId ?? vv.renderPassId ?? 0, this._evaluateActiveMeshes();
        for (let hv = 0; hv < this._softwareSkinnedMeshes.length; hv++) {
          const vv = this._softwareSkinnedMeshes.data[hv];
          vv.applySkeleton(vv.skeleton)
        }
        this.onBeforeRenderTargetsRenderObservable.notifyObservers(this), this._renderTargets.concatWithNoDuplicate(this._materialsRenderTargets), vv.customRenderTargets && vv.customRenderTargets.length > 0 && this._renderTargets.concatWithNoDuplicate(vv.customRenderTargets), zv && zv.customRenderTargets && zv.customRenderTargets.length > 0 && this._renderTargets.concatWithNoDuplicate(zv.customRenderTargets), this.environmentTexture && this.environmentTexture.isRenderTarget && this._renderTargets.pushNoDuplicate(this.environmentTexture);
        for (let hv = 0, pv = this._gatherActiveCameraRenderTargetsStage; hv < pv.length; hv++) {
          pv[hv].action(this._renderTargets)
        }
        let ev = !1;
        if (this.renderTargetsEnabled) {
          let vv;
          if (this._intermediateRendering = !0, this._renderTargets.length > 0) {
            hv.h.StartPerformanceCounter("Render targets", this._renderTargets.length > 0);
            const zv = this.getBoundingBoxRenderer?.();
            for (let Pv = 0; Pv < this._renderTargets.length; Pv++) {
              const hv = this._renderTargets.data[Pv];
              if (hv._shouldRender()) {
                this._renderId++;
                const Pv = hv.activeCamera && hv.activeCamera !== this.activeCamera;
                zv && !vv && (vv = zv.renderList.length > 0 ? zv.renderList.data.slice() : [], vv.length = zv.renderList.length), hv.render(Pv, this.dumpNextRenderTargets), ev = !0
              }
            }
            zv && vv && (zv.renderList.data = vv, zv.renderList.length = vv.length), hv.h.EndPerformanceCounter("Render targets", this._renderTargets.length > 0), this._renderId++
          }
          if (this._cameraDrawRenderTargetStage.length > 0) {
            const zv = this.getBoundingBoxRenderer?.();
            zv && !vv && (vv = zv.renderList.length > 0 ? zv.renderList.data.slice() : [], vv.length = zv.renderList.length);
            for (let vv = 0, Pv = this._cameraDrawRenderTargetStage; vv < Pv.length; vv++) {
              ev = Pv[vv].action(this.activeCamera) || ev
            }
            zv && vv && (zv.renderList.data = vv, zv.renderList.length = vv.length)
          }
          this._intermediateRendering = !1
        }
        ev && !this.prePass && (this._bindFrameBuffer(this._activeCamera, !1), this.updateTransformMatrix()), this.onAfterRenderTargetsRenderObservable.notifyObservers(this), !this.postProcessManager || vv._multiviewTexture || this.prePass || this.postProcessManager._prepareFrame();
        for (let hv = 0, pv = this._beforeCameraDrawStage; hv < pv.length; hv++) {
          pv[hv].action(this.activeCamera)
        }
        this.onBeforeDrawPhaseObservable.notifyObservers(this);
        const gv = Sv.snapshotRendering && 1 === Sv.snapshotRenderingMode;
        gv && this.finalizeSceneUbo(), this._renderingManager.render(null, null, !0, !gv), this.onAfterDrawPhaseObservable.notifyObservers(this);
        for (let hv = 0, pv = this._afterCameraDrawStage; hv < pv.length; hv++) {
          pv[hv].action(this.activeCamera)
        }
        if (this.postProcessManager && !vv._multiviewTexture) {
          const zv = vv.outputRenderTarget ? vv.outputRenderTarget.renderTarget : void 0;
          this.postProcessManager._finalizeFrame(vv.isIntermediate, zv)
        }
        for (let hv = 0, pv = this._afterCameraPostProcessStage; hv < pv.length; hv++) {
          pv[hv].action(this.activeCamera)
        }
        this._renderTargets.reset(), this.onAfterCameraRenderObservable.notifyObservers(this.activeCamera)
      }
      _processSubCameras(vv) {
        let zv = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (0 === vv.cameraRigMode || vv._renderingMultiview) return vv._renderingMultiview && !this._multiviewSceneUbo && this._createMultiviewUbo(), this._renderForCamera(vv, void 0, zv), void this.onAfterRenderCameraObservable.notifyObservers(vv);
        if (vv._useMultiviewToSingleView) this._renderMultiviewToSingleView(vv);
        else {
          this.onBeforeCameraRenderObservable.notifyObservers(vv);
          for (let zv = 0; zv < vv._rigCameras.length; zv++) this._renderForCamera(vv._rigCameras[zv], vv)
        }
        this._activeCamera = vv, this.updateTransformMatrix(), this.onAfterRenderCameraObservable.notifyObservers(vv)
      }
      _checkIntersections() {
        for (let vv = 0; vv < this._meshesForIntersections.length; vv++) {
          const zv = this._meshesForIntersections.data[vv];
          if (zv.actionManager)
            for (let vv = 0; zv.actionManager && vv < zv.actionManager.actions.length; vv++) {
              const Pv = zv.actionManager.actions[vv];
              if (12 === Pv.trigger || 13 === Pv.trigger) {
                const vv = Pv.getTriggerParameter(),
                  hv = vv.mesh ? vv.mesh : vv,
                  Sv = hv.bPv(zv, vv.usePreciseIntersection),
                  ev = zv._intersectionsInProgress.indexOf(hv);
                Sv && -1 === ev ? 12 === Pv.trigger ? (Pv._executeCurrent(av.CreateNew(zv, void 0, hv)), zv._intersectionsInProgress.push(hv)) : 13 === Pv.trigger && zv._intersectionsInProgress.push(hv) : !Sv && ev > -1 && (13 === Pv.trigger && Pv._executeCurrent(av.CreateNew(zv, void 0, hv)), zv.actionManager.hasSpecificTrigger(13, (vv => {
                  const zv = vv.mesh ? vv.mesh : vv;
                  return hv === zv
                })) && 13 !== Pv.trigger || zv._intersectionsInProgress.splice(ev, 1))
              }
            }
        }
      }
      _advancePhysicsEngineStep(vv) {}
      _animate(vv) {}
      animate() {
        if (this._engine.isDeterministicLockStep()) {
          let vv = Math.max(eP.MinDeltaTime, Math.min(this._engine.getDeltaTime(), eP.MaxDeltaTime)) + this._timeAccumulator;
          const zv = this._engine.getTimeStep(),
            Pv = 1e3 / zv / 1e3;
          let hv = 0;
          const Sv = this._engine.getLockstepMaxSteps();
          let ev = Math.floor(vv / zv);
          for (ev = Math.min(ev, Sv); vv > 0 && hv < ev;) this.onBeforeStepObservable.notifyObservers(this), this._animationRatio = zv * Pv, this._animate(zv), this.onAfterAnimationsObservable.notifyObservers(this), this.IU && this._advancePhysicsEngineStep(zv), this.onAfterStepObservable.notifyObservers(this), this._currentStepId++, hv++, vv -= zv;
          this._timeAccumulator = vv < 0 ? 0 : vv
        } else {
          const vv = this.useConstantAnimationDeltaTime ? 16 : Math.max(eP.MinDeltaTime, Math.min(this._engine.getDeltaTime(), eP.MaxDeltaTime));
          this._animationRatio = .06 * vv, this._animate(), this.onAfterAnimationsObservable.notifyObservers(this), this.IU && this._advancePhysicsEngineStep(vv)
        }
      }
      _clear() {
        (this.autoClearDepthAndStencil || this.autoClear) && this._engine.clear(this._clearColor, this.autoClear || this.forceWireframe || this.forcePointsCloud, this.autoClearDepthAndStencil, this.autoClearDepthAndStencil)
      }
      _checkCameraRenderTarget(vv) {
        if (vv?.outputRenderTarget && !vv?.isRigCamera && (vv.outputRenderTarget._cleared = !1), vv?.rigCameras?.length)
          for (let zv = 0; zv < vv.rigCameras.length; ++zv) {
            const Pv = vv.rigCameras[zv].outputRenderTarget;
            Pv && (Pv._cleared = !1)
          }
      }
      resetDrawCache(vv) {
        if (this.meshes)
          for (const zv of this.meshes) zv.resetDrawCache(vv)
      }
      _renderWithFrameGraph() {
        let vv = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          zv = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (this.activeCamera = null, this.activeCameras = null, vv)
          for (const Pv of this.cameras)
            if (Pv.update(), 0 !== Pv.cameraRigMode)
              for (let vv = 0; vv < Pv._rigCameras.length; vv++) Pv._rigCameras[vv].update();
        this.onBeforeRenderObservable.notifyObservers(this), this._renderingMeshEvaluationDepth++;
        try {
          this._renderWithFrameGraphAfterBeforeRender(zv)
        } finally {
          this._renderingMeshEvaluationDepth--
        }
      }
      _renderWithFrameGraphAfterBeforeRender(vv) {
        this.onBeforeRenderTargetsRenderObservable.notifyObservers(this), this._renderTargets.reset();
        const zv = this._frameGraph?.findMainCamera() ?? null;
        if (this.renderTargetsEnabled) {
          this.environmentTexture && this.environmentTexture.isRenderTarget && this._renderTargets.pushNoDuplicate(this.environmentTexture), this._renderTargets.concatWithNoDuplicate(this.customRenderTargets), hv.h.StartPerformanceCounter("Custom render targets", this._renderTargets.length > 0);
          for (let vv = 0; vv < this._renderTargets.length; vv++) {
            const Pv = this._renderTargets.data[vv],
              hv = Pv.activeCamera || zv;
            this._renderRenderTarget(Pv, hv, !0, this.dumpNextRenderTargets)
          }
          hv.h.EndPerformanceCounter("Custom render targets", this._renderTargets.length > 0), this._renderId++
        }
        this.onAfterRenderTargetsRenderObservable.notifyObservers(this);
        for (let Pv = 0, hv = this._beforeClearStage; Pv < hv.length; Pv++) {
          hv[Pv].action()
        }
        if (this._engine.snapshotRendering && 1 === this._engine.snapshotRenderingMode) this._activeParticleSystems.reset(), this._activeSkeletons.reset(), this._softwareSkinnedMeshes.reset();
        else {
          const zv = this.getActiveMeshCandidates(),
            Pv = zv.length;
          if (this._activeMeshesFrozen) {
            if (!this._skipEvaluateActiveMeshesCompletely)
              for (let vv = 0; vv < Pv; vv++) {
                const Pv = zv.data[vv];
                Pv._internalAbstractMeshDataInfo._wasActiveLastFrame && Pv.computeWorldMatrix()
              }
            if (this.particlesEnabled) {
              const vv = this._activeParticleSystems.length;
              for (let zv = 0; zv < vv; zv++) this._activeParticleSystems.data[zv].animate()
            }
          } else {
            this._activeParticleSystems.reset(), this._activeSkeletons.reset(), this._softwareSkinnedMeshes.reset();
            for (let hv = 0; hv < Pv; hv++) {
              const Pv = zv.data[hv];
              Pv._internalAbstractMeshDataInfo._wasActiveLastFrame = !1, Pv.isBlocked || (this._totalVertices.addCount(Pv.getTotalVertices(), !1), Pv.isReady() && Pv.isEnabled() && !Pv.pp.hasAZeroComponent && (Pv.computeWorldMatrix(vv), Pv.actionManager && Pv.actionManager.hasSpecificTriggers2(12, 13) && this._meshesForIntersections.pushNoDuplicate(Pv)))
            }
            if (this.particlesEnabled)
              for (let vv = 0; vv < this.mF.length; vv++) {
                const zv = this.mF[vv];
                if (!zv.isStarted() || !zv.emitter) continue;
                const Pv = zv.emitter;
                Pv.position && !Pv.isEnabled() || (this._activeParticleSystems.push(zv), zv.animate())
              }
          }
        }
        this.frameGraph?.execute()
      }
      _renderRenderTarget(vv, zv) {
        let Pv = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          hv = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (this._intermediateRendering = !0, vv._shouldRender()) {
          if (this._renderId++, this.activeCamera = zv, !this.activeCamera) throw new Error("Active camera not set");
          this._engine.setViewport(this.activeCamera.viewport), this.updateTransformMatrix(), vv.render(Pv, hv)
        }
        this._intermediateRendering = !1
      }
      render() {
        let vv = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          zv = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this.mzv) return;
        const Pv = this._renderingMeshEvaluationDepth;
        try {
          this._renderFrame(vv, zv)
        } finally {
          this._renderingMeshEvaluationDepth = Pv
        }
      }
      _renderFrame(vv, zv) {
        if (this.onReadyObservable.hasObservers() && null === this._executeWhenReadyTimeoutId && this._checkIsReady(), Cv.d.rD = this._getFloatingOriginScene, this._frameId++, this._defaultFrameBufferCleared = !1, this._checkCameraRenderTarget(this.activeCamera), this.activeCameras?.length)
          for (const Pv of this.activeCameras) this._checkCameraRenderTarget(Pv);
        this._registerTransientComponents(), this._activeParticles.fetchNewFrame(), this._totalVertices.fetchNewFrame(), this._activeIndices.fetchNewFrame(), this._activeBones.fetchNewFrame(), this._meshesForIntersections.reset(), this.resetCachedMaterial(), this.onBeforeAnimationsObservable.notifyObservers(this), this.actionManager && this.actionManager.processTrigger(11), zv || this.animate();
        for (let Pv = 0, hv = this._beforeCameraUpdateStage; Pv < hv.length; Pv++) {
          hv[Pv].action()
        }
        if (vv)
          if (this.activeCameras && this.activeCameras.length > 0)
            for (let Pv = 0; Pv < this.activeCameras.length; Pv++) {
              const vv = this.activeCameras[Pv];
              if (vv.update(), 0 !== vv.cameraRigMode)
                for (let zv = 0; zv < vv._rigCameras.length; zv++) vv._rigCameras[zv].update()
            } else if (this.activeCamera && (this.activeCamera.update(), 0 !== this.activeCamera.cameraRigMode))
              for (let Pv = 0; Pv < this.activeCamera._rigCameras.length; Pv++) this.activeCamera._rigCameras[Pv].update();
        if (this.customRenderFunction) this._renderId++, this._engine.currentRenderPassId = 0, this._renderingMeshEvaluationDepth++, this.customRenderFunction(vv, zv);
        else {
          this.onBeforeRenderObservable.notifyObservers(this), this._renderingMeshEvaluationDepth++, this.onBeforeRenderTargetsRenderObservable.notifyObservers(this);
          const vv = this.activeCameras?.length ? this.activeCameras[0] : this.activeCamera;
          if (this.renderTargetsEnabled) {
            hv.h.StartPerformanceCounter("Custom render targets", this.customRenderTargets.length > 0);
            for (let zv = 0; zv < this.customRenderTargets.length; zv++) {
              const Pv = this.customRenderTargets[zv],
                hv = Pv.activeCamera || this.activeCamera;
              this._renderRenderTarget(Pv, hv, vv !== hv, this.dumpNextRenderTargets)
            }
            hv.h.EndPerformanceCounter("Custom render targets", this.customRenderTargets.length > 0), this._renderId++
          }
          this._engine.currentRenderPassId = vv?.renderPassId ?? 0, this.activeCamera = vv, this._activeCamera && 22 !== this._activeCamera.cameraRigMode && !this.prePass && this._bindFrameBuffer(this._activeCamera, !1), this.onAfterRenderTargetsRenderObservable.notifyObservers(this);
          for (let zv = 0, Pv = this._beforeClearStage; zv < Pv.length; zv++) {
            Pv[zv].action()
          }
          this._clearFrameBuffer(this.activeCamera);
          for (let zv = 0, Pv = this._gatherRenderTargetsStage; zv < Pv.length; zv++) {
            Pv[zv].action(this._renderTargets)
          }
          if (this.activeCameras && this.activeCameras.length > 0)
            for (let zv = 0; zv < this.activeCameras.length; zv++) this._processSubCameras(this.activeCameras[zv], zv > 0);
          else {
            if (!this.activeCamera) throw new Error("No camera defined");
            this._processSubCameras(this.activeCamera, !!this.activeCamera.outputRenderTarget)
          }
        }
        this._inputManager._updateMeshUnderPointer(), this._checkIntersections();
        for (let Pv = 0, hv = this._afterRenderStage; Pv < hv.length; Pv++) {
          hv[Pv].action()
        }
        if (this.afterRender && this.afterRender(), this.onAfterRenderObservable.notifyObservers(this), this._toBeDisposed.length) {
          for (let vv = 0; vv < this._toBeDisposed.length; vv++) {
            const zv = this._toBeDisposed[vv];
            zv && zv.dispose()
          }
          this._toBeDisposed.length = 0
        }
        this.dumpNextRenderTargets && (this.dumpNextRenderTargets = !1), this._activeBones.addCount(0, !0), this._activeIndices.addCount(0, !0), this._activeParticles.addCount(0, !0), this._engine.restoreDefaultFramebuffer()
      }
      freezeMaterials() {
        for (let vv = 0; vv < this.materials.length; vv++) this.materials[vv].freeze()
      }
      unfreezeMaterials() {
        for (let vv = 0; vv < this.materials.length; vv++) this.materials[vv].unfreeze()
      }
      dispose() {
        if (this.mzv) return;
        if (this._isDisposing = !0, this.beforeRender = null, this.afterRender = null, this.metadata = null, this.skeletons.length = 0, this.morphTargetManagers.length = 0, this._transientComponents.length = 0, this._isReadyForMeshStage.clear(), this._beforeEvaluateActiveMeshStage.clear(), this._evaluateSubMeshStage.clear(), this._preActiveMeshStage.clear(), this._cameraDrawRenderTargetStage.clear(), this._beforeCameraDrawStage.clear(), this._beforeRenderTargetDrawStage.clear(), this._beforeRenderingGroupDrawStage.clear(), this._beforeRenderingMeshStage.clear(), this._afterRenderingMeshStage.clear(), this._afterRenderingGroupDrawStage.clear(), this._afterCameraDrawStage.clear(), this._afterRenderTargetDrawStage.clear(), this._afterRenderStage.clear(), this._beforeCameraUpdateStage.clear(), this._beforeClearStage.clear(), this._gatherRenderTargetsStage.clear(), this._gatherActiveCameraRenderTargetsStage.clear(), this._pointerMoveStage.clear(), this._pointerDownStage.clear(), this._pointerUpStage.clear(), this._isReadyChecks.length = 0, this.importedMeshesFiles = [], this._activeAnimatables && (0, jv.e)(this.stopAllAnimations)) {
          for (const vv of this._activeAnimatables) vv.onAnimationEndObservable.clear(), vv.onAnimationEnd = null;
          this.stopAllAnimations()
        }
        this.resetCachedMaterial(), this.activeCamera && (this.activeCamera._activeMeshes.dispose(), this.activeCamera = null), this.activeCameras = null, this._activeMeshes.dispose(), this._renderingManager.dispose(), this._processedMaterials.dispose(), this._activeParticleSystems.dispose(), this._activeSkeletons.dispose(), this._softwareSkinnedMeshes.dispose(), this._renderTargets.dispose(), this._materialsRenderTargets.dispose(), this._registeredForLateAnimationBindings.dispose(), this._animationWrites.length = 0, this._animationWriteCount = 0, this._animationStepWriteCount = 0, this._meshesForIntersections.dispose(), this._toBeDisposed.length = 0;
        const vv = this._activeRequests.slice();
        for (const ev of vv) ev.abort();
        this._activeRequests.length = 0;
        try {
          this.uD.notifyObservers(this)
        } catch (Sv) {
          vP.d.Error("An error occurred while calling onDisposeObservable!", Sv)
        }
        this.detachControl();
        const zv = this._engine.getInputElement?.();
        if (zv)
          for (let ev = 0; ev < this.cameras.length; ev++) this.cameras[ev].detachControl();
        this._disposeList(this.animationGroups), this._disposeList(this.lights), this._defaultMaterial && this._defaultMaterial.dispose(), this._disposeList(this.multiMaterials), this._disposeList(this.materials), this._disposeList(this.meshes, (vv => vv.dispose(!0))), this._disposeList(this.transformNodes, (vv => vv.dispose(!0)));
        const Pv = this.cameras;
        this._disposeList(Pv), this._disposeList(this.mF), this._disposeList(this.postProcesses), this._disposeList(this.textures), this._disposeList(this.morphTargetManagers), this._disposeList(this.frameGraphs), this._sceneUbo.dispose(), this._multiviewSceneUbo && this._multiviewSceneUbo.dispose(), this.postProcessManager.dispose(), this._disposeList(this._components);
        let hv = this._engine.scenes.indexOf(this);
        if (hv > -1 && this._engine.scenes.splice(hv, 1), this._floatingOriginScene = void 0, 0 === this._engine.scenes.length && (0, Cv.h)(), mv.e._LastCreatedScene === this) {
          mv.e._LastCreatedScene = null;
          let vv = mv.e.Instances.length - 1;
          for (; vv >= 0;) {
            const zv = mv.e.Instances[vv];
            if (zv.scenes.length > 0) {
              mv.e._LastCreatedScene = zv.scenes[this._engine.scenes.length - 1];
              break
            }
            vv--
          }
        }
        hv = this._engine._virtualScenes.indexOf(this), hv > -1 && this._engine._virtualScenes.splice(hv, 1), this._engine.wipeCaches(!0), this.uD.clear(), this.onBeforeRenderObservable.clear(), this.onAfterRenderObservable.clear(), this.onBeforeRenderTargetsRenderObservable.clear(), this.onAfterRenderTargetsRenderObservable.clear(), this.onAfterStepObservable.clear(), this.onBeforeStepObservable.clear(), this.onBeforeActiveMeshesEvaluationObservable.clear(), this.onAfterActiveMeshesEvaluationObservable.clear(), this.onBeforeParticlesRenderingObservable.clear(), this.onAfterParticlesRenderingObservable.clear(), this.onBeforeDrawPhaseObservable.clear(), this.onAfterDrawPhaseObservable.clear(), this.onBeforeAnimationsObservable.clear(), this.onAfterAnimationsObservable.clear(), this.onDataLoadedObservable.clear(), this.onBeforeRenderingGroupObservable.clear(), this.onAfterRenderingGroupObservable.clear(), this.onMeshImportedObservable.clear(), this.onBeforeCameraRenderObservable.clear(), this.onAfterCameraRenderObservable.clear(), this.onAfterRenderCameraObservable.clear(), this.onReadyObservable.clear(), this.onNewCameraAddedObservable.clear(), this.onCameraRemovedObservable.clear(), this.onNewLightAddedObservable.clear(), this.onLightRemovedObservable.clear(), this.onNewGeometryAddedObservable.clear(), this.onGeometryRemovedObservable.clear(), this.onNewTransformNodeAddedObservable.clear(), this.onTransformNodeRemovedObservable.clear(), this.onNewMeshAddedObservable.clear(), this.onMeshRemovedObservable.clear(), this.onNewSkeletonAddedObservable.clear(), this.onSkeletonRemovedObservable.clear(), this.onNewMaterialAddedObservable.clear(), this.onNewMultiMaterialAddedObservable.clear(), this.onMaterialRemovedObservable.clear(), this.onMultiMaterialRemovedObservable.clear(), this.onNewTextureAddedObservable.clear(), this.onTextureRemovedObservable.clear(), this.onNewFrameGraphAddedObservable.clear(), this.onFrameGraphRemovedObservable.clear(), this.onNewObjectRendererAddedObservable.clear(), this.onObjectRendererRemovedObservable.clear(), this.onPrePointerObservable.clear(), this.onPointerObservable.clear(), this.onPreKeyboardObservable.clear(), this.onKeyboardObservable.clear(), this.onActiveCameraChanged.clear(), this.onScenePerformancePriorityChangedObservable.clear(), this.onClearColorChangedObservable.clear(), this.onEnvironmentTextureChangedObservable.clear(), this.onMeshUnderPointerUpdatedObservable.clear(), this._isDisposed = !0
      }
      _disposeList(vv, zv) {
        const Pv = vv.slice(0);
        zv = zv ?? (vv => vv.dispose());
        for (const hv of Pv) zv(hv);
        vv.length = 0
      }
      get mzv() {
        return this._isDisposed
      }
      clearCachedVertexData() {
        for (let vv = 0; vv < this.meshes.length; vv++) {
          const zv = this.meshes[vv].geometry;
          zv && zv.clearCachedData()
        }
      }
      cleanCachedTextureBuffer() {
        for (const vv of this.textures) {
          vv._buffer && (vv._buffer = null)
        }
      }
      getWorldExtends(vv) {
        const zv = new lv.l(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
          Pv = new lv.l(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
        vv = vv || (() => !0);
        const hv = this.meshes.filter(vv);
        for (const Sv of hv) {
          if (Sv.computeWorldMatrix(!0), !Sv.sF || 0 === Sv.sF.length || Sv.infiniteDistance) continue;
          const vv = Sv.cV(),
            hv = vv.boundingBox.minimumWorld,
            ev = vv.boundingBox.maximumWorld;
          lv.l.CheckExtends(hv, zv, Pv), lv.l.CheckExtends(ev, zv, Pv)
        }
        return zv.x === Number.MAX_VALUE ? {
          min: lv.l.Zero(),
          max: lv.l.Zero()
        } : {
          min: zv,
          max: Pv
        }
      }
      createPickingRay(vv, zv, Pv, hv) {
        throw (0, jv.m)("Ray")
      }
      createPickingRayToRef(vv, zv, Pv, hv, Sv) {
        throw (0, jv.m)("Ray")
      }
      createPickingRayInCameraSpace(vv, zv, Pv) {
        throw (0, jv.m)("Ray")
      }
      createPickingRayInCameraSpaceToRef(vv, zv, Pv, hv) {
        throw (0, jv.m)("Ray")
      }
      HW(vv, zv, Pv, hv, Sv, ev) {
        const gv = (0, jv.m)("Ray", !0);
        return gv && vP.d.Warn(gv), new wv.c
      }
      pickWithBoundingInfo(vv, zv, Pv, hv, Sv) {
        const ev = (0, jv.m)("Ray", !0);
        return ev && vP.d.Warn(ev), new wv.c
      }
      pickWithRay(vv, zv, Pv, hv) {
        throw (0, jv.m)("Ray")
      }
      multiPick(vv, zv, Pv, hv, Sv) {
        throw (0, jv.m)("Ray")
      }
      multiPickWithRay(vv, zv, Pv) {
        throw (0, jv.m)("Ray")
      }
      setPointerOverMesh(vv, zv, Pv) {
        this._inputManager.setPointerOverMesh(vv, zv, Pv)
      }
      getPointerOverMesh() {
        return this._inputManager.getPointerOverMesh()
      }
      _rebuildGeometries() {
        for (const vv of this.geometries) vv._rebuild();
        for (const vv of this.meshes) vv._rebuild();
        this.postProcessManager && this.postProcessManager._rebuild();
        for (const vv of this._components) vv.rebuild();
        for (const vv of this.mF) vv.rebuild();
        if (this.spriteManagers)
          for (const vv of this.spriteManagers) vv.rebuild()
      }
      _rebuildTextures() {
        for (const vv of this.textures) vv._rebuild(!0);
        this.markAllMaterialsAsDirty(1)
      }
      _getByTags(vv, zv, Pv) {
        if (void 0 === zv) return vv;
        const hv = [];
        for (const Sv in vv) {
          const ev = vv[Sv];
          Nv.c && Nv.c.MatchesQuery(ev, zv) && (!Pv || Pv(ev)) && hv.push(ev)
        }
        return hv
      }
      getMeshesByTags(vv, zv) {
        return this._getByTags(this.meshes, vv, zv)
      }
      getCamerasByTags(vv, zv) {
        return this._getByTags(this.cameras, vv, zv)
      }
      getLightsByTags(vv, zv) {
        return this._getByTags(this.lights, vv, zv)
      }
      getMaterialByTags(vv, zv) {
        return this._getByTags(this.materials, vv, zv).concat(this._getByTags(this.multiMaterials, vv, zv))
      }
      getTransformNodesByTags(vv, zv) {
        return this._getByTags(this.transformNodes, vv, zv)
      }
      setRenderingOrder(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          hv = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        this._renderingManager.setRenderingOrder(vv, zv, Pv, hv)
      }
      setRenderingAutoClearDepthStencil(vv, zv) {
        let Pv = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          hv = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        this._renderingManager.setRenderingAutoClearDepthStencil(vv, zv, Pv, hv)
      }
      getAutoClearDepthStencilSetup(vv) {
        return this._renderingManager.getAutoClearDepthStencilSetup(vv)
      }
      _forceBlockMaterialDirtyMechanism(vv) {
        this._blockMaterialDirtyMechanism = vv
      }
      get blockMaterialDirtyMechanism() {
        return this._blockMaterialDirtyMechanism
      }
      set blockMaterialDirtyMechanism(vv) {
        this._blockMaterialDirtyMechanism !== vv && (this._blockMaterialDirtyMechanism = vv, vv || this.markAllMaterialsAsDirty(127))
      }
      markAllMaterialsAsDirty(vv, zv) {
        if (!this._blockMaterialDirtyMechanism)
          for (const Pv of this.materials) zv && !zv(Pv) || Pv.xvv(vv)
      }
      _loadFile(vv, zv, Pv, hv, Sv, ev, gv) {
        const pv = (0, bv.l)(vv, zv, Pv, hv ? this.offlineProvider : void 0, Sv, ev, gv);
        return this._activeRequests.push(pv), pv.onCompleteObservable.add((vv => {
          this._activeRequests.splice(this._activeRequests.indexOf(vv), 1)
        })), pv
      }
      async _loadFileAsync(vv, zv, Pv, hv, Sv) {
        return await new Promise(((ev, gv) => {
          this._loadFile(vv, (vv => {
            ev(vv)
          }), zv, Pv, hv, ((vv, zv) => {
            gv(zv)
          }), Sv)
        }))
      }
      async _loadDelayedFileAsync(vv, zv, Pv) {
        this._delayedFileRequests || (this._delayedFileRequests = new Map);
        const hv = `${vv}|${zv?"binary":"string"}`;
        let Sv = this._delayedFileRequests.get(hv);
        if (!Sv) {
          Sv = zv ? this._loadFileAsync(vv, void 0, Pv, !0) : this._loadFileAsync(vv, void 0, Pv, !1);
          const ev = Sv;
          (async () => {
            try {
              await ev
            } catch {}
            this._delayedFileRequests?.delete(hv)
          })(), this._delayedFileRequests.set(hv, Sv)
        }
        return await Sv
      }
      _requestFile(vv, zv, Pv, hv, Sv, ev, gv) {
        const pv = (0, bv.y)(vv, zv, Pv, hv ? this.offlineProvider : void 0, Sv, ev, gv);
        return this._activeRequests.push(pv), pv.onCompleteObservable.add((vv => {
          this._activeRequests.splice(this._activeRequests.indexOf(vv), 1)
        })), pv
      }
      async _requestFileAsync(vv, zv, Pv, hv, Sv) {
        return await new Promise(((ev, gv) => {
          this._requestFile(vv, (vv => {
            ev(vv)
          }), zv, Pv, hv, (vv => {
            gv(vv)
          }), Sv)
        }))
      }
      _readFile(vv, zv, Pv, hv, Sv) {
        const ev = (0, bv.r)(vv, zv, Pv, hv, Sv);
        return this._activeRequests.push(ev), ev.onCompleteObservable.add((vv => {
          this._activeRequests.splice(this._activeRequests.indexOf(vv), 1)
        })), ev
      }
      async _readFileAsync(vv, zv, Pv) {
        return await new Promise(((hv, Sv) => {
          this._readFile(vv, (vv => {
            hv(vv)
          }), zv, Pv, (vv => {
            Sv(vv)
          }))
        }))
      }
      getPerfCollector() {
        throw (0, jv.m)("performanceViewerSceneExtension")
      }
      setActiveCameraByID(vv) {
        return this.setActiveCameraById(vv)
      }
      getMaterialByID(vv) {
        return this.getMaterialById(vv)
      }
      getLastMaterialByID(vv) {
        return this.getLastMaterialById(vv)
      }
      getTextureByUniqueID(vv) {
        return this.getTextureByUniqueId(vv)
      }
      getCameraByID(vv) {
        return this.getCameraById(vv)
      }
      getCameraByUniqueID(vv) {
        return this.getCameraByUniqueId(vv)
      }
      getBoneByID(vv) {
        return this.getBoneById(vv)
      }
      getLightByID(vv) {
        return this.getLightById(vv)
      }
      getLightByUniqueID(vv) {
        return this.getLightByUniqueId(vv)
      }
      getParticleSystemByID(vv) {
        return this.getParticleSystemById(vv)
      }
      getGeometryByID(vv) {
        return this.getGeometryById(vv)
      }
      getMeshByID(vv) {
        return this.getMeshById(vv)
      }
      getMeshByUniqueID(vv) {
        return this.getMeshByUniqueId(vv)
      }
      getLastMeshByID(vv) {
        return this.getLastMeshById(vv)
      }
      getMeshesByID(vv) {
        return this.getMeshesById(vv)
      }
      getTransformNodeByID(vv) {
        return this.getTransformNodeById(vv)
      }
      getTransformNodeByUniqueID(vv) {
        return this.getTransformNodeByUniqueId(vv)
      }
      getTransformNodesByID(vv) {
        return this.getTransformNodesById(vv)
      }
      getNodeByID(vv) {
        return this.getNodeById(vv)
      }
      getLastEntryByID(vv) {
        return this.getLastEntryById(vv)
      }
      getLastSkeletonByID(vv) {
        return this.getLastSkeletonById(vv)
      }
    }
    eP.FOGMODE_NONE = 0, eP.FOGMODE_EXP = 1, eP.FOGMODE_EXP2 = 2, eP.FOGMODE_LINEAR = 3, eP.MinDeltaTime = 1, eP.MaxDeltaTime = 1e3, eP._OriginalDefaultMaterialFactory = eP.DefaultMaterialFactory;
    let gP = !1;

    function pP() {
      gP || (gP = !0, (0, zP.c)("BABYLON.Scene", eP))
    }(uv = eP.prototype).sortActiveAnimatables ?? (uv.sortActiveAnimatables = (0, jv.j)("Scene", "sortActiveAnimatables")), (vz = eP.prototype).beginWeightedAnimation ?? (vz.beginWeightedAnimation = (0, jv.j)("Scene", "beginWeightedAnimation")), (zz = eP.prototype).beginAnimation ?? (zz.beginAnimation = (0, jv.j)("Scene", "beginAnimation")), (Pz = eP.prototype).beginHierarchyAnimation ?? (Pz.beginHierarchyAnimation = (0, jv.j)("Scene", "beginHierarchyAnimation")), (hz = eP.prototype).beginDirectAnimation ?? (hz.beginDirectAnimation = (0, jv.j)("Scene", "beginDirectAnimation")), (Sz = eP.prototype).beginDirectHierarchyAnimation ?? (Sz.beginDirectHierarchyAnimation = (0, jv.j)("Scene", "beginDirectHierarchyAnimation")), (ez = eP.prototype).getAnimatableByTarget ?? (ez.getAnimatableByTarget = (0, jv.j)("Scene", "getAnimatableByTarget")), (gz = eP.prototype).getAllAnimatablesByTarget ?? (gz.getAllAnimatablesByTarget = (0, jv.j)("Scene", "getAllAnimatablesByTarget")), (pz = eP.prototype).stopAllAnimations ?? (pz.stopAllAnimations = (0, jv.j)("Scene", "stopAllAnimations")), (dz = eP.prototype).getSoundByName ?? (dz.getSoundByName = (0, jv.j)("Scene", "getSoundByName")), (Nz = eP.prototype).createOrUpdateSelectionOctree ?? (Nz.createOrUpdateSelectionOctree = (0, jv.j)("Scene", "createOrUpdateSelectionOctree")), (lz = eP.prototype).createDefaultLight ?? (lz.createDefaultLight = (0, jv.j)("Scene", "createDefaultLight")), (Tz = eP.prototype).createDefaultCamera ?? (Tz.createDefaultCamera = (0, jv.j)("Scene", "createDefaultCamera")), (Wz = eP.prototype).createDefaultCameraOrLight ?? (Wz.createDefaultCameraOrLight = (0, jv.j)("Scene", "createDefaultCameraOrLight")), (wz = eP.prototype).createDefaultSkybox ?? (wz.createDefaultSkybox = (0, jv.j)("Scene", "createDefaultSkybox")), (az = eP.prototype).createDefaultEnvironment ?? (az.createDefaultEnvironment = (0, jv.j)("Scene", "createDefaultEnvironment")), (sz = eP.prototype).createDefaultVRExperience ?? (sz.createDefaultVRExperience = (0, jv.j)("Scene", "createDefaultVRExperience")), (Cz = eP.prototype).createDefaultXRExperienceAsync ?? (Cz.createDefaultXRExperienceAsync = (0, jv.j)("Scene", "createDefaultXRExperienceAsync")), (iz = eP.prototype).getGlowLayerByName ?? (iz.getGlowLayerByName = (0, jv.j)("Scene", "getGlowLayerByName")), (cz = eP.prototype).getHighlightLayerByName ?? (cz.getHighlightLayerByName = (0, jv.j)("Scene", "getHighlightLayerByName")), (Gz = eP.prototype).getSelectionOutlineLayerByName ?? (Gz.getSelectionOutlineLayerByName = (0, jv.j)("Scene", "getSelectionOutlineLayerByName")), (mz = eP.prototype).removeLensFlareSystem ?? (mz.removeLensFlareSystem = (0, jv.j)("Scene", "removeLensFlareSystem")), (jz = eP.prototype).addLensFlareSystem ?? (jz.addLensFlareSystem = (0, jv.j)("Scene", "addLensFlareSystem")), (fz = eP.prototype).getLensFlareSystemByName ?? (fz.getLensFlareSystemByName = (0, jv.j)("Scene", "getLensFlareSystemByName")), (Fz = eP.prototype).getLensFlareSystemByID ?? (Fz.getLensFlareSystemByID = (0, jv.j)("Scene", "getLensFlareSystemByID")), (Yz = eP.prototype).getLensFlareSystemById ?? (Yz.getLensFlareSystemById = (0, jv.j)("Scene", "getLensFlareSystemById")), (nz = eP.prototype).getPhysicsEngine ?? (nz.getPhysicsEngine = (0, jv.j)("Scene", "getPhysicsEngine")), (Oz = eP.prototype).enablePhysics ?? (Oz.enablePhysics = (0, jv.j)("Scene", "enablePhysics")), (Dz = eP.prototype).disablePhysicsEngine ?? (Dz.disablePhysicsEngine = (0, jv.j)("Scene", "disablePhysicsEngine")), (Kz = eP.prototype).isPhysicsEnabled ?? (Kz.isPhysicsEnabled = (0, jv.j)("Scene", "isPhysicsEnabled")), (Vz = eP.prototype).deleteCompoundImpostor ?? (Vz.deleteCompoundImpostor = (0, jv.j)("Scene", "deleteCompoundImpostor")), (Uz = eP.prototype).removeReflectionProbe ?? (Uz.removeReflectionProbe = (0, jv.j)("Scene", "removeReflectionProbe")), (Rz = eP.prototype).addReflectionProbe ?? (Rz.addReflectionProbe = (0, jv.j)("Scene", "addReflectionProbe")), (xz = eP.prototype).getBoundingBoxRenderer ?? (xz.getBoundingBoxRenderer = (0, jv.j)("Scene", "getBoundingBoxRenderer")), (tz = eP.prototype).enableDepthRenderer ?? (tz.enableDepthRenderer = (0, jv.j)("Scene", "enableDepthRenderer")), (qz = eP.prototype).disableDepthRenderer ?? (qz.disableDepthRenderer = (0, jv.j)("Scene", "disableDepthRenderer")), (Iz = eP.prototype).enableFluidRenderer ?? (Iz.enableFluidRenderer = (0, jv.j)("Scene", "enableFluidRenderer")), (Qz = eP.prototype).disableFluidRenderer ?? (Qz.disableFluidRenderer = (0, jv.j)("Scene", "disableFluidRenderer")), (Zz = eP.prototype).enableGeometryBufferRenderer ?? (Zz.enableGeometryBufferRenderer = (0, jv.j)("Scene", "enableGeometryBufferRenderer")), (Az = eP.prototype).disableGeometryBufferRenderer ?? (Az.disableGeometryBufferRenderer = (0, jv.j)("Scene", "disableGeometryBufferRenderer")), (Lz = eP.prototype).enableIblCdfGenerator ?? (Lz.enableIblCdfGenerator = (0, jv.j)("Scene", "enableIblCdfGenerator")), (Hz = eP.prototype).disableIblCdfGenerator ?? (Hz.disableIblCdfGenerator = (0, jv.j)("Scene", "disableIblCdfGenerator")), (Mz = eP.prototype).getOutlineRenderer ?? (Mz.getOutlineRenderer = (0, jv.j)("Scene", "getOutlineRenderer")), (yz = eP.prototype).enablePrePassRenderer ?? (yz.enablePrePassRenderer = (0, jv.j)("Scene", "enablePrePassRenderer")), (Bz = eP.prototype).disablePrePassRenderer ?? (Bz.disablePrePassRenderer = (0, jv.j)("Scene", "disablePrePassRenderer")), (Jz = eP.prototype).enableSubSurfaceForPrePass ?? (Jz.enableSubSurfaceForPrePass = (0, jv.j)("Scene", "enableSubSurfaceForPrePass")), (Ez = eP.prototype).disableSubSurfaceForPrePass ?? (Ez.disableSubSurfaceForPrePass = (0, jv.j)("Scene", "disableSubSurfaceForPrePass")), (oz = eP.prototype).pickSprite ?? (oz.pickSprite = (0, jv.j)("Scene", "pickSprite")), (bz = eP.prototype).pickSpriteWithRay ?? (bz.pickSpriteWithRay = (0, jv.j)("Scene", "pickSpriteWithRay")), (rz = eP.prototype).multiPickSprite ?? (rz.multiPickSprite = (0, jv.j)("Scene", "multiPickSprite")), (kz = eP.prototype).multiPickSpriteWithRay ?? (kz.multiPickSpriteWithRay = (0, jv.j)("Scene", "multiPickSpriteWithRay")), (Xz = eP.prototype).setPointerOverSprite ?? (Xz.setPointerOverSprite = (0, jv.j)("Scene", "setPointerOverSprite")), (uz = eP.prototype).getPointerOverSprite ?? (uz.getPointerOverSprite = (0, jv.j)("Scene", "getPointerOverSprite")), Object.getOwnPropertyDescriptor(eP.prototype, "mainSoundTrack") || Object.defineProperty(eP.prototype, "mainSoundTrack", (0, jv.g)("Scene", "mainSoundTrack")), Object.getOwnPropertyDescriptor(eP.prototype, "soundTracks") || Object.defineProperty(eP.prototype, "soundTracks", (0, jv.g)("Scene", "soundTracks")), Object.getOwnPropertyDescriptor(eP.prototype, "audioEnabled") || Object.defineProperty(eP.prototype, "audioEnabled", (0, jv.g)("Scene", "audioEnabled")), Object.getOwnPropertyDescriptor(eP.prototype, "headphone") || Object.defineProperty(eP.prototype, "headphone", (0, jv.g)("Scene", "headphone")), Object.getOwnPropertyDescriptor(eP.prototype, "audioListenerPositionProvider") || Object.defineProperty(eP.prototype, "audioListenerPositionProvider", (0, jv.g)("Scene", "audioListenerPositionProvider")), Object.getOwnPropertyDescriptor(eP.prototype, "audioListenerRotationProvider") || Object.defineProperty(eP.prototype, "audioListenerRotationProvider", (0, jv.g)("Scene", "audioListenerRotationProvider")), Object.getOwnPropertyDescriptor(eP.prototype, "audioPositioningRefreshRate") || Object.defineProperty(eP.prototype, "audioPositioningRefreshRate", (0, jv.g)("Scene", "audioPositioningRefreshRate")), Object.getOwnPropertyDescriptor(eP.prototype, "selectionOctree") || Object.defineProperty(eP.prototype, "selectionOctree", (0, jv.g)("Scene", "selectionOctree")), Object.getOwnPropertyDescriptor(eP.prototype, "debugLayer") || Object.defineProperty(eP.prototype, "debugLayer", (0, jv.g)("Scene", "debugLayer")), Object.getOwnPropertyDescriptor(eP.prototype, "gamepadManager") || Object.defineProperty(eP.prototype, "gamepadManager", (0, jv.g)("Scene", "gamepadManager")), Object.getOwnPropertyDescriptor(eP.prototype, "simplificationQueue") || Object.defineProperty(eP.prototype, "simplificationQueue", (0, jv.g)("Scene", "simplificationQueue")), Object.getOwnPropertyDescriptor(eP.prototype, "onBeforePhysicsObservable") || Object.defineProperty(eP.prototype, "onBeforePhysicsObservable", (0, jv.g)("Scene", "onBeforePhysicsObservable")), Object.getOwnPropertyDescriptor(eP.prototype, "onAfterPhysicsObservable") || Object.defineProperty(eP.prototype, "onAfterPhysicsObservable", (0, jv.g)("Scene", "onAfterPhysicsObservable")), Object.getOwnPropertyDescriptor(eP.prototype, "reflectionProbes") || Object.defineProperty(eP.prototype, "reflectionProbes", (0, jv.g)("Scene", "reflectionProbes")), Object.getOwnPropertyDescriptor(eP.prototype, "forceShowBoundingBoxes") || Object.defineProperty(eP.prototype, "forceShowBoundingBoxes", (0, jv.g)("Scene", "forceShowBoundingBoxes")), Object.getOwnPropertyDescriptor(eP.prototype, "depthPeelingRenderer") || Object.defineProperty(eP.prototype, "depthPeelingRenderer", (0, jv.g)("Scene", "depthPeelingRenderer")), Object.getOwnPropertyDescriptor(eP.prototype, "useOrderIndependentTransparency") || Object.defineProperty(eP.prototype, "useOrderIndependentTransparency", (0, jv.g)("Scene", "useOrderIndependentTransparency")), Object.getOwnPropertyDescriptor(eP.prototype, "fluidRenderer") || Object.defineProperty(eP.prototype, "fluidRenderer", (0, jv.g)("Scene", "fluidRenderer")), Object.getOwnPropertyDescriptor(eP.prototype, "geometryBufferRenderer") || Object.defineProperty(eP.prototype, "geometryBufferRenderer", (0, jv.g)("Scene", "geometryBufferRenderer")), Object.getOwnPropertyDescriptor(eP.prototype, "iblCdfGenerator") || Object.defineProperty(eP.prototype, "iblCdfGenerator", (0, jv.g)("Scene", "iblCdfGenerator")), Object.getOwnPropertyDescriptor(eP.prototype, "prePassRenderer") || Object.defineProperty(eP.prototype, "prePassRenderer", (0, jv.g)("Scene", "prePassRenderer")), Object.getOwnPropertyDescriptor(eP.prototype, "subSurfaceConfiguration") || Object.defineProperty(eP.prototype, "subSurfaceConfiguration", (0, jv.g)("Scene", "subSurfaceConfiguration")), Object.getOwnPropertyDescriptor(eP.prototype, "spriteManagers") || Object.defineProperty(eP.prototype, "spriteManagers", (0, jv.g)("Scene", "spriteManagers")), Object.getOwnPropertyDescriptor(eP.prototype, "onBeforeSpritesRenderingObservable") || Object.defineProperty(eP.prototype, "onBeforeSpritesRenderingObservable", (0, jv.g)("Scene", "onBeforeSpritesRenderingObservable")), Object.getOwnPropertyDescriptor(eP.prototype, "onAfterSpritesRenderingObservable") || Object.defineProperty(eP.prototype, "onAfterSpritesRenderingObservable", (0, jv.g)("Scene", "onAfterSpritesRenderingObservable"))
  },
  39477: (vv, zv, Pv) => {
    Pv.d(zv, {
      d: () => hv,
      e: () => Sv
    });
    class hv {}
    hv.NAME_EFFECTLAYER = "EffectLayer", hv.NAME_LAYER = "Layer", hv.NAME_LENSFLARESYSTEM = "LensFlareSystem", hv.NAME_BOUNDINGBOXRENDERER = "BoundingBoxRenderer", hv.NAME_PARTICLESYSTEM = "ParticleSystem", hv.NAME_GAMEPAD = "Gamepad", hv.NAME_SIMPLIFICATIONQUEUE = "SimplificationQueue", hv.NAME_GEOMETRYBUFFERRENDERER = "GeometryBufferRenderer", hv.NAME_PREPASSRENDERER = "PrePassRenderer", hv.NAME_DEPTHRENDERER = "DepthRenderer", hv.NAME_DEPTHPEELINGRENDERER = "DepthPeelingRenderer", hv.NAME_POSTPROCESSRENDERPIPELINEMANAGER = "PostProcessRenderPipelineManager", hv.NAME_SPRITE = "Sprite", hv.NAME_SUBSURFACE = "SubSurface", hv.NAME_OUTLINERENDERER = "Outline", hv.NAME_PROCEDURALTEXTURE = "ProceduralTexture", hv.NAME_SHADOWGENERATOR = "ShadowGenerator", hv.NAME_OCTREE = "cPv", hv.NAME_PHYSICSENGINE = "PhysicsEngine", hv.NAME_AUDIO = "Audio", hv.NAME_FLUIDRENDERER = "FluidRenderer", hv.NAME_IBLCDFGENERATOR = "iblCDFGenerator", hv.NAME_CLUSTEREDLIGHTING = "ClusteredLighting", hv.STEP_ISREADYFORMESH_EFFECTLAYER = 0, hv.STEP_ISREADYFORMESH_DEPTHRENDERER = 1, hv.STEP_BEFOREEVALUATEACTIVEMESH_BOUNDINGBOXRENDERER = 0, hv.STEP_EVALUATESUBMESH_BOUNDINGBOXRENDERER = 0, hv.STEP_PREACTIVEMESH_BOUNDINGBOXRENDERER = 0, hv.STEP_CAMERADRAWRENDERTARGET_EFFECTLAYER = 1, hv.STEP_BEFORECAMERADRAW_PREPASS = 0, hv.STEP_BEFORECAMERADRAW_EFFECTLAYER = 1, hv.STEP_BEFORECAMERADRAW_LAYER = 2, hv.STEP_BEFORERENDERTARGETDRAW_PREPASS = 0, hv.STEP_BEFORERENDERTARGETDRAW_LAYER = 1, hv.STEP_BEFORERENDERINGMESH_PREPASS = 0, hv.STEP_BEFORERENDERINGMESH_OUTLINE = 1, hv.STEP_AFTERRENDERINGMESH_PREPASS = 0, hv.STEP_AFTERRENDERINGMESH_OUTLINE = 1, hv.STEP_AFTERRENDERINGGROUPDRAW_EFFECTLAYER_DRAW = 0, hv.STEP_AFTERRENDERINGGROUPDRAW_BOUNDINGBOXRENDERER = 1, hv.STEP_BEFORECAMERAUPDATE_SIMPLIFICATIONQUEUE = 0, hv.STEP_BEFORECLEAR_PROCEDURALTEXTURE = 0, hv.STEP_BEFORECLEAR_PREPASS = 1, hv.STEP_BEFORERENDERTARGETCLEAR_PREPASS = 0, hv.STEP_AFTERRENDERTARGETDRAW_PREPASS = 0, hv.STEP_AFTERRENDERTARGETDRAW_LAYER = 1, hv.STEP_AFTERCAMERADRAW_PREPASS = 0, hv.STEP_AFTERCAMERADRAW_EFFECTLAYER = 1, hv.STEP_AFTERCAMERADRAW_LENSFLARESYSTEM = 2, hv.STEP_AFTERCAMERADRAW_EFFECTLAYER_DRAW = 3, hv.STEP_AFTERCAMERADRAW_LAYER = 4, hv.STEP_AFTERCAMERADRAW_FLUIDRENDERER = 5, hv.STEP_AFTERCAMERAPOSTPROCESS_LAYER = 0, hv.STEP_AFTERRENDERTARGETPOSTPROCESS_LAYER = 0, hv.STEP_AFTERRENDER_AUDIO = 0, hv.STEP_GATHERRENDERTARGETS_DEPTHRENDERER = 0, hv.STEP_GATHERRENDERTARGETS_GEOMETRYBUFFERRENDERER = 1, hv.STEP_GATHERRENDERTARGETS_SHADOWGENERATOR = 2, hv.STEP_GATHERRENDERTARGETS_POSTPROCESSRENDERPIPELINEMANAGER = 3, hv.STEP_GATHERACTIVECAMERARENDERTARGETS_DEPTHRENDERER = 0, hv.STEP_GATHERACTIVECAMERARENDERTARGETS_FLUIDRENDERER = 1, hv.STEP_GATHERACTIVECAMERARENDERTARGETS_CLUSTEREDLIGHTING = 2, hv.STEP_POINTERMOVE_SPRITE = 0, hv.STEP_POINTERDOWN_SPRITE = 0, hv.STEP_POINTERUP_SPRITE = 0;
    class Sv extends Array {
      constructor(vv) {
        super(...vv)
      }
      static Create() {
        return Object.create(Sv.prototype)
      }
      registerStep(vv, zv, Pv) {
        let hv, Sv = 0;
        for (; Sv < this.length; Sv++) {
          if (hv = this[Sv].index, vv < hv) break
        }
        this.splice(Sv, 0, {
          index: vv,
          component: zv,
          action: Pv.bind(zv)
        })
      }
      clear() {
        this.length = 0
      }
    }
  },
  39295: (vv, zv, Pv) => {
    Pv.d(zv, {
      c: () => gv,
      d: () => pv,
      e: () => hv,
      f: () => Sv,
      i: () => ev
    });

    function hv(vv, zv, Pv, hv, Sv, ev) {
      function gv(vv) {
        if (void 0 !== vv && "function" !== typeof vv) throw new TypeError("Function expected");
        return vv
      }
      for (var pv, dv = hv.kind, Nv = "getter" === dv ? "get" : "setter" === dv ? "set" : "value", lv = !zv && vv ? hv.static ? vv : vv.prototype : null, Tv = zv || (lv ? Object.getOwnPropertyDescriptor(lv, hv.name) : {}), Wv = !1, wv = Pv.length - 1; wv >= 0; wv--) {
        var av = {};
        for (var sv in hv) av[sv] = "access" === sv ? {} : hv[sv];
        for (var sv in hv.access) av.access[sv] = hv.access[sv];
        av.addInitializer = function(vv) {
          if (Wv) throw new TypeError("Cannot add initializers after decoration has completed");
          ev.push(gv(vv || null))
        };
        var Cv = (0, Pv[wv])("accessor" === dv ? {
          get: Tv.get,
          set: Tv.set
        } : Tv[Nv], av);
        if ("accessor" === dv) {
          if (void 0 === Cv) continue;
          if (null === Cv || "object" !== typeof Cv) throw new TypeError("Object expected");
          (pv = gv(Cv.get)) && (Tv.get = pv), (pv = gv(Cv.set)) && (Tv.set = pv), (pv = gv(Cv.init)) && Sv.unshift(pv)
        } else(pv = gv(Cv)) && ("field" === dv ? Sv.unshift(pv) : Tv[Nv] = pv)
      }
      lv && Object.defineProperty(lv, hv.name, Tv), Wv = !0
    }

    function Sv(vv, zv, Pv) {
      for (var hv = arguments.length > 2, Sv = 0; Sv < zv.length; Sv++) Pv = hv ? zv[Sv].call(vv, Pv) : zv[Sv].call(vv);
      return hv ? Pv : void 0
    }

    function ev(vv, zv, Pv) {
      return "symbol" === typeof zv && (zv = zv.description ? "[".concat(zv.description, "]") : ""), Object.defineProperty(vv, "name", {
        configurable: !0,
        value: Pv ? "".concat(Pv, " ", zv) : zv
      })
    }
    Object.create;
    Object.create;

    function gv(vv, zv, Pv, hv) {
      if ("a" === Pv && !hv) throw new TypeError("Private accessor was defined without a getter");
      if ("function" === typeof zv ? vv !== zv || !hv : !zv.has(vv)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return "m" === Pv ? hv : "a" === Pv ? hv.call(vv) : hv ? hv.value : zv.get(vv)
    }

    function pv(vv, zv, Pv, hv, Sv) {
      if ("m" === hv) throw new TypeError("Private method is not writable");
      if ("a" === hv && !Sv) throw new TypeError("Private accessor was defined without a setter");
      if ("function" === typeof zv ? vv !== zv || !Sv : !zv.has(vv)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return "a" === hv ? Sv.call(vv, Pv) : Sv ? Sv.value = Pv : zv.set(vv, Pv), Pv
    }
    "function" === typeof SuppressedError && SuppressedError
  }
};
Object.freeze(modules);
for (const vv in modules) Object.freeze(modules[vv]);