export const id = 242;
export const ids = [242];
export const modules = {
  39576: (bb, cb, sb) => {
    sb.d(cb, {
      b: () => Ub,
      f: () => lb,
      j: () => Hb,
      l: () => Ib
    });
    var kb = sb(39334),
      Wb = sb(38284),
      ab = sb(39495),
      Tb = sb(39377);
    class Ub {
      get Scb() {
        return this._isDisposed
      }
      constructor(bb, cb, sb) {
        let Wb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          ab = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          Ub = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
          Ib = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
          Hb = arguments.length > 7 ? arguments[7] : void 0,
          fb = arguments.length > 8 ? arguments[8] : void 0;
        this._isAlreadyOwned = !1, this._isDisposed = !1, (0, Tb.c)(), bb && bb.EY ? this._engine = bb.EY().Sm() : this._engine = bb, this._updatable = sb, this._instanced = Ub, this._divisor = Hb || 1, this._label = fb, cb instanceof kb.c ? (this._data = null, this._buffer = cb) : (this._data = cb, this._buffer = null), this.byteStride = Ib ? Wb : Wb * Float32Array.BYTES_PER_ELEMENT, ab || this.create()
      }
      createVertexBuffer(bb, cb, sb, kb, Wb) {
        let ab = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
          Tb = arguments.length > 6 ? arguments[6] : void 0;
        const Ub = ab ? cb : cb * Float32Array.BYTES_PER_ELEMENT,
          Hb = kb ? ab ? kb : kb * Float32Array.BYTES_PER_ELEMENT : this.byteStride;
        return new Ib(this._engine, this, bb, this._updatable, !0, Hb, void 0 === Wb ? this._instanced : Wb, Ub, sb, void 0, void 0, !0, this._divisor || Tb)
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
          if (this._buffer.GM > 0) return void(this._updatable ? this._buffer = this._engine.createDynamicVertexBuffer(this._buffer.GM, this._label) : this._buffer = this._engine.createVertexBuffer(this._buffer.GM, void 0, this._label));
          Wb.c.Warn(`Missing data for buffer "${this._label}" ${this._buffer?"(uniqueId: "+this._buffer.uniqueId+")":""}. Buffer reconstruction failed.`), this._buffer = null
        }
      }
      update(bb) {
        this.create(bb)
      }
      updateDirectly(bb, cb, sb) {
        let kb = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        this._buffer && this._updatable && (this._engine.updateDynamicVertexBuffer(this._buffer, bb, kb ? cb : cb * Float32Array.BYTES_PER_ELEMENT, sb ? sb * this.byteStride : void 0), this._data = 0 === cb && void 0 === sb ? bb : null)
      }
      _increaseReferences() {
        this._buffer && (this._isAlreadyOwned ? this._buffer.references++ : this._isAlreadyOwned = !0)
      }
      dispose() {
        this._buffer && this._engine._releaseBuffer(this._buffer) && (this._isDisposed = !0, this._data = null, this._buffer = null)
      }
    }
    class Ib {
      get Scb() {
        return this._isDisposed
      }
      get instanceDivisor() {
        return this._instanceDivisor
      }
      set instanceDivisor(bb) {
        const cb = 0 != bb;
        this._instanceDivisor = bb, cb !== this._instanced && (this._instanced = cb, this._computeHashCode())
      }
      get _maxVerticesCount() {
        const bb = this.getData();
        return bb ? Array.isArray(bb) ? bb.length / (this.byteStride / 4) - this.byteOffset / 4 : (bb.byteLength - this.byteOffset) / this.byteStride : 0
      }
      constructor(bb, cb, sb, kb, Wb, Tb, Mb, Xb, nb, mb) {
        let lb, Qb = arguments.length > 10 && void 0 !== arguments[10] && arguments[10],
          eb = arguments.length > 11 && void 0 !== arguments[11] && arguments[11],
          Cb = arguments.length > 12 && void 0 !== arguments[12] ? arguments[12] : 1,
          Nb = arguments.length > 13 && void 0 !== arguments[13] && arguments[13];
        if (this._isDisposed = !1, this.engine = bb, "object" === typeof kb && null !== kb ? (lb = kb.updatable ?? !1, Wb = kb.postponeInternalCreation, Tb = kb.stride, Mb = kb.instanced, Xb = kb.offset, nb = kb.size, mb = kb.type, Qb = kb.normalized ?? !1, eb = kb.useBytes ?? !1, Cb = kb.divisor ?? 1, Nb = kb.takeBufferOwnership ?? !1, this._label = kb.label) : lb = !!kb, cb instanceof Ub ? (this._buffer = cb, this._ownsBuffer = Nb) : (this._buffer = new Ub(bb, cb, lb, Tb, Wb, Mb, eb, Cb, this._label), this._ownsBuffer = !0), this.uniqueId = Ib._Counter++, this._kind = sb, void 0 === mb) {
          const bb = this.getData();
          this.type = bb ? fb(bb) : Ib.FLOAT
        } else this.type = mb;
        const Vb = (0, ab.s)(this.type);
        eb ? (this._size = nb || (Tb ? Tb / Vb : Hb(sb)), this.byteStride = Tb || this._buffer.byteStride || this._size * Vb, this.byteOffset = Xb || 0) : (this._size = nb || Tb || Hb(sb), this.byteStride = Tb ? Tb * Vb : this._buffer.byteStride || this._size * Vb, this.byteOffset = (Xb || 0) * Vb), this.normalized = Qb, this._instanced = void 0 !== Mb && Mb, this._instanceDivisor = Mb ? Cb : 0, this._alignBuffer(), this._computeHashCode()
      }
      static _GetTypeHashIndex(bb) {
        switch (bb) {
          case Ib.BYTE:
            return 0;
          case Ib.UNSIGNED_BYTE:
            return 1;
          case Ib.SHORT:
            return 2;
          case Ib.UNSIGNED_SHORT:
            return 3;
          case Ib.INT:
            return 4;
          case Ib.UNSIGNED_INT:
            return 5;
          case Ib.FLOAT:
            return 6;
          case Ib.HALF_FLOAT:
            return 7;
          default:
            throw new Error(`Invalid vertex buffer type '${bb}'`)
        }
      }
      _computeHashCode() {
        this.hashCode = (Ib._GetTypeHashIndex(this.type) | 0) + ((this.normalized ? 1 : 0) << 3) + (this._size - 1 << 4) + ((this._instanced ? 1 : 0) << 6) + (this.byteStride << 12)
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
      getFloatData(bb, cb) {
        const sb = this.getData();
        return sb ? (0, ab.p)(sb, this._size, this.type, this.byteOffset, this.byteStride, this.normalized, bb, cb) : null
      }
      getBuffer() {
        return this._buffer.getBuffer()
      }
      getWrapperBuffer() {
        return this._buffer
      }
      getStrideSize() {
        return this.byteStride / (0, ab.s)(this.type)
      }
      Ecb() {
        return this.byteOffset / (0, ab.s)(this.type)
      }
      getSize() {
        return arguments.length > 0 && void 0 !== arguments[0] && arguments[0] ? this._size * (0, ab.s)(this.type) : this._size
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
      updateDirectly(bb, cb) {
        let sb = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this._buffer.updateDirectly(bb, cb, void 0, sb), this._alignBuffer()
      }
      dispose() {
        this._ownsBuffer && this._buffer.dispose(), this._isDisposed = !0
      }
      forEach(bb, cb) {
        (0, ab.j)(this._buffer.getData(), this.byteOffset, this.byteStride, this._size, this.type, bb, this.normalized, ((bb, sb) => {
          for (let kb = 0; kb < this._size; kb++) cb(bb[kb], sb + kb)
        }))
      }
      _alignBuffer() {}
    }

    function Hb(bb) {
      switch (bb) {
        case Ib.UVKind:
        case Ib.UV2Kind:
        case Ib.UV3Kind:
        case Ib.UV4Kind:
        case Ib.UV5Kind:
        case Ib.UV6Kind:
          return 2;
        case Ib.NormalKind:
        case Ib.PositionKind:
          return 3;
        case Ib.ColorKind:
        case Ib.ColorInstanceKind:
        case Ib.MatricesIndicesKind:
        case Ib.MatricesIndicesExtraKind:
        case Ib.MatricesWeightsKind:
        case Ib.MatricesWeightsExtraKind:
        case Ib.TangentKind:
          return 4;
        default:
          throw new Error("Invalid kind '" + bb + "'")
      }
    }

    function fb(bb) {
      return bb instanceof Int8Array ? Ib.BYTE : bb instanceof Uint8Array ? Ib.UNSIGNED_BYTE : bb instanceof Int16Array ? Ib.SHORT : bb instanceof Uint16Array ? Ib.UNSIGNED_SHORT : bb instanceof Int32Array ? Ib.INT : bb instanceof Uint32Array ? Ib.UNSIGNED_INT : Ib.FLOAT
    }

    function Mb(bb) {
      return (0, ab.s)(bb)
    }

    function Xb(bb, cb, sb, kb, Wb, Tb, Ub, Ib) {
      (0, ab.j)(bb, cb, sb, kb, Wb, Tb, Ub, ((bb, cb) => {
        for (let sb = 0; sb < kb; sb++) Ib(bb[sb], cb + sb)
      }))
    }

    function nb(bb, cb, sb, kb, Wb, Tb, Ub, Ib) {
      return (0, ab.p)(bb, cb, sb, kb, Wb, Tb, Ub, Ib)
    }
    Ib._Counter = 0, Ib.BYTE = 5120, Ib.UNSIGNED_BYTE = 5121, Ib.SHORT = 5122, Ib.UNSIGNED_SHORT = 5123, Ib.INT = 5124, Ib.UNSIGNED_INT = 5125, Ib.FLOAT = 5126, Ib.HALF_FLOAT = 5131, Ib.PositionKind = "position", Ib.NormalKind = "normal", Ib.TangentKind = "tangent", Ib.UVKind = "uv", Ib.UV2Kind = "uv2", Ib.UV3Kind = "uv3", Ib.UV4Kind = "uv4", Ib.UV5Kind = "uv5", Ib.UV6Kind = "uv6", Ib.ColorKind = "color", Ib.ColorInstanceKind = "instanceColor", Ib.MatricesIndicesKind = "matricesIndices", Ib.MatricesWeightsKind = "matricesWeights", Ib.MatricesIndicesExtraKind = "matricesIndicesExtra", Ib.MatricesWeightsExtraKind = "matricesWeightsExtra";
    let mb = !1;

    function lb() {
      mb || (mb = !0, Ib.DeduceStride = Hb, Ib.GetDataType = fb, Ib.GetTypeByteLength = Mb, Ib.ForEach = Xb, Ib.GetFloatData = nb)
    }
  },
  39334: (bb, cb, sb) => {
    sb.d(cb, {
      c: () => kb
    });
    class kb {
      get underlyingResource() {
        return null
      }
      constructor() {
        this.references = 0, this.GM = 0, this.is32Bits = !1, this.uniqueId = kb._Counter++
      }
    }
    kb._Counter = 0
  },
  39568: (bb, cb, sb) => {
    sb.d(cb, {
      e: () => ab
    });
    var kb = sb(36656),
      Wb = sb(39576);
    class ab {
      constructor() {
        this.hit = !1, this.distance = 0, this.pickedPoint = null, this.pickedMesh = null, this.bu = 0, this.bv = 0, this.faceId = -1, this.subMeshFaceId = -1, this.subMeshId = 0, this.pickedSprite = null, this.thinInstanceIndex = -1, this.ray = null, this.originMesh = null, this.aimTransform = null, this.gripTransform = null
      }
      getNormal() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          cb = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (!this.pickedMesh || cb && !this.pickedMesh.isVerticesDataPresent(Wb.l.NormalKind)) return null;
        let sb, ab = this.pickedMesh.Gsb();
        0 === ab?.length && (ab = null);
        const Tb = kb.m.Fm[0],
          Ub = kb.m.Fm[1],
          Ib = kb.m.Fm[2];
        if (cb) {
          const bb = this.pickedMesh.getVerticesData(Wb.l.NormalKind);
          let cb = ab ? kb.p.FromArrayToRef(bb, 3 * ab[3 * this.faceId], Tb) : Tb.I5(bb[3 * this.faceId * 3], bb[3 * this.faceId * 3 + 1], bb[3 * this.faceId * 3 + 2]),
            Hb = ab ? kb.p.FromArrayToRef(bb, 3 * ab[3 * this.faceId + 1], Ub) : Ub.I5(bb[3 * (3 * this.faceId + 1)], bb[3 * (3 * this.faceId + 1) + 1], bb[3 * (3 * this.faceId + 1) + 2]),
            fb = ab ? kb.p.FromArrayToRef(bb, 3 * ab[3 * this.faceId + 2], Ib) : Ib.I5(bb[3 * (3 * this.faceId + 2)], bb[3 * (3 * this.faceId + 2) + 1], bb[3 * (3 * this.faceId + 2) + 2]);
          cb = cb.scale(this.bu), Hb = Hb.scale(this.bv), fb = fb.scale(1 - this.bu - this.bv), sb = new kb.p(cb.x + Hb.x + fb.x, cb.y + Hb.y + fb.y, cb.z + Hb.z + fb.z)
        } else {
          const bb = this.pickedMesh.getVerticesData(Wb.l.PositionKind),
            cb = ab ? kb.p.FromArrayToRef(bb, 3 * ab[3 * this.faceId], Tb) : Tb.I5(bb[3 * this.faceId * 3], bb[3 * this.faceId * 3 + 1], bb[3 * this.faceId * 3 + 2]),
            Hb = ab ? kb.p.FromArrayToRef(bb, 3 * ab[3 * this.faceId + 1], Ub) : Ub.I5(bb[3 * (3 * this.faceId + 1)], bb[3 * (3 * this.faceId + 1) + 1], bb[3 * (3 * this.faceId + 1) + 2]),
            fb = ab ? kb.p.FromArrayToRef(bb, 3 * ab[3 * this.faceId + 2], Ib) : Ib.I5(bb[3 * (3 * this.faceId + 2)], bb[3 * (3 * this.faceId + 2) + 1], bb[3 * (3 * this.faceId + 2) + 2]),
            Mb = cb.subtract(Hb),
            Xb = fb.subtract(Hb);
          sb = kb.p.Cross(Mb, Xb)
        }
        const Hb = (bb, cb) => {
          if (-1 !== this.thinInstanceIndex) {
            const sb = bb._thinInstanceDataStorage.matrixData,
              Wb = this.thinInstanceIndex << 4;
            if (sb && sb.length > Wb) {
              const bb = kb.m.Matrix[0];
              kb.e.FromArrayToRef(sb, Wb, bb), kb.p.TransformNormalToRef(cb, bb, cb)
            }
          }
          let sb = bb.getWorldMatrix();
          bb.nonUniformScaling && (kb.m.Matrix[0].ssb(sb), sb = kb.m.Matrix[0], sb.setTranslationFromFloats(0, 0, 0), sb.invert(), sb.transposeToRef(kb.m.Matrix[1]), sb = kb.m.Matrix[1]), kb.p.TransformNormalToRef(cb, sb, cb)
        };
        if (bb && Hb(this.pickedMesh, sb), this.ray) {
          const cb = kb.m.Fm[0].ssb(sb);
          bb || Hb(this.pickedMesh, cb), kb.p.Dot(cb, this.ray.direction) > 0 && sb.negateInPlace()
        }
        return sb.normalize(), sb
      }
      getTextureCoordinates() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Wb.l.UVKind;
        if (!this.pickedMesh || !this.pickedMesh.isVerticesDataPresent(bb)) return null;
        const cb = this.pickedMesh.Gsb();
        if (!cb) return null;
        const sb = this.pickedMesh.getVerticesData(bb);
        if (!sb) return null;
        let ab = kb.n.FromArray(sb, 2 * cb[3 * this.faceId]),
          Tb = kb.n.FromArray(sb, 2 * cb[3 * this.faceId + 1]),
          Ub = kb.n.FromArray(sb, 2 * cb[3 * this.faceId + 2]);
        return ab = ab.scale(this.bu), Tb = Tb.scale(this.bv), Ub = Ub.scale(1 - this.bu - this.bv), new kb.n(ab.x + Tb.x + Ub.x, ab.y + Tb.y + Ub.y)
      }
    }
  },
  39377: (bb, cb, sb) => {
    sb.d(cb, {
      c: () => ab
    });
    var kb = sb(39251);
    let Wb = !1;

    function ab() {
      Wb || (Wb = !0, kb.ThinEngine.prototype.updateDynamicIndexBuffer = function(bb, cb) {
        let sb;
        this._currentBoundBuffer[this._gl.ELEMENT_ARRAY_BUFFER] = null, this.bindIndexBuffer(bb), sb = bb.is32Bits ? cb instanceof Uint32Array ? cb : new Uint32Array(cb) : cb instanceof Uint16Array ? cb : new Uint16Array(cb), this._gl.bufferData(this._gl.ELEMENT_ARRAY_BUFFER, sb, this._gl.DYNAMIC_DRAW), this._resetIndexBufferBinding()
      }, kb.ThinEngine.prototype.updateDynamicVertexBuffer = function(bb, cb, sb, kb) {
        this.bindArrayBuffer(bb), void 0 === sb && (sb = 0);
        const Wb = cb.byteLength || cb.length;
        void 0 === kb || kb >= Wb && 0 === sb ? cb instanceof Array ? this._gl.bufferSubData(this._gl.ARRAY_BUFFER, sb, new Float32Array(cb)) : this._gl.bufferSubData(this._gl.ARRAY_BUFFER, sb, cb) : cb instanceof Array ? this._gl.bufferSubData(this._gl.ARRAY_BUFFER, sb, new Float32Array(cb).subarray(0, kb / 4)) : (cb = ArrayBuffer.isView(cb) ? new Uint8Array(cb.buffer, cb.byteOffset, kb) : new Uint8Array(cb, 0, kb), this._gl.bufferSubData(this._gl.ARRAY_BUFFER, sb, cb)), this._resetVertexBufferBinding()
      })
    }
  },
  39346: (bb, cb, sb) => {
    sb.d(cb, {
      e: () => kb
    });
    class kb {
      get underlyingResource() {
        return this._webGLTexture
      }
      constructor() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          cb = arguments.length > 1 ? arguments[1] : void 0;
        if (this._MSAARenderBuffers = null, this._context = cb, !bb && (bb = cb.createTexture(), !bb)) throw new Error("Unable to create webGL texture");
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
  39311: (bb, cb, sb) => {
    sb.d(cb, {
      b: () => Cb
    });
    var kb = sb(36683),
      Wb = sb(39258),
      ab = sb(36677),
      Tb = sb(38284),
      Ub = sb(36672),
      Ib = sb(39314);
    class Hb {
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
    class fb {
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
        const cb = !this.useStencilGlobalOnly && !!this.stencilMaterial?.enabled;
        this.enabled = cb ? this.stencilMaterial.enabled : this.stencilGlobal.enabled, this.func = cb ? this.stencilMaterial.func : this.stencilGlobal.func, this.backFunc = cb ? this.stencilMaterial.backFunc : this.stencilGlobal.backFunc, this.funcRef = cb ? this.stencilMaterial.funcRef : this.stencilGlobal.funcRef, this.funcMask = cb ? this.stencilMaterial.funcMask : this.stencilGlobal.funcMask, this.opStencilFail = cb ? this.stencilMaterial.opStencilFail : this.stencilGlobal.opStencilFail, this.opDepthFail = cb ? this.stencilMaterial.opDepthFail : this.stencilGlobal.opDepthFail, this.opStencilDepthPass = cb ? this.stencilMaterial.opStencilDepthPass : this.stencilGlobal.opStencilDepthPass, this.backOpStencilFail = cb ? this.stencilMaterial.backOpStencilFail : this.stencilGlobal.backOpStencilFail, this.backOpDepthFail = cb ? this.stencilMaterial.backOpDepthFail : this.stencilGlobal.backOpDepthFail, this.backOpStencilDepthPass = cb ? this.stencilMaterial.backOpStencilDepthPass : this.stencilGlobal.backOpStencilDepthPass, this.mask = cb ? this.stencilMaterial.mask : this.stencilGlobal.mask, this.isDirty && (this._isStencilTestDirty && (this.enabled ? bb.enable(bb.STENCIL_TEST) : bb.disable(bb.STENCIL_TEST), this._isStencilTestDirty = !1), this._isStencilMaskDirty && (bb.stencilMask(this.mask), this._isStencilMaskDirty = !1), this._isStencilFuncDirty && (bb.stencilFuncSeparate(bb.FRONT, this.func, this.funcRef, this.funcMask), bb.stencilFuncSeparate(bb.BACK, this.backFunc, this.funcRef, this.funcMask), this._isStencilFuncDirty = !1), this._isStencilOpDirty && (bb.stencilOpSeparate(bb.FRONT, this.opStencilFail, this.opDepthFail, this.opStencilDepthPass), bb.stencilOpSeparate(bb.BACK, this.backOpStencilFail, this.backOpDepthFail, this.backOpStencilDepthPass), this._isStencilOpDirty = !1))
      }
    }
    class Mb {
      constructor() {
        this.reset()
      }
      reset() {
        this.enabled = !1, this.mask = 255, this.funcRef = 1, this.funcMask = 255, this.func = Mb.ALWAYS, this.opStencilFail = Mb.KEEP, this.opDepthFail = Mb.KEEP, this.opStencilDepthPass = Mb.REPLACE, this.backFunc = Mb.ALWAYS, this.backOpStencilFail = Mb.KEEP, this.backOpDepthFail = Mb.KEEP, this.backOpStencilDepthPass = Mb.REPLACE
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
    Mb.ALWAYS = 519, Mb.KEEP = 7680, Mb.REPLACE = 7681;
    var Xb = sb(39320),
      nb = sb(39296),
      mb = sb(39241),
      lb = sb(39278),
      Qb = sb(39287);

    function eb(bb, cb) {
      if (cb) {
        const {
          requestAnimationFrame: sb
        } = cb;
        if ("function" === typeof sb) return sb(bb)
      }
      if ((0, lb.j)()) {
        const {
          requestAnimationFrame: sb
        } = cb || window;
        if ("function" === typeof sb) return sb(bb)
      } else if ("function" === typeof requestAnimationFrame) return requestAnimationFrame(bb);
      return setTimeout(bb, 16)
    }
    class Cb {
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
      get Dsb() {
        return this._useReverseDepthBuffer
      }
      set Dsb(bb) {
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
        if (bb) return this.isNDCHalfZRange ? bb.IS_NDC_HALF_ZRANGE = "" : delete bb.IS_NDC_HALF_ZRANGE, this.Dsb ? bb.USE_REVERSE_DEPTHBUFFER = "" : delete bb.USE_REVERSE_DEPTHBUFFER, void(this.useExactSrgbConversions ? bb.USE_EXACT_SRGB_CONVERSIONS = "" : delete bb.USE_EXACT_SRGB_CONVERSIONS);
        {
          let bb = "";
          return this.isNDCHalfZRange && (bb += "#define IS_NDC_HALF_ZRANGE"), this.Dsb && (bb && (bb += "\n"), bb += "#define USE_REVERSE_DEPTHBUFFER"), this.useExactSrgbConversions && (bb && (bb += "\n"), bb += "#define USE_EXACT_SRGB_CONVERSIONS"), bb
        }
      }
      _rebuildInternalTextures() {
        const bb = this._internalTexturesCache.slice();
        for (const cb of bb) cb._rebuild()
      }
      _rebuildRenderTargetWrappers() {
        const bb = this._renderTargetWrapperCache.slice();
        for (const cb of bb) cb.textures?.some((bb => 15 === bb.source)) || cb._rebuild()
      }
      _rebuildEffects() {
        for (const bb in this._compiledEffects) {
          const cb = this._compiledEffects[bb];
          cb._pipelineContext = null, cb._prepareEffect()
        }
        Wb.c.ResetCache()
      }
      _rebuildGraphicsResources() {
        this.wipeCaches(!0), this._rebuildEffects(), this._rebuildComputeEffects?.(), this._rebuildBuffers(), this._rebuildInternalTextures(), this._rebuildTextures(), this._rebuildRenderTargetWrappers(), this.wipeCaches(!0)
      }
      _flagContextRestored() {
        Tb.c.Warn(this.name + " context successfully restored."), this.onContextRestoredObservable.notifyObservers(this), this._contextWasLost = !1
      }
      _restoreEngineAfterContextLost(bb) {
        setTimeout((() => {
          this._clearEmptyResources();
          const cb = this._depthCullingState.depthTest,
            sb = this._depthCullingState.depthFunc,
            kb = this._depthCullingState.depthMask,
            Wb = this._stencilState.stencilTest;
          bb(), this._rebuildGraphicsResources(), this._depthCullingState.depthTest = cb, this._depthCullingState.depthFunc = sb, this._depthCullingState.depthMask = kb, this._stencilState.stencilTest = Wb, this._flagContextRestored()
        }), 0)
      }
      get Scb() {
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
            cb = [bb, bb, bb, bb, bb, bb];
          this._emptyCubeTexture = this.createRawCubeTexture(cb, 1, 5, 0, !1, !1, 1)
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
        const cb = this._activeRenderLoops.indexOf(bb);
        cb >= 0 && (this._activeRenderLoops.splice(cb, 1), 0 == this._activeRenderLoops.length && this._cancelFrame())
      }
      _cancelFrame() {
        if (this.customAnimationFrameRequester) {
          if (0 !== this._frameHandler) {
            this._frameHandler = 0;
            const {
              cancelAnimationFrame: bb
            } = this.customAnimationFrameRequester;
            bb && bb(this.customAnimationFrameRequester.xm), delete this.customAnimationFrameRequester.xm
          }
        } else if (0 !== this._frameHandler) {
          const bb = this._frameHandler;
          if (this._frameHandler = 0, (0, lb.j)()) {
            const {
              cancelAnimationFrame: cb
            } = this.getHostWindow() || window;
            if ("function" === typeof cb) return cb(bb)
          } else if ("function" === typeof cancelAnimationFrame) return cancelAnimationFrame(bb);
          return clearTimeout(bb)
        }
      }
      vN() {
        this.onBeginFrameObservable.notifyObservers(this)
      }
      pN() {
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
        const cb = bb - this._lastFrameTime;
        return this._lastFrameTime = bb, this._renderAccumulator += cb, this._renderAccumulator < this._minFrameTime || (this._renderAccumulator -= this._minFrameTime, this._renderAccumulator > this._minFrameTime && (this._renderAccumulator = this._minFrameTime), !1)
      }
      _processFrame(bb) {
        if (this._frameHandler = 0, !this._contextWasLost && !this._isOverFrameTime(bb)) {
          let bb = !0;
          (this.Scb || !this.renderEvenInBackground && this._windowIsBackground) && (bb = !1), bb && (this.vN(), this.skipFrameRender || this._renderViews() || this._renderFrame(), this.pN())
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
      _queueNewFrame(bb, cb) {
        return eb(bb, cb)
      }
      _queueNewFrameForRenderLoop() {
        this.customAnimationFrameRequester ? (this.customAnimationFrameRequester.xm = this._queueNewFrame(this.customAnimationFrameRequester.renderFunction || this._boundRenderFunction, this.customAnimationFrameRequester), this._frameHandler = this.customAnimationFrameRequester.xm) : this._frameHandler = this._queueNewFrame(this._boundRenderFunction, this.getHostWindow())
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
        this._depthCullingState.zOffset = this.Dsb ? -bb : bb
      }
      getZOffset() {
        const bb = this._depthCullingState.zOffset;
        return this.Dsb ? -bb : bb
      }
      setZOffsetUnits(bb) {
        this._depthCullingState.zOffsetUnits = this.Dsb ? -bb : bb
      }
      getZOffsetUnits() {
        const bb = this._depthCullingState.zOffsetUnits;
        return this.Dsb ? -bb : bb
      }
      getHostWindow() {
        return (0, lb.j)() ? this._renderingCanvas && this._renderingCanvas.ownerDocument && this._renderingCanvas.ownerDocument.defaultView ? this._renderingCanvas.ownerDocument.defaultView : window : null
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
        const cb = this._renderTargetWrapperCache.indexOf(bb); - 1 !== cb && this._renderTargetWrapperCache.splice(cb, 1)
      }
      get currentViewport() {
        return this._cachedViewport
      }
      setViewport(bb, cb, sb) {
        const kb = cb || this.getRenderWidth(),
          Wb = sb || this.getRenderHeight(),
          ab = bb.x || 0,
          Tb = bb.y || 0;
        this._cachedViewport = bb, this._viewport(ab * kb, Tb * Wb, kb * bb.width, Wb * bb.height)
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
      _createTextureBase(bb, cb, sb, kb) {
        let Wb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3,
          Ub = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          Ib = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
          Hb = arguments.length > 7 ? arguments[7] : void 0,
          fb = arguments.length > 8 ? arguments[8] : void 0,
          Mb = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null,
          Xb = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : null,
          nb = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : null,
          lb = arguments.length > 12 && void 0 !== arguments[12] ? arguments[12] : null,
          Qb = arguments.length > 13 ? arguments[13] : void 0,
          eb = arguments.length > 14 ? arguments[14] : void 0,
          Nb = arguments.length > 15 ? arguments[15] : void 0;
        const Vb = "data:" === (bb = bb || "").substring(0, 5),
          Lb = "blob:" === bb.substring(0, 5),
          ub = Vb && -1 !== bb.indexOf(";base64,"),
          Yb = Xb || new mb.b(this, 1);
        Yb !== Xb && (Yb.label = bb.substring(0, 60));
        const hb = bb;
        !this._transformTextureUrl || ub || Xb || Mb || (bb = this._transformTextureUrl(bb)), hb !== bb && (Yb._originalUrl = hb);
        const Jb = bb.lastIndexOf(".");
        let gb = lb || (Jb > -1 ? bb.substring(Jb).toLowerCase() : "");
        gb.indexOf("?") > -1 && (gb = gb.split("?")[0]);
        const Bb = Cb.GetCompatibleTextureLoader(gb, Qb);
        kb && kb.addPendingData(Yb), Yb.url = bb, Yb.generateMipMaps = !cb, Yb.samplingMode = Wb, Yb.invertY = sb, Yb._useSRGBBuffer = this._getUseSRGBBuffer(!!Nb, cb), this._doNotHandleContextLost || (Yb._buffer = Mb);
        let tb = null;
        Ub && !Xb && (tb = Yb.onLoadedObservable.add(Ub)), Xb || this._internalTexturesCache.push(Yb);
        const yb = (sb, Xb) => {
          kb && kb.removePendingData(Yb), bb === hb ? (tb && Yb.onLoadedObservable.remove(tb), ab.d.UseFallbackTexture && bb !== ab.d.FallbackTexture && this._createTextureBase(ab.d.FallbackTexture, cb, Yb.invertY, kb, Wb, null, Ib, Hb, fb, Mb, Yb), sb = (sb || "Unknown error") + (ab.d.UseFallbackTexture ? " - Fallback texture was used" : ""), Yb.onErrorObservable.notifyObservers({
            message: sb,
            exception: Xb
          }), Ib && Ib(sb, Xb)) : (Tb.c.Warn(`Failed to load ${bb}, falling back to ${hb}`), this._createTextureBase(hb, cb, Yb.invertY, kb, Wb, Ub, Ib, Hb, fb, Mb, Yb, nb, lb, Qb, eb, Nb))
        };
        if (Bb) {
          const cb = async bb => {
            (await Bb).loadData(bb, Yb, ((bb, cb, sb, ab, Tb, Ub) => {
              Ub ? yb("TextureLoader failed to load data") : Hb(Yb, gb, kb, {
                width: bb,
                height: cb
              }, Yb.invertY, !sb, ab, (() => (Tb(), !1)), Wb)
            }), eb)
          };
          if (Mb) {
            const bb = async bb => {
              try {
                await cb(bb)
              } catch (sb) {
                yb("Failed to parse texture data", sb)
              }
            };
            Mb instanceof ArrayBuffer ? bb(new Uint8Array(Mb)) : ArrayBuffer.isView(Mb) ? bb(Mb) : Ib && Ib("Unable to load: only ArrayBuffer or ArrayBufferView is supported", null)
          } else this._loadFile(bb, (async bb => {
            try {
              await cb(new Uint8Array(bb))
            } catch (sb) {
              yb("Failed to parse texture data", sb)
            }
          }), void 0, kb ? kb.offlineProvider : void 0, !0, ((bb, cb) => {
            yb("Unable to load " + (bb && bb.responseURL, cb))
          }))
        } else {
          const sb = bb => {
            Lb && !this._doNotHandleContextLost && (Yb._buffer = bb), Hb(Yb, gb, kb, bb, Yb.invertY, cb, !1, fb, Wb)
          };
          !Vb || ub ? Mb && ("string" === typeof Mb.decoding || Mb.close) ? sb(Mb) : Cb._FileToolsLoadImage(bb || "", sb, yb, kb ? kb.offlineProvider : null, Qb, Yb.invertY && this._features.needsInvertingBitmap ? {
            imageOrientation: "flipY"
          } : void 0, this) : "string" === typeof Mb || Mb instanceof ArrayBuffer || ArrayBuffer.isView(Mb) || Mb instanceof Blob ? Cb._FileToolsLoadImage(Mb, sb, yb, kb ? kb.offlineProvider : null, Qb, Yb.invertY && this._features.needsInvertingBitmap ? {
            imageOrientation: "flipY"
          } : void 0, this) : Mb && sb(Mb)
        }
        return Yb
      }
      _rebuildBuffers() {
        for (const bb of this._uniformBuffers) bb._rebuildAfterContextLost()
      }
      get _shouldUseHighPrecisionShader() {
        return !(!this._caps.highPrecisionShaderSupported || !this._highPrecisionShadersAllowed)
      }
      getHostDocument() {
        return this._renderingCanvas && this._renderingCanvas.ownerDocument ? this._renderingCanvas.ownerDocument : (0, lb.f)() ? document : null
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
      constructor(bb, cb, sb) {
        this._colorWrite = !0, this._colorWriteChanged = !0, this._depthCullingState = new Hb, this._stencilStateComposer = new fb, this._stencilState = new Mb, this._alphaState = new Xb.b(!1), this._alphaMode = Array(8).fill(-1), this._alphaEquation = Array(8).fill(-1), this._activeRequests = [], this._badOS = !1, this._badDesktopOS = !1, this._compatibilityMode = !0, this._internalTexturesCache = new Array, this._currentRenderTarget = null, this._boundTexturesCache = {}, this._activeChannel = 0, this._currentTextureChannel = -1, this._viewportCached = {
          x: 0,
          y: 0,
          z: 0,
          w: 0
        }, this._isWebGPU = !1, this._enableGPUDebugMarkers = !1, this.onCanvasBlurObservable = new kb.c, this.onCanvasFocusObservable = new kb.c, this.onNewSceneAddedObservable = new kb.c, this.onResizeObservable = new kb.c, this.onCanvasPointerOutObservable = new kb.c, this.onEffectErrorObservable = new kb.c, this.disablePerformanceMonitorInBackground = !1, this.disableVertexArrayObjects = !1, this._frameId = 0, this.hostInformation = {
          isMobile: !1
        }, this.isFullscreen = !1, this.enableOfflineSupport = !1, this.disableManifestCheck = !1, this.disableContextMenu = !0, this.currentRenderPassId = 0, this.isPointerLock = !1, this.postProcesses = [], this.canvasTabIndex = 1, this._contextWasLost = !1, this._useReverseDepthBuffer = !1, this.isNDCHalfZRange = !1, this.hasOriginBottomLeft = !0, this._renderTargetWrapperCache = new Array, this._compiledEffects = {}, this._isDisposed = !1, this.scenes = [], this._virtualScenes = new Array, this.onBeforeTextureInitObservable = new kb.c, this.renderEvenInBackground = !0, this.preventCacheWipeBetweenFrames = !1, this._frameHandler = 0, this._activeRenderLoops = new Array, this.customAnimationFrameRequester = null, this._windowIsBackground = !1, this._boundRenderFunction = bb => this._renderLoop(bb), this._lastFrameTime = 0, this._renderAccumulator = 0, this.skipFrameRender = !1, this.onBeforeShaderCompilationObservable = new kb.c, this.onAfterShaderCompilationObservable = new kb.c, this.onBeginFrameObservable = new kb.c, this.onEndFrameObservable = new kb.c, this._transformTextureUrl = null, this._uniformBuffers = new Array, this._storageBuffers = new Array, this._highPrecisionShadersAllowed = !0, this.onContextLostObservable = new kb.c, this.onContextRestoredObservable = new kb.c, this._name = "", this.premultipliedAlpha = !0, this.adaptToDeviceRatio = !1, this._lastDevicePixelRatio = 1, this._doNotHandleContextLost = !1, this.cullBackFaces = null, this._renderPassNames = ["main"], this._onReleaseRenderPassObservable = null, this._fps = 60, this._deltaTime = 0, this._deterministicLockstep = !1, this._lockstepMaxSteps = 4, this._timeStep = 1 / 60, this.ZY = new kb.c, this.onReleaseEffectsObservable = new kb.c, ab.d.Instances.push(this), this.startTime = Ib.e.Now, this._stencilStateComposer.stencilGlobal = this._stencilState, Ub.c.SetMatrixPrecision(!!cb.useLargeWorldRendering || !!cb.useHighPrecisionMatrix), (0, lb.h)() && navigator.userAgent && (this._badOS = /iPad/i.test(navigator.userAgent) || /iPhone/i.test(navigator.userAgent), this._badDesktopOS = /^((?!chrome|android).)*safari/i.test(navigator.userAgent)), cb.antialias = bb ?? cb.antialias, cb.deterministicLockstep = cb.deterministicLockstep ?? !1, cb.lockstepMaxSteps = cb.lockstepMaxSteps ?? 4, cb.timeStep = cb.timeStep ?? 1 / 60, cb.stencil = cb.stencil ?? !0, this._audioContext = cb.audioEngineOptions?.audioContext ?? null, this._audioDestination = cb.audioEngineOptions?.audioDestination ?? null, this.premultipliedAlpha = cb.premultipliedAlpha ?? !0, this._doNotHandleContextLost = !!cb.doNotHandleContextLost, this._isStencilEnable = !!cb.stencil, this.useExactSrgbConversions = cb.useExactSrgbConversions ?? !1, this.canvasTabIndex = cb.canvasTabIndex ?? this.canvasTabIndex;
        const Wb = (0, lb.j)() && window.devicePixelRatio || 1,
          Tb = cb.limitDeviceRatio || Wb;
        sb = sb || cb.adaptToDeviceRatio || !1, this.adaptToDeviceRatio = sb, this._hardwareScalingLevel = sb ? 1 / Math.min(Tb, Wb) : 1, this._lastDevicePixelRatio = Wb, this._creationOptions = cb
      }
      resize() {
        let bb, cb, sb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this.adaptToDeviceRatio) {
          const bb = (0, lb.j)() && window.devicePixelRatio || 1,
            cb = this._lastDevicePixelRatio / bb;
          this._lastDevicePixelRatio = bb, this._hardwareScalingLevel *= cb
        }
        if ((0, lb.j)() && (0, lb.f)())
          if (this._renderingCanvas) {
            const sb = this._renderingCanvas.getBoundingClientRect?.();
            bb = this._renderingCanvas.clientWidth || sb?.width || this._renderingCanvas.width * this._hardwareScalingLevel || 100, cb = this._renderingCanvas.clientHeight || sb?.height || this._renderingCanvas.height * this._hardwareScalingLevel || 100
          } else bb = window.innerWidth, cb = window.innerHeight;
        else bb = this._renderingCanvas ? this._renderingCanvas.width : 100, cb = this._renderingCanvas ? this._renderingCanvas.height : 100;
        this.setSize(bb / this._hardwareScalingLevel, cb / this._hardwareScalingLevel, sb)
      }
      setSize(bb, cb) {
        let sb = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (!this._renderingCanvas) return !1;
        if (bb |= 0, cb |= 0, !sb && this._renderingCanvas.width === bb && this._renderingCanvas.height === cb) return !1;
        if (this._renderingCanvas.width = bb, this._renderingCanvas.height = cb, this.scenes) {
          for (let bb = 0; bb < this.scenes.length; bb++) {
            const cb = this.scenes[bb];
            for (let bb = 0; bb < cb.cameras.length; bb++) {
              cb.cameras[bb]._currentRenderId = 0
            }
          }
          this.onResizeObservable.hasObservers() && this.onResizeObservable.notifyObservers(this)
        }
        return !0
      }
      createRawTexture(bb, cb, sb, kb, Wb, ab, Tb, Ub, Ib, Hb, fb, Mb) {
        throw (0, nb.i)("engine.rawTexture")
      }
      createRawCubeTexture(bb, cb, sb, kb, Wb, ab, Tb, Ub) {
        throw (0, nb.i)("engine.rawTexture")
      }
      createRawTexture3D(bb, cb, sb, kb, Wb, ab, Tb, Ub, Ib, Hb, fb) {
        throw (0, nb.i)("engine.rawTexture")
      }
      createRawTexture2DArray(bb, cb, sb, kb, Wb, ab, Tb, Ub, Ib, Hb, fb, Mb) {
        throw (0, nb.i)("engine.rawTexture")
      }
      _sharedInit(bb) {
        this._renderingCanvas = bb
      }
      _setupMobileChecks() {
        navigator && navigator.userAgent && (this._checkForMobile = () => {
          const bb = navigator.userAgent;
          this.hostInformation.isMobile = -1 !== bb.indexOf("Mobile") || -1 !== bb.indexOf("Mac") && (0, lb.f)() && "ontouchend" in document
        }, this._checkForMobile(), (0, lb.j)() && window.addEventListener("resize", this._checkForMobile))
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
      _createImageBitmapFromSource(bb, cb) {
        throw new Error("createImageBitmapFromSource is not implemented")
      }
      createImageBitmap(bb, cb) {
        return createImageBitmap(bb, cb)
      }
      resizeImageBitmap(bb, cb, sb) {
        throw new Error("resizeImageBitmap is not implemented")
      }
      getFontOffset(bb) {
        throw new Error("getFontOffset is not implemented")
      }
      static _CreateCanvas(bb, cb) {
        if ("undefined" === typeof document) return new OffscreenCanvas(bb, cb);
        const sb = document.createElement("canvas");
        return sb.width = bb, sb.height = cb, sb
      }
      createCanvas(bb, cb) {
        return Cb._CreateCanvas(bb, cb)
      }
      static _FileToolsLoadImage(bb, cb, sb, kb, Wb, ab, Tb) {
        if (!Qb.c.loadImage) throw (0, nb.i)("FileTools");
        return Qb.c.loadImage(bb, cb, sb, kb, Wb, ab, Tb)
      }
      _loadFile(bb, cb, sb, kb, Wb, ab) {
        const Tb = (0, Qb.m)(bb, cb, sb, kb, Wb, ab);
        return this._activeRequests.push(Tb), Tb.onCompleteObservable.add((() => {
          const bb = this._activeRequests.indexOf(Tb); - 1 !== bb && this._activeRequests.splice(bb, 1)
        })), Tb
      }
      static _FileToolsLoadFile(bb, cb, sb, kb, Wb, ab) {
        if (Qb.c.loadFile) return Qb.c.loadFile(bb, cb, sb, kb, Wb, ab);
        throw (0, nb.i)("FileTools")
      }
      dispose() {
        for (this.releaseEffects(), this._isDisposed = !0, this.stopRenderLoop(), this._emptyTexture && (this._releaseTexture(this._emptyTexture), this._emptyTexture = null), this._emptyCubeTexture && (this._releaseTexture(this._emptyCubeTexture), this._emptyCubeTexture = null), this._renderingCanvas = null, this.onBeforeTextureInitObservable && this.onBeforeTextureInitObservable.clear(); this.postProcesses.length;) this.postProcesses[0].dispose();
        for (; this.scenes.length;) this.scenes[0].dispose();
        for (; this._virtualScenes.length;) this._virtualScenes[0].dispose();
        this.releaseComputeEffects?.(), Wb.c.ResetCache();
        for (const cb of this._activeRequests) cb.abort();
        this._boundRenderFunction = null, this.ZY.notifyObservers(this), this.ZY.clear(), this.onResizeObservable.clear(), this.onCanvasBlurObservable.clear(), this.onCanvasFocusObservable.clear(), this.onCanvasPointerOutObservable.clear(), this.onNewSceneAddedObservable.clear(), this.onEffectErrorObservable.clear(), (0, lb.j)() && window.removeEventListener("resize", this._checkForMobile);
        const bb = ab.d.Instances.indexOf(this);
        bb >= 0 && ab.d.Instances.splice(bb, 1), ab.d.Instances.length || (ab.d.OnEnginesDisposedObservable.notifyObservers(this), ab.d.OnEnginesDisposedObservable.clear()), this.onBeginFrameObservable.clear(), this.onEndFrameObservable.clear(), this._onReleaseRenderPassObservable?.clear(), this._onReleaseRenderPassObservable = null
      }
      static DefaultLoadingScreenFactory(bb) {
        throw (0, nb.i)("LoadingScreen")
      }
      static MarkAllMaterialsAsDirty(bb, cb) {
        for (let sb = 0; sb < ab.d.Instances.length; sb++) {
          const kb = ab.d.Instances[sb];
          for (let sb = 0; sb < kb.scenes.length; sb++) kb.scenes[sb].markAllMaterialsAsDirty(bb, cb)
        }
      }
      static GetCompatibleTextureLoader(bb, cb) {
        return null
      }
    }
    Cb._RenderPassIdCounter = 0, Cb._RescalePostProcessFactory = null, Cb.CollisionsEpsilon = .001, Cb.QueueNewFrame = eb
  },
  39267: (bb, cb, sb) => {
    sb.d(cb, {
      d: () => kb
    });
    class kb {
      static GetShadersRepository() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? kb.ShadersRepository : kb.ShadersRepositoryWGSL
      }
      static GetShadersStore() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? kb.ShadersStore : kb.ShadersStoreWGSL
      }
      static GetIncludesShadersStore() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? kb.IncludesShadersStore : kb.IncludesShadersStoreWGSL
      }
    }
    kb.ShadersRepository = "src/Shaders/", kb.ShadersStore = {}, kb.IncludesShadersStore = {}, kb.ShadersRepositoryWGSL = "src/ShadersWGSL/", kb.ShadersStoreWGSL = {}, kb.IncludesShadersStoreWGSL = {}
  },
  39284: (bb, cb, sb) => {
    sb.d(cb, {
      d: () => Xb,
      e: () => Nb,
      i: () => mb,
      l: () => nb,
      p: () => lb,
      s: () => Cb,
      v: () => Mb,
      w: () => Hb,
      A: () => fb,
      B: () => Ib,
      C: () => Ub
    });
    class kb {
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
      _fillEffectInformation(bb, cb, sb, kb, Wb, ab, Tb, Ub) {
        const Ib = this.engine;
        if (Ib.supportsUniformBuffers)
          for (const fb in cb) bb.bindUniformBlock(fb, cb[fb]);
        let Hb;
        for (this.engine.getUniforms(this, sb).forEach(((bb, cb) => {
            kb[sb[cb]] = bb
          })), this._uniforms = kb, Hb = 0; Hb < Wb.length; Hb++) {
          null == bb.getUniform(Wb[Hb]) && (Wb.splice(Hb, 1), Hb--)
        }
        Wb.forEach(((bb, cb) => {
          ab[bb] = cb
        }));
        for (const fb of Ib.getAttributes(this, Tb)) Ub.push(fb)
      }
      dispose() {
        this._uniforms = {}, this._isDisposed = !0
      }
      _cacheMatrix(bb, cb) {
        const sb = this._valueCache[bb],
          kb = cb.updateFlag;
        if (void 0 !== sb && sb === kb) return !1;
        const Wb = cb.Osb();
        let ab = this._matrixValueCache[bb];
        if (void 0 !== sb && null !== sb && void 0 !== ab) {
          let cb = !0;
          for (let bb = 15; bb >= 0; bb--)
            if (ab[bb] !== Wb[bb]) {
              cb = !1;
              break
            } if (cb) return this._valueCache[bb] = kb, !1
        }
        return void 0 === ab && (ab = this._matrixValueCache[bb] = new Float32Array(16)), ab.set(Wb), this._valueCache[bb] = kb, !0
      }
      _cacheFloat2(bb, cb, sb) {
        let kb = this._valueCache[bb];
        if (!kb || 2 !== kb.length) return kb = [cb, sb], this._valueCache[bb] = kb, !0;
        let Wb = !1;
        return kb[0] !== cb && (kb[0] = cb, Wb = !0), kb[1] !== sb && (kb[1] = sb, Wb = !0), Wb
      }
      _cacheFloat3(bb, cb, sb, kb) {
        let Wb = this._valueCache[bb];
        if (!Wb || 3 !== Wb.length) return Wb = [cb, sb, kb], this._valueCache[bb] = Wb, !0;
        let ab = !1;
        return Wb[0] !== cb && (Wb[0] = cb, ab = !0), Wb[1] !== sb && (Wb[1] = sb, ab = !0), Wb[2] !== kb && (Wb[2] = kb, ab = !0), ab
      }
      _cacheFloat4(bb, cb, sb, kb, Wb) {
        let ab = this._valueCache[bb];
        if (!ab || 4 !== ab.length) return ab = [cb, sb, kb, Wb], this._valueCache[bb] = ab, !0;
        let Tb = !1;
        return ab[0] !== cb && (ab[0] = cb, Tb = !0), ab[1] !== sb && (ab[1] = sb, Tb = !0), ab[2] !== kb && (ab[2] = kb, Tb = !0), ab[3] !== Wb && (ab[3] = Wb, Tb = !0), Tb
      }
      setInt(bb, cb) {
        const sb = this._valueCache[bb];
        void 0 !== sb && sb === cb || this.engine.setInt(this._uniforms[bb], cb) && (this._valueCache[bb] = cb)
      }
      setInt2(bb, cb, sb) {
        this._cacheFloat2(bb, cb, sb) && (this.engine.setInt2(this._uniforms[bb], cb, sb) || (this._valueCache[bb] = null))
      }
      setInt3(bb, cb, sb, kb) {
        this._cacheFloat3(bb, cb, sb, kb) && (this.engine.setInt3(this._uniforms[bb], cb, sb, kb) || (this._valueCache[bb] = null))
      }
      setInt4(bb, cb, sb, kb, Wb) {
        this._cacheFloat4(bb, cb, sb, kb, Wb) && (this.engine.setInt4(this._uniforms[bb], cb, sb, kb, Wb) || (this._valueCache[bb] = null))
      }
      setIntArray(bb, cb) {
        this._valueCache[bb] = null, this.engine.setIntArray(this._uniforms[bb], cb)
      }
      setIntArray2(bb, cb) {
        this._valueCache[bb] = null, this.engine.setIntArray2(this._uniforms[bb], cb)
      }
      setIntArray3(bb, cb) {
        this._valueCache[bb] = null, this.engine.setIntArray3(this._uniforms[bb], cb)
      }
      setIntArray4(bb, cb) {
        this._valueCache[bb] = null, this.engine.setIntArray4(this._uniforms[bb], cb)
      }
      setUInt(bb, cb) {
        const sb = this._valueCache[bb];
        void 0 !== sb && sb === cb || this.engine.setUInt(this._uniforms[bb], cb) && (this._valueCache[bb] = cb)
      }
      setUInt2(bb, cb, sb) {
        this._cacheFloat2(bb, cb, sb) && (this.engine.setUInt2(this._uniforms[bb], cb, sb) || (this._valueCache[bb] = null))
      }
      setUInt3(bb, cb, sb, kb) {
        this._cacheFloat3(bb, cb, sb, kb) && (this.engine.setUInt3(this._uniforms[bb], cb, sb, kb) || (this._valueCache[bb] = null))
      }
      setUInt4(bb, cb, sb, kb, Wb) {
        this._cacheFloat4(bb, cb, sb, kb, Wb) && (this.engine.setUInt4(this._uniforms[bb], cb, sb, kb, Wb) || (this._valueCache[bb] = null))
      }
      setUIntArray(bb, cb) {
        this._valueCache[bb] = null, this.engine.setUIntArray(this._uniforms[bb], cb)
      }
      setUIntArray2(bb, cb) {
        this._valueCache[bb] = null, this.engine.setUIntArray2(this._uniforms[bb], cb)
      }
      setUIntArray3(bb, cb) {
        this._valueCache[bb] = null, this.engine.setUIntArray3(this._uniforms[bb], cb)
      }
      setUIntArray4(bb, cb) {
        this._valueCache[bb] = null, this.engine.setUIntArray4(this._uniforms[bb], cb)
      }
      setArray(bb, cb) {
        this._valueCache[bb] = null, this.engine.setArray(this._uniforms[bb], cb)
      }
      setArray2(bb, cb) {
        this._valueCache[bb] = null, this.engine.setArray2(this._uniforms[bb], cb)
      }
      setArray3(bb, cb) {
        this._valueCache[bb] = null, this.engine.setArray3(this._uniforms[bb], cb)
      }
      setArray4(bb, cb) {
        this._valueCache[bb] = null, this.engine.setArray4(this._uniforms[bb], cb)
      }
      setMatrices(bb, cb) {
        cb && (this._valueCache[bb] = null, this.engine.setMatrices(this._uniforms[bb], cb))
      }
      setMatrix(bb, cb) {
        this._cacheMatrix(bb, cb) && (this.engine.setMatrices(this._uniforms[bb], cb.Osb()) || (this._valueCache[bb] = null))
      }
      setMatrix3x3(bb, cb) {
        this._valueCache[bb] = null, this.engine.setMatrix3x3(this._uniforms[bb], cb)
      }
      setMatrix2x2(bb, cb) {
        this._valueCache[bb] = null, this.engine.setMatrix2x2(this._uniforms[bb], cb)
      }
      setFloat(bb, cb) {
        const sb = this._valueCache[bb];
        void 0 !== sb && sb === cb || this.engine.setFloat(this._uniforms[bb], cb) && (this._valueCache[bb] = cb)
      }
      setVector2(bb, cb) {
        this._cacheFloat2(bb, cb.x, cb.y) && (this.engine.setFloat2(this._uniforms[bb], cb.x, cb.y) || (this._valueCache[bb] = null))
      }
      setFloat2(bb, cb, sb) {
        this._cacheFloat2(bb, cb, sb) && (this.engine.setFloat2(this._uniforms[bb], cb, sb) || (this._valueCache[bb] = null))
      }
      setVector3(bb, cb) {
        this._cacheFloat3(bb, cb.x, cb.y, cb.z) && (this.engine.setFloat3(this._uniforms[bb], cb.x, cb.y, cb.z) || (this._valueCache[bb] = null))
      }
      setFloat3(bb, cb, sb, kb) {
        this._cacheFloat3(bb, cb, sb, kb) && (this.engine.setFloat3(this._uniforms[bb], cb, sb, kb) || (this._valueCache[bb] = null))
      }
      setVector4(bb, cb) {
        this._cacheFloat4(bb, cb.x, cb.y, cb.z, cb.w) && (this.engine.setFloat4(this._uniforms[bb], cb.x, cb.y, cb.z, cb.w) || (this._valueCache[bb] = null))
      }
      setQuaternion(bb, cb) {
        this._cacheFloat4(bb, cb.x, cb.y, cb.z, cb.w) && (this.engine.setFloat4(this._uniforms[bb], cb.x, cb.y, cb.z, cb.w) || (this._valueCache[bb] = null))
      }
      setFloat4(bb, cb, sb, kb, Wb) {
        this._cacheFloat4(bb, cb, sb, kb, Wb) && (this.engine.setFloat4(this._uniforms[bb], cb, sb, kb, Wb) || (this._valueCache[bb] = null))
      }
      setColor3(bb, cb) {
        this._cacheFloat3(bb, cb.r, cb.g, cb.b) && (this.engine.setFloat3(this._uniforms[bb], cb.r, cb.g, cb.b) || (this._valueCache[bb] = null))
      }
      setColor4(bb, cb, sb) {
        this._cacheFloat4(bb, cb.r, cb.g, cb.b, sb) && (this.engine.setFloat4(this._uniforms[bb], cb.r, cb.g, cb.b, sb) || (this._valueCache[bb] = null))
      }
      setDirectColor4(bb, cb) {
        this._cacheFloat4(bb, cb.r, cb.g, cb.b, cb.a) && (this.engine.setFloat4(this._uniforms[bb], cb.r, cb.g, cb.b, cb.a) || (this._valueCache[bb] = null))
      }
      _getVertexShaderCode() {
        return this.vertexShader ? this.engine._getShaderSource(this.vertexShader) : null
      }
      _getFragmentShaderCode() {
        return this.fragmentShader ? this.engine._getShaderSource(this.fragmentShader) : null
      }
    }
    var Wb = sb(39287);
    const ab = new WeakMap,
      Tb = {
        _webGLVersion: 2,
        cachedPipelines: {}
      };

    function Ub(bb) {
      let cb = ab.get(bb);
      if (!cb) {
        if (!bb) return Tb;
        cb = {
          _webGLVersion: bb.TEXTURE_BINDING_3D ? 2 : 1,
          _context: bb,
          parallelShaderCompile: bb.getExtension("KHR_parallel_shader_compile") || void 0,
          cachedPipelines: {}
        }, ab.set(bb, cb)
      }
      return cb
    }

    function Ib(bb) {
      ab.delete(bb)
    }

    function Hb(bb, cb, sb, kb, Wb, ab) {
      const Tb = Ub(kb);
      ab || (ab = Tb._createShaderProgramInjection ?? Xb);
      return ab(bb, eb(cb, "vertex", kb, Tb._contextWasLost), eb(sb, "fragment", kb, Tb._contextWasLost), kb, Wb, Tb.validateShaderPrograms)
    }

    function fb(bb, cb, sb, kb, Wb) {
      let ab = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        Tb = arguments.length > 6 ? arguments[6] : void 0;
      const Ib = Ub(Wb);
      Tb || (Tb = Ib._createShaderProgramInjection ?? Xb);
      const Hb = Ib._webGLVersion > 1 ? "#version 300 es\n#define WEBGL2 \n" : "";
      return Tb(bb, Qb(cb, "vertex", kb, Hb, Wb, Ib._contextWasLost), Qb(sb, "fragment", kb, Hb, Wb, Ib._contextWasLost), Wb, ab, Ib.validateShaderPrograms)
    }

    function Mb(bb, cb) {
      const sb = new kb,
        Wb = Ub(bb);
      return Wb.parallelShaderCompile && !Wb.disableParallelShaderCompile && (sb.isParallelCompiled = !0), sb.context = Wb._context, sb
    }

    function Xb(bb, cb, sb, kb) {
      let Wb = arguments.length > 5 ? arguments[5] : void 0;
      const ab = kb.createProgram();
      if (bb.program = ab, !ab) throw new Error("Unable to create program");
      return kb.attachShader(ab, cb), kb.attachShader(ab, sb), kb.linkProgram(ab), bb.context = kb, bb.vertexShader = cb, bb.fragmentShader = sb, bb.isParallelCompiled || mb(bb, kb, Wb), ab
    }

    function nb(bb, cb, sb) {
      const kb = bb;
      if (kb._isDisposed) return !1;
      const Wb = Ub(cb);
      return !!(Wb && Wb.parallelShaderCompile && Wb.parallelShaderCompile.COMPLETION_STATUS_KHR && kb.program && cb.getProgramParameter(kb.program, Wb.parallelShaderCompile.COMPLETION_STATUS_KHR)) && (mb(kb, cb, sb), !0)
    }

    function mb(bb, cb, sb) {
      const kb = bb.context,
        Wb = bb.vertexShader,
        ab = bb.fragmentShader,
        Tb = bb.program;
      if (!kb.getProgramParameter(Tb, kb.LINK_STATUS)) {
        if (!cb.getShaderParameter(Wb, cb.COMPILE_STATUS)) {
          const sb = cb.getShaderInfoLog(Wb);
          if (sb) throw bb.vertexCompilationError = sb, new Error("VERTEX SHADER " + sb)
        }
        if (!cb.getShaderParameter(ab, cb.COMPILE_STATUS)) {
          const sb = cb.getShaderInfoLog(ab);
          if (sb) throw bb.fragmentCompilationError = sb, new Error("FRAGMENT SHADER " + sb)
        }
        const sb = kb.getProgramInfoLog(Tb);
        if (sb) throw bb.programLinkError = sb, new Error(sb)
      }
      if (sb) {
        kb.validateProgram(Tb);
        if (!kb.getProgramParameter(Tb, kb.VALIDATE_STATUS)) {
          const cb = kb.getProgramInfoLog(Tb);
          if (cb) throw bb.programValidationError = cb, new Error(cb)
        }
      }
      kb.deleteShader(Wb), kb.deleteShader(ab), bb.vertexShader = void 0, bb.fragmentShader = void 0, bb.onCompiled && (bb.onCompiled(), bb.onCompiled = void 0)
    }

    function lb(bb, cb, sb, kb, Wb, ab, Tb, Ib, Mb) {
      let Xb = arguments.length > 10 ? arguments[10] : void 0,
        nb = arguments.length > 11 ? arguments[11] : void 0,
        mb = arguments.length > 12 ? arguments[12] : void 0;
      const lb = Ub(bb.context);
      nb || (nb = lb.createRawShaderProgramInjection ?? Hb), mb || (mb = lb.createShaderProgramInjection ?? fb);
      const Qb = bb;
      Qb.program = kb ? nb(Qb, cb, sb, Qb.context, Mb) : mb(Qb, cb, sb, Ib, Qb.context, Mb), Qb.program.__SPECTOR_rebuildProgram = Tb, Xb()
    }

    function Qb(bb, cb, sb, kb, ab, Tb) {
      return eb((0, Wb.g)(bb, sb, kb), cb, ab, Tb)
    }

    function eb(bb, cb, sb, kb) {
      const Wb = sb.createShader("vertex" === cb ? sb.VERTEX_SHADER : sb.FRAGMENT_SHADER);
      if (!Wb) {
        let bb, Wb = sb.NO_ERROR;
        for (;
          (bb = sb.getError()) !== sb.NO_ERROR;) Wb = bb;
        throw new Error(`Something went wrong while creating a gl ${cb} shader object. gl error=${Wb}, gl isContextLost=${sb.isContextLost()}, _contextWasLost=${kb}`)
      }
      return sb.shaderSource(Wb, bb), sb.compileShader(Wb), Wb
    }

    function Cb(bb, cb) {
      cb.useProgram(bb)
    }

    function Nb(bb, cb) {
      const sb = bb;
      if (!sb.isParallelCompiled) return void cb(bb);
      const kb = sb.onCompiled;
      sb.onCompiled = () => {
        kb?.(), cb(bb)
      }
    }
  },
  39251: (bb, cb, sb) => {
    sb.d(cb, {
      ThinEngine: () => Lb
    });
    var kb = sb(39258),
      Wb = sb(39284),
      ab = sb(39311),
      Tb = sb(39328),
      Ub = sb(38284),
      Ib = sb(39278);
    class Hb {
      constructor() {
        this.shaderLanguage = 0
      }
      postProcessor(bb, cb, sb, kb, Wb) {
        if (Wb.drawBuffersExtensionDisabled) {
          const cb = /#extension.+GL_EXT_draw_buffers.+(enable|require)/g;
          bb = bb.replace(cb, "")
        }
        return bb
      }
    }
    const fb = /(flat\s)?\s*varying\s*.*/;
    class Mb {
      constructor() {
        this.shaderLanguage = 0
      }
      attributeProcessor(bb) {
        return bb.replace("attribute", "in")
      }
      varyingCheck(bb, cb) {
        return fb.test(bb)
      }
      varyingProcessor(bb, cb) {
        return bb.replace("varying", cb ? "in" : "out")
      }
      postProcessor(bb, cb, sb) {
        const kb = -1 !== bb.search(/#extension.+GL_EXT_draw_buffers.+require/);
        if (bb = (bb = bb.replace(/#extension.+(GL_OVR_multiview2|GL_OES_standard_derivatives|GL_EXT_shader_texture_lod|GL_EXT_frag_depth|GL_EXT_draw_buffers).+(enable|require)/g, "")).replace(/texture2D\s*\(/g, "texture("), sb) {
          const sb = -1 !== bb.search(/layout *\(location *= *0\) *out/g),
            Wb = -1 !== cb.indexOf("#define DUAL_SOURCE_BLENDING"),
            ab = Wb ? "layout(location = 0, index = 0) out vec4 glFragColor;\nlayout(location = 0, index = 1) out vec4 glFragColor2;\n" : "layout(location = 0) out vec4 glFragColor;\n";
          Wb && (bb = "#extension GL_EXT_blend_func_extended : require\n" + bb), bb = (bb = (bb = (bb = (bb = (bb = (bb = bb.replace(/texture2DLodEXT\s*\(/g, "textureLod(")).replace(/textureCubeLodEXT\s*\(/g, "textureLod(")).replace(/textureCube\s*\(/g, "texture(")).replace(/gl_FragDepthEXT/g, "gl_FragDepth")).replace(/gl_FragColor/g, "glFragColor")).replace(/gl_FragData/g, "glFragData")).replace(/void\s+?main\s*\(/g, (kb || sb ? "" : ab) + "void main(")
        } else {
          cb.indexOf("#define VERTEXOUTPUT_INVARIANT") >= 0 && (bb = "invariant gl_Position;\n" + bb);
          if (-1 !== cb.indexOf("#define MULTIVIEW")) return "#extension GL_OVR_multiview2 : require\nlayout (num_views = 2) in;\n" + bb
        }
        return bb
      }
    }
    var Xb = sb(39330),
      nb = sb(39337),
      mb = sb(39346),
      lb = sb(39241),
      Qb = sb(39287),
      eb = sb(39276),
      Cb = sb(39353),
      Nb = sb(39320);
    class Vb {}
    class Lb extends ab.b {
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
        return kb.c.ShadersRepository
      }
      static set ShadersRepository(bb) {
        kb.c.ShadersRepository = bb
      }
      get supportsUniformBuffers() {
        return this.gl > 1 && !this.disableUniformBuffers
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
      constructor(bb, cb, sb, kb) {
        if (sb = sb || {}, super(cb ?? sb.antialias, sb, kb), this._name = "WebGL", this.forcePOTTextures = !1, this.validateShaderPrograms = !1, this.disableUniformBuffers = !1, this._webGLVersion = 1, this._integerMRTAttachmentsMask = 0, this._vertexAttribArraysEnabled = [], this._uintIndicesCurrentlySet = !1, this._currentBoundBuffer = new Array, this._currentFramebuffer = null, this._dummyFramebuffer = null, this._currentBufferPointers = new Array, this._currentInstanceLocations = new Array, this._currentInstanceBuffers = new Array, this._vaoRecordInProgress = !1, this._mustWipeVertexAttributes = !1, this._nextFreeTextureSlots = new Array, this._maxSimultaneousTextures = 0, this._maxMSAASamplesOverride = null, this._unpackFlipYCached = null, this.enableUnpackFlipYCached = !0, this._boundUniforms = {}, !bb) return;
        let ab;
        if (bb.getContext) {
          if (ab = bb, void 0 === sb.preserveDrawingBuffer && (sb.preserveDrawingBuffer = !1), void 0 === sb.xrCompatible && (sb.xrCompatible = !1), navigator && navigator.userAgent) {
            this._setupMobileChecks();
            const bb = navigator.userAgent;
            for (const cb of Lb.ExceptionList) {
              const kb = cb.key,
                Wb = cb.targets;
              if (new RegExp(kb).test(bb)) {
                if (cb.capture && cb.captureConstraint) {
                  const sb = cb.capture,
                    kb = cb.captureConstraint,
                    Wb = new RegExp(sb).exec(bb);
                  if (Wb && Wb.length > 0) {
                    if (parseInt(Wb[Wb.length - 1]) >= kb) continue
                  }
                }
                for (const bb of Wb) switch (bb) {
                  case "uniformBuffer":
                    this.disableUniformBuffers = !0;
                    break;
                  case "vao":
                    this.disableVertexArrayObjects = !0;
                    break;
                  case "antialias":
                    sb.antialias = !1;
                    break;
                  case "maxMSAASamples":
                    this._maxMSAASamplesOverride = 1
                }
              }
            }
          }
          if (this._doNotHandleContextLost ? this._onContextLost = () => {
              (0, Wb.B)(this._gl)
            } : (this._onContextLost = bb => {
              bb.preventDefault(), this._contextWasLost = !0, (0, Wb.B)(this._gl), Ub.c.Warn("WebGL context lost."), this.onContextLostObservable.notifyObservers(this)
            }, this._onContextRestored = () => {
              this._restoreEngineAfterContextLost((() => this._initGLContext()))
            }, ab.addEventListener("webglcontextrestored", this._onContextRestored, !1), sb.powerPreference = sb.powerPreference || "high-performance"), ab.addEventListener("webglcontextlost", this._onContextLost, !1), this._badDesktopOS && (sb.xrCompatible = !1), !sb.disableWebGL2Support) try {
            this._gl = ab.getContext("webgl2", sb) || ab.getContext("experimental-webgl2", sb), this._gl && (this._webGLVersion = 2, this._shaderPlatformName = "WEBGL2", this._gl.deleteQuery || (this._webGLVersion = 1, this._shaderPlatformName = "WEBGL1"))
          } catch (fb) {}
          if (!this._gl) {
            if (!ab) throw new Error("The provided canvas is null or undefined.");
            try {
              this._gl = ab.getContext("webgl", sb) || ab.getContext("experimental-webgl", sb)
            } catch (fb) {
              throw new Error("WebGL not supported", {
                cause: fb
              })
            }
          }
          if (!this._gl) throw new Error("WebGL not supported")
        } else {
          this._gl = bb, ab = this._gl.canvas, this._gl.renderbufferStorageMultisample ? (this._webGLVersion = 2, this._shaderPlatformName = "WEBGL2") : this._shaderPlatformName = "WEBGL1";
          const cb = this._gl.getContextAttributes();
          cb && (sb.stencil = cb.stencil)
        }
        this._sharedInit(ab), this._gl.pixelStorei(this._gl.UNPACK_COLORSPACE_CONVERSION_WEBGL, this._gl.NONE), void 0 !== sb.useHighPrecisionFloats && (this._highPrecisionShadersAllowed = sb.useHighPrecisionFloats), this.resize(), this._initGLContext(), this._initFeatures();
        for (let Wb = 0; Wb < this._caps.maxVertexAttribs; Wb++) this._currentBufferPointers[Wb] = new Vb;
        this._shaderProcessor = this.gl > 1 ? new Mb : new Hb;
        const Tb = `Babylon.js v${Lb.Version}`;
        Ub.c.Log(Tb + ` - ${this.description}`), this._renderingCanvas && this._renderingCanvas.setAttribute && this._renderingCanvas.setAttribute("data-engine", Tb);
        const Ib = (0, Wb.C)(this._gl);
        Ib.validateShaderPrograms = this.validateShaderPrograms, Ib.parallelShaderCompile = this._caps.parallelShaderCompile
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
        const cb = this._gl.getExtension("OES_draw_buffers_indexed");
        if (this._caps.blendParametersPerTarget = !!cb, this._alphaState = new Nb.b(this._caps.blendParametersPerTarget), cb && (this._gl.blendEquationSeparateIndexed = cb.blendEquationSeparateiOES.bind(cb), this._gl.blendEquationIndexed = cb.blendEquationiOES.bind(cb), this._gl.blendFuncSeparateIndexed = cb.blendFuncSeparateiOES.bind(cb), this._gl.blendFuncIndexed = cb.blendFunciOES.bind(cb), this._gl.colorMaskIndexed = cb.colorMaskiOES.bind(cb), this._gl.disableIndexed = cb.disableiOES.bind(cb), this._gl.enableIndexed = cb.enableiOES.bind(cb)), this._caps.dualSourceBlending = !!this._gl.getExtension("WEBGL_blend_func_extended"), this._caps.astc && (this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR), this._caps.bptc && (this._gl.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT = this._caps.bptc.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT), this._caps.s3tc_srgb && (this._gl.COMPRESSED_SRGB_S3TC_DXT1_EXT = this._caps.s3tc_srgb.COMPRESSED_SRGB_S3TC_DXT1_EXT, this._gl.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT = this._caps.s3tc_srgb.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT, this._gl.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT = this._caps.s3tc_srgb.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT), this._caps.etc2 && (this._gl.COMPRESSED_SRGB8_ETC2 = this._caps.etc2.COMPRESSED_SRGB8_ETC2, this._gl.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC = this._caps.etc2.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC), this._webGLVersion > 1 && 5131 !== this._gl.HALF_FLOAT_OES && (this._gl.HALF_FLOAT_OES = 5131), this._caps.textureHalfFloatRender = this._caps.textureHalfFloat && this._canRenderToHalfFloatFramebuffer(), this._webGLVersion > 1) this._caps.drawBuffersExtension = !0, this._caps.maxMSAASamples = null !== this._maxMSAASamplesOverride ? this._maxMSAASamplesOverride : this._gl.getParameter(this._gl.MAX_SAMPLES), this._caps.maxDrawBuffers = this._gl.getParameter(this._gl.MAX_DRAW_BUFFERS);
        else {
          const bb = this._gl.getExtension("WEBGL_draw_buffers");
          if (null !== bb) {
            this._caps.drawBuffersExtension = !0, this._gl.drawBuffers = bb.drawBuffersWEBGL.bind(bb), this._caps.maxDrawBuffers = this._gl.getParameter(bb.MAX_DRAW_BUFFERS_WEBGL), this._gl.DRAW_FRAMEBUFFER = this._gl.FRAMEBUFFER;
            for (let cb = 0; cb < 16; cb++) this._gl["COLOR_ATTACHMENT" + cb + "_WEBGL"] = bb["COLOR_ATTACHMENT" + cb + "_WEBGL"]
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
            cb = this._gl.getShaderPrecisionFormat(this._gl.FRAGMENT_SHADER, this._gl.HIGH_FLOAT);
          if (bb && cb && (this._caps.highPrecisionShaderSupported = 0 !== bb.precision && 0 !== cb.precision, this._caps.shaderFloatPrecision = Math.min(bb.precision, cb.precision)), !this._shouldUseHighPrecisionShader) {
            const bb = this._gl.getShaderPrecisionFormat(this._gl.VERTEX_SHADER, this._gl.MEDIUM_FLOAT),
              cb = this._gl.getShaderPrecisionFormat(this._gl.FRAGMENT_SHADER, this._gl.MEDIUM_FLOAT);
            bb && cb && (this._caps.shaderFloatPrecision = Math.min(bb.precision, cb.precision))
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
        for (let sb = 0; sb < this._maxSimultaneousTextures; sb++) this._nextFreeTextureSlots.push(sb);
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
      get gl() {
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
      clear(bb, cb, sb) {
        let kb = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          Wb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
        const ab = this.stencilStateComposer.useStencilGlobalOnly;
        this.stencilStateComposer.useStencilGlobalOnly = !0, this.applyStates(), this.stencilStateComposer.useStencilGlobalOnly = ab;
        let Tb = 0;
        if (cb && bb) {
          let cb = !0;
          if (this._currentRenderTarget) {
            const sb = this._currentRenderTarget.texture?.format;
            if (void 0 !== sb && (0, Cb.f)(sb)) {
              const sb = this._currentRenderTarget.texture?.type;
              void 0 !== sb && (0, Cb.i)(sb) ? (Lb._TempClearColorUint32[0] = 255 * bb.r, Lb._TempClearColorUint32[1] = 255 * bb.g, Lb._TempClearColorUint32[2] = 255 * bb.b, Lb._TempClearColorUint32[3] = 255 * bb.a, this._gl.clearBufferuiv(this._gl.COLOR, 0, Lb._TempClearColorUint32), cb = !1) : (Lb._TempClearColorInt32[0] = 255 * bb.r, Lb._TempClearColorInt32[1] = 255 * bb.g, Lb._TempClearColorInt32[2] = 255 * bb.b, Lb._TempClearColorInt32[3] = 255 * bb.a, this._gl.clearBufferiv(this._gl.COLOR, 0, Lb._TempClearColorInt32), cb = !1)
            }
          }
          cb && (this._gl.clearColor(bb.r, bb.g, bb.b, void 0 !== bb.a ? bb.a : 1), Tb |= this._gl.COLOR_BUFFER_BIT)
        }
        sb && (this.Dsb ? (this._depthCullingState.depthFunc = this._gl.GEQUAL, this._gl.clearDepth(0)) : this._gl.clearDepth(1), Tb |= this._gl.DEPTH_BUFFER_BIT), kb && (this._gl.clearStencil(Wb), Tb |= this._gl.STENCIL_BUFFER_BIT), this._gl.clear(Tb)
      }
      _clearColorAttachment(bb, cb, sb, kb) {
        if ((0, Cb.f)(sb)) {
          const sb = (0, Cb.i)(kb),
            Wb = sb ? Lb._TempClearColorUint32 : Lb._TempClearColorInt32;
          return Wb[0] = cb.r, Wb[1] = cb.g, Wb[2] = cb.b, Wb[3] = cb.a, void(sb ? this._gl.clearBufferuiv(this._gl.COLOR, bb, Wb) : this._gl.clearBufferiv(this._gl.COLOR, bb, Wb))
        }
        Lb._TempClearColorFloat32[0] = cb.r, Lb._TempClearColorFloat32[1] = cb.g, Lb._TempClearColorFloat32[2] = cb.b, Lb._TempClearColorFloat32[3] = cb.a, this._gl.clearBufferfv(this._gl.COLOR, bb, Lb._TempClearColorFloat32)
      }
      _viewport(bb, cb, sb, kb) {
        bb === this._viewportCached.x && cb === this._viewportCached.y && sb === this._viewportCached.z && kb === this._viewportCached.w || (this._viewportCached.x = bb, this._viewportCached.y = cb, this._viewportCached.z = sb, this._viewportCached.w = kb, this._gl.viewport(bb, cb, sb, kb))
      }
      pN() {
        super.pN(), this._badOS && this.flushFramebuffer()
      }
      get performanceMonitor() {
        throw new Error("Not Supported by ThinEngine")
      }
      bindFramebuffer(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          sb = arguments.length > 2 ? arguments[2] : void 0,
          kb = arguments.length > 3 ? arguments[3] : void 0,
          Wb = arguments.length > 4 ? arguments[4] : void 0,
          ab = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          Tb = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        const Ib = bb;
        this._currentRenderTarget && this._resolveAndGenerateMipMapsFramebuffer(this._currentRenderTarget), this._currentRenderTarget = bb, this._integerMRTAttachmentsMask = !bb.isMulti && bb.texture && (0, Cb.f)(bb.texture.format) ? 1 : 0, this._bindUnboundFramebuffer(Ib._framebuffer);
        const Hb = this._gl;
        bb.isMulti || (bb.is2DArray || bb.is3D ? (Hb.framebufferTextureLayer(Hb.FRAMEBUFFER, Hb.COLOR_ATTACHMENT0, bb.texture._hardwareTexture?.underlyingResource, ab, Tb), Ib._currentLOD = ab) : bb.isCube ? Hb.framebufferTexture2D(Hb.FRAMEBUFFER, Hb.COLOR_ATTACHMENT0, Hb.TEXTURE_CUBE_MAP_POSITIVE_X + cb, bb.texture._hardwareTexture?.underlyingResource, ab) : Ib._currentLOD !== ab && (Hb.framebufferTexture2D(Hb.FRAMEBUFFER, Hb.COLOR_ATTACHMENT0, Hb.TEXTURE_2D, bb.texture._hardwareTexture?.underlyingResource, ab), Ib._currentLOD = ab));
        const fb = bb._depthStencilTexture;
        if (fb) {
          bb.is3D && (bb.texture.width === fb.width && bb.texture.height === fb.height && bb.texture.depth === fb.depth || Ub.c.Warn("Depth/Stencil attachment for 3D target must have same dimensions as color attachment"));
          const sb = bb._depthStencilTextureWithStencil ? Hb.DEPTH_STENCIL_ATTACHMENT : Hb.DEPTH_ATTACHMENT;
          bb.is2DArray || bb.is3D ? Hb.framebufferTextureLayer(Hb.FRAMEBUFFER, sb, fb._hardwareTexture?.underlyingResource, ab, Tb) : bb.isCube ? Hb.framebufferTexture2D(Hb.FRAMEBUFFER, sb, Hb.TEXTURE_CUBE_MAP_POSITIVE_X + cb, fb._hardwareTexture?.underlyingResource, ab) : Hb.framebufferTexture2D(Hb.FRAMEBUFFER, sb, Hb.TEXTURE_2D, fb._hardwareTexture?.underlyingResource, ab)
        }
        Ib._MSAAFramebuffer && this._bindUnboundFramebuffer(Ib._MSAAFramebuffer), this._cachedViewport && !Wb ? this.setViewport(this._cachedViewport, sb, kb) : (sb || (sb = bb.width, ab && (sb /= Math.pow(2, ab))), kb || (kb = bb.height, ab && (kb /= Math.pow(2, ab))), this._viewport(0, 0, sb, kb)), this.wipeCaches()
      }
      setStateCullFaceType(bb, cb) {
        const sb = this.cullBackFaces ?? bb ?? 1 ? this._gl.BACK : this._gl.FRONT;
        (this._depthCullingState.cullFace !== sb || cb) && (this._depthCullingState.cullFace = sb)
      }
      setState(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          sb = arguments.length > 2 ? arguments[2] : void 0,
          kb = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          Wb = arguments.length > 4 ? arguments[4] : void 0,
          ab = arguments.length > 5 ? arguments[5] : void 0,
          Tb = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        (this._depthCullingState.cull !== bb || sb) && (this._depthCullingState.cull = bb), this.setStateCullFaceType(Wb, sb), this.setZOffset(cb), this.setZOffsetUnits(Tb);
        const Ub = kb ? this._gl.CW : this._gl.CCW;
        (this._depthCullingState.frontFace !== Ub || sb) && (this._depthCullingState.frontFace = Ub), this._stencilStateComposer.stencilMaterial = ab
      }
      _resolveAndGenerateMipMapsFramebuffer(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        bb.disableAutomaticMSAAResolve || (bb.isMulti ? this.resolveMultiFramebuffer(bb) : this.resolveFramebuffer(bb)), cb || (bb.isMulti ? this.generateMipMapsMultiFramebuffer(bb) : this.generateMipMapsFramebuffer(bb))
      }
      _bindUnboundFramebuffer(bb) {
        this._currentFramebuffer !== bb && (this._gl.bindFramebuffer(this._gl.FRAMEBUFFER, bb), this._currentFramebuffer = bb)
      }
      _currentFrameBufferIsDefaultFrameBuffer() {
        return null === this._currentFramebuffer
      }
      generateMipmaps(bb) {
        const cb = this._getTextureTarget(bb);
        this._bindTextureDirectly(cb, bb, !0), this._gl.generateMipmap(cb), this._bindTextureDirectly(cb, null)
      }
      unBindFramebuffer(bb, cb, sb) {
        const kb = bb;
        this._currentRenderTarget = null, this._integerMRTAttachmentsMask = 0, this._resolveAndGenerateMipMapsFramebuffer(bb, cb), sb && (kb._MSAAFramebuffer && this._bindUnboundFramebuffer(kb._framebuffer), sb()), this._bindUnboundFramebuffer(null)
      }
      generateMipMapsFramebuffer(bb) {
        bb.isMulti || !bb.texture?.generateMipMaps || bb.isCube || this.generateMipmaps(bb.texture)
      }
      resolveFramebuffer(bb) {
        const cb = bb,
          sb = this._gl;
        if (!cb._MSAAFramebuffer || cb.isMulti) return;
        let kb = cb.resolveMSAAColors ? sb.COLOR_BUFFER_BIT : 0;
        kb |= cb._generateDepthBuffer && cb.resolveMSAADepth ? sb.DEPTH_BUFFER_BIT : 0, kb |= cb._generateStencilBuffer && cb.resolveMSAAStencil ? sb.STENCIL_BUFFER_BIT : 0, sb.bindFramebuffer(sb.READ_FRAMEBUFFER, cb._MSAAFramebuffer), sb.bindFramebuffer(sb.DRAW_FRAMEBUFFER, cb._framebuffer), sb.blitFramebuffer(0, 0, bb.width, bb.height, 0, 0, bb.width, bb.height, kb, sb.NEAREST)
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
      createVertexBuffer(bb, cb, sb) {
        return this._createVertexBuffer(bb, this._gl.STATIC_DRAW)
      }
      _createVertexBuffer(bb, cb) {
        const sb = this._gl.createBuffer();
        if (!sb) throw new Error("Unable to create vertex buffer");
        const kb = new Xb.d(sb);
        return this.bindArrayBuffer(kb), "number" !== typeof bb ? bb instanceof Array ? (this._gl.bufferData(this._gl.ARRAY_BUFFER, new Float32Array(bb), cb), kb.GM = 4 * bb.length) : (this._gl.bufferData(this._gl.ARRAY_BUFFER, bb, cb), kb.GM = bb.byteLength) : (this._gl.bufferData(this._gl.ARRAY_BUFFER, new Uint8Array(bb), cb), kb.GM = bb), this._resetVertexBufferBinding(), kb.references = 1, kb
      }
      createDynamicVertexBuffer(bb, cb) {
        return this._createVertexBuffer(bb, this._gl.DYNAMIC_DRAW)
      }
      _resetIndexBufferBinding() {
        this.bindIndexBuffer(null), this._cachedIndexBuffer = null
      }
      createIndexBuffer(bb, cb, sb) {
        const kb = this._gl.createBuffer(),
          Wb = new Xb.d(kb);
        if (!kb) throw new Error("Unable to create index buffer");
        this.bindIndexBuffer(Wb);
        const ab = this._normalizeIndexData(bb);
        return this._gl.bufferData(this._gl.ELEMENT_ARRAY_BUFFER, ab, cb ? this._gl.DYNAMIC_DRAW : this._gl.STATIC_DRAW), this._resetIndexBufferBinding(), Wb.references = 1, Wb.is32Bits = 4 === ab.BYTES_PER_ELEMENT, Wb
      }
      _normalizeIndexData(bb) {
        if (2 === bb.BYTES_PER_ELEMENT) return bb;
        if (this._caps.uintIndices) {
          if (bb instanceof Uint32Array) return bb;
          for (let cb = 0; cb < bb.length; cb++)
            if (bb[cb] >= 65535) return new Uint32Array(bb);
          return new Uint16Array(bb)
        }
        return new Uint16Array(bb)
      }
      bindArrayBuffer(bb) {
        this._vaoRecordInProgress || this._unbindVertexArrayObject(), this._bindBuffer(bb, this._gl.ARRAY_BUFFER)
      }
      bindUniformBlock(bb, cb, sb) {
        const kb = bb.program,
          Wb = this._gl.getUniformBlockIndex(kb, cb);
        this._gl.uniformBlockBinding(kb, Wb, sb)
      }
      bindIndexBuffer(bb) {
        this._vaoRecordInProgress || this._unbindVertexArrayObject(), this._bindBuffer(bb, this._gl.ELEMENT_ARRAY_BUFFER)
      }
      _bindBuffer(bb, cb) {
        (this._vaoRecordInProgress || this._currentBoundBuffer[cb] !== bb) && (this._gl.bindBuffer(cb, bb ? bb.underlyingResource : null), this._currentBoundBuffer[cb] = bb)
      }
      updateArrayBuffer(bb) {
        this._gl.bufferSubData(this._gl.ARRAY_BUFFER, 0, bb)
      }
      _vertexAttribPointer(bb, cb, sb, kb, Wb, ab, Tb) {
        const Ub = this._currentBufferPointers[cb];
        if (!Ub) return;
        let Ib = !1;
        Ub.active ? (Ub.buffer !== bb && (Ub.buffer = bb, Ib = !0), Ub.size !== sb && (Ub.size = sb, Ib = !0), Ub.type !== kb && (Ub.type = kb, Ib = !0), Ub.normalized !== Wb && (Ub.normalized = Wb, Ib = !0), Ub.stride !== ab && (Ub.stride = ab, Ib = !0), Ub.offset !== Tb && (Ub.offset = Tb, Ib = !0)) : (Ib = !0, Ub.active = !0, Ub.index = cb, Ub.size = sb, Ub.type = kb, Ub.normalized = Wb, Ub.stride = ab, Ub.offset = Tb, Ub.buffer = bb), (Ib || this._vaoRecordInProgress) && (this.bindArrayBuffer(bb), kb === this._gl.UNSIGNED_INT || kb === this._gl.INT ? this._gl.vertexAttribIPointer(cb, sb, kb, ab, Tb) : this._gl.vertexAttribPointer(cb, sb, kb, Wb, ab, Tb))
      }
      _bindIndexBufferWithCache(bb) {
        null != bb && this._cachedIndexBuffer !== bb && (this._cachedIndexBuffer = bb, this.bindIndexBuffer(bb), this._uintIndicesCurrentlySet = bb.is32Bits)
      }
      _bindVertexBuffersAttributes(bb, cb, sb) {
        const kb = cb.getAttributesNames();
        this._vaoRecordInProgress || this._unbindVertexArrayObject(), this.unbindAllAttributes();
        for (let Wb = 0; Wb < kb.length; Wb++) {
          const ab = cb.getAttributeLocation(Wb);
          if (ab >= 0) {
            const cb = kb[Wb];
            let Tb = null;
            if (sb && (Tb = sb[cb]), Tb || (Tb = bb[cb]), !Tb) continue;
            this._gl.enableVertexAttribArray(ab), this._vaoRecordInProgress || (this._vertexAttribArraysEnabled[ab] = !0);
            const Ub = Tb.getBuffer();
            Ub && (this._vertexAttribPointer(Ub, ab, Tb.getSize(), Tb.type, Tb.normalized, Tb.byteStride, Tb.byteOffset), Tb.getIsInstanced() && (this._gl.vertexAttribDivisor(ab, Tb.getInstanceDivisor()), this._vaoRecordInProgress || (this._currentInstanceLocations.push(ab), this._currentInstanceBuffers.push(Ub))))
          }
        }
      }
      recordVertexArrayObject(bb, cb, sb, kb) {
        const Wb = this._gl.createVertexArray();
        if (!Wb) throw new Error("Unable to create VAO");
        return this._vaoRecordInProgress = !0, this._gl.bindVertexArray(Wb), this._mustWipeVertexAttributes = !0, this._bindVertexBuffersAttributes(bb, sb, kb), this.bindIndexBuffer(cb), this._vaoRecordInProgress = !1, this._gl.bindVertexArray(null), Wb
      }
      bindVertexArrayObject(bb, cb) {
        this._cachedVertexArrayObject !== bb && (this._cachedVertexArrayObject = bb, this._gl.bindVertexArray(bb), this._cachedVertexBuffers = null, this._cachedIndexBuffer = null, this._uintIndicesCurrentlySet = null != cb && cb.is32Bits, this._mustWipeVertexAttributes = !0)
      }
      bindBuffersDirectly(bb, cb, sb, kb, Wb) {
        if (this._cachedVertexBuffers !== bb || this._cachedEffectForVertexBuffers !== Wb) {
          this._cachedVertexBuffers = bb, this._cachedEffectForVertexBuffers = Wb;
          const cb = Wb.getAttributesCount();
          this._unbindVertexArrayObject(), this.unbindAllAttributes();
          let ab = 0;
          for (let Tb = 0; Tb < cb; Tb++)
            if (Tb < sb.length) {
              const cb = Wb.getAttributeLocation(Tb);
              cb >= 0 && (this._gl.enableVertexAttribArray(cb), this._vertexAttribArraysEnabled[cb] = !0, this._vertexAttribPointer(bb, cb, sb[Tb], this._gl.FLOAT, !1, kb, ab)), ab += 4 * sb[Tb]
            }
        }
        this._bindIndexBufferWithCache(cb)
      }
      _unbindVertexArrayObject() {
        this._cachedVertexArrayObject && (this._cachedVertexArrayObject = null, this._gl.bindVertexArray(null))
      }
      bindBuffers(bb, cb, sb, kb) {
        this._cachedVertexBuffers === bb && this._cachedEffectForVertexBuffers === sb || (this._cachedVertexBuffers = bb, this._cachedEffectForVertexBuffers = sb, this._bindVertexBuffersAttributes(bb, sb, kb)), this._bindIndexBufferWithCache(cb)
      }
      unbindInstanceAttributes() {
        let bb;
        for (let cb = 0, sb = this._currentInstanceLocations.length; cb < sb; cb++) {
          const sb = this._currentInstanceBuffers[cb];
          bb != sb && sb.references && (bb = sb, this.bindArrayBuffer(sb));
          const kb = this._currentInstanceLocations[cb];
          this._gl.vertexAttribDivisor(kb, 0)
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
      updateAndBindInstancesBuffer(bb, cb, sb) {
        if (this.bindArrayBuffer(bb), cb && this._gl.bufferSubData(this._gl.ARRAY_BUFFER, 0, cb), void 0 !== sb[0].index) this.bindInstancesBuffer(bb, sb, !0);
        else
          for (let kb = 0; kb < 4; kb++) {
            const cb = sb[kb];
            this._vertexAttribArraysEnabled[cb] || (this._gl.enableVertexAttribArray(cb), this._vertexAttribArraysEnabled[cb] = !0), this._vertexAttribPointer(bb, cb, 4, this._gl.FLOAT, !1, 64, 16 * kb), this._gl.vertexAttribDivisor(cb, 1), this._currentInstanceLocations.push(cb), this._currentInstanceBuffers.push(bb)
          }
      }
      bindInstancesBuffer(bb, cb) {
        let sb = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this.bindArrayBuffer(bb);
        let kb = 0;
        if (sb)
          for (let Wb = 0; Wb < cb.length; Wb++) {
            kb += 4 * cb[Wb].attributeSize
          }
        for (let Wb = 0; Wb < cb.length; Wb++) {
          const sb = cb[Wb];
          void 0 === sb.index && (sb.index = this._currentEffect.getAttributeLocationByName(sb.attributeName)), sb.index < 0 || (this._vertexAttribArraysEnabled[sb.index] || (this._gl.enableVertexAttribArray(sb.index), this._vertexAttribArraysEnabled[sb.index] = !0), this._vertexAttribPointer(bb, sb.index, sb.attributeSize, sb.attributeType || this._gl.FLOAT, sb.normalized || !1, kb, sb.offset), this._gl.vertexAttribDivisor(sb.index, void 0 === sb.divisor ? 1 : sb.divisor), this._currentInstanceLocations.push(sb.index), this._currentInstanceBuffers.push(bb))
        }
      }
      disableInstanceAttributeByName(bb) {
        if (!this._currentEffect) return;
        const cb = this._currentEffect.getAttributeLocationByName(bb);
        this.disableInstanceAttribute(cb)
      }
      disableInstanceAttribute(bb) {
        let cb, sb = !1;
        for (; - 1 !== (cb = this._currentInstanceLocations.indexOf(bb));) this._currentInstanceLocations.splice(cb, 1), this._currentInstanceBuffers.splice(cb, 1), sb = !0;
        sb && (this._gl.vertexAttribDivisor(bb, 0), this.disableAttributeByIndex(bb))
      }
      disableAttributeByIndex(bb) {
        this._gl.disableVertexAttribArray(bb), this._vertexAttribArraysEnabled[bb] = !1, this._currentBufferPointers[bb].active = !1
      }
      draw(bb, cb, sb, kb) {
        this.drawElementsType(bb ? 0 : 1, cb, sb, kb)
      }
      drawPointClouds(bb, cb, sb) {
        this.drawArraysType(2, bb, cb, sb)
      }
      drawUnIndexed(bb, cb, sb, kb) {
        this.drawArraysType(bb ? 0 : 1, cb, sb, kb)
      }
      drawElementsType(bb, cb, sb, kb) {
        this.applyStates(), this._reportDrawCall();
        const Wb = this._drawMode(bb),
          ab = this._uintIndicesCurrentlySet ? this._gl.UNSIGNED_INT : this._gl.UNSIGNED_SHORT,
          Tb = this._uintIndicesCurrentlySet ? 4 : 2;
        kb ? this._gl.drawElementsInstanced(Wb, sb, ab, cb * Tb, kb) : this._gl.drawElements(Wb, sb, ab, cb * Tb)
      }
      drawArraysType(bb, cb, sb, kb) {
        this.applyStates(), this._reportDrawCall();
        const Wb = this._drawMode(bb);
        kb ? this._gl.drawArraysInstanced(Wb, cb, sb, kb) : this._gl.drawArrays(Wb, cb, sb)
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
        const cb = bb.getPipelineContext();
        cb && this._deletePipelineContext(cb)
      }
      _deletePipelineContext(bb) {
        const cb = bb;
        cb && cb.program && (cb.program.__SPECTOR_rebuildProgram = null, (0, eb.m)(cb), this._gl && (this._currentProgram === cb.program && this._setProgram(null), this._gl.deleteProgram(cb.program)))
      }
      _getGlobalDefines(bb) {
        return (0, Qb.k)(bb, this.isNDCHalfZRange, this.Dsb, this.useExactSrgbConversions)
      }
      createEffect(bb, cb, sb, ab, Tb, Ub, Ib, Hb, fb) {
        let Mb = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
          Xb = arguments.length > 10 ? arguments[10] : void 0;
        const nb = "string" === typeof bb ? bb : bb.vertexToken || bb.vertexSource || bb.vertexElement || bb.vertex,
          mb = "string" === typeof bb ? bb : bb.fragmentToken || bb.fragmentSource || bb.fragmentElement || bb.fragment,
          lb = this._getGlobalDefines(),
          Qb = void 0 !== cb.attributes;
        let eb = Tb ?? cb.defines ?? "";
        lb && (eb += lb);
        const Cb = nb + "+" + mb + "@" + eb;
        if (this._compiledEffects[Cb]) {
          const bb = this._compiledEffects[Cb];
          return Ib && bb.isReady() && Ib(bb), bb._refCount++, bb
        }
        this._gl && (0, Wb.C)(this._gl);
        const Nb = new kb.c(bb, cb, Qb ? this : sb, ab, this, Tb, Ub, Ib, Hb, fb, Cb, cb.shaderLanguage ?? Mb, cb.extraInitializationsAsync ?? Xb);
        return this._compiledEffects[Cb] = Nb, Nb
      }
      _getShaderSource(bb) {
        return this._gl.getShaderSource(bb)
      }
      createRawShaderProgram(bb, cb, sb, kb) {
        let ab = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
        const Tb = (0, Wb.C)(this._gl);
        return Tb._contextWasLost = this._contextWasLost, Tb.validateShaderPrograms = this.validateShaderPrograms, (0, Wb.w)(bb, cb, sb, kb || this._gl, ab)
      }
      createShaderProgram(bb, cb, sb, kb, ab) {
        let Tb = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null;
        const Ub = (0, Wb.C)(this._gl);
        return Ub._contextWasLost = this._contextWasLost, Ub.validateShaderPrograms = this.validateShaderPrograms, (0, Wb.A)(bb, cb, sb, kb, ab || this._gl, Tb)
      }
      inlineShaderCode(bb) {
        return bb
      }
      createPipelineContext(bb) {
        if (this._gl) {
          (0, Wb.C)(this._gl).parallelShaderCompile = this._caps.parallelShaderCompile
        }
        const cb = (0, Wb.v)(this._gl, bb);
        return cb.engine = this, cb
      }
      createMaterialContext() {}
      createDrawContext() {}
      _finalizePipelineContext(bb) {
        return (0, Wb.i)(bb, this._gl, this.validateShaderPrograms)
      }
      _preparePipelineContextAsync(bb, cb, sb, kb, ab, Tb, Ub, Ib, Hb, fb, Mb) {
        const Xb = (0, Wb.C)(this._gl);
        return Xb._contextWasLost = this._contextWasLost, Xb.validateShaderPrograms = this.validateShaderPrograms, Xb._createShaderProgramInjection = this._createShaderProgram.bind(this), Xb.createRawShaderProgramInjection = this.createRawShaderProgram.bind(this), Xb.createShaderProgramInjection = this.createShaderProgram.bind(this), Xb.loadFileInjection = this._loadFile.bind(this), (0, Wb.p)(bb, cb, sb, kb, ab, Tb, Ub, Ib, Hb, fb, Mb)
      }
      _createShaderProgram(bb, cb, sb, kb) {
        let ab = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
        return (0, Wb.d)(bb, cb, sb, kb, ab)
      }
      _isRenderingStateCompiled(bb) {
        return !this._isDisposed && (0, Wb.l)(bb, this._gl, this.validateShaderPrograms)
      }
      _executeWhenRenderingStateIsCompiled(bb, cb) {
        (0, Wb.e)(bb, cb)
      }
      getUniforms(bb, cb) {
        const sb = new Array,
          kb = bb;
        for (let Wb = 0; Wb < cb.length; Wb++) sb.push(this._gl.getUniformLocation(kb.program, cb[Wb]));
        return sb
      }
      getAttributes(bb, cb) {
        const sb = [],
          kb = bb;
        for (let ab = 0; ab < cb.length; ab++) try {
          sb.push(this._gl.getAttribLocation(kb.program, cb[ab]))
        } catch (Wb) {
          sb.push(-1)
        }
        return sb
      }
      enableEffect(bb) {
        (bb = null !== bb && (0, Tb.c)(bb) ? bb.effect : bb) && bb !== this._currentEffect && (this._stencilStateComposer.stencilMaterial = void 0, this.bindSamplers(bb), this._currentEffect = bb, bb.onBind && bb.onBind(bb), bb._onBindObservable && bb._onBindObservable.notifyObservers(bb))
      }
      setInt(bb, cb) {
        return !!bb && (this._gl.uniform1i(bb, cb), !0)
      }
      setInt2(bb, cb, sb) {
        return !!bb && (this._gl.uniform2i(bb, cb, sb), !0)
      }
      setInt3(bb, cb, sb, kb) {
        return !!bb && (this._gl.uniform3i(bb, cb, sb, kb), !0)
      }
      setInt4(bb, cb, sb, kb, Wb) {
        return !!bb && (this._gl.uniform4i(bb, cb, sb, kb, Wb), !0)
      }
      setIntArray(bb, cb) {
        return !!bb && (this._gl.uniform1iv(bb, cb), !0)
      }
      setIntArray2(bb, cb) {
        return !(!bb || cb.length % 2 !== 0) && (this._gl.uniform2iv(bb, cb), !0)
      }
      setIntArray3(bb, cb) {
        return !(!bb || cb.length % 3 !== 0) && (this._gl.uniform3iv(bb, cb), !0)
      }
      setIntArray4(bb, cb) {
        return !(!bb || cb.length % 4 !== 0) && (this._gl.uniform4iv(bb, cb), !0)
      }
      setUInt(bb, cb) {
        return !!bb && (this._gl.uniform1ui(bb, cb), !0)
      }
      setUInt2(bb, cb, sb) {
        return !!bb && (this._gl.uniform2ui(bb, cb, sb), !0)
      }
      setUInt3(bb, cb, sb, kb) {
        return !!bb && (this._gl.uniform3ui(bb, cb, sb, kb), !0)
      }
      setUInt4(bb, cb, sb, kb, Wb) {
        return !!bb && (this._gl.uniform4ui(bb, cb, sb, kb, Wb), !0)
      }
      setUIntArray(bb, cb) {
        return !!bb && (this._gl.uniform1uiv(bb, cb), !0)
      }
      setUIntArray2(bb, cb) {
        return !(!bb || cb.length % 2 !== 0) && (this._gl.uniform2uiv(bb, cb), !0)
      }
      setUIntArray3(bb, cb) {
        return !(!bb || cb.length % 3 !== 0) && (this._gl.uniform3uiv(bb, cb), !0)
      }
      setUIntArray4(bb, cb) {
        return !(!bb || cb.length % 4 !== 0) && (this._gl.uniform4uiv(bb, cb), !0)
      }
      setArray(bb, cb) {
        return !!bb && (!(cb.length < 1) && (this._gl.uniform1fv(bb, cb), !0))
      }
      setArray2(bb, cb) {
        return !(!bb || cb.length % 2 !== 0) && (this._gl.uniform2fv(bb, cb), !0)
      }
      setArray3(bb, cb) {
        return !(!bb || cb.length % 3 !== 0) && (this._gl.uniform3fv(bb, cb), !0)
      }
      setArray4(bb, cb) {
        return !(!bb || cb.length % 4 !== 0) && (this._gl.uniform4fv(bb, cb), !0)
      }
      setMatrices(bb, cb) {
        return !!bb && (this._gl.uniformMatrix4fv(bb, !1, cb), !0)
      }
      setMatrix3x3(bb, cb) {
        return !!bb && (this._gl.uniformMatrix3fv(bb, !1, cb), !0)
      }
      setMatrix2x2(bb, cb) {
        return !!bb && (this._gl.uniformMatrix2fv(bb, !1, cb), !0)
      }
      setFloat(bb, cb) {
        return !!bb && (this._gl.uniform1f(bb, cb), !0)
      }
      setFloat2(bb, cb, sb) {
        return !!bb && (this._gl.uniform2f(bb, cb, sb), !0)
      }
      setFloat3(bb, cb, sb, kb) {
        return !!bb && (this._gl.uniform3f(bb, cb, sb, kb), !0)
      }
      setFloat4(bb, cb, sb, kb, Wb) {
        return !!bb && (this._gl.uniform4f(bb, cb, sb, kb, Wb), !0)
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
      _getSamplingParameters(bb, cb) {
        const sb = this._gl;
        let kb = sb.NEAREST,
          Wb = sb.NEAREST,
          ab = !1;
        switch (bb) {
          case 11:
            kb = sb.LINEAR, Wb = cb ? sb.LINEAR_MIPMAP_NEAREST : sb.LINEAR;
            break;
          case 3:
            kb = sb.LINEAR, ab = !0, Wb = cb ? sb.LINEAR_MIPMAP_LINEAR : sb.LINEAR;
            break;
          case 8:
            ab = !0, kb = sb.NEAREST, Wb = cb ? sb.NEAREST_MIPMAP_LINEAR : sb.NEAREST;
            break;
          case 4:
            kb = sb.NEAREST, Wb = cb ? sb.NEAREST_MIPMAP_NEAREST : sb.NEAREST;
            break;
          case 5:
            kb = sb.NEAREST, Wb = cb ? sb.LINEAR_MIPMAP_NEAREST : sb.LINEAR;
            break;
          case 6:
            ab = !0, kb = sb.NEAREST, Wb = cb ? sb.LINEAR_MIPMAP_LINEAR : sb.LINEAR;
            break;
          case 7:
            kb = sb.NEAREST, Wb = sb.LINEAR;
            break;
          case 1:
            kb = sb.NEAREST, Wb = sb.NEAREST;
            break;
          case 9:
            kb = sb.LINEAR, Wb = cb ? sb.NEAREST_MIPMAP_NEAREST : sb.NEAREST;
            break;
          case 10:
            ab = !0, kb = sb.LINEAR, Wb = cb ? sb.NEAREST_MIPMAP_LINEAR : sb.NEAREST;
            break;
          case 2:
            kb = sb.LINEAR, Wb = sb.LINEAR;
            break;
          case 12:
            kb = sb.LINEAR, Wb = sb.NEAREST
        }
        return {
          min: Wb,
          mag: kb,
          hasMipMaps: ab
        }
      }
      _createTexture() {
        const bb = this._gl.createTexture();
        if (!bb) throw new Error("Unable to create texture");
        return bb
      }
      _createHardwareTexture() {
        return new mb.e(this._createTexture(), this._gl)
      }
      _createInternalTexture(bb, cb) {
        let sb, kb, Wb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          ab = !1,
          Tb = 0,
          Ib = 3,
          Hb = 5,
          fb = !1,
          Mb = 1,
          Xb = !1,
          nb = 0,
          mb = !1;
        void 0 !== cb && "object" === typeof cb ? (sb = !!cb.generateMipMaps, ab = !!cb.createMipMaps, Tb = void 0 === cb.type ? 0 : cb.type, Ib = void 0 === cb.samplingMode ? 3 : cb.samplingMode, Hb = void 0 === cb.format ? 5 : cb.format, fb = void 0 !== cb.useSRGBBuffer && cb.useSRGBBuffer, Mb = cb.samples ?? 1, kb = cb.label, Xb = !!cb.createMSAATexture, nb = cb.comparisonFunction || 0, mb = !!cb.isCube) : sb = !!cb, fb && (fb = this._caps.supportSRGBBuffers && (this.gl > 1 || this.isWebGPU)), (1 !== Tb || this._caps.textureFloatLinearFiltering) && (2 !== Tb || this._caps.textureHalfFloatLinearFiltering) || (Ib = 1), 1 !== Tb || this._caps.textureFloat || (Tb = 0, Ub.c.Warn("Float textures are not supported. Type forced to TEXTURETYPE_UNSIGNED_BYTE"));
        const Qb = (0, Cb.e)(Hb),
          eb = (0, Cb.d)(Hb),
          Nb = this._gl,
          Vb = new lb.b(this, Wb),
          Lb = bb.width || bb,
          ub = bb.height || bb,
          Yb = bb.depth || 0,
          hb = bb.layers || 0,
          Jb = this._getSamplingParameters(Ib, (sb || ab) && !Qb),
          gb = 0 !== hb ? Nb.TEXTURE_2D_ARRAY : 0 !== Yb ? Nb.TEXTURE_3D : mb ? Nb.TEXTURE_CUBE_MAP : Nb.TEXTURE_2D,
          Bb = Qb ? this._getInternalFormatFromDepthTextureFormat(Hb, !0, eb) : this._getRGBABufferInternalSizedFormat(Tb, Hb, fb),
          tb = Qb ? eb ? Nb.DEPTH_STENCIL : Nb.DEPTH_COMPONENT : this._getInternalFormat(Hb),
          yb = Qb ? this._getWebGLTextureTypeFromDepthTextureFormat(Hb) : this._getWebGLTextureType(Tb);
        if (this._bindTextureDirectly(gb, Vb), 0 !== hb) Vb.is2DArray = !0, Nb.texImage3D(gb, 0, Bb, Lb, ub, hb, 0, tb, yb, null);
        else if (0 !== Yb) Vb.is3D = !0, Nb.texImage3D(gb, 0, Bb, Lb, ub, Yb, 0, tb, yb, null);
        else if (mb) {
          Vb.isCube = !0;
          for (let bb = 0; bb < 6; bb++) Nb.texImage2D(Nb.TEXTURE_CUBE_MAP_POSITIVE_X + bb, 0, Bb, Lb, ub, 0, tb, yb, null)
        } else Nb.texImage2D(gb, 0, Bb, Lb, ub, 0, tb, yb, null);
        if (Nb.texParameteri(gb, Nb.TEXTURE_MAG_FILTER, Jb.mag), Nb.texParameteri(gb, Nb.TEXTURE_MIN_FILTER, Jb.min), Nb.texParameteri(gb, Nb.TEXTURE_WRAP_S, Nb.CLAMP_TO_EDGE), Nb.texParameteri(gb, Nb.TEXTURE_WRAP_T, Nb.CLAMP_TO_EDGE), Qb && this.gl > 1 && (0 === nb ? (Nb.texParameteri(gb, Nb.TEXTURE_COMPARE_FUNC, 515), Nb.texParameteri(gb, Nb.TEXTURE_COMPARE_MODE, Nb.NONE)) : (Nb.texParameteri(gb, Nb.TEXTURE_COMPARE_FUNC, nb), Nb.texParameteri(gb, Nb.TEXTURE_COMPARE_MODE, Nb.COMPARE_REF_TO_TEXTURE))), (sb || ab) && this._gl.generateMipmap(gb), this._bindTextureDirectly(gb, null), Vb._useSRGBBuffer = fb, Vb.baseWidth = Lb, Vb.baseHeight = ub, Vb.width = Lb, Vb.height = ub, Vb.depth = hb || Yb, Vb.isReady = !0, Vb.samples = Mb, Vb.generateMipMaps = sb, Vb.samplingMode = Ib, Vb.type = Tb, Vb.format = Hb, Vb.label = kb, Vb.comparisonFunction = nb, this._internalTexturesCache.push(Vb), Xb) {
          let bb;
          if (bb = (0, Cb.e)(Vb.format) ? this._setupFramebufferDepthAttachments((0, Cb.d)(Vb.format), 19 !== Vb.format, Vb.width, Vb.height, Mb, Vb.format, !0) : this._createRenderBuffer(Vb.width, Vb.height, Mb, -1, this._getRGBABufferInternalSizedFormat(Vb.type, Vb.format, Vb._useSRGBBuffer), -1), !bb) throw new Error("Unable to create render buffer");
          Vb._autoMSAAManagement = !0;
          let cb = Vb._hardwareTexture;
          cb || (cb = Vb._hardwareTexture = this._createHardwareTexture()), cb.addMSAARenderBuffer(bb)
        }
        return Vb
      }
      _getUseSRGBBuffer(bb, cb) {
        return bb && this._caps.supportSRGBBuffers && (this.gl > 1 || cb)
      }
      createTexture(bb, cb, sb, kb) {
        var Wb = this;
        let ab = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3,
          Tb = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          Ub = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
          Ib = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
          Hb = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
          fb = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null,
          Mb = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : null,
          Xb = arguments.length > 11 ? arguments[11] : void 0,
          nb = arguments.length > 12 ? arguments[12] : void 0,
          mb = arguments.length > 13 ? arguments[13] : void 0,
          Qb = arguments.length > 14 ? arguments[14] : void 0;
        return this._createTextureBase(bb, cb, sb, kb, ab, Tb, Ub, (function() {
          for (var bb = arguments.length, cb = new Array(bb), sb = 0; sb < bb; sb++) cb[sb] = arguments[sb];
          return Wb._prepareWebGLTexture(...cb, fb)
        }), ((bb, cb, sb, Wb, ab, Tb) => {
          const Ub = this._gl,
            Ib = sb.width === bb && sb.height === cb;
          ab._creationFlags = mb ?? 0;
          const Hb = this._getTexImageParametersForCreateTexture(ab.format, ab._useSRGBBuffer);
          if (Ib) return Ub.texImage2D(Ub.TEXTURE_2D, 0, Hb.internalFormat, Hb.format, Hb.type, sb), !1;
          const fb = this._caps.maxTextureSize;
          if (sb.width > fb || sb.height > fb || !this._supportsHardwareTextureRescaling) return this._prepareWorkingCanvas(), !(!this._workingCanvas || !this._workingContext) && (this._workingCanvas.width = bb, this._workingCanvas.height = cb, this._workingContext.drawImage(sb, 0, 0, sb.width, sb.height, 0, 0, bb, cb), Ub.texImage2D(Ub.TEXTURE_2D, 0, Hb.internalFormat, Hb.format, Hb.type, this._workingCanvas), ab.width = bb, ab.height = cb, !1);
          {
            const bb = new lb.b(this, 2);
            this._bindTextureDirectly(Ub.TEXTURE_2D, bb, !0), Ub.texImage2D(Ub.TEXTURE_2D, 0, Hb.internalFormat, Hb.format, Hb.type, sb), this._rescaleTexture(bb, ab, kb, Hb.format, (() => {
              this._releaseTexture(bb), this._bindTextureDirectly(Ub.TEXTURE_2D, ab, !0), Tb()
            }))
          }
          return !0
        }), Ib, Hb, fb, Mb, Xb, nb, Qb)
      }
      _getTexImageParametersForCreateTexture(bb, cb) {
        let sb, kb;
        return 1 === this.gl ? (sb = this._getInternalFormat(bb, cb), kb = sb) : (sb = this._getInternalFormat(bb, !1), kb = this._getRGBABufferInternalSizedFormat(0, bb, cb)), {
          internalFormat: kb,
          format: sb,
          type: this._gl.UNSIGNED_BYTE
        }
      }
      _rescaleTexture(bb, cb, sb, kb, Wb) {}
      _unpackFlipY(bb) {
        this._unpackFlipYCached !== bb && (this._gl.pixelStorei(this._gl.UNPACK_FLIP_Y_WEBGL, bb ? 1 : 0), this.enableUnpackFlipYCached && (this._unpackFlipYCached = bb))
      }
      _getUnpackAlignement() {
        return this._gl.getParameter(this._gl.UNPACK_ALIGNMENT)
      }
      _getTextureTarget(bb) {
        return bb.isCube ? this._gl.TEXTURE_CUBE_MAP : bb.is3D ? this._gl.TEXTURE_3D : bb.is2DArray || bb.isMultiview ? this._gl.TEXTURE_2D_ARRAY : this._gl.TEXTURE_2D
      }
      updateTextureSamplingMode(bb, cb) {
        let sb = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const kb = this._getTextureTarget(cb),
          Wb = this._getSamplingParameters(bb, cb.useMipMaps || sb);
        this._setTextureParameterInteger(kb, this._gl.TEXTURE_MAG_FILTER, Wb.mag, cb), this._setTextureParameterInteger(kb, this._gl.TEXTURE_MIN_FILTER, Wb.min), sb && Wb.hasMipMaps && (cb.generateMipMaps = !0, this._gl.generateMipmap(kb)), this._bindTextureDirectly(kb, null), cb.samplingMode = bb
      }
      updateTextureDimensions(bb, cb, sb) {}
      updateTextureWrappingMode(bb, cb) {
        let sb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          kb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const Wb = this._getTextureTarget(bb);
        null !== cb && (this._setTextureParameterInteger(Wb, this._gl.TEXTURE_WRAP_S, this._getTextureWrapMode(cb), bb), bb._cachedWrapU = cb), null !== sb && (this._setTextureParameterInteger(Wb, this._gl.TEXTURE_WRAP_T, this._getTextureWrapMode(sb), bb), bb._cachedWrapV = sb), (bb.is2DArray || bb.is3D) && null !== kb && (this._setTextureParameterInteger(Wb, this._gl.TEXTURE_WRAP_R, this._getTextureWrapMode(kb), bb), bb._cachedWrapR = kb), this._bindTextureDirectly(Wb, null)
      }
      _uploadCompressedDataToTextureDirectly(bb, cb, sb, kb, Wb) {
        let ab = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          Tb = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        const Ub = this._gl;
        let Ib = Ub.TEXTURE_2D;
        if (bb.isCube && (Ib = Ub.TEXTURE_CUBE_MAP_POSITIVE_X + ab), bb._useSRGBBuffer) switch (cb) {
          case 37492:
          case 36196:
            this._caps.etc2 ? cb = Ub.COMPRESSED_SRGB8_ETC2 : bb._useSRGBBuffer = !1;
            break;
          case 37496:
            this._caps.etc2 ? cb = Ub.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : bb._useSRGBBuffer = !1;
            break;
          case 36492:
            cb = Ub.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT;
            break;
          case 37808:
            cb = Ub.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR;
            break;
          case 37809:
            cb = Ub.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR;
            break;
          case 37810:
            cb = Ub.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR;
            break;
          case 37811:
            cb = Ub.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR;
            break;
          case 37812:
            cb = Ub.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR;
            break;
          case 37813:
            cb = Ub.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR;
            break;
          case 37814:
            cb = Ub.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR;
            break;
          case 37815:
            cb = Ub.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR;
            break;
          case 37816:
            cb = Ub.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR;
            break;
          case 37817:
            cb = Ub.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR;
            break;
          case 37818:
            cb = Ub.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR;
            break;
          case 37819:
            cb = Ub.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR;
            break;
          case 37820:
            cb = Ub.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR;
            break;
          case 37821:
            cb = Ub.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR;
            break;
          case 33776:
            this._caps.s3tc_srgb ? cb = Ub.COMPRESSED_SRGB_S3TC_DXT1_EXT : bb._useSRGBBuffer = !1;
            break;
          case 33777:
            this._caps.s3tc_srgb ? cb = Ub.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT : bb._useSRGBBuffer = !1;
            break;
          case 33779:
            this._caps.s3tc_srgb ? cb = Ub.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT : bb._useSRGBBuffer = !1;
            break;
          default:
            bb._useSRGBBuffer = !1
        }
        if (bb.generateMipMaps) {
          const ab = bb._hardwareTexture;
          ab.memoryAllocated || (Ub.texStorage2D(bb.isCube ? Ub.TEXTURE_CUBE_MAP : Ub.TEXTURE_2D, Math.floor(Math.log2(Math.max(sb, kb))) + 1, cb, bb.width, bb.height), ab.memoryAllocated = !0), this._gl.compressedTexSubImage2D(Ib, Tb, 0, 0, sb, kb, cb, Wb)
        } else this._gl.compressedTexImage2D(Ib, Tb, cb, sb, kb, 0, Wb)
      }
      _uploadDataToTextureDirectly(bb, cb) {
        let sb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          kb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          Wb = arguments.length > 4 ? arguments[4] : void 0,
          ab = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        const Tb = this._gl,
          Ub = this._getWebGLTextureType(bb.type),
          Ib = this._getInternalFormat(bb.format),
          Hb = void 0 === Wb ? this._getRGBABufferInternalSizedFormat(bb.type, bb.format, bb._useSRGBBuffer) : this._getInternalFormat(Wb, bb._useSRGBBuffer);
        this._unpackFlipY(bb.invertY);
        let fb = Tb.TEXTURE_2D;
        bb.isCube && (fb = Tb.TEXTURE_CUBE_MAP_POSITIVE_X + sb);
        const Mb = Math.round(Math.log(bb.width) * Math.LOG2E),
          Xb = Math.round(Math.log(bb.height) * Math.LOG2E),
          nb = ab ? bb.width : Math.pow(2, Math.max(Mb - kb, 0)),
          mb = ab ? bb.height : Math.pow(2, Math.max(Xb - kb, 0));
        Tb.texImage2D(fb, kb, Hb, nb, mb, 0, Ib, Ub, cb)
      }
      updateTextureData(bb, cb, sb, kb, Wb, ab) {
        let Tb = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0,
          Ub = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0,
          Ib = arguments.length > 8 && void 0 !== arguments[8] && arguments[8];
        const Hb = this._gl,
          fb = this._getWebGLTextureType(bb.type),
          Mb = this._getInternalFormat(bb.format);
        this._unpackFlipY(bb.invertY);
        let Xb = Hb.TEXTURE_2D,
          nb = Hb.TEXTURE_2D;
        bb.isCube && (nb = Hb.TEXTURE_CUBE_MAP_POSITIVE_X + Tb, Xb = Hb.TEXTURE_CUBE_MAP), this._bindTextureDirectly(Xb, bb, !0), Hb.texSubImage2D(nb, Ub, sb, kb, Wb, ab, Mb, fb, cb), Ib && this._gl.generateMipmap(nb), this._bindTextureDirectly(Xb, null)
      }
      _uploadArrayBufferViewToTexture(bb, cb) {
        let sb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          kb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        const Wb = this._gl,
          ab = bb.isCube ? Wb.TEXTURE_CUBE_MAP : Wb.TEXTURE_2D;
        this._bindTextureDirectly(ab, bb, !0), this._uploadDataToTextureDirectly(bb, cb, sb, kb), this._bindTextureDirectly(ab, null, !0)
      }
      _prepareWebGLTextureContinuation(bb, cb, sb, kb, Wb) {
        const ab = this._gl;
        if (!ab) return;
        const Tb = this._getSamplingParameters(Wb, !sb);
        ab.texParameteri(ab.TEXTURE_2D, ab.TEXTURE_MAG_FILTER, Tb.mag), ab.texParameteri(ab.TEXTURE_2D, ab.TEXTURE_MIN_FILTER, Tb.min), sb || kb || ab.generateMipmap(ab.TEXTURE_2D), this._bindTextureDirectly(ab.TEXTURE_2D, null), cb && cb.removePendingData(bb), bb.onLoadedObservable.notifyObservers(bb), bb.onLoadedObservable.clear()
      }
      _prepareWebGLTexture(bb, cb, sb, kb, Wb, ab, Tb, Ub, Ib, Hb) {
        const fb = this.getCaps().maxTextureSize,
          Mb = Math.min(fb, this.needPOTTextures ? (0, nb.f)(kb.width, fb) : kb.width),
          Xb = Math.min(fb, this.needPOTTextures ? (0, nb.f)(kb.height, fb) : kb.height),
          mb = this._gl;
        mb && (bb._hardwareTexture ? (this._bindTextureDirectly(mb.TEXTURE_2D, bb, !0), this._unpackFlipY(void 0 === Wb || !!Wb), bb.baseWidth = kb.width, bb.baseHeight = kb.height, bb.width = Mb, bb.height = Xb, bb.isReady = !0, bb.type = -1 !== bb.type ? bb.type : 0, bb.format = -1 !== bb.format ? bb.format : Hb ?? (".jpg" !== cb || bb._useSRGBBuffer ? 5 : 4), Ub(Mb, Xb, kb, cb, bb, (() => {
          this._prepareWebGLTextureContinuation(bb, sb, ab, Tb, Ib)
        })) || this._prepareWebGLTextureContinuation(bb, sb, ab, Tb, Ib)) : sb && sb.removePendingData(bb))
      }
      _getInternalFormatFromDepthTextureFormat(bb, cb, sb) {
        const kb = this._gl;
        if (!cb) return kb.STENCIL_INDEX8;
        let Wb = sb ? kb.DEPTH_STENCIL : kb.DEPTH_COMPONENT;
        return this.gl > 1 ? 15 === bb ? Wb = kb.DEPTH_COMPONENT16 : 16 === bb ? Wb = kb.DEPTH_COMPONENT24 : 17 === bb || 13 === bb ? Wb = sb ? kb.DEPTH24_STENCIL8 : kb.DEPTH_COMPONENT24 : 14 === bb ? Wb = kb.DEPTH_COMPONENT32F : 18 === bb && (Wb = sb ? kb.DEPTH32F_STENCIL8 : kb.DEPTH_COMPONENT32F) : Wb = kb.DEPTH_COMPONENT16, Wb
      }
      _getWebGLTextureTypeFromDepthTextureFormat(bb) {
        const cb = this._gl;
        let sb = cb.UNSIGNED_INT;
        return 15 === bb ? sb = cb.UNSIGNED_SHORT : 17 === bb || 13 === bb ? sb = cb.UNSIGNED_INT_24_8 : 14 === bb ? sb = cb.FLOAT : 18 === bb ? sb = cb.FLOAT_32_UNSIGNED_INT_24_8_REV : 19 === bb && (sb = cb.UNSIGNED_BYTE), sb
      }
      _setupFramebufferDepthAttachments(bb, cb, sb, kb) {
        let Wb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
          ab = arguments.length > 5 ? arguments[5] : void 0,
          Tb = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        const Ub = this._gl;
        ab = ab ?? (bb ? 13 : 14);
        const Ib = this._getInternalFormatFromDepthTextureFormat(ab, cb, bb);
        return bb && cb ? this._createRenderBuffer(sb, kb, Wb, Ub.DEPTH_STENCIL, Ib, Tb ? -1 : Ub.DEPTH_STENCIL_ATTACHMENT) : cb ? this._createRenderBuffer(sb, kb, Wb, Ib, Ib, Tb ? -1 : Ub.DEPTH_ATTACHMENT) : bb ? this._createRenderBuffer(sb, kb, Wb, Ib, Ib, Tb ? -1 : Ub.STENCIL_ATTACHMENT) : null
      }
      _createRenderBuffer(bb, cb, sb, kb, Wb, ab) {
        let Tb = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6];
        const Ub = this._gl.createRenderbuffer();
        return this._updateRenderBuffer(Ub, bb, cb, sb, kb, Wb, ab, Tb)
      }
      _updateRenderBuffer(bb, cb, sb, kb, Wb, ab, Tb) {
        let Ub = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7];
        const Ib = this._gl;
        return Ib.bindRenderbuffer(Ib.RENDERBUFFER, bb), kb > 1 && Ib.renderbufferStorageMultisample ? Ib.renderbufferStorageMultisample(Ib.RENDERBUFFER, kb, ab, cb, sb) : Ib.renderbufferStorage(Ib.RENDERBUFFER, Wb, cb, sb), -1 !== Tb && Ib.framebufferRenderbuffer(Ib.FRAMEBUFFER, Tb, Ib.RENDERBUFFER, bb), Ub && Ib.bindRenderbuffer(Ib.RENDERBUFFER, null), bb
      }
      _releaseTexture(bb) {
        this._deleteTexture(bb._hardwareTexture), this.unbindAllTextures();
        const cb = this._internalTexturesCache.indexOf(bb); - 1 !== cb && this._internalTexturesCache.splice(cb, 1), bb._lodTextureHigh && bb._lodTextureHigh.dispose(), bb._lodTextureMid && bb._lodTextureMid.dispose(), bb._lodTextureLow && bb._lodTextureLow.dispose(), bb._irradianceTexture && bb._irradianceTexture.dispose()
      }
      _deleteTexture(bb) {
        bb?.release()
      }
      _setProgram(bb) {
        this._currentProgram !== bb && ((0, Wb.s)(bb, this._gl), this._currentProgram = bb)
      }
      bindSamplers(bb) {
        const cb = bb.getPipelineContext();
        this._setProgram(cb.program);
        const sb = bb.getSamplers();
        for (let kb = 0; kb < sb.length; kb++) {
          const cb = bb.getUniform(sb[kb]);
          cb && (this._boundUniforms[kb] = cb)
        }
        this._currentEffect = null
      }
      _activateCurrentTexture() {
        this._currentTextureChannel !== this._activeChannel && (this._gl.activeTexture(this._gl.TEXTURE0 + this._activeChannel), this._currentTextureChannel = this._activeChannel)
      }
      _bindTextureDirectly(bb, cb) {
        let sb = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          kb = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          Wb = !1;
        const ab = cb && cb._associatedChannel > -1;
        sb && ab && (this._activeChannel = cb._associatedChannel);
        if (this._boundTexturesCache[this._activeChannel] !== cb || kb) {
          if (this._activateCurrentTexture(), cb && cb.isMultiview) throw Ub.c.Error(["_bindTextureDirectly called with a multiview texture!", bb, cb]), "_bindTextureDirectly called with a multiview texture!";
          this._gl.bindTexture(bb, cb?._hardwareTexture?.underlyingResource ?? null), this._boundTexturesCache[this._activeChannel] = cb, cb && (cb._associatedChannel = this._activeChannel)
        } else sb && (Wb = !0, this._activateCurrentTexture());
        return ab && !sb && this._bindSamplerUniformToChannel(cb._associatedChannel, this._activeChannel), Wb
      }
      _bindTexture(bb, cb, sb) {
        if (void 0 === bb) return;
        cb && (cb._associatedChannel = bb), this._activeChannel = bb;
        const kb = cb ? this._getTextureTarget(cb) : this._gl.TEXTURE_2D;
        this._bindTextureDirectly(kb, cb)
      }
      unbindAllTextures() {
        for (let bb = 0; bb < this._maxSimultaneousTextures; bb++) this._activeChannel = bb, this._bindTextureDirectly(this._gl.TEXTURE_2D, null), this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null), this.gl > 1 && (this._bindTextureDirectly(this._gl.TEXTURE_3D, null), this._bindTextureDirectly(this._gl.TEXTURE_2D_ARRAY, null))
      }
      setTexture(bb, cb, sb, kb) {
        void 0 !== bb && (cb && (this._boundUniforms[bb] = cb), this._setTexture(bb, sb))
      }
      _bindSamplerUniformToChannel(bb, cb) {
        const sb = this._boundUniforms[bb];
        sb && sb._currentState !== cb && (this._gl.uniform1i(sb, cb), sb._currentState = cb)
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
      _setTexture(bb, cb) {
        let sb, kb = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Wb = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (!cb) return null != this._boundTexturesCache[bb] && (this._activeChannel = bb, this._bindTextureDirectly(this._gl.TEXTURE_2D, null), this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null), this.gl > 1 && (this._bindTextureDirectly(this._gl.TEXTURE_3D, null), this._bindTextureDirectly(this._gl.TEXTURE_2D_ARRAY, null))), !1;
        if (cb.video) {
          this._activeChannel = bb;
          const sb = cb.getInternalTexture();
          sb && (sb._associatedChannel = bb), cb.update()
        } else if (4 === cb.delayLoadState) return cb.delayLoad(), !1;
        sb = Wb ? cb.depthStencilTexture : cb.isReady() ? cb.getInternalTexture() : cb.isCube ? this.emptyCubeTexture : cb.is3D ? this.emptyTexture3D : cb.is2DArray ? this.emptyTexture2DArray : this.emptyTexture, !kb && sb && (sb._associatedChannel = bb);
        let ab = !0;
        this._boundTexturesCache[bb] === sb && (kb || this._bindSamplerUniformToChannel(sb._associatedChannel, bb), ab = !1), this._activeChannel = bb;
        const Tb = this._getTextureTarget(sb);
        if (ab && this._bindTextureDirectly(Tb, sb, kb), sb && !sb.isMultiview) {
          if (sb.isCube && sb._cachedCoordinatesMode !== cb.coordinatesMode) {
            sb._cachedCoordinatesMode = cb.coordinatesMode;
            const bb = 3 !== cb.coordinatesMode && 5 !== cb.coordinatesMode ? 1 : 0;
            cb.wrapU = bb, cb.wrapV = bb
          }
          sb._cachedWrapU !== cb.wrapU && (sb._cachedWrapU = cb.wrapU, this._setTextureParameterInteger(Tb, this._gl.TEXTURE_WRAP_S, this._getTextureWrapMode(cb.wrapU), sb)), sb._cachedWrapV !== cb.wrapV && (sb._cachedWrapV = cb.wrapV, this._setTextureParameterInteger(Tb, this._gl.TEXTURE_WRAP_T, this._getTextureWrapMode(cb.wrapV), sb)), sb.is3D && sb._cachedWrapR !== cb.wrapR && (sb._cachedWrapR = cb.wrapR, this._setTextureParameterInteger(Tb, this._gl.TEXTURE_WRAP_R, this._getTextureWrapMode(cb.wrapR), sb)), this._setAnisotropicLevel(Tb, sb, cb.anisotropicFilteringLevel)
        }
        return !0
      }
      setTextureArray(bb, cb, sb, kb) {
        if (void 0 !== bb && cb) {
          this._textureUnits && this._textureUnits.length === sb.length || (this._textureUnits = new Int32Array(sb.length));
          for (let cb = 0; cb < sb.length; cb++) {
            const kb = sb[cb].getInternalTexture();
            kb ? (this._textureUnits[cb] = bb + cb, kb._associatedChannel = bb + cb) : this._textureUnits[cb] = -1
          }
          this._gl.uniform1iv(cb, this._textureUnits);
          for (let bb = 0; bb < sb.length; bb++) this._setTexture(this._textureUnits[bb], sb[bb], !0)
        }
      }
      _setAnisotropicLevel(bb, cb, sb) {
        const kb = this._caps.textureAnisotropicFilterExtension;
        11 !== cb.samplingMode && 3 !== cb.samplingMode && 2 !== cb.samplingMode && (sb = 1), kb && cb._cachedAnisotropicFilteringLevel !== sb && (this._setTextureParameterFloat(bb, kb.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(sb, this._caps.maxAnisotropy), cb), cb._cachedAnisotropicFilteringLevel = sb)
      }
      _setTextureParameterFloat(bb, cb, sb, kb) {
        this._bindTextureDirectly(bb, kb, !0, !0), this._gl.texParameterf(bb, cb, sb)
      }
      _setTextureParameterInteger(bb, cb, sb, kb) {
        kb && this._bindTextureDirectly(bb, kb, !0, !0), this._gl.texParameteri(bb, cb, sb)
      }
      unbindAllAttributes() {
        if (this._mustWipeVertexAttributes) {
          this._mustWipeVertexAttributes = !1;
          for (let bb = 0; bb < this._caps.maxVertexAttribs; bb++) this.disableAttributeByIndex(bb)
        } else
          for (let bb = 0, cb = this._vertexAttribArraysEnabled.length; bb < cb; bb++) bb >= this._caps.maxVertexAttribs || !this._vertexAttribArraysEnabled[bb] || this.disableAttributeByIndex(bb)
      }
      releaseEffects() {
        this._compiledEffects = {}, this.onReleaseEffectsObservable.notifyObservers(this)
      }
      dispose() {
        (0, Ib.j)() && this._renderingCanvas && (this._renderingCanvas.removeEventListener("webglcontextlost", this._onContextLost), this._onContextRestored && this._renderingCanvas.removeEventListener("webglcontextrestored", this._onContextRestored)), super.dispose(), this._dummyFramebuffer && this._gl.deleteFramebuffer(this._dummyFramebuffer), this.unbindAllAttributes(), this._boundUniforms = {}, this._workingCanvas = null, this._workingContext = null, this._currentBufferPointers.length = 0, this._currentProgram = null, this._creationOptions.loseContextOnDispose && this._gl.getExtension("WEBGL_lose_context")?.loseContext(), (0, Wb.B)(this._gl)
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
        const cb = this._gl;
        for (; cb.getError() !== cb.NO_ERROR;);
        let sb = !0;
        const kb = cb.createTexture();
        cb.bindTexture(cb.TEXTURE_2D, kb), cb.texImage2D(cb.TEXTURE_2D, 0, this._getRGBABufferInternalSizedFormat(bb), 1, 1, 0, cb.RGBA, this._getWebGLTextureType(bb), null), cb.texParameteri(cb.TEXTURE_2D, cb.TEXTURE_MIN_FILTER, cb.NEAREST), cb.texParameteri(cb.TEXTURE_2D, cb.TEXTURE_MAG_FILTER, cb.NEAREST);
        const Wb = cb.createFramebuffer();
        cb.bindFramebuffer(cb.FRAMEBUFFER, Wb), cb.framebufferTexture2D(cb.FRAMEBUFFER, cb.COLOR_ATTACHMENT0, cb.TEXTURE_2D, kb, 0);
        const ab = cb.checkFramebufferStatus(cb.FRAMEBUFFER);
        if (sb = sb && ab === cb.FRAMEBUFFER_COMPLETE, sb = sb && cb.getError() === cb.NO_ERROR, sb && (cb.clear(cb.COLOR_BUFFER_BIT), sb = sb && cb.getError() === cb.NO_ERROR), sb) {
          cb.bindFramebuffer(cb.FRAMEBUFFER, null);
          const bb = cb.RGBA,
            kb = cb.UNSIGNED_BYTE,
            Wb = new Uint8Array(4);
          cb.readPixels(0, 0, 1, 1, bb, kb, Wb), sb = sb && cb.getError() === cb.NO_ERROR
        }
        for (cb.deleteTexture(kb), cb.deleteFramebuffer(Wb), cb.bindFramebuffer(cb.FRAMEBUFFER, null); !sb && cb.getError() !== cb.NO_ERROR;);
        return sb
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
        let cb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          sb = cb ? this._glSRGBExtensionValues.SRGB8_ALPHA8 : this._gl.RGBA;
        switch (bb) {
          case 0:
            sb = this._gl.ALPHA;
            break;
          case 1:
            sb = this._gl.LUMINANCE;
            break;
          case 2:
            sb = this._gl.LUMINANCE_ALPHA;
            break;
          case 6:
          case 33322:
          case 36760:
            sb = this._gl.RED;
            break;
          case 7:
          case 33324:
          case 36761:
            sb = this._gl.RG;
            break;
          case 4:
          case 32852:
          case 36762:
            sb = cb ? this._glSRGBExtensionValues.SRGB : this._gl.RGB;
            break;
          case 5:
          case 32859:
          case 36763:
            sb = cb ? this._glSRGBExtensionValues.SRGB8_ALPHA8 : this._gl.RGBA
        }
        if (this._webGLVersion > 1) switch (bb) {
          case 8:
            sb = this._gl.RED_INTEGER;
            break;
          case 9:
            sb = this._gl.RG_INTEGER;
            break;
          case 10:
            sb = this._gl.RGB_INTEGER;
            break;
          case 11:
            sb = this._gl.RGBA_INTEGER
        }
        return sb
      }
      _getRGBABufferInternalSizedFormat(bb, cb) {
        let sb = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (1 === this._webGLVersion) {
          if (void 0 !== cb) switch (cb) {
            case 0:
              return this._gl.ALPHA;
            case 1:
              return this._gl.LUMINANCE;
            case 2:
              return this._gl.LUMINANCE_ALPHA;
            case 4:
              return sb ? this._glSRGBExtensionValues.SRGB : this._gl.RGB
          }
          return this._gl.RGBA
        }
        switch (bb) {
          case 3:
            switch (cb) {
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
            switch (cb) {
              case 6:
                return this._gl.R8;
              case 7:
                return this._gl.RG8;
              case 4:
                return sb ? this._glSRGBExtensionValues.SRGB8 : this._gl.RGB8;
              case 5:
                return sb ? this._glSRGBExtensionValues.SRGB8_ALPHA8 : this._gl.RGBA8;
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
            switch (cb) {
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
            switch (cb) {
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
            switch (cb) {
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
            switch (cb) {
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
            switch (cb) {
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
            switch (cb) {
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
            switch (cb) {
              case 5:
              default:
                return this._gl.RGB10_A2;
              case 11:
                return this._gl.RGB10_A2UI
            }
        }
        return sb ? this._glSRGBExtensionValues.SRGB8_ALPHA8 : this._gl.RGBA8
      }
      readPixels(bb, cb, sb, kb) {
        let Wb = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          ab = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          Tb = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
        const Ib = Wb ? 4 : 3,
          Hb = Wb ? this._gl.RGBA : this._gl.RGB,
          fb = sb * kb * Ib;
        if (Tb) {
          if (Tb.length < fb) return Ub.c.Error(`Data buffer is too small to store the read pixels (${Tb.length} should be more than ${fb})`), Promise.resolve(Tb)
        } else Tb = new Uint8Array(fb);
        return ab && this.flushFramebuffer(), this._gl.readPixels(bb, cb, sb, kb, Hb, this._gl.UNSIGNED_BYTE, Tb), Promise.resolve(Tb)
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
          const bb = ab.b._CreateCanvas(1, 1),
            cb = bb.getContext("webgl") || bb.getContext("experimental-webgl");
          this._IsSupported = null != cb && !!globalThis.WebGLRenderingContext
        } catch (bb) {
          this._IsSupported = !1
        }
        return this._IsSupported
      }
      static get HasMajorPerformanceCaveat() {
        if (null === this._HasMajorPerformanceCaveat) try {
          const bb = ab.b._CreateCanvas(1, 1),
            cb = bb.getContext("webgl", {
              failIfMajorPerformanceCaveat: !0
            }) || bb.getContext("experimental-webgl", {
              failIfMajorPerformanceCaveat: !0
            });
          this._HasMajorPerformanceCaveat = !cb
        } catch (bb) {
          this._HasMajorPerformanceCaveat = !1
        }
        return this._HasMajorPerformanceCaveat
      }
    }
    Lb._TempClearColorUint32 = new Uint32Array(4), Lb._TempClearColorInt32 = new Int32Array(4), Lb._TempClearColorFloat32 = new Float32Array(4), Lb.ExceptionList = [{
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
    }], Lb._ConcatenateShader = Qb.g, Lb._IsSupported = null, Lb._HasMajorPerformanceCaveat = null
  },
  39630: (bb, cb, sb) => {
    var kb;
    sb.d(cb, {
        c: () => Wb
      }),
      function(bb) {
        bb[bb.PointerMove = 0] = "PointerMove", bb[bb.PointerDown = 1] = "PointerDown", bb[bb.PointerUp = 2] = "PointerUp"
      }(kb || (kb = {}));
    class Wb {}
    Wb.DOM_DELTA_PIXEL = 0, Wb.DOM_DELTA_LINE = 1, Wb.DOM_DELTA_PAGE = 2
  },
  39622: (bb, cb, sb) => {
    sb.d(cb, {
      b: () => kb,
      e: () => ab,
      h: () => Wb
    });
    class kb {}
    kb.KEYDOWN = 1, kb.KEYUP = 2;
    class Wb {
      constructor(bb, cb) {
        this.type = bb, this.event = cb
      }
    }
    class ab extends Wb {
      get skipOnPointerObservable() {
        return this.skipOnKeyboardObservable
      }
      set skipOnPointerObservable(bb) {
        this.skipOnKeyboardObservable = bb
      }
      constructor(bb, cb) {
        super(bb, cb), this.type = bb, this.event = cb, this.skipOnKeyboardObservable = !1
      }
    }
  },
  39613: (bb, cb, sb) => {
    sb.d(cb, {
      b: () => Wb,
      d: () => Tb,
      g: () => Ub
    });
    var kb = sb(36656);
    class Wb {}
    Wb.POINTERDOWN = 1, Wb.POINTERUP = 2, Wb.POINTERMOVE = 4, Wb.POINTERWHEEL = 8, Wb.POINTERPICK = 16, Wb.POINTERTAP = 32, Wb.POINTERDOUBLETAP = 64;
    class ab {
      constructor(bb, cb) {
        this.type = bb, this.event = cb
      }
    }
    class Tb extends ab {
      constructor(bb, cb, sb, Wb) {
        super(bb, cb), this.ray = null, this.originalPickingInfo = null, this.skipOnPointerObservable = !1, this.localPosition = new kb.n(sb, Wb)
      }
    }
    class Ub extends ab {
      get pickInfo() {
        return this._pickInfo || this._generatePickInfo(), this._pickInfo
      }
      constructor(bb, cb, sb) {
        let kb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        super(bb, cb), this._pickInfo = sb, this._inputManager = kb
      }
      _generatePickInfo() {
        this._inputManager && (this._pickInfo = this._inputManager._pickMove(this.event), this._inputManager._setRayOnPointerInfo(this._pickInfo, this.event), this._inputManager = null)
      }
    }
  },
  39647: (bb, cb, sb) => {
    sb.d(cb, {
      b: () => kb
    });
    class kb {
      static CompareLightsPriority(bb, cb) {
        return bb.shadowEnabled !== cb.shadowEnabled ? (cb.shadowEnabled ? 1 : 0) - (bb.shadowEnabled ? 1 : 0) : cb.renderPriority - bb.renderPriority
      }
    }
    kb.FALLOFF_DEFAULT = 0, kb.FALLOFF_PHYSICAL = 1, kb.FALLOFF_GLTF = 2, kb.FALLOFF_STANDARD = 3, kb.LIGHTMAP_DEFAULT = 0, kb.LIGHTMAP_SPECULAR = 1, kb.LIGHTMAP_SHADOWSONLY = 2, kb.INTENSITYMODE_AUTOMATIC = 0, kb.INTENSITYMODE_LUMINOUSPOWER = 1, kb.INTENSITYMODE_LUMINOUSINTENSITY = 2, kb.INTENSITYMODE_ILLUMINANCE = 3, kb.INTENSITYMODE_LUMINANCE = 4, kb.LIGHTTYPEID_POINTLIGHT = 0, kb.LIGHTTYPEID_DIRECTIONALLIGHT = 1, kb.LIGHTTYPEID_SPOTLIGHT = 2, kb.LIGHTTYPEID_HEMISPHERICLIGHT = 3, kb.LIGHTTYPEID_RECT_AREALIGHT = 4, kb.LIGHTTYPEID_CLUSTERED_CONTAINER = 5
  },
  39241: (bb, cb, sb) => {
    sb.d(cb, {
      b: () => Tb
    });
    var kb, Wb = sb(36683),
      ab = sb(39248);
    ! function(bb) {
      bb[bb.Unknown = 0] = "Unknown", bb[bb.Url = 1] = "Url", bb[bb.Temp = 2] = "Temp", bb[bb.Raw = 3] = "Raw", bb[bb.Dynamic = 4] = "Dynamic", bb[bb.RenderTarget = 5] = "RenderTarget", bb[bb.MultiRenderTarget = 6] = "MultiRenderTarget", bb[bb.Cube = 7] = "Cube", bb[bb.CubeRaw = 8] = "CubeRaw", bb[bb.CubePrefiltered = 9] = "CubePrefiltered", bb[bb.Raw3D = 10] = "Raw3D", bb[bb.Raw2DArray = 11] = "Raw2DArray", bb[bb.DepthStencil = 12] = "DepthStencil", bb[bb.CubeRawRGBD = 13] = "CubeRawRGBD", bb[bb.Depth = 14] = "Depth", bb[bb.External = 15] = "External"
    }(kb || (kb = {}));
    class Tb extends ab.e {
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
      Sm() {
        return this._engine
      }
      get source() {
        return this._source
      }
      constructor(bb, cb) {
        let sb = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        super(), this.isReady = !1, this.isCube = !1, this.is3D = !1, this.is2DArray = !1, this.isMultiview = !1, this.url = "", this.generateMipMaps = !1, this._useMipMaps = null, this.mipLevelCount = 1, this.samples = 0, this.type = -1, this.format = -1, this.onLoadedObservable = new Wb.c, this.onErrorObservable = new Wb.c, this.onRebuildCallback = null, this.width = 0, this.height = 0, this.depth = 0, this.baseWidth = 0, this.baseHeight = 0, this.baseDepth = 0, this.invertY = !1, this._invertVScale = !1, this._associatedChannel = -1, this._source = 0, this._buffer = null, this._bufferView = null, this._bufferViewArray = null, this._bufferViewArrayArray = null, this._size = 0, this._extension = "", this._files = null, this._workingCanvas = null, this._workingContext = null, this._cachedCoordinatesMode = null, this._isDisabled = !1, this._compression = null, this._sphericalPolynomial = null, this._sphericalPolynomialPromise = null, this._sphericalPolynomialComputed = !1, this._lodGenerationScale = 0, this._lodGenerationOffset = 0, this._useSRGBBuffer = !1, this._creationFlags = 0, this._lodTextureHigh = null, this._lodTextureMid = null, this._lodTextureLow = null, this._isRGBD = !1, this._linearSpecularLOD = !1, this._irradianceTexture = null, this._hardwareTexture = null, this._maxLodLevel = null, this._references = 1, this._gammaSpace = null, this._premulAlpha = !1, this._dynamicTextureSource = null, this._autoMSAAManagement = !1, this._engine = bb, this._source = cb, this._uniqueId = Tb._Counter++, sb || (this._hardwareTexture = bb._createHardwareTexture())
      }
      incrementReferences() {
        this._references++
      }
      updateSize(bb, cb) {
        let sb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        this._engine.updateTextureDimensions(this, bb, cb, sb), this.width = bb, this.height = cb, this.depth = sb, this.baseWidth = bb, this.baseHeight = cb, this.baseDepth = sb, this._size = bb * cb * sb
      }
      _rebuild() {
        if (this.isReady = !1, this._cachedCoordinatesMode = null, this._cachedWrapU = null, this._cachedWrapV = null, this._cachedWrapR = null, this._cachedAnisotropicFilteringLevel = null, this.onRebuildCallback) {
          const bb = this.onRebuildCallback(this),
            cb = cb => {
              cb._swapAndDie(this, !1), this.isReady = bb.isReady
            };
          return void(bb.isAsync ? bb.proxy.then(cb) : cb(bb.proxy))
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
                const cb = this._bufferViewArray[bb];
                cb && this._engine.updateRawTexture(this, cb, this.format, this.invertY, this._compression, this.type, this._useSRGBBuffer, bb)
              }
            this.isReady = !0;
            break;
          case 10:
            bb = this._engine.createRawTexture3D(this._bufferView, this.baseWidth, this.baseHeight, this.baseDepth, this.format, this.generateMipMaps, this.invertY, this.samplingMode, this._compression, this.type), bb._swapAndDie(this, !1), this.isReady = !0;
            break;
          case 11:
            if (bb = this._engine.createRawTexture2DArray(this._bufferView, this.baseWidth, this.baseHeight, this.baseDepth, this.format, this.generateMipMaps, this.invertY, this.samplingMode, this._compression, this.type, this._creationFlags, this.mipLevelCount), bb._swapAndDie(this, !1), this._bufferViewArray)
              for (let bb = 0; bb < this._bufferViewArray.length; bb++) {
                const cb = this._bufferViewArray[bb];
                cb && this._engine.updateRawTexture2DArray(this, cb, this.format, this.invertY, this._compression, this.type, bb)
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
        let cb = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this._hardwareTexture?.setUsage(bb._source, this.generateMipMaps, this.is2DArray, this.isCube, this.is3D, this.width, this.height, this.depth), bb._hardwareTexture = this._hardwareTexture, bb._setUniqueId(Tb._Counter++), cb && (bb._isRGBD = this._isRGBD), this._lodTextureHigh && (bb._lodTextureHigh && bb._lodTextureHigh.dispose(), bb._lodTextureHigh = this._lodTextureHigh), this._lodTextureMid && (bb._lodTextureMid && bb._lodTextureMid.dispose(), bb._lodTextureMid = this._lodTextureMid), this._lodTextureLow && (bb._lodTextureLow && bb._lodTextureLow.dispose(), bb._lodTextureLow = this._lodTextureLow), this._irradianceTexture && (bb._irradianceTexture && bb._irradianceTexture.dispose(), bb._irradianceTexture = this._irradianceTexture);
        const sb = this._engine.getLoadedTexturesCache();
        let kb = sb.indexOf(this); - 1 !== kb && sb.splice(kb, 1), kb = sb.indexOf(bb), -1 === kb && sb.push(bb)
      }
      dispose() {
        this._references--, 0 === this._references && (this.onLoadedObservable.clear(), this.onErrorObservable.clear(), this._engine._releaseTexture(this), this._hardwareTexture = null, this._dynamicTextureSource = null)
      }
    }
    Tb._Counter = 0
  },
  39353: (bb, cb, sb) => {
    function kb(bb) {
      return 13 === bb || 14 === bb || 15 === bb || 16 === bb || 17 === bb || 18 === bb || 19 === bb
    }

    function Wb(bb) {
      return 8 === bb || 9 === bb || 10 === bb || 11 === bb
    }

    function ab(bb) {
      return 0 === bb || 5 === bb || 7 === bb || 11 === bb
    }

    function Tb(bb) {
      return 13 === bb || 17 === bb || 18 === bb || 19 === bb
    }
    sb.d(cb, {
      d: () => Tb,
      e: () => kb,
      f: () => Wb,
      i: () => ab
    })
  },
  39248: (bb, cb, sb) => {
    sb.d(cb, {
      e: () => kb
    });
    class kb {
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
          cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          sb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          kb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          Wb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 2,
          ab = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
        return this._cachedWrapU = bb, this._cachedWrapV = cb, this._cachedWrapR = sb, this._cachedAnisotropicFilteringLevel = kb, this.samplingMode = Wb, this._comparisonFunction = ab, this
      }
      compareSampler(bb) {
        return this._cachedWrapU === bb._cachedWrapU && this._cachedWrapV === bb._cachedWrapV && this._cachedWrapR === bb._cachedWrapR && this._cachedAnisotropicFilteringLevel === bb._cachedAnisotropicFilteringLevel && this.samplingMode === bb.samplingMode && this._comparisonFunction === bb._comparisonFunction && this._useMipMaps === bb._useMipMaps
      }
    }
  },
  39550: (bb, cb, sb) => {
    function kb(bb) {
      bb.push("vCameraColorCurveNeutral", "vCameraColorCurvePositive", "vCameraColorCurveNegative")
    }
    sb.d(cb, {
      c: () => kb
    })
  },
  39328: (bb, cb, sb) => {
    function kb(bb) {
      return void 0 === bb.getPipelineContext
    }
    sb.d(cb, {
      c: () => kb
    })
  },
  39755: (bb, cb, sb) => {
    sb.d(cb, {
      b: () => Wb
    });
    var kb = sb(39307);
    class Wb {
      static GetEffect(bb) {
        return void 0 === bb.getPipelineContext ? bb.effect : bb
      }
      constructor(bb) {
        let cb = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this._wasPreviouslyReady = !1, this._forceRebindOnNextCall = !0, this._wasPreviouslyUsingInstances = null, this.effect = null, this.defines = null, this.drawContext = bb.createDrawContext(), cb && (this.materialContext = bb.createMaterialContext())
      }
      setEffect(bb, cb) {
        let sb = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        sb || this.effect === bb || this.drawContext?._releaseUniformBufferSlots?.(), this.effect = bb, void 0 !== cb && (this.defines = cb), sb && this.drawContext?.reset()
      }
      dispose() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this.effect) {
          const cb = this.effect;
          bb ? cb.dispose() : kb.c.SetImmediate((() => {
            cb.Sm().onEndFrameObservable.addOnce((() => {
              cb.dispose()
            }))
          })), this.effect = null
        }
        this.drawContext?.dispose()
      }
    }
  },
  39276: (bb, cb, sb) => {
    sb.d(cb, {
      e: () => Mb,
      f: () => nb,
      i: () => Hb,
      m: () => fb
    });
    var kb = sb(39278),
      Wb = sb(39284),
      ab = sb(39267),
      Tb = sb(38284),
      Ub = sb(39298),
      Ib = sb(39287);

    function Hb(bb, cb) {
      return (0, Wb.C)(cb).cachedPipelines[bb]
    }

    function fb(bb) {
      const cb = bb._name,
        sb = bb.context;
      if (cb && sb) {
        const bb = (0, Wb.C)(sb),
          kb = bb.cachedPipelines[cb];
        kb?.dispose(), delete bb.cachedPipelines[cb]
      }
    }

    function Mb(bb, cb, sb, Wb, ab, Tb, Ib) {
      let Hb, fb;
      const Mb = (0, kb.j)() ? Tb?.getHostDocument() : null;
      Hb = "string" === typeof cb ? cb : "string" === typeof cb.vertexSource ? "source:" + cb.vertexSource : "string" === typeof cb.vertexElement ? Mb?.getElementById(cb.vertexElement) || cb.vertexElement : cb.vertex || cb, fb = "string" === typeof cb ? cb : "string" === typeof cb.fragmentSource ? "source:" + cb.fragmentSource : "string" === typeof cb.fragmentElement ? Mb?.getElementById(cb.fragmentElement) || cb.fragmentElement : cb.fragment || cb;
      const nb = [void 0, void 0],
        mb = () => {
          if (nb[0] && nb[1]) {
            const [kb, Hb] = nb;
            (0, Ub.f)(bb), (0, Ub.k)(kb, bb, ((kb, fb) => {
              Ib && (Ib._vertexSourceCodeBeforeMigration = fb), sb && (kb = sb("vertex", kb)), bb.isFragment = !0, (0, Ub.k)(Hb, bb, ((Tb, Hb) => {
                Ib && (Ib._fragmentSourceCodeBeforeMigration = Hb), sb && (Tb = sb("fragment", Tb));
                const fb = (0, Ub.e)(kb, Tb, bb);
                bb = null;
                const Mb = function(bb, cb, sb, kb) {
                  if (sb) {
                    return {
                      vertexSourceCode: (1 === kb ? "//" : "") + "#define SHADER_NAME vertex:" + (sb.vertexElement || sb.vertex || sb.spectorName || sb) + "\n" + bb,
                      fragmentSourceCode: (1 === kb ? "//" : "") + "#define SHADER_NAME fragment:" + (sb.fragmentElement || sb.fragment || sb.spectorName || sb) + "\n" + cb
                    }
                  }
                  return {
                    vertexSourceCode: bb,
                    fragmentSourceCode: cb
                  }
                }(fb.vertexCode, fb.fragmentCode, cb, ab);
                Wb?.(Mb.vertexSourceCode, Mb.fragmentSourceCode)
              }), Tb)
            }), Tb)
          }
        };
      Xb(Hb, "Vertex", "", (bb => {
        Ib && (Ib._rawVertexSourceCode = bb), nb[0] = bb, mb()
      }), ab), Xb(fb, "Fragment", "Pixel", (bb => {
        Ib && (Ib._rawFragmentSourceCode = bb), nb[1] = bb, mb()
      }), ab)
    }

    function Xb(bb, cb, sb, Wb, Tb, Ub) {
      if ("undefined" !== typeof HTMLElement && bb instanceof HTMLElement) {
        return void Wb((0, kb.d)(bb))
      }
      if ("source:" === bb.substring(0, 7)) return void Wb(bb.substring(7));
      if ("base64:" === bb.substring(0, 7)) {
        return void Wb(window.atob(bb.substring(7)))
      }
      const Hb = ab.d.GetShadersStore(Tb);
      if (Hb[bb + cb + "Shader"]) return void Wb(Hb[bb + cb + "Shader"]);
      if (sb && Hb[bb + sb + "Shader"]) return void Wb(Hb[bb + sb + "Shader"]);
      let fb;
      if (fb = "." === bb[0] || "/" === bb[0] || bb.indexOf("http") > -1 ? bb : ab.d.GetShadersRepository(Tb) + bb, !(Ub = Ub || Ib.m)) throw new Error("loadFileInjection is not defined");
      Ub(fb + "." + cb.toLowerCase() + ".fx", Wb)
    }
    const nb = (bb, cb, sb, kb) => {
      try {
        const ab = bb.context ? (0, Wb.C)(bb.context) : null;
        ab && (ab.disableParallelShaderCompile = bb.disableParallelCompilation);
        const Tb = bb.existingPipelineContext || cb(bb.shaderProcessingContext);
        return Tb._name = bb.name, bb.name && ab && (ab.cachedPipelines[bb.name] = Tb), sb(Tb, bb.vertex, bb.fragment, !!bb.createAsRaw, "", "", bb.rebuildRebind, bb.defines, bb.transformFeedbackVaryings, "", (() => {
          kb(Tb, (() => {
            bb.onRenderingStateCompiled?.(Tb)
          }))
        })), Tb
      } catch (ab) {
        throw Tb.c.Error("Error compiling effect"), ab
      }
    }
  },
  39258: (bb, cb, sb) => {
    sb.d(cb, {
      c: () => Ib
    });
    var kb = sb(36683),
      Wb = sb(38284),
      ab = sb(39267),
      Tb = sb(39276),
      Ub = sb(39307);
    class Ib {
      static get ShadersRepository() {
        return ab.d.ShadersRepository
      }
      static set ShadersRepository(bb) {
        ab.d.ShadersRepository = bb
      }
      get Scb() {
        return this._isDisposed
      }
      get onBindObservable() {
        return this._onBindObservable || (this._onBindObservable = new kb.c), this._onBindObservable
      }
      get shaderLanguage() {
        return this._shaderLanguage
      }
      constructor(bb, cb, sb) {
        let Wb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          ab = arguments.length > 4 ? arguments[4] : void 0,
          Ub = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          Hb = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
          fb = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
          Mb = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
          Xb = arguments.length > 9 ? arguments[9] : void 0,
          nb = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : "",
          mb = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : 0,
          lb = arguments.length > 12 ? arguments[12] : void 0;
        this.defines = "", this.onCompiled = null, this.onError = null, this.onBind = null, this.uniqueId = 0, this.onCompileObservable = new kb.c, this.onErrorObservable = new kb.c, this._onBindObservable = null, this._isDisposed = !1, this._refCount = 1, this._bonesComputationForcedToCPU = !1, this._uniformBuffersNames = {}, this._multiTarget = !1, this._samplers = {}, this._isReady = !1, this._compilationError = "", this._allFallbacksProcessed = !1, this._uniforms = {}, this._key = "", this._fallbacks = null, this._vertexSourceCodeOverride = "", this._fragmentSourceCodeOverride = "", this._transformFeedbackVaryings = null, this._disableParallelShaderCompilation = !1, this._pipelineContext = null, this._vertexSourceCode = "", this._fragmentSourceCode = "", this._vertexSourceCodeBeforeMigration = "", this._fragmentSourceCodeBeforeMigration = "", this._rawVertexSourceCode = "", this._rawFragmentSourceCode = "", this._processCodeAfterIncludes = void 0, this._processFinalCode = null, this._onReleaseEffectsObserver = null, this.name = bb, this._key = nb;
        const Qb = this._key.replace(/\r/g, "").replace(/\n/g, "|");
        let eb;
        if (cb.attributes) {
          const bb = cb;
          if (this._engine = sb, this._attributesNames = bb.attributes, this._uniformsNames = bb.uniformsNames.concat(bb.samplers), this._samplerList = bb.samplers.slice(), this.defines = bb.defines, this.onError = bb.onError, this.onCompiled = bb.onCompiled, this._fallbacks = bb.fallbacks, this._indexParameters = bb.indexParameters, this._transformFeedbackVaryings = bb.transformFeedbackVaryings || null, this._multiTarget = !!bb.multiTarget, this._shaderLanguage = bb.shaderLanguage ?? 0, this._disableParallelShaderCompilation = !!bb.disableParallelShaderCompilation, bb.uniformBuffersNames) {
            this._uniformBuffersNamesList = bb.uniformBuffersNames.slice();
            for (let cb = 0; cb < bb.uniformBuffersNames.length; cb++) this._uniformBuffersNames[bb.uniformBuffersNames[cb]] = cb
          }
          this._processFinalCode = bb.processFinalCode ?? null, this._processCodeAfterIncludes = bb.processCodeAfterIncludes ?? void 0, lb = bb.extraInitializationsAsync, eb = bb.existingPipelineContext
        } else this._engine = ab, this.defines = null == Ub ? "" : Ub, this._uniformsNames = sb.concat(Wb), this._samplerList = Wb ? Wb.slice() : [], this._attributesNames = cb, this._uniformBuffersNamesList = [], this._shaderLanguage = mb, this.onError = Mb, this.onCompiled = fb, this._indexParameters = Xb, this._fallbacks = Hb;
        "WEBGL2" === this._engine.shaderPlatformName && (eb = (0, Tb.i)(Qb, this._engine._gl) ?? eb), this._attributeLocationByName = {}, this.uniqueId = Ib._UniqueIdSeed++, eb ? (this._pipelineContext = eb, this._pipelineContext.setEngine(this._engine), this._onRenderingStateCompiled(this._pipelineContext), this._pipelineContext.program && (this._pipelineContext.program.__SPECTOR_rebuildProgram = this._rebuildProgram.bind(this))) : this._processShaderCodeAsync(null, !1, null, lb).catch((bb => {
          const cb = bb?.message ?? String(bb),
            sb = new Error(`Effect async shader preparation failed for "${String(this.name)}": ${cb}`);
          bb && "string" === typeof bb.stack && (sb.stack = `${sb.message}\nCaused by: ${bb.stack}`), this._processCompilationErrors(sb)
        })), this._onReleaseEffectsObserver = this._engine.onReleaseEffectsObservable.addOnce((() => {
          this._onReleaseEffectsObserver = null, this.Scb || this.dispose(!0)
        }))
      }
      async _processShaderCodeAsync() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          cb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          sb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          kb = arguments.length > 3 ? arguments[3] : void 0;
        kb && await kb(), this._processingContext = sb || this._engine._getShaderProcessingContext(this._shaderLanguage, !1);
        const Wb = {
          defines: this.defines.split("\n"),
          indexParameters: this._indexParameters,
          isFragment: !1,
          shouldUseHighPrecisionShader: this._engine._shouldUseHighPrecisionShader,
          processor: bb ?? this._engine._getShaderProcessor(this._shaderLanguage),
          supportsUniformBuffers: this._engine.supportsUniformBuffers,
          shadersRepository: ab.d.GetShadersRepository(this._shaderLanguage),
          includesShadersStore: ab.d.GetIncludesShadersStore(this._shaderLanguage),
          version: (100 * this._engine.version).toString(),
          platformName: this._engine.shaderPlatformName,
          processingContext: this._processingContext,
          isNDCHalfZRange: this._engine.isNDCHalfZRange,
          Dsb: this._engine.Dsb,
          processCodeAfterIncludes: this._processCodeAfterIncludes
        };
        (0, Tb.e)(Wb, this.name, this._processFinalCode, ((bb, sb) => {
          this._vertexSourceCode = bb, this._fragmentSourceCode = sb, this._prepareEffect(cb)
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
        return !!this._engine.Scb || (!!this._isReady || !!this._pipelineContext && this._pipelineContext.isReady)
      }
      Sm() {
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
        this.isReady() ? bb(this) : (this.onCompileObservable.add((cb => {
          bb(cb)
        })), this._pipelineContext && !this._pipelineContext.isAsync || this._checkIsReady(null))
      }
      _checkIsReady(bb) {
        (0, Ub.d)((() => this._isReadyInternal() || this._isDisposed), (() => {}), (cb => {
          this._processCompilationErrors(cb, bb)
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
            Dsb: this._engine.Dsb,
            supportsUniformBuffers: this._engine.supportsUniformBuffers
          },
          extendedCreatePipelineOptions: {
            transformFeedbackVaryings: this._transformFeedbackVaryings,
            createAsRaw: !(!this._vertexSourceCodeOverride || !this._fragmentSourceCodeOverride)
          }
        }
      }
      _rebuildProgram(bb, cb, sb, kb) {
        this._isReady = !1, this._vertexSourceCodeOverride = bb, this._fragmentSourceCodeOverride = cb, this.onError = (bb, cb) => {
          kb && kb(cb)
        }, this.onCompiled = () => {
          const bb = this.Sm().scenes;
          if (bb)
            for (let cb = 0; cb < bb.length; cb++) bb[cb].markAllMaterialsAsDirty(127);
          this._pipelineContext._handlesSpectorRebuildCallback?.(sb)
        }, this._fallbacks = null, this._prepareEffect()
      }
      _onRenderingStateCompiled(bb) {
        if (this._pipelineContext = bb, this._pipelineContext.setEngine(this._engine), this._attributes = [], this._pipelineContext._fillEffectInformation(this, this._uniformBuffersNames, this._uniformsNames, this._uniforms, this._samplerList, this._samplers, this._attributesNames, this._attributes), this._attributesNames)
          for (let cb = 0; cb < this._attributesNames.length; cb++) {
            const bb = this._attributesNames[cb];
            this._attributeLocationByName[bb] = this._attributes[cb]
          }
        this._engine.bindSamplers(this), this._compilationError = "", this._isReady = !0, this.onCompiled && this.onCompiled(this), this.onCompileObservable.notifyObservers(this), this.onCompileObservable.clear(), this._fallbacks && this._fallbacks.unBindMesh(), Ib.AutomaticallyClearCodeCache && this.clearCodeCache()
      }
      _prepareEffect() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const cb = this._pipelineContext;
        this._isReady = !1;
        try {
          const sb = !(!this._vertexSourceCodeOverride || !this._fragmentSourceCodeOverride),
            kb = sb ? null : this.defines,
            Wb = sb ? this._vertexSourceCodeOverride : this._vertexSourceCode,
            ab = sb ? this._fragmentSourceCodeOverride : this._fragmentSourceCode,
            Ub = this._engine;
          this._pipelineContext = (0, Tb.f)({
            existingPipelineContext: bb ? cb : null,
            vertex: Wb,
            fragment: ab,
            context: "WEBGL2" === Ub.shaderPlatformName || "WEBGL1" === Ub.shaderPlatformName ? Ub._gl : void 0,
            rebuildRebind: (bb, cb, sb, kb) => this._rebuildProgram(bb, cb, sb, kb),
            defines: kb,
            transformFeedbackVaryings: this._transformFeedbackVaryings,
            name: this._key.replace(/\r/g, "").replace(/\n/g, "|"),
            createAsRaw: sb,
            disableParallelCompilation: this._disableParallelShaderCompilation,
            shaderProcessingContext: this._processingContext,
            onRenderingStateCompiled: sb => {
              cb && !bb && this._engine._deletePipelineContext(cb), sb && this._onRenderingStateCompiled(sb)
            }
          }, this._engine.createPipelineContext.bind(this._engine), this._engine._preparePipelineContextAsync.bind(this._engine), this._engine._executeWhenRenderingStateIsCompiled.bind(this._engine)), this._pipelineContext.isAsync && this._checkIsReady(cb)
        } catch (sb) {
          this._processCompilationErrors(sb, cb)
        }
      }
      _getShaderCodeAndErrorLine(bb, cb, sb) {
        const kb = sb ? /FRAGMENT SHADER ERROR: 0:(\d+?):/ : /VERTEX SHADER ERROR: 0:(\d+?):/;
        let Wb = null;
        if (cb && bb) {
          const ab = cb.match(kb);
          if (ab && 2 === ab.length) {
            const cb = parseInt(ab[1]),
              kb = bb.split("\n", -1);
            kb.length >= cb && (Wb = `Offending line [${cb}] in ${sb?"fragment":"vertex"} code: ${kb[cb-1]}`)
          }
        }
        return [bb, Wb]
      }
      _processCompilationErrors(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        this._compilationError = "string" === typeof bb?.stack ? bb.stack : bb?.message ?? String(bb);
        const sb = this._attributesNames,
          kb = this._fallbacks;
        if (Wb.c.Error("Unable to compile effect:"), Wb.c.Error(`Uniforms: ${this._uniformsNames.join(" ")}`), Wb.c.Error(`Attributes: ${sb.join(" ")}`), Wb.c.Error("Defines:\n" + this.defines), Ib.LogShaderCodeOnCompilationError) {
          let bb, cb = null,
            sb = null;
          this._pipelineContext?._getVertexShaderCode() && ([bb, cb] = this._getShaderCodeAndErrorLine(this._pipelineContext._getVertexShaderCode(), this._compilationError, !1), bb && (Wb.c.Error("Vertex code:"), Wb.c.Error(bb))), this._pipelineContext?._getFragmentShaderCode() && ([bb, sb] = this._getShaderCodeAndErrorLine(this._pipelineContext?._getFragmentShaderCode(), this._compilationError, !0), bb && (Wb.c.Error("Fragment code:"), Wb.c.Error(bb))), cb && Wb.c.Error(cb), sb && Wb.c.Error(sb)
        }
        Wb.c.Error("Error: " + this._compilationError);
        const ab = () => {
          this.onError && this.onError(this, this._compilationError), this.onErrorObservable.notifyObservers(this), this._engine.onEffectErrorObservable.notifyObservers({
            effect: this,
            errors: this._compilationError
          })
        };
        cb && (this._pipelineContext = cb, this._isReady = !0, ab()), kb ? (this._pipelineContext = null, kb.hasMoreFallbacks ? (this._allFallbacksProcessed = !1, Wb.c.Error("Trying next fallback."), this.defines = kb.reduce(this.defines, this), this._prepareEffect()) : (this._allFallbacksProcessed = !0, ab(), this.onErrorObservable.clear(), this._fallbacks && this._fallbacks.unBindMesh())) : (this._allFallbacksProcessed = !0, cb || ab())
      }
      get isSupported() {
        return "" === this._compilationError
      }
      _bindTexture(bb, cb) {
        this._engine._bindTexture(this._samplers[bb], cb, bb)
      }
      setTexture(bb, cb) {
        this._engine.setTexture(this._samplers[bb], this._uniforms[bb], cb, bb)
      }
      setTextureArray(bb, cb) {
        const sb = bb + "Ex";
        if (-1 === this._samplerList.indexOf(sb + "0")) {
          const kb = this._samplerList.indexOf(bb);
          for (let bb = 1; bb < cb.length; bb++) {
            const cb = sb + (bb - 1).toString();
            this._samplerList.splice(kb + bb, 0, cb)
          }
          let Wb = 0;
          for (const bb of this._samplerList) this._samplers[bb] = Wb, Wb += 1
        }
        this._engine.setTextureArray(this._samplers[bb], this._uniforms[bb], cb, bb)
      }
      bindUniformBuffer(bb, cb) {
        const sb = this._uniformBuffersNames[cb];
        void 0 === sb || Ib._BaseCache[sb] === bb && this._engine._features.useUBOBindingCache || (Ib._BaseCache[sb] = bb, this._engine.bindUniformBufferBase(bb, sb, cb))
      }
      bindUniformBlock(bb, cb) {
        this._engine.bindUniformBlock(this._pipelineContext, bb, cb)
      }
      setInt(bb, cb) {
        return this._pipelineContext.setInt(bb, cb), this
      }
      setInt2(bb, cb, sb) {
        return this._pipelineContext.setInt2(bb, cb, sb), this
      }
      setInt3(bb, cb, sb, kb) {
        return this._pipelineContext.setInt3(bb, cb, sb, kb), this
      }
      setInt4(bb, cb, sb, kb, Wb) {
        return this._pipelineContext.setInt4(bb, cb, sb, kb, Wb), this
      }
      setIntArray(bb, cb) {
        return this._pipelineContext.setIntArray(bb, cb), this
      }
      setIntArray2(bb, cb) {
        return this._pipelineContext.setIntArray2(bb, cb), this
      }
      setIntArray3(bb, cb) {
        return this._pipelineContext.setIntArray3(bb, cb), this
      }
      setIntArray4(bb, cb) {
        return this._pipelineContext.setIntArray4(bb, cb), this
      }
      setUInt(bb, cb) {
        return this._pipelineContext.setUInt(bb, cb), this
      }
      setUInt2(bb, cb, sb) {
        return this._pipelineContext.setUInt2(bb, cb, sb), this
      }
      setUInt3(bb, cb, sb, kb) {
        return this._pipelineContext.setUInt3(bb, cb, sb, kb), this
      }
      setUInt4(bb, cb, sb, kb, Wb) {
        return this._pipelineContext.setUInt4(bb, cb, sb, kb, Wb), this
      }
      setUIntArray(bb, cb) {
        return this._pipelineContext.setUIntArray(bb, cb), this
      }
      setUIntArray2(bb, cb) {
        return this._pipelineContext.setUIntArray2(bb, cb), this
      }
      setUIntArray3(bb, cb) {
        return this._pipelineContext.setUIntArray3(bb, cb), this
      }
      setUIntArray4(bb, cb) {
        return this._pipelineContext.setUIntArray4(bb, cb), this
      }
      setFloatArray(bb, cb) {
        return this._pipelineContext.setArray(bb, cb), this
      }
      setFloatArray2(bb, cb) {
        return this._pipelineContext.setArray2(bb, cb), this
      }
      setFloatArray3(bb, cb) {
        return this._pipelineContext.setArray3(bb, cb), this
      }
      setFloatArray4(bb, cb) {
        return this._pipelineContext.setArray4(bb, cb), this
      }
      setArray(bb, cb) {
        return this._pipelineContext.setArray(bb, cb), this
      }
      setArray2(bb, cb) {
        return this._pipelineContext.setArray2(bb, cb), this
      }
      setArray3(bb, cb) {
        return this._pipelineContext.setArray3(bb, cb), this
      }
      setArray4(bb, cb) {
        return this._pipelineContext.setArray4(bb, cb), this
      }
      setMatrices(bb, cb) {
        return this._pipelineContext.setMatrices(bb, cb), this
      }
      setMatrix(bb, cb) {
        return this._pipelineContext.setMatrix(bb, cb), this
      }
      setMatrix3x3(bb, cb) {
        return this._pipelineContext.setMatrix3x3(bb, cb), this
      }
      setMatrix2x2(bb, cb) {
        return this._pipelineContext.setMatrix2x2(bb, cb), this
      }
      setFloat(bb, cb) {
        return this._pipelineContext.setFloat(bb, cb), this
      }
      setBool(bb, cb) {
        return this._pipelineContext.setInt(bb, cb ? 1 : 0), this
      }
      setVector2(bb, cb) {
        return this._pipelineContext.setVector2(bb, cb), this
      }
      setFloat2(bb, cb, sb) {
        return this._pipelineContext.setFloat2(bb, cb, sb), this
      }
      setVector3(bb, cb) {
        return this._pipelineContext.setVector3(bb, cb), this
      }
      setFloat3(bb, cb, sb, kb) {
        return this._pipelineContext.setFloat3(bb, cb, sb, kb), this
      }
      setVector4(bb, cb) {
        return this._pipelineContext.setVector4(bb, cb), this
      }
      setQuaternion(bb, cb) {
        return this._pipelineContext.setQuaternion(bb, cb), this
      }
      setFloat4(bb, cb, sb, kb, Wb) {
        return this._pipelineContext.setFloat4(bb, cb, sb, kb, Wb), this
      }
      setColor3(bb, cb) {
        return this._pipelineContext.setColor3(bb, cb), this
      }
      setColor4(bb, cb, sb) {
        return this._pipelineContext.setColor4(bb, cb, sb), this
      }
      setDirectColor4(bb, cb) {
        return this._pipelineContext.setDirectColor4(bb, cb), this
      }
      clearCodeCache() {
        this._vertexSourceCode = "", this._fragmentSourceCode = "", this._fragmentSourceCodeBeforeMigration = "", this._vertexSourceCodeBeforeMigration = ""
      }
      dispose() {
        if (arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) this._refCount = 0;
        else {
          if (Ib.PersistentMode) return;
          this._refCount--
        }
        this._refCount > 0 || this._isDisposed || (this._onReleaseEffectsObserver && (this._engine.onReleaseEffectsObservable.remove(this._onReleaseEffectsObserver), this._onReleaseEffectsObserver = null), this._pipelineContext && (0, Tb.m)(this._pipelineContext), this._engine._releaseEffect(this), this.clearCodeCache(), this._isDisposed = !0)
      }
      static RegisterShader(bb, cb, sb) {
        let kb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        cb && (ab.d.GetShadersStore(kb)[`${bb}PixelShader`] = cb), sb && (ab.d.GetShadersStore(kb)[`${bb}VertexShader`] = sb)
      }
      static ResetCache() {
        Ib._BaseCache = {}
      }
    }
    Ib.LogShaderCodeOnCompilationError = !0, Ib.PersistentMode = !1, Ib.AutomaticallyClearCodeCache = !1, Ib._UniqueIdSeed = 0, Ib._BaseCache = {}, Ib.ShadersStore = ab.d.ShadersStore, Ib.IncludesShadersStore = ab.d.IncludesShadersStore
  },
  39586: (bb, cb, sb) => {
    sb.d(cb, {
      b: () => fb,
      d: () => Yb,
      h: () => ub
    });
    var kb = sb(39258),
      Wb = sb(36656),
      ab = sb(36693),
      Tb = sb(39563);
    const Ub = new Wb.e,
      Ib = new Wb.e,
      Hb = new Wb.e,
      fb = {
        EY: () => {},
        eyeAtCamera: !0
      };

    function Mb(bb, cb, sb) {
      const kb = sb.Osb(),
        Wb = cb.Osb();
      for (let ab = 0; ab < 16; ab++) kb[ab] = Wb[ab];
      return kb[12] -= bb.x, kb[13] -= bb.y, kb[14] -= bb.z, sb.markAsUpdated(), sb
    }

    function Xb(bb, cb, sb) {
      return (0, ab.h)(cb, Ib), Mb(bb, Ib, Hb), (0, ab.h)(Hb, sb), sb
    }

    function nb(bb, cb, sb) {
      if (!fb.eyeAtCamera) return Xb(bb, cb, sb);
      const kb = sb.Osb(),
        Wb = cb.Osb();
      for (let ab = 0; ab < 16; ab++) kb[ab] = Wb[ab];
      return kb[12] = 0, kb[13] = 0, kb[14] = 0, sb.markAsUpdated(), sb
    }

    function mb(bb, cb, sb, kb) {
      return (0, ab.n)(nb(bb, cb, kb), sb, kb), kb
    }

    function lb(bb, cb, sb, kb) {
      return (0, ab.h)(sb, Ib), (0, ab.n)(cb, Ib, Hb), Mb(bb, Hb, Ib), nb(bb, sb, Hb), (0, ab.n)(Ib, Hb, kb), kb
    }

    function Qb(bb, cb, sb, kb, Wb, Tb) {
      return (0, ab.h)(sb, Ib), (0, ab.n)(cb, Ib, Hb), Mb(bb, Hb, Ib), mb(bb, kb, Wb, Hb), (0, ab.n)(Ib, Hb, Tb), Tb
    }

    function eb(bb, cb) {
      const sb = fb.EY();
      if (!sb || Ub === cb) return cb;
      Ub.updateFlag = cb.updateFlag;
      const kb = sb.floatingOriginOffset;
      switch (bb) {
        case "world":
          return Mb(kb, cb, Ub);
        case "view":
          return nb(kb, cb, Ub);
        case "worldView":
          return lb(kb, cb, sb.getViewMatrix(), Ub);
        case "viewProjection":
          return mb(kb, sb.getViewMatrix(), sb.getProjectionMatrix(), Ub);
        case "worldViewProjection":
          return Qb(kb, cb, sb.getTransformMatrix(), sb.getViewMatrix(), sb.getProjectionMatrix(), Ub);
        default:
          if (bb.startsWith("u_")) {
            const Wb = bb.toLowerCase();
            if (Wb.startsWith("u_worldviewprojection")) return Qb(kb, cb, sb.getTransformMatrix(), sb.getViewMatrix(), sb.getProjectionMatrix(), Ub);
            if (Wb.startsWith("u_viewprojection")) return mb(kb, sb.getViewMatrix(), sb.getProjectionMatrix(), Ub);
            if (Wb.startsWith("u_worldview")) return lb(kb, cb, sb.getViewMatrix(), Ub);
            if (Wb.startsWith("u_world")) return Mb(kb, cb, Ub);
            if (Wb.startsWith("u_view")) return nb(kb, cb, Ub)
          }
          return cb
      }
    }
    const Cb = Tb.d,
      Nb = kb.c,
      Vb = Cb.prototype._updateMatrixForUniform,
      Lb = kb.c.prototype.setMatrix;

    function ub() {
      kb.c.prototype.setMatrix = Lb, Nb._setMatrixOverride = void 0, Cb.prototype._updateMatrixForUniform = Vb, Cb.prototype._updateMatrixForUniformOverride = void 0
    }

    function Yb() {
      Nb.prototype._setMatrixOverride = Lb, Nb.prototype.setMatrix = function(bb, cb) {
        return this._setMatrixOverride(bb, eb(bb, cb)), this
      }, Cb.prototype._updateMatrixForUniformOverride = Vb, Cb.prototype._updateMatrixForUniform = function(bb, cb) {
        this._updateMatrixForUniformOverride(bb, eb(bb, cb))
      }
    }
  },
  39557: (bb, cb, sb) => {
    sb.d(cb, {
      e: () => ab,
      f: () => Wb
    });
    var kb = sb(39550);

    function Wb(bb, cb) {
      cb.WHITEBALANCE && bb.push("whiteBalanceMatrix"), cb.EXPOSURE && bb.push("exposureLinear"), cb.CONTRAST && bb.push("contrast"), cb.COLORGRADING && bb.push("colorTransformSettings"), (cb.VIGNETTE || cb.DITHER) && bb.push("vInverseScreenSize"), cb.VIGNETTE && (bb.push("vignetteSettings1"), bb.push("vignetteSettings2")), cb.COLORCURVES && (0, kb.c)(bb), cb.DITHER && bb.push("ditherIntensity")
    }

    function ab(bb, cb) {
      cb.COLORGRADING && bb.push("txColorTransform")
    }
  },
  39544: (bb, cb, sb) => {
    sb.d(cb, {
      d: () => tb,
      h: () => Db
    });
    var kb = sb(39414),
      Wb = sb(39418),
      ab = sb(36683),
      Tb = sb(36830),
      Ub = sb(36688),
      Ib = sb(36656);
    const Hb = [
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
      fb = 1e6 / Hb[Hb.length - 1][0],
      Mb = 150;

    function Xb(bb, cb) {
      const sb = Number.isNaN(bb) ? fb : Math.max(bb, fb),
        kb = (0, Ub.Clamp)(1e6 / sb, Hb[0][0], Hb[Hb.length - 1][0]);
      let Wb = 0,
        ab = Hb.length - 1;
      for (; ab - Wb > 1;) {
        const bb = Wb + ab >> 1;
        Hb[bb][0] <= kb ? Wb = bb : ab = bb
      }
      const Tb = Wb,
        [Xb, nb, mb, lb] = Hb[Tb],
        [Qb, eb, Cb, Nb] = Hb[Tb + 1],
        Vb = (kb - Xb) / (Qb - Xb),
        Lb = Ib.n.Lerp(new Ib.n(nb, mb), new Ib.n(eb, Cb), Vb),
        ub = Ib.n.Normalize(new Ib.n(1, lb)),
        Yb = Ib.n.Normalize(new Ib.n(1, Nb)),
        hb = Ib.n.Normalize(Ib.n.Lerp(ub, Yb, Vb)),
        Jb = (0, Ub.Clamp)(cb, -150, Mb);
      Lb.Wkb(hb.scale(Jb / 3e3));
      const gb = 2 * Lb.x - 8 * Lb.y + 4,
        Bb = 3 * Lb.x / gb,
        tb = 2 * Lb.y / gb;
      return new Ib.p(Bb / tb, 1, (1 - Bb - tb) / tb)
    }
    const nb = Ib.e.FromArray([.8951, -.7502, .0389, 0, .2664, 1.7135, -.0685, 0, -.1614, .0367, 1.0296, 0, 0, 0, 0, 1]),
      mb = Ib.e.Invert(nb);

    function lb(bb, cb) {
      const sb = cb > 0 ? bb / cb : 10;
      return (0, Ub.Clamp)(sb, .1, 10)
    }

    function Qb(bb, cb) {
      const sb = Ib.p.TransformNormal(bb, nb),
        kb = Ib.p.TransformNormal(cb, nb),
        Wb = Ib.e.FromArray([lb(kb.x, sb.x), 0, 0, 0, 0, lb(kb.y, sb.y), 0, 0, 0, 0, lb(kb.z, sb.z), 0, 0, 0, 0, 1]);
      return nb.multiply(Wb).multiply(mb)
    }
    const eb = new Ib.p(.95047, 1, 1.08883),
      Cb = Ib.e.FromArray([.4124564, .2126729, .0193339, 0, .3575761, .7151522, .119192, 0, .1804375, .072175, .9503041, 0, 0, 0, 0, 1]).multiply(Qb(eb, Xb(6500, 0))),
      Nb = Ib.e.Invert(Cb),
      Vb = Ib.p.TransformNormal(new Ib.p(1, 1, 1), Cb);
    var Lb = sb(39441),
      ub = sb(39550);
    let Yb = (() => {
      var bb;
      let cb, sb, ab, Ub, Ib, Hb, fb, Mb, Xb, nb, mb, lb, Qb = [],
        eb = [],
        Cb = [],
        Nb = [],
        Vb = [],
        Yb = [],
        hb = [],
        Jb = [],
        gb = [],
        Bb = [],
        tb = [],
        yb = [],
        Pb = [],
        Db = [],
        Eb = [],
        ib = [],
        Ob = [],
        Gb = [],
        Kb = [],
        Zb = [],
        zb = [],
        qb = [],
        db = [],
        Ab = [];
      return bb = class {
        constructor() {
          this._dirty = !0, this._tempColor = new Tb.g(0, 0, 0, 0), this._globalCurve = new Tb.g(0, 0, 0, 0), this._highlightsCurve = new Tb.g(0, 0, 0, 0), this._midtonesCurve = new Tb.g(0, 0, 0, 0), this._shadowsCurve = new Tb.g(0, 0, 0, 0), this._positiveCurve = new Tb.g(0, 0, 0, 0), this._negativeCurve = new Tb.g(0, 0, 0, 0), this._globalHue = (0, kb.m)(this, Qb, 30), this._globalDensity = ((0, kb.m)(this, eb), (0, kb.m)(this, Cb, 0)), this._globalSaturation = ((0, kb.m)(this, Nb), (0, kb.m)(this, Vb, 0)), this._globalExposure = ((0, kb.m)(this, Yb), (0, kb.m)(this, hb, 0)), this._highlightsHue = ((0, kb.m)(this, Jb), (0, kb.m)(this, gb, 30)), this._highlightsDensity = ((0, kb.m)(this, Bb), (0, kb.m)(this, tb, 0)), this._highlightsSaturation = ((0, kb.m)(this, yb), (0, kb.m)(this, Pb, 0)), this._highlightsExposure = ((0, kb.m)(this, Db), (0, kb.m)(this, Eb, 0)), this._midtonesHue = ((0, kb.m)(this, ib), (0, kb.m)(this, Ob, 30)), this._midtonesDensity = ((0, kb.m)(this, Gb), (0, kb.m)(this, Kb, 0)), this._midtonesSaturation = ((0, kb.m)(this, Zb), (0, kb.m)(this, zb, 0)), this._midtonesExposure = ((0, kb.m)(this, qb), (0, kb.m)(this, db, 0)), this._shadowsHue = ((0, kb.m)(this, Ab), 30), this._shadowsDensity = 0, this._shadowsSaturation = 0, this._shadowsExposure = 0
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
        _getColorGradingDataToRef(cb, sb, kb, Wb, ab) {
          null != cb && (cb = bb._Clamp(cb, 0, 360), sb = bb._Clamp(sb, -100, 100), kb = bb._Clamp(kb, -100, 100), Wb = bb._Clamp(Wb, -100, 100), sb = bb._ApplyColorGradingSliderNonlinear(sb), sb *= .5, Wb = bb._ApplyColorGradingSliderNonlinear(Wb), sb < 0 && (sb *= -1, cb = (cb + 180) % 360), bb._FromHSBToRef(cb, sb, 50 + .25 * Wb, ab), ab.scaleToRef(2, ab), ab.a = 1 + .01 * kb)
        }
        static _ApplyColorGradingSliderNonlinear(bb) {
          bb /= 100;
          let cb = Math.abs(bb);
          return cb = Math.pow(cb, 2), bb < 0 && (cb *= -1), cb *= 100, cb
        }
        static _FromHSBToRef(cb, sb, kb, Wb) {
          let ab = bb._Clamp(cb, 0, 360);
          const Tb = bb._Clamp(sb / 100, 0, 1),
            Ub = bb._Clamp(kb / 100, 0, 1);
          if (0 === Tb) Wb.r = Ub, Wb.g = Ub, Wb.b = Ub;
          else {
            ab /= 60;
            const bb = Math.floor(ab),
              cb = ab - bb,
              sb = Ub * (1 - Tb),
              kb = Ub * (1 - Tb * cb),
              Ib = Ub * (1 - Tb * (1 - cb));
            switch (bb) {
              case 0:
                Wb.r = Ub, Wb.g = Ib, Wb.b = sb;
                break;
              case 1:
                Wb.r = kb, Wb.g = Ub, Wb.b = sb;
                break;
              case 2:
                Wb.r = sb, Wb.g = Ub, Wb.b = Ib;
                break;
              case 3:
                Wb.r = sb, Wb.g = kb, Wb.b = Ub;
                break;
              case 4:
                Wb.r = Ib, Wb.g = sb, Wb.b = Ub;
                break;
              default:
                Wb.r = Ub, Wb.g = sb, Wb.b = kb
            }
          }
          Wb.a = 1
        }
        static _Clamp(bb, cb, sb) {
          return Math.min(Math.max(bb, cb), sb)
        }
        clone() {
          return Lb.d.Clone((() => new bb), this)
        }
        serialize() {
          return Lb.d.Serialize(this)
        }
        _bind(bb) {
          let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "vCameraColorCurvePositive",
            sb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "vCameraColorCurveNeutral",
            kb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "vCameraColorCurveNegative";
          this._dirty && (this._dirty = !1, this._getColorGradingDataToRef(this._globalHue, this._globalDensity, this._globalSaturation, this._globalExposure, this._globalCurve), this._getColorGradingDataToRef(this._highlightsHue, this._highlightsDensity, this._highlightsSaturation, this._highlightsExposure, this._tempColor), this._tempColor.multiplyToRef(this._globalCurve, this._highlightsCurve), this._getColorGradingDataToRef(this._midtonesHue, this._midtonesDensity, this._midtonesSaturation, this._midtonesExposure, this._tempColor), this._tempColor.multiplyToRef(this._globalCurve, this._midtonesCurve), this._getColorGradingDataToRef(this._shadowsHue, this._shadowsDensity, this._shadowsSaturation, this._shadowsExposure, this._tempColor), this._tempColor.multiplyToRef(this._globalCurve, this._shadowsCurve), this._highlightsCurve.subtractToRef(this._midtonesCurve, this._positiveCurve), this._midtonesCurve.subtractToRef(this._shadowsCurve, this._negativeCurve)), bb && (bb.setFloat4(cb, this._positiveCurve.r, this._positiveCurve.g, this._positiveCurve.b, this._positiveCurve.a), bb.setFloat4(sb, this._midtonesCurve.r, this._midtonesCurve.g, this._midtonesCurve.b, this._midtonesCurve.a), bb.setFloat4(kb, this._negativeCurve.r, this._negativeCurve.g, this._negativeCurve.b, this._negativeCurve.a))
        }
      }, (() => {
        const Tb = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        cb = [(0, Wb.E)()], sb = [(0, Wb.E)()], ab = [(0, Wb.E)()], Ub = [(0, Wb.E)()], Ib = [(0, Wb.E)()], Hb = [(0, Wb.E)()], fb = [(0, Wb.E)()], Mb = [(0, Wb.E)()], Xb = [(0, Wb.E)()], nb = [(0, Wb.E)()], mb = [(0, Wb.E)()], lb = [(0, Wb.E)()], (0, kb.j)(null, null, cb, {
          kind: "field",
          name: "_globalHue",
          static: !1,
          private: !1,
          access: {
            has: bb => "_globalHue" in bb,
            get: bb => bb._globalHue,
            set: (bb, cb) => {
              bb._globalHue = cb
            }
          },
          metadata: Tb
        }, Qb, eb), (0, kb.j)(null, null, sb, {
          kind: "field",
          name: "_globalDensity",
          static: !1,
          private: !1,
          access: {
            has: bb => "_globalDensity" in bb,
            get: bb => bb._globalDensity,
            set: (bb, cb) => {
              bb._globalDensity = cb
            }
          },
          metadata: Tb
        }, Cb, Nb), (0, kb.j)(null, null, ab, {
          kind: "field",
          name: "_globalSaturation",
          static: !1,
          private: !1,
          access: {
            has: bb => "_globalSaturation" in bb,
            get: bb => bb._globalSaturation,
            set: (bb, cb) => {
              bb._globalSaturation = cb
            }
          },
          metadata: Tb
        }, Vb, Yb), (0, kb.j)(null, null, Ub, {
          kind: "field",
          name: "_globalExposure",
          static: !1,
          private: !1,
          access: {
            has: bb => "_globalExposure" in bb,
            get: bb => bb._globalExposure,
            set: (bb, cb) => {
              bb._globalExposure = cb
            }
          },
          metadata: Tb
        }, hb, Jb), (0, kb.j)(null, null, Ib, {
          kind: "field",
          name: "_highlightsHue",
          static: !1,
          private: !1,
          access: {
            has: bb => "_highlightsHue" in bb,
            get: bb => bb._highlightsHue,
            set: (bb, cb) => {
              bb._highlightsHue = cb
            }
          },
          metadata: Tb
        }, gb, Bb), (0, kb.j)(null, null, Hb, {
          kind: "field",
          name: "_highlightsDensity",
          static: !1,
          private: !1,
          access: {
            has: bb => "_highlightsDensity" in bb,
            get: bb => bb._highlightsDensity,
            set: (bb, cb) => {
              bb._highlightsDensity = cb
            }
          },
          metadata: Tb
        }, tb, yb), (0, kb.j)(null, null, fb, {
          kind: "field",
          name: "_highlightsSaturation",
          static: !1,
          private: !1,
          access: {
            has: bb => "_highlightsSaturation" in bb,
            get: bb => bb._highlightsSaturation,
            set: (bb, cb) => {
              bb._highlightsSaturation = cb
            }
          },
          metadata: Tb
        }, Pb, Db), (0, kb.j)(null, null, Mb, {
          kind: "field",
          name: "_highlightsExposure",
          static: !1,
          private: !1,
          access: {
            has: bb => "_highlightsExposure" in bb,
            get: bb => bb._highlightsExposure,
            set: (bb, cb) => {
              bb._highlightsExposure = cb
            }
          },
          metadata: Tb
        }, Eb, ib), (0, kb.j)(null, null, Xb, {
          kind: "field",
          name: "_midtonesHue",
          static: !1,
          private: !1,
          access: {
            has: bb => "_midtonesHue" in bb,
            get: bb => bb._midtonesHue,
            set: (bb, cb) => {
              bb._midtonesHue = cb
            }
          },
          metadata: Tb
        }, Ob, Gb), (0, kb.j)(null, null, nb, {
          kind: "field",
          name: "_midtonesDensity",
          static: !1,
          private: !1,
          access: {
            has: bb => "_midtonesDensity" in bb,
            get: bb => bb._midtonesDensity,
            set: (bb, cb) => {
              bb._midtonesDensity = cb
            }
          },
          metadata: Tb
        }, Kb, Zb), (0, kb.j)(null, null, mb, {
          kind: "field",
          name: "_midtonesSaturation",
          static: !1,
          private: !1,
          access: {
            has: bb => "_midtonesSaturation" in bb,
            get: bb => bb._midtonesSaturation,
            set: (bb, cb) => {
              bb._midtonesSaturation = cb
            }
          },
          metadata: Tb
        }, zb, qb), (0, kb.j)(null, null, lb, {
          kind: "field",
          name: "_midtonesExposure",
          static: !1,
          private: !1,
          access: {
            has: bb => "_midtonesExposure" in bb,
            get: bb => bb._midtonesExposure,
            set: (bb, cb) => {
              bb._midtonesExposure = cb
            }
          },
          metadata: Tb
        }, db, Ab), Tb && Object.defineProperty(bb, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Tb
        })
      })(), bb.PrepareUniforms = ub.c, bb
    })();

    function hb(bb, cb) {
      let sb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "vCameraColorCurvePositive",
        kb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "vCameraColorCurveNeutral",
        Wb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "vCameraColorCurveNegative";
      bb._bind(cb, sb, kb, Wb)
    }
    var Jb = sb(39337),
      gb = sb(39557),
      Bb = sb(36698);
    let tb = (() => {
        var bb;
        let cb, sb, Hb, nb, mb, lb, eb, ub, Bb, tb, yb, Pb, Db, Eb, ib, Ob, Gb, Kb, Zb, zb, qb, db, Ab, wb, rb, ob, Sb, Rb, vb = [],
          Fb = [],
          xb = [],
          jb = [],
          pb = [],
          bc = [],
          cc = [],
          sc = [],
          kc = [],
          Wc = [],
          ac = [],
          Tc = [],
          Uc = [],
          Ic = [],
          Hc = [],
          fc = [],
          Mc = [],
          Xc = [],
          nc = [],
          mc = [],
          lc = [],
          Qc = [],
          ec = [],
          Cc = [],
          Nc = [],
          Vc = [],
          Lc = [],
          uc = [],
          Yc = [],
          hc = [],
          Jc = [],
          gc = [],
          Bc = [],
          tc = [],
          yc = [],
          Pc = [],
          Dc = [],
          Ec = [],
          ic = [],
          Oc = [],
          Gc = [],
          Kc = [],
          Zc = [],
          zc = [],
          qc = [],
          dc = [],
          Ac = [],
          wc = [],
          rc = [],
          oc = [],
          Sc = [],
          Rc = [],
          vc = [],
          Fc = [],
          xc = [],
          jc = [];
        return bb = class {
          constructor() {
            this.colorCurves = (0, kb.m)(this, vb, new Yb), this._colorCurvesEnabled = ((0, kb.m)(this, Fb), (0, kb.m)(this, xb, !1)), this._colorGradingTexture = ((0, kb.m)(this, jb), (0, kb.m)(this, pb, void 0)), this._colorGradingEnabled = ((0, kb.m)(this, bc), (0, kb.m)(this, cc, !1)), this._colorGradingWithGreenDepth = ((0, kb.m)(this, sc), (0, kb.m)(this, kc, !0)), this._colorGradingBGR = ((0, kb.m)(this, Wc), (0, kb.m)(this, ac, !0)), this._exposure = ((0, kb.m)(this, Tc), (0, kb.m)(this, Uc, 1)), this._toneMappingEnabled = ((0, kb.m)(this, Ic), (0, kb.m)(this, Hc, !1)), this._toneMappingType = ((0, kb.m)(this, fc), (0, kb.m)(this, Mc, bb.TONEMAPPING_STANDARD)), this._contrast = ((0, kb.m)(this, Xc), (0, kb.m)(this, nc, 1)), this._whiteBalanceEnabled = ((0, kb.m)(this, mc), (0, kb.m)(this, lc, !1)), this._temperature = ((0, kb.m)(this, Qc), (0, kb.m)(this, ec, 6500)), this._tint = ((0, kb.m)(this, Cc), (0, kb.m)(this, Nc, 0)), this._whiteBalanceMatrix = ((0, kb.m)(this, Vc), null), this._whiteBalanceMatrixTemperature = null, this._whiteBalanceMatrixTint = null, this.vignetteStretch = (0, kb.m)(this, Lc, 0), this.vignetteCenterX = ((0, kb.m)(this, uc), (0, kb.m)(this, Yc, 0)), this.vignetteCenterY = ((0, kb.m)(this, hc), (0, kb.m)(this, Jc, 0)), this.vignetteWeight = ((0, kb.m)(this, gc), (0, kb.m)(this, Bc, 1.5)), this.vignetteColor = ((0, kb.m)(this, tc), (0, kb.m)(this, yc, new Tb.g(0, 0, 0, 0))), this.vignetteCameraFov = ((0, kb.m)(this, Pc), (0, kb.m)(this, Dc, .5)), this._vignetteBlendMode = ((0, kb.m)(this, Ec), (0, kb.m)(this, ic, bb.VIGNETTEMODE_MULTIPLY)), this._vignetteEnabled = ((0, kb.m)(this, Oc), (0, kb.m)(this, Gc, !1)), this._ditheringEnabled = ((0, kb.m)(this, Kc), (0, kb.m)(this, Zc, !1)), this._ditheringIntensity = ((0, kb.m)(this, zc), (0, kb.m)(this, qc, 1 / 255)), this._skipFinalColorClamp = ((0, kb.m)(this, dc), (0, kb.m)(this, Ac, !1)), this._applyByPostProcess = ((0, kb.m)(this, wc), (0, kb.m)(this, rc, !1)), this._isEnabled = ((0, kb.m)(this, oc), (0, kb.m)(this, Sc, !0)), this.outputTextureWidth = ((0, kb.m)(this, Rc), (0, kb.m)(this, vc, 0)), this.outputTextureHeight = ((0, kb.m)(this, Fc), (0, kb.m)(this, xc, 0)), this.onUpdateParameters = ((0, kb.m)(this, jc), new ab.c)
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
            bb = Number.isNaN(bb) ? fb : Math.max(bb, fb), this._temperature !== bb && (this._temperature = bb, this._updateParameters())
          }
          get tint() {
            return this._tint
          }
          set tint(bb) {
            bb = (0, Ub.Clamp)(bb, -150, Mb), this._tint !== bb && (this._tint = bb, this._updateParameters())
          }
          _getWhiteBalanceMatrix() {
            return null !== this._whiteBalanceMatrix && this._whiteBalanceMatrixTemperature === this._temperature && this._whiteBalanceMatrixTint === this._tint || (this._whiteBalanceMatrixTemperature = this._temperature, this._whiteBalanceMatrixTint = this._tint, this._whiteBalanceMatrix = function(bb, cb) {
              const sb = Qb(Xb(bb, cb), Vb),
                kb = Cb.multiply(sb).multiply(Nb);
              return Ib.e.GetAsMatrix3x3(kb)
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
          prepareDefines(cb) {
            if ((arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) !== this.applyByPostProcess || !this._isEnabled) return cb.WHITEBALANCE = !1, cb.VIGNETTE = !1, cb.TONEMAPPING = 0, cb.CONTRAST = !1, cb.EXPOSURE = !1, cb.COLORCURVES = !1, cb.COLORGRADING = !1, cb.COLORGRADING3D = !1, cb.DITHER = !1, cb.IMAGEPROCESSING = !1, cb.SKIPFINALCOLORCLAMP = this.skipFinalColorClamp, void(cb.IMAGEPROCESSINGPOSTPROCESS = this.applyByPostProcess && this._isEnabled);
            if (cb.WHITEBALANCE = this._whiteBalanceEnabled, cb.VIGNETTE = this.vignetteEnabled, cb.VIGNETTEBLENDMODEMULTIPLY = this.vignetteBlendMode === bb._VIGNETTEMODE_MULTIPLY, cb.VIGNETTEBLENDMODEOPAQUE = !cb.VIGNETTEBLENDMODEMULTIPLY, this._toneMappingEnabled) switch (this._toneMappingType) {
              case bb.TONEMAPPING_KHR_PBR_NEUTRAL:
                cb.TONEMAPPING = 3;
                break;
              case bb.TONEMAPPING_ACES:
                cb.TONEMAPPING = 2;
                break;
              default:
                cb.TONEMAPPING = 1
            } else cb.TONEMAPPING = 0;
            cb.CONTRAST = 1 !== this.contrast, cb.EXPOSURE = 1 !== this.exposure, cb.COLORCURVES = this.colorCurvesEnabled && !!this.colorCurves, cb.COLORGRADING = this.colorGradingEnabled && !!this.colorGradingTexture, cb.COLORGRADING ? cb.COLORGRADING3D = this.colorGradingTexture.is3D : cb.COLORGRADING3D = !1, cb.SAMPLER3DGREENDEPTH = this.colorGradingWithGreenDepth, cb.SAMPLER3DBGRMAP = this.colorGradingBGR, cb.DITHER = this._ditheringEnabled, cb.IMAGEPROCESSINGPOSTPROCESS = this.applyByPostProcess, cb.SKIPFINALCOLORCLAMP = this.skipFinalColorClamp, cb.IMAGEPROCESSING = cb.WHITEBALANCE || cb.VIGNETTE || !!cb.TONEMAPPING || cb.CONTRAST || cb.EXPOSURE || cb.COLORCURVES || cb.COLORGRADING || cb.DITHER
          }
          isReady() {
            return !this.colorGradingEnabled || !this.colorGradingTexture || this.colorGradingTexture.isReady()
          }
          bind(bb, cb) {
            if (this._whiteBalanceEnabled && bb.setMatrix3x3("whiteBalanceMatrix", this._getWhiteBalanceMatrix()), this._colorCurvesEnabled && this.colorCurves && hb(this.colorCurves, bb), this._vignetteEnabled || this._ditheringEnabled) {
              const sb = 1 / (this.outputTextureWidth || bb.Sm().getRenderWidth()),
                kb = 1 / (this.outputTextureHeight || bb.Sm().getRenderHeight());
              if (bb.setFloat2("vInverseScreenSize", sb, kb), this._ditheringEnabled && bb.setFloat("ditherIntensity", .5 * this._ditheringIntensity), this._vignetteEnabled) {
                const Wb = null != cb ? cb : kb / sb;
                let ab = Math.tan(.5 * this.vignetteCameraFov),
                  Tb = ab * Wb;
                const Ub = Math.sqrt(Tb * ab);
                Tb = (0, Jb.l)(Tb, Ub, this.vignetteStretch), ab = (0, Jb.l)(ab, Ub, this.vignetteStretch), bb.setFloat4("vignetteSettings1", Tb, ab, -Tb * this.vignetteCenterX, -ab * this.vignetteCenterY);
                const Ib = -2 * this.vignetteWeight;
                bb.setFloat4("vignetteSettings2", this.vignetteColor.r, this.vignetteColor.g, this.vignetteColor.b, Ib)
              }
            }
            if (bb.setFloat("exposureLinear", this.exposure), bb.setFloat("contrast", this.contrast), this.colorGradingTexture) {
              bb.setTexture("txColorTransform", this.colorGradingTexture);
              const cb = this.colorGradingTexture.getSize().height;
              bb.setFloat4("colorTransformSettings", (cb - 1) / cb, .5 / cb, cb, this.colorGradingTexture.level)
            }
          }
          clone() {
            return Lb.d.Clone((() => new bb), this)
          }
          serialize() {
            return Lb.d.Serialize(this)
          }
          static get VIGNETTEMODE_MULTIPLY() {
            return this._VIGNETTEMODE_MULTIPLY
          }
          static get VIGNETTEMODE_OPAQUE() {
            return this._VIGNETTEMODE_OPAQUE
          }
        }, (() => {
          const ab = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          cb = [(0, Wb.l)()], sb = [(0, Wb.E)()], Hb = [(0, Wb.x)("colorGradingTexture")], nb = [(0, Wb.E)()], mb = [(0, Wb.E)()], lb = [(0, Wb.E)()], eb = [(0, Wb.E)()], ub = [(0, Wb.E)()], Bb = [(0, Wb.E)()], tb = [(0, Wb.E)()], yb = [(0, Wb.E)()], Pb = [(0, Wb.E)()], Db = [(0, Wb.E)()], Eb = [(0, Wb.E)()], ib = [(0, Wb.E)()], Ob = [(0, Wb.E)()], Gb = [(0, Wb.E)()], Kb = [(0, Wb.q)()], Zb = [(0, Wb.E)()], zb = [(0, Wb.E)()], qb = [(0, Wb.E)()], db = [(0, Wb.E)()], Ab = [(0, Wb.E)()], wb = [(0, Wb.E)()], rb = [(0, Wb.E)()], ob = [(0, Wb.E)()], Sb = [(0, Wb.E)()], Rb = [(0, Wb.E)()], (0, kb.j)(null, null, cb, {
            kind: "field",
            name: "colorCurves",
            static: !1,
            private: !1,
            access: {
              has: bb => "colorCurves" in bb,
              get: bb => bb.colorCurves,
              set: (bb, cb) => {
                bb.colorCurves = cb
              }
            },
            metadata: ab
          }, vb, Fb), (0, kb.j)(null, null, sb, {
            kind: "field",
            name: "_colorCurvesEnabled",
            static: !1,
            private: !1,
            access: {
              has: bb => "_colorCurvesEnabled" in bb,
              get: bb => bb._colorCurvesEnabled,
              set: (bb, cb) => {
                bb._colorCurvesEnabled = cb
              }
            },
            metadata: ab
          }, xb, jb), (0, kb.j)(null, null, Hb, {
            kind: "field",
            name: "_colorGradingTexture",
            static: !1,
            private: !1,
            access: {
              has: bb => "_colorGradingTexture" in bb,
              get: bb => bb._colorGradingTexture,
              set: (bb, cb) => {
                bb._colorGradingTexture = cb
              }
            },
            metadata: ab
          }, pb, bc), (0, kb.j)(null, null, nb, {
            kind: "field",
            name: "_colorGradingEnabled",
            static: !1,
            private: !1,
            access: {
              has: bb => "_colorGradingEnabled" in bb,
              get: bb => bb._colorGradingEnabled,
              set: (bb, cb) => {
                bb._colorGradingEnabled = cb
              }
            },
            metadata: ab
          }, cc, sc), (0, kb.j)(null, null, mb, {
            kind: "field",
            name: "_colorGradingWithGreenDepth",
            static: !1,
            private: !1,
            access: {
              has: bb => "_colorGradingWithGreenDepth" in bb,
              get: bb => bb._colorGradingWithGreenDepth,
              set: (bb, cb) => {
                bb._colorGradingWithGreenDepth = cb
              }
            },
            metadata: ab
          }, kc, Wc), (0, kb.j)(null, null, lb, {
            kind: "field",
            name: "_colorGradingBGR",
            static: !1,
            private: !1,
            access: {
              has: bb => "_colorGradingBGR" in bb,
              get: bb => bb._colorGradingBGR,
              set: (bb, cb) => {
                bb._colorGradingBGR = cb
              }
            },
            metadata: ab
          }, ac, Tc), (0, kb.j)(null, null, eb, {
            kind: "field",
            name: "_exposure",
            static: !1,
            private: !1,
            access: {
              has: bb => "_exposure" in bb,
              get: bb => bb._exposure,
              set: (bb, cb) => {
                bb._exposure = cb
              }
            },
            metadata: ab
          }, Uc, Ic), (0, kb.j)(null, null, ub, {
            kind: "field",
            name: "_toneMappingEnabled",
            static: !1,
            private: !1,
            access: {
              has: bb => "_toneMappingEnabled" in bb,
              get: bb => bb._toneMappingEnabled,
              set: (bb, cb) => {
                bb._toneMappingEnabled = cb
              }
            },
            metadata: ab
          }, Hc, fc), (0, kb.j)(null, null, Bb, {
            kind: "field",
            name: "_toneMappingType",
            static: !1,
            private: !1,
            access: {
              has: bb => "_toneMappingType" in bb,
              get: bb => bb._toneMappingType,
              set: (bb, cb) => {
                bb._toneMappingType = cb
              }
            },
            metadata: ab
          }, Mc, Xc), (0, kb.j)(null, null, tb, {
            kind: "field",
            name: "_contrast",
            static: !1,
            private: !1,
            access: {
              has: bb => "_contrast" in bb,
              get: bb => bb._contrast,
              set: (bb, cb) => {
                bb._contrast = cb
              }
            },
            metadata: ab
          }, nc, mc), (0, kb.j)(null, null, yb, {
            kind: "field",
            name: "_whiteBalanceEnabled",
            static: !1,
            private: !1,
            access: {
              has: bb => "_whiteBalanceEnabled" in bb,
              get: bb => bb._whiteBalanceEnabled,
              set: (bb, cb) => {
                bb._whiteBalanceEnabled = cb
              }
            },
            metadata: ab
          }, lc, Qc), (0, kb.j)(null, null, Pb, {
            kind: "field",
            name: "_temperature",
            static: !1,
            private: !1,
            access: {
              has: bb => "_temperature" in bb,
              get: bb => bb._temperature,
              set: (bb, cb) => {
                bb._temperature = cb
              }
            },
            metadata: ab
          }, ec, Cc), (0, kb.j)(null, null, Db, {
            kind: "field",
            name: "_tint",
            static: !1,
            private: !1,
            access: {
              has: bb => "_tint" in bb,
              get: bb => bb._tint,
              set: (bb, cb) => {
                bb._tint = cb
              }
            },
            metadata: ab
          }, Nc, Vc), (0, kb.j)(null, null, Eb, {
            kind: "field",
            name: "vignetteStretch",
            static: !1,
            private: !1,
            access: {
              has: bb => "vignetteStretch" in bb,
              get: bb => bb.vignetteStretch,
              set: (bb, cb) => {
                bb.vignetteStretch = cb
              }
            },
            metadata: ab
          }, Lc, uc), (0, kb.j)(null, null, ib, {
            kind: "field",
            name: "vignetteCenterX",
            static: !1,
            private: !1,
            access: {
              has: bb => "vignetteCenterX" in bb,
              get: bb => bb.vignetteCenterX,
              set: (bb, cb) => {
                bb.vignetteCenterX = cb
              }
            },
            metadata: ab
          }, Yc, hc), (0, kb.j)(null, null, Ob, {
            kind: "field",
            name: "vignetteCenterY",
            static: !1,
            private: !1,
            access: {
              has: bb => "vignetteCenterY" in bb,
              get: bb => bb.vignetteCenterY,
              set: (bb, cb) => {
                bb.vignetteCenterY = cb
              }
            },
            metadata: ab
          }, Jc, gc), (0, kb.j)(null, null, Gb, {
            kind: "field",
            name: "vignetteWeight",
            static: !1,
            private: !1,
            access: {
              has: bb => "vignetteWeight" in bb,
              get: bb => bb.vignetteWeight,
              set: (bb, cb) => {
                bb.vignetteWeight = cb
              }
            },
            metadata: ab
          }, Bc, tc), (0, kb.j)(null, null, Kb, {
            kind: "field",
            name: "vignetteColor",
            static: !1,
            private: !1,
            access: {
              has: bb => "vignetteColor" in bb,
              get: bb => bb.vignetteColor,
              set: (bb, cb) => {
                bb.vignetteColor = cb
              }
            },
            metadata: ab
          }, yc, Pc), (0, kb.j)(null, null, Zb, {
            kind: "field",
            name: "vignetteCameraFov",
            static: !1,
            private: !1,
            access: {
              has: bb => "vignetteCameraFov" in bb,
              get: bb => bb.vignetteCameraFov,
              set: (bb, cb) => {
                bb.vignetteCameraFov = cb
              }
            },
            metadata: ab
          }, Dc, Ec), (0, kb.j)(null, null, zb, {
            kind: "field",
            name: "_vignetteBlendMode",
            static: !1,
            private: !1,
            access: {
              has: bb => "_vignetteBlendMode" in bb,
              get: bb => bb._vignetteBlendMode,
              set: (bb, cb) => {
                bb._vignetteBlendMode = cb
              }
            },
            metadata: ab
          }, ic, Oc), (0, kb.j)(null, null, qb, {
            kind: "field",
            name: "_vignetteEnabled",
            static: !1,
            private: !1,
            access: {
              has: bb => "_vignetteEnabled" in bb,
              get: bb => bb._vignetteEnabled,
              set: (bb, cb) => {
                bb._vignetteEnabled = cb
              }
            },
            metadata: ab
          }, Gc, Kc), (0, kb.j)(null, null, db, {
            kind: "field",
            name: "_ditheringEnabled",
            static: !1,
            private: !1,
            access: {
              has: bb => "_ditheringEnabled" in bb,
              get: bb => bb._ditheringEnabled,
              set: (bb, cb) => {
                bb._ditheringEnabled = cb
              }
            },
            metadata: ab
          }, Zc, zc), (0, kb.j)(null, null, Ab, {
            kind: "field",
            name: "_ditheringIntensity",
            static: !1,
            private: !1,
            access: {
              has: bb => "_ditheringIntensity" in bb,
              get: bb => bb._ditheringIntensity,
              set: (bb, cb) => {
                bb._ditheringIntensity = cb
              }
            },
            metadata: ab
          }, qc, dc), (0, kb.j)(null, null, wb, {
            kind: "field",
            name: "_skipFinalColorClamp",
            static: !1,
            private: !1,
            access: {
              has: bb => "_skipFinalColorClamp" in bb,
              get: bb => bb._skipFinalColorClamp,
              set: (bb, cb) => {
                bb._skipFinalColorClamp = cb
              }
            },
            metadata: ab
          }, Ac, wc), (0, kb.j)(null, null, rb, {
            kind: "field",
            name: "_applyByPostProcess",
            static: !1,
            private: !1,
            access: {
              has: bb => "_applyByPostProcess" in bb,
              get: bb => bb._applyByPostProcess,
              set: (bb, cb) => {
                bb._applyByPostProcess = cb
              }
            },
            metadata: ab
          }, rc, oc), (0, kb.j)(null, null, ob, {
            kind: "field",
            name: "_isEnabled",
            static: !1,
            private: !1,
            access: {
              has: bb => "_isEnabled" in bb,
              get: bb => bb._isEnabled,
              set: (bb, cb) => {
                bb._isEnabled = cb
              }
            },
            metadata: ab
          }, Sc, Rc), (0, kb.j)(null, null, Sb, {
            kind: "field",
            name: "outputTextureWidth",
            static: !1,
            private: !1,
            access: {
              has: bb => "outputTextureWidth" in bb,
              get: bb => bb.outputTextureWidth,
              set: (bb, cb) => {
                bb.outputTextureWidth = cb
              }
            },
            metadata: ab
          }, vc, Fc), (0, kb.j)(null, null, Rb, {
            kind: "field",
            name: "outputTextureHeight",
            static: !1,
            private: !1,
            access: {
              has: bb => "outputTextureHeight" in bb,
              get: bb => bb.outputTextureHeight,
              set: (bb, cb) => {
                bb.outputTextureHeight = cb
              }
            },
            metadata: ab
          }, xc, jc), ab && Object.defineProperty(bb, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: ab
          })
        })(), bb.TONEMAPPING_STANDARD = 0, bb.TONEMAPPING_ACES = 1, bb.TONEMAPPING_KHR_PBR_NEUTRAL = 2, bb.PrepareUniforms = gb.f, bb.PrepareSamplers = gb.e, bb._VIGNETTEMODE_MULTIPLY = 0, bb._VIGNETTEMODE_OPAQUE = 1, bb
      })(),
      yb = !1;

    function Pb(bb) {
      const cb = Lb.d.Parse((() => new tb), bb, null, null);
      return void 0 !== bb.vignetteCentreX && (cb.vignetteCenterX = bb.vignetteCentreX), void 0 !== bb.vignetteCentreY && (cb.vignetteCenterY = bb.vignetteCentreY), cb
    }

    function Db() {
      yb || (yb = !0, tb.Parse = Pb, Lb.d._ImageProcessingConfigurationParser = Pb, (0, Bb.h)("BABYLON.ImageProcessingConfiguration", tb))
    }
  },
  39563: (bb, cb, sb) => {
    sb.d(cb, {
      d: () => ab
    });
    var kb = sb(38284),
      Wb = sb(39531);
    class ab {
      constructor(bb, cb) {
        let sb = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          kb = arguments.length > 3 ? arguments[3] : void 0,
          Wb = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          ab = arguments.length > 5 ? arguments[5] : void 0;
        this._uniformNames = [], this._valueCache = {}, this._engine = bb, this._noUBO = !bb.supportsUniformBuffers || Wb, this._dynamic = sb, this._name = kb ?? "no-name", this._data = cb || [], this._uniformLocations = {}, this._uniformSizes = {}, this._uniformArraySizes = {}, this._uniformLocationPointer = 0, this._needSync = !1, this._dataGeneration = 0, this._trackUBOsInFrame = !1, (void 0 === ab && this._engine._features.trackUbosInFrame || !0 === ab) && (this._buffers = [], this._bufferIndex = -1, this._bufferUpdatedLastFrame = !1, this._createBufferOnWrite = !1, this._currentFrameId = 0, this._trackUBOsInFrame = !0, this._resetOwnerSlots()), this._noUBO ? (this.updateMatrix3x3 = this._updateMatrix3x3ForEffect, this.updateMatrix2x2 = this._updateMatrix2x2ForEffect, this.updateFloat = this._updateFloatForEffect, this.updateFloat2 = this._updateFloat2ForEffect, this.updateFloat3 = this._updateFloat3ForEffect, this.updateFloat4 = this._updateFloat4ForEffect, this.updateFloatArray = this._updateFloatArrayForEffect, this.updateArray = this._updateArrayForEffect, this.updateIntArray = this._updateIntArrayForEffect, this.updateUIntArray = this._updateUIntArrayForEffect, this.O4 = this._updateMatrixForEffect, this.updateMatrices = this._updateMatricesForEffect, this.updateVector3 = this._updateVector3ForEffect, this.updateVector4 = this._updateVector4ForEffect, this.updateColor3 = this._updateColor3ForEffect, this.updateColor4 = this._updateColor4ForEffect, this.updateDirectColor4 = this._updateDirectColor4ForEffect, this.updateInt = this._updateIntForEffect, this.updateInt2 = this._updateInt2ForEffect, this.updateInt3 = this._updateInt3ForEffect, this.updateInt4 = this._updateInt4ForEffect, this.updateUInt = this._updateUIntForEffect, this.updateUInt2 = this._updateUInt2ForEffect, this.updateUInt3 = this._updateUInt3ForEffect, this.updateUInt4 = this._updateUInt4ForEffect) : (this._engine._uniformBuffers.push(this), this.updateMatrix3x3 = this._updateMatrix3x3ForUniform, this.updateMatrix2x2 = this._updateMatrix2x2ForUniform, this.updateFloat = this._updateFloatForUniform, this.updateFloat2 = this._updateFloat2ForUniform, this.updateFloat3 = this._updateFloat3ForUniform, this.updateFloat4 = this._updateFloat4ForUniform, this.updateFloatArray = this._updateFloatArrayForUniform, this.updateArray = this._updateArrayForUniform, this.updateIntArray = this._updateIntArrayForUniform, this.updateUIntArray = this._updateUIntArrayForUniform, this.O4 = this._updateMatrixForUniform, this.updateMatrices = this._updateMatricesForUniform, this.updateVector3 = this._updateVector3ForUniform, this.updateVector4 = this._updateVector4ForUniform, this.updateColor3 = this._updateColor3ForUniform, this.updateColor4 = this._updateColor4ForUniform, this.updateDirectColor4 = this._updateDirectColor4ForUniform, this.updateInt = this._updateIntForUniform, this.updateInt2 = this._updateInt2ForUniform, this.updateInt3 = this._updateInt3ForUniform, this.updateInt4 = this._updateInt4ForUniform, this.updateUInt = this._updateUIntForUniform, this.updateUInt2 = this._updateUInt2ForUniform, this.updateUInt3 = this._updateUInt3ForUniform, this.updateUInt4 = this._updateUInt4ForUniform)
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
        let cb;
        if (cb = bb <= 2 ? bb : 4, this._uniformLocationPointer % cb !== 0) {
          const bb = this._uniformLocationPointer;
          this._uniformLocationPointer += cb - this._uniformLocationPointer % cb;
          const sb = this._uniformLocationPointer - bb;
          for (let cb = 0; cb < sb; cb++) this._data.push(0)
        }
      }
      addUniform(bb, cb) {
        let sb, kb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (kb > 0 && "number" === typeof cb && (this._uniformArraySizes[bb] = {
            strideSize: cb,
            arraySize: kb
          }), void 0 === this._uniformLocations[bb] && (this._uniformNames.push(bb), !this._noUBO)) {
          if (kb > 0) {
            if (cb instanceof Array) throw "addUniform should not be use with Array in UBO: " + bb;
            if (this._fillAlignment(4), 16 == cb) cb *= kb;
            else {
              cb = cb * kb + (4 - cb) * kb
            }
            sb = [];
            for (let bb = 0; bb < cb; bb++) sb.push(0)
          } else {
            if (cb instanceof Array) sb = cb, cb = sb.length;
            else {
              sb = [];
              for (let bb = 0; bb < cb; bb++) sb.push(0)
            }
            this._fillAlignment(cb)
          }
          this._uniformSizes[bb] = cb, this._uniformLocations[bb] = this._uniformLocationPointer, this._uniformLocationPointer += cb;
          for (let bb = 0; bb < cb; bb++) this._data.push(sb[bb]);
          this._needSync = !0
        }
      }
      addMatrix(bb, cb) {
        this.addUniform(bb, Array.prototype.slice.call(cb.Osb()))
      }
      addFloat2(bb, cb, sb) {
        const kb = [cb, sb];
        this.addUniform(bb, kb)
      }
      addFloat3(bb, cb, sb, kb) {
        const Wb = [cb, sb, kb];
        this.addUniform(bb, Wb)
      }
      addColor3(bb, cb) {
        const sb = [cb.r, cb.g, cb.b];
        this.addUniform(bb, sb)
      }
      addColor4(bb, cb, sb) {
        const kb = [cb.r, cb.g, cb.b, sb];
        this.addUniform(bb, kb)
      }
      addVector3(bb, cb) {
        const sb = [cb.x, cb.y, cb.z];
        this.addUniform(bb, sb)
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
        let cb = 0;
        for (const sb in this._uniformLocations)
          if (bb.push(sb), 10 === ++cb) break;
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
      _buffersEqual(bb, cb) {
        for (let sb = 0; sb < bb.length; ++sb)
          if (bb[sb] !== cb[sb]) return !1;
        return !0
      }
      _copyBuffer(bb, cb) {
        for (let sb = 0; sb < bb.length; ++sb) cb[sb] = bb[sb]
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
        let cb = this._slotByOwner.get(bb);
        if (void 0 === cb && (cb = 0 === this._ownerCount && 1 === this._buffers.length && 0 === this._freeSlots.length ? 0 : this._takeFreeSlot(!0), this._slotByOwner.set(bb, cb), this._ownerCount++, bb._uniformBuffersWithOwnedSlot || (bb._uniformBuffersWithOwnedSlot = []), bb._uniformBuffersWithOwnedSlot.push(this), this._ownerListsBySlot.set(cb, bb._uniformBuffersWithOwnedSlot)), this._slotGeneration[cb] === this._dataGeneration) return this._bufferIndex = cb, this._buffer = this._buffers[cb][0], this.bindUniformBuffer(), this._slotFrameId[cb] = this._currentFrameId, this._needSync = !1, void(this._createBufferOnWrite = !1);
        const sb = this._buffers[cb][1];
        this._slotFrameId[cb] === this._currentFrameId && sb && !this._buffersEqual(this._bufferData, sb) && (cb = this._takeFreeSlot(!1)), this._bufferIndex = cb, this._buffer = this._buffers[cb][0], this.bindUniformBuffer();
        const kb = this._buffers[cb][1];
        kb && this._buffersEqual(this._bufferData, kb) || (kb && this._copyBuffer(this._bufferData, kb), this._bufferUpdatedLastFrame = !0, this._engine.updateUniformBuffer(this._buffer, this._bufferData)), this._slotFrameId[cb] = this._currentFrameId, this._slotGeneration[cb] = this._dataGeneration, this._needSync = !1, this._createBufferOnWrite = !1
      }
      _takeFreeSlot(bb) {
        for (let sb = 0; sb < this._freeSlots.length; ++sb) {
          const cb = this._freeSlots[sb];
          if (this._slotFrameId[cb] !== this._currentFrameId) return bb && (this._freeSlots[sb] = this._freeSlots[this._freeSlots.length - 1], this._freeSlots.pop()), cb
        }
        this._rebuild();
        const cb = this._buffers.length - 1;
        return bb || this._freeSlots.push(cb), cb
      }
      _releaseOwnerSlot(bb) {
        const cb = this._slotByOwner?.get(bb);
        if (void 0 === cb) return;
        this._slotByOwner.delete(bb);
        const sb = this._ownerListsBySlot.get(cb);
        sb && (this._removeOwnerBacklink(sb), this._ownerListsBySlot.delete(cb)), this._ownerCount--, this._freeSlots.push(cb)
      }
      _removeOwnerBacklink(bb) {
        const cb = bb.indexOf(this); - 1 !== cb && (bb[cb] = bb[bb.length - 1], bb.pop())
      }
      _createNewBuffer() {
        this._bufferIndex + 1 < this._buffers.length ? (this._bufferIndex++, this._buffer = this._buffers[this._bufferIndex][0], this._createBufferOnWrite = !1, this._needSync = !0) : this._rebuild()
      }
      _checkNewFrame() {
        this._trackUBOsInFrame && this._currentFrameId !== this._engine.frameId && (this._currentFrameId = this._engine.frameId, this._createBufferOnWrite = !1, this._buffers && this._buffers.length > 0 ? (1 === this._buffers.length ? this._needSync = !this._bufferUpdatedLastFrame : this._needSync = 0 !== this._bufferIndex, this._bufferIndex = 0, this._buffer = this._buffers[this._bufferIndex][0]) : this._bufferIndex = -1)
      }
      updateUniform(bb, cb, sb) {
        this._checkNewFrame();
        let Wb = this._uniformLocations[bb];
        if (void 0 === Wb) {
          if (this._buffer) return void kb.c.Error("Cannot add an uniform after UBO has been created. uniformName=" + bb);
          this.addUniform(bb, sb), Wb = this._uniformLocations[bb]
        }
        if (this._buffer || this.create(), this._dynamic) {
          for (let bb = 0; bb < sb; bb++) this._bufferData[Wb + bb] = cb[bb];
          this._dataGeneration++
        } else {
          let bb = !1;
          for (let kb = 0; kb < sb; kb++)(16 === sb && !this._engine._features.uniformBufferHardCheckMatrix || this._bufferData[Wb + kb] !== Math.fround(cb[kb])) && (bb = !0, this._createBufferOnWrite && this._createNewBuffer(), this._bufferData[Wb + kb] = cb[kb]);
          this._needSync = this._needSync || bb, bb && this._dataGeneration++
        }
      }
      updateUniformArray(bb, cb, sb) {
        this._checkNewFrame();
        const ab = this._uniformLocations[bb];
        if (void 0 === ab) return void kb.c.Error("Cannot add an uniform Array dynamically. Please, add it using addUniform and make sure that uniform buffers are supported by the current engine.");
        this._buffer || this.create();
        const Tb = this._uniformArraySizes[bb];
        if (this._dynamic) {
          for (let bb = 0; bb < sb; bb++) this._bufferData[ab + bb] = cb[bb];
          this._dataGeneration++
        } else {
          let bb = !1,
            kb = 0,
            Ub = 0;
          for (let Ib = 0; Ib < sb; Ib++)
            if (this._bufferData[ab + 4 * Ub + kb] !== Wb.g.FloatRound(cb[Ib]) && (bb = !0, this._createBufferOnWrite && this._createNewBuffer(), this._bufferData[ab + 4 * Ub + kb] = cb[Ib]), kb++, kb === Tb.strideSize) {
              for (; kb < 4; kb++) this._bufferData[ab + 4 * Ub + kb] = 0;
              kb = 0, Ub++
            } this._needSync = this._needSync || bb, bb && this._dataGeneration++
        }
      }
      _cacheMatrix(bb, cb) {
        this._checkNewFrame();
        const sb = this._valueCache[bb],
          kb = cb.updateFlag;
        return (void 0 === sb || sb !== kb) && (this._valueCache[bb] = kb, !0)
      }
      _updateMatrix3x3ForUniform(bb, cb) {
        for (let sb = 0; sb < 3; sb++) ab._TempBuffer[4 * sb] = cb[3 * sb], ab._TempBuffer[4 * sb + 1] = cb[3 * sb + 1], ab._TempBuffer[4 * sb + 2] = cb[3 * sb + 2], ab._TempBuffer[4 * sb + 3] = 0;
        this.updateUniform(bb, ab._TempBuffer, 12)
      }
      _updateMatrix3x3ForEffect(bb, cb) {
        this._currentEffect.setMatrix3x3(bb, cb)
      }
      _updateMatrix2x2ForEffect(bb, cb) {
        this._currentEffect.setMatrix2x2(bb, cb)
      }
      _updateMatrix2x2ForUniform(bb, cb) {
        for (let sb = 0; sb < 2; sb++) ab._TempBuffer[4 * sb] = cb[2 * sb], ab._TempBuffer[4 * sb + 1] = cb[2 * sb + 1], ab._TempBuffer[4 * sb + 2] = 0, ab._TempBuffer[4 * sb + 3] = 0;
        this.updateUniform(bb, ab._TempBuffer, 8)
      }
      _updateFloatForEffect(bb, cb) {
        let sb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        this._currentEffect.setFloat(bb + sb, cb)
      }
      _updateFloatForUniform(bb, cb) {
        ab._TempBuffer[0] = cb, this.updateUniform(bb, ab._TempBuffer, 1)
      }
      _updateFloat2ForEffect(bb, cb, sb) {
        let kb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
        this._currentEffect.setFloat2(bb + kb, cb, sb)
      }
      _updateFloat2ForUniform(bb, cb, sb) {
        ab._TempBuffer[0] = cb, ab._TempBuffer[1] = sb, this.updateUniform(bb, ab._TempBuffer, 2)
      }
      _updateFloat3ForEffect(bb, cb, sb, kb) {
        let Wb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "";
        this._currentEffect.setFloat3(bb + Wb, cb, sb, kb)
      }
      _updateFloat3ForUniform(bb, cb, sb, kb) {
        ab._TempBuffer[0] = cb, ab._TempBuffer[1] = sb, ab._TempBuffer[2] = kb, this.updateUniform(bb, ab._TempBuffer, 3)
      }
      _updateFloat4ForEffect(bb, cb, sb, kb, Wb) {
        let ab = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "";
        this._currentEffect.setFloat4(bb + ab, cb, sb, kb, Wb)
      }
      _updateFloat4ForUniform(bb, cb, sb, kb, Wb) {
        ab._TempBuffer[0] = cb, ab._TempBuffer[1] = sb, ab._TempBuffer[2] = kb, ab._TempBuffer[3] = Wb, this.updateUniform(bb, ab._TempBuffer, 4)
      }
      _updateFloatArrayForEffect(bb, cb) {
        let sb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        switch (this._uniformArraySizes[bb]?.strideSize) {
          case 2:
            this._currentEffect.setFloatArray2(bb + sb, cb);
            break;
          case 3:
            this._currentEffect.setFloatArray3(bb + sb, cb);
            break;
          case 4:
            this._currentEffect.setFloatArray4(bb + sb, cb);
            break;
          default:
            this._currentEffect.setFloatArray(bb + sb, cb)
        }
      }
      _updateFloatArrayForUniform(bb, cb) {
        this.updateUniformArray(bb, cb, cb.length)
      }
      _updateArrayForEffect(bb, cb) {
        this._currentEffect.setArray(bb, cb)
      }
      _updateArrayForUniform(bb, cb) {
        this.updateUniformArray(bb, cb, cb.length)
      }
      _updateIntArrayForEffect(bb, cb) {
        this._currentEffect.setIntArray(bb, cb)
      }
      _updateIntArrayForUniform(bb, cb) {
        ab._TempBufferInt32View.set(cb), this.updateUniformArray(bb, ab._TempBuffer, cb.length)
      }
      _updateUIntArrayForEffect(bb, cb) {
        this._currentEffect.setUIntArray(bb, cb)
      }
      _updateUIntArrayForUniform(bb, cb) {
        ab._TempBufferUInt32View.set(cb), this.updateUniformArray(bb, ab._TempBuffer, cb.length)
      }
      _updateMatrixForEffect(bb, cb) {
        this._currentEffect.setMatrix(bb, cb)
      }
      _updateMatrixForUniform(bb, cb) {
        this._cacheMatrix(bb, cb) && this.updateUniform(bb, cb.Osb(), 16)
      }
      _updateMatricesForEffect(bb, cb) {
        this._currentEffect.setMatrices(bb, cb)
      }
      _updateMatricesForUniform(bb, cb) {
        this.updateUniform(bb, cb, cb.length)
      }
      _updateVector3ForEffect(bb, cb) {
        this._currentEffect.setVector3(bb, cb)
      }
      _updateVector3ForUniform(bb, cb) {
        ab._TempBuffer[0] = cb.x, ab._TempBuffer[1] = cb.y, ab._TempBuffer[2] = cb.z, this.updateUniform(bb, ab._TempBuffer, 3)
      }
      _updateVector4ForEffect(bb, cb) {
        this._currentEffect.setVector4(bb, cb)
      }
      _updateVector4ForUniform(bb, cb) {
        ab._TempBuffer[0] = cb.x, ab._TempBuffer[1] = cb.y, ab._TempBuffer[2] = cb.z, ab._TempBuffer[3] = cb.w, this.updateUniform(bb, ab._TempBuffer, 4)
      }
      _updateColor3ForEffect(bb, cb) {
        let sb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        this._currentEffect.setColor3(bb + sb, cb)
      }
      _updateColor3ForUniform(bb, cb) {
        ab._TempBuffer[0] = cb.r, ab._TempBuffer[1] = cb.g, ab._TempBuffer[2] = cb.b, this.updateUniform(bb, ab._TempBuffer, 3)
      }
      _updateColor4ForEffect(bb, cb, sb) {
        let kb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
        this._currentEffect.setColor4(bb + kb, cb, sb)
      }
      _updateDirectColor4ForEffect(bb, cb) {
        let sb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        this._currentEffect.setDirectColor4(bb + sb, cb)
      }
      _updateColor4ForUniform(bb, cb, sb) {
        ab._TempBuffer[0] = cb.r, ab._TempBuffer[1] = cb.g, ab._TempBuffer[2] = cb.b, ab._TempBuffer[3] = sb, this.updateUniform(bb, ab._TempBuffer, 4)
      }
      _updateDirectColor4ForUniform(bb, cb) {
        ab._TempBuffer[0] = cb.r, ab._TempBuffer[1] = cb.g, ab._TempBuffer[2] = cb.b, ab._TempBuffer[3] = cb.a, this.updateUniform(bb, ab._TempBuffer, 4)
      }
      _updateIntForEffect(bb, cb) {
        let sb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        this._currentEffect.setInt(bb + sb, cb)
      }
      _updateIntForUniform(bb, cb) {
        ab._TempBufferInt32View[0] = cb, this.updateUniform(bb, ab._TempBuffer, 1)
      }
      _updateInt2ForEffect(bb, cb, sb) {
        let kb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
        this._currentEffect.setInt2(bb + kb, cb, sb)
      }
      _updateInt2ForUniform(bb, cb, sb) {
        ab._TempBufferInt32View[0] = cb, ab._TempBufferInt32View[1] = sb, this.updateUniform(bb, ab._TempBuffer, 2)
      }
      _updateInt3ForEffect(bb, cb, sb, kb) {
        let Wb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "";
        this._currentEffect.setInt3(bb + Wb, cb, sb, kb)
      }
      _updateInt3ForUniform(bb, cb, sb, kb) {
        ab._TempBufferInt32View[0] = cb, ab._TempBufferInt32View[1] = sb, ab._TempBufferInt32View[2] = kb, this.updateUniform(bb, ab._TempBuffer, 3)
      }
      _updateInt4ForEffect(bb, cb, sb, kb, Wb) {
        let ab = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "";
        this._currentEffect.setInt4(bb + ab, cb, sb, kb, Wb)
      }
      _updateInt4ForUniform(bb, cb, sb, kb, Wb) {
        ab._TempBufferInt32View[0] = cb, ab._TempBufferInt32View[1] = sb, ab._TempBufferInt32View[2] = kb, ab._TempBufferInt32View[3] = Wb, this.updateUniform(bb, ab._TempBuffer, 4)
      }
      _updateUIntForEffect(bb, cb) {
        let sb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        this._currentEffect.setUInt(bb + sb, cb)
      }
      _updateUIntForUniform(bb, cb) {
        ab._TempBufferUInt32View[0] = cb, this.updateUniform(bb, ab._TempBuffer, 1)
      }
      _updateUInt2ForEffect(bb, cb, sb) {
        let kb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
        this._currentEffect.setUInt2(bb + kb, cb, sb)
      }
      _updateUInt2ForUniform(bb, cb, sb) {
        ab._TempBufferUInt32View[0] = cb, ab._TempBufferUInt32View[1] = sb, this.updateUniform(bb, ab._TempBuffer, 2)
      }
      _updateUInt3ForEffect(bb, cb, sb, kb) {
        let Wb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "";
        this._currentEffect.setUInt3(bb + Wb, cb, sb, kb)
      }
      _updateUInt3ForUniform(bb, cb, sb, kb) {
        ab._TempBufferUInt32View[0] = cb, ab._TempBufferUInt32View[1] = sb, ab._TempBufferUInt32View[2] = kb, this.updateUniform(bb, ab._TempBuffer, 3)
      }
      _updateUInt4ForEffect(bb, cb, sb, kb, Wb) {
        let ab = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "";
        this._currentEffect.setUInt4(bb + ab, cb, sb, kb, Wb)
      }
      _updateUInt4ForUniform(bb, cb, sb, kb, Wb) {
        ab._TempBufferUInt32View[0] = cb, ab._TempBufferUInt32View[1] = sb, ab._TempBufferUInt32View[2] = kb, ab._TempBufferUInt32View[3] = Wb, this.updateUniform(bb, ab._TempBuffer, 4)
      }
      setTexture(bb, cb) {
        this._currentEffect.setTexture(bb, cb)
      }
      setTextureArray(bb, cb) {
        this._currentEffect.setTextureArray(bb, cb)
      }
      bindTexture(bb, cb) {
        this._currentEffect._bindTexture(bb, cb)
      }
      updateUniformDirectly(bb, cb) {
        this.updateUniform(bb, cb, cb.length), this.update()
      }
      bindToEffect(bb, cb) {
        this._currentEffect = bb, this._currentEffectName = cb
      }
      bindUniformBuffer() {
        !this._noUBO && this._buffer && this._currentEffect && this._currentEffect.bindUniformBuffer(this._buffer, this._currentEffectName)
      }
      unbindEffect() {
        this._currentEffect = void 0, this._currentEffectName = void 0
      }
      setDataBuffer(bb) {
        if (!this._buffers) return this._buffer === bb;
        for (let cb = 0; cb < this._buffers.length; ++cb) {
          if (this._buffers[cb][0] === bb) return this._bufferIndex = cb, this._buffer = bb, this._createBufferOnWrite = !1, this._currentEffect = void 0, this._buffers.length > 1 && this._buffers[cb][1] && (this._bufferData.set(this._buffers[cb][1]), this._dataGeneration++), this._valueCache = {}, this._currentFrameId = this._engine.frameId, !0
        }
        return !1
      }
      has(bb) {
        return void 0 !== this._uniformLocations[bb]
      }
      dispose() {
        if (this._noUBO) return;
        const bb = this._engine._uniformBuffers,
          cb = bb.indexOf(this);
        if (-1 !== cb && (bb[cb] = bb[bb.length - 1], bb.pop()), this._trackUBOsInFrame && this._buffers) {
          this._resetOwnerSlots();
          for (let bb = 0; bb < this._buffers.length; ++bb) {
            const cb = this._buffers[bb][0];
            this._engine._releaseBuffer(cb)
          }
          this._buffers = [], this._buffer = null, this._bufferIndex = -1
        } else this._buffer && this._engine._releaseBuffer(this._buffer) && (this._buffer = null)
      }
    }
    ab._MAX_UNIFORM_SIZE = 256, ab._TempBuffer = new Float32Array(ab._MAX_UNIFORM_SIZE), ab._TempBufferInt32View = new Int32Array(ab._TempBuffer.buffer), ab._TempBufferUInt32View = new Uint32Array(ab._TempBuffer.buffer)
  },
  39330: (bb, cb, sb) => {
    sb.d(cb, {
      d: () => Wb
    });
    var kb = sb(39334);
    class Wb extends kb.c {
      constructor(bb) {
        super(), this._buffer = bb
      }
      get underlyingResource() {
        return this._buffer
      }
    }
  },
  39427: (bb, cb, sb) => {
    sb.d(cb, {
      c: () => Ib,
      e: () => Hb
    });
    const kb = "__bjs_serializable__",
      Wb = new WeakMap;

    function ab(bb, cb) {
      return Object.prototype.hasOwnProperty.call(bb, cb)
    }
    const Tb = function() {
      let bb = Symbol.metadata;
      return bb || (bb = Symbol("Symbol.metadata"), Object.defineProperty(Symbol, "metadata", {
        configurable: !0,
        writable: !0,
        value: bb
      })), bb
    }();

    function Ub(bb) {
      return "function" === typeof bb ? bb : bb?.constructor
    }

    function Ib(bb) {
      if (!bb) throw new Error(`Decorator metadata is unavailable; the Symbol.metadata (${String(Tb)}) polyfill must run before decorated classes are evaluated.`);
      return ab(bb, kb) || (bb[kb] = {}), bb[kb]
    }

    function Hb(bb) {
      const cb = Ub(bb),
        sb = cb ? cb[Tb] : void 0;
      if (!sb) return {};
      const Ib = Wb.get(sb);
      if (Ib) return Ib;
      const Hb = {},
        fb = [];
      let Mb = sb;
      for (; Mb;) fb.push(Mb), Mb = Object.getPrototypeOf(Mb);
      for (const Wb of fb)
        if (ab(Wb, kb)) {
          const bb = Wb[kb];
          for (const cb in bb) Hb[cb] = bb[cb]
        } return Wb.set(sb, Hb), Hb
    }
  },
  39418: (bb, cb, sb) => {
    sb.d(cb, {
      A: () => fb,
      C: () => Mb,
      E: () => Tb,
      b: () => Nb,
      f: () => ab,
      h: () => Cb,
      l: () => nb,
      o: () => Ib,
      q: () => mb,
      s: () => Hb,
      t: () => Qb,
      v: () => Xb,
      w: () => lb,
      x: () => Ub
    });
    var kb = sb(39427);

    function Wb(bb, cb) {
      return (sb, Wb) => {
        if (!Wb.metadata) return;
        const ab = String(Wb.name),
          Tb = (0, kb.c)(Wb.metadata);
        Tb[ab] || (Tb[ab] = {
          type: bb,
          sourceName: cb
        })
      }
    }

    function ab(bb) {
      return function(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return (sb, kb) => {
          const Wb = cb || "_" + String(kb.name);
          return {
            init(bb) {
              return void 0 === bb && Wb in this || (this[Wb] = bb), bb
            },
            get() {
              return this[Wb]
            },
            set(cb) {
              "function" === typeof this[Wb]?.equals && this[Wb].equals(cb) || this[Wb] !== cb && (this[Wb] = cb, this[bb]())
            }
          }
        }
      }(bb, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null)
    }

    function Tb(bb) {
      return Wb(0, bb)
    }

    function Ub(bb) {
      return Wb(1, bb)
    }

    function Ib(bb) {
      return Wb(2, bb)
    }

    function Hb(bb) {
      return Wb(3, bb)
    }

    function fb(bb) {
      return Wb(4, bb)
    }

    function Mb(bb) {
      return Wb(5, bb)
    }

    function Xb(bb) {
      return Wb(6, bb)
    }

    function nb(bb) {
      return Wb(7, bb)
    }

    function mb(bb) {
      return Wb(8, bb)
    }

    function lb(bb) {
      return Wb(10, bb)
    }

    function Qb(bb) {
      return Wb(12, bb)
    }

    function eb(bb, cb, sb) {
      const kb = String(cb.name);
      let Wb = null;
      const ab = function() {
        if (null === Wb) {
          Wb = bb, "undefined" !== typeof _native && _native[kb] && (Wb = sb(_native[kb], bb));
          const Tb = this && (cb.static ? this : Object.getPrototypeOf(this));
          Tb?.[kb] === ab && (Tb[kb] = Wb)
        }
        for (var Tb = arguments.length, Ub = new Array(Tb), Ib = 0; Ib < Tb; Ib++) Ub[Ib] = arguments[Ib];
        return Wb.apply(this, Ub)
      };
      return ab
    }

    function Cb(bb, cb) {
      return eb(bb, cb, (bb => bb))
    }

    function Nb(bb) {
      let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      return (sb, kb) => {
        const Wb = cb || "_" + String(kb.name);
        return {
          get() {
            return this[Wb]?.value
          },
          set(cb) {
            "function" === typeof this[Wb]?.value?.equals && this[Wb].value.equals(cb) || this[Wb].value !== cb && (this[Wb].value = cb, this[bb]())
          }
        }
      }
    }
    Cb.filter = function(bb) {
      return (cb, sb) => eb(cb, sb, ((cb, sb) => function() {
        for (var kb = arguments.length, Wb = new Array(kb), ab = 0; ab < kb; ab++) Wb[ab] = arguments[ab];
        return bb(...Wb) ? cb(...Wb) : sb.apply(this, Wb)
      }))
    }
  },
  39441: (bb, cb, sb) => {
    sb.d(cb, {
      d: () => Hb
    });
    var kb = sb(39296),
      Wb = sb(39449),
      ab = sb(36830),
      Tb = sb(36656),
      Ub = sb(39427);
    const Ib = function(bb, cb, sb) {
      let kb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const ab = bb();
      Wb.c && Wb.c.HasTags(cb) && Wb.c.AddTagsTo(ab, Wb.c.GetTags(cb, !0));
      const Tb = (0, Ub.e)(ab),
        Ib = {};
      for (const Wb in Tb) {
        const bb = Tb[Wb],
          Ub = cb[Wb],
          fb = bb.type;
        if (void 0 !== Ub && null !== Ub && ("uniqueId" !== Wb || Hb.AllowLoadingUniqueId)) switch (fb) {
          case 0:
          case 6:
          case 9:
          case 11:
            "function" === typeof Ub.slice ? ab[Wb] = Ub.slice() : ab[Wb] = Ub;
            break;
          case 1:
            kb.cloneTexturesOnlyOnce && Ib[Ub.uniqueId] ? ab[Wb] = Ib[Ub.uniqueId] : (ab[Wb] = sb || Ub.isRenderTarget ? Ub : Ub.clone(), Ib[Ub.uniqueId] = ab[Wb]);
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
            ab[Wb] = sb ? Ub : Ub.clone()
        }
      }
      return ab
    };
    class Hb {
      static AppendSerializedAnimations(bb, cb) {
        if (bb.animations) {
          cb.animations = [];
          for (let sb = 0; sb < bb.animations.length; sb++) {
            const kb = bb.animations[sb];
            cb.animations.push(kb.serialize())
          }
        }
      }
      static Serialize(bb, cb) {
        cb || (cb = {}), Wb.c && (cb.tags = Wb.c.GetTags(bb));
        const sb = (0, Ub.e)(bb);
        for (const kb in sb) {
          const Wb = sb[kb],
            ab = Wb.sourceName || kb,
            Tb = Wb.type,
            Ub = bb[kb];
          if (void 0 !== Ub && null !== Ub && ("uniqueId" !== kb || Hb.AllowLoadingUniqueId)) switch (Tb) {
            case 0:
              Array.isArray(Ub) ? cb[ab] = Ub.slice() : cb[ab] = Ub;
              break;
            case 1:
            case 3:
            case 7:
            case 9:
              cb[ab] = Ub.serialize();
              break;
            case 2:
            case 4:
            case 5:
            case 8:
            case 10:
            case 12:
            case 13:
              cb[ab] = Ub.Osb();
              break;
            case 6:
            case 11:
              cb[ab] = Ub.id
          }
        }
        return cb
      }
      static ParseProperties(bb, cb, sb, kb) {
        kb || (kb = "");
        const Wb = (0, Ub.e)(cb);
        for (const Ub in Wb) {
          const Ib = Wb[Ub],
            fb = bb[Ib.sourceName || Ub],
            Mb = Ib.type;
          if (void 0 !== fb && null !== fb && ("uniqueId" !== Ub || Hb.AllowLoadingUniqueId)) {
            const bb = cb;
            switch (Mb) {
              case 0:
                bb[Ub] = fb;
                break;
              case 1:
                sb && (bb[Ub] = Hb._TextureParser(fb, sb, kb));
                break;
              case 2:
                bb[Ub] = ab.e.FromArray(fb);
                break;
              case 3:
                bb[Ub] = Hb._FresnelParametersParser(fb);
                break;
              case 4:
                bb[Ub] = Tb.n.FromArray(fb);
                break;
              case 5:
                bb[Ub] = Tb.p.FromArray(fb);
                break;
              case 6:
                sb && (bb[Ub] = sb.getLastMeshById(fb));
                break;
              case 7:
                bb[Ub] = Hb._ColorCurvesParser(fb);
                break;
              case 8:
                bb[Ub] = ab.g.FromArray(fb);
                break;
              case 9:
                bb[Ub] = Hb._ImageProcessingConfigurationParser(fb);
                break;
              case 10:
                bb[Ub] = Tb.f.FromArray(fb);
                break;
              case 11:
                sb && (bb[Ub] = sb.getCameraById(fb));
                break;
              case 12:
                bb[Ub] = Tb.e.FromArray(fb);
                break;
              case 13:
                bb[Ub] = Tb.t.FromArray(fb)
            }
          }
        }
      }
      static Parse(bb, cb, sb) {
        let kb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const ab = bb();
        return Wb.c && Wb.c.AddTagsTo(ab, cb.tags), Hb.ParseProperties(cb, ab, sb, kb), ab
      }
      static Clone(bb, cb) {
        return Ib(bb, cb, !1, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {})
      }
      static Instanciate(bb, cb) {
        return Ib(bb, cb, !0)
      }
    }
    Hb.AllowLoadingUniqueId = !1, Hb._ImageProcessingConfigurationParser = bb => {
      throw (0, kb.i)("ImageProcessingConfiguration")
    }, Hb._FresnelParametersParser = bb => {
      throw (0, kb.i)("FresnelParameters")
    }, Hb._ColorCurvesParser = bb => {
      throw (0, kb.i)("ColorCurves")
    }, Hb._TextureParser = (bb, cb, sb) => {
      throw (0, kb.i)("Texture")
    }
  },
  39356: (bb, cb, sb) => {
    sb.d(cb, {
      b: () => Wb
    });
    var kb = sb(39314);
    class Wb {
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
        this._totalValueCount++, this._current = 0, this._hasCurrentValue = Wb.Enabled, this._lastSecValueCount++
      }
      addCount(bb, cb) {
        Wb.Enabled && (this._current += bb, this._hasCurrentValue = !0, cb && this._fetchResult())
      }
      beginMonitoring() {
        Wb.Enabled && (this._startMonitoringTime = kb.e.Now)
      }
      endMonitoring() {
        let bb = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        if (!Wb.Enabled) return;
        bb && this.fetchNewFrame();
        const cb = kb.e.Now;
        this._current = cb - this._startMonitoringTime, this._hasCurrentValue = !0, bb && this._fetchResult()
      }
      pN() {
        this._fetchResult()
      }
      _fetchResult() {
        if (!this._hasCurrentValue) return;
        this._totalAccumulated += this._current, this._lastSecAccumulated += this._current, this._hasResult ? (this._min = Math.min(this._min, this._current), this._max = Math.max(this._max, this._current)) : (this._min = this._current, this._max = this._current, this._hasResult = !0), this._average = this._totalAccumulated / this._totalValueCount;
        const bb = kb.e.Now;
        bb - this._lastSecTime > 1e3 && (this._lastSecAverage = this._lastSecAccumulated / this._lastSecValueCount, this._lastSecTime = bb, this._lastSecAccumulated = 0, this._lastSecValueCount = 0)
      }
    }
    Wb.Enabled = !0
  },
  39536: (bb, cb, sb) => {
    sb.d(cb, {
      b: () => Wb,
      d: () => kb
    });
    class kb {
      constructor(bb) {
        this.length = 0, this.data = new Array(bb), this._id = kb._GlobalId++
      }
      push(bb) {
        this.data[this.length++] = bb, this.length > this.data.length && (this.data.length *= 2)
      }
      forEach(bb) {
        for (let cb = 0; cb < this.length; cb++) bb(this.data[cb])
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
          for (let cb = 0; cb < bb.length; cb++) this.data[this.length++] = (bb.data || bb)[cb]
        }
      }
      indexOf(bb) {
        const cb = this.data.indexOf(bb);
        return cb >= this.length ? -1 : cb
      }
      contains(bb) {
        return -1 !== this.indexOf(bb)
      }
    }
    kb._GlobalId = 0;
    class Wb extends kb {
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
          for (let cb = 0; cb < bb.length; cb++) {
            const sb = (bb.data || bb)[cb];
            this.pushNoDuplicate(sb)
          }
        }
      }
    }
  },
  39449: (bb, cb, sb) => {
    sb.d(cb, {
      c: () => Wb
    });
    class kb {
      static Eval(bb, cb) {
        return "true" === (bb = bb.match(/\([^()]*\)/g) ? bb.replace(/\([^()]*\)/g, (bb => (bb = bb.slice(1, bb.length - 1), kb._HandleParenthesisContent(bb, cb)))) : kb._HandleParenthesisContent(bb, cb)) || "false" !== bb && kb.Eval(bb, cb)
      }
      static _HandleParenthesisContent(bb, cb) {
        let sb;
        cb = cb || (bb => "true" === bb);
        const Wb = bb.split("||");
        for (const ab in Wb)
          if (Object.prototype.hasOwnProperty.call(Wb, ab)) {
            let bb = kb._SimplifyNegation(Wb[ab].trim());
            const Tb = bb.split("&&");
            if (Tb.length > 1)
              for (let Wb = 0; Wb < Tb.length; ++Wb) {
                const ab = kb._SimplifyNegation(Tb[Wb].trim());
                if (sb = "true" !== ab && "false" !== ab ? "!" === ab[0] ? !cb(ab.substring(1)) : cb(ab) : "true" === ab, !sb) {
                  bb = "false";
                  break
                }
              }
            if (sb || "true" === bb) {
              sb = !0;
              break
            }
            sb = "true" !== bb && "false" !== bb ? "!" === bb[0] ? !cb(bb.substring(1)) : cb(bb) : "true" === bb
          } return sb ? "true" : "false"
      }
      static _SimplifyNegation(bb) {
        return "!true" === (bb = (bb = bb.replace(/^[\s!]+/, (bb => (bb = bb.replace(/[\s]/g, (() => ""))).length % 2 ? "!" : ""))).trim()) ? bb = "false" : "!false" === bb && (bb = "true"), bb
      }
    }
    class Wb {
      static EnableFor(bb) {
        bb._tags = bb._tags || {}, bb.hasTags = () => Wb.HasTags(bb), bb.addTags = cb => Wb.AddTagsTo(bb, cb), bb.removeTags = cb => Wb.RemoveTagsFrom(bb, cb), bb.matchesTagsQuery = cb => Wb.MatchesQuery(bb, cb)
      }
      static DisableFor(bb) {
        delete bb._tags, delete bb.hasTags, delete bb.addTags, delete bb.removeTags, delete bb.matchesTagsQuery
      }
      static HasTags(bb) {
        if (!bb._tags) return !1;
        const cb = bb._tags;
        for (const sb in cb)
          if (Object.prototype.hasOwnProperty.call(cb, sb)) return !0;
        return !1
      }
      static GetTags(bb) {
        let cb = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (!bb._tags) return null;
        if (cb) {
          const cb = [];
          for (const sb in bb._tags) Object.prototype.hasOwnProperty.call(bb._tags, sb) && !0 === bb._tags[sb] && cb.push(sb);
          return cb.join(" ")
        }
        return bb._tags
      }
      static AddTagsTo(bb, cb) {
        if (!cb) return;
        if ("string" !== typeof cb) return;
        const sb = cb.split(" ");
        for (const kb of sb) Wb._AddTagTo(bb, kb)
      }
      static _AddTagTo(bb, cb) {
        "" !== (cb = cb.trim()) && "true" !== cb && "false" !== cb && (cb.match(/[\s]/) || cb.match(/^([!]|([|]|[&]){2})/) || (Wb.EnableFor(bb), bb._tags[cb] = !0))
      }
      static RemoveTagsFrom(bb, cb) {
        if (!Wb.HasTags(bb)) return;
        const sb = cb.split(" ");
        for (const kb in sb) Wb._RemoveTagFrom(bb, sb[kb])
      }
      static _RemoveTagFrom(bb, cb) {
        delete bb._tags[cb]
      }
      static MatchesQuery(bb, cb) {
        return void 0 === cb || ("" === cb ? Wb.HasTags(bb) : kb.Eval(cb, (cb => Wb.HasTags(bb) && bb._tags[cb])))
      }
    }
  },
  39582: (bb, cb, sb) => {
    sb.d(cb, {
      e: () => ab
    });
    var kb = sb(39576),
      Wb = sb(36683);
    class ab {
      constructor(bb) {
        this._vertexBuffers = {}, this._activePostProcesses = [], this.onBeforeRenderObservable = new Wb.c, this._scene = bb
      }
      _prepareBuffers() {
        if (this._vertexBuffers[kb.l.PositionKind]) return;
        const bb = [];
        bb.push(1, 1), bb.push(-1, 1), bb.push(-1, -1), bb.push(1, -1), this._vertexBuffers[kb.l.PositionKind] = new kb.l(this._scene.Sm(), bb, kb.l.PositionKind, !1, !1, 2), this._buildIndexBuffer()
      }
      _buildIndexBuffer() {
        const bb = [];
        bb.push(0), bb.push(1), bb.push(2), bb.push(0), bb.push(2), bb.push(3), this._indexBuffer = this._scene.Sm().createIndexBuffer(bb)
      }
      _getActivePostProcesses(bb) {
        const cb = this._activePostProcesses;
        cb.length = 0;
        for (let sb = 0; sb < bb.length; sb++) {
          const kb = bb[sb];
          kb && cb.push(kb)
        }
        return cb
      }
      _rebuild() {
        const bb = this._vertexBuffers[kb.l.PositionKind];
        bb && (bb._rebuild(), this._buildIndexBuffer())
      }
      _prepareFrame() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const sb = this._scene.activeCamera;
        return !!sb && (cb = cb || this._getActivePostProcesses(sb._postProcesses), !(!cb || 0 === cb.length || !this._scene.postProcessesEnabled) && (cb[0].activate(sb, bb, null !== cb && void 0 !== cb), !0))
      }
      directRender(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          sb = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          kb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          Wb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
          ab = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
          Tb = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : bb.length;
        const Ub = this._scene.Sm();
        for (let Ib = 0; Ib < Tb; Ib++) {
          Ib < bb.length - 1 ? bb[Ib + 1].activate(this._scene.activeCamera || this._scene, cb?.texture) : (cb ? Ub.bindFramebuffer(cb, kb, void 0, void 0, sb, Wb) : ab || Ub.restoreDefaultFramebuffer(), Ub._debugInsertMarker?.(`post process ${bb[Ib].name} output`));
          const Tb = bb[Ib],
            Hb = Tb.apply();
          Hb && (Tb.onBeforeRenderObservable.notifyObservers(Hb), this._prepareBuffers(), Ub.bindBuffers(this._vertexBuffers, this._indexBuffer, Hb), Ub.drawElementsType(0, 0, 6), Tb.onAfterRenderObservable.notifyObservers(Hb))
        }
        Ub.setDepthBuffer(!0), Ub.setDepthWrite(!0)
      }
      _finalizeFrame(bb, cb, sb, kb) {
        let Wb = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const ab = this._scene.activeCamera;
        if (!ab) return;
        if (this.onBeforeRenderObservable.notifyObservers(this), 0 === (kb = kb || this._getActivePostProcesses(ab._postProcesses)).length || !this._scene.postProcessesEnabled) return;
        const Tb = this._scene.Sm();
        for (let Ub = 0, Ib = kb.length; Ub < Ib; Ub++) {
          const Hb = kb[Ub];
          if (Ub < Ib - 1 ? Hb._outputTexture = kb[Ub + 1].activate(ab, cb?.texture) : (cb ? (Tb.bindFramebuffer(cb, sb, void 0, void 0, Wb), Hb._outputTexture = cb) : (Tb.restoreDefaultFramebuffer(), Hb._outputTexture = null), Tb._debugInsertMarker?.(`post process ${kb[Ub].name} output`)), bb) break;
          const fb = Hb.apply();
          fb && (Hb.onBeforeRenderObservable.notifyObservers(fb), this._prepareBuffers(), Tb.bindBuffers(this._vertexBuffers, this._indexBuffer, fb), Tb.drawElementsType(0, 0, 6), Hb.onAfterRenderObservable.notifyObservers(fb))
        }
        Tb.setDepthBuffer(!0), Tb.setDepthWrite(!0), Tb.setAlphaMode(0)
      }
      dispose() {
        const bb = this._vertexBuffers[kb.l.PositionKind];
        bb && (bb.dispose(), this._vertexBuffers[kb.l.PositionKind] = null), this._indexBuffer && (this._scene.Sm()._releaseBuffer(this._indexBuffer), this._indexBuffer = null)
      }
    }
  },
  39601: (bb, cb, sb) => {
    sb.d(cb, {
      e: () => ab
    });
    var kb = sb(39536),
      Wb = sb(36656);
    class ab {
      set opaqueSortCompareFn(bb) {
        this._opaqueSortCompareFn = bb || ab.PainterSortCompare, this._renderOpaque = this._renderOpaqueSorted
      }
      set alphaTestSortCompareFn(bb) {
        this._alphaTestSortCompareFn = bb || ab.PainterSortCompare, this._renderAlphaTest = this._renderAlphaTestSorted
      }
      set transparentSortCompareFn(bb) {
        this._transparentSortCompareFn = bb || ab.defaultTransparentSortCompare, this._renderTransparent = this._renderTransparentSorted
      }
      constructor(bb, cb) {
        let sb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          Wb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          ab = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
        this.index = bb, this._opaqueSubMeshes = new kb.d(256), this._transparentSubMeshes = new kb.d(256), this._alphaTestSubMeshes = new kb.d(256), this._depthOnlySubMeshes = new kb.d(256), this._particleSystems = new kb.d(256), this._spriteManagers = new kb.d(256), this._empty = !0, this._edgesRenderers = new kb.b(16), this.disableDepthPrePass = !1, this._scene = cb, this.opaqueSortCompareFn = sb, this.alphaTestSortCompareFn = Wb, this.transparentSortCompareFn = ab
      }
      render(bb, cb, sb, kb) {
        let Wb = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          ab = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          Tb = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
          Ub = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7],
          Ib = arguments.length > 8 ? arguments[8] : void 0;
        if (bb) return void bb(this._opaqueSubMeshes, this._alphaTestSubMeshes, this._transparentSubMeshes, this._depthOnlySubMeshes);
        const Hb = this._scene.Sm();
        Wb && 0 !== this._depthOnlySubMeshes.length && (Hb.setColorWrite(!1), this._renderAlphaTest(this._depthOnlySubMeshes), Hb.setColorWrite(!0)), ab && 0 !== this._opaqueSubMeshes.length && this._renderOpaque(this._opaqueSubMeshes), Tb && 0 !== this._alphaTestSubMeshes.length && this._renderAlphaTest(this._alphaTestSubMeshes);
        const fb = Hb.getStencilBuffer();
        if (Hb.setStencilBuffer(!1), cb && this._renderSprites(), sb && this._renderParticles(kb), this.onBeforeTransparentRendering && this.onBeforeTransparentRendering(), Ub && (Ib || 0 !== this._transparentSubMeshes.length || this._scene.useOrderIndependentTransparency)) {
          if (Hb.setStencilBuffer(fb), Ib) Ib(this._transparentSubMeshes, this);
          else if (this._scene.useOrderIndependentTransparency) {
            const bb = this._scene.depthPeelingRenderer.render(this._transparentSubMeshes);
            bb.length && this._renderTransparent(bb)
          } else this._renderTransparent(this._transparentSubMeshes);
          Hb.setAlphaMode(0)
        }
        if (Hb.setStencilBuffer(!1), ab && this._edgesRenderers.length) {
          for (let bb = 0; bb < this._edgesRenderers.length; bb++) this._edgesRenderers.data[bb].render();
          Hb.setAlphaMode(0)
        }
        Hb.setStencilBuffer(fb)
      }
      _renderOpaqueSorted(bb) {
        ab._RenderSorted(bb, this._opaqueSortCompareFn, this._scene.activeCamera, !1, this.disableDepthPrePass)
      }
      _renderAlphaTestSorted(bb) {
        ab._RenderSorted(bb, this._alphaTestSortCompareFn, this._scene.activeCamera, !1, this.disableDepthPrePass)
      }
      _renderTransparentSorted(bb) {
        ab._RenderSorted(bb, this._transparentSortCompareFn, this._scene.activeCamera, !0, this.disableDepthPrePass)
      }
      static _RenderSorted(bb, cb, sb, kb, Tb) {
        let Ub, Ib = 0;
        const Hb = sb ? sb.globalPosition : ab._ZeroVector;
        if (kb && cb !== ab.PainterSortCompare)
          for (; Ib < bb.length; Ib++) Ub = bb.data[Ib], Ub._alphaIndex = Ub.getMesh().alphaIndex, Ub._distanceToCamera = Wb.p.Distance(Ub.PJ().Ikb.centerWorld, Hb);
        const fb = bb.length === bb.data.length ? bb.data : bb.data.slice(0, bb.length);
        cb && fb.sort(cb);
        const Mb = fb[0].getMesh().EY();
        for (Ib = 0; Ib < fb.length; Ib++) {
          if (Ub = fb[Ib], Mb._activeMeshesFrozenButKeepClipping && !Ub.isInFrustum(Mb._frustumPlanes)) continue;
          let bb = !1;
          if (kb) {
            const cb = Ub.pm();
            if (cb && cb.needDepthPrePass && !Tb) {
              bb = !0;
              const sb = cb.EY().Sm();
              sb.setColorWrite(!1), sb.setAlphaMode(0), Ub.render(!1), sb.setColorWrite(!0)
            }
          }
          const cb = Ub._renderingMesh;
          !bb && cb._renderRunFollower(Ub, kb) || Ub.render(kb)
        }
      }
      static defaultTransparentSortCompare(bb, cb) {
        return bb._alphaIndex > cb._alphaIndex ? 1 : bb._alphaIndex < cb._alphaIndex ? -1 : ab.backToFrontSortCompare(bb, cb)
      }
      static backToFrontSortCompare(bb, cb) {
        return bb._distanceToCamera < cb._distanceToCamera ? 1 : bb._distanceToCamera > cb._distanceToCamera ? -1 : 0
      }
      static frontToBackSortCompare(bb, cb) {
        return bb._distanceToCamera < cb._distanceToCamera ? -1 : bb._distanceToCamera > cb._distanceToCamera ? 1 : 0
      }
      static PainterSortCompare(bb, cb) {
        const sb = bb.getMesh(),
          kb = cb.getMesh();
        return sb.material && kb.material ? sb.material.uniqueId - kb.material.uniqueId : sb.uniqueId - kb.uniqueId
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
      dispatch(bb, cb, sb) {
        void 0 === cb && (cb = bb.getMesh()), void 0 === sb && (sb = bb.pm()), null !== sb && void 0 !== sb && (sb.needAlphaBlendingForMesh(cb) ? this._transparentSubMeshes.push(bb) : sb.needAlphaTestingForMesh(cb) ? (sb.needDepthPrePass && !this.disableDepthPrePass && this._depthOnlySubMeshes.push(bb), this._alphaTestSubMeshes.push(bb)) : (sb.needDepthPrePass && !this.disableDepthPrePass && this._depthOnlySubMeshes.push(bb), this._opaqueSubMeshes.push(bb)), cb._renderingGroup = this, cb._edgesRenderer && cb.isEnabled() && cb.isVisible && cb._edgesRenderer.isEnabled && this._edgesRenderers.pushNoDuplicate(cb._edgesRenderer), this._empty = !1)
      }
      dispatchSprites(bb) {
        this._spriteManagers.push(bb), this._empty = !1
      }
      dispatchParticles(bb) {
        this._particleSystems.push(bb), this._empty = !1
      }
      _renderParticles(bb) {
        if (0 === this._particleSystems.length) return;
        const cb = this._scene.activeCamera;
        this._scene.onBeforeParticlesRenderingObservable.notifyObservers(this._scene);
        for (let sb = 0; sb < this._particleSystems.length; sb++) {
          const kb = this._particleSystems.data[sb];
          if (0 === (cb && cb.layerMask & kb.layerMask)) continue;
          const Wb = kb.emitter;
          Wb.position && bb && -1 === bb.indexOf(Wb) || this._scene._activeParticles.addCount(kb.render(), !1)
        }
        this._scene.onAfterParticlesRenderingObservable.notifyObservers(this._scene)
      }
      _renderSprites() {
        if (!this._scene.spritesEnabled || 0 === this._spriteManagers.length) return;
        const bb = this._scene.activeCamera;
        this._scene.onBeforeSpritesRenderingObservable.notifyObservers(this._scene);
        for (let cb = 0; cb < this._spriteManagers.length; cb++) {
          const sb = this._spriteManagers.data[cb];
          0 !== (bb && bb.layerMask & sb.layerMask) && sb.render()
        }
        this._scene.onAfterSpritesRenderingObservable.notifyObservers(this._scene)
      }
    }
    ab._ZeroVector = Wb.p.Zero()
  },
  39593: (bb, cb, sb) => {
    sb.d(cb, {
      e: () => ab
    });
    var kb = sb(39601);
    class Wb {}
    class ab {
      get disableDepthPrePass() {
        return this._disableDepthPrePass
      }
      set disableDepthPrePass(bb) {
        this._disableDepthPrePass = bb;
        for (const cb of this._renderingGroups) cb.disableDepthPrePass = bb
      }
      get maintainStateBetweenFrames() {
        return this._maintainStateBetweenFrames
      }
      set maintainStateBetweenFrames(bb) {
        bb !== this._maintainStateBetweenFrames && (this._maintainStateBetweenFrames = bb, this._maintainStateBetweenFrames || this.restoreDispachedFlags())
      }
      restoreDispachedFlags() {
        for (const bb of this._scene.meshes)
          if (bb.XV)
            for (const cb of bb.XV) cb._wasDispatched = !1;
        if (this._scene.spriteManagers)
          for (const bb of this._scene.spriteManagers) bb._wasDispatched = !1;
        for (const bb of this._scene.mV) bb._wasDispatched = !1
      }
      constructor(bb) {
        this._useSceneAutoClearSetup = !1, this._disableDepthPrePass = !1, this._renderingGroups = new Array, this._autoClearDepthStencil = {}, this._customOpaqueSortCompareFn = {}, this._customAlphaTestSortCompareFn = {}, this._customTransparentSortCompareFn = {}, this._renderingGroupInfo = new Wb, this._maintainStateBetweenFrames = !1, this._scene = bb;
        for (let cb = ab.MIN_RENDERINGGROUPS; cb < ab.MAX_RENDERINGGROUPS; cb++) this._autoClearDepthStencil[cb] = {
          autoClear: !0,
          depth: !0,
          stencil: !0
        }
      }
      get renderingGroups() {
        return this._renderingGroups
      }
      getRenderingGroup(bb) {
        const cb = bb || 0;
        return this._prepareRenderingGroup(cb), this._renderingGroups[cb]
      }
      _clearDepthStencilBuffer() {
        let bb = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          cb = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this._depthStencilBufferAlreadyCleaned || (this._scene.Sm().clear(null, !1, bb, cb), this._depthStencilBufferAlreadyCleaned = !0)
      }
      render(bb, cb, sb, kb) {
        let Wb = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          Tb = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          Ub = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
          Ib = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7],
          Hb = arguments.length > 8 ? arguments[8] : void 0,
          fb = arguments.length > 9 ? arguments[9] : void 0;
        const Mb = this._renderingGroupInfo;
        Mb.aQ = this._scene, Mb.camera = this._scene.activeCamera, Mb.renderingManager = this;
        const Xb = fb ?? this._scene.spriteManagers;
        if (Xb && kb)
          for (let ab = 0; ab < Xb.length; ab++) {
            const bb = Xb[ab];
            this.dispatchSprites(bb)
          }
        for (let nb = ab.MIN_RENDERINGGROUPS; nb < ab.MAX_RENDERINGGROUPS; nb++) {
          this._depthStencilBufferAlreadyCleaned = nb === ab.MIN_RENDERINGGROUPS;
          const fb = this._renderingGroups[nb];
          if (!fb || fb._empty) continue;
          const Xb = 1 << nb;
          if (Mb.renderingGroupId = nb, this._scene.onBeforeRenderingGroupObservable.notifyObservers(Mb, Xb), ab.AUTOCLEAR) {
            const bb = this._useSceneAutoClearSetup ? this._scene.getAutoClearDepthStencilSetup(nb) : this._autoClearDepthStencil[nb];
            bb && bb.autoClear && this._clearDepthStencilBuffer(bb.depth, bb.stencil)
          }
          for (let bb = 0, cb = this._scene._beforeRenderingGroupDrawStage; bb < cb.length; bb++) {
            cb[bb].action(nb)
          }
          fb.render(bb, kb, sb, cb, Wb, Tb, Ub, Ib, Hb);
          for (let bb = 0, cb = this._scene._afterRenderingGroupDrawStage; bb < cb.length; bb++) {
            cb[bb].action(nb)
          }
          this._scene.onAfterRenderingGroupObservable.notifyObservers(Mb, Xb)
        }
      }
      reset() {
        if (!this.maintainStateBetweenFrames)
          for (let bb = ab.MIN_RENDERINGGROUPS; bb < ab.MAX_RENDERINGGROUPS; bb++) {
            const cb = this._renderingGroups[bb];
            cb && cb.prepare()
          }
      }
      resetSprites() {
        if (!this.maintainStateBetweenFrames)
          for (let bb = ab.MIN_RENDERINGGROUPS; bb < ab.MAX_RENDERINGGROUPS; bb++) {
            const cb = this._renderingGroups[bb];
            cb && cb.prepareSprites()
          }
      }
      dispose() {
        this.freeRenderingGroups(), this._renderingGroups.length = 0, this._renderingGroupInfo = null
      }
      freeRenderingGroups() {
        for (let bb = ab.MIN_RENDERINGGROUPS; bb < ab.MAX_RENDERINGGROUPS; bb++) {
          const cb = this._renderingGroups[bb];
          cb && cb.dispose()
        }
      }
      _prepareRenderingGroup(bb) {
        void 0 === this._renderingGroups[bb] && (this._renderingGroups[bb] = new kb.e(bb, this._scene, this._customOpaqueSortCompareFn[bb], this._customAlphaTestSortCompareFn[bb], this._customTransparentSortCompareFn[bb]), this._renderingGroups[bb].disableDepthPrePass = this._disableDepthPrePass)
      }
      dispatchSprites(bb) {
        this.maintainStateBetweenFrames && bb._wasDispatched || (bb._wasDispatched = !0, this.getRenderingGroup(bb.renderingGroupId).dispatchSprites(bb))
      }
      dispatchParticles(bb) {
        this.maintainStateBetweenFrames && bb._wasDispatched || (bb._wasDispatched = !0, this.getRenderingGroup(bb.renderingGroupId).dispatchParticles(bb))
      }
      dispatch(bb, cb, sb) {
        void 0 === cb && (cb = bb.getMesh()), this.maintainStateBetweenFrames && bb._wasDispatched || (bb._wasDispatched = !0, this.getRenderingGroup(cb.renderingGroupId).dispatch(bb, cb, sb))
      }
      setRenderingOrder(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          sb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          kb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        if (this._customOpaqueSortCompareFn[bb] = cb, this._customAlphaTestSortCompareFn[bb] = sb, this._customTransparentSortCompareFn[bb] = kb, this._renderingGroups[bb]) {
          const cb = this._renderingGroups[bb];
          cb.opaqueSortCompareFn = this._customOpaqueSortCompareFn[bb], cb.alphaTestSortCompareFn = this._customAlphaTestSortCompareFn[bb], cb.transparentSortCompareFn = this._customTransparentSortCompareFn[bb]
        }
      }
      setRenderingAutoClearDepthStencil(bb, cb) {
        let sb = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          kb = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        this._autoClearDepthStencil[bb] = {
          autoClear: cb,
          depth: sb,
          stencil: kb
        }
      }
      getAutoClearDepthStencilSetup(bb) {
        return this._autoClearDepthStencil[bb]
      }
    }
    ab.MAX_RENDERINGGROUPS = 4, ab.MIN_RENDERINGGROUPS = 0, ab.AUTOCLEAR = !0
  },
  39320: (bb, cb, sb) => {
    sb.d(cb, {
      b: () => kb
    });
    class kb {
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
        let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        this._alphaBlend[cb] !== bb && (bb ? this._numTargetEnabled++ : this._numTargetEnabled--, this._alphaBlend[cb] = bb, this._isAlphaBlendDirty = !0)
      }
      setAlphaBlendConstants(bb, cb, sb, kb) {
        this._blendConstants[0] === bb && this._blendConstants[1] === cb && this._blendConstants[2] === sb && this._blendConstants[3] === kb || (this._blendConstants[0] = bb, this._blendConstants[1] = cb, this._blendConstants[2] = sb, this._blendConstants[3] = kb, this._isBlendConstantsDirty = !0)
      }
      setAlphaBlendFunctionParameters(bb, cb, sb, kb) {
        const Wb = 4 * (arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0);
        this._blendFunctionParameters[Wb + 0] === bb && this._blendFunctionParameters[Wb + 1] === cb && this._blendFunctionParameters[Wb + 2] === sb && this._blendFunctionParameters[Wb + 3] === kb || (this._blendFunctionParameters[Wb + 0] = bb, this._blendFunctionParameters[Wb + 1] = cb, this._blendFunctionParameters[Wb + 2] = sb, this._blendFunctionParameters[Wb + 3] = kb, this._isBlendFunctionParametersDirty = !0)
      }
      setAlphaEquationParameters(bb, cb) {
        const sb = 2 * (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0);
        this._blendEquationParameters[sb + 0] === bb && this._blendEquationParameters[sb + 1] === cb || (this._blendEquationParameters[sb + 0] = bb, this._blendEquationParameters[sb + 1] = cb, this._isBlendEquationParametersDirty = !0)
      }
      reset() {
        this._alphaBlend.fill(!1), this._numTargetEnabled = 0, this._blendFunctionParameters.fill(null), this._blendEquationParameters.fill(null), this._blendConstants[0] = null, this._blendConstants[1] = null, this._blendConstants[2] = null, this._blendConstants[3] = null, this._isAlphaBlendDirty = !0, this._isBlendFunctionParametersDirty = !1, this._isBlendEquationParametersDirty = !1, this._isBlendConstantsDirty = !1, this._blendDisabledTargetsMask = 0, this._numTargets = 1
      }
      apply(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          sb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (this._numTargets !== cb && (this._numTargets = cb, this._isAlphaBlendDirty = !0), this._blendDisabledTargetsMask !== sb && (this._blendDisabledTargetsMask = sb, this._isAlphaBlendDirty = !0), !this.isDirty) return;
        if (this._isBlendConstantsDirty && (bb.blendColor(this._blendConstants[0], this._blendConstants[1], this._blendConstants[2], this._blendConstants[3]), this._isBlendConstantsDirty = !1), 1 === cb || !this._supportBlendParametersPerTarget) {
          if (this._isAlphaBlendDirty) {
            if (cb > 1 && 0 !== sb && this.alphaBlend) throw new Error("AlphaState: blending with integer MRT attachments requires per-target blend parameters");
            this._alphaBlend[0] && 0 === (1 & sb) ? bb.enable(bb.BLEND) : bb.disable(bb.BLEND), this._isAlphaBlendDirty = !1
          }
          return this._isBlendFunctionParametersDirty && (bb.blendFuncSeparate(this._blendFunctionParameters[0], this._blendFunctionParameters[1], this._blendFunctionParameters[2], this._blendFunctionParameters[3]), this._isBlendFunctionParametersDirty = !1), void(this._isBlendEquationParametersDirty && (bb.blendEquationSeparate(this._blendEquationParameters[0], this._blendEquationParameters[1]), this._isBlendEquationParametersDirty = !1))
        }
        const kb = bb;
        if (this._isAlphaBlendDirty) {
          for (let Wb = 0; Wb < cb; Wb++) {
            const cb = Wb < this._numTargetEnabled ? Wb : 0;
            this._alphaBlend[cb] && 0 === (sb & 1 << Wb) ? kb.enableIndexed(bb.BLEND, Wb) : kb.disableIndexed(bb.BLEND, Wb)
          }
          this._isAlphaBlendDirty = !1
        }
        if (this._isBlendFunctionParametersDirty) {
          for (let bb = 0; bb < cb; bb++) {
            const cb = bb < this._numTargetEnabled ? 4 * bb : 0;
            kb.blendFuncSeparateIndexed(bb, this._blendFunctionParameters[cb + 0], this._blendFunctionParameters[cb + 1], this._blendFunctionParameters[cb + 2], this._blendFunctionParameters[cb + 3])
          }
          this._isBlendFunctionParametersDirty = !1
        }
        if (this._isBlendEquationParametersDirty) {
          for (let bb = 0; bb < cb; bb++) {
            const cb = bb < this._numTargetEnabled ? 2 * bb : 0;
            kb.blendEquationSeparateIndexed(bb, this._blendEquationParameters[cb + 0], this._blendEquationParameters[cb + 1])
          }
          this._isBlendEquationParametersDirty = !1
        }
      }
      setAlphaMode(bb, cb) {
        let sb = 32774;
        switch (bb) {
          case 0:
            break;
          case 7:
            this.setAlphaBlendFunctionParameters(1, 771, 1, 1, cb);
            break;
          case 8:
          case 14:
            this.setAlphaBlendFunctionParameters(1, 771, 1, 771, cb);
            break;
          case 2:
            this.setAlphaBlendFunctionParameters(770, 771, 1, 1, cb);
            break;
          case 6:
            this.setAlphaBlendFunctionParameters(1, 1, 0, 1, cb);
            break;
          case 1:
            this.setAlphaBlendFunctionParameters(770, 1, 0, 1, cb);
            break;
          case 3:
            this.setAlphaBlendFunctionParameters(0, 769, 1, 1, cb);
            break;
          case 4:
            this.setAlphaBlendFunctionParameters(774, 0, 1, 1, cb);
            break;
          case 5:
            this.setAlphaBlendFunctionParameters(770, 769, 1, 1, cb);
            break;
          case 9:
            this.setAlphaBlendFunctionParameters(32769, 32770, 32771, 32772, cb);
            break;
          case 10:
            this.setAlphaBlendFunctionParameters(1, 769, 1, 771, cb);
            break;
          case 11:
            this.setAlphaBlendFunctionParameters(1, 1, 1, 1, cb);
            break;
          case 12:
            this.setAlphaBlendFunctionParameters(772, 1, 0, 0, cb);
            break;
          case 13:
            this.setAlphaBlendFunctionParameters(775, 769, 773, 771, cb);
            break;
          case 15:
            this.setAlphaBlendFunctionParameters(1, 1, 1, 0, cb);
            break;
          case 16:
            this.setAlphaBlendFunctionParameters(775, 769, 0, 1, cb);
            break;
          case 17:
            this.setAlphaBlendFunctionParameters(770, 771, 1, 771, cb);
            break;
          case 18:
            this.setAlphaBlendFunctionParameters(1, 1, 1, 1, cb), sb = 32775;
            break;
          case 19:
            this.setAlphaBlendFunctionParameters(1, 1, 1, 1, cb), sb = 32776;
            break;
          case 20:
            this.setAlphaBlendFunctionParameters(1, 35065, 0, 1, cb);
            break;
          case 21:
            this.setAlphaBlendFunctionParameters(1, 0, 1, 771, cb)
        }
        this.setAlphaEquationParameters(sb, sb, cb)
      }
    }
  },
  39638: (bb, cb, sb) => {
    sb.d(cb, {
      c: () => kb
    });
    class kb {}
    kb._IsPickingAvailable = !1
  },
  39524: (bb, cb, sb) => {
    sb.d(cb, {
      b: () => Us,
      c: () => as
    });
    var kb = sb(39531),
      Wb = sb(39307),
      ab = sb(39314),
      Tb = sb(36683),
      Ub = sb(39536);
    class Ib {
      constructor() {
        this._count = 0, this._data = {}
      }
      ssb(bb) {
        this.clear(), bb.forEach(((bb, cb) => this.add(bb, cb)))
      }
      get(bb) {
        const cb = this._data[bb];
        if (void 0 !== cb) return cb
      }
      getOrAddWithFactory(bb, cb) {
        let sb = this.get(bb);
        return void 0 !== sb || (sb = cb(bb), sb && this.add(bb, sb)), sb
      }
      getOrAdd(bb, cb) {
        const sb = this.get(bb);
        return void 0 !== sb ? sb : (this.add(bb, cb), cb)
      }
      contains(bb) {
        return void 0 !== this._data[bb]
      }
      add(bb, cb) {
        return void 0 === this._data[bb] && (this._data[bb] = cb, ++this._count, !0)
      }
      set(bb, cb) {
        return void 0 !== this._data[bb] && (this._data[bb] = cb, !0)
      }
      getAndRemove(bb) {
        const cb = this.get(bb);
        return void 0 !== cb ? (delete this._data[bb], --this._count, cb) : null
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
        for (const cb in this._data) {
          bb(cb, this._data[cb])
        }
      }
      first(bb) {
        for (const cb in this._data) {
          const sb = bb(cb, this._data[cb]);
          if (sb) return sb
        }
        return null
      }
    }
    var Hb = sb(39449),
      fb = sb(36656),
      Mb = sb(39544),
      Xb = sb(39563),
      nb = sb(39568);
    class mb {
      constructor(bb, cb, sb, kb, Wb, ab) {
        this.source = bb, this.pointerX = cb, this.pointerY = sb, this.meshUnderPointer = kb, this.sourceEvent = Wb, this.additionalData = ab
      }
      static CreateNew(bb, cb, sb) {
        const kb = bb.EY();
        return new mb(bb, kb.pointerX, kb.pointerY, kb.meshUnderPointer || bb, cb, sb)
      }
      static CreateNewFromSprite(bb, cb, sb, kb) {
        return new mb(bb, cb.pointerX, cb.pointerY, cb.meshUnderPointer, sb, kb)
      }
      static CreateNewFromScene(bb, cb) {
        return new mb(null, bb.pointerX, bb.pointerY, bb.meshUnderPointer, cb)
      }
      static CreateNewFromPrimitive(bb, cb, sb, kb) {
        return new mb(bb, cb.x, cb.y, null, sb, kb)
      }
    }
    var lb = sb(39582),
      Qb = sb(39586),
      eb = sb(39593),
      Cb = sb(39608),
      Nb = sb(39278),
      Vb = sb(36677),
      Lb = sb(39296),
      ub = sb(39613);
    class Yb {
      constructor() {
        this.hoverCursor = "", this.actions = [], this.isRecursive = !1, this.disposeWhenUnowned = !0
      }
      static get HasTriggers() {
        for (const bb in Yb.Triggers)
          if (Object.prototype.hasOwnProperty.call(Yb.Triggers, bb)) return !0;
        return !1
      }
      static get HasPickTriggers() {
        for (const bb in Yb.Triggers)
          if (Object.prototype.hasOwnProperty.call(Yb.Triggers, bb)) {
            const cb = parseInt(bb);
            if (cb >= 1 && cb <= 7) return !0
          } return !1
      }
      static HasSpecificTrigger(bb) {
        for (const cb in Yb.Triggers)
          if (Object.prototype.hasOwnProperty.call(Yb.Triggers, cb)) {
            if (parseInt(cb) === bb) return !0
          } return !1
      }
    }
    Yb.Triggers = {};
    var hb, Jb, gb, Bb, tb, yb, Pb, Db = sb(39622);
    ! function(bb) {
      bb[bb.Generic = 0] = "Generic", bb[bb.Keyboard = 1] = "Keyboard", bb[bb.Mouse = 2] = "Mouse", bb[bb.Touch = 3] = "Touch", bb[bb.DualShock = 4] = "DualShock", bb[bb.Xbox = 5] = "Xbox", bb[bb.Switch = 6] = "Switch", bb[bb.DualSense = 7] = "DualSense"
    }(hb || (hb = {})),
    function(bb) {
      bb[bb.Horizontal = 0] = "Horizontal", bb[bb.Vertical = 1] = "Vertical", bb[bb.LeftClick = 2] = "LeftClick", bb[bb.MiddleClick = 3] = "MiddleClick", bb[bb.RightClick = 4] = "RightClick", bb[bb.BrowserBack = 5] = "BrowserBack", bb[bb.BrowserForward = 6] = "BrowserForward", bb[bb.MouseWheelX = 7] = "MouseWheelX", bb[bb.MouseWheelY = 8] = "MouseWheelY", bb[bb.MouseWheelZ = 9] = "MouseWheelZ", bb[bb.Move = 12] = "Move"
    }(Jb || (Jb = {})),
    function(bb) {
      bb[bb.Horizontal = 0] = "Horizontal", bb[bb.Vertical = 1] = "Vertical", bb[bb.LeftClick = 2] = "LeftClick", bb[bb.MiddleClick = 3] = "MiddleClick", bb[bb.RightClick = 4] = "RightClick", bb[bb.BrowserBack = 5] = "BrowserBack", bb[bb.BrowserForward = 6] = "BrowserForward", bb[bb.MouseWheelX = 7] = "MouseWheelX", bb[bb.MouseWheelY = 8] = "MouseWheelY", bb[bb.MouseWheelZ = 9] = "MouseWheelZ", bb[bb.DeltaHorizontal = 10] = "DeltaHorizontal", bb[bb.DeltaVertical = 11] = "DeltaVertical"
    }(gb || (gb = {})),
    function(bb) {
      bb[bb.Cross = 0] = "Cross", bb[bb.Circle = 1] = "Circle", bb[bb.Square = 2] = "Square", bb[bb.Triangle = 3] = "Triangle", bb[bb.L1 = 4] = "L1", bb[bb.R1 = 5] = "R1", bb[bb.L2 = 6] = "L2", bb[bb.R2 = 7] = "R2", bb[bb.Share = 8] = "Share", bb[bb.Options = 9] = "Options", bb[bb.L3 = 10] = "L3", bb[bb.R3 = 11] = "R3", bb[bb.DPadUp = 12] = "DPadUp", bb[bb.DPadDown = 13] = "DPadDown", bb[bb.DPadLeft = 14] = "DPadLeft", bb[bb.DPadRight = 15] = "DPadRight", bb[bb.Home = 16] = "Home", bb[bb.TouchPad = 17] = "TouchPad", bb[bb.LStickXAxis = 18] = "LStickXAxis", bb[bb.LStickYAxis = 19] = "LStickYAxis", bb[bb.RStickXAxis = 20] = "RStickXAxis", bb[bb.RStickYAxis = 21] = "RStickYAxis"
    }(Bb || (Bb = {})),
    function(bb) {
      bb[bb.Cross = 0] = "Cross", bb[bb.Circle = 1] = "Circle", bb[bb.Square = 2] = "Square", bb[bb.Triangle = 3] = "Triangle", bb[bb.L1 = 4] = "L1", bb[bb.R1 = 5] = "R1", bb[bb.L2 = 6] = "L2", bb[bb.R2 = 7] = "R2", bb[bb.Create = 8] = "Create", bb[bb.Options = 9] = "Options", bb[bb.L3 = 10] = "L3", bb[bb.R3 = 11] = "R3", bb[bb.DPadUp = 12] = "DPadUp", bb[bb.DPadDown = 13] = "DPadDown", bb[bb.DPadLeft = 14] = "DPadLeft", bb[bb.DPadRight = 15] = "DPadRight", bb[bb.Home = 16] = "Home", bb[bb.TouchPad = 17] = "TouchPad", bb[bb.LStickXAxis = 18] = "LStickXAxis", bb[bb.LStickYAxis = 19] = "LStickYAxis", bb[bb.RStickXAxis = 20] = "RStickXAxis", bb[bb.RStickYAxis = 21] = "RStickYAxis"
    }(tb || (tb = {})),
    function(bb) {
      bb[bb.A = 0] = "A", bb[bb.B = 1] = "B", bb[bb.X = 2] = "X", bb[bb.Y = 3] = "Y", bb[bb.LB = 4] = "LB", bb[bb.RB = 5] = "RB", bb[bb.LT = 6] = "LT", bb[bb.RT = 7] = "RT", bb[bb.Back = 8] = "Back", bb[bb.Start = 9] = "Start", bb[bb.LS = 10] = "LS", bb[bb.RS = 11] = "RS", bb[bb.DPadUp = 12] = "DPadUp", bb[bb.DPadDown = 13] = "DPadDown", bb[bb.DPadLeft = 14] = "DPadLeft", bb[bb.DPadRight = 15] = "DPadRight", bb[bb.Home = 16] = "Home", bb[bb.LStickXAxis = 17] = "LStickXAxis", bb[bb.LStickYAxis = 18] = "LStickYAxis", bb[bb.RStickXAxis = 19] = "RStickXAxis", bb[bb.RStickYAxis = 20] = "RStickYAxis"
    }(yb || (yb = {})),
    function(bb) {
      bb[bb.B = 0] = "B", bb[bb.A = 1] = "A", bb[bb.Y = 2] = "Y", bb[bb.X = 3] = "X", bb[bb.L = 4] = "L", bb[bb.R = 5] = "R", bb[bb.ZL = 6] = "ZL", bb[bb.ZR = 7] = "ZR", bb[bb.Minus = 8] = "Minus", bb[bb.Plus = 9] = "Plus", bb[bb.LS = 10] = "LS", bb[bb.RS = 11] = "RS", bb[bb.DPadUp = 12] = "DPadUp", bb[bb.DPadDown = 13] = "DPadDown", bb[bb.DPadLeft = 14] = "DPadLeft", bb[bb.DPadRight = 15] = "DPadRight", bb[bb.Home = 16] = "Home", bb[bb.Capture = 17] = "Capture", bb[bb.LStickXAxis = 18] = "LStickXAxis", bb[bb.LStickYAxis = 19] = "LStickYAxis", bb[bb.RStickXAxis = 20] = "RStickXAxis", bb[bb.RStickYAxis = 21] = "RStickYAxis"
    }(Pb || (Pb = {}));
    var Eb = sb(39630);
    class ib {
      static CreateDeviceEvent(bb, cb, sb, kb, Wb, ab, Tb) {
        switch (bb) {
          case hb.Keyboard:
            return this._CreateKeyboardEvent(sb, kb, Wb, ab);
          case hb.Mouse:
            if (sb === Jb.MouseWheelX || sb === Jb.MouseWheelY || sb === Jb.MouseWheelZ) return this._CreateWheelEvent(bb, cb, sb, kb, Wb, ab);
          case hb.Touch:
            return this._CreatePointerEvent(bb, cb, sb, kb, Wb, ab, Tb);
          default:
            throw `Unable to generate event for device ${hb[bb]}`
        }
      }
      static _CreatePointerEvent(bb, cb, sb, kb, Wb, ab, Tb) {
        const Ub = this._CreateMouseEvent(bb, cb, sb, kb, Wb, ab);
        bb === hb.Mouse ? (Ub.deviceType = hb.Mouse, Ub.pointerId = 1, Ub.pointerType = "mouse") : (Ub.deviceType = hb.Touch, Ub.pointerId = Tb ?? cb, Ub.pointerType = "touch");
        let Ib = 0;
        return Ib += Wb.pollInput(bb, cb, Jb.LeftClick), Ib += 2 * Wb.pollInput(bb, cb, Jb.RightClick), Ib += 4 * Wb.pollInput(bb, cb, Jb.MiddleClick), Ub.buttons = Ib, sb === Jb.Move ? Ub.type = "pointermove" : sb >= Jb.LeftClick && sb <= Jb.RightClick && (Ub.type = 1 === kb ? "pointerdown" : "pointerup", Ub.button = sb - 2), Ub
      }
      static _CreateWheelEvent(bb, cb, sb, kb, Wb, ab) {
        const Tb = this._CreateMouseEvent(bb, cb, sb, kb, Wb, ab);
        switch (Tb.pointerId = 1, Tb.type = "wheel", Tb.deltaMode = Eb.c.DOM_DELTA_PIXEL, Tb.deltaX = 0, Tb.deltaY = 0, Tb.deltaZ = 0, sb) {
          case Jb.MouseWheelX:
            Tb.deltaX = kb;
            break;
          case Jb.MouseWheelY:
            Tb.deltaY = kb;
            break;
          case Jb.MouseWheelZ:
            Tb.deltaZ = kb
        }
        return Tb
      }
      static _CreateMouseEvent(bb, cb, sb, kb, Wb, ab) {
        const Tb = this._CreateEvent(ab),
          Ub = Wb.pollInput(bb, cb, Jb.Horizontal),
          Ib = Wb.pollInput(bb, cb, Jb.Vertical);
        return ab ? (Tb.movementX = 0, Tb.movementY = 0, Tb.offsetX = Tb.movementX - ab.getBoundingClientRect().x, Tb.offsetY = Tb.movementY - ab.getBoundingClientRect().y) : (Tb.movementX = Wb.pollInput(bb, cb, 10), Tb.movementY = Wb.pollInput(bb, cb, 11), Tb.offsetX = 0, Tb.offsetY = 0), this._CheckNonCharacterKeys(Tb, Wb), Tb.clientX = Ub, Tb.clientY = Ib, Tb.x = Ub, Tb.y = Ib, Tb.deviceType = bb, Tb.deviceSlot = cb, Tb.inputIndex = sb, Tb
      }
      static _CreateKeyboardEvent(bb, cb, sb, kb) {
        const Wb = this._CreateEvent(kb);
        return this._CheckNonCharacterKeys(Wb, sb), Wb.deviceType = hb.Keyboard, Wb.deviceSlot = 0, Wb.inputIndex = bb, Wb.type = 1 === cb ? "keydown" : "keyup", Wb.key = String.fromCharCode(bb), Wb.keyCode = bb, Wb
      }
      static _CheckNonCharacterKeys(bb, cb) {
        const sb = cb.isDeviceAvailable(hb.Keyboard),
          kb = sb && 1 === cb.pollInput(hb.Keyboard, 0, 18),
          Wb = sb && 1 === cb.pollInput(hb.Keyboard, 0, 17),
          ab = sb && (1 === cb.pollInput(hb.Keyboard, 0, 91) || 1 === cb.pollInput(hb.Keyboard, 0, 92) || 1 === cb.pollInput(hb.Keyboard, 0, 93)),
          Tb = sb && 1 === cb.pollInput(hb.Keyboard, 0, 16);
        bb.altKey = kb, bb.ctrlKey = Wb, bb.metaKey = ab, bb.shiftKey = Tb
      }
      static _CreateEvent(bb) {
        const cb = {
          preventDefault: () => {}
        };
        return cb.target = bb, cb
      }
    }
    class Ob {
      constructor(bb, cb, sb) {
        this._nativeInput = _native.DeviceInputSystem ? new _native.DeviceInputSystem(bb, cb, ((bb, cb, kb, Wb) => {
          const ab = ib.CreateDeviceEvent(bb, cb, kb, Wb, this);
          sb(bb, cb, ab)
        })) : this._createDummyNativeInput()
      }
      pollInput(bb, cb, sb) {
        return this._nativeInput.pollInput(bb, cb, sb)
      }
      isDeviceAvailable(bb) {
        return bb === hb.Mouse || bb === hb.Touch
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
    const Gb = Object.keys(Jb).length / 2;
    class Kb {
      constructor(bb, cb, sb, Wb) {
        this._inputs = [], this._keyboardActive = !1, this._pointerActive = !1, this._usingSafari = kb.g.IsSafari(), this._usingMacOs = (0, Nb.h)() && /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform), this._keyboardDownEvent = bb => {}, this._keyboardUpEvent = bb => {}, this._keyboardBlurEvent = bb => {}, this._pointerMoveEvent = bb => {}, this._pointerDownEvent = bb => {}, this._pointerUpEvent = bb => {}, this._pointerCancelEvent = bb => {}, this._pointerCancelTouch = bb => {}, this._pointerLeaveEvent = bb => {}, this._pointerWheelEvent = bb => {}, this._pointerBlurEvent = bb => {}, this._pointerMacOsChromeOutEvent = bb => {}, this._eventsAttached = !1, this._mouseId = -1, this._isUsingFirefox = (0, Nb.h)() && navigator.userAgent && -1 !== navigator.userAgent.indexOf("Firefox"), this._isUsingChromium = (0, Nb.h)() && navigator.userAgent && -1 !== navigator.userAgent.indexOf("Chrome"), this._maxTouchPoints = 0, this._pointerInputClearObserver = null, this._gamepadConnectedEvent = bb => {}, this._gamepadDisconnectedEvent = bb => {}, this._eventPrefix = kb.g.GetPointerPrefix(bb), this._engine = bb, this._onDeviceConnected = cb, this._onDeviceDisconnected = sb, this._onInputChanged = Wb, this._mouseId = this._isUsingFirefox ? 0 : 1, this._enableEvents(), this._usingMacOs && (this._metaKeys = []), this._engine._onEngineViewChanged || (this._engine._onEngineViewChanged = () => {
          this._enableEvents()
        })
      }
      pollInput(bb, cb, sb) {
        const Wb = this._inputs[bb][cb];
        if (!Wb) throw `Unable to find device ${hb[bb]}`;
        bb >= hb.DualShock && bb <= hb.DualSense && this._updateDevice(bb, cb, sb);
        const ab = Wb[sb];
        if (void 0 === ab) throw `Unable to find input ${sb} for device ${hb[bb]} in slot ${cb}`;
        return sb === Jb.Move && kb.g.Warn("Unable to provide information for PointerInput.Move.  Try using PointerInput.Horizontal or PointerInput.Vertical for move data."), ab
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
                for (const cb in bb) {
                  const sb = bb[+cb];
                  if (sb)
                    for (let bb = 0; bb < sb.length; bb++) sb[bb] = 0
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
          for (const cb of bb) cb && this._addGamePad(cb)
        }
        "function" === typeof matchMedia && matchMedia("(pointer:fine)").matches && this._addPointerDevice(hb.Mouse, 0, 0, 0)
      }
      _addGamePad(bb) {
        const cb = this._getGamepadDeviceType(bb.id),
          sb = bb.index;
        this._gamepads = this._gamepads || new Array(bb.index + 1), this._registerDevice(cb, sb, bb.buttons.length + bb.axes.length), this._gamepads[sb] = cb
      }
      _addPointerDevice(bb, cb, sb, kb) {
        this._pointerActive || (this._pointerActive = !0), this._registerDevice(bb, cb, Gb);
        const Wb = this._inputs[bb][cb];
        Wb[0] = sb, Wb[1] = kb
      }
      _registerDevice(bb, cb, sb) {
        if (void 0 === cb) throw `Unable to register device ${hb[bb]} to undefined slot.`;
        if (this._inputs[bb] || (this._inputs[bb] = {}), !this._inputs[bb][cb]) {
          const kb = new Array(sb);
          kb.fill(0), this._inputs[bb][cb] = kb, this._onDeviceConnected(bb, cb)
        }
      }
      _unregisterDevice(bb, cb) {
        this._inputs[bb][cb] && (delete this._inputs[bb][cb], this._onDeviceDisconnected(bb, cb))
      }
      _handleKeyActions() {
        this._keyboardDownEvent = bb => {
          this._keyboardActive || (this._keyboardActive = !0, this._registerDevice(hb.Keyboard, 0, 255));
          const cb = this._inputs[hb.Keyboard][0];
          if (cb) {
            cb[bb.keyCode] = 1;
            const sb = bb;
            sb.inputIndex = bb.keyCode, this._usingMacOs && bb.metaKey && "Meta" !== bb.key && (this._metaKeys.includes(bb.keyCode) || this._metaKeys.push(bb.keyCode)), this._onInputChanged(hb.Keyboard, 0, sb)
          }
        }, this._keyboardUpEvent = bb => {
          this._keyboardActive || (this._keyboardActive = !0, this._registerDevice(hb.Keyboard, 0, 255));
          const cb = this._inputs[hb.Keyboard][0];
          if (cb) {
            cb[bb.keyCode] = 0;
            const sb = bb;
            if (sb.inputIndex = bb.keyCode, this._usingMacOs && "Meta" === bb.key && this._metaKeys.length > 0) {
              for (const bb of this._metaKeys) {
                const sb = ib.CreateDeviceEvent(hb.Keyboard, 0, bb, 0, this, this._elementToAttachTo);
                cb[bb] = 0, this._onInputChanged(hb.Keyboard, 0, sb)
              }
              this._metaKeys.splice(0, this._metaKeys.length)
            }
            this._onInputChanged(hb.Keyboard, 0, sb)
          }
        }, this._keyboardBlurEvent = () => {
          if (this._keyboardActive) {
            const bb = this._inputs[hb.Keyboard][0];
            for (let cb = 0; cb < bb.length; cb++)
              if (0 !== bb[cb]) {
                bb[cb] = 0;
                const sb = ib.CreateDeviceEvent(hb.Keyboard, 0, cb, 0, this, this._elementToAttachTo);
                this._onInputChanged(hb.Keyboard, 0, sb)
              } this._usingMacOs && this._metaKeys.splice(0, this._metaKeys.length)
          }
        }, this._elementToAttachTo.addEventListener("keydown", this._keyboardDownEvent), this._elementToAttachTo.addEventListener("keyup", this._keyboardUpEvent), this._elementToAttachTo.addEventListener("blur", this._keyboardBlurEvent)
      }
      _handlePointerActions() {
        this._maxTouchPoints = (0, Nb.h)() && navigator.maxTouchPoints || 2, this._activeTouchIds || (this._activeTouchIds = new Array(this._maxTouchPoints));
        for (let kb = 0; kb < this._maxTouchPoints; kb++) this._activeTouchIds[kb] = -1;
        this._pointerMoveEvent = bb => {
          const cb = this._getPointerType(bb);
          let sb = cb === hb.Mouse ? 0 : this._activeTouchIds.indexOf(bb.pointerId);
          if (cb === hb.Touch && -1 === sb) {
            if (0 === bb.buttons) return;
            const Wb = this._activeTouchIds.indexOf(-1);
            if (!(Wb >= 0)) return void kb.g.Warn(`Max number of touches exceeded.  Ignoring touches in excess of ${this._maxTouchPoints}`);
            sb = Wb, this._activeTouchIds[Wb] = bb.pointerId, this._onDeviceConnected(cb, sb)
          }
          this._inputs[cb] || (this._inputs[cb] = {}), this._inputs[cb][sb] || this._addPointerDevice(cb, sb, bb.clientX, bb.clientY);
          const Wb = this._inputs[cb][sb];
          if (Wb) {
            const kb = bb;
            kb.inputIndex = Jb.Move, Wb[Jb.Horizontal] = bb.clientX, Wb[Jb.Vertical] = bb.clientY, cb === hb.Touch && 0 === Wb[Jb.LeftClick] && (Wb[Jb.LeftClick] = 1), void 0 === bb.pointerId && (bb.pointerId = this._mouseId), this._onInputChanged(cb, sb, kb), this._usingSafari || -1 === bb.button || (kb.inputIndex = bb.button + 2, Wb[bb.button + 2] = Wb[bb.button + 2] ? 0 : 1, this._onInputChanged(cb, sb, kb))
          }
        }, this._pointerDownEvent = bb => {
          const cb = this._getPointerType(bb);
          let sb = cb === hb.Mouse ? 0 : bb.pointerId;
          if (cb === hb.Touch) {
            let cb = this._activeTouchIds.indexOf(bb.pointerId);
            if (-1 === cb && (cb = this._activeTouchIds.indexOf(-1)), !(cb >= 0)) return void kb.g.Warn(`Max number of touches exceeded.  Ignoring touches in excess of ${this._maxTouchPoints}`);
            sb = cb, this._activeTouchIds[cb] = bb.pointerId
          }
          this._inputs[cb] || (this._inputs[cb] = {}), this._inputs[cb][sb] ? cb === hb.Touch && this._onDeviceConnected(cb, sb) : this._addPointerDevice(cb, sb, bb.clientX, bb.clientY);
          const Wb = this._inputs[cb][sb];
          if (Wb) {
            const kb = Wb[Jb.Horizontal],
              Tb = Wb[Jb.Vertical];
            if (cb === hb.Mouse) {
              if (void 0 === bb.pointerId && (bb.pointerId = this._mouseId), !document.pointerLockElement) try {
                this._elementToAttachTo.setPointerCapture(this._mouseId)
              } catch (ab) {}
            } else if (bb.pointerId && !document.pointerLockElement) try {
              this._elementToAttachTo.setPointerCapture(bb.pointerId)
            } catch (ab) {}
            Wb[Jb.Horizontal] = bb.clientX, Wb[Jb.Vertical] = bb.clientY, Wb[bb.button + 2] = 1;
            const Ub = bb;
            Ub.inputIndex = bb.button + 2, this._onInputChanged(cb, sb, Ub), kb === bb.clientX && Tb === bb.clientY || (Ub.inputIndex = Jb.Move, this._onInputChanged(cb, sb, Ub))
          }
        }, this._pointerUpEvent = bb => {
          const cb = this._getPointerType(bb),
            sb = cb === hb.Mouse ? 0 : this._activeTouchIds.indexOf(bb.pointerId);
          if (cb === hb.Touch) {
            if (-1 === sb) return;
            this._activeTouchIds[sb] = -1
          }
          const kb = this._inputs[cb]?.[sb];
          let Wb = bb.button,
            ab = kb && 0 !== kb[Wb + 2];
          if (!ab && this._isUsingFirefox && this._usingMacOs && kb && (Wb = 2 === Wb ? 0 : 2, ab = 0 !== kb[Wb + 2]), ab) {
            const ab = kb[Jb.Horizontal],
              Tb = kb[Jb.Vertical];
            kb[Jb.Horizontal] = bb.clientX, kb[Jb.Vertical] = bb.clientY, kb[Wb + 2] = 0;
            const Ub = bb;
            void 0 === bb.pointerId && (bb.pointerId = this._mouseId), ab === bb.clientX && Tb === bb.clientY || (Ub.inputIndex = Jb.Move, this._onInputChanged(cb, sb, Ub)), Ub.inputIndex = Wb + 2, cb === hb.Mouse && this._mouseId >= 0 && this._elementToAttachTo.hasPointerCapture?.(this._mouseId) ? this._elementToAttachTo.releasePointerCapture(this._mouseId) : bb.pointerId && this._elementToAttachTo.hasPointerCapture?.(bb.pointerId) && this._elementToAttachTo.releasePointerCapture(bb.pointerId), this._onInputChanged(cb, sb, Ub), cb === hb.Touch && this._onDeviceDisconnected(cb, sb)
          }
        }, this._pointerCancelTouch = bb => {
          const cb = this._activeTouchIds.indexOf(bb);
          if (-1 === cb) return;
          this._elementToAttachTo.hasPointerCapture?.(bb) && this._elementToAttachTo.releasePointerCapture(bb), this._inputs[hb.Touch][cb][Jb.LeftClick] = 0;
          const sb = ib.CreateDeviceEvent(hb.Touch, cb, Jb.LeftClick, 0, this, this._elementToAttachTo, bb);
          this._onInputChanged(hb.Touch, cb, sb), this._activeTouchIds[cb] = -1, this._onDeviceDisconnected(hb.Touch, cb)
        }, this._pointerCancelEvent = bb => {
          if ("mouse" === bb.pointerType) {
            const bb = this._inputs[hb.Mouse][0];
            this._mouseId >= 0 && this._elementToAttachTo.hasPointerCapture?.(this._mouseId) && this._elementToAttachTo.releasePointerCapture(this._mouseId);
            for (let cb = Jb.LeftClick; cb <= Jb.BrowserForward; cb++)
              if (1 === bb[cb]) {
                bb[cb] = 0;
                const sb = ib.CreateDeviceEvent(hb.Mouse, 0, cb, 0, this, this._elementToAttachTo);
                this._onInputChanged(hb.Mouse, 0, sb)
              }
          } else this._pointerCancelTouch(bb.pointerId)
        }, this._pointerLeaveEvent = bb => {
          "pen" === bb.pointerType && this._pointerCancelTouch(bb.pointerId)
        }, this._wheelEventName = "onwheel" in document.createElement("div") ? "wheel" : void 0 !== document.onmousewheel ? "mousewheel" : "DOMMouseScroll";
        let bb = !1;
        const cb = function() {};
        try {
          const sb = Object.defineProperty({}, "passive", {
            get: function() {
              bb = !0
            }
          });
          this._elementToAttachTo.addEventListener("test", cb, sb), this._elementToAttachTo.removeEventListener("test", cb, sb)
        } catch (sb) {}
        this._pointerBlurEvent = () => {
          if (this.isDeviceAvailable(hb.Mouse)) {
            const bb = this._inputs[hb.Mouse][0];
            this._mouseId >= 0 && this._elementToAttachTo.hasPointerCapture?.(this._mouseId) && this._elementToAttachTo.releasePointerCapture(this._mouseId);
            for (let cb = Jb.LeftClick; cb <= Jb.BrowserForward; cb++)
              if (1 === bb[cb]) {
                bb[cb] = 0;
                const sb = ib.CreateDeviceEvent(hb.Mouse, 0, cb, 0, this, this._elementToAttachTo);
                this._onInputChanged(hb.Mouse, 0, sb)
              }
          }
          if (this.isDeviceAvailable(hb.Touch)) {
            const bb = this._inputs[hb.Touch];
            for (let cb = 0; cb < this._activeTouchIds.length; cb++) {
              const sb = this._activeTouchIds[cb];
              if (this._elementToAttachTo.hasPointerCapture?.(sb) && this._elementToAttachTo.releasePointerCapture(sb), -1 !== sb && 1 === bb[cb]?.[Jb.LeftClick]) {
                bb[cb][Jb.LeftClick] = 0;
                const kb = ib.CreateDeviceEvent(hb.Touch, cb, Jb.LeftClick, 0, this, this._elementToAttachTo, sb);
                this._onInputChanged(hb.Touch, cb, kb), this._activeTouchIds[cb] = -1, this._onDeviceDisconnected(hb.Touch, cb)
              }
            }
          }
        }, this._pointerWheelEvent = bb => {
          const cb = hb.Mouse;
          this._inputs[cb] || (this._inputs[cb] = []), this._inputs[cb][0] || (this._pointerActive = !0, this._registerDevice(cb, 0, Gb));
          const sb = this._inputs[cb][0];
          if (sb) {
            sb[Jb.MouseWheelX] = bb.deltaX || 0, sb[Jb.MouseWheelY] = bb.deltaY || bb.wheelDelta || 0, sb[Jb.MouseWheelZ] = bb.deltaZ || 0;
            const kb = bb;
            void 0 === bb.pointerId && (bb.pointerId = this._mouseId), 0 !== sb[Jb.MouseWheelX] && (kb.inputIndex = Jb.MouseWheelX, this._onInputChanged(cb, 0, kb)), 0 !== sb[Jb.MouseWheelY] && (kb.inputIndex = Jb.MouseWheelY, this._onInputChanged(cb, 0, kb)), 0 !== sb[Jb.MouseWheelZ] && (kb.inputIndex = Jb.MouseWheelZ, this._onInputChanged(cb, 0, kb))
          }
        }, this._usingMacOs && this._isUsingChromium && (this._pointerMacOsChromeOutEvent = bb => {
          bb.buttons > 1 && this._pointerCancelEvent(bb)
        }, this._elementToAttachTo.addEventListener("lostpointercapture", this._pointerMacOsChromeOutEvent)), this._elementToAttachTo.addEventListener(this._eventPrefix + "move", this._pointerMoveEvent), this._elementToAttachTo.addEventListener(this._eventPrefix + "down", this._pointerDownEvent), this._elementToAttachTo.addEventListener(this._eventPrefix + "up", this._pointerUpEvent), this._elementToAttachTo.addEventListener(this._eventPrefix + "cancel", this._pointerCancelEvent), this._elementToAttachTo.addEventListener(this._eventPrefix + "leave", this._pointerLeaveEvent), this._elementToAttachTo.addEventListener("blur", this._pointerBlurEvent), this._elementToAttachTo.addEventListener(this._wheelEventName, this._pointerWheelEvent, !!bb && {
          passive: !1
        }), this._pointerInputClearObserver = this._engine.onEndFrameObservable.add((() => {
          if (this.isDeviceAvailable(hb.Mouse)) {
            const bb = this._inputs[hb.Mouse][0];
            bb[Jb.MouseWheelX] = 0, bb[Jb.MouseWheelY] = 0, bb[Jb.MouseWheelZ] = 0
          }
        }))
      }
      _handleGamepadActions() {
        this._gamepadConnectedEvent = bb => {
          this._addGamePad(bb.gamepad)
        }, this._gamepadDisconnectedEvent = bb => {
          if (this._gamepads) {
            const cb = this._getGamepadDeviceType(bb.gamepad.id),
              sb = bb.gamepad.index;
            this._unregisterDevice(cb, sb), delete this._gamepads[sb]
          }
        }, window.addEventListener("gamepadconnected", this._gamepadConnectedEvent), window.addEventListener("gamepaddisconnected", this._gamepadDisconnectedEvent)
      }
      _updateDevice(bb, cb, sb) {
        const kb = navigator.getGamepads()[cb];
        if (kb && bb === this._gamepads[cb]) {
          const Wb = this._inputs[bb][cb];
          sb >= kb.buttons.length ? Wb[sb] = kb.axes[sb - kb.buttons.length].valueOf() : Wb[sb] = kb.buttons[sb].value
        }
      }
      _getGamepadDeviceType(bb) {
        return -1 !== bb.indexOf("054c") ? -1 !== bb.indexOf("0ce6") ? hb.DualSense : hb.DualShock : -1 !== bb.indexOf("Xbox One") || -1 !== bb.search("Xbox 360") || -1 !== bb.search("xinput") || -1 !== bb.indexOf("045e") && -1 === bb.indexOf("Surface Dock") ? hb.Xbox : -1 !== bb.indexOf("057e") ? hb.Switch : hb.Generic
      }
      _getPointerType(bb) {
        let cb = hb.Mouse;
        return ("touch" === bb.pointerType || "pen" === bb.pointerType || bb.touches) && (cb = hb.Touch), cb
      }
    }
    class Zb {
      constructor(bb, cb) {
        let sb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.deviceType = cb, this.deviceSlot = sb, this.onInputChangedObservable = new Tb.c, this._deviceInputSystem = bb
      }
      getInput(bb) {
        return this._deviceInputSystem.pollInput(this.deviceType, this.deviceSlot, bb)
      }
    }
    class zb {
      constructor(bb) {
        this._registeredManagers = new Array, this._refCount = 0, this.registerManager = bb => {
          for (let cb = 0; cb < this._devices.length; cb++) {
            const sb = this._devices[cb];
            for (const kb in sb) {
              const sb = +kb;
              bb._addDevice(new Zb(this._deviceInputSystem, cb, sb))
            }
          }
          this._registeredManagers.push(bb)
        }, this.unregisterManager = bb => {
          const cb = this._registeredManagers.indexOf(bb);
          cb > -1 && this._registeredManagers.splice(cb, 1)
        };
        const cb = Object.keys(hb).length / 2;
        this._devices = new Array(cb);
        const sb = (bb, cb) => {
            this._devices[bb] || (this._devices[bb] = new Array), this._devices[bb][cb] || (this._devices[bb][cb] = cb);
            for (const sb of this._registeredManagers) {
              const kb = new Zb(this._deviceInputSystem, bb, cb);
              sb._addDevice(kb)
            }
          },
          kb = (bb, cb) => {
            this._devices[bb]?.[cb] && delete this._devices[bb][cb];
            for (const sb of this._registeredManagers) sb._removeDevice(bb, cb)
          },
          Wb = (bb, cb, sb) => {
            if (sb)
              for (const kb of this._registeredManagers) kb._onInputChanged(bb, cb, sb)
          };
        "undefined" !== typeof _native ? this._deviceInputSystem = new Ob(sb, kb, Wb) : this._deviceInputSystem = new Kb(bb, sb, kb, Wb)
      }
      dispose() {
        this._deviceInputSystem.dispose()
      }
    }
    class qb {
      getDeviceSource(bb, cb) {
        if (void 0 === cb) {
          if (void 0 === this._firstDevice[bb]) return null;
          cb = this._firstDevice[bb]
        }
        return this._devices[bb] && void 0 !== this._devices[bb][cb] ? this._devices[bb][cb] : null
      }
      getDeviceSources(bb) {
        return this._devices[bb] ? this._devices[bb].filter((bb => !!bb)) : []
      }
      constructor(bb) {
        const cb = Object.keys(hb).length / 2;
        this._devices = new Array(cb), this._firstDevice = new Array(cb), this._engine = bb, this._engine._deviceSourceManager || (this._engine._deviceSourceManager = new zb(bb)), this._engine._deviceSourceManager._refCount++, this.onDeviceConnectedObservable = new Tb.c((bb => {
          for (const cb of this._devices)
            if (cb)
              for (const sb of cb) sb && this.onDeviceConnectedObservable.notifyObserver(bb, sb)
        })), this.onDeviceDisconnectedObservable = new Tb.c, this._engine._deviceSourceManager.registerManager(this), this._onDisposeObserver = bb.ZY.add((() => {
          this.dispose()
        }))
      }
      dispose() {
        this.onDeviceConnectedObservable.clear(), this.onDeviceDisconnectedObservable.clear(), this._engine._deviceSourceManager && (this._engine._deviceSourceManager.unregisterManager(this), --this._engine._deviceSourceManager._refCount < 1 && (this._engine._deviceSourceManager.dispose(), delete this._engine._deviceSourceManager)), this._engine.ZY.remove(this._onDisposeObserver)
      }
      _addDevice(bb) {
        this._devices[bb.deviceType] || (this._devices[bb.deviceType] = []), this._devices[bb.deviceType][bb.deviceSlot] || (this._devices[bb.deviceType][bb.deviceSlot] = bb, this._updateFirstDevices(bb.deviceType)), this.onDeviceConnectedObservable.notifyObservers(bb)
      }
      _removeDevice(bb, cb) {
        const sb = this._devices[bb]?.[cb];
        this.onDeviceDisconnectedObservable.notifyObservers(sb), this._devices[bb]?.[cb] && delete this._devices[bb][cb], this._updateFirstDevices(bb)
      }
      _onInputChanged(bb, cb, sb) {
        this._devices[bb]?.[cb]?.onInputChangedObservable.notifyObservers(sb)
      }
      _updateFirstDevices(bb) {
        switch (bb) {
          case hb.Keyboard:
          case hb.Mouse:
            this._firstDevice[bb] = 0;
            break;
          case hb.Touch:
          case hb.DualSense:
          case hb.DualShock:
          case hb.Xbox:
          case hb.Switch:
          case hb.Generic: {
            delete this._firstDevice[bb];
            const cb = this._devices[bb];
            if (cb)
              for (let sb = 0; sb < cb.length; sb++)
                if (cb[sb]) {
                  this._firstDevice[bb] = sb;
                  break
                } break
          }
        }
      }
    }
    var db = sb(39638);
    class Ab {
      constructor() {
        this._singleClick = !1, this._doubleClick = !1, this._hasSwiped = !1, this._ignore = !1
      }
      get singleClick() {
        return this._singleClick
      }
      get Kf() {
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
      set Kf(bb) {
        this._doubleClick = bb
      }
      set hasSwiped(bb) {
        this._hasSwiped = bb
      }
      set ignore(bb) {
        this._ignore = bb
      }
    }
    class wb {
      constructor(bb) {
        this._alreadyAttached = !1, this._meshPickProceed = !1, this._currentPickResult = null, this._previousPickResult = null, this._activePointerIds = new Array, this._activePointerIdsCount = 0, this._doubleClickOccured = !1, this._isSwiping = !1, this._swipeButtonPressed = -1, this._skipPointerTap = !1, this._isMultiTouchGesture = !1, this._pointerX = 0, this._pointerY = 0, this._startingPointerPosition = new fb.n(0, 0), this._previousStartingPointerPosition = new fb.n(0, 0), this._startingPointerTime = 0, this._previousStartingPointerTime = 0, this._pointerCaptures = {}, this._meshUnderPointerId = {}, this._movePointerInfo = null, this._latestPointerMoveEvents = new Map, this._cameraObserverCount = 0, this._delayedClicks = [null, null, null, null, null], this._deviceSourceManager = null, this._scene = bb || Vb.d.LastCreatedScene, this._scene
      }
      get meshUnderPointer() {
        return this._movePointerInfo && (this._movePointerInfo._generatePickInfo(), this._movePointerInfo = null), this._pointerOverMesh
      }
      getMeshUnderPointerByPointerId(bb) {
        return this._meshUnderPointerId[bb] || null
      }
      get unTranslatedPointer() {
        return new fb.n(this._unTranslatedPointerX, this._unTranslatedPointerY)
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
        const cb = this._scene.Sm().getInputElementClientRect();
        cb && (this._pointerX = bb.clientX - cb.left, this._pointerY = bb.clientY - cb.top, this._unTranslatedPointerX = this._pointerX, this._unTranslatedPointerY = this._pointerY)
      }
      _processPointerMove(bb, cb) {
        const sb = this._scene,
          kb = sb.Sm(),
          Wb = kb.getInputElement();
        Wb && (Wb.tabIndex = kb.canvasTabIndex, sb.doNotHandleCursors || (Wb.style.cursor = sb.defaultCursor)), this._setCursorAndPointerOverMesh(bb, cb, sb);
        for (const Ub of sb._pointerMoveStage) {
          bb = bb || this._pickMove(cb);
          const sb = !!bb?.pickedMesh;
          bb = Ub.action(this._unTranslatedPointerX, this._unTranslatedPointerY, bb, sb, Wb)
        }
        const ab = cb.inputIndex >= Jb.MouseWheelX && cb.inputIndex <= Jb.MouseWheelZ ? ub.b.POINTERWHEEL : ub.b.POINTERMOVE;
        let Tb;
        sb.onPointerMove && (bb = bb || this._pickMove(cb), sb.onPointerMove(cb, bb, ab)), bb ? (Tb = new ub.g(ab, cb, bb), this._setRayOnPointerInfo(bb, cb)) : (Tb = new ub.g(ab, cb, null, this), this._movePointerInfo = Tb), sb.onPointerObservable.hasObservers() && sb.onPointerObservable.notifyObservers(Tb, ab)
      }
      _setRayOnPointerInfo(bb, cb) {
        const sb = this._scene;
        bb && db.c._IsPickingAvailable && (bb.ray || (bb.ray = sb.createPickingRay(cb.offsetX, cb.offsetY, fb.e.Identity(), sb.activeCamera)))
      }
      _addCameraPointerObserver(bb, cb) {
        return this._cameraObserverCount++, this._scene.onPointerObservable.add(bb, cb)
      }
      _removeCameraPointerObserver(bb) {
        return this._cameraObserverCount--, this._scene.onPointerObservable.remove(bb)
      }
      _checkForPicking() {
        return !!(this._scene.onPointerObservable.observers.length > this._cameraObserverCount || this._scene.onPointerPick)
      }
      _checkPrePointerObservable(bb, cb, sb) {
        const kb = this._scene,
          Wb = new ub.d(sb, cb, this._unTranslatedPointerX, this._unTranslatedPointerY);
        return bb && (Wb.originalPickingInfo = bb, Wb.ray = bb.ray, "xr-near" === cb.pointerType && bb.originMesh && (Wb.nearInteractionPickingInfo = bb)), kb.onPrePointerObservable.notifyObservers(Wb, sb), !!Wb.skipOnPointerObservable
      }
      _pickMove(bb) {
        const cb = this._scene,
          sb = cb.Wn(this._unTranslatedPointerX, this._unTranslatedPointerY, cb.pointerMovePredicate, cb.pointerMoveFastCheck, cb.cameraToUseForPointers, cb.pointerMoveTrianglePredicate);
        return this._setCursorAndPointerOverMesh(sb, bb, cb), sb
      }
      _updateMeshUnderPointer() {
        const bb = this._scene;
        if (!bb.constantlyUpdateMeshUnderPointer || 0 === this._latestPointerMoveEvents.size || bb.skipPointerMovePicking || !bb.cameraToUseForPointers && !bb.activeCamera) return;
        this._ensurePointerMovePredicate();
        const cb = this._pointerX,
          sb = this._pointerY,
          kb = this._unTranslatedPointerX,
          Wb = this._unTranslatedPointerY;
        for (const ab of this._latestPointerMoveEvents.values()) this._pointerX = ab.pointerX, this._pointerY = ab.pointerY, this._unTranslatedPointerX = ab.unTranslatedPointerX, this._unTranslatedPointerY = ab.unTranslatedPointerY, this._pickMove(ab.event);
        this._pointerX = cb, this._pointerY = sb, this._unTranslatedPointerX = kb, this._unTranslatedPointerY = Wb
      }
      _ensurePointerMovePredicate() {
        const bb = this._scene;
        bb.pointerMovePredicate || (bb.pointerMovePredicate = cb => (cb._isPointerMovePickable ?? cb.UQ) && cb.isVisible && cb.isReady() && cb.isEnabled() && (cb.enablePointerMoveEvents || bb.constantlyUpdateMeshUnderPointer || null !== cb._getActionManagerForTrigger()) && (!bb.cameraToUseForPointers || 0 !== (bb.cameraToUseForPointers.layerMask & cb.layerMask)))
      }
      _setCursorAndPointerOverMesh(bb, cb, sb) {
        const kb = sb.Sm().getInputElement();
        if (bb?.pickedMesh) {
          if (this.setPointerOverMesh(bb.pickedMesh, cb.pointerId, bb, cb), !sb.doNotHandleCursors && kb && this._pointerOverMesh) {
            const bb = this._pointerOverMesh._getActionManagerForTrigger();
            bb && bb.hasPointerTriggers && (kb.style.cursor = bb.hoverCursor || sb.hoverCursor)
          }
        } else this.setPointerOverMesh(null, cb.pointerId, bb, cb)
      }
      simulatePointerMove(bb, cb) {
        const sb = new PointerEvent("pointermove", cb);
        sb.inputIndex = Jb.Move, this._checkPrePointerObservable(bb, sb, ub.b.POINTERMOVE) || this._processPointerMove(bb, sb)
      }
      simulatePointerDown(bb, cb) {
        const sb = new PointerEvent("pointerdown", cb);
        sb.inputIndex = sb.button + 2, this._checkPrePointerObservable(bb, sb, ub.b.POINTERDOWN) || this._processPointerDown(bb, sb)
      }
      _processPointerDown(bb, cb) {
        const sb = this._scene;
        if (bb?.pickedMesh) {
          this._pickedDownMesh = bb.pickedMesh;
          const kb = bb.pickedMesh._getActionManagerForTrigger();
          if (kb) {
            if (kb.hasPickTriggers) switch (kb.processTrigger(5, new mb(bb.pickedMesh, sb.pointerX, sb.pointerY, bb.pickedMesh, cb, bb)), cb.button) {
              case 0:
                kb.processTrigger(2, new mb(bb.pickedMesh, sb.pointerX, sb.pointerY, bb.pickedMesh, cb, bb));
                break;
              case 1:
                kb.processTrigger(4, new mb(bb.pickedMesh, sb.pointerX, sb.pointerY, bb.pickedMesh, cb, bb));
                break;
              case 2:
                kb.processTrigger(3, new mb(bb.pickedMesh, sb.pointerX, sb.pointerY, bb.pickedMesh, cb, bb))
            }
            kb.hasSpecificTrigger(8) && window.setTimeout((() => {
              const bb = sb.Wn(this._unTranslatedPointerX, this._unTranslatedPointerY, (bb => bb.UQ && bb.isVisible && bb.isReady() && bb.actionManager && bb.actionManager.hasSpecificTrigger(8) && bb === this._pickedDownMesh), !1, sb.cameraToUseForPointers);
              bb?.pickedMesh && kb && 0 !== this._activePointerIdsCount && Date.now() - this._startingPointerTime > wb.LongPressDelay && !this._isPointerSwiping() && (this._startingPointerTime = 0, kb.processTrigger(8, mb.CreateNew(bb.pickedMesh, cb)))
            }), wb.LongPressDelay)
          }
        } else
          for (const ab of sb._pointerDownStage) bb = ab.action(this._unTranslatedPointerX, this._unTranslatedPointerY, bb, cb, !1);
        let kb;
        const Wb = ub.b.POINTERDOWN;
        bb ? (sb.onPointerDown && sb.onPointerDown(cb, bb, Wb), kb = new ub.g(Wb, cb, bb), this._setRayOnPointerInfo(bb, cb)) : kb = new ub.g(Wb, cb, null, this), sb.onPointerObservable.hasObservers() && sb.onPointerObservable.notifyObservers(kb, Wb)
      }
      _isPointerSwiping() {
        return this._isSwiping
      }
      simulatePointerUp(bb, cb, sb) {
        const kb = new PointerEvent("pointerup", cb);
        kb.inputIndex = Jb.Move;
        const Wb = new Ab;
        sb ? Wb.Kf = !0 : Wb.singleClick = !0, this._checkPrePointerObservable(bb, kb, ub.b.POINTERUP) || this._processPointerUp(bb, kb, Wb)
      }
      _processPointerUp(bb, cb, sb) {
        const kb = this._scene;
        if (bb?.pickedMesh) {
          if (this._pickedUpMesh = bb.pickedMesh, this._pickedDownMesh === this._pickedUpMesh && (kb.onPointerPick && kb.onPointerPick(cb, bb), sb.singleClick && !sb.ignore && kb.onPointerObservable.observers.length > this._cameraObserverCount)) {
            const sb = ub.b.POINTERPICK,
              Wb = new ub.g(sb, cb, bb);
            this._setRayOnPointerInfo(bb, cb), kb.onPointerObservable.notifyObservers(Wb, sb)
          }
          const Wb = bb.pickedMesh._getActionManagerForTrigger();
          if (Wb && !sb.ignore) {
            Wb.processTrigger(7, mb.CreateNew(bb.pickedMesh, cb, bb)), !sb.hasSwiped && sb.singleClick && Wb.processTrigger(1, mb.CreateNew(bb.pickedMesh, cb, bb));
            const kb = bb.pickedMesh._getActionManagerForTrigger(6);
            sb.Kf && kb && kb.processTrigger(6, mb.CreateNew(bb.pickedMesh, cb, bb))
          }
        } else if (!sb.ignore)
          for (const Wb of kb._pointerUpStage) bb = Wb.action(this._unTranslatedPointerX, this._unTranslatedPointerY, bb, cb, sb.Kf);
        if (this._pickedDownMesh && this._pickedDownMesh !== this._pickedUpMesh) {
          const bb = this._pickedDownMesh._getActionManagerForTrigger(16);
          bb && bb.processTrigger(16, mb.CreateNew(this._pickedDownMesh, cb))
        }
        if (!sb.ignore) {
          const Wb = new ub.g(ub.b.POINTERUP, cb, bb);
          if (this._setRayOnPointerInfo(bb, cb), kb.onPointerObservable.notifyObservers(Wb, ub.b.POINTERUP), kb.onPointerUp && kb.onPointerUp(cb, bb, ub.b.POINTERUP), !sb.hasSwiped && !this._skipPointerTap && !this._isMultiTouchGesture) {
            let Wb = 0;
            if (sb.singleClick ? Wb = ub.b.POINTERTAP : sb.Kf && (Wb = ub.b.POINTERDOUBLETAP), Wb) {
              const sb = new ub.g(Wb, cb, bb);
              kb.onPointerObservable.hasObservers() && kb.onPointerObservable.hasSpecificMask(Wb) && kb.onPointerObservable.notifyObservers(sb, Wb)
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
          cb = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          sb = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          kb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const Wb = this._scene,
          ab = Wb.Sm();
        kb || (kb = ab.getInputElement()), this._alreadyAttached && this.detachControl(), kb && (this._alreadyAttachedTo = kb), this._deviceSourceManager = new qb(ab), this._initActionManager = bb => {
          if (!this._meshPickProceed) {
            const cb = Wb.skipPointerUpPicking || 0 === Wb._registeredActions && !this._checkForPicking() && !Wb.onPointerUp ? null : Wb.Wn(this._unTranslatedPointerX, this._unTranslatedPointerY, Wb.pointerUpPredicate, Wb.pointerUpFastCheck, Wb.cameraToUseForPointers, Wb.pointerUpTrianglePredicate);
            this._currentPickResult = cb, cb && (bb = cb.hit && cb.pickedMesh ? cb.pickedMesh._getActionManagerForTrigger() : null), this._meshPickProceed = !0
          }
          return bb
        }, this._delayedSimpleClick = (bb, cb, sb) => {
          if ((Date.now() - this._previousStartingPointerTime > wb.DoubleClickDelay && !this._doubleClickOccured || bb !== this._previousButtonPressed) && (this._doubleClickOccured = !1, cb.singleClick = !0, cb.ignore = !1, this._delayedClicks[bb])) {
            const cb = this._delayedClicks[bb].evt,
              sb = ub.b.POINTERTAP,
              kb = new ub.g(sb, cb, this._currentPickResult);
            Wb.onPointerObservable.hasObservers() && Wb.onPointerObservable.hasSpecificMask(sb) && Wb.onPointerObservable.notifyObservers(kb, sb), this._delayedClicks[bb] = null
          }
        }, this._initClickEvent = (bb, cb, sb, kb) => {
          const Wb = new Ab;
          this._currentPickResult = null;
          let ab = null,
            Tb = bb.hasSpecificMask(ub.b.POINTERPICK) || cb.hasSpecificMask(ub.b.POINTERPICK) || bb.hasSpecificMask(ub.b.POINTERTAP) || cb.hasSpecificMask(ub.b.POINTERTAP) || bb.hasSpecificMask(ub.b.POINTERDOUBLETAP) || cb.hasSpecificMask(ub.b.POINTERDOUBLETAP);
          !Tb && Yb && (ab = this._initActionManager(ab, Wb), ab && (Tb = ab.hasPickTriggers));
          let Ub = !1;
          if (Tb = Tb && !this._isMultiTouchGesture, Tb) {
            const Tb = sb.button;
            if (Wb.hasSwiped = this._isPointerSwiping(), !Wb.hasSwiped) {
              let Ib = !wb.ExclusiveDoubleClickMode;
              if (Ib || (Ib = !bb.hasSpecificMask(ub.b.POINTERDOUBLETAP) && !cb.hasSpecificMask(ub.b.POINTERDOUBLETAP), Ib && !Yb.HasSpecificTrigger(6) && (ab = this._initActionManager(ab, Wb), ab && (Ib = !ab.hasSpecificTrigger(6)))), Ib)(Date.now() - this._previousStartingPointerTime > wb.DoubleClickDelay || Tb !== this._previousButtonPressed) && (Wb.singleClick = !0, kb(Wb, this._currentPickResult), Ub = !0);
              else {
                const bb = {
                  evt: sb,
                  clickInfo: Wb,
                  timeoutId: window.setTimeout(this._delayedSimpleClick.bind(this, Tb, Wb, kb), wb.DoubleClickDelay)
                };
                this._delayedClicks[Tb] = bb
              }
              let Hb = bb.hasSpecificMask(ub.b.POINTERDOUBLETAP) || cb.hasSpecificMask(ub.b.POINTERDOUBLETAP);
              !Hb && Yb.HasSpecificTrigger(6) && (ab = this._initActionManager(ab, Wb), ab && (Hb = ab.hasSpecificTrigger(6))), Hb && (Tb === this._previousButtonPressed && Date.now() - this._previousStartingPointerTime < wb.DoubleClickDelay && !this._doubleClickOccured ? (Wb.hasSwiped || this._isPointerSwiping() ? (this._doubleClickOccured = !1, this._previousStartingPointerTime = this._startingPointerTime, this._previousStartingPointerPosition.x = this._startingPointerPosition.x, this._previousStartingPointerPosition.y = this._startingPointerPosition.y, this._previousButtonPressed = Tb, wb.ExclusiveDoubleClickMode ? (this._delayedClicks[Tb] && (clearTimeout(this._delayedClicks[Tb]?.timeoutId), this._delayedClicks[Tb] = null), kb(Wb, this._previousPickResult)) : kb(Wb, this._currentPickResult)) : (this._previousStartingPointerTime = 0, this._doubleClickOccured = !0, Wb.Kf = !0, Wb.ignore = !1, wb.ExclusiveDoubleClickMode && this._delayedClicks[Tb] && (clearTimeout(this._delayedClicks[Tb]?.timeoutId), this._delayedClicks[Tb] = null), kb(Wb, this._currentPickResult)), Ub = !0) : (this._doubleClickOccured = !1, this._previousStartingPointerTime = this._startingPointerTime, this._previousStartingPointerPosition.x = this._startingPointerPosition.x, this._previousStartingPointerPosition.y = this._startingPointerPosition.y, this._previousButtonPressed = Tb))
            }
          }
          Ub || kb(Wb, this._currentPickResult)
        }, this._onPointerMove = bb => {
          if (this._updatePointerPosition(bb), this._latestPointerMoveEvents.set(bb.pointerId, {
              event: bb,
              pointerX: this._pointerX,
              pointerY: this._pointerY,
              unTranslatedPointerX: this._unTranslatedPointerX,
              unTranslatedPointerY: this._unTranslatedPointerY
            }), this._isSwiping || -1 === this._swipeButtonPressed || (this._isSwiping = Math.abs(this._startingPointerPosition.x - this._pointerX) > wb.DragMovementThreshold || Math.abs(this._startingPointerPosition.y - this._pointerY) > wb.DragMovementThreshold), ab.isPointerLock && ab._verifyPointerLock(), this._checkPrePointerObservable(null, bb, bb.inputIndex >= Jb.MouseWheelX && bb.inputIndex <= Jb.MouseWheelZ ? ub.b.POINTERWHEEL : ub.b.POINTERMOVE)) return;
          if (!Wb.cameraToUseForPointers && !Wb.activeCamera) return;
          if (Wb.skipPointerMovePicking) return void this._processPointerMove(new nb.e, bb);
          this._ensurePointerMovePredicate();
          const cb = Wb._registeredActions > 0 || Wb.constantlyUpdateMeshUnderPointer ? this._pickMove(bb) : null;
          this._processPointerMove(cb, bb)
        }, this._onPointerDown = bb => {
          const cb = this._activePointerIds.indexOf(-1);
          if (-1 === cb ? this._activePointerIds.push(bb.pointerId) : this._activePointerIds[cb] = bb.pointerId, this._activePointerIdsCount++, this._pickedDownMesh = null, this._meshPickProceed = !1, wb.ExclusiveDoubleClickMode)
            for (let kb = 0; kb < this._delayedClicks.length; kb++)
              if (this._delayedClicks[kb])
                if (bb.button === kb) clearTimeout(this._delayedClicks[kb]?.timeoutId);
                else {
                  const bb = this._delayedClicks[kb].clickInfo;
                  this._doubleClickOccured = !1, bb.singleClick = !0, bb.ignore = !1;
                  const cb = this._delayedClicks[kb].evt,
                    sb = ub.b.POINTERTAP,
                    ab = new ub.g(sb, cb, this._currentPickResult);
                  Wb.onPointerObservable.hasObservers() && Wb.onPointerObservable.hasSpecificMask(sb) && Wb.onPointerObservable.notifyObservers(ab, sb), this._delayedClicks[kb] = null
                } if (this._updatePointerPosition(bb), -1 === this._swipeButtonPressed && (this._swipeButtonPressed = bb.button), Wb.preventDefaultOnPointerDown && kb && (bb.preventDefault(), kb.focus()), this._startingPointerPosition.x = this._pointerX, this._startingPointerPosition.y = this._pointerY, this._startingPointerTime = Date.now(), this._checkPrePointerObservable(null, bb, ub.b.POINTERDOWN)) return;
          if (!Wb.cameraToUseForPointers && !Wb.activeCamera) return;
          let sb;
          this._pointerCaptures[bb.pointerId] = !0, Wb.pointerDownPredicate || (Wb.pointerDownPredicate = bb => bb.UQ && bb.isVisible && bb.isReady() && bb.isEnabled() && (!Wb.cameraToUseForPointers || 0 !== (Wb.cameraToUseForPointers.layerMask & bb.layerMask))), this._pickedDownMesh = null, sb = Wb.skipPointerDownPicking || 0 === Wb._registeredActions && !this._checkForPicking() && !Wb.onPointerDown ? new nb.e : Wb.Wn(this._unTranslatedPointerX, this._unTranslatedPointerY, Wb.pointerDownPredicate, Wb.pointerDownFastCheck, Wb.cameraToUseForPointers, Wb.pointerDownTrianglePredicate), this._processPointerDown(sb, bb)
        }, this._onPointerUp = bb => {
          const cb = this._activePointerIds.indexOf(bb.pointerId); - 1 !== cb && (this._activePointerIds[cb] = -1, this._activePointerIdsCount--, "touch" === bb.pointerType && this._latestPointerMoveEvents.delete(bb.pointerId), this._pickedUpMesh = null, this._meshPickProceed = !1, this._updatePointerPosition(bb), Wb.preventDefaultOnPointerUp && kb && (bb.preventDefault(), kb.focus()), this._initClickEvent(Wb.onPrePointerObservable, Wb.onPointerObservable, bb, ((cb, sb) => {
            if (Wb.onPrePointerObservable.hasObservers() && (this._skipPointerTap = !1, !cb.ignore)) {
              if (this._checkPrePointerObservable(null, bb, ub.b.POINTERUP)) return this._swipeButtonPressed === bb.button && (this._isSwiping = !1, this._swipeButtonPressed = -1), void(0 === bb.buttons && (this._pointerCaptures[bb.pointerId] = !1));
              cb.hasSwiped || (cb.singleClick && Wb.onPrePointerObservable.hasSpecificMask(ub.b.POINTERTAP) && this._checkPrePointerObservable(null, bb, ub.b.POINTERTAP) && (this._skipPointerTap = !0), cb.Kf && Wb.onPrePointerObservable.hasSpecificMask(ub.b.POINTERDOUBLETAP) && this._checkPrePointerObservable(null, bb, ub.b.POINTERDOUBLETAP) && (this._skipPointerTap = !0))
            }
            this._pointerCaptures[bb.pointerId] ? (0 === bb.buttons && (this._pointerCaptures[bb.pointerId] = !1), (Wb.cameraToUseForPointers || Wb.activeCamera) && (Wb.pointerUpPredicate || (Wb.pointerUpPredicate = bb => bb.UQ && bb.isVisible && bb.isReady() && bb.isEnabled() && (!Wb.cameraToUseForPointers || 0 !== (Wb.cameraToUseForPointers.layerMask & bb.layerMask))), !this._meshPickProceed && (Yb && Yb.HasTriggers || this._checkForPicking() || Wb.onPointerUp) && this._initActionManager(null, cb), sb || (sb = this._currentPickResult), this._processPointerUp(sb, bb, cb), this._previousPickResult = this._currentPickResult, this._swipeButtonPressed === bb.button && (this._isSwiping = !1, this._swipeButtonPressed = -1))) : this._swipeButtonPressed === bb.button && (this._isSwiping = !1, this._swipeButtonPressed = -1)
          })))
        }, this._onKeyDown = bb => {
          const cb = Db.b.KEYDOWN;
          if (Wb.onPreKeyboardObservable.hasObservers()) {
            const sb = new Db.e(cb, bb);
            if (Wb.onPreKeyboardObservable.notifyObservers(sb, cb), sb.skipOnKeyboardObservable) return
          }
          if (Wb.onKeyboardObservable.hasObservers()) {
            const sb = new Db.h(cb, bb);
            Wb.onKeyboardObservable.notifyObservers(sb, cb)
          }
          Wb.actionManager && Wb.actionManager.processTrigger(14, mb.CreateNewFromScene(Wb, bb))
        }, this._onKeyUp = bb => {
          const cb = Db.b.KEYUP;
          if (Wb.onPreKeyboardObservable.hasObservers()) {
            const sb = new Db.e(cb, bb);
            if (Wb.onPreKeyboardObservable.notifyObservers(sb, cb), sb.skipOnKeyboardObservable) return
          }
          if (Wb.onKeyboardObservable.hasObservers()) {
            const sb = new Db.h(cb, bb);
            Wb.onKeyboardObservable.notifyObservers(sb, cb)
          }
          Wb.actionManager && Wb.actionManager.processTrigger(15, mb.CreateNewFromScene(Wb, bb))
        }, this._deviceSourceManager.onDeviceConnectedObservable.add((kb => {
          kb.deviceType === hb.Mouse ? kb.onInputChangedObservable.add((Wb => {
            this._originMouseEvent = Wb, Wb.inputIndex === Jb.LeftClick || Wb.inputIndex === Jb.MiddleClick || Wb.inputIndex === Jb.RightClick || Wb.inputIndex === Jb.BrowserBack || Wb.inputIndex === Jb.BrowserForward ? cb && 1 === kb.getInput(Wb.inputIndex) ? this._onPointerDown(Wb) : bb && 0 === kb.getInput(Wb.inputIndex) && this._onPointerUp(Wb) : sb && (Wb.inputIndex === Jb.Move ? this._onPointerMove(Wb) : Wb.inputIndex !== Jb.MouseWheelX && Wb.inputIndex !== Jb.MouseWheelY && Wb.inputIndex !== Jb.MouseWheelZ || this._onPointerMove(Wb))
          })) : kb.deviceType === hb.Touch ? kb.onInputChangedObservable.add((Wb => {
            Wb.inputIndex === Jb.LeftClick && (cb && 1 === kb.getInput(Wb.inputIndex) ? (this._onPointerDown(Wb), this._activePointerIdsCount > 1 && (this._isMultiTouchGesture = !0)) : bb && 0 === kb.getInput(Wb.inputIndex) && (this._onPointerUp(Wb), 0 === this._activePointerIdsCount && (this._isMultiTouchGesture = !1))), sb && Wb.inputIndex === Jb.Move && this._onPointerMove(Wb)
          })) : kb.deviceType === hb.Keyboard && kb.onInputChangedObservable.add((bb => {
            "keydown" === bb.type ? this._onKeyDown(bb) : "keyup" === bb.type && this._onKeyUp(bb)
          }))
        })), this._alreadyAttached = !0
      }
      detachControl() {
        this._alreadyAttached && (this._deviceSourceManager.dispose(), this._deviceSourceManager = null, this._alreadyAttachedTo && !this._scene.doNotHandleCursors && (this._alreadyAttachedTo.style.cursor = this._scene.defaultCursor), this._alreadyAttached = !1, this._alreadyAttachedTo = null, this._latestPointerMoveEvents.clear())
      }
      setPointerOverMesh(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          sb = arguments.length > 2 ? arguments[2] : void 0,
          kb = arguments.length > 3 ? arguments[3] : void 0;
        if (this._meshUnderPointerId[cb] === bb && (!bb || !bb._internalAbstractMeshDataInfo._pointerOverDisableMeshTesting)) return;
        const Wb = this._meshUnderPointerId[cb];
        let ab;
        Wb && (ab = Wb._getActionManagerForTrigger(10), ab && ab.processTrigger(10, new mb(Wb, this._pointerX, this._pointerY, bb, kb, {
          pointerId: cb
        }))), bb ? (this._meshUnderPointerId[cb] = bb, this._pointerOverMesh = bb, ab = bb._getActionManagerForTrigger(9), ab && ab.processTrigger(9, new mb(bb, this._pointerX, this._pointerY, bb, kb, {
          pointerId: cb,
          pickResult: sb
        }))) : (delete this._meshUnderPointerId[cb], this._pointerOverMesh = null), this._scene.onMeshUnderPointerUpdatedObservable.hasObservers() && this._scene.onMeshUnderPointerUpdatedObservable.notifyObservers({
          mesh: bb,
          pointerId: cb
        })
      }
      getPointerOverMesh() {
        return this.meshUnderPointer
      }
      _invalidateMesh(bb) {
        this._pointerOverMesh === bb && (this._pointerOverMesh = null), this._pickedDownMesh === bb && (this._pickedDownMesh = null), this._pickedUpMesh === bb && (this._pickedUpMesh = null);
        for (const cb in this._meshUnderPointerId) this._meshUnderPointerId[cb] === bb && delete this._meshUnderPointerId[cb]
      }
    }
    wb.DragMovementThreshold = 10, wb.LongPressDelay = 500, wb.DoubleClickDelay = 300, wb.ExclusiveDoubleClickMode = !1;
    var rb = sb(39356),
      ob = sb(36830),
      Sb = sb(37365);
    class Rb {
      static get UniqueId() {
        const bb = this._UniqueIdCounter;
        return this._UniqueIdCounter++, bb
      }
    }
    Rb._UniqueIdCounter = 1;
    var vb = sb(39466),
      Fb = sb(39647),
      xb = sb(36666);
    class jb {
      constructor() {
        this.pointerDownFastCheck = !1, this.pointerUpFastCheck = !1, this.pointerMoveFastCheck = !1, this.skipPointerMovePicking = !1, this.skipPointerDownPicking = !1, this.skipPointerUpPicking = !1
      }
    }
    var pb, bc, cc, sc, kc, Wc, ac, Tc, Uc, Ic, Hc, fc, Mc, Xc, nc, mc, lc, Qc, ec, Cc, Nc, Vc, Lc, uc, Yc, hc, Jc, gc, Bc, tc, yc, Pc, Dc, Ec, ic, Oc, Gc, Kc, Zc, zc, qc, dc, Ac, wc, rc, oc, Sc, Rc, vc, Fc, xc, jc, pc, bs = sb(38284),
      cs = sb(36698);
    const ss = new fb.t,
      ks = new fb.t;
    var Ws;
    ! function(bb) {
      bb[bb.BackwardCompatible = 0] = "BackwardCompatible", bb[bb.Intermediate = 1] = "Intermediate", bb[bb.Aggressive = 2] = "Aggressive"
    }(Ws || (Ws = {}));
    class as {
      static DefaultMaterialFactory(bb) {
        throw (0, Lb.i)("StandardMaterial")
      }
      static CollisionCoordinatorFactory() {
        throw (0, Lb.i)("DefaultCollisionCoordinator")
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
        for (const cb of this.skeletons) bb = bb.concat(cb.bones);
        return bb
      }
      get animationPropertiesOverride() {
        return this._animationPropertiesOverride
      }
      set animationPropertiesOverride(bb) {
        this._animationPropertiesOverride = bb
      }
      set onDispose(bb) {
        this._onDisposeObserver && this.ZY.remove(this._onDisposeObserver), this._onDisposeObserver = this.ZY.add(bb)
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
        return wb.DragMovementThreshold
      }
      static set DragMovementThreshold(bb) {
        wb.DragMovementThreshold = bb
      }
      static get LongPressDelay() {
        return wb.LongPressDelay
      }
      static set LongPressDelay(bb) {
        wb.LongPressDelay = bb
      }
      static get DoubleClickDelay() {
        return wb.DoubleClickDelay
      }
      static set DoubleClickDelay(bb) {
        wb.DoubleClickDelay = bb
      }
      static get ExclusiveDoubleClickMode() {
        return wb.ExclusiveDoubleClickMode
      }
      static set ExclusiveDoubleClickMode(bb) {
        wb.ExclusiveDoubleClickMode = bb
      }
      get _eyePosition() {
        return this._forcedViewPosition ?? this.activeCamera?.globalPosition ?? fb.p.ZeroReadOnly
      }
      bindEyePosition(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "vEyePosition",
          sb = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const kb = this._eyePosition,
          Wb = this.useRightHandedSystem === (null != this._mirroredCameraPosition),
          ab = this.floatingOriginOffset,
          Tb = ss.set(kb.x, kb.y, kb.z, Wb ? -1 : 1),
          Ub = Tb.subtractFromFloatsToRef(ab.x, ab.y, ab.z, 0, ks);
        return bb && (sb ? bb.setFloat3(cb, Ub.x, Ub.y, Ub.z) : bb.setVector4(cb, Ub)), Tb
      }
      finalizeSceneUbo() {
        const bb = this.getSceneUniformBuffer(),
          cb = this.bindEyePosition(null),
          sb = this.floatingOriginOffset;
        return bb.updateFloat4("vEyePosition", cb.x - sb.x, cb.y - sb.y, cb.z - sb.z, cb.w), bb.update(), bb
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
        this._unObserveActiveCameras && (this._unObserveActiveCameras(), this._unObserveActiveCameras = null), bb && (this._unObserveActiveCameras = (0, xb.h)(bb, (() => {
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
        return as.DefaultMaterialFactory !== as._OriginalDefaultMaterialFactory
      }
      get defaultMaterial() {
        return this._defaultMaterial || (this._defaultMaterial = as.DefaultMaterialFactory(this)), this._defaultMaterial
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
        return this._collisionCoordinator || (this._collisionCoordinator = as.CollisionCoordinatorFactory(), this._collisionCoordinator.init(this)), this._collisionCoordinator
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
      Vsb(bb) {
        this._components.push(bb), this._transientComponents.push(bb);
        const cb = bb;
        cb.addFromContainer && cb.serialize && this._serializableComponents.push(cb)
      }
      _getComponent(bb) {
        for (const cb of this._components)
          if (cb.name === bb) return cb;
        return null
      }
      get uniqueId() {
        return this._uniqueId
      }
      constructor(bb, cb) {
        this._inputManager = new wb(this), this.cameraToUseForPointers = null, this._isScene = !0, this._blockEntityCollection = !1, this.autoClear = !0, this.autoClearDepthAndStencil = !0, this._clearColor = new ob.g(.2, .2, .3, 1), this.onClearColorChangedObservable = new Tb.c, this.ambientColor = new ob.e(0, 0, 0), this.environmentIntensity = 1, this.iblIntensity = 1, this._performancePriority = 0, this.onScenePerformancePriorityChangedObservable = new Tb.c, this._forceWireframe = !1, this._skipFrustumClipping = !1, this._forcePointsCloud = !1, this.rootNodes = [], this.cameras = [], this.lights = [], this.meshes = [], this.skeletons = [], this.mV = [], this.animations = [], this.animationGroups = [], this.multiMaterials = [], this.materials = [], this.morphTargetManagers = [], this.geometries = [], this.transformNodes = [], this.actionManagers = [], this.objectRenderers = [], this.textures = [], this._environmentTexture = null, this.postProcesses = [], this.effectLayers = [], this.sounds = null, this.layers = [], this.lensFlareSystems = [], this.proceduralTextures = [], this.animationsEnabled = !0, this._animationPropertiesOverride = null, this.useConstantAnimationDeltaTime = !1, this.constantlyUpdateMeshUnderPointer = !1, this.hoverCursor = "pointer", this.defaultCursor = "", this.doNotHandleCursors = !1, this.preventDefaultOnPointerDown = !0, this.preventDefaultOnPointerUp = !0, this.metadata = null, this.reservedDataStore = null, this.disableOfflineSupportExceptionRules = [], this.ZY = new Tb.c, this._onDisposeObserver = null, this.onBeforeRenderObservable = new Tb.c, this._onBeforeRenderObserver = null, this.onAfterRenderObservable = new Tb.c, this.onAfterRenderCameraObservable = new Tb.c, this._onAfterRenderObserver = null, this.onBeforeAnimationsObservable = new Tb.c, this.onAfterAnimationsObservable = new Tb.c, this.onBeforeDrawPhaseObservable = new Tb.c, this.onAfterDrawPhaseObservable = new Tb.c, this.onReadyObservable = new Tb.c, this.onBeforeCameraRenderObservable = new Tb.c, this._onBeforeCameraRenderObserver = null, this.onAfterCameraRenderObservable = new Tb.c, this._onAfterCameraRenderObserver = null, this.onBeforeActiveMeshesEvaluationObservable = new Tb.c, this.onAfterActiveMeshesEvaluationObservable = new Tb.c, this.onBeforeParticlesRenderingObservable = new Tb.c, this.onAfterParticlesRenderingObservable = new Tb.c, this.onDataLoadedObservable = new Tb.c, this.onNewCameraAddedObservable = new Tb.c, this.onCameraRemovedObservable = new Tb.c, this.onNewLightAddedObservable = new Tb.c, this.onLightRemovedObservable = new Tb.c, this.onNewGeometryAddedObservable = new Tb.c, this.onGeometryRemovedObservable = new Tb.c, this.onNewTransformNodeAddedObservable = new Tb.c, this.onTransformNodeRemovedObservable = new Tb.c, this.onNewMeshAddedObservable = new Tb.c, this.onMeshRemovedObservable = new Tb.c, this.onNewSkeletonAddedObservable = new Tb.c, this.onSkeletonRemovedObservable = new Tb.c, this.onNewParticleSystemAddedObservable = new Tb.c, this.onParticleSystemRemovedObservable = new Tb.c, this.onNewAnimationGroupAddedObservable = new Tb.c, this.onAnimationGroupRemovedObservable = new Tb.c, this.onNewMaterialAddedObservable = new Tb.c, this.onNewMultiMaterialAddedObservable = new Tb.c, this.onMaterialRemovedObservable = new Tb.c, this.onMultiMaterialRemovedObservable = new Tb.c, this.onNewTextureAddedObservable = new Tb.c, this.onTextureRemovedObservable = new Tb.c, this.onNewFrameGraphAddedObservable = new Tb.c, this.onFrameGraphRemovedObservable = new Tb.c, this.onNewObjectRendererAddedObservable = new Tb.c, this.onObjectRendererRemovedObservable = new Tb.c, this.onNewPostProcessAddedObservable = new Tb.c, this.onPostProcessRemovedObservable = new Tb.c, this.onNewEffectLayerAddedObservable = new Tb.c, this.onEffectLayerRemovedObservable = new Tb.c, this.onBeforeRenderTargetsRenderObservable = new Tb.c, this.onAfterRenderTargetsRenderObservable = new Tb.c, this.onBeforeStepObservable = new Tb.c, this.onAfterStepObservable = new Tb.c, this.onActiveCameraChanged = new Tb.c, this.onActiveCamerasChanged = new Tb.c, this.onBeforeRenderingGroupObservable = new Tb.c, this.onAfterRenderingGroupObservable = new Tb.c, this.onMeshImportedObservable = new Tb.c, this.onAnimationFileImportedObservable = new Tb.c, this.onEnvironmentTextureChangedObservable = new Tb.c, this.onMeshUnderPointerUpdatedObservable = new Tb.c, this._registeredForLateAnimationBindings = new Ub.b(256), this._pointerPickingConfiguration = new jb, this.onPrePointerObservable = new Tb.c, this.onPointerObservable = new Tb.c, this.onPreKeyboardObservable = new Tb.c, this.onKeyboardObservable = new Tb.c, this._useRightHandedSystem = !1, this._timeAccumulator = 0, this._currentStepId = 0, this._currentInternalStep = 0, this._fogEnabled = !0, this._fogMode = as.FOGMODE_NONE, this.fogColor = new ob.e(.2, .2, .3), this.fogDensity = .1, this.fogStart = 0, this.fogEnd = 1e3, this.needsPreviousWorldMatrices = !1, this._shadowsEnabled = !0, this._lightsEnabled = !0, this._unObserveActiveCameras = null, this._texturesEnabled = !0, this._frameGraph = null, this.frameGraphs = [], this.Ay = !0, this.particlesEnabled = !0, this.spritesEnabled = !0, this._skeletonsEnabled = !0, this.lensFlaresEnabled = !0, this.collisionsEnabled = !0, this.gravity = new fb.p(0, -9.807, 0), this.postProcessesEnabled = !0, this.renderTargetsEnabled = !0, this.dumpNextRenderTargets = !1, this.customRenderTargets = [], this.importedMeshesFiles = [], this.probesEnabled = !0, this._meshesForIntersections = new Ub.b(256), this.proceduralTexturesEnabled = !0, this._totalVertices = new rb.b, this._activeIndices = new rb.b, this._activeParticles = new rb.b, this._activeBones = new rb.b, this._animationTime = 0, this.animationTimeScale = 1, this._renderId = 0, this._frameId = 0, this._renderingMeshEvaluationDepth = 0, this._executeWhenReadyTimeoutId = null, this._intermediateRendering = !1, this._defaultFrameBufferCleared = !1, this._viewUpdateFlag = -1, this._projectionUpdateFlag = -1, this._toBeDisposed = new Array(256), this._activeRequests = new Array, this._delayedFileRequests = null, this._pendingData = [], this._isDisposed = !1, this._isDisposing = !1, this._isReadyChecks = [], this.dispatchAllSubMeshesOfActiveMeshes = !1, this._activeMeshes = new Ub.d(256), this._processedMaterials = new Ub.d(256), this._renderTargets = new Ub.b(256), this._materialsRenderTargets = new Ub.b(256), this._activeParticleSystems = new Ub.d(256), this._activeSkeletons = new Ub.b(32), this._softwareSkinnedMeshes = new Ub.b(32), this._activeAnimatables = new Array, this._animationWrites = new Array, this._animationWriteCount = 0, this._animationStepWriteCount = 0, this._animationStepEvaluated = !1, this._transformMatrix = fb.e.Zero(), this.requireLightSorting = !1, this._components = [], this._serializableComponents = [], this._transientComponents = [], this._beforeCameraUpdateStage = Cb.f.Create(), this._beforeClearStage = Cb.f.Create(), this._beforeRenderTargetClearStage = Cb.f.Create(), this._gatherRenderTargetsStage = Cb.f.Create(), this._gatherActiveCameraRenderTargetsStage = Cb.f.Create(), this._isReadyForMeshStage = Cb.f.Create(), this._beforeEvaluateActiveMeshStage = Cb.f.Create(), this._evaluateSubMeshStage = Cb.f.Create(), this._preActiveMeshStage = Cb.f.Create(), this._cameraDrawRenderTargetStage = Cb.f.Create(), this._beforeCameraDrawStage = Cb.f.Create(), this._beforeRenderTargetDrawStage = Cb.f.Create(), this._beforeRenderingGroupDrawStage = Cb.f.Create(), this._beforeRenderingMeshStage = Cb.f.Create(), this._afterRenderingMeshStage = Cb.f.Create(), this._afterRenderingGroupDrawStage = Cb.f.Create(), this._afterCameraDrawStage = Cb.f.Create(), this._afterCameraPostProcessStage = Cb.f.Create(), this._afterRenderTargetDrawStage = Cb.f.Create(), this._afterRenderTargetPostProcessStage = Cb.f.Create(), this._afterRenderStage = Cb.f.Create(), this._pointerMoveStage = Cb.f.Create(), this._pointerDownStage = Cb.f.Create(), this._pointerUpStage = Cb.f.Create(), this._geometriesByUniqueId = null, this._uniqueId = 0, this._defaultMeshCandidates = {
          data: [],
          length: 0
        }, this._defaultSubMeshCandidates = {
          data: [],
          length: 0
        }, this.onReadyTimeoutObservable = new Tb.c, this.onReadyTimeoutDuration = 12e4, this._timeoutChecksStartTime = 0, this._floatingOriginScene = void 0, this._preventFreeActiveMeshesAndRenderingGroups = !1, this._activeMeshesFrozen = !1, this._activeMeshesFrozenButKeepClipping = !1, this._skipEvaluateActiveMeshesCompletely = !1, this._freezeActiveMeshesCancel = null, this._useCurrentFrameBuffer = !1, this._allowPostProcessClearColor = !0, this.getDeterministicFrameTime = () => this._engine.getTimeStep(), this._getFloatingOriginScene = () => this._floatingOriginScene, this._registeredActions = 0, this._blockMaterialDirtyMechanism = !1, this._perfCollector = null, this.activeCameras = [], this._uniqueId = this.getUniqueId();
        const sb = {
          useGeometryUniqueIdsMap: !0,
          useMaterialMeshMap: !0,
          useClonedMeshMap: !0,
          virtual: !1,
          defaultCameraLayerMask: 268435455,
          defaultRenderableLayerMask: 268435455,
          ...cb
        };
        this.defaultCameraLayerMask = sb.defaultCameraLayerMask, this.defaultRenderableLayerMask = sb.defaultRenderableLayerMask, bb = this._engine = bb || Vb.d.LastCreatedEngine, sb.virtual ? bb._virtualScenes.push(this) : (Vb.d._LastCreatedScene = this, bb.scenes.push(this)), (bb.getCreationOptions().useLargeWorldRendering || cb?.useFloatingOrigin) && ((0, Qb.d)(), this._floatingOriginScene = this, Qb.b.EY = this._getFloatingOriginScene), this._uid = null, this._renderingManager = new eb.e(this), lb.e && (this.postProcessManager = new lb.e(this)), (0, Nb.j)() && this.attachControl(), this._createUbo(), Mb.d && (this._imageProcessingConfiguration = new Mb.d), this.setDefaultCandidateProviders(), sb.useGeometryUniqueIdsMap && (this._geometriesByUniqueId = {}), this.useMaterialMeshMap = sb.useMaterialMeshMap, this.useClonedMeshMap = sb.useClonedMeshMap, cb && cb.virtual || bb.onNewSceneAddedObservable.notifyObservers(this)
      }
      getClassName() {
        return "Scene"
      }
      _getDefaultMeshCandidates() {
        return this._defaultMeshCandidates.data = this.meshes, this._defaultMeshCandidates.length = this.meshes.length, this._defaultMeshCandidates
      }
      _getDefaultSubMeshCandidates(bb) {
        return this._defaultSubMeshCandidates.data = bb.XV, this._defaultSubMeshCandidates.length = bb.XV.length, this._defaultSubMeshCandidates
      }
      setDefaultCandidateProviders() {
        this.getActiveMeshCandidates = () => this._getDefaultMeshCandidates(), this.getActiveSubMeshCandidates = bb => this._getDefaultSubMeshCandidates(bb), this.getIntersectingSubMeshCandidates = (bb, cb) => this._getDefaultSubMeshCandidates(bb), this.getCollidingSubMeshCandidates = (bb, cb) => this._getDefaultSubMeshCandidates(bb)
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
      isCachedMaterialInvalid(bb, cb) {
        let sb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        return this._cachedEffect !== cb || this._cachedMaterial !== bb || this._cachedVisibility !== sb
      }
      Sm() {
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
      simulatePointerMove(bb, cb) {
        return this._inputManager.simulatePointerMove(bb, cb), this
      }
      simulatePointerDown(bb, cb) {
        return this._inputManager.simulatePointerDown(bb, cb), this
      }
      simulatePointerUp(bb, cb, sb) {
        return this._inputManager.simulatePointerUp(bb, cb, sb), this
      }
      isPointerCaptured() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return this._inputManager.isPointerCaptured(bb)
      }
      attachControl() {
        let bb = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          cb = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          sb = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this._inputManager.attachControl(bb, cb, sb)
      }
      detachControl() {
        this._inputManager.detachControl()
      }
      isReady() {
        let bb, cb = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        if (this._isDisposed) return !1;
        const sb = this.Sm(),
          kb = sb.currentRenderPassId;
        sb.currentRenderPassId = this.activeCamera?.renderPassId ?? kb;
        let Wb = !0;
        for (this._pendingData.length > 0 && (Wb = !1), this.prePassRenderer?.update(), this.useOrderIndependentTransparency && this.depthPeelingRenderer && Wb && (Wb = this.depthPeelingRenderer.isReady()), cb && (this._processedMaterials.reset(), this._materialsRenderTargets.reset()), bb = 0; bb < this.meshes.length; bb++) {
          const kb = this.meshes[bb];
          if (!kb.XV || 0 === kb.XV.length) continue;
          if (!kb.isReady(!0)) {
            Wb = !1;
            continue
          }
          const ab = kb.hasThinInstances || "InstancedMesh" === kb.getClassName() || "InstancedLinesMesh" === kb.getClassName() || sb.getCaps().instancedArrays && kb.instances.length > 0;
          for (let bb = 0, cb = this._isReadyForMeshStage; bb < cb.length; bb++) {
            cb[bb].action(kb, ab) || (Wb = !1)
          }
          if (!cb) continue;
          const Tb = kb.material || this.defaultMaterial;
          if (Tb)
            if (Tb._storeEffectOnSubMeshes)
              for (const bb of kb.XV) {
                const cb = bb.pm();
                cb && cb.hasRenderTargetTextures && null != cb.getRenderTargetTextures && -1 === this._processedMaterials.indexOf(cb) && (this._processedMaterials.push(cb), this._materialsRenderTargets.concatWithNoDuplicate(cb.getRenderTargetTextures()))
              } else Tb.hasRenderTargetTextures && null != Tb.getRenderTargetTextures && -1 === this._processedMaterials.indexOf(Tb) && (this._processedMaterials.push(Tb), this._materialsRenderTargets.concatWithNoDuplicate(Tb.getRenderTargetTextures()))
        }
        if (cb) {
          for (bb = 0; bb < this._materialsRenderTargets.length; ++bb) {
            this._materialsRenderTargets.data[bb].isReadyForRendering() || (Wb = !1)
          }
          for (bb = 0; bb < this.customRenderTargets.length; ++bb) {
            this.customRenderTargets[bb].isReadyForRendering() || (Wb = !1)
          }
        }
        for (bb = 0; bb < this.geometries.length; bb++) {
          2 === this.geometries[bb].delayLoadState && (Wb = !1)
        }
        if (this.activeCameras && this.activeCameras.length > 0)
          for (const ab of this.activeCameras) ab.isReady(!0) || (Wb = !1);
        else this.activeCamera && (this.activeCamera.isReady(!0) || (Wb = !1));
        for (const ab of this.mV) ab.isReady() || (Wb = !1);
        if (this.proceduralTexturesEnabled)
          for (const ab of this.proceduralTextures) ab.isReady() || (Wb = !1);
        if (this.layers)
          for (const ab of this.layers) ab.isReady() || (Wb = !1);
        if (this.effectLayers)
          for (const ab of this.effectLayers) ab.isLayerReady() || (Wb = !1);
        for (const ab of this._isReadyChecks) ab.isReady() || (Wb = !1);
        return sb.areAllEffectsReady() || (Wb = !1), sb.currentRenderPassId = kb, Wb
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
        const cb = () => {
          bb(), setTimeout((() => {
            this.unregisterBeforeRender(cb)
          }))
        };
        this.registerBeforeRender(cb)
      }
      executeOnceBeforeRender(bb, cb) {
        void 0 !== cb ? setTimeout((() => {
          this._executeOnceBeforeRender(bb)
        }), cb) : this._executeOnceBeforeRender(bb)
      }
      addPendingData(bb) {
        this._pendingData.push(bb)
      }
      removePendingData(bb) {
        const cb = this.isLoading,
          sb = this._pendingData.indexOf(bb); - 1 !== sb && this._pendingData.splice(sb, 1), cb && !this.isLoading && this.onDataLoadedObservable.notifyObservers(this)
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
        const cb = this._isReadyChecks.indexOf(bb); - 1 !== cb && this._isReadyChecks.splice(cb, 1)
      }
      executeWhenReady(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this.onReadyObservable.addOnce(bb), null === this._executeWhenReadyTimeoutId && this._checkIsReady(cb)
      }
      async whenReadyAsync() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return await new Promise((cb => {
          this.executeWhenReady((() => {
            cb()
          }), bb)
        }))
      }
      _clearReadynessChecksData() {
        this._timeoutChecksStartTime = 0, this.onReadyTimeoutObservable.clear(), this.onReadyObservable.clear(), this._executeWhenReadyTimeoutId = null
      }
      _checkIsReady() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this._registerTransientComponents(), 0 === this._timeoutChecksStartTime) this._timeoutChecksStartTime = ab.e.Now;
        else if (this.onReadyTimeoutDuration > 0 && ab.e.Now - this._timeoutChecksStartTime > this.onReadyTimeoutDuration) return this.onReadyTimeoutObservable.notifyObservers(this), void this._clearReadynessChecksData();
        if (this.isReady(bb)) return this.onReadyObservable.notifyObservers(this), void this._clearReadynessChecksData();
        this._isDisposed ? this._clearReadynessChecksData() : this._executeWhenReadyTimeoutId = setTimeout((() => {
          this.incrementRenderId(), this._checkIsReady(bb)
        }), 100)
      }
      get animatables() {
        return this._activeAnimatables
      }
      resetLastAnimationTimeFrame() {
        this._animationTimeLast = ab.e.Now
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
      setTransformMatrix(bb, cb, sb, kb) {
        this._multiviewSceneUboIsActive = !!(sb && kb && this._multiviewSceneUbo), this._viewUpdateFlag === bb.updateFlag && this._projectionUpdateFlag === cb.updateFlag || (this._viewUpdateFlag = bb.updateFlag, this._projectionUpdateFlag = cb.updateFlag, this._viewMatrix = bb, this._projectionMatrix = cb, this._inverseProjectionMatrix || (this._inverseProjectionMatrix = new fb.e), this._projectionMatrix.invertToRef(this._inverseProjectionMatrix), this._viewMatrix.multiplyToRef(this._projectionMatrix, this._transformMatrix), this._frustumPlanes ? Sb.c.GetPlanesToRef(this._transformMatrix, this._frustumPlanes) : this._frustumPlanes = Sb.c.GetPlanes(this._transformMatrix), this._multiviewSceneUboIsActive && this._multiviewSceneUbo.useUbo ? this._updateMultiviewUbo(sb, kb) : this._sceneUbo.useUbo && (this._sceneUbo.O4("viewProjection", this._transformMatrix), this._sceneUbo.O4("view", this._viewMatrix), this._sceneUbo.O4("projection", this._projectionMatrix), this._sceneUbo.O4("inverseProjection", this._inverseProjectionMatrix)))
      }
      getSceneUniformBuffer() {
        return this._multiviewSceneUboIsActive && this._multiviewSceneUbo ? this._multiviewSceneUbo : this._sceneUbo
      }
      createSceneUniformBuffer(bb, cb) {
        const sb = "boolean" === typeof cb ? cb : cb?.trackUBOsInFrame,
          kb = new Xb.d(this._engine, void 0, !1, bb ?? "aQ", void 0, sb);
        return kb.addUniform("viewProjection", 16), kb.addUniform("view", 16), kb.addUniform("projection", 16), kb.addUniform("vEyePosition", 4), kb.addUniform("inverseProjection", 16), kb
      }
      setSceneUniformBuffer(bb) {
        this._sceneUbo = bb, this._viewUpdateFlag = -1, this._projectionUpdateFlag = -1
      }
      get floatingOriginMode() {
        return void 0 !== this._floatingOriginScene
      }
      get floatingOriginOffset() {
        return this.floatingOriginMode ? this._eyePosition : fb.p.ZeroReadOnly
      }
      getUniqueId() {
        return Rb.UniqueId
      }
      Ksb(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (!this._blockEntityCollection && (this.meshes.push(bb), bb._resyncLightSources(), bb.parent || bb._addToSceneRootNodes(), Wb.c.SetImmediate((() => {
            this.onNewMeshAddedObservable.notifyObservers(bb)
          })), cb)) {
          const cb = bb.getChildMeshes();
          for (const bb of cb) this.Ksb(bb)
        }
      }
      pY(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const sb = this.meshes.indexOf(bb);
        if (-1 !== sb && (this.meshes.splice(sb, 1), bb.parent || bb._removeFromSceneRootNodes()), this._inputManager._invalidateMesh(bb), this.onMeshRemovedObservable.notifyObservers(bb), cb) {
          const cb = bb.getChildMeshes();
          for (const bb of cb) this.pY(bb)
        }
        return sb
      }
      addTransformNode(bb) {
        this._blockEntityCollection || bb.EY() === this && -1 !== bb._indexInSceneTransformNodesArray || (bb._indexInSceneTransformNodesArray = this.transformNodes.length, this.transformNodes.push(bb), bb.parent || bb._addToSceneRootNodes(), this.onNewTransformNodeAddedObservable.notifyObservers(bb))
      }
      removeTransformNode(bb) {
        const cb = bb._indexInSceneTransformNodesArray;
        if (-1 !== cb) {
          if (cb !== this.transformNodes.length - 1) {
            const bb = this.transformNodes[this.transformNodes.length - 1];
            this.transformNodes[cb] = bb, bb._indexInSceneTransformNodesArray = cb
          }
          bb._indexInSceneTransformNodesArray = -1, this.transformNodes.pop(), bb.parent || bb._removeFromSceneRootNodes()
        }
        return this.onTransformNodeRemovedObservable.notifyObservers(bb), cb
      }
      removeSkeleton(bb) {
        const cb = this.skeletons.indexOf(bb);
        return -1 !== cb && (this.skeletons.splice(cb, 1), this.onSkeletonRemovedObservable.notifyObservers(bb), this._executeActiveContainerCleanup(this._activeSkeletons)), cb
      }
      removeMorphTargetManager(bb) {
        const cb = this.morphTargetManagers.indexOf(bb);
        return -1 !== cb && this.morphTargetManagers.splice(cb, 1), cb
      }
      removeLight(bb) {
        const cb = this.lights.indexOf(bb);
        if (-1 !== cb) {
          for (const cb of this.meshes) cb._removeLightSource(bb, !1);
          this.lights.splice(cb, 1), this.sortLightsByPriority(), bb.parent || bb._removeFromSceneRootNodes(), this.onLightRemovedObservable.notifyObservers(bb)
        }
        return cb
      }
      removeCamera(bb) {
        const cb = this.cameras.indexOf(bb);
        if (-1 !== cb && (this.cameras.splice(cb, 1), bb.parent || bb._removeFromSceneRootNodes()), this.activeCameras) {
          const cb = this.activeCameras.indexOf(bb); - 1 !== cb && this.activeCameras.splice(cb, 1)
        }
        return this.activeCamera === bb && (this.cameras.length > 0 ? this.activeCamera = this.cameras[0] : this.activeCamera = null), this.onCameraRemovedObservable.notifyObservers(bb), cb
      }
      removeParticleSystem(bb) {
        const cb = this.mV.indexOf(bb);
        return -1 !== cb && (this.mV.splice(cb, 1), this._executeActiveContainerCleanup(this._activeParticleSystems)), this.onParticleSystemRemovedObservable.notifyObservers(bb), cb
      }
      removeAnimation(bb) {
        const cb = this.animations.indexOf(bb);
        return -1 !== cb && this.animations.splice(cb, 1), cb
      }
      stopAnimation(bb, cb, sb) {}
      removeAnimationGroup(bb) {
        const cb = this.animationGroups.indexOf(bb);
        return -1 !== cb && this.animationGroups.splice(cb, 1), this.onAnimationGroupRemovedObservable.notifyObservers(bb), cb
      }
      removeMultiMaterial(bb) {
        const cb = this.multiMaterials.indexOf(bb);
        return -1 !== cb && this.multiMaterials.splice(cb, 1), this.onMultiMaterialRemovedObservable.notifyObservers(bb), cb
      }
      removeMaterial(bb) {
        const cb = bb._indexInSceneMaterialArray;
        if (-1 !== cb && cb < this.materials.length) {
          if (cb !== this.materials.length - 1) {
            const bb = this.materials[this.materials.length - 1];
            this.materials[cb] = bb, bb._indexInSceneMaterialArray = cb
          }
          bb._indexInSceneMaterialArray = -1, this.materials.pop()
        }
        return this.onMaterialRemovedObservable.notifyObservers(bb), cb
      }
      removeActionManager(bb) {
        const cb = this.actionManagers.indexOf(bb);
        return -1 !== cb && this.actionManagers.splice(cb, 1), cb
      }
      removeTexture(bb) {
        const cb = this.textures.indexOf(bb);
        return -1 !== cb && this.textures.splice(cb, 1), this.onTextureRemovedObservable.notifyObservers(bb), cb
      }
      removeFrameGraph(bb) {
        const cb = this.frameGraphs.indexOf(bb);
        return -1 !== cb && this.frameGraphs.splice(cb, 1), this.onFrameGraphRemovedObservable.notifyObservers(bb), cb
      }
      removeObjectRenderer(bb) {
        const cb = this.objectRenderers.indexOf(bb);
        return -1 !== cb && this.objectRenderers.splice(cb, 1), this.onObjectRendererRemovedObservable.notifyObservers(bb), cb
      }
      removePostProcess(bb) {
        const cb = this.postProcesses.indexOf(bb);
        return -1 !== cb && this.postProcesses.splice(cb, 1), this.onPostProcessRemovedObservable.notifyObservers(bb), cb
      }
      removeEffectLayer(bb) {
        const cb = this.effectLayers.indexOf(bb);
        return -1 !== cb && this.effectLayers.splice(cb, 1), this.onEffectLayerRemovedObservable.notifyObservers(bb), cb
      }
      addLight(bb) {
        if (!this._blockEntityCollection) {
          this.lights.push(bb), this.sortLightsByPriority(), bb.parent || bb._addToSceneRootNodes();
          for (const cb of this.meshes) - 1 === cb.lightSources.indexOf(bb) && (cb.lightSources.push(bb), cb._resyncLightSources());
          Wb.c.SetImmediate((() => {
            this.onNewLightAddedObservable.notifyObservers(bb)
          }))
        }
      }
      sortLightsByPriority() {
        this.requireLightSorting && this.lights.sort(Fb.b.CompareLightsPriority)
      }
      addCamera(bb) {
        this._blockEntityCollection || (this.cameras.push(bb), Wb.c.SetImmediate((() => {
          this.onNewCameraAddedObservable.notifyObservers(bb)
        })), bb.parent || bb._addToSceneRootNodes())
      }
      addSkeleton(bb) {
        this._blockEntityCollection || (this.skeletons.push(bb), Wb.c.SetImmediate((() => {
          this.onNewSkeletonAddedObservable.notifyObservers(bb)
        })))
      }
      addParticleSystem(bb) {
        this._blockEntityCollection || (this.mV.push(bb), Wb.c.SetImmediate((() => {
          this.onNewParticleSystemAddedObservable.notifyObservers(bb)
        })))
      }
      addAnimation(bb) {
        this._blockEntityCollection || this.animations.push(bb)
      }
      addAnimationGroup(bb) {
        this._blockEntityCollection || (this.animationGroups.push(bb), Wb.c.SetImmediate((() => {
          this.onNewAnimationGroupAddedObservable.notifyObservers(bb)
        })))
      }
      addMultiMaterial(bb) {
        this._blockEntityCollection || (this.multiMaterials.push(bb), Wb.c.SetImmediate((() => {
          this.onNewMultiMaterialAddedObservable.notifyObservers(bb)
        })))
      }
      addMaterial(bb) {
        this._blockEntityCollection || bb.EY() === this && -1 !== bb._indexInSceneMaterialArray || (bb._indexInSceneMaterialArray = this.materials.length, this.materials.push(bb), Wb.c.SetImmediate((() => {
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
        this.frameGraphs.push(bb), Wb.c.SetImmediate((() => {
          this.onNewFrameGraphAddedObservable.notifyObservers(bb)
        }))
      }
      addObjectRenderer(bb) {
        this.objectRenderers.push(bb), Wb.c.SetImmediate((() => {
          this.onNewObjectRendererAddedObservable.notifyObservers(bb)
        }))
      }
      addPostProcess(bb) {
        this._blockEntityCollection || (this.postProcesses.push(bb), Wb.c.SetImmediate((() => {
          this.onNewPostProcessAddedObservable.notifyObservers(bb)
        })))
      }
      addEffectLayer(bb) {
        this._blockEntityCollection || (this.effectLayers.push(bb), Wb.c.SetImmediate((() => {
          this.onNewEffectLayerAddedObservable.notifyObservers(bb)
        })))
      }
      switchActiveCamera(bb) {
        let cb = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this._engine.getInputElement() && (this.activeCamera && this.activeCamera.detachControl(), this.activeCamera = bb, cb && bb.attachControl())
      }
      setActiveCameraById(bb) {
        const cb = this.getCameraById(bb);
        return cb ? (this.activeCamera = cb, cb) : null
      }
      setActiveCameraByName(bb) {
        const cb = this.getCameraByName(bb);
        return cb ? (this.activeCamera = cb, cb) : null
      }
      getAnimationGroupByName(bb) {
        for (let cb = 0; cb < this.animationGroups.length; cb++)
          if (this.animationGroups[cb].name === bb) return this.animationGroups[cb];
        return null
      }
      _getMaterial(bb, cb) {
        for (let sb = 0; sb < this.materials.length; sb++) {
          const bb = this.materials[sb];
          if (cb(bb)) return bb
        }
        if (bb)
          for (let sb = 0; sb < this.multiMaterials.length; sb++) {
            const bb = this.multiMaterials[sb];
            if (cb(bb)) return bb
          }
        return null
      }
      getMaterialByUniqueID(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this.getMaterialByUniqueId(bb, cb)
      }
      getMaterialByUniqueId(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this._getMaterial(cb, (cb => cb.uniqueId === bb))
      }
      getMaterialById(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this._getMaterial(cb, (cb => cb.id === bb))
      }
      getMaterialByName(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this._getMaterial(cb, (cb => cb.name === bb))
      }
      getLastMaterialById(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        for (let sb = this.materials.length - 1; sb >= 0; sb--)
          if (this.materials[sb].id === bb) return this.materials[sb];
        if (cb)
          for (let sb = this.multiMaterials.length - 1; sb >= 0; sb--)
            if (this.multiMaterials[sb].id === bb) return this.multiMaterials[sb];
        return null
      }
      getTextureByUniqueId(bb) {
        for (let cb = 0; cb < this.textures.length; cb++)
          if (this.textures[cb].uniqueId === bb) return this.textures[cb];
        return null
      }
      getTextureByName(bb) {
        for (let cb = 0; cb < this.textures.length; cb++)
          if (this.textures[cb].name === bb) return this.textures[cb];
        return null
      }
      getCameraById(bb) {
        for (let cb = 0; cb < this.cameras.length; cb++)
          if (this.cameras[cb].id === bb) return this.cameras[cb];
        return null
      }
      getCameraByUniqueId(bb) {
        for (let cb = 0; cb < this.cameras.length; cb++)
          if (this.cameras[cb].uniqueId === bb) return this.cameras[cb];
        return null
      }
      getCameraByName(bb) {
        for (let cb = 0; cb < this.cameras.length; cb++)
          if (this.cameras[cb].name === bb) return this.cameras[cb];
        return null
      }
      getBoneById(bb) {
        for (let cb = 0; cb < this.skeletons.length; cb++) {
          const sb = this.skeletons[cb];
          for (let cb = 0; cb < sb.bones.length; cb++)
            if (sb.bones[cb].id === bb) return sb.bones[cb]
        }
        return null
      }
      getBoneByName(bb) {
        for (let cb = 0; cb < this.skeletons.length; cb++) {
          const sb = this.skeletons[cb];
          for (let cb = 0; cb < sb.bones.length; cb++)
            if (sb.bones[cb].name === bb) return sb.bones[cb]
        }
        return null
      }
      getLightByName(bb) {
        for (let cb = 0; cb < this.lights.length; cb++)
          if (this.lights[cb].name === bb) return this.lights[cb];
        return null
      }
      getLightById(bb) {
        for (let cb = 0; cb < this.lights.length; cb++)
          if (this.lights[cb].id === bb) return this.lights[cb];
        return null
      }
      getLightByUniqueId(bb) {
        for (let cb = 0; cb < this.lights.length; cb++)
          if (this.lights[cb].uniqueId === bb) return this.lights[cb];
        return null
      }
      getParticleSystemById(bb) {
        for (let cb = 0; cb < this.mV.length; cb++)
          if (this.mV[cb].id === bb) return this.mV[cb];
        return null
      }
      getGeometryById(bb) {
        for (let cb = 0; cb < this.geometries.length; cb++)
          if (this.geometries[cb].id === bb) return this.geometries[cb];
        return null
      }
      _getGeometryByUniqueId(bb) {
        if (this._geometriesByUniqueId) {
          const cb = this._geometriesByUniqueId[bb];
          if (void 0 !== cb) return this.geometries[cb]
        } else
          for (let cb = 0; cb < this.geometries.length; cb++)
            if (this.geometries[cb].uniqueId === bb) return this.geometries[cb];
        return null
      }
      getFrameGraphByName(bb) {
        for (let cb = 0; cb < this.frameGraphs.length; cb++)
          if (this.frameGraphs[cb].name === bb) return this.frameGraphs[cb];
        return null
      }
      pushGeometry(bb, cb) {
        return !(!cb && this._getGeometryByUniqueId(bb.uniqueId)) && (this.addGeometry(bb), Wb.c.SetImmediate((() => {
          this.onNewGeometryAddedObservable.notifyObservers(bb)
        })), !0)
      }
      removeGeometry(bb) {
        let cb;
        if (this._geometriesByUniqueId) {
          if (cb = this._geometriesByUniqueId[bb.uniqueId], void 0 === cb) return !1
        } else if (cb = this.geometries.indexOf(bb), cb < 0) return !1;
        if (cb !== this.geometries.length - 1) {
          const bb = this.geometries[this.geometries.length - 1];
          bb && (this.geometries[cb] = bb, this._geometriesByUniqueId && (this._geometriesByUniqueId[bb.uniqueId] = cb))
        }
        return this._geometriesByUniqueId && (this._geometriesByUniqueId[bb.uniqueId] = void 0), this.geometries.pop(), this.onGeometryRemovedObservable.notifyObservers(bb), !0
      }
      getGeometries() {
        return this.geometries
      }
      getMeshById(bb) {
        for (let cb = 0; cb < this.meshes.length; cb++)
          if (this.meshes[cb].id === bb) return this.meshes[cb];
        return null
      }
      getMeshesById(bb) {
        return this.meshes.filter((function(cb) {
          return cb.id === bb
        }))
      }
      getTransformNodeById(bb) {
        for (let cb = 0; cb < this.transformNodes.length; cb++)
          if (this.transformNodes[cb].id === bb) return this.transformNodes[cb];
        return null
      }
      getTransformNodeByUniqueId(bb) {
        for (let cb = 0; cb < this.transformNodes.length; cb++)
          if (this.transformNodes[cb].uniqueId === bb) return this.transformNodes[cb];
        return null
      }
      getTransformNodesById(bb) {
        return this.transformNodes.filter((function(cb) {
          return cb.id === bb
        }))
      }
      getMeshByUniqueId(bb) {
        for (let cb = 0; cb < this.meshes.length; cb++)
          if (this.meshes[cb].uniqueId === bb) return this.meshes[cb];
        return null
      }
      getLastMeshById(bb) {
        for (let cb = this.meshes.length - 1; cb >= 0; cb--)
          if (this.meshes[cb].id === bb) return this.meshes[cb];
        return null
      }
      getLastTransformNodeById(bb) {
        for (let cb = this.transformNodes.length - 1; cb >= 0; cb--)
          if (this.transformNodes[cb].id === bb) return this.transformNodes[cb];
        return null
      }
      getLastEntryById(bb) {
        let cb;
        for (cb = this.meshes.length - 1; cb >= 0; cb--)
          if (this.meshes[cb].id === bb) return this.meshes[cb];
        for (cb = this.transformNodes.length - 1; cb >= 0; cb--)
          if (this.transformNodes[cb].id === bb) return this.transformNodes[cb];
        for (cb = this.cameras.length - 1; cb >= 0; cb--)
          if (this.cameras[cb].id === bb) return this.cameras[cb];
        for (cb = this.lights.length - 1; cb >= 0; cb--)
          if (this.lights[cb].id === bb) return this.lights[cb];
        for (cb = this.skeletons.length - 1; cb >= 0; cb--) {
          const sb = this.skeletons[cb];
          for (let cb = sb.bones.length - 1; cb >= 0; cb--)
            if (sb.bones[cb].id === bb) return sb.bones[cb]
        }
        return null
      }
      getNodeById(bb) {
        const cb = this.getMeshById(bb);
        if (cb) return cb;
        const sb = this.getTransformNodeById(bb);
        if (sb) return sb;
        const kb = this.getLightById(bb);
        if (kb) return kb;
        const Wb = this.getCameraById(bb);
        if (Wb) return Wb;
        const ab = this.getBoneById(bb);
        return ab || null
      }
      getNodeByName(bb) {
        const cb = this.getMeshByName(bb);
        if (cb) return cb;
        const sb = this.getTransformNodeByName(bb);
        if (sb) return sb;
        const kb = this.getLightByName(bb);
        if (kb) return kb;
        const Wb = this.getCameraByName(bb);
        if (Wb) return Wb;
        const ab = this.getBoneByName(bb);
        return ab || null
      }
      getMeshByName(bb) {
        for (let cb = 0; cb < this.meshes.length; cb++)
          if (this.meshes[cb].name === bb) return this.meshes[cb];
        return null
      }
      getTransformNodeByName(bb) {
        for (let cb = 0; cb < this.transformNodes.length; cb++)
          if (this.transformNodes[cb].name === bb) return this.transformNodes[cb];
        return null
      }
      getLastSkeletonById(bb) {
        for (let cb = this.skeletons.length - 1; cb >= 0; cb--)
          if (this.skeletons[cb].id === bb) return this.skeletons[cb];
        return null
      }
      getSkeletonByUniqueId(bb) {
        for (let cb = 0; cb < this.skeletons.length; cb++)
          if (this.skeletons[cb].uniqueId === bb) return this.skeletons[cb];
        return null
      }
      getSkeletonById(bb) {
        for (let cb = 0; cb < this.skeletons.length; cb++)
          if (this.skeletons[cb].id === bb) return this.skeletons[cb];
        return null
      }
      getSkeletonByName(bb) {
        for (let cb = 0; cb < this.skeletons.length; cb++)
          if (this.skeletons[cb].name === bb) return this.skeletons[cb];
        return null
      }
      getMorphTargetManagerById(bb) {
        for (let cb = 0; cb < this.morphTargetManagers.length; cb++)
          if (this.morphTargetManagers[cb].uniqueId === bb) return this.morphTargetManagers[cb];
        return null
      }
      getMorphTargetById(bb) {
        for (let cb = 0; cb < this.morphTargetManagers.length; ++cb) {
          const sb = this.morphTargetManagers[cb];
          for (let cb = 0; cb < sb.numTargets; ++cb) {
            const kb = sb.getTarget(cb);
            if (kb.id === bb) return kb
          }
        }
        return null
      }
      getMorphTargetByName(bb) {
        for (let cb = 0; cb < this.morphTargetManagers.length; ++cb) {
          const sb = this.morphTargetManagers[cb];
          for (let cb = 0; cb < sb.numTargets; ++cb) {
            const kb = sb.getTarget(cb);
            if (kb.name === bb) return kb
          }
        }
        return null
      }
      getPostProcessByName(bb) {
        for (let cb = 0; cb < this.postProcesses.length; ++cb) {
          const sb = this.postProcesses[cb];
          if (sb.name === bb) return sb
        }
        return null
      }
      isActiveMesh(bb) {
        return -1 !== this._activeMeshes.indexOf(bb)
      }
      get uid() {
        return this._uid || (this._uid = kb.g.RandomId()), this._uid
      }
      addExternalData(bb, cb) {
        return this._externalData || (this._externalData = new Ib), this._externalData.add(bb, cb)
      }
      getExternalData(bb) {
        return this._externalData ? this._externalData.get(bb) : null
      }
      getOrAddExternalDataWithFactory(bb, cb) {
        return this._externalData || (this._externalData = new Ib), this._externalData.getOrAddWithFactory(bb, cb)
      }
      removeExternalData(bb) {
        return this._externalData.remove(bb)
      }
      _evaluateSubMesh(bb, cb, sb, kb) {
        if (kb || bb.isInFrustum(this._frustumPlanes)) {
          for (let kb = 0, Wb = this._evaluateSubMeshStage; kb < Wb.length; kb++) {
            Wb[kb].action(cb, bb)
          }
          const sb = bb.pm();
          null !== sb && void 0 !== sb && (sb.hasRenderTargetTextures && null != sb.getRenderTargetTextures && -1 === this._processedMaterials.indexOf(sb) && (this._processedMaterials.push(sb), this._materialsRenderTargets.concatWithNoDuplicate(sb.getRenderTargetTextures())), this._renderingManager.dispatch(bb, cb, sb))
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
            const cb = this.activeCameras[bb];
            cb && cb._activeMeshes && cb._activeMeshes.dispose()
          }
      }
      freeRenderingGroups() {
        if (!this.blockfreeActiveMeshesAndRenderingGroups && (this._renderingManager && this._renderingManager.freeRenderingGroups(), this.textures))
          for (let bb = 0; bb < this.textures.length; bb++) {
            const cb = this.textures[bb];
            cb && cb.renderList && cb.freeRenderingGroups()
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
          cb = arguments.length > 1 ? arguments[1] : void 0,
          sb = arguments.length > 2 ? arguments[2] : void 0,
          kb = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
          ab = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (this.frameGraph) {
          this._renderWithFrameGraph(!0, !1, !0);
          const Tb = this.frameGraph.getTasksByClassName(["FrameGraphObjectRendererTask", "FrameGraphGeometryRendererTask"]);
          for (const bb of Tb) bb.objectRenderer._freezeActiveMeshes(kb);
          return this._freezeActiveMeshesCancel = (0, Wb.d)((() => {
            let bb = !0,
              cb = !0;
            for (const sb of Tb) bb && (bb = sb.objectRenderer._isFrozen), cb && (cb = null !== sb.objectRenderer._freezeActiveMeshesCancel);
            if (bb) return !0;
            if (!cb) throw new Error("Freezing active meshes was cancelled");
            return !1
          }), (() => {
            this._freezeActiveMeshesCancel = null, this._activeMeshesFrozen = !0, this._activeMeshesFrozenButKeepClipping = ab, this._skipEvaluateActiveMeshesCompletely = bb, cb?.()
          }), ((bb, cb) => {
            if (this._freezeActiveMeshesCancel = null, this.unfreezeActiveMeshes(), cb) {
              const cb = "Scene: Timeout while waiting for meshes to be frozen.";
              sb ? sb(cb) : (bs.c.Error(cb), bb && bs.c.Error(bb))
            } else {
              const cb = "Scene: An unexpected error occurred while trying to freeze active meshes.";
              sb ? sb(cb) : (bs.c.Error(cb), bb && (bs.c.Error(bb), bb.stack && bs.c.Error(bb.stack)))
            }
          })), this
        }
        return this.executeWhenReady((() => {
          if (this.activeCamera) {
            if (this._frustumPlanes || this.updateTransformMatrix(), this._evaluateActiveMeshes(), this._activeMeshesFrozen = !0, this._activeMeshesFrozenButKeepClipping = ab, this._skipEvaluateActiveMeshesCompletely = bb, kb)
              for (let bb = 0; bb < this._activeMeshes.length; bb++) this._activeMeshes.data[bb]._freeze();
            cb && cb()
          } else sb && sb("No active camera found")
        })), this
      }
      unfreezeActiveMeshes() {
        for (let bb = 0; bb < this.meshes.length; bb++) {
          const cb = this.meshes[bb];
          cb._internalAbstractMeshDataInfo && (cb._internalAbstractMeshDataInfo._isActive = !1)
        }
        if (this._freezeActiveMeshesCancel?.(), this._freezeActiveMeshesCancel = null, this.frameGraph) {
          const bb = this.frameGraph.getTasksByClassName(["FrameGraphObjectRendererTask", "FrameGraphGeometryRendererTask"]);
          for (const cb of bb) cb.objectRenderer._unfreezeActiveMeshes()
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
            for (let cb = 0; cb < bb; cb++) {
              this._activeMeshes.data[cb].computeWorldMatrix()
            }
          }
          if (this._activeParticleSystems) {
            const bb = this._activeParticleSystems.length;
            for (let cb = 0; cb < bb; cb++) this._activeParticleSystems.data[cb].animate()
          }
          return void this._renderingManager.resetSprites()
        }
        if (!this.activeCamera) return;
        this.onBeforeActiveMeshesEvaluationObservable.notifyObservers(this), this.activeCamera._activeMeshes.reset(), this._activeMeshes.reset(), this._renderingManager.reset(), this._processedMaterials.reset(), this._activeParticleSystems.reset(), this._activeSkeletons.reset(), this._softwareSkinnedMeshes.reset(), this._materialsRenderTargets.reset();
        for (let Wb = 0, ab = this._beforeEvaluateActiveMeshStage; Wb < ab.length; Wb++) {
          ab[Wb].action()
        }
        const bb = this.getActiveMeshCandidates(),
          cb = bb.length,
          sb = rb.b.Enabled,
          kb = this.customLODSelector;
        for (let Wb = 0; Wb < cb; Wb++) {
          const cb = bb.data[Wb],
            ab = !kb && !cb.qY && !cb._internalMeshDataInfo?._LODLevels.length;
          let Tb, Ub;
          if ((ab || (Tb = cb._internalAbstractMeshDataInfo._currentLOD.get(this.activeCamera), Tb ? Tb[1] = -1 : (Tb = [cb, -1], cb._internalAbstractMeshDataInfo._currentLOD.set(this.activeCamera, Tb))), !cb.isBlocked) && (sb && this._totalVertices.addCount(cb.getTotalVertices(), !1), cb.isReady() && cb.isEnabled() && !cb.bl.hasAZeroComponent)) {
            if (cb.computeWorldMatrix(), cb.actionManager && cb.actionManager.hasSpecificTriggers2(12, 13) && this._meshesForIntersections.pushNoDuplicate(cb), ab) Ub = cb;
            else if (Ub = kb ? kb(cb, this.activeCamera) : cb.getLOD(this.activeCamera), Tb[0] = Ub, Tb[1] = this._frameId, void 0 === Ub || null === Ub) continue;
            if (Ub !== cb && 0 !== Ub.billboardMode && Ub.computeWorldMatrix(), cb._preActivate(), cb.isVisible && cb.visibility > 0 && 0 !== (cb.layerMask & this.activeCamera.layerMask) && (this._skipFrustumClipping || cb.Rm || cb.isInFrustum(this._frustumPlanes))) {
              this._activeMeshes.push(cb), this.activeCamera._activeMeshes.push(cb), Ub !== cb && Ub._activate(this._renderId, !1);
              for (let bb = 0, sb = this._preActiveMeshStage; bb < sb.length; bb++) {
                sb[bb].action(cb)
              }
              cb._activate(this._renderId, !1) && (cb.qY ? cb._internalAbstractMeshDataInfo._actAsRegularMesh && (Ub = cb) : Ub._internalAbstractMeshDataInfo._onlyForInstances = !1, Ub._internalAbstractMeshDataInfo._isActive = !0, this._activeMesh(cb, Ub)), cb._postActivate()
            }
          }
        }
        if (this.onAfterActiveMeshesEvaluationObservable.notifyObservers(this), this.particlesEnabled) {
          this.onBeforeParticlesRenderingObservable.notifyObservers(this);
          for (let bb = 0; bb < this.mV.length; bb++) {
            const cb = this.mV[bb];
            if (!cb.isStarted() || !cb.emitter) continue;
            const sb = cb.emitter;
            sb.position && !sb.isEnabled() || (this._activeParticleSystems.push(cb), cb.animate(), this._renderingManager.dispatchParticles(cb))
          }
          this.onAfterParticlesRenderingObservable.notifyObservers(this)
        }
      }
      _prepareSkeleton(bb) {
        this._skeletonsEnabled && bb.skeleton && (this._activeSkeletons.pushNoDuplicate(bb.skeleton) && (bb.skeleton.prepare(), this._activeBones.addCount(bb.skeleton.bones.length, !1)), bb.computeBonesUsingShaders || this._softwareSkinnedMeshes.pushNoDuplicate(bb) && this.frameGraph && bb.applySkeleton(bb.skeleton))
      }
      _activeMesh(bb, cb) {
        this._prepareSkeleton(cb);
        let sb = bb.ykb || bb.qY || this.dispatchAllSubMeshesOfActiveMeshes || this._skipFrustumClipping || cb.Rm;
        if (cb && cb.XV && cb.XV.length > 0) {
          const kb = this.getActiveSubMeshCandidates(cb),
            Wb = kb.length;
          sb = sb || 1 === Wb;
          for (let ab = 0; ab < Wb; ab++) {
            const Wb = kb.data[ab];
            this._evaluateSubMesh(Wb, cb, bb, sb)
          }
        }
      }
      updateTransformMatrix(bb) {
        const cb = this.activeCamera;
        if (cb)
          if (cb._renderingMultiview) {
            const sb = cb._rigCameras[0],
              kb = cb._rigCameras[1];
            this.setTransformMatrix(sb.getViewMatrix(), sb.getProjectionMatrix(bb), kb.getViewMatrix(), kb.getProjectionMatrix(bb))
          } else this.setTransformMatrix(cb.getViewMatrix(), cb.getProjectionMatrix(bb))
      }
      _bindFrameBuffer(bb) {
        let cb = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this._useCurrentFrameBuffer || (bb && bb._multiviewTexture ? bb._multiviewTexture._bindFrameBuffer() : bb && bb.outputRenderTarget ? bb.outputRenderTarget._bindFrameBuffer() : this._engine._currentFrameBufferIsDefaultFrameBuffer() || this._engine.restoreDefaultFramebuffer()), cb && this._clearFrameBuffer(bb)
      }
      _clearFrameBuffer(bb) {
        if (bb && bb._multiviewTexture);
        else if (bb && bb.outputRenderTarget && !bb._renderingMultiview) {
          const cb = bb.outputRenderTarget;
          cb.onClearObservable.hasObservers() ? cb.onClearObservable.notifyObservers(this._engine) : cb.skipInitialClear || bb.isRightCamera || (this.autoClear && this._engine.clear(cb.clearColor || this._clearColor, !cb._cleared, !0, !0), cb._cleared = !0)
        } else this._defaultFrameBufferCleared ? this._engine.clear(null, !1, !0, !0) : (this._defaultFrameBufferCleared = !0, this._clear())
      }
      _renderForCamera(bb, cb) {
        let sb = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        if (bb && bb._skipRendering) return;
        const Wb = this._engine;
        if (this._activeCamera = bb, !this.activeCamera) throw new Error("Active camera not set");
        if (Wb.setViewport(this.activeCamera.viewport), this.resetCachedMaterial(), this._renderId++, !this.prePass && sb) {
          let cb = !0;
          bb._renderingMultiview && bb.outputRenderTarget && (cb = bb.outputRenderTarget.skipInitialClear, this.autoClear && (this._defaultFrameBufferCleared = !1, bb.outputRenderTarget.skipInitialClear = !1)), this._bindFrameBuffer(this._activeCamera), bb._renderingMultiview && bb.outputRenderTarget && (bb.outputRenderTarget.skipInitialClear = cb)
        }
        this.updateTransformMatrix(), this.onBeforeCameraRenderObservable.notifyObservers(this.activeCamera), this._engine.currentRenderPassId = bb.outputRenderTarget?.renderPassId ?? bb.renderPassId ?? 0, this._evaluateActiveMeshes();
        for (let kb = 0; kb < this._softwareSkinnedMeshes.length; kb++) {
          const bb = this._softwareSkinnedMeshes.data[kb];
          bb.applySkeleton(bb.skeleton)
        }
        this.onBeforeRenderTargetsRenderObservable.notifyObservers(this), this._renderTargets.concatWithNoDuplicate(this._materialsRenderTargets), bb.customRenderTargets && bb.customRenderTargets.length > 0 && this._renderTargets.concatWithNoDuplicate(bb.customRenderTargets), cb && cb.customRenderTargets && cb.customRenderTargets.length > 0 && this._renderTargets.concatWithNoDuplicate(cb.customRenderTargets), this.environmentTexture && this.environmentTexture.isRenderTarget && this._renderTargets.pushNoDuplicate(this.environmentTexture);
        for (let kb = 0, Ub = this._gatherActiveCameraRenderTargetsStage; kb < Ub.length; kb++) {
          Ub[kb].action(this._renderTargets)
        }
        let ab = !1;
        if (this.renderTargetsEnabled) {
          let bb;
          if (this._intermediateRendering = !0, this._renderTargets.length > 0) {
            kb.g.StartPerformanceCounter("Render targets", this._renderTargets.length > 0);
            const cb = this.getBoundingBoxRenderer?.();
            for (let sb = 0; sb < this._renderTargets.length; sb++) {
              const kb = this._renderTargets.data[sb];
              if (kb._shouldRender()) {
                this._renderId++;
                const sb = kb.activeCamera && kb.activeCamera !== this.activeCamera;
                cb && !bb && (bb = cb.renderList.length > 0 ? cb.renderList.data.slice() : [], bb.length = cb.renderList.length), kb.render(sb, this.dumpNextRenderTargets), ab = !0
              }
            }
            cb && bb && (cb.renderList.data = bb, cb.renderList.length = bb.length), kb.g.EndPerformanceCounter("Render targets", this._renderTargets.length > 0), this._renderId++
          }
          if (this._cameraDrawRenderTargetStage.length > 0) {
            const cb = this.getBoundingBoxRenderer?.();
            cb && !bb && (bb = cb.renderList.length > 0 ? cb.renderList.data.slice() : [], bb.length = cb.renderList.length);
            for (let bb = 0, sb = this._cameraDrawRenderTargetStage; bb < sb.length; bb++) {
              ab = sb[bb].action(this.activeCamera) || ab
            }
            cb && bb && (cb.renderList.data = bb, cb.renderList.length = bb.length)
          }
          this._intermediateRendering = !1
        }
        ab && !this.prePass && (this._bindFrameBuffer(this._activeCamera, !1), this.updateTransformMatrix()), this.onAfterRenderTargetsRenderObservable.notifyObservers(this), !this.postProcessManager || bb._multiviewTexture || this.prePass || this.postProcessManager._prepareFrame();
        for (let kb = 0, Ub = this._beforeCameraDrawStage; kb < Ub.length; kb++) {
          Ub[kb].action(this.activeCamera)
        }
        this.onBeforeDrawPhaseObservable.notifyObservers(this);
        const Tb = Wb.snapshotRendering && 1 === Wb.snapshotRenderingMode;
        Tb && this.finalizeSceneUbo(), this._renderingManager.render(null, null, !0, !Tb), this.onAfterDrawPhaseObservable.notifyObservers(this);
        for (let kb = 0, Ub = this._afterCameraDrawStage; kb < Ub.length; kb++) {
          Ub[kb].action(this.activeCamera)
        }
        if (this.postProcessManager && !bb._multiviewTexture) {
          const cb = bb.outputRenderTarget ? bb.outputRenderTarget.renderTarget : void 0;
          this.postProcessManager._finalizeFrame(bb.isIntermediate, cb)
        }
        for (let kb = 0, Ub = this._afterCameraPostProcessStage; kb < Ub.length; kb++) {
          Ub[kb].action(this.activeCamera)
        }
        this._renderTargets.reset(), this.onAfterCameraRenderObservable.notifyObservers(this.activeCamera)
      }
      _processSubCameras(bb) {
        let cb = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (0 === bb.cameraRigMode || bb._renderingMultiview) return bb._renderingMultiview && !this._multiviewSceneUbo && this._createMultiviewUbo(), this._renderForCamera(bb, void 0, cb), void this.onAfterRenderCameraObservable.notifyObservers(bb);
        if (bb._useMultiviewToSingleView) this._renderMultiviewToSingleView(bb);
        else {
          this.onBeforeCameraRenderObservable.notifyObservers(bb);
          for (let cb = 0; cb < bb._rigCameras.length; cb++) this._renderForCamera(bb._rigCameras[cb], bb)
        }
        this._activeCamera = bb, this.updateTransformMatrix(), this.onAfterRenderCameraObservable.notifyObservers(bb)
      }
      _checkIntersections() {
        for (let bb = 0; bb < this._meshesForIntersections.length; bb++) {
          const cb = this._meshesForIntersections.data[bb];
          if (cb.actionManager)
            for (let bb = 0; cb.actionManager && bb < cb.actionManager.actions.length; bb++) {
              const sb = cb.actionManager.actions[bb];
              if (12 === sb.trigger || 13 === sb.trigger) {
                const bb = sb.getTriggerParameter(),
                  kb = bb.mesh ? bb.mesh : bb,
                  Wb = kb.Ykb(cb, bb.usePreciseIntersection),
                  ab = cb._intersectionsInProgress.indexOf(kb);
                Wb && -1 === ab ? 12 === sb.trigger ? (sb._executeCurrent(mb.CreateNew(cb, void 0, kb)), cb._intersectionsInProgress.push(kb)) : 13 === sb.trigger && cb._intersectionsInProgress.push(kb) : !Wb && ab > -1 && (13 === sb.trigger && sb._executeCurrent(mb.CreateNew(cb, void 0, kb)), cb.actionManager.hasSpecificTrigger(13, (bb => {
                  const cb = bb.mesh ? bb.mesh : bb;
                  return kb === cb
                })) && 13 !== sb.trigger || cb._intersectionsInProgress.splice(ab, 1))
              }
            }
        }
      }
      _advancePhysicsEngineStep(bb) {}
      _animate(bb) {}
      animate() {
        if (this._engine.isDeterministicLockStep()) {
          let bb = Math.max(as.MinDeltaTime, Math.min(this._engine.getDeltaTime(), as.MaxDeltaTime)) + this._timeAccumulator;
          const cb = this._engine.getTimeStep(),
            sb = 1e3 / cb / 1e3;
          let kb = 0;
          const Wb = this._engine.getLockstepMaxSteps();
          let ab = Math.floor(bb / cb);
          for (ab = Math.min(ab, Wb); bb > 0 && kb < ab;) this.onBeforeStepObservable.notifyObservers(this), this._animationRatio = cb * sb, this._animate(cb), this.onAfterAnimationsObservable.notifyObservers(this), this.Ay && this._advancePhysicsEngineStep(cb), this.onAfterStepObservable.notifyObservers(this), this._currentStepId++, kb++, bb -= cb;
          this._timeAccumulator = bb < 0 ? 0 : bb
        } else {
          const bb = this.useConstantAnimationDeltaTime ? 16 : Math.max(as.MinDeltaTime, Math.min(this._engine.getDeltaTime(), as.MaxDeltaTime));
          this._animationRatio = .06 * bb, this._animate(), this.onAfterAnimationsObservable.notifyObservers(this), this.Ay && this._advancePhysicsEngineStep(bb)
        }
      }
      _clear() {
        (this.autoClearDepthAndStencil || this.autoClear) && this._engine.clear(this._clearColor, this.autoClear || this.forceWireframe || this.forcePointsCloud, this.autoClearDepthAndStencil, this.autoClearDepthAndStencil)
      }
      _checkCameraRenderTarget(bb) {
        if (bb?.outputRenderTarget && !bb?.isRigCamera && (bb.outputRenderTarget._cleared = !1), bb?.rigCameras?.length)
          for (let cb = 0; cb < bb.rigCameras.length; ++cb) {
            const sb = bb.rigCameras[cb].outputRenderTarget;
            sb && (sb._cleared = !1)
          }
      }
      resetDrawCache(bb) {
        if (this.meshes)
          for (const cb of this.meshes) cb.resetDrawCache(bb)
      }
      _renderWithFrameGraph() {
        let bb = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          cb = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (this.activeCamera = null, this.activeCameras = null, bb)
          for (const sb of this.cameras)
            if (sb.update(), 0 !== sb.cameraRigMode)
              for (let bb = 0; bb < sb._rigCameras.length; bb++) sb._rigCameras[bb].update();
        this.onBeforeRenderObservable.notifyObservers(this), this._renderingMeshEvaluationDepth++;
        try {
          this._renderWithFrameGraphAfterBeforeRender(cb)
        } finally {
          this._renderingMeshEvaluationDepth--
        }
      }
      _renderWithFrameGraphAfterBeforeRender(bb) {
        this.onBeforeRenderTargetsRenderObservable.notifyObservers(this), this._renderTargets.reset();
        const cb = this._frameGraph?.findMainCamera() ?? null;
        if (this.renderTargetsEnabled) {
          this.environmentTexture && this.environmentTexture.isRenderTarget && this._renderTargets.pushNoDuplicate(this.environmentTexture), this._renderTargets.concatWithNoDuplicate(this.customRenderTargets), kb.g.StartPerformanceCounter("Custom render targets", this._renderTargets.length > 0);
          for (let bb = 0; bb < this._renderTargets.length; bb++) {
            const sb = this._renderTargets.data[bb],
              kb = sb.activeCamera || cb;
            this._renderRenderTarget(sb, kb, !0, this.dumpNextRenderTargets)
          }
          kb.g.EndPerformanceCounter("Custom render targets", this._renderTargets.length > 0), this._renderId++
        }
        this.onAfterRenderTargetsRenderObservable.notifyObservers(this);
        for (let sb = 0, kb = this._beforeClearStage; sb < kb.length; sb++) {
          kb[sb].action()
        }
        if (this._engine.snapshotRendering && 1 === this._engine.snapshotRenderingMode) this._activeParticleSystems.reset(), this._activeSkeletons.reset(), this._softwareSkinnedMeshes.reset();
        else {
          const cb = this.getActiveMeshCandidates(),
            sb = cb.length;
          if (this._activeMeshesFrozen) {
            if (!this._skipEvaluateActiveMeshesCompletely)
              for (let bb = 0; bb < sb; bb++) {
                const sb = cb.data[bb];
                sb._internalAbstractMeshDataInfo._wasActiveLastFrame && sb.computeWorldMatrix()
              }
            if (this.particlesEnabled) {
              const bb = this._activeParticleSystems.length;
              for (let cb = 0; cb < bb; cb++) this._activeParticleSystems.data[cb].animate()
            }
          } else {
            this._activeParticleSystems.reset(), this._activeSkeletons.reset(), this._softwareSkinnedMeshes.reset();
            for (let kb = 0; kb < sb; kb++) {
              const sb = cb.data[kb];
              sb._internalAbstractMeshDataInfo._wasActiveLastFrame = !1, sb.isBlocked || (this._totalVertices.addCount(sb.getTotalVertices(), !1), sb.isReady() && sb.isEnabled() && !sb.bl.hasAZeroComponent && (sb.computeWorldMatrix(bb), sb.actionManager && sb.actionManager.hasSpecificTriggers2(12, 13) && this._meshesForIntersections.pushNoDuplicate(sb)))
            }
            if (this.particlesEnabled)
              for (let bb = 0; bb < this.mV.length; bb++) {
                const cb = this.mV[bb];
                if (!cb.isStarted() || !cb.emitter) continue;
                const sb = cb.emitter;
                sb.position && !sb.isEnabled() || (this._activeParticleSystems.push(cb), cb.animate())
              }
          }
        }
        this.frameGraph?.execute()
      }
      _renderRenderTarget(bb, cb) {
        let sb = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          kb = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (this._intermediateRendering = !0, bb._shouldRender()) {
          if (this._renderId++, this.activeCamera = cb, !this.activeCamera) throw new Error("Active camera not set");
          this._engine.setViewport(this.activeCamera.viewport), this.updateTransformMatrix(), bb.render(sb, kb)
        }
        this._intermediateRendering = !1
      }
      render() {
        let bb = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          cb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this.Scb) return;
        const sb = this._renderingMeshEvaluationDepth;
        try {
          this._renderFrame(bb, cb)
        } finally {
          this._renderingMeshEvaluationDepth = sb
        }
      }
      _renderFrame(bb, cb) {
        if (this.onReadyObservable.hasObservers() && null === this._executeWhenReadyTimeoutId && this._checkIsReady(), Qb.b.EY = this._getFloatingOriginScene, this._frameId++, this._defaultFrameBufferCleared = !1, this._checkCameraRenderTarget(this.activeCamera), this.activeCameras?.length)
          for (const sb of this.activeCameras) this._checkCameraRenderTarget(sb);
        this._registerTransientComponents(), this._activeParticles.fetchNewFrame(), this._totalVertices.fetchNewFrame(), this._activeIndices.fetchNewFrame(), this._activeBones.fetchNewFrame(), this._meshesForIntersections.reset(), this.resetCachedMaterial(), this.onBeforeAnimationsObservable.notifyObservers(this), this.actionManager && this.actionManager.processTrigger(11), cb || this.animate();
        for (let sb = 0, kb = this._beforeCameraUpdateStage; sb < kb.length; sb++) {
          kb[sb].action()
        }
        if (bb)
          if (this.activeCameras && this.activeCameras.length > 0)
            for (let sb = 0; sb < this.activeCameras.length; sb++) {
              const bb = this.activeCameras[sb];
              if (bb.update(), 0 !== bb.cameraRigMode)
                for (let cb = 0; cb < bb._rigCameras.length; cb++) bb._rigCameras[cb].update()
            } else if (this.activeCamera && (this.activeCamera.update(), 0 !== this.activeCamera.cameraRigMode))
              for (let sb = 0; sb < this.activeCamera._rigCameras.length; sb++) this.activeCamera._rigCameras[sb].update();
        if (this.customRenderFunction) this._renderId++, this._engine.currentRenderPassId = 0, this._renderingMeshEvaluationDepth++, this.customRenderFunction(bb, cb);
        else {
          this.onBeforeRenderObservable.notifyObservers(this), this._renderingMeshEvaluationDepth++, this.onBeforeRenderTargetsRenderObservable.notifyObservers(this);
          const bb = this.activeCameras?.length ? this.activeCameras[0] : this.activeCamera;
          if (this.renderTargetsEnabled) {
            kb.g.StartPerformanceCounter("Custom render targets", this.customRenderTargets.length > 0);
            for (let cb = 0; cb < this.customRenderTargets.length; cb++) {
              const sb = this.customRenderTargets[cb],
                kb = sb.activeCamera || this.activeCamera;
              this._renderRenderTarget(sb, kb, bb !== kb, this.dumpNextRenderTargets)
            }
            kb.g.EndPerformanceCounter("Custom render targets", this.customRenderTargets.length > 0), this._renderId++
          }
          this._engine.currentRenderPassId = bb?.renderPassId ?? 0, this.activeCamera = bb, this._activeCamera && 22 !== this._activeCamera.cameraRigMode && !this.prePass && this._bindFrameBuffer(this._activeCamera, !1), this.onAfterRenderTargetsRenderObservable.notifyObservers(this);
          for (let cb = 0, sb = this._beforeClearStage; cb < sb.length; cb++) {
            sb[cb].action()
          }
          this._clearFrameBuffer(this.activeCamera);
          for (let cb = 0, sb = this._gatherRenderTargetsStage; cb < sb.length; cb++) {
            sb[cb].action(this._renderTargets)
          }
          if (this.activeCameras && this.activeCameras.length > 0)
            for (let cb = 0; cb < this.activeCameras.length; cb++) this._processSubCameras(this.activeCameras[cb], cb > 0);
          else {
            if (!this.activeCamera) throw new Error("No camera defined");
            this._processSubCameras(this.activeCamera, !!this.activeCamera.outputRenderTarget)
          }
        }
        this._inputManager._updateMeshUnderPointer(), this._checkIntersections();
        for (let sb = 0, kb = this._afterRenderStage; sb < kb.length; sb++) {
          kb[sb].action()
        }
        if (this.afterRender && this.afterRender(), this.onAfterRenderObservable.notifyObservers(this), this._toBeDisposed.length) {
          for (let bb = 0; bb < this._toBeDisposed.length; bb++) {
            const cb = this._toBeDisposed[bb];
            cb && cb.dispose()
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
        if (this.Scb) return;
        if (this._isDisposing = !0, this.beforeRender = null, this.afterRender = null, this.metadata = null, this.skeletons.length = 0, this.morphTargetManagers.length = 0, this._transientComponents.length = 0, this._isReadyForMeshStage.clear(), this._beforeEvaluateActiveMeshStage.clear(), this._evaluateSubMeshStage.clear(), this._preActiveMeshStage.clear(), this._cameraDrawRenderTargetStage.clear(), this._beforeCameraDrawStage.clear(), this._beforeRenderTargetDrawStage.clear(), this._beforeRenderingGroupDrawStage.clear(), this._beforeRenderingMeshStage.clear(), this._afterRenderingMeshStage.clear(), this._afterRenderingGroupDrawStage.clear(), this._afterCameraDrawStage.clear(), this._afterRenderTargetDrawStage.clear(), this._afterRenderStage.clear(), this._beforeCameraUpdateStage.clear(), this._beforeClearStage.clear(), this._gatherRenderTargetsStage.clear(), this._gatherActiveCameraRenderTargetsStage.clear(), this._pointerMoveStage.clear(), this._pointerDownStage.clear(), this._pointerUpStage.clear(), this._isReadyChecks.length = 0, this.importedMeshesFiles = [], this._activeAnimatables && (0, Lb.b)(this.stopAllAnimations)) {
          for (const bb of this._activeAnimatables) bb.onAnimationEndObservable.clear(), bb.onAnimationEnd = null;
          this.stopAllAnimations()
        }
        this.resetCachedMaterial(), this.activeCamera && (this.activeCamera._activeMeshes.dispose(), this.activeCamera = null), this.activeCameras = null, this._activeMeshes.dispose(), this._renderingManager.dispose(), this._processedMaterials.dispose(), this._activeParticleSystems.dispose(), this._activeSkeletons.dispose(), this._softwareSkinnedMeshes.dispose(), this._renderTargets.dispose(), this._materialsRenderTargets.dispose(), this._registeredForLateAnimationBindings.dispose(), this._animationWrites.length = 0, this._animationWriteCount = 0, this._animationStepWriteCount = 0, this._meshesForIntersections.dispose(), this._toBeDisposed.length = 0;
        const bb = this._activeRequests.slice();
        for (const ab of bb) ab.abort();
        this._activeRequests.length = 0;
        try {
          this.ZY.notifyObservers(this)
        } catch (Wb) {
          bs.c.Error("An error occurred while calling onDisposeObservable!", Wb)
        }
        this.detachControl();
        const cb = this._engine.getInputElement?.();
        if (cb)
          for (let ab = 0; ab < this.cameras.length; ab++) this.cameras[ab].detachControl();
        this._disposeList(this.animationGroups), this._disposeList(this.lights), this._defaultMaterial && this._defaultMaterial.dispose(), this._disposeList(this.multiMaterials), this._disposeList(this.materials), this._disposeList(this.meshes, (bb => bb.dispose(!0))), this._disposeList(this.transformNodes, (bb => bb.dispose(!0)));
        const sb = this.cameras;
        this._disposeList(sb), this._disposeList(this.mV), this._disposeList(this.postProcesses), this._disposeList(this.textures), this._disposeList(this.morphTargetManagers), this._disposeList(this.frameGraphs), this._sceneUbo.dispose(), this._multiviewSceneUbo && this._multiviewSceneUbo.dispose(), this.postProcessManager.dispose(), this._disposeList(this._components);
        let kb = this._engine.scenes.indexOf(this);
        if (kb > -1 && this._engine.scenes.splice(kb, 1), this._floatingOriginScene = void 0, 0 === this._engine.scenes.length && (0, Qb.h)(), Vb.d._LastCreatedScene === this) {
          Vb.d._LastCreatedScene = null;
          let bb = Vb.d.Instances.length - 1;
          for (; bb >= 0;) {
            const cb = Vb.d.Instances[bb];
            if (cb.scenes.length > 0) {
              Vb.d._LastCreatedScene = cb.scenes[this._engine.scenes.length - 1];
              break
            }
            bb--
          }
        }
        kb = this._engine._virtualScenes.indexOf(this), kb > -1 && this._engine._virtualScenes.splice(kb, 1), this._engine.wipeCaches(!0), this.ZY.clear(), this.onBeforeRenderObservable.clear(), this.onAfterRenderObservable.clear(), this.onBeforeRenderTargetsRenderObservable.clear(), this.onAfterRenderTargetsRenderObservable.clear(), this.onAfterStepObservable.clear(), this.onBeforeStepObservable.clear(), this.onBeforeActiveMeshesEvaluationObservable.clear(), this.onAfterActiveMeshesEvaluationObservable.clear(), this.onBeforeParticlesRenderingObservable.clear(), this.onAfterParticlesRenderingObservable.clear(), this.onBeforeDrawPhaseObservable.clear(), this.onAfterDrawPhaseObservable.clear(), this.onBeforeAnimationsObservable.clear(), this.onAfterAnimationsObservable.clear(), this.onDataLoadedObservable.clear(), this.onBeforeRenderingGroupObservable.clear(), this.onAfterRenderingGroupObservable.clear(), this.onMeshImportedObservable.clear(), this.onBeforeCameraRenderObservable.clear(), this.onAfterCameraRenderObservable.clear(), this.onAfterRenderCameraObservable.clear(), this.onReadyObservable.clear(), this.onNewCameraAddedObservable.clear(), this.onCameraRemovedObservable.clear(), this.onNewLightAddedObservable.clear(), this.onLightRemovedObservable.clear(), this.onNewGeometryAddedObservable.clear(), this.onGeometryRemovedObservable.clear(), this.onNewTransformNodeAddedObservable.clear(), this.onTransformNodeRemovedObservable.clear(), this.onNewMeshAddedObservable.clear(), this.onMeshRemovedObservable.clear(), this.onNewSkeletonAddedObservable.clear(), this.onSkeletonRemovedObservable.clear(), this.onNewMaterialAddedObservable.clear(), this.onNewMultiMaterialAddedObservable.clear(), this.onMaterialRemovedObservable.clear(), this.onMultiMaterialRemovedObservable.clear(), this.onNewTextureAddedObservable.clear(), this.onTextureRemovedObservable.clear(), this.onNewFrameGraphAddedObservable.clear(), this.onFrameGraphRemovedObservable.clear(), this.onNewObjectRendererAddedObservable.clear(), this.onObjectRendererRemovedObservable.clear(), this.onPrePointerObservable.clear(), this.onPointerObservable.clear(), this.onPreKeyboardObservable.clear(), this.onKeyboardObservable.clear(), this.onActiveCameraChanged.clear(), this.onScenePerformancePriorityChangedObservable.clear(), this.onClearColorChangedObservable.clear(), this.onEnvironmentTextureChangedObservable.clear(), this.onMeshUnderPointerUpdatedObservable.clear(), this._isDisposed = !0
      }
      _disposeList(bb, cb) {
        const sb = bb.slice(0);
        cb = cb ?? (bb => bb.dispose());
        for (const kb of sb) cb(kb);
        bb.length = 0
      }
      get Scb() {
        return this._isDisposed
      }
      clearCachedVertexData() {
        for (let bb = 0; bb < this.meshes.length; bb++) {
          const cb = this.meshes[bb].geometry;
          cb && cb.clearCachedData()
        }
      }
      cleanCachedTextureBuffer() {
        for (const bb of this.textures) {
          bb._buffer && (bb._buffer = null)
        }
      }
      getWorldExtends(bb) {
        const cb = new fb.p(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
          sb = new fb.p(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
        bb = bb || (() => !0);
        const kb = this.meshes.filter(bb);
        for (const Wb of kb) {
          if (Wb.computeWorldMatrix(!0), !Wb.XV || 0 === Wb.XV.length || Wb.infiniteDistance) continue;
          const bb = Wb.PJ(),
            kb = bb.boundingBox.minimumWorld,
            ab = bb.boundingBox.maximumWorld;
          fb.p.CheckExtends(kb, cb, sb), fb.p.CheckExtends(ab, cb, sb)
        }
        return cb.x === Number.MAX_VALUE ? {
          min: fb.p.Zero(),
          max: fb.p.Zero()
        } : {
          min: cb,
          max: sb
        }
      }
      createPickingRay(bb, cb, sb, kb) {
        throw (0, Lb.i)("Ray")
      }
      createPickingRayToRef(bb, cb, sb, kb, Wb) {
        throw (0, Lb.i)("Ray")
      }
      createPickingRayInCameraSpace(bb, cb, sb) {
        throw (0, Lb.i)("Ray")
      }
      createPickingRayInCameraSpaceToRef(bb, cb, sb, kb) {
        throw (0, Lb.i)("Ray")
      }
      Wn(bb, cb, sb, kb, Wb, ab) {
        const Tb = (0, Lb.i)("Ray", !0);
        return Tb && bs.c.Warn(Tb), new nb.e
      }
      pickWithBoundingInfo(bb, cb, sb, kb, Wb) {
        const ab = (0, Lb.i)("Ray", !0);
        return ab && bs.c.Warn(ab), new nb.e
      }
      pickWithRay(bb, cb, sb, kb) {
        throw (0, Lb.i)("Ray")
      }
      multiPick(bb, cb, sb, kb, Wb) {
        throw (0, Lb.i)("Ray")
      }
      multiPickWithRay(bb, cb, sb) {
        throw (0, Lb.i)("Ray")
      }
      setPointerOverMesh(bb, cb, sb) {
        this._inputManager.setPointerOverMesh(bb, cb, sb)
      }
      getPointerOverMesh() {
        return this._inputManager.getPointerOverMesh()
      }
      _rebuildGeometries() {
        for (const bb of this.geometries) bb._rebuild();
        for (const bb of this.meshes) bb._rebuild();
        this.postProcessManager && this.postProcessManager._rebuild();
        for (const bb of this._components) bb.rebuild();
        for (const bb of this.mV) bb.rebuild();
        if (this.spriteManagers)
          for (const bb of this.spriteManagers) bb.rebuild()
      }
      _rebuildTextures() {
        for (const bb of this.textures) bb._rebuild(!0);
        this.markAllMaterialsAsDirty(1)
      }
      _getByTags(bb, cb, sb) {
        if (void 0 === cb) return bb;
        const kb = [];
        for (const Wb in bb) {
          const ab = bb[Wb];
          Hb.c && Hb.c.MatchesQuery(ab, cb) && (!sb || sb(ab)) && kb.push(ab)
        }
        return kb
      }
      getMeshesByTags(bb, cb) {
        return this._getByTags(this.meshes, bb, cb)
      }
      getCamerasByTags(bb, cb) {
        return this._getByTags(this.cameras, bb, cb)
      }
      getLightsByTags(bb, cb) {
        return this._getByTags(this.lights, bb, cb)
      }
      getMaterialByTags(bb, cb) {
        return this._getByTags(this.materials, bb, cb).concat(this._getByTags(this.multiMaterials, bb, cb))
      }
      getTransformNodesByTags(bb, cb) {
        return this._getByTags(this.transformNodes, bb, cb)
      }
      setRenderingOrder(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          sb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          kb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        this._renderingManager.setRenderingOrder(bb, cb, sb, kb)
      }
      setRenderingAutoClearDepthStencil(bb, cb) {
        let sb = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          kb = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        this._renderingManager.setRenderingAutoClearDepthStencil(bb, cb, sb, kb)
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
      markAllMaterialsAsDirty(bb, cb) {
        if (!this._blockMaterialDirtyMechanism)
          for (const sb of this.materials) cb && !cb(sb) || sb.Tcb(bb)
      }
      _loadFile(bb, cb, sb, kb, Wb, ab, Tb) {
        const Ub = (0, vb.l)(bb, cb, sb, kb ? this.offlineProvider : void 0, Wb, ab, Tb);
        return this._activeRequests.push(Ub), Ub.onCompleteObservable.add((bb => {
          this._activeRequests.splice(this._activeRequests.indexOf(bb), 1)
        })), Ub
      }
      async _loadFileAsync(bb, cb, sb, kb, Wb) {
        return await new Promise(((ab, Tb) => {
          this._loadFile(bb, (bb => {
            ab(bb)
          }), cb, sb, kb, ((bb, cb) => {
            Tb(cb)
          }), Wb)
        }))
      }
      async _loadDelayedFileAsync(bb, cb, sb) {
        this._delayedFileRequests || (this._delayedFileRequests = new Map);
        const kb = `${bb}|${cb?"binary":"string"}`;
        let Wb = this._delayedFileRequests.get(kb);
        if (!Wb) {
          Wb = cb ? this._loadFileAsync(bb, void 0, sb, !0) : this._loadFileAsync(bb, void 0, sb, !1);
          const ab = Wb;
          (async () => {
            try {
              await ab
            } catch {}
            this._delayedFileRequests?.delete(kb)
          })(), this._delayedFileRequests.set(kb, Wb)
        }
        return await Wb
      }
      _requestFile(bb, cb, sb, kb, Wb, ab, Tb) {
        const Ub = (0, vb.r)(bb, cb, sb, kb ? this.offlineProvider : void 0, Wb, ab, Tb);
        return this._activeRequests.push(Ub), Ub.onCompleteObservable.add((bb => {
          this._activeRequests.splice(this._activeRequests.indexOf(bb), 1)
        })), Ub
      }
      async _requestFileAsync(bb, cb, sb, kb, Wb) {
        return await new Promise(((ab, Tb) => {
          this._requestFile(bb, (bb => {
            ab(bb)
          }), cb, sb, kb, (bb => {
            Tb(bb)
          }), Wb)
        }))
      }
      _readFile(bb, cb, sb, kb, Wb) {
        const ab = (0, vb.n)(bb, cb, sb, kb, Wb);
        return this._activeRequests.push(ab), ab.onCompleteObservable.add((bb => {
          this._activeRequests.splice(this._activeRequests.indexOf(bb), 1)
        })), ab
      }
      async _readFileAsync(bb, cb, sb) {
        return await new Promise(((kb, Wb) => {
          this._readFile(bb, (bb => {
            kb(bb)
          }), cb, sb, (bb => {
            Wb(bb)
          }))
        }))
      }
      getPerfCollector() {
        throw (0, Lb.i)("performanceViewerSceneExtension")
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
    as.FOGMODE_NONE = 0, as.FOGMODE_EXP = 1, as.FOGMODE_EXP2 = 2, as.FOGMODE_LINEAR = 3, as.MinDeltaTime = 1, as.MaxDeltaTime = 1e3, as._OriginalDefaultMaterialFactory = as.DefaultMaterialFactory;
    let Ts = !1;

    function Us() {
      Ts || (Ts = !0, (0, cs.h)("BABYLON.Scene", as))
    }(pb = as.prototype).sortActiveAnimatables ?? (pb.sortActiveAnimatables = (0, Lb.e)("Scene", "sortActiveAnimatables")), (bc = as.prototype).beginWeightedAnimation ?? (bc.beginWeightedAnimation = (0, Lb.e)("Scene", "beginWeightedAnimation")), (cc = as.prototype).beginAnimation ?? (cc.beginAnimation = (0, Lb.e)("Scene", "beginAnimation")), (sc = as.prototype).beginHierarchyAnimation ?? (sc.beginHierarchyAnimation = (0, Lb.e)("Scene", "beginHierarchyAnimation")), (kc = as.prototype).beginDirectAnimation ?? (kc.beginDirectAnimation = (0, Lb.e)("Scene", "beginDirectAnimation")), (Wc = as.prototype).beginDirectHierarchyAnimation ?? (Wc.beginDirectHierarchyAnimation = (0, Lb.e)("Scene", "beginDirectHierarchyAnimation")), (ac = as.prototype).getAnimatableByTarget ?? (ac.getAnimatableByTarget = (0, Lb.e)("Scene", "getAnimatableByTarget")), (Tc = as.prototype).getAllAnimatablesByTarget ?? (Tc.getAllAnimatablesByTarget = (0, Lb.e)("Scene", "getAllAnimatablesByTarget")), (Uc = as.prototype).stopAllAnimations ?? (Uc.stopAllAnimations = (0, Lb.e)("Scene", "stopAllAnimations")), (Ic = as.prototype).getSoundByName ?? (Ic.getSoundByName = (0, Lb.e)("Scene", "getSoundByName")), (Hc = as.prototype).createOrUpdateSelectionOctree ?? (Hc.createOrUpdateSelectionOctree = (0, Lb.e)("Scene", "createOrUpdateSelectionOctree")), (fc = as.prototype).createDefaultLight ?? (fc.createDefaultLight = (0, Lb.e)("Scene", "createDefaultLight")), (Mc = as.prototype).createDefaultCamera ?? (Mc.createDefaultCamera = (0, Lb.e)("Scene", "createDefaultCamera")), (Xc = as.prototype).createDefaultCameraOrLight ?? (Xc.createDefaultCameraOrLight = (0, Lb.e)("Scene", "createDefaultCameraOrLight")), (nc = as.prototype).createDefaultSkybox ?? (nc.createDefaultSkybox = (0, Lb.e)("Scene", "createDefaultSkybox")), (mc = as.prototype).createDefaultEnvironment ?? (mc.createDefaultEnvironment = (0, Lb.e)("Scene", "createDefaultEnvironment")), (lc = as.prototype).createDefaultVRExperience ?? (lc.createDefaultVRExperience = (0, Lb.e)("Scene", "createDefaultVRExperience")), (Qc = as.prototype).createDefaultXRExperienceAsync ?? (Qc.createDefaultXRExperienceAsync = (0, Lb.e)("Scene", "createDefaultXRExperienceAsync")), (ec = as.prototype).getGlowLayerByName ?? (ec.getGlowLayerByName = (0, Lb.e)("Scene", "getGlowLayerByName")), (Cc = as.prototype).getHighlightLayerByName ?? (Cc.getHighlightLayerByName = (0, Lb.e)("Scene", "getHighlightLayerByName")), (Nc = as.prototype).getSelectionOutlineLayerByName ?? (Nc.getSelectionOutlineLayerByName = (0, Lb.e)("Scene", "getSelectionOutlineLayerByName")), (Vc = as.prototype).removeLensFlareSystem ?? (Vc.removeLensFlareSystem = (0, Lb.e)("Scene", "removeLensFlareSystem")), (Lc = as.prototype).addLensFlareSystem ?? (Lc.addLensFlareSystem = (0, Lb.e)("Scene", "addLensFlareSystem")), (uc = as.prototype).getLensFlareSystemByName ?? (uc.getLensFlareSystemByName = (0, Lb.e)("Scene", "getLensFlareSystemByName")), (Yc = as.prototype).getLensFlareSystemByID ?? (Yc.getLensFlareSystemByID = (0, Lb.e)("Scene", "getLensFlareSystemByID")), (hc = as.prototype).getLensFlareSystemById ?? (hc.getLensFlareSystemById = (0, Lb.e)("Scene", "getLensFlareSystemById")), (Jc = as.prototype).getPhysicsEngine ?? (Jc.getPhysicsEngine = (0, Lb.e)("Scene", "getPhysicsEngine")), (gc = as.prototype).enablePhysics ?? (gc.enablePhysics = (0, Lb.e)("Scene", "enablePhysics")), (Bc = as.prototype).disablePhysicsEngine ?? (Bc.disablePhysicsEngine = (0, Lb.e)("Scene", "disablePhysicsEngine")), (tc = as.prototype).isPhysicsEnabled ?? (tc.isPhysicsEnabled = (0, Lb.e)("Scene", "isPhysicsEnabled")), (yc = as.prototype).deleteCompoundImpostor ?? (yc.deleteCompoundImpostor = (0, Lb.e)("Scene", "deleteCompoundImpostor")), (Pc = as.prototype).removeReflectionProbe ?? (Pc.removeReflectionProbe = (0, Lb.e)("Scene", "removeReflectionProbe")), (Dc = as.prototype).addReflectionProbe ?? (Dc.addReflectionProbe = (0, Lb.e)("Scene", "addReflectionProbe")), (Ec = as.prototype).getBoundingBoxRenderer ?? (Ec.getBoundingBoxRenderer = (0, Lb.e)("Scene", "getBoundingBoxRenderer")), (ic = as.prototype).enableDepthRenderer ?? (ic.enableDepthRenderer = (0, Lb.e)("Scene", "enableDepthRenderer")), (Oc = as.prototype).disableDepthRenderer ?? (Oc.disableDepthRenderer = (0, Lb.e)("Scene", "disableDepthRenderer")), (Gc = as.prototype).enableFluidRenderer ?? (Gc.enableFluidRenderer = (0, Lb.e)("Scene", "enableFluidRenderer")), (Kc = as.prototype).disableFluidRenderer ?? (Kc.disableFluidRenderer = (0, Lb.e)("Scene", "disableFluidRenderer")), (Zc = as.prototype).enableGeometryBufferRenderer ?? (Zc.enableGeometryBufferRenderer = (0, Lb.e)("Scene", "enableGeometryBufferRenderer")), (zc = as.prototype).disableGeometryBufferRenderer ?? (zc.disableGeometryBufferRenderer = (0, Lb.e)("Scene", "disableGeometryBufferRenderer")), (qc = as.prototype).enableIblCdfGenerator ?? (qc.enableIblCdfGenerator = (0, Lb.e)("Scene", "enableIblCdfGenerator")), (dc = as.prototype).disableIblCdfGenerator ?? (dc.disableIblCdfGenerator = (0, Lb.e)("Scene", "disableIblCdfGenerator")), (Ac = as.prototype).getOutlineRenderer ?? (Ac.getOutlineRenderer = (0, Lb.e)("Scene", "getOutlineRenderer")), (wc = as.prototype).enablePrePassRenderer ?? (wc.enablePrePassRenderer = (0, Lb.e)("Scene", "enablePrePassRenderer")), (rc = as.prototype).disablePrePassRenderer ?? (rc.disablePrePassRenderer = (0, Lb.e)("Scene", "disablePrePassRenderer")), (oc = as.prototype).enableSubSurfaceForPrePass ?? (oc.enableSubSurfaceForPrePass = (0, Lb.e)("Scene", "enableSubSurfaceForPrePass")), (Sc = as.prototype).disableSubSurfaceForPrePass ?? (Sc.disableSubSurfaceForPrePass = (0, Lb.e)("Scene", "disableSubSurfaceForPrePass")), (Rc = as.prototype).pickSprite ?? (Rc.pickSprite = (0, Lb.e)("Scene", "pickSprite")), (vc = as.prototype).pickSpriteWithRay ?? (vc.pickSpriteWithRay = (0, Lb.e)("Scene", "pickSpriteWithRay")), (Fc = as.prototype).multiPickSprite ?? (Fc.multiPickSprite = (0, Lb.e)("Scene", "multiPickSprite")), (xc = as.prototype).multiPickSpriteWithRay ?? (xc.multiPickSpriteWithRay = (0, Lb.e)("Scene", "multiPickSpriteWithRay")), (jc = as.prototype).setPointerOverSprite ?? (jc.setPointerOverSprite = (0, Lb.e)("Scene", "setPointerOverSprite")), (pc = as.prototype).getPointerOverSprite ?? (pc.getPointerOverSprite = (0, Lb.e)("Scene", "getPointerOverSprite")), Object.getOwnPropertyDescriptor(as.prototype, "mainSoundTrack") || Object.defineProperty(as.prototype, "mainSoundTrack", (0, Lb.d)("Scene", "mainSoundTrack")), Object.getOwnPropertyDescriptor(as.prototype, "soundTracks") || Object.defineProperty(as.prototype, "soundTracks", (0, Lb.d)("Scene", "soundTracks")), Object.getOwnPropertyDescriptor(as.prototype, "audioEnabled") || Object.defineProperty(as.prototype, "audioEnabled", (0, Lb.d)("Scene", "audioEnabled")), Object.getOwnPropertyDescriptor(as.prototype, "headphone") || Object.defineProperty(as.prototype, "headphone", (0, Lb.d)("Scene", "headphone")), Object.getOwnPropertyDescriptor(as.prototype, "audioListenerPositionProvider") || Object.defineProperty(as.prototype, "audioListenerPositionProvider", (0, Lb.d)("Scene", "audioListenerPositionProvider")), Object.getOwnPropertyDescriptor(as.prototype, "audioListenerRotationProvider") || Object.defineProperty(as.prototype, "audioListenerRotationProvider", (0, Lb.d)("Scene", "audioListenerRotationProvider")), Object.getOwnPropertyDescriptor(as.prototype, "audioPositioningRefreshRate") || Object.defineProperty(as.prototype, "audioPositioningRefreshRate", (0, Lb.d)("Scene", "audioPositioningRefreshRate")), Object.getOwnPropertyDescriptor(as.prototype, "selectionOctree") || Object.defineProperty(as.prototype, "selectionOctree", (0, Lb.d)("Scene", "selectionOctree")), Object.getOwnPropertyDescriptor(as.prototype, "debugLayer") || Object.defineProperty(as.prototype, "debugLayer", (0, Lb.d)("Scene", "debugLayer")), Object.getOwnPropertyDescriptor(as.prototype, "gamepadManager") || Object.defineProperty(as.prototype, "gamepadManager", (0, Lb.d)("Scene", "gamepadManager")), Object.getOwnPropertyDescriptor(as.prototype, "simplificationQueue") || Object.defineProperty(as.prototype, "simplificationQueue", (0, Lb.d)("Scene", "simplificationQueue")), Object.getOwnPropertyDescriptor(as.prototype, "onBeforePhysicsObservable") || Object.defineProperty(as.prototype, "onBeforePhysicsObservable", (0, Lb.d)("Scene", "onBeforePhysicsObservable")), Object.getOwnPropertyDescriptor(as.prototype, "onAfterPhysicsObservable") || Object.defineProperty(as.prototype, "onAfterPhysicsObservable", (0, Lb.d)("Scene", "onAfterPhysicsObservable")), Object.getOwnPropertyDescriptor(as.prototype, "reflectionProbes") || Object.defineProperty(as.prototype, "reflectionProbes", (0, Lb.d)("Scene", "reflectionProbes")), Object.getOwnPropertyDescriptor(as.prototype, "forceShowBoundingBoxes") || Object.defineProperty(as.prototype, "forceShowBoundingBoxes", (0, Lb.d)("Scene", "forceShowBoundingBoxes")), Object.getOwnPropertyDescriptor(as.prototype, "depthPeelingRenderer") || Object.defineProperty(as.prototype, "depthPeelingRenderer", (0, Lb.d)("Scene", "depthPeelingRenderer")), Object.getOwnPropertyDescriptor(as.prototype, "useOrderIndependentTransparency") || Object.defineProperty(as.prototype, "useOrderIndependentTransparency", (0, Lb.d)("Scene", "useOrderIndependentTransparency")), Object.getOwnPropertyDescriptor(as.prototype, "fluidRenderer") || Object.defineProperty(as.prototype, "fluidRenderer", (0, Lb.d)("Scene", "fluidRenderer")), Object.getOwnPropertyDescriptor(as.prototype, "geometryBufferRenderer") || Object.defineProperty(as.prototype, "geometryBufferRenderer", (0, Lb.d)("Scene", "geometryBufferRenderer")), Object.getOwnPropertyDescriptor(as.prototype, "iblCdfGenerator") || Object.defineProperty(as.prototype, "iblCdfGenerator", (0, Lb.d)("Scene", "iblCdfGenerator")), Object.getOwnPropertyDescriptor(as.prototype, "prePassRenderer") || Object.defineProperty(as.prototype, "prePassRenderer", (0, Lb.d)("Scene", "prePassRenderer")), Object.getOwnPropertyDescriptor(as.prototype, "subSurfaceConfiguration") || Object.defineProperty(as.prototype, "subSurfaceConfiguration", (0, Lb.d)("Scene", "subSurfaceConfiguration")), Object.getOwnPropertyDescriptor(as.prototype, "spriteManagers") || Object.defineProperty(as.prototype, "spriteManagers", (0, Lb.d)("Scene", "spriteManagers")), Object.getOwnPropertyDescriptor(as.prototype, "onBeforeSpritesRenderingObservable") || Object.defineProperty(as.prototype, "onBeforeSpritesRenderingObservable", (0, Lb.d)("Scene", "onBeforeSpritesRenderingObservable")), Object.getOwnPropertyDescriptor(as.prototype, "onAfterSpritesRenderingObservable") || Object.defineProperty(as.prototype, "onAfterSpritesRenderingObservable", (0, Lb.d)("Scene", "onAfterSpritesRenderingObservable"))
  },
  39608: (bb, cb, sb) => {
    sb.d(cb, {
      e: () => kb,
      f: () => Wb
    });
    class kb {}
    kb.NAME_EFFECTLAYER = "EffectLayer", kb.NAME_LAYER = "Layer", kb.NAME_LENSFLARESYSTEM = "LensFlareSystem", kb.NAME_BOUNDINGBOXRENDERER = "BoundingBoxRenderer", kb.NAME_PARTICLESYSTEM = "ParticleSystem", kb.NAME_GAMEPAD = "Gamepad", kb.NAME_SIMPLIFICATIONQUEUE = "SimplificationQueue", kb.NAME_GEOMETRYBUFFERRENDERER = "GeometryBufferRenderer", kb.NAME_PREPASSRENDERER = "PrePassRenderer", kb.NAME_DEPTHRENDERER = "DepthRenderer", kb.NAME_DEPTHPEELINGRENDERER = "DepthPeelingRenderer", kb.NAME_POSTPROCESSRENDERPIPELINEMANAGER = "PostProcessRenderPipelineManager", kb.NAME_SPRITE = "Sprite", kb.NAME_SUBSURFACE = "SubSurface", kb.NAME_OUTLINERENDERER = "Outline", kb.NAME_PROCEDURALTEXTURE = "ProceduralTexture", kb.NAME_SHADOWGENERATOR = "ShadowGenerator", kb.NAME_OCTREE = "Rsb", kb.NAME_PHYSICSENGINE = "PhysicsEngine", kb.NAME_AUDIO = "Audio", kb.NAME_FLUIDRENDERER = "FluidRenderer", kb.NAME_IBLCDFGENERATOR = "iblCDFGenerator", kb.NAME_CLUSTEREDLIGHTING = "ClusteredLighting", kb.STEP_ISREADYFORMESH_EFFECTLAYER = 0, kb.STEP_ISREADYFORMESH_DEPTHRENDERER = 1, kb.STEP_BEFOREEVALUATEACTIVEMESH_BOUNDINGBOXRENDERER = 0, kb.STEP_EVALUATESUBMESH_BOUNDINGBOXRENDERER = 0, kb.STEP_PREACTIVEMESH_BOUNDINGBOXRENDERER = 0, kb.STEP_CAMERADRAWRENDERTARGET_EFFECTLAYER = 1, kb.STEP_BEFORECAMERADRAW_PREPASS = 0, kb.STEP_BEFORECAMERADRAW_EFFECTLAYER = 1, kb.STEP_BEFORECAMERADRAW_LAYER = 2, kb.STEP_BEFORERENDERTARGETDRAW_PREPASS = 0, kb.STEP_BEFORERENDERTARGETDRAW_LAYER = 1, kb.STEP_BEFORERENDERINGMESH_PREPASS = 0, kb.STEP_BEFORERENDERINGMESH_OUTLINE = 1, kb.STEP_AFTERRENDERINGMESH_PREPASS = 0, kb.STEP_AFTERRENDERINGMESH_OUTLINE = 1, kb.STEP_AFTERRENDERINGGROUPDRAW_EFFECTLAYER_DRAW = 0, kb.STEP_AFTERRENDERINGGROUPDRAW_BOUNDINGBOXRENDERER = 1, kb.STEP_BEFORECAMERAUPDATE_SIMPLIFICATIONQUEUE = 0, kb.STEP_BEFORECLEAR_PROCEDURALTEXTURE = 0, kb.STEP_BEFORECLEAR_PREPASS = 1, kb.STEP_BEFORERENDERTARGETCLEAR_PREPASS = 0, kb.STEP_AFTERRENDERTARGETDRAW_PREPASS = 0, kb.STEP_AFTERRENDERTARGETDRAW_LAYER = 1, kb.STEP_AFTERCAMERADRAW_PREPASS = 0, kb.STEP_AFTERCAMERADRAW_EFFECTLAYER = 1, kb.STEP_AFTERCAMERADRAW_LENSFLARESYSTEM = 2, kb.STEP_AFTERCAMERADRAW_EFFECTLAYER_DRAW = 3, kb.STEP_AFTERCAMERADRAW_LAYER = 4, kb.STEP_AFTERCAMERADRAW_FLUIDRENDERER = 5, kb.STEP_AFTERCAMERAPOSTPROCESS_LAYER = 0, kb.STEP_AFTERRENDERTARGETPOSTPROCESS_LAYER = 0, kb.STEP_AFTERRENDER_AUDIO = 0, kb.STEP_GATHERRENDERTARGETS_DEPTHRENDERER = 0, kb.STEP_GATHERRENDERTARGETS_GEOMETRYBUFFERRENDERER = 1, kb.STEP_GATHERRENDERTARGETS_SHADOWGENERATOR = 2, kb.STEP_GATHERRENDERTARGETS_POSTPROCESSRENDERPIPELINEMANAGER = 3, kb.STEP_GATHERACTIVECAMERARENDERTARGETS_DEPTHRENDERER = 0, kb.STEP_GATHERACTIVECAMERARENDERTARGETS_FLUIDRENDERER = 1, kb.STEP_GATHERACTIVECAMERARENDERTARGETS_CLUSTEREDLIGHTING = 2, kb.STEP_POINTERMOVE_SPRITE = 0, kb.STEP_POINTERDOWN_SPRITE = 0, kb.STEP_POINTERUP_SPRITE = 0;
    class Wb extends Array {
      constructor(bb) {
        super(...bb)
      }
      static Create() {
        return Object.create(Wb.prototype)
      }
      registerStep(bb, cb, sb) {
        let kb, Wb = 0;
        for (; Wb < this.length; Wb++) {
          if (kb = this[Wb].index, bb < kb) break
        }
        this.splice(Wb, 0, {
          index: bb,
          component: cb,
          action: sb.bind(cb)
        })
      }
      clear() {
        this.length = 0
      }
    }
  },
  39414: (bb, cb, sb) => {
    sb.d(cb, {
      d: () => Tb,
      h: () => Ub,
      j: () => kb,
      m: () => Wb,
      p: () => ab
    });

    function kb(bb, cb, sb, kb, Wb, ab) {
      function Tb(bb) {
        if (void 0 !== bb && "function" !== typeof bb) throw new TypeError("Function expected");
        return bb
      }
      for (var Ub, Ib = kb.kind, Hb = "getter" === Ib ? "get" : "setter" === Ib ? "set" : "value", fb = !cb && bb ? kb.static ? bb : bb.prototype : null, Mb = cb || (fb ? Object.getOwnPropertyDescriptor(fb, kb.name) : {}), Xb = !1, nb = sb.length - 1; nb >= 0; nb--) {
        var mb = {};
        for (var lb in kb) mb[lb] = "access" === lb ? {} : kb[lb];
        for (var lb in kb.access) mb.access[lb] = kb.access[lb];
        mb.addInitializer = function(bb) {
          if (Xb) throw new TypeError("Cannot add initializers after decoration has completed");
          ab.push(Tb(bb || null))
        };
        var Qb = (0, sb[nb])("accessor" === Ib ? {
          get: Mb.get,
          set: Mb.set
        } : Mb[Hb], mb);
        if ("accessor" === Ib) {
          if (void 0 === Qb) continue;
          if (null === Qb || "object" !== typeof Qb) throw new TypeError("Object expected");
          (Ub = Tb(Qb.get)) && (Mb.get = Ub), (Ub = Tb(Qb.set)) && (Mb.set = Ub), (Ub = Tb(Qb.init)) && Wb.unshift(Ub)
        } else(Ub = Tb(Qb)) && ("field" === Ib ? Wb.unshift(Ub) : Mb[Hb] = Ub)
      }
      fb && Object.defineProperty(fb, kb.name, Mb), Xb = !0
    }

    function Wb(bb, cb, sb) {
      for (var kb = arguments.length > 2, Wb = 0; Wb < cb.length; Wb++) sb = kb ? cb[Wb].call(bb, sb) : cb[Wb].call(bb);
      return kb ? sb : void 0
    }

    function ab(bb, cb, sb) {
      return "symbol" === typeof cb && (cb = cb.description ? "[".concat(cb.description, "]") : ""), Object.defineProperty(bb, "name", {
        configurable: !0,
        value: sb ? "".concat(sb, " ", cb) : cb
      })
    }
    Object.create;
    Object.create;

    function Tb(bb, cb, sb, kb) {
      if ("a" === sb && !kb) throw new TypeError("Private accessor was defined without a getter");
      if ("function" === typeof cb ? bb !== cb || !kb : !cb.has(bb)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return "m" === sb ? kb : "a" === sb ? kb.call(bb) : kb ? kb.value : cb.get(bb)
    }

    function Ub(bb, cb, sb, kb, Wb) {
      if ("m" === kb) throw new TypeError("Private method is not writable");
      if ("a" === kb && !Wb) throw new TypeError("Private accessor was defined without a setter");
      if ("function" === typeof cb ? bb !== cb || !Wb : !cb.has(bb)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return "a" === kb ? Wb.call(bb, sb) : Wb ? Wb.value = sb : cb.set(bb, sb), sb
    }
    "function" === typeof SuppressedError && SuppressedError
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);