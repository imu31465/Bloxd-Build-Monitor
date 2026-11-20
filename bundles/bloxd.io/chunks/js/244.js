export const id = 244;
export const ids = [244];
export const modules = {
  39609: (bb, ub, hb) => {
    hb.d(ub, {
      b: () => Lb,
      f: () => pb,
      h: () => Sb,
      i: () => Yb
    });
    var Bb = hb(39382),
      Ob = hb(38302),
      Gb = hb(39533),
      Ub = hb(39432);
    class Lb {
      get tC() {
        return this._isDisposed
      }
      constructor(bb, ub, hb) {
        let Ob = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          Gb = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          Lb = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
          Yb = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
          Sb = arguments.length > 7 ? arguments[7] : void 0,
          ab = arguments.length > 8 ? arguments[8] : void 0;
        this._isAlreadyOwned = !1, this._isDisposed = !1, (0, Ub.c)(), bb && bb.ZN ? this._engine = bb.ZN().UX() : this._engine = bb, this._updatable = hb, this._instanced = Lb, this._divisor = Sb || 1, this._label = ab, ub instanceof Bb.e ? (this._data = null, this._buffer = ub) : (this._data = ub, this._buffer = null), this.byteStride = Yb ? Ob : Ob * Float32Array.BYTES_PER_ELEMENT, Gb || this.create()
      }
      createVertexBuffer(bb, ub, hb, Bb, Ob) {
        let Gb = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
          Ub = arguments.length > 6 ? arguments[6] : void 0;
        const Lb = Gb ? ub : ub * Float32Array.BYTES_PER_ELEMENT,
          Sb = Bb ? Gb ? Bb : Bb * Float32Array.BYTES_PER_ELEMENT : this.byteStride;
        return new Yb(this._engine, this, bb, this._updatable, !0, Sb, void 0 === Ob ? this._instanced : Ob, Lb, hb, void 0, void 0, !0, this._divisor || Ub)
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
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        !bb && this._buffer || (bb = bb || this._data, bb && (this._buffer ? this._updatable && (this._engine.updateDynamicVertexBuffer(this._buffer, bb), this._data = bb) : this._updatable ? (this._buffer = this._engine.createDynamicVertexBuffer(bb, this._label), this._data = bb) : this._buffer = this._engine.createVertexBuffer(bb, void 0, this._label)))
      }
      _rebuild() {
        if (this._data) this._buffer = null, this.create(this._data);
        else {
          if (!this._buffer) return;
          if (this._buffer.LH > 0) return void(this._updatable ? this._buffer = this._engine.createDynamicVertexBuffer(this._buffer.LH, this._label) : this._buffer = this._engine.createVertexBuffer(this._buffer.LH, void 0, this._label));
          Ob.b.Warn(`Missing data for buffer "${this._label}" ${this._buffer?"(uniqueId: "+this._buffer.uniqueId+")":""}. Buffer reconstruction failed.`), this._buffer = null
        }
      }
      update(bb) {
        this.create(bb)
      }
      updateDirectly(bb, ub, hb) {
        let Bb = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        this._buffer && this._updatable && (this._engine.updateDynamicVertexBuffer(this._buffer, bb, Bb ? ub : ub * Float32Array.BYTES_PER_ELEMENT, hb ? hb * this.byteStride : void 0), this._data = 0 === ub && void 0 === hb ? bb : null)
      }
      _increaseReferences() {
        this._buffer && (this._isAlreadyOwned ? this._buffer.references++ : this._isAlreadyOwned = !0)
      }
      dispose() {
        this._buffer && this._engine._releaseBuffer(this._buffer) && (this._isDisposed = !0, this._data = null, this._buffer = null)
      }
    }
    class Yb {
      get tC() {
        return this._isDisposed
      }
      get instanceDivisor() {
        return this._instanceDivisor
      }
      set instanceDivisor(bb) {
        const ub = 0 != bb;
        this._instanceDivisor = bb, ub !== this._instanced && (this._instanced = ub, this._computeHashCode())
      }
      get _maxVerticesCount() {
        const bb = this.getData();
        return bb ? Array.isArray(bb) ? bb.length / (this.byteStride / 4) - this.byteOffset / 4 : (bb.byteLength - this.byteOffset) / this.byteStride : 0
      }
      constructor(bb, ub, hb, Bb, Ob, Ub, Hb, wb, Zb, Xb) {
        let pb, ob = arguments.length > 10 && void 0 !== arguments[10] && arguments[10],
          Ab = arguments.length > 11 && void 0 !== arguments[11] && arguments[11],
          lb = arguments.length > 12 && void 0 !== arguments[12] ? arguments[12] : 1,
          Kb = arguments.length > 13 && void 0 !== arguments[13] && arguments[13];
        if (this._isDisposed = !1, this.engine = bb, "object" === typeof Bb && null !== Bb ? (pb = Bb.updatable ?? !1, Ob = Bb.postponeInternalCreation, Ub = Bb.stride, Hb = Bb.instanced, wb = Bb.offset, Zb = Bb.size, Xb = Bb.type, ob = Bb.normalized ?? !1, Ab = Bb.useBytes ?? !1, lb = Bb.divisor ?? 1, Kb = Bb.takeBufferOwnership ?? !1, this._label = Bb.label) : pb = !!Bb, ub instanceof Lb ? (this._buffer = ub, this._ownsBuffer = Kb) : (this._buffer = new Lb(bb, ub, pb, Ub, Ob, Hb, Ab, lb, this._label), this._ownsBuffer = !0), this.uniqueId = Yb._Counter++, this._kind = hb, void 0 === Xb) {
          const bb = this.getData();
          this.type = bb ? ab(bb) : Yb.FLOAT
        } else this.type = Xb;
        const Wb = (0, Gb.r)(this.type);
        Ab ? (this._size = Zb || (Ub ? Ub / Wb : Sb(hb)), this.byteStride = Ub || this._buffer.byteStride || this._size * Wb, this.byteOffset = wb || 0) : (this._size = Zb || Ub || Sb(hb), this.byteStride = Ub ? Ub * Wb : this._buffer.byteStride || this._size * Wb, this.byteOffset = (wb || 0) * Wb), this.normalized = ob, this._instanced = void 0 !== Hb && Hb, this._instanceDivisor = Hb ? lb : 0, this._alignBuffer(), this._computeHashCode()
      }
      static _GetTypeHashIndex(bb) {
        switch (bb) {
          case Yb.BYTE:
            return 0;
          case Yb.UNSIGNED_BYTE:
            return 1;
          case Yb.SHORT:
            return 2;
          case Yb.UNSIGNED_SHORT:
            return 3;
          case Yb.INT:
            return 4;
          case Yb.UNSIGNED_INT:
            return 5;
          case Yb.FLOAT:
            return 6;
          case Yb.HALF_FLOAT:
            return 7;
          default:
            throw new Error(`Invalid vertex buffer type '${bb}'`)
        }
      }
      _computeHashCode() {
        this.hashCode = (Yb._GetTypeHashIndex(this.type) | 0) + ((this.normalized ? 1 : 0) << 3) + (this._size - 1 << 4) + ((this._instanced ? 1 : 0) << 6) + (this.byteStride << 12)
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
      getFloatData(bb, ub) {
        const hb = this.getData();
        return hb ? (0, Gb.o)(hb, this._size, this.type, this.byteOffset, this.byteStride, this.normalized, bb, ub) : null
      }
      getBuffer() {
        return this._buffer.getBuffer()
      }
      getWrapperBuffer() {
        return this._buffer
      }
      getStrideSize() {
        return this.byteStride / (0, Gb.r)(this.type)
      }
      Ahb() {
        return this.byteOffset / (0, Gb.r)(this.type)
      }
      getSize() {
        return arguments.length > 0 && void 0 !== arguments[0] && arguments[0] ? this._size * (0, Gb.r)(this.type) : this._size
      }
      getIsInstanced() {
        return this._instanced
      }
      getInstanceDivisor() {
        return this._instanceDivisor
      }
      create(bb) {
        this._buffer.create(bb), this._alignBuffer()
      }
      update(bb) {
        this._buffer.update(bb), this._alignBuffer()
      }
      updateDirectly(bb, ub) {
        let hb = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this._buffer.updateDirectly(bb, ub, void 0, hb), this._alignBuffer()
      }
      dispose() {
        this._ownsBuffer && this._buffer.dispose(), this._isDisposed = !0
      }
      forEach(bb, ub) {
        (0, Gb.j)(this._buffer.getData(), this.byteOffset, this.byteStride, this._size, this.type, bb, this.normalized, ((bb, hb) => {
          for (let Bb = 0; Bb < this._size; Bb++) ub(bb[Bb], hb + Bb)
        }))
      }
      _alignBuffer() {}
    }

    function Sb(bb) {
      switch (bb) {
        case Yb.UVKind:
        case Yb.UV2Kind:
        case Yb.UV3Kind:
        case Yb.UV4Kind:
        case Yb.UV5Kind:
        case Yb.UV6Kind:
          return 2;
        case Yb.NormalKind:
        case Yb.PositionKind:
          return 3;
        case Yb.ColorKind:
        case Yb.ColorInstanceKind:
        case Yb.MatricesIndicesKind:
        case Yb.MatricesIndicesExtraKind:
        case Yb.MatricesWeightsKind:
        case Yb.MatricesWeightsExtraKind:
        case Yb.TangentKind:
          return 4;
        default:
          throw new Error("Invalid kind '" + bb + "'")
      }
    }

    function ab(bb) {
      return bb instanceof Int8Array ? Yb.BYTE : bb instanceof Uint8Array ? Yb.UNSIGNED_BYTE : bb instanceof Int16Array ? Yb.SHORT : bb instanceof Uint16Array ? Yb.UNSIGNED_SHORT : bb instanceof Int32Array ? Yb.INT : bb instanceof Uint32Array ? Yb.UNSIGNED_INT : Yb.FLOAT
    }

    function Hb(bb) {
      return (0, Gb.r)(bb)
    }

    function wb(bb, ub, hb, Bb, Ob, Ub, Lb, Yb) {
      (0, Gb.j)(bb, ub, hb, Bb, Ob, Ub, Lb, ((bb, ub) => {
        for (let hb = 0; hb < Bb; hb++) Yb(bb[hb], ub + hb)
      }))
    }

    function Zb(bb, ub, hb, Bb, Ob, Ub, Lb, Yb) {
      return (0, Gb.o)(bb, ub, hb, Bb, Ob, Ub, Lb, Yb)
    }
    Yb._Counter = 0, Yb.BYTE = 5120, Yb.UNSIGNED_BYTE = 5121, Yb.SHORT = 5122, Yb.UNSIGNED_SHORT = 5123, Yb.INT = 5124, Yb.UNSIGNED_INT = 5125, Yb.FLOAT = 5126, Yb.HALF_FLOAT = 5131, Yb.PositionKind = "position", Yb.NormalKind = "normal", Yb.TangentKind = "tangent", Yb.UVKind = "uv", Yb.UV2Kind = "uv2", Yb.UV3Kind = "uv3", Yb.UV4Kind = "uv4", Yb.UV5Kind = "uv5", Yb.UV6Kind = "uv6", Yb.ColorKind = "color", Yb.ColorInstanceKind = "instanceColor", Yb.MatricesIndicesKind = "matricesIndices", Yb.MatricesWeightsKind = "matricesWeights", Yb.MatricesIndicesExtraKind = "matricesIndicesExtra", Yb.MatricesWeightsExtraKind = "matricesWeightsExtra";
    let Xb = !1;

    function pb() {
      Xb || (Xb = !0, Yb.DeduceStride = Sb, Yb.GetDataType = ab, Yb.GetTypeByteLength = Hb, Yb.ForEach = wb, Yb.GetFloatData = Zb)
    }
  },
  39382: (bb, ub, hb) => {
    hb.d(ub, {
      e: () => Bb
    });
    class Bb {
      get underlyingResource() {
        return null
      }
      constructor() {
        this.references = 0, this.LH = 0, this.is32Bits = !1, this.uniqueId = Bb._Counter++
      }
    }
    Bb._Counter = 0
  },
  39603: (bb, ub, hb) => {
    hb.d(ub, {
      d: () => Gb
    });
    var Bb = hb(36727),
      Ob = hb(39609);
    class Gb {
      constructor() {
        this.hit = !1, this.distance = 0, this.pickedPoint = null, this.pickedMesh = null, this.bu = 0, this.bv = 0, this.faceId = -1, this.subMeshFaceId = -1, this.subMeshId = 0, this.pickedSprite = null, this.thinInstanceIndex = -1, this.ray = null, this.originMesh = null, this.aimTransform = null, this.gripTransform = null
      }
      getNormal() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          ub = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (!this.pickedMesh || ub && !this.pickedMesh.isVerticesDataPresent(Ob.i.NormalKind)) return null;
        let hb, Gb = this.pickedMesh.XBb();
        0 === Gb?.length && (Gb = null);
        const Ub = Bb.i.YX[0],
          Lb = Bb.i.YX[1],
          Yb = Bb.i.YX[2];
        if (ub) {
          const bb = this.pickedMesh.getVerticesData(Ob.i.NormalKind);
          let ub = Gb ? Bb.q.FromArrayToRef(bb, 3 * Gb[3 * this.faceId], Ub) : Ub.M_(bb[3 * this.faceId * 3], bb[3 * this.faceId * 3 + 1], bb[3 * this.faceId * 3 + 2]),
            Sb = Gb ? Bb.q.FromArrayToRef(bb, 3 * Gb[3 * this.faceId + 1], Lb) : Lb.M_(bb[3 * (3 * this.faceId + 1)], bb[3 * (3 * this.faceId + 1) + 1], bb[3 * (3 * this.faceId + 1) + 2]),
            ab = Gb ? Bb.q.FromArrayToRef(bb, 3 * Gb[3 * this.faceId + 2], Yb) : Yb.M_(bb[3 * (3 * this.faceId + 2)], bb[3 * (3 * this.faceId + 2) + 1], bb[3 * (3 * this.faceId + 2) + 2]);
          ub = ub.scale(this.bu), Sb = Sb.scale(this.bv), ab = ab.scale(1 - this.bu - this.bv), hb = new Bb.q(ub.x + Sb.x + ab.x, ub.y + Sb.y + ab.y, ub.z + Sb.z + ab.z)
        } else {
          const bb = this.pickedMesh.getVerticesData(Ob.i.PositionKind),
            ub = Gb ? Bb.q.FromArrayToRef(bb, 3 * Gb[3 * this.faceId], Ub) : Ub.M_(bb[3 * this.faceId * 3], bb[3 * this.faceId * 3 + 1], bb[3 * this.faceId * 3 + 2]),
            Sb = Gb ? Bb.q.FromArrayToRef(bb, 3 * Gb[3 * this.faceId + 1], Lb) : Lb.M_(bb[3 * (3 * this.faceId + 1)], bb[3 * (3 * this.faceId + 1) + 1], bb[3 * (3 * this.faceId + 1) + 2]),
            ab = Gb ? Bb.q.FromArrayToRef(bb, 3 * Gb[3 * this.faceId + 2], Yb) : Yb.M_(bb[3 * (3 * this.faceId + 2)], bb[3 * (3 * this.faceId + 2) + 1], bb[3 * (3 * this.faceId + 2) + 2]),
            Hb = ub.subtract(Sb),
            wb = ab.subtract(Sb);
          hb = Bb.q.Cross(Hb, wb)
        }
        const Sb = (bb, ub) => {
          if (-1 !== this.thinInstanceIndex) {
            const hb = bb._thinInstanceDataStorage.matrixData,
              Ob = this.thinInstanceIndex << 4;
            if (hb && hb.length > Ob) {
              const bb = Bb.i.Matrix[0];
              Bb.d.FromArrayToRef(hb, Ob, bb), Bb.q.TransformNormalToRef(ub, bb, ub)
            }
          }
          let hb = bb.getWorldMatrix();
          bb.nonUniformScaling && (Bb.i.Matrix[0].mD(hb), hb = Bb.i.Matrix[0], hb.setTranslationFromFloats(0, 0, 0), hb.invert(), hb.transposeToRef(Bb.i.Matrix[1]), hb = Bb.i.Matrix[1]), Bb.q.TransformNormalToRef(ub, hb, ub)
        };
        if (bb && Sb(this.pickedMesh, hb), this.ray) {
          const ub = Bb.i.YX[0].mD(hb);
          bb || Sb(this.pickedMesh, ub), Bb.q.Dot(ub, this.ray.direction) > 0 && hb.negateInPlace()
        }
        return hb.normalize(), hb
      }
      getTextureCoordinates() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ob.i.UVKind;
        if (!this.pickedMesh || !this.pickedMesh.isVerticesDataPresent(bb)) return null;
        const ub = this.pickedMesh.XBb();
        if (!ub) return null;
        const hb = this.pickedMesh.getVerticesData(bb);
        if (!hb) return null;
        let Gb = Bb.m.FromArray(hb, 2 * ub[3 * this.faceId]),
          Ub = Bb.m.FromArray(hb, 2 * ub[3 * this.faceId + 1]),
          Lb = Bb.m.FromArray(hb, 2 * ub[3 * this.faceId + 2]);
        return Gb = Gb.scale(this.bu), Ub = Ub.scale(this.bv), Lb = Lb.scale(1 - this.bu - this.bv), new Bb.m(Gb.x + Ub.x + Lb.x, Gb.y + Ub.y + Lb.y)
      }
    }
  },
  39432: (bb, ub, hb) => {
    hb.d(ub, {
      c: () => Gb
    });
    var Bb = hb(39296);
    let Ob = !1;

    function Gb() {
      Ob || (Ob = !0, Bb.ThinEngine.prototype.updateDynamicIndexBuffer = function(bb, ub) {
        let hb;
        this._currentBoundBuffer[this._gl.ELEMENT_ARRAY_BUFFER] = null, this.bindIndexBuffer(bb), hb = bb.is32Bits ? ub instanceof Uint32Array ? ub : new Uint32Array(ub) : ub instanceof Uint16Array ? ub : new Uint16Array(ub), this._gl.bufferData(this._gl.ELEMENT_ARRAY_BUFFER, hb, this._gl.DYNAMIC_DRAW), this._resetIndexBufferBinding()
      }, Bb.ThinEngine.prototype.updateDynamicVertexBuffer = function(bb, ub, hb, Bb) {
        this.bindArrayBuffer(bb), void 0 === hb && (hb = 0);
        const Ob = ub.byteLength || ub.length;
        void 0 === Bb || Bb >= Ob && 0 === hb ? ub instanceof Array ? this._gl.bufferSubData(this._gl.ARRAY_BUFFER, hb, new Float32Array(ub)) : this._gl.bufferSubData(this._gl.ARRAY_BUFFER, hb, ub) : ub instanceof Array ? this._gl.bufferSubData(this._gl.ARRAY_BUFFER, hb, new Float32Array(ub).subarray(0, Bb / 4)) : (ub = ArrayBuffer.isView(ub) ? new Uint8Array(ub.buffer, ub.byteOffset, Bb) : new Uint8Array(ub, 0, Bb), this._gl.bufferSubData(this._gl.ARRAY_BUFFER, hb, ub)), this._resetVertexBufferBinding()
      })
    }
  },
  39394: (bb, ub, hb) => {
    hb.d(ub, {
      c: () => Bb
    });
    class Bb {
      get underlyingResource() {
        return this._webGLTexture
      }
      constructor() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          ub = arguments.length > 1 ? arguments[1] : void 0;
        if (this._MSAARenderBuffers = null, this._context = ub, !bb && (bb = ub.createTexture(), !bb)) throw new Error("Unable to create webGL texture");
        this.set(bb)
      }
      setUsage() {}
      set(bb) {
        this._webGLTexture = bb
      }
      reset() {
        this._webGLTexture = null, this._MSAARenderBuffers = null
      }
      addMSAARenderBuffer(bb) {
        this._MSAARenderBuffers || (this._MSAARenderBuffers = []), this._MSAARenderBuffers.push(bb)
      }
      releaseMSAARenderBuffers() {
        if (this._MSAARenderBuffers) {
          for (const bb of this._MSAARenderBuffers) this._context.deleteRenderbuffer(bb);
          this._MSAARenderBuffers = null
        }
      }
      getMSAARenderBuffer() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return this._MSAARenderBuffers?.[bb] ?? null
      }
      release() {
        this.releaseMSAARenderBuffers(), this._webGLTexture && this._context.deleteTexture(this._webGLTexture), this.reset()
      }
    }
  },
  39350: (bb, ub, hb) => {
    hb.d(ub, {
      d: () => lb
    });
    var Bb = hb(36753),
      Ob = hb(39302),
      Gb = hb(36748),
      Ub = hb(38302),
      Lb = hb(36739),
      Yb = hb(39352);
    class Sb {
      constructor() {
        let bb = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        this._isDepthTestDirty = !1, this._isDepthMaskDirty = !1, this._isDepthFuncDirty = !1, this._isCullFaceDirty = !1, this._isCullDirty = !1, this._isZOffsetDirty = !1, this._isFrontFaceDirty = !1, bb && this.reset()
      }
      get isDirty() {
        return this._isDepthFuncDirty || this._isDepthTestDirty || this._isDepthMaskDirty || this._isCullFaceDirty || this._isCullDirty || this._isZOffsetDirty || this._isFrontFaceDirty
      }
      get zOffset() {
        return this._zOffset
      }
      set zOffset(bb) {
        this._zOffset !== bb && (this._zOffset = bb, this._isZOffsetDirty = !0)
      }
      get zOffsetUnits() {
        return this._zOffsetUnits
      }
      set zOffsetUnits(bb) {
        this._zOffsetUnits !== bb && (this._zOffsetUnits = bb, this._isZOffsetDirty = !0)
      }
      get cullFace() {
        return this._cullFace
      }
      set cullFace(bb) {
        this._cullFace !== bb && (this._cullFace = bb, this._isCullFaceDirty = !0)
      }
      get cull() {
        return this._cull
      }
      set cull(bb) {
        this._cull !== bb && (this._cull = bb, this._isCullDirty = !0)
      }
      get depthFunc() {
        return this._depthFunc
      }
      set depthFunc(bb) {
        this._depthFunc !== bb && (this._depthFunc = bb, this._isDepthFuncDirty = !0)
      }
      get depthMask() {
        return this._depthMask
      }
      set depthMask(bb) {
        this._depthMask !== bb && (this._depthMask = bb, this._isDepthMaskDirty = !0)
      }
      get depthTest() {
        return this._depthTest
      }
      set depthTest(bb) {
        this._depthTest !== bb && (this._depthTest = bb, this._isDepthTestDirty = !0)
      }
      get frontFace() {
        return this._frontFace
      }
      set frontFace(bb) {
        this._frontFace !== bb && (this._frontFace = bb, this._isFrontFaceDirty = !0)
      }
      reset() {
        this._depthMask = !0, this._depthTest = !0, this._depthFunc = null, this._cullFace = null, this._cull = null, this._zOffset = 0, this._zOffsetUnits = 0, this._frontFace = null, this._isDepthTestDirty = !0, this._isDepthMaskDirty = !0, this._isDepthFuncDirty = !1, this._isCullFaceDirty = !1, this._isCullDirty = !1, this._isZOffsetDirty = !0, this._isFrontFaceDirty = !1
      }
      apply(bb) {
        this.isDirty && (this._isCullDirty && (this.cull ? bb.enable(bb.CULL_FACE) : bb.disable(bb.CULL_FACE), this._isCullDirty = !1), this._isCullFaceDirty && (bb.cullFace(this.cullFace), this._isCullFaceDirty = !1), this._isDepthMaskDirty && (bb.depthMask(this.depthMask), this._isDepthMaskDirty = !1), this._isDepthTestDirty && (this.depthTest ? bb.enable(bb.DEPTH_TEST) : bb.disable(bb.DEPTH_TEST), this._isDepthTestDirty = !1), this._isDepthFuncDirty && (bb.depthFunc(this.depthFunc), this._isDepthFuncDirty = !1), this._isZOffsetDirty && (this.zOffset || this.zOffsetUnits ? (bb.enable(bb.POLYGON_OFFSET_FILL), bb.polygonOffset(this.zOffset, this.zOffsetUnits)) : bb.disable(bb.POLYGON_OFFSET_FILL), this._isZOffsetDirty = !1), this._isFrontFaceDirty && (bb.frontFace(this.frontFace), this._isFrontFaceDirty = !1))
      }
    }
    class ab {
      get isDirty() {
        return this._isStencilTestDirty || this._isStencilMaskDirty || this._isStencilFuncDirty || this._isStencilOpDirty
      }
      get func() {
        return this._func
      }
      set func(bb) {
        this._func !== bb && (this._func = bb, this._isStencilFuncDirty = !0)
      }
      get backFunc() {
        return this._func
      }
      set backFunc(bb) {
        this._backFunc !== bb && (this._backFunc = bb, this._isStencilFuncDirty = !0)
      }
      get funcRef() {
        return this._funcRef
      }
      set funcRef(bb) {
        this._funcRef !== bb && (this._funcRef = bb, this._isStencilFuncDirty = !0)
      }
      get funcMask() {
        return this._funcMask
      }
      set funcMask(bb) {
        this._funcMask !== bb && (this._funcMask = bb, this._isStencilFuncDirty = !0)
      }
      get opStencilFail() {
        return this._opStencilFail
      }
      set opStencilFail(bb) {
        this._opStencilFail !== bb && (this._opStencilFail = bb, this._isStencilOpDirty = !0)
      }
      get opDepthFail() {
        return this._opDepthFail
      }
      set opDepthFail(bb) {
        this._opDepthFail !== bb && (this._opDepthFail = bb, this._isStencilOpDirty = !0)
      }
      get opStencilDepthPass() {
        return this._opStencilDepthPass
      }
      set opStencilDepthPass(bb) {
        this._opStencilDepthPass !== bb && (this._opStencilDepthPass = bb, this._isStencilOpDirty = !0)
      }
      get backOpStencilFail() {
        return this._backOpStencilFail
      }
      set backOpStencilFail(bb) {
        this._backOpStencilFail !== bb && (this._backOpStencilFail = bb, this._isStencilOpDirty = !0)
      }
      get backOpDepthFail() {
        return this._backOpDepthFail
      }
      set backOpDepthFail(bb) {
        this._backOpDepthFail !== bb && (this._backOpDepthFail = bb, this._isStencilOpDirty = !0)
      }
      get backOpStencilDepthPass() {
        return this._backOpStencilDepthPass
      }
      set backOpStencilDepthPass(bb) {
        this._backOpStencilDepthPass !== bb && (this._backOpStencilDepthPass = bb, this._isStencilOpDirty = !0)
      }
      get mask() {
        return this._mask
      }
      set mask(bb) {
        this._mask !== bb && (this._mask = bb, this._isStencilMaskDirty = !0)
      }
      get enabled() {
        return this._enabled
      }
      set enabled(bb) {
        this._enabled !== bb && (this._enabled = bb, this._isStencilTestDirty = !0)
      }
      constructor() {
        let bb = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        this._isStencilTestDirty = !1, this._isStencilMaskDirty = !1, this._isStencilFuncDirty = !1, this._isStencilOpDirty = !1, this.useStencilGlobalOnly = !1, bb && this.reset()
      }
      reset() {
        this.stencilMaterial = void 0, this.stencilGlobal?.reset(), this._isStencilTestDirty = !0, this._isStencilMaskDirty = !0, this._isStencilFuncDirty = !0, this._isStencilOpDirty = !0
      }
      apply(bb) {
        if (!bb) return;
        const ub = !this.useStencilGlobalOnly && !!this.stencilMaterial?.enabled;
        this.enabled = ub ? this.stencilMaterial.enabled : this.stencilGlobal.enabled, this.func = ub ? this.stencilMaterial.func : this.stencilGlobal.func, this.backFunc = ub ? this.stencilMaterial.backFunc : this.stencilGlobal.backFunc, this.funcRef = ub ? this.stencilMaterial.funcRef : this.stencilGlobal.funcRef, this.funcMask = ub ? this.stencilMaterial.funcMask : this.stencilGlobal.funcMask, this.opStencilFail = ub ? this.stencilMaterial.opStencilFail : this.stencilGlobal.opStencilFail, this.opDepthFail = ub ? this.stencilMaterial.opDepthFail : this.stencilGlobal.opDepthFail, this.opStencilDepthPass = ub ? this.stencilMaterial.opStencilDepthPass : this.stencilGlobal.opStencilDepthPass, this.backOpStencilFail = ub ? this.stencilMaterial.backOpStencilFail : this.stencilGlobal.backOpStencilFail, this.backOpDepthFail = ub ? this.stencilMaterial.backOpDepthFail : this.stencilGlobal.backOpDepthFail, this.backOpStencilDepthPass = ub ? this.stencilMaterial.backOpStencilDepthPass : this.stencilGlobal.backOpStencilDepthPass, this.mask = ub ? this.stencilMaterial.mask : this.stencilGlobal.mask, this.isDirty && (this._isStencilTestDirty && (this.enabled ? bb.enable(bb.STENCIL_TEST) : bb.disable(bb.STENCIL_TEST), this._isStencilTestDirty = !1), this._isStencilMaskDirty && (bb.stencilMask(this.mask), this._isStencilMaskDirty = !1), this._isStencilFuncDirty && (bb.stencilFuncSeparate(bb.FRONT, this.func, this.funcRef, this.funcMask), bb.stencilFuncSeparate(bb.BACK, this.backFunc, this.funcRef, this.funcMask), this._isStencilFuncDirty = !1), this._isStencilOpDirty && (bb.stencilOpSeparate(bb.FRONT, this.opStencilFail, this.opDepthFail, this.opStencilDepthPass), bb.stencilOpSeparate(bb.BACK, this.backOpStencilFail, this.backOpDepthFail, this.backOpStencilDepthPass), this._isStencilOpDirty = !1))
      }
    }
    class Hb {
      constructor() {
        this.reset()
      }
      reset() {
        this.enabled = !1, this.mask = 255, this.funcRef = 1, this.funcMask = 255, this.func = Hb.ALWAYS, this.opStencilFail = Hb.KEEP, this.opDepthFail = Hb.KEEP, this.opStencilDepthPass = Hb.REPLACE, this.backFunc = Hb.ALWAYS, this.backOpStencilFail = Hb.KEEP, this.backOpDepthFail = Hb.KEEP, this.backOpStencilDepthPass = Hb.REPLACE
      }
      get stencilFunc() {
        return this.func
      }
      set stencilFunc(bb) {
        this.func = bb
      }
      get stencilBackFunc() {
        return this.backFunc
      }
      set stencilBackFunc(bb) {
        this.backFunc = bb
      }
      get stencilFuncRef() {
        return this.funcRef
      }
      set stencilFuncRef(bb) {
        this.funcRef = bb
      }
      get stencilFuncMask() {
        return this.funcMask
      }
      set stencilFuncMask(bb) {
        this.funcMask = bb
      }
      get stencilOpStencilFail() {
        return this.opStencilFail
      }
      set stencilOpStencilFail(bb) {
        this.opStencilFail = bb
      }
      get stencilOpDepthFail() {
        return this.opDepthFail
      }
      set stencilOpDepthFail(bb) {
        this.opDepthFail = bb
      }
      get stencilOpStencilDepthPass() {
        return this.opStencilDepthPass
      }
      set stencilOpStencilDepthPass(bb) {
        this.opStencilDepthPass = bb
      }
      get stencilBackOpStencilFail() {
        return this.backOpStencilFail
      }
      set stencilBackOpStencilFail(bb) {
        this.backOpStencilFail = bb
      }
      get stencilBackOpDepthFail() {
        return this.backOpDepthFail
      }
      set stencilBackOpDepthFail(bb) {
        this.backOpDepthFail = bb
      }
      get stencilBackOpStencilDepthPass() {
        return this.backOpStencilDepthPass
      }
      set stencilBackOpStencilDepthPass(bb) {
        this.backOpStencilDepthPass = bb
      }
      get stencilMask() {
        return this.mask
      }
      set stencilMask(bb) {
        this.mask = bb
      }
      get stencilTest() {
        return this.enabled
      }
      set stencilTest(bb) {
        this.enabled = bb
      }
    }
    Hb.ALWAYS = 519, Hb.KEEP = 7680, Hb.REPLACE = 7681;
    var wb = hb(39360),
      Zb = hb(39333),
      Xb = hb(39287),
      pb = hb(39316),
      ob = hb(39331);

    function Ab(bb, ub) {
      if (ub) {
        const {
          requestAnimationFrame: hb
        } = ub;
        if ("function" === typeof hb) return hb(bb)
      }
      if ((0, pb.k)()) {
        const {
          requestAnimationFrame: hb
        } = ub || window;
        if ("function" === typeof hb) return hb(bb)
      } else if ("function" === typeof requestAnimationFrame) return requestAnimationFrame(bb);
      return setTimeout(bb, 16)
    }
    class lb {
      get frameId() {
        return this._frameId
      }
      get isWebGPU() {
        return this._isWebGPU
      }
      _getShaderProcessor(bb) {
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
      get aBb() {
        return this._useReverseDepthBuffer
      }
      set aBb(bb) {
        bb !== this._useReverseDepthBuffer && (this._useReverseDepthBuffer = bb, this._depthCullingState.depthFunc = bb ? 518 : 515)
      }
      setColorWrite(bb) {
        bb !== this._colorWrite && (this._colorWriteChanged = !0, this._colorWrite = bb)
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
      _getGlobalDefines(bb) {
        if (bb) return this.isNDCHalfZRange ? bb.IS_NDC_HALF_ZRANGE = "" : delete bb.IS_NDC_HALF_ZRANGE, this.aBb ? bb.USE_REVERSE_DEPTHBUFFER = "" : delete bb.USE_REVERSE_DEPTHBUFFER, void(this.useExactSrgbConversions ? bb.USE_EXACT_SRGB_CONVERSIONS = "" : delete bb.USE_EXACT_SRGB_CONVERSIONS);
        {
          let bb = "";
          return this.isNDCHalfZRange && (bb += "#define IS_NDC_HALF_ZRANGE"), this.aBb && (bb && (bb += "\n"), bb += "#define USE_REVERSE_DEPTHBUFFER"), this.useExactSrgbConversions && (bb && (bb += "\n"), bb += "#define USE_EXACT_SRGB_CONVERSIONS"), bb
        }
      }
      _rebuildInternalTextures() {
        const bb = this._internalTexturesCache.slice();
        for (const ub of bb) ub._rebuild()
      }
      _rebuildRenderTargetWrappers() {
        const bb = this._renderTargetWrapperCache.slice();
        for (const ub of bb) ub.textures?.some((bb => 15 === bb.source)) || ub._rebuild()
      }
      _rebuildEffects() {
        for (const bb in this._compiledEffects) {
          const ub = this._compiledEffects[bb];
          ub._pipelineContext = null, ub._prepareEffect()
        }
        Ob.c.ResetCache()
      }
      _rebuildGraphicsResources() {
        this.wipeCaches(!0), this._rebuildEffects(), this._rebuildComputeEffects?.(), this._rebuildBuffers(), this._rebuildInternalTextures(), this._rebuildTextures(), this._rebuildRenderTargetWrappers(), this.wipeCaches(!0)
      }
      _flagContextRestored() {
        Ub.b.Warn(this.name + " context successfully restored."), this.onContextRestoredObservable.notifyObservers(this), this._contextWasLost = !1
      }
      _restoreEngineAfterContextLost(bb) {
        setTimeout((() => {
          this._clearEmptyResources();
          const ub = this._depthCullingState.depthTest,
            hb = this._depthCullingState.depthFunc,
            Bb = this._depthCullingState.depthMask,
            Ob = this._stencilState.stencilTest;
          bb(), this._rebuildGraphicsResources(), this._depthCullingState.depthTest = ub, this._depthCullingState.depthFunc = hb, this._depthCullingState.depthMask = Bb, this._stencilState.stencilTest = Ob, this._flagContextRestored()
        }), 0)
      }
      get tC() {
        return this._isDisposed
      }
      get snapshotRendering() {
        return !1
      }
      set snapshotRendering(bb) {}
      get snapshotRenderingMode() {
        return 0
      }
      set snapshotRenderingMode(bb) {}
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
          const bb = new Uint8Array(4),
            ub = [bb, bb, bb, bb, bb, bb];
          this._emptyCubeTexture = this.createRawCubeTexture(ub, 1, 5, 0, !1, !1, 1)
        }
        return this._emptyCubeTexture
      }
      set framebufferDimensionsObject(bb) {
        this._framebufferDimensionsObject = bb
      }
      get activeRenderLoops() {
        return this._activeRenderLoops
      }
      stopRenderLoop(bb) {
        if (!bb) return this._activeRenderLoops.length = 0, void this._cancelFrame();
        const ub = this._activeRenderLoops.indexOf(bb);
        ub >= 0 && (this._activeRenderLoops.splice(ub, 1), 0 == this._activeRenderLoops.length && this._cancelFrame())
      }
      _cancelFrame() {
        if (this.customAnimationFrameRequester) {
          if (0 !== this._frameHandler) {
            this._frameHandler = 0;
            const {
              cancelAnimationFrame: bb
            } = this.customAnimationFrameRequester;
            bb && bb(this.customAnimationFrameRequester.SX), delete this.customAnimationFrameRequester.SX
          }
        } else if (0 !== this._frameHandler) {
          const bb = this._frameHandler;
          if (this._frameHandler = 0, (0, pb.k)()) {
            const {
              cancelAnimationFrame: ub
            } = this.getHostWindow() || window;
            if ("function" === typeof ub) return ub(bb)
          } else if ("function" === typeof cancelAnimationFrame) return cancelAnimationFrame(bb);
          return clearTimeout(bb)
        }
      }
      rW() {
        this.onBeginFrameObservable.notifyObservers(this)
      }
      jW() {
        this._frameId++, this.onEndFrameObservable.notifyObservers(this)
      }
      get maxFPS() {
        return this._maxFPS
      }
      set maxFPS(bb) {
        this._maxFPS = bb, void 0 !== bb && (this._minFrameTime = bb <= 0 ? Number.MAX_VALUE : 1e3 / bb)
      }
      _isOverFrameTime(bb) {
        if (!bb || void 0 === this._maxFPS) return !1;
        const ub = bb - this._lastFrameTime;
        return this._lastFrameTime = bb, this._renderAccumulator += ub, this._renderAccumulator < this._minFrameTime || (this._renderAccumulator -= this._minFrameTime, this._renderAccumulator > this._minFrameTime && (this._renderAccumulator = this._minFrameTime), !1)
      }
      _processFrame(bb) {
        if (this._frameHandler = 0, !this._contextWasLost && !this._isOverFrameTime(bb)) {
          let bb = !0;
          (this.tC || !this.renderEvenInBackground && this._windowIsBackground) && (bb = !1), bb && (this.rW(), this.skipFrameRender || this._renderViews() || this._renderFrame(), this.jW())
        }
      }
      _renderLoop(bb) {
        this._processFrame(bb), this._activeRenderLoops.length > 0 && 0 === this._frameHandler && this._queueNewFrameForRenderLoop()
      }
      _renderFrame() {
        for (let bb = 0; bb < this._activeRenderLoops.length; bb++) {
          (0, this._activeRenderLoops[bb])()
        }
      }
      _renderViews() {
        return !1
      }
      _queueNewFrame(bb, ub) {
        return Ab(bb, ub)
      }
      _queueNewFrameForRenderLoop() {
        this.customAnimationFrameRequester ? (this.customAnimationFrameRequester.SX = this._queueNewFrame(this.customAnimationFrameRequester.renderFunction || this._boundRenderFunction, this.customAnimationFrameRequester), this._frameHandler = this.customAnimationFrameRequester.SX) : this._frameHandler = this._queueNewFrame(this._boundRenderFunction, this.getHostWindow())
      }
      runRenderLoop(bb) {
        -1 === this._activeRenderLoops.indexOf(bb) && (this._activeRenderLoops.push(bb), 1 === this._activeRenderLoops.length && 0 === this._frameHandler && this._queueNewFrameForRenderLoop())
      }
      getDepthBuffer() {
        return this._depthCullingState.depthTest
      }
      setDepthBuffer(bb) {
        this._depthCullingState.depthTest = bb
      }
      setZOffset(bb) {
        this._depthCullingState.zOffset = this.aBb ? -bb : bb
      }
      getZOffset() {
        const bb = this._depthCullingState.zOffset;
        return this.aBb ? -bb : bb
      }
      setZOffsetUnits(bb) {
        this._depthCullingState.zOffsetUnits = this.aBb ? -bb : bb
      }
      getZOffsetUnits() {
        const bb = this._depthCullingState.zOffsetUnits;
        return this.aBb ? -bb : bb
      }
      getHostWindow() {
        return (0, pb.k)() ? this._renderingCanvas && this._renderingCanvas.ownerDocument && this._renderingCanvas.ownerDocument.defaultView ? this._renderingCanvas.ownerDocument.defaultView : window : null
      }
      get compatibilityMode() {
        return this._compatibilityMode
      }
      set compatibilityMode(bb) {
        this._compatibilityMode = !0
      }
      _rebuildTextures() {
        for (const bb of this.scenes) bb._rebuildTextures();
        for (const bb of this._virtualScenes) bb._rebuildTextures()
      }
      _releaseRenderTargetWrapper(bb) {
        const ub = this._renderTargetWrapperCache.indexOf(bb); - 1 !== ub && this._renderTargetWrapperCache.splice(ub, 1)
      }
      get currentViewport() {
        return this._cachedViewport
      }
      setViewport(bb, ub, hb) {
        const Bb = ub || this.getRenderWidth(),
          Ob = hb || this.getRenderHeight(),
          Gb = bb.x || 0,
          Ub = bb.y || 0;
        this._cachedViewport = bb, this._viewport(Gb * Bb, Ub * Ob, Bb * bb.width, Ob * bb.height)
      }
      createCanvasImage() {
        return document.createElement("img")
      }
      createCanvasPath2D(bb) {
        return new Path2D(bb)
      }
      get description() {
        let bb = this.name + this.version;
        return this._caps.parallelShaderCompile && (bb += " - Parallel shader compilation"), bb
      }
      _createTextureBase(bb, ub, hb, Bb) {
        let Ob = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3,
          Lb = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          Yb = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
          Sb = arguments.length > 7 ? arguments[7] : void 0,
          ab = arguments.length > 8 ? arguments[8] : void 0,
          Hb = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null,
          wb = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : null,
          Zb = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : null,
          pb = arguments.length > 12 && void 0 !== arguments[12] ? arguments[12] : null,
          ob = arguments.length > 13 ? arguments[13] : void 0,
          Ab = arguments.length > 14 ? arguments[14] : void 0,
          Kb = arguments.length > 15 ? arguments[15] : void 0;
        const Wb = "data:" === (bb = bb || "").substring(0, 5),
          Cb = "blob:" === bb.substring(0, 5),
          db = Wb && -1 !== bb.indexOf(";base64,"),
          rb = wb || new Xb.b(this, 1);
        rb !== wb && (rb.label = bb.substring(0, 60));
        const jb = bb;
        !this._transformTextureUrl || db || wb || Hb || (bb = this._transformTextureUrl(bb)), jb !== bb && (rb._originalUrl = jb);
        const nb = bb.lastIndexOf(".");
        let Db = pb || (nb > -1 ? bb.substring(nb).toLowerCase() : "");
        Db.indexOf("?") > -1 && (Db = Db.split("?")[0]);
        const xb = lb.GetCompatibleTextureLoader(Db, ob);
        Bb && Bb.addPendingData(rb), rb.url = bb, rb.generateMipMaps = !ub, rb.samplingMode = Ob, rb.invertY = hb, rb._useSRGBBuffer = this._getUseSRGBBuffer(!!Kb, ub), this._doNotHandleContextLost || (rb._buffer = Hb);
        let zb = null;
        Lb && !wb && (zb = rb.onLoadedObservable.add(Lb)), wb || this._internalTexturesCache.push(rb);
        const gb = (hb, wb) => {
          Bb && Bb.removePendingData(rb), bb === jb ? (zb && rb.onLoadedObservable.remove(zb), Gb.b.UseFallbackTexture && bb !== Gb.b.FallbackTexture && this._createTextureBase(Gb.b.FallbackTexture, ub, rb.invertY, Bb, Ob, null, Yb, Sb, ab, Hb, rb), hb = (hb || "Unknown error") + (Gb.b.UseFallbackTexture ? " - Fallback texture was used" : ""), rb.onErrorObservable.notifyObservers({
            message: hb,
            exception: wb
          }), Yb && Yb(hb, wb)) : (Ub.b.Warn(`Failed to load ${bb}, falling back to ${jb}`), this._createTextureBase(jb, ub, rb.invertY, Bb, Ob, Lb, Yb, Sb, ab, Hb, rb, Zb, pb, ob, Ab, Kb))
        };
        if (xb) {
          const ub = async bb => {
            (await xb).loadData(bb, rb, ((bb, ub, hb, Gb, Ub, Lb) => {
              Lb ? gb("TextureLoader failed to load data") : Sb(rb, Db, Bb, {
                width: bb,
                height: ub
              }, rb.invertY, !hb, Gb, (() => (Ub(), !1)), Ob)
            }), Ab)
          };
          if (Hb) {
            const bb = async bb => {
              try {
                await ub(bb)
              } catch (hb) {
                gb("Failed to parse texture data", hb)
              }
            };
            Hb instanceof ArrayBuffer ? bb(new Uint8Array(Hb)) : ArrayBuffer.isView(Hb) ? bb(Hb) : Yb && Yb("Unable to load: only ArrayBuffer or ArrayBufferView is supported", null)
          } else this._loadFile(bb, (async bb => {
            try {
              await ub(new Uint8Array(bb))
            } catch (hb) {
              gb("Failed to parse texture data", hb)
            }
          }), void 0, Bb ? Bb.offlineProvider : void 0, !0, ((bb, ub) => {
            gb("Unable to load " + (bb && bb.responseURL, ub))
          }))
        } else {
          const hb = bb => {
            Cb && !this._doNotHandleContextLost && (rb._buffer = bb), Sb(rb, Db, Bb, bb, rb.invertY, ub, !1, ab, Ob)
          };
          !Wb || db ? Hb && ("string" === typeof Hb.decoding || Hb.close) ? hb(Hb) : lb._FileToolsLoadImage(bb || "", hb, gb, Bb ? Bb.offlineProvider : null, ob, rb.invertY && this._features.needsInvertingBitmap ? {
            imageOrientation: "flipY"
          } : void 0, this) : "string" === typeof Hb || Hb instanceof ArrayBuffer || ArrayBuffer.isView(Hb) || Hb instanceof Blob ? lb._FileToolsLoadImage(Hb, hb, gb, Bb ? Bb.offlineProvider : null, ob, rb.invertY && this._features.needsInvertingBitmap ? {
            imageOrientation: "flipY"
          } : void 0, this) : Hb && hb(Hb)
        }
        return rb
      }
      _rebuildBuffers() {
        for (const bb of this._uniformBuffers) bb._rebuildAfterContextLost()
      }
      get _shouldUseHighPrecisionShader() {
        return !(!this._caps.highPrecisionShaderSupported || !this._highPrecisionShadersAllowed)
      }
      getHostDocument() {
        return this._renderingCanvas && this._renderingCanvas.ownerDocument ? this._renderingCanvas.ownerDocument : (0, pb.e)() ? document : null
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
        for (const bb in this._boundTexturesCache) Object.prototype.hasOwnProperty.call(this._boundTexturesCache, bb) && (this._boundTexturesCache[bb] = null);
        this._currentTextureChannel = -1
      }
      get name() {
        return this._name
      }
      set name(bb) {
        this._name = bb
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
      setHardwareScalingLevel(bb) {
        this._hardwareScalingLevel = bb, this.resize()
      }
      getHardwareScalingLevel() {
        return this._hardwareScalingLevel
      }
      get doNotHandleContextLost() {
        return this._doNotHandleContextLost
      }
      set doNotHandleContextLost(bb) {
        this._doNotHandleContextLost = bb
      }
      get isStencilEnable() {
        return this._isStencilEnable
      }
      getCreationOptions() {
        return this._creationOptions
      }
      constructor(bb, ub, hb) {
        this._colorWrite = !0, this._colorWriteChanged = !0, this._depthCullingState = new Sb, this._stencilStateComposer = new ab, this._stencilState = new Hb, this._alphaState = new wb.c(!1), this._alphaMode = Array(8).fill(-1), this._alphaEquation = Array(8).fill(-1), this._activeRequests = [], this._badOS = !1, this._badDesktopOS = !1, this._compatibilityMode = !0, this._internalTexturesCache = new Array, this._currentRenderTarget = null, this._boundTexturesCache = {}, this._activeChannel = 0, this._currentTextureChannel = -1, this._viewportCached = {
          x: 0,
          y: 0,
          z: 0,
          w: 0
        }, this._isWebGPU = !1, this._enableGPUDebugMarkers = !1, this.onCanvasBlurObservable = new Bb.e, this.onCanvasFocusObservable = new Bb.e, this.onNewSceneAddedObservable = new Bb.e, this.onResizeObservable = new Bb.e, this.onCanvasPointerOutObservable = new Bb.e, this.onEffectErrorObservable = new Bb.e, this.disablePerformanceMonitorInBackground = !1, this.disableVertexArrayObjects = !1, this._frameId = 0, this.hostInformation = {
          isMobile: !1
        }, this.isFullscreen = !1, this.enableOfflineSupport = !1, this.disableManifestCheck = !1, this.disableContextMenu = !0, this.currentRenderPassId = 0, this.isPointerLock = !1, this.postProcesses = [], this.canvasTabIndex = 1, this._contextWasLost = !1, this._useReverseDepthBuffer = !1, this.isNDCHalfZRange = !1, this.hasOriginBottomLeft = !0, this._renderTargetWrapperCache = new Array, this._compiledEffects = {}, this._isDisposed = !1, this.scenes = [], this._virtualScenes = new Array, this.onBeforeTextureInitObservable = new Bb.e, this.renderEvenInBackground = !0, this.preventCacheWipeBetweenFrames = !1, this._frameHandler = 0, this._activeRenderLoops = new Array, this.customAnimationFrameRequester = null, this._windowIsBackground = !1, this._boundRenderFunction = bb => this._renderLoop(bb), this._lastFrameTime = 0, this._renderAccumulator = 0, this.skipFrameRender = !1, this.onBeforeShaderCompilationObservable = new Bb.e, this.onAfterShaderCompilationObservable = new Bb.e, this.onBeginFrameObservable = new Bb.e, this.onEndFrameObservable = new Bb.e, this._transformTextureUrl = null, this._uniformBuffers = new Array, this._storageBuffers = new Array, this._highPrecisionShadersAllowed = !0, this.onContextLostObservable = new Bb.e, this.onContextRestoredObservable = new Bb.e, this._name = "", this.premultipliedAlpha = !0, this.adaptToDeviceRatio = !1, this._lastDevicePixelRatio = 1, this._doNotHandleContextLost = !1, this.cullBackFaces = null, this._renderPassNames = ["main"], this._onReleaseRenderPassObservable = null, this._fps = 60, this._deltaTime = 0, this._deterministicLockstep = !1, this._lockstepMaxSteps = 4, this._timeStep = 1 / 60, this.XN = new Bb.e, this.onReleaseEffectsObservable = new Bb.e, Gb.b.Instances.push(this), this.startTime = Yb.d.Now, this._stencilStateComposer.stencilGlobal = this._stencilState, Lb.d.SetMatrixPrecision(!!ub.useLargeWorldRendering || !!ub.useHighPrecisionMatrix), (0, pb.h)() && navigator.userAgent && (this._badOS = /iPad/i.test(navigator.userAgent) || /iPhone/i.test(navigator.userAgent), this._badDesktopOS = /^((?!chrome|android).)*safari/i.test(navigator.userAgent)), ub.antialias = bb ?? ub.antialias, ub.deterministicLockstep = ub.deterministicLockstep ?? !1, ub.lockstepMaxSteps = ub.lockstepMaxSteps ?? 4, ub.timeStep = ub.timeStep ?? 1 / 60, ub.stencil = ub.stencil ?? !0, this._audioContext = ub.audioEngineOptions?.audioContext ?? null, this._audioDestination = ub.audioEngineOptions?.audioDestination ?? null, this.premultipliedAlpha = ub.premultipliedAlpha ?? !0, this._doNotHandleContextLost = !!ub.doNotHandleContextLost, this._isStencilEnable = !!ub.stencil, this.useExactSrgbConversions = ub.useExactSrgbConversions ?? !1, this.canvasTabIndex = ub.canvasTabIndex ?? this.canvasTabIndex;
        const Ob = (0, pb.k)() && window.devicePixelRatio || 1,
          Ub = ub.limitDeviceRatio || Ob;
        hb = hb || ub.adaptToDeviceRatio || !1, this.adaptToDeviceRatio = hb, this._hardwareScalingLevel = hb ? 1 / Math.min(Ub, Ob) : 1, this._lastDevicePixelRatio = Ob, this._creationOptions = ub
      }
      resize() {
        let bb, ub, hb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this.adaptToDeviceRatio) {
          const bb = (0, pb.k)() && window.devicePixelRatio || 1,
            ub = this._lastDevicePixelRatio / bb;
          this._lastDevicePixelRatio = bb, this._hardwareScalingLevel *= ub
        }
        if ((0, pb.k)() && (0, pb.e)())
          if (this._renderingCanvas) {
            const hb = this._renderingCanvas.getBoundingClientRect?.();
            bb = this._renderingCanvas.clientWidth || hb?.width || this._renderingCanvas.width * this._hardwareScalingLevel || 100, ub = this._renderingCanvas.clientHeight || hb?.height || this._renderingCanvas.height * this._hardwareScalingLevel || 100
          } else bb = window.innerWidth, ub = window.innerHeight;
        else bb = this._renderingCanvas ? this._renderingCanvas.width : 100, ub = this._renderingCanvas ? this._renderingCanvas.height : 100;
        this.setSize(bb / this._hardwareScalingLevel, ub / this._hardwareScalingLevel, hb)
      }
      setSize(bb, ub) {
        let hb = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (!this._renderingCanvas) return !1;
        if (bb |= 0, ub |= 0, !hb && this._renderingCanvas.width === bb && this._renderingCanvas.height === ub) return !1;
        if (this._renderingCanvas.width = bb, this._renderingCanvas.height = ub, this.scenes) {
          for (let bb = 0; bb < this.scenes.length; bb++) {
            const ub = this.scenes[bb];
            for (let bb = 0; bb < ub.cameras.length; bb++) {
              ub.cameras[bb]._currentRenderId = 0
            }
          }
          this.onResizeObservable.hasObservers() && this.onResizeObservable.notifyObservers(this)
        }
        return !0
      }
      createRawTexture(bb, ub, hb, Bb, Ob, Gb, Ub, Lb, Yb, Sb, ab, Hb) {
        throw (0, Zb.m)("engine.rawTexture")
      }
      createRawCubeTexture(bb, ub, hb, Bb, Ob, Gb, Ub, Lb) {
        throw (0, Zb.m)("engine.rawTexture")
      }
      createRawTexture3D(bb, ub, hb, Bb, Ob, Gb, Ub, Lb, Yb, Sb, ab) {
        throw (0, Zb.m)("engine.rawTexture")
      }
      createRawTexture2DArray(bb, ub, hb, Bb, Ob, Gb, Ub, Lb, Yb, Sb, ab, Hb) {
        throw (0, Zb.m)("engine.rawTexture")
      }
      _sharedInit(bb) {
        this._renderingCanvas = bb
      }
      _setupMobileChecks() {
        navigator && navigator.userAgent && (this._checkForMobile = () => {
          const bb = navigator.userAgent;
          this.hostInformation.isMobile = -1 !== bb.indexOf("Mobile") || -1 !== bb.indexOf("Mac") && (0, pb.e)() && "ontouchend" in document
        }, this._checkForMobile(), (0, pb.k)() && window.addEventListener("resize", this._checkForMobile))
      }
      createVideoElement(bb) {
        return document.createElement("video")
      }
      _reportDrawCall() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        this._drawCalls?.addCount(bb, !1)
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
      _createImageBitmapFromSource(bb, ub) {
        throw new Error("createImageBitmapFromSource is not implemented")
      }
      createImageBitmap(bb, ub) {
        return createImageBitmap(bb, ub)
      }
      resizeImageBitmap(bb, ub, hb) {
        throw new Error("resizeImageBitmap is not implemented")
      }
      getFontOffset(bb) {
        throw new Error("getFontOffset is not implemented")
      }
      static _CreateCanvas(bb, ub) {
        if ("undefined" === typeof document) return new OffscreenCanvas(bb, ub);
        const hb = document.createElement("canvas");
        return hb.width = bb, hb.height = ub, hb
      }
      createCanvas(bb, ub) {
        return lb._CreateCanvas(bb, ub)
      }
      static _FileToolsLoadImage(bb, ub, hb, Bb, Ob, Gb, Ub) {
        if (!ob.c.loadImage) throw (0, Zb.m)("FileTools");
        return ob.c.loadImage(bb, ub, hb, Bb, Ob, Gb, Ub)
      }
      _loadFile(bb, ub, hb, Bb, Ob, Gb) {
        const Ub = (0, ob.f)(bb, ub, hb, Bb, Ob, Gb);
        return this._activeRequests.push(Ub), Ub.onCompleteObservable.add((() => {
          const bb = this._activeRequests.indexOf(Ub); - 1 !== bb && this._activeRequests.splice(bb, 1)
        })), Ub
      }
      static _FileToolsLoadFile(bb, ub, hb, Bb, Ob, Gb) {
        if (ob.c.loadFile) return ob.c.loadFile(bb, ub, hb, Bb, Ob, Gb);
        throw (0, Zb.m)("FileTools")
      }
      dispose() {
        for (this.releaseEffects(), this._isDisposed = !0, this.stopRenderLoop(), this._emptyTexture && (this._releaseTexture(this._emptyTexture), this._emptyTexture = null), this._emptyCubeTexture && (this._releaseTexture(this._emptyCubeTexture), this._emptyCubeTexture = null), this._renderingCanvas = null, this.onBeforeTextureInitObservable && this.onBeforeTextureInitObservable.clear(); this.postProcesses.length;) this.postProcesses[0].dispose();
        for (; this.scenes.length;) this.scenes[0].dispose();
        for (; this._virtualScenes.length;) this._virtualScenes[0].dispose();
        this.releaseComputeEffects?.(), Ob.c.ResetCache();
        for (const ub of this._activeRequests) ub.abort();
        this._boundRenderFunction = null, this.XN.notifyObservers(this), this.XN.clear(), this.onResizeObservable.clear(), this.onCanvasBlurObservable.clear(), this.onCanvasFocusObservable.clear(), this.onCanvasPointerOutObservable.clear(), this.onNewSceneAddedObservable.clear(), this.onEffectErrorObservable.clear(), (0, pb.k)() && window.removeEventListener("resize", this._checkForMobile);
        const bb = Gb.b.Instances.indexOf(this);
        bb >= 0 && Gb.b.Instances.splice(bb, 1), Gb.b.Instances.length || (Gb.b.OnEnginesDisposedObservable.notifyObservers(this), Gb.b.OnEnginesDisposedObservable.clear()), this.onBeginFrameObservable.clear(), this.onEndFrameObservable.clear(), this._onReleaseRenderPassObservable?.clear(), this._onReleaseRenderPassObservable = null
      }
      static DefaultLoadingScreenFactory(bb) {
        throw (0, Zb.m)("LoadingScreen")
      }
      static MarkAllMaterialsAsDirty(bb, ub) {
        for (let hb = 0; hb < Gb.b.Instances.length; hb++) {
          const Bb = Gb.b.Instances[hb];
          for (let hb = 0; hb < Bb.scenes.length; hb++) Bb.scenes[hb].markAllMaterialsAsDirty(bb, ub)
        }
      }
      static GetCompatibleTextureLoader(bb, ub) {
        return null
      }
    }
    lb._RenderPassIdCounter = 0, lb._RescalePostProcessFactory = null, lb.CollisionsEpsilon = .001, lb.QueueNewFrame = Ab
  },
  39308: (bb, ub, hb) => {
    hb.d(ub, {
      e: () => Bb
    });
    class Bb {
      static GetShadersRepository() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? Bb.ShadersRepository : Bb.ShadersRepositoryWGSL
      }
      static GetShadersStore() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? Bb.ShadersStore : Bb.ShadersStoreWGSL
      }
      static GetIncludesShadersStore() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? Bb.IncludesShadersStore : Bb.IncludesShadersStoreWGSL
      }
    }
    Bb.ShadersRepository = "src/Shaders/", Bb.ShadersStore = {}, Bb.IncludesShadersStore = {}, Bb.ShadersRepositoryWGSL = "src/ShadersWGSL/", Bb.ShadersStoreWGSL = {}, Bb.IncludesShadersStoreWGSL = {}
  },
  39325: (bb, ub, hb) => {
    hb.d(ub, {
      d: () => wb,
      g: () => Kb,
      h: () => Xb,
      i: () => Zb,
      k: () => pb,
      n: () => lb,
      o: () => Hb,
      q: () => Sb,
      s: () => ab,
      v: () => Yb,
      x: () => Lb
    });
    class Bb {
      constructor() {
        this._valueCache = {}, this._matrixValueCache = {}, this.vertexCompilationError = null, this.fragmentCompilationError = null, this.programLinkError = null, this.programValidationError = null, this._isDisposed = !1
      }
      get isAsync() {
        return this.isParallelCompiled
      }
      get isReady() {
        return !!this.program && (!this.isParallelCompiled || this.engine._isRenderingStateCompiled(this))
      }
      _handlesSpectorRebuildCallback(bb) {
        bb && this.program && bb(this.program)
      }
      setEngine(bb) {
        this.engine = bb
      }
      _fillEffectInformation(bb, ub, hb, Bb, Ob, Gb, Ub, Lb) {
        const Yb = this.engine;
        if (Yb.supportsUniformBuffers)
          for (const ab in ub) bb.bindUniformBlock(ab, ub[ab]);
        let Sb;
        for (this.engine.getUniforms(this, hb).forEach(((bb, ub) => {
            Bb[hb[ub]] = bb
          })), this._uniforms = Bb, Sb = 0; Sb < Ob.length; Sb++) {
          null == bb.getUniform(Ob[Sb]) && (Ob.splice(Sb, 1), Sb--)
        }
        Ob.forEach(((bb, ub) => {
          Gb[bb] = ub
        }));
        for (const ab of Yb.getAttributes(this, Ub)) Lb.push(ab)
      }
      dispose() {
        this._uniforms = {}, this._isDisposed = !0
      }
      _cacheMatrix(bb, ub) {
        const hb = this._valueCache[bb],
          Bb = ub.updateFlag;
        if (void 0 !== hb && hb === Bb) return !1;
        const Ob = ub.ZBb();
        let Gb = this._matrixValueCache[bb];
        if (void 0 !== hb && null !== hb && void 0 !== Gb) {
          let ub = !0;
          for (let bb = 15; bb >= 0; bb--)
            if (Gb[bb] !== Ob[bb]) {
              ub = !1;
              break
            } if (ub) return this._valueCache[bb] = Bb, !1
        }
        return void 0 === Gb && (Gb = this._matrixValueCache[bb] = new Float32Array(16)), Gb.set(Ob), this._valueCache[bb] = Bb, !0
      }
      _cacheFloat2(bb, ub, hb) {
        let Bb = this._valueCache[bb];
        if (!Bb || 2 !== Bb.length) return Bb = [ub, hb], this._valueCache[bb] = Bb, !0;
        let Ob = !1;
        return Bb[0] !== ub && (Bb[0] = ub, Ob = !0), Bb[1] !== hb && (Bb[1] = hb, Ob = !0), Ob
      }
      _cacheFloat3(bb, ub, hb, Bb) {
        let Ob = this._valueCache[bb];
        if (!Ob || 3 !== Ob.length) return Ob = [ub, hb, Bb], this._valueCache[bb] = Ob, !0;
        let Gb = !1;
        return Ob[0] !== ub && (Ob[0] = ub, Gb = !0), Ob[1] !== hb && (Ob[1] = hb, Gb = !0), Ob[2] !== Bb && (Ob[2] = Bb, Gb = !0), Gb
      }
      _cacheFloat4(bb, ub, hb, Bb, Ob) {
        let Gb = this._valueCache[bb];
        if (!Gb || 4 !== Gb.length) return Gb = [ub, hb, Bb, Ob], this._valueCache[bb] = Gb, !0;
        let Ub = !1;
        return Gb[0] !== ub && (Gb[0] = ub, Ub = !0), Gb[1] !== hb && (Gb[1] = hb, Ub = !0), Gb[2] !== Bb && (Gb[2] = Bb, Ub = !0), Gb[3] !== Ob && (Gb[3] = Ob, Ub = !0), Ub
      }
      setInt(bb, ub) {
        const hb = this._valueCache[bb];
        void 0 !== hb && hb === ub || this.engine.setInt(this._uniforms[bb], ub) && (this._valueCache[bb] = ub)
      }
      setInt2(bb, ub, hb) {
        this._cacheFloat2(bb, ub, hb) && (this.engine.setInt2(this._uniforms[bb], ub, hb) || (this._valueCache[bb] = null))
      }
      setInt3(bb, ub, hb, Bb) {
        this._cacheFloat3(bb, ub, hb, Bb) && (this.engine.setInt3(this._uniforms[bb], ub, hb, Bb) || (this._valueCache[bb] = null))
      }
      setInt4(bb, ub, hb, Bb, Ob) {
        this._cacheFloat4(bb, ub, hb, Bb, Ob) && (this.engine.setInt4(this._uniforms[bb], ub, hb, Bb, Ob) || (this._valueCache[bb] = null))
      }
      setIntArray(bb, ub) {
        this._valueCache[bb] = null, this.engine.setIntArray(this._uniforms[bb], ub)
      }
      setIntArray2(bb, ub) {
        this._valueCache[bb] = null, this.engine.setIntArray2(this._uniforms[bb], ub)
      }
      setIntArray3(bb, ub) {
        this._valueCache[bb] = null, this.engine.setIntArray3(this._uniforms[bb], ub)
      }
      setIntArray4(bb, ub) {
        this._valueCache[bb] = null, this.engine.setIntArray4(this._uniforms[bb], ub)
      }
      setUInt(bb, ub) {
        const hb = this._valueCache[bb];
        void 0 !== hb && hb === ub || this.engine.setUInt(this._uniforms[bb], ub) && (this._valueCache[bb] = ub)
      }
      setUInt2(bb, ub, hb) {
        this._cacheFloat2(bb, ub, hb) && (this.engine.setUInt2(this._uniforms[bb], ub, hb) || (this._valueCache[bb] = null))
      }
      setUInt3(bb, ub, hb, Bb) {
        this._cacheFloat3(bb, ub, hb, Bb) && (this.engine.setUInt3(this._uniforms[bb], ub, hb, Bb) || (this._valueCache[bb] = null))
      }
      setUInt4(bb, ub, hb, Bb, Ob) {
        this._cacheFloat4(bb, ub, hb, Bb, Ob) && (this.engine.setUInt4(this._uniforms[bb], ub, hb, Bb, Ob) || (this._valueCache[bb] = null))
      }
      setUIntArray(bb, ub) {
        this._valueCache[bb] = null, this.engine.setUIntArray(this._uniforms[bb], ub)
      }
      setUIntArray2(bb, ub) {
        this._valueCache[bb] = null, this.engine.setUIntArray2(this._uniforms[bb], ub)
      }
      setUIntArray3(bb, ub) {
        this._valueCache[bb] = null, this.engine.setUIntArray3(this._uniforms[bb], ub)
      }
      setUIntArray4(bb, ub) {
        this._valueCache[bb] = null, this.engine.setUIntArray4(this._uniforms[bb], ub)
      }
      setArray(bb, ub) {
        this._valueCache[bb] = null, this.engine.setArray(this._uniforms[bb], ub)
      }
      setArray2(bb, ub) {
        this._valueCache[bb] = null, this.engine.setArray2(this._uniforms[bb], ub)
      }
      setArray3(bb, ub) {
        this._valueCache[bb] = null, this.engine.setArray3(this._uniforms[bb], ub)
      }
      setArray4(bb, ub) {
        this._valueCache[bb] = null, this.engine.setArray4(this._uniforms[bb], ub)
      }
      setMatrices(bb, ub) {
        ub && (this._valueCache[bb] = null, this.engine.setMatrices(this._uniforms[bb], ub))
      }
      setMatrix(bb, ub) {
        this._cacheMatrix(bb, ub) && (this.engine.setMatrices(this._uniforms[bb], ub.ZBb()) || (this._valueCache[bb] = null))
      }
      setMatrix3x3(bb, ub) {
        this._valueCache[bb] = null, this.engine.setMatrix3x3(this._uniforms[bb], ub)
      }
      setMatrix2x2(bb, ub) {
        this._valueCache[bb] = null, this.engine.setMatrix2x2(this._uniforms[bb], ub)
      }
      setFloat(bb, ub) {
        const hb = this._valueCache[bb];
        void 0 !== hb && hb === ub || this.engine.setFloat(this._uniforms[bb], ub) && (this._valueCache[bb] = ub)
      }
      setVector2(bb, ub) {
        this._cacheFloat2(bb, ub.x, ub.y) && (this.engine.setFloat2(this._uniforms[bb], ub.x, ub.y) || (this._valueCache[bb] = null))
      }
      setFloat2(bb, ub, hb) {
        this._cacheFloat2(bb, ub, hb) && (this.engine.setFloat2(this._uniforms[bb], ub, hb) || (this._valueCache[bb] = null))
      }
      setVector3(bb, ub) {
        this._cacheFloat3(bb, ub.x, ub.y, ub.z) && (this.engine.setFloat3(this._uniforms[bb], ub.x, ub.y, ub.z) || (this._valueCache[bb] = null))
      }
      setFloat3(bb, ub, hb, Bb) {
        this._cacheFloat3(bb, ub, hb, Bb) && (this.engine.setFloat3(this._uniforms[bb], ub, hb, Bb) || (this._valueCache[bb] = null))
      }
      setVector4(bb, ub) {
        this._cacheFloat4(bb, ub.x, ub.y, ub.z, ub.w) && (this.engine.setFloat4(this._uniforms[bb], ub.x, ub.y, ub.z, ub.w) || (this._valueCache[bb] = null))
      }
      setQuaternion(bb, ub) {
        this._cacheFloat4(bb, ub.x, ub.y, ub.z, ub.w) && (this.engine.setFloat4(this._uniforms[bb], ub.x, ub.y, ub.z, ub.w) || (this._valueCache[bb] = null))
      }
      setFloat4(bb, ub, hb, Bb, Ob) {
        this._cacheFloat4(bb, ub, hb, Bb, Ob) && (this.engine.setFloat4(this._uniforms[bb], ub, hb, Bb, Ob) || (this._valueCache[bb] = null))
      }
      setColor3(bb, ub) {
        this._cacheFloat3(bb, ub.r, ub.g, ub.b) && (this.engine.setFloat3(this._uniforms[bb], ub.r, ub.g, ub.b) || (this._valueCache[bb] = null))
      }
      setColor4(bb, ub, hb) {
        this._cacheFloat4(bb, ub.r, ub.g, ub.b, hb) && (this.engine.setFloat4(this._uniforms[bb], ub.r, ub.g, ub.b, hb) || (this._valueCache[bb] = null))
      }
      setDirectColor4(bb, ub) {
        this._cacheFloat4(bb, ub.r, ub.g, ub.b, ub.a) && (this.engine.setFloat4(this._uniforms[bb], ub.r, ub.g, ub.b, ub.a) || (this._valueCache[bb] = null))
      }
      _getVertexShaderCode() {
        return this.vertexShader ? this.engine._getShaderSource(this.vertexShader) : null
      }
      _getFragmentShaderCode() {
        return this.fragmentShader ? this.engine._getShaderSource(this.fragmentShader) : null
      }
    }
    var Ob = hb(39331);
    const Gb = new WeakMap,
      Ub = {
        _webGLVersion: 2,
        cachedPipelines: {}
      };

    function Lb(bb) {
      let ub = Gb.get(bb);
      if (!ub) {
        if (!bb) return Ub;
        ub = {
          _webGLVersion: bb.TEXTURE_BINDING_3D ? 2 : 1,
          _context: bb,
          parallelShaderCompile: bb.getExtension("KHR_parallel_shader_compile") || void 0,
          cachedPipelines: {}
        }, Gb.set(bb, ub)
      }
      return ub
    }

    function Yb(bb) {
      Gb.delete(bb)
    }

    function Sb(bb, ub, hb, Bb, Ob, Gb) {
      const Ub = Lb(Bb);
      Gb || (Gb = Ub._createShaderProgramInjection ?? wb);
      return Gb(bb, Ab(ub, "vertex", Bb, Ub._contextWasLost), Ab(hb, "fragment", Bb, Ub._contextWasLost), Bb, Ob, Ub.validateShaderPrograms)
    }

    function ab(bb, ub, hb, Bb, Ob) {
      let Gb = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        Ub = arguments.length > 6 ? arguments[6] : void 0;
      const Yb = Lb(Ob);
      Ub || (Ub = Yb._createShaderProgramInjection ?? wb);
      const Sb = Yb._webGLVersion > 1 ? "#version 300 es\n#define WEBGL2 \n" : "";
      return Ub(bb, ob(ub, "vertex", Bb, Sb, Ob, Yb._contextWasLost), ob(hb, "fragment", Bb, Sb, Ob, Yb._contextWasLost), Ob, Gb, Yb.validateShaderPrograms)
    }

    function Hb(bb, ub) {
      const hb = new Bb,
        Ob = Lb(bb);
      return Ob.parallelShaderCompile && !Ob.disableParallelShaderCompile && (hb.isParallelCompiled = !0), hb.context = Ob._context, hb
    }

    function wb(bb, ub, hb, Bb) {
      let Ob = arguments.length > 5 ? arguments[5] : void 0;
      const Gb = Bb.createProgram();
      if (bb.program = Gb, !Gb) throw new Error("Unable to create program");
      return Bb.attachShader(Gb, ub), Bb.attachShader(Gb, hb), Bb.linkProgram(Gb), bb.context = Bb, bb.vertexShader = ub, bb.fragmentShader = hb, bb.isParallelCompiled || Xb(bb, Bb, Ob), Gb
    }

    function Zb(bb, ub, hb) {
      const Bb = bb;
      if (Bb._isDisposed) return !1;
      const Ob = Lb(ub);
      return !!(Ob && Ob.parallelShaderCompile && Ob.parallelShaderCompile.COMPLETION_STATUS_KHR && Bb.program && ub.getProgramParameter(Bb.program, Ob.parallelShaderCompile.COMPLETION_STATUS_KHR)) && (Xb(Bb, ub, hb), !0)
    }

    function Xb(bb, ub, hb) {
      const Bb = bb.context,
        Ob = bb.vertexShader,
        Gb = bb.fragmentShader,
        Ub = bb.program;
      if (!Bb.getProgramParameter(Ub, Bb.LINK_STATUS)) {
        if (!ub.getShaderParameter(Ob, ub.COMPILE_STATUS)) {
          const hb = ub.getShaderInfoLog(Ob);
          if (hb) throw bb.vertexCompilationError = hb, new Error("VERTEX SHADER " + hb)
        }
        if (!ub.getShaderParameter(Gb, ub.COMPILE_STATUS)) {
          const hb = ub.getShaderInfoLog(Gb);
          if (hb) throw bb.fragmentCompilationError = hb, new Error("FRAGMENT SHADER " + hb)
        }
        const hb = Bb.getProgramInfoLog(Ub);
        if (hb) throw bb.programLinkError = hb, new Error(hb)
      }
      if (hb) {
        Bb.validateProgram(Ub);
        if (!Bb.getProgramParameter(Ub, Bb.VALIDATE_STATUS)) {
          const ub = Bb.getProgramInfoLog(Ub);
          if (ub) throw bb.programValidationError = ub, new Error(ub)
        }
      }
      Bb.deleteShader(Ob), Bb.deleteShader(Gb), bb.vertexShader = void 0, bb.fragmentShader = void 0, bb.onCompiled && (bb.onCompiled(), bb.onCompiled = void 0)
    }

    function pb(bb, ub, hb, Bb, Ob, Gb, Ub, Yb, Hb) {
      let wb = arguments.length > 10 ? arguments[10] : void 0,
        Zb = arguments.length > 11 ? arguments[11] : void 0,
        Xb = arguments.length > 12 ? arguments[12] : void 0;
      const pb = Lb(bb.context);
      Zb || (Zb = pb.createRawShaderProgramInjection ?? Sb), Xb || (Xb = pb.createShaderProgramInjection ?? ab);
      const ob = bb;
      ob.program = Bb ? Zb(ob, ub, hb, ob.context, Hb) : Xb(ob, ub, hb, Yb, ob.context, Hb), ob.program.__SPECTOR_rebuildProgram = Ub, wb()
    }

    function ob(bb, ub, hb, Bb, Gb, Ub) {
      return Ab((0, Ob.d)(bb, hb, Bb), ub, Gb, Ub)
    }

    function Ab(bb, ub, hb, Bb) {
      const Ob = hb.createShader("vertex" === ub ? hb.VERTEX_SHADER : hb.FRAGMENT_SHADER);
      if (!Ob) {
        let bb, Ob = hb.NO_ERROR;
        for (;
          (bb = hb.getError()) !== hb.NO_ERROR;) Ob = bb;
        throw new Error(`Something went wrong while creating a gl ${ub} shader object. gl error=${Ob}, gl isContextLost=${hb.isContextLost()}, _contextWasLost=${Bb}`)
      }
      return hb.shaderSource(Ob, bb), hb.compileShader(Ob), Ob
    }

    function lb(bb, ub) {
      ub.useProgram(bb)
    }

    function Kb(bb, ub) {
      const hb = bb;
      if (!hb.isParallelCompiled) return void ub(bb);
      const Bb = hb.onCompiled;
      hb.onCompiled = () => {
        Bb?.(), ub(bb)
      }
    }
  },
  39296: (bb, ub, hb) => {
    hb.d(ub, {
      ThinEngine: () => Cb
    });
    var Bb = hb(39302),
      Ob = hb(39325),
      Gb = hb(39350),
      Ub = hb(39366),
      Lb = hb(38302),
      Yb = hb(39316);
    class Sb {
      constructor() {
        this.shaderLanguage = 0
      }
      postProcessor(bb, ub, hb, Bb, Ob) {
        if (Ob.drawBuffersExtensionDisabled) {
          const ub = /#extension.+GL_EXT_draw_buffers.+(enable|require)/g;
          bb = bb.replace(ub, "")
        }
        return bb
      }
    }
    const ab = /(flat\s)?\s*varying\s*.*/;
    class Hb {
      constructor() {
        this.shaderLanguage = 0
      }
      attributeProcessor(bb) {
        return bb.replace("attribute", "in")
      }
      varyingCheck(bb, ub) {
        return ab.test(bb)
      }
      varyingProcessor(bb, ub) {
        return bb.replace("varying", ub ? "in" : "out")
      }
      postProcessor(bb, ub, hb) {
        const Bb = -1 !== bb.search(/#extension.+GL_EXT_draw_buffers.+require/);
        if (bb = (bb = bb.replace(/#extension.+(GL_OVR_multiview2|GL_OES_standard_derivatives|GL_EXT_shader_texture_lod|GL_EXT_frag_depth|GL_EXT_draw_buffers).+(enable|require)/g, "")).replace(/texture2D\s*\(/g, "texture("), hb) {
          const hb = -1 !== bb.search(/layout *\(location *= *0\) *out/g),
            Ob = -1 !== ub.indexOf("#define DUAL_SOURCE_BLENDING"),
            Gb = Ob ? "layout(location = 0, index = 0) out vec4 glFragColor;\nlayout(location = 0, index = 1) out vec4 glFragColor2;\n" : "layout(location = 0) out vec4 glFragColor;\n";
          Ob && (bb = "#extension GL_EXT_blend_func_extended : require\n" + bb), bb = (bb = (bb = (bb = (bb = (bb = (bb = bb.replace(/texture2DLodEXT\s*\(/g, "textureLod(")).replace(/textureCubeLodEXT\s*\(/g, "textureLod(")).replace(/textureCube\s*\(/g, "texture(")).replace(/gl_FragDepthEXT/g, "gl_FragDepth")).replace(/gl_FragColor/g, "glFragColor")).replace(/gl_FragData/g, "glFragData")).replace(/void\s+?main\s*\(/g, (Bb || hb ? "" : Gb) + "void main(")
        } else {
          ub.indexOf("#define VERTEXOUTPUT_INVARIANT") >= 0 && (bb = "invariant gl_Position;\n" + bb);
          if (-1 !== ub.indexOf("#define MULTIVIEW")) return "#extension GL_OVR_multiview2 : require\nlayout (num_views = 2) in;\n" + bb
        }
        return bb
      }
    }
    var wb = hb(39374),
      Zb = hb(39387),
      Xb = hb(39394),
      pb = hb(39287),
      ob = hb(39331),
      Ab = hb(39311),
      lb = hb(39402),
      Kb = hb(39360);
    class Wb {}
    class Cb extends Gb.d {
      get name() {
        return this._name
      }
      set name(bb) {
        this._name = bb
      }
      get version() {
        return this._webGLVersion
      }
      static get ShadersRepository() {
        return Bb.c.ShadersRepository
      }
      static set ShadersRepository(bb) {
        Bb.c.ShadersRepository = bb
      }
      get supportsUniformBuffers() {
        return this.NX > 1 && !this.disableUniformBuffers
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
      constructor(bb, ub, hb, Bb) {
        if (hb = hb || {}, super(ub ?? hb.antialias, hb, Bb), this._name = "WebGL", this.forcePOTTextures = !1, this.validateShaderPrograms = !1, this.disableUniformBuffers = !1, this._webGLVersion = 1, this._integerMRTAttachmentsMask = 0, this._vertexAttribArraysEnabled = [], this._uintIndicesCurrentlySet = !1, this._currentBoundBuffer = new Array, this._currentFramebuffer = null, this._dummyFramebuffer = null, this._currentBufferPointers = new Array, this._currentInstanceLocations = new Array, this._currentInstanceBuffers = new Array, this._vaoRecordInProgress = !1, this._mustWipeVertexAttributes = !1, this._nextFreeTextureSlots = new Array, this._maxSimultaneousTextures = 0, this._maxMSAASamplesOverride = null, this._unpackFlipYCached = null, this.enableUnpackFlipYCached = !0, this._boundUniforms = {}, !bb) return;
        let Gb;
        if (bb.getContext) {
          if (Gb = bb, void 0 === hb.preserveDrawingBuffer && (hb.preserveDrawingBuffer = !1), void 0 === hb.xrCompatible && (hb.xrCompatible = !1), navigator && navigator.userAgent) {
            this._setupMobileChecks();
            const bb = navigator.userAgent;
            for (const ub of Cb.ExceptionList) {
              const Bb = ub.key,
                Ob = ub.targets;
              if (new RegExp(Bb).test(bb)) {
                if (ub.capture && ub.captureConstraint) {
                  const hb = ub.capture,
                    Bb = ub.captureConstraint,
                    Ob = new RegExp(hb).exec(bb);
                  if (Ob && Ob.length > 0) {
                    if (parseInt(Ob[Ob.length - 1]) >= Bb) continue
                  }
                }
                for (const bb of Ob) switch (bb) {
                  case "uniformBuffer":
                    this.disableUniformBuffers = !0;
                    break;
                  case "vao":
                    this.disableVertexArrayObjects = !0;
                    break;
                  case "antialias":
                    hb.antialias = !1;
                    break;
                  case "maxMSAASamples":
                    this._maxMSAASamplesOverride = 1
                }
              }
            }
          }
          if (this._doNotHandleContextLost ? this._onContextLost = () => {
              (0, Ob.v)(this._gl)
            } : (this._onContextLost = bb => {
              bb.preventDefault(), this._contextWasLost = !0, (0, Ob.v)(this._gl), Lb.b.Warn("WebGL context lost."), this.onContextLostObservable.notifyObservers(this)
            }, this._onContextRestored = () => {
              this._restoreEngineAfterContextLost((() => this._initGLContext()))
            }, Gb.addEventListener("webglcontextrestored", this._onContextRestored, !1), hb.powerPreference = hb.powerPreference || "high-performance"), Gb.addEventListener("webglcontextlost", this._onContextLost, !1), this._badDesktopOS && (hb.xrCompatible = !1), !hb.disableWebGL2Support) try {
            this._gl = Gb.getContext("webgl2", hb) || Gb.getContext("experimental-webgl2", hb), this._gl && (this._webGLVersion = 2, this._shaderPlatformName = "WEBGL2", this._gl.deleteQuery || (this._webGLVersion = 1, this._shaderPlatformName = "WEBGL1"))
          } catch (ab) {}
          if (!this._gl) {
            if (!Gb) throw new Error("The provided canvas is null or undefined.");
            try {
              this._gl = Gb.getContext("webgl", hb) || Gb.getContext("experimental-webgl", hb)
            } catch (ab) {
              throw new Error("WebGL not supported", {
                cause: ab
              })
            }
          }
          if (!this._gl) throw new Error("WebGL not supported")
        } else {
          this._gl = bb, Gb = this._gl.canvas, this._gl.renderbufferStorageMultisample ? (this._webGLVersion = 2, this._shaderPlatformName = "WEBGL2") : this._shaderPlatformName = "WEBGL1";
          const ub = this._gl.getContextAttributes();
          ub && (hb.stencil = ub.stencil)
        }
        this._sharedInit(Gb), this._gl.pixelStorei(this._gl.UNPACK_COLORSPACE_CONVERSION_WEBGL, this._gl.NONE), void 0 !== hb.useHighPrecisionFloats && (this._highPrecisionShadersAllowed = hb.useHighPrecisionFloats), this.resize(), this._initGLContext(), this._initFeatures();
        for (let Ob = 0; Ob < this._caps.maxVertexAttribs; Ob++) this._currentBufferPointers[Ob] = new Wb;
        this._shaderProcessor = this.NX > 1 ? new Hb : new Sb;
        const Ub = `Babylon.js v${Cb.Version}`;
        Lb.b.Log(Ub + ` - ${this.description}`), this._renderingCanvas && this._renderingCanvas.setAttribute && this._renderingCanvas.setAttribute("data-engine", Ub);
        const Yb = (0, Ob.x)(this._gl);
        Yb.validateShaderPrograms = this.validateShaderPrograms, Yb.parallelShaderCompile = this._caps.parallelShaderCompile
      }
      _clearEmptyResources() {
        this._dummyFramebuffer = null, super._clearEmptyResources()
      }
      _getShaderProcessingContext(bb) {
        return null
      }
      areAllEffectsReady() {
        for (const bb in this._compiledEffects) {
          if (!this._compiledEffects[bb].isReady()) return !1
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
        const bb = this._gl.getExtension("WEBGL_debug_renderer_info");
        null != bb && (this._glRenderer = this._gl.getParameter(bb.UNMASKED_RENDERER_WEBGL), this._glVendor = this._gl.getParameter(bb.UNMASKED_VENDOR_WEBGL)), this._glVendor || (this._glVendor = this._gl.getParameter(this._gl.VENDOR) || "Unknown vendor"), this._glRenderer || (this._glRenderer = this._gl.getParameter(this._gl.RENDERER) || "Unknown renderer"), 36193 !== this._gl.HALF_FLOAT_OES && (this._gl.HALF_FLOAT_OES = 36193), 34842 !== this._gl.RGBA16F && (this._gl.RGBA16F = 34842), 34836 !== this._gl.RGBA32F && (this._gl.RGBA32F = 34836), 35056 !== this._gl.DEPTH24_STENCIL8 && (this._gl.DEPTH24_STENCIL8 = 35056), this._caps.timerQuery && (1 === this._webGLVersion && (this._gl.getQuery = this._caps.timerQuery.getQueryEXT.bind(this._caps.timerQuery)), this._caps.canUseTimestampForTimerQuery = (this._gl.getQuery(this._caps.timerQuery.TIMESTAMP_EXT, this._caps.timerQuery.QUERY_COUNTER_BITS_EXT) ?? 0) > 0), this._caps.maxAnisotropy = this._caps.textureAnisotropicFilterExtension ? this._gl.getParameter(this._caps.textureAnisotropicFilterExtension.MAX_TEXTURE_MAX_ANISOTROPY_EXT) : 0, this._caps.textureFloatLinearFiltering = !(!this._caps.textureFloat || !this._gl.getExtension("OES_texture_float_linear")), this._caps.textureFloatRender = !(!this._caps.textureFloat || !this._canRenderToFloatFramebuffer()), this._caps.textureHalfFloatLinearFiltering = !!(this._webGLVersion > 1 || this._caps.textureHalfFloat && this._gl.getExtension("OES_texture_half_float_linear")), this._caps.textureNorm16 && (this._gl.R16_EXT = 33322, this._gl.RG16_EXT = 33324, this._gl.RGB16_EXT = 32852, this._gl.RGBA16_EXT = 32859, this._gl.R16_SNORM_EXT = 36760, this._gl.RG16_SNORM_EXT = 36761, this._gl.RGB16_SNORM_EXT = 36762, this._gl.RGBA16_SNORM_EXT = 36763);
        const ub = this._gl.getExtension("OES_draw_buffers_indexed");
        if (this._caps.blendParametersPerTarget = !!ub, this._alphaState = new Kb.c(this._caps.blendParametersPerTarget), ub && (this._gl.blendEquationSeparateIndexed = ub.blendEquationSeparateiOES.bind(ub), this._gl.blendEquationIndexed = ub.blendEquationiOES.bind(ub), this._gl.blendFuncSeparateIndexed = ub.blendFuncSeparateiOES.bind(ub), this._gl.blendFuncIndexed = ub.blendFunciOES.bind(ub), this._gl.colorMaskIndexed = ub.colorMaskiOES.bind(ub), this._gl.disableIndexed = ub.disableiOES.bind(ub), this._gl.enableIndexed = ub.enableiOES.bind(ub)), this._caps.dualSourceBlending = !!this._gl.getExtension("WEBGL_blend_func_extended"), this._caps.astc && (this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR), this._caps.bptc && (this._gl.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT = this._caps.bptc.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT), this._caps.s3tc_srgb && (this._gl.COMPRESSED_SRGB_S3TC_DXT1_EXT = this._caps.s3tc_srgb.COMPRESSED_SRGB_S3TC_DXT1_EXT, this._gl.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT = this._caps.s3tc_srgb.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT, this._gl.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT = this._caps.s3tc_srgb.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT), this._caps.etc2 && (this._gl.COMPRESSED_SRGB8_ETC2 = this._caps.etc2.COMPRESSED_SRGB8_ETC2, this._gl.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC = this._caps.etc2.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC), this._webGLVersion > 1 && 5131 !== this._gl.HALF_FLOAT_OES && (this._gl.HALF_FLOAT_OES = 5131), this._caps.textureHalfFloatRender = this._caps.textureHalfFloat && this._canRenderToHalfFloatFramebuffer(), this._webGLVersion > 1) this._caps.drawBuffersExtension = !0, this._caps.maxMSAASamples = null !== this._maxMSAASamplesOverride ? this._maxMSAASamplesOverride : this._gl.getParameter(this._gl.MAX_SAMPLES), this._caps.maxDrawBuffers = this._gl.getParameter(this._gl.MAX_DRAW_BUFFERS);
        else {
          const bb = this._gl.getExtension("WEBGL_draw_buffers");
          if (null !== bb) {
            this._caps.drawBuffersExtension = !0, this._gl.drawBuffers = bb.drawBuffersWEBGL.bind(bb), this._caps.maxDrawBuffers = this._gl.getParameter(bb.MAX_DRAW_BUFFERS_WEBGL), this._gl.DRAW_FRAMEBUFFER = this._gl.FRAMEBUFFER;
            for (let ub = 0; ub < 16; ub++) this._gl["COLOR_ATTACHMENT" + ub + "_WEBGL"] = bb["COLOR_ATTACHMENT" + ub + "_WEBGL"]
          }
        }
        if (this._webGLVersion > 1) this._caps.depthTextureExtension = !0;
        else {
          const bb = this._gl.getExtension("WEBGL_depth_texture");
          null != bb && (this._caps.depthTextureExtension = !0, this._gl.UNSIGNED_INT_24_8 = bb.UNSIGNED_INT_24_8_WEBGL)
        }
        if (this.disableVertexArrayObjects) this._caps.vertexArrayObject = !1;
        else if (this._webGLVersion > 1) this._caps.vertexArrayObject = !0;
        else {
          const bb = this._gl.getExtension("OES_vertex_array_object");
          null != bb && (this._caps.vertexArrayObject = !0, this._gl.createVertexArray = bb.createVertexArrayOES.bind(bb), this._gl.bindVertexArray = bb.bindVertexArrayOES.bind(bb), this._gl.deleteVertexArray = bb.deleteVertexArrayOES.bind(bb))
        }
        if (this._webGLVersion > 1) this._caps.instancedArrays = !0;
        else {
          const bb = this._gl.getExtension("ANGLE_instanced_arrays");
          null != bb ? (this._caps.instancedArrays = !0, this._gl.drawArraysInstanced = bb.drawArraysInstancedANGLE.bind(bb), this._gl.drawElementsInstanced = bb.drawElementsInstancedANGLE.bind(bb), this._gl.vertexAttribDivisor = bb.vertexAttribDivisorANGLE.bind(bb)) : this._caps.instancedArrays = !1
        }
        if (this._gl.getShaderPrecisionFormat) {
          const bb = this._gl.getShaderPrecisionFormat(this._gl.VERTEX_SHADER, this._gl.HIGH_FLOAT),
            ub = this._gl.getShaderPrecisionFormat(this._gl.FRAGMENT_SHADER, this._gl.HIGH_FLOAT);
          if (bb && ub && (this._caps.highPrecisionShaderSupported = 0 !== bb.precision && 0 !== ub.precision, this._caps.shaderFloatPrecision = Math.min(bb.precision, ub.precision)), !this._shouldUseHighPrecisionShader) {
            const bb = this._gl.getShaderPrecisionFormat(this._gl.VERTEX_SHADER, this._gl.MEDIUM_FLOAT),
              ub = this._gl.getShaderPrecisionFormat(this._gl.FRAGMENT_SHADER, this._gl.MEDIUM_FLOAT);
            bb && ub && (this._caps.shaderFloatPrecision = Math.min(bb.precision, ub.precision))
          }
          this._caps.shaderFloatPrecision < 10 && (this._caps.shaderFloatPrecision = 10)
        }
        if (this._webGLVersion > 1) this._caps.blendMinMax = !0;
        else {
          const bb = this._gl.getExtension("EXT_blend_minmax");
          null != bb && (this._caps.blendMinMax = !0, this._gl.MAX = bb.MAX_EXT, this._gl.MIN = bb.MIN_EXT)
        }
        if (!this._caps.supportSRGBBuffers) {
          if (this._webGLVersion > 1) this._caps.supportSRGBBuffers = !0, this._glSRGBExtensionValues = {
            SRGB: WebGL2RenderingContext.SRGB,
            SRGB8: WebGL2RenderingContext.SRGB8,
            SRGB8_ALPHA8: WebGL2RenderingContext.SRGB8_ALPHA8
          };
          else {
            const bb = this._gl.getExtension("EXT_sRGB");
            null != bb && (this._caps.supportSRGBBuffers = !0, this._glSRGBExtensionValues = {
              SRGB: bb.SRGB_EXT,
              SRGB8: bb.SRGB_ALPHA_EXT,
              SRGB8_ALPHA8: bb.SRGB_ALPHA_EXT
            })
          }
          if (this._creationOptions) {
            const bb = this._creationOptions.forceSRGBBufferSupportState;
            void 0 !== bb && (this._caps.supportSRGBBuffers = this._caps.supportSRGBBuffers && bb)
          }
        }
        this._depthCullingState.depthTest = !0, this._depthCullingState.depthFunc = this._gl.LEQUAL, this._depthCullingState.depthMask = !0, this._maxSimultaneousTextures = this._caps.maxCombinedTexturesImageUnits;
        for (let hb = 0; hb < this._maxSimultaneousTextures; hb++) this._nextFreeTextureSlots.push(hb);
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
      get NX() {
        return this._webGLVersion
      }
      getClassName() {
        return "ThinEngine"
      }
      _prepareWorkingCanvas() {
        if (this._workingCanvas) return;
        this._workingCanvas = this.createCanvas(1, 1);
        const bb = this._workingCanvas.getContext("2d");
        bb && (this._workingContext = bb)
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
        const bb = this.getGlInfo();
        return bb && bb.renderer ? bb.renderer : ""
      }
      getRenderWidth() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && this._currentRenderTarget ? this._currentRenderTarget.width : this._framebufferDimensionsObject ? this._framebufferDimensionsObject.framebufferWidth : this._gl.drawingBufferWidth
      }
      getRenderHeight() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && this._currentRenderTarget ? this._currentRenderTarget.height : this._framebufferDimensionsObject ? this._framebufferDimensionsObject.framebufferHeight : this._gl.drawingBufferHeight
      }
      clear(bb, ub, hb) {
        let Bb = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          Ob = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
        const Gb = this.stencilStateComposer.useStencilGlobalOnly;
        this.stencilStateComposer.useStencilGlobalOnly = !0, this.applyStates(), this.stencilStateComposer.useStencilGlobalOnly = Gb;
        let Ub = 0;
        if (ub && bb) {
          let ub = !0;
          if (this._currentRenderTarget) {
            const hb = this._currentRenderTarget.texture?.format;
            if (void 0 !== hb && (0, lb.f)(hb)) {
              const hb = this._currentRenderTarget.texture?.type;
              void 0 !== hb && (0, lb.i)(hb) ? (Cb._TempClearColorUint32[0] = 255 * bb.r, Cb._TempClearColorUint32[1] = 255 * bb.g, Cb._TempClearColorUint32[2] = 255 * bb.b, Cb._TempClearColorUint32[3] = 255 * bb.a, this._gl.clearBufferuiv(this._gl.COLOR, 0, Cb._TempClearColorUint32), ub = !1) : (Cb._TempClearColorInt32[0] = 255 * bb.r, Cb._TempClearColorInt32[1] = 255 * bb.g, Cb._TempClearColorInt32[2] = 255 * bb.b, Cb._TempClearColorInt32[3] = 255 * bb.a, this._gl.clearBufferiv(this._gl.COLOR, 0, Cb._TempClearColorInt32), ub = !1)
            }
          }
          ub && (this._gl.clearColor(bb.r, bb.g, bb.b, void 0 !== bb.a ? bb.a : 1), Ub |= this._gl.COLOR_BUFFER_BIT)
        }
        hb && (this.aBb ? (this._depthCullingState.depthFunc = this._gl.GEQUAL, this._gl.clearDepth(0)) : this._gl.clearDepth(1), Ub |= this._gl.DEPTH_BUFFER_BIT), Bb && (this._gl.clearStencil(Ob), Ub |= this._gl.STENCIL_BUFFER_BIT), this._gl.clear(Ub)
      }
      _clearColorAttachment(bb, ub, hb, Bb) {
        if ((0, lb.f)(hb)) {
          const hb = (0, lb.i)(Bb),
            Ob = hb ? Cb._TempClearColorUint32 : Cb._TempClearColorInt32;
          return Ob[0] = ub.r, Ob[1] = ub.g, Ob[2] = ub.b, Ob[3] = ub.a, void(hb ? this._gl.clearBufferuiv(this._gl.COLOR, bb, Ob) : this._gl.clearBufferiv(this._gl.COLOR, bb, Ob))
        }
        Cb._TempClearColorFloat32[0] = ub.r, Cb._TempClearColorFloat32[1] = ub.g, Cb._TempClearColorFloat32[2] = ub.b, Cb._TempClearColorFloat32[3] = ub.a, this._gl.clearBufferfv(this._gl.COLOR, bb, Cb._TempClearColorFloat32)
      }
      _viewport(bb, ub, hb, Bb) {
        bb === this._viewportCached.x && ub === this._viewportCached.y && hb === this._viewportCached.z && Bb === this._viewportCached.w || (this._viewportCached.x = bb, this._viewportCached.y = ub, this._viewportCached.z = hb, this._viewportCached.w = Bb, this._gl.viewport(bb, ub, hb, Bb))
      }
      jW() {
        super.jW(), this._badOS && this.flushFramebuffer()
      }
      get performanceMonitor() {
        throw new Error("Not Supported by ThinEngine")
      }
      bindFramebuffer(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          hb = arguments.length > 2 ? arguments[2] : void 0,
          Bb = arguments.length > 3 ? arguments[3] : void 0,
          Ob = arguments.length > 4 ? arguments[4] : void 0,
          Gb = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          Ub = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        const Yb = bb;
        this._currentRenderTarget && this._resolveAndGenerateMipMapsFramebuffer(this._currentRenderTarget), this._currentRenderTarget = bb, this._integerMRTAttachmentsMask = !bb.isMulti && bb.texture && (0, lb.f)(bb.texture.format) ? 1 : 0, this._bindUnboundFramebuffer(Yb._framebuffer);
        const Sb = this._gl;
        bb.isMulti || (bb.is2DArray || bb.is3D ? (Sb.framebufferTextureLayer(Sb.FRAMEBUFFER, Sb.COLOR_ATTACHMENT0, bb.texture._hardwareTexture?.underlyingResource, Gb, Ub), Yb._currentLOD = Gb) : bb.isCube ? Sb.framebufferTexture2D(Sb.FRAMEBUFFER, Sb.COLOR_ATTACHMENT0, Sb.TEXTURE_CUBE_MAP_POSITIVE_X + ub, bb.texture._hardwareTexture?.underlyingResource, Gb) : Yb._currentLOD !== Gb && (Sb.framebufferTexture2D(Sb.FRAMEBUFFER, Sb.COLOR_ATTACHMENT0, Sb.TEXTURE_2D, bb.texture._hardwareTexture?.underlyingResource, Gb), Yb._currentLOD = Gb));
        const ab = bb._depthStencilTexture;
        if (ab) {
          bb.is3D && (bb.texture.width === ab.width && bb.texture.height === ab.height && bb.texture.depth === ab.depth || Lb.b.Warn("Depth/Stencil attachment for 3D target must have same dimensions as color attachment"));
          const hb = bb._depthStencilTextureWithStencil ? Sb.DEPTH_STENCIL_ATTACHMENT : Sb.DEPTH_ATTACHMENT;
          bb.is2DArray || bb.is3D ? Sb.framebufferTextureLayer(Sb.FRAMEBUFFER, hb, ab._hardwareTexture?.underlyingResource, Gb, Ub) : bb.isCube ? Sb.framebufferTexture2D(Sb.FRAMEBUFFER, hb, Sb.TEXTURE_CUBE_MAP_POSITIVE_X + ub, ab._hardwareTexture?.underlyingResource, Gb) : Sb.framebufferTexture2D(Sb.FRAMEBUFFER, hb, Sb.TEXTURE_2D, ab._hardwareTexture?.underlyingResource, Gb)
        }
        Yb._MSAAFramebuffer && this._bindUnboundFramebuffer(Yb._MSAAFramebuffer), this._cachedViewport && !Ob ? this.setViewport(this._cachedViewport, hb, Bb) : (hb || (hb = bb.width, Gb && (hb /= Math.pow(2, Gb))), Bb || (Bb = bb.height, Gb && (Bb /= Math.pow(2, Gb))), this._viewport(0, 0, hb, Bb)), this.wipeCaches()
      }
      setStateCullFaceType(bb, ub) {
        const hb = this.cullBackFaces ?? bb ?? 1 ? this._gl.BACK : this._gl.FRONT;
        (this._depthCullingState.cullFace !== hb || ub) && (this._depthCullingState.cullFace = hb)
      }
      setState(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          hb = arguments.length > 2 ? arguments[2] : void 0,
          Bb = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          Ob = arguments.length > 4 ? arguments[4] : void 0,
          Gb = arguments.length > 5 ? arguments[5] : void 0,
          Ub = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        (this._depthCullingState.cull !== bb || hb) && (this._depthCullingState.cull = bb), this.setStateCullFaceType(Ob, hb), this.setZOffset(ub), this.setZOffsetUnits(Ub);
        const Lb = Bb ? this._gl.CW : this._gl.CCW;
        (this._depthCullingState.frontFace !== Lb || hb) && (this._depthCullingState.frontFace = Lb), this._stencilStateComposer.stencilMaterial = Gb
      }
      _resolveAndGenerateMipMapsFramebuffer(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        bb.disableAutomaticMSAAResolve || (bb.isMulti ? this.resolveMultiFramebuffer(bb) : this.resolveFramebuffer(bb)), ub || (bb.isMulti ? this.generateMipMapsMultiFramebuffer(bb) : this.generateMipMapsFramebuffer(bb))
      }
      _bindUnboundFramebuffer(bb) {
        this._currentFramebuffer !== bb && (this._gl.bindFramebuffer(this._gl.FRAMEBUFFER, bb), this._currentFramebuffer = bb)
      }
      _currentFrameBufferIsDefaultFrameBuffer() {
        return null === this._currentFramebuffer
      }
      generateMipmaps(bb) {
        const ub = this._getTextureTarget(bb);
        this._bindTextureDirectly(ub, bb, !0), this._gl.generateMipmap(ub), this._bindTextureDirectly(ub, null)
      }
      unBindFramebuffer(bb, ub, hb) {
        const Bb = bb;
        this._currentRenderTarget = null, this._integerMRTAttachmentsMask = 0, this._resolveAndGenerateMipMapsFramebuffer(bb, ub), hb && (Bb._MSAAFramebuffer && this._bindUnboundFramebuffer(Bb._framebuffer), hb()), this._bindUnboundFramebuffer(null)
      }
      generateMipMapsFramebuffer(bb) {
        bb.isMulti || !bb.texture?.generateMipMaps || bb.isCube || this.generateMipmaps(bb.texture)
      }
      resolveFramebuffer(bb) {
        const ub = bb,
          hb = this._gl;
        if (!ub._MSAAFramebuffer || ub.isMulti) return;
        let Bb = ub.resolveMSAAColors ? hb.COLOR_BUFFER_BIT : 0;
        Bb |= ub._generateDepthBuffer && ub.resolveMSAADepth ? hb.DEPTH_BUFFER_BIT : 0, Bb |= ub._generateStencilBuffer && ub.resolveMSAAStencil ? hb.STENCIL_BUFFER_BIT : 0, hb.bindFramebuffer(hb.READ_FRAMEBUFFER, ub._MSAAFramebuffer), hb.bindFramebuffer(hb.DRAW_FRAMEBUFFER, ub._framebuffer), hb.blitFramebuffer(0, 0, bb.width, bb.height, 0, 0, bb.width, bb.height, Bb, hb.NEAREST)
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
      createVertexBuffer(bb, ub, hb) {
        return this._createVertexBuffer(bb, this._gl.STATIC_DRAW)
      }
      _createVertexBuffer(bb, ub) {
        const hb = this._gl.createBuffer();
        if (!hb) throw new Error("Unable to create vertex buffer");
        const Bb = new wb.e(hb);
        return this.bindArrayBuffer(Bb), "number" !== typeof bb ? bb instanceof Array ? (this._gl.bufferData(this._gl.ARRAY_BUFFER, new Float32Array(bb), ub), Bb.LH = 4 * bb.length) : (this._gl.bufferData(this._gl.ARRAY_BUFFER, bb, ub), Bb.LH = bb.byteLength) : (this._gl.bufferData(this._gl.ARRAY_BUFFER, new Uint8Array(bb), ub), Bb.LH = bb), this._resetVertexBufferBinding(), Bb.references = 1, Bb
      }
      createDynamicVertexBuffer(bb, ub) {
        return this._createVertexBuffer(bb, this._gl.DYNAMIC_DRAW)
      }
      _resetIndexBufferBinding() {
        this.bindIndexBuffer(null), this._cachedIndexBuffer = null
      }
      createIndexBuffer(bb, ub, hb) {
        const Bb = this._gl.createBuffer(),
          Ob = new wb.e(Bb);
        if (!Bb) throw new Error("Unable to create index buffer");
        this.bindIndexBuffer(Ob);
        const Gb = this._normalizeIndexData(bb);
        return this._gl.bufferData(this._gl.ELEMENT_ARRAY_BUFFER, Gb, ub ? this._gl.DYNAMIC_DRAW : this._gl.STATIC_DRAW), this._resetIndexBufferBinding(), Ob.references = 1, Ob.is32Bits = 4 === Gb.BYTES_PER_ELEMENT, Ob
      }
      _normalizeIndexData(bb) {
        if (2 === bb.BYTES_PER_ELEMENT) return bb;
        if (this._caps.uintIndices) {
          if (bb instanceof Uint32Array) return bb;
          for (let ub = 0; ub < bb.length; ub++)
            if (bb[ub] >= 65535) return new Uint32Array(bb);
          return new Uint16Array(bb)
        }
        return new Uint16Array(bb)
      }
      bindArrayBuffer(bb) {
        this._vaoRecordInProgress || this._unbindVertexArrayObject(), this._bindBuffer(bb, this._gl.ARRAY_BUFFER)
      }
      bindUniformBlock(bb, ub, hb) {
        const Bb = bb.program,
          Ob = this._gl.getUniformBlockIndex(Bb, ub);
        this._gl.uniformBlockBinding(Bb, Ob, hb)
      }
      bindIndexBuffer(bb) {
        this._vaoRecordInProgress || this._unbindVertexArrayObject(), this._bindBuffer(bb, this._gl.ELEMENT_ARRAY_BUFFER)
      }
      _bindBuffer(bb, ub) {
        (this._vaoRecordInProgress || this._currentBoundBuffer[ub] !== bb) && (this._gl.bindBuffer(ub, bb ? bb.underlyingResource : null), this._currentBoundBuffer[ub] = bb)
      }
      updateArrayBuffer(bb) {
        this._gl.bufferSubData(this._gl.ARRAY_BUFFER, 0, bb)
      }
      _vertexAttribPointer(bb, ub, hb, Bb, Ob, Gb, Ub) {
        const Lb = this._currentBufferPointers[ub];
        if (!Lb) return;
        let Yb = !1;
        Lb.active ? (Lb.buffer !== bb && (Lb.buffer = bb, Yb = !0), Lb.size !== hb && (Lb.size = hb, Yb = !0), Lb.type !== Bb && (Lb.type = Bb, Yb = !0), Lb.normalized !== Ob && (Lb.normalized = Ob, Yb = !0), Lb.stride !== Gb && (Lb.stride = Gb, Yb = !0), Lb.offset !== Ub && (Lb.offset = Ub, Yb = !0)) : (Yb = !0, Lb.active = !0, Lb.index = ub, Lb.size = hb, Lb.type = Bb, Lb.normalized = Ob, Lb.stride = Gb, Lb.offset = Ub, Lb.buffer = bb), (Yb || this._vaoRecordInProgress) && (this.bindArrayBuffer(bb), Bb === this._gl.UNSIGNED_INT || Bb === this._gl.INT ? this._gl.vertexAttribIPointer(ub, hb, Bb, Gb, Ub) : this._gl.vertexAttribPointer(ub, hb, Bb, Ob, Gb, Ub))
      }
      _bindIndexBufferWithCache(bb) {
        null != bb && this._cachedIndexBuffer !== bb && (this._cachedIndexBuffer = bb, this.bindIndexBuffer(bb), this._uintIndicesCurrentlySet = bb.is32Bits)
      }
      _bindVertexBuffersAttributes(bb, ub, hb) {
        const Bb = ub.getAttributesNames();
        this._vaoRecordInProgress || this._unbindVertexArrayObject(), this.unbindAllAttributes();
        for (let Ob = 0; Ob < Bb.length; Ob++) {
          const Gb = ub.getAttributeLocation(Ob);
          if (Gb >= 0) {
            const ub = Bb[Ob];
            let Ub = null;
            if (hb && (Ub = hb[ub]), Ub || (Ub = bb[ub]), !Ub) continue;
            this._gl.enableVertexAttribArray(Gb), this._vaoRecordInProgress || (this._vertexAttribArraysEnabled[Gb] = !0);
            const Lb = Ub.getBuffer();
            Lb && (this._vertexAttribPointer(Lb, Gb, Ub.getSize(), Ub.type, Ub.normalized, Ub.byteStride, Ub.byteOffset), Ub.getIsInstanced() && (this._gl.vertexAttribDivisor(Gb, Ub.getInstanceDivisor()), this._vaoRecordInProgress || (this._currentInstanceLocations.push(Gb), this._currentInstanceBuffers.push(Lb))))
          }
        }
      }
      recordVertexArrayObject(bb, ub, hb, Bb) {
        const Ob = this._gl.createVertexArray();
        if (!Ob) throw new Error("Unable to create VAO");
        return this._vaoRecordInProgress = !0, this._gl.bindVertexArray(Ob), this._mustWipeVertexAttributes = !0, this._bindVertexBuffersAttributes(bb, hb, Bb), this.bindIndexBuffer(ub), this._vaoRecordInProgress = !1, this._gl.bindVertexArray(null), Ob
      }
      bindVertexArrayObject(bb, ub) {
        this._cachedVertexArrayObject !== bb && (this._cachedVertexArrayObject = bb, this._gl.bindVertexArray(bb), this._cachedVertexBuffers = null, this._cachedIndexBuffer = null, this._uintIndicesCurrentlySet = null != ub && ub.is32Bits, this._mustWipeVertexAttributes = !0)
      }
      bindBuffersDirectly(bb, ub, hb, Bb, Ob) {
        if (this._cachedVertexBuffers !== bb || this._cachedEffectForVertexBuffers !== Ob) {
          this._cachedVertexBuffers = bb, this._cachedEffectForVertexBuffers = Ob;
          const ub = Ob.getAttributesCount();
          this._unbindVertexArrayObject(), this.unbindAllAttributes();
          let Gb = 0;
          for (let Ub = 0; Ub < ub; Ub++)
            if (Ub < hb.length) {
              const ub = Ob.getAttributeLocation(Ub);
              ub >= 0 && (this._gl.enableVertexAttribArray(ub), this._vertexAttribArraysEnabled[ub] = !0, this._vertexAttribPointer(bb, ub, hb[Ub], this._gl.FLOAT, !1, Bb, Gb)), Gb += 4 * hb[Ub]
            }
        }
        this._bindIndexBufferWithCache(ub)
      }
      _unbindVertexArrayObject() {
        this._cachedVertexArrayObject && (this._cachedVertexArrayObject = null, this._gl.bindVertexArray(null))
      }
      bindBuffers(bb, ub, hb, Bb) {
        this._cachedVertexBuffers === bb && this._cachedEffectForVertexBuffers === hb || (this._cachedVertexBuffers = bb, this._cachedEffectForVertexBuffers = hb, this._bindVertexBuffersAttributes(bb, hb, Bb)), this._bindIndexBufferWithCache(ub)
      }
      unbindInstanceAttributes() {
        let bb;
        for (let ub = 0, hb = this._currentInstanceLocations.length; ub < hb; ub++) {
          const hb = this._currentInstanceBuffers[ub];
          bb != hb && hb.references && (bb = hb, this.bindArrayBuffer(hb));
          const Bb = this._currentInstanceLocations[ub];
          this._gl.vertexAttribDivisor(Bb, 0)
        }
        this._currentInstanceBuffers.length = 0, this._currentInstanceLocations.length = 0
      }
      releaseVertexArrayObject(bb) {
        this._gl.deleteVertexArray(bb)
      }
      _releaseBuffer(bb) {
        return bb.references--, 0 === bb.references && (this._deleteBuffer(bb), !0)
      }
      _deleteBuffer(bb) {
        this._gl.deleteBuffer(bb.underlyingResource)
      }
      updateAndBindInstancesBuffer(bb, ub, hb) {
        if (this.bindArrayBuffer(bb), ub && this._gl.bufferSubData(this._gl.ARRAY_BUFFER, 0, ub), void 0 !== hb[0].index) this.bindInstancesBuffer(bb, hb, !0);
        else
          for (let Bb = 0; Bb < 4; Bb++) {
            const ub = hb[Bb];
            this._vertexAttribArraysEnabled[ub] || (this._gl.enableVertexAttribArray(ub), this._vertexAttribArraysEnabled[ub] = !0), this._vertexAttribPointer(bb, ub, 4, this._gl.FLOAT, !1, 64, 16 * Bb), this._gl.vertexAttribDivisor(ub, 1), this._currentInstanceLocations.push(ub), this._currentInstanceBuffers.push(bb)
          }
      }
      bindInstancesBuffer(bb, ub) {
        let hb = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this.bindArrayBuffer(bb);
        let Bb = 0;
        if (hb)
          for (let Ob = 0; Ob < ub.length; Ob++) {
            Bb += 4 * ub[Ob].attributeSize
          }
        for (let Ob = 0; Ob < ub.length; Ob++) {
          const hb = ub[Ob];
          void 0 === hb.index && (hb.index = this._currentEffect.getAttributeLocationByName(hb.attributeName)), hb.index < 0 || (this._vertexAttribArraysEnabled[hb.index] || (this._gl.enableVertexAttribArray(hb.index), this._vertexAttribArraysEnabled[hb.index] = !0), this._vertexAttribPointer(bb, hb.index, hb.attributeSize, hb.attributeType || this._gl.FLOAT, hb.normalized || !1, Bb, hb.offset), this._gl.vertexAttribDivisor(hb.index, void 0 === hb.divisor ? 1 : hb.divisor), this._currentInstanceLocations.push(hb.index), this._currentInstanceBuffers.push(bb))
        }
      }
      disableInstanceAttributeByName(bb) {
        if (!this._currentEffect) return;
        const ub = this._currentEffect.getAttributeLocationByName(bb);
        this.disableInstanceAttribute(ub)
      }
      disableInstanceAttribute(bb) {
        let ub, hb = !1;
        for (; - 1 !== (ub = this._currentInstanceLocations.indexOf(bb));) this._currentInstanceLocations.splice(ub, 1), this._currentInstanceBuffers.splice(ub, 1), hb = !0;
        hb && (this._gl.vertexAttribDivisor(bb, 0), this.disableAttributeByIndex(bb))
      }
      disableAttributeByIndex(bb) {
        this._gl.disableVertexAttribArray(bb), this._vertexAttribArraysEnabled[bb] = !1, this._currentBufferPointers[bb].active = !1
      }
      draw(bb, ub, hb, Bb) {
        this.drawElementsType(bb ? 0 : 1, ub, hb, Bb)
      }
      drawPointClouds(bb, ub, hb) {
        this.drawArraysType(2, bb, ub, hb)
      }
      drawUnIndexed(bb, ub, hb, Bb) {
        this.drawArraysType(bb ? 0 : 1, ub, hb, Bb)
      }
      drawElementsType(bb, ub, hb, Bb) {
        this.applyStates(), this._reportDrawCall();
        const Ob = this._drawMode(bb),
          Gb = this._uintIndicesCurrentlySet ? this._gl.UNSIGNED_INT : this._gl.UNSIGNED_SHORT,
          Ub = this._uintIndicesCurrentlySet ? 4 : 2;
        Bb ? this._gl.drawElementsInstanced(Ob, hb, Gb, ub * Ub, Bb) : this._gl.drawElements(Ob, hb, Gb, ub * Ub)
      }
      drawArraysType(bb, ub, hb, Bb) {
        this.applyStates(), this._reportDrawCall();
        const Ob = this._drawMode(bb);
        Bb ? this._gl.drawArraysInstanced(Ob, ub, hb, Bb) : this._gl.drawArrays(Ob, ub, hb)
      }
      _drawMode(bb) {
        switch (bb) {
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
      _releaseEffect(bb) {
        this._compiledEffects[bb._key] && delete this._compiledEffects[bb._key];
        const ub = bb.getPipelineContext();
        ub && this._deletePipelineContext(ub)
      }
      _deletePipelineContext(bb) {
        const ub = bb;
        ub && ub.program && (ub.program.__SPECTOR_rebuildProgram = null, (0, Ab.k)(ub), this._gl && (this._currentProgram === ub.program && this._setProgram(null), this._gl.deleteProgram(ub.program)))
      }
      _getGlobalDefines(bb) {
        return (0, ob.e)(bb, this.isNDCHalfZRange, this.aBb, this.useExactSrgbConversions)
      }
      createEffect(bb, ub, hb, Gb, Ub, Lb, Yb, Sb, ab) {
        let Hb = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
          wb = arguments.length > 10 ? arguments[10] : void 0;
        const Zb = "string" === typeof bb ? bb : bb.vertexToken || bb.vertexSource || bb.vertexElement || bb.vertex,
          Xb = "string" === typeof bb ? bb : bb.fragmentToken || bb.fragmentSource || bb.fragmentElement || bb.fragment,
          pb = this._getGlobalDefines(),
          ob = void 0 !== ub.attributes;
        let Ab = Ub ?? ub.defines ?? "";
        pb && (Ab += pb);
        const lb = Zb + "+" + Xb + "@" + Ab;
        if (this._compiledEffects[lb]) {
          const bb = this._compiledEffects[lb];
          return Yb && bb.isReady() && Yb(bb), bb._refCount++, bb
        }
        this._gl && (0, Ob.x)(this._gl);
        const Kb = new Bb.c(bb, ub, ob ? this : hb, Gb, this, Ub, Lb, Yb, Sb, ab, lb, ub.shaderLanguage ?? Hb, ub.extraInitializationsAsync ?? wb);
        return this._compiledEffects[lb] = Kb, Kb
      }
      _getShaderSource(bb) {
        return this._gl.getShaderSource(bb)
      }
      createRawShaderProgram(bb, ub, hb, Bb) {
        let Gb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
        const Ub = (0, Ob.x)(this._gl);
        return Ub._contextWasLost = this._contextWasLost, Ub.validateShaderPrograms = this.validateShaderPrograms, (0, Ob.q)(bb, ub, hb, Bb || this._gl, Gb)
      }
      createShaderProgram(bb, ub, hb, Bb, Gb) {
        let Ub = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null;
        const Lb = (0, Ob.x)(this._gl);
        return Lb._contextWasLost = this._contextWasLost, Lb.validateShaderPrograms = this.validateShaderPrograms, (0, Ob.s)(bb, ub, hb, Bb, Gb || this._gl, Ub)
      }
      inlineShaderCode(bb) {
        return bb
      }
      createPipelineContext(bb) {
        if (this._gl) {
          (0, Ob.x)(this._gl).parallelShaderCompile = this._caps.parallelShaderCompile
        }
        const ub = (0, Ob.o)(this._gl, bb);
        return ub.engine = this, ub
      }
      createMaterialContext() {}
      createDrawContext() {}
      _finalizePipelineContext(bb) {
        return (0, Ob.h)(bb, this._gl, this.validateShaderPrograms)
      }
      _preparePipelineContextAsync(bb, ub, hb, Bb, Gb, Ub, Lb, Yb, Sb, ab, Hb) {
        const wb = (0, Ob.x)(this._gl);
        return wb._contextWasLost = this._contextWasLost, wb.validateShaderPrograms = this.validateShaderPrograms, wb._createShaderProgramInjection = this._createShaderProgram.bind(this), wb.createRawShaderProgramInjection = this.createRawShaderProgram.bind(this), wb.createShaderProgramInjection = this.createShaderProgram.bind(this), wb.loadFileInjection = this._loadFile.bind(this), (0, Ob.k)(bb, ub, hb, Bb, Gb, Ub, Lb, Yb, Sb, ab, Hb)
      }
      _createShaderProgram(bb, ub, hb, Bb) {
        let Gb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
        return (0, Ob.d)(bb, ub, hb, Bb, Gb)
      }
      _isRenderingStateCompiled(bb) {
        return !this._isDisposed && (0, Ob.i)(bb, this._gl, this.validateShaderPrograms)
      }
      _executeWhenRenderingStateIsCompiled(bb, ub) {
        (0, Ob.g)(bb, ub)
      }
      getUniforms(bb, ub) {
        const hb = new Array,
          Bb = bb;
        for (let Ob = 0; Ob < ub.length; Ob++) hb.push(this._gl.getUniformLocation(Bb.program, ub[Ob]));
        return hb
      }
      getAttributes(bb, ub) {
        const hb = [],
          Bb = bb;
        for (let Gb = 0; Gb < ub.length; Gb++) try {
          hb.push(this._gl.getAttribLocation(Bb.program, ub[Gb]))
        } catch (Ob) {
          hb.push(-1)
        }
        return hb
      }
      enableEffect(bb) {
        (bb = null !== bb && (0, Ub.b)(bb) ? bb.effect : bb) && bb !== this._currentEffect && (this._stencilStateComposer.stencilMaterial = void 0, this.bindSamplers(bb), this._currentEffect = bb, bb.onBind && bb.onBind(bb), bb._onBindObservable && bb._onBindObservable.notifyObservers(bb))
      }
      setInt(bb, ub) {
        return !!bb && (this._gl.uniform1i(bb, ub), !0)
      }
      setInt2(bb, ub, hb) {
        return !!bb && (this._gl.uniform2i(bb, ub, hb), !0)
      }
      setInt3(bb, ub, hb, Bb) {
        return !!bb && (this._gl.uniform3i(bb, ub, hb, Bb), !0)
      }
      setInt4(bb, ub, hb, Bb, Ob) {
        return !!bb && (this._gl.uniform4i(bb, ub, hb, Bb, Ob), !0)
      }
      setIntArray(bb, ub) {
        return !!bb && (this._gl.uniform1iv(bb, ub), !0)
      }
      setIntArray2(bb, ub) {
        return !(!bb || ub.length % 2 !== 0) && (this._gl.uniform2iv(bb, ub), !0)
      }
      setIntArray3(bb, ub) {
        return !(!bb || ub.length % 3 !== 0) && (this._gl.uniform3iv(bb, ub), !0)
      }
      setIntArray4(bb, ub) {
        return !(!bb || ub.length % 4 !== 0) && (this._gl.uniform4iv(bb, ub), !0)
      }
      setUInt(bb, ub) {
        return !!bb && (this._gl.uniform1ui(bb, ub), !0)
      }
      setUInt2(bb, ub, hb) {
        return !!bb && (this._gl.uniform2ui(bb, ub, hb), !0)
      }
      setUInt3(bb, ub, hb, Bb) {
        return !!bb && (this._gl.uniform3ui(bb, ub, hb, Bb), !0)
      }
      setUInt4(bb, ub, hb, Bb, Ob) {
        return !!bb && (this._gl.uniform4ui(bb, ub, hb, Bb, Ob), !0)
      }
      setUIntArray(bb, ub) {
        return !!bb && (this._gl.uniform1uiv(bb, ub), !0)
      }
      setUIntArray2(bb, ub) {
        return !(!bb || ub.length % 2 !== 0) && (this._gl.uniform2uiv(bb, ub), !0)
      }
      setUIntArray3(bb, ub) {
        return !(!bb || ub.length % 3 !== 0) && (this._gl.uniform3uiv(bb, ub), !0)
      }
      setUIntArray4(bb, ub) {
        return !(!bb || ub.length % 4 !== 0) && (this._gl.uniform4uiv(bb, ub), !0)
      }
      setArray(bb, ub) {
        return !!bb && (!(ub.length < 1) && (this._gl.uniform1fv(bb, ub), !0))
      }
      setArray2(bb, ub) {
        return !(!bb || ub.length % 2 !== 0) && (this._gl.uniform2fv(bb, ub), !0)
      }
      setArray3(bb, ub) {
        return !(!bb || ub.length % 3 !== 0) && (this._gl.uniform3fv(bb, ub), !0)
      }
      setArray4(bb, ub) {
        return !(!bb || ub.length % 4 !== 0) && (this._gl.uniform4fv(bb, ub), !0)
      }
      setMatrices(bb, ub) {
        return !!bb && (this._gl.uniformMatrix4fv(bb, !1, ub), !0)
      }
      setMatrix3x3(bb, ub) {
        return !!bb && (this._gl.uniformMatrix3fv(bb, !1, ub), !0)
      }
      setMatrix2x2(bb, ub) {
        return !!bb && (this._gl.uniformMatrix2fv(bb, !1, ub), !0)
      }
      setFloat(bb, ub) {
        return !!bb && (this._gl.uniform1f(bb, ub), !0)
      }
      setFloat2(bb, ub, hb) {
        return !!bb && (this._gl.uniform2f(bb, ub, hb), !0)
      }
      setFloat3(bb, ub, hb, Bb) {
        return !!bb && (this._gl.uniform3f(bb, ub, hb, Bb), !0)
      }
      setFloat4(bb, ub, hb, Bb, Ob) {
        return !!bb && (this._gl.uniform4f(bb, ub, hb, Bb, Ob), !0)
      }
      _applyColorWriteState() {
        if (this._colorWriteChanged) {
          this._colorWriteChanged = !1;
          const bb = this._colorWrite;
          this._gl.colorMask(bb, bb, bb, bb)
        }
      }
      applyStates() {
        this._depthCullingState.apply(this._gl), this._stencilStateComposer.apply(this._gl), this._alphaState.apply(this._gl, this._currentRenderTarget && this._currentRenderTarget.textures ? this._currentRenderTarget.textures.length : 1, this._integerMRTAttachmentsMask), this._applyColorWriteState()
      }
      wipeCaches(bb) {
        this.preventCacheWipeBetweenFrames && !bb || (this._currentEffect = null, this._viewportCached.x = 0, this._viewportCached.y = 0, this._viewportCached.z = 0, this._viewportCached.w = 0, this._unbindVertexArrayObject(), bb && (this._currentProgram = null, this.resetTextureCache(), this._stencilStateComposer.reset(), this._depthCullingState.reset(), this._depthCullingState.depthFunc = this._gl.LEQUAL, this._alphaState.reset(), this._resetAlphaMode(), this._colorWrite = !0, this._colorWriteChanged = !0, this._unpackFlipYCached = null, this._gl.pixelStorei(this._gl.UNPACK_COLORSPACE_CONVERSION_WEBGL, this._gl.NONE), this._gl.pixelStorei(this._gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), this._mustWipeVertexAttributes = !0, this.unbindAllAttributes()), this._resetVertexBufferBinding(), this._cachedIndexBuffer = null, this._cachedEffectForVertexBuffers = null, this.bindIndexBuffer(null))
      }
      _getSamplingParameters(bb, ub) {
        const hb = this._gl;
        let Bb = hb.NEAREST,
          Ob = hb.NEAREST,
          Gb = !1;
        switch (bb) {
          case 11:
            Bb = hb.LINEAR, Ob = ub ? hb.LINEAR_MIPMAP_NEAREST : hb.LINEAR;
            break;
          case 3:
            Bb = hb.LINEAR, Gb = !0, Ob = ub ? hb.LINEAR_MIPMAP_LINEAR : hb.LINEAR;
            break;
          case 8:
            Gb = !0, Bb = hb.NEAREST, Ob = ub ? hb.NEAREST_MIPMAP_LINEAR : hb.NEAREST;
            break;
          case 4:
            Bb = hb.NEAREST, Ob = ub ? hb.NEAREST_MIPMAP_NEAREST : hb.NEAREST;
            break;
          case 5:
            Bb = hb.NEAREST, Ob = ub ? hb.LINEAR_MIPMAP_NEAREST : hb.LINEAR;
            break;
          case 6:
            Gb = !0, Bb = hb.NEAREST, Ob = ub ? hb.LINEAR_MIPMAP_LINEAR : hb.LINEAR;
            break;
          case 7:
            Bb = hb.NEAREST, Ob = hb.LINEAR;
            break;
          case 1:
            Bb = hb.NEAREST, Ob = hb.NEAREST;
            break;
          case 9:
            Bb = hb.LINEAR, Ob = ub ? hb.NEAREST_MIPMAP_NEAREST : hb.NEAREST;
            break;
          case 10:
            Gb = !0, Bb = hb.LINEAR, Ob = ub ? hb.NEAREST_MIPMAP_LINEAR : hb.NEAREST;
            break;
          case 2:
            Bb = hb.LINEAR, Ob = hb.LINEAR;
            break;
          case 12:
            Bb = hb.LINEAR, Ob = hb.NEAREST
        }
        return {
          min: Ob,
          mag: Bb,
          hasMipMaps: Gb
        }
      }
      _createTexture() {
        const bb = this._gl.createTexture();
        if (!bb) throw new Error("Unable to create texture");
        return bb
      }
      _createHardwareTexture() {
        return new Xb.c(this._createTexture(), this._gl)
      }
      _createInternalTexture(bb, ub) {
        let hb, Bb, Ob = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          Gb = !1,
          Ub = 0,
          Yb = 3,
          Sb = 5,
          ab = !1,
          Hb = 1,
          wb = !1,
          Zb = 0,
          Xb = !1;
        void 0 !== ub && "object" === typeof ub ? (hb = !!ub.generateMipMaps, Gb = !!ub.createMipMaps, Ub = void 0 === ub.type ? 0 : ub.type, Yb = void 0 === ub.samplingMode ? 3 : ub.samplingMode, Sb = void 0 === ub.format ? 5 : ub.format, ab = void 0 !== ub.useSRGBBuffer && ub.useSRGBBuffer, Hb = ub.samples ?? 1, Bb = ub.label, wb = !!ub.createMSAATexture, Zb = ub.comparisonFunction || 0, Xb = !!ub.isCube) : hb = !!ub, ab && (ab = this._caps.supportSRGBBuffers && (this.NX > 1 || this.isWebGPU)), (1 !== Ub || this._caps.textureFloatLinearFiltering) && (2 !== Ub || this._caps.textureHalfFloatLinearFiltering) || (Yb = 1), 1 !== Ub || this._caps.textureFloat || (Ub = 0, Lb.b.Warn("Float textures are not supported. Type forced to TEXTURETYPE_UNSIGNED_BYTE"));
        const ob = (0, lb.e)(Sb),
          Ab = (0, lb.c)(Sb),
          Kb = this._gl,
          Wb = new pb.b(this, Ob),
          Cb = bb.width || bb,
          db = bb.height || bb,
          rb = bb.depth || 0,
          jb = bb.layers || 0,
          nb = this._getSamplingParameters(Yb, (hb || Gb) && !ob),
          Db = 0 !== jb ? Kb.TEXTURE_2D_ARRAY : 0 !== rb ? Kb.TEXTURE_3D : Xb ? Kb.TEXTURE_CUBE_MAP : Kb.TEXTURE_2D,
          xb = ob ? this._getInternalFormatFromDepthTextureFormat(Sb, !0, Ab) : this._getRGBABufferInternalSizedFormat(Ub, Sb, ab),
          zb = ob ? Ab ? Kb.DEPTH_STENCIL : Kb.DEPTH_COMPONENT : this._getInternalFormat(Sb),
          gb = ob ? this._getWebGLTextureTypeFromDepthTextureFormat(Sb) : this._getWebGLTextureType(Ub);
        if (this._bindTextureDirectly(Db, Wb), 0 !== jb) Wb.is2DArray = !0, Kb.texImage3D(Db, 0, xb, Cb, db, jb, 0, zb, gb, null);
        else if (0 !== rb) Wb.is3D = !0, Kb.texImage3D(Db, 0, xb, Cb, db, rb, 0, zb, gb, null);
        else if (Xb) {
          Wb.isCube = !0;
          for (let bb = 0; bb < 6; bb++) Kb.texImage2D(Kb.TEXTURE_CUBE_MAP_POSITIVE_X + bb, 0, xb, Cb, db, 0, zb, gb, null)
        } else Kb.texImage2D(Db, 0, xb, Cb, db, 0, zb, gb, null);
        if (Kb.texParameteri(Db, Kb.TEXTURE_MAG_FILTER, nb.mag), Kb.texParameteri(Db, Kb.TEXTURE_MIN_FILTER, nb.min), Kb.texParameteri(Db, Kb.TEXTURE_WRAP_S, Kb.CLAMP_TO_EDGE), Kb.texParameteri(Db, Kb.TEXTURE_WRAP_T, Kb.CLAMP_TO_EDGE), ob && this.NX > 1 && (0 === Zb ? (Kb.texParameteri(Db, Kb.TEXTURE_COMPARE_FUNC, 515), Kb.texParameteri(Db, Kb.TEXTURE_COMPARE_MODE, Kb.NONE)) : (Kb.texParameteri(Db, Kb.TEXTURE_COMPARE_FUNC, Zb), Kb.texParameteri(Db, Kb.TEXTURE_COMPARE_MODE, Kb.COMPARE_REF_TO_TEXTURE))), (hb || Gb) && this._gl.generateMipmap(Db), this._bindTextureDirectly(Db, null), Wb._useSRGBBuffer = ab, Wb.baseWidth = Cb, Wb.baseHeight = db, Wb.width = Cb, Wb.height = db, Wb.depth = jb || rb, Wb.isReady = !0, Wb.samples = Hb, Wb.generateMipMaps = hb, Wb.samplingMode = Yb, Wb.type = Ub, Wb.format = Sb, Wb.label = Bb, Wb.comparisonFunction = Zb, this._internalTexturesCache.push(Wb), wb) {
          let bb;
          if (bb = (0, lb.e)(Wb.format) ? this._setupFramebufferDepthAttachments((0, lb.c)(Wb.format), 19 !== Wb.format, Wb.width, Wb.height, Hb, Wb.format, !0) : this._createRenderBuffer(Wb.width, Wb.height, Hb, -1, this._getRGBABufferInternalSizedFormat(Wb.type, Wb.format, Wb._useSRGBBuffer), -1), !bb) throw new Error("Unable to create render buffer");
          Wb._autoMSAAManagement = !0;
          let ub = Wb._hardwareTexture;
          ub || (ub = Wb._hardwareTexture = this._createHardwareTexture()), ub.addMSAARenderBuffer(bb)
        }
        return Wb
      }
      _getUseSRGBBuffer(bb, ub) {
        return bb && this._caps.supportSRGBBuffers && (this.NX > 1 || ub)
      }
      createTexture(bb, ub, hb, Bb) {
        var Ob = this;
        let Gb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3,
          Ub = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          Lb = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
          Yb = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
          Sb = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
          ab = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null,
          Hb = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : null,
          wb = arguments.length > 11 ? arguments[11] : void 0,
          Zb = arguments.length > 12 ? arguments[12] : void 0,
          Xb = arguments.length > 13 ? arguments[13] : void 0,
          ob = arguments.length > 14 ? arguments[14] : void 0;
        return this._createTextureBase(bb, ub, hb, Bb, Gb, Ub, Lb, (function() {
          for (var bb = arguments.length, ub = new Array(bb), hb = 0; hb < bb; hb++) ub[hb] = arguments[hb];
          return Ob._prepareWebGLTexture(...ub, ab)
        }), ((bb, ub, hb, Ob, Gb, Ub) => {
          const Lb = this._gl,
            Yb = hb.width === bb && hb.height === ub;
          Gb._creationFlags = Xb ?? 0;
          const Sb = this._getTexImageParametersForCreateTexture(Gb.format, Gb._useSRGBBuffer);
          if (Yb) return Lb.texImage2D(Lb.TEXTURE_2D, 0, Sb.internalFormat, Sb.format, Sb.type, hb), !1;
          const ab = this._caps.maxTextureSize;
          if (hb.width > ab || hb.height > ab || !this._supportsHardwareTextureRescaling) return this._prepareWorkingCanvas(), !(!this._workingCanvas || !this._workingContext) && (this._workingCanvas.width = bb, this._workingCanvas.height = ub, this._workingContext.drawImage(hb, 0, 0, hb.width, hb.height, 0, 0, bb, ub), Lb.texImage2D(Lb.TEXTURE_2D, 0, Sb.internalFormat, Sb.format, Sb.type, this._workingCanvas), Gb.width = bb, Gb.height = ub, !1);
          {
            const bb = new pb.b(this, 2);
            this._bindTextureDirectly(Lb.TEXTURE_2D, bb, !0), Lb.texImage2D(Lb.TEXTURE_2D, 0, Sb.internalFormat, Sb.format, Sb.type, hb), this._rescaleTexture(bb, Gb, Bb, Sb.format, (() => {
              this._releaseTexture(bb), this._bindTextureDirectly(Lb.TEXTURE_2D, Gb, !0), Ub()
            }))
          }
          return !0
        }), Yb, Sb, ab, Hb, wb, Zb, ob)
      }
      _getTexImageParametersForCreateTexture(bb, ub) {
        let hb, Bb;
        return 1 === this.NX ? (hb = this._getInternalFormat(bb, ub), Bb = hb) : (hb = this._getInternalFormat(bb, !1), Bb = this._getRGBABufferInternalSizedFormat(0, bb, ub)), {
          internalFormat: Bb,
          format: hb,
          type: this._gl.UNSIGNED_BYTE
        }
      }
      _rescaleTexture(bb, ub, hb, Bb, Ob) {}
      _unpackFlipY(bb) {
        this._unpackFlipYCached !== bb && (this._gl.pixelStorei(this._gl.UNPACK_FLIP_Y_WEBGL, bb ? 1 : 0), this.enableUnpackFlipYCached && (this._unpackFlipYCached = bb))
      }
      _getUnpackAlignement() {
        return this._gl.getParameter(this._gl.UNPACK_ALIGNMENT)
      }
      _getTextureTarget(bb) {
        return bb.isCube ? this._gl.TEXTURE_CUBE_MAP : bb.is3D ? this._gl.TEXTURE_3D : bb.is2DArray || bb.isMultiview ? this._gl.TEXTURE_2D_ARRAY : this._gl.TEXTURE_2D
      }
      updateTextureSamplingMode(bb, ub) {
        let hb = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const Bb = this._getTextureTarget(ub),
          Ob = this._getSamplingParameters(bb, ub.useMipMaps || hb);
        this._setTextureParameterInteger(Bb, this._gl.TEXTURE_MAG_FILTER, Ob.mag, ub), this._setTextureParameterInteger(Bb, this._gl.TEXTURE_MIN_FILTER, Ob.min), hb && Ob.hasMipMaps && (ub.generateMipMaps = !0, this._gl.generateMipmap(Bb)), this._bindTextureDirectly(Bb, null), ub.samplingMode = bb
      }
      updateTextureDimensions(bb, ub, hb) {}
      updateTextureWrappingMode(bb, ub) {
        let hb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          Bb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const Ob = this._getTextureTarget(bb);
        null !== ub && (this._setTextureParameterInteger(Ob, this._gl.TEXTURE_WRAP_S, this._getTextureWrapMode(ub), bb), bb._cachedWrapU = ub), null !== hb && (this._setTextureParameterInteger(Ob, this._gl.TEXTURE_WRAP_T, this._getTextureWrapMode(hb), bb), bb._cachedWrapV = hb), (bb.is2DArray || bb.is3D) && null !== Bb && (this._setTextureParameterInteger(Ob, this._gl.TEXTURE_WRAP_R, this._getTextureWrapMode(Bb), bb), bb._cachedWrapR = Bb), this._bindTextureDirectly(Ob, null)
      }
      _uploadCompressedDataToTextureDirectly(bb, ub, hb, Bb, Ob) {
        let Gb = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          Ub = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        const Lb = this._gl;
        let Yb = Lb.TEXTURE_2D;
        if (bb.isCube && (Yb = Lb.TEXTURE_CUBE_MAP_POSITIVE_X + Gb), bb._useSRGBBuffer) switch (ub) {
          case 37492:
          case 36196:
            this._caps.etc2 ? ub = Lb.COMPRESSED_SRGB8_ETC2 : bb._useSRGBBuffer = !1;
            break;
          case 37496:
            this._caps.etc2 ? ub = Lb.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : bb._useSRGBBuffer = !1;
            break;
          case 36492:
            ub = Lb.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT;
            break;
          case 37808:
            ub = Lb.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR;
            break;
          case 37809:
            ub = Lb.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR;
            break;
          case 37810:
            ub = Lb.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR;
            break;
          case 37811:
            ub = Lb.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR;
            break;
          case 37812:
            ub = Lb.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR;
            break;
          case 37813:
            ub = Lb.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR;
            break;
          case 37814:
            ub = Lb.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR;
            break;
          case 37815:
            ub = Lb.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR;
            break;
          case 37816:
            ub = Lb.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR;
            break;
          case 37817:
            ub = Lb.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR;
            break;
          case 37818:
            ub = Lb.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR;
            break;
          case 37819:
            ub = Lb.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR;
            break;
          case 37820:
            ub = Lb.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR;
            break;
          case 37821:
            ub = Lb.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR;
            break;
          case 33776:
            this._caps.s3tc_srgb ? ub = Lb.COMPRESSED_SRGB_S3TC_DXT1_EXT : bb._useSRGBBuffer = !1;
            break;
          case 33777:
            this._caps.s3tc_srgb ? ub = Lb.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT : bb._useSRGBBuffer = !1;
            break;
          case 33779:
            this._caps.s3tc_srgb ? ub = Lb.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT : bb._useSRGBBuffer = !1;
            break;
          default:
            bb._useSRGBBuffer = !1
        }
        if (bb.generateMipMaps) {
          const Gb = bb._hardwareTexture;
          Gb.memoryAllocated || (Lb.texStorage2D(bb.isCube ? Lb.TEXTURE_CUBE_MAP : Lb.TEXTURE_2D, Math.floor(Math.log2(Math.max(hb, Bb))) + 1, ub, bb.width, bb.height), Gb.memoryAllocated = !0), this._gl.compressedTexSubImage2D(Yb, Ub, 0, 0, hb, Bb, ub, Ob)
        } else this._gl.compressedTexImage2D(Yb, Ub, ub, hb, Bb, 0, Ob)
      }
      _uploadDataToTextureDirectly(bb, ub) {
        let hb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Bb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          Ob = arguments.length > 4 ? arguments[4] : void 0,
          Gb = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        const Ub = this._gl,
          Lb = this._getWebGLTextureType(bb.type),
          Yb = this._getInternalFormat(bb.format),
          Sb = void 0 === Ob ? this._getRGBABufferInternalSizedFormat(bb.type, bb.format, bb._useSRGBBuffer) : this._getInternalFormat(Ob, bb._useSRGBBuffer);
        this._unpackFlipY(bb.invertY);
        let ab = Ub.TEXTURE_2D;
        bb.isCube && (ab = Ub.TEXTURE_CUBE_MAP_POSITIVE_X + hb);
        const Hb = Math.round(Math.log(bb.width) * Math.LOG2E),
          wb = Math.round(Math.log(bb.height) * Math.LOG2E),
          Zb = Gb ? bb.width : Math.pow(2, Math.max(Hb - Bb, 0)),
          Xb = Gb ? bb.height : Math.pow(2, Math.max(wb - Bb, 0));
        Ub.texImage2D(ab, Bb, Sb, Zb, Xb, 0, Yb, Lb, ub)
      }
      updateTextureData(bb, ub, hb, Bb, Ob, Gb) {
        let Ub = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0,
          Lb = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0,
          Yb = arguments.length > 8 && void 0 !== arguments[8] && arguments[8];
        const Sb = this._gl,
          ab = this._getWebGLTextureType(bb.type),
          Hb = this._getInternalFormat(bb.format);
        this._unpackFlipY(bb.invertY);
        let wb = Sb.TEXTURE_2D,
          Zb = Sb.TEXTURE_2D;
        bb.isCube && (Zb = Sb.TEXTURE_CUBE_MAP_POSITIVE_X + Ub, wb = Sb.TEXTURE_CUBE_MAP), this._bindTextureDirectly(wb, bb, !0), Sb.texSubImage2D(Zb, Lb, hb, Bb, Ob, Gb, Hb, ab, ub), Yb && this._gl.generateMipmap(Zb), this._bindTextureDirectly(wb, null)
      }
      _uploadArrayBufferViewToTexture(bb, ub) {
        let hb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Bb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        const Ob = this._gl,
          Gb = bb.isCube ? Ob.TEXTURE_CUBE_MAP : Ob.TEXTURE_2D;
        this._bindTextureDirectly(Gb, bb, !0), this._uploadDataToTextureDirectly(bb, ub, hb, Bb), this._bindTextureDirectly(Gb, null, !0)
      }
      _prepareWebGLTextureContinuation(bb, ub, hb, Bb, Ob) {
        const Gb = this._gl;
        if (!Gb) return;
        const Ub = this._getSamplingParameters(Ob, !hb);
        Gb.texParameteri(Gb.TEXTURE_2D, Gb.TEXTURE_MAG_FILTER, Ub.mag), Gb.texParameteri(Gb.TEXTURE_2D, Gb.TEXTURE_MIN_FILTER, Ub.min), hb || Bb || Gb.generateMipmap(Gb.TEXTURE_2D), this._bindTextureDirectly(Gb.TEXTURE_2D, null), ub && ub.removePendingData(bb), bb.onLoadedObservable.notifyObservers(bb), bb.onLoadedObservable.clear()
      }
      _prepareWebGLTexture(bb, ub, hb, Bb, Ob, Gb, Ub, Lb, Yb, Sb) {
        const ab = this.getCaps().maxTextureSize,
          Hb = Math.min(ab, this.needPOTTextures ? (0, Zb.i)(Bb.width, ab) : Bb.width),
          wb = Math.min(ab, this.needPOTTextures ? (0, Zb.i)(Bb.height, ab) : Bb.height),
          Xb = this._gl;
        Xb && (bb._hardwareTexture ? (this._bindTextureDirectly(Xb.TEXTURE_2D, bb, !0), this._unpackFlipY(void 0 === Ob || !!Ob), bb.baseWidth = Bb.width, bb.baseHeight = Bb.height, bb.width = Hb, bb.height = wb, bb.isReady = !0, bb.type = -1 !== bb.type ? bb.type : 0, bb.format = -1 !== bb.format ? bb.format : Sb ?? (".jpg" !== ub || bb._useSRGBBuffer ? 5 : 4), Lb(Hb, wb, Bb, ub, bb, (() => {
          this._prepareWebGLTextureContinuation(bb, hb, Gb, Ub, Yb)
        })) || this._prepareWebGLTextureContinuation(bb, hb, Gb, Ub, Yb)) : hb && hb.removePendingData(bb))
      }
      _getInternalFormatFromDepthTextureFormat(bb, ub, hb) {
        const Bb = this._gl;
        if (!ub) return Bb.STENCIL_INDEX8;
        let Ob = hb ? Bb.DEPTH_STENCIL : Bb.DEPTH_COMPONENT;
        return this.NX > 1 ? 15 === bb ? Ob = Bb.DEPTH_COMPONENT16 : 16 === bb ? Ob = Bb.DEPTH_COMPONENT24 : 17 === bb || 13 === bb ? Ob = hb ? Bb.DEPTH24_STENCIL8 : Bb.DEPTH_COMPONENT24 : 14 === bb ? Ob = Bb.DEPTH_COMPONENT32F : 18 === bb && (Ob = hb ? Bb.DEPTH32F_STENCIL8 : Bb.DEPTH_COMPONENT32F) : Ob = Bb.DEPTH_COMPONENT16, Ob
      }
      _getWebGLTextureTypeFromDepthTextureFormat(bb) {
        const ub = this._gl;
        let hb = ub.UNSIGNED_INT;
        return 15 === bb ? hb = ub.UNSIGNED_SHORT : 17 === bb || 13 === bb ? hb = ub.UNSIGNED_INT_24_8 : 14 === bb ? hb = ub.FLOAT : 18 === bb ? hb = ub.FLOAT_32_UNSIGNED_INT_24_8_REV : 19 === bb && (hb = ub.UNSIGNED_BYTE), hb
      }
      _setupFramebufferDepthAttachments(bb, ub, hb, Bb) {
        let Ob = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
          Gb = arguments.length > 5 ? arguments[5] : void 0,
          Ub = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        const Lb = this._gl;
        Gb = Gb ?? (bb ? 13 : 14);
        const Yb = this._getInternalFormatFromDepthTextureFormat(Gb, ub, bb);
        return bb && ub ? this._createRenderBuffer(hb, Bb, Ob, Lb.DEPTH_STENCIL, Yb, Ub ? -1 : Lb.DEPTH_STENCIL_ATTACHMENT) : ub ? this._createRenderBuffer(hb, Bb, Ob, Yb, Yb, Ub ? -1 : Lb.DEPTH_ATTACHMENT) : bb ? this._createRenderBuffer(hb, Bb, Ob, Yb, Yb, Ub ? -1 : Lb.STENCIL_ATTACHMENT) : null
      }
      _createRenderBuffer(bb, ub, hb, Bb, Ob, Gb) {
        let Ub = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6];
        const Lb = this._gl.createRenderbuffer();
        return this._updateRenderBuffer(Lb, bb, ub, hb, Bb, Ob, Gb, Ub)
      }
      _updateRenderBuffer(bb, ub, hb, Bb, Ob, Gb, Ub) {
        let Lb = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7];
        const Yb = this._gl;
        return Yb.bindRenderbuffer(Yb.RENDERBUFFER, bb), Bb > 1 && Yb.renderbufferStorageMultisample ? Yb.renderbufferStorageMultisample(Yb.RENDERBUFFER, Bb, Gb, ub, hb) : Yb.renderbufferStorage(Yb.RENDERBUFFER, Ob, ub, hb), -1 !== Ub && Yb.framebufferRenderbuffer(Yb.FRAMEBUFFER, Ub, Yb.RENDERBUFFER, bb), Lb && Yb.bindRenderbuffer(Yb.RENDERBUFFER, null), bb
      }
      _releaseTexture(bb) {
        this._deleteTexture(bb._hardwareTexture), this.unbindAllTextures();
        const ub = this._internalTexturesCache.indexOf(bb); - 1 !== ub && this._internalTexturesCache.splice(ub, 1), bb._lodTextureHigh && bb._lodTextureHigh.dispose(), bb._lodTextureMid && bb._lodTextureMid.dispose(), bb._lodTextureLow && bb._lodTextureLow.dispose(), bb._irradianceTexture && bb._irradianceTexture.dispose()
      }
      _deleteTexture(bb) {
        bb?.release()
      }
      _setProgram(bb) {
        this._currentProgram !== bb && ((0, Ob.n)(bb, this._gl), this._currentProgram = bb)
      }
      bindSamplers(bb) {
        const ub = bb.getPipelineContext();
        this._setProgram(ub.program);
        const hb = bb.getSamplers();
        for (let Bb = 0; Bb < hb.length; Bb++) {
          const ub = bb.getUniform(hb[Bb]);
          ub && (this._boundUniforms[Bb] = ub)
        }
        this._currentEffect = null
      }
      _activateCurrentTexture() {
        this._currentTextureChannel !== this._activeChannel && (this._gl.activeTexture(this._gl.TEXTURE0 + this._activeChannel), this._currentTextureChannel = this._activeChannel)
      }
      _bindTextureDirectly(bb, ub) {
        let hb = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Bb = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          Ob = !1;
        const Gb = ub && ub._associatedChannel > -1;
        hb && Gb && (this._activeChannel = ub._associatedChannel);
        if (this._boundTexturesCache[this._activeChannel] !== ub || Bb) {
          if (this._activateCurrentTexture(), ub && ub.isMultiview) throw Lb.b.Error(["_bindTextureDirectly called with a multiview texture!", bb, ub]), "_bindTextureDirectly called with a multiview texture!";
          this._gl.bindTexture(bb, ub?._hardwareTexture?.underlyingResource ?? null), this._boundTexturesCache[this._activeChannel] = ub, ub && (ub._associatedChannel = this._activeChannel)
        } else hb && (Ob = !0, this._activateCurrentTexture());
        return Gb && !hb && this._bindSamplerUniformToChannel(ub._associatedChannel, this._activeChannel), Ob
      }
      _bindTexture(bb, ub, hb) {
        if (void 0 === bb) return;
        ub && (ub._associatedChannel = bb), this._activeChannel = bb;
        const Bb = ub ? this._getTextureTarget(ub) : this._gl.TEXTURE_2D;
        this._bindTextureDirectly(Bb, ub)
      }
      unbindAllTextures() {
        for (let bb = 0; bb < this._maxSimultaneousTextures; bb++) this._activeChannel = bb, this._bindTextureDirectly(this._gl.TEXTURE_2D, null), this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null), this.NX > 1 && (this._bindTextureDirectly(this._gl.TEXTURE_3D, null), this._bindTextureDirectly(this._gl.TEXTURE_2D_ARRAY, null))
      }
      setTexture(bb, ub, hb, Bb) {
        void 0 !== bb && (ub && (this._boundUniforms[bb] = ub), this._setTexture(bb, hb))
      }
      _bindSamplerUniformToChannel(bb, ub) {
        const hb = this._boundUniforms[bb];
        hb && hb._currentState !== ub && (this._gl.uniform1i(hb, ub), hb._currentState = ub)
      }
      _getTextureWrapMode(bb) {
        switch (bb) {
          case 1:
            return this._gl.REPEAT;
          case 0:
            return this._gl.CLAMP_TO_EDGE;
          case 2:
            return this._gl.MIRRORED_REPEAT
        }
        return this._gl.REPEAT
      }
      _setTexture(bb, ub) {
        let hb, Bb = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Ob = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (!ub) return null != this._boundTexturesCache[bb] && (this._activeChannel = bb, this._bindTextureDirectly(this._gl.TEXTURE_2D, null), this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null), this.NX > 1 && (this._bindTextureDirectly(this._gl.TEXTURE_3D, null), this._bindTextureDirectly(this._gl.TEXTURE_2D_ARRAY, null))), !1;
        if (ub.video) {
          this._activeChannel = bb;
          const hb = ub.getInternalTexture();
          hb && (hb._associatedChannel = bb), ub.update()
        } else if (4 === ub.delayLoadState) return ub.delayLoad(), !1;
        hb = Ob ? ub.depthStencilTexture : ub.isReady() ? ub.getInternalTexture() : ub.isCube ? this.emptyCubeTexture : ub.is3D ? this.emptyTexture3D : ub.is2DArray ? this.emptyTexture2DArray : this.emptyTexture, !Bb && hb && (hb._associatedChannel = bb);
        let Gb = !0;
        this._boundTexturesCache[bb] === hb && (Bb || this._bindSamplerUniformToChannel(hb._associatedChannel, bb), Gb = !1), this._activeChannel = bb;
        const Ub = this._getTextureTarget(hb);
        if (Gb && this._bindTextureDirectly(Ub, hb, Bb), hb && !hb.isMultiview) {
          if (hb.isCube && hb._cachedCoordinatesMode !== ub.coordinatesMode) {
            hb._cachedCoordinatesMode = ub.coordinatesMode;
            const bb = 3 !== ub.coordinatesMode && 5 !== ub.coordinatesMode ? 1 : 0;
            ub.wrapU = bb, ub.wrapV = bb
          }
          hb._cachedWrapU !== ub.wrapU && (hb._cachedWrapU = ub.wrapU, this._setTextureParameterInteger(Ub, this._gl.TEXTURE_WRAP_S, this._getTextureWrapMode(ub.wrapU), hb)), hb._cachedWrapV !== ub.wrapV && (hb._cachedWrapV = ub.wrapV, this._setTextureParameterInteger(Ub, this._gl.TEXTURE_WRAP_T, this._getTextureWrapMode(ub.wrapV), hb)), hb.is3D && hb._cachedWrapR !== ub.wrapR && (hb._cachedWrapR = ub.wrapR, this._setTextureParameterInteger(Ub, this._gl.TEXTURE_WRAP_R, this._getTextureWrapMode(ub.wrapR), hb)), this._setAnisotropicLevel(Ub, hb, ub.anisotropicFilteringLevel)
        }
        return !0
      }
      setTextureArray(bb, ub, hb, Bb) {
        if (void 0 !== bb && ub) {
          this._textureUnits && this._textureUnits.length === hb.length || (this._textureUnits = new Int32Array(hb.length));
          for (let ub = 0; ub < hb.length; ub++) {
            const Bb = hb[ub].getInternalTexture();
            Bb ? (this._textureUnits[ub] = bb + ub, Bb._associatedChannel = bb + ub) : this._textureUnits[ub] = -1
          }
          this._gl.uniform1iv(ub, this._textureUnits);
          for (let bb = 0; bb < hb.length; bb++) this._setTexture(this._textureUnits[bb], hb[bb], !0)
        }
      }
      _setAnisotropicLevel(bb, ub, hb) {
        const Bb = this._caps.textureAnisotropicFilterExtension;
        11 !== ub.samplingMode && 3 !== ub.samplingMode && 2 !== ub.samplingMode && (hb = 1), Bb && ub._cachedAnisotropicFilteringLevel !== hb && (this._setTextureParameterFloat(bb, Bb.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(hb, this._caps.maxAnisotropy), ub), ub._cachedAnisotropicFilteringLevel = hb)
      }
      _setTextureParameterFloat(bb, ub, hb, Bb) {
        this._bindTextureDirectly(bb, Bb, !0, !0), this._gl.texParameterf(bb, ub, hb)
      }
      _setTextureParameterInteger(bb, ub, hb, Bb) {
        Bb && this._bindTextureDirectly(bb, Bb, !0, !0), this._gl.texParameteri(bb, ub, hb)
      }
      unbindAllAttributes() {
        if (this._mustWipeVertexAttributes) {
          this._mustWipeVertexAttributes = !1;
          for (let bb = 0; bb < this._caps.maxVertexAttribs; bb++) this.disableAttributeByIndex(bb)
        } else
          for (let bb = 0, ub = this._vertexAttribArraysEnabled.length; bb < ub; bb++) bb >= this._caps.maxVertexAttribs || !this._vertexAttribArraysEnabled[bb] || this.disableAttributeByIndex(bb)
      }
      releaseEffects() {
        this._compiledEffects = {}, this.onReleaseEffectsObservable.notifyObservers(this)
      }
      dispose() {
        (0, Yb.k)() && this._renderingCanvas && (this._renderingCanvas.removeEventListener("webglcontextlost", this._onContextLost), this._onContextRestored && this._renderingCanvas.removeEventListener("webglcontextrestored", this._onContextRestored)), super.dispose(), this._dummyFramebuffer && this._gl.deleteFramebuffer(this._dummyFramebuffer), this.unbindAllAttributes(), this._boundUniforms = {}, this._workingCanvas = null, this._workingContext = null, this._currentBufferPointers.length = 0, this._currentProgram = null, this._creationOptions.loseContextOnDispose && this._gl.getExtension("WEBGL_lose_context")?.loseContext(), (0, Ob.v)(this._gl)
      }
      attachContextLostEvent(bb) {
        this._renderingCanvas && this._renderingCanvas.addEventListener("webglcontextlost", bb, !1)
      }
      attachContextRestoredEvent(bb) {
        this._renderingCanvas && this._renderingCanvas.addEventListener("webglcontextrestored", bb, !1)
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
      _canRenderToFramebuffer(bb) {
        const ub = this._gl;
        for (; ub.getError() !== ub.NO_ERROR;);
        let hb = !0;
        const Bb = ub.createTexture();
        ub.bindTexture(ub.TEXTURE_2D, Bb), ub.texImage2D(ub.TEXTURE_2D, 0, this._getRGBABufferInternalSizedFormat(bb), 1, 1, 0, ub.RGBA, this._getWebGLTextureType(bb), null), ub.texParameteri(ub.TEXTURE_2D, ub.TEXTURE_MIN_FILTER, ub.NEAREST), ub.texParameteri(ub.TEXTURE_2D, ub.TEXTURE_MAG_FILTER, ub.NEAREST);
        const Ob = ub.createFramebuffer();
        ub.bindFramebuffer(ub.FRAMEBUFFER, Ob), ub.framebufferTexture2D(ub.FRAMEBUFFER, ub.COLOR_ATTACHMENT0, ub.TEXTURE_2D, Bb, 0);
        const Gb = ub.checkFramebufferStatus(ub.FRAMEBUFFER);
        if (hb = hb && Gb === ub.FRAMEBUFFER_COMPLETE, hb = hb && ub.getError() === ub.NO_ERROR, hb && (ub.clear(ub.COLOR_BUFFER_BIT), hb = hb && ub.getError() === ub.NO_ERROR), hb) {
          ub.bindFramebuffer(ub.FRAMEBUFFER, null);
          const bb = ub.RGBA,
            Bb = ub.UNSIGNED_BYTE,
            Ob = new Uint8Array(4);
          ub.readPixels(0, 0, 1, 1, bb, Bb, Ob), hb = hb && ub.getError() === ub.NO_ERROR
        }
        for (ub.deleteTexture(Bb), ub.deleteFramebuffer(Ob), ub.bindFramebuffer(ub.FRAMEBUFFER, null); !hb && ub.getError() !== ub.NO_ERROR;);
        return hb
      }
      _getWebGLTextureType(bb) {
        if (1 === this._webGLVersion) {
          switch (bb) {
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
        switch (bb) {
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
      _getInternalFormat(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          hb = ub ? this._glSRGBExtensionValues.SRGB8_ALPHA8 : this._gl.RGBA;
        switch (bb) {
          case 0:
            hb = this._gl.ALPHA;
            break;
          case 1:
            hb = this._gl.LUMINANCE;
            break;
          case 2:
            hb = this._gl.LUMINANCE_ALPHA;
            break;
          case 6:
          case 33322:
          case 36760:
            hb = this._gl.RED;
            break;
          case 7:
          case 33324:
          case 36761:
            hb = this._gl.RG;
            break;
          case 4:
          case 32852:
          case 36762:
            hb = ub ? this._glSRGBExtensionValues.SRGB : this._gl.RGB;
            break;
          case 5:
          case 32859:
          case 36763:
            hb = ub ? this._glSRGBExtensionValues.SRGB8_ALPHA8 : this._gl.RGBA
        }
        if (this._webGLVersion > 1) switch (bb) {
          case 8:
            hb = this._gl.RED_INTEGER;
            break;
          case 9:
            hb = this._gl.RG_INTEGER;
            break;
          case 10:
            hb = this._gl.RGB_INTEGER;
            break;
          case 11:
            hb = this._gl.RGBA_INTEGER
        }
        return hb
      }
      _getRGBABufferInternalSizedFormat(bb, ub) {
        let hb = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (1 === this._webGLVersion) {
          if (void 0 !== ub) switch (ub) {
            case 0:
              return this._gl.ALPHA;
            case 1:
              return this._gl.LUMINANCE;
            case 2:
              return this._gl.LUMINANCE_ALPHA;
            case 4:
              return hb ? this._glSRGBExtensionValues.SRGB : this._gl.RGB
          }
          return this._gl.RGBA
        }
        switch (bb) {
          case 3:
            switch (ub) {
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
            switch (ub) {
              case 6:
                return this._gl.R8;
              case 7:
                return this._gl.RG8;
              case 4:
                return hb ? this._glSRGBExtensionValues.SRGB8 : this._gl.RGB8;
              case 5:
                return hb ? this._glSRGBExtensionValues.SRGB8_ALPHA8 : this._gl.RGBA8;
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
            switch (ub) {
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
            switch (ub) {
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
            switch (ub) {
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
            switch (ub) {
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
            switch (ub) {
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
            switch (ub) {
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
            switch (ub) {
              case 5:
              default:
                return this._gl.RGB10_A2;
              case 11:
                return this._gl.RGB10_A2UI
            }
        }
        return hb ? this._glSRGBExtensionValues.SRGB8_ALPHA8 : this._gl.RGBA8
      }
      readPixels(bb, ub, hb, Bb) {
        let Ob = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          Gb = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          Ub = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
        const Yb = Ob ? 4 : 3,
          Sb = Ob ? this._gl.RGBA : this._gl.RGB,
          ab = hb * Bb * Yb;
        if (Ub) {
          if (Ub.length < ab) return Lb.b.Error(`Data buffer is too small to store the read pixels (${Ub.length} should be more than ${ab})`), Promise.resolve(Ub)
        } else Ub = new Uint8Array(ab);
        return Gb && this.flushFramebuffer(), this._gl.readPixels(bb, ub, hb, Bb, Sb, this._gl.UNSIGNED_BYTE, Ub), Promise.resolve(Ub)
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
          const bb = Gb.d._CreateCanvas(1, 1),
            ub = bb.getContext("webgl") || bb.getContext("experimental-webgl");
          this._IsSupported = null != ub && !!globalThis.WebGLRenderingContext
        } catch (bb) {
          this._IsSupported = !1
        }
        return this._IsSupported
      }
      static get HasMajorPerformanceCaveat() {
        if (null === this._HasMajorPerformanceCaveat) try {
          const bb = Gb.d._CreateCanvas(1, 1),
            ub = bb.getContext("webgl", {
              failIfMajorPerformanceCaveat: !0
            }) || bb.getContext("experimental-webgl", {
              failIfMajorPerformanceCaveat: !0
            });
          this._HasMajorPerformanceCaveat = !ub
        } catch (bb) {
          this._HasMajorPerformanceCaveat = !1
        }
        return this._HasMajorPerformanceCaveat
      }
    }
    Cb._TempClearColorUint32 = new Uint32Array(4), Cb._TempClearColorInt32 = new Int32Array(4), Cb._TempClearColorFloat32 = new Float32Array(4), Cb.ExceptionList = [{
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
    }], Cb._ConcatenateShader = ob.d, Cb._IsSupported = null, Cb._HasMajorPerformanceCaveat = null
  },
  39650: (bb, ub, hb) => {
    var Bb;
    hb.d(ub, {
        d: () => Ob
      }),
      function(bb) {
        bb[bb.PointerMove = 0] = "PointerMove", bb[bb.PointerDown = 1] = "PointerDown", bb[bb.PointerUp = 2] = "PointerUp"
      }(Bb || (Bb = {}));
    class Ob {}
    Ob.DOM_DELTA_PIXEL = 0, Ob.DOM_DELTA_LINE = 1, Ob.DOM_DELTA_PAGE = 2
  },
  39647: (bb, ub, hb) => {
    hb.d(ub, {
      e: () => Bb,
      h: () => Gb,
      l: () => Ob
    });
    class Bb {}
    Bb.KEYDOWN = 1, Bb.KEYUP = 2;
    class Ob {
      constructor(bb, ub) {
        this.type = bb, this.event = ub
      }
    }
    class Gb extends Ob {
      get skipOnPointerObservable() {
        return this.skipOnKeyboardObservable
      }
      set skipOnPointerObservable(bb) {
        this.skipOnKeyboardObservable = bb
      }
      constructor(bb, ub) {
        super(bb, ub), this.type = bb, this.event = ub, this.skipOnKeyboardObservable = !1
      }
    }
  },
  39638: (bb, ub, hb) => {
    hb.d(ub, {
      d: () => Ob,
      f: () => Ub,
      g: () => Lb
    });
    var Bb = hb(36727);
    class Ob {}
    Ob.POINTERDOWN = 1, Ob.POINTERUP = 2, Ob.POINTERMOVE = 4, Ob.POINTERWHEEL = 8, Ob.POINTERPICK = 16, Ob.POINTERTAP = 32, Ob.POINTERDOUBLETAP = 64;
    class Gb {
      constructor(bb, ub) {
        this.type = bb, this.event = ub
      }
    }
    class Ub extends Gb {
      constructor(bb, ub, hb, Ob) {
        super(bb, ub), this.ray = null, this.originalPickingInfo = null, this.skipOnPointerObservable = !1, this.localPosition = new Bb.m(hb, Ob)
      }
    }
    class Lb extends Gb {
      get pickInfo() {
        return this._pickInfo || this._generatePickInfo(), this._pickInfo
      }
      constructor(bb, ub, hb) {
        let Bb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        super(bb, ub), this._pickInfo = hb, this._inputManager = Bb
      }
      _generatePickInfo() {
        this._inputManager && (this._pickInfo = this._inputManager._pickMove(this.event), this._inputManager._setRayOnPointerInfo(this._pickInfo, this.event), this._inputManager = null)
      }
    }
  },
  39659: (bb, ub, hb) => {
    hb.d(ub, {
      d: () => Bb
    });
    class Bb {
      static CompareLightsPriority(bb, ub) {
        return bb.shadowEnabled !== ub.shadowEnabled ? (ub.shadowEnabled ? 1 : 0) - (bb.shadowEnabled ? 1 : 0) : ub.renderPriority - bb.renderPriority
      }
    }
    Bb.FALLOFF_DEFAULT = 0, Bb.FALLOFF_PHYSICAL = 1, Bb.FALLOFF_GLTF = 2, Bb.FALLOFF_STANDARD = 3, Bb.LIGHTMAP_DEFAULT = 0, Bb.LIGHTMAP_SPECULAR = 1, Bb.LIGHTMAP_SHADOWSONLY = 2, Bb.INTENSITYMODE_AUTOMATIC = 0, Bb.INTENSITYMODE_LUMINOUSPOWER = 1, Bb.INTENSITYMODE_LUMINOUSINTENSITY = 2, Bb.INTENSITYMODE_ILLUMINANCE = 3, Bb.INTENSITYMODE_LUMINANCE = 4, Bb.LIGHTTYPEID_POINTLIGHT = 0, Bb.LIGHTTYPEID_DIRECTIONALLIGHT = 1, Bb.LIGHTTYPEID_SPOTLIGHT = 2, Bb.LIGHTTYPEID_HEMISPHERICLIGHT = 3, Bb.LIGHTTYPEID_RECT_AREALIGHT = 4, Bb.LIGHTTYPEID_CLUSTERED_CONTAINER = 5
  },
  39287: (bb, ub, hb) => {
    hb.d(ub, {
      b: () => Ub
    });
    var Bb, Ob = hb(36753),
      Gb = hb(39291);
    ! function(bb) {
      bb[bb.Unknown = 0] = "Unknown", bb[bb.Url = 1] = "Url", bb[bb.Temp = 2] = "Temp", bb[bb.Raw = 3] = "Raw", bb[bb.Dynamic = 4] = "Dynamic", bb[bb.RenderTarget = 5] = "RenderTarget", bb[bb.MultiRenderTarget = 6] = "MultiRenderTarget", bb[bb.Cube = 7] = "Cube", bb[bb.CubeRaw = 8] = "CubeRaw", bb[bb.CubePrefiltered = 9] = "CubePrefiltered", bb[bb.Raw3D = 10] = "Raw3D", bb[bb.Raw2DArray = 11] = "Raw2DArray", bb[bb.DepthStencil = 12] = "DepthStencil", bb[bb.CubeRawRGBD = 13] = "CubeRawRGBD", bb[bb.Depth = 14] = "Depth", bb[bb.External = 15] = "External"
    }(Bb || (Bb = {}));
    class Ub extends Gb.b {
      get useMipMaps() {
        return null === this._useMipMaps ? this.generateMipMaps : this._useMipMaps
      }
      set useMipMaps(bb) {
        this._useMipMaps = bb
      }
      get uniqueId() {
        return this._uniqueId
      }
      _setUniqueId(bb) {
        this._uniqueId = bb
      }
      UX() {
        return this._engine
      }
      get source() {
        return this._source
      }
      constructor(bb, ub) {
        let hb = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        super(), this.isReady = !1, this.isCube = !1, this.is3D = !1, this.is2DArray = !1, this.isMultiview = !1, this.url = "", this.generateMipMaps = !1, this._useMipMaps = null, this.mipLevelCount = 1, this.samples = 0, this.type = -1, this.format = -1, this.onLoadedObservable = new Ob.e, this.onErrorObservable = new Ob.e, this.onRebuildCallback = null, this.width = 0, this.height = 0, this.depth = 0, this.baseWidth = 0, this.baseHeight = 0, this.baseDepth = 0, this.invertY = !1, this._invertVScale = !1, this._associatedChannel = -1, this._source = 0, this._buffer = null, this._bufferView = null, this._bufferViewArray = null, this._bufferViewArrayArray = null, this._size = 0, this._extension = "", this._files = null, this._workingCanvas = null, this._workingContext = null, this._cachedCoordinatesMode = null, this._isDisabled = !1, this._compression = null, this._sphericalPolynomial = null, this._sphericalPolynomialPromise = null, this._sphericalPolynomialComputed = !1, this._lodGenerationScale = 0, this._lodGenerationOffset = 0, this._useSRGBBuffer = !1, this._creationFlags = 0, this._lodTextureHigh = null, this._lodTextureMid = null, this._lodTextureLow = null, this._isRGBD = !1, this._linearSpecularLOD = !1, this._irradianceTexture = null, this._hardwareTexture = null, this._maxLodLevel = null, this._references = 1, this._gammaSpace = null, this._premulAlpha = !1, this._dynamicTextureSource = null, this._autoMSAAManagement = !1, this._engine = bb, this._source = ub, this._uniqueId = Ub._Counter++, hb || (this._hardwareTexture = bb._createHardwareTexture())
      }
      incrementReferences() {
        this._references++
      }
      updateSize(bb, ub) {
        let hb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        this._engine.updateTextureDimensions(this, bb, ub, hb), this.width = bb, this.height = ub, this.depth = hb, this.baseWidth = bb, this.baseHeight = ub, this.baseDepth = hb, this._size = bb * ub * hb
      }
      _rebuild() {
        if (this.isReady = !1, this._cachedCoordinatesMode = null, this._cachedWrapU = null, this._cachedWrapV = null, this._cachedWrapR = null, this._cachedAnisotropicFilteringLevel = null, this.onRebuildCallback) {
          const bb = this.onRebuildCallback(this),
            ub = ub => {
              ub._swapAndDie(this, !1), this.isReady = bb.isReady
            };
          return void(bb.isAsync ? bb.proxy.then(ub) : ub(bb.proxy))
        }
        let bb;
        switch (this.source) {
          case 2:
          case 12:
          case 14:
          case 15:
            break;
          case 1:
            return void(bb = this._engine.createTexture(this._originalUrl ?? this.url, !this.generateMipMaps, this.invertY, null, this.samplingMode, (bb => {
              bb._swapAndDie(this, !1), this.isReady = !0
            }), null, this._buffer, void 0, this.format, this._extension, void 0, void 0, void 0, this._useSRGBBuffer));
          case 3:
            if (bb = this._engine.createRawTexture(this._bufferView, this.baseWidth, this.baseHeight, this.format, this.generateMipMaps, this.invertY, this.samplingMode, this._compression, this.type, this._creationFlags, this._useSRGBBuffer, this.mipLevelCount), bb._swapAndDie(this, !1), this._bufferViewArray)
              for (let bb = 0; bb < this._bufferViewArray.length; bb++) {
                const ub = this._bufferViewArray[bb];
                ub && this._engine.updateRawTexture(this, ub, this.format, this.invertY, this._compression, this.type, this._useSRGBBuffer, bb)
              }
            this.isReady = !0;
            break;
          case 10:
            bb = this._engine.createRawTexture3D(this._bufferView, this.baseWidth, this.baseHeight, this.baseDepth, this.format, this.generateMipMaps, this.invertY, this.samplingMode, this._compression, this.type), bb._swapAndDie(this, !1), this.isReady = !0;
            break;
          case 11:
            if (bb = this._engine.createRawTexture2DArray(this._bufferView, this.baseWidth, this.baseHeight, this.baseDepth, this.format, this.generateMipMaps, this.invertY, this.samplingMode, this._compression, this.type, this._creationFlags, this.mipLevelCount), bb._swapAndDie(this, !1), this._bufferViewArray)
              for (let bb = 0; bb < this._bufferViewArray.length; bb++) {
                const ub = this._bufferViewArray[bb];
                ub && this._engine.updateRawTexture2DArray(this, ub, this.format, this.invertY, this._compression, this.type, bb)
              }
            this.isReady = !0;
            break;
          case 4:
            bb = this._engine.createDynamicTexture(this.baseWidth, this.baseHeight, this.generateMipMaps, this.samplingMode), bb._swapAndDie(this, !1), this._dynamicTextureSource && this._engine.updateDynamicTexture(this, this._dynamicTextureSource, this.invertY, this._premulAlpha, this.format, !0);
            break;
          case 7:
            return void(bb = this._engine.createCubeTexture(this.url, null, this._files, !this.generateMipMaps, (() => {
              bb._swapAndDie(this, !1), this.isReady = !0
            }), null, this.format, this._extension, !1, 0, 0, null, void 0, this._useSRGBBuffer, ArrayBuffer.isView(this._buffer) ? this._buffer : null));
          case 8:
            bb = this._engine.createRawCubeTexture(this._bufferViewArray, this.width, this._originalFormat ?? this.format, this.type, this.generateMipMaps, this.invertY, this.samplingMode, this._compression), bb._swapAndDie(this, !1), this.isReady = !0;
            break;
          case 13:
            return;
          case 9:
            return bb = this._engine.createPrefilteredCubeTexture(this.url, null, this._lodGenerationScale, this._lodGenerationOffset, (bb => {
              bb && bb._swapAndDie(this, !1), this.isReady = !0
            }), null, this.format, this._extension, void 0, ArrayBuffer.isView(this._buffer) ? this._buffer : null), void(bb._sphericalPolynomial = this._sphericalPolynomial)
        }
      }
      _swapAndDie(bb) {
        let ub = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this._hardwareTexture?.setUsage(bb._source, this.generateMipMaps, this.is2DArray, this.isCube, this.is3D, this.width, this.height, this.depth), bb._hardwareTexture = this._hardwareTexture, bb._setUniqueId(Ub._Counter++), ub && (bb._isRGBD = this._isRGBD), this._lodTextureHigh && (bb._lodTextureHigh && bb._lodTextureHigh.dispose(), bb._lodTextureHigh = this._lodTextureHigh), this._lodTextureMid && (bb._lodTextureMid && bb._lodTextureMid.dispose(), bb._lodTextureMid = this._lodTextureMid), this._lodTextureLow && (bb._lodTextureLow && bb._lodTextureLow.dispose(), bb._lodTextureLow = this._lodTextureLow), this._irradianceTexture && (bb._irradianceTexture && bb._irradianceTexture.dispose(), bb._irradianceTexture = this._irradianceTexture);
        const hb = this._engine.getLoadedTexturesCache();
        let Bb = hb.indexOf(this); - 1 !== Bb && hb.splice(Bb, 1), Bb = hb.indexOf(bb), -1 === Bb && hb.push(bb)
      }
      dispose() {
        this._references--, 0 === this._references && (this.onLoadedObservable.clear(), this.onErrorObservable.clear(), this._engine._releaseTexture(this), this._hardwareTexture = null, this._dynamicTextureSource = null)
      }
    }
    Ub._Counter = 0
  },
  39402: (bb, ub, hb) => {
    function Bb(bb) {
      return 13 === bb || 14 === bb || 15 === bb || 16 === bb || 17 === bb || 18 === bb || 19 === bb
    }

    function Ob(bb) {
      return 8 === bb || 9 === bb || 10 === bb || 11 === bb
    }

    function Gb(bb) {
      return 0 === bb || 5 === bb || 7 === bb || 11 === bb
    }

    function Ub(bb) {
      return 13 === bb || 17 === bb || 18 === bb || 19 === bb
    }
    hb.d(ub, {
      c: () => Ub,
      e: () => Bb,
      f: () => Ob,
      i: () => Gb
    })
  },
  39291: (bb, ub, hb) => {
    hb.d(ub, {
      b: () => Bb
    });
    class Bb {
      get wrapU() {
        return this._cachedWrapU
      }
      set wrapU(bb) {
        this._cachedWrapU = bb
      }
      get wrapV() {
        return this._cachedWrapV
      }
      set wrapV(bb) {
        this._cachedWrapV = bb
      }
      get wrapR() {
        return this._cachedWrapR
      }
      set wrapR(bb) {
        this._cachedWrapR = bb
      }
      get anisotropicFilteringLevel() {
        return this._cachedAnisotropicFilteringLevel
      }
      set anisotropicFilteringLevel(bb) {
        this._cachedAnisotropicFilteringLevel = bb
      }
      get comparisonFunction() {
        return this._comparisonFunction
      }
      set comparisonFunction(bb) {
        this._comparisonFunction = bb
      }
      get useMipMaps() {
        return this._useMipMaps
      }
      set useMipMaps(bb) {
        this._useMipMaps = bb
      }
      constructor() {
        this.samplingMode = -1, this._useMipMaps = !0, this._cachedWrapU = null, this._cachedWrapV = null, this._cachedWrapR = null, this._cachedAnisotropicFilteringLevel = null, this._comparisonFunction = 0
      }
      setParameters() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          hb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          Bb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          Ob = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 2,
          Gb = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
        return this._cachedWrapU = bb, this._cachedWrapV = ub, this._cachedWrapR = hb, this._cachedAnisotropicFilteringLevel = Bb, this.samplingMode = Ob, this._comparisonFunction = Gb, this
      }
      compareSampler(bb) {
        return this._cachedWrapU === bb._cachedWrapU && this._cachedWrapV === bb._cachedWrapV && this._cachedWrapR === bb._cachedWrapR && this._cachedAnisotropicFilteringLevel === bb._cachedAnisotropicFilteringLevel && this.samplingMode === bb.samplingMode && this._comparisonFunction === bb._comparisonFunction && this._useMipMaps === bb._useMipMaps
      }
    }
  },
  39584: (bb, ub, hb) => {
    function Bb(bb) {
      bb.push("vCameraColorCurveNeutral", "vCameraColorCurvePositive", "vCameraColorCurveNegative")
    }
    hb.d(ub, {
      b: () => Bb
    })
  },
  39366: (bb, ub, hb) => {
    function Bb(bb) {
      return void 0 === bb.getPipelineContext
    }
    hb.d(ub, {
      b: () => Bb
    })
  },
  39765: (bb, ub, hb) => {
    hb.d(ub, {
      d: () => Ob
    });
    var Bb = hb(39343);
    class Ob {
      static GetEffect(bb) {
        return void 0 === bb.getPipelineContext ? bb.effect : bb
      }
      constructor(bb) {
        let ub = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this._wasPreviouslyReady = !1, this._forceRebindOnNextCall = !0, this._wasPreviouslyUsingInstances = null, this.effect = null, this.defines = null, this.drawContext = bb.createDrawContext(), ub && (this.materialContext = bb.createMaterialContext())
      }
      setEffect(bb, ub) {
        let hb = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        hb || this.effect === bb || this.drawContext?._releaseUniformBufferSlots?.(), this.effect = bb, void 0 !== ub && (this.defines = ub), hb && this.drawContext?.reset()
      }
      dispose() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this.effect) {
          const ub = this.effect;
          bb ? ub.dispose() : Bb.c.SetImmediate((() => {
            ub.UX().onEndFrameObservable.addOnce((() => {
              ub.dispose()
            }))
          })), this.effect = null
        }
        this.drawContext?.dispose()
      }
    }
  },
  39311: (bb, ub, hb) => {
    hb.d(ub, {
      b: () => Hb,
      e: () => Zb,
      g: () => Sb,
      k: () => ab
    });
    var Bb = hb(39316),
      Ob = hb(39325),
      Gb = hb(39308),
      Ub = hb(38302),
      Lb = hb(39339),
      Yb = hb(39331);

    function Sb(bb, ub) {
      return (0, Ob.x)(ub).cachedPipelines[bb]
    }

    function ab(bb) {
      const ub = bb._name,
        hb = bb.context;
      if (ub && hb) {
        const bb = (0, Ob.x)(hb),
          Bb = bb.cachedPipelines[ub];
        Bb?.dispose(), delete bb.cachedPipelines[ub]
      }
    }

    function Hb(bb, ub, hb, Ob, Gb, Ub, Yb) {
      let Sb, ab;
      const Hb = (0, Bb.k)() ? Ub?.getHostDocument() : null;
      Sb = "string" === typeof ub ? ub : "string" === typeof ub.vertexSource ? "source:" + ub.vertexSource : "string" === typeof ub.vertexElement ? Hb?.getElementById(ub.vertexElement) || ub.vertexElement : ub.vertex || ub, ab = "string" === typeof ub ? ub : "string" === typeof ub.fragmentSource ? "source:" + ub.fragmentSource : "string" === typeof ub.fragmentElement ? Hb?.getElementById(ub.fragmentElement) || ub.fragmentElement : ub.fragment || ub;
      const Zb = [void 0, void 0],
        Xb = () => {
          if (Zb[0] && Zb[1]) {
            const [Bb, Sb] = Zb;
            (0, Lb.h)(bb), (0, Lb.p)(Bb, bb, ((Bb, ab) => {
              Yb && (Yb._vertexSourceCodeBeforeMigration = ab), hb && (Bb = hb("vertex", Bb)), bb.isFragment = !0, (0, Lb.p)(Sb, bb, ((Ub, Sb) => {
                Yb && (Yb._fragmentSourceCodeBeforeMigration = Sb), hb && (Ub = hb("fragment", Ub));
                const ab = (0, Lb.e)(Bb, Ub, bb);
                bb = null;
                const Hb = function(bb, ub, hb, Bb) {
                  if (hb) {
                    return {
                      vertexSourceCode: (1 === Bb ? "//" : "") + "#define SHADER_NAME vertex:" + (hb.vertexElement || hb.vertex || hb.spectorName || hb) + "\n" + bb,
                      fragmentSourceCode: (1 === Bb ? "//" : "") + "#define SHADER_NAME fragment:" + (hb.fragmentElement || hb.fragment || hb.spectorName || hb) + "\n" + ub
                    }
                  }
                  return {
                    vertexSourceCode: bb,
                    fragmentSourceCode: ub
                  }
                }(ab.vertexCode, ab.fragmentCode, ub, Gb);
                Ob?.(Hb.vertexSourceCode, Hb.fragmentSourceCode)
              }), Ub)
            }), Ub)
          }
        };
      wb(Sb, "Vertex", "", (bb => {
        Yb && (Yb._rawVertexSourceCode = bb), Zb[0] = bb, Xb()
      }), Gb), wb(ab, "Fragment", "Pixel", (bb => {
        Yb && (Yb._rawFragmentSourceCode = bb), Zb[1] = bb, Xb()
      }), Gb)
    }

    function wb(bb, ub, hb, Ob, Ub, Lb) {
      if ("undefined" !== typeof HTMLElement && bb instanceof HTMLElement) {
        return void Ob((0, Bb.d)(bb))
      }
      if ("source:" === bb.substring(0, 7)) return void Ob(bb.substring(7));
      if ("base64:" === bb.substring(0, 7)) {
        return void Ob(window.atob(bb.substring(7)))
      }
      const Sb = Gb.e.GetShadersStore(Ub);
      if (Sb[bb + ub + "Shader"]) return void Ob(Sb[bb + ub + "Shader"]);
      if (hb && Sb[bb + hb + "Shader"]) return void Ob(Sb[bb + hb + "Shader"]);
      let ab;
      if (ab = "." === bb[0] || "/" === bb[0] || bb.indexOf("http") > -1 ? bb : Gb.e.GetShadersRepository(Ub) + bb, !(Lb = Lb || Yb.f)) throw new Error("loadFileInjection is not defined");
      Lb(ab + "." + ub.toLowerCase() + ".fx", Ob)
    }
    const Zb = (bb, ub, hb, Bb) => {
      try {
        const Gb = bb.context ? (0, Ob.x)(bb.context) : null;
        Gb && (Gb.disableParallelShaderCompile = bb.disableParallelCompilation);
        const Ub = bb.existingPipelineContext || ub(bb.shaderProcessingContext);
        return Ub._name = bb.name, bb.name && Gb && (Gb.cachedPipelines[bb.name] = Ub), hb(Ub, bb.vertex, bb.fragment, !!bb.createAsRaw, "", "", bb.rebuildRebind, bb.defines, bb.transformFeedbackVaryings, "", (() => {
          Bb(Ub, (() => {
            bb.onRenderingStateCompiled?.(Ub)
          }))
        })), Ub
      } catch (Gb) {
        throw Ub.b.Error("Error compiling effect"), Gb
      }
    }
  },
  39302: (bb, ub, hb) => {
    hb.d(ub, {
      c: () => Yb
    });
    var Bb = hb(36753),
      Ob = hb(38302),
      Gb = hb(39308),
      Ub = hb(39311),
      Lb = hb(39343);
    class Yb {
      static get ShadersRepository() {
        return Gb.e.ShadersRepository
      }
      static set ShadersRepository(bb) {
        Gb.e.ShadersRepository = bb
      }
      get tC() {
        return this._isDisposed
      }
      get onBindObservable() {
        return this._onBindObservable || (this._onBindObservable = new Bb.e), this._onBindObservable
      }
      get shaderLanguage() {
        return this._shaderLanguage
      }
      constructor(bb, ub, hb) {
        let Ob = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          Gb = arguments.length > 4 ? arguments[4] : void 0,
          Lb = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          Sb = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
          ab = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
          Hb = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
          wb = arguments.length > 9 ? arguments[9] : void 0,
          Zb = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : "",
          Xb = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : 0,
          pb = arguments.length > 12 ? arguments[12] : void 0;
        this.defines = "", this.onCompiled = null, this.onError = null, this.onBind = null, this.uniqueId = 0, this.onCompileObservable = new Bb.e, this.onErrorObservable = new Bb.e, this._onBindObservable = null, this._isDisposed = !1, this._refCount = 1, this._bonesComputationForcedToCPU = !1, this._uniformBuffersNames = {}, this._multiTarget = !1, this._samplers = {}, this._isReady = !1, this._compilationError = "", this._allFallbacksProcessed = !1, this._uniforms = {}, this._key = "", this._fallbacks = null, this._vertexSourceCodeOverride = "", this._fragmentSourceCodeOverride = "", this._transformFeedbackVaryings = null, this._disableParallelShaderCompilation = !1, this._pipelineContext = null, this._vertexSourceCode = "", this._fragmentSourceCode = "", this._vertexSourceCodeBeforeMigration = "", this._fragmentSourceCodeBeforeMigration = "", this._rawVertexSourceCode = "", this._rawFragmentSourceCode = "", this._processCodeAfterIncludes = void 0, this._processFinalCode = null, this._onReleaseEffectsObserver = null, this.name = bb, this._key = Zb;
        const ob = this._key.replace(/\r/g, "").replace(/\n/g, "|");
        let Ab;
        if (ub.attributes) {
          const bb = ub;
          if (this._engine = hb, this._attributesNames = bb.attributes, this._uniformsNames = bb.uniformsNames.concat(bb.samplers), this._samplerList = bb.samplers.slice(), this.defines = bb.defines, this.onError = bb.onError, this.onCompiled = bb.onCompiled, this._fallbacks = bb.fallbacks, this._indexParameters = bb.indexParameters, this._transformFeedbackVaryings = bb.transformFeedbackVaryings || null, this._multiTarget = !!bb.multiTarget, this._shaderLanguage = bb.shaderLanguage ?? 0, this._disableParallelShaderCompilation = !!bb.disableParallelShaderCompilation, bb.uniformBuffersNames) {
            this._uniformBuffersNamesList = bb.uniformBuffersNames.slice();
            for (let ub = 0; ub < bb.uniformBuffersNames.length; ub++) this._uniformBuffersNames[bb.uniformBuffersNames[ub]] = ub
          }
          this._processFinalCode = bb.processFinalCode ?? null, this._processCodeAfterIncludes = bb.processCodeAfterIncludes ?? void 0, pb = bb.extraInitializationsAsync, Ab = bb.existingPipelineContext
        } else this._engine = Gb, this.defines = null == Lb ? "" : Lb, this._uniformsNames = hb.concat(Ob), this._samplerList = Ob ? Ob.slice() : [], this._attributesNames = ub, this._uniformBuffersNamesList = [], this._shaderLanguage = Xb, this.onError = Hb, this.onCompiled = ab, this._indexParameters = wb, this._fallbacks = Sb;
        "WEBGL2" === this._engine.shaderPlatformName && (Ab = (0, Ub.g)(ob, this._engine._gl) ?? Ab), this._attributeLocationByName = {}, this.uniqueId = Yb._UniqueIdSeed++, Ab ? (this._pipelineContext = Ab, this._pipelineContext.setEngine(this._engine), this._onRenderingStateCompiled(this._pipelineContext), this._pipelineContext.program && (this._pipelineContext.program.__SPECTOR_rebuildProgram = this._rebuildProgram.bind(this))) : this._processShaderCodeAsync(null, !1, null, pb).catch((bb => {
          const ub = bb?.message ?? String(bb),
            hb = new Error(`Effect async shader preparation failed for "${String(this.name)}": ${ub}`);
          bb && "string" === typeof bb.stack && (hb.stack = `${hb.message}\nCaused by: ${bb.stack}`), this._processCompilationErrors(hb)
        })), this._onReleaseEffectsObserver = this._engine.onReleaseEffectsObservable.addOnce((() => {
          this._onReleaseEffectsObserver = null, this.tC || this.dispose(!0)
        }))
      }
      async _processShaderCodeAsync() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          ub = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          hb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          Bb = arguments.length > 3 ? arguments[3] : void 0;
        Bb && await Bb(), this._processingContext = hb || this._engine._getShaderProcessingContext(this._shaderLanguage, !1);
        const Ob = {
          defines: this.defines.split("\n"),
          indexParameters: this._indexParameters,
          isFragment: !1,
          shouldUseHighPrecisionShader: this._engine._shouldUseHighPrecisionShader,
          processor: bb ?? this._engine._getShaderProcessor(this._shaderLanguage),
          supportsUniformBuffers: this._engine.supportsUniformBuffers,
          shadersRepository: Gb.e.GetShadersRepository(this._shaderLanguage),
          includesShadersStore: Gb.e.GetIncludesShadersStore(this._shaderLanguage),
          version: (100 * this._engine.version).toString(),
          platformName: this._engine.shaderPlatformName,
          processingContext: this._processingContext,
          isNDCHalfZRange: this._engine.isNDCHalfZRange,
          aBb: this._engine.aBb,
          processCodeAfterIncludes: this._processCodeAfterIncludes
        };
        (0, Ub.b)(Ob, this.name, this._processFinalCode, ((bb, hb) => {
          this._vertexSourceCode = bb, this._fragmentSourceCode = hb, this._prepareEffect(ub)
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
        return !!this._engine.tC || (!!this._isReady || !!this._pipelineContext && this._pipelineContext.isReady)
      }
      UX() {
        return this._engine
      }
      getPipelineContext() {
        return this._pipelineContext
      }
      getAttributesNames() {
        return this._attributesNames
      }
      getAttributeLocation(bb) {
        return this._attributes[bb]
      }
      getAttributeLocationByName(bb) {
        return this._attributeLocationByName[bb]
      }
      getAttributesCount() {
        return this._attributes.length
      }
      getUniformIndex(bb) {
        return this._uniformsNames.indexOf(bb)
      }
      getUniform(bb) {
        return this._uniforms[bb]
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
        return await new Promise((bb => {
          this.executeWhenCompiled(bb)
        }))
      }
      executeWhenCompiled(bb) {
        this.isReady() ? bb(this) : (this.onCompileObservable.add((ub => {
          bb(ub)
        })), this._pipelineContext && !this._pipelineContext.isAsync || this._checkIsReady(null))
      }
      _checkIsReady(bb) {
        (0, Lb.g)((() => this._isReadyInternal() || this._isDisposed), (() => {}), (ub => {
          this._processCompilationErrors(ub, bb)
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
            aBb: this._engine.aBb,
            supportsUniformBuffers: this._engine.supportsUniformBuffers
          },
          extendedCreatePipelineOptions: {
            transformFeedbackVaryings: this._transformFeedbackVaryings,
            createAsRaw: !(!this._vertexSourceCodeOverride || !this._fragmentSourceCodeOverride)
          }
        }
      }
      _rebuildProgram(bb, ub, hb, Bb) {
        this._isReady = !1, this._vertexSourceCodeOverride = bb, this._fragmentSourceCodeOverride = ub, this.onError = (bb, ub) => {
          Bb && Bb(ub)
        }, this.onCompiled = () => {
          const bb = this.UX().scenes;
          if (bb)
            for (let ub = 0; ub < bb.length; ub++) bb[ub].markAllMaterialsAsDirty(127);
          this._pipelineContext._handlesSpectorRebuildCallback?.(hb)
        }, this._fallbacks = null, this._prepareEffect()
      }
      _onRenderingStateCompiled(bb) {
        if (this._pipelineContext = bb, this._pipelineContext.setEngine(this._engine), this._attributes = [], this._pipelineContext._fillEffectInformation(this, this._uniformBuffersNames, this._uniformsNames, this._uniforms, this._samplerList, this._samplers, this._attributesNames, this._attributes), this._attributesNames)
          for (let ub = 0; ub < this._attributesNames.length; ub++) {
            const bb = this._attributesNames[ub];
            this._attributeLocationByName[bb] = this._attributes[ub]
          }
        this._engine.bindSamplers(this), this._compilationError = "", this._isReady = !0, this.onCompiled && this.onCompiled(this), this.onCompileObservable.notifyObservers(this), this.onCompileObservable.clear(), this._fallbacks && this._fallbacks.unBindMesh(), Yb.AutomaticallyClearCodeCache && this.clearCodeCache()
      }
      _prepareEffect() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const ub = this._pipelineContext;
        this._isReady = !1;
        try {
          const hb = !(!this._vertexSourceCodeOverride || !this._fragmentSourceCodeOverride),
            Bb = hb ? null : this.defines,
            Ob = hb ? this._vertexSourceCodeOverride : this._vertexSourceCode,
            Gb = hb ? this._fragmentSourceCodeOverride : this._fragmentSourceCode,
            Lb = this._engine;
          this._pipelineContext = (0, Ub.e)({
            existingPipelineContext: bb ? ub : null,
            vertex: Ob,
            fragment: Gb,
            context: "WEBGL2" === Lb.shaderPlatformName || "WEBGL1" === Lb.shaderPlatformName ? Lb._gl : void 0,
            rebuildRebind: (bb, ub, hb, Bb) => this._rebuildProgram(bb, ub, hb, Bb),
            defines: Bb,
            transformFeedbackVaryings: this._transformFeedbackVaryings,
            name: this._key.replace(/\r/g, "").replace(/\n/g, "|"),
            createAsRaw: hb,
            disableParallelCompilation: this._disableParallelShaderCompilation,
            shaderProcessingContext: this._processingContext,
            onRenderingStateCompiled: hb => {
              ub && !bb && this._engine._deletePipelineContext(ub), hb && this._onRenderingStateCompiled(hb)
            }
          }, this._engine.createPipelineContext.bind(this._engine), this._engine._preparePipelineContextAsync.bind(this._engine), this._engine._executeWhenRenderingStateIsCompiled.bind(this._engine)), this._pipelineContext.isAsync && this._checkIsReady(ub)
        } catch (hb) {
          this._processCompilationErrors(hb, ub)
        }
      }
      _getShaderCodeAndErrorLine(bb, ub, hb) {
        const Bb = hb ? /FRAGMENT SHADER ERROR: 0:(\d+?):/ : /VERTEX SHADER ERROR: 0:(\d+?):/;
        let Ob = null;
        if (ub && bb) {
          const Gb = ub.match(Bb);
          if (Gb && 2 === Gb.length) {
            const ub = parseInt(Gb[1]),
              Bb = bb.split("\n", -1);
            Bb.length >= ub && (Ob = `Offending line [${ub}] in ${hb?"fragment":"vertex"} code: ${Bb[ub-1]}`)
          }
        }
        return [bb, Ob]
      }
      _processCompilationErrors(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        this._compilationError = "string" === typeof bb?.stack ? bb.stack : bb?.message ?? String(bb);
        const hb = this._attributesNames,
          Bb = this._fallbacks;
        if (Ob.b.Error("Unable to compile effect:"), Ob.b.Error(`Uniforms: ${this._uniformsNames.join(" ")}`), Ob.b.Error(`Attributes: ${hb.join(" ")}`), Ob.b.Error("Defines:\n" + this.defines), Yb.LogShaderCodeOnCompilationError) {
          let bb, ub = null,
            hb = null;
          this._pipelineContext?._getVertexShaderCode() && ([bb, ub] = this._getShaderCodeAndErrorLine(this._pipelineContext._getVertexShaderCode(), this._compilationError, !1), bb && (Ob.b.Error("Vertex code:"), Ob.b.Error(bb))), this._pipelineContext?._getFragmentShaderCode() && ([bb, hb] = this._getShaderCodeAndErrorLine(this._pipelineContext?._getFragmentShaderCode(), this._compilationError, !0), bb && (Ob.b.Error("Fragment code:"), Ob.b.Error(bb))), ub && Ob.b.Error(ub), hb && Ob.b.Error(hb)
        }
        Ob.b.Error("Error: " + this._compilationError);
        const Gb = () => {
          this.onError && this.onError(this, this._compilationError), this.onErrorObservable.notifyObservers(this), this._engine.onEffectErrorObservable.notifyObservers({
            effect: this,
            errors: this._compilationError
          })
        };
        ub && (this._pipelineContext = ub, this._isReady = !0, Gb()), Bb ? (this._pipelineContext = null, Bb.hasMoreFallbacks ? (this._allFallbacksProcessed = !1, Ob.b.Error("Trying next fallback."), this.defines = Bb.reduce(this.defines, this), this._prepareEffect()) : (this._allFallbacksProcessed = !0, Gb(), this.onErrorObservable.clear(), this._fallbacks && this._fallbacks.unBindMesh())) : (this._allFallbacksProcessed = !0, ub || Gb())
      }
      get isSupported() {
        return "" === this._compilationError
      }
      _bindTexture(bb, ub) {
        this._engine._bindTexture(this._samplers[bb], ub, bb)
      }
      setTexture(bb, ub) {
        this._engine.setTexture(this._samplers[bb], this._uniforms[bb], ub, bb)
      }
      setTextureArray(bb, ub) {
        const hb = bb + "Ex";
        if (-1 === this._samplerList.indexOf(hb + "0")) {
          const Bb = this._samplerList.indexOf(bb);
          for (let bb = 1; bb < ub.length; bb++) {
            const ub = hb + (bb - 1).toString();
            this._samplerList.splice(Bb + bb, 0, ub)
          }
          let Ob = 0;
          for (const bb of this._samplerList) this._samplers[bb] = Ob, Ob += 1
        }
        this._engine.setTextureArray(this._samplers[bb], this._uniforms[bb], ub, bb)
      }
      bindUniformBuffer(bb, ub) {
        const hb = this._uniformBuffersNames[ub];
        void 0 === hb || Yb._BaseCache[hb] === bb && this._engine._features.useUBOBindingCache || (Yb._BaseCache[hb] = bb, this._engine.bindUniformBufferBase(bb, hb, ub))
      }
      bindUniformBlock(bb, ub) {
        this._engine.bindUniformBlock(this._pipelineContext, bb, ub)
      }
      setInt(bb, ub) {
        return this._pipelineContext.setInt(bb, ub), this
      }
      setInt2(bb, ub, hb) {
        return this._pipelineContext.setInt2(bb, ub, hb), this
      }
      setInt3(bb, ub, hb, Bb) {
        return this._pipelineContext.setInt3(bb, ub, hb, Bb), this
      }
      setInt4(bb, ub, hb, Bb, Ob) {
        return this._pipelineContext.setInt4(bb, ub, hb, Bb, Ob), this
      }
      setIntArray(bb, ub) {
        return this._pipelineContext.setIntArray(bb, ub), this
      }
      setIntArray2(bb, ub) {
        return this._pipelineContext.setIntArray2(bb, ub), this
      }
      setIntArray3(bb, ub) {
        return this._pipelineContext.setIntArray3(bb, ub), this
      }
      setIntArray4(bb, ub) {
        return this._pipelineContext.setIntArray4(bb, ub), this
      }
      setUInt(bb, ub) {
        return this._pipelineContext.setUInt(bb, ub), this
      }
      setUInt2(bb, ub, hb) {
        return this._pipelineContext.setUInt2(bb, ub, hb), this
      }
      setUInt3(bb, ub, hb, Bb) {
        return this._pipelineContext.setUInt3(bb, ub, hb, Bb), this
      }
      setUInt4(bb, ub, hb, Bb, Ob) {
        return this._pipelineContext.setUInt4(bb, ub, hb, Bb, Ob), this
      }
      setUIntArray(bb, ub) {
        return this._pipelineContext.setUIntArray(bb, ub), this
      }
      setUIntArray2(bb, ub) {
        return this._pipelineContext.setUIntArray2(bb, ub), this
      }
      setUIntArray3(bb, ub) {
        return this._pipelineContext.setUIntArray3(bb, ub), this
      }
      setUIntArray4(bb, ub) {
        return this._pipelineContext.setUIntArray4(bb, ub), this
      }
      setFloatArray(bb, ub) {
        return this._pipelineContext.setArray(bb, ub), this
      }
      setFloatArray2(bb, ub) {
        return this._pipelineContext.setArray2(bb, ub), this
      }
      setFloatArray3(bb, ub) {
        return this._pipelineContext.setArray3(bb, ub), this
      }
      setFloatArray4(bb, ub) {
        return this._pipelineContext.setArray4(bb, ub), this
      }
      setArray(bb, ub) {
        return this._pipelineContext.setArray(bb, ub), this
      }
      setArray2(bb, ub) {
        return this._pipelineContext.setArray2(bb, ub), this
      }
      setArray3(bb, ub) {
        return this._pipelineContext.setArray3(bb, ub), this
      }
      setArray4(bb, ub) {
        return this._pipelineContext.setArray4(bb, ub), this
      }
      setMatrices(bb, ub) {
        return this._pipelineContext.setMatrices(bb, ub), this
      }
      setMatrix(bb, ub) {
        return this._pipelineContext.setMatrix(bb, ub), this
      }
      setMatrix3x3(bb, ub) {
        return this._pipelineContext.setMatrix3x3(bb, ub), this
      }
      setMatrix2x2(bb, ub) {
        return this._pipelineContext.setMatrix2x2(bb, ub), this
      }
      setFloat(bb, ub) {
        return this._pipelineContext.setFloat(bb, ub), this
      }
      setBool(bb, ub) {
        return this._pipelineContext.setInt(bb, ub ? 1 : 0), this
      }
      setVector2(bb, ub) {
        return this._pipelineContext.setVector2(bb, ub), this
      }
      setFloat2(bb, ub, hb) {
        return this._pipelineContext.setFloat2(bb, ub, hb), this
      }
      setVector3(bb, ub) {
        return this._pipelineContext.setVector3(bb, ub), this
      }
      setFloat3(bb, ub, hb, Bb) {
        return this._pipelineContext.setFloat3(bb, ub, hb, Bb), this
      }
      setVector4(bb, ub) {
        return this._pipelineContext.setVector4(bb, ub), this
      }
      setQuaternion(bb, ub) {
        return this._pipelineContext.setQuaternion(bb, ub), this
      }
      setFloat4(bb, ub, hb, Bb, Ob) {
        return this._pipelineContext.setFloat4(bb, ub, hb, Bb, Ob), this
      }
      setColor3(bb, ub) {
        return this._pipelineContext.setColor3(bb, ub), this
      }
      setColor4(bb, ub, hb) {
        return this._pipelineContext.setColor4(bb, ub, hb), this
      }
      setDirectColor4(bb, ub) {
        return this._pipelineContext.setDirectColor4(bb, ub), this
      }
      clearCodeCache() {
        this._vertexSourceCode = "", this._fragmentSourceCode = "", this._fragmentSourceCodeBeforeMigration = "", this._vertexSourceCodeBeforeMigration = ""
      }
      dispose() {
        if (arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) this._refCount = 0;
        else {
          if (Yb.PersistentMode) return;
          this._refCount--
        }
        this._refCount > 0 || this._isDisposed || (this._onReleaseEffectsObserver && (this._engine.onReleaseEffectsObservable.remove(this._onReleaseEffectsObserver), this._onReleaseEffectsObserver = null), this._pipelineContext && (0, Ub.k)(this._pipelineContext), this._engine._releaseEffect(this), this.clearCodeCache(), this._isDisposed = !0)
      }
      static RegisterShader(bb, ub, hb) {
        let Bb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        ub && (Gb.e.GetShadersStore(Bb)[`${bb}PixelShader`] = ub), hb && (Gb.e.GetShadersStore(Bb)[`${bb}VertexShader`] = hb)
      }
      static ResetCache() {
        Yb._BaseCache = {}
      }
    }
    Yb.LogShaderCodeOnCompilationError = !0, Yb.PersistentMode = !1, Yb.AutomaticallyClearCodeCache = !1, Yb._UniqueIdSeed = 0, Yb._BaseCache = {}, Yb.ShadersStore = Gb.e.ShadersStore, Yb.IncludesShadersStore = Gb.e.IncludesShadersStore
  },
  39621: (bb, ub, hb) => {
    hb.d(ub, {
      c: () => ab,
      d: () => rb,
      e: () => db
    });
    var Bb = hb(39302),
      Ob = hb(36727),
      Gb = hb(36760),
      Ub = hb(39598);
    const Lb = new Ob.d,
      Yb = new Ob.d,
      Sb = new Ob.d,
      ab = {
        ZN: () => {},
        eyeAtCamera: !0
      };

    function Hb(bb, ub, hb) {
      const Bb = hb.ZBb(),
        Ob = ub.ZBb();
      for (let Gb = 0; Gb < 16; Gb++) Bb[Gb] = Ob[Gb];
      return Bb[12] -= bb.x, Bb[13] -= bb.y, Bb[14] -= bb.z, hb.markAsUpdated(), hb
    }

    function wb(bb, ub, hb) {
      return (0, Gb.h)(ub, Yb), Hb(bb, Yb, Sb), (0, Gb.h)(Sb, hb), hb
    }

    function Zb(bb, ub, hb) {
      if (!ab.eyeAtCamera) return wb(bb, ub, hb);
      const Bb = hb.ZBb(),
        Ob = ub.ZBb();
      for (let Gb = 0; Gb < 16; Gb++) Bb[Gb] = Ob[Gb];
      return Bb[12] = 0, Bb[13] = 0, Bb[14] = 0, hb.markAsUpdated(), hb
    }

    function Xb(bb, ub, hb, Bb) {
      return (0, Gb.p)(Zb(bb, ub, Bb), hb, Bb), Bb
    }

    function pb(bb, ub, hb, Bb) {
      return (0, Gb.h)(hb, Yb), (0, Gb.p)(ub, Yb, Sb), Hb(bb, Sb, Yb), Zb(bb, hb, Sb), (0, Gb.p)(Yb, Sb, Bb), Bb
    }

    function ob(bb, ub, hb, Bb, Ob, Ub) {
      return (0, Gb.h)(hb, Yb), (0, Gb.p)(ub, Yb, Sb), Hb(bb, Sb, Yb), Xb(bb, Bb, Ob, Sb), (0, Gb.p)(Yb, Sb, Ub), Ub
    }

    function Ab(bb, ub) {
      const hb = ab.ZN();
      if (!hb || Lb === ub) return ub;
      Lb.updateFlag = ub.updateFlag;
      const Bb = hb.floatingOriginOffset;
      switch (bb) {
        case "world":
          return Hb(Bb, ub, Lb);
        case "view":
          return Zb(Bb, ub, Lb);
        case "worldView":
          return pb(Bb, ub, hb.getViewMatrix(), Lb);
        case "viewProjection":
          return Xb(Bb, hb.getViewMatrix(), hb.getProjectionMatrix(), Lb);
        case "worldViewProjection":
          return ob(Bb, ub, hb.getTransformMatrix(), hb.getViewMatrix(), hb.getProjectionMatrix(), Lb);
        default:
          if (bb.startsWith("u_")) {
            const Ob = bb.toLowerCase();
            if (Ob.startsWith("u_worldviewprojection")) return ob(Bb, ub, hb.getTransformMatrix(), hb.getViewMatrix(), hb.getProjectionMatrix(), Lb);
            if (Ob.startsWith("u_viewprojection")) return Xb(Bb, hb.getViewMatrix(), hb.getProjectionMatrix(), Lb);
            if (Ob.startsWith("u_worldview")) return pb(Bb, ub, hb.getViewMatrix(), Lb);
            if (Ob.startsWith("u_world")) return Hb(Bb, ub, Lb);
            if (Ob.startsWith("u_view")) return Zb(Bb, ub, Lb)
          }
          return ub
      }
    }
    const lb = Ub.c,
      Kb = Bb.c,
      Wb = lb.prototype._updateMatrixForUniform,
      Cb = Bb.c.prototype.setMatrix;

    function db() {
      Bb.c.prototype.setMatrix = Cb, Kb._setMatrixOverride = void 0, lb.prototype._updateMatrixForUniform = Wb, lb.prototype._updateMatrixForUniformOverride = void 0
    }

    function rb() {
      Kb.prototype._setMatrixOverride = Cb, Kb.prototype.setMatrix = function(bb, ub) {
        return this._setMatrixOverride(bb, Ab(bb, ub)), this
      }, lb.prototype._updateMatrixForUniformOverride = Wb, lb.prototype._updateMatrixForUniform = function(bb, ub) {
        this._updateMatrixForUniformOverride(bb, Ab(bb, ub))
      }
    }
  },
  39593: (bb, ub, hb) => {
    hb.d(ub, {
      b: () => Gb,
      d: () => Ob
    });
    var Bb = hb(39584);

    function Ob(bb, ub) {
      ub.WHITEBALANCE && bb.push("whiteBalanceMatrix"), ub.EXPOSURE && bb.push("exposureLinear"), ub.CONTRAST && bb.push("contrast"), ub.COLORGRADING && bb.push("colorTransformSettings"), (ub.VIGNETTE || ub.DITHER) && bb.push("vInverseScreenSize"), ub.VIGNETTE && (bb.push("vignetteSettings1"), bb.push("vignetteSettings2")), ub.COLORCURVES && (0, Bb.b)(bb), ub.DITHER && bb.push("ditherIntensity")
    }

    function Gb(bb, ub) {
      ub.COLORGRADING && bb.push("txColorTransform")
    }
  },
  39580: (bb, ub, hb) => {
    hb.d(ub, {
      b: () => zb,
      c: () => vb
    });
    var Bb = hb(39463),
      Ob = hb(39467),
      Gb = hb(36753),
      Ub = hb(36893),
      Lb = hb(36757),
      Yb = hb(36727);
    const Sb = [
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
      ab = 1e6 / Sb[Sb.length - 1][0],
      Hb = 150;

    function wb(bb, ub) {
      const hb = Number.isNaN(bb) ? ab : Math.max(bb, ab),
        Bb = (0, Lb.Clamp)(1e6 / hb, Sb[0][0], Sb[Sb.length - 1][0]);
      let Ob = 0,
        Gb = Sb.length - 1;
      for (; Gb - Ob > 1;) {
        const bb = Ob + Gb >> 1;
        Sb[bb][0] <= Bb ? Ob = bb : Gb = bb
      }
      const Ub = Ob,
        [wb, Zb, Xb, pb] = Sb[Ub],
        [ob, Ab, lb, Kb] = Sb[Ub + 1],
        Wb = (Bb - wb) / (ob - wb),
        Cb = Yb.m.Lerp(new Yb.m(Zb, Xb), new Yb.m(Ab, lb), Wb),
        db = Yb.m.Normalize(new Yb.m(1, pb)),
        rb = Yb.m.Normalize(new Yb.m(1, Kb)),
        jb = Yb.m.Normalize(Yb.m.Lerp(db, rb, Wb)),
        nb = (0, Lb.Clamp)(ub, -150, Hb);
      Cb.tBb(jb.scale(nb / 3e3));
      const Db = 2 * Cb.x - 8 * Cb.y + 4,
        xb = 3 * Cb.x / Db,
        zb = 2 * Cb.y / Db;
      return new Yb.q(xb / zb, 1, (1 - xb - zb) / zb)
    }
    const Zb = Yb.d.FromArray([.8951, -.7502, .0389, 0, .2664, 1.7135, -.0685, 0, -.1614, .0367, 1.0296, 0, 0, 0, 0, 1]),
      Xb = Yb.d.Invert(Zb);

    function pb(bb, ub) {
      const hb = ub > 0 ? bb / ub : 10;
      return (0, Lb.Clamp)(hb, .1, 10)
    }

    function ob(bb, ub) {
      const hb = Yb.q.TransformNormal(bb, Zb),
        Bb = Yb.q.TransformNormal(ub, Zb),
        Ob = Yb.d.FromArray([pb(Bb.x, hb.x), 0, 0, 0, 0, pb(Bb.y, hb.y), 0, 0, 0, 0, pb(Bb.z, hb.z), 0, 0, 0, 0, 1]);
      return Zb.multiply(Ob).multiply(Xb)
    }
    const Ab = new Yb.q(.95047, 1, 1.08883),
      lb = Yb.d.FromArray([.4124564, .2126729, .0193339, 0, .3575761, .7151522, .119192, 0, .1804375, .072175, .9503041, 0, 0, 0, 0, 1]).multiply(ob(Ab, wb(6500, 0))),
      Kb = Yb.d.Invert(lb),
      Wb = Yb.q.TransformNormal(new Yb.q(1, 1, 1), lb);
    var Cb = hb(39488),
      db = hb(39584);
    let rb = (() => {
      var bb;
      let ub, hb, Gb, Lb, Yb, Sb, ab, Hb, wb, Zb, Xb, pb, ob = [],
        Ab = [],
        lb = [],
        Kb = [],
        Wb = [],
        rb = [],
        jb = [],
        nb = [],
        Db = [],
        xb = [],
        zb = [],
        gb = [],
        ib = [],
        vb = [],
        tb = [],
        Jb = [],
        eb = [],
        Nb = [],
        sb = [],
        Mb = [],
        mb = [],
        Ib = [],
        Pb = [],
        qb = [];
      return bb = class {
        constructor() {
          this._dirty = !0, this._tempColor = new Ub.c(0, 0, 0, 0), this._globalCurve = new Ub.c(0, 0, 0, 0), this._highlightsCurve = new Ub.c(0, 0, 0, 0), this._midtonesCurve = new Ub.c(0, 0, 0, 0), this._shadowsCurve = new Ub.c(0, 0, 0, 0), this._positiveCurve = new Ub.c(0, 0, 0, 0), this._negativeCurve = new Ub.c(0, 0, 0, 0), this._globalHue = (0, Bb.k)(this, ob, 30), this._globalDensity = ((0, Bb.k)(this, Ab), (0, Bb.k)(this, lb, 0)), this._globalSaturation = ((0, Bb.k)(this, Kb), (0, Bb.k)(this, Wb, 0)), this._globalExposure = ((0, Bb.k)(this, rb), (0, Bb.k)(this, jb, 0)), this._highlightsHue = ((0, Bb.k)(this, nb), (0, Bb.k)(this, Db, 30)), this._highlightsDensity = ((0, Bb.k)(this, xb), (0, Bb.k)(this, zb, 0)), this._highlightsSaturation = ((0, Bb.k)(this, gb), (0, Bb.k)(this, ib, 0)), this._highlightsExposure = ((0, Bb.k)(this, vb), (0, Bb.k)(this, tb, 0)), this._midtonesHue = ((0, Bb.k)(this, Jb), (0, Bb.k)(this, eb, 30)), this._midtonesDensity = ((0, Bb.k)(this, Nb), (0, Bb.k)(this, sb, 0)), this._midtonesSaturation = ((0, Bb.k)(this, Mb), (0, Bb.k)(this, mb, 0)), this._midtonesExposure = ((0, Bb.k)(this, Ib), (0, Bb.k)(this, Pb, 0)), this._shadowsHue = ((0, Bb.k)(this, qb), 30), this._shadowsDensity = 0, this._shadowsSaturation = 0, this._shadowsExposure = 0
        }
        get globalHue() {
          return this._globalHue
        }
        set globalHue(bb) {
          this._globalHue = bb, this._dirty = !0
        }
        get globalDensity() {
          return this._globalDensity
        }
        set globalDensity(bb) {
          this._globalDensity = bb, this._dirty = !0
        }
        get globalSaturation() {
          return this._globalSaturation
        }
        set globalSaturation(bb) {
          this._globalSaturation = bb, this._dirty = !0
        }
        get globalExposure() {
          return this._globalExposure
        }
        set globalExposure(bb) {
          this._globalExposure = bb, this._dirty = !0
        }
        get highlightsHue() {
          return this._highlightsHue
        }
        set highlightsHue(bb) {
          this._highlightsHue = bb, this._dirty = !0
        }
        get highlightsDensity() {
          return this._highlightsDensity
        }
        set highlightsDensity(bb) {
          this._highlightsDensity = bb, this._dirty = !0
        }
        get highlightsSaturation() {
          return this._highlightsSaturation
        }
        set highlightsSaturation(bb) {
          this._highlightsSaturation = bb, this._dirty = !0
        }
        get highlightsExposure() {
          return this._highlightsExposure
        }
        set highlightsExposure(bb) {
          this._highlightsExposure = bb, this._dirty = !0
        }
        get midtonesHue() {
          return this._midtonesHue
        }
        set midtonesHue(bb) {
          this._midtonesHue = bb, this._dirty = !0
        }
        get midtonesDensity() {
          return this._midtonesDensity
        }
        set midtonesDensity(bb) {
          this._midtonesDensity = bb, this._dirty = !0
        }
        get midtonesSaturation() {
          return this._midtonesSaturation
        }
        set midtonesSaturation(bb) {
          this._midtonesSaturation = bb, this._dirty = !0
        }
        get midtonesExposure() {
          return this._midtonesExposure
        }
        set midtonesExposure(bb) {
          this._midtonesExposure = bb, this._dirty = !0
        }
        get shadowsHue() {
          return this._shadowsHue
        }
        set shadowsHue(bb) {
          this._shadowsHue = bb, this._dirty = !0
        }
        get shadowsDensity() {
          return this._shadowsDensity
        }
        set shadowsDensity(bb) {
          this._shadowsDensity = bb, this._dirty = !0
        }
        get shadowsSaturation() {
          return this._shadowsSaturation
        }
        set shadowsSaturation(bb) {
          this._shadowsSaturation = bb, this._dirty = !0
        }
        get shadowsExposure() {
          return this._shadowsExposure
        }
        set shadowsExposure(bb) {
          this._shadowsExposure = bb, this._dirty = !0
        }
        getClassName() {
          return "ColorCurves"
        }
        _getColorGradingDataToRef(ub, hb, Bb, Ob, Gb) {
          null != ub && (ub = bb._Clamp(ub, 0, 360), hb = bb._Clamp(hb, -100, 100), Bb = bb._Clamp(Bb, -100, 100), Ob = bb._Clamp(Ob, -100, 100), hb = bb._ApplyColorGradingSliderNonlinear(hb), hb *= .5, Ob = bb._ApplyColorGradingSliderNonlinear(Ob), hb < 0 && (hb *= -1, ub = (ub + 180) % 360), bb._FromHSBToRef(ub, hb, 50 + .25 * Ob, Gb), Gb.scaleToRef(2, Gb), Gb.a = 1 + .01 * Bb)
        }
        static _ApplyColorGradingSliderNonlinear(bb) {
          bb /= 100;
          let ub = Math.abs(bb);
          return ub = Math.pow(ub, 2), bb < 0 && (ub *= -1), ub *= 100, ub
        }
        static _FromHSBToRef(ub, hb, Bb, Ob) {
          let Gb = bb._Clamp(ub, 0, 360);
          const Ub = bb._Clamp(hb / 100, 0, 1),
            Lb = bb._Clamp(Bb / 100, 0, 1);
          if (0 === Ub) Ob.r = Lb, Ob.g = Lb, Ob.b = Lb;
          else {
            Gb /= 60;
            const bb = Math.floor(Gb),
              ub = Gb - bb,
              hb = Lb * (1 - Ub),
              Bb = Lb * (1 - Ub * ub),
              Yb = Lb * (1 - Ub * (1 - ub));
            switch (bb) {
              case 0:
                Ob.r = Lb, Ob.g = Yb, Ob.b = hb;
                break;
              case 1:
                Ob.r = Bb, Ob.g = Lb, Ob.b = hb;
                break;
              case 2:
                Ob.r = hb, Ob.g = Lb, Ob.b = Yb;
                break;
              case 3:
                Ob.r = hb, Ob.g = Bb, Ob.b = Lb;
                break;
              case 4:
                Ob.r = Yb, Ob.g = hb, Ob.b = Lb;
                break;
              default:
                Ob.r = Lb, Ob.g = hb, Ob.b = Bb
            }
          }
          Ob.a = 1
        }
        static _Clamp(bb, ub, hb) {
          return Math.min(Math.max(bb, ub), hb)
        }
        clone() {
          return Cb.c.Clone((() => new bb), this)
        }
        serialize() {
          return Cb.c.Serialize(this)
        }
        _bind(bb) {
          let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "vCameraColorCurvePositive",
            hb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "vCameraColorCurveNeutral",
            Bb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "vCameraColorCurveNegative";
          this._dirty && (this._dirty = !1, this._getColorGradingDataToRef(this._globalHue, this._globalDensity, this._globalSaturation, this._globalExposure, this._globalCurve), this._getColorGradingDataToRef(this._highlightsHue, this._highlightsDensity, this._highlightsSaturation, this._highlightsExposure, this._tempColor), this._tempColor.multiplyToRef(this._globalCurve, this._highlightsCurve), this._getColorGradingDataToRef(this._midtonesHue, this._midtonesDensity, this._midtonesSaturation, this._midtonesExposure, this._tempColor), this._tempColor.multiplyToRef(this._globalCurve, this._midtonesCurve), this._getColorGradingDataToRef(this._shadowsHue, this._shadowsDensity, this._shadowsSaturation, this._shadowsExposure, this._tempColor), this._tempColor.multiplyToRef(this._globalCurve, this._shadowsCurve), this._highlightsCurve.subtractToRef(this._midtonesCurve, this._positiveCurve), this._midtonesCurve.subtractToRef(this._shadowsCurve, this._negativeCurve)), bb && (bb.setFloat4(ub, this._positiveCurve.r, this._positiveCurve.g, this._positiveCurve.b, this._positiveCurve.a), bb.setFloat4(hb, this._midtonesCurve.r, this._midtonesCurve.g, this._midtonesCurve.b, this._midtonesCurve.a), bb.setFloat4(Bb, this._negativeCurve.r, this._negativeCurve.g, this._negativeCurve.b, this._negativeCurve.a))
        }
      }, (() => {
        const Ub = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        ub = [(0, Ob.K)()], hb = [(0, Ob.K)()], Gb = [(0, Ob.K)()], Lb = [(0, Ob.K)()], Yb = [(0, Ob.K)()], Sb = [(0, Ob.K)()], ab = [(0, Ob.K)()], Hb = [(0, Ob.K)()], wb = [(0, Ob.K)()], Zb = [(0, Ob.K)()], Xb = [(0, Ob.K)()], pb = [(0, Ob.K)()], (0, Bb.h)(null, null, ub, {
          kind: "field",
          name: "_globalHue",
          static: !1,
          private: !1,
          access: {
            has: bb => "_globalHue" in bb,
            get: bb => bb._globalHue,
            set: (bb, ub) => {
              bb._globalHue = ub
            }
          },
          metadata: Ub
        }, ob, Ab), (0, Bb.h)(null, null, hb, {
          kind: "field",
          name: "_globalDensity",
          static: !1,
          private: !1,
          access: {
            has: bb => "_globalDensity" in bb,
            get: bb => bb._globalDensity,
            set: (bb, ub) => {
              bb._globalDensity = ub
            }
          },
          metadata: Ub
        }, lb, Kb), (0, Bb.h)(null, null, Gb, {
          kind: "field",
          name: "_globalSaturation",
          static: !1,
          private: !1,
          access: {
            has: bb => "_globalSaturation" in bb,
            get: bb => bb._globalSaturation,
            set: (bb, ub) => {
              bb._globalSaturation = ub
            }
          },
          metadata: Ub
        }, Wb, rb), (0, Bb.h)(null, null, Lb, {
          kind: "field",
          name: "_globalExposure",
          static: !1,
          private: !1,
          access: {
            has: bb => "_globalExposure" in bb,
            get: bb => bb._globalExposure,
            set: (bb, ub) => {
              bb._globalExposure = ub
            }
          },
          metadata: Ub
        }, jb, nb), (0, Bb.h)(null, null, Yb, {
          kind: "field",
          name: "_highlightsHue",
          static: !1,
          private: !1,
          access: {
            has: bb => "_highlightsHue" in bb,
            get: bb => bb._highlightsHue,
            set: (bb, ub) => {
              bb._highlightsHue = ub
            }
          },
          metadata: Ub
        }, Db, xb), (0, Bb.h)(null, null, Sb, {
          kind: "field",
          name: "_highlightsDensity",
          static: !1,
          private: !1,
          access: {
            has: bb => "_highlightsDensity" in bb,
            get: bb => bb._highlightsDensity,
            set: (bb, ub) => {
              bb._highlightsDensity = ub
            }
          },
          metadata: Ub
        }, zb, gb), (0, Bb.h)(null, null, ab, {
          kind: "field",
          name: "_highlightsSaturation",
          static: !1,
          private: !1,
          access: {
            has: bb => "_highlightsSaturation" in bb,
            get: bb => bb._highlightsSaturation,
            set: (bb, ub) => {
              bb._highlightsSaturation = ub
            }
          },
          metadata: Ub
        }, ib, vb), (0, Bb.h)(null, null, Hb, {
          kind: "field",
          name: "_highlightsExposure",
          static: !1,
          private: !1,
          access: {
            has: bb => "_highlightsExposure" in bb,
            get: bb => bb._highlightsExposure,
            set: (bb, ub) => {
              bb._highlightsExposure = ub
            }
          },
          metadata: Ub
        }, tb, Jb), (0, Bb.h)(null, null, wb, {
          kind: "field",
          name: "_midtonesHue",
          static: !1,
          private: !1,
          access: {
            has: bb => "_midtonesHue" in bb,
            get: bb => bb._midtonesHue,
            set: (bb, ub) => {
              bb._midtonesHue = ub
            }
          },
          metadata: Ub
        }, eb, Nb), (0, Bb.h)(null, null, Zb, {
          kind: "field",
          name: "_midtonesDensity",
          static: !1,
          private: !1,
          access: {
            has: bb => "_midtonesDensity" in bb,
            get: bb => bb._midtonesDensity,
            set: (bb, ub) => {
              bb._midtonesDensity = ub
            }
          },
          metadata: Ub
        }, sb, Mb), (0, Bb.h)(null, null, Xb, {
          kind: "field",
          name: "_midtonesSaturation",
          static: !1,
          private: !1,
          access: {
            has: bb => "_midtonesSaturation" in bb,
            get: bb => bb._midtonesSaturation,
            set: (bb, ub) => {
              bb._midtonesSaturation = ub
            }
          },
          metadata: Ub
        }, mb, Ib), (0, Bb.h)(null, null, pb, {
          kind: "field",
          name: "_midtonesExposure",
          static: !1,
          private: !1,
          access: {
            has: bb => "_midtonesExposure" in bb,
            get: bb => bb._midtonesExposure,
            set: (bb, ub) => {
              bb._midtonesExposure = ub
            }
          },
          metadata: Ub
        }, Pb, qb), Ub && Object.defineProperty(bb, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Ub
        })
      })(), bb.PrepareUniforms = db.b, bb
    })();

    function jb(bb, ub) {
      let hb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "vCameraColorCurvePositive",
        Bb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "vCameraColorCurveNeutral",
        Ob = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "vCameraColorCurveNegative";
      bb._bind(ub, hb, Bb, Ob)
    }
    var nb = hb(39387),
      Db = hb(39593),
      xb = hb(36762);
    let zb = (() => {
        var bb;
        let ub, hb, Sb, Zb, Xb, pb, Ab, db, xb, zb, gb, ib, vb, tb, Jb, eb, Nb, sb, Mb, mb, Ib, Pb, qb, Eb, yb, Vb, Fb, fb, kb = [],
          Tb = [],
          cb = [],
          Qb = [],
          Rb = [],
          bu = [],
          uu = [],
          hu = [],
          Bu = [],
          Ou = [],
          Gu = [],
          Uu = [],
          Lu = [],
          Yu = [],
          Su = [],
          au = [],
          Hu = [],
          wu = [],
          Zu = [],
          Xu = [],
          pu = [],
          ou = [],
          Au = [],
          lu = [],
          Ku = [],
          Wu = [],
          Cu = [],
          du = [],
          ru = [],
          ju = [],
          nu = [],
          Du = [],
          xu = [],
          zu = [],
          gu = [],
          iu = [],
          vu = [],
          tu = [],
          Ju = [],
          eu = [],
          Nu = [],
          su = [],
          Mu = [],
          mu = [],
          Iu = [],
          Pu = [],
          qu = [],
          Eu = [],
          yu = [],
          Vu = [],
          Fu = [],
          fu = [],
          ku = [],
          Tu = [],
          cu = [],
          Qu = [];
        return bb = class {
          constructor() {
            this.colorCurves = (0, Bb.k)(this, kb, new rb), this._colorCurvesEnabled = ((0, Bb.k)(this, Tb), (0, Bb.k)(this, cb, !1)), this._colorGradingTexture = ((0, Bb.k)(this, Qb), (0, Bb.k)(this, Rb, void 0)), this._colorGradingEnabled = ((0, Bb.k)(this, bu), (0, Bb.k)(this, uu, !1)), this._colorGradingWithGreenDepth = ((0, Bb.k)(this, hu), (0, Bb.k)(this, Bu, !0)), this._colorGradingBGR = ((0, Bb.k)(this, Ou), (0, Bb.k)(this, Gu, !0)), this._exposure = ((0, Bb.k)(this, Uu), (0, Bb.k)(this, Lu, 1)), this._toneMappingEnabled = ((0, Bb.k)(this, Yu), (0, Bb.k)(this, Su, !1)), this._toneMappingType = ((0, Bb.k)(this, au), (0, Bb.k)(this, Hu, bb.TONEMAPPING_STANDARD)), this._contrast = ((0, Bb.k)(this, wu), (0, Bb.k)(this, Zu, 1)), this._whiteBalanceEnabled = ((0, Bb.k)(this, Xu), (0, Bb.k)(this, pu, !1)), this._temperature = ((0, Bb.k)(this, ou), (0, Bb.k)(this, Au, 6500)), this._tint = ((0, Bb.k)(this, lu), (0, Bb.k)(this, Ku, 0)), this._whiteBalanceMatrix = ((0, Bb.k)(this, Wu), null), this._whiteBalanceMatrixTemperature = null, this._whiteBalanceMatrixTint = null, this.vignetteStretch = (0, Bb.k)(this, Cu, 0), this.vignetteCenterX = ((0, Bb.k)(this, du), (0, Bb.k)(this, ru, 0)), this.vignetteCenterY = ((0, Bb.k)(this, ju), (0, Bb.k)(this, nu, 0)), this.vignetteWeight = ((0, Bb.k)(this, Du), (0, Bb.k)(this, xu, 1.5)), this.vignetteColor = ((0, Bb.k)(this, zu), (0, Bb.k)(this, gu, new Ub.c(0, 0, 0, 0))), this.vignetteCameraFov = ((0, Bb.k)(this, iu), (0, Bb.k)(this, vu, .5)), this._vignetteBlendMode = ((0, Bb.k)(this, tu), (0, Bb.k)(this, Ju, bb.VIGNETTEMODE_MULTIPLY)), this._vignetteEnabled = ((0, Bb.k)(this, eu), (0, Bb.k)(this, Nu, !1)), this._ditheringEnabled = ((0, Bb.k)(this, su), (0, Bb.k)(this, Mu, !1)), this._ditheringIntensity = ((0, Bb.k)(this, mu), (0, Bb.k)(this, Iu, 1 / 255)), this._skipFinalColorClamp = ((0, Bb.k)(this, Pu), (0, Bb.k)(this, qu, !1)), this._applyByPostProcess = ((0, Bb.k)(this, Eu), (0, Bb.k)(this, yu, !1)), this._isEnabled = ((0, Bb.k)(this, Vu), (0, Bb.k)(this, Fu, !0)), this.outputTextureWidth = ((0, Bb.k)(this, fu), (0, Bb.k)(this, ku, 0)), this.outputTextureHeight = ((0, Bb.k)(this, Tu), (0, Bb.k)(this, cu, 0)), this.onUpdateParameters = ((0, Bb.k)(this, Qu), new Gb.e)
          }
          get colorCurvesEnabled() {
            return this._colorCurvesEnabled
          }
          set colorCurvesEnabled(bb) {
            this._colorCurvesEnabled !== bb && (this._colorCurvesEnabled = bb, this._updateParameters())
          }
          get colorGradingTexture() {
            return this._colorGradingTexture
          }
          set colorGradingTexture(bb) {
            this._colorGradingTexture !== bb && (this._colorGradingTexture = bb, this._updateParameters())
          }
          get colorGradingEnabled() {
            return this._colorGradingEnabled
          }
          set colorGradingEnabled(bb) {
            this._colorGradingEnabled !== bb && (this._colorGradingEnabled = bb, this._updateParameters())
          }
          get colorGradingWithGreenDepth() {
            return this._colorGradingWithGreenDepth
          }
          set colorGradingWithGreenDepth(bb) {
            this._colorGradingWithGreenDepth !== bb && (this._colorGradingWithGreenDepth = bb, this._updateParameters())
          }
          get colorGradingBGR() {
            return this._colorGradingBGR
          }
          set colorGradingBGR(bb) {
            this._colorGradingBGR !== bb && (this._colorGradingBGR = bb, this._updateParameters())
          }
          get exposure() {
            return this._exposure
          }
          set exposure(bb) {
            this._exposure !== bb && (this._exposure = bb, this._updateParameters())
          }
          get toneMappingEnabled() {
            return this._toneMappingEnabled
          }
          set toneMappingEnabled(bb) {
            this._toneMappingEnabled !== bb && (this._toneMappingEnabled = bb, this._updateParameters())
          }
          get toneMappingType() {
            return this._toneMappingType
          }
          set toneMappingType(bb) {
            this._toneMappingType !== bb && (this._toneMappingType = bb, this._updateParameters())
          }
          get contrast() {
            return this._contrast
          }
          set contrast(bb) {
            this._contrast !== bb && (this._contrast = bb, this._updateParameters())
          }
          get whiteBalanceEnabled() {
            return this._whiteBalanceEnabled
          }
          set whiteBalanceEnabled(bb) {
            this._whiteBalanceEnabled !== bb && (this._whiteBalanceEnabled = bb, this._updateParameters())
          }
          get temperature() {
            return this._temperature
          }
          set temperature(bb) {
            bb = Number.isNaN(bb) ? ab : Math.max(bb, ab), this._temperature !== bb && (this._temperature = bb, this._updateParameters())
          }
          get tint() {
            return this._tint
          }
          set tint(bb) {
            bb = (0, Lb.Clamp)(bb, -150, Hb), this._tint !== bb && (this._tint = bb, this._updateParameters())
          }
          _getWhiteBalanceMatrix() {
            return null !== this._whiteBalanceMatrix && this._whiteBalanceMatrixTemperature === this._temperature && this._whiteBalanceMatrixTint === this._tint || (this._whiteBalanceMatrixTemperature = this._temperature, this._whiteBalanceMatrixTint = this._tint, this._whiteBalanceMatrix = function(bb, ub) {
              const hb = ob(wb(bb, ub), Wb),
                Bb = lb.multiply(hb).multiply(Kb);
              return Yb.d.GetAsMatrix3x3(Bb)
            }(this._temperature, this._tint)), this._whiteBalanceMatrix
          }
          get vignetteCentreY() {
            return this.vignetteCenterY
          }
          set vignetteCentreY(bb) {
            this.vignetteCenterY = bb
          }
          get vignetteCentreX() {
            return this.vignetteCenterX
          }
          set vignetteCentreX(bb) {
            this.vignetteCenterX = bb
          }
          get vignetteBlendMode() {
            return this._vignetteBlendMode
          }
          set vignetteBlendMode(bb) {
            this._vignetteBlendMode !== bb && (this._vignetteBlendMode = bb, this._updateParameters())
          }
          get vignetteEnabled() {
            return this._vignetteEnabled
          }
          set vignetteEnabled(bb) {
            this._vignetteEnabled !== bb && (this._vignetteEnabled = bb, this._updateParameters())
          }
          get ditheringEnabled() {
            return this._ditheringEnabled
          }
          set ditheringEnabled(bb) {
            this._ditheringEnabled !== bb && (this._ditheringEnabled = bb, this._updateParameters())
          }
          get ditheringIntensity() {
            return this._ditheringIntensity
          }
          set ditheringIntensity(bb) {
            this._ditheringIntensity !== bb && (this._ditheringIntensity = bb, this._updateParameters())
          }
          get skipFinalColorClamp() {
            return this._skipFinalColorClamp
          }
          set skipFinalColorClamp(bb) {
            this._skipFinalColorClamp !== bb && (this._skipFinalColorClamp = bb, this._updateParameters())
          }
          get applyByPostProcess() {
            return this._applyByPostProcess
          }
          set applyByPostProcess(bb) {
            this._applyByPostProcess !== bb && (this._applyByPostProcess = bb, this._updateParameters())
          }
          get isEnabled() {
            return this._isEnabled
          }
          set isEnabled(bb) {
            this._isEnabled !== bb && (this._isEnabled = bb, this._updateParameters())
          }
          _updateParameters() {
            this.onUpdateParameters.notifyObservers(this)
          }
          getClassName() {
            return "ImageProcessingConfiguration"
          }
          prepareDefines(ub) {
            if ((arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) !== this.applyByPostProcess || !this._isEnabled) return ub.WHITEBALANCE = !1, ub.VIGNETTE = !1, ub.TONEMAPPING = 0, ub.CONTRAST = !1, ub.EXPOSURE = !1, ub.COLORCURVES = !1, ub.COLORGRADING = !1, ub.COLORGRADING3D = !1, ub.DITHER = !1, ub.IMAGEPROCESSING = !1, ub.SKIPFINALCOLORCLAMP = this.skipFinalColorClamp, void(ub.IMAGEPROCESSINGPOSTPROCESS = this.applyByPostProcess && this._isEnabled);
            if (ub.WHITEBALANCE = this._whiteBalanceEnabled, ub.VIGNETTE = this.vignetteEnabled, ub.VIGNETTEBLENDMODEMULTIPLY = this.vignetteBlendMode === bb._VIGNETTEMODE_MULTIPLY, ub.VIGNETTEBLENDMODEOPAQUE = !ub.VIGNETTEBLENDMODEMULTIPLY, this._toneMappingEnabled) switch (this._toneMappingType) {
              case bb.TONEMAPPING_KHR_PBR_NEUTRAL:
                ub.TONEMAPPING = 3;
                break;
              case bb.TONEMAPPING_ACES:
                ub.TONEMAPPING = 2;
                break;
              default:
                ub.TONEMAPPING = 1
            } else ub.TONEMAPPING = 0;
            ub.CONTRAST = 1 !== this.contrast, ub.EXPOSURE = 1 !== this.exposure, ub.COLORCURVES = this.colorCurvesEnabled && !!this.colorCurves, ub.COLORGRADING = this.colorGradingEnabled && !!this.colorGradingTexture, ub.COLORGRADING ? ub.COLORGRADING3D = this.colorGradingTexture.is3D : ub.COLORGRADING3D = !1, ub.SAMPLER3DGREENDEPTH = this.colorGradingWithGreenDepth, ub.SAMPLER3DBGRMAP = this.colorGradingBGR, ub.DITHER = this._ditheringEnabled, ub.IMAGEPROCESSINGPOSTPROCESS = this.applyByPostProcess, ub.SKIPFINALCOLORCLAMP = this.skipFinalColorClamp, ub.IMAGEPROCESSING = ub.WHITEBALANCE || ub.VIGNETTE || !!ub.TONEMAPPING || ub.CONTRAST || ub.EXPOSURE || ub.COLORCURVES || ub.COLORGRADING || ub.DITHER
          }
          isReady() {
            return !this.colorGradingEnabled || !this.colorGradingTexture || this.colorGradingTexture.isReady()
          }
          bind(bb, ub) {
            if (this._whiteBalanceEnabled && bb.setMatrix3x3("whiteBalanceMatrix", this._getWhiteBalanceMatrix()), this._colorCurvesEnabled && this.colorCurves && jb(this.colorCurves, bb), this._vignetteEnabled || this._ditheringEnabled) {
              const hb = 1 / (this.outputTextureWidth || bb.UX().getRenderWidth()),
                Bb = 1 / (this.outputTextureHeight || bb.UX().getRenderHeight());
              if (bb.setFloat2("vInverseScreenSize", hb, Bb), this._ditheringEnabled && bb.setFloat("ditherIntensity", .5 * this._ditheringIntensity), this._vignetteEnabled) {
                const Ob = null != ub ? ub : Bb / hb;
                let Gb = Math.tan(.5 * this.vignetteCameraFov),
                  Ub = Gb * Ob;
                const Lb = Math.sqrt(Ub * Gb);
                Ub = (0, nb.m)(Ub, Lb, this.vignetteStretch), Gb = (0, nb.m)(Gb, Lb, this.vignetteStretch), bb.setFloat4("vignetteSettings1", Ub, Gb, -Ub * this.vignetteCenterX, -Gb * this.vignetteCenterY);
                const Yb = -2 * this.vignetteWeight;
                bb.setFloat4("vignetteSettings2", this.vignetteColor.r, this.vignetteColor.g, this.vignetteColor.b, Yb)
              }
            }
            if (bb.setFloat("exposureLinear", this.exposure), bb.setFloat("contrast", this.contrast), this.colorGradingTexture) {
              bb.setTexture("txColorTransform", this.colorGradingTexture);
              const ub = this.colorGradingTexture.getSize().height;
              bb.setFloat4("colorTransformSettings", (ub - 1) / ub, .5 / ub, ub, this.colorGradingTexture.level)
            }
          }
          clone() {
            return Cb.c.Clone((() => new bb), this)
          }
          serialize() {
            return Cb.c.Serialize(this)
          }
          static get VIGNETTEMODE_MULTIPLY() {
            return this._VIGNETTEMODE_MULTIPLY
          }
          static get VIGNETTEMODE_OPAQUE() {
            return this._VIGNETTEMODE_OPAQUE
          }
        }, (() => {
          const Gb = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          ub = [(0, Ob.m)()], hb = [(0, Ob.K)()], Sb = [(0, Ob.D)("colorGradingTexture")], Zb = [(0, Ob.K)()], Xb = [(0, Ob.K)()], pb = [(0, Ob.K)()], Ab = [(0, Ob.K)()], db = [(0, Ob.K)()], xb = [(0, Ob.K)()], zb = [(0, Ob.K)()], gb = [(0, Ob.K)()], ib = [(0, Ob.K)()], vb = [(0, Ob.K)()], tb = [(0, Ob.K)()], Jb = [(0, Ob.K)()], eb = [(0, Ob.K)()], Nb = [(0, Ob.K)()], sb = [(0, Ob.t)()], Mb = [(0, Ob.K)()], mb = [(0, Ob.K)()], Ib = [(0, Ob.K)()], Pb = [(0, Ob.K)()], qb = [(0, Ob.K)()], Eb = [(0, Ob.K)()], yb = [(0, Ob.K)()], Vb = [(0, Ob.K)()], Fb = [(0, Ob.K)()], fb = [(0, Ob.K)()], (0, Bb.h)(null, null, ub, {
            kind: "field",
            name: "colorCurves",
            static: !1,
            private: !1,
            access: {
              has: bb => "colorCurves" in bb,
              get: bb => bb.colorCurves,
              set: (bb, ub) => {
                bb.colorCurves = ub
              }
            },
            metadata: Gb
          }, kb, Tb), (0, Bb.h)(null, null, hb, {
            kind: "field",
            name: "_colorCurvesEnabled",
            static: !1,
            private: !1,
            access: {
              has: bb => "_colorCurvesEnabled" in bb,
              get: bb => bb._colorCurvesEnabled,
              set: (bb, ub) => {
                bb._colorCurvesEnabled = ub
              }
            },
            metadata: Gb
          }, cb, Qb), (0, Bb.h)(null, null, Sb, {
            kind: "field",
            name: "_colorGradingTexture",
            static: !1,
            private: !1,
            access: {
              has: bb => "_colorGradingTexture" in bb,
              get: bb => bb._colorGradingTexture,
              set: (bb, ub) => {
                bb._colorGradingTexture = ub
              }
            },
            metadata: Gb
          }, Rb, bu), (0, Bb.h)(null, null, Zb, {
            kind: "field",
            name: "_colorGradingEnabled",
            static: !1,
            private: !1,
            access: {
              has: bb => "_colorGradingEnabled" in bb,
              get: bb => bb._colorGradingEnabled,
              set: (bb, ub) => {
                bb._colorGradingEnabled = ub
              }
            },
            metadata: Gb
          }, uu, hu), (0, Bb.h)(null, null, Xb, {
            kind: "field",
            name: "_colorGradingWithGreenDepth",
            static: !1,
            private: !1,
            access: {
              has: bb => "_colorGradingWithGreenDepth" in bb,
              get: bb => bb._colorGradingWithGreenDepth,
              set: (bb, ub) => {
                bb._colorGradingWithGreenDepth = ub
              }
            },
            metadata: Gb
          }, Bu, Ou), (0, Bb.h)(null, null, pb, {
            kind: "field",
            name: "_colorGradingBGR",
            static: !1,
            private: !1,
            access: {
              has: bb => "_colorGradingBGR" in bb,
              get: bb => bb._colorGradingBGR,
              set: (bb, ub) => {
                bb._colorGradingBGR = ub
              }
            },
            metadata: Gb
          }, Gu, Uu), (0, Bb.h)(null, null, Ab, {
            kind: "field",
            name: "_exposure",
            static: !1,
            private: !1,
            access: {
              has: bb => "_exposure" in bb,
              get: bb => bb._exposure,
              set: (bb, ub) => {
                bb._exposure = ub
              }
            },
            metadata: Gb
          }, Lu, Yu), (0, Bb.h)(null, null, db, {
            kind: "field",
            name: "_toneMappingEnabled",
            static: !1,
            private: !1,
            access: {
              has: bb => "_toneMappingEnabled" in bb,
              get: bb => bb._toneMappingEnabled,
              set: (bb, ub) => {
                bb._toneMappingEnabled = ub
              }
            },
            metadata: Gb
          }, Su, au), (0, Bb.h)(null, null, xb, {
            kind: "field",
            name: "_toneMappingType",
            static: !1,
            private: !1,
            access: {
              has: bb => "_toneMappingType" in bb,
              get: bb => bb._toneMappingType,
              set: (bb, ub) => {
                bb._toneMappingType = ub
              }
            },
            metadata: Gb
          }, Hu, wu), (0, Bb.h)(null, null, zb, {
            kind: "field",
            name: "_contrast",
            static: !1,
            private: !1,
            access: {
              has: bb => "_contrast" in bb,
              get: bb => bb._contrast,
              set: (bb, ub) => {
                bb._contrast = ub
              }
            },
            metadata: Gb
          }, Zu, Xu), (0, Bb.h)(null, null, gb, {
            kind: "field",
            name: "_whiteBalanceEnabled",
            static: !1,
            private: !1,
            access: {
              has: bb => "_whiteBalanceEnabled" in bb,
              get: bb => bb._whiteBalanceEnabled,
              set: (bb, ub) => {
                bb._whiteBalanceEnabled = ub
              }
            },
            metadata: Gb
          }, pu, ou), (0, Bb.h)(null, null, ib, {
            kind: "field",
            name: "_temperature",
            static: !1,
            private: !1,
            access: {
              has: bb => "_temperature" in bb,
              get: bb => bb._temperature,
              set: (bb, ub) => {
                bb._temperature = ub
              }
            },
            metadata: Gb
          }, Au, lu), (0, Bb.h)(null, null, vb, {
            kind: "field",
            name: "_tint",
            static: !1,
            private: !1,
            access: {
              has: bb => "_tint" in bb,
              get: bb => bb._tint,
              set: (bb, ub) => {
                bb._tint = ub
              }
            },
            metadata: Gb
          }, Ku, Wu), (0, Bb.h)(null, null, tb, {
            kind: "field",
            name: "vignetteStretch",
            static: !1,
            private: !1,
            access: {
              has: bb => "vignetteStretch" in bb,
              get: bb => bb.vignetteStretch,
              set: (bb, ub) => {
                bb.vignetteStretch = ub
              }
            },
            metadata: Gb
          }, Cu, du), (0, Bb.h)(null, null, Jb, {
            kind: "field",
            name: "vignetteCenterX",
            static: !1,
            private: !1,
            access: {
              has: bb => "vignetteCenterX" in bb,
              get: bb => bb.vignetteCenterX,
              set: (bb, ub) => {
                bb.vignetteCenterX = ub
              }
            },
            metadata: Gb
          }, ru, ju), (0, Bb.h)(null, null, eb, {
            kind: "field",
            name: "vignetteCenterY",
            static: !1,
            private: !1,
            access: {
              has: bb => "vignetteCenterY" in bb,
              get: bb => bb.vignetteCenterY,
              set: (bb, ub) => {
                bb.vignetteCenterY = ub
              }
            },
            metadata: Gb
          }, nu, Du), (0, Bb.h)(null, null, Nb, {
            kind: "field",
            name: "vignetteWeight",
            static: !1,
            private: !1,
            access: {
              has: bb => "vignetteWeight" in bb,
              get: bb => bb.vignetteWeight,
              set: (bb, ub) => {
                bb.vignetteWeight = ub
              }
            },
            metadata: Gb
          }, xu, zu), (0, Bb.h)(null, null, sb, {
            kind: "field",
            name: "vignetteColor",
            static: !1,
            private: !1,
            access: {
              has: bb => "vignetteColor" in bb,
              get: bb => bb.vignetteColor,
              set: (bb, ub) => {
                bb.vignetteColor = ub
              }
            },
            metadata: Gb
          }, gu, iu), (0, Bb.h)(null, null, Mb, {
            kind: "field",
            name: "vignetteCameraFov",
            static: !1,
            private: !1,
            access: {
              has: bb => "vignetteCameraFov" in bb,
              get: bb => bb.vignetteCameraFov,
              set: (bb, ub) => {
                bb.vignetteCameraFov = ub
              }
            },
            metadata: Gb
          }, vu, tu), (0, Bb.h)(null, null, mb, {
            kind: "field",
            name: "_vignetteBlendMode",
            static: !1,
            private: !1,
            access: {
              has: bb => "_vignetteBlendMode" in bb,
              get: bb => bb._vignetteBlendMode,
              set: (bb, ub) => {
                bb._vignetteBlendMode = ub
              }
            },
            metadata: Gb
          }, Ju, eu), (0, Bb.h)(null, null, Ib, {
            kind: "field",
            name: "_vignetteEnabled",
            static: !1,
            private: !1,
            access: {
              has: bb => "_vignetteEnabled" in bb,
              get: bb => bb._vignetteEnabled,
              set: (bb, ub) => {
                bb._vignetteEnabled = ub
              }
            },
            metadata: Gb
          }, Nu, su), (0, Bb.h)(null, null, Pb, {
            kind: "field",
            name: "_ditheringEnabled",
            static: !1,
            private: !1,
            access: {
              has: bb => "_ditheringEnabled" in bb,
              get: bb => bb._ditheringEnabled,
              set: (bb, ub) => {
                bb._ditheringEnabled = ub
              }
            },
            metadata: Gb
          }, Mu, mu), (0, Bb.h)(null, null, qb, {
            kind: "field",
            name: "_ditheringIntensity",
            static: !1,
            private: !1,
            access: {
              has: bb => "_ditheringIntensity" in bb,
              get: bb => bb._ditheringIntensity,
              set: (bb, ub) => {
                bb._ditheringIntensity = ub
              }
            },
            metadata: Gb
          }, Iu, Pu), (0, Bb.h)(null, null, Eb, {
            kind: "field",
            name: "_skipFinalColorClamp",
            static: !1,
            private: !1,
            access: {
              has: bb => "_skipFinalColorClamp" in bb,
              get: bb => bb._skipFinalColorClamp,
              set: (bb, ub) => {
                bb._skipFinalColorClamp = ub
              }
            },
            metadata: Gb
          }, qu, Eu), (0, Bb.h)(null, null, yb, {
            kind: "field",
            name: "_applyByPostProcess",
            static: !1,
            private: !1,
            access: {
              has: bb => "_applyByPostProcess" in bb,
              get: bb => bb._applyByPostProcess,
              set: (bb, ub) => {
                bb._applyByPostProcess = ub
              }
            },
            metadata: Gb
          }, yu, Vu), (0, Bb.h)(null, null, Vb, {
            kind: "field",
            name: "_isEnabled",
            static: !1,
            private: !1,
            access: {
              has: bb => "_isEnabled" in bb,
              get: bb => bb._isEnabled,
              set: (bb, ub) => {
                bb._isEnabled = ub
              }
            },
            metadata: Gb
          }, Fu, fu), (0, Bb.h)(null, null, Fb, {
            kind: "field",
            name: "outputTextureWidth",
            static: !1,
            private: !1,
            access: {
              has: bb => "outputTextureWidth" in bb,
              get: bb => bb.outputTextureWidth,
              set: (bb, ub) => {
                bb.outputTextureWidth = ub
              }
            },
            metadata: Gb
          }, ku, Tu), (0, Bb.h)(null, null, fb, {
            kind: "field",
            name: "outputTextureHeight",
            static: !1,
            private: !1,
            access: {
              has: bb => "outputTextureHeight" in bb,
              get: bb => bb.outputTextureHeight,
              set: (bb, ub) => {
                bb.outputTextureHeight = ub
              }
            },
            metadata: Gb
          }, cu, Qu), Gb && Object.defineProperty(bb, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Gb
          })
        })(), bb.TONEMAPPING_STANDARD = 0, bb.TONEMAPPING_ACES = 1, bb.TONEMAPPING_KHR_PBR_NEUTRAL = 2, bb.PrepareUniforms = Db.d, bb.PrepareSamplers = Db.b, bb._VIGNETTEMODE_MULTIPLY = 0, bb._VIGNETTEMODE_OPAQUE = 1, bb
      })(),
      gb = !1;

    function ib(bb) {
      const ub = Cb.c.Parse((() => new zb), bb, null, null);
      return void 0 !== bb.vignetteCentreX && (ub.vignetteCenterX = bb.vignetteCentreX), void 0 !== bb.vignetteCentreY && (ub.vignetteCenterY = bb.vignetteCentreY), ub
    }

    function vb() {
      gb || (gb = !0, zb.Parse = ib, Cb.c._ImageProcessingConfigurationParser = ib, (0, xb.f)("BABYLON.ImageProcessingConfiguration", zb))
    }
  },
  39598: (bb, ub, hb) => {
    hb.d(ub, {
      c: () => Gb
    });
    var Bb = hb(38302),
      Ob = hb(39559);
    class Gb {
      constructor(bb, ub) {
        let hb = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Bb = arguments.length > 3 ? arguments[3] : void 0,
          Ob = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          Gb = arguments.length > 5 ? arguments[5] : void 0;
        this._uniformNames = [], this._valueCache = {}, this._engine = bb, this._noUBO = !bb.supportsUniformBuffers || Ob, this._dynamic = hb, this._name = Bb ?? "no-name", this._data = ub || [], this._uniformLocations = {}, this._uniformSizes = {}, this._uniformArraySizes = {}, this._uniformLocationPointer = 0, this._needSync = !1, this._dataGeneration = 0, this._trackUBOsInFrame = !1, (void 0 === Gb && this._engine._features.trackUbosInFrame || !0 === Gb) && (this._buffers = [], this._bufferIndex = -1, this._bufferUpdatedLastFrame = !1, this._createBufferOnWrite = !1, this._currentFrameId = 0, this._trackUBOsInFrame = !0, this._resetOwnerSlots()), this._noUBO ? (this.updateMatrix3x3 = this._updateMatrix3x3ForEffect, this.updateMatrix2x2 = this._updateMatrix2x2ForEffect, this.updateFloat = this._updateFloatForEffect, this.updateFloat2 = this._updateFloat2ForEffect, this.updateFloat3 = this._updateFloat3ForEffect, this.updateFloat4 = this._updateFloat4ForEffect, this.updateFloatArray = this._updateFloatArrayForEffect, this.updateArray = this._updateArrayForEffect, this.updateIntArray = this._updateIntArrayForEffect, this.updateUIntArray = this._updateUIntArrayForEffect, this.S_ = this._updateMatrixForEffect, this.updateMatrices = this._updateMatricesForEffect, this.updateVector3 = this._updateVector3ForEffect, this.updateVector4 = this._updateVector4ForEffect, this.updateColor3 = this._updateColor3ForEffect, this.updateColor4 = this._updateColor4ForEffect, this.updateDirectColor4 = this._updateDirectColor4ForEffect, this.updateInt = this._updateIntForEffect, this.updateInt2 = this._updateInt2ForEffect, this.updateInt3 = this._updateInt3ForEffect, this.updateInt4 = this._updateInt4ForEffect, this.updateUInt = this._updateUIntForEffect, this.updateUInt2 = this._updateUInt2ForEffect, this.updateUInt3 = this._updateUInt3ForEffect, this.updateUInt4 = this._updateUInt4ForEffect) : (this._engine._uniformBuffers.push(this), this.updateMatrix3x3 = this._updateMatrix3x3ForUniform, this.updateMatrix2x2 = this._updateMatrix2x2ForUniform, this.updateFloat = this._updateFloatForUniform, this.updateFloat2 = this._updateFloat2ForUniform, this.updateFloat3 = this._updateFloat3ForUniform, this.updateFloat4 = this._updateFloat4ForUniform, this.updateFloatArray = this._updateFloatArrayForUniform, this.updateArray = this._updateArrayForUniform, this.updateIntArray = this._updateIntArrayForUniform, this.updateUIntArray = this._updateUIntArrayForUniform, this.S_ = this._updateMatrixForUniform, this.updateMatrices = this._updateMatricesForUniform, this.updateVector3 = this._updateVector3ForUniform, this.updateVector4 = this._updateVector4ForUniform, this.updateColor3 = this._updateColor3ForUniform, this.updateColor4 = this._updateColor4ForUniform, this.updateDirectColor4 = this._updateDirectColor4ForUniform, this.updateInt = this._updateIntForUniform, this.updateInt2 = this._updateInt2ForUniform, this.updateInt3 = this._updateInt3ForUniform, this.updateInt4 = this._updateInt4ForUniform, this.updateUInt = this._updateUIntForUniform, this.updateUInt2 = this._updateUInt2ForUniform, this.updateUInt3 = this._updateUInt3ForUniform, this.updateUInt4 = this._updateUInt4ForUniform)
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
      _fillAlignment(bb) {
        let ub;
        if (ub = bb <= 2 ? bb : 4, this._uniformLocationPointer % ub !== 0) {
          const bb = this._uniformLocationPointer;
          this._uniformLocationPointer += ub - this._uniformLocationPointer % ub;
          const hb = this._uniformLocationPointer - bb;
          for (let ub = 0; ub < hb; ub++) this._data.push(0)
        }
      }
      addUniform(bb, ub) {
        let hb, Bb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (Bb > 0 && "number" === typeof ub && (this._uniformArraySizes[bb] = {
            strideSize: ub,
            arraySize: Bb
          }), void 0 === this._uniformLocations[bb] && (this._uniformNames.push(bb), !this._noUBO)) {
          if (Bb > 0) {
            if (ub instanceof Array) throw "addUniform should not be use with Array in UBO: " + bb;
            if (this._fillAlignment(4), 16 == ub) ub *= Bb;
            else {
              ub = ub * Bb + (4 - ub) * Bb
            }
            hb = [];
            for (let bb = 0; bb < ub; bb++) hb.push(0)
          } else {
            if (ub instanceof Array) hb = ub, ub = hb.length;
            else {
              hb = [];
              for (let bb = 0; bb < ub; bb++) hb.push(0)
            }
            this._fillAlignment(ub)
          }
          this._uniformSizes[bb] = ub, this._uniformLocations[bb] = this._uniformLocationPointer, this._uniformLocationPointer += ub;
          for (let bb = 0; bb < ub; bb++) this._data.push(hb[bb]);
          this._needSync = !0
        }
      }
      addMatrix(bb, ub) {
        this.addUniform(bb, Array.prototype.slice.call(ub.ZBb()))
      }
      addFloat2(bb, ub, hb) {
        const Bb = [ub, hb];
        this.addUniform(bb, Bb)
      }
      addFloat3(bb, ub, hb, Bb) {
        const Ob = [ub, hb, Bb];
        this.addUniform(bb, Ob)
      }
      addColor3(bb, ub) {
        const hb = [ub.r, ub.g, ub.b];
        this.addUniform(bb, hb)
      }
      addColor4(bb, ub, hb) {
        const Bb = [ub.r, ub.g, ub.b, hb];
        this.addUniform(bb, Bb)
      }
      addVector3(bb, ub) {
        const hb = [ub.x, ub.y, ub.z];
        this.addUniform(bb, hb)
      }
      addMatrix3x3(bb) {
        this.addUniform(bb, 12)
      }
      addMatrix2x2(bb) {
        this.addUniform(bb, 8)
      }
      create() {
        this._noUBO || this._buffer || (this._fillAlignment(4), this._bufferData = new Float32Array(this._data), this._dataGeneration++, this._rebuild(), this._needSync = !0)
      }
      _getNamesDebug() {
        const bb = [];
        let ub = 0;
        for (const hb in this._uniformLocations)
          if (bb.push(hb), 10 === ++ub) break;
        return bb.join(",")
      }
      _rebuild() {
        !this._noUBO && this._bufferData && (this._dynamic ? this._buffer = this._engine.createDynamicUniformBuffer(this._bufferData, this._name + "_UniformList:" + this._getNamesDebug()) : this._buffer = this._engine.createUniformBuffer(this._bufferData, this._name + "_UniformList:" + this._getNamesDebug()), this._trackUBOsInFrame && (this._buffers.push([this._buffer, this._engine._features.checkUbosContentBeforeUpload ? this._bufferData.slice() : void 0]), this._bufferIndex = this._buffers.length - 1, this._createBufferOnWrite = !1))
      }
      _rebuildAfterContextLost() {
        this._trackUBOsInFrame && (this._buffers = [], this._currentFrameId = 0, this._resetOwnerSlots()), this._rebuild()
      }
      _resetOwnerSlots() {
        if (this._ownerListsBySlot)
          for (const bb of this._ownerListsBySlot.values()) this._removeOwnerBacklink(bb);
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
      set name(bb) {
        this._name = bb
      }
      get currentEffect() {
        return this._currentEffect
      }
      _buffersEqual(bb, ub) {
        for (let hb = 0; hb < bb.length; ++hb)
          if (bb[hb] !== ub[hb]) return !1;
        return !0
      }
      _copyBuffer(bb, ub) {
        for (let hb = 0; hb < bb.length; ++hb) ub[hb] = bb[hb]
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
      _updateOwnerKeyed(bb) {
        if (this._noUBO || !this._trackUBOsInFrame) return void this.update();
        this._buffer || this.create(), this._checkNewFrame();
        let ub = this._slotByOwner.get(bb);
        if (void 0 === ub && (ub = 0 === this._ownerCount && 1 === this._buffers.length && 0 === this._freeSlots.length ? 0 : this._takeFreeSlot(!0), this._slotByOwner.set(bb, ub), this._ownerCount++, bb._uniformBuffersWithOwnedSlot || (bb._uniformBuffersWithOwnedSlot = []), bb._uniformBuffersWithOwnedSlot.push(this), this._ownerListsBySlot.set(ub, bb._uniformBuffersWithOwnedSlot)), this._slotGeneration[ub] === this._dataGeneration) return this._bufferIndex = ub, this._buffer = this._buffers[ub][0], this.bindUniformBuffer(), this._slotFrameId[ub] = this._currentFrameId, this._needSync = !1, void(this._createBufferOnWrite = !1);
        const hb = this._buffers[ub][1];
        this._slotFrameId[ub] === this._currentFrameId && hb && !this._buffersEqual(this._bufferData, hb) && (ub = this._takeFreeSlot(!1)), this._bufferIndex = ub, this._buffer = this._buffers[ub][0], this.bindUniformBuffer();
        const Bb = this._buffers[ub][1];
        Bb && this._buffersEqual(this._bufferData, Bb) || (Bb && this._copyBuffer(this._bufferData, Bb), this._bufferUpdatedLastFrame = !0, this._engine.updateUniformBuffer(this._buffer, this._bufferData)), this._slotFrameId[ub] = this._currentFrameId, this._slotGeneration[ub] = this._dataGeneration, this._needSync = !1, this._createBufferOnWrite = !1
      }
      _takeFreeSlot(bb) {
        for (let hb = 0; hb < this._freeSlots.length; ++hb) {
          const ub = this._freeSlots[hb];
          if (this._slotFrameId[ub] !== this._currentFrameId) return bb && (this._freeSlots[hb] = this._freeSlots[this._freeSlots.length - 1], this._freeSlots.pop()), ub
        }
        this._rebuild();
        const ub = this._buffers.length - 1;
        return bb || this._freeSlots.push(ub), ub
      }
      _releaseOwnerSlot(bb) {
        const ub = this._slotByOwner?.get(bb);
        if (void 0 === ub) return;
        this._slotByOwner.delete(bb);
        const hb = this._ownerListsBySlot.get(ub);
        hb && (this._removeOwnerBacklink(hb), this._ownerListsBySlot.delete(ub)), this._ownerCount--, this._freeSlots.push(ub)
      }
      _removeOwnerBacklink(bb) {
        const ub = bb.indexOf(this); - 1 !== ub && (bb[ub] = bb[bb.length - 1], bb.pop())
      }
      _createNewBuffer() {
        this._bufferIndex + 1 < this._buffers.length ? (this._bufferIndex++, this._buffer = this._buffers[this._bufferIndex][0], this._createBufferOnWrite = !1, this._needSync = !0) : this._rebuild()
      }
      _checkNewFrame() {
        this._trackUBOsInFrame && this._currentFrameId !== this._engine.frameId && (this._currentFrameId = this._engine.frameId, this._createBufferOnWrite = !1, this._buffers && this._buffers.length > 0 ? (1 === this._buffers.length ? this._needSync = !this._bufferUpdatedLastFrame : this._needSync = 0 !== this._bufferIndex, this._bufferIndex = 0, this._buffer = this._buffers[this._bufferIndex][0]) : this._bufferIndex = -1)
      }
      updateUniform(bb, ub, hb) {
        this._checkNewFrame();
        let Ob = this._uniformLocations[bb];
        if (void 0 === Ob) {
          if (this._buffer) return void Bb.b.Error("Cannot add an uniform after UBO has been created. uniformName=" + bb);
          this.addUniform(bb, hb), Ob = this._uniformLocations[bb]
        }
        if (this._buffer || this.create(), this._dynamic) {
          for (let bb = 0; bb < hb; bb++) this._bufferData[Ob + bb] = ub[bb];
          this._dataGeneration++
        } else {
          let bb = !1;
          for (let Bb = 0; Bb < hb; Bb++)(16 === hb && !this._engine._features.uniformBufferHardCheckMatrix || this._bufferData[Ob + Bb] !== Math.fround(ub[Bb])) && (bb = !0, this._createBufferOnWrite && this._createNewBuffer(), this._bufferData[Ob + Bb] = ub[Bb]);
          this._needSync = this._needSync || bb, bb && this._dataGeneration++
        }
      }
      updateUniformArray(bb, ub, hb) {
        this._checkNewFrame();
        const Gb = this._uniformLocations[bb];
        if (void 0 === Gb) return void Bb.b.Error("Cannot add an uniform Array dynamically. Please, add it using addUniform and make sure that uniform buffers are supported by the current engine.");
        this._buffer || this.create();
        const Ub = this._uniformArraySizes[bb];
        if (this._dynamic) {
          for (let bb = 0; bb < hb; bb++) this._bufferData[Gb + bb] = ub[bb];
          this._dataGeneration++
        } else {
          let bb = !1,
            Bb = 0,
            Lb = 0;
          for (let Yb = 0; Yb < hb; Yb++)
            if (this._bufferData[Gb + 4 * Lb + Bb] !== Ob.k.FloatRound(ub[Yb]) && (bb = !0, this._createBufferOnWrite && this._createNewBuffer(), this._bufferData[Gb + 4 * Lb + Bb] = ub[Yb]), Bb++, Bb === Ub.strideSize) {
              for (; Bb < 4; Bb++) this._bufferData[Gb + 4 * Lb + Bb] = 0;
              Bb = 0, Lb++
            } this._needSync = this._needSync || bb, bb && this._dataGeneration++
        }
      }
      _cacheMatrix(bb, ub) {
        this._checkNewFrame();
        const hb = this._valueCache[bb],
          Bb = ub.updateFlag;
        return (void 0 === hb || hb !== Bb) && (this._valueCache[bb] = Bb, !0)
      }
      _updateMatrix3x3ForUniform(bb, ub) {
        for (let hb = 0; hb < 3; hb++) Gb._TempBuffer[4 * hb] = ub[3 * hb], Gb._TempBuffer[4 * hb + 1] = ub[3 * hb + 1], Gb._TempBuffer[4 * hb + 2] = ub[3 * hb + 2], Gb._TempBuffer[4 * hb + 3] = 0;
        this.updateUniform(bb, Gb._TempBuffer, 12)
      }
      _updateMatrix3x3ForEffect(bb, ub) {
        this._currentEffect.setMatrix3x3(bb, ub)
      }
      _updateMatrix2x2ForEffect(bb, ub) {
        this._currentEffect.setMatrix2x2(bb, ub)
      }
      _updateMatrix2x2ForUniform(bb, ub) {
        for (let hb = 0; hb < 2; hb++) Gb._TempBuffer[4 * hb] = ub[2 * hb], Gb._TempBuffer[4 * hb + 1] = ub[2 * hb + 1], Gb._TempBuffer[4 * hb + 2] = 0, Gb._TempBuffer[4 * hb + 3] = 0;
        this.updateUniform(bb, Gb._TempBuffer, 8)
      }
      _updateFloatForEffect(bb, ub) {
        let hb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        this._currentEffect.setFloat(bb + hb, ub)
      }
      _updateFloatForUniform(bb, ub) {
        Gb._TempBuffer[0] = ub, this.updateUniform(bb, Gb._TempBuffer, 1)
      }
      _updateFloat2ForEffect(bb, ub, hb) {
        let Bb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
        this._currentEffect.setFloat2(bb + Bb, ub, hb)
      }
      _updateFloat2ForUniform(bb, ub, hb) {
        Gb._TempBuffer[0] = ub, Gb._TempBuffer[1] = hb, this.updateUniform(bb, Gb._TempBuffer, 2)
      }
      _updateFloat3ForEffect(bb, ub, hb, Bb) {
        let Ob = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "";
        this._currentEffect.setFloat3(bb + Ob, ub, hb, Bb)
      }
      _updateFloat3ForUniform(bb, ub, hb, Bb) {
        Gb._TempBuffer[0] = ub, Gb._TempBuffer[1] = hb, Gb._TempBuffer[2] = Bb, this.updateUniform(bb, Gb._TempBuffer, 3)
      }
      _updateFloat4ForEffect(bb, ub, hb, Bb, Ob) {
        let Gb = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "";
        this._currentEffect.setFloat4(bb + Gb, ub, hb, Bb, Ob)
      }
      _updateFloat4ForUniform(bb, ub, hb, Bb, Ob) {
        Gb._TempBuffer[0] = ub, Gb._TempBuffer[1] = hb, Gb._TempBuffer[2] = Bb, Gb._TempBuffer[3] = Ob, this.updateUniform(bb, Gb._TempBuffer, 4)
      }
      _updateFloatArrayForEffect(bb, ub) {
        let hb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        switch (this._uniformArraySizes[bb]?.strideSize) {
          case 2:
            this._currentEffect.setFloatArray2(bb + hb, ub);
            break;
          case 3:
            this._currentEffect.setFloatArray3(bb + hb, ub);
            break;
          case 4:
            this._currentEffect.setFloatArray4(bb + hb, ub);
            break;
          default:
            this._currentEffect.setFloatArray(bb + hb, ub)
        }
      }
      _updateFloatArrayForUniform(bb, ub) {
        this.updateUniformArray(bb, ub, ub.length)
      }
      _updateArrayForEffect(bb, ub) {
        this._currentEffect.setArray(bb, ub)
      }
      _updateArrayForUniform(bb, ub) {
        this.updateUniformArray(bb, ub, ub.length)
      }
      _updateIntArrayForEffect(bb, ub) {
        this._currentEffect.setIntArray(bb, ub)
      }
      _updateIntArrayForUniform(bb, ub) {
        Gb._TempBufferInt32View.set(ub), this.updateUniformArray(bb, Gb._TempBuffer, ub.length)
      }
      _updateUIntArrayForEffect(bb, ub) {
        this._currentEffect.setUIntArray(bb, ub)
      }
      _updateUIntArrayForUniform(bb, ub) {
        Gb._TempBufferUInt32View.set(ub), this.updateUniformArray(bb, Gb._TempBuffer, ub.length)
      }
      _updateMatrixForEffect(bb, ub) {
        this._currentEffect.setMatrix(bb, ub)
      }
      _updateMatrixForUniform(bb, ub) {
        this._cacheMatrix(bb, ub) && this.updateUniform(bb, ub.ZBb(), 16)
      }
      _updateMatricesForEffect(bb, ub) {
        this._currentEffect.setMatrices(bb, ub)
      }
      _updateMatricesForUniform(bb, ub) {
        this.updateUniform(bb, ub, ub.length)
      }
      _updateVector3ForEffect(bb, ub) {
        this._currentEffect.setVector3(bb, ub)
      }
      _updateVector3ForUniform(bb, ub) {
        Gb._TempBuffer[0] = ub.x, Gb._TempBuffer[1] = ub.y, Gb._TempBuffer[2] = ub.z, this.updateUniform(bb, Gb._TempBuffer, 3)
      }
      _updateVector4ForEffect(bb, ub) {
        this._currentEffect.setVector4(bb, ub)
      }
      _updateVector4ForUniform(bb, ub) {
        Gb._TempBuffer[0] = ub.x, Gb._TempBuffer[1] = ub.y, Gb._TempBuffer[2] = ub.z, Gb._TempBuffer[3] = ub.w, this.updateUniform(bb, Gb._TempBuffer, 4)
      }
      _updateColor3ForEffect(bb, ub) {
        let hb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        this._currentEffect.setColor3(bb + hb, ub)
      }
      _updateColor3ForUniform(bb, ub) {
        Gb._TempBuffer[0] = ub.r, Gb._TempBuffer[1] = ub.g, Gb._TempBuffer[2] = ub.b, this.updateUniform(bb, Gb._TempBuffer, 3)
      }
      _updateColor4ForEffect(bb, ub, hb) {
        let Bb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
        this._currentEffect.setColor4(bb + Bb, ub, hb)
      }
      _updateDirectColor4ForEffect(bb, ub) {
        let hb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        this._currentEffect.setDirectColor4(bb + hb, ub)
      }
      _updateColor4ForUniform(bb, ub, hb) {
        Gb._TempBuffer[0] = ub.r, Gb._TempBuffer[1] = ub.g, Gb._TempBuffer[2] = ub.b, Gb._TempBuffer[3] = hb, this.updateUniform(bb, Gb._TempBuffer, 4)
      }
      _updateDirectColor4ForUniform(bb, ub) {
        Gb._TempBuffer[0] = ub.r, Gb._TempBuffer[1] = ub.g, Gb._TempBuffer[2] = ub.b, Gb._TempBuffer[3] = ub.a, this.updateUniform(bb, Gb._TempBuffer, 4)
      }
      _updateIntForEffect(bb, ub) {
        let hb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        this._currentEffect.setInt(bb + hb, ub)
      }
      _updateIntForUniform(bb, ub) {
        Gb._TempBufferInt32View[0] = ub, this.updateUniform(bb, Gb._TempBuffer, 1)
      }
      _updateInt2ForEffect(bb, ub, hb) {
        let Bb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
        this._currentEffect.setInt2(bb + Bb, ub, hb)
      }
      _updateInt2ForUniform(bb, ub, hb) {
        Gb._TempBufferInt32View[0] = ub, Gb._TempBufferInt32View[1] = hb, this.updateUniform(bb, Gb._TempBuffer, 2)
      }
      _updateInt3ForEffect(bb, ub, hb, Bb) {
        let Ob = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "";
        this._currentEffect.setInt3(bb + Ob, ub, hb, Bb)
      }
      _updateInt3ForUniform(bb, ub, hb, Bb) {
        Gb._TempBufferInt32View[0] = ub, Gb._TempBufferInt32View[1] = hb, Gb._TempBufferInt32View[2] = Bb, this.updateUniform(bb, Gb._TempBuffer, 3)
      }
      _updateInt4ForEffect(bb, ub, hb, Bb, Ob) {
        let Gb = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "";
        this._currentEffect.setInt4(bb + Gb, ub, hb, Bb, Ob)
      }
      _updateInt4ForUniform(bb, ub, hb, Bb, Ob) {
        Gb._TempBufferInt32View[0] = ub, Gb._TempBufferInt32View[1] = hb, Gb._TempBufferInt32View[2] = Bb, Gb._TempBufferInt32View[3] = Ob, this.updateUniform(bb, Gb._TempBuffer, 4)
      }
      _updateUIntForEffect(bb, ub) {
        let hb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        this._currentEffect.setUInt(bb + hb, ub)
      }
      _updateUIntForUniform(bb, ub) {
        Gb._TempBufferUInt32View[0] = ub, this.updateUniform(bb, Gb._TempBuffer, 1)
      }
      _updateUInt2ForEffect(bb, ub, hb) {
        let Bb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
        this._currentEffect.setUInt2(bb + Bb, ub, hb)
      }
      _updateUInt2ForUniform(bb, ub, hb) {
        Gb._TempBufferUInt32View[0] = ub, Gb._TempBufferUInt32View[1] = hb, this.updateUniform(bb, Gb._TempBuffer, 2)
      }
      _updateUInt3ForEffect(bb, ub, hb, Bb) {
        let Ob = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "";
        this._currentEffect.setUInt3(bb + Ob, ub, hb, Bb)
      }
      _updateUInt3ForUniform(bb, ub, hb, Bb) {
        Gb._TempBufferUInt32View[0] = ub, Gb._TempBufferUInt32View[1] = hb, Gb._TempBufferUInt32View[2] = Bb, this.updateUniform(bb, Gb._TempBuffer, 3)
      }
      _updateUInt4ForEffect(bb, ub, hb, Bb, Ob) {
        let Gb = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "";
        this._currentEffect.setUInt4(bb + Gb, ub, hb, Bb, Ob)
      }
      _updateUInt4ForUniform(bb, ub, hb, Bb, Ob) {
        Gb._TempBufferUInt32View[0] = ub, Gb._TempBufferUInt32View[1] = hb, Gb._TempBufferUInt32View[2] = Bb, Gb._TempBufferUInt32View[3] = Ob, this.updateUniform(bb, Gb._TempBuffer, 4)
      }
      setTexture(bb, ub) {
        this._currentEffect.setTexture(bb, ub)
      }
      setTextureArray(bb, ub) {
        this._currentEffect.setTextureArray(bb, ub)
      }
      bindTexture(bb, ub) {
        this._currentEffect._bindTexture(bb, ub)
      }
      updateUniformDirectly(bb, ub) {
        this.updateUniform(bb, ub, ub.length), this.update()
      }
      bindToEffect(bb, ub) {
        this._currentEffect = bb, this._currentEffectName = ub
      }
      bindUniformBuffer() {
        !this._noUBO && this._buffer && this._currentEffect && this._currentEffect.bindUniformBuffer(this._buffer, this._currentEffectName)
      }
      unbindEffect() {
        this._currentEffect = void 0, this._currentEffectName = void 0
      }
      setDataBuffer(bb) {
        if (!this._buffers) return this._buffer === bb;
        for (let ub = 0; ub < this._buffers.length; ++ub) {
          if (this._buffers[ub][0] === bb) return this._bufferIndex = ub, this._buffer = bb, this._createBufferOnWrite = !1, this._currentEffect = void 0, this._buffers.length > 1 && this._buffers[ub][1] && (this._bufferData.set(this._buffers[ub][1]), this._dataGeneration++), this._valueCache = {}, this._currentFrameId = this._engine.frameId, !0
        }
        return !1
      }
      has(bb) {
        return void 0 !== this._uniformLocations[bb]
      }
      dispose() {
        if (this._noUBO) return;
        const bb = this._engine._uniformBuffers,
          ub = bb.indexOf(this);
        if (-1 !== ub && (bb[ub] = bb[bb.length - 1], bb.pop()), this._trackUBOsInFrame && this._buffers) {
          this._resetOwnerSlots();
          for (let bb = 0; bb < this._buffers.length; ++bb) {
            const ub = this._buffers[bb][0];
            this._engine._releaseBuffer(ub)
          }
          this._buffers = [], this._buffer = null, this._bufferIndex = -1
        } else this._buffer && this._engine._releaseBuffer(this._buffer) && (this._buffer = null)
      }
    }
    Gb._MAX_UNIFORM_SIZE = 256, Gb._TempBuffer = new Float32Array(Gb._MAX_UNIFORM_SIZE), Gb._TempBufferInt32View = new Int32Array(Gb._TempBuffer.buffer), Gb._TempBufferUInt32View = new Uint32Array(Gb._TempBuffer.buffer)
  },
  39374: (bb, ub, hb) => {
    hb.d(ub, {
      e: () => Ob
    });
    var Bb = hb(39382);
    class Ob extends Bb.e {
      constructor(bb) {
        super(), this._buffer = bb
      }
      get underlyingResource() {
        return this._buffer
      }
    }
  },
  39471: (bb, ub, hb) => {
    hb.d(ub, {
      b: () => Yb,
      c: () => Sb
    });
    const Bb = "__bjs_serializable__",
      Ob = new WeakMap;

    function Gb(bb, ub) {
      return Object.prototype.hasOwnProperty.call(bb, ub)
    }
    const Ub = function() {
      let bb = Symbol.metadata;
      return bb || (bb = Symbol("Symbol.metadata"), Object.defineProperty(Symbol, "metadata", {
        configurable: !0,
        writable: !0,
        value: bb
      })), bb
    }();

    function Lb(bb) {
      return "function" === typeof bb ? bb : bb?.constructor
    }

    function Yb(bb) {
      if (!bb) throw new Error(`Decorator metadata is unavailable; the Symbol.metadata (${String(Ub)}) polyfill must run before decorated classes are evaluated.`);
      return Gb(bb, Bb) || (bb[Bb] = {}), bb[Bb]
    }

    function Sb(bb) {
      const ub = Lb(bb),
        hb = ub ? ub[Ub] : void 0;
      if (!hb) return {};
      const Yb = Ob.get(hb);
      if (Yb) return Yb;
      const Sb = {},
        ab = [];
      let Hb = hb;
      for (; Hb;) ab.push(Hb), Hb = Object.getPrototypeOf(Hb);
      for (const Ob of ab)
        if (Gb(Ob, Bb)) {
          const bb = Ob[Bb];
          for (const ub in bb) Sb[ub] = bb[ub]
        } return Ob.set(hb, Sb), Sb
    }
  },
  39467: (bb, ub, hb) => {
    hb.d(ub, {
      A: () => pb,
      D: () => Lb,
      F: () => ab,
      H: () => Hb,
      K: () => Ub,
      e: () => Kb,
      i: () => Gb,
      k: () => lb,
      m: () => Zb,
      p: () => Yb,
      t: () => Xb,
      w: () => Sb,
      x: () => ob,
      z: () => wb
    });
    var Bb = hb(39471);

    function Ob(bb, ub) {
      return (hb, Ob) => {
        if (!Ob.metadata) return;
        const Gb = String(Ob.name),
          Ub = (0, Bb.b)(Ob.metadata);
        Ub[Gb] || (Ub[Gb] = {
          type: bb,
          sourceName: ub
        })
      }
    }

    function Gb(bb) {
      return function(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return (hb, Bb) => {
          const Ob = ub || "_" + String(Bb.name);
          return {
            init(bb) {
              return void 0 === bb && Ob in this || (this[Ob] = bb), bb
            },
            get() {
              return this[Ob]
            },
            set(ub) {
              "function" === typeof this[Ob]?.equals && this[Ob].equals(ub) || this[Ob] !== ub && (this[Ob] = ub, this[bb]())
            }
          }
        }
      }(bb, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null)
    }

    function Ub(bb) {
      return Ob(0, bb)
    }

    function Lb(bb) {
      return Ob(1, bb)
    }

    function Yb(bb) {
      return Ob(2, bb)
    }

    function Sb(bb) {
      return Ob(3, bb)
    }

    function ab(bb) {
      return Ob(4, bb)
    }

    function Hb(bb) {
      return Ob(5, bb)
    }

    function wb(bb) {
      return Ob(6, bb)
    }

    function Zb(bb) {
      return Ob(7, bb)
    }

    function Xb(bb) {
      return Ob(8, bb)
    }

    function pb(bb) {
      return Ob(10, bb)
    }

    function ob(bb) {
      return Ob(12, bb)
    }

    function Ab(bb, ub, hb) {
      const Bb = String(ub.name);
      let Ob = null;
      const Gb = function() {
        if (null === Ob) {
          Ob = bb, "undefined" !== typeof _native && _native[Bb] && (Ob = hb(_native[Bb], bb));
          const Ub = this && (ub.static ? this : Object.getPrototypeOf(this));
          Ub?.[Bb] === Gb && (Ub[Bb] = Ob)
        }
        for (var Ub = arguments.length, Lb = new Array(Ub), Yb = 0; Yb < Ub; Yb++) Lb[Yb] = arguments[Yb];
        return Ob.apply(this, Lb)
      };
      return Gb
    }

    function lb(bb, ub) {
      return Ab(bb, ub, (bb => bb))
    }

    function Kb(bb) {
      let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      return (hb, Bb) => {
        const Ob = ub || "_" + String(Bb.name);
        return {
          get() {
            return this[Ob]?.value
          },
          set(ub) {
            "function" === typeof this[Ob]?.value?.equals && this[Ob].value.equals(ub) || this[Ob].value !== ub && (this[Ob].value = ub, this[bb]())
          }
        }
      }
    }
    lb.filter = function(bb) {
      return (ub, hb) => Ab(ub, hb, ((ub, hb) => function() {
        for (var Bb = arguments.length, Ob = new Array(Bb), Gb = 0; Gb < Bb; Gb++) Ob[Gb] = arguments[Gb];
        return bb(...Ob) ? ub(...Ob) : hb.apply(this, Ob)
      }))
    }
  },
  39488: (bb, ub, hb) => {
    hb.d(ub, {
      c: () => Sb
    });
    var Bb = hb(39333),
      Ob = hb(39492),
      Gb = hb(36893),
      Ub = hb(36727),
      Lb = hb(39471);
    const Yb = function(bb, ub, hb) {
      let Bb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const Gb = bb();
      Ob.c && Ob.c.HasTags(ub) && Ob.c.AddTagsTo(Gb, Ob.c.GetTags(ub, !0));
      const Ub = (0, Lb.c)(Gb),
        Yb = {};
      for (const Ob in Ub) {
        const bb = Ub[Ob],
          Lb = ub[Ob],
          ab = bb.type;
        if (void 0 !== Lb && null !== Lb && ("uniqueId" !== Ob || Sb.AllowLoadingUniqueId)) switch (ab) {
          case 0:
          case 6:
          case 9:
          case 11:
            "function" === typeof Lb.slice ? Gb[Ob] = Lb.slice() : Gb[Ob] = Lb;
            break;
          case 1:
            Bb.cloneTexturesOnlyOnce && Yb[Lb.uniqueId] ? Gb[Ob] = Yb[Lb.uniqueId] : (Gb[Ob] = hb || Lb.isRenderTarget ? Lb : Lb.clone(), Yb[Lb.uniqueId] = Gb[Ob]);
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
            Gb[Ob] = hb ? Lb : Lb.clone()
        }
      }
      return Gb
    };
    class Sb {
      static AppendSerializedAnimations(bb, ub) {
        if (bb.animations) {
          ub.animations = [];
          for (let hb = 0; hb < bb.animations.length; hb++) {
            const Bb = bb.animations[hb];
            ub.animations.push(Bb.serialize())
          }
        }
      }
      static Serialize(bb, ub) {
        ub || (ub = {}), Ob.c && (ub.tags = Ob.c.GetTags(bb));
        const hb = (0, Lb.c)(bb);
        for (const Bb in hb) {
          const Ob = hb[Bb],
            Gb = Ob.sourceName || Bb,
            Ub = Ob.type,
            Lb = bb[Bb];
          if (void 0 !== Lb && null !== Lb && ("uniqueId" !== Bb || Sb.AllowLoadingUniqueId)) switch (Ub) {
            case 0:
              Array.isArray(Lb) ? ub[Gb] = Lb.slice() : ub[Gb] = Lb;
              break;
            case 1:
            case 3:
            case 7:
            case 9:
              ub[Gb] = Lb.serialize();
              break;
            case 2:
            case 4:
            case 5:
            case 8:
            case 10:
            case 12:
            case 13:
              ub[Gb] = Lb.ZBb();
              break;
            case 6:
            case 11:
              ub[Gb] = Lb.id
          }
        }
        return ub
      }
      static ParseProperties(bb, ub, hb, Bb) {
        Bb || (Bb = "");
        const Ob = (0, Lb.c)(ub);
        for (const Lb in Ob) {
          const Yb = Ob[Lb],
            ab = bb[Yb.sourceName || Lb],
            Hb = Yb.type;
          if (void 0 !== ab && null !== ab && ("uniqueId" !== Lb || Sb.AllowLoadingUniqueId)) {
            const bb = ub;
            switch (Hb) {
              case 0:
                bb[Lb] = ab;
                break;
              case 1:
                hb && (bb[Lb] = Sb._TextureParser(ab, hb, Bb));
                break;
              case 2:
                bb[Lb] = Gb.b.FromArray(ab);
                break;
              case 3:
                bb[Lb] = Sb._FresnelParametersParser(ab);
                break;
              case 4:
                bb[Lb] = Ub.m.FromArray(ab);
                break;
              case 5:
                bb[Lb] = Ub.q.FromArray(ab);
                break;
              case 6:
                hb && (bb[Lb] = hb.getLastMeshById(ab));
                break;
              case 7:
                bb[Lb] = Sb._ColorCurvesParser(ab);
                break;
              case 8:
                bb[Lb] = Gb.c.FromArray(ab);
                break;
              case 9:
                bb[Lb] = Sb._ImageProcessingConfigurationParser(ab);
                break;
              case 10:
                bb[Lb] = Ub.f.FromArray(ab);
                break;
              case 11:
                hb && (bb[Lb] = hb.getCameraById(ab));
                break;
              case 12:
                bb[Lb] = Ub.d.FromArray(ab);
                break;
              case 13:
                bb[Lb] = Ub.r.FromArray(ab)
            }
          }
        }
      }
      static Parse(bb, ub, hb) {
        let Bb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const Gb = bb();
        return Ob.c && Ob.c.AddTagsTo(Gb, ub.tags), Sb.ParseProperties(ub, Gb, hb, Bb), Gb
      }
      static Clone(bb, ub) {
        return Yb(bb, ub, !1, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {})
      }
      static Instanciate(bb, ub) {
        return Yb(bb, ub, !0)
      }
    }
    Sb.AllowLoadingUniqueId = !1, Sb._ImageProcessingConfigurationParser = bb => {
      throw (0, Bb.m)("ImageProcessingConfiguration")
    }, Sb._FresnelParametersParser = bb => {
      throw (0, Bb.m)("FresnelParameters")
    }, Sb._ColorCurvesParser = bb => {
      throw (0, Bb.m)("ColorCurves")
    }, Sb._TextureParser = (bb, ub, hb) => {
      throw (0, Bb.m)("Texture")
    }
  },
  39411: (bb, ub, hb) => {
    hb.d(ub, {
      b: () => Ob
    });
    var Bb = hb(39352);
    class Ob {
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
        this._totalValueCount++, this._current = 0, this._hasCurrentValue = Ob.Enabled, this._lastSecValueCount++
      }
      addCount(bb, ub) {
        Ob.Enabled && (this._current += bb, this._hasCurrentValue = !0, ub && this._fetchResult())
      }
      beginMonitoring() {
        Ob.Enabled && (this._startMonitoringTime = Bb.d.Now)
      }
      endMonitoring() {
        let bb = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        if (!Ob.Enabled) return;
        bb && this.fetchNewFrame();
        const ub = Bb.d.Now;
        this._current = ub - this._startMonitoringTime, this._hasCurrentValue = !0, bb && this._fetchResult()
      }
      jW() {
        this._fetchResult()
      }
      _fetchResult() {
        if (!this._hasCurrentValue) return;
        this._totalAccumulated += this._current, this._lastSecAccumulated += this._current, this._hasResult ? (this._min = Math.min(this._min, this._current), this._max = Math.max(this._max, this._current)) : (this._min = this._current, this._max = this._current, this._hasResult = !0), this._average = this._totalAccumulated / this._totalValueCount;
        const bb = Bb.d.Now;
        bb - this._lastSecTime > 1e3 && (this._lastSecAverage = this._lastSecAccumulated / this._lastSecValueCount, this._lastSecTime = bb, this._lastSecAccumulated = 0, this._lastSecValueCount = 0)
      }
    }
    Ob.Enabled = !0
  },
  39573: (bb, ub, hb) => {
    hb.d(ub, {
      e: () => Ob,
      h: () => Bb
    });
    class Bb {
      constructor(bb) {
        this.length = 0, this.data = new Array(bb), this._id = Bb._GlobalId++
      }
      push(bb) {
        this.data[this.length++] = bb, this.length > this.data.length && (this.data.length *= 2)
      }
      forEach(bb) {
        for (let ub = 0; ub < this.length; ub++) bb(this.data[ub])
      }
      sort(bb) {
        this.data.sort(bb)
      }
      reset() {
        this.length = 0
      }
      dispose() {
        this.reset(), this.data && (this.data.length = 0)
      }
      concat(bb) {
        if (0 !== bb.length) {
          this.length + bb.length > this.data.length && (this.data.length = 2 * (this.length + bb.length));
          for (let ub = 0; ub < bb.length; ub++) this.data[this.length++] = (bb.data || bb)[ub]
        }
      }
      indexOf(bb) {
        const ub = this.data.indexOf(bb);
        return ub >= this.length ? -1 : ub
      }
      contains(bb) {
        return -1 !== this.indexOf(bb)
      }
    }
    Bb._GlobalId = 0;
    class Ob extends Bb {
      constructor() {
        super(...arguments), this._duplicateId = 0
      }
      push(bb) {
        super.push(bb), bb.__smartArrayFlags || (bb.__smartArrayFlags = {}), bb.__smartArrayFlags[this._id] = this._duplicateId
      }
      pushNoDuplicate(bb) {
        return (!bb.__smartArrayFlags || bb.__smartArrayFlags[this._id] !== this._duplicateId) && (this.push(bb), !0)
      }
      reset() {
        super.reset(), this._duplicateId++
      }
      concatWithNoDuplicate(bb) {
        if (0 !== bb.length) {
          this.length + bb.length > this.data.length && (this.data.length = 2 * (this.length + bb.length));
          for (let ub = 0; ub < bb.length; ub++) {
            const hb = (bb.data || bb)[ub];
            this.pushNoDuplicate(hb)
          }
        }
      }
    }
  },
  39492: (bb, ub, hb) => {
    hb.d(ub, {
      c: () => Ob
    });
    class Bb {
      static Eval(bb, ub) {
        return "true" === (bb = bb.match(/\([^()]*\)/g) ? bb.replace(/\([^()]*\)/g, (bb => (bb = bb.slice(1, bb.length - 1), Bb._HandleParenthesisContent(bb, ub)))) : Bb._HandleParenthesisContent(bb, ub)) || "false" !== bb && Bb.Eval(bb, ub)
      }
      static _HandleParenthesisContent(bb, ub) {
        let hb;
        ub = ub || (bb => "true" === bb);
        const Ob = bb.split("||");
        for (const Gb in Ob)
          if (Object.prototype.hasOwnProperty.call(Ob, Gb)) {
            let bb = Bb._SimplifyNegation(Ob[Gb].trim());
            const Ub = bb.split("&&");
            if (Ub.length > 1)
              for (let Ob = 0; Ob < Ub.length; ++Ob) {
                const Gb = Bb._SimplifyNegation(Ub[Ob].trim());
                if (hb = "true" !== Gb && "false" !== Gb ? "!" === Gb[0] ? !ub(Gb.substring(1)) : ub(Gb) : "true" === Gb, !hb) {
                  bb = "false";
                  break
                }
              }
            if (hb || "true" === bb) {
              hb = !0;
              break
            }
            hb = "true" !== bb && "false" !== bb ? "!" === bb[0] ? !ub(bb.substring(1)) : ub(bb) : "true" === bb
          } return hb ? "true" : "false"
      }
      static _SimplifyNegation(bb) {
        return "!true" === (bb = (bb = bb.replace(/^[\s!]+/, (bb => (bb = bb.replace(/[\s]/g, (() => ""))).length % 2 ? "!" : ""))).trim()) ? bb = "false" : "!false" === bb && (bb = "true"), bb
      }
    }
    class Ob {
      static EnableFor(bb) {
        bb._tags = bb._tags || {}, bb.hasTags = () => Ob.HasTags(bb), bb.addTags = ub => Ob.AddTagsTo(bb, ub), bb.removeTags = ub => Ob.RemoveTagsFrom(bb, ub), bb.matchesTagsQuery = ub => Ob.MatchesQuery(bb, ub)
      }
      static DisableFor(bb) {
        delete bb._tags, delete bb.hasTags, delete bb.addTags, delete bb.removeTags, delete bb.matchesTagsQuery
      }
      static HasTags(bb) {
        if (!bb._tags) return !1;
        const ub = bb._tags;
        for (const hb in ub)
          if (Object.prototype.hasOwnProperty.call(ub, hb)) return !0;
        return !1
      }
      static GetTags(bb) {
        let ub = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (!bb._tags) return null;
        if (ub) {
          const ub = [];
          for (const hb in bb._tags) Object.prototype.hasOwnProperty.call(bb._tags, hb) && !0 === bb._tags[hb] && ub.push(hb);
          return ub.join(" ")
        }
        return bb._tags
      }
      static AddTagsTo(bb, ub) {
        if (!ub) return;
        if ("string" !== typeof ub) return;
        const hb = ub.split(" ");
        for (const Bb of hb) Ob._AddTagTo(bb, Bb)
      }
      static _AddTagTo(bb, ub) {
        "" !== (ub = ub.trim()) && "true" !== ub && "false" !== ub && (ub.match(/[\s]/) || ub.match(/^([!]|([|]|[&]){2})/) || (Ob.EnableFor(bb), bb._tags[ub] = !0))
      }
      static RemoveTagsFrom(bb, ub) {
        if (!Ob.HasTags(bb)) return;
        const hb = ub.split(" ");
        for (const Bb in hb) Ob._RemoveTagFrom(bb, hb[Bb])
      }
      static _RemoveTagFrom(bb, ub) {
        delete bb._tags[ub]
      }
      static MatchesQuery(bb, ub) {
        return void 0 === ub || ("" === ub ? Ob.HasTags(bb) : Bb.Eval(ub, (ub => Ob.HasTags(bb) && bb._tags[ub])))
      }
    }
  },
  39612: (bb, ub, hb) => {
    hb.d(ub, {
      c: () => Gb
    });
    var Bb = hb(39609),
      Ob = hb(36753);
    class Gb {
      constructor(bb) {
        this._vertexBuffers = {}, this._activePostProcesses = [], this.onBeforeRenderObservable = new Ob.e, this._scene = bb
      }
      _prepareBuffers() {
        if (this._vertexBuffers[Bb.i.PositionKind]) return;
        const bb = [];
        bb.push(1, 1), bb.push(-1, 1), bb.push(-1, -1), bb.push(1, -1), this._vertexBuffers[Bb.i.PositionKind] = new Bb.i(this._scene.UX(), bb, Bb.i.PositionKind, !1, !1, 2), this._buildIndexBuffer()
      }
      _buildIndexBuffer() {
        const bb = [];
        bb.push(0), bb.push(1), bb.push(2), bb.push(0), bb.push(2), bb.push(3), this._indexBuffer = this._scene.UX().createIndexBuffer(bb)
      }
      _getActivePostProcesses(bb) {
        const ub = this._activePostProcesses;
        ub.length = 0;
        for (let hb = 0; hb < bb.length; hb++) {
          const Bb = bb[hb];
          Bb && ub.push(Bb)
        }
        return ub
      }
      _rebuild() {
        const bb = this._vertexBuffers[Bb.i.PositionKind];
        bb && (bb._rebuild(), this._buildIndexBuffer())
      }
      _prepareFrame() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const hb = this._scene.activeCamera;
        return !!hb && (ub = ub || this._getActivePostProcesses(hb._postProcesses), !(!ub || 0 === ub.length || !this._scene.postProcessesEnabled) && (ub[0].activate(hb, bb, null !== ub && void 0 !== ub), !0))
      }
      directRender(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          hb = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Bb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          Ob = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
          Gb = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
          Ub = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : bb.length;
        const Lb = this._scene.UX();
        for (let Yb = 0; Yb < Ub; Yb++) {
          Yb < bb.length - 1 ? bb[Yb + 1].activate(this._scene.activeCamera || this._scene, ub?.texture) : (ub ? Lb.bindFramebuffer(ub, Bb, void 0, void 0, hb, Ob) : Gb || Lb.restoreDefaultFramebuffer(), Lb._debugInsertMarker?.(`post process ${bb[Yb].name} output`));
          const Ub = bb[Yb],
            Sb = Ub.apply();
          Sb && (Ub.onBeforeRenderObservable.notifyObservers(Sb), this._prepareBuffers(), Lb.bindBuffers(this._vertexBuffers, this._indexBuffer, Sb), Lb.drawElementsType(0, 0, 6), Ub.onAfterRenderObservable.notifyObservers(Sb))
        }
        Lb.setDepthBuffer(!0), Lb.setDepthWrite(!0)
      }
      _finalizeFrame(bb, ub, hb, Bb) {
        let Ob = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const Gb = this._scene.activeCamera;
        if (!Gb) return;
        if (this.onBeforeRenderObservable.notifyObservers(this), 0 === (Bb = Bb || this._getActivePostProcesses(Gb._postProcesses)).length || !this._scene.postProcessesEnabled) return;
        const Ub = this._scene.UX();
        for (let Lb = 0, Yb = Bb.length; Lb < Yb; Lb++) {
          const Sb = Bb[Lb];
          if (Lb < Yb - 1 ? Sb._outputTexture = Bb[Lb + 1].activate(Gb, ub?.texture) : (ub ? (Ub.bindFramebuffer(ub, hb, void 0, void 0, Ob), Sb._outputTexture = ub) : (Ub.restoreDefaultFramebuffer(), Sb._outputTexture = null), Ub._debugInsertMarker?.(`post process ${Bb[Lb].name} output`)), bb) break;
          const ab = Sb.apply();
          ab && (Sb.onBeforeRenderObservable.notifyObservers(ab), this._prepareBuffers(), Ub.bindBuffers(this._vertexBuffers, this._indexBuffer, ab), Ub.drawElementsType(0, 0, 6), Sb.onAfterRenderObservable.notifyObservers(ab))
        }
        Ub.setDepthBuffer(!0), Ub.setDepthWrite(!0), Ub.setAlphaMode(0)
      }
      dispose() {
        const bb = this._vertexBuffers[Bb.i.PositionKind];
        bb && (bb.dispose(), this._vertexBuffers[Bb.i.PositionKind] = null), this._indexBuffer && (this._scene.UX()._releaseBuffer(this._indexBuffer), this._indexBuffer = null)
      }
    }
  },
  39628: (bb, ub, hb) => {
    hb.d(ub, {
      e: () => Gb
    });
    var Bb = hb(39573),
      Ob = hb(36727);
    class Gb {
      set opaqueSortCompareFn(bb) {
        this._opaqueSortCompareFn = bb || Gb.PainterSortCompare, this._renderOpaque = this._renderOpaqueSorted
      }
      set alphaTestSortCompareFn(bb) {
        this._alphaTestSortCompareFn = bb || Gb.PainterSortCompare, this._renderAlphaTest = this._renderAlphaTestSorted
      }
      set transparentSortCompareFn(bb) {
        this._transparentSortCompareFn = bb || Gb.defaultTransparentSortCompare, this._renderTransparent = this._renderTransparentSorted
      }
      constructor(bb, ub) {
        let hb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          Ob = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          Gb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
        this.index = bb, this._opaqueSubMeshes = new Bb.h(256), this._transparentSubMeshes = new Bb.h(256), this._alphaTestSubMeshes = new Bb.h(256), this._depthOnlySubMeshes = new Bb.h(256), this._particleSystems = new Bb.h(256), this._spriteManagers = new Bb.h(256), this._empty = !0, this._edgesRenderers = new Bb.e(16), this.disableDepthPrePass = !1, this._scene = ub, this.opaqueSortCompareFn = hb, this.alphaTestSortCompareFn = Ob, this.transparentSortCompareFn = Gb
      }
      render(bb, ub, hb, Bb) {
        let Ob = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          Gb = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          Ub = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
          Lb = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7],
          Yb = arguments.length > 8 ? arguments[8] : void 0;
        if (bb) return void bb(this._opaqueSubMeshes, this._alphaTestSubMeshes, this._transparentSubMeshes, this._depthOnlySubMeshes);
        const Sb = this._scene.UX();
        Ob && 0 !== this._depthOnlySubMeshes.length && (Sb.setColorWrite(!1), this._renderAlphaTest(this._depthOnlySubMeshes), Sb.setColorWrite(!0)), Gb && 0 !== this._opaqueSubMeshes.length && this._renderOpaque(this._opaqueSubMeshes), Ub && 0 !== this._alphaTestSubMeshes.length && this._renderAlphaTest(this._alphaTestSubMeshes);
        const ab = Sb.getStencilBuffer();
        if (Sb.setStencilBuffer(!1), ub && this._renderSprites(), hb && this._renderParticles(Bb), this.onBeforeTransparentRendering && this.onBeforeTransparentRendering(), Lb && (Yb || 0 !== this._transparentSubMeshes.length || this._scene.useOrderIndependentTransparency)) {
          if (Sb.setStencilBuffer(ab), Yb) Yb(this._transparentSubMeshes, this);
          else if (this._scene.useOrderIndependentTransparency) {
            const bb = this._scene.depthPeelingRenderer.render(this._transparentSubMeshes);
            bb.length && this._renderTransparent(bb)
          } else this._renderTransparent(this._transparentSubMeshes);
          Sb.setAlphaMode(0)
        }
        if (Sb.setStencilBuffer(!1), Gb && this._edgesRenderers.length) {
          for (let bb = 0; bb < this._edgesRenderers.length; bb++) this._edgesRenderers.data[bb].render();
          Sb.setAlphaMode(0)
        }
        Sb.setStencilBuffer(ab)
      }
      _renderOpaqueSorted(bb) {
        Gb._RenderSorted(bb, this._opaqueSortCompareFn, this._scene.activeCamera, !1, this.disableDepthPrePass)
      }
      _renderAlphaTestSorted(bb) {
        Gb._RenderSorted(bb, this._alphaTestSortCompareFn, this._scene.activeCamera, !1, this.disableDepthPrePass)
      }
      _renderTransparentSorted(bb) {
        Gb._RenderSorted(bb, this._transparentSortCompareFn, this._scene.activeCamera, !0, this.disableDepthPrePass)
      }
      static _RenderSorted(bb, ub, hb, Bb, Ub) {
        let Lb, Yb = 0;
        const Sb = hb ? hb.globalPosition : Gb._ZeroVector;
        if (Bb && ub !== Gb.PainterSortCompare)
          for (; Yb < bb.length; Yb++) Lb = bb.data[Yb], Lb._alphaIndex = Lb.getMesh().alphaIndex, Lb._distanceToCamera = Ob.q.Distance(Lb.XM().sBb.centerWorld, Sb);
        const ab = bb.length === bb.data.length ? bb.data : bb.data.slice(0, bb.length);
        ub && ab.sort(ub);
        const Hb = ab[0].getMesh().ZN();
        for (Yb = 0; Yb < ab.length; Yb++) {
          if (Lb = ab[Yb], Hb._activeMeshesFrozenButKeepClipping && !Lb.isInFrustum(Hb._frustumPlanes)) continue;
          let bb = !1;
          if (Bb) {
            const ub = Lb.HX();
            if (ub && ub.needDepthPrePass && !Ub) {
              bb = !0;
              const hb = ub.ZN().UX();
              hb.setColorWrite(!1), hb.setAlphaMode(0), Lb.render(!1), hb.setColorWrite(!0)
            }
          }
          const ub = Lb._renderingMesh;
          !bb && ub._renderRunFollower(Lb, Bb) || Lb.render(Bb)
        }
      }
      static defaultTransparentSortCompare(bb, ub) {
        return bb._alphaIndex > ub._alphaIndex ? 1 : bb._alphaIndex < ub._alphaIndex ? -1 : Gb.backToFrontSortCompare(bb, ub)
      }
      static backToFrontSortCompare(bb, ub) {
        return bb._distanceToCamera < ub._distanceToCamera ? 1 : bb._distanceToCamera > ub._distanceToCamera ? -1 : 0
      }
      static frontToBackSortCompare(bb, ub) {
        return bb._distanceToCamera < ub._distanceToCamera ? -1 : bb._distanceToCamera > ub._distanceToCamera ? 1 : 0
      }
      static PainterSortCompare(bb, ub) {
        const hb = bb.getMesh(),
          Bb = ub.getMesh();
        return hb.material && Bb.material ? hb.material.uniqueId - Bb.material.uniqueId : hb.uniqueId - Bb.uniqueId
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
      dispatch(bb, ub, hb) {
        void 0 === ub && (ub = bb.getMesh()), void 0 === hb && (hb = bb.HX()), null !== hb && void 0 !== hb && (hb.needAlphaBlendingForMesh(ub) ? this._transparentSubMeshes.push(bb) : hb.needAlphaTestingForMesh(ub) ? (hb.needDepthPrePass && !this.disableDepthPrePass && this._depthOnlySubMeshes.push(bb), this._alphaTestSubMeshes.push(bb)) : (hb.needDepthPrePass && !this.disableDepthPrePass && this._depthOnlySubMeshes.push(bb), this._opaqueSubMeshes.push(bb)), ub._renderingGroup = this, ub._edgesRenderer && ub.isEnabled() && ub.isVisible && ub._edgesRenderer.isEnabled && this._edgesRenderers.pushNoDuplicate(ub._edgesRenderer), this._empty = !1)
      }
      dispatchSprites(bb) {
        this._spriteManagers.push(bb), this._empty = !1
      }
      dispatchParticles(bb) {
        this._particleSystems.push(bb), this._empty = !1
      }
      _renderParticles(bb) {
        if (0 === this._particleSystems.length) return;
        const ub = this._scene.activeCamera;
        this._scene.onBeforeParticlesRenderingObservable.notifyObservers(this._scene);
        for (let hb = 0; hb < this._particleSystems.length; hb++) {
          const Bb = this._particleSystems.data[hb];
          if (0 === (ub && ub.layerMask & Bb.layerMask)) continue;
          const Ob = Bb.emitter;
          Ob.position && bb && -1 === bb.indexOf(Ob) || this._scene._activeParticles.addCount(Bb.render(), !1)
        }
        this._scene.onAfterParticlesRenderingObservable.notifyObservers(this._scene)
      }
      _renderSprites() {
        if (!this._scene.spritesEnabled || 0 === this._spriteManagers.length) return;
        const bb = this._scene.activeCamera;
        this._scene.onBeforeSpritesRenderingObservable.notifyObservers(this._scene);
        for (let ub = 0; ub < this._spriteManagers.length; ub++) {
          const hb = this._spriteManagers.data[ub];
          0 !== (bb && bb.layerMask & hb.layerMask) && hb.render()
        }
        this._scene.onAfterSpritesRenderingObservable.notifyObservers(this._scene)
      }
    }
    Gb._ZeroVector = Ob.q.Zero()
  },
  39625: (bb, ub, hb) => {
    hb.d(ub, {
      c: () => Gb
    });
    var Bb = hb(39628);
    class Ob {}
    class Gb {
      get disableDepthPrePass() {
        return this._disableDepthPrePass
      }
      set disableDepthPrePass(bb) {
        this._disableDepthPrePass = bb;
        for (const ub of this._renderingGroups) ub.disableDepthPrePass = bb
      }
      get maintainStateBetweenFrames() {
        return this._maintainStateBetweenFrames
      }
      set maintainStateBetweenFrames(bb) {
        bb !== this._maintainStateBetweenFrames && (this._maintainStateBetweenFrames = bb, this._maintainStateBetweenFrames || this.restoreDispachedFlags())
      }
      restoreDispachedFlags() {
        for (const bb of this._scene.meshes)
          if (bb.FW)
            for (const ub of bb.FW) ub._wasDispatched = !1;
        if (this._scene.spriteManagers)
          for (const bb of this._scene.spriteManagers) bb._wasDispatched = !1;
        for (const bb of this._scene.fW) bb._wasDispatched = !1
      }
      constructor(bb) {
        this._useSceneAutoClearSetup = !1, this._disableDepthPrePass = !1, this._renderingGroups = new Array, this._autoClearDepthStencil = {}, this._customOpaqueSortCompareFn = {}, this._customAlphaTestSortCompareFn = {}, this._customTransparentSortCompareFn = {}, this._renderingGroupInfo = new Ob, this._maintainStateBetweenFrames = !1, this._scene = bb;
        for (let ub = Gb.MIN_RENDERINGGROUPS; ub < Gb.MAX_RENDERINGGROUPS; ub++) this._autoClearDepthStencil[ub] = {
          autoClear: !0,
          depth: !0,
          stencil: !0
        }
      }
      get renderingGroups() {
        return this._renderingGroups
      }
      getRenderingGroup(bb) {
        const ub = bb || 0;
        return this._prepareRenderingGroup(ub), this._renderingGroups[ub]
      }
      _clearDepthStencilBuffer() {
        let bb = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          ub = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this._depthStencilBufferAlreadyCleaned || (this._scene.UX().clear(null, !1, bb, ub), this._depthStencilBufferAlreadyCleaned = !0)
      }
      render(bb, ub, hb, Bb) {
        let Ob = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          Ub = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          Lb = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
          Yb = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7],
          Sb = arguments.length > 8 ? arguments[8] : void 0,
          ab = arguments.length > 9 ? arguments[9] : void 0;
        const Hb = this._renderingGroupInfo;
        Hb.Xp = this._scene, Hb.camera = this._scene.activeCamera, Hb.renderingManager = this;
        const wb = ab ?? this._scene.spriteManagers;
        if (wb && Bb)
          for (let Gb = 0; Gb < wb.length; Gb++) {
            const bb = wb[Gb];
            this.dispatchSprites(bb)
          }
        for (let Zb = Gb.MIN_RENDERINGGROUPS; Zb < Gb.MAX_RENDERINGGROUPS; Zb++) {
          this._depthStencilBufferAlreadyCleaned = Zb === Gb.MIN_RENDERINGGROUPS;
          const ab = this._renderingGroups[Zb];
          if (!ab || ab._empty) continue;
          const wb = 1 << Zb;
          if (Hb.renderingGroupId = Zb, this._scene.onBeforeRenderingGroupObservable.notifyObservers(Hb, wb), Gb.AUTOCLEAR) {
            const bb = this._useSceneAutoClearSetup ? this._scene.getAutoClearDepthStencilSetup(Zb) : this._autoClearDepthStencil[Zb];
            bb && bb.autoClear && this._clearDepthStencilBuffer(bb.depth, bb.stencil)
          }
          for (let bb = 0, ub = this._scene._beforeRenderingGroupDrawStage; bb < ub.length; bb++) {
            ub[bb].action(Zb)
          }
          ab.render(bb, Bb, hb, ub, Ob, Ub, Lb, Yb, Sb);
          for (let bb = 0, ub = this._scene._afterRenderingGroupDrawStage; bb < ub.length; bb++) {
            ub[bb].action(Zb)
          }
          this._scene.onAfterRenderingGroupObservable.notifyObservers(Hb, wb)
        }
      }
      reset() {
        if (!this.maintainStateBetweenFrames)
          for (let bb = Gb.MIN_RENDERINGGROUPS; bb < Gb.MAX_RENDERINGGROUPS; bb++) {
            const ub = this._renderingGroups[bb];
            ub && ub.prepare()
          }
      }
      resetSprites() {
        if (!this.maintainStateBetweenFrames)
          for (let bb = Gb.MIN_RENDERINGGROUPS; bb < Gb.MAX_RENDERINGGROUPS; bb++) {
            const ub = this._renderingGroups[bb];
            ub && ub.prepareSprites()
          }
      }
      dispose() {
        this.freeRenderingGroups(), this._renderingGroups.length = 0, this._renderingGroupInfo = null
      }
      freeRenderingGroups() {
        for (let bb = Gb.MIN_RENDERINGGROUPS; bb < Gb.MAX_RENDERINGGROUPS; bb++) {
          const ub = this._renderingGroups[bb];
          ub && ub.dispose()
        }
      }
      _prepareRenderingGroup(bb) {
        void 0 === this._renderingGroups[bb] && (this._renderingGroups[bb] = new Bb.e(bb, this._scene, this._customOpaqueSortCompareFn[bb], this._customAlphaTestSortCompareFn[bb], this._customTransparentSortCompareFn[bb]), this._renderingGroups[bb].disableDepthPrePass = this._disableDepthPrePass)
      }
      dispatchSprites(bb) {
        this.maintainStateBetweenFrames && bb._wasDispatched || (bb._wasDispatched = !0, this.getRenderingGroup(bb.renderingGroupId).dispatchSprites(bb))
      }
      dispatchParticles(bb) {
        this.maintainStateBetweenFrames && bb._wasDispatched || (bb._wasDispatched = !0, this.getRenderingGroup(bb.renderingGroupId).dispatchParticles(bb))
      }
      dispatch(bb, ub, hb) {
        void 0 === ub && (ub = bb.getMesh()), this.maintainStateBetweenFrames && bb._wasDispatched || (bb._wasDispatched = !0, this.getRenderingGroup(ub.renderingGroupId).dispatch(bb, ub, hb))
      }
      setRenderingOrder(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          hb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          Bb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        if (this._customOpaqueSortCompareFn[bb] = ub, this._customAlphaTestSortCompareFn[bb] = hb, this._customTransparentSortCompareFn[bb] = Bb, this._renderingGroups[bb]) {
          const ub = this._renderingGroups[bb];
          ub.opaqueSortCompareFn = this._customOpaqueSortCompareFn[bb], ub.alphaTestSortCompareFn = this._customAlphaTestSortCompareFn[bb], ub.transparentSortCompareFn = this._customTransparentSortCompareFn[bb]
        }
      }
      setRenderingAutoClearDepthStencil(bb, ub) {
        let hb = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          Bb = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        this._autoClearDepthStencil[bb] = {
          autoClear: ub,
          depth: hb,
          stencil: Bb
        }
      }
      getAutoClearDepthStencilSetup(bb) {
        return this._autoClearDepthStencil[bb]
      }
    }
    Gb.MAX_RENDERINGGROUPS = 4, Gb.MIN_RENDERINGGROUPS = 0, Gb.AUTOCLEAR = !0
  },
  39360: (bb, ub, hb) => {
    hb.d(ub, {
      c: () => Bb
    });
    class Bb {
      constructor(bb) {
        this._supportBlendParametersPerTarget = bb, this._blendFunctionParameters = new Array(32), this._blendEquationParameters = new Array(16), this._blendConstants = new Array(4), this._isBlendConstantsDirty = !1, this._alphaBlend = Array(8).fill(!1), this._numTargetEnabled = 0, this._isAlphaBlendDirty = !1, this._isBlendFunctionParametersDirty = !1, this._isBlendEquationParametersDirty = !1, this._blendDisabledTargetsMask = 0, this._numTargets = 1, this.reset()
      }
      get isDirty() {
        return this._isAlphaBlendDirty || this._isBlendFunctionParametersDirty || this._isBlendEquationParametersDirty
      }
      get alphaBlend() {
        return this._numTargetEnabled > 0
      }
      set alphaBlend(bb) {
        this.setAlphaBlend(bb)
      }
      setAlphaBlend(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        this._alphaBlend[ub] !== bb && (bb ? this._numTargetEnabled++ : this._numTargetEnabled--, this._alphaBlend[ub] = bb, this._isAlphaBlendDirty = !0)
      }
      setAlphaBlendConstants(bb, ub, hb, Bb) {
        this._blendConstants[0] === bb && this._blendConstants[1] === ub && this._blendConstants[2] === hb && this._blendConstants[3] === Bb || (this._blendConstants[0] = bb, this._blendConstants[1] = ub, this._blendConstants[2] = hb, this._blendConstants[3] = Bb, this._isBlendConstantsDirty = !0)
      }
      setAlphaBlendFunctionParameters(bb, ub, hb, Bb) {
        const Ob = 4 * (arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0);
        this._blendFunctionParameters[Ob + 0] === bb && this._blendFunctionParameters[Ob + 1] === ub && this._blendFunctionParameters[Ob + 2] === hb && this._blendFunctionParameters[Ob + 3] === Bb || (this._blendFunctionParameters[Ob + 0] = bb, this._blendFunctionParameters[Ob + 1] = ub, this._blendFunctionParameters[Ob + 2] = hb, this._blendFunctionParameters[Ob + 3] = Bb, this._isBlendFunctionParametersDirty = !0)
      }
      setAlphaEquationParameters(bb, ub) {
        const hb = 2 * (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0);
        this._blendEquationParameters[hb + 0] === bb && this._blendEquationParameters[hb + 1] === ub || (this._blendEquationParameters[hb + 0] = bb, this._blendEquationParameters[hb + 1] = ub, this._isBlendEquationParametersDirty = !0)
      }
      reset() {
        this._alphaBlend.fill(!1), this._numTargetEnabled = 0, this._blendFunctionParameters.fill(null), this._blendEquationParameters.fill(null), this._blendConstants[0] = null, this._blendConstants[1] = null, this._blendConstants[2] = null, this._blendConstants[3] = null, this._isAlphaBlendDirty = !0, this._isBlendFunctionParametersDirty = !1, this._isBlendEquationParametersDirty = !1, this._isBlendConstantsDirty = !1, this._blendDisabledTargetsMask = 0, this._numTargets = 1
      }
      apply(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          hb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (this._numTargets !== ub && (this._numTargets = ub, this._isAlphaBlendDirty = !0), this._blendDisabledTargetsMask !== hb && (this._blendDisabledTargetsMask = hb, this._isAlphaBlendDirty = !0), !this.isDirty) return;
        if (this._isBlendConstantsDirty && (bb.blendColor(this._blendConstants[0], this._blendConstants[1], this._blendConstants[2], this._blendConstants[3]), this._isBlendConstantsDirty = !1), 1 === ub || !this._supportBlendParametersPerTarget) {
          if (this._isAlphaBlendDirty) {
            if (ub > 1 && 0 !== hb && this.alphaBlend) throw new Error("AlphaState: blending with integer MRT attachments requires per-target blend parameters");
            this._alphaBlend[0] && 0 === (1 & hb) ? bb.enable(bb.BLEND) : bb.disable(bb.BLEND), this._isAlphaBlendDirty = !1
          }
          return this._isBlendFunctionParametersDirty && (bb.blendFuncSeparate(this._blendFunctionParameters[0], this._blendFunctionParameters[1], this._blendFunctionParameters[2], this._blendFunctionParameters[3]), this._isBlendFunctionParametersDirty = !1), void(this._isBlendEquationParametersDirty && (bb.blendEquationSeparate(this._blendEquationParameters[0], this._blendEquationParameters[1]), this._isBlendEquationParametersDirty = !1))
        }
        const Bb = bb;
        if (this._isAlphaBlendDirty) {
          for (let Ob = 0; Ob < ub; Ob++) {
            const ub = Ob < this._numTargetEnabled ? Ob : 0;
            this._alphaBlend[ub] && 0 === (hb & 1 << Ob) ? Bb.enableIndexed(bb.BLEND, Ob) : Bb.disableIndexed(bb.BLEND, Ob)
          }
          this._isAlphaBlendDirty = !1
        }
        if (this._isBlendFunctionParametersDirty) {
          for (let bb = 0; bb < ub; bb++) {
            const ub = bb < this._numTargetEnabled ? 4 * bb : 0;
            Bb.blendFuncSeparateIndexed(bb, this._blendFunctionParameters[ub + 0], this._blendFunctionParameters[ub + 1], this._blendFunctionParameters[ub + 2], this._blendFunctionParameters[ub + 3])
          }
          this._isBlendFunctionParametersDirty = !1
        }
        if (this._isBlendEquationParametersDirty) {
          for (let bb = 0; bb < ub; bb++) {
            const ub = bb < this._numTargetEnabled ? 2 * bb : 0;
            Bb.blendEquationSeparateIndexed(bb, this._blendEquationParameters[ub + 0], this._blendEquationParameters[ub + 1])
          }
          this._isBlendEquationParametersDirty = !1
        }
      }
      setAlphaMode(bb, ub) {
        let hb = 32774;
        switch (bb) {
          case 0:
            break;
          case 7:
            this.setAlphaBlendFunctionParameters(1, 771, 1, 1, ub);
            break;
          case 8:
          case 14:
            this.setAlphaBlendFunctionParameters(1, 771, 1, 771, ub);
            break;
          case 2:
            this.setAlphaBlendFunctionParameters(770, 771, 1, 1, ub);
            break;
          case 6:
            this.setAlphaBlendFunctionParameters(1, 1, 0, 1, ub);
            break;
          case 1:
            this.setAlphaBlendFunctionParameters(770, 1, 0, 1, ub);
            break;
          case 3:
            this.setAlphaBlendFunctionParameters(0, 769, 1, 1, ub);
            break;
          case 4:
            this.setAlphaBlendFunctionParameters(774, 0, 1, 1, ub);
            break;
          case 5:
            this.setAlphaBlendFunctionParameters(770, 769, 1, 1, ub);
            break;
          case 9:
            this.setAlphaBlendFunctionParameters(32769, 32770, 32771, 32772, ub);
            break;
          case 10:
            this.setAlphaBlendFunctionParameters(1, 769, 1, 771, ub);
            break;
          case 11:
            this.setAlphaBlendFunctionParameters(1, 1, 1, 1, ub);
            break;
          case 12:
            this.setAlphaBlendFunctionParameters(772, 1, 0, 0, ub);
            break;
          case 13:
            this.setAlphaBlendFunctionParameters(775, 769, 773, 771, ub);
            break;
          case 15:
            this.setAlphaBlendFunctionParameters(1, 1, 1, 0, ub);
            break;
          case 16:
            this.setAlphaBlendFunctionParameters(775, 769, 0, 1, ub);
            break;
          case 17:
            this.setAlphaBlendFunctionParameters(770, 771, 1, 771, ub);
            break;
          case 18:
            this.setAlphaBlendFunctionParameters(1, 1, 1, 1, ub), hb = 32775;
            break;
          case 19:
            this.setAlphaBlendFunctionParameters(1, 1, 1, 1, ub), hb = 32776;
            break;
          case 20:
            this.setAlphaBlendFunctionParameters(1, 35065, 0, 1, ub);
            break;
          case 21:
            this.setAlphaBlendFunctionParameters(1, 0, 1, 771, ub)
        }
        this.setAlphaEquationParameters(hb, hb, ub)
      }
    }
  },
  39654: (bb, ub, hb) => {
    hb.d(ub, {
      e: () => Bb
    });
    class Bb {}
    Bb._IsPickingAvailable = !1
  },
  39551: (bb, ub, hb) => {
    hb.d(ub, {
      d: () => Lh,
      f: () => Gh
    });
    var Bb = hb(39559),
      Ob = hb(39343),
      Gb = hb(39352),
      Ub = hb(36753),
      Lb = hb(39573);
    class Yb {
      constructor() {
        this._count = 0, this._data = {}
      }
      mD(bb) {
        this.clear(), bb.forEach(((bb, ub) => this.add(bb, ub)))
      }
      get(bb) {
        const ub = this._data[bb];
        if (void 0 !== ub) return ub
      }
      getOrAddWithFactory(bb, ub) {
        let hb = this.get(bb);
        return void 0 !== hb || (hb = ub(bb), hb && this.add(bb, hb)), hb
      }
      getOrAdd(bb, ub) {
        const hb = this.get(bb);
        return void 0 !== hb ? hb : (this.add(bb, ub), ub)
      }
      contains(bb) {
        return void 0 !== this._data[bb]
      }
      add(bb, ub) {
        return void 0 === this._data[bb] && (this._data[bb] = ub, ++this._count, !0)
      }
      set(bb, ub) {
        return void 0 !== this._data[bb] && (this._data[bb] = ub, !0)
      }
      getAndRemove(bb) {
        const ub = this.get(bb);
        return void 0 !== ub ? (delete this._data[bb], --this._count, ub) : null
      }
      remove(bb) {
        return !!this.contains(bb) && (delete this._data[bb], --this._count, !0)
      }
      clear() {
        this._data = {}, this._count = 0
      }
      get count() {
        return this._count
      }
      forEach(bb) {
        for (const ub in this._data) {
          bb(ub, this._data[ub])
        }
      }
      first(bb) {
        for (const ub in this._data) {
          const hb = bb(ub, this._data[ub]);
          if (hb) return hb
        }
        return null
      }
    }
    var Sb = hb(39492),
      ab = hb(36727),
      Hb = hb(39580),
      wb = hb(39598),
      Zb = hb(39603);
    class Xb {
      constructor(bb, ub, hb, Bb, Ob, Gb) {
        this.source = bb, this.pointerX = ub, this.pointerY = hb, this.meshUnderPointer = Bb, this.sourceEvent = Ob, this.additionalData = Gb
      }
      static CreateNew(bb, ub, hb) {
        const Bb = bb.ZN();
        return new Xb(bb, Bb.pointerX, Bb.pointerY, Bb.meshUnderPointer || bb, ub, hb)
      }
      static CreateNewFromSprite(bb, ub, hb, Bb) {
        return new Xb(bb, ub.pointerX, ub.pointerY, ub.meshUnderPointer, hb, Bb)
      }
      static CreateNewFromScene(bb, ub) {
        return new Xb(null, bb.pointerX, bb.pointerY, bb.meshUnderPointer, ub)
      }
      static CreateNewFromPrimitive(bb, ub, hb, Bb) {
        return new Xb(bb, ub.x, ub.y, null, hb, Bb)
      }
    }
    var pb = hb(39612),
      ob = hb(39621),
      Ab = hb(39625),
      lb = hb(39632),
      Kb = hb(39316),
      Wb = hb(36748),
      Cb = hb(39333),
      db = hb(39638);
    class rb {
      constructor() {
        this.hoverCursor = "", this.actions = [], this.isRecursive = !1, this.disposeWhenUnowned = !0
      }
      static get HasTriggers() {
        for (const bb in rb.Triggers)
          if (Object.prototype.hasOwnProperty.call(rb.Triggers, bb)) return !0;
        return !1
      }
      static get HasPickTriggers() {
        for (const bb in rb.Triggers)
          if (Object.prototype.hasOwnProperty.call(rb.Triggers, bb)) {
            const ub = parseInt(bb);
            if (ub >= 1 && ub <= 7) return !0
          } return !1
      }
      static HasSpecificTrigger(bb) {
        for (const ub in rb.Triggers)
          if (Object.prototype.hasOwnProperty.call(rb.Triggers, ub)) {
            if (parseInt(ub) === bb) return !0
          } return !1
      }
    }
    rb.Triggers = {};
    var jb, nb, Db, xb, zb, gb, ib, vb = hb(39647);
    ! function(bb) {
      bb[bb.Generic = 0] = "Generic", bb[bb.Keyboard = 1] = "Keyboard", bb[bb.Mouse = 2] = "Mouse", bb[bb.Touch = 3] = "Touch", bb[bb.DualShock = 4] = "DualShock", bb[bb.Xbox = 5] = "Xbox", bb[bb.Switch = 6] = "Switch", bb[bb.DualSense = 7] = "DualSense"
    }(jb || (jb = {})),
    function(bb) {
      bb[bb.Horizontal = 0] = "Horizontal", bb[bb.Vertical = 1] = "Vertical", bb[bb.LeftClick = 2] = "LeftClick", bb[bb.MiddleClick = 3] = "MiddleClick", bb[bb.RightClick = 4] = "RightClick", bb[bb.BrowserBack = 5] = "BrowserBack", bb[bb.BrowserForward = 6] = "BrowserForward", bb[bb.MouseWheelX = 7] = "MouseWheelX", bb[bb.MouseWheelY = 8] = "MouseWheelY", bb[bb.MouseWheelZ = 9] = "MouseWheelZ", bb[bb.Move = 12] = "Move"
    }(nb || (nb = {})),
    function(bb) {
      bb[bb.Horizontal = 0] = "Horizontal", bb[bb.Vertical = 1] = "Vertical", bb[bb.LeftClick = 2] = "LeftClick", bb[bb.MiddleClick = 3] = "MiddleClick", bb[bb.RightClick = 4] = "RightClick", bb[bb.BrowserBack = 5] = "BrowserBack", bb[bb.BrowserForward = 6] = "BrowserForward", bb[bb.MouseWheelX = 7] = "MouseWheelX", bb[bb.MouseWheelY = 8] = "MouseWheelY", bb[bb.MouseWheelZ = 9] = "MouseWheelZ", bb[bb.DeltaHorizontal = 10] = "DeltaHorizontal", bb[bb.DeltaVertical = 11] = "DeltaVertical"
    }(Db || (Db = {})),
    function(bb) {
      bb[bb.Cross = 0] = "Cross", bb[bb.Circle = 1] = "Circle", bb[bb.Square = 2] = "Square", bb[bb.Triangle = 3] = "Triangle", bb[bb.L1 = 4] = "L1", bb[bb.R1 = 5] = "R1", bb[bb.L2 = 6] = "L2", bb[bb.R2 = 7] = "R2", bb[bb.Share = 8] = "Share", bb[bb.Options = 9] = "Options", bb[bb.L3 = 10] = "L3", bb[bb.R3 = 11] = "R3", bb[bb.DPadUp = 12] = "DPadUp", bb[bb.DPadDown = 13] = "DPadDown", bb[bb.DPadLeft = 14] = "DPadLeft", bb[bb.DPadRight = 15] = "DPadRight", bb[bb.Home = 16] = "Home", bb[bb.TouchPad = 17] = "TouchPad", bb[bb.LStickXAxis = 18] = "LStickXAxis", bb[bb.LStickYAxis = 19] = "LStickYAxis", bb[bb.RStickXAxis = 20] = "RStickXAxis", bb[bb.RStickYAxis = 21] = "RStickYAxis"
    }(xb || (xb = {})),
    function(bb) {
      bb[bb.Cross = 0] = "Cross", bb[bb.Circle = 1] = "Circle", bb[bb.Square = 2] = "Square", bb[bb.Triangle = 3] = "Triangle", bb[bb.L1 = 4] = "L1", bb[bb.R1 = 5] = "R1", bb[bb.L2 = 6] = "L2", bb[bb.R2 = 7] = "R2", bb[bb.Create = 8] = "Create", bb[bb.Options = 9] = "Options", bb[bb.L3 = 10] = "L3", bb[bb.R3 = 11] = "R3", bb[bb.DPadUp = 12] = "DPadUp", bb[bb.DPadDown = 13] = "DPadDown", bb[bb.DPadLeft = 14] = "DPadLeft", bb[bb.DPadRight = 15] = "DPadRight", bb[bb.Home = 16] = "Home", bb[bb.TouchPad = 17] = "TouchPad", bb[bb.LStickXAxis = 18] = "LStickXAxis", bb[bb.LStickYAxis = 19] = "LStickYAxis", bb[bb.RStickXAxis = 20] = "RStickXAxis", bb[bb.RStickYAxis = 21] = "RStickYAxis"
    }(zb || (zb = {})),
    function(bb) {
      bb[bb.A = 0] = "A", bb[bb.B = 1] = "B", bb[bb.X = 2] = "X", bb[bb.Y = 3] = "Y", bb[bb.LB = 4] = "LB", bb[bb.RB = 5] = "RB", bb[bb.LT = 6] = "LT", bb[bb.RT = 7] = "RT", bb[bb.Back = 8] = "Back", bb[bb.Start = 9] = "Start", bb[bb.LS = 10] = "LS", bb[bb.RS = 11] = "RS", bb[bb.DPadUp = 12] = "DPadUp", bb[bb.DPadDown = 13] = "DPadDown", bb[bb.DPadLeft = 14] = "DPadLeft", bb[bb.DPadRight = 15] = "DPadRight", bb[bb.Home = 16] = "Home", bb[bb.LStickXAxis = 17] = "LStickXAxis", bb[bb.LStickYAxis = 18] = "LStickYAxis", bb[bb.RStickXAxis = 19] = "RStickXAxis", bb[bb.RStickYAxis = 20] = "RStickYAxis"
    }(gb || (gb = {})),
    function(bb) {
      bb[bb.B = 0] = "B", bb[bb.A = 1] = "A", bb[bb.Y = 2] = "Y", bb[bb.X = 3] = "X", bb[bb.L = 4] = "L", bb[bb.R = 5] = "R", bb[bb.ZL = 6] = "ZL", bb[bb.ZR = 7] = "ZR", bb[bb.Minus = 8] = "Minus", bb[bb.Plus = 9] = "Plus", bb[bb.LS = 10] = "LS", bb[bb.RS = 11] = "RS", bb[bb.DPadUp = 12] = "DPadUp", bb[bb.DPadDown = 13] = "DPadDown", bb[bb.DPadLeft = 14] = "DPadLeft", bb[bb.DPadRight = 15] = "DPadRight", bb[bb.Home = 16] = "Home", bb[bb.Capture = 17] = "Capture", bb[bb.LStickXAxis = 18] = "LStickXAxis", bb[bb.LStickYAxis = 19] = "LStickYAxis", bb[bb.RStickXAxis = 20] = "RStickXAxis", bb[bb.RStickYAxis = 21] = "RStickYAxis"
    }(ib || (ib = {}));
    var tb = hb(39650);
    class Jb {
      static CreateDeviceEvent(bb, ub, hb, Bb, Ob, Gb, Ub) {
        switch (bb) {
          case jb.Keyboard:
            return this._CreateKeyboardEvent(hb, Bb, Ob, Gb);
          case jb.Mouse:
            if (hb === nb.MouseWheelX || hb === nb.MouseWheelY || hb === nb.MouseWheelZ) return this._CreateWheelEvent(bb, ub, hb, Bb, Ob, Gb);
          case jb.Touch:
            return this._CreatePointerEvent(bb, ub, hb, Bb, Ob, Gb, Ub);
          default:
            throw `Unable to generate event for device ${jb[bb]}`
        }
      }
      static _CreatePointerEvent(bb, ub, hb, Bb, Ob, Gb, Ub) {
        const Lb = this._CreateMouseEvent(bb, ub, hb, Bb, Ob, Gb);
        bb === jb.Mouse ? (Lb.deviceType = jb.Mouse, Lb.pointerId = 1, Lb.pointerType = "mouse") : (Lb.deviceType = jb.Touch, Lb.pointerId = Ub ?? ub, Lb.pointerType = "touch");
        let Yb = 0;
        return Yb += Ob.pollInput(bb, ub, nb.LeftClick), Yb += 2 * Ob.pollInput(bb, ub, nb.RightClick), Yb += 4 * Ob.pollInput(bb, ub, nb.MiddleClick), Lb.buttons = Yb, hb === nb.Move ? Lb.type = "pointermove" : hb >= nb.LeftClick && hb <= nb.RightClick && (Lb.type = 1 === Bb ? "pointerdown" : "pointerup", Lb.button = hb - 2), Lb
      }
      static _CreateWheelEvent(bb, ub, hb, Bb, Ob, Gb) {
        const Ub = this._CreateMouseEvent(bb, ub, hb, Bb, Ob, Gb);
        switch (Ub.pointerId = 1, Ub.type = "wheel", Ub.deltaMode = tb.d.DOM_DELTA_PIXEL, Ub.deltaX = 0, Ub.deltaY = 0, Ub.deltaZ = 0, hb) {
          case nb.MouseWheelX:
            Ub.deltaX = Bb;
            break;
          case nb.MouseWheelY:
            Ub.deltaY = Bb;
            break;
          case nb.MouseWheelZ:
            Ub.deltaZ = Bb
        }
        return Ub
      }
      static _CreateMouseEvent(bb, ub, hb, Bb, Ob, Gb) {
        const Ub = this._CreateEvent(Gb),
          Lb = Ob.pollInput(bb, ub, nb.Horizontal),
          Yb = Ob.pollInput(bb, ub, nb.Vertical);
        return Gb ? (Ub.movementX = 0, Ub.movementY = 0, Ub.offsetX = Ub.movementX - Gb.getBoundingClientRect().x, Ub.offsetY = Ub.movementY - Gb.getBoundingClientRect().y) : (Ub.movementX = Ob.pollInput(bb, ub, 10), Ub.movementY = Ob.pollInput(bb, ub, 11), Ub.offsetX = 0, Ub.offsetY = 0), this._CheckNonCharacterKeys(Ub, Ob), Ub.clientX = Lb, Ub.clientY = Yb, Ub.x = Lb, Ub.y = Yb, Ub.deviceType = bb, Ub.deviceSlot = ub, Ub.inputIndex = hb, Ub
      }
      static _CreateKeyboardEvent(bb, ub, hb, Bb) {
        const Ob = this._CreateEvent(Bb);
        return this._CheckNonCharacterKeys(Ob, hb), Ob.deviceType = jb.Keyboard, Ob.deviceSlot = 0, Ob.inputIndex = bb, Ob.type = 1 === ub ? "keydown" : "keyup", Ob.key = String.fromCharCode(bb), Ob.keyCode = bb, Ob
      }
      static _CheckNonCharacterKeys(bb, ub) {
        const hb = ub.isDeviceAvailable(jb.Keyboard),
          Bb = hb && 1 === ub.pollInput(jb.Keyboard, 0, 18),
          Ob = hb && 1 === ub.pollInput(jb.Keyboard, 0, 17),
          Gb = hb && (1 === ub.pollInput(jb.Keyboard, 0, 91) || 1 === ub.pollInput(jb.Keyboard, 0, 92) || 1 === ub.pollInput(jb.Keyboard, 0, 93)),
          Ub = hb && 1 === ub.pollInput(jb.Keyboard, 0, 16);
        bb.altKey = Bb, bb.ctrlKey = Ob, bb.metaKey = Gb, bb.shiftKey = Ub
      }
      static _CreateEvent(bb) {
        const ub = {
          preventDefault: () => {}
        };
        return ub.target = bb, ub
      }
    }
    class eb {
      constructor(bb, ub, hb) {
        this._nativeInput = _native.DeviceInputSystem ? new _native.DeviceInputSystem(bb, ub, ((bb, ub, Bb, Ob) => {
          const Gb = Jb.CreateDeviceEvent(bb, ub, Bb, Ob, this);
          hb(bb, ub, Gb)
        })) : this._createDummyNativeInput()
      }
      pollInput(bb, ub, hb) {
        return this._nativeInput.pollInput(bb, ub, hb)
      }
      isDeviceAvailable(bb) {
        return bb === jb.Mouse || bb === jb.Touch
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
    const Nb = Object.keys(nb).length / 2;
    class sb {
      constructor(bb, ub, hb, Ob) {
        this._inputs = [], this._keyboardActive = !1, this._pointerActive = !1, this._usingSafari = Bb.k.IsSafari(), this._usingMacOs = (0, Kb.h)() && /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform), this._keyboardDownEvent = bb => {}, this._keyboardUpEvent = bb => {}, this._keyboardBlurEvent = bb => {}, this._pointerMoveEvent = bb => {}, this._pointerDownEvent = bb => {}, this._pointerUpEvent = bb => {}, this._pointerCancelEvent = bb => {}, this._pointerCancelTouch = bb => {}, this._pointerLeaveEvent = bb => {}, this._pointerWheelEvent = bb => {}, this._pointerBlurEvent = bb => {}, this._pointerMacOsChromeOutEvent = bb => {}, this._eventsAttached = !1, this._mouseId = -1, this._isUsingFirefox = (0, Kb.h)() && navigator.userAgent && -1 !== navigator.userAgent.indexOf("Firefox"), this._isUsingChromium = (0, Kb.h)() && navigator.userAgent && -1 !== navigator.userAgent.indexOf("Chrome"), this._maxTouchPoints = 0, this._pointerInputClearObserver = null, this._gamepadConnectedEvent = bb => {}, this._gamepadDisconnectedEvent = bb => {}, this._eventPrefix = Bb.k.GetPointerPrefix(bb), this._engine = bb, this._onDeviceConnected = ub, this._onDeviceDisconnected = hb, this._onInputChanged = Ob, this._mouseId = this._isUsingFirefox ? 0 : 1, this._enableEvents(), this._usingMacOs && (this._metaKeys = []), this._engine._onEngineViewChanged || (this._engine._onEngineViewChanged = () => {
          this._enableEvents()
        })
      }
      pollInput(bb, ub, hb) {
        const Ob = this._inputs[bb][ub];
        if (!Ob) throw `Unable to find device ${jb[bb]}`;
        bb >= jb.DualShock && bb <= jb.DualSense && this._updateDevice(bb, ub, hb);
        const Gb = Ob[hb];
        if (void 0 === Gb) throw `Unable to find input ${hb} for device ${jb[bb]} in slot ${ub}`;
        return hb === nb.Move && Bb.k.Warn("Unable to provide information for PointerInput.Move.  Try using PointerInput.Horizontal or PointerInput.Vertical for move data."), Gb
      }
      isDeviceAvailable(bb) {
        return void 0 !== this._inputs[bb]
      }
      dispose() {
        this._onDeviceConnected = () => {}, this._onDeviceDisconnected = () => {}, this._onInputChanged = () => {}, delete this._engine._onEngineViewChanged, this._elementToAttachTo && this._disableEvents()
      }
      _enableEvents() {
        const bb = this?._engine.getInputElement();
        if (bb && (!this._eventsAttached || this._elementToAttachTo !== bb)) {
          if (this._disableEvents(), this._inputs)
            for (const bb of this._inputs)
              if (bb)
                for (const ub in bb) {
                  const hb = bb[+ub];
                  if (hb)
                    for (let bb = 0; bb < hb.length; bb++) hb[bb] = 0
                }
          this._elementToAttachTo = bb, this._elementToAttachTo.tabIndex = -1 !== this._elementToAttachTo.tabIndex ? this._elementToAttachTo.tabIndex : this._engine.canvasTabIndex, this._handleKeyActions(), this._handlePointerActions(), this._handleGamepadActions(), this._eventsAttached = !0, this._checkForConnectedDevices()
        }
      }
      _disableEvents() {
        this._elementToAttachTo && (this._elementToAttachTo.removeEventListener("blur", this._keyboardBlurEvent), this._elementToAttachTo.removeEventListener("blur", this._pointerBlurEvent), this._elementToAttachTo.removeEventListener("keydown", this._keyboardDownEvent), this._elementToAttachTo.removeEventListener("keyup", this._keyboardUpEvent), this._elementToAttachTo.removeEventListener(this._eventPrefix + "move", this._pointerMoveEvent), this._elementToAttachTo.removeEventListener(this._eventPrefix + "down", this._pointerDownEvent), this._elementToAttachTo.removeEventListener(this._eventPrefix + "up", this._pointerUpEvent), this._elementToAttachTo.removeEventListener(this._eventPrefix + "cancel", this._pointerCancelEvent), this._elementToAttachTo.removeEventListener(this._eventPrefix + "leave", this._pointerLeaveEvent), this._elementToAttachTo.removeEventListener(this._wheelEventName, this._pointerWheelEvent), this._usingMacOs && this._isUsingChromium && this._elementToAttachTo.removeEventListener("lostpointercapture", this._pointerMacOsChromeOutEvent), window.removeEventListener("gamepadconnected", this._gamepadConnectedEvent), window.removeEventListener("gamepaddisconnected", this._gamepadDisconnectedEvent)), this._pointerInputClearObserver && this._engine.onEndFrameObservable.remove(this._pointerInputClearObserver), this._eventsAttached = !1
      }
      _checkForConnectedDevices() {
        if (navigator.getGamepads) {
          const bb = navigator.getGamepads();
          for (const ub of bb) ub && this._addGamePad(ub)
        }
        "function" === typeof matchMedia && matchMedia("(pointer:fine)").matches && this._addPointerDevice(jb.Mouse, 0, 0, 0)
      }
      _addGamePad(bb) {
        const ub = this._getGamepadDeviceType(bb.id),
          hb = bb.index;
        this._gamepads = this._gamepads || new Array(bb.index + 1), this._registerDevice(ub, hb, bb.buttons.length + bb.axes.length), this._gamepads[hb] = ub
      }
      _addPointerDevice(bb, ub, hb, Bb) {
        this._pointerActive || (this._pointerActive = !0), this._registerDevice(bb, ub, Nb);
        const Ob = this._inputs[bb][ub];
        Ob[0] = hb, Ob[1] = Bb
      }
      _registerDevice(bb, ub, hb) {
        if (void 0 === ub) throw `Unable to register device ${jb[bb]} to undefined slot.`;
        if (this._inputs[bb] || (this._inputs[bb] = {}), !this._inputs[bb][ub]) {
          const Bb = new Array(hb);
          Bb.fill(0), this._inputs[bb][ub] = Bb, this._onDeviceConnected(bb, ub)
        }
      }
      _unregisterDevice(bb, ub) {
        this._inputs[bb][ub] && (delete this._inputs[bb][ub], this._onDeviceDisconnected(bb, ub))
      }
      _handleKeyActions() {
        this._keyboardDownEvent = bb => {
          this._keyboardActive || (this._keyboardActive = !0, this._registerDevice(jb.Keyboard, 0, 255));
          const ub = this._inputs[jb.Keyboard][0];
          if (ub) {
            ub[bb.keyCode] = 1;
            const hb = bb;
            hb.inputIndex = bb.keyCode, this._usingMacOs && bb.metaKey && "Meta" !== bb.key && (this._metaKeys.includes(bb.keyCode) || this._metaKeys.push(bb.keyCode)), this._onInputChanged(jb.Keyboard, 0, hb)
          }
        }, this._keyboardUpEvent = bb => {
          this._keyboardActive || (this._keyboardActive = !0, this._registerDevice(jb.Keyboard, 0, 255));
          const ub = this._inputs[jb.Keyboard][0];
          if (ub) {
            ub[bb.keyCode] = 0;
            const hb = bb;
            if (hb.inputIndex = bb.keyCode, this._usingMacOs && "Meta" === bb.key && this._metaKeys.length > 0) {
              for (const bb of this._metaKeys) {
                const hb = Jb.CreateDeviceEvent(jb.Keyboard, 0, bb, 0, this, this._elementToAttachTo);
                ub[bb] = 0, this._onInputChanged(jb.Keyboard, 0, hb)
              }
              this._metaKeys.splice(0, this._metaKeys.length)
            }
            this._onInputChanged(jb.Keyboard, 0, hb)
          }
        }, this._keyboardBlurEvent = () => {
          if (this._keyboardActive) {
            const bb = this._inputs[jb.Keyboard][0];
            for (let ub = 0; ub < bb.length; ub++)
              if (0 !== bb[ub]) {
                bb[ub] = 0;
                const hb = Jb.CreateDeviceEvent(jb.Keyboard, 0, ub, 0, this, this._elementToAttachTo);
                this._onInputChanged(jb.Keyboard, 0, hb)
              } this._usingMacOs && this._metaKeys.splice(0, this._metaKeys.length)
          }
        }, this._elementToAttachTo.addEventListener("keydown", this._keyboardDownEvent), this._elementToAttachTo.addEventListener("keyup", this._keyboardUpEvent), this._elementToAttachTo.addEventListener("blur", this._keyboardBlurEvent)
      }
      _handlePointerActions() {
        this._maxTouchPoints = (0, Kb.h)() && navigator.maxTouchPoints || 2, this._activeTouchIds || (this._activeTouchIds = new Array(this._maxTouchPoints));
        for (let Bb = 0; Bb < this._maxTouchPoints; Bb++) this._activeTouchIds[Bb] = -1;
        this._pointerMoveEvent = bb => {
          const ub = this._getPointerType(bb);
          let hb = ub === jb.Mouse ? 0 : this._activeTouchIds.indexOf(bb.pointerId);
          if (ub === jb.Touch && -1 === hb) {
            if (0 === bb.buttons) return;
            const Ob = this._activeTouchIds.indexOf(-1);
            if (!(Ob >= 0)) return void Bb.k.Warn(`Max number of touches exceeded.  Ignoring touches in excess of ${this._maxTouchPoints}`);
            hb = Ob, this._activeTouchIds[Ob] = bb.pointerId, this._onDeviceConnected(ub, hb)
          }
          this._inputs[ub] || (this._inputs[ub] = {}), this._inputs[ub][hb] || this._addPointerDevice(ub, hb, bb.clientX, bb.clientY);
          const Ob = this._inputs[ub][hb];
          if (Ob) {
            const Bb = bb;
            Bb.inputIndex = nb.Move, Ob[nb.Horizontal] = bb.clientX, Ob[nb.Vertical] = bb.clientY, ub === jb.Touch && 0 === Ob[nb.LeftClick] && (Ob[nb.LeftClick] = 1), void 0 === bb.pointerId && (bb.pointerId = this._mouseId), this._onInputChanged(ub, hb, Bb), this._usingSafari || -1 === bb.button || (Bb.inputIndex = bb.button + 2, Ob[bb.button + 2] = Ob[bb.button + 2] ? 0 : 1, this._onInputChanged(ub, hb, Bb))
          }
        }, this._pointerDownEvent = bb => {
          const ub = this._getPointerType(bb);
          let hb = ub === jb.Mouse ? 0 : bb.pointerId;
          if (ub === jb.Touch) {
            let ub = this._activeTouchIds.indexOf(bb.pointerId);
            if (-1 === ub && (ub = this._activeTouchIds.indexOf(-1)), !(ub >= 0)) return void Bb.k.Warn(`Max number of touches exceeded.  Ignoring touches in excess of ${this._maxTouchPoints}`);
            hb = ub, this._activeTouchIds[ub] = bb.pointerId
          }
          this._inputs[ub] || (this._inputs[ub] = {}), this._inputs[ub][hb] ? ub === jb.Touch && this._onDeviceConnected(ub, hb) : this._addPointerDevice(ub, hb, bb.clientX, bb.clientY);
          const Ob = this._inputs[ub][hb];
          if (Ob) {
            const Bb = Ob[nb.Horizontal],
              Ub = Ob[nb.Vertical];
            if (ub === jb.Mouse) {
              if (void 0 === bb.pointerId && (bb.pointerId = this._mouseId), !document.pointerLockElement) try {
                this._elementToAttachTo.setPointerCapture(this._mouseId)
              } catch (Gb) {}
            } else if (bb.pointerId && !document.pointerLockElement) try {
              this._elementToAttachTo.setPointerCapture(bb.pointerId)
            } catch (Gb) {}
            Ob[nb.Horizontal] = bb.clientX, Ob[nb.Vertical] = bb.clientY, Ob[bb.button + 2] = 1;
            const Lb = bb;
            Lb.inputIndex = bb.button + 2, this._onInputChanged(ub, hb, Lb), Bb === bb.clientX && Ub === bb.clientY || (Lb.inputIndex = nb.Move, this._onInputChanged(ub, hb, Lb))
          }
        }, this._pointerUpEvent = bb => {
          const ub = this._getPointerType(bb),
            hb = ub === jb.Mouse ? 0 : this._activeTouchIds.indexOf(bb.pointerId);
          if (ub === jb.Touch) {
            if (-1 === hb) return;
            this._activeTouchIds[hb] = -1
          }
          const Bb = this._inputs[ub]?.[hb];
          let Ob = bb.button,
            Gb = Bb && 0 !== Bb[Ob + 2];
          if (!Gb && this._isUsingFirefox && this._usingMacOs && Bb && (Ob = 2 === Ob ? 0 : 2, Gb = 0 !== Bb[Ob + 2]), Gb) {
            const Gb = Bb[nb.Horizontal],
              Ub = Bb[nb.Vertical];
            Bb[nb.Horizontal] = bb.clientX, Bb[nb.Vertical] = bb.clientY, Bb[Ob + 2] = 0;
            const Lb = bb;
            void 0 === bb.pointerId && (bb.pointerId = this._mouseId), Gb === bb.clientX && Ub === bb.clientY || (Lb.inputIndex = nb.Move, this._onInputChanged(ub, hb, Lb)), Lb.inputIndex = Ob + 2, ub === jb.Mouse && this._mouseId >= 0 && this._elementToAttachTo.hasPointerCapture?.(this._mouseId) ? this._elementToAttachTo.releasePointerCapture(this._mouseId) : bb.pointerId && this._elementToAttachTo.hasPointerCapture?.(bb.pointerId) && this._elementToAttachTo.releasePointerCapture(bb.pointerId), this._onInputChanged(ub, hb, Lb), ub === jb.Touch && this._onDeviceDisconnected(ub, hb)
          }
        }, this._pointerCancelTouch = bb => {
          const ub = this._activeTouchIds.indexOf(bb);
          if (-1 === ub) return;
          this._elementToAttachTo.hasPointerCapture?.(bb) && this._elementToAttachTo.releasePointerCapture(bb), this._inputs[jb.Touch][ub][nb.LeftClick] = 0;
          const hb = Jb.CreateDeviceEvent(jb.Touch, ub, nb.LeftClick, 0, this, this._elementToAttachTo, bb);
          this._onInputChanged(jb.Touch, ub, hb), this._activeTouchIds[ub] = -1, this._onDeviceDisconnected(jb.Touch, ub)
        }, this._pointerCancelEvent = bb => {
          if ("mouse" === bb.pointerType) {
            const bb = this._inputs[jb.Mouse][0];
            this._mouseId >= 0 && this._elementToAttachTo.hasPointerCapture?.(this._mouseId) && this._elementToAttachTo.releasePointerCapture(this._mouseId);
            for (let ub = nb.LeftClick; ub <= nb.BrowserForward; ub++)
              if (1 === bb[ub]) {
                bb[ub] = 0;
                const hb = Jb.CreateDeviceEvent(jb.Mouse, 0, ub, 0, this, this._elementToAttachTo);
                this._onInputChanged(jb.Mouse, 0, hb)
              }
          } else this._pointerCancelTouch(bb.pointerId)
        }, this._pointerLeaveEvent = bb => {
          "pen" === bb.pointerType && this._pointerCancelTouch(bb.pointerId)
        }, this._wheelEventName = "onwheel" in document.createElement("div") ? "wheel" : void 0 !== document.onmousewheel ? "mousewheel" : "DOMMouseScroll";
        let bb = !1;
        const ub = function() {};
        try {
          const hb = Object.defineProperty({}, "passive", {
            get: function() {
              bb = !0
            }
          });
          this._elementToAttachTo.addEventListener("test", ub, hb), this._elementToAttachTo.removeEventListener("test", ub, hb)
        } catch (hb) {}
        this._pointerBlurEvent = () => {
          if (this.isDeviceAvailable(jb.Mouse)) {
            const bb = this._inputs[jb.Mouse][0];
            this._mouseId >= 0 && this._elementToAttachTo.hasPointerCapture?.(this._mouseId) && this._elementToAttachTo.releasePointerCapture(this._mouseId);
            for (let ub = nb.LeftClick; ub <= nb.BrowserForward; ub++)
              if (1 === bb[ub]) {
                bb[ub] = 0;
                const hb = Jb.CreateDeviceEvent(jb.Mouse, 0, ub, 0, this, this._elementToAttachTo);
                this._onInputChanged(jb.Mouse, 0, hb)
              }
          }
          if (this.isDeviceAvailable(jb.Touch)) {
            const bb = this._inputs[jb.Touch];
            for (let ub = 0; ub < this._activeTouchIds.length; ub++) {
              const hb = this._activeTouchIds[ub];
              if (this._elementToAttachTo.hasPointerCapture?.(hb) && this._elementToAttachTo.releasePointerCapture(hb), -1 !== hb && 1 === bb[ub]?.[nb.LeftClick]) {
                bb[ub][nb.LeftClick] = 0;
                const Bb = Jb.CreateDeviceEvent(jb.Touch, ub, nb.LeftClick, 0, this, this._elementToAttachTo, hb);
                this._onInputChanged(jb.Touch, ub, Bb), this._activeTouchIds[ub] = -1, this._onDeviceDisconnected(jb.Touch, ub)
              }
            }
          }
        }, this._pointerWheelEvent = bb => {
          const ub = jb.Mouse;
          this._inputs[ub] || (this._inputs[ub] = []), this._inputs[ub][0] || (this._pointerActive = !0, this._registerDevice(ub, 0, Nb));
          const hb = this._inputs[ub][0];
          if (hb) {
            hb[nb.MouseWheelX] = bb.deltaX || 0, hb[nb.MouseWheelY] = bb.deltaY || bb.wheelDelta || 0, hb[nb.MouseWheelZ] = bb.deltaZ || 0;
            const Bb = bb;
            void 0 === bb.pointerId && (bb.pointerId = this._mouseId), 0 !== hb[nb.MouseWheelX] && (Bb.inputIndex = nb.MouseWheelX, this._onInputChanged(ub, 0, Bb)), 0 !== hb[nb.MouseWheelY] && (Bb.inputIndex = nb.MouseWheelY, this._onInputChanged(ub, 0, Bb)), 0 !== hb[nb.MouseWheelZ] && (Bb.inputIndex = nb.MouseWheelZ, this._onInputChanged(ub, 0, Bb))
          }
        }, this._usingMacOs && this._isUsingChromium && (this._pointerMacOsChromeOutEvent = bb => {
          bb.buttons > 1 && this._pointerCancelEvent(bb)
        }, this._elementToAttachTo.addEventListener("lostpointercapture", this._pointerMacOsChromeOutEvent)), this._elementToAttachTo.addEventListener(this._eventPrefix + "move", this._pointerMoveEvent), this._elementToAttachTo.addEventListener(this._eventPrefix + "down", this._pointerDownEvent), this._elementToAttachTo.addEventListener(this._eventPrefix + "up", this._pointerUpEvent), this._elementToAttachTo.addEventListener(this._eventPrefix + "cancel", this._pointerCancelEvent), this._elementToAttachTo.addEventListener(this._eventPrefix + "leave", this._pointerLeaveEvent), this._elementToAttachTo.addEventListener("blur", this._pointerBlurEvent), this._elementToAttachTo.addEventListener(this._wheelEventName, this._pointerWheelEvent, !!bb && {
          passive: !1
        }), this._pointerInputClearObserver = this._engine.onEndFrameObservable.add((() => {
          if (this.isDeviceAvailable(jb.Mouse)) {
            const bb = this._inputs[jb.Mouse][0];
            bb[nb.MouseWheelX] = 0, bb[nb.MouseWheelY] = 0, bb[nb.MouseWheelZ] = 0
          }
        }))
      }
      _handleGamepadActions() {
        this._gamepadConnectedEvent = bb => {
          this._addGamePad(bb.gamepad)
        }, this._gamepadDisconnectedEvent = bb => {
          if (this._gamepads) {
            const ub = this._getGamepadDeviceType(bb.gamepad.id),
              hb = bb.gamepad.index;
            this._unregisterDevice(ub, hb), delete this._gamepads[hb]
          }
        }, window.addEventListener("gamepadconnected", this._gamepadConnectedEvent), window.addEventListener("gamepaddisconnected", this._gamepadDisconnectedEvent)
      }
      _updateDevice(bb, ub, hb) {
        const Bb = navigator.getGamepads()[ub];
        if (Bb && bb === this._gamepads[ub]) {
          const Ob = this._inputs[bb][ub];
          hb >= Bb.buttons.length ? Ob[hb] = Bb.axes[hb - Bb.buttons.length].valueOf() : Ob[hb] = Bb.buttons[hb].value
        }
      }
      _getGamepadDeviceType(bb) {
        return -1 !== bb.indexOf("054c") ? -1 !== bb.indexOf("0ce6") ? jb.DualSense : jb.DualShock : -1 !== bb.indexOf("Xbox One") || -1 !== bb.search("Xbox 360") || -1 !== bb.search("xinput") || -1 !== bb.indexOf("045e") && -1 === bb.indexOf("Surface Dock") ? jb.Xbox : -1 !== bb.indexOf("057e") ? jb.Switch : jb.Generic
      }
      _getPointerType(bb) {
        let ub = jb.Mouse;
        return ("touch" === bb.pointerType || "pen" === bb.pointerType || bb.touches) && (ub = jb.Touch), ub
      }
    }
    class Mb {
      constructor(bb, ub) {
        let hb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.deviceType = ub, this.deviceSlot = hb, this.onInputChangedObservable = new Ub.e, this._deviceInputSystem = bb
      }
      getInput(bb) {
        return this._deviceInputSystem.pollInput(this.deviceType, this.deviceSlot, bb)
      }
    }
    class mb {
      constructor(bb) {
        this._registeredManagers = new Array, this._refCount = 0, this.registerManager = bb => {
          for (let ub = 0; ub < this._devices.length; ub++) {
            const hb = this._devices[ub];
            for (const Bb in hb) {
              const hb = +Bb;
              bb._addDevice(new Mb(this._deviceInputSystem, ub, hb))
            }
          }
          this._registeredManagers.push(bb)
        }, this.unregisterManager = bb => {
          const ub = this._registeredManagers.indexOf(bb);
          ub > -1 && this._registeredManagers.splice(ub, 1)
        };
        const ub = Object.keys(jb).length / 2;
        this._devices = new Array(ub);
        const hb = (bb, ub) => {
            this._devices[bb] || (this._devices[bb] = new Array), this._devices[bb][ub] || (this._devices[bb][ub] = ub);
            for (const hb of this._registeredManagers) {
              const Bb = new Mb(this._deviceInputSystem, bb, ub);
              hb._addDevice(Bb)
            }
          },
          Bb = (bb, ub) => {
            this._devices[bb]?.[ub] && delete this._devices[bb][ub];
            for (const hb of this._registeredManagers) hb._removeDevice(bb, ub)
          },
          Ob = (bb, ub, hb) => {
            if (hb)
              for (const Bb of this._registeredManagers) Bb._onInputChanged(bb, ub, hb)
          };
        "undefined" !== typeof _native ? this._deviceInputSystem = new eb(hb, Bb, Ob) : this._deviceInputSystem = new sb(bb, hb, Bb, Ob)
      }
      dispose() {
        this._deviceInputSystem.dispose()
      }
    }
    class Ib {
      getDeviceSource(bb, ub) {
        if (void 0 === ub) {
          if (void 0 === this._firstDevice[bb]) return null;
          ub = this._firstDevice[bb]
        }
        return this._devices[bb] && void 0 !== this._devices[bb][ub] ? this._devices[bb][ub] : null
      }
      getDeviceSources(bb) {
        return this._devices[bb] ? this._devices[bb].filter((bb => !!bb)) : []
      }
      constructor(bb) {
        const ub = Object.keys(jb).length / 2;
        this._devices = new Array(ub), this._firstDevice = new Array(ub), this._engine = bb, this._engine._deviceSourceManager || (this._engine._deviceSourceManager = new mb(bb)), this._engine._deviceSourceManager._refCount++, this.onDeviceConnectedObservable = new Ub.e((bb => {
          for (const ub of this._devices)
            if (ub)
              for (const hb of ub) hb && this.onDeviceConnectedObservable.notifyObserver(bb, hb)
        })), this.onDeviceDisconnectedObservable = new Ub.e, this._engine._deviceSourceManager.registerManager(this), this._onDisposeObserver = bb.XN.add((() => {
          this.dispose()
        }))
      }
      dispose() {
        this.onDeviceConnectedObservable.clear(), this.onDeviceDisconnectedObservable.clear(), this._engine._deviceSourceManager && (this._engine._deviceSourceManager.unregisterManager(this), --this._engine._deviceSourceManager._refCount < 1 && (this._engine._deviceSourceManager.dispose(), delete this._engine._deviceSourceManager)), this._engine.XN.remove(this._onDisposeObserver)
      }
      _addDevice(bb) {
        this._devices[bb.deviceType] || (this._devices[bb.deviceType] = []), this._devices[bb.deviceType][bb.deviceSlot] || (this._devices[bb.deviceType][bb.deviceSlot] = bb, this._updateFirstDevices(bb.deviceType)), this.onDeviceConnectedObservable.notifyObservers(bb)
      }
      _removeDevice(bb, ub) {
        const hb = this._devices[bb]?.[ub];
        this.onDeviceDisconnectedObservable.notifyObservers(hb), this._devices[bb]?.[ub] && delete this._devices[bb][ub], this._updateFirstDevices(bb)
      }
      _onInputChanged(bb, ub, hb) {
        this._devices[bb]?.[ub]?.onInputChangedObservable.notifyObservers(hb)
      }
      _updateFirstDevices(bb) {
        switch (bb) {
          case jb.Keyboard:
          case jb.Mouse:
            this._firstDevice[bb] = 0;
            break;
          case jb.Touch:
          case jb.DualSense:
          case jb.DualShock:
          case jb.Xbox:
          case jb.Switch:
          case jb.Generic: {
            delete this._firstDevice[bb];
            const ub = this._devices[bb];
            if (ub)
              for (let hb = 0; hb < ub.length; hb++)
                if (ub[hb]) {
                  this._firstDevice[bb] = hb;
                  break
                } break
          }
        }
      }
    }
    var Pb = hb(39654);
    class qb {
      constructor() {
        this._singleClick = !1, this._doubleClick = !1, this._hasSwiped = !1, this._ignore = !1
      }
      get singleClick() {
        return this._singleClick
      }
      get ja() {
        return this._doubleClick
      }
      get hasSwiped() {
        return this._hasSwiped
      }
      get ignore() {
        return this._ignore
      }
      set singleClick(bb) {
        this._singleClick = bb
      }
      set ja(bb) {
        this._doubleClick = bb
      }
      set hasSwiped(bb) {
        this._hasSwiped = bb
      }
      set ignore(bb) {
        this._ignore = bb
      }
    }
    class Eb {
      constructor(bb) {
        this._alreadyAttached = !1, this._meshPickProceed = !1, this._currentPickResult = null, this._previousPickResult = null, this._activePointerIds = new Array, this._activePointerIdsCount = 0, this._doubleClickOccured = !1, this._isSwiping = !1, this._swipeButtonPressed = -1, this._skipPointerTap = !1, this._isMultiTouchGesture = !1, this._pointerX = 0, this._pointerY = 0, this._startingPointerPosition = new ab.m(0, 0), this._previousStartingPointerPosition = new ab.m(0, 0), this._startingPointerTime = 0, this._previousStartingPointerTime = 0, this._pointerCaptures = {}, this._meshUnderPointerId = {}, this._movePointerInfo = null, this._latestPointerMoveEvents = new Map, this._cameraObserverCount = 0, this._delayedClicks = [null, null, null, null, null], this._deviceSourceManager = null, this._scene = bb || Wb.b.LastCreatedScene, this._scene
      }
      get meshUnderPointer() {
        return this._movePointerInfo && (this._movePointerInfo._generatePickInfo(), this._movePointerInfo = null), this._pointerOverMesh
      }
      getMeshUnderPointerByPointerId(bb) {
        return this._meshUnderPointerId[bb] || null
      }
      get unTranslatedPointer() {
        return new ab.m(this._unTranslatedPointerX, this._unTranslatedPointerY)
      }
      get pointerX() {
        return this._pointerX
      }
      set pointerX(bb) {
        this._pointerX = bb
      }
      get pointerY() {
        return this._pointerY
      }
      set pointerY(bb) {
        this._pointerY = bb
      }
      _updatePointerPosition(bb) {
        const ub = this._scene.UX().getInputElementClientRect();
        ub && (this._pointerX = bb.clientX - ub.left, this._pointerY = bb.clientY - ub.top, this._unTranslatedPointerX = this._pointerX, this._unTranslatedPointerY = this._pointerY)
      }
      _processPointerMove(bb, ub) {
        const hb = this._scene,
          Bb = hb.UX(),
          Ob = Bb.getInputElement();
        Ob && (Ob.tabIndex = Bb.canvasTabIndex, hb.doNotHandleCursors || (Ob.style.cursor = hb.defaultCursor)), this._setCursorAndPointerOverMesh(bb, ub, hb);
        for (const Lb of hb._pointerMoveStage) {
          bb = bb || this._pickMove(ub);
          const hb = !!bb?.pickedMesh;
          bb = Lb.action(this._unTranslatedPointerX, this._unTranslatedPointerY, bb, hb, Ob)
        }
        const Gb = ub.inputIndex >= nb.MouseWheelX && ub.inputIndex <= nb.MouseWheelZ ? db.d.POINTERWHEEL : db.d.POINTERMOVE;
        let Ub;
        hb.onPointerMove && (bb = bb || this._pickMove(ub), hb.onPointerMove(ub, bb, Gb)), bb ? (Ub = new db.g(Gb, ub, bb), this._setRayOnPointerInfo(bb, ub)) : (Ub = new db.g(Gb, ub, null, this), this._movePointerInfo = Ub), hb.onPointerObservable.hasObservers() && hb.onPointerObservable.notifyObservers(Ub, Gb)
      }
      _setRayOnPointerInfo(bb, ub) {
        const hb = this._scene;
        bb && Pb.e._IsPickingAvailable && (bb.ray || (bb.ray = hb.createPickingRay(ub.offsetX, ub.offsetY, ab.d.Identity(), hb.activeCamera)))
      }
      _addCameraPointerObserver(bb, ub) {
        return this._cameraObserverCount++, this._scene.onPointerObservable.add(bb, ub)
      }
      _removeCameraPointerObserver(bb) {
        return this._cameraObserverCount--, this._scene.onPointerObservable.remove(bb)
      }
      _checkForPicking() {
        return !!(this._scene.onPointerObservable.observers.length > this._cameraObserverCount || this._scene.onPointerPick)
      }
      _checkPrePointerObservable(bb, ub, hb) {
        const Bb = this._scene,
          Ob = new db.f(hb, ub, this._unTranslatedPointerX, this._unTranslatedPointerY);
        return bb && (Ob.originalPickingInfo = bb, Ob.ray = bb.ray, "xr-near" === ub.pointerType && bb.originMesh && (Ob.nearInteractionPickingInfo = bb)), Bb.onPrePointerObservable.notifyObservers(Ob, hb), !!Ob.skipOnPointerObservable
      }
      _pickMove(bb) {
        const ub = this._scene,
          hb = ub.xw(this._unTranslatedPointerX, this._unTranslatedPointerY, ub.pointerMovePredicate, ub.pointerMoveFastCheck, ub.cameraToUseForPointers, ub.pointerMoveTrianglePredicate);
        return this._setCursorAndPointerOverMesh(hb, bb, ub), hb
      }
      _updateMeshUnderPointer() {
        const bb = this._scene;
        if (!bb.constantlyUpdateMeshUnderPointer || 0 === this._latestPointerMoveEvents.size || bb.skipPointerMovePicking || !bb.cameraToUseForPointers && !bb.activeCamera) return;
        this._ensurePointerMovePredicate();
        const ub = this._pointerX,
          hb = this._pointerY,
          Bb = this._unTranslatedPointerX,
          Ob = this._unTranslatedPointerY;
        for (const Gb of this._latestPointerMoveEvents.values()) this._pointerX = Gb.pointerX, this._pointerY = Gb.pointerY, this._unTranslatedPointerX = Gb.unTranslatedPointerX, this._unTranslatedPointerY = Gb.unTranslatedPointerY, this._pickMove(Gb.event);
        this._pointerX = ub, this._pointerY = hb, this._unTranslatedPointerX = Bb, this._unTranslatedPointerY = Ob
      }
      _ensurePointerMovePredicate() {
        const bb = this._scene;
        bb.pointerMovePredicate || (bb.pointerMovePredicate = ub => (ub._isPointerMovePickable ?? ub.lp) && ub.isVisible && ub.isReady() && ub.isEnabled() && (ub.enablePointerMoveEvents || bb.constantlyUpdateMeshUnderPointer || null !== ub._getActionManagerForTrigger()) && (!bb.cameraToUseForPointers || 0 !== (bb.cameraToUseForPointers.layerMask & ub.layerMask)))
      }
      _setCursorAndPointerOverMesh(bb, ub, hb) {
        const Bb = hb.UX().getInputElement();
        if (bb?.pickedMesh) {
          if (this.setPointerOverMesh(bb.pickedMesh, ub.pointerId, bb, ub), !hb.doNotHandleCursors && Bb && this._pointerOverMesh) {
            const bb = this._pointerOverMesh._getActionManagerForTrigger();
            bb && bb.hasPointerTriggers && (Bb.style.cursor = bb.hoverCursor || hb.hoverCursor)
          }
        } else this.setPointerOverMesh(null, ub.pointerId, bb, ub)
      }
      simulatePointerMove(bb, ub) {
        const hb = new PointerEvent("pointermove", ub);
        hb.inputIndex = nb.Move, this._checkPrePointerObservable(bb, hb, db.d.POINTERMOVE) || this._processPointerMove(bb, hb)
      }
      simulatePointerDown(bb, ub) {
        const hb = new PointerEvent("pointerdown", ub);
        hb.inputIndex = hb.button + 2, this._checkPrePointerObservable(bb, hb, db.d.POINTERDOWN) || this._processPointerDown(bb, hb)
      }
      _processPointerDown(bb, ub) {
        const hb = this._scene;
        if (bb?.pickedMesh) {
          this._pickedDownMesh = bb.pickedMesh;
          const Bb = bb.pickedMesh._getActionManagerForTrigger();
          if (Bb) {
            if (Bb.hasPickTriggers) switch (Bb.processTrigger(5, new Xb(bb.pickedMesh, hb.pointerX, hb.pointerY, bb.pickedMesh, ub, bb)), ub.button) {
              case 0:
                Bb.processTrigger(2, new Xb(bb.pickedMesh, hb.pointerX, hb.pointerY, bb.pickedMesh, ub, bb));
                break;
              case 1:
                Bb.processTrigger(4, new Xb(bb.pickedMesh, hb.pointerX, hb.pointerY, bb.pickedMesh, ub, bb));
                break;
              case 2:
                Bb.processTrigger(3, new Xb(bb.pickedMesh, hb.pointerX, hb.pointerY, bb.pickedMesh, ub, bb))
            }
            Bb.hasSpecificTrigger(8) && window.setTimeout((() => {
              const bb = hb.xw(this._unTranslatedPointerX, this._unTranslatedPointerY, (bb => bb.lp && bb.isVisible && bb.isReady() && bb.actionManager && bb.actionManager.hasSpecificTrigger(8) && bb === this._pickedDownMesh), !1, hb.cameraToUseForPointers);
              bb?.pickedMesh && Bb && 0 !== this._activePointerIdsCount && Date.now() - this._startingPointerTime > Eb.LongPressDelay && !this._isPointerSwiping() && (this._startingPointerTime = 0, Bb.processTrigger(8, Xb.CreateNew(bb.pickedMesh, ub)))
            }), Eb.LongPressDelay)
          }
        } else
          for (const Gb of hb._pointerDownStage) bb = Gb.action(this._unTranslatedPointerX, this._unTranslatedPointerY, bb, ub, !1);
        let Bb;
        const Ob = db.d.POINTERDOWN;
        bb ? (hb.onPointerDown && hb.onPointerDown(ub, bb, Ob), Bb = new db.g(Ob, ub, bb), this._setRayOnPointerInfo(bb, ub)) : Bb = new db.g(Ob, ub, null, this), hb.onPointerObservable.hasObservers() && hb.onPointerObservable.notifyObservers(Bb, Ob)
      }
      _isPointerSwiping() {
        return this._isSwiping
      }
      simulatePointerUp(bb, ub, hb) {
        const Bb = new PointerEvent("pointerup", ub);
        Bb.inputIndex = nb.Move;
        const Ob = new qb;
        hb ? Ob.ja = !0 : Ob.singleClick = !0, this._checkPrePointerObservable(bb, Bb, db.d.POINTERUP) || this._processPointerUp(bb, Bb, Ob)
      }
      _processPointerUp(bb, ub, hb) {
        const Bb = this._scene;
        if (bb?.pickedMesh) {
          if (this._pickedUpMesh = bb.pickedMesh, this._pickedDownMesh === this._pickedUpMesh && (Bb.onPointerPick && Bb.onPointerPick(ub, bb), hb.singleClick && !hb.ignore && Bb.onPointerObservable.observers.length > this._cameraObserverCount)) {
            const hb = db.d.POINTERPICK,
              Ob = new db.g(hb, ub, bb);
            this._setRayOnPointerInfo(bb, ub), Bb.onPointerObservable.notifyObservers(Ob, hb)
          }
          const Ob = bb.pickedMesh._getActionManagerForTrigger();
          if (Ob && !hb.ignore) {
            Ob.processTrigger(7, Xb.CreateNew(bb.pickedMesh, ub, bb)), !hb.hasSwiped && hb.singleClick && Ob.processTrigger(1, Xb.CreateNew(bb.pickedMesh, ub, bb));
            const Bb = bb.pickedMesh._getActionManagerForTrigger(6);
            hb.ja && Bb && Bb.processTrigger(6, Xb.CreateNew(bb.pickedMesh, ub, bb))
          }
        } else if (!hb.ignore)
          for (const Ob of Bb._pointerUpStage) bb = Ob.action(this._unTranslatedPointerX, this._unTranslatedPointerY, bb, ub, hb.ja);
        if (this._pickedDownMesh && this._pickedDownMesh !== this._pickedUpMesh) {
          const bb = this._pickedDownMesh._getActionManagerForTrigger(16);
          bb && bb.processTrigger(16, Xb.CreateNew(this._pickedDownMesh, ub))
        }
        if (!hb.ignore) {
          const Ob = new db.g(db.d.POINTERUP, ub, bb);
          if (this._setRayOnPointerInfo(bb, ub), Bb.onPointerObservable.notifyObservers(Ob, db.d.POINTERUP), Bb.onPointerUp && Bb.onPointerUp(ub, bb, db.d.POINTERUP), !hb.hasSwiped && !this._skipPointerTap && !this._isMultiTouchGesture) {
            let Ob = 0;
            if (hb.singleClick ? Ob = db.d.POINTERTAP : hb.ja && (Ob = db.d.POINTERDOUBLETAP), Ob) {
              const hb = new db.g(Ob, ub, bb);
              Bb.onPointerObservable.hasObservers() && Bb.onPointerObservable.hasSpecificMask(Ob) && Bb.onPointerObservable.notifyObservers(hb, Ob)
            }
          }
        }
      }
      isPointerCaptured() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return this._pointerCaptures[bb]
      }
      attachControl() {
        let bb = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          ub = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          hb = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          Bb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const Ob = this._scene,
          Gb = Ob.UX();
        Bb || (Bb = Gb.getInputElement()), this._alreadyAttached && this.detachControl(), Bb && (this._alreadyAttachedTo = Bb), this._deviceSourceManager = new Ib(Gb), this._initActionManager = bb => {
          if (!this._meshPickProceed) {
            const ub = Ob.skipPointerUpPicking || 0 === Ob._registeredActions && !this._checkForPicking() && !Ob.onPointerUp ? null : Ob.xw(this._unTranslatedPointerX, this._unTranslatedPointerY, Ob.pointerUpPredicate, Ob.pointerUpFastCheck, Ob.cameraToUseForPointers, Ob.pointerUpTrianglePredicate);
            this._currentPickResult = ub, ub && (bb = ub.hit && ub.pickedMesh ? ub.pickedMesh._getActionManagerForTrigger() : null), this._meshPickProceed = !0
          }
          return bb
        }, this._delayedSimpleClick = (bb, ub, hb) => {
          if ((Date.now() - this._previousStartingPointerTime > Eb.DoubleClickDelay && !this._doubleClickOccured || bb !== this._previousButtonPressed) && (this._doubleClickOccured = !1, ub.singleClick = !0, ub.ignore = !1, this._delayedClicks[bb])) {
            const ub = this._delayedClicks[bb].evt,
              hb = db.d.POINTERTAP,
              Bb = new db.g(hb, ub, this._currentPickResult);
            Ob.onPointerObservable.hasObservers() && Ob.onPointerObservable.hasSpecificMask(hb) && Ob.onPointerObservable.notifyObservers(Bb, hb), this._delayedClicks[bb] = null
          }
        }, this._initClickEvent = (bb, ub, hb, Bb) => {
          const Ob = new qb;
          this._currentPickResult = null;
          let Gb = null,
            Ub = bb.hasSpecificMask(db.d.POINTERPICK) || ub.hasSpecificMask(db.d.POINTERPICK) || bb.hasSpecificMask(db.d.POINTERTAP) || ub.hasSpecificMask(db.d.POINTERTAP) || bb.hasSpecificMask(db.d.POINTERDOUBLETAP) || ub.hasSpecificMask(db.d.POINTERDOUBLETAP);
          !Ub && rb && (Gb = this._initActionManager(Gb, Ob), Gb && (Ub = Gb.hasPickTriggers));
          let Lb = !1;
          if (Ub = Ub && !this._isMultiTouchGesture, Ub) {
            const Ub = hb.button;
            if (Ob.hasSwiped = this._isPointerSwiping(), !Ob.hasSwiped) {
              let Yb = !Eb.ExclusiveDoubleClickMode;
              if (Yb || (Yb = !bb.hasSpecificMask(db.d.POINTERDOUBLETAP) && !ub.hasSpecificMask(db.d.POINTERDOUBLETAP), Yb && !rb.HasSpecificTrigger(6) && (Gb = this._initActionManager(Gb, Ob), Gb && (Yb = !Gb.hasSpecificTrigger(6)))), Yb)(Date.now() - this._previousStartingPointerTime > Eb.DoubleClickDelay || Ub !== this._previousButtonPressed) && (Ob.singleClick = !0, Bb(Ob, this._currentPickResult), Lb = !0);
              else {
                const bb = {
                  evt: hb,
                  clickInfo: Ob,
                  timeoutId: window.setTimeout(this._delayedSimpleClick.bind(this, Ub, Ob, Bb), Eb.DoubleClickDelay)
                };
                this._delayedClicks[Ub] = bb
              }
              let Sb = bb.hasSpecificMask(db.d.POINTERDOUBLETAP) || ub.hasSpecificMask(db.d.POINTERDOUBLETAP);
              !Sb && rb.HasSpecificTrigger(6) && (Gb = this._initActionManager(Gb, Ob), Gb && (Sb = Gb.hasSpecificTrigger(6))), Sb && (Ub === this._previousButtonPressed && Date.now() - this._previousStartingPointerTime < Eb.DoubleClickDelay && !this._doubleClickOccured ? (Ob.hasSwiped || this._isPointerSwiping() ? (this._doubleClickOccured = !1, this._previousStartingPointerTime = this._startingPointerTime, this._previousStartingPointerPosition.x = this._startingPointerPosition.x, this._previousStartingPointerPosition.y = this._startingPointerPosition.y, this._previousButtonPressed = Ub, Eb.ExclusiveDoubleClickMode ? (this._delayedClicks[Ub] && (clearTimeout(this._delayedClicks[Ub]?.timeoutId), this._delayedClicks[Ub] = null), Bb(Ob, this._previousPickResult)) : Bb(Ob, this._currentPickResult)) : (this._previousStartingPointerTime = 0, this._doubleClickOccured = !0, Ob.ja = !0, Ob.ignore = !1, Eb.ExclusiveDoubleClickMode && this._delayedClicks[Ub] && (clearTimeout(this._delayedClicks[Ub]?.timeoutId), this._delayedClicks[Ub] = null), Bb(Ob, this._currentPickResult)), Lb = !0) : (this._doubleClickOccured = !1, this._previousStartingPointerTime = this._startingPointerTime, this._previousStartingPointerPosition.x = this._startingPointerPosition.x, this._previousStartingPointerPosition.y = this._startingPointerPosition.y, this._previousButtonPressed = Ub))
            }
          }
          Lb || Bb(Ob, this._currentPickResult)
        }, this._onPointerMove = bb => {
          if (this._updatePointerPosition(bb), this._latestPointerMoveEvents.set(bb.pointerId, {
              event: bb,
              pointerX: this._pointerX,
              pointerY: this._pointerY,
              unTranslatedPointerX: this._unTranslatedPointerX,
              unTranslatedPointerY: this._unTranslatedPointerY
            }), this._isSwiping || -1 === this._swipeButtonPressed || (this._isSwiping = Math.abs(this._startingPointerPosition.x - this._pointerX) > Eb.DragMovementThreshold || Math.abs(this._startingPointerPosition.y - this._pointerY) > Eb.DragMovementThreshold), Gb.isPointerLock && Gb._verifyPointerLock(), this._checkPrePointerObservable(null, bb, bb.inputIndex >= nb.MouseWheelX && bb.inputIndex <= nb.MouseWheelZ ? db.d.POINTERWHEEL : db.d.POINTERMOVE)) return;
          if (!Ob.cameraToUseForPointers && !Ob.activeCamera) return;
          if (Ob.skipPointerMovePicking) return void this._processPointerMove(new Zb.d, bb);
          this._ensurePointerMovePredicate();
          const ub = Ob._registeredActions > 0 || Ob.constantlyUpdateMeshUnderPointer ? this._pickMove(bb) : null;
          this._processPointerMove(ub, bb)
        }, this._onPointerDown = bb => {
          const ub = this._activePointerIds.indexOf(-1);
          if (-1 === ub ? this._activePointerIds.push(bb.pointerId) : this._activePointerIds[ub] = bb.pointerId, this._activePointerIdsCount++, this._pickedDownMesh = null, this._meshPickProceed = !1, Eb.ExclusiveDoubleClickMode)
            for (let Bb = 0; Bb < this._delayedClicks.length; Bb++)
              if (this._delayedClicks[Bb])
                if (bb.button === Bb) clearTimeout(this._delayedClicks[Bb]?.timeoutId);
                else {
                  const bb = this._delayedClicks[Bb].clickInfo;
                  this._doubleClickOccured = !1, bb.singleClick = !0, bb.ignore = !1;
                  const ub = this._delayedClicks[Bb].evt,
                    hb = db.d.POINTERTAP,
                    Gb = new db.g(hb, ub, this._currentPickResult);
                  Ob.onPointerObservable.hasObservers() && Ob.onPointerObservable.hasSpecificMask(hb) && Ob.onPointerObservable.notifyObservers(Gb, hb), this._delayedClicks[Bb] = null
                } if (this._updatePointerPosition(bb), -1 === this._swipeButtonPressed && (this._swipeButtonPressed = bb.button), Ob.preventDefaultOnPointerDown && Bb && (bb.preventDefault(), Bb.focus()), this._startingPointerPosition.x = this._pointerX, this._startingPointerPosition.y = this._pointerY, this._startingPointerTime = Date.now(), this._checkPrePointerObservable(null, bb, db.d.POINTERDOWN)) return;
          if (!Ob.cameraToUseForPointers && !Ob.activeCamera) return;
          let hb;
          this._pointerCaptures[bb.pointerId] = !0, Ob.pointerDownPredicate || (Ob.pointerDownPredicate = bb => bb.lp && bb.isVisible && bb.isReady() && bb.isEnabled() && (!Ob.cameraToUseForPointers || 0 !== (Ob.cameraToUseForPointers.layerMask & bb.layerMask))), this._pickedDownMesh = null, hb = Ob.skipPointerDownPicking || 0 === Ob._registeredActions && !this._checkForPicking() && !Ob.onPointerDown ? new Zb.d : Ob.xw(this._unTranslatedPointerX, this._unTranslatedPointerY, Ob.pointerDownPredicate, Ob.pointerDownFastCheck, Ob.cameraToUseForPointers, Ob.pointerDownTrianglePredicate), this._processPointerDown(hb, bb)
        }, this._onPointerUp = bb => {
          const ub = this._activePointerIds.indexOf(bb.pointerId); - 1 !== ub && (this._activePointerIds[ub] = -1, this._activePointerIdsCount--, "touch" === bb.pointerType && this._latestPointerMoveEvents.delete(bb.pointerId), this._pickedUpMesh = null, this._meshPickProceed = !1, this._updatePointerPosition(bb), Ob.preventDefaultOnPointerUp && Bb && (bb.preventDefault(), Bb.focus()), this._initClickEvent(Ob.onPrePointerObservable, Ob.onPointerObservable, bb, ((ub, hb) => {
            if (Ob.onPrePointerObservable.hasObservers() && (this._skipPointerTap = !1, !ub.ignore)) {
              if (this._checkPrePointerObservable(null, bb, db.d.POINTERUP)) return this._swipeButtonPressed === bb.button && (this._isSwiping = !1, this._swipeButtonPressed = -1), void(0 === bb.buttons && (this._pointerCaptures[bb.pointerId] = !1));
              ub.hasSwiped || (ub.singleClick && Ob.onPrePointerObservable.hasSpecificMask(db.d.POINTERTAP) && this._checkPrePointerObservable(null, bb, db.d.POINTERTAP) && (this._skipPointerTap = !0), ub.ja && Ob.onPrePointerObservable.hasSpecificMask(db.d.POINTERDOUBLETAP) && this._checkPrePointerObservable(null, bb, db.d.POINTERDOUBLETAP) && (this._skipPointerTap = !0))
            }
            this._pointerCaptures[bb.pointerId] ? (0 === bb.buttons && (this._pointerCaptures[bb.pointerId] = !1), (Ob.cameraToUseForPointers || Ob.activeCamera) && (Ob.pointerUpPredicate || (Ob.pointerUpPredicate = bb => bb.lp && bb.isVisible && bb.isReady() && bb.isEnabled() && (!Ob.cameraToUseForPointers || 0 !== (Ob.cameraToUseForPointers.layerMask & bb.layerMask))), !this._meshPickProceed && (rb && rb.HasTriggers || this._checkForPicking() || Ob.onPointerUp) && this._initActionManager(null, ub), hb || (hb = this._currentPickResult), this._processPointerUp(hb, bb, ub), this._previousPickResult = this._currentPickResult, this._swipeButtonPressed === bb.button && (this._isSwiping = !1, this._swipeButtonPressed = -1))) : this._swipeButtonPressed === bb.button && (this._isSwiping = !1, this._swipeButtonPressed = -1)
          })))
        }, this._onKeyDown = bb => {
          const ub = vb.e.KEYDOWN;
          if (Ob.onPreKeyboardObservable.hasObservers()) {
            const hb = new vb.h(ub, bb);
            if (Ob.onPreKeyboardObservable.notifyObservers(hb, ub), hb.skipOnKeyboardObservable) return
          }
          if (Ob.onKeyboardObservable.hasObservers()) {
            const hb = new vb.l(ub, bb);
            Ob.onKeyboardObservable.notifyObservers(hb, ub)
          }
          Ob.actionManager && Ob.actionManager.processTrigger(14, Xb.CreateNewFromScene(Ob, bb))
        }, this._onKeyUp = bb => {
          const ub = vb.e.KEYUP;
          if (Ob.onPreKeyboardObservable.hasObservers()) {
            const hb = new vb.h(ub, bb);
            if (Ob.onPreKeyboardObservable.notifyObservers(hb, ub), hb.skipOnKeyboardObservable) return
          }
          if (Ob.onKeyboardObservable.hasObservers()) {
            const hb = new vb.l(ub, bb);
            Ob.onKeyboardObservable.notifyObservers(hb, ub)
          }
          Ob.actionManager && Ob.actionManager.processTrigger(15, Xb.CreateNewFromScene(Ob, bb))
        }, this._deviceSourceManager.onDeviceConnectedObservable.add((Bb => {
          Bb.deviceType === jb.Mouse ? Bb.onInputChangedObservable.add((Ob => {
            this._originMouseEvent = Ob, Ob.inputIndex === nb.LeftClick || Ob.inputIndex === nb.MiddleClick || Ob.inputIndex === nb.RightClick || Ob.inputIndex === nb.BrowserBack || Ob.inputIndex === nb.BrowserForward ? ub && 1 === Bb.getInput(Ob.inputIndex) ? this._onPointerDown(Ob) : bb && 0 === Bb.getInput(Ob.inputIndex) && this._onPointerUp(Ob) : hb && (Ob.inputIndex === nb.Move ? this._onPointerMove(Ob) : Ob.inputIndex !== nb.MouseWheelX && Ob.inputIndex !== nb.MouseWheelY && Ob.inputIndex !== nb.MouseWheelZ || this._onPointerMove(Ob))
          })) : Bb.deviceType === jb.Touch ? Bb.onInputChangedObservable.add((Ob => {
            Ob.inputIndex === nb.LeftClick && (ub && 1 === Bb.getInput(Ob.inputIndex) ? (this._onPointerDown(Ob), this._activePointerIdsCount > 1 && (this._isMultiTouchGesture = !0)) : bb && 0 === Bb.getInput(Ob.inputIndex) && (this._onPointerUp(Ob), 0 === this._activePointerIdsCount && (this._isMultiTouchGesture = !1))), hb && Ob.inputIndex === nb.Move && this._onPointerMove(Ob)
          })) : Bb.deviceType === jb.Keyboard && Bb.onInputChangedObservable.add((bb => {
            "keydown" === bb.type ? this._onKeyDown(bb) : "keyup" === bb.type && this._onKeyUp(bb)
          }))
        })), this._alreadyAttached = !0
      }
      detachControl() {
        this._alreadyAttached && (this._deviceSourceManager.dispose(), this._deviceSourceManager = null, this._alreadyAttachedTo && !this._scene.doNotHandleCursors && (this._alreadyAttachedTo.style.cursor = this._scene.defaultCursor), this._alreadyAttached = !1, this._alreadyAttachedTo = null, this._latestPointerMoveEvents.clear())
      }
      setPointerOverMesh(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          hb = arguments.length > 2 ? arguments[2] : void 0,
          Bb = arguments.length > 3 ? arguments[3] : void 0;
        if (this._meshUnderPointerId[ub] === bb && (!bb || !bb._internalAbstractMeshDataInfo._pointerOverDisableMeshTesting)) return;
        const Ob = this._meshUnderPointerId[ub];
        let Gb;
        Ob && (Gb = Ob._getActionManagerForTrigger(10), Gb && Gb.processTrigger(10, new Xb(Ob, this._pointerX, this._pointerY, bb, Bb, {
          pointerId: ub
        }))), bb ? (this._meshUnderPointerId[ub] = bb, this._pointerOverMesh = bb, Gb = bb._getActionManagerForTrigger(9), Gb && Gb.processTrigger(9, new Xb(bb, this._pointerX, this._pointerY, bb, Bb, {
          pointerId: ub,
          pickResult: hb
        }))) : (delete this._meshUnderPointerId[ub], this._pointerOverMesh = null), this._scene.onMeshUnderPointerUpdatedObservable.hasObservers() && this._scene.onMeshUnderPointerUpdatedObservable.notifyObservers({
          mesh: bb,
          pointerId: ub
        })
      }
      getPointerOverMesh() {
        return this.meshUnderPointer
      }
      _invalidateMesh(bb) {
        this._pointerOverMesh === bb && (this._pointerOverMesh = null), this._pickedDownMesh === bb && (this._pickedDownMesh = null), this._pickedUpMesh === bb && (this._pickedUpMesh = null);
        for (const ub in this._meshUnderPointerId) this._meshUnderPointerId[ub] === bb && delete this._meshUnderPointerId[ub]
      }
    }
    Eb.DragMovementThreshold = 10, Eb.LongPressDelay = 500, Eb.DoubleClickDelay = 300, Eb.ExclusiveDoubleClickMode = !1;
    var yb = hb(39411),
      Vb = hb(36893),
      Fb = hb(37390);
    class fb {
      static get UniqueId() {
        const bb = this._UniqueIdCounter;
        return this._UniqueIdCounter++, bb
      }
    }
    fb._UniqueIdCounter = 1;
    var kb = hb(39511),
      Tb = hb(39659),
      cb = hb(36736);
    class Qb {
      constructor() {
        this.pointerDownFastCheck = !1, this.pointerUpFastCheck = !1, this.pointerMoveFastCheck = !1, this.skipPointerMovePicking = !1, this.skipPointerDownPicking = !1, this.skipPointerUpPicking = !1
      }
    }
    var Rb, bu, uu, hu, Bu, Ou, Gu, Uu, Lu, Yu, Su, au, Hu, wu, Zu, Xu, pu, ou, Au, lu, Ku, Wu, Cu, du, ru, ju, nu, Du, xu, zu, gu, iu, vu, tu, Ju, eu, Nu, su, Mu, mu, Iu, Pu, qu, Eu, yu, Vu, Fu, fu, ku, Tu, cu, Qu, Ru, bh = hb(38302),
      uh = hb(36762);
    const hh = new ab.r,
      Bh = new ab.r;
    var Oh;
    ! function(bb) {
      bb[bb.BackwardCompatible = 0] = "BackwardCompatible", bb[bb.Intermediate = 1] = "Intermediate", bb[bb.Aggressive = 2] = "Aggressive"
    }(Oh || (Oh = {}));
    class Gh {
      static DefaultMaterialFactory(bb) {
        throw (0, Cb.m)("StandardMaterial")
      }
      static CollisionCoordinatorFactory() {
        throw (0, Cb.m)("DefaultCollisionCoordinator")
      }
      get clearColor() {
        return this._clearColor
      }
      set clearColor(bb) {
        bb !== this._clearColor && (this._clearColor = bb, this.onClearColorChangedObservable.notifyObservers(this._clearColor))
      }
      get imageProcessingConfiguration() {
        return this._imageProcessingConfiguration
      }
      get performancePriority() {
        return this._performancePriority
      }
      set performancePriority(bb) {
        if (bb !== this._performancePriority) {
          switch (this._performancePriority = bb, bb) {
            case 0:
              this.skipFrustumClipping = !1, this._renderingManager.maintainStateBetweenFrames = !1, this.skipPointerMovePicking = !1, this.autoClear = !0;
              break;
            case 1:
              this.skipFrustumClipping = !1, this._renderingManager.maintainStateBetweenFrames = !1, this.skipPointerMovePicking = !0, this.autoClear = !1;
              break;
            case 2:
              this.skipFrustumClipping = !0, this._renderingManager.maintainStateBetweenFrames = !0, this.skipPointerMovePicking = !0, this.autoClear = !1
          }
          this.onScenePerformancePriorityChangedObservable.notifyObservers(bb)
        }
      }
      set forceWireframe(bb) {
        this._forceWireframe !== bb && (this._forceWireframe = bb, this.markAllMaterialsAsDirty(16))
      }
      get forceWireframe() {
        return this._forceWireframe
      }
      set skipFrustumClipping(bb) {
        this._skipFrustumClipping !== bb && (this._skipFrustumClipping = bb)
      }
      get skipFrustumClipping() {
        return this._skipFrustumClipping
      }
      set forcePointsCloud(bb) {
        this._forcePointsCloud !== bb && (this._forcePointsCloud = bb, this.markAllMaterialsAsDirty(16))
      }
      get forcePointsCloud() {
        return this._forcePointsCloud
      }
      get environmentTexture() {
        return this._environmentTexture
      }
      set environmentTexture(bb) {
        this._environmentTexture !== bb && (this._environmentTexture = bb, this.onEnvironmentTextureChangedObservable.notifyObservers(bb), this.markAllMaterialsAsDirty(1))
      }
      getNodes() {
        let bb = [];
        bb = bb.concat(this.meshes), bb = bb.concat(this.lights), bb = bb.concat(this.cameras), bb = bb.concat(this.transformNodes);
        for (const ub of this.skeletons) bb = bb.concat(ub.bones);
        return bb
      }
      get animationPropertiesOverride() {
        return this._animationPropertiesOverride
      }
      set animationPropertiesOverride(bb) {
        this._animationPropertiesOverride = bb
      }
      set onDispose(bb) {
        this._onDisposeObserver && this.XN.remove(this._onDisposeObserver), this._onDisposeObserver = this.XN.add(bb)
      }
      set beforeRender(bb) {
        this._onBeforeRenderObserver && this.onBeforeRenderObservable.remove(this._onBeforeRenderObserver), bb && (this._onBeforeRenderObserver = this.onBeforeRenderObservable.add(bb))
      }
      set afterRender(bb) {
        this._onAfterRenderObserver && this.onAfterRenderObservable.remove(this._onAfterRenderObserver), bb && (this._onAfterRenderObserver = this.onAfterRenderObservable.add(bb))
      }
      set beforeCameraRender(bb) {
        this._onBeforeCameraRenderObserver && this.onBeforeCameraRenderObservable.remove(this._onBeforeCameraRenderObserver), this._onBeforeCameraRenderObserver = this.onBeforeCameraRenderObservable.add(bb)
      }
      set afterCameraRender(bb) {
        this._onAfterCameraRenderObserver && this.onAfterCameraRenderObservable.remove(this._onAfterCameraRenderObserver), this._onAfterCameraRenderObserver = this.onAfterCameraRenderObservable.add(bb)
      }
      get pointerDownPredicate() {
        return this._pointerPickingConfiguration.pointerDownPredicate
      }
      set pointerDownPredicate(bb) {
        this._pointerPickingConfiguration.pointerDownPredicate = bb
      }
      get pointerUpPredicate() {
        return this._pointerPickingConfiguration.pointerUpPredicate
      }
      set pointerUpPredicate(bb) {
        this._pointerPickingConfiguration.pointerUpPredicate = bb
      }
      get pointerMovePredicate() {
        return this._pointerPickingConfiguration.pointerMovePredicate
      }
      set pointerMovePredicate(bb) {
        this._pointerPickingConfiguration.pointerMovePredicate = bb
      }
      get pointerDownFastCheck() {
        return this._pointerPickingConfiguration.pointerDownFastCheck
      }
      set pointerDownFastCheck(bb) {
        this._pointerPickingConfiguration.pointerDownFastCheck = bb
      }
      get pointerUpFastCheck() {
        return this._pointerPickingConfiguration.pointerUpFastCheck
      }
      set pointerUpFastCheck(bb) {
        this._pointerPickingConfiguration.pointerUpFastCheck = bb
      }
      get pointerMoveFastCheck() {
        return this._pointerPickingConfiguration.pointerMoveFastCheck
      }
      set pointerMoveFastCheck(bb) {
        this._pointerPickingConfiguration.pointerMoveFastCheck = bb
      }
      get skipPointerMovePicking() {
        return this._pointerPickingConfiguration.skipPointerMovePicking
      }
      set skipPointerMovePicking(bb) {
        this._pointerPickingConfiguration.skipPointerMovePicking = bb
      }
      get skipPointerDownPicking() {
        return this._pointerPickingConfiguration.skipPointerDownPicking
      }
      set skipPointerDownPicking(bb) {
        this._pointerPickingConfiguration.skipPointerDownPicking = bb
      }
      get skipPointerUpPicking() {
        return this._pointerPickingConfiguration.skipPointerUpPicking
      }
      set skipPointerUpPicking(bb) {
        this._pointerPickingConfiguration.skipPointerUpPicking = bb
      }
      get unTranslatedPointer() {
        return this._inputManager.unTranslatedPointer
      }
      static get DragMovementThreshold() {
        return Eb.DragMovementThreshold
      }
      static set DragMovementThreshold(bb) {
        Eb.DragMovementThreshold = bb
      }
      static get LongPressDelay() {
        return Eb.LongPressDelay
      }
      static set LongPressDelay(bb) {
        Eb.LongPressDelay = bb
      }
      static get DoubleClickDelay() {
        return Eb.DoubleClickDelay
      }
      static set DoubleClickDelay(bb) {
        Eb.DoubleClickDelay = bb
      }
      static get ExclusiveDoubleClickMode() {
        return Eb.ExclusiveDoubleClickMode
      }
      static set ExclusiveDoubleClickMode(bb) {
        Eb.ExclusiveDoubleClickMode = bb
      }
      get _eyePosition() {
        return this._forcedViewPosition ?? this.activeCamera?.globalPosition ?? ab.q.ZeroReadOnly
      }
      bindEyePosition(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "vEyePosition",
          hb = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const Bb = this._eyePosition,
          Ob = this.useRightHandedSystem === (null != this._mirroredCameraPosition),
          Gb = this.floatingOriginOffset,
          Ub = hh.set(Bb.x, Bb.y, Bb.z, Ob ? -1 : 1),
          Lb = Ub.subtractFromFloatsToRef(Gb.x, Gb.y, Gb.z, 0, Bh);
        return bb && (hb ? bb.setFloat3(ub, Lb.x, Lb.y, Lb.z) : bb.setVector4(ub, Lb)), Ub
      }
      finalizeSceneUbo() {
        const bb = this.getSceneUniformBuffer(),
          ub = this.bindEyePosition(null),
          hb = this.floatingOriginOffset;
        return bb.updateFloat4("vEyePosition", ub.x - hb.x, ub.y - hb.y, ub.z - hb.z, ub.w), bb.update(), bb
      }
      set useRightHandedSystem(bb) {
        this._useRightHandedSystem !== bb && (this._useRightHandedSystem = bb, this.markAllMaterialsAsDirty(16))
      }
      get useRightHandedSystem() {
        return this._useRightHandedSystem
      }
      setStepId(bb) {
        this._currentStepId = bb
      }
      getStepId() {
        return this._currentStepId
      }
      getInternalStep() {
        return this._currentInternalStep
      }
      set fogEnabled(bb) {
        this._fogEnabled !== bb && (this._fogEnabled = bb, this.markAllMaterialsAsDirty(16))
      }
      get fogEnabled() {
        return this._fogEnabled
      }
      set fogMode(bb) {
        this._fogMode !== bb && (this._fogMode = bb, this.markAllMaterialsAsDirty(16))
      }
      get fogMode() {
        return this._fogMode
      }
      get prePass() {
        return !!this.prePassRenderer && this.prePassRenderer.defaultRT.enabled
      }
      set shadowsEnabled(bb) {
        this._shadowsEnabled !== bb && (this._shadowsEnabled = bb, this.markAllMaterialsAsDirty(2))
      }
      get shadowsEnabled() {
        return this._shadowsEnabled
      }
      set lightsEnabled(bb) {
        this._lightsEnabled !== bb && (this._lightsEnabled = bb, this.markAllMaterialsAsDirty(2))
      }
      get lightsEnabled() {
        return this._lightsEnabled
      }
      get activeCameras() {
        return this._activeCameras
      }
      set activeCameras(bb) {
        this._unObserveActiveCameras && (this._unObserveActiveCameras(), this._unObserveActiveCameras = null), bb && (this._unObserveActiveCameras = (0, cb.k)(bb, (() => {
          this.onActiveCamerasChanged.notifyObservers(this)
        }))), this._activeCameras = bb
      }
      get activeCamera() {
        return this._activeCamera
      }
      set activeCamera(bb) {
        bb !== this._activeCamera && (this._activeCamera = bb, this.onActiveCameraChanged.notifyObservers(this))
      }
      get _hasDefaultMaterial() {
        return Gh.DefaultMaterialFactory !== Gh._OriginalDefaultMaterialFactory
      }
      get defaultMaterial() {
        return this._defaultMaterial || (this._defaultMaterial = Gh.DefaultMaterialFactory(this)), this._defaultMaterial
      }
      set defaultMaterial(bb) {
        this._defaultMaterial = bb
      }
      set texturesEnabled(bb) {
        this._texturesEnabled !== bb && (this._texturesEnabled = bb, this.markAllMaterialsAsDirty(1))
      }
      get texturesEnabled() {
        return this._texturesEnabled
      }
      get frameGraph() {
        return this._frameGraph
      }
      set frameGraph(bb) {
        if (this._frameGraph) return this._frameGraph = bb, void(bb || (this.customRenderFunction = this._currentCustomRenderFunction));
        this._frameGraph = bb, bb && (this._currentCustomRenderFunction = this.customRenderFunction, this.customRenderFunction = this._renderWithFrameGraph, this.activeCamera = null)
      }
      set skeletonsEnabled(bb) {
        this._skeletonsEnabled !== bb && (this._skeletonsEnabled = bb, this.markAllMaterialsAsDirty(8))
      }
      get skeletonsEnabled() {
        return this._skeletonsEnabled
      }
      get collisionCoordinator() {
        return this._collisionCoordinator || (this._collisionCoordinator = Gh.CollisionCoordinatorFactory(), this._collisionCoordinator.init(this)), this._collisionCoordinator
      }
      get renderingManager() {
        return this._renderingManager
      }
      get frustumPlanes() {
        return this._frustumPlanes
      }
      _registerTransientComponents() {
        if (this._transientComponents.length > 0) {
          for (const bb of this._transientComponents) bb.register();
          this._transientComponents.length = 0
        }
      }
      bBb(bb) {
        this._components.push(bb), this._transientComponents.push(bb);
        const ub = bb;
        ub.addFromContainer && ub.serialize && this._serializableComponents.push(ub)
      }
      _getComponent(bb) {
        for (const ub of this._components)
          if (ub.name === bb) return ub;
        return null
      }
      get uniqueId() {
        return this._uniqueId
      }
      constructor(bb, ub) {
        this._inputManager = new Eb(this), this.cameraToUseForPointers = null, this._isScene = !0, this._blockEntityCollection = !1, this.autoClear = !0, this.autoClearDepthAndStencil = !0, this._clearColor = new Vb.c(.2, .2, .3, 1), this.onClearColorChangedObservable = new Ub.e, this.ambientColor = new Vb.b(0, 0, 0), this.environmentIntensity = 1, this.iblIntensity = 1, this._performancePriority = 0, this.onScenePerformancePriorityChangedObservable = new Ub.e, this._forceWireframe = !1, this._skipFrustumClipping = !1, this._forcePointsCloud = !1, this.rootNodes = [], this.cameras = [], this.lights = [], this.meshes = [], this.skeletons = [], this.fW = [], this.animations = [], this.animationGroups = [], this.multiMaterials = [], this.materials = [], this.morphTargetManagers = [], this.geometries = [], this.transformNodes = [], this.actionManagers = [], this.objectRenderers = [], this.textures = [], this._environmentTexture = null, this.postProcesses = [], this.effectLayers = [], this.sounds = null, this.layers = [], this.lensFlareSystems = [], this.proceduralTextures = [], this.animationsEnabled = !0, this._animationPropertiesOverride = null, this.useConstantAnimationDeltaTime = !1, this.constantlyUpdateMeshUnderPointer = !1, this.hoverCursor = "pointer", this.defaultCursor = "", this.doNotHandleCursors = !1, this.preventDefaultOnPointerDown = !0, this.preventDefaultOnPointerUp = !0, this.metadata = null, this.reservedDataStore = null, this.disableOfflineSupportExceptionRules = [], this.XN = new Ub.e, this._onDisposeObserver = null, this.onBeforeRenderObservable = new Ub.e, this._onBeforeRenderObserver = null, this.onAfterRenderObservable = new Ub.e, this.onAfterRenderCameraObservable = new Ub.e, this._onAfterRenderObserver = null, this.onBeforeAnimationsObservable = new Ub.e, this.onAfterAnimationsObservable = new Ub.e, this.onBeforeDrawPhaseObservable = new Ub.e, this.onAfterDrawPhaseObservable = new Ub.e, this.onReadyObservable = new Ub.e, this.onBeforeCameraRenderObservable = new Ub.e, this._onBeforeCameraRenderObserver = null, this.onAfterCameraRenderObservable = new Ub.e, this._onAfterCameraRenderObserver = null, this.onBeforeActiveMeshesEvaluationObservable = new Ub.e, this.onAfterActiveMeshesEvaluationObservable = new Ub.e, this.onBeforeParticlesRenderingObservable = new Ub.e, this.onAfterParticlesRenderingObservable = new Ub.e, this.onDataLoadedObservable = new Ub.e, this.onNewCameraAddedObservable = new Ub.e, this.onCameraRemovedObservable = new Ub.e, this.onNewLightAddedObservable = new Ub.e, this.onLightRemovedObservable = new Ub.e, this.onNewGeometryAddedObservable = new Ub.e, this.onGeometryRemovedObservable = new Ub.e, this.onNewTransformNodeAddedObservable = new Ub.e, this.onTransformNodeRemovedObservable = new Ub.e, this.onNewMeshAddedObservable = new Ub.e, this.onMeshRemovedObservable = new Ub.e, this.onNewSkeletonAddedObservable = new Ub.e, this.onSkeletonRemovedObservable = new Ub.e, this.onNewParticleSystemAddedObservable = new Ub.e, this.onParticleSystemRemovedObservable = new Ub.e, this.onNewAnimationGroupAddedObservable = new Ub.e, this.onAnimationGroupRemovedObservable = new Ub.e, this.onNewMaterialAddedObservable = new Ub.e, this.onNewMultiMaterialAddedObservable = new Ub.e, this.onMaterialRemovedObservable = new Ub.e, this.onMultiMaterialRemovedObservable = new Ub.e, this.onNewTextureAddedObservable = new Ub.e, this.onTextureRemovedObservable = new Ub.e, this.onNewFrameGraphAddedObservable = new Ub.e, this.onFrameGraphRemovedObservable = new Ub.e, this.onNewObjectRendererAddedObservable = new Ub.e, this.onObjectRendererRemovedObservable = new Ub.e, this.onNewPostProcessAddedObservable = new Ub.e, this.onPostProcessRemovedObservable = new Ub.e, this.onNewEffectLayerAddedObservable = new Ub.e, this.onEffectLayerRemovedObservable = new Ub.e, this.onBeforeRenderTargetsRenderObservable = new Ub.e, this.onAfterRenderTargetsRenderObservable = new Ub.e, this.onBeforeStepObservable = new Ub.e, this.onAfterStepObservable = new Ub.e, this.onActiveCameraChanged = new Ub.e, this.onActiveCamerasChanged = new Ub.e, this.onBeforeRenderingGroupObservable = new Ub.e, this.onAfterRenderingGroupObservable = new Ub.e, this.onMeshImportedObservable = new Ub.e, this.onAnimationFileImportedObservable = new Ub.e, this.onEnvironmentTextureChangedObservable = new Ub.e, this.onMeshUnderPointerUpdatedObservable = new Ub.e, this._registeredForLateAnimationBindings = new Lb.e(256), this._pointerPickingConfiguration = new Qb, this.onPrePointerObservable = new Ub.e, this.onPointerObservable = new Ub.e, this.onPreKeyboardObservable = new Ub.e, this.onKeyboardObservable = new Ub.e, this._useRightHandedSystem = !1, this._timeAccumulator = 0, this._currentStepId = 0, this._currentInternalStep = 0, this._fogEnabled = !0, this._fogMode = Gh.FOGMODE_NONE, this.fogColor = new Vb.b(.2, .2, .3), this.fogDensity = .1, this.fogStart = 0, this.fogEnd = 1e3, this.needsPreviousWorldMatrices = !1, this._shadowsEnabled = !0, this._lightsEnabled = !0, this._unObserveActiveCameras = null, this._texturesEnabled = !0, this._frameGraph = null, this.frameGraphs = [], this.bq = !0, this.particlesEnabled = !0, this.spritesEnabled = !0, this._skeletonsEnabled = !0, this.lensFlaresEnabled = !0, this.collisionsEnabled = !0, this.gravity = new ab.q(0, -9.807, 0), this.postProcessesEnabled = !0, this.renderTargetsEnabled = !0, this.dumpNextRenderTargets = !1, this.customRenderTargets = [], this.importedMeshesFiles = [], this.probesEnabled = !0, this._meshesForIntersections = new Lb.e(256), this.proceduralTexturesEnabled = !0, this._totalVertices = new yb.b, this._activeIndices = new yb.b, this._activeParticles = new yb.b, this._activeBones = new yb.b, this._animationTime = 0, this.animationTimeScale = 1, this._renderId = 0, this._frameId = 0, this._renderingMeshEvaluationDepth = 0, this._executeWhenReadyTimeoutId = null, this._intermediateRendering = !1, this._defaultFrameBufferCleared = !1, this._viewUpdateFlag = -1, this._projectionUpdateFlag = -1, this._toBeDisposed = new Array(256), this._activeRequests = new Array, this._delayedFileRequests = null, this._pendingData = [], this._isDisposed = !1, this._isDisposing = !1, this._isReadyChecks = [], this.dispatchAllSubMeshesOfActiveMeshes = !1, this._activeMeshes = new Lb.h(256), this._processedMaterials = new Lb.h(256), this._renderTargets = new Lb.e(256), this._materialsRenderTargets = new Lb.e(256), this._activeParticleSystems = new Lb.h(256), this._activeSkeletons = new Lb.e(32), this._softwareSkinnedMeshes = new Lb.e(32), this._activeAnimatables = new Array, this._animationWrites = new Array, this._animationWriteCount = 0, this._animationStepWriteCount = 0, this._animationStepEvaluated = !1, this._transformMatrix = ab.d.Zero(), this.requireLightSorting = !1, this._components = [], this._serializableComponents = [], this._transientComponents = [], this._beforeCameraUpdateStage = lb.g.Create(), this._beforeClearStage = lb.g.Create(), this._beforeRenderTargetClearStage = lb.g.Create(), this._gatherRenderTargetsStage = lb.g.Create(), this._gatherActiveCameraRenderTargetsStage = lb.g.Create(), this._isReadyForMeshStage = lb.g.Create(), this._beforeEvaluateActiveMeshStage = lb.g.Create(), this._evaluateSubMeshStage = lb.g.Create(), this._preActiveMeshStage = lb.g.Create(), this._cameraDrawRenderTargetStage = lb.g.Create(), this._beforeCameraDrawStage = lb.g.Create(), this._beforeRenderTargetDrawStage = lb.g.Create(), this._beforeRenderingGroupDrawStage = lb.g.Create(), this._beforeRenderingMeshStage = lb.g.Create(), this._afterRenderingMeshStage = lb.g.Create(), this._afterRenderingGroupDrawStage = lb.g.Create(), this._afterCameraDrawStage = lb.g.Create(), this._afterCameraPostProcessStage = lb.g.Create(), this._afterRenderTargetDrawStage = lb.g.Create(), this._afterRenderTargetPostProcessStage = lb.g.Create(), this._afterRenderStage = lb.g.Create(), this._pointerMoveStage = lb.g.Create(), this._pointerDownStage = lb.g.Create(), this._pointerUpStage = lb.g.Create(), this._geometriesByUniqueId = null, this._uniqueId = 0, this._defaultMeshCandidates = {
          data: [],
          length: 0
        }, this._defaultSubMeshCandidates = {
          data: [],
          length: 0
        }, this.onReadyTimeoutObservable = new Ub.e, this.onReadyTimeoutDuration = 12e4, this._timeoutChecksStartTime = 0, this._floatingOriginScene = void 0, this._preventFreeActiveMeshesAndRenderingGroups = !1, this._activeMeshesFrozen = !1, this._activeMeshesFrozenButKeepClipping = !1, this._skipEvaluateActiveMeshesCompletely = !1, this._freezeActiveMeshesCancel = null, this._useCurrentFrameBuffer = !1, this._allowPostProcessClearColor = !0, this.getDeterministicFrameTime = () => this._engine.getTimeStep(), this._getFloatingOriginScene = () => this._floatingOriginScene, this._registeredActions = 0, this._blockMaterialDirtyMechanism = !1, this._perfCollector = null, this.activeCameras = [], this._uniqueId = this.getUniqueId();
        const hb = {
          useGeometryUniqueIdsMap: !0,
          useMaterialMeshMap: !0,
          useClonedMeshMap: !0,
          virtual: !1,
          defaultCameraLayerMask: 268435455,
          defaultRenderableLayerMask: 268435455,
          ...ub
        };
        this.defaultCameraLayerMask = hb.defaultCameraLayerMask, this.defaultRenderableLayerMask = hb.defaultRenderableLayerMask, bb = this._engine = bb || Wb.b.LastCreatedEngine, hb.virtual ? bb._virtualScenes.push(this) : (Wb.b._LastCreatedScene = this, bb.scenes.push(this)), (bb.getCreationOptions().useLargeWorldRendering || ub?.useFloatingOrigin) && ((0, ob.d)(), this._floatingOriginScene = this, ob.c.ZN = this._getFloatingOriginScene), this._uid = null, this._renderingManager = new Ab.c(this), pb.c && (this.postProcessManager = new pb.c(this)), (0, Kb.k)() && this.attachControl(), this._createUbo(), Hb.b && (this._imageProcessingConfiguration = new Hb.b), this.setDefaultCandidateProviders(), hb.useGeometryUniqueIdsMap && (this._geometriesByUniqueId = {}), this.useMaterialMeshMap = hb.useMaterialMeshMap, this.useClonedMeshMap = hb.useClonedMeshMap, ub && ub.virtual || bb.onNewSceneAddedObservable.notifyObservers(this)
      }
      getClassName() {
        return "Scene"
      }
      _getDefaultMeshCandidates() {
        return this._defaultMeshCandidates.data = this.meshes, this._defaultMeshCandidates.length = this.meshes.length, this._defaultMeshCandidates
      }
      _getDefaultSubMeshCandidates(bb) {
        return this._defaultSubMeshCandidates.data = bb.FW, this._defaultSubMeshCandidates.length = bb.FW.length, this._defaultSubMeshCandidates
      }
      setDefaultCandidateProviders() {
        this.getActiveMeshCandidates = () => this._getDefaultMeshCandidates(), this.getActiveSubMeshCandidates = bb => this._getDefaultSubMeshCandidates(bb), this.getIntersectingSubMeshCandidates = (bb, ub) => this._getDefaultSubMeshCandidates(bb), this.getCollidingSubMeshCandidates = (bb, ub) => this._getDefaultSubMeshCandidates(bb)
      }
      get meshUnderPointer() {
        return this._inputManager.meshUnderPointer
      }
      get pointerX() {
        return this._inputManager.pointerX
      }
      set pointerX(bb) {
        this._inputManager.pointerX = bb
      }
      get pointerY() {
        return this._inputManager.pointerY
      }
      set pointerY(bb) {
        this._inputManager.pointerY = bb
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
      isCachedMaterialInvalid(bb, ub) {
        let hb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        return this._cachedEffect !== ub || this._cachedMaterial !== bb || this._cachedVisibility !== hb
      }
      UX() {
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
      simulatePointerMove(bb, ub) {
        return this._inputManager.simulatePointerMove(bb, ub), this
      }
      simulatePointerDown(bb, ub) {
        return this._inputManager.simulatePointerDown(bb, ub), this
      }
      simulatePointerUp(bb, ub, hb) {
        return this._inputManager.simulatePointerUp(bb, ub, hb), this
      }
      isPointerCaptured() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return this._inputManager.isPointerCaptured(bb)
      }
      attachControl() {
        let bb = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          ub = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          hb = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this._inputManager.attachControl(bb, ub, hb)
      }
      detachControl() {
        this._inputManager.detachControl()
      }
      isReady() {
        let bb, ub = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        if (this._isDisposed) return !1;
        const hb = this.UX(),
          Bb = hb.currentRenderPassId;
        hb.currentRenderPassId = this.activeCamera?.renderPassId ?? Bb;
        let Ob = !0;
        for (this._pendingData.length > 0 && (Ob = !1), this.prePassRenderer?.update(), this.useOrderIndependentTransparency && this.depthPeelingRenderer && Ob && (Ob = this.depthPeelingRenderer.isReady()), ub && (this._processedMaterials.reset(), this._materialsRenderTargets.reset()), bb = 0; bb < this.meshes.length; bb++) {
          const Bb = this.meshes[bb];
          if (!Bb.FW || 0 === Bb.FW.length) continue;
          if (!Bb.isReady(!0)) {
            Ob = !1;
            continue
          }
          const Gb = Bb.hasThinInstances || "InstancedMesh" === Bb.getClassName() || "InstancedLinesMesh" === Bb.getClassName() || hb.getCaps().instancedArrays && Bb.instances.length > 0;
          for (let bb = 0, ub = this._isReadyForMeshStage; bb < ub.length; bb++) {
            ub[bb].action(Bb, Gb) || (Ob = !1)
          }
          if (!ub) continue;
          const Ub = Bb.material || this.defaultMaterial;
          if (Ub)
            if (Ub._storeEffectOnSubMeshes)
              for (const bb of Bb.FW) {
                const ub = bb.HX();
                ub && ub.hasRenderTargetTextures && null != ub.getRenderTargetTextures && -1 === this._processedMaterials.indexOf(ub) && (this._processedMaterials.push(ub), this._materialsRenderTargets.concatWithNoDuplicate(ub.getRenderTargetTextures()))
              } else Ub.hasRenderTargetTextures && null != Ub.getRenderTargetTextures && -1 === this._processedMaterials.indexOf(Ub) && (this._processedMaterials.push(Ub), this._materialsRenderTargets.concatWithNoDuplicate(Ub.getRenderTargetTextures()))
        }
        if (ub) {
          for (bb = 0; bb < this._materialsRenderTargets.length; ++bb) {
            this._materialsRenderTargets.data[bb].isReadyForRendering() || (Ob = !1)
          }
          for (bb = 0; bb < this.customRenderTargets.length; ++bb) {
            this.customRenderTargets[bb].isReadyForRendering() || (Ob = !1)
          }
        }
        for (bb = 0; bb < this.geometries.length; bb++) {
          2 === this.geometries[bb].delayLoadState && (Ob = !1)
        }
        if (this.activeCameras && this.activeCameras.length > 0)
          for (const Gb of this.activeCameras) Gb.isReady(!0) || (Ob = !1);
        else this.activeCamera && (this.activeCamera.isReady(!0) || (Ob = !1));
        for (const Gb of this.fW) Gb.isReady() || (Ob = !1);
        if (this.proceduralTexturesEnabled)
          for (const Gb of this.proceduralTextures) Gb.isReady() || (Ob = !1);
        if (this.layers)
          for (const Gb of this.layers) Gb.isReady() || (Ob = !1);
        if (this.effectLayers)
          for (const Gb of this.effectLayers) Gb.isLayerReady() || (Ob = !1);
        for (const Gb of this._isReadyChecks) Gb.isReady() || (Ob = !1);
        return hb.areAllEffectsReady() || (Ob = !1), hb.currentRenderPassId = Bb, Ob
      }
      resetCachedMaterial() {
        this._cachedMaterial = null, this._cachedEffect = null, this._cachedVisibility = null
      }
      registerBeforeRender(bb) {
        this.onBeforeRenderObservable.add(bb)
      }
      unregisterBeforeRender(bb) {
        this.onBeforeRenderObservable.removeCallback(bb)
      }
      registerAfterRender(bb) {
        this.onAfterRenderObservable.add(bb)
      }
      unregisterAfterRender(bb) {
        this.onAfterRenderObservable.removeCallback(bb)
      }
      _executeOnceBeforeRender(bb) {
        const ub = () => {
          bb(), setTimeout((() => {
            this.unregisterBeforeRender(ub)
          }))
        };
        this.registerBeforeRender(ub)
      }
      executeOnceBeforeRender(bb, ub) {
        void 0 !== ub ? setTimeout((() => {
          this._executeOnceBeforeRender(bb)
        }), ub) : this._executeOnceBeforeRender(bb)
      }
      addPendingData(bb) {
        this._pendingData.push(bb)
      }
      removePendingData(bb) {
        const ub = this.isLoading,
          hb = this._pendingData.indexOf(bb); - 1 !== hb && this._pendingData.splice(hb, 1), ub && !this.isLoading && this.onDataLoadedObservable.notifyObservers(this)
      }
      getWaitingItemsCount() {
        return this._pendingData.length
      }
      get isLoading() {
        return this._pendingData.length > 0
      }
      addIsReadyCheck(bb) {
        -1 === this._isReadyChecks.indexOf(bb) && this._isReadyChecks.push(bb)
      }
      removeIsReadyCheck(bb) {
        const ub = this._isReadyChecks.indexOf(bb); - 1 !== ub && this._isReadyChecks.splice(ub, 1)
      }
      executeWhenReady(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this.onReadyObservable.addOnce(bb), null === this._executeWhenReadyTimeoutId && this._checkIsReady(ub)
      }
      async whenReadyAsync() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return await new Promise((ub => {
          this.executeWhenReady((() => {
            ub()
          }), bb)
        }))
      }
      _clearReadynessChecksData() {
        this._timeoutChecksStartTime = 0, this.onReadyTimeoutObservable.clear(), this.onReadyObservable.clear(), this._executeWhenReadyTimeoutId = null
      }
      _checkIsReady() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this._registerTransientComponents(), 0 === this._timeoutChecksStartTime) this._timeoutChecksStartTime = Gb.d.Now;
        else if (this.onReadyTimeoutDuration > 0 && Gb.d.Now - this._timeoutChecksStartTime > this.onReadyTimeoutDuration) return this.onReadyTimeoutObservable.notifyObservers(this), void this._clearReadynessChecksData();
        if (this.isReady(bb)) return this.onReadyObservable.notifyObservers(this), void this._clearReadynessChecksData();
        this._isDisposed ? this._clearReadynessChecksData() : this._executeWhenReadyTimeoutId = setTimeout((() => {
          this.incrementRenderId(), this._checkIsReady(bb)
        }), 100)
      }
      get animatables() {
        return this._activeAnimatables
      }
      resetLastAnimationTimeFrame() {
        this._animationTimeLast = Gb.d.Now
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
      setTransformMatrix(bb, ub, hb, Bb) {
        this._multiviewSceneUboIsActive = !!(hb && Bb && this._multiviewSceneUbo), this._viewUpdateFlag === bb.updateFlag && this._projectionUpdateFlag === ub.updateFlag || (this._viewUpdateFlag = bb.updateFlag, this._projectionUpdateFlag = ub.updateFlag, this._viewMatrix = bb, this._projectionMatrix = ub, this._inverseProjectionMatrix || (this._inverseProjectionMatrix = new ab.d), this._projectionMatrix.invertToRef(this._inverseProjectionMatrix), this._viewMatrix.multiplyToRef(this._projectionMatrix, this._transformMatrix), this._frustumPlanes ? Fb.b.GetPlanesToRef(this._transformMatrix, this._frustumPlanes) : this._frustumPlanes = Fb.b.GetPlanes(this._transformMatrix), this._multiviewSceneUboIsActive && this._multiviewSceneUbo.useUbo ? this._updateMultiviewUbo(hb, Bb) : this._sceneUbo.useUbo && (this._sceneUbo.S_("viewProjection", this._transformMatrix), this._sceneUbo.S_("view", this._viewMatrix), this._sceneUbo.S_("projection", this._projectionMatrix), this._sceneUbo.S_("inverseProjection", this._inverseProjectionMatrix)))
      }
      getSceneUniformBuffer() {
        return this._multiviewSceneUboIsActive && this._multiviewSceneUbo ? this._multiviewSceneUbo : this._sceneUbo
      }
      createSceneUniformBuffer(bb, ub) {
        const hb = "boolean" === typeof ub ? ub : ub?.trackUBOsInFrame,
          Bb = new wb.c(this._engine, void 0, !1, bb ?? "Xp", void 0, hb);
        return Bb.addUniform("viewProjection", 16), Bb.addUniform("view", 16), Bb.addUniform("projection", 16), Bb.addUniform("vEyePosition", 4), Bb.addUniform("inverseProjection", 16), Bb
      }
      setSceneUniformBuffer(bb) {
        this._sceneUbo = bb, this._viewUpdateFlag = -1, this._projectionUpdateFlag = -1
      }
      get floatingOriginMode() {
        return void 0 !== this._floatingOriginScene
      }
      get floatingOriginOffset() {
        return this.floatingOriginMode ? this._eyePosition : ab.q.ZeroReadOnly
      }
      getUniqueId() {
        return fb.UniqueId
      }
      pBb(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (!this._blockEntityCollection && (this.meshes.push(bb), bb._resyncLightSources(), bb.parent || bb._addToSceneRootNodes(), Ob.c.SetImmediate((() => {
            this.onNewMeshAddedObservable.notifyObservers(bb)
          })), ub)) {
          const ub = bb.getChildMeshes();
          for (const bb of ub) this.pBb(bb)
        }
      }
      vN(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const hb = this.meshes.indexOf(bb);
        if (-1 !== hb && (this.meshes.splice(hb, 1), bb.parent || bb._removeFromSceneRootNodes()), this._inputManager._invalidateMesh(bb), this.onMeshRemovedObservable.notifyObservers(bb), ub) {
          const ub = bb.getChildMeshes();
          for (const bb of ub) this.vN(bb)
        }
        return hb
      }
      addTransformNode(bb) {
        this._blockEntityCollection || bb.ZN() === this && -1 !== bb._indexInSceneTransformNodesArray || (bb._indexInSceneTransformNodesArray = this.transformNodes.length, this.transformNodes.push(bb), bb.parent || bb._addToSceneRootNodes(), this.onNewTransformNodeAddedObservable.notifyObservers(bb))
      }
      removeTransformNode(bb) {
        const ub = bb._indexInSceneTransformNodesArray;
        if (-1 !== ub) {
          if (ub !== this.transformNodes.length - 1) {
            const bb = this.transformNodes[this.transformNodes.length - 1];
            this.transformNodes[ub] = bb, bb._indexInSceneTransformNodesArray = ub
          }
          bb._indexInSceneTransformNodesArray = -1, this.transformNodes.pop(), bb.parent || bb._removeFromSceneRootNodes()
        }
        return this.onTransformNodeRemovedObservable.notifyObservers(bb), ub
      }
      removeSkeleton(bb) {
        const ub = this.skeletons.indexOf(bb);
        return -1 !== ub && (this.skeletons.splice(ub, 1), this.onSkeletonRemovedObservable.notifyObservers(bb), this._executeActiveContainerCleanup(this._activeSkeletons)), ub
      }
      removeMorphTargetManager(bb) {
        const ub = this.morphTargetManagers.indexOf(bb);
        return -1 !== ub && this.morphTargetManagers.splice(ub, 1), ub
      }
      removeLight(bb) {
        const ub = this.lights.indexOf(bb);
        if (-1 !== ub) {
          for (const ub of this.meshes) ub._removeLightSource(bb, !1);
          this.lights.splice(ub, 1), this.sortLightsByPriority(), bb.parent || bb._removeFromSceneRootNodes(), this.onLightRemovedObservable.notifyObservers(bb)
        }
        return ub
      }
      removeCamera(bb) {
        const ub = this.cameras.indexOf(bb);
        if (-1 !== ub && (this.cameras.splice(ub, 1), bb.parent || bb._removeFromSceneRootNodes()), this.activeCameras) {
          const ub = this.activeCameras.indexOf(bb); - 1 !== ub && this.activeCameras.splice(ub, 1)
        }
        return this.activeCamera === bb && (this.cameras.length > 0 ? this.activeCamera = this.cameras[0] : this.activeCamera = null), this.onCameraRemovedObservable.notifyObservers(bb), ub
      }
      removeParticleSystem(bb) {
        const ub = this.fW.indexOf(bb);
        return -1 !== ub && (this.fW.splice(ub, 1), this._executeActiveContainerCleanup(this._activeParticleSystems)), this.onParticleSystemRemovedObservable.notifyObservers(bb), ub
      }
      removeAnimation(bb) {
        const ub = this.animations.indexOf(bb);
        return -1 !== ub && this.animations.splice(ub, 1), ub
      }
      stopAnimation(bb, ub, hb) {}
      removeAnimationGroup(bb) {
        const ub = this.animationGroups.indexOf(bb);
        return -1 !== ub && this.animationGroups.splice(ub, 1), this.onAnimationGroupRemovedObservable.notifyObservers(bb), ub
      }
      removeMultiMaterial(bb) {
        const ub = this.multiMaterials.indexOf(bb);
        return -1 !== ub && this.multiMaterials.splice(ub, 1), this.onMultiMaterialRemovedObservable.notifyObservers(bb), ub
      }
      removeMaterial(bb) {
        const ub = bb._indexInSceneMaterialArray;
        if (-1 !== ub && ub < this.materials.length) {
          if (ub !== this.materials.length - 1) {
            const bb = this.materials[this.materials.length - 1];
            this.materials[ub] = bb, bb._indexInSceneMaterialArray = ub
          }
          bb._indexInSceneMaterialArray = -1, this.materials.pop()
        }
        return this.onMaterialRemovedObservable.notifyObservers(bb), ub
      }
      removeActionManager(bb) {
        const ub = this.actionManagers.indexOf(bb);
        return -1 !== ub && this.actionManagers.splice(ub, 1), ub
      }
      removeTexture(bb) {
        const ub = this.textures.indexOf(bb);
        return -1 !== ub && this.textures.splice(ub, 1), this.onTextureRemovedObservable.notifyObservers(bb), ub
      }
      removeFrameGraph(bb) {
        const ub = this.frameGraphs.indexOf(bb);
        return -1 !== ub && this.frameGraphs.splice(ub, 1), this.onFrameGraphRemovedObservable.notifyObservers(bb), ub
      }
      removeObjectRenderer(bb) {
        const ub = this.objectRenderers.indexOf(bb);
        return -1 !== ub && this.objectRenderers.splice(ub, 1), this.onObjectRendererRemovedObservable.notifyObservers(bb), ub
      }
      removePostProcess(bb) {
        const ub = this.postProcesses.indexOf(bb);
        return -1 !== ub && this.postProcesses.splice(ub, 1), this.onPostProcessRemovedObservable.notifyObservers(bb), ub
      }
      removeEffectLayer(bb) {
        const ub = this.effectLayers.indexOf(bb);
        return -1 !== ub && this.effectLayers.splice(ub, 1), this.onEffectLayerRemovedObservable.notifyObservers(bb), ub
      }
      addLight(bb) {
        if (!this._blockEntityCollection) {
          this.lights.push(bb), this.sortLightsByPriority(), bb.parent || bb._addToSceneRootNodes();
          for (const ub of this.meshes) - 1 === ub.lightSources.indexOf(bb) && (ub.lightSources.push(bb), ub._resyncLightSources());
          Ob.c.SetImmediate((() => {
            this.onNewLightAddedObservable.notifyObservers(bb)
          }))
        }
      }
      sortLightsByPriority() {
        this.requireLightSorting && this.lights.sort(Tb.d.CompareLightsPriority)
      }
      addCamera(bb) {
        this._blockEntityCollection || (this.cameras.push(bb), Ob.c.SetImmediate((() => {
          this.onNewCameraAddedObservable.notifyObservers(bb)
        })), bb.parent || bb._addToSceneRootNodes())
      }
      addSkeleton(bb) {
        this._blockEntityCollection || (this.skeletons.push(bb), Ob.c.SetImmediate((() => {
          this.onNewSkeletonAddedObservable.notifyObservers(bb)
        })))
      }
      addParticleSystem(bb) {
        this._blockEntityCollection || (this.fW.push(bb), Ob.c.SetImmediate((() => {
          this.onNewParticleSystemAddedObservable.notifyObservers(bb)
        })))
      }
      addAnimation(bb) {
        this._blockEntityCollection || this.animations.push(bb)
      }
      addAnimationGroup(bb) {
        this._blockEntityCollection || (this.animationGroups.push(bb), Ob.c.SetImmediate((() => {
          this.onNewAnimationGroupAddedObservable.notifyObservers(bb)
        })))
      }
      addMultiMaterial(bb) {
        this._blockEntityCollection || (this.multiMaterials.push(bb), Ob.c.SetImmediate((() => {
          this.onNewMultiMaterialAddedObservable.notifyObservers(bb)
        })))
      }
      addMaterial(bb) {
        this._blockEntityCollection || bb.ZN() === this && -1 !== bb._indexInSceneMaterialArray || (bb._indexInSceneMaterialArray = this.materials.length, this.materials.push(bb), Ob.c.SetImmediate((() => {
          this.onNewMaterialAddedObservable.notifyObservers(bb)
        })))
      }
      addMorphTargetManager(bb) {
        this._blockEntityCollection || this.morphTargetManagers.push(bb)
      }
      addGeometry(bb) {
        this._blockEntityCollection || (this._geometriesByUniqueId && (this._geometriesByUniqueId[bb.uniqueId] = this.geometries.length), this.geometries.push(bb))
      }
      addActionManager(bb) {
        this.actionManagers.push(bb)
      }
      addTexture(bb) {
        this._blockEntityCollection || (this.textures.push(bb), this.onNewTextureAddedObservable.notifyObservers(bb))
      }
      addFrameGraph(bb) {
        this.frameGraphs.push(bb), Ob.c.SetImmediate((() => {
          this.onNewFrameGraphAddedObservable.notifyObservers(bb)
        }))
      }
      addObjectRenderer(bb) {
        this.objectRenderers.push(bb), Ob.c.SetImmediate((() => {
          this.onNewObjectRendererAddedObservable.notifyObservers(bb)
        }))
      }
      addPostProcess(bb) {
        this._blockEntityCollection || (this.postProcesses.push(bb), Ob.c.SetImmediate((() => {
          this.onNewPostProcessAddedObservable.notifyObservers(bb)
        })))
      }
      addEffectLayer(bb) {
        this._blockEntityCollection || (this.effectLayers.push(bb), Ob.c.SetImmediate((() => {
          this.onNewEffectLayerAddedObservable.notifyObservers(bb)
        })))
      }
      switchActiveCamera(bb) {
        let ub = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this._engine.getInputElement() && (this.activeCamera && this.activeCamera.detachControl(), this.activeCamera = bb, ub && bb.attachControl())
      }
      setActiveCameraById(bb) {
        const ub = this.getCameraById(bb);
        return ub ? (this.activeCamera = ub, ub) : null
      }
      setActiveCameraByName(bb) {
        const ub = this.getCameraByName(bb);
        return ub ? (this.activeCamera = ub, ub) : null
      }
      getAnimationGroupByName(bb) {
        for (let ub = 0; ub < this.animationGroups.length; ub++)
          if (this.animationGroups[ub].name === bb) return this.animationGroups[ub];
        return null
      }
      _getMaterial(bb, ub) {
        for (let hb = 0; hb < this.materials.length; hb++) {
          const bb = this.materials[hb];
          if (ub(bb)) return bb
        }
        if (bb)
          for (let hb = 0; hb < this.multiMaterials.length; hb++) {
            const bb = this.multiMaterials[hb];
            if (ub(bb)) return bb
          }
        return null
      }
      getMaterialByUniqueID(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this.getMaterialByUniqueId(bb, ub)
      }
      getMaterialByUniqueId(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this._getMaterial(ub, (ub => ub.uniqueId === bb))
      }
      getMaterialById(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this._getMaterial(ub, (ub => ub.id === bb))
      }
      getMaterialByName(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this._getMaterial(ub, (ub => ub.name === bb))
      }
      getLastMaterialById(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        for (let hb = this.materials.length - 1; hb >= 0; hb--)
          if (this.materials[hb].id === bb) return this.materials[hb];
        if (ub)
          for (let hb = this.multiMaterials.length - 1; hb >= 0; hb--)
            if (this.multiMaterials[hb].id === bb) return this.multiMaterials[hb];
        return null
      }
      getTextureByUniqueId(bb) {
        for (let ub = 0; ub < this.textures.length; ub++)
          if (this.textures[ub].uniqueId === bb) return this.textures[ub];
        return null
      }
      getTextureByName(bb) {
        for (let ub = 0; ub < this.textures.length; ub++)
          if (this.textures[ub].name === bb) return this.textures[ub];
        return null
      }
      getCameraById(bb) {
        for (let ub = 0; ub < this.cameras.length; ub++)
          if (this.cameras[ub].id === bb) return this.cameras[ub];
        return null
      }
      getCameraByUniqueId(bb) {
        for (let ub = 0; ub < this.cameras.length; ub++)
          if (this.cameras[ub].uniqueId === bb) return this.cameras[ub];
        return null
      }
      getCameraByName(bb) {
        for (let ub = 0; ub < this.cameras.length; ub++)
          if (this.cameras[ub].name === bb) return this.cameras[ub];
        return null
      }
      getBoneById(bb) {
        for (let ub = 0; ub < this.skeletons.length; ub++) {
          const hb = this.skeletons[ub];
          for (let ub = 0; ub < hb.bones.length; ub++)
            if (hb.bones[ub].id === bb) return hb.bones[ub]
        }
        return null
      }
      getBoneByName(bb) {
        for (let ub = 0; ub < this.skeletons.length; ub++) {
          const hb = this.skeletons[ub];
          for (let ub = 0; ub < hb.bones.length; ub++)
            if (hb.bones[ub].name === bb) return hb.bones[ub]
        }
        return null
      }
      getLightByName(bb) {
        for (let ub = 0; ub < this.lights.length; ub++)
          if (this.lights[ub].name === bb) return this.lights[ub];
        return null
      }
      getLightById(bb) {
        for (let ub = 0; ub < this.lights.length; ub++)
          if (this.lights[ub].id === bb) return this.lights[ub];
        return null
      }
      getLightByUniqueId(bb) {
        for (let ub = 0; ub < this.lights.length; ub++)
          if (this.lights[ub].uniqueId === bb) return this.lights[ub];
        return null
      }
      getParticleSystemById(bb) {
        for (let ub = 0; ub < this.fW.length; ub++)
          if (this.fW[ub].id === bb) return this.fW[ub];
        return null
      }
      getGeometryById(bb) {
        for (let ub = 0; ub < this.geometries.length; ub++)
          if (this.geometries[ub].id === bb) return this.geometries[ub];
        return null
      }
      _getGeometryByUniqueId(bb) {
        if (this._geometriesByUniqueId) {
          const ub = this._geometriesByUniqueId[bb];
          if (void 0 !== ub) return this.geometries[ub]
        } else
          for (let ub = 0; ub < this.geometries.length; ub++)
            if (this.geometries[ub].uniqueId === bb) return this.geometries[ub];
        return null
      }
      getFrameGraphByName(bb) {
        for (let ub = 0; ub < this.frameGraphs.length; ub++)
          if (this.frameGraphs[ub].name === bb) return this.frameGraphs[ub];
        return null
      }
      pushGeometry(bb, ub) {
        return !(!ub && this._getGeometryByUniqueId(bb.uniqueId)) && (this.addGeometry(bb), Ob.c.SetImmediate((() => {
          this.onNewGeometryAddedObservable.notifyObservers(bb)
        })), !0)
      }
      removeGeometry(bb) {
        let ub;
        if (this._geometriesByUniqueId) {
          if (ub = this._geometriesByUniqueId[bb.uniqueId], void 0 === ub) return !1
        } else if (ub = this.geometries.indexOf(bb), ub < 0) return !1;
        if (ub !== this.geometries.length - 1) {
          const bb = this.geometries[this.geometries.length - 1];
          bb && (this.geometries[ub] = bb, this._geometriesByUniqueId && (this._geometriesByUniqueId[bb.uniqueId] = ub))
        }
        return this._geometriesByUniqueId && (this._geometriesByUniqueId[bb.uniqueId] = void 0), this.geometries.pop(), this.onGeometryRemovedObservable.notifyObservers(bb), !0
      }
      getGeometries() {
        return this.geometries
      }
      getMeshById(bb) {
        for (let ub = 0; ub < this.meshes.length; ub++)
          if (this.meshes[ub].id === bb) return this.meshes[ub];
        return null
      }
      getMeshesById(bb) {
        return this.meshes.filter((function(ub) {
          return ub.id === bb
        }))
      }
      getTransformNodeById(bb) {
        for (let ub = 0; ub < this.transformNodes.length; ub++)
          if (this.transformNodes[ub].id === bb) return this.transformNodes[ub];
        return null
      }
      getTransformNodeByUniqueId(bb) {
        for (let ub = 0; ub < this.transformNodes.length; ub++)
          if (this.transformNodes[ub].uniqueId === bb) return this.transformNodes[ub];
        return null
      }
      getTransformNodesById(bb) {
        return this.transformNodes.filter((function(ub) {
          return ub.id === bb
        }))
      }
      getMeshByUniqueId(bb) {
        for (let ub = 0; ub < this.meshes.length; ub++)
          if (this.meshes[ub].uniqueId === bb) return this.meshes[ub];
        return null
      }
      getLastMeshById(bb) {
        for (let ub = this.meshes.length - 1; ub >= 0; ub--)
          if (this.meshes[ub].id === bb) return this.meshes[ub];
        return null
      }
      getLastTransformNodeById(bb) {
        for (let ub = this.transformNodes.length - 1; ub >= 0; ub--)
          if (this.transformNodes[ub].id === bb) return this.transformNodes[ub];
        return null
      }
      getLastEntryById(bb) {
        let ub;
        for (ub = this.meshes.length - 1; ub >= 0; ub--)
          if (this.meshes[ub].id === bb) return this.meshes[ub];
        for (ub = this.transformNodes.length - 1; ub >= 0; ub--)
          if (this.transformNodes[ub].id === bb) return this.transformNodes[ub];
        for (ub = this.cameras.length - 1; ub >= 0; ub--)
          if (this.cameras[ub].id === bb) return this.cameras[ub];
        for (ub = this.lights.length - 1; ub >= 0; ub--)
          if (this.lights[ub].id === bb) return this.lights[ub];
        for (ub = this.skeletons.length - 1; ub >= 0; ub--) {
          const hb = this.skeletons[ub];
          for (let ub = hb.bones.length - 1; ub >= 0; ub--)
            if (hb.bones[ub].id === bb) return hb.bones[ub]
        }
        return null
      }
      getNodeById(bb) {
        const ub = this.getMeshById(bb);
        if (ub) return ub;
        const hb = this.getTransformNodeById(bb);
        if (hb) return hb;
        const Bb = this.getLightById(bb);
        if (Bb) return Bb;
        const Ob = this.getCameraById(bb);
        if (Ob) return Ob;
        const Gb = this.getBoneById(bb);
        return Gb || null
      }
      getNodeByName(bb) {
        const ub = this.getMeshByName(bb);
        if (ub) return ub;
        const hb = this.getTransformNodeByName(bb);
        if (hb) return hb;
        const Bb = this.getLightByName(bb);
        if (Bb) return Bb;
        const Ob = this.getCameraByName(bb);
        if (Ob) return Ob;
        const Gb = this.getBoneByName(bb);
        return Gb || null
      }
      getMeshByName(bb) {
        for (let ub = 0; ub < this.meshes.length; ub++)
          if (this.meshes[ub].name === bb) return this.meshes[ub];
        return null
      }
      getTransformNodeByName(bb) {
        for (let ub = 0; ub < this.transformNodes.length; ub++)
          if (this.transformNodes[ub].name === bb) return this.transformNodes[ub];
        return null
      }
      getLastSkeletonById(bb) {
        for (let ub = this.skeletons.length - 1; ub >= 0; ub--)
          if (this.skeletons[ub].id === bb) return this.skeletons[ub];
        return null
      }
      getSkeletonByUniqueId(bb) {
        for (let ub = 0; ub < this.skeletons.length; ub++)
          if (this.skeletons[ub].uniqueId === bb) return this.skeletons[ub];
        return null
      }
      getSkeletonById(bb) {
        for (let ub = 0; ub < this.skeletons.length; ub++)
          if (this.skeletons[ub].id === bb) return this.skeletons[ub];
        return null
      }
      getSkeletonByName(bb) {
        for (let ub = 0; ub < this.skeletons.length; ub++)
          if (this.skeletons[ub].name === bb) return this.skeletons[ub];
        return null
      }
      getMorphTargetManagerById(bb) {
        for (let ub = 0; ub < this.morphTargetManagers.length; ub++)
          if (this.morphTargetManagers[ub].uniqueId === bb) return this.morphTargetManagers[ub];
        return null
      }
      getMorphTargetById(bb) {
        for (let ub = 0; ub < this.morphTargetManagers.length; ++ub) {
          const hb = this.morphTargetManagers[ub];
          for (let ub = 0; ub < hb.numTargets; ++ub) {
            const Bb = hb.getTarget(ub);
            if (Bb.id === bb) return Bb
          }
        }
        return null
      }
      getMorphTargetByName(bb) {
        for (let ub = 0; ub < this.morphTargetManagers.length; ++ub) {
          const hb = this.morphTargetManagers[ub];
          for (let ub = 0; ub < hb.numTargets; ++ub) {
            const Bb = hb.getTarget(ub);
            if (Bb.name === bb) return Bb
          }
        }
        return null
      }
      getPostProcessByName(bb) {
        for (let ub = 0; ub < this.postProcesses.length; ++ub) {
          const hb = this.postProcesses[ub];
          if (hb.name === bb) return hb
        }
        return null
      }
      isActiveMesh(bb) {
        return -1 !== this._activeMeshes.indexOf(bb)
      }
      get uid() {
        return this._uid || (this._uid = Bb.k.RandomId()), this._uid
      }
      addExternalData(bb, ub) {
        return this._externalData || (this._externalData = new Yb), this._externalData.add(bb, ub)
      }
      getExternalData(bb) {
        return this._externalData ? this._externalData.get(bb) : null
      }
      getOrAddExternalDataWithFactory(bb, ub) {
        return this._externalData || (this._externalData = new Yb), this._externalData.getOrAddWithFactory(bb, ub)
      }
      removeExternalData(bb) {
        return this._externalData.remove(bb)
      }
      _evaluateSubMesh(bb, ub, hb, Bb) {
        if (Bb || bb.isInFrustum(this._frustumPlanes)) {
          for (let Bb = 0, Ob = this._evaluateSubMeshStage; Bb < Ob.length; Bb++) {
            Ob[Bb].action(ub, bb)
          }
          const hb = bb.HX();
          null !== hb && void 0 !== hb && (hb.hasRenderTargetTextures && null != hb.getRenderTargetTextures && -1 === this._processedMaterials.indexOf(hb) && (this._processedMaterials.push(hb), this._materialsRenderTargets.concatWithNoDuplicate(hb.getRenderTargetTextures())), this._renderingManager.dispatch(bb, ub, hb))
        }
      }
      freeProcessedMaterials() {
        this._processedMaterials.dispose()
      }
      get blockfreeActiveMeshesAndRenderingGroups() {
        return this._preventFreeActiveMeshesAndRenderingGroups
      }
      set blockfreeActiveMeshesAndRenderingGroups(bb) {
        this._preventFreeActiveMeshesAndRenderingGroups !== bb && (bb && (this.freeActiveMeshes(), this.freeRenderingGroups()), this._preventFreeActiveMeshesAndRenderingGroups = bb)
      }
      freeActiveMeshes() {
        if (!this.blockfreeActiveMeshesAndRenderingGroups && (this._activeMeshes.dispose(), this.activeCamera && this.activeCamera._activeMeshes && this.activeCamera._activeMeshes.dispose(), this.activeCameras))
          for (let bb = 0; bb < this.activeCameras.length; bb++) {
            const ub = this.activeCameras[bb];
            ub && ub._activeMeshes && ub._activeMeshes.dispose()
          }
      }
      freeRenderingGroups() {
        if (!this.blockfreeActiveMeshesAndRenderingGroups && (this._renderingManager && this._renderingManager.freeRenderingGroups(), this.textures))
          for (let bb = 0; bb < this.textures.length; bb++) {
            const ub = this.textures[bb];
            ub && ub.renderList && ub.freeRenderingGroups()
          }
      }
      _isInIntermediateRendering() {
        return this._intermediateRendering
      }
      _isInRenderingMeshEvaluation() {
        return this._renderingMeshEvaluationDepth > 0
      }
      freezeActiveMeshes() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          ub = arguments.length > 1 ? arguments[1] : void 0,
          hb = arguments.length > 2 ? arguments[2] : void 0,
          Bb = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
          Gb = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (this.frameGraph) {
          this._renderWithFrameGraph(!0, !1, !0);
          const Ub = this.frameGraph.getTasksByClassName(["FrameGraphObjectRendererTask", "FrameGraphGeometryRendererTask"]);
          for (const bb of Ub) bb.objectRenderer._freezeActiveMeshes(Bb);
          return this._freezeActiveMeshesCancel = (0, Ob.g)((() => {
            let bb = !0,
              ub = !0;
            for (const hb of Ub) bb && (bb = hb.objectRenderer._isFrozen), ub && (ub = null !== hb.objectRenderer._freezeActiveMeshesCancel);
            if (bb) return !0;
            if (!ub) throw new Error("Freezing active meshes was cancelled");
            return !1
          }), (() => {
            this._freezeActiveMeshesCancel = null, this._activeMeshesFrozen = !0, this._activeMeshesFrozenButKeepClipping = Gb, this._skipEvaluateActiveMeshesCompletely = bb, ub?.()
          }), ((bb, ub) => {
            if (this._freezeActiveMeshesCancel = null, this.unfreezeActiveMeshes(), ub) {
              const ub = "Scene: Timeout while waiting for meshes to be frozen.";
              hb ? hb(ub) : (bh.b.Error(ub), bb && bh.b.Error(bb))
            } else {
              const ub = "Scene: An unexpected error occurred while trying to freeze active meshes.";
              hb ? hb(ub) : (bh.b.Error(ub), bb && (bh.b.Error(bb), bb.stack && bh.b.Error(bb.stack)))
            }
          })), this
        }
        return this.executeWhenReady((() => {
          if (this.activeCamera) {
            if (this._frustumPlanes || this.updateTransformMatrix(), this._evaluateActiveMeshes(), this._activeMeshesFrozen = !0, this._activeMeshesFrozenButKeepClipping = Gb, this._skipEvaluateActiveMeshesCompletely = bb, Bb)
              for (let bb = 0; bb < this._activeMeshes.length; bb++) this._activeMeshes.data[bb]._freeze();
            ub && ub()
          } else hb && hb("No active camera found")
        })), this
      }
      unfreezeActiveMeshes() {
        for (let bb = 0; bb < this.meshes.length; bb++) {
          const ub = this.meshes[bb];
          ub._internalAbstractMeshDataInfo && (ub._internalAbstractMeshDataInfo._isActive = !1)
        }
        if (this._freezeActiveMeshesCancel?.(), this._freezeActiveMeshesCancel = null, this.frameGraph) {
          const bb = this.frameGraph.getTasksByClassName(["FrameGraphObjectRendererTask", "FrameGraphGeometryRendererTask"]);
          for (const ub of bb) ub.objectRenderer._unfreezeActiveMeshes()
        } else
          for (let bb = 0; bb < this._activeMeshes.length; bb++) this._activeMeshes.data[bb]._unFreeze();
        return this._activeMeshesFrozen = !1, this
      }
      _executeActiveContainerCleanup(bb) {
        (!this._engine.snapshotRendering || 1 !== this._engine.snapshotRenderingMode) && this._activeMeshesFrozen && this._activeMeshes.length || this.onBeforeRenderObservable.addOnce((() => bb.dispose()))
      }
      _evaluateActiveMeshes() {
        if (this._engine.snapshotRendering && 1 === this._engine.snapshotRenderingMode) return void(this._activeMeshes.length > 0 && (this.activeCamera?._activeMeshes.reset(), this._activeMeshes.reset(), this._renderingManager.reset(), this._processedMaterials.reset(), this._activeParticleSystems.reset(), this._activeSkeletons.reset(), this._softwareSkinnedMeshes.reset()));
        if (this._activeMeshesFrozen && this._activeMeshes.length) {
          if (!this._skipEvaluateActiveMeshesCompletely) {
            const bb = this._activeMeshes.length;
            for (let ub = 0; ub < bb; ub++) {
              this._activeMeshes.data[ub].computeWorldMatrix()
            }
          }
          if (this._activeParticleSystems) {
            const bb = this._activeParticleSystems.length;
            for (let ub = 0; ub < bb; ub++) this._activeParticleSystems.data[ub].animate()
          }
          return void this._renderingManager.resetSprites()
        }
        if (!this.activeCamera) return;
        this.onBeforeActiveMeshesEvaluationObservable.notifyObservers(this), this.activeCamera._activeMeshes.reset(), this._activeMeshes.reset(), this._renderingManager.reset(), this._processedMaterials.reset(), this._activeParticleSystems.reset(), this._activeSkeletons.reset(), this._softwareSkinnedMeshes.reset(), this._materialsRenderTargets.reset();
        for (let Ob = 0, Gb = this._beforeEvaluateActiveMeshStage; Ob < Gb.length; Ob++) {
          Gb[Ob].action()
        }
        const bb = this.getActiveMeshCandidates(),
          ub = bb.length,
          hb = yb.b.Enabled,
          Bb = this.customLODSelector;
        for (let Ob = 0; Ob < ub; Ob++) {
          const ub = bb.data[Ob],
            Gb = !Bb && !ub.pN && !ub._internalMeshDataInfo?._LODLevels.length;
          let Ub, Lb;
          if ((Gb || (Ub = ub._internalAbstractMeshDataInfo._currentLOD.get(this.activeCamera), Ub ? Ub[1] = -1 : (Ub = [ub, -1], ub._internalAbstractMeshDataInfo._currentLOD.set(this.activeCamera, Ub))), !ub.isBlocked) && (hb && this._totalVertices.addCount(ub.getTotalVertices(), !1), ub.isReady() && ub.isEnabled() && !ub.pa.hasAZeroComponent)) {
            if (ub.computeWorldMatrix(), ub.actionManager && ub.actionManager.hasSpecificTriggers2(12, 13) && this._meshesForIntersections.pushNoDuplicate(ub), Gb) Lb = ub;
            else if (Lb = Bb ? Bb(ub, this.activeCamera) : ub.getLOD(this.activeCamera), Ub[0] = Lb, Ub[1] = this._frameId, void 0 === Lb || null === Lb) continue;
            if (Lb !== ub && 0 !== Lb.billboardMode && Lb.computeWorldMatrix(), ub._preActivate(), ub.isVisible && ub.visibility > 0 && 0 !== (ub.layerMask & this.activeCamera.layerMask) && (this._skipFrustumClipping || ub.LX || ub.isInFrustum(this._frustumPlanes))) {
              this._activeMeshes.push(ub), this.activeCamera._activeMeshes.push(ub), Lb !== ub && Lb._activate(this._renderId, !1);
              for (let bb = 0, hb = this._preActiveMeshStage; bb < hb.length; bb++) {
                hb[bb].action(ub)
              }
              ub._activate(this._renderId, !1) && (ub.pN ? ub._internalAbstractMeshDataInfo._actAsRegularMesh && (Lb = ub) : Lb._internalAbstractMeshDataInfo._onlyForInstances = !1, Lb._internalAbstractMeshDataInfo._isActive = !0, this._activeMesh(ub, Lb)), ub._postActivate()
            }
          }
        }
        if (this.onAfterActiveMeshesEvaluationObservable.notifyObservers(this), this.particlesEnabled) {
          this.onBeforeParticlesRenderingObservable.notifyObservers(this);
          for (let bb = 0; bb < this.fW.length; bb++) {
            const ub = this.fW[bb];
            if (!ub.isStarted() || !ub.emitter) continue;
            const hb = ub.emitter;
            hb.position && !hb.isEnabled() || (this._activeParticleSystems.push(ub), ub.animate(), this._renderingManager.dispatchParticles(ub))
          }
          this.onAfterParticlesRenderingObservable.notifyObservers(this)
        }
      }
      _prepareSkeleton(bb) {
        this._skeletonsEnabled && bb.skeleton && (this._activeSkeletons.pushNoDuplicate(bb.skeleton) && (bb.skeleton.prepare(), this._activeBones.addCount(bb.skeleton.bones.length, !1)), bb.computeBonesUsingShaders || this._softwareSkinnedMeshes.pushNoDuplicate(bb) && this.frameGraph && bb.applySkeleton(bb.skeleton))
      }
      _activeMesh(bb, ub) {
        this._prepareSkeleton(ub);
        let hb = bb.UOb || bb.pN || this.dispatchAllSubMeshesOfActiveMeshes || this._skipFrustumClipping || ub.LX;
        if (ub && ub.FW && ub.FW.length > 0) {
          const Bb = this.getActiveSubMeshCandidates(ub),
            Ob = Bb.length;
          hb = hb || 1 === Ob;
          for (let Gb = 0; Gb < Ob; Gb++) {
            const Ob = Bb.data[Gb];
            this._evaluateSubMesh(Ob, ub, bb, hb)
          }
        }
      }
      updateTransformMatrix(bb) {
        const ub = this.activeCamera;
        if (ub)
          if (ub._renderingMultiview) {
            const hb = ub._rigCameras[0],
              Bb = ub._rigCameras[1];
            this.setTransformMatrix(hb.getViewMatrix(), hb.getProjectionMatrix(bb), Bb.getViewMatrix(), Bb.getProjectionMatrix(bb))
          } else this.setTransformMatrix(ub.getViewMatrix(), ub.getProjectionMatrix(bb))
      }
      _bindFrameBuffer(bb) {
        let ub = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this._useCurrentFrameBuffer || (bb && bb._multiviewTexture ? bb._multiviewTexture._bindFrameBuffer() : bb && bb.outputRenderTarget ? bb.outputRenderTarget._bindFrameBuffer() : this._engine._currentFrameBufferIsDefaultFrameBuffer() || this._engine.restoreDefaultFramebuffer()), ub && this._clearFrameBuffer(bb)
      }
      _clearFrameBuffer(bb) {
        if (bb && bb._multiviewTexture);
        else if (bb && bb.outputRenderTarget && !bb._renderingMultiview) {
          const ub = bb.outputRenderTarget;
          ub.onClearObservable.hasObservers() ? ub.onClearObservable.notifyObservers(this._engine) : ub.skipInitialClear || bb.isRightCamera || (this.autoClear && this._engine.clear(ub.clearColor || this._clearColor, !ub._cleared, !0, !0), ub._cleared = !0)
        } else this._defaultFrameBufferCleared ? this._engine.clear(null, !1, !0, !0) : (this._defaultFrameBufferCleared = !0, this._clear())
      }
      _renderForCamera(bb, ub) {
        let hb = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        if (bb && bb._skipRendering) return;
        const Ob = this._engine;
        if (this._activeCamera = bb, !this.activeCamera) throw new Error("Active camera not set");
        if (Ob.setViewport(this.activeCamera.viewport), this.resetCachedMaterial(), this._renderId++, !this.prePass && hb) {
          let ub = !0;
          bb._renderingMultiview && bb.outputRenderTarget && (ub = bb.outputRenderTarget.skipInitialClear, this.autoClear && (this._defaultFrameBufferCleared = !1, bb.outputRenderTarget.skipInitialClear = !1)), this._bindFrameBuffer(this._activeCamera), bb._renderingMultiview && bb.outputRenderTarget && (bb.outputRenderTarget.skipInitialClear = ub)
        }
        this.updateTransformMatrix(), this.onBeforeCameraRenderObservable.notifyObservers(this.activeCamera), this._engine.currentRenderPassId = bb.outputRenderTarget?.renderPassId ?? bb.renderPassId ?? 0, this._evaluateActiveMeshes();
        for (let Bb = 0; Bb < this._softwareSkinnedMeshes.length; Bb++) {
          const bb = this._softwareSkinnedMeshes.data[Bb];
          bb.applySkeleton(bb.skeleton)
        }
        this.onBeforeRenderTargetsRenderObservable.notifyObservers(this), this._renderTargets.concatWithNoDuplicate(this._materialsRenderTargets), bb.customRenderTargets && bb.customRenderTargets.length > 0 && this._renderTargets.concatWithNoDuplicate(bb.customRenderTargets), ub && ub.customRenderTargets && ub.customRenderTargets.length > 0 && this._renderTargets.concatWithNoDuplicate(ub.customRenderTargets), this.environmentTexture && this.environmentTexture.isRenderTarget && this._renderTargets.pushNoDuplicate(this.environmentTexture);
        for (let Bb = 0, Lb = this._gatherActiveCameraRenderTargetsStage; Bb < Lb.length; Bb++) {
          Lb[Bb].action(this._renderTargets)
        }
        let Gb = !1;
        if (this.renderTargetsEnabled) {
          let bb;
          if (this._intermediateRendering = !0, this._renderTargets.length > 0) {
            Bb.k.StartPerformanceCounter("Render targets", this._renderTargets.length > 0);
            const ub = this.getBoundingBoxRenderer?.();
            for (let hb = 0; hb < this._renderTargets.length; hb++) {
              const Bb = this._renderTargets.data[hb];
              if (Bb._shouldRender()) {
                this._renderId++;
                const hb = Bb.activeCamera && Bb.activeCamera !== this.activeCamera;
                ub && !bb && (bb = ub.renderList.length > 0 ? ub.renderList.data.slice() : [], bb.length = ub.renderList.length), Bb.render(hb, this.dumpNextRenderTargets), Gb = !0
              }
            }
            ub && bb && (ub.renderList.data = bb, ub.renderList.length = bb.length), Bb.k.EndPerformanceCounter("Render targets", this._renderTargets.length > 0), this._renderId++
          }
          if (this._cameraDrawRenderTargetStage.length > 0) {
            const ub = this.getBoundingBoxRenderer?.();
            ub && !bb && (bb = ub.renderList.length > 0 ? ub.renderList.data.slice() : [], bb.length = ub.renderList.length);
            for (let bb = 0, hb = this._cameraDrawRenderTargetStage; bb < hb.length; bb++) {
              Gb = hb[bb].action(this.activeCamera) || Gb
            }
            ub && bb && (ub.renderList.data = bb, ub.renderList.length = bb.length)
          }
          this._intermediateRendering = !1
        }
        Gb && !this.prePass && (this._bindFrameBuffer(this._activeCamera, !1), this.updateTransformMatrix()), this.onAfterRenderTargetsRenderObservable.notifyObservers(this), !this.postProcessManager || bb._multiviewTexture || this.prePass || this.postProcessManager._prepareFrame();
        for (let Bb = 0, Lb = this._beforeCameraDrawStage; Bb < Lb.length; Bb++) {
          Lb[Bb].action(this.activeCamera)
        }
        this.onBeforeDrawPhaseObservable.notifyObservers(this);
        const Ub = Ob.snapshotRendering && 1 === Ob.snapshotRenderingMode;
        Ub && this.finalizeSceneUbo(), this._renderingManager.render(null, null, !0, !Ub), this.onAfterDrawPhaseObservable.notifyObservers(this);
        for (let Bb = 0, Lb = this._afterCameraDrawStage; Bb < Lb.length; Bb++) {
          Lb[Bb].action(this.activeCamera)
        }
        if (this.postProcessManager && !bb._multiviewTexture) {
          const ub = bb.outputRenderTarget ? bb.outputRenderTarget.renderTarget : void 0;
          this.postProcessManager._finalizeFrame(bb.isIntermediate, ub)
        }
        for (let Bb = 0, Lb = this._afterCameraPostProcessStage; Bb < Lb.length; Bb++) {
          Lb[Bb].action(this.activeCamera)
        }
        this._renderTargets.reset(), this.onAfterCameraRenderObservable.notifyObservers(this.activeCamera)
      }
      _processSubCameras(bb) {
        let ub = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (0 === bb.cameraRigMode || bb._renderingMultiview) return bb._renderingMultiview && !this._multiviewSceneUbo && this._createMultiviewUbo(), this._renderForCamera(bb, void 0, ub), void this.onAfterRenderCameraObservable.notifyObservers(bb);
        if (bb._useMultiviewToSingleView) this._renderMultiviewToSingleView(bb);
        else {
          this.onBeforeCameraRenderObservable.notifyObservers(bb);
          for (let ub = 0; ub < bb._rigCameras.length; ub++) this._renderForCamera(bb._rigCameras[ub], bb)
        }
        this._activeCamera = bb, this.updateTransformMatrix(), this.onAfterRenderCameraObservable.notifyObservers(bb)
      }
      _checkIntersections() {
        for (let bb = 0; bb < this._meshesForIntersections.length; bb++) {
          const ub = this._meshesForIntersections.data[bb];
          if (ub.actionManager)
            for (let bb = 0; ub.actionManager && bb < ub.actionManager.actions.length; bb++) {
              const hb = ub.actionManager.actions[bb];
              if (12 === hb.trigger || 13 === hb.trigger) {
                const bb = hb.getTriggerParameter(),
                  Bb = bb.mesh ? bb.mesh : bb,
                  Ob = Bb.bOb(ub, bb.usePreciseIntersection),
                  Gb = ub._intersectionsInProgress.indexOf(Bb);
                Ob && -1 === Gb ? 12 === hb.trigger ? (hb._executeCurrent(Xb.CreateNew(ub, void 0, Bb)), ub._intersectionsInProgress.push(Bb)) : 13 === hb.trigger && ub._intersectionsInProgress.push(Bb) : !Ob && Gb > -1 && (13 === hb.trigger && hb._executeCurrent(Xb.CreateNew(ub, void 0, Bb)), ub.actionManager.hasSpecificTrigger(13, (bb => {
                  const ub = bb.mesh ? bb.mesh : bb;
                  return Bb === ub
                })) && 13 !== hb.trigger || ub._intersectionsInProgress.splice(Gb, 1))
              }
            }
        }
      }
      _advancePhysicsEngineStep(bb) {}
      _animate(bb) {}
      animate() {
        if (this._engine.isDeterministicLockStep()) {
          let bb = Math.max(Gh.MinDeltaTime, Math.min(this._engine.getDeltaTime(), Gh.MaxDeltaTime)) + this._timeAccumulator;
          const ub = this._engine.getTimeStep(),
            hb = 1e3 / ub / 1e3;
          let Bb = 0;
          const Ob = this._engine.getLockstepMaxSteps();
          let Gb = Math.floor(bb / ub);
          for (Gb = Math.min(Gb, Ob); bb > 0 && Bb < Gb;) this.onBeforeStepObservable.notifyObservers(this), this._animationRatio = ub * hb, this._animate(ub), this.onAfterAnimationsObservable.notifyObservers(this), this.bq && this._advancePhysicsEngineStep(ub), this.onAfterStepObservable.notifyObservers(this), this._currentStepId++, Bb++, bb -= ub;
          this._timeAccumulator = bb < 0 ? 0 : bb
        } else {
          const bb = this.useConstantAnimationDeltaTime ? 16 : Math.max(Gh.MinDeltaTime, Math.min(this._engine.getDeltaTime(), Gh.MaxDeltaTime));
          this._animationRatio = .06 * bb, this._animate(), this.onAfterAnimationsObservable.notifyObservers(this), this.bq && this._advancePhysicsEngineStep(bb)
        }
      }
      _clear() {
        (this.autoClearDepthAndStencil || this.autoClear) && this._engine.clear(this._clearColor, this.autoClear || this.forceWireframe || this.forcePointsCloud, this.autoClearDepthAndStencil, this.autoClearDepthAndStencil)
      }
      _checkCameraRenderTarget(bb) {
        if (bb?.outputRenderTarget && !bb?.isRigCamera && (bb.outputRenderTarget._cleared = !1), bb?.rigCameras?.length)
          for (let ub = 0; ub < bb.rigCameras.length; ++ub) {
            const hb = bb.rigCameras[ub].outputRenderTarget;
            hb && (hb._cleared = !1)
          }
      }
      resetDrawCache(bb) {
        if (this.meshes)
          for (const ub of this.meshes) ub.resetDrawCache(bb)
      }
      _renderWithFrameGraph() {
        let bb = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          ub = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (this.activeCamera = null, this.activeCameras = null, bb)
          for (const hb of this.cameras)
            if (hb.update(), 0 !== hb.cameraRigMode)
              for (let bb = 0; bb < hb._rigCameras.length; bb++) hb._rigCameras[bb].update();
        this.onBeforeRenderObservable.notifyObservers(this), this._renderingMeshEvaluationDepth++;
        try {
          this._renderWithFrameGraphAfterBeforeRender(ub)
        } finally {
          this._renderingMeshEvaluationDepth--
        }
      }
      _renderWithFrameGraphAfterBeforeRender(bb) {
        this.onBeforeRenderTargetsRenderObservable.notifyObservers(this), this._renderTargets.reset();
        const ub = this._frameGraph?.findMainCamera() ?? null;
        if (this.renderTargetsEnabled) {
          this.environmentTexture && this.environmentTexture.isRenderTarget && this._renderTargets.pushNoDuplicate(this.environmentTexture), this._renderTargets.concatWithNoDuplicate(this.customRenderTargets), Bb.k.StartPerformanceCounter("Custom render targets", this._renderTargets.length > 0);
          for (let bb = 0; bb < this._renderTargets.length; bb++) {
            const hb = this._renderTargets.data[bb],
              Bb = hb.activeCamera || ub;
            this._renderRenderTarget(hb, Bb, !0, this.dumpNextRenderTargets)
          }
          Bb.k.EndPerformanceCounter("Custom render targets", this._renderTargets.length > 0), this._renderId++
        }
        this.onAfterRenderTargetsRenderObservable.notifyObservers(this);
        for (let hb = 0, Bb = this._beforeClearStage; hb < Bb.length; hb++) {
          Bb[hb].action()
        }
        if (this._engine.snapshotRendering && 1 === this._engine.snapshotRenderingMode) this._activeParticleSystems.reset(), this._activeSkeletons.reset(), this._softwareSkinnedMeshes.reset();
        else {
          const ub = this.getActiveMeshCandidates(),
            hb = ub.length;
          if (this._activeMeshesFrozen) {
            if (!this._skipEvaluateActiveMeshesCompletely)
              for (let bb = 0; bb < hb; bb++) {
                const hb = ub.data[bb];
                hb._internalAbstractMeshDataInfo._wasActiveLastFrame && hb.computeWorldMatrix()
              }
            if (this.particlesEnabled) {
              const bb = this._activeParticleSystems.length;
              for (let ub = 0; ub < bb; ub++) this._activeParticleSystems.data[ub].animate()
            }
          } else {
            this._activeParticleSystems.reset(), this._activeSkeletons.reset(), this._softwareSkinnedMeshes.reset();
            for (let Bb = 0; Bb < hb; Bb++) {
              const hb = ub.data[Bb];
              hb._internalAbstractMeshDataInfo._wasActiveLastFrame = !1, hb.isBlocked || (this._totalVertices.addCount(hb.getTotalVertices(), !1), hb.isReady() && hb.isEnabled() && !hb.pa.hasAZeroComponent && (hb.computeWorldMatrix(bb), hb.actionManager && hb.actionManager.hasSpecificTriggers2(12, 13) && this._meshesForIntersections.pushNoDuplicate(hb)))
            }
            if (this.particlesEnabled)
              for (let bb = 0; bb < this.fW.length; bb++) {
                const ub = this.fW[bb];
                if (!ub.isStarted() || !ub.emitter) continue;
                const hb = ub.emitter;
                hb.position && !hb.isEnabled() || (this._activeParticleSystems.push(ub), ub.animate())
              }
          }
        }
        this.frameGraph?.execute()
      }
      _renderRenderTarget(bb, ub) {
        let hb = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Bb = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (this._intermediateRendering = !0, bb._shouldRender()) {
          if (this._renderId++, this.activeCamera = ub, !this.activeCamera) throw new Error("Active camera not set");
          this._engine.setViewport(this.activeCamera.viewport), this.updateTransformMatrix(), bb.render(hb, Bb)
        }
        this._intermediateRendering = !1
      }
      render() {
        let bb = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          ub = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this.tC) return;
        const hb = this._renderingMeshEvaluationDepth;
        try {
          this._renderFrame(bb, ub)
        } finally {
          this._renderingMeshEvaluationDepth = hb
        }
      }
      _renderFrame(bb, ub) {
        if (this.onReadyObservable.hasObservers() && null === this._executeWhenReadyTimeoutId && this._checkIsReady(), ob.c.ZN = this._getFloatingOriginScene, this._frameId++, this._defaultFrameBufferCleared = !1, this._checkCameraRenderTarget(this.activeCamera), this.activeCameras?.length)
          for (const hb of this.activeCameras) this._checkCameraRenderTarget(hb);
        this._registerTransientComponents(), this._activeParticles.fetchNewFrame(), this._totalVertices.fetchNewFrame(), this._activeIndices.fetchNewFrame(), this._activeBones.fetchNewFrame(), this._meshesForIntersections.reset(), this.resetCachedMaterial(), this.onBeforeAnimationsObservable.notifyObservers(this), this.actionManager && this.actionManager.processTrigger(11), ub || this.animate();
        for (let hb = 0, Bb = this._beforeCameraUpdateStage; hb < Bb.length; hb++) {
          Bb[hb].action()
        }
        if (bb)
          if (this.activeCameras && this.activeCameras.length > 0)
            for (let hb = 0; hb < this.activeCameras.length; hb++) {
              const bb = this.activeCameras[hb];
              if (bb.update(), 0 !== bb.cameraRigMode)
                for (let ub = 0; ub < bb._rigCameras.length; ub++) bb._rigCameras[ub].update()
            } else if (this.activeCamera && (this.activeCamera.update(), 0 !== this.activeCamera.cameraRigMode))
              for (let hb = 0; hb < this.activeCamera._rigCameras.length; hb++) this.activeCamera._rigCameras[hb].update();
        if (this.customRenderFunction) this._renderId++, this._engine.currentRenderPassId = 0, this._renderingMeshEvaluationDepth++, this.customRenderFunction(bb, ub);
        else {
          this.onBeforeRenderObservable.notifyObservers(this), this._renderingMeshEvaluationDepth++, this.onBeforeRenderTargetsRenderObservable.notifyObservers(this);
          const bb = this.activeCameras?.length ? this.activeCameras[0] : this.activeCamera;
          if (this.renderTargetsEnabled) {
            Bb.k.StartPerformanceCounter("Custom render targets", this.customRenderTargets.length > 0);
            for (let ub = 0; ub < this.customRenderTargets.length; ub++) {
              const hb = this.customRenderTargets[ub],
                Bb = hb.activeCamera || this.activeCamera;
              this._renderRenderTarget(hb, Bb, bb !== Bb, this.dumpNextRenderTargets)
            }
            Bb.k.EndPerformanceCounter("Custom render targets", this.customRenderTargets.length > 0), this._renderId++
          }
          this._engine.currentRenderPassId = bb?.renderPassId ?? 0, this.activeCamera = bb, this._activeCamera && 22 !== this._activeCamera.cameraRigMode && !this.prePass && this._bindFrameBuffer(this._activeCamera, !1), this.onAfterRenderTargetsRenderObservable.notifyObservers(this);
          for (let ub = 0, hb = this._beforeClearStage; ub < hb.length; ub++) {
            hb[ub].action()
          }
          this._clearFrameBuffer(this.activeCamera);
          for (let ub = 0, hb = this._gatherRenderTargetsStage; ub < hb.length; ub++) {
            hb[ub].action(this._renderTargets)
          }
          if (this.activeCameras && this.activeCameras.length > 0)
            for (let ub = 0; ub < this.activeCameras.length; ub++) this._processSubCameras(this.activeCameras[ub], ub > 0);
          else {
            if (!this.activeCamera) throw new Error("No camera defined");
            this._processSubCameras(this.activeCamera, !!this.activeCamera.outputRenderTarget)
          }
        }
        this._inputManager._updateMeshUnderPointer(), this._checkIntersections();
        for (let hb = 0, Bb = this._afterRenderStage; hb < Bb.length; hb++) {
          Bb[hb].action()
        }
        if (this.afterRender && this.afterRender(), this.onAfterRenderObservable.notifyObservers(this), this._toBeDisposed.length) {
          for (let bb = 0; bb < this._toBeDisposed.length; bb++) {
            const ub = this._toBeDisposed[bb];
            ub && ub.dispose()
          }
          this._toBeDisposed.length = 0
        }
        this.dumpNextRenderTargets && (this.dumpNextRenderTargets = !1), this._activeBones.addCount(0, !0), this._activeIndices.addCount(0, !0), this._activeParticles.addCount(0, !0), this._engine.restoreDefaultFramebuffer()
      }
      freezeMaterials() {
        for (let bb = 0; bb < this.materials.length; bb++) this.materials[bb].freeze()
      }
      unfreezeMaterials() {
        for (let bb = 0; bb < this.materials.length; bb++) this.materials[bb].unfreeze()
      }
      dispose() {
        if (this.tC) return;
        if (this._isDisposing = !0, this.beforeRender = null, this.afterRender = null, this.metadata = null, this.skeletons.length = 0, this.morphTargetManagers.length = 0, this._transientComponents.length = 0, this._isReadyForMeshStage.clear(), this._beforeEvaluateActiveMeshStage.clear(), this._evaluateSubMeshStage.clear(), this._preActiveMeshStage.clear(), this._cameraDrawRenderTargetStage.clear(), this._beforeCameraDrawStage.clear(), this._beforeRenderTargetDrawStage.clear(), this._beforeRenderingGroupDrawStage.clear(), this._beforeRenderingMeshStage.clear(), this._afterRenderingMeshStage.clear(), this._afterRenderingGroupDrawStage.clear(), this._afterCameraDrawStage.clear(), this._afterRenderTargetDrawStage.clear(), this._afterRenderStage.clear(), this._beforeCameraUpdateStage.clear(), this._beforeClearStage.clear(), this._gatherRenderTargetsStage.clear(), this._gatherActiveCameraRenderTargetsStage.clear(), this._pointerMoveStage.clear(), this._pointerDownStage.clear(), this._pointerUpStage.clear(), this._isReadyChecks.length = 0, this.importedMeshesFiles = [], this._activeAnimatables && (0, Cb.b)(this.stopAllAnimations)) {
          for (const bb of this._activeAnimatables) bb.onAnimationEndObservable.clear(), bb.onAnimationEnd = null;
          this.stopAllAnimations()
        }
        this.resetCachedMaterial(), this.activeCamera && (this.activeCamera._activeMeshes.dispose(), this.activeCamera = null), this.activeCameras = null, this._activeMeshes.dispose(), this._renderingManager.dispose(), this._processedMaterials.dispose(), this._activeParticleSystems.dispose(), this._activeSkeletons.dispose(), this._softwareSkinnedMeshes.dispose(), this._renderTargets.dispose(), this._materialsRenderTargets.dispose(), this._registeredForLateAnimationBindings.dispose(), this._animationWrites.length = 0, this._animationWriteCount = 0, this._animationStepWriteCount = 0, this._meshesForIntersections.dispose(), this._toBeDisposed.length = 0;
        const bb = this._activeRequests.slice();
        for (const Gb of bb) Gb.abort();
        this._activeRequests.length = 0;
        try {
          this.XN.notifyObservers(this)
        } catch (Ob) {
          bh.b.Error("An error occurred while calling onDisposeObservable!", Ob)
        }
        this.detachControl();
        const ub = this._engine.getInputElement?.();
        if (ub)
          for (let Gb = 0; Gb < this.cameras.length; Gb++) this.cameras[Gb].detachControl();
        this._disposeList(this.animationGroups), this._disposeList(this.lights), this._defaultMaterial && this._defaultMaterial.dispose(), this._disposeList(this.multiMaterials), this._disposeList(this.materials), this._disposeList(this.meshes, (bb => bb.dispose(!0))), this._disposeList(this.transformNodes, (bb => bb.dispose(!0)));
        const hb = this.cameras;
        this._disposeList(hb), this._disposeList(this.fW), this._disposeList(this.postProcesses), this._disposeList(this.textures), this._disposeList(this.morphTargetManagers), this._disposeList(this.frameGraphs), this._sceneUbo.dispose(), this._multiviewSceneUbo && this._multiviewSceneUbo.dispose(), this.postProcessManager.dispose(), this._disposeList(this._components);
        let Bb = this._engine.scenes.indexOf(this);
        if (Bb > -1 && this._engine.scenes.splice(Bb, 1), this._floatingOriginScene = void 0, 0 === this._engine.scenes.length && (0, ob.e)(), Wb.b._LastCreatedScene === this) {
          Wb.b._LastCreatedScene = null;
          let bb = Wb.b.Instances.length - 1;
          for (; bb >= 0;) {
            const ub = Wb.b.Instances[bb];
            if (ub.scenes.length > 0) {
              Wb.b._LastCreatedScene = ub.scenes[this._engine.scenes.length - 1];
              break
            }
            bb--
          }
        }
        Bb = this._engine._virtualScenes.indexOf(this), Bb > -1 && this._engine._virtualScenes.splice(Bb, 1), this._engine.wipeCaches(!0), this.XN.clear(), this.onBeforeRenderObservable.clear(), this.onAfterRenderObservable.clear(), this.onBeforeRenderTargetsRenderObservable.clear(), this.onAfterRenderTargetsRenderObservable.clear(), this.onAfterStepObservable.clear(), this.onBeforeStepObservable.clear(), this.onBeforeActiveMeshesEvaluationObservable.clear(), this.onAfterActiveMeshesEvaluationObservable.clear(), this.onBeforeParticlesRenderingObservable.clear(), this.onAfterParticlesRenderingObservable.clear(), this.onBeforeDrawPhaseObservable.clear(), this.onAfterDrawPhaseObservable.clear(), this.onBeforeAnimationsObservable.clear(), this.onAfterAnimationsObservable.clear(), this.onDataLoadedObservable.clear(), this.onBeforeRenderingGroupObservable.clear(), this.onAfterRenderingGroupObservable.clear(), this.onMeshImportedObservable.clear(), this.onBeforeCameraRenderObservable.clear(), this.onAfterCameraRenderObservable.clear(), this.onAfterRenderCameraObservable.clear(), this.onReadyObservable.clear(), this.onNewCameraAddedObservable.clear(), this.onCameraRemovedObservable.clear(), this.onNewLightAddedObservable.clear(), this.onLightRemovedObservable.clear(), this.onNewGeometryAddedObservable.clear(), this.onGeometryRemovedObservable.clear(), this.onNewTransformNodeAddedObservable.clear(), this.onTransformNodeRemovedObservable.clear(), this.onNewMeshAddedObservable.clear(), this.onMeshRemovedObservable.clear(), this.onNewSkeletonAddedObservable.clear(), this.onSkeletonRemovedObservable.clear(), this.onNewMaterialAddedObservable.clear(), this.onNewMultiMaterialAddedObservable.clear(), this.onMaterialRemovedObservable.clear(), this.onMultiMaterialRemovedObservable.clear(), this.onNewTextureAddedObservable.clear(), this.onTextureRemovedObservable.clear(), this.onNewFrameGraphAddedObservable.clear(), this.onFrameGraphRemovedObservable.clear(), this.onNewObjectRendererAddedObservable.clear(), this.onObjectRendererRemovedObservable.clear(), this.onPrePointerObservable.clear(), this.onPointerObservable.clear(), this.onPreKeyboardObservable.clear(), this.onKeyboardObservable.clear(), this.onActiveCameraChanged.clear(), this.onScenePerformancePriorityChangedObservable.clear(), this.onClearColorChangedObservable.clear(), this.onEnvironmentTextureChangedObservable.clear(), this.onMeshUnderPointerUpdatedObservable.clear(), this._isDisposed = !0
      }
      _disposeList(bb, ub) {
        const hb = bb.slice(0);
        ub = ub ?? (bb => bb.dispose());
        for (const Bb of hb) ub(Bb);
        bb.length = 0
      }
      get tC() {
        return this._isDisposed
      }
      clearCachedVertexData() {
        for (let bb = 0; bb < this.meshes.length; bb++) {
          const ub = this.meshes[bb].geometry;
          ub && ub.clearCachedData()
        }
      }
      cleanCachedTextureBuffer() {
        for (const bb of this.textures) {
          bb._buffer && (bb._buffer = null)
        }
      }
      getWorldExtends(bb) {
        const ub = new ab.q(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
          hb = new ab.q(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
        bb = bb || (() => !0);
        const Bb = this.meshes.filter(bb);
        for (const Ob of Bb) {
          if (Ob.computeWorldMatrix(!0), !Ob.FW || 0 === Ob.FW.length || Ob.infiniteDistance) continue;
          const bb = Ob.XM(),
            Bb = bb.boundingBox.minimumWorld,
            Gb = bb.boundingBox.maximumWorld;
          ab.q.CheckExtends(Bb, ub, hb), ab.q.CheckExtends(Gb, ub, hb)
        }
        return ub.x === Number.MAX_VALUE ? {
          min: ab.q.Zero(),
          max: ab.q.Zero()
        } : {
          min: ub,
          max: hb
        }
      }
      createPickingRay(bb, ub, hb, Bb) {
        throw (0, Cb.m)("Ray")
      }
      createPickingRayToRef(bb, ub, hb, Bb, Ob) {
        throw (0, Cb.m)("Ray")
      }
      createPickingRayInCameraSpace(bb, ub, hb) {
        throw (0, Cb.m)("Ray")
      }
      createPickingRayInCameraSpaceToRef(bb, ub, hb, Bb) {
        throw (0, Cb.m)("Ray")
      }
      xw(bb, ub, hb, Bb, Ob, Gb) {
        const Ub = (0, Cb.m)("Ray", !0);
        return Ub && bh.b.Warn(Ub), new Zb.d
      }
      pickWithBoundingInfo(bb, ub, hb, Bb, Ob) {
        const Gb = (0, Cb.m)("Ray", !0);
        return Gb && bh.b.Warn(Gb), new Zb.d
      }
      pickWithRay(bb, ub, hb, Bb) {
        throw (0, Cb.m)("Ray")
      }
      multiPick(bb, ub, hb, Bb, Ob) {
        throw (0, Cb.m)("Ray")
      }
      multiPickWithRay(bb, ub, hb) {
        throw (0, Cb.m)("Ray")
      }
      setPointerOverMesh(bb, ub, hb) {
        this._inputManager.setPointerOverMesh(bb, ub, hb)
      }
      getPointerOverMesh() {
        return this._inputManager.getPointerOverMesh()
      }
      _rebuildGeometries() {
        for (const bb of this.geometries) bb._rebuild();
        for (const bb of this.meshes) bb._rebuild();
        this.postProcessManager && this.postProcessManager._rebuild();
        for (const bb of this._components) bb.rebuild();
        for (const bb of this.fW) bb.rebuild();
        if (this.spriteManagers)
          for (const bb of this.spriteManagers) bb.rebuild()
      }
      _rebuildTextures() {
        for (const bb of this.textures) bb._rebuild(!0);
        this.markAllMaterialsAsDirty(1)
      }
      _getByTags(bb, ub, hb) {
        if (void 0 === ub) return bb;
        const Bb = [];
        for (const Ob in bb) {
          const Gb = bb[Ob];
          Sb.c && Sb.c.MatchesQuery(Gb, ub) && (!hb || hb(Gb)) && Bb.push(Gb)
        }
        return Bb
      }
      getMeshesByTags(bb, ub) {
        return this._getByTags(this.meshes, bb, ub)
      }
      getCamerasByTags(bb, ub) {
        return this._getByTags(this.cameras, bb, ub)
      }
      getLightsByTags(bb, ub) {
        return this._getByTags(this.lights, bb, ub)
      }
      getMaterialByTags(bb, ub) {
        return this._getByTags(this.materials, bb, ub).concat(this._getByTags(this.multiMaterials, bb, ub))
      }
      getTransformNodesByTags(bb, ub) {
        return this._getByTags(this.transformNodes, bb, ub)
      }
      setRenderingOrder(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          hb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          Bb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        this._renderingManager.setRenderingOrder(bb, ub, hb, Bb)
      }
      setRenderingAutoClearDepthStencil(bb, ub) {
        let hb = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          Bb = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        this._renderingManager.setRenderingAutoClearDepthStencil(bb, ub, hb, Bb)
      }
      getAutoClearDepthStencilSetup(bb) {
        return this._renderingManager.getAutoClearDepthStencilSetup(bb)
      }
      _forceBlockMaterialDirtyMechanism(bb) {
        this._blockMaterialDirtyMechanism = bb
      }
      get blockMaterialDirtyMechanism() {
        return this._blockMaterialDirtyMechanism
      }
      set blockMaterialDirtyMechanism(bb) {
        this._blockMaterialDirtyMechanism !== bb && (this._blockMaterialDirtyMechanism = bb, bb || this.markAllMaterialsAsDirty(127))
      }
      markAllMaterialsAsDirty(bb, ub) {
        if (!this._blockMaterialDirtyMechanism)
          for (const hb of this.materials) ub && !ub(hb) || hb.yub(bb)
      }
      _loadFile(bb, ub, hb, Bb, Ob, Gb, Ub) {
        const Lb = (0, kb.k)(bb, ub, hb, Bb ? this.offlineProvider : void 0, Ob, Gb, Ub);
        return this._activeRequests.push(Lb), Lb.onCompleteObservable.add((bb => {
          this._activeRequests.splice(this._activeRequests.indexOf(bb), 1)
        })), Lb
      }
      async _loadFileAsync(bb, ub, hb, Bb, Ob) {
        return await new Promise(((Gb, Ub) => {
          this._loadFile(bb, (bb => {
            Gb(bb)
          }), ub, hb, Bb, ((bb, ub) => {
            Ub(ub)
          }), Ob)
        }))
      }
      async _loadDelayedFileAsync(bb, ub, hb) {
        this._delayedFileRequests || (this._delayedFileRequests = new Map);
        const Bb = `${bb}|${ub?"binary":"string"}`;
        let Ob = this._delayedFileRequests.get(Bb);
        if (!Ob) {
          Ob = ub ? this._loadFileAsync(bb, void 0, hb, !0) : this._loadFileAsync(bb, void 0, hb, !1);
          const Gb = Ob;
          (async () => {
            try {
              await Gb
            } catch {}
            this._delayedFileRequests?.delete(Bb)
          })(), this._delayedFileRequests.set(Bb, Ob)
        }
        return await Ob
      }
      _requestFile(bb, ub, hb, Bb, Ob, Gb, Ub) {
        const Lb = (0, kb.t)(bb, ub, hb, Bb ? this.offlineProvider : void 0, Ob, Gb, Ub);
        return this._activeRequests.push(Lb), Lb.onCompleteObservable.add((bb => {
          this._activeRequests.splice(this._activeRequests.indexOf(bb), 1)
        })), Lb
      }
      async _requestFileAsync(bb, ub, hb, Bb, Ob) {
        return await new Promise(((Gb, Ub) => {
          this._requestFile(bb, (bb => {
            Gb(bb)
          }), ub, hb, Bb, (bb => {
            Ub(bb)
          }), Ob)
        }))
      }
      _readFile(bb, ub, hb, Bb, Ob) {
        const Gb = (0, kb.r)(bb, ub, hb, Bb, Ob);
        return this._activeRequests.push(Gb), Gb.onCompleteObservable.add((bb => {
          this._activeRequests.splice(this._activeRequests.indexOf(bb), 1)
        })), Gb
      }
      async _readFileAsync(bb, ub, hb) {
        return await new Promise(((Bb, Ob) => {
          this._readFile(bb, (bb => {
            Bb(bb)
          }), ub, hb, (bb => {
            Ob(bb)
          }))
        }))
      }
      getPerfCollector() {
        throw (0, Cb.m)("performanceViewerSceneExtension")
      }
      setActiveCameraByID(bb) {
        return this.setActiveCameraById(bb)
      }
      getMaterialByID(bb) {
        return this.getMaterialById(bb)
      }
      getLastMaterialByID(bb) {
        return this.getLastMaterialById(bb)
      }
      getTextureByUniqueID(bb) {
        return this.getTextureByUniqueId(bb)
      }
      getCameraByID(bb) {
        return this.getCameraById(bb)
      }
      getCameraByUniqueID(bb) {
        return this.getCameraByUniqueId(bb)
      }
      getBoneByID(bb) {
        return this.getBoneById(bb)
      }
      getLightByID(bb) {
        return this.getLightById(bb)
      }
      getLightByUniqueID(bb) {
        return this.getLightByUniqueId(bb)
      }
      getParticleSystemByID(bb) {
        return this.getParticleSystemById(bb)
      }
      getGeometryByID(bb) {
        return this.getGeometryById(bb)
      }
      getMeshByID(bb) {
        return this.getMeshById(bb)
      }
      getMeshByUniqueID(bb) {
        return this.getMeshByUniqueId(bb)
      }
      getLastMeshByID(bb) {
        return this.getLastMeshById(bb)
      }
      getMeshesByID(bb) {
        return this.getMeshesById(bb)
      }
      getTransformNodeByID(bb) {
        return this.getTransformNodeById(bb)
      }
      getTransformNodeByUniqueID(bb) {
        return this.getTransformNodeByUniqueId(bb)
      }
      getTransformNodesByID(bb) {
        return this.getTransformNodesById(bb)
      }
      getNodeByID(bb) {
        return this.getNodeById(bb)
      }
      getLastEntryByID(bb) {
        return this.getLastEntryById(bb)
      }
      getLastSkeletonByID(bb) {
        return this.getLastSkeletonById(bb)
      }
    }
    Gh.FOGMODE_NONE = 0, Gh.FOGMODE_EXP = 1, Gh.FOGMODE_EXP2 = 2, Gh.FOGMODE_LINEAR = 3, Gh.MinDeltaTime = 1, Gh.MaxDeltaTime = 1e3, Gh._OriginalDefaultMaterialFactory = Gh.DefaultMaterialFactory;
    let Uh = !1;

    function Lh() {
      Uh || (Uh = !0, (0, uh.f)("BABYLON.Scene", Gh))
    }(Rb = Gh.prototype).sortActiveAnimatables ?? (Rb.sortActiveAnimatables = (0, Cb.j)("Scene", "sortActiveAnimatables")), (bu = Gh.prototype).beginWeightedAnimation ?? (bu.beginWeightedAnimation = (0, Cb.j)("Scene", "beginWeightedAnimation")), (uu = Gh.prototype).beginAnimation ?? (uu.beginAnimation = (0, Cb.j)("Scene", "beginAnimation")), (hu = Gh.prototype).beginHierarchyAnimation ?? (hu.beginHierarchyAnimation = (0, Cb.j)("Scene", "beginHierarchyAnimation")), (Bu = Gh.prototype).beginDirectAnimation ?? (Bu.beginDirectAnimation = (0, Cb.j)("Scene", "beginDirectAnimation")), (Ou = Gh.prototype).beginDirectHierarchyAnimation ?? (Ou.beginDirectHierarchyAnimation = (0, Cb.j)("Scene", "beginDirectHierarchyAnimation")), (Gu = Gh.prototype).getAnimatableByTarget ?? (Gu.getAnimatableByTarget = (0, Cb.j)("Scene", "getAnimatableByTarget")), (Uu = Gh.prototype).getAllAnimatablesByTarget ?? (Uu.getAllAnimatablesByTarget = (0, Cb.j)("Scene", "getAllAnimatablesByTarget")), (Lu = Gh.prototype).stopAllAnimations ?? (Lu.stopAllAnimations = (0, Cb.j)("Scene", "stopAllAnimations")), (Yu = Gh.prototype).getSoundByName ?? (Yu.getSoundByName = (0, Cb.j)("Scene", "getSoundByName")), (Su = Gh.prototype).createOrUpdateSelectionOctree ?? (Su.createOrUpdateSelectionOctree = (0, Cb.j)("Scene", "createOrUpdateSelectionOctree")), (au = Gh.prototype).createDefaultLight ?? (au.createDefaultLight = (0, Cb.j)("Scene", "createDefaultLight")), (Hu = Gh.prototype).createDefaultCamera ?? (Hu.createDefaultCamera = (0, Cb.j)("Scene", "createDefaultCamera")), (wu = Gh.prototype).createDefaultCameraOrLight ?? (wu.createDefaultCameraOrLight = (0, Cb.j)("Scene", "createDefaultCameraOrLight")), (Zu = Gh.prototype).createDefaultSkybox ?? (Zu.createDefaultSkybox = (0, Cb.j)("Scene", "createDefaultSkybox")), (Xu = Gh.prototype).createDefaultEnvironment ?? (Xu.createDefaultEnvironment = (0, Cb.j)("Scene", "createDefaultEnvironment")), (pu = Gh.prototype).createDefaultVRExperience ?? (pu.createDefaultVRExperience = (0, Cb.j)("Scene", "createDefaultVRExperience")), (ou = Gh.prototype).createDefaultXRExperienceAsync ?? (ou.createDefaultXRExperienceAsync = (0, Cb.j)("Scene", "createDefaultXRExperienceAsync")), (Au = Gh.prototype).getGlowLayerByName ?? (Au.getGlowLayerByName = (0, Cb.j)("Scene", "getGlowLayerByName")), (lu = Gh.prototype).getHighlightLayerByName ?? (lu.getHighlightLayerByName = (0, Cb.j)("Scene", "getHighlightLayerByName")), (Ku = Gh.prototype).getSelectionOutlineLayerByName ?? (Ku.getSelectionOutlineLayerByName = (0, Cb.j)("Scene", "getSelectionOutlineLayerByName")), (Wu = Gh.prototype).removeLensFlareSystem ?? (Wu.removeLensFlareSystem = (0, Cb.j)("Scene", "removeLensFlareSystem")), (Cu = Gh.prototype).addLensFlareSystem ?? (Cu.addLensFlareSystem = (0, Cb.j)("Scene", "addLensFlareSystem")), (du = Gh.prototype).getLensFlareSystemByName ?? (du.getLensFlareSystemByName = (0, Cb.j)("Scene", "getLensFlareSystemByName")), (ru = Gh.prototype).getLensFlareSystemByID ?? (ru.getLensFlareSystemByID = (0, Cb.j)("Scene", "getLensFlareSystemByID")), (ju = Gh.prototype).getLensFlareSystemById ?? (ju.getLensFlareSystemById = (0, Cb.j)("Scene", "getLensFlareSystemById")), (nu = Gh.prototype).getPhysicsEngine ?? (nu.getPhysicsEngine = (0, Cb.j)("Scene", "getPhysicsEngine")), (Du = Gh.prototype).enablePhysics ?? (Du.enablePhysics = (0, Cb.j)("Scene", "enablePhysics")), (xu = Gh.prototype).disablePhysicsEngine ?? (xu.disablePhysicsEngine = (0, Cb.j)("Scene", "disablePhysicsEngine")), (zu = Gh.prototype).isPhysicsEnabled ?? (zu.isPhysicsEnabled = (0, Cb.j)("Scene", "isPhysicsEnabled")), (gu = Gh.prototype).deleteCompoundImpostor ?? (gu.deleteCompoundImpostor = (0, Cb.j)("Scene", "deleteCompoundImpostor")), (iu = Gh.prototype).removeReflectionProbe ?? (iu.removeReflectionProbe = (0, Cb.j)("Scene", "removeReflectionProbe")), (vu = Gh.prototype).addReflectionProbe ?? (vu.addReflectionProbe = (0, Cb.j)("Scene", "addReflectionProbe")), (tu = Gh.prototype).getBoundingBoxRenderer ?? (tu.getBoundingBoxRenderer = (0, Cb.j)("Scene", "getBoundingBoxRenderer")), (Ju = Gh.prototype).enableDepthRenderer ?? (Ju.enableDepthRenderer = (0, Cb.j)("Scene", "enableDepthRenderer")), (eu = Gh.prototype).disableDepthRenderer ?? (eu.disableDepthRenderer = (0, Cb.j)("Scene", "disableDepthRenderer")), (Nu = Gh.prototype).enableFluidRenderer ?? (Nu.enableFluidRenderer = (0, Cb.j)("Scene", "enableFluidRenderer")), (su = Gh.prototype).disableFluidRenderer ?? (su.disableFluidRenderer = (0, Cb.j)("Scene", "disableFluidRenderer")), (Mu = Gh.prototype).enableGeometryBufferRenderer ?? (Mu.enableGeometryBufferRenderer = (0, Cb.j)("Scene", "enableGeometryBufferRenderer")), (mu = Gh.prototype).disableGeometryBufferRenderer ?? (mu.disableGeometryBufferRenderer = (0, Cb.j)("Scene", "disableGeometryBufferRenderer")), (Iu = Gh.prototype).enableIblCdfGenerator ?? (Iu.enableIblCdfGenerator = (0, Cb.j)("Scene", "enableIblCdfGenerator")), (Pu = Gh.prototype).disableIblCdfGenerator ?? (Pu.disableIblCdfGenerator = (0, Cb.j)("Scene", "disableIblCdfGenerator")), (qu = Gh.prototype).getOutlineRenderer ?? (qu.getOutlineRenderer = (0, Cb.j)("Scene", "getOutlineRenderer")), (Eu = Gh.prototype).enablePrePassRenderer ?? (Eu.enablePrePassRenderer = (0, Cb.j)("Scene", "enablePrePassRenderer")), (yu = Gh.prototype).disablePrePassRenderer ?? (yu.disablePrePassRenderer = (0, Cb.j)("Scene", "disablePrePassRenderer")), (Vu = Gh.prototype).enableSubSurfaceForPrePass ?? (Vu.enableSubSurfaceForPrePass = (0, Cb.j)("Scene", "enableSubSurfaceForPrePass")), (Fu = Gh.prototype).disableSubSurfaceForPrePass ?? (Fu.disableSubSurfaceForPrePass = (0, Cb.j)("Scene", "disableSubSurfaceForPrePass")), (fu = Gh.prototype).pickSprite ?? (fu.pickSprite = (0, Cb.j)("Scene", "pickSprite")), (ku = Gh.prototype).pickSpriteWithRay ?? (ku.pickSpriteWithRay = (0, Cb.j)("Scene", "pickSpriteWithRay")), (Tu = Gh.prototype).multiPickSprite ?? (Tu.multiPickSprite = (0, Cb.j)("Scene", "multiPickSprite")), (cu = Gh.prototype).multiPickSpriteWithRay ?? (cu.multiPickSpriteWithRay = (0, Cb.j)("Scene", "multiPickSpriteWithRay")), (Qu = Gh.prototype).setPointerOverSprite ?? (Qu.setPointerOverSprite = (0, Cb.j)("Scene", "setPointerOverSprite")), (Ru = Gh.prototype).getPointerOverSprite ?? (Ru.getPointerOverSprite = (0, Cb.j)("Scene", "getPointerOverSprite")), Object.getOwnPropertyDescriptor(Gh.prototype, "mainSoundTrack") || Object.defineProperty(Gh.prototype, "mainSoundTrack", (0, Cb.f)("Scene", "mainSoundTrack")), Object.getOwnPropertyDescriptor(Gh.prototype, "soundTracks") || Object.defineProperty(Gh.prototype, "soundTracks", (0, Cb.f)("Scene", "soundTracks")), Object.getOwnPropertyDescriptor(Gh.prototype, "audioEnabled") || Object.defineProperty(Gh.prototype, "audioEnabled", (0, Cb.f)("Scene", "audioEnabled")), Object.getOwnPropertyDescriptor(Gh.prototype, "headphone") || Object.defineProperty(Gh.prototype, "headphone", (0, Cb.f)("Scene", "headphone")), Object.getOwnPropertyDescriptor(Gh.prototype, "audioListenerPositionProvider") || Object.defineProperty(Gh.prototype, "audioListenerPositionProvider", (0, Cb.f)("Scene", "audioListenerPositionProvider")), Object.getOwnPropertyDescriptor(Gh.prototype, "audioListenerRotationProvider") || Object.defineProperty(Gh.prototype, "audioListenerRotationProvider", (0, Cb.f)("Scene", "audioListenerRotationProvider")), Object.getOwnPropertyDescriptor(Gh.prototype, "audioPositioningRefreshRate") || Object.defineProperty(Gh.prototype, "audioPositioningRefreshRate", (0, Cb.f)("Scene", "audioPositioningRefreshRate")), Object.getOwnPropertyDescriptor(Gh.prototype, "selectionOctree") || Object.defineProperty(Gh.prototype, "selectionOctree", (0, Cb.f)("Scene", "selectionOctree")), Object.getOwnPropertyDescriptor(Gh.prototype, "debugLayer") || Object.defineProperty(Gh.prototype, "debugLayer", (0, Cb.f)("Scene", "debugLayer")), Object.getOwnPropertyDescriptor(Gh.prototype, "gamepadManager") || Object.defineProperty(Gh.prototype, "gamepadManager", (0, Cb.f)("Scene", "gamepadManager")), Object.getOwnPropertyDescriptor(Gh.prototype, "simplificationQueue") || Object.defineProperty(Gh.prototype, "simplificationQueue", (0, Cb.f)("Scene", "simplificationQueue")), Object.getOwnPropertyDescriptor(Gh.prototype, "onBeforePhysicsObservable") || Object.defineProperty(Gh.prototype, "onBeforePhysicsObservable", (0, Cb.f)("Scene", "onBeforePhysicsObservable")), Object.getOwnPropertyDescriptor(Gh.prototype, "onAfterPhysicsObservable") || Object.defineProperty(Gh.prototype, "onAfterPhysicsObservable", (0, Cb.f)("Scene", "onAfterPhysicsObservable")), Object.getOwnPropertyDescriptor(Gh.prototype, "reflectionProbes") || Object.defineProperty(Gh.prototype, "reflectionProbes", (0, Cb.f)("Scene", "reflectionProbes")), Object.getOwnPropertyDescriptor(Gh.prototype, "forceShowBoundingBoxes") || Object.defineProperty(Gh.prototype, "forceShowBoundingBoxes", (0, Cb.f)("Scene", "forceShowBoundingBoxes")), Object.getOwnPropertyDescriptor(Gh.prototype, "depthPeelingRenderer") || Object.defineProperty(Gh.prototype, "depthPeelingRenderer", (0, Cb.f)("Scene", "depthPeelingRenderer")), Object.getOwnPropertyDescriptor(Gh.prototype, "useOrderIndependentTransparency") || Object.defineProperty(Gh.prototype, "useOrderIndependentTransparency", (0, Cb.f)("Scene", "useOrderIndependentTransparency")), Object.getOwnPropertyDescriptor(Gh.prototype, "fluidRenderer") || Object.defineProperty(Gh.prototype, "fluidRenderer", (0, Cb.f)("Scene", "fluidRenderer")), Object.getOwnPropertyDescriptor(Gh.prototype, "geometryBufferRenderer") || Object.defineProperty(Gh.prototype, "geometryBufferRenderer", (0, Cb.f)("Scene", "geometryBufferRenderer")), Object.getOwnPropertyDescriptor(Gh.prototype, "iblCdfGenerator") || Object.defineProperty(Gh.prototype, "iblCdfGenerator", (0, Cb.f)("Scene", "iblCdfGenerator")), Object.getOwnPropertyDescriptor(Gh.prototype, "prePassRenderer") || Object.defineProperty(Gh.prototype, "prePassRenderer", (0, Cb.f)("Scene", "prePassRenderer")), Object.getOwnPropertyDescriptor(Gh.prototype, "subSurfaceConfiguration") || Object.defineProperty(Gh.prototype, "subSurfaceConfiguration", (0, Cb.f)("Scene", "subSurfaceConfiguration")), Object.getOwnPropertyDescriptor(Gh.prototype, "spriteManagers") || Object.defineProperty(Gh.prototype, "spriteManagers", (0, Cb.f)("Scene", "spriteManagers")), Object.getOwnPropertyDescriptor(Gh.prototype, "onBeforeSpritesRenderingObservable") || Object.defineProperty(Gh.prototype, "onBeforeSpritesRenderingObservable", (0, Cb.f)("Scene", "onBeforeSpritesRenderingObservable")), Object.getOwnPropertyDescriptor(Gh.prototype, "onAfterSpritesRenderingObservable") || Object.defineProperty(Gh.prototype, "onAfterSpritesRenderingObservable", (0, Cb.f)("Scene", "onAfterSpritesRenderingObservable"))
  },
  39632: (bb, ub, hb) => {
    hb.d(ub, {
      d: () => Bb,
      g: () => Ob
    });
    class Bb {}
    Bb.NAME_EFFECTLAYER = "EffectLayer", Bb.NAME_LAYER = "Layer", Bb.NAME_LENSFLARESYSTEM = "LensFlareSystem", Bb.NAME_BOUNDINGBOXRENDERER = "BoundingBoxRenderer", Bb.NAME_PARTICLESYSTEM = "ParticleSystem", Bb.NAME_GAMEPAD = "Gamepad", Bb.NAME_SIMPLIFICATIONQUEUE = "SimplificationQueue", Bb.NAME_GEOMETRYBUFFERRENDERER = "GeometryBufferRenderer", Bb.NAME_PREPASSRENDERER = "PrePassRenderer", Bb.NAME_DEPTHRENDERER = "DepthRenderer", Bb.NAME_DEPTHPEELINGRENDERER = "DepthPeelingRenderer", Bb.NAME_POSTPROCESSRENDERPIPELINEMANAGER = "PostProcessRenderPipelineManager", Bb.NAME_SPRITE = "Sprite", Bb.NAME_SUBSURFACE = "SubSurface", Bb.NAME_OUTLINERENDERER = "Outline", Bb.NAME_PROCEDURALTEXTURE = "ProceduralTexture", Bb.NAME_SHADOWGENERATOR = "ShadowGenerator", Bb.NAME_OCTREE = "rBb", Bb.NAME_PHYSICSENGINE = "PhysicsEngine", Bb.NAME_AUDIO = "Audio", Bb.NAME_FLUIDRENDERER = "FluidRenderer", Bb.NAME_IBLCDFGENERATOR = "iblCDFGenerator", Bb.NAME_CLUSTEREDLIGHTING = "ClusteredLighting", Bb.STEP_ISREADYFORMESH_EFFECTLAYER = 0, Bb.STEP_ISREADYFORMESH_DEPTHRENDERER = 1, Bb.STEP_BEFOREEVALUATEACTIVEMESH_BOUNDINGBOXRENDERER = 0, Bb.STEP_EVALUATESUBMESH_BOUNDINGBOXRENDERER = 0, Bb.STEP_PREACTIVEMESH_BOUNDINGBOXRENDERER = 0, Bb.STEP_CAMERADRAWRENDERTARGET_EFFECTLAYER = 1, Bb.STEP_BEFORECAMERADRAW_PREPASS = 0, Bb.STEP_BEFORECAMERADRAW_EFFECTLAYER = 1, Bb.STEP_BEFORECAMERADRAW_LAYER = 2, Bb.STEP_BEFORERENDERTARGETDRAW_PREPASS = 0, Bb.STEP_BEFORERENDERTARGETDRAW_LAYER = 1, Bb.STEP_BEFORERENDERINGMESH_PREPASS = 0, Bb.STEP_BEFORERENDERINGMESH_OUTLINE = 1, Bb.STEP_AFTERRENDERINGMESH_PREPASS = 0, Bb.STEP_AFTERRENDERINGMESH_OUTLINE = 1, Bb.STEP_AFTERRENDERINGGROUPDRAW_EFFECTLAYER_DRAW = 0, Bb.STEP_AFTERRENDERINGGROUPDRAW_BOUNDINGBOXRENDERER = 1, Bb.STEP_BEFORECAMERAUPDATE_SIMPLIFICATIONQUEUE = 0, Bb.STEP_BEFORECLEAR_PROCEDURALTEXTURE = 0, Bb.STEP_BEFORECLEAR_PREPASS = 1, Bb.STEP_BEFORERENDERTARGETCLEAR_PREPASS = 0, Bb.STEP_AFTERRENDERTARGETDRAW_PREPASS = 0, Bb.STEP_AFTERRENDERTARGETDRAW_LAYER = 1, Bb.STEP_AFTERCAMERADRAW_PREPASS = 0, Bb.STEP_AFTERCAMERADRAW_EFFECTLAYER = 1, Bb.STEP_AFTERCAMERADRAW_LENSFLARESYSTEM = 2, Bb.STEP_AFTERCAMERADRAW_EFFECTLAYER_DRAW = 3, Bb.STEP_AFTERCAMERADRAW_LAYER = 4, Bb.STEP_AFTERCAMERADRAW_FLUIDRENDERER = 5, Bb.STEP_AFTERCAMERAPOSTPROCESS_LAYER = 0, Bb.STEP_AFTERRENDERTARGETPOSTPROCESS_LAYER = 0, Bb.STEP_AFTERRENDER_AUDIO = 0, Bb.STEP_GATHERRENDERTARGETS_DEPTHRENDERER = 0, Bb.STEP_GATHERRENDERTARGETS_GEOMETRYBUFFERRENDERER = 1, Bb.STEP_GATHERRENDERTARGETS_SHADOWGENERATOR = 2, Bb.STEP_GATHERRENDERTARGETS_POSTPROCESSRENDERPIPELINEMANAGER = 3, Bb.STEP_GATHERACTIVECAMERARENDERTARGETS_DEPTHRENDERER = 0, Bb.STEP_GATHERACTIVECAMERARENDERTARGETS_FLUIDRENDERER = 1, Bb.STEP_GATHERACTIVECAMERARENDERTARGETS_CLUSTEREDLIGHTING = 2, Bb.STEP_POINTERMOVE_SPRITE = 0, Bb.STEP_POINTERDOWN_SPRITE = 0, Bb.STEP_POINTERUP_SPRITE = 0;
    class Ob extends Array {
      constructor(bb) {
        super(...bb)
      }
      static Create() {
        return Object.create(Ob.prototype)
      }
      registerStep(bb, ub, hb) {
        let Bb, Ob = 0;
        for (; Ob < this.length; Ob++) {
          if (Bb = this[Ob].index, bb < Bb) break
        }
        this.splice(Ob, 0, {
          index: bb,
          component: ub,
          action: hb.bind(ub)
        })
      }
      clear() {
        this.length = 0
      }
    }
  },
  39463: (bb, ub, hb) => {
    hb.d(ub, {
      b: () => Ub,
      f: () => Lb,
      h: () => Bb,
      k: () => Ob,
      n: () => Gb
    });

    function Bb(bb, ub, hb, Bb, Ob, Gb) {
      function Ub(bb) {
        if (void 0 !== bb && "function" !== typeof bb) throw new TypeError("Function expected");
        return bb
      }
      for (var Lb, Yb = Bb.kind, Sb = "getter" === Yb ? "get" : "setter" === Yb ? "set" : "value", ab = !ub && bb ? Bb.static ? bb : bb.prototype : null, Hb = ub || (ab ? Object.getOwnPropertyDescriptor(ab, Bb.name) : {}), wb = !1, Zb = hb.length - 1; Zb >= 0; Zb--) {
        var Xb = {};
        for (var pb in Bb) Xb[pb] = "access" === pb ? {} : Bb[pb];
        for (var pb in Bb.access) Xb.access[pb] = Bb.access[pb];
        Xb.addInitializer = function(bb) {
          if (wb) throw new TypeError("Cannot add initializers after decoration has completed");
          Gb.push(Ub(bb || null))
        };
        var ob = (0, hb[Zb])("accessor" === Yb ? {
          get: Hb.get,
          set: Hb.set
        } : Hb[Sb], Xb);
        if ("accessor" === Yb) {
          if (void 0 === ob) continue;
          if (null === ob || "object" !== typeof ob) throw new TypeError("Object expected");
          (Lb = Ub(ob.get)) && (Hb.get = Lb), (Lb = Ub(ob.set)) && (Hb.set = Lb), (Lb = Ub(ob.init)) && Ob.unshift(Lb)
        } else(Lb = Ub(ob)) && ("field" === Yb ? Ob.unshift(Lb) : Hb[Sb] = Lb)
      }
      ab && Object.defineProperty(ab, Bb.name, Hb), wb = !0
    }

    function Ob(bb, ub, hb) {
      for (var Bb = arguments.length > 2, Ob = 0; Ob < ub.length; Ob++) hb = Bb ? ub[Ob].call(bb, hb) : ub[Ob].call(bb);
      return Bb ? hb : void 0
    }

    function Gb(bb, ub, hb) {
      return "symbol" === typeof ub && (ub = ub.description ? "[".concat(ub.description, "]") : ""), Object.defineProperty(bb, "name", {
        configurable: !0,
        value: hb ? "".concat(hb, " ", ub) : ub
      })
    }
    Object.create;
    Object.create;

    function Ub(bb, ub, hb, Bb) {
      if ("a" === hb && !Bb) throw new TypeError("Private accessor was defined without a getter");
      if ("function" === typeof ub ? bb !== ub || !Bb : !ub.has(bb)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return "m" === hb ? Bb : "a" === hb ? Bb.call(bb) : Bb ? Bb.value : ub.get(bb)
    }

    function Lb(bb, ub, hb, Bb, Ob) {
      if ("m" === Bb) throw new TypeError("Private method is not writable");
      if ("a" === Bb && !Ob) throw new TypeError("Private accessor was defined without a setter");
      if ("function" === typeof ub ? bb !== ub || !Ob : !ub.has(bb)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return "a" === Bb ? Ob.call(bb, hb) : Ob ? Ob.value = hb : ub.set(bb, hb), hb
    }
    "function" === typeof SuppressedError && SuppressedError
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);