export const id = 288;
export const ids = [288];
export const modules = {
  41995: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      c: () => Ir,
      g: () => tr,
      i: () => Er,
      j: () => fr
    });
    var Zr = Qr(41811),
      Wr = Qr(40246),
      ar = Qr(41919),
      jr = Qr(41847);
    class Ir {
      get Dv() {
        return this._isDisposed
      }
      constructor(rr, Sr, Qr) {
        let Wr = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          ar = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          Ir = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
          fr = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
          Er = arguments.length > 7 ? arguments[7] : void 0,
          pr = arguments.length > 8 ? arguments[8] : void 0;
        this._isAlreadyOwned = !1, this._isDisposed = !1, (0, jr.b)(), rr && rr.eC ? this._engine = rr.eC().MU() : this._engine = rr, this._updatable = Qr, this._instanced = Ir, this._divisor = Er || 1, this._label = pr, Sr instanceof Zr.e ? (this._data = null, this._buffer = Sr) : (this._data = Sr, this._buffer = null), this.byteStride = fr ? Wr : Wr * Float32Array.BYTES_PER_ELEMENT, ar || this.create()
      }
      createVertexBuffer(rr, Sr, Qr, Zr, Wr) {
        let ar = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
          jr = arguments.length > 6 ? arguments[6] : void 0;
        const Ir = ar ? Sr : Sr * Float32Array.BYTES_PER_ELEMENT,
          Er = Zr ? ar ? Zr : Zr * Float32Array.BYTES_PER_ELEMENT : this.byteStride;
        return new fr(this._engine, this, rr, this._updatable, !0, Er, void 0 === Wr ? this._instanced : Wr, Ir, Qr, void 0, void 0, !0, this._divisor || jr)
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
        let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        !rr && this._buffer || (rr = rr || this._data, rr && (this._buffer ? this._updatable && (this._engine.updateDynamicVertexBuffer(this._buffer, rr), this._data = rr) : this._updatable ? (this._buffer = this._engine.createDynamicVertexBuffer(rr, this._label), this._data = rr) : this._buffer = this._engine.createVertexBuffer(rr, void 0, this._label)))
      }
      _rebuild() {
        if (this._data) this._buffer = null, this.create(this._data);
        else {
          if (!this._buffer) return;
          if (this._buffer.sx > 0) return void(this._updatable ? this._buffer = this._engine.createDynamicVertexBuffer(this._buffer.sx, this._label) : this._buffer = this._engine.createVertexBuffer(this._buffer.sx, void 0, this._label));
          Wr.c.Warn(`Missing data for buffer "${this._label}" ${this._buffer?"(uniqueId: "+this._buffer.uniqueId+")":""}. Buffer reconstruction failed.`), this._buffer = null
        }
      }
      update(rr) {
        this.create(rr)
      }
      updateDirectly(rr, Sr, Qr) {
        let Zr = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        this._buffer && this._updatable && (this._engine.updateDynamicVertexBuffer(this._buffer, rr, Zr ? Sr : Sr * Float32Array.BYTES_PER_ELEMENT, Qr ? Qr * this.byteStride : void 0), this._data = 0 === Sr && void 0 === Qr ? rr : null)
      }
      _increaseReferences() {
        this._buffer && (this._isAlreadyOwned ? this._buffer.references++ : this._isAlreadyOwned = !0)
      }
      dispose() {
        this._buffer && this._engine._releaseBuffer(this._buffer) && (this._isDisposed = !0, this._data = null, this._buffer = null)
      }
    }
    class fr {
      get Dv() {
        return this._isDisposed
      }
      get instanceDivisor() {
        return this._instanceDivisor
      }
      set instanceDivisor(rr) {
        const Sr = 0 != rr;
        this._instanceDivisor = rr, Sr !== this._instanced && (this._instanced = Sr, this._computeHashCode())
      }
      get _maxVerticesCount() {
        const rr = this.getData();
        return rr ? Array.isArray(rr) ? rr.length / (this.byteStride / 4) - this.byteOffset / 4 : (rr.byteLength - this.byteOffset) / this.byteStride : 0
      }
      constructor(rr, Sr, Qr, Zr, Wr, jr, xr, mr, Nr, Ur) {
        let tr, hr = arguments.length > 10 && void 0 !== arguments[10] && arguments[10],
          zr = arguments.length > 11 && void 0 !== arguments[11] && arguments[11],
          Yr = arguments.length > 12 && void 0 !== arguments[12] ? arguments[12] : 1,
          nr = arguments.length > 13 && void 0 !== arguments[13] && arguments[13];
        if (this._isDisposed = !1, this.engine = rr, "object" === typeof Zr && null !== Zr ? (tr = Zr.updatable ?? !1, Wr = Zr.postponeInternalCreation, jr = Zr.stride, xr = Zr.instanced, mr = Zr.offset, Nr = Zr.size, Ur = Zr.type, hr = Zr.normalized ?? !1, zr = Zr.useBytes ?? !1, Yr = Zr.divisor ?? 1, nr = Zr.takeBufferOwnership ?? !1, this._label = Zr.label) : tr = !!Zr, Sr instanceof Ir ? (this._buffer = Sr, this._ownsBuffer = nr) : (this._buffer = new Ir(rr, Sr, tr, jr, Wr, xr, zr, Yr, this._label), this._ownsBuffer = !0), this.uniqueId = fr._Counter++, this._kind = Qr, void 0 === Ur) {
          const rr = this.getData();
          this.type = rr ? pr(rr) : fr.FLOAT
        } else this.type = Ur;
        const er = (0, ar.k)(this.type);
        zr ? (this._size = Nr || (jr ? jr / er : Er(Qr)), this.byteStride = jr || this._buffer.byteStride || this._size * er, this.byteOffset = mr || 0) : (this._size = Nr || jr || Er(Qr), this.byteStride = jr ? jr * er : this._buffer.byteStride || this._size * er, this.byteOffset = (mr || 0) * er), this.normalized = hr, this._instanced = void 0 !== xr && xr, this._instanceDivisor = xr ? Yr : 0, this._alignBuffer(), this._computeHashCode()
      }
      static _GetTypeHashIndex(rr) {
        switch (rr) {
          case fr.BYTE:
            return 0;
          case fr.UNSIGNED_BYTE:
            return 1;
          case fr.SHORT:
            return 2;
          case fr.UNSIGNED_SHORT:
            return 3;
          case fr.INT:
            return 4;
          case fr.UNSIGNED_INT:
            return 5;
          case fr.FLOAT:
            return 6;
          case fr.HALF_FLOAT:
            return 7;
          default:
            throw new Error(`Invalid vertex buffer type '${rr}'`)
        }
      }
      _computeHashCode() {
        this.hashCode = (fr._GetTypeHashIndex(this.type) | 0) + ((this.normalized ? 1 : 0) << 3) + (this._size - 1 << 4) + ((this._instanced ? 1 : 0) << 6) + (this.byteStride << 12)
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
      getFloatData(rr, Sr) {
        const Qr = this.getData();
        return Qr ? (0, ar.j)(Qr, this._size, this.type, this.byteOffset, this.byteStride, this.normalized, rr, Sr) : null
      }
      getBuffer() {
        return this._buffer.getBuffer()
      }
      getWrapperBuffer() {
        return this._buffer
      }
      getStrideSize() {
        return this.byteStride / (0, ar.k)(this.type)
      }
      JQr() {
        return this.byteOffset / (0, ar.k)(this.type)
      }
      getSize() {
        return arguments.length > 0 && void 0 !== arguments[0] && arguments[0] ? this._size * (0, ar.k)(this.type) : this._size
      }
      getIsInstanced() {
        return this._instanced
      }
      getInstanceDivisor() {
        return this._instanceDivisor
      }
      create(rr) {
        this._buffer.create(rr), this._alignBuffer()
      }
      update(rr) {
        this._buffer.update(rr), this._alignBuffer()
      }
      updateDirectly(rr, Sr) {
        let Qr = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this._buffer.updateDirectly(rr, Sr, void 0, Qr), this._alignBuffer()
      }
      dispose() {
        this._ownsBuffer && this._buffer.dispose(), this._isDisposed = !0
      }
      forEach(rr, Sr) {
        (0, ar.f)(this._buffer.getData(), this.byteOffset, this.byteStride, this._size, this.type, rr, this.normalized, ((rr, Qr) => {
          for (let Zr = 0; Zr < this._size; Zr++) Sr(rr[Zr], Qr + Zr)
        }))
      }
      _alignBuffer() {}
    }

    function Er(rr) {
      switch (rr) {
        case fr.UVKind:
        case fr.UV2Kind:
        case fr.UV3Kind:
        case fr.UV4Kind:
        case fr.UV5Kind:
        case fr.UV6Kind:
          return 2;
        case fr.NormalKind:
        case fr.PositionKind:
          return 3;
        case fr.ColorKind:
        case fr.ColorInstanceKind:
        case fr.MatricesIndicesKind:
        case fr.MatricesIndicesExtraKind:
        case fr.MatricesWeightsKind:
        case fr.MatricesWeightsExtraKind:
        case fr.TangentKind:
          return 4;
        default:
          throw new Error("Invalid kind '" + rr + "'")
      }
    }

    function pr(rr) {
      return rr instanceof Int8Array ? fr.BYTE : rr instanceof Uint8Array ? fr.UNSIGNED_BYTE : rr instanceof Int16Array ? fr.SHORT : rr instanceof Uint16Array ? fr.UNSIGNED_SHORT : rr instanceof Int32Array ? fr.INT : rr instanceof Uint32Array ? fr.UNSIGNED_INT : fr.FLOAT
    }

    function xr(rr) {
      return (0, ar.k)(rr)
    }

    function mr(rr, Sr, Qr, Zr, Wr, jr, Ir, fr) {
      (0, ar.f)(rr, Sr, Qr, Zr, Wr, jr, Ir, ((rr, Sr) => {
        for (let Qr = 0; Qr < Zr; Qr++) fr(rr[Qr], Sr + Qr)
      }))
    }

    function Nr(rr, Sr, Qr, Zr, Wr, jr, Ir, fr) {
      return (0, ar.j)(rr, Sr, Qr, Zr, Wr, jr, Ir, fr)
    }
    fr._Counter = 0, fr.BYTE = 5120, fr.UNSIGNED_BYTE = 5121, fr.SHORT = 5122, fr.UNSIGNED_SHORT = 5123, fr.INT = 5124, fr.UNSIGNED_INT = 5125, fr.FLOAT = 5126, fr.HALF_FLOAT = 5131, fr.PositionKind = "position", fr.NormalKind = "normal", fr.TangentKind = "tangent", fr.UVKind = "uv", fr.UV2Kind = "uv2", fr.UV3Kind = "uv3", fr.UV4Kind = "uv4", fr.UV5Kind = "uv5", fr.UV6Kind = "uv6", fr.ColorKind = "color", fr.ColorInstanceKind = "instanceColor", fr.MatricesIndicesKind = "matricesIndices", fr.MatricesWeightsKind = "matricesWeights", fr.MatricesIndicesExtraKind = "matricesIndicesExtra", fr.MatricesWeightsExtraKind = "matricesWeightsExtra";
    let Ur = !1;

    function tr() {
      Ur || (Ur = !0, fr.DeduceStride = Er, fr.GetDataType = pr, fr.GetTypeByteLength = xr, fr.ForEach = mr, fr.GetFloatData = Nr)
    }
  },
  41811: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      e: () => Zr
    });
    class Zr {
      get underlyingResource() {
        return null
      }
      constructor() {
        this.references = 0, this.sx = 0, this.is32Bits = !1, this.uniqueId = Zr._Counter++
      }
    }
    Zr._Counter = 0
  },
  41989: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      b: () => ar
    });
    var Zr = Qr(38560),
      Wr = Qr(41995);
    class ar {
      constructor() {
        this.hit = !1, this.distance = 0, this.pickedPoint = null, this.pickedMesh = null, this.bu = 0, this.bv = 0, this.faceId = -1, this.subMeshFaceId = -1, this.subMeshId = 0, this.pickedSprite = null, this.thinInstanceIndex = -1, this.ray = null, this.originMesh = null, this.aimTransform = null, this.gripTransform = null
      }
      getNormal() {
        let rr = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          Sr = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (!this.pickedMesh || Sr && !this.pickedMesh.isVerticesDataPresent(Wr.j.NormalKind)) return null;
        let Qr, ar = this.pickedMesh.yar();
        0 === ar?.length && (ar = null);
        const jr = Zr.n.kU[0],
          Ir = Zr.n.kU[1],
          fr = Zr.n.kU[2];
        if (Sr) {
          const rr = this.pickedMesh.getVerticesData(Wr.j.NormalKind);
          let Sr = ar ? Zr.u.FromArrayToRef(rr, 3 * ar[3 * this.faceId], jr) : jr.Hrr(rr[3 * this.faceId * 3], rr[3 * this.faceId * 3 + 1], rr[3 * this.faceId * 3 + 2]),
            Er = ar ? Zr.u.FromArrayToRef(rr, 3 * ar[3 * this.faceId + 1], Ir) : Ir.Hrr(rr[3 * (3 * this.faceId + 1)], rr[3 * (3 * this.faceId + 1) + 1], rr[3 * (3 * this.faceId + 1) + 2]),
            pr = ar ? Zr.u.FromArrayToRef(rr, 3 * ar[3 * this.faceId + 2], fr) : fr.Hrr(rr[3 * (3 * this.faceId + 2)], rr[3 * (3 * this.faceId + 2) + 1], rr[3 * (3 * this.faceId + 2) + 2]);
          Sr = Sr.scale(this.bu), Er = Er.scale(this.bv), pr = pr.scale(1 - this.bu - this.bv), Qr = new Zr.u(Sr.x + Er.x + pr.x, Sr.y + Er.y + pr.y, Sr.z + Er.z + pr.z)
        } else {
          const rr = this.pickedMesh.getVerticesData(Wr.j.PositionKind),
            Sr = ar ? Zr.u.FromArrayToRef(rr, 3 * ar[3 * this.faceId], jr) : jr.Hrr(rr[3 * this.faceId * 3], rr[3 * this.faceId * 3 + 1], rr[3 * this.faceId * 3 + 2]),
            Er = ar ? Zr.u.FromArrayToRef(rr, 3 * ar[3 * this.faceId + 1], Ir) : Ir.Hrr(rr[3 * (3 * this.faceId + 1)], rr[3 * (3 * this.faceId + 1) + 1], rr[3 * (3 * this.faceId + 1) + 2]),
            pr = ar ? Zr.u.FromArrayToRef(rr, 3 * ar[3 * this.faceId + 2], fr) : fr.Hrr(rr[3 * (3 * this.faceId + 2)], rr[3 * (3 * this.faceId + 2) + 1], rr[3 * (3 * this.faceId + 2) + 2]),
            xr = Sr.subtract(Er),
            mr = pr.subtract(Er);
          Qr = Zr.u.Cross(xr, mr)
        }
        const Er = (rr, Sr) => {
          if (-1 !== this.thinInstanceIndex) {
            const Qr = rr._thinInstanceDataStorage.matrixData,
              Wr = this.thinInstanceIndex << 4;
            if (Qr && Qr.length > Wr) {
              const rr = Zr.n.Matrix[0];
              Zr.d.FromArrayToRef(Qr, Wr, rr), Zr.u.TransformNormalToRef(Sr, rr, Sr)
            }
          }
          let Qr = rr.getWorldMatrix();
          rr.nonUniformScaling && (Zr.n.Matrix[0].iH(Qr), Qr = Zr.n.Matrix[0], Qr.setTranslationFromFloats(0, 0, 0), Qr.invert(), Qr.transposeToRef(Zr.n.Matrix[1]), Qr = Zr.n.Matrix[1]), Zr.u.TransformNormalToRef(Sr, Qr, Sr)
        };
        if (rr && Er(this.pickedMesh, Qr), this.ray) {
          const Sr = Zr.n.kU[0].iH(Qr);
          rr || Er(this.pickedMesh, Sr), Zr.u.Dot(Sr, this.ray.direction) > 0 && Qr.negateInPlace()
        }
        return Qr.normalize(), Qr
      }
      getTextureCoordinates() {
        let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Wr.j.UVKind;
        if (!this.pickedMesh || !this.pickedMesh.isVerticesDataPresent(rr)) return null;
        const Sr = this.pickedMesh.yar();
        if (!Sr) return null;
        const Qr = this.pickedMesh.getVerticesData(rr);
        if (!Qr) return null;
        let ar = Zr.q.FromArray(Qr, 2 * Sr[3 * this.faceId]),
          jr = Zr.q.FromArray(Qr, 2 * Sr[3 * this.faceId + 1]),
          Ir = Zr.q.FromArray(Qr, 2 * Sr[3 * this.faceId + 2]);
        return ar = ar.scale(this.bu), jr = jr.scale(this.bv), Ir = Ir.scale(1 - this.bu - this.bv), new Zr.q(ar.x + jr.x + Ir.x, ar.y + jr.y + Ir.y)
      }
    }
  },
  41847: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      b: () => ar
    });
    var Zr = Qr(41737);
    let Wr = !1;

    function ar() {
      Wr || (Wr = !0, Zr.ThinEngine.prototype.updateDynamicIndexBuffer = function(rr, Sr) {
        let Qr;
        this._currentBoundBuffer[this._gl.ELEMENT_ARRAY_BUFFER] = null, this.bindIndexBuffer(rr), Qr = rr.is32Bits ? Sr instanceof Uint32Array ? Sr : new Uint32Array(Sr) : Sr instanceof Uint16Array ? Sr : new Uint16Array(Sr), this._gl.bufferData(this._gl.ELEMENT_ARRAY_BUFFER, Qr, this._gl.DYNAMIC_DRAW), this._resetIndexBufferBinding()
      }, Zr.ThinEngine.prototype.updateDynamicVertexBuffer = function(rr, Sr, Qr, Zr) {
        this.bindArrayBuffer(rr), void 0 === Qr && (Qr = 0);
        const Wr = Sr.byteLength || Sr.length;
        void 0 === Zr || Zr >= Wr && 0 === Qr ? Sr instanceof Array ? this._gl.bufferSubData(this._gl.ARRAY_BUFFER, Qr, new Float32Array(Sr)) : this._gl.bufferSubData(this._gl.ARRAY_BUFFER, Qr, Sr) : Sr instanceof Array ? this._gl.bufferSubData(this._gl.ARRAY_BUFFER, Qr, new Float32Array(Sr).subarray(0, Zr / 4)) : (Sr = ArrayBuffer.isView(Sr) ? new Uint8Array(Sr.buffer, Sr.byteOffset, Zr) : new Uint8Array(Sr, 0, Zr), this._gl.bufferSubData(this._gl.ARRAY_BUFFER, Qr, Sr)), this._resetVertexBufferBinding()
      })
    }
  },
  41820: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      b: () => Zr
    });
    class Zr {
      get underlyingResource() {
        return this._webGLTexture
      }
      constructor() {
        let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          Sr = arguments.length > 1 ? arguments[1] : void 0;
        if (this._MSAARenderBuffers = null, this._context = Sr, !rr && (rr = Sr.createTexture(), !rr)) throw new Error("Unable to create webGL texture");
        this.set(rr)
      }
      setUsage() {}
      set(rr) {
        this._webGLTexture = rr
      }
      reset() {
        this._webGLTexture = null, this._MSAARenderBuffers = null
      }
      addMSAARenderBuffer(rr) {
        this._MSAARenderBuffers || (this._MSAARenderBuffers = []), this._MSAARenderBuffers.push(rr)
      }
      releaseMSAARenderBuffers() {
        if (this._MSAARenderBuffers) {
          for (const rr of this._MSAARenderBuffers) this._context.deleteRenderbuffer(rr);
          this._MSAARenderBuffers = null
        }
      }
      getMSAARenderBuffer() {
        let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return this._MSAARenderBuffers?.[rr] ?? null
      }
      release() {
        this.releaseMSAARenderBuffers(), this._webGLTexture && this._context.deleteTexture(this._webGLTexture), this.reset()
      }
    }
  },
  41784: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      e: () => Yr
    });
    var Zr = Qr(38595),
      Wr = Qr(41741),
      ar = Qr(38587),
      jr = Qr(40246),
      Ir = Qr(38578),
      fr = Qr(41787);
    class Er {
      constructor() {
        let rr = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        this._isDepthTestDirty = !1, this._isDepthMaskDirty = !1, this._isDepthFuncDirty = !1, this._isCullFaceDirty = !1, this._isCullDirty = !1, this._isZOffsetDirty = !1, this._isFrontFaceDirty = !1, rr && this.reset()
      }
      get isDirty() {
        return this._isDepthFuncDirty || this._isDepthTestDirty || this._isDepthMaskDirty || this._isCullFaceDirty || this._isCullDirty || this._isZOffsetDirty || this._isFrontFaceDirty
      }
      get zOffset() {
        return this._zOffset
      }
      set zOffset(rr) {
        this._zOffset !== rr && (this._zOffset = rr, this._isZOffsetDirty = !0)
      }
      get zOffsetUnits() {
        return this._zOffsetUnits
      }
      set zOffsetUnits(rr) {
        this._zOffsetUnits !== rr && (this._zOffsetUnits = rr, this._isZOffsetDirty = !0)
      }
      get cullFace() {
        return this._cullFace
      }
      set cullFace(rr) {
        this._cullFace !== rr && (this._cullFace = rr, this._isCullFaceDirty = !0)
      }
      get cull() {
        return this._cull
      }
      set cull(rr) {
        this._cull !== rr && (this._cull = rr, this._isCullDirty = !0)
      }
      get depthFunc() {
        return this._depthFunc
      }
      set depthFunc(rr) {
        this._depthFunc !== rr && (this._depthFunc = rr, this._isDepthFuncDirty = !0)
      }
      get depthMask() {
        return this._depthMask
      }
      set depthMask(rr) {
        this._depthMask !== rr && (this._depthMask = rr, this._isDepthMaskDirty = !0)
      }
      get depthTest() {
        return this._depthTest
      }
      set depthTest(rr) {
        this._depthTest !== rr && (this._depthTest = rr, this._isDepthTestDirty = !0)
      }
      get frontFace() {
        return this._frontFace
      }
      set frontFace(rr) {
        this._frontFace !== rr && (this._frontFace = rr, this._isFrontFaceDirty = !0)
      }
      reset() {
        this._depthMask = !0, this._depthTest = !0, this._depthFunc = null, this._cullFace = null, this._cull = null, this._zOffset = 0, this._zOffsetUnits = 0, this._frontFace = null, this._isDepthTestDirty = !0, this._isDepthMaskDirty = !0, this._isDepthFuncDirty = !1, this._isCullFaceDirty = !1, this._isCullDirty = !1, this._isZOffsetDirty = !0, this._isFrontFaceDirty = !1
      }
      apply(rr) {
        this.isDirty && (this._isCullDirty && (this.cull ? rr.enable(rr.CULL_FACE) : rr.disable(rr.CULL_FACE), this._isCullDirty = !1), this._isCullFaceDirty && (rr.cullFace(this.cullFace), this._isCullFaceDirty = !1), this._isDepthMaskDirty && (rr.depthMask(this.depthMask), this._isDepthMaskDirty = !1), this._isDepthTestDirty && (this.depthTest ? rr.enable(rr.DEPTH_TEST) : rr.disable(rr.DEPTH_TEST), this._isDepthTestDirty = !1), this._isDepthFuncDirty && (rr.depthFunc(this.depthFunc), this._isDepthFuncDirty = !1), this._isZOffsetDirty && (this.zOffset || this.zOffsetUnits ? (rr.enable(rr.POLYGON_OFFSET_FILL), rr.polygonOffset(this.zOffset, this.zOffsetUnits)) : rr.disable(rr.POLYGON_OFFSET_FILL), this._isZOffsetDirty = !1), this._isFrontFaceDirty && (rr.frontFace(this.frontFace), this._isFrontFaceDirty = !1))
      }
    }
    class pr {
      get isDirty() {
        return this._isStencilTestDirty || this._isStencilMaskDirty || this._isStencilFuncDirty || this._isStencilOpDirty
      }
      get func() {
        return this._func
      }
      set func(rr) {
        this._func !== rr && (this._func = rr, this._isStencilFuncDirty = !0)
      }
      get backFunc() {
        return this._func
      }
      set backFunc(rr) {
        this._backFunc !== rr && (this._backFunc = rr, this._isStencilFuncDirty = !0)
      }
      get funcRef() {
        return this._funcRef
      }
      set funcRef(rr) {
        this._funcRef !== rr && (this._funcRef = rr, this._isStencilFuncDirty = !0)
      }
      get funcMask() {
        return this._funcMask
      }
      set funcMask(rr) {
        this._funcMask !== rr && (this._funcMask = rr, this._isStencilFuncDirty = !0)
      }
      get opStencilFail() {
        return this._opStencilFail
      }
      set opStencilFail(rr) {
        this._opStencilFail !== rr && (this._opStencilFail = rr, this._isStencilOpDirty = !0)
      }
      get opDepthFail() {
        return this._opDepthFail
      }
      set opDepthFail(rr) {
        this._opDepthFail !== rr && (this._opDepthFail = rr, this._isStencilOpDirty = !0)
      }
      get opStencilDepthPass() {
        return this._opStencilDepthPass
      }
      set opStencilDepthPass(rr) {
        this._opStencilDepthPass !== rr && (this._opStencilDepthPass = rr, this._isStencilOpDirty = !0)
      }
      get backOpStencilFail() {
        return this._backOpStencilFail
      }
      set backOpStencilFail(rr) {
        this._backOpStencilFail !== rr && (this._backOpStencilFail = rr, this._isStencilOpDirty = !0)
      }
      get backOpDepthFail() {
        return this._backOpDepthFail
      }
      set backOpDepthFail(rr) {
        this._backOpDepthFail !== rr && (this._backOpDepthFail = rr, this._isStencilOpDirty = !0)
      }
      get backOpStencilDepthPass() {
        return this._backOpStencilDepthPass
      }
      set backOpStencilDepthPass(rr) {
        this._backOpStencilDepthPass !== rr && (this._backOpStencilDepthPass = rr, this._isStencilOpDirty = !0)
      }
      get mask() {
        return this._mask
      }
      set mask(rr) {
        this._mask !== rr && (this._mask = rr, this._isStencilMaskDirty = !0)
      }
      get enabled() {
        return this._enabled
      }
      set enabled(rr) {
        this._enabled !== rr && (this._enabled = rr, this._isStencilTestDirty = !0)
      }
      constructor() {
        let rr = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        this._isStencilTestDirty = !1, this._isStencilMaskDirty = !1, this._isStencilFuncDirty = !1, this._isStencilOpDirty = !1, this.useStencilGlobalOnly = !1, rr && this.reset()
      }
      reset() {
        this.stencilMaterial = void 0, this.stencilGlobal?.reset(), this._isStencilTestDirty = !0, this._isStencilMaskDirty = !0, this._isStencilFuncDirty = !0, this._isStencilOpDirty = !0
      }
      apply(rr) {
        if (!rr) return;
        const Sr = !this.useStencilGlobalOnly && !!this.stencilMaterial?.enabled;
        this.enabled = Sr ? this.stencilMaterial.enabled : this.stencilGlobal.enabled, this.func = Sr ? this.stencilMaterial.func : this.stencilGlobal.func, this.backFunc = Sr ? this.stencilMaterial.backFunc : this.stencilGlobal.backFunc, this.funcRef = Sr ? this.stencilMaterial.funcRef : this.stencilGlobal.funcRef, this.funcMask = Sr ? this.stencilMaterial.funcMask : this.stencilGlobal.funcMask, this.opStencilFail = Sr ? this.stencilMaterial.opStencilFail : this.stencilGlobal.opStencilFail, this.opDepthFail = Sr ? this.stencilMaterial.opDepthFail : this.stencilGlobal.opDepthFail, this.opStencilDepthPass = Sr ? this.stencilMaterial.opStencilDepthPass : this.stencilGlobal.opStencilDepthPass, this.backOpStencilFail = Sr ? this.stencilMaterial.backOpStencilFail : this.stencilGlobal.backOpStencilFail, this.backOpDepthFail = Sr ? this.stencilMaterial.backOpDepthFail : this.stencilGlobal.backOpDepthFail, this.backOpStencilDepthPass = Sr ? this.stencilMaterial.backOpStencilDepthPass : this.stencilGlobal.backOpStencilDepthPass, this.mask = Sr ? this.stencilMaterial.mask : this.stencilGlobal.mask, this.isDirty && (this._isStencilTestDirty && (this.enabled ? rr.enable(rr.STENCIL_TEST) : rr.disable(rr.STENCIL_TEST), this._isStencilTestDirty = !1), this._isStencilMaskDirty && (rr.stencilMask(this.mask), this._isStencilMaskDirty = !1), this._isStencilFuncDirty && (rr.stencilFuncSeparate(rr.FRONT, this.func, this.funcRef, this.funcMask), rr.stencilFuncSeparate(rr.BACK, this.backFunc, this.funcRef, this.funcMask), this._isStencilFuncDirty = !1), this._isStencilOpDirty && (rr.stencilOpSeparate(rr.FRONT, this.opStencilFail, this.opDepthFail, this.opStencilDepthPass), rr.stencilOpSeparate(rr.BACK, this.backOpStencilFail, this.backOpDepthFail, this.backOpStencilDepthPass), this._isStencilOpDirty = !1))
      }
    }
    class xr {
      constructor() {
        this.reset()
      }
      reset() {
        this.enabled = !1, this.mask = 255, this.funcRef = 1, this.funcMask = 255, this.func = xr.ALWAYS, this.opStencilFail = xr.KEEP, this.opDepthFail = xr.KEEP, this.opStencilDepthPass = xr.REPLACE, this.backFunc = xr.ALWAYS, this.backOpStencilFail = xr.KEEP, this.backOpDepthFail = xr.KEEP, this.backOpStencilDepthPass = xr.REPLACE
      }
      get stencilFunc() {
        return this.func
      }
      set stencilFunc(rr) {
        this.func = rr
      }
      get stencilBackFunc() {
        return this.backFunc
      }
      set stencilBackFunc(rr) {
        this.backFunc = rr
      }
      get stencilFuncRef() {
        return this.funcRef
      }
      set stencilFuncRef(rr) {
        this.funcRef = rr
      }
      get stencilFuncMask() {
        return this.funcMask
      }
      set stencilFuncMask(rr) {
        this.funcMask = rr
      }
      get stencilOpStencilFail() {
        return this.opStencilFail
      }
      set stencilOpStencilFail(rr) {
        this.opStencilFail = rr
      }
      get stencilOpDepthFail() {
        return this.opDepthFail
      }
      set stencilOpDepthFail(rr) {
        this.opDepthFail = rr
      }
      get stencilOpStencilDepthPass() {
        return this.opStencilDepthPass
      }
      set stencilOpStencilDepthPass(rr) {
        this.opStencilDepthPass = rr
      }
      get stencilBackOpStencilFail() {
        return this.backOpStencilFail
      }
      set stencilBackOpStencilFail(rr) {
        this.backOpStencilFail = rr
      }
      get stencilBackOpDepthFail() {
        return this.backOpDepthFail
      }
      set stencilBackOpDepthFail(rr) {
        this.backOpDepthFail = rr
      }
      get stencilBackOpStencilDepthPass() {
        return this.backOpStencilDepthPass
      }
      set stencilBackOpStencilDepthPass(rr) {
        this.backOpStencilDepthPass = rr
      }
      get stencilMask() {
        return this.mask
      }
      set stencilMask(rr) {
        this.mask = rr
      }
      get stencilTest() {
        return this.enabled
      }
      set stencilTest(rr) {
        this.enabled = rr
      }
    }
    xr.ALWAYS = 519, xr.KEEP = 7680, xr.REPLACE = 7681;
    var mr = Qr(41792),
      Nr = Qr(41769),
      Ur = Qr(41731),
      tr = Qr(41749),
      hr = Qr(41764);

    function zr(rr, Sr) {
      if (Sr) {
        const {
          requestAnimationFrame: Qr
        } = Sr;
        if ("function" === typeof Qr) return Qr(rr)
      }
      if ((0, tr.m)()) {
        const {
          requestAnimationFrame: Qr
        } = Sr || window;
        if ("function" === typeof Qr) return Qr(rr)
      } else if ("function" === typeof requestAnimationFrame) return requestAnimationFrame(rr);
      return setTimeout(rr, 16)
    }
    class Yr {
      get frameId() {
        return this._frameId
      }
      get isWebGPU() {
        return this._isWebGPU
      }
      _getShaderProcessor(rr) {
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
      get JZr() {
        return this._useReverseDepthBuffer
      }
      set JZr(rr) {
        rr !== this._useReverseDepthBuffer && (this._useReverseDepthBuffer = rr, this._depthCullingState.depthFunc = rr ? 518 : 515)
      }
      setColorWrite(rr) {
        rr !== this._colorWrite && (this._colorWriteChanged = !0, this._colorWrite = rr)
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
      _getGlobalDefines(rr) {
        if (rr) return this.isNDCHalfZRange ? rr.IS_NDC_HALF_ZRANGE = "" : delete rr.IS_NDC_HALF_ZRANGE, this.JZr ? rr.USE_REVERSE_DEPTHBUFFER = "" : delete rr.USE_REVERSE_DEPTHBUFFER, void(this.useExactSrgbConversions ? rr.USE_EXACT_SRGB_CONVERSIONS = "" : delete rr.USE_EXACT_SRGB_CONVERSIONS);
        {
          let rr = "";
          return this.isNDCHalfZRange && (rr += "#define IS_NDC_HALF_ZRANGE"), this.JZr && (rr && (rr += "\n"), rr += "#define USE_REVERSE_DEPTHBUFFER"), this.useExactSrgbConversions && (rr && (rr += "\n"), rr += "#define USE_EXACT_SRGB_CONVERSIONS"), rr
        }
      }
      _rebuildInternalTextures() {
        const rr = this._internalTexturesCache.slice();
        for (const Sr of rr) Sr._rebuild()
      }
      _rebuildRenderTargetWrappers() {
        const rr = this._renderTargetWrapperCache.slice();
        for (const Sr of rr) Sr.textures?.some((rr => 15 === rr.source)) || Sr._rebuild()
      }
      _rebuildEffects() {
        for (const rr in this._compiledEffects) {
          const Sr = this._compiledEffects[rr];
          Sr._pipelineContext = null, Sr._prepareEffect()
        }
        Wr.b.ResetCache()
      }
      _rebuildGraphicsResources() {
        this.wipeCaches(!0), this._rebuildEffects(), this._rebuildComputeEffects?.(), this._rebuildBuffers(), this._rebuildInternalTextures(), this._rebuildTextures(), this._rebuildRenderTargetWrappers(), this.wipeCaches(!0)
      }
      _flagContextRestored() {
        jr.c.Warn(this.name + " context successfully restored."), this.CU.notifyObservers(this), this._contextWasLost = !1
      }
      _restoreEngineAfterContextLost(rr) {
        setTimeout((() => {
          this._clearEmptyResources();
          const Sr = this._depthCullingState.depthTest,
            Qr = this._depthCullingState.depthFunc,
            Zr = this._depthCullingState.depthMask,
            Wr = this._stencilState.stencilTest;
          rr(), this._rebuildGraphicsResources(), this._depthCullingState.depthTest = Sr, this._depthCullingState.depthFunc = Qr, this._depthCullingState.depthMask = Zr, this._stencilState.stencilTest = Wr, this._flagContextRestored()
        }), 0)
      }
      get Dv() {
        return this._isDisposed
      }
      get snapshotRendering() {
        return !1
      }
      set snapshotRendering(rr) {}
      get snapshotRenderingMode() {
        return 0
      }
      set snapshotRenderingMode(rr) {}
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
          const rr = new Uint8Array(4),
            Sr = [rr, rr, rr, rr, rr, rr];
          this._emptyCubeTexture = this.createRawCubeTexture(Sr, 1, 5, 0, !1, !1, 1)
        }
        return this._emptyCubeTexture
      }
      set framebufferDimensionsObject(rr) {
        this._framebufferDimensionsObject = rr
      }
      get activeRenderLoops() {
        return this._activeRenderLoops
      }
      stopRenderLoop(rr) {
        if (!rr) return this._activeRenderLoops.length = 0, void this._cancelFrame();
        const Sr = this._activeRenderLoops.indexOf(rr);
        Sr >= 0 && (this._activeRenderLoops.splice(Sr, 1), 0 == this._activeRenderLoops.length && this._cancelFrame())
      }
      _cancelFrame() {
        if (this.customAnimationFrameRequester) {
          if (0 !== this._frameHandler) {
            this._frameHandler = 0;
            const {
              cancelAnimationFrame: rr
            } = this.customAnimationFrameRequester;
            rr && rr(this.customAnimationFrameRequester.AU), delete this.customAnimationFrameRequester.AU
          }
        } else if (0 !== this._frameHandler) {
          const rr = this._frameHandler;
          if (this._frameHandler = 0, (0, tr.m)()) {
            const {
              cancelAnimationFrame: Sr
            } = this.getHostWindow() || window;
            if ("function" === typeof Sr) return Sr(rr)
          } else if ("function" === typeof cancelAnimationFrame) return cancelAnimationFrame(rr);
          return clearTimeout(rr)
        }
      }
      lB() {
        this.onBeginFrameObservable.notifyObservers(this)
      }
      Bx() {
        this._frameId++, this.onEndFrameObservable.notifyObservers(this)
      }
      get maxFPS() {
        return this._maxFPS
      }
      set maxFPS(rr) {
        this._maxFPS = rr, void 0 !== rr && (this._minFrameTime = rr <= 0 ? Number.MAX_VALUE : 1e3 / rr)
      }
      _isOverFrameTime(rr) {
        if (!rr || void 0 === this._maxFPS) return !1;
        const Sr = rr - this._lastFrameTime;
        return this._lastFrameTime = rr, this._renderAccumulator += Sr, this._renderAccumulator < this._minFrameTime || (this._renderAccumulator -= this._minFrameTime, this._renderAccumulator > this._minFrameTime && (this._renderAccumulator = this._minFrameTime), !1)
      }
      _processFrame(rr) {
        if (this._frameHandler = 0, !this._contextWasLost && !this._isOverFrameTime(rr)) {
          let rr = !0;
          (this.Dv || !this.renderEvenInBackground && this._windowIsBackground) && (rr = !1), rr && (this.lB(), this.skipFrameRender || this._renderViews() || this._renderFrame(), this.Bx())
        }
      }
      _renderLoop(rr) {
        this._processFrame(rr), this._activeRenderLoops.length > 0 && 0 === this._frameHandler && this._queueNewFrameForRenderLoop()
      }
      _renderFrame() {
        for (let rr = 0; rr < this._activeRenderLoops.length; rr++) {
          (0, this._activeRenderLoops[rr])()
        }
      }
      _renderViews() {
        return !1
      }
      _queueNewFrame(rr, Sr) {
        return zr(rr, Sr)
      }
      _queueNewFrameForRenderLoop() {
        this.customAnimationFrameRequester ? (this.customAnimationFrameRequester.AU = this._queueNewFrame(this.customAnimationFrameRequester.renderFunction || this._boundRenderFunction, this.customAnimationFrameRequester), this._frameHandler = this.customAnimationFrameRequester.AU) : this._frameHandler = this._queueNewFrame(this._boundRenderFunction, this.getHostWindow())
      }
      runRenderLoop(rr) {
        -1 === this._activeRenderLoops.indexOf(rr) && (this._activeRenderLoops.push(rr), 1 === this._activeRenderLoops.length && 0 === this._frameHandler && this._queueNewFrameForRenderLoop())
      }
      getDepthBuffer() {
        return this._depthCullingState.depthTest
      }
      setDepthBuffer(rr) {
        this._depthCullingState.depthTest = rr
      }
      setZOffset(rr) {
        this._depthCullingState.zOffset = this.JZr ? -rr : rr
      }
      getZOffset() {
        const rr = this._depthCullingState.zOffset;
        return this.JZr ? -rr : rr
      }
      setZOffsetUnits(rr) {
        this._depthCullingState.zOffsetUnits = this.JZr ? -rr : rr
      }
      getZOffsetUnits() {
        const rr = this._depthCullingState.zOffsetUnits;
        return this.JZr ? -rr : rr
      }
      getHostWindow() {
        return (0, tr.m)() ? this._renderingCanvas && this._renderingCanvas.ownerDocument && this._renderingCanvas.ownerDocument.defaultView ? this._renderingCanvas.ownerDocument.defaultView : window : null
      }
      get compatibilityMode() {
        return this._compatibilityMode
      }
      set compatibilityMode(rr) {
        this._compatibilityMode = !0
      }
      _rebuildTextures() {
        for (const rr of this.scenes) rr._rebuildTextures();
        for (const rr of this._virtualScenes) rr._rebuildTextures()
      }
      _releaseRenderTargetWrapper(rr) {
        const Sr = this._renderTargetWrapperCache.indexOf(rr); - 1 !== Sr && this._renderTargetWrapperCache.splice(Sr, 1)
      }
      get currentViewport() {
        return this._cachedViewport
      }
      setViewport(rr, Sr, Qr) {
        const Zr = Sr || this.getRenderWidth(),
          Wr = Qr || this.getRenderHeight(),
          ar = rr.x || 0,
          jr = rr.y || 0;
        this._cachedViewport = rr, this._viewport(ar * Zr, jr * Wr, Zr * rr.width, Wr * rr.height)
      }
      createCanvasImage() {
        return document.createElement("img")
      }
      createCanvasPath2D(rr) {
        return new Path2D(rr)
      }
      get description() {
        let rr = this.name + this.version;
        return this._caps.parallelShaderCompile && (rr += " - Parallel shader compilation"), rr
      }
      _createTextureBase(rr, Sr, Qr, Zr) {
        let Wr = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3,
          Ir = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          fr = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
          Er = arguments.length > 7 ? arguments[7] : void 0,
          pr = arguments.length > 8 ? arguments[8] : void 0,
          xr = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null,
          mr = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : null,
          Nr = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : null,
          tr = arguments.length > 12 && void 0 !== arguments[12] ? arguments[12] : null,
          hr = arguments.length > 13 ? arguments[13] : void 0,
          zr = arguments.length > 14 ? arguments[14] : void 0,
          nr = arguments.length > 15 ? arguments[15] : void 0;
        const er = "data:" === (rr = rr || "").substring(0, 5),
          Kr = "blob:" === rr.substring(0, 5),
          yr = er && -1 !== rr.indexOf(";base64,"),
          Br = mr || new Ur.b(this, 1);
        Br !== mr && (Br.label = rr.substring(0, 60));
        const Tr = rr;
        !this._transformTextureUrl || yr || mr || xr || (rr = this._transformTextureUrl(rr)), Tr !== rr && (Br._originalUrl = Tr);
        const vr = rr.lastIndexOf(".");
        let Or = tr || (vr > -1 ? rr.substring(vr).toLowerCase() : "");
        Or.indexOf("?") > -1 && (Or = Or.split("?")[0]);
        const Lr = Yr.GetCompatibleTextureLoader(Or, hr);
        Zr && Zr.addPendingData(Br), Br.url = rr, Br.generateMipMaps = !Sr, Br.samplingMode = Wr, Br.invertY = Qr, Br._useSRGBBuffer = this._getUseSRGBBuffer(!!nr, Sr), this._doNotHandleContextLost || (Br._buffer = xr);
        let lr = null;
        Ir && !mr && (lr = Br.onLoadedObservable.add(Ir)), mr || this._internalTexturesCache.push(Br);
        const Xr = (Qr, mr) => {
          Zr && Zr.removePendingData(Br), rr === Tr ? (lr && Br.onLoadedObservable.remove(lr), ar.b.UseFallbackTexture && rr !== ar.b.FallbackTexture && this._createTextureBase(ar.b.FallbackTexture, Sr, Br.invertY, Zr, Wr, null, fr, Er, pr, xr, Br), Qr = (Qr || "Unknown error") + (ar.b.UseFallbackTexture ? " - Fallback texture was used" : ""), Br.onErrorObservable.notifyObservers({
            message: Qr,
            exception: mr
          }), fr && fr(Qr, mr)) : (jr.c.Warn(`Failed to load ${rr}, falling back to ${Tr}`), this._createTextureBase(Tr, Sr, Br.invertY, Zr, Wr, Ir, fr, Er, pr, xr, Br, Nr, tr, hr, zr, nr))
        };
        if (Lr) {
          const Sr = async rr => {
            (await Lr).loadData(rr, Br, ((rr, Sr, Qr, ar, jr, Ir) => {
              Ir ? Xr("TextureLoader failed to load data") : Er(Br, Or, Zr, {
                width: rr,
                height: Sr
              }, Br.invertY, !Qr, ar, (() => (jr(), !1)), Wr)
            }), zr)
          };
          if (xr) {
            const rr = async rr => {
              try {
                await Sr(rr)
              } catch (Qr) {
                Xr("Failed to parse texture data", Qr)
              }
            };
            xr instanceof ArrayBuffer ? rr(new Uint8Array(xr)) : ArrayBuffer.isView(xr) ? rr(xr) : fr && fr("Unable to load: only ArrayBuffer or ArrayBufferView is supported", null)
          } else this._loadFile(rr, (async rr => {
            try {
              await Sr(new Uint8Array(rr))
            } catch (Qr) {
              Xr("Failed to parse texture data", Qr)
            }
          }), void 0, Zr ? Zr.offlineProvider : void 0, !0, ((rr, Sr) => {
            Xr("Unable to load " + (rr && rr.responseURL, Sr))
          }))
        } else {
          const Qr = rr => {
            Kr && !this._doNotHandleContextLost && (Br._buffer = rr), Er(Br, Or, Zr, rr, Br.invertY, Sr, !1, pr, Wr)
          };
          !er || yr ? xr && ("string" === typeof xr.decoding || xr.close) ? Qr(xr) : Yr._FileToolsLoadImage(rr || "", Qr, Xr, Zr ? Zr.offlineProvider : null, hr, Br.invertY && this._features.needsInvertingBitmap ? {
            imageOrientation: "flipY"
          } : void 0, this) : "string" === typeof xr || xr instanceof ArrayBuffer || ArrayBuffer.isView(xr) || xr instanceof Blob ? Yr._FileToolsLoadImage(xr, Qr, Xr, Zr ? Zr.offlineProvider : null, hr, Br.invertY && this._features.needsInvertingBitmap ? {
            imageOrientation: "flipY"
          } : void 0, this) : xr && Qr(xr)
        }
        return Br
      }
      _rebuildBuffers() {
        for (const rr of this._uniformBuffers) rr._rebuildAfterContextLost()
      }
      get _shouldUseHighPrecisionShader() {
        return !(!this._caps.highPrecisionShaderSupported || !this._highPrecisionShadersAllowed)
      }
      getHostDocument() {
        return this._renderingCanvas && this._renderingCanvas.ownerDocument ? this._renderingCanvas.ownerDocument : (0, tr.f)() ? document : null
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
        for (const rr in this._boundTexturesCache) Object.prototype.hasOwnProperty.call(this._boundTexturesCache, rr) && (this._boundTexturesCache[rr] = null);
        this._currentTextureChannel = -1
      }
      get name() {
        return this._name
      }
      set name(rr) {
        this._name = rr
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
      setHardwareScalingLevel(rr) {
        this._hardwareScalingLevel = rr, this.resize()
      }
      getHardwareScalingLevel() {
        return this._hardwareScalingLevel
      }
      get doNotHandleContextLost() {
        return this._doNotHandleContextLost
      }
      set doNotHandleContextLost(rr) {
        this._doNotHandleContextLost = rr
      }
      get isStencilEnable() {
        return this._isStencilEnable
      }
      getCreationOptions() {
        return this._creationOptions
      }
      constructor(rr, Sr, Qr) {
        this._colorWrite = !0, this._colorWriteChanged = !0, this._depthCullingState = new Er, this._stencilStateComposer = new pr, this._stencilState = new xr, this._alphaState = new mr.d(!1), this._alphaMode = Array(8).fill(-1), this._alphaEquation = Array(8).fill(-1), this._activeRequests = [], this._badOS = !1, this._badDesktopOS = !1, this._compatibilityMode = !0, this._internalTexturesCache = new Array, this._currentRenderTarget = null, this._boundTexturesCache = {}, this._activeChannel = 0, this._currentTextureChannel = -1, this._viewportCached = {
          x: 0,
          y: 0,
          z: 0,
          w: 0
        }, this._isWebGPU = !1, this._enableGPUDebugMarkers = !1, this.onCanvasBlurObservable = new Zr.d, this.onCanvasFocusObservable = new Zr.d, this.onNewSceneAddedObservable = new Zr.d, this.onResizeObservable = new Zr.d, this.onCanvasPointerOutObservable = new Zr.d, this.onEffectErrorObservable = new Zr.d, this.disablePerformanceMonitorInBackground = !1, this.disableVertexArrayObjects = !1, this._frameId = 0, this.hostInformation = {
          isMobile: !1
        }, this.isFullscreen = !1, this.enableOfflineSupport = !1, this.disableManifestCheck = !1, this.disableContextMenu = !0, this.currentRenderPassId = 0, this.isPointerLock = !1, this.postProcesses = [], this.canvasTabIndex = 1, this._contextWasLost = !1, this._useReverseDepthBuffer = !1, this.isNDCHalfZRange = !1, this.hasOriginBottomLeft = !0, this._renderTargetWrapperCache = new Array, this._compiledEffects = {}, this._isDisposed = !1, this.scenes = [], this._virtualScenes = new Array, this.onBeforeTextureInitObservable = new Zr.d, this.renderEvenInBackground = !0, this.preventCacheWipeBetweenFrames = !1, this._frameHandler = 0, this._activeRenderLoops = new Array, this.customAnimationFrameRequester = null, this._windowIsBackground = !1, this._boundRenderFunction = rr => this._renderLoop(rr), this._lastFrameTime = 0, this._renderAccumulator = 0, this.skipFrameRender = !1, this.onBeforeShaderCompilationObservable = new Zr.d, this.onAfterShaderCompilationObservable = new Zr.d, this.onBeginFrameObservable = new Zr.d, this.onEndFrameObservable = new Zr.d, this._transformTextureUrl = null, this._uniformBuffers = new Array, this._storageBuffers = new Array, this._highPrecisionShadersAllowed = !0, this.onContextLostObservable = new Zr.d, this.CU = new Zr.d, this._name = "", this.premultipliedAlpha = !0, this.adaptToDeviceRatio = !1, this._lastDevicePixelRatio = 1, this._doNotHandleContextLost = !1, this.cullBackFaces = null, this._renderPassNames = ["main"], this._onReleaseRenderPassObservable = null, this._fps = 60, this._deltaTime = 0, this._deterministicLockstep = !1, this._lockstepMaxSteps = 4, this._timeStep = 1 / 60, this.lC = new Zr.d, this.onReleaseEffectsObservable = new Zr.d, ar.b.Instances.push(this), this.startTime = fr.c.Now, this._stencilStateComposer.stencilGlobal = this._stencilState, Ir.d.SetMatrixPrecision(!!Sr.useLargeWorldRendering || !!Sr.useHighPrecisionMatrix), (0, tr.j)() && navigator.userAgent && (this._badOS = /iPad/i.test(navigator.userAgent) || /iPhone/i.test(navigator.userAgent), this._badDesktopOS = /^((?!chrome|android).)*safari/i.test(navigator.userAgent)), Sr.antialias = rr ?? Sr.antialias, Sr.deterministicLockstep = Sr.deterministicLockstep ?? !1, Sr.lockstepMaxSteps = Sr.lockstepMaxSteps ?? 4, Sr.timeStep = Sr.timeStep ?? 1 / 60, Sr.stencil = Sr.stencil ?? !0, this._audioContext = Sr.audioEngineOptions?.audioContext ?? null, this._audioDestination = Sr.audioEngineOptions?.audioDestination ?? null, this.premultipliedAlpha = Sr.premultipliedAlpha ?? !0, this._doNotHandleContextLost = !!Sr.doNotHandleContextLost, this._isStencilEnable = !!Sr.stencil, this.useExactSrgbConversions = Sr.useExactSrgbConversions ?? !1, this.canvasTabIndex = Sr.canvasTabIndex ?? this.canvasTabIndex;
        const Wr = (0, tr.m)() && window.devicePixelRatio || 1,
          jr = Sr.limitDeviceRatio || Wr;
        Qr = Qr || Sr.adaptToDeviceRatio || !1, this.adaptToDeviceRatio = Qr, this._hardwareScalingLevel = Qr ? 1 / Math.min(jr, Wr) : 1, this._lastDevicePixelRatio = Wr, this._creationOptions = Sr
      }
      resize() {
        let rr, Sr, Qr = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this.adaptToDeviceRatio) {
          const rr = (0, tr.m)() && window.devicePixelRatio || 1,
            Sr = this._lastDevicePixelRatio / rr;
          this._lastDevicePixelRatio = rr, this._hardwareScalingLevel *= Sr
        }
        if ((0, tr.m)() && (0, tr.f)())
          if (this._renderingCanvas) {
            const Qr = this._renderingCanvas.getBoundingClientRect?.();
            rr = this._renderingCanvas.clientWidth || Qr?.width || this._renderingCanvas.width * this._hardwareScalingLevel || 100, Sr = this._renderingCanvas.clientHeight || Qr?.height || this._renderingCanvas.height * this._hardwareScalingLevel || 100
          } else rr = window.innerWidth, Sr = window.innerHeight;
        else rr = this._renderingCanvas ? this._renderingCanvas.width : 100, Sr = this._renderingCanvas ? this._renderingCanvas.height : 100;
        this.setSize(rr / this._hardwareScalingLevel, Sr / this._hardwareScalingLevel, Qr)
      }
      setSize(rr, Sr) {
        let Qr = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (!this._renderingCanvas) return !1;
        if (rr |= 0, Sr |= 0, !Qr && this._renderingCanvas.width === rr && this._renderingCanvas.height === Sr) return !1;
        if (this._renderingCanvas.width = rr, this._renderingCanvas.height = Sr, this.scenes) {
          for (let rr = 0; rr < this.scenes.length; rr++) {
            const Sr = this.scenes[rr];
            for (let rr = 0; rr < Sr.cameras.length; rr++) {
              Sr.cameras[rr]._currentRenderId = 0
            }
          }
          this.onResizeObservable.hasObservers() && this.onResizeObservable.notifyObservers(this)
        }
        return !0
      }
      createRawTexture(rr, Sr, Qr, Zr, Wr, ar, jr, Ir, fr, Er, pr, xr) {
        throw (0, Nr.l)("engine.rawTexture")
      }
      createRawCubeTexture(rr, Sr, Qr, Zr, Wr, ar, jr, Ir) {
        throw (0, Nr.l)("engine.rawTexture")
      }
      createRawTexture3D(rr, Sr, Qr, Zr, Wr, ar, jr, Ir, fr, Er, pr) {
        throw (0, Nr.l)("engine.rawTexture")
      }
      createRawTexture2DArray(rr, Sr, Qr, Zr, Wr, ar, jr, Ir, fr, Er, pr, xr) {
        throw (0, Nr.l)("engine.rawTexture")
      }
      _sharedInit(rr) {
        this._renderingCanvas = rr
      }
      _setupMobileChecks() {
        navigator && navigator.userAgent && (this._checkForMobile = () => {
          const rr = navigator.userAgent;
          this.hostInformation.isMobile = -1 !== rr.indexOf("Mobile") || -1 !== rr.indexOf("Mac") && (0, tr.f)() && "ontouchend" in document
        }, this._checkForMobile(), (0, tr.m)() && window.addEventListener("resize", this._checkForMobile))
      }
      createVideoElement(rr) {
        return document.createElement("video")
      }
      _reportDrawCall() {
        let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        this._drawCalls?.addCount(rr, !1)
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
      _createImageBitmapFromSource(rr, Sr) {
        throw new Error("createImageBitmapFromSource is not implemented")
      }
      createImageBitmap(rr, Sr) {
        return createImageBitmap(rr, Sr)
      }
      resizeImageBitmap(rr, Sr, Qr) {
        throw new Error("resizeImageBitmap is not implemented")
      }
      getFontOffset(rr) {
        throw new Error("getFontOffset is not implemented")
      }
      static _CreateCanvas(rr, Sr) {
        if ("undefined" === typeof document) return new OffscreenCanvas(rr, Sr);
        const Qr = document.createElement("canvas");
        return Qr.width = rr, Qr.height = Sr, Qr
      }
      createCanvas(rr, Sr) {
        return Yr._CreateCanvas(rr, Sr)
      }
      static _FileToolsLoadImage(rr, Sr, Qr, Zr, Wr, ar, jr) {
        if (!hr.b.loadImage) throw (0, Nr.l)("FileTools");
        return hr.b.loadImage(rr, Sr, Qr, Zr, Wr, ar, jr)
      }
      _loadFile(rr, Sr, Qr, Zr, Wr, ar) {
        const jr = (0, hr.k)(rr, Sr, Qr, Zr, Wr, ar);
        return this._activeRequests.push(jr), jr.onCompleteObservable.add((() => {
          const rr = this._activeRequests.indexOf(jr); - 1 !== rr && this._activeRequests.splice(rr, 1)
        })), jr
      }
      static _FileToolsLoadFile(rr, Sr, Qr, Zr, Wr, ar) {
        if (hr.b.loadFile) return hr.b.loadFile(rr, Sr, Qr, Zr, Wr, ar);
        throw (0, Nr.l)("FileTools")
      }
      dispose() {
        for (this.releaseEffects(), this._isDisposed = !0, this.stopRenderLoop(), this._emptyTexture && (this._releaseTexture(this._emptyTexture), this._emptyTexture = null), this._emptyCubeTexture && (this._releaseTexture(this._emptyCubeTexture), this._emptyCubeTexture = null), this._renderingCanvas = null, this.onBeforeTextureInitObservable && this.onBeforeTextureInitObservable.clear(); this.postProcesses.length;) this.postProcesses[0].dispose();
        for (; this.scenes.length;) this.scenes[0].dispose();
        for (; this._virtualScenes.length;) this._virtualScenes[0].dispose();
        this.releaseComputeEffects?.(), Wr.b.ResetCache();
        for (const Sr of this._activeRequests) Sr.abort();
        this._boundRenderFunction = null, this.lC.notifyObservers(this), this.lC.clear(), this.onResizeObservable.clear(), this.onCanvasBlurObservable.clear(), this.onCanvasFocusObservable.clear(), this.onCanvasPointerOutObservable.clear(), this.onNewSceneAddedObservable.clear(), this.onEffectErrorObservable.clear(), (0, tr.m)() && window.removeEventListener("resize", this._checkForMobile);
        const rr = ar.b.Instances.indexOf(this);
        rr >= 0 && ar.b.Instances.splice(rr, 1), ar.b.Instances.length || (ar.b.OnEnginesDisposedObservable.notifyObservers(this), ar.b.OnEnginesDisposedObservable.clear()), this.onBeginFrameObservable.clear(), this.onEndFrameObservable.clear(), this._onReleaseRenderPassObservable?.clear(), this._onReleaseRenderPassObservable = null
      }
      static DefaultLoadingScreenFactory(rr) {
        throw (0, Nr.l)("LoadingScreen")
      }
      static MarkAllMaterialsAsDirty(rr, Sr) {
        for (let Qr = 0; Qr < ar.b.Instances.length; Qr++) {
          const Zr = ar.b.Instances[Qr];
          for (let Qr = 0; Qr < Zr.scenes.length; Qr++) Zr.scenes[Qr].markAllMaterialsAsDirty(rr, Sr)
        }
      }
      static GetCompatibleTextureLoader(rr, Sr) {
        return null
      }
    }
    Yr._RenderPassIdCounter = 0, Yr._RescalePostProcessFactory = null, Yr.CollisionsEpsilon = .001, Yr.QueueNewFrame = zr
  },
  41743: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      e: () => Zr
    });
    class Zr {
      static GetShadersRepository() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? Zr.ShadersRepository : Zr.ShadersRepositoryWGSL
      }
      static GetShadersStore() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? Zr.ShadersStore : Zr.ShadersStoreWGSL
      }
      static GetIncludesShadersStore() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? Zr.IncludesShadersStore : Zr.IncludesShadersStoreWGSL
      }
    }
    Zr.ShadersRepository = "src/Shaders/", Zr.ShadersStore = {}, Zr.IncludesShadersStore = {}, Zr.ShadersRepositoryWGSL = "src/ShadersWGSL/", Zr.ShadersStoreWGSL = {}, Zr.IncludesShadersStoreWGSL = {}
  },
  41755: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => mr,
      h: () => nr,
      l: () => Ur,
      o: () => Nr,
      r: () => tr,
      u: () => Yr,
      v: () => xr,
      w: () => Er,
      y: () => pr,
      C: () => fr,
      F: () => Ir
    });
    class Zr {
      constructor() {
        this._valueCache = {}, this._matrixValueCache = {}, this.vertexCompilationError = null, this.fragmentCompilationError = null, this.programLinkError = null, this.programValidationError = null, this._isDisposed = !1
      }
      get isAsync() {
        return this.isParallelCompiled
      }
      get isReady() {
        return !!this.program && (!this.isParallelCompiled || this.engine._isRenderingStateCompiled(this))
      }
      _handlesSpectorRebuildCallback(rr) {
        rr && this.program && rr(this.program)
      }
      setEngine(rr) {
        this.engine = rr
      }
      _fillEffectInformation(rr, Sr, Qr, Zr, Wr, ar, jr, Ir) {
        const fr = this.engine;
        if (fr.supportsUniformBuffers)
          for (const pr in Sr) rr.bindUniformBlock(pr, Sr[pr]);
        let Er;
        for (this.engine.getUniforms(this, Qr).forEach(((rr, Sr) => {
            Zr[Qr[Sr]] = rr
          })), this._uniforms = Zr, Er = 0; Er < Wr.length; Er++) {
          null == rr.getUniform(Wr[Er]) && (Wr.splice(Er, 1), Er--)
        }
        Wr.forEach(((rr, Sr) => {
          ar[rr] = Sr
        }));
        for (const pr of fr.getAttributes(this, jr)) Ir.push(pr)
      }
      dispose() {
        this._uniforms = {}, this._isDisposed = !0
      }
      _cacheMatrix(rr, Sr) {
        const Qr = this._valueCache[rr],
          Zr = Sr.updateFlag;
        if (void 0 !== Qr && Qr === Zr) return !1;
        const Wr = Sr.OWr();
        let ar = this._matrixValueCache[rr];
        if (void 0 !== Qr && null !== Qr && void 0 !== ar) {
          let Sr = !0;
          for (let rr = 15; rr >= 0; rr--)
            if (ar[rr] !== Wr[rr]) {
              Sr = !1;
              break
            } if (Sr) return this._valueCache[rr] = Zr, !1
        }
        return void 0 === ar && (ar = this._matrixValueCache[rr] = new Float32Array(16)), ar.set(Wr), this._valueCache[rr] = Zr, !0
      }
      _cacheFloat2(rr, Sr, Qr) {
        let Zr = this._valueCache[rr];
        if (!Zr || 2 !== Zr.length) return Zr = [Sr, Qr], this._valueCache[rr] = Zr, !0;
        let Wr = !1;
        return Zr[0] !== Sr && (Zr[0] = Sr, Wr = !0), Zr[1] !== Qr && (Zr[1] = Qr, Wr = !0), Wr
      }
      _cacheFloat3(rr, Sr, Qr, Zr) {
        let Wr = this._valueCache[rr];
        if (!Wr || 3 !== Wr.length) return Wr = [Sr, Qr, Zr], this._valueCache[rr] = Wr, !0;
        let ar = !1;
        return Wr[0] !== Sr && (Wr[0] = Sr, ar = !0), Wr[1] !== Qr && (Wr[1] = Qr, ar = !0), Wr[2] !== Zr && (Wr[2] = Zr, ar = !0), ar
      }
      _cacheFloat4(rr, Sr, Qr, Zr, Wr) {
        let ar = this._valueCache[rr];
        if (!ar || 4 !== ar.length) return ar = [Sr, Qr, Zr, Wr], this._valueCache[rr] = ar, !0;
        let jr = !1;
        return ar[0] !== Sr && (ar[0] = Sr, jr = !0), ar[1] !== Qr && (ar[1] = Qr, jr = !0), ar[2] !== Zr && (ar[2] = Zr, jr = !0), ar[3] !== Wr && (ar[3] = Wr, jr = !0), jr
      }
      setInt(rr, Sr) {
        const Qr = this._valueCache[rr];
        void 0 !== Qr && Qr === Sr || this.engine.setInt(this._uniforms[rr], Sr) && (this._valueCache[rr] = Sr)
      }
      setInt2(rr, Sr, Qr) {
        this._cacheFloat2(rr, Sr, Qr) && (this.engine.setInt2(this._uniforms[rr], Sr, Qr) || (this._valueCache[rr] = null))
      }
      setInt3(rr, Sr, Qr, Zr) {
        this._cacheFloat3(rr, Sr, Qr, Zr) && (this.engine.setInt3(this._uniforms[rr], Sr, Qr, Zr) || (this._valueCache[rr] = null))
      }
      setInt4(rr, Sr, Qr, Zr, Wr) {
        this._cacheFloat4(rr, Sr, Qr, Zr, Wr) && (this.engine.setInt4(this._uniforms[rr], Sr, Qr, Zr, Wr) || (this._valueCache[rr] = null))
      }
      setIntArray(rr, Sr) {
        this._valueCache[rr] = null, this.engine.setIntArray(this._uniforms[rr], Sr)
      }
      setIntArray2(rr, Sr) {
        this._valueCache[rr] = null, this.engine.setIntArray2(this._uniforms[rr], Sr)
      }
      setIntArray3(rr, Sr) {
        this._valueCache[rr] = null, this.engine.setIntArray3(this._uniforms[rr], Sr)
      }
      setIntArray4(rr, Sr) {
        this._valueCache[rr] = null, this.engine.setIntArray4(this._uniforms[rr], Sr)
      }
      setUInt(rr, Sr) {
        const Qr = this._valueCache[rr];
        void 0 !== Qr && Qr === Sr || this.engine.setUInt(this._uniforms[rr], Sr) && (this._valueCache[rr] = Sr)
      }
      setUInt2(rr, Sr, Qr) {
        this._cacheFloat2(rr, Sr, Qr) && (this.engine.setUInt2(this._uniforms[rr], Sr, Qr) || (this._valueCache[rr] = null))
      }
      setUInt3(rr, Sr, Qr, Zr) {
        this._cacheFloat3(rr, Sr, Qr, Zr) && (this.engine.setUInt3(this._uniforms[rr], Sr, Qr, Zr) || (this._valueCache[rr] = null))
      }
      setUInt4(rr, Sr, Qr, Zr, Wr) {
        this._cacheFloat4(rr, Sr, Qr, Zr, Wr) && (this.engine.setUInt4(this._uniforms[rr], Sr, Qr, Zr, Wr) || (this._valueCache[rr] = null))
      }
      setUIntArray(rr, Sr) {
        this._valueCache[rr] = null, this.engine.setUIntArray(this._uniforms[rr], Sr)
      }
      setUIntArray2(rr, Sr) {
        this._valueCache[rr] = null, this.engine.setUIntArray2(this._uniforms[rr], Sr)
      }
      setUIntArray3(rr, Sr) {
        this._valueCache[rr] = null, this.engine.setUIntArray3(this._uniforms[rr], Sr)
      }
      setUIntArray4(rr, Sr) {
        this._valueCache[rr] = null, this.engine.setUIntArray4(this._uniforms[rr], Sr)
      }
      setArray(rr, Sr) {
        this._valueCache[rr] = null, this.engine.setArray(this._uniforms[rr], Sr)
      }
      setArray2(rr, Sr) {
        this._valueCache[rr] = null, this.engine.setArray2(this._uniforms[rr], Sr)
      }
      setArray3(rr, Sr) {
        this._valueCache[rr] = null, this.engine.setArray3(this._uniforms[rr], Sr)
      }
      setArray4(rr, Sr) {
        this._valueCache[rr] = null, this.engine.setArray4(this._uniforms[rr], Sr)
      }
      setMatrices(rr, Sr) {
        Sr && (this._valueCache[rr] = null, this.engine.setMatrices(this._uniforms[rr], Sr))
      }
      setMatrix(rr, Sr) {
        this._cacheMatrix(rr, Sr) && (this.engine.setMatrices(this._uniforms[rr], Sr.OWr()) || (this._valueCache[rr] = null))
      }
      setMatrix3x3(rr, Sr) {
        this._valueCache[rr] = null, this.engine.setMatrix3x3(this._uniforms[rr], Sr)
      }
      setMatrix2x2(rr, Sr) {
        this._valueCache[rr] = null, this.engine.setMatrix2x2(this._uniforms[rr], Sr)
      }
      setFloat(rr, Sr) {
        const Qr = this._valueCache[rr];
        void 0 !== Qr && Qr === Sr || this.engine.setFloat(this._uniforms[rr], Sr) && (this._valueCache[rr] = Sr)
      }
      setVector2(rr, Sr) {
        this._cacheFloat2(rr, Sr.x, Sr.y) && (this.engine.setFloat2(this._uniforms[rr], Sr.x, Sr.y) || (this._valueCache[rr] = null))
      }
      setFloat2(rr, Sr, Qr) {
        this._cacheFloat2(rr, Sr, Qr) && (this.engine.setFloat2(this._uniforms[rr], Sr, Qr) || (this._valueCache[rr] = null))
      }
      setVector3(rr, Sr) {
        this._cacheFloat3(rr, Sr.x, Sr.y, Sr.z) && (this.engine.setFloat3(this._uniforms[rr], Sr.x, Sr.y, Sr.z) || (this._valueCache[rr] = null))
      }
      setFloat3(rr, Sr, Qr, Zr) {
        this._cacheFloat3(rr, Sr, Qr, Zr) && (this.engine.setFloat3(this._uniforms[rr], Sr, Qr, Zr) || (this._valueCache[rr] = null))
      }
      setVector4(rr, Sr) {
        this._cacheFloat4(rr, Sr.x, Sr.y, Sr.z, Sr.w) && (this.engine.setFloat4(this._uniforms[rr], Sr.x, Sr.y, Sr.z, Sr.w) || (this._valueCache[rr] = null))
      }
      setQuaternion(rr, Sr) {
        this._cacheFloat4(rr, Sr.x, Sr.y, Sr.z, Sr.w) && (this.engine.setFloat4(this._uniforms[rr], Sr.x, Sr.y, Sr.z, Sr.w) || (this._valueCache[rr] = null))
      }
      setFloat4(rr, Sr, Qr, Zr, Wr) {
        this._cacheFloat4(rr, Sr, Qr, Zr, Wr) && (this.engine.setFloat4(this._uniforms[rr], Sr, Qr, Zr, Wr) || (this._valueCache[rr] = null))
      }
      setColor3(rr, Sr) {
        this._cacheFloat3(rr, Sr.r, Sr.g, Sr.b) && (this.engine.setFloat3(this._uniforms[rr], Sr.r, Sr.g, Sr.b) || (this._valueCache[rr] = null))
      }
      setColor4(rr, Sr, Qr) {
        this._cacheFloat4(rr, Sr.r, Sr.g, Sr.b, Qr) && (this.engine.setFloat4(this._uniforms[rr], Sr.r, Sr.g, Sr.b, Qr) || (this._valueCache[rr] = null))
      }
      setDirectColor4(rr, Sr) {
        this._cacheFloat4(rr, Sr.r, Sr.g, Sr.b, Sr.a) && (this.engine.setFloat4(this._uniforms[rr], Sr.r, Sr.g, Sr.b, Sr.a) || (this._valueCache[rr] = null))
      }
      _getVertexShaderCode() {
        return this.vertexShader ? this.engine._getShaderSource(this.vertexShader) : null
      }
      _getFragmentShaderCode() {
        return this.fragmentShader ? this.engine._getShaderSource(this.fragmentShader) : null
      }
    }
    var Wr = Qr(41764);
    const ar = new WeakMap,
      jr = {
        _webGLVersion: 2,
        cachedPipelines: {}
      };

    function Ir(rr) {
      let Sr = ar.get(rr);
      if (!Sr) {
        if (!rr) return jr;
        Sr = {
          _webGLVersion: rr.TEXTURE_BINDING_3D ? 2 : 1,
          _context: rr,
          parallelShaderCompile: rr.getExtension("KHR_parallel_shader_compile") || void 0,
          cachedPipelines: {}
        }, ar.set(rr, Sr)
      }
      return Sr
    }

    function fr(rr) {
      ar.delete(rr)
    }

    function Er(rr, Sr, Qr, Zr, Wr, ar) {
      const jr = Ir(Zr);
      ar || (ar = jr._createShaderProgramInjection ?? mr);
      return ar(rr, zr(Sr, "vertex", Zr, jr._contextWasLost), zr(Qr, "fragment", Zr, jr._contextWasLost), Zr, Wr, jr.validateShaderPrograms)
    }

    function pr(rr, Sr, Qr, Zr, Wr) {
      let ar = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        jr = arguments.length > 6 ? arguments[6] : void 0;
      const fr = Ir(Wr);
      jr || (jr = fr._createShaderProgramInjection ?? mr);
      const Er = fr._webGLVersion > 1 ? "#version 300 es\n#define WEBGL2 \n" : "";
      return jr(rr, hr(Sr, "vertex", Zr, Er, Wr, fr._contextWasLost), hr(Qr, "fragment", Zr, Er, Wr, fr._contextWasLost), Wr, ar, fr.validateShaderPrograms)
    }

    function xr(rr, Sr) {
      const Qr = new Zr,
        Wr = Ir(rr);
      return Wr.parallelShaderCompile && !Wr.disableParallelShaderCompile && (Qr.isParallelCompiled = !0), Qr.context = Wr._context, Qr
    }

    function mr(rr, Sr, Qr, Zr) {
      let Wr = arguments.length > 5 ? arguments[5] : void 0;
      const ar = Zr.createProgram();
      if (rr.program = ar, !ar) throw new Error("Unable to create program");
      return Zr.attachShader(ar, Sr), Zr.attachShader(ar, Qr), Zr.linkProgram(ar), rr.context = Zr, rr.vertexShader = Sr, rr.fragmentShader = Qr, rr.isParallelCompiled || Ur(rr, Zr, Wr), ar
    }

    function Nr(rr, Sr, Qr) {
      const Zr = rr;
      if (Zr._isDisposed) return !1;
      const Wr = Ir(Sr);
      return !!(Wr && Wr.parallelShaderCompile && Wr.parallelShaderCompile.COMPLETION_STATUS_KHR && Zr.program && Sr.getProgramParameter(Zr.program, Wr.parallelShaderCompile.COMPLETION_STATUS_KHR)) && (Ur(Zr, Sr, Qr), !0)
    }

    function Ur(rr, Sr, Qr) {
      const Zr = rr.context,
        Wr = rr.vertexShader,
        ar = rr.fragmentShader,
        jr = rr.program;
      if (!Zr.getProgramParameter(jr, Zr.LINK_STATUS)) {
        if (!Sr.getShaderParameter(Wr, Sr.COMPILE_STATUS)) {
          const Qr = Sr.getShaderInfoLog(Wr);
          if (Qr) throw rr.vertexCompilationError = Qr, new Error("VERTEX SHADER " + Qr)
        }
        if (!Sr.getShaderParameter(ar, Sr.COMPILE_STATUS)) {
          const Qr = Sr.getShaderInfoLog(ar);
          if (Qr) throw rr.fragmentCompilationError = Qr, new Error("FRAGMENT SHADER " + Qr)
        }
        const Qr = Zr.getProgramInfoLog(jr);
        if (Qr) throw rr.programLinkError = Qr, new Error(Qr)
      }
      if (Qr) {
        Zr.validateProgram(jr);
        if (!Zr.getProgramParameter(jr, Zr.VALIDATE_STATUS)) {
          const Sr = Zr.getProgramInfoLog(jr);
          if (Sr) throw rr.programValidationError = Sr, new Error(Sr)
        }
      }
      Zr.deleteShader(Wr), Zr.deleteShader(ar), rr.vertexShader = void 0, rr.fragmentShader = void 0, rr.onCompiled && (rr.onCompiled(), rr.onCompiled = void 0)
    }

    function tr(rr, Sr, Qr, Zr, Wr, ar, jr, fr, xr) {
      let mr = arguments.length > 10 ? arguments[10] : void 0,
        Nr = arguments.length > 11 ? arguments[11] : void 0,
        Ur = arguments.length > 12 ? arguments[12] : void 0;
      const tr = Ir(rr.context);
      Nr || (Nr = tr.createRawShaderProgramInjection ?? Er), Ur || (Ur = tr.createShaderProgramInjection ?? pr);
      const hr = rr;
      hr.program = Zr ? Nr(hr, Sr, Qr, hr.context, xr) : Ur(hr, Sr, Qr, fr, hr.context, xr), hr.program.__SPECTOR_rebuildProgram = jr, mr()
    }

    function hr(rr, Sr, Qr, Zr, ar, jr) {
      return zr((0, Wr.f)(rr, Qr, Zr), Sr, ar, jr)
    }

    function zr(rr, Sr, Qr, Zr) {
      const Wr = Qr.createShader("vertex" === Sr ? Qr.VERTEX_SHADER : Qr.FRAGMENT_SHADER);
      if (!Wr) {
        let rr, Wr = Qr.NO_ERROR;
        for (;
          (rr = Qr.getError()) !== Qr.NO_ERROR;) Wr = rr;
        throw new Error(`Something went wrong while creating a gl ${Sr} shader object. gl error=${Wr}, gl isContextLost=${Qr.isContextLost()}, _contextWasLost=${Zr}`)
      }
      return Qr.shaderSource(Wr, rr), Qr.compileShader(Wr), Wr
    }

    function Yr(rr, Sr) {
      Sr.useProgram(rr)
    }

    function nr(rr, Sr) {
      const Qr = rr;
      if (!Qr.isParallelCompiled) return void Sr(rr);
      const Zr = Qr.onCompiled;
      Qr.onCompiled = () => {
        Zr?.(), Sr(rr)
      }
    }
  },
  41737: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      ThinEngine: () => Kr
    });
    var Zr = Qr(41741),
      Wr = Qr(41755),
      ar = Qr(41784),
      jr = Qr(41796),
      Ir = Qr(40246),
      fr = Qr(41749);
    class Er {
      constructor() {
        this.shaderLanguage = 0
      }
      postProcessor(rr, Sr, Qr, Zr, Wr) {
        if (Wr.drawBuffersExtensionDisabled) {
          const Sr = /#extension.+GL_EXT_draw_buffers.+(enable|require)/g;
          rr = rr.replace(Sr, "")
        }
        return rr
      }
    }
    const pr = /(flat\s)?\s*varying\s*.*/;
    class xr {
      constructor() {
        this.shaderLanguage = 0
      }
      attributeProcessor(rr) {
        return rr.replace("attribute", "in")
      }
      varyingCheck(rr, Sr) {
        return pr.test(rr)
      }
      varyingProcessor(rr, Sr) {
        return rr.replace("varying", Sr ? "in" : "out")
      }
      postProcessor(rr, Sr, Qr) {
        const Zr = -1 !== rr.search(/#extension.+GL_EXT_draw_buffers.+require/);
        if (rr = (rr = rr.replace(/#extension.+(GL_OVR_multiview2|GL_OES_standard_derivatives|GL_EXT_shader_texture_lod|GL_EXT_frag_depth|GL_EXT_draw_buffers).+(enable|require)/g, "")).replace(/texture2D\s*\(/g, "texture("), Qr) {
          const Qr = -1 !== rr.search(/layout *\(location *= *0\) *out/g),
            Wr = -1 !== Sr.indexOf("#define DUAL_SOURCE_BLENDING"),
            ar = Wr ? "layout(location = 0, index = 0) out vec4 glFragColor;\nlayout(location = 0, index = 1) out vec4 glFragColor2;\n" : "layout(location = 0) out vec4 glFragColor;\n";
          Wr && (rr = "#extension GL_EXT_blend_func_extended : require\n" + rr), rr = (rr = (rr = (rr = (rr = (rr = (rr = rr.replace(/texture2DLodEXT\s*\(/g, "textureLod(")).replace(/textureCubeLodEXT\s*\(/g, "textureLod(")).replace(/textureCube\s*\(/g, "texture(")).replace(/gl_FragDepthEXT/g, "gl_FragDepth")).replace(/gl_FragColor/g, "glFragColor")).replace(/gl_FragData/g, "glFragData")).replace(/void\s+?main\s*\(/g, (Zr || Qr ? "" : ar) + "void main(")
        } else {
          Sr.indexOf("#define VERTEXOUTPUT_INVARIANT") >= 0 && (rr = "invariant gl_Position;\n" + rr);
          if (-1 !== Sr.indexOf("#define MULTIVIEW")) return "#extension GL_OVR_multiview2 : require\nlayout (num_views = 2) in;\n" + rr
        }
        return rr
      }
    }
    var mr = Qr(41803),
      Nr = Qr(41818),
      Ur = Qr(41820),
      tr = Qr(41731),
      hr = Qr(41764),
      zr = Qr(41746),
      Yr = Qr(41827),
      nr = Qr(41792);
    class er {}
    class Kr extends ar.e {
      get name() {
        return this._name
      }
      set name(rr) {
        this._name = rr
      }
      get version() {
        return this._webGLVersion
      }
      static get ShadersRepository() {
        return Zr.b.ShadersRepository
      }
      static set ShadersRepository(rr) {
        Zr.b.ShadersRepository = rr
      }
      get supportsUniformBuffers() {
        return this.tt > 1 && !this.disableUniformBuffers
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
      constructor(rr, Sr, Qr, Zr) {
        if (Qr = Qr || {}, super(Sr ?? Qr.antialias, Qr, Zr), this._name = "WebGL", this.forcePOTTextures = !1, this.validateShaderPrograms = !1, this.disableUniformBuffers = !1, this._webGLVersion = 1, this._integerMRTAttachmentsMask = 0, this._vertexAttribArraysEnabled = [], this._uintIndicesCurrentlySet = !1, this._currentBoundBuffer = new Array, this._currentFramebuffer = null, this._dummyFramebuffer = null, this._currentBufferPointers = new Array, this._currentInstanceLocations = new Array, this._currentInstanceBuffers = new Array, this._vaoRecordInProgress = !1, this._mustWipeVertexAttributes = !1, this._nextFreeTextureSlots = new Array, this._maxSimultaneousTextures = 0, this._maxMSAASamplesOverride = null, this._unpackFlipYCached = null, this.enableUnpackFlipYCached = !0, this._boundUniforms = {}, !rr) return;
        let ar;
        if (rr.getContext) {
          if (ar = rr, void 0 === Qr.preserveDrawingBuffer && (Qr.preserveDrawingBuffer = !1), void 0 === Qr.xrCompatible && (Qr.xrCompatible = !1), navigator && navigator.userAgent) {
            this._setupMobileChecks();
            const rr = navigator.userAgent;
            for (const Sr of Kr.ExceptionList) {
              const Zr = Sr.key,
                Wr = Sr.targets;
              if (new RegExp(Zr).test(rr)) {
                if (Sr.capture && Sr.captureConstraint) {
                  const Qr = Sr.capture,
                    Zr = Sr.captureConstraint,
                    Wr = new RegExp(Qr).exec(rr);
                  if (Wr && Wr.length > 0) {
                    if (parseInt(Wr[Wr.length - 1]) >= Zr) continue
                  }
                }
                for (const rr of Wr) switch (rr) {
                  case "uniformBuffer":
                    this.disableUniformBuffers = !0;
                    break;
                  case "vao":
                    this.disableVertexArrayObjects = !0;
                    break;
                  case "antialias":
                    Qr.antialias = !1;
                    break;
                  case "maxMSAASamples":
                    this._maxMSAASamplesOverride = 1
                }
              }
            }
          }
          if (this._doNotHandleContextLost ? this._onContextLost = () => {
              (0, Wr.C)(this._gl)
            } : (this._onContextLost = rr => {
              rr.preventDefault(), this._contextWasLost = !0, (0, Wr.C)(this._gl), Ir.c.Warn("WebGL context lost."), this.onContextLostObservable.notifyObservers(this)
            }, this._onContextRestored = () => {
              this._restoreEngineAfterContextLost((() => this._initGLContext()))
            }, ar.addEventListener("webglcontextrestored", this._onContextRestored, !1), Qr.powerPreference = Qr.powerPreference || "high-performance"), ar.addEventListener("webglcontextlost", this._onContextLost, !1), this._badDesktopOS && (Qr.xrCompatible = !1), !Qr.disableWebGL2Support) try {
            this._gl = ar.getContext("webgl2", Qr) || ar.getContext("experimental-webgl2", Qr), this._gl && (this._webGLVersion = 2, this._shaderPlatformName = "WEBGL2", this._gl.deleteQuery || (this._webGLVersion = 1, this._shaderPlatformName = "WEBGL1"))
          } catch (pr) {}
          if (!this._gl) {
            if (!ar) throw new Error("The provided canvas is null or undefined.");
            try {
              this._gl = ar.getContext("webgl", Qr) || ar.getContext("experimental-webgl", Qr)
            } catch (pr) {
              throw new Error("WebGL not supported", {
                cause: pr
              })
            }
          }
          if (!this._gl) throw new Error("WebGL not supported")
        } else {
          this._gl = rr, ar = this._gl.canvas, this._gl.renderbufferStorageMultisample ? (this._webGLVersion = 2, this._shaderPlatformName = "WEBGL2") : this._shaderPlatformName = "WEBGL1";
          const Sr = this._gl.getContextAttributes();
          Sr && (Qr.stencil = Sr.stencil)
        }
        this._sharedInit(ar), this._gl.pixelStorei(this._gl.UNPACK_COLORSPACE_CONVERSION_WEBGL, this._gl.NONE), void 0 !== Qr.useHighPrecisionFloats && (this._highPrecisionShadersAllowed = Qr.useHighPrecisionFloats), this.resize(), this._initGLContext(), this._initFeatures();
        for (let Wr = 0; Wr < this._caps.maxVertexAttribs; Wr++) this._currentBufferPointers[Wr] = new er;
        this._shaderProcessor = this.tt > 1 ? new xr : new Er;
        const jr = `Babylon.js v${Kr.Version}`;
        Ir.c.Log(jr + ` - ${this.description}`), this._renderingCanvas && this._renderingCanvas.setAttribute && this._renderingCanvas.setAttribute("data-engine", jr);
        const fr = (0, Wr.F)(this._gl);
        fr.validateShaderPrograms = this.validateShaderPrograms, fr.parallelShaderCompile = this._caps.parallelShaderCompile
      }
      _clearEmptyResources() {
        this._dummyFramebuffer = null, super._clearEmptyResources()
      }
      _getShaderProcessingContext(rr) {
        return null
      }
      areAllEffectsReady() {
        for (const rr in this._compiledEffects) {
          if (!this._compiledEffects[rr].isReady()) return !1
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
        const rr = this._gl.getExtension("WEBGL_debug_renderer_info");
        null != rr && (this._glRenderer = this._gl.getParameter(rr.UNMASKED_RENDERER_WEBGL), this._glVendor = this._gl.getParameter(rr.UNMASKED_VENDOR_WEBGL)), this._glVendor || (this._glVendor = this._gl.getParameter(this._gl.VENDOR) || "Unknown vendor"), this._glRenderer || (this._glRenderer = this._gl.getParameter(this._gl.RENDERER) || "Unknown renderer"), 36193 !== this._gl.HALF_FLOAT_OES && (this._gl.HALF_FLOAT_OES = 36193), 34842 !== this._gl.RGBA16F && (this._gl.RGBA16F = 34842), 34836 !== this._gl.RGBA32F && (this._gl.RGBA32F = 34836), 35056 !== this._gl.DEPTH24_STENCIL8 && (this._gl.DEPTH24_STENCIL8 = 35056), this._caps.timerQuery && (1 === this._webGLVersion && (this._gl.getQuery = this._caps.timerQuery.getQueryEXT.bind(this._caps.timerQuery)), this._caps.canUseTimestampForTimerQuery = (this._gl.getQuery(this._caps.timerQuery.TIMESTAMP_EXT, this._caps.timerQuery.QUERY_COUNTER_BITS_EXT) ?? 0) > 0), this._caps.maxAnisotropy = this._caps.textureAnisotropicFilterExtension ? this._gl.getParameter(this._caps.textureAnisotropicFilterExtension.MAX_TEXTURE_MAX_ANISOTROPY_EXT) : 0, this._caps.textureFloatLinearFiltering = !(!this._caps.textureFloat || !this._gl.getExtension("OES_texture_float_linear")), this._caps.textureFloatRender = !(!this._caps.textureFloat || !this._canRenderToFloatFramebuffer()), this._caps.textureHalfFloatLinearFiltering = !!(this._webGLVersion > 1 || this._caps.textureHalfFloat && this._gl.getExtension("OES_texture_half_float_linear")), this._caps.textureNorm16 && (this._gl.R16_EXT = 33322, this._gl.RG16_EXT = 33324, this._gl.RGB16_EXT = 32852, this._gl.RGBA16_EXT = 32859, this._gl.R16_SNORM_EXT = 36760, this._gl.RG16_SNORM_EXT = 36761, this._gl.RGB16_SNORM_EXT = 36762, this._gl.RGBA16_SNORM_EXT = 36763);
        const Sr = this._gl.getExtension("OES_draw_buffers_indexed");
        if (this._caps.blendParametersPerTarget = !!Sr, this._alphaState = new nr.d(this._caps.blendParametersPerTarget), Sr && (this._gl.blendEquationSeparateIndexed = Sr.blendEquationSeparateiOES.bind(Sr), this._gl.blendEquationIndexed = Sr.blendEquationiOES.bind(Sr), this._gl.blendFuncSeparateIndexed = Sr.blendFuncSeparateiOES.bind(Sr), this._gl.blendFuncIndexed = Sr.blendFunciOES.bind(Sr), this._gl.colorMaskIndexed = Sr.colorMaskiOES.bind(Sr), this._gl.disableIndexed = Sr.disableiOES.bind(Sr), this._gl.enableIndexed = Sr.enableiOES.bind(Sr)), this._caps.dualSourceBlending = !!this._gl.getExtension("WEBGL_blend_func_extended"), this._caps.astc && (this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR), this._caps.bptc && (this._gl.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT = this._caps.bptc.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT), this._caps.s3tc_srgb && (this._gl.COMPRESSED_SRGB_S3TC_DXT1_EXT = this._caps.s3tc_srgb.COMPRESSED_SRGB_S3TC_DXT1_EXT, this._gl.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT = this._caps.s3tc_srgb.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT, this._gl.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT = this._caps.s3tc_srgb.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT), this._caps.etc2 && (this._gl.COMPRESSED_SRGB8_ETC2 = this._caps.etc2.COMPRESSED_SRGB8_ETC2, this._gl.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC = this._caps.etc2.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC), this._webGLVersion > 1 && 5131 !== this._gl.HALF_FLOAT_OES && (this._gl.HALF_FLOAT_OES = 5131), this._caps.textureHalfFloatRender = this._caps.textureHalfFloat && this._canRenderToHalfFloatFramebuffer(), this._webGLVersion > 1) this._caps.drawBuffersExtension = !0, this._caps.maxMSAASamples = null !== this._maxMSAASamplesOverride ? this._maxMSAASamplesOverride : this._gl.getParameter(this._gl.MAX_SAMPLES), this._caps.maxDrawBuffers = this._gl.getParameter(this._gl.MAX_DRAW_BUFFERS);
        else {
          const rr = this._gl.getExtension("WEBGL_draw_buffers");
          if (null !== rr) {
            this._caps.drawBuffersExtension = !0, this._gl.drawBuffers = rr.drawBuffersWEBGL.bind(rr), this._caps.maxDrawBuffers = this._gl.getParameter(rr.MAX_DRAW_BUFFERS_WEBGL), this._gl.DRAW_FRAMEBUFFER = this._gl.FRAMEBUFFER;
            for (let Sr = 0; Sr < 16; Sr++) this._gl["COLOR_ATTACHMENT" + Sr + "_WEBGL"] = rr["COLOR_ATTACHMENT" + Sr + "_WEBGL"]
          }
        }
        if (this._webGLVersion > 1) this._caps.depthTextureExtension = !0;
        else {
          const rr = this._gl.getExtension("WEBGL_depth_texture");
          null != rr && (this._caps.depthTextureExtension = !0, this._gl.UNSIGNED_INT_24_8 = rr.UNSIGNED_INT_24_8_WEBGL)
        }
        if (this.disableVertexArrayObjects) this._caps.vertexArrayObject = !1;
        else if (this._webGLVersion > 1) this._caps.vertexArrayObject = !0;
        else {
          const rr = this._gl.getExtension("OES_vertex_array_object");
          null != rr && (this._caps.vertexArrayObject = !0, this._gl.createVertexArray = rr.createVertexArrayOES.bind(rr), this._gl.bindVertexArray = rr.bindVertexArrayOES.bind(rr), this._gl.deleteVertexArray = rr.deleteVertexArrayOES.bind(rr))
        }
        if (this._webGLVersion > 1) this._caps.instancedArrays = !0;
        else {
          const rr = this._gl.getExtension("ANGLE_instanced_arrays");
          null != rr ? (this._caps.instancedArrays = !0, this._gl.drawArraysInstanced = rr.drawArraysInstancedANGLE.bind(rr), this._gl.drawElementsInstanced = rr.drawElementsInstancedANGLE.bind(rr), this._gl.vertexAttribDivisor = rr.vertexAttribDivisorANGLE.bind(rr)) : this._caps.instancedArrays = !1
        }
        if (this._gl.getShaderPrecisionFormat) {
          const rr = this._gl.getShaderPrecisionFormat(this._gl.VERTEX_SHADER, this._gl.HIGH_FLOAT),
            Sr = this._gl.getShaderPrecisionFormat(this._gl.FRAGMENT_SHADER, this._gl.HIGH_FLOAT);
          if (rr && Sr && (this._caps.highPrecisionShaderSupported = 0 !== rr.precision && 0 !== Sr.precision, this._caps.shaderFloatPrecision = Math.min(rr.precision, Sr.precision)), !this._shouldUseHighPrecisionShader) {
            const rr = this._gl.getShaderPrecisionFormat(this._gl.VERTEX_SHADER, this._gl.MEDIUM_FLOAT),
              Sr = this._gl.getShaderPrecisionFormat(this._gl.FRAGMENT_SHADER, this._gl.MEDIUM_FLOAT);
            rr && Sr && (this._caps.shaderFloatPrecision = Math.min(rr.precision, Sr.precision))
          }
          this._caps.shaderFloatPrecision < 10 && (this._caps.shaderFloatPrecision = 10)
        }
        if (this._webGLVersion > 1) this._caps.blendMinMax = !0;
        else {
          const rr = this._gl.getExtension("EXT_blend_minmax");
          null != rr && (this._caps.blendMinMax = !0, this._gl.MAX = rr.MAX_EXT, this._gl.MIN = rr.MIN_EXT)
        }
        if (!this._caps.supportSRGBBuffers) {
          if (this._webGLVersion > 1) this._caps.supportSRGBBuffers = !0, this._glSRGBExtensionValues = {
            SRGB: WebGL2RenderingContext.SRGB,
            SRGB8: WebGL2RenderingContext.SRGB8,
            SRGB8_ALPHA8: WebGL2RenderingContext.SRGB8_ALPHA8
          };
          else {
            const rr = this._gl.getExtension("EXT_sRGB");
            null != rr && (this._caps.supportSRGBBuffers = !0, this._glSRGBExtensionValues = {
              SRGB: rr.SRGB_EXT,
              SRGB8: rr.SRGB_ALPHA_EXT,
              SRGB8_ALPHA8: rr.SRGB_ALPHA_EXT
            })
          }
          if (this._creationOptions) {
            const rr = this._creationOptions.forceSRGBBufferSupportState;
            void 0 !== rr && (this._caps.supportSRGBBuffers = this._caps.supportSRGBBuffers && rr)
          }
        }
        this._depthCullingState.depthTest = !0, this._depthCullingState.depthFunc = this._gl.LEQUAL, this._depthCullingState.depthMask = !0, this._maxSimultaneousTextures = this._caps.maxCombinedTexturesImageUnits;
        for (let Qr = 0; Qr < this._maxSimultaneousTextures; Qr++) this._nextFreeTextureSlots.push(Qr);
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
      get tt() {
        return this._webGLVersion
      }
      getClassName() {
        return "ThinEngine"
      }
      _prepareWorkingCanvas() {
        if (this._workingCanvas) return;
        this._workingCanvas = this.createCanvas(1, 1);
        const rr = this._workingCanvas.getContext("2d");
        rr && (this._workingContext = rr)
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
        const rr = this.getGlInfo();
        return rr && rr.renderer ? rr.renderer : ""
      }
      getRenderWidth() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && this._currentRenderTarget ? this._currentRenderTarget.width : this._framebufferDimensionsObject ? this._framebufferDimensionsObject.framebufferWidth : this._gl.drawingBufferWidth
      }
      getRenderHeight() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && this._currentRenderTarget ? this._currentRenderTarget.height : this._framebufferDimensionsObject ? this._framebufferDimensionsObject.framebufferHeight : this._gl.drawingBufferHeight
      }
      clear(rr, Sr, Qr) {
        let Zr = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          Wr = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
        const ar = this.stencilStateComposer.useStencilGlobalOnly;
        this.stencilStateComposer.useStencilGlobalOnly = !0, this.applyStates(), this.stencilStateComposer.useStencilGlobalOnly = ar;
        let jr = 0;
        if (Sr && rr) {
          let Sr = !0;
          if (this._currentRenderTarget) {
            const Qr = this._currentRenderTarget.texture?.format;
            if (void 0 !== Qr && (0, Yr.e)(Qr)) {
              const Qr = this._currentRenderTarget.texture?.type;
              void 0 !== Qr && (0, Yr.g)(Qr) ? (Kr._TempClearColorUint32[0] = 255 * rr.r, Kr._TempClearColorUint32[1] = 255 * rr.g, Kr._TempClearColorUint32[2] = 255 * rr.b, Kr._TempClearColorUint32[3] = 255 * rr.a, this._gl.clearBufferuiv(this._gl.COLOR, 0, Kr._TempClearColorUint32), Sr = !1) : (Kr._TempClearColorInt32[0] = 255 * rr.r, Kr._TempClearColorInt32[1] = 255 * rr.g, Kr._TempClearColorInt32[2] = 255 * rr.b, Kr._TempClearColorInt32[3] = 255 * rr.a, this._gl.clearBufferiv(this._gl.COLOR, 0, Kr._TempClearColorInt32), Sr = !1)
            }
          }
          Sr && (this._gl.clearColor(rr.r, rr.g, rr.b, void 0 !== rr.a ? rr.a : 1), jr |= this._gl.COLOR_BUFFER_BIT)
        }
        Qr && (this.JZr ? (this._depthCullingState.depthFunc = this._gl.GEQUAL, this._gl.clearDepth(0)) : this._gl.clearDepth(1), jr |= this._gl.DEPTH_BUFFER_BIT), Zr && (this._gl.clearStencil(Wr), jr |= this._gl.STENCIL_BUFFER_BIT), this._gl.clear(jr)
      }
      _clearColorAttachment(rr, Sr, Qr, Zr) {
        if ((0, Yr.e)(Qr)) {
          const Qr = (0, Yr.g)(Zr),
            Wr = Qr ? Kr._TempClearColorUint32 : Kr._TempClearColorInt32;
          return Wr[0] = Sr.r, Wr[1] = Sr.g, Wr[2] = Sr.b, Wr[3] = Sr.a, void(Qr ? this._gl.clearBufferuiv(this._gl.COLOR, rr, Wr) : this._gl.clearBufferiv(this._gl.COLOR, rr, Wr))
        }
        Kr._TempClearColorFloat32[0] = Sr.r, Kr._TempClearColorFloat32[1] = Sr.g, Kr._TempClearColorFloat32[2] = Sr.b, Kr._TempClearColorFloat32[3] = Sr.a, this._gl.clearBufferfv(this._gl.COLOR, rr, Kr._TempClearColorFloat32)
      }
      _viewport(rr, Sr, Qr, Zr) {
        rr === this._viewportCached.x && Sr === this._viewportCached.y && Qr === this._viewportCached.z && Zr === this._viewportCached.w || (this._viewportCached.x = rr, this._viewportCached.y = Sr, this._viewportCached.z = Qr, this._viewportCached.w = Zr, this._gl.viewport(rr, Sr, Qr, Zr))
      }
      Bx() {
        super.Bx(), this._badOS && this.flushFramebuffer()
      }
      get performanceMonitor() {
        throw new Error("Not Supported by ThinEngine")
      }
      bindFramebuffer(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          Qr = arguments.length > 2 ? arguments[2] : void 0,
          Zr = arguments.length > 3 ? arguments[3] : void 0,
          Wr = arguments.length > 4 ? arguments[4] : void 0,
          ar = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          jr = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        const fr = rr;
        this._currentRenderTarget && this._resolveAndGenerateMipMapsFramebuffer(this._currentRenderTarget), this._currentRenderTarget = rr, this._integerMRTAttachmentsMask = !rr.isMulti && rr.texture && (0, Yr.e)(rr.texture.format) ? 1 : 0, this._bindUnboundFramebuffer(fr._framebuffer);
        const Er = this._gl;
        rr.isMulti || (rr.is2DArray || rr.is3D ? (Er.framebufferTextureLayer(Er.FRAMEBUFFER, Er.COLOR_ATTACHMENT0, rr.texture._hardwareTexture?.underlyingResource, ar, jr), fr._currentLOD = ar) : rr.isCube ? Er.framebufferTexture2D(Er.FRAMEBUFFER, Er.COLOR_ATTACHMENT0, Er.TEXTURE_CUBE_MAP_POSITIVE_X + Sr, rr.texture._hardwareTexture?.underlyingResource, ar) : fr._currentLOD !== ar && (Er.framebufferTexture2D(Er.FRAMEBUFFER, Er.COLOR_ATTACHMENT0, Er.TEXTURE_2D, rr.texture._hardwareTexture?.underlyingResource, ar), fr._currentLOD = ar));
        const pr = rr._depthStencilTexture;
        if (pr) {
          rr.is3D && (rr.texture.width === pr.width && rr.texture.height === pr.height && rr.texture.depth === pr.depth || Ir.c.Warn("Depth/Stencil attachment for 3D target must have same dimensions as color attachment"));
          const Qr = rr._depthStencilTextureWithStencil ? Er.DEPTH_STENCIL_ATTACHMENT : Er.DEPTH_ATTACHMENT;
          rr.is2DArray || rr.is3D ? Er.framebufferTextureLayer(Er.FRAMEBUFFER, Qr, pr._hardwareTexture?.underlyingResource, ar, jr) : rr.isCube ? Er.framebufferTexture2D(Er.FRAMEBUFFER, Qr, Er.TEXTURE_CUBE_MAP_POSITIVE_X + Sr, pr._hardwareTexture?.underlyingResource, ar) : Er.framebufferTexture2D(Er.FRAMEBUFFER, Qr, Er.TEXTURE_2D, pr._hardwareTexture?.underlyingResource, ar)
        }
        fr._MSAAFramebuffer && this._bindUnboundFramebuffer(fr._MSAAFramebuffer), this._cachedViewport && !Wr ? this.setViewport(this._cachedViewport, Qr, Zr) : (Qr || (Qr = rr.width, ar && (Qr /= Math.pow(2, ar))), Zr || (Zr = rr.height, ar && (Zr /= Math.pow(2, ar))), this._viewport(0, 0, Qr, Zr)), this.wipeCaches()
      }
      setStateCullFaceType(rr, Sr) {
        const Qr = this.cullBackFaces ?? rr ?? 1 ? this._gl.BACK : this._gl.FRONT;
        (this._depthCullingState.cullFace !== Qr || Sr) && (this._depthCullingState.cullFace = Qr)
      }
      setState(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          Qr = arguments.length > 2 ? arguments[2] : void 0,
          Zr = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          Wr = arguments.length > 4 ? arguments[4] : void 0,
          ar = arguments.length > 5 ? arguments[5] : void 0,
          jr = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        (this._depthCullingState.cull !== rr || Qr) && (this._depthCullingState.cull = rr), this.setStateCullFaceType(Wr, Qr), this.setZOffset(Sr), this.setZOffsetUnits(jr);
        const Ir = Zr ? this._gl.CW : this._gl.CCW;
        (this._depthCullingState.frontFace !== Ir || Qr) && (this._depthCullingState.frontFace = Ir), this._stencilStateComposer.stencilMaterial = ar
      }
      _resolveAndGenerateMipMapsFramebuffer(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        rr.disableAutomaticMSAAResolve || (rr.isMulti ? this.resolveMultiFramebuffer(rr) : this.resolveFramebuffer(rr)), Sr || (rr.isMulti ? this.generateMipMapsMultiFramebuffer(rr) : this.generateMipMapsFramebuffer(rr))
      }
      _bindUnboundFramebuffer(rr) {
        this._currentFramebuffer !== rr && (this._gl.bindFramebuffer(this._gl.FRAMEBUFFER, rr), this._currentFramebuffer = rr)
      }
      _currentFrameBufferIsDefaultFrameBuffer() {
        return null === this._currentFramebuffer
      }
      generateMipmaps(rr) {
        const Sr = this._getTextureTarget(rr);
        this._bindTextureDirectly(Sr, rr, !0), this._gl.generateMipmap(Sr), this._bindTextureDirectly(Sr, null)
      }
      unBindFramebuffer(rr, Sr, Qr) {
        const Zr = rr;
        this._currentRenderTarget = null, this._integerMRTAttachmentsMask = 0, this._resolveAndGenerateMipMapsFramebuffer(rr, Sr), Qr && (Zr._MSAAFramebuffer && this._bindUnboundFramebuffer(Zr._framebuffer), Qr()), this._bindUnboundFramebuffer(null)
      }
      generateMipMapsFramebuffer(rr) {
        rr.isMulti || !rr.texture?.generateMipMaps || rr.isCube || this.generateMipmaps(rr.texture)
      }
      resolveFramebuffer(rr) {
        const Sr = rr,
          Qr = this._gl;
        if (!Sr._MSAAFramebuffer || Sr.isMulti) return;
        let Zr = Sr.resolveMSAAColors ? Qr.COLOR_BUFFER_BIT : 0;
        Zr |= Sr._generateDepthBuffer && Sr.resolveMSAADepth ? Qr.DEPTH_BUFFER_BIT : 0, Zr |= Sr._generateStencilBuffer && Sr.resolveMSAAStencil ? Qr.STENCIL_BUFFER_BIT : 0, Qr.bindFramebuffer(Qr.READ_FRAMEBUFFER, Sr._MSAAFramebuffer), Qr.bindFramebuffer(Qr.DRAW_FRAMEBUFFER, Sr._framebuffer), Qr.blitFramebuffer(0, 0, rr.width, rr.height, 0, 0, rr.width, rr.height, Zr, Qr.NEAREST)
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
      createVertexBuffer(rr, Sr, Qr) {
        return this._createVertexBuffer(rr, this._gl.STATIC_DRAW)
      }
      _createVertexBuffer(rr, Sr) {
        const Qr = this._gl.createBuffer();
        if (!Qr) throw new Error("Unable to create vertex buffer");
        const Zr = new mr.e(Qr);
        return this.bindArrayBuffer(Zr), "number" !== typeof rr ? rr instanceof Array ? (this._gl.bufferData(this._gl.ARRAY_BUFFER, new Float32Array(rr), Sr), Zr.sx = 4 * rr.length) : (this._gl.bufferData(this._gl.ARRAY_BUFFER, rr, Sr), Zr.sx = rr.byteLength) : (this._gl.bufferData(this._gl.ARRAY_BUFFER, new Uint8Array(rr), Sr), Zr.sx = rr), this._resetVertexBufferBinding(), Zr.references = 1, Zr
      }
      createDynamicVertexBuffer(rr, Sr) {
        return this._createVertexBuffer(rr, this._gl.DYNAMIC_DRAW)
      }
      _resetIndexBufferBinding() {
        this.bindIndexBuffer(null), this._cachedIndexBuffer = null
      }
      createIndexBuffer(rr, Sr, Qr) {
        const Zr = this._gl.createBuffer(),
          Wr = new mr.e(Zr);
        if (!Zr) throw new Error("Unable to create index buffer");
        this.bindIndexBuffer(Wr);
        const ar = this._normalizeIndexData(rr);
        return this._gl.bufferData(this._gl.ELEMENT_ARRAY_BUFFER, ar, Sr ? this._gl.DYNAMIC_DRAW : this._gl.STATIC_DRAW), this._resetIndexBufferBinding(), Wr.references = 1, Wr.is32Bits = 4 === ar.BYTES_PER_ELEMENT, Wr
      }
      _normalizeIndexData(rr) {
        if (2 === rr.BYTES_PER_ELEMENT) return rr;
        if (this._caps.uintIndices) {
          if (rr instanceof Uint32Array) return rr;
          for (let Sr = 0; Sr < rr.length; Sr++)
            if (rr[Sr] >= 65535) return new Uint32Array(rr);
          return new Uint16Array(rr)
        }
        return new Uint16Array(rr)
      }
      bindArrayBuffer(rr) {
        this._vaoRecordInProgress || this._unbindVertexArrayObject(), this._bindBuffer(rr, this._gl.ARRAY_BUFFER)
      }
      bindUniformBlock(rr, Sr, Qr) {
        const Zr = rr.program,
          Wr = this._gl.getUniformBlockIndex(Zr, Sr);
        this._gl.uniformBlockBinding(Zr, Wr, Qr)
      }
      bindIndexBuffer(rr) {
        this._vaoRecordInProgress || this._unbindVertexArrayObject(), this._bindBuffer(rr, this._gl.ELEMENT_ARRAY_BUFFER)
      }
      _bindBuffer(rr, Sr) {
        (this._vaoRecordInProgress || this._currentBoundBuffer[Sr] !== rr) && (this._gl.bindBuffer(Sr, rr ? rr.underlyingResource : null), this._currentBoundBuffer[Sr] = rr)
      }
      updateArrayBuffer(rr) {
        this._gl.bufferSubData(this._gl.ARRAY_BUFFER, 0, rr)
      }
      _vertexAttribPointer(rr, Sr, Qr, Zr, Wr, ar, jr) {
        const Ir = this._currentBufferPointers[Sr];
        if (!Ir) return;
        let fr = !1;
        Ir.active ? (Ir.buffer !== rr && (Ir.buffer = rr, fr = !0), Ir.size !== Qr && (Ir.size = Qr, fr = !0), Ir.type !== Zr && (Ir.type = Zr, fr = !0), Ir.normalized !== Wr && (Ir.normalized = Wr, fr = !0), Ir.stride !== ar && (Ir.stride = ar, fr = !0), Ir.offset !== jr && (Ir.offset = jr, fr = !0)) : (fr = !0, Ir.active = !0, Ir.index = Sr, Ir.size = Qr, Ir.type = Zr, Ir.normalized = Wr, Ir.stride = ar, Ir.offset = jr, Ir.buffer = rr), (fr || this._vaoRecordInProgress) && (this.bindArrayBuffer(rr), Zr === this._gl.UNSIGNED_INT || Zr === this._gl.INT ? this._gl.vertexAttribIPointer(Sr, Qr, Zr, ar, jr) : this._gl.vertexAttribPointer(Sr, Qr, Zr, Wr, ar, jr))
      }
      _bindIndexBufferWithCache(rr) {
        null != rr && this._cachedIndexBuffer !== rr && (this._cachedIndexBuffer = rr, this.bindIndexBuffer(rr), this._uintIndicesCurrentlySet = rr.is32Bits)
      }
      _bindVertexBuffersAttributes(rr, Sr, Qr) {
        const Zr = Sr.getAttributesNames();
        this._vaoRecordInProgress || this._unbindVertexArrayObject(), this.unbindAllAttributes();
        for (let Wr = 0; Wr < Zr.length; Wr++) {
          const ar = Sr.getAttributeLocation(Wr);
          if (ar >= 0) {
            const Sr = Zr[Wr];
            let jr = null;
            if (Qr && (jr = Qr[Sr]), jr || (jr = rr[Sr]), !jr) continue;
            this._gl.enableVertexAttribArray(ar), this._vaoRecordInProgress || (this._vertexAttribArraysEnabled[ar] = !0);
            const Ir = jr.getBuffer();
            Ir && (this._vertexAttribPointer(Ir, ar, jr.getSize(), jr.type, jr.normalized, jr.byteStride, jr.byteOffset), jr.getIsInstanced() && (this._gl.vertexAttribDivisor(ar, jr.getInstanceDivisor()), this._vaoRecordInProgress || (this._currentInstanceLocations.push(ar), this._currentInstanceBuffers.push(Ir))))
          }
        }
      }
      recordVertexArrayObject(rr, Sr, Qr, Zr) {
        const Wr = this._gl.createVertexArray();
        if (!Wr) throw new Error("Unable to create VAO");
        return this._vaoRecordInProgress = !0, this._gl.bindVertexArray(Wr), this._mustWipeVertexAttributes = !0, this._bindVertexBuffersAttributes(rr, Qr, Zr), this.bindIndexBuffer(Sr), this._vaoRecordInProgress = !1, this._gl.bindVertexArray(null), Wr
      }
      bindVertexArrayObject(rr, Sr) {
        this._cachedVertexArrayObject !== rr && (this._cachedVertexArrayObject = rr, this._gl.bindVertexArray(rr), this._cachedVertexBuffers = null, this._cachedIndexBuffer = null, this._uintIndicesCurrentlySet = null != Sr && Sr.is32Bits, this._mustWipeVertexAttributes = !0)
      }
      bindBuffersDirectly(rr, Sr, Qr, Zr, Wr) {
        if (this._cachedVertexBuffers !== rr || this._cachedEffectForVertexBuffers !== Wr) {
          this._cachedVertexBuffers = rr, this._cachedEffectForVertexBuffers = Wr;
          const Sr = Wr.getAttributesCount();
          this._unbindVertexArrayObject(), this.unbindAllAttributes();
          let ar = 0;
          for (let jr = 0; jr < Sr; jr++)
            if (jr < Qr.length) {
              const Sr = Wr.getAttributeLocation(jr);
              Sr >= 0 && (this._gl.enableVertexAttribArray(Sr), this._vertexAttribArraysEnabled[Sr] = !0, this._vertexAttribPointer(rr, Sr, Qr[jr], this._gl.FLOAT, !1, Zr, ar)), ar += 4 * Qr[jr]
            }
        }
        this._bindIndexBufferWithCache(Sr)
      }
      _unbindVertexArrayObject() {
        this._cachedVertexArrayObject && (this._cachedVertexArrayObject = null, this._gl.bindVertexArray(null))
      }
      bindBuffers(rr, Sr, Qr, Zr) {
        this._cachedVertexBuffers === rr && this._cachedEffectForVertexBuffers === Qr || (this._cachedVertexBuffers = rr, this._cachedEffectForVertexBuffers = Qr, this._bindVertexBuffersAttributes(rr, Qr, Zr)), this._bindIndexBufferWithCache(Sr)
      }
      unbindInstanceAttributes() {
        let rr;
        for (let Sr = 0, Qr = this._currentInstanceLocations.length; Sr < Qr; Sr++) {
          const Qr = this._currentInstanceBuffers[Sr];
          rr != Qr && Qr.references && (rr = Qr, this.bindArrayBuffer(Qr));
          const Zr = this._currentInstanceLocations[Sr];
          this._gl.vertexAttribDivisor(Zr, 0)
        }
        this._currentInstanceBuffers.length = 0, this._currentInstanceLocations.length = 0
      }
      releaseVertexArrayObject(rr) {
        this._gl.deleteVertexArray(rr)
      }
      _releaseBuffer(rr) {
        return rr.references--, 0 === rr.references && (this._deleteBuffer(rr), !0)
      }
      _deleteBuffer(rr) {
        this._gl.deleteBuffer(rr.underlyingResource)
      }
      updateAndBindInstancesBuffer(rr, Sr, Qr) {
        if (this.bindArrayBuffer(rr), Sr && this._gl.bufferSubData(this._gl.ARRAY_BUFFER, 0, Sr), void 0 !== Qr[0].index) this.bindInstancesBuffer(rr, Qr, !0);
        else
          for (let Zr = 0; Zr < 4; Zr++) {
            const Sr = Qr[Zr];
            this._vertexAttribArraysEnabled[Sr] || (this._gl.enableVertexAttribArray(Sr), this._vertexAttribArraysEnabled[Sr] = !0), this._vertexAttribPointer(rr, Sr, 4, this._gl.FLOAT, !1, 64, 16 * Zr), this._gl.vertexAttribDivisor(Sr, 1), this._currentInstanceLocations.push(Sr), this._currentInstanceBuffers.push(rr)
          }
      }
      bindInstancesBuffer(rr, Sr) {
        let Qr = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this.bindArrayBuffer(rr);
        let Zr = 0;
        if (Qr)
          for (let Wr = 0; Wr < Sr.length; Wr++) {
            Zr += 4 * Sr[Wr].attributeSize
          }
        for (let Wr = 0; Wr < Sr.length; Wr++) {
          const Qr = Sr[Wr];
          void 0 === Qr.index && (Qr.index = this._currentEffect.getAttributeLocationByName(Qr.attributeName)), Qr.index < 0 || (this._vertexAttribArraysEnabled[Qr.index] || (this._gl.enableVertexAttribArray(Qr.index), this._vertexAttribArraysEnabled[Qr.index] = !0), this._vertexAttribPointer(rr, Qr.index, Qr.attributeSize, Qr.attributeType || this._gl.FLOAT, Qr.normalized || !1, Zr, Qr.offset), this._gl.vertexAttribDivisor(Qr.index, void 0 === Qr.divisor ? 1 : Qr.divisor), this._currentInstanceLocations.push(Qr.index), this._currentInstanceBuffers.push(rr))
        }
      }
      disableInstanceAttributeByName(rr) {
        if (!this._currentEffect) return;
        const Sr = this._currentEffect.getAttributeLocationByName(rr);
        this.disableInstanceAttribute(Sr)
      }
      disableInstanceAttribute(rr) {
        let Sr, Qr = !1;
        for (; - 1 !== (Sr = this._currentInstanceLocations.indexOf(rr));) this._currentInstanceLocations.splice(Sr, 1), this._currentInstanceBuffers.splice(Sr, 1), Qr = !0;
        Qr && (this._gl.vertexAttribDivisor(rr, 0), this.disableAttributeByIndex(rr))
      }
      disableAttributeByIndex(rr) {
        this._gl.disableVertexAttribArray(rr), this._vertexAttribArraysEnabled[rr] = !1, this._currentBufferPointers[rr].active = !1
      }
      draw(rr, Sr, Qr, Zr) {
        this.drawElementsType(rr ? 0 : 1, Sr, Qr, Zr)
      }
      drawPointClouds(rr, Sr, Qr) {
        this.drawArraysType(2, rr, Sr, Qr)
      }
      drawUnIndexed(rr, Sr, Qr, Zr) {
        this.drawArraysType(rr ? 0 : 1, Sr, Qr, Zr)
      }
      drawElementsType(rr, Sr, Qr, Zr) {
        this.applyStates(), this._reportDrawCall();
        const Wr = this._drawMode(rr),
          ar = this._uintIndicesCurrentlySet ? this._gl.UNSIGNED_INT : this._gl.UNSIGNED_SHORT,
          jr = this._uintIndicesCurrentlySet ? 4 : 2;
        Zr ? this._gl.drawElementsInstanced(Wr, Qr, ar, Sr * jr, Zr) : this._gl.drawElements(Wr, Qr, ar, Sr * jr)
      }
      drawArraysType(rr, Sr, Qr, Zr) {
        this.applyStates(), this._reportDrawCall();
        const Wr = this._drawMode(rr);
        Zr ? this._gl.drawArraysInstanced(Wr, Sr, Qr, Zr) : this._gl.drawArrays(Wr, Sr, Qr)
      }
      _drawMode(rr) {
        switch (rr) {
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
      _releaseEffect(rr) {
        this._compiledEffects[rr._key] && delete this._compiledEffects[rr._key];
        const Sr = rr.getPipelineContext();
        Sr && this._deletePipelineContext(Sr)
      }
      _deletePipelineContext(rr) {
        const Sr = rr;
        Sr && Sr.program && (Sr.program.__SPECTOR_rebuildProgram = null, (0, zr.j)(Sr), this._gl && (this._currentProgram === Sr.program && this._setProgram(null), this._gl.deleteProgram(Sr.program)))
      }
      _getGlobalDefines(rr) {
        return (0, hr.i)(rr, this.isNDCHalfZRange, this.JZr, this.useExactSrgbConversions)
      }
      createEffect(rr, Sr, Qr, ar, jr, Ir, fr, Er, pr) {
        let xr = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
          mr = arguments.length > 10 ? arguments[10] : void 0;
        const Nr = "string" === typeof rr ? rr : rr.vertexToken || rr.vertexSource || rr.vertexElement || rr.vertex,
          Ur = "string" === typeof rr ? rr : rr.fragmentToken || rr.fragmentSource || rr.fragmentElement || rr.fragment,
          tr = this._getGlobalDefines(),
          hr = void 0 !== Sr.attributes;
        let zr = jr ?? Sr.defines ?? "";
        tr && (zr += tr);
        const Yr = Nr + "+" + Ur + "@" + zr;
        if (this._compiledEffects[Yr]) {
          const rr = this._compiledEffects[Yr];
          return fr && rr.isReady() && fr(rr), rr._refCount++, rr
        }
        this._gl && (0, Wr.F)(this._gl);
        const nr = new Zr.b(rr, Sr, hr ? this : Qr, ar, this, jr, Ir, fr, Er, pr, Yr, Sr.shaderLanguage ?? xr, Sr.extraInitializationsAsync ?? mr);
        return this._compiledEffects[Yr] = nr, nr
      }
      _getShaderSource(rr) {
        return this._gl.getShaderSource(rr)
      }
      createRawShaderProgram(rr, Sr, Qr, Zr) {
        let ar = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
        const jr = (0, Wr.F)(this._gl);
        return jr._contextWasLost = this._contextWasLost, jr.validateShaderPrograms = this.validateShaderPrograms, (0, Wr.w)(rr, Sr, Qr, Zr || this._gl, ar)
      }
      createShaderProgram(rr, Sr, Qr, Zr, ar) {
        let jr = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null;
        const Ir = (0, Wr.F)(this._gl);
        return Ir._contextWasLost = this._contextWasLost, Ir.validateShaderPrograms = this.validateShaderPrograms, (0, Wr.y)(rr, Sr, Qr, Zr, ar || this._gl, jr)
      }
      inlineShaderCode(rr) {
        return rr
      }
      createPipelineContext(rr) {
        if (this._gl) {
          (0, Wr.F)(this._gl).parallelShaderCompile = this._caps.parallelShaderCompile
        }
        const Sr = (0, Wr.v)(this._gl, rr);
        return Sr.engine = this, Sr
      }
      createMaterialContext() {}
      createDrawContext() {}
      _finalizePipelineContext(rr) {
        return (0, Wr.l)(rr, this._gl, this.validateShaderPrograms)
      }
      _preparePipelineContextAsync(rr, Sr, Qr, Zr, ar, jr, Ir, fr, Er, pr, xr) {
        const mr = (0, Wr.F)(this._gl);
        return mr._contextWasLost = this._contextWasLost, mr.validateShaderPrograms = this.validateShaderPrograms, mr._createShaderProgramInjection = this._createShaderProgram.bind(this), mr.createRawShaderProgramInjection = this.createRawShaderProgram.bind(this), mr.createShaderProgramInjection = this.createShaderProgram.bind(this), mr.loadFileInjection = this._loadFile.bind(this), (0, Wr.r)(rr, Sr, Qr, Zr, ar, jr, Ir, fr, Er, pr, xr)
      }
      _createShaderProgram(rr, Sr, Qr, Zr) {
        let ar = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
        return (0, Wr.d)(rr, Sr, Qr, Zr, ar)
      }
      _isRenderingStateCompiled(rr) {
        return !this._isDisposed && (0, Wr.o)(rr, this._gl, this.validateShaderPrograms)
      }
      _executeWhenRenderingStateIsCompiled(rr, Sr) {
        (0, Wr.h)(rr, Sr)
      }
      getUniforms(rr, Sr) {
        const Qr = new Array,
          Zr = rr;
        for (let Wr = 0; Wr < Sr.length; Wr++) Qr.push(this._gl.getUniformLocation(Zr.program, Sr[Wr]));
        return Qr
      }
      getAttributes(rr, Sr) {
        const Qr = [],
          Zr = rr;
        for (let ar = 0; ar < Sr.length; ar++) try {
          Qr.push(this._gl.getAttribLocation(Zr.program, Sr[ar]))
        } catch (Wr) {
          Qr.push(-1)
        }
        return Qr
      }
      enableEffect(rr) {
        (rr = null !== rr && (0, jr.d)(rr) ? rr.effect : rr) && rr !== this._currentEffect && (this._stencilStateComposer.stencilMaterial = void 0, this.bindSamplers(rr), this._currentEffect = rr, rr.onBind && rr.onBind(rr), rr._onBindObservable && rr._onBindObservable.notifyObservers(rr))
      }
      setInt(rr, Sr) {
        return !!rr && (this._gl.uniform1i(rr, Sr), !0)
      }
      setInt2(rr, Sr, Qr) {
        return !!rr && (this._gl.uniform2i(rr, Sr, Qr), !0)
      }
      setInt3(rr, Sr, Qr, Zr) {
        return !!rr && (this._gl.uniform3i(rr, Sr, Qr, Zr), !0)
      }
      setInt4(rr, Sr, Qr, Zr, Wr) {
        return !!rr && (this._gl.uniform4i(rr, Sr, Qr, Zr, Wr), !0)
      }
      setIntArray(rr, Sr) {
        return !!rr && (this._gl.uniform1iv(rr, Sr), !0)
      }
      setIntArray2(rr, Sr) {
        return !(!rr || Sr.length % 2 !== 0) && (this._gl.uniform2iv(rr, Sr), !0)
      }
      setIntArray3(rr, Sr) {
        return !(!rr || Sr.length % 3 !== 0) && (this._gl.uniform3iv(rr, Sr), !0)
      }
      setIntArray4(rr, Sr) {
        return !(!rr || Sr.length % 4 !== 0) && (this._gl.uniform4iv(rr, Sr), !0)
      }
      setUInt(rr, Sr) {
        return !!rr && (this._gl.uniform1ui(rr, Sr), !0)
      }
      setUInt2(rr, Sr, Qr) {
        return !!rr && (this._gl.uniform2ui(rr, Sr, Qr), !0)
      }
      setUInt3(rr, Sr, Qr, Zr) {
        return !!rr && (this._gl.uniform3ui(rr, Sr, Qr, Zr), !0)
      }
      setUInt4(rr, Sr, Qr, Zr, Wr) {
        return !!rr && (this._gl.uniform4ui(rr, Sr, Qr, Zr, Wr), !0)
      }
      setUIntArray(rr, Sr) {
        return !!rr && (this._gl.uniform1uiv(rr, Sr), !0)
      }
      setUIntArray2(rr, Sr) {
        return !(!rr || Sr.length % 2 !== 0) && (this._gl.uniform2uiv(rr, Sr), !0)
      }
      setUIntArray3(rr, Sr) {
        return !(!rr || Sr.length % 3 !== 0) && (this._gl.uniform3uiv(rr, Sr), !0)
      }
      setUIntArray4(rr, Sr) {
        return !(!rr || Sr.length % 4 !== 0) && (this._gl.uniform4uiv(rr, Sr), !0)
      }
      setArray(rr, Sr) {
        return !!rr && (!(Sr.length < 1) && (this._gl.uniform1fv(rr, Sr), !0))
      }
      setArray2(rr, Sr) {
        return !(!rr || Sr.length % 2 !== 0) && (this._gl.uniform2fv(rr, Sr), !0)
      }
      setArray3(rr, Sr) {
        return !(!rr || Sr.length % 3 !== 0) && (this._gl.uniform3fv(rr, Sr), !0)
      }
      setArray4(rr, Sr) {
        return !(!rr || Sr.length % 4 !== 0) && (this._gl.uniform4fv(rr, Sr), !0)
      }
      setMatrices(rr, Sr) {
        return !!rr && (this._gl.uniformMatrix4fv(rr, !1, Sr), !0)
      }
      setMatrix3x3(rr, Sr) {
        return !!rr && (this._gl.uniformMatrix3fv(rr, !1, Sr), !0)
      }
      setMatrix2x2(rr, Sr) {
        return !!rr && (this._gl.uniformMatrix2fv(rr, !1, Sr), !0)
      }
      setFloat(rr, Sr) {
        return !!rr && (this._gl.uniform1f(rr, Sr), !0)
      }
      setFloat2(rr, Sr, Qr) {
        return !!rr && (this._gl.uniform2f(rr, Sr, Qr), !0)
      }
      setFloat3(rr, Sr, Qr, Zr) {
        return !!rr && (this._gl.uniform3f(rr, Sr, Qr, Zr), !0)
      }
      setFloat4(rr, Sr, Qr, Zr, Wr) {
        return !!rr && (this._gl.uniform4f(rr, Sr, Qr, Zr, Wr), !0)
      }
      _applyColorWriteState() {
        if (this._colorWriteChanged) {
          this._colorWriteChanged = !1;
          const rr = this._colorWrite;
          this._gl.colorMask(rr, rr, rr, rr)
        }
      }
      applyStates() {
        this._depthCullingState.apply(this._gl), this._stencilStateComposer.apply(this._gl), this._alphaState.apply(this._gl, this._currentRenderTarget && this._currentRenderTarget.textures ? this._currentRenderTarget.textures.length : 1, this._integerMRTAttachmentsMask), this._applyColorWriteState()
      }
      wipeCaches(rr) {
        this.preventCacheWipeBetweenFrames && !rr || (this._currentEffect = null, this._viewportCached.x = 0, this._viewportCached.y = 0, this._viewportCached.z = 0, this._viewportCached.w = 0, this._unbindVertexArrayObject(), rr && (this._currentProgram = null, this.resetTextureCache(), this._stencilStateComposer.reset(), this._depthCullingState.reset(), this._depthCullingState.depthFunc = this._gl.LEQUAL, this._alphaState.reset(), this._resetAlphaMode(), this._colorWrite = !0, this._colorWriteChanged = !0, this._unpackFlipYCached = null, this._gl.pixelStorei(this._gl.UNPACK_COLORSPACE_CONVERSION_WEBGL, this._gl.NONE), this._gl.pixelStorei(this._gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), this._mustWipeVertexAttributes = !0, this.unbindAllAttributes()), this._resetVertexBufferBinding(), this._cachedIndexBuffer = null, this._cachedEffectForVertexBuffers = null, this.bindIndexBuffer(null))
      }
      _getSamplingParameters(rr, Sr) {
        const Qr = this._gl;
        let Zr = Qr.NEAREST,
          Wr = Qr.NEAREST,
          ar = !1;
        switch (rr) {
          case 11:
            Zr = Qr.LINEAR, Wr = Sr ? Qr.LINEAR_MIPMAP_NEAREST : Qr.LINEAR;
            break;
          case 3:
            Zr = Qr.LINEAR, ar = !0, Wr = Sr ? Qr.LINEAR_MIPMAP_LINEAR : Qr.LINEAR;
            break;
          case 8:
            ar = !0, Zr = Qr.NEAREST, Wr = Sr ? Qr.NEAREST_MIPMAP_LINEAR : Qr.NEAREST;
            break;
          case 4:
            Zr = Qr.NEAREST, Wr = Sr ? Qr.NEAREST_MIPMAP_NEAREST : Qr.NEAREST;
            break;
          case 5:
            Zr = Qr.NEAREST, Wr = Sr ? Qr.LINEAR_MIPMAP_NEAREST : Qr.LINEAR;
            break;
          case 6:
            ar = !0, Zr = Qr.NEAREST, Wr = Sr ? Qr.LINEAR_MIPMAP_LINEAR : Qr.LINEAR;
            break;
          case 7:
            Zr = Qr.NEAREST, Wr = Qr.LINEAR;
            break;
          case 1:
            Zr = Qr.NEAREST, Wr = Qr.NEAREST;
            break;
          case 9:
            Zr = Qr.LINEAR, Wr = Sr ? Qr.NEAREST_MIPMAP_NEAREST : Qr.NEAREST;
            break;
          case 10:
            ar = !0, Zr = Qr.LINEAR, Wr = Sr ? Qr.NEAREST_MIPMAP_LINEAR : Qr.NEAREST;
            break;
          case 2:
            Zr = Qr.LINEAR, Wr = Qr.LINEAR;
            break;
          case 12:
            Zr = Qr.LINEAR, Wr = Qr.NEAREST
        }
        return {
          min: Wr,
          mag: Zr,
          hasMipMaps: ar
        }
      }
      _createTexture() {
        const rr = this._gl.createTexture();
        if (!rr) throw new Error("Unable to create texture");
        return rr
      }
      _createHardwareTexture() {
        return new Ur.b(this._createTexture(), this._gl)
      }
      _createInternalTexture(rr, Sr) {
        let Qr, Zr, Wr = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          ar = !1,
          jr = 0,
          fr = 3,
          Er = 5,
          pr = !1,
          xr = 1,
          mr = !1,
          Nr = 0,
          Ur = !1;
        void 0 !== Sr && "object" === typeof Sr ? (Qr = !!Sr.generateMipMaps, ar = !!Sr.createMipMaps, jr = void 0 === Sr.type ? 0 : Sr.type, fr = void 0 === Sr.samplingMode ? 3 : Sr.samplingMode, Er = void 0 === Sr.format ? 5 : Sr.format, pr = void 0 !== Sr.useSRGBBuffer && Sr.useSRGBBuffer, xr = Sr.samples ?? 1, Zr = Sr.label, mr = !!Sr.createMSAATexture, Nr = Sr.comparisonFunction || 0, Ur = !!Sr.isCube) : Qr = !!Sr, pr && (pr = this._caps.supportSRGBBuffers && (this.tt > 1 || this.isWebGPU)), (1 !== jr || this._caps.textureFloatLinearFiltering) && (2 !== jr || this._caps.textureHalfFloatLinearFiltering) || (fr = 1), 1 !== jr || this._caps.textureFloat || (jr = 0, Ir.c.Warn("Float textures are not supported. Type forced to TEXTURETYPE_UNSIGNED_BYTE"));
        const hr = (0, Yr.d)(Er),
          zr = (0, Yr.b)(Er),
          nr = this._gl,
          er = new tr.b(this, Wr),
          Kr = rr.width || rr,
          yr = rr.height || rr,
          Br = rr.depth || 0,
          Tr = rr.layers || 0,
          vr = this._getSamplingParameters(fr, (Qr || ar) && !hr),
          Or = 0 !== Tr ? nr.TEXTURE_2D_ARRAY : 0 !== Br ? nr.TEXTURE_3D : Ur ? nr.TEXTURE_CUBE_MAP : nr.TEXTURE_2D,
          Lr = hr ? this._getInternalFormatFromDepthTextureFormat(Er, !0, zr) : this._getRGBABufferInternalSizedFormat(jr, Er, pr),
          lr = hr ? zr ? nr.DEPTH_STENCIL : nr.DEPTH_COMPONENT : this._getInternalFormat(Er),
          Xr = hr ? this._getWebGLTextureTypeFromDepthTextureFormat(Er) : this._getWebGLTextureType(jr);
        if (this._bindTextureDirectly(Or, er), 0 !== Tr) er.is2DArray = !0, nr.texImage3D(Or, 0, Lr, Kr, yr, Tr, 0, lr, Xr, null);
        else if (0 !== Br) er.is3D = !0, nr.texImage3D(Or, 0, Lr, Kr, yr, Br, 0, lr, Xr, null);
        else if (Ur) {
          er.isCube = !0;
          for (let rr = 0; rr < 6; rr++) nr.texImage2D(nr.TEXTURE_CUBE_MAP_POSITIVE_X + rr, 0, Lr, Kr, yr, 0, lr, Xr, null)
        } else nr.texImage2D(Or, 0, Lr, Kr, yr, 0, lr, Xr, null);
        if (nr.texParameteri(Or, nr.TEXTURE_MAG_FILTER, vr.mag), nr.texParameteri(Or, nr.TEXTURE_MIN_FILTER, vr.min), nr.texParameteri(Or, nr.TEXTURE_WRAP_S, nr.CLAMP_TO_EDGE), nr.texParameteri(Or, nr.TEXTURE_WRAP_T, nr.CLAMP_TO_EDGE), hr && this.tt > 1 && (0 === Nr ? (nr.texParameteri(Or, nr.TEXTURE_COMPARE_FUNC, 515), nr.texParameteri(Or, nr.TEXTURE_COMPARE_MODE, nr.NONE)) : (nr.texParameteri(Or, nr.TEXTURE_COMPARE_FUNC, Nr), nr.texParameteri(Or, nr.TEXTURE_COMPARE_MODE, nr.COMPARE_REF_TO_TEXTURE))), (Qr || ar) && this._gl.generateMipmap(Or), this._bindTextureDirectly(Or, null), er._useSRGBBuffer = pr, er.baseWidth = Kr, er.baseHeight = yr, er.width = Kr, er.height = yr, er.depth = Tr || Br, er.isReady = !0, er.samples = xr, er.generateMipMaps = Qr, er.samplingMode = fr, er.type = jr, er.format = Er, er.label = Zr, er.comparisonFunction = Nr, this._internalTexturesCache.push(er), mr) {
          let rr;
          if (rr = (0, Yr.d)(er.format) ? this._setupFramebufferDepthAttachments((0, Yr.b)(er.format), 19 !== er.format, er.width, er.height, xr, er.format, !0) : this._createRenderBuffer(er.width, er.height, xr, -1, this._getRGBABufferInternalSizedFormat(er.type, er.format, er._useSRGBBuffer), -1), !rr) throw new Error("Unable to create render buffer");
          er._autoMSAAManagement = !0;
          let Sr = er._hardwareTexture;
          Sr || (Sr = er._hardwareTexture = this._createHardwareTexture()), Sr.addMSAARenderBuffer(rr)
        }
        return er
      }
      _getUseSRGBBuffer(rr, Sr) {
        return rr && this._caps.supportSRGBBuffers && (this.tt > 1 || Sr)
      }
      createTexture(rr, Sr, Qr, Zr) {
        var Wr = this;
        let ar = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3,
          jr = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          Ir = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
          fr = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
          Er = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
          pr = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null,
          xr = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : null,
          mr = arguments.length > 11 ? arguments[11] : void 0,
          Nr = arguments.length > 12 ? arguments[12] : void 0,
          Ur = arguments.length > 13 ? arguments[13] : void 0,
          hr = arguments.length > 14 ? arguments[14] : void 0;
        return this._createTextureBase(rr, Sr, Qr, Zr, ar, jr, Ir, (function() {
          for (var rr = arguments.length, Sr = new Array(rr), Qr = 0; Qr < rr; Qr++) Sr[Qr] = arguments[Qr];
          return Wr._prepareWebGLTexture(...Sr, pr)
        }), ((rr, Sr, Qr, Wr, ar, jr) => {
          const Ir = this._gl,
            fr = Qr.width === rr && Qr.height === Sr;
          ar._creationFlags = Ur ?? 0;
          const Er = this._getTexImageParametersForCreateTexture(ar.format, ar._useSRGBBuffer);
          if (fr) return Ir.texImage2D(Ir.TEXTURE_2D, 0, Er.internalFormat, Er.format, Er.type, Qr), !1;
          const pr = this._caps.maxTextureSize;
          if (Qr.width > pr || Qr.height > pr || !this._supportsHardwareTextureRescaling) return this._prepareWorkingCanvas(), !(!this._workingCanvas || !this._workingContext) && (this._workingCanvas.width = rr, this._workingCanvas.height = Sr, this._workingContext.drawImage(Qr, 0, 0, Qr.width, Qr.height, 0, 0, rr, Sr), Ir.texImage2D(Ir.TEXTURE_2D, 0, Er.internalFormat, Er.format, Er.type, this._workingCanvas), ar.width = rr, ar.height = Sr, !1);
          {
            const rr = new tr.b(this, 2);
            this._bindTextureDirectly(Ir.TEXTURE_2D, rr, !0), Ir.texImage2D(Ir.TEXTURE_2D, 0, Er.internalFormat, Er.format, Er.type, Qr), this._rescaleTexture(rr, ar, Zr, Er.format, (() => {
              this._releaseTexture(rr), this._bindTextureDirectly(Ir.TEXTURE_2D, ar, !0), jr()
            }))
          }
          return !0
        }), fr, Er, pr, xr, mr, Nr, hr)
      }
      _getTexImageParametersForCreateTexture(rr, Sr) {
        let Qr, Zr;
        return 1 === this.tt ? (Qr = this._getInternalFormat(rr, Sr), Zr = Qr) : (Qr = this._getInternalFormat(rr, !1), Zr = this._getRGBABufferInternalSizedFormat(0, rr, Sr)), {
          internalFormat: Zr,
          format: Qr,
          type: this._gl.UNSIGNED_BYTE
        }
      }
      _rescaleTexture(rr, Sr, Qr, Zr, Wr) {}
      _unpackFlipY(rr) {
        this._unpackFlipYCached !== rr && (this._gl.pixelStorei(this._gl.UNPACK_FLIP_Y_WEBGL, rr ? 1 : 0), this.enableUnpackFlipYCached && (this._unpackFlipYCached = rr))
      }
      _getUnpackAlignement() {
        return this._gl.getParameter(this._gl.UNPACK_ALIGNMENT)
      }
      _getTextureTarget(rr) {
        return rr.isCube ? this._gl.TEXTURE_CUBE_MAP : rr.is3D ? this._gl.TEXTURE_3D : rr.is2DArray || rr.isMultiview ? this._gl.TEXTURE_2D_ARRAY : this._gl.TEXTURE_2D
      }
      updateTextureSamplingMode(rr, Sr) {
        let Qr = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const Zr = this._getTextureTarget(Sr),
          Wr = this._getSamplingParameters(rr, Sr.useMipMaps || Qr);
        this._setTextureParameterInteger(Zr, this._gl.TEXTURE_MAG_FILTER, Wr.mag, Sr), this._setTextureParameterInteger(Zr, this._gl.TEXTURE_MIN_FILTER, Wr.min), Qr && Wr.hasMipMaps && (Sr.generateMipMaps = !0, this._gl.generateMipmap(Zr)), this._bindTextureDirectly(Zr, null), Sr.samplingMode = rr
      }
      updateTextureDimensions(rr, Sr, Qr) {}
      updateTextureWrappingMode(rr, Sr) {
        let Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          Zr = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const Wr = this._getTextureTarget(rr);
        null !== Sr && (this._setTextureParameterInteger(Wr, this._gl.TEXTURE_WRAP_S, this._getTextureWrapMode(Sr), rr), rr._cachedWrapU = Sr), null !== Qr && (this._setTextureParameterInteger(Wr, this._gl.TEXTURE_WRAP_T, this._getTextureWrapMode(Qr), rr), rr._cachedWrapV = Qr), (rr.is2DArray || rr.is3D) && null !== Zr && (this._setTextureParameterInteger(Wr, this._gl.TEXTURE_WRAP_R, this._getTextureWrapMode(Zr), rr), rr._cachedWrapR = Zr), this._bindTextureDirectly(Wr, null)
      }
      _uploadCompressedDataToTextureDirectly(rr, Sr, Qr, Zr, Wr) {
        let ar = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          jr = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        const Ir = this._gl;
        let fr = Ir.TEXTURE_2D;
        if (rr.isCube && (fr = Ir.TEXTURE_CUBE_MAP_POSITIVE_X + ar), rr._useSRGBBuffer) switch (Sr) {
          case 37492:
          case 36196:
            this._caps.etc2 ? Sr = Ir.COMPRESSED_SRGB8_ETC2 : rr._useSRGBBuffer = !1;
            break;
          case 37496:
            this._caps.etc2 ? Sr = Ir.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : rr._useSRGBBuffer = !1;
            break;
          case 36492:
            Sr = Ir.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT;
            break;
          case 37808:
            Sr = Ir.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR;
            break;
          case 37809:
            Sr = Ir.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR;
            break;
          case 37810:
            Sr = Ir.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR;
            break;
          case 37811:
            Sr = Ir.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR;
            break;
          case 37812:
            Sr = Ir.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR;
            break;
          case 37813:
            Sr = Ir.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR;
            break;
          case 37814:
            Sr = Ir.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR;
            break;
          case 37815:
            Sr = Ir.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR;
            break;
          case 37816:
            Sr = Ir.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR;
            break;
          case 37817:
            Sr = Ir.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR;
            break;
          case 37818:
            Sr = Ir.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR;
            break;
          case 37819:
            Sr = Ir.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR;
            break;
          case 37820:
            Sr = Ir.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR;
            break;
          case 37821:
            Sr = Ir.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR;
            break;
          case 33776:
            this._caps.s3tc_srgb ? Sr = Ir.COMPRESSED_SRGB_S3TC_DXT1_EXT : rr._useSRGBBuffer = !1;
            break;
          case 33777:
            this._caps.s3tc_srgb ? Sr = Ir.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT : rr._useSRGBBuffer = !1;
            break;
          case 33779:
            this._caps.s3tc_srgb ? Sr = Ir.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT : rr._useSRGBBuffer = !1;
            break;
          default:
            rr._useSRGBBuffer = !1
        }
        if (rr.generateMipMaps) {
          const ar = rr._hardwareTexture;
          ar.memoryAllocated || (Ir.texStorage2D(rr.isCube ? Ir.TEXTURE_CUBE_MAP : Ir.TEXTURE_2D, Math.floor(Math.log2(Math.max(Qr, Zr))) + 1, Sr, rr.width, rr.height), ar.memoryAllocated = !0), this._gl.compressedTexSubImage2D(fr, jr, 0, 0, Qr, Zr, Sr, Wr)
        } else this._gl.compressedTexImage2D(fr, jr, Sr, Qr, Zr, 0, Wr)
      }
      _uploadDataToTextureDirectly(rr, Sr) {
        let Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Zr = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          Wr = arguments.length > 4 ? arguments[4] : void 0,
          ar = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        const jr = this._gl,
          Ir = this._getWebGLTextureType(rr.type),
          fr = this._getInternalFormat(rr.format),
          Er = void 0 === Wr ? this._getRGBABufferInternalSizedFormat(rr.type, rr.format, rr._useSRGBBuffer) : this._getInternalFormat(Wr, rr._useSRGBBuffer);
        this._unpackFlipY(rr.invertY);
        let pr = jr.TEXTURE_2D;
        rr.isCube && (pr = jr.TEXTURE_CUBE_MAP_POSITIVE_X + Qr);
        const xr = Math.round(Math.log(rr.width) * Math.LOG2E),
          mr = Math.round(Math.log(rr.height) * Math.LOG2E),
          Nr = ar ? rr.width : Math.pow(2, Math.max(xr - Zr, 0)),
          Ur = ar ? rr.height : Math.pow(2, Math.max(mr - Zr, 0));
        jr.texImage2D(pr, Zr, Er, Nr, Ur, 0, fr, Ir, Sr)
      }
      updateTextureData(rr, Sr, Qr, Zr, Wr, ar) {
        let jr = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0,
          Ir = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0,
          fr = arguments.length > 8 && void 0 !== arguments[8] && arguments[8];
        const Er = this._gl,
          pr = this._getWebGLTextureType(rr.type),
          xr = this._getInternalFormat(rr.format);
        this._unpackFlipY(rr.invertY);
        let mr = Er.TEXTURE_2D,
          Nr = Er.TEXTURE_2D;
        rr.isCube && (Nr = Er.TEXTURE_CUBE_MAP_POSITIVE_X + jr, mr = Er.TEXTURE_CUBE_MAP), this._bindTextureDirectly(mr, rr, !0), Er.texSubImage2D(Nr, Ir, Qr, Zr, Wr, ar, xr, pr, Sr), fr && this._gl.generateMipmap(Nr), this._bindTextureDirectly(mr, null)
      }
      _uploadArrayBufferViewToTexture(rr, Sr) {
        let Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Zr = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        const Wr = this._gl,
          ar = rr.isCube ? Wr.TEXTURE_CUBE_MAP : Wr.TEXTURE_2D;
        this._bindTextureDirectly(ar, rr, !0), this._uploadDataToTextureDirectly(rr, Sr, Qr, Zr), this._bindTextureDirectly(ar, null, !0)
      }
      _prepareWebGLTextureContinuation(rr, Sr, Qr, Zr, Wr) {
        const ar = this._gl;
        if (!ar) return;
        const jr = this._getSamplingParameters(Wr, !Qr);
        ar.texParameteri(ar.TEXTURE_2D, ar.TEXTURE_MAG_FILTER, jr.mag), ar.texParameteri(ar.TEXTURE_2D, ar.TEXTURE_MIN_FILTER, jr.min), Qr || Zr || ar.generateMipmap(ar.TEXTURE_2D), this._bindTextureDirectly(ar.TEXTURE_2D, null), Sr && Sr.removePendingData(rr), rr.onLoadedObservable.notifyObservers(rr), rr.onLoadedObservable.clear()
      }
      _prepareWebGLTexture(rr, Sr, Qr, Zr, Wr, ar, jr, Ir, fr, Er) {
        const pr = this.getCaps().maxTextureSize,
          xr = Math.min(pr, this.needPOTTextures ? (0, Nr.h)(Zr.width, pr) : Zr.width),
          mr = Math.min(pr, this.needPOTTextures ? (0, Nr.h)(Zr.height, pr) : Zr.height),
          Ur = this._gl;
        Ur && (rr._hardwareTexture ? (this._bindTextureDirectly(Ur.TEXTURE_2D, rr, !0), this._unpackFlipY(void 0 === Wr || !!Wr), rr.baseWidth = Zr.width, rr.baseHeight = Zr.height, rr.width = xr, rr.height = mr, rr.isReady = !0, rr.type = -1 !== rr.type ? rr.type : 0, rr.format = -1 !== rr.format ? rr.format : Er ?? (".jpg" !== Sr || rr._useSRGBBuffer ? 5 : 4), Ir(xr, mr, Zr, Sr, rr, (() => {
          this._prepareWebGLTextureContinuation(rr, Qr, ar, jr, fr)
        })) || this._prepareWebGLTextureContinuation(rr, Qr, ar, jr, fr)) : Qr && Qr.removePendingData(rr))
      }
      _getInternalFormatFromDepthTextureFormat(rr, Sr, Qr) {
        const Zr = this._gl;
        if (!Sr) return Zr.STENCIL_INDEX8;
        let Wr = Qr ? Zr.DEPTH_STENCIL : Zr.DEPTH_COMPONENT;
        return this.tt > 1 ? 15 === rr ? Wr = Zr.DEPTH_COMPONENT16 : 16 === rr ? Wr = Zr.DEPTH_COMPONENT24 : 17 === rr || 13 === rr ? Wr = Qr ? Zr.DEPTH24_STENCIL8 : Zr.DEPTH_COMPONENT24 : 14 === rr ? Wr = Zr.DEPTH_COMPONENT32F : 18 === rr && (Wr = Qr ? Zr.DEPTH32F_STENCIL8 : Zr.DEPTH_COMPONENT32F) : Wr = Zr.DEPTH_COMPONENT16, Wr
      }
      _getWebGLTextureTypeFromDepthTextureFormat(rr) {
        const Sr = this._gl;
        let Qr = Sr.UNSIGNED_INT;
        return 15 === rr ? Qr = Sr.UNSIGNED_SHORT : 17 === rr || 13 === rr ? Qr = Sr.UNSIGNED_INT_24_8 : 14 === rr ? Qr = Sr.FLOAT : 18 === rr ? Qr = Sr.FLOAT_32_UNSIGNED_INT_24_8_REV : 19 === rr && (Qr = Sr.UNSIGNED_BYTE), Qr
      }
      _setupFramebufferDepthAttachments(rr, Sr, Qr, Zr) {
        let Wr = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
          ar = arguments.length > 5 ? arguments[5] : void 0,
          jr = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        const Ir = this._gl;
        ar = ar ?? (rr ? 13 : 14);
        const fr = this._getInternalFormatFromDepthTextureFormat(ar, Sr, rr);
        return rr && Sr ? this._createRenderBuffer(Qr, Zr, Wr, Ir.DEPTH_STENCIL, fr, jr ? -1 : Ir.DEPTH_STENCIL_ATTACHMENT) : Sr ? this._createRenderBuffer(Qr, Zr, Wr, fr, fr, jr ? -1 : Ir.DEPTH_ATTACHMENT) : rr ? this._createRenderBuffer(Qr, Zr, Wr, fr, fr, jr ? -1 : Ir.STENCIL_ATTACHMENT) : null
      }
      _createRenderBuffer(rr, Sr, Qr, Zr, Wr, ar) {
        let jr = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6];
        const Ir = this._gl.createRenderbuffer();
        return this._updateRenderBuffer(Ir, rr, Sr, Qr, Zr, Wr, ar, jr)
      }
      _updateRenderBuffer(rr, Sr, Qr, Zr, Wr, ar, jr) {
        let Ir = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7];
        const fr = this._gl;
        return fr.bindRenderbuffer(fr.RENDERBUFFER, rr), Zr > 1 && fr.renderbufferStorageMultisample ? fr.renderbufferStorageMultisample(fr.RENDERBUFFER, Zr, ar, Sr, Qr) : fr.renderbufferStorage(fr.RENDERBUFFER, Wr, Sr, Qr), -1 !== jr && fr.framebufferRenderbuffer(fr.FRAMEBUFFER, jr, fr.RENDERBUFFER, rr), Ir && fr.bindRenderbuffer(fr.RENDERBUFFER, null), rr
      }
      _releaseTexture(rr) {
        this._deleteTexture(rr._hardwareTexture), this.unbindAllTextures();
        const Sr = this._internalTexturesCache.indexOf(rr); - 1 !== Sr && this._internalTexturesCache.splice(Sr, 1), rr._lodTextureHigh && rr._lodTextureHigh.dispose(), rr._lodTextureMid && rr._lodTextureMid.dispose(), rr._lodTextureLow && rr._lodTextureLow.dispose(), rr._irradianceTexture && rr._irradianceTexture.dispose()
      }
      _deleteTexture(rr) {
        rr?.release()
      }
      _setProgram(rr) {
        this._currentProgram !== rr && ((0, Wr.u)(rr, this._gl), this._currentProgram = rr)
      }
      bindSamplers(rr) {
        const Sr = rr.getPipelineContext();
        this._setProgram(Sr.program);
        const Qr = rr.getSamplers();
        for (let Zr = 0; Zr < Qr.length; Zr++) {
          const Sr = rr.getUniform(Qr[Zr]);
          Sr && (this._boundUniforms[Zr] = Sr)
        }
        this._currentEffect = null
      }
      _activateCurrentTexture() {
        this._currentTextureChannel !== this._activeChannel && (this._gl.activeTexture(this._gl.TEXTURE0 + this._activeChannel), this._currentTextureChannel = this._activeChannel)
      }
      _bindTextureDirectly(rr, Sr) {
        let Qr = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Zr = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          Wr = !1;
        const ar = Sr && Sr._associatedChannel > -1;
        Qr && ar && (this._activeChannel = Sr._associatedChannel);
        if (this._boundTexturesCache[this._activeChannel] !== Sr || Zr) {
          if (this._activateCurrentTexture(), Sr && Sr.isMultiview) throw Ir.c.Error(["_bindTextureDirectly called with a multiview texture!", rr, Sr]), "_bindTextureDirectly called with a multiview texture!";
          this._gl.bindTexture(rr, Sr?._hardwareTexture?.underlyingResource ?? null), this._boundTexturesCache[this._activeChannel] = Sr, Sr && (Sr._associatedChannel = this._activeChannel)
        } else Qr && (Wr = !0, this._activateCurrentTexture());
        return ar && !Qr && this._bindSamplerUniformToChannel(Sr._associatedChannel, this._activeChannel), Wr
      }
      _bindTexture(rr, Sr, Qr) {
        if (void 0 === rr) return;
        Sr && (Sr._associatedChannel = rr), this._activeChannel = rr;
        const Zr = Sr ? this._getTextureTarget(Sr) : this._gl.TEXTURE_2D;
        this._bindTextureDirectly(Zr, Sr)
      }
      unbindAllTextures() {
        for (let rr = 0; rr < this._maxSimultaneousTextures; rr++) this._activeChannel = rr, this._bindTextureDirectly(this._gl.TEXTURE_2D, null), this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null), this.tt > 1 && (this._bindTextureDirectly(this._gl.TEXTURE_3D, null), this._bindTextureDirectly(this._gl.TEXTURE_2D_ARRAY, null))
      }
      setTexture(rr, Sr, Qr, Zr) {
        void 0 !== rr && (Sr && (this._boundUniforms[rr] = Sr), this._setTexture(rr, Qr))
      }
      _bindSamplerUniformToChannel(rr, Sr) {
        const Qr = this._boundUniforms[rr];
        Qr && Qr._currentState !== Sr && (this._gl.uniform1i(Qr, Sr), Qr._currentState = Sr)
      }
      _getTextureWrapMode(rr) {
        switch (rr) {
          case 1:
            return this._gl.REPEAT;
          case 0:
            return this._gl.CLAMP_TO_EDGE;
          case 2:
            return this._gl.MIRRORED_REPEAT
        }
        return this._gl.REPEAT
      }
      _setTexture(rr, Sr) {
        let Qr, Zr = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Wr = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (!Sr) return null != this._boundTexturesCache[rr] && (this._activeChannel = rr, this._bindTextureDirectly(this._gl.TEXTURE_2D, null), this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null), this.tt > 1 && (this._bindTextureDirectly(this._gl.TEXTURE_3D, null), this._bindTextureDirectly(this._gl.TEXTURE_2D_ARRAY, null))), !1;
        if (Sr.video) {
          this._activeChannel = rr;
          const Qr = Sr.getInternalTexture();
          Qr && (Qr._associatedChannel = rr), Sr.update()
        } else if (4 === Sr.delayLoadState) return Sr.delayLoad(), !1;
        Qr = Wr ? Sr.depthStencilTexture : Sr.isReady() ? Sr.getInternalTexture() : Sr.isCube ? this.emptyCubeTexture : Sr.is3D ? this.emptyTexture3D : Sr.is2DArray ? this.emptyTexture2DArray : this.emptyTexture, !Zr && Qr && (Qr._associatedChannel = rr);
        let ar = !0;
        this._boundTexturesCache[rr] === Qr && (Zr || this._bindSamplerUniformToChannel(Qr._associatedChannel, rr), ar = !1), this._activeChannel = rr;
        const jr = this._getTextureTarget(Qr);
        if (ar && this._bindTextureDirectly(jr, Qr, Zr), Qr && !Qr.isMultiview) {
          if (Qr.isCube && Qr._cachedCoordinatesMode !== Sr.coordinatesMode) {
            Qr._cachedCoordinatesMode = Sr.coordinatesMode;
            const rr = 3 !== Sr.coordinatesMode && 5 !== Sr.coordinatesMode ? 1 : 0;
            Sr.wrapU = rr, Sr.wrapV = rr
          }
          Qr._cachedWrapU !== Sr.wrapU && (Qr._cachedWrapU = Sr.wrapU, this._setTextureParameterInteger(jr, this._gl.TEXTURE_WRAP_S, this._getTextureWrapMode(Sr.wrapU), Qr)), Qr._cachedWrapV !== Sr.wrapV && (Qr._cachedWrapV = Sr.wrapV, this._setTextureParameterInteger(jr, this._gl.TEXTURE_WRAP_T, this._getTextureWrapMode(Sr.wrapV), Qr)), Qr.is3D && Qr._cachedWrapR !== Sr.wrapR && (Qr._cachedWrapR = Sr.wrapR, this._setTextureParameterInteger(jr, this._gl.TEXTURE_WRAP_R, this._getTextureWrapMode(Sr.wrapR), Qr)), this._setAnisotropicLevel(jr, Qr, Sr.anisotropicFilteringLevel)
        }
        return !0
      }
      setTextureArray(rr, Sr, Qr, Zr) {
        if (void 0 !== rr && Sr) {
          this._textureUnits && this._textureUnits.length === Qr.length || (this._textureUnits = new Int32Array(Qr.length));
          for (let Sr = 0; Sr < Qr.length; Sr++) {
            const Zr = Qr[Sr].getInternalTexture();
            Zr ? (this._textureUnits[Sr] = rr + Sr, Zr._associatedChannel = rr + Sr) : this._textureUnits[Sr] = -1
          }
          this._gl.uniform1iv(Sr, this._textureUnits);
          for (let rr = 0; rr < Qr.length; rr++) this._setTexture(this._textureUnits[rr], Qr[rr], !0)
        }
      }
      _setAnisotropicLevel(rr, Sr, Qr) {
        const Zr = this._caps.textureAnisotropicFilterExtension;
        11 !== Sr.samplingMode && 3 !== Sr.samplingMode && 2 !== Sr.samplingMode && (Qr = 1), Zr && Sr._cachedAnisotropicFilteringLevel !== Qr && (this._setTextureParameterFloat(rr, Zr.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(Qr, this._caps.maxAnisotropy), Sr), Sr._cachedAnisotropicFilteringLevel = Qr)
      }
      _setTextureParameterFloat(rr, Sr, Qr, Zr) {
        this._bindTextureDirectly(rr, Zr, !0, !0), this._gl.texParameterf(rr, Sr, Qr)
      }
      _setTextureParameterInteger(rr, Sr, Qr, Zr) {
        Zr && this._bindTextureDirectly(rr, Zr, !0, !0), this._gl.texParameteri(rr, Sr, Qr)
      }
      unbindAllAttributes() {
        if (this._mustWipeVertexAttributes) {
          this._mustWipeVertexAttributes = !1;
          for (let rr = 0; rr < this._caps.maxVertexAttribs; rr++) this.disableAttributeByIndex(rr)
        } else
          for (let rr = 0, Sr = this._vertexAttribArraysEnabled.length; rr < Sr; rr++) rr >= this._caps.maxVertexAttribs || !this._vertexAttribArraysEnabled[rr] || this.disableAttributeByIndex(rr)
      }
      releaseEffects() {
        this._compiledEffects = {}, this.onReleaseEffectsObservable.notifyObservers(this)
      }
      dispose() {
        (0, fr.m)() && this._renderingCanvas && (this._renderingCanvas.removeEventListener("webglcontextlost", this._onContextLost), this._onContextRestored && this._renderingCanvas.removeEventListener("webglcontextrestored", this._onContextRestored)), super.dispose(), this._dummyFramebuffer && this._gl.deleteFramebuffer(this._dummyFramebuffer), this.unbindAllAttributes(), this._boundUniforms = {}, this._workingCanvas = null, this._workingContext = null, this._currentBufferPointers.length = 0, this._currentProgram = null, this._creationOptions.loseContextOnDispose && this._gl.getExtension("WEBGL_lose_context")?.loseContext(), (0, Wr.C)(this._gl)
      }
      attachContextLostEvent(rr) {
        this._renderingCanvas && this._renderingCanvas.addEventListener("webglcontextlost", rr, !1)
      }
      attachContextRestoredEvent(rr) {
        this._renderingCanvas && this._renderingCanvas.addEventListener("webglcontextrestored", rr, !1)
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
      _canRenderToFramebuffer(rr) {
        const Sr = this._gl;
        for (; Sr.getError() !== Sr.NO_ERROR;);
        let Qr = !0;
        const Zr = Sr.createTexture();
        Sr.bindTexture(Sr.TEXTURE_2D, Zr), Sr.texImage2D(Sr.TEXTURE_2D, 0, this._getRGBABufferInternalSizedFormat(rr), 1, 1, 0, Sr.RGBA, this._getWebGLTextureType(rr), null), Sr.texParameteri(Sr.TEXTURE_2D, Sr.TEXTURE_MIN_FILTER, Sr.NEAREST), Sr.texParameteri(Sr.TEXTURE_2D, Sr.TEXTURE_MAG_FILTER, Sr.NEAREST);
        const Wr = Sr.createFramebuffer();
        Sr.bindFramebuffer(Sr.FRAMEBUFFER, Wr), Sr.framebufferTexture2D(Sr.FRAMEBUFFER, Sr.COLOR_ATTACHMENT0, Sr.TEXTURE_2D, Zr, 0);
        const ar = Sr.checkFramebufferStatus(Sr.FRAMEBUFFER);
        if (Qr = Qr && ar === Sr.FRAMEBUFFER_COMPLETE, Qr = Qr && Sr.getError() === Sr.NO_ERROR, Qr && (Sr.clear(Sr.COLOR_BUFFER_BIT), Qr = Qr && Sr.getError() === Sr.NO_ERROR), Qr) {
          Sr.bindFramebuffer(Sr.FRAMEBUFFER, null);
          const rr = Sr.RGBA,
            Zr = Sr.UNSIGNED_BYTE,
            Wr = new Uint8Array(4);
          Sr.readPixels(0, 0, 1, 1, rr, Zr, Wr), Qr = Qr && Sr.getError() === Sr.NO_ERROR
        }
        for (Sr.deleteTexture(Zr), Sr.deleteFramebuffer(Wr), Sr.bindFramebuffer(Sr.FRAMEBUFFER, null); !Qr && Sr.getError() !== Sr.NO_ERROR;);
        return Qr
      }
      _getWebGLTextureType(rr) {
        if (1 === this._webGLVersion) {
          switch (rr) {
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
        switch (rr) {
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
      _getInternalFormat(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          Qr = Sr ? this._glSRGBExtensionValues.SRGB8_ALPHA8 : this._gl.RGBA;
        switch (rr) {
          case 0:
            Qr = this._gl.ALPHA;
            break;
          case 1:
            Qr = this._gl.LUMINANCE;
            break;
          case 2:
            Qr = this._gl.LUMINANCE_ALPHA;
            break;
          case 6:
          case 33322:
          case 36760:
            Qr = this._gl.RED;
            break;
          case 7:
          case 33324:
          case 36761:
            Qr = this._gl.RG;
            break;
          case 4:
          case 32852:
          case 36762:
            Qr = Sr ? this._glSRGBExtensionValues.SRGB : this._gl.RGB;
            break;
          case 5:
          case 32859:
          case 36763:
            Qr = Sr ? this._glSRGBExtensionValues.SRGB8_ALPHA8 : this._gl.RGBA
        }
        if (this._webGLVersion > 1) switch (rr) {
          case 8:
            Qr = this._gl.RED_INTEGER;
            break;
          case 9:
            Qr = this._gl.RG_INTEGER;
            break;
          case 10:
            Qr = this._gl.RGB_INTEGER;
            break;
          case 11:
            Qr = this._gl.RGBA_INTEGER
        }
        return Qr
      }
      _getRGBABufferInternalSizedFormat(rr, Sr) {
        let Qr = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (1 === this._webGLVersion) {
          if (void 0 !== Sr) switch (Sr) {
            case 0:
              return this._gl.ALPHA;
            case 1:
              return this._gl.LUMINANCE;
            case 2:
              return this._gl.LUMINANCE_ALPHA;
            case 4:
              return Qr ? this._glSRGBExtensionValues.SRGB : this._gl.RGB
          }
          return this._gl.RGBA
        }
        switch (rr) {
          case 3:
            switch (Sr) {
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
            switch (Sr) {
              case 6:
                return this._gl.R8;
              case 7:
                return this._gl.RG8;
              case 4:
                return Qr ? this._glSRGBExtensionValues.SRGB8 : this._gl.RGB8;
              case 5:
                return Qr ? this._glSRGBExtensionValues.SRGB8_ALPHA8 : this._gl.RGBA8;
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
            switch (Sr) {
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
            switch (Sr) {
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
            switch (Sr) {
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
            switch (Sr) {
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
            switch (Sr) {
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
            switch (Sr) {
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
            switch (Sr) {
              case 5:
              default:
                return this._gl.RGB10_A2;
              case 11:
                return this._gl.RGB10_A2UI
            }
        }
        return Qr ? this._glSRGBExtensionValues.SRGB8_ALPHA8 : this._gl.RGBA8
      }
      readPixels(rr, Sr, Qr, Zr) {
        let Wr = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          ar = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          jr = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
        const fr = Wr ? 4 : 3,
          Er = Wr ? this._gl.RGBA : this._gl.RGB,
          pr = Qr * Zr * fr;
        if (jr) {
          if (jr.length < pr) return Ir.c.Error(`Data buffer is too small to store the read pixels (${jr.length} should be more than ${pr})`), Promise.resolve(jr)
        } else jr = new Uint8Array(pr);
        return ar && this.flushFramebuffer(), this._gl.readPixels(rr, Sr, Qr, Zr, Er, this._gl.UNSIGNED_BYTE, jr), Promise.resolve(jr)
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
          const rr = ar.e._CreateCanvas(1, 1),
            Sr = rr.getContext("webgl") || rr.getContext("experimental-webgl");
          this._IsSupported = null != Sr && !!globalThis.WebGLRenderingContext
        } catch (rr) {
          this._IsSupported = !1
        }
        return this._IsSupported
      }
      static get HasMajorPerformanceCaveat() {
        if (null === this._HasMajorPerformanceCaveat) try {
          const rr = ar.e._CreateCanvas(1, 1),
            Sr = rr.getContext("webgl", {
              failIfMajorPerformanceCaveat: !0
            }) || rr.getContext("experimental-webgl", {
              failIfMajorPerformanceCaveat: !0
            });
          this._HasMajorPerformanceCaveat = !Sr
        } catch (rr) {
          this._HasMajorPerformanceCaveat = !1
        }
        return this._HasMajorPerformanceCaveat
      }
    }
    Kr._TempClearColorUint32 = new Uint32Array(4), Kr._TempClearColorInt32 = new Int32Array(4), Kr._TempClearColorFloat32 = new Float32Array(4), Kr.ExceptionList = [{
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
    }], Kr._ConcatenateShader = hr.f, Kr._IsSupported = null, Kr._HasMajorPerformanceCaveat = null
  },
  42036: (rr, Sr, Qr) => {
    var Zr;
    Qr.d(Sr, {
        b: () => Wr
      }),
      function(rr) {
        rr[rr.PointerMove = 0] = "PointerMove", rr[rr.PointerDown = 1] = "PointerDown", rr[rr.PointerUp = 2] = "PointerUp"
      }(Zr || (Zr = {}));
    class Wr {}
    Wr.DOM_DELTA_PIXEL = 0, Wr.DOM_DELTA_LINE = 1, Wr.DOM_DELTA_PAGE = 2
  },
  42031: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      e: () => Zr,
      f: () => ar,
      j: () => Wr
    });
    class Zr {}
    Zr.KEYDOWN = 1, Zr.KEYUP = 2;
    class Wr {
      constructor(rr, Sr) {
        this.type = rr, this.event = Sr
      }
    }
    class ar extends Wr {
      get skipOnPointerObservable() {
        return this.skipOnKeyboardObservable
      }
      set skipOnPointerObservable(rr) {
        this.skipOnKeyboardObservable = rr
      }
      constructor(rr, Sr) {
        super(rr, Sr), this.type = rr, this.event = Sr, this.skipOnKeyboardObservable = !1
      }
    }
  },
  42028: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      b: () => Wr,
      c: () => jr,
      f: () => Ir
    });
    var Zr = Qr(38560);
    class Wr {}
    Wr.POINTERDOWN = 1, Wr.POINTERUP = 2, Wr.POINTERMOVE = 4, Wr.POINTERWHEEL = 8, Wr.POINTERPICK = 16, Wr.POINTERTAP = 32, Wr.POINTERDOUBLETAP = 64;
    class ar {
      constructor(rr, Sr) {
        this.type = rr, this.event = Sr
      }
    }
    class jr extends ar {
      constructor(rr, Sr, Qr, Wr) {
        super(rr, Sr), this.ray = null, this.originalPickingInfo = null, this.skipOnPointerObservable = !1, this.localPosition = new Zr.q(Qr, Wr)
      }
    }
    class Ir extends ar {
      get pickInfo() {
        return this._pickInfo || this._generatePickInfo(), this._pickInfo
      }
      constructor(rr, Sr, Qr) {
        let Zr = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        super(rr, Sr), this._pickInfo = Qr, this._inputManager = Zr
      }
      _generatePickInfo() {
        this._inputManager && (this._pickInfo = this._inputManager._pickMove(this.event), this._inputManager._setRayOnPointerInfo(this._pickInfo, this.event), this._inputManager = null)
      }
    }
  },
  42044: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      b: () => Zr
    });
    class Zr {
      static CompareLightsPriority(rr, Sr) {
        return rr.shadowEnabled !== Sr.shadowEnabled ? (Sr.shadowEnabled ? 1 : 0) - (rr.shadowEnabled ? 1 : 0) : Sr.renderPriority - rr.renderPriority
      }
    }
    Zr.FALLOFF_DEFAULT = 0, Zr.FALLOFF_PHYSICAL = 1, Zr.FALLOFF_GLTF = 2, Zr.FALLOFF_STANDARD = 3, Zr.LIGHTMAP_DEFAULT = 0, Zr.LIGHTMAP_SPECULAR = 1, Zr.LIGHTMAP_SHADOWSONLY = 2, Zr.INTENSITYMODE_AUTOMATIC = 0, Zr.INTENSITYMODE_LUMINOUSPOWER = 1, Zr.INTENSITYMODE_LUMINOUSINTENSITY = 2, Zr.INTENSITYMODE_ILLUMINANCE = 3, Zr.INTENSITYMODE_LUMINANCE = 4, Zr.LIGHTTYPEID_POINTLIGHT = 0, Zr.LIGHTTYPEID_DIRECTIONALLIGHT = 1, Zr.LIGHTTYPEID_SPOTLIGHT = 2, Zr.LIGHTTYPEID_HEMISPHERICLIGHT = 3, Zr.LIGHTTYPEID_RECT_AREALIGHT = 4, Zr.LIGHTTYPEID_CLUSTERED_CONTAINER = 5
  },
  41731: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      b: () => jr
    });
    var Zr, Wr = Qr(38595),
      ar = Qr(41735);
    ! function(rr) {
      rr[rr.Unknown = 0] = "Unknown", rr[rr.Url = 1] = "Url", rr[rr.Temp = 2] = "Temp", rr[rr.Raw = 3] = "Raw", rr[rr.Dynamic = 4] = "Dynamic", rr[rr.RenderTarget = 5] = "RenderTarget", rr[rr.MultiRenderTarget = 6] = "MultiRenderTarget", rr[rr.Cube = 7] = "Cube", rr[rr.CubeRaw = 8] = "CubeRaw", rr[rr.CubePrefiltered = 9] = "CubePrefiltered", rr[rr.Raw3D = 10] = "Raw3D", rr[rr.Raw2DArray = 11] = "Raw2DArray", rr[rr.DepthStencil = 12] = "DepthStencil", rr[rr.CubeRawRGBD = 13] = "CubeRawRGBD", rr[rr.Depth = 14] = "Depth", rr[rr.External = 15] = "External"
    }(Zr || (Zr = {}));
    class jr extends ar.b {
      get useMipMaps() {
        return null === this._useMipMaps ? this.generateMipMaps : this._useMipMaps
      }
      set useMipMaps(rr) {
        this._useMipMaps = rr
      }
      get uniqueId() {
        return this._uniqueId
      }
      _setUniqueId(rr) {
        this._uniqueId = rr
      }
      MU() {
        return this._engine
      }
      get source() {
        return this._source
      }
      constructor(rr, Sr) {
        let Qr = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        super(), this.isReady = !1, this.isCube = !1, this.is3D = !1, this.is2DArray = !1, this.isMultiview = !1, this.url = "", this.generateMipMaps = !1, this._useMipMaps = null, this.mipLevelCount = 1, this.samples = 0, this.type = -1, this.format = -1, this.onLoadedObservable = new Wr.d, this.onErrorObservable = new Wr.d, this.onRebuildCallback = null, this.width = 0, this.height = 0, this.depth = 0, this.baseWidth = 0, this.baseHeight = 0, this.baseDepth = 0, this.invertY = !1, this._invertVScale = !1, this._associatedChannel = -1, this._source = 0, this._buffer = null, this._bufferView = null, this._bufferViewArray = null, this._bufferViewArrayArray = null, this._size = 0, this._extension = "", this._files = null, this._workingCanvas = null, this._workingContext = null, this._cachedCoordinatesMode = null, this._isDisabled = !1, this._compression = null, this._sphericalPolynomial = null, this._sphericalPolynomialPromise = null, this._sphericalPolynomialComputed = !1, this._lodGenerationScale = 0, this._lodGenerationOffset = 0, this._useSRGBBuffer = !1, this._creationFlags = 0, this._lodTextureHigh = null, this._lodTextureMid = null, this._lodTextureLow = null, this._isRGBD = !1, this._linearSpecularLOD = !1, this._irradianceTexture = null, this._hardwareTexture = null, this._maxLodLevel = null, this._references = 1, this._gammaSpace = null, this._premulAlpha = !1, this._dynamicTextureSource = null, this._autoMSAAManagement = !1, this._engine = rr, this._source = Sr, this._uniqueId = jr._Counter++, Qr || (this._hardwareTexture = rr._createHardwareTexture())
      }
      incrementReferences() {
        this._references++
      }
      updateSize(rr, Sr) {
        let Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        this._engine.updateTextureDimensions(this, rr, Sr, Qr), this.width = rr, this.height = Sr, this.depth = Qr, this.baseWidth = rr, this.baseHeight = Sr, this.baseDepth = Qr, this._size = rr * Sr * Qr
      }
      _rebuild() {
        if (this.isReady = !1, this._cachedCoordinatesMode = null, this._cachedWrapU = null, this._cachedWrapV = null, this._cachedWrapR = null, this._cachedAnisotropicFilteringLevel = null, this.onRebuildCallback) {
          const rr = this.onRebuildCallback(this),
            Sr = Sr => {
              Sr._swapAndDie(this, !1), this.isReady = rr.isReady
            };
          return void(rr.isAsync ? rr.proxy.then(Sr) : Sr(rr.proxy))
        }
        let rr;
        switch (this.source) {
          case 2:
          case 12:
          case 14:
          case 15:
            break;
          case 1:
            return void(rr = this._engine.createTexture(this._originalUrl ?? this.url, !this.generateMipMaps, this.invertY, null, this.samplingMode, (rr => {
              rr._swapAndDie(this, !1), this.isReady = !0
            }), null, this._buffer, void 0, this.format, this._extension, void 0, void 0, void 0, this._useSRGBBuffer));
          case 3:
            if (rr = this._engine.createRawTexture(this._bufferView, this.baseWidth, this.baseHeight, this.format, this.generateMipMaps, this.invertY, this.samplingMode, this._compression, this.type, this._creationFlags, this._useSRGBBuffer, this.mipLevelCount), rr._swapAndDie(this, !1), this._bufferViewArray)
              for (let rr = 0; rr < this._bufferViewArray.length; rr++) {
                const Sr = this._bufferViewArray[rr];
                Sr && this._engine.updateRawTexture(this, Sr, this.format, this.invertY, this._compression, this.type, this._useSRGBBuffer, rr)
              }
            this.isReady = !0;
            break;
          case 10:
            rr = this._engine.createRawTexture3D(this._bufferView, this.baseWidth, this.baseHeight, this.baseDepth, this.format, this.generateMipMaps, this.invertY, this.samplingMode, this._compression, this.type), rr._swapAndDie(this, !1), this.isReady = !0;
            break;
          case 11:
            if (rr = this._engine.createRawTexture2DArray(this._bufferView, this.baseWidth, this.baseHeight, this.baseDepth, this.format, this.generateMipMaps, this.invertY, this.samplingMode, this._compression, this.type, this._creationFlags, this.mipLevelCount), rr._swapAndDie(this, !1), this._bufferViewArray)
              for (let rr = 0; rr < this._bufferViewArray.length; rr++) {
                const Sr = this._bufferViewArray[rr];
                Sr && this._engine.updateRawTexture2DArray(this, Sr, this.format, this.invertY, this._compression, this.type, rr)
              }
            this.isReady = !0;
            break;
          case 4:
            rr = this._engine.createDynamicTexture(this.baseWidth, this.baseHeight, this.generateMipMaps, this.samplingMode), rr._swapAndDie(this, !1), this._dynamicTextureSource && this._engine.updateDynamicTexture(this, this._dynamicTextureSource, this.invertY, this._premulAlpha, this.format, !0);
            break;
          case 7:
            return void(rr = this._engine.createCubeTexture(this.url, null, this._files, !this.generateMipMaps, (() => {
              rr._swapAndDie(this, !1), this.isReady = !0
            }), null, this.format, this._extension, !1, 0, 0, null, void 0, this._useSRGBBuffer, ArrayBuffer.isView(this._buffer) ? this._buffer : null));
          case 8:
            rr = this._engine.createRawCubeTexture(this._bufferViewArray, this.width, this._originalFormat ?? this.format, this.type, this.generateMipMaps, this.invertY, this.samplingMode, this._compression), rr._swapAndDie(this, !1), this.isReady = !0;
            break;
          case 13:
            return;
          case 9:
            return rr = this._engine.createPrefilteredCubeTexture(this.url, null, this._lodGenerationScale, this._lodGenerationOffset, (rr => {
              rr && rr._swapAndDie(this, !1), this.isReady = !0
            }), null, this.format, this._extension, void 0, ArrayBuffer.isView(this._buffer) ? this._buffer : null), void(rr._sphericalPolynomial = this._sphericalPolynomial)
        }
      }
      _swapAndDie(rr) {
        let Sr = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this._hardwareTexture?.setUsage(rr._source, this.generateMipMaps, this.is2DArray, this.isCube, this.is3D, this.width, this.height, this.depth), rr._hardwareTexture = this._hardwareTexture, rr._setUniqueId(jr._Counter++), Sr && (rr._isRGBD = this._isRGBD), this._lodTextureHigh && (rr._lodTextureHigh && rr._lodTextureHigh.dispose(), rr._lodTextureHigh = this._lodTextureHigh), this._lodTextureMid && (rr._lodTextureMid && rr._lodTextureMid.dispose(), rr._lodTextureMid = this._lodTextureMid), this._lodTextureLow && (rr._lodTextureLow && rr._lodTextureLow.dispose(), rr._lodTextureLow = this._lodTextureLow), this._irradianceTexture && (rr._irradianceTexture && rr._irradianceTexture.dispose(), rr._irradianceTexture = this._irradianceTexture);
        const Qr = this._engine.getLoadedTexturesCache();
        let Zr = Qr.indexOf(this); - 1 !== Zr && Qr.splice(Zr, 1), Zr = Qr.indexOf(rr), -1 === Zr && Qr.push(rr)
      }
      dispose() {
        this._references--, 0 === this._references && (this.onLoadedObservable.clear(), this.onErrorObservable.clear(), this._engine._releaseTexture(this), this._hardwareTexture = null, this._dynamicTextureSource = null)
      }
    }
    jr._Counter = 0
  },
  41827: (rr, Sr, Qr) => {
    function Zr(rr) {
      return 13 === rr || 14 === rr || 15 === rr || 16 === rr || 17 === rr || 18 === rr || 19 === rr
    }

    function Wr(rr) {
      return 8 === rr || 9 === rr || 10 === rr || 11 === rr
    }

    function ar(rr) {
      return 0 === rr || 5 === rr || 7 === rr || 11 === rr
    }

    function jr(rr) {
      return 13 === rr || 17 === rr || 18 === rr || 19 === rr
    }
    Qr.d(Sr, {
      b: () => jr,
      d: () => Zr,
      e: () => Wr,
      g: () => ar
    })
  },
  41735: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      b: () => Zr
    });
    class Zr {
      get wrapU() {
        return this._cachedWrapU
      }
      set wrapU(rr) {
        this._cachedWrapU = rr
      }
      get wrapV() {
        return this._cachedWrapV
      }
      set wrapV(rr) {
        this._cachedWrapV = rr
      }
      get wrapR() {
        return this._cachedWrapR
      }
      set wrapR(rr) {
        this._cachedWrapR = rr
      }
      get anisotropicFilteringLevel() {
        return this._cachedAnisotropicFilteringLevel
      }
      set anisotropicFilteringLevel(rr) {
        this._cachedAnisotropicFilteringLevel = rr
      }
      get comparisonFunction() {
        return this._comparisonFunction
      }
      set comparisonFunction(rr) {
        this._comparisonFunction = rr
      }
      get useMipMaps() {
        return this._useMipMaps
      }
      set useMipMaps(rr) {
        this._useMipMaps = rr
      }
      constructor() {
        this.samplingMode = -1, this._useMipMaps = !0, this._cachedWrapU = null, this._cachedWrapV = null, this._cachedWrapR = null, this._cachedAnisotropicFilteringLevel = null, this._comparisonFunction = 0
      }
      setParameters() {
        let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          Zr = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          Wr = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 2,
          ar = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
        return this._cachedWrapU = rr, this._cachedWrapV = Sr, this._cachedWrapR = Qr, this._cachedAnisotropicFilteringLevel = Zr, this.samplingMode = Wr, this._comparisonFunction = ar, this
      }
      compareSampler(rr) {
        return this._cachedWrapU === rr._cachedWrapU && this._cachedWrapV === rr._cachedWrapV && this._cachedWrapR === rr._cachedWrapR && this._cachedAnisotropicFilteringLevel === rr._cachedAnisotropicFilteringLevel && this.samplingMode === rr.samplingMode && this._comparisonFunction === rr._comparisonFunction && this._useMipMaps === rr._useMipMaps
      }
    }
  },
  41971: (rr, Sr, Qr) => {
    function Zr(rr) {
      rr.push("vCameraColorCurveNeutral", "vCameraColorCurvePositive", "vCameraColorCurveNegative")
    }
    Qr.d(Sr, {
      d: () => Zr
    })
  },
  41796: (rr, Sr, Qr) => {
    function Zr(rr) {
      return void 0 === rr.getPipelineContext
    }
    Qr.d(Sr, {
      d: () => Zr
    })
  },
  42165: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      b: () => Wr
    });
    var Zr = Qr(41781);
    class Wr {
      static GetEffect(rr) {
        return void 0 === rr.getPipelineContext ? rr.effect : rr
      }
      constructor(rr) {
        let Sr = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this._wasPreviouslyReady = !1, this._forceRebindOnNextCall = !0, this._wasPreviouslyUsingInstances = null, this.effect = null, this.defines = null, this.drawContext = rr.createDrawContext(), Sr && (this.materialContext = rr.createMaterialContext())
      }
      setEffect(rr, Sr) {
        let Qr = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        Qr || this.effect === rr || this.drawContext?._releaseUniformBufferSlots?.(), this.effect = rr, void 0 !== Sr && (this.defines = Sr), Qr && this.drawContext?.reset()
      }
      dispose() {
        let rr = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this.effect) {
          const Sr = this.effect;
          rr ? Sr.dispose() : Zr.d.SetImmediate((() => {
            Sr.MU().onEndFrameObservable.addOnce((() => {
              Sr.dispose()
            }))
          })), this.effect = null
        }
        this.drawContext?.dispose()
      }
    }
  },
  41746: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      c: () => xr,
      f: () => Nr,
      g: () => Er,
      j: () => pr
    });
    var Zr = Qr(41749),
      Wr = Qr(41755),
      ar = Qr(41743),
      jr = Qr(40246),
      Ir = Qr(41775),
      fr = Qr(41764);

    function Er(rr, Sr) {
      return (0, Wr.F)(Sr).cachedPipelines[rr]
    }

    function pr(rr) {
      const Sr = rr._name,
        Qr = rr.context;
      if (Sr && Qr) {
        const rr = (0, Wr.F)(Qr),
          Zr = rr.cachedPipelines[Sr];
        Zr?.dispose(), delete rr.cachedPipelines[Sr]
      }
    }

    function xr(rr, Sr, Qr, Wr, ar, jr, fr) {
      let Er, pr;
      const xr = (0, Zr.m)() ? jr?.getHostDocument() : null;
      Er = "string" === typeof Sr ? Sr : "string" === typeof Sr.vertexSource ? "source:" + Sr.vertexSource : "string" === typeof Sr.vertexElement ? xr?.getElementById(Sr.vertexElement) || Sr.vertexElement : Sr.vertex || Sr, pr = "string" === typeof Sr ? Sr : "string" === typeof Sr.fragmentSource ? "source:" + Sr.fragmentSource : "string" === typeof Sr.fragmentElement ? xr?.getElementById(Sr.fragmentElement) || Sr.fragmentElement : Sr.fragment || Sr;
      const Nr = [void 0, void 0],
        Ur = () => {
          if (Nr[0] && Nr[1]) {
            const [Zr, Er] = Nr;
            (0, Ir.c)(rr), (0, Ir.j)(Zr, rr, ((Zr, pr) => {
              fr && (fr._vertexSourceCodeBeforeMigration = pr), Qr && (Zr = Qr("vertex", Zr)), rr.isFragment = !0, (0, Ir.j)(Er, rr, ((jr, Er) => {
                fr && (fr._fragmentSourceCodeBeforeMigration = Er), Qr && (jr = Qr("fragment", jr));
                const pr = (0, Ir.b)(Zr, jr, rr);
                rr = null;
                const xr = function(rr, Sr, Qr, Zr) {
                  if (Qr) {
                    return {
                      vertexSourceCode: (1 === Zr ? "//" : "") + "#define SHADER_NAME vertex:" + (Qr.vertexElement || Qr.vertex || Qr.spectorName || Qr) + "\n" + rr,
                      fragmentSourceCode: (1 === Zr ? "//" : "") + "#define SHADER_NAME fragment:" + (Qr.fragmentElement || Qr.fragment || Qr.spectorName || Qr) + "\n" + Sr
                    }
                  }
                  return {
                    vertexSourceCode: rr,
                    fragmentSourceCode: Sr
                  }
                }(pr.vertexCode, pr.fragmentCode, Sr, ar);
                Wr?.(xr.vertexSourceCode, xr.fragmentSourceCode)
              }), jr)
            }), jr)
          }
        };
      mr(Er, "Vertex", "", (rr => {
        fr && (fr._rawVertexSourceCode = rr), Nr[0] = rr, Ur()
      }), ar), mr(pr, "Fragment", "Pixel", (rr => {
        fr && (fr._rawFragmentSourceCode = rr), Nr[1] = rr, Ur()
      }), ar)
    }

    function mr(rr, Sr, Qr, Wr, jr, Ir) {
      if ("undefined" !== typeof HTMLElement && rr instanceof HTMLElement) {
        return void Wr((0, Zr.e)(rr))
      }
      if ("source:" === rr.substring(0, 7)) return void Wr(rr.substring(7));
      if ("base64:" === rr.substring(0, 7)) {
        return void Wr(window.atob(rr.substring(7)))
      }
      const Er = ar.e.GetShadersStore(jr);
      if (Er[rr + Sr + "Shader"]) return void Wr(Er[rr + Sr + "Shader"]);
      if (Qr && Er[rr + Qr + "Shader"]) return void Wr(Er[rr + Qr + "Shader"]);
      let pr;
      if (pr = "." === rr[0] || "/" === rr[0] || rr.indexOf("http") > -1 ? rr : ar.e.GetShadersRepository(jr) + rr, !(Ir = Ir || fr.k)) throw new Error("loadFileInjection is not defined");
      Ir(pr + "." + Sr.toLowerCase() + ".fx", Wr)
    }
    const Nr = (rr, Sr, Qr, Zr) => {
      try {
        const ar = rr.context ? (0, Wr.F)(rr.context) : null;
        ar && (ar.disableParallelShaderCompile = rr.disableParallelCompilation);
        const jr = rr.existingPipelineContext || Sr(rr.shaderProcessingContext);
        return jr._name = rr.name, rr.name && ar && (ar.cachedPipelines[rr.name] = jr), Qr(jr, rr.vertex, rr.fragment, !!rr.createAsRaw, "", "", rr.rebuildRebind, rr.defines, rr.transformFeedbackVaryings, "", (() => {
          Zr(jr, (() => {
            rr.onRenderingStateCompiled?.(jr)
          }))
        })), jr
      } catch (ar) {
        throw jr.c.Error("Error compiling effect"), ar
      }
    }
  },
  41741: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      b: () => fr
    });
    var Zr = Qr(38595),
      Wr = Qr(40246),
      ar = Qr(41743),
      jr = Qr(41746),
      Ir = Qr(41781);
    class fr {
      static get ShadersRepository() {
        return ar.e.ShadersRepository
      }
      static set ShadersRepository(rr) {
        ar.e.ShadersRepository = rr
      }
      get Dv() {
        return this._isDisposed
      }
      get onBindObservable() {
        return this._onBindObservable || (this._onBindObservable = new Zr.d), this._onBindObservable
      }
      get shaderLanguage() {
        return this._shaderLanguage
      }
      constructor(rr, Sr, Qr) {
        let Wr = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          ar = arguments.length > 4 ? arguments[4] : void 0,
          Ir = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          Er = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
          pr = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
          xr = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
          mr = arguments.length > 9 ? arguments[9] : void 0,
          Nr = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : "",
          Ur = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : 0,
          tr = arguments.length > 12 ? arguments[12] : void 0;
        this.defines = "", this.onCompiled = null, this.onError = null, this.onBind = null, this.uniqueId = 0, this.onCompileObservable = new Zr.d, this.onErrorObservable = new Zr.d, this._onBindObservable = null, this._isDisposed = !1, this._refCount = 1, this._bonesComputationForcedToCPU = !1, this._uniformBuffersNames = {}, this._multiTarget = !1, this._samplers = {}, this._isReady = !1, this._compilationError = "", this._allFallbacksProcessed = !1, this._uniforms = {}, this._key = "", this._fallbacks = null, this._vertexSourceCodeOverride = "", this._fragmentSourceCodeOverride = "", this._transformFeedbackVaryings = null, this._disableParallelShaderCompilation = !1, this._pipelineContext = null, this._vertexSourceCode = "", this._fragmentSourceCode = "", this._vertexSourceCodeBeforeMigration = "", this._fragmentSourceCodeBeforeMigration = "", this._rawVertexSourceCode = "", this._rawFragmentSourceCode = "", this._processCodeAfterIncludes = void 0, this._processFinalCode = null, this._onReleaseEffectsObserver = null, this.name = rr, this._key = Nr;
        const hr = this._key.replace(/\r/g, "").replace(/\n/g, "|");
        let zr;
        if (Sr.attributes) {
          const rr = Sr;
          if (this._engine = Qr, this._attributesNames = rr.attributes, this._uniformsNames = rr.uniformsNames.concat(rr.samplers), this._samplerList = rr.samplers.slice(), this.defines = rr.defines, this.onError = rr.onError, this.onCompiled = rr.onCompiled, this._fallbacks = rr.fallbacks, this._indexParameters = rr.indexParameters, this._transformFeedbackVaryings = rr.transformFeedbackVaryings || null, this._multiTarget = !!rr.multiTarget, this._shaderLanguage = rr.shaderLanguage ?? 0, this._disableParallelShaderCompilation = !!rr.disableParallelShaderCompilation, rr.uniformBuffersNames) {
            this._uniformBuffersNamesList = rr.uniformBuffersNames.slice();
            for (let Sr = 0; Sr < rr.uniformBuffersNames.length; Sr++) this._uniformBuffersNames[rr.uniformBuffersNames[Sr]] = Sr
          }
          this._processFinalCode = rr.processFinalCode ?? null, this._processCodeAfterIncludes = rr.processCodeAfterIncludes ?? void 0, tr = rr.extraInitializationsAsync, zr = rr.existingPipelineContext
        } else this._engine = ar, this.defines = null == Ir ? "" : Ir, this._uniformsNames = Qr.concat(Wr), this._samplerList = Wr ? Wr.slice() : [], this._attributesNames = Sr, this._uniformBuffersNamesList = [], this._shaderLanguage = Ur, this.onError = xr, this.onCompiled = pr, this._indexParameters = mr, this._fallbacks = Er;
        "WEBGL2" === this._engine.shaderPlatformName && (zr = (0, jr.g)(hr, this._engine._gl) ?? zr), this._attributeLocationByName = {}, this.uniqueId = fr._UniqueIdSeed++, zr ? (this._pipelineContext = zr, this._pipelineContext.setEngine(this._engine), this._onRenderingStateCompiled(this._pipelineContext), this._pipelineContext.program && (this._pipelineContext.program.__SPECTOR_rebuildProgram = this._rebuildProgram.bind(this))) : this._processShaderCodeAsync(null, !1, null, tr).catch((rr => {
          const Sr = rr?.message ?? String(rr),
            Qr = new Error(`Effect async shader preparation failed for "${String(this.name)}": ${Sr}`);
          rr && "string" === typeof rr.stack && (Qr.stack = `${Qr.message}\nCaused by: ${rr.stack}`), this._processCompilationErrors(Qr)
        })), this._onReleaseEffectsObserver = this._engine.onReleaseEffectsObservable.addOnce((() => {
          this._onReleaseEffectsObserver = null, this.Dv || this.dispose(!0)
        }))
      }
      async _processShaderCodeAsync() {
        let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          Sr = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          Zr = arguments.length > 3 ? arguments[3] : void 0;
        Zr && await Zr(), this._processingContext = Qr || this._engine._getShaderProcessingContext(this._shaderLanguage, !1);
        const Wr = {
          defines: this.defines.split("\n"),
          indexParameters: this._indexParameters,
          isFragment: !1,
          shouldUseHighPrecisionShader: this._engine._shouldUseHighPrecisionShader,
          processor: rr ?? this._engine._getShaderProcessor(this._shaderLanguage),
          supportsUniformBuffers: this._engine.supportsUniformBuffers,
          shadersRepository: ar.e.GetShadersRepository(this._shaderLanguage),
          includesShadersStore: ar.e.GetIncludesShadersStore(this._shaderLanguage),
          version: (100 * this._engine.version).toString(),
          platformName: this._engine.shaderPlatformName,
          processingContext: this._processingContext,
          isNDCHalfZRange: this._engine.isNDCHalfZRange,
          JZr: this._engine.JZr,
          processCodeAfterIncludes: this._processCodeAfterIncludes
        };
        (0, jr.c)(Wr, this.name, this._processFinalCode, ((rr, Qr) => {
          this._vertexSourceCode = rr, this._fragmentSourceCode = Qr, this._prepareEffect(Sr)
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
        return !!this._engine.Dv || (!!this._isReady || !!this._pipelineContext && this._pipelineContext.isReady)
      }
      MU() {
        return this._engine
      }
      getPipelineContext() {
        return this._pipelineContext
      }
      getAttributesNames() {
        return this._attributesNames
      }
      getAttributeLocation(rr) {
        return this._attributes[rr]
      }
      getAttributeLocationByName(rr) {
        return this._attributeLocationByName[rr]
      }
      getAttributesCount() {
        return this._attributes.length
      }
      getUniformIndex(rr) {
        return this._uniformsNames.indexOf(rr)
      }
      getUniform(rr) {
        return this._uniforms[rr]
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
        return await new Promise((rr => {
          this.executeWhenCompiled(rr)
        }))
      }
      executeWhenCompiled(rr) {
        this.isReady() ? rr(this) : (this.onCompileObservable.add((Sr => {
          rr(Sr)
        })), this._pipelineContext && !this._pipelineContext.isAsync || this._checkIsReady(null))
      }
      _checkIsReady(rr) {
        (0, Ir.f)((() => this._isReadyInternal() || this._isDisposed), (() => {}), (Sr => {
          this._processCompilationErrors(Sr, rr)
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
            JZr: this._engine.JZr,
            supportsUniformBuffers: this._engine.supportsUniformBuffers
          },
          extendedCreatePipelineOptions: {
            transformFeedbackVaryings: this._transformFeedbackVaryings,
            createAsRaw: !(!this._vertexSourceCodeOverride || !this._fragmentSourceCodeOverride)
          }
        }
      }
      _rebuildProgram(rr, Sr, Qr, Zr) {
        this._isReady = !1, this._vertexSourceCodeOverride = rr, this._fragmentSourceCodeOverride = Sr, this.onError = (rr, Sr) => {
          Zr && Zr(Sr)
        }, this.onCompiled = () => {
          const rr = this.MU().scenes;
          if (rr)
            for (let Sr = 0; Sr < rr.length; Sr++) rr[Sr].markAllMaterialsAsDirty(127);
          this._pipelineContext._handlesSpectorRebuildCallback?.(Qr)
        }, this._fallbacks = null, this._prepareEffect()
      }
      _onRenderingStateCompiled(rr) {
        if (this._pipelineContext = rr, this._pipelineContext.setEngine(this._engine), this._attributes = [], this._pipelineContext._fillEffectInformation(this, this._uniformBuffersNames, this._uniformsNames, this._uniforms, this._samplerList, this._samplers, this._attributesNames, this._attributes), this._attributesNames)
          for (let Sr = 0; Sr < this._attributesNames.length; Sr++) {
            const rr = this._attributesNames[Sr];
            this._attributeLocationByName[rr] = this._attributes[Sr]
          }
        this._engine.bindSamplers(this), this._compilationError = "", this._isReady = !0, this.onCompiled && this.onCompiled(this), this.onCompileObservable.notifyObservers(this), this.onCompileObservable.clear(), this._fallbacks && this._fallbacks.unBindMesh(), fr.AutomaticallyClearCodeCache && this.clearCodeCache()
      }
      _prepareEffect() {
        let rr = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const Sr = this._pipelineContext;
        this._isReady = !1;
        try {
          const Qr = !(!this._vertexSourceCodeOverride || !this._fragmentSourceCodeOverride),
            Zr = Qr ? null : this.defines,
            Wr = Qr ? this._vertexSourceCodeOverride : this._vertexSourceCode,
            ar = Qr ? this._fragmentSourceCodeOverride : this._fragmentSourceCode,
            Ir = this._engine;
          this._pipelineContext = (0, jr.f)({
            existingPipelineContext: rr ? Sr : null,
            vertex: Wr,
            fragment: ar,
            context: "WEBGL2" === Ir.shaderPlatformName || "WEBGL1" === Ir.shaderPlatformName ? Ir._gl : void 0,
            rebuildRebind: (rr, Sr, Qr, Zr) => this._rebuildProgram(rr, Sr, Qr, Zr),
            defines: Zr,
            transformFeedbackVaryings: this._transformFeedbackVaryings,
            name: this._key.replace(/\r/g, "").replace(/\n/g, "|"),
            createAsRaw: Qr,
            disableParallelCompilation: this._disableParallelShaderCompilation,
            shaderProcessingContext: this._processingContext,
            onRenderingStateCompiled: Qr => {
              Sr && !rr && this._engine._deletePipelineContext(Sr), Qr && this._onRenderingStateCompiled(Qr)
            }
          }, this._engine.createPipelineContext.bind(this._engine), this._engine._preparePipelineContextAsync.bind(this._engine), this._engine._executeWhenRenderingStateIsCompiled.bind(this._engine)), this._pipelineContext.isAsync && this._checkIsReady(Sr)
        } catch (Qr) {
          this._processCompilationErrors(Qr, Sr)
        }
      }
      _getShaderCodeAndErrorLine(rr, Sr, Qr) {
        const Zr = Qr ? /FRAGMENT SHADER ERROR: 0:(\d+?):/ : /VERTEX SHADER ERROR: 0:(\d+?):/;
        let Wr = null;
        if (Sr && rr) {
          const ar = Sr.match(Zr);
          if (ar && 2 === ar.length) {
            const Sr = parseInt(ar[1]),
              Zr = rr.split("\n", -1);
            Zr.length >= Sr && (Wr = `Offending line [${Sr}] in ${Qr?"fragment":"vertex"} code: ${Zr[Sr-1]}`)
          }
        }
        return [rr, Wr]
      }
      _processCompilationErrors(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        this._compilationError = "string" === typeof rr?.stack ? rr.stack : rr?.message ?? String(rr);
        const Qr = this._attributesNames,
          Zr = this._fallbacks;
        if (Wr.c.Error("Unable to compile effect:"), Wr.c.Error(`Uniforms: ${this._uniformsNames.join(" ")}`), Wr.c.Error(`Attributes: ${Qr.join(" ")}`), Wr.c.Error("Defines:\n" + this.defines), fr.LogShaderCodeOnCompilationError) {
          let rr, Sr = null,
            Qr = null;
          this._pipelineContext?._getVertexShaderCode() && ([rr, Sr] = this._getShaderCodeAndErrorLine(this._pipelineContext._getVertexShaderCode(), this._compilationError, !1), rr && (Wr.c.Error("Vertex code:"), Wr.c.Error(rr))), this._pipelineContext?._getFragmentShaderCode() && ([rr, Qr] = this._getShaderCodeAndErrorLine(this._pipelineContext?._getFragmentShaderCode(), this._compilationError, !0), rr && (Wr.c.Error("Fragment code:"), Wr.c.Error(rr))), Sr && Wr.c.Error(Sr), Qr && Wr.c.Error(Qr)
        }
        Wr.c.Error("Error: " + this._compilationError);
        const ar = () => {
          this.onError && this.onError(this, this._compilationError), this.onErrorObservable.notifyObservers(this), this._engine.onEffectErrorObservable.notifyObservers({
            effect: this,
            errors: this._compilationError
          })
        };
        Sr && (this._pipelineContext = Sr, this._isReady = !0, ar()), Zr ? (this._pipelineContext = null, Zr.hasMoreFallbacks ? (this._allFallbacksProcessed = !1, Wr.c.Error("Trying next fallback."), this.defines = Zr.reduce(this.defines, this), this._prepareEffect()) : (this._allFallbacksProcessed = !0, ar(), this.onErrorObservable.clear(), this._fallbacks && this._fallbacks.unBindMesh())) : (this._allFallbacksProcessed = !0, Sr || ar())
      }
      get isSupported() {
        return "" === this._compilationError
      }
      _bindTexture(rr, Sr) {
        this._engine._bindTexture(this._samplers[rr], Sr, rr)
      }
      setTexture(rr, Sr) {
        this._engine.setTexture(this._samplers[rr], this._uniforms[rr], Sr, rr)
      }
      setTextureArray(rr, Sr) {
        const Qr = rr + "Ex";
        if (-1 === this._samplerList.indexOf(Qr + "0")) {
          const Zr = this._samplerList.indexOf(rr);
          for (let rr = 1; rr < Sr.length; rr++) {
            const Sr = Qr + (rr - 1).toString();
            this._samplerList.splice(Zr + rr, 0, Sr)
          }
          let Wr = 0;
          for (const rr of this._samplerList) this._samplers[rr] = Wr, Wr += 1
        }
        this._engine.setTextureArray(this._samplers[rr], this._uniforms[rr], Sr, rr)
      }
      bindUniformBuffer(rr, Sr) {
        const Qr = this._uniformBuffersNames[Sr];
        void 0 === Qr || fr._BaseCache[Qr] === rr && this._engine._features.useUBOBindingCache || (fr._BaseCache[Qr] = rr, this._engine.bindUniformBufferBase(rr, Qr, Sr))
      }
      bindUniformBlock(rr, Sr) {
        this._engine.bindUniformBlock(this._pipelineContext, rr, Sr)
      }
      setInt(rr, Sr) {
        return this._pipelineContext.setInt(rr, Sr), this
      }
      setInt2(rr, Sr, Qr) {
        return this._pipelineContext.setInt2(rr, Sr, Qr), this
      }
      setInt3(rr, Sr, Qr, Zr) {
        return this._pipelineContext.setInt3(rr, Sr, Qr, Zr), this
      }
      setInt4(rr, Sr, Qr, Zr, Wr) {
        return this._pipelineContext.setInt4(rr, Sr, Qr, Zr, Wr), this
      }
      setIntArray(rr, Sr) {
        return this._pipelineContext.setIntArray(rr, Sr), this
      }
      setIntArray2(rr, Sr) {
        return this._pipelineContext.setIntArray2(rr, Sr), this
      }
      setIntArray3(rr, Sr) {
        return this._pipelineContext.setIntArray3(rr, Sr), this
      }
      setIntArray4(rr, Sr) {
        return this._pipelineContext.setIntArray4(rr, Sr), this
      }
      setUInt(rr, Sr) {
        return this._pipelineContext.setUInt(rr, Sr), this
      }
      setUInt2(rr, Sr, Qr) {
        return this._pipelineContext.setUInt2(rr, Sr, Qr), this
      }
      setUInt3(rr, Sr, Qr, Zr) {
        return this._pipelineContext.setUInt3(rr, Sr, Qr, Zr), this
      }
      setUInt4(rr, Sr, Qr, Zr, Wr) {
        return this._pipelineContext.setUInt4(rr, Sr, Qr, Zr, Wr), this
      }
      setUIntArray(rr, Sr) {
        return this._pipelineContext.setUIntArray(rr, Sr), this
      }
      setUIntArray2(rr, Sr) {
        return this._pipelineContext.setUIntArray2(rr, Sr), this
      }
      setUIntArray3(rr, Sr) {
        return this._pipelineContext.setUIntArray3(rr, Sr), this
      }
      setUIntArray4(rr, Sr) {
        return this._pipelineContext.setUIntArray4(rr, Sr), this
      }
      setFloatArray(rr, Sr) {
        return this._pipelineContext.setArray(rr, Sr), this
      }
      setFloatArray2(rr, Sr) {
        return this._pipelineContext.setArray2(rr, Sr), this
      }
      setFloatArray3(rr, Sr) {
        return this._pipelineContext.setArray3(rr, Sr), this
      }
      setFloatArray4(rr, Sr) {
        return this._pipelineContext.setArray4(rr, Sr), this
      }
      setArray(rr, Sr) {
        return this._pipelineContext.setArray(rr, Sr), this
      }
      setArray2(rr, Sr) {
        return this._pipelineContext.setArray2(rr, Sr), this
      }
      setArray3(rr, Sr) {
        return this._pipelineContext.setArray3(rr, Sr), this
      }
      setArray4(rr, Sr) {
        return this._pipelineContext.setArray4(rr, Sr), this
      }
      setMatrices(rr, Sr) {
        return this._pipelineContext.setMatrices(rr, Sr), this
      }
      setMatrix(rr, Sr) {
        return this._pipelineContext.setMatrix(rr, Sr), this
      }
      setMatrix3x3(rr, Sr) {
        return this._pipelineContext.setMatrix3x3(rr, Sr), this
      }
      setMatrix2x2(rr, Sr) {
        return this._pipelineContext.setMatrix2x2(rr, Sr), this
      }
      setFloat(rr, Sr) {
        return this._pipelineContext.setFloat(rr, Sr), this
      }
      setBool(rr, Sr) {
        return this._pipelineContext.setInt(rr, Sr ? 1 : 0), this
      }
      setVector2(rr, Sr) {
        return this._pipelineContext.setVector2(rr, Sr), this
      }
      setFloat2(rr, Sr, Qr) {
        return this._pipelineContext.setFloat2(rr, Sr, Qr), this
      }
      setVector3(rr, Sr) {
        return this._pipelineContext.setVector3(rr, Sr), this
      }
      setFloat3(rr, Sr, Qr, Zr) {
        return this._pipelineContext.setFloat3(rr, Sr, Qr, Zr), this
      }
      setVector4(rr, Sr) {
        return this._pipelineContext.setVector4(rr, Sr), this
      }
      setQuaternion(rr, Sr) {
        return this._pipelineContext.setQuaternion(rr, Sr), this
      }
      setFloat4(rr, Sr, Qr, Zr, Wr) {
        return this._pipelineContext.setFloat4(rr, Sr, Qr, Zr, Wr), this
      }
      setColor3(rr, Sr) {
        return this._pipelineContext.setColor3(rr, Sr), this
      }
      setColor4(rr, Sr, Qr) {
        return this._pipelineContext.setColor4(rr, Sr, Qr), this
      }
      setDirectColor4(rr, Sr) {
        return this._pipelineContext.setDirectColor4(rr, Sr), this
      }
      clearCodeCache() {
        this._vertexSourceCode = "", this._fragmentSourceCode = "", this._fragmentSourceCodeBeforeMigration = "", this._vertexSourceCodeBeforeMigration = ""
      }
      dispose() {
        if (arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) this._refCount = 0;
        else {
          if (fr.PersistentMode) return;
          this._refCount--
        }
        this._refCount > 0 || this._isDisposed || (this._onReleaseEffectsObserver && (this._engine.onReleaseEffectsObservable.remove(this._onReleaseEffectsObserver), this._onReleaseEffectsObserver = null), this._pipelineContext && (0, jr.j)(this._pipelineContext), this._engine._releaseEffect(this), this.clearCodeCache(), this._isDisposed = !0)
      }
      static RegisterShader(rr, Sr, Qr) {
        let Zr = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        Sr && (ar.e.GetShadersStore(Zr)[`${rr}PixelShader`] = Sr), Qr && (ar.e.GetShadersStore(Zr)[`${rr}VertexShader`] = Qr)
      }
      static ResetCache() {
        fr._BaseCache = {}
      }
    }
    fr.LogShaderCodeOnCompilationError = !0, fr.PersistentMode = !1, fr.AutomaticallyClearCodeCache = !1, fr._UniqueIdSeed = 0, fr._BaseCache = {}, fr.ShadersStore = ar.e.ShadersStore, fr.IncludesShadersStore = ar.e.IncludesShadersStore
  },
  42005: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => pr,
      e: () => Br,
      g: () => yr
    });
    var Zr = Qr(41741),
      Wr = Qr(38560),
      ar = Qr(38606),
      jr = Qr(41987);
    const Ir = new Wr.d,
      fr = new Wr.d,
      Er = new Wr.d,
      pr = {
        eC: () => {},
        eyeAtCamera: !0
      };

    function xr(rr, Sr, Qr) {
      const Zr = Qr.OWr(),
        Wr = Sr.OWr();
      for (let ar = 0; ar < 16; ar++) Zr[ar] = Wr[ar];
      return Zr[12] -= rr.x, Zr[13] -= rr.y, Zr[14] -= rr.z, Qr.markAsUpdated(), Qr
    }

    function mr(rr, Sr, Qr) {
      return (0, ar.j)(Sr, fr), xr(rr, fr, Er), (0, ar.j)(Er, Qr), Qr
    }

    function Nr(rr, Sr, Qr) {
      if (!pr.eyeAtCamera) return mr(rr, Sr, Qr);
      const Zr = Qr.OWr(),
        Wr = Sr.OWr();
      for (let ar = 0; ar < 16; ar++) Zr[ar] = Wr[ar];
      return Zr[12] = 0, Zr[13] = 0, Zr[14] = 0, Qr.markAsUpdated(), Qr
    }

    function Ur(rr, Sr, Qr, Zr) {
      return (0, ar.s)(Nr(rr, Sr, Zr), Qr, Zr), Zr
    }

    function tr(rr, Sr, Qr, Zr) {
      return (0, ar.j)(Qr, fr), (0, ar.s)(Sr, fr, Er), xr(rr, Er, fr), Nr(rr, Qr, Er), (0, ar.s)(fr, Er, Zr), Zr
    }

    function hr(rr, Sr, Qr, Zr, Wr, jr) {
      return (0, ar.j)(Qr, fr), (0, ar.s)(Sr, fr, Er), xr(rr, Er, fr), Ur(rr, Zr, Wr, Er), (0, ar.s)(fr, Er, jr), jr
    }

    function zr(rr, Sr) {
      const Qr = pr.eC();
      if (!Qr || Ir === Sr) return Sr;
      Ir.updateFlag = Sr.updateFlag;
      const Zr = Qr.floatingOriginOffset;
      switch (rr) {
        case "world":
          return xr(Zr, Sr, Ir);
        case "view":
          return Nr(Zr, Sr, Ir);
        case "worldView":
          return tr(Zr, Sr, Qr.getViewMatrix(), Ir);
        case "viewProjection":
          return Ur(Zr, Qr.getViewMatrix(), Qr.getProjectionMatrix(), Ir);
        case "worldViewProjection":
          return hr(Zr, Sr, Qr.getTransformMatrix(), Qr.getViewMatrix(), Qr.getProjectionMatrix(), Ir);
        default:
          if (rr.startsWith("u_")) {
            const Wr = rr.toLowerCase();
            if (Wr.startsWith("u_worldviewprojection")) return hr(Zr, Sr, Qr.getTransformMatrix(), Qr.getViewMatrix(), Qr.getProjectionMatrix(), Ir);
            if (Wr.startsWith("u_viewprojection")) return Ur(Zr, Qr.getViewMatrix(), Qr.getProjectionMatrix(), Ir);
            if (Wr.startsWith("u_worldview")) return tr(Zr, Sr, Qr.getViewMatrix(), Ir);
            if (Wr.startsWith("u_world")) return xr(Zr, Sr, Ir);
            if (Wr.startsWith("u_view")) return Nr(Zr, Sr, Ir)
          }
          return Sr
      }
    }
    const Yr = jr.d,
      nr = Zr.b,
      er = Yr.prototype._updateMatrixForUniform,
      Kr = Zr.b.prototype.setMatrix;

    function yr() {
      Zr.b.prototype.setMatrix = Kr, nr._setMatrixOverride = void 0, Yr.prototype._updateMatrixForUniform = er, Yr.prototype._updateMatrixForUniformOverride = void 0
    }

    function Br() {
      nr.prototype._setMatrixOverride = Kr, nr.prototype.setMatrix = function(rr, Sr) {
        return this._setMatrixOverride(rr, zr(rr, Sr)), this
      }, Yr.prototype._updateMatrixForUniformOverride = er, Yr.prototype._updateMatrixForUniform = function(rr, Sr) {
        this._updateMatrixForUniformOverride(rr, zr(rr, Sr))
      }
    }
  },
  41980: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      c: () => ar,
      g: () => Wr
    });
    var Zr = Qr(41971);

    function Wr(rr, Sr) {
      Sr.WHITEBALANCE && rr.push("whiteBalanceMatrix"), Sr.EXPOSURE && rr.push("exposureLinear"), Sr.CONTRAST && rr.push("contrast"), Sr.COLORGRADING && rr.push("colorTransformSettings"), (Sr.VIGNETTE || Sr.DITHER) && rr.push("vInverseScreenSize"), Sr.VIGNETTE && (rr.push("vignetteSettings1"), rr.push("vignetteSettings2")), Sr.COLORCURVES && (0, Zr.d)(rr), Sr.DITHER && rr.push("ditherIntensity")
    }

    function ar(rr, Sr) {
      Sr.COLORGRADING && rr.push("txColorTransform")
    }
  },
  41965: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      b: () => lr,
      c: () => Hr
    });
    var Zr = Qr(41872),
      Wr = Qr(41875),
      ar = Qr(38595),
      jr = Qr(38684),
      Ir = Qr(38599),
      fr = Qr(38560);
    const Er = [
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
      pr = 1e6 / Er[Er.length - 1][0],
      xr = 150;

    function mr(rr, Sr) {
      const Qr = Number.isNaN(rr) ? pr : Math.max(rr, pr),
        Zr = (0, Ir.Clamp)(1e6 / Qr, Er[0][0], Er[Er.length - 1][0]);
      let Wr = 0,
        ar = Er.length - 1;
      for (; ar - Wr > 1;) {
        const rr = Wr + ar >> 1;
        Er[rr][0] <= Zr ? Wr = rr : ar = rr
      }
      const jr = Wr,
        [mr, Nr, Ur, tr] = Er[jr],
        [hr, zr, Yr, nr] = Er[jr + 1],
        er = (Zr - mr) / (hr - mr),
        Kr = fr.q.Lerp(new fr.q(Nr, Ur), new fr.q(zr, Yr), er),
        yr = fr.q.Normalize(new fr.q(1, tr)),
        Br = fr.q.Normalize(new fr.q(1, nr)),
        Tr = fr.q.Normalize(fr.q.Lerp(yr, Br, er)),
        vr = (0, Ir.Clamp)(Sr, -150, xr);
      Kr.iWr(Tr.scale(vr / 3e3));
      const Or = 2 * Kr.x - 8 * Kr.y + 4,
        Lr = 3 * Kr.x / Or,
        lr = 2 * Kr.y / Or;
      return new fr.u(Lr / lr, 1, (1 - Lr - lr) / lr)
    }
    const Nr = fr.d.FromArray([.8951, -.7502, .0389, 0, .2664, 1.7135, -.0685, 0, -.1614, .0367, 1.0296, 0, 0, 0, 0, 1]),
      Ur = fr.d.Invert(Nr);

    function tr(rr, Sr) {
      const Qr = Sr > 0 ? rr / Sr : 10;
      return (0, Ir.Clamp)(Qr, .1, 10)
    }

    function hr(rr, Sr) {
      const Qr = fr.u.TransformNormal(rr, Nr),
        Zr = fr.u.TransformNormal(Sr, Nr),
        Wr = fr.d.FromArray([tr(Zr.x, Qr.x), 0, 0, 0, 0, tr(Zr.y, Qr.y), 0, 0, 0, 0, tr(Zr.z, Qr.z), 0, 0, 0, 0, 1]);
      return Nr.multiply(Wr).multiply(Ur)
    }
    const zr = new fr.u(.95047, 1, 1.08883),
      Yr = fr.d.FromArray([.4124564, .2126729, .0193339, 0, .3575761, .7151522, .119192, 0, .1804375, .072175, .9503041, 0, 0, 0, 0, 1]).multiply(hr(zr, mr(6500, 0))),
      nr = fr.d.Invert(Yr),
      er = fr.u.TransformNormal(new fr.u(1, 1, 1), Yr);
    var Kr = Qr(41889),
      yr = Qr(41971);
    let Br = (() => {
      var rr;
      let Sr, Qr, ar, Ir, fr, Er, pr, xr, mr, Nr, Ur, tr, hr = [],
        zr = [],
        Yr = [],
        nr = [],
        er = [],
        Br = [],
        Tr = [],
        vr = [],
        Or = [],
        Lr = [],
        lr = [],
        Xr = [],
        Pr = [],
        Hr = [],
        qr = [],
        Rr = [],
        gr = [],
        Cr = [],
        Mr = [],
        Gr = [],
        kr = [],
        Ar = [],
        Vr = [],
        ir = [];
      return rr = class {
        constructor() {
          this._dirty = !0, this._tempColor = new jr.f(0, 0, 0, 0), this._globalCurve = new jr.f(0, 0, 0, 0), this._highlightsCurve = new jr.f(0, 0, 0, 0), this._midtonesCurve = new jr.f(0, 0, 0, 0), this._shadowsCurve = new jr.f(0, 0, 0, 0), this._positiveCurve = new jr.f(0, 0, 0, 0), this._negativeCurve = new jr.f(0, 0, 0, 0), this._globalHue = (0, Zr.m)(this, hr, 30), this._globalDensity = ((0, Zr.m)(this, zr), (0, Zr.m)(this, Yr, 0)), this._globalSaturation = ((0, Zr.m)(this, nr), (0, Zr.m)(this, er, 0)), this._globalExposure = ((0, Zr.m)(this, Br), (0, Zr.m)(this, Tr, 0)), this._highlightsHue = ((0, Zr.m)(this, vr), (0, Zr.m)(this, Or, 30)), this._highlightsDensity = ((0, Zr.m)(this, Lr), (0, Zr.m)(this, lr, 0)), this._highlightsSaturation = ((0, Zr.m)(this, Xr), (0, Zr.m)(this, Pr, 0)), this._highlightsExposure = ((0, Zr.m)(this, Hr), (0, Zr.m)(this, qr, 0)), this._midtonesHue = ((0, Zr.m)(this, Rr), (0, Zr.m)(this, gr, 30)), this._midtonesDensity = ((0, Zr.m)(this, Cr), (0, Zr.m)(this, Mr, 0)), this._midtonesSaturation = ((0, Zr.m)(this, Gr), (0, Zr.m)(this, kr, 0)), this._midtonesExposure = ((0, Zr.m)(this, Ar), (0, Zr.m)(this, Vr, 0)), this._shadowsHue = ((0, Zr.m)(this, ir), 30), this._shadowsDensity = 0, this._shadowsSaturation = 0, this._shadowsExposure = 0
        }
        get globalHue() {
          return this._globalHue
        }
        set globalHue(rr) {
          this._globalHue = rr, this._dirty = !0
        }
        get globalDensity() {
          return this._globalDensity
        }
        set globalDensity(rr) {
          this._globalDensity = rr, this._dirty = !0
        }
        get globalSaturation() {
          return this._globalSaturation
        }
        set globalSaturation(rr) {
          this._globalSaturation = rr, this._dirty = !0
        }
        get globalExposure() {
          return this._globalExposure
        }
        set globalExposure(rr) {
          this._globalExposure = rr, this._dirty = !0
        }
        get highlightsHue() {
          return this._highlightsHue
        }
        set highlightsHue(rr) {
          this._highlightsHue = rr, this._dirty = !0
        }
        get highlightsDensity() {
          return this._highlightsDensity
        }
        set highlightsDensity(rr) {
          this._highlightsDensity = rr, this._dirty = !0
        }
        get highlightsSaturation() {
          return this._highlightsSaturation
        }
        set highlightsSaturation(rr) {
          this._highlightsSaturation = rr, this._dirty = !0
        }
        get highlightsExposure() {
          return this._highlightsExposure
        }
        set highlightsExposure(rr) {
          this._highlightsExposure = rr, this._dirty = !0
        }
        get midtonesHue() {
          return this._midtonesHue
        }
        set midtonesHue(rr) {
          this._midtonesHue = rr, this._dirty = !0
        }
        get midtonesDensity() {
          return this._midtonesDensity
        }
        set midtonesDensity(rr) {
          this._midtonesDensity = rr, this._dirty = !0
        }
        get midtonesSaturation() {
          return this._midtonesSaturation
        }
        set midtonesSaturation(rr) {
          this._midtonesSaturation = rr, this._dirty = !0
        }
        get midtonesExposure() {
          return this._midtonesExposure
        }
        set midtonesExposure(rr) {
          this._midtonesExposure = rr, this._dirty = !0
        }
        get shadowsHue() {
          return this._shadowsHue
        }
        set shadowsHue(rr) {
          this._shadowsHue = rr, this._dirty = !0
        }
        get shadowsDensity() {
          return this._shadowsDensity
        }
        set shadowsDensity(rr) {
          this._shadowsDensity = rr, this._dirty = !0
        }
        get shadowsSaturation() {
          return this._shadowsSaturation
        }
        set shadowsSaturation(rr) {
          this._shadowsSaturation = rr, this._dirty = !0
        }
        get shadowsExposure() {
          return this._shadowsExposure
        }
        set shadowsExposure(rr) {
          this._shadowsExposure = rr, this._dirty = !0
        }
        getClassName() {
          return "ColorCurves"
        }
        _getColorGradingDataToRef(Sr, Qr, Zr, Wr, ar) {
          null != Sr && (Sr = rr._Clamp(Sr, 0, 360), Qr = rr._Clamp(Qr, -100, 100), Zr = rr._Clamp(Zr, -100, 100), Wr = rr._Clamp(Wr, -100, 100), Qr = rr._ApplyColorGradingSliderNonlinear(Qr), Qr *= .5, Wr = rr._ApplyColorGradingSliderNonlinear(Wr), Qr < 0 && (Qr *= -1, Sr = (Sr + 180) % 360), rr._FromHSBToRef(Sr, Qr, 50 + .25 * Wr, ar), ar.scaleToRef(2, ar), ar.a = 1 + .01 * Zr)
        }
        static _ApplyColorGradingSliderNonlinear(rr) {
          rr /= 100;
          let Sr = Math.abs(rr);
          return Sr = Math.pow(Sr, 2), rr < 0 && (Sr *= -1), Sr *= 100, Sr
        }
        static _FromHSBToRef(Sr, Qr, Zr, Wr) {
          let ar = rr._Clamp(Sr, 0, 360);
          const jr = rr._Clamp(Qr / 100, 0, 1),
            Ir = rr._Clamp(Zr / 100, 0, 1);
          if (0 === jr) Wr.r = Ir, Wr.g = Ir, Wr.b = Ir;
          else {
            ar /= 60;
            const rr = Math.floor(ar),
              Sr = ar - rr,
              Qr = Ir * (1 - jr),
              Zr = Ir * (1 - jr * Sr),
              fr = Ir * (1 - jr * (1 - Sr));
            switch (rr) {
              case 0:
                Wr.r = Ir, Wr.g = fr, Wr.b = Qr;
                break;
              case 1:
                Wr.r = Zr, Wr.g = Ir, Wr.b = Qr;
                break;
              case 2:
                Wr.r = Qr, Wr.g = Ir, Wr.b = fr;
                break;
              case 3:
                Wr.r = Qr, Wr.g = Zr, Wr.b = Ir;
                break;
              case 4:
                Wr.r = fr, Wr.g = Qr, Wr.b = Ir;
                break;
              default:
                Wr.r = Ir, Wr.g = Qr, Wr.b = Zr
            }
          }
          Wr.a = 1
        }
        static _Clamp(rr, Sr, Qr) {
          return Math.min(Math.max(rr, Sr), Qr)
        }
        clone() {
          return Kr.e.Clone((() => new rr), this)
        }
        serialize() {
          return Kr.e.Serialize(this)
        }
        _bind(rr) {
          let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "vCameraColorCurvePositive",
            Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "vCameraColorCurveNeutral",
            Zr = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "vCameraColorCurveNegative";
          this._dirty && (this._dirty = !1, this._getColorGradingDataToRef(this._globalHue, this._globalDensity, this._globalSaturation, this._globalExposure, this._globalCurve), this._getColorGradingDataToRef(this._highlightsHue, this._highlightsDensity, this._highlightsSaturation, this._highlightsExposure, this._tempColor), this._tempColor.multiplyToRef(this._globalCurve, this._highlightsCurve), this._getColorGradingDataToRef(this._midtonesHue, this._midtonesDensity, this._midtonesSaturation, this._midtonesExposure, this._tempColor), this._tempColor.multiplyToRef(this._globalCurve, this._midtonesCurve), this._getColorGradingDataToRef(this._shadowsHue, this._shadowsDensity, this._shadowsSaturation, this._shadowsExposure, this._tempColor), this._tempColor.multiplyToRef(this._globalCurve, this._shadowsCurve), this._highlightsCurve.subtractToRef(this._midtonesCurve, this._positiveCurve), this._midtonesCurve.subtractToRef(this._shadowsCurve, this._negativeCurve)), rr && (rr.setFloat4(Sr, this._positiveCurve.r, this._positiveCurve.g, this._positiveCurve.b, this._positiveCurve.a), rr.setFloat4(Qr, this._midtonesCurve.r, this._midtonesCurve.g, this._midtonesCurve.b, this._midtonesCurve.a), rr.setFloat4(Zr, this._negativeCurve.r, this._negativeCurve.g, this._negativeCurve.b, this._negativeCurve.a))
        }
      }, (() => {
        const jr = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        Sr = [(0, Wr.G)()], Qr = [(0, Wr.G)()], ar = [(0, Wr.G)()], Ir = [(0, Wr.G)()], fr = [(0, Wr.G)()], Er = [(0, Wr.G)()], pr = [(0, Wr.G)()], xr = [(0, Wr.G)()], mr = [(0, Wr.G)()], Nr = [(0, Wr.G)()], Ur = [(0, Wr.G)()], tr = [(0, Wr.G)()], (0, Zr.k)(null, null, Sr, {
          kind: "field",
          name: "_globalHue",
          static: !1,
          private: !1,
          access: {
            has: rr => "_globalHue" in rr,
            get: rr => rr._globalHue,
            set: (rr, Sr) => {
              rr._globalHue = Sr
            }
          },
          metadata: jr
        }, hr, zr), (0, Zr.k)(null, null, Qr, {
          kind: "field",
          name: "_globalDensity",
          static: !1,
          private: !1,
          access: {
            has: rr => "_globalDensity" in rr,
            get: rr => rr._globalDensity,
            set: (rr, Sr) => {
              rr._globalDensity = Sr
            }
          },
          metadata: jr
        }, Yr, nr), (0, Zr.k)(null, null, ar, {
          kind: "field",
          name: "_globalSaturation",
          static: !1,
          private: !1,
          access: {
            has: rr => "_globalSaturation" in rr,
            get: rr => rr._globalSaturation,
            set: (rr, Sr) => {
              rr._globalSaturation = Sr
            }
          },
          metadata: jr
        }, er, Br), (0, Zr.k)(null, null, Ir, {
          kind: "field",
          name: "_globalExposure",
          static: !1,
          private: !1,
          access: {
            has: rr => "_globalExposure" in rr,
            get: rr => rr._globalExposure,
            set: (rr, Sr) => {
              rr._globalExposure = Sr
            }
          },
          metadata: jr
        }, Tr, vr), (0, Zr.k)(null, null, fr, {
          kind: "field",
          name: "_highlightsHue",
          static: !1,
          private: !1,
          access: {
            has: rr => "_highlightsHue" in rr,
            get: rr => rr._highlightsHue,
            set: (rr, Sr) => {
              rr._highlightsHue = Sr
            }
          },
          metadata: jr
        }, Or, Lr), (0, Zr.k)(null, null, Er, {
          kind: "field",
          name: "_highlightsDensity",
          static: !1,
          private: !1,
          access: {
            has: rr => "_highlightsDensity" in rr,
            get: rr => rr._highlightsDensity,
            set: (rr, Sr) => {
              rr._highlightsDensity = Sr
            }
          },
          metadata: jr
        }, lr, Xr), (0, Zr.k)(null, null, pr, {
          kind: "field",
          name: "_highlightsSaturation",
          static: !1,
          private: !1,
          access: {
            has: rr => "_highlightsSaturation" in rr,
            get: rr => rr._highlightsSaturation,
            set: (rr, Sr) => {
              rr._highlightsSaturation = Sr
            }
          },
          metadata: jr
        }, Pr, Hr), (0, Zr.k)(null, null, xr, {
          kind: "field",
          name: "_highlightsExposure",
          static: !1,
          private: !1,
          access: {
            has: rr => "_highlightsExposure" in rr,
            get: rr => rr._highlightsExposure,
            set: (rr, Sr) => {
              rr._highlightsExposure = Sr
            }
          },
          metadata: jr
        }, qr, Rr), (0, Zr.k)(null, null, mr, {
          kind: "field",
          name: "_midtonesHue",
          static: !1,
          private: !1,
          access: {
            has: rr => "_midtonesHue" in rr,
            get: rr => rr._midtonesHue,
            set: (rr, Sr) => {
              rr._midtonesHue = Sr
            }
          },
          metadata: jr
        }, gr, Cr), (0, Zr.k)(null, null, Nr, {
          kind: "field",
          name: "_midtonesDensity",
          static: !1,
          private: !1,
          access: {
            has: rr => "_midtonesDensity" in rr,
            get: rr => rr._midtonesDensity,
            set: (rr, Sr) => {
              rr._midtonesDensity = Sr
            }
          },
          metadata: jr
        }, Mr, Gr), (0, Zr.k)(null, null, Ur, {
          kind: "field",
          name: "_midtonesSaturation",
          static: !1,
          private: !1,
          access: {
            has: rr => "_midtonesSaturation" in rr,
            get: rr => rr._midtonesSaturation,
            set: (rr, Sr) => {
              rr._midtonesSaturation = Sr
            }
          },
          metadata: jr
        }, kr, Ar), (0, Zr.k)(null, null, tr, {
          kind: "field",
          name: "_midtonesExposure",
          static: !1,
          private: !1,
          access: {
            has: rr => "_midtonesExposure" in rr,
            get: rr => rr._midtonesExposure,
            set: (rr, Sr) => {
              rr._midtonesExposure = Sr
            }
          },
          metadata: jr
        }, Vr, ir), jr && Object.defineProperty(rr, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: jr
        })
      })(), rr.PrepareUniforms = yr.d, rr
    })();

    function Tr(rr, Sr) {
      let Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "vCameraColorCurvePositive",
        Zr = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "vCameraColorCurveNeutral",
        Wr = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "vCameraColorCurveNegative";
      rr._bind(Sr, Qr, Zr, Wr)
    }
    var vr = Qr(41818),
      Or = Qr(41980),
      Lr = Qr(38609);
    let lr = (() => {
        var rr;
        let Sr, Qr, Er, Nr, Ur, tr, zr, yr, Lr, lr, Xr, Pr, Hr, qr, Rr, gr, Cr, Mr, Gr, kr, Ar, Vr, ir, wr, cr, Fr, or, br, Jr = [],
          Dr = [],
          dr = [],
          sr = [],
          ur = [],
          rS = [],
          SS = [],
          QS = [],
          ZS = [],
          WS = [],
          aS = [],
          jS = [],
          IS = [],
          fS = [],
          ES = [],
          pS = [],
          xS = [],
          mS = [],
          NS = [],
          US = [],
          tS = [],
          hS = [],
          zS = [],
          YS = [],
          nS = [],
          eS = [],
          KS = [],
          yS = [],
          BS = [],
          TS = [],
          vS = [],
          OS = [],
          LS = [],
          lS = [],
          XS = [],
          PS = [],
          HS = [],
          qS = [],
          RS = [],
          gS = [],
          CS = [],
          MS = [],
          GS = [],
          kS = [],
          AS = [],
          VS = [],
          iS = [],
          wS = [],
          cS = [],
          FS = [],
          oS = [],
          bS = [],
          JS = [],
          DS = [],
          dS = [],
          sS = [];
        return rr = class {
          constructor() {
            this.colorCurves = (0, Zr.m)(this, Jr, new Br), this._colorCurvesEnabled = ((0, Zr.m)(this, Dr), (0, Zr.m)(this, dr, !1)), this._colorGradingTexture = ((0, Zr.m)(this, sr), (0, Zr.m)(this, ur, void 0)), this._colorGradingEnabled = ((0, Zr.m)(this, rS), (0, Zr.m)(this, SS, !1)), this._colorGradingWithGreenDepth = ((0, Zr.m)(this, QS), (0, Zr.m)(this, ZS, !0)), this._colorGradingBGR = ((0, Zr.m)(this, WS), (0, Zr.m)(this, aS, !0)), this._exposure = ((0, Zr.m)(this, jS), (0, Zr.m)(this, IS, 1)), this._toneMappingEnabled = ((0, Zr.m)(this, fS), (0, Zr.m)(this, ES, !1)), this._toneMappingType = ((0, Zr.m)(this, pS), (0, Zr.m)(this, xS, rr.TONEMAPPING_STANDARD)), this._contrast = ((0, Zr.m)(this, mS), (0, Zr.m)(this, NS, 1)), this._whiteBalanceEnabled = ((0, Zr.m)(this, US), (0, Zr.m)(this, tS, !1)), this._temperature = ((0, Zr.m)(this, hS), (0, Zr.m)(this, zS, 6500)), this._tint = ((0, Zr.m)(this, YS), (0, Zr.m)(this, nS, 0)), this._whiteBalanceMatrix = ((0, Zr.m)(this, eS), null), this._whiteBalanceMatrixTemperature = null, this._whiteBalanceMatrixTint = null, this.vignetteStretch = (0, Zr.m)(this, KS, 0), this.vignetteCenterX = ((0, Zr.m)(this, yS), (0, Zr.m)(this, BS, 0)), this.vignetteCenterY = ((0, Zr.m)(this, TS), (0, Zr.m)(this, vS, 0)), this.vignetteWeight = ((0, Zr.m)(this, OS), (0, Zr.m)(this, LS, 1.5)), this.vignetteColor = ((0, Zr.m)(this, lS), (0, Zr.m)(this, XS, new jr.f(0, 0, 0, 0))), this.vignetteCameraFov = ((0, Zr.m)(this, PS), (0, Zr.m)(this, HS, .5)), this._vignetteBlendMode = ((0, Zr.m)(this, qS), (0, Zr.m)(this, RS, rr.VIGNETTEMODE_MULTIPLY)), this._vignetteEnabled = ((0, Zr.m)(this, gS), (0, Zr.m)(this, CS, !1)), this._ditheringEnabled = ((0, Zr.m)(this, MS), (0, Zr.m)(this, GS, !1)), this._ditheringIntensity = ((0, Zr.m)(this, kS), (0, Zr.m)(this, AS, 1 / 255)), this._skipFinalColorClamp = ((0, Zr.m)(this, VS), (0, Zr.m)(this, iS, !1)), this._applyByPostProcess = ((0, Zr.m)(this, wS), (0, Zr.m)(this, cS, !1)), this._isEnabled = ((0, Zr.m)(this, FS), (0, Zr.m)(this, oS, !0)), this.outputTextureWidth = ((0, Zr.m)(this, bS), (0, Zr.m)(this, JS, 0)), this.outputTextureHeight = ((0, Zr.m)(this, DS), (0, Zr.m)(this, dS, 0)), this.onUpdateParameters = ((0, Zr.m)(this, sS), new ar.d)
          }
          get colorCurvesEnabled() {
            return this._colorCurvesEnabled
          }
          set colorCurvesEnabled(rr) {
            this._colorCurvesEnabled !== rr && (this._colorCurvesEnabled = rr, this._updateParameters())
          }
          get colorGradingTexture() {
            return this._colorGradingTexture
          }
          set colorGradingTexture(rr) {
            this._colorGradingTexture !== rr && (this._colorGradingTexture = rr, this._updateParameters())
          }
          get colorGradingEnabled() {
            return this._colorGradingEnabled
          }
          set colorGradingEnabled(rr) {
            this._colorGradingEnabled !== rr && (this._colorGradingEnabled = rr, this._updateParameters())
          }
          get colorGradingWithGreenDepth() {
            return this._colorGradingWithGreenDepth
          }
          set colorGradingWithGreenDepth(rr) {
            this._colorGradingWithGreenDepth !== rr && (this._colorGradingWithGreenDepth = rr, this._updateParameters())
          }
          get colorGradingBGR() {
            return this._colorGradingBGR
          }
          set colorGradingBGR(rr) {
            this._colorGradingBGR !== rr && (this._colorGradingBGR = rr, this._updateParameters())
          }
          get exposure() {
            return this._exposure
          }
          set exposure(rr) {
            this._exposure !== rr && (this._exposure = rr, this._updateParameters())
          }
          get toneMappingEnabled() {
            return this._toneMappingEnabled
          }
          set toneMappingEnabled(rr) {
            this._toneMappingEnabled !== rr && (this._toneMappingEnabled = rr, this._updateParameters())
          }
          get toneMappingType() {
            return this._toneMappingType
          }
          set toneMappingType(rr) {
            this._toneMappingType !== rr && (this._toneMappingType = rr, this._updateParameters())
          }
          get contrast() {
            return this._contrast
          }
          set contrast(rr) {
            this._contrast !== rr && (this._contrast = rr, this._updateParameters())
          }
          get whiteBalanceEnabled() {
            return this._whiteBalanceEnabled
          }
          set whiteBalanceEnabled(rr) {
            this._whiteBalanceEnabled !== rr && (this._whiteBalanceEnabled = rr, this._updateParameters())
          }
          get temperature() {
            return this._temperature
          }
          set temperature(rr) {
            rr = Number.isNaN(rr) ? pr : Math.max(rr, pr), this._temperature !== rr && (this._temperature = rr, this._updateParameters())
          }
          get tint() {
            return this._tint
          }
          set tint(rr) {
            rr = (0, Ir.Clamp)(rr, -150, xr), this._tint !== rr && (this._tint = rr, this._updateParameters())
          }
          _getWhiteBalanceMatrix() {
            return null !== this._whiteBalanceMatrix && this._whiteBalanceMatrixTemperature === this._temperature && this._whiteBalanceMatrixTint === this._tint || (this._whiteBalanceMatrixTemperature = this._temperature, this._whiteBalanceMatrixTint = this._tint, this._whiteBalanceMatrix = function(rr, Sr) {
              const Qr = hr(mr(rr, Sr), er),
                Zr = Yr.multiply(Qr).multiply(nr);
              return fr.d.GetAsMatrix3x3(Zr)
            }(this._temperature, this._tint)), this._whiteBalanceMatrix
          }
          get vignetteCentreY() {
            return this.vignetteCenterY
          }
          set vignetteCentreY(rr) {
            this.vignetteCenterY = rr
          }
          get vignetteCentreX() {
            return this.vignetteCenterX
          }
          set vignetteCentreX(rr) {
            this.vignetteCenterX = rr
          }
          get vignetteBlendMode() {
            return this._vignetteBlendMode
          }
          set vignetteBlendMode(rr) {
            this._vignetteBlendMode !== rr && (this._vignetteBlendMode = rr, this._updateParameters())
          }
          get vignetteEnabled() {
            return this._vignetteEnabled
          }
          set vignetteEnabled(rr) {
            this._vignetteEnabled !== rr && (this._vignetteEnabled = rr, this._updateParameters())
          }
          get ditheringEnabled() {
            return this._ditheringEnabled
          }
          set ditheringEnabled(rr) {
            this._ditheringEnabled !== rr && (this._ditheringEnabled = rr, this._updateParameters())
          }
          get ditheringIntensity() {
            return this._ditheringIntensity
          }
          set ditheringIntensity(rr) {
            this._ditheringIntensity !== rr && (this._ditheringIntensity = rr, this._updateParameters())
          }
          get skipFinalColorClamp() {
            return this._skipFinalColorClamp
          }
          set skipFinalColorClamp(rr) {
            this._skipFinalColorClamp !== rr && (this._skipFinalColorClamp = rr, this._updateParameters())
          }
          get applyByPostProcess() {
            return this._applyByPostProcess
          }
          set applyByPostProcess(rr) {
            this._applyByPostProcess !== rr && (this._applyByPostProcess = rr, this._updateParameters())
          }
          get isEnabled() {
            return this._isEnabled
          }
          set isEnabled(rr) {
            this._isEnabled !== rr && (this._isEnabled = rr, this._updateParameters())
          }
          _updateParameters() {
            this.onUpdateParameters.notifyObservers(this)
          }
          getClassName() {
            return "ImageProcessingConfiguration"
          }
          prepareDefines(Sr) {
            if ((arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) !== this.applyByPostProcess || !this._isEnabled) return Sr.WHITEBALANCE = !1, Sr.VIGNETTE = !1, Sr.TONEMAPPING = 0, Sr.CONTRAST = !1, Sr.EXPOSURE = !1, Sr.COLORCURVES = !1, Sr.COLORGRADING = !1, Sr.COLORGRADING3D = !1, Sr.DITHER = !1, Sr.IMAGEPROCESSING = !1, Sr.SKIPFINALCOLORCLAMP = this.skipFinalColorClamp, void(Sr.IMAGEPROCESSINGPOSTPROCESS = this.applyByPostProcess && this._isEnabled);
            if (Sr.WHITEBALANCE = this._whiteBalanceEnabled, Sr.VIGNETTE = this.vignetteEnabled, Sr.VIGNETTEBLENDMODEMULTIPLY = this.vignetteBlendMode === rr._VIGNETTEMODE_MULTIPLY, Sr.VIGNETTEBLENDMODEOPAQUE = !Sr.VIGNETTEBLENDMODEMULTIPLY, this._toneMappingEnabled) switch (this._toneMappingType) {
              case rr.TONEMAPPING_KHR_PBR_NEUTRAL:
                Sr.TONEMAPPING = 3;
                break;
              case rr.TONEMAPPING_ACES:
                Sr.TONEMAPPING = 2;
                break;
              default:
                Sr.TONEMAPPING = 1
            } else Sr.TONEMAPPING = 0;
            Sr.CONTRAST = 1 !== this.contrast, Sr.EXPOSURE = 1 !== this.exposure, Sr.COLORCURVES = this.colorCurvesEnabled && !!this.colorCurves, Sr.COLORGRADING = this.colorGradingEnabled && !!this.colorGradingTexture, Sr.COLORGRADING ? Sr.COLORGRADING3D = this.colorGradingTexture.is3D : Sr.COLORGRADING3D = !1, Sr.SAMPLER3DGREENDEPTH = this.colorGradingWithGreenDepth, Sr.SAMPLER3DBGRMAP = this.colorGradingBGR, Sr.DITHER = this._ditheringEnabled, Sr.IMAGEPROCESSINGPOSTPROCESS = this.applyByPostProcess, Sr.SKIPFINALCOLORCLAMP = this.skipFinalColorClamp, Sr.IMAGEPROCESSING = Sr.WHITEBALANCE || Sr.VIGNETTE || !!Sr.TONEMAPPING || Sr.CONTRAST || Sr.EXPOSURE || Sr.COLORCURVES || Sr.COLORGRADING || Sr.DITHER
          }
          isReady() {
            return !this.colorGradingEnabled || !this.colorGradingTexture || this.colorGradingTexture.isReady()
          }
          bind(rr, Sr) {
            if (this._whiteBalanceEnabled && rr.setMatrix3x3("whiteBalanceMatrix", this._getWhiteBalanceMatrix()), this._colorCurvesEnabled && this.colorCurves && Tr(this.colorCurves, rr), this._vignetteEnabled || this._ditheringEnabled) {
              const Qr = 1 / (this.outputTextureWidth || rr.MU().getRenderWidth()),
                Zr = 1 / (this.outputTextureHeight || rr.MU().getRenderHeight());
              if (rr.setFloat2("vInverseScreenSize", Qr, Zr), this._ditheringEnabled && rr.setFloat("ditherIntensity", .5 * this._ditheringIntensity), this._vignetteEnabled) {
                const Wr = null != Sr ? Sr : Zr / Qr;
                let ar = Math.tan(.5 * this.vignetteCameraFov),
                  jr = ar * Wr;
                const Ir = Math.sqrt(jr * ar);
                jr = (0, vr.n)(jr, Ir, this.vignetteStretch), ar = (0, vr.n)(ar, Ir, this.vignetteStretch), rr.setFloat4("vignetteSettings1", jr, ar, -jr * this.vignetteCenterX, -ar * this.vignetteCenterY);
                const fr = -2 * this.vignetteWeight;
                rr.setFloat4("vignetteSettings2", this.vignetteColor.r, this.vignetteColor.g, this.vignetteColor.b, fr)
              }
            }
            if (rr.setFloat("exposureLinear", this.exposure), rr.setFloat("contrast", this.contrast), this.colorGradingTexture) {
              rr.setTexture("txColorTransform", this.colorGradingTexture);
              const Sr = this.colorGradingTexture.getSize().height;
              rr.setFloat4("colorTransformSettings", (Sr - 1) / Sr, .5 / Sr, Sr, this.colorGradingTexture.level)
            }
          }
          clone() {
            return Kr.e.Clone((() => new rr), this)
          }
          serialize() {
            return Kr.e.Serialize(this)
          }
          static get VIGNETTEMODE_MULTIPLY() {
            return this._VIGNETTEMODE_MULTIPLY
          }
          static get VIGNETTEMODE_OPAQUE() {
            return this._VIGNETTEMODE_OPAQUE
          }
        }, (() => {
          const ar = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          Sr = [(0, Wr.m)()], Qr = [(0, Wr.G)()], Er = [(0, Wr.z)("colorGradingTexture")], Nr = [(0, Wr.G)()], Ur = [(0, Wr.G)()], tr = [(0, Wr.G)()], zr = [(0, Wr.G)()], yr = [(0, Wr.G)()], Lr = [(0, Wr.G)()], lr = [(0, Wr.G)()], Xr = [(0, Wr.G)()], Pr = [(0, Wr.G)()], Hr = [(0, Wr.G)()], qr = [(0, Wr.G)()], Rr = [(0, Wr.G)()], gr = [(0, Wr.G)()], Cr = [(0, Wr.G)()], Mr = [(0, Wr.q)()], Gr = [(0, Wr.G)()], kr = [(0, Wr.G)()], Ar = [(0, Wr.G)()], Vr = [(0, Wr.G)()], ir = [(0, Wr.G)()], wr = [(0, Wr.G)()], cr = [(0, Wr.G)()], Fr = [(0, Wr.G)()], or = [(0, Wr.G)()], br = [(0, Wr.G)()], (0, Zr.k)(null, null, Sr, {
            kind: "field",
            name: "colorCurves",
            static: !1,
            private: !1,
            access: {
              has: rr => "colorCurves" in rr,
              get: rr => rr.colorCurves,
              set: (rr, Sr) => {
                rr.colorCurves = Sr
              }
            },
            metadata: ar
          }, Jr, Dr), (0, Zr.k)(null, null, Qr, {
            kind: "field",
            name: "_colorCurvesEnabled",
            static: !1,
            private: !1,
            access: {
              has: rr => "_colorCurvesEnabled" in rr,
              get: rr => rr._colorCurvesEnabled,
              set: (rr, Sr) => {
                rr._colorCurvesEnabled = Sr
              }
            },
            metadata: ar
          }, dr, sr), (0, Zr.k)(null, null, Er, {
            kind: "field",
            name: "_colorGradingTexture",
            static: !1,
            private: !1,
            access: {
              has: rr => "_colorGradingTexture" in rr,
              get: rr => rr._colorGradingTexture,
              set: (rr, Sr) => {
                rr._colorGradingTexture = Sr
              }
            },
            metadata: ar
          }, ur, rS), (0, Zr.k)(null, null, Nr, {
            kind: "field",
            name: "_colorGradingEnabled",
            static: !1,
            private: !1,
            access: {
              has: rr => "_colorGradingEnabled" in rr,
              get: rr => rr._colorGradingEnabled,
              set: (rr, Sr) => {
                rr._colorGradingEnabled = Sr
              }
            },
            metadata: ar
          }, SS, QS), (0, Zr.k)(null, null, Ur, {
            kind: "field",
            name: "_colorGradingWithGreenDepth",
            static: !1,
            private: !1,
            access: {
              has: rr => "_colorGradingWithGreenDepth" in rr,
              get: rr => rr._colorGradingWithGreenDepth,
              set: (rr, Sr) => {
                rr._colorGradingWithGreenDepth = Sr
              }
            },
            metadata: ar
          }, ZS, WS), (0, Zr.k)(null, null, tr, {
            kind: "field",
            name: "_colorGradingBGR",
            static: !1,
            private: !1,
            access: {
              has: rr => "_colorGradingBGR" in rr,
              get: rr => rr._colorGradingBGR,
              set: (rr, Sr) => {
                rr._colorGradingBGR = Sr
              }
            },
            metadata: ar
          }, aS, jS), (0, Zr.k)(null, null, zr, {
            kind: "field",
            name: "_exposure",
            static: !1,
            private: !1,
            access: {
              has: rr => "_exposure" in rr,
              get: rr => rr._exposure,
              set: (rr, Sr) => {
                rr._exposure = Sr
              }
            },
            metadata: ar
          }, IS, fS), (0, Zr.k)(null, null, yr, {
            kind: "field",
            name: "_toneMappingEnabled",
            static: !1,
            private: !1,
            access: {
              has: rr => "_toneMappingEnabled" in rr,
              get: rr => rr._toneMappingEnabled,
              set: (rr, Sr) => {
                rr._toneMappingEnabled = Sr
              }
            },
            metadata: ar
          }, ES, pS), (0, Zr.k)(null, null, Lr, {
            kind: "field",
            name: "_toneMappingType",
            static: !1,
            private: !1,
            access: {
              has: rr => "_toneMappingType" in rr,
              get: rr => rr._toneMappingType,
              set: (rr, Sr) => {
                rr._toneMappingType = Sr
              }
            },
            metadata: ar
          }, xS, mS), (0, Zr.k)(null, null, lr, {
            kind: "field",
            name: "_contrast",
            static: !1,
            private: !1,
            access: {
              has: rr => "_contrast" in rr,
              get: rr => rr._contrast,
              set: (rr, Sr) => {
                rr._contrast = Sr
              }
            },
            metadata: ar
          }, NS, US), (0, Zr.k)(null, null, Xr, {
            kind: "field",
            name: "_whiteBalanceEnabled",
            static: !1,
            private: !1,
            access: {
              has: rr => "_whiteBalanceEnabled" in rr,
              get: rr => rr._whiteBalanceEnabled,
              set: (rr, Sr) => {
                rr._whiteBalanceEnabled = Sr
              }
            },
            metadata: ar
          }, tS, hS), (0, Zr.k)(null, null, Pr, {
            kind: "field",
            name: "_temperature",
            static: !1,
            private: !1,
            access: {
              has: rr => "_temperature" in rr,
              get: rr => rr._temperature,
              set: (rr, Sr) => {
                rr._temperature = Sr
              }
            },
            metadata: ar
          }, zS, YS), (0, Zr.k)(null, null, Hr, {
            kind: "field",
            name: "_tint",
            static: !1,
            private: !1,
            access: {
              has: rr => "_tint" in rr,
              get: rr => rr._tint,
              set: (rr, Sr) => {
                rr._tint = Sr
              }
            },
            metadata: ar
          }, nS, eS), (0, Zr.k)(null, null, qr, {
            kind: "field",
            name: "vignetteStretch",
            static: !1,
            private: !1,
            access: {
              has: rr => "vignetteStretch" in rr,
              get: rr => rr.vignetteStretch,
              set: (rr, Sr) => {
                rr.vignetteStretch = Sr
              }
            },
            metadata: ar
          }, KS, yS), (0, Zr.k)(null, null, Rr, {
            kind: "field",
            name: "vignetteCenterX",
            static: !1,
            private: !1,
            access: {
              has: rr => "vignetteCenterX" in rr,
              get: rr => rr.vignetteCenterX,
              set: (rr, Sr) => {
                rr.vignetteCenterX = Sr
              }
            },
            metadata: ar
          }, BS, TS), (0, Zr.k)(null, null, gr, {
            kind: "field",
            name: "vignetteCenterY",
            static: !1,
            private: !1,
            access: {
              has: rr => "vignetteCenterY" in rr,
              get: rr => rr.vignetteCenterY,
              set: (rr, Sr) => {
                rr.vignetteCenterY = Sr
              }
            },
            metadata: ar
          }, vS, OS), (0, Zr.k)(null, null, Cr, {
            kind: "field",
            name: "vignetteWeight",
            static: !1,
            private: !1,
            access: {
              has: rr => "vignetteWeight" in rr,
              get: rr => rr.vignetteWeight,
              set: (rr, Sr) => {
                rr.vignetteWeight = Sr
              }
            },
            metadata: ar
          }, LS, lS), (0, Zr.k)(null, null, Mr, {
            kind: "field",
            name: "vignetteColor",
            static: !1,
            private: !1,
            access: {
              has: rr => "vignetteColor" in rr,
              get: rr => rr.vignetteColor,
              set: (rr, Sr) => {
                rr.vignetteColor = Sr
              }
            },
            metadata: ar
          }, XS, PS), (0, Zr.k)(null, null, Gr, {
            kind: "field",
            name: "vignetteCameraFov",
            static: !1,
            private: !1,
            access: {
              has: rr => "vignetteCameraFov" in rr,
              get: rr => rr.vignetteCameraFov,
              set: (rr, Sr) => {
                rr.vignetteCameraFov = Sr
              }
            },
            metadata: ar
          }, HS, qS), (0, Zr.k)(null, null, kr, {
            kind: "field",
            name: "_vignetteBlendMode",
            static: !1,
            private: !1,
            access: {
              has: rr => "_vignetteBlendMode" in rr,
              get: rr => rr._vignetteBlendMode,
              set: (rr, Sr) => {
                rr._vignetteBlendMode = Sr
              }
            },
            metadata: ar
          }, RS, gS), (0, Zr.k)(null, null, Ar, {
            kind: "field",
            name: "_vignetteEnabled",
            static: !1,
            private: !1,
            access: {
              has: rr => "_vignetteEnabled" in rr,
              get: rr => rr._vignetteEnabled,
              set: (rr, Sr) => {
                rr._vignetteEnabled = Sr
              }
            },
            metadata: ar
          }, CS, MS), (0, Zr.k)(null, null, Vr, {
            kind: "field",
            name: "_ditheringEnabled",
            static: !1,
            private: !1,
            access: {
              has: rr => "_ditheringEnabled" in rr,
              get: rr => rr._ditheringEnabled,
              set: (rr, Sr) => {
                rr._ditheringEnabled = Sr
              }
            },
            metadata: ar
          }, GS, kS), (0, Zr.k)(null, null, ir, {
            kind: "field",
            name: "_ditheringIntensity",
            static: !1,
            private: !1,
            access: {
              has: rr => "_ditheringIntensity" in rr,
              get: rr => rr._ditheringIntensity,
              set: (rr, Sr) => {
                rr._ditheringIntensity = Sr
              }
            },
            metadata: ar
          }, AS, VS), (0, Zr.k)(null, null, wr, {
            kind: "field",
            name: "_skipFinalColorClamp",
            static: !1,
            private: !1,
            access: {
              has: rr => "_skipFinalColorClamp" in rr,
              get: rr => rr._skipFinalColorClamp,
              set: (rr, Sr) => {
                rr._skipFinalColorClamp = Sr
              }
            },
            metadata: ar
          }, iS, wS), (0, Zr.k)(null, null, cr, {
            kind: "field",
            name: "_applyByPostProcess",
            static: !1,
            private: !1,
            access: {
              has: rr => "_applyByPostProcess" in rr,
              get: rr => rr._applyByPostProcess,
              set: (rr, Sr) => {
                rr._applyByPostProcess = Sr
              }
            },
            metadata: ar
          }, cS, FS), (0, Zr.k)(null, null, Fr, {
            kind: "field",
            name: "_isEnabled",
            static: !1,
            private: !1,
            access: {
              has: rr => "_isEnabled" in rr,
              get: rr => rr._isEnabled,
              set: (rr, Sr) => {
                rr._isEnabled = Sr
              }
            },
            metadata: ar
          }, oS, bS), (0, Zr.k)(null, null, or, {
            kind: "field",
            name: "outputTextureWidth",
            static: !1,
            private: !1,
            access: {
              has: rr => "outputTextureWidth" in rr,
              get: rr => rr.outputTextureWidth,
              set: (rr, Sr) => {
                rr.outputTextureWidth = Sr
              }
            },
            metadata: ar
          }, JS, DS), (0, Zr.k)(null, null, br, {
            kind: "field",
            name: "outputTextureHeight",
            static: !1,
            private: !1,
            access: {
              has: rr => "outputTextureHeight" in rr,
              get: rr => rr.outputTextureHeight,
              set: (rr, Sr) => {
                rr.outputTextureHeight = Sr
              }
            },
            metadata: ar
          }, dS, sS), ar && Object.defineProperty(rr, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: ar
          })
        })(), rr.TONEMAPPING_STANDARD = 0, rr.TONEMAPPING_ACES = 1, rr.TONEMAPPING_KHR_PBR_NEUTRAL = 2, rr.PrepareUniforms = Or.g, rr.PrepareSamplers = Or.c, rr._VIGNETTEMODE_MULTIPLY = 0, rr._VIGNETTEMODE_OPAQUE = 1, rr
      })(),
      Xr = !1;

    function Pr(rr) {
      const Sr = Kr.e.Parse((() => new lr), rr, null, null);
      return void 0 !== rr.vignetteCentreX && (Sr.vignetteCenterX = rr.vignetteCentreX), void 0 !== rr.vignetteCentreY && (Sr.vignetteCenterY = rr.vignetteCentreY), Sr
    }

    function Hr() {
      Xr || (Xr = !0, lr.Parse = Pr, Kr.e._ImageProcessingConfigurationParser = Pr, (0, Lr.e)("BABYLON.ImageProcessingConfiguration", lr))
    }
  },
  41987: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => ar
    });
    var Zr = Qr(40246),
      Wr = Qr(41950);
    class ar {
      constructor(rr, Sr) {
        let Qr = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Zr = arguments.length > 3 ? arguments[3] : void 0,
          Wr = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          ar = arguments.length > 5 ? arguments[5] : void 0;
        this._uniformNames = [], this._valueCache = {}, this._engine = rr, this._noUBO = !rr.supportsUniformBuffers || Wr, this._dynamic = Qr, this._name = Zr ?? "no-name", this._data = Sr || [], this._uniformLocations = {}, this._uniformSizes = {}, this._uniformArraySizes = {}, this._uniformLocationPointer = 0, this._needSync = !1, this._dataGeneration = 0, this._trackUBOsInFrame = !1, (void 0 === ar && this._engine._features.trackUbosInFrame || !0 === ar) && (this._buffers = [], this._bufferIndex = -1, this._bufferUpdatedLastFrame = !1, this._createBufferOnWrite = !1, this._currentFrameId = 0, this._trackUBOsInFrame = !0, this._resetOwnerSlots()), this._noUBO ? (this.updateMatrix3x3 = this._updateMatrix3x3ForEffect, this.updateMatrix2x2 = this._updateMatrix2x2ForEffect, this.updateFloat = this._updateFloatForEffect, this.updateFloat2 = this._updateFloat2ForEffect, this.updateFloat3 = this._updateFloat3ForEffect, this.updateFloat4 = this._updateFloat4ForEffect, this.updateFloatArray = this._updateFloatArrayForEffect, this.updateArray = this._updateArrayForEffect, this.updateIntArray = this._updateIntArrayForEffect, this.updateUIntArray = this._updateUIntArrayForEffect, this.hrr = this._updateMatrixForEffect, this.updateMatrices = this._updateMatricesForEffect, this.updateVector3 = this._updateVector3ForEffect, this.updateVector4 = this._updateVector4ForEffect, this.updateColor3 = this._updateColor3ForEffect, this.updateColor4 = this._updateColor4ForEffect, this.updateDirectColor4 = this._updateDirectColor4ForEffect, this.updateInt = this._updateIntForEffect, this.updateInt2 = this._updateInt2ForEffect, this.updateInt3 = this._updateInt3ForEffect, this.updateInt4 = this._updateInt4ForEffect, this.updateUInt = this._updateUIntForEffect, this.updateUInt2 = this._updateUInt2ForEffect, this.updateUInt3 = this._updateUInt3ForEffect, this.updateUInt4 = this._updateUInt4ForEffect) : (this._engine._uniformBuffers.push(this), this.updateMatrix3x3 = this._updateMatrix3x3ForUniform, this.updateMatrix2x2 = this._updateMatrix2x2ForUniform, this.updateFloat = this._updateFloatForUniform, this.updateFloat2 = this._updateFloat2ForUniform, this.updateFloat3 = this._updateFloat3ForUniform, this.updateFloat4 = this._updateFloat4ForUniform, this.updateFloatArray = this._updateFloatArrayForUniform, this.updateArray = this._updateArrayForUniform, this.updateIntArray = this._updateIntArrayForUniform, this.updateUIntArray = this._updateUIntArrayForUniform, this.hrr = this._updateMatrixForUniform, this.updateMatrices = this._updateMatricesForUniform, this.updateVector3 = this._updateVector3ForUniform, this.updateVector4 = this._updateVector4ForUniform, this.updateColor3 = this._updateColor3ForUniform, this.updateColor4 = this._updateColor4ForUniform, this.updateDirectColor4 = this._updateDirectColor4ForUniform, this.updateInt = this._updateIntForUniform, this.updateInt2 = this._updateInt2ForUniform, this.updateInt3 = this._updateInt3ForUniform, this.updateInt4 = this._updateInt4ForUniform, this.updateUInt = this._updateUIntForUniform, this.updateUInt2 = this._updateUInt2ForUniform, this.updateUInt3 = this._updateUInt3ForUniform, this.updateUInt4 = this._updateUInt4ForUniform)
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
      _fillAlignment(rr) {
        let Sr;
        if (Sr = rr <= 2 ? rr : 4, this._uniformLocationPointer % Sr !== 0) {
          const rr = this._uniformLocationPointer;
          this._uniformLocationPointer += Sr - this._uniformLocationPointer % Sr;
          const Qr = this._uniformLocationPointer - rr;
          for (let Sr = 0; Sr < Qr; Sr++) this._data.push(0)
        }
      }
      addUniform(rr, Sr) {
        let Qr, Zr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (Zr > 0 && "number" === typeof Sr && (this._uniformArraySizes[rr] = {
            strideSize: Sr,
            arraySize: Zr
          }), void 0 === this._uniformLocations[rr] && (this._uniformNames.push(rr), !this._noUBO)) {
          if (Zr > 0) {
            if (Sr instanceof Array) throw "addUniform should not be use with Array in UBO: " + rr;
            if (this._fillAlignment(4), 16 == Sr) Sr *= Zr;
            else {
              Sr = Sr * Zr + (4 - Sr) * Zr
            }
            Qr = [];
            for (let rr = 0; rr < Sr; rr++) Qr.push(0)
          } else {
            if (Sr instanceof Array) Qr = Sr, Sr = Qr.length;
            else {
              Qr = [];
              for (let rr = 0; rr < Sr; rr++) Qr.push(0)
            }
            this._fillAlignment(Sr)
          }
          this._uniformSizes[rr] = Sr, this._uniformLocations[rr] = this._uniformLocationPointer, this._uniformLocationPointer += Sr;
          for (let rr = 0; rr < Sr; rr++) this._data.push(Qr[rr]);
          this._needSync = !0
        }
      }
      addMatrix(rr, Sr) {
        this.addUniform(rr, Array.prototype.slice.call(Sr.OWr()))
      }
      addFloat2(rr, Sr, Qr) {
        const Zr = [Sr, Qr];
        this.addUniform(rr, Zr)
      }
      addFloat3(rr, Sr, Qr, Zr) {
        const Wr = [Sr, Qr, Zr];
        this.addUniform(rr, Wr)
      }
      addColor3(rr, Sr) {
        const Qr = [Sr.r, Sr.g, Sr.b];
        this.addUniform(rr, Qr)
      }
      addColor4(rr, Sr, Qr) {
        const Zr = [Sr.r, Sr.g, Sr.b, Qr];
        this.addUniform(rr, Zr)
      }
      addVector3(rr, Sr) {
        const Qr = [Sr.x, Sr.y, Sr.z];
        this.addUniform(rr, Qr)
      }
      addMatrix3x3(rr) {
        this.addUniform(rr, 12)
      }
      addMatrix2x2(rr) {
        this.addUniform(rr, 8)
      }
      create() {
        this._noUBO || this._buffer || (this._fillAlignment(4), this._bufferData = new Float32Array(this._data), this._dataGeneration++, this._rebuild(), this._needSync = !0)
      }
      _getNamesDebug() {
        const rr = [];
        let Sr = 0;
        for (const Qr in this._uniformLocations)
          if (rr.push(Qr), 10 === ++Sr) break;
        return rr.join(",")
      }
      _rebuild() {
        !this._noUBO && this._bufferData && (this._dynamic ? this._buffer = this._engine.createDynamicUniformBuffer(this._bufferData, this._name + "_UniformList:" + this._getNamesDebug()) : this._buffer = this._engine.createUniformBuffer(this._bufferData, this._name + "_UniformList:" + this._getNamesDebug()), this._trackUBOsInFrame && (this._buffers.push([this._buffer, this._engine._features.checkUbosContentBeforeUpload ? this._bufferData.slice() : void 0]), this._bufferIndex = this._buffers.length - 1, this._createBufferOnWrite = !1))
      }
      _rebuildAfterContextLost() {
        this._trackUBOsInFrame && (this._buffers = [], this._currentFrameId = 0, this._resetOwnerSlots()), this._rebuild()
      }
      _resetOwnerSlots() {
        if (this._ownerListsBySlot)
          for (const rr of this._ownerListsBySlot.values()) this._removeOwnerBacklink(rr);
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
      set name(rr) {
        this._name = rr
      }
      get currentEffect() {
        return this._currentEffect
      }
      _buffersEqual(rr, Sr) {
        for (let Qr = 0; Qr < rr.length; ++Qr)
          if (rr[Qr] !== Sr[Qr]) return !1;
        return !0
      }
      _copyBuffer(rr, Sr) {
        for (let Qr = 0; Qr < rr.length; ++Qr) Sr[Qr] = rr[Qr]
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
      _updateOwnerKeyed(rr) {
        if (this._noUBO || !this._trackUBOsInFrame) return void this.update();
        this._buffer || this.create(), this._checkNewFrame();
        let Sr = this._slotByOwner.get(rr);
        if (void 0 === Sr && (Sr = 0 === this._ownerCount && 1 === this._buffers.length && 0 === this._freeSlots.length ? 0 : this._takeFreeSlot(!0), this._slotByOwner.set(rr, Sr), this._ownerCount++, rr._uniformBuffersWithOwnedSlot || (rr._uniformBuffersWithOwnedSlot = []), rr._uniformBuffersWithOwnedSlot.push(this), this._ownerListsBySlot.set(Sr, rr._uniformBuffersWithOwnedSlot)), this._slotGeneration[Sr] === this._dataGeneration) return this._bufferIndex = Sr, this._buffer = this._buffers[Sr][0], this.bindUniformBuffer(), this._slotFrameId[Sr] = this._currentFrameId, this._needSync = !1, void(this._createBufferOnWrite = !1);
        const Qr = this._buffers[Sr][1];
        this._slotFrameId[Sr] === this._currentFrameId && Qr && !this._buffersEqual(this._bufferData, Qr) && (Sr = this._takeFreeSlot(!1)), this._bufferIndex = Sr, this._buffer = this._buffers[Sr][0], this.bindUniformBuffer();
        const Zr = this._buffers[Sr][1];
        Zr && this._buffersEqual(this._bufferData, Zr) || (Zr && this._copyBuffer(this._bufferData, Zr), this._bufferUpdatedLastFrame = !0, this._engine.updateUniformBuffer(this._buffer, this._bufferData)), this._slotFrameId[Sr] = this._currentFrameId, this._slotGeneration[Sr] = this._dataGeneration, this._needSync = !1, this._createBufferOnWrite = !1
      }
      _takeFreeSlot(rr) {
        for (let Qr = 0; Qr < this._freeSlots.length; ++Qr) {
          const Sr = this._freeSlots[Qr];
          if (this._slotFrameId[Sr] !== this._currentFrameId) return rr && (this._freeSlots[Qr] = this._freeSlots[this._freeSlots.length - 1], this._freeSlots.pop()), Sr
        }
        this._rebuild();
        const Sr = this._buffers.length - 1;
        return rr || this._freeSlots.push(Sr), Sr
      }
      _releaseOwnerSlot(rr) {
        const Sr = this._slotByOwner?.get(rr);
        if (void 0 === Sr) return;
        this._slotByOwner.delete(rr);
        const Qr = this._ownerListsBySlot.get(Sr);
        Qr && (this._removeOwnerBacklink(Qr), this._ownerListsBySlot.delete(Sr)), this._ownerCount--, this._freeSlots.push(Sr)
      }
      _removeOwnerBacklink(rr) {
        const Sr = rr.indexOf(this); - 1 !== Sr && (rr[Sr] = rr[rr.length - 1], rr.pop())
      }
      _createNewBuffer() {
        this._bufferIndex + 1 < this._buffers.length ? (this._bufferIndex++, this._buffer = this._buffers[this._bufferIndex][0], this._createBufferOnWrite = !1, this._needSync = !0) : this._rebuild()
      }
      _checkNewFrame() {
        this._trackUBOsInFrame && this._currentFrameId !== this._engine.frameId && (this._currentFrameId = this._engine.frameId, this._createBufferOnWrite = !1, this._buffers && this._buffers.length > 0 ? (1 === this._buffers.length ? this._needSync = !this._bufferUpdatedLastFrame : this._needSync = 0 !== this._bufferIndex, this._bufferIndex = 0, this._buffer = this._buffers[this._bufferIndex][0]) : this._bufferIndex = -1)
      }
      updateUniform(rr, Sr, Qr) {
        this._checkNewFrame();
        let Wr = this._uniformLocations[rr];
        if (void 0 === Wr) {
          if (this._buffer) return void Zr.c.Error("Cannot add an uniform after UBO has been created. uniformName=" + rr);
          this.addUniform(rr, Qr), Wr = this._uniformLocations[rr]
        }
        if (this._buffer || this.create(), this._dynamic) {
          for (let rr = 0; rr < Qr; rr++) this._bufferData[Wr + rr] = Sr[rr];
          this._dataGeneration++
        } else {
          let rr = !1;
          for (let Zr = 0; Zr < Qr; Zr++)(16 === Qr && !this._engine._features.uniformBufferHardCheckMatrix || this._bufferData[Wr + Zr] !== Math.fround(Sr[Zr])) && (rr = !0, this._createBufferOnWrite && this._createNewBuffer(), this._bufferData[Wr + Zr] = Sr[Zr]);
          this._needSync = this._needSync || rr, rr && this._dataGeneration++
        }
      }
      updateUniformArray(rr, Sr, Qr) {
        this._checkNewFrame();
        const ar = this._uniformLocations[rr];
        if (void 0 === ar) return void Zr.c.Error("Cannot add an uniform Array dynamically. Please, add it using addUniform and make sure that uniform buffers are supported by the current engine.");
        this._buffer || this.create();
        const jr = this._uniformArraySizes[rr];
        if (this._dynamic) {
          for (let rr = 0; rr < Qr; rr++) this._bufferData[ar + rr] = Sr[rr];
          this._dataGeneration++
        } else {
          let rr = !1,
            Zr = 0,
            Ir = 0;
          for (let fr = 0; fr < Qr; fr++)
            if (this._bufferData[ar + 4 * Ir + Zr] !== Wr.h.FloatRound(Sr[fr]) && (rr = !0, this._createBufferOnWrite && this._createNewBuffer(), this._bufferData[ar + 4 * Ir + Zr] = Sr[fr]), Zr++, Zr === jr.strideSize) {
              for (; Zr < 4; Zr++) this._bufferData[ar + 4 * Ir + Zr] = 0;
              Zr = 0, Ir++
            } this._needSync = this._needSync || rr, rr && this._dataGeneration++
        }
      }
      _cacheMatrix(rr, Sr) {
        this._checkNewFrame();
        const Qr = this._valueCache[rr],
          Zr = Sr.updateFlag;
        return (void 0 === Qr || Qr !== Zr) && (this._valueCache[rr] = Zr, !0)
      }
      _updateMatrix3x3ForUniform(rr, Sr) {
        for (let Qr = 0; Qr < 3; Qr++) ar._TempBuffer[4 * Qr] = Sr[3 * Qr], ar._TempBuffer[4 * Qr + 1] = Sr[3 * Qr + 1], ar._TempBuffer[4 * Qr + 2] = Sr[3 * Qr + 2], ar._TempBuffer[4 * Qr + 3] = 0;
        this.updateUniform(rr, ar._TempBuffer, 12)
      }
      _updateMatrix3x3ForEffect(rr, Sr) {
        this._currentEffect.setMatrix3x3(rr, Sr)
      }
      _updateMatrix2x2ForEffect(rr, Sr) {
        this._currentEffect.setMatrix2x2(rr, Sr)
      }
      _updateMatrix2x2ForUniform(rr, Sr) {
        for (let Qr = 0; Qr < 2; Qr++) ar._TempBuffer[4 * Qr] = Sr[2 * Qr], ar._TempBuffer[4 * Qr + 1] = Sr[2 * Qr + 1], ar._TempBuffer[4 * Qr + 2] = 0, ar._TempBuffer[4 * Qr + 3] = 0;
        this.updateUniform(rr, ar._TempBuffer, 8)
      }
      _updateFloatForEffect(rr, Sr) {
        let Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        this._currentEffect.setFloat(rr + Qr, Sr)
      }
      _updateFloatForUniform(rr, Sr) {
        ar._TempBuffer[0] = Sr, this.updateUniform(rr, ar._TempBuffer, 1)
      }
      _updateFloat2ForEffect(rr, Sr, Qr) {
        let Zr = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
        this._currentEffect.setFloat2(rr + Zr, Sr, Qr)
      }
      _updateFloat2ForUniform(rr, Sr, Qr) {
        ar._TempBuffer[0] = Sr, ar._TempBuffer[1] = Qr, this.updateUniform(rr, ar._TempBuffer, 2)
      }
      _updateFloat3ForEffect(rr, Sr, Qr, Zr) {
        let Wr = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "";
        this._currentEffect.setFloat3(rr + Wr, Sr, Qr, Zr)
      }
      _updateFloat3ForUniform(rr, Sr, Qr, Zr) {
        ar._TempBuffer[0] = Sr, ar._TempBuffer[1] = Qr, ar._TempBuffer[2] = Zr, this.updateUniform(rr, ar._TempBuffer, 3)
      }
      _updateFloat4ForEffect(rr, Sr, Qr, Zr, Wr) {
        let ar = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "";
        this._currentEffect.setFloat4(rr + ar, Sr, Qr, Zr, Wr)
      }
      _updateFloat4ForUniform(rr, Sr, Qr, Zr, Wr) {
        ar._TempBuffer[0] = Sr, ar._TempBuffer[1] = Qr, ar._TempBuffer[2] = Zr, ar._TempBuffer[3] = Wr, this.updateUniform(rr, ar._TempBuffer, 4)
      }
      _updateFloatArrayForEffect(rr, Sr) {
        let Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        switch (this._uniformArraySizes[rr]?.strideSize) {
          case 2:
            this._currentEffect.setFloatArray2(rr + Qr, Sr);
            break;
          case 3:
            this._currentEffect.setFloatArray3(rr + Qr, Sr);
            break;
          case 4:
            this._currentEffect.setFloatArray4(rr + Qr, Sr);
            break;
          default:
            this._currentEffect.setFloatArray(rr + Qr, Sr)
        }
      }
      _updateFloatArrayForUniform(rr, Sr) {
        this.updateUniformArray(rr, Sr, Sr.length)
      }
      _updateArrayForEffect(rr, Sr) {
        this._currentEffect.setArray(rr, Sr)
      }
      _updateArrayForUniform(rr, Sr) {
        this.updateUniformArray(rr, Sr, Sr.length)
      }
      _updateIntArrayForEffect(rr, Sr) {
        this._currentEffect.setIntArray(rr, Sr)
      }
      _updateIntArrayForUniform(rr, Sr) {
        ar._TempBufferInt32View.set(Sr), this.updateUniformArray(rr, ar._TempBuffer, Sr.length)
      }
      _updateUIntArrayForEffect(rr, Sr) {
        this._currentEffect.setUIntArray(rr, Sr)
      }
      _updateUIntArrayForUniform(rr, Sr) {
        ar._TempBufferUInt32View.set(Sr), this.updateUniformArray(rr, ar._TempBuffer, Sr.length)
      }
      _updateMatrixForEffect(rr, Sr) {
        this._currentEffect.setMatrix(rr, Sr)
      }
      _updateMatrixForUniform(rr, Sr) {
        this._cacheMatrix(rr, Sr) && this.updateUniform(rr, Sr.OWr(), 16)
      }
      _updateMatricesForEffect(rr, Sr) {
        this._currentEffect.setMatrices(rr, Sr)
      }
      _updateMatricesForUniform(rr, Sr) {
        this.updateUniform(rr, Sr, Sr.length)
      }
      _updateVector3ForEffect(rr, Sr) {
        this._currentEffect.setVector3(rr, Sr)
      }
      _updateVector3ForUniform(rr, Sr) {
        ar._TempBuffer[0] = Sr.x, ar._TempBuffer[1] = Sr.y, ar._TempBuffer[2] = Sr.z, this.updateUniform(rr, ar._TempBuffer, 3)
      }
      _updateVector4ForEffect(rr, Sr) {
        this._currentEffect.setVector4(rr, Sr)
      }
      _updateVector4ForUniform(rr, Sr) {
        ar._TempBuffer[0] = Sr.x, ar._TempBuffer[1] = Sr.y, ar._TempBuffer[2] = Sr.z, ar._TempBuffer[3] = Sr.w, this.updateUniform(rr, ar._TempBuffer, 4)
      }
      _updateColor3ForEffect(rr, Sr) {
        let Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        this._currentEffect.setColor3(rr + Qr, Sr)
      }
      _updateColor3ForUniform(rr, Sr) {
        ar._TempBuffer[0] = Sr.r, ar._TempBuffer[1] = Sr.g, ar._TempBuffer[2] = Sr.b, this.updateUniform(rr, ar._TempBuffer, 3)
      }
      _updateColor4ForEffect(rr, Sr, Qr) {
        let Zr = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
        this._currentEffect.setColor4(rr + Zr, Sr, Qr)
      }
      _updateDirectColor4ForEffect(rr, Sr) {
        let Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        this._currentEffect.setDirectColor4(rr + Qr, Sr)
      }
      _updateColor4ForUniform(rr, Sr, Qr) {
        ar._TempBuffer[0] = Sr.r, ar._TempBuffer[1] = Sr.g, ar._TempBuffer[2] = Sr.b, ar._TempBuffer[3] = Qr, this.updateUniform(rr, ar._TempBuffer, 4)
      }
      _updateDirectColor4ForUniform(rr, Sr) {
        ar._TempBuffer[0] = Sr.r, ar._TempBuffer[1] = Sr.g, ar._TempBuffer[2] = Sr.b, ar._TempBuffer[3] = Sr.a, this.updateUniform(rr, ar._TempBuffer, 4)
      }
      _updateIntForEffect(rr, Sr) {
        let Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        this._currentEffect.setInt(rr + Qr, Sr)
      }
      _updateIntForUniform(rr, Sr) {
        ar._TempBufferInt32View[0] = Sr, this.updateUniform(rr, ar._TempBuffer, 1)
      }
      _updateInt2ForEffect(rr, Sr, Qr) {
        let Zr = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
        this._currentEffect.setInt2(rr + Zr, Sr, Qr)
      }
      _updateInt2ForUniform(rr, Sr, Qr) {
        ar._TempBufferInt32View[0] = Sr, ar._TempBufferInt32View[1] = Qr, this.updateUniform(rr, ar._TempBuffer, 2)
      }
      _updateInt3ForEffect(rr, Sr, Qr, Zr) {
        let Wr = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "";
        this._currentEffect.setInt3(rr + Wr, Sr, Qr, Zr)
      }
      _updateInt3ForUniform(rr, Sr, Qr, Zr) {
        ar._TempBufferInt32View[0] = Sr, ar._TempBufferInt32View[1] = Qr, ar._TempBufferInt32View[2] = Zr, this.updateUniform(rr, ar._TempBuffer, 3)
      }
      _updateInt4ForEffect(rr, Sr, Qr, Zr, Wr) {
        let ar = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "";
        this._currentEffect.setInt4(rr + ar, Sr, Qr, Zr, Wr)
      }
      _updateInt4ForUniform(rr, Sr, Qr, Zr, Wr) {
        ar._TempBufferInt32View[0] = Sr, ar._TempBufferInt32View[1] = Qr, ar._TempBufferInt32View[2] = Zr, ar._TempBufferInt32View[3] = Wr, this.updateUniform(rr, ar._TempBuffer, 4)
      }
      _updateUIntForEffect(rr, Sr) {
        let Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        this._currentEffect.setUInt(rr + Qr, Sr)
      }
      _updateUIntForUniform(rr, Sr) {
        ar._TempBufferUInt32View[0] = Sr, this.updateUniform(rr, ar._TempBuffer, 1)
      }
      _updateUInt2ForEffect(rr, Sr, Qr) {
        let Zr = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
        this._currentEffect.setUInt2(rr + Zr, Sr, Qr)
      }
      _updateUInt2ForUniform(rr, Sr, Qr) {
        ar._TempBufferUInt32View[0] = Sr, ar._TempBufferUInt32View[1] = Qr, this.updateUniform(rr, ar._TempBuffer, 2)
      }
      _updateUInt3ForEffect(rr, Sr, Qr, Zr) {
        let Wr = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "";
        this._currentEffect.setUInt3(rr + Wr, Sr, Qr, Zr)
      }
      _updateUInt3ForUniform(rr, Sr, Qr, Zr) {
        ar._TempBufferUInt32View[0] = Sr, ar._TempBufferUInt32View[1] = Qr, ar._TempBufferUInt32View[2] = Zr, this.updateUniform(rr, ar._TempBuffer, 3)
      }
      _updateUInt4ForEffect(rr, Sr, Qr, Zr, Wr) {
        let ar = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "";
        this._currentEffect.setUInt4(rr + ar, Sr, Qr, Zr, Wr)
      }
      _updateUInt4ForUniform(rr, Sr, Qr, Zr, Wr) {
        ar._TempBufferUInt32View[0] = Sr, ar._TempBufferUInt32View[1] = Qr, ar._TempBufferUInt32View[2] = Zr, ar._TempBufferUInt32View[3] = Wr, this.updateUniform(rr, ar._TempBuffer, 4)
      }
      setTexture(rr, Sr) {
        this._currentEffect.setTexture(rr, Sr)
      }
      setTextureArray(rr, Sr) {
        this._currentEffect.setTextureArray(rr, Sr)
      }
      bindTexture(rr, Sr) {
        this._currentEffect._bindTexture(rr, Sr)
      }
      updateUniformDirectly(rr, Sr) {
        this.updateUniform(rr, Sr, Sr.length), this.update()
      }
      bindToEffect(rr, Sr) {
        this._currentEffect = rr, this._currentEffectName = Sr
      }
      bindUniformBuffer() {
        !this._noUBO && this._buffer && this._currentEffect && this._currentEffect.bindUniformBuffer(this._buffer, this._currentEffectName)
      }
      unbindEffect() {
        this._currentEffect = void 0, this._currentEffectName = void 0
      }
      setDataBuffer(rr) {
        if (!this._buffers) return this._buffer === rr;
        for (let Sr = 0; Sr < this._buffers.length; ++Sr) {
          if (this._buffers[Sr][0] === rr) return this._bufferIndex = Sr, this._buffer = rr, this._createBufferOnWrite = !1, this._currentEffect = void 0, this._buffers.length > 1 && this._buffers[Sr][1] && (this._bufferData.set(this._buffers[Sr][1]), this._dataGeneration++), this._valueCache = {}, this._currentFrameId = this._engine.frameId, !0
        }
        return !1
      }
      has(rr) {
        return void 0 !== this._uniformLocations[rr]
      }
      dispose() {
        if (this._noUBO) return;
        const rr = this._engine._uniformBuffers,
          Sr = rr.indexOf(this);
        if (-1 !== Sr && (rr[Sr] = rr[rr.length - 1], rr.pop()), this._trackUBOsInFrame && this._buffers) {
          this._resetOwnerSlots();
          for (let rr = 0; rr < this._buffers.length; ++rr) {
            const Sr = this._buffers[rr][0];
            this._engine._releaseBuffer(Sr)
          }
          this._buffers = [], this._buffer = null, this._bufferIndex = -1
        } else this._buffer && this._engine._releaseBuffer(this._buffer) && (this._buffer = null)
      }
    }
    ar._MAX_UNIFORM_SIZE = 256, ar._TempBuffer = new Float32Array(ar._MAX_UNIFORM_SIZE), ar._TempBufferInt32View = new Int32Array(ar._TempBuffer.buffer), ar._TempBufferUInt32View = new Uint32Array(ar._TempBuffer.buffer)
  },
  41803: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      e: () => Wr
    });
    var Zr = Qr(41811);
    class Wr extends Zr.e {
      constructor(rr) {
        super(), this._buffer = rr
      }
      get underlyingResource() {
        return this._buffer
      }
    }
  },
  41880: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => fr,
      g: () => Er
    });
    const Zr = "__bjs_serializable__",
      Wr = new WeakMap;

    function ar(rr, Sr) {
      return Object.prototype.hasOwnProperty.call(rr, Sr)
    }
    const jr = function() {
      let rr = Symbol.metadata;
      return rr || (rr = Symbol("Symbol.metadata"), Object.defineProperty(Symbol, "metadata", {
        configurable: !0,
        writable: !0,
        value: rr
      })), rr
    }();

    function Ir(rr) {
      return "function" === typeof rr ? rr : rr?.constructor
    }

    function fr(rr) {
      if (!rr) throw new Error(`Decorator metadata is unavailable; the Symbol.metadata (${String(jr)}) polyfill must run before decorated classes are evaluated.`);
      return ar(rr, Zr) || (rr[Zr] = {}), rr[Zr]
    }

    function Er(rr) {
      const Sr = Ir(rr),
        Qr = Sr ? Sr[jr] : void 0;
      if (!Qr) return {};
      const fr = Wr.get(Qr);
      if (fr) return fr;
      const Er = {},
        pr = [];
      let xr = Qr;
      for (; xr;) pr.push(xr), xr = Object.getPrototypeOf(xr);
      for (const Wr of pr)
        if (ar(Wr, Zr)) {
          const rr = Wr[Zr];
          for (const Sr in rr) Er[Sr] = rr[Sr]
        } return Wr.set(Qr, Er), Er
    }
  },
  41875: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      A: () => pr,
      C: () => xr,
      G: () => jr,
      c: () => nr,
      f: () => ar,
      j: () => Yr,
      m: () => Nr,
      n: () => fr,
      q: () => Ur,
      r: () => Er,
      s: () => hr,
      v: () => mr,
      w: () => tr,
      z: () => Ir
    });
    var Zr = Qr(41880);

    function Wr(rr, Sr) {
      return (Qr, Wr) => {
        if (!Wr.metadata) return;
        const ar = String(Wr.name),
          jr = (0, Zr.d)(Wr.metadata);
        jr[ar] || (jr[ar] = {
          type: rr,
          sourceName: Sr
        })
      }
    }

    function ar(rr) {
      return function(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return (Qr, Zr) => {
          const Wr = Sr || "_" + String(Zr.name);
          return {
            init(rr) {
              return void 0 === rr && Wr in this || (this[Wr] = rr), rr
            },
            get() {
              return this[Wr]
            },
            set(Sr) {
              "function" === typeof this[Wr]?.equals && this[Wr].equals(Sr) || this[Wr] !== Sr && (this[Wr] = Sr, this[rr]())
            }
          }
        }
      }(rr, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null)
    }

    function jr(rr) {
      return Wr(0, rr)
    }

    function Ir(rr) {
      return Wr(1, rr)
    }

    function fr(rr) {
      return Wr(2, rr)
    }

    function Er(rr) {
      return Wr(3, rr)
    }

    function pr(rr) {
      return Wr(4, rr)
    }

    function xr(rr) {
      return Wr(5, rr)
    }

    function mr(rr) {
      return Wr(6, rr)
    }

    function Nr(rr) {
      return Wr(7, rr)
    }

    function Ur(rr) {
      return Wr(8, rr)
    }

    function tr(rr) {
      return Wr(10, rr)
    }

    function hr(rr) {
      return Wr(12, rr)
    }

    function zr(rr, Sr, Qr) {
      const Zr = String(Sr.name);
      let Wr = null;
      const ar = function() {
        if (null === Wr) {
          Wr = rr, "undefined" !== typeof _native && _native[Zr] && (Wr = Qr(_native[Zr], rr));
          const jr = this && (Sr.static ? this : Object.getPrototypeOf(this));
          jr?.[Zr] === ar && (jr[Zr] = Wr)
        }
        for (var jr = arguments.length, Ir = new Array(jr), fr = 0; fr < jr; fr++) Ir[fr] = arguments[fr];
        return Wr.apply(this, Ir)
      };
      return ar
    }

    function Yr(rr, Sr) {
      return zr(rr, Sr, (rr => rr))
    }

    function nr(rr) {
      let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      return (Qr, Zr) => {
        const Wr = Sr || "_" + String(Zr.name);
        return {
          get() {
            return this[Wr]?.value
          },
          set(Sr) {
            "function" === typeof this[Wr]?.value?.equals && this[Wr].value.equals(Sr) || this[Wr].value !== Sr && (this[Wr].value = Sr, this[rr]())
          }
        }
      }
    }
    Yr.filter = function(rr) {
      return (Sr, Qr) => zr(Sr, Qr, ((Sr, Qr) => function() {
        for (var Zr = arguments.length, Wr = new Array(Zr), ar = 0; ar < Zr; ar++) Wr[ar] = arguments[ar];
        return rr(...Wr) ? Sr(...Wr) : Qr.apply(this, Wr)
      }))
    }
  },
  41889: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      e: () => Er
    });
    var Zr = Qr(41769),
      Wr = Qr(41891),
      ar = Qr(38684),
      jr = Qr(38560),
      Ir = Qr(41880);
    const fr = function(rr, Sr, Qr) {
      let Zr = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const ar = rr();
      Wr.b && Wr.b.HasTags(Sr) && Wr.b.AddTagsTo(ar, Wr.b.GetTags(Sr, !0));
      const jr = (0, Ir.g)(ar),
        fr = {};
      for (const Wr in jr) {
        const rr = jr[Wr],
          Ir = Sr[Wr],
          pr = rr.type;
        if (void 0 !== Ir && null !== Ir && ("uniqueId" !== Wr || Er.AllowLoadingUniqueId)) switch (pr) {
          case 0:
          case 6:
          case 9:
          case 11:
            "function" === typeof Ir.slice ? ar[Wr] = Ir.slice() : ar[Wr] = Ir;
            break;
          case 1:
            Zr.cloneTexturesOnlyOnce && fr[Ir.uniqueId] ? ar[Wr] = fr[Ir.uniqueId] : (ar[Wr] = Qr || Ir.isRenderTarget ? Ir : Ir.clone(), fr[Ir.uniqueId] = ar[Wr]);
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
            ar[Wr] = Qr ? Ir : Ir.clone()
        }
      }
      return ar
    };
    class Er {
      static AppendSerializedAnimations(rr, Sr) {
        if (rr.animations) {
          Sr.animations = [];
          for (let Qr = 0; Qr < rr.animations.length; Qr++) {
            const Zr = rr.animations[Qr];
            Sr.animations.push(Zr.serialize())
          }
        }
      }
      static Serialize(rr, Sr) {
        Sr || (Sr = {}), Wr.b && (Sr.tags = Wr.b.GetTags(rr));
        const Qr = (0, Ir.g)(rr);
        for (const Zr in Qr) {
          const Wr = Qr[Zr],
            ar = Wr.sourceName || Zr,
            jr = Wr.type,
            Ir = rr[Zr];
          if (void 0 !== Ir && null !== Ir && ("uniqueId" !== Zr || Er.AllowLoadingUniqueId)) switch (jr) {
            case 0:
              Array.isArray(Ir) ? Sr[ar] = Ir.slice() : Sr[ar] = Ir;
              break;
            case 1:
            case 3:
            case 7:
            case 9:
              Sr[ar] = Ir.serialize();
              break;
            case 2:
            case 4:
            case 5:
            case 8:
            case 10:
            case 12:
            case 13:
              Sr[ar] = Ir.OWr();
              break;
            case 6:
            case 11:
              Sr[ar] = Ir.id
          }
        }
        return Sr
      }
      static ParseProperties(rr, Sr, Qr, Zr) {
        Zr || (Zr = "");
        const Wr = (0, Ir.g)(Sr);
        for (const Ir in Wr) {
          const fr = Wr[Ir],
            pr = rr[fr.sourceName || Ir],
            xr = fr.type;
          if (void 0 !== pr && null !== pr && ("uniqueId" !== Ir || Er.AllowLoadingUniqueId)) {
            const rr = Sr;
            switch (xr) {
              case 0:
                rr[Ir] = pr;
                break;
              case 1:
                Qr && (rr[Ir] = Er._TextureParser(pr, Qr, Zr));
                break;
              case 2:
                rr[Ir] = ar.e.FromArray(pr);
                break;
              case 3:
                rr[Ir] = Er._FresnelParametersParser(pr);
                break;
              case 4:
                rr[Ir] = jr.q.FromArray(pr);
                break;
              case 5:
                rr[Ir] = jr.u.FromArray(pr);
                break;
              case 6:
                Qr && (rr[Ir] = Qr.getLastMeshById(pr));
                break;
              case 7:
                rr[Ir] = Er._ColorCurvesParser(pr);
                break;
              case 8:
                rr[Ir] = ar.f.FromArray(pr);
                break;
              case 9:
                rr[Ir] = Er._ImageProcessingConfigurationParser(pr);
                break;
              case 10:
                rr[Ir] = jr.h.FromArray(pr);
                break;
              case 11:
                Qr && (rr[Ir] = Qr.getCameraById(pr));
                break;
              case 12:
                rr[Ir] = jr.d.FromArray(pr);
                break;
              case 13:
                rr[Ir] = jr.x.FromArray(pr)
            }
          }
        }
      }
      static Parse(rr, Sr, Qr) {
        let Zr = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const ar = rr();
        return Wr.b && Wr.b.AddTagsTo(ar, Sr.tags), Er.ParseProperties(Sr, ar, Qr, Zr), ar
      }
      static Clone(rr, Sr) {
        return fr(rr, Sr, !1, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {})
      }
      static Instanciate(rr, Sr) {
        return fr(rr, Sr, !0)
      }
    }
    Er.AllowLoadingUniqueId = !1, Er._ImageProcessingConfigurationParser = rr => {
      throw (0, Zr.l)("ImageProcessingConfiguration")
    }, Er._FresnelParametersParser = rr => {
      throw (0, Zr.l)("FresnelParameters")
    }, Er._ColorCurvesParser = rr => {
      throw (0, Zr.l)("ColorCurves")
    }, Er._TextureParser = (rr, Sr, Qr) => {
      throw (0, Zr.l)("Texture")
    }
  },
  41834: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      b: () => Wr
    });
    var Zr = Qr(41787);
    class Wr {
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
        this._totalValueCount++, this._current = 0, this._hasCurrentValue = Wr.Enabled, this._lastSecValueCount++
      }
      addCount(rr, Sr) {
        Wr.Enabled && (this._current += rr, this._hasCurrentValue = !0, Sr && this._fetchResult())
      }
      beginMonitoring() {
        Wr.Enabled && (this._startMonitoringTime = Zr.c.Now)
      }
      endMonitoring() {
        let rr = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        if (!Wr.Enabled) return;
        rr && this.fetchNewFrame();
        const Sr = Zr.c.Now;
        this._current = Sr - this._startMonitoringTime, this._hasCurrentValue = !0, rr && this._fetchResult()
      }
      Bx() {
        this._fetchResult()
      }
      _fetchResult() {
        if (!this._hasCurrentValue) return;
        this._totalAccumulated += this._current, this._lastSecAccumulated += this._current, this._hasResult ? (this._min = Math.min(this._min, this._current), this._max = Math.max(this._max, this._current)) : (this._min = this._current, this._max = this._current, this._hasResult = !0), this._average = this._totalAccumulated / this._totalValueCount;
        const rr = Zr.c.Now;
        rr - this._lastSecTime > 1e3 && (this._lastSecAverage = this._lastSecAccumulated / this._lastSecValueCount, this._lastSecTime = rr, this._lastSecAccumulated = 0, this._lastSecValueCount = 0)
      }
    }
    Wr.Enabled = !0
  },
  41960: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      e: () => Wr,
      h: () => Zr
    });
    class Zr {
      constructor(rr) {
        this.length = 0, this.data = new Array(rr), this._id = Zr._GlobalId++
      }
      push(rr) {
        this.data[this.length++] = rr, this.length > this.data.length && (this.data.length *= 2)
      }
      forEach(rr) {
        for (let Sr = 0; Sr < this.length; Sr++) rr(this.data[Sr])
      }
      sort(rr) {
        this.data.sort(rr)
      }
      reset() {
        this.length = 0
      }
      dispose() {
        this.reset(), this.data && (this.data.length = 0)
      }
      concat(rr) {
        if (0 !== rr.length) {
          this.length + rr.length > this.data.length && (this.data.length = 2 * (this.length + rr.length));
          for (let Sr = 0; Sr < rr.length; Sr++) this.data[this.length++] = (rr.data || rr)[Sr]
        }
      }
      indexOf(rr) {
        const Sr = this.data.indexOf(rr);
        return Sr >= this.length ? -1 : Sr
      }
      contains(rr) {
        return -1 !== this.indexOf(rr)
      }
    }
    Zr._GlobalId = 0;
    class Wr extends Zr {
      constructor() {
        super(...arguments), this._duplicateId = 0
      }
      push(rr) {
        super.push(rr), rr.__smartArrayFlags || (rr.__smartArrayFlags = {}), rr.__smartArrayFlags[this._id] = this._duplicateId
      }
      pushNoDuplicate(rr) {
        return (!rr.__smartArrayFlags || rr.__smartArrayFlags[this._id] !== this._duplicateId) && (this.push(rr), !0)
      }
      reset() {
        super.reset(), this._duplicateId++
      }
      concatWithNoDuplicate(rr) {
        if (0 !== rr.length) {
          this.length + rr.length > this.data.length && (this.data.length = 2 * (this.length + rr.length));
          for (let Sr = 0; Sr < rr.length; Sr++) {
            const Qr = (rr.data || rr)[Sr];
            this.pushNoDuplicate(Qr)
          }
        }
      }
    }
  },
  41891: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      b: () => Wr
    });
    class Zr {
      static Eval(rr, Sr) {
        return "true" === (rr = rr.match(/\([^()]*\)/g) ? rr.replace(/\([^()]*\)/g, (rr => (rr = rr.slice(1, rr.length - 1), Zr._HandleParenthesisContent(rr, Sr)))) : Zr._HandleParenthesisContent(rr, Sr)) || "false" !== rr && Zr.Eval(rr, Sr)
      }
      static _HandleParenthesisContent(rr, Sr) {
        let Qr;
        Sr = Sr || (rr => "true" === rr);
        const Wr = rr.split("||");
        for (const ar in Wr)
          if (Object.prototype.hasOwnProperty.call(Wr, ar)) {
            let rr = Zr._SimplifyNegation(Wr[ar].trim());
            const jr = rr.split("&&");
            if (jr.length > 1)
              for (let Wr = 0; Wr < jr.length; ++Wr) {
                const ar = Zr._SimplifyNegation(jr[Wr].trim());
                if (Qr = "true" !== ar && "false" !== ar ? "!" === ar[0] ? !Sr(ar.substring(1)) : Sr(ar) : "true" === ar, !Qr) {
                  rr = "false";
                  break
                }
              }
            if (Qr || "true" === rr) {
              Qr = !0;
              break
            }
            Qr = "true" !== rr && "false" !== rr ? "!" === rr[0] ? !Sr(rr.substring(1)) : Sr(rr) : "true" === rr
          } return Qr ? "true" : "false"
      }
      static _SimplifyNegation(rr) {
        return "!true" === (rr = (rr = rr.replace(/^[\s!]+/, (rr => (rr = rr.replace(/[\s]/g, (() => ""))).length % 2 ? "!" : ""))).trim()) ? rr = "false" : "!false" === rr && (rr = "true"), rr
      }
    }
    class Wr {
      static EnableFor(rr) {
        rr._tags = rr._tags || {}, rr.hasTags = () => Wr.HasTags(rr), rr.addTags = Sr => Wr.AddTagsTo(rr, Sr), rr.removeTags = Sr => Wr.RemoveTagsFrom(rr, Sr), rr.matchesTagsQuery = Sr => Wr.MatchesQuery(rr, Sr)
      }
      static DisableFor(rr) {
        delete rr._tags, delete rr.hasTags, delete rr.addTags, delete rr.removeTags, delete rr.matchesTagsQuery
      }
      static HasTags(rr) {
        if (!rr._tags) return !1;
        const Sr = rr._tags;
        for (const Qr in Sr)
          if (Object.prototype.hasOwnProperty.call(Sr, Qr)) return !0;
        return !1
      }
      static GetTags(rr) {
        let Sr = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (!rr._tags) return null;
        if (Sr) {
          const Sr = [];
          for (const Qr in rr._tags) Object.prototype.hasOwnProperty.call(rr._tags, Qr) && !0 === rr._tags[Qr] && Sr.push(Qr);
          return Sr.join(" ")
        }
        return rr._tags
      }
      static AddTagsTo(rr, Sr) {
        if (!Sr) return;
        if ("string" !== typeof Sr) return;
        const Qr = Sr.split(" ");
        for (const Zr of Qr) Wr._AddTagTo(rr, Zr)
      }
      static _AddTagTo(rr, Sr) {
        "" !== (Sr = Sr.trim()) && "true" !== Sr && "false" !== Sr && (Sr.match(/[\s]/) || Sr.match(/^([!]|([|]|[&]){2})/) || (Wr.EnableFor(rr), rr._tags[Sr] = !0))
      }
      static RemoveTagsFrom(rr, Sr) {
        if (!Wr.HasTags(rr)) return;
        const Qr = Sr.split(" ");
        for (const Zr in Qr) Wr._RemoveTagFrom(rr, Qr[Zr])
      }
      static _RemoveTagFrom(rr, Sr) {
        delete rr._tags[Sr]
      }
      static MatchesQuery(rr, Sr) {
        return void 0 === Sr || ("" === Sr ? Wr.HasTags(rr) : Zr.Eval(Sr, (Sr => Wr.HasTags(rr) && rr._tags[Sr])))
      }
    }
  },
  42002: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      c: () => ar
    });
    var Zr = Qr(41995),
      Wr = Qr(38595);
    class ar {
      constructor(rr) {
        this._vertexBuffers = {}, this._activePostProcesses = [], this.onBeforeRenderObservable = new Wr.d, this._scene = rr
      }
      _prepareBuffers() {
        if (this._vertexBuffers[Zr.j.PositionKind]) return;
        const rr = [];
        rr.push(1, 1), rr.push(-1, 1), rr.push(-1, -1), rr.push(1, -1), this._vertexBuffers[Zr.j.PositionKind] = new Zr.j(this._scene.MU(), rr, Zr.j.PositionKind, !1, !1, 2), this._buildIndexBuffer()
      }
      _buildIndexBuffer() {
        const rr = [];
        rr.push(0), rr.push(1), rr.push(2), rr.push(0), rr.push(2), rr.push(3), this._indexBuffer = this._scene.MU().createIndexBuffer(rr)
      }
      _getActivePostProcesses(rr) {
        const Sr = this._activePostProcesses;
        Sr.length = 0;
        for (let Qr = 0; Qr < rr.length; Qr++) {
          const Zr = rr[Qr];
          Zr && Sr.push(Zr)
        }
        return Sr
      }
      _rebuild() {
        const rr = this._vertexBuffers[Zr.j.PositionKind];
        rr && (rr._rebuild(), this._buildIndexBuffer())
      }
      _prepareFrame() {
        let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const Qr = this._scene.activeCamera;
        return !!Qr && (Sr = Sr || this._getActivePostProcesses(Qr._postProcesses), !(!Sr || 0 === Sr.length || !this._scene.postProcessesEnabled) && (Sr[0].activate(Qr, rr, null !== Sr && void 0 !== Sr), !0))
      }
      directRender(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          Qr = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Zr = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          Wr = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
          ar = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
          jr = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : rr.length;
        const Ir = this._scene.MU();
        for (let fr = 0; fr < jr; fr++) {
          fr < rr.length - 1 ? rr[fr + 1].activate(this._scene.activeCamera || this._scene, Sr?.texture) : (Sr ? Ir.bindFramebuffer(Sr, Zr, void 0, void 0, Qr, Wr) : ar || Ir.restoreDefaultFramebuffer(), Ir._debugInsertMarker?.(`post process ${rr[fr].name} output`));
          const jr = rr[fr],
            Er = jr.apply();
          Er && (jr.onBeforeRenderObservable.notifyObservers(Er), this._prepareBuffers(), Ir.bindBuffers(this._vertexBuffers, this._indexBuffer, Er), Ir.drawElementsType(0, 0, 6), jr.onAfterRenderObservable.notifyObservers(Er))
        }
        Ir.setDepthBuffer(!0), Ir.setDepthWrite(!0)
      }
      _finalizeFrame(rr, Sr, Qr, Zr) {
        let Wr = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const ar = this._scene.activeCamera;
        if (!ar) return;
        if (this.onBeforeRenderObservable.notifyObservers(this), 0 === (Zr = Zr || this._getActivePostProcesses(ar._postProcesses)).length || !this._scene.postProcessesEnabled) return;
        const jr = this._scene.MU();
        for (let Ir = 0, fr = Zr.length; Ir < fr; Ir++) {
          const Er = Zr[Ir];
          if (Ir < fr - 1 ? Er._outputTexture = Zr[Ir + 1].activate(ar, Sr?.texture) : (Sr ? (jr.bindFramebuffer(Sr, Qr, void 0, void 0, Wr), Er._outputTexture = Sr) : (jr.restoreDefaultFramebuffer(), Er._outputTexture = null), jr._debugInsertMarker?.(`post process ${Zr[Ir].name} output`)), rr) break;
          const pr = Er.apply();
          pr && (Er.onBeforeRenderObservable.notifyObservers(pr), this._prepareBuffers(), jr.bindBuffers(this._vertexBuffers, this._indexBuffer, pr), jr.drawElementsType(0, 0, 6), Er.onAfterRenderObservable.notifyObservers(pr))
        }
        jr.setDepthBuffer(!0), jr.setDepthWrite(!0), jr.setAlphaMode(0)
      }
      dispose() {
        const rr = this._vertexBuffers[Zr.j.PositionKind];
        rr && (rr.dispose(), this._vertexBuffers[Zr.j.PositionKind] = null), this._indexBuffer && (this._scene.MU()._releaseBuffer(this._indexBuffer), this._indexBuffer = null)
      }
    }
  },
  42018: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      c: () => Er
    });
    var Zr = Qr(41960),
      Wr = Qr(38560);
    const ar = [],
      jr = [];
    let Ir = !1;

    function fr(rr, Sr) {
      for (; rr.length < Sr;) rr.push(void 0)
    }
    class Er {
      set opaqueSortCompareFn(rr) {
        this._opaqueSortCompareFn = rr || Er.PainterSortCompare, this._renderOpaque = this._renderOpaqueSorted
      }
      set alphaTestSortCompareFn(rr) {
        this._alphaTestSortCompareFn = rr || Er.PainterSortCompare, this._renderAlphaTest = this._renderAlphaTestSorted
      }
      set transparentSortCompareFn(rr) {
        this._transparentSortCompareFn = rr || Er.defaultTransparentSortCompare, this._renderTransparent = this._renderTransparentSorted
      }
      constructor(rr, Sr) {
        let Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          Wr = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          ar = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
        this.index = rr, this._opaqueSubMeshes = new Zr.h(256), this._transparentSubMeshes = new Zr.h(256), this._alphaTestSubMeshes = new Zr.h(256), this._depthOnlySubMeshes = new Zr.h(256), this._particleSystems = new Zr.h(256), this._spriteManagers = new Zr.h(256), this._empty = !0, this._edgesRenderers = new Zr.e(16), this.disableDepthPrePass = !1, this._scene = Sr, this.opaqueSortCompareFn = Qr, this.alphaTestSortCompareFn = Wr, this.transparentSortCompareFn = ar
      }
      render(rr, Sr, Qr, Zr) {
        let Wr = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          ar = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          jr = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
          Ir = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7],
          fr = arguments.length > 8 ? arguments[8] : void 0;
        if (rr) return void rr(this._opaqueSubMeshes, this._alphaTestSubMeshes, this._transparentSubMeshes, this._depthOnlySubMeshes);
        const Er = this._scene.MU();
        Wr && 0 !== this._depthOnlySubMeshes.length && (Er.setColorWrite(!1), this._renderAlphaTest(this._depthOnlySubMeshes), Er.setColorWrite(!0)), ar && 0 !== this._opaqueSubMeshes.length && this._renderOpaque(this._opaqueSubMeshes), jr && 0 !== this._alphaTestSubMeshes.length && this._renderAlphaTest(this._alphaTestSubMeshes);
        const pr = Er.getStencilBuffer();
        if (Er.setStencilBuffer(!1), Sr && this._renderSprites(), Qr && this._renderParticles(Zr), this.onBeforeTransparentRendering && this.onBeforeTransparentRendering(), Ir && (fr || 0 !== this._transparentSubMeshes.length || this._scene.useOrderIndependentTransparency)) {
          if (Er.setStencilBuffer(pr), fr) fr(this._transparentSubMeshes, this);
          else if (this._scene.useOrderIndependentTransparency) {
            const rr = this._scene.depthPeelingRenderer.render(this._transparentSubMeshes);
            rr.length && this._renderTransparent(rr)
          } else this._renderTransparent(this._transparentSubMeshes);
          Er.setAlphaMode(0)
        }
        if (Er.setStencilBuffer(!1), ar && this._edgesRenderers.length) {
          for (let rr = 0; rr < this._edgesRenderers.length; rr++) this._edgesRenderers.data[rr].render();
          Er.setAlphaMode(0)
        }
        Er.setStencilBuffer(pr)
      }
      _renderOpaqueSorted(rr) {
        Er._RenderSorted(rr, this._opaqueSortCompareFn, this._scene.activeCamera, !1, this.disableDepthPrePass)
      }
      _renderAlphaTestSorted(rr) {
        Er._RenderSorted(rr, this._alphaTestSortCompareFn, this._scene.activeCamera, !1, this.disableDepthPrePass)
      }
      _renderTransparentSorted(rr) {
        Er._RenderSorted(rr, this._transparentSortCompareFn, this._scene.activeCamera, !0, this.disableDepthPrePass)
      }
      static _RenderSorted(rr, Sr, Qr, Zr, ar) {
        let pr, xr = 0;
        const mr = Qr ? Qr.globalPosition : Er._ZeroVector;
        if (Zr && Sr !== Er.PainterSortCompare)
          for (; xr < rr.length; xr++) pr = rr.data[xr], pr._alphaIndex = pr.getMesh().alphaIndex, pr._distanceToCamera = Wr.u.Distance(pr.mG().oWr.centerWorld, mr);
        const Nr = rr.length;
        let Ur = rr.data;
        const tr = Nr !== Ur.length && !Ir;
        if (tr) {
          for (Ir = !0, fr(jr, Nr), xr = 0; xr < Nr; xr++) jr[xr] = Ur[xr];
          Ur = jr
        } else Nr !== Ur.length && (Ur = Ur.slice(0, Nr));
        try {
          Sr && Er._StableSort(Ur, Nr, Sr), Er._DrawSorted(Ur, Nr, Zr, ar)
        } finally {
          tr && (jr.fill(void 0, 0, Nr), Ir = !1)
        }
      }
      static _DrawSorted(rr, Sr, Qr, Zr) {
        let Wr;
        const ar = rr[0].getMesh().eC();
        for (let jr = 0; jr < Sr; jr++) {
          if (Wr = rr[jr], ar._activeMeshesFrozenButKeepClipping && !Wr.isInFrustum(ar._frustumPlanes)) continue;
          let Sr = !1;
          if (Qr) {
            const rr = Wr.iU();
            if (rr && rr.needDepthPrePass && !Zr) {
              Sr = !0;
              const Qr = rr.eC().MU();
              Qr.setColorWrite(!1), Qr.setAlphaMode(0), Wr.render(!1), Qr.setColorWrite(!0)
            }
          }
          const Ir = Wr._renderingMesh;
          !Sr && Ir._renderRunFollower(Wr, Qr) || Wr.render(Qr)
        }
      }
      static _StableSort(rr, Sr, Qr) {
        for (let Zr = 0; Zr < Sr; Zr += 16) {
          const Wr = Math.min(Zr + 16, Sr);
          for (let Sr = Zr + 1; Sr < Wr; Sr++) {
            const Wr = rr[Sr];
            let ar = Zr,
              jr = Sr;
            for (; ar < jr;) {
              const Sr = ar + jr >>> 1;
              Qr(Wr, rr[Sr]) < 0 ? jr = Sr : ar = Sr + 1
            }
            for (let Qr = Sr; Qr > ar; Qr--) rr[Qr] = rr[Qr - 1];
            rr[ar] = Wr
          }
        }
        if (!(Sr <= 16)) {
          fr(ar, Sr);
          try {
            let Zr = rr,
              Wr = ar;
            for (let rr = 16; rr < Sr; rr *= 2) {
              for (let jr = 0; jr < Sr; jr += 2 * rr) {
                const ar = Math.min(jr + rr, Sr),
                  Ir = Math.min(jr + 2 * rr, Sr);
                let fr = jr,
                  Er = ar,
                  pr = jr;
                if (ar < Ir && Qr(Zr[ar], Zr[ar - 1]) < 0)
                  for (; fr < ar && Er < Ir;) Wr[pr++] = Qr(Zr[Er], Zr[fr]) < 0 ? Zr[Er++] : Zr[fr++];
                for (; fr < ar;) Wr[pr++] = Zr[fr++];
                for (; Er < Ir;) Wr[pr++] = Zr[Er++]
              }
              const ar = Wr;
              Wr = Zr, Zr = ar
            }
            if (Zr !== rr)
              for (let Qr = 0; Qr < Sr; Qr++) rr[Qr] = Zr[Qr]
          } finally {
            ar.fill(void 0, 0, Sr)
          }
        }
      }
      static defaultTransparentSortCompare(rr, Sr) {
        return rr._alphaIndex > Sr._alphaIndex ? 1 : rr._alphaIndex < Sr._alphaIndex ? -1 : Er.backToFrontSortCompare(rr, Sr)
      }
      static backToFrontSortCompare(rr, Sr) {
        return rr._distanceToCamera < Sr._distanceToCamera ? 1 : rr._distanceToCamera > Sr._distanceToCamera ? -1 : 0
      }
      static frontToBackSortCompare(rr, Sr) {
        return rr._distanceToCamera < Sr._distanceToCamera ? -1 : rr._distanceToCamera > Sr._distanceToCamera ? 1 : 0
      }
      static PainterSortCompare(rr, Sr) {
        const Qr = rr.getMesh(),
          Zr = Sr.getMesh();
        return Qr.material && Zr.material ? Qr.material.uniqueId - Zr.material.uniqueId : Qr.uniqueId - Zr.uniqueId
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
      dispatch(rr, Sr, Qr) {
        void 0 === Sr && (Sr = rr.getMesh()), void 0 === Qr && (Qr = rr.iU()), null !== Qr && void 0 !== Qr && (Qr.needAlphaBlendingForMesh(Sr) ? this._transparentSubMeshes.push(rr) : Qr.needAlphaTestingForMesh(Sr) ? (Qr.needDepthPrePass && !this.disableDepthPrePass && this._depthOnlySubMeshes.push(rr), this._alphaTestSubMeshes.push(rr)) : (Qr.needDepthPrePass && !this.disableDepthPrePass && this._depthOnlySubMeshes.push(rr), this._opaqueSubMeshes.push(rr)), Sr._renderingGroup = this, Sr._edgesRenderer && Sr.isEnabled() && Sr.isVisible && Sr._edgesRenderer.isEnabled && this._edgesRenderers.pushNoDuplicate(Sr._edgesRenderer), this._empty = !1)
      }
      dispatchSprites(rr) {
        this._spriteManagers.push(rr), this._empty = !1
      }
      dispatchParticles(rr) {
        this._particleSystems.push(rr), this._empty = !1
      }
      _renderParticles(rr) {
        if (0 === this._particleSystems.length) return;
        const Sr = this._scene.activeCamera;
        this._scene.onBeforeParticlesRenderingObservable.notifyObservers(this._scene);
        for (let Qr = 0; Qr < this._particleSystems.length; Qr++) {
          const Zr = this._particleSystems.data[Qr];
          if (0 === (Sr && Sr.layerMask & Zr.layerMask)) continue;
          const Wr = Zr.emitter;
          Wr.position && rr && -1 === rr.indexOf(Wr) || this._scene._activeParticles.addCount(Zr.render(), !1)
        }
        this._scene.onAfterParticlesRenderingObservable.notifyObservers(this._scene)
      }
      _renderSprites() {
        if (!this._scene.spritesEnabled || 0 === this._spriteManagers.length) return;
        const rr = this._scene.activeCamera;
        this._scene.onBeforeSpritesRenderingObservable.notifyObservers(this._scene);
        for (let Sr = 0; Sr < this._spriteManagers.length; Sr++) {
          const Qr = this._spriteManagers.data[Sr];
          0 !== (rr && rr.layerMask & Qr.layerMask) && Qr.render()
        }
        this._scene.onAfterSpritesRenderingObservable.notifyObservers(this._scene)
      }
    }
    Er._ZeroVector = Wr.u.Zero()
  },
  42014: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      b: () => ar
    });
    var Zr = Qr(42018);
    class Wr {}
    class ar {
      get disableDepthPrePass() {
        return this._disableDepthPrePass
      }
      set disableDepthPrePass(rr) {
        this._disableDepthPrePass = rr;
        for (const Sr of this._renderingGroups) Sr.disableDepthPrePass = rr
      }
      get maintainStateBetweenFrames() {
        return this._maintainStateBetweenFrames
      }
      set maintainStateBetweenFrames(rr) {
        rr !== this._maintainStateBetweenFrames && (this._maintainStateBetweenFrames = rr, this._maintainStateBetweenFrames || this.restoreDispachedFlags())
      }
      restoreDispachedFlags() {
        for (const rr of this._scene.meshes)
          if (rr.jT)
            for (const Sr of rr.jT) Sr._wasDispatched = !1;
        if (this._scene.spriteManagers)
          for (const rr of this._scene.spriteManagers) rr._wasDispatched = !1;
        for (const rr of this._scene.pT) rr._wasDispatched = !1
      }
      constructor(rr) {
        this._useSceneAutoClearSetup = !1, this._disableDepthPrePass = !1, this._renderingGroups = new Array, this._autoClearDepthStencil = {}, this._customOpaqueSortCompareFn = {}, this._customAlphaTestSortCompareFn = {}, this._customTransparentSortCompareFn = {}, this._renderingGroupInfo = new Wr, this._maintainStateBetweenFrames = !1, this._scene = rr;
        for (let Sr = ar.MIN_RENDERINGGROUPS; Sr < ar.MAX_RENDERINGGROUPS; Sr++) this._autoClearDepthStencil[Sr] = {
          autoClear: !0,
          depth: !0,
          stencil: !0
        }
      }
      get renderingGroups() {
        return this._renderingGroups
      }
      getRenderingGroup(rr) {
        const Sr = rr || 0;
        return this._prepareRenderingGroup(Sr), this._renderingGroups[Sr]
      }
      _clearDepthStencilBuffer() {
        let rr = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          Sr = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this._depthStencilBufferAlreadyCleaned || (this._scene.MU().clear(null, !1, rr, Sr), this._depthStencilBufferAlreadyCleaned = !0)
      }
      render(rr, Sr, Qr, Zr) {
        let Wr = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          jr = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          Ir = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
          fr = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7],
          Er = arguments.length > 8 ? arguments[8] : void 0,
          pr = arguments.length > 9 ? arguments[9] : void 0;
        const xr = this._renderingGroupInfo;
        xr.Dt = this._scene, xr.camera = this._scene.activeCamera, xr.renderingManager = this;
        const mr = pr ?? this._scene.spriteManagers;
        if (mr && Zr)
          for (let ar = 0; ar < mr.length; ar++) {
            const rr = mr[ar];
            this.dispatchSprites(rr)
          }
        for (let Nr = ar.MIN_RENDERINGGROUPS; Nr < ar.MAX_RENDERINGGROUPS; Nr++) {
          this._depthStencilBufferAlreadyCleaned = Nr === ar.MIN_RENDERINGGROUPS;
          const pr = this._renderingGroups[Nr];
          if (!pr || pr._empty) continue;
          const mr = 1 << Nr;
          if (xr.renderingGroupId = Nr, this._scene.onBeforeRenderingGroupObservable.notifyObservers(xr, mr), ar.AUTOCLEAR) {
            const rr = this._useSceneAutoClearSetup ? this._scene.getAutoClearDepthStencilSetup(Nr) : this._autoClearDepthStencil[Nr];
            rr && rr.autoClear && this._clearDepthStencilBuffer(rr.depth, rr.stencil)
          }
          for (let rr = 0, Sr = this._scene._beforeRenderingGroupDrawStage; rr < Sr.length; rr++) {
            Sr[rr].action(Nr)
          }
          pr.render(rr, Zr, Qr, Sr, Wr, jr, Ir, fr, Er);
          for (let rr = 0, Sr = this._scene._afterRenderingGroupDrawStage; rr < Sr.length; rr++) {
            Sr[rr].action(Nr)
          }
          this._scene.onAfterRenderingGroupObservable.notifyObservers(xr, mr)
        }
      }
      reset() {
        if (!this.maintainStateBetweenFrames)
          for (let rr = ar.MIN_RENDERINGGROUPS; rr < ar.MAX_RENDERINGGROUPS; rr++) {
            const Sr = this._renderingGroups[rr];
            Sr && Sr.prepare()
          }
      }
      resetSprites() {
        if (!this.maintainStateBetweenFrames)
          for (let rr = ar.MIN_RENDERINGGROUPS; rr < ar.MAX_RENDERINGGROUPS; rr++) {
            const Sr = this._renderingGroups[rr];
            Sr && Sr.prepareSprites()
          }
      }
      dispose() {
        this.freeRenderingGroups(), this._renderingGroups.length = 0, this._renderingGroupInfo = null
      }
      freeRenderingGroups() {
        for (let rr = ar.MIN_RENDERINGGROUPS; rr < ar.MAX_RENDERINGGROUPS; rr++) {
          const Sr = this._renderingGroups[rr];
          Sr && Sr.dispose()
        }
      }
      _prepareRenderingGroup(rr) {
        void 0 === this._renderingGroups[rr] && (this._renderingGroups[rr] = new Zr.c(rr, this._scene, this._customOpaqueSortCompareFn[rr], this._customAlphaTestSortCompareFn[rr], this._customTransparentSortCompareFn[rr]), this._renderingGroups[rr].disableDepthPrePass = this._disableDepthPrePass)
      }
      dispatchSprites(rr) {
        this.maintainStateBetweenFrames && rr._wasDispatched || (rr._wasDispatched = !0, this.getRenderingGroup(rr.renderingGroupId).dispatchSprites(rr))
      }
      dispatchParticles(rr) {
        this.maintainStateBetweenFrames && rr._wasDispatched || (rr._wasDispatched = !0, this.getRenderingGroup(rr.renderingGroupId).dispatchParticles(rr))
      }
      dispatch(rr, Sr, Qr) {
        void 0 === Sr && (Sr = rr.getMesh()), this.maintainStateBetweenFrames && rr._wasDispatched || (rr._wasDispatched = !0, this.getRenderingGroup(Sr.renderingGroupId).dispatch(rr, Sr, Qr))
      }
      setRenderingOrder(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          Zr = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        if (this._customOpaqueSortCompareFn[rr] = Sr, this._customAlphaTestSortCompareFn[rr] = Qr, this._customTransparentSortCompareFn[rr] = Zr, this._renderingGroups[rr]) {
          const Sr = this._renderingGroups[rr];
          Sr.opaqueSortCompareFn = this._customOpaqueSortCompareFn[rr], Sr.alphaTestSortCompareFn = this._customAlphaTestSortCompareFn[rr], Sr.transparentSortCompareFn = this._customTransparentSortCompareFn[rr]
        }
      }
      setRenderingAutoClearDepthStencil(rr, Sr) {
        let Qr = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          Zr = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        this._autoClearDepthStencil[rr] = {
          autoClear: Sr,
          depth: Qr,
          stencil: Zr
        }
      }
      getAutoClearDepthStencilSetup(rr) {
        return this._autoClearDepthStencil[rr]
      }
    }
    ar.MAX_RENDERINGGROUPS = 4, ar.MIN_RENDERINGGROUPS = 0, ar.AUTOCLEAR = !0
  },
  41792: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => Zr
    });
    class Zr {
      constructor(rr) {
        this._supportBlendParametersPerTarget = rr, this._blendFunctionParameters = new Array(32), this._blendEquationParameters = new Array(16), this._blendConstants = new Array(4), this._isBlendConstantsDirty = !1, this._alphaBlend = Array(8).fill(!1), this._numTargetEnabled = 0, this._isAlphaBlendDirty = !1, this._isBlendFunctionParametersDirty = !1, this._isBlendEquationParametersDirty = !1, this._blendDisabledTargetsMask = 0, this._numTargets = 1, this.reset()
      }
      get isDirty() {
        return this._isAlphaBlendDirty || this._isBlendFunctionParametersDirty || this._isBlendEquationParametersDirty
      }
      get alphaBlend() {
        return this._numTargetEnabled > 0
      }
      set alphaBlend(rr) {
        this.setAlphaBlend(rr)
      }
      setAlphaBlend(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        this._alphaBlend[Sr] !== rr && (rr ? this._numTargetEnabled++ : this._numTargetEnabled--, this._alphaBlend[Sr] = rr, this._isAlphaBlendDirty = !0)
      }
      setAlphaBlendConstants(rr, Sr, Qr, Zr) {
        this._blendConstants[0] === rr && this._blendConstants[1] === Sr && this._blendConstants[2] === Qr && this._blendConstants[3] === Zr || (this._blendConstants[0] = rr, this._blendConstants[1] = Sr, this._blendConstants[2] = Qr, this._blendConstants[3] = Zr, this._isBlendConstantsDirty = !0)
      }
      setAlphaBlendFunctionParameters(rr, Sr, Qr, Zr) {
        const Wr = 4 * (arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0);
        this._blendFunctionParameters[Wr + 0] === rr && this._blendFunctionParameters[Wr + 1] === Sr && this._blendFunctionParameters[Wr + 2] === Qr && this._blendFunctionParameters[Wr + 3] === Zr || (this._blendFunctionParameters[Wr + 0] = rr, this._blendFunctionParameters[Wr + 1] = Sr, this._blendFunctionParameters[Wr + 2] = Qr, this._blendFunctionParameters[Wr + 3] = Zr, this._isBlendFunctionParametersDirty = !0)
      }
      setAlphaEquationParameters(rr, Sr) {
        const Qr = 2 * (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0);
        this._blendEquationParameters[Qr + 0] === rr && this._blendEquationParameters[Qr + 1] === Sr || (this._blendEquationParameters[Qr + 0] = rr, this._blendEquationParameters[Qr + 1] = Sr, this._isBlendEquationParametersDirty = !0)
      }
      reset() {
        this._alphaBlend.fill(!1), this._numTargetEnabled = 0, this._blendFunctionParameters.fill(null), this._blendEquationParameters.fill(null), this._blendConstants[0] = null, this._blendConstants[1] = null, this._blendConstants[2] = null, this._blendConstants[3] = null, this._isAlphaBlendDirty = !0, this._isBlendFunctionParametersDirty = !1, this._isBlendEquationParametersDirty = !1, this._isBlendConstantsDirty = !1, this._blendDisabledTargetsMask = 0, this._numTargets = 1
      }
      apply(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (this._numTargets !== Sr && (this._numTargets = Sr, this._isAlphaBlendDirty = !0), this._blendDisabledTargetsMask !== Qr && (this._blendDisabledTargetsMask = Qr, this._isAlphaBlendDirty = !0), !this.isDirty) return;
        if (this._isBlendConstantsDirty && (rr.blendColor(this._blendConstants[0], this._blendConstants[1], this._blendConstants[2], this._blendConstants[3]), this._isBlendConstantsDirty = !1), 1 === Sr || !this._supportBlendParametersPerTarget) {
          if (this._isAlphaBlendDirty) {
            if (Sr > 1 && 0 !== Qr && this.alphaBlend) throw new Error("AlphaState: blending with integer MRT attachments requires per-target blend parameters");
            this._alphaBlend[0] && 0 === (1 & Qr) ? rr.enable(rr.BLEND) : rr.disable(rr.BLEND), this._isAlphaBlendDirty = !1
          }
          return this._isBlendFunctionParametersDirty && (rr.blendFuncSeparate(this._blendFunctionParameters[0], this._blendFunctionParameters[1], this._blendFunctionParameters[2], this._blendFunctionParameters[3]), this._isBlendFunctionParametersDirty = !1), void(this._isBlendEquationParametersDirty && (rr.blendEquationSeparate(this._blendEquationParameters[0], this._blendEquationParameters[1]), this._isBlendEquationParametersDirty = !1))
        }
        const Zr = rr;
        if (this._isAlphaBlendDirty) {
          for (let Wr = 0; Wr < Sr; Wr++) {
            const Sr = Wr < this._numTargetEnabled ? Wr : 0;
            this._alphaBlend[Sr] && 0 === (Qr & 1 << Wr) ? Zr.enableIndexed(rr.BLEND, Wr) : Zr.disableIndexed(rr.BLEND, Wr)
          }
          this._isAlphaBlendDirty = !1
        }
        if (this._isBlendFunctionParametersDirty) {
          for (let rr = 0; rr < Sr; rr++) {
            const Sr = rr < this._numTargetEnabled ? 4 * rr : 0;
            Zr.blendFuncSeparateIndexed(rr, this._blendFunctionParameters[Sr + 0], this._blendFunctionParameters[Sr + 1], this._blendFunctionParameters[Sr + 2], this._blendFunctionParameters[Sr + 3])
          }
          this._isBlendFunctionParametersDirty = !1
        }
        if (this._isBlendEquationParametersDirty) {
          for (let rr = 0; rr < Sr; rr++) {
            const Sr = rr < this._numTargetEnabled ? 2 * rr : 0;
            Zr.blendEquationSeparateIndexed(rr, this._blendEquationParameters[Sr + 0], this._blendEquationParameters[Sr + 1])
          }
          this._isBlendEquationParametersDirty = !1
        }
      }
      setAlphaMode(rr, Sr) {
        let Qr = 32774;
        switch (rr) {
          case 0:
            break;
          case 7:
            this.setAlphaBlendFunctionParameters(1, 771, 1, 1, Sr);
            break;
          case 8:
          case 14:
            this.setAlphaBlendFunctionParameters(1, 771, 1, 771, Sr);
            break;
          case 2:
            this.setAlphaBlendFunctionParameters(770, 771, 1, 1, Sr);
            break;
          case 6:
            this.setAlphaBlendFunctionParameters(1, 1, 0, 1, Sr);
            break;
          case 1:
            this.setAlphaBlendFunctionParameters(770, 1, 0, 1, Sr);
            break;
          case 3:
            this.setAlphaBlendFunctionParameters(0, 769, 1, 1, Sr);
            break;
          case 4:
            this.setAlphaBlendFunctionParameters(774, 0, 1, 1, Sr);
            break;
          case 5:
            this.setAlphaBlendFunctionParameters(770, 769, 1, 1, Sr);
            break;
          case 9:
            this.setAlphaBlendFunctionParameters(32769, 32770, 32771, 32772, Sr);
            break;
          case 10:
            this.setAlphaBlendFunctionParameters(1, 769, 1, 771, Sr);
            break;
          case 11:
            this.setAlphaBlendFunctionParameters(1, 1, 1, 1, Sr);
            break;
          case 12:
            this.setAlphaBlendFunctionParameters(772, 1, 0, 0, Sr);
            break;
          case 13:
            this.setAlphaBlendFunctionParameters(775, 769, 773, 771, Sr);
            break;
          case 15:
            this.setAlphaBlendFunctionParameters(1, 1, 1, 0, Sr);
            break;
          case 16:
            this.setAlphaBlendFunctionParameters(775, 769, 0, 1, Sr);
            break;
          case 17:
            this.setAlphaBlendFunctionParameters(770, 771, 1, 771, Sr);
            break;
          case 18:
            this.setAlphaBlendFunctionParameters(1, 1, 1, 1, Sr), Qr = 32775;
            break;
          case 19:
            this.setAlphaBlendFunctionParameters(1, 1, 1, 1, Sr), Qr = 32776;
            break;
          case 20:
            this.setAlphaBlendFunctionParameters(1, 35065, 0, 1, Sr);
            break;
          case 21:
            this.setAlphaBlendFunctionParameters(1, 0, 1, 771, Sr)
        }
        this.setAlphaEquationParameters(Qr, Qr, Sr)
      }
    }
  },
  42040: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      b: () => Zr
    });
    class Zr {}
    Zr._IsPickingAvailable = !1
  },
  41941: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      e: () => IQ,
      f: () => aQ
    });
    var Zr = Qr(41950),
      Wr = Qr(41781),
      ar = Qr(41787),
      jr = Qr(38595),
      Ir = Qr(41960);
    class fr {
      constructor() {
        this._count = 0, this._data = {}
      }
      iH(rr) {
        this.clear(), rr.forEach(((rr, Sr) => this.add(rr, Sr)))
      }
      get(rr) {
        const Sr = this._data[rr];
        if (void 0 !== Sr) return Sr
      }
      getOrAddWithFactory(rr, Sr) {
        let Qr = this.get(rr);
        return void 0 !== Qr || (Qr = Sr(rr), Qr && this.add(rr, Qr)), Qr
      }
      getOrAdd(rr, Sr) {
        const Qr = this.get(rr);
        return void 0 !== Qr ? Qr : (this.add(rr, Sr), Sr)
      }
      contains(rr) {
        return void 0 !== this._data[rr]
      }
      add(rr, Sr) {
        return void 0 === this._data[rr] && (this._data[rr] = Sr, ++this._count, !0)
      }
      set(rr, Sr) {
        return void 0 !== this._data[rr] && (this._data[rr] = Sr, !0)
      }
      getAndRemove(rr) {
        const Sr = this.get(rr);
        return void 0 !== Sr ? (delete this._data[rr], --this._count, Sr) : null
      }
      remove(rr) {
        return !!this.contains(rr) && (delete this._data[rr], --this._count, !0)
      }
      clear() {
        this._data = {}, this._count = 0
      }
      get count() {
        return this._count
      }
      forEach(rr) {
        for (const Sr in this._data) {
          rr(Sr, this._data[Sr])
        }
      }
      first(rr) {
        for (const Sr in this._data) {
          const Qr = rr(Sr, this._data[Sr]);
          if (Qr) return Qr
        }
        return null
      }
    }
    var Er = Qr(41891),
      pr = Qr(38560),
      xr = Qr(41965),
      mr = Qr(41987),
      Nr = Qr(41989);
    class Ur {
      constructor(rr, Sr, Qr, Zr, Wr, ar) {
        this.source = rr, this.pointerX = Sr, this.pointerY = Qr, this.meshUnderPointer = Zr, this.sourceEvent = Wr, this.additionalData = ar
      }
      static CreateNew(rr, Sr, Qr) {
        const Zr = rr.eC();
        return new Ur(rr, Zr.pointerX, Zr.pointerY, Zr.meshUnderPointer || rr, Sr, Qr)
      }
      static CreateNewFromSprite(rr, Sr, Qr, Zr) {
        return new Ur(rr, Sr.pointerX, Sr.pointerY, Sr.meshUnderPointer, Qr, Zr)
      }
      static CreateNewFromScene(rr, Sr) {
        return new Ur(null, rr.pointerX, rr.pointerY, rr.meshUnderPointer, Sr)
      }
      static CreateNewFromPrimitive(rr, Sr, Qr, Zr) {
        return new Ur(rr, Sr.x, Sr.y, null, Qr, Zr)
      }
    }
    var tr = Qr(42002),
      hr = Qr(42005),
      zr = Qr(42014),
      Yr = Qr(42020),
      nr = Qr(41749),
      er = Qr(38587),
      Kr = Qr(41769),
      yr = Qr(42028);
    class Br {
      constructor() {
        this.hoverCursor = "", this.actions = [], this.isRecursive = !1, this.disposeWhenUnowned = !0
      }
      static get HasTriggers() {
        for (const rr in Br.Triggers)
          if (Object.prototype.hasOwnProperty.call(Br.Triggers, rr)) return !0;
        return !1
      }
      static get HasPickTriggers() {
        for (const rr in Br.Triggers)
          if (Object.prototype.hasOwnProperty.call(Br.Triggers, rr)) {
            const Sr = parseInt(rr);
            if (Sr >= 1 && Sr <= 7) return !0
          } return !1
      }
      static HasSpecificTrigger(rr) {
        for (const Sr in Br.Triggers)
          if (Object.prototype.hasOwnProperty.call(Br.Triggers, Sr)) {
            if (parseInt(Sr) === rr) return !0
          } return !1
      }
    }
    Br.Triggers = {};
    var Tr, vr, Or, Lr, lr, Xr, Pr, Hr = Qr(42031);
    ! function(rr) {
      rr[rr.Generic = 0] = "Generic", rr[rr.Keyboard = 1] = "Keyboard", rr[rr.Mouse = 2] = "Mouse", rr[rr.Touch = 3] = "Touch", rr[rr.DualShock = 4] = "DualShock", rr[rr.Xbox = 5] = "Xbox", rr[rr.Switch = 6] = "Switch", rr[rr.DualSense = 7] = "DualSense"
    }(Tr || (Tr = {})),
    function(rr) {
      rr[rr.Horizontal = 0] = "Horizontal", rr[rr.Vertical = 1] = "Vertical", rr[rr.LeftClick = 2] = "LeftClick", rr[rr.MiddleClick = 3] = "MiddleClick", rr[rr.RightClick = 4] = "RightClick", rr[rr.BrowserBack = 5] = "BrowserBack", rr[rr.BrowserForward = 6] = "BrowserForward", rr[rr.MouseWheelX = 7] = "MouseWheelX", rr[rr.MouseWheelY = 8] = "MouseWheelY", rr[rr.MouseWheelZ = 9] = "MouseWheelZ", rr[rr.Move = 12] = "Move"
    }(vr || (vr = {})),
    function(rr) {
      rr[rr.Horizontal = 0] = "Horizontal", rr[rr.Vertical = 1] = "Vertical", rr[rr.LeftClick = 2] = "LeftClick", rr[rr.MiddleClick = 3] = "MiddleClick", rr[rr.RightClick = 4] = "RightClick", rr[rr.BrowserBack = 5] = "BrowserBack", rr[rr.BrowserForward = 6] = "BrowserForward", rr[rr.MouseWheelX = 7] = "MouseWheelX", rr[rr.MouseWheelY = 8] = "MouseWheelY", rr[rr.MouseWheelZ = 9] = "MouseWheelZ", rr[rr.DeltaHorizontal = 10] = "DeltaHorizontal", rr[rr.DeltaVertical = 11] = "DeltaVertical"
    }(Or || (Or = {})),
    function(rr) {
      rr[rr.Cross = 0] = "Cross", rr[rr.Circle = 1] = "Circle", rr[rr.Square = 2] = "Square", rr[rr.Triangle = 3] = "Triangle", rr[rr.L1 = 4] = "L1", rr[rr.R1 = 5] = "R1", rr[rr.L2 = 6] = "L2", rr[rr.R2 = 7] = "R2", rr[rr.Share = 8] = "Share", rr[rr.Options = 9] = "Options", rr[rr.L3 = 10] = "L3", rr[rr.R3 = 11] = "R3", rr[rr.DPadUp = 12] = "DPadUp", rr[rr.DPadDown = 13] = "DPadDown", rr[rr.DPadLeft = 14] = "DPadLeft", rr[rr.DPadRight = 15] = "DPadRight", rr[rr.Home = 16] = "Home", rr[rr.TouchPad = 17] = "TouchPad", rr[rr.LStickXAxis = 18] = "LStickXAxis", rr[rr.LStickYAxis = 19] = "LStickYAxis", rr[rr.RStickXAxis = 20] = "RStickXAxis", rr[rr.RStickYAxis = 21] = "RStickYAxis"
    }(Lr || (Lr = {})),
    function(rr) {
      rr[rr.Cross = 0] = "Cross", rr[rr.Circle = 1] = "Circle", rr[rr.Square = 2] = "Square", rr[rr.Triangle = 3] = "Triangle", rr[rr.L1 = 4] = "L1", rr[rr.R1 = 5] = "R1", rr[rr.L2 = 6] = "L2", rr[rr.R2 = 7] = "R2", rr[rr.Create = 8] = "Create", rr[rr.Options = 9] = "Options", rr[rr.L3 = 10] = "L3", rr[rr.R3 = 11] = "R3", rr[rr.DPadUp = 12] = "DPadUp", rr[rr.DPadDown = 13] = "DPadDown", rr[rr.DPadLeft = 14] = "DPadLeft", rr[rr.DPadRight = 15] = "DPadRight", rr[rr.Home = 16] = "Home", rr[rr.TouchPad = 17] = "TouchPad", rr[rr.LStickXAxis = 18] = "LStickXAxis", rr[rr.LStickYAxis = 19] = "LStickYAxis", rr[rr.RStickXAxis = 20] = "RStickXAxis", rr[rr.RStickYAxis = 21] = "RStickYAxis"
    }(lr || (lr = {})),
    function(rr) {
      rr[rr.A = 0] = "A", rr[rr.B = 1] = "B", rr[rr.X = 2] = "X", rr[rr.Y = 3] = "Y", rr[rr.LB = 4] = "LB", rr[rr.RB = 5] = "RB", rr[rr.LT = 6] = "LT", rr[rr.RT = 7] = "RT", rr[rr.Back = 8] = "Back", rr[rr.Start = 9] = "Start", rr[rr.LS = 10] = "LS", rr[rr.RS = 11] = "RS", rr[rr.DPadUp = 12] = "DPadUp", rr[rr.DPadDown = 13] = "DPadDown", rr[rr.DPadLeft = 14] = "DPadLeft", rr[rr.DPadRight = 15] = "DPadRight", rr[rr.Home = 16] = "Home", rr[rr.LStickXAxis = 17] = "LStickXAxis", rr[rr.LStickYAxis = 18] = "LStickYAxis", rr[rr.RStickXAxis = 19] = "RStickXAxis", rr[rr.RStickYAxis = 20] = "RStickYAxis"
    }(Xr || (Xr = {})),
    function(rr) {
      rr[rr.B = 0] = "B", rr[rr.A = 1] = "A", rr[rr.Y = 2] = "Y", rr[rr.X = 3] = "X", rr[rr.L = 4] = "L", rr[rr.R = 5] = "R", rr[rr.ZL = 6] = "ZL", rr[rr.ZR = 7] = "ZR", rr[rr.Minus = 8] = "Minus", rr[rr.Plus = 9] = "Plus", rr[rr.LS = 10] = "LS", rr[rr.RS = 11] = "RS", rr[rr.DPadUp = 12] = "DPadUp", rr[rr.DPadDown = 13] = "DPadDown", rr[rr.DPadLeft = 14] = "DPadLeft", rr[rr.DPadRight = 15] = "DPadRight", rr[rr.Home = 16] = "Home", rr[rr.Capture = 17] = "Capture", rr[rr.LStickXAxis = 18] = "LStickXAxis", rr[rr.LStickYAxis = 19] = "LStickYAxis", rr[rr.RStickXAxis = 20] = "RStickXAxis", rr[rr.RStickYAxis = 21] = "RStickYAxis"
    }(Pr || (Pr = {}));
    var qr = Qr(42036);
    class Rr {
      static CreateDeviceEvent(rr, Sr, Qr, Zr, Wr, ar, jr) {
        switch (rr) {
          case Tr.Keyboard:
            return this._CreateKeyboardEvent(Qr, Zr, Wr, ar);
          case Tr.Mouse:
            if (Qr === vr.MouseWheelX || Qr === vr.MouseWheelY || Qr === vr.MouseWheelZ) return this._CreateWheelEvent(rr, Sr, Qr, Zr, Wr, ar);
          case Tr.Touch:
            return this._CreatePointerEvent(rr, Sr, Qr, Zr, Wr, ar, jr);
          default:
            throw `Unable to generate event for device ${Tr[rr]}`
        }
      }
      static _CreatePointerEvent(rr, Sr, Qr, Zr, Wr, ar, jr) {
        const Ir = this._CreateMouseEvent(rr, Sr, Qr, Zr, Wr, ar);
        rr === Tr.Mouse ? (Ir.deviceType = Tr.Mouse, Ir.pointerId = 1, Ir.pointerType = "mouse") : (Ir.deviceType = Tr.Touch, Ir.pointerId = jr ?? Sr, Ir.pointerType = "touch");
        let fr = 0;
        return fr += Wr.pollInput(rr, Sr, vr.LeftClick), fr += 2 * Wr.pollInput(rr, Sr, vr.RightClick), fr += 4 * Wr.pollInput(rr, Sr, vr.MiddleClick), Ir.buttons = fr, Qr === vr.Move ? Ir.type = "pointermove" : Qr >= vr.LeftClick && Qr <= vr.RightClick && (Ir.type = 1 === Zr ? "pointerdown" : "pointerup", Ir.button = Qr - 2), Ir
      }
      static _CreateWheelEvent(rr, Sr, Qr, Zr, Wr, ar) {
        const jr = this._CreateMouseEvent(rr, Sr, Qr, Zr, Wr, ar);
        switch (jr.pointerId = 1, jr.type = "wheel", jr.deltaMode = qr.b.DOM_DELTA_PIXEL, jr.deltaX = 0, jr.deltaY = 0, jr.deltaZ = 0, Qr) {
          case vr.MouseWheelX:
            jr.deltaX = Zr;
            break;
          case vr.MouseWheelY:
            jr.deltaY = Zr;
            break;
          case vr.MouseWheelZ:
            jr.deltaZ = Zr
        }
        return jr
      }
      static _CreateMouseEvent(rr, Sr, Qr, Zr, Wr, ar) {
        const jr = this._CreateEvent(ar),
          Ir = Wr.pollInput(rr, Sr, vr.Horizontal),
          fr = Wr.pollInput(rr, Sr, vr.Vertical);
        return ar ? (jr.movementX = 0, jr.movementY = 0, jr.offsetX = jr.movementX - ar.getBoundingClientRect().x, jr.offsetY = jr.movementY - ar.getBoundingClientRect().y) : (jr.movementX = Wr.pollInput(rr, Sr, 10), jr.movementY = Wr.pollInput(rr, Sr, 11), jr.offsetX = 0, jr.offsetY = 0), this._CheckNonCharacterKeys(jr, Wr), jr.clientX = Ir, jr.clientY = fr, jr.x = Ir, jr.y = fr, jr.deviceType = rr, jr.deviceSlot = Sr, jr.inputIndex = Qr, jr
      }
      static _CreateKeyboardEvent(rr, Sr, Qr, Zr) {
        const Wr = this._CreateEvent(Zr);
        return this._CheckNonCharacterKeys(Wr, Qr), Wr.deviceType = Tr.Keyboard, Wr.deviceSlot = 0, Wr.inputIndex = rr, Wr.type = 1 === Sr ? "keydown" : "keyup", Wr.key = String.fromCharCode(rr), Wr.keyCode = rr, Wr
      }
      static _CheckNonCharacterKeys(rr, Sr) {
        const Qr = Sr.isDeviceAvailable(Tr.Keyboard),
          Zr = Qr && 1 === Sr.pollInput(Tr.Keyboard, 0, 18),
          Wr = Qr && 1 === Sr.pollInput(Tr.Keyboard, 0, 17),
          ar = Qr && (1 === Sr.pollInput(Tr.Keyboard, 0, 91) || 1 === Sr.pollInput(Tr.Keyboard, 0, 92) || 1 === Sr.pollInput(Tr.Keyboard, 0, 93)),
          jr = Qr && 1 === Sr.pollInput(Tr.Keyboard, 0, 16);
        rr.altKey = Zr, rr.ctrlKey = Wr, rr.metaKey = ar, rr.shiftKey = jr
      }
      static _CreateEvent(rr) {
        const Sr = {
          preventDefault: () => {}
        };
        return Sr.target = rr, Sr
      }
    }
    class gr {
      constructor(rr, Sr, Qr) {
        this._nativeInput = _native.DeviceInputSystem ? new _native.DeviceInputSystem(rr, Sr, ((rr, Sr, Zr, Wr) => {
          const ar = Rr.CreateDeviceEvent(rr, Sr, Zr, Wr, this);
          Qr(rr, Sr, ar)
        })) : this._createDummyNativeInput()
      }
      pollInput(rr, Sr, Qr) {
        return this._nativeInput.pollInput(rr, Sr, Qr)
      }
      isDeviceAvailable(rr) {
        return rr === Tr.Mouse || rr === Tr.Touch
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
    const Cr = Object.keys(vr).length / 2;
    class Mr {
      constructor(rr, Sr, Qr, Wr) {
        this._inputs = [], this._keyboardActive = !1, this._pointerActive = !1, this._usingSafari = Zr.h.IsSafari(), this._usingMacOs = (0, nr.j)() && /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform), this._keyboardDownEvent = rr => {}, this._keyboardUpEvent = rr => {}, this._keyboardBlurEvent = rr => {}, this._pointerMoveEvent = rr => {}, this._pointerDownEvent = rr => {}, this._pointerUpEvent = rr => {}, this._pointerCancelEvent = rr => {}, this._pointerCancelTouch = rr => {}, this._pointerLeaveEvent = rr => {}, this._pointerWheelEvent = rr => {}, this._pointerBlurEvent = rr => {}, this._pointerMacOsChromeOutEvent = rr => {}, this._eventsAttached = !1, this._mouseId = -1, this._isUsingFirefox = (0, nr.j)() && navigator.userAgent && -1 !== navigator.userAgent.indexOf("Firefox"), this._isUsingChromium = (0, nr.j)() && navigator.userAgent && -1 !== navigator.userAgent.indexOf("Chrome"), this._maxTouchPoints = 0, this._pointerInputClearObserver = null, this._gamepadConnectedEvent = rr => {}, this._gamepadDisconnectedEvent = rr => {}, this._eventPrefix = Zr.h.GetPointerPrefix(rr), this._engine = rr, this._onDeviceConnected = Sr, this._onDeviceDisconnected = Qr, this._onInputChanged = Wr, this._mouseId = this._isUsingFirefox ? 0 : 1, this._enableEvents(), this._usingMacOs && (this._metaKeys = []), this._engine._onEngineViewChanged || (this._engine._onEngineViewChanged = () => {
          this._enableEvents()
        })
      }
      pollInput(rr, Sr, Qr) {
        const Wr = this._inputs[rr][Sr];
        if (!Wr) throw `Unable to find device ${Tr[rr]}`;
        rr >= Tr.DualShock && rr <= Tr.DualSense && this._updateDevice(rr, Sr, Qr);
        const ar = Wr[Qr];
        if (void 0 === ar) throw `Unable to find input ${Qr} for device ${Tr[rr]} in slot ${Sr}`;
        return Qr === vr.Move && Zr.h.Warn("Unable to provide information for PointerInput.Move.  Try using PointerInput.Horizontal or PointerInput.Vertical for move data."), ar
      }
      isDeviceAvailable(rr) {
        return void 0 !== this._inputs[rr]
      }
      dispose() {
        this._onDeviceConnected = () => {}, this._onDeviceDisconnected = () => {}, this._onInputChanged = () => {}, delete this._engine._onEngineViewChanged, this._elementToAttachTo && this._disableEvents()
      }
      _enableEvents() {
        const rr = this?._engine.getInputElement();
        if (rr && (!this._eventsAttached || this._elementToAttachTo !== rr)) {
          if (this._disableEvents(), this._inputs)
            for (const rr of this._inputs)
              if (rr)
                for (const Sr in rr) {
                  const Qr = rr[+Sr];
                  if (Qr)
                    for (let rr = 0; rr < Qr.length; rr++) Qr[rr] = 0
                }
          this._elementToAttachTo = rr, this._elementToAttachTo.tabIndex = -1 !== this._elementToAttachTo.tabIndex ? this._elementToAttachTo.tabIndex : this._engine.canvasTabIndex, this._handleKeyActions(), this._handlePointerActions(), this._handleGamepadActions(), this._eventsAttached = !0, this._checkForConnectedDevices()
        }
      }
      _disableEvents() {
        this._elementToAttachTo && (this._elementToAttachTo.removeEventListener("blur", this._keyboardBlurEvent), this._elementToAttachTo.removeEventListener("blur", this._pointerBlurEvent), this._elementToAttachTo.removeEventListener("keydown", this._keyboardDownEvent), this._elementToAttachTo.removeEventListener("keyup", this._keyboardUpEvent), this._elementToAttachTo.removeEventListener(this._eventPrefix + "move", this._pointerMoveEvent), this._elementToAttachTo.removeEventListener(this._eventPrefix + "down", this._pointerDownEvent), this._elementToAttachTo.removeEventListener(this._eventPrefix + "up", this._pointerUpEvent), this._elementToAttachTo.removeEventListener(this._eventPrefix + "cancel", this._pointerCancelEvent), this._elementToAttachTo.removeEventListener(this._eventPrefix + "leave", this._pointerLeaveEvent), this._elementToAttachTo.removeEventListener(this._wheelEventName, this._pointerWheelEvent), this._usingMacOs && this._isUsingChromium && this._elementToAttachTo.removeEventListener("lostpointercapture", this._pointerMacOsChromeOutEvent), window.removeEventListener("gamepadconnected", this._gamepadConnectedEvent), window.removeEventListener("gamepaddisconnected", this._gamepadDisconnectedEvent)), this._pointerInputClearObserver && this._engine.onEndFrameObservable.remove(this._pointerInputClearObserver), this._eventsAttached = !1
      }
      _checkForConnectedDevices() {
        if (navigator.getGamepads) {
          const rr = navigator.getGamepads();
          for (const Sr of rr) Sr && this._addGamePad(Sr)
        }
        "function" === typeof matchMedia && matchMedia("(pointer:fine)").matches && this._addPointerDevice(Tr.Mouse, 0, 0, 0)
      }
      _addGamePad(rr) {
        const Sr = this._getGamepadDeviceType(rr.id),
          Qr = rr.index;
        this._gamepads = this._gamepads || new Array(rr.index + 1), this._registerDevice(Sr, Qr, rr.buttons.length + rr.axes.length), this._gamepads[Qr] = Sr
      }
      _addPointerDevice(rr, Sr, Qr, Zr) {
        this._pointerActive || (this._pointerActive = !0), this._registerDevice(rr, Sr, Cr);
        const Wr = this._inputs[rr][Sr];
        Wr[0] = Qr, Wr[1] = Zr
      }
      _registerDevice(rr, Sr, Qr) {
        if (void 0 === Sr) throw `Unable to register device ${Tr[rr]} to undefined slot.`;
        if (this._inputs[rr] || (this._inputs[rr] = {}), !this._inputs[rr][Sr]) {
          const Zr = new Array(Qr);
          Zr.fill(0), this._inputs[rr][Sr] = Zr, this._onDeviceConnected(rr, Sr)
        }
      }
      _unregisterDevice(rr, Sr) {
        this._inputs[rr][Sr] && (delete this._inputs[rr][Sr], this._onDeviceDisconnected(rr, Sr))
      }
      _handleKeyActions() {
        this._keyboardDownEvent = rr => {
          this._keyboardActive || (this._keyboardActive = !0, this._registerDevice(Tr.Keyboard, 0, 255));
          const Sr = this._inputs[Tr.Keyboard][0];
          if (Sr) {
            Sr[rr.keyCode] = 1;
            const Qr = rr;
            Qr.inputIndex = rr.keyCode, this._usingMacOs && rr.metaKey && "Meta" !== rr.key && (this._metaKeys.includes(rr.keyCode) || this._metaKeys.push(rr.keyCode)), this._onInputChanged(Tr.Keyboard, 0, Qr)
          }
        }, this._keyboardUpEvent = rr => {
          this._keyboardActive || (this._keyboardActive = !0, this._registerDevice(Tr.Keyboard, 0, 255));
          const Sr = this._inputs[Tr.Keyboard][0];
          if (Sr) {
            Sr[rr.keyCode] = 0;
            const Qr = rr;
            if (Qr.inputIndex = rr.keyCode, this._usingMacOs && "Meta" === rr.key && this._metaKeys.length > 0) {
              for (const rr of this._metaKeys) {
                const Qr = Rr.CreateDeviceEvent(Tr.Keyboard, 0, rr, 0, this, this._elementToAttachTo);
                Sr[rr] = 0, this._onInputChanged(Tr.Keyboard, 0, Qr)
              }
              this._metaKeys.splice(0, this._metaKeys.length)
            }
            this._onInputChanged(Tr.Keyboard, 0, Qr)
          }
        }, this._keyboardBlurEvent = () => {
          if (this._keyboardActive) {
            const rr = this._inputs[Tr.Keyboard][0];
            for (let Sr = 0; Sr < rr.length; Sr++)
              if (0 !== rr[Sr]) {
                rr[Sr] = 0;
                const Qr = Rr.CreateDeviceEvent(Tr.Keyboard, 0, Sr, 0, this, this._elementToAttachTo);
                this._onInputChanged(Tr.Keyboard, 0, Qr)
              } this._usingMacOs && this._metaKeys.splice(0, this._metaKeys.length)
          }
        }, this._elementToAttachTo.addEventListener("keydown", this._keyboardDownEvent), this._elementToAttachTo.addEventListener("keyup", this._keyboardUpEvent), this._elementToAttachTo.addEventListener("blur", this._keyboardBlurEvent)
      }
      _handlePointerActions() {
        this._maxTouchPoints = (0, nr.j)() && navigator.maxTouchPoints || 2, this._activeTouchIds || (this._activeTouchIds = new Array(this._maxTouchPoints));
        for (let Zr = 0; Zr < this._maxTouchPoints; Zr++) this._activeTouchIds[Zr] = -1;
        this._pointerMoveEvent = rr => {
          const Sr = this._getPointerType(rr);
          let Qr = Sr === Tr.Mouse ? 0 : this._activeTouchIds.indexOf(rr.pointerId);
          if (Sr === Tr.Touch && -1 === Qr) {
            if (0 === rr.buttons) return;
            const Wr = this._activeTouchIds.indexOf(-1);
            if (!(Wr >= 0)) return void Zr.h.Warn(`Max number of touches exceeded.  Ignoring touches in excess of ${this._maxTouchPoints}`);
            Qr = Wr, this._activeTouchIds[Wr] = rr.pointerId, this._onDeviceConnected(Sr, Qr)
          }
          this._inputs[Sr] || (this._inputs[Sr] = {}), this._inputs[Sr][Qr] || this._addPointerDevice(Sr, Qr, rr.clientX, rr.clientY);
          const Wr = this._inputs[Sr][Qr];
          if (Wr) {
            const Zr = rr;
            Zr.inputIndex = vr.Move, Wr[vr.Horizontal] = rr.clientX, Wr[vr.Vertical] = rr.clientY, Sr === Tr.Touch && 0 === Wr[vr.LeftClick] && (Wr[vr.LeftClick] = 1), void 0 === rr.pointerId && (rr.pointerId = this._mouseId), this._onInputChanged(Sr, Qr, Zr), this._usingSafari || -1 === rr.button || (Zr.inputIndex = rr.button + 2, Wr[rr.button + 2] = Wr[rr.button + 2] ? 0 : 1, this._onInputChanged(Sr, Qr, Zr))
          }
        }, this._pointerDownEvent = rr => {
          const Sr = this._getPointerType(rr);
          let Qr = Sr === Tr.Mouse ? 0 : rr.pointerId;
          if (Sr === Tr.Touch) {
            let Sr = this._activeTouchIds.indexOf(rr.pointerId);
            if (-1 === Sr && (Sr = this._activeTouchIds.indexOf(-1)), !(Sr >= 0)) return void Zr.h.Warn(`Max number of touches exceeded.  Ignoring touches in excess of ${this._maxTouchPoints}`);
            Qr = Sr, this._activeTouchIds[Sr] = rr.pointerId
          }
          this._inputs[Sr] || (this._inputs[Sr] = {}), this._inputs[Sr][Qr] ? Sr === Tr.Touch && this._onDeviceConnected(Sr, Qr) : this._addPointerDevice(Sr, Qr, rr.clientX, rr.clientY);
          const Wr = this._inputs[Sr][Qr];
          if (Wr) {
            const Zr = Wr[vr.Horizontal],
              jr = Wr[vr.Vertical];
            if (Sr === Tr.Mouse) {
              if (void 0 === rr.pointerId && (rr.pointerId = this._mouseId), !document.pointerLockElement) try {
                this._elementToAttachTo.setPointerCapture(this._mouseId)
              } catch (ar) {}
            } else if (rr.pointerId && !document.pointerLockElement) try {
              this._elementToAttachTo.setPointerCapture(rr.pointerId)
            } catch (ar) {}
            Wr[vr.Horizontal] = rr.clientX, Wr[vr.Vertical] = rr.clientY, Wr[rr.button + 2] = 1;
            const Ir = rr;
            Ir.inputIndex = rr.button + 2, this._onInputChanged(Sr, Qr, Ir), Zr === rr.clientX && jr === rr.clientY || (Ir.inputIndex = vr.Move, this._onInputChanged(Sr, Qr, Ir))
          }
        }, this._pointerUpEvent = rr => {
          const Sr = this._getPointerType(rr),
            Qr = Sr === Tr.Mouse ? 0 : this._activeTouchIds.indexOf(rr.pointerId);
          if (Sr === Tr.Touch) {
            if (-1 === Qr) return;
            this._activeTouchIds[Qr] = -1
          }
          const Zr = this._inputs[Sr]?.[Qr];
          let Wr = rr.button,
            ar = Zr && 0 !== Zr[Wr + 2];
          if (!ar && this._isUsingFirefox && this._usingMacOs && Zr && (Wr = 2 === Wr ? 0 : 2, ar = 0 !== Zr[Wr + 2]), ar) {
            const ar = Zr[vr.Horizontal],
              jr = Zr[vr.Vertical];
            Zr[vr.Horizontal] = rr.clientX, Zr[vr.Vertical] = rr.clientY, Zr[Wr + 2] = 0;
            const Ir = rr;
            void 0 === rr.pointerId && (rr.pointerId = this._mouseId), ar === rr.clientX && jr === rr.clientY || (Ir.inputIndex = vr.Move, this._onInputChanged(Sr, Qr, Ir)), Ir.inputIndex = Wr + 2, Sr === Tr.Mouse && this._mouseId >= 0 && this._elementToAttachTo.hasPointerCapture?.(this._mouseId) ? this._elementToAttachTo.releasePointerCapture(this._mouseId) : rr.pointerId && this._elementToAttachTo.hasPointerCapture?.(rr.pointerId) && this._elementToAttachTo.releasePointerCapture(rr.pointerId), this._onInputChanged(Sr, Qr, Ir), Sr === Tr.Touch && this._onDeviceDisconnected(Sr, Qr)
          }
        }, this._pointerCancelTouch = rr => {
          const Sr = this._activeTouchIds.indexOf(rr);
          if (-1 === Sr) return;
          this._elementToAttachTo.hasPointerCapture?.(rr) && this._elementToAttachTo.releasePointerCapture(rr), this._inputs[Tr.Touch][Sr][vr.LeftClick] = 0;
          const Qr = Rr.CreateDeviceEvent(Tr.Touch, Sr, vr.LeftClick, 0, this, this._elementToAttachTo, rr);
          this._onInputChanged(Tr.Touch, Sr, Qr), this._activeTouchIds[Sr] = -1, this._onDeviceDisconnected(Tr.Touch, Sr)
        }, this._pointerCancelEvent = rr => {
          if ("mouse" === rr.pointerType) {
            const rr = this._inputs[Tr.Mouse][0];
            this._mouseId >= 0 && this._elementToAttachTo.hasPointerCapture?.(this._mouseId) && this._elementToAttachTo.releasePointerCapture(this._mouseId);
            for (let Sr = vr.LeftClick; Sr <= vr.BrowserForward; Sr++)
              if (1 === rr[Sr]) {
                rr[Sr] = 0;
                const Qr = Rr.CreateDeviceEvent(Tr.Mouse, 0, Sr, 0, this, this._elementToAttachTo);
                this._onInputChanged(Tr.Mouse, 0, Qr)
              }
          } else this._pointerCancelTouch(rr.pointerId)
        }, this._pointerLeaveEvent = rr => {
          "pen" === rr.pointerType && this._pointerCancelTouch(rr.pointerId)
        }, this._wheelEventName = "onwheel" in document.createElement("div") ? "wheel" : void 0 !== document.onmousewheel ? "mousewheel" : "DOMMouseScroll";
        let rr = !1;
        const Sr = function() {};
        try {
          const Qr = Object.defineProperty({}, "passive", {
            get: function() {
              rr = !0
            }
          });
          this._elementToAttachTo.addEventListener("test", Sr, Qr), this._elementToAttachTo.removeEventListener("test", Sr, Qr)
        } catch (Qr) {}
        this._pointerBlurEvent = () => {
          if (this.isDeviceAvailable(Tr.Mouse)) {
            const rr = this._inputs[Tr.Mouse][0];
            this._mouseId >= 0 && this._elementToAttachTo.hasPointerCapture?.(this._mouseId) && this._elementToAttachTo.releasePointerCapture(this._mouseId);
            for (let Sr = vr.LeftClick; Sr <= vr.BrowserForward; Sr++)
              if (1 === rr[Sr]) {
                rr[Sr] = 0;
                const Qr = Rr.CreateDeviceEvent(Tr.Mouse, 0, Sr, 0, this, this._elementToAttachTo);
                this._onInputChanged(Tr.Mouse, 0, Qr)
              }
          }
          if (this.isDeviceAvailable(Tr.Touch)) {
            const rr = this._inputs[Tr.Touch];
            for (let Sr = 0; Sr < this._activeTouchIds.length; Sr++) {
              const Qr = this._activeTouchIds[Sr];
              if (this._elementToAttachTo.hasPointerCapture?.(Qr) && this._elementToAttachTo.releasePointerCapture(Qr), -1 !== Qr && 1 === rr[Sr]?.[vr.LeftClick]) {
                rr[Sr][vr.LeftClick] = 0;
                const Zr = Rr.CreateDeviceEvent(Tr.Touch, Sr, vr.LeftClick, 0, this, this._elementToAttachTo, Qr);
                this._onInputChanged(Tr.Touch, Sr, Zr), this._activeTouchIds[Sr] = -1, this._onDeviceDisconnected(Tr.Touch, Sr)
              }
            }
          }
        }, this._pointerWheelEvent = rr => {
          const Sr = Tr.Mouse;
          this._inputs[Sr] || (this._inputs[Sr] = []), this._inputs[Sr][0] || (this._pointerActive = !0, this._registerDevice(Sr, 0, Cr));
          const Qr = this._inputs[Sr][0];
          if (Qr) {
            Qr[vr.MouseWheelX] = rr.deltaX || 0, Qr[vr.MouseWheelY] = rr.deltaY || rr.wheelDelta || 0, Qr[vr.MouseWheelZ] = rr.deltaZ || 0;
            const Zr = rr;
            void 0 === rr.pointerId && (rr.pointerId = this._mouseId), 0 !== Qr[vr.MouseWheelX] && (Zr.inputIndex = vr.MouseWheelX, this._onInputChanged(Sr, 0, Zr)), 0 !== Qr[vr.MouseWheelY] && (Zr.inputIndex = vr.MouseWheelY, this._onInputChanged(Sr, 0, Zr)), 0 !== Qr[vr.MouseWheelZ] && (Zr.inputIndex = vr.MouseWheelZ, this._onInputChanged(Sr, 0, Zr))
          }
        }, this._usingMacOs && this._isUsingChromium && (this._pointerMacOsChromeOutEvent = rr => {
          rr.buttons > 1 && this._pointerCancelEvent(rr)
        }, this._elementToAttachTo.addEventListener("lostpointercapture", this._pointerMacOsChromeOutEvent)), this._elementToAttachTo.addEventListener(this._eventPrefix + "move", this._pointerMoveEvent), this._elementToAttachTo.addEventListener(this._eventPrefix + "down", this._pointerDownEvent), this._elementToAttachTo.addEventListener(this._eventPrefix + "up", this._pointerUpEvent), this._elementToAttachTo.addEventListener(this._eventPrefix + "cancel", this._pointerCancelEvent), this._elementToAttachTo.addEventListener(this._eventPrefix + "leave", this._pointerLeaveEvent), this._elementToAttachTo.addEventListener("blur", this._pointerBlurEvent), this._elementToAttachTo.addEventListener(this._wheelEventName, this._pointerWheelEvent, !!rr && {
          passive: !1
        }), this._pointerInputClearObserver = this._engine.onEndFrameObservable.add((() => {
          if (this.isDeviceAvailable(Tr.Mouse)) {
            const rr = this._inputs[Tr.Mouse][0];
            rr[vr.MouseWheelX] = 0, rr[vr.MouseWheelY] = 0, rr[vr.MouseWheelZ] = 0
          }
        }))
      }
      _handleGamepadActions() {
        this._gamepadConnectedEvent = rr => {
          this._addGamePad(rr.gamepad)
        }, this._gamepadDisconnectedEvent = rr => {
          if (this._gamepads) {
            const Sr = this._getGamepadDeviceType(rr.gamepad.id),
              Qr = rr.gamepad.index;
            this._unregisterDevice(Sr, Qr), delete this._gamepads[Qr]
          }
        }, window.addEventListener("gamepadconnected", this._gamepadConnectedEvent), window.addEventListener("gamepaddisconnected", this._gamepadDisconnectedEvent)
      }
      _updateDevice(rr, Sr, Qr) {
        const Zr = navigator.getGamepads()[Sr];
        if (Zr && rr === this._gamepads[Sr]) {
          const Wr = this._inputs[rr][Sr];
          Qr >= Zr.buttons.length ? Wr[Qr] = Zr.axes[Qr - Zr.buttons.length].valueOf() : Wr[Qr] = Zr.buttons[Qr].value
        }
      }
      _getGamepadDeviceType(rr) {
        return -1 !== rr.indexOf("054c") ? -1 !== rr.indexOf("0ce6") ? Tr.DualSense : Tr.DualShock : -1 !== rr.indexOf("Xbox One") || -1 !== rr.search("Xbox 360") || -1 !== rr.search("xinput") || -1 !== rr.indexOf("045e") && -1 === rr.indexOf("Surface Dock") ? Tr.Xbox : -1 !== rr.indexOf("057e") ? Tr.Switch : Tr.Generic
      }
      _getPointerType(rr) {
        let Sr = Tr.Mouse;
        return ("touch" === rr.pointerType || "pen" === rr.pointerType || rr.touches) && (Sr = Tr.Touch), Sr
      }
    }
    class Gr {
      constructor(rr, Sr) {
        let Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.deviceType = Sr, this.deviceSlot = Qr, this.onInputChangedObservable = new jr.d, this._deviceInputSystem = rr
      }
      getInput(rr) {
        return this._deviceInputSystem.pollInput(this.deviceType, this.deviceSlot, rr)
      }
    }
    class kr {
      constructor(rr) {
        this._registeredManagers = new Array, this._refCount = 0, this.registerManager = rr => {
          for (let Sr = 0; Sr < this._devices.length; Sr++) {
            const Qr = this._devices[Sr];
            for (const Zr in Qr) {
              const Qr = +Zr;
              rr._addDevice(new Gr(this._deviceInputSystem, Sr, Qr))
            }
          }
          this._registeredManagers.push(rr)
        }, this.unregisterManager = rr => {
          const Sr = this._registeredManagers.indexOf(rr);
          Sr > -1 && this._registeredManagers.splice(Sr, 1)
        };
        const Sr = Object.keys(Tr).length / 2;
        this._devices = new Array(Sr);
        const Qr = (rr, Sr) => {
            this._devices[rr] || (this._devices[rr] = new Array), this._devices[rr][Sr] || (this._devices[rr][Sr] = Sr);
            for (const Qr of this._registeredManagers) {
              const Zr = new Gr(this._deviceInputSystem, rr, Sr);
              Qr._addDevice(Zr)
            }
          },
          Zr = (rr, Sr) => {
            this._devices[rr]?.[Sr] && delete this._devices[rr][Sr];
            for (const Qr of this._registeredManagers) Qr._removeDevice(rr, Sr)
          },
          Wr = (rr, Sr, Qr) => {
            if (Qr)
              for (const Zr of this._registeredManagers) Zr._onInputChanged(rr, Sr, Qr)
          };
        "undefined" !== typeof _native ? this._deviceInputSystem = new gr(Qr, Zr, Wr) : this._deviceInputSystem = new Mr(rr, Qr, Zr, Wr)
      }
      dispose() {
        this._deviceInputSystem.dispose()
      }
    }
    class Ar {
      getDeviceSource(rr, Sr) {
        if (void 0 === Sr) {
          if (void 0 === this._firstDevice[rr]) return null;
          Sr = this._firstDevice[rr]
        }
        return this._devices[rr] && void 0 !== this._devices[rr][Sr] ? this._devices[rr][Sr] : null
      }
      getDeviceSources(rr) {
        return this._devices[rr] ? this._devices[rr].filter((rr => !!rr)) : []
      }
      constructor(rr) {
        const Sr = Object.keys(Tr).length / 2;
        this._devices = new Array(Sr), this._firstDevice = new Array(Sr), this._engine = rr, this._engine._deviceSourceManager || (this._engine._deviceSourceManager = new kr(rr)), this._engine._deviceSourceManager._refCount++, this.onDeviceConnectedObservable = new jr.d((rr => {
          for (const Sr of this._devices)
            if (Sr)
              for (const Qr of Sr) Qr && this.onDeviceConnectedObservable.notifyObserver(rr, Qr)
        })), this.onDeviceDisconnectedObservable = new jr.d, this._engine._deviceSourceManager.registerManager(this), this._onDisposeObserver = rr.lC.add((() => {
          this.dispose()
        }))
      }
      dispose() {
        this.onDeviceConnectedObservable.clear(), this.onDeviceDisconnectedObservable.clear(), this._engine._deviceSourceManager && (this._engine._deviceSourceManager.unregisterManager(this), --this._engine._deviceSourceManager._refCount < 1 && (this._engine._deviceSourceManager.dispose(), delete this._engine._deviceSourceManager)), this._engine.lC.remove(this._onDisposeObserver)
      }
      _addDevice(rr) {
        this._devices[rr.deviceType] || (this._devices[rr.deviceType] = []), this._devices[rr.deviceType][rr.deviceSlot] || (this._devices[rr.deviceType][rr.deviceSlot] = rr, this._updateFirstDevices(rr.deviceType)), this.onDeviceConnectedObservable.notifyObservers(rr)
      }
      _removeDevice(rr, Sr) {
        const Qr = this._devices[rr]?.[Sr];
        this.onDeviceDisconnectedObservable.notifyObservers(Qr), this._devices[rr]?.[Sr] && delete this._devices[rr][Sr], this._updateFirstDevices(rr)
      }
      _onInputChanged(rr, Sr, Qr) {
        this._devices[rr]?.[Sr]?.onInputChangedObservable.notifyObservers(Qr)
      }
      _updateFirstDevices(rr) {
        switch (rr) {
          case Tr.Keyboard:
          case Tr.Mouse:
            this._firstDevice[rr] = 0;
            break;
          case Tr.Touch:
          case Tr.DualSense:
          case Tr.DualShock:
          case Tr.Xbox:
          case Tr.Switch:
          case Tr.Generic: {
            delete this._firstDevice[rr];
            const Sr = this._devices[rr];
            if (Sr)
              for (let Qr = 0; Qr < Sr.length; Qr++)
                if (Sr[Qr]) {
                  this._firstDevice[rr] = Qr;
                  break
                } break
          }
        }
      }
    }
    var Vr = Qr(42040);
    class ir {
      constructor() {
        this._singleClick = !1, this._doubleClick = !1, this._hasSwiped = !1, this._ignore = !1
      }
      get singleClick() {
        return this._singleClick
      }
      get JI() {
        return this._doubleClick
      }
      get hasSwiped() {
        return this._hasSwiped
      }
      get ignore() {
        return this._ignore
      }
      set singleClick(rr) {
        this._singleClick = rr
      }
      set JI(rr) {
        this._doubleClick = rr
      }
      set hasSwiped(rr) {
        this._hasSwiped = rr
      }
      set ignore(rr) {
        this._ignore = rr
      }
    }
    class wr {
      constructor(rr) {
        this._alreadyAttached = !1, this._meshPickProceed = !1, this._currentPickResult = null, this._previousPickResult = null, this._activePointerIds = new Array, this._activePointerIdsCount = 0, this._doubleClickOccured = !1, this._isSwiping = !1, this._swipeButtonPressed = -1, this._skipPointerTap = !1, this._isMultiTouchGesture = !1, this._pointerX = 0, this._pointerY = 0, this._startingPointerPosition = new pr.q(0, 0), this._previousStartingPointerPosition = new pr.q(0, 0), this._startingPointerTime = 0, this._previousStartingPointerTime = 0, this._pointerCaptures = {}, this._meshUnderPointerId = {}, this._movePointerInfo = null, this._latestPointerMoveEvents = new Map, this._cameraObserverCount = 0, this._delayedClicks = [null, null, null, null, null], this._deviceSourceManager = null, this._scene = rr || er.b.LastCreatedScene, this._scene
      }
      get meshUnderPointer() {
        return this._movePointerInfo && (this._movePointerInfo._generatePickInfo(), this._movePointerInfo = null), this._pointerOverMesh
      }
      getMeshUnderPointerByPointerId(rr) {
        return this._meshUnderPointerId[rr] || null
      }
      get unTranslatedPointer() {
        return new pr.q(this._unTranslatedPointerX, this._unTranslatedPointerY)
      }
      get pointerX() {
        return this._pointerX
      }
      set pointerX(rr) {
        this._pointerX = rr
      }
      get pointerY() {
        return this._pointerY
      }
      set pointerY(rr) {
        this._pointerY = rr
      }
      _updatePointerPosition(rr) {
        const Sr = this._scene.MU().getInputElementClientRect();
        Sr && (this._pointerX = rr.clientX - Sr.left, this._pointerY = rr.clientY - Sr.top, this._unTranslatedPointerX = this._pointerX, this._unTranslatedPointerY = this._pointerY)
      }
      _processPointerMove(rr, Sr) {
        const Qr = this._scene,
          Zr = Qr.MU(),
          Wr = Zr.getInputElement();
        Wr && (Wr.tabIndex = Zr.canvasTabIndex, Qr.doNotHandleCursors || (Wr.style.cursor = Qr.defaultCursor)), this._setCursorAndPointerOverMesh(rr, Sr, Qr);
        for (const Ir of Qr._pointerMoveStage) {
          rr = rr || this._pickMove(Sr);
          const Qr = !!rr?.pickedMesh;
          rr = Ir.action(this._unTranslatedPointerX, this._unTranslatedPointerY, rr, Qr, Wr)
        }
        const ar = Sr.inputIndex >= vr.MouseWheelX && Sr.inputIndex <= vr.MouseWheelZ ? yr.b.POINTERWHEEL : yr.b.POINTERMOVE;
        let jr;
        Qr.onPointerMove && (rr = rr || this._pickMove(Sr), Qr.onPointerMove(Sr, rr, ar)), rr ? (jr = new yr.f(ar, Sr, rr), this._setRayOnPointerInfo(rr, Sr)) : (jr = new yr.f(ar, Sr, null, this), this._movePointerInfo = jr), Qr.onPointerObservable.hasObservers() && Qr.onPointerObservable.notifyObservers(jr, ar)
      }
      _setRayOnPointerInfo(rr, Sr) {
        const Qr = this._scene;
        rr && Vr.b._IsPickingAvailable && (rr.ray || (rr.ray = Qr.createPickingRay(Sr.offsetX, Sr.offsetY, pr.d.Identity(), Qr.activeCamera)))
      }
      _addCameraPointerObserver(rr, Sr) {
        return this._cameraObserverCount++, this._scene.onPointerObservable.add(rr, Sr)
      }
      _removeCameraPointerObserver(rr) {
        return this._cameraObserverCount--, this._scene.onPointerObservable.remove(rr)
      }
      _checkForPicking() {
        return !!(this._scene.onPointerObservable.observers.length > this._cameraObserverCount || this._scene.onPointerPick)
      }
      _checkPrePointerObservable(rr, Sr, Qr) {
        const Zr = this._scene,
          Wr = new yr.c(Qr, Sr, this._unTranslatedPointerX, this._unTranslatedPointerY);
        return rr && (Wr.originalPickingInfo = rr, Wr.ray = rr.ray, "xr-near" === Sr.pointerType && rr.originMesh && (Wr.nearInteractionPickingInfo = rr)), Zr.onPrePointerObservable.notifyObservers(Wr, Qr), !!Wr.skipOnPointerObservable
      }
      _pickMove(rr) {
        const Sr = this._scene,
          Qr = Sr.eN(this._unTranslatedPointerX, this._unTranslatedPointerY, Sr.pointerMovePredicate, Sr.pointerMoveFastCheck, Sr.cameraToUseForPointers, Sr.pointerMoveTrianglePredicate);
        return this._setCursorAndPointerOverMesh(Qr, rr, Sr), Qr
      }
      _updateMeshUnderPointer() {
        const rr = this._scene;
        if (!rr.constantlyUpdateMeshUnderPointer || 0 === this._latestPointerMoveEvents.size || rr.skipPointerMovePicking || !rr.cameraToUseForPointers && !rr.activeCamera) return;
        this._ensurePointerMovePredicate();
        const Sr = this._pointerX,
          Qr = this._pointerY,
          Zr = this._unTranslatedPointerX,
          Wr = this._unTranslatedPointerY;
        for (const ar of this._latestPointerMoveEvents.values()) this._pointerX = ar.pointerX, this._pointerY = ar.pointerY, this._unTranslatedPointerX = ar.unTranslatedPointerX, this._unTranslatedPointerY = ar.unTranslatedPointerY, this._pickMove(ar.event);
        this._pointerX = Sr, this._pointerY = Qr, this._unTranslatedPointerX = Zr, this._unTranslatedPointerY = Wr
      }
      _ensurePointerMovePredicate() {
        const rr = this._scene;
        rr.pointerMovePredicate || (rr.pointerMovePredicate = Sr => (Sr._isPointerMovePickable ?? Sr.ut) && Sr.isVisible && Sr.isReady() && Sr.isEnabled() && (Sr.enablePointerMoveEvents || rr.constantlyUpdateMeshUnderPointer || null !== Sr._getActionManagerForTrigger()) && (!rr.cameraToUseForPointers || 0 !== (rr.cameraToUseForPointers.layerMask & Sr.layerMask)))
      }
      _setCursorAndPointerOverMesh(rr, Sr, Qr) {
        const Zr = Qr.MU().getInputElement();
        if (rr?.pickedMesh) {
          if (this.setPointerOverMesh(rr.pickedMesh, Sr.pointerId, rr, Sr), !Qr.doNotHandleCursors && Zr && this._pointerOverMesh) {
            const rr = this._pointerOverMesh._getActionManagerForTrigger();
            rr && rr.hasPointerTriggers && (Zr.style.cursor = rr.hoverCursor || Qr.hoverCursor)
          }
        } else this.setPointerOverMesh(null, Sr.pointerId, rr, Sr)
      }
      simulatePointerMove(rr, Sr) {
        const Qr = new PointerEvent("pointermove", Sr);
        Qr.inputIndex = vr.Move, this._checkPrePointerObservable(rr, Qr, yr.b.POINTERMOVE) || this._processPointerMove(rr, Qr)
      }
      simulatePointerDown(rr, Sr) {
        const Qr = new PointerEvent("pointerdown", Sr);
        Qr.inputIndex = Qr.button + 2, this._checkPrePointerObservable(rr, Qr, yr.b.POINTERDOWN) || this._processPointerDown(rr, Qr)
      }
      _processPointerDown(rr, Sr) {
        const Qr = this._scene;
        if (rr?.pickedMesh) {
          this._pickedDownMesh = rr.pickedMesh;
          const Zr = rr.pickedMesh._getActionManagerForTrigger();
          if (Zr) {
            if (Zr.hasPickTriggers) switch (Zr.processTrigger(5, new Ur(rr.pickedMesh, Qr.pointerX, Qr.pointerY, rr.pickedMesh, Sr, rr)), Sr.button) {
              case 0:
                Zr.processTrigger(2, new Ur(rr.pickedMesh, Qr.pointerX, Qr.pointerY, rr.pickedMesh, Sr, rr));
                break;
              case 1:
                Zr.processTrigger(4, new Ur(rr.pickedMesh, Qr.pointerX, Qr.pointerY, rr.pickedMesh, Sr, rr));
                break;
              case 2:
                Zr.processTrigger(3, new Ur(rr.pickedMesh, Qr.pointerX, Qr.pointerY, rr.pickedMesh, Sr, rr))
            }
            Zr.hasSpecificTrigger(8) && window.setTimeout((() => {
              const rr = Qr.eN(this._unTranslatedPointerX, this._unTranslatedPointerY, (rr => rr.ut && rr.isVisible && rr.isReady() && rr.actionManager && rr.actionManager.hasSpecificTrigger(8) && rr === this._pickedDownMesh), !1, Qr.cameraToUseForPointers);
              rr?.pickedMesh && Zr && 0 !== this._activePointerIdsCount && Date.now() - this._startingPointerTime > wr.LongPressDelay && !this._isPointerSwiping() && (this._startingPointerTime = 0, Zr.processTrigger(8, Ur.CreateNew(rr.pickedMesh, Sr)))
            }), wr.LongPressDelay)
          }
        } else
          for (const ar of Qr._pointerDownStage) rr = ar.action(this._unTranslatedPointerX, this._unTranslatedPointerY, rr, Sr, !1);
        let Zr;
        const Wr = yr.b.POINTERDOWN;
        rr ? (Qr.onPointerDown && Qr.onPointerDown(Sr, rr, Wr), Zr = new yr.f(Wr, Sr, rr), this._setRayOnPointerInfo(rr, Sr)) : Zr = new yr.f(Wr, Sr, null, this), Qr.onPointerObservable.hasObservers() && Qr.onPointerObservable.notifyObservers(Zr, Wr)
      }
      _isPointerSwiping() {
        return this._isSwiping
      }
      simulatePointerUp(rr, Sr, Qr) {
        const Zr = new PointerEvent("pointerup", Sr);
        Zr.inputIndex = vr.Move;
        const Wr = new ir;
        Qr ? Wr.JI = !0 : Wr.singleClick = !0, this._checkPrePointerObservable(rr, Zr, yr.b.POINTERUP) || this._processPointerUp(rr, Zr, Wr)
      }
      _processPointerUp(rr, Sr, Qr) {
        const Zr = this._scene;
        if (rr?.pickedMesh) {
          if (this._pickedUpMesh = rr.pickedMesh, this._pickedDownMesh === this._pickedUpMesh && (Zr.onPointerPick && Zr.onPointerPick(Sr, rr), Qr.singleClick && !Qr.ignore && Zr.onPointerObservable.observers.length > this._cameraObserverCount)) {
            const Qr = yr.b.POINTERPICK,
              Wr = new yr.f(Qr, Sr, rr);
            this._setRayOnPointerInfo(rr, Sr), Zr.onPointerObservable.notifyObservers(Wr, Qr)
          }
          const Wr = rr.pickedMesh._getActionManagerForTrigger();
          if (Wr && !Qr.ignore) {
            Wr.processTrigger(7, Ur.CreateNew(rr.pickedMesh, Sr, rr)), !Qr.hasSwiped && Qr.singleClick && Wr.processTrigger(1, Ur.CreateNew(rr.pickedMesh, Sr, rr));
            const Zr = rr.pickedMesh._getActionManagerForTrigger(6);
            Qr.JI && Zr && Zr.processTrigger(6, Ur.CreateNew(rr.pickedMesh, Sr, rr))
          }
        } else if (!Qr.ignore)
          for (const Wr of Zr._pointerUpStage) rr = Wr.action(this._unTranslatedPointerX, this._unTranslatedPointerY, rr, Sr, Qr.JI);
        if (this._pickedDownMesh && this._pickedDownMesh !== this._pickedUpMesh) {
          const rr = this._pickedDownMesh._getActionManagerForTrigger(16);
          rr && rr.processTrigger(16, Ur.CreateNew(this._pickedDownMesh, Sr))
        }
        if (!Qr.ignore) {
          const Wr = new yr.f(yr.b.POINTERUP, Sr, rr);
          if (this._setRayOnPointerInfo(rr, Sr), Zr.onPointerObservable.notifyObservers(Wr, yr.b.POINTERUP), Zr.onPointerUp && Zr.onPointerUp(Sr, rr, yr.b.POINTERUP), !Qr.hasSwiped && !this._skipPointerTap && !this._isMultiTouchGesture) {
            let Wr = 0;
            if (Qr.singleClick ? Wr = yr.b.POINTERTAP : Qr.JI && (Wr = yr.b.POINTERDOUBLETAP), Wr) {
              const Qr = new yr.f(Wr, Sr, rr);
              Zr.onPointerObservable.hasObservers() && Zr.onPointerObservable.hasSpecificMask(Wr) && Zr.onPointerObservable.notifyObservers(Qr, Wr)
            }
          }
        }
      }
      isPointerCaptured() {
        let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return this._pointerCaptures[rr]
      }
      attachControl() {
        let rr = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          Sr = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          Qr = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          Zr = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const Wr = this._scene,
          ar = Wr.MU();
        Zr || (Zr = ar.getInputElement()), this._alreadyAttached && this.detachControl(), Zr && (this._alreadyAttachedTo = Zr), this._deviceSourceManager = new Ar(ar), this._initActionManager = rr => {
          if (!this._meshPickProceed) {
            const Sr = Wr.skipPointerUpPicking || 0 === Wr._registeredActions && !this._checkForPicking() && !Wr.onPointerUp ? null : Wr.eN(this._unTranslatedPointerX, this._unTranslatedPointerY, Wr.pointerUpPredicate, Wr.pointerUpFastCheck, Wr.cameraToUseForPointers, Wr.pointerUpTrianglePredicate);
            this._currentPickResult = Sr, Sr && (rr = Sr.hit && Sr.pickedMesh ? Sr.pickedMesh._getActionManagerForTrigger() : null), this._meshPickProceed = !0
          }
          return rr
        }, this._delayedSimpleClick = (rr, Sr, Qr) => {
          if ((Date.now() - this._previousStartingPointerTime > wr.DoubleClickDelay && !this._doubleClickOccured || rr !== this._previousButtonPressed) && (this._doubleClickOccured = !1, Sr.singleClick = !0, Sr.ignore = !1, this._delayedClicks[rr])) {
            const Sr = this._delayedClicks[rr].evt,
              Qr = yr.b.POINTERTAP,
              Zr = new yr.f(Qr, Sr, this._currentPickResult);
            Wr.onPointerObservable.hasObservers() && Wr.onPointerObservable.hasSpecificMask(Qr) && Wr.onPointerObservable.notifyObservers(Zr, Qr), this._delayedClicks[rr] = null
          }
        }, this._initClickEvent = (rr, Sr, Qr, Zr) => {
          const Wr = new ir;
          this._currentPickResult = null;
          let ar = null,
            jr = rr.hasSpecificMask(yr.b.POINTERPICK) || Sr.hasSpecificMask(yr.b.POINTERPICK) || rr.hasSpecificMask(yr.b.POINTERTAP) || Sr.hasSpecificMask(yr.b.POINTERTAP) || rr.hasSpecificMask(yr.b.POINTERDOUBLETAP) || Sr.hasSpecificMask(yr.b.POINTERDOUBLETAP);
          !jr && Br && (ar = this._initActionManager(ar, Wr), ar && (jr = ar.hasPickTriggers));
          let Ir = !1;
          if (jr = jr && !this._isMultiTouchGesture, jr) {
            const jr = Qr.button;
            if (Wr.hasSwiped = this._isPointerSwiping(), !Wr.hasSwiped) {
              let fr = !wr.ExclusiveDoubleClickMode;
              if (fr || (fr = !rr.hasSpecificMask(yr.b.POINTERDOUBLETAP) && !Sr.hasSpecificMask(yr.b.POINTERDOUBLETAP), fr && !Br.HasSpecificTrigger(6) && (ar = this._initActionManager(ar, Wr), ar && (fr = !ar.hasSpecificTrigger(6)))), fr)(Date.now() - this._previousStartingPointerTime > wr.DoubleClickDelay || jr !== this._previousButtonPressed) && (Wr.singleClick = !0, Zr(Wr, this._currentPickResult), Ir = !0);
              else {
                const rr = {
                  evt: Qr,
                  clickInfo: Wr,
                  timeoutId: window.setTimeout(this._delayedSimpleClick.bind(this, jr, Wr, Zr), wr.DoubleClickDelay)
                };
                this._delayedClicks[jr] = rr
              }
              let Er = rr.hasSpecificMask(yr.b.POINTERDOUBLETAP) || Sr.hasSpecificMask(yr.b.POINTERDOUBLETAP);
              !Er && Br.HasSpecificTrigger(6) && (ar = this._initActionManager(ar, Wr), ar && (Er = ar.hasSpecificTrigger(6))), Er && (jr === this._previousButtonPressed && Date.now() - this._previousStartingPointerTime < wr.DoubleClickDelay && !this._doubleClickOccured ? (Wr.hasSwiped || this._isPointerSwiping() ? (this._doubleClickOccured = !1, this._previousStartingPointerTime = this._startingPointerTime, this._previousStartingPointerPosition.x = this._startingPointerPosition.x, this._previousStartingPointerPosition.y = this._startingPointerPosition.y, this._previousButtonPressed = jr, wr.ExclusiveDoubleClickMode ? (this._delayedClicks[jr] && (clearTimeout(this._delayedClicks[jr]?.timeoutId), this._delayedClicks[jr] = null), Zr(Wr, this._previousPickResult)) : Zr(Wr, this._currentPickResult)) : (this._previousStartingPointerTime = 0, this._doubleClickOccured = !0, Wr.JI = !0, Wr.ignore = !1, wr.ExclusiveDoubleClickMode && this._delayedClicks[jr] && (clearTimeout(this._delayedClicks[jr]?.timeoutId), this._delayedClicks[jr] = null), Zr(Wr, this._currentPickResult)), Ir = !0) : (this._doubleClickOccured = !1, this._previousStartingPointerTime = this._startingPointerTime, this._previousStartingPointerPosition.x = this._startingPointerPosition.x, this._previousStartingPointerPosition.y = this._startingPointerPosition.y, this._previousButtonPressed = jr))
            }
          }
          Ir || Zr(Wr, this._currentPickResult)
        }, this._onPointerMove = rr => {
          if (this._updatePointerPosition(rr), this._latestPointerMoveEvents.set(rr.pointerId, {
              event: rr,
              pointerX: this._pointerX,
              pointerY: this._pointerY,
              unTranslatedPointerX: this._unTranslatedPointerX,
              unTranslatedPointerY: this._unTranslatedPointerY
            }), this._isSwiping || -1 === this._swipeButtonPressed || (this._isSwiping = Math.abs(this._startingPointerPosition.x - this._pointerX) > wr.DragMovementThreshold || Math.abs(this._startingPointerPosition.y - this._pointerY) > wr.DragMovementThreshold), ar.isPointerLock && ar._verifyPointerLock(), this._checkPrePointerObservable(null, rr, rr.inputIndex >= vr.MouseWheelX && rr.inputIndex <= vr.MouseWheelZ ? yr.b.POINTERWHEEL : yr.b.POINTERMOVE)) return;
          if (!Wr.cameraToUseForPointers && !Wr.activeCamera) return;
          if (Wr.skipPointerMovePicking) return void this._processPointerMove(new Nr.b, rr);
          this._ensurePointerMovePredicate();
          const Sr = Wr._registeredActions > 0 || Wr.constantlyUpdateMeshUnderPointer ? this._pickMove(rr) : null;
          this._processPointerMove(Sr, rr)
        }, this._onPointerDown = rr => {
          const Sr = this._activePointerIds.indexOf(-1);
          if (-1 === Sr ? this._activePointerIds.push(rr.pointerId) : this._activePointerIds[Sr] = rr.pointerId, this._activePointerIdsCount++, this._pickedDownMesh = null, this._meshPickProceed = !1, wr.ExclusiveDoubleClickMode)
            for (let Zr = 0; Zr < this._delayedClicks.length; Zr++)
              if (this._delayedClicks[Zr])
                if (rr.button === Zr) clearTimeout(this._delayedClicks[Zr]?.timeoutId);
                else {
                  const rr = this._delayedClicks[Zr].clickInfo;
                  this._doubleClickOccured = !1, rr.singleClick = !0, rr.ignore = !1;
                  const Sr = this._delayedClicks[Zr].evt,
                    Qr = yr.b.POINTERTAP,
                    ar = new yr.f(Qr, Sr, this._currentPickResult);
                  Wr.onPointerObservable.hasObservers() && Wr.onPointerObservable.hasSpecificMask(Qr) && Wr.onPointerObservable.notifyObservers(ar, Qr), this._delayedClicks[Zr] = null
                } if (this._updatePointerPosition(rr), -1 === this._swipeButtonPressed && (this._swipeButtonPressed = rr.button), Wr.preventDefaultOnPointerDown && Zr && (rr.preventDefault(), Zr.focus()), this._startingPointerPosition.x = this._pointerX, this._startingPointerPosition.y = this._pointerY, this._startingPointerTime = Date.now(), this._checkPrePointerObservable(null, rr, yr.b.POINTERDOWN)) return;
          if (!Wr.cameraToUseForPointers && !Wr.activeCamera) return;
          let Qr;
          this._pointerCaptures[rr.pointerId] = !0, Wr.pointerDownPredicate || (Wr.pointerDownPredicate = rr => rr.ut && rr.isVisible && rr.isReady() && rr.isEnabled() && (!Wr.cameraToUseForPointers || 0 !== (Wr.cameraToUseForPointers.layerMask & rr.layerMask))), this._pickedDownMesh = null, Qr = Wr.skipPointerDownPicking || 0 === Wr._registeredActions && !this._checkForPicking() && !Wr.onPointerDown ? new Nr.b : Wr.eN(this._unTranslatedPointerX, this._unTranslatedPointerY, Wr.pointerDownPredicate, Wr.pointerDownFastCheck, Wr.cameraToUseForPointers, Wr.pointerDownTrianglePredicate), this._processPointerDown(Qr, rr)
        }, this._onPointerUp = rr => {
          const Sr = this._activePointerIds.indexOf(rr.pointerId); - 1 !== Sr && (this._activePointerIds[Sr] = -1, this._activePointerIdsCount--, "touch" === rr.pointerType && this._latestPointerMoveEvents.delete(rr.pointerId), this._pickedUpMesh = null, this._meshPickProceed = !1, this._updatePointerPosition(rr), Wr.preventDefaultOnPointerUp && Zr && (rr.preventDefault(), Zr.focus()), this._initClickEvent(Wr.onPrePointerObservable, Wr.onPointerObservable, rr, ((Sr, Qr) => {
            if (Wr.onPrePointerObservable.hasObservers() && (this._skipPointerTap = !1, !Sr.ignore)) {
              if (this._checkPrePointerObservable(null, rr, yr.b.POINTERUP)) return this._swipeButtonPressed === rr.button && (this._isSwiping = !1, this._swipeButtonPressed = -1), void(0 === rr.buttons && (this._pointerCaptures[rr.pointerId] = !1));
              Sr.hasSwiped || (Sr.singleClick && Wr.onPrePointerObservable.hasSpecificMask(yr.b.POINTERTAP) && this._checkPrePointerObservable(null, rr, yr.b.POINTERTAP) && (this._skipPointerTap = !0), Sr.JI && Wr.onPrePointerObservable.hasSpecificMask(yr.b.POINTERDOUBLETAP) && this._checkPrePointerObservable(null, rr, yr.b.POINTERDOUBLETAP) && (this._skipPointerTap = !0))
            }
            this._pointerCaptures[rr.pointerId] ? (0 === rr.buttons && (this._pointerCaptures[rr.pointerId] = !1), (Wr.cameraToUseForPointers || Wr.activeCamera) && (Wr.pointerUpPredicate || (Wr.pointerUpPredicate = rr => rr.ut && rr.isVisible && rr.isReady() && rr.isEnabled() && (!Wr.cameraToUseForPointers || 0 !== (Wr.cameraToUseForPointers.layerMask & rr.layerMask))), !this._meshPickProceed && (Br && Br.HasTriggers || this._checkForPicking() || Wr.onPointerUp) && this._initActionManager(null, Sr), Qr || (Qr = this._currentPickResult), this._processPointerUp(Qr, rr, Sr), this._previousPickResult = this._currentPickResult, this._swipeButtonPressed === rr.button && (this._isSwiping = !1, this._swipeButtonPressed = -1))) : this._swipeButtonPressed === rr.button && (this._isSwiping = !1, this._swipeButtonPressed = -1)
          })))
        }, this._onKeyDown = rr => {
          const Sr = Hr.e.KEYDOWN;
          if (Wr.onPreKeyboardObservable.hasObservers()) {
            const Qr = new Hr.f(Sr, rr);
            if (Wr.onPreKeyboardObservable.notifyObservers(Qr, Sr), Qr.skipOnKeyboardObservable) return
          }
          if (Wr.onKeyboardObservable.hasObservers()) {
            const Qr = new Hr.j(Sr, rr);
            Wr.onKeyboardObservable.notifyObservers(Qr, Sr)
          }
          Wr.actionManager && Wr.actionManager.processTrigger(14, Ur.CreateNewFromScene(Wr, rr))
        }, this._onKeyUp = rr => {
          const Sr = Hr.e.KEYUP;
          if (Wr.onPreKeyboardObservable.hasObservers()) {
            const Qr = new Hr.f(Sr, rr);
            if (Wr.onPreKeyboardObservable.notifyObservers(Qr, Sr), Qr.skipOnKeyboardObservable) return
          }
          if (Wr.onKeyboardObservable.hasObservers()) {
            const Qr = new Hr.j(Sr, rr);
            Wr.onKeyboardObservable.notifyObservers(Qr, Sr)
          }
          Wr.actionManager && Wr.actionManager.processTrigger(15, Ur.CreateNewFromScene(Wr, rr))
        }, this._deviceSourceManager.onDeviceConnectedObservable.add((Zr => {
          Zr.deviceType === Tr.Mouse ? Zr.onInputChangedObservable.add((Wr => {
            this._originMouseEvent = Wr, Wr.inputIndex === vr.LeftClick || Wr.inputIndex === vr.MiddleClick || Wr.inputIndex === vr.RightClick || Wr.inputIndex === vr.BrowserBack || Wr.inputIndex === vr.BrowserForward ? Sr && 1 === Zr.getInput(Wr.inputIndex) ? this._onPointerDown(Wr) : rr && 0 === Zr.getInput(Wr.inputIndex) && this._onPointerUp(Wr) : Qr && (Wr.inputIndex === vr.Move ? this._onPointerMove(Wr) : Wr.inputIndex !== vr.MouseWheelX && Wr.inputIndex !== vr.MouseWheelY && Wr.inputIndex !== vr.MouseWheelZ || this._onPointerMove(Wr))
          })) : Zr.deviceType === Tr.Touch ? Zr.onInputChangedObservable.add((Wr => {
            Wr.inputIndex === vr.LeftClick && (Sr && 1 === Zr.getInput(Wr.inputIndex) ? (this._onPointerDown(Wr), this._activePointerIdsCount > 1 && (this._isMultiTouchGesture = !0)) : rr && 0 === Zr.getInput(Wr.inputIndex) && (this._onPointerUp(Wr), 0 === this._activePointerIdsCount && (this._isMultiTouchGesture = !1))), Qr && Wr.inputIndex === vr.Move && this._onPointerMove(Wr)
          })) : Zr.deviceType === Tr.Keyboard && Zr.onInputChangedObservable.add((rr => {
            "keydown" === rr.type ? this._onKeyDown(rr) : "keyup" === rr.type && this._onKeyUp(rr)
          }))
        })), this._alreadyAttached = !0
      }
      detachControl() {
        this._alreadyAttached && (this._deviceSourceManager.dispose(), this._deviceSourceManager = null, this._alreadyAttachedTo && !this._scene.doNotHandleCursors && (this._alreadyAttachedTo.style.cursor = this._scene.defaultCursor), this._alreadyAttached = !1, this._alreadyAttachedTo = null, this._latestPointerMoveEvents.clear())
      }
      setPointerOverMesh(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          Qr = arguments.length > 2 ? arguments[2] : void 0,
          Zr = arguments.length > 3 ? arguments[3] : void 0;
        if (this._meshUnderPointerId[Sr] === rr && (!rr || !rr._internalAbstractMeshDataInfo._pointerOverDisableMeshTesting)) return;
        const Wr = this._meshUnderPointerId[Sr];
        let ar;
        Wr && (ar = Wr._getActionManagerForTrigger(10), ar && ar.processTrigger(10, new Ur(Wr, this._pointerX, this._pointerY, rr, Zr, {
          pointerId: Sr
        }))), rr ? (this._meshUnderPointerId[Sr] = rr, this._pointerOverMesh = rr, ar = rr._getActionManagerForTrigger(9), ar && ar.processTrigger(9, new Ur(rr, this._pointerX, this._pointerY, rr, Zr, {
          pointerId: Sr,
          pickResult: Qr
        }))) : (delete this._meshUnderPointerId[Sr], this._pointerOverMesh = null), this._scene.onMeshUnderPointerUpdatedObservable.hasObservers() && this._scene.onMeshUnderPointerUpdatedObservable.notifyObservers({
          mesh: rr,
          pointerId: Sr
        })
      }
      getPointerOverMesh() {
        return this.meshUnderPointer
      }
      _invalidateMesh(rr) {
        this._pointerOverMesh === rr && (this._pointerOverMesh = null), this._pickedDownMesh === rr && (this._pickedDownMesh = null), this._pickedUpMesh === rr && (this._pickedUpMesh = null);
        for (const Sr in this._meshUnderPointerId) this._meshUnderPointerId[Sr] === rr && delete this._meshUnderPointerId[Sr]
      }
    }
    wr.DragMovementThreshold = 10, wr.LongPressDelay = 500, wr.DoubleClickDelay = 300, wr.ExclusiveDoubleClickMode = !1;
    var cr = Qr(41834),
      Fr = Qr(38684),
      or = Qr(39262);
    class br {
      static get UniqueId() {
        const rr = this._UniqueIdCounter;
        return this._UniqueIdCounter++, rr
      }
    }
    br._UniqueIdCounter = 1;
    var Jr = Qr(41898),
      Dr = Qr(42044),
      dr = Qr(38576);
    class sr {
      constructor() {
        this.pointerDownFastCheck = !1, this.pointerUpFastCheck = !1, this.pointerMoveFastCheck = !1, this.skipPointerMovePicking = !1, this.skipPointerDownPicking = !1, this.skipPointerUpPicking = !1
      }
    }
    var ur, rS, SS, QS, ZS, WS, aS, jS, IS, fS, ES, pS, xS, mS, NS, US, tS, hS, zS, YS, nS, eS, KS, yS, BS, TS, vS, OS, LS, lS, XS, PS, HS, qS, RS, gS, CS, MS, GS, kS, AS, VS, iS, wS, cS, FS, oS, bS, JS, DS, dS, sS, uS, rQ = Qr(40246),
      SQ = Qr(38609);
    const QQ = new pr.x,
      ZQ = new pr.x;
    var WQ;
    ! function(rr) {
      rr[rr.BackwardCompatible = 0] = "BackwardCompatible", rr[rr.Intermediate = 1] = "Intermediate", rr[rr.Aggressive = 2] = "Aggressive"
    }(WQ || (WQ = {}));
    class aQ {
      static DefaultMaterialFactory(rr) {
        throw (0, Kr.l)("StandardMaterial")
      }
      static CollisionCoordinatorFactory() {
        throw (0, Kr.l)("DefaultCollisionCoordinator")
      }
      get clearColor() {
        return this._clearColor
      }
      set clearColor(rr) {
        rr !== this._clearColor && (this._clearColor = rr, this.onClearColorChangedObservable.notifyObservers(this._clearColor))
      }
      get imageProcessingConfiguration() {
        return this._imageProcessingConfiguration
      }
      get performancePriority() {
        return this._performancePriority
      }
      set performancePriority(rr) {
        if (rr !== this._performancePriority) {
          switch (this._performancePriority = rr, rr) {
            case 0:
              this.skipFrustumClipping = !1, this._renderingManager.maintainStateBetweenFrames = !1, this.skipPointerMovePicking = !1, this.autoClear = !0;
              break;
            case 1:
              this.skipFrustumClipping = !1, this._renderingManager.maintainStateBetweenFrames = !1, this.skipPointerMovePicking = !0, this.autoClear = !1;
              break;
            case 2:
              this.skipFrustumClipping = !0, this._renderingManager.maintainStateBetweenFrames = !0, this.skipPointerMovePicking = !0, this.autoClear = !1
          }
          this.onScenePerformancePriorityChangedObservable.notifyObservers(rr)
        }
      }
      set forceWireframe(rr) {
        this._forceWireframe !== rr && (this._forceWireframe = rr, this.markAllMaterialsAsDirty(16))
      }
      get forceWireframe() {
        return this._forceWireframe
      }
      set skipFrustumClipping(rr) {
        this._skipFrustumClipping !== rr && (this._skipFrustumClipping = rr)
      }
      get skipFrustumClipping() {
        return this._skipFrustumClipping
      }
      set forcePointsCloud(rr) {
        this._forcePointsCloud !== rr && (this._forcePointsCloud = rr, this.markAllMaterialsAsDirty(16))
      }
      get forcePointsCloud() {
        return this._forcePointsCloud
      }
      get environmentTexture() {
        return this._environmentTexture
      }
      set environmentTexture(rr) {
        this._environmentTexture !== rr && (this._environmentTexture = rr, this.onEnvironmentTextureChangedObservable.notifyObservers(rr), this.markAllMaterialsAsDirty(1))
      }
      getNodes() {
        let rr = [];
        rr = rr.concat(this.meshes), rr = rr.concat(this.lights), rr = rr.concat(this.cameras), rr = rr.concat(this.transformNodes);
        for (const Sr of this.skeletons) rr = rr.concat(Sr.bones);
        return rr
      }
      get animationPropertiesOverride() {
        return this._animationPropertiesOverride
      }
      set animationPropertiesOverride(rr) {
        this._animationPropertiesOverride = rr
      }
      set onDispose(rr) {
        this._onDisposeObserver && this.lC.remove(this._onDisposeObserver), this._onDisposeObserver = this.lC.add(rr)
      }
      set beforeRender(rr) {
        this._onBeforeRenderObserver && this.onBeforeRenderObservable.remove(this._onBeforeRenderObserver), rr && (this._onBeforeRenderObserver = this.onBeforeRenderObservable.add(rr))
      }
      set afterRender(rr) {
        this._onAfterRenderObserver && this.onAfterRenderObservable.remove(this._onAfterRenderObserver), rr && (this._onAfterRenderObserver = this.onAfterRenderObservable.add(rr))
      }
      set beforeCameraRender(rr) {
        this._onBeforeCameraRenderObserver && this.onBeforeCameraRenderObservable.remove(this._onBeforeCameraRenderObserver), this._onBeforeCameraRenderObserver = this.onBeforeCameraRenderObservable.add(rr)
      }
      set afterCameraRender(rr) {
        this._onAfterCameraRenderObserver && this.onAfterCameraRenderObservable.remove(this._onAfterCameraRenderObserver), this._onAfterCameraRenderObserver = this.onAfterCameraRenderObservable.add(rr)
      }
      get pointerDownPredicate() {
        return this._pointerPickingConfiguration.pointerDownPredicate
      }
      set pointerDownPredicate(rr) {
        this._pointerPickingConfiguration.pointerDownPredicate = rr
      }
      get pointerUpPredicate() {
        return this._pointerPickingConfiguration.pointerUpPredicate
      }
      set pointerUpPredicate(rr) {
        this._pointerPickingConfiguration.pointerUpPredicate = rr
      }
      get pointerMovePredicate() {
        return this._pointerPickingConfiguration.pointerMovePredicate
      }
      set pointerMovePredicate(rr) {
        this._pointerPickingConfiguration.pointerMovePredicate = rr
      }
      get pointerDownFastCheck() {
        return this._pointerPickingConfiguration.pointerDownFastCheck
      }
      set pointerDownFastCheck(rr) {
        this._pointerPickingConfiguration.pointerDownFastCheck = rr
      }
      get pointerUpFastCheck() {
        return this._pointerPickingConfiguration.pointerUpFastCheck
      }
      set pointerUpFastCheck(rr) {
        this._pointerPickingConfiguration.pointerUpFastCheck = rr
      }
      get pointerMoveFastCheck() {
        return this._pointerPickingConfiguration.pointerMoveFastCheck
      }
      set pointerMoveFastCheck(rr) {
        this._pointerPickingConfiguration.pointerMoveFastCheck = rr
      }
      get skipPointerMovePicking() {
        return this._pointerPickingConfiguration.skipPointerMovePicking
      }
      set skipPointerMovePicking(rr) {
        this._pointerPickingConfiguration.skipPointerMovePicking = rr
      }
      get skipPointerDownPicking() {
        return this._pointerPickingConfiguration.skipPointerDownPicking
      }
      set skipPointerDownPicking(rr) {
        this._pointerPickingConfiguration.skipPointerDownPicking = rr
      }
      get skipPointerUpPicking() {
        return this._pointerPickingConfiguration.skipPointerUpPicking
      }
      set skipPointerUpPicking(rr) {
        this._pointerPickingConfiguration.skipPointerUpPicking = rr
      }
      get unTranslatedPointer() {
        return this._inputManager.unTranslatedPointer
      }
      static get DragMovementThreshold() {
        return wr.DragMovementThreshold
      }
      static set DragMovementThreshold(rr) {
        wr.DragMovementThreshold = rr
      }
      static get LongPressDelay() {
        return wr.LongPressDelay
      }
      static set LongPressDelay(rr) {
        wr.LongPressDelay = rr
      }
      static get DoubleClickDelay() {
        return wr.DoubleClickDelay
      }
      static set DoubleClickDelay(rr) {
        wr.DoubleClickDelay = rr
      }
      static get ExclusiveDoubleClickMode() {
        return wr.ExclusiveDoubleClickMode
      }
      static set ExclusiveDoubleClickMode(rr) {
        wr.ExclusiveDoubleClickMode = rr
      }
      get _eyePosition() {
        return this._forcedViewPosition ?? this.activeCamera?.globalPosition ?? pr.u.ZeroReadOnly
      }
      bindEyePosition(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "vEyePosition",
          Qr = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const Zr = this._eyePosition,
          Wr = this.useRightHandedSystem === (null != this._mirroredCameraPosition),
          ar = this.floatingOriginOffset,
          jr = QQ.set(Zr.x, Zr.y, Zr.z, Wr ? -1 : 1),
          Ir = jr.subtractFromFloatsToRef(ar.x, ar.y, ar.z, 0, ZQ);
        return rr && (Qr ? rr.setFloat3(Sr, Ir.x, Ir.y, Ir.z) : rr.setVector4(Sr, Ir)), jr
      }
      finalizeSceneUbo() {
        const rr = this.getSceneUniformBuffer(),
          Sr = this.bindEyePosition(null),
          Qr = this.floatingOriginOffset;
        return rr.updateFloat4("vEyePosition", Sr.x - Qr.x, Sr.y - Qr.y, Sr.z - Qr.z, Sr.w), rr.update(), rr
      }
      set useRightHandedSystem(rr) {
        this._useRightHandedSystem !== rr && (this._useRightHandedSystem = rr, this.markAllMaterialsAsDirty(16))
      }
      get useRightHandedSystem() {
        return this._useRightHandedSystem
      }
      setStepId(rr) {
        this._currentStepId = rr
      }
      getStepId() {
        return this._currentStepId
      }
      getInternalStep() {
        return this._currentInternalStep
      }
      set fogEnabled(rr) {
        this._fogEnabled !== rr && (this._fogEnabled = rr, this.markAllMaterialsAsDirty(16))
      }
      get fogEnabled() {
        return this._fogEnabled
      }
      set fogMode(rr) {
        this._fogMode !== rr && (this._fogMode = rr, this.markAllMaterialsAsDirty(16))
      }
      get fogMode() {
        return this._fogMode
      }
      get prePass() {
        return !!this.prePassRenderer && this.prePassRenderer.defaultRT.enabled
      }
      set shadowsEnabled(rr) {
        this._shadowsEnabled !== rr && (this._shadowsEnabled = rr, this.markAllMaterialsAsDirty(2))
      }
      get shadowsEnabled() {
        return this._shadowsEnabled
      }
      set lightsEnabled(rr) {
        this._lightsEnabled !== rr && (this._lightsEnabled = rr, this.markAllMaterialsAsDirty(2))
      }
      get lightsEnabled() {
        return this._lightsEnabled
      }
      get activeCameras() {
        return this._activeCameras
      }
      set activeCameras(rr) {
        this._unObserveActiveCameras && (this._unObserveActiveCameras(), this._unObserveActiveCameras = null), rr && (this._unObserveActiveCameras = (0, dr.h)(rr, (() => {
          this.onActiveCamerasChanged.notifyObservers(this)
        }))), this._activeCameras = rr
      }
      get activeCamera() {
        return this._activeCamera
      }
      set activeCamera(rr) {
        rr !== this._activeCamera && (this._activeCamera = rr, this.onActiveCameraChanged.notifyObservers(this))
      }
      get _hasDefaultMaterial() {
        return aQ.DefaultMaterialFactory !== aQ._OriginalDefaultMaterialFactory
      }
      get defaultMaterial() {
        return this._defaultMaterial || (this._defaultMaterial = aQ.DefaultMaterialFactory(this)), this._defaultMaterial
      }
      set defaultMaterial(rr) {
        this._defaultMaterial = rr
      }
      set texturesEnabled(rr) {
        this._texturesEnabled !== rr && (this._texturesEnabled = rr, this.markAllMaterialsAsDirty(1))
      }
      get texturesEnabled() {
        return this._texturesEnabled
      }
      get frameGraph() {
        return this._frameGraph
      }
      set frameGraph(rr) {
        if (this._frameGraph) return this._frameGraph = rr, void(rr || (this.customRenderFunction = this._currentCustomRenderFunction));
        this._frameGraph = rr, rr && (this._currentCustomRenderFunction = this.customRenderFunction, this.customRenderFunction = this._renderWithFrameGraph, this.activeCamera = null)
      }
      set skeletonsEnabled(rr) {
        this._skeletonsEnabled !== rr && (this._skeletonsEnabled = rr, this.markAllMaterialsAsDirty(8))
      }
      get skeletonsEnabled() {
        return this._skeletonsEnabled
      }
      get collisionCoordinator() {
        return this._collisionCoordinator || (this._collisionCoordinator = aQ.CollisionCoordinatorFactory(), this._collisionCoordinator.init(this)), this._collisionCoordinator
      }
      get renderingManager() {
        return this._renderingManager
      }
      get frustumPlanes() {
        return this._frustumPlanes
      }
      _registerTransientComponents() {
        if (this._transientComponents.length > 0) {
          for (const rr of this._transientComponents) rr.register();
          this._transientComponents.length = 0
        }
      }
      CZr(rr) {
        this._components.push(rr), this._transientComponents.push(rr);
        const Sr = rr;
        Sr.addFromContainer && Sr.serialize && this._serializableComponents.push(Sr)
      }
      _getComponent(rr) {
        for (const Sr of this._components)
          if (Sr.name === rr) return Sr;
        return null
      }
      get uniqueId() {
        return this._uniqueId
      }
      constructor(rr, Sr) {
        this._inputManager = new wr(this), this.cameraToUseForPointers = null, this._isScene = !0, this._blockEntityCollection = !1, this.autoClear = !0, this.autoClearDepthAndStencil = !0, this._clearColor = new Fr.f(.2, .2, .3, 1), this.onClearColorChangedObservable = new jr.d, this.ambientColor = new Fr.e(0, 0, 0), this.environmentIntensity = 1, this.iblIntensity = 1, this._performancePriority = 0, this.onScenePerformancePriorityChangedObservable = new jr.d, this._forceWireframe = !1, this._skipFrustumClipping = !1, this._forcePointsCloud = !1, this.rootNodes = [], this.cameras = [], this.lights = [], this.meshes = [], this.skeletons = [], this.pT = [], this.animations = [], this.animationGroups = [], this.multiMaterials = [], this.materials = [], this.morphTargetManagers = [], this.geometries = [], this.transformNodes = [], this.actionManagers = [], this.objectRenderers = [], this.textures = [], this._environmentTexture = null, this.postProcesses = [], this.effectLayers = [], this.sounds = null, this.layers = [], this.lensFlareSystems = [], this.proceduralTextures = [], this.animationsEnabled = !0, this._animationPropertiesOverride = null, this.useConstantAnimationDeltaTime = !1, this.constantlyUpdateMeshUnderPointer = !1, this.hoverCursor = "pointer", this.defaultCursor = "", this.doNotHandleCursors = !1, this.preventDefaultOnPointerDown = !0, this.preventDefaultOnPointerUp = !0, this.metadata = null, this.reservedDataStore = null, this.disableOfflineSupportExceptionRules = [], this.lC = new jr.d, this._onDisposeObserver = null, this.onBeforeRenderObservable = new jr.d, this._onBeforeRenderObserver = null, this.onAfterRenderObservable = new jr.d, this.onAfterRenderCameraObservable = new jr.d, this._onAfterRenderObserver = null, this.onBeforeAnimationsObservable = new jr.d, this.onAfterAnimationsObservable = new jr.d, this.onBeforeDrawPhaseObservable = new jr.d, this.onAfterDrawPhaseObservable = new jr.d, this.onReadyObservable = new jr.d, this.onBeforeCameraRenderObservable = new jr.d, this._onBeforeCameraRenderObserver = null, this.onAfterCameraRenderObservable = new jr.d, this._onAfterCameraRenderObserver = null, this.onBeforeActiveMeshesEvaluationObservable = new jr.d, this.onAfterActiveMeshesEvaluationObservable = new jr.d, this.onBeforeParticlesRenderingObservable = new jr.d, this.onAfterParticlesRenderingObservable = new jr.d, this.onDataLoadedObservable = new jr.d, this.onNewCameraAddedObservable = new jr.d, this.onCameraRemovedObservable = new jr.d, this.onNewLightAddedObservable = new jr.d, this.onLightRemovedObservable = new jr.d, this.onNewGeometryAddedObservable = new jr.d, this.onGeometryRemovedObservable = new jr.d, this.onNewTransformNodeAddedObservable = new jr.d, this.onTransformNodeRemovedObservable = new jr.d, this.onNewMeshAddedObservable = new jr.d, this.onMeshRemovedObservable = new jr.d, this.onNewSkeletonAddedObservable = new jr.d, this.onSkeletonRemovedObservable = new jr.d, this.onNewParticleSystemAddedObservable = new jr.d, this.onParticleSystemRemovedObservable = new jr.d, this.onNewAnimationGroupAddedObservable = new jr.d, this.onAnimationGroupRemovedObservable = new jr.d, this.onNewMaterialAddedObservable = new jr.d, this.onNewMultiMaterialAddedObservable = new jr.d, this.onMaterialRemovedObservable = new jr.d, this.onMultiMaterialRemovedObservable = new jr.d, this.onNewTextureAddedObservable = new jr.d, this.onTextureRemovedObservable = new jr.d, this.onNewFrameGraphAddedObservable = new jr.d, this.onFrameGraphRemovedObservable = new jr.d, this.onNewObjectRendererAddedObservable = new jr.d, this.onObjectRendererRemovedObservable = new jr.d, this.onNewPostProcessAddedObservable = new jr.d, this.onPostProcessRemovedObservable = new jr.d, this.onNewEffectLayerAddedObservable = new jr.d, this.onEffectLayerRemovedObservable = new jr.d, this.onBeforeRenderTargetsRenderObservable = new jr.d, this.onAfterRenderTargetsRenderObservable = new jr.d, this.onBeforeStepObservable = new jr.d, this.onAfterStepObservable = new jr.d, this.onActiveCameraChanged = new jr.d, this.onActiveCamerasChanged = new jr.d, this.onBeforeRenderingGroupObservable = new jr.d, this.onAfterRenderingGroupObservable = new jr.d, this.onMeshImportedObservable = new jr.d, this.onAnimationFileImportedObservable = new jr.d, this.onEnvironmentTextureChangedObservable = new jr.d, this.onMeshUnderPointerUpdatedObservable = new jr.d, this._registeredForLateAnimationBindings = new Ir.e(256), this._pointerPickingConfiguration = new sr, this.onPrePointerObservable = new jr.d, this.onPointerObservable = new jr.d, this.onPreKeyboardObservable = new jr.d, this.onKeyboardObservable = new jr.d, this._useRightHandedSystem = !1, this._timeAccumulator = 0, this._currentStepId = 0, this._currentInternalStep = 0, this._fogEnabled = !0, this._fogMode = aQ.FOGMODE_NONE, this.fogColor = new Fr.e(.2, .2, .3), this.fogDensity = .1, this.fogStart = 0, this.fogEnd = 1e3, this.needsPreviousWorldMatrices = !1, this._shadowsEnabled = !0, this._lightsEnabled = !0, this._unObserveActiveCameras = null, this._texturesEnabled = !0, this._frameGraph = null, this.frameGraphs = [], this.tV = !0, this.particlesEnabled = !0, this.spritesEnabled = !0, this._skeletonsEnabled = !0, this.lensFlaresEnabled = !0, this.collisionsEnabled = !0, this.gravity = new pr.u(0, -9.807, 0), this.postProcessesEnabled = !0, this.renderTargetsEnabled = !0, this.dumpNextRenderTargets = !1, this.customRenderTargets = [], this.importedMeshesFiles = [], this.probesEnabled = !0, this._meshesForIntersections = new Ir.e(256), this.proceduralTexturesEnabled = !0, this._totalVertices = new cr.b, this._activeIndices = new cr.b, this._activeParticles = new cr.b, this._activeBones = new cr.b, this._animationTime = 0, this.animationTimeScale = 1, this._renderId = 0, this._frameId = 0, this._renderingMeshEvaluationDepth = 0, this._executeWhenReadyTimeoutId = null, this._intermediateRendering = !1, this._defaultFrameBufferCleared = !1, this._viewUpdateFlag = -1, this._projectionUpdateFlag = -1, this._toBeDisposed = new Array(256), this._activeRequests = new Array, this._delayedFileRequests = null, this._pendingData = [], this._isDisposed = !1, this._isDisposing = !1, this._isReadyChecks = [], this.dispatchAllSubMeshesOfActiveMeshes = !1, this._activeMeshes = new Ir.h(256), this._processedMaterials = new Ir.h(256), this._renderTargets = new Ir.e(256), this._materialsRenderTargets = new Ir.e(256), this._activeParticleSystems = new Ir.h(256), this._activeSkeletons = new Ir.e(32), this._softwareSkinnedMeshes = new Ir.e(32), this._activeAnimatables = new Array, this._animationWrites = new Array, this._animationWriteCount = 0, this._animationStepWriteCount = 0, this._animationStepEvaluated = !1, this._transformMatrix = pr.d.Zero(), this.requireLightSorting = !1, this._components = [], this._serializableComponents = [], this._transientComponents = [], this._beforeCameraUpdateStage = Yr.f.Create(), this._beforeClearStage = Yr.f.Create(), this._beforeRenderTargetClearStage = Yr.f.Create(), this._gatherRenderTargetsStage = Yr.f.Create(), this._gatherActiveCameraRenderTargetsStage = Yr.f.Create(), this._isReadyForMeshStage = Yr.f.Create(), this._beforeEvaluateActiveMeshStage = Yr.f.Create(), this._evaluateSubMeshStage = Yr.f.Create(), this._preActiveMeshStage = Yr.f.Create(), this._cameraDrawRenderTargetStage = Yr.f.Create(), this._beforeCameraDrawStage = Yr.f.Create(), this._beforeRenderTargetDrawStage = Yr.f.Create(), this._beforeRenderingGroupDrawStage = Yr.f.Create(), this._beforeRenderingMeshStage = Yr.f.Create(), this._afterRenderingMeshStage = Yr.f.Create(), this._afterRenderingGroupDrawStage = Yr.f.Create(), this._afterCameraDrawStage = Yr.f.Create(), this._afterCameraPostProcessStage = Yr.f.Create(), this._afterRenderTargetDrawStage = Yr.f.Create(), this._afterRenderTargetPostProcessStage = Yr.f.Create(), this._afterRenderStage = Yr.f.Create(), this._pointerMoveStage = Yr.f.Create(), this._pointerDownStage = Yr.f.Create(), this._pointerUpStage = Yr.f.Create(), this._geometriesByUniqueId = null, this._uniqueId = 0, this._defaultMeshCandidates = {
          data: [],
          length: 0
        }, this._defaultSubMeshCandidates = {
          data: [],
          length: 0
        }, this.onReadyTimeoutObservable = new jr.d, this.onReadyTimeoutDuration = 12e4, this._timeoutChecksStartTime = 0, this._floatingOriginScene = void 0, this._preventFreeActiveMeshesAndRenderingGroups = !1, this._activeMeshesFrozen = !1, this._activeMeshesFrozenButKeepClipping = !1, this._skipEvaluateActiveMeshesCompletely = !1, this._freezeActiveMeshesCancel = null, this._useCurrentFrameBuffer = !1, this._allowPostProcessClearColor = !0, this.getDeterministicFrameTime = () => this._engine.getTimeStep(), this._getFloatingOriginScene = () => this._floatingOriginScene, this._registeredActions = 0, this._blockMaterialDirtyMechanism = !1, this._perfCollector = null, this.activeCameras = [], this._uniqueId = this.getUniqueId();
        const Qr = {
          useGeometryUniqueIdsMap: !0,
          useMaterialMeshMap: !0,
          useClonedMeshMap: !0,
          virtual: !1,
          defaultCameraLayerMask: 268435455,
          defaultRenderableLayerMask: 268435455,
          ...Sr
        };
        this.defaultCameraLayerMask = Qr.defaultCameraLayerMask, this.defaultRenderableLayerMask = Qr.defaultRenderableLayerMask, rr = this._engine = rr || er.b.LastCreatedEngine, Qr.virtual ? rr._virtualScenes.push(this) : (er.b._LastCreatedScene = this, rr.scenes.push(this)), (rr.getCreationOptions().useLargeWorldRendering || Sr?.useFloatingOrigin) && ((0, hr.e)(), this._floatingOriginScene = this, hr.d.eC = this._getFloatingOriginScene), this._uid = null, this._renderingManager = new zr.b(this), tr.c && (this.postProcessManager = new tr.c(this)), (0, nr.m)() && this.attachControl(), this._createUbo(), xr.b && (this._imageProcessingConfiguration = new xr.b), this.setDefaultCandidateProviders(), Qr.useGeometryUniqueIdsMap && (this._geometriesByUniqueId = {}), this.useMaterialMeshMap = Qr.useMaterialMeshMap, this.useClonedMeshMap = Qr.useClonedMeshMap, Sr && Sr.virtual || rr.onNewSceneAddedObservable.notifyObservers(this)
      }
      getClassName() {
        return "Scene"
      }
      _getDefaultMeshCandidates() {
        return this._defaultMeshCandidates.data = this.meshes, this._defaultMeshCandidates.length = this.meshes.length, this._defaultMeshCandidates
      }
      _getDefaultSubMeshCandidates(rr) {
        return this._defaultSubMeshCandidates.data = rr.jT, this._defaultSubMeshCandidates.length = rr.jT.length, this._defaultSubMeshCandidates
      }
      setDefaultCandidateProviders() {
        this.getActiveMeshCandidates = () => this._getDefaultMeshCandidates(), this.getActiveSubMeshCandidates = rr => this._getDefaultSubMeshCandidates(rr), this.getIntersectingSubMeshCandidates = (rr, Sr) => this._getDefaultSubMeshCandidates(rr), this.getCollidingSubMeshCandidates = (rr, Sr) => this._getDefaultSubMeshCandidates(rr)
      }
      get meshUnderPointer() {
        return this._inputManager.meshUnderPointer
      }
      get pointerX() {
        return this._inputManager.pointerX
      }
      set pointerX(rr) {
        this._inputManager.pointerX = rr
      }
      get pointerY() {
        return this._inputManager.pointerY
      }
      set pointerY(rr) {
        this._inputManager.pointerY = rr
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
      isCachedMaterialInvalid(rr, Sr) {
        let Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        return this._cachedEffect !== Sr || this._cachedMaterial !== rr || this._cachedVisibility !== Qr
      }
      MU() {
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
      simulatePointerMove(rr, Sr) {
        return this._inputManager.simulatePointerMove(rr, Sr), this
      }
      simulatePointerDown(rr, Sr) {
        return this._inputManager.simulatePointerDown(rr, Sr), this
      }
      simulatePointerUp(rr, Sr, Qr) {
        return this._inputManager.simulatePointerUp(rr, Sr, Qr), this
      }
      isPointerCaptured() {
        let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return this._inputManager.isPointerCaptured(rr)
      }
      attachControl() {
        let rr = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          Sr = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          Qr = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this._inputManager.attachControl(rr, Sr, Qr)
      }
      detachControl() {
        this._inputManager.detachControl()
      }
      isReady() {
        let rr, Sr = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        if (this._isDisposed) return !1;
        const Qr = this.MU(),
          Zr = Qr.currentRenderPassId;
        Qr.currentRenderPassId = this.activeCamera?.renderPassId ?? Zr;
        let Wr = !0;
        for (this._pendingData.length > 0 && (Wr = !1), this.prePassRenderer?.update(), this.useOrderIndependentTransparency && this.depthPeelingRenderer && Wr && (Wr = this.depthPeelingRenderer.isReady()), Sr && (this._processedMaterials.reset(), this._materialsRenderTargets.reset()), rr = 0; rr < this.meshes.length; rr++) {
          const Zr = this.meshes[rr];
          if (!Zr.jT || 0 === Zr.jT.length) continue;
          if (!Zr.isReady(!0)) {
            Wr = !1;
            continue
          }
          const ar = Zr.hasThinInstances || "InstancedMesh" === Zr.getClassName() || "InstancedLinesMesh" === Zr.getClassName() || Qr.getCaps().instancedArrays && Zr.instances.length > 0;
          for (let rr = 0, Sr = this._isReadyForMeshStage; rr < Sr.length; rr++) {
            Sr[rr].action(Zr, ar) || (Wr = !1)
          }
          if (!Sr) continue;
          const jr = Zr.material || this.defaultMaterial;
          if (jr)
            if (jr._storeEffectOnSubMeshes)
              for (const rr of Zr.jT) {
                const Sr = rr.iU();
                Sr && Sr.hasRenderTargetTextures && null != Sr.getRenderTargetTextures && -1 === this._processedMaterials.indexOf(Sr) && (this._processedMaterials.push(Sr), this._materialsRenderTargets.concatWithNoDuplicate(Sr.getRenderTargetTextures()))
              } else jr.hasRenderTargetTextures && null != jr.getRenderTargetTextures && -1 === this._processedMaterials.indexOf(jr) && (this._processedMaterials.push(jr), this._materialsRenderTargets.concatWithNoDuplicate(jr.getRenderTargetTextures()))
        }
        if (Sr) {
          for (rr = 0; rr < this._materialsRenderTargets.length; ++rr) {
            this._materialsRenderTargets.data[rr].isReadyForRendering() || (Wr = !1)
          }
          for (rr = 0; rr < this.customRenderTargets.length; ++rr) {
            this.customRenderTargets[rr].isReadyForRendering() || (Wr = !1)
          }
        }
        for (rr = 0; rr < this.geometries.length; rr++) {
          2 === this.geometries[rr].delayLoadState && (Wr = !1)
        }
        if (this.activeCameras && this.activeCameras.length > 0)
          for (const ar of this.activeCameras) ar.isReady(!0) || (Wr = !1);
        else this.activeCamera && (this.activeCamera.isReady(!0) || (Wr = !1));
        for (const ar of this.pT) ar.isReady() || (Wr = !1);
        if (this.proceduralTexturesEnabled)
          for (const ar of this.proceduralTextures) ar.isReady() || (Wr = !1);
        if (this.layers)
          for (const ar of this.layers) ar.isReady() || (Wr = !1);
        if (this.effectLayers)
          for (const ar of this.effectLayers) ar.isLayerReady() || (Wr = !1);
        for (const ar of this._isReadyChecks) ar.isReady() || (Wr = !1);
        return Qr.areAllEffectsReady() || (Wr = !1), Qr.currentRenderPassId = Zr, Wr
      }
      resetCachedMaterial() {
        this._cachedMaterial = null, this._cachedEffect = null, this._cachedVisibility = null
      }
      registerBeforeRender(rr) {
        this.onBeforeRenderObservable.add(rr)
      }
      unregisterBeforeRender(rr) {
        this.onBeforeRenderObservable.removeCallback(rr)
      }
      registerAfterRender(rr) {
        this.onAfterRenderObservable.add(rr)
      }
      unregisterAfterRender(rr) {
        this.onAfterRenderObservable.removeCallback(rr)
      }
      _executeOnceBeforeRender(rr) {
        const Sr = () => {
          rr(), setTimeout((() => {
            this.unregisterBeforeRender(Sr)
          }))
        };
        this.registerBeforeRender(Sr)
      }
      executeOnceBeforeRender(rr, Sr) {
        void 0 !== Sr ? setTimeout((() => {
          this._executeOnceBeforeRender(rr)
        }), Sr) : this._executeOnceBeforeRender(rr)
      }
      addPendingData(rr) {
        this._pendingData.push(rr)
      }
      removePendingData(rr) {
        const Sr = this.isLoading,
          Qr = this._pendingData.indexOf(rr); - 1 !== Qr && this._pendingData.splice(Qr, 1), Sr && !this.isLoading && this.onDataLoadedObservable.notifyObservers(this)
      }
      getWaitingItemsCount() {
        return this._pendingData.length
      }
      get isLoading() {
        return this._pendingData.length > 0
      }
      addIsReadyCheck(rr) {
        -1 === this._isReadyChecks.indexOf(rr) && this._isReadyChecks.push(rr)
      }
      removeIsReadyCheck(rr) {
        const Sr = this._isReadyChecks.indexOf(rr); - 1 !== Sr && this._isReadyChecks.splice(Sr, 1)
      }
      executeWhenReady(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this.onReadyObservable.addOnce(rr), null === this._executeWhenReadyTimeoutId && this._checkIsReady(Sr)
      }
      async whenReadyAsync() {
        let rr = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return await new Promise((Sr => {
          this.executeWhenReady((() => {
            Sr()
          }), rr)
        }))
      }
      _clearReadynessChecksData() {
        this._timeoutChecksStartTime = 0, this.onReadyTimeoutObservable.clear(), this.onReadyObservable.clear(), this._executeWhenReadyTimeoutId = null
      }
      _checkIsReady() {
        let rr = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this._registerTransientComponents(), 0 === this._timeoutChecksStartTime) this._timeoutChecksStartTime = ar.c.Now;
        else if (this.onReadyTimeoutDuration > 0 && ar.c.Now - this._timeoutChecksStartTime > this.onReadyTimeoutDuration) return this.onReadyTimeoutObservable.notifyObservers(this), void this._clearReadynessChecksData();
        if (this.isReady(rr)) return this.onReadyObservable.notifyObservers(this), void this._clearReadynessChecksData();
        this._isDisposed ? this._clearReadynessChecksData() : this._executeWhenReadyTimeoutId = setTimeout((() => {
          this.incrementRenderId(), this._checkIsReady(rr)
        }), 100)
      }
      get animatables() {
        return this._activeAnimatables
      }
      resetLastAnimationTimeFrame() {
        this._animationTimeLast = ar.c.Now
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
      setTransformMatrix(rr, Sr, Qr, Zr) {
        this._multiviewSceneUboIsActive = !!(Qr && Zr && this._multiviewSceneUbo), this._viewUpdateFlag === rr.updateFlag && this._projectionUpdateFlag === Sr.updateFlag || (this._viewUpdateFlag = rr.updateFlag, this._projectionUpdateFlag = Sr.updateFlag, this._viewMatrix = rr, this._projectionMatrix = Sr, this._inverseProjectionMatrix || (this._inverseProjectionMatrix = new pr.d), this._projectionMatrix.invertToRef(this._inverseProjectionMatrix), this._viewMatrix.multiplyToRef(this._projectionMatrix, this._transformMatrix), this._frustumPlanes ? or.b.GetPlanesToRef(this._transformMatrix, this._frustumPlanes) : this._frustumPlanes = or.b.GetPlanes(this._transformMatrix), this._multiviewSceneUboIsActive && this._multiviewSceneUbo.useUbo ? this._updateMultiviewUbo(Qr, Zr) : this._sceneUbo.useUbo && (this._sceneUbo.hrr("viewProjection", this._transformMatrix), this._sceneUbo.hrr("view", this._viewMatrix), this._sceneUbo.hrr("projection", this._projectionMatrix), this._sceneUbo.hrr("inverseProjection", this._inverseProjectionMatrix)))
      }
      getSceneUniformBuffer() {
        return this._multiviewSceneUboIsActive && this._multiviewSceneUbo ? this._multiviewSceneUbo : this._sceneUbo
      }
      createSceneUniformBuffer(rr, Sr) {
        const Qr = "boolean" === typeof Sr ? Sr : Sr?.trackUBOsInFrame,
          Zr = new mr.d(this._engine, void 0, !1, rr ?? "Dt", void 0, Qr);
        return Zr.addUniform("viewProjection", 16), Zr.addUniform("view", 16), Zr.addUniform("projection", 16), Zr.addUniform("vEyePosition", 4), Zr.addUniform("inverseProjection", 16), Zr
      }
      setSceneUniformBuffer(rr) {
        this._sceneUbo = rr, this._viewUpdateFlag = -1, this._projectionUpdateFlag = -1
      }
      get floatingOriginMode() {
        return void 0 !== this._floatingOriginScene
      }
      get floatingOriginOffset() {
        return this.floatingOriginMode ? this._eyePosition : pr.u.ZeroReadOnly
      }
      getUniqueId() {
        return br.UniqueId
      }
      XWr(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (!this._blockEntityCollection && (this.meshes.push(rr), rr._resyncLightSources(), rr.parent || rr._addToSceneRootNodes(), Wr.d.SetImmediate((() => {
            this.onNewMeshAddedObservable.notifyObservers(rr)
          })), Sr)) {
          const Sr = rr.getChildMeshes();
          for (const rr of Sr) this.XWr(rr)
        }
      }
      rM(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const Qr = this.meshes.indexOf(rr);
        if (-1 !== Qr && (this.meshes.splice(Qr, 1), rr.parent || rr._removeFromSceneRootNodes()), this._inputManager._invalidateMesh(rr), this.onMeshRemovedObservable.notifyObservers(rr), Sr) {
          const Sr = rr.getChildMeshes();
          for (const rr of Sr) this.rM(rr)
        }
        return Qr
      }
      addTransformNode(rr) {
        this._blockEntityCollection || rr.eC() === this && -1 !== rr._indexInSceneTransformNodesArray || (rr._indexInSceneTransformNodesArray = this.transformNodes.length, this.transformNodes.push(rr), rr.parent || rr._addToSceneRootNodes(), this.onNewTransformNodeAddedObservable.notifyObservers(rr))
      }
      removeTransformNode(rr) {
        const Sr = rr._indexInSceneTransformNodesArray;
        if (-1 !== Sr) {
          if (Sr !== this.transformNodes.length - 1) {
            const rr = this.transformNodes[this.transformNodes.length - 1];
            this.transformNodes[Sr] = rr, rr._indexInSceneTransformNodesArray = Sr
          }
          rr._indexInSceneTransformNodesArray = -1, this.transformNodes.pop(), rr.parent || rr._removeFromSceneRootNodes()
        }
        return this.onTransformNodeRemovedObservable.notifyObservers(rr), Sr
      }
      removeSkeleton(rr) {
        const Sr = this.skeletons.indexOf(rr);
        return -1 !== Sr && (this.skeletons.splice(Sr, 1), this.onSkeletonRemovedObservable.notifyObservers(rr), this._executeActiveContainerCleanup(this._activeSkeletons)), Sr
      }
      removeMorphTargetManager(rr) {
        const Sr = this.morphTargetManagers.indexOf(rr);
        return -1 !== Sr && this.morphTargetManagers.splice(Sr, 1), Sr
      }
      removeLight(rr) {
        const Sr = this.lights.indexOf(rr);
        if (-1 !== Sr) {
          for (const Sr of this.meshes) Sr._removeLightSource(rr, !1);
          this.lights.splice(Sr, 1), this.sortLightsByPriority(), rr.parent || rr._removeFromSceneRootNodes(), this.onLightRemovedObservable.notifyObservers(rr)
        }
        return Sr
      }
      removeCamera(rr) {
        const Sr = this.cameras.indexOf(rr);
        if (-1 !== Sr && (this.cameras.splice(Sr, 1), rr.parent || rr._removeFromSceneRootNodes()), this.activeCameras) {
          const Sr = this.activeCameras.indexOf(rr); - 1 !== Sr && this.activeCameras.splice(Sr, 1)
        }
        return this.activeCamera === rr && (this.cameras.length > 0 ? this.activeCamera = this.cameras[0] : this.activeCamera = null), this.onCameraRemovedObservable.notifyObservers(rr), Sr
      }
      removeParticleSystem(rr) {
        const Sr = this.pT.indexOf(rr);
        return -1 !== Sr && (this.pT.splice(Sr, 1), this._executeActiveContainerCleanup(this._activeParticleSystems)), this.onParticleSystemRemovedObservable.notifyObservers(rr), Sr
      }
      removeAnimation(rr) {
        const Sr = this.animations.indexOf(rr);
        return -1 !== Sr && this.animations.splice(Sr, 1), Sr
      }
      stopAnimation(rr, Sr, Qr) {}
      removeAnimationGroup(rr) {
        const Sr = this.animationGroups.indexOf(rr);
        return -1 !== Sr && this.animationGroups.splice(Sr, 1), this.onAnimationGroupRemovedObservable.notifyObservers(rr), Sr
      }
      removeMultiMaterial(rr) {
        const Sr = this.multiMaterials.indexOf(rr);
        return -1 !== Sr && this.multiMaterials.splice(Sr, 1), this.onMultiMaterialRemovedObservable.notifyObservers(rr), Sr
      }
      removeMaterial(rr) {
        const Sr = rr._indexInSceneMaterialArray;
        if (-1 !== Sr && Sr < this.materials.length) {
          if (Sr !== this.materials.length - 1) {
            const rr = this.materials[this.materials.length - 1];
            this.materials[Sr] = rr, rr._indexInSceneMaterialArray = Sr
          }
          rr._indexInSceneMaterialArray = -1, this.materials.pop()
        }
        return this.onMaterialRemovedObservable.notifyObservers(rr), Sr
      }
      removeActionManager(rr) {
        const Sr = this.actionManagers.indexOf(rr);
        return -1 !== Sr && this.actionManagers.splice(Sr, 1), Sr
      }
      removeTexture(rr) {
        const Sr = this.textures.indexOf(rr);
        return -1 !== Sr && this.textures.splice(Sr, 1), this.onTextureRemovedObservable.notifyObservers(rr), Sr
      }
      removeFrameGraph(rr) {
        const Sr = this.frameGraphs.indexOf(rr);
        return -1 !== Sr && this.frameGraphs.splice(Sr, 1), this.onFrameGraphRemovedObservable.notifyObservers(rr), Sr
      }
      removeObjectRenderer(rr) {
        const Sr = this.objectRenderers.indexOf(rr);
        return -1 !== Sr && this.objectRenderers.splice(Sr, 1), this.onObjectRendererRemovedObservable.notifyObservers(rr), Sr
      }
      removePostProcess(rr) {
        const Sr = this.postProcesses.indexOf(rr);
        return -1 !== Sr && this.postProcesses.splice(Sr, 1), this.onPostProcessRemovedObservable.notifyObservers(rr), Sr
      }
      removeEffectLayer(rr) {
        const Sr = this.effectLayers.indexOf(rr);
        return -1 !== Sr && this.effectLayers.splice(Sr, 1), this.onEffectLayerRemovedObservable.notifyObservers(rr), Sr
      }
      addLight(rr) {
        if (!this._blockEntityCollection) {
          this.lights.push(rr), this.sortLightsByPriority(), rr.parent || rr._addToSceneRootNodes();
          for (const Sr of this.meshes) - 1 === Sr.lightSources.indexOf(rr) && (Sr.lightSources.push(rr), Sr._resyncLightSources());
          Wr.d.SetImmediate((() => {
            this.onNewLightAddedObservable.notifyObservers(rr)
          }))
        }
      }
      sortLightsByPriority() {
        this.requireLightSorting && this.lights.sort(Dr.b.CompareLightsPriority)
      }
      addCamera(rr) {
        this._blockEntityCollection || (this.cameras.push(rr), Wr.d.SetImmediate((() => {
          this.onNewCameraAddedObservable.notifyObservers(rr)
        })), rr.parent || rr._addToSceneRootNodes())
      }
      addSkeleton(rr) {
        this._blockEntityCollection || (this.skeletons.push(rr), Wr.d.SetImmediate((() => {
          this.onNewSkeletonAddedObservable.notifyObservers(rr)
        })))
      }
      addParticleSystem(rr) {
        this._blockEntityCollection || (this.pT.push(rr), Wr.d.SetImmediate((() => {
          this.onNewParticleSystemAddedObservable.notifyObservers(rr)
        })))
      }
      addAnimation(rr) {
        this._blockEntityCollection || this.animations.push(rr)
      }
      addAnimationGroup(rr) {
        this._blockEntityCollection || (this.animationGroups.push(rr), Wr.d.SetImmediate((() => {
          this.onNewAnimationGroupAddedObservable.notifyObservers(rr)
        })))
      }
      addMultiMaterial(rr) {
        this._blockEntityCollection || (this.multiMaterials.push(rr), Wr.d.SetImmediate((() => {
          this.onNewMultiMaterialAddedObservable.notifyObservers(rr)
        })))
      }
      addMaterial(rr) {
        this._blockEntityCollection || rr.eC() === this && -1 !== rr._indexInSceneMaterialArray || (rr._indexInSceneMaterialArray = this.materials.length, this.materials.push(rr), Wr.d.SetImmediate((() => {
          this.onNewMaterialAddedObservable.notifyObservers(rr)
        })))
      }
      addMorphTargetManager(rr) {
        this._blockEntityCollection || this.morphTargetManagers.push(rr)
      }
      addGeometry(rr) {
        this._blockEntityCollection || (this._geometriesByUniqueId && (this._geometriesByUniqueId[rr.uniqueId] = this.geometries.length), this.geometries.push(rr))
      }
      addActionManager(rr) {
        this.actionManagers.push(rr)
      }
      addTexture(rr) {
        this._blockEntityCollection || (this.textures.push(rr), this.onNewTextureAddedObservable.notifyObservers(rr))
      }
      addFrameGraph(rr) {
        this.frameGraphs.push(rr), Wr.d.SetImmediate((() => {
          this.onNewFrameGraphAddedObservable.notifyObservers(rr)
        }))
      }
      addObjectRenderer(rr) {
        this.objectRenderers.push(rr), Wr.d.SetImmediate((() => {
          this.onNewObjectRendererAddedObservable.notifyObservers(rr)
        }))
      }
      addPostProcess(rr) {
        this._blockEntityCollection || (this.postProcesses.push(rr), Wr.d.SetImmediate((() => {
          this.onNewPostProcessAddedObservable.notifyObservers(rr)
        })))
      }
      addEffectLayer(rr) {
        this._blockEntityCollection || (this.effectLayers.push(rr), Wr.d.SetImmediate((() => {
          this.onNewEffectLayerAddedObservable.notifyObservers(rr)
        })))
      }
      switchActiveCamera(rr) {
        let Sr = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this._engine.getInputElement() && (this.activeCamera && this.activeCamera.detachControl(), this.activeCamera = rr, Sr && rr.attachControl())
      }
      setActiveCameraById(rr) {
        const Sr = this.getCameraById(rr);
        return Sr ? (this.activeCamera = Sr, Sr) : null
      }
      setActiveCameraByName(rr) {
        const Sr = this.getCameraByName(rr);
        return Sr ? (this.activeCamera = Sr, Sr) : null
      }
      getAnimationGroupByName(rr) {
        for (let Sr = 0; Sr < this.animationGroups.length; Sr++)
          if (this.animationGroups[Sr].name === rr) return this.animationGroups[Sr];
        return null
      }
      _getMaterial(rr, Sr) {
        for (let Qr = 0; Qr < this.materials.length; Qr++) {
          const rr = this.materials[Qr];
          if (Sr(rr)) return rr
        }
        if (rr)
          for (let Qr = 0; Qr < this.multiMaterials.length; Qr++) {
            const rr = this.multiMaterials[Qr];
            if (Sr(rr)) return rr
          }
        return null
      }
      getMaterialByUniqueID(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this.getMaterialByUniqueId(rr, Sr)
      }
      getMaterialByUniqueId(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this._getMaterial(Sr, (Sr => Sr.uniqueId === rr))
      }
      getMaterialById(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this._getMaterial(Sr, (Sr => Sr.id === rr))
      }
      getMaterialByName(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this._getMaterial(Sr, (Sr => Sr.name === rr))
      }
      getLastMaterialById(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        for (let Qr = this.materials.length - 1; Qr >= 0; Qr--)
          if (this.materials[Qr].id === rr) return this.materials[Qr];
        if (Sr)
          for (let Qr = this.multiMaterials.length - 1; Qr >= 0; Qr--)
            if (this.multiMaterials[Qr].id === rr) return this.multiMaterials[Qr];
        return null
      }
      getTextureByUniqueId(rr) {
        for (let Sr = 0; Sr < this.textures.length; Sr++)
          if (this.textures[Sr].uniqueId === rr) return this.textures[Sr];
        return null
      }
      getTextureByName(rr) {
        for (let Sr = 0; Sr < this.textures.length; Sr++)
          if (this.textures[Sr].name === rr) return this.textures[Sr];
        return null
      }
      getCameraById(rr) {
        for (let Sr = 0; Sr < this.cameras.length; Sr++)
          if (this.cameras[Sr].id === rr) return this.cameras[Sr];
        return null
      }
      getCameraByUniqueId(rr) {
        for (let Sr = 0; Sr < this.cameras.length; Sr++)
          if (this.cameras[Sr].uniqueId === rr) return this.cameras[Sr];
        return null
      }
      getCameraByName(rr) {
        for (let Sr = 0; Sr < this.cameras.length; Sr++)
          if (this.cameras[Sr].name === rr) return this.cameras[Sr];
        return null
      }
      getBoneById(rr) {
        for (let Sr = 0; Sr < this.skeletons.length; Sr++) {
          const Qr = this.skeletons[Sr];
          for (let Sr = 0; Sr < Qr.bones.length; Sr++)
            if (Qr.bones[Sr].id === rr) return Qr.bones[Sr]
        }
        return null
      }
      getBoneByName(rr) {
        for (let Sr = 0; Sr < this.skeletons.length; Sr++) {
          const Qr = this.skeletons[Sr];
          for (let Sr = 0; Sr < Qr.bones.length; Sr++)
            if (Qr.bones[Sr].name === rr) return Qr.bones[Sr]
        }
        return null
      }
      getLightByName(rr) {
        for (let Sr = 0; Sr < this.lights.length; Sr++)
          if (this.lights[Sr].name === rr) return this.lights[Sr];
        return null
      }
      getLightById(rr) {
        for (let Sr = 0; Sr < this.lights.length; Sr++)
          if (this.lights[Sr].id === rr) return this.lights[Sr];
        return null
      }
      getLightByUniqueId(rr) {
        for (let Sr = 0; Sr < this.lights.length; Sr++)
          if (this.lights[Sr].uniqueId === rr) return this.lights[Sr];
        return null
      }
      getParticleSystemById(rr) {
        for (let Sr = 0; Sr < this.pT.length; Sr++)
          if (this.pT[Sr].id === rr) return this.pT[Sr];
        return null
      }
      getGeometryById(rr) {
        for (let Sr = 0; Sr < this.geometries.length; Sr++)
          if (this.geometries[Sr].id === rr) return this.geometries[Sr];
        return null
      }
      _getGeometryByUniqueId(rr) {
        if (this._geometriesByUniqueId) {
          const Sr = this._geometriesByUniqueId[rr];
          if (void 0 !== Sr) return this.geometries[Sr]
        } else
          for (let Sr = 0; Sr < this.geometries.length; Sr++)
            if (this.geometries[Sr].uniqueId === rr) return this.geometries[Sr];
        return null
      }
      getFrameGraphByName(rr) {
        for (let Sr = 0; Sr < this.frameGraphs.length; Sr++)
          if (this.frameGraphs[Sr].name === rr) return this.frameGraphs[Sr];
        return null
      }
      pushGeometry(rr, Sr) {
        return !(!Sr && this._getGeometryByUniqueId(rr.uniqueId)) && (this.addGeometry(rr), Wr.d.SetImmediate((() => {
          this.onNewGeometryAddedObservable.notifyObservers(rr)
        })), !0)
      }
      removeGeometry(rr) {
        let Sr;
        if (this._geometriesByUniqueId) {
          if (Sr = this._geometriesByUniqueId[rr.uniqueId], void 0 === Sr) return !1
        } else if (Sr = this.geometries.indexOf(rr), Sr < 0) return !1;
        if (Sr !== this.geometries.length - 1) {
          const rr = this.geometries[this.geometries.length - 1];
          rr && (this.geometries[Sr] = rr, this._geometriesByUniqueId && (this._geometriesByUniqueId[rr.uniqueId] = Sr))
        }
        return this._geometriesByUniqueId && (this._geometriesByUniqueId[rr.uniqueId] = void 0), this.geometries.pop(), this.onGeometryRemovedObservable.notifyObservers(rr), !0
      }
      getGeometries() {
        return this.geometries
      }
      getMeshById(rr) {
        for (let Sr = 0; Sr < this.meshes.length; Sr++)
          if (this.meshes[Sr].id === rr) return this.meshes[Sr];
        return null
      }
      getMeshesById(rr) {
        return this.meshes.filter((function(Sr) {
          return Sr.id === rr
        }))
      }
      getTransformNodeById(rr) {
        for (let Sr = 0; Sr < this.transformNodes.length; Sr++)
          if (this.transformNodes[Sr].id === rr) return this.transformNodes[Sr];
        return null
      }
      getTransformNodeByUniqueId(rr) {
        for (let Sr = 0; Sr < this.transformNodes.length; Sr++)
          if (this.transformNodes[Sr].uniqueId === rr) return this.transformNodes[Sr];
        return null
      }
      getTransformNodesById(rr) {
        return this.transformNodes.filter((function(Sr) {
          return Sr.id === rr
        }))
      }
      getMeshByUniqueId(rr) {
        for (let Sr = 0; Sr < this.meshes.length; Sr++)
          if (this.meshes[Sr].uniqueId === rr) return this.meshes[Sr];
        return null
      }
      getLastMeshById(rr) {
        for (let Sr = this.meshes.length - 1; Sr >= 0; Sr--)
          if (this.meshes[Sr].id === rr) return this.meshes[Sr];
        return null
      }
      getLastTransformNodeById(rr) {
        for (let Sr = this.transformNodes.length - 1; Sr >= 0; Sr--)
          if (this.transformNodes[Sr].id === rr) return this.transformNodes[Sr];
        return null
      }
      getLastEntryById(rr) {
        let Sr;
        for (Sr = this.meshes.length - 1; Sr >= 0; Sr--)
          if (this.meshes[Sr].id === rr) return this.meshes[Sr];
        for (Sr = this.transformNodes.length - 1; Sr >= 0; Sr--)
          if (this.transformNodes[Sr].id === rr) return this.transformNodes[Sr];
        for (Sr = this.cameras.length - 1; Sr >= 0; Sr--)
          if (this.cameras[Sr].id === rr) return this.cameras[Sr];
        for (Sr = this.lights.length - 1; Sr >= 0; Sr--)
          if (this.lights[Sr].id === rr) return this.lights[Sr];
        for (Sr = this.skeletons.length - 1; Sr >= 0; Sr--) {
          const Qr = this.skeletons[Sr];
          for (let Sr = Qr.bones.length - 1; Sr >= 0; Sr--)
            if (Qr.bones[Sr].id === rr) return Qr.bones[Sr]
        }
        return null
      }
      getNodeById(rr) {
        const Sr = this.getMeshById(rr);
        if (Sr) return Sr;
        const Qr = this.getTransformNodeById(rr);
        if (Qr) return Qr;
        const Zr = this.getLightById(rr);
        if (Zr) return Zr;
        const Wr = this.getCameraById(rr);
        if (Wr) return Wr;
        const ar = this.getBoneById(rr);
        return ar || null
      }
      getNodeByName(rr) {
        const Sr = this.getMeshByName(rr);
        if (Sr) return Sr;
        const Qr = this.getTransformNodeByName(rr);
        if (Qr) return Qr;
        const Zr = this.getLightByName(rr);
        if (Zr) return Zr;
        const Wr = this.getCameraByName(rr);
        if (Wr) return Wr;
        const ar = this.getBoneByName(rr);
        return ar || null
      }
      getMeshByName(rr) {
        for (let Sr = 0; Sr < this.meshes.length; Sr++)
          if (this.meshes[Sr].name === rr) return this.meshes[Sr];
        return null
      }
      getTransformNodeByName(rr) {
        for (let Sr = 0; Sr < this.transformNodes.length; Sr++)
          if (this.transformNodes[Sr].name === rr) return this.transformNodes[Sr];
        return null
      }
      getLastSkeletonById(rr) {
        for (let Sr = this.skeletons.length - 1; Sr >= 0; Sr--)
          if (this.skeletons[Sr].id === rr) return this.skeletons[Sr];
        return null
      }
      getSkeletonByUniqueId(rr) {
        for (let Sr = 0; Sr < this.skeletons.length; Sr++)
          if (this.skeletons[Sr].uniqueId === rr) return this.skeletons[Sr];
        return null
      }
      getSkeletonById(rr) {
        for (let Sr = 0; Sr < this.skeletons.length; Sr++)
          if (this.skeletons[Sr].id === rr) return this.skeletons[Sr];
        return null
      }
      getSkeletonByName(rr) {
        for (let Sr = 0; Sr < this.skeletons.length; Sr++)
          if (this.skeletons[Sr].name === rr) return this.skeletons[Sr];
        return null
      }
      getMorphTargetManagerById(rr) {
        for (let Sr = 0; Sr < this.morphTargetManagers.length; Sr++)
          if (this.morphTargetManagers[Sr].uniqueId === rr) return this.morphTargetManagers[Sr];
        return null
      }
      getMorphTargetById(rr) {
        for (let Sr = 0; Sr < this.morphTargetManagers.length; ++Sr) {
          const Qr = this.morphTargetManagers[Sr];
          for (let Sr = 0; Sr < Qr.numTargets; ++Sr) {
            const Zr = Qr.getTarget(Sr);
            if (Zr.id === rr) return Zr
          }
        }
        return null
      }
      getMorphTargetByName(rr) {
        for (let Sr = 0; Sr < this.morphTargetManagers.length; ++Sr) {
          const Qr = this.morphTargetManagers[Sr];
          for (let Sr = 0; Sr < Qr.numTargets; ++Sr) {
            const Zr = Qr.getTarget(Sr);
            if (Zr.name === rr) return Zr
          }
        }
        return null
      }
      getPostProcessByName(rr) {
        for (let Sr = 0; Sr < this.postProcesses.length; ++Sr) {
          const Qr = this.postProcesses[Sr];
          if (Qr.name === rr) return Qr
        }
        return null
      }
      isActiveMesh(rr) {
        return -1 !== this._activeMeshes.indexOf(rr)
      }
      get uid() {
        return this._uid || (this._uid = Zr.h.RandomId()), this._uid
      }
      addExternalData(rr, Sr) {
        return this._externalData || (this._externalData = new fr), this._externalData.add(rr, Sr)
      }
      getExternalData(rr) {
        return this._externalData ? this._externalData.get(rr) : null
      }
      getOrAddExternalDataWithFactory(rr, Sr) {
        return this._externalData || (this._externalData = new fr), this._externalData.getOrAddWithFactory(rr, Sr)
      }
      removeExternalData(rr) {
        return this._externalData.remove(rr)
      }
      _evaluateSubMesh(rr, Sr, Qr, Zr) {
        if (Zr || rr.isInFrustum(this._frustumPlanes)) {
          for (let Zr = 0, Wr = this._evaluateSubMeshStage; Zr < Wr.length; Zr++) {
            Wr[Zr].action(Sr, rr)
          }
          const Qr = rr.iU();
          null !== Qr && void 0 !== Qr && (Qr.hasRenderTargetTextures && null != Qr.getRenderTargetTextures && -1 === this._processedMaterials.indexOf(Qr) && (this._processedMaterials.push(Qr), this._materialsRenderTargets.concatWithNoDuplicate(Qr.getRenderTargetTextures())), this._renderingManager.dispatch(rr, Sr, Qr))
        }
      }
      freeProcessedMaterials() {
        this._processedMaterials.dispose()
      }
      get blockfreeActiveMeshesAndRenderingGroups() {
        return this._preventFreeActiveMeshesAndRenderingGroups
      }
      set blockfreeActiveMeshesAndRenderingGroups(rr) {
        this._preventFreeActiveMeshesAndRenderingGroups !== rr && (rr && (this.freeActiveMeshes(), this.freeRenderingGroups()), this._preventFreeActiveMeshesAndRenderingGroups = rr)
      }
      freeActiveMeshes() {
        if (!this.blockfreeActiveMeshesAndRenderingGroups && (this._activeMeshes.dispose(), this.activeCamera && this.activeCamera._activeMeshes && this.activeCamera._activeMeshes.dispose(), this.activeCameras))
          for (let rr = 0; rr < this.activeCameras.length; rr++) {
            const Sr = this.activeCameras[rr];
            Sr && Sr._activeMeshes && Sr._activeMeshes.dispose()
          }
      }
      freeRenderingGroups() {
        if (!this.blockfreeActiveMeshesAndRenderingGroups && (this._renderingManager && this._renderingManager.freeRenderingGroups(), this.textures))
          for (let rr = 0; rr < this.textures.length; rr++) {
            const Sr = this.textures[rr];
            Sr && Sr.renderList && Sr.freeRenderingGroups()
          }
      }
      _isInIntermediateRendering() {
        return this._intermediateRendering
      }
      _isInRenderingMeshEvaluation() {
        return this._renderingMeshEvaluationDepth > 0
      }
      freezeActiveMeshes() {
        let rr = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          Sr = arguments.length > 1 ? arguments[1] : void 0,
          Qr = arguments.length > 2 ? arguments[2] : void 0,
          Zr = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
          ar = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (this.frameGraph) {
          this._renderWithFrameGraph(!0, !1, !0);
          const jr = this.frameGraph.getTasksByClassName(["FrameGraphObjectRendererTask", "FrameGraphGeometryRendererTask"]);
          for (const rr of jr) rr.objectRenderer._freezeActiveMeshes(Zr);
          return this._freezeActiveMeshesCancel = (0, Wr.f)((() => {
            let rr = !0,
              Sr = !0;
            for (const Qr of jr) rr && (rr = Qr.objectRenderer._isFrozen), Sr && (Sr = null !== Qr.objectRenderer._freezeActiveMeshesCancel);
            if (rr) return !0;
            if (!Sr) throw new Error("Freezing active meshes was cancelled");
            return !1
          }), (() => {
            this._freezeActiveMeshesCancel = null, this._activeMeshesFrozen = !0, this._activeMeshesFrozenButKeepClipping = ar, this._skipEvaluateActiveMeshesCompletely = rr, Sr?.()
          }), ((rr, Sr) => {
            if (this._freezeActiveMeshesCancel = null, this.unfreezeActiveMeshes(), Sr) {
              const Sr = "Scene: Timeout while waiting for meshes to be frozen.";
              Qr ? Qr(Sr) : (rQ.c.Error(Sr), rr && rQ.c.Error(rr))
            } else {
              const Sr = "Scene: An unexpected error occurred while trying to freeze active meshes.";
              Qr ? Qr(Sr) : (rQ.c.Error(Sr), rr && (rQ.c.Error(rr), rr.stack && rQ.c.Error(rr.stack)))
            }
          })), this
        }
        return this.executeWhenReady((() => {
          if (this.activeCamera) {
            if (this._frustumPlanes || this.updateTransformMatrix(), this._evaluateActiveMeshes(), this._activeMeshesFrozen = !0, this._activeMeshesFrozenButKeepClipping = ar, this._skipEvaluateActiveMeshesCompletely = rr, Zr)
              for (let rr = 0; rr < this._activeMeshes.length; rr++) this._activeMeshes.data[rr]._freeze();
            Sr && Sr()
          } else Qr && Qr("No active camera found")
        })), this
      }
      unfreezeActiveMeshes() {
        for (let rr = 0; rr < this.meshes.length; rr++) {
          const Sr = this.meshes[rr];
          Sr._internalAbstractMeshDataInfo && (Sr._internalAbstractMeshDataInfo._isActive = !1)
        }
        if (this._freezeActiveMeshesCancel?.(), this._freezeActiveMeshesCancel = null, this.frameGraph) {
          const rr = this.frameGraph.getTasksByClassName(["FrameGraphObjectRendererTask", "FrameGraphGeometryRendererTask"]);
          for (const Sr of rr) Sr.objectRenderer._unfreezeActiveMeshes()
        } else
          for (let rr = 0; rr < this._activeMeshes.length; rr++) this._activeMeshes.data[rr]._unFreeze();
        return this._activeMeshesFrozen = !1, this
      }
      _executeActiveContainerCleanup(rr) {
        (!this._engine.snapshotRendering || 1 !== this._engine.snapshotRenderingMode) && this._activeMeshesFrozen && this._activeMeshes.length || this.onBeforeRenderObservable.addOnce((() => rr.dispose()))
      }
      _evaluateActiveMeshes() {
        if (this._engine.snapshotRendering && 1 === this._engine.snapshotRenderingMode) return void(this._activeMeshes.length > 0 && (this.activeCamera?._activeMeshes.reset(), this._activeMeshes.reset(), this._renderingManager.reset(), this._processedMaterials.reset(), this._activeParticleSystems.reset(), this._activeSkeletons.reset(), this._softwareSkinnedMeshes.reset()));
        if (this._activeMeshesFrozen && this._activeMeshes.length) {
          if (!this._skipEvaluateActiveMeshesCompletely) {
            const rr = this._activeMeshes.length;
            for (let Sr = 0; Sr < rr; Sr++) {
              this._activeMeshes.data[Sr].computeWorldMatrix()
            }
          }
          if (this._activeParticleSystems) {
            const rr = this._activeParticleSystems.length;
            for (let Sr = 0; Sr < rr; Sr++) this._activeParticleSystems.data[Sr].animate()
          }
          return void this._renderingManager.resetSprites()
        }
        if (!this.activeCamera) return;
        this.onBeforeActiveMeshesEvaluationObservable.notifyObservers(this), this.activeCamera._activeMeshes.reset(), this._activeMeshes.reset(), this._renderingManager.reset(), this._processedMaterials.reset(), this._activeParticleSystems.reset(), this._activeSkeletons.reset(), this._softwareSkinnedMeshes.reset(), this._materialsRenderTargets.reset();
        for (let Wr = 0, ar = this._beforeEvaluateActiveMeshStage; Wr < ar.length; Wr++) {
          ar[Wr].action()
        }
        const rr = this.getActiveMeshCandidates(),
          Sr = rr.length,
          Qr = cr.b.Enabled,
          Zr = this.customLODSelector;
        for (let Wr = 0; Wr < Sr; Wr++) {
          const Sr = rr.data[Wr],
            ar = !Zr && !Sr.gC && !Sr._internalMeshDataInfo?._LODLevels.length;
          let jr, Ir;
          if ((ar || (jr = Sr._internalAbstractMeshDataInfo._currentLOD.get(this.activeCamera), jr ? jr[1] = -1 : (jr = [Sr, -1], Sr._internalAbstractMeshDataInfo._currentLOD.set(this.activeCamera, jr))), !Sr.isBlocked) && (Qr && this._totalVertices.addCount(Sr.getTotalVertices(), !1), Sr.isReady() && Sr.isEnabled() && !Sr.Tx.hasAZeroComponent)) {
            if (Sr.computeWorldMatrix(), Sr.actionManager && Sr.actionManager.hasSpecificTriggers2(12, 13) && this._meshesForIntersections.pushNoDuplicate(Sr), ar) Ir = Sr;
            else if (Ir = Zr ? Zr(Sr, this.activeCamera) : Sr.getLOD(this.activeCamera), jr[0] = Ir, jr[1] = this._frameId, void 0 === Ir || null === Ir) continue;
            if (Ir !== Sr && 0 !== Ir.billboardMode && Ir.computeWorldMatrix(), Sr._preActivate(), Sr.isVisible && Sr.visibility > 0 && 0 !== (Sr.layerMask & this.activeCamera.layerMask) && (this._skipFrustumClipping || Sr.GU || Sr.isInFrustum(this._frustumPlanes))) {
              this._activeMeshes.push(Sr), this.activeCamera._activeMeshes.push(Sr), Ir !== Sr && Ir._activate(this._renderId, !1);
              for (let rr = 0, Qr = this._preActiveMeshStage; rr < Qr.length; rr++) {
                Qr[rr].action(Sr)
              }
              Sr._activate(this._renderId, !1) && (Sr.gC ? Sr._internalAbstractMeshDataInfo._actAsRegularMesh && (Ir = Sr) : Ir._internalAbstractMeshDataInfo._onlyForInstances = !1, Ir._internalAbstractMeshDataInfo._isActive = !0, this._activeMesh(Sr, Ir)), Sr._postActivate()
            }
          }
        }
        if (this.onAfterActiveMeshesEvaluationObservable.notifyObservers(this), this.particlesEnabled) {
          this.onBeforeParticlesRenderingObservable.notifyObservers(this);
          for (let rr = 0; rr < this.pT.length; rr++) {
            const Sr = this.pT[rr];
            if (!Sr.isStarted() || !Sr.emitter) continue;
            const Qr = Sr.emitter;
            Qr.position && !Qr.isEnabled() || (this._activeParticleSystems.push(Sr), Sr.animate(), this._renderingManager.dispatchParticles(Sr))
          }
          this.onAfterParticlesRenderingObservable.notifyObservers(this)
        }
      }
      _prepareSkeleton(rr) {
        this._skeletonsEnabled && rr.skeleton && (this._activeSkeletons.pushNoDuplicate(rr.skeleton) && (rr.skeleton.prepare(), this._activeBones.addCount(rr.skeleton.bones.length, !1)), rr.computeBonesUsingShaders || this._softwareSkinnedMeshes.pushNoDuplicate(rr) && this.frameGraph && rr.applySkeleton(rr.skeleton))
      }
      _activeMesh(rr, Sr) {
        this._prepareSkeleton(Sr);
        let Qr = rr.Har || rr.gC || this.dispatchAllSubMeshesOfActiveMeshes || this._skipFrustumClipping || Sr.GU;
        if (Sr && Sr.jT && Sr.jT.length > 0) {
          const Zr = this.getActiveSubMeshCandidates(Sr),
            Wr = Zr.length;
          Qr = Qr || 1 === Wr;
          for (let ar = 0; ar < Wr; ar++) {
            const Wr = Zr.data[ar];
            this._evaluateSubMesh(Wr, Sr, rr, Qr)
          }
        }
      }
      updateTransformMatrix(rr) {
        const Sr = this.activeCamera;
        if (Sr)
          if (Sr._renderingMultiview) {
            const Qr = Sr._rigCameras[0],
              Zr = Sr._rigCameras[1];
            this.setTransformMatrix(Qr.getViewMatrix(), Qr.getProjectionMatrix(rr), Zr.getViewMatrix(), Zr.getProjectionMatrix(rr))
          } else this.setTransformMatrix(Sr.getViewMatrix(), Sr.getProjectionMatrix(rr))
      }
      _bindFrameBuffer(rr) {
        let Sr = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this._useCurrentFrameBuffer || (rr && rr._multiviewTexture ? rr._multiviewTexture._bindFrameBuffer() : rr && rr.outputRenderTarget ? rr.outputRenderTarget._bindFrameBuffer() : this._engine._currentFrameBufferIsDefaultFrameBuffer() || this._engine.restoreDefaultFramebuffer()), Sr && this._clearFrameBuffer(rr)
      }
      _clearFrameBuffer(rr) {
        if (rr && rr._multiviewTexture);
        else if (rr && rr.outputRenderTarget && !rr._renderingMultiview) {
          const Sr = rr.outputRenderTarget;
          Sr.onClearObservable.hasObservers() ? Sr.onClearObservable.notifyObservers(this._engine) : Sr.skipInitialClear || rr.isRightCamera || (this.autoClear && this._engine.clear(Sr.clearColor || this._clearColor, !Sr._cleared, !0, !0), Sr._cleared = !0)
        } else this._defaultFrameBufferCleared ? this._engine.clear(null, !1, !0, !0) : (this._defaultFrameBufferCleared = !0, this._clear())
      }
      _renderForCamera(rr, Sr) {
        let Qr = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        if (rr && rr._skipRendering) return;
        const Wr = this._engine;
        if (this._activeCamera = rr, !this.activeCamera) throw new Error("Active camera not set");
        if (Wr.setViewport(this.activeCamera.viewport), this.resetCachedMaterial(), this._renderId++, !this.prePass && Qr) {
          let Sr = !0;
          rr._renderingMultiview && rr.outputRenderTarget && (Sr = rr.outputRenderTarget.skipInitialClear, this.autoClear && (this._defaultFrameBufferCleared = !1, rr.outputRenderTarget.skipInitialClear = !1)), this._bindFrameBuffer(this._activeCamera), rr._renderingMultiview && rr.outputRenderTarget && (rr.outputRenderTarget.skipInitialClear = Sr)
        }
        this.updateTransformMatrix(), this.onBeforeCameraRenderObservable.notifyObservers(this.activeCamera), this._engine.currentRenderPassId = rr.outputRenderTarget?.renderPassId ?? rr.renderPassId ?? 0, this._evaluateActiveMeshes();
        for (let Zr = 0; Zr < this._softwareSkinnedMeshes.length; Zr++) {
          const rr = this._softwareSkinnedMeshes.data[Zr];
          rr.applySkeleton(rr.skeleton)
        }
        this.onBeforeRenderTargetsRenderObservable.notifyObservers(this), this._renderTargets.concatWithNoDuplicate(this._materialsRenderTargets), rr.customRenderTargets && rr.customRenderTargets.length > 0 && this._renderTargets.concatWithNoDuplicate(rr.customRenderTargets), Sr && Sr.customRenderTargets && Sr.customRenderTargets.length > 0 && this._renderTargets.concatWithNoDuplicate(Sr.customRenderTargets), this.environmentTexture && this.environmentTexture.isRenderTarget && this._renderTargets.pushNoDuplicate(this.environmentTexture);
        for (let Zr = 0, Ir = this._gatherActiveCameraRenderTargetsStage; Zr < Ir.length; Zr++) {
          Ir[Zr].action(this._renderTargets)
        }
        let ar = !1;
        if (this.renderTargetsEnabled) {
          let rr;
          if (this._intermediateRendering = !0, this._renderTargets.length > 0) {
            Zr.h.StartPerformanceCounter("Render targets", this._renderTargets.length > 0);
            const Sr = this.getBoundingBoxRenderer?.();
            for (let Qr = 0; Qr < this._renderTargets.length; Qr++) {
              const Zr = this._renderTargets.data[Qr];
              if (Zr._shouldRender()) {
                this._renderId++;
                const Qr = Zr.activeCamera && Zr.activeCamera !== this.activeCamera;
                Sr && !rr && (rr = Sr.renderList.length > 0 ? Sr.renderList.data.slice() : [], rr.length = Sr.renderList.length), Zr.render(Qr, this.dumpNextRenderTargets), ar = !0
              }
            }
            Sr && rr && (Sr.renderList.data = rr, Sr.renderList.length = rr.length), Zr.h.EndPerformanceCounter("Render targets", this._renderTargets.length > 0), this._renderId++
          }
          if (this._cameraDrawRenderTargetStage.length > 0) {
            const Sr = this.getBoundingBoxRenderer?.();
            Sr && !rr && (rr = Sr.renderList.length > 0 ? Sr.renderList.data.slice() : [], rr.length = Sr.renderList.length);
            for (let rr = 0, Qr = this._cameraDrawRenderTargetStage; rr < Qr.length; rr++) {
              ar = Qr[rr].action(this.activeCamera) || ar
            }
            Sr && rr && (Sr.renderList.data = rr, Sr.renderList.length = rr.length)
          }
          this._intermediateRendering = !1
        }
        ar && !this.prePass && (this._bindFrameBuffer(this._activeCamera, !1), this.updateTransformMatrix()), this.onAfterRenderTargetsRenderObservable.notifyObservers(this), !this.postProcessManager || rr._multiviewTexture || this.prePass || this.postProcessManager._prepareFrame();
        for (let Zr = 0, Ir = this._beforeCameraDrawStage; Zr < Ir.length; Zr++) {
          Ir[Zr].action(this.activeCamera)
        }
        this.onBeforeDrawPhaseObservable.notifyObservers(this);
        const jr = Wr.snapshotRendering && 1 === Wr.snapshotRenderingMode;
        jr && this.finalizeSceneUbo(), this._renderingManager.render(null, null, !0, !jr), this.onAfterDrawPhaseObservable.notifyObservers(this);
        for (let Zr = 0, Ir = this._afterCameraDrawStage; Zr < Ir.length; Zr++) {
          Ir[Zr].action(this.activeCamera)
        }
        if (this.postProcessManager && !rr._multiviewTexture) {
          const Sr = rr.outputRenderTarget ? rr.outputRenderTarget.renderTarget : void 0;
          this.postProcessManager._finalizeFrame(rr.isIntermediate, Sr)
        }
        for (let Zr = 0, Ir = this._afterCameraPostProcessStage; Zr < Ir.length; Zr++) {
          Ir[Zr].action(this.activeCamera)
        }
        this._renderTargets.reset(), this.onAfterCameraRenderObservable.notifyObservers(this.activeCamera)
      }
      _processSubCameras(rr) {
        let Sr = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (0 === rr.cameraRigMode || rr._renderingMultiview) return rr._renderingMultiview && !this._multiviewSceneUbo && this._createMultiviewUbo(), this._renderForCamera(rr, void 0, Sr), void this.onAfterRenderCameraObservable.notifyObservers(rr);
        if (rr._useMultiviewToSingleView) this._renderMultiviewToSingleView(rr);
        else {
          this.onBeforeCameraRenderObservable.notifyObservers(rr);
          for (let Sr = 0; Sr < rr._rigCameras.length; Sr++) this._renderForCamera(rr._rigCameras[Sr], rr)
        }
        this._activeCamera = rr, this.updateTransformMatrix(), this.onAfterRenderCameraObservable.notifyObservers(rr)
      }
      _checkIntersections() {
        for (let rr = 0; rr < this._meshesForIntersections.length; rr++) {
          const Sr = this._meshesForIntersections.data[rr];
          if (Sr.actionManager)
            for (let rr = 0; Sr.actionManager && rr < Sr.actionManager.actions.length; rr++) {
              const Qr = Sr.actionManager.actions[rr];
              if (12 === Qr.trigger || 13 === Qr.trigger) {
                const rr = Qr.getTriggerParameter(),
                  Zr = rr.mesh ? rr.mesh : rr,
                  Wr = Zr.har(Sr, rr.usePreciseIntersection),
                  ar = Sr._intersectionsInProgress.indexOf(Zr);
                Wr && -1 === ar ? 12 === Qr.trigger ? (Qr._executeCurrent(Ur.CreateNew(Sr, void 0, Zr)), Sr._intersectionsInProgress.push(Zr)) : 13 === Qr.trigger && Sr._intersectionsInProgress.push(Zr) : !Wr && ar > -1 && (13 === Qr.trigger && Qr._executeCurrent(Ur.CreateNew(Sr, void 0, Zr)), Sr.actionManager.hasSpecificTrigger(13, (rr => {
                  const Sr = rr.mesh ? rr.mesh : rr;
                  return Zr === Sr
                })) && 13 !== Qr.trigger || Sr._intersectionsInProgress.splice(ar, 1))
              }
            }
        }
      }
      _advancePhysicsEngineStep(rr) {}
      _animate(rr) {}
      animate() {
        if (this._engine.isDeterministicLockStep()) {
          let rr = Math.max(aQ.MinDeltaTime, Math.min(this._engine.getDeltaTime(), aQ.MaxDeltaTime)) + this._timeAccumulator;
          const Sr = this._engine.getTimeStep(),
            Qr = 1e3 / Sr / 1e3;
          let Zr = 0;
          const Wr = this._engine.getLockstepMaxSteps();
          let ar = Math.floor(rr / Sr);
          for (ar = Math.min(ar, Wr); rr > 0 && Zr < ar;) this.onBeforeStepObservable.notifyObservers(this), this._animationRatio = Sr * Qr, this._animate(Sr), this.onAfterAnimationsObservable.notifyObservers(this), this.tV && this._advancePhysicsEngineStep(Sr), this.onAfterStepObservable.notifyObservers(this), this._currentStepId++, Zr++, rr -= Sr;
          this._timeAccumulator = rr < 0 ? 0 : rr
        } else {
          const rr = this.useConstantAnimationDeltaTime ? 16 : Math.max(aQ.MinDeltaTime, Math.min(this._engine.getDeltaTime(), aQ.MaxDeltaTime));
          this._animationRatio = .06 * rr, this._animate(), this.onAfterAnimationsObservable.notifyObservers(this), this.tV && this._advancePhysicsEngineStep(rr)
        }
      }
      _clear() {
        (this.autoClearDepthAndStencil || this.autoClear) && this._engine.clear(this._clearColor, this.autoClear || this.forceWireframe || this.forcePointsCloud, this.autoClearDepthAndStencil, this.autoClearDepthAndStencil)
      }
      _checkCameraRenderTarget(rr) {
        if (rr?.outputRenderTarget && !rr?.isRigCamera && (rr.outputRenderTarget._cleared = !1), rr?.rigCameras?.length)
          for (let Sr = 0; Sr < rr.rigCameras.length; ++Sr) {
            const Qr = rr.rigCameras[Sr].outputRenderTarget;
            Qr && (Qr._cleared = !1)
          }
      }
      resetDrawCache(rr) {
        if (this.meshes)
          for (const Sr of this.meshes) Sr.resetDrawCache(rr)
      }
      _renderWithFrameGraph() {
        let rr = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          Sr = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (this.activeCamera = null, this.activeCameras = null, rr)
          for (const Qr of this.cameras)
            if (Qr.update(), 0 !== Qr.cameraRigMode)
              for (let rr = 0; rr < Qr._rigCameras.length; rr++) Qr._rigCameras[rr].update();
        this.onBeforeRenderObservable.notifyObservers(this), this._renderingMeshEvaluationDepth++;
        try {
          this._renderWithFrameGraphAfterBeforeRender(Sr)
        } finally {
          this._renderingMeshEvaluationDepth--
        }
      }
      _renderWithFrameGraphAfterBeforeRender(rr) {
        this.onBeforeRenderTargetsRenderObservable.notifyObservers(this), this._renderTargets.reset();
        const Sr = this._frameGraph?.findMainCamera() ?? null;
        if (this.renderTargetsEnabled) {
          this.environmentTexture && this.environmentTexture.isRenderTarget && this._renderTargets.pushNoDuplicate(this.environmentTexture), this._renderTargets.concatWithNoDuplicate(this.customRenderTargets), Zr.h.StartPerformanceCounter("Custom render targets", this._renderTargets.length > 0);
          for (let rr = 0; rr < this._renderTargets.length; rr++) {
            const Qr = this._renderTargets.data[rr],
              Zr = Qr.activeCamera || Sr;
            this._renderRenderTarget(Qr, Zr, !0, this.dumpNextRenderTargets)
          }
          Zr.h.EndPerformanceCounter("Custom render targets", this._renderTargets.length > 0), this._renderId++
        }
        this.onAfterRenderTargetsRenderObservable.notifyObservers(this);
        for (let Qr = 0, Zr = this._beforeClearStage; Qr < Zr.length; Qr++) {
          Zr[Qr].action()
        }
        if (this._engine.snapshotRendering && 1 === this._engine.snapshotRenderingMode) this._activeParticleSystems.reset(), this._activeSkeletons.reset(), this._softwareSkinnedMeshes.reset();
        else {
          const Sr = this.getActiveMeshCandidates(),
            Qr = Sr.length;
          if (this._activeMeshesFrozen) {
            if (!this._skipEvaluateActiveMeshesCompletely)
              for (let rr = 0; rr < Qr; rr++) {
                const Qr = Sr.data[rr];
                Qr._internalAbstractMeshDataInfo._wasActiveLastFrame && Qr.computeWorldMatrix()
              }
            if (this.particlesEnabled) {
              const rr = this._activeParticleSystems.length;
              for (let Sr = 0; Sr < rr; Sr++) this._activeParticleSystems.data[Sr].animate()
            }
          } else {
            this._activeParticleSystems.reset(), this._activeSkeletons.reset(), this._softwareSkinnedMeshes.reset();
            for (let Zr = 0; Zr < Qr; Zr++) {
              const Qr = Sr.data[Zr];
              Qr._internalAbstractMeshDataInfo._wasActiveLastFrame = !1, Qr.isBlocked || (this._totalVertices.addCount(Qr.getTotalVertices(), !1), Qr.isReady() && Qr.isEnabled() && !Qr.Tx.hasAZeroComponent && (Qr.computeWorldMatrix(rr), Qr.actionManager && Qr.actionManager.hasSpecificTriggers2(12, 13) && this._meshesForIntersections.pushNoDuplicate(Qr)))
            }
            if (this.particlesEnabled)
              for (let rr = 0; rr < this.pT.length; rr++) {
                const Sr = this.pT[rr];
                if (!Sr.isStarted() || !Sr.emitter) continue;
                const Qr = Sr.emitter;
                Qr.position && !Qr.isEnabled() || (this._activeParticleSystems.push(Sr), Sr.animate())
              }
          }
        }
        this.frameGraph?.execute()
      }
      _renderRenderTarget(rr, Sr) {
        let Qr = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Zr = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (this._intermediateRendering = !0, rr._shouldRender()) {
          if (this._renderId++, this.activeCamera = Sr, !this.activeCamera) throw new Error("Active camera not set");
          this._engine.setViewport(this.activeCamera.viewport), this.updateTransformMatrix(), rr.render(Qr, Zr)
        }
        this._intermediateRendering = !1
      }
      render() {
        let rr = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          Sr = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this.Dv) return;
        const Qr = this._renderingMeshEvaluationDepth;
        try {
          this._renderFrame(rr, Sr)
        } finally {
          this._renderingMeshEvaluationDepth = Qr
        }
      }
      _renderFrame(rr, Sr) {
        if (this.onReadyObservable.hasObservers() && null === this._executeWhenReadyTimeoutId && this._checkIsReady(), hr.d.eC = this._getFloatingOriginScene, this._frameId++, this._defaultFrameBufferCleared = !1, this._checkCameraRenderTarget(this.activeCamera), this.activeCameras?.length)
          for (const Qr of this.activeCameras) this._checkCameraRenderTarget(Qr);
        this._registerTransientComponents(), this._activeParticles.fetchNewFrame(), this._totalVertices.fetchNewFrame(), this._activeIndices.fetchNewFrame(), this._activeBones.fetchNewFrame(), this._meshesForIntersections.reset(), this.resetCachedMaterial(), this.onBeforeAnimationsObservable.notifyObservers(this), this.actionManager && this.actionManager.processTrigger(11), Sr || this.animate();
        for (let Qr = 0, Zr = this._beforeCameraUpdateStage; Qr < Zr.length; Qr++) {
          Zr[Qr].action()
        }
        if (rr)
          if (this.activeCameras && this.activeCameras.length > 0)
            for (let Qr = 0; Qr < this.activeCameras.length; Qr++) {
              const rr = this.activeCameras[Qr];
              if (rr.update(), 0 !== rr.cameraRigMode)
                for (let Sr = 0; Sr < rr._rigCameras.length; Sr++) rr._rigCameras[Sr].update()
            } else if (this.activeCamera && (this.activeCamera.update(), 0 !== this.activeCamera.cameraRigMode))
              for (let Qr = 0; Qr < this.activeCamera._rigCameras.length; Qr++) this.activeCamera._rigCameras[Qr].update();
        if (this.customRenderFunction) this._renderId++, this._engine.currentRenderPassId = 0, this._renderingMeshEvaluationDepth++, this.customRenderFunction(rr, Sr);
        else {
          this.onBeforeRenderObservable.notifyObservers(this), this._renderingMeshEvaluationDepth++, this.onBeforeRenderTargetsRenderObservable.notifyObservers(this);
          const rr = this.activeCameras?.length ? this.activeCameras[0] : this.activeCamera;
          if (this.renderTargetsEnabled) {
            Zr.h.StartPerformanceCounter("Custom render targets", this.customRenderTargets.length > 0);
            for (let Sr = 0; Sr < this.customRenderTargets.length; Sr++) {
              const Qr = this.customRenderTargets[Sr],
                Zr = Qr.activeCamera || this.activeCamera;
              this._renderRenderTarget(Qr, Zr, rr !== Zr, this.dumpNextRenderTargets)
            }
            Zr.h.EndPerformanceCounter("Custom render targets", this.customRenderTargets.length > 0), this._renderId++
          }
          this._engine.currentRenderPassId = rr?.renderPassId ?? 0, this.activeCamera = rr, this._activeCamera && 22 !== this._activeCamera.cameraRigMode && !this.prePass && this._bindFrameBuffer(this._activeCamera, !1), this.onAfterRenderTargetsRenderObservable.notifyObservers(this);
          for (let Sr = 0, Qr = this._beforeClearStage; Sr < Qr.length; Sr++) {
            Qr[Sr].action()
          }
          this._clearFrameBuffer(this.activeCamera);
          for (let Sr = 0, Qr = this._gatherRenderTargetsStage; Sr < Qr.length; Sr++) {
            Qr[Sr].action(this._renderTargets)
          }
          if (this.activeCameras && this.activeCameras.length > 0)
            for (let Sr = 0; Sr < this.activeCameras.length; Sr++) this._processSubCameras(this.activeCameras[Sr], Sr > 0);
          else {
            if (!this.activeCamera) throw new Error("No camera defined");
            this._processSubCameras(this.activeCamera, !!this.activeCamera.outputRenderTarget)
          }
        }
        this._inputManager._updateMeshUnderPointer(), this._checkIntersections();
        for (let Qr = 0, Zr = this._afterRenderStage; Qr < Zr.length; Qr++) {
          Zr[Qr].action()
        }
        if (this.afterRender && this.afterRender(), this.onAfterRenderObservable.notifyObservers(this), this._toBeDisposed.length) {
          for (let rr = 0; rr < this._toBeDisposed.length; rr++) {
            const Sr = this._toBeDisposed[rr];
            Sr && Sr.dispose()
          }
          this._toBeDisposed.length = 0
        }
        this.dumpNextRenderTargets && (this.dumpNextRenderTargets = !1), this._activeBones.addCount(0, !0), this._activeIndices.addCount(0, !0), this._activeParticles.addCount(0, !0), this._engine.restoreDefaultFramebuffer()
      }
      freezeMaterials() {
        for (let rr = 0; rr < this.materials.length; rr++) this.materials[rr].freeze()
      }
      unfreezeMaterials() {
        for (let rr = 0; rr < this.materials.length; rr++) this.materials[rr].unfreeze()
      }
      dispose() {
        if (this.Dv) return;
        if (this._isDisposing = !0, this.beforeRender = null, this.afterRender = null, this.metadata = null, this.skeletons.length = 0, this.morphTargetManagers.length = 0, this._transientComponents.length = 0, this._isReadyForMeshStage.clear(), this._beforeEvaluateActiveMeshStage.clear(), this._evaluateSubMeshStage.clear(), this._preActiveMeshStage.clear(), this._cameraDrawRenderTargetStage.clear(), this._beforeCameraDrawStage.clear(), this._beforeRenderTargetDrawStage.clear(), this._beforeRenderingGroupDrawStage.clear(), this._beforeRenderingMeshStage.clear(), this._afterRenderingMeshStage.clear(), this._afterRenderingGroupDrawStage.clear(), this._afterCameraDrawStage.clear(), this._afterRenderTargetDrawStage.clear(), this._afterRenderStage.clear(), this._beforeCameraUpdateStage.clear(), this._beforeClearStage.clear(), this._gatherRenderTargetsStage.clear(), this._gatherActiveCameraRenderTargetsStage.clear(), this._pointerMoveStage.clear(), this._pointerDownStage.clear(), this._pointerUpStage.clear(), this._isReadyChecks.length = 0, this.importedMeshesFiles = [], this._activeAnimatables && (0, Kr.c)(this.stopAllAnimations)) {
          for (const rr of this._activeAnimatables) rr.onAnimationEndObservable.clear(), rr.onAnimationEnd = null;
          this.stopAllAnimations()
        }
        this.resetCachedMaterial(), this.activeCamera && (this.activeCamera._activeMeshes.dispose(), this.activeCamera = null), this.activeCameras = null, this._activeMeshes.dispose(), this._renderingManager.dispose(), this._processedMaterials.dispose(), this._activeParticleSystems.dispose(), this._activeSkeletons.dispose(), this._softwareSkinnedMeshes.dispose(), this._renderTargets.dispose(), this._materialsRenderTargets.dispose(), this._registeredForLateAnimationBindings.dispose(), this._animationWrites.length = 0, this._animationWriteCount = 0, this._animationStepWriteCount = 0, this._meshesForIntersections.dispose(), this._toBeDisposed.length = 0;
        const rr = this._activeRequests.slice();
        for (const ar of rr) ar.abort();
        this._activeRequests.length = 0;
        try {
          this.lC.notifyObservers(this)
        } catch (Wr) {
          rQ.c.Error("An error occurred while calling onDisposeObservable!", Wr)
        }
        this.detachControl();
        const Sr = this._engine.getInputElement?.();
        if (Sr)
          for (let ar = 0; ar < this.cameras.length; ar++) this.cameras[ar].detachControl();
        this._disposeList(this.animationGroups), this._disposeList(this.lights), this._defaultMaterial && this._defaultMaterial.dispose(), this._disposeList(this.multiMaterials), this._disposeList(this.materials), this._disposeList(this.meshes, (rr => rr.dispose(!0))), this._disposeList(this.transformNodes, (rr => rr.dispose(!0)));
        const Qr = this.cameras;
        this._disposeList(Qr), this._disposeList(this.pT), this._disposeList(this.postProcesses), this._disposeList(this.textures), this._disposeList(this.morphTargetManagers), this._disposeList(this.frameGraphs), this._sceneUbo.dispose(), this._multiviewSceneUbo && this._multiviewSceneUbo.dispose(), this.postProcessManager.dispose(), this._disposeList(this._components);
        let Zr = this._engine.scenes.indexOf(this);
        if (Zr > -1 && this._engine.scenes.splice(Zr, 1), this._floatingOriginScene = void 0, 0 === this._engine.scenes.length && (0, hr.g)(), er.b._LastCreatedScene === this) {
          er.b._LastCreatedScene = null;
          let rr = er.b.Instances.length - 1;
          for (; rr >= 0;) {
            const Sr = er.b.Instances[rr];
            if (Sr.scenes.length > 0) {
              er.b._LastCreatedScene = Sr.scenes[this._engine.scenes.length - 1];
              break
            }
            rr--
          }
        }
        Zr = this._engine._virtualScenes.indexOf(this), Zr > -1 && this._engine._virtualScenes.splice(Zr, 1), this._engine.wipeCaches(!0), this.lC.clear(), this.onBeforeRenderObservable.clear(), this.onAfterRenderObservable.clear(), this.onBeforeRenderTargetsRenderObservable.clear(), this.onAfterRenderTargetsRenderObservable.clear(), this.onAfterStepObservable.clear(), this.onBeforeStepObservable.clear(), this.onBeforeActiveMeshesEvaluationObservable.clear(), this.onAfterActiveMeshesEvaluationObservable.clear(), this.onBeforeParticlesRenderingObservable.clear(), this.onAfterParticlesRenderingObservable.clear(), this.onBeforeDrawPhaseObservable.clear(), this.onAfterDrawPhaseObservable.clear(), this.onBeforeAnimationsObservable.clear(), this.onAfterAnimationsObservable.clear(), this.onDataLoadedObservable.clear(), this.onBeforeRenderingGroupObservable.clear(), this.onAfterRenderingGroupObservable.clear(), this.onMeshImportedObservable.clear(), this.onBeforeCameraRenderObservable.clear(), this.onAfterCameraRenderObservable.clear(), this.onAfterRenderCameraObservable.clear(), this.onReadyObservable.clear(), this.onNewCameraAddedObservable.clear(), this.onCameraRemovedObservable.clear(), this.onNewLightAddedObservable.clear(), this.onLightRemovedObservable.clear(), this.onNewGeometryAddedObservable.clear(), this.onGeometryRemovedObservable.clear(), this.onNewTransformNodeAddedObservable.clear(), this.onTransformNodeRemovedObservable.clear(), this.onNewMeshAddedObservable.clear(), this.onMeshRemovedObservable.clear(), this.onNewSkeletonAddedObservable.clear(), this.onSkeletonRemovedObservable.clear(), this.onNewMaterialAddedObservable.clear(), this.onNewMultiMaterialAddedObservable.clear(), this.onMaterialRemovedObservable.clear(), this.onMultiMaterialRemovedObservable.clear(), this.onNewTextureAddedObservable.clear(), this.onTextureRemovedObservable.clear(), this.onNewFrameGraphAddedObservable.clear(), this.onFrameGraphRemovedObservable.clear(), this.onNewObjectRendererAddedObservable.clear(), this.onObjectRendererRemovedObservable.clear(), this.onPrePointerObservable.clear(), this.onPointerObservable.clear(), this.onPreKeyboardObservable.clear(), this.onKeyboardObservable.clear(), this.onActiveCameraChanged.clear(), this.onScenePerformancePriorityChangedObservable.clear(), this.onClearColorChangedObservable.clear(), this.onEnvironmentTextureChangedObservable.clear(), this.onMeshUnderPointerUpdatedObservable.clear(), this._isDisposed = !0
      }
      _disposeList(rr, Sr) {
        const Qr = rr.slice(0);
        Sr = Sr ?? (rr => rr.dispose());
        for (const Zr of Qr) Sr(Zr);
        rr.length = 0
      }
      get Dv() {
        return this._isDisposed
      }
      clearCachedVertexData() {
        for (let rr = 0; rr < this.meshes.length; rr++) {
          const Sr = this.meshes[rr].geometry;
          Sr && Sr.clearCachedData()
        }
      }
      cleanCachedTextureBuffer() {
        for (const rr of this.textures) {
          rr._buffer && (rr._buffer = null)
        }
      }
      getWorldExtends(rr) {
        const Sr = new pr.u(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
          Qr = new pr.u(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
        rr = rr || (() => !0);
        const Zr = this.meshes.filter(rr);
        for (const Wr of Zr) {
          if (Wr.computeWorldMatrix(!0), !Wr.jT || 0 === Wr.jT.length || Wr.infiniteDistance) continue;
          const rr = Wr.mG(),
            Zr = rr.boundingBox.minimumWorld,
            ar = rr.boundingBox.maximumWorld;
          pr.u.CheckExtends(Zr, Sr, Qr), pr.u.CheckExtends(ar, Sr, Qr)
        }
        return Sr.x === Number.MAX_VALUE ? {
          min: pr.u.Zero(),
          max: pr.u.Zero()
        } : {
          min: Sr,
          max: Qr
        }
      }
      createPickingRay(rr, Sr, Qr, Zr) {
        throw (0, Kr.l)("Ray")
      }
      createPickingRayToRef(rr, Sr, Qr, Zr, Wr) {
        throw (0, Kr.l)("Ray")
      }
      createPickingRayInCameraSpace(rr, Sr, Qr) {
        throw (0, Kr.l)("Ray")
      }
      createPickingRayInCameraSpaceToRef(rr, Sr, Qr, Zr) {
        throw (0, Kr.l)("Ray")
      }
      eN(rr, Sr, Qr, Zr, Wr, ar) {
        const jr = (0, Kr.l)("Ray", !0);
        return jr && rQ.c.Warn(jr), new Nr.b
      }
      pickWithBoundingInfo(rr, Sr, Qr, Zr, Wr) {
        const ar = (0, Kr.l)("Ray", !0);
        return ar && rQ.c.Warn(ar), new Nr.b
      }
      pickWithRay(rr, Sr, Qr, Zr) {
        throw (0, Kr.l)("Ray")
      }
      multiPick(rr, Sr, Qr, Zr, Wr) {
        throw (0, Kr.l)("Ray")
      }
      multiPickWithRay(rr, Sr, Qr) {
        throw (0, Kr.l)("Ray")
      }
      setPointerOverMesh(rr, Sr, Qr) {
        this._inputManager.setPointerOverMesh(rr, Sr, Qr)
      }
      getPointerOverMesh() {
        return this._inputManager.getPointerOverMesh()
      }
      _rebuildGeometries() {
        for (const rr of this.geometries) rr._rebuild();
        for (const rr of this.meshes) rr._rebuild();
        this.postProcessManager && this.postProcessManager._rebuild();
        for (const rr of this._components) rr.rebuild();
        for (const rr of this.pT) rr.rebuild();
        if (this.spriteManagers)
          for (const rr of this.spriteManagers) rr.rebuild()
      }
      _rebuildTextures() {
        for (const rr of this.textures) rr._rebuild(!0);
        this.markAllMaterialsAsDirty(1)
      }
      _getByTags(rr, Sr, Qr) {
        if (void 0 === Sr) return rr;
        const Zr = [];
        for (const Wr in rr) {
          const ar = rr[Wr];
          Er.b && Er.b.MatchesQuery(ar, Sr) && (!Qr || Qr(ar)) && Zr.push(ar)
        }
        return Zr
      }
      getMeshesByTags(rr, Sr) {
        return this._getByTags(this.meshes, rr, Sr)
      }
      getCamerasByTags(rr, Sr) {
        return this._getByTags(this.cameras, rr, Sr)
      }
      getLightsByTags(rr, Sr) {
        return this._getByTags(this.lights, rr, Sr)
      }
      getMaterialByTags(rr, Sr) {
        return this._getByTags(this.materials, rr, Sr).concat(this._getByTags(this.multiMaterials, rr, Sr))
      }
      getTransformNodesByTags(rr, Sr) {
        return this._getByTags(this.transformNodes, rr, Sr)
      }
      setRenderingOrder(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          Zr = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        this._renderingManager.setRenderingOrder(rr, Sr, Qr, Zr)
      }
      setRenderingAutoClearDepthStencil(rr, Sr) {
        let Qr = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          Zr = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        this._renderingManager.setRenderingAutoClearDepthStencil(rr, Sr, Qr, Zr)
      }
      getAutoClearDepthStencilSetup(rr) {
        return this._renderingManager.getAutoClearDepthStencilSetup(rr)
      }
      _forceBlockMaterialDirtyMechanism(rr) {
        this._blockMaterialDirtyMechanism = rr
      }
      get blockMaterialDirtyMechanism() {
        return this._blockMaterialDirtyMechanism
      }
      set blockMaterialDirtyMechanism(rr) {
        this._blockMaterialDirtyMechanism !== rr && (this._blockMaterialDirtyMechanism = rr, rr || this.markAllMaterialsAsDirty(127))
      }
      markAllMaterialsAsDirty(rr, Sr) {
        if (!this._blockMaterialDirtyMechanism)
          for (const Qr of this.materials) Sr && !Sr(Qr) || Qr.BQr(rr)
      }
      _loadFile(rr, Sr, Qr, Zr, Wr, ar, jr) {
        const Ir = (0, Jr.n)(rr, Sr, Qr, Zr ? this.offlineProvider : void 0, Wr, ar, jr);
        return this._activeRequests.push(Ir), Ir.onCompleteObservable.add((rr => {
          this._activeRequests.splice(this._activeRequests.indexOf(rr), 1)
        })), Ir
      }
      async _loadFileAsync(rr, Sr, Qr, Zr, Wr) {
        return await new Promise(((ar, jr) => {
          this._loadFile(rr, (rr => {
            ar(rr)
          }), Sr, Qr, Zr, ((rr, Sr) => {
            jr(Sr)
          }), Wr)
        }))
      }
      async _loadDelayedFileAsync(rr, Sr, Qr) {
        this._delayedFileRequests || (this._delayedFileRequests = new Map);
        const Zr = `${rr}|${Sr?"binary":"string"}`;
        let Wr = this._delayedFileRequests.get(Zr);
        if (!Wr) {
          Wr = Sr ? this._loadFileAsync(rr, void 0, Qr, !0) : this._loadFileAsync(rr, void 0, Qr, !1);
          const ar = Wr;
          (async () => {
            try {
              await ar
            } catch {}
            this._delayedFileRequests?.delete(Zr)
          })(), this._delayedFileRequests.set(Zr, Wr)
        }
        return await Wr
      }
      _requestFile(rr, Sr, Qr, Zr, Wr, ar, jr) {
        const Ir = (0, Jr.A)(rr, Sr, Qr, Zr ? this.offlineProvider : void 0, Wr, ar, jr);
        return this._activeRequests.push(Ir), Ir.onCompleteObservable.add((rr => {
          this._activeRequests.splice(this._activeRequests.indexOf(rr), 1)
        })), Ir
      }
      async _requestFileAsync(rr, Sr, Qr, Zr, Wr) {
        return await new Promise(((ar, jr) => {
          this._requestFile(rr, (rr => {
            ar(rr)
          }), Sr, Qr, Zr, (rr => {
            jr(rr)
          }), Wr)
        }))
      }
      _readFile(rr, Sr, Qr, Zr, Wr) {
        const ar = (0, Jr.t)(rr, Sr, Qr, Zr, Wr);
        return this._activeRequests.push(ar), ar.onCompleteObservable.add((rr => {
          this._activeRequests.splice(this._activeRequests.indexOf(rr), 1)
        })), ar
      }
      async _readFileAsync(rr, Sr, Qr) {
        return await new Promise(((Zr, Wr) => {
          this._readFile(rr, (rr => {
            Zr(rr)
          }), Sr, Qr, (rr => {
            Wr(rr)
          }))
        }))
      }
      getPerfCollector() {
        throw (0, Kr.l)("performanceViewerSceneExtension")
      }
      setActiveCameraByID(rr) {
        return this.setActiveCameraById(rr)
      }
      getMaterialByID(rr) {
        return this.getMaterialById(rr)
      }
      getLastMaterialByID(rr) {
        return this.getLastMaterialById(rr)
      }
      getTextureByUniqueID(rr) {
        return this.getTextureByUniqueId(rr)
      }
      getCameraByID(rr) {
        return this.getCameraById(rr)
      }
      getCameraByUniqueID(rr) {
        return this.getCameraByUniqueId(rr)
      }
      getBoneByID(rr) {
        return this.getBoneById(rr)
      }
      getLightByID(rr) {
        return this.getLightById(rr)
      }
      getLightByUniqueID(rr) {
        return this.getLightByUniqueId(rr)
      }
      getParticleSystemByID(rr) {
        return this.getParticleSystemById(rr)
      }
      getGeometryByID(rr) {
        return this.getGeometryById(rr)
      }
      getMeshByID(rr) {
        return this.getMeshById(rr)
      }
      getMeshByUniqueID(rr) {
        return this.getMeshByUniqueId(rr)
      }
      getLastMeshByID(rr) {
        return this.getLastMeshById(rr)
      }
      getMeshesByID(rr) {
        return this.getMeshesById(rr)
      }
      getTransformNodeByID(rr) {
        return this.getTransformNodeById(rr)
      }
      getTransformNodeByUniqueID(rr) {
        return this.getTransformNodeByUniqueId(rr)
      }
      getTransformNodesByID(rr) {
        return this.getTransformNodesById(rr)
      }
      getNodeByID(rr) {
        return this.getNodeById(rr)
      }
      getLastEntryByID(rr) {
        return this.getLastEntryById(rr)
      }
      getLastSkeletonByID(rr) {
        return this.getLastSkeletonById(rr)
      }
    }
    aQ.FOGMODE_NONE = 0, aQ.FOGMODE_EXP = 1, aQ.FOGMODE_EXP2 = 2, aQ.FOGMODE_LINEAR = 3, aQ.MinDeltaTime = 1, aQ.MaxDeltaTime = 1e3, aQ._OriginalDefaultMaterialFactory = aQ.DefaultMaterialFactory;
    let jQ = !1;

    function IQ() {
      jQ || (jQ = !0, (0, SQ.e)("BABYLON.Scene", aQ))
    }(ur = aQ.prototype).sortActiveAnimatables ?? (ur.sortActiveAnimatables = (0, Kr.h)("Scene", "sortActiveAnimatables")), (rS = aQ.prototype).beginWeightedAnimation ?? (rS.beginWeightedAnimation = (0, Kr.h)("Scene", "beginWeightedAnimation")), (SS = aQ.prototype).beginAnimation ?? (SS.beginAnimation = (0, Kr.h)("Scene", "beginAnimation")), (QS = aQ.prototype).beginHierarchyAnimation ?? (QS.beginHierarchyAnimation = (0, Kr.h)("Scene", "beginHierarchyAnimation")), (ZS = aQ.prototype).beginDirectAnimation ?? (ZS.beginDirectAnimation = (0, Kr.h)("Scene", "beginDirectAnimation")), (WS = aQ.prototype).beginDirectHierarchyAnimation ?? (WS.beginDirectHierarchyAnimation = (0, Kr.h)("Scene", "beginDirectHierarchyAnimation")), (aS = aQ.prototype).getAnimatableByTarget ?? (aS.getAnimatableByTarget = (0, Kr.h)("Scene", "getAnimatableByTarget")), (jS = aQ.prototype).getAllAnimatablesByTarget ?? (jS.getAllAnimatablesByTarget = (0, Kr.h)("Scene", "getAllAnimatablesByTarget")), (IS = aQ.prototype).stopAllAnimations ?? (IS.stopAllAnimations = (0, Kr.h)("Scene", "stopAllAnimations")), (fS = aQ.prototype).getSoundByName ?? (fS.getSoundByName = (0, Kr.h)("Scene", "getSoundByName")), (ES = aQ.prototype).createOrUpdateSelectionOctree ?? (ES.createOrUpdateSelectionOctree = (0, Kr.h)("Scene", "createOrUpdateSelectionOctree")), (pS = aQ.prototype).createDefaultLight ?? (pS.createDefaultLight = (0, Kr.h)("Scene", "createDefaultLight")), (xS = aQ.prototype).createDefaultCamera ?? (xS.createDefaultCamera = (0, Kr.h)("Scene", "createDefaultCamera")), (mS = aQ.prototype).createDefaultCameraOrLight ?? (mS.createDefaultCameraOrLight = (0, Kr.h)("Scene", "createDefaultCameraOrLight")), (NS = aQ.prototype).createDefaultSkybox ?? (NS.createDefaultSkybox = (0, Kr.h)("Scene", "createDefaultSkybox")), (US = aQ.prototype).createDefaultEnvironment ?? (US.createDefaultEnvironment = (0, Kr.h)("Scene", "createDefaultEnvironment")), (tS = aQ.prototype).createDefaultVRExperience ?? (tS.createDefaultVRExperience = (0, Kr.h)("Scene", "createDefaultVRExperience")), (hS = aQ.prototype).createDefaultXRExperienceAsync ?? (hS.createDefaultXRExperienceAsync = (0, Kr.h)("Scene", "createDefaultXRExperienceAsync")), (zS = aQ.prototype).getGlowLayerByName ?? (zS.getGlowLayerByName = (0, Kr.h)("Scene", "getGlowLayerByName")), (YS = aQ.prototype).getHighlightLayerByName ?? (YS.getHighlightLayerByName = (0, Kr.h)("Scene", "getHighlightLayerByName")), (nS = aQ.prototype).getSelectionOutlineLayerByName ?? (nS.getSelectionOutlineLayerByName = (0, Kr.h)("Scene", "getSelectionOutlineLayerByName")), (eS = aQ.prototype).removeLensFlareSystem ?? (eS.removeLensFlareSystem = (0, Kr.h)("Scene", "removeLensFlareSystem")), (KS = aQ.prototype).addLensFlareSystem ?? (KS.addLensFlareSystem = (0, Kr.h)("Scene", "addLensFlareSystem")), (yS = aQ.prototype).getLensFlareSystemByName ?? (yS.getLensFlareSystemByName = (0, Kr.h)("Scene", "getLensFlareSystemByName")), (BS = aQ.prototype).getLensFlareSystemByID ?? (BS.getLensFlareSystemByID = (0, Kr.h)("Scene", "getLensFlareSystemByID")), (TS = aQ.prototype).getLensFlareSystemById ?? (TS.getLensFlareSystemById = (0, Kr.h)("Scene", "getLensFlareSystemById")), (vS = aQ.prototype).getPhysicsEngine ?? (vS.getPhysicsEngine = (0, Kr.h)("Scene", "getPhysicsEngine")), (OS = aQ.prototype).enablePhysics ?? (OS.enablePhysics = (0, Kr.h)("Scene", "enablePhysics")), (LS = aQ.prototype).disablePhysicsEngine ?? (LS.disablePhysicsEngine = (0, Kr.h)("Scene", "disablePhysicsEngine")), (lS = aQ.prototype).isPhysicsEnabled ?? (lS.isPhysicsEnabled = (0, Kr.h)("Scene", "isPhysicsEnabled")), (XS = aQ.prototype).deleteCompoundImpostor ?? (XS.deleteCompoundImpostor = (0, Kr.h)("Scene", "deleteCompoundImpostor")), (PS = aQ.prototype).removeReflectionProbe ?? (PS.removeReflectionProbe = (0, Kr.h)("Scene", "removeReflectionProbe")), (HS = aQ.prototype).addReflectionProbe ?? (HS.addReflectionProbe = (0, Kr.h)("Scene", "addReflectionProbe")), (qS = aQ.prototype).getBoundingBoxRenderer ?? (qS.getBoundingBoxRenderer = (0, Kr.h)("Scene", "getBoundingBoxRenderer")), (RS = aQ.prototype).enableDepthRenderer ?? (RS.enableDepthRenderer = (0, Kr.h)("Scene", "enableDepthRenderer")), (gS = aQ.prototype).disableDepthRenderer ?? (gS.disableDepthRenderer = (0, Kr.h)("Scene", "disableDepthRenderer")), (CS = aQ.prototype).enableFluidRenderer ?? (CS.enableFluidRenderer = (0, Kr.h)("Scene", "enableFluidRenderer")), (MS = aQ.prototype).disableFluidRenderer ?? (MS.disableFluidRenderer = (0, Kr.h)("Scene", "disableFluidRenderer")), (GS = aQ.prototype).enableGeometryBufferRenderer ?? (GS.enableGeometryBufferRenderer = (0, Kr.h)("Scene", "enableGeometryBufferRenderer")), (kS = aQ.prototype).disableGeometryBufferRenderer ?? (kS.disableGeometryBufferRenderer = (0, Kr.h)("Scene", "disableGeometryBufferRenderer")), (AS = aQ.prototype).enableIblCdfGenerator ?? (AS.enableIblCdfGenerator = (0, Kr.h)("Scene", "enableIblCdfGenerator")), (VS = aQ.prototype).disableIblCdfGenerator ?? (VS.disableIblCdfGenerator = (0, Kr.h)("Scene", "disableIblCdfGenerator")), (iS = aQ.prototype).getOutlineRenderer ?? (iS.getOutlineRenderer = (0, Kr.h)("Scene", "getOutlineRenderer")), (wS = aQ.prototype).enablePrePassRenderer ?? (wS.enablePrePassRenderer = (0, Kr.h)("Scene", "enablePrePassRenderer")), (cS = aQ.prototype).disablePrePassRenderer ?? (cS.disablePrePassRenderer = (0, Kr.h)("Scene", "disablePrePassRenderer")), (FS = aQ.prototype).enableSubSurfaceForPrePass ?? (FS.enableSubSurfaceForPrePass = (0, Kr.h)("Scene", "enableSubSurfaceForPrePass")), (oS = aQ.prototype).disableSubSurfaceForPrePass ?? (oS.disableSubSurfaceForPrePass = (0, Kr.h)("Scene", "disableSubSurfaceForPrePass")), (bS = aQ.prototype).pickSprite ?? (bS.pickSprite = (0, Kr.h)("Scene", "pickSprite")), (JS = aQ.prototype).pickSpriteWithRay ?? (JS.pickSpriteWithRay = (0, Kr.h)("Scene", "pickSpriteWithRay")), (DS = aQ.prototype).multiPickSprite ?? (DS.multiPickSprite = (0, Kr.h)("Scene", "multiPickSprite")), (dS = aQ.prototype).multiPickSpriteWithRay ?? (dS.multiPickSpriteWithRay = (0, Kr.h)("Scene", "multiPickSpriteWithRay")), (sS = aQ.prototype).setPointerOverSprite ?? (sS.setPointerOverSprite = (0, Kr.h)("Scene", "setPointerOverSprite")), (uS = aQ.prototype).getPointerOverSprite ?? (uS.getPointerOverSprite = (0, Kr.h)("Scene", "getPointerOverSprite")), Object.getOwnPropertyDescriptor(aQ.prototype, "mainSoundTrack") || Object.defineProperty(aQ.prototype, "mainSoundTrack", (0, Kr.g)("Scene", "mainSoundTrack")), Object.getOwnPropertyDescriptor(aQ.prototype, "soundTracks") || Object.defineProperty(aQ.prototype, "soundTracks", (0, Kr.g)("Scene", "soundTracks")), Object.getOwnPropertyDescriptor(aQ.prototype, "audioEnabled") || Object.defineProperty(aQ.prototype, "audioEnabled", (0, Kr.g)("Scene", "audioEnabled")), Object.getOwnPropertyDescriptor(aQ.prototype, "headphone") || Object.defineProperty(aQ.prototype, "headphone", (0, Kr.g)("Scene", "headphone")), Object.getOwnPropertyDescriptor(aQ.prototype, "audioListenerPositionProvider") || Object.defineProperty(aQ.prototype, "audioListenerPositionProvider", (0, Kr.g)("Scene", "audioListenerPositionProvider")), Object.getOwnPropertyDescriptor(aQ.prototype, "audioListenerRotationProvider") || Object.defineProperty(aQ.prototype, "audioListenerRotationProvider", (0, Kr.g)("Scene", "audioListenerRotationProvider")), Object.getOwnPropertyDescriptor(aQ.prototype, "audioPositioningRefreshRate") || Object.defineProperty(aQ.prototype, "audioPositioningRefreshRate", (0, Kr.g)("Scene", "audioPositioningRefreshRate")), Object.getOwnPropertyDescriptor(aQ.prototype, "selectionOctree") || Object.defineProperty(aQ.prototype, "selectionOctree", (0, Kr.g)("Scene", "selectionOctree")), Object.getOwnPropertyDescriptor(aQ.prototype, "debugLayer") || Object.defineProperty(aQ.prototype, "debugLayer", (0, Kr.g)("Scene", "debugLayer")), Object.getOwnPropertyDescriptor(aQ.prototype, "gamepadManager") || Object.defineProperty(aQ.prototype, "gamepadManager", (0, Kr.g)("Scene", "gamepadManager")), Object.getOwnPropertyDescriptor(aQ.prototype, "simplificationQueue") || Object.defineProperty(aQ.prototype, "simplificationQueue", (0, Kr.g)("Scene", "simplificationQueue")), Object.getOwnPropertyDescriptor(aQ.prototype, "onBeforePhysicsObservable") || Object.defineProperty(aQ.prototype, "onBeforePhysicsObservable", (0, Kr.g)("Scene", "onBeforePhysicsObservable")), Object.getOwnPropertyDescriptor(aQ.prototype, "onAfterPhysicsObservable") || Object.defineProperty(aQ.prototype, "onAfterPhysicsObservable", (0, Kr.g)("Scene", "onAfterPhysicsObservable")), Object.getOwnPropertyDescriptor(aQ.prototype, "reflectionProbes") || Object.defineProperty(aQ.prototype, "reflectionProbes", (0, Kr.g)("Scene", "reflectionProbes")), Object.getOwnPropertyDescriptor(aQ.prototype, "forceShowBoundingBoxes") || Object.defineProperty(aQ.prototype, "forceShowBoundingBoxes", (0, Kr.g)("Scene", "forceShowBoundingBoxes")), Object.getOwnPropertyDescriptor(aQ.prototype, "depthPeelingRenderer") || Object.defineProperty(aQ.prototype, "depthPeelingRenderer", (0, Kr.g)("Scene", "depthPeelingRenderer")), Object.getOwnPropertyDescriptor(aQ.prototype, "useOrderIndependentTransparency") || Object.defineProperty(aQ.prototype, "useOrderIndependentTransparency", (0, Kr.g)("Scene", "useOrderIndependentTransparency")), Object.getOwnPropertyDescriptor(aQ.prototype, "fluidRenderer") || Object.defineProperty(aQ.prototype, "fluidRenderer", (0, Kr.g)("Scene", "fluidRenderer")), Object.getOwnPropertyDescriptor(aQ.prototype, "geometryBufferRenderer") || Object.defineProperty(aQ.prototype, "geometryBufferRenderer", (0, Kr.g)("Scene", "geometryBufferRenderer")), Object.getOwnPropertyDescriptor(aQ.prototype, "iblCdfGenerator") || Object.defineProperty(aQ.prototype, "iblCdfGenerator", (0, Kr.g)("Scene", "iblCdfGenerator")), Object.getOwnPropertyDescriptor(aQ.prototype, "prePassRenderer") || Object.defineProperty(aQ.prototype, "prePassRenderer", (0, Kr.g)("Scene", "prePassRenderer")), Object.getOwnPropertyDescriptor(aQ.prototype, "subSurfaceConfiguration") || Object.defineProperty(aQ.prototype, "subSurfaceConfiguration", (0, Kr.g)("Scene", "subSurfaceConfiguration")), Object.getOwnPropertyDescriptor(aQ.prototype, "spriteManagers") || Object.defineProperty(aQ.prototype, "spriteManagers", (0, Kr.g)("Scene", "spriteManagers")), Object.getOwnPropertyDescriptor(aQ.prototype, "onBeforeSpritesRenderingObservable") || Object.defineProperty(aQ.prototype, "onBeforeSpritesRenderingObservable", (0, Kr.g)("Scene", "onBeforeSpritesRenderingObservable")), Object.getOwnPropertyDescriptor(aQ.prototype, "onAfterSpritesRenderingObservable") || Object.defineProperty(aQ.prototype, "onAfterSpritesRenderingObservable", (0, Kr.g)("Scene", "onAfterSpritesRenderingObservable"))
  },
  42020: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      b: () => Zr,
      f: () => Wr
    });
    class Zr {}
    Zr.NAME_EFFECTLAYER = "EffectLayer", Zr.NAME_LAYER = "Layer", Zr.NAME_LENSFLARESYSTEM = "LensFlareSystem", Zr.NAME_BOUNDINGBOXRENDERER = "BoundingBoxRenderer", Zr.NAME_PARTICLESYSTEM = "ParticleSystem", Zr.NAME_GAMEPAD = "Gamepad", Zr.NAME_SIMPLIFICATIONQUEUE = "SimplificationQueue", Zr.NAME_GEOMETRYBUFFERRENDERER = "GeometryBufferRenderer", Zr.NAME_PREPASSRENDERER = "PrePassRenderer", Zr.NAME_DEPTHRENDERER = "DepthRenderer", Zr.NAME_DEPTHPEELINGRENDERER = "DepthPeelingRenderer", Zr.NAME_POSTPROCESSRENDERPIPELINEMANAGER = "PostProcessRenderPipelineManager", Zr.NAME_SPRITE = "Sprite", Zr.NAME_SUBSURFACE = "SubSurface", Zr.NAME_OUTLINERENDERER = "Outline", Zr.NAME_PROCEDURALTEXTURE = "ProceduralTexture", Zr.NAME_SHADOWGENERATOR = "ShadowGenerator", Zr.NAME_OCTREE = "qWr", Zr.NAME_PHYSICSENGINE = "PhysicsEngine", Zr.NAME_AUDIO = "Audio", Zr.NAME_FLUIDRENDERER = "FluidRenderer", Zr.NAME_IBLCDFGENERATOR = "iblCDFGenerator", Zr.NAME_CLUSTEREDLIGHTING = "ClusteredLighting", Zr.STEP_ISREADYFORMESH_EFFECTLAYER = 0, Zr.STEP_ISREADYFORMESH_DEPTHRENDERER = 1, Zr.STEP_BEFOREEVALUATEACTIVEMESH_BOUNDINGBOXRENDERER = 0, Zr.STEP_EVALUATESUBMESH_BOUNDINGBOXRENDERER = 0, Zr.STEP_PREACTIVEMESH_BOUNDINGBOXRENDERER = 0, Zr.STEP_CAMERADRAWRENDERTARGET_EFFECTLAYER = 1, Zr.STEP_BEFORECAMERADRAW_PREPASS = 0, Zr.STEP_BEFORECAMERADRAW_EFFECTLAYER = 1, Zr.STEP_BEFORECAMERADRAW_LAYER = 2, Zr.STEP_BEFORERENDERTARGETDRAW_PREPASS = 0, Zr.STEP_BEFORERENDERTARGETDRAW_LAYER = 1, Zr.STEP_BEFORERENDERINGMESH_PREPASS = 0, Zr.STEP_BEFORERENDERINGMESH_OUTLINE = 1, Zr.STEP_AFTERRENDERINGMESH_PREPASS = 0, Zr.STEP_AFTERRENDERINGMESH_OUTLINE = 1, Zr.STEP_AFTERRENDERINGGROUPDRAW_EFFECTLAYER_DRAW = 0, Zr.STEP_AFTERRENDERINGGROUPDRAW_BOUNDINGBOXRENDERER = 1, Zr.STEP_BEFORECAMERAUPDATE_SIMPLIFICATIONQUEUE = 0, Zr.STEP_BEFORECLEAR_PROCEDURALTEXTURE = 0, Zr.STEP_BEFORECLEAR_PREPASS = 1, Zr.STEP_BEFORERENDERTARGETCLEAR_PREPASS = 0, Zr.STEP_AFTERRENDERTARGETDRAW_PREPASS = 0, Zr.STEP_AFTERRENDERTARGETDRAW_LAYER = 1, Zr.STEP_AFTERCAMERADRAW_PREPASS = 0, Zr.STEP_AFTERCAMERADRAW_EFFECTLAYER = 1, Zr.STEP_AFTERCAMERADRAW_LENSFLARESYSTEM = 2, Zr.STEP_AFTERCAMERADRAW_EFFECTLAYER_DRAW = 3, Zr.STEP_AFTERCAMERADRAW_LAYER = 4, Zr.STEP_AFTERCAMERADRAW_FLUIDRENDERER = 5, Zr.STEP_AFTERCAMERAPOSTPROCESS_LAYER = 0, Zr.STEP_AFTERRENDERTARGETPOSTPROCESS_LAYER = 0, Zr.STEP_AFTERRENDER_AUDIO = 0, Zr.STEP_GATHERRENDERTARGETS_DEPTHRENDERER = 0, Zr.STEP_GATHERRENDERTARGETS_GEOMETRYBUFFERRENDERER = 1, Zr.STEP_GATHERRENDERTARGETS_SHADOWGENERATOR = 2, Zr.STEP_GATHERRENDERTARGETS_POSTPROCESSRENDERPIPELINEMANAGER = 3, Zr.STEP_GATHERACTIVECAMERARENDERTARGETS_DEPTHRENDERER = 0, Zr.STEP_GATHERACTIVECAMERARENDERTARGETS_FLUIDRENDERER = 1, Zr.STEP_GATHERACTIVECAMERARENDERTARGETS_CLUSTEREDLIGHTING = 2, Zr.STEP_POINTERMOVE_SPRITE = 0, Zr.STEP_POINTERDOWN_SPRITE = 0, Zr.STEP_POINTERUP_SPRITE = 0;
    class Wr extends Array {
      constructor(rr) {
        super(...rr)
      }
      static Create() {
        return Object.create(Wr.prototype)
      }
      registerStep(rr, Sr, Qr) {
        let Zr, Wr = 0;
        for (; Wr < this.length; Wr++) {
          if (Zr = this[Wr].index, rr < Zr) break
        }
        this.splice(Wr, 0, {
          index: rr,
          component: Sr,
          action: Qr.bind(Sr)
        })
      }
      clear() {
        this.length = 0
      }
    }
  },
  41872: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      e: () => jr,
      i: () => Ir,
      k: () => Zr,
      m: () => Wr,
      q: () => ar
    });

    function Zr(rr, Sr, Qr, Zr, Wr, ar) {
      function jr(rr) {
        if (void 0 !== rr && "function" !== typeof rr) throw new TypeError("Function expected");
        return rr
      }
      for (var Ir, fr = Zr.kind, Er = "getter" === fr ? "get" : "setter" === fr ? "set" : "value", pr = !Sr && rr ? Zr.static ? rr : rr.prototype : null, xr = Sr || (pr ? Object.getOwnPropertyDescriptor(pr, Zr.name) : {}), mr = !1, Nr = Qr.length - 1; Nr >= 0; Nr--) {
        var Ur = {};
        for (var tr in Zr) Ur[tr] = "access" === tr ? {} : Zr[tr];
        for (var tr in Zr.access) Ur.access[tr] = Zr.access[tr];
        Ur.addInitializer = function(rr) {
          if (mr) throw new TypeError("Cannot add initializers after decoration has completed");
          ar.push(jr(rr || null))
        };
        var hr = (0, Qr[Nr])("accessor" === fr ? {
          get: xr.get,
          set: xr.set
        } : xr[Er], Ur);
        if ("accessor" === fr) {
          if (void 0 === hr) continue;
          if (null === hr || "object" !== typeof hr) throw new TypeError("Object expected");
          (Ir = jr(hr.get)) && (xr.get = Ir), (Ir = jr(hr.set)) && (xr.set = Ir), (Ir = jr(hr.init)) && Wr.unshift(Ir)
        } else(Ir = jr(hr)) && ("field" === fr ? Wr.unshift(Ir) : xr[Er] = Ir)
      }
      pr && Object.defineProperty(pr, Zr.name, xr), mr = !0
    }

    function Wr(rr, Sr, Qr) {
      for (var Zr = arguments.length > 2, Wr = 0; Wr < Sr.length; Wr++) Qr = Zr ? Sr[Wr].call(rr, Qr) : Sr[Wr].call(rr);
      return Zr ? Qr : void 0
    }

    function ar(rr, Sr, Qr) {
      return "symbol" === typeof Sr && (Sr = Sr.description ? "[".concat(Sr.description, "]") : ""), Object.defineProperty(rr, "name", {
        configurable: !0,
        value: Qr ? "".concat(Qr, " ", Sr) : Sr
      })
    }
    Object.create;
    Object.create;

    function jr(rr, Sr, Qr, Zr) {
      if ("a" === Qr && !Zr) throw new TypeError("Private accessor was defined without a getter");
      if ("function" === typeof Sr ? rr !== Sr || !Zr : !Sr.has(rr)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return "m" === Qr ? Zr : "a" === Qr ? Zr.call(rr) : Zr ? Zr.value : Sr.get(rr)
    }

    function Ir(rr, Sr, Qr, Zr, Wr) {
      if ("m" === Zr) throw new TypeError("Private method is not writable");
      if ("a" === Zr && !Wr) throw new TypeError("Private accessor was defined without a setter");
      if ("function" === typeof Sr ? rr !== Sr || !Wr : !Sr.has(rr)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return "a" === Zr ? Wr.call(rr, Qr) : Wr ? Wr.value = Qr : Sr.set(rr, Qr), Qr
    }
    "function" === typeof SuppressedError && SuppressedError
  }
};
Object.freeze(modules);
for (const rr in modules) Object.freeze(modules[rr]);