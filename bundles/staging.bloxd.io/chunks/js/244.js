export const id = 244;
export const ids = [244];
export const modules = {
  40115: (dd, Jd, kd) => {
    kd.d(Jd, {
      e: () => Zd,
      f: () => Od,
      i: () => Cd,
      j: () => gd
    });
    var pd = kd(39893),
      Nd = kd(38812),
      Wd = kd(40032),
      Pd = kd(39933);
    class Zd {
      get lq() {
        return this._isDisposed
      }
      constructor(dd, Jd, kd) {
        let Nd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          Wd = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          Zd = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
          gd = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
          Cd = arguments.length > 7 ? arguments[7] : void 0,
          Kd = arguments.length > 8 ? arguments[8] : void 0;
        this._isAlreadyOwned = !1, this._isDisposed = !1, (0, Pd.e)(), dd && dd.Wm ? this._engine = dd.Wm().eL() : this._engine = dd, this._updatable = kd, this._instanced = Zd, this._divisor = Cd || 1, this._label = Kd, Jd instanceof pd.d ? (this._data = null, this._buffer = Jd) : (this._data = Jd, this._buffer = null), this.byteStride = gd ? Nd : Nd * Float32Array.BYTES_PER_ELEMENT, Wd || this.create()
      }
      createVertexBuffer(dd, Jd, kd, pd, Nd) {
        let Wd = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
          Pd = arguments.length > 6 ? arguments[6] : void 0;
        const Zd = Wd ? Jd : Jd * Float32Array.BYTES_PER_ELEMENT,
          Cd = pd ? Wd ? pd : pd * Float32Array.BYTES_PER_ELEMENT : this.byteStride;
        return new gd(this._engine, this, dd, this._updatable, !0, Cd, void 0 === Nd ? this._instanced : Nd, Zd, kd, void 0, void 0, !0, this._divisor || Pd)
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
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        !dd && this._buffer || (dd = dd || this._data, dd && (this._buffer ? this._updatable && (this._engine.updateDynamicVertexBuffer(this._buffer, dd), this._data = dd) : this._updatable ? (this._buffer = this._engine.createDynamicVertexBuffer(dd, this._label), this._data = dd) : this._buffer = this._engine.createVertexBuffer(dd, void 0, this._label)))
      }
      _rebuild() {
        if (this._data) this._buffer = null, this.create(this._data);
        else {
          if (!this._buffer) return;
          if (this._buffer.oo > 0) return void(this._updatable ? this._buffer = this._engine.createDynamicVertexBuffer(this._buffer.oo, this._label) : this._buffer = this._engine.createVertexBuffer(this._buffer.oo, void 0, this._label));
          Nd.c.Warn(`Missing data for buffer "${this._label}" ${this._buffer?"(uniqueId: "+this._buffer.uniqueId+")":""}. Buffer reconstruction failed.`), this._buffer = null
        }
      }
      update(dd) {
        this.create(dd)
      }
      updateDirectly(dd, Jd, kd) {
        let pd = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        this._buffer && this._updatable && (this._engine.updateDynamicVertexBuffer(this._buffer, dd, pd ? Jd : Jd * Float32Array.BYTES_PER_ELEMENT, kd ? kd * this.byteStride : void 0), this._data = 0 === Jd && void 0 === kd ? dd : null)
      }
      _increaseReferences() {
        this._buffer && (this._isAlreadyOwned ? this._buffer.references++ : this._isAlreadyOwned = !0)
      }
      dispose() {
        this._buffer && this._engine._releaseBuffer(this._buffer) && (this._isDisposed = !0, this._data = null, this._buffer = null)
      }
    }
    class gd {
      get lq() {
        return this._isDisposed
      }
      get instanceDivisor() {
        return this._instanceDivisor
      }
      set instanceDivisor(dd) {
        const Jd = 0 != dd;
        this._instanceDivisor = dd, Jd !== this._instanced && (this._instanced = Jd, this._computeHashCode())
      }
      get _maxVerticesCount() {
        const dd = this.getData();
        return dd ? Array.isArray(dd) ? dd.length / (this.byteStride / 4) - this.byteOffset / 4 : (dd.byteLength - this.byteOffset) / this.byteStride : 0
      }
      constructor(dd, Jd, kd, pd, Nd, Pd, od, ld, Qd, Ld) {
        let Od, ed = arguments.length > 10 && void 0 !== arguments[10] && arguments[10],
          Rd = arguments.length > 11 && void 0 !== arguments[11] && arguments[11],
          Id = arguments.length > 12 && void 0 !== arguments[12] ? arguments[12] : 1,
          Gd = arguments.length > 13 && void 0 !== arguments[13] && arguments[13];
        if (this._isDisposed = !1, this.engine = dd, "object" === typeof pd && null !== pd ? (Od = pd.updatable ?? !1, Nd = pd.postponeInternalCreation, Pd = pd.stride, od = pd.instanced, ld = pd.offset, Qd = pd.size, Ld = pd.type, ed = pd.normalized ?? !1, Rd = pd.useBytes ?? !1, Id = pd.divisor ?? 1, Gd = pd.takeBufferOwnership ?? !1, this._label = pd.label) : Od = !!pd, Jd instanceof Zd ? (this._buffer = Jd, this._ownsBuffer = Gd) : (this._buffer = new Zd(dd, Jd, Od, Pd, Nd, od, Rd, Id, this._label), this._ownsBuffer = !0), this.uniqueId = gd._Counter++, this._kind = kd, void 0 === Ld) {
          const dd = this.getData();
          this.type = dd ? Kd(dd) : gd.FLOAT
        } else this.type = Ld;
        const vd = (0, Wd.q)(this.type);
        Rd ? (this._size = Qd || (Pd ? Pd / vd : Cd(kd)), this.byteStride = Pd || this._buffer.byteStride || this._size * vd, this.byteOffset = ld || 0) : (this._size = Qd || Pd || Cd(kd), this.byteStride = Pd ? Pd * vd : this._buffer.byteStride || this._size * vd, this.byteOffset = (ld || 0) * vd), this.normalized = ed, this._instanced = void 0 !== od && od, this._instanceDivisor = od ? Id : 0, this._alignBuffer(), this._computeHashCode()
      }
      static _GetTypeHashIndex(dd) {
        switch (dd) {
          case gd.BYTE:
            return 0;
          case gd.UNSIGNED_BYTE:
            return 1;
          case gd.SHORT:
            return 2;
          case gd.UNSIGNED_SHORT:
            return 3;
          case gd.INT:
            return 4;
          case gd.UNSIGNED_INT:
            return 5;
          case gd.FLOAT:
            return 6;
          case gd.HALF_FLOAT:
            return 7;
          default:
            throw new Error(`Invalid vertex buffer type '${dd}'`)
        }
      }
      _computeHashCode() {
        this.hashCode = (gd._GetTypeHashIndex(this.type) | 0) + ((this.normalized ? 1 : 0) << 3) + (this._size - 1 << 4) + ((this._instanced ? 1 : 0) << 6) + (this.byteStride << 12)
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
      getFloatData(dd, Jd) {
        const kd = this.getData();
        return kd ? (0, Wd.o)(kd, this._size, this.type, this.byteOffset, this.byteStride, this.normalized, dd, Jd) : null
      }
      getBuffer() {
        return this._buffer.getBuffer()
      }
      getWrapperBuffer() {
        return this._buffer
      }
      getStrideSize() {
        return this.byteStride / (0, Wd.q)(this.type)
      }
      ikd() {
        return this.byteOffset / (0, Wd.q)(this.type)
      }
      getSize() {
        return arguments.length > 0 && void 0 !== arguments[0] && arguments[0] ? this._size * (0, Wd.q)(this.type) : this._size
      }
      getIsInstanced() {
        return this._instanced
      }
      getInstanceDivisor() {
        return this._instanceDivisor
      }
      create(dd) {
        this._buffer.create(dd), this._alignBuffer()
      }
      update(dd) {
        this._buffer.update(dd), this._alignBuffer()
      }
      updateDirectly(dd, Jd) {
        let kd = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this._buffer.updateDirectly(dd, Jd, void 0, kd), this._alignBuffer()
      }
      dispose() {
        this._ownsBuffer && this._buffer.dispose(), this._isDisposed = !0
      }
      forEach(dd, Jd) {
        (0, Wd.h)(this._buffer.getData(), this.byteOffset, this.byteStride, this._size, this.type, dd, this.normalized, ((dd, kd) => {
          for (let pd = 0; pd < this._size; pd++) Jd(dd[pd], kd + pd)
        }))
      }
      _alignBuffer() {}
    }

    function Cd(dd) {
      switch (dd) {
        case gd.UVKind:
        case gd.UV2Kind:
        case gd.UV3Kind:
        case gd.UV4Kind:
        case gd.UV5Kind:
        case gd.UV6Kind:
          return 2;
        case gd.NormalKind:
        case gd.PositionKind:
          return 3;
        case gd.ColorKind:
        case gd.ColorInstanceKind:
        case gd.MatricesIndicesKind:
        case gd.MatricesIndicesExtraKind:
        case gd.MatricesWeightsKind:
        case gd.MatricesWeightsExtraKind:
        case gd.TangentKind:
          return 4;
        default:
          throw new Error("Invalid kind '" + dd + "'")
      }
    }

    function Kd(dd) {
      return dd instanceof Int8Array ? gd.BYTE : dd instanceof Uint8Array ? gd.UNSIGNED_BYTE : dd instanceof Int16Array ? gd.SHORT : dd instanceof Uint16Array ? gd.UNSIGNED_SHORT : dd instanceof Int32Array ? gd.INT : dd instanceof Uint32Array ? gd.UNSIGNED_INT : gd.FLOAT
    }

    function od(dd) {
      return (0, Wd.q)(dd)
    }

    function ld(dd, Jd, kd, pd, Nd, Pd, Zd, gd) {
      (0, Wd.h)(dd, Jd, kd, pd, Nd, Pd, Zd, ((dd, Jd) => {
        for (let kd = 0; kd < pd; kd++) gd(dd[kd], Jd + kd)
      }))
    }

    function Qd(dd, Jd, kd, pd, Nd, Pd, Zd, gd) {
      return (0, Wd.o)(dd, Jd, kd, pd, Nd, Pd, Zd, gd)
    }
    gd._Counter = 0, gd.BYTE = 5120, gd.UNSIGNED_BYTE = 5121, gd.SHORT = 5122, gd.UNSIGNED_SHORT = 5123, gd.INT = 5124, gd.UNSIGNED_INT = 5125, gd.FLOAT = 5126, gd.HALF_FLOAT = 5131, gd.PositionKind = "position", gd.NormalKind = "normal", gd.TangentKind = "tangent", gd.UVKind = "uv", gd.UV2Kind = "uv2", gd.UV3Kind = "uv3", gd.UV4Kind = "uv4", gd.UV5Kind = "uv5", gd.UV6Kind = "uv6", gd.ColorKind = "color", gd.ColorInstanceKind = "instanceColor", gd.MatricesIndicesKind = "matricesIndices", gd.MatricesWeightsKind = "matricesWeights", gd.MatricesIndicesExtraKind = "matricesIndicesExtra", gd.MatricesWeightsExtraKind = "matricesWeightsExtra";
    let Ld = !1;

    function Od() {
      Ld || (Ld = !0, gd.DeduceStride = Cd, gd.GetDataType = Kd, gd.GetTypeByteLength = od, gd.ForEach = ld, gd.GetFloatData = Qd)
    }
  },
  39893: (dd, Jd, kd) => {
    kd.d(Jd, {
      d: () => pd
    });
    class pd {
      get underlyingResource() {
        return null
      }
      constructor() {
        this.references = 0, this.oo = 0, this.is32Bits = !1, this.uniqueId = pd._Counter++
      }
    }
    pd._Counter = 0
  },
  40107: (dd, Jd, kd) => {
    kd.d(Jd, {
      d: () => Wd
    });
    var pd = kd(37251),
      Nd = kd(40115);
    class Wd {
      constructor() {
        this.hit = !1, this.distance = 0, this.pickedPoint = null, this.pickedMesh = null, this.bu = 0, this.bv = 0, this.faceId = -1, this.subMeshFaceId = -1, this.subMeshId = 0, this.pickedSprite = null, this.thinInstanceIndex = -1, this.ray = null, this.originMesh = null, this.aimTransform = null, this.gripTransform = null
      }
      getNormal() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          Jd = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (!this.pickedMesh || Jd && !this.pickedMesh.isVerticesDataPresent(Nd.j.NormalKind)) return null;
        let kd, Wd = this.pickedMesh.ipd();
        0 === Wd?.length && (Wd = null);
        const Pd = pd.h.IL[0],
          Zd = pd.h.IL[1],
          gd = pd.h.IL[2];
        if (Jd) {
          const dd = this.pickedMesh.getVerticesData(Nd.j.NormalKind);
          let Jd = Wd ? pd.n.FromArrayToRef(dd, 3 * Wd[3 * this.faceId], Pd) : Pd.kdd(dd[3 * this.faceId * 3], dd[3 * this.faceId * 3 + 1], dd[3 * this.faceId * 3 + 2]),
            Cd = Wd ? pd.n.FromArrayToRef(dd, 3 * Wd[3 * this.faceId + 1], Zd) : Zd.kdd(dd[3 * (3 * this.faceId + 1)], dd[3 * (3 * this.faceId + 1) + 1], dd[3 * (3 * this.faceId + 1) + 2]),
            Kd = Wd ? pd.n.FromArrayToRef(dd, 3 * Wd[3 * this.faceId + 2], gd) : gd.kdd(dd[3 * (3 * this.faceId + 2)], dd[3 * (3 * this.faceId + 2) + 1], dd[3 * (3 * this.faceId + 2) + 2]);
          Jd = Jd.scale(this.bu), Cd = Cd.scale(this.bv), Kd = Kd.scale(1 - this.bu - this.bv), kd = new pd.n(Jd.x + Cd.x + Kd.x, Jd.y + Cd.y + Kd.y, Jd.z + Cd.z + Kd.z)
        } else {
          const dd = this.pickedMesh.getVerticesData(Nd.j.PositionKind),
            Jd = Wd ? pd.n.FromArrayToRef(dd, 3 * Wd[3 * this.faceId], Pd) : Pd.kdd(dd[3 * this.faceId * 3], dd[3 * this.faceId * 3 + 1], dd[3 * this.faceId * 3 + 2]),
            Cd = Wd ? pd.n.FromArrayToRef(dd, 3 * Wd[3 * this.faceId + 1], Zd) : Zd.kdd(dd[3 * (3 * this.faceId + 1)], dd[3 * (3 * this.faceId + 1) + 1], dd[3 * (3 * this.faceId + 1) + 2]),
            Kd = Wd ? pd.n.FromArrayToRef(dd, 3 * Wd[3 * this.faceId + 2], gd) : gd.kdd(dd[3 * (3 * this.faceId + 2)], dd[3 * (3 * this.faceId + 2) + 1], dd[3 * (3 * this.faceId + 2) + 2]),
            od = Jd.subtract(Cd),
            ld = Kd.subtract(Cd);
          kd = pd.n.Cross(od, ld)
        }
        const Cd = (dd, Jd) => {
          if (-1 !== this.thinInstanceIndex) {
            const kd = dd._thinInstanceDataStorage.matrixData,
              Nd = this.thinInstanceIndex << 4;
            if (kd && kd.length > Nd) {
              const dd = pd.h.Matrix[0];
              pd.b.FromArrayToRef(kd, Nd, dd), pd.n.TransformNormalToRef(Jd, dd, Jd)
            }
          }
          let kd = dd.getWorldMatrix();
          dd.nonUniformScaling && (pd.h.Matrix[0].Fs(kd), kd = pd.h.Matrix[0], kd.setTranslationFromFloats(0, 0, 0), kd.invert(), kd.transposeToRef(pd.h.Matrix[1]), kd = pd.h.Matrix[1]), pd.n.TransformNormalToRef(Jd, kd, Jd)
        };
        if (dd && Cd(this.pickedMesh, kd), this.ray) {
          const Jd = pd.h.IL[0].Fs(kd);
          dd || Cd(this.pickedMesh, Jd), pd.n.Dot(Jd, this.ray.direction) > 0 && kd.negateInPlace()
        }
        return kd.normalize(), kd
      }
      getTextureCoordinates() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Nd.j.UVKind;
        if (!this.pickedMesh || !this.pickedMesh.isVerticesDataPresent(dd)) return null;
        const Jd = this.pickedMesh.ipd();
        if (!Jd) return null;
        const kd = this.pickedMesh.getVerticesData(dd);
        if (!kd) return null;
        let Wd = pd.k.FromArray(kd, 2 * Jd[3 * this.faceId]),
          Pd = pd.k.FromArray(kd, 2 * Jd[3 * this.faceId + 1]),
          Zd = pd.k.FromArray(kd, 2 * Jd[3 * this.faceId + 2]);
        return Wd = Wd.scale(this.bu), Pd = Pd.scale(this.bv), Zd = Zd.scale(1 - this.bu - this.bv), new pd.k(Wd.x + Pd.x + Zd.x, Wd.y + Pd.y + Zd.y)
      }
    }
  },
  39933: (dd, Jd, kd) => {
    kd.d(Jd, {
      e: () => Wd
    });
    var pd = kd(39813);
    let Nd = !1;

    function Wd() {
      Nd || (Nd = !0, pd.ThinEngine.prototype.updateDynamicIndexBuffer = function(dd, Jd) {
        let kd;
        this._currentBoundBuffer[this._gl.ELEMENT_ARRAY_BUFFER] = null, this.bindIndexBuffer(dd), kd = dd.is32Bits ? Jd instanceof Uint32Array ? Jd : new Uint32Array(Jd) : Jd instanceof Uint16Array ? Jd : new Uint16Array(Jd), this._gl.bufferData(this._gl.ELEMENT_ARRAY_BUFFER, kd, this._gl.DYNAMIC_DRAW), this._resetIndexBufferBinding()
      }, pd.ThinEngine.prototype.updateDynamicVertexBuffer = function(dd, Jd, kd, pd) {
        this.bindArrayBuffer(dd), void 0 === kd && (kd = 0);
        const Nd = Jd.byteLength || Jd.length;
        void 0 === pd || pd >= Nd && 0 === kd ? Jd instanceof Array ? this._gl.bufferSubData(this._gl.ARRAY_BUFFER, kd, new Float32Array(Jd)) : this._gl.bufferSubData(this._gl.ARRAY_BUFFER, kd, Jd) : Jd instanceof Array ? this._gl.bufferSubData(this._gl.ARRAY_BUFFER, kd, new Float32Array(Jd).subarray(0, pd / 4)) : (Jd = ArrayBuffer.isView(Jd) ? new Uint8Array(Jd.buffer, Jd.byteOffset, pd) : new Uint8Array(Jd, 0, pd), this._gl.bufferSubData(this._gl.ARRAY_BUFFER, kd, Jd)), this._resetVertexBufferBinding()
      })
    }
  },
  39906: (dd, Jd, kd) => {
    kd.d(Jd, {
      b: () => pd
    });
    class pd {
      get underlyingResource() {
        return this._webGLTexture
      }
      constructor() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          Jd = arguments.length > 1 ? arguments[1] : void 0;
        if (this._MSAARenderBuffers = null, this._context = Jd, !dd && (dd = Jd.createTexture(), !dd)) throw new Error("Unable to create webGL texture");
        this.set(dd)
      }
      setUsage() {}
      set(dd) {
        this._webGLTexture = dd
      }
      reset() {
        this._webGLTexture = null, this._MSAARenderBuffers = null
      }
      addMSAARenderBuffer(dd) {
        this._MSAARenderBuffers || (this._MSAARenderBuffers = []), this._MSAARenderBuffers.push(dd)
      }
      releaseMSAARenderBuffers() {
        if (this._MSAARenderBuffers) {
          for (const dd of this._MSAARenderBuffers) this._context.deleteRenderbuffer(dd);
          this._MSAARenderBuffers = null
        }
      }
      getMSAARenderBuffer() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return this._MSAARenderBuffers?.[dd] ?? null
      }
      release() {
        this.releaseMSAARenderBuffers(), this._webGLTexture && this._context.deleteTexture(this._webGLTexture), this.reset()
      }
    }
  },
  39874: (dd, Jd, kd) => {
    kd.d(Jd, {
      b: () => Id
    });
    var pd = kd(37280),
      Nd = kd(39822),
      Wd = kd(37277),
      Pd = kd(38812),
      Zd = kd(37271),
      gd = kd(39876);
    class Cd {
      constructor() {
        let dd = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        this._isDepthTestDirty = !1, this._isDepthMaskDirty = !1, this._isDepthFuncDirty = !1, this._isCullFaceDirty = !1, this._isCullDirty = !1, this._isZOffsetDirty = !1, this._isFrontFaceDirty = !1, dd && this.reset()
      }
      get isDirty() {
        return this._isDepthFuncDirty || this._isDepthTestDirty || this._isDepthMaskDirty || this._isCullFaceDirty || this._isCullDirty || this._isZOffsetDirty || this._isFrontFaceDirty
      }
      get zOffset() {
        return this._zOffset
      }
      set zOffset(dd) {
        this._zOffset !== dd && (this._zOffset = dd, this._isZOffsetDirty = !0)
      }
      get zOffsetUnits() {
        return this._zOffsetUnits
      }
      set zOffsetUnits(dd) {
        this._zOffsetUnits !== dd && (this._zOffsetUnits = dd, this._isZOffsetDirty = !0)
      }
      get cullFace() {
        return this._cullFace
      }
      set cullFace(dd) {
        this._cullFace !== dd && (this._cullFace = dd, this._isCullFaceDirty = !0)
      }
      get cull() {
        return this._cull
      }
      set cull(dd) {
        this._cull !== dd && (this._cull = dd, this._isCullDirty = !0)
      }
      get depthFunc() {
        return this._depthFunc
      }
      set depthFunc(dd) {
        this._depthFunc !== dd && (this._depthFunc = dd, this._isDepthFuncDirty = !0)
      }
      get depthMask() {
        return this._depthMask
      }
      set depthMask(dd) {
        this._depthMask !== dd && (this._depthMask = dd, this._isDepthMaskDirty = !0)
      }
      get depthTest() {
        return this._depthTest
      }
      set depthTest(dd) {
        this._depthTest !== dd && (this._depthTest = dd, this._isDepthTestDirty = !0)
      }
      get frontFace() {
        return this._frontFace
      }
      set frontFace(dd) {
        this._frontFace !== dd && (this._frontFace = dd, this._isFrontFaceDirty = !0)
      }
      reset() {
        this._depthMask = !0, this._depthTest = !0, this._depthFunc = null, this._cullFace = null, this._cull = null, this._zOffset = 0, this._zOffsetUnits = 0, this._frontFace = null, this._isDepthTestDirty = !0, this._isDepthMaskDirty = !0, this._isDepthFuncDirty = !1, this._isCullFaceDirty = !1, this._isCullDirty = !1, this._isZOffsetDirty = !0, this._isFrontFaceDirty = !1
      }
      apply(dd) {
        this.isDirty && (this._isCullDirty && (this.cull ? dd.enable(dd.CULL_FACE) : dd.disable(dd.CULL_FACE), this._isCullDirty = !1), this._isCullFaceDirty && (dd.cullFace(this.cullFace), this._isCullFaceDirty = !1), this._isDepthMaskDirty && (dd.depthMask(this.depthMask), this._isDepthMaskDirty = !1), this._isDepthTestDirty && (this.depthTest ? dd.enable(dd.DEPTH_TEST) : dd.disable(dd.DEPTH_TEST), this._isDepthTestDirty = !1), this._isDepthFuncDirty && (dd.depthFunc(this.depthFunc), this._isDepthFuncDirty = !1), this._isZOffsetDirty && (this.zOffset || this.zOffsetUnits ? (dd.enable(dd.POLYGON_OFFSET_FILL), dd.polygonOffset(this.zOffset, this.zOffsetUnits)) : dd.disable(dd.POLYGON_OFFSET_FILL), this._isZOffsetDirty = !1), this._isFrontFaceDirty && (dd.frontFace(this.frontFace), this._isFrontFaceDirty = !1))
      }
    }
    class Kd {
      get isDirty() {
        return this._isStencilTestDirty || this._isStencilMaskDirty || this._isStencilFuncDirty || this._isStencilOpDirty
      }
      get func() {
        return this._func
      }
      set func(dd) {
        this._func !== dd && (this._func = dd, this._isStencilFuncDirty = !0)
      }
      get backFunc() {
        return this._func
      }
      set backFunc(dd) {
        this._backFunc !== dd && (this._backFunc = dd, this._isStencilFuncDirty = !0)
      }
      get funcRef() {
        return this._funcRef
      }
      set funcRef(dd) {
        this._funcRef !== dd && (this._funcRef = dd, this._isStencilFuncDirty = !0)
      }
      get funcMask() {
        return this._funcMask
      }
      set funcMask(dd) {
        this._funcMask !== dd && (this._funcMask = dd, this._isStencilFuncDirty = !0)
      }
      get opStencilFail() {
        return this._opStencilFail
      }
      set opStencilFail(dd) {
        this._opStencilFail !== dd && (this._opStencilFail = dd, this._isStencilOpDirty = !0)
      }
      get opDepthFail() {
        return this._opDepthFail
      }
      set opDepthFail(dd) {
        this._opDepthFail !== dd && (this._opDepthFail = dd, this._isStencilOpDirty = !0)
      }
      get opStencilDepthPass() {
        return this._opStencilDepthPass
      }
      set opStencilDepthPass(dd) {
        this._opStencilDepthPass !== dd && (this._opStencilDepthPass = dd, this._isStencilOpDirty = !0)
      }
      get backOpStencilFail() {
        return this._backOpStencilFail
      }
      set backOpStencilFail(dd) {
        this._backOpStencilFail !== dd && (this._backOpStencilFail = dd, this._isStencilOpDirty = !0)
      }
      get backOpDepthFail() {
        return this._backOpDepthFail
      }
      set backOpDepthFail(dd) {
        this._backOpDepthFail !== dd && (this._backOpDepthFail = dd, this._isStencilOpDirty = !0)
      }
      get backOpStencilDepthPass() {
        return this._backOpStencilDepthPass
      }
      set backOpStencilDepthPass(dd) {
        this._backOpStencilDepthPass !== dd && (this._backOpStencilDepthPass = dd, this._isStencilOpDirty = !0)
      }
      get mask() {
        return this._mask
      }
      set mask(dd) {
        this._mask !== dd && (this._mask = dd, this._isStencilMaskDirty = !0)
      }
      get enabled() {
        return this._enabled
      }
      set enabled(dd) {
        this._enabled !== dd && (this._enabled = dd, this._isStencilTestDirty = !0)
      }
      constructor() {
        let dd = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        this._isStencilTestDirty = !1, this._isStencilMaskDirty = !1, this._isStencilFuncDirty = !1, this._isStencilOpDirty = !1, this.useStencilGlobalOnly = !1, dd && this.reset()
      }
      reset() {
        this.stencilMaterial = void 0, this.stencilGlobal?.reset(), this._isStencilTestDirty = !0, this._isStencilMaskDirty = !0, this._isStencilFuncDirty = !0, this._isStencilOpDirty = !0
      }
      apply(dd) {
        if (!dd) return;
        const Jd = !this.useStencilGlobalOnly && !!this.stencilMaterial?.enabled;
        this.enabled = Jd ? this.stencilMaterial.enabled : this.stencilGlobal.enabled, this.func = Jd ? this.stencilMaterial.func : this.stencilGlobal.func, this.backFunc = Jd ? this.stencilMaterial.backFunc : this.stencilGlobal.backFunc, this.funcRef = Jd ? this.stencilMaterial.funcRef : this.stencilGlobal.funcRef, this.funcMask = Jd ? this.stencilMaterial.funcMask : this.stencilGlobal.funcMask, this.opStencilFail = Jd ? this.stencilMaterial.opStencilFail : this.stencilGlobal.opStencilFail, this.opDepthFail = Jd ? this.stencilMaterial.opDepthFail : this.stencilGlobal.opDepthFail, this.opStencilDepthPass = Jd ? this.stencilMaterial.opStencilDepthPass : this.stencilGlobal.opStencilDepthPass, this.backOpStencilFail = Jd ? this.stencilMaterial.backOpStencilFail : this.stencilGlobal.backOpStencilFail, this.backOpDepthFail = Jd ? this.stencilMaterial.backOpDepthFail : this.stencilGlobal.backOpDepthFail, this.backOpStencilDepthPass = Jd ? this.stencilMaterial.backOpStencilDepthPass : this.stencilGlobal.backOpStencilDepthPass, this.mask = Jd ? this.stencilMaterial.mask : this.stencilGlobal.mask, this.isDirty && (this._isStencilTestDirty && (this.enabled ? dd.enable(dd.STENCIL_TEST) : dd.disable(dd.STENCIL_TEST), this._isStencilTestDirty = !1), this._isStencilMaskDirty && (dd.stencilMask(this.mask), this._isStencilMaskDirty = !1), this._isStencilFuncDirty && (dd.stencilFuncSeparate(dd.FRONT, this.func, this.funcRef, this.funcMask), dd.stencilFuncSeparate(dd.BACK, this.backFunc, this.funcRef, this.funcMask), this._isStencilFuncDirty = !1), this._isStencilOpDirty && (dd.stencilOpSeparate(dd.FRONT, this.opStencilFail, this.opDepthFail, this.opStencilDepthPass), dd.stencilOpSeparate(dd.BACK, this.backOpStencilFail, this.backOpDepthFail, this.backOpStencilDepthPass), this._isStencilOpDirty = !1))
      }
    }
    class od {
      constructor() {
        this.reset()
      }
      reset() {
        this.enabled = !1, this.mask = 255, this.funcRef = 1, this.funcMask = 255, this.func = od.ALWAYS, this.opStencilFail = od.KEEP, this.opDepthFail = od.KEEP, this.opStencilDepthPass = od.REPLACE, this.backFunc = od.ALWAYS, this.backOpStencilFail = od.KEEP, this.backOpDepthFail = od.KEEP, this.backOpStencilDepthPass = od.REPLACE
      }
      get stencilFunc() {
        return this.func
      }
      set stencilFunc(dd) {
        this.func = dd
      }
      get stencilBackFunc() {
        return this.backFunc
      }
      set stencilBackFunc(dd) {
        this.backFunc = dd
      }
      get stencilFuncRef() {
        return this.funcRef
      }
      set stencilFuncRef(dd) {
        this.funcRef = dd
      }
      get stencilFuncMask() {
        return this.funcMask
      }
      set stencilFuncMask(dd) {
        this.funcMask = dd
      }
      get stencilOpStencilFail() {
        return this.opStencilFail
      }
      set stencilOpStencilFail(dd) {
        this.opStencilFail = dd
      }
      get stencilOpDepthFail() {
        return this.opDepthFail
      }
      set stencilOpDepthFail(dd) {
        this.opDepthFail = dd
      }
      get stencilOpStencilDepthPass() {
        return this.opStencilDepthPass
      }
      set stencilOpStencilDepthPass(dd) {
        this.opStencilDepthPass = dd
      }
      get stencilBackOpStencilFail() {
        return this.backOpStencilFail
      }
      set stencilBackOpStencilFail(dd) {
        this.backOpStencilFail = dd
      }
      get stencilBackOpDepthFail() {
        return this.backOpDepthFail
      }
      set stencilBackOpDepthFail(dd) {
        this.backOpDepthFail = dd
      }
      get stencilBackOpStencilDepthPass() {
        return this.backOpStencilDepthPass
      }
      set stencilBackOpStencilDepthPass(dd) {
        this.backOpStencilDepthPass = dd
      }
      get stencilMask() {
        return this.mask
      }
      set stencilMask(dd) {
        this.mask = dd
      }
      get stencilTest() {
        return this.enabled
      }
      set stencilTest(dd) {
        this.enabled = dd
      }
    }
    od.ALWAYS = 519, od.KEEP = 7680, od.REPLACE = 7681;
    var ld = kd(39883),
      Qd = kd(39860),
      Ld = kd(39805),
      Od = kd(39840),
      ed = kd(39851);

    function Rd(dd, Jd) {
      if (Jd) {
        const {
          requestAnimationFrame: kd
        } = Jd;
        if ("function" === typeof kd) return kd(dd)
      }
      if ((0, Od.l)()) {
        const {
          requestAnimationFrame: kd
        } = Jd || window;
        if ("function" === typeof kd) return kd(dd)
      } else if ("function" === typeof requestAnimationFrame) return requestAnimationFrame(dd);
      return setTimeout(dd, 16)
    }
    class Id {
      get frameId() {
        return this._frameId
      }
      get isWebGPU() {
        return this._isWebGPU
      }
      _getShaderProcessor(dd) {
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
      get vpd() {
        return this._useReverseDepthBuffer
      }
      set vpd(dd) {
        dd !== this._useReverseDepthBuffer && (this._useReverseDepthBuffer = dd, this._depthCullingState.depthFunc = dd ? 518 : 515)
      }
      setColorWrite(dd) {
        dd !== this._colorWrite && (this._colorWriteChanged = !0, this._colorWrite = dd)
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
      _getGlobalDefines(dd) {
        if (dd) return this.isNDCHalfZRange ? dd.IS_NDC_HALF_ZRANGE = "" : delete dd.IS_NDC_HALF_ZRANGE, this.vpd ? dd.USE_REVERSE_DEPTHBUFFER = "" : delete dd.USE_REVERSE_DEPTHBUFFER, void(this.useExactSrgbConversions ? dd.USE_EXACT_SRGB_CONVERSIONS = "" : delete dd.USE_EXACT_SRGB_CONVERSIONS);
        {
          let dd = "";
          return this.isNDCHalfZRange && (dd += "#define IS_NDC_HALF_ZRANGE"), this.vpd && (dd && (dd += "\n"), dd += "#define USE_REVERSE_DEPTHBUFFER"), this.useExactSrgbConversions && (dd && (dd += "\n"), dd += "#define USE_EXACT_SRGB_CONVERSIONS"), dd
        }
      }
      _rebuildInternalTextures() {
        const dd = this._internalTexturesCache.slice();
        for (const Jd of dd) Jd._rebuild()
      }
      _rebuildRenderTargetWrappers() {
        const dd = this._renderTargetWrapperCache.slice();
        for (const Jd of dd) Jd.textures?.some((dd => 15 === dd.source)) || Jd._rebuild()
      }
      _rebuildEffects() {
        for (const dd in this._compiledEffects) {
          const Jd = this._compiledEffects[dd];
          Jd._pipelineContext = null, Jd._prepareEffect()
        }
        Nd.b.ResetCache()
      }
      _rebuildGraphicsResources() {
        this.wipeCaches(!0), this._rebuildEffects(), this._rebuildComputeEffects?.(), this._rebuildBuffers(), this._rebuildInternalTextures(), this._rebuildTextures(), this._rebuildRenderTargetWrappers(), this.wipeCaches(!0)
      }
      _flagContextRestored() {
        Pd.c.Warn(this.name + " context successfully restored."), this.onContextRestoredObservable.notifyObservers(this), this._contextWasLost = !1
      }
      _restoreEngineAfterContextLost(dd) {
        setTimeout((() => {
          this._clearEmptyResources();
          const Jd = this._depthCullingState.depthTest,
            kd = this._depthCullingState.depthFunc,
            pd = this._depthCullingState.depthMask,
            Nd = this._stencilState.stencilTest;
          dd(), this._rebuildGraphicsResources(), this._depthCullingState.depthTest = Jd, this._depthCullingState.depthFunc = kd, this._depthCullingState.depthMask = pd, this._stencilState.stencilTest = Nd, this._flagContextRestored()
        }), 0)
      }
      get lq() {
        return this._isDisposed
      }
      get snapshotRendering() {
        return !1
      }
      set snapshotRendering(dd) {}
      get snapshotRenderingMode() {
        return 0
      }
      set snapshotRenderingMode(dd) {}
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
          const dd = new Uint8Array(4),
            Jd = [dd, dd, dd, dd, dd, dd];
          this._emptyCubeTexture = this.createRawCubeTexture(Jd, 1, 5, 0, !1, !1, 1)
        }
        return this._emptyCubeTexture
      }
      set framebufferDimensionsObject(dd) {
        this._framebufferDimensionsObject = dd
      }
      get activeRenderLoops() {
        return this._activeRenderLoops
      }
      stopRenderLoop(dd) {
        if (!dd) return this._activeRenderLoops.length = 0, void this._cancelFrame();
        const Jd = this._activeRenderLoops.indexOf(dd);
        Jd >= 0 && (this._activeRenderLoops.splice(Jd, 1), 0 == this._activeRenderLoops.length && this._cancelFrame())
      }
      _cancelFrame() {
        if (this.customAnimationFrameRequester) {
          if (0 !== this._frameHandler) {
            this._frameHandler = 0;
            const {
              cancelAnimationFrame: dd
            } = this.customAnimationFrameRequester;
            dd && dd(this.customAnimationFrameRequester.vL), delete this.customAnimationFrameRequester.vL
          }
        } else if (0 !== this._frameHandler) {
          const dd = this._frameHandler;
          if (this._frameHandler = 0, (0, Od.l)()) {
            const {
              cancelAnimationFrame: Jd
            } = this.getHostWindow() || window;
            if ("function" === typeof Jd) return Jd(dd)
          } else if ("function" === typeof cancelAnimationFrame) return cancelAnimationFrame(dd);
          return clearTimeout(dd)
        }
      }
      iG() {
        this.onBeginFrameObservable.notifyObservers(this)
      }
      aG() {
        this._frameId++, this.onEndFrameObservable.notifyObservers(this)
      }
      get maxFPS() {
        return this._maxFPS
      }
      set maxFPS(dd) {
        this._maxFPS = dd, void 0 !== dd && (this._minFrameTime = dd <= 0 ? Number.MAX_VALUE : 1e3 / dd)
      }
      _isOverFrameTime(dd) {
        if (!dd || void 0 === this._maxFPS) return !1;
        const Jd = dd - this._lastFrameTime;
        return this._lastFrameTime = dd, this._renderAccumulator += Jd, this._renderAccumulator < this._minFrameTime || (this._renderAccumulator -= this._minFrameTime, this._renderAccumulator > this._minFrameTime && (this._renderAccumulator = this._minFrameTime), !1)
      }
      _processFrame(dd) {
        if (this._frameHandler = 0, !this._contextWasLost && !this._isOverFrameTime(dd)) {
          let dd = !0;
          (this.lq || !this.renderEvenInBackground && this._windowIsBackground) && (dd = !1), dd && (this.iG(), this.skipFrameRender || this._renderViews() || this._renderFrame(), this.aG())
        }
      }
      _renderLoop(dd) {
        this._processFrame(dd), this._activeRenderLoops.length > 0 && 0 === this._frameHandler && this._queueNewFrameForRenderLoop()
      }
      _renderFrame() {
        for (let dd = 0; dd < this._activeRenderLoops.length; dd++) {
          (0, this._activeRenderLoops[dd])()
        }
      }
      _renderViews() {
        return !1
      }
      _queueNewFrame(dd, Jd) {
        return Rd(dd, Jd)
      }
      _queueNewFrameForRenderLoop() {
        this.customAnimationFrameRequester ? (this.customAnimationFrameRequester.vL = this._queueNewFrame(this.customAnimationFrameRequester.renderFunction || this._boundRenderFunction, this.customAnimationFrameRequester), this._frameHandler = this.customAnimationFrameRequester.vL) : this._frameHandler = this._queueNewFrame(this._boundRenderFunction, this.getHostWindow())
      }
      runRenderLoop(dd) {
        -1 === this._activeRenderLoops.indexOf(dd) && (this._activeRenderLoops.push(dd), 1 === this._activeRenderLoops.length && 0 === this._frameHandler && this._queueNewFrameForRenderLoop())
      }
      getDepthBuffer() {
        return this._depthCullingState.depthTest
      }
      setDepthBuffer(dd) {
        this._depthCullingState.depthTest = dd
      }
      setZOffset(dd) {
        this._depthCullingState.zOffset = this.vpd ? -dd : dd
      }
      getZOffset() {
        const dd = this._depthCullingState.zOffset;
        return this.vpd ? -dd : dd
      }
      setZOffsetUnits(dd) {
        this._depthCullingState.zOffsetUnits = this.vpd ? -dd : dd
      }
      getZOffsetUnits() {
        const dd = this._depthCullingState.zOffsetUnits;
        return this.vpd ? -dd : dd
      }
      getHostWindow() {
        return (0, Od.l)() ? this._renderingCanvas && this._renderingCanvas.ownerDocument && this._renderingCanvas.ownerDocument.defaultView ? this._renderingCanvas.ownerDocument.defaultView : window : null
      }
      get compatibilityMode() {
        return this._compatibilityMode
      }
      set compatibilityMode(dd) {
        this._compatibilityMode = !0
      }
      _rebuildTextures() {
        for (const dd of this.scenes) dd._rebuildTextures();
        for (const dd of this._virtualScenes) dd._rebuildTextures()
      }
      _releaseRenderTargetWrapper(dd) {
        const Jd = this._renderTargetWrapperCache.indexOf(dd); - 1 !== Jd && this._renderTargetWrapperCache.splice(Jd, 1)
      }
      get currentViewport() {
        return this._cachedViewport
      }
      setViewport(dd, Jd, kd) {
        const pd = Jd || this.getRenderWidth(),
          Nd = kd || this.getRenderHeight(),
          Wd = dd.x || 0,
          Pd = dd.y || 0;
        this._cachedViewport = dd, this._viewport(Wd * pd, Pd * Nd, pd * dd.width, Nd * dd.height)
      }
      createCanvasImage() {
        return document.createElement("img")
      }
      createCanvasPath2D(dd) {
        return new Path2D(dd)
      }
      get description() {
        let dd = this.name + this.version;
        return this._caps.parallelShaderCompile && (dd += " - Parallel shader compilation"), dd
      }
      _createTextureBase(dd, Jd, kd, pd) {
        let Nd = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3,
          Zd = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          gd = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
          Cd = arguments.length > 7 ? arguments[7] : void 0,
          Kd = arguments.length > 8 ? arguments[8] : void 0,
          od = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null,
          ld = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : null,
          Qd = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : null,
          Od = arguments.length > 12 && void 0 !== arguments[12] ? arguments[12] : null,
          ed = arguments.length > 13 ? arguments[13] : void 0,
          Rd = arguments.length > 14 ? arguments[14] : void 0,
          Gd = arguments.length > 15 ? arguments[15] : void 0;
        const vd = "data:" === (dd = dd || "").substring(0, 5),
          xd = "blob:" === dd.substring(0, 5),
          qd = vd && -1 !== dd.indexOf(";base64,"),
          Bd = ld || new Ld.b(this, 1);
        Bd !== ld && (Bd.label = dd.substring(0, 60));
        const sd = dd;
        !this._transformTextureUrl || qd || ld || od || (dd = this._transformTextureUrl(dd)), sd !== dd && (Bd._originalUrl = sd);
        const ad = dd.lastIndexOf(".");
        let Md = Od || (ad > -1 ? dd.substring(ad).toLowerCase() : "");
        Md.indexOf("?") > -1 && (Md = Md.split("?")[0]);
        const Fd = Id.GetCompatibleTextureLoader(Md, ed);
        pd && pd.addPendingData(Bd), Bd.url = dd, Bd.generateMipMaps = !Jd, Bd.samplingMode = Nd, Bd.invertY = kd, Bd._useSRGBBuffer = this._getUseSRGBBuffer(!!Gd, Jd), this._doNotHandleContextLost || (Bd._buffer = od);
        let Yd = null;
        Zd && !ld && (Yd = Bd.onLoadedObservable.add(Zd)), ld || this._internalTexturesCache.push(Bd);
        const md = (kd, ld) => {
          pd && pd.removePendingData(Bd), dd === sd ? (Yd && Bd.onLoadedObservable.remove(Yd), Wd.d.UseFallbackTexture && dd !== Wd.d.FallbackTexture && this._createTextureBase(Wd.d.FallbackTexture, Jd, Bd.invertY, pd, Nd, null, gd, Cd, Kd, od, Bd), kd = (kd || "Unknown error") + (Wd.d.UseFallbackTexture ? " - Fallback texture was used" : ""), Bd.onErrorObservable.notifyObservers({
            message: kd,
            exception: ld
          }), gd && gd(kd, ld)) : (Pd.c.Warn(`Failed to load ${dd}, falling back to ${sd}`), this._createTextureBase(sd, Jd, Bd.invertY, pd, Nd, Zd, gd, Cd, Kd, od, Bd, Qd, Od, ed, Rd, Gd))
        };
        if (Fd) {
          const Jd = async dd => {
            (await Fd).loadData(dd, Bd, ((dd, Jd, kd, Wd, Pd, Zd) => {
              Zd ? md("TextureLoader failed to load data") : Cd(Bd, Md, pd, {
                width: dd,
                height: Jd
              }, Bd.invertY, !kd, Wd, (() => (Pd(), !1)), Nd)
            }), Rd)
          };
          if (od) {
            const dd = async dd => {
              try {
                await Jd(dd)
              } catch (kd) {
                md("Failed to parse texture data", kd)
              }
            };
            od instanceof ArrayBuffer ? dd(new Uint8Array(od)) : ArrayBuffer.isView(od) ? dd(od) : gd && gd("Unable to load: only ArrayBuffer or ArrayBufferView is supported", null)
          } else this._loadFile(dd, (async dd => {
            try {
              await Jd(new Uint8Array(dd))
            } catch (kd) {
              md("Failed to parse texture data", kd)
            }
          }), void 0, pd ? pd.offlineProvider : void 0, !0, ((dd, Jd) => {
            md("Unable to load " + (dd && dd.responseURL, Jd))
          }))
        } else {
          const kd = dd => {
            xd && !this._doNotHandleContextLost && (Bd._buffer = dd), Cd(Bd, Md, pd, dd, Bd.invertY, Jd, !1, Kd, Nd)
          };
          !vd || qd ? od && ("string" === typeof od.decoding || od.close) ? kd(od) : Id._FileToolsLoadImage(dd || "", kd, md, pd ? pd.offlineProvider : null, ed, Bd.invertY && this._features.needsInvertingBitmap ? {
            imageOrientation: "flipY"
          } : void 0, this) : "string" === typeof od || od instanceof ArrayBuffer || ArrayBuffer.isView(od) || od instanceof Blob ? Id._FileToolsLoadImage(od, kd, md, pd ? pd.offlineProvider : null, ed, Bd.invertY && this._features.needsInvertingBitmap ? {
            imageOrientation: "flipY"
          } : void 0, this) : od && kd(od)
        }
        return Bd
      }
      _rebuildBuffers() {
        for (const dd of this._uniformBuffers) dd._rebuildAfterContextLost()
      }
      get _shouldUseHighPrecisionShader() {
        return !(!this._caps.highPrecisionShaderSupported || !this._highPrecisionShadersAllowed)
      }
      getHostDocument() {
        return this._renderingCanvas && this._renderingCanvas.ownerDocument ? this._renderingCanvas.ownerDocument : (0, Od.f)() ? document : null
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
        for (const dd in this._boundTexturesCache) Object.prototype.hasOwnProperty.call(this._boundTexturesCache, dd) && (this._boundTexturesCache[dd] = null);
        this._currentTextureChannel = -1
      }
      get name() {
        return this._name
      }
      set name(dd) {
        this._name = dd
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
      setHardwareScalingLevel(dd) {
        this._hardwareScalingLevel = dd, this.resize()
      }
      getHardwareScalingLevel() {
        return this._hardwareScalingLevel
      }
      get doNotHandleContextLost() {
        return this._doNotHandleContextLost
      }
      set doNotHandleContextLost(dd) {
        this._doNotHandleContextLost = dd
      }
      get isStencilEnable() {
        return this._isStencilEnable
      }
      getCreationOptions() {
        return this._creationOptions
      }
      constructor(dd, Jd, kd) {
        this._colorWrite = !0, this._colorWriteChanged = !0, this._depthCullingState = new Cd, this._stencilStateComposer = new Kd, this._stencilState = new od, this._alphaState = new ld.e(!1), this._alphaMode = Array(8).fill(-1), this._alphaEquation = Array(8).fill(-1), this._activeRequests = [], this._badOS = !1, this._badDesktopOS = !1, this._compatibilityMode = !0, this._internalTexturesCache = new Array, this._currentRenderTarget = null, this._boundTexturesCache = {}, this._activeChannel = 0, this._currentTextureChannel = -1, this._viewportCached = {
          x: 0,
          y: 0,
          z: 0,
          w: 0
        }, this._isWebGPU = !1, this._enableGPUDebugMarkers = !1, this.onCanvasBlurObservable = new pd.e, this.onCanvasFocusObservable = new pd.e, this.onNewSceneAddedObservable = new pd.e, this.onResizeObservable = new pd.e, this.onCanvasPointerOutObservable = new pd.e, this.onEffectErrorObservable = new pd.e, this.disablePerformanceMonitorInBackground = !1, this.disableVertexArrayObjects = !1, this._frameId = 0, this.hostInformation = {
          isMobile: !1
        }, this.isFullscreen = !1, this.enableOfflineSupport = !1, this.disableManifestCheck = !1, this.disableContextMenu = !0, this.currentRenderPassId = 0, this.isPointerLock = !1, this.postProcesses = [], this.canvasTabIndex = 1, this._contextWasLost = !1, this._useReverseDepthBuffer = !1, this.isNDCHalfZRange = !1, this.hasOriginBottomLeft = !0, this._renderTargetWrapperCache = new Array, this._compiledEffects = {}, this._isDisposed = !1, this.scenes = [], this._virtualScenes = new Array, this.onBeforeTextureInitObservable = new pd.e, this.renderEvenInBackground = !0, this.preventCacheWipeBetweenFrames = !1, this._frameHandler = 0, this._activeRenderLoops = new Array, this.customAnimationFrameRequester = null, this._windowIsBackground = !1, this._boundRenderFunction = dd => this._renderLoop(dd), this._lastFrameTime = 0, this._renderAccumulator = 0, this.skipFrameRender = !1, this.onBeforeShaderCompilationObservable = new pd.e, this.onAfterShaderCompilationObservable = new pd.e, this.onBeginFrameObservable = new pd.e, this.onEndFrameObservable = new pd.e, this._transformTextureUrl = null, this._uniformBuffers = new Array, this._storageBuffers = new Array, this._highPrecisionShadersAllowed = !0, this.onContextLostObservable = new pd.e, this.onContextRestoredObservable = new pd.e, this._name = "", this.premultipliedAlpha = !0, this.adaptToDeviceRatio = !1, this._lastDevicePixelRatio = 1, this._doNotHandleContextLost = !1, this.cullBackFaces = null, this._renderPassNames = ["main"], this._onReleaseRenderPassObservable = null, this._fps = 60, this._deltaTime = 0, this._deterministicLockstep = !1, this._lockstepMaxSteps = 4, this._timeStep = 1 / 60, this.Zm = new pd.e, this.onReleaseEffectsObservable = new pd.e, Wd.d.Instances.push(this), this.startTime = gd.d.Now, this._stencilStateComposer.stencilGlobal = this._stencilState, Zd.d.SetMatrixPrecision(!!Jd.useLargeWorldRendering || !!Jd.useHighPrecisionMatrix), (0, Od.j)() && navigator.userAgent && (this._badOS = /iPad/i.test(navigator.userAgent) || /iPhone/i.test(navigator.userAgent), this._badDesktopOS = /^((?!chrome|android).)*safari/i.test(navigator.userAgent)), Jd.antialias = dd ?? Jd.antialias, Jd.deterministicLockstep = Jd.deterministicLockstep ?? !1, Jd.lockstepMaxSteps = Jd.lockstepMaxSteps ?? 4, Jd.timeStep = Jd.timeStep ?? 1 / 60, Jd.stencil = Jd.stencil ?? !0, this._audioContext = Jd.audioEngineOptions?.audioContext ?? null, this._audioDestination = Jd.audioEngineOptions?.audioDestination ?? null, this.premultipliedAlpha = Jd.premultipliedAlpha ?? !0, this._doNotHandleContextLost = !!Jd.doNotHandleContextLost, this._isStencilEnable = !!Jd.stencil, this.useExactSrgbConversions = Jd.useExactSrgbConversions ?? !1, this.canvasTabIndex = Jd.canvasTabIndex ?? this.canvasTabIndex;
        const Nd = (0, Od.l)() && window.devicePixelRatio || 1,
          Pd = Jd.limitDeviceRatio || Nd;
        kd = kd || Jd.adaptToDeviceRatio || !1, this.adaptToDeviceRatio = kd, this._hardwareScalingLevel = kd ? 1 / Math.min(Pd, Nd) : 1, this._lastDevicePixelRatio = Nd, this._creationOptions = Jd
      }
      resize() {
        let dd, Jd, kd = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this.adaptToDeviceRatio) {
          const dd = (0, Od.l)() && window.devicePixelRatio || 1,
            Jd = this._lastDevicePixelRatio / dd;
          this._lastDevicePixelRatio = dd, this._hardwareScalingLevel *= Jd
        }
        if ((0, Od.l)() && (0, Od.f)())
          if (this._renderingCanvas) {
            const kd = this._renderingCanvas.getBoundingClientRect?.();
            dd = this._renderingCanvas.clientWidth || kd?.width || this._renderingCanvas.width * this._hardwareScalingLevel || 100, Jd = this._renderingCanvas.clientHeight || kd?.height || this._renderingCanvas.height * this._hardwareScalingLevel || 100
          } else dd = window.innerWidth, Jd = window.innerHeight;
        else dd = this._renderingCanvas ? this._renderingCanvas.width : 100, Jd = this._renderingCanvas ? this._renderingCanvas.height : 100;
        this.setSize(dd / this._hardwareScalingLevel, Jd / this._hardwareScalingLevel, kd)
      }
      setSize(dd, Jd) {
        let kd = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (!this._renderingCanvas) return !1;
        if (dd |= 0, Jd |= 0, !kd && this._renderingCanvas.width === dd && this._renderingCanvas.height === Jd) return !1;
        if (this._renderingCanvas.width = dd, this._renderingCanvas.height = Jd, this.scenes) {
          for (let dd = 0; dd < this.scenes.length; dd++) {
            const Jd = this.scenes[dd];
            for (let dd = 0; dd < Jd.cameras.length; dd++) {
              Jd.cameras[dd]._currentRenderId = 0
            }
          }
          this.onResizeObservable.hasObservers() && this.onResizeObservable.notifyObservers(this)
        }
        return !0
      }
      createRawTexture(dd, Jd, kd, pd, Nd, Wd, Pd, Zd, gd, Cd, Kd, od) {
        throw (0, Qd.n)("engine.rawTexture")
      }
      createRawCubeTexture(dd, Jd, kd, pd, Nd, Wd, Pd, Zd) {
        throw (0, Qd.n)("engine.rawTexture")
      }
      createRawTexture3D(dd, Jd, kd, pd, Nd, Wd, Pd, Zd, gd, Cd, Kd) {
        throw (0, Qd.n)("engine.rawTexture")
      }
      createRawTexture2DArray(dd, Jd, kd, pd, Nd, Wd, Pd, Zd, gd, Cd, Kd, od) {
        throw (0, Qd.n)("engine.rawTexture")
      }
      _sharedInit(dd) {
        this._renderingCanvas = dd
      }
      _setupMobileChecks() {
        navigator && navigator.userAgent && (this._checkForMobile = () => {
          const dd = navigator.userAgent;
          this.hostInformation.isMobile = -1 !== dd.indexOf("Mobile") || -1 !== dd.indexOf("Mac") && (0, Od.f)() && "ontouchend" in document
        }, this._checkForMobile(), (0, Od.l)() && window.addEventListener("resize", this._checkForMobile))
      }
      createVideoElement(dd) {
        return document.createElement("video")
      }
      _reportDrawCall() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        this._drawCalls?.addCount(dd, !1)
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
      _createImageBitmapFromSource(dd, Jd) {
        throw new Error("createImageBitmapFromSource is not implemented")
      }
      createImageBitmap(dd, Jd) {
        return createImageBitmap(dd, Jd)
      }
      resizeImageBitmap(dd, Jd, kd) {
        throw new Error("resizeImageBitmap is not implemented")
      }
      getFontOffset(dd) {
        throw new Error("getFontOffset is not implemented")
      }
      static _CreateCanvas(dd, Jd) {
        if ("undefined" === typeof document) return new OffscreenCanvas(dd, Jd);
        const kd = document.createElement("canvas");
        return kd.width = dd, kd.height = Jd, kd
      }
      createCanvas(dd, Jd) {
        return Id._CreateCanvas(dd, Jd)
      }
      static _FileToolsLoadImage(dd, Jd, kd, pd, Nd, Wd, Pd) {
        if (!ed.d.loadImage) throw (0, Qd.n)("FileTools");
        return ed.d.loadImage(dd, Jd, kd, pd, Nd, Wd, Pd)
      }
      _loadFile(dd, Jd, kd, pd, Nd, Wd) {
        const Pd = (0, ed.m)(dd, Jd, kd, pd, Nd, Wd);
        return this._activeRequests.push(Pd), Pd.onCompleteObservable.add((() => {
          const dd = this._activeRequests.indexOf(Pd); - 1 !== dd && this._activeRequests.splice(dd, 1)
        })), Pd
      }
      static _FileToolsLoadFile(dd, Jd, kd, pd, Nd, Wd) {
        if (ed.d.loadFile) return ed.d.loadFile(dd, Jd, kd, pd, Nd, Wd);
        throw (0, Qd.n)("FileTools")
      }
      dispose() {
        for (this.releaseEffects(), this._isDisposed = !0, this.stopRenderLoop(), this._emptyTexture && (this._releaseTexture(this._emptyTexture), this._emptyTexture = null), this._emptyCubeTexture && (this._releaseTexture(this._emptyCubeTexture), this._emptyCubeTexture = null), this._renderingCanvas = null, this.onBeforeTextureInitObservable && this.onBeforeTextureInitObservable.clear(); this.postProcesses.length;) this.postProcesses[0].dispose();
        for (; this.scenes.length;) this.scenes[0].dispose();
        for (; this._virtualScenes.length;) this._virtualScenes[0].dispose();
        this.releaseComputeEffects?.(), Nd.b.ResetCache();
        for (const Jd of this._activeRequests) Jd.abort();
        this._boundRenderFunction = null, this.Zm.notifyObservers(this), this.Zm.clear(), this.onResizeObservable.clear(), this.onCanvasBlurObservable.clear(), this.onCanvasFocusObservable.clear(), this.onCanvasPointerOutObservable.clear(), this.onNewSceneAddedObservable.clear(), this.onEffectErrorObservable.clear(), (0, Od.l)() && window.removeEventListener("resize", this._checkForMobile);
        const dd = Wd.d.Instances.indexOf(this);
        dd >= 0 && Wd.d.Instances.splice(dd, 1), Wd.d.Instances.length || (Wd.d.OnEnginesDisposedObservable.notifyObservers(this), Wd.d.OnEnginesDisposedObservable.clear()), this.onBeginFrameObservable.clear(), this.onEndFrameObservable.clear(), this._onReleaseRenderPassObservable?.clear(), this._onReleaseRenderPassObservable = null
      }
      static DefaultLoadingScreenFactory(dd) {
        throw (0, Qd.n)("LoadingScreen")
      }
      static MarkAllMaterialsAsDirty(dd, Jd) {
        for (let kd = 0; kd < Wd.d.Instances.length; kd++) {
          const pd = Wd.d.Instances[kd];
          for (let kd = 0; kd < pd.scenes.length; kd++) pd.scenes[kd].markAllMaterialsAsDirty(dd, Jd)
        }
      }
      static GetCompatibleTextureLoader(dd, Jd) {
        return null
      }
    }
    Id._RenderPassIdCounter = 0, Id._RescalePostProcessFactory = null, Id.CollisionsEpsilon = .001, Id.QueueNewFrame = Rd
  },
  39829: (dd, Jd, kd) => {
    kd.d(Jd, {
      c: () => pd
    });
    class pd {
      static GetShadersRepository() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? pd.ShadersRepository : pd.ShadersRepositoryWGSL
      }
      static GetShadersStore() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? pd.ShadersStore : pd.ShadersStoreWGSL
      }
      static GetIncludesShadersStore() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? pd.IncludesShadersStore : pd.IncludesShadersStoreWGSL
      }
    }
    pd.ShadersRepository = "src/Shaders/", pd.ShadersStore = {}, pd.IncludesShadersStore = {}, pd.ShadersRepositoryWGSL = "src/ShadersWGSL/", pd.ShadersStoreWGSL = {}, pd.IncludesShadersStoreWGSL = {}
  },
  39848: (dd, Jd, kd) => {
    kd.d(Jd, {
      e: () => ld,
      i: () => Gd,
      j: () => Ld,
      l: () => Qd,
      o: () => Od,
      p: () => Id,
      t: () => od,
      u: () => Cd,
      x: () => Kd,
      y: () => gd,
      z: () => Zd
    });
    class pd {
      constructor() {
        this._valueCache = {}, this._matrixValueCache = {}, this.vertexCompilationError = null, this.fragmentCompilationError = null, this.programLinkError = null, this.programValidationError = null, this._isDisposed = !1
      }
      get isAsync() {
        return this.isParallelCompiled
      }
      get isReady() {
        return !!this.program && (!this.isParallelCompiled || this.engine._isRenderingStateCompiled(this))
      }
      _handlesSpectorRebuildCallback(dd) {
        dd && this.program && dd(this.program)
      }
      setEngine(dd) {
        this.engine = dd
      }
      _fillEffectInformation(dd, Jd, kd, pd, Nd, Wd, Pd, Zd) {
        const gd = this.engine;
        if (gd.supportsUniformBuffers)
          for (const Kd in Jd) dd.bindUniformBlock(Kd, Jd[Kd]);
        let Cd;
        for (this.engine.getUniforms(this, kd).forEach(((dd, Jd) => {
            pd[kd[Jd]] = dd
          })), this._uniforms = pd, Cd = 0; Cd < Nd.length; Cd++) {
          null == dd.getUniform(Nd[Cd]) && (Nd.splice(Cd, 1), Cd--)
        }
        Nd.forEach(((dd, Jd) => {
          Wd[dd] = Jd
        }));
        for (const Kd of gd.getAttributes(this, Pd)) Zd.push(Kd)
      }
      dispose() {
        this._uniforms = {}, this._isDisposed = !0
      }
      _cacheMatrix(dd, Jd) {
        const kd = this._valueCache[dd],
          pd = Jd.updateFlag;
        if (void 0 !== kd && kd === pd) return !1;
        const Nd = Jd.spd();
        let Wd = this._matrixValueCache[dd];
        if (void 0 !== kd && null !== kd && void 0 !== Wd) {
          let Jd = !0;
          for (let dd = 15; dd >= 0; dd--)
            if (Wd[dd] !== Nd[dd]) {
              Jd = !1;
              break
            } if (Jd) return this._valueCache[dd] = pd, !1
        }
        return void 0 === Wd && (Wd = this._matrixValueCache[dd] = new Float32Array(16)), Wd.set(Nd), this._valueCache[dd] = pd, !0
      }
      _cacheFloat2(dd, Jd, kd) {
        let pd = this._valueCache[dd];
        if (!pd || 2 !== pd.length) return pd = [Jd, kd], this._valueCache[dd] = pd, !0;
        let Nd = !1;
        return pd[0] !== Jd && (pd[0] = Jd, Nd = !0), pd[1] !== kd && (pd[1] = kd, Nd = !0), Nd
      }
      _cacheFloat3(dd, Jd, kd, pd) {
        let Nd = this._valueCache[dd];
        if (!Nd || 3 !== Nd.length) return Nd = [Jd, kd, pd], this._valueCache[dd] = Nd, !0;
        let Wd = !1;
        return Nd[0] !== Jd && (Nd[0] = Jd, Wd = !0), Nd[1] !== kd && (Nd[1] = kd, Wd = !0), Nd[2] !== pd && (Nd[2] = pd, Wd = !0), Wd
      }
      _cacheFloat4(dd, Jd, kd, pd, Nd) {
        let Wd = this._valueCache[dd];
        if (!Wd || 4 !== Wd.length) return Wd = [Jd, kd, pd, Nd], this._valueCache[dd] = Wd, !0;
        let Pd = !1;
        return Wd[0] !== Jd && (Wd[0] = Jd, Pd = !0), Wd[1] !== kd && (Wd[1] = kd, Pd = !0), Wd[2] !== pd && (Wd[2] = pd, Pd = !0), Wd[3] !== Nd && (Wd[3] = Nd, Pd = !0), Pd
      }
      setInt(dd, Jd) {
        const kd = this._valueCache[dd];
        void 0 !== kd && kd === Jd || this.engine.setInt(this._uniforms[dd], Jd) && (this._valueCache[dd] = Jd)
      }
      setInt2(dd, Jd, kd) {
        this._cacheFloat2(dd, Jd, kd) && (this.engine.setInt2(this._uniforms[dd], Jd, kd) || (this._valueCache[dd] = null))
      }
      setInt3(dd, Jd, kd, pd) {
        this._cacheFloat3(dd, Jd, kd, pd) && (this.engine.setInt3(this._uniforms[dd], Jd, kd, pd) || (this._valueCache[dd] = null))
      }
      setInt4(dd, Jd, kd, pd, Nd) {
        this._cacheFloat4(dd, Jd, kd, pd, Nd) && (this.engine.setInt4(this._uniforms[dd], Jd, kd, pd, Nd) || (this._valueCache[dd] = null))
      }
      setIntArray(dd, Jd) {
        this._valueCache[dd] = null, this.engine.setIntArray(this._uniforms[dd], Jd)
      }
      setIntArray2(dd, Jd) {
        this._valueCache[dd] = null, this.engine.setIntArray2(this._uniforms[dd], Jd)
      }
      setIntArray3(dd, Jd) {
        this._valueCache[dd] = null, this.engine.setIntArray3(this._uniforms[dd], Jd)
      }
      setIntArray4(dd, Jd) {
        this._valueCache[dd] = null, this.engine.setIntArray4(this._uniforms[dd], Jd)
      }
      setUInt(dd, Jd) {
        const kd = this._valueCache[dd];
        void 0 !== kd && kd === Jd || this.engine.setUInt(this._uniforms[dd], Jd) && (this._valueCache[dd] = Jd)
      }
      setUInt2(dd, Jd, kd) {
        this._cacheFloat2(dd, Jd, kd) && (this.engine.setUInt2(this._uniforms[dd], Jd, kd) || (this._valueCache[dd] = null))
      }
      setUInt3(dd, Jd, kd, pd) {
        this._cacheFloat3(dd, Jd, kd, pd) && (this.engine.setUInt3(this._uniforms[dd], Jd, kd, pd) || (this._valueCache[dd] = null))
      }
      setUInt4(dd, Jd, kd, pd, Nd) {
        this._cacheFloat4(dd, Jd, kd, pd, Nd) && (this.engine.setUInt4(this._uniforms[dd], Jd, kd, pd, Nd) || (this._valueCache[dd] = null))
      }
      setUIntArray(dd, Jd) {
        this._valueCache[dd] = null, this.engine.setUIntArray(this._uniforms[dd], Jd)
      }
      setUIntArray2(dd, Jd) {
        this._valueCache[dd] = null, this.engine.setUIntArray2(this._uniforms[dd], Jd)
      }
      setUIntArray3(dd, Jd) {
        this._valueCache[dd] = null, this.engine.setUIntArray3(this._uniforms[dd], Jd)
      }
      setUIntArray4(dd, Jd) {
        this._valueCache[dd] = null, this.engine.setUIntArray4(this._uniforms[dd], Jd)
      }
      setArray(dd, Jd) {
        this._valueCache[dd] = null, this.engine.setArray(this._uniforms[dd], Jd)
      }
      setArray2(dd, Jd) {
        this._valueCache[dd] = null, this.engine.setArray2(this._uniforms[dd], Jd)
      }
      setArray3(dd, Jd) {
        this._valueCache[dd] = null, this.engine.setArray3(this._uniforms[dd], Jd)
      }
      setArray4(dd, Jd) {
        this._valueCache[dd] = null, this.engine.setArray4(this._uniforms[dd], Jd)
      }
      setMatrices(dd, Jd) {
        Jd && (this._valueCache[dd] = null, this.engine.setMatrices(this._uniforms[dd], Jd))
      }
      setMatrix(dd, Jd) {
        this._cacheMatrix(dd, Jd) && (this.engine.setMatrices(this._uniforms[dd], Jd.spd()) || (this._valueCache[dd] = null))
      }
      setMatrix3x3(dd, Jd) {
        this._valueCache[dd] = null, this.engine.setMatrix3x3(this._uniforms[dd], Jd)
      }
      setMatrix2x2(dd, Jd) {
        this._valueCache[dd] = null, this.engine.setMatrix2x2(this._uniforms[dd], Jd)
      }
      setFloat(dd, Jd) {
        const kd = this._valueCache[dd];
        void 0 !== kd && kd === Jd || this.engine.setFloat(this._uniforms[dd], Jd) && (this._valueCache[dd] = Jd)
      }
      setVector2(dd, Jd) {
        this._cacheFloat2(dd, Jd.x, Jd.y) && (this.engine.setFloat2(this._uniforms[dd], Jd.x, Jd.y) || (this._valueCache[dd] = null))
      }
      setFloat2(dd, Jd, kd) {
        this._cacheFloat2(dd, Jd, kd) && (this.engine.setFloat2(this._uniforms[dd], Jd, kd) || (this._valueCache[dd] = null))
      }
      setVector3(dd, Jd) {
        this._cacheFloat3(dd, Jd.x, Jd.y, Jd.z) && (this.engine.setFloat3(this._uniforms[dd], Jd.x, Jd.y, Jd.z) || (this._valueCache[dd] = null))
      }
      setFloat3(dd, Jd, kd, pd) {
        this._cacheFloat3(dd, Jd, kd, pd) && (this.engine.setFloat3(this._uniforms[dd], Jd, kd, pd) || (this._valueCache[dd] = null))
      }
      setVector4(dd, Jd) {
        this._cacheFloat4(dd, Jd.x, Jd.y, Jd.z, Jd.w) && (this.engine.setFloat4(this._uniforms[dd], Jd.x, Jd.y, Jd.z, Jd.w) || (this._valueCache[dd] = null))
      }
      setQuaternion(dd, Jd) {
        this._cacheFloat4(dd, Jd.x, Jd.y, Jd.z, Jd.w) && (this.engine.setFloat4(this._uniforms[dd], Jd.x, Jd.y, Jd.z, Jd.w) || (this._valueCache[dd] = null))
      }
      setFloat4(dd, Jd, kd, pd, Nd) {
        this._cacheFloat4(dd, Jd, kd, pd, Nd) && (this.engine.setFloat4(this._uniforms[dd], Jd, kd, pd, Nd) || (this._valueCache[dd] = null))
      }
      setColor3(dd, Jd) {
        this._cacheFloat3(dd, Jd.r, Jd.g, Jd.b) && (this.engine.setFloat3(this._uniforms[dd], Jd.r, Jd.g, Jd.b) || (this._valueCache[dd] = null))
      }
      setColor4(dd, Jd, kd) {
        this._cacheFloat4(dd, Jd.r, Jd.g, Jd.b, kd) && (this.engine.setFloat4(this._uniforms[dd], Jd.r, Jd.g, Jd.b, kd) || (this._valueCache[dd] = null))
      }
      setDirectColor4(dd, Jd) {
        this._cacheFloat4(dd, Jd.r, Jd.g, Jd.b, Jd.a) && (this.engine.setFloat4(this._uniforms[dd], Jd.r, Jd.g, Jd.b, Jd.a) || (this._valueCache[dd] = null))
      }
      _getVertexShaderCode() {
        return this.vertexShader ? this.engine._getShaderSource(this.vertexShader) : null
      }
      _getFragmentShaderCode() {
        return this.fragmentShader ? this.engine._getShaderSource(this.fragmentShader) : null
      }
    }
    var Nd = kd(39851);
    const Wd = new WeakMap,
      Pd = {
        _webGLVersion: 2,
        cachedPipelines: {}
      };

    function Zd(dd) {
      let Jd = Wd.get(dd);
      if (!Jd) {
        if (!dd) return Pd;
        Jd = {
          _webGLVersion: dd.TEXTURE_BINDING_3D ? 2 : 1,
          _context: dd,
          parallelShaderCompile: dd.getExtension("KHR_parallel_shader_compile") || void 0,
          cachedPipelines: {}
        }, Wd.set(dd, Jd)
      }
      return Jd
    }

    function gd(dd) {
      Wd.delete(dd)
    }

    function Cd(dd, Jd, kd, pd, Nd, Wd) {
      const Pd = Zd(pd);
      Wd || (Wd = Pd._createShaderProgramInjection ?? ld);
      return Wd(dd, Rd(Jd, "vertex", pd, Pd._contextWasLost), Rd(kd, "fragment", pd, Pd._contextWasLost), pd, Nd, Pd.validateShaderPrograms)
    }

    function Kd(dd, Jd, kd, pd, Nd) {
      let Wd = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        Pd = arguments.length > 6 ? arguments[6] : void 0;
      const gd = Zd(Nd);
      Pd || (Pd = gd._createShaderProgramInjection ?? ld);
      const Cd = gd._webGLVersion > 1 ? "#version 300 es\n#define WEBGL2 \n" : "";
      return Pd(dd, ed(Jd, "vertex", pd, Cd, Nd, gd._contextWasLost), ed(kd, "fragment", pd, Cd, Nd, gd._contextWasLost), Nd, Wd, gd.validateShaderPrograms)
    }

    function od(dd, Jd) {
      const kd = new pd,
        Nd = Zd(dd);
      return Nd.parallelShaderCompile && !Nd.disableParallelShaderCompile && (kd.isParallelCompiled = !0), kd.context = Nd._context, kd
    }

    function ld(dd, Jd, kd, pd) {
      let Nd = arguments.length > 5 ? arguments[5] : void 0;
      const Wd = pd.createProgram();
      if (dd.program = Wd, !Wd) throw new Error("Unable to create program");
      return pd.attachShader(Wd, Jd), pd.attachShader(Wd, kd), pd.linkProgram(Wd), dd.context = pd, dd.vertexShader = Jd, dd.fragmentShader = kd, dd.isParallelCompiled || Ld(dd, pd, Nd), Wd
    }

    function Qd(dd, Jd, kd) {
      const pd = dd;
      if (pd._isDisposed) return !1;
      const Nd = Zd(Jd);
      return !!(Nd && Nd.parallelShaderCompile && Nd.parallelShaderCompile.COMPLETION_STATUS_KHR && pd.program && Jd.getProgramParameter(pd.program, Nd.parallelShaderCompile.COMPLETION_STATUS_KHR)) && (Ld(pd, Jd, kd), !0)
    }

    function Ld(dd, Jd, kd) {
      const pd = dd.context,
        Nd = dd.vertexShader,
        Wd = dd.fragmentShader,
        Pd = dd.program;
      if (!pd.getProgramParameter(Pd, pd.LINK_STATUS)) {
        if (!Jd.getShaderParameter(Nd, Jd.COMPILE_STATUS)) {
          const kd = Jd.getShaderInfoLog(Nd);
          if (kd) throw dd.vertexCompilationError = kd, new Error("VERTEX SHADER " + kd)
        }
        if (!Jd.getShaderParameter(Wd, Jd.COMPILE_STATUS)) {
          const kd = Jd.getShaderInfoLog(Wd);
          if (kd) throw dd.fragmentCompilationError = kd, new Error("FRAGMENT SHADER " + kd)
        }
        const kd = pd.getProgramInfoLog(Pd);
        if (kd) throw dd.programLinkError = kd, new Error(kd)
      }
      if (kd) {
        pd.validateProgram(Pd);
        if (!pd.getProgramParameter(Pd, pd.VALIDATE_STATUS)) {
          const Jd = pd.getProgramInfoLog(Pd);
          if (Jd) throw dd.programValidationError = Jd, new Error(Jd)
        }
      }
      pd.deleteShader(Nd), pd.deleteShader(Wd), dd.vertexShader = void 0, dd.fragmentShader = void 0, dd.onCompiled && (dd.onCompiled(), dd.onCompiled = void 0)
    }

    function Od(dd, Jd, kd, pd, Nd, Wd, Pd, gd, od) {
      let ld = arguments.length > 10 ? arguments[10] : void 0,
        Qd = arguments.length > 11 ? arguments[11] : void 0,
        Ld = arguments.length > 12 ? arguments[12] : void 0;
      const Od = Zd(dd.context);
      Qd || (Qd = Od.createRawShaderProgramInjection ?? Cd), Ld || (Ld = Od.createShaderProgramInjection ?? Kd);
      const ed = dd;
      ed.program = pd ? Qd(ed, Jd, kd, ed.context, od) : Ld(ed, Jd, kd, gd, ed.context, od), ed.program.__SPECTOR_rebuildProgram = Pd, ld()
    }

    function ed(dd, Jd, kd, pd, Wd, Pd) {
      return Rd((0, Nd.h)(dd, kd, pd), Jd, Wd, Pd)
    }

    function Rd(dd, Jd, kd, pd) {
      const Nd = kd.createShader("vertex" === Jd ? kd.VERTEX_SHADER : kd.FRAGMENT_SHADER);
      if (!Nd) {
        let dd, Nd = kd.NO_ERROR;
        for (;
          (dd = kd.getError()) !== kd.NO_ERROR;) Nd = dd;
        throw new Error(`Something went wrong while creating a gl ${Jd} shader object. gl error=${Nd}, gl isContextLost=${kd.isContextLost()}, _contextWasLost=${pd}`)
      }
      return kd.shaderSource(Nd, dd), kd.compileShader(Nd), Nd
    }

    function Id(dd, Jd) {
      Jd.useProgram(dd)
    }

    function Gd(dd, Jd) {
      const kd = dd;
      if (!kd.isParallelCompiled) return void Jd(dd);
      const pd = kd.onCompiled;
      kd.onCompiled = () => {
        pd?.(), Jd(dd)
      }
    }
  },
  39813: (dd, Jd, kd) => {
    kd.d(Jd, {
      ThinEngine: () => xd
    });
    var pd = kd(39822),
      Nd = kd(39848),
      Wd = kd(39874),
      Pd = kd(39885),
      Zd = kd(38812),
      gd = kd(39840);
    class Cd {
      constructor() {
        this.shaderLanguage = 0
      }
      postProcessor(dd, Jd, kd, pd, Nd) {
        if (Nd.drawBuffersExtensionDisabled) {
          const Jd = /#extension.+GL_EXT_draw_buffers.+(enable|require)/g;
          dd = dd.replace(Jd, "")
        }
        return dd
      }
    }
    const Kd = /(flat\s)?\s*varying\s*.*/;
    class od {
      constructor() {
        this.shaderLanguage = 0
      }
      attributeProcessor(dd) {
        return dd.replace("attribute", "in")
      }
      varyingCheck(dd, Jd) {
        return Kd.test(dd)
      }
      varyingProcessor(dd, Jd) {
        return dd.replace("varying", Jd ? "in" : "out")
      }
      postProcessor(dd, Jd, kd) {
        const pd = -1 !== dd.search(/#extension.+GL_EXT_draw_buffers.+require/);
        if (dd = (dd = dd.replace(/#extension.+(GL_OVR_multiview2|GL_OES_standard_derivatives|GL_EXT_shader_texture_lod|GL_EXT_frag_depth|GL_EXT_draw_buffers).+(enable|require)/g, "")).replace(/texture2D\s*\(/g, "texture("), kd) {
          const kd = -1 !== dd.search(/layout *\(location *= *0\) *out/g),
            Nd = -1 !== Jd.indexOf("#define DUAL_SOURCE_BLENDING"),
            Wd = Nd ? "layout(location = 0, index = 0) out vec4 glFragColor;\nlayout(location = 0, index = 1) out vec4 glFragColor2;\n" : "layout(location = 0) out vec4 glFragColor;\n";
          Nd && (dd = "#extension GL_EXT_blend_func_extended : require\n" + dd), dd = (dd = (dd = (dd = (dd = (dd = (dd = dd.replace(/texture2DLodEXT\s*\(/g, "textureLod(")).replace(/textureCubeLodEXT\s*\(/g, "textureLod(")).replace(/textureCube\s*\(/g, "texture(")).replace(/gl_FragDepthEXT/g, "gl_FragDepth")).replace(/gl_FragColor/g, "glFragColor")).replace(/gl_FragData/g, "glFragData")).replace(/void\s+?main\s*\(/g, (pd || kd ? "" : Wd) + "void main(")
        } else {
          Jd.indexOf("#define VERTEXOUTPUT_INVARIANT") >= 0 && (dd = "invariant gl_Position;\n" + dd);
          if (-1 !== Jd.indexOf("#define MULTIVIEW")) return "#extension GL_OVR_multiview2 : require\nlayout (num_views = 2) in;\n" + dd
        }
        return dd
      }
    }
    var ld = kd(39891),
      Qd = kd(39902),
      Ld = kd(39906),
      Od = kd(39805),
      ed = kd(39851),
      Rd = kd(39831),
      Id = kd(39909),
      Gd = kd(39883);
    class vd {}
    class xd extends Wd.b {
      get name() {
        return this._name
      }
      set name(dd) {
        this._name = dd
      }
      get version() {
        return this._webGLVersion
      }
      static get ShadersRepository() {
        return pd.b.ShadersRepository
      }
      static set ShadersRepository(dd) {
        pd.b.ShadersRepository = dd
      }
      get supportsUniformBuffers() {
        return this.uL > 1 && !this.disableUniformBuffers
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
      constructor(dd, Jd, kd, pd) {
        if (kd = kd || {}, super(Jd ?? kd.antialias, kd, pd), this._name = "WebGL", this.forcePOTTextures = !1, this.validateShaderPrograms = !1, this.disableUniformBuffers = !1, this._webGLVersion = 1, this._integerMRTAttachmentsMask = 0, this._vertexAttribArraysEnabled = [], this._uintIndicesCurrentlySet = !1, this._currentBoundBuffer = new Array, this._currentFramebuffer = null, this._dummyFramebuffer = null, this._currentBufferPointers = new Array, this._currentInstanceLocations = new Array, this._currentInstanceBuffers = new Array, this._vaoRecordInProgress = !1, this._mustWipeVertexAttributes = !1, this._nextFreeTextureSlots = new Array, this._maxSimultaneousTextures = 0, this._maxMSAASamplesOverride = null, this._unpackFlipYCached = null, this.enableUnpackFlipYCached = !0, this._boundUniforms = {}, !dd) return;
        let Wd;
        if (dd.getContext) {
          if (Wd = dd, void 0 === kd.preserveDrawingBuffer && (kd.preserveDrawingBuffer = !1), void 0 === kd.xrCompatible && (kd.xrCompatible = !1), navigator && navigator.userAgent) {
            this._setupMobileChecks();
            const dd = navigator.userAgent;
            for (const Jd of xd.ExceptionList) {
              const pd = Jd.key,
                Nd = Jd.targets;
              if (new RegExp(pd).test(dd)) {
                if (Jd.capture && Jd.captureConstraint) {
                  const kd = Jd.capture,
                    pd = Jd.captureConstraint,
                    Nd = new RegExp(kd).exec(dd);
                  if (Nd && Nd.length > 0) {
                    if (parseInt(Nd[Nd.length - 1]) >= pd) continue
                  }
                }
                for (const dd of Nd) switch (dd) {
                  case "uniformBuffer":
                    this.disableUniformBuffers = !0;
                    break;
                  case "vao":
                    this.disableVertexArrayObjects = !0;
                    break;
                  case "antialias":
                    kd.antialias = !1;
                    break;
                  case "maxMSAASamples":
                    this._maxMSAASamplesOverride = 1
                }
              }
            }
          }
          if (this._doNotHandleContextLost ? this._onContextLost = () => {
              (0, Nd.y)(this._gl)
            } : (this._onContextLost = dd => {
              dd.preventDefault(), this._contextWasLost = !0, (0, Nd.y)(this._gl), Zd.c.Warn("WebGL context lost."), this.onContextLostObservable.notifyObservers(this)
            }, this._onContextRestored = () => {
              this._restoreEngineAfterContextLost((() => this._initGLContext()))
            }, Wd.addEventListener("webglcontextrestored", this._onContextRestored, !1), kd.powerPreference = kd.powerPreference || "high-performance"), Wd.addEventListener("webglcontextlost", this._onContextLost, !1), this._badDesktopOS && (kd.xrCompatible = !1), !kd.disableWebGL2Support) try {
            this._gl = Wd.getContext("webgl2", kd) || Wd.getContext("experimental-webgl2", kd), this._gl && (this._webGLVersion = 2, this._shaderPlatformName = "WEBGL2", this._gl.deleteQuery || (this._webGLVersion = 1, this._shaderPlatformName = "WEBGL1"))
          } catch (Kd) {}
          if (!this._gl) {
            if (!Wd) throw new Error("The provided canvas is null or undefined.");
            try {
              this._gl = Wd.getContext("webgl", kd) || Wd.getContext("experimental-webgl", kd)
            } catch (Kd) {
              throw new Error("WebGL not supported", {
                cause: Kd
              })
            }
          }
          if (!this._gl) throw new Error("WebGL not supported")
        } else {
          this._gl = dd, Wd = this._gl.canvas, this._gl.renderbufferStorageMultisample ? (this._webGLVersion = 2, this._shaderPlatformName = "WEBGL2") : this._shaderPlatformName = "WEBGL1";
          const Jd = this._gl.getContextAttributes();
          Jd && (kd.stencil = Jd.stencil)
        }
        this._sharedInit(Wd), this._gl.pixelStorei(this._gl.UNPACK_COLORSPACE_CONVERSION_WEBGL, this._gl.NONE), void 0 !== kd.useHighPrecisionFloats && (this._highPrecisionShadersAllowed = kd.useHighPrecisionFloats), this.resize(), this._initGLContext(), this._initFeatures();
        for (let Nd = 0; Nd < this._caps.maxVertexAttribs; Nd++) this._currentBufferPointers[Nd] = new vd;
        this._shaderProcessor = this.uL > 1 ? new od : new Cd;
        const Pd = `Babylon.js v${xd.Version}`;
        Zd.c.Log(Pd + ` - ${this.description}`), this._renderingCanvas && this._renderingCanvas.setAttribute && this._renderingCanvas.setAttribute("data-engine", Pd);
        const gd = (0, Nd.z)(this._gl);
        gd.validateShaderPrograms = this.validateShaderPrograms, gd.parallelShaderCompile = this._caps.parallelShaderCompile
      }
      _clearEmptyResources() {
        this._dummyFramebuffer = null, super._clearEmptyResources()
      }
      _getShaderProcessingContext(dd) {
        return null
      }
      areAllEffectsReady() {
        for (const dd in this._compiledEffects) {
          if (!this._compiledEffects[dd].isReady()) return !1
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
        const dd = this._gl.getExtension("WEBGL_debug_renderer_info");
        null != dd && (this._glRenderer = this._gl.getParameter(dd.UNMASKED_RENDERER_WEBGL), this._glVendor = this._gl.getParameter(dd.UNMASKED_VENDOR_WEBGL)), this._glVendor || (this._glVendor = this._gl.getParameter(this._gl.VENDOR) || "Unknown vendor"), this._glRenderer || (this._glRenderer = this._gl.getParameter(this._gl.RENDERER) || "Unknown renderer"), 36193 !== this._gl.HALF_FLOAT_OES && (this._gl.HALF_FLOAT_OES = 36193), 34842 !== this._gl.RGBA16F && (this._gl.RGBA16F = 34842), 34836 !== this._gl.RGBA32F && (this._gl.RGBA32F = 34836), 35056 !== this._gl.DEPTH24_STENCIL8 && (this._gl.DEPTH24_STENCIL8 = 35056), this._caps.timerQuery && (1 === this._webGLVersion && (this._gl.getQuery = this._caps.timerQuery.getQueryEXT.bind(this._caps.timerQuery)), this._caps.canUseTimestampForTimerQuery = (this._gl.getQuery(this._caps.timerQuery.TIMESTAMP_EXT, this._caps.timerQuery.QUERY_COUNTER_BITS_EXT) ?? 0) > 0), this._caps.maxAnisotropy = this._caps.textureAnisotropicFilterExtension ? this._gl.getParameter(this._caps.textureAnisotropicFilterExtension.MAX_TEXTURE_MAX_ANISOTROPY_EXT) : 0, this._caps.textureFloatLinearFiltering = !(!this._caps.textureFloat || !this._gl.getExtension("OES_texture_float_linear")), this._caps.textureFloatRender = !(!this._caps.textureFloat || !this._canRenderToFloatFramebuffer()), this._caps.textureHalfFloatLinearFiltering = !!(this._webGLVersion > 1 || this._caps.textureHalfFloat && this._gl.getExtension("OES_texture_half_float_linear")), this._caps.textureNorm16 && (this._gl.R16_EXT = 33322, this._gl.RG16_EXT = 33324, this._gl.RGB16_EXT = 32852, this._gl.RGBA16_EXT = 32859, this._gl.R16_SNORM_EXT = 36760, this._gl.RG16_SNORM_EXT = 36761, this._gl.RGB16_SNORM_EXT = 36762, this._gl.RGBA16_SNORM_EXT = 36763);
        const Jd = this._gl.getExtension("OES_draw_buffers_indexed");
        if (this._caps.blendParametersPerTarget = !!Jd, this._alphaState = new Gd.e(this._caps.blendParametersPerTarget), Jd && (this._gl.blendEquationSeparateIndexed = Jd.blendEquationSeparateiOES.bind(Jd), this._gl.blendEquationIndexed = Jd.blendEquationiOES.bind(Jd), this._gl.blendFuncSeparateIndexed = Jd.blendFuncSeparateiOES.bind(Jd), this._gl.blendFuncIndexed = Jd.blendFunciOES.bind(Jd), this._gl.colorMaskIndexed = Jd.colorMaskiOES.bind(Jd), this._gl.disableIndexed = Jd.disableiOES.bind(Jd), this._gl.enableIndexed = Jd.enableiOES.bind(Jd)), this._caps.dualSourceBlending = !!this._gl.getExtension("WEBGL_blend_func_extended"), this._caps.astc && (this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR), this._caps.bptc && (this._gl.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT = this._caps.bptc.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT), this._caps.s3tc_srgb && (this._gl.COMPRESSED_SRGB_S3TC_DXT1_EXT = this._caps.s3tc_srgb.COMPRESSED_SRGB_S3TC_DXT1_EXT, this._gl.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT = this._caps.s3tc_srgb.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT, this._gl.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT = this._caps.s3tc_srgb.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT), this._caps.etc2 && (this._gl.COMPRESSED_SRGB8_ETC2 = this._caps.etc2.COMPRESSED_SRGB8_ETC2, this._gl.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC = this._caps.etc2.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC), this._webGLVersion > 1 && 5131 !== this._gl.HALF_FLOAT_OES && (this._gl.HALF_FLOAT_OES = 5131), this._caps.textureHalfFloatRender = this._caps.textureHalfFloat && this._canRenderToHalfFloatFramebuffer(), this._webGLVersion > 1) this._caps.drawBuffersExtension = !0, this._caps.maxMSAASamples = null !== this._maxMSAASamplesOverride ? this._maxMSAASamplesOverride : this._gl.getParameter(this._gl.MAX_SAMPLES), this._caps.maxDrawBuffers = this._gl.getParameter(this._gl.MAX_DRAW_BUFFERS);
        else {
          const dd = this._gl.getExtension("WEBGL_draw_buffers");
          if (null !== dd) {
            this._caps.drawBuffersExtension = !0, this._gl.drawBuffers = dd.drawBuffersWEBGL.bind(dd), this._caps.maxDrawBuffers = this._gl.getParameter(dd.MAX_DRAW_BUFFERS_WEBGL), this._gl.DRAW_FRAMEBUFFER = this._gl.FRAMEBUFFER;
            for (let Jd = 0; Jd < 16; Jd++) this._gl["COLOR_ATTACHMENT" + Jd + "_WEBGL"] = dd["COLOR_ATTACHMENT" + Jd + "_WEBGL"]
          }
        }
        if (this._webGLVersion > 1) this._caps.depthTextureExtension = !0;
        else {
          const dd = this._gl.getExtension("WEBGL_depth_texture");
          null != dd && (this._caps.depthTextureExtension = !0, this._gl.UNSIGNED_INT_24_8 = dd.UNSIGNED_INT_24_8_WEBGL)
        }
        if (this.disableVertexArrayObjects) this._caps.vertexArrayObject = !1;
        else if (this._webGLVersion > 1) this._caps.vertexArrayObject = !0;
        else {
          const dd = this._gl.getExtension("OES_vertex_array_object");
          null != dd && (this._caps.vertexArrayObject = !0, this._gl.createVertexArray = dd.createVertexArrayOES.bind(dd), this._gl.bindVertexArray = dd.bindVertexArrayOES.bind(dd), this._gl.deleteVertexArray = dd.deleteVertexArrayOES.bind(dd))
        }
        if (this._webGLVersion > 1) this._caps.instancedArrays = !0;
        else {
          const dd = this._gl.getExtension("ANGLE_instanced_arrays");
          null != dd ? (this._caps.instancedArrays = !0, this._gl.drawArraysInstanced = dd.drawArraysInstancedANGLE.bind(dd), this._gl.drawElementsInstanced = dd.drawElementsInstancedANGLE.bind(dd), this._gl.vertexAttribDivisor = dd.vertexAttribDivisorANGLE.bind(dd)) : this._caps.instancedArrays = !1
        }
        if (this._gl.getShaderPrecisionFormat) {
          const dd = this._gl.getShaderPrecisionFormat(this._gl.VERTEX_SHADER, this._gl.HIGH_FLOAT),
            Jd = this._gl.getShaderPrecisionFormat(this._gl.FRAGMENT_SHADER, this._gl.HIGH_FLOAT);
          if (dd && Jd && (this._caps.highPrecisionShaderSupported = 0 !== dd.precision && 0 !== Jd.precision, this._caps.shaderFloatPrecision = Math.min(dd.precision, Jd.precision)), !this._shouldUseHighPrecisionShader) {
            const dd = this._gl.getShaderPrecisionFormat(this._gl.VERTEX_SHADER, this._gl.MEDIUM_FLOAT),
              Jd = this._gl.getShaderPrecisionFormat(this._gl.FRAGMENT_SHADER, this._gl.MEDIUM_FLOAT);
            dd && Jd && (this._caps.shaderFloatPrecision = Math.min(dd.precision, Jd.precision))
          }
          this._caps.shaderFloatPrecision < 10 && (this._caps.shaderFloatPrecision = 10)
        }
        if (this._webGLVersion > 1) this._caps.blendMinMax = !0;
        else {
          const dd = this._gl.getExtension("EXT_blend_minmax");
          null != dd && (this._caps.blendMinMax = !0, this._gl.MAX = dd.MAX_EXT, this._gl.MIN = dd.MIN_EXT)
        }
        if (!this._caps.supportSRGBBuffers) {
          if (this._webGLVersion > 1) this._caps.supportSRGBBuffers = !0, this._glSRGBExtensionValues = {
            SRGB: WebGL2RenderingContext.SRGB,
            SRGB8: WebGL2RenderingContext.SRGB8,
            SRGB8_ALPHA8: WebGL2RenderingContext.SRGB8_ALPHA8
          };
          else {
            const dd = this._gl.getExtension("EXT_sRGB");
            null != dd && (this._caps.supportSRGBBuffers = !0, this._glSRGBExtensionValues = {
              SRGB: dd.SRGB_EXT,
              SRGB8: dd.SRGB_ALPHA_EXT,
              SRGB8_ALPHA8: dd.SRGB_ALPHA_EXT
            })
          }
          if (this._creationOptions) {
            const dd = this._creationOptions.forceSRGBBufferSupportState;
            void 0 !== dd && (this._caps.supportSRGBBuffers = this._caps.supportSRGBBuffers && dd)
          }
        }
        this._depthCullingState.depthTest = !0, this._depthCullingState.depthFunc = this._gl.LEQUAL, this._depthCullingState.depthMask = !0, this._maxSimultaneousTextures = this._caps.maxCombinedTexturesImageUnits;
        for (let kd = 0; kd < this._maxSimultaneousTextures; kd++) this._nextFreeTextureSlots.push(kd);
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
      get uL() {
        return this._webGLVersion
      }
      getClassName() {
        return "ThinEngine"
      }
      _prepareWorkingCanvas() {
        if (this._workingCanvas) return;
        this._workingCanvas = this.createCanvas(1, 1);
        const dd = this._workingCanvas.getContext("2d");
        dd && (this._workingContext = dd)
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
        const dd = this.getGlInfo();
        return dd && dd.renderer ? dd.renderer : ""
      }
      getRenderWidth() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && this._currentRenderTarget ? this._currentRenderTarget.width : this._framebufferDimensionsObject ? this._framebufferDimensionsObject.framebufferWidth : this._gl.drawingBufferWidth
      }
      getRenderHeight() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && this._currentRenderTarget ? this._currentRenderTarget.height : this._framebufferDimensionsObject ? this._framebufferDimensionsObject.framebufferHeight : this._gl.drawingBufferHeight
      }
      clear(dd, Jd, kd) {
        let pd = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          Nd = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
        const Wd = this.stencilStateComposer.useStencilGlobalOnly;
        this.stencilStateComposer.useStencilGlobalOnly = !0, this.applyStates(), this.stencilStateComposer.useStencilGlobalOnly = Wd;
        let Pd = 0;
        if (Jd && dd) {
          let Jd = !0;
          if (this._currentRenderTarget) {
            const kd = this._currentRenderTarget.texture?.format;
            if (void 0 !== kd && (0, Id.g)(kd)) {
              const kd = this._currentRenderTarget.texture?.type;
              void 0 !== kd && (0, Id.h)(kd) ? (xd._TempClearColorUint32[0] = 255 * dd.r, xd._TempClearColorUint32[1] = 255 * dd.g, xd._TempClearColorUint32[2] = 255 * dd.b, xd._TempClearColorUint32[3] = 255 * dd.a, this._gl.clearBufferuiv(this._gl.COLOR, 0, xd._TempClearColorUint32), Jd = !1) : (xd._TempClearColorInt32[0] = 255 * dd.r, xd._TempClearColorInt32[1] = 255 * dd.g, xd._TempClearColorInt32[2] = 255 * dd.b, xd._TempClearColorInt32[3] = 255 * dd.a, this._gl.clearBufferiv(this._gl.COLOR, 0, xd._TempClearColorInt32), Jd = !1)
            }
          }
          Jd && (this._gl.clearColor(dd.r, dd.g, dd.b, void 0 !== dd.a ? dd.a : 1), Pd |= this._gl.COLOR_BUFFER_BIT)
        }
        kd && (this.vpd ? (this._depthCullingState.depthFunc = this._gl.GEQUAL, this._gl.clearDepth(0)) : this._gl.clearDepth(1), Pd |= this._gl.DEPTH_BUFFER_BIT), pd && (this._gl.clearStencil(Nd), Pd |= this._gl.STENCIL_BUFFER_BIT), this._gl.clear(Pd)
      }
      _clearColorAttachment(dd, Jd, kd, pd) {
        if ((0, Id.g)(kd)) {
          const kd = (0, Id.h)(pd),
            Nd = kd ? xd._TempClearColorUint32 : xd._TempClearColorInt32;
          return Nd[0] = Jd.r, Nd[1] = Jd.g, Nd[2] = Jd.b, Nd[3] = Jd.a, void(kd ? this._gl.clearBufferuiv(this._gl.COLOR, dd, Nd) : this._gl.clearBufferiv(this._gl.COLOR, dd, Nd))
        }
        xd._TempClearColorFloat32[0] = Jd.r, xd._TempClearColorFloat32[1] = Jd.g, xd._TempClearColorFloat32[2] = Jd.b, xd._TempClearColorFloat32[3] = Jd.a, this._gl.clearBufferfv(this._gl.COLOR, dd, xd._TempClearColorFloat32)
      }
      _viewport(dd, Jd, kd, pd) {
        dd === this._viewportCached.x && Jd === this._viewportCached.y && kd === this._viewportCached.z && pd === this._viewportCached.w || (this._viewportCached.x = dd, this._viewportCached.y = Jd, this._viewportCached.z = kd, this._viewportCached.w = pd, this._gl.viewport(dd, Jd, kd, pd))
      }
      aG() {
        super.aG(), this._badOS && this.flushFramebuffer()
      }
      get performanceMonitor() {
        throw new Error("Not Supported by ThinEngine")
      }
      bindFramebuffer(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          kd = arguments.length > 2 ? arguments[2] : void 0,
          pd = arguments.length > 3 ? arguments[3] : void 0,
          Nd = arguments.length > 4 ? arguments[4] : void 0,
          Wd = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          Pd = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        const gd = dd;
        this._currentRenderTarget && this._resolveAndGenerateMipMapsFramebuffer(this._currentRenderTarget), this._currentRenderTarget = dd, this._integerMRTAttachmentsMask = !dd.isMulti && dd.texture && (0, Id.g)(dd.texture.format) ? 1 : 0, this._bindUnboundFramebuffer(gd._framebuffer);
        const Cd = this._gl;
        dd.isMulti || (dd.is2DArray || dd.is3D ? (Cd.framebufferTextureLayer(Cd.FRAMEBUFFER, Cd.COLOR_ATTACHMENT0, dd.texture._hardwareTexture?.underlyingResource, Wd, Pd), gd._currentLOD = Wd) : dd.isCube ? Cd.framebufferTexture2D(Cd.FRAMEBUFFER, Cd.COLOR_ATTACHMENT0, Cd.TEXTURE_CUBE_MAP_POSITIVE_X + Jd, dd.texture._hardwareTexture?.underlyingResource, Wd) : gd._currentLOD !== Wd && (Cd.framebufferTexture2D(Cd.FRAMEBUFFER, Cd.COLOR_ATTACHMENT0, Cd.TEXTURE_2D, dd.texture._hardwareTexture?.underlyingResource, Wd), gd._currentLOD = Wd));
        const Kd = dd._depthStencilTexture;
        if (Kd) {
          dd.is3D && (dd.texture.width === Kd.width && dd.texture.height === Kd.height && dd.texture.depth === Kd.depth || Zd.c.Warn("Depth/Stencil attachment for 3D target must have same dimensions as color attachment"));
          const kd = dd._depthStencilTextureWithStencil ? Cd.DEPTH_STENCIL_ATTACHMENT : Cd.DEPTH_ATTACHMENT;
          dd.is2DArray || dd.is3D ? Cd.framebufferTextureLayer(Cd.FRAMEBUFFER, kd, Kd._hardwareTexture?.underlyingResource, Wd, Pd) : dd.isCube ? Cd.framebufferTexture2D(Cd.FRAMEBUFFER, kd, Cd.TEXTURE_CUBE_MAP_POSITIVE_X + Jd, Kd._hardwareTexture?.underlyingResource, Wd) : Cd.framebufferTexture2D(Cd.FRAMEBUFFER, kd, Cd.TEXTURE_2D, Kd._hardwareTexture?.underlyingResource, Wd)
        }
        gd._MSAAFramebuffer && this._bindUnboundFramebuffer(gd._MSAAFramebuffer), this._cachedViewport && !Nd ? this.setViewport(this._cachedViewport, kd, pd) : (kd || (kd = dd.width, Wd && (kd /= Math.pow(2, Wd))), pd || (pd = dd.height, Wd && (pd /= Math.pow(2, Wd))), this._viewport(0, 0, kd, pd)), this.wipeCaches()
      }
      setStateCullFaceType(dd, Jd) {
        const kd = this.cullBackFaces ?? dd ?? 1 ? this._gl.BACK : this._gl.FRONT;
        (this._depthCullingState.cullFace !== kd || Jd) && (this._depthCullingState.cullFace = kd)
      }
      setState(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          kd = arguments.length > 2 ? arguments[2] : void 0,
          pd = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          Nd = arguments.length > 4 ? arguments[4] : void 0,
          Wd = arguments.length > 5 ? arguments[5] : void 0,
          Pd = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        (this._depthCullingState.cull !== dd || kd) && (this._depthCullingState.cull = dd), this.setStateCullFaceType(Nd, kd), this.setZOffset(Jd), this.setZOffsetUnits(Pd);
        const Zd = pd ? this._gl.CW : this._gl.CCW;
        (this._depthCullingState.frontFace !== Zd || kd) && (this._depthCullingState.frontFace = Zd), this._stencilStateComposer.stencilMaterial = Wd
      }
      _resolveAndGenerateMipMapsFramebuffer(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        dd.disableAutomaticMSAAResolve || (dd.isMulti ? this.resolveMultiFramebuffer(dd) : this.resolveFramebuffer(dd)), Jd || (dd.isMulti ? this.generateMipMapsMultiFramebuffer(dd) : this.generateMipMapsFramebuffer(dd))
      }
      _bindUnboundFramebuffer(dd) {
        this._currentFramebuffer !== dd && (this._gl.bindFramebuffer(this._gl.FRAMEBUFFER, dd), this._currentFramebuffer = dd)
      }
      _currentFrameBufferIsDefaultFrameBuffer() {
        return null === this._currentFramebuffer
      }
      generateMipmaps(dd) {
        const Jd = this._getTextureTarget(dd);
        this._bindTextureDirectly(Jd, dd, !0), this._gl.generateMipmap(Jd), this._bindTextureDirectly(Jd, null)
      }
      unBindFramebuffer(dd, Jd, kd) {
        const pd = dd;
        this._currentRenderTarget = null, this._integerMRTAttachmentsMask = 0, this._resolveAndGenerateMipMapsFramebuffer(dd, Jd), kd && (pd._MSAAFramebuffer && this._bindUnboundFramebuffer(pd._framebuffer), kd()), this._bindUnboundFramebuffer(null)
      }
      generateMipMapsFramebuffer(dd) {
        dd.isMulti || !dd.texture?.generateMipMaps || dd.isCube || this.generateMipmaps(dd.texture)
      }
      resolveFramebuffer(dd) {
        const Jd = dd,
          kd = this._gl;
        if (!Jd._MSAAFramebuffer || Jd.isMulti) return;
        let pd = Jd.resolveMSAAColors ? kd.COLOR_BUFFER_BIT : 0;
        pd |= Jd._generateDepthBuffer && Jd.resolveMSAADepth ? kd.DEPTH_BUFFER_BIT : 0, pd |= Jd._generateStencilBuffer && Jd.resolveMSAAStencil ? kd.STENCIL_BUFFER_BIT : 0, kd.bindFramebuffer(kd.READ_FRAMEBUFFER, Jd._MSAAFramebuffer), kd.bindFramebuffer(kd.DRAW_FRAMEBUFFER, Jd._framebuffer), kd.blitFramebuffer(0, 0, dd.width, dd.height, 0, 0, dd.width, dd.height, pd, kd.NEAREST)
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
      createVertexBuffer(dd, Jd, kd) {
        return this._createVertexBuffer(dd, this._gl.STATIC_DRAW)
      }
      _createVertexBuffer(dd, Jd) {
        const kd = this._gl.createBuffer();
        if (!kd) throw new Error("Unable to create vertex buffer");
        const pd = new ld.b(kd);
        return this.bindArrayBuffer(pd), "number" !== typeof dd ? dd instanceof Array ? (this._gl.bufferData(this._gl.ARRAY_BUFFER, new Float32Array(dd), Jd), pd.oo = 4 * dd.length) : (this._gl.bufferData(this._gl.ARRAY_BUFFER, dd, Jd), pd.oo = dd.byteLength) : (this._gl.bufferData(this._gl.ARRAY_BUFFER, new Uint8Array(dd), Jd), pd.oo = dd), this._resetVertexBufferBinding(), pd.references = 1, pd
      }
      createDynamicVertexBuffer(dd, Jd) {
        return this._createVertexBuffer(dd, this._gl.DYNAMIC_DRAW)
      }
      _resetIndexBufferBinding() {
        this.bindIndexBuffer(null), this._cachedIndexBuffer = null
      }
      createIndexBuffer(dd, Jd, kd) {
        const pd = this._gl.createBuffer(),
          Nd = new ld.b(pd);
        if (!pd) throw new Error("Unable to create index buffer");
        this.bindIndexBuffer(Nd);
        const Wd = this._normalizeIndexData(dd);
        return this._gl.bufferData(this._gl.ELEMENT_ARRAY_BUFFER, Wd, Jd ? this._gl.DYNAMIC_DRAW : this._gl.STATIC_DRAW), this._resetIndexBufferBinding(), Nd.references = 1, Nd.is32Bits = 4 === Wd.BYTES_PER_ELEMENT, Nd
      }
      _normalizeIndexData(dd) {
        if (2 === dd.BYTES_PER_ELEMENT) return dd;
        if (this._caps.uintIndices) {
          if (dd instanceof Uint32Array) return dd;
          for (let Jd = 0; Jd < dd.length; Jd++)
            if (dd[Jd] >= 65535) return new Uint32Array(dd);
          return new Uint16Array(dd)
        }
        return new Uint16Array(dd)
      }
      bindArrayBuffer(dd) {
        this._vaoRecordInProgress || this._unbindVertexArrayObject(), this._bindBuffer(dd, this._gl.ARRAY_BUFFER)
      }
      bindUniformBlock(dd, Jd, kd) {
        const pd = dd.program,
          Nd = this._gl.getUniformBlockIndex(pd, Jd);
        this._gl.uniformBlockBinding(pd, Nd, kd)
      }
      bindIndexBuffer(dd) {
        this._vaoRecordInProgress || this._unbindVertexArrayObject(), this._bindBuffer(dd, this._gl.ELEMENT_ARRAY_BUFFER)
      }
      _bindBuffer(dd, Jd) {
        (this._vaoRecordInProgress || this._currentBoundBuffer[Jd] !== dd) && (this._gl.bindBuffer(Jd, dd ? dd.underlyingResource : null), this._currentBoundBuffer[Jd] = dd)
      }
      updateArrayBuffer(dd) {
        this._gl.bufferSubData(this._gl.ARRAY_BUFFER, 0, dd)
      }
      _vertexAttribPointer(dd, Jd, kd, pd, Nd, Wd, Pd) {
        const Zd = this._currentBufferPointers[Jd];
        if (!Zd) return;
        let gd = !1;
        Zd.active ? (Zd.buffer !== dd && (Zd.buffer = dd, gd = !0), Zd.size !== kd && (Zd.size = kd, gd = !0), Zd.type !== pd && (Zd.type = pd, gd = !0), Zd.normalized !== Nd && (Zd.normalized = Nd, gd = !0), Zd.stride !== Wd && (Zd.stride = Wd, gd = !0), Zd.offset !== Pd && (Zd.offset = Pd, gd = !0)) : (gd = !0, Zd.active = !0, Zd.index = Jd, Zd.size = kd, Zd.type = pd, Zd.normalized = Nd, Zd.stride = Wd, Zd.offset = Pd, Zd.buffer = dd), (gd || this._vaoRecordInProgress) && (this.bindArrayBuffer(dd), pd === this._gl.UNSIGNED_INT || pd === this._gl.INT ? this._gl.vertexAttribIPointer(Jd, kd, pd, Wd, Pd) : this._gl.vertexAttribPointer(Jd, kd, pd, Nd, Wd, Pd))
      }
      _bindIndexBufferWithCache(dd) {
        null != dd && this._cachedIndexBuffer !== dd && (this._cachedIndexBuffer = dd, this.bindIndexBuffer(dd), this._uintIndicesCurrentlySet = dd.is32Bits)
      }
      _bindVertexBuffersAttributes(dd, Jd, kd) {
        const pd = Jd.getAttributesNames();
        this._vaoRecordInProgress || this._unbindVertexArrayObject(), this.unbindAllAttributes();
        for (let Nd = 0; Nd < pd.length; Nd++) {
          const Wd = Jd.getAttributeLocation(Nd);
          if (Wd >= 0) {
            const Jd = pd[Nd];
            let Pd = null;
            if (kd && (Pd = kd[Jd]), Pd || (Pd = dd[Jd]), !Pd) continue;
            this._gl.enableVertexAttribArray(Wd), this._vaoRecordInProgress || (this._vertexAttribArraysEnabled[Wd] = !0);
            const Zd = Pd.getBuffer();
            Zd && (this._vertexAttribPointer(Zd, Wd, Pd.getSize(), Pd.type, Pd.normalized, Pd.byteStride, Pd.byteOffset), Pd.getIsInstanced() && (this._gl.vertexAttribDivisor(Wd, Pd.getInstanceDivisor()), this._vaoRecordInProgress || (this._currentInstanceLocations.push(Wd), this._currentInstanceBuffers.push(Zd))))
          }
        }
      }
      recordVertexArrayObject(dd, Jd, kd, pd) {
        const Nd = this._gl.createVertexArray();
        if (!Nd) throw new Error("Unable to create VAO");
        return this._vaoRecordInProgress = !0, this._gl.bindVertexArray(Nd), this._mustWipeVertexAttributes = !0, this._bindVertexBuffersAttributes(dd, kd, pd), this.bindIndexBuffer(Jd), this._vaoRecordInProgress = !1, this._gl.bindVertexArray(null), Nd
      }
      bindVertexArrayObject(dd, Jd) {
        this._cachedVertexArrayObject !== dd && (this._cachedVertexArrayObject = dd, this._gl.bindVertexArray(dd), this._cachedVertexBuffers = null, this._cachedIndexBuffer = null, this._uintIndicesCurrentlySet = null != Jd && Jd.is32Bits, this._mustWipeVertexAttributes = !0)
      }
      bindBuffersDirectly(dd, Jd, kd, pd, Nd) {
        if (this._cachedVertexBuffers !== dd || this._cachedEffectForVertexBuffers !== Nd) {
          this._cachedVertexBuffers = dd, this._cachedEffectForVertexBuffers = Nd;
          const Jd = Nd.getAttributesCount();
          this._unbindVertexArrayObject(), this.unbindAllAttributes();
          let Wd = 0;
          for (let Pd = 0; Pd < Jd; Pd++)
            if (Pd < kd.length) {
              const Jd = Nd.getAttributeLocation(Pd);
              Jd >= 0 && (this._gl.enableVertexAttribArray(Jd), this._vertexAttribArraysEnabled[Jd] = !0, this._vertexAttribPointer(dd, Jd, kd[Pd], this._gl.FLOAT, !1, pd, Wd)), Wd += 4 * kd[Pd]
            }
        }
        this._bindIndexBufferWithCache(Jd)
      }
      _unbindVertexArrayObject() {
        this._cachedVertexArrayObject && (this._cachedVertexArrayObject = null, this._gl.bindVertexArray(null))
      }
      bindBuffers(dd, Jd, kd, pd) {
        this._cachedVertexBuffers === dd && this._cachedEffectForVertexBuffers === kd || (this._cachedVertexBuffers = dd, this._cachedEffectForVertexBuffers = kd, this._bindVertexBuffersAttributes(dd, kd, pd)), this._bindIndexBufferWithCache(Jd)
      }
      unbindInstanceAttributes() {
        let dd;
        for (let Jd = 0, kd = this._currentInstanceLocations.length; Jd < kd; Jd++) {
          const kd = this._currentInstanceBuffers[Jd];
          dd != kd && kd.references && (dd = kd, this.bindArrayBuffer(kd));
          const pd = this._currentInstanceLocations[Jd];
          this._gl.vertexAttribDivisor(pd, 0)
        }
        this._currentInstanceBuffers.length = 0, this._currentInstanceLocations.length = 0
      }
      releaseVertexArrayObject(dd) {
        this._gl.deleteVertexArray(dd)
      }
      _releaseBuffer(dd) {
        return dd.references--, 0 === dd.references && (this._deleteBuffer(dd), !0)
      }
      _deleteBuffer(dd) {
        this._gl.deleteBuffer(dd.underlyingResource)
      }
      updateAndBindInstancesBuffer(dd, Jd, kd) {
        if (this.bindArrayBuffer(dd), Jd && this._gl.bufferSubData(this._gl.ARRAY_BUFFER, 0, Jd), void 0 !== kd[0].index) this.bindInstancesBuffer(dd, kd, !0);
        else
          for (let pd = 0; pd < 4; pd++) {
            const Jd = kd[pd];
            this._vertexAttribArraysEnabled[Jd] || (this._gl.enableVertexAttribArray(Jd), this._vertexAttribArraysEnabled[Jd] = !0), this._vertexAttribPointer(dd, Jd, 4, this._gl.FLOAT, !1, 64, 16 * pd), this._gl.vertexAttribDivisor(Jd, 1), this._currentInstanceLocations.push(Jd), this._currentInstanceBuffers.push(dd)
          }
      }
      bindInstancesBuffer(dd, Jd) {
        let kd = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this.bindArrayBuffer(dd);
        let pd = 0;
        if (kd)
          for (let Nd = 0; Nd < Jd.length; Nd++) {
            pd += 4 * Jd[Nd].attributeSize
          }
        for (let Nd = 0; Nd < Jd.length; Nd++) {
          const kd = Jd[Nd];
          void 0 === kd.index && (kd.index = this._currentEffect.getAttributeLocationByName(kd.attributeName)), kd.index < 0 || (this._vertexAttribArraysEnabled[kd.index] || (this._gl.enableVertexAttribArray(kd.index), this._vertexAttribArraysEnabled[kd.index] = !0), this._vertexAttribPointer(dd, kd.index, kd.attributeSize, kd.attributeType || this._gl.FLOAT, kd.normalized || !1, pd, kd.offset), this._gl.vertexAttribDivisor(kd.index, void 0 === kd.divisor ? 1 : kd.divisor), this._currentInstanceLocations.push(kd.index), this._currentInstanceBuffers.push(dd))
        }
      }
      disableInstanceAttributeByName(dd) {
        if (!this._currentEffect) return;
        const Jd = this._currentEffect.getAttributeLocationByName(dd);
        this.disableInstanceAttribute(Jd)
      }
      disableInstanceAttribute(dd) {
        let Jd, kd = !1;
        for (; - 1 !== (Jd = this._currentInstanceLocations.indexOf(dd));) this._currentInstanceLocations.splice(Jd, 1), this._currentInstanceBuffers.splice(Jd, 1), kd = !0;
        kd && (this._gl.vertexAttribDivisor(dd, 0), this.disableAttributeByIndex(dd))
      }
      disableAttributeByIndex(dd) {
        this._gl.disableVertexAttribArray(dd), this._vertexAttribArraysEnabled[dd] = !1, this._currentBufferPointers[dd].active = !1
      }
      draw(dd, Jd, kd, pd) {
        this.drawElementsType(dd ? 0 : 1, Jd, kd, pd)
      }
      drawPointClouds(dd, Jd, kd) {
        this.drawArraysType(2, dd, Jd, kd)
      }
      drawUnIndexed(dd, Jd, kd, pd) {
        this.drawArraysType(dd ? 0 : 1, Jd, kd, pd)
      }
      drawElementsType(dd, Jd, kd, pd) {
        this.applyStates(), this._reportDrawCall();
        const Nd = this._drawMode(dd),
          Wd = this._uintIndicesCurrentlySet ? this._gl.UNSIGNED_INT : this._gl.UNSIGNED_SHORT,
          Pd = this._uintIndicesCurrentlySet ? 4 : 2;
        pd ? this._gl.drawElementsInstanced(Nd, kd, Wd, Jd * Pd, pd) : this._gl.drawElements(Nd, kd, Wd, Jd * Pd)
      }
      drawArraysType(dd, Jd, kd, pd) {
        this.applyStates(), this._reportDrawCall();
        const Nd = this._drawMode(dd);
        pd ? this._gl.drawArraysInstanced(Nd, Jd, kd, pd) : this._gl.drawArrays(Nd, Jd, kd)
      }
      _drawMode(dd) {
        switch (dd) {
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
      _releaseEffect(dd) {
        this._compiledEffects[dd._key] && delete this._compiledEffects[dd._key];
        const Jd = dd.getPipelineContext();
        Jd && this._deletePipelineContext(Jd)
      }
      _deletePipelineContext(dd) {
        const Jd = dd;
        Jd && Jd.program && (Jd.program.__SPECTOR_rebuildProgram = null, (0, Rd.l)(Jd), this._gl && (this._currentProgram === Jd.program && this._setProgram(null), this._gl.deleteProgram(Jd.program)))
      }
      _getGlobalDefines(dd) {
        return (0, ed.k)(dd, this.isNDCHalfZRange, this.vpd, this.useExactSrgbConversions)
      }
      createEffect(dd, Jd, kd, Wd, Pd, Zd, gd, Cd, Kd) {
        let od = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
          ld = arguments.length > 10 ? arguments[10] : void 0;
        const Qd = "string" === typeof dd ? dd : dd.vertexToken || dd.vertexSource || dd.vertexElement || dd.vertex,
          Ld = "string" === typeof dd ? dd : dd.fragmentToken || dd.fragmentSource || dd.fragmentElement || dd.fragment,
          Od = this._getGlobalDefines(),
          ed = void 0 !== Jd.attributes;
        let Rd = Pd ?? Jd.defines ?? "";
        Od && (Rd += Od);
        const Id = Qd + "+" + Ld + "@" + Rd;
        if (this._compiledEffects[Id]) {
          const dd = this._compiledEffects[Id];
          return gd && dd.isReady() && gd(dd), dd._refCount++, dd
        }
        this._gl && (0, Nd.z)(this._gl);
        const Gd = new pd.b(dd, Jd, ed ? this : kd, Wd, this, Pd, Zd, gd, Cd, Kd, Id, Jd.shaderLanguage ?? od, Jd.extraInitializationsAsync ?? ld);
        return this._compiledEffects[Id] = Gd, Gd
      }
      _getShaderSource(dd) {
        return this._gl.getShaderSource(dd)
      }
      createRawShaderProgram(dd, Jd, kd, pd) {
        let Wd = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
        const Pd = (0, Nd.z)(this._gl);
        return Pd._contextWasLost = this._contextWasLost, Pd.validateShaderPrograms = this.validateShaderPrograms, (0, Nd.u)(dd, Jd, kd, pd || this._gl, Wd)
      }
      createShaderProgram(dd, Jd, kd, pd, Wd) {
        let Pd = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null;
        const Zd = (0, Nd.z)(this._gl);
        return Zd._contextWasLost = this._contextWasLost, Zd.validateShaderPrograms = this.validateShaderPrograms, (0, Nd.x)(dd, Jd, kd, pd, Wd || this._gl, Pd)
      }
      inlineShaderCode(dd) {
        return dd
      }
      createPipelineContext(dd) {
        if (this._gl) {
          (0, Nd.z)(this._gl).parallelShaderCompile = this._caps.parallelShaderCompile
        }
        const Jd = (0, Nd.t)(this._gl, dd);
        return Jd.engine = this, Jd
      }
      createMaterialContext() {}
      createDrawContext() {}
      _finalizePipelineContext(dd) {
        return (0, Nd.j)(dd, this._gl, this.validateShaderPrograms)
      }
      _preparePipelineContextAsync(dd, Jd, kd, pd, Wd, Pd, Zd, gd, Cd, Kd, od) {
        const ld = (0, Nd.z)(this._gl);
        return ld._contextWasLost = this._contextWasLost, ld.validateShaderPrograms = this.validateShaderPrograms, ld._createShaderProgramInjection = this._createShaderProgram.bind(this), ld.createRawShaderProgramInjection = this.createRawShaderProgram.bind(this), ld.createShaderProgramInjection = this.createShaderProgram.bind(this), ld.loadFileInjection = this._loadFile.bind(this), (0, Nd.o)(dd, Jd, kd, pd, Wd, Pd, Zd, gd, Cd, Kd, od)
      }
      _createShaderProgram(dd, Jd, kd, pd) {
        let Wd = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
        return (0, Nd.e)(dd, Jd, kd, pd, Wd)
      }
      _isRenderingStateCompiled(dd) {
        return !this._isDisposed && (0, Nd.l)(dd, this._gl, this.validateShaderPrograms)
      }
      _executeWhenRenderingStateIsCompiled(dd, Jd) {
        (0, Nd.i)(dd, Jd)
      }
      getUniforms(dd, Jd) {
        const kd = new Array,
          pd = dd;
        for (let Nd = 0; Nd < Jd.length; Nd++) kd.push(this._gl.getUniformLocation(pd.program, Jd[Nd]));
        return kd
      }
      getAttributes(dd, Jd) {
        const kd = [],
          pd = dd;
        for (let Wd = 0; Wd < Jd.length; Wd++) try {
          kd.push(this._gl.getAttribLocation(pd.program, Jd[Wd]))
        } catch (Nd) {
          kd.push(-1)
        }
        return kd
      }
      enableEffect(dd) {
        (dd = null !== dd && (0, Pd.c)(dd) ? dd.effect : dd) && dd !== this._currentEffect && (this._stencilStateComposer.stencilMaterial = void 0, this.bindSamplers(dd), this._currentEffect = dd, dd.onBind && dd.onBind(dd), dd._onBindObservable && dd._onBindObservable.notifyObservers(dd))
      }
      setInt(dd, Jd) {
        return !!dd && (this._gl.uniform1i(dd, Jd), !0)
      }
      setInt2(dd, Jd, kd) {
        return !!dd && (this._gl.uniform2i(dd, Jd, kd), !0)
      }
      setInt3(dd, Jd, kd, pd) {
        return !!dd && (this._gl.uniform3i(dd, Jd, kd, pd), !0)
      }
      setInt4(dd, Jd, kd, pd, Nd) {
        return !!dd && (this._gl.uniform4i(dd, Jd, kd, pd, Nd), !0)
      }
      setIntArray(dd, Jd) {
        return !!dd && (this._gl.uniform1iv(dd, Jd), !0)
      }
      setIntArray2(dd, Jd) {
        return !(!dd || Jd.length % 2 !== 0) && (this._gl.uniform2iv(dd, Jd), !0)
      }
      setIntArray3(dd, Jd) {
        return !(!dd || Jd.length % 3 !== 0) && (this._gl.uniform3iv(dd, Jd), !0)
      }
      setIntArray4(dd, Jd) {
        return !(!dd || Jd.length % 4 !== 0) && (this._gl.uniform4iv(dd, Jd), !0)
      }
      setUInt(dd, Jd) {
        return !!dd && (this._gl.uniform1ui(dd, Jd), !0)
      }
      setUInt2(dd, Jd, kd) {
        return !!dd && (this._gl.uniform2ui(dd, Jd, kd), !0)
      }
      setUInt3(dd, Jd, kd, pd) {
        return !!dd && (this._gl.uniform3ui(dd, Jd, kd, pd), !0)
      }
      setUInt4(dd, Jd, kd, pd, Nd) {
        return !!dd && (this._gl.uniform4ui(dd, Jd, kd, pd, Nd), !0)
      }
      setUIntArray(dd, Jd) {
        return !!dd && (this._gl.uniform1uiv(dd, Jd), !0)
      }
      setUIntArray2(dd, Jd) {
        return !(!dd || Jd.length % 2 !== 0) && (this._gl.uniform2uiv(dd, Jd), !0)
      }
      setUIntArray3(dd, Jd) {
        return !(!dd || Jd.length % 3 !== 0) && (this._gl.uniform3uiv(dd, Jd), !0)
      }
      setUIntArray4(dd, Jd) {
        return !(!dd || Jd.length % 4 !== 0) && (this._gl.uniform4uiv(dd, Jd), !0)
      }
      setArray(dd, Jd) {
        return !!dd && (!(Jd.length < 1) && (this._gl.uniform1fv(dd, Jd), !0))
      }
      setArray2(dd, Jd) {
        return !(!dd || Jd.length % 2 !== 0) && (this._gl.uniform2fv(dd, Jd), !0)
      }
      setArray3(dd, Jd) {
        return !(!dd || Jd.length % 3 !== 0) && (this._gl.uniform3fv(dd, Jd), !0)
      }
      setArray4(dd, Jd) {
        return !(!dd || Jd.length % 4 !== 0) && (this._gl.uniform4fv(dd, Jd), !0)
      }
      setMatrices(dd, Jd) {
        return !!dd && (this._gl.uniformMatrix4fv(dd, !1, Jd), !0)
      }
      setMatrix3x3(dd, Jd) {
        return !!dd && (this._gl.uniformMatrix3fv(dd, !1, Jd), !0)
      }
      setMatrix2x2(dd, Jd) {
        return !!dd && (this._gl.uniformMatrix2fv(dd, !1, Jd), !0)
      }
      setFloat(dd, Jd) {
        return !!dd && (this._gl.uniform1f(dd, Jd), !0)
      }
      setFloat2(dd, Jd, kd) {
        return !!dd && (this._gl.uniform2f(dd, Jd, kd), !0)
      }
      setFloat3(dd, Jd, kd, pd) {
        return !!dd && (this._gl.uniform3f(dd, Jd, kd, pd), !0)
      }
      setFloat4(dd, Jd, kd, pd, Nd) {
        return !!dd && (this._gl.uniform4f(dd, Jd, kd, pd, Nd), !0)
      }
      _applyColorWriteState() {
        if (this._colorWriteChanged) {
          this._colorWriteChanged = !1;
          const dd = this._colorWrite;
          this._gl.colorMask(dd, dd, dd, dd)
        }
      }
      applyStates() {
        this._depthCullingState.apply(this._gl), this._stencilStateComposer.apply(this._gl), this._alphaState.apply(this._gl, this._currentRenderTarget && this._currentRenderTarget.textures ? this._currentRenderTarget.textures.length : 1, this._integerMRTAttachmentsMask), this._applyColorWriteState()
      }
      wipeCaches(dd) {
        this.preventCacheWipeBetweenFrames && !dd || (this._currentEffect = null, this._viewportCached.x = 0, this._viewportCached.y = 0, this._viewportCached.z = 0, this._viewportCached.w = 0, this._unbindVertexArrayObject(), dd && (this._currentProgram = null, this.resetTextureCache(), this._stencilStateComposer.reset(), this._depthCullingState.reset(), this._depthCullingState.depthFunc = this._gl.LEQUAL, this._alphaState.reset(), this._resetAlphaMode(), this._colorWrite = !0, this._colorWriteChanged = !0, this._unpackFlipYCached = null, this._gl.pixelStorei(this._gl.UNPACK_COLORSPACE_CONVERSION_WEBGL, this._gl.NONE), this._gl.pixelStorei(this._gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), this._mustWipeVertexAttributes = !0, this.unbindAllAttributes()), this._resetVertexBufferBinding(), this._cachedIndexBuffer = null, this._cachedEffectForVertexBuffers = null, this.bindIndexBuffer(null))
      }
      _getSamplingParameters(dd, Jd) {
        const kd = this._gl;
        let pd = kd.NEAREST,
          Nd = kd.NEAREST,
          Wd = !1;
        switch (dd) {
          case 11:
            pd = kd.LINEAR, Nd = Jd ? kd.LINEAR_MIPMAP_NEAREST : kd.LINEAR;
            break;
          case 3:
            pd = kd.LINEAR, Wd = !0, Nd = Jd ? kd.LINEAR_MIPMAP_LINEAR : kd.LINEAR;
            break;
          case 8:
            Wd = !0, pd = kd.NEAREST, Nd = Jd ? kd.NEAREST_MIPMAP_LINEAR : kd.NEAREST;
            break;
          case 4:
            pd = kd.NEAREST, Nd = Jd ? kd.NEAREST_MIPMAP_NEAREST : kd.NEAREST;
            break;
          case 5:
            pd = kd.NEAREST, Nd = Jd ? kd.LINEAR_MIPMAP_NEAREST : kd.LINEAR;
            break;
          case 6:
            Wd = !0, pd = kd.NEAREST, Nd = Jd ? kd.LINEAR_MIPMAP_LINEAR : kd.LINEAR;
            break;
          case 7:
            pd = kd.NEAREST, Nd = kd.LINEAR;
            break;
          case 1:
            pd = kd.NEAREST, Nd = kd.NEAREST;
            break;
          case 9:
            pd = kd.LINEAR, Nd = Jd ? kd.NEAREST_MIPMAP_NEAREST : kd.NEAREST;
            break;
          case 10:
            Wd = !0, pd = kd.LINEAR, Nd = Jd ? kd.NEAREST_MIPMAP_LINEAR : kd.NEAREST;
            break;
          case 2:
            pd = kd.LINEAR, Nd = kd.LINEAR;
            break;
          case 12:
            pd = kd.LINEAR, Nd = kd.NEAREST
        }
        return {
          min: Nd,
          mag: pd,
          hasMipMaps: Wd
        }
      }
      _createTexture() {
        const dd = this._gl.createTexture();
        if (!dd) throw new Error("Unable to create texture");
        return dd
      }
      _createHardwareTexture() {
        return new Ld.b(this._createTexture(), this._gl)
      }
      _createInternalTexture(dd, Jd) {
        let kd, pd, Nd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          Wd = !1,
          Pd = 0,
          gd = 3,
          Cd = 5,
          Kd = !1,
          od = 1,
          ld = !1,
          Qd = 0,
          Ld = !1;
        void 0 !== Jd && "object" === typeof Jd ? (kd = !!Jd.generateMipMaps, Wd = !!Jd.createMipMaps, Pd = void 0 === Jd.type ? 0 : Jd.type, gd = void 0 === Jd.samplingMode ? 3 : Jd.samplingMode, Cd = void 0 === Jd.format ? 5 : Jd.format, Kd = void 0 !== Jd.useSRGBBuffer && Jd.useSRGBBuffer, od = Jd.samples ?? 1, pd = Jd.label, ld = !!Jd.createMSAATexture, Qd = Jd.comparisonFunction || 0, Ld = !!Jd.isCube) : kd = !!Jd, Kd && (Kd = this._caps.supportSRGBBuffers && (this.uL > 1 || this.isWebGPU)), (1 !== Pd || this._caps.textureFloatLinearFiltering) && (2 !== Pd || this._caps.textureHalfFloatLinearFiltering) || (gd = 1), 1 !== Pd || this._caps.textureFloat || (Pd = 0, Zd.c.Warn("Float textures are not supported. Type forced to TEXTURETYPE_UNSIGNED_BYTE"));
        const ed = (0, Id.f)(Cd),
          Rd = (0, Id.c)(Cd),
          Gd = this._gl,
          vd = new Od.b(this, Nd),
          xd = dd.width || dd,
          qd = dd.height || dd,
          Bd = dd.depth || 0,
          sd = dd.layers || 0,
          ad = this._getSamplingParameters(gd, (kd || Wd) && !ed),
          Md = 0 !== sd ? Gd.TEXTURE_2D_ARRAY : 0 !== Bd ? Gd.TEXTURE_3D : Ld ? Gd.TEXTURE_CUBE_MAP : Gd.TEXTURE_2D,
          Fd = ed ? this._getInternalFormatFromDepthTextureFormat(Cd, !0, Rd) : this._getRGBABufferInternalSizedFormat(Pd, Cd, Kd),
          Yd = ed ? Rd ? Gd.DEPTH_STENCIL : Gd.DEPTH_COMPONENT : this._getInternalFormat(Cd),
          md = ed ? this._getWebGLTextureTypeFromDepthTextureFormat(Cd) : this._getWebGLTextureType(Pd);
        if (this._bindTextureDirectly(Md, vd), 0 !== sd) vd.is2DArray = !0, Gd.texImage3D(Md, 0, Fd, xd, qd, sd, 0, Yd, md, null);
        else if (0 !== Bd) vd.is3D = !0, Gd.texImage3D(Md, 0, Fd, xd, qd, Bd, 0, Yd, md, null);
        else if (Ld) {
          vd.isCube = !0;
          for (let dd = 0; dd < 6; dd++) Gd.texImage2D(Gd.TEXTURE_CUBE_MAP_POSITIVE_X + dd, 0, Fd, xd, qd, 0, Yd, md, null)
        } else Gd.texImage2D(Md, 0, Fd, xd, qd, 0, Yd, md, null);
        if (Gd.texParameteri(Md, Gd.TEXTURE_MAG_FILTER, ad.mag), Gd.texParameteri(Md, Gd.TEXTURE_MIN_FILTER, ad.min), Gd.texParameteri(Md, Gd.TEXTURE_WRAP_S, Gd.CLAMP_TO_EDGE), Gd.texParameteri(Md, Gd.TEXTURE_WRAP_T, Gd.CLAMP_TO_EDGE), ed && this.uL > 1 && (0 === Qd ? (Gd.texParameteri(Md, Gd.TEXTURE_COMPARE_FUNC, 515), Gd.texParameteri(Md, Gd.TEXTURE_COMPARE_MODE, Gd.NONE)) : (Gd.texParameteri(Md, Gd.TEXTURE_COMPARE_FUNC, Qd), Gd.texParameteri(Md, Gd.TEXTURE_COMPARE_MODE, Gd.COMPARE_REF_TO_TEXTURE))), (kd || Wd) && this._gl.generateMipmap(Md), this._bindTextureDirectly(Md, null), vd._useSRGBBuffer = Kd, vd.baseWidth = xd, vd.baseHeight = qd, vd.width = xd, vd.height = qd, vd.depth = sd || Bd, vd.isReady = !0, vd.samples = od, vd.generateMipMaps = kd, vd.samplingMode = gd, vd.type = Pd, vd.format = Cd, vd.label = pd, vd.comparisonFunction = Qd, this._internalTexturesCache.push(vd), ld) {
          let dd;
          if (dd = (0, Id.f)(vd.format) ? this._setupFramebufferDepthAttachments((0, Id.c)(vd.format), 19 !== vd.format, vd.width, vd.height, od, vd.format, !0) : this._createRenderBuffer(vd.width, vd.height, od, -1, this._getRGBABufferInternalSizedFormat(vd.type, vd.format, vd._useSRGBBuffer), -1), !dd) throw new Error("Unable to create render buffer");
          vd._autoMSAAManagement = !0;
          let Jd = vd._hardwareTexture;
          Jd || (Jd = vd._hardwareTexture = this._createHardwareTexture()), Jd.addMSAARenderBuffer(dd)
        }
        return vd
      }
      _getUseSRGBBuffer(dd, Jd) {
        return dd && this._caps.supportSRGBBuffers && (this.uL > 1 || Jd)
      }
      createTexture(dd, Jd, kd, pd) {
        var Nd = this;
        let Wd = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3,
          Pd = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          Zd = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
          gd = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
          Cd = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
          Kd = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null,
          od = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : null,
          ld = arguments.length > 11 ? arguments[11] : void 0,
          Qd = arguments.length > 12 ? arguments[12] : void 0,
          Ld = arguments.length > 13 ? arguments[13] : void 0,
          ed = arguments.length > 14 ? arguments[14] : void 0;
        return this._createTextureBase(dd, Jd, kd, pd, Wd, Pd, Zd, (function() {
          for (var dd = arguments.length, Jd = new Array(dd), kd = 0; kd < dd; kd++) Jd[kd] = arguments[kd];
          return Nd._prepareWebGLTexture(...Jd, Kd)
        }), ((dd, Jd, kd, Nd, Wd, Pd) => {
          const Zd = this._gl,
            gd = kd.width === dd && kd.height === Jd;
          Wd._creationFlags = Ld ?? 0;
          const Cd = this._getTexImageParametersForCreateTexture(Wd.format, Wd._useSRGBBuffer);
          if (gd) return Zd.texImage2D(Zd.TEXTURE_2D, 0, Cd.internalFormat, Cd.format, Cd.type, kd), !1;
          const Kd = this._caps.maxTextureSize;
          if (kd.width > Kd || kd.height > Kd || !this._supportsHardwareTextureRescaling) return this._prepareWorkingCanvas(), !(!this._workingCanvas || !this._workingContext) && (this._workingCanvas.width = dd, this._workingCanvas.height = Jd, this._workingContext.drawImage(kd, 0, 0, kd.width, kd.height, 0, 0, dd, Jd), Zd.texImage2D(Zd.TEXTURE_2D, 0, Cd.internalFormat, Cd.format, Cd.type, this._workingCanvas), Wd.width = dd, Wd.height = Jd, !1);
          {
            const dd = new Od.b(this, 2);
            this._bindTextureDirectly(Zd.TEXTURE_2D, dd, !0), Zd.texImage2D(Zd.TEXTURE_2D, 0, Cd.internalFormat, Cd.format, Cd.type, kd), this._rescaleTexture(dd, Wd, pd, Cd.format, (() => {
              this._releaseTexture(dd), this._bindTextureDirectly(Zd.TEXTURE_2D, Wd, !0), Pd()
            }))
          }
          return !0
        }), gd, Cd, Kd, od, ld, Qd, ed)
      }
      _getTexImageParametersForCreateTexture(dd, Jd) {
        let kd, pd;
        return 1 === this.uL ? (kd = this._getInternalFormat(dd, Jd), pd = kd) : (kd = this._getInternalFormat(dd, !1), pd = this._getRGBABufferInternalSizedFormat(0, dd, Jd)), {
          internalFormat: pd,
          format: kd,
          type: this._gl.UNSIGNED_BYTE
        }
      }
      _rescaleTexture(dd, Jd, kd, pd, Nd) {}
      _unpackFlipY(dd) {
        this._unpackFlipYCached !== dd && (this._gl.pixelStorei(this._gl.UNPACK_FLIP_Y_WEBGL, dd ? 1 : 0), this.enableUnpackFlipYCached && (this._unpackFlipYCached = dd))
      }
      _getUnpackAlignement() {
        return this._gl.getParameter(this._gl.UNPACK_ALIGNMENT)
      }
      _getTextureTarget(dd) {
        return dd.isCube ? this._gl.TEXTURE_CUBE_MAP : dd.is3D ? this._gl.TEXTURE_3D : dd.is2DArray || dd.isMultiview ? this._gl.TEXTURE_2D_ARRAY : this._gl.TEXTURE_2D
      }
      updateTextureSamplingMode(dd, Jd) {
        let kd = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const pd = this._getTextureTarget(Jd),
          Nd = this._getSamplingParameters(dd, Jd.useMipMaps || kd);
        this._setTextureParameterInteger(pd, this._gl.TEXTURE_MAG_FILTER, Nd.mag, Jd), this._setTextureParameterInteger(pd, this._gl.TEXTURE_MIN_FILTER, Nd.min), kd && Nd.hasMipMaps && (Jd.generateMipMaps = !0, this._gl.generateMipmap(pd)), this._bindTextureDirectly(pd, null), Jd.samplingMode = dd
      }
      updateTextureDimensions(dd, Jd, kd) {}
      updateTextureWrappingMode(dd, Jd) {
        let kd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          pd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const Nd = this._getTextureTarget(dd);
        null !== Jd && (this._setTextureParameterInteger(Nd, this._gl.TEXTURE_WRAP_S, this._getTextureWrapMode(Jd), dd), dd._cachedWrapU = Jd), null !== kd && (this._setTextureParameterInteger(Nd, this._gl.TEXTURE_WRAP_T, this._getTextureWrapMode(kd), dd), dd._cachedWrapV = kd), (dd.is2DArray || dd.is3D) && null !== pd && (this._setTextureParameterInteger(Nd, this._gl.TEXTURE_WRAP_R, this._getTextureWrapMode(pd), dd), dd._cachedWrapR = pd), this._bindTextureDirectly(Nd, null)
      }
      _uploadCompressedDataToTextureDirectly(dd, Jd, kd, pd, Nd) {
        let Wd = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          Pd = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        const Zd = this._gl;
        let gd = Zd.TEXTURE_2D;
        if (dd.isCube && (gd = Zd.TEXTURE_CUBE_MAP_POSITIVE_X + Wd), dd._useSRGBBuffer) switch (Jd) {
          case 37492:
          case 36196:
            this._caps.etc2 ? Jd = Zd.COMPRESSED_SRGB8_ETC2 : dd._useSRGBBuffer = !1;
            break;
          case 37496:
            this._caps.etc2 ? Jd = Zd.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : dd._useSRGBBuffer = !1;
            break;
          case 36492:
            Jd = Zd.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT;
            break;
          case 37808:
            Jd = Zd.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR;
            break;
          case 37809:
            Jd = Zd.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR;
            break;
          case 37810:
            Jd = Zd.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR;
            break;
          case 37811:
            Jd = Zd.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR;
            break;
          case 37812:
            Jd = Zd.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR;
            break;
          case 37813:
            Jd = Zd.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR;
            break;
          case 37814:
            Jd = Zd.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR;
            break;
          case 37815:
            Jd = Zd.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR;
            break;
          case 37816:
            Jd = Zd.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR;
            break;
          case 37817:
            Jd = Zd.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR;
            break;
          case 37818:
            Jd = Zd.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR;
            break;
          case 37819:
            Jd = Zd.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR;
            break;
          case 37820:
            Jd = Zd.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR;
            break;
          case 37821:
            Jd = Zd.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR;
            break;
          case 33776:
            this._caps.s3tc_srgb ? Jd = Zd.COMPRESSED_SRGB_S3TC_DXT1_EXT : dd._useSRGBBuffer = !1;
            break;
          case 33777:
            this._caps.s3tc_srgb ? Jd = Zd.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT : dd._useSRGBBuffer = !1;
            break;
          case 33779:
            this._caps.s3tc_srgb ? Jd = Zd.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT : dd._useSRGBBuffer = !1;
            break;
          default:
            dd._useSRGBBuffer = !1
        }
        if (dd.generateMipMaps) {
          const Wd = dd._hardwareTexture;
          Wd.memoryAllocated || (Zd.texStorage2D(dd.isCube ? Zd.TEXTURE_CUBE_MAP : Zd.TEXTURE_2D, Math.floor(Math.log2(Math.max(kd, pd))) + 1, Jd, dd.width, dd.height), Wd.memoryAllocated = !0), this._gl.compressedTexSubImage2D(gd, Pd, 0, 0, kd, pd, Jd, Nd)
        } else this._gl.compressedTexImage2D(gd, Pd, Jd, kd, pd, 0, Nd)
      }
      _uploadDataToTextureDirectly(dd, Jd) {
        let kd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          pd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          Nd = arguments.length > 4 ? arguments[4] : void 0,
          Wd = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        const Pd = this._gl,
          Zd = this._getWebGLTextureType(dd.type),
          gd = this._getInternalFormat(dd.format),
          Cd = void 0 === Nd ? this._getRGBABufferInternalSizedFormat(dd.type, dd.format, dd._useSRGBBuffer) : this._getInternalFormat(Nd, dd._useSRGBBuffer);
        this._unpackFlipY(dd.invertY);
        let Kd = Pd.TEXTURE_2D;
        dd.isCube && (Kd = Pd.TEXTURE_CUBE_MAP_POSITIVE_X + kd);
        const od = Math.round(Math.log(dd.width) * Math.LOG2E),
          ld = Math.round(Math.log(dd.height) * Math.LOG2E),
          Qd = Wd ? dd.width : Math.pow(2, Math.max(od - pd, 0)),
          Ld = Wd ? dd.height : Math.pow(2, Math.max(ld - pd, 0));
        Pd.texImage2D(Kd, pd, Cd, Qd, Ld, 0, gd, Zd, Jd)
      }
      updateTextureData(dd, Jd, kd, pd, Nd, Wd) {
        let Pd = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0,
          Zd = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0,
          gd = arguments.length > 8 && void 0 !== arguments[8] && arguments[8];
        const Cd = this._gl,
          Kd = this._getWebGLTextureType(dd.type),
          od = this._getInternalFormat(dd.format);
        this._unpackFlipY(dd.invertY);
        let ld = Cd.TEXTURE_2D,
          Qd = Cd.TEXTURE_2D;
        dd.isCube && (Qd = Cd.TEXTURE_CUBE_MAP_POSITIVE_X + Pd, ld = Cd.TEXTURE_CUBE_MAP), this._bindTextureDirectly(ld, dd, !0), Cd.texSubImage2D(Qd, Zd, kd, pd, Nd, Wd, od, Kd, Jd), gd && this._gl.generateMipmap(Qd), this._bindTextureDirectly(ld, null)
      }
      _uploadArrayBufferViewToTexture(dd, Jd) {
        let kd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          pd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        const Nd = this._gl,
          Wd = dd.isCube ? Nd.TEXTURE_CUBE_MAP : Nd.TEXTURE_2D;
        this._bindTextureDirectly(Wd, dd, !0), this._uploadDataToTextureDirectly(dd, Jd, kd, pd), this._bindTextureDirectly(Wd, null, !0)
      }
      _prepareWebGLTextureContinuation(dd, Jd, kd, pd, Nd) {
        const Wd = this._gl;
        if (!Wd) return;
        const Pd = this._getSamplingParameters(Nd, !kd);
        Wd.texParameteri(Wd.TEXTURE_2D, Wd.TEXTURE_MAG_FILTER, Pd.mag), Wd.texParameteri(Wd.TEXTURE_2D, Wd.TEXTURE_MIN_FILTER, Pd.min), kd || pd || Wd.generateMipmap(Wd.TEXTURE_2D), this._bindTextureDirectly(Wd.TEXTURE_2D, null), Jd && Jd.removePendingData(dd), dd.onLoadedObservable.notifyObservers(dd), dd.onLoadedObservable.clear()
      }
      _prepareWebGLTexture(dd, Jd, kd, pd, Nd, Wd, Pd, Zd, gd, Cd) {
        const Kd = this.getCaps().maxTextureSize,
          od = Math.min(Kd, this.needPOTTextures ? (0, Qd.e)(pd.width, Kd) : pd.width),
          ld = Math.min(Kd, this.needPOTTextures ? (0, Qd.e)(pd.height, Kd) : pd.height),
          Ld = this._gl;
        Ld && (dd._hardwareTexture ? (this._bindTextureDirectly(Ld.TEXTURE_2D, dd, !0), this._unpackFlipY(void 0 === Nd || !!Nd), dd.baseWidth = pd.width, dd.baseHeight = pd.height, dd.width = od, dd.height = ld, dd.isReady = !0, dd.type = -1 !== dd.type ? dd.type : 0, dd.format = -1 !== dd.format ? dd.format : Cd ?? (".jpg" !== Jd || dd._useSRGBBuffer ? 5 : 4), Zd(od, ld, pd, Jd, dd, (() => {
          this._prepareWebGLTextureContinuation(dd, kd, Wd, Pd, gd)
        })) || this._prepareWebGLTextureContinuation(dd, kd, Wd, Pd, gd)) : kd && kd.removePendingData(dd))
      }
      _getInternalFormatFromDepthTextureFormat(dd, Jd, kd) {
        const pd = this._gl;
        if (!Jd) return pd.STENCIL_INDEX8;
        let Nd = kd ? pd.DEPTH_STENCIL : pd.DEPTH_COMPONENT;
        return this.uL > 1 ? 15 === dd ? Nd = pd.DEPTH_COMPONENT16 : 16 === dd ? Nd = pd.DEPTH_COMPONENT24 : 17 === dd || 13 === dd ? Nd = kd ? pd.DEPTH24_STENCIL8 : pd.DEPTH_COMPONENT24 : 14 === dd ? Nd = pd.DEPTH_COMPONENT32F : 18 === dd && (Nd = kd ? pd.DEPTH32F_STENCIL8 : pd.DEPTH_COMPONENT32F) : Nd = pd.DEPTH_COMPONENT16, Nd
      }
      _getWebGLTextureTypeFromDepthTextureFormat(dd) {
        const Jd = this._gl;
        let kd = Jd.UNSIGNED_INT;
        return 15 === dd ? kd = Jd.UNSIGNED_SHORT : 17 === dd || 13 === dd ? kd = Jd.UNSIGNED_INT_24_8 : 14 === dd ? kd = Jd.FLOAT : 18 === dd ? kd = Jd.FLOAT_32_UNSIGNED_INT_24_8_REV : 19 === dd && (kd = Jd.UNSIGNED_BYTE), kd
      }
      _setupFramebufferDepthAttachments(dd, Jd, kd, pd) {
        let Nd = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
          Wd = arguments.length > 5 ? arguments[5] : void 0,
          Pd = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        const Zd = this._gl;
        Wd = Wd ?? (dd ? 13 : 14);
        const gd = this._getInternalFormatFromDepthTextureFormat(Wd, Jd, dd);
        return dd && Jd ? this._createRenderBuffer(kd, pd, Nd, Zd.DEPTH_STENCIL, gd, Pd ? -1 : Zd.DEPTH_STENCIL_ATTACHMENT) : Jd ? this._createRenderBuffer(kd, pd, Nd, gd, gd, Pd ? -1 : Zd.DEPTH_ATTACHMENT) : dd ? this._createRenderBuffer(kd, pd, Nd, gd, gd, Pd ? -1 : Zd.STENCIL_ATTACHMENT) : null
      }
      _createRenderBuffer(dd, Jd, kd, pd, Nd, Wd) {
        let Pd = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6];
        const Zd = this._gl.createRenderbuffer();
        return this._updateRenderBuffer(Zd, dd, Jd, kd, pd, Nd, Wd, Pd)
      }
      _updateRenderBuffer(dd, Jd, kd, pd, Nd, Wd, Pd) {
        let Zd = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7];
        const gd = this._gl;
        return gd.bindRenderbuffer(gd.RENDERBUFFER, dd), pd > 1 && gd.renderbufferStorageMultisample ? gd.renderbufferStorageMultisample(gd.RENDERBUFFER, pd, Wd, Jd, kd) : gd.renderbufferStorage(gd.RENDERBUFFER, Nd, Jd, kd), -1 !== Pd && gd.framebufferRenderbuffer(gd.FRAMEBUFFER, Pd, gd.RENDERBUFFER, dd), Zd && gd.bindRenderbuffer(gd.RENDERBUFFER, null), dd
      }
      _releaseTexture(dd) {
        this._deleteTexture(dd._hardwareTexture), this.unbindAllTextures();
        const Jd = this._internalTexturesCache.indexOf(dd); - 1 !== Jd && this._internalTexturesCache.splice(Jd, 1), dd._lodTextureHigh && dd._lodTextureHigh.dispose(), dd._lodTextureMid && dd._lodTextureMid.dispose(), dd._lodTextureLow && dd._lodTextureLow.dispose(), dd._irradianceTexture && dd._irradianceTexture.dispose()
      }
      _deleteTexture(dd) {
        dd?.release()
      }
      _setProgram(dd) {
        this._currentProgram !== dd && ((0, Nd.p)(dd, this._gl), this._currentProgram = dd)
      }
      bindSamplers(dd) {
        const Jd = dd.getPipelineContext();
        this._setProgram(Jd.program);
        const kd = dd.getSamplers();
        for (let pd = 0; pd < kd.length; pd++) {
          const Jd = dd.getUniform(kd[pd]);
          Jd && (this._boundUniforms[pd] = Jd)
        }
        this._currentEffect = null
      }
      _activateCurrentTexture() {
        this._currentTextureChannel !== this._activeChannel && (this._gl.activeTexture(this._gl.TEXTURE0 + this._activeChannel), this._currentTextureChannel = this._activeChannel)
      }
      _bindTextureDirectly(dd, Jd) {
        let kd = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          pd = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          Nd = !1;
        const Wd = Jd && Jd._associatedChannel > -1;
        kd && Wd && (this._activeChannel = Jd._associatedChannel);
        if (this._boundTexturesCache[this._activeChannel] !== Jd || pd) {
          if (this._activateCurrentTexture(), Jd && Jd.isMultiview) throw Zd.c.Error(["_bindTextureDirectly called with a multiview texture!", dd, Jd]), "_bindTextureDirectly called with a multiview texture!";
          this._gl.bindTexture(dd, Jd?._hardwareTexture?.underlyingResource ?? null), this._boundTexturesCache[this._activeChannel] = Jd, Jd && (Jd._associatedChannel = this._activeChannel)
        } else kd && (Nd = !0, this._activateCurrentTexture());
        return Wd && !kd && this._bindSamplerUniformToChannel(Jd._associatedChannel, this._activeChannel), Nd
      }
      _bindTexture(dd, Jd, kd) {
        if (void 0 === dd) return;
        Jd && (Jd._associatedChannel = dd), this._activeChannel = dd;
        const pd = Jd ? this._getTextureTarget(Jd) : this._gl.TEXTURE_2D;
        this._bindTextureDirectly(pd, Jd)
      }
      unbindAllTextures() {
        for (let dd = 0; dd < this._maxSimultaneousTextures; dd++) this._activeChannel = dd, this._bindTextureDirectly(this._gl.TEXTURE_2D, null), this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null), this.uL > 1 && (this._bindTextureDirectly(this._gl.TEXTURE_3D, null), this._bindTextureDirectly(this._gl.TEXTURE_2D_ARRAY, null))
      }
      setTexture(dd, Jd, kd, pd) {
        void 0 !== dd && (Jd && (this._boundUniforms[dd] = Jd), this._setTexture(dd, kd))
      }
      _bindSamplerUniformToChannel(dd, Jd) {
        const kd = this._boundUniforms[dd];
        kd && kd._currentState !== Jd && (this._gl.uniform1i(kd, Jd), kd._currentState = Jd)
      }
      _getTextureWrapMode(dd) {
        switch (dd) {
          case 1:
            return this._gl.REPEAT;
          case 0:
            return this._gl.CLAMP_TO_EDGE;
          case 2:
            return this._gl.MIRRORED_REPEAT
        }
        return this._gl.REPEAT
      }
      _setTexture(dd, Jd) {
        let kd, pd = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Nd = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (!Jd) return null != this._boundTexturesCache[dd] && (this._activeChannel = dd, this._bindTextureDirectly(this._gl.TEXTURE_2D, null), this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null), this.uL > 1 && (this._bindTextureDirectly(this._gl.TEXTURE_3D, null), this._bindTextureDirectly(this._gl.TEXTURE_2D_ARRAY, null))), !1;
        if (Jd.video) {
          this._activeChannel = dd;
          const kd = Jd.getInternalTexture();
          kd && (kd._associatedChannel = dd), Jd.update()
        } else if (4 === Jd.delayLoadState) return Jd.delayLoad(), !1;
        kd = Nd ? Jd.depthStencilTexture : Jd.isReady() ? Jd.getInternalTexture() : Jd.isCube ? this.emptyCubeTexture : Jd.is3D ? this.emptyTexture3D : Jd.is2DArray ? this.emptyTexture2DArray : this.emptyTexture, !pd && kd && (kd._associatedChannel = dd);
        let Wd = !0;
        this._boundTexturesCache[dd] === kd && (pd || this._bindSamplerUniformToChannel(kd._associatedChannel, dd), Wd = !1), this._activeChannel = dd;
        const Pd = this._getTextureTarget(kd);
        if (Wd && this._bindTextureDirectly(Pd, kd, pd), kd && !kd.isMultiview) {
          if (kd.isCube && kd._cachedCoordinatesMode !== Jd.coordinatesMode) {
            kd._cachedCoordinatesMode = Jd.coordinatesMode;
            const dd = 3 !== Jd.coordinatesMode && 5 !== Jd.coordinatesMode ? 1 : 0;
            Jd.wrapU = dd, Jd.wrapV = dd
          }
          kd._cachedWrapU !== Jd.wrapU && (kd._cachedWrapU = Jd.wrapU, this._setTextureParameterInteger(Pd, this._gl.TEXTURE_WRAP_S, this._getTextureWrapMode(Jd.wrapU), kd)), kd._cachedWrapV !== Jd.wrapV && (kd._cachedWrapV = Jd.wrapV, this._setTextureParameterInteger(Pd, this._gl.TEXTURE_WRAP_T, this._getTextureWrapMode(Jd.wrapV), kd)), kd.is3D && kd._cachedWrapR !== Jd.wrapR && (kd._cachedWrapR = Jd.wrapR, this._setTextureParameterInteger(Pd, this._gl.TEXTURE_WRAP_R, this._getTextureWrapMode(Jd.wrapR), kd)), this._setAnisotropicLevel(Pd, kd, Jd.anisotropicFilteringLevel)
        }
        return !0
      }
      setTextureArray(dd, Jd, kd, pd) {
        if (void 0 !== dd && Jd) {
          this._textureUnits && this._textureUnits.length === kd.length || (this._textureUnits = new Int32Array(kd.length));
          for (let Jd = 0; Jd < kd.length; Jd++) {
            const pd = kd[Jd].getInternalTexture();
            pd ? (this._textureUnits[Jd] = dd + Jd, pd._associatedChannel = dd + Jd) : this._textureUnits[Jd] = -1
          }
          this._gl.uniform1iv(Jd, this._textureUnits);
          for (let dd = 0; dd < kd.length; dd++) this._setTexture(this._textureUnits[dd], kd[dd], !0)
        }
      }
      _setAnisotropicLevel(dd, Jd, kd) {
        const pd = this._caps.textureAnisotropicFilterExtension;
        11 !== Jd.samplingMode && 3 !== Jd.samplingMode && 2 !== Jd.samplingMode && (kd = 1), pd && Jd._cachedAnisotropicFilteringLevel !== kd && (this._setTextureParameterFloat(dd, pd.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(kd, this._caps.maxAnisotropy), Jd), Jd._cachedAnisotropicFilteringLevel = kd)
      }
      _setTextureParameterFloat(dd, Jd, kd, pd) {
        this._bindTextureDirectly(dd, pd, !0, !0), this._gl.texParameterf(dd, Jd, kd)
      }
      _setTextureParameterInteger(dd, Jd, kd, pd) {
        pd && this._bindTextureDirectly(dd, pd, !0, !0), this._gl.texParameteri(dd, Jd, kd)
      }
      unbindAllAttributes() {
        if (this._mustWipeVertexAttributes) {
          this._mustWipeVertexAttributes = !1;
          for (let dd = 0; dd < this._caps.maxVertexAttribs; dd++) this.disableAttributeByIndex(dd)
        } else
          for (let dd = 0, Jd = this._vertexAttribArraysEnabled.length; dd < Jd; dd++) dd >= this._caps.maxVertexAttribs || !this._vertexAttribArraysEnabled[dd] || this.disableAttributeByIndex(dd)
      }
      releaseEffects() {
        this._compiledEffects = {}, this.onReleaseEffectsObservable.notifyObservers(this)
      }
      dispose() {
        (0, gd.l)() && this._renderingCanvas && (this._renderingCanvas.removeEventListener("webglcontextlost", this._onContextLost), this._onContextRestored && this._renderingCanvas.removeEventListener("webglcontextrestored", this._onContextRestored)), super.dispose(), this._dummyFramebuffer && this._gl.deleteFramebuffer(this._dummyFramebuffer), this.unbindAllAttributes(), this._boundUniforms = {}, this._workingCanvas = null, this._workingContext = null, this._currentBufferPointers.length = 0, this._currentProgram = null, this._creationOptions.loseContextOnDispose && this._gl.getExtension("WEBGL_lose_context")?.loseContext(), (0, Nd.y)(this._gl)
      }
      attachContextLostEvent(dd) {
        this._renderingCanvas && this._renderingCanvas.addEventListener("webglcontextlost", dd, !1)
      }
      attachContextRestoredEvent(dd) {
        this._renderingCanvas && this._renderingCanvas.addEventListener("webglcontextrestored", dd, !1)
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
      _canRenderToFramebuffer(dd) {
        const Jd = this._gl;
        for (; Jd.getError() !== Jd.NO_ERROR;);
        let kd = !0;
        const pd = Jd.createTexture();
        Jd.bindTexture(Jd.TEXTURE_2D, pd), Jd.texImage2D(Jd.TEXTURE_2D, 0, this._getRGBABufferInternalSizedFormat(dd), 1, 1, 0, Jd.RGBA, this._getWebGLTextureType(dd), null), Jd.texParameteri(Jd.TEXTURE_2D, Jd.TEXTURE_MIN_FILTER, Jd.NEAREST), Jd.texParameteri(Jd.TEXTURE_2D, Jd.TEXTURE_MAG_FILTER, Jd.NEAREST);
        const Nd = Jd.createFramebuffer();
        Jd.bindFramebuffer(Jd.FRAMEBUFFER, Nd), Jd.framebufferTexture2D(Jd.FRAMEBUFFER, Jd.COLOR_ATTACHMENT0, Jd.TEXTURE_2D, pd, 0);
        const Wd = Jd.checkFramebufferStatus(Jd.FRAMEBUFFER);
        if (kd = kd && Wd === Jd.FRAMEBUFFER_COMPLETE, kd = kd && Jd.getError() === Jd.NO_ERROR, kd && (Jd.clear(Jd.COLOR_BUFFER_BIT), kd = kd && Jd.getError() === Jd.NO_ERROR), kd) {
          Jd.bindFramebuffer(Jd.FRAMEBUFFER, null);
          const dd = Jd.RGBA,
            pd = Jd.UNSIGNED_BYTE,
            Nd = new Uint8Array(4);
          Jd.readPixels(0, 0, 1, 1, dd, pd, Nd), kd = kd && Jd.getError() === Jd.NO_ERROR
        }
        for (Jd.deleteTexture(pd), Jd.deleteFramebuffer(Nd), Jd.bindFramebuffer(Jd.FRAMEBUFFER, null); !kd && Jd.getError() !== Jd.NO_ERROR;);
        return kd
      }
      _getWebGLTextureType(dd) {
        if (1 === this._webGLVersion) {
          switch (dd) {
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
        switch (dd) {
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
      _getInternalFormat(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          kd = Jd ? this._glSRGBExtensionValues.SRGB8_ALPHA8 : this._gl.RGBA;
        switch (dd) {
          case 0:
            kd = this._gl.ALPHA;
            break;
          case 1:
            kd = this._gl.LUMINANCE;
            break;
          case 2:
            kd = this._gl.LUMINANCE_ALPHA;
            break;
          case 6:
          case 33322:
          case 36760:
            kd = this._gl.RED;
            break;
          case 7:
          case 33324:
          case 36761:
            kd = this._gl.RG;
            break;
          case 4:
          case 32852:
          case 36762:
            kd = Jd ? this._glSRGBExtensionValues.SRGB : this._gl.RGB;
            break;
          case 5:
          case 32859:
          case 36763:
            kd = Jd ? this._glSRGBExtensionValues.SRGB8_ALPHA8 : this._gl.RGBA
        }
        if (this._webGLVersion > 1) switch (dd) {
          case 8:
            kd = this._gl.RED_INTEGER;
            break;
          case 9:
            kd = this._gl.RG_INTEGER;
            break;
          case 10:
            kd = this._gl.RGB_INTEGER;
            break;
          case 11:
            kd = this._gl.RGBA_INTEGER
        }
        return kd
      }
      _getRGBABufferInternalSizedFormat(dd, Jd) {
        let kd = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (1 === this._webGLVersion) {
          if (void 0 !== Jd) switch (Jd) {
            case 0:
              return this._gl.ALPHA;
            case 1:
              return this._gl.LUMINANCE;
            case 2:
              return this._gl.LUMINANCE_ALPHA;
            case 4:
              return kd ? this._glSRGBExtensionValues.SRGB : this._gl.RGB
          }
          return this._gl.RGBA
        }
        switch (dd) {
          case 3:
            switch (Jd) {
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
            switch (Jd) {
              case 6:
                return this._gl.R8;
              case 7:
                return this._gl.RG8;
              case 4:
                return kd ? this._glSRGBExtensionValues.SRGB8 : this._gl.RGB8;
              case 5:
                return kd ? this._glSRGBExtensionValues.SRGB8_ALPHA8 : this._gl.RGBA8;
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
            switch (Jd) {
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
            switch (Jd) {
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
            switch (Jd) {
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
            switch (Jd) {
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
            switch (Jd) {
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
            switch (Jd) {
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
            switch (Jd) {
              case 5:
              default:
                return this._gl.RGB10_A2;
              case 11:
                return this._gl.RGB10_A2UI
            }
        }
        return kd ? this._glSRGBExtensionValues.SRGB8_ALPHA8 : this._gl.RGBA8
      }
      readPixels(dd, Jd, kd, pd) {
        let Nd = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          Wd = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          Pd = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
        const gd = Nd ? 4 : 3,
          Cd = Nd ? this._gl.RGBA : this._gl.RGB,
          Kd = kd * pd * gd;
        if (Pd) {
          if (Pd.length < Kd) return Zd.c.Error(`Data buffer is too small to store the read pixels (${Pd.length} should be more than ${Kd})`), Promise.resolve(Pd)
        } else Pd = new Uint8Array(Kd);
        return Wd && this.flushFramebuffer(), this._gl.readPixels(dd, Jd, kd, pd, Cd, this._gl.UNSIGNED_BYTE, Pd), Promise.resolve(Pd)
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
          const dd = Wd.b._CreateCanvas(1, 1),
            Jd = dd.getContext("webgl") || dd.getContext("experimental-webgl");
          this._IsSupported = null != Jd && !!globalThis.WebGLRenderingContext
        } catch (dd) {
          this._IsSupported = !1
        }
        return this._IsSupported
      }
      static get HasMajorPerformanceCaveat() {
        if (null === this._HasMajorPerformanceCaveat) try {
          const dd = Wd.b._CreateCanvas(1, 1),
            Jd = dd.getContext("webgl", {
              failIfMajorPerformanceCaveat: !0
            }) || dd.getContext("experimental-webgl", {
              failIfMajorPerformanceCaveat: !0
            });
          this._HasMajorPerformanceCaveat = !Jd
        } catch (dd) {
          this._HasMajorPerformanceCaveat = !1
        }
        return this._HasMajorPerformanceCaveat
      }
    }
    xd._TempClearColorUint32 = new Uint32Array(4), xd._TempClearColorInt32 = new Int32Array(4), xd._TempClearColorFloat32 = new Float32Array(4), xd.ExceptionList = [{
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
    }], xd._ConcatenateShader = ed.h, xd._IsSupported = null, xd._HasMajorPerformanceCaveat = null
  },
  40169: (dd, Jd, kd) => {
    var pd;
    kd.d(Jd, {
        d: () => Nd
      }),
      function(dd) {
        dd[dd.PointerMove = 0] = "PointerMove", dd[dd.PointerDown = 1] = "PointerDown", dd[dd.PointerUp = 2] = "PointerUp"
      }(pd || (pd = {}));
    class Nd {}
    Nd.DOM_DELTA_PIXEL = 0, Nd.DOM_DELTA_LINE = 1, Nd.DOM_DELTA_PAGE = 2
  },
  40164: (dd, Jd, kd) => {
    kd.d(Jd, {
      d: () => pd,
      f: () => Wd,
      j: () => Nd
    });
    class pd {}
    pd.KEYDOWN = 1, pd.KEYUP = 2;
    class Nd {
      constructor(dd, Jd) {
        this.type = dd, this.event = Jd
      }
    }
    class Wd extends Nd {
      get skipOnPointerObservable() {
        return this.skipOnKeyboardObservable
      }
      set skipOnPointerObservable(dd) {
        this.skipOnKeyboardObservable = dd
      }
      constructor(dd, Jd) {
        super(dd, Jd), this.type = dd, this.event = Jd, this.skipOnKeyboardObservable = !1
      }
    }
  },
  40156: (dd, Jd, kd) => {
    kd.d(Jd, {
      b: () => Nd,
      e: () => Pd,
      f: () => Zd
    });
    var pd = kd(37251);
    class Nd {}
    Nd.POINTERDOWN = 1, Nd.POINTERUP = 2, Nd.POINTERMOVE = 4, Nd.POINTERWHEEL = 8, Nd.POINTERPICK = 16, Nd.POINTERTAP = 32, Nd.POINTERDOUBLETAP = 64;
    class Wd {
      constructor(dd, Jd) {
        this.type = dd, this.event = Jd
      }
    }
    class Pd extends Wd {
      constructor(dd, Jd, kd, Nd) {
        super(dd, Jd), this.ray = null, this.originalPickingInfo = null, this.skipOnPointerObservable = !1, this.localPosition = new pd.k(kd, Nd)
      }
    }
    class Zd extends Wd {
      get pickInfo() {
        return this._pickInfo || this._generatePickInfo(), this._pickInfo
      }
      constructor(dd, Jd, kd) {
        let pd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        super(dd, Jd), this._pickInfo = kd, this._inputManager = pd
      }
      _generatePickInfo() {
        this._inputManager && (this._pickInfo = this._inputManager._pickMove(this.event), this._inputManager._setRayOnPointerInfo(this._pickInfo, this.event), this._inputManager = null)
      }
    }
  },
  40186: (dd, Jd, kd) => {
    kd.d(Jd, {
      d: () => pd
    });
    class pd {
      static CompareLightsPriority(dd, Jd) {
        return dd.shadowEnabled !== Jd.shadowEnabled ? (Jd.shadowEnabled ? 1 : 0) - (dd.shadowEnabled ? 1 : 0) : Jd.renderPriority - dd.renderPriority
      }
    }
    pd.FALLOFF_DEFAULT = 0, pd.FALLOFF_PHYSICAL = 1, pd.FALLOFF_GLTF = 2, pd.FALLOFF_STANDARD = 3, pd.LIGHTMAP_DEFAULT = 0, pd.LIGHTMAP_SPECULAR = 1, pd.LIGHTMAP_SHADOWSONLY = 2, pd.INTENSITYMODE_AUTOMATIC = 0, pd.INTENSITYMODE_LUMINOUSPOWER = 1, pd.INTENSITYMODE_LUMINOUSINTENSITY = 2, pd.INTENSITYMODE_ILLUMINANCE = 3, pd.INTENSITYMODE_LUMINANCE = 4, pd.LIGHTTYPEID_POINTLIGHT = 0, pd.LIGHTTYPEID_DIRECTIONALLIGHT = 1, pd.LIGHTTYPEID_SPOTLIGHT = 2, pd.LIGHTTYPEID_HEMISPHERICLIGHT = 3, pd.LIGHTTYPEID_RECT_AREALIGHT = 4, pd.LIGHTTYPEID_CLUSTERED_CONTAINER = 5
  },
  39805: (dd, Jd, kd) => {
    kd.d(Jd, {
      b: () => Pd
    });
    var pd, Nd = kd(37280),
      Wd = kd(39807);
    ! function(dd) {
      dd[dd.Unknown = 0] = "Unknown", dd[dd.Url = 1] = "Url", dd[dd.Temp = 2] = "Temp", dd[dd.Raw = 3] = "Raw", dd[dd.Dynamic = 4] = "Dynamic", dd[dd.RenderTarget = 5] = "RenderTarget", dd[dd.MultiRenderTarget = 6] = "MultiRenderTarget", dd[dd.Cube = 7] = "Cube", dd[dd.CubeRaw = 8] = "CubeRaw", dd[dd.CubePrefiltered = 9] = "CubePrefiltered", dd[dd.Raw3D = 10] = "Raw3D", dd[dd.Raw2DArray = 11] = "Raw2DArray", dd[dd.DepthStencil = 12] = "DepthStencil", dd[dd.CubeRawRGBD = 13] = "CubeRawRGBD", dd[dd.Depth = 14] = "Depth", dd[dd.External = 15] = "External"
    }(pd || (pd = {}));
    class Pd extends Wd.e {
      get useMipMaps() {
        return null === this._useMipMaps ? this.generateMipMaps : this._useMipMaps
      }
      set useMipMaps(dd) {
        this._useMipMaps = dd
      }
      get uniqueId() {
        return this._uniqueId
      }
      _setUniqueId(dd) {
        this._uniqueId = dd
      }
      eL() {
        return this._engine
      }
      get source() {
        return this._source
      }
      constructor(dd, Jd) {
        let kd = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        super(), this.isReady = !1, this.isCube = !1, this.is3D = !1, this.is2DArray = !1, this.isMultiview = !1, this.url = "", this.generateMipMaps = !1, this._useMipMaps = null, this.mipLevelCount = 1, this.samples = 0, this.type = -1, this.format = -1, this.onLoadedObservable = new Nd.e, this.onErrorObservable = new Nd.e, this.onRebuildCallback = null, this.width = 0, this.height = 0, this.depth = 0, this.baseWidth = 0, this.baseHeight = 0, this.baseDepth = 0, this.invertY = !1, this._invertVScale = !1, this._associatedChannel = -1, this._source = 0, this._buffer = null, this._bufferView = null, this._bufferViewArray = null, this._bufferViewArrayArray = null, this._size = 0, this._extension = "", this._files = null, this._workingCanvas = null, this._workingContext = null, this._cachedCoordinatesMode = null, this._isDisabled = !1, this._compression = null, this._sphericalPolynomial = null, this._sphericalPolynomialPromise = null, this._sphericalPolynomialComputed = !1, this._lodGenerationScale = 0, this._lodGenerationOffset = 0, this._useSRGBBuffer = !1, this._creationFlags = 0, this._lodTextureHigh = null, this._lodTextureMid = null, this._lodTextureLow = null, this._isRGBD = !1, this._linearSpecularLOD = !1, this._irradianceTexture = null, this._hardwareTexture = null, this._maxLodLevel = null, this._references = 1, this._gammaSpace = null, this._premulAlpha = !1, this._dynamicTextureSource = null, this._autoMSAAManagement = !1, this._engine = dd, this._source = Jd, this._uniqueId = Pd._Counter++, kd || (this._hardwareTexture = dd._createHardwareTexture())
      }
      incrementReferences() {
        this._references++
      }
      updateSize(dd, Jd) {
        let kd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        this._engine.updateTextureDimensions(this, dd, Jd, kd), this.width = dd, this.height = Jd, this.depth = kd, this.baseWidth = dd, this.baseHeight = Jd, this.baseDepth = kd, this._size = dd * Jd * kd
      }
      _rebuild() {
        if (this.isReady = !1, this._cachedCoordinatesMode = null, this._cachedWrapU = null, this._cachedWrapV = null, this._cachedWrapR = null, this._cachedAnisotropicFilteringLevel = null, this.onRebuildCallback) {
          const dd = this.onRebuildCallback(this),
            Jd = Jd => {
              Jd._swapAndDie(this, !1), this.isReady = dd.isReady
            };
          return void(dd.isAsync ? dd.proxy.then(Jd) : Jd(dd.proxy))
        }
        let dd;
        switch (this.source) {
          case 2:
          case 12:
          case 14:
          case 15:
            break;
          case 1:
            return void(dd = this._engine.createTexture(this._originalUrl ?? this.url, !this.generateMipMaps, this.invertY, null, this.samplingMode, (dd => {
              dd._swapAndDie(this, !1), this.isReady = !0
            }), null, this._buffer, void 0, this.format, this._extension, void 0, void 0, void 0, this._useSRGBBuffer));
          case 3:
            if (dd = this._engine.createRawTexture(this._bufferView, this.baseWidth, this.baseHeight, this.format, this.generateMipMaps, this.invertY, this.samplingMode, this._compression, this.type, this._creationFlags, this._useSRGBBuffer, this.mipLevelCount), dd._swapAndDie(this, !1), this._bufferViewArray)
              for (let dd = 0; dd < this._bufferViewArray.length; dd++) {
                const Jd = this._bufferViewArray[dd];
                Jd && this._engine.updateRawTexture(this, Jd, this.format, this.invertY, this._compression, this.type, this._useSRGBBuffer, dd)
              }
            this.isReady = !0;
            break;
          case 10:
            dd = this._engine.createRawTexture3D(this._bufferView, this.baseWidth, this.baseHeight, this.baseDepth, this.format, this.generateMipMaps, this.invertY, this.samplingMode, this._compression, this.type), dd._swapAndDie(this, !1), this.isReady = !0;
            break;
          case 11:
            if (dd = this._engine.createRawTexture2DArray(this._bufferView, this.baseWidth, this.baseHeight, this.baseDepth, this.format, this.generateMipMaps, this.invertY, this.samplingMode, this._compression, this.type, this._creationFlags, this.mipLevelCount), dd._swapAndDie(this, !1), this._bufferViewArray)
              for (let dd = 0; dd < this._bufferViewArray.length; dd++) {
                const Jd = this._bufferViewArray[dd];
                Jd && this._engine.updateRawTexture2DArray(this, Jd, this.format, this.invertY, this._compression, this.type, dd)
              }
            this.isReady = !0;
            break;
          case 4:
            dd = this._engine.createDynamicTexture(this.baseWidth, this.baseHeight, this.generateMipMaps, this.samplingMode), dd._swapAndDie(this, !1), this._dynamicTextureSource && this._engine.updateDynamicTexture(this, this._dynamicTextureSource, this.invertY, this._premulAlpha, this.format, !0);
            break;
          case 7:
            return void(dd = this._engine.createCubeTexture(this.url, null, this._files, !this.generateMipMaps, (() => {
              dd._swapAndDie(this, !1), this.isReady = !0
            }), null, this.format, this._extension, !1, 0, 0, null, void 0, this._useSRGBBuffer, ArrayBuffer.isView(this._buffer) ? this._buffer : null));
          case 8:
            dd = this._engine.createRawCubeTexture(this._bufferViewArray, this.width, this._originalFormat ?? this.format, this.type, this.generateMipMaps, this.invertY, this.samplingMode, this._compression), dd._swapAndDie(this, !1), this.isReady = !0;
            break;
          case 13:
            return;
          case 9:
            return dd = this._engine.createPrefilteredCubeTexture(this.url, null, this._lodGenerationScale, this._lodGenerationOffset, (dd => {
              dd && dd._swapAndDie(this, !1), this.isReady = !0
            }), null, this.format, this._extension, void 0, ArrayBuffer.isView(this._buffer) ? this._buffer : null), void(dd._sphericalPolynomial = this._sphericalPolynomial)
        }
      }
      _swapAndDie(dd) {
        let Jd = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this._hardwareTexture?.setUsage(dd._source, this.generateMipMaps, this.is2DArray, this.isCube, this.is3D, this.width, this.height, this.depth), dd._hardwareTexture = this._hardwareTexture, dd._setUniqueId(Pd._Counter++), Jd && (dd._isRGBD = this._isRGBD), this._lodTextureHigh && (dd._lodTextureHigh && dd._lodTextureHigh.dispose(), dd._lodTextureHigh = this._lodTextureHigh), this._lodTextureMid && (dd._lodTextureMid && dd._lodTextureMid.dispose(), dd._lodTextureMid = this._lodTextureMid), this._lodTextureLow && (dd._lodTextureLow && dd._lodTextureLow.dispose(), dd._lodTextureLow = this._lodTextureLow), this._irradianceTexture && (dd._irradianceTexture && dd._irradianceTexture.dispose(), dd._irradianceTexture = this._irradianceTexture);
        const kd = this._engine.getLoadedTexturesCache();
        let pd = kd.indexOf(this); - 1 !== pd && kd.splice(pd, 1), pd = kd.indexOf(dd), -1 === pd && kd.push(dd)
      }
      dispose() {
        this._references--, 0 === this._references && (this.onLoadedObservable.clear(), this.onErrorObservable.clear(), this._engine._releaseTexture(this), this._hardwareTexture = null, this._dynamicTextureSource = null)
      }
    }
    Pd._Counter = 0
  },
  39909: (dd, Jd, kd) => {
    function pd(dd) {
      return 13 === dd || 14 === dd || 15 === dd || 16 === dd || 17 === dd || 18 === dd || 19 === dd
    }

    function Nd(dd) {
      return 8 === dd || 9 === dd || 10 === dd || 11 === dd
    }

    function Wd(dd) {
      return 0 === dd || 5 === dd || 7 === dd || 11 === dd
    }

    function Pd(dd) {
      return 13 === dd || 17 === dd || 18 === dd || 19 === dd
    }
    kd.d(Jd, {
      c: () => Pd,
      f: () => pd,
      g: () => Nd,
      h: () => Wd
    })
  },
  39807: (dd, Jd, kd) => {
    kd.d(Jd, {
      e: () => pd
    });
    class pd {
      get wrapU() {
        return this._cachedWrapU
      }
      set wrapU(dd) {
        this._cachedWrapU = dd
      }
      get wrapV() {
        return this._cachedWrapV
      }
      set wrapV(dd) {
        this._cachedWrapV = dd
      }
      get wrapR() {
        return this._cachedWrapR
      }
      set wrapR(dd) {
        this._cachedWrapR = dd
      }
      get anisotropicFilteringLevel() {
        return this._cachedAnisotropicFilteringLevel
      }
      set anisotropicFilteringLevel(dd) {
        this._cachedAnisotropicFilteringLevel = dd
      }
      get comparisonFunction() {
        return this._comparisonFunction
      }
      set comparisonFunction(dd) {
        this._comparisonFunction = dd
      }
      get useMipMaps() {
        return this._useMipMaps
      }
      set useMipMaps(dd) {
        this._useMipMaps = dd
      }
      constructor() {
        this.samplingMode = -1, this._useMipMaps = !0, this._cachedWrapU = null, this._cachedWrapV = null, this._cachedWrapR = null, this._cachedAnisotropicFilteringLevel = null, this._comparisonFunction = 0
      }
      setParameters() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          kd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          pd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          Nd = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 2,
          Wd = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
        return this._cachedWrapU = dd, this._cachedWrapV = Jd, this._cachedWrapR = kd, this._cachedAnisotropicFilteringLevel = pd, this.samplingMode = Nd, this._comparisonFunction = Wd, this
      }
      compareSampler(dd) {
        return this._cachedWrapU === dd._cachedWrapU && this._cachedWrapV === dd._cachedWrapV && this._cachedWrapR === dd._cachedWrapR && this._cachedAnisotropicFilteringLevel === dd._cachedAnisotropicFilteringLevel && this.samplingMode === dd.samplingMode && this._comparisonFunction === dd._comparisonFunction && this._useMipMaps === dd._useMipMaps
      }
    }
  },
  40086: (dd, Jd, kd) => {
    function pd(dd) {
      dd.push("vCameraColorCurveNeutral", "vCameraColorCurvePositive", "vCameraColorCurveNegative")
    }
    kd.d(Jd, {
      b: () => pd
    })
  },
  39885: (dd, Jd, kd) => {
    function pd(dd) {
      return void 0 === dd.getPipelineContext
    }
    kd.d(Jd, {
      c: () => pd
    })
  },
  40304: (dd, Jd, kd) => {
    kd.d(Jd, {
      d: () => Nd
    });
    var pd = kd(39866);
    class Nd {
      static GetEffect(dd) {
        return void 0 === dd.getPipelineContext ? dd.effect : dd
      }
      constructor(dd) {
        let Jd = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this._wasPreviouslyReady = !1, this._forceRebindOnNextCall = !0, this._wasPreviouslyUsingInstances = null, this.effect = null, this.defines = null, this.drawContext = dd.createDrawContext(), Jd && (this.materialContext = dd.createMaterialContext())
      }
      setEffect(dd, Jd) {
        let kd = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        kd || this.effect === dd || this.drawContext?._releaseUniformBufferSlots?.(), this.effect = dd, void 0 !== Jd && (this.defines = Jd), kd && this.drawContext?.reset()
      }
      dispose() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this.effect) {
          const Jd = this.effect;
          dd ? Jd.dispose() : pd.d.SetImmediate((() => {
            Jd.eL().onEndFrameObservable.addOnce((() => {
              Jd.dispose()
            }))
          })), this.effect = null
        }
        this.drawContext?.dispose()
      }
    }
  },
  39831: (dd, Jd, kd) => {
    kd.d(Jd, {
      e: () => od,
      f: () => Qd,
      i: () => Cd,
      l: () => Kd
    });
    var pd = kd(39840),
      Nd = kd(39848),
      Wd = kd(39829),
      Pd = kd(38812),
      Zd = kd(39862),
      gd = kd(39851);

    function Cd(dd, Jd) {
      return (0, Nd.z)(Jd).cachedPipelines[dd]
    }

    function Kd(dd) {
      const Jd = dd._name,
        kd = dd.context;
      if (Jd && kd) {
        const dd = (0, Nd.z)(kd),
          pd = dd.cachedPipelines[Jd];
        pd?.dispose(), delete dd.cachedPipelines[Jd]
      }
    }

    function od(dd, Jd, kd, Nd, Wd, Pd, gd) {
      let Cd, Kd;
      const od = (0, pd.l)() ? Pd?.getHostDocument() : null;
      Cd = "string" === typeof Jd ? Jd : "string" === typeof Jd.vertexSource ? "source:" + Jd.vertexSource : "string" === typeof Jd.vertexElement ? od?.getElementById(Jd.vertexElement) || Jd.vertexElement : Jd.vertex || Jd, Kd = "string" === typeof Jd ? Jd : "string" === typeof Jd.fragmentSource ? "source:" + Jd.fragmentSource : "string" === typeof Jd.fragmentElement ? od?.getElementById(Jd.fragmentElement) || Jd.fragmentElement : Jd.fragment || Jd;
      const Qd = [void 0, void 0],
        Ld = () => {
          if (Qd[0] && Qd[1]) {
            const [pd, Cd] = Qd;
            (0, Zd.h)(dd), (0, Zd.l)(pd, dd, ((pd, Kd) => {
              gd && (gd._vertexSourceCodeBeforeMigration = Kd), kd && (pd = kd("vertex", pd)), dd.isFragment = !0, (0, Zd.l)(Cd, dd, ((Pd, Cd) => {
                gd && (gd._fragmentSourceCodeBeforeMigration = Cd), kd && (Pd = kd("fragment", Pd));
                const Kd = (0, Zd.e)(pd, Pd, dd);
                dd = null;
                const od = function(dd, Jd, kd, pd) {
                  if (kd) {
                    return {
                      vertexSourceCode: (1 === pd ? "//" : "") + "#define SHADER_NAME vertex:" + (kd.vertexElement || kd.vertex || kd.spectorName || kd) + "\n" + dd,
                      fragmentSourceCode: (1 === pd ? "//" : "") + "#define SHADER_NAME fragment:" + (kd.fragmentElement || kd.fragment || kd.spectorName || kd) + "\n" + Jd
                    }
                  }
                  return {
                    vertexSourceCode: dd,
                    fragmentSourceCode: Jd
                  }
                }(Kd.vertexCode, Kd.fragmentCode, Jd, Wd);
                Nd?.(od.vertexSourceCode, od.fragmentSourceCode)
              }), Pd)
            }), Pd)
          }
        };
      ld(Cd, "Vertex", "", (dd => {
        gd && (gd._rawVertexSourceCode = dd), Qd[0] = dd, Ld()
      }), Wd), ld(Kd, "Fragment", "Pixel", (dd => {
        gd && (gd._rawFragmentSourceCode = dd), Qd[1] = dd, Ld()
      }), Wd)
    }

    function ld(dd, Jd, kd, Nd, Pd, Zd) {
      if ("undefined" !== typeof HTMLElement && dd instanceof HTMLElement) {
        return void Nd((0, pd.d)(dd))
      }
      if ("source:" === dd.substring(0, 7)) return void Nd(dd.substring(7));
      if ("base64:" === dd.substring(0, 7)) {
        return void Nd(window.atob(dd.substring(7)))
      }
      const Cd = Wd.c.GetShadersStore(Pd);
      if (Cd[dd + Jd + "Shader"]) return void Nd(Cd[dd + Jd + "Shader"]);
      if (kd && Cd[dd + kd + "Shader"]) return void Nd(Cd[dd + kd + "Shader"]);
      let Kd;
      if (Kd = "." === dd[0] || "/" === dd[0] || dd.indexOf("http") > -1 ? dd : Wd.c.GetShadersRepository(Pd) + dd, !(Zd = Zd || gd.m)) throw new Error("loadFileInjection is not defined");
      Zd(Kd + "." + Jd.toLowerCase() + ".fx", Nd)
    }
    const Qd = (dd, Jd, kd, pd) => {
      try {
        const Wd = dd.context ? (0, Nd.z)(dd.context) : null;
        Wd && (Wd.disableParallelShaderCompile = dd.disableParallelCompilation);
        const Pd = dd.existingPipelineContext || Jd(dd.shaderProcessingContext);
        return Pd._name = dd.name, dd.name && Wd && (Wd.cachedPipelines[dd.name] = Pd), kd(Pd, dd.vertex, dd.fragment, !!dd.createAsRaw, "", "", dd.rebuildRebind, dd.defines, dd.transformFeedbackVaryings, "", (() => {
          pd(Pd, (() => {
            dd.onRenderingStateCompiled?.(Pd)
          }))
        })), Pd
      } catch (Wd) {
        throw Pd.c.Error("Error compiling effect"), Wd
      }
    }
  },
  39822: (dd, Jd, kd) => {
    kd.d(Jd, {
      b: () => gd
    });
    var pd = kd(37280),
      Nd = kd(38812),
      Wd = kd(39829),
      Pd = kd(39831),
      Zd = kd(39866);
    class gd {
      static get ShadersRepository() {
        return Wd.c.ShadersRepository
      }
      static set ShadersRepository(dd) {
        Wd.c.ShadersRepository = dd
      }
      get lq() {
        return this._isDisposed
      }
      get onBindObservable() {
        return this._onBindObservable || (this._onBindObservable = new pd.e), this._onBindObservable
      }
      get shaderLanguage() {
        return this._shaderLanguage
      }
      constructor(dd, Jd, kd) {
        let Nd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          Wd = arguments.length > 4 ? arguments[4] : void 0,
          Zd = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          Cd = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
          Kd = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
          od = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
          ld = arguments.length > 9 ? arguments[9] : void 0,
          Qd = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : "",
          Ld = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : 0,
          Od = arguments.length > 12 ? arguments[12] : void 0;
        this.defines = "", this.onCompiled = null, this.onError = null, this.onBind = null, this.uniqueId = 0, this.onCompileObservable = new pd.e, this.onErrorObservable = new pd.e, this._onBindObservable = null, this._isDisposed = !1, this._refCount = 1, this._bonesComputationForcedToCPU = !1, this._uniformBuffersNames = {}, this._multiTarget = !1, this._samplers = {}, this._isReady = !1, this._compilationError = "", this._allFallbacksProcessed = !1, this._uniforms = {}, this._key = "", this._fallbacks = null, this._vertexSourceCodeOverride = "", this._fragmentSourceCodeOverride = "", this._transformFeedbackVaryings = null, this._disableParallelShaderCompilation = !1, this._pipelineContext = null, this._vertexSourceCode = "", this._fragmentSourceCode = "", this._vertexSourceCodeBeforeMigration = "", this._fragmentSourceCodeBeforeMigration = "", this._rawVertexSourceCode = "", this._rawFragmentSourceCode = "", this._processCodeAfterIncludes = void 0, this._processFinalCode = null, this._onReleaseEffectsObserver = null, this.name = dd, this._key = Qd;
        const ed = this._key.replace(/\r/g, "").replace(/\n/g, "|");
        let Rd;
        if (Jd.attributes) {
          const dd = Jd;
          if (this._engine = kd, this._attributesNames = dd.attributes, this._uniformsNames = dd.uniformsNames.concat(dd.samplers), this._samplerList = dd.samplers.slice(), this.defines = dd.defines, this.onError = dd.onError, this.onCompiled = dd.onCompiled, this._fallbacks = dd.fallbacks, this._indexParameters = dd.indexParameters, this._transformFeedbackVaryings = dd.transformFeedbackVaryings || null, this._multiTarget = !!dd.multiTarget, this._shaderLanguage = dd.shaderLanguage ?? 0, this._disableParallelShaderCompilation = !!dd.disableParallelShaderCompilation, dd.uniformBuffersNames) {
            this._uniformBuffersNamesList = dd.uniformBuffersNames.slice();
            for (let Jd = 0; Jd < dd.uniformBuffersNames.length; Jd++) this._uniformBuffersNames[dd.uniformBuffersNames[Jd]] = Jd
          }
          this._processFinalCode = dd.processFinalCode ?? null, this._processCodeAfterIncludes = dd.processCodeAfterIncludes ?? void 0, Od = dd.extraInitializationsAsync, Rd = dd.existingPipelineContext
        } else this._engine = Wd, this.defines = null == Zd ? "" : Zd, this._uniformsNames = kd.concat(Nd), this._samplerList = Nd ? Nd.slice() : [], this._attributesNames = Jd, this._uniformBuffersNamesList = [], this._shaderLanguage = Ld, this.onError = od, this.onCompiled = Kd, this._indexParameters = ld, this._fallbacks = Cd;
        "WEBGL2" === this._engine.shaderPlatformName && (Rd = (0, Pd.i)(ed, this._engine._gl) ?? Rd), this._attributeLocationByName = {}, this.uniqueId = gd._UniqueIdSeed++, Rd ? (this._pipelineContext = Rd, this._pipelineContext.setEngine(this._engine), this._onRenderingStateCompiled(this._pipelineContext), this._pipelineContext.program && (this._pipelineContext.program.__SPECTOR_rebuildProgram = this._rebuildProgram.bind(this))) : this._processShaderCodeAsync(null, !1, null, Od).catch((dd => {
          const Jd = dd?.message ?? String(dd),
            kd = new Error(`Effect async shader preparation failed for "${String(this.name)}": ${Jd}`);
          dd && "string" === typeof dd.stack && (kd.stack = `${kd.message}\nCaused by: ${dd.stack}`), this._processCompilationErrors(kd)
        })), this._onReleaseEffectsObserver = this._engine.onReleaseEffectsObservable.addOnce((() => {
          this._onReleaseEffectsObserver = null, this.lq || this.dispose(!0)
        }))
      }
      async _processShaderCodeAsync() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          Jd = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          kd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          pd = arguments.length > 3 ? arguments[3] : void 0;
        pd && await pd(), this._processingContext = kd || this._engine._getShaderProcessingContext(this._shaderLanguage, !1);
        const Nd = {
          defines: this.defines.split("\n"),
          indexParameters: this._indexParameters,
          isFragment: !1,
          shouldUseHighPrecisionShader: this._engine._shouldUseHighPrecisionShader,
          processor: dd ?? this._engine._getShaderProcessor(this._shaderLanguage),
          supportsUniformBuffers: this._engine.supportsUniformBuffers,
          shadersRepository: Wd.c.GetShadersRepository(this._shaderLanguage),
          includesShadersStore: Wd.c.GetIncludesShadersStore(this._shaderLanguage),
          version: (100 * this._engine.version).toString(),
          platformName: this._engine.shaderPlatformName,
          processingContext: this._processingContext,
          isNDCHalfZRange: this._engine.isNDCHalfZRange,
          vpd: this._engine.vpd,
          processCodeAfterIncludes: this._processCodeAfterIncludes
        };
        (0, Pd.e)(Nd, this.name, this._processFinalCode, ((dd, kd) => {
          this._vertexSourceCode = dd, this._fragmentSourceCode = kd, this._prepareEffect(Jd)
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
        return !!this._engine.lq || (!!this._isReady || !!this._pipelineContext && this._pipelineContext.isReady)
      }
      eL() {
        return this._engine
      }
      getPipelineContext() {
        return this._pipelineContext
      }
      getAttributesNames() {
        return this._attributesNames
      }
      getAttributeLocation(dd) {
        return this._attributes[dd]
      }
      getAttributeLocationByName(dd) {
        return this._attributeLocationByName[dd]
      }
      getAttributesCount() {
        return this._attributes.length
      }
      getUniformIndex(dd) {
        return this._uniformsNames.indexOf(dd)
      }
      getUniform(dd) {
        return this._uniforms[dd]
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
        return await new Promise((dd => {
          this.executeWhenCompiled(dd)
        }))
      }
      executeWhenCompiled(dd) {
        this.isReady() ? dd(this) : (this.onCompileObservable.add((Jd => {
          dd(Jd)
        })), this._pipelineContext && !this._pipelineContext.isAsync || this._checkIsReady(null))
      }
      _checkIsReady(dd) {
        (0, Zd.f)((() => this._isReadyInternal() || this._isDisposed), (() => {}), (Jd => {
          this._processCompilationErrors(Jd, dd)
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
            vpd: this._engine.vpd,
            supportsUniformBuffers: this._engine.supportsUniformBuffers
          },
          extendedCreatePipelineOptions: {
            transformFeedbackVaryings: this._transformFeedbackVaryings,
            createAsRaw: !(!this._vertexSourceCodeOverride || !this._fragmentSourceCodeOverride)
          }
        }
      }
      _rebuildProgram(dd, Jd, kd, pd) {
        this._isReady = !1, this._vertexSourceCodeOverride = dd, this._fragmentSourceCodeOverride = Jd, this.onError = (dd, Jd) => {
          pd && pd(Jd)
        }, this.onCompiled = () => {
          const dd = this.eL().scenes;
          if (dd)
            for (let Jd = 0; Jd < dd.length; Jd++) dd[Jd].markAllMaterialsAsDirty(127);
          this._pipelineContext._handlesSpectorRebuildCallback?.(kd)
        }, this._fallbacks = null, this._prepareEffect()
      }
      _onRenderingStateCompiled(dd) {
        if (this._pipelineContext = dd, this._pipelineContext.setEngine(this._engine), this._attributes = [], this._pipelineContext._fillEffectInformation(this, this._uniformBuffersNames, this._uniformsNames, this._uniforms, this._samplerList, this._samplers, this._attributesNames, this._attributes), this._attributesNames)
          for (let Jd = 0; Jd < this._attributesNames.length; Jd++) {
            const dd = this._attributesNames[Jd];
            this._attributeLocationByName[dd] = this._attributes[Jd]
          }
        this._engine.bindSamplers(this), this._compilationError = "", this._isReady = !0, this.onCompiled && this.onCompiled(this), this.onCompileObservable.notifyObservers(this), this.onCompileObservable.clear(), this._fallbacks && this._fallbacks.unBindMesh(), gd.AutomaticallyClearCodeCache && this.clearCodeCache()
      }
      _prepareEffect() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const Jd = this._pipelineContext;
        this._isReady = !1;
        try {
          const kd = !(!this._vertexSourceCodeOverride || !this._fragmentSourceCodeOverride),
            pd = kd ? null : this.defines,
            Nd = kd ? this._vertexSourceCodeOverride : this._vertexSourceCode,
            Wd = kd ? this._fragmentSourceCodeOverride : this._fragmentSourceCode,
            Zd = this._engine;
          this._pipelineContext = (0, Pd.f)({
            existingPipelineContext: dd ? Jd : null,
            vertex: Nd,
            fragment: Wd,
            context: "WEBGL2" === Zd.shaderPlatformName || "WEBGL1" === Zd.shaderPlatformName ? Zd._gl : void 0,
            rebuildRebind: (dd, Jd, kd, pd) => this._rebuildProgram(dd, Jd, kd, pd),
            defines: pd,
            transformFeedbackVaryings: this._transformFeedbackVaryings,
            name: this._key.replace(/\r/g, "").replace(/\n/g, "|"),
            createAsRaw: kd,
            disableParallelCompilation: this._disableParallelShaderCompilation,
            shaderProcessingContext: this._processingContext,
            onRenderingStateCompiled: kd => {
              Jd && !dd && this._engine._deletePipelineContext(Jd), kd && this._onRenderingStateCompiled(kd)
            }
          }, this._engine.createPipelineContext.bind(this._engine), this._engine._preparePipelineContextAsync.bind(this._engine), this._engine._executeWhenRenderingStateIsCompiled.bind(this._engine)), this._pipelineContext.isAsync && this._checkIsReady(Jd)
        } catch (kd) {
          this._processCompilationErrors(kd, Jd)
        }
      }
      _getShaderCodeAndErrorLine(dd, Jd, kd) {
        const pd = kd ? /FRAGMENT SHADER ERROR: 0:(\d+?):/ : /VERTEX SHADER ERROR: 0:(\d+?):/;
        let Nd = null;
        if (Jd && dd) {
          const Wd = Jd.match(pd);
          if (Wd && 2 === Wd.length) {
            const Jd = parseInt(Wd[1]),
              pd = dd.split("\n", -1);
            pd.length >= Jd && (Nd = `Offending line [${Jd}] in ${kd?"fragment":"vertex"} code: ${pd[Jd-1]}`)
          }
        }
        return [dd, Nd]
      }
      _processCompilationErrors(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        this._compilationError = "string" === typeof dd?.stack ? dd.stack : dd?.message ?? String(dd);
        const kd = this._attributesNames,
          pd = this._fallbacks;
        if (Nd.c.Error("Unable to compile effect:"), Nd.c.Error(`Uniforms: ${this._uniformsNames.join(" ")}`), Nd.c.Error(`Attributes: ${kd.join(" ")}`), Nd.c.Error("Defines:\n" + this.defines), gd.LogShaderCodeOnCompilationError) {
          let dd, Jd = null,
            kd = null;
          this._pipelineContext?._getVertexShaderCode() && ([dd, Jd] = this._getShaderCodeAndErrorLine(this._pipelineContext._getVertexShaderCode(), this._compilationError, !1), dd && (Nd.c.Error("Vertex code:"), Nd.c.Error(dd))), this._pipelineContext?._getFragmentShaderCode() && ([dd, kd] = this._getShaderCodeAndErrorLine(this._pipelineContext?._getFragmentShaderCode(), this._compilationError, !0), dd && (Nd.c.Error("Fragment code:"), Nd.c.Error(dd))), Jd && Nd.c.Error(Jd), kd && Nd.c.Error(kd)
        }
        Nd.c.Error("Error: " + this._compilationError);
        const Wd = () => {
          this.onError && this.onError(this, this._compilationError), this.onErrorObservable.notifyObservers(this), this._engine.onEffectErrorObservable.notifyObservers({
            effect: this,
            errors: this._compilationError
          })
        };
        Jd && (this._pipelineContext = Jd, this._isReady = !0, Wd()), pd ? (this._pipelineContext = null, pd.hasMoreFallbacks ? (this._allFallbacksProcessed = !1, Nd.c.Error("Trying next fallback."), this.defines = pd.reduce(this.defines, this), this._prepareEffect()) : (this._allFallbacksProcessed = !0, Wd(), this.onErrorObservable.clear(), this._fallbacks && this._fallbacks.unBindMesh())) : (this._allFallbacksProcessed = !0, Jd || Wd())
      }
      get isSupported() {
        return "" === this._compilationError
      }
      _bindTexture(dd, Jd) {
        this._engine._bindTexture(this._samplers[dd], Jd, dd)
      }
      setTexture(dd, Jd) {
        this._engine.setTexture(this._samplers[dd], this._uniforms[dd], Jd, dd)
      }
      setTextureArray(dd, Jd) {
        const kd = dd + "Ex";
        if (-1 === this._samplerList.indexOf(kd + "0")) {
          const pd = this._samplerList.indexOf(dd);
          for (let dd = 1; dd < Jd.length; dd++) {
            const Jd = kd + (dd - 1).toString();
            this._samplerList.splice(pd + dd, 0, Jd)
          }
          let Nd = 0;
          for (const dd of this._samplerList) this._samplers[dd] = Nd, Nd += 1
        }
        this._engine.setTextureArray(this._samplers[dd], this._uniforms[dd], Jd, dd)
      }
      bindUniformBuffer(dd, Jd) {
        const kd = this._uniformBuffersNames[Jd];
        void 0 === kd || gd._BaseCache[kd] === dd && this._engine._features.useUBOBindingCache || (gd._BaseCache[kd] = dd, this._engine.bindUniformBufferBase(dd, kd, Jd))
      }
      bindUniformBlock(dd, Jd) {
        this._engine.bindUniformBlock(this._pipelineContext, dd, Jd)
      }
      setInt(dd, Jd) {
        return this._pipelineContext.setInt(dd, Jd), this
      }
      setInt2(dd, Jd, kd) {
        return this._pipelineContext.setInt2(dd, Jd, kd), this
      }
      setInt3(dd, Jd, kd, pd) {
        return this._pipelineContext.setInt3(dd, Jd, kd, pd), this
      }
      setInt4(dd, Jd, kd, pd, Nd) {
        return this._pipelineContext.setInt4(dd, Jd, kd, pd, Nd), this
      }
      setIntArray(dd, Jd) {
        return this._pipelineContext.setIntArray(dd, Jd), this
      }
      setIntArray2(dd, Jd) {
        return this._pipelineContext.setIntArray2(dd, Jd), this
      }
      setIntArray3(dd, Jd) {
        return this._pipelineContext.setIntArray3(dd, Jd), this
      }
      setIntArray4(dd, Jd) {
        return this._pipelineContext.setIntArray4(dd, Jd), this
      }
      setUInt(dd, Jd) {
        return this._pipelineContext.setUInt(dd, Jd), this
      }
      setUInt2(dd, Jd, kd) {
        return this._pipelineContext.setUInt2(dd, Jd, kd), this
      }
      setUInt3(dd, Jd, kd, pd) {
        return this._pipelineContext.setUInt3(dd, Jd, kd, pd), this
      }
      setUInt4(dd, Jd, kd, pd, Nd) {
        return this._pipelineContext.setUInt4(dd, Jd, kd, pd, Nd), this
      }
      setUIntArray(dd, Jd) {
        return this._pipelineContext.setUIntArray(dd, Jd), this
      }
      setUIntArray2(dd, Jd) {
        return this._pipelineContext.setUIntArray2(dd, Jd), this
      }
      setUIntArray3(dd, Jd) {
        return this._pipelineContext.setUIntArray3(dd, Jd), this
      }
      setUIntArray4(dd, Jd) {
        return this._pipelineContext.setUIntArray4(dd, Jd), this
      }
      setFloatArray(dd, Jd) {
        return this._pipelineContext.setArray(dd, Jd), this
      }
      setFloatArray2(dd, Jd) {
        return this._pipelineContext.setArray2(dd, Jd), this
      }
      setFloatArray3(dd, Jd) {
        return this._pipelineContext.setArray3(dd, Jd), this
      }
      setFloatArray4(dd, Jd) {
        return this._pipelineContext.setArray4(dd, Jd), this
      }
      setArray(dd, Jd) {
        return this._pipelineContext.setArray(dd, Jd), this
      }
      setArray2(dd, Jd) {
        return this._pipelineContext.setArray2(dd, Jd), this
      }
      setArray3(dd, Jd) {
        return this._pipelineContext.setArray3(dd, Jd), this
      }
      setArray4(dd, Jd) {
        return this._pipelineContext.setArray4(dd, Jd), this
      }
      setMatrices(dd, Jd) {
        return this._pipelineContext.setMatrices(dd, Jd), this
      }
      setMatrix(dd, Jd) {
        return this._pipelineContext.setMatrix(dd, Jd), this
      }
      setMatrix3x3(dd, Jd) {
        return this._pipelineContext.setMatrix3x3(dd, Jd), this
      }
      setMatrix2x2(dd, Jd) {
        return this._pipelineContext.setMatrix2x2(dd, Jd), this
      }
      setFloat(dd, Jd) {
        return this._pipelineContext.setFloat(dd, Jd), this
      }
      setBool(dd, Jd) {
        return this._pipelineContext.setInt(dd, Jd ? 1 : 0), this
      }
      setVector2(dd, Jd) {
        return this._pipelineContext.setVector2(dd, Jd), this
      }
      setFloat2(dd, Jd, kd) {
        return this._pipelineContext.setFloat2(dd, Jd, kd), this
      }
      setVector3(dd, Jd) {
        return this._pipelineContext.setVector3(dd, Jd), this
      }
      setFloat3(dd, Jd, kd, pd) {
        return this._pipelineContext.setFloat3(dd, Jd, kd, pd), this
      }
      setVector4(dd, Jd) {
        return this._pipelineContext.setVector4(dd, Jd), this
      }
      setQuaternion(dd, Jd) {
        return this._pipelineContext.setQuaternion(dd, Jd), this
      }
      setFloat4(dd, Jd, kd, pd, Nd) {
        return this._pipelineContext.setFloat4(dd, Jd, kd, pd, Nd), this
      }
      setColor3(dd, Jd) {
        return this._pipelineContext.setColor3(dd, Jd), this
      }
      setColor4(dd, Jd, kd) {
        return this._pipelineContext.setColor4(dd, Jd, kd), this
      }
      setDirectColor4(dd, Jd) {
        return this._pipelineContext.setDirectColor4(dd, Jd), this
      }
      clearCodeCache() {
        this._vertexSourceCode = "", this._fragmentSourceCode = "", this._fragmentSourceCodeBeforeMigration = "", this._vertexSourceCodeBeforeMigration = ""
      }
      dispose() {
        if (arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) this._refCount = 0;
        else {
          if (gd.PersistentMode) return;
          this._refCount--
        }
        this._refCount > 0 || this._isDisposed || (this._onReleaseEffectsObserver && (this._engine.onReleaseEffectsObservable.remove(this._onReleaseEffectsObserver), this._onReleaseEffectsObserver = null), this._pipelineContext && (0, Pd.l)(this._pipelineContext), this._engine._releaseEffect(this), this.clearCodeCache(), this._isDisposed = !0)
      }
      static RegisterShader(dd, Jd, kd) {
        let pd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        Jd && (Wd.c.GetShadersStore(pd)[`${dd}PixelShader`] = Jd), kd && (Wd.c.GetShadersStore(pd)[`${dd}VertexShader`] = kd)
      }
      static ResetCache() {
        gd._BaseCache = {}
      }
    }
    gd.LogShaderCodeOnCompilationError = !0, gd.PersistentMode = !1, gd.AutomaticallyClearCodeCache = !1, gd._UniqueIdSeed = 0, gd._BaseCache = {}, gd.ShadersStore = Wd.c.ShadersStore, gd.IncludesShadersStore = Wd.c.IncludesShadersStore
  },
  40129: (dd, Jd, kd) => {
    kd.d(Jd, {
      e: () => Kd,
      f: () => Bd,
      j: () => qd
    });
    var pd = kd(39822),
      Nd = kd(37251),
      Wd = kd(37296),
      Pd = kd(40101);
    const Zd = new Nd.b,
      gd = new Nd.b,
      Cd = new Nd.b,
      Kd = {
        Wm: () => {},
        eyeAtCamera: !0
      };

    function od(dd, Jd, kd) {
      const pd = kd.spd(),
        Nd = Jd.spd();
      for (let Wd = 0; Wd < 16; Wd++) pd[Wd] = Nd[Wd];
      return pd[12] -= dd.x, pd[13] -= dd.y, pd[14] -= dd.z, kd.markAsUpdated(), kd
    }

    function ld(dd, Jd, kd) {
      return (0, Wd.k)(Jd, gd), od(dd, gd, Cd), (0, Wd.k)(Cd, kd), kd
    }

    function Qd(dd, Jd, kd) {
      if (!Kd.eyeAtCamera) return ld(dd, Jd, kd);
      const pd = kd.spd(),
        Nd = Jd.spd();
      for (let Wd = 0; Wd < 16; Wd++) pd[Wd] = Nd[Wd];
      return pd[12] = 0, pd[13] = 0, pd[14] = 0, kd.markAsUpdated(), kd
    }

    function Ld(dd, Jd, kd, pd) {
      return (0, Wd.r)(Qd(dd, Jd, pd), kd, pd), pd
    }

    function Od(dd, Jd, kd, pd) {
      return (0, Wd.k)(kd, gd), (0, Wd.r)(Jd, gd, Cd), od(dd, Cd, gd), Qd(dd, kd, Cd), (0, Wd.r)(gd, Cd, pd), pd
    }

    function ed(dd, Jd, kd, pd, Nd, Pd) {
      return (0, Wd.k)(kd, gd), (0, Wd.r)(Jd, gd, Cd), od(dd, Cd, gd), Ld(dd, pd, Nd, Cd), (0, Wd.r)(gd, Cd, Pd), Pd
    }

    function Rd(dd, Jd) {
      const kd = Kd.Wm();
      if (!kd || Zd === Jd) return Jd;
      Zd.updateFlag = Jd.updateFlag;
      const pd = kd.floatingOriginOffset;
      switch (dd) {
        case "world":
          return od(pd, Jd, Zd);
        case "view":
          return Qd(pd, Jd, Zd);
        case "worldView":
          return Od(pd, Jd, kd.getViewMatrix(), Zd);
        case "viewProjection":
          return Ld(pd, kd.getViewMatrix(), kd.getProjectionMatrix(), Zd);
        case "worldViewProjection":
          return ed(pd, Jd, kd.getTransformMatrix(), kd.getViewMatrix(), kd.getProjectionMatrix(), Zd);
        default:
          if (dd.startsWith("u_")) {
            const Nd = dd.toLowerCase();
            if (Nd.startsWith("u_worldviewprojection")) return ed(pd, Jd, kd.getTransformMatrix(), kd.getViewMatrix(), kd.getProjectionMatrix(), Zd);
            if (Nd.startsWith("u_viewprojection")) return Ld(pd, kd.getViewMatrix(), kd.getProjectionMatrix(), Zd);
            if (Nd.startsWith("u_worldview")) return Od(pd, Jd, kd.getViewMatrix(), Zd);
            if (Nd.startsWith("u_world")) return od(pd, Jd, Zd);
            if (Nd.startsWith("u_view")) return Qd(pd, Jd, Zd)
          }
          return Jd
      }
    }
    const Id = Pd.e,
      Gd = pd.b,
      vd = Id.prototype._updateMatrixForUniform,
      xd = pd.b.prototype.setMatrix;

    function qd() {
      pd.b.prototype.setMatrix = xd, Gd._setMatrixOverride = void 0, Id.prototype._updateMatrixForUniform = vd, Id.prototype._updateMatrixForUniformOverride = void 0
    }

    function Bd() {
      Gd.prototype._setMatrixOverride = xd, Gd.prototype.setMatrix = function(dd, Jd) {
        return this._setMatrixOverride(dd, Rd(dd, Jd)), this
      }, Id.prototype._updateMatrixForUniformOverride = vd, Id.prototype._updateMatrixForUniform = function(dd, Jd) {
        this._updateMatrixForUniformOverride(dd, Rd(dd, Jd))
      }
    }
  },
  40095: (dd, Jd, kd) => {
    kd.d(Jd, {
      c: () => Wd,
      e: () => Nd
    });
    var pd = kd(40086);

    function Nd(dd, Jd) {
      Jd.WHITEBALANCE && dd.push("whiteBalanceMatrix"), Jd.EXPOSURE && dd.push("exposureLinear"), Jd.CONTRAST && dd.push("contrast"), Jd.COLORGRADING && dd.push("colorTransformSettings"), (Jd.VIGNETTE || Jd.DITHER) && dd.push("vInverseScreenSize"), Jd.VIGNETTE && (dd.push("vignetteSettings1"), dd.push("vignetteSettings2")), Jd.COLORCURVES && (0, pd.b)(dd), Jd.DITHER && dd.push("ditherIntensity")
    }

    function Wd(dd, Jd) {
      Jd.COLORGRADING && dd.push("txColorTransform")
    }
  },
  40083: (dd, Jd, kd) => {
    kd.d(Jd, {
      e: () => Yd,
      h: () => Sd
    });
    var pd = kd(39964),
      Nd = kd(39966),
      Wd = kd(37280),
      Pd = kd(37443),
      Zd = kd(37289),
      gd = kd(37251);
    const Cd = [
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
      Kd = 1e6 / Cd[Cd.length - 1][0],
      od = 150;

    function ld(dd, Jd) {
      const kd = Number.isNaN(dd) ? Kd : Math.max(dd, Kd),
        pd = (0, Zd.Clamp)(1e6 / kd, Cd[0][0], Cd[Cd.length - 1][0]);
      let Nd = 0,
        Wd = Cd.length - 1;
      for (; Wd - Nd > 1;) {
        const dd = Nd + Wd >> 1;
        Cd[dd][0] <= pd ? Nd = dd : Wd = dd
      }
      const Pd = Nd,
        [ld, Qd, Ld, Od] = Cd[Pd],
        [ed, Rd, Id, Gd] = Cd[Pd + 1],
        vd = (pd - ld) / (ed - ld),
        xd = gd.k.Lerp(new gd.k(Qd, Ld), new gd.k(Rd, Id), vd),
        qd = gd.k.Normalize(new gd.k(1, Od)),
        Bd = gd.k.Normalize(new gd.k(1, Gd)),
        sd = gd.k.Normalize(gd.k.Lerp(qd, Bd, vd)),
        ad = (0, Zd.Clamp)(Jd, -150, od);
      xd.hpd(sd.scale(ad / 3e3));
      const Md = 2 * xd.x - 8 * xd.y + 4,
        Fd = 3 * xd.x / Md,
        Yd = 2 * xd.y / Md;
      return new gd.n(Fd / Yd, 1, (1 - Fd - Yd) / Yd)
    }
    const Qd = gd.b.FromArray([.8951, -.7502, .0389, 0, .2664, 1.7135, -.0685, 0, -.1614, .0367, 1.0296, 0, 0, 0, 0, 1]),
      Ld = gd.b.Invert(Qd);

    function Od(dd, Jd) {
      const kd = Jd > 0 ? dd / Jd : 10;
      return (0, Zd.Clamp)(kd, .1, 10)
    }

    function ed(dd, Jd) {
      const kd = gd.n.TransformNormal(dd, Qd),
        pd = gd.n.TransformNormal(Jd, Qd),
        Nd = gd.b.FromArray([Od(pd.x, kd.x), 0, 0, 0, 0, Od(pd.y, kd.y), 0, 0, 0, 0, Od(pd.z, kd.z), 0, 0, 0, 0, 1]);
      return Qd.multiply(Nd).multiply(Ld)
    }
    const Rd = new gd.n(.95047, 1, 1.08883),
      Id = gd.b.FromArray([.4124564, .2126729, .0193339, 0, .3575761, .7151522, .119192, 0, .1804375, .072175, .9503041, 0, 0, 0, 0, 1]).multiply(ed(Rd, ld(6500, 0))),
      Gd = gd.b.Invert(Id),
      vd = gd.n.TransformNormal(new gd.n(1, 1, 1), Id);
    var xd = kd(39983),
      qd = kd(40086);
    let Bd = (() => {
      var dd;
      let Jd, kd, Wd, Zd, gd, Cd, Kd, od, ld, Qd, Ld, Od, ed = [],
        Rd = [],
        Id = [],
        Gd = [],
        vd = [],
        Bd = [],
        sd = [],
        ad = [],
        Md = [],
        Fd = [],
        Yd = [],
        md = [],
        bd = [],
        Sd = [],
        jd = [],
        Xd = [],
        fd = [],
        nd = [],
        Ud = [],
        yd = [],
        Dd = [],
        Td = [],
        Ed = [],
        cd = [];
      return dd = class {
        constructor() {
          this._dirty = !0, this._tempColor = new Pd.g(0, 0, 0, 0), this._globalCurve = new Pd.g(0, 0, 0, 0), this._highlightsCurve = new Pd.g(0, 0, 0, 0), this._midtonesCurve = new Pd.g(0, 0, 0, 0), this._shadowsCurve = new Pd.g(0, 0, 0, 0), this._positiveCurve = new Pd.g(0, 0, 0, 0), this._negativeCurve = new Pd.g(0, 0, 0, 0), this._globalHue = (0, pd.i)(this, ed, 30), this._globalDensity = ((0, pd.i)(this, Rd), (0, pd.i)(this, Id, 0)), this._globalSaturation = ((0, pd.i)(this, Gd), (0, pd.i)(this, vd, 0)), this._globalExposure = ((0, pd.i)(this, Bd), (0, pd.i)(this, sd, 0)), this._highlightsHue = ((0, pd.i)(this, ad), (0, pd.i)(this, Md, 30)), this._highlightsDensity = ((0, pd.i)(this, Fd), (0, pd.i)(this, Yd, 0)), this._highlightsSaturation = ((0, pd.i)(this, md), (0, pd.i)(this, bd, 0)), this._highlightsExposure = ((0, pd.i)(this, Sd), (0, pd.i)(this, jd, 0)), this._midtonesHue = ((0, pd.i)(this, Xd), (0, pd.i)(this, fd, 30)), this._midtonesDensity = ((0, pd.i)(this, nd), (0, pd.i)(this, Ud, 0)), this._midtonesSaturation = ((0, pd.i)(this, yd), (0, pd.i)(this, Dd, 0)), this._midtonesExposure = ((0, pd.i)(this, Td), (0, pd.i)(this, Ed, 0)), this._shadowsHue = ((0, pd.i)(this, cd), 30), this._shadowsDensity = 0, this._shadowsSaturation = 0, this._shadowsExposure = 0
        }
        get globalHue() {
          return this._globalHue
        }
        set globalHue(dd) {
          this._globalHue = dd, this._dirty = !0
        }
        get globalDensity() {
          return this._globalDensity
        }
        set globalDensity(dd) {
          this._globalDensity = dd, this._dirty = !0
        }
        get globalSaturation() {
          return this._globalSaturation
        }
        set globalSaturation(dd) {
          this._globalSaturation = dd, this._dirty = !0
        }
        get globalExposure() {
          return this._globalExposure
        }
        set globalExposure(dd) {
          this._globalExposure = dd, this._dirty = !0
        }
        get highlightsHue() {
          return this._highlightsHue
        }
        set highlightsHue(dd) {
          this._highlightsHue = dd, this._dirty = !0
        }
        get highlightsDensity() {
          return this._highlightsDensity
        }
        set highlightsDensity(dd) {
          this._highlightsDensity = dd, this._dirty = !0
        }
        get highlightsSaturation() {
          return this._highlightsSaturation
        }
        set highlightsSaturation(dd) {
          this._highlightsSaturation = dd, this._dirty = !0
        }
        get highlightsExposure() {
          return this._highlightsExposure
        }
        set highlightsExposure(dd) {
          this._highlightsExposure = dd, this._dirty = !0
        }
        get midtonesHue() {
          return this._midtonesHue
        }
        set midtonesHue(dd) {
          this._midtonesHue = dd, this._dirty = !0
        }
        get midtonesDensity() {
          return this._midtonesDensity
        }
        set midtonesDensity(dd) {
          this._midtonesDensity = dd, this._dirty = !0
        }
        get midtonesSaturation() {
          return this._midtonesSaturation
        }
        set midtonesSaturation(dd) {
          this._midtonesSaturation = dd, this._dirty = !0
        }
        get midtonesExposure() {
          return this._midtonesExposure
        }
        set midtonesExposure(dd) {
          this._midtonesExposure = dd, this._dirty = !0
        }
        get shadowsHue() {
          return this._shadowsHue
        }
        set shadowsHue(dd) {
          this._shadowsHue = dd, this._dirty = !0
        }
        get shadowsDensity() {
          return this._shadowsDensity
        }
        set shadowsDensity(dd) {
          this._shadowsDensity = dd, this._dirty = !0
        }
        get shadowsSaturation() {
          return this._shadowsSaturation
        }
        set shadowsSaturation(dd) {
          this._shadowsSaturation = dd, this._dirty = !0
        }
        get shadowsExposure() {
          return this._shadowsExposure
        }
        set shadowsExposure(dd) {
          this._shadowsExposure = dd, this._dirty = !0
        }
        getClassName() {
          return "ColorCurves"
        }
        _getColorGradingDataToRef(Jd, kd, pd, Nd, Wd) {
          null != Jd && (Jd = dd._Clamp(Jd, 0, 360), kd = dd._Clamp(kd, -100, 100), pd = dd._Clamp(pd, -100, 100), Nd = dd._Clamp(Nd, -100, 100), kd = dd._ApplyColorGradingSliderNonlinear(kd), kd *= .5, Nd = dd._ApplyColorGradingSliderNonlinear(Nd), kd < 0 && (kd *= -1, Jd = (Jd + 180) % 360), dd._FromHSBToRef(Jd, kd, 50 + .25 * Nd, Wd), Wd.scaleToRef(2, Wd), Wd.a = 1 + .01 * pd)
        }
        static _ApplyColorGradingSliderNonlinear(dd) {
          dd /= 100;
          let Jd = Math.abs(dd);
          return Jd = Math.pow(Jd, 2), dd < 0 && (Jd *= -1), Jd *= 100, Jd
        }
        static _FromHSBToRef(Jd, kd, pd, Nd) {
          let Wd = dd._Clamp(Jd, 0, 360);
          const Pd = dd._Clamp(kd / 100, 0, 1),
            Zd = dd._Clamp(pd / 100, 0, 1);
          if (0 === Pd) Nd.r = Zd, Nd.g = Zd, Nd.b = Zd;
          else {
            Wd /= 60;
            const dd = Math.floor(Wd),
              Jd = Wd - dd,
              kd = Zd * (1 - Pd),
              pd = Zd * (1 - Pd * Jd),
              gd = Zd * (1 - Pd * (1 - Jd));
            switch (dd) {
              case 0:
                Nd.r = Zd, Nd.g = gd, Nd.b = kd;
                break;
              case 1:
                Nd.r = pd, Nd.g = Zd, Nd.b = kd;
                break;
              case 2:
                Nd.r = kd, Nd.g = Zd, Nd.b = gd;
                break;
              case 3:
                Nd.r = kd, Nd.g = pd, Nd.b = Zd;
                break;
              case 4:
                Nd.r = gd, Nd.g = kd, Nd.b = Zd;
                break;
              default:
                Nd.r = Zd, Nd.g = kd, Nd.b = pd
            }
          }
          Nd.a = 1
        }
        static _Clamp(dd, Jd, kd) {
          return Math.min(Math.max(dd, Jd), kd)
        }
        clone() {
          return xd.c.Clone((() => new dd), this)
        }
        serialize() {
          return xd.c.Serialize(this)
        }
        _bind(dd) {
          let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "vCameraColorCurvePositive",
            kd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "vCameraColorCurveNeutral",
            pd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "vCameraColorCurveNegative";
          this._dirty && (this._dirty = !1, this._getColorGradingDataToRef(this._globalHue, this._globalDensity, this._globalSaturation, this._globalExposure, this._globalCurve), this._getColorGradingDataToRef(this._highlightsHue, this._highlightsDensity, this._highlightsSaturation, this._highlightsExposure, this._tempColor), this._tempColor.multiplyToRef(this._globalCurve, this._highlightsCurve), this._getColorGradingDataToRef(this._midtonesHue, this._midtonesDensity, this._midtonesSaturation, this._midtonesExposure, this._tempColor), this._tempColor.multiplyToRef(this._globalCurve, this._midtonesCurve), this._getColorGradingDataToRef(this._shadowsHue, this._shadowsDensity, this._shadowsSaturation, this._shadowsExposure, this._tempColor), this._tempColor.multiplyToRef(this._globalCurve, this._shadowsCurve), this._highlightsCurve.subtractToRef(this._midtonesCurve, this._positiveCurve), this._midtonesCurve.subtractToRef(this._shadowsCurve, this._negativeCurve)), dd && (dd.setFloat4(Jd, this._positiveCurve.r, this._positiveCurve.g, this._positiveCurve.b, this._positiveCurve.a), dd.setFloat4(kd, this._midtonesCurve.r, this._midtonesCurve.g, this._midtonesCurve.b, this._midtonesCurve.a), dd.setFloat4(pd, this._negativeCurve.r, this._negativeCurve.g, this._negativeCurve.b, this._negativeCurve.a))
        }
      }, (() => {
        const Pd = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        Jd = [(0, Nd.H)()], kd = [(0, Nd.H)()], Wd = [(0, Nd.H)()], Zd = [(0, Nd.H)()], gd = [(0, Nd.H)()], Cd = [(0, Nd.H)()], Kd = [(0, Nd.H)()], od = [(0, Nd.H)()], ld = [(0, Nd.H)()], Qd = [(0, Nd.H)()], Ld = [(0, Nd.H)()], Od = [(0, Nd.H)()], (0, pd.h)(null, null, Jd, {
          kind: "field",
          name: "_globalHue",
          static: !1,
          private: !1,
          access: {
            has: dd => "_globalHue" in dd,
            get: dd => dd._globalHue,
            set: (dd, Jd) => {
              dd._globalHue = Jd
            }
          },
          metadata: Pd
        }, ed, Rd), (0, pd.h)(null, null, kd, {
          kind: "field",
          name: "_globalDensity",
          static: !1,
          private: !1,
          access: {
            has: dd => "_globalDensity" in dd,
            get: dd => dd._globalDensity,
            set: (dd, Jd) => {
              dd._globalDensity = Jd
            }
          },
          metadata: Pd
        }, Id, Gd), (0, pd.h)(null, null, Wd, {
          kind: "field",
          name: "_globalSaturation",
          static: !1,
          private: !1,
          access: {
            has: dd => "_globalSaturation" in dd,
            get: dd => dd._globalSaturation,
            set: (dd, Jd) => {
              dd._globalSaturation = Jd
            }
          },
          metadata: Pd
        }, vd, Bd), (0, pd.h)(null, null, Zd, {
          kind: "field",
          name: "_globalExposure",
          static: !1,
          private: !1,
          access: {
            has: dd => "_globalExposure" in dd,
            get: dd => dd._globalExposure,
            set: (dd, Jd) => {
              dd._globalExposure = Jd
            }
          },
          metadata: Pd
        }, sd, ad), (0, pd.h)(null, null, gd, {
          kind: "field",
          name: "_highlightsHue",
          static: !1,
          private: !1,
          access: {
            has: dd => "_highlightsHue" in dd,
            get: dd => dd._highlightsHue,
            set: (dd, Jd) => {
              dd._highlightsHue = Jd
            }
          },
          metadata: Pd
        }, Md, Fd), (0, pd.h)(null, null, Cd, {
          kind: "field",
          name: "_highlightsDensity",
          static: !1,
          private: !1,
          access: {
            has: dd => "_highlightsDensity" in dd,
            get: dd => dd._highlightsDensity,
            set: (dd, Jd) => {
              dd._highlightsDensity = Jd
            }
          },
          metadata: Pd
        }, Yd, md), (0, pd.h)(null, null, Kd, {
          kind: "field",
          name: "_highlightsSaturation",
          static: !1,
          private: !1,
          access: {
            has: dd => "_highlightsSaturation" in dd,
            get: dd => dd._highlightsSaturation,
            set: (dd, Jd) => {
              dd._highlightsSaturation = Jd
            }
          },
          metadata: Pd
        }, bd, Sd), (0, pd.h)(null, null, od, {
          kind: "field",
          name: "_highlightsExposure",
          static: !1,
          private: !1,
          access: {
            has: dd => "_highlightsExposure" in dd,
            get: dd => dd._highlightsExposure,
            set: (dd, Jd) => {
              dd._highlightsExposure = Jd
            }
          },
          metadata: Pd
        }, jd, Xd), (0, pd.h)(null, null, ld, {
          kind: "field",
          name: "_midtonesHue",
          static: !1,
          private: !1,
          access: {
            has: dd => "_midtonesHue" in dd,
            get: dd => dd._midtonesHue,
            set: (dd, Jd) => {
              dd._midtonesHue = Jd
            }
          },
          metadata: Pd
        }, fd, nd), (0, pd.h)(null, null, Qd, {
          kind: "field",
          name: "_midtonesDensity",
          static: !1,
          private: !1,
          access: {
            has: dd => "_midtonesDensity" in dd,
            get: dd => dd._midtonesDensity,
            set: (dd, Jd) => {
              dd._midtonesDensity = Jd
            }
          },
          metadata: Pd
        }, Ud, yd), (0, pd.h)(null, null, Ld, {
          kind: "field",
          name: "_midtonesSaturation",
          static: !1,
          private: !1,
          access: {
            has: dd => "_midtonesSaturation" in dd,
            get: dd => dd._midtonesSaturation,
            set: (dd, Jd) => {
              dd._midtonesSaturation = Jd
            }
          },
          metadata: Pd
        }, Dd, Td), (0, pd.h)(null, null, Od, {
          kind: "field",
          name: "_midtonesExposure",
          static: !1,
          private: !1,
          access: {
            has: dd => "_midtonesExposure" in dd,
            get: dd => dd._midtonesExposure,
            set: (dd, Jd) => {
              dd._midtonesExposure = Jd
            }
          },
          metadata: Pd
        }, Ed, cd), Pd && Object.defineProperty(dd, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Pd
        })
      })(), dd.PrepareUniforms = qd.b, dd
    })();

    function sd(dd, Jd) {
      let kd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "vCameraColorCurvePositive",
        pd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "vCameraColorCurveNeutral",
        Nd = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "vCameraColorCurveNegative";
      dd._bind(Jd, kd, pd, Nd)
    }
    var ad = kd(39902),
      Md = kd(40095),
      Fd = kd(37303);
    let Yd = (() => {
        var dd;
        let Jd, kd, Cd, Qd, Ld, Od, Rd, qd, Fd, Yd, md, bd, Sd, jd, Xd, fd, nd, Ud, yd, Dd, Td, Ed, cd, hd, rd, ud, td, Vd, zd = [],
          Hd = [],
          wd = [],
          Ad = [],
          dJ = [],
          JJ = [],
          kJ = [],
          pJ = [],
          NJ = [],
          WJ = [],
          PJ = [],
          ZJ = [],
          gJ = [],
          CJ = [],
          KJ = [],
          oJ = [],
          lJ = [],
          QJ = [],
          LJ = [],
          OJ = [],
          eJ = [],
          RJ = [],
          IJ = [],
          GJ = [],
          vJ = [],
          xJ = [],
          qJ = [],
          BJ = [],
          sJ = [],
          iJ = [],
          aJ = [],
          MJ = [],
          FJ = [],
          YJ = [],
          mJ = [],
          bJ = [],
          SJ = [],
          jJ = [],
          XJ = [],
          fJ = [],
          nJ = [],
          UJ = [],
          yJ = [],
          DJ = [],
          TJ = [],
          EJ = [],
          cJ = [],
          hJ = [],
          rJ = [],
          uJ = [],
          tJ = [],
          VJ = [],
          zJ = [],
          HJ = [],
          wJ = [],
          AJ = [];
        return dd = class {
          constructor() {
            this.colorCurves = (0, pd.i)(this, zd, new Bd), this._colorCurvesEnabled = ((0, pd.i)(this, Hd), (0, pd.i)(this, wd, !1)), this._colorGradingTexture = ((0, pd.i)(this, Ad), (0, pd.i)(this, dJ, void 0)), this._colorGradingEnabled = ((0, pd.i)(this, JJ), (0, pd.i)(this, kJ, !1)), this._colorGradingWithGreenDepth = ((0, pd.i)(this, pJ), (0, pd.i)(this, NJ, !0)), this._colorGradingBGR = ((0, pd.i)(this, WJ), (0, pd.i)(this, PJ, !0)), this._exposure = ((0, pd.i)(this, ZJ), (0, pd.i)(this, gJ, 1)), this._toneMappingEnabled = ((0, pd.i)(this, CJ), (0, pd.i)(this, KJ, !1)), this._toneMappingType = ((0, pd.i)(this, oJ), (0, pd.i)(this, lJ, dd.TONEMAPPING_STANDARD)), this._contrast = ((0, pd.i)(this, QJ), (0, pd.i)(this, LJ, 1)), this._whiteBalanceEnabled = ((0, pd.i)(this, OJ), (0, pd.i)(this, eJ, !1)), this._temperature = ((0, pd.i)(this, RJ), (0, pd.i)(this, IJ, 6500)), this._tint = ((0, pd.i)(this, GJ), (0, pd.i)(this, vJ, 0)), this._whiteBalanceMatrix = ((0, pd.i)(this, xJ), null), this._whiteBalanceMatrixTemperature = null, this._whiteBalanceMatrixTint = null, this.vignetteStretch = (0, pd.i)(this, qJ, 0), this.vignetteCenterX = ((0, pd.i)(this, BJ), (0, pd.i)(this, sJ, 0)), this.vignetteCenterY = ((0, pd.i)(this, iJ), (0, pd.i)(this, aJ, 0)), this.vignetteWeight = ((0, pd.i)(this, MJ), (0, pd.i)(this, FJ, 1.5)), this.vignetteColor = ((0, pd.i)(this, YJ), (0, pd.i)(this, mJ, new Pd.g(0, 0, 0, 0))), this.vignetteCameraFov = ((0, pd.i)(this, bJ), (0, pd.i)(this, SJ, .5)), this._vignetteBlendMode = ((0, pd.i)(this, jJ), (0, pd.i)(this, XJ, dd.VIGNETTEMODE_MULTIPLY)), this._vignetteEnabled = ((0, pd.i)(this, fJ), (0, pd.i)(this, nJ, !1)), this._ditheringEnabled = ((0, pd.i)(this, UJ), (0, pd.i)(this, yJ, !1)), this._ditheringIntensity = ((0, pd.i)(this, DJ), (0, pd.i)(this, TJ, 1 / 255)), this._skipFinalColorClamp = ((0, pd.i)(this, EJ), (0, pd.i)(this, cJ, !1)), this._applyByPostProcess = ((0, pd.i)(this, hJ), (0, pd.i)(this, rJ, !1)), this._isEnabled = ((0, pd.i)(this, uJ), (0, pd.i)(this, tJ, !0)), this.outputTextureWidth = ((0, pd.i)(this, VJ), (0, pd.i)(this, zJ, 0)), this.outputTextureHeight = ((0, pd.i)(this, HJ), (0, pd.i)(this, wJ, 0)), this.onUpdateParameters = ((0, pd.i)(this, AJ), new Wd.e)
          }
          get colorCurvesEnabled() {
            return this._colorCurvesEnabled
          }
          set colorCurvesEnabled(dd) {
            this._colorCurvesEnabled !== dd && (this._colorCurvesEnabled = dd, this._updateParameters())
          }
          get colorGradingTexture() {
            return this._colorGradingTexture
          }
          set colorGradingTexture(dd) {
            this._colorGradingTexture !== dd && (this._colorGradingTexture = dd, this._updateParameters())
          }
          get colorGradingEnabled() {
            return this._colorGradingEnabled
          }
          set colorGradingEnabled(dd) {
            this._colorGradingEnabled !== dd && (this._colorGradingEnabled = dd, this._updateParameters())
          }
          get colorGradingWithGreenDepth() {
            return this._colorGradingWithGreenDepth
          }
          set colorGradingWithGreenDepth(dd) {
            this._colorGradingWithGreenDepth !== dd && (this._colorGradingWithGreenDepth = dd, this._updateParameters())
          }
          get colorGradingBGR() {
            return this._colorGradingBGR
          }
          set colorGradingBGR(dd) {
            this._colorGradingBGR !== dd && (this._colorGradingBGR = dd, this._updateParameters())
          }
          get exposure() {
            return this._exposure
          }
          set exposure(dd) {
            this._exposure !== dd && (this._exposure = dd, this._updateParameters())
          }
          get toneMappingEnabled() {
            return this._toneMappingEnabled
          }
          set toneMappingEnabled(dd) {
            this._toneMappingEnabled !== dd && (this._toneMappingEnabled = dd, this._updateParameters())
          }
          get toneMappingType() {
            return this._toneMappingType
          }
          set toneMappingType(dd) {
            this._toneMappingType !== dd && (this._toneMappingType = dd, this._updateParameters())
          }
          get contrast() {
            return this._contrast
          }
          set contrast(dd) {
            this._contrast !== dd && (this._contrast = dd, this._updateParameters())
          }
          get whiteBalanceEnabled() {
            return this._whiteBalanceEnabled
          }
          set whiteBalanceEnabled(dd) {
            this._whiteBalanceEnabled !== dd && (this._whiteBalanceEnabled = dd, this._updateParameters())
          }
          get temperature() {
            return this._temperature
          }
          set temperature(dd) {
            dd = Number.isNaN(dd) ? Kd : Math.max(dd, Kd), this._temperature !== dd && (this._temperature = dd, this._updateParameters())
          }
          get tint() {
            return this._tint
          }
          set tint(dd) {
            dd = (0, Zd.Clamp)(dd, -150, od), this._tint !== dd && (this._tint = dd, this._updateParameters())
          }
          _getWhiteBalanceMatrix() {
            return null !== this._whiteBalanceMatrix && this._whiteBalanceMatrixTemperature === this._temperature && this._whiteBalanceMatrixTint === this._tint || (this._whiteBalanceMatrixTemperature = this._temperature, this._whiteBalanceMatrixTint = this._tint, this._whiteBalanceMatrix = function(dd, Jd) {
              const kd = ed(ld(dd, Jd), vd),
                pd = Id.multiply(kd).multiply(Gd);
              return gd.b.GetAsMatrix3x3(pd)
            }(this._temperature, this._tint)), this._whiteBalanceMatrix
          }
          get vignetteCentreY() {
            return this.vignetteCenterY
          }
          set vignetteCentreY(dd) {
            this.vignetteCenterY = dd
          }
          get vignetteCentreX() {
            return this.vignetteCenterX
          }
          set vignetteCentreX(dd) {
            this.vignetteCenterX = dd
          }
          get vignetteBlendMode() {
            return this._vignetteBlendMode
          }
          set vignetteBlendMode(dd) {
            this._vignetteBlendMode !== dd && (this._vignetteBlendMode = dd, this._updateParameters())
          }
          get vignetteEnabled() {
            return this._vignetteEnabled
          }
          set vignetteEnabled(dd) {
            this._vignetteEnabled !== dd && (this._vignetteEnabled = dd, this._updateParameters())
          }
          get ditheringEnabled() {
            return this._ditheringEnabled
          }
          set ditheringEnabled(dd) {
            this._ditheringEnabled !== dd && (this._ditheringEnabled = dd, this._updateParameters())
          }
          get ditheringIntensity() {
            return this._ditheringIntensity
          }
          set ditheringIntensity(dd) {
            this._ditheringIntensity !== dd && (this._ditheringIntensity = dd, this._updateParameters())
          }
          get skipFinalColorClamp() {
            return this._skipFinalColorClamp
          }
          set skipFinalColorClamp(dd) {
            this._skipFinalColorClamp !== dd && (this._skipFinalColorClamp = dd, this._updateParameters())
          }
          get applyByPostProcess() {
            return this._applyByPostProcess
          }
          set applyByPostProcess(dd) {
            this._applyByPostProcess !== dd && (this._applyByPostProcess = dd, this._updateParameters())
          }
          get isEnabled() {
            return this._isEnabled
          }
          set isEnabled(dd) {
            this._isEnabled !== dd && (this._isEnabled = dd, this._updateParameters())
          }
          _updateParameters() {
            this.onUpdateParameters.notifyObservers(this)
          }
          getClassName() {
            return "ImageProcessingConfiguration"
          }
          prepareDefines(Jd) {
            if ((arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) !== this.applyByPostProcess || !this._isEnabled) return Jd.WHITEBALANCE = !1, Jd.VIGNETTE = !1, Jd.TONEMAPPING = 0, Jd.CONTRAST = !1, Jd.EXPOSURE = !1, Jd.COLORCURVES = !1, Jd.COLORGRADING = !1, Jd.COLORGRADING3D = !1, Jd.DITHER = !1, Jd.IMAGEPROCESSING = !1, Jd.SKIPFINALCOLORCLAMP = this.skipFinalColorClamp, void(Jd.IMAGEPROCESSINGPOSTPROCESS = this.applyByPostProcess && this._isEnabled);
            if (Jd.WHITEBALANCE = this._whiteBalanceEnabled, Jd.VIGNETTE = this.vignetteEnabled, Jd.VIGNETTEBLENDMODEMULTIPLY = this.vignetteBlendMode === dd._VIGNETTEMODE_MULTIPLY, Jd.VIGNETTEBLENDMODEOPAQUE = !Jd.VIGNETTEBLENDMODEMULTIPLY, this._toneMappingEnabled) switch (this._toneMappingType) {
              case dd.TONEMAPPING_KHR_PBR_NEUTRAL:
                Jd.TONEMAPPING = 3;
                break;
              case dd.TONEMAPPING_ACES:
                Jd.TONEMAPPING = 2;
                break;
              default:
                Jd.TONEMAPPING = 1
            } else Jd.TONEMAPPING = 0;
            Jd.CONTRAST = 1 !== this.contrast, Jd.EXPOSURE = 1 !== this.exposure, Jd.COLORCURVES = this.colorCurvesEnabled && !!this.colorCurves, Jd.COLORGRADING = this.colorGradingEnabled && !!this.colorGradingTexture, Jd.COLORGRADING ? Jd.COLORGRADING3D = this.colorGradingTexture.is3D : Jd.COLORGRADING3D = !1, Jd.SAMPLER3DGREENDEPTH = this.colorGradingWithGreenDepth, Jd.SAMPLER3DBGRMAP = this.colorGradingBGR, Jd.DITHER = this._ditheringEnabled, Jd.IMAGEPROCESSINGPOSTPROCESS = this.applyByPostProcess, Jd.SKIPFINALCOLORCLAMP = this.skipFinalColorClamp, Jd.IMAGEPROCESSING = Jd.WHITEBALANCE || Jd.VIGNETTE || !!Jd.TONEMAPPING || Jd.CONTRAST || Jd.EXPOSURE || Jd.COLORCURVES || Jd.COLORGRADING || Jd.DITHER
          }
          isReady() {
            return !this.colorGradingEnabled || !this.colorGradingTexture || this.colorGradingTexture.isReady()
          }
          bind(dd, Jd) {
            if (this._whiteBalanceEnabled && dd.setMatrix3x3("whiteBalanceMatrix", this._getWhiteBalanceMatrix()), this._colorCurvesEnabled && this.colorCurves && sd(this.colorCurves, dd), this._vignetteEnabled || this._ditheringEnabled) {
              const kd = 1 / (this.outputTextureWidth || dd.eL().getRenderWidth()),
                pd = 1 / (this.outputTextureHeight || dd.eL().getRenderHeight());
              if (dd.setFloat2("vInverseScreenSize", kd, pd), this._ditheringEnabled && dd.setFloat("ditherIntensity", .5 * this._ditheringIntensity), this._vignetteEnabled) {
                const Nd = null != Jd ? Jd : pd / kd;
                let Wd = Math.tan(.5 * this.vignetteCameraFov),
                  Pd = Wd * Nd;
                const Zd = Math.sqrt(Pd * Wd);
                Pd = (0, ad.j)(Pd, Zd, this.vignetteStretch), Wd = (0, ad.j)(Wd, Zd, this.vignetteStretch), dd.setFloat4("vignetteSettings1", Pd, Wd, -Pd * this.vignetteCenterX, -Wd * this.vignetteCenterY);
                const gd = -2 * this.vignetteWeight;
                dd.setFloat4("vignetteSettings2", this.vignetteColor.r, this.vignetteColor.g, this.vignetteColor.b, gd)
              }
            }
            if (dd.setFloat("exposureLinear", this.exposure), dd.setFloat("contrast", this.contrast), this.colorGradingTexture) {
              dd.setTexture("txColorTransform", this.colorGradingTexture);
              const Jd = this.colorGradingTexture.getSize().height;
              dd.setFloat4("colorTransformSettings", (Jd - 1) / Jd, .5 / Jd, Jd, this.colorGradingTexture.level)
            }
          }
          clone() {
            return xd.c.Clone((() => new dd), this)
          }
          serialize() {
            return xd.c.Serialize(this)
          }
          static get VIGNETTEMODE_MULTIPLY() {
            return this._VIGNETTEMODE_MULTIPLY
          }
          static get VIGNETTEMODE_OPAQUE() {
            return this._VIGNETTEMODE_OPAQUE
          }
        }, (() => {
          const Wd = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          Jd = [(0, Nd.k)()], kd = [(0, Nd.H)()], Cd = [(0, Nd.y)("colorGradingTexture")], Qd = [(0, Nd.H)()], Ld = [(0, Nd.H)()], Od = [(0, Nd.H)()], Rd = [(0, Nd.H)()], qd = [(0, Nd.H)()], Fd = [(0, Nd.H)()], Yd = [(0, Nd.H)()], md = [(0, Nd.H)()], bd = [(0, Nd.H)()], Sd = [(0, Nd.H)()], jd = [(0, Nd.H)()], Xd = [(0, Nd.H)()], fd = [(0, Nd.H)()], nd = [(0, Nd.H)()], Ud = [(0, Nd.q)()], yd = [(0, Nd.H)()], Dd = [(0, Nd.H)()], Td = [(0, Nd.H)()], Ed = [(0, Nd.H)()], cd = [(0, Nd.H)()], hd = [(0, Nd.H)()], rd = [(0, Nd.H)()], ud = [(0, Nd.H)()], td = [(0, Nd.H)()], Vd = [(0, Nd.H)()], (0, pd.h)(null, null, Jd, {
            kind: "field",
            name: "colorCurves",
            static: !1,
            private: !1,
            access: {
              has: dd => "colorCurves" in dd,
              get: dd => dd.colorCurves,
              set: (dd, Jd) => {
                dd.colorCurves = Jd
              }
            },
            metadata: Wd
          }, zd, Hd), (0, pd.h)(null, null, kd, {
            kind: "field",
            name: "_colorCurvesEnabled",
            static: !1,
            private: !1,
            access: {
              has: dd => "_colorCurvesEnabled" in dd,
              get: dd => dd._colorCurvesEnabled,
              set: (dd, Jd) => {
                dd._colorCurvesEnabled = Jd
              }
            },
            metadata: Wd
          }, wd, Ad), (0, pd.h)(null, null, Cd, {
            kind: "field",
            name: "_colorGradingTexture",
            static: !1,
            private: !1,
            access: {
              has: dd => "_colorGradingTexture" in dd,
              get: dd => dd._colorGradingTexture,
              set: (dd, Jd) => {
                dd._colorGradingTexture = Jd
              }
            },
            metadata: Wd
          }, dJ, JJ), (0, pd.h)(null, null, Qd, {
            kind: "field",
            name: "_colorGradingEnabled",
            static: !1,
            private: !1,
            access: {
              has: dd => "_colorGradingEnabled" in dd,
              get: dd => dd._colorGradingEnabled,
              set: (dd, Jd) => {
                dd._colorGradingEnabled = Jd
              }
            },
            metadata: Wd
          }, kJ, pJ), (0, pd.h)(null, null, Ld, {
            kind: "field",
            name: "_colorGradingWithGreenDepth",
            static: !1,
            private: !1,
            access: {
              has: dd => "_colorGradingWithGreenDepth" in dd,
              get: dd => dd._colorGradingWithGreenDepth,
              set: (dd, Jd) => {
                dd._colorGradingWithGreenDepth = Jd
              }
            },
            metadata: Wd
          }, NJ, WJ), (0, pd.h)(null, null, Od, {
            kind: "field",
            name: "_colorGradingBGR",
            static: !1,
            private: !1,
            access: {
              has: dd => "_colorGradingBGR" in dd,
              get: dd => dd._colorGradingBGR,
              set: (dd, Jd) => {
                dd._colorGradingBGR = Jd
              }
            },
            metadata: Wd
          }, PJ, ZJ), (0, pd.h)(null, null, Rd, {
            kind: "field",
            name: "_exposure",
            static: !1,
            private: !1,
            access: {
              has: dd => "_exposure" in dd,
              get: dd => dd._exposure,
              set: (dd, Jd) => {
                dd._exposure = Jd
              }
            },
            metadata: Wd
          }, gJ, CJ), (0, pd.h)(null, null, qd, {
            kind: "field",
            name: "_toneMappingEnabled",
            static: !1,
            private: !1,
            access: {
              has: dd => "_toneMappingEnabled" in dd,
              get: dd => dd._toneMappingEnabled,
              set: (dd, Jd) => {
                dd._toneMappingEnabled = Jd
              }
            },
            metadata: Wd
          }, KJ, oJ), (0, pd.h)(null, null, Fd, {
            kind: "field",
            name: "_toneMappingType",
            static: !1,
            private: !1,
            access: {
              has: dd => "_toneMappingType" in dd,
              get: dd => dd._toneMappingType,
              set: (dd, Jd) => {
                dd._toneMappingType = Jd
              }
            },
            metadata: Wd
          }, lJ, QJ), (0, pd.h)(null, null, Yd, {
            kind: "field",
            name: "_contrast",
            static: !1,
            private: !1,
            access: {
              has: dd => "_contrast" in dd,
              get: dd => dd._contrast,
              set: (dd, Jd) => {
                dd._contrast = Jd
              }
            },
            metadata: Wd
          }, LJ, OJ), (0, pd.h)(null, null, md, {
            kind: "field",
            name: "_whiteBalanceEnabled",
            static: !1,
            private: !1,
            access: {
              has: dd => "_whiteBalanceEnabled" in dd,
              get: dd => dd._whiteBalanceEnabled,
              set: (dd, Jd) => {
                dd._whiteBalanceEnabled = Jd
              }
            },
            metadata: Wd
          }, eJ, RJ), (0, pd.h)(null, null, bd, {
            kind: "field",
            name: "_temperature",
            static: !1,
            private: !1,
            access: {
              has: dd => "_temperature" in dd,
              get: dd => dd._temperature,
              set: (dd, Jd) => {
                dd._temperature = Jd
              }
            },
            metadata: Wd
          }, IJ, GJ), (0, pd.h)(null, null, Sd, {
            kind: "field",
            name: "_tint",
            static: !1,
            private: !1,
            access: {
              has: dd => "_tint" in dd,
              get: dd => dd._tint,
              set: (dd, Jd) => {
                dd._tint = Jd
              }
            },
            metadata: Wd
          }, vJ, xJ), (0, pd.h)(null, null, jd, {
            kind: "field",
            name: "vignetteStretch",
            static: !1,
            private: !1,
            access: {
              has: dd => "vignetteStretch" in dd,
              get: dd => dd.vignetteStretch,
              set: (dd, Jd) => {
                dd.vignetteStretch = Jd
              }
            },
            metadata: Wd
          }, qJ, BJ), (0, pd.h)(null, null, Xd, {
            kind: "field",
            name: "vignetteCenterX",
            static: !1,
            private: !1,
            access: {
              has: dd => "vignetteCenterX" in dd,
              get: dd => dd.vignetteCenterX,
              set: (dd, Jd) => {
                dd.vignetteCenterX = Jd
              }
            },
            metadata: Wd
          }, sJ, iJ), (0, pd.h)(null, null, fd, {
            kind: "field",
            name: "vignetteCenterY",
            static: !1,
            private: !1,
            access: {
              has: dd => "vignetteCenterY" in dd,
              get: dd => dd.vignetteCenterY,
              set: (dd, Jd) => {
                dd.vignetteCenterY = Jd
              }
            },
            metadata: Wd
          }, aJ, MJ), (0, pd.h)(null, null, nd, {
            kind: "field",
            name: "vignetteWeight",
            static: !1,
            private: !1,
            access: {
              has: dd => "vignetteWeight" in dd,
              get: dd => dd.vignetteWeight,
              set: (dd, Jd) => {
                dd.vignetteWeight = Jd
              }
            },
            metadata: Wd
          }, FJ, YJ), (0, pd.h)(null, null, Ud, {
            kind: "field",
            name: "vignetteColor",
            static: !1,
            private: !1,
            access: {
              has: dd => "vignetteColor" in dd,
              get: dd => dd.vignetteColor,
              set: (dd, Jd) => {
                dd.vignetteColor = Jd
              }
            },
            metadata: Wd
          }, mJ, bJ), (0, pd.h)(null, null, yd, {
            kind: "field",
            name: "vignetteCameraFov",
            static: !1,
            private: !1,
            access: {
              has: dd => "vignetteCameraFov" in dd,
              get: dd => dd.vignetteCameraFov,
              set: (dd, Jd) => {
                dd.vignetteCameraFov = Jd
              }
            },
            metadata: Wd
          }, SJ, jJ), (0, pd.h)(null, null, Dd, {
            kind: "field",
            name: "_vignetteBlendMode",
            static: !1,
            private: !1,
            access: {
              has: dd => "_vignetteBlendMode" in dd,
              get: dd => dd._vignetteBlendMode,
              set: (dd, Jd) => {
                dd._vignetteBlendMode = Jd
              }
            },
            metadata: Wd
          }, XJ, fJ), (0, pd.h)(null, null, Td, {
            kind: "field",
            name: "_vignetteEnabled",
            static: !1,
            private: !1,
            access: {
              has: dd => "_vignetteEnabled" in dd,
              get: dd => dd._vignetteEnabled,
              set: (dd, Jd) => {
                dd._vignetteEnabled = Jd
              }
            },
            metadata: Wd
          }, nJ, UJ), (0, pd.h)(null, null, Ed, {
            kind: "field",
            name: "_ditheringEnabled",
            static: !1,
            private: !1,
            access: {
              has: dd => "_ditheringEnabled" in dd,
              get: dd => dd._ditheringEnabled,
              set: (dd, Jd) => {
                dd._ditheringEnabled = Jd
              }
            },
            metadata: Wd
          }, yJ, DJ), (0, pd.h)(null, null, cd, {
            kind: "field",
            name: "_ditheringIntensity",
            static: !1,
            private: !1,
            access: {
              has: dd => "_ditheringIntensity" in dd,
              get: dd => dd._ditheringIntensity,
              set: (dd, Jd) => {
                dd._ditheringIntensity = Jd
              }
            },
            metadata: Wd
          }, TJ, EJ), (0, pd.h)(null, null, hd, {
            kind: "field",
            name: "_skipFinalColorClamp",
            static: !1,
            private: !1,
            access: {
              has: dd => "_skipFinalColorClamp" in dd,
              get: dd => dd._skipFinalColorClamp,
              set: (dd, Jd) => {
                dd._skipFinalColorClamp = Jd
              }
            },
            metadata: Wd
          }, cJ, hJ), (0, pd.h)(null, null, rd, {
            kind: "field",
            name: "_applyByPostProcess",
            static: !1,
            private: !1,
            access: {
              has: dd => "_applyByPostProcess" in dd,
              get: dd => dd._applyByPostProcess,
              set: (dd, Jd) => {
                dd._applyByPostProcess = Jd
              }
            },
            metadata: Wd
          }, rJ, uJ), (0, pd.h)(null, null, ud, {
            kind: "field",
            name: "_isEnabled",
            static: !1,
            private: !1,
            access: {
              has: dd => "_isEnabled" in dd,
              get: dd => dd._isEnabled,
              set: (dd, Jd) => {
                dd._isEnabled = Jd
              }
            },
            metadata: Wd
          }, tJ, VJ), (0, pd.h)(null, null, td, {
            kind: "field",
            name: "outputTextureWidth",
            static: !1,
            private: !1,
            access: {
              has: dd => "outputTextureWidth" in dd,
              get: dd => dd.outputTextureWidth,
              set: (dd, Jd) => {
                dd.outputTextureWidth = Jd
              }
            },
            metadata: Wd
          }, zJ, HJ), (0, pd.h)(null, null, Vd, {
            kind: "field",
            name: "outputTextureHeight",
            static: !1,
            private: !1,
            access: {
              has: dd => "outputTextureHeight" in dd,
              get: dd => dd.outputTextureHeight,
              set: (dd, Jd) => {
                dd.outputTextureHeight = Jd
              }
            },
            metadata: Wd
          }, wJ, AJ), Wd && Object.defineProperty(dd, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Wd
          })
        })(), dd.TONEMAPPING_STANDARD = 0, dd.TONEMAPPING_ACES = 1, dd.TONEMAPPING_KHR_PBR_NEUTRAL = 2, dd.PrepareUniforms = Md.e, dd.PrepareSamplers = Md.c, dd._VIGNETTEMODE_MULTIPLY = 0, dd._VIGNETTEMODE_OPAQUE = 1, dd
      })(),
      md = !1;

    function bd(dd) {
      const Jd = xd.c.Parse((() => new Yd), dd, null, null);
      return void 0 !== dd.vignetteCentreX && (Jd.vignetteCenterX = dd.vignetteCentreX), void 0 !== dd.vignetteCentreY && (Jd.vignetteCenterY = dd.vignetteCentreY), Jd
    }

    function Sd() {
      md || (md = !0, Yd.Parse = bd, xd.c._ImageProcessingConfigurationParser = bd, (0, Fd.h)("BABYLON.ImageProcessingConfiguration", Yd))
    }
  },
  40101: (dd, Jd, kd) => {
    kd.d(Jd, {
      e: () => Wd
    });
    var pd = kd(38812),
      Nd = kd(40066);
    class Wd {
      constructor(dd, Jd) {
        let kd = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          pd = arguments.length > 3 ? arguments[3] : void 0,
          Nd = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          Wd = arguments.length > 5 ? arguments[5] : void 0;
        this._uniformNames = [], this._valueCache = {}, this._engine = dd, this._noUBO = !dd.supportsUniformBuffers || Nd, this._dynamic = kd, this._name = pd ?? "no-name", this._data = Jd || [], this._uniformLocations = {}, this._uniformSizes = {}, this._uniformArraySizes = {}, this._uniformLocationPointer = 0, this._needSync = !1, this._dataGeneration = 0, this._trackUBOsInFrame = !1, (void 0 === Wd && this._engine._features.trackUbosInFrame || !0 === Wd) && (this._buffers = [], this._bufferIndex = -1, this._bufferUpdatedLastFrame = !1, this._createBufferOnWrite = !1, this._currentFrameId = 0, this._trackUBOsInFrame = !0, this._resetOwnerSlots()), this._noUBO ? (this.updateMatrix3x3 = this._updateMatrix3x3ForEffect, this.updateMatrix2x2 = this._updateMatrix2x2ForEffect, this.updateFloat = this._updateFloatForEffect, this.updateFloat2 = this._updateFloat2ForEffect, this.updateFloat3 = this._updateFloat3ForEffect, this.updateFloat4 = this._updateFloat4ForEffect, this.updateFloatArray = this._updateFloatArrayForEffect, this.updateArray = this._updateArrayForEffect, this.updateIntArray = this._updateIntArrayForEffect, this.updateUIntArray = this._updateUIntArrayForEffect, this.o3 = this._updateMatrixForEffect, this.updateMatrices = this._updateMatricesForEffect, this.updateVector3 = this._updateVector3ForEffect, this.updateVector4 = this._updateVector4ForEffect, this.updateColor3 = this._updateColor3ForEffect, this.updateColor4 = this._updateColor4ForEffect, this.updateDirectColor4 = this._updateDirectColor4ForEffect, this.updateInt = this._updateIntForEffect, this.updateInt2 = this._updateInt2ForEffect, this.updateInt3 = this._updateInt3ForEffect, this.updateInt4 = this._updateInt4ForEffect, this.updateUInt = this._updateUIntForEffect, this.updateUInt2 = this._updateUInt2ForEffect, this.updateUInt3 = this._updateUInt3ForEffect, this.updateUInt4 = this._updateUInt4ForEffect) : (this._engine._uniformBuffers.push(this), this.updateMatrix3x3 = this._updateMatrix3x3ForUniform, this.updateMatrix2x2 = this._updateMatrix2x2ForUniform, this.updateFloat = this._updateFloatForUniform, this.updateFloat2 = this._updateFloat2ForUniform, this.updateFloat3 = this._updateFloat3ForUniform, this.updateFloat4 = this._updateFloat4ForUniform, this.updateFloatArray = this._updateFloatArrayForUniform, this.updateArray = this._updateArrayForUniform, this.updateIntArray = this._updateIntArrayForUniform, this.updateUIntArray = this._updateUIntArrayForUniform, this.o3 = this._updateMatrixForUniform, this.updateMatrices = this._updateMatricesForUniform, this.updateVector3 = this._updateVector3ForUniform, this.updateVector4 = this._updateVector4ForUniform, this.updateColor3 = this._updateColor3ForUniform, this.updateColor4 = this._updateColor4ForUniform, this.updateDirectColor4 = this._updateDirectColor4ForUniform, this.updateInt = this._updateIntForUniform, this.updateInt2 = this._updateInt2ForUniform, this.updateInt3 = this._updateInt3ForUniform, this.updateInt4 = this._updateInt4ForUniform, this.updateUInt = this._updateUIntForUniform, this.updateUInt2 = this._updateUInt2ForUniform, this.updateUInt3 = this._updateUInt3ForUniform, this.updateUInt4 = this._updateUInt4ForUniform)
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
      _fillAlignment(dd) {
        let Jd;
        if (Jd = dd <= 2 ? dd : 4, this._uniformLocationPointer % Jd !== 0) {
          const dd = this._uniformLocationPointer;
          this._uniformLocationPointer += Jd - this._uniformLocationPointer % Jd;
          const kd = this._uniformLocationPointer - dd;
          for (let Jd = 0; Jd < kd; Jd++) this._data.push(0)
        }
      }
      addUniform(dd, Jd) {
        let kd, pd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (pd > 0 && "number" === typeof Jd && (this._uniformArraySizes[dd] = {
            strideSize: Jd,
            arraySize: pd
          }), void 0 === this._uniformLocations[dd] && (this._uniformNames.push(dd), !this._noUBO)) {
          if (pd > 0) {
            if (Jd instanceof Array) throw "addUniform should not be use with Array in UBO: " + dd;
            if (this._fillAlignment(4), 16 == Jd) Jd *= pd;
            else {
              Jd = Jd * pd + (4 - Jd) * pd
            }
            kd = [];
            for (let dd = 0; dd < Jd; dd++) kd.push(0)
          } else {
            if (Jd instanceof Array) kd = Jd, Jd = kd.length;
            else {
              kd = [];
              for (let dd = 0; dd < Jd; dd++) kd.push(0)
            }
            this._fillAlignment(Jd)
          }
          this._uniformSizes[dd] = Jd, this._uniformLocations[dd] = this._uniformLocationPointer, this._uniformLocationPointer += Jd;
          for (let dd = 0; dd < Jd; dd++) this._data.push(kd[dd]);
          this._needSync = !0
        }
      }
      addMatrix(dd, Jd) {
        this.addUniform(dd, Array.prototype.slice.call(Jd.spd()))
      }
      addFloat2(dd, Jd, kd) {
        const pd = [Jd, kd];
        this.addUniform(dd, pd)
      }
      addFloat3(dd, Jd, kd, pd) {
        const Nd = [Jd, kd, pd];
        this.addUniform(dd, Nd)
      }
      addColor3(dd, Jd) {
        const kd = [Jd.r, Jd.g, Jd.b];
        this.addUniform(dd, kd)
      }
      addColor4(dd, Jd, kd) {
        const pd = [Jd.r, Jd.g, Jd.b, kd];
        this.addUniform(dd, pd)
      }
      addVector3(dd, Jd) {
        const kd = [Jd.x, Jd.y, Jd.z];
        this.addUniform(dd, kd)
      }
      addMatrix3x3(dd) {
        this.addUniform(dd, 12)
      }
      addMatrix2x2(dd) {
        this.addUniform(dd, 8)
      }
      create() {
        this._noUBO || this._buffer || (this._fillAlignment(4), this._bufferData = new Float32Array(this._data), this._dataGeneration++, this._rebuild(), this._needSync = !0)
      }
      _getNamesDebug() {
        const dd = [];
        let Jd = 0;
        for (const kd in this._uniformLocations)
          if (dd.push(kd), 10 === ++Jd) break;
        return dd.join(",")
      }
      _rebuild() {
        !this._noUBO && this._bufferData && (this._dynamic ? this._buffer = this._engine.createDynamicUniformBuffer(this._bufferData, this._name + "_UniformList:" + this._getNamesDebug()) : this._buffer = this._engine.createUniformBuffer(this._bufferData, this._name + "_UniformList:" + this._getNamesDebug()), this._trackUBOsInFrame && (this._buffers.push([this._buffer, this._engine._features.checkUbosContentBeforeUpload ? this._bufferData.slice() : void 0]), this._bufferIndex = this._buffers.length - 1, this._createBufferOnWrite = !1))
      }
      _rebuildAfterContextLost() {
        this._trackUBOsInFrame && (this._buffers = [], this._currentFrameId = 0, this._resetOwnerSlots()), this._rebuild()
      }
      _resetOwnerSlots() {
        if (this._ownerListsBySlot)
          for (const dd of this._ownerListsBySlot.values()) this._removeOwnerBacklink(dd);
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
      set name(dd) {
        this._name = dd
      }
      get currentEffect() {
        return this._currentEffect
      }
      _buffersEqual(dd, Jd) {
        for (let kd = 0; kd < dd.length; ++kd)
          if (dd[kd] !== Jd[kd]) return !1;
        return !0
      }
      _copyBuffer(dd, Jd) {
        for (let kd = 0; kd < dd.length; ++kd) Jd[kd] = dd[kd]
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
      _updateOwnerKeyed(dd) {
        if (this._noUBO || !this._trackUBOsInFrame) return void this.update();
        this._buffer || this.create(), this._checkNewFrame();
        let Jd = this._slotByOwner.get(dd);
        if (void 0 === Jd && (Jd = 0 === this._ownerCount && 1 === this._buffers.length && 0 === this._freeSlots.length ? 0 : this._takeFreeSlot(!0), this._slotByOwner.set(dd, Jd), this._ownerCount++, dd._uniformBuffersWithOwnedSlot || (dd._uniformBuffersWithOwnedSlot = []), dd._uniformBuffersWithOwnedSlot.push(this), this._ownerListsBySlot.set(Jd, dd._uniformBuffersWithOwnedSlot)), this._slotGeneration[Jd] === this._dataGeneration) return this._bufferIndex = Jd, this._buffer = this._buffers[Jd][0], this.bindUniformBuffer(), this._slotFrameId[Jd] = this._currentFrameId, this._needSync = !1, void(this._createBufferOnWrite = !1);
        const kd = this._buffers[Jd][1];
        this._slotFrameId[Jd] === this._currentFrameId && kd && !this._buffersEqual(this._bufferData, kd) && (Jd = this._takeFreeSlot(!1)), this._bufferIndex = Jd, this._buffer = this._buffers[Jd][0], this.bindUniformBuffer();
        const pd = this._buffers[Jd][1];
        pd && this._buffersEqual(this._bufferData, pd) || (pd && this._copyBuffer(this._bufferData, pd), this._bufferUpdatedLastFrame = !0, this._engine.updateUniformBuffer(this._buffer, this._bufferData)), this._slotFrameId[Jd] = this._currentFrameId, this._slotGeneration[Jd] = this._dataGeneration, this._needSync = !1, this._createBufferOnWrite = !1
      }
      _takeFreeSlot(dd) {
        for (let kd = 0; kd < this._freeSlots.length; ++kd) {
          const Jd = this._freeSlots[kd];
          if (this._slotFrameId[Jd] !== this._currentFrameId) return dd && (this._freeSlots[kd] = this._freeSlots[this._freeSlots.length - 1], this._freeSlots.pop()), Jd
        }
        this._rebuild();
        const Jd = this._buffers.length - 1;
        return dd || this._freeSlots.push(Jd), Jd
      }
      _releaseOwnerSlot(dd) {
        const Jd = this._slotByOwner?.get(dd);
        if (void 0 === Jd) return;
        this._slotByOwner.delete(dd);
        const kd = this._ownerListsBySlot.get(Jd);
        kd && (this._removeOwnerBacklink(kd), this._ownerListsBySlot.delete(Jd)), this._ownerCount--, this._freeSlots.push(Jd)
      }
      _removeOwnerBacklink(dd) {
        const Jd = dd.indexOf(this); - 1 !== Jd && (dd[Jd] = dd[dd.length - 1], dd.pop())
      }
      _createNewBuffer() {
        this._bufferIndex + 1 < this._buffers.length ? (this._bufferIndex++, this._buffer = this._buffers[this._bufferIndex][0], this._createBufferOnWrite = !1, this._needSync = !0) : this._rebuild()
      }
      _checkNewFrame() {
        this._trackUBOsInFrame && this._currentFrameId !== this._engine.frameId && (this._currentFrameId = this._engine.frameId, this._createBufferOnWrite = !1, this._buffers && this._buffers.length > 0 ? (1 === this._buffers.length ? this._needSync = !this._bufferUpdatedLastFrame : this._needSync = 0 !== this._bufferIndex, this._bufferIndex = 0, this._buffer = this._buffers[this._bufferIndex][0]) : this._bufferIndex = -1)
      }
      updateUniform(dd, Jd, kd) {
        this._checkNewFrame();
        let Nd = this._uniformLocations[dd];
        if (void 0 === Nd) {
          if (this._buffer) return void pd.c.Error("Cannot add an uniform after UBO has been created. uniformName=" + dd);
          this.addUniform(dd, kd), Nd = this._uniformLocations[dd]
        }
        if (this._buffer || this.create(), this._dynamic) {
          for (let dd = 0; dd < kd; dd++) this._bufferData[Nd + dd] = Jd[dd];
          this._dataGeneration++
        } else {
          let dd = !1;
          for (let pd = 0; pd < kd; pd++)(16 === kd && !this._engine._features.uniformBufferHardCheckMatrix || this._bufferData[Nd + pd] !== Math.fround(Jd[pd])) && (dd = !0, this._createBufferOnWrite && this._createNewBuffer(), this._bufferData[Nd + pd] = Jd[pd]);
          this._needSync = this._needSync || dd, dd && this._dataGeneration++
        }
      }
      updateUniformArray(dd, Jd, kd) {
        this._checkNewFrame();
        const Wd = this._uniformLocations[dd];
        if (void 0 === Wd) return void pd.c.Error("Cannot add an uniform Array dynamically. Please, add it using addUniform and make sure that uniform buffers are supported by the current engine.");
        this._buffer || this.create();
        const Pd = this._uniformArraySizes[dd];
        if (this._dynamic) {
          for (let dd = 0; dd < kd; dd++) this._bufferData[Wd + dd] = Jd[dd];
          this._dataGeneration++
        } else {
          let dd = !1,
            pd = 0,
            Zd = 0;
          for (let gd = 0; gd < kd; gd++)
            if (this._bufferData[Wd + 4 * Zd + pd] !== Nd.h.FloatRound(Jd[gd]) && (dd = !0, this._createBufferOnWrite && this._createNewBuffer(), this._bufferData[Wd + 4 * Zd + pd] = Jd[gd]), pd++, pd === Pd.strideSize) {
              for (; pd < 4; pd++) this._bufferData[Wd + 4 * Zd + pd] = 0;
              pd = 0, Zd++
            } this._needSync = this._needSync || dd, dd && this._dataGeneration++
        }
      }
      _cacheMatrix(dd, Jd) {
        this._checkNewFrame();
        const kd = this._valueCache[dd],
          pd = Jd.updateFlag;
        return (void 0 === kd || kd !== pd) && (this._valueCache[dd] = pd, !0)
      }
      _updateMatrix3x3ForUniform(dd, Jd) {
        for (let kd = 0; kd < 3; kd++) Wd._TempBuffer[4 * kd] = Jd[3 * kd], Wd._TempBuffer[4 * kd + 1] = Jd[3 * kd + 1], Wd._TempBuffer[4 * kd + 2] = Jd[3 * kd + 2], Wd._TempBuffer[4 * kd + 3] = 0;
        this.updateUniform(dd, Wd._TempBuffer, 12)
      }
      _updateMatrix3x3ForEffect(dd, Jd) {
        this._currentEffect.setMatrix3x3(dd, Jd)
      }
      _updateMatrix2x2ForEffect(dd, Jd) {
        this._currentEffect.setMatrix2x2(dd, Jd)
      }
      _updateMatrix2x2ForUniform(dd, Jd) {
        for (let kd = 0; kd < 2; kd++) Wd._TempBuffer[4 * kd] = Jd[2 * kd], Wd._TempBuffer[4 * kd + 1] = Jd[2 * kd + 1], Wd._TempBuffer[4 * kd + 2] = 0, Wd._TempBuffer[4 * kd + 3] = 0;
        this.updateUniform(dd, Wd._TempBuffer, 8)
      }
      _updateFloatForEffect(dd, Jd) {
        let kd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        this._currentEffect.setFloat(dd + kd, Jd)
      }
      _updateFloatForUniform(dd, Jd) {
        Wd._TempBuffer[0] = Jd, this.updateUniform(dd, Wd._TempBuffer, 1)
      }
      _updateFloat2ForEffect(dd, Jd, kd) {
        let pd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
        this._currentEffect.setFloat2(dd + pd, Jd, kd)
      }
      _updateFloat2ForUniform(dd, Jd, kd) {
        Wd._TempBuffer[0] = Jd, Wd._TempBuffer[1] = kd, this.updateUniform(dd, Wd._TempBuffer, 2)
      }
      _updateFloat3ForEffect(dd, Jd, kd, pd) {
        let Nd = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "";
        this._currentEffect.setFloat3(dd + Nd, Jd, kd, pd)
      }
      _updateFloat3ForUniform(dd, Jd, kd, pd) {
        Wd._TempBuffer[0] = Jd, Wd._TempBuffer[1] = kd, Wd._TempBuffer[2] = pd, this.updateUniform(dd, Wd._TempBuffer, 3)
      }
      _updateFloat4ForEffect(dd, Jd, kd, pd, Nd) {
        let Wd = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "";
        this._currentEffect.setFloat4(dd + Wd, Jd, kd, pd, Nd)
      }
      _updateFloat4ForUniform(dd, Jd, kd, pd, Nd) {
        Wd._TempBuffer[0] = Jd, Wd._TempBuffer[1] = kd, Wd._TempBuffer[2] = pd, Wd._TempBuffer[3] = Nd, this.updateUniform(dd, Wd._TempBuffer, 4)
      }
      _updateFloatArrayForEffect(dd, Jd) {
        let kd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        switch (this._uniformArraySizes[dd]?.strideSize) {
          case 2:
            this._currentEffect.setFloatArray2(dd + kd, Jd);
            break;
          case 3:
            this._currentEffect.setFloatArray3(dd + kd, Jd);
            break;
          case 4:
            this._currentEffect.setFloatArray4(dd + kd, Jd);
            break;
          default:
            this._currentEffect.setFloatArray(dd + kd, Jd)
        }
      }
      _updateFloatArrayForUniform(dd, Jd) {
        this.updateUniformArray(dd, Jd, Jd.length)
      }
      _updateArrayForEffect(dd, Jd) {
        this._currentEffect.setArray(dd, Jd)
      }
      _updateArrayForUniform(dd, Jd) {
        this.updateUniformArray(dd, Jd, Jd.length)
      }
      _updateIntArrayForEffect(dd, Jd) {
        this._currentEffect.setIntArray(dd, Jd)
      }
      _updateIntArrayForUniform(dd, Jd) {
        Wd._TempBufferInt32View.set(Jd), this.updateUniformArray(dd, Wd._TempBuffer, Jd.length)
      }
      _updateUIntArrayForEffect(dd, Jd) {
        this._currentEffect.setUIntArray(dd, Jd)
      }
      _updateUIntArrayForUniform(dd, Jd) {
        Wd._TempBufferUInt32View.set(Jd), this.updateUniformArray(dd, Wd._TempBuffer, Jd.length)
      }
      _updateMatrixForEffect(dd, Jd) {
        this._currentEffect.setMatrix(dd, Jd)
      }
      _updateMatrixForUniform(dd, Jd) {
        this._cacheMatrix(dd, Jd) && this.updateUniform(dd, Jd.spd(), 16)
      }
      _updateMatricesForEffect(dd, Jd) {
        this._currentEffect.setMatrices(dd, Jd)
      }
      _updateMatricesForUniform(dd, Jd) {
        this.updateUniform(dd, Jd, Jd.length)
      }
      _updateVector3ForEffect(dd, Jd) {
        this._currentEffect.setVector3(dd, Jd)
      }
      _updateVector3ForUniform(dd, Jd) {
        Wd._TempBuffer[0] = Jd.x, Wd._TempBuffer[1] = Jd.y, Wd._TempBuffer[2] = Jd.z, this.updateUniform(dd, Wd._TempBuffer, 3)
      }
      _updateVector4ForEffect(dd, Jd) {
        this._currentEffect.setVector4(dd, Jd)
      }
      _updateVector4ForUniform(dd, Jd) {
        Wd._TempBuffer[0] = Jd.x, Wd._TempBuffer[1] = Jd.y, Wd._TempBuffer[2] = Jd.z, Wd._TempBuffer[3] = Jd.w, this.updateUniform(dd, Wd._TempBuffer, 4)
      }
      _updateColor3ForEffect(dd, Jd) {
        let kd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        this._currentEffect.setColor3(dd + kd, Jd)
      }
      _updateColor3ForUniform(dd, Jd) {
        Wd._TempBuffer[0] = Jd.r, Wd._TempBuffer[1] = Jd.g, Wd._TempBuffer[2] = Jd.b, this.updateUniform(dd, Wd._TempBuffer, 3)
      }
      _updateColor4ForEffect(dd, Jd, kd) {
        let pd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
        this._currentEffect.setColor4(dd + pd, Jd, kd)
      }
      _updateDirectColor4ForEffect(dd, Jd) {
        let kd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        this._currentEffect.setDirectColor4(dd + kd, Jd)
      }
      _updateColor4ForUniform(dd, Jd, kd) {
        Wd._TempBuffer[0] = Jd.r, Wd._TempBuffer[1] = Jd.g, Wd._TempBuffer[2] = Jd.b, Wd._TempBuffer[3] = kd, this.updateUniform(dd, Wd._TempBuffer, 4)
      }
      _updateDirectColor4ForUniform(dd, Jd) {
        Wd._TempBuffer[0] = Jd.r, Wd._TempBuffer[1] = Jd.g, Wd._TempBuffer[2] = Jd.b, Wd._TempBuffer[3] = Jd.a, this.updateUniform(dd, Wd._TempBuffer, 4)
      }
      _updateIntForEffect(dd, Jd) {
        let kd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        this._currentEffect.setInt(dd + kd, Jd)
      }
      _updateIntForUniform(dd, Jd) {
        Wd._TempBufferInt32View[0] = Jd, this.updateUniform(dd, Wd._TempBuffer, 1)
      }
      _updateInt2ForEffect(dd, Jd, kd) {
        let pd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
        this._currentEffect.setInt2(dd + pd, Jd, kd)
      }
      _updateInt2ForUniform(dd, Jd, kd) {
        Wd._TempBufferInt32View[0] = Jd, Wd._TempBufferInt32View[1] = kd, this.updateUniform(dd, Wd._TempBuffer, 2)
      }
      _updateInt3ForEffect(dd, Jd, kd, pd) {
        let Nd = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "";
        this._currentEffect.setInt3(dd + Nd, Jd, kd, pd)
      }
      _updateInt3ForUniform(dd, Jd, kd, pd) {
        Wd._TempBufferInt32View[0] = Jd, Wd._TempBufferInt32View[1] = kd, Wd._TempBufferInt32View[2] = pd, this.updateUniform(dd, Wd._TempBuffer, 3)
      }
      _updateInt4ForEffect(dd, Jd, kd, pd, Nd) {
        let Wd = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "";
        this._currentEffect.setInt4(dd + Wd, Jd, kd, pd, Nd)
      }
      _updateInt4ForUniform(dd, Jd, kd, pd, Nd) {
        Wd._TempBufferInt32View[0] = Jd, Wd._TempBufferInt32View[1] = kd, Wd._TempBufferInt32View[2] = pd, Wd._TempBufferInt32View[3] = Nd, this.updateUniform(dd, Wd._TempBuffer, 4)
      }
      _updateUIntForEffect(dd, Jd) {
        let kd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        this._currentEffect.setUInt(dd + kd, Jd)
      }
      _updateUIntForUniform(dd, Jd) {
        Wd._TempBufferUInt32View[0] = Jd, this.updateUniform(dd, Wd._TempBuffer, 1)
      }
      _updateUInt2ForEffect(dd, Jd, kd) {
        let pd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
        this._currentEffect.setUInt2(dd + pd, Jd, kd)
      }
      _updateUInt2ForUniform(dd, Jd, kd) {
        Wd._TempBufferUInt32View[0] = Jd, Wd._TempBufferUInt32View[1] = kd, this.updateUniform(dd, Wd._TempBuffer, 2)
      }
      _updateUInt3ForEffect(dd, Jd, kd, pd) {
        let Nd = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "";
        this._currentEffect.setUInt3(dd + Nd, Jd, kd, pd)
      }
      _updateUInt3ForUniform(dd, Jd, kd, pd) {
        Wd._TempBufferUInt32View[0] = Jd, Wd._TempBufferUInt32View[1] = kd, Wd._TempBufferUInt32View[2] = pd, this.updateUniform(dd, Wd._TempBuffer, 3)
      }
      _updateUInt4ForEffect(dd, Jd, kd, pd, Nd) {
        let Wd = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "";
        this._currentEffect.setUInt4(dd + Wd, Jd, kd, pd, Nd)
      }
      _updateUInt4ForUniform(dd, Jd, kd, pd, Nd) {
        Wd._TempBufferUInt32View[0] = Jd, Wd._TempBufferUInt32View[1] = kd, Wd._TempBufferUInt32View[2] = pd, Wd._TempBufferUInt32View[3] = Nd, this.updateUniform(dd, Wd._TempBuffer, 4)
      }
      setTexture(dd, Jd) {
        this._currentEffect.setTexture(dd, Jd)
      }
      setTextureArray(dd, Jd) {
        this._currentEffect.setTextureArray(dd, Jd)
      }
      bindTexture(dd, Jd) {
        this._currentEffect._bindTexture(dd, Jd)
      }
      updateUniformDirectly(dd, Jd) {
        this.updateUniform(dd, Jd, Jd.length), this.update()
      }
      bindToEffect(dd, Jd) {
        this._currentEffect = dd, this._currentEffectName = Jd
      }
      bindUniformBuffer() {
        !this._noUBO && this._buffer && this._currentEffect && this._currentEffect.bindUniformBuffer(this._buffer, this._currentEffectName)
      }
      unbindEffect() {
        this._currentEffect = void 0, this._currentEffectName = void 0
      }
      setDataBuffer(dd) {
        if (!this._buffers) return this._buffer === dd;
        for (let Jd = 0; Jd < this._buffers.length; ++Jd) {
          if (this._buffers[Jd][0] === dd) return this._bufferIndex = Jd, this._buffer = dd, this._createBufferOnWrite = !1, this._currentEffect = void 0, this._buffers.length > 1 && this._buffers[Jd][1] && (this._bufferData.set(this._buffers[Jd][1]), this._dataGeneration++), this._valueCache = {}, this._currentFrameId = this._engine.frameId, !0
        }
        return !1
      }
      has(dd) {
        return void 0 !== this._uniformLocations[dd]
      }
      dispose() {
        if (this._noUBO) return;
        const dd = this._engine._uniformBuffers,
          Jd = dd.indexOf(this);
        if (-1 !== Jd && (dd[Jd] = dd[dd.length - 1], dd.pop()), this._trackUBOsInFrame && this._buffers) {
          this._resetOwnerSlots();
          for (let dd = 0; dd < this._buffers.length; ++dd) {
            const Jd = this._buffers[dd][0];
            this._engine._releaseBuffer(Jd)
          }
          this._buffers = [], this._buffer = null, this._bufferIndex = -1
        } else this._buffer && this._engine._releaseBuffer(this._buffer) && (this._buffer = null)
      }
    }
    Wd._MAX_UNIFORM_SIZE = 256, Wd._TempBuffer = new Float32Array(Wd._MAX_UNIFORM_SIZE), Wd._TempBufferInt32View = new Int32Array(Wd._TempBuffer.buffer), Wd._TempBufferUInt32View = new Uint32Array(Wd._TempBuffer.buffer)
  },
  39891: (dd, Jd, kd) => {
    kd.d(Jd, {
      b: () => Nd
    });
    var pd = kd(39893);
    class Nd extends pd.d {
      constructor(dd) {
        super(), this._buffer = dd
      }
      get underlyingResource() {
        return this._buffer
      }
    }
  },
  39975: (dd, Jd, kd) => {
    kd.d(Jd, {
      d: () => gd,
      f: () => Cd
    });
    const pd = "__bjs_serializable__",
      Nd = new WeakMap;

    function Wd(dd, Jd) {
      return Object.prototype.hasOwnProperty.call(dd, Jd)
    }
    const Pd = function() {
      let dd = Symbol.metadata;
      return dd || (dd = Symbol("Symbol.metadata"), Object.defineProperty(Symbol, "metadata", {
        configurable: !0,
        writable: !0,
        value: dd
      })), dd
    }();

    function Zd(dd) {
      return "function" === typeof dd ? dd : dd?.constructor
    }

    function gd(dd) {
      if (!dd) throw new Error(`Decorator metadata is unavailable; the Symbol.metadata (${String(Pd)}) polyfill must run before decorated classes are evaluated.`);
      return Wd(dd, pd) || (dd[pd] = {}), dd[pd]
    }

    function Cd(dd) {
      const Jd = Zd(dd),
        kd = Jd ? Jd[Pd] : void 0;
      if (!kd) return {};
      const gd = Nd.get(kd);
      if (gd) return gd;
      const Cd = {},
        Kd = [];
      let od = kd;
      for (; od;) Kd.push(od), od = Object.getPrototypeOf(od);
      for (const Nd of Kd)
        if (Wd(Nd, pd)) {
          const dd = Nd[pd];
          for (const Jd in dd) Cd[Jd] = dd[Jd]
        } return Nd.set(kd, Cd), Cd
    }
  },
  39966: (dd, Jd, kd) => {
    kd.d(Jd, {
      B: () => Kd,
      F: () => od,
      H: () => Pd,
      c: () => Gd,
      f: () => Wd,
      h: () => Id,
      k: () => Qd,
      n: () => gd,
      q: () => Ld,
      s: () => Cd,
      u: () => ed,
      v: () => ld,
      w: () => Od,
      y: () => Zd
    });
    var pd = kd(39975);

    function Nd(dd, Jd) {
      return (kd, Nd) => {
        if (!Nd.metadata) return;
        const Wd = String(Nd.name),
          Pd = (0, pd.d)(Nd.metadata);
        Pd[Wd] || (Pd[Wd] = {
          type: dd,
          sourceName: Jd
        })
      }
    }

    function Wd(dd) {
      return function(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return (kd, pd) => {
          const Nd = Jd || "_" + String(pd.name);
          return {
            init(dd) {
              return void 0 === dd && Nd in this || (this[Nd] = dd), dd
            },
            get() {
              return this[Nd]
            },
            set(Jd) {
              "function" === typeof this[Nd]?.equals && this[Nd].equals(Jd) || this[Nd] !== Jd && (this[Nd] = Jd, this[dd]())
            }
          }
        }
      }(dd, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null)
    }

    function Pd(dd) {
      return Nd(0, dd)
    }

    function Zd(dd) {
      return Nd(1, dd)
    }

    function gd(dd) {
      return Nd(2, dd)
    }

    function Cd(dd) {
      return Nd(3, dd)
    }

    function Kd(dd) {
      return Nd(4, dd)
    }

    function od(dd) {
      return Nd(5, dd)
    }

    function ld(dd) {
      return Nd(6, dd)
    }

    function Qd(dd) {
      return Nd(7, dd)
    }

    function Ld(dd) {
      return Nd(8, dd)
    }

    function Od(dd) {
      return Nd(10, dd)
    }

    function ed(dd) {
      return Nd(12, dd)
    }

    function Rd(dd, Jd, kd) {
      const pd = String(Jd.name);
      let Nd = null;
      const Wd = function() {
        if (null === Nd) {
          Nd = dd, "undefined" !== typeof _native && _native[pd] && (Nd = kd(_native[pd], dd));
          const Pd = this && (Jd.static ? this : Object.getPrototypeOf(this));
          Pd?.[pd] === Wd && (Pd[pd] = Nd)
        }
        for (var Pd = arguments.length, Zd = new Array(Pd), gd = 0; gd < Pd; gd++) Zd[gd] = arguments[gd];
        return Nd.apply(this, Zd)
      };
      return Wd
    }

    function Id(dd, Jd) {
      return Rd(dd, Jd, (dd => dd))
    }

    function Gd(dd) {
      let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      return (kd, pd) => {
        const Nd = Jd || "_" + String(pd.name);
        return {
          get() {
            return this[Nd]?.value
          },
          set(Jd) {
            "function" === typeof this[Nd]?.value?.equals && this[Nd].value.equals(Jd) || this[Nd].value !== Jd && (this[Nd].value = Jd, this[dd]())
          }
        }
      }
    }
    Id.filter = function(dd) {
      return (Jd, kd) => Rd(Jd, kd, ((Jd, kd) => function() {
        for (var pd = arguments.length, Nd = new Array(pd), Wd = 0; Wd < pd; Wd++) Nd[Wd] = arguments[Wd];
        return dd(...Nd) ? Jd(...Nd) : kd.apply(this, Nd)
      }))
    }
  },
  39983: (dd, Jd, kd) => {
    kd.d(Jd, {
      c: () => Cd
    });
    var pd = kd(39860),
      Nd = kd(39992),
      Wd = kd(37443),
      Pd = kd(37251),
      Zd = kd(39975);
    const gd = function(dd, Jd, kd) {
      let pd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const Wd = dd();
      Nd.c && Nd.c.HasTags(Jd) && Nd.c.AddTagsTo(Wd, Nd.c.GetTags(Jd, !0));
      const Pd = (0, Zd.f)(Wd),
        gd = {};
      for (const Nd in Pd) {
        const dd = Pd[Nd],
          Zd = Jd[Nd],
          Kd = dd.type;
        if (void 0 !== Zd && null !== Zd && ("uniqueId" !== Nd || Cd.AllowLoadingUniqueId)) switch (Kd) {
          case 0:
          case 6:
          case 9:
          case 11:
            "function" === typeof Zd.slice ? Wd[Nd] = Zd.slice() : Wd[Nd] = Zd;
            break;
          case 1:
            pd.cloneTexturesOnlyOnce && gd[Zd.uniqueId] ? Wd[Nd] = gd[Zd.uniqueId] : (Wd[Nd] = kd || Zd.isRenderTarget ? Zd : Zd.clone(), gd[Zd.uniqueId] = Wd[Nd]);
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
            Wd[Nd] = kd ? Zd : Zd.clone()
        }
      }
      return Wd
    };
    class Cd {
      static AppendSerializedAnimations(dd, Jd) {
        if (dd.animations) {
          Jd.animations = [];
          for (let kd = 0; kd < dd.animations.length; kd++) {
            const pd = dd.animations[kd];
            Jd.animations.push(pd.serialize())
          }
        }
      }
      static Serialize(dd, Jd) {
        Jd || (Jd = {}), Nd.c && (Jd.tags = Nd.c.GetTags(dd));
        const kd = (0, Zd.f)(dd);
        for (const pd in kd) {
          const Nd = kd[pd],
            Wd = Nd.sourceName || pd,
            Pd = Nd.type,
            Zd = dd[pd];
          if (void 0 !== Zd && null !== Zd && ("uniqueId" !== pd || Cd.AllowLoadingUniqueId)) switch (Pd) {
            case 0:
              Array.isArray(Zd) ? Jd[Wd] = Zd.slice() : Jd[Wd] = Zd;
              break;
            case 1:
            case 3:
            case 7:
            case 9:
              Jd[Wd] = Zd.serialize();
              break;
            case 2:
            case 4:
            case 5:
            case 8:
            case 10:
            case 12:
            case 13:
              Jd[Wd] = Zd.spd();
              break;
            case 6:
            case 11:
              Jd[Wd] = Zd.id
          }
        }
        return Jd
      }
      static ParseProperties(dd, Jd, kd, pd) {
        pd || (pd = "");
        const Nd = (0, Zd.f)(Jd);
        for (const Zd in Nd) {
          const gd = Nd[Zd],
            Kd = dd[gd.sourceName || Zd],
            od = gd.type;
          if (void 0 !== Kd && null !== Kd && ("uniqueId" !== Zd || Cd.AllowLoadingUniqueId)) {
            const dd = Jd;
            switch (od) {
              case 0:
                dd[Zd] = Kd;
                break;
              case 1:
                kd && (dd[Zd] = Cd._TextureParser(Kd, kd, pd));
                break;
              case 2:
                dd[Zd] = Wd.c.FromArray(Kd);
                break;
              case 3:
                dd[Zd] = Cd._FresnelParametersParser(Kd);
                break;
              case 4:
                dd[Zd] = Pd.k.FromArray(Kd);
                break;
              case 5:
                dd[Zd] = Pd.n.FromArray(Kd);
                break;
              case 6:
                kd && (dd[Zd] = kd.getLastMeshById(Kd));
                break;
              case 7:
                dd[Zd] = Cd._ColorCurvesParser(Kd);
                break;
              case 8:
                dd[Zd] = Wd.g.FromArray(Kd);
                break;
              case 9:
                dd[Zd] = Cd._ImageProcessingConfigurationParser(Kd);
                break;
              case 10:
                dd[Zd] = Pd.d.FromArray(Kd);
                break;
              case 11:
                kd && (dd[Zd] = kd.getCameraById(Kd));
                break;
              case 12:
                dd[Zd] = Pd.b.FromArray(Kd);
                break;
              case 13:
                dd[Zd] = Pd.o.FromArray(Kd)
            }
          }
        }
      }
      static Parse(dd, Jd, kd) {
        let pd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const Wd = dd();
        return Nd.c && Nd.c.AddTagsTo(Wd, Jd.tags), Cd.ParseProperties(Jd, Wd, kd, pd), Wd
      }
      static Clone(dd, Jd) {
        return gd(dd, Jd, !1, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {})
      }
      static Instanciate(dd, Jd) {
        return gd(dd, Jd, !0)
      }
    }
    Cd.AllowLoadingUniqueId = !1, Cd._ImageProcessingConfigurationParser = dd => {
      throw (0, pd.n)("ImageProcessingConfiguration")
    }, Cd._FresnelParametersParser = dd => {
      throw (0, pd.n)("FresnelParameters")
    }, Cd._ColorCurvesParser = dd => {
      throw (0, pd.n)("ColorCurves")
    }, Cd._TextureParser = (dd, Jd, kd) => {
      throw (0, pd.n)("Texture")
    }
  },
  39915: (dd, Jd, kd) => {
    kd.d(Jd, {
      b: () => Nd
    });
    var pd = kd(39876);
    class Nd {
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
        this._totalValueCount++, this._current = 0, this._hasCurrentValue = Nd.Enabled, this._lastSecValueCount++
      }
      addCount(dd, Jd) {
        Nd.Enabled && (this._current += dd, this._hasCurrentValue = !0, Jd && this._fetchResult())
      }
      beginMonitoring() {
        Nd.Enabled && (this._startMonitoringTime = pd.d.Now)
      }
      endMonitoring() {
        let dd = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        if (!Nd.Enabled) return;
        dd && this.fetchNewFrame();
        const Jd = pd.d.Now;
        this._current = Jd - this._startMonitoringTime, this._hasCurrentValue = !0, dd && this._fetchResult()
      }
      aG() {
        this._fetchResult()
      }
      _fetchResult() {
        if (!this._hasCurrentValue) return;
        this._totalAccumulated += this._current, this._lastSecAccumulated += this._current, this._hasResult ? (this._min = Math.min(this._min, this._current), this._max = Math.max(this._max, this._current)) : (this._min = this._current, this._max = this._current, this._hasResult = !0), this._average = this._totalAccumulated / this._totalValueCount;
        const dd = pd.d.Now;
        dd - this._lastSecTime > 1e3 && (this._lastSecAverage = this._lastSecAccumulated / this._lastSecValueCount, this._lastSecTime = dd, this._lastSecAccumulated = 0, this._lastSecValueCount = 0)
      }
    }
    Nd.Enabled = !0
  },
  40080: (dd, Jd, kd) => {
    kd.d(Jd, {
      d: () => Nd,
      h: () => pd
    });
    class pd {
      constructor(dd) {
        this.length = 0, this.data = new Array(dd), this._id = pd._GlobalId++
      }
      push(dd) {
        this.data[this.length++] = dd, this.length > this.data.length && (this.data.length *= 2)
      }
      forEach(dd) {
        for (let Jd = 0; Jd < this.length; Jd++) dd(this.data[Jd])
      }
      sort(dd) {
        this.data.sort(dd)
      }
      reset() {
        this.length = 0
      }
      dispose() {
        this.reset(), this.data && (this.data.length = 0)
      }
      concat(dd) {
        if (0 !== dd.length) {
          this.length + dd.length > this.data.length && (this.data.length = 2 * (this.length + dd.length));
          for (let Jd = 0; Jd < dd.length; Jd++) this.data[this.length++] = (dd.data || dd)[Jd]
        }
      }
      indexOf(dd) {
        const Jd = this.data.indexOf(dd);
        return Jd >= this.length ? -1 : Jd
      }
      contains(dd) {
        return -1 !== this.indexOf(dd)
      }
    }
    pd._GlobalId = 0;
    class Nd extends pd {
      constructor() {
        super(...arguments), this._duplicateId = 0
      }
      push(dd) {
        super.push(dd), dd.__smartArrayFlags || (dd.__smartArrayFlags = {}), dd.__smartArrayFlags[this._id] = this._duplicateId
      }
      pushNoDuplicate(dd) {
        return (!dd.__smartArrayFlags || dd.__smartArrayFlags[this._id] !== this._duplicateId) && (this.push(dd), !0)
      }
      reset() {
        super.reset(), this._duplicateId++
      }
      concatWithNoDuplicate(dd) {
        if (0 !== dd.length) {
          this.length + dd.length > this.data.length && (this.data.length = 2 * (this.length + dd.length));
          for (let Jd = 0; Jd < dd.length; Jd++) {
            const kd = (dd.data || dd)[Jd];
            this.pushNoDuplicate(kd)
          }
        }
      }
    }
  },
  39992: (dd, Jd, kd) => {
    kd.d(Jd, {
      c: () => Nd
    });
    class pd {
      static Eval(dd, Jd) {
        return "true" === (dd = dd.match(/\([^()]*\)/g) ? dd.replace(/\([^()]*\)/g, (dd => (dd = dd.slice(1, dd.length - 1), pd._HandleParenthesisContent(dd, Jd)))) : pd._HandleParenthesisContent(dd, Jd)) || "false" !== dd && pd.Eval(dd, Jd)
      }
      static _HandleParenthesisContent(dd, Jd) {
        let kd;
        Jd = Jd || (dd => "true" === dd);
        const Nd = dd.split("||");
        for (const Wd in Nd)
          if (Object.prototype.hasOwnProperty.call(Nd, Wd)) {
            let dd = pd._SimplifyNegation(Nd[Wd].trim());
            const Pd = dd.split("&&");
            if (Pd.length > 1)
              for (let Nd = 0; Nd < Pd.length; ++Nd) {
                const Wd = pd._SimplifyNegation(Pd[Nd].trim());
                if (kd = "true" !== Wd && "false" !== Wd ? "!" === Wd[0] ? !Jd(Wd.substring(1)) : Jd(Wd) : "true" === Wd, !kd) {
                  dd = "false";
                  break
                }
              }
            if (kd || "true" === dd) {
              kd = !0;
              break
            }
            kd = "true" !== dd && "false" !== dd ? "!" === dd[0] ? !Jd(dd.substring(1)) : Jd(dd) : "true" === dd
          } return kd ? "true" : "false"
      }
      static _SimplifyNegation(dd) {
        return "!true" === (dd = (dd = dd.replace(/^[\s!]+/, (dd => (dd = dd.replace(/[\s]/g, (() => ""))).length % 2 ? "!" : ""))).trim()) ? dd = "false" : "!false" === dd && (dd = "true"), dd
      }
    }
    class Nd {
      static EnableFor(dd) {
        dd._tags = dd._tags || {}, dd.hasTags = () => Nd.HasTags(dd), dd.addTags = Jd => Nd.AddTagsTo(dd, Jd), dd.removeTags = Jd => Nd.RemoveTagsFrom(dd, Jd), dd.matchesTagsQuery = Jd => Nd.MatchesQuery(dd, Jd)
      }
      static DisableFor(dd) {
        delete dd._tags, delete dd.hasTags, delete dd.addTags, delete dd.removeTags, delete dd.matchesTagsQuery
      }
      static HasTags(dd) {
        if (!dd._tags) return !1;
        const Jd = dd._tags;
        for (const kd in Jd)
          if (Object.prototype.hasOwnProperty.call(Jd, kd)) return !0;
        return !1
      }
      static GetTags(dd) {
        let Jd = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (!dd._tags) return null;
        if (Jd) {
          const Jd = [];
          for (const kd in dd._tags) Object.prototype.hasOwnProperty.call(dd._tags, kd) && !0 === dd._tags[kd] && Jd.push(kd);
          return Jd.join(" ")
        }
        return dd._tags
      }
      static AddTagsTo(dd, Jd) {
        if (!Jd) return;
        if ("string" !== typeof Jd) return;
        const kd = Jd.split(" ");
        for (const pd of kd) Nd._AddTagTo(dd, pd)
      }
      static _AddTagTo(dd, Jd) {
        "" !== (Jd = Jd.trim()) && "true" !== Jd && "false" !== Jd && (Jd.match(/[\s]/) || Jd.match(/^([!]|([|]|[&]){2})/) || (Nd.EnableFor(dd), dd._tags[Jd] = !0))
      }
      static RemoveTagsFrom(dd, Jd) {
        if (!Nd.HasTags(dd)) return;
        const kd = Jd.split(" ");
        for (const pd in kd) Nd._RemoveTagFrom(dd, kd[pd])
      }
      static _RemoveTagFrom(dd, Jd) {
        delete dd._tags[Jd]
      }
      static MatchesQuery(dd, Jd) {
        return void 0 === Jd || ("" === Jd ? Nd.HasTags(dd) : pd.Eval(Jd, (Jd => Nd.HasTags(dd) && dd._tags[Jd])))
      }
    }
  },
  40124: (dd, Jd, kd) => {
    kd.d(Jd, {
      d: () => Wd
    });
    var pd = kd(40115),
      Nd = kd(37280);
    class Wd {
      constructor(dd) {
        this._vertexBuffers = {}, this._activePostProcesses = [], this.onBeforeRenderObservable = new Nd.e, this._scene = dd
      }
      _prepareBuffers() {
        if (this._vertexBuffers[pd.j.PositionKind]) return;
        const dd = [];
        dd.push(1, 1), dd.push(-1, 1), dd.push(-1, -1), dd.push(1, -1), this._vertexBuffers[pd.j.PositionKind] = new pd.j(this._scene.eL(), dd, pd.j.PositionKind, !1, !1, 2), this._buildIndexBuffer()
      }
      _buildIndexBuffer() {
        const dd = [];
        dd.push(0), dd.push(1), dd.push(2), dd.push(0), dd.push(2), dd.push(3), this._indexBuffer = this._scene.eL().createIndexBuffer(dd)
      }
      _getActivePostProcesses(dd) {
        const Jd = this._activePostProcesses;
        Jd.length = 0;
        for (let kd = 0; kd < dd.length; kd++) {
          const pd = dd[kd];
          pd && Jd.push(pd)
        }
        return Jd
      }
      _rebuild() {
        const dd = this._vertexBuffers[pd.j.PositionKind];
        dd && (dd._rebuild(), this._buildIndexBuffer())
      }
      _prepareFrame() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const kd = this._scene.activeCamera;
        return !!kd && (Jd = Jd || this._getActivePostProcesses(kd._postProcesses), !(!Jd || 0 === Jd.length || !this._scene.postProcessesEnabled) && (Jd[0].activate(kd, dd, null !== Jd && void 0 !== Jd), !0))
      }
      directRender(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          kd = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          pd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          Nd = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
          Wd = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
          Pd = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : dd.length;
        const Zd = this._scene.eL();
        for (let gd = 0; gd < Pd; gd++) {
          gd < dd.length - 1 ? dd[gd + 1].activate(this._scene.activeCamera || this._scene, Jd?.texture) : (Jd ? Zd.bindFramebuffer(Jd, pd, void 0, void 0, kd, Nd) : Wd || Zd.restoreDefaultFramebuffer(), Zd._debugInsertMarker?.(`post process ${dd[gd].name} output`));
          const Pd = dd[gd],
            Cd = Pd.apply();
          Cd && (Pd.onBeforeRenderObservable.notifyObservers(Cd), this._prepareBuffers(), Zd.bindBuffers(this._vertexBuffers, this._indexBuffer, Cd), Zd.drawElementsType(0, 0, 6), Pd.onAfterRenderObservable.notifyObservers(Cd))
        }
        Zd.setDepthBuffer(!0), Zd.setDepthWrite(!0)
      }
      _finalizeFrame(dd, Jd, kd, pd) {
        let Nd = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const Wd = this._scene.activeCamera;
        if (!Wd) return;
        if (this.onBeforeRenderObservable.notifyObservers(this), 0 === (pd = pd || this._getActivePostProcesses(Wd._postProcesses)).length || !this._scene.postProcessesEnabled) return;
        const Pd = this._scene.eL();
        for (let Zd = 0, gd = pd.length; Zd < gd; Zd++) {
          const Cd = pd[Zd];
          if (Zd < gd - 1 ? Cd._outputTexture = pd[Zd + 1].activate(Wd, Jd?.texture) : (Jd ? (Pd.bindFramebuffer(Jd, kd, void 0, void 0, Nd), Cd._outputTexture = Jd) : (Pd.restoreDefaultFramebuffer(), Cd._outputTexture = null), Pd._debugInsertMarker?.(`post process ${pd[Zd].name} output`)), dd) break;
          const Kd = Cd.apply();
          Kd && (Cd.onBeforeRenderObservable.notifyObservers(Kd), this._prepareBuffers(), Pd.bindBuffers(this._vertexBuffers, this._indexBuffer, Kd), Pd.drawElementsType(0, 0, 6), Cd.onAfterRenderObservable.notifyObservers(Kd))
        }
        Pd.setDepthBuffer(!0), Pd.setDepthWrite(!0), Pd.setAlphaMode(0)
      }
      dispose() {
        const dd = this._vertexBuffers[pd.j.PositionKind];
        dd && (dd.dispose(), this._vertexBuffers[pd.j.PositionKind] = null), this._indexBuffer && (this._scene.eL()._releaseBuffer(this._indexBuffer), this._indexBuffer = null)
      }
    }
  },
  40139: (dd, Jd, kd) => {
    kd.d(Jd, {
      e: () => Wd
    });
    var pd = kd(40080),
      Nd = kd(37251);
    class Wd {
      set opaqueSortCompareFn(dd) {
        this._opaqueSortCompareFn = dd || Wd.PainterSortCompare, this._renderOpaque = this._renderOpaqueSorted
      }
      set alphaTestSortCompareFn(dd) {
        this._alphaTestSortCompareFn = dd || Wd.PainterSortCompare, this._renderAlphaTest = this._renderAlphaTestSorted
      }
      set transparentSortCompareFn(dd) {
        this._transparentSortCompareFn = dd || Wd.defaultTransparentSortCompare, this._renderTransparent = this._renderTransparentSorted
      }
      constructor(dd, Jd) {
        let kd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          Nd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          Wd = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
        this.index = dd, this._opaqueSubMeshes = new pd.h(256), this._transparentSubMeshes = new pd.h(256), this._alphaTestSubMeshes = new pd.h(256), this._depthOnlySubMeshes = new pd.h(256), this._particleSystems = new pd.h(256), this._spriteManagers = new pd.h(256), this._empty = !0, this._edgesRenderers = new pd.d(16), this.disableDepthPrePass = !1, this._scene = Jd, this.opaqueSortCompareFn = kd, this.alphaTestSortCompareFn = Nd, this.transparentSortCompareFn = Wd
      }
      render(dd, Jd, kd, pd) {
        let Nd = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          Wd = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          Pd = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
          Zd = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7],
          gd = arguments.length > 8 ? arguments[8] : void 0;
        if (dd) return void dd(this._opaqueSubMeshes, this._alphaTestSubMeshes, this._transparentSubMeshes, this._depthOnlySubMeshes);
        const Cd = this._scene.eL();
        Nd && 0 !== this._depthOnlySubMeshes.length && (Cd.setColorWrite(!1), this._renderAlphaTest(this._depthOnlySubMeshes), Cd.setColorWrite(!0)), Wd && 0 !== this._opaqueSubMeshes.length && this._renderOpaque(this._opaqueSubMeshes), Pd && 0 !== this._alphaTestSubMeshes.length && this._renderAlphaTest(this._alphaTestSubMeshes);
        const Kd = Cd.getStencilBuffer();
        if (Cd.setStencilBuffer(!1), Jd && this._renderSprites(), kd && this._renderParticles(pd), this.onBeforeTransparentRendering && this.onBeforeTransparentRendering(), Zd && (gd || 0 !== this._transparentSubMeshes.length || this._scene.useOrderIndependentTransparency)) {
          if (Cd.setStencilBuffer(Kd), gd) gd(this._transparentSubMeshes, this);
          else if (this._scene.useOrderIndependentTransparency) {
            const dd = this._scene.depthPeelingRenderer.render(this._transparentSubMeshes);
            dd.length && this._renderTransparent(dd)
          } else this._renderTransparent(this._transparentSubMeshes);
          Cd.setAlphaMode(0)
        }
        if (Cd.setStencilBuffer(!1), Wd && this._edgesRenderers.length) {
          for (let dd = 0; dd < this._edgesRenderers.length; dd++) this._edgesRenderers.data[dd].render();
          Cd.setAlphaMode(0)
        }
        Cd.setStencilBuffer(Kd)
      }
      _renderOpaqueSorted(dd) {
        Wd._RenderSorted(dd, this._opaqueSortCompareFn, this._scene.activeCamera, !1, this.disableDepthPrePass)
      }
      _renderAlphaTestSorted(dd) {
        Wd._RenderSorted(dd, this._alphaTestSortCompareFn, this._scene.activeCamera, !1, this.disableDepthPrePass)
      }
      _renderTransparentSorted(dd) {
        Wd._RenderSorted(dd, this._transparentSortCompareFn, this._scene.activeCamera, !0, this.disableDepthPrePass)
      }
      static _RenderSorted(dd, Jd, kd, pd, Pd) {
        let Zd, gd = 0;
        const Cd = kd ? kd.globalPosition : Wd._ZeroVector;
        if (pd && Jd !== Wd.PainterSortCompare)
          for (; gd < dd.length; gd++) Zd = dd.data[gd], Zd._alphaIndex = Zd.getMesh().alphaIndex, Zd._distanceToCamera = Nd.n.Distance(Zd.pU().zpd.centerWorld, Cd);
        const Kd = dd.length === dd.data.length ? dd.data : dd.data.slice(0, dd.length);
        Jd && Kd.sort(Jd);
        const od = Kd[0].getMesh().Wm();
        for (gd = 0; gd < Kd.length; gd++) {
          if (Zd = Kd[gd], od._activeMeshesFrozenButKeepClipping && !Zd.isInFrustum(od._frustumPlanes)) continue;
          let dd = !1;
          if (pd) {
            const Jd = Zd.qL();
            if (Jd && Jd.needDepthPrePass && !Pd) {
              dd = !0;
              const kd = Jd.Wm().eL();
              kd.setColorWrite(!1), kd.setAlphaMode(0), Zd.render(!1), kd.setColorWrite(!0)
            }
          }
          const Jd = Zd._renderingMesh;
          !dd && Jd._renderRunFollower(Zd, pd) || Zd.render(pd)
        }
      }
      static defaultTransparentSortCompare(dd, Jd) {
        return dd._alphaIndex > Jd._alphaIndex ? 1 : dd._alphaIndex < Jd._alphaIndex ? -1 : Wd.backToFrontSortCompare(dd, Jd)
      }
      static backToFrontSortCompare(dd, Jd) {
        return dd._distanceToCamera < Jd._distanceToCamera ? 1 : dd._distanceToCamera > Jd._distanceToCamera ? -1 : 0
      }
      static frontToBackSortCompare(dd, Jd) {
        return dd._distanceToCamera < Jd._distanceToCamera ? -1 : dd._distanceToCamera > Jd._distanceToCamera ? 1 : 0
      }
      static PainterSortCompare(dd, Jd) {
        const kd = dd.getMesh(),
          pd = Jd.getMesh();
        return kd.material && pd.material ? kd.material.uniqueId - pd.material.uniqueId : kd.uniqueId - pd.uniqueId
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
      dispatch(dd, Jd, kd) {
        void 0 === Jd && (Jd = dd.getMesh()), void 0 === kd && (kd = dd.qL()), null !== kd && void 0 !== kd && (kd.needAlphaBlendingForMesh(Jd) ? this._transparentSubMeshes.push(dd) : kd.needAlphaTestingForMesh(Jd) ? (kd.needDepthPrePass && !this.disableDepthPrePass && this._depthOnlySubMeshes.push(dd), this._alphaTestSubMeshes.push(dd)) : (kd.needDepthPrePass && !this.disableDepthPrePass && this._depthOnlySubMeshes.push(dd), this._opaqueSubMeshes.push(dd)), Jd._renderingGroup = this, Jd._edgesRenderer && Jd.isEnabled() && Jd.isVisible && Jd._edgesRenderer.isEnabled && this._edgesRenderers.pushNoDuplicate(Jd._edgesRenderer), this._empty = !1)
      }
      dispatchSprites(dd) {
        this._spriteManagers.push(dd), this._empty = !1
      }
      dispatchParticles(dd) {
        this._particleSystems.push(dd), this._empty = !1
      }
      _renderParticles(dd) {
        if (0 === this._particleSystems.length) return;
        const Jd = this._scene.activeCamera;
        this._scene.onBeforeParticlesRenderingObservable.notifyObservers(this._scene);
        for (let kd = 0; kd < this._particleSystems.length; kd++) {
          const pd = this._particleSystems.data[kd];
          if (0 === (Jd && Jd.layerMask & pd.layerMask)) continue;
          const Nd = pd.emitter;
          Nd.position && dd && -1 === dd.indexOf(Nd) || this._scene._activeParticles.addCount(pd.render(), !1)
        }
        this._scene.onAfterParticlesRenderingObservable.notifyObservers(this._scene)
      }
      _renderSprites() {
        if (!this._scene.spritesEnabled || 0 === this._spriteManagers.length) return;
        const dd = this._scene.activeCamera;
        this._scene.onBeforeSpritesRenderingObservable.notifyObservers(this._scene);
        for (let Jd = 0; Jd < this._spriteManagers.length; Jd++) {
          const kd = this._spriteManagers.data[Jd];
          0 !== (dd && dd.layerMask & kd.layerMask) && kd.render()
        }
        this._scene.onAfterSpritesRenderingObservable.notifyObservers(this._scene)
      }
    }
    Wd._ZeroVector = Nd.n.Zero()
  },
  40131: (dd, Jd, kd) => {
    kd.d(Jd, {
      b: () => Wd
    });
    var pd = kd(40139);
    class Nd {}
    class Wd {
      get disableDepthPrePass() {
        return this._disableDepthPrePass
      }
      set disableDepthPrePass(dd) {
        this._disableDepthPrePass = dd;
        for (const Jd of this._renderingGroups) Jd.disableDepthPrePass = dd
      }
      get maintainStateBetweenFrames() {
        return this._maintainStateBetweenFrames
      }
      set maintainStateBetweenFrames(dd) {
        dd !== this._maintainStateBetweenFrames && (this._maintainStateBetweenFrames = dd, this._maintainStateBetweenFrames || this.restoreDispachedFlags())
      }
      restoreDispachedFlags() {
        for (const dd of this._scene.meshes)
          if (dd.rG)
            for (const Jd of dd.rG) Jd._wasDispatched = !1;
        if (this._scene.spriteManagers)
          for (const dd of this._scene.spriteManagers) dd._wasDispatched = !1;
        for (const dd of this._scene.Qv) dd._wasDispatched = !1
      }
      constructor(dd) {
        this._useSceneAutoClearSetup = !1, this._disableDepthPrePass = !1, this._renderingGroups = new Array, this._autoClearDepthStencil = {}, this._customOpaqueSortCompareFn = {}, this._customAlphaTestSortCompareFn = {}, this._customTransparentSortCompareFn = {}, this._renderingGroupInfo = new Nd, this._maintainStateBetweenFrames = !1, this._scene = dd;
        for (let Jd = Wd.MIN_RENDERINGGROUPS; Jd < Wd.MAX_RENDERINGGROUPS; Jd++) this._autoClearDepthStencil[Jd] = {
          autoClear: !0,
          depth: !0,
          stencil: !0
        }
      }
      get renderingGroups() {
        return this._renderingGroups
      }
      getRenderingGroup(dd) {
        const Jd = dd || 0;
        return this._prepareRenderingGroup(Jd), this._renderingGroups[Jd]
      }
      _clearDepthStencilBuffer() {
        let dd = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          Jd = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this._depthStencilBufferAlreadyCleaned || (this._scene.eL().clear(null, !1, dd, Jd), this._depthStencilBufferAlreadyCleaned = !0)
      }
      render(dd, Jd, kd, pd) {
        let Nd = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          Pd = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          Zd = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
          gd = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7],
          Cd = arguments.length > 8 ? arguments[8] : void 0,
          Kd = arguments.length > 9 ? arguments[9] : void 0;
        const od = this._renderingGroupInfo;
        od.BO = this._scene, od.camera = this._scene.activeCamera, od.renderingManager = this;
        const ld = Kd ?? this._scene.spriteManagers;
        if (ld && pd)
          for (let Wd = 0; Wd < ld.length; Wd++) {
            const dd = ld[Wd];
            this.dispatchSprites(dd)
          }
        for (let Qd = Wd.MIN_RENDERINGGROUPS; Qd < Wd.MAX_RENDERINGGROUPS; Qd++) {
          this._depthStencilBufferAlreadyCleaned = Qd === Wd.MIN_RENDERINGGROUPS;
          const Kd = this._renderingGroups[Qd];
          if (!Kd || Kd._empty) continue;
          const ld = 1 << Qd;
          if (od.renderingGroupId = Qd, this._scene.onBeforeRenderingGroupObservable.notifyObservers(od, ld), Wd.AUTOCLEAR) {
            const dd = this._useSceneAutoClearSetup ? this._scene.getAutoClearDepthStencilSetup(Qd) : this._autoClearDepthStencil[Qd];
            dd && dd.autoClear && this._clearDepthStencilBuffer(dd.depth, dd.stencil)
          }
          for (let dd = 0, Jd = this._scene._beforeRenderingGroupDrawStage; dd < Jd.length; dd++) {
            Jd[dd].action(Qd)
          }
          Kd.render(dd, pd, kd, Jd, Nd, Pd, Zd, gd, Cd);
          for (let dd = 0, Jd = this._scene._afterRenderingGroupDrawStage; dd < Jd.length; dd++) {
            Jd[dd].action(Qd)
          }
          this._scene.onAfterRenderingGroupObservable.notifyObservers(od, ld)
        }
      }
      reset() {
        if (!this.maintainStateBetweenFrames)
          for (let dd = Wd.MIN_RENDERINGGROUPS; dd < Wd.MAX_RENDERINGGROUPS; dd++) {
            const Jd = this._renderingGroups[dd];
            Jd && Jd.prepare()
          }
      }
      resetSprites() {
        if (!this.maintainStateBetweenFrames)
          for (let dd = Wd.MIN_RENDERINGGROUPS; dd < Wd.MAX_RENDERINGGROUPS; dd++) {
            const Jd = this._renderingGroups[dd];
            Jd && Jd.prepareSprites()
          }
      }
      dispose() {
        this.freeRenderingGroups(), this._renderingGroups.length = 0, this._renderingGroupInfo = null
      }
      freeRenderingGroups() {
        for (let dd = Wd.MIN_RENDERINGGROUPS; dd < Wd.MAX_RENDERINGGROUPS; dd++) {
          const Jd = this._renderingGroups[dd];
          Jd && Jd.dispose()
        }
      }
      _prepareRenderingGroup(dd) {
        void 0 === this._renderingGroups[dd] && (this._renderingGroups[dd] = new pd.e(dd, this._scene, this._customOpaqueSortCompareFn[dd], this._customAlphaTestSortCompareFn[dd], this._customTransparentSortCompareFn[dd]), this._renderingGroups[dd].disableDepthPrePass = this._disableDepthPrePass)
      }
      dispatchSprites(dd) {
        this.maintainStateBetweenFrames && dd._wasDispatched || (dd._wasDispatched = !0, this.getRenderingGroup(dd.renderingGroupId).dispatchSprites(dd))
      }
      dispatchParticles(dd) {
        this.maintainStateBetweenFrames && dd._wasDispatched || (dd._wasDispatched = !0, this.getRenderingGroup(dd.renderingGroupId).dispatchParticles(dd))
      }
      dispatch(dd, Jd, kd) {
        void 0 === Jd && (Jd = dd.getMesh()), this.maintainStateBetweenFrames && dd._wasDispatched || (dd._wasDispatched = !0, this.getRenderingGroup(Jd.renderingGroupId).dispatch(dd, Jd, kd))
      }
      setRenderingOrder(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          kd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          pd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        if (this._customOpaqueSortCompareFn[dd] = Jd, this._customAlphaTestSortCompareFn[dd] = kd, this._customTransparentSortCompareFn[dd] = pd, this._renderingGroups[dd]) {
          const Jd = this._renderingGroups[dd];
          Jd.opaqueSortCompareFn = this._customOpaqueSortCompareFn[dd], Jd.alphaTestSortCompareFn = this._customAlphaTestSortCompareFn[dd], Jd.transparentSortCompareFn = this._customTransparentSortCompareFn[dd]
        }
      }
      setRenderingAutoClearDepthStencil(dd, Jd) {
        let kd = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          pd = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        this._autoClearDepthStencil[dd] = {
          autoClear: Jd,
          depth: kd,
          stencil: pd
        }
      }
      getAutoClearDepthStencilSetup(dd) {
        return this._autoClearDepthStencil[dd]
      }
    }
    Wd.MAX_RENDERINGGROUPS = 4, Wd.MIN_RENDERINGGROUPS = 0, Wd.AUTOCLEAR = !0
  },
  39883: (dd, Jd, kd) => {
    kd.d(Jd, {
      e: () => pd
    });
    class pd {
      constructor(dd) {
        this._supportBlendParametersPerTarget = dd, this._blendFunctionParameters = new Array(32), this._blendEquationParameters = new Array(16), this._blendConstants = new Array(4), this._isBlendConstantsDirty = !1, this._alphaBlend = Array(8).fill(!1), this._numTargetEnabled = 0, this._isAlphaBlendDirty = !1, this._isBlendFunctionParametersDirty = !1, this._isBlendEquationParametersDirty = !1, this._blendDisabledTargetsMask = 0, this._numTargets = 1, this.reset()
      }
      get isDirty() {
        return this._isAlphaBlendDirty || this._isBlendFunctionParametersDirty || this._isBlendEquationParametersDirty
      }
      get alphaBlend() {
        return this._numTargetEnabled > 0
      }
      set alphaBlend(dd) {
        this.setAlphaBlend(dd)
      }
      setAlphaBlend(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        this._alphaBlend[Jd] !== dd && (dd ? this._numTargetEnabled++ : this._numTargetEnabled--, this._alphaBlend[Jd] = dd, this._isAlphaBlendDirty = !0)
      }
      setAlphaBlendConstants(dd, Jd, kd, pd) {
        this._blendConstants[0] === dd && this._blendConstants[1] === Jd && this._blendConstants[2] === kd && this._blendConstants[3] === pd || (this._blendConstants[0] = dd, this._blendConstants[1] = Jd, this._blendConstants[2] = kd, this._blendConstants[3] = pd, this._isBlendConstantsDirty = !0)
      }
      setAlphaBlendFunctionParameters(dd, Jd, kd, pd) {
        const Nd = 4 * (arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0);
        this._blendFunctionParameters[Nd + 0] === dd && this._blendFunctionParameters[Nd + 1] === Jd && this._blendFunctionParameters[Nd + 2] === kd && this._blendFunctionParameters[Nd + 3] === pd || (this._blendFunctionParameters[Nd + 0] = dd, this._blendFunctionParameters[Nd + 1] = Jd, this._blendFunctionParameters[Nd + 2] = kd, this._blendFunctionParameters[Nd + 3] = pd, this._isBlendFunctionParametersDirty = !0)
      }
      setAlphaEquationParameters(dd, Jd) {
        const kd = 2 * (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0);
        this._blendEquationParameters[kd + 0] === dd && this._blendEquationParameters[kd + 1] === Jd || (this._blendEquationParameters[kd + 0] = dd, this._blendEquationParameters[kd + 1] = Jd, this._isBlendEquationParametersDirty = !0)
      }
      reset() {
        this._alphaBlend.fill(!1), this._numTargetEnabled = 0, this._blendFunctionParameters.fill(null), this._blendEquationParameters.fill(null), this._blendConstants[0] = null, this._blendConstants[1] = null, this._blendConstants[2] = null, this._blendConstants[3] = null, this._isAlphaBlendDirty = !0, this._isBlendFunctionParametersDirty = !1, this._isBlendEquationParametersDirty = !1, this._isBlendConstantsDirty = !1, this._blendDisabledTargetsMask = 0, this._numTargets = 1
      }
      apply(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          kd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (this._numTargets !== Jd && (this._numTargets = Jd, this._isAlphaBlendDirty = !0), this._blendDisabledTargetsMask !== kd && (this._blendDisabledTargetsMask = kd, this._isAlphaBlendDirty = !0), !this.isDirty) return;
        if (this._isBlendConstantsDirty && (dd.blendColor(this._blendConstants[0], this._blendConstants[1], this._blendConstants[2], this._blendConstants[3]), this._isBlendConstantsDirty = !1), 1 === Jd || !this._supportBlendParametersPerTarget) {
          if (this._isAlphaBlendDirty) {
            if (Jd > 1 && 0 !== kd && this.alphaBlend) throw new Error("AlphaState: blending with integer MRT attachments requires per-target blend parameters");
            this._alphaBlend[0] && 0 === (1 & kd) ? dd.enable(dd.BLEND) : dd.disable(dd.BLEND), this._isAlphaBlendDirty = !1
          }
          return this._isBlendFunctionParametersDirty && (dd.blendFuncSeparate(this._blendFunctionParameters[0], this._blendFunctionParameters[1], this._blendFunctionParameters[2], this._blendFunctionParameters[3]), this._isBlendFunctionParametersDirty = !1), void(this._isBlendEquationParametersDirty && (dd.blendEquationSeparate(this._blendEquationParameters[0], this._blendEquationParameters[1]), this._isBlendEquationParametersDirty = !1))
        }
        const pd = dd;
        if (this._isAlphaBlendDirty) {
          for (let Nd = 0; Nd < Jd; Nd++) {
            const Jd = Nd < this._numTargetEnabled ? Nd : 0;
            this._alphaBlend[Jd] && 0 === (kd & 1 << Nd) ? pd.enableIndexed(dd.BLEND, Nd) : pd.disableIndexed(dd.BLEND, Nd)
          }
          this._isAlphaBlendDirty = !1
        }
        if (this._isBlendFunctionParametersDirty) {
          for (let dd = 0; dd < Jd; dd++) {
            const Jd = dd < this._numTargetEnabled ? 4 * dd : 0;
            pd.blendFuncSeparateIndexed(dd, this._blendFunctionParameters[Jd + 0], this._blendFunctionParameters[Jd + 1], this._blendFunctionParameters[Jd + 2], this._blendFunctionParameters[Jd + 3])
          }
          this._isBlendFunctionParametersDirty = !1
        }
        if (this._isBlendEquationParametersDirty) {
          for (let dd = 0; dd < Jd; dd++) {
            const Jd = dd < this._numTargetEnabled ? 2 * dd : 0;
            pd.blendEquationSeparateIndexed(dd, this._blendEquationParameters[Jd + 0], this._blendEquationParameters[Jd + 1])
          }
          this._isBlendEquationParametersDirty = !1
        }
      }
      setAlphaMode(dd, Jd) {
        let kd = 32774;
        switch (dd) {
          case 0:
            break;
          case 7:
            this.setAlphaBlendFunctionParameters(1, 771, 1, 1, Jd);
            break;
          case 8:
          case 14:
            this.setAlphaBlendFunctionParameters(1, 771, 1, 771, Jd);
            break;
          case 2:
            this.setAlphaBlendFunctionParameters(770, 771, 1, 1, Jd);
            break;
          case 6:
            this.setAlphaBlendFunctionParameters(1, 1, 0, 1, Jd);
            break;
          case 1:
            this.setAlphaBlendFunctionParameters(770, 1, 0, 1, Jd);
            break;
          case 3:
            this.setAlphaBlendFunctionParameters(0, 769, 1, 1, Jd);
            break;
          case 4:
            this.setAlphaBlendFunctionParameters(774, 0, 1, 1, Jd);
            break;
          case 5:
            this.setAlphaBlendFunctionParameters(770, 769, 1, 1, Jd);
            break;
          case 9:
            this.setAlphaBlendFunctionParameters(32769, 32770, 32771, 32772, Jd);
            break;
          case 10:
            this.setAlphaBlendFunctionParameters(1, 769, 1, 771, Jd);
            break;
          case 11:
            this.setAlphaBlendFunctionParameters(1, 1, 1, 1, Jd);
            break;
          case 12:
            this.setAlphaBlendFunctionParameters(772, 1, 0, 0, Jd);
            break;
          case 13:
            this.setAlphaBlendFunctionParameters(775, 769, 773, 771, Jd);
            break;
          case 15:
            this.setAlphaBlendFunctionParameters(1, 1, 1, 0, Jd);
            break;
          case 16:
            this.setAlphaBlendFunctionParameters(775, 769, 0, 1, Jd);
            break;
          case 17:
            this.setAlphaBlendFunctionParameters(770, 771, 1, 771, Jd);
            break;
          case 18:
            this.setAlphaBlendFunctionParameters(1, 1, 1, 1, Jd), kd = 32775;
            break;
          case 19:
            this.setAlphaBlendFunctionParameters(1, 1, 1, 1, Jd), kd = 32776;
            break;
          case 20:
            this.setAlphaBlendFunctionParameters(1, 35065, 0, 1, Jd);
            break;
          case 21:
            this.setAlphaBlendFunctionParameters(1, 0, 1, 771, Jd)
        }
        this.setAlphaEquationParameters(kd, kd, Jd)
      }
    }
  },
  40178: (dd, Jd, kd) => {
    kd.d(Jd, {
      c: () => pd
    });
    class pd {}
    pd._IsPickingAvailable = !1
  },
  40062: (dd, Jd, kd) => {
    kd.d(Jd, {
      e: () => gk,
      i: () => Pk
    });
    var pd = kd(40066),
      Nd = kd(39866),
      Wd = kd(39876),
      Pd = kd(37280),
      Zd = kd(40080);
    class gd {
      constructor() {
        this._count = 0, this._data = {}
      }
      Fs(dd) {
        this.clear(), dd.forEach(((dd, Jd) => this.add(dd, Jd)))
      }
      get(dd) {
        const Jd = this._data[dd];
        if (void 0 !== Jd) return Jd
      }
      getOrAddWithFactory(dd, Jd) {
        let kd = this.get(dd);
        return void 0 !== kd || (kd = Jd(dd), kd && this.add(dd, kd)), kd
      }
      getOrAdd(dd, Jd) {
        const kd = this.get(dd);
        return void 0 !== kd ? kd : (this.add(dd, Jd), Jd)
      }
      contains(dd) {
        return void 0 !== this._data[dd]
      }
      add(dd, Jd) {
        return void 0 === this._data[dd] && (this._data[dd] = Jd, ++this._count, !0)
      }
      set(dd, Jd) {
        return void 0 !== this._data[dd] && (this._data[dd] = Jd, !0)
      }
      getAndRemove(dd) {
        const Jd = this.get(dd);
        return void 0 !== Jd ? (delete this._data[dd], --this._count, Jd) : null
      }
      remove(dd) {
        return !!this.contains(dd) && (delete this._data[dd], --this._count, !0)
      }
      clear() {
        this._data = {}, this._count = 0
      }
      get count() {
        return this._count
      }
      forEach(dd) {
        for (const Jd in this._data) {
          dd(Jd, this._data[Jd])
        }
      }
      first(dd) {
        for (const Jd in this._data) {
          const kd = dd(Jd, this._data[Jd]);
          if (kd) return kd
        }
        return null
      }
    }
    var Cd = kd(39992),
      Kd = kd(37251),
      od = kd(40083),
      ld = kd(40101),
      Qd = kd(40107);
    class Ld {
      constructor(dd, Jd, kd, pd, Nd, Wd) {
        this.source = dd, this.pointerX = Jd, this.pointerY = kd, this.meshUnderPointer = pd, this.sourceEvent = Nd, this.additionalData = Wd
      }
      static CreateNew(dd, Jd, kd) {
        const pd = dd.Wm();
        return new Ld(dd, pd.pointerX, pd.pointerY, pd.meshUnderPointer || dd, Jd, kd)
      }
      static CreateNewFromSprite(dd, Jd, kd, pd) {
        return new Ld(dd, Jd.pointerX, Jd.pointerY, Jd.meshUnderPointer, kd, pd)
      }
      static CreateNewFromScene(dd, Jd) {
        return new Ld(null, dd.pointerX, dd.pointerY, dd.meshUnderPointer, Jd)
      }
      static CreateNewFromPrimitive(dd, Jd, kd, pd) {
        return new Ld(dd, Jd.x, Jd.y, null, kd, pd)
      }
    }
    var Od = kd(40124),
      ed = kd(40129),
      Rd = kd(40131),
      Id = kd(40147),
      Gd = kd(39840),
      vd = kd(37277),
      xd = kd(39860),
      qd = kd(40156);
    class Bd {
      constructor() {
        this.hoverCursor = "", this.actions = [], this.isRecursive = !1, this.disposeWhenUnowned = !0
      }
      static get HasTriggers() {
        for (const dd in Bd.Triggers)
          if (Object.prototype.hasOwnProperty.call(Bd.Triggers, dd)) return !0;
        return !1
      }
      static get HasPickTriggers() {
        for (const dd in Bd.Triggers)
          if (Object.prototype.hasOwnProperty.call(Bd.Triggers, dd)) {
            const Jd = parseInt(dd);
            if (Jd >= 1 && Jd <= 7) return !0
          } return !1
      }
      static HasSpecificTrigger(dd) {
        for (const Jd in Bd.Triggers)
          if (Object.prototype.hasOwnProperty.call(Bd.Triggers, Jd)) {
            if (parseInt(Jd) === dd) return !0
          } return !1
      }
    }
    Bd.Triggers = {};
    var sd, ad, Md, Fd, Yd, md, bd, Sd = kd(40164);
    ! function(dd) {
      dd[dd.Generic = 0] = "Generic", dd[dd.Keyboard = 1] = "Keyboard", dd[dd.Mouse = 2] = "Mouse", dd[dd.Touch = 3] = "Touch", dd[dd.DualShock = 4] = "DualShock", dd[dd.Xbox = 5] = "Xbox", dd[dd.Switch = 6] = "Switch", dd[dd.DualSense = 7] = "DualSense"
    }(sd || (sd = {})),
    function(dd) {
      dd[dd.Horizontal = 0] = "Horizontal", dd[dd.Vertical = 1] = "Vertical", dd[dd.LeftClick = 2] = "LeftClick", dd[dd.MiddleClick = 3] = "MiddleClick", dd[dd.RightClick = 4] = "RightClick", dd[dd.BrowserBack = 5] = "BrowserBack", dd[dd.BrowserForward = 6] = "BrowserForward", dd[dd.MouseWheelX = 7] = "MouseWheelX", dd[dd.MouseWheelY = 8] = "MouseWheelY", dd[dd.MouseWheelZ = 9] = "MouseWheelZ", dd[dd.Move = 12] = "Move"
    }(ad || (ad = {})),
    function(dd) {
      dd[dd.Horizontal = 0] = "Horizontal", dd[dd.Vertical = 1] = "Vertical", dd[dd.LeftClick = 2] = "LeftClick", dd[dd.MiddleClick = 3] = "MiddleClick", dd[dd.RightClick = 4] = "RightClick", dd[dd.BrowserBack = 5] = "BrowserBack", dd[dd.BrowserForward = 6] = "BrowserForward", dd[dd.MouseWheelX = 7] = "MouseWheelX", dd[dd.MouseWheelY = 8] = "MouseWheelY", dd[dd.MouseWheelZ = 9] = "MouseWheelZ", dd[dd.DeltaHorizontal = 10] = "DeltaHorizontal", dd[dd.DeltaVertical = 11] = "DeltaVertical"
    }(Md || (Md = {})),
    function(dd) {
      dd[dd.Cross = 0] = "Cross", dd[dd.Circle = 1] = "Circle", dd[dd.Square = 2] = "Square", dd[dd.Triangle = 3] = "Triangle", dd[dd.L1 = 4] = "L1", dd[dd.R1 = 5] = "R1", dd[dd.L2 = 6] = "L2", dd[dd.R2 = 7] = "R2", dd[dd.Share = 8] = "Share", dd[dd.Options = 9] = "Options", dd[dd.L3 = 10] = "L3", dd[dd.R3 = 11] = "R3", dd[dd.DPadUp = 12] = "DPadUp", dd[dd.DPadDown = 13] = "DPadDown", dd[dd.DPadLeft = 14] = "DPadLeft", dd[dd.DPadRight = 15] = "DPadRight", dd[dd.Home = 16] = "Home", dd[dd.TouchPad = 17] = "TouchPad", dd[dd.LStickXAxis = 18] = "LStickXAxis", dd[dd.LStickYAxis = 19] = "LStickYAxis", dd[dd.RStickXAxis = 20] = "RStickXAxis", dd[dd.RStickYAxis = 21] = "RStickYAxis"
    }(Fd || (Fd = {})),
    function(dd) {
      dd[dd.Cross = 0] = "Cross", dd[dd.Circle = 1] = "Circle", dd[dd.Square = 2] = "Square", dd[dd.Triangle = 3] = "Triangle", dd[dd.L1 = 4] = "L1", dd[dd.R1 = 5] = "R1", dd[dd.L2 = 6] = "L2", dd[dd.R2 = 7] = "R2", dd[dd.Create = 8] = "Create", dd[dd.Options = 9] = "Options", dd[dd.L3 = 10] = "L3", dd[dd.R3 = 11] = "R3", dd[dd.DPadUp = 12] = "DPadUp", dd[dd.DPadDown = 13] = "DPadDown", dd[dd.DPadLeft = 14] = "DPadLeft", dd[dd.DPadRight = 15] = "DPadRight", dd[dd.Home = 16] = "Home", dd[dd.TouchPad = 17] = "TouchPad", dd[dd.LStickXAxis = 18] = "LStickXAxis", dd[dd.LStickYAxis = 19] = "LStickYAxis", dd[dd.RStickXAxis = 20] = "RStickXAxis", dd[dd.RStickYAxis = 21] = "RStickYAxis"
    }(Yd || (Yd = {})),
    function(dd) {
      dd[dd.A = 0] = "A", dd[dd.B = 1] = "B", dd[dd.X = 2] = "X", dd[dd.Y = 3] = "Y", dd[dd.LB = 4] = "LB", dd[dd.RB = 5] = "RB", dd[dd.LT = 6] = "LT", dd[dd.RT = 7] = "RT", dd[dd.Back = 8] = "Back", dd[dd.Start = 9] = "Start", dd[dd.LS = 10] = "LS", dd[dd.RS = 11] = "RS", dd[dd.DPadUp = 12] = "DPadUp", dd[dd.DPadDown = 13] = "DPadDown", dd[dd.DPadLeft = 14] = "DPadLeft", dd[dd.DPadRight = 15] = "DPadRight", dd[dd.Home = 16] = "Home", dd[dd.LStickXAxis = 17] = "LStickXAxis", dd[dd.LStickYAxis = 18] = "LStickYAxis", dd[dd.RStickXAxis = 19] = "RStickXAxis", dd[dd.RStickYAxis = 20] = "RStickYAxis"
    }(md || (md = {})),
    function(dd) {
      dd[dd.B = 0] = "B", dd[dd.A = 1] = "A", dd[dd.Y = 2] = "Y", dd[dd.X = 3] = "X", dd[dd.L = 4] = "L", dd[dd.R = 5] = "R", dd[dd.ZL = 6] = "ZL", dd[dd.ZR = 7] = "ZR", dd[dd.Minus = 8] = "Minus", dd[dd.Plus = 9] = "Plus", dd[dd.LS = 10] = "LS", dd[dd.RS = 11] = "RS", dd[dd.DPadUp = 12] = "DPadUp", dd[dd.DPadDown = 13] = "DPadDown", dd[dd.DPadLeft = 14] = "DPadLeft", dd[dd.DPadRight = 15] = "DPadRight", dd[dd.Home = 16] = "Home", dd[dd.Capture = 17] = "Capture", dd[dd.LStickXAxis = 18] = "LStickXAxis", dd[dd.LStickYAxis = 19] = "LStickYAxis", dd[dd.RStickXAxis = 20] = "RStickXAxis", dd[dd.RStickYAxis = 21] = "RStickYAxis"
    }(bd || (bd = {}));
    var jd = kd(40169);
    class Xd {
      static CreateDeviceEvent(dd, Jd, kd, pd, Nd, Wd, Pd) {
        switch (dd) {
          case sd.Keyboard:
            return this._CreateKeyboardEvent(kd, pd, Nd, Wd);
          case sd.Mouse:
            if (kd === ad.MouseWheelX || kd === ad.MouseWheelY || kd === ad.MouseWheelZ) return this._CreateWheelEvent(dd, Jd, kd, pd, Nd, Wd);
          case sd.Touch:
            return this._CreatePointerEvent(dd, Jd, kd, pd, Nd, Wd, Pd);
          default:
            throw `Unable to generate event for device ${sd[dd]}`
        }
      }
      static _CreatePointerEvent(dd, Jd, kd, pd, Nd, Wd, Pd) {
        const Zd = this._CreateMouseEvent(dd, Jd, kd, pd, Nd, Wd);
        dd === sd.Mouse ? (Zd.deviceType = sd.Mouse, Zd.pointerId = 1, Zd.pointerType = "mouse") : (Zd.deviceType = sd.Touch, Zd.pointerId = Pd ?? Jd, Zd.pointerType = "touch");
        let gd = 0;
        return gd += Nd.pollInput(dd, Jd, ad.LeftClick), gd += 2 * Nd.pollInput(dd, Jd, ad.RightClick), gd += 4 * Nd.pollInput(dd, Jd, ad.MiddleClick), Zd.buttons = gd, kd === ad.Move ? Zd.type = "pointermove" : kd >= ad.LeftClick && kd <= ad.RightClick && (Zd.type = 1 === pd ? "pointerdown" : "pointerup", Zd.button = kd - 2), Zd
      }
      static _CreateWheelEvent(dd, Jd, kd, pd, Nd, Wd) {
        const Pd = this._CreateMouseEvent(dd, Jd, kd, pd, Nd, Wd);
        switch (Pd.pointerId = 1, Pd.type = "wheel", Pd.deltaMode = jd.d.DOM_DELTA_PIXEL, Pd.deltaX = 0, Pd.deltaY = 0, Pd.deltaZ = 0, kd) {
          case ad.MouseWheelX:
            Pd.deltaX = pd;
            break;
          case ad.MouseWheelY:
            Pd.deltaY = pd;
            break;
          case ad.MouseWheelZ:
            Pd.deltaZ = pd
        }
        return Pd
      }
      static _CreateMouseEvent(dd, Jd, kd, pd, Nd, Wd) {
        const Pd = this._CreateEvent(Wd),
          Zd = Nd.pollInput(dd, Jd, ad.Horizontal),
          gd = Nd.pollInput(dd, Jd, ad.Vertical);
        return Wd ? (Pd.movementX = 0, Pd.movementY = 0, Pd.offsetX = Pd.movementX - Wd.getBoundingClientRect().x, Pd.offsetY = Pd.movementY - Wd.getBoundingClientRect().y) : (Pd.movementX = Nd.pollInput(dd, Jd, 10), Pd.movementY = Nd.pollInput(dd, Jd, 11), Pd.offsetX = 0, Pd.offsetY = 0), this._CheckNonCharacterKeys(Pd, Nd), Pd.clientX = Zd, Pd.clientY = gd, Pd.x = Zd, Pd.y = gd, Pd.deviceType = dd, Pd.deviceSlot = Jd, Pd.inputIndex = kd, Pd
      }
      static _CreateKeyboardEvent(dd, Jd, kd, pd) {
        const Nd = this._CreateEvent(pd);
        return this._CheckNonCharacterKeys(Nd, kd), Nd.deviceType = sd.Keyboard, Nd.deviceSlot = 0, Nd.inputIndex = dd, Nd.type = 1 === Jd ? "keydown" : "keyup", Nd.key = String.fromCharCode(dd), Nd.keyCode = dd, Nd
      }
      static _CheckNonCharacterKeys(dd, Jd) {
        const kd = Jd.isDeviceAvailable(sd.Keyboard),
          pd = kd && 1 === Jd.pollInput(sd.Keyboard, 0, 18),
          Nd = kd && 1 === Jd.pollInput(sd.Keyboard, 0, 17),
          Wd = kd && (1 === Jd.pollInput(sd.Keyboard, 0, 91) || 1 === Jd.pollInput(sd.Keyboard, 0, 92) || 1 === Jd.pollInput(sd.Keyboard, 0, 93)),
          Pd = kd && 1 === Jd.pollInput(sd.Keyboard, 0, 16);
        dd.altKey = pd, dd.ctrlKey = Nd, dd.metaKey = Wd, dd.shiftKey = Pd
      }
      static _CreateEvent(dd) {
        const Jd = {
          preventDefault: () => {}
        };
        return Jd.target = dd, Jd
      }
    }
    class fd {
      constructor(dd, Jd, kd) {
        this._nativeInput = _native.DeviceInputSystem ? new _native.DeviceInputSystem(dd, Jd, ((dd, Jd, pd, Nd) => {
          const Wd = Xd.CreateDeviceEvent(dd, Jd, pd, Nd, this);
          kd(dd, Jd, Wd)
        })) : this._createDummyNativeInput()
      }
      pollInput(dd, Jd, kd) {
        return this._nativeInput.pollInput(dd, Jd, kd)
      }
      isDeviceAvailable(dd) {
        return dd === sd.Mouse || dd === sd.Touch
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
    const nd = Object.keys(ad).length / 2;
    class Ud {
      constructor(dd, Jd, kd, Nd) {
        this._inputs = [], this._keyboardActive = !1, this._pointerActive = !1, this._usingSafari = pd.h.IsSafari(), this._usingMacOs = (0, Gd.j)() && /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform), this._keyboardDownEvent = dd => {}, this._keyboardUpEvent = dd => {}, this._keyboardBlurEvent = dd => {}, this._pointerMoveEvent = dd => {}, this._pointerDownEvent = dd => {}, this._pointerUpEvent = dd => {}, this._pointerCancelEvent = dd => {}, this._pointerCancelTouch = dd => {}, this._pointerLeaveEvent = dd => {}, this._pointerWheelEvent = dd => {}, this._pointerBlurEvent = dd => {}, this._pointerMacOsChromeOutEvent = dd => {}, this._eventsAttached = !1, this._mouseId = -1, this._isUsingFirefox = (0, Gd.j)() && navigator.userAgent && -1 !== navigator.userAgent.indexOf("Firefox"), this._isUsingChromium = (0, Gd.j)() && navigator.userAgent && -1 !== navigator.userAgent.indexOf("Chrome"), this._maxTouchPoints = 0, this._pointerInputClearObserver = null, this._gamepadConnectedEvent = dd => {}, this._gamepadDisconnectedEvent = dd => {}, this._eventPrefix = pd.h.GetPointerPrefix(dd), this._engine = dd, this._onDeviceConnected = Jd, this._onDeviceDisconnected = kd, this._onInputChanged = Nd, this._mouseId = this._isUsingFirefox ? 0 : 1, this._enableEvents(), this._usingMacOs && (this._metaKeys = []), this._engine._onEngineViewChanged || (this._engine._onEngineViewChanged = () => {
          this._enableEvents()
        })
      }
      pollInput(dd, Jd, kd) {
        const Nd = this._inputs[dd][Jd];
        if (!Nd) throw `Unable to find device ${sd[dd]}`;
        dd >= sd.DualShock && dd <= sd.DualSense && this._updateDevice(dd, Jd, kd);
        const Wd = Nd[kd];
        if (void 0 === Wd) throw `Unable to find input ${kd} for device ${sd[dd]} in slot ${Jd}`;
        return kd === ad.Move && pd.h.Warn("Unable to provide information for PointerInput.Move.  Try using PointerInput.Horizontal or PointerInput.Vertical for move data."), Wd
      }
      isDeviceAvailable(dd) {
        return void 0 !== this._inputs[dd]
      }
      dispose() {
        this._onDeviceConnected = () => {}, this._onDeviceDisconnected = () => {}, this._onInputChanged = () => {}, delete this._engine._onEngineViewChanged, this._elementToAttachTo && this._disableEvents()
      }
      _enableEvents() {
        const dd = this?._engine.getInputElement();
        if (dd && (!this._eventsAttached || this._elementToAttachTo !== dd)) {
          if (this._disableEvents(), this._inputs)
            for (const dd of this._inputs)
              if (dd)
                for (const Jd in dd) {
                  const kd = dd[+Jd];
                  if (kd)
                    for (let dd = 0; dd < kd.length; dd++) kd[dd] = 0
                }
          this._elementToAttachTo = dd, this._elementToAttachTo.tabIndex = -1 !== this._elementToAttachTo.tabIndex ? this._elementToAttachTo.tabIndex : this._engine.canvasTabIndex, this._handleKeyActions(), this._handlePointerActions(), this._handleGamepadActions(), this._eventsAttached = !0, this._checkForConnectedDevices()
        }
      }
      _disableEvents() {
        this._elementToAttachTo && (this._elementToAttachTo.removeEventListener("blur", this._keyboardBlurEvent), this._elementToAttachTo.removeEventListener("blur", this._pointerBlurEvent), this._elementToAttachTo.removeEventListener("keydown", this._keyboardDownEvent), this._elementToAttachTo.removeEventListener("keyup", this._keyboardUpEvent), this._elementToAttachTo.removeEventListener(this._eventPrefix + "move", this._pointerMoveEvent), this._elementToAttachTo.removeEventListener(this._eventPrefix + "down", this._pointerDownEvent), this._elementToAttachTo.removeEventListener(this._eventPrefix + "up", this._pointerUpEvent), this._elementToAttachTo.removeEventListener(this._eventPrefix + "cancel", this._pointerCancelEvent), this._elementToAttachTo.removeEventListener(this._eventPrefix + "leave", this._pointerLeaveEvent), this._elementToAttachTo.removeEventListener(this._wheelEventName, this._pointerWheelEvent), this._usingMacOs && this._isUsingChromium && this._elementToAttachTo.removeEventListener("lostpointercapture", this._pointerMacOsChromeOutEvent), window.removeEventListener("gamepadconnected", this._gamepadConnectedEvent), window.removeEventListener("gamepaddisconnected", this._gamepadDisconnectedEvent)), this._pointerInputClearObserver && this._engine.onEndFrameObservable.remove(this._pointerInputClearObserver), this._eventsAttached = !1
      }
      _checkForConnectedDevices() {
        if (navigator.getGamepads) {
          const dd = navigator.getGamepads();
          for (const Jd of dd) Jd && this._addGamePad(Jd)
        }
        "function" === typeof matchMedia && matchMedia("(pointer:fine)").matches && this._addPointerDevice(sd.Mouse, 0, 0, 0)
      }
      _addGamePad(dd) {
        const Jd = this._getGamepadDeviceType(dd.id),
          kd = dd.index;
        this._gamepads = this._gamepads || new Array(dd.index + 1), this._registerDevice(Jd, kd, dd.buttons.length + dd.axes.length), this._gamepads[kd] = Jd
      }
      _addPointerDevice(dd, Jd, kd, pd) {
        this._pointerActive || (this._pointerActive = !0), this._registerDevice(dd, Jd, nd);
        const Nd = this._inputs[dd][Jd];
        Nd[0] = kd, Nd[1] = pd
      }
      _registerDevice(dd, Jd, kd) {
        if (void 0 === Jd) throw `Unable to register device ${sd[dd]} to undefined slot.`;
        if (this._inputs[dd] || (this._inputs[dd] = {}), !this._inputs[dd][Jd]) {
          const pd = new Array(kd);
          pd.fill(0), this._inputs[dd][Jd] = pd, this._onDeviceConnected(dd, Jd)
        }
      }
      _unregisterDevice(dd, Jd) {
        this._inputs[dd][Jd] && (delete this._inputs[dd][Jd], this._onDeviceDisconnected(dd, Jd))
      }
      _handleKeyActions() {
        this._keyboardDownEvent = dd => {
          this._keyboardActive || (this._keyboardActive = !0, this._registerDevice(sd.Keyboard, 0, 255));
          const Jd = this._inputs[sd.Keyboard][0];
          if (Jd) {
            Jd[dd.keyCode] = 1;
            const kd = dd;
            kd.inputIndex = dd.keyCode, this._usingMacOs && dd.metaKey && "Meta" !== dd.key && (this._metaKeys.includes(dd.keyCode) || this._metaKeys.push(dd.keyCode)), this._onInputChanged(sd.Keyboard, 0, kd)
          }
        }, this._keyboardUpEvent = dd => {
          this._keyboardActive || (this._keyboardActive = !0, this._registerDevice(sd.Keyboard, 0, 255));
          const Jd = this._inputs[sd.Keyboard][0];
          if (Jd) {
            Jd[dd.keyCode] = 0;
            const kd = dd;
            if (kd.inputIndex = dd.keyCode, this._usingMacOs && "Meta" === dd.key && this._metaKeys.length > 0) {
              for (const dd of this._metaKeys) {
                const kd = Xd.CreateDeviceEvent(sd.Keyboard, 0, dd, 0, this, this._elementToAttachTo);
                Jd[dd] = 0, this._onInputChanged(sd.Keyboard, 0, kd)
              }
              this._metaKeys.splice(0, this._metaKeys.length)
            }
            this._onInputChanged(sd.Keyboard, 0, kd)
          }
        }, this._keyboardBlurEvent = () => {
          if (this._keyboardActive) {
            const dd = this._inputs[sd.Keyboard][0];
            for (let Jd = 0; Jd < dd.length; Jd++)
              if (0 !== dd[Jd]) {
                dd[Jd] = 0;
                const kd = Xd.CreateDeviceEvent(sd.Keyboard, 0, Jd, 0, this, this._elementToAttachTo);
                this._onInputChanged(sd.Keyboard, 0, kd)
              } this._usingMacOs && this._metaKeys.splice(0, this._metaKeys.length)
          }
        }, this._elementToAttachTo.addEventListener("keydown", this._keyboardDownEvent), this._elementToAttachTo.addEventListener("keyup", this._keyboardUpEvent), this._elementToAttachTo.addEventListener("blur", this._keyboardBlurEvent)
      }
      _handlePointerActions() {
        this._maxTouchPoints = (0, Gd.j)() && navigator.maxTouchPoints || 2, this._activeTouchIds || (this._activeTouchIds = new Array(this._maxTouchPoints));
        for (let pd = 0; pd < this._maxTouchPoints; pd++) this._activeTouchIds[pd] = -1;
        this._pointerMoveEvent = dd => {
          const Jd = this._getPointerType(dd);
          let kd = Jd === sd.Mouse ? 0 : this._activeTouchIds.indexOf(dd.pointerId);
          if (Jd === sd.Touch && -1 === kd) {
            if (0 === dd.buttons) return;
            const Nd = this._activeTouchIds.indexOf(-1);
            if (!(Nd >= 0)) return void pd.h.Warn(`Max number of touches exceeded.  Ignoring touches in excess of ${this._maxTouchPoints}`);
            kd = Nd, this._activeTouchIds[Nd] = dd.pointerId, this._onDeviceConnected(Jd, kd)
          }
          this._inputs[Jd] || (this._inputs[Jd] = {}), this._inputs[Jd][kd] || this._addPointerDevice(Jd, kd, dd.clientX, dd.clientY);
          const Nd = this._inputs[Jd][kd];
          if (Nd) {
            const pd = dd;
            pd.inputIndex = ad.Move, Nd[ad.Horizontal] = dd.clientX, Nd[ad.Vertical] = dd.clientY, Jd === sd.Touch && 0 === Nd[ad.LeftClick] && (Nd[ad.LeftClick] = 1), void 0 === dd.pointerId && (dd.pointerId = this._mouseId), this._onInputChanged(Jd, kd, pd), this._usingSafari || -1 === dd.button || (pd.inputIndex = dd.button + 2, Nd[dd.button + 2] = Nd[dd.button + 2] ? 0 : 1, this._onInputChanged(Jd, kd, pd))
          }
        }, this._pointerDownEvent = dd => {
          const Jd = this._getPointerType(dd);
          let kd = Jd === sd.Mouse ? 0 : dd.pointerId;
          if (Jd === sd.Touch) {
            let Jd = this._activeTouchIds.indexOf(dd.pointerId);
            if (-1 === Jd && (Jd = this._activeTouchIds.indexOf(-1)), !(Jd >= 0)) return void pd.h.Warn(`Max number of touches exceeded.  Ignoring touches in excess of ${this._maxTouchPoints}`);
            kd = Jd, this._activeTouchIds[Jd] = dd.pointerId
          }
          this._inputs[Jd] || (this._inputs[Jd] = {}), this._inputs[Jd][kd] ? Jd === sd.Touch && this._onDeviceConnected(Jd, kd) : this._addPointerDevice(Jd, kd, dd.clientX, dd.clientY);
          const Nd = this._inputs[Jd][kd];
          if (Nd) {
            const pd = Nd[ad.Horizontal],
              Pd = Nd[ad.Vertical];
            if (Jd === sd.Mouse) {
              if (void 0 === dd.pointerId && (dd.pointerId = this._mouseId), !document.pointerLockElement) try {
                this._elementToAttachTo.setPointerCapture(this._mouseId)
              } catch (Wd) {}
            } else if (dd.pointerId && !document.pointerLockElement) try {
              this._elementToAttachTo.setPointerCapture(dd.pointerId)
            } catch (Wd) {}
            Nd[ad.Horizontal] = dd.clientX, Nd[ad.Vertical] = dd.clientY, Nd[dd.button + 2] = 1;
            const Zd = dd;
            Zd.inputIndex = dd.button + 2, this._onInputChanged(Jd, kd, Zd), pd === dd.clientX && Pd === dd.clientY || (Zd.inputIndex = ad.Move, this._onInputChanged(Jd, kd, Zd))
          }
        }, this._pointerUpEvent = dd => {
          const Jd = this._getPointerType(dd),
            kd = Jd === sd.Mouse ? 0 : this._activeTouchIds.indexOf(dd.pointerId);
          if (Jd === sd.Touch) {
            if (-1 === kd) return;
            this._activeTouchIds[kd] = -1
          }
          const pd = this._inputs[Jd]?.[kd];
          let Nd = dd.button,
            Wd = pd && 0 !== pd[Nd + 2];
          if (!Wd && this._isUsingFirefox && this._usingMacOs && pd && (Nd = 2 === Nd ? 0 : 2, Wd = 0 !== pd[Nd + 2]), Wd) {
            const Wd = pd[ad.Horizontal],
              Pd = pd[ad.Vertical];
            pd[ad.Horizontal] = dd.clientX, pd[ad.Vertical] = dd.clientY, pd[Nd + 2] = 0;
            const Zd = dd;
            void 0 === dd.pointerId && (dd.pointerId = this._mouseId), Wd === dd.clientX && Pd === dd.clientY || (Zd.inputIndex = ad.Move, this._onInputChanged(Jd, kd, Zd)), Zd.inputIndex = Nd + 2, Jd === sd.Mouse && this._mouseId >= 0 && this._elementToAttachTo.hasPointerCapture?.(this._mouseId) ? this._elementToAttachTo.releasePointerCapture(this._mouseId) : dd.pointerId && this._elementToAttachTo.hasPointerCapture?.(dd.pointerId) && this._elementToAttachTo.releasePointerCapture(dd.pointerId), this._onInputChanged(Jd, kd, Zd), Jd === sd.Touch && this._onDeviceDisconnected(Jd, kd)
          }
        }, this._pointerCancelTouch = dd => {
          const Jd = this._activeTouchIds.indexOf(dd);
          if (-1 === Jd) return;
          this._elementToAttachTo.hasPointerCapture?.(dd) && this._elementToAttachTo.releasePointerCapture(dd), this._inputs[sd.Touch][Jd][ad.LeftClick] = 0;
          const kd = Xd.CreateDeviceEvent(sd.Touch, Jd, ad.LeftClick, 0, this, this._elementToAttachTo, dd);
          this._onInputChanged(sd.Touch, Jd, kd), this._activeTouchIds[Jd] = -1, this._onDeviceDisconnected(sd.Touch, Jd)
        }, this._pointerCancelEvent = dd => {
          if ("mouse" === dd.pointerType) {
            const dd = this._inputs[sd.Mouse][0];
            this._mouseId >= 0 && this._elementToAttachTo.hasPointerCapture?.(this._mouseId) && this._elementToAttachTo.releasePointerCapture(this._mouseId);
            for (let Jd = ad.LeftClick; Jd <= ad.BrowserForward; Jd++)
              if (1 === dd[Jd]) {
                dd[Jd] = 0;
                const kd = Xd.CreateDeviceEvent(sd.Mouse, 0, Jd, 0, this, this._elementToAttachTo);
                this._onInputChanged(sd.Mouse, 0, kd)
              }
          } else this._pointerCancelTouch(dd.pointerId)
        }, this._pointerLeaveEvent = dd => {
          "pen" === dd.pointerType && this._pointerCancelTouch(dd.pointerId)
        }, this._wheelEventName = "onwheel" in document.createElement("div") ? "wheel" : void 0 !== document.onmousewheel ? "mousewheel" : "DOMMouseScroll";
        let dd = !1;
        const Jd = function() {};
        try {
          const kd = Object.defineProperty({}, "passive", {
            get: function() {
              dd = !0
            }
          });
          this._elementToAttachTo.addEventListener("test", Jd, kd), this._elementToAttachTo.removeEventListener("test", Jd, kd)
        } catch (kd) {}
        this._pointerBlurEvent = () => {
          if (this.isDeviceAvailable(sd.Mouse)) {
            const dd = this._inputs[sd.Mouse][0];
            this._mouseId >= 0 && this._elementToAttachTo.hasPointerCapture?.(this._mouseId) && this._elementToAttachTo.releasePointerCapture(this._mouseId);
            for (let Jd = ad.LeftClick; Jd <= ad.BrowserForward; Jd++)
              if (1 === dd[Jd]) {
                dd[Jd] = 0;
                const kd = Xd.CreateDeviceEvent(sd.Mouse, 0, Jd, 0, this, this._elementToAttachTo);
                this._onInputChanged(sd.Mouse, 0, kd)
              }
          }
          if (this.isDeviceAvailable(sd.Touch)) {
            const dd = this._inputs[sd.Touch];
            for (let Jd = 0; Jd < this._activeTouchIds.length; Jd++) {
              const kd = this._activeTouchIds[Jd];
              if (this._elementToAttachTo.hasPointerCapture?.(kd) && this._elementToAttachTo.releasePointerCapture(kd), -1 !== kd && 1 === dd[Jd]?.[ad.LeftClick]) {
                dd[Jd][ad.LeftClick] = 0;
                const pd = Xd.CreateDeviceEvent(sd.Touch, Jd, ad.LeftClick, 0, this, this._elementToAttachTo, kd);
                this._onInputChanged(sd.Touch, Jd, pd), this._activeTouchIds[Jd] = -1, this._onDeviceDisconnected(sd.Touch, Jd)
              }
            }
          }
        }, this._pointerWheelEvent = dd => {
          const Jd = sd.Mouse;
          this._inputs[Jd] || (this._inputs[Jd] = []), this._inputs[Jd][0] || (this._pointerActive = !0, this._registerDevice(Jd, 0, nd));
          const kd = this._inputs[Jd][0];
          if (kd) {
            kd[ad.MouseWheelX] = dd.deltaX || 0, kd[ad.MouseWheelY] = dd.deltaY || dd.wheelDelta || 0, kd[ad.MouseWheelZ] = dd.deltaZ || 0;
            const pd = dd;
            void 0 === dd.pointerId && (dd.pointerId = this._mouseId), 0 !== kd[ad.MouseWheelX] && (pd.inputIndex = ad.MouseWheelX, this._onInputChanged(Jd, 0, pd)), 0 !== kd[ad.MouseWheelY] && (pd.inputIndex = ad.MouseWheelY, this._onInputChanged(Jd, 0, pd)), 0 !== kd[ad.MouseWheelZ] && (pd.inputIndex = ad.MouseWheelZ, this._onInputChanged(Jd, 0, pd))
          }
        }, this._usingMacOs && this._isUsingChromium && (this._pointerMacOsChromeOutEvent = dd => {
          dd.buttons > 1 && this._pointerCancelEvent(dd)
        }, this._elementToAttachTo.addEventListener("lostpointercapture", this._pointerMacOsChromeOutEvent)), this._elementToAttachTo.addEventListener(this._eventPrefix + "move", this._pointerMoveEvent), this._elementToAttachTo.addEventListener(this._eventPrefix + "down", this._pointerDownEvent), this._elementToAttachTo.addEventListener(this._eventPrefix + "up", this._pointerUpEvent), this._elementToAttachTo.addEventListener(this._eventPrefix + "cancel", this._pointerCancelEvent), this._elementToAttachTo.addEventListener(this._eventPrefix + "leave", this._pointerLeaveEvent), this._elementToAttachTo.addEventListener("blur", this._pointerBlurEvent), this._elementToAttachTo.addEventListener(this._wheelEventName, this._pointerWheelEvent, !!dd && {
          passive: !1
        }), this._pointerInputClearObserver = this._engine.onEndFrameObservable.add((() => {
          if (this.isDeviceAvailable(sd.Mouse)) {
            const dd = this._inputs[sd.Mouse][0];
            dd[ad.MouseWheelX] = 0, dd[ad.MouseWheelY] = 0, dd[ad.MouseWheelZ] = 0
          }
        }))
      }
      _handleGamepadActions() {
        this._gamepadConnectedEvent = dd => {
          this._addGamePad(dd.gamepad)
        }, this._gamepadDisconnectedEvent = dd => {
          if (this._gamepads) {
            const Jd = this._getGamepadDeviceType(dd.gamepad.id),
              kd = dd.gamepad.index;
            this._unregisterDevice(Jd, kd), delete this._gamepads[kd]
          }
        }, window.addEventListener("gamepadconnected", this._gamepadConnectedEvent), window.addEventListener("gamepaddisconnected", this._gamepadDisconnectedEvent)
      }
      _updateDevice(dd, Jd, kd) {
        const pd = navigator.getGamepads()[Jd];
        if (pd && dd === this._gamepads[Jd]) {
          const Nd = this._inputs[dd][Jd];
          kd >= pd.buttons.length ? Nd[kd] = pd.axes[kd - pd.buttons.length].valueOf() : Nd[kd] = pd.buttons[kd].value
        }
      }
      _getGamepadDeviceType(dd) {
        return -1 !== dd.indexOf("054c") ? -1 !== dd.indexOf("0ce6") ? sd.DualSense : sd.DualShock : -1 !== dd.indexOf("Xbox One") || -1 !== dd.search("Xbox 360") || -1 !== dd.search("xinput") || -1 !== dd.indexOf("045e") && -1 === dd.indexOf("Surface Dock") ? sd.Xbox : -1 !== dd.indexOf("057e") ? sd.Switch : sd.Generic
      }
      _getPointerType(dd) {
        let Jd = sd.Mouse;
        return ("touch" === dd.pointerType || "pen" === dd.pointerType || dd.touches) && (Jd = sd.Touch), Jd
      }
    }
    class yd {
      constructor(dd, Jd) {
        let kd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.deviceType = Jd, this.deviceSlot = kd, this.onInputChangedObservable = new Pd.e, this._deviceInputSystem = dd
      }
      getInput(dd) {
        return this._deviceInputSystem.pollInput(this.deviceType, this.deviceSlot, dd)
      }
    }
    class Dd {
      constructor(dd) {
        this._registeredManagers = new Array, this._refCount = 0, this.registerManager = dd => {
          for (let Jd = 0; Jd < this._devices.length; Jd++) {
            const kd = this._devices[Jd];
            for (const pd in kd) {
              const kd = +pd;
              dd._addDevice(new yd(this._deviceInputSystem, Jd, kd))
            }
          }
          this._registeredManagers.push(dd)
        }, this.unregisterManager = dd => {
          const Jd = this._registeredManagers.indexOf(dd);
          Jd > -1 && this._registeredManagers.splice(Jd, 1)
        };
        const Jd = Object.keys(sd).length / 2;
        this._devices = new Array(Jd);
        const kd = (dd, Jd) => {
            this._devices[dd] || (this._devices[dd] = new Array), this._devices[dd][Jd] || (this._devices[dd][Jd] = Jd);
            for (const kd of this._registeredManagers) {
              const pd = new yd(this._deviceInputSystem, dd, Jd);
              kd._addDevice(pd)
            }
          },
          pd = (dd, Jd) => {
            this._devices[dd]?.[Jd] && delete this._devices[dd][Jd];
            for (const kd of this._registeredManagers) kd._removeDevice(dd, Jd)
          },
          Nd = (dd, Jd, kd) => {
            if (kd)
              for (const pd of this._registeredManagers) pd._onInputChanged(dd, Jd, kd)
          };
        "undefined" !== typeof _native ? this._deviceInputSystem = new fd(kd, pd, Nd) : this._deviceInputSystem = new Ud(dd, kd, pd, Nd)
      }
      dispose() {
        this._deviceInputSystem.dispose()
      }
    }
    class Td {
      getDeviceSource(dd, Jd) {
        if (void 0 === Jd) {
          if (void 0 === this._firstDevice[dd]) return null;
          Jd = this._firstDevice[dd]
        }
        return this._devices[dd] && void 0 !== this._devices[dd][Jd] ? this._devices[dd][Jd] : null
      }
      getDeviceSources(dd) {
        return this._devices[dd] ? this._devices[dd].filter((dd => !!dd)) : []
      }
      constructor(dd) {
        const Jd = Object.keys(sd).length / 2;
        this._devices = new Array(Jd), this._firstDevice = new Array(Jd), this._engine = dd, this._engine._deviceSourceManager || (this._engine._deviceSourceManager = new Dd(dd)), this._engine._deviceSourceManager._refCount++, this.onDeviceConnectedObservable = new Pd.e((dd => {
          for (const Jd of this._devices)
            if (Jd)
              for (const kd of Jd) kd && this.onDeviceConnectedObservable.notifyObserver(dd, kd)
        })), this.onDeviceDisconnectedObservable = new Pd.e, this._engine._deviceSourceManager.registerManager(this), this._onDisposeObserver = dd.Zm.add((() => {
          this.dispose()
        }))
      }
      dispose() {
        this.onDeviceConnectedObservable.clear(), this.onDeviceDisconnectedObservable.clear(), this._engine._deviceSourceManager && (this._engine._deviceSourceManager.unregisterManager(this), --this._engine._deviceSourceManager._refCount < 1 && (this._engine._deviceSourceManager.dispose(), delete this._engine._deviceSourceManager)), this._engine.Zm.remove(this._onDisposeObserver)
      }
      _addDevice(dd) {
        this._devices[dd.deviceType] || (this._devices[dd.deviceType] = []), this._devices[dd.deviceType][dd.deviceSlot] || (this._devices[dd.deviceType][dd.deviceSlot] = dd, this._updateFirstDevices(dd.deviceType)), this.onDeviceConnectedObservable.notifyObservers(dd)
      }
      _removeDevice(dd, Jd) {
        const kd = this._devices[dd]?.[Jd];
        this.onDeviceDisconnectedObservable.notifyObservers(kd), this._devices[dd]?.[Jd] && delete this._devices[dd][Jd], this._updateFirstDevices(dd)
      }
      _onInputChanged(dd, Jd, kd) {
        this._devices[dd]?.[Jd]?.onInputChangedObservable.notifyObservers(kd)
      }
      _updateFirstDevices(dd) {
        switch (dd) {
          case sd.Keyboard:
          case sd.Mouse:
            this._firstDevice[dd] = 0;
            break;
          case sd.Touch:
          case sd.DualSense:
          case sd.DualShock:
          case sd.Xbox:
          case sd.Switch:
          case sd.Generic: {
            delete this._firstDevice[dd];
            const Jd = this._devices[dd];
            if (Jd)
              for (let kd = 0; kd < Jd.length; kd++)
                if (Jd[kd]) {
                  this._firstDevice[dd] = kd;
                  break
                } break
          }
        }
      }
    }
    var Ed = kd(40178);
    class cd {
      constructor() {
        this._singleClick = !1, this._doubleClick = !1, this._hasSwiped = !1, this._ignore = !1
      }
      get singleClick() {
        return this._singleClick
      }
      get aK() {
        return this._doubleClick
      }
      get hasSwiped() {
        return this._hasSwiped
      }
      get ignore() {
        return this._ignore
      }
      set singleClick(dd) {
        this._singleClick = dd
      }
      set aK(dd) {
        this._doubleClick = dd
      }
      set hasSwiped(dd) {
        this._hasSwiped = dd
      }
      set ignore(dd) {
        this._ignore = dd
      }
    }
    class hd {
      constructor(dd) {
        this._alreadyAttached = !1, this._meshPickProceed = !1, this._currentPickResult = null, this._previousPickResult = null, this._activePointerIds = new Array, this._activePointerIdsCount = 0, this._doubleClickOccured = !1, this._isSwiping = !1, this._swipeButtonPressed = -1, this._skipPointerTap = !1, this._isMultiTouchGesture = !1, this._pointerX = 0, this._pointerY = 0, this._startingPointerPosition = new Kd.k(0, 0), this._previousStartingPointerPosition = new Kd.k(0, 0), this._startingPointerTime = 0, this._previousStartingPointerTime = 0, this._pointerCaptures = {}, this._meshUnderPointerId = {}, this._movePointerInfo = null, this._latestPointerMoveEvents = new Map, this._cameraObserverCount = 0, this._delayedClicks = [null, null, null, null, null], this._deviceSourceManager = null, this._scene = dd || vd.d.LastCreatedScene, this._scene
      }
      get meshUnderPointer() {
        return this._movePointerInfo && (this._movePointerInfo._generatePickInfo(), this._movePointerInfo = null), this._pointerOverMesh
      }
      getMeshUnderPointerByPointerId(dd) {
        return this._meshUnderPointerId[dd] || null
      }
      get unTranslatedPointer() {
        return new Kd.k(this._unTranslatedPointerX, this._unTranslatedPointerY)
      }
      get pointerX() {
        return this._pointerX
      }
      set pointerX(dd) {
        this._pointerX = dd
      }
      get pointerY() {
        return this._pointerY
      }
      set pointerY(dd) {
        this._pointerY = dd
      }
      _updatePointerPosition(dd) {
        const Jd = this._scene.eL().getInputElementClientRect();
        Jd && (this._pointerX = dd.clientX - Jd.left, this._pointerY = dd.clientY - Jd.top, this._unTranslatedPointerX = this._pointerX, this._unTranslatedPointerY = this._pointerY)
      }
      _processPointerMove(dd, Jd) {
        const kd = this._scene,
          pd = kd.eL(),
          Nd = pd.getInputElement();
        Nd && (Nd.tabIndex = pd.canvasTabIndex, kd.doNotHandleCursors || (Nd.style.cursor = kd.defaultCursor)), this._setCursorAndPointerOverMesh(dd, Jd, kd);
        for (const Zd of kd._pointerMoveStage) {
          dd = dd || this._pickMove(Jd);
          const kd = !!dd?.pickedMesh;
          dd = Zd.action(this._unTranslatedPointerX, this._unTranslatedPointerY, dd, kd, Nd)
        }
        const Wd = Jd.inputIndex >= ad.MouseWheelX && Jd.inputIndex <= ad.MouseWheelZ ? qd.b.POINTERWHEEL : qd.b.POINTERMOVE;
        let Pd;
        kd.onPointerMove && (dd = dd || this._pickMove(Jd), kd.onPointerMove(Jd, dd, Wd)), dd ? (Pd = new qd.f(Wd, Jd, dd), this._setRayOnPointerInfo(dd, Jd)) : (Pd = new qd.f(Wd, Jd, null, this), this._movePointerInfo = Pd), kd.onPointerObservable.hasObservers() && kd.onPointerObservable.notifyObservers(Pd, Wd)
      }
      _setRayOnPointerInfo(dd, Jd) {
        const kd = this._scene;
        dd && Ed.c._IsPickingAvailable && (dd.ray || (dd.ray = kd.createPickingRay(Jd.offsetX, Jd.offsetY, Kd.b.Identity(), kd.activeCamera)))
      }
      _addCameraPointerObserver(dd, Jd) {
        return this._cameraObserverCount++, this._scene.onPointerObservable.add(dd, Jd)
      }
      _removeCameraPointerObserver(dd) {
        return this._cameraObserverCount--, this._scene.onPointerObservable.remove(dd)
      }
      _checkForPicking() {
        return !!(this._scene.onPointerObservable.observers.length > this._cameraObserverCount || this._scene.onPointerPick)
      }
      _checkPrePointerObservable(dd, Jd, kd) {
        const pd = this._scene,
          Nd = new qd.e(kd, Jd, this._unTranslatedPointerX, this._unTranslatedPointerY);
        return dd && (Nd.originalPickingInfo = dd, Nd.ray = dd.ray, "xr-near" === Jd.pointerType && dd.originMesh && (Nd.nearInteractionPickingInfo = dd)), pd.onPrePointerObservable.notifyObservers(Nd, kd), !!Nd.skipOnPointerObservable
      }
      _pickMove(dd) {
        const Jd = this._scene,
          kd = Jd.Tl(this._unTranslatedPointerX, this._unTranslatedPointerY, Jd.pointerMovePredicate, Jd.pointerMoveFastCheck, Jd.cameraToUseForPointers, Jd.pointerMoveTrianglePredicate);
        return this._setCursorAndPointerOverMesh(kd, dd, Jd), kd
      }
      _updateMeshUnderPointer() {
        const dd = this._scene;
        if (!dd.constantlyUpdateMeshUnderPointer || 0 === this._latestPointerMoveEvents.size || dd.skipPointerMovePicking || !dd.cameraToUseForPointers && !dd.activeCamera) return;
        this._ensurePointerMovePredicate();
        const Jd = this._pointerX,
          kd = this._pointerY,
          pd = this._unTranslatedPointerX,
          Nd = this._unTranslatedPointerY;
        for (const Wd of this._latestPointerMoveEvents.values()) this._pointerX = Wd.pointerX, this._pointerY = Wd.pointerY, this._unTranslatedPointerX = Wd.unTranslatedPointerX, this._unTranslatedPointerY = Wd.unTranslatedPointerY, this._pickMove(Wd.event);
        this._pointerX = Jd, this._pointerY = kd, this._unTranslatedPointerX = pd, this._unTranslatedPointerY = Nd
      }
      _ensurePointerMovePredicate() {
        const dd = this._scene;
        dd.pointerMovePredicate || (dd.pointerMovePredicate = Jd => (Jd._isPointerMovePickable ?? Jd.iO) && Jd.isVisible && Jd.isReady() && Jd.isEnabled() && (Jd.enablePointerMoveEvents || dd.constantlyUpdateMeshUnderPointer || null !== Jd._getActionManagerForTrigger()) && (!dd.cameraToUseForPointers || 0 !== (dd.cameraToUseForPointers.layerMask & Jd.layerMask)))
      }
      _setCursorAndPointerOverMesh(dd, Jd, kd) {
        const pd = kd.eL().getInputElement();
        if (dd?.pickedMesh) {
          if (this.setPointerOverMesh(dd.pickedMesh, Jd.pointerId, dd, Jd), !kd.doNotHandleCursors && pd && this._pointerOverMesh) {
            const dd = this._pointerOverMesh._getActionManagerForTrigger();
            dd && dd.hasPointerTriggers && (pd.style.cursor = dd.hoverCursor || kd.hoverCursor)
          }
        } else this.setPointerOverMesh(null, Jd.pointerId, dd, Jd)
      }
      simulatePointerMove(dd, Jd) {
        const kd = new PointerEvent("pointermove", Jd);
        kd.inputIndex = ad.Move, this._checkPrePointerObservable(dd, kd, qd.b.POINTERMOVE) || this._processPointerMove(dd, kd)
      }
      simulatePointerDown(dd, Jd) {
        const kd = new PointerEvent("pointerdown", Jd);
        kd.inputIndex = kd.button + 2, this._checkPrePointerObservable(dd, kd, qd.b.POINTERDOWN) || this._processPointerDown(dd, kd)
      }
      _processPointerDown(dd, Jd) {
        const kd = this._scene;
        if (dd?.pickedMesh) {
          this._pickedDownMesh = dd.pickedMesh;
          const pd = dd.pickedMesh._getActionManagerForTrigger();
          if (pd) {
            if (pd.hasPickTriggers) switch (pd.processTrigger(5, new Ld(dd.pickedMesh, kd.pointerX, kd.pointerY, dd.pickedMesh, Jd, dd)), Jd.button) {
              case 0:
                pd.processTrigger(2, new Ld(dd.pickedMesh, kd.pointerX, kd.pointerY, dd.pickedMesh, Jd, dd));
                break;
              case 1:
                pd.processTrigger(4, new Ld(dd.pickedMesh, kd.pointerX, kd.pointerY, dd.pickedMesh, Jd, dd));
                break;
              case 2:
                pd.processTrigger(3, new Ld(dd.pickedMesh, kd.pointerX, kd.pointerY, dd.pickedMesh, Jd, dd))
            }
            pd.hasSpecificTrigger(8) && window.setTimeout((() => {
              const dd = kd.Tl(this._unTranslatedPointerX, this._unTranslatedPointerY, (dd => dd.iO && dd.isVisible && dd.isReady() && dd.actionManager && dd.actionManager.hasSpecificTrigger(8) && dd === this._pickedDownMesh), !1, kd.cameraToUseForPointers);
              dd?.pickedMesh && pd && 0 !== this._activePointerIdsCount && Date.now() - this._startingPointerTime > hd.LongPressDelay && !this._isPointerSwiping() && (this._startingPointerTime = 0, pd.processTrigger(8, Ld.CreateNew(dd.pickedMesh, Jd)))
            }), hd.LongPressDelay)
          }
        } else
          for (const Wd of kd._pointerDownStage) dd = Wd.action(this._unTranslatedPointerX, this._unTranslatedPointerY, dd, Jd, !1);
        let pd;
        const Nd = qd.b.POINTERDOWN;
        dd ? (kd.onPointerDown && kd.onPointerDown(Jd, dd, Nd), pd = new qd.f(Nd, Jd, dd), this._setRayOnPointerInfo(dd, Jd)) : pd = new qd.f(Nd, Jd, null, this), kd.onPointerObservable.hasObservers() && kd.onPointerObservable.notifyObservers(pd, Nd)
      }
      _isPointerSwiping() {
        return this._isSwiping
      }
      simulatePointerUp(dd, Jd, kd) {
        const pd = new PointerEvent("pointerup", Jd);
        pd.inputIndex = ad.Move;
        const Nd = new cd;
        kd ? Nd.aK = !0 : Nd.singleClick = !0, this._checkPrePointerObservable(dd, pd, qd.b.POINTERUP) || this._processPointerUp(dd, pd, Nd)
      }
      _processPointerUp(dd, Jd, kd) {
        const pd = this._scene;
        if (dd?.pickedMesh) {
          if (this._pickedUpMesh = dd.pickedMesh, this._pickedDownMesh === this._pickedUpMesh && (pd.onPointerPick && pd.onPointerPick(Jd, dd), kd.singleClick && !kd.ignore && pd.onPointerObservable.observers.length > this._cameraObserverCount)) {
            const kd = qd.b.POINTERPICK,
              Nd = new qd.f(kd, Jd, dd);
            this._setRayOnPointerInfo(dd, Jd), pd.onPointerObservable.notifyObservers(Nd, kd)
          }
          const Nd = dd.pickedMesh._getActionManagerForTrigger();
          if (Nd && !kd.ignore) {
            Nd.processTrigger(7, Ld.CreateNew(dd.pickedMesh, Jd, dd)), !kd.hasSwiped && kd.singleClick && Nd.processTrigger(1, Ld.CreateNew(dd.pickedMesh, Jd, dd));
            const pd = dd.pickedMesh._getActionManagerForTrigger(6);
            kd.aK && pd && pd.processTrigger(6, Ld.CreateNew(dd.pickedMesh, Jd, dd))
          }
        } else if (!kd.ignore)
          for (const Nd of pd._pointerUpStage) dd = Nd.action(this._unTranslatedPointerX, this._unTranslatedPointerY, dd, Jd, kd.aK);
        if (this._pickedDownMesh && this._pickedDownMesh !== this._pickedUpMesh) {
          const dd = this._pickedDownMesh._getActionManagerForTrigger(16);
          dd && dd.processTrigger(16, Ld.CreateNew(this._pickedDownMesh, Jd))
        }
        if (!kd.ignore) {
          const Nd = new qd.f(qd.b.POINTERUP, Jd, dd);
          if (this._setRayOnPointerInfo(dd, Jd), pd.onPointerObservable.notifyObservers(Nd, qd.b.POINTERUP), pd.onPointerUp && pd.onPointerUp(Jd, dd, qd.b.POINTERUP), !kd.hasSwiped && !this._skipPointerTap && !this._isMultiTouchGesture) {
            let Nd = 0;
            if (kd.singleClick ? Nd = qd.b.POINTERTAP : kd.aK && (Nd = qd.b.POINTERDOUBLETAP), Nd) {
              const kd = new qd.f(Nd, Jd, dd);
              pd.onPointerObservable.hasObservers() && pd.onPointerObservable.hasSpecificMask(Nd) && pd.onPointerObservable.notifyObservers(kd, Nd)
            }
          }
        }
      }
      isPointerCaptured() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return this._pointerCaptures[dd]
      }
      attachControl() {
        let dd = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          Jd = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          kd = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          pd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const Nd = this._scene,
          Wd = Nd.eL();
        pd || (pd = Wd.getInputElement()), this._alreadyAttached && this.detachControl(), pd && (this._alreadyAttachedTo = pd), this._deviceSourceManager = new Td(Wd), this._initActionManager = dd => {
          if (!this._meshPickProceed) {
            const Jd = Nd.skipPointerUpPicking || 0 === Nd._registeredActions && !this._checkForPicking() && !Nd.onPointerUp ? null : Nd.Tl(this._unTranslatedPointerX, this._unTranslatedPointerY, Nd.pointerUpPredicate, Nd.pointerUpFastCheck, Nd.cameraToUseForPointers, Nd.pointerUpTrianglePredicate);
            this._currentPickResult = Jd, Jd && (dd = Jd.hit && Jd.pickedMesh ? Jd.pickedMesh._getActionManagerForTrigger() : null), this._meshPickProceed = !0
          }
          return dd
        }, this._delayedSimpleClick = (dd, Jd, kd) => {
          if ((Date.now() - this._previousStartingPointerTime > hd.DoubleClickDelay && !this._doubleClickOccured || dd !== this._previousButtonPressed) && (this._doubleClickOccured = !1, Jd.singleClick = !0, Jd.ignore = !1, this._delayedClicks[dd])) {
            const Jd = this._delayedClicks[dd].evt,
              kd = qd.b.POINTERTAP,
              pd = new qd.f(kd, Jd, this._currentPickResult);
            Nd.onPointerObservable.hasObservers() && Nd.onPointerObservable.hasSpecificMask(kd) && Nd.onPointerObservable.notifyObservers(pd, kd), this._delayedClicks[dd] = null
          }
        }, this._initClickEvent = (dd, Jd, kd, pd) => {
          const Nd = new cd;
          this._currentPickResult = null;
          let Wd = null,
            Pd = dd.hasSpecificMask(qd.b.POINTERPICK) || Jd.hasSpecificMask(qd.b.POINTERPICK) || dd.hasSpecificMask(qd.b.POINTERTAP) || Jd.hasSpecificMask(qd.b.POINTERTAP) || dd.hasSpecificMask(qd.b.POINTERDOUBLETAP) || Jd.hasSpecificMask(qd.b.POINTERDOUBLETAP);
          !Pd && Bd && (Wd = this._initActionManager(Wd, Nd), Wd && (Pd = Wd.hasPickTriggers));
          let Zd = !1;
          if (Pd = Pd && !this._isMultiTouchGesture, Pd) {
            const Pd = kd.button;
            if (Nd.hasSwiped = this._isPointerSwiping(), !Nd.hasSwiped) {
              let gd = !hd.ExclusiveDoubleClickMode;
              if (gd || (gd = !dd.hasSpecificMask(qd.b.POINTERDOUBLETAP) && !Jd.hasSpecificMask(qd.b.POINTERDOUBLETAP), gd && !Bd.HasSpecificTrigger(6) && (Wd = this._initActionManager(Wd, Nd), Wd && (gd = !Wd.hasSpecificTrigger(6)))), gd)(Date.now() - this._previousStartingPointerTime > hd.DoubleClickDelay || Pd !== this._previousButtonPressed) && (Nd.singleClick = !0, pd(Nd, this._currentPickResult), Zd = !0);
              else {
                const dd = {
                  evt: kd,
                  clickInfo: Nd,
                  timeoutId: window.setTimeout(this._delayedSimpleClick.bind(this, Pd, Nd, pd), hd.DoubleClickDelay)
                };
                this._delayedClicks[Pd] = dd
              }
              let Cd = dd.hasSpecificMask(qd.b.POINTERDOUBLETAP) || Jd.hasSpecificMask(qd.b.POINTERDOUBLETAP);
              !Cd && Bd.HasSpecificTrigger(6) && (Wd = this._initActionManager(Wd, Nd), Wd && (Cd = Wd.hasSpecificTrigger(6))), Cd && (Pd === this._previousButtonPressed && Date.now() - this._previousStartingPointerTime < hd.DoubleClickDelay && !this._doubleClickOccured ? (Nd.hasSwiped || this._isPointerSwiping() ? (this._doubleClickOccured = !1, this._previousStartingPointerTime = this._startingPointerTime, this._previousStartingPointerPosition.x = this._startingPointerPosition.x, this._previousStartingPointerPosition.y = this._startingPointerPosition.y, this._previousButtonPressed = Pd, hd.ExclusiveDoubleClickMode ? (this._delayedClicks[Pd] && (clearTimeout(this._delayedClicks[Pd]?.timeoutId), this._delayedClicks[Pd] = null), pd(Nd, this._previousPickResult)) : pd(Nd, this._currentPickResult)) : (this._previousStartingPointerTime = 0, this._doubleClickOccured = !0, Nd.aK = !0, Nd.ignore = !1, hd.ExclusiveDoubleClickMode && this._delayedClicks[Pd] && (clearTimeout(this._delayedClicks[Pd]?.timeoutId), this._delayedClicks[Pd] = null), pd(Nd, this._currentPickResult)), Zd = !0) : (this._doubleClickOccured = !1, this._previousStartingPointerTime = this._startingPointerTime, this._previousStartingPointerPosition.x = this._startingPointerPosition.x, this._previousStartingPointerPosition.y = this._startingPointerPosition.y, this._previousButtonPressed = Pd))
            }
          }
          Zd || pd(Nd, this._currentPickResult)
        }, this._onPointerMove = dd => {
          if (this._updatePointerPosition(dd), this._latestPointerMoveEvents.set(dd.pointerId, {
              event: dd,
              pointerX: this._pointerX,
              pointerY: this._pointerY,
              unTranslatedPointerX: this._unTranslatedPointerX,
              unTranslatedPointerY: this._unTranslatedPointerY
            }), this._isSwiping || -1 === this._swipeButtonPressed || (this._isSwiping = Math.abs(this._startingPointerPosition.x - this._pointerX) > hd.DragMovementThreshold || Math.abs(this._startingPointerPosition.y - this._pointerY) > hd.DragMovementThreshold), Wd.isPointerLock && Wd._verifyPointerLock(), this._checkPrePointerObservable(null, dd, dd.inputIndex >= ad.MouseWheelX && dd.inputIndex <= ad.MouseWheelZ ? qd.b.POINTERWHEEL : qd.b.POINTERMOVE)) return;
          if (!Nd.cameraToUseForPointers && !Nd.activeCamera) return;
          if (Nd.skipPointerMovePicking) return void this._processPointerMove(new Qd.d, dd);
          this._ensurePointerMovePredicate();
          const Jd = Nd._registeredActions > 0 || Nd.constantlyUpdateMeshUnderPointer ? this._pickMove(dd) : null;
          this._processPointerMove(Jd, dd)
        }, this._onPointerDown = dd => {
          const Jd = this._activePointerIds.indexOf(-1);
          if (-1 === Jd ? this._activePointerIds.push(dd.pointerId) : this._activePointerIds[Jd] = dd.pointerId, this._activePointerIdsCount++, this._pickedDownMesh = null, this._meshPickProceed = !1, hd.ExclusiveDoubleClickMode)
            for (let pd = 0; pd < this._delayedClicks.length; pd++)
              if (this._delayedClicks[pd])
                if (dd.button === pd) clearTimeout(this._delayedClicks[pd]?.timeoutId);
                else {
                  const dd = this._delayedClicks[pd].clickInfo;
                  this._doubleClickOccured = !1, dd.singleClick = !0, dd.ignore = !1;
                  const Jd = this._delayedClicks[pd].evt,
                    kd = qd.b.POINTERTAP,
                    Wd = new qd.f(kd, Jd, this._currentPickResult);
                  Nd.onPointerObservable.hasObservers() && Nd.onPointerObservable.hasSpecificMask(kd) && Nd.onPointerObservable.notifyObservers(Wd, kd), this._delayedClicks[pd] = null
                } if (this._updatePointerPosition(dd), -1 === this._swipeButtonPressed && (this._swipeButtonPressed = dd.button), Nd.preventDefaultOnPointerDown && pd && (dd.preventDefault(), pd.focus()), this._startingPointerPosition.x = this._pointerX, this._startingPointerPosition.y = this._pointerY, this._startingPointerTime = Date.now(), this._checkPrePointerObservable(null, dd, qd.b.POINTERDOWN)) return;
          if (!Nd.cameraToUseForPointers && !Nd.activeCamera) return;
          let kd;
          this._pointerCaptures[dd.pointerId] = !0, Nd.pointerDownPredicate || (Nd.pointerDownPredicate = dd => dd.iO && dd.isVisible && dd.isReady() && dd.isEnabled() && (!Nd.cameraToUseForPointers || 0 !== (Nd.cameraToUseForPointers.layerMask & dd.layerMask))), this._pickedDownMesh = null, kd = Nd.skipPointerDownPicking || 0 === Nd._registeredActions && !this._checkForPicking() && !Nd.onPointerDown ? new Qd.d : Nd.Tl(this._unTranslatedPointerX, this._unTranslatedPointerY, Nd.pointerDownPredicate, Nd.pointerDownFastCheck, Nd.cameraToUseForPointers, Nd.pointerDownTrianglePredicate), this._processPointerDown(kd, dd)
        }, this._onPointerUp = dd => {
          const Jd = this._activePointerIds.indexOf(dd.pointerId); - 1 !== Jd && (this._activePointerIds[Jd] = -1, this._activePointerIdsCount--, "touch" === dd.pointerType && this._latestPointerMoveEvents.delete(dd.pointerId), this._pickedUpMesh = null, this._meshPickProceed = !1, this._updatePointerPosition(dd), Nd.preventDefaultOnPointerUp && pd && (dd.preventDefault(), pd.focus()), this._initClickEvent(Nd.onPrePointerObservable, Nd.onPointerObservable, dd, ((Jd, kd) => {
            if (Nd.onPrePointerObservable.hasObservers() && (this._skipPointerTap = !1, !Jd.ignore)) {
              if (this._checkPrePointerObservable(null, dd, qd.b.POINTERUP)) return this._swipeButtonPressed === dd.button && (this._isSwiping = !1, this._swipeButtonPressed = -1), void(0 === dd.buttons && (this._pointerCaptures[dd.pointerId] = !1));
              Jd.hasSwiped || (Jd.singleClick && Nd.onPrePointerObservable.hasSpecificMask(qd.b.POINTERTAP) && this._checkPrePointerObservable(null, dd, qd.b.POINTERTAP) && (this._skipPointerTap = !0), Jd.aK && Nd.onPrePointerObservable.hasSpecificMask(qd.b.POINTERDOUBLETAP) && this._checkPrePointerObservable(null, dd, qd.b.POINTERDOUBLETAP) && (this._skipPointerTap = !0))
            }
            this._pointerCaptures[dd.pointerId] ? (0 === dd.buttons && (this._pointerCaptures[dd.pointerId] = !1), (Nd.cameraToUseForPointers || Nd.activeCamera) && (Nd.pointerUpPredicate || (Nd.pointerUpPredicate = dd => dd.iO && dd.isVisible && dd.isReady() && dd.isEnabled() && (!Nd.cameraToUseForPointers || 0 !== (Nd.cameraToUseForPointers.layerMask & dd.layerMask))), !this._meshPickProceed && (Bd && Bd.HasTriggers || this._checkForPicking() || Nd.onPointerUp) && this._initActionManager(null, Jd), kd || (kd = this._currentPickResult), this._processPointerUp(kd, dd, Jd), this._previousPickResult = this._currentPickResult, this._swipeButtonPressed === dd.button && (this._isSwiping = !1, this._swipeButtonPressed = -1))) : this._swipeButtonPressed === dd.button && (this._isSwiping = !1, this._swipeButtonPressed = -1)
          })))
        }, this._onKeyDown = dd => {
          const Jd = Sd.d.KEYDOWN;
          if (Nd.onPreKeyboardObservable.hasObservers()) {
            const kd = new Sd.f(Jd, dd);
            if (Nd.onPreKeyboardObservable.notifyObservers(kd, Jd), kd.skipOnKeyboardObservable) return
          }
          if (Nd.onKeyboardObservable.hasObservers()) {
            const kd = new Sd.j(Jd, dd);
            Nd.onKeyboardObservable.notifyObservers(kd, Jd)
          }
          Nd.actionManager && Nd.actionManager.processTrigger(14, Ld.CreateNewFromScene(Nd, dd))
        }, this._onKeyUp = dd => {
          const Jd = Sd.d.KEYUP;
          if (Nd.onPreKeyboardObservable.hasObservers()) {
            const kd = new Sd.f(Jd, dd);
            if (Nd.onPreKeyboardObservable.notifyObservers(kd, Jd), kd.skipOnKeyboardObservable) return
          }
          if (Nd.onKeyboardObservable.hasObservers()) {
            const kd = new Sd.j(Jd, dd);
            Nd.onKeyboardObservable.notifyObservers(kd, Jd)
          }
          Nd.actionManager && Nd.actionManager.processTrigger(15, Ld.CreateNewFromScene(Nd, dd))
        }, this._deviceSourceManager.onDeviceConnectedObservable.add((pd => {
          pd.deviceType === sd.Mouse ? pd.onInputChangedObservable.add((Nd => {
            this._originMouseEvent = Nd, Nd.inputIndex === ad.LeftClick || Nd.inputIndex === ad.MiddleClick || Nd.inputIndex === ad.RightClick || Nd.inputIndex === ad.BrowserBack || Nd.inputIndex === ad.BrowserForward ? Jd && 1 === pd.getInput(Nd.inputIndex) ? this._onPointerDown(Nd) : dd && 0 === pd.getInput(Nd.inputIndex) && this._onPointerUp(Nd) : kd && (Nd.inputIndex === ad.Move ? this._onPointerMove(Nd) : Nd.inputIndex !== ad.MouseWheelX && Nd.inputIndex !== ad.MouseWheelY && Nd.inputIndex !== ad.MouseWheelZ || this._onPointerMove(Nd))
          })) : pd.deviceType === sd.Touch ? pd.onInputChangedObservable.add((Nd => {
            Nd.inputIndex === ad.LeftClick && (Jd && 1 === pd.getInput(Nd.inputIndex) ? (this._onPointerDown(Nd), this._activePointerIdsCount > 1 && (this._isMultiTouchGesture = !0)) : dd && 0 === pd.getInput(Nd.inputIndex) && (this._onPointerUp(Nd), 0 === this._activePointerIdsCount && (this._isMultiTouchGesture = !1))), kd && Nd.inputIndex === ad.Move && this._onPointerMove(Nd)
          })) : pd.deviceType === sd.Keyboard && pd.onInputChangedObservable.add((dd => {
            "keydown" === dd.type ? this._onKeyDown(dd) : "keyup" === dd.type && this._onKeyUp(dd)
          }))
        })), this._alreadyAttached = !0
      }
      detachControl() {
        this._alreadyAttached && (this._deviceSourceManager.dispose(), this._deviceSourceManager = null, this._alreadyAttachedTo && !this._scene.doNotHandleCursors && (this._alreadyAttachedTo.style.cursor = this._scene.defaultCursor), this._alreadyAttached = !1, this._alreadyAttachedTo = null, this._latestPointerMoveEvents.clear())
      }
      setPointerOverMesh(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          kd = arguments.length > 2 ? arguments[2] : void 0,
          pd = arguments.length > 3 ? arguments[3] : void 0;
        if (this._meshUnderPointerId[Jd] === dd && (!dd || !dd._internalAbstractMeshDataInfo._pointerOverDisableMeshTesting)) return;
        const Nd = this._meshUnderPointerId[Jd];
        let Wd;
        Nd && (Wd = Nd._getActionManagerForTrigger(10), Wd && Wd.processTrigger(10, new Ld(Nd, this._pointerX, this._pointerY, dd, pd, {
          pointerId: Jd
        }))), dd ? (this._meshUnderPointerId[Jd] = dd, this._pointerOverMesh = dd, Wd = dd._getActionManagerForTrigger(9), Wd && Wd.processTrigger(9, new Ld(dd, this._pointerX, this._pointerY, dd, pd, {
          pointerId: Jd,
          pickResult: kd
        }))) : (delete this._meshUnderPointerId[Jd], this._pointerOverMesh = null), this._scene.onMeshUnderPointerUpdatedObservable.hasObservers() && this._scene.onMeshUnderPointerUpdatedObservable.notifyObservers({
          mesh: dd,
          pointerId: Jd
        })
      }
      getPointerOverMesh() {
        return this.meshUnderPointer
      }
      _invalidateMesh(dd) {
        this._pointerOverMesh === dd && (this._pointerOverMesh = null), this._pickedDownMesh === dd && (this._pickedDownMesh = null), this._pickedUpMesh === dd && (this._pickedUpMesh = null);
        for (const Jd in this._meshUnderPointerId) this._meshUnderPointerId[Jd] === dd && delete this._meshUnderPointerId[Jd]
      }
    }
    hd.DragMovementThreshold = 10, hd.LongPressDelay = 500, hd.DoubleClickDelay = 300, hd.ExclusiveDoubleClickMode = !1;
    var rd = kd(39915),
      ud = kd(37443),
      td = kd(37966);
    class Vd {
      static get UniqueId() {
        const dd = this._UniqueIdCounter;
        return this._UniqueIdCounter++, dd
      }
    }
    Vd._UniqueIdCounter = 1;
    var zd = kd(40007),
      Hd = kd(40186),
      wd = kd(37267);
    class Ad {
      constructor() {
        this.pointerDownFastCheck = !1, this.pointerUpFastCheck = !1, this.pointerMoveFastCheck = !1, this.skipPointerMovePicking = !1, this.skipPointerDownPicking = !1, this.skipPointerUpPicking = !1
      }
    }
    var dJ, JJ, kJ, pJ, NJ, WJ, PJ, ZJ, gJ, CJ, KJ, oJ, lJ, QJ, LJ, OJ, eJ, RJ, IJ, GJ, vJ, xJ, qJ, BJ, sJ, iJ, aJ, MJ, FJ, YJ, mJ, bJ, SJ, jJ, XJ, fJ, nJ, UJ, yJ, DJ, TJ, EJ, cJ, hJ, rJ, uJ, tJ, VJ, zJ, HJ, wJ, AJ, dk, Jk = kd(38812),
      kk = kd(37303);
    const pk = new Kd.o,
      Nk = new Kd.o;
    var Wk;
    ! function(dd) {
      dd[dd.BackwardCompatible = 0] = "BackwardCompatible", dd[dd.Intermediate = 1] = "Intermediate", dd[dd.Aggressive = 2] = "Aggressive"
    }(Wk || (Wk = {}));
    class Pk {
      static DefaultMaterialFactory(dd) {
        throw (0, xd.n)("StandardMaterial")
      }
      static CollisionCoordinatorFactory() {
        throw (0, xd.n)("DefaultCollisionCoordinator")
      }
      get clearColor() {
        return this._clearColor
      }
      set clearColor(dd) {
        dd !== this._clearColor && (this._clearColor = dd, this.onClearColorChangedObservable.notifyObservers(this._clearColor))
      }
      get imageProcessingConfiguration() {
        return this._imageProcessingConfiguration
      }
      get performancePriority() {
        return this._performancePriority
      }
      set performancePriority(dd) {
        if (dd !== this._performancePriority) {
          switch (this._performancePriority = dd, dd) {
            case 0:
              this.skipFrustumClipping = !1, this._renderingManager.maintainStateBetweenFrames = !1, this.skipPointerMovePicking = !1, this.autoClear = !0;
              break;
            case 1:
              this.skipFrustumClipping = !1, this._renderingManager.maintainStateBetweenFrames = !1, this.skipPointerMovePicking = !0, this.autoClear = !1;
              break;
            case 2:
              this.skipFrustumClipping = !0, this._renderingManager.maintainStateBetweenFrames = !0, this.skipPointerMovePicking = !0, this.autoClear = !1
          }
          this.onScenePerformancePriorityChangedObservable.notifyObservers(dd)
        }
      }
      set forceWireframe(dd) {
        this._forceWireframe !== dd && (this._forceWireframe = dd, this.markAllMaterialsAsDirty(16))
      }
      get forceWireframe() {
        return this._forceWireframe
      }
      set skipFrustumClipping(dd) {
        this._skipFrustumClipping !== dd && (this._skipFrustumClipping = dd)
      }
      get skipFrustumClipping() {
        return this._skipFrustumClipping
      }
      set forcePointsCloud(dd) {
        this._forcePointsCloud !== dd && (this._forcePointsCloud = dd, this.markAllMaterialsAsDirty(16))
      }
      get forcePointsCloud() {
        return this._forcePointsCloud
      }
      get environmentTexture() {
        return this._environmentTexture
      }
      set environmentTexture(dd) {
        this._environmentTexture !== dd && (this._environmentTexture = dd, this.onEnvironmentTextureChangedObservable.notifyObservers(dd), this.markAllMaterialsAsDirty(1))
      }
      getNodes() {
        let dd = [];
        dd = dd.concat(this.meshes), dd = dd.concat(this.lights), dd = dd.concat(this.cameras), dd = dd.concat(this.transformNodes);
        for (const Jd of this.skeletons) dd = dd.concat(Jd.bones);
        return dd
      }
      get animationPropertiesOverride() {
        return this._animationPropertiesOverride
      }
      set animationPropertiesOverride(dd) {
        this._animationPropertiesOverride = dd
      }
      set onDispose(dd) {
        this._onDisposeObserver && this.Zm.remove(this._onDisposeObserver), this._onDisposeObserver = this.Zm.add(dd)
      }
      set beforeRender(dd) {
        this._onBeforeRenderObserver && this.onBeforeRenderObservable.remove(this._onBeforeRenderObserver), dd && (this._onBeforeRenderObserver = this.onBeforeRenderObservable.add(dd))
      }
      set afterRender(dd) {
        this._onAfterRenderObserver && this.onAfterRenderObservable.remove(this._onAfterRenderObserver), dd && (this._onAfterRenderObserver = this.onAfterRenderObservable.add(dd))
      }
      set beforeCameraRender(dd) {
        this._onBeforeCameraRenderObserver && this.onBeforeCameraRenderObservable.remove(this._onBeforeCameraRenderObserver), this._onBeforeCameraRenderObserver = this.onBeforeCameraRenderObservable.add(dd)
      }
      set afterCameraRender(dd) {
        this._onAfterCameraRenderObserver && this.onAfterCameraRenderObservable.remove(this._onAfterCameraRenderObserver), this._onAfterCameraRenderObserver = this.onAfterCameraRenderObservable.add(dd)
      }
      get pointerDownPredicate() {
        return this._pointerPickingConfiguration.pointerDownPredicate
      }
      set pointerDownPredicate(dd) {
        this._pointerPickingConfiguration.pointerDownPredicate = dd
      }
      get pointerUpPredicate() {
        return this._pointerPickingConfiguration.pointerUpPredicate
      }
      set pointerUpPredicate(dd) {
        this._pointerPickingConfiguration.pointerUpPredicate = dd
      }
      get pointerMovePredicate() {
        return this._pointerPickingConfiguration.pointerMovePredicate
      }
      set pointerMovePredicate(dd) {
        this._pointerPickingConfiguration.pointerMovePredicate = dd
      }
      get pointerDownFastCheck() {
        return this._pointerPickingConfiguration.pointerDownFastCheck
      }
      set pointerDownFastCheck(dd) {
        this._pointerPickingConfiguration.pointerDownFastCheck = dd
      }
      get pointerUpFastCheck() {
        return this._pointerPickingConfiguration.pointerUpFastCheck
      }
      set pointerUpFastCheck(dd) {
        this._pointerPickingConfiguration.pointerUpFastCheck = dd
      }
      get pointerMoveFastCheck() {
        return this._pointerPickingConfiguration.pointerMoveFastCheck
      }
      set pointerMoveFastCheck(dd) {
        this._pointerPickingConfiguration.pointerMoveFastCheck = dd
      }
      get skipPointerMovePicking() {
        return this._pointerPickingConfiguration.skipPointerMovePicking
      }
      set skipPointerMovePicking(dd) {
        this._pointerPickingConfiguration.skipPointerMovePicking = dd
      }
      get skipPointerDownPicking() {
        return this._pointerPickingConfiguration.skipPointerDownPicking
      }
      set skipPointerDownPicking(dd) {
        this._pointerPickingConfiguration.skipPointerDownPicking = dd
      }
      get skipPointerUpPicking() {
        return this._pointerPickingConfiguration.skipPointerUpPicking
      }
      set skipPointerUpPicking(dd) {
        this._pointerPickingConfiguration.skipPointerUpPicking = dd
      }
      get unTranslatedPointer() {
        return this._inputManager.unTranslatedPointer
      }
      static get DragMovementThreshold() {
        return hd.DragMovementThreshold
      }
      static set DragMovementThreshold(dd) {
        hd.DragMovementThreshold = dd
      }
      static get LongPressDelay() {
        return hd.LongPressDelay
      }
      static set LongPressDelay(dd) {
        hd.LongPressDelay = dd
      }
      static get DoubleClickDelay() {
        return hd.DoubleClickDelay
      }
      static set DoubleClickDelay(dd) {
        hd.DoubleClickDelay = dd
      }
      static get ExclusiveDoubleClickMode() {
        return hd.ExclusiveDoubleClickMode
      }
      static set ExclusiveDoubleClickMode(dd) {
        hd.ExclusiveDoubleClickMode = dd
      }
      get _eyePosition() {
        return this._forcedViewPosition ?? this.activeCamera?.globalPosition ?? Kd.n.ZeroReadOnly
      }
      bindEyePosition(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "vEyePosition",
          kd = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const pd = this._eyePosition,
          Nd = this.useRightHandedSystem === (null != this._mirroredCameraPosition),
          Wd = this.floatingOriginOffset,
          Pd = pk.set(pd.x, pd.y, pd.z, Nd ? -1 : 1),
          Zd = Pd.subtractFromFloatsToRef(Wd.x, Wd.y, Wd.z, 0, Nk);
        return dd && (kd ? dd.setFloat3(Jd, Zd.x, Zd.y, Zd.z) : dd.setVector4(Jd, Zd)), Pd
      }
      finalizeSceneUbo() {
        const dd = this.getSceneUniformBuffer(),
          Jd = this.bindEyePosition(null),
          kd = this.floatingOriginOffset;
        return dd.updateFloat4("vEyePosition", Jd.x - kd.x, Jd.y - kd.y, Jd.z - kd.z, Jd.w), dd.update(), dd
      }
      set useRightHandedSystem(dd) {
        this._useRightHandedSystem !== dd && (this._useRightHandedSystem = dd, this.markAllMaterialsAsDirty(16))
      }
      get useRightHandedSystem() {
        return this._useRightHandedSystem
      }
      setStepId(dd) {
        this._currentStepId = dd
      }
      getStepId() {
        return this._currentStepId
      }
      getInternalStep() {
        return this._currentInternalStep
      }
      set fogEnabled(dd) {
        this._fogEnabled !== dd && (this._fogEnabled = dd, this.markAllMaterialsAsDirty(16))
      }
      get fogEnabled() {
        return this._fogEnabled
      }
      set fogMode(dd) {
        this._fogMode !== dd && (this._fogMode = dd, this.markAllMaterialsAsDirty(16))
      }
      get fogMode() {
        return this._fogMode
      }
      get prePass() {
        return !!this.prePassRenderer && this.prePassRenderer.defaultRT.enabled
      }
      set shadowsEnabled(dd) {
        this._shadowsEnabled !== dd && (this._shadowsEnabled = dd, this.markAllMaterialsAsDirty(2))
      }
      get shadowsEnabled() {
        return this._shadowsEnabled
      }
      set lightsEnabled(dd) {
        this._lightsEnabled !== dd && (this._lightsEnabled = dd, this.markAllMaterialsAsDirty(2))
      }
      get lightsEnabled() {
        return this._lightsEnabled
      }
      get activeCameras() {
        return this._activeCameras
      }
      set activeCameras(dd) {
        this._unObserveActiveCameras && (this._unObserveActiveCameras(), this._unObserveActiveCameras = null), dd && (this._unObserveActiveCameras = (0, wd.h)(dd, (() => {
          this.onActiveCamerasChanged.notifyObservers(this)
        }))), this._activeCameras = dd
      }
      get activeCamera() {
        return this._activeCamera
      }
      set activeCamera(dd) {
        dd !== this._activeCamera && (this._activeCamera = dd, this.onActiveCameraChanged.notifyObservers(this))
      }
      get _hasDefaultMaterial() {
        return Pk.DefaultMaterialFactory !== Pk._OriginalDefaultMaterialFactory
      }
      get defaultMaterial() {
        return this._defaultMaterial || (this._defaultMaterial = Pk.DefaultMaterialFactory(this)), this._defaultMaterial
      }
      set defaultMaterial(dd) {
        this._defaultMaterial = dd
      }
      set texturesEnabled(dd) {
        this._texturesEnabled !== dd && (this._texturesEnabled = dd, this.markAllMaterialsAsDirty(1))
      }
      get texturesEnabled() {
        return this._texturesEnabled
      }
      get frameGraph() {
        return this._frameGraph
      }
      set frameGraph(dd) {
        if (this._frameGraph) return this._frameGraph = dd, void(dd || (this.customRenderFunction = this._currentCustomRenderFunction));
        this._frameGraph = dd, dd && (this._currentCustomRenderFunction = this.customRenderFunction, this.customRenderFunction = this._renderWithFrameGraph, this.activeCamera = null)
      }
      set skeletonsEnabled(dd) {
        this._skeletonsEnabled !== dd && (this._skeletonsEnabled = dd, this.markAllMaterialsAsDirty(8))
      }
      get skeletonsEnabled() {
        return this._skeletonsEnabled
      }
      get collisionCoordinator() {
        return this._collisionCoordinator || (this._collisionCoordinator = Pk.CollisionCoordinatorFactory(), this._collisionCoordinator.init(this)), this._collisionCoordinator
      }
      get renderingManager() {
        return this._renderingManager
      }
      get frustumPlanes() {
        return this._frustumPlanes
      }
      _registerTransientComponents() {
        if (this._transientComponents.length > 0) {
          for (const dd of this._transientComponents) dd.register();
          this._transientComponents.length = 0
        }
      }
      Cpd(dd) {
        this._components.push(dd), this._transientComponents.push(dd);
        const Jd = dd;
        Jd.addFromContainer && Jd.serialize && this._serializableComponents.push(Jd)
      }
      _getComponent(dd) {
        for (const Jd of this._components)
          if (Jd.name === dd) return Jd;
        return null
      }
      get uniqueId() {
        return this._uniqueId
      }
      constructor(dd, Jd) {
        this._inputManager = new hd(this), this.cameraToUseForPointers = null, this._isScene = !0, this._blockEntityCollection = !1, this.autoClear = !0, this.autoClearDepthAndStencil = !0, this._clearColor = new ud.g(.2, .2, .3, 1), this.onClearColorChangedObservable = new Pd.e, this.ambientColor = new ud.c(0, 0, 0), this.environmentIntensity = 1, this.iblIntensity = 1, this._performancePriority = 0, this.onScenePerformancePriorityChangedObservable = new Pd.e, this._forceWireframe = !1, this._skipFrustumClipping = !1, this._forcePointsCloud = !1, this.rootNodes = [], this.cameras = [], this.lights = [], this.meshes = [], this.skeletons = [], this.Qv = [], this.animations = [], this.animationGroups = [], this.multiMaterials = [], this.materials = [], this.morphTargetManagers = [], this.geometries = [], this.transformNodes = [], this.actionManagers = [], this.objectRenderers = [], this.textures = [], this._environmentTexture = null, this.postProcesses = [], this.effectLayers = [], this.sounds = null, this.layers = [], this.lensFlareSystems = [], this.proceduralTextures = [], this.animationsEnabled = !0, this._animationPropertiesOverride = null, this.useConstantAnimationDeltaTime = !1, this.constantlyUpdateMeshUnderPointer = !1, this.hoverCursor = "pointer", this.defaultCursor = "", this.doNotHandleCursors = !1, this.preventDefaultOnPointerDown = !0, this.preventDefaultOnPointerUp = !0, this.metadata = null, this.reservedDataStore = null, this.disableOfflineSupportExceptionRules = [], this.Zm = new Pd.e, this._onDisposeObserver = null, this.onBeforeRenderObservable = new Pd.e, this._onBeforeRenderObserver = null, this.onAfterRenderObservable = new Pd.e, this.onAfterRenderCameraObservable = new Pd.e, this._onAfterRenderObserver = null, this.onBeforeAnimationsObservable = new Pd.e, this.onAfterAnimationsObservable = new Pd.e, this.onBeforeDrawPhaseObservable = new Pd.e, this.onAfterDrawPhaseObservable = new Pd.e, this.onReadyObservable = new Pd.e, this.onBeforeCameraRenderObservable = new Pd.e, this._onBeforeCameraRenderObserver = null, this.onAfterCameraRenderObservable = new Pd.e, this._onAfterCameraRenderObserver = null, this.onBeforeActiveMeshesEvaluationObservable = new Pd.e, this.onAfterActiveMeshesEvaluationObservable = new Pd.e, this.onBeforeParticlesRenderingObservable = new Pd.e, this.onAfterParticlesRenderingObservable = new Pd.e, this.onDataLoadedObservable = new Pd.e, this.onNewCameraAddedObservable = new Pd.e, this.onCameraRemovedObservable = new Pd.e, this.onNewLightAddedObservable = new Pd.e, this.onLightRemovedObservable = new Pd.e, this.onNewGeometryAddedObservable = new Pd.e, this.onGeometryRemovedObservable = new Pd.e, this.onNewTransformNodeAddedObservable = new Pd.e, this.onTransformNodeRemovedObservable = new Pd.e, this.onNewMeshAddedObservable = new Pd.e, this.onMeshRemovedObservable = new Pd.e, this.onNewSkeletonAddedObservable = new Pd.e, this.onSkeletonRemovedObservable = new Pd.e, this.onNewParticleSystemAddedObservable = new Pd.e, this.onParticleSystemRemovedObservable = new Pd.e, this.onNewAnimationGroupAddedObservable = new Pd.e, this.onAnimationGroupRemovedObservable = new Pd.e, this.onNewMaterialAddedObservable = new Pd.e, this.onNewMultiMaterialAddedObservable = new Pd.e, this.onMaterialRemovedObservable = new Pd.e, this.onMultiMaterialRemovedObservable = new Pd.e, this.onNewTextureAddedObservable = new Pd.e, this.onTextureRemovedObservable = new Pd.e, this.onNewFrameGraphAddedObservable = new Pd.e, this.onFrameGraphRemovedObservable = new Pd.e, this.onNewObjectRendererAddedObservable = new Pd.e, this.onObjectRendererRemovedObservable = new Pd.e, this.onNewPostProcessAddedObservable = new Pd.e, this.onPostProcessRemovedObservable = new Pd.e, this.onNewEffectLayerAddedObservable = new Pd.e, this.onEffectLayerRemovedObservable = new Pd.e, this.onBeforeRenderTargetsRenderObservable = new Pd.e, this.onAfterRenderTargetsRenderObservable = new Pd.e, this.onBeforeStepObservable = new Pd.e, this.onAfterStepObservable = new Pd.e, this.onActiveCameraChanged = new Pd.e, this.onActiveCamerasChanged = new Pd.e, this.onBeforeRenderingGroupObservable = new Pd.e, this.onAfterRenderingGroupObservable = new Pd.e, this.onMeshImportedObservable = new Pd.e, this.onAnimationFileImportedObservable = new Pd.e, this.onEnvironmentTextureChangedObservable = new Pd.e, this.onMeshUnderPointerUpdatedObservable = new Pd.e, this._registeredForLateAnimationBindings = new Zd.d(256), this._pointerPickingConfiguration = new Ad, this.onPrePointerObservable = new Pd.e, this.onPointerObservable = new Pd.e, this.onPreKeyboardObservable = new Pd.e, this.onKeyboardObservable = new Pd.e, this._useRightHandedSystem = !1, this._timeAccumulator = 0, this._currentStepId = 0, this._currentInternalStep = 0, this._fogEnabled = !0, this._fogMode = Pk.FOGMODE_NONE, this.fogColor = new ud.c(.2, .2, .3), this.fogDensity = .1, this.fogStart = 0, this.fogEnd = 1e3, this.needsPreviousWorldMatrices = !1, this._shadowsEnabled = !0, this._lightsEnabled = !0, this._unObserveActiveCameras = null, this._texturesEnabled = !0, this._frameGraph = null, this.frameGraphs = [], this.lD = !0, this.particlesEnabled = !0, this.spritesEnabled = !0, this._skeletonsEnabled = !0, this.lensFlaresEnabled = !0, this.collisionsEnabled = !0, this.gravity = new Kd.n(0, -9.807, 0), this.postProcessesEnabled = !0, this.renderTargetsEnabled = !0, this.dumpNextRenderTargets = !1, this.customRenderTargets = [], this.importedMeshesFiles = [], this.probesEnabled = !0, this._meshesForIntersections = new Zd.d(256), this.proceduralTexturesEnabled = !0, this._totalVertices = new rd.b, this._activeIndices = new rd.b, this._activeParticles = new rd.b, this._activeBones = new rd.b, this._animationTime = 0, this.animationTimeScale = 1, this._renderId = 0, this._frameId = 0, this._renderingMeshEvaluationDepth = 0, this._executeWhenReadyTimeoutId = null, this._intermediateRendering = !1, this._defaultFrameBufferCleared = !1, this._viewUpdateFlag = -1, this._projectionUpdateFlag = -1, this._toBeDisposed = new Array(256), this._activeRequests = new Array, this._delayedFileRequests = null, this._pendingData = [], this._isDisposed = !1, this._isDisposing = !1, this._isReadyChecks = [], this.dispatchAllSubMeshesOfActiveMeshes = !1, this._activeMeshes = new Zd.h(256), this._processedMaterials = new Zd.h(256), this._renderTargets = new Zd.d(256), this._materialsRenderTargets = new Zd.d(256), this._activeParticleSystems = new Zd.h(256), this._activeSkeletons = new Zd.d(32), this._softwareSkinnedMeshes = new Zd.d(32), this._activeAnimatables = new Array, this._animationWrites = new Array, this._animationWriteCount = 0, this._animationStepWriteCount = 0, this._animationStepEvaluated = !1, this._transformMatrix = Kd.b.Zero(), this.requireLightSorting = !1, this._components = [], this._serializableComponents = [], this._transientComponents = [], this._beforeCameraUpdateStage = Id.c.Create(), this._beforeClearStage = Id.c.Create(), this._beforeRenderTargetClearStage = Id.c.Create(), this._gatherRenderTargetsStage = Id.c.Create(), this._gatherActiveCameraRenderTargetsStage = Id.c.Create(), this._isReadyForMeshStage = Id.c.Create(), this._beforeEvaluateActiveMeshStage = Id.c.Create(), this._evaluateSubMeshStage = Id.c.Create(), this._preActiveMeshStage = Id.c.Create(), this._cameraDrawRenderTargetStage = Id.c.Create(), this._beforeCameraDrawStage = Id.c.Create(), this._beforeRenderTargetDrawStage = Id.c.Create(), this._beforeRenderingGroupDrawStage = Id.c.Create(), this._beforeRenderingMeshStage = Id.c.Create(), this._afterRenderingMeshStage = Id.c.Create(), this._afterRenderingGroupDrawStage = Id.c.Create(), this._afterCameraDrawStage = Id.c.Create(), this._afterCameraPostProcessStage = Id.c.Create(), this._afterRenderTargetDrawStage = Id.c.Create(), this._afterRenderTargetPostProcessStage = Id.c.Create(), this._afterRenderStage = Id.c.Create(), this._pointerMoveStage = Id.c.Create(), this._pointerDownStage = Id.c.Create(), this._pointerUpStage = Id.c.Create(), this._geometriesByUniqueId = null, this._uniqueId = 0, this._defaultMeshCandidates = {
          data: [],
          length: 0
        }, this._defaultSubMeshCandidates = {
          data: [],
          length: 0
        }, this.onReadyTimeoutObservable = new Pd.e, this.onReadyTimeoutDuration = 12e4, this._timeoutChecksStartTime = 0, this._floatingOriginScene = void 0, this._preventFreeActiveMeshesAndRenderingGroups = !1, this._activeMeshesFrozen = !1, this._activeMeshesFrozenButKeepClipping = !1, this._skipEvaluateActiveMeshesCompletely = !1, this._freezeActiveMeshesCancel = null, this._useCurrentFrameBuffer = !1, this._allowPostProcessClearColor = !0, this.getDeterministicFrameTime = () => this._engine.getTimeStep(), this._getFloatingOriginScene = () => this._floatingOriginScene, this._registeredActions = 0, this._blockMaterialDirtyMechanism = !1, this._perfCollector = null, this.activeCameras = [], this._uniqueId = this.getUniqueId();
        const kd = {
          useGeometryUniqueIdsMap: !0,
          useMaterialMeshMap: !0,
          useClonedMeshMap: !0,
          virtual: !1,
          defaultCameraLayerMask: 268435455,
          defaultRenderableLayerMask: 268435455,
          ...Jd
        };
        this.defaultCameraLayerMask = kd.defaultCameraLayerMask, this.defaultRenderableLayerMask = kd.defaultRenderableLayerMask, dd = this._engine = dd || vd.d.LastCreatedEngine, kd.virtual ? dd._virtualScenes.push(this) : (vd.d._LastCreatedScene = this, dd.scenes.push(this)), (dd.getCreationOptions().useLargeWorldRendering || Jd?.useFloatingOrigin) && ((0, ed.f)(), this._floatingOriginScene = this, ed.e.Wm = this._getFloatingOriginScene), this._uid = null, this._renderingManager = new Rd.b(this), Od.d && (this.postProcessManager = new Od.d(this)), (0, Gd.l)() && this.attachControl(), this._createUbo(), od.e && (this._imageProcessingConfiguration = new od.e), this.setDefaultCandidateProviders(), kd.useGeometryUniqueIdsMap && (this._geometriesByUniqueId = {}), this.useMaterialMeshMap = kd.useMaterialMeshMap, this.useClonedMeshMap = kd.useClonedMeshMap, Jd && Jd.virtual || dd.onNewSceneAddedObservable.notifyObservers(this)
      }
      getClassName() {
        return "Scene"
      }
      _getDefaultMeshCandidates() {
        return this._defaultMeshCandidates.data = this.meshes, this._defaultMeshCandidates.length = this.meshes.length, this._defaultMeshCandidates
      }
      _getDefaultSubMeshCandidates(dd) {
        return this._defaultSubMeshCandidates.data = dd.rG, this._defaultSubMeshCandidates.length = dd.rG.length, this._defaultSubMeshCandidates
      }
      setDefaultCandidateProviders() {
        this.getActiveMeshCandidates = () => this._getDefaultMeshCandidates(), this.getActiveSubMeshCandidates = dd => this._getDefaultSubMeshCandidates(dd), this.getIntersectingSubMeshCandidates = (dd, Jd) => this._getDefaultSubMeshCandidates(dd), this.getCollidingSubMeshCandidates = (dd, Jd) => this._getDefaultSubMeshCandidates(dd)
      }
      get meshUnderPointer() {
        return this._inputManager.meshUnderPointer
      }
      get pointerX() {
        return this._inputManager.pointerX
      }
      set pointerX(dd) {
        this._inputManager.pointerX = dd
      }
      get pointerY() {
        return this._inputManager.pointerY
      }
      set pointerY(dd) {
        this._inputManager.pointerY = dd
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
      isCachedMaterialInvalid(dd, Jd) {
        let kd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        return this._cachedEffect !== Jd || this._cachedMaterial !== dd || this._cachedVisibility !== kd
      }
      eL() {
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
      simulatePointerMove(dd, Jd) {
        return this._inputManager.simulatePointerMove(dd, Jd), this
      }
      simulatePointerDown(dd, Jd) {
        return this._inputManager.simulatePointerDown(dd, Jd), this
      }
      simulatePointerUp(dd, Jd, kd) {
        return this._inputManager.simulatePointerUp(dd, Jd, kd), this
      }
      isPointerCaptured() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return this._inputManager.isPointerCaptured(dd)
      }
      attachControl() {
        let dd = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          Jd = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          kd = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this._inputManager.attachControl(dd, Jd, kd)
      }
      detachControl() {
        this._inputManager.detachControl()
      }
      isReady() {
        let dd, Jd = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        if (this._isDisposed) return !1;
        const kd = this.eL(),
          pd = kd.currentRenderPassId;
        kd.currentRenderPassId = this.activeCamera?.renderPassId ?? pd;
        let Nd = !0;
        for (this._pendingData.length > 0 && (Nd = !1), this.prePassRenderer?.update(), this.useOrderIndependentTransparency && this.depthPeelingRenderer && Nd && (Nd = this.depthPeelingRenderer.isReady()), Jd && (this._processedMaterials.reset(), this._materialsRenderTargets.reset()), dd = 0; dd < this.meshes.length; dd++) {
          const pd = this.meshes[dd];
          if (!pd.rG || 0 === pd.rG.length) continue;
          if (!pd.isReady(!0)) {
            Nd = !1;
            continue
          }
          const Wd = pd.hasThinInstances || "InstancedMesh" === pd.getClassName() || "InstancedLinesMesh" === pd.getClassName() || kd.getCaps().instancedArrays && pd.instances.length > 0;
          for (let dd = 0, Jd = this._isReadyForMeshStage; dd < Jd.length; dd++) {
            Jd[dd].action(pd, Wd) || (Nd = !1)
          }
          if (!Jd) continue;
          const Pd = pd.material || this.defaultMaterial;
          if (Pd)
            if (Pd._storeEffectOnSubMeshes)
              for (const dd of pd.rG) {
                const Jd = dd.qL();
                Jd && Jd.hasRenderTargetTextures && null != Jd.getRenderTargetTextures && -1 === this._processedMaterials.indexOf(Jd) && (this._processedMaterials.push(Jd), this._materialsRenderTargets.concatWithNoDuplicate(Jd.getRenderTargetTextures()))
              } else Pd.hasRenderTargetTextures && null != Pd.getRenderTargetTextures && -1 === this._processedMaterials.indexOf(Pd) && (this._processedMaterials.push(Pd), this._materialsRenderTargets.concatWithNoDuplicate(Pd.getRenderTargetTextures()))
        }
        if (Jd) {
          for (dd = 0; dd < this._materialsRenderTargets.length; ++dd) {
            this._materialsRenderTargets.data[dd].isReadyForRendering() || (Nd = !1)
          }
          for (dd = 0; dd < this.customRenderTargets.length; ++dd) {
            this.customRenderTargets[dd].isReadyForRendering() || (Nd = !1)
          }
        }
        for (dd = 0; dd < this.geometries.length; dd++) {
          2 === this.geometries[dd].delayLoadState && (Nd = !1)
        }
        if (this.activeCameras && this.activeCameras.length > 0)
          for (const Wd of this.activeCameras) Wd.isReady(!0) || (Nd = !1);
        else this.activeCamera && (this.activeCamera.isReady(!0) || (Nd = !1));
        for (const Wd of this.Qv) Wd.isReady() || (Nd = !1);
        if (this.proceduralTexturesEnabled)
          for (const Wd of this.proceduralTextures) Wd.isReady() || (Nd = !1);
        if (this.layers)
          for (const Wd of this.layers) Wd.isReady() || (Nd = !1);
        if (this.effectLayers)
          for (const Wd of this.effectLayers) Wd.isLayerReady() || (Nd = !1);
        for (const Wd of this._isReadyChecks) Wd.isReady() || (Nd = !1);
        return kd.areAllEffectsReady() || (Nd = !1), kd.currentRenderPassId = pd, Nd
      }
      resetCachedMaterial() {
        this._cachedMaterial = null, this._cachedEffect = null, this._cachedVisibility = null
      }
      registerBeforeRender(dd) {
        this.onBeforeRenderObservable.add(dd)
      }
      unregisterBeforeRender(dd) {
        this.onBeforeRenderObservable.removeCallback(dd)
      }
      registerAfterRender(dd) {
        this.onAfterRenderObservable.add(dd)
      }
      unregisterAfterRender(dd) {
        this.onAfterRenderObservable.removeCallback(dd)
      }
      _executeOnceBeforeRender(dd) {
        const Jd = () => {
          dd(), setTimeout((() => {
            this.unregisterBeforeRender(Jd)
          }))
        };
        this.registerBeforeRender(Jd)
      }
      executeOnceBeforeRender(dd, Jd) {
        void 0 !== Jd ? setTimeout((() => {
          this._executeOnceBeforeRender(dd)
        }), Jd) : this._executeOnceBeforeRender(dd)
      }
      addPendingData(dd) {
        this._pendingData.push(dd)
      }
      removePendingData(dd) {
        const Jd = this.isLoading,
          kd = this._pendingData.indexOf(dd); - 1 !== kd && this._pendingData.splice(kd, 1), Jd && !this.isLoading && this.onDataLoadedObservable.notifyObservers(this)
      }
      getWaitingItemsCount() {
        return this._pendingData.length
      }
      get isLoading() {
        return this._pendingData.length > 0
      }
      addIsReadyCheck(dd) {
        -1 === this._isReadyChecks.indexOf(dd) && this._isReadyChecks.push(dd)
      }
      removeIsReadyCheck(dd) {
        const Jd = this._isReadyChecks.indexOf(dd); - 1 !== Jd && this._isReadyChecks.splice(Jd, 1)
      }
      executeWhenReady(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this.onReadyObservable.addOnce(dd), null === this._executeWhenReadyTimeoutId && this._checkIsReady(Jd)
      }
      async whenReadyAsync() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return await new Promise((Jd => {
          this.executeWhenReady((() => {
            Jd()
          }), dd)
        }))
      }
      _clearReadynessChecksData() {
        this._timeoutChecksStartTime = 0, this.onReadyTimeoutObservable.clear(), this.onReadyObservable.clear(), this._executeWhenReadyTimeoutId = null
      }
      _checkIsReady() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this._registerTransientComponents(), 0 === this._timeoutChecksStartTime) this._timeoutChecksStartTime = Wd.d.Now;
        else if (this.onReadyTimeoutDuration > 0 && Wd.d.Now - this._timeoutChecksStartTime > this.onReadyTimeoutDuration) return this.onReadyTimeoutObservable.notifyObservers(this), void this._clearReadynessChecksData();
        if (this.isReady(dd)) return this.onReadyObservable.notifyObservers(this), void this._clearReadynessChecksData();
        this._isDisposed ? this._clearReadynessChecksData() : this._executeWhenReadyTimeoutId = setTimeout((() => {
          this.incrementRenderId(), this._checkIsReady(dd)
        }), 100)
      }
      get animatables() {
        return this._activeAnimatables
      }
      resetLastAnimationTimeFrame() {
        this._animationTimeLast = Wd.d.Now
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
      setTransformMatrix(dd, Jd, kd, pd) {
        this._multiviewSceneUboIsActive = !!(kd && pd && this._multiviewSceneUbo), this._viewUpdateFlag === dd.updateFlag && this._projectionUpdateFlag === Jd.updateFlag || (this._viewUpdateFlag = dd.updateFlag, this._projectionUpdateFlag = Jd.updateFlag, this._viewMatrix = dd, this._projectionMatrix = Jd, this._inverseProjectionMatrix || (this._inverseProjectionMatrix = new Kd.b), this._projectionMatrix.invertToRef(this._inverseProjectionMatrix), this._viewMatrix.multiplyToRef(this._projectionMatrix, this._transformMatrix), this._frustumPlanes ? td.b.GetPlanesToRef(this._transformMatrix, this._frustumPlanes) : this._frustumPlanes = td.b.GetPlanes(this._transformMatrix), this._multiviewSceneUboIsActive && this._multiviewSceneUbo.useUbo ? this._updateMultiviewUbo(kd, pd) : this._sceneUbo.useUbo && (this._sceneUbo.o3("viewProjection", this._transformMatrix), this._sceneUbo.o3("view", this._viewMatrix), this._sceneUbo.o3("projection", this._projectionMatrix), this._sceneUbo.o3("inverseProjection", this._inverseProjectionMatrix)))
      }
      getSceneUniformBuffer() {
        return this._multiviewSceneUboIsActive && this._multiviewSceneUbo ? this._multiviewSceneUbo : this._sceneUbo
      }
      createSceneUniformBuffer(dd, Jd) {
        const kd = "boolean" === typeof Jd ? Jd : Jd?.trackUBOsInFrame,
          pd = new ld.e(this._engine, void 0, !1, dd ?? "BO", void 0, kd);
        return pd.addUniform("viewProjection", 16), pd.addUniform("view", 16), pd.addUniform("projection", 16), pd.addUniform("vEyePosition", 4), pd.addUniform("inverseProjection", 16), pd
      }
      setSceneUniformBuffer(dd) {
        this._sceneUbo = dd, this._viewUpdateFlag = -1, this._projectionUpdateFlag = -1
      }
      get floatingOriginMode() {
        return void 0 !== this._floatingOriginScene
      }
      get floatingOriginOffset() {
        return this.floatingOriginMode ? this._eyePosition : Kd.n.ZeroReadOnly
      }
      getUniqueId() {
        return Vd.UniqueId
      }
      apd(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (!this._blockEntityCollection && (this.meshes.push(dd), dd._resyncLightSources(), dd.parent || dd._addToSceneRootNodes(), Nd.d.SetImmediate((() => {
            this.onNewMeshAddedObservable.notifyObservers(dd)
          })), Jd)) {
          const Jd = dd.getChildMeshes();
          for (const dd of Jd) this.apd(dd)
        }
      }
      Tm(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const kd = this.meshes.indexOf(dd);
        if (-1 !== kd && (this.meshes.splice(kd, 1), dd.parent || dd._removeFromSceneRootNodes()), this._inputManager._invalidateMesh(dd), this.onMeshRemovedObservable.notifyObservers(dd), Jd) {
          const Jd = dd.getChildMeshes();
          for (const dd of Jd) this.Tm(dd)
        }
        return kd
      }
      addTransformNode(dd) {
        this._blockEntityCollection || dd.Wm() === this && -1 !== dd._indexInSceneTransformNodesArray || (dd._indexInSceneTransformNodesArray = this.transformNodes.length, this.transformNodes.push(dd), dd.parent || dd._addToSceneRootNodes(), this.onNewTransformNodeAddedObservable.notifyObservers(dd))
      }
      removeTransformNode(dd) {
        const Jd = dd._indexInSceneTransformNodesArray;
        if (-1 !== Jd) {
          if (Jd !== this.transformNodes.length - 1) {
            const dd = this.transformNodes[this.transformNodes.length - 1];
            this.transformNodes[Jd] = dd, dd._indexInSceneTransformNodesArray = Jd
          }
          dd._indexInSceneTransformNodesArray = -1, this.transformNodes.pop(), dd.parent || dd._removeFromSceneRootNodes()
        }
        return this.onTransformNodeRemovedObservable.notifyObservers(dd), Jd
      }
      removeSkeleton(dd) {
        const Jd = this.skeletons.indexOf(dd);
        return -1 !== Jd && (this.skeletons.splice(Jd, 1), this.onSkeletonRemovedObservable.notifyObservers(dd), this._executeActiveContainerCleanup(this._activeSkeletons)), Jd
      }
      removeMorphTargetManager(dd) {
        const Jd = this.morphTargetManagers.indexOf(dd);
        return -1 !== Jd && this.morphTargetManagers.splice(Jd, 1), Jd
      }
      removeLight(dd) {
        const Jd = this.lights.indexOf(dd);
        if (-1 !== Jd) {
          for (const Jd of this.meshes) Jd._removeLightSource(dd, !1);
          this.lights.splice(Jd, 1), this.sortLightsByPriority(), dd.parent || dd._removeFromSceneRootNodes(), this.onLightRemovedObservable.notifyObservers(dd)
        }
        return Jd
      }
      removeCamera(dd) {
        const Jd = this.cameras.indexOf(dd);
        if (-1 !== Jd && (this.cameras.splice(Jd, 1), dd.parent || dd._removeFromSceneRootNodes()), this.activeCameras) {
          const Jd = this.activeCameras.indexOf(dd); - 1 !== Jd && this.activeCameras.splice(Jd, 1)
        }
        return this.activeCamera === dd && (this.cameras.length > 0 ? this.activeCamera = this.cameras[0] : this.activeCamera = null), this.onCameraRemovedObservable.notifyObservers(dd), Jd
      }
      removeParticleSystem(dd) {
        const Jd = this.Qv.indexOf(dd);
        return -1 !== Jd && (this.Qv.splice(Jd, 1), this._executeActiveContainerCleanup(this._activeParticleSystems)), this.onParticleSystemRemovedObservable.notifyObservers(dd), Jd
      }
      removeAnimation(dd) {
        const Jd = this.animations.indexOf(dd);
        return -1 !== Jd && this.animations.splice(Jd, 1), Jd
      }
      stopAnimation(dd, Jd, kd) {}
      removeAnimationGroup(dd) {
        const Jd = this.animationGroups.indexOf(dd);
        return -1 !== Jd && this.animationGroups.splice(Jd, 1), this.onAnimationGroupRemovedObservable.notifyObservers(dd), Jd
      }
      removeMultiMaterial(dd) {
        const Jd = this.multiMaterials.indexOf(dd);
        return -1 !== Jd && this.multiMaterials.splice(Jd, 1), this.onMultiMaterialRemovedObservable.notifyObservers(dd), Jd
      }
      removeMaterial(dd) {
        const Jd = dd._indexInSceneMaterialArray;
        if (-1 !== Jd && Jd < this.materials.length) {
          if (Jd !== this.materials.length - 1) {
            const dd = this.materials[this.materials.length - 1];
            this.materials[Jd] = dd, dd._indexInSceneMaterialArray = Jd
          }
          dd._indexInSceneMaterialArray = -1, this.materials.pop()
        }
        return this.onMaterialRemovedObservable.notifyObservers(dd), Jd
      }
      removeActionManager(dd) {
        const Jd = this.actionManagers.indexOf(dd);
        return -1 !== Jd && this.actionManagers.splice(Jd, 1), Jd
      }
      removeTexture(dd) {
        const Jd = this.textures.indexOf(dd);
        return -1 !== Jd && this.textures.splice(Jd, 1), this.onTextureRemovedObservable.notifyObservers(dd), Jd
      }
      removeFrameGraph(dd) {
        const Jd = this.frameGraphs.indexOf(dd);
        return -1 !== Jd && this.frameGraphs.splice(Jd, 1), this.onFrameGraphRemovedObservable.notifyObservers(dd), Jd
      }
      removeObjectRenderer(dd) {
        const Jd = this.objectRenderers.indexOf(dd);
        return -1 !== Jd && this.objectRenderers.splice(Jd, 1), this.onObjectRendererRemovedObservable.notifyObservers(dd), Jd
      }
      removePostProcess(dd) {
        const Jd = this.postProcesses.indexOf(dd);
        return -1 !== Jd && this.postProcesses.splice(Jd, 1), this.onPostProcessRemovedObservable.notifyObservers(dd), Jd
      }
      removeEffectLayer(dd) {
        const Jd = this.effectLayers.indexOf(dd);
        return -1 !== Jd && this.effectLayers.splice(Jd, 1), this.onEffectLayerRemovedObservable.notifyObservers(dd), Jd
      }
      addLight(dd) {
        if (!this._blockEntityCollection) {
          this.lights.push(dd), this.sortLightsByPriority(), dd.parent || dd._addToSceneRootNodes();
          for (const Jd of this.meshes) - 1 === Jd.lightSources.indexOf(dd) && (Jd.lightSources.push(dd), Jd._resyncLightSources());
          Nd.d.SetImmediate((() => {
            this.onNewLightAddedObservable.notifyObservers(dd)
          }))
        }
      }
      sortLightsByPriority() {
        this.requireLightSorting && this.lights.sort(Hd.d.CompareLightsPriority)
      }
      addCamera(dd) {
        this._blockEntityCollection || (this.cameras.push(dd), Nd.d.SetImmediate((() => {
          this.onNewCameraAddedObservable.notifyObservers(dd)
        })), dd.parent || dd._addToSceneRootNodes())
      }
      addSkeleton(dd) {
        this._blockEntityCollection || (this.skeletons.push(dd), Nd.d.SetImmediate((() => {
          this.onNewSkeletonAddedObservable.notifyObservers(dd)
        })))
      }
      addParticleSystem(dd) {
        this._blockEntityCollection || (this.Qv.push(dd), Nd.d.SetImmediate((() => {
          this.onNewParticleSystemAddedObservable.notifyObservers(dd)
        })))
      }
      addAnimation(dd) {
        this._blockEntityCollection || this.animations.push(dd)
      }
      addAnimationGroup(dd) {
        this._blockEntityCollection || (this.animationGroups.push(dd), Nd.d.SetImmediate((() => {
          this.onNewAnimationGroupAddedObservable.notifyObservers(dd)
        })))
      }
      addMultiMaterial(dd) {
        this._blockEntityCollection || (this.multiMaterials.push(dd), Nd.d.SetImmediate((() => {
          this.onNewMultiMaterialAddedObservable.notifyObservers(dd)
        })))
      }
      addMaterial(dd) {
        this._blockEntityCollection || dd.Wm() === this && -1 !== dd._indexInSceneMaterialArray || (dd._indexInSceneMaterialArray = this.materials.length, this.materials.push(dd), Nd.d.SetImmediate((() => {
          this.onNewMaterialAddedObservable.notifyObservers(dd)
        })))
      }
      addMorphTargetManager(dd) {
        this._blockEntityCollection || this.morphTargetManagers.push(dd)
      }
      addGeometry(dd) {
        this._blockEntityCollection || (this._geometriesByUniqueId && (this._geometriesByUniqueId[dd.uniqueId] = this.geometries.length), this.geometries.push(dd))
      }
      addActionManager(dd) {
        this.actionManagers.push(dd)
      }
      addTexture(dd) {
        this._blockEntityCollection || (this.textures.push(dd), this.onNewTextureAddedObservable.notifyObservers(dd))
      }
      addFrameGraph(dd) {
        this.frameGraphs.push(dd), Nd.d.SetImmediate((() => {
          this.onNewFrameGraphAddedObservable.notifyObservers(dd)
        }))
      }
      addObjectRenderer(dd) {
        this.objectRenderers.push(dd), Nd.d.SetImmediate((() => {
          this.onNewObjectRendererAddedObservable.notifyObservers(dd)
        }))
      }
      addPostProcess(dd) {
        this._blockEntityCollection || (this.postProcesses.push(dd), Nd.d.SetImmediate((() => {
          this.onNewPostProcessAddedObservable.notifyObservers(dd)
        })))
      }
      addEffectLayer(dd) {
        this._blockEntityCollection || (this.effectLayers.push(dd), Nd.d.SetImmediate((() => {
          this.onNewEffectLayerAddedObservable.notifyObservers(dd)
        })))
      }
      switchActiveCamera(dd) {
        let Jd = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this._engine.getInputElement() && (this.activeCamera && this.activeCamera.detachControl(), this.activeCamera = dd, Jd && dd.attachControl())
      }
      setActiveCameraById(dd) {
        const Jd = this.getCameraById(dd);
        return Jd ? (this.activeCamera = Jd, Jd) : null
      }
      setActiveCameraByName(dd) {
        const Jd = this.getCameraByName(dd);
        return Jd ? (this.activeCamera = Jd, Jd) : null
      }
      getAnimationGroupByName(dd) {
        for (let Jd = 0; Jd < this.animationGroups.length; Jd++)
          if (this.animationGroups[Jd].name === dd) return this.animationGroups[Jd];
        return null
      }
      _getMaterial(dd, Jd) {
        for (let kd = 0; kd < this.materials.length; kd++) {
          const dd = this.materials[kd];
          if (Jd(dd)) return dd
        }
        if (dd)
          for (let kd = 0; kd < this.multiMaterials.length; kd++) {
            const dd = this.multiMaterials[kd];
            if (Jd(dd)) return dd
          }
        return null
      }
      getMaterialByUniqueID(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this.getMaterialByUniqueId(dd, Jd)
      }
      getMaterialByUniqueId(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this._getMaterial(Jd, (Jd => Jd.uniqueId === dd))
      }
      getMaterialById(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this._getMaterial(Jd, (Jd => Jd.id === dd))
      }
      getMaterialByName(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this._getMaterial(Jd, (Jd => Jd.name === dd))
      }
      getLastMaterialById(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        for (let kd = this.materials.length - 1; kd >= 0; kd--)
          if (this.materials[kd].id === dd) return this.materials[kd];
        if (Jd)
          for (let kd = this.multiMaterials.length - 1; kd >= 0; kd--)
            if (this.multiMaterials[kd].id === dd) return this.multiMaterials[kd];
        return null
      }
      getTextureByUniqueId(dd) {
        for (let Jd = 0; Jd < this.textures.length; Jd++)
          if (this.textures[Jd].uniqueId === dd) return this.textures[Jd];
        return null
      }
      getTextureByName(dd) {
        for (let Jd = 0; Jd < this.textures.length; Jd++)
          if (this.textures[Jd].name === dd) return this.textures[Jd];
        return null
      }
      getCameraById(dd) {
        for (let Jd = 0; Jd < this.cameras.length; Jd++)
          if (this.cameras[Jd].id === dd) return this.cameras[Jd];
        return null
      }
      getCameraByUniqueId(dd) {
        for (let Jd = 0; Jd < this.cameras.length; Jd++)
          if (this.cameras[Jd].uniqueId === dd) return this.cameras[Jd];
        return null
      }
      getCameraByName(dd) {
        for (let Jd = 0; Jd < this.cameras.length; Jd++)
          if (this.cameras[Jd].name === dd) return this.cameras[Jd];
        return null
      }
      getBoneById(dd) {
        for (let Jd = 0; Jd < this.skeletons.length; Jd++) {
          const kd = this.skeletons[Jd];
          for (let Jd = 0; Jd < kd.bones.length; Jd++)
            if (kd.bones[Jd].id === dd) return kd.bones[Jd]
        }
        return null
      }
      getBoneByName(dd) {
        for (let Jd = 0; Jd < this.skeletons.length; Jd++) {
          const kd = this.skeletons[Jd];
          for (let Jd = 0; Jd < kd.bones.length; Jd++)
            if (kd.bones[Jd].name === dd) return kd.bones[Jd]
        }
        return null
      }
      getLightByName(dd) {
        for (let Jd = 0; Jd < this.lights.length; Jd++)
          if (this.lights[Jd].name === dd) return this.lights[Jd];
        return null
      }
      getLightById(dd) {
        for (let Jd = 0; Jd < this.lights.length; Jd++)
          if (this.lights[Jd].id === dd) return this.lights[Jd];
        return null
      }
      getLightByUniqueId(dd) {
        for (let Jd = 0; Jd < this.lights.length; Jd++)
          if (this.lights[Jd].uniqueId === dd) return this.lights[Jd];
        return null
      }
      getParticleSystemById(dd) {
        for (let Jd = 0; Jd < this.Qv.length; Jd++)
          if (this.Qv[Jd].id === dd) return this.Qv[Jd];
        return null
      }
      getGeometryById(dd) {
        for (let Jd = 0; Jd < this.geometries.length; Jd++)
          if (this.geometries[Jd].id === dd) return this.geometries[Jd];
        return null
      }
      _getGeometryByUniqueId(dd) {
        if (this._geometriesByUniqueId) {
          const Jd = this._geometriesByUniqueId[dd];
          if (void 0 !== Jd) return this.geometries[Jd]
        } else
          for (let Jd = 0; Jd < this.geometries.length; Jd++)
            if (this.geometries[Jd].uniqueId === dd) return this.geometries[Jd];
        return null
      }
      getFrameGraphByName(dd) {
        for (let Jd = 0; Jd < this.frameGraphs.length; Jd++)
          if (this.frameGraphs[Jd].name === dd) return this.frameGraphs[Jd];
        return null
      }
      pushGeometry(dd, Jd) {
        return !(!Jd && this._getGeometryByUniqueId(dd.uniqueId)) && (this.addGeometry(dd), Nd.d.SetImmediate((() => {
          this.onNewGeometryAddedObservable.notifyObservers(dd)
        })), !0)
      }
      removeGeometry(dd) {
        let Jd;
        if (this._geometriesByUniqueId) {
          if (Jd = this._geometriesByUniqueId[dd.uniqueId], void 0 === Jd) return !1
        } else if (Jd = this.geometries.indexOf(dd), Jd < 0) return !1;
        if (Jd !== this.geometries.length - 1) {
          const dd = this.geometries[this.geometries.length - 1];
          dd && (this.geometries[Jd] = dd, this._geometriesByUniqueId && (this._geometriesByUniqueId[dd.uniqueId] = Jd))
        }
        return this._geometriesByUniqueId && (this._geometriesByUniqueId[dd.uniqueId] = void 0), this.geometries.pop(), this.onGeometryRemovedObservable.notifyObservers(dd), !0
      }
      getGeometries() {
        return this.geometries
      }
      getMeshById(dd) {
        for (let Jd = 0; Jd < this.meshes.length; Jd++)
          if (this.meshes[Jd].id === dd) return this.meshes[Jd];
        return null
      }
      getMeshesById(dd) {
        return this.meshes.filter((function(Jd) {
          return Jd.id === dd
        }))
      }
      getTransformNodeById(dd) {
        for (let Jd = 0; Jd < this.transformNodes.length; Jd++)
          if (this.transformNodes[Jd].id === dd) return this.transformNodes[Jd];
        return null
      }
      getTransformNodeByUniqueId(dd) {
        for (let Jd = 0; Jd < this.transformNodes.length; Jd++)
          if (this.transformNodes[Jd].uniqueId === dd) return this.transformNodes[Jd];
        return null
      }
      getTransformNodesById(dd) {
        return this.transformNodes.filter((function(Jd) {
          return Jd.id === dd
        }))
      }
      getMeshByUniqueId(dd) {
        for (let Jd = 0; Jd < this.meshes.length; Jd++)
          if (this.meshes[Jd].uniqueId === dd) return this.meshes[Jd];
        return null
      }
      getLastMeshById(dd) {
        for (let Jd = this.meshes.length - 1; Jd >= 0; Jd--)
          if (this.meshes[Jd].id === dd) return this.meshes[Jd];
        return null
      }
      getLastTransformNodeById(dd) {
        for (let Jd = this.transformNodes.length - 1; Jd >= 0; Jd--)
          if (this.transformNodes[Jd].id === dd) return this.transformNodes[Jd];
        return null
      }
      getLastEntryById(dd) {
        let Jd;
        for (Jd = this.meshes.length - 1; Jd >= 0; Jd--)
          if (this.meshes[Jd].id === dd) return this.meshes[Jd];
        for (Jd = this.transformNodes.length - 1; Jd >= 0; Jd--)
          if (this.transformNodes[Jd].id === dd) return this.transformNodes[Jd];
        for (Jd = this.cameras.length - 1; Jd >= 0; Jd--)
          if (this.cameras[Jd].id === dd) return this.cameras[Jd];
        for (Jd = this.lights.length - 1; Jd >= 0; Jd--)
          if (this.lights[Jd].id === dd) return this.lights[Jd];
        for (Jd = this.skeletons.length - 1; Jd >= 0; Jd--) {
          const kd = this.skeletons[Jd];
          for (let Jd = kd.bones.length - 1; Jd >= 0; Jd--)
            if (kd.bones[Jd].id === dd) return kd.bones[Jd]
        }
        return null
      }
      getNodeById(dd) {
        const Jd = this.getMeshById(dd);
        if (Jd) return Jd;
        const kd = this.getTransformNodeById(dd);
        if (kd) return kd;
        const pd = this.getLightById(dd);
        if (pd) return pd;
        const Nd = this.getCameraById(dd);
        if (Nd) return Nd;
        const Wd = this.getBoneById(dd);
        return Wd || null
      }
      getNodeByName(dd) {
        const Jd = this.getMeshByName(dd);
        if (Jd) return Jd;
        const kd = this.getTransformNodeByName(dd);
        if (kd) return kd;
        const pd = this.getLightByName(dd);
        if (pd) return pd;
        const Nd = this.getCameraByName(dd);
        if (Nd) return Nd;
        const Wd = this.getBoneByName(dd);
        return Wd || null
      }
      getMeshByName(dd) {
        for (let Jd = 0; Jd < this.meshes.length; Jd++)
          if (this.meshes[Jd].name === dd) return this.meshes[Jd];
        return null
      }
      getTransformNodeByName(dd) {
        for (let Jd = 0; Jd < this.transformNodes.length; Jd++)
          if (this.transformNodes[Jd].name === dd) return this.transformNodes[Jd];
        return null
      }
      getLastSkeletonById(dd) {
        for (let Jd = this.skeletons.length - 1; Jd >= 0; Jd--)
          if (this.skeletons[Jd].id === dd) return this.skeletons[Jd];
        return null
      }
      getSkeletonByUniqueId(dd) {
        for (let Jd = 0; Jd < this.skeletons.length; Jd++)
          if (this.skeletons[Jd].uniqueId === dd) return this.skeletons[Jd];
        return null
      }
      getSkeletonById(dd) {
        for (let Jd = 0; Jd < this.skeletons.length; Jd++)
          if (this.skeletons[Jd].id === dd) return this.skeletons[Jd];
        return null
      }
      getSkeletonByName(dd) {
        for (let Jd = 0; Jd < this.skeletons.length; Jd++)
          if (this.skeletons[Jd].name === dd) return this.skeletons[Jd];
        return null
      }
      getMorphTargetManagerById(dd) {
        for (let Jd = 0; Jd < this.morphTargetManagers.length; Jd++)
          if (this.morphTargetManagers[Jd].uniqueId === dd) return this.morphTargetManagers[Jd];
        return null
      }
      getMorphTargetById(dd) {
        for (let Jd = 0; Jd < this.morphTargetManagers.length; ++Jd) {
          const kd = this.morphTargetManagers[Jd];
          for (let Jd = 0; Jd < kd.numTargets; ++Jd) {
            const pd = kd.getTarget(Jd);
            if (pd.id === dd) return pd
          }
        }
        return null
      }
      getMorphTargetByName(dd) {
        for (let Jd = 0; Jd < this.morphTargetManagers.length; ++Jd) {
          const kd = this.morphTargetManagers[Jd];
          for (let Jd = 0; Jd < kd.numTargets; ++Jd) {
            const pd = kd.getTarget(Jd);
            if (pd.name === dd) return pd
          }
        }
        return null
      }
      getPostProcessByName(dd) {
        for (let Jd = 0; Jd < this.postProcesses.length; ++Jd) {
          const kd = this.postProcesses[Jd];
          if (kd.name === dd) return kd
        }
        return null
      }
      isActiveMesh(dd) {
        return -1 !== this._activeMeshes.indexOf(dd)
      }
      get uid() {
        return this._uid || (this._uid = pd.h.RandomId()), this._uid
      }
      addExternalData(dd, Jd) {
        return this._externalData || (this._externalData = new gd), this._externalData.add(dd, Jd)
      }
      getExternalData(dd) {
        return this._externalData ? this._externalData.get(dd) : null
      }
      getOrAddExternalDataWithFactory(dd, Jd) {
        return this._externalData || (this._externalData = new gd), this._externalData.getOrAddWithFactory(dd, Jd)
      }
      removeExternalData(dd) {
        return this._externalData.remove(dd)
      }
      _evaluateSubMesh(dd, Jd, kd, pd) {
        if (pd || dd.isInFrustum(this._frustumPlanes)) {
          for (let pd = 0, Nd = this._evaluateSubMeshStage; pd < Nd.length; pd++) {
            Nd[pd].action(Jd, dd)
          }
          const kd = dd.qL();
          null !== kd && void 0 !== kd && (kd.hasRenderTargetTextures && null != kd.getRenderTargetTextures && -1 === this._processedMaterials.indexOf(kd) && (this._processedMaterials.push(kd), this._materialsRenderTargets.concatWithNoDuplicate(kd.getRenderTargetTextures())), this._renderingManager.dispatch(dd, Jd, kd))
        }
      }
      freeProcessedMaterials() {
        this._processedMaterials.dispose()
      }
      get blockfreeActiveMeshesAndRenderingGroups() {
        return this._preventFreeActiveMeshesAndRenderingGroups
      }
      set blockfreeActiveMeshesAndRenderingGroups(dd) {
        this._preventFreeActiveMeshesAndRenderingGroups !== dd && (dd && (this.freeActiveMeshes(), this.freeRenderingGroups()), this._preventFreeActiveMeshesAndRenderingGroups = dd)
      }
      freeActiveMeshes() {
        if (!this.blockfreeActiveMeshesAndRenderingGroups && (this._activeMeshes.dispose(), this.activeCamera && this.activeCamera._activeMeshes && this.activeCamera._activeMeshes.dispose(), this.activeCameras))
          for (let dd = 0; dd < this.activeCameras.length; dd++) {
            const Jd = this.activeCameras[dd];
            Jd && Jd._activeMeshes && Jd._activeMeshes.dispose()
          }
      }
      freeRenderingGroups() {
        if (!this.blockfreeActiveMeshesAndRenderingGroups && (this._renderingManager && this._renderingManager.freeRenderingGroups(), this.textures))
          for (let dd = 0; dd < this.textures.length; dd++) {
            const Jd = this.textures[dd];
            Jd && Jd.renderList && Jd.freeRenderingGroups()
          }
      }
      _isInIntermediateRendering() {
        return this._intermediateRendering
      }
      _isInRenderingMeshEvaluation() {
        return this._renderingMeshEvaluationDepth > 0
      }
      freezeActiveMeshes() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          Jd = arguments.length > 1 ? arguments[1] : void 0,
          kd = arguments.length > 2 ? arguments[2] : void 0,
          pd = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
          Wd = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (this.frameGraph) {
          this._renderWithFrameGraph(!0, !1, !0);
          const Pd = this.frameGraph.getTasksByClassName(["FrameGraphObjectRendererTask", "FrameGraphGeometryRendererTask"]);
          for (const dd of Pd) dd.objectRenderer._freezeActiveMeshes(pd);
          return this._freezeActiveMeshesCancel = (0, Nd.f)((() => {
            let dd = !0,
              Jd = !0;
            for (const kd of Pd) dd && (dd = kd.objectRenderer._isFrozen), Jd && (Jd = null !== kd.objectRenderer._freezeActiveMeshesCancel);
            if (dd) return !0;
            if (!Jd) throw new Error("Freezing active meshes was cancelled");
            return !1
          }), (() => {
            this._freezeActiveMeshesCancel = null, this._activeMeshesFrozen = !0, this._activeMeshesFrozenButKeepClipping = Wd, this._skipEvaluateActiveMeshesCompletely = dd, Jd?.()
          }), ((dd, Jd) => {
            if (this._freezeActiveMeshesCancel = null, this.unfreezeActiveMeshes(), Jd) {
              const Jd = "Scene: Timeout while waiting for meshes to be frozen.";
              kd ? kd(Jd) : (Jk.c.Error(Jd), dd && Jk.c.Error(dd))
            } else {
              const Jd = "Scene: An unexpected error occurred while trying to freeze active meshes.";
              kd ? kd(Jd) : (Jk.c.Error(Jd), dd && (Jk.c.Error(dd), dd.stack && Jk.c.Error(dd.stack)))
            }
          })), this
        }
        return this.executeWhenReady((() => {
          if (this.activeCamera) {
            if (this._frustumPlanes || this.updateTransformMatrix(), this._evaluateActiveMeshes(), this._activeMeshesFrozen = !0, this._activeMeshesFrozenButKeepClipping = Wd, this._skipEvaluateActiveMeshesCompletely = dd, pd)
              for (let dd = 0; dd < this._activeMeshes.length; dd++) this._activeMeshes.data[dd]._freeze();
            Jd && Jd()
          } else kd && kd("No active camera found")
        })), this
      }
      unfreezeActiveMeshes() {
        for (let dd = 0; dd < this.meshes.length; dd++) {
          const Jd = this.meshes[dd];
          Jd._internalAbstractMeshDataInfo && (Jd._internalAbstractMeshDataInfo._isActive = !1)
        }
        if (this._freezeActiveMeshesCancel?.(), this._freezeActiveMeshesCancel = null, this.frameGraph) {
          const dd = this.frameGraph.getTasksByClassName(["FrameGraphObjectRendererTask", "FrameGraphGeometryRendererTask"]);
          for (const Jd of dd) Jd.objectRenderer._unfreezeActiveMeshes()
        } else
          for (let dd = 0; dd < this._activeMeshes.length; dd++) this._activeMeshes.data[dd]._unFreeze();
        return this._activeMeshesFrozen = !1, this
      }
      _executeActiveContainerCleanup(dd) {
        (!this._engine.snapshotRendering || 1 !== this._engine.snapshotRenderingMode) && this._activeMeshesFrozen && this._activeMeshes.length || this.onBeforeRenderObservable.addOnce((() => dd.dispose()))
      }
      _evaluateActiveMeshes() {
        if (this._engine.snapshotRendering && 1 === this._engine.snapshotRenderingMode) return void(this._activeMeshes.length > 0 && (this.activeCamera?._activeMeshes.reset(), this._activeMeshes.reset(), this._renderingManager.reset(), this._processedMaterials.reset(), this._activeParticleSystems.reset(), this._activeSkeletons.reset(), this._softwareSkinnedMeshes.reset()));
        if (this._activeMeshesFrozen && this._activeMeshes.length) {
          if (!this._skipEvaluateActiveMeshesCompletely) {
            const dd = this._activeMeshes.length;
            for (let Jd = 0; Jd < dd; Jd++) {
              this._activeMeshes.data[Jd].computeWorldMatrix()
            }
          }
          if (this._activeParticleSystems) {
            const dd = this._activeParticleSystems.length;
            for (let Jd = 0; Jd < dd; Jd++) this._activeParticleSystems.data[Jd].animate()
          }
          return void this._renderingManager.resetSprites()
        }
        if (!this.activeCamera) return;
        this.onBeforeActiveMeshesEvaluationObservable.notifyObservers(this), this.activeCamera._activeMeshes.reset(), this._activeMeshes.reset(), this._renderingManager.reset(), this._processedMaterials.reset(), this._activeParticleSystems.reset(), this._activeSkeletons.reset(), this._softwareSkinnedMeshes.reset(), this._materialsRenderTargets.reset();
        for (let Nd = 0, Wd = this._beforeEvaluateActiveMeshStage; Nd < Wd.length; Nd++) {
          Wd[Nd].action()
        }
        const dd = this.getActiveMeshCandidates(),
          Jd = dd.length,
          kd = rd.b.Enabled,
          pd = this.customLODSelector;
        for (let Nd = 0; Nd < Jd; Nd++) {
          const Jd = dd.data[Nd],
            Wd = !pd && !Jd.Km && !Jd._internalMeshDataInfo?._LODLevels.length;
          let Pd, Zd;
          if ((Wd || (Pd = Jd._internalAbstractMeshDataInfo._currentLOD.get(this.activeCamera), Pd ? Pd[1] = -1 : (Pd = [Jd, -1], Jd._internalAbstractMeshDataInfo._currentLOD.set(this.activeCamera, Pd))), !Jd.isBlocked) && (kd && this._totalVertices.addCount(Jd.getTotalVertices(), !1), Jd.isReady() && Jd.isEnabled() && !Jd.fp.hasAZeroComponent)) {
            if (Jd.computeWorldMatrix(), Jd.actionManager && Jd.actionManager.hasSpecificTriggers2(12, 13) && this._meshesForIntersections.pushNoDuplicate(Jd), Wd) Zd = Jd;
            else if (Zd = pd ? pd(Jd, this.activeCamera) : Jd.getLOD(this.activeCamera), Pd[0] = Zd, Pd[1] = this._frameId, void 0 === Zd || null === Zd) continue;
            if (Zd !== Jd && 0 !== Zd.billboardMode && Zd.computeWorldMatrix(), Jd._preActivate(), Jd.isVisible && Jd.visibility > 0 && 0 !== (Jd.layerMask & this.activeCamera.layerMask) && (this._skipFrustumClipping || Jd.RL || Jd.isInFrustum(this._frustumPlanes))) {
              this._activeMeshes.push(Jd), this.activeCamera._activeMeshes.push(Jd), Zd !== Jd && Zd._activate(this._renderId, !1);
              for (let dd = 0, kd = this._preActiveMeshStage; dd < kd.length; dd++) {
                kd[dd].action(Jd)
              }
              Jd._activate(this._renderId, !1) && (Jd.Km ? Jd._internalAbstractMeshDataInfo._actAsRegularMesh && (Zd = Jd) : Zd._internalAbstractMeshDataInfo._onlyForInstances = !1, Zd._internalAbstractMeshDataInfo._isActive = !0, this._activeMesh(Jd, Zd)), Jd._postActivate()
            }
          }
        }
        if (this.onAfterActiveMeshesEvaluationObservable.notifyObservers(this), this.particlesEnabled) {
          this.onBeforeParticlesRenderingObservable.notifyObservers(this);
          for (let dd = 0; dd < this.Qv.length; dd++) {
            const Jd = this.Qv[dd];
            if (!Jd.isStarted() || !Jd.emitter) continue;
            const kd = Jd.emitter;
            kd.position && !kd.isEnabled() || (this._activeParticleSystems.push(Jd), Jd.animate(), this._renderingManager.dispatchParticles(Jd))
          }
          this.onAfterParticlesRenderingObservable.notifyObservers(this)
        }
      }
      _prepareSkeleton(dd) {
        this._skeletonsEnabled && dd.skeleton && (this._activeSkeletons.pushNoDuplicate(dd.skeleton) && (dd.skeleton.prepare(), this._activeBones.addCount(dd.skeleton.bones.length, !1)), dd.computeBonesUsingShaders || this._softwareSkinnedMeshes.pushNoDuplicate(dd) && this.frameGraph && dd.applySkeleton(dd.skeleton))
      }
      _activeMesh(dd, Jd) {
        this._prepareSkeleton(Jd);
        let kd = dd.eNd || dd.Km || this.dispatchAllSubMeshesOfActiveMeshes || this._skipFrustumClipping || Jd.RL;
        if (Jd && Jd.rG && Jd.rG.length > 0) {
          const pd = this.getActiveSubMeshCandidates(Jd),
            Nd = pd.length;
          kd = kd || 1 === Nd;
          for (let Wd = 0; Wd < Nd; Wd++) {
            const Nd = pd.data[Wd];
            this._evaluateSubMesh(Nd, Jd, dd, kd)
          }
        }
      }
      updateTransformMatrix(dd) {
        const Jd = this.activeCamera;
        if (Jd)
          if (Jd._renderingMultiview) {
            const kd = Jd._rigCameras[0],
              pd = Jd._rigCameras[1];
            this.setTransformMatrix(kd.getViewMatrix(), kd.getProjectionMatrix(dd), pd.getViewMatrix(), pd.getProjectionMatrix(dd))
          } else this.setTransformMatrix(Jd.getViewMatrix(), Jd.getProjectionMatrix(dd))
      }
      _bindFrameBuffer(dd) {
        let Jd = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this._useCurrentFrameBuffer || (dd && dd._multiviewTexture ? dd._multiviewTexture._bindFrameBuffer() : dd && dd.outputRenderTarget ? dd.outputRenderTarget._bindFrameBuffer() : this._engine._currentFrameBufferIsDefaultFrameBuffer() || this._engine.restoreDefaultFramebuffer()), Jd && this._clearFrameBuffer(dd)
      }
      _clearFrameBuffer(dd) {
        if (dd && dd._multiviewTexture);
        else if (dd && dd.outputRenderTarget && !dd._renderingMultiview) {
          const Jd = dd.outputRenderTarget;
          Jd.onClearObservable.hasObservers() ? Jd.onClearObservable.notifyObservers(this._engine) : Jd.skipInitialClear || dd.isRightCamera || (this.autoClear && this._engine.clear(Jd.clearColor || this._clearColor, !Jd._cleared, !0, !0), Jd._cleared = !0)
        } else this._defaultFrameBufferCleared ? this._engine.clear(null, !1, !0, !0) : (this._defaultFrameBufferCleared = !0, this._clear())
      }
      _renderForCamera(dd, Jd) {
        let kd = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        if (dd && dd._skipRendering) return;
        const Nd = this._engine;
        if (this._activeCamera = dd, !this.activeCamera) throw new Error("Active camera not set");
        if (Nd.setViewport(this.activeCamera.viewport), this.resetCachedMaterial(), this._renderId++, !this.prePass && kd) {
          let Jd = !0;
          dd._renderingMultiview && dd.outputRenderTarget && (Jd = dd.outputRenderTarget.skipInitialClear, this.autoClear && (this._defaultFrameBufferCleared = !1, dd.outputRenderTarget.skipInitialClear = !1)), this._bindFrameBuffer(this._activeCamera), dd._renderingMultiview && dd.outputRenderTarget && (dd.outputRenderTarget.skipInitialClear = Jd)
        }
        this.updateTransformMatrix(), this.onBeforeCameraRenderObservable.notifyObservers(this.activeCamera), this._engine.currentRenderPassId = dd.outputRenderTarget?.renderPassId ?? dd.renderPassId ?? 0, this._evaluateActiveMeshes();
        for (let pd = 0; pd < this._softwareSkinnedMeshes.length; pd++) {
          const dd = this._softwareSkinnedMeshes.data[pd];
          dd.applySkeleton(dd.skeleton)
        }
        this.onBeforeRenderTargetsRenderObservable.notifyObservers(this), this._renderTargets.concatWithNoDuplicate(this._materialsRenderTargets), dd.customRenderTargets && dd.customRenderTargets.length > 0 && this._renderTargets.concatWithNoDuplicate(dd.customRenderTargets), Jd && Jd.customRenderTargets && Jd.customRenderTargets.length > 0 && this._renderTargets.concatWithNoDuplicate(Jd.customRenderTargets), this.environmentTexture && this.environmentTexture.isRenderTarget && this._renderTargets.pushNoDuplicate(this.environmentTexture);
        for (let pd = 0, Zd = this._gatherActiveCameraRenderTargetsStage; pd < Zd.length; pd++) {
          Zd[pd].action(this._renderTargets)
        }
        let Wd = !1;
        if (this.renderTargetsEnabled) {
          let dd;
          if (this._intermediateRendering = !0, this._renderTargets.length > 0) {
            pd.h.StartPerformanceCounter("Render targets", this._renderTargets.length > 0);
            const Jd = this.getBoundingBoxRenderer?.();
            for (let kd = 0; kd < this._renderTargets.length; kd++) {
              const pd = this._renderTargets.data[kd];
              if (pd._shouldRender()) {
                this._renderId++;
                const kd = pd.activeCamera && pd.activeCamera !== this.activeCamera;
                Jd && !dd && (dd = Jd.renderList.length > 0 ? Jd.renderList.data.slice() : [], dd.length = Jd.renderList.length), pd.render(kd, this.dumpNextRenderTargets), Wd = !0
              }
            }
            Jd && dd && (Jd.renderList.data = dd, Jd.renderList.length = dd.length), pd.h.EndPerformanceCounter("Render targets", this._renderTargets.length > 0), this._renderId++
          }
          if (this._cameraDrawRenderTargetStage.length > 0) {
            const Jd = this.getBoundingBoxRenderer?.();
            Jd && !dd && (dd = Jd.renderList.length > 0 ? Jd.renderList.data.slice() : [], dd.length = Jd.renderList.length);
            for (let dd = 0, kd = this._cameraDrawRenderTargetStage; dd < kd.length; dd++) {
              Wd = kd[dd].action(this.activeCamera) || Wd
            }
            Jd && dd && (Jd.renderList.data = dd, Jd.renderList.length = dd.length)
          }
          this._intermediateRendering = !1
        }
        Wd && !this.prePass && (this._bindFrameBuffer(this._activeCamera, !1), this.updateTransformMatrix()), this.onAfterRenderTargetsRenderObservable.notifyObservers(this), !this.postProcessManager || dd._multiviewTexture || this.prePass || this.postProcessManager._prepareFrame();
        for (let pd = 0, Zd = this._beforeCameraDrawStage; pd < Zd.length; pd++) {
          Zd[pd].action(this.activeCamera)
        }
        this.onBeforeDrawPhaseObservable.notifyObservers(this);
        const Pd = Nd.snapshotRendering && 1 === Nd.snapshotRenderingMode;
        Pd && this.finalizeSceneUbo(), this._renderingManager.render(null, null, !0, !Pd), this.onAfterDrawPhaseObservable.notifyObservers(this);
        for (let pd = 0, Zd = this._afterCameraDrawStage; pd < Zd.length; pd++) {
          Zd[pd].action(this.activeCamera)
        }
        if (this.postProcessManager && !dd._multiviewTexture) {
          const Jd = dd.outputRenderTarget ? dd.outputRenderTarget.renderTarget : void 0;
          this.postProcessManager._finalizeFrame(dd.isIntermediate, Jd)
        }
        for (let pd = 0, Zd = this._afterCameraPostProcessStage; pd < Zd.length; pd++) {
          Zd[pd].action(this.activeCamera)
        }
        this._renderTargets.reset(), this.onAfterCameraRenderObservable.notifyObservers(this.activeCamera)
      }
      _processSubCameras(dd) {
        let Jd = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (0 === dd.cameraRigMode || dd._renderingMultiview) return dd._renderingMultiview && !this._multiviewSceneUbo && this._createMultiviewUbo(), this._renderForCamera(dd, void 0, Jd), void this.onAfterRenderCameraObservable.notifyObservers(dd);
        if (dd._useMultiviewToSingleView) this._renderMultiviewToSingleView(dd);
        else {
          this.onBeforeCameraRenderObservable.notifyObservers(dd);
          for (let Jd = 0; Jd < dd._rigCameras.length; Jd++) this._renderForCamera(dd._rigCameras[Jd], dd)
        }
        this._activeCamera = dd, this.updateTransformMatrix(), this.onAfterRenderCameraObservable.notifyObservers(dd)
      }
      _checkIntersections() {
        for (let dd = 0; dd < this._meshesForIntersections.length; dd++) {
          const Jd = this._meshesForIntersections.data[dd];
          if (Jd.actionManager)
            for (let dd = 0; Jd.actionManager && dd < Jd.actionManager.actions.length; dd++) {
              const kd = Jd.actionManager.actions[dd];
              if (12 === kd.trigger || 13 === kd.trigger) {
                const dd = kd.getTriggerParameter(),
                  pd = dd.mesh ? dd.mesh : dd,
                  Nd = pd.KNd(Jd, dd.usePreciseIntersection),
                  Wd = Jd._intersectionsInProgress.indexOf(pd);
                Nd && -1 === Wd ? 12 === kd.trigger ? (kd._executeCurrent(Ld.CreateNew(Jd, void 0, pd)), Jd._intersectionsInProgress.push(pd)) : 13 === kd.trigger && Jd._intersectionsInProgress.push(pd) : !Nd && Wd > -1 && (13 === kd.trigger && kd._executeCurrent(Ld.CreateNew(Jd, void 0, pd)), Jd.actionManager.hasSpecificTrigger(13, (dd => {
                  const Jd = dd.mesh ? dd.mesh : dd;
                  return pd === Jd
                })) && 13 !== kd.trigger || Jd._intersectionsInProgress.splice(Wd, 1))
              }
            }
        }
      }
      _advancePhysicsEngineStep(dd) {}
      _animate(dd) {}
      animate() {
        if (this._engine.isDeterministicLockStep()) {
          let dd = Math.max(Pk.MinDeltaTime, Math.min(this._engine.getDeltaTime(), Pk.MaxDeltaTime)) + this._timeAccumulator;
          const Jd = this._engine.getTimeStep(),
            kd = 1e3 / Jd / 1e3;
          let pd = 0;
          const Nd = this._engine.getLockstepMaxSteps();
          let Wd = Math.floor(dd / Jd);
          for (Wd = Math.min(Wd, Nd); dd > 0 && pd < Wd;) this.onBeforeStepObservable.notifyObservers(this), this._animationRatio = Jd * kd, this._animate(Jd), this.onAfterAnimationsObservable.notifyObservers(this), this.lD && this._advancePhysicsEngineStep(Jd), this.onAfterStepObservable.notifyObservers(this), this._currentStepId++, pd++, dd -= Jd;
          this._timeAccumulator = dd < 0 ? 0 : dd
        } else {
          const dd = this.useConstantAnimationDeltaTime ? 16 : Math.max(Pk.MinDeltaTime, Math.min(this._engine.getDeltaTime(), Pk.MaxDeltaTime));
          this._animationRatio = .06 * dd, this._animate(), this.onAfterAnimationsObservable.notifyObservers(this), this.lD && this._advancePhysicsEngineStep(dd)
        }
      }
      _clear() {
        (this.autoClearDepthAndStencil || this.autoClear) && this._engine.clear(this._clearColor, this.autoClear || this.forceWireframe || this.forcePointsCloud, this.autoClearDepthAndStencil, this.autoClearDepthAndStencil)
      }
      _checkCameraRenderTarget(dd) {
        if (dd?.outputRenderTarget && !dd?.isRigCamera && (dd.outputRenderTarget._cleared = !1), dd?.rigCameras?.length)
          for (let Jd = 0; Jd < dd.rigCameras.length; ++Jd) {
            const kd = dd.rigCameras[Jd].outputRenderTarget;
            kd && (kd._cleared = !1)
          }
      }
      resetDrawCache(dd) {
        if (this.meshes)
          for (const Jd of this.meshes) Jd.resetDrawCache(dd)
      }
      _renderWithFrameGraph() {
        let dd = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          Jd = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (this.activeCamera = null, this.activeCameras = null, dd)
          for (const kd of this.cameras)
            if (kd.update(), 0 !== kd.cameraRigMode)
              for (let dd = 0; dd < kd._rigCameras.length; dd++) kd._rigCameras[dd].update();
        this.onBeforeRenderObservable.notifyObservers(this), this._renderingMeshEvaluationDepth++;
        try {
          this._renderWithFrameGraphAfterBeforeRender(Jd)
        } finally {
          this._renderingMeshEvaluationDepth--
        }
      }
      _renderWithFrameGraphAfterBeforeRender(dd) {
        this.onBeforeRenderTargetsRenderObservable.notifyObservers(this), this._renderTargets.reset();
        const Jd = this._frameGraph?.findMainCamera() ?? null;
        if (this.renderTargetsEnabled) {
          this.environmentTexture && this.environmentTexture.isRenderTarget && this._renderTargets.pushNoDuplicate(this.environmentTexture), this._renderTargets.concatWithNoDuplicate(this.customRenderTargets), pd.h.StartPerformanceCounter("Custom render targets", this._renderTargets.length > 0);
          for (let dd = 0; dd < this._renderTargets.length; dd++) {
            const kd = this._renderTargets.data[dd],
              pd = kd.activeCamera || Jd;
            this._renderRenderTarget(kd, pd, !0, this.dumpNextRenderTargets)
          }
          pd.h.EndPerformanceCounter("Custom render targets", this._renderTargets.length > 0), this._renderId++
        }
        this.onAfterRenderTargetsRenderObservable.notifyObservers(this);
        for (let kd = 0, pd = this._beforeClearStage; kd < pd.length; kd++) {
          pd[kd].action()
        }
        if (this._engine.snapshotRendering && 1 === this._engine.snapshotRenderingMode) this._activeParticleSystems.reset(), this._activeSkeletons.reset(), this._softwareSkinnedMeshes.reset();
        else {
          const Jd = this.getActiveMeshCandidates(),
            kd = Jd.length;
          if (this._activeMeshesFrozen) {
            if (!this._skipEvaluateActiveMeshesCompletely)
              for (let dd = 0; dd < kd; dd++) {
                const kd = Jd.data[dd];
                kd._internalAbstractMeshDataInfo._wasActiveLastFrame && kd.computeWorldMatrix()
              }
            if (this.particlesEnabled) {
              const dd = this._activeParticleSystems.length;
              for (let Jd = 0; Jd < dd; Jd++) this._activeParticleSystems.data[Jd].animate()
            }
          } else {
            this._activeParticleSystems.reset(), this._activeSkeletons.reset(), this._softwareSkinnedMeshes.reset();
            for (let pd = 0; pd < kd; pd++) {
              const kd = Jd.data[pd];
              kd._internalAbstractMeshDataInfo._wasActiveLastFrame = !1, kd.isBlocked || (this._totalVertices.addCount(kd.getTotalVertices(), !1), kd.isReady() && kd.isEnabled() && !kd.fp.hasAZeroComponent && (kd.computeWorldMatrix(dd), kd.actionManager && kd.actionManager.hasSpecificTriggers2(12, 13) && this._meshesForIntersections.pushNoDuplicate(kd)))
            }
            if (this.particlesEnabled)
              for (let dd = 0; dd < this.Qv.length; dd++) {
                const Jd = this.Qv[dd];
                if (!Jd.isStarted() || !Jd.emitter) continue;
                const kd = Jd.emitter;
                kd.position && !kd.isEnabled() || (this._activeParticleSystems.push(Jd), Jd.animate())
              }
          }
        }
        this.frameGraph?.execute()
      }
      _renderRenderTarget(dd, Jd) {
        let kd = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          pd = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (this._intermediateRendering = !0, dd._shouldRender()) {
          if (this._renderId++, this.activeCamera = Jd, !this.activeCamera) throw new Error("Active camera not set");
          this._engine.setViewport(this.activeCamera.viewport), this.updateTransformMatrix(), dd.render(kd, pd)
        }
        this._intermediateRendering = !1
      }
      render() {
        let dd = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          Jd = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this.lq) return;
        const kd = this._renderingMeshEvaluationDepth;
        try {
          this._renderFrame(dd, Jd)
        } finally {
          this._renderingMeshEvaluationDepth = kd
        }
      }
      _renderFrame(dd, Jd) {
        if (this.onReadyObservable.hasObservers() && null === this._executeWhenReadyTimeoutId && this._checkIsReady(), ed.e.Wm = this._getFloatingOriginScene, this._frameId++, this._defaultFrameBufferCleared = !1, this._checkCameraRenderTarget(this.activeCamera), this.activeCameras?.length)
          for (const kd of this.activeCameras) this._checkCameraRenderTarget(kd);
        this._registerTransientComponents(), this._activeParticles.fetchNewFrame(), this._totalVertices.fetchNewFrame(), this._activeIndices.fetchNewFrame(), this._activeBones.fetchNewFrame(), this._meshesForIntersections.reset(), this.resetCachedMaterial(), this.onBeforeAnimationsObservable.notifyObservers(this), this.actionManager && this.actionManager.processTrigger(11), Jd || this.animate();
        for (let kd = 0, pd = this._beforeCameraUpdateStage; kd < pd.length; kd++) {
          pd[kd].action()
        }
        if (dd)
          if (this.activeCameras && this.activeCameras.length > 0)
            for (let kd = 0; kd < this.activeCameras.length; kd++) {
              const dd = this.activeCameras[kd];
              if (dd.update(), 0 !== dd.cameraRigMode)
                for (let Jd = 0; Jd < dd._rigCameras.length; Jd++) dd._rigCameras[Jd].update()
            } else if (this.activeCamera && (this.activeCamera.update(), 0 !== this.activeCamera.cameraRigMode))
              for (let kd = 0; kd < this.activeCamera._rigCameras.length; kd++) this.activeCamera._rigCameras[kd].update();
        if (this.customRenderFunction) this._renderId++, this._engine.currentRenderPassId = 0, this._renderingMeshEvaluationDepth++, this.customRenderFunction(dd, Jd);
        else {
          this.onBeforeRenderObservable.notifyObservers(this), this._renderingMeshEvaluationDepth++, this.onBeforeRenderTargetsRenderObservable.notifyObservers(this);
          const dd = this.activeCameras?.length ? this.activeCameras[0] : this.activeCamera;
          if (this.renderTargetsEnabled) {
            pd.h.StartPerformanceCounter("Custom render targets", this.customRenderTargets.length > 0);
            for (let Jd = 0; Jd < this.customRenderTargets.length; Jd++) {
              const kd = this.customRenderTargets[Jd],
                pd = kd.activeCamera || this.activeCamera;
              this._renderRenderTarget(kd, pd, dd !== pd, this.dumpNextRenderTargets)
            }
            pd.h.EndPerformanceCounter("Custom render targets", this.customRenderTargets.length > 0), this._renderId++
          }
          this._engine.currentRenderPassId = dd?.renderPassId ?? 0, this.activeCamera = dd, this._activeCamera && 22 !== this._activeCamera.cameraRigMode && !this.prePass && this._bindFrameBuffer(this._activeCamera, !1), this.onAfterRenderTargetsRenderObservable.notifyObservers(this);
          for (let Jd = 0, kd = this._beforeClearStage; Jd < kd.length; Jd++) {
            kd[Jd].action()
          }
          this._clearFrameBuffer(this.activeCamera);
          for (let Jd = 0, kd = this._gatherRenderTargetsStage; Jd < kd.length; Jd++) {
            kd[Jd].action(this._renderTargets)
          }
          if (this.activeCameras && this.activeCameras.length > 0)
            for (let Jd = 0; Jd < this.activeCameras.length; Jd++) this._processSubCameras(this.activeCameras[Jd], Jd > 0);
          else {
            if (!this.activeCamera) throw new Error("No camera defined");
            this._processSubCameras(this.activeCamera, !!this.activeCamera.outputRenderTarget)
          }
        }
        this._inputManager._updateMeshUnderPointer(), this._checkIntersections();
        for (let kd = 0, pd = this._afterRenderStage; kd < pd.length; kd++) {
          pd[kd].action()
        }
        if (this.afterRender && this.afterRender(), this.onAfterRenderObservable.notifyObservers(this), this._toBeDisposed.length) {
          for (let dd = 0; dd < this._toBeDisposed.length; dd++) {
            const Jd = this._toBeDisposed[dd];
            Jd && Jd.dispose()
          }
          this._toBeDisposed.length = 0
        }
        this.dumpNextRenderTargets && (this.dumpNextRenderTargets = !1), this._activeBones.addCount(0, !0), this._activeIndices.addCount(0, !0), this._activeParticles.addCount(0, !0), this._engine.restoreDefaultFramebuffer()
      }
      freezeMaterials() {
        for (let dd = 0; dd < this.materials.length; dd++) this.materials[dd].freeze()
      }
      unfreezeMaterials() {
        for (let dd = 0; dd < this.materials.length; dd++) this.materials[dd].unfreeze()
      }
      dispose() {
        if (this.lq) return;
        if (this._isDisposing = !0, this.beforeRender = null, this.afterRender = null, this.metadata = null, this.skeletons.length = 0, this.morphTargetManagers.length = 0, this._transientComponents.length = 0, this._isReadyForMeshStage.clear(), this._beforeEvaluateActiveMeshStage.clear(), this._evaluateSubMeshStage.clear(), this._preActiveMeshStage.clear(), this._cameraDrawRenderTargetStage.clear(), this._beforeCameraDrawStage.clear(), this._beforeRenderTargetDrawStage.clear(), this._beforeRenderingGroupDrawStage.clear(), this._beforeRenderingMeshStage.clear(), this._afterRenderingMeshStage.clear(), this._afterRenderingGroupDrawStage.clear(), this._afterCameraDrawStage.clear(), this._afterRenderTargetDrawStage.clear(), this._afterRenderStage.clear(), this._beforeCameraUpdateStage.clear(), this._beforeClearStage.clear(), this._gatherRenderTargetsStage.clear(), this._gatherActiveCameraRenderTargetsStage.clear(), this._pointerMoveStage.clear(), this._pointerDownStage.clear(), this._pointerUpStage.clear(), this._isReadyChecks.length = 0, this.importedMeshesFiles = [], this._activeAnimatables && (0, xd.e)(this.stopAllAnimations)) {
          for (const dd of this._activeAnimatables) dd.onAnimationEndObservable.clear(), dd.onAnimationEnd = null;
          this.stopAllAnimations()
        }
        this.resetCachedMaterial(), this.activeCamera && (this.activeCamera._activeMeshes.dispose(), this.activeCamera = null), this.activeCameras = null, this._activeMeshes.dispose(), this._renderingManager.dispose(), this._processedMaterials.dispose(), this._activeParticleSystems.dispose(), this._activeSkeletons.dispose(), this._softwareSkinnedMeshes.dispose(), this._renderTargets.dispose(), this._materialsRenderTargets.dispose(), this._registeredForLateAnimationBindings.dispose(), this._animationWrites.length = 0, this._animationWriteCount = 0, this._animationStepWriteCount = 0, this._meshesForIntersections.dispose(), this._toBeDisposed.length = 0;
        const dd = this._activeRequests.slice();
        for (const Wd of dd) Wd.abort();
        this._activeRequests.length = 0;
        try {
          this.Zm.notifyObservers(this)
        } catch (Nd) {
          Jk.c.Error("An error occurred while calling onDisposeObservable!", Nd)
        }
        this.detachControl();
        const Jd = this._engine.getInputElement?.();
        if (Jd)
          for (let Wd = 0; Wd < this.cameras.length; Wd++) this.cameras[Wd].detachControl();
        this._disposeList(this.animationGroups), this._disposeList(this.lights), this._defaultMaterial && this._defaultMaterial.dispose(), this._disposeList(this.multiMaterials), this._disposeList(this.materials), this._disposeList(this.meshes, (dd => dd.dispose(!0))), this._disposeList(this.transformNodes, (dd => dd.dispose(!0)));
        const kd = this.cameras;
        this._disposeList(kd), this._disposeList(this.Qv), this._disposeList(this.postProcesses), this._disposeList(this.textures), this._disposeList(this.morphTargetManagers), this._disposeList(this.frameGraphs), this._sceneUbo.dispose(), this._multiviewSceneUbo && this._multiviewSceneUbo.dispose(), this.postProcessManager.dispose(), this._disposeList(this._components);
        let pd = this._engine.scenes.indexOf(this);
        if (pd > -1 && this._engine.scenes.splice(pd, 1), this._floatingOriginScene = void 0, 0 === this._engine.scenes.length && (0, ed.j)(), vd.d._LastCreatedScene === this) {
          vd.d._LastCreatedScene = null;
          let dd = vd.d.Instances.length - 1;
          for (; dd >= 0;) {
            const Jd = vd.d.Instances[dd];
            if (Jd.scenes.length > 0) {
              vd.d._LastCreatedScene = Jd.scenes[this._engine.scenes.length - 1];
              break
            }
            dd--
          }
        }
        pd = this._engine._virtualScenes.indexOf(this), pd > -1 && this._engine._virtualScenes.splice(pd, 1), this._engine.wipeCaches(!0), this.Zm.clear(), this.onBeforeRenderObservable.clear(), this.onAfterRenderObservable.clear(), this.onBeforeRenderTargetsRenderObservable.clear(), this.onAfterRenderTargetsRenderObservable.clear(), this.onAfterStepObservable.clear(), this.onBeforeStepObservable.clear(), this.onBeforeActiveMeshesEvaluationObservable.clear(), this.onAfterActiveMeshesEvaluationObservable.clear(), this.onBeforeParticlesRenderingObservable.clear(), this.onAfterParticlesRenderingObservable.clear(), this.onBeforeDrawPhaseObservable.clear(), this.onAfterDrawPhaseObservable.clear(), this.onBeforeAnimationsObservable.clear(), this.onAfterAnimationsObservable.clear(), this.onDataLoadedObservable.clear(), this.onBeforeRenderingGroupObservable.clear(), this.onAfterRenderingGroupObservable.clear(), this.onMeshImportedObservable.clear(), this.onBeforeCameraRenderObservable.clear(), this.onAfterCameraRenderObservable.clear(), this.onAfterRenderCameraObservable.clear(), this.onReadyObservable.clear(), this.onNewCameraAddedObservable.clear(), this.onCameraRemovedObservable.clear(), this.onNewLightAddedObservable.clear(), this.onLightRemovedObservable.clear(), this.onNewGeometryAddedObservable.clear(), this.onGeometryRemovedObservable.clear(), this.onNewTransformNodeAddedObservable.clear(), this.onTransformNodeRemovedObservable.clear(), this.onNewMeshAddedObservable.clear(), this.onMeshRemovedObservable.clear(), this.onNewSkeletonAddedObservable.clear(), this.onSkeletonRemovedObservable.clear(), this.onNewMaterialAddedObservable.clear(), this.onNewMultiMaterialAddedObservable.clear(), this.onMaterialRemovedObservable.clear(), this.onMultiMaterialRemovedObservable.clear(), this.onNewTextureAddedObservable.clear(), this.onTextureRemovedObservable.clear(), this.onNewFrameGraphAddedObservable.clear(), this.onFrameGraphRemovedObservable.clear(), this.onNewObjectRendererAddedObservable.clear(), this.onObjectRendererRemovedObservable.clear(), this.onPrePointerObservable.clear(), this.onPointerObservable.clear(), this.onPreKeyboardObservable.clear(), this.onKeyboardObservable.clear(), this.onActiveCameraChanged.clear(), this.onScenePerformancePriorityChangedObservable.clear(), this.onClearColorChangedObservable.clear(), this.onEnvironmentTextureChangedObservable.clear(), this.onMeshUnderPointerUpdatedObservable.clear(), this._isDisposed = !0
      }
      _disposeList(dd, Jd) {
        const kd = dd.slice(0);
        Jd = Jd ?? (dd => dd.dispose());
        for (const pd of kd) Jd(pd);
        dd.length = 0
      }
      get lq() {
        return this._isDisposed
      }
      clearCachedVertexData() {
        for (let dd = 0; dd < this.meshes.length; dd++) {
          const Jd = this.meshes[dd].geometry;
          Jd && Jd.clearCachedData()
        }
      }
      cleanCachedTextureBuffer() {
        for (const dd of this.textures) {
          dd._buffer && (dd._buffer = null)
        }
      }
      getWorldExtends(dd) {
        const Jd = new Kd.n(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
          kd = new Kd.n(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
        dd = dd || (() => !0);
        const pd = this.meshes.filter(dd);
        for (const Nd of pd) {
          if (Nd.computeWorldMatrix(!0), !Nd.rG || 0 === Nd.rG.length || Nd.infiniteDistance) continue;
          const dd = Nd.pU(),
            pd = dd.boundingBox.minimumWorld,
            Wd = dd.boundingBox.maximumWorld;
          Kd.n.CheckExtends(pd, Jd, kd), Kd.n.CheckExtends(Wd, Jd, kd)
        }
        return Jd.x === Number.MAX_VALUE ? {
          min: Kd.n.Zero(),
          max: Kd.n.Zero()
        } : {
          min: Jd,
          max: kd
        }
      }
      createPickingRay(dd, Jd, kd, pd) {
        throw (0, xd.n)("Ray")
      }
      createPickingRayToRef(dd, Jd, kd, pd, Nd) {
        throw (0, xd.n)("Ray")
      }
      createPickingRayInCameraSpace(dd, Jd, kd) {
        throw (0, xd.n)("Ray")
      }
      createPickingRayInCameraSpaceToRef(dd, Jd, kd, pd) {
        throw (0, xd.n)("Ray")
      }
      Tl(dd, Jd, kd, pd, Nd, Wd) {
        const Pd = (0, xd.n)("Ray", !0);
        return Pd && Jk.c.Warn(Pd), new Qd.d
      }
      pickWithBoundingInfo(dd, Jd, kd, pd, Nd) {
        const Wd = (0, xd.n)("Ray", !0);
        return Wd && Jk.c.Warn(Wd), new Qd.d
      }
      pickWithRay(dd, Jd, kd, pd) {
        throw (0, xd.n)("Ray")
      }
      multiPick(dd, Jd, kd, pd, Nd) {
        throw (0, xd.n)("Ray")
      }
      multiPickWithRay(dd, Jd, kd) {
        throw (0, xd.n)("Ray")
      }
      setPointerOverMesh(dd, Jd, kd) {
        this._inputManager.setPointerOverMesh(dd, Jd, kd)
      }
      getPointerOverMesh() {
        return this._inputManager.getPointerOverMesh()
      }
      _rebuildGeometries() {
        for (const dd of this.geometries) dd._rebuild();
        for (const dd of this.meshes) dd._rebuild();
        this.postProcessManager && this.postProcessManager._rebuild();
        for (const dd of this._components) dd.rebuild();
        for (const dd of this.Qv) dd.rebuild();
        if (this.spriteManagers)
          for (const dd of this.spriteManagers) dd.rebuild()
      }
      _rebuildTextures() {
        for (const dd of this.textures) dd._rebuild(!0);
        this.markAllMaterialsAsDirty(1)
      }
      _getByTags(dd, Jd, kd) {
        if (void 0 === Jd) return dd;
        const pd = [];
        for (const Nd in dd) {
          const Wd = dd[Nd];
          Cd.c && Cd.c.MatchesQuery(Wd, Jd) && (!kd || kd(Wd)) && pd.push(Wd)
        }
        return pd
      }
      getMeshesByTags(dd, Jd) {
        return this._getByTags(this.meshes, dd, Jd)
      }
      getCamerasByTags(dd, Jd) {
        return this._getByTags(this.cameras, dd, Jd)
      }
      getLightsByTags(dd, Jd) {
        return this._getByTags(this.lights, dd, Jd)
      }
      getMaterialByTags(dd, Jd) {
        return this._getByTags(this.materials, dd, Jd).concat(this._getByTags(this.multiMaterials, dd, Jd))
      }
      getTransformNodesByTags(dd, Jd) {
        return this._getByTags(this.transformNodes, dd, Jd)
      }
      setRenderingOrder(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          kd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          pd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        this._renderingManager.setRenderingOrder(dd, Jd, kd, pd)
      }
      setRenderingAutoClearDepthStencil(dd, Jd) {
        let kd = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          pd = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        this._renderingManager.setRenderingAutoClearDepthStencil(dd, Jd, kd, pd)
      }
      getAutoClearDepthStencilSetup(dd) {
        return this._renderingManager.getAutoClearDepthStencilSetup(dd)
      }
      _forceBlockMaterialDirtyMechanism(dd) {
        this._blockMaterialDirtyMechanism = dd
      }
      get blockMaterialDirtyMechanism() {
        return this._blockMaterialDirtyMechanism
      }
      set blockMaterialDirtyMechanism(dd) {
        this._blockMaterialDirtyMechanism !== dd && (this._blockMaterialDirtyMechanism = dd, dd || this.markAllMaterialsAsDirty(127))
      }
      markAllMaterialsAsDirty(dd, Jd) {
        if (!this._blockMaterialDirtyMechanism)
          for (const kd of this.materials) Jd && !Jd(kd) || kd.dkd(dd)
      }
      _loadFile(dd, Jd, kd, pd, Nd, Wd, Pd) {
        const Zd = (0, zd.n)(dd, Jd, kd, pd ? this.offlineProvider : void 0, Nd, Wd, Pd);
        return this._activeRequests.push(Zd), Zd.onCompleteObservable.add((dd => {
          this._activeRequests.splice(this._activeRequests.indexOf(dd), 1)
        })), Zd
      }
      async _loadFileAsync(dd, Jd, kd, pd, Nd) {
        return await new Promise(((Wd, Pd) => {
          this._loadFile(dd, (dd => {
            Wd(dd)
          }), Jd, kd, pd, ((dd, Jd) => {
            Pd(Jd)
          }), Nd)
        }))
      }
      async _loadDelayedFileAsync(dd, Jd, kd) {
        this._delayedFileRequests || (this._delayedFileRequests = new Map);
        const pd = `${dd}|${Jd?"binary":"string"}`;
        let Nd = this._delayedFileRequests.get(pd);
        if (!Nd) {
          Nd = Jd ? this._loadFileAsync(dd, void 0, kd, !0) : this._loadFileAsync(dd, void 0, kd, !1);
          const Wd = Nd;
          (async () => {
            try {
              await Wd
            } catch {}
            this._delayedFileRequests?.delete(pd)
          })(), this._delayedFileRequests.set(pd, Nd)
        }
        return await Nd
      }
      _requestFile(dd, Jd, kd, pd, Nd, Wd, Pd) {
        const Zd = (0, zd.x)(dd, Jd, kd, pd ? this.offlineProvider : void 0, Nd, Wd, Pd);
        return this._activeRequests.push(Zd), Zd.onCompleteObservable.add((dd => {
          this._activeRequests.splice(this._activeRequests.indexOf(dd), 1)
        })), Zd
      }
      async _requestFileAsync(dd, Jd, kd, pd, Nd) {
        return await new Promise(((Wd, Pd) => {
          this._requestFile(dd, (dd => {
            Wd(dd)
          }), Jd, kd, pd, (dd => {
            Pd(dd)
          }), Nd)
        }))
      }
      _readFile(dd, Jd, kd, pd, Nd) {
        const Wd = (0, zd.s)(dd, Jd, kd, pd, Nd);
        return this._activeRequests.push(Wd), Wd.onCompleteObservable.add((dd => {
          this._activeRequests.splice(this._activeRequests.indexOf(dd), 1)
        })), Wd
      }
      async _readFileAsync(dd, Jd, kd) {
        return await new Promise(((pd, Nd) => {
          this._readFile(dd, (dd => {
            pd(dd)
          }), Jd, kd, (dd => {
            Nd(dd)
          }))
        }))
      }
      getPerfCollector() {
        throw (0, xd.n)("performanceViewerSceneExtension")
      }
      setActiveCameraByID(dd) {
        return this.setActiveCameraById(dd)
      }
      getMaterialByID(dd) {
        return this.getMaterialById(dd)
      }
      getLastMaterialByID(dd) {
        return this.getLastMaterialById(dd)
      }
      getTextureByUniqueID(dd) {
        return this.getTextureByUniqueId(dd)
      }
      getCameraByID(dd) {
        return this.getCameraById(dd)
      }
      getCameraByUniqueID(dd) {
        return this.getCameraByUniqueId(dd)
      }
      getBoneByID(dd) {
        return this.getBoneById(dd)
      }
      getLightByID(dd) {
        return this.getLightById(dd)
      }
      getLightByUniqueID(dd) {
        return this.getLightByUniqueId(dd)
      }
      getParticleSystemByID(dd) {
        return this.getParticleSystemById(dd)
      }
      getGeometryByID(dd) {
        return this.getGeometryById(dd)
      }
      getMeshByID(dd) {
        return this.getMeshById(dd)
      }
      getMeshByUniqueID(dd) {
        return this.getMeshByUniqueId(dd)
      }
      getLastMeshByID(dd) {
        return this.getLastMeshById(dd)
      }
      getMeshesByID(dd) {
        return this.getMeshesById(dd)
      }
      getTransformNodeByID(dd) {
        return this.getTransformNodeById(dd)
      }
      getTransformNodeByUniqueID(dd) {
        return this.getTransformNodeByUniqueId(dd)
      }
      getTransformNodesByID(dd) {
        return this.getTransformNodesById(dd)
      }
      getNodeByID(dd) {
        return this.getNodeById(dd)
      }
      getLastEntryByID(dd) {
        return this.getLastEntryById(dd)
      }
      getLastSkeletonByID(dd) {
        return this.getLastSkeletonById(dd)
      }
    }
    Pk.FOGMODE_NONE = 0, Pk.FOGMODE_EXP = 1, Pk.FOGMODE_EXP2 = 2, Pk.FOGMODE_LINEAR = 3, Pk.MinDeltaTime = 1, Pk.MaxDeltaTime = 1e3, Pk._OriginalDefaultMaterialFactory = Pk.DefaultMaterialFactory;
    let Zk = !1;

    function gk() {
      Zk || (Zk = !0, (0, kk.h)("BABYLON.Scene", Pk))
    }(dJ = Pk.prototype).sortActiveAnimatables ?? (dJ.sortActiveAnimatables = (0, xd.j)("Scene", "sortActiveAnimatables")), (JJ = Pk.prototype).beginWeightedAnimation ?? (JJ.beginWeightedAnimation = (0, xd.j)("Scene", "beginWeightedAnimation")), (kJ = Pk.prototype).beginAnimation ?? (kJ.beginAnimation = (0, xd.j)("Scene", "beginAnimation")), (pJ = Pk.prototype).beginHierarchyAnimation ?? (pJ.beginHierarchyAnimation = (0, xd.j)("Scene", "beginHierarchyAnimation")), (NJ = Pk.prototype).beginDirectAnimation ?? (NJ.beginDirectAnimation = (0, xd.j)("Scene", "beginDirectAnimation")), (WJ = Pk.prototype).beginDirectHierarchyAnimation ?? (WJ.beginDirectHierarchyAnimation = (0, xd.j)("Scene", "beginDirectHierarchyAnimation")), (PJ = Pk.prototype).getAnimatableByTarget ?? (PJ.getAnimatableByTarget = (0, xd.j)("Scene", "getAnimatableByTarget")), (ZJ = Pk.prototype).getAllAnimatablesByTarget ?? (ZJ.getAllAnimatablesByTarget = (0, xd.j)("Scene", "getAllAnimatablesByTarget")), (gJ = Pk.prototype).stopAllAnimations ?? (gJ.stopAllAnimations = (0, xd.j)("Scene", "stopAllAnimations")), (CJ = Pk.prototype).getSoundByName ?? (CJ.getSoundByName = (0, xd.j)("Scene", "getSoundByName")), (KJ = Pk.prototype).createOrUpdateSelectionOctree ?? (KJ.createOrUpdateSelectionOctree = (0, xd.j)("Scene", "createOrUpdateSelectionOctree")), (oJ = Pk.prototype).createDefaultLight ?? (oJ.createDefaultLight = (0, xd.j)("Scene", "createDefaultLight")), (lJ = Pk.prototype).createDefaultCamera ?? (lJ.createDefaultCamera = (0, xd.j)("Scene", "createDefaultCamera")), (QJ = Pk.prototype).createDefaultCameraOrLight ?? (QJ.createDefaultCameraOrLight = (0, xd.j)("Scene", "createDefaultCameraOrLight")), (LJ = Pk.prototype).createDefaultSkybox ?? (LJ.createDefaultSkybox = (0, xd.j)("Scene", "createDefaultSkybox")), (OJ = Pk.prototype).createDefaultEnvironment ?? (OJ.createDefaultEnvironment = (0, xd.j)("Scene", "createDefaultEnvironment")), (eJ = Pk.prototype).createDefaultVRExperience ?? (eJ.createDefaultVRExperience = (0, xd.j)("Scene", "createDefaultVRExperience")), (RJ = Pk.prototype).createDefaultXRExperienceAsync ?? (RJ.createDefaultXRExperienceAsync = (0, xd.j)("Scene", "createDefaultXRExperienceAsync")), (IJ = Pk.prototype).getGlowLayerByName ?? (IJ.getGlowLayerByName = (0, xd.j)("Scene", "getGlowLayerByName")), (GJ = Pk.prototype).getHighlightLayerByName ?? (GJ.getHighlightLayerByName = (0, xd.j)("Scene", "getHighlightLayerByName")), (vJ = Pk.prototype).getSelectionOutlineLayerByName ?? (vJ.getSelectionOutlineLayerByName = (0, xd.j)("Scene", "getSelectionOutlineLayerByName")), (xJ = Pk.prototype).removeLensFlareSystem ?? (xJ.removeLensFlareSystem = (0, xd.j)("Scene", "removeLensFlareSystem")), (qJ = Pk.prototype).addLensFlareSystem ?? (qJ.addLensFlareSystem = (0, xd.j)("Scene", "addLensFlareSystem")), (BJ = Pk.prototype).getLensFlareSystemByName ?? (BJ.getLensFlareSystemByName = (0, xd.j)("Scene", "getLensFlareSystemByName")), (sJ = Pk.prototype).getLensFlareSystemByID ?? (sJ.getLensFlareSystemByID = (0, xd.j)("Scene", "getLensFlareSystemByID")), (iJ = Pk.prototype).getLensFlareSystemById ?? (iJ.getLensFlareSystemById = (0, xd.j)("Scene", "getLensFlareSystemById")), (aJ = Pk.prototype).getPhysicsEngine ?? (aJ.getPhysicsEngine = (0, xd.j)("Scene", "getPhysicsEngine")), (MJ = Pk.prototype).enablePhysics ?? (MJ.enablePhysics = (0, xd.j)("Scene", "enablePhysics")), (FJ = Pk.prototype).disablePhysicsEngine ?? (FJ.disablePhysicsEngine = (0, xd.j)("Scene", "disablePhysicsEngine")), (YJ = Pk.prototype).isPhysicsEnabled ?? (YJ.isPhysicsEnabled = (0, xd.j)("Scene", "isPhysicsEnabled")), (mJ = Pk.prototype).deleteCompoundImpostor ?? (mJ.deleteCompoundImpostor = (0, xd.j)("Scene", "deleteCompoundImpostor")), (bJ = Pk.prototype).removeReflectionProbe ?? (bJ.removeReflectionProbe = (0, xd.j)("Scene", "removeReflectionProbe")), (SJ = Pk.prototype).addReflectionProbe ?? (SJ.addReflectionProbe = (0, xd.j)("Scene", "addReflectionProbe")), (jJ = Pk.prototype).getBoundingBoxRenderer ?? (jJ.getBoundingBoxRenderer = (0, xd.j)("Scene", "getBoundingBoxRenderer")), (XJ = Pk.prototype).enableDepthRenderer ?? (XJ.enableDepthRenderer = (0, xd.j)("Scene", "enableDepthRenderer")), (fJ = Pk.prototype).disableDepthRenderer ?? (fJ.disableDepthRenderer = (0, xd.j)("Scene", "disableDepthRenderer")), (nJ = Pk.prototype).enableFluidRenderer ?? (nJ.enableFluidRenderer = (0, xd.j)("Scene", "enableFluidRenderer")), (UJ = Pk.prototype).disableFluidRenderer ?? (UJ.disableFluidRenderer = (0, xd.j)("Scene", "disableFluidRenderer")), (yJ = Pk.prototype).enableGeometryBufferRenderer ?? (yJ.enableGeometryBufferRenderer = (0, xd.j)("Scene", "enableGeometryBufferRenderer")), (DJ = Pk.prototype).disableGeometryBufferRenderer ?? (DJ.disableGeometryBufferRenderer = (0, xd.j)("Scene", "disableGeometryBufferRenderer")), (TJ = Pk.prototype).enableIblCdfGenerator ?? (TJ.enableIblCdfGenerator = (0, xd.j)("Scene", "enableIblCdfGenerator")), (EJ = Pk.prototype).disableIblCdfGenerator ?? (EJ.disableIblCdfGenerator = (0, xd.j)("Scene", "disableIblCdfGenerator")), (cJ = Pk.prototype).getOutlineRenderer ?? (cJ.getOutlineRenderer = (0, xd.j)("Scene", "getOutlineRenderer")), (hJ = Pk.prototype).enablePrePassRenderer ?? (hJ.enablePrePassRenderer = (0, xd.j)("Scene", "enablePrePassRenderer")), (rJ = Pk.prototype).disablePrePassRenderer ?? (rJ.disablePrePassRenderer = (0, xd.j)("Scene", "disablePrePassRenderer")), (uJ = Pk.prototype).enableSubSurfaceForPrePass ?? (uJ.enableSubSurfaceForPrePass = (0, xd.j)("Scene", "enableSubSurfaceForPrePass")), (tJ = Pk.prototype).disableSubSurfaceForPrePass ?? (tJ.disableSubSurfaceForPrePass = (0, xd.j)("Scene", "disableSubSurfaceForPrePass")), (VJ = Pk.prototype).pickSprite ?? (VJ.pickSprite = (0, xd.j)("Scene", "pickSprite")), (zJ = Pk.prototype).pickSpriteWithRay ?? (zJ.pickSpriteWithRay = (0, xd.j)("Scene", "pickSpriteWithRay")), (HJ = Pk.prototype).multiPickSprite ?? (HJ.multiPickSprite = (0, xd.j)("Scene", "multiPickSprite")), (wJ = Pk.prototype).multiPickSpriteWithRay ?? (wJ.multiPickSpriteWithRay = (0, xd.j)("Scene", "multiPickSpriteWithRay")), (AJ = Pk.prototype).setPointerOverSprite ?? (AJ.setPointerOverSprite = (0, xd.j)("Scene", "setPointerOverSprite")), (dk = Pk.prototype).getPointerOverSprite ?? (dk.getPointerOverSprite = (0, xd.j)("Scene", "getPointerOverSprite")), Object.getOwnPropertyDescriptor(Pk.prototype, "mainSoundTrack") || Object.defineProperty(Pk.prototype, "mainSoundTrack", (0, xd.g)("Scene", "mainSoundTrack")), Object.getOwnPropertyDescriptor(Pk.prototype, "soundTracks") || Object.defineProperty(Pk.prototype, "soundTracks", (0, xd.g)("Scene", "soundTracks")), Object.getOwnPropertyDescriptor(Pk.prototype, "audioEnabled") || Object.defineProperty(Pk.prototype, "audioEnabled", (0, xd.g)("Scene", "audioEnabled")), Object.getOwnPropertyDescriptor(Pk.prototype, "headphone") || Object.defineProperty(Pk.prototype, "headphone", (0, xd.g)("Scene", "headphone")), Object.getOwnPropertyDescriptor(Pk.prototype, "audioListenerPositionProvider") || Object.defineProperty(Pk.prototype, "audioListenerPositionProvider", (0, xd.g)("Scene", "audioListenerPositionProvider")), Object.getOwnPropertyDescriptor(Pk.prototype, "audioListenerRotationProvider") || Object.defineProperty(Pk.prototype, "audioListenerRotationProvider", (0, xd.g)("Scene", "audioListenerRotationProvider")), Object.getOwnPropertyDescriptor(Pk.prototype, "audioPositioningRefreshRate") || Object.defineProperty(Pk.prototype, "audioPositioningRefreshRate", (0, xd.g)("Scene", "audioPositioningRefreshRate")), Object.getOwnPropertyDescriptor(Pk.prototype, "selectionOctree") || Object.defineProperty(Pk.prototype, "selectionOctree", (0, xd.g)("Scene", "selectionOctree")), Object.getOwnPropertyDescriptor(Pk.prototype, "debugLayer") || Object.defineProperty(Pk.prototype, "debugLayer", (0, xd.g)("Scene", "debugLayer")), Object.getOwnPropertyDescriptor(Pk.prototype, "gamepadManager") || Object.defineProperty(Pk.prototype, "gamepadManager", (0, xd.g)("Scene", "gamepadManager")), Object.getOwnPropertyDescriptor(Pk.prototype, "simplificationQueue") || Object.defineProperty(Pk.prototype, "simplificationQueue", (0, xd.g)("Scene", "simplificationQueue")), Object.getOwnPropertyDescriptor(Pk.prototype, "onBeforePhysicsObservable") || Object.defineProperty(Pk.prototype, "onBeforePhysicsObservable", (0, xd.g)("Scene", "onBeforePhysicsObservable")), Object.getOwnPropertyDescriptor(Pk.prototype, "onAfterPhysicsObservable") || Object.defineProperty(Pk.prototype, "onAfterPhysicsObservable", (0, xd.g)("Scene", "onAfterPhysicsObservable")), Object.getOwnPropertyDescriptor(Pk.prototype, "reflectionProbes") || Object.defineProperty(Pk.prototype, "reflectionProbes", (0, xd.g)("Scene", "reflectionProbes")), Object.getOwnPropertyDescriptor(Pk.prototype, "forceShowBoundingBoxes") || Object.defineProperty(Pk.prototype, "forceShowBoundingBoxes", (0, xd.g)("Scene", "forceShowBoundingBoxes")), Object.getOwnPropertyDescriptor(Pk.prototype, "depthPeelingRenderer") || Object.defineProperty(Pk.prototype, "depthPeelingRenderer", (0, xd.g)("Scene", "depthPeelingRenderer")), Object.getOwnPropertyDescriptor(Pk.prototype, "useOrderIndependentTransparency") || Object.defineProperty(Pk.prototype, "useOrderIndependentTransparency", (0, xd.g)("Scene", "useOrderIndependentTransparency")), Object.getOwnPropertyDescriptor(Pk.prototype, "fluidRenderer") || Object.defineProperty(Pk.prototype, "fluidRenderer", (0, xd.g)("Scene", "fluidRenderer")), Object.getOwnPropertyDescriptor(Pk.prototype, "geometryBufferRenderer") || Object.defineProperty(Pk.prototype, "geometryBufferRenderer", (0, xd.g)("Scene", "geometryBufferRenderer")), Object.getOwnPropertyDescriptor(Pk.prototype, "iblCdfGenerator") || Object.defineProperty(Pk.prototype, "iblCdfGenerator", (0, xd.g)("Scene", "iblCdfGenerator")), Object.getOwnPropertyDescriptor(Pk.prototype, "prePassRenderer") || Object.defineProperty(Pk.prototype, "prePassRenderer", (0, xd.g)("Scene", "prePassRenderer")), Object.getOwnPropertyDescriptor(Pk.prototype, "subSurfaceConfiguration") || Object.defineProperty(Pk.prototype, "subSurfaceConfiguration", (0, xd.g)("Scene", "subSurfaceConfiguration")), Object.getOwnPropertyDescriptor(Pk.prototype, "spriteManagers") || Object.defineProperty(Pk.prototype, "spriteManagers", (0, xd.g)("Scene", "spriteManagers")), Object.getOwnPropertyDescriptor(Pk.prototype, "onBeforeSpritesRenderingObservable") || Object.defineProperty(Pk.prototype, "onBeforeSpritesRenderingObservable", (0, xd.g)("Scene", "onBeforeSpritesRenderingObservable")), Object.getOwnPropertyDescriptor(Pk.prototype, "onAfterSpritesRenderingObservable") || Object.defineProperty(Pk.prototype, "onAfterSpritesRenderingObservable", (0, xd.g)("Scene", "onAfterSpritesRenderingObservable"))
  },
  40147: (dd, Jd, kd) => {
    kd.d(Jd, {
      b: () => pd,
      c: () => Nd
    });
    class pd {}
    pd.NAME_EFFECTLAYER = "EffectLayer", pd.NAME_LAYER = "Layer", pd.NAME_LENSFLARESYSTEM = "LensFlareSystem", pd.NAME_BOUNDINGBOXRENDERER = "BoundingBoxRenderer", pd.NAME_PARTICLESYSTEM = "ParticleSystem", pd.NAME_GAMEPAD = "Gamepad", pd.NAME_SIMPLIFICATIONQUEUE = "SimplificationQueue", pd.NAME_GEOMETRYBUFFERRENDERER = "GeometryBufferRenderer", pd.NAME_PREPASSRENDERER = "PrePassRenderer", pd.NAME_DEPTHRENDERER = "DepthRenderer", pd.NAME_DEPTHPEELINGRENDERER = "DepthPeelingRenderer", pd.NAME_POSTPROCESSRENDERPIPELINEMANAGER = "PostProcessRenderPipelineManager", pd.NAME_SPRITE = "Sprite", pd.NAME_SUBSURFACE = "SubSurface", pd.NAME_OUTLINERENDERER = "Outline", pd.NAME_PROCEDURALTEXTURE = "ProceduralTexture", pd.NAME_SHADOWGENERATOR = "ShadowGenerator", pd.NAME_OCTREE = "Xpd", pd.NAME_PHYSICSENGINE = "PhysicsEngine", pd.NAME_AUDIO = "Audio", pd.NAME_FLUIDRENDERER = "FluidRenderer", pd.NAME_IBLCDFGENERATOR = "iblCDFGenerator", pd.NAME_CLUSTEREDLIGHTING = "ClusteredLighting", pd.STEP_ISREADYFORMESH_EFFECTLAYER = 0, pd.STEP_ISREADYFORMESH_DEPTHRENDERER = 1, pd.STEP_BEFOREEVALUATEACTIVEMESH_BOUNDINGBOXRENDERER = 0, pd.STEP_EVALUATESUBMESH_BOUNDINGBOXRENDERER = 0, pd.STEP_PREACTIVEMESH_BOUNDINGBOXRENDERER = 0, pd.STEP_CAMERADRAWRENDERTARGET_EFFECTLAYER = 1, pd.STEP_BEFORECAMERADRAW_PREPASS = 0, pd.STEP_BEFORECAMERADRAW_EFFECTLAYER = 1, pd.STEP_BEFORECAMERADRAW_LAYER = 2, pd.STEP_BEFORERENDERTARGETDRAW_PREPASS = 0, pd.STEP_BEFORERENDERTARGETDRAW_LAYER = 1, pd.STEP_BEFORERENDERINGMESH_PREPASS = 0, pd.STEP_BEFORERENDERINGMESH_OUTLINE = 1, pd.STEP_AFTERRENDERINGMESH_PREPASS = 0, pd.STEP_AFTERRENDERINGMESH_OUTLINE = 1, pd.STEP_AFTERRENDERINGGROUPDRAW_EFFECTLAYER_DRAW = 0, pd.STEP_AFTERRENDERINGGROUPDRAW_BOUNDINGBOXRENDERER = 1, pd.STEP_BEFORECAMERAUPDATE_SIMPLIFICATIONQUEUE = 0, pd.STEP_BEFORECLEAR_PROCEDURALTEXTURE = 0, pd.STEP_BEFORECLEAR_PREPASS = 1, pd.STEP_BEFORERENDERTARGETCLEAR_PREPASS = 0, pd.STEP_AFTERRENDERTARGETDRAW_PREPASS = 0, pd.STEP_AFTERRENDERTARGETDRAW_LAYER = 1, pd.STEP_AFTERCAMERADRAW_PREPASS = 0, pd.STEP_AFTERCAMERADRAW_EFFECTLAYER = 1, pd.STEP_AFTERCAMERADRAW_LENSFLARESYSTEM = 2, pd.STEP_AFTERCAMERADRAW_EFFECTLAYER_DRAW = 3, pd.STEP_AFTERCAMERADRAW_LAYER = 4, pd.STEP_AFTERCAMERADRAW_FLUIDRENDERER = 5, pd.STEP_AFTERCAMERAPOSTPROCESS_LAYER = 0, pd.STEP_AFTERRENDERTARGETPOSTPROCESS_LAYER = 0, pd.STEP_AFTERRENDER_AUDIO = 0, pd.STEP_GATHERRENDERTARGETS_DEPTHRENDERER = 0, pd.STEP_GATHERRENDERTARGETS_GEOMETRYBUFFERRENDERER = 1, pd.STEP_GATHERRENDERTARGETS_SHADOWGENERATOR = 2, pd.STEP_GATHERRENDERTARGETS_POSTPROCESSRENDERPIPELINEMANAGER = 3, pd.STEP_GATHERACTIVECAMERARENDERTARGETS_DEPTHRENDERER = 0, pd.STEP_GATHERACTIVECAMERARENDERTARGETS_FLUIDRENDERER = 1, pd.STEP_GATHERACTIVECAMERARENDERTARGETS_CLUSTEREDLIGHTING = 2, pd.STEP_POINTERMOVE_SPRITE = 0, pd.STEP_POINTERDOWN_SPRITE = 0, pd.STEP_POINTERUP_SPRITE = 0;
    class Nd extends Array {
      constructor(dd) {
        super(...dd)
      }
      static Create() {
        return Object.create(Nd.prototype)
      }
      registerStep(dd, Jd, kd) {
        let pd, Nd = 0;
        for (; Nd < this.length; Nd++) {
          if (pd = this[Nd].index, dd < pd) break
        }
        this.splice(Nd, 0, {
          index: dd,
          component: Jd,
          action: kd.bind(Jd)
        })
      }
      clear() {
        this.length = 0
      }
    }
  },
  39964: (dd, Jd, kd) => {
    kd.d(Jd, {
      d: () => Pd,
      e: () => Zd,
      h: () => pd,
      i: () => Nd,
      k: () => Wd
    });

    function pd(dd, Jd, kd, pd, Nd, Wd) {
      function Pd(dd) {
        if (void 0 !== dd && "function" !== typeof dd) throw new TypeError("Function expected");
        return dd
      }
      for (var Zd, gd = pd.kind, Cd = "getter" === gd ? "get" : "setter" === gd ? "set" : "value", Kd = !Jd && dd ? pd.static ? dd : dd.prototype : null, od = Jd || (Kd ? Object.getOwnPropertyDescriptor(Kd, pd.name) : {}), ld = !1, Qd = kd.length - 1; Qd >= 0; Qd--) {
        var Ld = {};
        for (var Od in pd) Ld[Od] = "access" === Od ? {} : pd[Od];
        for (var Od in pd.access) Ld.access[Od] = pd.access[Od];
        Ld.addInitializer = function(dd) {
          if (ld) throw new TypeError("Cannot add initializers after decoration has completed");
          Wd.push(Pd(dd || null))
        };
        var ed = (0, kd[Qd])("accessor" === gd ? {
          get: od.get,
          set: od.set
        } : od[Cd], Ld);
        if ("accessor" === gd) {
          if (void 0 === ed) continue;
          if (null === ed || "object" !== typeof ed) throw new TypeError("Object expected");
          (Zd = Pd(ed.get)) && (od.get = Zd), (Zd = Pd(ed.set)) && (od.set = Zd), (Zd = Pd(ed.init)) && Nd.unshift(Zd)
        } else(Zd = Pd(ed)) && ("field" === gd ? Nd.unshift(Zd) : od[Cd] = Zd)
      }
      Kd && Object.defineProperty(Kd, pd.name, od), ld = !0
    }

    function Nd(dd, Jd, kd) {
      for (var pd = arguments.length > 2, Nd = 0; Nd < Jd.length; Nd++) kd = pd ? Jd[Nd].call(dd, kd) : Jd[Nd].call(dd);
      return pd ? kd : void 0
    }

    function Wd(dd, Jd, kd) {
      return "symbol" === typeof Jd && (Jd = Jd.description ? "[".concat(Jd.description, "]") : ""), Object.defineProperty(dd, "name", {
        configurable: !0,
        value: kd ? "".concat(kd, " ", Jd) : Jd
      })
    }
    Object.create;
    Object.create;

    function Pd(dd, Jd, kd, pd) {
      if ("a" === kd && !pd) throw new TypeError("Private accessor was defined without a getter");
      if ("function" === typeof Jd ? dd !== Jd || !pd : !Jd.has(dd)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return "m" === kd ? pd : "a" === kd ? pd.call(dd) : pd ? pd.value : Jd.get(dd)
    }

    function Zd(dd, Jd, kd, pd, Nd) {
      if ("m" === pd) throw new TypeError("Private method is not writable");
      if ("a" === pd && !Nd) throw new TypeError("Private accessor was defined without a setter");
      if ("function" === typeof Jd ? dd !== Jd || !Nd : !Jd.has(dd)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return "a" === pd ? Nd.call(dd, kd) : Nd ? Nd.value = kd : Jd.set(dd, kd), kd
    }
    "function" === typeof SuppressedError && SuppressedError
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);