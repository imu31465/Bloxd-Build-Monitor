export const id = 300;
export const ids = [300];
export const modules = {
  41579: (BB, OB, GB) => {
    GB.d(OB, {
      $: () => tO,
      $c: () => AB,
      $d: () => BO,
      $f: () => qG,
      A: () => bO,
      Ae: () => lG,
      Be: () => CG,
      Cb: () => OG,
      Cc: () => cB,
      Cd: () => FB,
      Dc: () => TB,
      De: () => TG,
      Df: () => xG,
      E: () => zB,
      Ed: () => gB,
      Fc: () => CO,
      Fd: () => LB,
      G: () => DO,
      Gb: () => lO,
      Gd: () => pO,
      H: () => dB,
      He: () => FG,
      Hf: () => BY,
      I: () => uB,
      Id: () => yB,
      Jb: () => jO,
      Jc: () => YO,
      Je: () => LG,
      Jf: () => GY,
      Kb: () => DB,
      Ke: () => iG,
      Kf: () => HG,
      L: () => KB,
      Ld: () => MB,
      Mc: () => PO,
      Nb: () => NB,
      Nc: () => kB,
      Nd: () => ZO,
      Nf: () => SG,
      O: () => hO,
      Oe: () => sG,
      Pb: () => RO,
      Pc: () => JO,
      Pf: () => ZG,
      Qd: () => TO,
      Qe: () => IG,
      R: () => lB,
      Rb: () => vB,
      Rd: () => EB,
      Sc: () => yO,
      Td: () => zO,
      Te: () => wG,
      Tf: () => vG,
      Ub: () => BG,
      V: () => aB,
      Vd: () => HO,
      Ve: () => mG,
      Wb: () => mB,
      Wc: () => GO,
      Wf: () => rG,
      Xc: () => fB,
      Xe: () => hG,
      Yf: () => XG,
      Z: () => oY,
      Zd: () => EO,
      Zf: () => WG,
      _b: () => xB,
      _e: () => cG,
      bb: () => HB,
      bc: () => sB,
      bf: () => EG,
      c: () => QB,
      cd: () => YB,
      ce: () => tB,
      cf: () => QY,
      dg: () => gG,
      ec: () => OO,
      ee: () => hB,
      fb: () => sO,
      fd: () => UB,
      g: () => oB,
      gf: () => UG,
      gg: () => nG,
      hc: () => qO,
      hg: () => AG,
      ie: () => VB,
      if: () => KG,
      j: () => nB,
      jb: () => xO,
      jd: () => oO,
      kc: () => bB,
      kd: () => ZB,
      kf: () => fG,
      kg: () => bG,
      lc: () => IB,
      lg: () => RG,
      m: () => rB,
      md: () => qB,
      me: () => PB,
      n: () => JG,
      nb: () => CB,
      nc: () => QO,
      ne: () => yG,
      nf: () => uG,
      oc: () => RB,
      od: () => pB,
      of: () => dG,
      pg: () => eG,
      qd: () => QG,
      r: () => jG,
      rb: () => vO,
      re: () => YY,
      rf: () => kG,
      sc: () => WB,
      se: () => NG,
      sg: () => zG,
      t: () => jB,
      tb: () => XB,
      td: () => oG,
      u: () => cO,
      uc: () => MO,
      uf: () => DY,
      v: () => aO,
      vb: () => YG,
      vc: () => JB,
      ve: () => VG,
      vg: () => pG,
      wd: () => SB,
      wf: () => tG,
      xb: () => DG,
      y: () => eB,
      yb: () => wB,
      yc: () => eO,
      ye: () => aG,
      zb: () => GG,
      zd: () => iB,
      zf: () => OY
    });
    const YB = -2147483648,
      DB = 12,
      QB = 12,
      oB = 4095,
      jB = {
        Lifeform: 1,
        Throwable: 2,
        Mesh: 3,
        Audio: 4,
        Item: 5
      },
      yB = {
        Alive: 1,
        Crouching: 2,
        OnGround: 4,
        InFluid: 8,
        Spectating: 16,
        AttemptingBreak: 32,
        Aiming: 64,
        FirstPerson: 128,
        Replay: 256,
        Breaking: 512,
        CursorAim: 1024,
        FreeCam: 2048,
        ZoomFirstPerson: 4096,
        JumpHeld: 8192,
        Flying: 16384,
        CanFly: 32768,
        PadSneakToggled: 65536,
        DropAhead: 131072,
        FreeCamMoves: 262144
      },
      JB = {
        None: 0,
        Entity: 1,
        Open: 2,
        Close: 3,
        Milk: 4,
        Shear: 5,
        Tame: 6,
        TameWith: 7,
        Feed: 8,
        Ride: 9
      },
      MB = {
        Off: 0,
        Key: 1,
        Touch: 2
      },
      PB = {
        Alive: 16
      },
      zB = 32,
      lB = {
        Stored: 1,
        Unloaded: 2,
        ResetAll: 4
      },
      pB = {
        opacity: 0,
        zIndex: 1,
        overlayColour: 2,
        canAttack: 3,
        canSee: 4,
        interactable: 5,
        interactionPrompt: 6,
        showDamageAmounts: 7,
        lockHeadToBody: 8,
        killfeedColour: 9,
        meshScaling: 10,
        colorInLobbyLeaderboard: 11,
        lobbyLeaderboardValues: 12,
        lobbyLeaderboardTags: 13,
        nameTagInfo: 14,
        hasPriorityNametag: 15,
        alwaysInInterest: 16,
        multilineTextBox: 17,
        ranks: 18,
        nameColour: 19,
        hideNameSeed: 20,
        _leaderboardAround: 21,
        _invincible: 22,
        _isAlive: 23,
        _invisibleEffect: 24,
        _glowingEffect: 25,
        _armourReductionSum: 26,
        _protectionEnchantSum: 27,
        _receivingDamageMultiplier: 28
      },
      qB = 4294967295,
      ZB = 0,
      NB = 4294967295,
      RB = 4,
      WB = 123,
      AB = -2147483648,
      VB = {
        Off: 0,
        All: 1,
        Filter: 2
      },
      SB = 51,
      nB = 5,
      UB = 4294967295,
      fB = 4294967295,
      kB = 128,
      dB = ["Workbench", "Furnace", "Artisan Bench", "Potion Table", "Salvaging Table", "Enchanting Table"],
      KB = 16,
      uB = 255,
      mB = {
        Off: 0,
        On: 1,
        Keep: 2
      },
      IB = {
        AltVeto: 1,
        AltAction: 2,
        Click: 3,
        ChangeBlock: 4,
        DropItem: 5,
        Tick: 6,
        Message: 7,
        Create: 8,
        Director: 11
      },
      FB = {
        Hotbar: 256,
        Drop: 257
      },
      iB = {
        Down: 1,
        Next: 2,
        Stack: 4,
        Repeat: 8
      },
      LB = {
        Rate: 0,
        Gyro: 1
      },
      gB = {
        Active: 1,
        JumpHeld: 2,
        JumpPressed: 4,
        Running: 8,
        SprintHeld: 16,
        SneakHeld: 32,
        SneakHoldMode: 64,
        Peek: 128,
        EndToggle: 256
      },
      rB = {
        Prevent: 0,
        Allow: 1,
        PreventPlacement: 2
      },
      XB = {
        None: 0,
        Pose: 1,
        FaceMovement: 2,
        FaceCamera: 3,
        FaceCursor: 4
      },
      wB = {
        LookPointed: 1,
        Held: 2
      },
      EB = 3,
      cB = {
        Synced: 0,
        ChestOpened: 1,
        ChestClosed: 2,
        ChestRefreshed: 3,
        EnchantingTable: 4,
        HotbarRequest: 5,
        Scrolled: 6,
        NumberKey: 7,
        DropRequested: 8
      },
      hB = {
        ToggleMenu: 0,
        EditBoard: 1,
        EditCodeBlock: 2,
        ViewCodeBlock: 3,
        EditCustomLobbyBlock: 4,
        OpenIronChest: 5,
        EditNameTag: 6,
        EditBook: 7,
        CantChangeBlock: 8,
        MiddleBarStart: 9,
        MiddleBarStop: 10,
        AimingOverlay: 11,
        BottomMessage: 12,
        Hitmarker: 13,
        ShotsLeft: 14,
        Crosshair: 15,
        ChargeStage: 16,
        EmoteWheelClose: 17,
        BlockMined: 18
      },
      aB = {
        Alt: 1,
        Up: 2,
        HasPos: 4,
        AttackOnly: 8
      },
      eB = {
        Solid: 1,
        Fluid: 2,
        PlaceOver: 4
      },
      TB = {
        Stackable: 1
      },
      bB = {
        granule: 1,
        wood: 2,
        rock: 3,
        cuttable: 4
      },
      CB = {
        Detail: 1,
        RoomForOne: 2
      },
      HB = {
        HaveIngredients: 1,
        Listed: 2
      },
      vB = {
        HasOpts: 1
      },
      sB = {
        Flat: 0,
        Chevrons: 1,
        FurnaceFire: 2,
        FlatOpaque: 3,
        FlatOnTop: 4
      },
      xB = {
        Up: 1,
        Down: 2
      },
      tB = {
        TwoD: 1,
        Loop: 2
      },
      BO = {
        StopAfter: 1
      },
      OO = {
        Anchor: 1,
        Visible: 2,
        UvOffset: 4,
        Visibility: 8,
        Scale: 16
      },
      GO = {
        Pose: 1,
        Visible: 2,
        Clip: 4,
        Perch: 8
      },
      YO = 255,
      DO = 65535,
      QO = 255,
      oO = 65535,
      jO = ["standing", "sitting", "zombie", "gliding", "driving", "sleeping", "riding"],
      yO = ["", "Sheared", "Saddled", "Antlers", "skyblockHeldBoss"],
      JO = ["Box", "BloxdBlock", "Person", "Leaderboard", "ParticleEmitter"],
      MO = {
        Bytes: 16,
        Hidden: 2147483648,
        Max: 262144
      },
      PO = 4294967295,
      zO = 4294967295,
      lO = 255,
      pO = {
        PresetNone: 65535,
        HasBox: 1,
        Anchored: 1,
        MaxOpts: 4096,
        MaxBurst: 2e3,
        MaxPoints: 512,
        PointBytes: 16,
        MaxKey: 1073741823,
        MaxLiveKeys: 256
      },
      qO = {
        critical: 123
      },
      ZO = 4294967295,
      NO = {
        BYTES: 4,
        kP: (BB, OB) => BB.getUint32(OB + 0, !0)
      },
      RO = {
        BYTES: 12,
        serverId: (BB, OB) => BB.getInt32(OB + 0, !0),
        index: (BB, OB) => BB.getUint32(OB + 4, !0),
        kind: (BB, OB) => BB.getUint16(OB + 8, !0)
      },
      WO = {
        BYTES: 20,
        pos: (BB, OB, GB) => BB.getInt32(OB + 0 + 4 * GB, !0),
        actual: (BB, OB) => BB.getUint32(OB + 12, !0),
        dataLen: (BB, OB) => BB.getUint32(OB + 16, !0)
      },
      AO = {
        BYTES: 20,
        what: (BB, OB) => BB.getUint8(OB + 0),
        value: (BB, OB) => BB.getInt16(OB + 2, !0),
        pos: (BB, OB, GB) => BB.getInt32(OB + 4 + 4 * GB, !0),
        block: (BB, OB) => BB.getUint32(OB + 16, !0)
      },
      VO = {
        BYTES: 4,
        item: (BB, OB) => BB.getUint16(OB + 0, !0),
        slot: (BB, OB) => BB.getUint8(OB + 2)
      },
      SO = {
        BYTES: 16,
        target: (BB, OB) => BB.getInt32(OB + 0, !0),
        damage: (BB, OB) => BB.getFloat32(OB + 4, !0),
        distance: (BB, OB) => BB.getFloat32(OB + 8, !0),
        crit: (BB, OB) => BB.getUint8(OB + 12)
      },
      nO = {
        BYTES: 4,
        slot: (BB, OB) => BB.getUint16(OB + 0, !0)
      },
      UO = {
        BYTES: 20,
        what: (BB, OB) => BB.getUint8(OB + 0),
        value: (BB, OB) => BB.getInt16(OB + 2, !0),
        pos: (BB, OB, GB) => BB.getInt32(OB + 4 + 4 * GB, !0),
        block: (BB, OB) => BB.getUint32(OB + 16, !0)
      },
      fO = {
        BYTES: 12,
        serverId: (BB, OB) => BB.getInt32(OB + 0, !0),
        index: (BB, OB) => BB.getUint32(OB + 4, !0),
        what: (BB, OB) => BB.getUint16(OB + 8, !0)
      },
      kO = {
        BYTES: 24,
        cx: (BB, OB) => BB.getInt32(OB + 0, !0),
        cy: (BB, OB) => BB.getInt32(OB + 4, !0),
        cz: (BB, OB) => BB.getInt32(OB + 8, !0),
        slot: (BB, OB) => BB.getUint32(OB + 12, !0),
        generation: (BB, OB) => BB.getUint32(OB + 16, !0),
        flags: (BB, OB) => BB.getUint32(OB + 20, !0)
      },
      dO = {
        BYTES: 44,
        pos: (BB, OB, GB) => BB.getFloat64(OB + 0 + 8 * GB, !0),
        sound: (BB, OB) => BB.getUint16(OB + 24, !0),
        flags: (BB, OB) => BB.getUint16(OB + 26, !0),
        handle: (BB, OB) => BB.getUint32(OB + 28, !0),
        volume: (BB, OB) => BB.getFloat32(OB + 32, !0),
        rate: (BB, OB) => BB.getFloat32(OB + 36, !0),
        refDist: (BB, OB) => BB.getFloat32(OB + 40, !0)
      },
      KO = {
        BYTES: 28,
        pos: (BB, OB, GB) => BB.getFloat64(OB + 0 + 8 * GB, !0),
        handle: (BB, OB) => BB.getUint32(OB + 24, !0)
      },
      uO = {
        BYTES: 16,
        handle: (BB, OB) => BB.getUint32(OB + 0, !0),
        volume: (BB, OB) => BB.getFloat32(OB + 4, !0),
        rate: (BB, OB) => BB.getFloat32(OB + 8, !0),
        refDist: (BB, OB) => BB.getFloat32(OB + 12, !0)
      },
      mO = {
        BYTES: 12,
        handle: (BB, OB) => BB.getUint32(OB + 0, !0),
        to: (BB, OB) => BB.getFloat32(OB + 4, !0),
        ms: (BB, OB) => BB.getUint16(OB + 8, !0),
        flags: (BB, OB) => BB.getUint16(OB + 10, !0)
      },
      IO = {
        BYTES: 4,
        handle: (BB, OB) => BB.getUint32(OB + 0, !0)
      },
      FO = {
        BYTES: 8,
        reason: (BB, OB) => BB.getUint8(OB + 0),
        code: (BB, OB) => BB.getUint8(OB + 1),
        version: (BB, OB) => BB.getUint32(OB + 4, !0)
      },
      iO = {
        BYTES: 4,
        key: (BB, OB) => BB.getUint8(OB + 0),
        tag: (BB, OB) => BB.getUint8(OB + 1)
      },
      LO = {
        BYTES: 16,
        save: (BB, OB) => BB.getUint32(OB + 0, !0),
        index: (BB, OB) => BB.getUint32(OB + 4, !0),
        ptr: (BB, OB) => BB.getUint32(OB + 8, !0),
        len: (BB, OB) => BB.getUint32(OB + 12, !0)
      },
      gO = {
        BYTES: 16,
        save: (BB, OB) => BB.getUint32(OB + 0, !0),
        kind: (BB, OB) => BB.getUint8(OB + 4),
        parts: (BB, OB) => BB.getUint32(OB + 8, !0),
        bytes: (BB, OB) => BB.getUint32(OB + 12, !0)
      },
      rO = {
        BYTES: 4,
        totalTicks: (BB, OB) => BB.getUint32(OB + 0, !0)
      },
      XO = {
        BYTES: 24,
        what: (BB, OB) => BB.getUint8(OB + 0),
        int: (BB, OB) => BB.getInt32(OB + 4, !0),
        x: (BB, OB) => BB.getFloat64(OB + 8, !0),
        y: (BB, OB) => BB.getFloat64(OB + 16, !0)
      },
      wO = {
        BYTES: 8,
        what: (BB, OB) => BB.getUint8(OB + 0),
        kind: (BB, OB) => BB.getUint8(OB + 1),
        save: (BB, OB) => BB.getUint32(OB + 4, !0)
      },
      EO = {
        BYTES: 4,
        ty: (BB, OB) => BB.getUint16(OB + 0, !0)
      },
      cO = {
        BYTES: 360,
        eye: (BB, OB, GB) => BB.getFloat64(OB + 0 + 8 * GB, !0),
        localPos: (BB, OB, GB) => BB.getFloat64(OB + 24 + 8 * GB, !0),
        oGB: (BB, OB, GB) => BB.getFloat64(OB + 48 + 8 * GB, !0),
        viewProj: (BB, OB, GB) => BB.getFloat32(OB + 72 + 4 * GB, !0),
        origin: (BB, OB, GB) => BB.getInt32(OB + 136 + 4 * GB, !0),
        heading: (BB, OB) => BB.getFloat32(OB + 148, !0),
        pitch: (BB, OB) => BB.getFloat32(OB + 152, !0),
        tanHalfFovX: (BB, OB) => BB.getFloat32(OB + 156, !0),
        tanHalfFovY: (BB, OB) => BB.getFloat32(OB + 160, !0),
        viewportCss: (BB, OB, GB) => BB.getFloat32(OB + 164 + 4 * GB, !0),
        localVel: (BB, OB, GB) => BB.getFloat32(OB + 172 + 4 * GB, !0),
        actionDir: (BB, OB, GB) => BB.getFloat32(OB + 184 + 4 * GB, !0),
        localId: (BB, OB) => BB.getInt32(OB + 196, !0),
        playerFlags: (BB, OB) => BB.getUint32(OB + 200, !0),
        targetBlock: (BB, OB, GB) => BB.getInt32(OB + 204 + 4 * GB, !0),
        targetAdjacent: (BB, OB, GB) => BB.getInt32(OB + 216 + 4 * GB, !0),
        targetBlockId: (BB, OB) => BB.getUint32(OB + 228, !0),
        targetNormal: (BB, OB, GB) => BB.getInt8(OB + 232 + 1 * GB),
        targetFlags: (BB, OB) => BB.getUint8(OB + 235),
        pickedEntity: (BB, OB) => BB.getInt32(OB + 236, !0),
        breakingPos: (BB, OB, GB) => BB.getInt32(OB + 240 + 4 * GB, !0),
        breakingProgress: (BB, OB) => BB.getFloat32(OB + 252, !0),
        cW: (BB, OB) => BB.getUint16(OB + 256, !0),
        selectedSlot: (BB, OB) => BB.getUint8(OB + 258),
        heldFlags: (BB, OB) => BB.getUint8(OB + 259),
        heldAttrVersion: (BB, OB) => BB.getUint32(OB + 260, !0),
        inventoryVersion: (BB, OB) => BB.getUint32(OB + 264, !0),
        effectsVersion: (BB, OB) => BB.getUint32(OB + 268, !0),
        entitiesVersion: (BB, OB) => BB.getUint32(OB + 272, !0),
        entRenderPtr: (BB, OB) => BB.getUint32(OB + 276, !0),
        entCapacity: (BB, OB) => BB.getUint32(OB + 280, !0),
        frameMs: (BB, OB) => BB.getFloat32(OB + 284, !0),
        fps: (BB, OB) => BB.getFloat32(OB + 288, !0),
        entVisPtr: (BB, OB) => BB.getUint32(OB + 292, !0),
        momentumFrac: (BB, OB) => BB.getFloat32(OB + 296, !0),
        chunkSlotsPtr: (BB, OB) => BB.getUint32(OB + 300, !0),
        chunkSlotsLen: (BB, OB) => BB.getUint32(OB + 304, !0),
        walkThroughPtr: (BB, OB) => BB.getUint32(OB + 308, !0),
        walkThroughLen: (BB, OB) => BB.getUint32(OB + 312, !0),
        audioViewPtr: (BB, OB) => BB.getUint32(OB + 316, !0),
        inventoryViewPtr: (BB, OB) => BB.getUint32(OB + 320, !0),
        eventOverflowGen: (BB, OB) => BB.getUint32(OB + 324, !0),
        eventOverflowMask: (BB, OB) => BB.getUint32(OB + 328, !0),
        promptEntity: (BB, OB) => BB.getInt32(OB + 332, !0),
        replayViewPtr: (BB, OB) => BB.getUint32(OB + 336, !0),
        slotIcon: (BB, OB) => BB.getUint32(OB + 340, !0),
        localDeaths: (BB, OB) => BB.getUint32(OB + 344, !0),
        cameraFar: (BB, OB) => BB.getFloat32(OB + 348, !0),
        gliderBoostFuel: (BB, OB) => BB.getUint32(OB + 352, !0),
        interactLabel: (BB, OB) => BB.getUint16(OB + 356, !0),
        interactIcon: (BB, OB) => BB.getUint16(OB + 358, !0)
      },
      hO = {
        BYTES: 16,
        voxelsPtr: (BB, OB) => BB.getUint32(OB + 0, !0),
        version: (BB, OB) => BB.getUint32(OB + 4, !0),
        generation: (BB, OB) => BB.getUint32(OB + 8, !0),
        sJ: (BB, OB) => BB.getUint32(OB + 12, !0)
      },
      aO = {
        BYTES: 56,
        listener: (BB, OB, GB) => BB.getFloat64(OB + 0 + 8 * GB, !0),
        forward: (BB, OB, GB) => BB.getFloat32(OB + 24 + 4 * GB, !0),
        up: (BB, OB, GB) => BB.getFloat32(OB + 36 + 4 * GB, !0),
        dropped: (BB, OB) => BB.getUint32(OB + 48, !0),
        unfollowed: (BB, OB) => BB.getUint32(OB + 52, !0)
      },
      eO = {
        BYTES: 8,
        item: (BB, OB) => BB.getUint16(OB + 0, !0),
        amount: (BB, OB) => BB.getUint16(OB + 2, !0),
        attrVersion: (BB, OB) => BB.getUint32(OB + 4, !0)
      },
      TO = {
        BYTES: 76,
        version: (BB, OB) => BB.getUint32(OB + 0, !0),
        state: (BB, OB) => BB.getUint8(OB + 4),
        cameraMode: (BB, OB) => BB.getUint8(OB + 5),
        kP: (BB, OB) => BB.getUint32(OB + 8, !0),
        totalTicks: (BB, OB) => BB.getUint32(OB + 12, !0),
        speed: (BB, OB) => BB.getFloat32(OB + 16, !0),
        markIn: (BB, OB) => BB.getUint32(OB + 20, !0),
        markOut: (BB, OB) => BB.getUint32(OB + 24, !0),
        editVersion: (BB, OB) => BB.getUint32(OB + 28, !0),
        drops: (BB, OB, GB) => BB.getUint32(OB + 32 + 4 * GB, !0)
      },
      bO = {
        BYTES: 6,
        flags: (BB, OB) => BB.getUint8(OB + 0),
        harvestType: (BB, OB) => BB.getUint8(OB + 1),
        harvestLevel: (BB, OB) => BB.getUint8(OB + 2),
        attachedTop: (BB, OB) => BB.getUint16(OB + 4, !0)
      },
      CO = {
        BYTES: 3,
        flags: (BB, OB) => BB.getUint8(OB + 0),
        harvests: (BB, OB) => BB.getUint8(OB + 1),
        level: (BB, OB) => BB.getUint8(OB + 2)
      },
      HO = {
        BYTES: 12,
        item: (BB, OB) => BB.getUint32(OB + 0, !0),
        amount: (BB, OB) => BB.getFloat64(OB + 4, !0)
      },
      vO = {
        BYTES: 16,
        recipes: (BB, OB) => BB.getUint32(OB + 0, !0),
        ingredients: (BB, OB) => BB.getUint32(OB + 4, !0),
        craftAllTimes: (BB, OB) => BB.getUint32(OB + 8, !0),
        flags: (BB, OB) => BB.getUint32(OB + 12, !0)
      },
      sO = {
        BYTES: 10,
        item: (BB, OB) => BB.getUint16(OB + 0, !0),
        recipe: (BB, OB) => BB.getUint16(OB + 2, !0),
        produces: (BB, OB) => BB.getUint16(OB + 4, !0),
        requires: (BB, OB) => BB.getUint16(OB + 6, !0),
        flags: (BB, OB) => BB.getUint8(OB + 8)
      },
      xO = {
        BYTES: 4,
        amount: (BB, OB) => BB.getUint16(OB + 0, !0),
        items: (BB, OB) => BB.getUint16(OB + 2, !0)
      },
      tO = {
        BYTES: 8,
        amount: (BB, OB) => BB.getUint32(OB + 0, !0),
        item: (BB, OB) => BB.getUint16(OB + 4, !0),
        from: (BB, OB) => BB.getUint16(OB + 6, !0)
      },
      BG = {
        BYTES: 16,
        serverId: (BB, OB) => BB.getInt32(OB + 0, !0),
        len: (BB, OB) => BB.getUint32(OB + 4, !0),
        kind: (BB, OB) => BB.getUint16(OB + 8, !0),
        variation: (BB, OB) => BB.getUint16(OB + 10, !0),
        pose: (BB, OB) => BB.getUint8(OB + 12),
        meta: (BB, OB) => BB.getUint8(OB + 13),
        mesh: (BB, OB) => BB.getUint8(OB + 14),
        flags: (BB, OB) => BB.getUint8(OB + 15)
      },
      OG = {
        BYTES: 56,
        terrainOpaque: (BB, OB) => BB.getUint32(OB + 0, !0),
        terrainTransparent: (BB, OB) => BB.getUint32(OB + 4, !0),
        terrainPack: (BB, OB) => BB.getUint32(OB + 8, !0),
        earthSky: (BB, OB) => BB.getUint32(OB + 12, !0),
        skyMeshes: (BB, OB) => BB.getUint32(OB + 16, !0),
        regular: (BB, OB) => BB.getUint32(OB + 20, !0),
        thin: (BB, OB) => BB.getUint32(OB + 24, !0),
        line: (BB, OB) => BB.getUint32(OB + 28, !0),
        text: (BB, OB) => BB.getUint32(OB + 32, !0),
        particles: (BB, OB) => BB.getUint32(OB + 36, !0),
        terrainParts: (BB, OB) => BB.getUint32(OB + 40, !0),
        terrainCompiling: (BB, OB) => BB.getUint32(OB + 44, !0),
        ringCopiesMax: (BB, OB) => BB.getUint32(OB + 48, !0),
        ringBusyWrites: (BB, OB) => BB.getUint32(OB + 52, !0)
      },
      GG = {
        BYTES: 16,
        fov: (BB, OB) => BB.getFloat32(OB + 0, !0),
        baseFov: (BB, OB) => BB.getFloat32(OB + 4, !0),
        aspect: (BB, OB) => BB.getFloat32(OB + 8, !0),
        bodyHeading: (BB, OB) => BB.getFloat32(OB + 12, !0)
      },
      YG = {
        BYTES: 32,
        eye: (BB, OB, GB) => BB.getFloat64(OB + 0 + 8 * GB, !0),
        heading: (BB, OB) => BB.getFloat32(OB + 24, !0),
        pitch: (BB, OB) => BB.getFloat32(OB + 28, !0)
      },
      DG = {
        BYTES: 48,
        feet: (BB, OB, GB) => BB.getFloat64(OB + 0 + 8 * GB, !0),
        eyeHeight: (BB, OB) => BB.getFloat32(OB + 24, !0),
        heading: (BB, OB) => BB.getFloat32(OB + 28, !0),
        headingIsDrawn: (BB, OB) => BB.getUint32(OB + 32, !0),
        pitch: (BB, OB) => BB.getFloat32(OB + 36, !0),
        lookHeading: (BB, OB) => BB.getFloat32(OB + 40, !0)
      },
      QG = 32,
      oG = 63,
      jG = {
        TickEnd: 32,
        EntitySpawned: 33,
        EntityDespawned: 34,
        ChangeBlockFail: 39,
        ChangeBlockFailEnd: 46,
        InventoryEvent: 48,
        HeldItemChanged: 49,
        ShotDamage: 50,
        EnchantOffer: 51,
        UiEvent: 52,
        EntityInfoChanged: 53,
        ChunkSlot: 55,
        PlaySound: 40,
        SoundPos: 41,
        SoundSet: 42,
        SoundFade: 43,
        SoundStop: 44,
        SoundReset: 45,
        ReplayFailed: 56,
        ReplayOption: 57,
        ReplayFilePart: 58,
        ReplayFileReady: 59,
        ReplayOpened: 60,
        ReplayUiEvent: 61,
        RecorderEvent: 62
      };

    function yG(BB, OB, GB, YB, DB) {
      var QB, oB, jB, yB, JB, MB, PB, zB, lB, pB, qB, ZB, NB, RB, WB, AB, VB, SB, nB, UB, fB, kB, dB, KB, uB;
      switch (BB) {
        case 32:
          return 4 === YB && (null === (QB = DB.tickEnd) || void 0 === QB || QB.call(DB, NO.kP(OB, GB)), !0);
        case 33:
          return 12 === YB && (null === (oB = DB.entitySpawned) || void 0 === oB || oB.call(DB, RO.serverId(OB, GB), RO.index(OB, GB), RO.kind(OB, GB)), !0);
        case 34:
          return 12 === YB && (null === (jB = DB.entityDespawned) || void 0 === jB || jB.call(DB, RO.serverId(OB, GB), RO.index(OB, GB), RO.kind(OB, GB)), !0);
        case 39:
          return !(YB < 20) && (null === (yB = DB.changeBlockFail) || void 0 === yB || yB.call(DB, WO.pos(OB, GB, 0), WO.pos(OB, GB, 1), WO.pos(OB, GB, 2), WO.actual(OB, GB), WO.dataLen(OB, GB), GB + 20, YB - 20), !0);
        case 46:
          return 0 === YB && (null === (JB = DB.changeBlockFailEnd) || void 0 === JB || JB.call(DB), !0);
        case 48:
          return 20 === YB && (null === (MB = DB.inventoryEvent) || void 0 === MB || MB.call(DB, AO.what(OB, GB), AO.value(OB, GB), AO.pos(OB, GB, 0), AO.pos(OB, GB, 1), AO.pos(OB, GB, 2), AO.block(OB, GB)), !0);
        case 49:
          return 4 === YB && (null === (PB = DB.heldItemChanged) || void 0 === PB || PB.call(DB, VO.item(OB, GB), VO.slot(OB, GB)), !0);
        case 50:
          return 16 === YB && (null === (zB = DB.shotDamage) || void 0 === zB || zB.call(DB, SO.target(OB, GB), SO.damage(OB, GB), SO.distance(OB, GB), SO.crit(OB, GB)), !0);
        case 51:
          return !(YB < 4) && (null === (lB = DB.enchantOffer) || void 0 === lB || lB.call(DB, nO.slot(OB, GB), GB + 4, YB - 4), !0);
        case 52:
          return !(YB < 20) && (null === (pB = DB.uiEvent) || void 0 === pB || pB.call(DB, UO.what(OB, GB), UO.value(OB, GB), UO.pos(OB, GB, 0), UO.pos(OB, GB, 1), UO.pos(OB, GB, 2), UO.block(OB, GB), GB + 20, YB - 20), !0);
        case 53:
          return 12 === YB && (null === (qB = DB.entityInfoChanged) || void 0 === qB || qB.call(DB, fO.serverId(OB, GB), fO.index(OB, GB), fO.what(OB, GB)), !0);
        case 55:
          return 24 === YB && (null === (ZB = DB.chunkSlot) || void 0 === ZB || ZB.call(DB, kO.cx(OB, GB), kO.cy(OB, GB), kO.cz(OB, GB), kO.slot(OB, GB), kO.generation(OB, GB), kO.flags(OB, GB)), !0);
        case 40:
          return 44 === YB && (null === (NB = DB.playSound) || void 0 === NB || NB.call(DB, dO.pos(OB, GB, 0), dO.pos(OB, GB, 1), dO.pos(OB, GB, 2), dO.sound(OB, GB), dO.flags(OB, GB), dO.handle(OB, GB), dO.volume(OB, GB), dO.rate(OB, GB), dO.refDist(OB, GB)), !0);
        case 41:
          return 28 === YB && (null === (RB = DB.soundPos) || void 0 === RB || RB.call(DB, KO.pos(OB, GB, 0), KO.pos(OB, GB, 1), KO.pos(OB, GB, 2), KO.handle(OB, GB)), !0);
        case 42:
          return 16 === YB && (null === (WB = DB.soundSet) || void 0 === WB || WB.call(DB, uO.handle(OB, GB), uO.volume(OB, GB), uO.rate(OB, GB), uO.refDist(OB, GB)), !0);
        case 43:
          return 12 === YB && (null === (AB = DB.soundFade) || void 0 === AB || AB.call(DB, mO.handle(OB, GB), mO.to(OB, GB), mO.ms(OB, GB), mO.flags(OB, GB)), !0);
        case 44:
          return 4 === YB && (null === (VB = DB.soundStop) || void 0 === VB || VB.call(DB, IO.handle(OB, GB)), !0);
        case 45:
          return 0 === YB && (null === (SB = DB.soundReset) || void 0 === SB || SB.call(DB), !0);
        case 56:
          return 8 === YB && (null === (nB = DB.replayFailed) || void 0 === nB || nB.call(DB, FO.reason(OB, GB), FO.code(OB, GB), FO.version(OB, GB)), !0);
        case 57:
          return !(YB < 4) && (null === (UB = DB.replayOption) || void 0 === UB || UB.call(DB, iO.key(OB, GB), iO.tag(OB, GB), GB + 4, YB - 4), !0);
        case 58:
          return 16 === YB && (null === (fB = DB.replayFilePart) || void 0 === fB || fB.call(DB, LO.save(OB, GB), LO.index(OB, GB), LO.ptr(OB, GB), LO.len(OB, GB)), !0);
        case 59:
          return 16 === YB && (null === (kB = DB.replayFileReady) || void 0 === kB || kB.call(DB, gO.save(OB, GB), gO.kind(OB, GB), gO.parts(OB, GB), gO.bytes(OB, GB)), !0);
        case 60:
          return !(YB < 4) && (null === (dB = DB.replayOpened) || void 0 === dB || dB.call(DB, rO.totalTicks(OB, GB), GB + 4, YB - 4), !0);
        case 61:
          return !(YB < 24) && (null === (KB = DB.replayUiEvent) || void 0 === KB || KB.call(DB, XO.what(OB, GB), XO.int(OB, GB), XO.x(OB, GB), XO.y(OB, GB), GB + 24, YB - 24), !0);
        case 62:
          return 8 === YB && (null === (uB = DB.recorderEvent) || void 0 === uB || uB.call(DB, wO.what(OB, GB), wO.kind(OB, GB), wO.save(OB, GB)), !0);
        default:
          return !1
      }
    }
    const JG = {
      SetChunkAddDistance: 2,
      WatchEntityInfo: 66,
      EventResync: 67,
      WatchPromptPick: 68,
      SetLocalDbId: 69,
      SetAltVeto: 128,
      EnchantOfferRequest: 130,
      ClearPickupDelay: 131,
      SyncOpMarker: 132,
      SetHooks: 133,
      SetPublicLobby: 144,
      ClickCodeBlock: 145,
      Send: 256,
      Leave: 257,
      SetPaused: 258,
      ParticleBurst: 320,
      ParticleStart: 321,
      ParticleUpdate: 322,
      ParticleStop: 323,
      ParticleEmitPoints: 324,
      ParticleStopAll: 325,
      InstancePool: 384,
      InstanceCommit: 385,
      GameMeshCreate: 386,
      GameMeshSet: 387,
      GameMeshDispose: 388,
      SetNametagOffset: 389,
      SetFacingTolerance: 390,
      SetGroundArrowStyle: 391,
      InstancePoolDispose: 392,
      MobModel: 393,
      MobModelSet: 394,
      MobModelDispose: 398,
      CosmeticModel: 399,
      ThirdPersonFor: 448,
      FreecamMove: 450,
      ScriptedRelease: 451,
      SetZoom: 452,
      SwapZoom: 453,
      FreecamCmd: 454,
      SecondCentres: 455,
      SetCameraFar: 456,
      HighlightCell: 457,
      RecorderOption: 530,
      RecorderFlyingText: 531,
      RecorderPlayerKilled: 532,
      RecorderKillfeed: 533,
      Respawn: 576,
      BindCustomButtonKeys: 577,
      PressCustomButton: 578,
      PadMove: 579
    };
    let MG = new Uint8Array(0);

    function PG(BB) {
      return MG.buffer !== BB.buffer && (MG = new Uint8Array(BB.buffer)), MG
    }

    function zG(BB, OB, GB) {
      const YB = BB.ZP(66, OB, 4);
      if (YB < 0) return !1;
      return BB.view.setUint8(YB + 0, GB), !0
    }

    function lG(BB, OB, GB) {
      const YB = BB.ZP(67, OB, 4);
      if (YB < 0) return !1;
      return BB.view.setUint32(YB + 0, GB, !0), !0
    }

    function pG(BB, OB, GB) {
      const YB = BB.ZP(68, OB, 4);
      if (YB < 0) return !1;
      return BB.view.setUint8(YB + 0, GB), !0
    }

    function qG(BB, OB, GB, YB) {
      const DB = BB.ZP(69, OB, 4 + YB.length);
      if (DB < 0) return !1;
      const QB = BB.view;
      return QB.setUint8(DB + 0, GB), PG(QB).set(YB, QB.byteOffset + DB + 4), !0
    }

    function ZG(BB, OB, GB, YB, DB) {
      const QB = BB.ZP(128, OB, 4 + DB.length);
      if (QB < 0) return !1;
      const oB = BB.view;
      return oB.setUint8(QB + 0, GB), oB.setUint16(QB + 2, YB, !0), PG(oB).set(DB, oB.byteOffset + QB + 4), !0
    }

    function NG(BB, OB, GB) {
      const YB = BB.ZP(131, OB, 4);
      if (YB < 0) return !1;
      return BB.view.setInt32(YB + 0, GB, !0), !0
    }

    function RG(BB, OB, GB) {
      const YB = BB.ZP(132, OB, 4);
      if (YB < 0) return !1;
      return BB.view.setUint32(YB + 0, GB, !0), !0
    }

    function WG(BB, OB, GB) {
      const YB = BB.ZP(133, OB, 4);
      if (YB < 0) return !1;
      return BB.view.setUint32(YB + 0, GB, !0), !0
    }

    function AG(BB, OB, GB) {
      const YB = BB.ZP(144, OB, 4);
      if (YB < 0) return !1;
      return BB.view.setUint8(YB + 0, GB), !0
    }

    function VG(BB, OB, GB, YB, DB) {
      const QB = BB.ZP(145, OB, 12);
      if (QB < 0) return !1;
      const oB = BB.view;
      return oB.setInt32(QB + 0, GB, !0), oB.setInt32(QB + 4, YB, !0), oB.setInt32(QB + 8, DB, !0), !0
    }

    function SG(BB, OB, GB, YB) {
      const DB = BB.ZP(256, OB, 4 + YB.length);
      if (DB < 0) return !1;
      const QB = BB.view;
      return QB.setUint16(DB + 0, GB, !0), PG(QB).set(YB, QB.byteOffset + DB + 4), !0
    }

    function nG(BB, OB, GB) {
      const YB = BB.ZP(258, OB, 4);
      if (YB < 0) return !1;
      return BB.view.setUint8(YB + 0, GB), !0
    }

    function UG(BB, OB, GB, YB, DB, QB, oB, jB, yB) {
      const JB = BB.ZP(320, OB, 48 + yB.length);
      if (JB < 0) return !1;
      const MB = BB.view;
      MB.setUint32(JB + 0, GB, !0), MB.setUint16(JB + 4, YB, !0), MB.setUint16(JB + 6, DB, !0), MB.setUint32(JB + 8, QB, !0);
      for (let PB = 0; PB < 3; PB++) MB.setFloat64(JB + 12 + 8 * PB, oB[PB], !0);
      for (let PB = 0; PB < 3; PB++) MB.setFloat32(JB + 36 + 4 * PB, jB[PB], !0);
      return PG(MB).set(yB, MB.byteOffset + JB + 48), !0
    }

    function fG(BB, OB, GB, YB, DB, QB, oB, jB, yB) {
      const JB = BB.ZP(321, OB, 48 + yB.length);
      if (JB < 0) return !1;
      const MB = BB.view;
      MB.setUint32(JB + 0, GB, !0), MB.setInt32(JB + 4, YB, !0), MB.setUint16(JB + 8, DB, !0), MB.setUint16(JB + 10, QB, !0);
      for (let PB = 0; PB < 3; PB++) MB.setFloat64(JB + 12 + 8 * PB, oB[PB], !0);
      for (let PB = 0; PB < 3; PB++) MB.setFloat32(JB + 36 + 4 * PB, jB[PB], !0);
      return PG(MB).set(yB, MB.byteOffset + JB + 48), !0
    }

    function kG(BB, OB, GB, YB, DB, QB, oB) {
      const jB = BB.ZP(322, OB, 44 + oB.length);
      if (jB < 0) return !1;
      const yB = BB.view;
      yB.setUint32(jB + 0, GB, !0), yB.setUint32(jB + 4, YB, !0);
      for (let JB = 0; JB < 3; JB++) yB.setFloat64(jB + 8 + 8 * JB, DB[JB], !0);
      for (let JB = 0; JB < 3; JB++) yB.setFloat32(jB + 32 + 4 * JB, QB[JB], !0);
      return PG(yB).set(oB, yB.byteOffset + jB + 44), !0
    }

    function dG(BB, OB, GB) {
      const YB = BB.ZP(323, OB, 4);
      if (YB < 0) return !1;
      return BB.view.setUint32(YB + 0, GB, !0), !0
    }

    function KG(BB, OB, GB, YB, DB, QB) {
      const oB = BB.ZP(324, OB, 32 + QB.length);
      if (oB < 0) return !1;
      const jB = BB.view;
      jB.setUint32(oB + 0, GB, !0), jB.setUint32(oB + 4, YB, !0);
      for (let yB = 0; yB < 3; yB++) jB.setFloat64(oB + 8 + 8 * yB, DB[yB], !0);
      return PG(jB).set(QB, jB.byteOffset + oB + 32), !0
    }

    function uG(BB, OB) {
      return !(BB.ZP(325, OB, 0) < 0)
    }

    function mG(BB, OB, GB, YB, DB, QB) {
      const oB = BB.ZP(384, OB, 16);
      if (oB < 0) return !1;
      const jB = BB.view;
      return jB.setUint32(oB + 0, GB, !0), jB.setUint32(oB + 4, YB, !0), jB.setFloat32(oB + 8, DB, !0), jB.setFloat32(oB + 12, QB, !0), !0
    }

    function IG(BB, OB, GB, YB, DB, QB, oB) {
      const jB = BB.ZP(385, OB, 36 + oB.length);
      if (jB < 0) return !1;
      const yB = BB.view;
      yB.setUint32(jB + 0, GB, !0), yB.setUint32(jB + 4, YB, !0);
      for (let JB = 0; JB < 3; JB++) yB.setFloat64(jB + 8 + 8 * JB, DB[JB], !0);
      return yB.setUint32(jB + 32, QB, !0), PG(yB).set(oB, yB.byteOffset + jB + 36), !0
    }

    function FG(BB, OB, GB, YB, DB, QB, oB, jB, yB) {
      const JB = BB.ZP(386, OB, 56 + yB.length);
      if (JB < 0) return !1;
      const MB = BB.view;
      MB.setUint32(JB + 0, GB, !0), MB.setUint8(JB + 4, YB);
      for (let PB = 0; PB < 4; PB++) MB.setFloat32(JB + 8 + 4 * PB, DB[PB], !0);
      for (let PB = 0; PB < 3; PB++) MB.setFloat64(JB + 24 + 8 * PB, QB[PB], !0);
      return MB.setUint32(JB + 48, oB, !0), MB.setUint32(JB + 52, jB, !0), PG(MB).set(yB, MB.byteOffset + JB + 56), !0
    }

    function iG(BB, OB, GB, YB, DB, QB, oB, jB, yB) {
      const JB = BB.ZP(387, OB, 56);
      if (JB < 0) return !1;
      const MB = BB.view;
      MB.setUint32(JB + 0, GB, !0), MB.setUint16(JB + 4, YB, !0), MB.setUint8(JB + 6, DB);
      for (let PB = 0; PB < 3; PB++) MB.setFloat64(JB + 8 + 8 * PB, QB[PB], !0);
      for (let PB = 0; PB < 2; PB++) MB.setFloat32(JB + 32 + 4 * PB, oB[PB], !0);
      MB.setFloat32(JB + 40, jB, !0);
      for (let PB = 0; PB < 3; PB++) MB.setFloat32(JB + 44 + 4 * PB, yB[PB], !0);
      return !0
    }

    function LG(BB, OB, GB) {
      const YB = BB.ZP(388, OB, 4);
      if (YB < 0) return !1;
      return BB.view.setUint32(YB + 0, GB, !0), !0
    }

    function gG(BB, OB, GB, YB) {
      const DB = BB.ZP(389, OB, 8);
      if (DB < 0) return !1;
      const QB = BB.view;
      return QB.setInt32(DB + 0, GB, !0), QB.setFloat32(DB + 4, YB, !0), !0
    }

    function rG(BB, OB, GB, YB) {
      const DB = BB.ZP(390, OB, 8);
      if (DB < 0) return !1;
      const QB = BB.view;
      return QB.setInt32(DB + 0, GB, !0), QB.setFloat32(DB + 4, YB, !0), !0
    }

    function XG(BB, OB, GB, YB, DB, QB) {
      const oB = BB.ZP(391, OB, 12);
      if (oB < 0) return !1;
      const jB = BB.view;
      return jB.setFloat32(oB + 0, GB, !0), jB.setFloat32(oB + 4, YB, !0), jB.setUint8(oB + 8, DB), jB.setUint8(oB + 9, QB), !0
    }

    function wG(BB, OB, GB) {
      const YB = BB.ZP(392, OB, 4);
      if (YB < 0) return !1;
      return BB.view.setUint32(YB + 0, GB, !0), !0
    }

    function EG(BB, OB, GB, YB, DB) {
      const QB = BB.ZP(393, OB, 12);
      if (QB < 0) return !1;
      const oB = BB.view;
      return oB.setUint32(QB + 0, GB, !0), oB.setUint16(QB + 4, YB, !0), oB.setFloat32(QB + 8, DB, !0), !0
    }

    function cG(BB, OB, GB, YB, DB, QB, oB, jB, yB, JB, MB, PB) {
      const zB = BB.ZP(394, OB, 56 + PB.length);
      if (zB < 0) return !1;
      const lB = BB.view;
      lB.setUint32(zB + 0, GB, !0), lB.setUint16(zB + 4, YB, !0), lB.setUint8(zB + 6, DB), lB.setUint8(zB + 7, QB);
      for (let pB = 0; pB < 3; pB++) lB.setFloat64(zB + 8 + 8 * pB, oB[pB], !0);
      lB.setFloat32(zB + 32, jB, !0), lB.setInt32(zB + 36, yB, !0);
      for (let pB = 0; pB < 3; pB++) lB.setFloat32(zB + 40 + 4 * pB, JB[pB], !0);
      return lB.setFloat32(zB + 52, MB, !0), PG(lB).set(PB, lB.byteOffset + zB + 56), !0
    }

    function hG(BB, OB, GB) {
      const YB = BB.ZP(398, OB, 4);
      if (YB < 0) return !1;
      return BB.view.setUint32(YB + 0, GB, !0), !0
    }

    function aG(BB, OB, GB, YB, DB) {
      const QB = BB.ZP(399, OB, 12);
      if (QB < 0) return !1;
      const oB = BB.view;
      return oB.setUint32(QB + 0, GB, !0), oB.setUint32(QB + 4, YB, !0), oB.setFloat32(QB + 8, DB, !0), !0
    }

    function eG(BB, OB, GB) {
      const YB = BB.ZP(448, OB, 4);
      if (YB < 0) return !1;
      return BB.view.setFloat32(YB + 0, GB, !0), !0
    }

    function TG(BB, OB, GB, YB) {
      const DB = BB.ZP(450, OB, 12);
      if (DB < 0) return !1;
      const QB = BB.view;
      for (let oB = 0; oB < 2; oB++) QB.setFloat32(DB + 0 + 4 * oB, GB[oB], !0);
      return QB.setUint8(DB + 8, YB), !0
    }

    function bG(BB, OB, GB, YB) {
      const DB = BB.ZP(452, OB, 8);
      if (DB < 0) return !1;
      const QB = BB.view;
      return QB.setFloat32(DB + 0, GB, !0), QB.setUint8(DB + 4, YB), !0
    }

    function CG(BB, OB, GB, YB, DB) {
      const QB = BB.ZP(454, OB, 4);
      if (QB < 0) return !1;
      const oB = BB.view;
      return oB.setUint8(QB + 0, GB), oB.setUint8(QB + 1, YB), oB.setUint8(QB + 2, DB), !0
    }

    function HG(BB, OB, GB, YB) {
      const DB = BB.ZP(455, OB, 40);
      if (DB < 0) return !1;
      const QB = BB.view;
      for (let oB = 0; oB < 9; oB++) QB.setInt32(DB + 0 + 4 * oB, GB[oB], !0);
      return QB.setUint32(DB + 36, YB, !0), !0
    }

    function vG(BB, OB, GB, YB) {
      const DB = BB.ZP(456, OB, 8);
      if (DB < 0) return !1;
      const QB = BB.view;
      return QB.setFloat32(DB + 0, GB, !0), QB.setUint8(DB + 4, YB), !0
    }

    function sG(BB, OB, GB, YB, DB) {
      const QB = BB.ZP(457, OB, 16);
      if (QB < 0) return !1;
      const oB = BB.view;
      for (let jB = 0; jB < 3; jB++) oB.setInt32(QB + 0 + 4 * jB, GB[jB], !0);
      for (let jB = 0; jB < 3; jB++) oB.setInt8(QB + 12 + 1 * jB, YB[jB]);
      return oB.setUint8(QB + 15, DB), !0
    }

    function xG(BB, OB, GB, YB) {
      const DB = BB.ZP(530, OB, 4 + YB.length);
      if (DB < 0) return !1;
      const QB = BB.view;
      return QB.setUint8(DB + 0, GB), PG(QB).set(YB, QB.byteOffset + DB + 4), !0
    }

    function tG(BB, OB, GB, YB, DB, QB) {
      const oB = BB.ZP(531, OB, 12 + QB.length);
      if (oB < 0) return !1;
      const jB = BB.view;
      return jB.setFloat32(oB + 0, GB, !0), jB.setFloat32(oB + 4, YB, !0), jB.setUint32(oB + 8, DB, !0), PG(jB).set(QB, jB.byteOffset + oB + 12), !0
    }

    function BY(BB, OB, GB, YB, DB, QB) {
      const oB = BB.ZP(532, OB, 12 + QB.length);
      if (oB < 0) return !1;
      const jB = BB.view;
      return jB.setInt32(oB + 0, GB, !0), jB.setInt32(oB + 4, YB, !0), jB.setUint32(oB + 8, DB, !0), PG(jB).set(QB, jB.byteOffset + oB + 12), !0
    }

    function OY(BB, OB, GB, YB, DB) {
      const QB = BB.ZP(533, OB, 8 + DB.length);
      if (QB < 0) return !1;
      const oB = BB.view;
      return oB.setInt32(QB + 0, GB, !0), oB.setInt32(QB + 4, YB, !0), PG(oB).set(DB, oB.byteOffset + QB + 8), !0
    }

    function GY(BB, OB) {
      return !(BB.ZP(576, OB, 0) < 0)
    }

    function YY(BB, OB, GB, YB, DB, QB) {
      const oB = BB.ZP(577, OB, 36 + QB.length);
      if (oB < 0) return !1;
      const jB = BB.view;
      jB.setUint8(oB + 0, GB);
      for (let yB = 0; yB < 16; yB++) jB.setUint8(oB + 4 + 1 * yB, YB[yB]);
      for (let yB = 0; yB < 16; yB++) jB.setUint8(oB + 20 + 1 * yB, DB[yB]);
      return PG(jB).set(QB, jB.byteOffset + oB + 36), !0
    }

    function DY(BB, OB, GB, YB) {
      const DB = BB.ZP(578, OB, 4 + YB.length);
      if (DB < 0) return !1;
      const QB = BB.view;
      return QB.setUint8(DB + 0, GB), PG(QB).set(YB, QB.byteOffset + DB + 4), !0
    }

    function QY(BB, OB, GB, YB, DB, QB, oB, jB) {
      const yB = BB.ZP(579, OB, 36);
      if (yB < 0) return !1;
      const JB = BB.view;
      return JB.setFloat64(yB + 0, GB, !0), JB.setFloat64(yB + 8, YB, !0), JB.setFloat64(yB + 16, DB, !0), JB.setFloat64(yB + 24, QB, !0), JB.setUint16(yB + 32, oB, !0), JB.setUint8(yB + 34, jB), !0
    }
    class oY {
      constructor(BB, OB) {
        this.core = BB, this.afterCall = OB
      }
      canModify(BB, OB, GB) {
        const YB = this.core.coB(BB, OB, GB);
        return this.afterCall(), YB
      }
      terrainBlocked(BB, OB, GB, YB, DB) {
        const QB = this.core.FjB(BB, OB, GB, YB, DB);
        return this.afterCall(), QB
      }
      qm(BB, OB, GB, YB) {
        const DB = this.core.Wl(BB, OB, GB, YB);
        return this.afterCall(), DB
      }
      blockData(BB, OB, GB) {
        const YB = this.core.woB(BB, OB, GB);
        return this.afterCall(), YB
      }
      cameraSweep(BB, OB, GB, YB, DB, QB, oB) {
        const jB = this.core.rQB(BB, OB, GB, YB, DB, QB, oB);
        return this.afterCall(), jB
      }
      hasServerTarget(BB) {
        const OB = this.core.OjB(BB);
        return this.afterCall(), OB
      }
      entityInteractable(BB) {
        const OB = this.core.HoB(BB);
        return this.afterCall(), OB
      }
      entityCrouching(BB) {
        const OB = this.core.CoB(BB);
        return this.afterCall(), OB
      }
      entityDrawn(BB) {
        const OB = this.core.hQB(BB);
        return this.afterCall(), OB
      }
      predictServerPosition(BB, OB, GB, YB) {
        const DB = this.core.zjB(BB, OB, GB, YB);
        return this.afterCall(), DB
      }
      setOtherEntitySetting(BB, OB, GB) {
        const YB = this.core.cQB(BB, OB, GB);
        return this.afterCall(), YB
      }
      entityInfoBatch(BB) {
        const OB = this.core.TQB(BB);
        return this.afterCall(), OB
      }
      entityName(BB) {
        const OB = this.core.voB(BB);
        return this.afterCall(), OB
      }
      hasEffect(BB, OB) {
        const GB = this.core.BjB(BB, OB);
        return this.afterCall(), GB
      }
      scratchPtr() {
        const BB = this.core.FQB();
        return this.afterCall(), BB
      }
      invSwap(BB, OB) {
        const GB = this.core.jjB(BB, OB);
        return this.afterCall(), GB
      }
      invMove(BB, OB, GB) {
        const YB = this.core.DjB(BB, OB, GB);
        return this.afterCall(), YB
      }
      invQuickMove(BB, OB, GB, YB) {
        const DB = this.core.QjB(BB, OB, GB, YB);
        return this.afterCall(), DB
      }
      invRemove(BB, OB, GB) {
        const YB = this.core.ojB(BB, OB, GB);
        return this.afterCall(), YB
      }
      invEnchant(BB, OB, GB, YB, DB) {
        const QB = this.core.YjB(BB, OB, GB, YB, DB);
        return this.afterCall(), QB
      }
      craft(BB, OB, GB) {
        const YB = this.core.craft(BB, OB, GB);
        return this.afterCall(), YB
      }
      salvage(BB, OB, GB) {
        const YB = this.core.salvage(BB, OB, GB);
        return this.afterCall(), YB
      }
      selectSlot(BB) {
        const OB = this.core.ZjB(BB);
        return this.afterCall(), OB
      }
      closeChest() {
        const BB = this.core.hoB();
        return this.afterCall(), BB
      }
      itemAttributesBatch(BB) {
        const OB = this.core.eQB(BB);
        return this.afterCall(), OB
      }
      itemNames() {
        const BB = this.core.Yk();
        return this.afterCall(), BB
      }
      blockProps() {
        const BB = this.core.EoB();
        return this.afterCall(), BB
      }
      itemProps() {
        const BB = this.core.yjB();
        return this.afterCall(), BB
      }
      salvageRecipe(BB) {
        const OB = this.core.CQB(BB);
        return this.afterCall(), OB
      }
      craftingView(BB, OB, GB) {
        const YB = this.core.aQB(BB, OB, GB);
        return this.afterCall(), YB
      }
      directorView() {
        const BB = this.core.LQB();
        return this.afterCall(), BB
      }
      directorDefaultPose() {
        const BB = this.core.XQB();
        return this.afterCall(), BB
      }
      directorEntity(BB) {
        const OB = this.core.gQB(BB);
        return this.afterCall(), OB
      }
      directorPose(BB, OB, GB, YB, DB, QB) {
        const oB = this.core.wQB(BB, OB, GB, YB, DB, QB);
        return this.afterCall(), oB
      }
      passTimings(BB) {
        const OB = this.core.PjB(BB);
        return this.afterCall(), OB
      }
      drawCensus() {
        const BB = this.core.boB();
        return this.afterCall(), BB
      }
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);